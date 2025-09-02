  for (var p = 0, m = 0, y = l, v = 0, C = 0, P = 0, k = 1, R = 1, W = 1, q = 0, U = "", H = i, $ = a, X = r, D = U; R;) switch (P = q, q = wr()) {
    case 40:
      if (P != 108 && _n(D, y - 1) == 58) {
        Ah(D += Ue(nu(q), "&", "&\f"), "&\f") != -1 && (W = -1);
        break
      }
    case 34:
    case 39:
    case 91:
      D += nu(q);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      D += RR(P);
      break;
    case 92:
      D += NR(tu() - 1, 7);
      continue;
    case 47:
      switch (L2()) {
        case 42:
        case 47:
          Dl(OR(LR(wr(), tu()), e, n), h);
          break;
        default:
          D += "/"
      }
      break;
    case 123 * k:
      c[p++] = S2(D) * W;
    case 125 * k:
    case 59:
    case 0:
      switch (q) {
        case 0:
        case 125:
          R = 0;
        case 59 + m:
          W == -1 && (D = Ue(D, /\f/g, "")), C > 0 && S2(D) - y && Dl(C > 32 ? yg(D + ";", r, n, y - 1) : yg(Ue(D, " ", "") + ";", r, n, y - 2), h);
          break;
        case 59:
          D += ";";
        default:
          if (Dl(X = gg(D, e, n, p, m, i, c, U, H = [], $ = [], y), a), q === 123)
            if (m === 0) ru(D, e, X, X, H, a, y, c, $);
            else switch (v === 99 && _n(D, 3) === 110 ? 100 : v) {
              case 100:
              case 108:
              case 109:
              case 115:
                ru(t, X, X, r && Dl(gg(t, X, X, 0, 0, i, c, U, i, H = [], y), $), i, $, y, c, r ? H : $);
                break;
              default:
                ru(D, X, X, X, [""], $, 0, c, $)
            }
      }
      p = m = C = 0, k = W = 1, U = D = "", y = l;
      break;
    case 58:
      y = 1 + S2(D), C = P;
    default:
      if (k < 1) {
        if (q == 123) --k;
        else if (q == 125 && k++ == 0 && IR() == 125) continue
      }
      switch (D += hc(q), q * k) {
        case 38:
          W = m > 0 ? 1 : (D += "\f", -1);
          break;
        case 44:
          c[p++] = (S2(D) - 1) * W, W = 1;
          break;
        case 64:
          L2() === 45 && (D += nu(wr())), v = L2(), m = y = S2(U = D += MR(tu())), q++;
          break;
        case 45:
          P === 45 && S2(D) == 2 && (k = 0)
      }
  }
  return a
}

function gg(t, e, n, r, i, a, l, c, h, p, m) {
  for (var y = i - 1, v = i === 0 ? a : [""], C = tf(v), P = 0, k = 0, R = 0; P < r; ++P)
    for (var W = 0, q = e0(t, y + 1, y = ER(k = l[P])), U = t; W < C; ++W)(U = hw(k > 0 ? v[W] + " " + q : Ue(q, /&\f/g, v[W]))) && (h[R++] = U);
  return pc(t, e, n, i === 0 ? Z9 : c, h, p, m)
}

function OR(t, e, n) {
  return pc(t, e, n, cw, hc(AR()), e0(t, 2, -2), 0)
}

function yg(t, e, n, r) {
  return pc(t, e, n, ef, e0(t, 0, r), e0(t, r + 1, -1), r)
}

function uo(t, e) {
  for (var n = "", r = tf(t), i = 0; i < r; i++) n += e(t[i], i, t, e) || "";
  return n
}

function jR(t, e, n, r) {
  switch (t.type) {
    case SR:
      if (t.children.length) break;
    case xR:
    case ef:
      return t.return = t.return || t.value;
    case cw:
      return "";
    case dw:
      return t.return = t.value + "{" + uo(t.children, r) + "}";
    case Z9:
      t.value = t.props.join(",")
  }
  return S2(n = uo(t.children, r)) ? t.return = t.value + "{" + n + "}" : ""
}

function VR(t) {
  var e = tf(t);
  return function(n, r, i, a) {
    for (var l = "", c = 0; c < e; c++) l += t[c](n, r, i, a) || "";
    return l
  }
}

function FR(t) {
  return function(e) {
    e.root || (e = e.return) && t(e)
  }
}

function gw(t) {
  var e = Object.create(null);
  return function(n) {
    return e[n] === void 0 && (e[n] = t(n)), e[n]
  }
}
var BR = function(e, n, r) {
    for (var i = 0, a = 0; i = a, a = L2(), i === 38 && a === 12 && (n[r] = 1), !t0(a);) wr();
    return g0(e, lr)
  },
  $R = function(e, n) {
    var r = -1,
      i = 44;
    do switch (t0(i)) {
      case 0:
        i === 38 && L2() === 12 && (n[r] = 1), e[r] += BR(lr - 1, n, r);
        break;
      case 2:
        e[r] += nu(i);
        break;
      case 4:
        if (i === 44) {
          e[++r] = L2() === 58 ? "&\f" : "", n[r] = e[r].length;
          break
        }
      default:
        e[r] += hc(i)
    }
    while (i = wr());
    return e
  },
  zR = function(e, n) {
    return mw($R(pw(e), n))
  },
  vg = new WeakMap,
  UR = function(e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (var n = e.value, r = e.parent, i = e.column === r.column && e.line === r.line; r.type !== "rule";)
        if (r = r.parent, !r) return;
      if (!(e.props.length === 1 && n.charCodeAt(0) !== 58 && !vg.get(r)) && !i) {
        vg.set(e, !0);
        for (var a = [], l = zR(n, a), c = r.props, h = 0, p = 0; h < l.length; h++)
          for (var m = 0; m < c.length; m++, p++) e.props[p] = a[h] ? l[h].replace(/&\f/g, c[m]) : c[m] + " " + l[h]
      }
    }
  },
  WR = function(e) {
    if (e.type === "decl") {
      var n = e.value;
      n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && (e.return = "", e.value = "")
    }
  };

function yw(t, e) {
  switch (CR(t, e)) {
    case 5103:
      return ze + "print-" + t + t;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ze + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ze + t + Pu + t + Nn + t + t;
    case 6828:
    case 4268:
      return ze + t + Nn + t + t;
    case 6165:
      return ze + t + Nn + "flex-" + t + t;
    case 5187:
      return ze + t + Ue(t, /(\w+).+(:[^]+)/, ze + "box-$1$2" + Nn + "flex-$1$2") + t;
    case 5443:
      return ze + t + Nn + "flex-item-" + Ue(t, /flex-|-self/, "") + t;
    case 4675:
      return ze + t + Nn + "flex-line-pack" + Ue(t, /align-content|flex-|-self/, "") + t;
    case 5548:
      return ze + t + Nn + Ue(t, "shrink", "negative") + t;
    case 5292:
      return ze + t + Nn + Ue(t, "basis", "preferred-size") + t;
    case 6060:
      return ze + "box-" + Ue(t, "-grow", "") + ze + t + Nn + Ue(t, "grow", "positive") + t;
    case 4554:
      return ze + Ue(t, /([^-])(transform)/g, "$1" + ze + "$2") + t;
    case 6187:
      return Ue(Ue(Ue(t, /(zoom-|grab)/, ze + "$1"), /(image-set)/, ze + "$1"), t, "") + t;
    case 5495:
    case 3959:
      return Ue(t, /(image-set\([^]*)/, ze + "$1$`$1");
    case 4968:
      return Ue(Ue(t, /(.+:)(flex-)?(.*)/, ze + "box-pack:$3" + Nn + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ze + t + t;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ue(t, /(.+)-inline(.+)/, ze + "$1$2") + t;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (S2(t) - 1 - e > 6) switch (_n(t, e + 1)) {
        case 109:
          if (_n(t, e + 4) !== 45) break;
        case 102:
          return Ue(t, /(.+:)(.+)-([^]+)/, "$1" + ze + "$2-$3$1" + Pu + (_n(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
        case 115:
          return ~Ah(t, "stretch") ? yw(Ue(t, "stretch", "fill-available"), e) + t : t
      }
      break;
    case 4949:
      if (_n(t, e + 1) !== 115) break;
    case 6444:
      switch (_n(t, S2(t) - 3 - (~Ah(t, "!important") && 10))) {
        case 107:
          return Ue(t, ":", ":" + ze) + t;
        case 101:
          return Ue(t, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ze + (_n(t, 14) === 45 ? "inline-" : "") + "box$3$1" + ze + "$2$3$1" + Nn + "$2box$3") + t
      }
      break;
    case 5936:
      switch (_n(t, e + 11)) {
        case 114:
          return ze + t + Nn + Ue(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 108:
          return ze + t + Nn + Ue(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 45:
          return ze + t + Nn + Ue(t, /[svh]\w+-[tblr]{2}/, "lr") + t
      }
      return ze + t + Nn + t + t
  }
  return t
}
var HR = function(e, n, r, i) {
    if (e.length > -1 && !e.return) switch (e.type) {
      case ef:
        e.return = yw(e.value, e.length);
        break;
      case dw:
        return uo([ga(e, {
          value: Ue(e.value, "@", "@" + ze)
        })], i);
      case Z9:
        if (e.length) return PR(e.props, function(a) {
          switch (kR(a, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return uo([ga(e, {
                props: [Ue(a, /:(read-\w+)/, ":" + Pu + "$1")]
              })], i);
            case "::placeholder":
              return uo([ga(e, {
                props: [Ue(a, /:(plac\w+)/, ":" + ze + "input-$1")]
              }), ga(e, {
                props: [Ue(a, /:(plac\w+)/, ":" + Pu + "$1")]
              }), ga(e, {
                props: [Ue(a, /:(plac\w+)/, Nn + "input-$1")]
              })], i)
          }
          return ""
        })
    }
  },
  qR = [HR],
  GR = function(e) {
    var n = e.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function(k) {
        var R = k.getAttribute("data-emotion");
        R.indexOf(" ") !== -1 && (document.head.appendChild(k), k.setAttribute("data-s", ""))
      })
    }
    var i = e.stylisPlugins || qR,
      a = {},
      l, c = [];
    l = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function(k) {
      for (var R = k.getAttribute("data-emotion").split(" "), W = 1; W < R.length; W++) a[R[W]] = !0;
      c.push(k)
    });
    var h, p = [UR, WR];
    {
      var m, y = [jR, FR(function(k) {
          m.insert(k)
        })],
        v = VR(p.concat(i, y)),
        C = function(R) {
          return uo(DR(R), v)
        };
      h = function(R, W, q, U) {
        m = q, C(R ? R + "{" + W.styles + "}" : W.styles), U && (P.inserted[W.name] = !0)
      }
    }
    var P = {
      key: n,
      sheet: new _R({
        key: n,
        container: l,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
        insertionPoint: e.insertionPoint
      }),
      nonce: e.nonce,
      inserted: a,
      registered: {},
      insert: h
    };
    return P.sheet.hydrate(c), P
  },
  T4 = {
    exports: {}
  },
  Ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wg;

function KR() {
  if (wg) return Ge;
  wg = 1;
  var t = typeof Symbol == "function" && Symbol.for,
    e = t ? Symbol.for("react.element") : 60103,
    n = t ? Symbol.for("react.portal") : 60106,
    r = t ? Symbol.for("react.fragment") : 60107,
    i = t ? Symbol.for("react.strict_mode") : 60108,
    a = t ? Symbol.for("react.profiler") : 60114,
    l = t ? Symbol.for("react.provider") : 60109,
    c = t ? Symbol.for("react.context") : 60110,
    h = t ? Symbol.for("react.async_mode") : 60111,
    p = t ? Symbol.for("react.concurrent_mode") : 60111,
    m = t ? Symbol.for("react.forward_ref") : 60112,
    y = t ? Symbol.for("react.suspense") : 60113,
    v = t ? Symbol.for("react.suspense_list") : 60120,
    C = t ? Symbol.for("react.memo") : 60115,
    P = t ? Symbol.for("react.lazy") : 60116,
    k = t ? Symbol.for("react.block") : 60121,
    R = t ? Symbol.for("react.fundamental") : 60117,
    W = t ? Symbol.for("react.responder") : 60118,
    q = t ? Symbol.for("react.scope") : 60119;

  function U($) {
    if (typeof $ == "object" && $ !== null) {
      var X = $.$$typeof;
      switch (X) {
        case e:
          switch ($ = $.type, $) {
            case h:
            case p:
            case r:
            case a:
            case i:
            case y:
              return $;
            default:
              switch ($ = $ && $.$$typeof, $) {
                case c:
                case m:
                case P:
                case C:
                case l:
                  return $;
                default:
                  return X
              }
          }
        case n:
          return X
      }
    }
  }

  function H($) {
    return U($) === p
  }
  return Ge.AsyncMode = h, Ge.ConcurrentMode = p, Ge.ContextConsumer = c, Ge.ContextProvider = l, Ge.Element = e, Ge.ForwardRef = m, Ge.Fragment = r, Ge.Lazy = P, Ge.Memo = C, Ge.Portal = n, Ge.Profiler = a, Ge.StrictMode = i, Ge.Suspense = y, Ge.isAsyncMode = function($) {
    return H($) || U($) === h
  }, Ge.isConcurrentMode = H, Ge.isContextConsumer = function($) {
    return U($) === c
  }, Ge.isContextProvider = function($) {
    return U($) === l
  }, Ge.isElement = function($) {
    return typeof $ == "object" && $ !== null && $.$$typeof === e
  }, Ge.isForwardRef = function($) {
    return U($) === m
  }, Ge.isFragment = function($) {
    return U($) === r
  }, Ge.isLazy = function($) {
    return U($) === P
  }, Ge.isMemo = function($) {
    return U($) === C
  }, Ge.isPortal = function($) {
    return U($) === n
  }, Ge.isProfiler = function($) {
    return U($) === a
  }, Ge.isStrictMode = function($) {
    return U($) === i
  }, Ge.isSuspense = function($) {
    return U($) === y
  }, Ge.isValidElementType = function($) {
    return typeof $ == "string" || typeof $ == "function" || $ === r || $ === p || $ === a || $ === i || $ === y || $ === v || typeof $ == "object" && $ !== null && ($.$$typeof === P || $.$$typeof === C || $.$$typeof === l || $.$$typeof === c || $.$$typeof === m || $.$$typeof === R || $.$$typeof === W || $.$$typeof === q || $.$$typeof === k)
  }, Ge.typeOf = U, Ge
}
var bg;

function QR() {
  return bg || (bg = 1, T4.exports = KR()), T4.exports
}
var C4, _g;

function YR() {
  if (_g) return C4;
  _g = 1;
  var t = QR(),
    e = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0
    },
    n = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0
    },
    r = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0
    },
    i = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0
    },
    a = {};
  a[t.ForwardRef] = r, a[t.Memo] = i;

  function l(P) {
    return t.isMemo(P) ? i : a[P.$$typeof] || e
  }
  var c = Object.defineProperty,
    h = Object.getOwnPropertyNames,
    p = Object.getOwnPropertySymbols,
    m = Object.getOwnPropertyDescriptor,
    y = Object.getPrototypeOf,
    v = Object.prototype;

  function C(P, k, R) {
    if (typeof k != "string") {
      if (v) {
        var W = y(k);
        W && W !== v && C(P, W, R)
      }
      var q = h(k);
      p && (q = q.concat(p(k)));
      for (var U = l(P), H = l(k), $ = 0; $ < q.length; ++$) {
        var X = q[$];
        if (!n[X] && !(R && R[X]) && !(H && H[X]) && !(U && U[X])) {
          var D = m(k, X);
          try {
            c(P, X, D)
          } catch {}
        }
      }
    }
    return P
  }
  return C4 = C, C4
}
YR();
var XR = !0;

function vw(t, e, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    t[i] !== void 0 ? e.push(t[i] + ";") : i && (r += i + " ")
  }), r
}
var nf = function(e, n, r) {
    var i = e.key + "-" + n.name;
    (r === !1 || XR === !1) && e.registered[i] === void 0 && (e.registered[i] = n.styles)
  },
  ww = function(e, n, r) {
    nf(e, n, r);
    var i = e.key + "-" + n.name;
    if (e.inserted[n.name] === void 0) {
      var a = n;
      do e.insert(n === a ? "." + i : "", a, e.sheet, !0), a = a.next; while (a !== void 0)
    }
  };

function JR(t) {
  for (var e = 0, n, r = 0, i = t.length; i >= 4; ++r, i -= 4) n = t.charCodeAt(r) & 255 | (t.charCodeAt(++r) & 255) << 8 | (t.charCodeAt(++r) & 255) << 16 | (t.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, e = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      e ^= (t.charCodeAt(r + 2) & 255) << 16;
    case 2:
      e ^= (t.charCodeAt(r + 1) & 255) << 8;
    case 1:
      e ^= t.charCodeAt(r) & 255, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16)
  }
  return e ^= e >>> 13, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36)
}
var ZR = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  },
  eN = /[A-Z]|^ms/g,
  tN = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  bw = function(e) {
    return e.charCodeAt(1) === 45
  },
  xg = function(e) {
    return e != null && typeof e != "boolean"
  },
  k4 = gw(function(t) {
    return bw(t) ? t : t.replace(eN, "-$&").toLowerCase()
  }),
  Sg = function(e, n) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof n == "string") return n.replace(tN, function(r, i, a) {
          return E2 = {
            name: i,
            styles: a,
            next: E2
          }, i
        })
    }
    return ZR[e] !== 1 && !bw(e) && typeof n == "number" && n !== 0 ? n + "px" : n
  };

function n0(t, e, n) {
  if (n == null) return "";
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1) return E2 = {
        name: i.name,
        styles: i.styles,
        next: E2
      }, i.name;
      var a = n;
      if (a.styles !== void 0) {
        var l = a.next;
        if (l !== void 0)
          for (; l !== void 0;) E2 = {
            name: l.name,
            styles: l.styles,
            next: E2
          }, l = l.next;
        var c = a.styles + ";";
        return c
      }
      return nN(t, e, n)
    }
    case "function": {
      if (t !== void 0) {
        var h = E2,
          p = n(t);
        return E2 = h, n0(t, e, p)
      }
      break
    }
  }
  var m = n;
  if (e == null) return m;
  var y = e[m];
  return y !== void 0 ? y : m
}

function nN(t, e, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++) r += n0(t, e, n[i]) + ";";
  else
    for (var a in n) {
      var l = n[a];
      if (typeof l != "object") {
        var c = l;
        e != null && e[c] !== void 0 ? r += a + "{" + e[c] + "}" : xg(c) && (r += k4(a) + ":" + Sg(a, c) + ";")
      } else if (Array.isArray(l) && typeof l[0] == "string" && (e == null || e[l[0]] === void 0))
        for (var h = 0; h < l.length; h++) xg(l[h]) && (r += k4(a) + ":" + Sg(a, l[h]) + ";");
      else {
        var p = n0(t, e, l);
        switch (a) {
          case "animation":
          case "animationName": {
            r += k4(a) + ":" + p + ";";
            break
          }
          default:
            r += a + "{" + p + "}"
        }
      }
    }
  return r
}
var Eg = /label:\s*([^\s;{]+)\s*(;|$)/g,
  E2;

function mc(t, e, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0) return t[0];
  var r = !0,
    i = "";
  E2 = void 0;
  var a = t[0];
  if (a == null || a.raw === void 0) r = !1, i += n0(n, e, a);
  else {
    var l = a;
    i += l[0]
  }
  for (var c = 1; c < t.length; c++)
    if (i += n0(n, e, t[c]), r) {
      var h = a;
      i += h[c]
    } Eg.lastIndex = 0;
  for (var p = "", m;
    (m = Eg.exec(i)) !== null;) p += "-" + m[1];
  var y = JR(i) + p;
  return {
    name: y,
    styles: i,
    next: E2
  }
}
var rN = function(e) {
    return e()
  },
  iN = eh.useInsertionEffect ? eh.useInsertionEffect : !1,
  _w = iN || rN,
  xw = M.createContext(typeof HTMLElement < "u" ? GR({
    key: "css"
  }) : null);
xw.Provider;
var Sw = function(e) {
    return M.forwardRef(function(n, r) {
      var i = M.useContext(xw);
      return e(n, i, r)
    })
  },
  rf = M.createContext({}),
  sf = {}.hasOwnProperty,
  Rh = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  sN = function(e, n) {
    var r = {};
    for (var i in n) sf.call(n, i) && (r[i] = n[i]);
    return r[Rh] = e, r
  },
  oN = function(e) {
    var n = e.cache,
      r = e.serialized,
      i = e.isStringTag;
    return nf(n, r, i), _w(function() {
      return ww(n, r, i)
    }), null
  },
  aN = Sw(function(t, e, n) {
    var r = t.css;
    typeof r == "string" && e.registered[r] !== void 0 && (r = e.registered[r]);
    var i = t[Rh],
      a = [r],
      l = "";
    typeof t.className == "string" ? l = vw(e.registered, a, t.className) : t.className != null && (l = t.className + " ");
    var c = mc(a, void 0, M.useContext(rf));
    l += e.key + "-" + c.name;
    var h = {};
    for (var p in t) sf.call(t, p) && p !== "css" && p !== Rh && (h[p] = t[p]);
    return h.className = l, n && (h.ref = n), M.createElement(M.Fragment, null, M.createElement(oN, {
      cache: e,
      serialized: c,
      isStringTag: typeof i == "string"
    }), M.createElement(i, h))
  }),
  lN = aN,
  Tg = function(e, n) {
    var r = arguments;
    if (n == null || !sf.call(n, "css")) return M.createElement.apply(void 0, r);
    var i = r.length,
      a = new Array(i);
    a[0] = lN, a[1] = sN(e, n);
    for (var l = 2; l < i; l++) a[l] = r[l];
    return M.createElement.apply(null, a)
  };
(function(t) {
  var e;
  e || (e = t.JSX || (t.JSX = {}))
})(Tg || (Tg = {}));

function uN() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
  return mc(e)
}

function of() {
  var t = uN.apply(void 0, arguments),
    e = "animation-" + t.name;
  return {
    name: e,
    styles: "@keyframes " + e + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
    }
  }
}
var cN = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  dN = gw(function(t) {
    return cN.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91
  }),
  hN = dN,
  fN = function(e) {
    return e !== "theme"
  },
  Cg = function(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? hN : fN
  },
  kg = function(e, n, r) {
    var i;
    if (n) {
      var a = n.shouldForwardProp;
      i = e.__emotion_forwardProp && a ? function(l) {
        return e.__emotion_forwardProp(l) && a(l)
      } : a
    }
    return typeof i != "function" && r && (i = e.__emotion_forwardProp), i
  },
  pN = function(e) {
    var n = e.cache,
      r = e.serialized,
      i = e.isStringTag;
    return nf(n, r, i), _w(function() {
      return ww(n, r, i)
    }), null
  },
  mN = function t(e, n) {
    var r = e.__emotion_real === e,
      i = r && e.__emotion_base || e,
      a, l;
    n !== void 0 && (a = n.label, l = n.target);
    var c = kg(e, n, r),
      h = c || Cg(i),
      p = !h("as");
    return function() {
      var m = arguments,
        y = r && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
      if (a !== void 0 && y.push("label:" + a + ";"), m[0] == null || m[0].raw === void 0) y.push.apply(y, m);
      else {
        var v = m[0];
        y.push(v[0]);
        for (var C = m.length, P = 1; P < C; P++) y.push(m[P], v[P])
      }
      var k = Sw(function(R, W, q) {
        var U = p && R.as || i,
          H = "",
          $ = [],
          X = R;
        if (R.theme == null) {
          X = {};
          for (var D in R) X[D] = R[D];
          X.theme = M.useContext(rf)
        }
        typeof R.className == "string" ? H = vw(W.registered, $, R.className) : R.className != null && (H = R.className + " ");
        var A = mc(y.concat($), W.registered, X);
        H += W.key + "-" + A.name, l !== void 0 && (H += " " + l);
        var j = p && c === void 0 ? Cg(U) : h,
          x = {};
        for (var N in R) p && N === "as" || j(N) && (x[N] = R[N]);
        return x.className = H, q && (x.ref = q), M.createElement(M.Fragment, null, M.createElement(pN, {
          cache: W,
          serialized: A,
          isStringTag: typeof U == "string"
        }), M.createElement(U, x))
      });
      return k.displayName = a !== void 0 ? a : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", k.defaultProps = e.defaultProps, k.__emotion_real = k, k.__emotion_base = i, k.__emotion_styles = y, k.__emotion_forwardProp = c, Object.defineProperty(k, "toString", {
        value: function() {
          return "." + l
        }
      }), k.withComponent = function(R, W) {
        var q = t(R, ku({}, n, W, {
          shouldForwardProp: kg(k, W, !0)
        }));
        return q.apply(void 0, y)
      }, k
    }
  },
  gN = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"],
  Nh = mN.bind(null);
gN.forEach(function(t) {
  Nh[t] = Nh(t)
});
/**
 * @mui/styled-engine v6.5.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ew(t, e) {
  return Nh(t, e)
}

function yN(t, e) {
  Array.isArray(t.__emotion_styles) && (t.__emotion_styles = e(t.__emotion_styles))
}
const Pg = [];

function W3(t) {
  return Pg[0] = t, mc(Pg)
}
var P4 = {
    exports: {}
  },
  et = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ag;

function vN() {
  if (Ag) return et;
  Ag = 1;
  var t = Symbol.for("react.transitional.element"),
    e = Symbol.for("react.portal"),
    n = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    i = Symbol.for("react.profiler"),
    a = Symbol.for("react.consumer"),
    l = Symbol.for("react.context"),
    c = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    p = Symbol.for("react.suspense_list"),
    m = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    v = Symbol.for("react.view_transition"),
    C = Symbol.for("react.client.reference");

  function P(k) {
    if (typeof k == "object" && k !== null) {
      var R = k.$$typeof;
      switch (R) {
        case t:
          switch (k = k.type, k) {
            case n:
            case i:
            case r:
            case h:
            case p:
            case v:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case l:
                case c:
                case y:
                case m:
                  return k;
                case a:
                  return k;
                default:
                  return R
              }
          }
        case e:
          return R
      }
    }
  }
  return et.ContextConsumer = a, et.ContextProvider = l, et.Element = t, et.ForwardRef = c, et.Fragment = n, et.Lazy = y, et.Memo = m, et.Portal = e, et.Profiler = i, et.StrictMode = r, et.Suspense = h, et.SuspenseList = p, et.isContextConsumer = function(k) {
    return P(k) === a
  }, et.isContextProvider = function(k) {
    return P(k) === l
  }, et.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === t
  }, et.isForwardRef = function(k) {
    return P(k) === c
  }, et.isFragment = function(k) {
    return P(k) === n
  }, et.isLazy = function(k) {
    return P(k) === y
  }, et.isMemo = function(k) {
    return P(k) === m
  }, et.isPortal = function(k) {
    return P(k) === e
  }, et.isProfiler = function(k) {
    return P(k) === i
  }, et.isStrictMode = function(k) {
    return P(k) === r
  }, et.isSuspense = function(k) {
    return P(k) === h
  }, et.isSuspenseList = function(k) {
    return P(k) === p
  }, et.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === n || k === i || k === r || k === h || k === p || typeof k == "object" && k !== null && (k.$$typeof === y || k.$$typeof === m || k.$$typeof === l || k.$$typeof === a || k.$$typeof === c || k.$$typeof === C || k.getModuleId !== void 0)
  }, et.typeOf = P, et
}
var Ig;

function wN() {
  return Ig || (Ig = 1, P4.exports = vN()), P4.exports
}
var Tw = wN();

function T2(t) {
  if (typeof t != "object" || t === null) return !1;
  const e = Object.getPrototypeOf(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t)
}

function Cw(t) {
  if (M.isValidElement(t) || Tw.isValidElementType(t) || !T2(t)) return t;
  const e = {};
  return Object.keys(t).forEach(n => {
    e[n] = Cw(t[n])
  }), e
}

function br(t, e, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...t
  } : t;
  return T2(t) && T2(e) && Object.keys(e).forEach(i => {
    M.isValidElement(e[i]) || Tw.isValidElementType(e[i]) ? r[i] = e[i] : T2(e[i]) && Object.prototype.hasOwnProperty.call(t, i) && T2(t[i]) ? r[i] = br(t[i], e[i], n) : n.clone ? r[i] = T2(e[i]) ? Cw(e[i]) : e[i] : r[i] = e[i]
  }), r
}
const bN = t => {
  const e = Object.keys(t).map(n => ({
    key: n,
    val: t[n]
  })) || [];
  return e.sort((n, r) => n.val - r.val), e.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {})
};

function _N(t) {
  const {
    values: e = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
    unit: n = "px",
    step: r = 5,
    ...i
  } = t, a = bN(e), l = Object.keys(a);

  function c(v) {
    return `@media (min-width:${typeof e[v]=="number"?e[v]:v}${n})`
  }

  function h(v) {
    return `@media (max-width:${(typeof e[v]=="number"?e[v]:v)-r/100}${n})`
  }

  function p(v, C) {
    const P = l.indexOf(C);
    return `@media (min-width:${typeof e[v]=="number"?e[v]:v}${n}) and (max-width:${(P!==-1&&typeof e[l[P]]=="number"?e[l[P]]:C)-r/100}${n})`
  }

  function m(v) {
    return l.indexOf(v) + 1 < l.length ? p(v, l[l.indexOf(v) + 1]) : c(v)
  }

  function y(v) {
    const C = l.indexOf(v);
    return C === 0 ? c(l[1]) : C === l.length - 1 ? h(l[C]) : p(v, l[l.indexOf(v) + 1]).replace("@media", "@media not all and")
  }
  return {
    keys: l,
    values: a,
    up: c,
    down: h,
    between: p,
    only: m,
    not: y,
    unit: n,
    ...i
  }
}

function Rg(t, e) {
  if (!t.containerQueries) return e;
  const n = Object.keys(e).filter(r => r.startsWith("@container")).sort((r, i) => {
    var l, c;
    const a = /min-width:\s*([0-9.]+)/;
    return +(((l = r.match(a)) == null ? void 0 : l[1]) || 0) - +(((c = i.match(a)) == null ? void 0 : c[1]) || 0)
  });
  return n.length ? n.reduce((r, i) => {
    const a = e[i];
    return delete r[i], r[i] = a, r
  }, {
    ...e
  }) : e
}

function xN(t, e) {
  return e === "@" || e.startsWith("@") && (t.some(n => e.startsWith(`@${n}`)) || !!e.match(/^@\d/))
}

function SN(t, e) {
  const n = e.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) return null;
  const [, r, i] = n, a = Number.isNaN(+r) ? r || 0 : +r;
  return t.containerQueries(i).up(a)
}

function EN(t) {
  const e = (a, l) => a.replace("@media", l ? `@container ${l}` : "@container");

  function n(a, l) {
    a.up = (...c) => e(t.breakpoints.up(...c), l), a.down = (...c) => e(t.breakpoints.down(...c), l), a.between = (...c) => e(t.breakpoints.between(...c), l), a.only = (...c) => e(t.breakpoints.only(...c), l), a.not = (...c) => {
      const h = e(t.breakpoints.not(...c), l);
      return h.includes("not all and") ? h.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : h
    }
  }
  const r = {},
    i = a => (n(r, a), r);
  return n(i), {
    ...t,
    containerQueries: i
  }
}
const TN = {
  borderRadius: 4
};

function Oa(t, e) {
  return e ? br(t, e, {
    clone: !1
  }) : t
}
const gc = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  },
  Ng = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: t => `@media (min-width:${gc[t]}px)`
  },
  CN = {
    containerQueries: t => ({
      up: e => {
        let n = typeof e == "number" ? e : gc[e] || e;
        return typeof n == "number" && (n = `${n}px`), t ? `@container ${t} (min-width:${n})` : `@container (min-width:${n})`
      }
    })
  };

function hi(t, e, n) {
  const r = t.theme || {};
  if (Array.isArray(e)) {
    const a = r.breakpoints || Ng;
    return e.reduce((l, c, h) => (l[a.up(a.keys[h])] = n(e[h]), l), {})
  }
  if (typeof e == "object") {
    const a = r.breakpoints || Ng;
    return Object.keys(e).reduce((l, c) => {
      if (xN(a.keys, c)) {
        const h = SN(r.containerQueries ? r : CN, c);
        h && (l[h] = n(e[c], c))
      } else if (Object.keys(a.values || gc).includes(c)) {
        const h = a.up(c);
        l[h] = n(e[c], c)
      } else {
        const h = c;
        l[h] = e[h]
      }
      return l
    }, {})
  }
  return n(e)
}

function kN(t = {}) {
  var n;
  return ((n = t.keys) == null ? void 0 : n.reduce((r, i) => {
    const a = t.up(i);
    return r[a] = {}, r
  }, {})) || {}
}

function Lg(t, e) {
  return t.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n
  }, e)
}

function Kn(t) {
  if (typeof t != "string") throw new Error(X3(7));
  return t.charAt(0).toUpperCase() + t.slice(1)
}

function yc(t, e, n = !0) {
  if (!e || typeof e != "string") return null;
  if (t && t.vars && n) {
    const r = `vars.${e}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, t);
    if (r != null) return r
  }
  return e.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, t)
}

function Au(t, e, n, r = n) {
  let i;
  return typeof t == "function" ? i = t(n) : Array.isArray(t) ? i = t[n] || r : i = yc(t, n) || r, e && (i = e(i, r, t)), i
}

function Ot(t) {
  const {
    prop: e,
    cssProperty: n = t.prop,
    themeKey: r,
    transform: i
  } = t, a = l => {
    if (l[e] == null) return null;
    const c = l[e],
      h = l.theme,
      p = yc(h, r) || {};
    return hi(l, c, y => {
      let v = Au(p, i, y);
      return y === v && typeof y == "string" && (v = Au(p, i, `${e}${y==="default"?"":Kn(y)}`, y)), n === !1 ? v : {
        [n]: v
      }
    })
  };
  return a.propTypes = {}, a.filterProps = [e], a
}

function PN(t) {
  const e = {};
  return n => (e[n] === void 0 && (e[n] = t(n)), e[n])
}
const AN = {
    m: "margin",
    p: "padding"
  },
  IN = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"]
  },
  Mg = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  },
  RN = PN(t => {
    if (t.length > 2)
      if (Mg[t]) t = Mg[t];
      else return [t];
    const [e, n] = t.split(""), r = AN[e], i = IN[n] || "";
    return Array.isArray(i) ? i.map(a => r + a) : [r + i]
  }),
  af = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"],
  lf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...af, ...lf];

function y0(t, e, n, r) {
  const i = yc(t, e, !0) ?? n;
  return typeof i == "number" || typeof i == "string" ? a => typeof a == "string" ? a : typeof i == "string" ? `calc(${a} * ${i})` : i * a : Array.isArray(i) ? a => {
    if (typeof a == "string") return a;
    const l = Math.abs(a),
      c = i[l];
    return a >= 0 ? c : typeof c == "number" ? -c : `-${c}`
  } : typeof i == "function" ? i : () => {}
}

function uf(t) {
  return y0(t, "spacing", 8)
}

function v0(t, e) {
  return typeof e == "string" || e == null ? e : t(e)
}

function NN(t, e) {
  return n => t.reduce((r, i) => (r[i] = v0(e, n), r), {})
}

function LN(t, e, n, r) {
  if (!e.includes(n)) return null;
  const i = RN(n),
    a = NN(i, r),
    l = t[n];
  return hi(t, l, a)
}

function kw(t, e) {
  const n = uf(t.theme);
  return Object.keys(t).map(r => LN(t, e, r, n)).reduce(Oa, {})
}

function Tt(t) {
  return kw(t, af)
}
Tt.propTypes = {};
Tt.filterProps = af;

function Ct(t) {
  return kw(t, lf)
}
Ct.propTypes = {};
Ct.filterProps = lf;

function Pw(t = 8, e = uf({
  spacing: t
})) {
  if (t.mui) return t;
  const n = (...r) => (r.length === 0 ? [1] : r).map(a => {
    const l = e(a);
    return typeof l == "number" ? `${l}px` : l
  }).join(" ");
  return n.mui = !0, n
}

function vc(...t) {
  const e = t.reduce((r, i) => (i.filterProps.forEach(a => {
      r[a] = i
    }), r), {}),
    n = r => Object.keys(r).reduce((i, a) => e[a] ? Oa(i, e[a](r)) : i, {});
  return n.propTypes = {}, n.filterProps = t.reduce((r, i) => r.concat(i.filterProps), []), n
}

function Ur(t) {
  return typeof t != "number" ? t : `${t}px solid`
}

function Gr(t, e) {
  return Ot({
    prop: t,
    themeKey: "borders",
    transform: e
  })
}
const MN = Gr("border", Ur),
  DN = Gr("borderTop", Ur),
  ON = Gr("borderRight", Ur),
  jN = Gr("borderBottom", Ur),
  VN = Gr("borderLeft", Ur),
  FN = Gr("borderColor"),
  BN = Gr("borderTopColor"),
  $N = Gr("borderRightColor"),
  zN = Gr("borderBottomColor"),
  UN = Gr("borderLeftColor"),
  WN = Gr("outline", Ur),
  HN = Gr("outlineColor"),
  wc = t => {
    if (t.borderRadius !== void 0 && t.borderRadius !== null) {
      const e = y0(t.theme, "shape.borderRadius", 4),
        n = r => ({
          borderRadius: v0(e, r)
        });
      return hi(t, t.borderRadius, n)
    }
    return null
  };
wc.propTypes = {};
wc.filterProps = ["borderRadius"];
vc(MN, DN, ON, jN, VN, FN, BN, $N, zN, UN, wc, WN, HN);
const bc = t => {
  if (t.gap !== void 0 && t.gap !== null) {
    const e = y0(t.theme, "spacing", 8),
      n = r => ({
        gap: v0(e, r)
      });
    return hi(t, t.gap, n)
  }
  return null
};
bc.propTypes = {};
bc.filterProps = ["gap"];
const _c = t => {
  if (t.columnGap !== void 0 && t.columnGap !== null) {
    const e = y0(t.theme, "spacing", 8),
      n = r => ({
        columnGap: v0(e, r)
      });
    return hi(t, t.columnGap, n)
  }
  return null
};
_c.propTypes = {};
_c.filterProps = ["columnGap"];
const xc = t => {
  if (t.rowGap !== void 0 && t.rowGap !== null) {
    const e = y0(t.theme, "spacing", 8),
      n = r => ({
        rowGap: v0(e, r)
      });
    return hi(t, t.rowGap, n)
  }
  return null
};
xc.propTypes = {};
xc.filterProps = ["rowGap"];
const qN = Ot({
    prop: "gridColumn"
  }),
  GN = Ot({
    prop: "gridRow"
  }),
  KN = Ot({
    prop: "gridAutoFlow"
  }),
  QN = Ot({
    prop: "gridAutoColumns"
  }),
  YN = Ot({
    prop: "gridAutoRows"
  }),
  XN = Ot({
    prop: "gridTemplateColumns"
  }),
  JN = Ot({
    prop: "gridTemplateRows"
  }),
  ZN = Ot({
    prop: "gridTemplateAreas"
  }),
  eL = Ot({
    prop: "gridArea"
  });
vc(bc, _c, xc, qN, GN, KN, QN, YN, XN, JN, ZN, eL);

function co(t, e) {
  return e === "grey" ? e : t
}
const tL = Ot({
    prop: "color",
    themeKey: "palette",
    transform: co
  }),
  nL = Ot({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: co
  }),
  rL = Ot({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: co
  });
vc(tL, nL, rL);

function yr(t) {
  return t <= 1 && t !== 0 ? `${t*100}%` : t
}
const iL = Ot({
    prop: "width",
    transform: yr
  }),
  cf = t => {
    if (t.maxWidth !== void 0 && t.maxWidth !== null) {
      const e = n => {
        var i, a, l, c, h;
        const r = ((l = (a = (i = t.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : a.values) == null ? void 0 : l[n]) || gc[n];
        return r ? ((h = (c = t.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : h.unit) !== "px" ? {
          maxWidth: `${r}${t.theme.breakpoints.unit}`
        } : {
          maxWidth: r
        } : {
          maxWidth: yr(n)
        }
      };
      return hi(t, t.maxWidth, e)
    }
    return null
  };
cf.filterProps = ["maxWidth"];
const sL = Ot({
    prop: "minWidth",
    transform: yr
  }),
  oL = Ot({
    prop: "height",
    transform: yr
  }),
  aL = Ot({
    prop: "maxHeight",
    transform: yr
  }),
  lL = Ot({
    prop: "minHeight",
    transform: yr
  });
Ot({
  prop: "size",
  cssProperty: "width",
  transform: yr
});
Ot({
  prop: "size",
  cssProperty: "height",
  transform: yr
});
const uL = Ot({
  prop: "boxSizing"
});
vc(iL, cf, sL, oL, aL, lL, uL);
const w0 = {
  border: {
    themeKey: "borders",
    transform: Ur
  },
  borderTop: {
    themeKey: "borders",
    transform: Ur
  },
  borderRight: {
    themeKey: "borders",
    transform: Ur
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ur
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ur
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Ur
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: wc
  },
  color: {
    themeKey: "palette",
    transform: co
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: co
  },
  backgroundColor: {
    themeKey: "palette",
    transform: co
  },
  p: {
    style: Ct
  },
  pt: {
    style: Ct
  },
  pr: {
    style: Ct
  },
  pb: {
    style: Ct
  },
  pl: {
    style: Ct
  },
  px: {
    style: Ct
  },
  py: {
    style: Ct
  },
  padding: {
    style: Ct
  },
  paddingTop: {
    style: Ct
  },
  paddingRight: {
    style: Ct
  },
  paddingBottom: {
    style: Ct
  },
  paddingLeft: {
    style: Ct
  },
  paddingX: {
    style: Ct
  },
  paddingY: {
    style: Ct
  },
  paddingInline: {
    style: Ct
  },
  paddingInlineStart: {
    style: Ct
  },
  paddingInlineEnd: {
    style: Ct
  },
  paddingBlock: {
    style: Ct
  },
  paddingBlockStart: {
    style: Ct
  },
  paddingBlockEnd: {
    style: Ct
  },
  m: {
    style: Tt
  },
  mt: {
    style: Tt
  },
  mr: {
    style: Tt
  },
  mb: {
    style: Tt
  },
  ml: {
    style: Tt
  },
  mx: {
    style: Tt
  },
  my: {
    style: Tt
  },
  margin: {
    style: Tt
  },
  marginTop: {
    style: Tt
  },
  marginRight: {
    style: Tt
  },
  marginBottom: {
    style: Tt
  },
  marginLeft: {
    style: Tt
  },
  marginX: {
    style: Tt
  },
  marginY: {
    style: Tt
  },
  marginInline: {
    style: Tt
  },
  marginInlineStart: {
    style: Tt
  },
  marginInlineEnd: {
    style: Tt
  },
  marginBlock: {
    style: Tt
  },
  marginBlockStart: {
    style: Tt
  },
  marginBlockEnd: {
    style: Tt
  },
  displayPrint: {
    cssProperty: !1,
    transform: t => ({
      "@media print": {
        display: t
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: {
    style: bc
  },
  rowGap: {
    style: xc
  },
  columnGap: {
    style: _c
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: {
    themeKey: "shadows"
  },
  width: {
    transform: yr
  },
  maxWidth: {
    style: cf
  },
  minWidth: {
    transform: yr
  },
  height: {
    transform: yr
  },
  maxHeight: {
    transform: yr
  },
  minHeight: {
    transform: yr
  },
  boxSizing: {},
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};

function cL(...t) {
  const e = t.reduce((r, i) => r.concat(Object.keys(i)), []),
    n = new Set(e);
  return t.every(r => n.size === Object.keys(r).length)
}

function dL(t, e) {
  return typeof t == "function" ? t(e) : t
}

function hL() {
  function t(n, r, i, a) {
    const l = {
        [n]: r,
        theme: i
      },
      c = a[n];
    if (!c) return {
      [n]: r
    };
    const {
      cssProperty: h = n,
      themeKey: p,
      transform: m,
      style: y
    } = c;
    if (r == null) return null;
    if (p === "typography" && r === "inherit") return {
      [n]: r
    };
    const v = yc(i, p) || {};
    return y ? y(l) : hi(l, r, P => {
      let k = Au(v, m, P);
      return P === k && typeof P == "string" && (k = Au(v, m, `${n}${P==="default"?"":Kn(P)}`, P)), h === !1 ? k : {
        [h]: k
      }
    })
  }

  function e(n) {
    const {
      sx: r,
      theme: i = {},
      nested: a
    } = n || {};
    if (!r) return null;
    const l = i.unstable_sxConfig ?? w0;

    function c(h) {
      let p = h;
      if (typeof h == "function") p = h(i);
      else if (typeof h != "object") return h;
      if (!p) return null;
      const m = kN(i.breakpoints),
        y = Object.keys(m);
      let v = m;
      return Object.keys(p).forEach(C => {
        const P = dL(p[C], i);
        if (P != null)
          if (typeof P == "object")
            if (l[C]) v = Oa(v, t(C, P, i, l));
            else {
              const k = hi({
                theme: i
              }, P, R => ({
                [C]: R
              }));
              cL(k, P) ? v[C] = e({
                sx: P,
                theme: i,
                nested: !0
              }) : v = Oa(v, k)
            }
        else v = Oa(v, t(C, P, i, l))
      }), !a && i.modularCssLayers ? {
        "@layer sx": Rg(i, Lg(y, v))
      } : Rg(i, Lg(y, v))
    }
    return Array.isArray(r) ? r.map(c) : c(r)
  }
  return e
}
const J3 = hL();
J3.filterProps = ["sx"];

function fL(t, e) {
  var r;
  const n = this;
  if (n.vars) {
    if (!((r = n.colorSchemes) != null && r[t]) || typeof n.getColorSchemeSelector != "function") return {};
    let i = n.getColorSchemeSelector(t);
    return i === "&" ? e : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/,"")}) &`), {
      [i]: e
    })
  }
  return n.palette.mode === t ? e : {}
}

function df(t = {}, ...e) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: a = {},
    ...l
  } = t, c = _N(n), h = Pw(i);
  let p = br({
    breakpoints: c,
    direction: "ltr",
    components: {},
    palette: {
      mode: "light",
      ...r
    },
    spacing: h,
    shape: {
      ...TN,
      ...a
    }
  }, l);
  return p = EN(p), p.applyStyles = fL, p = e.reduce((m, y) => br(m, y), p), p.unstable_sxConfig = {
    ...w0,
    ...l == null ? void 0 : l.unstable_sxConfig
  }, p.unstable_sx = function(y) {
    return J3({
      sx: y,
      theme: this
    })
  }, p
}

function pL(t) {
  return Object.keys(t).length === 0
}

function mL(t = null) {
  const e = M.useContext(rf);
  return !e || pL(e) ? t : e
}
const gL = df();

function Aw(t = gL) {
  return mL(t)
}
const yL = t => {
  var r;
  const e = {
      systemProps: {},
      otherProps: {}
    },
    n = ((r = t == null ? void 0 : t.theme) == null ? void 0 : r.unstable_sxConfig) ?? w0;
  return Object.keys(t).forEach(i => {
    n[i] ? e.systemProps[i] = t[i] : e.otherProps[i] = t[i]
  }), e
};

function Iw(t) {
  const {
    sx: e,
    ...n
  } = t, {
    systemProps: r,
    otherProps: i
  } = yL(n);