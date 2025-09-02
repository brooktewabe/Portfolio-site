        timestamp: p
      } = wn;
    this.history = [{
      ...h,
      timestamp: p
    }];
    const {
      onSessionStart: m
    } = n;
    m && m(e, K4(c, this.history)), this.removeListeners = P0(Fa(this.contextWindow, "pointermove", this.handlePointerMove), Fa(this.contextWindow, "pointerup", this.handlePointerUp), Fa(this.contextWindow, "pointercancel", this.handlePointerUp))
  }
  updateHandlers(e) {
    this.handlers = e
  }
  end() {
    this.removeListeners && this.removeListeners(), i3(this.updatePoint)
  }
}

function G4(t, e) {
  return e ? {
    point: e(t.point)
  } : t
}

function q7(t, e) {
  return {
    x: t.x - e.x,
    y: t.y - e.y
  }
}

function K4({
  point: t
}, e) {
  return {
    point: t,
    delta: q7(t, Tx(e)),
    offset: q7(t, uU(e)),
    velocity: cU(e, .1)
  }
}

function uU(t) {
  return t[0]
}

function Tx(t) {
  return t[t.length - 1]
}

function cU(t, e) {
  if (t.length < 2) return {
    x: 0,
    y: 0
  };
  let n = t.length - 1,
    r = null;
  const i = Tx(t);
  for (; n >= 0 && (r = t[n], !(i.timestamp - r.timestamp > ai(e)));) n--;
  if (!r) return {
    x: 0,
    y: 0
  };
  const a = li(i.timestamp - r.timestamp);
  if (a === 0) return {
    x: 0,
    y: 0
  };
  const l = {
    x: (i.x - r.x) / a,
    y: (i.y - r.y) / a
  };
  return l.x === 1 / 0 && (l.x = 0), l.y === 1 / 0 && (l.y = 0), l
}
const Cx = 1e-4,
  dU = 1 - Cx,
  hU = 1 + Cx,
  kx = .01,
  fU = 0 - kx,
  pU = 0 + kx;

function Sr(t) {
  return t.max - t.min
}

function mU(t, e, n) {
  return Math.abs(t - e) <= n
}

function G7(t, e, n, r = .5) {
  t.origin = r, t.originPoint = xt(e.min, e.max, t.origin), t.scale = Sr(n) / Sr(e), t.translate = xt(n.min, n.max, t.origin) - t.originPoint, (t.scale >= dU && t.scale <= hU || isNaN(t.scale)) && (t.scale = 1), (t.translate >= fU && t.translate <= pU || isNaN(t.translate)) && (t.translate = 0)
}

function Ba(t, e, n, r) {
  G7(t.x, e.x, n.x, r ? r.originX : void 0), G7(t.y, e.y, n.y, r ? r.originY : void 0)
}

function K7(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + Sr(e)
}

function gU(t, e, n) {
  K7(t.x, e.x, n.x), K7(t.y, e.y, n.y)
}

function Q7(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + Sr(e)
}

function $a(t, e, n) {
  Q7(t.x, e.x, n.x), Q7(t.y, e.y, n.y)
}

function yU(t, {
  min: e,
  max: n
}, r) {
  return e !== void 0 && t < e ? t = r ? xt(e, t, r.min) : Math.max(t, e) : n !== void 0 && t > n && (t = r ? xt(n, t, r.max) : Math.min(t, n)), t
}

function Y7(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  }
}

function vU(t, {
  top: e,
  left: n,
  bottom: r,
  right: i
}) {
  return {
    x: Y7(t.x, n, i),
    y: Y7(t.y, e, r)
  }
}

function X7(t, e) {
  let n = e.min - t.min,
    r = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, r] = [r, n]), {
    min: n,
    max: r
  }
}

function wU(t, e) {
  return {
    x: X7(t.x, e.x),
    y: X7(t.y, e.y)
  }
}

function bU(t, e) {
  let n = .5;
  const r = Sr(t),
    i = Sr(e);
  return i > r ? n = So(e.min, e.max - r, t.min) : r > i && (n = So(t.min, t.max - i, e.min)), fi(0, 1, n)
}

function _U(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n
}
const n9 = .35;

function xU(t = n9) {
  return t === !1 ? t = 0 : t === !0 && (t = n9), {
    x: J7(t, "left", "right"),
    y: J7(t, "top", "bottom")
  }
}

function J7(t, e, n) {
  return {
    min: Z7(t, e),
    max: Z7(t, n)
  }
}

function Z7(t, e) {
  return typeof t == "number" ? t : t[e] || 0
}
const ey = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  }),
  ro = () => ({
    x: ey(),
    y: ey()
  }),
  ty = () => ({
    min: 0,
    max: 0
  }),
  Lt = () => ({
    x: ty(),
    y: ty()
  });

function $r(t) {
  return [t("x"), t("y")]
}

function Px({
  top: t,
  left: e,
  right: n,
  bottom: r
}) {
  return {
    x: {
      min: e,
      max: n
    },
    y: {
      min: t,
      max: r
    }
  }
}

function SU({
  x: t,
  y: e
}) {
  return {
    top: e.min,
    right: t.max,
    bottom: e.max,
    left: t.min
  }
}

function EU(t, e) {
  if (!e) return t;
  const n = e({
      x: t.left,
      y: t.top
    }),
    r = e({
      x: t.right,
      y: t.bottom
    });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  }
}

function Q4(t) {
  return t === void 0 || t === 1
}

function r9({
  scale: t,
  scaleX: e,
  scaleY: n
}) {
  return !Q4(t) || !Q4(e) || !Q4(n)
}

function R3(t) {
  return r9(t) || Ax(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}

function Ax(t) {
  return ny(t.x) || ny(t.y)
}

function ny(t) {
  return t && t !== "0%"
}

function Ku(t, e, n) {
  const r = t - n,
    i = e * r;
  return n + i
}

function ry(t, e, n, r, i) {
  return i !== void 0 && (t = Ku(t, i, r)), Ku(t, n, r) + e
}

function i9(t, e = 0, n = 1, r, i) {
  t.min = ry(t.min, e, n, r, i), t.max = ry(t.max, e, n, r, i)
}

function Ix(t, {
  x: e,
  y: n
}) {
  i9(t.x, e.translate, e.scale, e.originPoint), i9(t.y, n.translate, n.scale, n.originPoint)
}
const iy = .999999999999,
  sy = 1.0000000000001;

function TU(t, e, n, r = !1) {
  const i = n.length;
  if (!i) return;
  e.x = e.y = 1;
  let a, l;
  for (let c = 0; c < i; c++) {
    a = n[c], l = a.projectionDelta;
    const {
      visualElement: h
    } = a.options;
    h && h.props.style && h.props.style.display === "contents" || (r && a.options.layoutScroll && a.scroll && a !== a.root && so(t, {
      x: -a.scroll.offset.x,
      y: -a.scroll.offset.y
    }), l && (e.x *= l.x.scale, e.y *= l.y.scale, Ix(t, l)), r && R3(a.latestValues) && so(t, a.latestValues))
  }
  e.x < sy && e.x > iy && (e.x = 1), e.y < sy && e.y > iy && (e.y = 1)
}

function io(t, e) {
  t.min = t.min + e, t.max = t.max + e
}

function oy(t, e, n, r, i = .5) {
  const a = xt(t.min, t.max, i);
  i9(t, e, n, a, r)
}

function so(t, e) {
  oy(t.x, e.x, e.scaleX, e.scale, e.originX), oy(t.y, e.y, e.scaleY, e.scale, e.originY)
}

function Rx(t, e) {
  return Px(EU(t.getBoundingClientRect(), e))
}

function CU(t, e, n) {
  const r = Rx(t, n),
    {
      scroll: i
    } = e;
  return i && (io(r.x, i.offset.x), io(r.y, i.offset.y)), r
}
const Nx = ({
    current: t
  }) => t ? t.ownerDocument.defaultView : null,
  kU = new WeakMap;
class PU {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
      x: 0,
      y: 0
    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Lt(), this.visualElement = e
  }
  start(e, {
    snapToCursor: n = !1
  } = {}) {
    const {
      presenceContext: r
    } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = m => {
        const {
          dragSnapToOrigin: y
        } = this.getProps();
        y ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(A0(m).point)
      },
      a = (m, y) => {
        const {
          drag: v,
          dragPropagation: C,
          onDragStart: P
        } = this.getProps();
        if (v && !C && (this.openDragLock && this.openDragLock(), this.openDragLock = b$(v), !this.openDragLock)) return;
        this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), $r(R => {
          let W = this.getAxisMotionValue(R).get() || 0;
          if (M2.test(W)) {
            const {
              projection: q
            } = this.visualElement;
            if (q && q.layout) {
              const U = q.layout.layoutBox[R];
              U && (W = Sr(U) * (parseFloat(W) / 100))
            }
          }
          this.originPoint[R] = W
        }), P && gt.postRender(() => P(m, y)), Kh(this.visualElement, "transform");
        const {
          animationState: k
        } = this.visualElement;
        k && k.setActive("whileDrag", !0)
      },
      l = (m, y) => {
        const {
          dragPropagation: v,
          dragDirectionLock: C,
          onDirectionLock: P,
          onDrag: k
        } = this.getProps();
        if (!v && !this.openDragLock) return;
        const {
          offset: R
        } = y;
        if (C && this.currentDirection === null) {
          this.currentDirection = AU(R), this.currentDirection !== null && P && P(this.currentDirection);
          return
        }
        this.updateAxis("x", y.point, R), this.updateAxis("y", y.point, R), this.visualElement.render(), k && k(m, y)
      },
      c = (m, y) => this.stop(m, y),
      h = () => $r(m => {
        var y;
        return this.getAnimationState(m) === "paused" && ((y = this.getAxisMotionValue(m).animation) === null || y === void 0 ? void 0 : y.play())
      }),
      {
        dragSnapToOrigin: p
      } = this.getProps();
    this.panSession = new Ex(e, {
      onSessionStart: i,
      onStart: a,
      onMove: l,
      onSessionEnd: c,
      resumeAnimation: h
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: p,
      contextWindow: Nx(this.visualElement)
    })
  }
  stop(e, n) {
    const r = this.isDragging;
    if (this.cancel(), !r) return;
    const {
      velocity: i
    } = n;
    this.startAnimation(i);
    const {
      onDragEnd: a
    } = this.getProps();
    a && gt.postRender(() => a(e, n))
  }
  cancel() {
    this.isDragging = !1;
    const {
      projection: e,
      animationState: n
    } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const {
      dragPropagation: r
    } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1)
  }
  updateAxis(e, n, r) {
    const {
      drag: i
    } = this.getProps();
    if (!r || !Hl(e, i, this.currentDirection)) return;
    const a = this.getAxisMotionValue(e);
    let l = this.originPoint[e] + r[e];
    this.constraints && this.constraints[e] && (l = yU(l, this.constraints[e], this.elastic[e])), a.set(l)
  }
  resolveConstraints() {
    var e;
    const {
      dragConstraints: n,
      dragElastic: r
    } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, a = this.constraints;
    n && to(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = vU(i.layoutBox, n) : this.constraints = !1, this.elastic = xU(r), a !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && $r(l => {
      this.constraints !== !1 && this.getAxisMotionValue(l) && (this.constraints[l] = _U(i.layoutBox[l], this.constraints[l]))
    })
  }
  resolveRefConstraints() {
    const {
      dragConstraints: e,
      onMeasureDragConstraints: n
    } = this.getProps();
    if (!e || !to(e)) return !1;
    const r = e.current,
      {
        projection: i
      } = this.visualElement;
    if (!i || !i.layout) return !1;
    const a = CU(r, i.root, this.visualElement.getTransformPagePoint());
    let l = wU(i.layout.layoutBox, a);
    if (n) {
      const c = n(SU(l));
      this.hasMutatedConstraints = !!c, c && (l = Px(c))
    }
    return l
  }
  startAnimation(e) {
    const {
      drag: n,
      dragMomentum: r,
      dragElastic: i,
      dragTransition: a,
      dragSnapToOrigin: l,
      onDragTransitionEnd: c
    } = this.getProps(), h = this.constraints || {}, p = $r(m => {
      if (!Hl(m, n, this.currentDirection)) return;
      let y = h && h[m] || {};
      l && (y = {
        min: 0,
        max: 0
      });
      const v = i ? 200 : 1e6,
        C = i ? 40 : 1e7,
        P = {
          type: "inertia",
          velocity: r ? e[m] : 0,
          bounceStiffness: v,
          bounceDamping: C,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10,
          ...a,
          ...y
        };
      return this.startAxisValueAnimation(m, P)
    });
    return Promise.all(p).then(c)
  }
  startAxisValueAnimation(e, n) {
    const r = this.getAxisMotionValue(e);
    return Kh(this.visualElement, e), r.start(w5(e, r, 0, n, this.visualElement, !1))
  }
  stopAnimation() {
    $r(e => this.getAxisMotionValue(e).stop())
  }
  pauseAnimation() {
    $r(e => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause()
    })
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state
  }
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return i || this.visualElement.getValue(e, (r.initial ? r.initial[e] : void 0) || 0)
  }
  snapToCursor(e) {
    $r(n => {
      const {
        drag: r
      } = this.getProps();
      if (!Hl(n, r, this.currentDirection)) return;
      const {
        projection: i
      } = this.visualElement, a = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const {
          min: l,
          max: c
        } = i.layout.layoutBox[n];
        a.set(e[n] - xt(l, c, .5))
      }
    })
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const {
      drag: e,
      dragConstraints: n
    } = this.getProps(), {
      projection: r
    } = this.visualElement;
    if (!to(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = {
      x: 0,
      y: 0
    };
    $r(l => {
      const c = this.getAxisMotionValue(l);
      if (c && this.constraints !== !1) {
        const h = c.get();
        i[l] = bU({
          min: h,
          max: h
        }, this.constraints[l])
      }
    });
    const {
      transformTemplate: a
    } = this.visualElement.getProps();
    this.visualElement.current.style.transform = a ? a({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), $r(l => {
      if (!Hl(l, e, null)) return;
      const c = this.getAxisMotionValue(l),
        {
          min: h,
          max: p
        } = this.constraints[l];
      c.set(xt(h, p, i[l]))
    })
  }
  addListeners() {
    if (!this.visualElement.current) return;
    kU.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = Fa(e, "pointerdown", h => {
        const {
          drag: p,
          dragListener: m = !0
        } = this.getProps();
        p && m && this.start(h)
      }),
      r = () => {
        const {
          dragConstraints: h
        } = this.getProps();
        to(h) && h.current && (this.constraints = this.resolveRefConstraints())
      },
      {
        projection: i
      } = this.visualElement,
      a = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), gt.read(r);
    const l = l0(window, "resize", () => this.scalePositionWithinConstraints()),
      c = i.addEventListener("didUpdate", ({
        delta: h,
        hasLayoutChanged: p
      }) => {
        this.isDragging && p && ($r(m => {
          const y = this.getAxisMotionValue(m);
          y && (this.originPoint[m] += h[m].translate, y.set(y.get() + h[m].translate))
        }), this.visualElement.render())
      });
    return () => {
      l(), n(), a(), c && c()
    }
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: a = !1,
        dragElastic: l = n9,
        dragMomentum: c = !0
      } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: a,
      dragElastic: l,
      dragMomentum: c
    }
  }
}

function Hl(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t)
}

function AU(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
}
class IU extends l3 {
  constructor(e) {
    super(e), this.removeGroupControls = _r, this.removeListeners = _r, this.controls = new PU(e)
  }
  mount() {
    const {
      dragControls: e
    } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || _r
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners()
  }
}
const ay = t => (e, n) => {
  t && gt.postRender(() => t(e, n))
};
class RU extends l3 {
  constructor() {
    super(...arguments), this.removePointerDownListener = _r
  }
  onPointerDown(e) {
    this.session = new Ex(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Nx(this.node)
    })
  }
  createPanHandlers() {
    const {
      onPanSessionStart: e,
      onPanStart: n,
      onPan: r,
      onPanEnd: i
    } = this.node.getProps();
    return {
      onSessionStart: ay(e),
      onStart: ay(n),
      onMove: r,
      onEnd: (a, l) => {
        delete this.session, i && gt.postRender(() => i(a, l))
      }
    }
  }
  mount() {
    this.removePointerDownListener = Fa(this.node.current, "pointerdown", e => this.onPointerDown(e))
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end()
  }
}
const lu = {
  hasAnimatedSinceResize: !0,
  hasEverUpdated: !1
};

function ly(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const wa = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string")
        if (ae.test(t)) t = parseFloat(t);
        else return t;
      const n = ly(t, e.target.x),
        r = ly(t, e.target.y);
      return `${n}% ${r}%`
    }
  },
  NU = {
    correct: (t, {
      treeScale: e,
      projectionDelta: n
    }) => {
      const r = t,
        i = s3.parse(t);
      if (i.length > 5) return r;
      const a = s3.createTransformer(t),
        l = typeof i[0] != "number" ? 1 : 0,
        c = n.x.scale * e.x,
        h = n.y.scale * e.y;
      i[0 + l] /= c, i[1 + l] /= h;
      const p = xt(c, h, .5);
      return typeof i[2 + l] == "number" && (i[2 + l] /= p), typeof i[3 + l] == "number" && (i[3 + l] /= p), a(i)
    }
  };
class LU extends M.Component {
  componentDidMount() {
    const {
      visualElement: e,
      layoutGroup: n,
      switchLayoutGroup: r,
      layoutId: i
    } = this.props, {
      projection: a
    } = e;
    ZB(MU), a && (n.group && n.group.add(a), r && r.register && i && r.register(a), a.root.didUpdate(), a.addEventListener("animationComplete", () => {
      this.safeToRemove()
    }), a.setOptions({
      ...a.options,
      onExitComplete: () => this.safeToRemove()
    })), lu.hasEverUpdated = !0
  }
  getSnapshotBeforeUpdate(e) {
    const {
      layoutDependency: n,
      visualElement: r,
      drag: i,
      isPresent: a
    } = this.props, l = r.projection;
    return l && (l.isPresent = a, i || e.layoutDependency !== n || n === void 0 ? l.willUpdate() : this.safeToRemove(), e.isPresent !== a && (a ? l.promote() : l.relegate() || gt.postRender(() => {
      const c = l.getStack();
      (!c || !c.members.length) && this.safeToRemove()
    }))), null
  }
  componentDidUpdate() {
    const {
      projection: e
    } = this.props.visualElement;
    e && (e.root.didUpdate(), Kf.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove()
    }))
  }
  componentWillUnmount() {
    const {
      visualElement: e,
      layoutGroup: n,
      switchLayoutGroup: r
    } = this.props, {
      projection: i
    } = e;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i))
  }
  safeToRemove() {
    const {
      safeToRemove: e
    } = this.props;
    e && e()
  }
  render() {
    return null
  }
}

function Lx(t) {
  const [e, n] = p_(), r = M.useContext(Bf);
  return _.jsx(LU, {
    ...t,
    layoutGroup: r,
    switchLayoutGroup: M.useContext(S_),
    isPresent: e,
    safeToRemove: n
  })
}
const MU = {
  borderRadius: {
    ...wa,
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  },
  borderTopLeftRadius: wa,
  borderTopRightRadius: wa,
  borderBottomLeftRadius: wa,
  borderBottomRightRadius: wa,
  boxShadow: NU
};

function DU(t, e, n) {
  const r = jn(t) ? t : o0(t);
  return r.start(w5("", r, e, n)), r.animation
}

function OU(t) {
  return t instanceof SVGElement && t.tagName !== "svg"
}
const jU = (t, e) => t.depth - e.depth;
class VU {
  constructor() {
    this.children = [], this.isDirty = !1
  }
  add(e) {
    l5(this.children, e), this.isDirty = !0
  }
  remove(e) {
    u5(this.children, e), this.isDirty = !0
  }
  forEach(e) {
    this.isDirty && this.children.sort(jU), this.isDirty = !1, this.children.forEach(e)
  }
}

function FU(t, e) {
  const n = D2.now(),
    r = ({
      timestamp: i
    }) => {
      const a = i - n;
      a >= e && (i3(r), t(a - e))
    };
  return gt.read(r, !0), () => i3(r)
}
const Mx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  BU = Mx.length,
  uy = t => typeof t == "string" ? parseFloat(t) : t,
  cy = t => typeof t == "number" || ae.test(t);

function $U(t, e, n, r, i, a) {
  i ? (t.opacity = xt(0, n.opacity !== void 0 ? n.opacity : 1, zU(r)), t.opacityExit = xt(e.opacity !== void 0 ? e.opacity : 1, 0, UU(r))) : a && (t.opacity = xt(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let l = 0; l < BU; l++) {
    const c = `border${Mx[l]}Radius`;
    let h = dy(e, c),
      p = dy(n, c);
    if (h === void 0 && p === void 0) continue;
    h || (h = 0), p || (p = 0), h === 0 || p === 0 || cy(h) === cy(p) ? (t[c] = Math.max(xt(uy(h), uy(p), r), 0), (M2.test(p) || M2.test(h)) && (t[c] += "%")) : t[c] = p
  }(e.rotate || n.rotate) && (t.rotate = xt(e.rotate || 0, n.rotate || 0, r))
}

function dy(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius
}
const zU = Dx(0, .5, Z_),
  UU = Dx(.5, .95, _r);

function Dx(t, e, n) {
  return r => r < t ? 0 : r > e ? 1 : n(So(t, e, r))
}

function hy(t, e) {
  t.min = e.min, t.max = e.max
}

function Br(t, e) {
  hy(t.x, e.x), hy(t.y, e.y)
}

function fy(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
}

function py(t, e, n, r, i) {
  return t -= e, t = Ku(t, 1 / n, r), i !== void 0 && (t = Ku(t, 1 / i, r)), t
}

function WU(t, e = 0, n = 1, r = .5, i, a = t, l = t) {
  if (M2.test(e) && (e = parseFloat(e), e = xt(l.min, l.max, e / 100) - l.min), typeof e != "number") return;
  let c = xt(a.min, a.max, r);
  t === a && (c -= e), t.min = py(t.min, e, n, c, i), t.max = py(t.max, e, n, c, i)
}

function my(t, e, [n, r, i], a, l) {
  WU(t, e[n], e[r], e[i], e.scale, a, l)
}
const HU = ["x", "scaleX", "originX"],
  qU = ["y", "scaleY", "originY"];

function gy(t, e, n, r) {
  my(t.x, e, HU, n ? n.x : void 0, r ? r.x : void 0), my(t.y, e, qU, n ? n.y : void 0, r ? r.y : void 0)
}

function yy(t) {
  return t.translate === 0 && t.scale === 1
}

function Ox(t) {
  return yy(t.x) && yy(t.y)
}

function vy(t, e) {
  return t.min === e.min && t.max === e.max
}

function GU(t, e) {
  return vy(t.x, e.x) && vy(t.y, e.y)
}

function wy(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}

function jx(t, e) {
  return wy(t.x, e.x) && wy(t.y, e.y)
}

function by(t) {
  return Sr(t.x) / Sr(t.y)
}

function _y(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class KU {
  constructor() {
    this.members = []
  }
  add(e) {
    l5(this.members, e), e.scheduleRender()
  }
  remove(e) {
    if (u5(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n)
    }
  }
  relegate(e) {
    const n = this.members.findIndex(i => e === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const a = this.members[i];
      if (a.isPresent !== !1) {
        r = a;
        break
      }
    }
    return r ? (this.promote(r), !0) : !1
  }
  promote(e, n) {
    const r = this.lead;
    if (e !== r && (this.prevLead = r, this.lead = e, e.show(), r)) {
      r.instance && r.scheduleRender(), e.scheduleRender(), e.resumeFrom = r, n && (e.resumeFrom.preserveOpacity = !0), r.snapshot && (e.snapshot = r.snapshot, e.snapshot.latestValues = r.animationValues || r.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const {
        crossfade: i
      } = e.options;
      i === !1 && r.hide()
    }
  }
  exitAnimationComplete() {
    this.members.forEach(e => {
      const {
        options: n,
        resumingFrom: r
      } = e;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
    })
  }
  scheduleRender() {
    this.members.forEach(e => {
      e.instance && e.scheduleRender(!1)
    })
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
  }
}

function QU(t, e, n) {
  let r = "";
  const i = t.x.translate / e.x,
    a = t.y.translate / e.y,
    l = (n == null ? void 0 : n.z) || 0;
  if ((i || a || l) && (r = `translate3d(${i}px, ${a}px, ${l}px) `), (e.x !== 1 || e.y !== 1) && (r += `scale(${1/e.x}, ${1/e.y}) `), n) {
    const {
      transformPerspective: p,
      rotate: m,
      rotateX: y,
      rotateY: v,
      skewX: C,
      skewY: P
    } = n;
    p && (r = `perspective(${p}px) ${r}`), m && (r += `rotate(${m}deg) `), y && (r += `rotateX(${y}deg) `), v && (r += `rotateY(${v}deg) `), C && (r += `skewX(${C}deg) `), P && (r += `skewY(${P}deg) `)
  }
  const c = t.x.scale * e.x,
    h = t.y.scale * e.y;
  return (c !== 1 || h !== 1) && (r += `scale(${c}, ${h})`), r || "none"
}
const N3 = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
  },
  Aa = typeof window < "u" && window.MotionDebug !== void 0,
  Y4 = ["", "X", "Y", "Z"],
  YU = {
    visibility: "hidden"
  },
  xy = 1e3;
let XU = 0;

function X4(t, e, n, r) {
  const {
    latestValues: i
  } = e;
  i[t] && (n[t] = i[t], e.setStaticValue(t, 0), r && (r[t] = 0))
}

function Vx(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
  const {
    visualElement: e
  } = t.options;
  if (!e) return;
  const n = q_(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const {
      layout: i,
      layoutId: a
    } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", gt, !(i || a))
  }
  const {
    parent: r
  } = t;
  r && !r.hasCheckedOptimisedAppear && Vx(r)
}

function Fx({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i
}) {
  return class {
    constructor(l = {}, c = e == null ? void 0 : e()) {
      this.id = XU++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
        x: 1,
        y: 1
      }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Aa && (N3.totalNodes = N3.resolvedTargetDeltas = N3.recalculatedProjection = 0), this.nodes.forEach(eW), this.nodes.forEach(sW), this.nodes.forEach(oW), this.nodes.forEach(tW), Aa && window.MotionDebug.record(N3)
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = l, this.root = c ? c.root || c : this, this.path = c ? [...c.path, c] : [], this.parent = c, this.depth = c ? c.depth + 1 : 0;
      for (let h = 0; h < this.path.length; h++) this.path[h].shouldResetTransform = !0;
      this.root === this && (this.nodes = new VU)
    }
    addEventListener(l, c) {
      return this.eventHandlers.has(l) || this.eventHandlers.set(l, new c5), this.eventHandlers.get(l).add(c)
    }
    notifyListeners(l, ...c) {
      const h = this.eventHandlers.get(l);
      h && h.notify(...c)
    }
    hasListeners(l) {
      return this.eventHandlers.has(l)
    }
    mount(l, c = this.root.hasTreeAnimated) {
      if (this.instance) return;
      this.isSVG = OU(l), this.instance = l;
      const {
        layoutId: h,
        layout: p,
        visualElement: m
      } = this.options;
      if (m && !m.current && m.mount(l), this.root.nodes.add(this), this.parent && this.parent.children.add(this), c && (p || h) && (this.isLayoutDirty = !0), t) {
        let y;
        const v = () => this.root.updateBlockedByResize = !1;
        t(l, () => {
          this.root.updateBlockedByResize = !0, y && y(), y = FU(v, 250), lu.hasAnimatedSinceResize && (lu.hasAnimatedSinceResize = !1, this.nodes.forEach(Ey))
        })
      }
      h && this.root.registerSharedNode(h, this), this.options.animate !== !1 && m && (h || p) && this.addEventListener("didUpdate", ({
        delta: y,
        hasLayoutChanged: v,
        hasRelativeTargetChanged: C,
        layout: P
      }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return
        }
        const k = this.options.transition || m.getDefaultTransition() || dW,
          {
            onLayoutAnimationStart: R,
            onLayoutAnimationComplete: W
          } = m.getProps(),
          q = !this.targetLayout || !jx(this.targetLayout, P) || C,
          U = !v && C;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || U || v && (q || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(y, U);
          const H = {
            ...i5(k, "layout"),
            onPlay: R,
            onComplete: W
          };
          (m.shouldReduceMotion || this.options.layoutRoot) && (H.delay = 0, H.type = !1), this.startAnimation(H)
        } else v || Ey(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = P
      })
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const l = this.getStack();
      l && l.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, i3(this.updateProjection)
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
    }
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(aW), this.animationId++)
    }
    getTransformTemplate() {
      const {
        visualElement: l
      } = this.options;
      return l && l.getProps().transformTemplate
    }
    willUpdate(l = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Vx(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
      this.isLayoutDirty = !0;
      for (let m = 0; m < this.path.length; m++) {
        const y = this.path[m];
        y.shouldResetTransform = !0, y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1)
      }
      const {
        layoutId: c,
        layout: h
      } = this.options;
      if (c === void 0 && !h) return;
      const p = this.getTransformTemplate();
      this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0, this.updateSnapshot(), l && this.notifyListeners("willUpdate")
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Sy);
        return
      }
      this.isUpdating || this.nodes.forEach(rW), this.isUpdating = !1, this.nodes.forEach(iW), this.nodes.forEach(JU), this.nodes.forEach(ZU), this.clearAllSnapshots();
      const c = D2.now();
      wn.delta = fi(0, 1e3 / 60, c - wn.timestamp), wn.timestamp = c, wn.isProcessing = !0, $4.update.process(wn), $4.preRender.process(wn), $4.render.process(wn), wn.isProcessing = !1
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Kf.read(this.scheduleUpdate))
    }
    clearAllSnapshots() {
      this.nodes.forEach(nW), this.sharedNodes.forEach(lW)
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, gt.preRender(this.updateProjection, !1, !0))
    }
    scheduleCheckAfterUnmount() {
      gt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
      })
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure())
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let h = 0; h < this.path.length; h++) this.path[h].updateScroll();
      const l = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Lt(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const {
        visualElement: c
      } = this.options;
      c && c.notify("LayoutMeasure", this.layout.layoutBox, l ? l.layoutBox : void 0)
    }
    updateScroll(l = "measure") {
      let c = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === l && (c = !1), c) {
        const h = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: l,
          isRoot: h,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : h
        }
      }
    }
    resetTransform() {
      if (!i) return;
      const l = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        c = this.projectionDelta && !Ox(this.projectionDelta),
        h = this.getTransformTemplate(),
        p = h ? h(this.latestValues, "") : void 0,
        m = p !== this.prevTransformTemplateValue;
      l && (c || R3(this.latestValues) || m) && (i(this.instance, p), this.shouldResetTransform = !1, this.scheduleRender())
    }
    measure(l = !0) {
      const c = this.measurePageBox();
      let h = this.removeElementScroll(c);
      return l && (h = this.removeTransform(h)), hW(h), {
        animationId: this.root.animationId,
        measuredBox: c,
        layoutBox: h,
        latestValues: {},
        source: this.id
      }
    }
    measurePageBox() {
      var l;
      const {
        visualElement: c
      } = this.options;
      if (!c) return Lt();
      const h = c.measureViewportBox();
      if (!(((l = this.scroll) === null || l === void 0 ? void 0 : l.wasRoot) || this.path.some(fW))) {
        const {
          scroll: m
        } = this.root;
        m && (io(h.x, m.offset.x), io(h.y, m.offset.y))
      }
      return h
    }
    removeElementScroll(l) {
      var c;
      const h = Lt();
      if (Br(h, l), !((c = this.scroll) === null || c === void 0) && c.wasRoot) return h;
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p],
          {
            scroll: y,
            options: v
          } = m;
        m !== this.root && y && v.layoutScroll && (y.wasRoot && Br(h, l), io(h.x, y.offset.x), io(h.y, y.offset.y))
      }
      return h
    }
    applyTransform(l, c = !1) {
      const h = Lt();
      Br(h, l);
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p];
        !c && m.options.layoutScroll && m.scroll && m !== m.root && so(h, {
          x: -m.scroll.offset.x,
          y: -m.scroll.offset.y
        }), R3(m.latestValues) && so(h, m.latestValues)
      }
      return R3(this.latestValues) && so(h, this.latestValues), h
    }
    removeTransform(l) {
      const c = Lt();
      Br(c, l);
      for (let h = 0; h < this.path.length; h++) {
        const p = this.path[h];
        if (!p.instance || !R3(p.latestValues)) continue;
        r9(p.latestValues) && p.updateSnapshot();
        const m = Lt(),
          y = p.measurePageBox();
        Br(m, y), gy(c, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, m)
      }
      return R3(this.latestValues) && gy(c, this.latestValues), c
    }
    setTargetDelta(l) {
      this.targetDelta = l, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
    }
    setOptions(l) {
      this.options = {
        ...this.options,
        ...l,
        crossfade: l.crossfade !== void 0 ? l.crossfade : !0
      }
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== wn.timestamp && this.relativeParent.resolveTargetDelta(!0)
    }
    resolveTargetDelta(l = !1) {
      var c;
      const h = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
      const p = !!this.resumingFrom || this !== h;
      if (!(l || p && this.isSharedProjectionDirty || this.isProjectionDirty || !((c = this.parent) === null || c === void 0) && c.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      const {
        layout: y,
        layoutId: v
      } = this.options;
      if (!(!this.layout || !(y || v))) {
        if (this.resolvedRelativeTargetAt = wn.timestamp, !this.targetDelta && !this.relativeTarget) {
          const C = this.getClosestProjectingParent();
          C && C.layout && this.animationProgress !== 1 ? (this.relativeParent = C, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Lt(), this.relativeTargetOrigin = Lt(), $a(this.relativeTargetOrigin, this.layout.layoutBox, C.layout.layoutBox), Br(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Lt(), this.targetWithTransforms = Lt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), gU(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Br(this.target, this.layout.layoutBox), Ix(this.target, this.targetDelta)) : Br(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const C = this.getClosestProjectingParent();
            C && !!C.resumingFrom == !!this.resumingFrom && !C.options.layoutScroll && C.target && this.animationProgress !== 1 ? (this.relativeParent = C, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Lt(), this.relativeTargetOrigin = Lt(), $a(this.relativeTargetOrigin, this.target, C.target), Br(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
          }
          Aa && N3.resolvedTargetDeltas++
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || r9(this.parent.latestValues) || Ax(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
    }
    calcProjection() {
      var l;
      const c = this.getLead(),
        h = !!this.resumingFrom || this !== c;
      let p = !0;
      if ((this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty) && (p = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1), this.resolvedRelativeTargetAt === wn.timestamp && (p = !1), p) return;
      const {
        layout: m,
        layoutId: y
      } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(m || y)) return;
      Br(this.layoutCorrected, this.layout.layoutBox);
      const v = this.treeScale.x,
        C = this.treeScale.y;
      TU(this.layoutCorrected, this.treeScale, this.path, h), c.layout && !c.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (c.target = c.layout.layoutBox, c.targetWithTransforms = Lt());
      const {
        target: P
      } = c;
      if (!P) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return
      }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (fy(this.prevProjectionDelta.x, this.projectionDelta.x), fy(this.prevProjectionDelta.y, this.projectionDelta.y)), Ba(this.projectionDelta, this.layoutCorrected, P, this.latestValues), (this.treeScale.x !== v || this.treeScale.y !== C || !_y(this.projectionDelta.x, this.prevProjectionDelta.x) || !_y(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", P)), Aa && N3.recalculatedProjection++
    }
    hide() {
      this.isVisible = !1
    }
    show() {
      this.isVisible = !0
    }
    scheduleRender(l = !0) {
      var c;
      if ((c = this.options.visualElement) === null || c === void 0 || c.scheduleRender(), l) {
        const h = this.getStack();
        h && h.scheduleRender()
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = ro(), this.projectionDelta = ro(), this.projectionDeltaWithTransform = ro()
    }
    setAnimationOrigin(l, c = !1) {
      const h = this.snapshot,
        p = h ? h.latestValues : {},
        m = {
          ...this.latestValues
        },
        y = ro();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !c;
      const v = Lt(),
        C = h ? h.source : void 0,
        P = this.layout ? this.layout.source : void 0,
        k = C !== P,
        R = this.getStack(),
        W = !R || R.members.length <= 1,
        q = !!(k && !W && this.options.crossfade === !0 && !this.path.some(cW));
      this.animationProgress = 0;
      let U;
      this.mixTargetDelta = H => {
        const $ = H / 1e3;
        Ty(y.x, l.x, $), Ty(y.y, l.y, $), this.setTargetDelta(y), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && ($a(v, this.layout.layoutBox, this.relativeParent.layout.layoutBox), uW(this.relativeTarget, this.relativeTargetOrigin, v, $), U && GU(this.relativeTarget, U) && (this.isProjectionDirty = !1), U || (U = Lt()), Br(U, this.relativeTarget)), k && (this.animationValues = m, $U(m, p, this.latestValues, $, q, W)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = $
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
    }
    startAnimation(l) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (i3(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = gt.update(() => {
        lu.hasAnimatedSinceResize = !0, this.currentAnimation = DU(0, xy, {
          ...l,
          onUpdate: c => {
            this.mixTargetDelta(c), l.onUpdate && l.onUpdate(c)
          },
          onComplete: () => {
            l.onComplete && l.onComplete(), this.completeAnimation()
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
      })
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const l = this.getStack();
      l && l.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(xy), this.currentAnimation.stop()), this.completeAnimation()
    }
    applyTransformsToTarget() {
      const l = this.getLead();
      let {
        targetWithTransforms: c,
        target: h,
        layout: p,
        latestValues: m
      } = l;
      if (!(!c || !h || !p)) {
        if (this !== l && this.layout && p && Bx(this.options.animationType, this.layout.layoutBox, p.layoutBox)) {
          h = this.target || Lt();
          const y = Sr(this.layout.layoutBox.x);
          h.x.min = l.target.x.min, h.x.max = h.x.min + y;
          const v = Sr(this.layout.layoutBox.y);
          h.y.min = l.target.y.min, h.y.max = h.y.min + v
        }
        Br(c, h), so(c, m), Ba(this.projectionDeltaWithTransform, this.layoutCorrected, c, m)
      }
    }
    registerSharedNode(l, c) {
      this.sharedNodes.has(l) || this.sharedNodes.set(l, new KU), this.sharedNodes.get(l).add(c);
      const p = c.options.initialPromotionConfig;
      c.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity: p && p.shouldPreserveFollowOpacity ? p.shouldPreserveFollowOpacity(c) : void 0
      })
    }
    isLead() {
      const l = this.getStack();
      return l ? l.lead === this : !0
    }
    getLead() {
      var l;
      const {
        layoutId: c
      } = this.options;
      return c ? ((l = this.getStack()) === null || l === void 0 ? void 0 : l.lead) || this : this
    }
    getPrevLead() {
      var l;
      const {
        layoutId: c
      } = this.options;
      return c ? (l = this.getStack()) === null || l === void 0 ? void 0 : l.prevLead : void 0
    }
    getStack() {
      const {
        layoutId: l
      } = this.options;
      if (l) return this.root.sharedNodes.get(l)
    }
    promote({
      needsReset: l,
      transition: c,
      preserveFollowOpacity: h
    } = {}) {
      const p = this.getStack();
      p && p.promote(this, h), l && (this.projectionDelta = void 0, this.needsReset = !0), c && this.setOptions({
        transition: c
      })
    }
    relegate() {
      const l = this.getStack();
      return l ? l.relegate(this) : !1
    }
    resetSkewAndRotation() {
      const {
        visualElement: l
      } = this.options;
      if (!l) return;
      let c = !1;
      const {
        latestValues: h
      } = l;
      if ((h.z || h.rotate || h.rotateX || h.rotateY || h.rotateZ || h.skewX || h.skewY) && (c = !0), !c) return;
      const p = {};
      h.z && X4("z", l, p, this.animationValues);
      for (let m = 0; m < Y4.length; m++) X4(`rotate${Y4[m]}`, l, p, this.animationValues), X4(`skew${Y4[m]}`, l, p, this.animationValues);
      l.render();
      for (const m in p) l.setStaticValue(m, p[m]), this.animationValues && (this.animationValues[m] = p[m]);
      l.scheduleRender()
    }
    getProjectionStyles(l) {
      var c, h;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return YU;
      const p = {
          visibility: ""
        },
        m = this.getTransformTemplate();
      if (this.needsReset) return this.needsReset = !1, p.opacity = "", p.pointerEvents = ou(l == null ? void 0 : l.pointerEvents) || "", p.transform = m ? m(this.latestValues, "") : "none", p;
      const y = this.getLead();
      if (!this.projectionDelta || !this.layout || !y.target) {
        const k = {};
        return this.options.layoutId && (k.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, k.pointerEvents = ou(l == null ? void 0 : l.pointerEvents) || ""), this.hasProjected && !R3(this.latestValues) && (k.transform = m ? m({}, "") : "none", this.hasProjected = !1), k
      }
      const v = y.animationValues || y.latestValues;
      this.applyTransformsToTarget(), p.transform = QU(this.projectionDeltaWithTransform, this.treeScale, v), m && (p.transform = m(v, p.transform));
      const {
        x: C,
        y: P
      } = this.projectionDelta;
      p.transformOrigin = `${C.origin*100}% ${P.origin*100}% 0`, y.animationValues ? p.opacity = y === this ? (h = (c = v.opacity) !== null && c !== void 0 ? c : this.latestValues.opacity) !== null && h !== void 0 ? h : 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : p.opacity = y === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
      for (const k in Uu) {
        if (v[k] === void 0) continue;
        const {
          correct: R,
          applyTo: W
        } = Uu[k], q = p.transform === "none" ? v[k] : R(v[k], y);
        if (W) {
          const U = W.length;
          for (let H = 0; H < U; H++) p[W[H]] = q
        } else p[k] = q
      }
      return this.options.layoutId && (p.pointerEvents = y === this ? ou(l == null ? void 0 : l.pointerEvents) || "" : "none"), p
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree() {
      this.root.nodes.forEach(l => {
        var c;
        return (c = l.currentAnimation) === null || c === void 0 ? void 0 : c.stop()
      }), this.root.nodes.forEach(Sy), this.root.sharedNodes.clear()
    }
  }
}

function JU(t) {
  t.updateLayout()
}

function ZU(t) {
  var e;
  const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const {
      layoutBox: r,
      measuredBox: i
    } = t.layout, {
      animationType: a
    } = t.options, l = n.source !== t.layout.source;
    a === "size" ? $r(y => {
      const v = l ? n.measuredBox[y] : n.layoutBox[y],
        C = Sr(v);
      v.min = r[y].min, v.max = v.min + C
    }) : Bx(a, n.layoutBox, r) && $r(y => {
      const v = l ? n.measuredBox[y] : n.layoutBox[y],
        C = Sr(r[y]);
      v.max = v.min + C, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[y].max = t.relativeTarget[y].min + C)
    });
    const c = ro();
    Ba(c, r, n.layoutBox);
    const h = ro();
    l ? Ba(h, t.applyTransform(i, !0), n.measuredBox) : Ba(h, r, n.layoutBox);
    const p = !Ox(c);
    let m = !1;
    if (!t.resumeFrom) {
      const y = t.getClosestProjectingParent();
      if (y && !y.resumeFrom) {
        const {
          snapshot: v,
          layout: C
        } = y;
        if (v && C) {
          const P = Lt();
          $a(P, n.layoutBox, v.layoutBox);
          const k = Lt();
          $a(k, r, C.layoutBox), jx(P, k) || (m = !0), y.options.layoutRoot && (t.relativeTarget = k, t.relativeTargetOrigin = P, t.relativeParent = y)
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: h,
      layoutDelta: c,
      hasLayoutChanged: p,
      hasRelativeTargetChanged: m
    })
  } else if (t.isLead()) {
    const {
      onExitComplete: r
    } = t.options;
    r && r()
  }
  t.options.transition = void 0
}

function eW(t) {
  Aa && N3.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function tW(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function nW(t) {
  t.clearSnapshot()
}

function Sy(t) {
  t.clearMeasurements()
}

function rW(t) {
  t.isLayoutDirty = !1
}

function iW(t) {
  const {
    visualElement: e
  } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function Ey(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function sW(t) {
  t.resolveTargetDelta()
}

function oW(t) {
  t.calcProjection()
}

function aW(t) {
  t.resetSkewAndRotation()
}

function lW(t) {
  t.removeLeadSnapshot()
}

function Ty(t, e, n) {
  t.translate = xt(e.translate, 0, n), t.scale = xt(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
}

function Cy(t, e, n, r) {
  t.min = xt(e.min, n.min, r), t.max = xt(e.max, n.max, r)
}

function uW(t, e, n, r) {
  Cy(t.x, e.x, n.x, r), Cy(t.y, e.y, n.y, r)
}

function cW(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0
}
const dW = {
    duration: .45,
    ease: [.4, 0, .1, 1]
  },
  ky = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
  Py = ky("applewebkit/") && !ky("chrome/") ? Math.round : _r;

function Ay(t) {
  t.min = Py(t.min), t.max = Py(t.max)
}

function hW(t) {
  Ay(t.x), Ay(t.y)
}

function Bx(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !mU(by(e), by(n), .2)
}

function fW(t) {
  var e;
  return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const pW = Fx({
    attachResizeListener: (t, e) => l0(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
  }),
  J4 = {
    current: void 0
  },
  $x = Fx({
    measureScroll: t => ({
      x: t.scrollLeft,
      y: t.scrollTop
    }),
    defaultParent: () => {
      if (!J4.current) {
        const t = new pW({});
        t.mount(window), t.setOptions({
          layoutScroll: !0
        }), J4.current = t
      }
      return J4.current
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none"
    },
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
  }),
  mW = {
    pan: {
      Feature: RU
    },
    drag: {
      Feature: IU,
      ProjectionNode: $x,
      MeasureLayout: Lx
    }
  };

function Iy(t, e, n) {
  const {
    props: r
  } = t;
  t.animationState && r.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    a = r[i];
  a && gt.postRender(() => a(e, A0(e)))
}
class gW extends l3 {
  mount() {
    const {
      current: e
    } = this.node;
    e && (this.unmount = m$(e, n => (Iy(this.node, n, "Start"), r => Iy(this.node, r, "End"))))
  }
  unmount() {}
}
class yW extends l3 {
  constructor() {
    super(...arguments), this.isActive = !1
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible")
    } catch {
      e = !0
    }!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
  }
  mount() {
    this.unmount = P0(l0(this.node.current, "focus", () => this.onFocus()), l0(this.node.current, "blur", () => this.onBlur()))
  }
  unmount() {}
}

function Ry(t, e, n) {
  const {
    props: r
  } = t;
  t.animationState && r.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    a = r[i];
  a && gt.postRender(() => a(e, A0(e)))
}
class vW extends l3 {
  mount() {
    const {
      current: e
    } = this.node;
    e && (this.unmount = w$(e, n => (Ry(this.node, n, "Start"), (r, {
      success: i
    }) => Ry(this.node, r, i ? "End" : "Cancel")), {
      useGlobalTarget: this.node.props.globalTapTarget
    }))
  }
  unmount() {}
}
const s9 = new WeakMap,
  Z4 = new WeakMap,
  wW = t => {
    const e = s9.get(t.target);
    e && e(t)
  },
  bW = t => {
    t.forEach(wW)
  };

function _W({
  root: t,
  ...e
}) {
  const n = t || document;
  Z4.has(n) || Z4.set(n, {});
  const r = Z4.get(n),
    i = JSON.stringify(e);
  return r[i] || (r[i] = new IntersectionObserver(bW, {
    root: t,
    ...e
  })), r[i]
}

function xW(t, e, n) {
  const r = _W(e);
  return s9.set(t, n), r.observe(t), () => {
    s9.delete(t), r.unobserve(t)
  }
}
const SW = {
  some: 0,
  all: 1
};
class EW extends l3 {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
  }
  startObserver() {
    this.unmount();
    const {
      viewport: e = {}
    } = this.node.getProps(), {
      root: n,
      margin: r,
      amount: i = "some",
      once: a
    } = e, l = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof i == "number" ? i : SW[i]
    }, c = h => {
      const {
        isIntersecting: p
      } = h;
      if (this.isInView === p || (this.isInView = p, a && !p && this.hasEnteredView)) return;
      p && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", p);
      const {
        onViewportEnter: m,
        onViewportLeave: y
      } = this.node.getProps(), v = p ? m : y;
      v && v(h)
    };
    return xW(this.node.current, l, c)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const {
      props: e,
      prevProps: n
    } = this.node;
    ["amount", "margin", "root"].some(TW(e, n)) && this.startObserver()
  }
  unmount() {}
}

function TW({
  viewport: t = {}
}, {
  viewport: e = {}
} = {}) {
  return n => t[n] !== e[n]
}
const CW = {
    inView: {
      Feature: EW
    },
    tap: {
      Feature: vW
    },
    focus: {
      Feature: yW
    },
    hover: {
      Feature: gW
    }
  },
  kW = {
    layout: {
      ProjectionNode: $x,
      MeasureLayout: Lx
    }
  },
  o9 = {
    current: null
  },
  zx = {
    current: !1
  };

function PW() {
  if (zx.current = !0, !!Uf)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => o9.current = t.matches;
      t.addListener(e), e()
    } else o9.current = !1
}
const AW = [...fx, Ln, s3],
  IW = t => AW.find(hx(t)),
  Ny = new WeakMap;

function RW(t, e, n) {
  for (const r in e) {
    const i = e[r],
      a = n[r];
    if (jn(i)) t.addValue(r, i);
    else if (jn(a)) t.addValue(r, o0(i, {
      owner: t
    }));
    else if (a !== i)
      if (t.hasValue(r)) {
        const l = t.getValue(r);
        l.liveStyle === !0 ? l.jump(i) : l.hasAnimated || l.set(i)
      } else {
        const l = t.getStaticValue(r);
        t.addValue(r, o0(l !== void 0 ? l : i, {
          owner: t
        }))
      }
  }
  for (const r in n) e[r] === void 0 && t.removeValue(r);
  return e
}
const Ly = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class NW {
  scrapeMotionValuesFromProps(e, n, r) {
    return {}
  }
  constructor({
    parent: e,
    props: n,
    presenceContext: r,
    reducedMotionConfig: i,
    blockInitialAnimation: a,
    visualState: l
  }, c = {}) {
    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = g5, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const C = D2.now();
      this.renderScheduledAt < C && (this.renderScheduledAt = C, gt.render(this.render, !1, !0))
    };
    const {
      latestValues: h,
      renderState: p,
      onUpdate: m
    } = l;
    this.onUpdate = m, this.latestValues = h, this.baseTarget = {
      ...h