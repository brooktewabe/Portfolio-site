    const r = this.We.getRemoteKeysForTarget(n);
    let i = 0;
    return r.forEach(a => {
      const l = this.We.lt(),
        c = `projects/${l.projectId}/databases/${l.database}/documents/${a.path.canonicalString()}`;
      e.mightContain(c) || (this.Xe(n, a, null), i++)
    }), i
  }
  Pt(e) {
    const n = new Map;
    this.Ge.forEach((a, l) => {
      const c = this.st(l);
      if (c) {
        if (a.current && yh(c.target)) {
          const h = new Z1(c.target.path);
          this.Tt(h).has(l) || this.It(l, h) || this.Xe(l, h, On.newNoDocument(h, e))
        }
        a.Ne && (n.set(l, a.Le()), a.ke())
      }
    });
    let r = Ae();
    this.Je.forEach((a, l) => {
      let c = !0;
      l.forEachWhile(h => {
        const p = this.st(h);
        return !p || p.purpose === "TargetPurposeLimboResolution" || (c = !1, !1)
      }), c && (r = r.add(a))
    }), this.ze.forEach((a, l) => l.setReadTime(e));
    const i = new ac(e, n, this.He, this.ze, r);
    return this.ze = di(), this.je = Ll(), this.Je = Ll(), this.He = new St(xe), i
  }
  Ze(e, n) {
    if (!this.nt(e)) return;
    const r = this.It(e, n.key) ? 2 : 0;
    this.tt(e).qe(n.key, r), this.ze = this.ze.insert(n.key, n), this.je = this.je.insert(n.key, this.Tt(n.key).add(e)), this.Je = this.Je.insert(n.key, this.dt(n.key).add(e))
  }
  Xe(e, n, r) {
    if (!this.nt(e)) return;
    const i = this.tt(e);
    this.It(e, n) ? i.qe(n, 1) : i.Qe(n), this.Je = this.Je.insert(n, this.dt(n).delete(e)), this.Je = this.Je.insert(n, this.dt(n).add(e)), r && (this.ze = this.ze.insert(n, r))
  }
  removeTarget(e) {
    this.Ge.delete(e)
  }
  ot(e) {
    const n = this.tt(e).Le();
    return this.We.getRemoteKeysForTarget(e).size + n.addedDocuments.size - n.removedDocuments.size
  }
  $e(e) {
    this.tt(e).$e()
  }
  tt(e) {
    let n = this.Ge.get(e);
    return n || (n = new Vm, this.Ge.set(e, n)), n
  }
  dt(e) {
    let n = this.Je.get(e);
    return n || (n = new nn(xe), this.Je = this.Je.insert(e, n)), n
  }
  Tt(e) {
    let n = this.je.get(e);
    return n || (n = new nn(xe), this.je = this.je.insert(e, n)), n
  }
  nt(e) {
    const n = this.st(e) !== null;
    return n || U1("WatchChangeAggregator", "Detected inactive target", e), n
  }
  st(e) {
    const n = this.Ge.get(e);
    return n && n.Oe ? null : this.We.Et(e)
  }
  rt(e) {
    this.Ge.set(e, new Vm), this.We.getRemoteKeysForTarget(e).forEach(n => {
      this.Xe(e, n, null)
    })
  }
  It(e, n) {
    return this.We.getRemoteKeysForTarget(e).has(n)
  }
}

function Ll() {
  return new St(Z1.comparator)
}

function Fm() {
  return new St(Z1.comparator)
}
const JP = {
    asc: "ASCENDING",
    desc: "DESCENDING"
  },
  ZP = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
  },
  eA = {
    and: "AND",
    or: "OR"
  };
class tA {
  constructor(e, n) {
    this.databaseId = e, this.useProto3Json = n
  }
}

function bh(t, e) {
  return t.useProto3Json || tc(e) ? e : {
    value: e
  }
}

function _u(t, e) {
  return t.useProto3Json ? `${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z` : {
    seconds: "" + e.seconds,
    nanos: e.nanoseconds
  }
}

function x8(t, e) {
  return t.useProto3Json ? e.toBase64() : e.toUint8Array()
}

function nA(t, e) {
  return _u(t, e.toTimestamp())
}

function I2(t) {
  return Ke(!!t, 49232), pe.fromTimestamp(function(n) {
    const r = Ji(n);
    return new mt(r.seconds, r.nanos)
  }(t))
}

function P9(t, e) {
  return _h(t, e).canonicalString()
}

function _h(t, e) {
  const n = function(i) {
    return new lt(["projects", i.projectId, "databases", i.database])
  }(t).child("documents");
  return e === void 0 ? n : n.child(e)
}

function S8(t) {
  const e = lt.fromString(t);
  return Ke(P8(e), 10190, {
    key: e.toString()
  }), e
}

function xh(t, e) {
  return P9(t.databaseId, e.path)
}

function y4(t, e) {
  const n = S8(e);
  if (n.get(1) !== t.databaseId.projectId) throw new W1(m1.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.databaseId.projectId);
  if (n.get(3) !== t.databaseId.database) throw new W1(m1.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.databaseId.database);
  return new Z1(T8(n))
}

function E8(t, e) {
  return P9(t.databaseId, e)
}

function rA(t) {
  const e = S8(t);
  return e.length === 4 ? lt.emptyPath() : T8(e)
}

function Sh(t) {
  return new lt(["projects", t.databaseId.projectId, "databases", t.databaseId.database]).canonicalString()
}

function T8(t) {
  return Ke(t.length > 4 && t.get(4) === "documents", 29091, {
    key: t.toString()
  }), t.popFirst(5)
}

function Bm(t, e, n) {
  return {
    name: xh(t, e),
    fields: n.value.mapValue.fields
  }
}

function iA(t, e) {
  let n;
  if ("targetChange" in e) {
    e.targetChange;
    const r = function(p) {
        return p === "NO_CHANGE" ? 0 : p === "ADD" ? 1 : p === "REMOVE" ? 2 : p === "CURRENT" ? 3 : p === "RESET" ? 4 : ue(39313, {
          state: p
        })
      }(e.targetChange.targetChangeType || "NO_CHANGE"),
      i = e.targetChange.targetIds || [],
      a = function(p, m) {
        return p.useProto3Json ? (Ke(m === void 0 || typeof m == "string", 58123), Sn.fromBase64String(m || "")) : (Ke(m === void 0 || m instanceof Buffer || m instanceof Uint8Array, 16193), Sn.fromUint8Array(m || new Uint8Array))
      }(t, e.targetChange.resumeToken),
      l = e.targetChange.cause,
      c = l && function(p) {
        const m = p.code === void 0 ? m1.UNKNOWN : w8(p.code);
        return new W1(m, p.message || "")
      }(l);
    n = new _8(r, i, a, c || null)
  } else if ("documentChange" in e) {
    e.documentChange;
    const r = e.documentChange;
    r.document, r.document.name, r.document.updateTime;
    const i = y4(t, r.document.name),
      a = I2(r.document.updateTime),
      l = r.document.createTime ? I2(r.document.createTime) : pe.min(),
      c = new Wr({
        mapValue: {
          fields: r.document.fields
        }
      }),
      h = On.newFoundDocument(i, a, l, c),
      p = r.targetIds || [],
      m = r.removedTargetIds || [];
    n = new Zl(p, m, h.key, h)
  } else if ("documentDelete" in e) {
    e.documentDelete;
    const r = e.documentDelete;
    r.document;
    const i = y4(t, r.document),
      a = r.readTime ? I2(r.readTime) : pe.min(),
      l = On.newNoDocument(i, a),
      c = r.removedTargetIds || [];
    n = new Zl([], c, l.key, l)
  } else if ("documentRemove" in e) {
    e.documentRemove;
    const r = e.documentRemove;
    r.document;
    const i = y4(t, r.document),
      a = r.removedTargetIds || [];
    n = new Zl([], a, i, null)
  } else {
    if (!("filter" in e)) return ue(11601, {
      At: e
    });
    {
      e.filter;
      const r = e.filter;
      r.targetId;
      const {
        count: i = 0,
        unchangedNames: a
      } = r, l = new KP(i, a), c = r.targetId;
      n = new b8(c, l)
    }
  }
  return n
}

function sA(t, e) {
  let n;
  if (e instanceof h0) n = {
    update: Bm(t, e.key, e.value)
  };
  else if (e instanceof v8) n = {
    delete: xh(t, e.key)
  };
  else if (e instanceof ss) n = {
    update: Bm(t, e.key, e.data),
    updateMask: pA(e.fieldMask)
  };
  else {
    if (!(e instanceof HP)) return ue(16599, {
      Rt: e.type
    });
    n = {
      verify: xh(t, e.key)
    }
  }
  return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map(r => function(a, l) {
    const c = l.transform;
    if (c instanceof Xa) return {
      fieldPath: l.field.canonicalString(),
      setToServerValue: "REQUEST_TIME"
    };
    if (c instanceof Ja) return {
      fieldPath: l.field.canonicalString(),
      appendMissingElements: {
        values: c.elements
      }
    };
    if (c instanceof Za) return {
      fieldPath: l.field.canonicalString(),
      removeAllFromArray: {
        values: c.elements
      }
    };
    if (c instanceof bu) return {
      fieldPath: l.field.canonicalString(),
      increment: c.Ee
    };
    throw ue(20930, {
      transform: l.transform
    })
  }(0, r))), e.precondition.isNone || (n.currentDocument = function(i, a) {
    return a.updateTime !== void 0 ? {
      updateTime: nA(i, a.updateTime)
    } : a.exists !== void 0 ? {
      exists: a.exists
    } : ue(27497)
  }(t, e.precondition)), n
}

function oA(t, e) {
  return t && t.length > 0 ? (Ke(e !== void 0, 14353), t.map(n => function(i, a) {
    let l = i.updateTime ? I2(i.updateTime) : I2(a);
    return l.isEqual(pe.min()) && (l = I2(a)), new zP(l, i.transformResults || [])
  }(n, e))) : []
}

function aA(t, e) {
  return {
    documents: [E8(t, e.path)]
  }
}

function lA(t, e) {
  const n = {
      structuredQuery: {}
    },
    r = e.path;
  let i;
  e.collectionGroup !== null ? (i = r, n.structuredQuery.from = [{
    collectionId: e.collectionGroup,
    allDescendants: !0
  }]) : (i = r.popLast(), n.structuredQuery.from = [{
    collectionId: r.lastSegment()
  }]), n.parent = E8(t, i);
  const a = function(p) {
    if (p.length !== 0) return k8(o2.create(p, "and"))
  }(e.filters);
  a && (n.structuredQuery.where = a);
  const l = function(p) {
    if (p.length !== 0) return p.map(m => function(v) {
      return {
        field: Zs(v.field),
        direction: dA(v.dir)
      }
    }(m))
  }(e.orderBy);
  l && (n.structuredQuery.orderBy = l);
  const c = bh(t, e.limit);
  return c !== null && (n.structuredQuery.limit = c), e.startAt && (n.structuredQuery.startAt = function(p) {
    return {
      before: p.inclusive,
      values: p.position
    }
  }(e.startAt)), e.endAt && (n.structuredQuery.endAt = function(p) {
    return {
      before: !p.inclusive,
      values: p.position
    }
  }(e.endAt)), {
    Vt: n,
    parent: i
  }
}

function uA(t) {
  let e = rA(t.parent);
  const n = t.structuredQuery,
    r = n.from ? n.from.length : 0;
  let i = null;
  if (r > 0) {
    Ke(r === 1, 65062);
    const m = n.from[0];
    m.allDescendants ? i = m.collectionId : e = e.child(m.collectionId)
  }
  let a = [];
  n.where && (a = function(y) {
    const v = C8(y);
    return v instanceof o2 && t8(v) ? v.getFilters() : [v]
  }(n.where));
  let l = [];
  n.orderBy && (l = function(y) {
    return y.map(v => function(P) {
      return new Ya(eo(P.field), function(R) {
        switch (R) {
          case "ASCENDING":
            return "asc";
          case "DESCENDING":
            return "desc";
          default:
            return
        }
      }(P.direction))
    }(v))
  }(n.orderBy));
  let c = null;
  n.limit && (c = function(y) {
    let v;
    return v = typeof y == "object" ? y.value : y, tc(v) ? null : v
  }(n.limit));
  let h = null;
  n.startAt && (h = function(y) {
    const v = !!y.before,
      C = y.values || [];
    return new wu(C, v)
  }(n.startAt));
  let p = null;
  return n.endAt && (p = function(y) {
    const v = !y.before,
      C = y.values || [];
    return new wu(C, v)
  }(n.endAt)), PP(e, i, l, a, c, "F", h, p)
}

function cA(t, e) {
  const n = function(i) {
    switch (i) {
      case "TargetPurposeListen":
        return null;
      case "TargetPurposeExistenceFilterMismatch":
        return "existence-filter-mismatch";
      case "TargetPurposeExistenceFilterMismatchBloom":
        return "existence-filter-mismatch-bloom";
      case "TargetPurposeLimboResolution":
        return "limbo-document";
      default:
        return ue(28987, {
          purpose: i
        })
    }
  }(e.purpose);
  return n == null ? null : {
    "goog-listen-tags": n
  }
}

function C8(t) {
  return t.unaryFilter !== void 0 ? function(n) {
    switch (n.unaryFilter.op) {
      case "IS_NAN":
        const r = eo(n.unaryFilter.field);
        return qt.create(r, "==", {
          doubleValue: NaN
        });
      case "IS_NULL":
        const i = eo(n.unaryFilter.field);
        return qt.create(i, "==", {
          nullValue: "NULL_VALUE"
        });
      case "IS_NOT_NAN":
        const a = eo(n.unaryFilter.field);
        return qt.create(a, "!=", {
          doubleValue: NaN
        });
      case "IS_NOT_NULL":
        const l = eo(n.unaryFilter.field);
        return qt.create(l, "!=", {
          nullValue: "NULL_VALUE"
        });
      case "OPERATOR_UNSPECIFIED":
        return ue(61313);
      default:
        return ue(60726)
    }
  }(t) : t.fieldFilter !== void 0 ? function(n) {
    return qt.create(eo(n.fieldFilter.field), function(i) {
      switch (i) {
        case "EQUAL":
          return "==";
        case "NOT_EQUAL":
          return "!=";
        case "GREATER_THAN":
          return ">";
        case "GREATER_THAN_OR_EQUAL":
          return ">=";
        case "LESS_THAN":
          return "<";
        case "LESS_THAN_OR_EQUAL":
          return "<=";
        case "ARRAY_CONTAINS":
          return "array-contains";
        case "IN":
          return "in";
        case "NOT_IN":
          return "not-in";
        case "ARRAY_CONTAINS_ANY":
          return "array-contains-any";
        case "OPERATOR_UNSPECIFIED":
          return ue(58110);
        default:
          return ue(50506)
      }
    }(n.fieldFilter.op), n.fieldFilter.value)
  }(t) : t.compositeFilter !== void 0 ? function(n) {
    return o2.create(n.compositeFilter.filters.map(r => C8(r)), function(i) {
      switch (i) {
        case "AND":
          return "and";
        case "OR":
          return "or";
        default:
          return ue(1026)
      }
    }(n.compositeFilter.op))
  }(t) : ue(30097, {
    filter: t
  })
}

function dA(t) {
  return JP[t]
}

function hA(t) {
  return ZP[t]
}

function fA(t) {
  return eA[t]
}

function Zs(t) {
  return {
    fieldPath: t.canonicalString()
  }
}

function eo(t) {
  return xn.fromServerFormat(t.fieldPath)
}

function k8(t) {
  return t instanceof qt ? function(n) {
    if (n.op === "==") {
      if (km(n.value)) return {
        unaryFilter: {
          field: Zs(n.field),
          op: "IS_NAN"
        }
      };
      if (Cm(n.value)) return {
        unaryFilter: {
          field: Zs(n.field),
          op: "IS_NULL"
        }
      }
    } else if (n.op === "!=") {
      if (km(n.value)) return {
        unaryFilter: {
          field: Zs(n.field),
          op: "IS_NOT_NAN"
        }
      };
      if (Cm(n.value)) return {
        unaryFilter: {
          field: Zs(n.field),
          op: "IS_NOT_NULL"
        }
      }
    }
    return {
      fieldFilter: {
        field: Zs(n.field),
        op: hA(n.op),
        value: n.value
      }
    }
  }(t) : t instanceof o2 ? function(n) {
    const r = n.getFilters().map(i => k8(i));
    return r.length === 1 ? r[0] : {
      compositeFilter: {
        op: fA(n.op),
        filters: r
      }
    }
  }(t) : ue(54877, {
    filter: t
  })
}

function pA(t) {
  const e = [];
  return t.fields.forEach(n => e.push(n.canonicalString())), {
    fieldPaths: e
  }
}

function P8(t) {
  return t.length >= 4 && t.get(0) === "projects" && t.get(2) === "databases"
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
class $i {
  constructor(e, n, r, i, a = pe.min(), l = pe.min(), c = Sn.EMPTY_BYTE_STRING, h = null) {
    this.target = e, this.targetId = n, this.purpose = r, this.sequenceNumber = i, this.snapshotVersion = a, this.lastLimboFreeSnapshotVersion = l, this.resumeToken = c, this.expectedCount = h
  }
  withSequenceNumber(e) {
    return new $i(this.target, this.targetId, this.purpose, e, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, this.expectedCount)
  }
  withResumeToken(e, n) {
    return new $i(this.target, this.targetId, this.purpose, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e, null)
  }
  withExpectedCount(e) {
    return new $i(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, e)
  }
  withLastLimboFreeSnapshotVersion(e) {
    return new $i(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, e, this.resumeToken, this.expectedCount)
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
class mA {
  constructor(e) {
    this.gt = e
  }
}

function gA(t) {
  const e = uA({
    parent: t.parent,
    structuredQuery: t.structuredQuery
  });
  return t.limitType === "LAST" ? wh(e, e.limit, "L") : e
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
class yA {
  constructor() {
    this.Dn = new vA
  }
  addToCollectionParentIndex(e, n) {
    return this.Dn.add(n), g1.resolve()
  }
  getCollectionParents(e, n) {
    return g1.resolve(this.Dn.getEntries(n))
  }
  addFieldIndex(e, n) {
    return g1.resolve()
  }
  deleteFieldIndex(e, n) {
    return g1.resolve()
  }
  deleteAllFieldIndexes(e) {
    return g1.resolve()
  }
  createTargetIndexes(e, n) {
    return g1.resolve()
  }
  getDocumentsMatchingTarget(e, n) {
    return g1.resolve(null)
  }
  getIndexType(e, n) {
    return g1.resolve(0)
  }
  getFieldIndexes(e, n) {
    return g1.resolve([])
  }
  getNextCollectionGroupToUpdate(e) {
    return g1.resolve(null)
  }
  getMinOffset(e, n) {
    return g1.resolve(Xi.min())
  }
  getMinOffsetFromCollectionGroup(e, n) {
    return g1.resolve(Xi.min())
  }
  updateCollectionGroup(e, n, r) {
    return g1.resolve()
  }
  updateIndexEntries(e, n) {
    return g1.resolve()
  }
}
class vA {
  constructor() {
    this.index = {}
  }
  add(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n] || new nn(lt.comparator),
      a = !i.has(r);
    return this.index[n] = i.add(r), a
  }
  has(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n];
    return i && i.has(r)
  }
  getEntries(e) {
    return (this.index[e] || new nn(lt.comparator)).toArray()
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
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
const $m = {
    didRun: !1,
    sequenceNumbersCollected: 0,
    targetsRemoved: 0,
    documentsRemoved: 0
  },
  A8 = 41943040;
class or {
  static withCacheSize(e) {
    return new or(e, or.DEFAULT_COLLECTION_PERCENTILE, or.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)
  }
  constructor(e, n, r) {
    this.cacheSizeCollectionThreshold = e, this.percentileToCollect = n, this.maximumSequenceNumbersToCollect = r
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
or.DEFAULT_COLLECTION_PERCENTILE = 10, or.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, or.DEFAULT = new or(A8, or.DEFAULT_COLLECTION_PERCENTILE, or.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), or.DISABLED = new or(-1, 0, 0);
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
class vo {
  constructor(e) {
    this._r = e
  }
  next() {
    return this._r += 2, this._r
  }
  static ar() {
    return new vo(0)
  }
  static ur() {
    return new vo(-1)
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
const zm = "LruGarbageCollector",
  wA = 1048576;

function Um([t, e], [n, r]) {
  const i = xe(t, n);
  return i === 0 ? xe(e, r) : i
}
class bA {
  constructor(e) {
    this.Tr = e, this.buffer = new nn(Um), this.Ir = 0
  }
  dr() {
    return ++this.Ir
  }
  Er(e) {
    const n = [e, this.dr()];
    if (this.buffer.size < this.Tr) this.buffer = this.buffer.add(n);
    else {
      const r = this.buffer.last();
      Um(n, r) < 0 && (this.buffer = this.buffer.delete(r).add(n))
    }
  }
  get maxValue() {
    return this.buffer.last()[0]
  }
}
class _A {
  constructor(e, n, r) {
    this.garbageCollector = e, this.asyncQueue = n, this.localStore = r, this.Ar = null
  }
  start() {
    this.garbageCollector.params.cacheSizeCollectionThreshold !== -1 && this.Rr(6e4)
  }
  stop() {
    this.Ar && (this.Ar.cancel(), this.Ar = null)
  }
  get started() {
    return this.Ar !== null
  }
  Rr(e) {
    U1(zm, `Garbage collection scheduled in ${e}ms`), this.Ar = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", e, async () => {
      this.Ar = null;
      try {
        await this.localStore.collectGarbage(this.garbageCollector)
      } catch (n) {
        Io(n) ? U1(zm, "Ignoring IndexedDB error during garbage collection: ", n) : await Ao(n)
      }
      await this.Rr(3e5)
    })
  }
}
class xA {
  constructor(e, n) {
    this.Vr = e, this.params = n
  }
  calculateTargetCount(e, n) {
    return this.Vr.mr(e).next(r => Math.floor(n / 100 * r))
  }
  nthSequenceNumber(e, n) {
    if (n === 0) return g1.resolve(ec.ue);
    const r = new bA(n);
    return this.Vr.forEachTarget(e, i => r.Er(i.sequenceNumber)).next(() => this.Vr.gr(e, i => r.Er(i))).next(() => r.maxValue)
  }
  removeTargets(e, n, r) {
    return this.Vr.removeTargets(e, n, r)
  }
  removeOrphanedDocuments(e, n) {
    return this.Vr.removeOrphanedDocuments(e, n)
  }
  collect(e, n) {
    return this.params.cacheSizeCollectionThreshold === -1 ? (U1("LruGarbageCollector", "Garbage collection skipped; disabled"), g1.resolve($m)) : this.getCacheSize(e).next(r => r < this.params.cacheSizeCollectionThreshold ? (U1("LruGarbageCollector", `Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`), $m) : this.pr(e, n))
  }
  getCacheSize(e) {
    return this.Vr.getCacheSize(e)
  }
  pr(e, n) {
    let r, i, a, l, c, h, p;
    const m = Date.now();
    return this.calculateTargetCount(e, this.params.percentileToCollect).next(y => (y > this.params.maximumSequenceNumbersToCollect ? (U1("LruGarbageCollector", `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`), i = this.params.maximumSequenceNumbersToCollect) : i = y, l = Date.now(), this.nthSequenceNumber(e, i))).next(y => (r = y, c = Date.now(), this.removeTargets(e, r, n))).next(y => (a = y, h = Date.now(), this.removeOrphanedDocuments(e, r))).next(y => (p = Date.now(), Xs() <= De.DEBUG && U1("LruGarbageCollector", `LRU Garbage Collection
	Counted targets in ${l-m}ms
	Determined least recently used ${i} in ` + (c - l) + `ms
	Removed ${a} targets in ` + (h - c) + `ms
	Removed ${y} documents in ` + (p - h) + `ms
Total Duration: ${p-m}ms`), g1.resolve({
      didRun: !0,
      sequenceNumbersCollected: i,
      targetsRemoved: a,
      documentsRemoved: y
    })))
  }
}

function SA(t, e) {
  return new xA(t, e)
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
class EA {
  constructor() {
    this.changes = new is(e => e.toString(), (e, n) => e.isEqual(n)), this.changesApplied = !1
  }
  addEntry(e) {
    this.assertNotApplied(), this.changes.set(e.key, e)
  }
  removeEntry(e, n) {
    this.assertNotApplied(), this.changes.set(e, On.newInvalidDocument(e).setReadTime(n))
  }
  getEntry(e, n) {
    this.assertNotApplied();
    const r = this.changes.get(n);
    return r !== void 0 ? g1.resolve(r) : this.getFromCache(e, n)
  }
  getEntries(e, n) {
    return this.getAllFromCache(e, n)
  }
  apply(e) {
    return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(e)
  }
  assertNotApplied() {}
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
/**
 * @license
 * Copyright 2022 Google LLC
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
class TA {
  constructor(e, n) {
    this.overlayedDocument = e, this.mutatedFields = n
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
class CA {
  constructor(e, n, r, i) {
    this.remoteDocumentCache = e, this.mutationQueue = n, this.documentOverlayCache = r, this.indexManager = i
  }
  getDocument(e, n) {
    let r = null;
    return this.documentOverlayCache.getOverlay(e, n).next(i => (r = i, this.remoteDocumentCache.getEntry(e, n))).next(i => (r !== null && Da(r.mutation, i, i2.empty(), mt.now()), i))
  }
  getDocuments(e, n) {
    return this.remoteDocumentCache.getEntries(e, n).next(r => this.getLocalViewOfDocuments(e, r, Ae()).next(() => r))
  }
  getLocalViewOfDocuments(e, n, r = Ae()) {
    const i = j3();
    return this.populateOverlays(e, i, n).next(() => this.computeViews(e, n, i, r).next(a => {
      let l = _a();
      return a.forEach((c, h) => {
        l = l.insert(c, h.overlayedDocument)
      }), l
    }))
  }
  getOverlayedDocuments(e, n) {
    const r = j3();
    return this.populateOverlays(e, r, n).next(() => this.computeViews(e, n, r, Ae()))
  }
  populateOverlays(e, n, r) {
    const i = [];
    return r.forEach(a => {
      n.has(a) || i.push(a)
    }), this.documentOverlayCache.getOverlays(e, i).next(a => {
      a.forEach((l, c) => {
        n.set(l, c)
      })
    })
  }
  computeViews(e, n, r, i) {
    let a = di();
    const l = Ma(),
      c = function() {
        return Ma()
      }();
    return n.forEach((h, p) => {
      const m = r.get(p.key);
      i.has(p.key) && (m === void 0 || m.mutation instanceof ss) ? a = a.insert(p.key, p) : m !== void 0 ? (l.set(p.key, m.mutation.getFieldMask()), Da(m.mutation, p, m.mutation.getFieldMask(), mt.now())) : l.set(p.key, i2.empty())
    }), this.recalculateAndSaveOverlays(e, a).next(h => (h.forEach((p, m) => l.set(p, m)), n.forEach((p, m) => {
      var y;
      return c.set(p, new TA(m, (y = l.get(p)) !== null && y !== void 0 ? y : null))
    }), c))
  }
  recalculateAndSaveOverlays(e, n) {
    const r = Ma();
    let i = new St((l, c) => l - c),
      a = Ae();
    return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e, n).next(l => {
      for (const c of l) c.keys().forEach(h => {
        const p = n.get(h);
        if (p === null) return;
        let m = r.get(h) || i2.empty();
        m = c.applyToLocalView(p, m), r.set(h, m);
        const y = (i.get(c.batchId) || Ae()).add(h);
        i = i.insert(c.batchId, y)
      })
    }).next(() => {
      const l = [],
        c = i.getReverseIterator();
      for (; c.hasNext();) {
        const h = c.getNext(),
          p = h.key,
          m = h.value,
          y = c8();
        m.forEach(v => {
          if (!a.has(v)) {
            const C = g8(n.get(v), r.get(v));
            C !== null && y.set(v, C), a = a.add(v)
          }
        }), l.push(this.documentOverlayCache.saveOverlays(e, p, y))
      }
      return g1.waitFor(l)
    }).next(() => r)
  }
  recalculateAndSaveOverlaysForDocumentKeys(e, n) {
    return this.remoteDocumentCache.getEntries(e, n).next(r => this.recalculateAndSaveOverlays(e, r))
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    return function(l) {
      return Z1.isDocumentKey(l.path) && l.collectionGroup === null && l.filters.length === 0
    }(n) ? this.getDocumentsMatchingDocumentQuery(e, n.path) : s8(n) ? this.getDocumentsMatchingCollectionGroupQuery(e, n, r, i) : this.getDocumentsMatchingCollectionQuery(e, n, r, i)
  }
  getNextDocuments(e, n, r, i) {
    return this.remoteDocumentCache.getAllFromCollectionGroup(e, n, r, i).next(a => {
      const l = i - a.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(e, n, r.largestBatchId, i - a.size) : g1.resolve(j3());
      let c = qa,
        h = a;
      return l.next(p => g1.forEach(p, (m, y) => (c < y.largestBatchId && (c = y.largestBatchId), a.get(m) ? g1.resolve() : this.remoteDocumentCache.getEntry(e, m).next(v => {
        h = h.insert(m, v)
      }))).next(() => this.populateOverlays(e, p, a)).next(() => this.computeViews(e, h, p, Ae())).next(m => ({
        batchId: c,
        changes: u8(m)
      })))
    })
  }
  getDocumentsMatchingDocumentQuery(e, n) {
    return this.getDocument(e, new Z1(n)).next(r => {
      let i = _a();
      return r.isFoundDocument() && (i = i.insert(r.key, r)), i
    })
  }
  getDocumentsMatchingCollectionGroupQuery(e, n, r, i) {
    const a = n.collectionGroup;
    let l = _a();
    return this.indexManager.getCollectionParents(e, a).next(c => g1.forEach(c, h => {
      const p = function(y, v) {
        return new Ro(v, null, y.explicitOrderBy.slice(), y.filters.slice(), y.limit, y.limitType, y.startAt, y.endAt)
      }(n, h.child(a));
      return this.getDocumentsMatchingCollectionQuery(e, p, r, i).next(m => {
        m.forEach((y, v) => {
          l = l.insert(y, v)
        })
      })
    }).next(() => l))
  }
  getDocumentsMatchingCollectionQuery(e, n, r, i) {
    let a;
    return this.documentOverlayCache.getOverlaysForCollection(e, n.path, r.largestBatchId).next(l => (a = l, this.remoteDocumentCache.getDocumentsMatchingQuery(e, n, r, a, i))).next(l => {
      a.forEach((h, p) => {
        const m = p.getKey();
        l.get(m) === null && (l = l.insert(m, On.newInvalidDocument(m)))
      });
      let c = _a();
      return l.forEach((h, p) => {
        const m = a.get(h);
        m !== void 0 && Da(m.mutation, p, i2.empty(), mt.now()), ic(n, p) && (c = c.insert(h, p))
      }), c
    })
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
class kA {
  constructor(e) {
    this.serializer = e, this.Br = new Map, this.Lr = new Map
  }
  getBundleMetadata(e, n) {
    return g1.resolve(this.Br.get(n))
  }
  saveBundleMetadata(e, n) {
    return this.Br.set(n.id, function(i) {
      return {
        id: i.id,
        version: i.version,
        createTime: I2(i.createTime)
      }
    }(n)), g1.resolve()
  }
  getNamedQuery(e, n) {
    return g1.resolve(this.Lr.get(n))
  }
  saveNamedQuery(e, n) {
    return this.Lr.set(n.name, function(i) {
      return {
        name: i.name,
        query: gA(i.bundledQuery),
        readTime: I2(i.readTime)
      }
    }(n)), g1.resolve()
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
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
class PA {
  constructor() {
    this.overlays = new St(Z1.comparator), this.kr = new Map
  }
  getOverlay(e, n) {
    return g1.resolve(this.overlays.get(n))
  }
  getOverlays(e, n) {
    const r = j3();
    return g1.forEach(n, i => this.getOverlay(e, i).next(a => {
      a !== null && r.set(i, a)
    })).next(() => r)
  }
  saveOverlays(e, n, r) {
    return r.forEach((i, a) => {
      this.wt(e, n, a)
    }), g1.resolve()
  }
  removeOverlaysForBatchId(e, n, r) {
    const i = this.kr.get(r);
    return i !== void 0 && (i.forEach(a => this.overlays = this.overlays.remove(a)), this.kr.delete(r)), g1.resolve()
  }
  getOverlaysForCollection(e, n, r) {
    const i = j3(),
      a = n.length + 1,
      l = new Z1(n.child("")),
      c = this.overlays.getIteratorFrom(l);
    for (; c.hasNext();) {
      const h = c.getNext().value,
        p = h.getKey();
      if (!n.isPrefixOf(p.path)) break;
      p.path.length === a && h.largestBatchId > r && i.set(h.getKey(), h)
    }
    return g1.resolve(i)
  }
  getOverlaysForCollectionGroup(e, n, r, i) {
    let a = new St((p, m) => p - m);
    const l = this.overlays.getIterator();
    for (; l.hasNext();) {
      const p = l.getNext().value;
      if (p.getKey().getCollectionGroup() === n && p.largestBatchId > r) {
        let m = a.get(p.largestBatchId);
        m === null && (m = j3(), a = a.insert(p.largestBatchId, m)), m.set(p.getKey(), p)
      }
    }
    const c = j3(),
      h = a.getIterator();
    for (; h.hasNext() && (h.getNext().value.forEach((p, m) => c.set(p, m)), !(c.size() >= i)););
    return g1.resolve(c)
  }
  wt(e, n, r) {
    const i = this.overlays.get(r.key);
    if (i !== null) {
      const l = this.kr.get(i.largestBatchId).delete(r.key);
      this.kr.set(i.largestBatchId, l)
    }
    this.overlays = this.overlays.insert(r.key, new GP(n, r));
    let a = this.kr.get(n);
    a === void 0 && (a = Ae(), this.kr.set(n, a)), this.kr.set(n, a.add(r.key))
  }
}
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
class AA {
  constructor() {
    this.sessionToken = Sn.EMPTY_BYTE_STRING
  }
  getSessionToken(e) {
    return g1.resolve(this.sessionToken)
  }
  setSessionToken(e, n) {
    return this.sessionToken = n, g1.resolve()
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
class A9 {
  constructor() {
    this.qr = new nn(cn.Qr), this.$r = new nn(cn.Ur)
  }
  isEmpty() {
    return this.qr.isEmpty()
  }
  addReference(e, n) {
    const r = new cn(e, n);
    this.qr = this.qr.add(r), this.$r = this.$r.add(r)
  }
  Kr(e, n) {
    e.forEach(r => this.addReference(r, n))
  }
  removeReference(e, n) {
    this.Wr(new cn(e, n))
  }
  Gr(e, n) {
    e.forEach(r => this.removeReference(r, n))
  }
  zr(e) {
    const n = new Z1(new lt([])),
      r = new cn(n, e),
      i = new cn(n, e + 1),
      a = [];
    return this.$r.forEachInRange([r, i], l => {
      this.Wr(l), a.push(l.key)
    }), a
  }
  jr() {
    this.qr.forEach(e => this.Wr(e))
  }
  Wr(e) {
    this.qr = this.qr.delete(e), this.$r = this.$r.delete(e)
  }
  Jr(e) {
    const n = new Z1(new lt([])),
      r = new cn(n, e),
      i = new cn(n, e + 1);
    let a = Ae();
    return this.$r.forEachInRange([r, i], l => {
      a = a.add(l.key)
    }), a
  }
  containsKey(e) {
    const n = new cn(e, 0),
      r = this.qr.firstAfterOrEqual(n);
    return r !== null && e.isEqual(r.key)
  }
}
class cn {
  constructor(e, n) {
    this.key = e, this.Hr = n
  }
  static Qr(e, n) {
    return Z1.comparator(e.key, n.key) || xe(e.Hr, n.Hr)
  }
  static Ur(e, n) {
    return xe(e.Hr, n.Hr) || Z1.comparator(e.key, n.key)
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
class IA {
  constructor(e, n) {
    this.indexManager = e, this.referenceDelegate = n, this.mutationQueue = [], this.er = 1, this.Yr = new nn(cn.Qr)
  }
  checkEmpty(e) {
    return g1.resolve(this.mutationQueue.length === 0)
  }
  addMutationBatch(e, n, r, i) {
    const a = this.er;
    this.er++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
    const l = new qP(a, n, r, i);
    this.mutationQueue.push(l);
    for (const c of i) this.Yr = this.Yr.add(new cn(c.key, a)), this.indexManager.addToCollectionParentIndex(e, c.key.path.popLast());
    return g1.resolve(l)
  }
  lookupMutationBatch(e, n) {
    return g1.resolve(this.Zr(n))
  }
  getNextMutationBatchAfterBatchId(e, n) {
    const r = n + 1,
      i = this.Xr(r),
      a = i < 0 ? 0 : i;
    return g1.resolve(this.mutationQueue.length > a ? this.mutationQueue[a] : null)
  }
  getHighestUnacknowledgedBatchId() {
    return g1.resolve(this.mutationQueue.length === 0 ? w9 : this.er - 1)
  }
  getAllMutationBatches(e) {
    return g1.resolve(this.mutationQueue.slice())
  }
  getAllMutationBatchesAffectingDocumentKey(e, n) {
    const r = new cn(n, 0),
      i = new cn(n, Number.POSITIVE_INFINITY),
      a = [];
    return this.Yr.forEachInRange([r, i], l => {
      const c = this.Zr(l.Hr);
      a.push(c)
    }), g1.resolve(a)
  }
  getAllMutationBatchesAffectingDocumentKeys(e, n) {
    let r = new nn(xe);
    return n.forEach(i => {
      const a = new cn(i, 0),
        l = new cn(i, Number.POSITIVE_INFINITY);
      this.Yr.forEachInRange([a, l], c => {
        r = r.add(c.Hr)
      })
    }), g1.resolve(this.ei(r))
  }
  getAllMutationBatchesAffectingQuery(e, n) {
    const r = n.path,
      i = r.length + 1;
    let a = r;
    Z1.isDocumentKey(a) || (a = a.child(""));
    const l = new cn(new Z1(a), 0);
    let c = new nn(xe);
    return this.Yr.forEachWhile(h => {
      const p = h.key.path;
      return !!r.isPrefixOf(p) && (p.length === i && (c = c.add(h.Hr)), !0)
    }, l), g1.resolve(this.ei(c))
  }
  ei(e) {
    const n = [];
    return e.forEach(r => {
      const i = this.Zr(r);
      i !== null && n.push(i)
    }), n
  }
  removeMutationBatch(e, n) {
    Ke(this.ti(n.batchId, "removed") === 0, 55003), this.mutationQueue.shift();
    let r = this.Yr;
    return g1.forEach(n.mutations, i => {
      const a = new cn(i.key, n.batchId);
      return r = r.delete(a), this.referenceDelegate.markPotentiallyOrphaned(e, i.key)
    }).next(() => {
      this.Yr = r
    })
  }
  rr(e) {}
  containsKey(e, n) {
    const r = new cn(n, 0),
      i = this.Yr.firstAfterOrEqual(r);
    return g1.resolve(n.isEqual(i && i.key))
  }
  performConsistencyCheck(e) {
    return this.mutationQueue.length, g1.resolve()
  }
  ti(e, n) {
    return this.Xr(e)
  }
  Xr(e) {
    return this.mutationQueue.length === 0 ? 0 : e - this.mutationQueue[0].batchId
  }
  Zr(e) {
    const n = this.Xr(e);
    return n < 0 || n >= this.mutationQueue.length ? null : this.mutationQueue[n]
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
class RA {
  constructor(e) {
    this.ni = e, this.docs = function() {
      return new St(Z1.comparator)
    }(), this.size = 0
  }
  setIndexManager(e) {
    this.indexManager = e
  }
  addEntry(e, n) {
    const r = n.key,
      i = this.docs.get(r),
      a = i ? i.size : 0,
      l = this.ni(n);
    return this.docs = this.docs.insert(r, {
      document: n.mutableCopy(),
      size: l
    }), this.size += l - a, this.indexManager.addToCollectionParentIndex(e, r.path.popLast())
  }
  removeEntry(e) {
    const n = this.docs.get(e);
    n && (this.docs = this.docs.remove(e), this.size -= n.size)
  }
  getEntry(e, n) {
    const r = this.docs.get(n);
    return g1.resolve(r ? r.document.mutableCopy() : On.newInvalidDocument(n))
  }
  getEntries(e, n) {
    let r = di();
    return n.forEach(i => {
      const a = this.docs.get(i);
      r = r.insert(i, a ? a.document.mutableCopy() : On.newInvalidDocument(i))
    }), g1.resolve(r)
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    let a = di();
    const l = n.path,
      c = new Z1(l.child("__id-9223372036854775808__")),
      h = this.docs.getIteratorFrom(c);
    for (; h.hasNext();) {
      const {
        key: p,
        value: {
          document: m
        }
      } = h.getNext();
      if (!l.isPrefixOf(p.path)) break;
      p.path.length > l.length + 1 || oP(sP(m), r) <= 0 || (i.has(m.key) || ic(n, m)) && (a = a.insert(m.key, m.mutableCopy()))
    }
    return g1.resolve(a)
  }
  getAllFromCollectionGroup(e, n, r, i) {
    ue(9500)
  }
  ri(e, n) {
    return g1.forEach(this.docs, r => n(r))
  }
  newChangeBuffer(e) {
    return new NA(this)
  }
  getSize(e) {
    return g1.resolve(this.size)
  }
}
class NA extends EA {
  constructor(e) {
    super(), this.Or = e
  }
  applyChanges(e) {
    const n = [];
    return this.changes.forEach((r, i) => {
      i.isValidDocument() ? n.push(this.Or.addEntry(e, i)) : this.Or.removeEntry(r)
    }), g1.waitFor(n)
  }
  getFromCache(e, n) {
    return this.Or.getEntry(e, n)
  }
  getAllFromCache(e, n) {
    return this.Or.getEntries(e, n)
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
class LA {
  constructor(e) {
    this.persistence = e, this.ii = new is(n => x9(n), S9), this.lastRemoteSnapshotVersion = pe.min(), this.highestTargetId = 0, this.si = 0, this.oi = new A9, this.targetCount = 0, this._i = vo.ar()
  }
  forEachTarget(e, n) {
    return this.ii.forEach((r, i) => n(i)), g1.resolve()
  }
  getLastRemoteSnapshotVersion(e) {
    return g1.resolve(this.lastRemoteSnapshotVersion)
  }
  getHighestSequenceNumber(e) {
    return g1.resolve(this.si)
  }
  allocateTargetId(e) {
    return this.highestTargetId = this._i.next(), g1.resolve(this.highestTargetId)
  }
  setTargetsMetadata(e, n, r) {
    return r && (this.lastRemoteSnapshotVersion = r), n > this.si && (this.si = n), g1.resolve()
  }
  hr(e) {
    this.ii.set(e.target, e);
    const n = e.targetId;
    n > this.highestTargetId && (this._i = new vo(n), this.highestTargetId = n), e.sequenceNumber > this.si && (this.si = e.sequenceNumber)
  }
  addTargetData(e, n) {
    return this.hr(n), this.targetCount += 1, g1.resolve()
  }
  updateTargetData(e, n) {
    return this.hr(n), g1.resolve()
  }
  removeTargetData(e, n) {
    return this.ii.delete(n.target), this.oi.zr(n.targetId), this.targetCount -= 1, g1.resolve()
  }
  removeTargets(e, n, r) {
    let i = 0;
    const a = [];
    return this.ii.forEach((l, c) => {
      c.sequenceNumber <= n && r.get(c.targetId) === null && (this.ii.delete(l), a.push(this.removeMatchingKeysForTargetId(e, c.targetId)), i++)
    }), g1.waitFor(a).next(() => i)
  }
  getTargetCount(e) {
    return g1.resolve(this.targetCount)
  }
  getTargetData(e, n) {
    const r = this.ii.get(n) || null;
    return g1.resolve(r)
  }
  addMatchingKeys(e, n, r) {
    return this.oi.Kr(n, r), g1.resolve()
  }
  removeMatchingKeys(e, n, r) {
    this.oi.Gr(n, r);
    const i = this.persistence.referenceDelegate,
      a = [];
    return i && n.forEach(l => {
      a.push(i.markPotentiallyOrphaned(e, l))
    }), g1.waitFor(a)
  }
  removeMatchingKeysForTargetId(e, n) {
    return this.oi.zr(n), g1.resolve()
  }
  getMatchingKeysForTargetId(e, n) {
    const r = this.oi.Jr(n);
    return g1.resolve(r)
  }
  containsKey(e, n) {
    return g1.resolve(this.oi.containsKey(n))
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
class I8 {
  constructor(e, n) {
    this.ai = {}, this.overlays = {}, this.ui = new ec(0), this.ci = !1, this.ci = !0, this.li = new AA, this.referenceDelegate = e(this), this.hi = new LA(this), this.indexManager = new yA, this.remoteDocumentCache = function(i) {
      return new RA(i)
    }(r => this.referenceDelegate.Pi(r)), this.serializer = new mA(n), this.Ti = new kA(this.serializer)
  }
  start() {
    return Promise.resolve()
  }
  shutdown() {
    return this.ci = !1, Promise.resolve()
  }
  get started() {
    return this.ci
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(e) {
    return this.indexManager
  }
  getDocumentOverlayCache(e) {
    let n = this.overlays[e.toKey()];
    return n || (n = new PA, this.overlays[e.toKey()] = n), n
  }
  getMutationQueue(e, n) {
    let r = this.ai[e.toKey()];
    return r || (r = new IA(n, this.referenceDelegate), this.ai[e.toKey()] = r), r
  }
  getGlobalsCache() {
    return this.li
  }
  getTargetCache() {
    return this.hi
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache
  }
  getBundleCache() {
    return this.Ti
  }
  runTransaction(e, n, r) {
    U1("MemoryPersistence", "Starting transaction:", e);
    const i = new MA(this.ui.next());
    return this.referenceDelegate.Ii(), r(i).next(a => this.referenceDelegate.di(i).next(() => a)).toPromise().then(a => (i.raiseOnCommittedEvent(), a))
  }
  Ei(e, n) {
    return g1.or(Object.values(this.ai).map(r => () => r.containsKey(e, n)))
  }
}
class MA extends lP {
  constructor(e) {
    super(), this.currentSequenceNumber = e
  }
}
class I9 {
  constructor(e) {
    this.persistence = e, this.Ai = new A9, this.Ri = null
  }
  static Vi(e) {
    return new I9(e)
  }
  get mi() {
    if (this.Ri) return this.Ri;
    throw ue(60996)
  }
  addReference(e, n, r) {
    return this.Ai.addReference(r, n), this.mi.delete(r.toString()), g1.resolve()
  }
  removeReference(e, n, r) {
    return this.Ai.removeReference(r, n), this.mi.add(r.toString()), g1.resolve()
  }
  markPotentiallyOrphaned(e, n) {
    return this.mi.add(n.toString()), g1.resolve()
  }
  removeTarget(e, n) {
    this.Ai.zr(n.targetId).forEach(i => this.mi.add(i.toString()));
    const r = this.persistence.getTargetCache();
    return r.getMatchingKeysForTargetId(e, n.targetId).next(i => {
      i.forEach(a => this.mi.add(a.toString()))
    }).next(() => r.removeTargetData(e, n))
  }
  Ii() {
    this.Ri = new Set
  }
  di(e) {
    const n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return g1.forEach(this.mi, r => {
      const i = Z1.fromPath(r);
      return this.fi(e, i).next(a => {
        a || n.removeEntry(i, pe.min())
      })
    }).next(() => (this.Ri = null, n.apply(e)))
  }
  updateLimboDocument(e, n) {
    return this.fi(e, n).next(r => {
      r ? this.mi.delete(n.toString()) : this.mi.add(n.toString())
    })
  }
  Pi(e) {
    return 0
  }
  fi(e, n) {
    return g1.or([() => g1.resolve(this.Ai.containsKey(n)), () => this.persistence.getTargetCache().containsKey(e, n), () => this.persistence.Ei(e, n)])
  }
}
class xu {
  constructor(e, n) {
    this.persistence = e, this.gi = new is(r => dP(r.path), (r, i) => r.isEqual(i)), this.garbageCollector = SA(this, n)
  }
  static Vi(e, n) {
    return new xu(e, n)
  }
  Ii() {}
  di(e) {
    return g1.resolve()
  }
  forEachTarget(e, n) {
    return this.persistence.getTargetCache().forEachTarget(e, n)
  }
  mr(e) {
    const n = this.yr(e);
    return this.persistence.getTargetCache().getTargetCount(e).next(r => n.next(i => r + i))
  }
  yr(e) {
    let n = 0;
    return this.gr(e, r => {
      n++
    }).next(() => n)
  }
  gr(e, n) {
    return g1.forEach(this.gi, (r, i) => this.Sr(e, r, i).next(a => a ? g1.resolve() : n(i)))
  }
  removeTargets(e, n, r) {
    return this.persistence.getTargetCache().removeTargets(e, n, r)
  }
  removeOrphanedDocuments(e, n) {
    let r = 0;
    const i = this.persistence.getRemoteDocumentCache(),
      a = i.newChangeBuffer();
    return i.ri(e, l => this.Sr(e, l, n).next(c => {
      c || (r++, a.removeEntry(l, pe.min()))
    })).next(() => a.apply(e)).next(() => r)
  }
  markPotentiallyOrphaned(e, n) {
    return this.gi.set(n, e.currentSequenceNumber), g1.resolve()
  }
  removeTarget(e, n) {
    const r = n.withSequenceNumber(e.currentSequenceNumber);
    return this.persistence.getTargetCache().updateTargetData(e, r)
  }
  addReference(e, n, r) {
    return this.gi.set(r, e.currentSequenceNumber), g1.resolve()
  }
  removeReference(e, n, r) {
    return this.gi.set(r, e.currentSequenceNumber), g1.resolve()
  }
  updateLimboDocument(e, n) {
    return this.gi.set(n, e.currentSequenceNumber), g1.resolve()
  }
  Pi(e) {
    let n = e.key.toString().length;
    return e.isFoundDocument() && (n += Yl(e.data.value)), n
  }
  Sr(e, n, r) {
    return g1.or([() => this.persistence.Ei(e, n), () => this.persistence.getTargetCache().containsKey(e, n), () => {
      const i = this.gi.get(n);
      return g1.resolve(i !== void 0 && i > r)
    }])
  }
  getCacheSize(e) {
    return this.persistence.getRemoteDocumentCache().getSize(e)
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
class R9 {
  constructor(e, n, r, i) {
    this.targetId = e, this.fromCache = n, this.Is = r, this.ds = i
  }
  static Es(e, n) {
    let r = Ae(),
      i = Ae();
    for (const a of n.docChanges) switch (a.type) {
      case 0:
        r = r.add(a.doc.key);
        break;
      case 1:
        i = i.add(a.doc.key)
    }
    return new R9(e, n.fromCache, r, i)
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
class DA {
  constructor() {
    this._documentReadCount = 0
  }
  get documentReadCount() {
    return this._documentReadCount
  }
  incrementDocumentReadCount(e) {
    this._documentReadCount += e
  }
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
class OA {
  constructor() {
    this.As = !1, this.Rs = !1, this.Vs = 100, this.fs = function() {
      return NC() ? 8 : uP(IC()) > 0 ? 6 : 4
    }()
  }
  initialize(e, n) {
    this.gs = e, this.indexManager = n, this.As = !0
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    const a = {
      result: null
    };
    return this.ps(e, n).next(l => {
      a.result = l
    }).next(() => {
      if (!a.result) return this.ys(e, n, i, r).next(l => {
        a.result = l
      })
    }).next(() => {
      if (a.result) return;
      const l = new DA;
      return this.ws(e, n, l).next(c => {
        if (a.result = c, this.Rs) return this.Ss(e, n, l, c.size)
      })
    }).next(() => a.result)
  }
  Ss(e, n, r, i) {
    return r.documentReadCount < this.Vs ? (Xs() <= De.DEBUG && U1("QueryEngine", "SDK will not create cache indexes for query:", Js(n), "since it only creates cache indexes for collection contains", "more than or equal to", this.Vs, "documents"), g1.resolve()) : (Xs() <= De.DEBUG && U1("QueryEngine", "Query:", Js(n), "scans", r.documentReadCount, "local documents and returns", i, "documents as results."), r.documentReadCount > this.fs * i ? (Xs() <= De.DEBUG && U1("QueryEngine", "The SDK decides to create cache indexes for query:", Js(n), "as using cache indexes may help improve performance."), this.indexManager.createTargetIndexes(e, A2(n))) : g1.resolve())
  }
  ps(e, n) {
    if (Rm(n)) return g1.resolve(null);
    let r = A2(n);
    return this.indexManager.getIndexType(e, r).next(i => i === 0 ? null : (n.limit !== null && i === 1 && (n = wh(n, null, "F"), r = A2(n)), this.indexManager.getDocumentsMatchingTarget(e, r).next(a => {
      const l = Ae(...a);
      return this.gs.getDocuments(e, l).next(c => this.indexManager.getMinOffset(e, r).next(h => {
        const p = this.bs(n, c);
        return this.Ds(n, p, l, h.readTime) ? this.ps(e, wh(n, null, "F")) : this.vs(e, p, n, h)
      }))
    })))
  }
  ys(e, n, r, i) {
    return Rm(n) || i.isEqual(pe.min()) ? g1.resolve(null) : this.gs.getDocuments(e, r).next(a => {
      const l = this.bs(n, a);
      return this.Ds(n, l, r, i) ? g1.resolve(null) : (Xs() <= De.DEBUG && U1("QueryEngine", "Re-using previous result from %s to execute query: %s", i.toString(), Js(n)), this.vs(e, l, n, iP(i, qa)).next(c => c))
    })
  }
  bs(e, n) {
    let r = new nn(a8(e));
    return n.forEach((i, a) => {
      ic(e, a) && (r = r.add(a))