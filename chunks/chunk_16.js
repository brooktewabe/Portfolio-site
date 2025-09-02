      width: "1em",
      height: "1em",
      display: "inline-block",
      flexShrink: 0,
      transition: (i = (e = t.transitions) == null ? void 0 : e.create) == null ? void 0 : i.call(e, "fill", {
        duration: (r = (n = (t.vars ?? t).transitions) == null ? void 0 : n.duration) == null ? void 0 : r.shorter
      }),
      variants: [{
        props: k => !k.hasSvgAsChild,
        style: {
          fill: "currentColor"
        }
      }, {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      }, {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((l = (a = t.typography) == null ? void 0 : a.pxToRem) == null ? void 0 : l.call(a, 20)) || "1.25rem"
        }
      }, {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((h = (c = t.typography) == null ? void 0 : c.pxToRem) == null ? void 0 : h.call(c, 24)) || "1.5rem"
        }
      }, {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((m = (p = t.typography) == null ? void 0 : p.pxToRem) == null ? void 0 : m.call(p, 35)) || "2.1875rem"
        }
      }, ...Object.entries((t.vars ?? t).palette).filter(([, k]) => k && k.main).map(([k]) => {
        var R, W;
        return {
          props: {
            color: k
          },
          style: {
            color: (W = (R = (t.vars ?? t).palette) == null ? void 0 : R[k]) == null ? void 0 : W.main
          }
        }
      }), {
        props: {
          color: "action"
        },
        style: {
          color: (v = (y = (t.vars ?? t).palette) == null ? void 0 : y.action) == null ? void 0 : v.active
        }
      }, {
        props: {
          color: "disabled"
        },
        style: {
          color: (P = (C = (t.vars ?? t).palette) == null ? void 0 : C.action) == null ? void 0 : P.disabled
        }
      }, {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }]
    }
  })),
  Vh = M.forwardRef(function(e, n) {
    const r = mi({
        props: e,
        name: "MuiSvgIcon"
      }),
      {
        children: i,
        className: a,
        color: l = "inherit",
        component: c = "svg",
        fontSize: h = "medium",
        htmlColor: p,
        inheritViewBox: m = !1,
        titleAccess: y,
        viewBox: v = "0 0 24 24",
        ...C
      } = r,
      P = M.isValidElement(i) && i.type === "svg",
      k = {
        ...r,
        color: l,
        component: c,
        fontSize: h,
        instanceFontSize: e.fontSize,
        inheritViewBox: m,
        viewBox: v,
        hasSvgAsChild: P
      },
      R = {};
    m || (R.viewBox = v);
    const W = zM(k);
    return _.jsxs(UM, {
      as: c,
      className: pt(W.root, a),
      focusable: "false",
      color: p,
      "aria-hidden": y ? void 0 : !0,
      role: y ? "img" : void 0,
      ref: n,
      ...R,
      ...C,
      ...P && i.props,
      ownerState: k,
      children: [P ? i.props.children : i, y ? _.jsx("title", {
        children: y
      }) : null]
    })
  });
Vh.muiName = "SvgIcon";

function Zw(t, e) {
  function n(r, i) {
    return _.jsx(Vh, {
      "data-testid": `${e}Icon`,
      ref: i,
      ...r,
      children: t
    })
  }
  return n.muiName = Vh.muiName, M.memo(M.forwardRef(n))
}
const WM = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};

function HM(t) {
  const {
    onChange: e,
    ...n
  } = t, r = M.useRef(), i = M.useRef(null), a = () => {
    r.current = i.current.offsetHeight - i.current.clientHeight
  };
  return Dw(() => {
    const l = jw(() => {
        const h = r.current;
        a(), h !== r.current && e(r.current)
      }),
      c = Fw(i.current);
    return c.addEventListener("resize", l), () => {
      l.clear(), c.removeEventListener("resize", l)
    }
  }, [e]), M.useEffect(() => {
    a(), e(r.current)
  }, [e]), _.jsx("div", {
    style: WM,
    ...n,
    ref: i
  })
}
const qM = Zw(_.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"),
  GM = Zw(_.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight");
class Nu {
  constructor() {
    pa(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve())
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null
  }
  static create() {
    return new Nu
  }
  static use() {
    const e = Bw(Nu.create).current,
      [n, r] = M.useState(!1);
    return e.shouldMount = n, e.setShouldMount = r, M.useEffect(e.mountEffect, [n]), e
  }
  mount() {
    return this.mounted || (this.mounted = QM(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted
  }
  start(...e) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.start(...e)
    })
  }
  stop(...e) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.stop(...e)
    })
  }
  pulsate(...e) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.pulsate(...e)
    })
  }
}

function KM() {
  return Nu.use()
}

function QM() {
  let t, e;
  const n = new Promise((r, i) => {
    t = r, e = i
  });
  return n.resolve = t, n.reject = e, n
}

function YM(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if ({}.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) !== -1) continue;
      n[r] = t[r]
    } return n
}

function Fh(t, e) {
  return Fh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n
  }, Fh(t, e)
}

function XM(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, Fh(t, e)
}
const Kg = D3.createContext(null);

function JM(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t
}

function vf(t, e) {
  var n = function(a) {
      return e && M.isValidElement(a) ? e(a) : a
    },
    r = Object.create(null);
  return t && M.Children.map(t, function(i) {
    return i
  }).forEach(function(i) {
    r[i.key] = n(i)
  }), r
}

function ZM(t, e) {
  t = t || {}, e = e || {};

  function n(m) {
    return m in e ? e[m] : t[m]
  }
  var r = Object.create(null),
    i = [];
  for (var a in t) a in e ? i.length && (r[a] = i, i = []) : i.push(a);
  var l, c = {};
  for (var h in e) {
    if (r[h])
      for (l = 0; l < r[h].length; l++) {
        var p = r[h][l];
        c[r[h][l]] = n(p)
      }
    c[h] = n(h)
  }
  for (l = 0; l < i.length; l++) c[i[l]] = n(i[l]);
  return c
}

function F3(t, e, n) {
  return n[e] != null ? n[e] : t.props[e]
}

function eD(t, e) {
  return vf(t.children, function(n) {
    return M.cloneElement(n, {
      onExited: e.bind(null, n),
      in: !0,
      appear: F3(n, "appear", t),
      enter: F3(n, "enter", t),
      exit: F3(n, "exit", t)
    })
  })
}

function tD(t, e, n) {
  var r = vf(t.children),
    i = ZM(e, r);
  return Object.keys(i).forEach(function(a) {
    var l = i[a];
    if (M.isValidElement(l)) {
      var c = a in e,
        h = a in r,
        p = e[a],
        m = M.isValidElement(p) && !p.props.in;
      h && (!c || m) ? i[a] = M.cloneElement(l, {
        onExited: n.bind(null, l),
        in: !0,
        exit: F3(l, "exit", t),
        enter: F3(l, "enter", t)
      }) : !h && c && !m ? i[a] = M.cloneElement(l, {
        in: !1
      }) : h && c && M.isValidElement(p) && (i[a] = M.cloneElement(l, {
        onExited: n.bind(null, l),
        in: p.props.in,
        exit: F3(l, "exit", t),
        enter: F3(l, "enter", t)
      }))
    }
  }), i
}
var nD = Object.values || function(t) {
    return Object.keys(t).map(function(e) {
      return t[e]
    })
  },
  rD = {
    component: "div",
    childFactory: function(e) {
      return e
    }
  },
  wf = function(t) {
    XM(e, t);

    function e(r, i) {
      var a;
      a = t.call(this, r, i) || this;
      var l = a.handleExited.bind(JM(a));
      return a.state = {
        contextValue: {
          isMounting: !0
        },
        handleExited: l,
        firstRender: !0
      }, a
    }
    var n = e.prototype;
    return n.componentDidMount = function() {
      this.mounted = !0, this.setState({
        contextValue: {
          isMounting: !1
        }
      })
    }, n.componentWillUnmount = function() {
      this.mounted = !1
    }, e.getDerivedStateFromProps = function(i, a) {
      var l = a.children,
        c = a.handleExited,
        h = a.firstRender;
      return {
        children: h ? eD(i, c) : tD(i, l, c),
        firstRender: !1
      }
    }, n.handleExited = function(i, a) {
      var l = vf(this.props.children);
      i.key in l || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(c) {
        var h = ku({}, c.children);
        return delete h[i.key], {
          children: h
        }
      }))
    }, n.render = function() {
      var i = this.props,
        a = i.component,
        l = i.childFactory,
        c = YM(i, ["component", "childFactory"]),
        h = this.state.contextValue,
        p = nD(this.state.children).map(l);
      return delete c.appear, delete c.enter, delete c.exit, a === null ? D3.createElement(Kg.Provider, {
        value: h
      }, p) : D3.createElement(Kg.Provider, {
        value: h
      }, D3.createElement(a, c, p))
    }, e
  }(D3.Component);
wf.propTypes = {};
wf.defaultProps = rD;

function iD(t) {
  const {
    className: e,
    classes: n,
    pulsate: r = !1,
    rippleX: i,
    rippleY: a,
    rippleSize: l,
    in: c,
    onExited: h,
    timeout: p
  } = t, [m, y] = M.useState(!1), v = pt(e, n.ripple, n.rippleVisible, r && n.ripplePulsate), C = {
    width: l,
    height: l,
    top: -(l / 2) + a,
    left: -(l / 2) + i
  }, P = pt(n.child, m && n.childLeaving, r && n.childPulsate);
  return !c && !m && y(!0), M.useEffect(() => {
    if (!c && h != null) {
      const k = setTimeout(h, p);
      return () => {
        clearTimeout(k)
      }
    }
  }, [h, c, p]), _.jsx("span", {
    className: v,
    style: C,
    children: _.jsx("span", {
      className: P
    })
  })
}
const zr = V2("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]),
  Bh = 550,
  sD = 80,
  oD = of `
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  aD = of `
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  lD = of `
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  uD = ur("span", {
    name: "MuiTouchRipple",
    slot: "Root"
  })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit"
  }),
  cD = ur(iD, {
    name: "MuiTouchRipple",
    slot: "Ripple"
  })`
  opacity: 0;
  position: absolute;

  &.${zr.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${oD};
    animation-duration: ${Bh}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${zr.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${zr.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${zr.childLeaving} {
    opacity: 0;
    animation-name: ${aD};
    animation-duration: ${Bh}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${zr.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${lD};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  dD = M.forwardRef(function(e, n) {
    const r = mi({
        props: e,
        name: "MuiTouchRipple"
      }),
      {
        center: i = !1,
        classes: a = {},
        className: l,
        ...c
      } = r,
      [h, p] = M.useState([]),
      m = M.useRef(0),
      y = M.useRef(null);
    M.useEffect(() => {
      y.current && (y.current(), y.current = null)
    }, [h]);
    const v = M.useRef(!1),
      C = OL(),
      P = M.useRef(null),
      k = M.useRef(null),
      R = M.useCallback(H => {
        const {
          pulsate: $,
          rippleX: X,
          rippleY: D,
          rippleSize: A,
          cb: j
        } = H;
        p(x => [...x, _.jsx(cD, {
          classes: {
            ripple: pt(a.ripple, zr.ripple),
            rippleVisible: pt(a.rippleVisible, zr.rippleVisible),
            ripplePulsate: pt(a.ripplePulsate, zr.ripplePulsate),
            child: pt(a.child, zr.child),
            childLeaving: pt(a.childLeaving, zr.childLeaving),
            childPulsate: pt(a.childPulsate, zr.childPulsate)
          },
          timeout: Bh,
          pulsate: $,
          rippleX: X,
          rippleY: D,
          rippleSize: A
        }, m.current)]), m.current += 1, y.current = j
      }, [a]),
      W = M.useCallback((H = {}, $ = {}, X = () => {}) => {
        const {
          pulsate: D = !1,
          center: A = i || $.pulsate,
          fakeElement: j = !1
        } = $;
        if ((H == null ? void 0 : H.type) === "mousedown" && v.current) {
          v.current = !1;
          return
        }(H == null ? void 0 : H.type) === "touchstart" && (v.current = !0);
        const x = j ? null : k.current,
          N = x ? x.getBoundingClientRect() : {
            width: 0,
            height: 0,
            left: 0,
            top: 0
          };
        let V, L, h1;
        if (A || H === void 0 || H.clientX === 0 && H.clientY === 0 || !H.clientX && !H.touches) V = Math.round(N.width / 2), L = Math.round(N.height / 2);
        else {
          const {
            clientX: A1,
            clientY: V1
          } = H.touches && H.touches.length > 0 ? H.touches[0] : H;
          V = Math.round(A1 - N.left), L = Math.round(V1 - N.top)
        }
        if (A) h1 = Math.sqrt((2 * N.width ** 2 + N.height ** 2) / 3), h1 % 2 === 0 && (h1 += 1);
        else {
          const A1 = Math.max(Math.abs((x ? x.clientWidth : 0) - V), V) * 2 + 2,
            V1 = Math.max(Math.abs((x ? x.clientHeight : 0) - L), L) * 2 + 2;
          h1 = Math.sqrt(A1 ** 2 + V1 ** 2)
        }
        H != null && H.touches ? P.current === null && (P.current = () => {
          R({
            pulsate: D,
            rippleX: V,
            rippleY: L,
            rippleSize: h1,
            cb: X
          })
        }, C.start(sD, () => {
          P.current && (P.current(), P.current = null)
        })) : R({
          pulsate: D,
          rippleX: V,
          rippleY: L,
          rippleSize: h1,
          cb: X
        })
      }, [i, R, C]),
      q = M.useCallback(() => {
        W({}, {
          pulsate: !0
        })
      }, [W]),
      U = M.useCallback((H, $) => {
        if (C.clear(), (H == null ? void 0 : H.type) === "touchend" && P.current) {
          P.current(), P.current = null, C.start(0, () => {
            U(H, $)
          });
          return
        }
        P.current = null, p(X => X.length > 0 ? X.slice(1) : X), y.current = $
      }, [C]);
    return M.useImperativeHandle(n, () => ({
      pulsate: q,
      start: W,
      stop: U
    }), [q, W, U]), _.jsx(uD, {
      className: pt(zr.root, a.root, l),
      ref: k,
      ...c,
      children: _.jsx(wf, {
        component: null,
        exit: !0,
        children: h
      })
    })
  });

function hD(t) {
  return pi("MuiButtonBase", t)
}
const fD = V2("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  pD = t => {
    const {
      disabled: e,
      focusVisible: n,
      focusVisibleClassName: r,
      classes: i
    } = t, l = a3({
      root: ["root", e && "disabled", n && "focusVisible"]
    }, hD, i);
    return n && r && (l.root += ` ${r}`), l
  },
  mD = ur("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": {
      borderStyle: "none"
    },
    [`&.${fD.disabled}`]: {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  }),
  eb = M.forwardRef(function(e, n) {
    const r = mi({
        props: e,
        name: "MuiButtonBase"
      }),
      {
        action: i,
        centerRipple: a = !1,
        children: l,
        className: c,
        component: h = "button",
        disabled: p = !1,
        disableRipple: m = !1,
        disableTouchRipple: y = !1,
        focusRipple: v = !1,
        focusVisibleClassName: C,
        LinkComponent: P = "a",
        onBlur: k,
        onClick: R,
        onContextMenu: W,
        onDragLeave: q,
        onFocus: U,
        onFocusVisible: H,
        onKeyDown: $,
        onKeyUp: X,
        onMouseDown: D,
        onMouseLeave: A,
        onMouseUp: j,
        onTouchEnd: x,
        onTouchMove: N,
        onTouchStart: V,
        tabIndex: L = 0,
        TouchRippleProps: h1,
        touchRippleRef: A1,
        type: V1,
        ...k1
      } = r,
      c1 = M.useRef(null),
      y1 = KM(),
      f1 = Iu(y1.ref, A1),
      [K, s1] = M.useState(!1);
    p && K && s1(!1), M.useImperativeHandle(i, () => ({
      focusVisible: () => {
        s1(!0), c1.current.focus()
      }
    }), []);
    const E1 = y1.shouldMount && !m && !p;
    M.useEffect(() => {
      K && v && !m && y1.pulsate()
    }, [m, v, K, y1]);
    const M1 = ii(y1, "start", D, y),
      F1 = ii(y1, "stop", W, y),
      $1 = ii(y1, "stop", q, y),
      K1 = ii(y1, "stop", j, y),
      B1 = ii(y1, "stop", T1 => {
        K && T1.preventDefault(), A && A(T1)
      }, y),
      ee = ii(y1, "start", V, y),
      me = ii(y1, "stop", x, y),
      he = ii(y1, "stop", N, y),
      be = ii(y1, "stop", T1 => {
        jg(T1.target) || s1(!1), k && k(T1)
      }, !1),
      J1 = H3(T1 => {
        c1.current || (c1.current = T1.currentTarget), jg(T1.target) && (s1(!0), H && H(T1)), U && U(T1)
      }),
      ie = () => {
        const T1 = c1.current;
        return h && h !== "button" && !(T1.tagName === "A" && T1.href)
      },
      Ie = H3(T1 => {
        v && !T1.repeat && K && T1.key === " " && y1.stop(T1, () => {
          y1.start(T1)
        }), T1.target === T1.currentTarget && ie() && T1.key === " " && T1.preventDefault(), $ && $(T1), T1.target === T1.currentTarget && ie() && T1.key === "Enter" && !p && (T1.preventDefault(), R && R(T1))
      }),
      He = H3(T1 => {
        v && T1.key === " " && K && !T1.defaultPrevented && y1.stop(T1, () => {
          y1.pulsate(T1)
        }), X && X(T1), R && T1.target === T1.currentTarget && ie() && T1.key === " " && !T1.defaultPrevented && R(T1)
      });
    let qe = h;
    qe === "button" && (k1.href || k1.to) && (qe = P);
    const Qe = {};
    qe === "button" ? (Qe.type = V1 === void 0 ? "button" : V1, Qe.disabled = p) : (!k1.href && !k1.to && (Qe.role = "button"), p && (Qe["aria-disabled"] = p));
    const ot = Iu(n, c1),
      It = {
        ...r,
        centerRipple: a,
        component: h,
        disabled: p,
        disableRipple: m,
        disableTouchRipple: y,
        focusRipple: v,
        tabIndex: L,
        focusVisible: K
      },
      _e = pD(It);
    return _.jsxs(mD, {
      as: qe,
      className: pt(_e.root, c),
      ownerState: It,
      onBlur: be,
      onClick: R,
      onContextMenu: F1,
      onFocus: J1,
      onKeyDown: Ie,
      onKeyUp: He,
      onMouseDown: M1,
      onMouseLeave: B1,
      onMouseUp: K1,
      onDragLeave: $1,
      onTouchEnd: me,
      onTouchMove: he,
      onTouchStart: ee,
      ref: ot,
      tabIndex: p ? -1 : L,
      type: V1,
      ...Qe,
      ...k1,
      children: [l, E1 ? _.jsx(dD, {
        ref: f1,
        center: a,
        ...h1
      }) : null]
    })
  });

function ii(t, e, n, r = !1) {
  return H3(i => (n && n(i), r || t[e](i), !0))
}

function gD(t) {
  return pi("MuiTabScrollButton", t)
}
const yD = V2("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]),
  vD = t => {
    const {
      classes: e,
      orientation: n,
      disabled: r
    } = t;
    return a3({
      root: ["root", n, r && "disabled"]
    }, gD, e)
  },
  wD = ur(eb, {
    name: "MuiTabScrollButton",
    slot: "Root",
    overridesResolver: (t, e) => {
      const {
        ownerState: n
      } = t;
      return [e.root, n.orientation && e[n.orientation]]
    }
  })({
    width: 40,
    flexShrink: 0,
    opacity: .8,
    [`&.${yD.disabled}`]: {
      opacity: 0
    },
    variants: [{
      props: {
        orientation: "vertical"
      },
      style: {
        width: "100%",
        height: 40,
        "& svg": {
          transform: "var(--TabScrollButton-svgRotate)"
        }
      }
    }]
  }),
  bD = M.forwardRef(function(e, n) {
    const r = mi({
        props: e,
        name: "MuiTabScrollButton"
      }),
      {
        className: i,
        slots: a = {},
        slotProps: l = {},
        direction: c,
        orientation: h,
        disabled: p,
        ...m
      } = r,
      y = Ww(),
      v = {
        isRtl: y,
        ...r
      },
      C = vD(v),
      P = a.StartScrollButtonIcon ?? qM,
      k = a.EndScrollButtonIcon ?? GM,
      R = Ru({
        elementType: P,
        externalSlotProps: l.startScrollButtonIcon,
        additionalProps: {
          fontSize: "small"
        },
        ownerState: v
      }),
      W = Ru({
        elementType: k,
        externalSlotProps: l.endScrollButtonIcon,
        additionalProps: {
          fontSize: "small"
        },
        ownerState: v
      });
    return _.jsx(wD, {
      component: "div",
      className: pt(C.root, i),
      ref: n,
      role: null,
      ownerState: v,
      tabIndex: null,
      ...m,
      style: {
        ...m.style,
        ...h === "vertical" && {
          "--TabScrollButton-svgRotate": `rotate(${y?-90:90}deg)`
        }
      },
      children: c === "left" ? _.jsx(P, {
        ...R
      }) : _.jsx(k, {
        ...W
      })
    })
  });

function _D(t) {
  return pi("MuiTabs", t)
}
const N4 = V2("MuiTabs", ["root", "vertical", "list", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]);

function Ys(t, e) {
  const {
    className: n,
    elementType: r,
    ownerState: i,
    externalForwardedProps: a,
    internalForwardedProps: l,
    shouldForwardComponentProp: c = !1,
    ...h
  } = e, {
    component: p,
    slots: m = {
      [t]: void 0
    },
    slotProps: y = {
      [t]: void 0
    },
    ...v
  } = a, C = m[t] || r, P = Uw(y[t], i), {
    props: {
      component: k,
      ...R
    },
    internalRef: W
  } = zw({
    className: n,
    ...h,
    externalForwardedProps: t === "root" ? v : void 0,
    externalSlotProps: P
  }), q = Iu(W, P == null ? void 0 : P.ref, e.ref), U = t === "root" ? k || p : k, H = $w(C, {
    ...t === "root" && !p && !m[t] && l,
    ...t !== "root" && !m[t] && l,
    ...R,
    ...U && !c && {
      as: U
    },
    ...U && c && {
      component: U
    },
    ref: q
  }, i);
  return [C, H]
}
const Qg = (t, e) => t === e ? t.firstChild : e && e.nextElementSibling ? e.nextElementSibling : t.firstChild,
  Yg = (t, e) => t === e ? t.lastChild : e && e.previousElementSibling ? e.previousElementSibling : t.lastChild,
  Vl = (t, e, n) => {
    let r = !1,
      i = n(t, e);
    for (; i;) {
      if (i === t.firstChild) {
        if (r) return;
        r = !0
      }
      const a = i.disabled || i.getAttribute("aria-disabled") === "true";
      if (!i.hasAttribute("tabindex") || a) i = n(t, i);
      else {
        i.focus();
        return
      }
    }
  },
  xD = t => {
    const {
      vertical: e,
      fixed: n,
      hideScrollbar: r,
      scrollableX: i,
      scrollableY: a,
      centered: l,
      scrollButtonsHideMobile: c,
      classes: h
    } = t;
    return a3({
      root: ["root", e && "vertical"],
      scroller: ["scroller", n && "fixed", r && "hideScrollbar", i && "scrollableX", a && "scrollableY"],
      list: ["list", "flexContainer", e && "flexContainerVertical", e && "vertical", l && "centered"],
      indicator: ["indicator"],
      scrollButtons: ["scrollButtons", c && "scrollButtonsHideMobile"],
      scrollableX: [i && "scrollableX"],
      hideScrollbar: [r && "hideScrollbar"]
    }, _D, h)
  },
  SD = ur("div", {
    name: "MuiTabs",
    slot: "Root",
    overridesResolver: (t, e) => {
      const {
        ownerState: n
      } = t;
      return [{
        [`& .${N4.scrollButtons}`]: e.scrollButtons
      }, {
        [`& .${N4.scrollButtons}`]: n.scrollButtonsHideMobile && e.scrollButtonsHideMobile
      }, e.root, n.vertical && e.vertical]
    }
  })(ls(({
    theme: t
  }) => ({
    overflow: "hidden",
    minHeight: 48,
    WebkitOverflowScrolling: "touch",
    display: "flex",
    variants: [{
      props: ({
        ownerState: e
      }) => e.vertical,
      style: {
        flexDirection: "column"
      }
    }, {
      props: ({
        ownerState: e
      }) => e.scrollButtonsHideMobile,
      style: {
        [`& .${N4.scrollButtons}`]: {
          [t.breakpoints.down("sm")]: {
            display: "none"
          }
        }
      }
    }]
  }))),
  ED = ur("div", {
    name: "MuiTabs",
    slot: "Scroller",
    overridesResolver: (t, e) => {
      const {
        ownerState: n
      } = t;
      return [e.scroller, n.fixed && e.fixed, n.hideScrollbar && e.hideScrollbar, n.scrollableX && e.scrollableX, n.scrollableY && e.scrollableY]
    }
  })({
    position: "relative",
    display: "inline-block",
    flex: "1 1 auto",
    whiteSpace: "nowrap",
    variants: [{
      props: ({
        ownerState: t
      }) => t.fixed,
      style: {
        overflowX: "hidden",
        width: "100%"
      }
    }, {
      props: ({
        ownerState: t
      }) => t.hideScrollbar,
      style: {
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }
    }, {
      props: ({
        ownerState: t
      }) => t.scrollableX,
      style: {
        overflowX: "auto",
        overflowY: "hidden"
      }
    }, {
      props: ({
        ownerState: t
      }) => t.scrollableY,
      style: {
        overflowY: "auto",
        overflowX: "hidden"
      }
    }]
  }),
  TD = ur("div", {
    name: "MuiTabs",
    slot: "List",
    overridesResolver: (t, e) => {
      const {
        ownerState: n
      } = t;
      return [e.list, e.flexContainer, n.vertical && e.flexContainerVertical, n.centered && e.centered]
    }
  })({
    display: "flex",
    variants: [{
      props: ({
        ownerState: t
      }) => t.vertical,
      style: {
        flexDirection: "column"
      }
    }, {
      props: ({
        ownerState: t
      }) => t.centered,
      style: {
        justifyContent: "center"
      }
    }]
  }),
  CD = ur("span", {
    name: "MuiTabs",
    slot: "Indicator",
    overridesResolver: (t, e) => e.indicator
  })(ls(({
    theme: t
  }) => ({
    position: "absolute",
    height: 2,
    bottom: 0,
    width: "100%",
    transition: t.transitions.create(),
    variants: [{
      props: {
        indicatorColor: "primary"
      },
      style: {
        backgroundColor: (t.vars || t).palette.primary.main
      }
    }, {
      props: {
        indicatorColor: "secondary"
      },
      style: {
        backgroundColor: (t.vars || t).palette.secondary.main
      }
    }, {
      props: ({
        ownerState: e
      }) => e.vertical,
      style: {
        height: "100%",
        width: 2,
        right: 0
      }
    }]
  }))),
  kD = ur(HM)({
    overflowX: "auto",
    overflowY: "hidden",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  }),
  Xg = {},
  PD = M.forwardRef(function(e, n) {
    const r = mi({
        props: e,
        name: "MuiTabs"
      }),
      i = yf(),
      a = Ww(),
      {
        "aria-label": l,
        "aria-labelledby": c,
        action: h,
        centered: p = !1,
        children: m,
        className: y,
        component: v = "div",
        allowScrollButtonsMobile: C = !1,
        indicatorColor: P = "primary",
        onChange: k,
        orientation: R = "horizontal",
        ScrollButtonComponent: W,
        scrollButtons: q = "auto",
        selectionFollowsFocus: U,
        slots: H = {},
        slotProps: $ = {},
        TabIndicatorProps: X = {},
        TabScrollButtonProps: D = {},
        textColor: A = "primary",
        value: j,
        variant: x = "standard",
        visibleScrollbar: N = !1,
        ...V
      } = r,
      L = x === "scrollable",
      h1 = R === "vertical",
      A1 = h1 ? "scrollTop" : "scrollLeft",
      V1 = h1 ? "top" : "left",
      k1 = h1 ? "bottom" : "right",
      c1 = h1 ? "clientHeight" : "clientWidth",
      y1 = h1 ? "height" : "width",
      f1 = {
        ...r,
        component: v,
        allowScrollButtonsMobile: C,
        indicatorColor: P,
        orientation: R,
        vertical: h1,
        scrollButtons: q,
        textColor: A,
        variant: x,
        visibleScrollbar: N,
        fixed: !L,
        hideScrollbar: L && !N,
        scrollableX: L && !h1,
        scrollableY: L && h1,
        centered: p && !L,
        scrollButtonsHideMobile: !C
      },
      K = xD(f1),
      s1 = Ru({
        elementType: H.StartScrollButtonIcon,
        externalSlotProps: $.startScrollButtonIcon,
        ownerState: f1
      }),
      E1 = Ru({
        elementType: H.EndScrollButtonIcon,
        externalSlotProps: $.endScrollButtonIcon,
        ownerState: f1
      }),
      [M1, F1] = M.useState(!1),
      [$1, K1] = M.useState(Xg),
      [B1, ee] = M.useState(!1),
      [me, he] = M.useState(!1),
      [be, J1] = M.useState(!1),
      [ie, Ie] = M.useState({
        overflow: "hidden",
        scrollbarWidth: 0
      }),
      He = new Map,
      qe = M.useRef(null),
      Qe = M.useRef(null),
      ot = {
        slots: H,
        slotProps: {
          indicator: X,
          scrollButton: D,
          ...$
        }
      },
      It = () => {
        const P1 = qe.current;
        let R1;
        if (P1) {
          const ce = P1.getBoundingClientRect();
          R1 = {
            clientWidth: P1.clientWidth,
            scrollLeft: P1.scrollLeft,
            scrollTop: P1.scrollTop,
            scrollWidth: P1.scrollWidth,
            top: ce.top,
            bottom: ce.bottom,
            left: ce.left,
            right: ce.right
          }
        }
        let ve;
        if (P1 && j !== !1) {
          const ce = Qe.current.children;
          if (ce.length > 0) {
            const Ne = ce[He.get(j)];
            ve = Ne ? Ne.getBoundingClientRect() : null
          }
        }
        return {
          tabsMeta: R1,
          tabMeta: ve
        }
      },
      _e = H3(() => {
        const {
          tabsMeta: P1,
          tabMeta: R1
        } = It();
        let ve = 0,
          ce;
        h1 ? (ce = "top", R1 && P1 && (ve = R1.top - P1.top + P1.scrollTop)) : (ce = a ? "right" : "left", R1 && P1 && (ve = (a ? -1 : 1) * (R1[ce] - P1[ce] + P1.scrollLeft)));
        const Ne = {
          [ce]: ve,
          [y1]: R1 ? R1[y1] : 0
        };
        if (typeof $1[ce] != "number" || typeof $1[y1] != "number") K1(Ne);
        else {
          const Vt = Math.abs($1[ce] - Ne[ce]),
            sn = Math.abs($1[y1] - Ne[y1]);
          (Vt >= 1 || sn >= 1) && K1(Ne)
        }
      }),
      T1 = (P1, {
        animation: R1 = !0
      } = {}) => {
        R1 ? BM(A1, qe.current, P1, {
          duration: i.transitions.duration.standard
        }) : qe.current[A1] = P1
      },
      Fn = P1 => {
        let R1 = qe.current[A1];
        h1 ? R1 += P1 : R1 += P1 * (a ? -1 : 1), T1(R1)
      },
      wt = () => {
        const P1 = qe.current[c1];
        let R1 = 0;
        const ve = Array.from(Qe.current.children);
        for (let ce = 0; ce < ve.length; ce += 1) {
          const Ne = ve[ce];
          if (R1 + Ne[c1] > P1) {
            ce === 0 && (R1 = P1);
            break
          }
          R1 += Ne[c1]
        }
        return R1
      },
      v1 = () => {
        Fn(-1 * wt())
      },
      J = () => {
        Fn(wt())
      },
      [p1, {
        onChange: w1,
        ...se
      }] = Ys("scrollbar", {
        className: pt(K.scrollableX, K.hideScrollbar),
        elementType: kD,
        shouldForwardComponentProp: !0,
        externalForwardedProps: ot,
        ownerState: f1
      }),
      oe = M.useCallback(P1 => {
        w1 == null || w1(P1), Ie({
          overflow: null,
          scrollbarWidth: P1
        })
      }, [w1]),
      [ye, i1] = Ys("scrollButtons", {
        className: pt(K.scrollButtons, D.className),
        elementType: bD,
        externalForwardedProps: ot,
        ownerState: f1,
        additionalProps: {
          orientation: R,
          slots: {
            StartScrollButtonIcon: H.startScrollButtonIcon || H.StartScrollButtonIcon,
            EndScrollButtonIcon: H.endScrollButtonIcon || H.EndScrollButtonIcon
          },
          slotProps: {
            startScrollButtonIcon: s1,
            endScrollButtonIcon: E1
          }
        }
      }),
      d1 = () => {
        const P1 = {};
        P1.scrollbarSizeListener = L ? _.jsx(p1, {
          ...se,
          onChange: oe
        }) : null;
        const ve = L && (q === "auto" && (B1 || me) || q === !0);
        return P1.scrollButtonStart = ve ? _.jsx(ye, {
          direction: a ? "right" : "left",
          onClick: v1,
          disabled: !B1,
          ...i1
        }) : null, P1.scrollButtonEnd = ve ? _.jsx(ye, {
          direction: a ? "left" : "right",
          onClick: J,
          disabled: !me,
          ...i1
        }) : null, P1
      },
      j1 = H3(P1 => {
        const {
          tabsMeta: R1,
          tabMeta: ve
        } = It();
        if (!(!ve || !R1)) {
          if (ve[V1] < R1[V1]) {
            const ce = R1[A1] + (ve[V1] - R1[V1]);
            T1(ce, {
              animation: P1
            })
          } else if (ve[k1] > R1[k1]) {
            const ce = R1[A1] + (ve[k1] - R1[k1]);
            T1(ce, {
              animation: P1
            })
          }
        }
      }),
      L1 = H3(() => {
        L && q !== !1 && J1(!be)
      });
    M.useEffect(() => {
      const P1 = jw(() => {
        qe.current && _e()
      });
      let R1;
      const ve = Vt => {
          Vt.forEach(sn => {
            sn.removedNodes.forEach(Ft => {
              R1 == null || R1.unobserve(Ft)
            }), sn.addedNodes.forEach(Ft => {
              R1 == null || R1.observe(Ft)
            })
          }), P1(), L1()
        },
        ce = Fw(qe.current);
      ce.addEventListener("resize", P1);
      let Ne;
      return typeof ResizeObserver < "u" && (R1 = new ResizeObserver(P1), Array.from(Qe.current.children).forEach(Vt => {
        R1.observe(Vt)
      })), typeof MutationObserver < "u" && (Ne = new MutationObserver(ve), Ne.observe(Qe.current, {
        childList: !0
      })), () => {
        P1.clear(), ce.removeEventListener("resize", P1), Ne == null || Ne.disconnect(), R1 == null || R1.disconnect()
      }
    }, [_e, L1]), M.useEffect(() => {
      const P1 = Array.from(Qe.current.children),
        R1 = P1.length;
      if (typeof IntersectionObserver < "u" && R1 > 0 && L && q !== !1) {
        const ve = P1[0],
          ce = P1[R1 - 1],
          Ne = {
            root: qe.current,
            threshold: .99
          },
          Vt = hn => {
            ee(!hn[0].isIntersecting)
          },
          sn = new IntersectionObserver(Vt, Ne);
        sn.observe(ve);
        const Ft = hn => {
            he(!hn[0].isIntersecting)
          },
          kr = new IntersectionObserver(Ft, Ne);
        return kr.observe(ce), () => {
          sn.disconnect(), kr.disconnect()
        }
      }
    }, [L, q, be, m == null ? void 0 : m.length]), M.useEffect(() => {
      F1(!0)
    }, []), M.useEffect(() => {
      _e()
    }), M.useEffect(() => {
      j1(Xg !== $1)
    }, [j1, $1]), M.useImperativeHandle(h, () => ({
      updateIndicator: _e,
      updateScrollButtons: L1
    }), [_e, L1]);
    const [D1, le] = Ys("indicator", {
      className: pt(K.indicator, X.className),
      elementType: CD,
      externalForwardedProps: ot,
      ownerState: f1,
      additionalProps: {
        style: $1
      }
    }), Pe = _.jsx(D1, {
      ...le
    });
    let Te = 0;
    const Se = M.Children.map(m, P1 => {
        if (!M.isValidElement(P1)) return null;
        const R1 = P1.props.value === void 0 ? Te : P1.props.value;
        He.set(R1, Te);
        const ve = R1 === j;
        return Te += 1, M.cloneElement(P1, {
          fullWidth: x === "fullWidth",
          indicator: ve && !M1 && Pe,
          selected: ve,
          selectionFollowsFocus: U,
          onChange: k,
          textColor: A,
          value: R1,
          ...Te === 1 && j === !1 && !P1.props.tabIndex ? {
            tabIndex: 0
          } : {}
        })
      }),
      Re = P1 => {
        if (P1.altKey || P1.shiftKey || P1.ctrlKey || P1.metaKey) return;
        const R1 = Qe.current,
          ve = Vw(R1).activeElement;
        if (ve.getAttribute("role") !== "tab") return;
        let Ne = R === "horizontal" ? "ArrowLeft" : "ArrowUp",
          Vt = R === "horizontal" ? "ArrowRight" : "ArrowDown";
        switch (R === "horizontal" && a && (Ne = "ArrowRight", Vt = "ArrowLeft"), P1.key) {
          case Ne:
            P1.preventDefault(), Vl(R1, ve, Yg);
            break;
          case Vt:
            P1.preventDefault(), Vl(R1, ve, Qg);
            break;
          case "Home":
            P1.preventDefault(), Vl(R1, null, Qg);
            break;
          case "End":
            P1.preventDefault(), Vl(R1, null, Yg);
            break
        }
      },
      Ce = d1(),
      [tt, ct] = Ys("root", {
        ref: n,
        className: pt(K.root, y),
        elementType: SD,
        externalForwardedProps: {
          ...ot,
          ...V,
          component: v
        },
        ownerState: f1
      }),
      [rn, nt] = Ys("scroller", {
        ref: qe,
        className: K.scroller,
        elementType: ED,
        externalForwardedProps: ot,
        ownerState: f1,
        additionalProps: {
          style: {
            overflow: ie.overflow,
            [h1 ? `margin${a?"Left":"Right"}` : "marginBottom"]: N ? void 0 : -ie.scrollbarWidth
          }
        }
      }),
      [Cr, En] = Ys("list", {
        ref: Qe,
        className: pt(K.list, K.flexContainer),
        elementType: TD,
        externalForwardedProps: ot,
        ownerState: f1,
        getSlotProps: P1 => ({
          ...P1,
          onKeyDown: R1 => {
            var ve;
            Re(R1), (ve = P1.onKeyDown) == null || ve.call(P1, R1)
          }
        })
      });
    return _.jsxs(tt, {
      ...ct,
      children: [Ce.scrollButtonStart, Ce.scrollbarSizeListener, _.jsxs(rn, {
        ...nt,
        children: [_.jsx(Cr, {
          "aria-label": l,
          "aria-labelledby": c,
          "aria-orientation": R === "vertical" ? "vertical" : null,
          role: "tablist",
          ...En,
          children: Se
        }), M1 && Pe]
      }), Ce.scrollButtonEnd]
    })
  });

function AD(t) {
  return pi("MuiTab", t)
}
const Fr = V2("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper", "icon"]),
  ID = t => {
    const {
      classes: e,
      textColor: n,
      fullWidth: r,
      wrapped: i,
      icon: a,
      label: l,
      selected: c,
      disabled: h
    } = t, p = {
      root: ["root", a && l && "labelIcon", `textColor${Kn(n)}`, r && "fullWidth", i && "wrapped", c && "selected", h && "disabled"],
      icon: ["iconWrapper", "icon"]
    };
    return a3(p, AD, e)
  },
  RD = ur(eb, {
    name: "MuiTab",
    slot: "Root",
    overridesResolver: (t, e) => {
      const {
        ownerState: n
      } = t;
      return [e.root, n.label && n.icon && e.labelIcon, e[`textColor${Kn(n.textColor)}`], n.fullWidth && e.fullWidth, n.wrapped && e.wrapped, {
        [`& .${Fr.iconWrapper}`]: e.iconWrapper
      }, {
        [`& .${Fr.icon}`]: e.icon
      }]
    }
  })(ls(({
    theme: t
  }) => ({
    ...t.typography.button,
    maxWidth: 360,
    minWidth: 90,
    position: "relative",
    minHeight: 48,
    flexShrink: 0,
    padding: "12px 16px",
    overflow: "hidden",
    whiteSpace: "normal",
    textAlign: "center",
    lineHeight: 1.25,
    variants: [{
      props: ({
        ownerState: e
      }) => e.label && (e.iconPosition === "top" || e.iconPosition === "bottom"),
      style: {
        flexDirection: "column"
      }
    }, {
      props: ({
        ownerState: e
      }) => e.label && e.iconPosition !== "top" && e.iconPosition !== "bottom",
      style: {
        flexDirection: "row"
      }
    }, {
      props: ({
        ownerState: e
      }) => e.icon && e.label,
      style: {
        minHeight: 72,
        paddingTop: 9,
        paddingBottom: 9
      }
    }, {
      props: ({
        ownerState: e,
        iconPosition: n
      }) => e.icon && e.label && n === "top",
      style: {
        [`& > .${Fr.icon}`]: {
          marginBottom: 6
        }
      }
    }, {
      props: ({
        ownerState: e,
        iconPosition: n
      }) => e.icon && e.label && n === "bottom",
      style: {
        [`& > .${Fr.icon}`]: {
          marginTop: 6
        }
      }
    }, {
      props: ({
        ownerState: e,
        iconPosition: n
      }) => e.icon && e.label && n === "start",
      style: {
        [`& > .${Fr.icon}`]: {
          marginRight: t.spacing(1)
        }
      }
    }, {
      props: ({
        ownerState: e,
        iconPosition: n
      }) => e.icon && e.label && n === "end",
      style: {
        [`& > .${Fr.icon}`]: {
          marginLeft: t.spacing(1)
        }
      }
    }, {
      props: {
        textColor: "inherit"
      },
      style: {
        color: "inherit",
        opacity: .6,
        [`&.${Fr.selected}`]: {
          opacity: 1
        },
        [`&.${Fr.disabled}`]: {
          opacity: (t.vars || t).palette.action.disabledOpacity
        }
      }
    }, {
      props: {
        textColor: "primary"
      },
      style: {
        color: (t.vars || t).palette.text.secondary,
        [`&.${Fr.selected}`]: {
          color: (t.vars || t).palette.primary.main
        },
        [`&.${Fr.disabled}`]: {
          color: (t.vars || t).palette.text.disabled
        }
      }
    }, {
      props: {
        textColor: "secondary"
      },
      style: {
        color: (t.vars || t).palette.text.secondary,
        [`&.${Fr.selected}`]: {
          color: (t.vars || t).palette.secondary.main
        },
        [`&.${Fr.disabled}`]: {
          color: (t.vars || t).palette.text.disabled
        }
      }
    }, {
      props: ({
        ownerState: e
      }) => e.fullWidth,
      style: {
        flexShrink: 1,
        flexGrow: 1,
        flexBasis: 0,
        maxWidth: "none"
      }
    }, {
      props: ({
        ownerState: e
      }) => e.wrapped,
      style: {
        fontSize: t.typography.pxToRem(12)
      }
    }]
  }))),
  L4 = M.forwardRef(function(e, n) {
    const r = mi({
        props: e,
        name: "MuiTab"
      }),
      {
        className: i,
        disabled: a = !1,
        disableFocusRipple: l = !1,
        fullWidth: c,
        icon: h,
        iconPosition: p = "top",
        indicator: m,
        label: y,
        onChange: v,
        onClick: C,
        onFocus: P,
        selected: k,
        selectionFollowsFocus: R,
        textColor: W = "inherit",
        value: q,
        wrapped: U = !1,
        ...H
      } = r,
      $ = {
        ...r,
        disabled: a,
        disableFocusRipple: l,
        selected: k,
        icon: !!h,
        iconPosition: p,
        label: !!y,
        fullWidth: c,
        textColor: W,
        wrapped: U
      },
      X = ID($),
      D = h && y && M.isValidElement(h) ? M.cloneElement(h, {
        className: pt(X.icon, h.props.className)
      }) : h,
      A = x => {
        !k && v && v(x, q), C && C(x)
      },
      j = x => {
        R && !k && v && v(x, q), P && P(x)
      };
    return _.jsxs(RD, {
      focusRipple: !l,
      className: pt(X.root, i),
      ref: n,
      role: "tab",
      "aria-selected": k,
      disabled: a,
      onClick: A,
      onFocus: j,
      ownerState: $,
      tabIndex: k ? 0 : -1,
      ...H,
      children: [p === "top" || p === "start" ? _.jsxs(M.Fragment, {
        children: [D, y]
      }) : _.jsxs(M.Fragment, {
        children: [y, D]
      }), m]
    })
  });

function ND(t) {
  return pi("MuiTypography", t)
}
V2("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const LD = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0
  },
  MD = PM(),
  DD = t => {
    const {
      align: e,
      gutterBottom: n,
      noWrap: r,
      paragraph: i,
      variant: a,
      classes: l
    } = t, c = {
      root: ["root", a, t.align !== "inherit" && `align${Kn(e)}`, n && "gutterBottom", r && "noWrap", i && "paragraph"]
    };
    return a3(c, ND, l)
  },
  OD = ur("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (t, e) => {
      const {
        ownerState: n
      } = t;
      return [e.root, n.variant && e[n.variant], n.align !== "inherit" && e[`align${Kn(n.align)}`], n.noWrap && e.noWrap, n.gutterBottom && e.gutterBottom, n.paragraph && e.paragraph]
    }
  })(ls(({
    theme: t
  }) => {
    var e;
    return {
      margin: 0,
      variants: [{
        props: {
          variant: "inherit"
        },
        style: {
          font: "inherit",
          lineHeight: "inherit",
          letterSpacing: "inherit"
        }
      }, ...Object.entries(t.typography).filter(([n, r]) => n !== "inherit" && r && typeof r == "object").map(([n, r]) => ({
        props: {
          variant: n
        },
        style: r
      })), ...Object.entries(t.palette).filter(Jw()).map(([n]) => ({
        props: {
          color: n
        },
        style: {
          color: (t.vars || t).palette[n].main
        }
      })), ...Object.entries(((e = t.palette) == null ? void 0 : e.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
        props: {
          color: `text${Kn(n)}`
        },
        style: {
          color: (t.vars || t).palette.text[n]
        }
      })), {
        props: ({
          ownerState: n
        }) => n.align !== "inherit",
        style: {
          textAlign: "var(--Typography-textAlign)"
        }
      }, {
        props: ({
          ownerState: n
        }) => n.noWrap,
        style: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }
      }, {
        props: ({
          ownerState: n
        }) => n.gutterBottom,
        style: {
          marginBottom: "0.35em"
        }
      }, {
        props: ({
          ownerState: n
        }) => n.paragraph,
        style: {
          marginBottom: 16
        }
      }]
    }
  })),
  Jg = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p"
  },
  Ca = M.forwardRef(function(e, n) {
    const {
      color: r,
      ...i
    } = mi({
      props: e,
      name: "MuiTypography"
    }), a = !LD[r], l = MD({
      ...i,
      ...a && {
        color: r
      }
    }), {
      align: c = "inherit",
      className: h,
      component: p,
      gutterBottom: m = !1,
      noWrap: y = !1,
      paragraph: v = !1,
      variant: C = "body1",
      variantMapping: P = Jg,
      ...k
    } = l, R = {
      ...l,
      align: c,
      color: r,
      className: h,
      component: p,
      gutterBottom: m,
      noWrap: y,
      paragraph: v,
      variant: C,
      variantMapping: P
    }, W = p || (v ? "p" : P[C] || Jg[C]) || "span", q = DD(R);
    return _.jsx(OD, {
      as: W,
      ref: n,
      className: pt(q.root, h),
      ...k,
      ownerState: R,
      style: {
        ...c !== "inherit" && {
          "--Typography-textAlign": c
        },
        ...k.style
      }
    })
  }),
  jD = V2("MuiBox", ["root"]),
  VD = Yw(),
  M3 = wL({
    themeId: J9,
    defaultTheme: VD,
    defaultClassName: jD.root,
    generateClassName: Rw.generate
  });
var M4 = {
    exports: {}
  },