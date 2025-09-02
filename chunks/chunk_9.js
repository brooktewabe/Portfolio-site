
  function xs(d, w) {
    var E = null;
    if (d.g == w) {
      _s(d), Uo(d), d.g = null;
      var O = 2
    } else if (Rt(d.h, w)) E = w.D, d3(d.h, w), O = 1;
    else return;
    if (d.G != 0) {
      if (w.o)
        if (O == 1) {
          E = w.m ? w.m.length : 0, w = Date.now() - w.F;
          var Z = d.B;
          O = nt(), p1(O, new ve(O, E)), p2(d)
        } else f3(d);
      else if (Z = w.s, Z == 3 || Z == 0 && 0 < w.X || !(O == 1 && Dc(d, w) || O == 2 && bs(d))) switch (E && 0 < E.length && (w = d.h, w.i = w.i.concat(E)), Z) {
        case 1:
          K2(d, 5);
          break;
        case 4:
          K2(d, 10);
          break;
        case 3:
          K2(d, 6);
          break;
        default:
          K2(d, 2)
      }
    }
  }

  function R0(d, w) {
    let E = d.Ta + Math.floor(Math.random() * d.cb);
    return d.isActive() || (E *= 2), E * w
  }

  function K2(d, w) {
    if (d.j.info("Error code " + w), w == 2) {
      var E = v(d.fb, d),
        O = d.Xa;
      const Z = !O;
      O = new Ar(O || "//www.google.com/images/cleardot.gif"), c.location && c.location.protocol == "http" || Ir(O, "https"), Kr(O), Z ? ys(O.toString(), E) : T(O.toString(), E)
    } else R1(2);
    d.G = 0, d.l && d.l.sa(w), N0(d), vs(d)
  }
  t.fb = function(d) {
    d ? (this.j.info("Successfully pinged google.com"), R1(2)) : (this.j.info("Failed to ping google.com"), R1(1))
  };

  function N0(d) {
    if (d.G = 0, d.ka = [], d.l) {
      const w = ps(d.h);
      (w.length != 0 || d.i.length != 0) && (R(d.ka, w), R(d.ka, d.i), d.h.i.length = 0, k(d.i), d.i.length = 0), d.l.ra()
    }
  }

  function L0(d, w, E) {
    var O = E instanceof Ar ? Cn(E) : new Ar(E);
    if (O.g != "") w && (O.g = w + "." + O.g), d2(O, O.s);
    else {
      var Z = c.location;
      O = Z.protocol, w = w ? w + "." + Z.hostname : Z.hostname, Z = +Z.port;
      var o1 = new Ar(null);
      O && Ir(o1, O), w && (o1.g = w), Z && d2(o1, Z), E && (o1.l = E), O = o1
    }
    return E = d.D, w = d.ya, E && w && Be(O, E, w), Be(O, "VER", d.la), G2(d, O), O
  }

  function M0(d, w, E) {
    if (w && !d.J) throw Error("Can't create secondary domain capable XhrIo object.");
    return w = d.Ca && !d.pa ? new Y1(new Q({
      eb: E
    })) : new Y1(d.pa), w.Ha(d.J), w
  }
  t.isActive = function() {
    return !!this.l && this.l.isActive(this)
  };

  function Wo() {}
  t = Wo.prototype, t.ua = function() {}, t.ta = function() {}, t.sa = function() {}, t.ra = function() {}, t.isActive = function() {
    return !0
  }, t.Na = function() {};

  function Ss() {}
  Ss.prototype.g = function(d, w) {
    return new Wn(d, w)
  };

  function Wn(d, w) {
    J.call(this), this.g = new zo(w), this.l = d, this.h = w && w.messageUrlParams || null, d = w && w.messageHeaders || null, w && w.clientProtocolHeaderRequired && (d ? d["X-Client-Protocol"] = "webchannel" : d = {
      "X-Client-Protocol": "webchannel"
    }), this.g.o = d, d = w && w.initMessageHeaders || null, w && w.messageContentType && (d ? d["X-WebChannel-Content-Type"] = w.messageContentType : d = {
      "X-WebChannel-Content-Type": w.messageContentType
    }), w && w.va && (d ? d["X-WebChannel-Client-Profile"] = w.va : d = {
      "X-WebChannel-Client-Profile": w.va
    }), this.g.S = d, (d = w && w.Sb) && !q(d) && (this.g.m = d), this.v = w && w.supportsCrossDomainXhr || !1, this.u = w && w.sendRawJson || !1, (w = w && w.httpSessionIdParam) && !q(w) && (this.g.D = w, d = this.h, d !== null && w in d && (d = this.h, w in d && delete d[w])), this.j = new m2(this)
  }
  P(Wn, J), Wn.prototype.m = function() {
    this.g.l = this.j, this.v && (this.g.J = !0), this.g.connect(this.l, this.h || void 0)
  }, Wn.prototype.close = function() {
    mn(this.g)
  }, Wn.prototype.o = function(d) {
    var w = this.g;
    if (typeof d == "string") {
      var E = {};
      E.__data__ = d, d = E
    } else this.u && (E = {}, E.__data__ = L1(d), d = E);
    w.i.push(new bi(w.Ya++, d)), w.G == 3 && p2(w)
  }, Wn.prototype.N = function() {
    this.g.l = null, delete this.j, mn(this.g), delete this.g, Wn.aa.N.call(this)
  };

  function D0(d) {
    Ce.call(this), d.__headers__ && (this.headers = d.__headers__, this.statusCode = d.__status__, delete d.__headers__, delete d.__status__);
    var w = d.__sm__;
    if (w) {
      e: {
        for (const E in w) {
          d = E;
          break e
        }
        d = void 0
      }(this.i = d) && (d = this.i, w = w !== null && d in w ? w[d] : void 0),
      this.data = w
    }
    else this.data = d
  }
  P(D0, Ce);

  function O0() {
    tt.call(this), this.status = 1
  }
  P(O0, tt);

  function m2(d) {
    this.g = d
  }
  P(m2, Wo), m2.prototype.ua = function() {
    p1(this.g, "a")
  }, m2.prototype.ta = function(d) {
    p1(this.g, new D0(d))
  }, m2.prototype.sa = function(d) {
    p1(this.g, new O0)
  }, m2.prototype.ra = function() {
    p1(this.g, "b")
  }, Ss.prototype.createWebChannel = Ss.prototype.g, Wn.prototype.send = Wn.prototype.o, Wn.prototype.open = Wn.prototype.m, Wn.prototype.close = Wn.prototype.close, jv = function() {
    return new Ss
  }, Ov = function() {
    return nt()
  }, Dv = ct, hh = {
    mb: 0,
    pb: 1,
    qb: 2,
    Jb: 3,
    Ob: 4,
    Lb: 5,
    Mb: 6,
    Kb: 7,
    Ib: 8,
    Nb: 9,
    PROXY: 10,
    NOPROXY: 11,
    Gb: 12,
    Cb: 13,
    Db: 14,
    Bb: 15,
    Eb: 16,
    Fb: 17,
    ib: 18,
    hb: 19,
    jb: 20
  }, a2.NO_ERROR = 0, a2.TIMEOUT = 8, a2.HTTP_ERROR = 6, Ql = a2, gi.COMPLETE = "complete", Mv = gi, Se.EventType = Re, Re.OPEN = "a", Re.CLOSE = "b", Re.ERROR = "c", Re.MESSAGE = "d", J.prototype.listen = J.prototype.K, ba = Se, Y1.prototype.listenOnce = Y1.prototype.L, Y1.prototype.getLastError = Y1.prototype.Ka, Y1.prototype.getLastErrorCode = Y1.prototype.Ba, Y1.prototype.getStatus = Y1.prototype.Z, Y1.prototype.getResponseJson = Y1.prototype.Oa, Y1.prototype.getResponseText = Y1.prototype.oa, Y1.prototype.send = Y1.prototype.ea, Y1.prototype.setWithCredentials = Y1.prototype.Ha, Lv = Y1
}).apply(typeof Il < "u" ? Il : typeof self < "u" ? self : typeof window < "u" ? window : {});
const dm = "@firebase/firestore",
  hm = "4.8.0";
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
class Dn {
  constructor(e) {
    this.uid = e
  }
  isAuthenticated() {
    return this.uid != null
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user"
  }
  isEqual(e) {
    return e.uid === this.uid
  }
}
Dn.UNAUTHENTICATED = new Dn(null), Dn.GOOGLE_CREDENTIALS = new Dn("google-credentials-uid"), Dn.FIRST_PARTY = new Dn("first-party-uid"), Dn.MOCK_USER = new Dn("mock-user");
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
let Po = "11.10.0";
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
const Q3 = new Sv("@firebase/firestore");

function Xs() {
  return Q3.logLevel
}

function U1(t, ...e) {
  if (Q3.logLevel <= De.DEBUG) {
    const n = e.map(y9);
    Q3.debug(`Firestore (${Po}): ${t}`, ...n)
  }
}

function ci(t, ...e) {
  if (Q3.logLevel <= De.ERROR) {
    const n = e.map(y9);
    Q3.error(`Firestore (${Po}): ${t}`, ...n)
  }
}

function Yi(t, ...e) {
  if (Q3.logLevel <= De.WARN) {
    const n = e.map(y9);
    Q3.warn(`Firestore (${Po}): ${t}`, ...n)
  }
}

function y9(t) {
  if (typeof t == "string") return t;
  try {
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
    return function(n) {
      return JSON.stringify(n)
    }(t)
  } catch {
    return t
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
function ue(t, e, n) {
  let r = "Unexpected state";
  typeof e == "string" ? r = e : n = e, Vv(t, r, n)
}

function Vv(t, e, n) {
  let r = `FIRESTORE (${Po}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;
  if (n !== void 0) try {
    r += " CONTEXT: " + JSON.stringify(n)
  } catch {
    r += " CONTEXT: " + n
  }
  throw ci(r), new Error(r)
}

function Ke(t, e, n, r) {
  let i = "Unexpected state";
  typeof n == "string" ? i = n : r = n, t || Vv(e, i, r)
}

function ge(t, e) {
  return t
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
const m1 = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss"
};
class W1 extends ns {
  constructor(e, n) {
    super(e, n), this.code = e, this.message = n, this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`
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
class z3 {
  constructor() {
    this.promise = new Promise((e, n) => {
      this.resolve = e, this.reject = n
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
class Fv {
  constructor(e, n) {
    this.user = n, this.type = "OAuth", this.headers = new Map, this.headers.set("Authorization", `Bearer ${e}`)
  }
}
class Kk {
  getToken() {
    return Promise.resolve(null)
  }
  invalidateToken() {}
  start(e, n) {
    e.enqueueRetryable(() => n(Dn.UNAUTHENTICATED))
  }
  shutdown() {}
}
class Qk {
  constructor(e) {
    this.token = e, this.changeListener = null
  }
  getToken() {
    return Promise.resolve(this.token)
  }
  invalidateToken() {}
  start(e, n) {
    this.changeListener = n, e.enqueueRetryable(() => n(this.token.user))
  }
  shutdown() {
    this.changeListener = null
  }
}
class Yk {
  constructor(e) {
    this.t = e, this.currentUser = Dn.UNAUTHENTICATED, this.i = 0, this.forceRefresh = !1, this.auth = null
  }
  start(e, n) {
    Ke(this.o === void 0, 42304);
    let r = this.i;
    const i = h => this.i !== r ? (r = this.i, n(h)) : Promise.resolve();
    let a = new z3;
    this.o = () => {
      this.i++, this.currentUser = this.u(), a.resolve(), a = new z3, e.enqueueRetryable(() => i(this.currentUser))
    };
    const l = () => {
        const h = a;
        e.enqueueRetryable(async () => {
          await h.promise, await i(this.currentUser)
        })
      },
      c = h => {
        U1("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = h, this.o && (this.auth.addAuthTokenListener(this.o), l())
      };
    this.t.onInit(h => c(h)), setTimeout(() => {
      if (!this.auth) {
        const h = this.t.getImmediate({
          optional: !0
        });
        h ? c(h) : (U1("FirebaseAuthCredentialsProvider", "Auth not yet detected"), a.resolve(), a = new z3)
      }
    }, 0), l()
  }
  getToken() {
    const e = this.i,
      n = this.forceRefresh;
    return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then(r => this.i !== e ? (U1("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : r ? (Ke(typeof r.accessToken == "string", 31837, {
      l: r
    }), new Fv(r.accessToken, this.currentUser)) : null) : Promise.resolve(null)
  }
  invalidateToken() {
    this.forceRefresh = !0
  }
  shutdown() {
    this.auth && this.o && this.auth.removeAuthTokenListener(this.o), this.o = void 0
  }
  u() {
    const e = this.auth && this.auth.getUid();
    return Ke(e === null || typeof e == "string", 2055, {
      h: e
    }), new Dn(e)
  }
}
class Xk {
  constructor(e, n, r) {
    this.P = e, this.T = n, this.I = r, this.type = "FirstParty", this.user = Dn.FIRST_PARTY, this.A = new Map
  }
  R() {
    return this.I ? this.I() : null
  }
  get headers() {
    this.A.set("X-Goog-AuthUser", this.P);
    const e = this.R();
    return e && this.A.set("Authorization", e), this.T && this.A.set("X-Goog-Iam-Authorization-Token", this.T), this.A
  }
}
class Jk {
  constructor(e, n, r) {
    this.P = e, this.T = n, this.I = r
  }
  getToken() {
    return Promise.resolve(new Xk(this.P, this.T, this.I))
  }
  start(e, n) {
    e.enqueueRetryable(() => n(Dn.FIRST_PARTY))
  }
  shutdown() {}
  invalidateToken() {}
}
class fm {
  constructor(e) {
    this.value = e, this.type = "AppCheck", this.headers = new Map, e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value)
  }
}
class Zk {
  constructor(e, n) {
    this.V = n, this.forceRefresh = !1, this.appCheck = null, this.m = null, this.p = null, kv(e) && e.settings.appCheckToken && (this.p = e.settings.appCheckToken)
  }
  start(e, n) {
    Ke(this.o === void 0, 3512);
    const r = a => {
      a.error != null && U1("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);
      const l = a.token !== this.m;
      return this.m = a.token, U1("FirebaseAppCheckTokenProvider", `Received ${l?"new":"existing"} token.`), l ? n(a.token) : Promise.resolve()
    };
    this.o = a => {
      e.enqueueRetryable(() => r(a))
    };
    const i = a => {
      U1("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = a, this.o && this.appCheck.addTokenListener(this.o)
    };
    this.V.onInit(a => i(a)), setTimeout(() => {
      if (!this.appCheck) {
        const a = this.V.getImmediate({
          optional: !0
        });
        a ? i(a) : U1("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
      }
    }, 0)
  }
  getToken() {
    if (this.p) return Promise.resolve(new fm(this.p));
    const e = this.forceRefresh;
    return this.forceRefresh = !1, this.appCheck ? this.appCheck.getToken(e).then(n => n ? (Ke(typeof n.token == "string", 44558, {
      tokenResult: n
    }), this.m = n.token, new fm(n.token)) : null) : Promise.resolve(null)
  }
  invalidateToken() {
    this.forceRefresh = !0
  }
  shutdown() {
    this.appCheck && this.o && this.appCheck.removeTokenListener(this.o), this.o = void 0
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
function eP(t) {
  const e = typeof self < "u" && (self.crypto || self.msCrypto),
    n = new Uint8Array(t);
  if (e && typeof e.getRandomValues == "function") e.getRandomValues(n);
  else
    for (let r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
  return n
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
function Bv() {
  return new TextEncoder
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
class v9 {
  static newId() {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      n = 62 * Math.floor(4.129032258064516);
    let r = "";
    for (; r.length < 20;) {
      const i = eP(40);
      for (let a = 0; a < i.length; ++a) r.length < 20 && i[a] < n && (r += e.charAt(i[a] % 62))
    }
    return r
  }
}

function xe(t, e) {
  return t < e ? -1 : t > e ? 1 : 0
}

function fh(t, e) {
  let n = 0;
  for (; n < t.length && n < e.length;) {
    const r = t.codePointAt(n),
      i = e.codePointAt(n);
    if (r !== i) {
      if (r < 128 && i < 128) return xe(r, i);
      {
        const a = Bv(),
          l = tP(a.encode(pm(t, n)), a.encode(pm(e, n)));
        return l !== 0 ? l : xe(r, i)
      }
    }
    n += r > 65535 ? 2 : 1
  }
  return xe(t.length, e.length)
}

function pm(t, e) {
  return t.codePointAt(e) > 65535 ? t.substring(e, e + 2) : t.substring(e, e + 1)
}

function tP(t, e) {
  for (let n = 0; n < t.length && n < e.length; ++n)
    if (t[n] !== e[n]) return xe(t[n], e[n]);
  return xe(t.length, e.length)
}

function mo(t, e, n) {
  return t.length === e.length && t.every((r, i) => n(r, e[i]))
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
const mm = "__name__";
class _2 {
  constructor(e, n, r) {
    n === void 0 ? n = 0 : n > e.length && ue(637, {
      offset: n,
      range: e.length
    }), r === void 0 ? r = e.length - n : r > e.length - n && ue(1746, {
      length: r,
      range: e.length - n
    }), this.segments = e, this.offset = n, this.len = r
  }
  get length() {
    return this.len
  }
  isEqual(e) {
    return _2.comparator(this, e) === 0
  }
  child(e) {
    const n = this.segments.slice(this.offset, this.limit());
    return e instanceof _2 ? e.forEach(r => {
      n.push(r)
    }) : n.push(e), this.construct(n)
  }
  limit() {
    return this.offset + this.length
  }
  popFirst(e) {
    return e = e === void 0 ? 1 : e, this.construct(this.segments, this.offset + e, this.length - e)
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1)
  }
  firstSegment() {
    return this.segments[this.offset]
  }
  lastSegment() {
    return this.get(this.length - 1)
  }
  get(e) {
    return this.segments[this.offset + e]
  }
  isEmpty() {
    return this.length === 0
  }
  isPrefixOf(e) {
    if (e.length < this.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1;
    return !0
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1;
    return !0
  }
  forEach(e) {
    for (let n = this.offset, r = this.limit(); n < r; n++) e(this.segments[n])
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit())
  }
  static comparator(e, n) {
    const r = Math.min(e.length, n.length);
    for (let i = 0; i < r; i++) {
      const a = _2.compareSegments(e.get(i), n.get(i));
      if (a !== 0) return a
    }
    return xe(e.length, n.length)
  }
  static compareSegments(e, n) {
    const r = _2.isNumericId(e),
      i = _2.isNumericId(n);
    return r && !i ? -1 : !r && i ? 1 : r && i ? _2.extractNumericId(e).compare(_2.extractNumericId(n)) : fh(e, n)
  }
  static isNumericId(e) {
    return e.startsWith("__id") && e.endsWith("__")
  }
  static extractNumericId(e) {
    return Ki.fromString(e.substring(4, e.length - 2))
  }
}
class lt extends _2 {
  construct(e, n, r) {
    return new lt(e, n, r)
  }
  canonicalString() {
    return this.toArray().join("/")
  }
  toString() {
    return this.canonicalString()
  }
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join("/")
  }
  static fromString(...e) {
    const n = [];
    for (const r of e) {
      if (r.indexOf("//") >= 0) throw new W1(m1.INVALID_ARGUMENT, `Invalid segment (${r}). Paths must not contain // in them.`);
      n.push(...r.split("/").filter(i => i.length > 0))
    }
    return new lt(n)
  }
  static emptyPath() {
    return new lt([])
  }
}
const nP = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class xn extends _2 {
  construct(e, n, r) {
    return new xn(e, n, r)
  }
  static isValidIdentifier(e) {
    return nP.test(e)
  }
  canonicalString() {
    return this.toArray().map(e => (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), xn.isValidIdentifier(e) || (e = "`" + e + "`"), e)).join(".")
  }
  toString() {
    return this.canonicalString()
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === mm
  }
  static keyField() {
    return new xn([mm])
  }
  static fromServerFormat(e) {
    const n = [];
    let r = "",
      i = 0;
    const a = () => {
      if (r.length === 0) throw new W1(m1.INVALID_ARGUMENT, `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
      n.push(r), r = ""
    };
    let l = !1;
    for (; i < e.length;) {
      const c = e[i];
      if (c === "\\") {
        if (i + 1 === e.length) throw new W1(m1.INVALID_ARGUMENT, "Path has trailing escape character: " + e);
        const h = e[i + 1];
        if (h !== "\\" && h !== "." && h !== "`") throw new W1(m1.INVALID_ARGUMENT, "Path has invalid escape sequence: " + e);
        r += h, i += 2
      } else c === "`" ? (l = !l, i++) : c !== "." || l ? (r += c, i++) : (a(), i++)
    }
    if (a(), l) throw new W1(m1.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
    return new xn(n)
  }
  static emptyPath() {
    return new xn([])
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
class Z1 {
  constructor(e) {
    this.path = e
  }
  static fromPath(e) {
    return new Z1(lt.fromString(e))
  }
  static fromName(e) {
    return new Z1(lt.fromString(e).popFirst(5))
  }
  static empty() {
    return new Z1(lt.emptyPath())
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment()
  }
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2)
  }
  getCollectionPath() {
    return this.path.popLast()
  }
  isEqual(e) {
    return e !== null && lt.comparator(this.path, e.path) === 0
  }
  toString() {
    return this.path.toString()
  }
  static comparator(e, n) {
    return lt.comparator(e.path, n.path)
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0
  }
  static fromSegments(e) {
    return new Z1(new lt(e.slice()))
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
function $v(t, e, n) {
  if (!n) throw new W1(m1.INVALID_ARGUMENT, `Function ${t}() cannot be called with an empty ${e}.`)
}

function rP(t, e, n, r) {
  if (e === !0 && r === !0) throw new W1(m1.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`)
}

function gm(t) {
  if (!Z1.isDocumentKey(t)) throw new W1(m1.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)
}

function ym(t) {
  if (Z1.isDocumentKey(t)) throw new W1(m1.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)
}

function zv(t) {
  return typeof t == "object" && t !== null && (Object.getPrototypeOf(t) === Object.prototype || Object.getPrototypeOf(t) === null)
}

function Zu(t) {
  if (t === void 0) return "undefined";
  if (t === null) return "null";
  if (typeof t == "string") return t.length > 20 && (t = `${t.substring(0,20)}...`), JSON.stringify(t);
  if (typeof t == "number" || typeof t == "boolean") return "" + t;
  if (typeof t == "object") {
    if (t instanceof Array) return "an array";
    {
      const e = function(r) {
        return r.constructor ? r.constructor.name : null
      }(t);
      return e ? `a custom ${e} object` : "an object"
    }
  }
  return typeof t == "function" ? "a function" : ue(12329, {
    type: typeof t
  })
}

function Ra(t, e) {
  if ("_delegate" in t && (t = t._delegate), !(t instanceof e)) {
    if (e.name === t.constructor.name) throw new W1(m1.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    {
      const n = Zu(t);
      throw new W1(m1.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${n}`)
    }
  }
  return t
}
/**
 * @license
 * Copyright 2025 Google LLC
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
function Gt(t, e) {
  const n = {
    typeString: t
  };
  return e && (n.value = e), n
}

function d0(t, e) {
  if (!zv(t)) throw new W1(m1.INVALID_ARGUMENT, "JSON must be an object");
  let n;
  for (const r in e)
    if (e[r]) {
      const i = e[r].typeString,
        a = "value" in e[r] ? {
          value: e[r].value
        } : void 0;
      if (!(r in t)) {
        n = `JSON missing required field: '${r}'`;
        break
      }
      const l = t[r];
      if (i && typeof l !== i) {
        n = `JSON field '${r}' must be a ${i}.`;
        break
      }
      if (a !== void 0 && l !== a.value) {
        n = `Expected '${r}' field to equal '${a.value}'`;
        break
      }
    } if (n) throw new W1(m1.INVALID_ARGUMENT, n);
  return !0
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
const vm = -62135596800,
  wm = 1e6;
class mt {
  static now() {
    return mt.fromMillis(Date.now())
  }
  static fromDate(e) {
    return mt.fromMillis(e.getTime())
  }
  static fromMillis(e) {
    const n = Math.floor(e / 1e3),
      r = Math.floor((e - 1e3 * n) * wm);
    return new mt(n, r)
  }
  constructor(e, n) {
    if (this.seconds = e, this.nanoseconds = n, n < 0) throw new W1(m1.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + n);
    if (n >= 1e9) throw new W1(m1.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + n);
    if (e < vm) throw new W1(m1.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
    if (e >= 253402300800) throw new W1(m1.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e)
  }
  toDate() {
    return new Date(this.toMillis())
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / wm
  }
  _compareTo(e) {
    return this.seconds === e.seconds ? xe(this.nanoseconds, e.nanoseconds) : xe(this.seconds, e.seconds)
  }
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds
  }
  toString() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
  }
  toJSON() {
    return {
      type: mt._jsonSchemaVersion,
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    }
  }
  static fromJSON(e) {
    if (d0(e, mt._jsonSchema)) return new mt(e.seconds, e.nanoseconds)
  }
  valueOf() {
    const e = this.seconds - vm;
    return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0")
  }
}
mt._jsonSchemaVersion = "firestore/timestamp/1.0", mt._jsonSchema = {
  type: Gt("string", mt._jsonSchemaVersion),
  seconds: Gt("number"),
  nanoseconds: Gt("number")
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
class pe {
  static fromTimestamp(e) {
    return new pe(e)
  }
  static min() {
    return new pe(new mt(0, 0))
  }
  static max() {
    return new pe(new mt(253402300799, 999999999))
  }
  constructor(e) {
    this.timestamp = e
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp)
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp)
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")"
  }
  toTimestamp() {
    return this.timestamp
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
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
const qa = -1;

function iP(t, e) {
  const n = t.toTimestamp().seconds,
    r = t.toTimestamp().nanoseconds + 1,
    i = pe.fromTimestamp(r === 1e9 ? new mt(n + 1, 0) : new mt(n, r));
  return new Xi(i, Z1.empty(), e)
}

function sP(t) {
  return new Xi(t.readTime, t.key, qa)
}
class Xi {
  constructor(e, n, r) {
    this.readTime = e, this.documentKey = n, this.largestBatchId = r
  }
  static min() {
    return new Xi(pe.min(), Z1.empty(), qa)
  }
  static max() {
    return new Xi(pe.max(), Z1.empty(), qa)
  }
}

function oP(t, e) {
  let n = t.readTime.compareTo(e.readTime);
  return n !== 0 ? n : (n = Z1.comparator(t.documentKey, e.documentKey), n !== 0 ? n : xe(t.largestBatchId, e.largestBatchId))
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
const aP = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class lP {
  constructor() {
    this.onCommittedListeners = []
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e)
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach(e => e())
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
async function Ao(t) {
  if (t.code !== m1.FAILED_PRECONDITION || t.message !== aP) throw t;
  U1("LocalStore", "Unexpectedly lost primary lease")
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
class g1 {
  constructor(e) {
    this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = !1, this.callbackAttached = !1, e(n => {
      this.isDone = !0, this.result = n, this.nextCallback && this.nextCallback(n)
    }, n => {
      this.isDone = !0, this.error = n, this.catchCallback && this.catchCallback(n)
    })
  } catch (e) {
    return this.next(void 0, e)
  }
  next(e, n) {
    return this.callbackAttached && ue(59440), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(n, this.error) : this.wrapSuccess(e, this.result) : new g1((r, i) => {
      this.nextCallback = a => {
        this.wrapSuccess(e, a).next(r, i)
      }, this.catchCallback = a => {
        this.wrapFailure(n, a).next(r, i)
      }
    })
  }
  toPromise() {
    return new Promise((e, n) => {
      this.next(e, n)
    })
  }
  wrapUserFunction(e) {
    try {
      const n = e();
      return n instanceof g1 ? n : g1.resolve(n)
    } catch (n) {
      return g1.reject(n)
    }
  }
  wrapSuccess(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : g1.resolve(n)
  }
  wrapFailure(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : g1.reject(n)
  }
  static resolve(e) {
    return new g1((n, r) => {
      n(e)
    })
  }
  static reject(e) {
    return new g1((n, r) => {
      r(e)
    })
  }
  static waitFor(e) {
    return new g1((n, r) => {
      let i = 0,
        a = 0,
        l = !1;
      e.forEach(c => {
        ++i, c.next(() => {
          ++a, l && a === i && n()
        }, h => r(h))
      }), l = !0, a === i && n()
    })
  }
  static or(e) {
    let n = g1.resolve(!1);
    for (const r of e) n = n.next(i => i ? g1.resolve(i) : r());
    return n
  }
  static forEach(e, n) {
    const r = [];
    return e.forEach((i, a) => {
      r.push(n.call(this, i, a))
    }), this.waitFor(r)
  }
  static mapArray(e, n) {
    return new g1((r, i) => {
      const a = e.length,
        l = new Array(a);
      let c = 0;
      for (let h = 0; h < a; h++) {
        const p = h;
        n(e[p]).next(m => {
          l[p] = m, ++c, c === a && r(l)
        }, m => i(m))
      }
    })
  }
  static doWhile(e, n) {
    return new g1((r, i) => {
      const a = () => {
        e() === !0 ? n().next(() => {
          a()
        }, i) : r()
      };
      a()
    })
  }
}

function uP(t) {
  const e = t.match(/Android ([\d.]+)/i),
    n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
  return Number(n)
}

function Io(t) {
  return t.name === "IndexedDbTransactionError"
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
class ec {
  constructor(e, n) {
    this.previousValue = e, n && (n.sequenceNumberHandler = r => this._e(r), this.ae = r => n.writeSequenceNumber(r))
  }
  _e(e) {
    return this.previousValue = Math.max(e, this.previousValue), this.previousValue
  }
  next() {
    const e = ++this.previousValue;
    return this.ae && this.ae(e), e
  }
}
ec.ue = -1;
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
const w9 = -1;

function tc(t) {
  return t == null
}

function gu(t) {
  return t === 0 && 1 / t == -1 / 0
}

function cP(t) {
  return typeof t == "number" && Number.isInteger(t) && !gu(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER
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
const Uv = "";

function dP(t) {
  let e = "";
  for (let n = 0; n < t.length; n++) e.length > 0 && (e = bm(e)), e = hP(t.get(n), e);
  return bm(e)
}

function hP(t, e) {
  let n = e;
  const r = t.length;
  for (let i = 0; i < r; i++) {
    const a = t.charAt(i);
    switch (a) {
      case "\0":
        n += "";
        break;
      case Uv:
        n += "";
        break;
      default:
        n += a
    }
  }
  return n
}

function bm(t) {
  return t + Uv + ""
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
function _m(t) {
  let e = 0;
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e
}

function rs(t, e) {
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
}

function Wv(t) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0
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
class St {
  constructor(e, n) {
    this.comparator = e, this.root = n || bn.EMPTY
  }
  insert(e, n) {
    return new St(this.comparator, this.root.insert(e, n, this.comparator).copy(null, null, bn.BLACK, null, null))
  }
  remove(e) {
    return new St(this.comparator, this.root.remove(e, this.comparator).copy(null, null, bn.BLACK, null, null))
  }
  get(e) {
    let n = this.root;
    for (; !n.isEmpty();) {
      const r = this.comparator(e, n.key);
      if (r === 0) return n.value;
      r < 0 ? n = n.left : r > 0 && (n = n.right)
    }
    return null
  }
  indexOf(e) {
    let n = 0,
      r = this.root;
    for (; !r.isEmpty();) {
      const i = this.comparator(e, r.key);
      if (i === 0) return n + r.left.size;
      i < 0 ? r = r.left : (n += r.left.size + 1, r = r.right)
    }
    return -1
  }
  isEmpty() {
    return this.root.isEmpty()
  }
  get size() {
    return this.root.size
  }
  minKey() {
    return this.root.minKey()
  }
  maxKey() {
    return this.root.maxKey()
  }
  inorderTraversal(e) {
    return this.root.inorderTraversal(e)
  }
  forEach(e) {
    this.inorderTraversal((n, r) => (e(n, r), !1))
  }
  toString() {
    const e = [];
    return this.inorderTraversal((n, r) => (e.push(`${n}:${r}`), !1)), `{${e.join(", ")}}`
  }
  reverseTraversal(e) {
    return this.root.reverseTraversal(e)
  }
  getIterator() {
    return new Rl(this.root, null, this.comparator, !1)
  }
  getIteratorFrom(e) {
    return new Rl(this.root, e, this.comparator, !1)
  }
  getReverseIterator() {
    return new Rl(this.root, null, this.comparator, !0)
  }
  getReverseIteratorFrom(e) {
    return new Rl(this.root, e, this.comparator, !0)
  }
}
class Rl {
  constructor(e, n, r, i) {
    this.isReverse = i, this.nodeStack = [];
    let a = 1;
    for (; !e.isEmpty();)
      if (a = n ? r(e.key, n) : 1, n && i && (a *= -1), a < 0) e = this.isReverse ? e.left : e.right;
      else {
        if (a === 0) {
          this.nodeStack.push(e);
          break
        }
        this.nodeStack.push(e), e = this.isReverse ? e.right : e.left
      }
  }
  getNext() {
    let e = this.nodeStack.pop();
    const n = {
      key: e.key,
      value: e.value
    };
    if (this.isReverse)
      for (e = e.left; !e.isEmpty();) this.nodeStack.push(e), e = e.right;
    else
      for (e = e.right; !e.isEmpty();) this.nodeStack.push(e), e = e.left;
    return n
  }
  hasNext() {
    return this.nodeStack.length > 0
  }
  peek() {
    if (this.nodeStack.length === 0) return null;
    const e = this.nodeStack[this.nodeStack.length - 1];
    return {
      key: e.key,
      value: e.value
    }
  }
}
class bn {
  constructor(e, n, r, i, a) {
    this.key = e, this.value = n, this.color = r ?? bn.RED, this.left = i ?? bn.EMPTY, this.right = a ?? bn.EMPTY, this.size = this.left.size + 1 + this.right.size
  }
  copy(e, n, r, i, a) {
    return new bn(e ?? this.key, n ?? this.value, r ?? this.color, i ?? this.left, a ?? this.right)
  }
  isEmpty() {
    return !1
  }
  inorderTraversal(e) {
    return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e)
  }
  reverseTraversal(e) {
    return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min()
  }
  minKey() {
    return this.min().key
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey()
  }
  insert(e, n, r) {
    let i = this;
    const a = r(e, i.key);
    return i = a < 0 ? i.copy(null, null, null, i.left.insert(e, n, r), null) : a === 0 ? i.copy(null, n, null, null, null) : i.copy(null, null, null, null, i.right.insert(e, n, r)), i.fixUp()
  }
  removeMin() {
    if (this.left.isEmpty()) return bn.EMPTY;
    let e = this;
    return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), e = e.copy(null, null, null, e.left.removeMin(), null), e.fixUp()
  }
  remove(e, n) {
    let r, i = this;
    if (n(e, i.key) < 0) i.left.isEmpty() || i.left.isRed() || i.left.left.isRed() || (i = i.moveRedLeft()), i = i.copy(null, null, null, i.left.remove(e, n), null);
    else {
      if (i.left.isRed() && (i = i.rotateRight()), i.right.isEmpty() || i.right.isRed() || i.right.left.isRed() || (i = i.moveRedRight()), n(e, i.key) === 0) {
        if (i.right.isEmpty()) return bn.EMPTY;
        r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.removeMin())
      }
      i = i.copy(null, null, null, null, i.right.remove(e, n))
    }
    return i.fixUp()
  }
  isRed() {
    return this.color
  }
  fixUp() {
    let e = this;
    return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()), e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()), e.left.isRed() && e.right.isRed() && (e = e.colorFlip()), e
  }
  moveRedLeft() {
    let e = this.colorFlip();
    return e.right.left.isRed() && (e = e.copy(null, null, null, null, e.right.rotateRight()), e = e.rotateLeft(), e = e.colorFlip()), e
  }
  moveRedRight() {
    let e = this.colorFlip();
    return e.left.left.isRed() && (e = e.rotateRight(), e = e.colorFlip()), e
  }
  rotateLeft() {
    const e = this.copy(null, null, bn.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null)
  }
  rotateRight() {
    const e = this.copy(null, null, bn.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e)
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null),
      n = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, n)
  }
  checkMaxDepth() {
    const e = this.check();
    return Math.pow(2, e) <= this.size + 1
  }
  check() {
    if (this.isRed() && this.left.isRed()) throw ue(43730, {
      key: this.key,
      value: this.value
    });
    if (this.right.isRed()) throw ue(14113, {
      key: this.key,
      value: this.value
    });
    const e = this.left.check();
    if (e !== this.right.check()) throw ue(27949);
    return e + (this.isRed() ? 0 : 1)
  }
}
bn.EMPTY = null, bn.RED = !0, bn.BLACK = !1;
bn.EMPTY = new class {
  constructor() {
    this.size = 0
  }
  get key() {
    throw ue(57766)
  }
  get value() {
    throw ue(16141)
  }
  get color() {
    throw ue(16727)
  }
  get left() {
    throw ue(29726)
  }
  get right() {
    throw ue(36894)
  }
  copy(e, n, r, i, a) {
    return this
  }
  insert(e, n, r) {
    return new bn(e, n)
  }
  remove(e, n) {
    return this
  }
  isEmpty() {
    return !0
  }
  inorderTraversal(e) {
    return !1
  }
  reverseTraversal(e) {
    return !1
  }
  minKey() {
    return null
  }
  maxKey() {
    return null
  }
  isRed() {
    return !1
  }
  checkMaxDepth() {
    return !0
  }
  check() {
    return 0
  }
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
class nn {
  constructor(e) {
    this.comparator = e, this.data = new St(this.comparator)
  }
  has(e) {
    return this.data.get(e) !== null
  }
  first() {
    return this.data.minKey()
  }
  last() {
    return this.data.maxKey()
  }
  get size() {
    return this.data.size
  }
  indexOf(e) {
    return this.data.indexOf(e)
  }
  forEach(e) {
    this.data.inorderTraversal((n, r) => (e(n), !1))
  }
  forEachInRange(e, n) {
    const r = this.data.getIteratorFrom(e[0]);
    for (; r.hasNext();) {
      const i = r.getNext();
      if (this.comparator(i.key, e[1]) >= 0) return;
      n(i.key)
    }
  }
  forEachWhile(e, n) {
    let r;
    for (r = n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator(); r.hasNext();)
      if (!e(r.getNext().key)) return
  }
  firstAfterOrEqual(e) {
    const n = this.data.getIteratorFrom(e);
    return n.hasNext() ? n.getNext().key : null
  }
  getIterator() {
    return new xm(this.data.getIterator())
  }
  getIteratorFrom(e) {
    return new xm(this.data.getIteratorFrom(e))
  }
  add(e) {
    return this.copy(this.data.remove(e).insert(e, !0))
  }
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this
  }
  isEmpty() {
    return this.data.isEmpty()
  }
  unionWith(e) {
    let n = this;
    return n.size < e.size && (n = e, e = this), e.forEach(r => {
      n = n.add(r)
    }), n
  }
  isEqual(e) {
    if (!(e instanceof nn) || this.size !== e.size) return !1;
    const n = this.data.getIterator(),
      r = e.data.getIterator();
    for (; n.hasNext();) {
      const i = n.getNext().key,
        a = r.getNext().key;
      if (this.comparator(i, a) !== 0) return !1
    }
    return !0
  }
  toArray() {
    const e = [];
    return this.forEach(n => {
      e.push(n)
    }), e
  }
  toString() {
    const e = [];
    return this.forEach(n => e.push(n)), "SortedSet(" + e.toString() + ")"
  }
  copy(e) {
    const n = new nn(this.comparator);
    return n.data = e, n
  }
}
class xm {
  constructor(e) {
    this.iter = e
  }
  getNext() {
    return this.iter.getNext().key
  }
  hasNext() {
    return this.iter.hasNext()
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
class i2 {
  constructor(e) {
    this.fields = e, e.sort(xn.comparator)
  }
  static empty() {
    return new i2([])
  }
  unionWith(e) {
    let n = new nn(xn.comparator);
    for (const r of this.fields) n = n.add(r);
    for (const r of e) n = n.add(r);
    return new i2(n.toArray())
  }
  covers(e) {
    for (const n of this.fields)
      if (n.isPrefixOf(e)) return !0;
    return !1
  }
  isEqual(e) {
    return mo(this.fields, e.fields, (n, r) => n.isEqual(r))
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
class Hv extends Error {
  constructor() {
    super(...arguments), this.name = "Base64DecodeError"
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
class Sn {
  constructor(e) {
    this.binaryString = e
  }
  static fromBase64String(e) {
    const n = function(i) {
      try {
        return atob(i)
      } catch (a) {
        throw typeof DOMException < "u" && a instanceof DOMException ? new Hv("Invalid base64 string: " + a) : a
      }
    }(e);
    return new Sn(n)
  }
  static fromUint8Array(e) {
    const n = function(i) {
      let a = "";
      for (let l = 0; l < i.length; ++l) a += String.fromCharCode(i[l]);
      return a
    }(e);
    return new Sn(n)
  } [Symbol.iterator]() {
    let e = 0;
    return {
      next: () => e < this.binaryString.length ? {
        value: this.binaryString.charCodeAt(e++),
        done: !1
      } : {
        value: void 0,
        done: !0
      }
    }
  }
  toBase64() {
    return function(n) {
      return btoa(n)
    }(this.binaryString)
  }
  toUint8Array() {
    return function(n) {
      const r = new Uint8Array(n.length);
      for (let i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
      return r
    }(this.binaryString)
  }
  approximateByteSize() {
    return 2 * this.binaryString.length
  }
  compareTo(e) {
    return xe(this.binaryString, e.binaryString)
  }
  isEqual(e) {
    return this.binaryString === e.binaryString
  }
}
Sn.EMPTY_BYTE_STRING = new Sn("");
const fP = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

function Ji(t) {
  if (Ke(!!t, 39018), typeof t == "string") {
    let e = 0;
    const n = fP.exec(t);
    if (Ke(!!n, 46558, {
        timestamp: t
      }), n[1]) {
      let i = n[1];
      i = (i + "000000000").substr(0, 9), e = Number(i)
    }
    const r = new Date(t);
    return {
      seconds: Math.floor(r.getTime() / 1e3),
      nanos: e
    }
  }