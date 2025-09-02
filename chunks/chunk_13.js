    const r = this.persistence.referenceDelegate.garbageCollector;
    return new _A(r, e.asyncQueue, n)
  }
  Du(e) {
    const n = this.cacheSizeBytes !== void 0 ? or.withCacheSize(this.cacheSizeBytes) : or.DEFAULT;
    return new I8(r => xu.Vi(r, n), this.serializer)
  }
}
class Ph {
  async initialize(e, n) {
    this.localStore || (this.localStore = e.localStore, this.sharedClientState = e.sharedClientState, this.datastore = this.createDatastore(n), this.remoteStore = this.createRemoteStore(n), this.eventManager = this.createEventManager(n), this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs), this.sharedClientState.onlineStateHandler = r => Zm(this.syncEngine, r, 1), this.remoteStore.remoteSyncer.handleCredentialChange = OI.bind(null, this.syncEngine), await pI(this.remoteStore, this.syncEngine.isPrimaryClient))
  }
  createEventManager(e) {
    return function() {
      return new gI
    }()
  }
  createDatastore(e) {
    const n = lc(e.databaseInfo.databaseId),
      r = function(a) {
        return new XA(a)
      }(e.databaseInfo);
    return function(a, l, c, h) {
      return new tI(a, l, c, h)
    }(e.authCredentials, e.appCheckCredentials, r, n)
  }
  createRemoteStore(e) {
    return function(r, i, a, l, c) {
      return new rI(r, i, a, l, c)
    }(this.localStore, this.datastore, e.asyncQueue, n => Zm(this.syncEngine, n, 0), function() {
      return Gm.C() ? new Gm : new GA
    }())
  }
  createSyncEngine(e, n) {
    return function(i, a, l, c, h, p, m) {
      const y = new TI(i, a, l, c, h, p);
      return m && (y.fu = !0), y
    }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e.initialUser, e.maxConcurrentLimboResolutions, n)
  }
  async terminate() {
    var e, n;
    await async function(i) {
      const a = ge(i);
      U1(Y3, "RemoteStore shutting down."), a.Ia.add(5), await p0(a), a.Ea.shutdown(), a.Aa.set("Unknown")
    }(this.remoteStore), (e = this.datastore) === null || e === void 0 || e.terminate(), (n = this.eventManager) === null || n === void 0 || n.terminate()
  }
}
Ph.provider = {
  build: () => new Ph
};
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
class BI {
  constructor(e) {
    this.observer = e, this.muted = !1
  }
  next(e) {
    this.muted || this.observer.next && this.xu(this.observer.next, e)
  }
  error(e) {
    this.muted || (this.observer.error ? this.xu(this.observer.error, e) : ci("Uncaught Error in snapshot listener:", e.toString()))
  }
  Ou() {
    this.muted = !0
  }
  xu(e, n) {
    setTimeout(() => {
      this.muted || e(n)
    }, 0)
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
const n3 = "FirestoreClient";
class $I {
  constructor(e, n, r, i, a) {
    this.authCredentials = e, this.appCheckCredentials = n, this.asyncQueue = r, this.databaseInfo = i, this.user = Dn.UNAUTHENTICATED, this.clientId = v9.newId(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this._uninitializedComponentsProvider = a, this.authCredentials.start(r, async l => {
      U1(n3, "Received user=", l.uid), await this.authCredentialListener(l), this.user = l
    }), this.appCheckCredentials.start(r, l => (U1(n3, "Received new app check token=", l), this.appCheckCredentialListener(l, this.user)))
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100
    }
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new z3;
    return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
      try {
        this._onlineComponents && await this._onlineComponents.terminate(), this._offlineComponents && await this._offlineComponents.terminate(), this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), e.resolve()
      } catch (n) {
        const r = V9(n, "Failed to shutdown persistence");
        e.reject(r)
      }
    }), e.promise
  }
}
async function b4(t, e) {
  t.asyncQueue.verifyOperationInProgress(), U1(n3, "Initializing OfflineComponentProvider");
  const n = t.configuration;
  await e.initialize(n);
  let r = n.initialUser;
  t.setCredentialChangeListener(async i => {
    r.isEqual(i) || (await R8(e.localStore, i), r = i)
  }), e.persistence.setDatabaseDeletedListener(() => {
    Yi("Terminating Firestore due to IndexedDb database deletion"), t.terminate().then(() => {
      U1("Terminating Firestore due to IndexedDb database deletion completed successfully")
    }).catch(i => {
      Yi("Terminating Firestore due to IndexedDb database deletion failed", i)
    })
  }), t._offlineComponents = e
}
async function tg(t, e) {
  t.asyncQueue.verifyOperationInProgress();
  const n = await zI(t);
  U1(n3, "Initializing OnlineComponentProvider"), await e.initialize(n, t.configuration), t.setCredentialChangeListener(r => Qm(e.remoteStore, r)), t.setAppCheckTokenChangeListener((r, i) => Qm(e.remoteStore, i)), t._onlineComponents = e
}
async function zI(t) {
  if (!t._offlineComponents)
    if (t._uninitializedComponentsProvider) {
      U1(n3, "Using user provided OfflineComponentProvider");
      try {
        await b4(t, t._uninitializedComponentsProvider._offline)
      } catch (e) {
        const n = e;
        if (! function(i) {
            return i.name === "FirebaseError" ? i.code === m1.FAILED_PRECONDITION || i.code === m1.UNIMPLEMENTED : !(typeof DOMException < "u" && i instanceof DOMException) || i.code === 22 || i.code === 20 || i.code === 11
          }(n)) throw n;
        Yi("Error using user provided cache. Falling back to memory cache: " + n), await b4(t, new Eu)
      }
    } else U1(n3, "Using default OfflineComponentProvider"), await b4(t, new FI(void 0));
  return t._offlineComponents
}
async function Q8(t) {
  return t._onlineComponents || (t._uninitializedComponentsProvider ? (U1(n3, "Using user provided OnlineComponentProvider"), await tg(t, t._uninitializedComponentsProvider._online)) : (U1(n3, "Using default OnlineComponentProvider"), await tg(t, new Ph))), t._onlineComponents
}

function UI(t) {
  return Q8(t).then(e => e.syncEngine)
}
async function ng(t) {
  const e = await Q8(t),
    n = e.eventManager;
  return n.onListen = CI.bind(null, e.syncEngine), n.onUnlisten = AI.bind(null, e.syncEngine), n.onFirstRemoteStoreListen = kI.bind(null, e.syncEngine), n.onLastRemoteStoreUnlisten = II.bind(null, e.syncEngine), n
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
function Y8(t) {
  const e = {};
  return t.timeoutSeconds !== void 0 && (e.timeoutSeconds = t.timeoutSeconds), e
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
const rg = new Map;
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
const X8 = "firestore.googleapis.com",
  ig = !0;
class sg {
  constructor(e) {
    var n, r;
    if (e.host === void 0) {
      if (e.ssl !== void 0) throw new W1(m1.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = X8, this.ssl = ig
    } else this.host = e.host, this.ssl = (n = e.ssl) !== null && n !== void 0 ? n : ig;
    if (this.isUsingEmulator = e.emulatorOptions !== void 0, this.credentials = e.credentials, this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties, this.localCache = e.localCache, e.cacheSizeBytes === void 0) this.cacheSizeBytes = A8;
    else {
      if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < wA) throw new W1(m1.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = e.cacheSizeBytes
    }
    rP("experimentalForceLongPolling", e.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!e.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = !1 : e.experimentalAutoDetectLongPolling === void 0 ? this.experimentalAutoDetectLongPolling = !0 : this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling, this.experimentalLongPollingOptions = Y8((r = e.experimentalLongPollingOptions) !== null && r !== void 0 ? r : {}),
      function(a) {
        if (a.timeoutSeconds !== void 0) {
          if (isNaN(a.timeoutSeconds)) throw new W1(m1.INVALID_ARGUMENT, `invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);
          if (a.timeoutSeconds < 5) throw new W1(m1.INVALID_ARGUMENT, `invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);
          if (a.timeoutSeconds > 30) throw new W1(m1.INVALID_ARGUMENT, `invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)
        }
      }(this.experimentalLongPollingOptions), this.useFetchStreams = !!e.useFetchStreams
  }
  isEqual(e) {
    return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && function(r, i) {
      return r.timeoutSeconds === i.timeoutSeconds
    }(this.experimentalLongPollingOptions, e.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams
  }
}
class dc {
  constructor(e, n, r, i) {
    this._authCredentials = e, this._appCheckCredentials = n, this._databaseId = r, this._app = i, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new sg({}), this._settingsFrozen = !1, this._emulatorOptions = {}, this._terminateTask = "notTerminated"
  }
  get app() {
    if (!this._app) throw new W1(m1.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    return this._app
  }
  get _initialized() {
    return this._settingsFrozen
  }
  get _terminated() {
    return this._terminateTask !== "notTerminated"
  }
  _setSettings(e) {
    if (this._settingsFrozen) throw new W1(m1.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    this._settings = new sg(e), this._emulatorOptions = e.emulatorOptions || {}, e.credentials !== void 0 && (this._authCredentials = function(r) {
      if (!r) return new Kk;
      switch (r.type) {
        case "firstParty":
          return new Jk(r.sessionIndex || "0", r.iamToken || null, r.authTokenFactory || null);
        case "provider":
          return r.client;
        default:
          throw new W1(m1.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type")
      }
    }(e.credentials))
  }
  _getSettings() {
    return this._settings
  }
  _getEmulatorOptions() {
    return this._emulatorOptions
  }
  _freezeSettings() {
    return this._settingsFrozen = !0, this._settings
  }
  _delete() {
    return this._terminateTask === "notTerminated" && (this._terminateTask = this._terminate()), this._terminateTask
  }
  async _restart() {
    this._terminateTask === "notTerminated" ? await this._terminate() : this._terminateTask = "notTerminated"
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    }
  }
  _terminate() {
    return function(n) {
      const r = rg.get(n);
      r && (U1("ComponentProvider", "Removing Datastore"), rg.delete(n), r.terminate())
    }(this), Promise.resolve()
  }
}

function WI(t, e, n, r = {}) {
  var i;
  t = Ra(t, dc);
  const a = c0(e),
    l = t._getSettings(),
    c = Object.assign(Object.assign({}, l), {
      emulatorOptions: t._getEmulatorOptions()
    }),
    h = `${e}:${n}`;
  a && (wv(`https://${h}`), _v("Firestore", !0)), l.host !== X8 && l.host !== h && Yi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");
  const p = Object.assign(Object.assign({}, l), {
    host: h,
    ssl: a,
    emulatorOptions: r
  });
  if (!pu(p, c) && (t._setSettings(p), r.mockUserToken)) {
    let m, y;
    if (typeof r.mockUserToken == "string") m = r.mockUserToken, y = Dn.MOCK_USER;
    else {
      m = bv(r.mockUserToken, (i = t._app) === null || i === void 0 ? void 0 : i.options.projectId);
      const v = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!v) throw new W1(m1.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
      y = new Dn(v)
    }
    t._authCredentials = new Qk(new Fv(m, y))
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
class as {
  constructor(e, n, r) {
    this.converter = n, this._query = r, this.type = "query", this.firestore = e
  }
  withConverter(e) {
    return new as(this.firestore, e, this._query)
  }
}
class tn {
  constructor(e, n, r) {
    this.converter = n, this._key = r, this.type = "document", this.firestore = e
  }
  get _path() {
    return this._key.path
  }
  get id() {
    return this._key.path.lastSegment()
  }
  get path() {
    return this._key.path.canonicalString()
  }
  get parent() {
    return new Qi(this.firestore, this.converter, this._key.path.popLast())
  }
  withConverter(e) {
    return new tn(this.firestore, e, this._key)
  }
  toJSON() {
    return {
      type: tn._jsonSchemaVersion,
      referencePath: this._key.toString()
    }
  }
  static fromJSON(e, n, r) {
    if (d0(n, tn._jsonSchema)) return new tn(e, r || null, new Z1(lt.fromString(n.referencePath)))
  }
}
tn._jsonSchemaVersion = "firestore/documentReference/1.0", tn._jsonSchema = {
  type: Gt("string", tn._jsonSchemaVersion),
  referencePath: Gt("string")
};
class Qi extends as {
  constructor(e, n, r) {
    super(e, n, E9(r)), this._path = r, this.type = "collection"
  }
  get id() {
    return this._query.path.lastSegment()
  }
  get path() {
    return this._query.path.canonicalString()
  }
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new tn(this.firestore, null, new Z1(e))
  }
  withConverter(e) {
    return new Qi(this.firestore, e, this._path)
  }
}

function og(t, e, ...n) {
  if (t = s2(t), $v("collection", "path", e), t instanceof dc) {
    const r = lt.fromString(e, ...n);
    return ym(r), new Qi(t, null, r)
  } {
    if (!(t instanceof tn || t instanceof Qi)) throw new W1(m1.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const r = t._path.child(lt.fromString(e, ...n));
    return ym(r), new Qi(t.firestore, null, r)
  }
}

function HI(t, e, ...n) {
  if (t = s2(t), arguments.length === 1 && (e = v9.newId()), $v("doc", "path", e), t instanceof dc) {
    const r = lt.fromString(e, ...n);
    return gm(r), new tn(t, null, new Z1(r))
  } {
    if (!(t instanceof tn || t instanceof Qi)) throw new W1(m1.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const r = t._path.child(lt.fromString(e, ...n));
    return gm(r), new tn(t.firestore, t instanceof Qi ? t.converter : null, new Z1(r))
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
const ag = "AsyncQueue";
class lg {
  constructor(e = Promise.resolve()) {
    this.Zu = [], this.Xu = !1, this.ec = [], this.tc = null, this.nc = !1, this.rc = !1, this.sc = [], this.F_ = new L8(this, "async_queue_retry"), this.oc = () => {
      const r = w4();
      r && U1(ag, "Visibility state changed to " + r.visibilityState), this.F_.y_()
    }, this._c = e;
    const n = w4();
    n && typeof n.addEventListener == "function" && n.addEventListener("visibilitychange", this.oc)
  }
  get isShuttingDown() {
    return this.Xu
  }
  enqueueAndForget(e) {
    this.enqueue(e)
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    this.ac(), this.uc(e)
  }
  enterRestrictedMode(e) {
    if (!this.Xu) {
      this.Xu = !0, this.rc = e || !1;
      const n = w4();
      n && typeof n.removeEventListener == "function" && n.removeEventListener("visibilitychange", this.oc)
    }
  }
  enqueue(e) {
    if (this.ac(), this.Xu) return new Promise(() => {});
    const n = new z3;
    return this.uc(() => this.Xu && this.rc ? Promise.resolve() : (e().then(n.resolve, n.reject), n.promise)).then(() => n.promise)
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.Zu.push(e), this.cc()))
  }
  async cc() {
    if (this.Zu.length !== 0) {
      try {
        await this.Zu[0](), this.Zu.shift(), this.F_.reset()
      } catch (e) {
        if (!Io(e)) throw e;
        U1(ag, "Operation failed with retryable error: " + e)
      }
      this.Zu.length > 0 && this.F_.g_(() => this.cc())
    }
  }
  uc(e) {
    const n = this._c.then(() => (this.nc = !0, e().catch(r => {
      throw this.tc = r, this.nc = !1, ci("INTERNAL UNHANDLED ERROR: ", ug(r)), r
    }).then(r => (this.nc = !1, r))));
    return this._c = n, n
  }
  enqueueAfterDelay(e, n, r) {
    this.ac(), this.sc.indexOf(e) > -1 && (n = 0);
    const i = j9.createAndSchedule(this, e, n, r, a => this.lc(a));
    return this.ec.push(i), i
  }
  ac() {
    this.tc && ue(47125, {
      hc: ug(this.tc)
    })
  }
  verifyOperationInProgress() {}
  async Pc() {
    let e;
    do e = this._c, await e; while (e !== this._c)
  }
  Tc(e) {
    for (const n of this.ec)
      if (n.timerId === e) return !0;
    return !1
  }
  Ic(e) {
    return this.Pc().then(() => {
      this.ec.sort((n, r) => n.targetTimeMs - r.targetTimeMs);
      for (const n of this.ec)
        if (n.skipDelay(), e !== "all" && n.timerId === e) break;
      return this.Pc()
    })
  }
  dc(e) {
    this.sc.push(e)
  }
  lc(e) {
    const n = this.ec.indexOf(e);
    this.ec.splice(n, 1)
  }
}

function ug(t) {
  let e = t.message || "";
  return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + `
` + t.stack), e
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
function cg(t) {
  return function(n, r) {
    if (typeof n != "object" || n === null) return !1;
    const i = n;
    for (const a of r)
      if (a in i && typeof i[a] == "function") return !0;
    return !1
  }(t, ["next", "error", "complete"])
}
class Tu extends dc {
  constructor(e, n, r, i) {
    super(e, n, r, i), this.type = "firestore", this._queue = new lg, this._persistenceKey = (i == null ? void 0 : i.name) || "[DEFAULT]"
  }
  async _terminate() {
    if (this._firestoreClient) {
      const e = this._firestoreClient.terminate();
      this._queue = new lg(e), this._firestoreClient = void 0, await e
    }
  }
}

function J8(t, e) {
  const n = typeof t == "object" ? t : Av(),
    r = typeof t == "string" ? t : yu,
    i = Cv(n, "firestore").getImmediate({
      identifier: r
    });
  if (!i._initialized) {
    const a = yv("firestore");
    a && WI(i, ...a)
  }
  return i
}

function Z8(t) {
  if (t._terminated) throw new W1(m1.FAILED_PRECONDITION, "The client has already been terminated.");
  return t._firestoreClient || qI(t), t._firestoreClient
}

function qI(t) {
  var e, n, r;
  const i = t._freezeSettings(),
    a = function(c, h, p, m) {
      return new pP(c, h, p, m.host, m.ssl, m.experimentalForceLongPolling, m.experimentalAutoDetectLongPolling, Y8(m.experimentalLongPollingOptions), m.useFetchStreams, m.isUsingEmulator)
    }(t._databaseId, ((e = t._app) === null || e === void 0 ? void 0 : e.options.appId) || "", t._persistenceKey, i);
  t._componentsProvider || !((n = i.localCache) === null || n === void 0) && n._offlineComponentProvider && (!((r = i.localCache) === null || r === void 0) && r._onlineComponentProvider) && (t._componentsProvider = {
    _offline: i.localCache._offlineComponentProvider,
    _online: i.localCache._onlineComponentProvider
  }), t._firestoreClient = new $I(t._authCredentials, t._appCheckCredentials, t._queue, a, t._componentsProvider && function(c) {
    const h = c == null ? void 0 : c._online.build();
    return {
      _offline: c == null ? void 0 : c._offline.build(h),
      _online: h
    }
  }(t._componentsProvider))
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
class Hr {
  constructor(e) {
    this._byteString = e
  }
  static fromBase64String(e) {
    try {
      return new Hr(Sn.fromBase64String(e))
    } catch (n) {
      throw new W1(m1.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + n)
    }
  }
  static fromUint8Array(e) {
    return new Hr(Sn.fromUint8Array(e))
  }
  toBase64() {
    return this._byteString.toBase64()
  }
  toUint8Array() {
    return this._byteString.toUint8Array()
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")"
  }
  isEqual(e) {
    return this._byteString.isEqual(e._byteString)
  }
  toJSON() {
    return {
      type: Hr._jsonSchemaVersion,
      bytes: this.toBase64()
    }
  }
  static fromJSON(e) {
    if (d0(e, Hr._jsonSchema)) return Hr.fromBase64String(e.bytes)
  }
}
Hr._jsonSchemaVersion = "firestore/bytes/1.0", Hr._jsonSchema = {
  type: Gt("string", Hr._jsonSchemaVersion),
  bytes: Gt("string")
};
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
class z9 {
  constructor(...e) {
    for (let n = 0; n < e.length; ++n)
      if (e[n].length === 0) throw new W1(m1.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this._internalPath = new xn(e)
  }
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath)
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
class U9 {
  constructor(e) {
    this._methodName = e
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
class R2 {
  constructor(e, n) {
    if (!isFinite(e) || e < -90 || e > 90) throw new W1(m1.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + e);
    if (!isFinite(n) || n < -180 || n > 180) throw new W1(m1.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + n);
    this._lat = e, this._long = n
  }
  get latitude() {
    return this._lat
  }
  get longitude() {
    return this._long
  }
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long
  }
  _compareTo(e) {
    return xe(this._lat, e._lat) || xe(this._long, e._long)
  }
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long,
      type: R2._jsonSchemaVersion
    }
  }
  static fromJSON(e) {
    if (d0(e, R2._jsonSchema)) return new R2(e.latitude, e.longitude)
  }
}
R2._jsonSchemaVersion = "firestore/geoPoint/1.0", R2._jsonSchema = {
  type: Gt("string", R2._jsonSchemaVersion),
  latitude: Gt("number"),
  longitude: Gt("number")
};
/**
 * @license
 * Copyright 2024 Google LLC
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
class N2 {
  constructor(e) {
    this._values = (e || []).map(n => n)
  }
  toArray() {
    return this._values.map(e => e)
  }
  isEqual(e) {
    return function(r, i) {
      if (r.length !== i.length) return !1;
      for (let a = 0; a < r.length; ++a)
        if (r[a] !== i[a]) return !1;
      return !0
    }(this._values, e._values)
  }
  toJSON() {
    return {
      type: N2._jsonSchemaVersion,
      vectorValues: this._values
    }
  }
  static fromJSON(e) {
    if (d0(e, N2._jsonSchema)) {
      if (Array.isArray(e.vectorValues) && e.vectorValues.every(n => typeof n == "number")) return new N2(e.vectorValues);
      throw new W1(m1.INVALID_ARGUMENT, "Expected 'vectorValues' field to be a number array")
    }
  }
}
N2._jsonSchemaVersion = "firestore/vectorValue/1.0", N2._jsonSchema = {
  type: Gt("string", N2._jsonSchemaVersion),
  vectorValues: Gt("object")
};
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
const GI = /^__.*__$/;
class KI {
  constructor(e, n, r) {
    this.data = e, this.fieldMask = n, this.fieldTransforms = r
  }
  toMutation(e, n) {
    return this.fieldMask !== null ? new ss(e, this.data, this.fieldMask, n, this.fieldTransforms) : new h0(e, this.data, n, this.fieldTransforms)
  }
}

function ew(t) {
  switch (t) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw ue(40011, {
        Ec: t
      })
  }
}
class W9 {
  constructor(e, n, r, i, a, l) {
    this.settings = e, this.databaseId = n, this.serializer = r, this.ignoreUndefinedProperties = i, a === void 0 && this.Ac(), this.fieldTransforms = a || [], this.fieldMask = l || []
  }
  get path() {
    return this.settings.path
  }
  get Ec() {
    return this.settings.Ec
  }
  Rc(e) {
    return new W9(Object.assign(Object.assign({}, this.settings), e), this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask)
  }
  Vc(e) {
    var n;
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
      i = this.Rc({
        path: r,
        mc: !1
      });
    return i.fc(e), i
  }
  gc(e) {
    var n;
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
      i = this.Rc({
        path: r,
        mc: !1
      });
    return i.Ac(), i
  }
  yc(e) {
    return this.Rc({
      path: void 0,
      mc: !0
    })
  }
  wc(e) {
    return Cu(e, this.settings.methodName, this.settings.Sc || !1, this.path, this.settings.bc)
  }
  contains(e) {
    return this.fieldMask.find(n => e.isPrefixOf(n)) !== void 0 || this.fieldTransforms.find(n => e.isPrefixOf(n.field)) !== void 0
  }
  Ac() {
    if (this.path)
      for (let e = 0; e < this.path.length; e++) this.fc(this.path.get(e))
  }
  fc(e) {
    if (e.length === 0) throw this.wc("Document fields must not be empty");
    if (ew(this.Ec) && GI.test(e)) throw this.wc('Document fields cannot begin and end with "__"')
  }
}
class QI {
  constructor(e, n, r) {
    this.databaseId = e, this.ignoreUndefinedProperties = n, this.serializer = r || lc(e)
  }
  Dc(e, n, r, i = !1) {
    return new W9({
      Ec: e,
      methodName: n,
      bc: r,
      path: xn.emptyPath(),
      mc: !1,
      Sc: i
    }, this.databaseId, this.serializer, this.ignoreUndefinedProperties)
  }
}

function tw(t) {
  const e = t._freezeSettings(),
    n = lc(t._databaseId);
  return new QI(t._databaseId, !!e.ignoreUndefinedProperties, n)
}

function YI(t, e, n, r, i, a = {}) {
  const l = t.Dc(a.merge || a.mergeFields ? 2 : 0, e, n, i);
  iw("Data must be an object, but it was:", l, r);
  const c = nw(r, l);
  let h, p;
  if (a.merge) h = new i2(l.fieldMask), p = l.fieldTransforms;
  else if (a.mergeFields) {
    const m = [];
    for (const y of a.mergeFields) {
      const v = JI(e, y, n);
      if (!l.contains(v)) throw new W1(m1.INVALID_ARGUMENT, `Field '${v}' is specified in your field mask but missing from your input data.`);
      eR(m, v) || m.push(v)
    }
    h = new i2(m), p = l.fieldTransforms.filter(y => h.covers(y.field))
  } else h = null, p = l.fieldTransforms;
  return new KI(new Wr(c), h, p)
}
class H9 extends U9 {
  _toFieldTransform(e) {
    return new BP(e.path, new Xa)
  }
  isEqual(e) {
    return e instanceof H9
  }
}

function XI(t, e, n, r = !1) {
  return q9(n, t.Dc(r ? 4 : 3, e))
}

function q9(t, e) {
  if (rw(t = s2(t))) return iw("Unsupported field value:", e, t), nw(t, e);
  if (t instanceof U9) return function(r, i) {
    if (!ew(i.Ec)) throw i.wc(`${r._methodName}() can only be used with update() and set()`);
    if (!i.path) throw i.wc(`${r._methodName}() is not currently supported inside arrays`);
    const a = r._toFieldTransform(i);
    a && i.fieldTransforms.push(a)
  }(t, e), null;
  if (t === void 0 && e.ignoreUndefinedProperties) return null;
  if (e.path && e.fieldMask.push(e.path), t instanceof Array) {
    if (e.settings.mc && e.Ec !== 4) throw e.wc("Nested arrays are not supported");
    return function(r, i) {
      const a = [];
      let l = 0;
      for (const c of r) {
        let h = q9(c, i.yc(l));
        h == null && (h = {
          nullValue: "NULL_VALUE"
        }), a.push(h), l++
      }
      return {
        arrayValue: {
          values: a
        }
      }
    }(t, e)
  }
  return function(r, i) {
    if ((r = s2(r)) === null) return {
      nullValue: "NULL_VALUE"
    };
    if (typeof r == "number") return jP(i.serializer, r);
    if (typeof r == "boolean") return {
      booleanValue: r
    };
    if (typeof r == "string") return {
      stringValue: r
    };
    if (r instanceof Date) {
      const a = mt.fromDate(r);
      return {
        timestampValue: _u(i.serializer, a)
      }
    }
    if (r instanceof mt) {
      const a = new mt(r.seconds, 1e3 * Math.floor(r.nanoseconds / 1e3));
      return {
        timestampValue: _u(i.serializer, a)
      }
    }
    if (r instanceof R2) return {
      geoPointValue: {
        latitude: r.latitude,
        longitude: r.longitude
      }
    };
    if (r instanceof Hr) return {
      bytesValue: x8(i.serializer, r._byteString)
    };
    if (r instanceof tn) {
      const a = i.databaseId,
        l = r.firestore._databaseId;
      if (!l.isEqual(a)) throw i.wc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);
      return {
        referenceValue: P9(r.firestore._databaseId || i.databaseId, r._key.path)
      }
    }
    if (r instanceof N2) return function(l, c) {
      return {
        mapValue: {
          fields: {
            [Yv]: {
              stringValue: Xv
            },
            [vu]: {
              arrayValue: {
                values: l.toArray().map(p => {
                  if (typeof p != "number") throw c.wc("VectorValues must only contain numeric values.");
                  return T9(c.serializer, p)
                })
              }
            }
          }
        }
      }
    }(r, i);
    throw i.wc(`Unsupported field value: ${Zu(r)}`)
  }(t, e)
}

function nw(t, e) {
  const n = {};
  return Wv(t) ? e.path && e.path.length > 0 && e.fieldMask.push(e.path) : rs(t, (r, i) => {
    const a = q9(i, e.Vc(r));
    a != null && (n[r] = a)
  }), {
    mapValue: {
      fields: n
    }
  }
}

function rw(t) {
  return !(typeof t != "object" || t === null || t instanceof Array || t instanceof Date || t instanceof mt || t instanceof R2 || t instanceof Hr || t instanceof tn || t instanceof U9 || t instanceof N2)
}

function iw(t, e, n) {
  if (!rw(n) || !zv(n)) {
    const r = Zu(n);
    throw r === "an object" ? e.wc(t + " a custom object") : e.wc(t + " " + r)
  }
}

function JI(t, e, n) {
  if ((e = s2(e)) instanceof z9) return e._internalPath;
  if (typeof e == "string") return sw(t, e);
  throw Cu("Field path arguments must be of type string or ", t, !1, void 0, n)
}
const ZI = new RegExp("[~\\*/\\[\\]]");

function sw(t, e, n) {
  if (e.search(ZI) >= 0) throw Cu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`, t, !1, void 0, n);
  try {
    return new z9(...e.split("."))._internalPath
  } catch {
    throw Cu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, t, !1, void 0, n)
  }
}

function Cu(t, e, n, r, i) {
  const a = r && !r.isEmpty(),
    l = i !== void 0;
  let c = `Function ${e}() called with invalid data`;
  n && (c += " (via `toFirestore()`)"), c += ". ";
  let h = "";
  return (a || l) && (h += " (found", a && (h += ` in field ${r}`), l && (h += ` in document ${i}`), h += ")"), new W1(m1.INVALID_ARGUMENT, c + t + h)
}

function eR(t, e) {
  return t.some(n => n.isEqual(e))
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
class ow {
  constructor(e, n, r, i, a) {
    this._firestore = e, this._userDataWriter = n, this._key = r, this._document = i, this._converter = a
  }
  get id() {
    return this._key.path.lastSegment()
  }
  get ref() {
    return new tn(this._firestore, this._converter, this._key)
  }
  exists() {
    return this._document !== null
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new tR(this._firestore, this._userDataWriter, this._key, this._document, null);
        return this._converter.fromFirestore(e)
      }
      return this._userDataWriter.convertValue(this._document.data.value)
    }
  }
  get(e) {
    if (this._document) {
      const n = this._document.data.field(G9("DocumentSnapshot.get", e));
      if (n !== null) return this._userDataWriter.convertValue(n)
    }
  }
}
class tR extends ow {
  data() {
    return super.data()
  }
}

function G9(t, e) {
  return typeof e == "string" ? sw(t, e) : e instanceof z9 ? e._internalPath : e._delegate._internalPath
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
function nR(t) {
  if (t.limitType === "L" && t.explicitOrderBy.length === 0) throw new W1(m1.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause")
}
class K9 {}
class aw extends K9 {}

function rR(t, e, ...n) {
  let r = [];
  e instanceof K9 && r.push(e), r = r.concat(n),
    function(a) {
      const l = a.filter(h => h instanceof Y9).length,
        c = a.filter(h => h instanceof Q9).length;
      if (l > 1 || l > 0 && c > 0) throw new W1(m1.INVALID_ARGUMENT, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")
    }(r);
  for (const i of r) t = i._apply(t);
  return t
}
class Q9 extends aw {
  constructor(e, n, r) {
    super(), this._field = e, this._op = n, this._value = r, this.type = "where"
  }
  static _create(e, n, r) {
    return new Q9(e, n, r)
  }
  _apply(e) {
    const n = this._parse(e);
    return lw(e._query, n), new as(e.firestore, e.converter, vh(e._query, n))
  }
  _parse(e) {
    const n = tw(e.firestore);
    return function(a, l, c, h, p, m, y) {
      let v;
      if (p.isKeyField()) {
        if (m === "array-contains" || m === "array-contains-any") throw new W1(m1.INVALID_ARGUMENT, `Invalid Query. You can't perform '${m}' queries on documentId().`);
        if (m === "in" || m === "not-in") {
          hg(y, m);
          const P = [];
          for (const k of y) P.push(dg(h, a, k));
          v = {
            arrayValue: {
              values: P
            }
          }
        } else v = dg(h, a, y)
      } else m !== "in" && m !== "not-in" && m !== "array-contains-any" || hg(y, m), v = XI(c, l, y, m === "in" || m === "not-in");
      return qt.create(p, m, v)
    }(e._query, "where", n, e.firestore._databaseId, this._field, this._op, this._value)
  }
}
class Y9 extends K9 {
  constructor(e, n) {
    super(), this.type = e, this._queryConstraints = n
  }
  static _create(e, n) {
    return new Y9(e, n)
  }
  _parse(e) {
    const n = this._queryConstraints.map(r => r._parse(e)).filter(r => r.getFilters().length > 0);
    return n.length === 1 ? n[0] : o2.create(n, this._getOperator())
  }
  _apply(e) {
    const n = this._parse(e);
    return n.getFilters().length === 0 ? e : (function(i, a) {
      let l = i;
      const c = a.getFlattenedFilters();
      for (const h of c) lw(l, h), l = vh(l, h)
    }(e._query, n), new as(e.firestore, e.converter, vh(e._query, n)))
  }
  _getQueryConstraints() {
    return this._queryConstraints
  }
  _getOperator() {
    return this.type === "and" ? "and" : "or"
  }
}
class X9 extends aw {
  constructor(e, n) {
    super(), this._field = e, this._direction = n, this.type = "orderBy"
  }
  static _create(e, n) {
    return new X9(e, n)
  }
  _apply(e) {
    const n = function(i, a, l) {
      if (i.startAt !== null) throw new W1(m1.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
      if (i.endAt !== null) throw new W1(m1.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
      return new Ya(a, l)
    }(e._query, this._field, this._direction);
    return new as(e.firestore, e.converter, function(i, a) {
      const l = i.explicitOrderBy.concat([a]);
      return new Ro(i.path, i.collectionGroup, l, i.filters.slice(), i.limit, i.limitType, i.startAt, i.endAt)
    }(e._query, n))
  }
}

function iR(t, e = "asc") {
  const n = e,
    r = G9("orderBy", t);
  return X9._create(r, n)
}

function dg(t, e, n) {
  if (typeof(n = s2(n)) == "string") {
    if (n === "") throw new W1(m1.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!s8(e) && n.indexOf("/") !== -1) throw new W1(m1.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
    const r = e.path.child(lt.fromString(n));
    if (!Z1.isDocumentKey(r)) throw new W1(m1.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);
    return Tm(t, new Z1(r))
  }
  if (n instanceof tn) return Tm(t, n._key);
  throw new W1(m1.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zu(n)}.`)
}

function hg(t, e) {
  if (!Array.isArray(t) || t.length === 0) throw new W1(m1.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)
}

function lw(t, e) {
  const n = function(i, a) {
    for (const l of i)
      for (const c of l.getFlattenedFilters())
        if (a.indexOf(c.op) >= 0) return c.op;
    return null
  }(t.filters, function(i) {
    switch (i) {
      case "!=":
        return ["!=", "not-in"];
      case "array-contains-any":
      case "in":
        return ["not-in"];
      case "not-in":
        return ["array-contains-any", "in", "not-in", "!="];
      default:
        return []
    }
  }(e.op));
  if (n !== null) throw n === e.op ? new W1(m1.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${e.op.toString()}' filter.`) : new W1(m1.INVALID_ARGUMENT, `Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)
}
class sR {
  convertValue(e, n = "none") {
    switch (e3(e)) {
      case 0:
        return null;
      case 1:
        return e.booleanValue;
      case 2:
        return Dt(e.integerValue || e.doubleValue);
      case 3:
        return this.convertTimestamp(e.timestampValue);
      case 4:
        return this.convertServerTimestamp(e, n);
      case 5:
        return e.stringValue;
      case 6:
        return this.convertBytes(Zi(e.bytesValue));
      case 7:
        return this.convertReference(e.referenceValue);
      case 8:
        return this.convertGeoPoint(e.geoPointValue);
      case 9:
        return this.convertArray(e.arrayValue, n);
      case 11:
        return this.convertObject(e.mapValue, n);
      case 10:
        return this.convertVectorValue(e.mapValue);
      default:
        throw ue(62114, {
          value: e
        })
    }
  }
  convertObject(e, n) {
    return this.convertObjectMap(e.fields, n)
  }
  convertObjectMap(e, n = "none") {
    const r = {};
    return rs(e, (i, a) => {
      r[i] = this.convertValue(a, n)
    }), r
  }
  convertVectorValue(e) {
    var n, r, i;
    const a = (i = (r = (n = e.fields) === null || n === void 0 ? void 0 : n[vu].arrayValue) === null || r === void 0 ? void 0 : r.values) === null || i === void 0 ? void 0 : i.map(l => Dt(l.doubleValue));
    return new N2(a)
  }
  convertGeoPoint(e) {
    return new R2(Dt(e.latitude), Dt(e.longitude))
  }
  convertArray(e, n) {
    return (e.values || []).map(r => this.convertValue(r, n))
  }
  convertServerTimestamp(e, n) {
    switch (n) {
      case "previous":
        const r = nc(e);
        return r == null ? null : this.convertValue(r, n);
      case "estimate":
        return this.convertTimestamp(Ga(e));
      default:
        return null
    }
  }
  convertTimestamp(e) {
    const n = Ji(e);
    return new mt(n.seconds, n.nanos)
  }
  convertDocumentKey(e, n) {
    const r = lt.fromString(e);
    Ke(P8(r), 9688, {
      name: e
    });
    const i = new Ka(r.get(1), r.get(3)),
      a = new Z1(r.popFirst(5));
    return i.isEqual(n) || ci(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`), a
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
function oR(t, e, n) {
  let r;
  return r = t ? t.toFirestore(e) : e, r
}
class Sa {
  constructor(e, n) {
    this.hasPendingWrites = e, this.fromCache = n
  }
  isEqual(e) {
    return this.hasPendingWrites === e.hasPendingWrites && this.fromCache === e.fromCache
  }
}
class U3 extends ow {
  constructor(e, n, r, i, a, l) {
    super(e, n, r, i, l), this._firestore = e, this._firestoreImpl = e, this.metadata = a
  }
  exists() {
    return super.exists()
  }
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const n = new eu(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, null);
        return this._converter.fromFirestore(n, e)
      }
      return this._userDataWriter.convertValue(this._document.data.value, e.serverTimestamps)
    }
  }
  get(e, n = {}) {
    if (this._document) {
      const r = this._document.data.field(G9("DocumentSnapshot.get", e));
      if (r !== null) return this._userDataWriter.convertValue(r, n.serverTimestamps)
    }
  }
  toJSON() {
    if (this.metadata.hasPendingWrites) throw new W1(m1.FAILED_PRECONDITION, "DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");
    const e = this._document,
      n = {};
    return n.type = U3._jsonSchemaVersion, n.bundle = "", n.bundleSource = "DocumentSnapshot", n.bundleName = this._key.toString(), !e || !e.isValidDocument() || !e.isFoundDocument() ? n : (this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields, "previous"), n.bundle = (this._firestore, this.ref.path, "NOT SUPPORTED"), n)
  }
}
U3._jsonSchemaVersion = "firestore/documentSnapshot/1.0", U3._jsonSchema = {
  type: Gt("string", U3._jsonSchemaVersion),
  bundleSource: Gt("string", "DocumentSnapshot"),
  bundleName: Gt("string"),
  bundle: Gt("string")
};
class eu extends U3 {
  data(e = {}) {
    return super.data(e)
  }
}
class lo {
  constructor(e, n, r, i) {
    this._firestore = e, this._userDataWriter = n, this._snapshot = i, this.metadata = new Sa(i.hasPendingWrites, i.fromCache), this.query = r
  }
  get docs() {
    const e = [];
    return this.forEach(n => e.push(n)), e
  }
  get size() {
    return this._snapshot.docs.size
  }
  get empty() {
    return this.size === 0
  }
  forEach(e, n) {
    this._snapshot.docs.forEach(r => {
      e.call(n, new eu(this._firestore, this._userDataWriter, r.key, r, new Sa(this._snapshot.mutatedKeys.has(r.key), this._snapshot.fromCache), this.query.converter))
    })
  }
  docChanges(e = {}) {
    const n = !!e.includeMetadataChanges;
    if (n && this._snapshot.excludesMetadataChanges) throw new W1(m1.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
    return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === n || (this._cachedChanges = function(i, a) {
      if (i._snapshot.oldDocs.isEmpty()) {
        let l = 0;
        return i._snapshot.docChanges.map(c => {
          const h = new eu(i._firestore, i._userDataWriter, c.doc.key, c.doc, new Sa(i._snapshot.mutatedKeys.has(c.doc.key), i._snapshot.fromCache), i.query.converter);
          return c.doc, {
            type: "added",
            doc: h,
            oldIndex: -1,
            newIndex: l++
          }
        })
      } {
        let l = i._snapshot.oldDocs;
        return i._snapshot.docChanges.filter(c => a || c.type !== 3).map(c => {
          const h = new eu(i._firestore, i._userDataWriter, c.doc.key, c.doc, new Sa(i._snapshot.mutatedKeys.has(c.doc.key), i._snapshot.fromCache), i.query.converter);
          let p = -1,
            m = -1;
          return c.type !== 0 && (p = l.indexOf(c.doc.key), l = l.delete(c.doc.key)), c.type !== 1 && (l = l.add(c.doc), m = l.indexOf(c.doc.key)), {
            type: aR(c.type),
            doc: h,
            oldIndex: p,
            newIndex: m
          }
        })
      }
    }(this, n), this._cachedChangesIncludeMetadataChanges = n), this._cachedChanges
  }
  toJSON() {
    if (this.metadata.hasPendingWrites) throw new W1(m1.FAILED_PRECONDITION, "QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");
    const e = {};
    e.type = lo._jsonSchemaVersion, e.bundleSource = "QuerySnapshot", e.bundleName = v9.newId(), this._firestore._databaseId.database, this._firestore._databaseId.projectId;
    const n = [],
      r = [],
      i = [];
    return this.docs.forEach(a => {
      a._document !== null && (n.push(a._document), r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields, "previous")), i.push(a.ref.path))
    }), e.bundle = (this._firestore, this.query._query, e.bundleName, "NOT SUPPORTED"), e
  }
}

function aR(t) {
  switch (t) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return ue(61501, {
        type: t
      })
  }
}
lo._jsonSchemaVersion = "firestore/querySnapshot/1.0", lo._jsonSchema = {
  type: Gt("string", lo._jsonSchemaVersion),
  bundleSource: Gt("string", "QuerySnapshot"),
  bundleName: Gt("string"),
  bundle: Gt("string")
};
class uw extends sR {
  constructor(e) {
    super(), this.firestore = e
  }
  convertBytes(e) {
    return new Hr(e)
  }
  convertReference(e) {
    const n = this.convertDocumentKey(e, this.firestore._databaseId);
    return new tn(this.firestore, null, n)
  }
}

function lR(t, e) {
  const n = Ra(t.firestore, Tu),
    r = HI(t),
    i = oR(t.converter, e);
  return cR(n, [YI(tw(t.firestore), "addDoc", r._key, i, t.converter !== null, {}).toMutation(r._key, si.exists(!1))]).then(() => r)
}

function uR(t, ...e) {
  var n, r, i;
  t = s2(t);
  let a = {
      includeMetadataChanges: !1,
      source: "default"
    },
    l = 0;
  typeof e[l] != "object" || cg(e[l]) || (a = e[l++]);
  const c = {
    includeMetadataChanges: a.includeMetadataChanges,
    source: a.source
  };
  if (cg(e[l])) {
    const y = e[l];
    e[l] = (n = y.next) === null || n === void 0 ? void 0 : n.bind(y), e[l + 1] = (r = y.error) === null || r === void 0 ? void 0 : r.bind(y), e[l + 2] = (i = y.complete) === null || i === void 0 ? void 0 : i.bind(y)
  }
  let h, p, m;
  if (t instanceof tn) p = Ra(t.firestore, Tu), m = E9(t._key.path), h = {
    next: y => {
      e[l] && e[l](dR(p, t, y))
    },
    error: e[l + 1],
    complete: e[l + 2]
  };
  else {
    const y = Ra(t, as);
    p = Ra(y.firestore, Tu), m = y._query;
    const v = new uw(p);
    h = {
      next: C => {
        e[l] && e[l](new lo(p, v, y, C))
      },
      error: e[l + 1],
      complete: e[l + 2]
    }, nR(t._query)
  }
  return function(v, C, P, k) {
    const R = new BI(k),
      W = new _I(C, R, P);
    return v.asyncQueue.enqueueAndForget(async () => yI(await ng(v), W)), () => {
      R.Ou(), v.asyncQueue.enqueueAndForget(async () => vI(await ng(v), W))
    }
  }(Z8(p), m, c, h)
}

function cR(t, e) {
  return function(r, i) {
    const a = new z3;
    return r.asyncQueue.enqueueAndForget(async () => RI(await UI(r), i, a)), a.promise
  }(Z8(t), e)
}

function dR(t, e, n) {
  const r = n.docs.get(e._key),
    i = new uw(t);
  return new U3(t, i, e._key, r, new Sa(n.hasPendingWrites, n.fromCache), e.converter)
}

function hR() {
  return new H9("serverTimestamp")
}(function(e, n = !0) {
  (function(i) {
    Po = i
  })(Pv), Wa(new po("firestore", (r, {
    instanceIdentifier: i,
    options: a
  }) => {
    const l = r.getProvider("app").getImmediate(),
      c = new Tu(new Yk(r.getProvider("auth-internal")), new Zk(l, r.getProvider("app-check-internal")), function(p, m) {
        if (!Object.prototype.hasOwnProperty.apply(p.options, ["projectId"])) throw new W1(m1.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        return new Ka(p.options.projectId, m)
      }(l, i), l);
    return a = Object.assign({
      useFetchStreams: n
    }, a), c._setSettings(a), c
  }, "PUBLIC").setMultipleInstances(!0)), Gi(dm, hm, e), Gi(dm, hm, "esm2017")
})();
const fR = {
    apiKey: "AIzaSyBoNZmyP3oBhF9NZLa46UuaDDmRmeDfT6c",
    authDomain: "portfolio-2900b.firebaseapp.com",
    projectId: "portfolio-2900b",
    storageBucket: "portfolio-2900b.firebasestorage.app",
    messagingSenderId: "981368026218",
    appId: "1:981368026218:web:1616710ad45c433dec8613",
    measurementId: "G-VDYNNXW8CV"
  },
  pR = g9(fR);
J8(pR);
var _4 = {
    exports: {}
  },
  x4, fg;

function mR() {
  if (fg) return x4;
  fg = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return x4 = t, x4
}
var S4, pg;

function gR() {
  if (pg) return S4;
  pg = 1;
  var t = mR();

  function e() {}

  function n() {}
  return n.resetWarningCache = e, S4 = function() {
    function r(l, c, h, p, m, y) {
      if (y !== t) {
        var v = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw v.name = "Invariant Violation", v
      }
    }
    r.isRequired = r;

    function i() {
      return r
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: e
    };
    return a.PropTypes = a, a
  }, S4
}
var mg;

function yR() {
  return mg || (mg = 1, _4.exports = gR()()), _4.exports
}
var vR = yR();
const E4 = Qu(vR);

function X3(t, ...e) {
  const n = new URL(`https://mui.com/production-error/?code=${t}`);
  return e.forEach(r => n.searchParams.append("args[]", r)), `Minified MUI error #${t}; visit ${n} for the full message.`
}
const J9 = "$$material";

function ku() {
  return ku = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
    }
    return t
  }, ku.apply(null, arguments)
}

function wR(t) {
  if (t.sheet) return t.sheet;
  for (var e = 0; e < document.styleSheets.length; e++)
    if (document.styleSheets[e].ownerNode === t) return document.styleSheets[e]
}

function bR(t) {
  var e = document.createElement("style");
  return e.setAttribute("data-emotion", t.key), t.nonce !== void 0 && e.setAttribute("nonce", t.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e
}
var _R = function() {
    function t(n) {
      var r = this;
      this._insertTag = function(i) {
        var a;
        r.tags.length === 0 ? r.insertionPoint ? a = r.insertionPoint.nextSibling : r.prepend ? a = r.container.firstChild : a = r.before : a = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, a), r.tags.push(i)
      }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null
    }
    var e = t.prototype;
    return e.hydrate = function(r) {
      r.forEach(this._insertTag)
    }, e.insert = function(r) {
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(bR(this));
      var i = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var a = wR(i);
        try {
          a.insertRule(r, a.cssRules.length)
        } catch {}
      } else i.appendChild(document.createTextNode(r));
      this.ctr++
    }, e.flush = function() {
      this.tags.forEach(function(r) {
        var i;
        return (i = r.parentNode) == null ? void 0 : i.removeChild(r)
      }), this.tags = [], this.ctr = 0
    }, t
  }(),
  Nn = "-ms-",
  Pu = "-moz-",
  ze = "-webkit-",
  cw = "comm",
  Z9 = "rule",
  ef = "decl",
  xR = "@import",
  dw = "@keyframes",
  SR = "@layer",
  ER = Math.abs,
  hc = String.fromCharCode,
  TR = Object.assign;

function CR(t, e) {
  return _n(t, 0) ^ 45 ? (((e << 2 ^ _n(t, 0)) << 2 ^ _n(t, 1)) << 2 ^ _n(t, 2)) << 2 ^ _n(t, 3) : 0
}

function hw(t) {
  return t.trim()
}

function kR(t, e) {
  return (t = e.exec(t)) ? t[0] : t
}

function Ue(t, e, n) {
  return t.replace(e, n)
}

function Ah(t, e) {
  return t.indexOf(e)
}

function _n(t, e) {
  return t.charCodeAt(e) | 0
}

function e0(t, e, n) {
  return t.slice(e, n)
}

function S2(t) {
  return t.length
}

function tf(t) {
  return t.length
}

function Dl(t, e) {
  return e.push(t), t
}

function PR(t, e) {
  return t.map(e).join("")
}
var fc = 1,
  bo = 1,
  fw = 0,
  lr = 0,
  Ht = 0,
  Lo = "";

function pc(t, e, n, r, i, a, l) {
  return {
    value: t,
    root: e,
    parent: n,
    type: r,
    props: i,
    children: a,
    line: fc,
    column: bo,
    length: l,
    return: ""
  }
}

function ga(t, e) {
  return TR(pc("", null, null, "", null, null, 0), t, {
    length: -t.length
  }, e)
}

function AR() {
  return Ht
}

function IR() {
  return Ht = lr > 0 ? _n(Lo, --lr) : 0, bo--, Ht === 10 && (bo = 1, fc--), Ht
}

function wr() {
  return Ht = lr < fw ? _n(Lo, lr++) : 0, bo++, Ht === 10 && (bo = 1, fc++), Ht
}

function L2() {
  return _n(Lo, lr)
}

function tu() {
  return lr
}

function g0(t, e) {
  return e0(Lo, t, e)
}

function t0(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1
  }
  return 0
}

function pw(t) {
  return fc = bo = 1, fw = S2(Lo = t), lr = 0, []
}

function mw(t) {
  return Lo = "", t
}

function nu(t) {
  return hw(g0(lr - 1, Ih(t === 91 ? t + 2 : t === 40 ? t + 1 : t)))
}

function RR(t) {
  for (;
    (Ht = L2()) && Ht < 33;) wr();
  return t0(t) > 2 || t0(Ht) > 3 ? "" : " "
}

function NR(t, e) {
  for (; --e && wr() && !(Ht < 48 || Ht > 102 || Ht > 57 && Ht < 65 || Ht > 70 && Ht < 97););
  return g0(t, tu() + (e < 6 && L2() == 32 && wr() == 32))
}

function Ih(t) {
  for (; wr();) switch (Ht) {
    case t:
      return lr;
    case 34:
    case 39:
      t !== 34 && t !== 39 && Ih(Ht);
      break;
    case 40:
      t === 41 && Ih(t);
      break;
    case 92:
      wr();
      break
  }
  return lr
}

function LR(t, e) {
  for (; wr() && t + Ht !== 57;)
    if (t + Ht === 84 && L2() === 47) break;
  return "/*" + g0(e, lr - 1) + "*" + hc(t === 47 ? t : wr())
}

function MR(t) {
  for (; !t0(L2());) wr();
  return g0(t, lr)
}

function DR(t) {
  return mw(ru("", null, null, null, [""], t = pw(t), 0, [0], t))
}

function ru(t, e, n, r, i, a, l, c, h) {