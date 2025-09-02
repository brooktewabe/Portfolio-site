  }, rh.apply(this, arguments)
}

function eT(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i, a;
  for (a = 0; a < r.length; a++) i = r[a], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n
}

function tT(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
}

function nT(t, e) {
  return t.button === 0 && (!e || e === "_self") && !tT(t)
}
const rT = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
  iT = "6";
try {
  window.__reactRouterVersion = iT
} catch {}
const sT = "startTransition",
  Bp = eh[sT];

function oT(t) {
  let {
    basename: e,
    children: n,
    future: r,
    window: i
  } = t, a = M.useRef();
  a.current == null && (a.current = lE({
    window: i,
    v5Compat: !0
  }));
  let l = a.current,
    [c, h] = M.useState({
      action: l.action,
      location: l.location
    }),
    {
      v7_startTransition: p
    } = r || {},
    m = M.useCallback(y => {
      p && Bp ? Bp(() => h(y)) : h(y)
    }, [h, p]);
  return M.useLayoutEffect(() => l.listen(m), [l, m]), M.useEffect(() => XE(r), [r]), M.createElement(JE, {
    basename: e,
    children: n,
    location: c.location,
    navigationType: c.action,
    navigator: l,
    future: r
  })
}
const aT = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
  lT = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  uT = M.forwardRef(function(e, n) {
    let {
      onClick: r,
      relative: i,
      reloadDocument: a,
      replace: l,
      state: c,
      target: h,
      to: p,
      preventScrollReset: m,
      viewTransition: y
    } = e, v = eT(e, rT), {
      basename: C
    } = M.useContext(ts), P, k = !1;
    if (typeof p == "string" && lT.test(p) && (P = p, aT)) try {
      let U = new URL(window.location.href),
        H = p.startsWith("//") ? new URL(U.protocol + p) : new URL(p),
        $ = l9(H.pathname, C);
      H.origin === U.origin && $ != null ? p = $ + H.search + H.hash : k = !0
    } catch {}
    let R = DE(p, {
        relative: i
      }),
      W = cT(p, {
        replace: l,
        state: c,
        target: h,
        preventScrollReset: m,
        relative: i,
        viewTransition: y
      });

    function q(U) {
      r && r(U), U.defaultPrevented || W(U)
    }
    return M.createElement("a", rh({}, v, {
      href: P || R,
      onClick: k || a ? r : q,
      ref: n,
      target: h
    }))
  });
var $p;
(function(t) {
  t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher", t.useViewTransitionState = "useViewTransitionState"
})($p || ($p = {}));
var zp;
(function(t) {
  t.UseFetcher = "useFetcher", t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration"
})(zp || (zp = {}));

function cT(t, e) {
  let {
    target: n,
    replace: r,
    state: i,
    preventScrollReset: a,
    relative: l,
    viewTransition: c
  } = e === void 0 ? {} : e, h = c9(), p = Ju(), m = Hy(t, {
    relative: l
  });
  return M.useCallback(y => {
    if (nT(y, n)) {
      y.preventDefault();
      let v = r !== void 0 ? r : uu(p) === uu(m);
      h(t, {
        replace: v,
        state: i,
        preventScrollReset: a,
        relative: l,
        viewTransition: c
      })
    }
  }, [p, h, m, r, i, n, t, a, l, c])
}
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dT = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Qy = (...t) => t.filter((e, n, r) => !!e && e.trim() !== "" && r.indexOf(e) === n).join(" ").trim();
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var hT = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fT = M.forwardRef(({
  color: t = "currentColor",
  size: e = 24,
  strokeWidth: n = 2,
  absoluteStrokeWidth: r,
  className: i = "",
  children: a,
  iconNode: l,
  ...c
}, h) => M.createElement("svg", {
  ref: h,
  ...hT,
  width: e,
  height: e,
  stroke: t,
  strokeWidth: r ? Number(n) * 24 / Number(e) : n,
  className: Qy("lucide", i),
  ...c
}, [...l.map(([p, m]) => M.createElement(p, m)), ...Array.isArray(a) ? a : [a]]));
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = (t, e) => {
  const n = M.forwardRef(({
    className: r,
    ...i
  }, a) => M.createElement(fT, {
    ref: a,
    iconNode: e,
    className: Qy(`lucide-${dT(t)}`, r),
    ...i
  }));
  return n.displayName = `${t}`, n
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pT = Oe("ArrowLeft", [
  ["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
  }],
  ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mT = Oe("ArrowRight", [
  ["path", {
    d: "M5 12h14",
    key: "1ays0h"
  }],
  ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gT = Oe("ArrowUpRight", [
  ["path", {
    d: "M7 7h10v10",
    key: "1tivn9"
  }],
  ["path", {
    d: "M7 17 17 7",
    key: "1vkiza"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yy = Oe("Award", [
  ["path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
    key: "1yiouv"
  }],
  ["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yT = Oe("Boxes", [
  ["path", {
    d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
    key: "lc1i9w"
  }],
  ["path", {
    d: "m7 16.5-4.74-2.85",
    key: "1o9zyk"
  }],
  ["path", {
    d: "m7 16.5 5-3",
    key: "va8pkn"
  }],
  ["path", {
    d: "M7 16.5v5.17",
    key: "jnp8gn"
  }],
  ["path", {
    d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
    key: "8zsnat"
  }],
  ["path", {
    d: "m17 16.5-5-3",
    key: "8arw3v"
  }],
  ["path", {
    d: "m17 16.5 4.74-2.85",
    key: "8rfmw"
  }],
  ["path", {
    d: "M17 16.5v5.17",
    key: "k6z78m"
  }],
  ["path", {
    d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
    key: "1xygjf"
  }],
  ["path", {
    d: "M12 8 7.26 5.15",
    key: "1vbdud"
  }],
  ["path", {
    d: "m12 8 4.74-2.85",
    key: "3rx089"
  }],
  ["path", {
    d: "M12 13.5V8",
    key: "1io7kd"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vT = Oe("BriefcaseBusiness", [
  ["path", {
    d: "M12 12h.01",
    key: "1mp3jc"
  }],
  ["path", {
    d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
    key: "1ksdt3"
  }],
  ["path", {
    d: "M22 13a18.15 18.15 0 0 1-20 0",
    key: "12hx5q"
  }],
  ["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "6",
    rx: "2",
    key: "i6l2r4"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wT = Oe("ChevronRight", [
  ["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bT = Oe("CircleAlert", [
  ["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
  }],
  ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
  }],
  ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xy = Oe("CircleUserRound", [
  ["path", {
    d: "M18 20a6 6 0 0 0-12 0",
    key: "1qehca"
  }],
  ["circle", {
    cx: "12",
    cy: "10",
    r: "4",
    key: "1h16sb"
  }],
  ["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d9 = Oe("CodeXml", [
  ["path", {
    d: "m18 16 4-4-4-4",
    key: "1inbqp"
  }],
  ["path", {
    d: "m6 8-4 4 4 4",
    key: "15zrgr"
  }],
  ["path", {
    d: "m14.5 4-5 16",
    key: "e7oirm"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oo = Oe("Code", [
  ["polyline", {
    points: "16 18 22 12 16 6",
    key: "z7tu5w"
  }],
  ["polyline", {
    points: "8 6 2 12 8 18",
    key: "1eg1df"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _T = Oe("Cpu", [
  ["rect", {
    width: "16",
    height: "16",
    x: "4",
    y: "4",
    rx: "2",
    key: "14l7u7"
  }],
  ["rect", {
    width: "6",
    height: "6",
    x: "9",
    y: "9",
    rx: "1",
    key: "5aljv4"
  }],
  ["path", {
    d: "M15 2v2",
    key: "13l42r"
  }],
  ["path", {
    d: "M15 20v2",
    key: "15mkzm"
  }],
  ["path", {
    d: "M2 15h2",
    key: "1gxd5l"
  }],
  ["path", {
    d: "M2 9h2",
    key: "1bbxkp"
  }],
  ["path", {
    d: "M20 15h2",
    key: "19e6y8"
  }],
  ["path", {
    d: "M20 9h2",
    key: "19tzq7"
  }],
  ["path", {
    d: "M9 2v2",
    key: "165o2o"
  }],
  ["path", {
    d: "M9 20v2",
    key: "i2bqo8"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O3 = Oe("ExternalLink", [
  ["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
  }],
  ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
  }],
  ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xT = Oe("Facebook", [
  ["path", {
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    key: "1jg4f8"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ST = Oe("FileText", [
  ["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
  }],
  ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
  }],
  ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
  }],
  ["path", {
    d: "M16 13H8",
    key: "t4e002"
  }],
  ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h9 = Oe("Github", [
  ["path", {
    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    key: "tonef"
  }],
  ["path", {
    d: "M9 18c-4.51 2-5-2-7-2",
    key: "9comsn"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f9 = Oe("Globe", [
  ["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
  }],
  ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
  }],
  ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jy = Oe("GraduationCap", [
  ["path", {
    d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
    key: "j76jl0"
  }],
  ["path", {
    d: "M22 10v6",
    key: "1lu8f3"
  }],
  ["path", {
    d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
    key: "1r8lef"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zy = Oe("Instagram", [
  ["rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    rx: "5",
    ry: "5",
    key: "2e1cvw"
  }],
  ["path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    key: "9exkf1"
  }],
  ["line", {
    x1: "17.5",
    x2: "17.51",
    y1: "6.5",
    y2: "6.5",
    key: "r4j83e"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ET = Oe("Layers", [
  ["path", {
    d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
    key: "8b97xw"
  }],
  ["path", {
    d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",
    key: "dd6zsq"
  }],
  ["path", {
    d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",
    key: "ep9fru"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ev = Oe("Linkedin", [
  ["path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    key: "c2jq9f"
  }],
  ["rect", {
    width: "4",
    height: "12",
    x: "2",
    y: "9",
    key: "mk3on5"
  }],
  ["circle", {
    cx: "4",
    cy: "4",
    r: "2",
    key: "bt5ra8"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TT = Oe("LoaderCircle", [
  ["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tv = Oe("Mail", [
  ["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
  }],
  ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CT = Oe("Menu", [
  ["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
  }],
  ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
  }],
  ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kT = Oe("MessageCircle", [
  ["path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
    key: "vv11sd"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PT = Oe("MessageSquare", [
  ["path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    key: "1lielz"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = Oe("Package", [
  ["path", {
    d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
    key: "1a0edw"
  }],
  ["path", {
    d: "M12 22V12",
    key: "d0xqtd"
  }],
  ["path", {
    d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",
    key: "yx3hmr"
  }],
  ["path", {
    d: "m7.5 4.27 9 5.15",
    key: "1c824w"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AT = Oe("PanelsTopLeft", [
  ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    key: "afitv7"
  }],
  ["path", {
    d: "M3 9h18",
    key: "1pudct"
  }],
  ["path", {
    d: "M9 21V9",
    key: "1oto5p"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nv = Oe("Send", [
  ["path", {
    d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
    key: "1ffxy3"
  }],
  ["path", {
    d: "m21.854 2.147-10.94 10.939",
    key: "12cjpa"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IT = Oe("Share2", [
  ["circle", {
    cx: "18",
    cy: "5",
    r: "3",
    key: "gq8acd"
  }],
  ["circle", {
    cx: "6",
    cy: "12",
    r: "3",
    key: "w7nqdw"
  }],
  ["circle", {
    cx: "18",
    cy: "19",
    r: "3",
    key: "1xt0gg"
  }],
  ["line", {
    x1: "8.59",
    x2: "15.42",
    y1: "13.51",
    y2: "17.49",
    key: "47mynk"
  }],
  ["line", {
    x1: "15.41",
    x2: "8.59",
    y1: "6.51",
    y2: "10.49",
    key: "1n3mei"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ih = Oe("Sparkles", [
  ["path", {
    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
    key: "4pj2yx"
  }],
  ["path", {
    d: "M20 3v4",
    key: "1olli1"
  }],
  ["path", {
    d: "M22 5h-4",
    key: "1gvqau"
  }],
  ["path", {
    d: "M4 17v2",
    key: "vumght"
  }],
  ["path", {
    d: "M5 18H3",
    key: "zchphs"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RT = Oe("Star", [
  ["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rv = Oe("User", [
  ["path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
    key: "975kel"
  }],
  ["circle", {
    cx: "12",
    cy: "7",
    r: "4",
    key: "17ys0d"
  }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NT = Oe("X", [
  ["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
  }],
  ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
  }]
]);
var LT = Object.defineProperty,
  MT = Object.defineProperties,
  DT = Object.getOwnPropertyDescriptors,
  cu = Object.getOwnPropertySymbols,
  iv = Object.prototype.hasOwnProperty,
  sv = Object.prototype.propertyIsEnumerable,
  Wp = (t, e, n) => e in t ? LT(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
  }) : t[e] = n,
  Bi = (t, e) => {
    for (var n in e || (e = {})) iv.call(e, n) && Wp(t, n, e[n]);
    if (cu)
      for (var n of cu(e)) sv.call(e, n) && Wp(t, n, e[n]);
    return t
  },
  sh = (t, e) => MT(t, DT(e)),
  ov = (t, e) => {
    var n = {};
    for (var r in t) iv.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && cu)
      for (var r of cu(t)) e.indexOf(r) < 0 && sv.call(t, r) && (n[r] = t[r]);
    return n
  },
  OT = Object.defineProperty,
  jT = Object.defineProperties,
  VT = Object.getOwnPropertyDescriptors,
  du = Object.getOwnPropertySymbols,
  av = Object.prototype.hasOwnProperty,
  lv = Object.prototype.propertyIsEnumerable,
  oh = (t, e, n) => e in t ? OT(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
  }) : t[e] = n,
  vn = (t, e) => {
    for (var n in e || (e = {})) av.call(e, n) && oh(t, n, e[n]);
    if (du)
      for (var n of du(e)) lv.call(e, n) && oh(t, n, e[n]);
    return t
  },
  sr = (t, e) => jT(t, VT(e)),
  uv = (t, e) => {
    var n = {};
    for (var r in t) av.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && du)
      for (var r of du(t)) e.indexOf(r) < 0 && lv.call(t, r) && (n[r] = t[r]);
    return n
  },
  we = (t, e, n) => oh(t, typeof e != "symbol" ? e + "" : e, n),
  ke = (t, e, n) => new Promise((r, i) => {
    var a = h => {
        try {
          c(n.next(h))
        } catch (p) {
          i(p)
        }
      },
      l = h => {
        try {
          c(n.throw(h))
        } catch (p) {
          i(p)
        }
      },
      c = h => h.done ? r(h.value) : Promise.resolve(h.value).then(a, l);
    c((n = n.apply(t, e)).next())
  }),
  FT = class {
    requestAnimationFrame(t) {
      return requestAnimationFrame(t)
    }
    cancelAnimationFrame(t) {
      cancelAnimationFrame(t)
    }
  },
  BT = class {
    constructor() {
      we(this, "_lastHandleId", 0), we(this, "_lastImmediate", null)
    }
    requestAnimationFrame(t) {
      return this._lastHandleId >= Number.MAX_SAFE_INTEGER && (this._lastHandleId = 0), this._lastHandleId += 1, this._lastImmediate = setImmediate(() => {
        t(Date.now())
      }), this._lastHandleId
    }
    cancelAnimationFrame(t) {
      this._lastImmediate && clearImmediate(this._lastImmediate)
    }
  },
  $T = class {
    constructor() {
      we(this, "_strategy"), this._strategy = typeof requestAnimationFrame == "function" ? new FT : new BT
    }
    requestAnimationFrame(t) {
      return this._strategy.requestAnimationFrame(t)
    }
    cancelAnimationFrame(t) {
      this._strategy.cancelAnimationFrame(t)
    }
  },
  Mn = typeof window < "u" && typeof window.document < "u",
  a4 = new Uint8Array([80, 75, 3, 4]),
  zT = ["v", "ip", "op", "layers", "fr", "w", "h"],
  cv = "0.38.2",
  dv = "@lottiefiles/dotlottie-web",
  UT = .75,
  WT = (() => {
    var t, e = typeof document < "u" ? (t = document.currentScript) == null ? void 0 : t.src : void 0;
    return function(n = {}) {
      var r, i = n,
        a, l, c = new Promise((T, S) => {
          a = T, l = S
        }),
        h = Object.assign({}, i),
        p = "./this.program",
        m = "",
        y;
      typeof document < "u" && document.currentScript && (m = document.currentScript.src), e && (m = e), m.startsWith("blob:") ? m = "" : m = m.substr(0, m.replace(/[?#].*/, "").lastIndexOf("/") + 1), y = T => fetch(T, {
        credentials: "same-origin"
      }).then(S => S.ok ? S.arrayBuffer() : Promise.reject(Error(S.status + " : " + S.url)));
      var v = i.print || console.log.bind(console),
        C = i.printErr || console.error.bind(console);
      Object.assign(i, h), h = null, i.thisProgram && (p = i.thisProgram);
      var P = i.wasmBinary,
        k, R = !1,
        W, q, U, H, $, X, D, A, j;

      function x() {
        var T = k.buffer;
        i.HEAP8 = q = new Int8Array(T), i.HEAP16 = H = new Int16Array(T), i.HEAPU8 = U = new Uint8Array(T), i.HEAPU16 = $ = new Uint16Array(T), i.HEAP32 = X = new Int32Array(T), i.HEAPU32 = D = new Uint32Array(T), i.HEAPF32 = A = new Float32Array(T), i.HEAPF64 = j = new Float64Array(T)
      }
      var N = [],
        V = [],
        L = [];

      function h1() {
        var T = i.preRun.shift();
        N.unshift(T)
      }
      var A1 = 0,
        V1 = null;

      function k1(T) {
        var S;
        throw (S = i.onAbort) == null || S.call(i, T), T = "Aborted(" + T + ")", C(T), R = !0, T = new WebAssembly.RuntimeError(T + ". Build with -sASSERTIONS for more info."), l(T), T
      }
      var c1 = T => T.startsWith("data:application/octet-stream;base64,"),
        y1;

      function f1(T) {
        if (T == y1 && P) return new Uint8Array(P);
        throw "both async and sync fetching of the wasm failed"
      }

      function K(T) {
        return P ? Promise.resolve().then(() => f1(T)) : y(T).then(S => new Uint8Array(S), () => f1(T))
      }

      function s1(T, S, F) {
        return K(T).then(B => WebAssembly.instantiate(B, S)).then(F, B => {
          C(`failed to asynchronously prepare wasm: ${B}`), k1(B)
        })
      }

      function E1(T, S) {
        var F = y1;
        return P || typeof WebAssembly.instantiateStreaming != "function" || c1(F) || typeof fetch != "function" ? s1(F, T, S) : fetch(F, {
          credentials: "same-origin"
        }).then(B => WebAssembly.instantiateStreaming(B, T).then(S, function(Q) {
          return C(`wasm streaming compile failed: ${Q}`), C("falling back to ArrayBuffer instantiation"), s1(F, T, S)
        }))
      }
      class M1 {
        constructor(S) {
          we(this, "name", "ExitStatus"), this.message = `Program terminated with exit(${S})`, this.status = S
        }
      }
      var F1 = T => {
          for (; 0 < T.length;) T.shift()(i)
        },
        $1 = i.noExitRuntime || !0,
        K1 = typeof TextDecoder < "u" ? new TextDecoder : void 0,
        B1 = (T, S = 0, F = NaN) => {
          var B = S + F;
          for (F = S; T[F] && !(F >= B);) ++F;
          if (16 < F - S && T.buffer && K1) return K1.decode(T.subarray(S, F));
          for (B = ""; S < F;) {
            var Q = T[S++];
            if (Q & 128) {
              var r1 = T[S++] & 63;
              if ((Q & 224) == 192) B += String.fromCharCode((Q & 31) << 6 | r1);
              else {
                var x1 = T[S++] & 63;
                Q = (Q & 240) == 224 ? (Q & 15) << 12 | r1 << 6 | x1 : (Q & 7) << 18 | r1 << 12 | x1 << 6 | T[S++] & 63, 65536 > Q ? B += String.fromCharCode(Q) : (Q -= 65536, B += String.fromCharCode(55296 | Q >> 10, 56320 | Q & 1023))
              }
            } else B += String.fromCharCode(Q)
          }
          return B
        };
      class ee {
        constructor(S) {
          this.wa = S - 24
        }
      }
      var me = 0,
        he = (T, S, F) => {
          var B = U;
          if (0 < F) {
            F = S + F - 1;
            for (var Q = 0; Q < T.length; ++Q) {
              var r1 = T.charCodeAt(Q);
              if (55296 <= r1 && 57343 >= r1) {
                var x1 = T.charCodeAt(++Q);
                r1 = 65536 + ((r1 & 1023) << 10) | x1 & 1023
              }
              if (127 >= r1) {
                if (S >= F) break;
                B[S++] = r1
              } else {
                if (2047 >= r1) {
                  if (S + 1 >= F) break;
                  B[S++] = 192 | r1 >> 6
                } else {
                  if (65535 >= r1) {
                    if (S + 2 >= F) break;
                    B[S++] = 224 | r1 >> 12
                  } else {
                    if (S + 3 >= F) break;
                    B[S++] = 240 | r1 >> 18, B[S++] = 128 | r1 >> 12 & 63
                  }
                  B[S++] = 128 | r1 >> 6 & 63
                }
                B[S++] = 128 | r1 & 63
              }
            }
            B[S] = 0
          }
        },
        be = {},
        J1 = T => {
          for (; T.length;) {
            var S = T.pop();
            T.pop()(S)
          }
        };

      function ie(T) {
        return this.fromWireType(D[T >> 2])
      }
      var Ie = {},
        He = {},
        qe = {},
        Qe, ot = (T, S, F) => {
          function B(l1) {
            if (l1 = F(l1), l1.length !== T.length) throw new Qe("Mismatched type converter count");
            for (var N1 = 0; N1 < T.length; ++N1) wt(T[N1], l1[N1])
          }
          T.forEach(l1 => qe[l1] = S);
          var Q = Array(S.length),
            r1 = [],
            x1 = 0;
          S.forEach((l1, N1) => {
            He.hasOwnProperty(l1) ? Q[N1] = He[l1] : (r1.push(l1), Ie.hasOwnProperty(l1) || (Ie[l1] = []), Ie[l1].push(() => {
              Q[N1] = He[l1], ++x1, x1 === r1.length && B(Q)
            }))
          }), r1.length === 0 && B(Q)
        },
        It, _e = T => {
          for (var S = ""; U[T];) S += It[U[T++]];
          return S
        },
        T1;

      function Fn(T, S, F = {}) {
        var B = S.name;
        if (!T) throw new T1(`type "${B}" must have a positive integer typeid pointer`);
        if (He.hasOwnProperty(T)) {
          if (F.ab) return;
          throw new T1(`Cannot register type '${B}' twice`)
        }
        He[T] = S, delete qe[T], Ie.hasOwnProperty(T) && (S = Ie[T], delete Ie[T], S.forEach(Q => Q()))
      }

      function wt(T, S, F = {}) {
        return Fn(T, S, F)
      }
      var v1 = T => {
          throw new T1(T.ua.xa.va.name + " instance already deleted")
        },
        J = !1,
        p1 = () => {},
        w1 = (T, S, F) => S === F ? T : F.Aa === void 0 ? null : (T = w1(T, S, F.Aa), T === null ? null : F.Ua(T)),
        se = {},
        oe = {},
        ye = (T, S) => {
          if (S === void 0) throw new T1("ptr should not be undefined");
          for (; T.Aa;) S = T.Ka(S), T = T.Aa;
          return oe[S]
        },
        i1 = (T, S) => {
          if (!S.xa || !S.wa) throw new Qe("makeClassHandle requires ptr and ptrType");
          if (!!S.Ba != !!S.za) throw new Qe("Both smartPtrType and smartPtr must be specified");
          return S.count = {
            value: 1
          }, d1(Object.create(T, {
            ua: {
              value: S,
              writable: !0
            }
          }))
        },
        d1 = T => typeof FinalizationRegistry > "u" ? (d1 = S => S, T) : (J = new FinalizationRegistry(S => {
          S = S.ua, --S.count.value, S.count.value === 0 && (S.za ? S.Ba.Ea(S.za) : S.xa.va.Ea(S.wa))
        }), d1 = S => {
          var F = S.ua;
          return F.za && J.register(S, {
            ua: F
          }, S), S
        }, p1 = S => {
          J.unregister(S)
        }, d1(T));

      function j1() {}
      var L1 = (T, S) => Object.defineProperty(S, "name", {
          value: T
        }),
        D1 = (T, S, F) => {
          if (T[S].ya === void 0) {
            var B = T[S];
            T[S] = function(...Q) {
              if (!T[S].ya.hasOwnProperty(Q.length)) throw new T1(`Function '${F}' called with an invalid number of arguments (${Q.length}) - expects one of (${T[S].ya})!`);
              return T[S].ya[Q.length].apply(this, Q)
            }, T[S].ya = [], T[S].ya[B.Ha] = B
          }
        },
        le = (T, S, F) => {
          if (i.hasOwnProperty(T)) {
            if (F === void 0 || i[T].ya !== void 0 && i[T].ya[F] !== void 0) throw new T1(`Cannot register public name '${T}' twice`);
            if (D1(i, T, T), i[T].ya.hasOwnProperty(F)) throw new T1(`Cannot register multiple overloads of a function with the same number of arguments (${F})!`);
            i[T].ya[F] = S
          } else i[T] = S, i[T].Ha = F
        },
        Pe = T => {
          T = T.replace(/[^a-zA-Z0-9_]/g, "$");
          var S = T.charCodeAt(0);
          return 48 <= S && 57 >= S ? `_${T}` : T
        };

      function Te(T, S, F, B, Q, r1, x1, l1) {
        this.name = T, this.constructor = S, this.Ga = F, this.Ea = B, this.Aa = Q, this.Wa = r1, this.Ka = x1, this.Ua = l1, this.cb = []
      }
      var Se = (T, S, F) => {
        for (; S !== F;) {
          if (!S.Ka) throw new T1(`Expected null or instance of ${F.name}, got an instance of ${S.name}`);
          T = S.Ka(T), S = S.Aa
        }
        return T
      };

      function Re(T, S) {
        if (S === null) {
          if (this.Na) throw new T1(`null is not a valid ${this.name}`);
          return 0
        }
        if (!S.ua) throw new T1(`Cannot pass "${F2(S)}" as a ${this.name}`);
        if (!S.ua.wa) throw new T1(`Cannot pass deleted object as a pointer of type ${this.name}`);
        return Se(S.ua.wa, S.ua.xa.va, this.va)
      }

      function Ce(T, S) {
        if (S === null) {
          if (this.Na) throw new T1(`null is not a valid ${this.name}`);
          if (this.Ma) {
            var F = this.Oa();
            return T !== null && T.push(this.Ea, F), F
          }
          return 0
        }
        if (!S || !S.ua) throw new T1(`Cannot pass "${F2(S)}" as a ${this.name}`);
        if (!S.ua.wa) throw new T1(`Cannot pass deleted object as a pointer of type ${this.name}`);
        if (!this.La && S.ua.xa.La) throw new T1(`Cannot convert argument of type ${S.ua.Ba?S.ua.Ba.name:S.ua.xa.name} to parameter type ${this.name}`);
        if (F = Se(S.ua.wa, S.ua.xa.va, this.va), this.Ma) {
          if (S.ua.za === void 0) throw new T1("Passing raw pointer to smart pointer is illegal");
          switch (this.ib) {
            case 0:
              if (S.ua.Ba === this) F = S.ua.za;
              else throw new T1(`Cannot convert argument of type ${S.ua.Ba?S.ua.Ba.name:S.ua.xa.name} to parameter type ${this.name}`);
              break;
            case 1:
              F = S.ua.za;
              break;
            case 2:
              if (S.ua.Ba === this) F = S.ua.za;
              else {
                var B = S.clone();
                F = this.eb(F, Tn(() => B.delete())), T !== null && T.push(this.Ea, F)
              }
              break;
            default:
              throw new T1("Unsupporting sharing policy")
          }
        }
        return F
      }

      function tt(T, S) {
        if (S === null) {
          if (this.Na) throw new T1(`null is not a valid ${this.name}`);
          return 0
        }
        if (!S.ua) throw new T1(`Cannot pass "${F2(S)}" as a ${this.name}`);
        if (!S.ua.wa) throw new T1(`Cannot pass deleted object as a pointer of type ${this.name}`);
        if (S.ua.xa.La) throw new T1(`Cannot convert argument of type ${S.ua.xa.name} to parameter type ${this.name}`);
        return Se(S.ua.wa, S.ua.xa.va, this.va)
      }

      function ct(T, S, F, B, Q, r1, x1, l1, N1, O1, q1) {
        this.name = T, this.va = S, this.Na = F, this.La = B, this.Ma = Q, this.bb = r1, this.ib = x1, this.Sa = l1, this.Oa = N1, this.eb = O1, this.Ea = q1, Q || S.Aa !== void 0 ? this.toWireType = Ce : (this.toWireType = B ? Re : tt, this.Da = null)
      }
      var rn = (T, S, F) => {
          if (!i.hasOwnProperty(T)) throw new Qe("Replacing nonexistent public symbol");
          i[T].ya !== void 0 && F !== void 0 ? i[T].ya[F] = S : (i[T] = S, i[T].Ha = F)
        },
        nt, Cr = (T, S, F = []) => (T.includes("j") ? (T = T.replace(/p/g, "i"), S = (0, i["dynCall_" + T])(S, ...F)) : S = nt.get(S)(...F), S),
        En = (T, S) => (...F) => Cr(T, S, F),
        P1 = (T, S) => {
          T = _e(T);
          var F = T.includes("j") ? En(T, S) : nt.get(S);
          if (typeof F != "function") throw new T1(`unknown function pointer with signature ${T}: ${S}`);
          return F
        },
        R1, ve = T => {
          T = Kr(T);
          var S = _e(T);
          return fe(T), S
        },
        ce = (T, S) => {
          function F(r1) {
            Q[r1] || He[r1] || (qe[r1] ? qe[r1].forEach(F) : (B.push(r1), Q[r1] = !0))
          }
          var B = [],
            Q = {};
          throw S.forEach(F), new R1(`${T}: ` + B.map(ve).join([", "]))
        },
        Ne = (T, S) => {
          for (var F = [], B = 0; B < T; B++) F.push(D[S + 4 * B >> 2]);
          return F
        };

      function Vt(T) {
        for (var S = 1; S < T.length; ++S)
          if (T[S] !== null && T[S].Da === void 0) return !0;
        return !1
      }

      function sn(T, S, F, B, Q) {
        var r1 = S.length;
        if (2 > r1) throw new T1("argTypes array size mismatch! Must at least get return value and 'this' types!");
        var x1 = S[1] !== null && F !== null,
          l1 = Vt(S),
          N1 = S[0].name !== "void",
          O1 = r1 - 2,
          q1 = Array(O1),
          Y1 = [],
          $e = [];
        return L1(T, function(...Yt) {
          if ($e.length = 0, Y1.length = x1 ? 2 : 1, Y1[0] = Q, x1) {
            var Xe = S[1].toWireType($e, this);
            Y1[1] = Xe
          }
          for (var rt = 0; rt < O1; ++rt) q1[rt] = S[rt + 2].toWireType($e, Yt[rt]), Y1.push(q1[rt]);
          if (Yt = B(...Y1), l1) J1($e);
          else
            for (rt = x1 ? 1 : 2; rt < S.length; rt++) {
              var pn = rt === 1 ? Xe : q1[rt - 2];
              S[rt].Da !== null && S[rt].Da(pn)
            }
          return Xe = N1 ? S[0].fromWireType(Yt) : void 0, Xe
        })
      }
      var Ft = T => {
          T = T.trim();
          let S = T.indexOf("(");
          return S !== -1 ? T.substr(0, S) : T
        },
        kr = [],
        hn = [],
        a2 = T => {
          9 < T && --hn[T + 1] === 0 && (hn[T] = void 0, kr.push(T))
        },
        gi = T => {
          if (!T) throw new T1("Cannot use deleted val. handle = " + T);
          return hn[T]
        },
        Tn = T => {
          switch (T) {
            case void 0:
              return 2;
            case null:
              return 4;
            case !0:
              return 6;
            case !1:
              return 8;
            default:
              let S = kr.pop() || hn.length;
              return hn[S] = T, hn[S + 1] = 1, S
          }
        },
        l2 = {
          name: "emscripten::val",
          fromWireType: T => {
            var S = gi(T);
            return a2(T), S
          },
          toWireType: (T, S) => Tn(S),
          Ca: 8,
          readValueFromPointer: ie,
          Da: null
        },
        cr = (T, S, F) => {
          switch (S) {
            case 1:
              return F ? function(B) {
                return this.fromWireType(q[B])
              } : function(B) {
                return this.fromWireType(U[B])
              };
            case 2:
              return F ? function(B) {
                return this.fromWireType(H[B >> 1])
              } : function(B) {
                return this.fromWireType($[B >> 1])
              };
            case 4:
              return F ? function(B) {
                return this.fromWireType(X[B >> 2])
              } : function(B) {
                return this.fromWireType(D[B >> 2])
              };
            default:
              throw new TypeError(`invalid integer width (${S}): ${T}`)
          }
        },
        yi = (T, S) => {
          var F = He[T];
          if (F === void 0) throw T = `${S} has unknown type ${ve(T)}`, new T1(T);
          return F
        },
        F2 = T => {
          if (T === null) return "null";
          var S = typeof T;
          return S === "object" || S === "array" || S === "function" ? T.toString() : "" + T
        },
        vi = (T, S) => {
          switch (S) {
            case 4:
              return function(F) {
                return this.fromWireType(A[F >> 2])
              };
            case 8:
              return function(F) {
                return this.fromWireType(j[F >> 3])
              };
            default:
              throw new TypeError(`invalid float width (${S}): ${T}`)
          }
        },
        wi = (T, S, F) => {
          switch (S) {
            case 1:
              return F ? B => q[B] : B => U[B];
            case 2:
              return F ? B => H[B >> 1] : B => $[B >> 1];
            case 4:
              return F ? B => X[B >> 2] : B => D[B >> 2];
            default:
              throw new TypeError(`invalid integer width (${S}): ${T}`)
          }
        },
        u3 = Object.assign({
          optional: !0
        }, l2),
        c3 = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0,
        Bo = (T, S) => {
          for (var F = T >> 1, B = F + S / 2; !(F >= B) && $[F];) ++F;
          if (F <<= 1, 32 < F - T && c3) return c3.decode(U.subarray(T, F));
          for (F = "", B = 0; !(B >= S / 2); ++B) {
            var Q = H[T + 2 * B >> 1];
            if (Q == 0) break;
            F += String.fromCharCode(Q)
          }
          return F
        },
        Ze = (T, S, F) => {
          if (F != null || (F = 2147483647), 2 > F) return 0;
          F -= 2;
          var B = S;
          F = F < 2 * T.length ? F / 2 : T.length;
          for (var Q = 0; Q < F; ++Q) H[S >> 1] = T.charCodeAt(Q), S += 2;
          return H[S >> 1] = 0, S - B
        },
        hs = T => 2 * T.length,
        B2 = (T, S) => {
          for (var F = 0, B = ""; !(F >= S / 4);) {
            var Q = X[T + 4 * F >> 2];
            if (Q == 0) break;
            ++F, 65536 <= Q ? (Q -= 65536, B += String.fromCharCode(55296 | Q >> 10, 56320 | Q & 1023)) : B += String.fromCharCode(Q)
          }
          return B
        },
        u2 = (T, S, F) => {
          if (F != null || (F = 2147483647), 4 > F) return 0;
          var B = S;
          F = B + F - 4;
          for (var Q = 0; Q < T.length; ++Q) {
            var r1 = T.charCodeAt(Q);
            if (55296 <= r1 && 57343 >= r1) {
              var x1 = T.charCodeAt(++Q);
              r1 = 65536 + ((r1 & 1023) << 10) | x1 & 1023
            }
            if (X[S >> 2] = r1, S += 4, S + 4 > F) break
          }
          return X[S >> 2] = 0, S - B
        },
        Xn = T => {
          for (var S = 0, F = 0; F < T.length; ++F) {
            var B = T.charCodeAt(F);
            55296 <= B && 57343 >= B && ++F, S += 4
          }
          return S
        },
        $2 = 0,
        bi = [],
        z2 = T => {
          var S = bi.length;
          return bi.push(T), S
        },
        Bn = (T, S) => {
          for (var F = Array(T), B = 0; B < T; ++B) F[B] = yi(D[S + 4 * B >> 2], "parameter " + B);
          return F
        },
        fs = Reflect.construct,
        Rt = {},
        _i = T => {
          if (!(T instanceof M1 || T == "unwind")) throw T
        },
        d3 = T => {
          var S;
          throw W = T, $1 || 0 < $2 || ((S = i.onExit) == null || S.call(i, T), R = !0), new M1(T)
        },
        ps = T => {
          if (!R) try {
            if (T(), !($1 || 0 < $2)) try {
              W = T = W, d3(T)
            } catch (S) {
              _i(S)
            }
          } catch (S) {
            _i(S)
          }
        },
        c2 = {},
        U2 = () => {
          if (!Pr) {
            var T = {
                USER: "web_user",
                LOGNAME: "web_user",
                PATH: "/",
                PWD: "/",
                HOME: "/home/web_user",
                LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                _: p || "./this.program"
              },
              S;
            for (S in c2) c2[S] === void 0 ? delete T[S] : T[S] = c2[S];
            var F = [];
            for (S in T) F.push(`${S}=${T[S]}`);
            Pr = F
          }
          return Pr
        },
        Pr, W2 = [null, [],
          []
        ],
        $o = () => {
          if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") return T => crypto.getRandomValues(T);
          k1("initRandomDevice")
        },
        Ar = T => (Ar = $o())(T);
      Qe = i.InternalError = class extends Error {
        constructor(T) {
          super(T), this.name = "InternalError"
        }
      };
      for (var Cn = Array(256), Ir = 0; 256 > Ir; ++Ir) Cn[Ir] = String.fromCharCode(Ir);
      It = Cn, T1 = i.BindingError = class extends Error {
        constructor(T) {
          super(T), this.name = "BindingError"
        }
      }, Object.assign(j1.prototype, {
        isAliasOf: function(T) {
          if (!(this instanceof j1 && T instanceof j1)) return !1;
          var S = this.ua.xa.va,
            F = this.ua.wa;
          T.ua = T.ua;
          var B = T.ua.xa.va;
          for (T = T.ua.wa; S.Aa;) F = S.Ka(F), S = S.Aa;
          for (; B.Aa;) T = B.Ka(T), B = B.Aa;
          return S === B && F === T
        },
        clone: function() {
          if (this.ua.wa || v1(this), this.ua.Ja) return this.ua.count.value += 1, this;
          var T = d1,
            S = Object,
            F = S.create,
            B = Object.getPrototypeOf(this),
            Q = this.ua;
          return T = T(F.call(S, B, {
            ua: {
              value: {
                count: Q.count,
                Ia: Q.Ia,
                Ja: Q.Ja,
                wa: Q.wa,
                xa: Q.xa,
                za: Q.za,
                Ba: Q.Ba
              }
            }
          })), T.ua.count.value += 1, T.ua.Ia = !1, T
        },
        delete() {
          if (this.ua.wa || v1(this), this.ua.Ia && !this.ua.Ja) throw new T1("Object already scheduled for deletion");
          p1(this);
          var T = this.ua;
          --T.count.value, T.count.value === 0 && (T.za ? T.Ba.Ea(T.za) : T.xa.va.Ea(T.wa)), this.ua.Ja || (this.ua.za = void 0, this.ua.wa = void 0)
        },
        isDeleted: function() {
          return !this.ua.wa
        },
        deleteLater: function() {
          if (this.ua.wa || v1(this), this.ua.Ia && !this.ua.Ja) throw new T1("Object already scheduled for deletion");
          return this.ua.Ia = !0, this
        }
      }), Object.assign(ct.prototype, {
        Xa(T) {
          return this.Sa && (T = this.Sa(T)), T
        },
        Qa(T) {
          var S;
          (S = this.Ea) == null || S.call(this, T)
        },
        Ca: 8,
        readValueFromPointer: ie,
        fromWireType: function(T) {
          function S() {
            return this.Ma ? i1(this.va.Ga, {
              xa: this.bb,
              wa: F,
              Ba: this,
              za: T
            }) : i1(this.va.Ga, {
              xa: this,
              wa: T
            })
          }
          var F = this.Xa(T);
          if (!F) return this.Qa(T), null;
          var B = ye(this.va, F);
          if (B !== void 0) return B.ua.count.value === 0 ? (B.ua.wa = F, B.ua.za = T, B.clone()) : (B = B.clone(), this.Qa(T), B);
          if (B = this.va.Wa(F), B = se[B], !B) return S.call(this);
          B = this.La ? B.Ta : B.pointerType;
          var Q = w1(F, this.va, B.va);
          return Q === null ? S.call(this) : this.Ma ? i1(B.va.Ga, {
            xa: B,
            wa: Q,
            Ba: this,
            za: T
          }) : i1(B.va.Ga, {
            xa: B,
            wa: Q
          })
        }
      }), R1 = i.UnboundTypeError = ((T, S) => {
        var F = L1(S, function(B) {
          this.name = S, this.message = B, B = Error(B).stack, B !== void 0 && (this.stack = this.toString() + `
` + B.replace(/^Error(:[^\n]*)?\n/, ""))
        });
        return F.prototype = Object.create(T.prototype), F.prototype.constructor = F, F.prototype.toString = function() {
          return this.message === void 0 ? this.name : `${this.name}: ${this.message}`
        }, F
      })(Error, "UnboundTypeError"), hn.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1), i.count_emval_handles = () => hn.length / 2 - 5 - kr.length;
      var d2 = {
          c: (T, S, F, B) => k1(`Assertion failed: ${T?B1(U,T):""}, at: ` + [S ? S ? B1(U, S) : "" : "unknown filename", F, B ? B ? B1(U, B) : "" : "unknown function"]),
          m: (T, S, F) => {
            var B = new ee(T);
            throw D[B.wa + 16 >> 2] = 0, D[B.wa + 4 >> 2] = S, D[B.wa + 8 >> 2] = F, me = T, me
          },
          M: () => {},
          J: () => {},
          K: () => {},
          P: function() {},
          L: () => {},
          R: () => k1(""),
          v: T => {
            var S = be[T];
            delete be[T];
            var F = S.Oa,
              B = S.Ea,
              Q = S.Ra,
              r1 = Q.map(x1 => x1.$a).concat(Q.map(x1 => x1.gb));
            ot([T], r1, x1 => {
              var l1 = {};
              return Q.forEach((N1, O1) => {
                var q1 = x1[O1],
                  Y1 = N1.Ya,
                  $e = N1.Za,
                  Yt = x1[O1 + Q.length],
                  Xe = N1.fb,
                  rt = N1.hb;
                l1[N1.Va] = {
                  read: pn => q1.fromWireType(Y1($e, pn)),
                  write: (pn, Xt) => {
                    var Bt = [];
                    Xe(rt, pn, Yt.toWireType(Bt, Xt)), J1(Bt)
                  }
                }
              }), [{
                name: S.name,
                fromWireType: N1 => {
                  var O1 = {},
                    q1;
                  for (q1 in l1) O1[q1] = l1[q1].read(N1);
                  return B(N1), O1
                },
                toWireType: (N1, O1) => {
                  for (var q1 in l1)
                    if (!(q1 in O1)) throw new TypeError(`Missing field: "${q1}"`);
                  var Y1 = F();
                  for (q1 in l1) l1[q1].write(Y1, O1[q1]);
                  return N1 !== null && N1.push(B, Y1), Y1
                },
                Ca: 8,
                readValueFromPointer: ie,
                Da: B
              }]
            })
          },
          C: () => {},
          W: (T, S, F, B) => {
            S = _e(S), wt(T, {
              name: S,
              fromWireType: function(Q) {
                return !!Q
              },
              toWireType: function(Q, r1) {
                return r1 ? F : B
              },
              Ca: 8,
              readValueFromPointer: function(Q) {
                return this.fromWireType(U[Q])
              },
              Da: null
            })
          },
          r: (T, S, F, B, Q, r1, x1, l1, N1, O1, q1, Y1, $e) => {
            q1 = _e(q1), r1 = P1(Q, r1), l1 && (l1 = P1(x1, l1)), O1 && (O1 = P1(N1, O1)), $e = P1(Y1, $e);
            var Yt = Pe(q1);
            le(Yt, function() {
              ce(`Cannot construct ${q1} due to unbound types`, [B])
            }), ot([T, S, F], B ? [B] : [], Xe => {
              if (Xe = Xe[0], B) var rt = Xe.va,
                pn = rt.Ga;
              else pn = j1.prototype;
              Xe = L1(q1, function(...H2) {
                if (Object.getPrototypeOf(this) !== Xt) throw new T1("Use 'new' to construct " + q1);
                if (Bt.Fa === void 0) throw new T1(q1 + " has no accessible constructor");
                var q2 = Bt.Fa[H2.length];
                if (q2 === void 0) throw new T1(`Tried to invoke ctor of ${q1} with invalid number of parameters (${H2.length}) - expected (${Object.keys(Bt.Fa).toString()}) parameters instead!`);
                return q2.apply(this, H2)
              });
              var Xt = Object.create(pn, {
                constructor: {
                  value: Xe
                }
              });
              Xe.prototype = Xt;
              var Bt = new Te(q1, Xe, Xt, $e, rt, r1, l1, O1);
              if (Bt.Aa) {
                var $t;
                ($t = Bt.Aa).Pa != null || ($t.Pa = []), Bt.Aa.Pa.push(Bt)
              }
              return rt = new ct(q1, Bt, !0, !1, !1), $t = new ct(q1 + "*", Bt, !1, !1, !1), pn = new ct(q1 + " const*", Bt, !1, !0, !1), se[T] = {
                pointerType: $t,
                Ta: pn
              }, rn(Yt, Xe), [rt, $t, pn]
            })
          },
          q: (T, S, F, B, Q, r1) => {
            var x1 = Ne(S, F);
            Q = P1(B, Q), ot([], [T], l1 => {
              l1 = l1[0];
              var N1 = `constructor ${l1.name}`;
              if (l1.va.Fa === void 0 && (l1.va.Fa = []), l1.va.Fa[S - 1] !== void 0) throw new T1(`Cannot register multiple constructors with identical number of parameters (${S-1}) for class '${l1.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
              return l1.va.Fa[S - 1] = () => {
                ce(`Cannot construct ${l1.name} due to unbound types`, x1)
              }, ot([], x1, O1 => (O1.splice(1, 0, null), l1.va.Fa[S - 1] = sn(N1, O1, null, Q, r1), [])), []
            })
          },
          f: (T, S, F, B, Q, r1, x1, l1) => {
            var N1 = Ne(F, B);
            S = _e(S), S = Ft(S), r1 = P1(Q, r1), ot([], [T], O1 => {
              function q1() {
                ce(`Cannot call ${Y1} due to unbound types`, N1)
              }
              O1 = O1[0];
              var Y1 = `${O1.name}.${S}`;
              S.startsWith("@@") && (S = Symbol[S.substring(2)]), l1 && O1.va.cb.push(S);
              var $e = O1.va.Ga,
                Yt = $e[S];
              return Yt === void 0 || Yt.ya === void 0 && Yt.className !== O1.name && Yt.Ha === F - 2 ? (q1.Ha = F - 2, q1.className = O1.name, $e[S] = q1) : (D1($e, S, Y1), $e[S].ya[F - 2] = q1), ot([], N1, Xe => (Xe = sn(Y1, Xe, O1, r1, x1), $e[S].ya === void 0 ? (Xe.Ha = F - 2, $e[S] = Xe) : $e[S].ya[F - 2] = Xe, [])), []
            })
          },
          V: T => wt(T, l2),
          x: (T, S, F, B) => {
            function Q() {}
            S = _e(S), Q.values = {}, wt(T, {
              name: S,
              constructor: Q,
              fromWireType: function(r1) {
                return this.constructor.values[r1]
              },
              toWireType: (r1, x1) => x1.value,
              Ca: 8,
              readValueFromPointer: cr(S, F, B),
              Da: null
            }), le(S, Q)
          },
          k: (T, S, F) => {
            var B = yi(T, "enum");
            S = _e(S), T = B.constructor, B = Object.create(B.constructor.prototype, {
              value: {
                value: F
              },
              constructor: {
                value: L1(`${B.name}_${S}`, function() {})
              }
            }), T.values[F] = B, T[S] = B
          },
          z: (T, S, F) => {
            S = _e(S), wt(T, {
              name: S,
              fromWireType: B => B,
              toWireType: (B, Q) => Q,
              Ca: 8,
              readValueFromPointer: vi(S, F),
              Da: null
            })
          },
          u: (T, S, F, B, Q, r1) => {
            var x1 = Ne(S, F);
            T = _e(T), T = Ft(T), Q = P1(B, Q), le(T, function() {
              ce(`Cannot call ${T} due to unbound types`, x1)
            }, S - 1), ot([], x1, l1 => (rn(T, sn(T, [l1[0], null].concat(l1.slice(1)), null, Q, r1), S - 1), []))
          },
          l: (T, S, F, B, Q) => {
            if (S = _e(S), Q === -1 && (Q = 4294967295), Q = l1 => l1, B === 0) {
              var r1 = 32 - 8 * F;
              Q = l1 => l1 << r1 >>> r1
            }
            var x1 = S.includes("unsigned") ? function(l1, N1) {
              return N1 >>> 0
            } : function(l1, N1) {
              return N1
            };
            wt(T, {
              name: S,
              fromWireType: Q,
              toWireType: x1,
              Ca: 8,
              readValueFromPointer: wi(S, F, B !== 0),
              Da: null
            })
          },
          h: (T, S, F) => {
            function B(r1) {
              return new Q(q.buffer, D[r1 + 4 >> 2], D[r1 >> 2])
            }
            var Q = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][S];
            F = _e(F), wt(T, {
              name: F,
              fromWireType: B,
              Ca: 8,
              readValueFromPointer: B
            }, {
              ab: !0
            })
          },
          t: T => {
            wt(T, u3)
          },
          aa: (T, S, F, B, Q, r1, x1, l1, N1, O1, q1, Y1) => {
            F = _e(F), r1 = P1(Q, r1), l1 = P1(x1, l1), O1 = P1(N1, O1), Y1 = P1(q1, Y1), ot([T], [S], $e => ($e = $e[0], [new ct(F, $e.va, !1, !1, !0, $e, B, r1, l1, O1, Y1)]))
          },
          A: (T, S) => {
            S = _e(S);
            var F = S === "std::string";
            wt(T, {
              name: S,
              fromWireType: function(B) {
                var Q = D[B >> 2],
                  r1 = B + 4;
                if (F)
                  for (var x1 = r1, l1 = 0; l1 <= Q; ++l1) {
                    var N1 = r1 + l1;
                    if (l1 == Q || U[N1] == 0) {
                      if (x1 = x1 ? B1(U, x1, N1 - x1) : "", O1 === void 0) var O1 = x1;
                      else O1 += "\0", O1 += x1;
                      x1 = N1 + 1
                    }
                  } else {
                    for (O1 = Array(Q), l1 = 0; l1 < Q; ++l1) O1[l1] = String.fromCharCode(U[r1 + l1]);
                    O1 = O1.join("")
                  }
                return fe(B), O1
              },
              toWireType: function(B, Q) {
                Q instanceof ArrayBuffer && (Q = new Uint8Array(Q));
                var r1, x1 = typeof Q == "string";
                if (!(x1 || Q instanceof Uint8Array || Q instanceof Uint8ClampedArray || Q instanceof Int8Array)) throw new T1("Cannot pass non-string to std::string");
                if (F && x1)
                  for (var l1 = r1 = 0; l1 < Q.length; ++l1) {