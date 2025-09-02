function E$(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, o0(n))
}

function T$(t, e) {
  const n = Lc(t, e);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...a
  } = n || {};
  a = {
    ...a,
    ...r
  };
  for (const l in a) {
    const c = jB(a[l]);
    E$(t, l, c)
  }
}

function C$(t) {
  return !!(jn(t) && t.add)
}

function Kh(t, e) {
  const n = t.getValue("willChange");
  if (C$(n)) return n.add(e)
}

function q_(t) {
  return t.props[x_]
}
const G_ = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  k$ = 1e-7,
  P$ = 12;

function A$(t, e, n, r, i) {
  let a, l, c = 0;
  do l = e + (n - e) / 2, a = G_(l, r, i) - t, a > 0 ? n = l : e = l; while (Math.abs(a) > k$ && ++c < P$);
  return l
}

function k0(t, e, n, r) {
  if (t === e && n === r) return _r;
  const i = a => A$(a, 0, 1, t, n);
  return a => a === 0 || a === 1 ? a : G_(i(a), e, r)
}
const K_ = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
  Q_ = t => e => 1 - t(1 - e),
  Y_ = k0(.33, 1.53, .69, .99),
  d5 = Q_(Y_),
  X_ = K_(d5),
  J_ = t => (t *= 2) < 1 ? .5 * d5(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
  h5 = t => 1 - Math.sin(Math.acos(t)),
  Z_ = Q_(h5),
  ex = K_(h5),
  tx = t => /^0[^.\s]+$/u.test(t);

function I$(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || tx(t) : !0
}
const Va = t => Math.round(t * 1e5) / 1e5,
  f5 = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function R$(t) {
  return t == null
}
const N$ = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  p5 = (t, e) => n => !!(typeof n == "string" && N$.test(n) && n.startsWith(t) || e && !R$(n) && Object.prototype.hasOwnProperty.call(n, e)),
  nx = (t, e, n) => r => {
    if (typeof r != "string") return r;
    const [i, a, l, c] = r.match(f5);
    return {
      [t]: parseFloat(i),
      [e]: parseFloat(a),
      [n]: parseFloat(l),
      alpha: c !== void 0 ? parseFloat(c) : 1
    }
  },
  L$ = t => fi(0, 255, t),
  U4 = {
    ...Fo,
    transform: t => Math.round(L$(t))
  },
  $3 = {
    test: p5("rgb", "red"),
    parse: nx("red", "green", "blue"),
    transform: ({
      red: t,
      green: e,
      blue: n,
      alpha: r = 1
    }) => "rgba(" + U4.transform(t) + ", " + U4.transform(e) + ", " + U4.transform(n) + ", " + Va(s0.transform(r)) + ")"
  };

function M$(t) {
  let e = "",
    n = "",
    r = "",
    i = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), r = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), r = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, r += r, i += i), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  }
}
const Qh = {
    test: p5("#"),
    parse: M$,
    transform: $3.transform
  },
  no = {
    test: p5("hsl", "hue"),
    parse: nx("hue", "saturation", "lightness"),
    transform: ({
      hue: t,
      saturation: e,
      lightness: n,
      alpha: r = 1
    }) => "hsla(" + Math.round(t) + ", " + M2.transform(Va(e)) + ", " + M2.transform(Va(n)) + ", " + Va(s0.transform(r)) + ")"
  },
  Ln = {
    test: t => $3.test(t) || Qh.test(t) || no.test(t),
    parse: t => $3.test(t) ? $3.parse(t) : no.test(t) ? no.parse(t) : Qh.parse(t),
    transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? $3.transform(t) : no.transform(t)
  },
  D$ = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function O$(t) {
  var e, n;
  return isNaN(t) && typeof t == "string" && (((e = t.match(f5)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(D$)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const rx = "number",
  ix = "color",
  j$ = "var",
  V$ = "var(",
  N7 = "${}",
  F$ = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function a0(t) {
  const e = t.toString(),
    n = [],
    r = {
      color: [],
      number: [],
      var: []
    },
    i = [];
  let a = 0;
  const c = e.replace(F$, h => (Ln.test(h) ? (r.color.push(a), i.push(ix), n.push(Ln.parse(h))) : h.startsWith(V$) ? (r.var.push(a), i.push(j$), n.push(h)) : (r.number.push(a), i.push(rx), n.push(parseFloat(h))), ++a, N7)).split(N7);
  return {
    values: n,
    split: c,
    indexes: r,
    types: i
  }
}

function sx(t) {
  return a0(t).values
}

function ox(t) {
  const {
    split: e,
    types: n
  } = a0(t), r = e.length;
  return i => {
    let a = "";
    for (let l = 0; l < r; l++)
      if (a += e[l], i[l] !== void 0) {
        const c = n[l];
        c === rx ? a += Va(i[l]) : c === ix ? a += Ln.transform(i[l]) : a += i[l]
      } return a
  }
}
const B$ = t => typeof t == "number" ? 0 : t;

function $$(t) {
  const e = sx(t);
  return ox(t)(e.map(B$))
}
const s3 = {
    test: O$,
    parse: sx,
    createTransformer: ox,
    getAnimatableNone: $$
  },
  z$ = new Set(["brightness", "contrast", "saturate", "opacity"]);

function U$(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [r] = n.match(f5) || [];
  if (!r) return t;
  const i = n.replace(r, "");
  let a = z$.has(e) ? 1 : 0;
  return r !== n && (a *= 100), e + "(" + a + i + ")"
}
const W$ = /\b([a-z-]*)\(.*?\)/gu,
  Yh = {
    ...s3,
    getAnimatableNone: t => {
      const e = t.match(W$);
      return e ? e.map(U$).join(" ") : t
    }
  },
  H$ = {
    ...Jf,
    color: Ln,
    backgroundColor: Ln,
    outlineColor: Ln,
    fill: Ln,
    stroke: Ln,
    borderColor: Ln,
    borderTopColor: Ln,
    borderRightColor: Ln,
    borderBottomColor: Ln,
    borderLeftColor: Ln,
    filter: Yh,
    WebkitFilter: Yh
  },
  m5 = t => H$[t];

function ax(t, e) {
  let n = m5(t);
  return n !== Yh && (n = s3), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const q$ = new Set(["auto", "none", "0"]);

function G$(t, e, n) {
  let r = 0,
    i;
  for (; r < t.length && !i;) {
    const a = t[r];
    typeof a == "string" && !q$.has(a) && a0(a).values.length && (i = t[r]), r++
  }
  if (i && n)
    for (const a of e) t[a] = ax(n, i)
}
const L7 = t => t === Fo || t === ae,
  M7 = (t, e) => parseFloat(t.split(", ")[e]),
  D7 = (t, e) => (n, {
    transform: r
  }) => {
    if (r === "none" || !r) return 0;
    const i = r.match(/^matrix3d\((.+)\)$/u);
    if (i) return M7(i[1], e);
    {
      const a = r.match(/^matrix\((.+)\)$/u);
      return a ? M7(a[1], t) : 0
    }
  },
  K$ = new Set(["x", "y", "z"]),
  Q$ = Vo.filter(t => !K$.has(t));

function Y$(t) {
  const e = [];
  return Q$.forEach(n => {
    const r = t.getValue(n);
    r !== void 0 && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
  }), e
}
const To = {
  width: ({
    x: t
  }, {
    paddingLeft: e = "0",
    paddingRight: n = "0"
  }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({
    y: t
  }, {
    paddingTop: e = "0",
    paddingBottom: n = "0"
  }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, {
    top: e
  }) => parseFloat(e),
  left: (t, {
    left: e
  }) => parseFloat(e),
  bottom: ({
    y: t
  }, {
    top: e
  }) => parseFloat(e) + (t.max - t.min),
  right: ({
    x: t
  }, {
    left: e
  }) => parseFloat(e) + (t.max - t.min),
  x: D7(4, 13),
  y: D7(5, 14)
};
To.translateX = To.x;
To.translateY = To.y;
const K3 = new Set;
let Xh = !1,
  Jh = !1;

function lx() {
  if (Jh) {
    const t = Array.from(K3).filter(r => r.needsMeasurement),
      e = new Set(t.map(r => r.element)),
      n = new Map;
    e.forEach(r => {
      const i = Y$(r);
      i.length && (n.set(r, i), r.render())
    }), t.forEach(r => r.measureInitialState()), e.forEach(r => {
      r.render();
      const i = n.get(r);
      i && i.forEach(([a, l]) => {
        var c;
        (c = r.getValue(a)) === null || c === void 0 || c.set(l)
      })
    }), t.forEach(r => r.measureEndState()), t.forEach(r => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
    })
  }
  Jh = !1, Xh = !1, K3.forEach(t => t.complete()), K3.clear()
}

function ux() {
  K3.forEach(t => {
    t.readKeyframes(), t.needsMeasurement && (Jh = !0)
  })
}

function X$() {
  ux(), lx()
}
class g5 {
  constructor(e, n, r, i, a, l = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = r, this.motionValue = i, this.element = a, this.isAsync = l
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (K3.add(this), Xh || (Xh = !0, gt.read(ux), gt.resolveKeyframes(lx))) : (this.readKeyframes(), this.complete())
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: e,
      name: n,
      element: r,
      motionValue: i
    } = this;
    for (let a = 0; a < e.length; a++)
      if (e[a] === null)
        if (a === 0) {
          const l = i == null ? void 0 : i.get(),
            c = e[e.length - 1];
          if (l !== void 0) e[0] = l;
          else if (r && n) {
            const h = r.readValue(n, c);
            h != null && (e[0] = h)
          }
          e[0] === void 0 && (e[0] = c), i && l === void 0 && i.set(e[0])
        } else e[a] = e[a - 1]
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), K3.delete(this)
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, K3.delete(this))
  }
  resume() {
    this.isComplete || this.scheduleResolve()
  }
}
const cx = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
  J$ = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function Z$(t) {
  const e = J$.exec(t);
  if (!e) return [, ];
  const [, n, r, i] = e;
  return [`--${n??r}`, i]
}

function dx(t, e, n = 1) {
  const [r, i] = Z$(t);
  if (!r) return;
  const a = window.getComputedStyle(e).getPropertyValue(r);
  if (a) {
    const l = a.trim();
    return cx(l) ? parseFloat(l) : l
  }
  return Xf(i) ? dx(i, e, n + 1) : i
}
const hx = t => e => e.test(t),
  ez = {
    test: t => t === "auto",
    parse: t => t
  },
  fx = [Fo, ae, M2, ji, UB, zB, ez],
  O7 = t => fx.find(hx(t));
class px extends g5 {
  constructor(e, n, r, i, a) {
    super(e, n, r, i, a, !0)
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: e,
      element: n,
      name: r
    } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let h = 0; h < e.length; h++) {
      let p = e[h];
      if (typeof p == "string" && (p = p.trim(), Xf(p))) {
        const m = dx(p, n.current);
        m !== void 0 && (e[h] = m), h === e.length - 1 && (this.finalKeyframe = p)
      }
    }
    if (this.resolveNoneKeyframes(), !W_.has(r) || e.length !== 2) return;
    const [i, a] = e, l = O7(i), c = O7(a);
    if (l !== c)
      if (L7(l) && L7(c))
        for (let h = 0; h < e.length; h++) {
          const p = e[h];
          typeof p == "string" && (e[h] = parseFloat(p))
        } else this.needsMeasurement = !0
  }
  resolveNoneKeyframes() {
    const {
      unresolvedKeyframes: e,
      name: n
    } = this, r = [];
    for (let i = 0; i < e.length; i++) I$(e[i]) && r.push(i);
    r.length && G$(e, r, n)
  }
  measureInitialState() {
    const {
      element: e,
      unresolvedKeyframes: n,
      name: r
    } = this;
    if (!e || !e.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = To[r](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(r, i).jump(i, !1)
  }
  measureEndState() {
    var e;
    const {
      element: n,
      name: r,
      unresolvedKeyframes: i
    } = this;
    if (!n || !n.current) return;
    const a = n.getValue(r);
    a && a.jump(this.measuredOrigin, !1);
    const l = i.length - 1,
      c = i[l];
    i[l] = To[r](n.measureViewportBox(), window.getComputedStyle(n.current)), c !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = c), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([h, p]) => {
      n.getValue(h).set(p)
    }), this.resolveNoneKeyframes()
  }
}
const j7 = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (s3.test(t) || t === "0") && !t.startsWith("url("));

function tz(t) {
  const e = t[0];
  if (t.length === 1) return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e) return !0
}

function nz(t, e, n, r) {
  const i = t[0];
  if (i === null) return !1;
  if (e === "display" || e === "visibility") return !0;
  const a = t[t.length - 1],
    l = j7(i, e),
    c = j7(a, e);
  return !l || !c ? !1 : tz(t) || (n === "spring" || s5(n)) && r
}
const rz = t => t !== null;

function Mc(t, {
  repeat: e,
  repeatType: n = "loop"
}, r) {
  const i = t.filter(rz),
    a = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r
}
const iz = 40;
class mx {
  constructor({
    autoplay: e = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: a = 0,
    repeatType: l = "loop",
    ...c
  }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = D2.now(), this.options = {
      autoplay: e,
      delay: n,
      type: r,
      repeat: i,
      repeatDelay: a,
      repeatType: l,
      ...c
    }, this.updateFinishedPromise()
  }
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > iz ? this.resolvedAt : this.createdAt : this.createdAt
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && X$(), this._resolved
  }
  onKeyframesResolved(e, n) {
    this.resolvedAt = D2.now(), this.hasAttemptedResolve = !0;
    const {
      name: r,
      type: i,
      velocity: a,
      delay: l,
      onComplete: c,
      onUpdate: h,
      isGenerator: p
    } = this.options;
    if (!p && !nz(e, r, i, a))
      if (l) this.options.duration = 0;
      else {
        h && h(Mc(e, this.options, n)), c && c(), this.resolveFinishedPromise();
        return
      } const m = this.initPlayback(e, n);
    m !== !1 && (this._resolved = {
      keyframes: e,
      finalKeyframe: n,
      ...m
    }, this.onPostResolved())
  }
  onPostResolved() {}
  then(e, n) {
    return this.currentFinishedPromise.then(e, n)
  }
  flatten() {
    this.options.type = "keyframes", this.options.ease = "linear"
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise(e => {
      this.resolveFinishedPromise = e
    })
  }
}
const xt = (t, e, n) => t + (e - t) * n;

function W4(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}

function sz({
  hue: t,
  saturation: e,
  lightness: n,
  alpha: r
}) {
  t /= 360, e /= 100, n /= 100;
  let i = 0,
    a = 0,
    l = 0;
  if (!e) i = a = l = n;
  else {
    const c = n < .5 ? n * (1 + e) : n + e - n * e,
      h = 2 * n - c;
    i = W4(h, c, t + 1 / 3), a = W4(h, c, t), l = W4(h, c, t - 1 / 3)
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(l * 255),
    alpha: r
  }
}

function Hu(t, e) {
  return n => n > 0 ? e : t
}
const H4 = (t, e, n) => {
    const r = t * t,
      i = n * (e * e - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
  },
  oz = [Qh, $3, no],
  az = t => oz.find(e => e.test(t));

function V7(t) {
  const e = az(t);
  if (!e) return !1;
  let n = e.parse(t);
  return e === no && (n = sz(n)), n
}
const F7 = (t, e) => {
    const n = V7(t),
      r = V7(e);
    if (!n || !r) return Hu(t, e);
    const i = {
      ...n
    };
    return a => (i.red = H4(n.red, r.red, a), i.green = H4(n.green, r.green, a), i.blue = H4(n.blue, r.blue, a), i.alpha = xt(n.alpha, r.alpha, a), $3.transform(i))
  },
  lz = (t, e) => n => e(t(n)),
  P0 = (...t) => t.reduce(lz),
  Zh = new Set(["none", "hidden"]);

function uz(t, e) {
  return Zh.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
}

function cz(t, e) {
  return n => xt(t, e, n)
}

function y5(t) {
  return typeof t == "number" ? cz : typeof t == "string" ? Xf(t) ? Hu : Ln.test(t) ? F7 : fz : Array.isArray(t) ? gx : typeof t == "object" ? Ln.test(t) ? F7 : dz : Hu
}

function gx(t, e) {
  const n = [...t],
    r = n.length,
    i = t.map((a, l) => y5(a)(a, e[l]));
  return a => {
    for (let l = 0; l < r; l++) n[l] = i[l](a);
    return n
  }
}

function dz(t, e) {
  const n = {
      ...t,
      ...e
    },
    r = {};
  for (const i in n) t[i] !== void 0 && e[i] !== void 0 && (r[i] = y5(t[i])(t[i], e[i]));
  return i => {
    for (const a in r) n[a] = r[a](i);
    return n
  }
}

function hz(t, e) {
  var n;
  const r = [],
    i = {
      color: 0,
      var: 0,
      number: 0
    };
  for (let a = 0; a < e.values.length; a++) {
    const l = e.types[a],
      c = t.indexes[l][i[l]],
      h = (n = t.values[c]) !== null && n !== void 0 ? n : 0;
    r[a] = h, i[l]++
  }
  return r
}
const fz = (t, e) => {
  const n = s3.createTransformer(e),
    r = a0(t),
    i = a0(e);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Zh.has(t) && !i.values.length || Zh.has(e) && !r.values.length ? uz(t, e) : P0(gx(hz(r, i), i.values), n) : Hu(t, e)
};

function yx(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? xt(t, e, n) : y5(t)(t, e)
}
const pz = 5;

function vx(t, e, n) {
  const r = Math.max(e - pz, 0);
  return H_(n - t(r), e - r)
}
const kt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
      granular: .01,
      default: 2
    },
    restDelta: {
      granular: .005,
      default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
  },
  q4 = .001;

function mz({
  duration: t = kt.duration,
  bounce: e = kt.bounce,
  velocity: n = kt.velocity,
  mass: r = kt.mass
}) {
  let i, a, l = 1 - e;
  l = fi(kt.minDamping, kt.maxDamping, l), t = fi(kt.minDuration, kt.maxDuration, li(t)), l < 1 ? (i = p => {
    const m = p * l,
      y = m * t,
      v = m - n,
      C = e9(p, l),
      P = Math.exp(-y);
    return q4 - v / C * P
  }, a = p => {
    const y = p * l * t,
      v = y * n + n,
      C = Math.pow(l, 2) * Math.pow(p, 2) * t,
      P = Math.exp(-y),
      k = e9(Math.pow(p, 2), l);
    return (-i(p) + q4 > 0 ? -1 : 1) * ((v - C) * P) / k
  }) : (i = p => {
    const m = Math.exp(-p * t),
      y = (p - n) * t + 1;
    return -q4 + m * y
  }, a = p => {
    const m = Math.exp(-p * t),
      y = (n - p) * (t * t);
    return m * y
  });
  const c = 5 / t,
    h = yz(i, a, c);
  if (t = ai(t), isNaN(h)) return {
    stiffness: kt.stiffness,
    damping: kt.damping,
    duration: t
  };
  {
    const p = Math.pow(h, 2) * r;
    return {
      stiffness: p,
      damping: l * 2 * Math.sqrt(r * p),
      duration: t
    }
  }
}
const gz = 12;

function yz(t, e, n) {
  let r = n;
  for (let i = 1; i < gz; i++) r = r - t(r) / e(r);
  return r
}

function e9(t, e) {
  return t * Math.sqrt(1 - e * e)
}
const vz = ["duration", "bounce"],
  wz = ["stiffness", "damping", "mass"];

function B7(t, e) {
  return e.some(n => t[n] !== void 0)
}

function bz(t) {
  let e = {
    velocity: kt.velocity,
    stiffness: kt.stiffness,
    damping: kt.damping,
    mass: kt.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!B7(t, wz) && B7(t, vz))
    if (t.visualDuration) {
      const n = t.visualDuration,
        r = 2 * Math.PI / (n * 1.2),
        i = r * r,
        a = 2 * fi(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
      e = {
        ...e,
        mass: kt.mass,
        stiffness: i,
        damping: a
      }
    } else {
      const n = mz(t);
      e = {
        ...e,
        ...n,
        mass: kt.mass
      }, e.isResolvedFromDuration = !0
    } return e
}

function wx(t = kt.visualDuration, e = kt.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let {
    restSpeed: r,
    restDelta: i
  } = n;
  const a = n.keyframes[0],
    l = n.keyframes[n.keyframes.length - 1],
    c = {
      done: !1,
      value: a
    },
    {
      stiffness: h,
      damping: p,
      mass: m,
      duration: y,
      velocity: v,
      isResolvedFromDuration: C
    } = bz({
      ...n,
      velocity: -li(n.velocity || 0)
    }),
    P = v || 0,
    k = p / (2 * Math.sqrt(h * m)),
    R = l - a,
    W = li(Math.sqrt(h / m)),
    q = Math.abs(R) < 5;
  r || (r = q ? kt.restSpeed.granular : kt.restSpeed.default), i || (i = q ? kt.restDelta.granular : kt.restDelta.default);
  let U;
  if (k < 1) {
    const $ = e9(W, k);
    U = X => {
      const D = Math.exp(-k * W * X);
      return l - D * ((P + k * W * R) / $ * Math.sin($ * X) + R * Math.cos($ * X))
    }
  } else if (k === 1) U = $ => l - Math.exp(-W * $) * (R + (P + W * R) * $);
  else {
    const $ = W * Math.sqrt(k * k - 1);
    U = X => {
      const D = Math.exp(-k * W * X),
        A = Math.min($ * X, 300);
      return l - D * ((P + k * W * R) * Math.sinh(A) + $ * R * Math.cosh(A)) / $
    }
  }
  const H = {
    calculatedDuration: C && y || null,
    next: $ => {
      const X = U($);
      if (C) c.done = $ >= y;
      else {
        let D = 0;
        k < 1 && (D = $ === 0 ? ai(P) : vx(U, $, X));
        const A = Math.abs(D) <= r,
          j = Math.abs(l - X) <= i;
        c.done = A && j
      }
      return c.value = c.done ? l : X, c
    },
    toString: () => {
      const $ = Math.min(j_(H), qh),
        X = V_(D => H.next($ * D).value, $, 30);
      return $ + "ms " + X
    }
  };
  return H
}

function $7({
  keyframes: t,
  velocity: e = 0,
  power: n = .8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: l,
  min: c,
  max: h,
  restDelta: p = .5,
  restSpeed: m
}) {
  const y = t[0],
    v = {
      done: !1,
      value: y
    },
    C = A => c !== void 0 && A < c || h !== void 0 && A > h,
    P = A => c === void 0 ? h : h === void 0 || Math.abs(c - A) < Math.abs(h - A) ? c : h;
  let k = n * e;
  const R = y + k,
    W = l === void 0 ? R : l(R);
  W !== R && (k = W - y);
  const q = A => -k * Math.exp(-A / r),
    U = A => W + q(A),
    H = A => {
      const j = q(A),
        x = U(A);
      v.done = Math.abs(j) <= p, v.value = v.done ? W : x
    };
  let $, X;
  const D = A => {
    C(v.value) && ($ = A, X = wx({
      keyframes: [v.value, P(v.value)],
      velocity: vx(U, A, v.value),
      damping: i,
      stiffness: a,
      restDelta: p,
      restSpeed: m
    }))
  };
  return D(0), {
    calculatedDuration: null,
    next: A => {
      let j = !1;
      return !X && $ === void 0 && (j = !0, H(A), D(A)), $ !== void 0 && A >= $ ? X.next(A - $) : (!j && H(A), v)
    }
  }
}
const _z = k0(.42, 0, 1, 1),
  xz = k0(0, 0, .58, 1),
  bx = k0(.42, 0, .58, 1),
  Sz = t => Array.isArray(t) && typeof t[0] != "number",
  Ez = {
    linear: _r,
    easeIn: _z,
    easeInOut: bx,
    easeOut: xz,
    circIn: h5,
    circInOut: ex,
    circOut: Z_,
    backIn: d5,
    backInOut: X_,
    backOut: Y_,
    anticipate: J_
  },
  z7 = t => {
    if (o5(t)) {
      y_(t.length === 4);
      const [e, n, r, i] = t;
      return k0(e, n, r, i)
    } else if (typeof t == "string") return Ez[t];
    return t
  };

function Tz(t, e, n) {
  const r = [],
    i = n || yx,
    a = t.length - 1;
  for (let l = 0; l < a; l++) {
    let c = i(t[l], t[l + 1]);
    if (e) {
      const h = Array.isArray(e) ? e[l] || _r : e;
      c = P0(h, c)
    }
    r.push(c)
  }
  return r
}

function Cz(t, e, {
  clamp: n = !0,
  ease: r,
  mixer: i
} = {}) {
  const a = t.length;
  if (y_(a === e.length), a === 1) return () => e[0];
  if (a === 2 && e[0] === e[1]) return () => e[1];
  const l = t[0] === t[1];
  t[0] > t[a - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const c = Tz(e, r, i),
    h = c.length,
    p = m => {
      if (l && m < t[0]) return e[0];
      let y = 0;
      if (h > 1)
        for (; y < t.length - 2 && !(m < t[y + 1]); y++);
      const v = So(t[y], t[y + 1], m);
      return c[y](v)
    };
  return n ? m => p(fi(t[0], t[a - 1], m)) : p
}

function kz(t, e) {
  const n = t[t.length - 1];
  for (let r = 1; r <= e; r++) {
    const i = So(0, e, r);
    t.push(xt(n, 1, i))
  }
}

function Pz(t) {
  const e = [0];
  return kz(e, t.length - 1), e
}

function Az(t, e) {
  return t.map(n => n * e)
}

function Iz(t, e) {
  return t.map(() => e || bx).splice(0, t.length - 1)
}

function qu({
  duration: t = 300,
  keyframes: e,
  times: n,
  ease: r = "easeInOut"
}) {
  const i = Sz(r) ? r.map(z7) : z7(r),
    a = {
      done: !1,
      value: e[0]
    },
    l = Az(n && n.length === e.length ? n : Pz(e), t),
    c = Cz(l, e, {
      ease: Array.isArray(i) ? i : Iz(e, i)
    });
  return {
    calculatedDuration: t,
    next: h => (a.value = c(h), a.done = h >= t, a)
  }
}
const Rz = t => {
    const e = ({
      timestamp: n
    }) => t(n);
    return {
      start: () => gt.update(e, !0),
      stop: () => i3(e),
      now: () => wn.isProcessing ? wn.timestamp : D2.now()
    }
  },
  Nz = {
    decay: $7,
    inertia: $7,
    tween: qu,
    keyframes: qu,
    spring: wx
  },
  Lz = t => t / 100;
class v5 extends mx {
  constructor(e) {
    super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
      this.teardown();
      const {
        onStop: h
      } = this.options;
      h && h()
    };
    const {
      name: n,
      motionValue: r,
      element: i,
      keyframes: a
    } = this.options, l = (i == null ? void 0 : i.KeyframeResolver) || g5, c = (h, p) => this.onKeyframesResolved(h, p);
    this.resolver = new l(a, c, n, r, i), this.resolver.scheduleResolve()
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
  }
  initPlayback(e) {
    const {
      type: n = "keyframes",
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: a,
      velocity: l = 0
    } = this.options, c = s5(n) ? n : Nz[n] || qu;
    let h, p;
    c !== qu && typeof e[0] != "number" && (h = P0(Lz, yx(e[0], e[1])), e = [0, 100]);
    const m = c({
      ...this.options,
      keyframes: e
    });
    a === "mirror" && (p = c({
      ...this.options,
      keyframes: [...e].reverse(),
      velocity: -l
    })), m.calculatedDuration === null && (m.calculatedDuration = j_(m));
    const {
      calculatedDuration: y
    } = m, v = y + i, C = v * (r + 1) - i;
    return {
      generator: m,
      mirroredGenerator: p,
      mapPercentToKeyframes: h,
      calculatedDuration: y,
      resolvedDuration: v,
      totalDuration: C
    }
  }
  onPostResolved() {
    const {
      autoplay: e = !0
    } = this.options;
    this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
  }
  tick(e, n = !1) {
    const {
      resolved: r
    } = this;
    if (!r) {
      const {
        keyframes: A
      } = this.options;
      return {
        done: !0,
        value: A[A.length - 1]
      }
    }
    const {
      finalKeyframe: i,
      generator: a,
      mirroredGenerator: l,
      mapPercentToKeyframes: c,
      keyframes: h,
      calculatedDuration: p,
      totalDuration: m,
      resolvedDuration: y
    } = r;
    if (this.startTime === null) return a.next(0);
    const {
      delay: v,
      repeat: C,
      repeatType: P,
      repeatDelay: k,
      onUpdate: R
    } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - m / this.speed, this.startTime)), n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
    const W = this.currentTime - v * (this.speed >= 0 ? 1 : -1),
      q = this.speed >= 0 ? W < 0 : W > m;
    this.currentTime = Math.max(W, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = m);
    let U = this.currentTime,
      H = a;
    if (C) {
      const A = Math.min(this.currentTime, m) / y;
      let j = Math.floor(A),
        x = A % 1;
      !x && A >= 1 && (x = 1), x === 1 && j--, j = Math.min(j, C + 1), !!(j % 2) && (P === "reverse" ? (x = 1 - x, k && (x -= k / y)) : P === "mirror" && (H = l)), U = fi(0, 1, x) * y
    }
    const $ = q ? {
      done: !1,
      value: h[0]
    } : H.next(U);
    c && ($.value = c($.value));
    let {
      done: X
    } = $;
    !q && p !== null && (X = this.speed >= 0 ? this.currentTime >= m : this.currentTime <= 0);
    const D = this.holdTime === null && (this.state === "finished" || this.state === "running" && X);
    return D && i !== void 0 && ($.value = Mc(h, this.options, i)), R && R($.value), D && this.finish(), $
  }
  get duration() {
    const {
      resolved: e
    } = this;
    return e ? li(e.calculatedDuration) : 0
  }
  get time() {
    return li(this.currentTime)
  }
  set time(e) {
    e = ai(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
  }
  get speed() {
    return this.playbackSpeed
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = li(this.currentTime))
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return
    }
    if (this.isStopped) return;
    const {
      driver: e = Rz,
      onPlay: n,
      startTime: r
    } = this.options;
    this.driver || (this.driver = e(a => this.tick(a))), n && n();
    const i = this.driver.now();
    this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
  }
  pause() {
    var e;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return
    }
    this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
  }
  finish() {
    this.teardown(), this.state = "finished";
    const {
      onComplete: e
    } = this.options;
    e && e()
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0)
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0)
  }
}
const Mz = new Set(["opacity", "clipPath", "filter", "transform"]);

function Dz(t, e, n, {
  delay: r = 0,
  duration: i = 300,
  repeat: a = 0,
  repeatType: l = "loop",
  ease: c = "easeInOut",
  times: h
} = {}) {
  const p = {
    [e]: n
  };
  h && (p.offset = h);
  const m = B_(c, i);
  return Array.isArray(m) && (p.easing = m), t.animate(p, {
    delay: r,
    duration: i,
    easing: Array.isArray(m) ? "linear" : m,
    fill: "both",
    iterations: a + 1,
    direction: l === "reverse" ? "alternate" : "normal"
  })
}
const Oz = Wf(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Gu = 10,
  jz = 2e4;

function Vz(t) {
  return s5(t.type) || t.type === "spring" || !F_(t.ease)
}

function Fz(t, e) {
  const n = new v5({
    ...e,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = {
    done: !1,
    value: t[0]
  };
  const i = [];
  let a = 0;
  for (; !r.done && a < jz;) r = n.sample(a), i.push(r.value), a += Gu;
  return {
    times: void 0,
    keyframes: i,
    duration: a - Gu,
    ease: "linear"
  }
}
const _x = {
  anticipate: J_,
  backInOut: X_,
  circInOut: ex
};

function Bz(t) {
  return t in _x
}
class U7 extends mx {
  constructor(e) {
    super(e);
    const {
      name: n,
      motionValue: r,
      element: i,
      keyframes: a
    } = this.options;
    this.resolver = new px(a, (l, c) => this.onKeyframesResolved(l, c), n, r, i), this.resolver.scheduleResolve()
  }
  initPlayback(e, n) {
    let {
      duration: r = 300,
      times: i,
      ease: a,
      type: l,
      motionValue: c,
      name: h,
      startTime: p
    } = this.options;
    if (!c.owner || !c.owner.current) return !1;
    if (typeof a == "string" && Wu() && Bz(a) && (a = _x[a]), Vz(this.options)) {
      const {
        onComplete: y,
        onUpdate: v,
        motionValue: C,
        element: P,
        ...k
      } = this.options, R = Fz(e, k);
      e = R.keyframes, e.length === 1 && (e[1] = e[0]), r = R.duration, i = R.times, a = R.ease, l = "keyframes"
    }
    const m = Dz(c.owner.current, h, e, {
      ...this.options,
      duration: r,
      times: i,
      ease: a
    });
    return m.startTime = p ?? this.calcStartTime(), this.pendingTimeline ? (k7(m, this.pendingTimeline), this.pendingTimeline = void 0) : m.onfinish = () => {
      const {
        onComplete: y
      } = this.options;
      c.set(Mc(e, this.options, n)), y && y(), this.cancel(), this.resolveFinishedPromise()
    }, {
      animation: m,
      duration: r,
      times: i,
      type: l,
      ease: a,
      keyframes: e
    }
  }
  get duration() {
    const {
      resolved: e
    } = this;
    if (!e) return 0;
    const {
      duration: n
    } = e;
    return li(n)
  }
  get time() {
    const {
      resolved: e
    } = this;
    if (!e) return 0;
    const {
      animation: n
    } = e;
    return li(n.currentTime || 0)
  }
  set time(e) {
    const {
      resolved: n
    } = this;
    if (!n) return;
    const {
      animation: r
    } = n;
    r.currentTime = ai(e)
  }
  get speed() {
    const {
      resolved: e
    } = this;
    if (!e) return 1;
    const {
      animation: n
    } = e;
    return n.playbackRate
  }
  set speed(e) {
    const {
      resolved: n
    } = this;
    if (!n) return;
    const {
      animation: r
    } = n;
    r.playbackRate = e
  }
  get state() {
    const {
      resolved: e
    } = this;
    if (!e) return "idle";
    const {
      animation: n
    } = e;
    return n.playState
  }
  get startTime() {
    const {
      resolved: e
    } = this;
    if (!e) return null;
    const {
      animation: n
    } = e;
    return n.startTime
  }
  attachTimeline(e) {
    if (!this._resolved) this.pendingTimeline = e;
    else {
      const {
        resolved: n
      } = this;
      if (!n) return _r;
      const {
        animation: r
      } = n;
      k7(r, e)
    }
    return _r
  }
  play() {
    if (this.isStopped) return;
    const {
      resolved: e
    } = this;
    if (!e) return;
    const {
      animation: n
    } = e;
    n.playState === "finished" && this.updateFinishedPromise(), n.play()
  }
  pause() {
    const {
      resolved: e
    } = this;
    if (!e) return;
    const {
      animation: n
    } = e;
    n.pause()
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const {
      resolved: e
    } = this;
    if (!e) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: a,
      ease: l,
      times: c
    } = e;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
        motionValue: p,
        onUpdate: m,
        onComplete: y,
        element: v,
        ...C
      } = this.options, P = new v5({
        ...C,
        keyframes: r,
        duration: i,
        type: a,
        ease: l,
        times: c,
        isGenerator: !0
      }), k = ai(this.time);
      p.setWithVelocity(P.sample(k - Gu).value, P.sample(k).value, Gu)
    }
    const {
      onStop: h
    } = this.options;
    h && h(), this.cancel()
  }
  complete() {
    const {
      resolved: e
    } = this;
    e && e.animation.finish()
  }
  cancel() {
    const {
      resolved: e
    } = this;
    e && e.animation.cancel()
  }
  static supports(e) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: a,
      damping: l,
      type: c
    } = e;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const {
      onUpdate: h,
      transformTemplate: p
    } = n.owner.getProps();
    return Oz() && r && Mz.has(r) && !h && !p && !i && a !== "mirror" && l !== 0 && c !== "inertia"
  }
}
const $z = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  },
  zz = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }),
  Uz = {
    type: "keyframes",
    duration: .8
  },
  Wz = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
  },
  Hz = (t, {
    keyframes: e
  }) => e.length > 2 ? Uz : ds.has(t) ? t.startsWith("scale") ? zz(e[1]) : $z : Wz;

function qz({
  when: t,
  delay: e,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: a,
  repeatType: l,
  repeatDelay: c,
  from: h,
  elapsed: p,
  ...m
}) {
  return !!Object.keys(m).length
}
const w5 = (t, e, n, r = {}, i, a) => l => {
  const c = i5(r, t) || {},
    h = c.delay || r.delay || 0;
  let {
    elapsed: p = 0
  } = r;
  p = p - ai(h);
  let m = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...c,
    delay: -p,
    onUpdate: v => {
      e.set(v), c.onUpdate && c.onUpdate(v)
    },
    onComplete: () => {
      l(), c.onComplete && c.onComplete()
    },
    name: t,
    motionValue: e,
    element: a ? void 0 : i
  };
  qz(c) || (m = {
    ...m,
    ...Hz(t, m)
  }), m.duration && (m.duration = ai(m.duration)), m.repeatDelay && (m.repeatDelay = ai(m.repeatDelay)), m.from !== void 0 && (m.keyframes[0] = m.from);
  let y = !1;
  if ((m.type === !1 || m.duration === 0 && !m.repeatDelay) && (m.duration = 0, m.delay === 0 && (y = !0)), y && !a && e.get() !== void 0) {
    const v = Mc(m.keyframes, c);
    if (v !== void 0) return gt.update(() => {
      m.onUpdate(v), m.onComplete()
    }), new d$([])
  }
  return !a && U7.supports(m) ? new U7(m) : new v5(m)
};

function Gz({
  protectedKeys: t,
  needsAnimating: e
}, n) {
  const r = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, r
}

function xx(t, e, {
  delay: n = 0,
  transitionOverride: r,
  type: i
} = {}) {
  var a;
  let {
    transition: l = t.getDefaultTransition(),
    transitionEnd: c,
    ...h
  } = e;
  r && (l = r);
  const p = [],
    m = i && t.animationState && t.animationState.getState()[i];
  for (const y in h) {
    const v = t.getValue(y, (a = t.latestValues[y]) !== null && a !== void 0 ? a : null),
      C = h[y];
    if (C === void 0 || m && Gz(m, y)) continue;
    const P = {
      delay: n,
      ...i5(l || {}, y)
    };
    let k = !1;
    if (window.MotionHandoffAnimation) {
      const W = q_(t);
      if (W) {
        const q = window.MotionHandoffAnimation(W, y, gt);
        q !== null && (P.startTime = q, k = !0)
      }
    }
    Kh(t, y), v.start(w5(y, v, C, t.shouldReduceMotion && W_.has(y) ? {
      type: !1
    } : P, t, k));
    const R = v.animation;
    R && p.push(R)
  }
  return c && Promise.all(p).then(() => {
    gt.update(() => {
      c && T$(t, c)
    })
  }), p
}

function t9(t, e, n = {}) {
  var r;
  const i = Lc(t, e, n.type === "exit" ? (r = t.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let {
    transition: a = t.getDefaultTransition() || {}
  } = i || {};
  n.transitionOverride && (a = n.transitionOverride);
  const l = i ? () => Promise.all(xx(t, i, n)) : () => Promise.resolve(),
    c = t.variantChildren && t.variantChildren.size ? (p = 0) => {
      const {
        delayChildren: m = 0,
        staggerChildren: y,
        staggerDirection: v
      } = a;
      return Kz(t, e, m + p, y, v, n)
    } : () => Promise.resolve(),
    {
      when: h
    } = a;
  if (h) {
    const [p, m] = h === "beforeChildren" ? [l, c] : [c, l];
    return p().then(() => m())
  } else return Promise.all([l(), c(n.delay)])
}

function Kz(t, e, n = 0, r = 0, i = 1, a) {
  const l = [],
    c = (t.variantChildren.size - 1) * r,
    h = i === 1 ? (p = 0) => p * r : (p = 0) => c - p * r;
  return Array.from(t.variantChildren).sort(Qz).forEach((p, m) => {
    p.notify("AnimationStart", e), l.push(t9(p, e, {
      ...a,
      delay: n + h(m)
    }).then(() => p.notify("AnimationComplete", e)))
  }), Promise.all(l)
}

function Qz(t, e) {
  return t.sortNodePosition(e)
}

function Yz(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let r;
  if (Array.isArray(e)) {
    const i = e.map(a => t9(t, a, n));
    r = Promise.all(i)
  } else if (typeof e == "string") r = t9(t, e, n);
  else {
    const i = typeof e == "function" ? Lc(t, e, n.custom) : e;
    r = Promise.all(xx(t, i, n))
  }
  return r.then(() => {
    t.notify("AnimationComplete", e)
  })
}
const Xz = qf.length;

function Sx(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const n = t.parent ? Sx(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n
  }
  const e = {};
  for (let n = 0; n < Xz; n++) {
    const r = qf[n],
      i = t.props[r];
    (i0(i) || i === !1) && (e[r] = i)
  }
  return e
}
const Jz = [...Hf].reverse(),
  Zz = Hf.length;

function eU(t) {
  return e => Promise.all(e.map(({
    animation: n,
    options: r
  }) => Yz(t, n, r)))
}

function tU(t) {
  let e = eU(t),
    n = W7(),
    r = !0;
  const i = h => (p, m) => {
    var y;
    const v = Lc(t, m, h === "exit" ? (y = t.presenceContext) === null || y === void 0 ? void 0 : y.custom : void 0);
    if (v) {
      const {
        transition: C,
        transitionEnd: P,
        ...k
      } = v;
      p = {
        ...p,
        ...k,
        ...P
      }
    }
    return p
  };

  function a(h) {
    e = h(t)
  }

  function l(h) {
    const {
      props: p
    } = t, m = Sx(t.parent) || {}, y = [], v = new Set;
    let C = {},
      P = 1 / 0;
    for (let R = 0; R < Zz; R++) {
      const W = Jz[R],
        q = n[W],
        U = p[W] !== void 0 ? p[W] : m[W],
        H = i0(U),
        $ = W === h ? q.isActive : null;
      $ === !1 && (P = R);
      let X = U === m[W] && U !== p[W] && H;
      if (X && r && t.manuallyAnimateOnMount && (X = !1), q.protectedKeys = {
          ...C
        }, !q.isActive && $ === null || !U && !q.prevProp || Rc(U) || typeof U == "boolean") continue;
      const D = nU(q.prevProp, U);
      let A = D || W === h && q.isActive && !X && H || R > P && H,
        j = !1;
      const x = Array.isArray(U) ? U : [U];
      let N = x.reduce(i(W), {});
      $ === !1 && (N = {});
      const {
        prevResolvedValues: V = {}
      } = q, L = {
        ...V,
        ...N
      }, h1 = k1 => {
        A = !0, v.has(k1) && (j = !0, v.delete(k1)), q.needsAnimating[k1] = !0;
        const c1 = t.getValue(k1);
        c1 && (c1.liveStyle = !1)
      };
      for (const k1 in L) {
        const c1 = N[k1],
          y1 = V[k1];
        if (C.hasOwnProperty(k1)) continue;
        let f1 = !1;
        Hh(c1) && Hh(y1) ? f1 = !O_(c1, y1) : f1 = c1 !== y1, f1 ? c1 != null ? h1(k1) : v.add(k1) : c1 !== void 0 && v.has(k1) ? h1(k1) : q.protectedKeys[k1] = !0
      }
      q.prevProp = U, q.prevResolvedValues = N, q.isActive && (C = {
        ...C,
        ...N
      }), r && t.blockInitialAnimation && (A = !1), A && (!(X && D) || j) && y.push(...x.map(k1 => ({
        animation: k1,
        options: {
          type: W
        }
      })))
    }
    if (v.size) {
      const R = {};
      v.forEach(W => {
        const q = t.getBaseTarget(W),
          U = t.getValue(W);
        U && (U.liveStyle = !0), R[W] = q ?? null
      }), y.push({
        animation: R
      })
    }
    let k = !!y.length;
    return r && (p.initial === !1 || p.initial === p.animate) && !t.manuallyAnimateOnMount && (k = !1), r = !1, k ? e(y) : Promise.resolve()
  }

  function c(h, p) {
    var m;
    if (n[h].isActive === p) return Promise.resolve();
    (m = t.variantChildren) === null || m === void 0 || m.forEach(v => {
      var C;
      return (C = v.animationState) === null || C === void 0 ? void 0 : C.setActive(h, p)
    }), n[h].isActive = p;
    const y = l(h);
    for (const v in n) n[v].protectedKeys = {};
    return y
  }
  return {
    animateChanges: l,
    setActive: c,
    setAnimateFunction: a,
    getState: () => n,
    reset: () => {
      n = W7(), r = !0
    }
  }
}

function nU(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !O_(e, t) : !1
}

function P3(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  }
}

function W7() {
  return {
    animate: P3(!0),
    whileInView: P3(),
    whileHover: P3(),
    whileTap: P3(),
    whileDrag: P3(),
    whileFocus: P3(),
    exit: P3()
  }
}
class l3 {
  constructor(e) {
    this.isMounted = !1, this.node = e
  }
  update() {}
}
class rU extends l3 {
  constructor(e) {
    super(e), e.animationState || (e.animationState = tU(e))
  }
  updateAnimationControlsSubscription() {
    const {
      animate: e
    } = this.node.getProps();
    Rc(e) && (this.unmountControls = e.subscribe(this.node))
  }
  mount() {
    this.updateAnimationControlsSubscription()
  }
  update() {
    const {
      animate: e
    } = this.node.getProps(), {
      animate: n
    } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription()
  }
  unmount() {
    var e;
    this.node.animationState.reset(), (e = this.unmountControls) === null || e === void 0 || e.call(this)
  }
}
let iU = 0;
class sU extends l3 {
  constructor() {
    super(...arguments), this.id = iU++
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
      isPresent: e,
      onExitComplete: n
    } = this.node.presenceContext, {
      isPresent: r
    } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === r) return;
    const i = this.node.animationState.setActive("exit", !e);
    n && !e && i.then(() => n(this.id))
  }
  mount() {
    const {
      register: e
    } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id))
  }
  unmount() {}
}
const oU = {
  animation: {
    Feature: rU
  },
  exit: {
    Feature: sU
  }
};

function l0(t, e, n, r = {
  passive: !0
}) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n)
}

function A0(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  }
}
const aU = t => e => a5(e) && t(e, A0(e));

function Fa(t, e, n, r) {
  return l0(t, e, aU(n), r)
}
const H7 = (t, e) => Math.abs(t - e);

function lU(t, e) {
  const n = H7(t.x, e.x),
    r = H7(t.y, e.y);
  return Math.sqrt(n ** 2 + r ** 2)
}
class Ex {
  constructor(e, n, {
    transformPagePoint: r,
    contextWindow: i,
    dragSnapToOrigin: a = !1
  } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const y = K4(this.lastMoveEventInfo, this.history),
          v = this.startEvent !== null,
          C = lU(y.offset, {
            x: 0,
            y: 0
          }) >= 3;
        if (!v && !C) return;
        const {
          point: P
        } = y, {
          timestamp: k
        } = wn;
        this.history.push({
          ...P,
          timestamp: k
        });
        const {
          onStart: R,
          onMove: W
        } = this.handlers;
        v || (R && R(this.lastMoveEvent, y), this.startEvent = this.lastMoveEvent), W && W(this.lastMoveEvent, y)
      }, this.handlePointerMove = (y, v) => {
        this.lastMoveEvent = y, this.lastMoveEventInfo = G4(v, this.transformPagePoint), gt.update(this.updatePoint, !0)
      }, this.handlePointerUp = (y, v) => {
        this.end();
        const {
          onEnd: C,
          onSessionEnd: P,
          resumeAnimation: k
        } = this.handlers;
        if (this.dragSnapToOrigin && k && k(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const R = K4(y.type === "pointercancel" ? this.lastMoveEventInfo : G4(v, this.transformPagePoint), this.history);
        this.startEvent && C && C(y, R), P && P(y, R)
      }, !a5(e)) return;
    this.dragSnapToOrigin = a, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
    const l = A0(e),
      c = G4(l, this.transformPagePoint),
      {
        point: h
      } = c,
      {