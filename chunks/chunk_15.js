  let a;
  return Array.isArray(e) ? a = [r, ...e] : typeof e == "function" ? a = (...l) => {
    const c = e(...l);
    return T2(c) ? {
      ...r,
      ...c
    } : r
  } : a = {
    ...r,
    ...e
  }, {
    ...i,
    sx: a
  }
}
const Dg = t => t,
  vL = () => {
    let t = Dg;
    return {
      configure(e) {
        t = e
      },
      generate(e) {
        return t(e)
      },
      reset() {
        t = Dg
      }
    }
  },
  Rw = vL();

function Nw(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var i = t.length;
      for (e = 0; e < i; e++) t[e] && (n = Nw(t[e])) && (r && (r += " "), r += n)
    } else
      for (n in t) t[n] && (r && (r += " "), r += n);
  return r
}

function pt() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++)(t = arguments[n]) && (e = Nw(t)) && (r && (r += " "), r += e);
  return r
}

function wL(t = {}) {
  const {
    themeId: e,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = t, a = Ew("div", {
    shouldForwardProp: c => c !== "theme" && c !== "sx" && c !== "as"
  })(J3);
  return M.forwardRef(function(h, p) {
    const m = Aw(n),
      {
        className: y,
        component: v = "div",
        ...C
      } = Iw(h);
    return _.jsx(a, {
      as: v,
      ref: p,
      className: pt(y, i ? i(r) : r),
      theme: e && m[e] || m,
      ...C
    })
  })
}
const bL = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};

function pi(t, e, n = "Mui") {
  const r = bL[e];
  return r ? `${n}-${r}` : `${Rw.generate(t)}-${e}`
}

function V2(t, e, n = "Mui") {
  const r = {};
  return e.forEach(i => {
    r[i] = pi(t, i, n)
  }), r
}

function Lw(t) {
  const {
    variants: e,
    ...n
  } = t, r = {
    variants: e,
    style: W3(n),
    isProcessed: !0
  };
  return r.style === n || e && e.forEach(i => {
    typeof i.style != "function" && (i.style = W3(i.style))
  }), r
}
const _L = df();

function A4(t) {
  return t !== "ownerState" && t !== "theme" && t !== "sx" && t !== "as"
}

function V3(t, e) {
  return e && t && typeof t == "object" && t.styles && !t.styles.startsWith("@layer") && (t.styles = `@layer ${e}{${String(t.styles)}}`), t
}

function xL(t) {
  return t ? (e, n) => n[t] : null
}

function SL(t, e, n) {
  t.theme = CL(t.theme) ? n : t.theme[e] || t.theme
}

function iu(t, e, n) {
  const r = typeof e == "function" ? e(t) : e;
  if (Array.isArray(r)) return r.flatMap(i => iu(t, i, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let i;
    if (r.isProcessed) i = n ? V3(r.style, n) : r.style;
    else {
      const {
        variants: a,
        ...l
      } = r;
      i = n ? V3(W3(l), n) : l
    }
    return Mw(t, r.variants, [i], n)
  }
  return r != null && r.isProcessed ? n ? V3(W3(r.style), n) : r.style : n ? V3(W3(r), n) : r
}

function Mw(t, e, n = [], r = void 0) {
  var a;
  let i;
  e: for (let l = 0; l < e.length; l += 1) {
    const c = e[l];
    if (typeof c.props == "function") {
      if (i ?? (i = {
          ...t,
          ...t.ownerState,
          ownerState: t.ownerState
        }), !c.props(i)) continue
    } else
      for (const h in c.props)
        if (t[h] !== c.props[h] && ((a = t.ownerState) == null ? void 0 : a[h]) !== c.props[h]) continue e;
    typeof c.style == "function" ? (i ?? (i = {
      ...t,
      ...t.ownerState,
      ownerState: t.ownerState
    }), n.push(r ? V3(W3(c.style(i)), r) : c.style(i))) : n.push(r ? V3(W3(c.style), r) : c.style)
  }
  return n
}

function EL(t = {}) {
  const {
    themeId: e,
    defaultTheme: n = _L,
    rootShouldForwardProp: r = A4,
    slotShouldForwardProp: i = A4
  } = t;

  function a(c) {
    SL(c, e, n)
  }
  return (c, h = {}) => {
    yN(c, X => X.filter(D => D !== J3));
    const {
      name: p,
      slot: m,
      skipVariantsResolver: y,
      skipSx: v,
      overridesResolver: C = xL(PL(m)),
      ...P
    } = h, k = p && p.startsWith("Mui") || m ? "components" : "custom", R = y !== void 0 ? y : m && m !== "Root" && m !== "root" || !1, W = v || !1;
    let q = A4;
    m === "Root" || m === "root" ? q = r : m ? q = i : kL(c) && (q = void 0);
    const U = Ew(c, {
        shouldForwardProp: q,
        label: TL(),
        ...P
      }),
      H = X => {
        if (X.__emotion_real === X) return X;
        if (typeof X == "function") return function(A) {
          return iu(A, X, A.theme.modularCssLayers ? k : void 0)
        };
        if (T2(X)) {
          const D = Lw(X);
          return function(j) {
            return D.variants ? iu(j, D, j.theme.modularCssLayers ? k : void 0) : j.theme.modularCssLayers ? V3(D.style, k) : D.style
          }
        }
        return X
      },
      $ = (...X) => {
        const D = [],
          A = X.map(H),
          j = [];
        if (D.push(a), p && C && j.push(function(L) {
            var k1, c1;
            const A1 = (c1 = (k1 = L.theme.components) == null ? void 0 : k1[p]) == null ? void 0 : c1.styleOverrides;
            if (!A1) return null;
            const V1 = {};
            for (const y1 in A1) V1[y1] = iu(L, A1[y1], L.theme.modularCssLayers ? "theme" : void 0);
            return C(L, V1)
          }), p && !R && j.push(function(L) {
            var V1, k1;
            const h1 = L.theme,
              A1 = (k1 = (V1 = h1 == null ? void 0 : h1.components) == null ? void 0 : V1[p]) == null ? void 0 : k1.variants;
            return A1 ? Mw(L, A1, [], L.theme.modularCssLayers ? "theme" : void 0) : null
          }), W || j.push(J3), Array.isArray(A[0])) {
          const V = A.shift(),
            L = new Array(D.length).fill(""),
            h1 = new Array(j.length).fill("");
          let A1;
          A1 = [...L, ...V, ...h1], A1.raw = [...L, ...V.raw, ...h1], D.unshift(A1)
        }
        const x = [...D, ...A, ...j],
          N = U(...x);
        return c.muiName && (N.muiName = c.muiName), N
      };
    return U.withConfig && ($.withConfig = U.withConfig), $
  }
}

function TL(t, e) {
  return void 0
}

function CL(t) {
  for (const e in t) return !1;
  return !0
}

function kL(t) {
  return typeof t == "string" && t.charCodeAt(0) > 96
}

function PL(t) {
  return t && t.charAt(0).toLowerCase() + t.slice(1)
}

function Lh(t, e) {
  const n = {
    ...e
  };
  for (const r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      const i = r;
      if (i === "components" || i === "slots") n[i] = {
        ...t[i],
        ...n[i]
      };
      else if (i === "componentsProps" || i === "slotProps") {
        const a = t[i],
          l = e[i];
        if (!l) n[i] = a || {};
        else if (!a) n[i] = l;
        else {
          n[i] = {
            ...l
          };
          for (const c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
              const h = c;
              n[i][h] = Lh(a[h], l[h])
            }
        }
      } else n[i] === void 0 && (n[i] = t[i])
    } return n
}
const Dw = typeof window < "u" ? M.useLayoutEffect : M.useEffect;

function AL(t, e = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(e, Math.min(t, n))
}

function hf(t, e = 0, n = 1) {
  return AL(t, e, n)
}

function IL(t) {
  t = t.slice(1);
  const e = new RegExp(`.{1,${t.length>=6?2:1}}`, "g");
  let n = t.match(e);
  return n && n[0].length === 1 && (n = n.map(r => r + r)), n ? `rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})` : ""
}

function r3(t) {
  if (t.type) return t;
  if (t.charAt(0) === "#") return r3(IL(t));
  const e = t.indexOf("("),
    n = t.substring(0, e);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n)) throw new Error(X3(9, t));
  let r = t.substring(e + 1, t.length - 1),
    i;
  if (n === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i)) throw new Error(X3(10, i))
  } else r = r.split(",");
  return r = r.map(a => parseFloat(a)), {
    type: n,
    values: r,
    colorSpace: i
  }
}
const RL = t => {
    const e = r3(t);
    return e.values.slice(0, 3).map((n, r) => e.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ")
  },
  Ea = (t, e) => {
    try {
      return RL(t)
    } catch {
      return t
    }
  };

function Sc(t) {
  const {
    type: e,
    colorSpace: n
  } = t;
  let {
    values: r
  } = t;
  return e.includes("rgb") ? r = r.map((i, a) => a < 3 ? parseInt(i, 10) : i) : e.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), e.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${e}(${r})`
}

function Ow(t) {
  t = r3(t);
  const {
    values: e
  } = t, n = e[0], r = e[1] / 100, i = e[2] / 100, a = r * Math.min(i, 1 - i), l = (p, m = (p + n / 30) % 12) => i - a * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let c = "rgb";
  const h = [Math.round(l(0) * 255), Math.round(l(8) * 255), Math.round(l(4) * 255)];
  return t.type === "hsla" && (c += "a", h.push(e[3])), Sc({
    type: c,
    values: h
  })
}

function Mh(t) {
  t = r3(t);
  let e = t.type === "hsl" || t.type === "hsla" ? r3(Ow(t)).values : t.values;
  return e = e.map(n => (t.type !== "color" && (n /= 255), n <= .03928 ? n / 12.92 : ((n + .055) / 1.055) ** 2.4)), Number((.2126 * e[0] + .7152 * e[1] + .0722 * e[2]).toFixed(3))
}

function NL(t, e) {
  const n = Mh(t),
    r = Mh(e);
  return (Math.max(n, r) + .05) / (Math.min(n, r) + .05)
}

function Dh(t, e) {
  return t = r3(t), e = hf(e), (t.type === "rgb" || t.type === "hsl") && (t.type += "a"), t.type === "color" ? t.values[3] = `/${e}` : t.values[3] = e, Sc(t)
}

function Ol(t, e, n) {
  try {
    return Dh(t, e)
  } catch {
    return t
  }
}

function ff(t, e) {
  if (t = r3(t), e = hf(e), t.type.includes("hsl")) t.values[2] *= 1 - e;
  else if (t.type.includes("rgb") || t.type.includes("color"))
    for (let n = 0; n < 3; n += 1) t.values[n] *= 1 - e;
  return Sc(t)
}

function it(t, e, n) {
  try {
    return ff(t, e)
  } catch {
    return t
  }
}

function pf(t, e) {
  if (t = r3(t), e = hf(e), t.type.includes("hsl")) t.values[2] += (100 - t.values[2]) * e;
  else if (t.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1) t.values[n] += (255 - t.values[n]) * e;
  else if (t.type.includes("color"))
    for (let n = 0; n < 3; n += 1) t.values[n] += (1 - t.values[n]) * e;
  return Sc(t)
}

function st(t, e, n) {
  try {
    return pf(t, e)
  } catch {
    return t
  }
}

function LL(t, e = .15) {
  return Mh(t) > .5 ? ff(t, e) : pf(t, e)
}

function jl(t, e, n) {
  try {
    return LL(t, e)
  } catch {
    return t
  }
}

function jw(t, e = 166) {
  let n;

  function r(...i) {
    const a = () => {
      t.apply(this, i)
    };
    clearTimeout(n), n = setTimeout(a, e)
  }
  return r.clear = () => {
    clearTimeout(n)
  }, r
}

function Vw(t) {
  return t && t.ownerDocument || document
}

function Fw(t) {
  return Vw(t).defaultView || window
}

function H3(t) {
  const e = M.useRef(t);
  return Dw(() => {
    e.current = t
  }), M.useRef((...n) => (0, e.current)(...n)).current
}

function Iu(...t) {
  const e = M.useRef(void 0),
    n = M.useCallback(r => {
      const i = t.map(a => {
        if (a == null) return null;
        if (typeof a == "function") {
          const l = a,
            c = l(r);
          return typeof c == "function" ? c : () => {
            l(null)
          }
        }
        return a.current = r, () => {
          a.current = null
        }
      });
      return () => {
        i.forEach(a => a == null ? void 0 : a())
      }
    }, t);
  return M.useMemo(() => t.every(r => r == null) ? null : r => {
    e.current && (e.current(), e.current = void 0), r != null && (e.current = n(r))
  }, t)
}
const Og = {};

function Bw(t, e) {
  const n = M.useRef(Og);
  return n.current === Og && (n.current = t(e)), n
}
const ML = [];

function DL(t) {
  M.useEffect(t, ML)
}
class mf {
  constructor() {
    pa(this, "currentId", null);
    pa(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null)
    });
    pa(this, "disposeEffect", () => this.clear)
  }
  static create() {
    return new mf
  }
  start(e, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n()
    }, e)
  }
}

function OL() {
  const t = Bw(mf.create).current;
  return DL(t.disposeEffect), t
}

function jg(t) {
  try {
    return t.matches(":focus-visible")
  } catch {}
  return !1
}

function a3(t, e, n = void 0) {
  const r = {};
  for (const i in t) {
    const a = t[i];
    let l = "",
      c = !0;
    for (let h = 0; h < a.length; h += 1) {
      const p = a[h];
      p && (l += (c === !0 ? "" : " ") + e(p), c = !1, n && n[p] && (l += " " + n[p]))
    }
    r[i] = l
  }
  return r
}

function jL(t) {
  return typeof t == "string"
}

function $w(t, e, n) {
  return t === void 0 || jL(t) ? e : {
    ...e,
    ownerState: {
      ...e.ownerState,
      ...n
    }
  }
}

function VL(t, e = []) {
  if (t === void 0) return {};
  const n = {};
  return Object.keys(t).filter(r => r.match(/^on[A-Z]/) && typeof t[r] == "function" && !e.includes(r)).forEach(r => {
    n[r] = t[r]
  }), n
}

function Vg(t) {
  if (t === void 0) return {};
  const e = {};
  return Object.keys(t).filter(n => !(n.match(/^on[A-Z]/) && typeof t[n] == "function")).forEach(n => {
    e[n] = t[n]
  }), e
}

function zw(t) {
  const {
    getSlotProps: e,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: a
  } = t;
  if (!e) {
    const C = pt(n == null ? void 0 : n.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className),
      P = {
        ...n == null ? void 0 : n.style,
        ...i == null ? void 0 : i.style,
        ...r == null ? void 0 : r.style
      },
      k = {
        ...n,
        ...i,
        ...r
      };
    return C.length > 0 && (k.className = C), Object.keys(P).length > 0 && (k.style = P), {
      props: k,
      internalRef: void 0
    }
  }
  const l = VL({
      ...i,
      ...r
    }),
    c = Vg(r),
    h = Vg(i),
    p = e(l),
    m = pt(p == null ? void 0 : p.className, n == null ? void 0 : n.className, a, i == null ? void 0 : i.className, r == null ? void 0 : r.className),
    y = {
      ...p == null ? void 0 : p.style,
      ...n == null ? void 0 : n.style,
      ...i == null ? void 0 : i.style,
      ...r == null ? void 0 : r.style
    },
    v = {
      ...p,
      ...n,
      ...h,
      ...c
    };
  return m.length > 0 && (v.className = m), Object.keys(y).length > 0 && (v.style = y), {
    props: v,
    internalRef: p.ref
  }
}

function Uw(t, e, n) {
  return typeof t == "function" ? t(e, n) : t
}

function Ru(t) {
  var y;
  const {
    elementType: e,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: i = !1,
    ...a
  } = t, l = i ? {} : Uw(n, r), {
    props: c,
    internalRef: h
  } = zw({
    ...a,
    externalSlotProps: l
  }), p = Iu(h, l == null ? void 0 : l.ref, (y = t.additionalProps) == null ? void 0 : y.ref);
  return $w(e, {
    ...c,
    ref: p
  }, r)
}
const FL = M.createContext(),
  Ww = () => M.useContext(FL) ?? !1,
  BL = M.createContext(void 0);

function $L(t) {
  const {
    theme: e,
    name: n,
    props: r
  } = t;
  if (!e || !e.components || !e.components[n]) return r;
  const i = e.components[n];
  return i.defaultProps ? Lh(i.defaultProps, r) : !i.styleOverrides && !i.variants ? Lh(i, r) : r
}

function zL({
  props: t,
  name: e
}) {
  const n = M.useContext(BL);
  return $L({
    props: t,
    name: e,
    theme: {
      components: n
    }
  })
}
const Fg = {
  theme: void 0
};

function UL(t) {
  let e, n;
  return function(i) {
    let a = e;
    return (a === void 0 || i.theme !== n) && (Fg.theme = i.theme, a = Lw(t(Fg)), e = a, n = i.theme), a
  }
}

function WL(t = "") {
  function e(...r) {
    if (!r.length) return "";
    const i = r[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${t?`${t}-`:""}${i}${e(...r.slice(1))})` : `, ${i}`
  }
  return (r, ...i) => `var(--${t?`${t}-`:""}${r}${e(...i)})`
}
const Bg = (t, e, n, r = []) => {
    let i = t;
    e.forEach((a, l) => {
      l === e.length - 1 ? Array.isArray(i) ? i[Number(a)] = n : i && typeof i == "object" && (i[a] = n) : i && typeof i == "object" && (i[a] || (i[a] = r.includes(a) ? [] : {}), i = i[a])
    })
  },
  HL = (t, e, n) => {
    function r(i, a = [], l = []) {
      Object.entries(i).forEach(([c, h]) => {
        (!n || n && !n([...a, c])) && h != null && (typeof h == "object" && Object.keys(h).length > 0 ? r(h, [...a, c], Array.isArray(h) ? [...l, c] : l) : e([...a, c], h, l))
      })
    }
    r(t)
  },
  qL = (t, e) => typeof e == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some(r => t.includes(r)) || t[t.length - 1].toLowerCase().includes("opacity") ? e : `${e}px` : e;

function I4(t, e) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = e || {}, i = {}, a = {}, l = {};
  return HL(t, (c, h, p) => {
    if ((typeof h == "string" || typeof h == "number") && (!r || !r(c, h))) {
      const m = `--${n?`${n}-`:""}${c.join("-")}`,
        y = qL(c, h);
      Object.assign(i, {
        [m]: y
      }), Bg(a, c, `var(${m})`, p), Bg(l, c, `var(${m}, ${y})`, p)
    }
  }, c => c[0] === "vars"), {
    css: i,
    vars: a,
    varsWithDefaults: l
  }
}

function GL(t, e = {}) {
  const {
    getSelector: n = R,
    disableCssColorScheme: r,
    colorSchemeSelector: i
  } = e, {
    colorSchemes: a = {},
    components: l,
    defaultColorScheme: c = "light",
    ...h
  } = t, {
    vars: p,
    css: m,
    varsWithDefaults: y
  } = I4(h, e);
  let v = y;
  const C = {},
    {
      [c]: P,
      ...k
    } = a;
  if (Object.entries(k || {}).forEach(([U, H]) => {
      const {
        vars: $,
        css: X,
        varsWithDefaults: D
      } = I4(H, e);
      v = br(v, D), C[U] = {
        css: X,
        vars: $
      }
    }), P) {
    const {
      css: U,
      vars: H,
      varsWithDefaults: $
    } = I4(P, e);
    v = br(v, $), C[c] = {
      css: U,
      vars: H
    }
  }

  function R(U, H) {
    var X, D;
    let $ = i;
    if (i === "class" && ($ = ".%s"), i === "data" && ($ = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && ($ = `[${i}="%s"]`), U) {
      if ($ === "media") return t.defaultColorScheme === U ? ":root" : {
        [`@media (prefers-color-scheme: ${((D=(X=a[U])==null?void 0:X.palette)==null?void 0:D.mode)||U})`]: {
          ":root": H
        }
      };
      if ($) return t.defaultColorScheme === U ? `:root, ${$.replace("%s",String(U))}` : $.replace("%s", String(U))
    }
    return ":root"
  }
  return {
    vars: v,
    generateThemeVars: () => {
      let U = {
        ...p
      };
      return Object.entries(C).forEach(([, {
        vars: H
      }]) => {
        U = br(U, H)
      }), U
    },
    generateStyleSheets: () => {
      var A, j;
      const U = [],
        H = t.defaultColorScheme || "light";

      function $(x, N) {
        Object.keys(N).length && U.push(typeof x == "string" ? {
          [x]: {
            ...N
          }
        } : x)
      }
      $(n(void 0, {
        ...m
      }), m);
      const {
        [H]: X, ...D
      } = C;
      if (X) {
        const {
          css: x
        } = X, N = (j = (A = a[H]) == null ? void 0 : A.palette) == null ? void 0 : j.mode, V = !r && N ? {
          colorScheme: N,
          ...x
        } : {
          ...x
        };
        $(n(H, {
          ...V
        }), V)
      }
      return Object.entries(D).forEach(([x, {
        css: N
      }]) => {
        var h1, A1;
        const V = (A1 = (h1 = a[x]) == null ? void 0 : h1.palette) == null ? void 0 : A1.mode,
          L = !r && V ? {
            colorScheme: V,
            ...N
          } : {
            ...N
          };
        $(n(x, {
          ...L
        }), L)
      }), U
    }
  }
}

function KL(t) {
  return function(n) {
    return t === "media" ? `@media (prefers-color-scheme: ${n})` : t ? t.startsWith("data-") && !t.includes("%s") ? `[${t}="${n}"] &` : t === "class" ? `.${n} &` : t === "data" ? `[data-${n}] &` : `${t.replace("%s",n)} &` : "&"
  }
}
const r0 = {
    black: "#000",
    white: "#fff"
  },
  QL = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161"
  },
  Hs = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2"
  },
  qs = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828"
  },
  ya = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100"
  },
  Gs = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0"
  },
  Ks = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b"
  },
  Qs = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20"
  };

function Hw() {
  return {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: r0.white,
      default: r0.white
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: .04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: .08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: .38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: .12,
      activatedOpacity: .12
    }
  }
}
const YL = Hw();

function qw() {
  return {
    text: {
      primary: r0.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: r0.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: .08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: .16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: .38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: .12,
      activatedOpacity: .24
    }
  }
}
const $g = qw();

function zg(t, e, n, r) {
  const i = r.light || r,
    a = r.dark || r * 1.5;
  t[e] || (t.hasOwnProperty(n) ? t[e] = t[n] : e === "light" ? t.light = pf(t.main, i) : e === "dark" && (t.dark = ff(t.main, a)))
}

function XL(t = "light") {
  return t === "dark" ? {
    main: Gs[200],
    light: Gs[50],
    dark: Gs[400]
  } : {
    main: Gs[700],
    light: Gs[400],
    dark: Gs[800]
  }
}

function JL(t = "light") {
  return t === "dark" ? {
    main: Hs[200],
    light: Hs[50],
    dark: Hs[400]
  } : {
    main: Hs[500],
    light: Hs[300],
    dark: Hs[700]
  }
}

function ZL(t = "light") {
  return t === "dark" ? {
    main: qs[500],
    light: qs[300],
    dark: qs[700]
  } : {
    main: qs[700],
    light: qs[400],
    dark: qs[800]
  }
}

function eM(t = "light") {
  return t === "dark" ? {
    main: Ks[400],
    light: Ks[300],
    dark: Ks[700]
  } : {
    main: Ks[700],
    light: Ks[500],
    dark: Ks[900]
  }
}

function tM(t = "light") {
  return t === "dark" ? {
    main: Qs[400],
    light: Qs[300],
    dark: Qs[700]
  } : {
    main: Qs[800],
    light: Qs[500],
    dark: Qs[900]
  }
}

function nM(t = "light") {
  return t === "dark" ? {
    main: ya[400],
    light: ya[300],
    dark: ya[700]
  } : {
    main: "#ed6c02",
    light: ya[500],
    dark: ya[900]
  }
}

function gf(t) {
  const {
    mode: e = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = .2,
    ...i
  } = t, a = t.primary || XL(e), l = t.secondary || JL(e), c = t.error || ZL(e), h = t.info || eM(e), p = t.success || tM(e), m = t.warning || nM(e);

  function y(k) {
    return NL(k, $g.text.primary) >= n ? $g.text.primary : YL.text.primary
  }
  const v = ({
    color: k,
    name: R,
    mainShade: W = 500,
    lightShade: q = 300,
    darkShade: U = 700
  }) => {
    if (k = {
        ...k
      }, !k.main && k[W] && (k.main = k[W]), !k.hasOwnProperty("main")) throw new Error(X3(11, R ? ` (${R})` : "", W));
    if (typeof k.main != "string") throw new Error(X3(12, R ? ` (${R})` : "", JSON.stringify(k.main)));
    return zg(k, "light", q, r), zg(k, "dark", U, r), k.contrastText || (k.contrastText = y(k.main)), k
  };
  let C;
  return e === "light" ? C = Hw() : e === "dark" && (C = qw()), br({
    common: {
      ...r0
    },
    mode: e,
    primary: v({
      color: a,
      name: "primary"
    }),
    secondary: v({
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    error: v({
      color: c,
      name: "error"
    }),
    warning: v({
      color: m,
      name: "warning"
    }),
    info: v({
      color: h,
      name: "info"
    }),
    success: v({
      color: p,
      name: "success"
    }),
    grey: QL,
    contrastThreshold: n,
    getContrastText: y,
    augmentColor: v,
    tonalOffset: r,
    ...C
  }, i)
}

function rM(t) {
  const e = {};
  return Object.entries(t).forEach(r => {
    const [i, a] = r;
    typeof a == "object" && (e[i] = `${a.fontStyle?`${a.fontStyle} `:""}${a.fontVariant?`${a.fontVariant} `:""}${a.fontWeight?`${a.fontWeight} `:""}${a.fontStretch?`${a.fontStretch} `:""}${a.fontSize||""}${a.lineHeight?`/${a.lineHeight} `:""}${a.fontFamily||""}`)
  }), e
}

function iM(t, e) {
  return {
    toolbar: {
      minHeight: 56,
      [t.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [t.up("sm")]: {
        minHeight: 64
      }
    },
    ...e
  }
}

function sM(t) {
  return Math.round(t * 1e5) / 1e5
}
const Ug = {
    textTransform: "uppercase"
  },
  Wg = '"Roboto", "Helvetica", "Arial", sans-serif';

function oM(t, e) {
  const {
    fontFamily: n = Wg,
    fontSize: r = 14,
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: c = 700,
    htmlFontSize: h = 16,
    allVariants: p,
    pxToRem: m,
    ...y
  } = typeof e == "function" ? e(t) : e, v = r / 14, C = m || (R => `${R/h*v}rem`), P = (R, W, q, U, H) => ({
    fontFamily: n,
    fontWeight: R,
    fontSize: C(W),
    lineHeight: q,
    ...n === Wg ? {
      letterSpacing: `${sM(U/W)}em`
    } : {},
    ...H,
    ...p
  }), k = {
    h1: P(i, 96, 1.167, -1.5),
    h2: P(i, 60, 1.2, -.5),
    h3: P(a, 48, 1.167, 0),
    h4: P(a, 34, 1.235, .25),
    h5: P(a, 24, 1.334, 0),
    h6: P(l, 20, 1.6, .15),
    subtitle1: P(a, 16, 1.75, .15),
    subtitle2: P(l, 14, 1.57, .1),
    body1: P(a, 16, 1.5, .15),
    body2: P(a, 14, 1.43, .15),
    button: P(l, 14, 1.75, .4, Ug),
    caption: P(a, 12, 1.66, .4),
    overline: P(a, 12, 2.66, 1, Ug),
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return br({
    htmlFontSize: h,
    pxToRem: C,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: l,
    fontWeightBold: c,
    ...k
  }, y, {
    clone: !1
  })
}
const aM = .2,
  lM = .14,
  uM = .12;

function vt(...t) {
  return [`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${aM})`, `${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${lM})`, `${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${uM})`].join(",")
}
const cM = ["none", vt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), vt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), vt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), vt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), vt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), vt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), vt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), vt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), vt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), vt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), vt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), vt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), vt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), vt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), vt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), vt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), vt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), vt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), vt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), vt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), vt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), vt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), vt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), vt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)],
  dM = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  },
  hM = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };

function Hg(t) {
  return `${Math.round(t)}ms`
}

function fM(t) {
  if (!t) return 0;
  const e = t / 36;
  return Math.min(Math.round((4 + 15 * e ** .25 + e / 5) * 10), 3e3)
}

function pM(t) {
  const e = {
      ...dM,
      ...t.easing
    },
    n = {
      ...hM,
      ...t.duration
    };
  return {
    getAutoHeightDuration: fM,
    create: (i = ["all"], a = {}) => {
      const {
        duration: l = n.standard,
        easing: c = e.easeInOut,
        delay: h = 0,
        ...p
      } = a;
      return (Array.isArray(i) ? i : [i]).map(m => `${m} ${typeof l=="string"?l:Hg(l)} ${c} ${typeof h=="string"?h:Hg(h)}`).join(",")
    },
    ...t,
    easing: e,
    duration: n
  }
}
const mM = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};

function gM(t) {
  return T2(t) || typeof t > "u" || typeof t == "string" || typeof t == "boolean" || typeof t == "number" || Array.isArray(t)
}

function Gw(t = {}) {
  const e = {
    ...t
  };

  function n(r) {
    const i = Object.entries(r);
    for (let a = 0; a < i.length; a++) {
      const [l, c] = i[a];
      !gM(c) || l.startsWith("unstable_") ? delete r[l] : T2(c) && (r[l] = {
        ...c
      }, n(r[l]))
    }
  }
  return n(e), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
}

function Oh(t = {}, ...e) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: i,
    palette: a = {},
    transitions: l = {},
    typography: c = {},
    shape: h,
    ...p
  } = t;
  if (t.vars && t.generateThemeVars === void 0) throw new Error(X3(20));
  const m = gf(a),
    y = df(t);
  let v = br(y, {
    mixins: iM(y.breakpoints, r),
    palette: m,
    shadows: cM.slice(),
    typography: oM(m, c),
    transitions: pM(l),
    zIndex: {
      ...mM
    }
  });
  return v = br(v, p), v = e.reduce((C, P) => br(C, P), v), v.unstable_sxConfig = {
    ...w0,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, v.unstable_sx = function(P) {
    return J3({
      sx: P,
      theme: this
    })
  }, v.toRuntimeSource = Gw, v
}

function jh(t) {
  let e;
  return t < 1 ? e = 5.11916 * t ** 2 : e = 4.5 * Math.log(t + 1) + 2, Math.round(e * 10) / 1e3
}
const yM = [...Array(25)].map((t, e) => {
  if (e === 0) return "none";
  const n = jh(e);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`
});

function Kw(t) {
  return {
    inputPlaceholder: t === "dark" ? .5 : .42,
    inputUnderline: t === "dark" ? .7 : .42,
    switchTrackDisabled: t === "dark" ? .2 : .12,
    switchTrack: t === "dark" ? .3 : .38
  }
}

function Qw(t) {
  return t === "dark" ? yM : []
}

function vM(t) {
  const {
    palette: e = {
      mode: "light"
    },
    opacity: n,
    overlays: r,
    ...i
  } = t, a = gf(e);
  return {
    palette: a,
    opacity: {
      ...Kw(a.mode),
      ...n
    },
    overlays: r || Qw(a.mode),
    ...i
  }
}

function wM(t) {
  var e;
  return !!t[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!t[0].match(/sxConfig$/) || t[0] === "palette" && !!((e = t[1]) != null && e.match(/(mode|contrastThreshold|tonalOffset)/))
}
const bM = t => [...[...Array(25)].map((e, n) => `--${t?`${t}-`:""}overlays-${n}`), `--${t?`${t}-`:""}palette-AppBar-darkBg`, `--${t?`${t}-`:""}palette-AppBar-darkColor`],
  _M = t => (e, n) => {
    const r = t.rootSelector || ":root",
      i = t.colorSchemeSelector;
    let a = i;
    if (i === "class" && (a = ".%s"), i === "data" && (a = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (a = `[${i}="%s"]`), t.defaultColorScheme === e) {
      if (e === "dark") {
        const l = {};
        return bM(t.cssVarPrefix).forEach(c => {
          l[c] = n[c], delete n[c]
        }), a === "media" ? {
          [r]: n,
          "@media (prefers-color-scheme: dark)": {
            [r]: l
          }
        } : a ? {
          [a.replace("%s", e)]: l,
          [`${r}, ${a.replace("%s",e)}`]: n
        } : {
          [r]: {
            ...n,
            ...l
          }
        }
      }
      if (a && a !== "media") return `${r}, ${a.replace("%s",String(e))}`
    } else if (e) {
      if (a === "media") return {
        [`@media (prefers-color-scheme: ${String(e)})`]: {
          [r]: n
        }
      };
      if (a) return a.replace("%s", String(e))
    }
    return r
  };

function xM(t, e) {
  e.forEach(n => {
    t[n] || (t[n] = {})
  })
}

function u1(t, e, n) {
  !t[e] && n && (t[e] = n)
}

function Ta(t) {
  return typeof t != "string" || !t.startsWith("hsl") ? t : Ow(t)
}

function ri(t, e) {
  `${e}Channel` in t || (t[`${e}Channel`] = Ea(Ta(t[e])))
}

function SM(t) {
  return typeof t == "number" ? `${t}px` : typeof t == "string" || typeof t == "function" || Array.isArray(t) ? t : "8px"
}
const b2 = t => {
    try {
      return t()
    } catch {}
  },
  EM = (t = "mui") => WL(t);

function R4(t, e, n, r) {
  if (!e) return;
  e = e === !0 ? {} : e;
  const i = r === "dark" ? "dark" : "light";
  if (!n) {
    t[r] = vM({
      ...e,
      palette: {
        mode: i,
        ...e == null ? void 0 : e.palette
      }
    });
    return
  }
  const {
    palette: a,
    ...l
  } = Oh({
    ...n,
    palette: {
      mode: i,
      ...e == null ? void 0 : e.palette
    }
  });
  return t[r] = {
    ...e,
    palette: a,
    opacity: {
      ...Kw(i),
      ...e == null ? void 0 : e.opacity
    },
    overlays: (e == null ? void 0 : e.overlays) || Qw(i)
  }, l
}

function TM(t = {}, ...e) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: i = !1,
    cssVarPrefix: a = "mui",
    shouldSkipGeneratingVar: l = wM,
    colorSchemeSelector: c = n.light && n.dark ? "media" : void 0,
    rootSelector: h = ":root",
    ...p
  } = t, m = Object.keys(n)[0], y = r || (n.light && m !== "light" ? "light" : m), v = EM(a), {
    [y]: C,
    light: P,
    dark: k,
    ...R
  } = n, W = {
    ...R
  };
  let q = C;
  if ((y === "dark" && !("dark" in n) || y === "light" && !("light" in n)) && (q = !0), !q) throw new Error(X3(21, y));
  const U = R4(W, q, p, y);
  P && !W.light && R4(W, P, void 0, "light"), k && !W.dark && R4(W, k, void 0, "dark");
  let H = {
    defaultColorScheme: y,
    ...U,
    cssVarPrefix: a,
    colorSchemeSelector: c,
    rootSelector: h,
    getCssVar: v,
    colorSchemes: W,
    font: {
      ...rM(U.typography),
      ...U.font
    },
    spacing: SM(p.spacing)
  };
  Object.keys(H.colorSchemes).forEach(j => {
    const x = H.colorSchemes[j].palette,
      N = V => {
        const L = V.split("-"),
          h1 = L[1],
          A1 = L[2];
        return v(V, x[h1][A1])
      };
    if (x.mode === "light" && (u1(x.common, "background", "#fff"), u1(x.common, "onBackground", "#000")), x.mode === "dark" && (u1(x.common, "background", "#000"), u1(x.common, "onBackground", "#fff")), xM(x, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), x.mode === "light") {
      u1(x.Alert, "errorColor", it(x.error.light, .6)), u1(x.Alert, "infoColor", it(x.info.light, .6)), u1(x.Alert, "successColor", it(x.success.light, .6)), u1(x.Alert, "warningColor", it(x.warning.light, .6)), u1(x.Alert, "errorFilledBg", N("palette-error-main")), u1(x.Alert, "infoFilledBg", N("palette-info-main")), u1(x.Alert, "successFilledBg", N("palette-success-main")), u1(x.Alert, "warningFilledBg", N("palette-warning-main")), u1(x.Alert, "errorFilledColor", b2(() => x.getContrastText(x.error.main))), u1(x.Alert, "infoFilledColor", b2(() => x.getContrastText(x.info.main))), u1(x.Alert, "successFilledColor", b2(() => x.getContrastText(x.success.main))), u1(x.Alert, "warningFilledColor", b2(() => x.getContrastText(x.warning.main))), u1(x.Alert, "errorStandardBg", st(x.error.light, .9)), u1(x.Alert, "infoStandardBg", st(x.info.light, .9)), u1(x.Alert, "successStandardBg", st(x.success.light, .9)), u1(x.Alert, "warningStandardBg", st(x.warning.light, .9)), u1(x.Alert, "errorIconColor", N("palette-error-main")), u1(x.Alert, "infoIconColor", N("palette-info-main")), u1(x.Alert, "successIconColor", N("palette-success-main")), u1(x.Alert, "warningIconColor", N("palette-warning-main")), u1(x.AppBar, "defaultBg", N("palette-grey-100")), u1(x.Avatar, "defaultBg", N("palette-grey-400")), u1(x.Button, "inheritContainedBg", N("palette-grey-300")), u1(x.Button, "inheritContainedHoverBg", N("palette-grey-A100")), u1(x.Chip, "defaultBorder", N("palette-grey-400")), u1(x.Chip, "defaultAvatarColor", N("palette-grey-700")), u1(x.Chip, "defaultIconColor", N("palette-grey-700")), u1(x.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), u1(x.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), u1(x.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), u1(x.LinearProgress, "primaryBg", st(x.primary.main, .62)), u1(x.LinearProgress, "secondaryBg", st(x.secondary.main, .62)), u1(x.LinearProgress, "errorBg", st(x.error.main, .62)), u1(x.LinearProgress, "infoBg", st(x.info.main, .62)), u1(x.LinearProgress, "successBg", st(x.success.main, .62)), u1(x.LinearProgress, "warningBg", st(x.warning.main, .62)), u1(x.Skeleton, "bg", `rgba(${N("palette-text-primaryChannel")} / 0.11)`), u1(x.Slider, "primaryTrack", st(x.primary.main, .62)), u1(x.Slider, "secondaryTrack", st(x.secondary.main, .62)), u1(x.Slider, "errorTrack", st(x.error.main, .62)), u1(x.Slider, "infoTrack", st(x.info.main, .62)), u1(x.Slider, "successTrack", st(x.success.main, .62)), u1(x.Slider, "warningTrack", st(x.warning.main, .62));
      const V = jl(x.background.default, .8);
      u1(x.SnackbarContent, "bg", V), u1(x.SnackbarContent, "color", b2(() => x.getContrastText(V))), u1(x.SpeedDialAction, "fabHoverBg", jl(x.background.paper, .15)), u1(x.StepConnector, "border", N("palette-grey-400")), u1(x.StepContent, "border", N("palette-grey-400")), u1(x.Switch, "defaultColor", N("palette-common-white")), u1(x.Switch, "defaultDisabledColor", N("palette-grey-100")), u1(x.Switch, "primaryDisabledColor", st(x.primary.main, .62)), u1(x.Switch, "secondaryDisabledColor", st(x.secondary.main, .62)), u1(x.Switch, "errorDisabledColor", st(x.error.main, .62)), u1(x.Switch, "infoDisabledColor", st(x.info.main, .62)), u1(x.Switch, "successDisabledColor", st(x.success.main, .62)), u1(x.Switch, "warningDisabledColor", st(x.warning.main, .62)), u1(x.TableCell, "border", st(Ol(x.divider, 1), .88)), u1(x.Tooltip, "bg", Ol(x.grey[700], .92))
    }
    if (x.mode === "dark") {
      u1(x.Alert, "errorColor", st(x.error.light, .6)), u1(x.Alert, "infoColor", st(x.info.light, .6)), u1(x.Alert, "successColor", st(x.success.light, .6)), u1(x.Alert, "warningColor", st(x.warning.light, .6)), u1(x.Alert, "errorFilledBg", N("palette-error-dark")), u1(x.Alert, "infoFilledBg", N("palette-info-dark")), u1(x.Alert, "successFilledBg", N("palette-success-dark")), u1(x.Alert, "warningFilledBg", N("palette-warning-dark")), u1(x.Alert, "errorFilledColor", b2(() => x.getContrastText(x.error.dark))), u1(x.Alert, "infoFilledColor", b2(() => x.getContrastText(x.info.dark))), u1(x.Alert, "successFilledColor", b2(() => x.getContrastText(x.success.dark))), u1(x.Alert, "warningFilledColor", b2(() => x.getContrastText(x.warning.dark))), u1(x.Alert, "errorStandardBg", it(x.error.light, .9)), u1(x.Alert, "infoStandardBg", it(x.info.light, .9)), u1(x.Alert, "successStandardBg", it(x.success.light, .9)), u1(x.Alert, "warningStandardBg", it(x.warning.light, .9)), u1(x.Alert, "errorIconColor", N("palette-error-main")), u1(x.Alert, "infoIconColor", N("palette-info-main")), u1(x.Alert, "successIconColor", N("palette-success-main")), u1(x.Alert, "warningIconColor", N("palette-warning-main")), u1(x.AppBar, "defaultBg", N("palette-grey-900")), u1(x.AppBar, "darkBg", N("palette-background-paper")), u1(x.AppBar, "darkColor", N("palette-text-primary")), u1(x.Avatar, "defaultBg", N("palette-grey-600")), u1(x.Button, "inheritContainedBg", N("palette-grey-800")), u1(x.Button, "inheritContainedHoverBg", N("palette-grey-700")), u1(x.Chip, "defaultBorder", N("palette-grey-700")), u1(x.Chip, "defaultAvatarColor", N("palette-grey-300")), u1(x.Chip, "defaultIconColor", N("palette-grey-300")), u1(x.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), u1(x.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), u1(x.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), u1(x.LinearProgress, "primaryBg", it(x.primary.main, .5)), u1(x.LinearProgress, "secondaryBg", it(x.secondary.main, .5)), u1(x.LinearProgress, "errorBg", it(x.error.main, .5)), u1(x.LinearProgress, "infoBg", it(x.info.main, .5)), u1(x.LinearProgress, "successBg", it(x.success.main, .5)), u1(x.LinearProgress, "warningBg", it(x.warning.main, .5)), u1(x.Skeleton, "bg", `rgba(${N("palette-text-primaryChannel")} / 0.13)`), u1(x.Slider, "primaryTrack", it(x.primary.main, .5)), u1(x.Slider, "secondaryTrack", it(x.secondary.main, .5)), u1(x.Slider, "errorTrack", it(x.error.main, .5)), u1(x.Slider, "infoTrack", it(x.info.main, .5)), u1(x.Slider, "successTrack", it(x.success.main, .5)), u1(x.Slider, "warningTrack", it(x.warning.main, .5));
      const V = jl(x.background.default, .98);
      u1(x.SnackbarContent, "bg", V), u1(x.SnackbarContent, "color", b2(() => x.getContrastText(V))), u1(x.SpeedDialAction, "fabHoverBg", jl(x.background.paper, .15)), u1(x.StepConnector, "border", N("palette-grey-600")), u1(x.StepContent, "border", N("palette-grey-600")), u1(x.Switch, "defaultColor", N("palette-grey-300")), u1(x.Switch, "defaultDisabledColor", N("palette-grey-600")), u1(x.Switch, "primaryDisabledColor", it(x.primary.main, .55)), u1(x.Switch, "secondaryDisabledColor", it(x.secondary.main, .55)), u1(x.Switch, "errorDisabledColor", it(x.error.main, .55)), u1(x.Switch, "infoDisabledColor", it(x.info.main, .55)), u1(x.Switch, "successDisabledColor", it(x.success.main, .55)), u1(x.Switch, "warningDisabledColor", it(x.warning.main, .55)), u1(x.TableCell, "border", it(Ol(x.divider, 1), .68)), u1(x.Tooltip, "bg", Ol(x.grey[700], .92))
    }
    ri(x.background, "default"), ri(x.background, "paper"), ri(x.common, "background"), ri(x.common, "onBackground"), ri(x, "divider"), Object.keys(x).forEach(V => {
      const L = x[V];
      V !== "tonalOffset" && L && typeof L == "object" && (L.main && u1(x[V], "mainChannel", Ea(Ta(L.main))), L.light && u1(x[V], "lightChannel", Ea(Ta(L.light))), L.dark && u1(x[V], "darkChannel", Ea(Ta(L.dark))), L.contrastText && u1(x[V], "contrastTextChannel", Ea(Ta(L.contrastText))), V === "text" && (ri(x[V], "primary"), ri(x[V], "secondary")), V === "action" && (L.active && ri(x[V], "active"), L.selected && ri(x[V], "selected")))
    })
  }), H = e.reduce((j, x) => br(j, x), H);
  const $ = {
      prefix: a,
      disableCssColorScheme: i,
      shouldSkipGeneratingVar: l,
      getSelector: _M(H)
    },
    {
      vars: X,
      generateThemeVars: D,
      generateStyleSheets: A
    } = GL(H, $);
  return H.vars = X, Object.entries(H.colorSchemes[H.defaultColorScheme]).forEach(([j, x]) => {
    H[j] = x
  }), H.generateThemeVars = D, H.generateStyleSheets = A, H.generateSpacing = function() {
    return Pw(p.spacing, uf(this))
  }, H.getColorSchemeSelector = KL(c), H.spacing = H.generateSpacing(), H.shouldSkipGeneratingVar = l, H.unstable_sxConfig = {
    ...w0,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, H.unstable_sx = function(x) {
    return J3({
      sx: x,
      theme: this
    })
  }, H.toRuntimeSource = Gw, H
}

function qg(t, e, n) {
  t.colorSchemes && n && (t.colorSchemes[e] = {
    ...n !== !0 && n,
    palette: gf({
      ...n === !0 ? {} : n.palette,
      mode: e
    })
  })
}

function Yw(t = {}, ...e) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: i = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: a = n == null ? void 0 : n.mode,
    ...l
  } = t, c = a || "light", h = i == null ? void 0 : i[c], p = {
    ...i,
    ...n ? {
      [c]: {
        ...typeof h != "boolean" && h,
        palette: n
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in t)) return Oh(t, ...e);
    let m = n;
    "palette" in t || p[c] && (p[c] !== !0 ? m = p[c].palette : c === "dark" && (m = {
      mode: "dark"
    }));
    const y = Oh({
      ...t,
      palette: m
    }, ...e);
    return y.defaultColorScheme = c, y.colorSchemes = p, y.palette.mode === "light" && (y.colorSchemes.light = {
      ...p.light !== !0 && p.light,
      palette: y.palette
    }, qg(y, "dark", p.dark)), y.palette.mode === "dark" && (y.colorSchemes.dark = {
      ...p.dark !== !0 && p.dark,
      palette: y.palette
    }, qg(y, "light", p.light)), y
  }
  return !n && !("light" in p) && c === "light" && (p.light = !0), TM({
    ...l,
    colorSchemes: p,
    defaultColorScheme: c,
    ...typeof r != "boolean" && r
  }, ...e)
}
const Xw = Yw();

function yf() {
  const t = Aw(Xw);
  return t[J9] || t
}

function CM(t) {
  return t !== "ownerState" && t !== "theme" && t !== "sx" && t !== "as"
}
const kM = t => CM(t) && t !== "classes",
  ur = EL({
    themeId: J9,
    defaultTheme: Xw,
    rootShouldForwardProp: kM
  });

function PM() {
  return Iw
}
const ls = UL;

function mi(t) {
  return zL(t)
}

function AM(t) {
  return typeof t.main == "string"
}

function IM(t, e = []) {
  if (!AM(t)) return !1;
  for (const n of e)
    if (!t.hasOwnProperty(n) || typeof t[n] != "string") return !1;
  return !0
}

function Jw(t = []) {
  return ([, e]) => e && IM(e, t)
}

function RM(t) {
  return pi("MuiPaper", t)
}
V2("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const NM = t => {
    const {
      square: e,
      elevation: n,
      variant: r,
      classes: i
    } = t, a = {
      root: ["root", r, !e && "rounded", r === "elevation" && `elevation${n}`]
    };
    return a3(a, RM, i)
  },
  LM = ur("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (t, e) => {
      const {
        ownerState: n
      } = t;
      return [e.root, e[n.variant], !n.square && e.rounded, n.variant === "elevation" && e[`elevation${n.elevation}`]]
    }
  })(ls(({
    theme: t
  }) => ({
    backgroundColor: (t.vars || t).palette.background.paper,
    color: (t.vars || t).palette.text.primary,
    transition: t.transitions.create("box-shadow"),
    variants: [{
      props: ({
        ownerState: e
      }) => !e.square,
      style: {
        borderRadius: t.shape.borderRadius
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        border: `1px solid ${(t.vars||t).palette.divider}`
      }
    }, {
      props: {
        variant: "elevation"
      },
      style: {
        boxShadow: "var(--Paper-shadow)",
        backgroundImage: "var(--Paper-overlay)"
      }
    }]
  }))),
  MM = M.forwardRef(function(e, n) {
    var C;
    const r = mi({
        props: e,
        name: "MuiPaper"
      }),
      i = yf(),
      {
        className: a,
        component: l = "div",
        elevation: c = 1,
        square: h = !1,
        variant: p = "elevation",
        ...m
      } = r,
      y = {
        ...r,
        component: l,
        elevation: c,
        square: h,
        variant: p
      },
      v = NM(y);
    return _.jsx(LM, {
      as: l,
      ownerState: y,
      className: pt(v.root, a),
      ref: n,
      ...m,
      style: {
        ...p === "elevation" && {
          "--Paper-shadow": (i.vars || i).shadows[c],
          ...i.vars && {
            "--Paper-overlay": (C = i.vars.overlays) == null ? void 0 : C[c]
          },
          ...!i.vars && i.palette.mode === "dark" && {
            "--Paper-overlay": `linear-gradient(${Dh("#fff",jh(c))}, ${Dh("#fff",jh(c))})`
          }
        },
        ...m.style
      }
    })
  });

function DM(t) {
  return pi("MuiAppBar", t)
}
V2("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const OM = t => {
    const {
      color: e,
      position: n,
      classes: r
    } = t, i = {
      root: ["root", `color${Kn(e)}`, `position${Kn(n)}`]
    };
    return a3(i, DM, r)
  },
  Gg = (t, e) => t ? `${t==null?void 0:t.replace(")","")}, ${e})` : e,
  jM = ur(MM, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (t, e) => {
      const {
        ownerState: n
      } = t;
      return [e.root, e[`position${Kn(n.position)}`], e[`color${Kn(n.color)}`]]
    }
  })(ls(({
    theme: t
  }) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
    flexShrink: 0,
    variants: [{
      props: {
        position: "fixed"
      },
      style: {
        position: "fixed",
        zIndex: (t.vars || t).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
        "@media print": {
          position: "absolute"
        }
      }
    }, {
      props: {
        position: "absolute"
      },
      style: {
        position: "absolute",
        zIndex: (t.vars || t).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0
      }
    }, {
      props: {
        position: "sticky"
      },
      style: {
        position: "sticky",
        zIndex: (t.vars || t).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0
      }
    }, {
      props: {
        position: "static"
      },
      style: {
        position: "static"
      }
    }, {
      props: {
        position: "relative"
      },
      style: {
        position: "relative"
      }
    }, {
      props: {
        color: "inherit"
      },
      style: {
        "--AppBar-color": "inherit"
      }
    }, {
      props: {
        color: "default"
      },
      style: {
        "--AppBar-background": t.vars ? t.vars.palette.AppBar.defaultBg : t.palette.grey[100],
        "--AppBar-color": t.vars ? t.vars.palette.text.primary : t.palette.getContrastText(t.palette.grey[100]),
        ...t.applyStyles("dark", {
          "--AppBar-background": t.vars ? t.vars.palette.AppBar.defaultBg : t.palette.grey[900],
          "--AppBar-color": t.vars ? t.vars.palette.text.primary : t.palette.getContrastText(t.palette.grey[900])
        })
      }
    }, ...Object.entries(t.palette).filter(Jw(["contrastText"])).map(([e]) => ({
      props: {
        color: e
      },
      style: {
        "--AppBar-background": (t.vars ?? t).palette[e].main,
        "--AppBar-color": (t.vars ?? t).palette[e].contrastText
      }
    })), {
      props: e => e.enableColorOnDark === !0 && !["inherit", "transparent"].includes(e.color),
      style: {
        backgroundColor: "var(--AppBar-background)",
        color: "var(--AppBar-color)"
      }
    }, {
      props: e => e.enableColorOnDark === !1 && !["inherit", "transparent"].includes(e.color),
      style: {
        backgroundColor: "var(--AppBar-background)",
        color: "var(--AppBar-color)",
        ...t.applyStyles("dark", {
          backgroundColor: t.vars ? Gg(t.vars.palette.AppBar.darkBg, "var(--AppBar-background)") : null,
          color: t.vars ? Gg(t.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null
        })
      }
    }, {
      props: {
        color: "transparent"
      },
      style: {
        "--AppBar-background": "transparent",
        "--AppBar-color": "inherit",
        backgroundColor: "var(--AppBar-background)",
        color: "var(--AppBar-color)",
        ...t.applyStyles("dark", {
          backgroundImage: "none"
        })
      }
    }]
  }))),
  VM = M.forwardRef(function(e, n) {
    const r = mi({
        props: e,
        name: "MuiAppBar"
      }),
      {
        className: i,
        color: a = "primary",
        enableColorOnDark: l = !1,
        position: c = "fixed",
        ...h
      } = r,
      p = {
        ...r,
        color: a,
        position: c,
        enableColorOnDark: l
      },
      m = OM(p);
    return _.jsx(jM, {
      square: !0,
      component: "header",
      ownerState: p,
      elevation: 4,
      className: pt(m.root, i, c === "fixed" && "mui-fixed"),
      ref: n,
      ...h
    })
  });

function FM(t) {
  return (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2
}

function BM(t, e, n, r = {}, i = () => {}) {
  const {
    ease: a = FM,
    duration: l = 300
  } = r;
  let c = null;
  const h = e[t];
  let p = !1;
  const m = () => {
      p = !0
    },
    y = v => {
      if (p) {
        i(new Error("Animation cancelled"));
        return
      }
      c === null && (c = v);
      const C = Math.min(1, (v - c) / l);
      if (e[t] = a(C) * (n - h) + h, C >= 1) {
        requestAnimationFrame(() => {
          i(null)
        });
        return
      }
      requestAnimationFrame(y)
    };
  return h === n ? (i(new Error("Element already at target position")), m) : (requestAnimationFrame(y), m)
}

function $M(t) {
  return pi("MuiSvgIcon", t)
}
V2("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const zM = t => {
    const {
      color: e,
      fontSize: n,
      classes: r
    } = t, i = {
      root: ["root", e !== "inherit" && `color${Kn(e)}`, `fontSize${Kn(n)}`]
    };
    return a3(i, $M, r)
  },
  UM = ur("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (t, e) => {
      const {
        ownerState: n
      } = t;
      return [e.root, n.color !== "inherit" && e[`color${Kn(n.color)}`], e[`fontSize${Kn(n.fontSize)}`]]
    }
  })(ls(({
    theme: t
  }) => {
    var e, n, r, i, a, l, c, h, p, m, y, v, C, P;
    return {
      userSelect: "none",