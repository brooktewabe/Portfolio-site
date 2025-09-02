  async runIndexedDBEnvironmentCheck() {
    return LC() ? MC().then(() => !0).catch(() => !1) : !1
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await Vk(this.app);
      return n != null && n.heartbeats ? n : {
        heartbeats: []
      }
    } else return {
      heartbeats: []
    }
  }
  async overwrite(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return am(this.app, {
        lastSentHeartbeatDate: (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats
      })
    } else return
  }
  async add(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return am(this.app, {
        lastSentHeartbeatDate: (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...e.heartbeats]
      })
    } else return
  }
}

function um(t) {
  return fu(JSON.stringify({
    version: 2,
    heartbeats: t
  })).length
}

function Wk(t) {
  if (t.length === 0) return -1;
  let e = 0,
    n = t[0].date;
  for (let r = 1; r < t.length; r++) t[r].date < n && (n = t[r].date, e = r);
  return e
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
function Hk(t) {
  Wa(new po("platform-logger", e => new rk(e), "PRIVATE")), Wa(new po("heartbeat", e => new $k(e), "PRIVATE")), Gi(uh, sm, t), Gi(uh, sm, "esm2017"), Gi("fire-js", "")
}
Hk("");
var qk = "firebase",
  Gk = "11.10.0";
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
Gi(qk, Gk, "app");
var cm = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
var Ki, Nv;
(function() {
  var t;
  /** @license

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  function e(D, A) {
    function j() {}
    j.prototype = A.prototype, D.D = A.prototype, D.prototype = new j, D.prototype.constructor = D, D.C = function(x, N, V) {
      for (var L = Array(arguments.length - 2), h1 = 2; h1 < arguments.length; h1++) L[h1 - 2] = arguments[h1];
      return A.prototype[N].apply(x, L)
    }
  }

  function n() {
    this.blockSize = -1
  }

  function r() {
    this.blockSize = -1, this.blockSize = 64, this.g = Array(4), this.B = Array(this.blockSize), this.o = this.h = 0, this.s()
  }
  e(r, n), r.prototype.s = function() {
    this.g[0] = 1732584193, this.g[1] = 4023233417, this.g[2] = 2562383102, this.g[3] = 271733878, this.o = this.h = 0
  };

  function i(D, A, j) {
    j || (j = 0);
    var x = Array(16);
    if (typeof A == "string")
      for (var N = 0; 16 > N; ++N) x[N] = A.charCodeAt(j++) | A.charCodeAt(j++) << 8 | A.charCodeAt(j++) << 16 | A.charCodeAt(j++) << 24;
    else
      for (N = 0; 16 > N; ++N) x[N] = A[j++] | A[j++] << 8 | A[j++] << 16 | A[j++] << 24;
    A = D.g[0], j = D.g[1], N = D.g[2];
    var V = D.g[3],
      L = A + (V ^ j & (N ^ V)) + x[0] + 3614090360 & 4294967295;
    A = j + (L << 7 & 4294967295 | L >>> 25), L = V + (N ^ A & (j ^ N)) + x[1] + 3905402710 & 4294967295, V = A + (L << 12 & 4294967295 | L >>> 20), L = N + (j ^ V & (A ^ j)) + x[2] + 606105819 & 4294967295, N = V + (L << 17 & 4294967295 | L >>> 15), L = j + (A ^ N & (V ^ A)) + x[3] + 3250441966 & 4294967295, j = N + (L << 22 & 4294967295 | L >>> 10), L = A + (V ^ j & (N ^ V)) + x[4] + 4118548399 & 4294967295, A = j + (L << 7 & 4294967295 | L >>> 25), L = V + (N ^ A & (j ^ N)) + x[5] + 1200080426 & 4294967295, V = A + (L << 12 & 4294967295 | L >>> 20), L = N + (j ^ V & (A ^ j)) + x[6] + 2821735955 & 4294967295, N = V + (L << 17 & 4294967295 | L >>> 15), L = j + (A ^ N & (V ^ A)) + x[7] + 4249261313 & 4294967295, j = N + (L << 22 & 4294967295 | L >>> 10), L = A + (V ^ j & (N ^ V)) + x[8] + 1770035416 & 4294967295, A = j + (L << 7 & 4294967295 | L >>> 25), L = V + (N ^ A & (j ^ N)) + x[9] + 2336552879 & 4294967295, V = A + (L << 12 & 4294967295 | L >>> 20), L = N + (j ^ V & (A ^ j)) + x[10] + 4294925233 & 4294967295, N = V + (L << 17 & 4294967295 | L >>> 15), L = j + (A ^ N & (V ^ A)) + x[11] + 2304563134 & 4294967295, j = N + (L << 22 & 4294967295 | L >>> 10), L = A + (V ^ j & (N ^ V)) + x[12] + 1804603682 & 4294967295, A = j + (L << 7 & 4294967295 | L >>> 25), L = V + (N ^ A & (j ^ N)) + x[13] + 4254626195 & 4294967295, V = A + (L << 12 & 4294967295 | L >>> 20), L = N + (j ^ V & (A ^ j)) + x[14] + 2792965006 & 4294967295, N = V + (L << 17 & 4294967295 | L >>> 15), L = j + (A ^ N & (V ^ A)) + x[15] + 1236535329 & 4294967295, j = N + (L << 22 & 4294967295 | L >>> 10), L = A + (N ^ V & (j ^ N)) + x[1] + 4129170786 & 4294967295, A = j + (L << 5 & 4294967295 | L >>> 27), L = V + (j ^ N & (A ^ j)) + x[6] + 3225465664 & 4294967295, V = A + (L << 9 & 4294967295 | L >>> 23), L = N + (A ^ j & (V ^ A)) + x[11] + 643717713 & 4294967295, N = V + (L << 14 & 4294967295 | L >>> 18), L = j + (V ^ A & (N ^ V)) + x[0] + 3921069994 & 4294967295, j = N + (L << 20 & 4294967295 | L >>> 12), L = A + (N ^ V & (j ^ N)) + x[5] + 3593408605 & 4294967295, A = j + (L << 5 & 4294967295 | L >>> 27), L = V + (j ^ N & (A ^ j)) + x[10] + 38016083 & 4294967295, V = A + (L << 9 & 4294967295 | L >>> 23), L = N + (A ^ j & (V ^ A)) + x[15] + 3634488961 & 4294967295, N = V + (L << 14 & 4294967295 | L >>> 18), L = j + (V ^ A & (N ^ V)) + x[4] + 3889429448 & 4294967295, j = N + (L << 20 & 4294967295 | L >>> 12), L = A + (N ^ V & (j ^ N)) + x[9] + 568446438 & 4294967295, A = j + (L << 5 & 4294967295 | L >>> 27), L = V + (j ^ N & (A ^ j)) + x[14] + 3275163606 & 4294967295, V = A + (L << 9 & 4294967295 | L >>> 23), L = N + (A ^ j & (V ^ A)) + x[3] + 4107603335 & 4294967295, N = V + (L << 14 & 4294967295 | L >>> 18), L = j + (V ^ A & (N ^ V)) + x[8] + 1163531501 & 4294967295, j = N + (L << 20 & 4294967295 | L >>> 12), L = A + (N ^ V & (j ^ N)) + x[13] + 2850285829 & 4294967295, A = j + (L << 5 & 4294967295 | L >>> 27), L = V + (j ^ N & (A ^ j)) + x[2] + 4243563512 & 4294967295, V = A + (L << 9 & 4294967295 | L >>> 23), L = N + (A ^ j & (V ^ A)) + x[7] + 1735328473 & 4294967295, N = V + (L << 14 & 4294967295 | L >>> 18), L = j + (V ^ A & (N ^ V)) + x[12] + 2368359562 & 4294967295, j = N + (L << 20 & 4294967295 | L >>> 12), L = A + (j ^ N ^ V) + x[5] + 4294588738 & 4294967295, A = j + (L << 4 & 4294967295 | L >>> 28), L = V + (A ^ j ^ N) + x[8] + 2272392833 & 4294967295, V = A + (L << 11 & 4294967295 | L >>> 21), L = N + (V ^ A ^ j) + x[11] + 1839030562 & 4294967295, N = V + (L << 16 & 4294967295 | L >>> 16), L = j + (N ^ V ^ A) + x[14] + 4259657740 & 4294967295, j = N + (L << 23 & 4294967295 | L >>> 9), L = A + (j ^ N ^ V) + x[1] + 2763975236 & 4294967295, A = j + (L << 4 & 4294967295 | L >>> 28), L = V + (A ^ j ^ N) + x[4] + 1272893353 & 4294967295, V = A + (L << 11 & 4294967295 | L >>> 21), L = N + (V ^ A ^ j) + x[7] + 4139469664 & 4294967295, N = V + (L << 16 & 4294967295 | L >>> 16), L = j + (N ^ V ^ A) + x[10] + 3200236656 & 4294967295, j = N + (L << 23 & 4294967295 | L >>> 9), L = A + (j ^ N ^ V) + x[13] + 681279174 & 4294967295, A = j + (L << 4 & 4294967295 | L >>> 28), L = V + (A ^ j ^ N) + x[0] + 3936430074 & 4294967295, V = A + (L << 11 & 4294967295 | L >>> 21), L = N + (V ^ A ^ j) + x[3] + 3572445317 & 4294967295, N = V + (L << 16 & 4294967295 | L >>> 16), L = j + (N ^ V ^ A) + x[6] + 76029189 & 4294967295, j = N + (L << 23 & 4294967295 | L >>> 9), L = A + (j ^ N ^ V) + x[9] + 3654602809 & 4294967295, A = j + (L << 4 & 4294967295 | L >>> 28), L = V + (A ^ j ^ N) + x[12] + 3873151461 & 4294967295, V = A + (L << 11 & 4294967295 | L >>> 21), L = N + (V ^ A ^ j) + x[15] + 530742520 & 4294967295, N = V + (L << 16 & 4294967295 | L >>> 16), L = j + (N ^ V ^ A) + x[2] + 3299628645 & 4294967295, j = N + (L << 23 & 4294967295 | L >>> 9), L = A + (N ^ (j | ~V)) + x[0] + 4096336452 & 4294967295, A = j + (L << 6 & 4294967295 | L >>> 26), L = V + (j ^ (A | ~N)) + x[7] + 1126891415 & 4294967295, V = A + (L << 10 & 4294967295 | L >>> 22), L = N + (A ^ (V | ~j)) + x[14] + 2878612391 & 4294967295, N = V + (L << 15 & 4294967295 | L >>> 17), L = j + (V ^ (N | ~A)) + x[5] + 4237533241 & 4294967295, j = N + (L << 21 & 4294967295 | L >>> 11), L = A + (N ^ (j | ~V)) + x[12] + 1700485571 & 4294967295, A = j + (L << 6 & 4294967295 | L >>> 26), L = V + (j ^ (A | ~N)) + x[3] + 2399980690 & 4294967295, V = A + (L << 10 & 4294967295 | L >>> 22), L = N + (A ^ (V | ~j)) + x[10] + 4293915773 & 4294967295, N = V + (L << 15 & 4294967295 | L >>> 17), L = j + (V ^ (N | ~A)) + x[1] + 2240044497 & 4294967295, j = N + (L << 21 & 4294967295 | L >>> 11), L = A + (N ^ (j | ~V)) + x[8] + 1873313359 & 4294967295, A = j + (L << 6 & 4294967295 | L >>> 26), L = V + (j ^ (A | ~N)) + x[15] + 4264355552 & 4294967295, V = A + (L << 10 & 4294967295 | L >>> 22), L = N + (A ^ (V | ~j)) + x[6] + 2734768916 & 4294967295, N = V + (L << 15 & 4294967295 | L >>> 17), L = j + (V ^ (N | ~A)) + x[13] + 1309151649 & 4294967295, j = N + (L << 21 & 4294967295 | L >>> 11), L = A + (N ^ (j | ~V)) + x[4] + 4149444226 & 4294967295, A = j + (L << 6 & 4294967295 | L >>> 26), L = V + (j ^ (A | ~N)) + x[11] + 3174756917 & 4294967295, V = A + (L << 10 & 4294967295 | L >>> 22), L = N + (A ^ (V | ~j)) + x[2] + 718787259 & 4294967295, N = V + (L << 15 & 4294967295 | L >>> 17), L = j + (V ^ (N | ~A)) + x[9] + 3951481745 & 4294967295, D.g[0] = D.g[0] + A & 4294967295, D.g[1] = D.g[1] + (N + (L << 21 & 4294967295 | L >>> 11)) & 4294967295, D.g[2] = D.g[2] + N & 4294967295, D.g[3] = D.g[3] + V & 4294967295
  }
  r.prototype.u = function(D, A) {
    A === void 0 && (A = D.length);
    for (var j = A - this.blockSize, x = this.B, N = this.h, V = 0; V < A;) {
      if (N == 0)
        for (; V <= j;) i(this, D, V), V += this.blockSize;
      if (typeof D == "string") {
        for (; V < A;)
          if (x[N++] = D.charCodeAt(V++), N == this.blockSize) {
            i(this, x), N = 0;
            break
          }
      } else
        for (; V < A;)
          if (x[N++] = D[V++], N == this.blockSize) {
            i(this, x), N = 0;
            break
          }
    }
    this.h = N, this.o += A
  }, r.prototype.v = function() {
    var D = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
    D[0] = 128;
    for (var A = 1; A < D.length - 8; ++A) D[A] = 0;
    var j = 8 * this.o;
    for (A = D.length - 8; A < D.length; ++A) D[A] = j & 255, j /= 256;
    for (this.u(D), D = Array(16), A = j = 0; 4 > A; ++A)
      for (var x = 0; 32 > x; x += 8) D[j++] = this.g[A] >>> x & 255;
    return D
  };

  function a(D, A) {
    var j = c;
    return Object.prototype.hasOwnProperty.call(j, D) ? j[D] : j[D] = A(D)
  }

  function l(D, A) {
    this.h = A;
    for (var j = [], x = !0, N = D.length - 1; 0 <= N; N--) {
      var V = D[N] | 0;
      x && V == A || (j[N] = V, x = !1)
    }
    this.g = j
  }
  var c = {};

  function h(D) {
    return -128 <= D && 128 > D ? a(D, function(A) {
      return new l([A | 0], 0 > A ? -1 : 0)
    }) : new l([D | 0], 0 > D ? -1 : 0)
  }

  function p(D) {
    if (isNaN(D) || !isFinite(D)) return y;
    if (0 > D) return R(p(-D));
    for (var A = [], j = 1, x = 0; D >= j; x++) A[x] = D / j | 0, j *= 4294967296;
    return new l(A, 0)
  }

  function m(D, A) {
    if (D.length == 0) throw Error("number format error: empty string");
    if (A = A || 10, 2 > A || 36 < A) throw Error("radix out of range: " + A);
    if (D.charAt(0) == "-") return R(m(D.substring(1), A));
    if (0 <= D.indexOf("-")) throw Error('number format error: interior "-" character');
    for (var j = p(Math.pow(A, 8)), x = y, N = 0; N < D.length; N += 8) {
      var V = Math.min(8, D.length - N),
        L = parseInt(D.substring(N, N + V), A);
      8 > V ? (V = p(Math.pow(A, V)), x = x.j(V).add(p(L))) : (x = x.j(j), x = x.add(p(L)))
    }
    return x
  }
  var y = h(0),
    v = h(1),
    C = h(16777216);
  t = l.prototype, t.m = function() {
    if (k(this)) return -R(this).m();
    for (var D = 0, A = 1, j = 0; j < this.g.length; j++) {
      var x = this.i(j);
      D += (0 <= x ? x : 4294967296 + x) * A, A *= 4294967296
    }
    return D
  }, t.toString = function(D) {
    if (D = D || 10, 2 > D || 36 < D) throw Error("radix out of range: " + D);
    if (P(this)) return "0";
    if (k(this)) return "-" + R(this).toString(D);
    for (var A = p(Math.pow(D, 6)), j = this, x = "";;) {
      var N = H(j, A).g;
      j = W(j, N.j(A));
      var V = ((0 < j.g.length ? j.g[0] : j.h) >>> 0).toString(D);
      if (j = N, P(j)) return V + x;
      for (; 6 > V.length;) V = "0" + V;
      x = V + x
    }
  }, t.i = function(D) {
    return 0 > D ? 0 : D < this.g.length ? this.g[D] : this.h
  };

  function P(D) {
    if (D.h != 0) return !1;
    for (var A = 0; A < D.g.length; A++)
      if (D.g[A] != 0) return !1;
    return !0
  }

  function k(D) {
    return D.h == -1
  }
  t.l = function(D) {
    return D = W(this, D), k(D) ? -1 : P(D) ? 0 : 1
  };

  function R(D) {
    for (var A = D.g.length, j = [], x = 0; x < A; x++) j[x] = ~D.g[x];
    return new l(j, ~D.h).add(v)
  }
  t.abs = function() {
    return k(this) ? R(this) : this
  }, t.add = function(D) {
    for (var A = Math.max(this.g.length, D.g.length), j = [], x = 0, N = 0; N <= A; N++) {
      var V = x + (this.i(N) & 65535) + (D.i(N) & 65535),
        L = (V >>> 16) + (this.i(N) >>> 16) + (D.i(N) >>> 16);
      x = L >>> 16, V &= 65535, L &= 65535, j[N] = L << 16 | V
    }
    return new l(j, j[j.length - 1] & -2147483648 ? -1 : 0)
  };

  function W(D, A) {
    return D.add(R(A))
  }
  t.j = function(D) {
    if (P(this) || P(D)) return y;
    if (k(this)) return k(D) ? R(this).j(R(D)) : R(R(this).j(D));
    if (k(D)) return R(this.j(R(D)));
    if (0 > this.l(C) && 0 > D.l(C)) return p(this.m() * D.m());
    for (var A = this.g.length + D.g.length, j = [], x = 0; x < 2 * A; x++) j[x] = 0;
    for (x = 0; x < this.g.length; x++)
      for (var N = 0; N < D.g.length; N++) {
        var V = this.i(x) >>> 16,
          L = this.i(x) & 65535,
          h1 = D.i(N) >>> 16,
          A1 = D.i(N) & 65535;
        j[2 * x + 2 * N] += L * A1, q(j, 2 * x + 2 * N), j[2 * x + 2 * N + 1] += V * A1, q(j, 2 * x + 2 * N + 1), j[2 * x + 2 * N + 1] += L * h1, q(j, 2 * x + 2 * N + 1), j[2 * x + 2 * N + 2] += V * h1, q(j, 2 * x + 2 * N + 2)
      }
    for (x = 0; x < A; x++) j[x] = j[2 * x + 1] << 16 | j[2 * x];
    for (x = A; x < 2 * A; x++) j[x] = 0;
    return new l(j, 0)
  };

  function q(D, A) {
    for (;
      (D[A] & 65535) != D[A];) D[A + 1] += D[A] >>> 16, D[A] &= 65535, A++
  }

  function U(D, A) {
    this.g = D, this.h = A
  }

  function H(D, A) {
    if (P(A)) throw Error("division by zero");
    if (P(D)) return new U(y, y);
    if (k(D)) return A = H(R(D), A), new U(R(A.g), R(A.h));
    if (k(A)) return A = H(D, R(A)), new U(R(A.g), A.h);
    if (30 < D.g.length) {
      if (k(D) || k(A)) throw Error("slowDivide_ only works with positive integers.");
      for (var j = v, x = A; 0 >= x.l(D);) j = $(j), x = $(x);
      var N = X(j, 1),
        V = X(x, 1);
      for (x = X(x, 2), j = X(j, 2); !P(x);) {
        var L = V.add(x);
        0 >= L.l(D) && (N = N.add(j), V = L), x = X(x, 1), j = X(j, 1)
      }
      return A = W(D, N.j(A)), new U(N, A)
    }
    for (N = y; 0 <= D.l(A);) {
      for (j = Math.max(1, Math.floor(D.m() / A.m())), x = Math.ceil(Math.log(j) / Math.LN2), x = 48 >= x ? 1 : Math.pow(2, x - 48), V = p(j), L = V.j(A); k(L) || 0 < L.l(D);) j -= x, V = p(j), L = V.j(A);
      P(V) && (V = v), N = N.add(V), D = W(D, L)
    }
    return new U(N, D)
  }
  t.A = function(D) {
    return H(this, D).h
  }, t.and = function(D) {
    for (var A = Math.max(this.g.length, D.g.length), j = [], x = 0; x < A; x++) j[x] = this.i(x) & D.i(x);
    return new l(j, this.h & D.h)
  }, t.or = function(D) {
    for (var A = Math.max(this.g.length, D.g.length), j = [], x = 0; x < A; x++) j[x] = this.i(x) | D.i(x);
    return new l(j, this.h | D.h)
  }, t.xor = function(D) {
    for (var A = Math.max(this.g.length, D.g.length), j = [], x = 0; x < A; x++) j[x] = this.i(x) ^ D.i(x);
    return new l(j, this.h ^ D.h)
  };

  function $(D) {
    for (var A = D.g.length + 1, j = [], x = 0; x < A; x++) j[x] = D.i(x) << 1 | D.i(x - 1) >>> 31;
    return new l(j, D.h)
  }

  function X(D, A) {
    var j = A >> 5;
    A %= 32;
    for (var x = D.g.length - j, N = [], V = 0; V < x; V++) N[V] = 0 < A ? D.i(V + j) >>> A | D.i(V + j + 1) << 32 - A : D.i(V + j);
    return new l(N, D.h)
  }
  r.prototype.digest = r.prototype.v, r.prototype.reset = r.prototype.s, r.prototype.update = r.prototype.u, Nv = r, l.prototype.add = l.prototype.add, l.prototype.multiply = l.prototype.j, l.prototype.modulo = l.prototype.A, l.prototype.compare = l.prototype.l, l.prototype.toNumber = l.prototype.m, l.prototype.toString = l.prototype.toString, l.prototype.getBits = l.prototype.i, l.fromNumber = p, l.fromString = m, Ki = l
}).apply(typeof cm < "u" ? cm : typeof self < "u" ? self : typeof window < "u" ? window : {});
var Il = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
var Lv, ba, Mv, Ql, hh, Dv, Ov, jv;
(function() {
  var t, e = typeof Object.defineProperties == "function" ? Object.defineProperty : function(d, w, E) {
    return d == Array.prototype || d == Object.prototype || (d[w] = E.value), d
  };

  function n(d) {
    d = [typeof globalThis == "object" && globalThis, d, typeof window == "object" && window, typeof self == "object" && self, typeof Il == "object" && Il];
    for (var w = 0; w < d.length; ++w) {
      var E = d[w];
      if (E && E.Math == Math) return E
    }
    throw Error("Cannot find global object")
  }
  var r = n(this);

  function i(d, w) {
    if (w) e: {
      var E = r;d = d.split(".");
      for (var O = 0; O < d.length - 1; O++) {
        var Z = d[O];
        if (!(Z in E)) break e;
        E = E[Z]
      }
      d = d[d.length - 1],
      O = E[d],
      w = w(O),
      w != O && w != null && e(E, d, {
        configurable: !0,
        writable: !0,
        value: w
      })
    }
  }

  function a(d, w) {
    d instanceof String && (d += "");
    var E = 0,
      O = !1,
      Z = {
        next: function() {
          if (!O && E < d.length) {
            var o1 = E++;
            return {
              value: w(o1, d[o1]),
              done: !1
            }
          }
          return O = !0, {
            done: !0,
            value: void 0
          }
        }
      };
    return Z[Symbol.iterator] = function() {
      return Z
    }, Z
  }
  i("Array.prototype.values", function(d) {
    return d || function() {
      return a(this, function(w, E) {
        return E
      })
    }
  });
  /** @license

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var l = l || {},
    c = this || self;

  function h(d) {
    var w = typeof d;
    return w = w != "object" ? w : d ? Array.isArray(d) ? "array" : w : "null", w == "array" || w == "object" && typeof d.length == "number"
  }

  function p(d) {
    var w = typeof d;
    return w == "object" && d != null || w == "function"
  }

  function m(d, w, E) {
    return d.call.apply(d.bind, arguments)
  }

  function y(d, w, E) {
    if (!d) throw Error();
    if (2 < arguments.length) {
      var O = Array.prototype.slice.call(arguments, 2);
      return function() {
        var Z = Array.prototype.slice.call(arguments);
        return Array.prototype.unshift.apply(Z, O), d.apply(w, Z)
      }
    }
    return function() {
      return d.apply(w, arguments)
    }
  }

  function v(d, w, E) {
    return v = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? m : y, v.apply(null, arguments)
  }

  function C(d, w) {
    var E = Array.prototype.slice.call(arguments, 1);
    return function() {
      var O = E.slice();
      return O.push.apply(O, arguments), d.apply(this, O)
    }
  }

  function P(d, w) {
    function E() {}
    E.prototype = w.prototype, d.aa = w.prototype, d.prototype = new E, d.prototype.constructor = d, d.Qb = function(O, Z, o1) {
      for (var I1 = Array(arguments.length - 2), Je = 2; Je < arguments.length; Je++) I1[Je - 2] = arguments[Je];
      return w.prototype[Z].apply(O, I1)
    }
  }

  function k(d) {
    const w = d.length;
    if (0 < w) {
      const E = Array(w);
      for (let O = 0; O < w; O++) E[O] = d[O];
      return E
    }
    return []
  }

  function R(d, w) {
    for (let E = 1; E < arguments.length; E++) {
      const O = arguments[E];
      if (h(O)) {
        const Z = d.length || 0,
          o1 = O.length || 0;
        d.length = Z + o1;
        for (let I1 = 0; I1 < o1; I1++) d[Z + I1] = O[I1]
      } else d.push(O)
    }
  }
  class W {
    constructor(w, E) {
      this.i = w, this.j = E, this.h = 0, this.g = null
    }
    get() {
      let w;
      return 0 < this.h ? (this.h--, w = this.g, this.g = w.next, w.next = null) : w = this.i(), w
    }
  }

  function q(d) {
    return /^[\s\xa0]*$/.test(d)
  }

  function U() {
    var d = c.navigator;
    return d && (d = d.userAgent) ? d : ""
  }

  function H(d) {
    return H[" "](d), d
  }
  H[" "] = function() {};
  var $ = U().indexOf("Gecko") != -1 && !(U().toLowerCase().indexOf("webkit") != -1 && U().indexOf("Edge") == -1) && !(U().indexOf("Trident") != -1 || U().indexOf("MSIE") != -1) && U().indexOf("Edge") == -1;

  function X(d, w, E) {
    for (const O in d) w.call(E, d[O], O, d)
  }

  function D(d, w) {
    for (const E in d) w.call(void 0, d[E], E, d)
  }

  function A(d) {
    const w = {};
    for (const E in d) w[E] = d[E];
    return w
  }
  const j = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

  function x(d, w) {
    let E, O;
    for (let Z = 1; Z < arguments.length; Z++) {
      O = arguments[Z];
      for (E in O) d[E] = O[E];
      for (let o1 = 0; o1 < j.length; o1++) E = j[o1], Object.prototype.hasOwnProperty.call(O, E) && (d[E] = O[E])
    }
  }

  function N(d) {
    var w = 1;
    d = d.split(":");
    const E = [];
    for (; 0 < w && d.length;) E.push(d.shift()), w--;
    return d.length && E.push(d.join(":")), E
  }

  function V(d) {
    c.setTimeout(() => {
      throw d
    }, 0)
  }

  function L() {
    var d = y1;
    let w = null;
    return d.g && (w = d.g, d.g = d.g.next, d.g || (d.h = null), w.next = null), w
  }
  class h1 {
    constructor() {
      this.h = this.g = null
    }
    add(w, E) {
      const O = A1.get();
      O.set(w, E), this.h ? this.h.next = O : this.g = O, this.h = O
    }
  }
  var A1 = new W(() => new V1, d => d.reset());
  class V1 {
    constructor() {
      this.next = this.g = this.h = null
    }
    set(w, E) {
      this.h = w, this.g = E, this.next = null
    }
    reset() {
      this.next = this.g = this.h = null
    }
  }
  let k1, c1 = !1,
    y1 = new h1,
    f1 = () => {
      const d = c.Promise.resolve(void 0);
      k1 = () => {
        d.then(K)
      }
    };
  var K = () => {
    for (var d; d = L();) {
      try {
        d.h.call(d.g)
      } catch (E) {
        V(E)
      }
      var w = A1;
      w.j(d), 100 > w.h && (w.h++, d.next = w.g, w.g = d)
    }
    c1 = !1
  };

  function s1() {
    this.s = this.s, this.C = this.C
  }
  s1.prototype.s = !1, s1.prototype.ma = function() {
    this.s || (this.s = !0, this.N())
  }, s1.prototype.N = function() {
    if (this.C)
      for (; this.C.length;) this.C.shift()()
  };

  function E1(d, w) {
    this.type = d, this.g = this.target = w, this.defaultPrevented = !1
  }
  E1.prototype.h = function() {
    this.defaultPrevented = !0
  };
  var M1 = function() {
    if (!c.addEventListener || !Object.defineProperty) return !1;
    var d = !1,
      w = Object.defineProperty({}, "passive", {
        get: function() {
          d = !0
        }
      });
    try {
      const E = () => {};
      c.addEventListener("test", E, w), c.removeEventListener("test", E, w)
    } catch {}
    return d
  }();

  function F1(d, w) {
    if (E1.call(this, d ? d.type : ""), this.relatedTarget = this.g = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.state = null, this.pointerId = 0, this.pointerType = "", this.i = null, d) {
      var E = this.type = d.type,
        O = d.changedTouches && d.changedTouches.length ? d.changedTouches[0] : null;
      if (this.target = d.target || d.srcElement, this.g = w, w = d.relatedTarget) {
        if ($) {
          e: {
            try {
              H(w.nodeName);
              var Z = !0;
              break e
            } catch {}
            Z = !1
          }
          Z || (w = null)
        }
      } else E == "mouseover" ? w = d.fromElement : E == "mouseout" && (w = d.toElement);
      this.relatedTarget = w, O ? (this.clientX = O.clientX !== void 0 ? O.clientX : O.pageX, this.clientY = O.clientY !== void 0 ? O.clientY : O.pageY, this.screenX = O.screenX || 0, this.screenY = O.screenY || 0) : (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0), this.button = d.button, this.key = d.key || "", this.ctrlKey = d.ctrlKey, this.altKey = d.altKey, this.shiftKey = d.shiftKey, this.metaKey = d.metaKey, this.pointerId = d.pointerId || 0, this.pointerType = typeof d.pointerType == "string" ? d.pointerType : $1[d.pointerType] || "", this.state = d.state, this.i = d, d.defaultPrevented && F1.aa.h.call(this)
    }
  }
  P(F1, E1);
  var $1 = {
    2: "touch",
    3: "pen",
    4: "mouse"
  };
  F1.prototype.h = function() {
    F1.aa.h.call(this);
    var d = this.i;
    d.preventDefault ? d.preventDefault() : d.returnValue = !1
  };
  var K1 = "closure_listenable_" + (1e6 * Math.random() | 0),
    B1 = 0;

  function ee(d, w, E, O, Z) {
    this.listener = d, this.proxy = null, this.src = w, this.type = E, this.capture = !!O, this.ha = Z, this.key = ++B1, this.da = this.fa = !1
  }

  function me(d) {
    d.da = !0, d.listener = null, d.proxy = null, d.src = null, d.ha = null
  }

  function he(d) {
    this.src = d, this.g = {}, this.h = 0
  }
  he.prototype.add = function(d, w, E, O, Z) {
    var o1 = d.toString();
    d = this.g[o1], d || (d = this.g[o1] = [], this.h++);
    var I1 = J1(d, w, O, Z);
    return -1 < I1 ? (w = d[I1], E || (w.fa = !1)) : (w = new ee(w, this.src, o1, !!O, Z), w.fa = E, d.push(w)), w
  };

  function be(d, w) {
    var E = w.type;
    if (E in d.g) {
      var O = d.g[E],
        Z = Array.prototype.indexOf.call(O, w, void 0),
        o1;
      (o1 = 0 <= Z) && Array.prototype.splice.call(O, Z, 1), o1 && (me(w), d.g[E].length == 0 && (delete d.g[E], d.h--))
    }
  }

  function J1(d, w, E, O) {
    for (var Z = 0; Z < d.length; ++Z) {
      var o1 = d[Z];
      if (!o1.da && o1.listener == w && o1.capture == !!E && o1.ha == O) return Z
    }
    return -1
  }
  var ie = "closure_lm_" + (1e6 * Math.random() | 0),
    Ie = {};

  function He(d, w, E, O, Z) {
    if (Array.isArray(w)) {
      for (var o1 = 0; o1 < w.length; o1++) He(d, w[o1], E, O, Z);
      return null
    }
    return E = v1(E), d && d[K1] ? d.K(w, E, p(O) ? !!O.capture : !1, Z) : qe(d, w, E, !1, O, Z)
  }

  function qe(d, w, E, O, Z, o1) {
    if (!w) throw Error("Invalid event type");
    var I1 = p(Z) ? !!Z.capture : !!Z,
      Je = Fn(d);
    if (Je || (d[ie] = Je = new he(d)), E = Je.add(w, E, O, I1, o1), E.proxy) return E;
    if (O = Qe(), E.proxy = O, O.src = d, O.listener = E, d.addEventListener) M1 || (Z = I1), Z === void 0 && (Z = !1), d.addEventListener(w.toString(), O, Z);
    else if (d.attachEvent) d.attachEvent(_e(w.toString()), O);
    else if (d.addListener && d.removeListener) d.addListener(O);
    else throw Error("addEventListener and attachEvent are unavailable.");
    return E
  }

  function Qe() {
    function d(E) {
      return w.call(d.src, d.listener, E)
    }
    const w = T1;
    return d
  }

  function ot(d, w, E, O, Z) {
    if (Array.isArray(w))
      for (var o1 = 0; o1 < w.length; o1++) ot(d, w[o1], E, O, Z);
    else O = p(O) ? !!O.capture : !!O, E = v1(E), d && d[K1] ? (d = d.i, w = String(w).toString(), w in d.g && (o1 = d.g[w], E = J1(o1, E, O, Z), -1 < E && (me(o1[E]), Array.prototype.splice.call(o1, E, 1), o1.length == 0 && (delete d.g[w], d.h--)))) : d && (d = Fn(d)) && (w = d.g[w.toString()], d = -1, w && (d = J1(w, E, O, Z)), (E = -1 < d ? w[d] : null) && It(E))
  }

  function It(d) {
    if (typeof d != "number" && d && !d.da) {
      var w = d.src;
      if (w && w[K1]) be(w.i, d);
      else {
        var E = d.type,
          O = d.proxy;
        w.removeEventListener ? w.removeEventListener(E, O, d.capture) : w.detachEvent ? w.detachEvent(_e(E), O) : w.addListener && w.removeListener && w.removeListener(O), (E = Fn(w)) ? (be(E, d), E.h == 0 && (E.src = null, w[ie] = null)) : me(d)
      }
    }
  }

  function _e(d) {
    return d in Ie ? Ie[d] : Ie[d] = "on" + d
  }

  function T1(d, w) {
    if (d.da) d = !0;
    else {
      w = new F1(w, this);
      var E = d.listener,
        O = d.ha || d.src;
      d.fa && It(d), d = E.call(O, w)
    }
    return d
  }

  function Fn(d) {
    return d = d[ie], d instanceof he ? d : null
  }
  var wt = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

  function v1(d) {
    return typeof d == "function" ? d : (d[wt] || (d[wt] = function(w) {
      return d.handleEvent(w)
    }), d[wt])
  }

  function J() {
    s1.call(this), this.i = new he(this), this.M = this, this.F = null
  }
  P(J, s1), J.prototype[K1] = !0, J.prototype.removeEventListener = function(d, w, E, O) {
    ot(this, d, w, E, O)
  };

  function p1(d, w) {
    var E, O = d.F;
    if (O)
      for (E = []; O; O = O.F) E.push(O);
    if (d = d.M, O = w.type || w, typeof w == "string") w = new E1(w, d);
    else if (w instanceof E1) w.target = w.target || d;
    else {
      var Z = w;
      w = new E1(O, d), x(w, Z)
    }
    if (Z = !0, E)
      for (var o1 = E.length - 1; 0 <= o1; o1--) {
        var I1 = w.g = E[o1];
        Z = w1(I1, O, !0, w) && Z
      }
    if (I1 = w.g = d, Z = w1(I1, O, !0, w) && Z, Z = w1(I1, O, !1, w) && Z, E)
      for (o1 = 0; o1 < E.length; o1++) I1 = w.g = E[o1], Z = w1(I1, O, !1, w) && Z
  }
  J.prototype.N = function() {
    if (J.aa.N.call(this), this.i) {
      var d = this.i,
        w;
      for (w in d.g) {
        for (var E = d.g[w], O = 0; O < E.length; O++) me(E[O]);
        delete d.g[w], d.h--
      }
    }
    this.F = null
  }, J.prototype.K = function(d, w, E, O) {
    return this.i.add(String(d), w, !1, E, O)
  }, J.prototype.L = function(d, w, E, O) {
    return this.i.add(String(d), w, !0, E, O)
  };

  function w1(d, w, E, O) {
    if (w = d.i.g[String(w)], !w) return !0;
    w = w.concat();
    for (var Z = !0, o1 = 0; o1 < w.length; ++o1) {
      var I1 = w[o1];
      if (I1 && !I1.da && I1.capture == E) {
        var Je = I1.listener,
          Jt = I1.ha || I1.src;
        I1.fa && be(d.i, I1), Z = Je.call(Jt, O) !== !1 && Z
      }
    }
    return Z && !O.defaultPrevented
  }

  function se(d, w, E) {
    if (typeof d == "function") E && (d = v(d, E));
    else if (d && typeof d.handleEvent == "function") d = v(d.handleEvent, d);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(w) ? -1 : c.setTimeout(d, w || 0)
  }

  function oe(d) {
    d.g = se(() => {
      d.g = null, d.i && (d.i = !1, oe(d))
    }, d.l);
    const w = d.h;
    d.h = null, d.m.apply(null, w)
  }
  class ye extends s1 {
    constructor(w, E) {
      super(), this.m = w, this.l = E, this.h = null, this.i = !1, this.g = null
    }
    j(w) {
      this.h = arguments, this.g ? this.i = !0 : oe(this)
    }
    N() {
      super.N(), this.g && (c.clearTimeout(this.g), this.g = null, this.i = !1, this.h = null)
    }
  }

  function i1(d) {
    s1.call(this), this.h = d, this.g = {}
  }
  P(i1, s1);
  var d1 = [];

  function j1(d) {
    X(d.g, function(w, E) {
      this.g.hasOwnProperty(E) && It(w)
    }, d), d.g = {}
  }
  i1.prototype.N = function() {
    i1.aa.N.call(this), j1(this)
  }, i1.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented")
  };
  var L1 = c.JSON.stringify,
    D1 = c.JSON.parse,
    le = class {
      stringify(d) {
        return c.JSON.stringify(d, void 0)
      }
      parse(d) {
        return c.JSON.parse(d, void 0)
      }
    };

  function Pe() {}
  Pe.prototype.h = null;

  function Te(d) {
    return d.h || (d.h = d.i())
  }

  function Se() {}
  var Re = {
    OPEN: "a",
    kb: "b",
    Ja: "c",
    wb: "d"
  };

  function Ce() {
    E1.call(this, "d")
  }
  P(Ce, E1);

  function tt() {
    E1.call(this, "c")
  }
  P(tt, E1);
  var ct = {},
    rn = null;

  function nt() {
    return rn = rn || new J
  }
  ct.La = "serverreachability";

  function Cr(d) {
    E1.call(this, ct.La, d)
  }
  P(Cr, E1);

  function En(d) {
    const w = nt();
    p1(w, new Cr(w))
  }
  ct.STAT_EVENT = "statevent";

  function P1(d, w) {
    E1.call(this, ct.STAT_EVENT, d), this.stat = w
  }
  P(P1, E1);

  function R1(d) {
    const w = nt();
    p1(w, new P1(w, d))
  }
  ct.Ma = "timingevent";

  function ve(d, w) {
    E1.call(this, ct.Ma, d), this.size = w
  }
  P(ve, E1);

  function ce(d, w) {
    if (typeof d != "function") throw Error("Fn must not be null and must be a function");
    return c.setTimeout(function() {
      d()
    }, w)
  }

  function Ne() {
    this.g = !0
  }
  Ne.prototype.xa = function() {
    this.g = !1
  };

  function Vt(d, w, E, O, Z, o1) {
    d.info(function() {
      if (d.g)
        if (o1)
          for (var I1 = "", Je = o1.split("&"), Jt = 0; Jt < Je.length; Jt++) {
            var Le = Je[Jt].split("=");
            if (1 < Le.length) {
              var on = Le[0];
              Le = Le[1];
              var zt = on.split("_");
              I1 = 2 <= zt.length && zt[1] == "type" ? I1 + (on + "=" + Le + "&") : I1 + (on + "=redacted&")
            }
          } else I1 = null;
        else I1 = o1;
      return "XMLHTTP REQ (" + O + ") [attempt " + Z + "]: " + w + `
` + E + `
` + I1
    })
  }

  function sn(d, w, E, O, Z, o1, I1) {
    d.info(function() {
      return "XMLHTTP RESP (" + O + ") [ attempt " + Z + "]: " + w + `
` + E + `
` + o1 + " " + I1
    })
  }

  function Ft(d, w, E, O) {
    d.info(function() {
      return "XMLHTTP TEXT (" + w + "): " + hn(d, E) + (O ? " " + O : "")
    })
  }

  function kr(d, w) {
    d.info(function() {
      return "TIMEOUT: " + w
    })
  }
  Ne.prototype.info = function() {};

  function hn(d, w) {
    if (!d.g) return w;
    if (!w) return null;
    try {
      var E = JSON.parse(w);
      if (E) {
        for (d = 0; d < E.length; d++)
          if (Array.isArray(E[d])) {
            var O = E[d];
            if (!(2 > O.length)) {
              var Z = O[1];
              if (Array.isArray(Z) && !(1 > Z.length)) {
                var o1 = Z[0];
                if (o1 != "noop" && o1 != "stop" && o1 != "close")
                  for (var I1 = 1; I1 < Z.length; I1++) Z[I1] = ""
              }
            }
          }
      }
      return L1(E)
    } catch {
      return w
    }
  }
  var a2 = {
      NO_ERROR: 0,
      gb: 1,
      tb: 2,
      sb: 3,
      nb: 4,
      rb: 5,
      ub: 6,
      Ia: 7,
      TIMEOUT: 8,
      xb: 9
    },
    gi = {
      lb: "complete",
      Hb: "success",
      Ja: "error",
      Ia: "abort",
      zb: "ready",
      Ab: "readystatechange",
      TIMEOUT: "timeout",
      vb: "incrementaldata",
      yb: "progress",
      ob: "downloadprogress",
      Pb: "uploadprogress"
    },
    Tn;

  function l2() {}
  P(l2, Pe), l2.prototype.g = function() {
    return new XMLHttpRequest
  }, l2.prototype.i = function() {
    return {}
  }, Tn = new l2;

  function cr(d, w, E, O) {
    this.j = d, this.i = w, this.l = E, this.R = O || 1, this.U = new i1(this), this.I = 45e3, this.H = null, this.o = !1, this.m = this.A = this.v = this.L = this.F = this.S = this.B = null, this.D = [], this.g = null, this.C = 0, this.s = this.u = null, this.X = -1, this.J = !1, this.O = 0, this.M = null, this.W = this.K = this.T = this.P = !1, this.h = new yi
  }

  function yi() {
    this.i = null, this.g = "", this.h = !1
  }
  var F2 = {},
    vi = {};

  function wi(d, w, E) {
    d.L = 1, d.v = Kr(Cn(w)), d.m = E, d.P = !0, u3(d, null)
  }

  function u3(d, w) {
    d.F = Date.now(), Ze(d), d.A = Cn(d.v);
    var E = d.A,
      O = d.R;
    Array.isArray(O) || (O = [String(O)]), h2(E.i, "t", O), d.C = 0, E = d.j.J, d.h = new yi, d.g = M0(d.j, E ? w : null, !d.m), 0 < d.O && (d.M = new ye(v(d.Y, d, d.g), d.O)), w = d.U, E = d.g, O = d.ca;
    var Z = "readystatechange";
    Array.isArray(Z) || (Z && (d1[0] = Z.toString()), Z = d1);
    for (var o1 = 0; o1 < Z.length; o1++) {
      var I1 = He(E, Z[o1], O || w.handleEvent, !1, w.h || w);
      if (!I1) break;
      w.g[I1.key] = I1
    }
    w = d.H ? A(d.H) : {}, d.m ? (d.u || (d.u = "POST"), w["Content-Type"] = "application/x-www-form-urlencoded", d.g.ea(d.A, d.u, d.m, w)) : (d.u = "GET", d.g.ea(d.A, d.u, null, w)), En(), Vt(d.i, d.u, d.A, d.l, d.R, d.m)
  }
  cr.prototype.ca = function(d) {
    d = d.target;
    const w = this.M;
    w && $t(d) == 3 ? w.j() : this.Y(d)
  }, cr.prototype.Y = function(d) {
    try {
      if (d == this.g) e: {
        const zt = $t(this.g);
        var w = this.g.Ba();
        const Nr = this.g.Z();
        if (!(3 > zt) && (zt != 3 || this.g && (this.h.h || this.g.oa() || H2(this.g)))) {
          this.J || zt != 4 || w == 7 || (w == 8 || 0 >= Nr ? En(3) : En(2)), B2(this);
          var E = this.g.Z();
          this.X = E;
          t: if (c3(this)) {
            var O = H2(this.g);
            d = "";
            var Z = O.length,
              o1 = $t(this.g) == 4;
            if (!this.h.i) {
              if (typeof TextDecoder > "u") {
                Xn(this), u2(this);
                var I1 = "";
                break t
              }
              this.h.i = new c.TextDecoder
            }
            for (w = 0; w < Z; w++) this.h.h = !0, d += this.h.i.decode(O[w], {
              stream: !(o1 && w == Z - 1)
            });
            O.length = 0, this.h.g += d, this.C = 0, I1 = this.h.g
          } else I1 = this.g.oa();
          if (this.o = E == 200, sn(this.i, this.u, this.A, this.l, this.R, zt, E), this.o) {
            if (this.T && !this.K) {
              t: {
                if (this.g) {
                  var Je, Jt = this.g;
                  if ((Je = Jt.g ? Jt.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !q(Je)) {
                    var Le = Je;
                    break t
                  }
                }
                Le = null
              }
              if (E = Le) Ft(this.i, this.l, E, "Initial handshake response via X-HTTP-Initial-Response"),
              this.K = !0,
              $2(this, E);
              else {
                this.o = !1, this.s = 3, R1(12), Xn(this), u2(this);
                break e
              }
            }
            if (this.P) {
              E = !0;
              let fr;
              for (; !this.J && this.C < I1.length;)
                if (fr = Bo(this, I1), fr == vi) {
                  zt == 4 && (this.s = 4, R1(14), E = !1), Ft(this.i, this.l, null, "[Incomplete Response]");
                  break
                } else if (fr == F2) {
                this.s = 4, R1(15), Ft(this.i, this.l, I1, "[Invalid Chunk]"), E = !1;
                break
              } else Ft(this.i, this.l, fr, null), $2(this, fr);
              if (c3(this) && this.C != 0 && (this.h.g = this.h.g.slice(this.C), this.C = 0), zt != 4 || I1.length != 0 || this.h.h || (this.s = 1, R1(16), E = !1), this.o = this.o && E, !E) Ft(this.i, this.l, I1, "[Invalid Chunked Response]"), Xn(this), u2(this);
              else if (0 < I1.length && !this.W) {
                this.W = !0;
                var on = this.j;
                on.g == this && on.ba && !on.M && (on.j.info("Great, no buffering proxy detected. Bytes received: " + I1.length), Uo(on), on.M = !0, R1(11))
              }
            } else Ft(this.i, this.l, I1, null), $2(this, I1);
            zt == 4 && Xn(this), this.o && !this.J && (zt == 4 ? xs(this.j, this) : (this.o = !1, Ze(this)))
          } else q2(this.g), E == 400 && 0 < I1.indexOf("Unknown SID") ? (this.s = 3, R1(12)) : (this.s = 0, R1(13)), Xn(this), u2(this)
        }
      }
    } catch {} finally {}
  };

  function c3(d) {
    return d.g ? d.u == "GET" && d.L != 2 && d.j.Ca : !1
  }

  function Bo(d, w) {
    var E = d.C,
      O = w.indexOf(`
`, E);
    return O == -1 ? vi : (E = Number(w.substring(E, O)), isNaN(E) ? F2 : (O += 1, O + E > w.length ? vi : (w = w.slice(O, O + E), d.C = O + E, w)))
  }
  cr.prototype.cancel = function() {
    this.J = !0, Xn(this)
  };

  function Ze(d) {
    d.S = Date.now() + d.I, hs(d, d.I)
  }

  function hs(d, w) {
    if (d.B != null) throw Error("WatchDog timer not null");
    d.B = ce(v(d.ba, d), w)
  }

  function B2(d) {
    d.B && (c.clearTimeout(d.B), d.B = null)
  }
  cr.prototype.ba = function() {
    this.B = null;
    const d = Date.now();
    0 <= d - this.S ? (kr(this.i, this.A), this.L != 2 && (En(), R1(17)), Xn(this), this.s = 2, u2(this)) : hs(this, this.S - d)
  };

  function u2(d) {
    d.j.G == 0 || d.J || xs(d.j, d)
  }

  function Xn(d) {
    B2(d);
    var w = d.M;
    w && typeof w.ma == "function" && w.ma(), d.M = null, j1(d.U), d.g && (w = d.g, d.g = null, w.abort(), w.ma())
  }

  function $2(d, w) {
    try {
      var E = d.j;
      if (E.G != 0 && (E.g == d || Rt(E.h, d))) {
        if (!d.K && Rt(E.h, d) && E.G == 3) {
          try {
            var O = E.Da.g.parse(w)
          } catch {
            O = null
          }
          if (Array.isArray(O) && O.length == 3) {
            var Z = O;
            if (Z[0] == 0) {
              e: if (!E.u) {
                if (E.g)
                  if (E.g.F + 3e3 < d.F) _s(E), Yr(E);
                  else break e;
                bs(E), R1(18)
              }
            }
            else E.za = Z[1], 0 < E.za - E.T && 37500 > Z[2] && E.F && E.v == 0 && !E.C && (E.C = ce(v(E.Za, E), 6e3));
            if (1 >= fs(E.h) && E.ca) {
              try {
                E.ca()
              } catch {}
              E.ca = void 0
            }
          } else K2(E, 11)
        } else if ((d.K || E.g == d) && _s(E), !q(w))
          for (Z = E.Da.g.parse(w), w = 0; w < Z.length; w++) {
            let Le = Z[w];
            if (E.T = Le[0], Le = Le[1], E.G == 2)
              if (Le[0] == "c") {
                E.K = Le[1], E.ia = Le[2];
                const on = Le[3];
                on != null && (E.la = on, E.j.info("VER=" + E.la));
                const zt = Le[4];
                zt != null && (E.Aa = zt, E.j.info("SVER=" + E.Aa));
                const Nr = Le[5];
                Nr != null && typeof Nr == "number" && 0 < Nr && (O = 1.5 * Nr, E.L = O, E.j.info("backChannelRequestTimeoutMs_=" + O)), O = E;
                const fr = d.g;
                if (fr) {
                  const p3 = fr.g ? fr.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                  if (p3) {
                    var o1 = O.h;
                    o1.g || p3.indexOf("spdy") == -1 && p3.indexOf("quic") == -1 && p3.indexOf("h2") == -1 || (o1.j = o1.l, o1.g = new Set, o1.h && (_i(o1, o1.h), o1.h = null))
                  }
                  if (O.D) {
                    const Es = fr.g ? fr.g.getResponseHeader("X-HTTP-Session-Id") : null;
                    Es && (O.ya = Es, Be(O.I, O.D, Es))
                  }
                }
                E.G = 3, E.l && E.l.ua(), E.ba && (E.R = Date.now() - d.F, E.j.info("Handshake RTT: " + E.R + "ms")), O = E;
                var I1 = d;
                if (O.qa = L0(O, O.J ? O.ia : null, O.W), I1.K) {
                  d3(O.h, I1);
                  var Je = I1,
                    Jt = O.L;
                  Jt && (Je.I = Jt), Je.B && (B2(Je), Ze(Je)), O.g = I1
                } else f3(O);
                0 < E.i.length && p2(E)
              } else Le[0] != "stop" && Le[0] != "close" || K2(E, 7);
            else E.G == 3 && (Le[0] == "stop" || Le[0] == "close" ? Le[0] == "stop" ? K2(E, 7) : mn(E) : Le[0] != "noop" && E.l && E.l.ta(Le), E.v = 0)
          }
      }
      En(4)
    } catch {}
  }
  var bi = class {
    constructor(d, w) {
      this.g = d, this.map = w
    }
  };

  function z2(d) {
    this.l = d || 10, c.PerformanceNavigationTiming ? (d = c.performance.getEntriesByType("navigation"), d = 0 < d.length && (d[0].nextHopProtocol == "hq" || d[0].nextHopProtocol == "h2")) : d = !!(c.chrome && c.chrome.loadTimes && c.chrome.loadTimes() && c.chrome.loadTimes().wasFetchedViaSpdy), this.j = d ? this.l : 1, this.g = null, 1 < this.j && (this.g = new Set), this.h = null, this.i = []
  }

  function Bn(d) {
    return d.h ? !0 : d.g ? d.g.size >= d.j : !1
  }

  function fs(d) {
    return d.h ? 1 : d.g ? d.g.size : 0
  }

  function Rt(d, w) {
    return d.h ? d.h == w : d.g ? d.g.has(w) : !1
  }

  function _i(d, w) {
    d.g ? d.g.add(w) : d.h = w
  }

  function d3(d, w) {
    d.h && d.h == w ? d.h = null : d.g && d.g.has(w) && d.g.delete(w)
  }
  z2.prototype.cancel = function() {
    if (this.i = ps(this), this.h) this.h.cancel(), this.h = null;
    else if (this.g && this.g.size !== 0) {
      for (const d of this.g.values()) d.cancel();
      this.g.clear()
    }
  };

  function ps(d) {
    if (d.h != null) return d.i.concat(d.h.D);
    if (d.g != null && d.g.size !== 0) {
      let w = d.i;
      for (const E of d.g.values()) w = w.concat(E.D);
      return w
    }
    return k(d.i)
  }

  function c2(d) {
    if (d.V && typeof d.V == "function") return d.V();
    if (typeof Map < "u" && d instanceof Map || typeof Set < "u" && d instanceof Set) return Array.from(d.values());
    if (typeof d == "string") return d.split("");
    if (h(d)) {
      for (var w = [], E = d.length, O = 0; O < E; O++) w.push(d[O]);
      return w
    }
    w = [], E = 0;
    for (O in d) w[E++] = d[O];
    return w
  }

  function U2(d) {
    if (d.na && typeof d.na == "function") return d.na();
    if (!d.V || typeof d.V != "function") {
      if (typeof Map < "u" && d instanceof Map) return Array.from(d.keys());
      if (!(typeof Set < "u" && d instanceof Set)) {
        if (h(d) || typeof d == "string") {
          var w = [];
          d = d.length;
          for (var E = 0; E < d; E++) w.push(E);
          return w
        }
        w = [], E = 0;
        for (const O in d) w[E++] = O;
        return w
      }
    }
  }

  function Pr(d, w) {
    if (d.forEach && typeof d.forEach == "function") d.forEach(w, void 0);
    else if (h(d) || typeof d == "string") Array.prototype.forEach.call(d, w, void 0);
    else
      for (var E = U2(d), O = c2(d), Z = O.length, o1 = 0; o1 < Z; o1++) w.call(void 0, O[o1], E && E[o1], d)
  }
  var W2 = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

  function $o(d, w) {
    if (d) {
      d = d.split("&");
      for (var E = 0; E < d.length; E++) {
        var O = d[E].indexOf("="),
          Z = null;
        if (0 <= O) {
          var o1 = d[E].substring(0, O);
          Z = d[E].substring(O + 1)
        } else o1 = d[E];
        w(o1, Z ? decodeURIComponent(Z.replace(/\+/g, " ")) : "")
      }
    }
  }

  function Ar(d) {
    if (this.g = this.o = this.j = "", this.s = null, this.m = this.l = "", this.h = !1, d instanceof Ar) {
      this.h = d.h, Ir(this, d.j), this.o = d.o, this.g = d.g, d2(this, d.s), this.l = d.l;
      var w = d.i,
        E = new Rr;
      E.i = w.i, w.g && (E.g = new Map(w.g), E.h = w.h), Ye(this, E), this.m = d.m
    } else d && (w = String(d).match(W2)) ? (this.h = !1, Ir(this, w[1] || "", !0), this.o = fe(w[2] || ""), this.g = fe(w[3] || "", !0), d2(this, w[4]), this.l = fe(w[5] || "", !0), Ye(this, w[6] || "", !0), this.m = fe(w[7] || "")) : (this.h = !1, this.i = new Rr(null, this.h))
  }
  Ar.prototype.toString = function() {
    var d = [],
      w = this.j;
    w && d.push(Qr(w, fn, !0), ":");
    var E = this.g;
    return (E || w == "file") && (d.push("//"), (w = this.o) && d.push(Qr(w, fn, !0), "@"), d.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), E = this.s, E != null && d.push(":", String(E))), (E = this.l) && (this.g && E.charAt(0) != "/" && d.push("/"), d.push(Qr(E, E.charAt(0) == "/" ? ms : zn, !0))), (E = this.i.toString()) && d.push("?", E), (E = this.m) && d.push("#", Qr(E, h3)), d.join("")
  };

  function Cn(d) {
    return new Ar(d)
  }

  function Ir(d, w, E) {
    d.j = E ? fe(w, !0) : w, d.j && (d.j = d.j.replace(/:$/, ""))
  }

  function d2(d, w) {
    if (w) {
      if (w = Number(w), isNaN(w) || 0 > w) throw Error("Bad port number " + w);
      d.s = w
    } else d.s = null
  }

  function Ye(d, w, E) {
    w instanceof Rr ? (d.i = w, Un(d.i, d.h)) : (E || (w = Qr(w, gs)), d.i = new Rr(w, d.h))
  }

  function Be(d, w, E) {
    d.i.set(w, E)
  }

  function Kr(d) {
    return Be(d, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)), d
  }

  function fe(d, w) {
    return d ? w ? decodeURI(d.replace(/%25/g, "%2525")) : decodeURIComponent(d) : ""
  }

  function Qr(d, w, E) {
    return typeof d == "string" ? (d = encodeURI(d).replace(w, $n), E && (d = d.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), d) : null
  }

  function $n(d) {
    return d = d.charCodeAt(0), "%" + (d >> 4 & 15).toString(16) + (d & 15).toString(16)
  }
  var fn = /[#\/\?@]/g,
    zn = /[#\?:]/g,
    ms = /[#\?]/g,
    gs = /[#\?@]/g,
    h3 = /#/g;

  function Rr(d, w) {
    this.h = this.g = null, this.i = d || null, this.j = !!w
  }

  function Qt(d) {
    d.g || (d.g = new Map, d.h = 0, d.i && $o(d.i, function(w, E) {
      d.add(decodeURIComponent(w.replace(/\+/g, " ")), E)
    }))
  }
  t = Rr.prototype, t.add = function(d, w) {
    Qt(this), this.i = null, d = Jn(this, d);
    var E = this.g.get(d);
    return E || this.g.set(d, E = []), E.push(w), this.h += 1, this
  };

  function dr(d, w) {
    Qt(d), w = Jn(d, w), d.g.has(w) && (d.i = null, d.h -= d.g.get(w).length, d.g.delete(w))
  }

  function hr(d, w) {
    return Qt(d), w = Jn(d, w), d.g.has(w)
  }
  t.forEach = function(d, w) {
    Qt(this), this.g.forEach(function(E, O) {
      E.forEach(function(Z) {
        d.call(w, Z, O, this)
      }, this)
    }, this)
  }, t.na = function() {
    Qt(this);
    const d = Array.from(this.g.values()),
      w = Array.from(this.g.keys()),
      E = [];
    for (let O = 0; O < w.length; O++) {
      const Z = d[O];
      for (let o1 = 0; o1 < Z.length; o1++) E.push(w[O])
    }
    return E
  }, t.V = function(d) {
    Qt(this);
    let w = [];
    if (typeof d == "string") hr(this, d) && (w = w.concat(this.g.get(Jn(this, d))));
    else {
      d = Array.from(this.g.values());
      for (let E = 0; E < d.length; E++) w = w.concat(d[E])
    }
    return w
  }, t.set = function(d, w) {
    return Qt(this), this.i = null, d = Jn(this, d), hr(this, d) && (this.h -= this.g.get(d).length), this.g.set(d, [w]), this.h += 1, this
  }, t.get = function(d, w) {
    return d ? (d = this.V(d), 0 < d.length ? String(d[0]) : w) : w
  };

  function h2(d, w, E) {
    dr(d, w), 0 < E.length && (d.i = null, d.g.set(Jn(d, w), k(E)), d.h += E.length)
  }
  t.toString = function() {
    if (this.i) return this.i;
    if (!this.g) return "";
    const d = [],
      w = Array.from(this.g.keys());
    for (var E = 0; E < w.length; E++) {
      var O = w[E];
      const o1 = encodeURIComponent(String(O)),
        I1 = this.V(O);
      for (O = 0; O < I1.length; O++) {
        var Z = o1;
        I1[O] !== "" && (Z += "=" + encodeURIComponent(String(I1[O]))), d.push(Z)
      }
    }
    return this.i = d.join("&")
  };

  function Jn(d, w) {
    return w = String(w), d.j && (w = w.toLowerCase()), w
  }

  function Un(d, w) {
    w && !d.j && (Qt(d), d.i = null, d.g.forEach(function(E, O) {
      var Z = O.toLowerCase();
      O != Z && (dr(this, O), h2(this, Z, E))
    }, d)), d.j = w
  }

  function ys(d, w) {
    const E = new Ne;
    if (c.Image) {
      const O = new Image;
      O.onload = C(S, E, "TestLoadImage: loaded", !0, w, O), O.onerror = C(S, E, "TestLoadImage: error", !1, w, O), O.onabort = C(S, E, "TestLoadImage: abort", !1, w, O), O.ontimeout = C(S, E, "TestLoadImage: timeout", !1, w, O), c.setTimeout(function() {
        O.ontimeout && O.ontimeout()
      }, 1e4), O.src = d
    } else w(!1)
  }

  function T(d, w) {
    const E = new Ne,
      O = new AbortController,
      Z = setTimeout(() => {
        O.abort(), S(E, "TestPingServer: timeout", !1, w)
      }, 1e4);
    fetch(d, {
      signal: O.signal
    }).then(o1 => {
      clearTimeout(Z), o1.ok ? S(E, "TestPingServer: ok", !0, w) : S(E, "TestPingServer: server error", !1, w)
    }).catch(() => {
      clearTimeout(Z), S(E, "TestPingServer: error", !1, w)
    })
  }

  function S(d, w, E, O, Z) {
    try {
      Z && (Z.onload = null, Z.onerror = null, Z.onabort = null, Z.ontimeout = null), O(E)
    } catch {}
  }

  function F() {
    this.g = new le
  }

  function B(d, w, E) {
    const O = E || "";
    try {
      Pr(d, function(Z, o1) {
        let I1 = Z;
        p(Z) && (I1 = L1(Z)), w.push(O + o1 + "=" + encodeURIComponent(I1))
      })
    } catch (Z) {
      throw w.push(O + "type=" + encodeURIComponent("_badmap")), Z
    }
  }

  function Q(d) {
    this.l = d.Ub || null, this.j = d.eb || !1
  }
  P(Q, Pe), Q.prototype.g = function() {
    return new r1(this.l, this.j)
  }, Q.prototype.i = function(d) {
    return function() {
      return d
    }
  }({});

  function r1(d, w) {
    J.call(this), this.D = d, this.o = w, this.m = void 0, this.status = this.readyState = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.u = new Headers, this.h = null, this.B = "GET", this.A = "", this.g = !1, this.v = this.j = this.l = null
  }
  P(r1, J), t = r1.prototype, t.open = function(d, w) {
    if (this.readyState != 0) throw this.abort(), Error("Error reopening a connection");
    this.B = d, this.A = w, this.readyState = 1, N1(this)
  }, t.send = function(d) {
    if (this.readyState != 1) throw this.abort(), Error("need to call open() first. ");
    this.g = !0;
    const w = {
      headers: this.u,
      method: this.B,
      credentials: this.m,
      cache: void 0
    };
    d && (w.body = d), (this.D || c).fetch(new Request(this.A, w)).then(this.Sa.bind(this), this.ga.bind(this))
  }, t.abort = function() {
    this.response = this.responseText = "", this.u = new Headers, this.status = 0, this.j && this.j.cancel("Request was aborted.").catch(() => {}), 1 <= this.readyState && this.g && this.readyState != 4 && (this.g = !1, l1(this)), this.readyState = 0
  }, t.Sa = function(d) {
    if (this.g && (this.l = d, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = d.headers, this.readyState = 2, N1(this)), this.g && (this.readyState = 3, N1(this), this.g)))
      if (this.responseType === "arraybuffer") d.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
      else if (typeof c.ReadableStream < "u" && "body" in d) {
      if (this.j = d.body.getReader(), this.o) {
        if (this.responseType) throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
        this.response = []
      } else this.response = this.responseText = "", this.v = new TextDecoder;
      x1(this)
    } else d.text().then(this.Ra.bind(this), this.ga.bind(this))
  };

  function x1(d) {
    d.j.read().then(d.Pa.bind(d)).catch(d.ga.bind(d))
  }
  t.Pa = function(d) {
    if (this.g) {
      if (this.o && d.value) this.response.push(d.value);
      else if (!this.o) {
        var w = d.value ? d.value : new Uint8Array(0);
        (w = this.v.decode(w, {
          stream: !d.done
        })) && (this.response = this.responseText += w)
      }
      d.done ? l1(this) : N1(this), this.readyState == 3 && x1(this)
    }
  }, t.Ra = function(d) {
    this.g && (this.response = this.responseText = d, l1(this))
  }, t.Qa = function(d) {
    this.g && (this.response = d, l1(this))
  }, t.ga = function() {
    this.g && l1(this)
  };

  function l1(d) {
    d.readyState = 4, d.l = null, d.j = null, d.v = null, N1(d)
  }
  t.setRequestHeader = function(d, w) {
    this.u.append(d, w)
  }, t.getResponseHeader = function(d) {
    return this.h && this.h.get(d.toLowerCase()) || ""
  }, t.getAllResponseHeaders = function() {
    if (!this.h) return "";
    const d = [],
      w = this.h.entries();
    for (var E = w.next(); !E.done;) E = E.value, d.push(E[0] + ": " + E[1]), E = w.next();
    return d.join(`\r
`)
  };

  function N1(d) {
    d.onreadystatechange && d.onreadystatechange.call(d)
  }
  Object.defineProperty(r1.prototype, "withCredentials", {
    get: function() {
      return this.m === "include"
    },
    set: function(d) {
      this.m = d ? "include" : "same-origin"
    }
  });

  function O1(d) {
    let w = "";
    return X(d, function(E, O) {
      w += O, w += ":", w += E, w += `\r
`
    }), w
  }

  function q1(d, w, E) {
    e: {
      for (O in E) {
        var O = !1;
        break e
      }
      O = !0
    }
    O || (E = O1(E), typeof d == "string" ? E != null && encodeURIComponent(String(E)) : Be(d, w, E))
  }

  function Y1(d) {
    J.call(this), this.headers = new Map, this.o = d || null, this.h = !1, this.v = this.g = null, this.D = "", this.m = 0, this.l = "", this.j = this.B = this.u = this.A = !1, this.I = null, this.H = "", this.J = !1
  }
  P(Y1, J);
  var $e = /^https?$/i,
    Yt = ["POST", "PUT"];
  t = Y1.prototype, t.Ha = function(d) {
    this.J = d
  }, t.ea = function(d, w, E, O) {
    if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + d);
    w = w ? w.toUpperCase() : "GET", this.D = d, this.l = "", this.m = 0, this.A = !1, this.h = !0, this.g = this.o ? this.o.g() : Tn.g(), this.v = this.o ? Te(this.o) : Te(Tn), this.g.onreadystatechange = v(this.Ea, this);
    try {
      this.B = !0, this.g.open(w, String(d), !0), this.B = !1
    } catch (o1) {
      Xe(this, o1);
      return
    }
    if (d = E || "", E = new Map(this.headers), O)
      if (Object.getPrototypeOf(O) === Object.prototype)
        for (var Z in O) E.set(Z, O[Z]);
      else if (typeof O.keys == "function" && typeof O.get == "function")
      for (const o1 of O.keys()) E.set(o1, O.get(o1));
    else throw Error("Unknown input type for opt_headers: " + String(O));
    O = Array.from(E.keys()).find(o1 => o1.toLowerCase() == "content-type"), Z = c.FormData && d instanceof c.FormData, !(0 <= Array.prototype.indexOf.call(Yt, w, void 0)) || O || Z || E.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    for (const [o1, I1] of E) this.g.setRequestHeader(o1, I1);
    this.H && (this.g.responseType = this.H), "withCredentials" in this.g && this.g.withCredentials !== this.J && (this.g.withCredentials = this.J);
    try {
      Bt(this), this.u = !0, this.g.send(d), this.u = !1
    } catch (o1) {
      Xe(this, o1)
    }
  };

  function Xe(d, w) {
    d.h = !1, d.g && (d.j = !0, d.g.abort(), d.j = !1), d.l = w, d.m = 5, rt(d), Xt(d)
  }

  function rt(d) {
    d.A || (d.A = !0, p1(d, "complete"), p1(d, "error"))
  }
  t.abort = function(d) {
    this.g && this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1, this.m = d || 7, p1(this, "complete"), p1(this, "abort"), Xt(this))
  }, t.N = function() {
    this.g && (this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1), Xt(this, !0)), Y1.aa.N.call(this)
  }, t.Ea = function() {
    this.s || (this.B || this.u || this.j ? pn(this) : this.bb())
  }, t.bb = function() {
    pn(this)
  };

  function pn(d) {
    if (d.h && typeof l < "u" && (!d.v[1] || $t(d) != 4 || d.Z() != 2)) {
      if (d.u && $t(d) == 4) se(d.Ea, 0, d);
      else if (p1(d, "readystatechange"), $t(d) == 4) {
        d.h = !1;
        try {
          const I1 = d.Z();
          e: switch (I1) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var w = !0;
              break e;
            default:
              w = !1
          }
          var E;
          if (!(E = w)) {
            var O;
            if (O = I1 === 0) {
              var Z = String(d.D).match(W2)[1] || null;
              !Z && c.self && c.self.location && (Z = c.self.location.protocol.slice(0, -1)), O = !$e.test(Z ? Z.toLowerCase() : "")
            }
            E = O
          }
          if (E) p1(d, "complete"), p1(d, "success");
          else {
            d.m = 6;
            try {
              var o1 = 2 < $t(d) ? d.g.statusText : ""
            } catch {
              o1 = ""
            }
            d.l = o1 + " [" + d.Z() + "]", rt(d)
          }
        } finally {
          Xt(d)
        }
      }
    }
  }

  function Xt(d, w) {
    if (d.g) {
      Bt(d);
      const E = d.g,
        O = d.v[0] ? () => {} : null;
      d.g = null, d.v = null, w || p1(d, "ready");
      try {
        E.onreadystatechange = O
      } catch {}
    }
  }

  function Bt(d) {
    d.I && (c.clearTimeout(d.I), d.I = null)
  }
  t.isActive = function() {
    return !!this.g
  };

  function $t(d) {
    return d.g ? d.g.readyState : 0
  }
  t.Z = function() {
    try {
      return 2 < $t(this) ? this.g.status : -1
    } catch {
      return -1
    }
  }, t.oa = function() {
    try {
      return this.g ? this.g.responseText : ""
    } catch {
      return ""
    }
  }, t.Oa = function(d) {
    if (this.g) {
      var w = this.g.responseText;
      return d && w.indexOf(d) == 0 && (w = w.substring(d.length)), D1(w)
    }
  };

  function H2(d) {
    try {
      if (!d.g) return null;
      if ("response" in d.g) return d.g.response;
      switch (d.H) {
        case "":
        case "text":
          return d.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in d.g) return d.g.mozResponseArrayBuffer
      }
      return null
    } catch {
      return null
    }
  }

  function q2(d) {
    const w = {};
    d = (d.g && 2 <= $t(d) && d.g.getAllResponseHeaders() || "").split(`\r
`);
    for (let O = 0; O < d.length; O++) {
      if (q(d[O])) continue;
      var E = N(d[O]);
      const Z = E[0];
      if (E = E[1], typeof E != "string") continue;
      E = E.trim();
      const o1 = w[Z] || [];
      w[Z] = o1, o1.push(E)
    }
    D(w, function(O) {
      return O.join(", ")
    })
  }
  t.Ba = function() {
    return this.m
  }, t.Ka = function() {
    return typeof this.l == "string" ? this.l : String(this.l)
  };

  function f2(d, w, E) {
    return E && E.internalChannelParams && E.internalChannelParams[d] || w
  }

  function zo(d) {
    this.Aa = 0, this.i = [], this.j = new Ne, this.ia = this.qa = this.I = this.W = this.g = this.ya = this.D = this.H = this.m = this.S = this.o = null, this.Ya = this.U = 0, this.Va = f2("failFast", !1, d), this.F = this.C = this.u = this.s = this.l = null, this.X = !0, this.za = this.T = -1, this.Y = this.v = this.B = 0, this.Ta = f2("baseRetryDelayMs", 5e3, d), this.cb = f2("retryDelaySeedMs", 1e4, d), this.Wa = f2("forwardChannelMaxRetries", 2, d), this.wa = f2("forwardChannelRequestTimeoutMs", 2e4, d), this.pa = d && d.xmlHttpFactory || void 0, this.Xa = d && d.Tb || void 0, this.Ca = d && d.useFetchStreams || !1, this.L = void 0, this.J = d && d.supportsCrossDomainXhr || !1, this.K = "", this.h = new z2(d && d.concurrentRequestLimit), this.Da = new F, this.P = d && d.fastHandshake || !1, this.O = d && d.encodeInitMessageHeaders || !1, this.P && this.O && (this.O = !1), this.Ua = d && d.Rb || !1, d && d.xa && this.j.xa(), d && d.forceLongPolling && (this.X = !1), this.ba = !this.P && this.X && d && d.detectBufferingProxy || !1, this.ja = void 0, d && d.longPollingTimeout && 0 < d.longPollingTimeout && (this.ja = d.longPollingTimeout), this.ca = void 0, this.R = 0, this.M = !1, this.ka = this.A = null
  }
  t = zo.prototype, t.la = 8, t.G = 1, t.connect = function(d, w, E, O) {
    R1(0), this.W = d, this.H = w || {}, E && O !== void 0 && (this.H.OSID = E, this.H.OAID = O), this.F = this.X, this.I = L0(this, null, this.W), p2(this)
  };

  function mn(d) {
    if (vs(d), d.G == 3) {
      var w = d.U++,
        E = Cn(d.I);
      if (Be(E, "SID", d.K), Be(E, "RID", w), Be(E, "TYPE", "terminate"), G2(d, E), w = new cr(d, d.j, w), w.L = 2, w.v = Kr(Cn(E)), E = !1, c.navigator && c.navigator.sendBeacon) try {
        E = c.navigator.sendBeacon(w.v.toString(), "")
      } catch {}!E && c.Image && (new Image().src = w.v, E = !0), E || (w.g = M0(w.j, null), w.g.ea(w.v)), w.F = Date.now(), Ze(w)
    }
    N0(d)
  }

  function Yr(d) {
    d.g && (Uo(d), d.g.cancel(), d.g = null)
  }

  function vs(d) {
    Yr(d), d.u && (c.clearTimeout(d.u), d.u = null), _s(d), d.h.cancel(), d.s && (typeof d.s == "number" && c.clearTimeout(d.s), d.s = null)
  }

  function p2(d) {
    if (!Bn(d.h) && !d.s) {
      d.s = !0;
      var w = d.Ga;
      k1 || f1(), c1 || (k1(), c1 = !0), y1.add(w, d), d.B = 0
    }
  }

  function Dc(d, w) {
    return fs(d.h) >= d.h.j - (d.s ? 1 : 0) ? !1 : d.s ? (d.i = w.D.concat(d.i), !0) : d.G == 1 || d.G == 2 || d.B >= (d.Va ? 0 : d.Wa) ? !1 : (d.s = ce(v(d.Ga, d, w), R0(d, d.B)), d.B++, !0)
  }
  t.Ga = function(d) {
    if (this.s)
      if (this.s = null, this.G == 1) {
        if (!d) {
          this.U = Math.floor(1e5 * Math.random()), d = this.U++;
          const Z = new cr(this, this.j, d);
          let o1 = this.o;
          if (this.S && (o1 ? (o1 = A(o1), x(o1, this.S)) : o1 = this.S), this.m !== null || this.O || (Z.H = o1, o1 = null), this.P) e: {
            for (var w = 0, E = 0; E < this.i.length; E++) {
              t: {
                var O = this.i[E];
                if ("__data__" in O.map && (O = O.map.__data__, typeof O == "string")) {
                  O = O.length;
                  break t
                }
                O = void 0
              }
              if (O === void 0) break;
              if (w += O, 4096 < w) {
                w = E;
                break e
              }
              if (w === 4096 || E === this.i.length - 1) {
                w = E + 1;
                break e
              }
            }
            w = 1e3
          }
          else w = 1e3;
          w = xi(this, Z, w), E = Cn(this.I), Be(E, "RID", d), Be(E, "CVER", 22), this.D && Be(E, "X-HTTP-Session-Id", this.D), G2(this, E), o1 && (this.O ? w = "headers=" + encodeURIComponent(String(O1(o1))) + "&" + w : this.m && q1(E, this.m, o1)), _i(this.h, Z), this.Ua && Be(E, "TYPE", "init"), this.P ? (Be(E, "$req", w), Be(E, "SID", "null"), Z.T = !0, wi(Z, E, null)) : wi(Z, E, w), this.G = 2
        }
      } else this.G == 3 && (d ? ws(this, d) : this.i.length == 0 || Bn(this.h) || ws(this))
  };

  function ws(d, w) {
    var E;
    w ? E = w.l : E = d.U++;
    const O = Cn(d.I);
    Be(O, "SID", d.K), Be(O, "RID", E), Be(O, "AID", d.T), G2(d, O), d.m && d.o && q1(O, d.m, d.o), E = new cr(d, d.j, E, d.B + 1), d.m === null && (E.H = d.o), w && (d.i = w.D.concat(d.i)), w = xi(d, E, 1e3), E.I = Math.round(.5 * d.wa) + Math.round(.5 * d.wa * Math.random()), _i(d.h, E), wi(E, O, w)
  }

  function G2(d, w) {
    d.H && X(d.H, function(E, O) {
      Be(w, O, E)
    }), d.l && Pr({}, function(E, O) {
      Be(w, O, E)
    })
  }

  function xi(d, w, E) {
    E = Math.min(d.i.length, E);
    var O = d.l ? v(d.l.Na, d.l, d) : null;
    e: {
      var Z = d.i;
      let o1 = -1;
      for (;;) {
        const I1 = ["count=" + E];
        o1 == -1 ? 0 < E ? (o1 = Z[0].g, I1.push("ofs=" + o1)) : o1 = 0 : I1.push("ofs=" + o1);
        let Je = !0;
        for (let Jt = 0; Jt < E; Jt++) {
          let Le = Z[Jt].g;
          const on = Z[Jt].map;
          if (Le -= o1, 0 > Le) o1 = Math.max(0, Z[Jt].g - 100), Je = !1;
          else try {
            B(on, I1, "req" + Le + "_")
          } catch {
            O && O(on)
          }
        }
        if (Je) {
          O = I1.join("&");
          break e
        }
      }
    }
    return d = d.i.splice(0, E), w.D = d, O
  }

  function f3(d) {
    if (!d.g && !d.u) {
      d.Y = 1;
      var w = d.Fa;
      k1 || f1(), c1 || (k1(), c1 = !0), y1.add(w, d), d.v = 0
    }
  }

  function bs(d) {
    return d.g || d.u || 3 <= d.v ? !1 : (d.Y++, d.u = ce(v(d.Fa, d), R0(d, d.v)), d.v++, !0)
  }
  t.Fa = function() {
    if (this.u = null, I0(this), this.ba && !(this.M || this.g == null || 0 >= this.R)) {
      var d = 2 * this.R;
      this.j.info("BP detection timer enabled: " + d), this.A = ce(v(this.ab, this), d)
    }
  }, t.ab = function() {
    this.A && (this.A = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.F = !1, this.M = !0, R1(10), Yr(this), I0(this))
  };

  function Uo(d) {
    d.A != null && (c.clearTimeout(d.A), d.A = null)
  }

  function I0(d) {
    d.g = new cr(d, d.j, "rpc", d.Y), d.m === null && (d.g.H = d.o), d.g.O = 0;
    var w = Cn(d.qa);
    Be(w, "RID", "rpc"), Be(w, "SID", d.K), Be(w, "AID", d.T), Be(w, "CI", d.F ? "0" : "1"), !d.F && d.ja && Be(w, "TO", d.ja), Be(w, "TYPE", "xmlhttp"), G2(d, w), d.m && d.o && q1(w, d.m, d.o), d.L && (d.g.I = d.L);
    var E = d.g;
    d = d.ia, E.L = 1, E.v = Kr(Cn(w)), E.m = null, E.P = !0, u3(E, d)
  }
  t.Za = function() {
    this.C != null && (this.C = null, Yr(this), bs(this), R1(19))
  };

  function _s(d) {
    d.C != null && (c.clearTimeout(d.C), d.C = null)
  }