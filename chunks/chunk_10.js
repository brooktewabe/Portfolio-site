  return {
    seconds: Dt(t.seconds),
    nanos: Dt(t.nanos)
  }
}

function Dt(t) {
  return typeof t == "number" ? t : typeof t == "string" ? Number(t) : 0
}

function Zi(t) {
  return typeof t == "string" ? Sn.fromBase64String(t) : Sn.fromUint8Array(t)
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
const qv = "server_timestamp",
  Gv = "__type__",
  Kv = "__previous_value__",
  Qv = "__local_write_time__";

function b9(t) {
  var e, n;
  return ((n = (((e = t == null ? void 0 : t.mapValue) === null || e === void 0 ? void 0 : e.fields) || {})[Gv]) === null || n === void 0 ? void 0 : n.stringValue) === qv
}

function nc(t) {
  const e = t.mapValue.fields[Kv];
  return b9(e) ? nc(e) : e
}

function Ga(t) {
  const e = Ji(t.mapValue.fields[Qv].timestampValue);
  return new mt(e.seconds, e.nanos)
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
class pP {
  constructor(e, n, r, i, a, l, c, h, p, m) {
    this.databaseId = e, this.appId = n, this.persistenceKey = r, this.host = i, this.ssl = a, this.forceLongPolling = l, this.autoDetectLongPolling = c, this.longPollingOptions = h, this.useFetchStreams = p, this.isUsingEmulator = m
  }
}
const yu = "(default)";
class Ka {
  constructor(e, n) {
    this.projectId = e, this.database = n || yu
  }
  static empty() {
    return new Ka("", "")
  }
  get isDefaultDatabase() {
    return this.database === yu
  }
  isEqual(e) {
    return e instanceof Ka && e.projectId === this.projectId && e.database === this.database
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
const Yv = "__type__",
  mP = "__max__",
  Nl = {
    mapValue: {}
  },
  Xv = "__vector__",
  vu = "value";

function e3(t) {
  return "nullValue" in t ? 0 : "booleanValue" in t ? 1 : "integerValue" in t || "doubleValue" in t ? 2 : "timestampValue" in t ? 3 : "stringValue" in t ? 5 : "bytesValue" in t ? 6 : "referenceValue" in t ? 7 : "geoPointValue" in t ? 8 : "arrayValue" in t ? 9 : "mapValue" in t ? b9(t) ? 4 : yP(t) ? 9007199254740991 : gP(t) ? 10 : 11 : ue(28295, {
    value: t
  })
}

function O2(t, e) {
  if (t === e) return !0;
  const n = e3(t);
  if (n !== e3(e)) return !1;
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return Ga(t).isEqual(Ga(e));
    case 3:
      return function(i, a) {
        if (typeof i.timestampValue == "string" && typeof a.timestampValue == "string" && i.timestampValue.length === a.timestampValue.length) return i.timestampValue === a.timestampValue;
        const l = Ji(i.timestampValue),
          c = Ji(a.timestampValue);
        return l.seconds === c.seconds && l.nanos === c.nanos
      }(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return function(i, a) {
        return Zi(i.bytesValue).isEqual(Zi(a.bytesValue))
      }(t, e);
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return function(i, a) {
        return Dt(i.geoPointValue.latitude) === Dt(a.geoPointValue.latitude) && Dt(i.geoPointValue.longitude) === Dt(a.geoPointValue.longitude)
      }(t, e);
    case 2:
      return function(i, a) {
        if ("integerValue" in i && "integerValue" in a) return Dt(i.integerValue) === Dt(a.integerValue);
        if ("doubleValue" in i && "doubleValue" in a) {
          const l = Dt(i.doubleValue),
            c = Dt(a.doubleValue);
          return l === c ? gu(l) === gu(c) : isNaN(l) && isNaN(c)
        }
        return !1
      }(t, e);
    case 9:
      return mo(t.arrayValue.values || [], e.arrayValue.values || [], O2);
    case 10:
    case 11:
      return function(i, a) {
        const l = i.mapValue.fields || {},
          c = a.mapValue.fields || {};
        if (_m(l) !== _m(c)) return !1;
        for (const h in l)
          if (l.hasOwnProperty(h) && (c[h] === void 0 || !O2(l[h], c[h]))) return !1;
        return !0
      }(t, e);
    default:
      return ue(52216, {
        left: t
      })
  }
}

function Qa(t, e) {
  return (t.values || []).find(n => O2(n, e)) !== void 0
}

function go(t, e) {
  if (t === e) return 0;
  const n = e3(t),
    r = e3(e);
  if (n !== r) return xe(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return xe(t.booleanValue, e.booleanValue);
    case 2:
      return function(a, l) {
        const c = Dt(a.integerValue || a.doubleValue),
          h = Dt(l.integerValue || l.doubleValue);
        return c < h ? -1 : c > h ? 1 : c === h ? 0 : isNaN(c) ? isNaN(h) ? 0 : -1 : 1
      }(t, e);
    case 3:
      return Sm(t.timestampValue, e.timestampValue);
    case 4:
      return Sm(Ga(t), Ga(e));
    case 5:
      return fh(t.stringValue, e.stringValue);
    case 6:
      return function(a, l) {
        const c = Zi(a),
          h = Zi(l);
        return c.compareTo(h)
      }(t.bytesValue, e.bytesValue);
    case 7:
      return function(a, l) {
        const c = a.split("/"),
          h = l.split("/");
        for (let p = 0; p < c.length && p < h.length; p++) {
          const m = xe(c[p], h[p]);
          if (m !== 0) return m
        }
        return xe(c.length, h.length)
      }(t.referenceValue, e.referenceValue);
    case 8:
      return function(a, l) {
        const c = xe(Dt(a.latitude), Dt(l.latitude));
        return c !== 0 ? c : xe(Dt(a.longitude), Dt(l.longitude))
      }(t.geoPointValue, e.geoPointValue);
    case 9:
      return Em(t.arrayValue, e.arrayValue);
    case 10:
      return function(a, l) {
        var c, h, p, m;
        const y = a.fields || {},
          v = l.fields || {},
          C = (c = y[vu]) === null || c === void 0 ? void 0 : c.arrayValue,
          P = (h = v[vu]) === null || h === void 0 ? void 0 : h.arrayValue,
          k = xe(((p = C == null ? void 0 : C.values) === null || p === void 0 ? void 0 : p.length) || 0, ((m = P == null ? void 0 : P.values) === null || m === void 0 ? void 0 : m.length) || 0);
        return k !== 0 ? k : Em(C, P)
      }(t.mapValue, e.mapValue);
    case 11:
      return function(a, l) {
        if (a === Nl.mapValue && l === Nl.mapValue) return 0;
        if (a === Nl.mapValue) return 1;
        if (l === Nl.mapValue) return -1;
        const c = a.fields || {},
          h = Object.keys(c),
          p = l.fields || {},
          m = Object.keys(p);
        h.sort(), m.sort();
        for (let y = 0; y < h.length && y < m.length; ++y) {
          const v = fh(h[y], m[y]);
          if (v !== 0) return v;
          const C = go(c[h[y]], p[m[y]]);
          if (C !== 0) return C
        }
        return xe(h.length, m.length)
      }(t.mapValue, e.mapValue);
    default:
      throw ue(23264, {
        le: n
      })
  }
}

function Sm(t, e) {
  if (typeof t == "string" && typeof e == "string" && t.length === e.length) return xe(t, e);
  const n = Ji(t),
    r = Ji(e),
    i = xe(n.seconds, r.seconds);
  return i !== 0 ? i : xe(n.nanos, r.nanos)
}

function Em(t, e) {
  const n = t.values || [],
    r = e.values || [];
  for (let i = 0; i < n.length && i < r.length; ++i) {
    const a = go(n[i], r[i]);
    if (a) return a
  }
  return xe(n.length, r.length)
}

function yo(t) {
  return ph(t)
}

function ph(t) {
  return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function(n) {
    const r = Ji(n);
    return `time(${r.seconds},${r.nanos})`
  }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? function(n) {
    return Zi(n).toBase64()
  }(t.bytesValue) : "referenceValue" in t ? function(n) {
    return Z1.fromName(n).toString()
  }(t.referenceValue) : "geoPointValue" in t ? function(n) {
    return `geo(${n.latitude},${n.longitude})`
  }(t.geoPointValue) : "arrayValue" in t ? function(n) {
    let r = "[",
      i = !0;
    for (const a of n.values || []) i ? i = !1 : r += ",", r += ph(a);
    return r + "]"
  }(t.arrayValue) : "mapValue" in t ? function(n) {
    const r = Object.keys(n.fields || {}).sort();
    let i = "{",
      a = !0;
    for (const l of r) a ? a = !1 : i += ",", i += `${l}:${ph(n.fields[l])}`;
    return i + "}"
  }(t.mapValue) : ue(61005, {
    value: t
  })
}

function Yl(t) {
  switch (e3(t)) {
    case 0:
    case 1:
      return 4;
    case 2:
      return 8;
    case 3:
    case 8:
      return 16;
    case 4:
      const e = nc(t);
      return e ? 16 + Yl(e) : 16;
    case 5:
      return 2 * t.stringValue.length;
    case 6:
      return Zi(t.bytesValue).approximateByteSize();
    case 7:
      return t.referenceValue.length;
    case 9:
      return function(r) {
        return (r.values || []).reduce((i, a) => i + Yl(a), 0)
      }(t.arrayValue);
    case 10:
    case 11:
      return function(r) {
        let i = 0;
        return rs(r.fields, (a, l) => {
          i += a.length + Yl(l)
        }), i
      }(t.mapValue);
    default:
      throw ue(13486, {
        value: t
      })
  }
}

function Tm(t, e) {
  return {
    referenceValue: `projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`
  }
}

function mh(t) {
  return !!t && "integerValue" in t
}

function _9(t) {
  return !!t && "arrayValue" in t
}

function Cm(t) {
  return !!t && "nullValue" in t
}

function km(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue))
}

function Xl(t) {
  return !!t && "mapValue" in t
}

function gP(t) {
  var e, n;
  return ((n = (((e = t == null ? void 0 : t.mapValue) === null || e === void 0 ? void 0 : e.fields) || {})[Yv]) === null || n === void 0 ? void 0 : n.stringValue) === Xv
}

function Na(t) {
  if (t.geoPointValue) return {
    geoPointValue: Object.assign({}, t.geoPointValue)
  };
  if (t.timestampValue && typeof t.timestampValue == "object") return {
    timestampValue: Object.assign({}, t.timestampValue)
  };
  if (t.mapValue) {
    const e = {
      mapValue: {
        fields: {}
      }
    };
    return rs(t.mapValue.fields, (n, r) => e.mapValue.fields[n] = Na(r)), e
  }
  if (t.arrayValue) {
    const e = {
      arrayValue: {
        values: []
      }
    };
    for (let n = 0; n < (t.arrayValue.values || []).length; ++n) e.arrayValue.values[n] = Na(t.arrayValue.values[n]);
    return e
  }
  return Object.assign({}, t)
}

function yP(t) {
  return (((t.mapValue || {}).fields || {}).__type__ || {}).stringValue === mP
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
class Wr {
  constructor(e) {
    this.value = e
  }
  static empty() {
    return new Wr({
      mapValue: {}
    })
  }
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let n = this.value;
      for (let r = 0; r < e.length - 1; ++r)
        if (n = (n.mapValue.fields || {})[e.get(r)], !Xl(n)) return null;
      return n = (n.mapValue.fields || {})[e.lastSegment()], n || null
    }
  }
  set(e, n) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = Na(n)
  }
  setAll(e) {
    let n = xn.emptyPath(),
      r = {},
      i = [];
    e.forEach((l, c) => {
      if (!n.isImmediateParentOf(c)) {
        const h = this.getFieldsMap(n);
        this.applyChanges(h, r, i), r = {}, i = [], n = c.popLast()
      }
      l ? r[c.lastSegment()] = Na(l) : i.push(c.lastSegment())
    });
    const a = this.getFieldsMap(n);
    this.applyChanges(a, r, i)
  }
  delete(e) {
    const n = this.field(e.popLast());
    Xl(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()]
  }
  isEqual(e) {
    return O2(this.value, e.value)
  }
  getFieldsMap(e) {
    let n = this.value;
    n.mapValue.fields || (n.mapValue = {
      fields: {}
    });
    for (let r = 0; r < e.length; ++r) {
      let i = n.mapValue.fields[e.get(r)];
      Xl(i) && i.mapValue.fields || (i = {
        mapValue: {
          fields: {}
        }
      }, n.mapValue.fields[e.get(r)] = i), n = i
    }
    return n.mapValue.fields
  }
  applyChanges(e, n, r) {
    rs(n, (i, a) => e[i] = a);
    for (const i of r) delete e[i]
  }
  clone() {
    return new Wr(Na(this.value))
  }
}

function Jv(t) {
  const e = [];
  return rs(t.fields, (n, r) => {
    const i = new xn([n]);
    if (Xl(r)) {
      const a = Jv(r.mapValue).fields;
      if (a.length === 0) e.push(i);
      else
        for (const l of a) e.push(i.child(l))
    } else e.push(i)
  }), new i2(e)
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
class On {
  constructor(e, n, r, i, a, l, c) {
    this.key = e, this.documentType = n, this.version = r, this.readTime = i, this.createTime = a, this.data = l, this.documentState = c
  }
  static newInvalidDocument(e) {
    return new On(e, 0, pe.min(), pe.min(), pe.min(), Wr.empty(), 0)
  }
  static newFoundDocument(e, n, r, i) {
    return new On(e, 1, n, pe.min(), r, i, 0)
  }
  static newNoDocument(e, n) {
    return new On(e, 2, n, pe.min(), pe.min(), Wr.empty(), 0)
  }
  static newUnknownDocument(e, n) {
    return new On(e, 3, n, pe.min(), pe.min(), Wr.empty(), 2)
  }
  convertToFoundDocument(e, n) {
    return !this.createTime.isEqual(pe.min()) || this.documentType !== 2 && this.documentType !== 0 || (this.createTime = e), this.version = e, this.documentType = 1, this.data = n, this.documentState = 0, this
  }
  convertToNoDocument(e) {
    return this.version = e, this.documentType = 2, this.data = Wr.empty(), this.documentState = 0, this
  }
  convertToUnknownDocument(e) {
    return this.version = e, this.documentType = 3, this.data = Wr.empty(), this.documentState = 2, this
  }
  setHasCommittedMutations() {
    return this.documentState = 2, this
  }
  setHasLocalMutations() {
    return this.documentState = 1, this.version = pe.min(), this
  }
  setReadTime(e) {
    return this.readTime = e, this
  }
  get hasLocalMutations() {
    return this.documentState === 1
  }
  get hasCommittedMutations() {
    return this.documentState === 2
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations
  }
  isValidDocument() {
    return this.documentType !== 0
  }
  isFoundDocument() {
    return this.documentType === 1
  }
  isNoDocument() {
    return this.documentType === 2
  }
  isUnknownDocument() {
    return this.documentType === 3
  }
  isEqual(e) {
    return e instanceof On && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data)
  }
  mutableCopy() {
    return new On(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState)
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`
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
class wu {
  constructor(e, n) {
    this.position = e, this.inclusive = n
  }
}

function Pm(t, e, n) {
  let r = 0;
  for (let i = 0; i < t.position.length; i++) {
    const a = e[i],
      l = t.position[i];
    if (a.field.isKeyField() ? r = Z1.comparator(Z1.fromName(l.referenceValue), n.key) : r = go(l, n.data.field(a.field)), a.dir === "desc" && (r *= -1), r !== 0) break
  }
  return r
}

function Am(t, e) {
  if (t === null) return e === null;
  if (e === null || t.inclusive !== e.inclusive || t.position.length !== e.position.length) return !1;
  for (let n = 0; n < t.position.length; n++)
    if (!O2(t.position[n], e.position[n])) return !1;
  return !0
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
class Ya {
  constructor(e, n = "asc") {
    this.field = e, this.dir = n
  }
}

function vP(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field)
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
class Zv {}
class qt extends Zv {
  constructor(e, n, r) {
    super(), this.field = e, this.op = n, this.value = r
  }
  static create(e, n, r) {
    return e.isKeyField() ? n === "in" || n === "not-in" ? this.createKeyFieldInFilter(e, n, r) : new bP(e, n, r) : n === "array-contains" ? new SP(e, r) : n === "in" ? new EP(e, r) : n === "not-in" ? new TP(e, r) : n === "array-contains-any" ? new CP(e, r) : new qt(e, n, r)
  }
  static createKeyFieldInFilter(e, n, r) {
    return n === "in" ? new _P(e, r) : new xP(e, r)
  }
  matches(e) {
    const n = e.data.field(this.field);
    return this.op === "!=" ? n !== null && n.nullValue === void 0 && this.matchesComparison(go(n, this.value)) : n !== null && e3(this.value) === e3(n) && this.matchesComparison(go(n, this.value))
  }
  matchesComparison(e) {
    switch (this.op) {
      case "<":
        return e < 0;
      case "<=":
        return e <= 0;
      case "==":
        return e === 0;
      case "!=":
        return e !== 0;
      case ">":
        return e > 0;
      case ">=":
        return e >= 0;
      default:
        return ue(47266, {
          operator: this.op
        })
    }
  }
  isInequality() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0
  }
  getFlattenedFilters() {
    return [this]
  }
  getFilters() {
    return [this]
  }
}
class o2 extends Zv {
  constructor(e, n) {
    super(), this.filters = e, this.op = n, this.he = null
  }
  static create(e, n) {
    return new o2(e, n)
  }
  matches(e) {
    return e8(this) ? this.filters.find(n => !n.matches(e)) === void 0 : this.filters.find(n => n.matches(e)) !== void 0
  }
  getFlattenedFilters() {
    return this.he !== null || (this.he = this.filters.reduce((e, n) => e.concat(n.getFlattenedFilters()), [])), this.he
  }
  getFilters() {
    return Object.assign([], this.filters)
  }
}

function e8(t) {
  return t.op === "and"
}

function t8(t) {
  return wP(t) && e8(t)
}

function wP(t) {
  for (const e of t.filters)
    if (e instanceof o2) return !1;
  return !0
}

function gh(t) {
  if (t instanceof qt) return t.field.canonicalString() + t.op.toString() + yo(t.value);
  if (t8(t)) return t.filters.map(e => gh(e)).join(",");
  {
    const e = t.filters.map(n => gh(n)).join(",");
    return `${t.op}(${e})`
  }
}

function n8(t, e) {
  return t instanceof qt ? function(r, i) {
    return i instanceof qt && r.op === i.op && r.field.isEqual(i.field) && O2(r.value, i.value)
  }(t, e) : t instanceof o2 ? function(r, i) {
    return i instanceof o2 && r.op === i.op && r.filters.length === i.filters.length ? r.filters.reduce((a, l, c) => a && n8(l, i.filters[c]), !0) : !1
  }(t, e) : void ue(19439)
}

function r8(t) {
  return t instanceof qt ? function(n) {
    return `${n.field.canonicalString()} ${n.op} ${yo(n.value)}`
  }(t) : t instanceof o2 ? function(n) {
    return n.op.toString() + " {" + n.getFilters().map(r8).join(" ,") + "}"
  }(t) : "Filter"
}
class bP extends qt {
  constructor(e, n, r) {
    super(e, n, r), this.key = Z1.fromName(r.referenceValue)
  }
  matches(e) {
    const n = Z1.comparator(e.key, this.key);
    return this.matchesComparison(n)
  }
}
class _P extends qt {
  constructor(e, n) {
    super(e, "in", n), this.keys = i8("in", n)
  }
  matches(e) {
    return this.keys.some(n => n.isEqual(e.key))
  }
}
class xP extends qt {
  constructor(e, n) {
    super(e, "not-in", n), this.keys = i8("not-in", n)
  }
  matches(e) {
    return !this.keys.some(n => n.isEqual(e.key))
  }
}

function i8(t, e) {
  var n;
  return (((n = e.arrayValue) === null || n === void 0 ? void 0 : n.values) || []).map(r => Z1.fromName(r.referenceValue))
}
class SP extends qt {
  constructor(e, n) {
    super(e, "array-contains", n)
  }
  matches(e) {
    const n = e.data.field(this.field);
    return _9(n) && Qa(n.arrayValue, this.value)
  }
}
class EP extends qt {
  constructor(e, n) {
    super(e, "in", n)
  }
  matches(e) {
    const n = e.data.field(this.field);
    return n !== null && Qa(this.value.arrayValue, n)
  }
}
class TP extends qt {
  constructor(e, n) {
    super(e, "not-in", n)
  }
  matches(e) {
    if (Qa(this.value.arrayValue, {
        nullValue: "NULL_VALUE"
      })) return !1;
    const n = e.data.field(this.field);
    return n !== null && n.nullValue === void 0 && !Qa(this.value.arrayValue, n)
  }
}
class CP extends qt {
  constructor(e, n) {
    super(e, "array-contains-any", n)
  }
  matches(e) {
    const n = e.data.field(this.field);
    return !(!_9(n) || !n.arrayValue.values) && n.arrayValue.values.some(r => Qa(this.value.arrayValue, r))
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
class kP {
  constructor(e, n = null, r = [], i = [], a = null, l = null, c = null) {
    this.path = e, this.collectionGroup = n, this.orderBy = r, this.filters = i, this.limit = a, this.startAt = l, this.endAt = c, this.Pe = null
  }
}

function Im(t, e = null, n = [], r = [], i = null, a = null, l = null) {
  return new kP(t, e, n, r, i, a, l)
}

function x9(t) {
  const e = ge(t);
  if (e.Pe === null) {
    let n = e.path.canonicalString();
    e.collectionGroup !== null && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map(r => gh(r)).join(","), n += "|ob:", n += e.orderBy.map(r => function(a) {
      return a.field.canonicalString() + a.dir
    }(r)).join(","), tc(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", n += e.startAt.inclusive ? "b:" : "a:", n += e.startAt.position.map(r => yo(r)).join(",")), e.endAt && (n += "|ub:", n += e.endAt.inclusive ? "a:" : "b:", n += e.endAt.position.map(r => yo(r)).join(",")), e.Pe = n
  }
  return e.Pe
}

function S9(t, e) {
  if (t.limit !== e.limit || t.orderBy.length !== e.orderBy.length) return !1;
  for (let n = 0; n < t.orderBy.length; n++)
    if (!vP(t.orderBy[n], e.orderBy[n])) return !1;
  if (t.filters.length !== e.filters.length) return !1;
  for (let n = 0; n < t.filters.length; n++)
    if (!n8(t.filters[n], e.filters[n])) return !1;
  return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!Am(t.startAt, e.startAt) && Am(t.endAt, e.endAt)
}

function yh(t) {
  return Z1.isDocumentKey(t.path) && t.collectionGroup === null && t.filters.length === 0
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
class Ro {
  constructor(e, n = null, r = [], i = [], a = null, l = "F", c = null, h = null) {
    this.path = e, this.collectionGroup = n, this.explicitOrderBy = r, this.filters = i, this.limit = a, this.limitType = l, this.startAt = c, this.endAt = h, this.Te = null, this.Ie = null, this.de = null, this.startAt, this.endAt
  }
}

function PP(t, e, n, r, i, a, l, c) {
  return new Ro(t, e, n, r, i, a, l, c)
}

function E9(t) {
  return new Ro(t)
}

function Rm(t) {
  return t.filters.length === 0 && t.limit === null && t.startAt == null && t.endAt == null && (t.explicitOrderBy.length === 0 || t.explicitOrderBy.length === 1 && t.explicitOrderBy[0].field.isKeyField())
}

function s8(t) {
  return t.collectionGroup !== null
}

function La(t) {
  const e = ge(t);
  if (e.Te === null) {
    e.Te = [];
    const n = new Set;
    for (const a of e.explicitOrderBy) e.Te.push(a), n.add(a.field.canonicalString());
    const r = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc";
    (function(l) {
      let c = new nn(xn.comparator);
      return l.filters.forEach(h => {
        h.getFlattenedFilters().forEach(p => {
          p.isInequality() && (c = c.add(p.field))
        })
      }), c
    })(e).forEach(a => {
      n.has(a.canonicalString()) || a.isKeyField() || e.Te.push(new Ya(a, r))
    }), n.has(xn.keyField().canonicalString()) || e.Te.push(new Ya(xn.keyField(), r))
  }
  return e.Te
}

function A2(t) {
  const e = ge(t);
  return e.Ie || (e.Ie = AP(e, La(t))), e.Ie
}

function AP(t, e) {
  if (t.limitType === "F") return Im(t.path, t.collectionGroup, e, t.filters, t.limit, t.startAt, t.endAt);
  {
    e = e.map(i => {
      const a = i.dir === "desc" ? "asc" : "desc";
      return new Ya(i.field, a)
    });
    const n = t.endAt ? new wu(t.endAt.position, t.endAt.inclusive) : null,
      r = t.startAt ? new wu(t.startAt.position, t.startAt.inclusive) : null;
    return Im(t.path, t.collectionGroup, e, t.filters, t.limit, n, r)
  }
}

function vh(t, e) {
  const n = t.filters.concat([e]);
  return new Ro(t.path, t.collectionGroup, t.explicitOrderBy.slice(), n, t.limit, t.limitType, t.startAt, t.endAt)
}

function wh(t, e, n) {
  return new Ro(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), e, n, t.startAt, t.endAt)
}

function rc(t, e) {
  return S9(A2(t), A2(e)) && t.limitType === e.limitType
}

function o8(t) {
  return `${x9(A2(t))}|lt:${t.limitType}`
}

function Js(t) {
  return `Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>r8(i)).join(", ")}]`),tc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>yo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>yo(i)).join(",")),`Target(${r})`}(A2(t))}; limitType=${t.limitType})`
}

function ic(t, e) {
  return e.isFoundDocument() && function(r, i) {
    const a = i.key.path;
    return r.collectionGroup !== null ? i.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(a) : Z1.isDocumentKey(r.path) ? r.path.isEqual(a) : r.path.isImmediateParentOf(a)
  }(t, e) && function(r, i) {
    for (const a of La(r))
      if (!a.field.isKeyField() && i.data.field(a.field) === null) return !1;
    return !0
  }(t, e) && function(r, i) {
    for (const a of r.filters)
      if (!a.matches(i)) return !1;
    return !0
  }(t, e) && function(r, i) {
    return !(r.startAt && ! function(l, c, h) {
      const p = Pm(l, c, h);
      return l.inclusive ? p <= 0 : p < 0
    }(r.startAt, La(r), i) || r.endAt && ! function(l, c, h) {
      const p = Pm(l, c, h);
      return l.inclusive ? p >= 0 : p > 0
    }(r.endAt, La(r), i))
  }(t, e)
}

function IP(t) {
  return t.collectionGroup || (t.path.length % 2 == 1 ? t.path.lastSegment() : t.path.get(t.path.length - 2))
}

function a8(t) {
  return (e, n) => {
    let r = !1;
    for (const i of La(t)) {
      const a = RP(i, e, n);
      if (a !== 0) return a;
      r = r || i.field.isKeyField()
    }
    return 0
  }
}

function RP(t, e, n) {
  const r = t.field.isKeyField() ? Z1.comparator(e.key, n.key) : function(a, l, c) {
    const h = l.data.field(a),
      p = c.data.field(a);
    return h !== null && p !== null ? go(h, p) : ue(42886)
  }(t.field, e, n);
  switch (t.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return ue(19790, {
        direction: t.dir
      })
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
class is {
  constructor(e, n) {
    this.mapKeyFn = e, this.equalsFn = n, this.inner = {}, this.innerSize = 0
  }
  get(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n];
    if (r !== void 0) {
      for (const [i, a] of r)
        if (this.equalsFn(i, e)) return a
    }
  }
  has(e) {
    return this.get(e) !== void 0
  }
  set(e, n) {
    const r = this.mapKeyFn(e),
      i = this.inner[r];
    if (i === void 0) return this.inner[r] = [
      [e, n]
    ], void this.innerSize++;
    for (let a = 0; a < i.length; a++)
      if (this.equalsFn(i[a][0], e)) return void(i[a] = [e, n]);
    i.push([e, n]), this.innerSize++
  }
  delete(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n];
    if (r === void 0) return !1;
    for (let i = 0; i < r.length; i++)
      if (this.equalsFn(r[i][0], e)) return r.length === 1 ? delete this.inner[n] : r.splice(i, 1), this.innerSize--, !0;
    return !1
  }
  forEach(e) {
    rs(this.inner, (n, r) => {
      for (const [i, a] of r) e(i, a)
    })
  }
  isEmpty() {
    return Wv(this.inner)
  }
  size() {
    return this.innerSize
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
const NP = new St(Z1.comparator);

function di() {
  return NP
}
const l8 = new St(Z1.comparator);

function _a(...t) {
  let e = l8;
  for (const n of t) e = e.insert(n.key, n);
  return e
}

function u8(t) {
  let e = l8;
  return t.forEach((n, r) => e = e.insert(n, r.overlayedDocument)), e
}

function j3() {
  return Ma()
}

function c8() {
  return Ma()
}

function Ma() {
  return new is(t => t.toString(), (t, e) => t.isEqual(e))
}
const LP = new St(Z1.comparator),
  MP = new nn(Z1.comparator);

function Ae(...t) {
  let e = MP;
  for (const n of t) e = e.add(n);
  return e
}
const DP = new nn(xe);

function OP() {
  return DP
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
function T9(t, e) {
  if (t.useProto3Json) {
    if (isNaN(e)) return {
      doubleValue: "NaN"
    };
    if (e === 1 / 0) return {
      doubleValue: "Infinity"
    };
    if (e === -1 / 0) return {
      doubleValue: "-Infinity"
    }
  }
  return {
    doubleValue: gu(e) ? "-0" : e
  }
}

function d8(t) {
  return {
    integerValue: "" + t
  }
}

function jP(t, e) {
  return cP(e) ? d8(e) : T9(t, e)
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
class sc {
  constructor() {
    this._ = void 0
  }
}

function VP(t, e, n) {
  return t instanceof Xa ? function(i, a) {
    const l = {
      fields: {
        [Gv]: {
          stringValue: qv
        },
        [Qv]: {
          timestampValue: {
            seconds: i.seconds,
            nanos: i.nanoseconds
          }
        }
      }
    };
    return a && b9(a) && (a = nc(a)), a && (l.fields[Kv] = a), {
      mapValue: l
    }
  }(n, e) : t instanceof Ja ? f8(t, e) : t instanceof Za ? p8(t, e) : function(i, a) {
    const l = h8(i, a),
      c = Nm(l) + Nm(i.Ee);
    return mh(l) && mh(i.Ee) ? d8(c) : T9(i.serializer, c)
  }(t, e)
}

function FP(t, e, n) {
  return t instanceof Ja ? f8(t, e) : t instanceof Za ? p8(t, e) : n
}

function h8(t, e) {
  return t instanceof bu ? function(r) {
    return mh(r) || function(a) {
      return !!a && "doubleValue" in a
    }(r)
  }(e) ? e : {
    integerValue: 0
  } : null
}
class Xa extends sc {}
class Ja extends sc {
  constructor(e) {
    super(), this.elements = e
  }
}

function f8(t, e) {
  const n = m8(e);
  for (const r of t.elements) n.some(i => O2(i, r)) || n.push(r);
  return {
    arrayValue: {
      values: n
    }
  }
}
class Za extends sc {
  constructor(e) {
    super(), this.elements = e
  }
}

function p8(t, e) {
  let n = m8(e);
  for (const r of t.elements) n = n.filter(i => !O2(i, r));
  return {
    arrayValue: {
      values: n
    }
  }
}
class bu extends sc {
  constructor(e, n) {
    super(), this.serializer = e, this.Ee = n
  }
}

function Nm(t) {
  return Dt(t.integerValue || t.doubleValue)
}

function m8(t) {
  return _9(t) && t.arrayValue.values ? t.arrayValue.values.slice() : []
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
class BP {
  constructor(e, n) {
    this.field = e, this.transform = n
  }
}

function $P(t, e) {
  return t.field.isEqual(e.field) && function(r, i) {
    return r instanceof Ja && i instanceof Ja || r instanceof Za && i instanceof Za ? mo(r.elements, i.elements, O2) : r instanceof bu && i instanceof bu ? O2(r.Ee, i.Ee) : r instanceof Xa && i instanceof Xa
  }(t.transform, e.transform)
}
class zP {
  constructor(e, n) {
    this.version = e, this.transformResults = n
  }
}
class si {
  constructor(e, n) {
    this.updateTime = e, this.exists = n
  }
  static none() {
    return new si
  }
  static exists(e) {
    return new si(void 0, e)
  }
  static updateTime(e) {
    return new si(e)
  }
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0
  }
  isEqual(e) {
    return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime)
  }
}

function Jl(t, e) {
  return t.updateTime !== void 0 ? e.isFoundDocument() && e.version.isEqual(t.updateTime) : t.exists === void 0 || t.exists === e.isFoundDocument()
}
class oc {}

function g8(t, e) {
  if (!t.hasLocalMutations || e && e.fields.length === 0) return null;
  if (e === null) return t.isNoDocument() ? new v8(t.key, si.none()) : new h0(t.key, t.data, si.none());
  {
    const n = t.data,
      r = Wr.empty();
    let i = new nn(xn.comparator);
    for (let a of e.fields)
      if (!i.has(a)) {
        let l = n.field(a);
        l === null && a.length > 1 && (a = a.popLast(), l = n.field(a)), l === null ? r.delete(a) : r.set(a, l), i = i.add(a)
      } return new ss(t.key, r, new i2(i.toArray()), si.none())
  }
}

function UP(t, e, n) {
  t instanceof h0 ? function(i, a, l) {
    const c = i.value.clone(),
      h = Mm(i.fieldTransforms, a, l.transformResults);
    c.setAll(h), a.convertToFoundDocument(l.version, c).setHasCommittedMutations()
  }(t, e, n) : t instanceof ss ? function(i, a, l) {
    if (!Jl(i.precondition, a)) return void a.convertToUnknownDocument(l.version);
    const c = Mm(i.fieldTransforms, a, l.transformResults),
      h = a.data;
    h.setAll(y8(i)), h.setAll(c), a.convertToFoundDocument(l.version, h).setHasCommittedMutations()
  }(t, e, n) : function(i, a, l) {
    a.convertToNoDocument(l.version).setHasCommittedMutations()
  }(0, e, n)
}

function Da(t, e, n, r) {
  return t instanceof h0 ? function(a, l, c, h) {
    if (!Jl(a.precondition, l)) return c;
    const p = a.value.clone(),
      m = Dm(a.fieldTransforms, h, l);
    return p.setAll(m), l.convertToFoundDocument(l.version, p).setHasLocalMutations(), null
  }(t, e, n, r) : t instanceof ss ? function(a, l, c, h) {
    if (!Jl(a.precondition, l)) return c;
    const p = Dm(a.fieldTransforms, h, l),
      m = l.data;
    return m.setAll(y8(a)), m.setAll(p), l.convertToFoundDocument(l.version, m).setHasLocalMutations(), c === null ? null : c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(y => y.field))
  }(t, e, n, r) : function(a, l, c) {
    return Jl(a.precondition, l) ? (l.convertToNoDocument(l.version).setHasLocalMutations(), null) : c
  }(t, e, n)
}

function WP(t, e) {
  let n = null;
  for (const r of t.fieldTransforms) {
    const i = e.data.field(r.field),
      a = h8(r.transform, i || null);
    a != null && (n === null && (n = Wr.empty()), n.set(r.field, a))
  }
  return n || null
}

function Lm(t, e) {
  return t.type === e.type && !!t.key.isEqual(e.key) && !!t.precondition.isEqual(e.precondition) && !! function(r, i) {
    return r === void 0 && i === void 0 || !(!r || !i) && mo(r, i, (a, l) => $P(a, l))
  }(t.fieldTransforms, e.fieldTransforms) && (t.type === 0 ? t.value.isEqual(e.value) : t.type !== 1 || t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask))
}
class h0 extends oc {
  constructor(e, n, r, i = []) {
    super(), this.key = e, this.value = n, this.precondition = r, this.fieldTransforms = i, this.type = 0
  }
  getFieldMask() {
    return null
  }
}
class ss extends oc {
  constructor(e, n, r, i, a = []) {
    super(), this.key = e, this.data = n, this.fieldMask = r, this.precondition = i, this.fieldTransforms = a, this.type = 1
  }
  getFieldMask() {
    return this.fieldMask
  }
}

function y8(t) {
  const e = new Map;
  return t.fieldMask.fields.forEach(n => {
    if (!n.isEmpty()) {
      const r = t.data.field(n);
      e.set(n, r)
    }
  }), e
}

function Mm(t, e, n) {
  const r = new Map;
  Ke(t.length === n.length, 32656, {
    Ae: n.length,
    Re: t.length
  });
  for (let i = 0; i < n.length; i++) {
    const a = t[i],
      l = a.transform,
      c = e.data.field(a.field);
    r.set(a.field, FP(l, c, n[i]))
  }
  return r
}

function Dm(t, e, n) {
  const r = new Map;
  for (const i of t) {
    const a = i.transform,
      l = n.data.field(i.field);
    r.set(i.field, VP(a, l, e))
  }
  return r
}
class v8 extends oc {
  constructor(e, n) {
    super(), this.key = e, this.precondition = n, this.type = 2, this.fieldTransforms = []
  }
  getFieldMask() {
    return null
  }
}
class HP extends oc {
  constructor(e, n) {
    super(), this.key = e, this.precondition = n, this.type = 3, this.fieldTransforms = []
  }
  getFieldMask() {
    return null
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
class qP {
  constructor(e, n, r, i) {
    this.batchId = e, this.localWriteTime = n, this.baseMutations = r, this.mutations = i
  }
  applyToRemoteDocument(e, n) {
    const r = n.mutationResults;
    for (let i = 0; i < this.mutations.length; i++) {
      const a = this.mutations[i];
      a.key.isEqual(e.key) && UP(a, e, r[i])
    }
  }
  applyToLocalView(e, n) {
    for (const r of this.baseMutations) r.key.isEqual(e.key) && (n = Da(r, e, n, this.localWriteTime));
    for (const r of this.mutations) r.key.isEqual(e.key) && (n = Da(r, e, n, this.localWriteTime));
    return n
  }
  applyToLocalDocumentSet(e, n) {
    const r = c8();
    return this.mutations.forEach(i => {
      const a = e.get(i.key),
        l = a.overlayedDocument;
      let c = this.applyToLocalView(l, a.mutatedFields);
      c = n.has(i.key) ? null : c;
      const h = g8(l, c);
      h !== null && r.set(i.key, h), l.isValidDocument() || l.convertToNoDocument(pe.min())
    }), r
  }
  keys() {
    return this.mutations.reduce((e, n) => e.add(n.key), Ae())
  }
  isEqual(e) {
    return this.batchId === e.batchId && mo(this.mutations, e.mutations, (n, r) => Lm(n, r)) && mo(this.baseMutations, e.baseMutations, (n, r) => Lm(n, r))
  }
}
class C9 {
  constructor(e, n, r, i) {
    this.batch = e, this.commitVersion = n, this.mutationResults = r, this.docVersions = i
  }
  static from(e, n, r) {
    Ke(e.mutations.length === r.length, 58842, {
      Ve: e.mutations.length,
      me: r.length
    });
    let i = function() {
      return LP
    }();
    const a = e.mutations;
    for (let l = 0; l < a.length; l++) i = i.insert(a[l].key, r[l].version);
    return new C9(e, n, r, i)
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
class GP {
  constructor(e, n) {
    this.largestBatchId = e, this.mutation = n
  }
  getKey() {
    return this.mutation.key
  }
  isEqual(e) {
    return e !== null && this.mutation === e.mutation
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`
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
class KP {
  constructor(e, n) {
    this.count = e, this.unchangedNames = n
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
var Wt, Me;

function QP(t) {
  switch (t) {
    case m1.OK:
      return ue(64938);
    case m1.CANCELLED:
    case m1.UNKNOWN:
    case m1.DEADLINE_EXCEEDED:
    case m1.RESOURCE_EXHAUSTED:
    case m1.INTERNAL:
    case m1.UNAVAILABLE:
    case m1.UNAUTHENTICATED:
      return !1;
    case m1.INVALID_ARGUMENT:
    case m1.NOT_FOUND:
    case m1.ALREADY_EXISTS:
    case m1.PERMISSION_DENIED:
    case m1.FAILED_PRECONDITION:
    case m1.ABORTED:
    case m1.OUT_OF_RANGE:
    case m1.UNIMPLEMENTED:
    case m1.DATA_LOSS:
      return !0;
    default:
      return ue(15467, {
        code: t
      })
  }
}

function w8(t) {
  if (t === void 0) return ci("GRPC error has no .code"), m1.UNKNOWN;
  switch (t) {
    case Wt.OK:
      return m1.OK;
    case Wt.CANCELLED:
      return m1.CANCELLED;
    case Wt.UNKNOWN:
      return m1.UNKNOWN;
    case Wt.DEADLINE_EXCEEDED:
      return m1.DEADLINE_EXCEEDED;
    case Wt.RESOURCE_EXHAUSTED:
      return m1.RESOURCE_EXHAUSTED;
    case Wt.INTERNAL:
      return m1.INTERNAL;
    case Wt.UNAVAILABLE:
      return m1.UNAVAILABLE;
    case Wt.UNAUTHENTICATED:
      return m1.UNAUTHENTICATED;
    case Wt.INVALID_ARGUMENT:
      return m1.INVALID_ARGUMENT;
    case Wt.NOT_FOUND:
      return m1.NOT_FOUND;
    case Wt.ALREADY_EXISTS:
      return m1.ALREADY_EXISTS;
    case Wt.PERMISSION_DENIED:
      return m1.PERMISSION_DENIED;
    case Wt.FAILED_PRECONDITION:
      return m1.FAILED_PRECONDITION;
    case Wt.ABORTED:
      return m1.ABORTED;
    case Wt.OUT_OF_RANGE:
      return m1.OUT_OF_RANGE;
    case Wt.UNIMPLEMENTED:
      return m1.UNIMPLEMENTED;
    case Wt.DATA_LOSS:
      return m1.DATA_LOSS;
    default:
      return ue(39323, {
        code: t
      })
  }
}(Me = Wt || (Wt = {}))[Me.OK = 0] = "OK", Me[Me.CANCELLED = 1] = "CANCELLED", Me[Me.UNKNOWN = 2] = "UNKNOWN", Me[Me.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", Me[Me.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Me[Me.NOT_FOUND = 5] = "NOT_FOUND", Me[Me.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Me[Me.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", Me[Me.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Me[Me.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", Me[Me.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Me[Me.ABORTED = 10] = "ABORTED", Me[Me.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Me[Me.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", Me[Me.INTERNAL = 13] = "INTERNAL", Me[Me.UNAVAILABLE = 14] = "UNAVAILABLE", Me[Me.DATA_LOSS = 15] = "DATA_LOSS";
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
const YP = new Ki([4294967295, 4294967295], 0);

function Om(t) {
  const e = Bv().encode(t),
    n = new Nv;
  return n.update(e), new Uint8Array(n.digest())
}

function jm(t) {
  const e = new DataView(t.buffer),
    n = e.getUint32(0, !0),
    r = e.getUint32(4, !0),
    i = e.getUint32(8, !0),
    a = e.getUint32(12, !0);
  return [new Ki([n, r], 0), new Ki([i, a], 0)]
}
class k9 {
  constructor(e, n, r) {
    if (this.bitmap = e, this.padding = n, this.hashCount = r, n < 0 || n >= 8) throw new xa(`Invalid padding: ${n}`);
    if (r < 0) throw new xa(`Invalid hash count: ${r}`);
    if (e.length > 0 && this.hashCount === 0) throw new xa(`Invalid hash count: ${r}`);
    if (e.length === 0 && n !== 0) throw new xa(`Invalid padding when bitmap length is 0: ${n}`);
    this.fe = 8 * e.length - n, this.ge = Ki.fromNumber(this.fe)
  }
  pe(e, n, r) {
    let i = e.add(n.multiply(Ki.fromNumber(r)));
    return i.compare(YP) === 1 && (i = new Ki([i.getBits(0), i.getBits(1)], 0)), i.modulo(this.ge).toNumber()
  }
  ye(e) {
    return !!(this.bitmap[Math.floor(e / 8)] & 1 << e % 8)
  }
  mightContain(e) {
    if (this.fe === 0) return !1;
    const n = Om(e),
      [r, i] = jm(n);
    for (let a = 0; a < this.hashCount; a++) {
      const l = this.pe(r, i, a);
      if (!this.ye(l)) return !1
    }
    return !0
  }
  static create(e, n, r) {
    const i = e % 8 == 0 ? 0 : 8 - e % 8,
      a = new Uint8Array(Math.ceil(e / 8)),
      l = new k9(a, i, n);
    return r.forEach(c => l.insert(c)), l
  }
  insert(e) {
    if (this.fe === 0) return;
    const n = Om(e),
      [r, i] = jm(n);
    for (let a = 0; a < this.hashCount; a++) {
      const l = this.pe(r, i, a);
      this.we(l)
    }
  }
  we(e) {
    const n = Math.floor(e / 8),
      r = e % 8;
    this.bitmap[n] |= 1 << r
  }
}
class xa extends Error {
  constructor() {
    super(...arguments), this.name = "BloomFilterError"
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
class ac {
  constructor(e, n, r, i, a) {
    this.snapshotVersion = e, this.targetChanges = n, this.targetMismatches = r, this.documentUpdates = i, this.resolvedLimboDocuments = a
  }
  static createSynthesizedRemoteEventForCurrentChange(e, n, r) {
    const i = new Map;
    return i.set(e, f0.createSynthesizedTargetChangeForCurrentChange(e, n, r)), new ac(pe.min(), i, new St(xe), di(), Ae())
  }
}
class f0 {
  constructor(e, n, r, i, a) {
    this.resumeToken = e, this.current = n, this.addedDocuments = r, this.modifiedDocuments = i, this.removedDocuments = a
  }
  static createSynthesizedTargetChangeForCurrentChange(e, n, r) {
    return new f0(r, n, Ae(), Ae(), Ae())
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
class Zl {
  constructor(e, n, r, i) {
    this.Se = e, this.removedTargetIds = n, this.key = r, this.be = i
  }
}
class b8 {
  constructor(e, n) {
    this.targetId = e, this.De = n
  }
}
class _8 {
  constructor(e, n, r = Sn.EMPTY_BYTE_STRING, i = null) {
    this.state = e, this.targetIds = n, this.resumeToken = r, this.cause = i
  }
}
class Vm {
  constructor() {
    this.ve = 0, this.Ce = Fm(), this.Fe = Sn.EMPTY_BYTE_STRING, this.Me = !1, this.xe = !0
  }
  get current() {
    return this.Me
  }
  get resumeToken() {
    return this.Fe
  }
  get Oe() {
    return this.ve !== 0
  }
  get Ne() {
    return this.xe
  }
  Be(e) {
    e.approximateByteSize() > 0 && (this.xe = !0, this.Fe = e)
  }
  Le() {
    let e = Ae(),
      n = Ae(),
      r = Ae();
    return this.Ce.forEach((i, a) => {
      switch (a) {
        case 0:
          e = e.add(i);
          break;
        case 2:
          n = n.add(i);
          break;
        case 1:
          r = r.add(i);
          break;
        default:
          ue(38017, {
            changeType: a
          })
      }
    }), new f0(this.Fe, this.Me, e, n, r)
  }
  ke() {
    this.xe = !1, this.Ce = Fm()
  }
  qe(e, n) {
    this.xe = !0, this.Ce = this.Ce.insert(e, n)
  }
  Qe(e) {
    this.xe = !0, this.Ce = this.Ce.remove(e)
  }
  $e() {
    this.ve += 1
  }
  Ue() {
    this.ve -= 1, Ke(this.ve >= 0, 3241, {
      ve: this.ve
    })
  }
  Ke() {
    this.xe = !0, this.Me = !0
  }
}
class XP {
  constructor(e) {
    this.We = e, this.Ge = new Map, this.ze = di(), this.je = Ll(), this.Je = Ll(), this.He = new St(xe)
  }
  Ye(e) {
    for (const n of e.Se) e.be && e.be.isFoundDocument() ? this.Ze(n, e.be) : this.Xe(n, e.key, e.be);
    for (const n of e.removedTargetIds) this.Xe(n, e.key, e.be)
  }
  et(e) {
    this.forEachTarget(e, n => {
      const r = this.tt(n);
      switch (e.state) {
        case 0:
          this.nt(n) && r.Be(e.resumeToken);
          break;
        case 1:
          r.Ue(), r.Oe || r.ke(), r.Be(e.resumeToken);
          break;
        case 2:
          r.Ue(), r.Oe || this.removeTarget(n);
          break;
        case 3:
          this.nt(n) && (r.Ke(), r.Be(e.resumeToken));
          break;
        case 4:
          this.nt(n) && (this.rt(n), r.Be(e.resumeToken));
          break;
        default:
          ue(56790, {
            state: e.state
          })
      }
    })
  }
  forEachTarget(e, n) {
    e.targetIds.length > 0 ? e.targetIds.forEach(n) : this.Ge.forEach((r, i) => {
      this.nt(i) && n(i)
    })
  }
  it(e) {
    const n = e.targetId,
      r = e.De.count,
      i = this.st(n);
    if (i) {
      const a = i.target;
      if (yh(a))
        if (r === 0) {
          const l = new Z1(a.path);
          this.Xe(n, l, On.newNoDocument(l, pe.min()))
        } else Ke(r === 1, 20013, {
          expectedCount: r
        });
      else {
        const l = this.ot(n);
        if (l !== r) {
          const c = this._t(e),
            h = c ? this.ut(c, e, l) : 1;
          if (h !== 0) {
            this.rt(n);
            const p = h === 2 ? "TargetPurposeExistenceFilterMismatchBloom" : "TargetPurposeExistenceFilterMismatch";
            this.He = this.He.insert(n, p)
          }
        }
      }
    }
  }
  _t(e) {
    const n = e.De.unchangedNames;
    if (!n || !n.bits) return null;
    const {
      bits: {
        bitmap: r = "",
        padding: i = 0
      },
      hashCount: a = 0
    } = n;
    let l, c;
    try {
      l = Zi(r).toUint8Array()
    } catch (h) {
      if (h instanceof Hv) return Yi("Decoding the base64 bloom filter in existence filter failed (" + h.message + "); ignoring the bloom filter and falling back to full re-query."), null;
      throw h
    }
    try {
      c = new k9(l, i, a)
    } catch (h) {
      return Yi(h instanceof xa ? "BloomFilter error: " : "Applying bloom filter failed: ", h), null
    }
    return c.fe === 0 ? null : c
  }
  ut(e, n, r) {
    return n.De.count === r - this.ht(e, n.targetId) ? 0 : 2
  }
  ht(e, n) {