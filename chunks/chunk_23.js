    }, this.initialValues = n.initial ? {
      ...h
    } : {}, this.renderState = p, this.parent = e, this.props = n, this.presenceContext = r, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = c, this.blockInitialAnimation = !!a, this.isControllingVariants = Nc(n), this.isVariantNode = __(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
    const {
      willChange: y,
      ...v
    } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const C in v) {
      const P = v[C];
      h[C] !== void 0 && jn(P) && P.set(h[C], !1)
    }
  }
  mount(e) {
    this.current = e, Ny.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), zx.current || PW(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : o9.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
  }
  unmount() {
    Ny.delete(this.current), this.projection && this.projection.unmount(), i3(this.notifyUpdate), i3(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = !1)
    }
    this.current = null
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const r = ds.has(e),
      i = n.on("change", c => {
        this.latestValues[e] = c, this.props.onUpdate && gt.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0)
      }),
      a = n.on("renderRequest", this.scheduleRender);
    let l;
    window.MotionCheckAppearSync && (l = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      i(), a(), l && l(), n.owner && n.stop()
    })
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
  }
  updateFeatures() {
    let e = "animation";
    for (e in Eo) {
      const n = Eo[e];
      if (!n) continue;
      const {
        isEnabled: r,
        Feature: i
      } = n;
      if (!this.features[e] && i && r(this.props) && (this.features[e] = new i(this)), this.features[e]) {
        const a = this.features[e];
        a.isMounted ? a.update() : (a.mount(), a.isMounted = !0)
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props)
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Lt()
  }
  getStaticValue(e) {
    return this.latestValues[e]
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n
  }
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < Ly.length; r++) {
      const i = Ly[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const a = "on" + i,
        l = e[a];
      l && (this.propEventSubscriptions[i] = this.on(i, l))
    }
    this.prevMotionValues = RW(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
  }
  getProps() {
    return this.props
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0
  }
  getDefaultTransition() {
    return this.props.transition
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n) return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e)
  }
  addValue(e, n) {
    const r = this.values.get(e);
    n !== r && (r && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get())
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
  }
  hasValue(e) {
    return this.values.has(e)
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let r = this.values.get(e);
    return r === void 0 && n !== void 0 && (r = o0(n === null ? void 0 : n, {
      owner: this
    }), this.addValue(e, r)), r
  }
  readValue(e, n) {
    var r;
    let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (r = this.getBaseTargetFromProps(this.props, e)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, e, this.options);
    return i != null && (typeof i == "string" && (cx(i) || tx(i)) ? i = parseFloat(i) : !IW(i) && s3.test(n) && (i = ax(e, n)), this.setBaseTarget(e, jn(i) ? i.get() : i)), jn(i) ? i.get() : i
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n
  }
  getBaseTarget(e) {
    var n;
    const {
      initial: r
    } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const l = Yf(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      l && (i = l[e])
    }
    if (r && i !== void 0) return i;
    const a = this.getBaseTargetFromProps(this.props, e);
    return a !== void 0 && !jn(a) ? a : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e]
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new c5), this.events[e].add(n)
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n)
  }
}
class Ux extends NW {
  constructor() {
    super(...arguments), this.KeyframeResolver = px
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0
  }
  removeValueFromRenderState(e, {
    vars: n,
    style: r
  }) {
    delete n[e], delete r[e]
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const {
      children: e
    } = this.props;
    jn(e) && (this.childSubscription = e.on("change", n => {
      this.current && (this.current.textContent = `${n}`)
    }))
  }
}

function LW(t) {
  return window.getComputedStyle(t)
}
class MW extends Ux {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = I_
  }
  readValueFromInstance(e, n) {
    if (ds.has(n)) {
      const r = m5(n);
      return r && r.default || 0
    } else {
      const r = LW(e),
        i = (k_(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i
    }
  }
  measureInstanceViewportBox(e, {
    transformPagePoint: n
  }) {
    return Rx(e, n)
  }
  build(e, n, r) {
    Zf(e, n, r.transformTemplate)
  }
  scrapeMotionValuesFromProps(e, n, r) {
    return r5(e, n, r)
  }
}
class DW extends Ux {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Lt
  }
  getBaseTargetFromProps(e, n) {
    return e[n]
  }
  readValueFromInstance(e, n) {
    if (ds.has(n)) {
      const r = m5(n);
      return r && r.default || 0
    }
    return n = R_.has(n) ? n : Gf(n), e.getAttribute(n)
  }
  scrapeMotionValuesFromProps(e, n, r) {
    return M_(e, n, r)
  }
  build(e, n, r) {
    e5(e, n, this.isSVGTag, r.transformTemplate)
  }
  renderInstance(e, n, r, i) {
    N_(e, n, r, i)
  }
  mount(e) {
    this.isSVGTag = n5(e.tagName), super.mount(e)
  }
}
const OW = (t, e) => Qf(t) ? new DW(e) : new MW(e, {
    allowProjection: t !== M.Fragment
  }),
  jW = l$({
    ...oU,
    ...CW,
    ...mW,
    ...kW
  }, OW),
  ql = SB(jW),
  VW = ({
    text: t
  }) => {
    const [e, n] = M.useState("");
    return M.useEffect(() => {
      let r = 0;
      const i = setInterval(() => {
        r <= t.length ? (n(t.slice(0, r)), r++) : clearInterval(i)
      }, 260);
      return () => clearInterval(i)
    }, [t]), _.jsxs("span", {
      className: "inline-block",
      children: [e, _.jsx("span", {
        className: "animate-pulse",
        children: "|"
      })]
    })
  },
  FW = () => _.jsxs("div", {
    className: "absolute inset-0 overflow-hidden",
    children: [_.jsx("div", {
      className: "absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse"
    }), _.jsx("div", {
      className: "absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-600/10 blur-2xl animate-float"
    })]
  }),
  BW = ({
    Icon: t
  }) => _.jsxs("div", {
    className: "relative group hover:scale-110 transition-transform duration-300",
    children: [_.jsx("div", {
      className: "absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300"
    }), _.jsx("div", {
      className: "relative p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10",
      children: _.jsx(t, {
        className: "w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white"
      })
    })]
  }),
  $W = ({
    onLoadingComplete: t
  }) => {
    const [e, n] = M.useState(!0);
    M.useEffect(() => {
      ko.init({
        duration: 1e3,
        once: !1,
        mirror: !1
      });
      const a = setTimeout(() => {
        n(!1), setTimeout(() => {
          t == null || t()
        }, 1e3)
      }, 4e3);
      return () => clearTimeout(a)
    }, [t]);
    const r = {
        exit: {
          opacity: 0,
          scale: 1.1,
          filter: "blur(10px)",
          transition: {
            duration: .8,
            ease: "easeInOut",
            when: "beforeChildren",
            staggerChildren: .1
          }
        }
      },
      i = {
        exit: {
          y: -20,
          opacity: 0,
          transition: {
            duration: .4,
            ease: "easeInOut"
          }
        }
      };
    return _.jsx(g_, {
      children: e && _.jsxs(ql.div, {
        className: "fixed inset-0 bg-[#030014]",
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: "exit",
        variants: r,
        children: [_.jsx(FW, {}), _.jsx("div", {
          className: "relative min-h-screen flex items-center justify-center px-4",
          children: _.jsxs("div", {
            className: "w-full max-w-4xl mx-auto",
            children: [_.jsx(ql.div, {
              className: "flex justify-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8 md:mb-12",
              variants: i,
              children: [d9, rv, h9].map((a, l) => _.jsx("div", {
                "data-aos": "fade-down",
                "data-aos-delay": l * 200,
                children: _.jsx(BW, {
                  Icon: a
                })
              }, l))
            }), _.jsx(ql.div, {
              className: "text-center mb-6 sm:mb-8 md:mb-12",
              variants: i,
              children: _.jsxs("h1", {
                className: "text-3xl sm:text-4xl md:text-6xl font-bold space-y-2 sm:space-y-4",
                children: [_.jsxs("div", {
                  className: "mb-2 sm:mb-4",
                  children: [_.jsx("span", {
                    "data-aos": "fade-right",
                    "data-aos-delay": "200",
                    className: "inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent",
                    children: "Welcome"
                  }), " ", _.jsx("span", {
                    "data-aos": "fade-right",
                    "data-aos-delay": "400",
                    className: "inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent",
                    children: "To"
                  }), " ", _.jsx("span", {
                    "data-aos": "fade-right",
                    "data-aos-delay": "600",
                    className: "inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent",
                    children: "My"
                  })]
                }), _.jsxs("div", {
                  children: [_.jsx("span", {
                    "data-aos": "fade-up",
                    "data-aos-delay": "800",
                    className: "inline-block px-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
                    children: "Portfolio"
                  }), " ", _.jsx("span", {
                    "data-aos": "fade-up",
                    "data-aos-delay": "1000",
                    className: "inline-block px-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
                    children: "Website"
                  })]
                })]
              })
            }), _.jsx(ql.div, {
              className: "text-center",
              variants: i,
              "data-aos": "fade-up",
              "data-aos-delay": "1200",
              children: _.jsxs("a", {
                href: "https://www.masabqurban.com",
                className: "inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full relative group hover:scale-105 transition-transform duration-300",
                target: "_blank",
                rel: "noopener noreferrer",
                children: [_.jsx("div", {
                  className: "absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"
                }), _.jsxs("div", {
                  className: "relative flex items-center gap-2 text-lg sm:text-xl md:text-2xl",
                  children: [_.jsx(f9, {
                    className: "w-4 h-4 sm:w-5 sm:h-5 text-indigo-600"
                  }), _.jsx("span", {
                    className: "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
                    children: _.jsx(VW, {
                      text: "Masab Qurban"
                    })
                  })]
                })]
              })
            })]
          })
        })]
      })
    })
  };
var My = {},
  zW = "@vercel/speed-insights",
  UW = "1.2.0",
  WW = () => {
    window.si || (window.si = function(...e) {
      (window.siq = window.siq || []).push(e)
    })
  };

function HW() {
  return typeof window < "u"
}

function qW() {
  try {
    const t = "production"
  } catch {}
  return "production"
}

function Wx() {
  return qW() === "development"
}

function GW(t) {
  return t.scriptSrc ? t.scriptSrc : Wx() ? "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js" : t.dsn ? "https://va.vercel-scripts.com/v1/speed-insights/script.js" : t.basePath ? `${t.basePath}/speed-insights/script.js` : "/_vercel/speed-insights/script.js"
}

function KW(t = {}) {
  var e;
  if (!HW() || t.route === null) return null;
  WW();
  const n = GW(t);
  if (document.head.querySelector(`script[src*="${n}"]`)) return null;
  t.beforeSend && ((e = window.si) == null || e.call(window, "beforeSend", t.beforeSend));
  const r = document.createElement("script");
  return r.src = n, r.defer = !0, r.dataset.sdkn = zW + (t.framework ? `/${t.framework}` : ""), r.dataset.sdkv = UW, t.sampleRate && (r.dataset.sampleRate = t.sampleRate.toString()), t.route && (r.dataset.route = t.route), t.endpoint ? r.dataset.endpoint = t.endpoint : t.basePath && (r.dataset.endpoint = `${t.basePath}/speed-insights/vitals`), t.dsn && (r.dataset.dsn = t.dsn), Wx() && t.debug === !1 && (r.dataset.debug = "false"), r.onerror = () => {
    console.log(`[Vercel Speed Insights] Failed to load script from ${n}. Please check if any content blockers are enabled and try again.`)
  }, document.head.appendChild(r), {
    setRoute: i => {
      r.dataset.route = i ?? void 0
    }
  }
}

function QW() {
  if (!(typeof process > "u" || typeof My > "u")) return My.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
}

function YW(t) {
  M.useEffect(() => {
    var n;
    t.beforeSend && ((n = window.si) == null || n.call(window, "beforeSend", t.beforeSend))
  }, [t.beforeSend]);
  const e = M.useRef(null);
  return M.useEffect(() => {
    if (e.current) t.route && e.current(t.route);
    else {
      const n = KW({
        framework: t.framework ?? "react",
        basePath: t.basePath ?? QW(),
        ...t
      });
      n && (e.current = n.setRoute)
    }
  }, [t.route]), null
}
var Dy = {},
  XW = "@vercel/analytics",
  JW = "1.5.0",
  ZW = () => {
    window.va || (window.va = function(...e) {
      (window.vaq = window.vaq || []).push(e)
    })
  };

function Hx() {
  return typeof window < "u"
}

function qx() {
  try {
    const t = "production"
  } catch {}
  return "production"
}

function eH(t = "auto") {
  if (t === "auto") {
    window.vam = qx();
    return
  }
  window.vam = t
}

function tH() {
  return (Hx() ? window.vam : qx()) || "production"
}

function a9() {
  return tH() === "development"
}

function nH(t) {
  return t.scriptSrc ? t.scriptSrc : a9() ? "https://va.vercel-scripts.com/v1/script.debug.js" : t.basePath ? `${t.basePath}/insights/script.js` : "/_vercel/insights/script.js"
}

function rH(t = {
  debug: !0
}) {
  var e;
  if (!Hx()) return;
  eH(t.mode), ZW(), t.beforeSend && ((e = window.va) == null || e.call(window, "beforeSend", t.beforeSend));
  const n = nH(t);
  if (document.head.querySelector(`script[src*="${n}"]`)) return;
  const r = document.createElement("script");
  r.src = n, r.defer = !0, r.dataset.sdkn = XW + (t.framework ? `/${t.framework}` : ""), r.dataset.sdkv = JW, t.disableAutoTrack && (r.dataset.disableAutoTrack = "1"), t.endpoint ? r.dataset.endpoint = t.endpoint : t.basePath && (r.dataset.endpoint = `${t.basePath}/insights`), t.dsn && (r.dataset.dsn = t.dsn), r.onerror = () => {
    const i = a9() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
    console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${i}`)
  }, a9() && t.debug === !1 && (r.dataset.debug = "false"), document.head.appendChild(r)
}

function iH({
  route: t,
  path: e
}) {
  var n;
  (n = window.va) == null || n.call(window, "pageview", {
    route: t,
    path: e
  })
}

function sH() {
  if (!(typeof process > "u" || typeof Dy > "u")) return Dy.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
}

function oH(t) {
  return M.useEffect(() => {
    var e;
    t.beforeSend && ((e = window.va) == null || e.call(window, "beforeSend", t.beforeSend))
  }, [t.beforeSend]), M.useEffect(() => {
    rH({
      framework: t.framework || "react",
      basePath: t.basePath ?? sH(),
      ...t.route !== void 0 && {
        disableAutoTrack: !0
      },
      ...t
    })
  }, []), M.useEffect(() => {
    t.route && t.path && iH({
      route: t.route,
      path: t.path
    })
  }, [t.route, t.path]), null
}

function aH() {
  const t = c9();
  return _.jsxs("div", {
    className: "min-h-screen w-full flex flex-col items-center justify-center bg-[#0d0e1c] overflow-hidden relative",
    children: [_.jsx("div", {
      className: "absolute w-[800px] h-[800px] bg-gradient-to-r from-[#1a1c34] to-[#4f46e5]/20 rounded-full blur-3xl -top-96 -right-40 rotate-12 animate-pulse"
    }), _.jsx("div", {
      className: "absolute w-[600px] h-[600px] bg-gradient-to-r from-[#1a1c34] to-[#4f46e5]/20 rounded-full blur-3xl -bottom-40 -left-20 rotate-45 animate-pulse delay-700"
    }), _.jsxs("div", {
      className: "relative z-90 text-center",
      children: [_.jsxs("div", {
        className: "relative",
        children: [_.jsx("h1", {
          className: "font-sans mb-10 text-[200px] font-bold text-white select-none animate-pulse",
          style: {
            textShadow: "4px 4px 15px rgba(255,255,255,0.1)"
          },
          children: "404"
        }), _.jsx("h2", {
          className: "font-sans text-5xl font-bold text-white mb-8 -mt-20 animate-fade-in",
          children: "Page Not Found!"
        }), _.jsx("p", {
          className: "font-sans text-gray-400 max-w-md mb-8 animate-slide-up",
          children: "The page you're looking for doesn't exist or has been moved. Let's get you back on track."
        })]
      }), _.jsx("button", {
        onClick: () => t("/"),
        className: "px-8 py-3 bg-white/10 backdrop-blur-sm cursor-pointer text-white rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 transform hover:scale-105",
        children: "Back Home"
      })]
    }), _.jsx("div", {
      className: "absolute inset-0 overflow-hidden pointer-events-none",
      children: [...Array(20)].map((e, n) => _.jsx("div", {
        className: "absolute bg-gray-500/20 rounded-full animate-float",
        style: {
          width: Math.random() * 100 + "px",
          height: Math.random() * 100 + "px",
          left: Math.random() * 100 + "%",
          top: Math.random() * 100 + "%",
          animationDelay: Math.random() * 5 + "s",
          animationDuration: Math.random() * 10 + 10 + "s"
        }
      }, n))
    })]
  })
}
const lH = ({
    showWelcome: t,
    setShowWelcome: e
  }) => _.jsxs(_.Fragment, {
    children: [_.jsx(g_, {
      mode: "wait",
      children: t && _.jsx($W, {
        onLoadingComplete: () => e(!1)
      })
    }), !t && _.jsxs(_.Fragment, {
      children: [_.jsx(XD, {}), _.jsx(YD, {}), _.jsx(gC, {}), _.jsx(QD, {}), _.jsx(WD, {}), _.jsx(aB, {}), _.jsx("footer", {
        children: _.jsxs("center", {
          children: [_.jsx("hr", {
            className: "my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center"
          }), _.jsxs("span", {
            className: "block text-sm pb-4 text-gray-500 text-center dark:text-gray-400",
            children: ["© 2025", " ", _.jsx("a", {
              href: "https://flowbite.com/",
              className: "hover:underline",
              children: "Masab Qurban™"
            }), ". All Rights Reserved."]
          })]
        })
      })]
    })]
  }),
  uH = () => _.jsxs(_.Fragment, {
    children: [_.jsx(dB, {}), _.jsx("footer", {
      children: _.jsxs("center", {
        children: [_.jsx("hr", {
          className: "my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center"
        }), _.jsxs("span", {
          className: "block text-sm pb-4 text-gray-500 text-center dark:text-gray-400",
          children: ["© 2025", " ", _.jsx("a", {
            href: "https://flowbite.com/",
            className: "hover:underline",
            children: "Masab Qurban™"
          }), ". All Rights Reserved."]
        })]
      })
    })]
  });

function cH() {
  const [t, e] = M.useState(!0);
  return _.jsxs(_.Fragment, {
    children: [_.jsx(oH, {}), _.jsx(YW, {}), _.jsx(oT, {
      children: _.jsxs(ZE, {
        children: [_.jsx(Gl, {
          path: "/",
          element: _.jsx(lH, {
            showWelcome: t,
            setShowWelcome: e
          })
        }), _.jsx(Gl, {
          path: "/project/:id",
          element: _.jsx(uH, {})
        }), _.jsx(Gl, {
          path: "*",
          element: _.jsx(aH, {})
        }), " "]
      })
    })]
  })
}
aE.createRoot(document.getElementById("root")).render(_.jsx(D3.StrictMode, {
  children: _.jsx(cH, {})
}));