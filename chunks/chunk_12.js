    }), r
  }
  Ds(e, n, r, i) {
    if (e.limit === null) return !1;
    if (r.size !== n.size) return !0;
    const a = e.limitType === "F" ? n.last() : n.first();
    return !!a && (a.hasPendingWrites || a.version.compareTo(i) > 0)
  }
  ws(e, n, r) {
    return Xs() <= De.DEBUG && U1("QueryEngine", "Using full collection scan to execute query:", Js(n)), this.gs.getDocumentsMatchingQuery(e, n, Xi.min(), r)
  }
  vs(e, n, r, i) {
    return this.gs.getDocumentsMatchingQuery(e, r, i).next(a => (n.forEach(l => {
      a = a.insert(l.key, l)
    }), a))
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N9 = "LocalStore",
  jA = 3e8;
class VA {
  constructor(e, n, r, i) {
    this.persistence = e, this.Cs = n, this.serializer = i, this.Fs = new St(xe), this.Ms = new is(a => x9(a), S9), this.xs = new Map, this.Os = e.getRemoteDocumentCache(), this.hi = e.getTargetCache(), this.Ti = e.getBundleCache(), this.Ns(r)
  }
  Ns(e) {
    this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e), this.indexManager = this.persistence.getIndexManager(e), this.mutationQueue = this.persistence.getMutationQueue(e, this.indexManager), this.localDocuments = new CA(this.Os, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.Os.setIndexManager(this.indexManager), this.Cs.initialize(this.localDocuments, this.indexManager)
  }
  collectGarbage(e) {
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", n => e.collect(n, this.Fs))
  }
}

function FA(t, e, n, r) {
  return new VA(t, e, n, r)
}
async function R8(t, e) {
  const n = ge(t);
  return await n.persistence.runTransaction("Handle user change", "readonly", r => {
    let i;
    return n.mutationQueue.getAllMutationBatches(r).next(a => (i = a, n.Ns(e), n.mutationQueue.getAllMutationBatches(r))).next(a => {
      const l = [],
        c = [];
      let h = Ae();
      for (const p of i) {
        l.push(p.batchId);
        for (const m of p.mutations) h = h.add(m.key)
      }
      for (const p of a) {
        c.push(p.batchId);
        for (const m of p.mutations) h = h.add(m.key)
      }
      return n.localDocuments.getDocuments(r, h).next(p => ({
        Bs: p,
        removedBatchIds: l,
        addedBatchIds: c
      }))
    })
  })
}

function BA(t, e) {
  const n = ge(t);
  return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", r => {
    const i = e.batch.keys(),
      a = n.Os.newChangeBuffer({
        trackRemovals: !0
      });
    return function(c, h, p, m) {
      const y = p.batch,
        v = y.keys();
      let C = g1.resolve();
      return v.forEach(P => {
        C = C.next(() => m.getEntry(h, P)).next(k => {
          const R = p.docVersions.get(P);
          Ke(R !== null, 48541), k.version.compareTo(R) < 0 && (y.applyToRemoteDocument(k, p), k.isValidDocument() && (k.setReadTime(p.commitVersion), m.addEntry(k)))
        })
      }), C.next(() => c.mutationQueue.removeMutationBatch(h, y))
    }(n, r, e, a).next(() => a.apply(r)).next(() => n.mutationQueue.performConsistencyCheck(r)).next(() => n.documentOverlayCache.removeOverlaysForBatchId(r, i, e.batch.batchId)).next(() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r, function(c) {
      let h = Ae();
      for (let p = 0; p < c.mutationResults.length; ++p) c.mutationResults[p].transformResults.length > 0 && (h = h.add(c.batch.mutations[p].key));
      return h
    }(e))).next(() => n.localDocuments.getDocuments(r, i))
  })
}

function N8(t) {
  const e = ge(t);
  return e.persistence.runTransaction("Get last remote snapshot version", "readonly", n => e.hi.getLastRemoteSnapshotVersion(n))
}

function $A(t, e) {
  const n = ge(t),
    r = e.snapshotVersion;
  let i = n.Fs;
  return n.persistence.runTransaction("Apply remote event", "readwrite-primary", a => {
    const l = n.Os.newChangeBuffer({
      trackRemovals: !0
    });
    i = n.Fs;
    const c = [];
    e.targetChanges.forEach((m, y) => {
      const v = i.get(y);
      if (!v) return;
      c.push(n.hi.removeMatchingKeys(a, m.removedDocuments, y).next(() => n.hi.addMatchingKeys(a, m.addedDocuments, y)));
      let C = v.withSequenceNumber(a.currentSequenceNumber);
      e.targetMismatches.get(y) !== null ? C = C.withResumeToken(Sn.EMPTY_BYTE_STRING, pe.min()).withLastLimboFreeSnapshotVersion(pe.min()) : m.resumeToken.approximateByteSize() > 0 && (C = C.withResumeToken(m.resumeToken, r)), i = i.insert(y, C),
        function(k, R, W) {
          return k.resumeToken.approximateByteSize() === 0 || R.snapshotVersion.toMicroseconds() - k.snapshotVersion.toMicroseconds() >= jA ? !0 : W.addedDocuments.size + W.modifiedDocuments.size + W.removedDocuments.size > 0
        }(v, C, m) && c.push(n.hi.updateTargetData(a, C))
    });
    let h = di(),
      p = Ae();
    if (e.documentUpdates.forEach(m => {
        e.resolvedLimboDocuments.has(m) && c.push(n.persistence.referenceDelegate.updateLimboDocument(a, m))
      }), c.push(zA(a, l, e.documentUpdates).next(m => {
        h = m.Ls, p = m.ks
      })), !r.isEqual(pe.min())) {
      const m = n.hi.getLastRemoteSnapshotVersion(a).next(y => n.hi.setTargetsMetadata(a, a.currentSequenceNumber, r));
      c.push(m)
    }
    return g1.waitFor(c).next(() => l.apply(a)).next(() => n.localDocuments.getLocalViewOfDocuments(a, h, p)).next(() => h)
  }).then(a => (n.Fs = i, a))
}

function zA(t, e, n) {
  let r = Ae(),
    i = Ae();
  return n.forEach(a => r = r.add(a)), e.getEntries(t, r).next(a => {
    let l = di();
    return n.forEach((c, h) => {
      const p = a.get(c);
      h.isFoundDocument() !== p.isFoundDocument() && (i = i.add(c)), h.isNoDocument() && h.version.isEqual(pe.min()) ? (e.removeEntry(c, h.readTime), l = l.insert(c, h)) : !p.isValidDocument() || h.version.compareTo(p.version) > 0 || h.version.compareTo(p.version) === 0 && p.hasPendingWrites ? (e.addEntry(h), l = l.insert(c, h)) : U1(N9, "Ignoring outdated watch update for ", c, ". Current version:", p.version, " Watch version:", h.version)
    }), {
      Ls: l,
      ks: i
    }
  })
}

function UA(t, e) {
  const n = ge(t);
  return n.persistence.runTransaction("Get next mutation batch", "readonly", r => (e === void 0 && (e = w9), n.mutationQueue.getNextMutationBatchAfterBatchId(r, e)))
}

function WA(t, e) {
  const n = ge(t);
  return n.persistence.runTransaction("Allocate target", "readwrite", r => {
    let i;
    return n.hi.getTargetData(r, e).next(a => a ? (i = a, g1.resolve(i)) : n.hi.allocateTargetId(r).next(l => (i = new $i(e, l, "TargetPurposeListen", r.currentSequenceNumber), n.hi.addTargetData(r, i).next(() => i))))
  }).then(r => {
    const i = n.Fs.get(r.targetId);
    return (i === null || r.snapshotVersion.compareTo(i.snapshotVersion) > 0) && (n.Fs = n.Fs.insert(r.targetId, r), n.Ms.set(e, r.targetId)), r
  })
}
async function Eh(t, e, n) {
  const r = ge(t),
    i = r.Fs.get(e),
    a = n ? "readwrite" : "readwrite-primary";
  try {
    n || await r.persistence.runTransaction("Release target", a, l => r.persistence.referenceDelegate.removeTarget(l, i))
  } catch (l) {
    if (!Io(l)) throw l;
    U1(N9, `Failed to update sequence numbers for target ${e}: ${l}`)
  }
  r.Fs = r.Fs.remove(e), r.Ms.delete(i.target)
}

function Wm(t, e, n) {
  const r = ge(t);
  let i = pe.min(),
    a = Ae();
  return r.persistence.runTransaction("Execute query", "readwrite", l => function(h, p, m) {
    const y = ge(h),
      v = y.Ms.get(m);
    return v !== void 0 ? g1.resolve(y.Fs.get(v)) : y.hi.getTargetData(p, m)
  }(r, l, A2(e)).next(c => {
    if (c) return i = c.lastLimboFreeSnapshotVersion, r.hi.getMatchingKeysForTargetId(l, c.targetId).next(h => {
      a = h
    })
  }).next(() => r.Cs.getDocumentsMatchingQuery(l, e, n ? i : pe.min(), n ? a : Ae())).next(c => (HA(r, IP(e), c), {
    documents: c,
    qs: a
  })))
}

function HA(t, e, n) {
  let r = t.xs.get(e) || pe.min();
  n.forEach((i, a) => {
    a.readTime.compareTo(r) > 0 && (r = a.readTime)
  }), t.xs.set(e, r)
}
class Hm {
  constructor() {
    this.activeTargetIds = OP()
  }
  Gs(e) {
    this.activeTargetIds = this.activeTargetIds.add(e)
  }
  zs(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e)
  }
  Ws() {
    const e = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now()
    };
    return JSON.stringify(e)
  }
}
class qA {
  constructor() {
    this.Fo = new Hm, this.Mo = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null
  }
  addPendingMutation(e) {}
  updateMutationState(e, n, r) {}
  addLocalQueryTarget(e, n = !0) {
    return n && this.Fo.Gs(e), this.Mo[e] || "not-current"
  }
  updateQueryState(e, n, r) {
    this.Mo[e] = n
  }
  removeLocalQueryTarget(e) {
    this.Fo.zs(e)
  }
  isLocalQueryTarget(e) {
    return this.Fo.activeTargetIds.has(e)
  }
  clearQueryState(e) {
    delete this.Mo[e]
  }
  getAllActiveQueryTargets() {
    return this.Fo.activeTargetIds
  }
  isActiveQueryTarget(e) {
    return this.Fo.activeTargetIds.has(e)
  }
  start() {
    return this.Fo = new Hm, Promise.resolve()
  }
  handleUserChange(e, n, r) {}
  setOnlineState(e) {}
  shutdown() {}
  writeSequenceNumber(e) {}
  notifyBundleLoaded(e) {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class GA {
  xo(e) {}
  shutdown() {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qm = "ConnectivityMonitor";
class Gm {
  constructor() {
    this.Oo = () => this.No(), this.Bo = () => this.Lo(), this.ko = [], this.qo()
  }
  xo(e) {
    this.ko.push(e)
  }
  shutdown() {
    window.removeEventListener("online", this.Oo), window.removeEventListener("offline", this.Bo)
  }
  qo() {
    window.addEventListener("online", this.Oo), window.addEventListener("offline", this.Bo)
  }
  No() {
    U1(qm, "Network connectivity changed: AVAILABLE");
    for (const e of this.ko) e(0)
  }
  Lo() {
    U1(qm, "Network connectivity changed: UNAVAILABLE");
    for (const e of this.ko) e(1)
  }
  static C() {
    return typeof window < "u" && window.addEventListener !== void 0 && window.removeEventListener !== void 0
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ml = null;

function Th() {
  return Ml === null ? Ml = function() {
    return 268435456 + Math.round(2147483648 * Math.random())
  }() : Ml++, "0x" + Ml.toString(16)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v4 = "RestConnection",
  KA = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery",
    RunAggregationQuery: "runAggregationQuery"
  };
class QA {
  get Qo() {
    return !1
  }
  constructor(e) {
    this.databaseInfo = e, this.databaseId = e.databaseId;
    const n = e.ssl ? "https" : "http",
      r = encodeURIComponent(this.databaseId.projectId),
      i = encodeURIComponent(this.databaseId.database);
    this.$o = n + "://" + e.host, this.Uo = `projects/${r}/databases/${i}`, this.Ko = this.databaseId.database === yu ? `project_id=${r}` : `project_id=${r}&database_id=${i}`
  }
  Wo(e, n, r, i, a) {
    const l = Th(),
      c = this.Go(e, n.toUriEncodedString());
    U1(v4, `Sending RPC '${e}' ${l}:`, c, r);
    const h = {
      "google-cloud-resource-prefix": this.Uo,
      "x-goog-request-params": this.Ko
    };
    this.zo(h, i, a);
    const {
      host: p
    } = new URL(c), m = c0(p);
    return this.jo(e, c, h, r, m).then(y => (U1(v4, `Received RPC '${e}' ${l}: `, y), y), y => {
      throw Yi(v4, `RPC '${e}' ${l} failed with error: `, y, "url: ", c, "request:", r), y
    })
  }
  Jo(e, n, r, i, a, l) {
    return this.Wo(e, n, r, i, a)
  }
  zo(e, n, r) {
    e["X-Goog-Api-Client"] = function() {
      return "gl-js/ fire/" + Po
    }(), e["Content-Type"] = "text/plain", this.databaseInfo.appId && (e["X-Firebase-GMPID"] = this.databaseInfo.appId), n && n.headers.forEach((i, a) => e[a] = i), r && r.headers.forEach((i, a) => e[a] = i)
  }
  Go(e, n) {
    const r = KA[e];
    return `${this.$o}/v1/${n}:${r}`
  }
  terminate() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class YA {
  constructor(e) {
    this.Ho = e.Ho, this.Yo = e.Yo
  }
  Zo(e) {
    this.Xo = e
  }
  e_(e) {
    this.t_ = e
  }
  n_(e) {
    this.r_ = e
  }
  onMessage(e) {
    this.i_ = e
  }
  close() {
    this.Yo()
  }
  send(e) {
    this.Ho(e)
  }
  s_() {
    this.Xo()
  }
  o_() {
    this.t_()
  }
  __(e) {
    this.r_(e)
  }
  a_(e) {
    this.i_(e)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rn = "WebChannelConnection";
class XA extends QA {
  constructor(e) {
    super(e), this.u_ = [], this.forceLongPolling = e.forceLongPolling, this.autoDetectLongPolling = e.autoDetectLongPolling, this.useFetchStreams = e.useFetchStreams, this.longPollingOptions = e.longPollingOptions
  }
  jo(e, n, r, i, a) {
    const l = Th();
    return new Promise((c, h) => {
      const p = new Lv;
      p.setWithCredentials(!0), p.listenOnce(Mv.COMPLETE, () => {
        try {
          switch (p.getLastErrorCode()) {
            case Ql.NO_ERROR:
              const y = p.getResponseJson();
              U1(Rn, `XHR for RPC '${e}' ${l} received:`, JSON.stringify(y)), c(y);
              break;
            case Ql.TIMEOUT:
              U1(Rn, `RPC '${e}' ${l} timed out`), h(new W1(m1.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case Ql.HTTP_ERROR:
              const v = p.getStatus();
              if (U1(Rn, `RPC '${e}' ${l} failed with status:`, v, "response text:", p.getResponseText()), v > 0) {
                let C = p.getResponseJson();
                Array.isArray(C) && (C = C[0]);
                const P = C == null ? void 0 : C.error;
                if (P && P.status && P.message) {
                  const k = function(W) {
                    const q = W.toLowerCase().replace(/_/g, "-");
                    return Object.values(m1).indexOf(q) >= 0 ? q : m1.UNKNOWN
                  }(P.status);
                  h(new W1(k, P.message))
                } else h(new W1(m1.UNKNOWN, "Server responded with status " + p.getStatus()))
              } else h(new W1(m1.UNAVAILABLE, "Connection failed."));
              break;
            default:
              ue(9055, {
                c_: e,
                streamId: l,
                l_: p.getLastErrorCode(),
                h_: p.getLastError()
              })
          }
        } finally {
          U1(Rn, `RPC '${e}' ${l} completed.`)
        }
      });
      const m = JSON.stringify(i);
      U1(Rn, `RPC '${e}' ${l} sending request:`, i), p.send(n, "POST", m, r, 15)
    })
  }
  P_(e, n, r) {
    const i = Th(),
      a = [this.$o, "/", "google.firestore.v1.Firestore", "/", e, "/channel"],
      l = jv(),
      c = Ov(),
      h = {
        httpSessionIdParam: "gsessionid",
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: {
          forwardChannelRequestTimeoutMs: 6e5
        },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling
      },
      p = this.longPollingOptions.timeoutSeconds;
    p !== void 0 && (h.longPollingTimeout = Math.round(1e3 * p)), this.useFetchStreams && (h.useFetchStreams = !0), this.zo(h.initMessageHeaders, n, r), h.encodeInitMessageHeaders = !0;
    const m = a.join("");
    U1(Rn, `Creating RPC '${e}' stream ${i}: ${m}`, h);
    const y = l.createWebChannel(m, h);
    this.T_(y);
    let v = !1,
      C = !1;
    const P = new YA({
        Ho: R => {
          C ? U1(Rn, `Not sending because RPC '${e}' stream ${i} is closed:`, R) : (v || (U1(Rn, `Opening RPC '${e}' stream ${i} transport.`), y.open(), v = !0), U1(Rn, `RPC '${e}' stream ${i} sending:`, R), y.send(R))
        },
        Yo: () => y.close()
      }),
      k = (R, W, q) => {
        R.listen(W, U => {
          try {
            q(U)
          } catch (H) {
            setTimeout(() => {
              throw H
            }, 0)
          }
        })
      };
    return k(y, ba.EventType.OPEN, () => {
      C || (U1(Rn, `RPC '${e}' stream ${i} transport opened.`), P.s_())
    }), k(y, ba.EventType.CLOSE, () => {
      C || (C = !0, U1(Rn, `RPC '${e}' stream ${i} transport closed`), P.__(), this.I_(y))
    }), k(y, ba.EventType.ERROR, R => {
      C || (C = !0, Yi(Rn, `RPC '${e}' stream ${i} transport errored. Name:`, R.name, "Message:", R.message), P.__(new W1(m1.UNAVAILABLE, "The operation could not be completed")))
    }), k(y, ba.EventType.MESSAGE, R => {
      var W;
      if (!C) {
        const q = R.data[0];
        Ke(!!q, 16349);
        const U = q,
          H = (U == null ? void 0 : U.error) || ((W = U[0]) === null || W === void 0 ? void 0 : W.error);
        if (H) {
          U1(Rn, `RPC '${e}' stream ${i} received error:`, H);
          const $ = H.status;
          let X = function(j) {
              const x = Wt[j];
              if (x !== void 0) return w8(x)
            }($),
            D = H.message;
          X === void 0 && (X = m1.INTERNAL, D = "Unknown error status: " + $ + " with message " + H.message), C = !0, P.__(new W1(X, D)), y.close()
        } else U1(Rn, `RPC '${e}' stream ${i} received:`, q), P.a_(q)
      }
    }), k(c, Dv.STAT_EVENT, R => {
      R.stat === hh.PROXY ? U1(Rn, `RPC '${e}' stream ${i} detected buffering proxy`) : R.stat === hh.NOPROXY && U1(Rn, `RPC '${e}' stream ${i} detected no buffering proxy`)
    }), setTimeout(() => {
      P.o_()
    }, 0), P
  }
  terminate() {
    this.u_.forEach(e => e.close()), this.u_ = []
  }
  T_(e) {
    this.u_.push(e)
  }
  I_(e) {
    this.u_ = this.u_.filter(n => n === e)
  }
}

function w4() {
  return typeof document < "u" ? document : null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lc(t) {
  return new tA(t, !0)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L8 {
  constructor(e, n, r = 1e3, i = 1.5, a = 6e4) {
    this.Fi = e, this.timerId = n, this.d_ = r, this.E_ = i, this.A_ = a, this.R_ = 0, this.V_ = null, this.m_ = Date.now(), this.reset()
  }
  reset() {
    this.R_ = 0
  }
  f_() {
    this.R_ = this.A_
  }
  g_(e) {
    this.cancel();
    const n = Math.floor(this.R_ + this.p_()),
      r = Math.max(0, Date.now() - this.m_),
      i = Math.max(0, n - r);
    i > 0 && U1("ExponentialBackoff", `Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`), this.V_ = this.Fi.enqueueAfterDelay(this.timerId, i, () => (this.m_ = Date.now(), e())), this.R_ *= this.E_, this.R_ < this.d_ && (this.R_ = this.d_), this.R_ > this.A_ && (this.R_ = this.A_)
  }
  y_() {
    this.V_ !== null && (this.V_.skipDelay(), this.V_ = null)
  }
  cancel() {
    this.V_ !== null && (this.V_.cancel(), this.V_ = null)
  }
  p_() {
    return (Math.random() - .5) * this.R_
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Km = "PersistentStream";
class M8 {
  constructor(e, n, r, i, a, l, c, h) {
    this.Fi = e, this.w_ = r, this.S_ = i, this.connection = a, this.authCredentialsProvider = l, this.appCheckCredentialsProvider = c, this.listener = h, this.state = 0, this.b_ = 0, this.D_ = null, this.v_ = null, this.stream = null, this.C_ = 0, this.F_ = new L8(e, n)
  }
  M_() {
    return this.state === 1 || this.state === 5 || this.x_()
  }
  x_() {
    return this.state === 2 || this.state === 3
  }
  start() {
    this.C_ = 0, this.state !== 4 ? this.auth() : this.O_()
  }
  async stop() {
    this.M_() && await this.close(0)
  }
  N_() {
    this.state = 0, this.F_.reset()
  }
  B_() {
    this.x_() && this.D_ === null && (this.D_ = this.Fi.enqueueAfterDelay(this.w_, 6e4, () => this.L_()))
  }
  k_(e) {
    this.q_(), this.stream.send(e)
  }
  async L_() {
    if (this.x_()) return this.close(0)
  }
  q_() {
    this.D_ && (this.D_.cancel(), this.D_ = null)
  }
  Q_() {
    this.v_ && (this.v_.cancel(), this.v_ = null)
  }
  async close(e, n) {
    this.q_(), this.Q_(), this.F_.cancel(), this.b_++, e !== 4 ? this.F_.reset() : n && n.code === m1.RESOURCE_EXHAUSTED ? (ci(n.toString()), ci("Using maximum backoff delay to prevent overloading the backend."), this.F_.f_()) : n && n.code === m1.UNAUTHENTICATED && this.state !== 3 && (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), this.stream !== null && (this.U_(), this.stream.close(), this.stream = null), this.state = e, await this.listener.n_(n)
  }
  U_() {}
  auth() {
    this.state = 1;
    const e = this.K_(this.b_),
      n = this.b_;
    Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([r, i]) => {
      this.b_ === n && this.W_(r, i)
    }, r => {
      e(() => {
        const i = new W1(m1.UNKNOWN, "Fetching auth token failed: " + r.message);
        return this.G_(i)
      })
    })
  }
  W_(e, n) {
    const r = this.K_(this.b_);
    this.stream = this.z_(e, n), this.stream.Zo(() => {
      r(() => this.listener.Zo())
    }), this.stream.e_(() => {
      r(() => (this.state = 2, this.v_ = this.Fi.enqueueAfterDelay(this.S_, 1e4, () => (this.x_() && (this.state = 3), Promise.resolve())), this.listener.e_()))
    }), this.stream.n_(i => {
      r(() => this.G_(i))
    }), this.stream.onMessage(i => {
      r(() => ++this.C_ == 1 ? this.j_(i) : this.onNext(i))
    })
  }
  O_() {
    this.state = 5, this.F_.g_(async () => {
      this.state = 0, this.start()
    })
  }
  G_(e) {
    return U1(Km, `close with error: ${e}`), this.stream = null, this.close(4, e)
  }
  K_(e) {
    return n => {
      this.Fi.enqueueAndForget(() => this.b_ === e ? n() : (U1(Km, "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()))
    }
  }
}
class JA extends M8 {
  constructor(e, n, r, i, a, l) {
    super(e, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", n, r, i, l), this.serializer = a
  }
  z_(e, n) {
    return this.connection.P_("Listen", e, n)
  }
  j_(e) {
    return this.onNext(e)
  }
  onNext(e) {
    this.F_.reset();
    const n = iA(this.serializer, e),
      r = function(a) {
        if (!("targetChange" in a)) return pe.min();
        const l = a.targetChange;
        return l.targetIds && l.targetIds.length ? pe.min() : l.readTime ? I2(l.readTime) : pe.min()
      }(e);
    return this.listener.J_(n, r)
  }
  H_(e) {
    const n = {};
    n.database = Sh(this.serializer), n.addTarget = function(a, l) {
      let c;
      const h = l.target;
      if (c = yh(h) ? {
          documents: aA(a, h)
        } : {
          query: lA(a, h).Vt
        }, c.targetId = l.targetId, l.resumeToken.approximateByteSize() > 0) {
        c.resumeToken = x8(a, l.resumeToken);
        const p = bh(a, l.expectedCount);
        p !== null && (c.expectedCount = p)
      } else if (l.snapshotVersion.compareTo(pe.min()) > 0) {
        c.readTime = _u(a, l.snapshotVersion.toTimestamp());
        const p = bh(a, l.expectedCount);
        p !== null && (c.expectedCount = p)
      }
      return c
    }(this.serializer, e);
    const r = cA(this.serializer, e);
    r && (n.labels = r), this.k_(n)
  }
  Y_(e) {
    const n = {};
    n.database = Sh(this.serializer), n.removeTarget = e, this.k_(n)
  }
}
class ZA extends M8 {
  constructor(e, n, r, i, a, l) {
    super(e, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", n, r, i, l), this.serializer = a
  }
  get Z_() {
    return this.C_ > 0
  }
  start() {
    this.lastStreamToken = void 0, super.start()
  }
  U_() {
    this.Z_ && this.X_([])
  }
  z_(e, n) {
    return this.connection.P_("Write", e, n)
  }
  j_(e) {
    return Ke(!!e.streamToken, 31322), this.lastStreamToken = e.streamToken, Ke(!e.writeResults || e.writeResults.length === 0, 55816), this.listener.ea()
  }
  onNext(e) {
    Ke(!!e.streamToken, 12678), this.lastStreamToken = e.streamToken, this.F_.reset();
    const n = oA(e.writeResults, e.commitTime),
      r = I2(e.commitTime);
    return this.listener.ta(r, n)
  }
  na() {
    const e = {};
    e.database = Sh(this.serializer), this.k_(e)
  }
  X_(e) {
    const n = {
      streamToken: this.lastStreamToken,
      writes: e.map(r => sA(this.serializer, r))
    };
    this.k_(n)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eI {}
class tI extends eI {
  constructor(e, n, r, i) {
    super(), this.authCredentials = e, this.appCheckCredentials = n, this.connection = r, this.serializer = i, this.ra = !1
  }
  ia() {
    if (this.ra) throw new W1(m1.FAILED_PRECONDITION, "The client has already been terminated.")
  }
  Wo(e, n, r, i) {
    return this.ia(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([a, l]) => this.connection.Wo(e, _h(n, r), i, a, l)).catch(a => {
      throw a.name === "FirebaseError" ? (a.code === m1.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), a) : new W1(m1.UNKNOWN, a.toString())
    })
  }
  Jo(e, n, r, i, a) {
    return this.ia(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([l, c]) => this.connection.Jo(e, _h(n, r), i, l, c, a)).catch(l => {
      throw l.name === "FirebaseError" ? (l.code === m1.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), l) : new W1(m1.UNKNOWN, l.toString())
    })
  }
  terminate() {
    this.ra = !0, this.connection.terminate()
  }
}
class nI {
  constructor(e, n) {
    this.asyncQueue = e, this.onlineStateHandler = n, this.state = "Unknown", this.sa = 0, this.oa = null, this._a = !0
  }
  aa() {
    this.sa === 0 && (this.ua("Unknown"), this.oa = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.oa = null, this.ca("Backend didn't respond within 10 seconds."), this.ua("Offline"), Promise.resolve())))
  }
  la(e) {
    this.state === "Online" ? this.ua("Unknown") : (this.sa++, this.sa >= 1 && (this.ha(), this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`), this.ua("Offline")))
  }
  set(e) {
    this.ha(), this.sa = 0, e === "Online" && (this._a = !1), this.ua(e)
  }
  ua(e) {
    e !== this.state && (this.state = e, this.onlineStateHandler(e))
  }
  ca(e) {
    const n = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this._a ? (ci(n), this._a = !1) : U1("OnlineStateTracker", n)
  }
  ha() {
    this.oa !== null && (this.oa.cancel(), this.oa = null)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Y3 = "RemoteStore";
class rI {
  constructor(e, n, r, i, a) {
    this.localStore = e, this.datastore = n, this.asyncQueue = r, this.remoteSyncer = {}, this.Pa = [], this.Ta = new Map, this.Ia = new Set, this.da = [], this.Ea = a, this.Ea.xo(l => {
      r.enqueueAndForget(async () => {
        os(this) && (U1(Y3, "Restarting streams for network reachability change."), await async function(h) {
          const p = ge(h);
          p.Ia.add(4), await p0(p), p.Aa.set("Unknown"), p.Ia.delete(4), await uc(p)
        }(this))
      })
    }), this.Aa = new nI(r, i)
  }
}
async function uc(t) {
  if (os(t))
    for (const e of t.da) await e(!0)
}
async function p0(t) {
  for (const e of t.da) await e(!1)
}

function D8(t, e) {
  const n = ge(t);
  n.Ta.has(e.targetId) || (n.Ta.set(e.targetId, e), O9(n) ? D9(n) : No(n).x_() && M9(n, e))
}

function L9(t, e) {
  const n = ge(t),
    r = No(n);
  n.Ta.delete(e), r.x_() && O8(n, e), n.Ta.size === 0 && (r.x_() ? r.B_() : os(n) && n.Aa.set("Unknown"))
}

function M9(t, e) {
  if (t.Ra.$e(e.targetId), e.resumeToken.approximateByteSize() > 0 || e.snapshotVersion.compareTo(pe.min()) > 0) {
    const n = t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;
    e = e.withExpectedCount(n)
  }
  No(t).H_(e)
}

function O8(t, e) {
  t.Ra.$e(e), No(t).Y_(e)
}

function D9(t) {
  t.Ra = new XP({
    getRemoteKeysForTarget: e => t.remoteSyncer.getRemoteKeysForTarget(e),
    Et: e => t.Ta.get(e) || null,
    lt: () => t.datastore.serializer.databaseId
  }), No(t).start(), t.Aa.aa()
}

function O9(t) {
  return os(t) && !No(t).M_() && t.Ta.size > 0
}

function os(t) {
  return ge(t).Ia.size === 0
}

function j8(t) {
  t.Ra = void 0
}
async function iI(t) {
  t.Aa.set("Online")
}
async function sI(t) {
  t.Ta.forEach((e, n) => {
    M9(t, e)
  })
}
async function oI(t, e) {
  j8(t), O9(t) ? (t.Aa.la(e), D9(t)) : t.Aa.set("Unknown")
}
async function aI(t, e, n) {
  if (t.Aa.set("Online"), e instanceof _8 && e.state === 2 && e.cause) try {
    await async function(i, a) {
      const l = a.cause;
      for (const c of a.targetIds) i.Ta.has(c) && (await i.remoteSyncer.rejectListen(c, l), i.Ta.delete(c), i.Ra.removeTarget(c))
    }(t, e)
  } catch (r) {
    U1(Y3, "Failed to remove targets %s: %s ", e.targetIds.join(","), r), await Su(t, r)
  } else if (e instanceof Zl ? t.Ra.Ye(e) : e instanceof b8 ? t.Ra.it(e) : t.Ra.et(e), !n.isEqual(pe.min())) try {
    const r = await N8(t.localStore);
    n.compareTo(r) >= 0 && await
    function(a, l) {
      const c = a.Ra.Pt(l);
      return c.targetChanges.forEach((h, p) => {
        if (h.resumeToken.approximateByteSize() > 0) {
          const m = a.Ta.get(p);
          m && a.Ta.set(p, m.withResumeToken(h.resumeToken, l))
        }
      }), c.targetMismatches.forEach((h, p) => {
        const m = a.Ta.get(h);
        if (!m) return;
        a.Ta.set(h, m.withResumeToken(Sn.EMPTY_BYTE_STRING, m.snapshotVersion)), O8(a, h);
        const y = new $i(m.target, h, p, m.sequenceNumber);
        M9(a, y)
      }), a.remoteSyncer.applyRemoteEvent(c)
    }(t, n)
  } catch (r) {
    U1(Y3, "Failed to raise snapshot:", r), await Su(t, r)
  }
}
async function Su(t, e, n) {
  if (!Io(e)) throw e;
  t.Ia.add(1), await p0(t), t.Aa.set("Offline"), n || (n = () => N8(t.localStore)), t.asyncQueue.enqueueRetryable(async () => {
    U1(Y3, "Retrying IndexedDB access"), await n(), t.Ia.delete(1), await uc(t)
  })
}

function V8(t, e) {
  return e().catch(n => Su(t, n, e))
}
async function cc(t) {
  const e = ge(t),
    n = t3(e);
  let r = e.Pa.length > 0 ? e.Pa[e.Pa.length - 1].batchId : w9;
  for (; lI(e);) try {
    const i = await UA(e.localStore, r);
    if (i === null) {
      e.Pa.length === 0 && n.B_();
      break
    }
    r = i.batchId, uI(e, i)
  } catch (i) {
    await Su(e, i)
  }
  F8(e) && B8(e)
}

function lI(t) {
  return os(t) && t.Pa.length < 10
}

function uI(t, e) {
  t.Pa.push(e);
  const n = t3(t);
  n.x_() && n.Z_ && n.X_(e.mutations)
}

function F8(t) {
  return os(t) && !t3(t).M_() && t.Pa.length > 0
}

function B8(t) {
  t3(t).start()
}
async function cI(t) {
  t3(t).na()
}
async function dI(t) {
  const e = t3(t);
  for (const n of t.Pa) e.X_(n.mutations)
}
async function hI(t, e, n) {
  const r = t.Pa.shift(),
    i = C9.from(r, e, n);
  await V8(t, () => t.remoteSyncer.applySuccessfulWrite(i)), await cc(t)
}
async function fI(t, e) {
  e && t3(t).Z_ && await async function(r, i) {
    if (function(l) {
        return QP(l) && l !== m1.ABORTED
      }(i.code)) {
      const a = r.Pa.shift();
      t3(r).N_(), await V8(r, () => r.remoteSyncer.rejectFailedWrite(a.batchId, i)), await cc(r)
    }
  }(t, e), F8(t) && B8(t)
}
async function Qm(t, e) {
  const n = ge(t);
  n.asyncQueue.verifyOperationInProgress(), U1(Y3, "RemoteStore received new credentials");
  const r = os(n);
  n.Ia.add(3), await p0(n), r && n.Aa.set("Unknown"), await n.remoteSyncer.handleCredentialChange(e), n.Ia.delete(3), await uc(n)
}
async function pI(t, e) {
  const n = ge(t);
  e ? (n.Ia.delete(2), await uc(n)) : e || (n.Ia.add(2), await p0(n), n.Aa.set("Unknown"))
}

function No(t) {
  return t.Va || (t.Va = function(n, r, i) {
    const a = ge(n);
    return a.ia(), new JA(r, a.connection, a.authCredentials, a.appCheckCredentials, a.serializer, i)
  }(t.datastore, t.asyncQueue, {
    Zo: iI.bind(null, t),
    e_: sI.bind(null, t),
    n_: oI.bind(null, t),
    J_: aI.bind(null, t)
  }), t.da.push(async e => {
    e ? (t.Va.N_(), O9(t) ? D9(t) : t.Aa.set("Unknown")) : (await t.Va.stop(), j8(t))
  })), t.Va
}

function t3(t) {
  return t.ma || (t.ma = function(n, r, i) {
    const a = ge(n);
    return a.ia(), new ZA(r, a.connection, a.authCredentials, a.appCheckCredentials, a.serializer, i)
  }(t.datastore, t.asyncQueue, {
    Zo: () => Promise.resolve(),
    e_: cI.bind(null, t),
    n_: fI.bind(null, t),
    ea: dI.bind(null, t),
    ta: hI.bind(null, t)
  }), t.da.push(async e => {
    e ? (t.ma.N_(), await cc(t)) : (await t.ma.stop(), t.Pa.length > 0 && (U1(Y3, `Stopping write stream with ${t.Pa.length} pending writes`), t.Pa = []))
  })), t.ma
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class j9 {
  constructor(e, n, r, i, a) {
    this.asyncQueue = e, this.timerId = n, this.targetTimeMs = r, this.op = i, this.removalCallback = a, this.deferred = new z3, this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch(l => {})
  }
  get promise() {
    return this.deferred.promise
  }
  static createAndSchedule(e, n, r, i, a) {
    const l = Date.now() + r,
      c = new j9(e, n, l, i, a);
    return c.start(r), c
  }
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e)
  }
  skipDelay() {
    return this.handleDelayElapsed()
  }
  cancel(e) {
    this.timerHandle !== null && (this.clearTimeout(), this.deferred.reject(new W1(m1.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))))
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() => this.timerHandle !== null ? (this.clearTimeout(), this.op().then(e => this.deferred.resolve(e))) : Promise.resolve())
  }
  clearTimeout() {
    this.timerHandle !== null && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null)
  }
}

function V9(t, e) {
  if (ci("AsyncQueue", `${e}: ${t}`), Io(t)) return new W1(m1.UNAVAILABLE, `${e}: ${t}`);
  throw t
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ao {
  static emptySet(e) {
    return new ao(e.comparator)
  }
  constructor(e) {
    this.comparator = e ? (n, r) => e(n, r) || Z1.comparator(n.key, r.key) : (n, r) => Z1.comparator(n.key, r.key), this.keyedMap = _a(), this.sortedSet = new St(this.comparator)
  }
  has(e) {
    return this.keyedMap.get(e) != null
  }
  get(e) {
    return this.keyedMap.get(e)
  }
  first() {
    return this.sortedSet.minKey()
  }
  last() {
    return this.sortedSet.maxKey()
  }
  isEmpty() {
    return this.sortedSet.isEmpty()
  }
  indexOf(e) {
    const n = this.keyedMap.get(e);
    return n ? this.sortedSet.indexOf(n) : -1
  }
  get size() {
    return this.sortedSet.size
  }
  forEach(e) {
    this.sortedSet.inorderTraversal((n, r) => (e(n), !1))
  }
  add(e) {
    const n = this.delete(e.key);
    return n.copy(n.keyedMap.insert(e.key, e), n.sortedSet.insert(e, null))
  }
  delete(e) {
    const n = this.get(e);
    return n ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(n)) : this
  }
  isEqual(e) {
    if (!(e instanceof ao) || this.size !== e.size) return !1;
    const n = this.sortedSet.getIterator(),
      r = e.sortedSet.getIterator();
    for (; n.hasNext();) {
      const i = n.getNext().key,
        a = r.getNext().key;
      if (!i.isEqual(a)) return !1
    }
    return !0
  }
  toString() {
    const e = [];
    return this.forEach(n => {
      e.push(n.toString())
    }), e.length === 0 ? "DocumentSet ()" : `DocumentSet (
  ` + e.join(`  
`) + `
)`
  }
  copy(e, n) {
    const r = new ao;
    return r.comparator = this.comparator, r.keyedMap = e, r.sortedSet = n, r
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ym {
  constructor() {
    this.fa = new St(Z1.comparator)
  }
  track(e) {
    const n = e.doc.key,
      r = this.fa.get(n);
    r ? e.type !== 0 && r.type === 3 ? this.fa = this.fa.insert(n, e) : e.type === 3 && r.type !== 1 ? this.fa = this.fa.insert(n, {
      type: r.type,
      doc: e.doc
    }) : e.type === 2 && r.type === 2 ? this.fa = this.fa.insert(n, {
      type: 2,
      doc: e.doc
    }) : e.type === 2 && r.type === 0 ? this.fa = this.fa.insert(n, {
      type: 0,
      doc: e.doc
    }) : e.type === 1 && r.type === 0 ? this.fa = this.fa.remove(n) : e.type === 1 && r.type === 2 ? this.fa = this.fa.insert(n, {
      type: 1,
      doc: r.doc
    }) : e.type === 0 && r.type === 1 ? this.fa = this.fa.insert(n, {
      type: 2,
      doc: e.doc
    }) : ue(63341, {
      At: e,
      ga: r
    }) : this.fa = this.fa.insert(n, e)
  }
  pa() {
    const e = [];
    return this.fa.inorderTraversal((n, r) => {
      e.push(r)
    }), e
  }
}
class wo {
  constructor(e, n, r, i, a, l, c, h, p) {
    this.query = e, this.docs = n, this.oldDocs = r, this.docChanges = i, this.mutatedKeys = a, this.fromCache = l, this.syncStateChanged = c, this.excludesMetadataChanges = h, this.hasCachedResults = p
  }
  static fromInitialDocuments(e, n, r, i, a) {
    const l = [];
    return n.forEach(c => {
      l.push({
        type: 0,
        doc: c
      })
    }), new wo(e, n, ao.emptySet(n), l, r, i, !0, !1, a)
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty()
  }
  isEqual(e) {
    if (!(this.fromCache === e.fromCache && this.hasCachedResults === e.hasCachedResults && this.syncStateChanged === e.syncStateChanged && this.mutatedKeys.isEqual(e.mutatedKeys) && rc(this.query, e.query) && this.docs.isEqual(e.docs) && this.oldDocs.isEqual(e.oldDocs))) return !1;
    const n = this.docChanges,
      r = e.docChanges;
    if (n.length !== r.length) return !1;
    for (let i = 0; i < n.length; i++)
      if (n[i].type !== r[i].type || !n[i].doc.isEqual(r[i].doc)) return !1;
    return !0
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mI {
  constructor() {
    this.ya = void 0, this.wa = []
  }
  Sa() {
    return this.wa.some(e => e.ba())
  }
}
class gI {
  constructor() {
    this.queries = Xm(), this.onlineState = "Unknown", this.Da = new Set
  }
  terminate() {
    (function(n, r) {
      const i = ge(n),
        a = i.queries;
      i.queries = Xm(), a.forEach((l, c) => {
        for (const h of c.wa) h.onError(r)
      })
    })(this, new W1(m1.ABORTED, "Firestore shutting down"))
  }
}

function Xm() {
  return new is(t => o8(t), rc)
}
async function yI(t, e) {
  const n = ge(t);
  let r = 3;
  const i = e.query;
  let a = n.queries.get(i);
  a ? !a.Sa() && e.ba() && (r = 2) : (a = new mI, r = e.ba() ? 0 : 1);
  try {
    switch (r) {
      case 0:
        a.ya = await n.onListen(i, !0);
        break;
      case 1:
        a.ya = await n.onListen(i, !1);
        break;
      case 2:
        await n.onFirstRemoteStoreListen(i)
    }
  } catch (l) {
    const c = V9(l, `Initialization of query '${Js(e.query)}' failed`);
    return void e.onError(c)
  }
  n.queries.set(i, a), a.wa.push(e), e.va(n.onlineState), a.ya && e.Ca(a.ya) && F9(n)
}
async function vI(t, e) {
  const n = ge(t),
    r = e.query;
  let i = 3;
  const a = n.queries.get(r);
  if (a) {
    const l = a.wa.indexOf(e);
    l >= 0 && (a.wa.splice(l, 1), a.wa.length === 0 ? i = e.ba() ? 0 : 1 : !a.Sa() && e.ba() && (i = 2))
  }
  switch (i) {
    case 0:
      return n.queries.delete(r), n.onUnlisten(r, !0);
    case 1:
      return n.queries.delete(r), n.onUnlisten(r, !1);
    case 2:
      return n.onLastRemoteStoreUnlisten(r);
    default:
      return
  }
}

function wI(t, e) {
  const n = ge(t);
  let r = !1;
  for (const i of e) {
    const a = i.query,
      l = n.queries.get(a);
    if (l) {
      for (const c of l.wa) c.Ca(i) && (r = !0);
      l.ya = i
    }
  }
  r && F9(n)
}

function bI(t, e, n) {
  const r = ge(t),
    i = r.queries.get(e);
  if (i)
    for (const a of i.wa) a.onError(n);
  r.queries.delete(e)
}

function F9(t) {
  t.Da.forEach(e => {
    e.next()
  })
}
var Ch, Jm;
(Jm = Ch || (Ch = {})).Fa = "default", Jm.Cache = "cache";
class _I {
  constructor(e, n, r) {
    this.query = e, this.Ma = n, this.xa = !1, this.Oa = null, this.onlineState = "Unknown", this.options = r || {}
  }
  Ca(e) {
    if (!this.options.includeMetadataChanges) {
      const r = [];
      for (const i of e.docChanges) i.type !== 3 && r.push(i);
      e = new wo(e.query, e.docs, e.oldDocs, r, e.mutatedKeys, e.fromCache, e.syncStateChanged, !0, e.hasCachedResults)
    }
    let n = !1;
    return this.xa ? this.Na(e) && (this.Ma.next(e), n = !0) : this.Ba(e, this.onlineState) && (this.La(e), n = !0), this.Oa = e, n
  }
  onError(e) {
    this.Ma.error(e)
  }
  va(e) {
    this.onlineState = e;
    let n = !1;
    return this.Oa && !this.xa && this.Ba(this.Oa, e) && (this.La(this.Oa), n = !0), n
  }
  Ba(e, n) {
    if (!e.fromCache || !this.ba()) return !0;
    const r = n !== "Offline";
    return (!this.options.ka || !r) && (!e.docs.isEmpty() || e.hasCachedResults || n === "Offline")
  }
  Na(e) {
    if (e.docChanges.length > 0) return !0;
    const n = this.Oa && this.Oa.hasPendingWrites !== e.hasPendingWrites;
    return !(!e.syncStateChanged && !n) && this.options.includeMetadataChanges === !0
  }
  La(e) {
    e = wo.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache, e.hasCachedResults), this.xa = !0, this.Ma.next(e)
  }
  ba() {
    return this.options.source !== Ch.Cache
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $8 {
  constructor(e) {
    this.key = e
  }
}
class z8 {
  constructor(e) {
    this.key = e
  }
}
class xI {
  constructor(e, n) {
    this.query = e, this.Ha = n, this.Ya = null, this.hasCachedResults = !1, this.current = !1, this.Za = Ae(), this.mutatedKeys = Ae(), this.Xa = a8(e), this.eu = new ao(this.Xa)
  }
  get tu() {
    return this.Ha
  }
  nu(e, n) {
    const r = n ? n.ru : new Ym,
      i = n ? n.eu : this.eu;
    let a = n ? n.mutatedKeys : this.mutatedKeys,
      l = i,
      c = !1;
    const h = this.query.limitType === "F" && i.size === this.query.limit ? i.last() : null,
      p = this.query.limitType === "L" && i.size === this.query.limit ? i.first() : null;
    if (e.inorderTraversal((m, y) => {
        const v = i.get(m),
          C = ic(this.query, y) ? y : null,
          P = !!v && this.mutatedKeys.has(v.key),
          k = !!C && (C.hasLocalMutations || this.mutatedKeys.has(C.key) && C.hasCommittedMutations);
        let R = !1;
        v && C ? v.data.isEqual(C.data) ? P !== k && (r.track({
          type: 3,
          doc: C
        }), R = !0) : this.iu(v, C) || (r.track({
          type: 2,
          doc: C
        }), R = !0, (h && this.Xa(C, h) > 0 || p && this.Xa(C, p) < 0) && (c = !0)) : !v && C ? (r.track({
          type: 0,
          doc: C
        }), R = !0) : v && !C && (r.track({
          type: 1,
          doc: v
        }), R = !0, (h || p) && (c = !0)), R && (C ? (l = l.add(C), a = k ? a.add(m) : a.delete(m)) : (l = l.delete(m), a = a.delete(m)))
      }), this.query.limit !== null)
      for (; l.size > this.query.limit;) {
        const m = this.query.limitType === "F" ? l.last() : l.first();
        l = l.delete(m.key), a = a.delete(m.key), r.track({
          type: 1,
          doc: m
        })
      }
    return {
      eu: l,
      ru: r,
      Ds: c,
      mutatedKeys: a
    }
  }
  iu(e, n) {
    return e.hasLocalMutations && n.hasCommittedMutations && !n.hasLocalMutations
  }
  applyChanges(e, n, r, i) {
    const a = this.eu;
    this.eu = e.eu, this.mutatedKeys = e.mutatedKeys;
    const l = e.ru.pa();
    l.sort((m, y) => function(C, P) {
      const k = R => {
        switch (R) {
          case 0:
            return 1;
          case 2:
          case 3:
            return 2;
          case 1:
            return 0;
          default:
            return ue(20277, {
              At: R
            })
        }
      };
      return k(C) - k(P)
    }(m.type, y.type) || this.Xa(m.doc, y.doc)), this.su(r), i = i != null && i;
    const c = n && !i ? this.ou() : [],
      h = this.Za.size === 0 && this.current && !i ? 1 : 0,
      p = h !== this.Ya;
    return this.Ya = h, l.length !== 0 || p ? {
      snapshot: new wo(this.query, e.eu, a, l, e.mutatedKeys, h === 0, p, !1, !!r && r.resumeToken.approximateByteSize() > 0),
      _u: c
    } : {
      _u: c
    }
  }
  va(e) {
    return this.current && e === "Offline" ? (this.current = !1, this.applyChanges({
      eu: this.eu,
      ru: new Ym,
      mutatedKeys: this.mutatedKeys,
      Ds: !1
    }, !1)) : {
      _u: []
    }
  }
  au(e) {
    return !this.Ha.has(e) && !!this.eu.has(e) && !this.eu.get(e).hasLocalMutations
  }
  su(e) {
    e && (e.addedDocuments.forEach(n => this.Ha = this.Ha.add(n)), e.modifiedDocuments.forEach(n => {}), e.removedDocuments.forEach(n => this.Ha = this.Ha.delete(n)), this.current = e.current)
  }
  ou() {
    if (!this.current) return [];
    const e = this.Za;
    this.Za = Ae(), this.eu.forEach(r => {
      this.au(r.key) && (this.Za = this.Za.add(r.key))
    });
    const n = [];
    return e.forEach(r => {
      this.Za.has(r) || n.push(new z8(r))
    }), this.Za.forEach(r => {
      e.has(r) || n.push(new $8(r))
    }), n
  }
  uu(e) {
    this.Ha = e.qs, this.Za = Ae();
    const n = this.nu(e.documents);
    return this.applyChanges(n, !0)
  }
  cu() {
    return wo.fromInitialDocuments(this.query, this.eu, this.mutatedKeys, this.Ya === 0, this.hasCachedResults)
  }
}
const B9 = "SyncEngine";
class SI {
  constructor(e, n, r) {
    this.query = e, this.targetId = n, this.view = r
  }
}
class EI {
  constructor(e) {
    this.key = e, this.lu = !1
  }
}
class TI {
  constructor(e, n, r, i, a, l) {
    this.localStore = e, this.remoteStore = n, this.eventManager = r, this.sharedClientState = i, this.currentUser = a, this.maxConcurrentLimboResolutions = l, this.hu = {}, this.Pu = new is(c => o8(c), rc), this.Tu = new Map, this.Iu = new Set, this.du = new St(Z1.comparator), this.Eu = new Map, this.Au = new A9, this.Ru = {}, this.Vu = new Map, this.mu = vo.ur(), this.onlineState = "Unknown", this.fu = void 0
  }
  get isPrimaryClient() {
    return this.fu === !0
  }
}
async function CI(t, e, n = !0) {
  const r = K8(t);
  let i;
  const a = r.Pu.get(e);
  return a ? (r.sharedClientState.addLocalQueryTarget(a.targetId), i = a.view.cu()) : i = await U8(r, e, n, !0), i
}
async function kI(t, e) {
  const n = K8(t);
  await U8(n, e, !0, !1)
}
async function U8(t, e, n, r) {
  const i = await WA(t.localStore, A2(e)),
    a = i.targetId,
    l = t.sharedClientState.addLocalQueryTarget(a, n);
  let c;
  return r && (c = await PI(t, e, a, l === "current", i.resumeToken)), t.isPrimaryClient && n && D8(t.remoteStore, i), c
}
async function PI(t, e, n, r, i) {
  t.gu = (y, v, C) => async function(k, R, W, q) {
    let U = R.view.nu(W);
    U.Ds && (U = await Wm(k.localStore, R.query, !1).then(({
      documents: D
    }) => R.view.nu(D, U)));
    const H = q && q.targetChanges.get(R.targetId),
      $ = q && q.targetMismatches.get(R.targetId) != null,
      X = R.view.applyChanges(U, k.isPrimaryClient, H, $);
    return eg(k, R.targetId, X._u), X.snapshot
  }(t, y, v, C);
  const a = await Wm(t.localStore, e, !0),
    l = new xI(e, a.qs),
    c = l.nu(a.documents),
    h = f0.createSynthesizedTargetChangeForCurrentChange(n, r && t.onlineState !== "Offline", i),
    p = l.applyChanges(c, t.isPrimaryClient, h);
  eg(t, n, p._u);
  const m = new SI(e, n, l);
  return t.Pu.set(e, m), t.Tu.has(n) ? t.Tu.get(n).push(e) : t.Tu.set(n, [e]), p.snapshot
}
async function AI(t, e, n) {
  const r = ge(t),
    i = r.Pu.get(e),
    a = r.Tu.get(i.targetId);
  if (a.length > 1) return r.Tu.set(i.targetId, a.filter(l => !rc(l, e))), void r.Pu.delete(e);
  r.isPrimaryClient ? (r.sharedClientState.removeLocalQueryTarget(i.targetId), r.sharedClientState.isActiveQueryTarget(i.targetId) || await Eh(r.localStore, i.targetId, !1).then(() => {
    r.sharedClientState.clearQueryState(i.targetId), n && L9(r.remoteStore, i.targetId), kh(r, i.targetId)
  }).catch(Ao)) : (kh(r, i.targetId), await Eh(r.localStore, i.targetId, !0))
}
async function II(t, e) {
  const n = ge(t),
    r = n.Pu.get(e),
    i = n.Tu.get(r.targetId);
  n.isPrimaryClient && i.length === 1 && (n.sharedClientState.removeLocalQueryTarget(r.targetId), L9(n.remoteStore, r.targetId))
}
async function RI(t, e, n) {
  const r = VI(t);
  try {
    const i = await
    function(l, c) {
      const h = ge(l),
        p = mt.now(),
        m = c.reduce((C, P) => C.add(P.key), Ae());
      let y, v;
      return h.persistence.runTransaction("Locally write mutations", "readwrite", C => {
        let P = di(),
          k = Ae();
        return h.Os.getEntries(C, m).next(R => {
          P = R, P.forEach((W, q) => {
            q.isValidDocument() || (k = k.add(W))
          })
        }).next(() => h.localDocuments.getOverlayedDocuments(C, P)).next(R => {
          y = R;
          const W = [];
          for (const q of c) {
            const U = WP(q, y.get(q.key).overlayedDocument);
            U != null && W.push(new ss(q.key, U, Jv(U.value.mapValue), si.exists(!0)))
          }
          return h.mutationQueue.addMutationBatch(C, p, W, c)
        }).next(R => {
          v = R;
          const W = R.applyToLocalDocumentSet(y, k);
          return h.documentOverlayCache.saveOverlays(C, R.batchId, W)
        })
      }).then(() => ({
        batchId: v.batchId,
        changes: u8(y)
      }))
    }(r.localStore, e);
    r.sharedClientState.addPendingMutation(i.batchId),
      function(l, c, h) {
        let p = l.Ru[l.currentUser.toKey()];
        p || (p = new St(xe)), p = p.insert(c, h), l.Ru[l.currentUser.toKey()] = p
      }(r, i.batchId, n), await m0(r, i.changes), await cc(r.remoteStore)
  } catch (i) {
    const a = V9(i, "Failed to persist write");
    n.reject(a)
  }
}
async function W8(t, e) {
  const n = ge(t);
  try {
    const r = await $A(n.localStore, e);
    e.targetChanges.forEach((i, a) => {
      const l = n.Eu.get(a);
      l && (Ke(i.addedDocuments.size + i.modifiedDocuments.size + i.removedDocuments.size <= 1, 22616), i.addedDocuments.size > 0 ? l.lu = !0 : i.modifiedDocuments.size > 0 ? Ke(l.lu, 14607) : i.removedDocuments.size > 0 && (Ke(l.lu, 42227), l.lu = !1))
    }), await m0(n, r, e)
  } catch (r) {
    await Ao(r)
  }
}

function Zm(t, e, n) {
  const r = ge(t);
  if (r.isPrimaryClient && n === 0 || !r.isPrimaryClient && n === 1) {
    const i = [];
    r.Pu.forEach((a, l) => {
        const c = l.view.va(e);
        c.snapshot && i.push(c.snapshot)
      }),
      function(l, c) {
        const h = ge(l);
        h.onlineState = c;
        let p = !1;
        h.queries.forEach((m, y) => {
          for (const v of y.wa) v.va(c) && (p = !0)
        }), p && F9(h)
      }(r.eventManager, e), i.length && r.hu.J_(i), r.onlineState = e, r.isPrimaryClient && r.sharedClientState.setOnlineState(e)
  }
}
async function NI(t, e, n) {
  const r = ge(t);
  r.sharedClientState.updateQueryState(e, "rejected", n);
  const i = r.Eu.get(e),
    a = i && i.key;
  if (a) {
    let l = new St(Z1.comparator);
    l = l.insert(a, On.newNoDocument(a, pe.min()));
    const c = Ae().add(a),
      h = new ac(pe.min(), new Map, new St(xe), l, c);
    await W8(r, h), r.du = r.du.remove(a), r.Eu.delete(e), $9(r)
  } else await Eh(r.localStore, e, !1).then(() => kh(r, e, n)).catch(Ao)
}
async function LI(t, e) {
  const n = ge(t),
    r = e.batch.batchId;
  try {
    const i = await BA(n.localStore, e);
    q8(n, r, null), H8(n, r), n.sharedClientState.updateMutationState(r, "acknowledged"), await m0(n, i)
  } catch (i) {
    await Ao(i)
  }
}
async function MI(t, e, n) {
  const r = ge(t);
  try {
    const i = await
    function(l, c) {
      const h = ge(l);
      return h.persistence.runTransaction("Reject batch", "readwrite-primary", p => {
        let m;
        return h.mutationQueue.lookupMutationBatch(p, c).next(y => (Ke(y !== null, 37113), m = y.keys(), h.mutationQueue.removeMutationBatch(p, y))).next(() => h.mutationQueue.performConsistencyCheck(p)).next(() => h.documentOverlayCache.removeOverlaysForBatchId(p, m, c)).next(() => h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p, m)).next(() => h.localDocuments.getDocuments(p, m))
      })
    }(r.localStore, e);
    q8(r, e, n), H8(r, e), r.sharedClientState.updateMutationState(e, "rejected", n), await m0(r, i)
  } catch (i) {
    await Ao(i)
  }
}

function H8(t, e) {
  (t.Vu.get(e) || []).forEach(n => {
    n.resolve()
  }), t.Vu.delete(e)
}

function q8(t, e, n) {
  const r = ge(t);
  let i = r.Ru[r.currentUser.toKey()];
  if (i) {
    const a = i.get(e);
    a && (n ? a.reject(n) : a.resolve(), i = i.remove(e)), r.Ru[r.currentUser.toKey()] = i
  }
}

function kh(t, e, n = null) {
  t.sharedClientState.removeLocalQueryTarget(e);
  for (const r of t.Tu.get(e)) t.Pu.delete(r), n && t.hu.pu(r, n);
  t.Tu.delete(e), t.isPrimaryClient && t.Au.zr(e).forEach(r => {
    t.Au.containsKey(r) || G8(t, r)
  })
}

function G8(t, e) {
  t.Iu.delete(e.path.canonicalString());
  const n = t.du.get(e);
  n !== null && (L9(t.remoteStore, n), t.du = t.du.remove(e), t.Eu.delete(n), $9(t))
}

function eg(t, e, n) {
  for (const r of n) r instanceof $8 ? (t.Au.addReference(r.key, e), DI(t, r)) : r instanceof z8 ? (U1(B9, "Document no longer in limbo: " + r.key), t.Au.removeReference(r.key, e), t.Au.containsKey(r.key) || G8(t, r.key)) : ue(19791, {
    yu: r
  })
}

function DI(t, e) {
  const n = e.key,
    r = n.path.canonicalString();
  t.du.get(n) || t.Iu.has(r) || (U1(B9, "New document in limbo: " + n), t.Iu.add(r), $9(t))
}

function $9(t) {
  for (; t.Iu.size > 0 && t.du.size < t.maxConcurrentLimboResolutions;) {
    const e = t.Iu.values().next().value;
    t.Iu.delete(e);
    const n = new Z1(lt.fromString(e)),
      r = t.mu.next();
    t.Eu.set(r, new EI(n)), t.du = t.du.insert(n, r), D8(t.remoteStore, new $i(A2(E9(n.path)), r, "TargetPurposeLimboResolution", ec.ue))
  }
}
async function m0(t, e, n) {
  const r = ge(t),
    i = [],
    a = [],
    l = [];
  r.Pu.isEmpty() || (r.Pu.forEach((c, h) => {
    l.push(r.gu(h, e, n).then(p => {
      var m;
      if ((p || n) && r.isPrimaryClient) {
        const y = p ? !p.fromCache : (m = n == null ? void 0 : n.targetChanges.get(h.targetId)) === null || m === void 0 ? void 0 : m.current;
        r.sharedClientState.updateQueryState(h.targetId, y ? "current" : "not-current")
      }
      if (p) {
        i.push(p);
        const y = R9.Es(h.targetId, p);
        a.push(y)
      }
    }))
  }), await Promise.all(l), r.hu.J_(i), await async function(h, p) {
    const m = ge(h);
    try {
      await m.persistence.runTransaction("notifyLocalViewChanges", "readwrite", y => g1.forEach(p, v => g1.forEach(v.Is, C => m.persistence.referenceDelegate.addReference(y, v.targetId, C)).next(() => g1.forEach(v.ds, C => m.persistence.referenceDelegate.removeReference(y, v.targetId, C)))))
    } catch (y) {
      if (!Io(y)) throw y;
      U1(N9, "Failed to update sequence numbers: " + y)
    }
    for (const y of p) {
      const v = y.targetId;
      if (!y.fromCache) {
        const C = m.Fs.get(v),
          P = C.snapshotVersion,
          k = C.withLastLimboFreeSnapshotVersion(P);
        m.Fs = m.Fs.insert(v, k)
      }
    }
  }(r.localStore, a))
}
async function OI(t, e) {
  const n = ge(t);
  if (!n.currentUser.isEqual(e)) {
    U1(B9, "User change. New user:", e.toKey());
    const r = await R8(n.localStore, e);
    n.currentUser = e,
      function(a, l) {
        a.Vu.forEach(c => {
          c.forEach(h => {
            h.reject(new W1(m1.CANCELLED, l))
          })
        }), a.Vu.clear()
      }(n, "'waitForPendingWrites' promise is rejected due to a user change."), n.sharedClientState.handleUserChange(e, r.removedBatchIds, r.addedBatchIds), await m0(n, r.Bs)
  }
}

function jI(t, e) {
  const n = ge(t),
    r = n.Eu.get(e);
  if (r && r.lu) return Ae().add(r.key);
  {
    let i = Ae();
    const a = n.Tu.get(e);
    if (!a) return i;
    for (const l of a) {
      const c = n.Pu.get(l);
      i = i.unionWith(c.view.tu)
    }
    return i
  }
}

function K8(t) {
  const e = ge(t);
  return e.remoteStore.remoteSyncer.applyRemoteEvent = W8.bind(null, e), e.remoteStore.remoteSyncer.getRemoteKeysForTarget = jI.bind(null, e), e.remoteStore.remoteSyncer.rejectListen = NI.bind(null, e), e.hu.J_ = wI.bind(null, e.eventManager), e.hu.pu = bI.bind(null, e.eventManager), e
}

function VI(t) {
  const e = ge(t);
  return e.remoteStore.remoteSyncer.applySuccessfulWrite = LI.bind(null, e), e.remoteStore.remoteSyncer.rejectFailedWrite = MI.bind(null, e), e
}
class Eu {
  constructor() {
    this.kind = "memory", this.synchronizeTabs = !1
  }
  async initialize(e) {
    this.serializer = lc(e.databaseInfo.databaseId), this.sharedClientState = this.bu(e), this.persistence = this.Du(e), await this.persistence.start(), this.localStore = this.vu(e), this.gcScheduler = this.Cu(e, this.localStore), this.indexBackfillerScheduler = this.Fu(e, this.localStore)
  }
  Cu(e, n) {
    return null
  }
  Fu(e, n) {
    return null
  }
  vu(e) {
    return FA(this.persistence, new OA, e.initialUser, this.serializer)
  }
  Du(e) {
    return new I8(I9.Vi, this.serializer)
  }
  bu(e) {
    return new qA
  }
  async terminate() {
    var e, n;
    (e = this.gcScheduler) === null || e === void 0 || e.stop(), (n = this.indexBackfillerScheduler) === null || n === void 0 || n.stop(), this.sharedClientState.shutdown(), await this.persistence.shutdown()
  }
}
Eu.provider = {
  build: () => new Eu
};
class FI extends Eu {
  constructor(e) {
    super(), this.cacheSizeBytes = e
  }
  Cu(e, n) {
    Ke(this.persistence.referenceDelegate instanceof xu, 46915);