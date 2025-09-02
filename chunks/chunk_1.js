var YS = Object.defineProperty;
var XS = (t, e, n) => e in t ? YS(t, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : t[e] = n;
var pa = (t, e, n) => XS(t, typeof e != "symbol" ? e + "" : e, n);

function JS(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in t)) {
          const a = Object.getOwnPropertyDescriptor(r, i);
          a && Object.defineProperty(t, i, a.get ? a : {
            enumerable: !0,
            get: () => r[i]
          })
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
    value: "Module"
  }))
}(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver(i => {
    for (const a of i)
      if (a.type === "childList")
        for (const l of a.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function n(i) {
    const a = {};
    return i.integrity && (a.integrity = i.integrity), i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? a.credentials = "include" : i.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
  }

  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = n(i);
    fetch(i.href, a)
  }
})();

function Qu(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var t4 = {
    exports: {}
  },
  ma = {},
  n4 = {
    exports: {}
  },
  Ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cp;

function ZS() {
  if (Cp) return Ee;
  Cp = 1;
  var t = Symbol.for("react.element"),
    e = Symbol.for("react.portal"),
    n = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    i = Symbol.for("react.profiler"),
    a = Symbol.for("react.provider"),
    l = Symbol.for("react.context"),
    c = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    m = Symbol.for("react.lazy"),
    y = Symbol.iterator;

  function v(K) {
    return K === null || typeof K != "object" ? null : (K = y && K[y] || K["@@iterator"], typeof K == "function" ? K : null)
  }
  var C = {
      isMounted: function() {
        return !1
      },
      enqueueForceUpdate: function() {},
      enqueueReplaceState: function() {},
      enqueueSetState: function() {}
    },
    P = Object.assign,
    k = {};

  function R(K, s1, E1) {
    this.props = K, this.context = s1, this.refs = k, this.updater = E1 || C
  }
  R.prototype.isReactComponent = {}, R.prototype.setState = function(K, s1) {
    if (typeof K != "object" && typeof K != "function" && K != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, K, s1, "setState")
  }, R.prototype.forceUpdate = function(K) {
    this.updater.enqueueForceUpdate(this, K, "forceUpdate")
  };

  function W() {}
  W.prototype = R.prototype;

  function q(K, s1, E1) {
    this.props = K, this.context = s1, this.refs = k, this.updater = E1 || C
  }
  var U = q.prototype = new W;
  U.constructor = q, P(U, R.prototype), U.isPureReactComponent = !0;
  var H = Array.isArray,
    $ = Object.prototype.hasOwnProperty,
    X = {
      current: null
    },
    D = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };

  function A(K, s1, E1) {
    var M1, F1 = {},
      $1 = null,
      K1 = null;
    if (s1 != null)
      for (M1 in s1.ref !== void 0 && (K1 = s1.ref), s1.key !== void 0 && ($1 = "" + s1.key), s1) $.call(s1, M1) && !D.hasOwnProperty(M1) && (F1[M1] = s1[M1]);
    var B1 = arguments.length - 2;
    if (B1 === 1) F1.children = E1;
    else if (1 < B1) {
      for (var ee = Array(B1), me = 0; me < B1; me++) ee[me] = arguments[me + 2];
      F1.children = ee
    }
    if (K && K.defaultProps)
      for (M1 in B1 = K.defaultProps, B1) F1[M1] === void 0 && (F1[M1] = B1[M1]);
    return {
      $$typeof: t,
      type: K,
      key: $1,
      ref: K1,
      props: F1,
      _owner: X.current
    }
  }

  function j(K, s1) {
    return {
      $$typeof: t,
      type: K.type,
      key: s1,
      ref: K.ref,
      props: K.props,
      _owner: K._owner
    }
  }

  function x(K) {
    return typeof K == "object" && K !== null && K.$$typeof === t
  }

  function N(K) {
    var s1 = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + K.replace(/[=:]/g, function(E1) {
      return s1[E1]
    })
  }
  var V = /\/+/g;

  function L(K, s1) {
    return typeof K == "object" && K !== null && K.key != null ? N("" + K.key) : s1.toString(36)
  }

  function h1(K, s1, E1, M1, F1) {
    var $1 = typeof K;
    ($1 === "undefined" || $1 === "boolean") && (K = null);
    var K1 = !1;
    if (K === null) K1 = !0;
    else switch ($1) {
      case "string":
      case "number":
        K1 = !0;
        break;
      case "object":
        switch (K.$$typeof) {
          case t:
          case e:
            K1 = !0
        }
    }
    if (K1) return K1 = K, F1 = F1(K1), K = M1 === "" ? "." + L(K1, 0) : M1, H(F1) ? (E1 = "", K != null && (E1 = K.replace(V, "$&/") + "/"), h1(F1, s1, E1, "", function(me) {
      return me
    })) : F1 != null && (x(F1) && (F1 = j(F1, E1 + (!F1.key || K1 && K1.key === F1.key ? "" : ("" + F1.key).replace(V, "$&/") + "/") + K)), s1.push(F1)), 1;
    if (K1 = 0, M1 = M1 === "" ? "." : M1 + ":", H(K))
      for (var B1 = 0; B1 < K.length; B1++) {
        $1 = K[B1];
        var ee = M1 + L($1, B1);
        K1 += h1($1, s1, E1, ee, F1)
      } else if (ee = v(K), typeof ee == "function")
        for (K = ee.call(K), B1 = 0; !($1 = K.next()).done;) $1 = $1.value, ee = M1 + L($1, B1++), K1 += h1($1, s1, E1, ee, F1);
      else if ($1 === "object") throw s1 = String(K), Error("Objects are not valid as a React child (found: " + (s1 === "[object Object]" ? "object with keys {" + Object.keys(K).join(", ") + "}" : s1) + "). If you meant to render a collection of children, use an array instead.");
    return K1
  }

  function A1(K, s1, E1) {
    if (K == null) return K;
    var M1 = [],
      F1 = 0;
    return h1(K, M1, "", "", function($1) {
      return s1.call(E1, $1, F1++)
    }), M1
  }

  function V1(K) {
    if (K._status === -1) {
      var s1 = K._result;
      s1 = s1(), s1.then(function(E1) {
        (K._status === 0 || K._status === -1) && (K._status = 1, K._result = E1)
      }, function(E1) {
        (K._status === 0 || K._status === -1) && (K._status = 2, K._result = E1)
      }), K._status === -1 && (K._status = 0, K._result = s1)
    }
    if (K._status === 1) return K._result.default;
    throw K._result
  }
  var k1 = {
      current: null
    },
    c1 = {
      transition: null
    },
    y1 = {
      ReactCurrentDispatcher: k1,
      ReactCurrentBatchConfig: c1,
      ReactCurrentOwner: X
    };

  function f1() {
    throw Error("act(...) is not supported in production builds of React.")
  }
  return Ee.Children = {
    map: A1,
    forEach: function(K, s1, E1) {
      A1(K, function() {
        s1.apply(this, arguments)
      }, E1)
    },
    count: function(K) {
      var s1 = 0;
      return A1(K, function() {
        s1++
      }), s1
    },
    toArray: function(K) {
      return A1(K, function(s1) {
        return s1
      }) || []
    },
    only: function(K) {
      if (!x(K)) throw Error("React.Children.only expected to receive a single React element child.");
      return K
    }
  }, Ee.Component = R, Ee.Fragment = n, Ee.Profiler = i, Ee.PureComponent = q, Ee.StrictMode = r, Ee.Suspense = h, Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = y1, Ee.act = f1, Ee.cloneElement = function(K, s1, E1) {
    if (K == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + K + ".");
    var M1 = P({}, K.props),
      F1 = K.key,
      $1 = K.ref,
      K1 = K._owner;
    if (s1 != null) {
      if (s1.ref !== void 0 && ($1 = s1.ref, K1 = X.current), s1.key !== void 0 && (F1 = "" + s1.key), K.type && K.type.defaultProps) var B1 = K.type.defaultProps;
      for (ee in s1) $.call(s1, ee) && !D.hasOwnProperty(ee) && (M1[ee] = s1[ee] === void 0 && B1 !== void 0 ? B1[ee] : s1[ee])
    }
    var ee = arguments.length - 2;
    if (ee === 1) M1.children = E1;
    else if (1 < ee) {
      B1 = Array(ee);
      for (var me = 0; me < ee; me++) B1[me] = arguments[me + 2];
      M1.children = B1
    }
    return {
      $$typeof: t,
      type: K.type,
      key: F1,
      ref: $1,
      props: M1,
      _owner: K1
    }
  }, Ee.createContext = function(K) {
    return K = {
      $$typeof: l,
      _currentValue: K,
      _currentValue2: K,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, K.Provider = {
      $$typeof: a,
      _context: K
    }, K.Consumer = K
  }, Ee.createElement = A, Ee.createFactory = function(K) {
    var s1 = A.bind(null, K);
    return s1.type = K, s1
  }, Ee.createRef = function() {
    return {
      current: null
    }
  }, Ee.forwardRef = function(K) {
    return {
      $$typeof: c,
      render: K
    }
  }, Ee.isValidElement = x, Ee.lazy = function(K) {
    return {
      $$typeof: m,
      _payload: {
        _status: -1,
        _result: K
      },
      _init: V1
    }
  }, Ee.memo = function(K, s1) {
    return {
      $$typeof: p,
      type: K,
      compare: s1 === void 0 ? null : s1
    }
  }, Ee.startTransition = function(K) {
    var s1 = c1.transition;
    c1.transition = {};
    try {
      K()
    } finally {
      c1.transition = s1
    }
  }, Ee.unstable_act = f1, Ee.useCallback = function(K, s1) {
    return k1.current.useCallback(K, s1)
  }, Ee.useContext = function(K) {
    return k1.current.useContext(K)
  }, Ee.useDebugValue = function() {}, Ee.useDeferredValue = function(K) {
    return k1.current.useDeferredValue(K)
  }, Ee.useEffect = function(K, s1) {
    return k1.current.useEffect(K, s1)
  }, Ee.useId = function() {
    return k1.current.useId()
  }, Ee.useImperativeHandle = function(K, s1, E1) {
    return k1.current.useImperativeHandle(K, s1, E1)
  }, Ee.useInsertionEffect = function(K, s1) {
    return k1.current.useInsertionEffect(K, s1)
  }, Ee.useLayoutEffect = function(K, s1) {
    return k1.current.useLayoutEffect(K, s1)
  }, Ee.useMemo = function(K, s1) {
    return k1.current.useMemo(K, s1)
  }, Ee.useReducer = function(K, s1, E1) {
    return k1.current.useReducer(K, s1, E1)
  }, Ee.useRef = function(K) {
    return k1.current.useRef(K)
  }, Ee.useState = function(K) {
    return k1.current.useState(K)
  }, Ee.useSyncExternalStore = function(K, s1, E1) {
    return k1.current.useSyncExternalStore(K, s1, E1)
  }, Ee.useTransition = function() {
    return k1.current.useTransition()
  }, Ee.version = "18.3.1", Ee
}
var kp;

function Yu() {
  return kp || (kp = 1, n4.exports = ZS()), n4.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pp;

function eE() {
  if (Pp) return ma;
  Pp = 1;
  var t = Yu(),
    e = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    r = Object.prototype.hasOwnProperty,
    i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    a = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };

  function l(c, h, p) {
    var m, y = {},
      v = null,
      C = null;
    p !== void 0 && (v = "" + p), h.key !== void 0 && (v = "" + h.key), h.ref !== void 0 && (C = h.ref);
    for (m in h) r.call(h, m) && !a.hasOwnProperty(m) && (y[m] = h[m]);
    if (c && c.defaultProps)
      for (m in h = c.defaultProps, h) y[m] === void 0 && (y[m] = h[m]);
    return {
      $$typeof: e,
      type: c,
      key: v,
      ref: C,
      props: y,
      _owner: i.current
    }
  }
  return ma.Fragment = n, ma.jsx = l, ma.jsxs = l, ma
}
var Ap;

function tE() {
  return Ap || (Ap = 1, t4.exports = eE()), t4.exports
}
var _ = tE(),
  M = Yu();
const D3 = Qu(M),
  eh = JS({
    __proto__: null,
    default: D3
  }, [M]);
var Al = {},
  r4 = {
    exports: {}
  },
  ir = {},
  i4 = {
    exports: {}
  },
  s4 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ip;

function nE() {
  return Ip || (Ip = 1, function(t) {
    function e(c1, y1) {
      var f1 = c1.length;
      c1.push(y1);
      e: for (; 0 < f1;) {
        var K = f1 - 1 >>> 1,
          s1 = c1[K];
        if (0 < i(s1, y1)) c1[K] = y1, c1[f1] = s1, f1 = K;
        else break e
      }
    }

    function n(c1) {
      return c1.length === 0 ? null : c1[0]
    }

    function r(c1) {
      if (c1.length === 0) return null;
      var y1 = c1[0],
        f1 = c1.pop();
      if (f1 !== y1) {
        c1[0] = f1;
        e: for (var K = 0, s1 = c1.length, E1 = s1 >>> 1; K < E1;) {
          var M1 = 2 * (K + 1) - 1,
            F1 = c1[M1],
            $1 = M1 + 1,
            K1 = c1[$1];
          if (0 > i(F1, f1)) $1 < s1 && 0 > i(K1, F1) ? (c1[K] = K1, c1[$1] = f1, K = $1) : (c1[K] = F1, c1[M1] = f1, K = M1);
          else if ($1 < s1 && 0 > i(K1, f1)) c1[K] = K1, c1[$1] = f1, K = $1;
          else break e
        }
      }
      return y1
    }

    function i(c1, y1) {
      var f1 = c1.sortIndex - y1.sortIndex;
      return f1 !== 0 ? f1 : c1.id - y1.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var a = performance;
      t.unstable_now = function() {
        return a.now()
      }
    } else {
      var l = Date,
        c = l.now();
      t.unstable_now = function() {
        return l.now() - c
      }
    }
    var h = [],
      p = [],
      m = 1,
      y = null,
      v = 3,
      C = !1,
      P = !1,
      k = !1,
      R = typeof setTimeout == "function" ? setTimeout : null,
      W = typeof clearTimeout == "function" ? clearTimeout : null,
      q = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function U(c1) {
      for (var y1 = n(p); y1 !== null;) {
        if (y1.callback === null) r(p);
        else if (y1.startTime <= c1) r(p), y1.sortIndex = y1.expirationTime, e(h, y1);
        else break;
        y1 = n(p)
      }
    }

    function H(c1) {
      if (k = !1, U(c1), !P)
        if (n(h) !== null) P = !0, V1($);
        else {
          var y1 = n(p);
          y1 !== null && k1(H, y1.startTime - c1)
        }
    }

    function $(c1, y1) {
      P = !1, k && (k = !1, W(A), A = -1), C = !0;
      var f1 = v;
      try {
        for (U(y1), y = n(h); y !== null && (!(y.expirationTime > y1) || c1 && !N());) {
          var K = y.callback;
          if (typeof K == "function") {
            y.callback = null, v = y.priorityLevel;
            var s1 = K(y.expirationTime <= y1);
            y1 = t.unstable_now(), typeof s1 == "function" ? y.callback = s1 : y === n(h) && r(h), U(y1)
          } else r(h);
          y = n(h)
        }
        if (y !== null) var E1 = !0;
        else {
          var M1 = n(p);
          M1 !== null && k1(H, M1.startTime - y1), E1 = !1
        }
        return E1
      } finally {
        y = null, v = f1, C = !1
      }
    }
    var X = !1,
      D = null,
      A = -1,
      j = 5,
      x = -1;

    function N() {
      return !(t.unstable_now() - x < j)
    }

    function V() {
      if (D !== null) {
        var c1 = t.unstable_now();
        x = c1;
        var y1 = !0;
        try {
          y1 = D(!0, c1)
        } finally {
          y1 ? L() : (X = !1, D = null)
        }
      } else X = !1
    }
    var L;
    if (typeof q == "function") L = function() {
      q(V)
    };
    else if (typeof MessageChannel < "u") {
      var h1 = new MessageChannel,
        A1 = h1.port2;
      h1.port1.onmessage = V, L = function() {
        A1.postMessage(null)
      }
    } else L = function() {
      R(V, 0)
    };

    function V1(c1) {
      D = c1, X || (X = !0, L())
    }

    function k1(c1, y1) {
      A = R(function() {
        c1(t.unstable_now())
      }, y1)
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(c1) {
      c1.callback = null
    }, t.unstable_continueExecution = function() {
      P || C || (P = !0, V1($))
    }, t.unstable_forceFrameRate = function(c1) {
      0 > c1 || 125 < c1 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < c1 ? Math.floor(1e3 / c1) : 5
    }, t.unstable_getCurrentPriorityLevel = function() {
      return v
    }, t.unstable_getFirstCallbackNode = function() {
      return n(h)
    }, t.unstable_next = function(c1) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var y1 = 3;
          break;
        default:
          y1 = v
      }
      var f1 = v;
      v = y1;
      try {
        return c1()
      } finally {
        v = f1
      }
    }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(c1, y1) {
      switch (c1) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          c1 = 3
      }
      var f1 = v;
      v = c1;
      try {
        return y1()
      } finally {
        v = f1
      }
    }, t.unstable_scheduleCallback = function(c1, y1, f1) {
      var K = t.unstable_now();
      switch (typeof f1 == "object" && f1 !== null ? (f1 = f1.delay, f1 = typeof f1 == "number" && 0 < f1 ? K + f1 : K) : f1 = K, c1) {
        case 1:
          var s1 = -1;
          break;
        case 2:
          s1 = 250;
          break;
        case 5:
          s1 = 1073741823;
          break;
        case 4:
          s1 = 1e4;
          break;
        default:
          s1 = 5e3
      }
      return s1 = f1 + s1, c1 = {
        id: m++,
        callback: y1,
        priorityLevel: c1,
        startTime: f1,
        expirationTime: s1,
        sortIndex: -1
      }, f1 > K ? (c1.sortIndex = f1, e(p, c1), n(h) === null && c1 === n(p) && (k ? (W(A), A = -1) : k = !0, k1(H, f1 - K))) : (c1.sortIndex = s1, e(h, c1), P || C || (P = !0, V1($))), c1
    }, t.unstable_shouldYield = N, t.unstable_wrapCallback = function(c1) {
      var y1 = v;
      return function() {
        var f1 = v;
        v = y1;
        try {
          return c1.apply(this, arguments)
        } finally {
          v = f1
        }
      }
    }
  }(s4)), s4
}
var Rp;

function rE() {
  return Rp || (Rp = 1, i4.exports = nE()), i4.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Np;

function iE() {
  if (Np) return ir;
  Np = 1;
  var t = Yu(),
    e = rE();

  function n(s) {
    for (var o = "https://reactjs.org/docs/error-decoder.html?invariant=" + s, u = 1; u < arguments.length; u++) o += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + s + "; visit " + o + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }
  var r = new Set,
    i = {};

  function a(s, o) {
    l(s, o), l(s + "Capture", o)
  }

  function l(s, o) {
    for (i[s] = o, s = 0; s < o.length; s++) r.add(o[s])
  }
  var c = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    h = Object.prototype.hasOwnProperty,
    p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    m = {},
    y = {};

  function v(s) {
    return h.call(y, s) ? !0 : h.call(m, s) ? !1 : p.test(s) ? y[s] = !0 : (m[s] = !0, !1)
  }

  function C(s, o, u, f) {
    if (u !== null && u.type === 0) return !1;
    switch (typeof o) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return f ? !1 : u !== null ? !u.acceptsBooleans : (s = s.toLowerCase().slice(0, 5), s !== "data-" && s !== "aria-");
      default:
        return !1
    }
  }

  function P(s, o, u, f) {
    if (o === null || typeof o > "u" || C(s, o, u, f)) return !0;
    if (f) return !1;
    if (u !== null) switch (u.type) {
      case 3:
        return !o;
      case 4:
        return o === !1;
      case 5:
        return isNaN(o);
      case 6:
        return isNaN(o) || 1 > o
    }
    return !1
  }

  function k(s, o, u, f, g, b, I) {
    this.acceptsBooleans = o === 2 || o === 3 || o === 4, this.attributeName = f, this.attributeNamespace = g, this.mustUseProperty = u, this.propertyName = s, this.type = o, this.sanitizeURL = b, this.removeEmptyString = I
  }
  var R = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s) {
    R[s] = new k(s, 0, !1, s, null, !1, !1)
  }), [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
  ].forEach(function(s) {
    var o = s[0];
    R[o] = new k(o, 1, !1, s[1], null, !1, !1)
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(s) {
    R[s] = new k(s, 2, !1, s.toLowerCase(), null, !1, !1)
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(s) {
    R[s] = new k(s, 2, !1, s, null, !1, !1)
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s) {
    R[s] = new k(s, 3, !1, s.toLowerCase(), null, !1, !1)
  }), ["checked", "multiple", "muted", "selected"].forEach(function(s) {
    R[s] = new k(s, 3, !0, s, null, !1, !1)
  }), ["capture", "download"].forEach(function(s) {
    R[s] = new k(s, 4, !1, s, null, !1, !1)
  }), ["cols", "rows", "size", "span"].forEach(function(s) {
    R[s] = new k(s, 6, !1, s, null, !1, !1)
  }), ["rowSpan", "start"].forEach(function(s) {
    R[s] = new k(s, 5, !1, s.toLowerCase(), null, !1, !1)
  });
  var W = /[\-:]([a-z])/g;

  function q(s) {
    return s[1].toUpperCase()
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s) {
    var o = s.replace(W, q);
    R[o] = new k(o, 1, !1, s, null, !1, !1)
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s) {
    var o = s.replace(W, q);
    R[o] = new k(o, 1, !1, s, "http://www.w3.org/1999/xlink", !1, !1)
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(s) {
    var o = s.replace(W, q);
    R[o] = new k(o, 1, !1, s, "http://www.w3.org/XML/1998/namespace", !1, !1)
  }), ["tabIndex", "crossOrigin"].forEach(function(s) {
    R[s] = new k(s, 1, !1, s.toLowerCase(), null, !1, !1)
  }), R.xlinkHref = new k("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(s) {
    R[s] = new k(s, 1, !1, s.toLowerCase(), null, !0, !0)
  });

  function U(s, o, u, f) {
    var g = R.hasOwnProperty(o) ? R[o] : null;
    (g !== null ? g.type !== 0 : f || !(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N") && (P(o, u, g, f) && (u = null), f || g === null ? v(o) && (u === null ? s.removeAttribute(o) : s.setAttribute(o, "" + u)) : g.mustUseProperty ? s[g.propertyName] = u === null ? g.type === 3 ? !1 : "" : u : (o = g.attributeName, f = g.attributeNamespace, u === null ? s.removeAttribute(o) : (g = g.type, u = g === 3 || g === 4 && u === !0 ? "" : "" + u, f ? s.setAttributeNS(f, o, u) : s.setAttribute(o, u))))
  }
  var H = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    $ = Symbol.for("react.element"),
    X = Symbol.for("react.portal"),
    D = Symbol.for("react.fragment"),
    A = Symbol.for("react.strict_mode"),
    j = Symbol.for("react.profiler"),
    x = Symbol.for("react.provider"),
    N = Symbol.for("react.context"),
    V = Symbol.for("react.forward_ref"),
    L = Symbol.for("react.suspense"),
    h1 = Symbol.for("react.suspense_list"),
    A1 = Symbol.for("react.memo"),
    V1 = Symbol.for("react.lazy"),
    k1 = Symbol.for("react.offscreen"),
    c1 = Symbol.iterator;

  function y1(s) {
    return s === null || typeof s != "object" ? null : (s = c1 && s[c1] || s["@@iterator"], typeof s == "function" ? s : null)
  }
  var f1 = Object.assign,
    K;

  function s1(s) {
    if (K === void 0) try {
      throw Error()
    } catch (u) {
      var o = u.stack.trim().match(/\n( *(at )?)/);
      K = o && o[1] || ""
    }
    return `
` + K + s
  }
  var E1 = !1;

  function M1(s, o) {
    if (!s || E1) return "";
    E1 = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (o)
        if (o = function() {
            throw Error()
          }, Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error()
            }
          }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(o, [])
          } catch (n1) {
            var f = n1
          }
          Reflect.construct(s, [], o)
        } else {
          try {
            o.call()
          } catch (n1) {
            f = n1
          }
          s.call(o.prototype)
        }
      else {
        try {
          throw Error()
        } catch (n1) {
          f = n1
        }
        s()
      }
    } catch (n1) {
      if (n1 && f && typeof n1.stack == "string") {
        for (var g = n1.stack.split(`
`), b = f.stack.split(`
`), I = g.length - 1, z = b.length - 1; 1 <= I && 0 <= z && g[I] !== b[z];) z--;
        for (; 1 <= I && 0 <= z; I--, z--)
          if (g[I] !== b[z]) {
            if (I !== 1 || z !== 1)
              do
                if (I--, z--, 0 > z || g[I] !== b[z]) {
                  var G = `
` + g[I].replace(" at new ", " at ");
                  return s.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", s.displayName)), G
                } while (1 <= I && 0 <= z);
            break
          }
      }
    } finally {
      E1 = !1, Error.prepareStackTrace = u
    }
    return (s = s ? s.displayName || s.name : "") ? s1(s) : ""
  }

  function F1(s) {
    switch (s.tag) {
      case 5:
        return s1(s.type);
      case 16:
        return s1("Lazy");
      case 13:
        return s1("Suspense");
      case 19:
        return s1("SuspenseList");
      case 0:
      case 2:
      case 15:
        return s = M1(s.type, !1), s;
      case 11:
        return s = M1(s.type.render, !1), s;
      case 1:
        return s = M1(s.type, !0), s;
      default:
        return ""
    }
  }

  function $1(s) {
    if (s == null) return null;
    if (typeof s == "function") return s.displayName || s.name || null;
    if (typeof s == "string") return s;
    switch (s) {
      case D:
        return "Fragment";
      case X:
        return "Portal";
      case j:
        return "Profiler";
      case A:
        return "StrictMode";
      case L:
        return "Suspense";
      case h1:
        return "SuspenseList"
    }
    if (typeof s == "object") switch (s.$$typeof) {
      case N:
        return (s.displayName || "Context") + ".Consumer";
      case x:
        return (s._context.displayName || "Context") + ".Provider";
      case V:
        var o = s.render;
        return s = s.displayName, s || (s = o.displayName || o.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
      case A1:
        return o = s.displayName || null, o !== null ? o : $1(s.type) || "Memo";
      case V1:
        o = s._payload, s = s._init;
        try {
          return $1(s(o))
        } catch {}
    }
    return null
  }

  function K1(s) {
    var o = s.type;
    switch (s.tag) {
      case 24:
        return "Cache";
      case 9:
        return (o.displayName || "Context") + ".Consumer";
      case 10:
        return (o._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return s = o.render, s = s.displayName || s.name || "", o.displayName || (s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return o;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return $1(o);
      case 8:
        return o === A ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof o == "function") return o.displayName || o.name || null;
        if (typeof o == "string") return o
    }
    return null
  }

  function B1(s) {
    switch (typeof s) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return s;
      case "object":
        return s;
      default:
        return ""
    }
  }

  function ee(s) {
    var o = s.type;
    return (s = s.nodeName) && s.toLowerCase() === "input" && (o === "checkbox" || o === "radio")
  }

  function me(s) {
    var o = ee(s) ? "checked" : "value",
      u = Object.getOwnPropertyDescriptor(s.constructor.prototype, o),
      f = "" + s[o];
    if (!s.hasOwnProperty(o) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var g = u.get,
        b = u.set;
      return Object.defineProperty(s, o, {
        configurable: !0,
        get: function() {
          return g.call(this)
        },
        set: function(I) {
          f = "" + I, b.call(this, I)
        }
      }), Object.defineProperty(s, o, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return f
        },
        setValue: function(I) {
          f = "" + I
        },
        stopTracking: function() {
          s._valueTracker = null, delete s[o]
        }
      }
    }
  }

  function he(s) {
    s._valueTracker || (s._valueTracker = me(s))
  }

  function be(s) {
    if (!s) return !1;
    var o = s._valueTracker;
    if (!o) return !0;
    var u = o.getValue(),
      f = "";
    return s && (f = ee(s) ? s.checked ? "true" : "false" : s.value), s = f, s !== u ? (o.setValue(s), !0) : !1
  }

  function J1(s) {
    if (s = s || (typeof document < "u" ? document : void 0), typeof s > "u") return null;
    try {
      return s.activeElement || s.body
    } catch {
      return s.body
    }
  }

  function ie(s, o) {
    var u = o.checked;
    return f1({}, o, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: u ?? s._wrapperState.initialChecked
    })
  }

  function Ie(s, o) {
    var u = o.defaultValue == null ? "" : o.defaultValue,
      f = o.checked != null ? o.checked : o.defaultChecked;
    u = B1(o.value != null ? o.value : u), s._wrapperState = {
      initialChecked: f,
      initialValue: u,
      controlled: o.type === "checkbox" || o.type === "radio" ? o.checked != null : o.value != null
    }
  }

  function He(s, o) {
    o = o.checked, o != null && U(s, "checked", o, !1)
  }

  function qe(s, o) {
    He(s, o);
    var u = B1(o.value),
      f = o.type;
    if (u != null) f === "number" ? (u === 0 && s.value === "" || s.value != u) && (s.value = "" + u) : s.value !== "" + u && (s.value = "" + u);
    else if (f === "submit" || f === "reset") {
      s.removeAttribute("value");
      return
    }
    o.hasOwnProperty("value") ? ot(s, o.type, u) : o.hasOwnProperty("defaultValue") && ot(s, o.type, B1(o.defaultValue)), o.checked == null && o.defaultChecked != null && (s.defaultChecked = !!o.defaultChecked)
  }

  function Qe(s, o, u) {
    if (o.hasOwnProperty("value") || o.hasOwnProperty("defaultValue")) {
      var f = o.type;
      if (!(f !== "submit" && f !== "reset" || o.value !== void 0 && o.value !== null)) return;
      o = "" + s._wrapperState.initialValue, u || o === s.value || (s.value = o), s.defaultValue = o
    }
    u = s.name, u !== "" && (s.name = ""), s.defaultChecked = !!s._wrapperState.initialChecked, u !== "" && (s.name = u)
  }

  function ot(s, o, u) {
    (o !== "number" || J1(s.ownerDocument) !== s) && (u == null ? s.defaultValue = "" + s._wrapperState.initialValue : s.defaultValue !== "" + u && (s.defaultValue = "" + u))
  }
  var It = Array.isArray;

  function _e(s, o, u, f) {
    if (s = s.options, o) {
      o = {};
      for (var g = 0; g < u.length; g++) o["$" + u[g]] = !0;
      for (u = 0; u < s.length; u++) g = o.hasOwnProperty("$" + s[u].value), s[u].selected !== g && (s[u].selected = g), g && f && (s[u].defaultSelected = !0)
    } else {
      for (u = "" + B1(u), o = null, g = 0; g < s.length; g++) {
        if (s[g].value === u) {
          s[g].selected = !0, f && (s[g].defaultSelected = !0);
          return
        }
        o !== null || s[g].disabled || (o = s[g])
      }
      o !== null && (o.selected = !0)
    }
  }

  function T1(s, o) {
    if (o.dangerouslySetInnerHTML != null) throw Error(n(91));
    return f1({}, o, {
      value: void 0,
      defaultValue: void 0,
      children: "" + s._wrapperState.initialValue
    })
  }

  function Fn(s, o) {
    var u = o.value;
    if (u == null) {
      if (u = o.children, o = o.defaultValue, u != null) {
        if (o != null) throw Error(n(92));
        if (It(u)) {
          if (1 < u.length) throw Error(n(93));
          u = u[0]
        }
        o = u
      }
      o == null && (o = ""), u = o
    }
    s._wrapperState = {
      initialValue: B1(u)
    }
  }

  function wt(s, o) {
    var u = B1(o.value),
      f = B1(o.defaultValue);
    u != null && (u = "" + u, u !== s.value && (s.value = u), o.defaultValue == null && s.defaultValue !== u && (s.defaultValue = u)), f != null && (s.defaultValue = "" + f)
  }

  function v1(s) {
    var o = s.textContent;
    o === s._wrapperState.initialValue && o !== "" && o !== null && (s.value = o)
  }

  function J(s) {
    switch (s) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml"
    }
  }

  function p1(s, o) {
    return s == null || s === "http://www.w3.org/1999/xhtml" ? J(o) : s === "http://www.w3.org/2000/svg" && o === "foreignObject" ? "http://www.w3.org/1999/xhtml" : s
  }
  var w1, se = function(s) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(o, u, f, g) {
      MSApp.execUnsafeLocalFunction(function() {
        return s(o, u, f, g)
      })
    } : s
  }(function(s, o) {
    if (s.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in s) s.innerHTML = o;
    else {
      for (w1 = w1 || document.createElement("div"), w1.innerHTML = "<svg>" + o.valueOf().toString() + "</svg>", o = w1.firstChild; s.firstChild;) s.removeChild(s.firstChild);
      for (; o.firstChild;) s.appendChild(o.firstChild)
    }
  });

  function oe(s, o) {
    if (o) {
      var u = s.firstChild;
      if (u && u === s.lastChild && u.nodeType === 3) {
        u.nodeValue = o;
        return
      }
    }
    s.textContent = o
  }
  var ye = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    },
    i1 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ye).forEach(function(s) {
    i1.forEach(function(o) {
      o = o + s.charAt(0).toUpperCase() + s.substring(1), ye[o] = ye[s]
    })
  });

  function d1(s, o, u) {
    return o == null || typeof o == "boolean" || o === "" ? "" : u || typeof o != "number" || o === 0 || ye.hasOwnProperty(s) && ye[s] ? ("" + o).trim() : o + "px"
  }

  function j1(s, o) {
    s = s.style;
    for (var u in o)
      if (o.hasOwnProperty(u)) {
        var f = u.indexOf("--") === 0,
          g = d1(u, o[u], f);
        u === "float" && (u = "cssFloat"), f ? s.setProperty(u, g) : s[u] = g
      }
  }
  var L1 = f1({
    menuitem: !0
  }, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  });

  function D1(s, o) {
    if (o) {
      if (L1[s] && (o.children != null || o.dangerouslySetInnerHTML != null)) throw Error(n(137, s));
      if (o.dangerouslySetInnerHTML != null) {
        if (o.children != null) throw Error(n(60));
        if (typeof o.dangerouslySetInnerHTML != "object" || !("__html" in o.dangerouslySetInnerHTML)) throw Error(n(61))
      }
      if (o.style != null && typeof o.style != "object") throw Error(n(62))
    }
  }

  function le(s, o) {
    if (s.indexOf("-") === -1) return typeof o.is == "string";
    switch (s) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0
    }
  }
  var Pe = null;

  function Te(s) {
    return s = s.target || s.srcElement || window, s.correspondingUseElement && (s = s.correspondingUseElement), s.nodeType === 3 ? s.parentNode : s
  }
  var Se = null,
    Re = null,
    Ce = null;

  function tt(s) {
    if (s = Zo(s)) {
      if (typeof Se != "function") throw Error(n(280));
      var o = s.stateNode;
      o && (o = W0(o), Se(s.stateNode, s.type, o))
    }
  }

  function ct(s) {
    Re ? Ce ? Ce.push(s) : Ce = [s] : Re = s
  }

  function rn() {
    if (Re) {
      var s = Re,
        o = Ce;
      if (Ce = Re = null, tt(s), o)
        for (s = 0; s < o.length; s++) tt(o[s])
    }
  }

  function nt(s, o) {
    return s(o)
  }

  function Cr() {}
  var En = !1;

  function P1(s, o, u) {
    if (En) return s(o, u);
    En = !0;
    try {
      return nt(s, o, u)
    } finally {
      En = !1, (Re !== null || Ce !== null) && (Cr(), rn())
    }
  }

  function R1(s, o) {
    var u = s.stateNode;
    if (u === null) return null;
    var f = W0(u);
    if (f === null) return null;
    u = f[o];
    e: switch (o) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (f = !f.disabled) || (s = s.type, f = !(s === "button" || s === "input" || s === "select" || s === "textarea")), s = !f;
        break e;
      default:
        s = !1
    }
    if (s) return null;
    if (u && typeof u != "function") throw Error(n(231, o, typeof u));
    return u
  }
  var ve = !1;
  if (c) try {
    var ce = {};
    Object.defineProperty(ce, "passive", {
      get: function() {
        ve = !0
      }
    }), window.addEventListener("test", ce, ce), window.removeEventListener("test", ce, ce)
  } catch {
    ve = !1
  }

  function Ne(s, o, u, f, g, b, I, z, G) {
    var n1 = Array.prototype.slice.call(arguments, 3);
    try {
      o.apply(u, n1)
    } catch (_1) {
      this.onError(_1)
    }
  }
  var Vt = !1,
    sn = null,
    Ft = !1,
    kr = null,
    hn = {
      onError: function(s) {
        Vt = !0, sn = s
      }
    };

  function a2(s, o, u, f, g, b, I, z, G) {
    Vt = !1, sn = null, Ne.apply(hn, arguments)
  }

  function gi(s, o, u, f, g, b, I, z, G) {
    if (a2.apply(this, arguments), Vt) {
      if (Vt) {
        var n1 = sn;
        Vt = !1, sn = null
      } else throw Error(n(198));
      Ft || (Ft = !0, kr = n1)
    }
  }

  function Tn(s) {
    var o = s,
      u = s;
    if (s.alternate)
      for (; o.return;) o = o.return;
    else {
      s = o;
      do o = s, (o.flags & 4098) !== 0 && (u = o.return), s = o.return; while (s)
    }
    return o.tag === 3 ? u : null
  }

  function l2(s) {
    if (s.tag === 13) {
      var o = s.memoizedState;
      if (o === null && (s = s.alternate, s !== null && (o = s.memoizedState)), o !== null) return o.dehydrated
    }
    return null
  }

  function cr(s) {
    if (Tn(s) !== s) throw Error(n(188))
  }

  function yi(s) {
    var o = s.alternate;
    if (!o) {
      if (o = Tn(s), o === null) throw Error(n(188));
      return o !== s ? null : s
    }
    for (var u = s, f = o;;) {
      var g = u.return;
      if (g === null) break;
      var b = g.alternate;
      if (b === null) {
        if (f = g.return, f !== null) {
          u = f;
          continue
        }
        break
      }
      if (g.child === b.child) {
        for (b = g.child; b;) {
          if (b === u) return cr(g), s;
          if (b === f) return cr(g), o;
          b = b.sibling
        }
        throw Error(n(188))
      }
      if (u.return !== f.return) u = g, f = b;
      else {
        for (var I = !1, z = g.child; z;) {
          if (z === u) {
            I = !0, u = g, f = b;
            break
          }
          if (z === f) {
            I = !0, f = g, u = b;
            break
          }
          z = z.sibling
        }
        if (!I) {
          for (z = b.child; z;) {
            if (z === u) {
              I = !0, u = b, f = g;
              break
            }
            if (z === f) {
              I = !0, f = b, u = g;
              break
            }
            z = z.sibling
          }
          if (!I) throw Error(n(189))
        }
      }
      if (u.alternate !== f) throw Error(n(190))
    }
    if (u.tag !== 3) throw Error(n(188));
    return u.stateNode.current === u ? s : o
  }

  function F2(s) {
    return s = yi(s), s !== null ? vi(s) : null
  }

  function vi(s) {
    if (s.tag === 5 || s.tag === 6) return s;
    for (s = s.child; s !== null;) {
      var o = vi(s);
      if (o !== null) return o;
      s = s.sibling
    }
    return null
  }
  var wi = e.unstable_scheduleCallback,
    u3 = e.unstable_cancelCallback,
    c3 = e.unstable_shouldYield,
    Bo = e.unstable_requestPaint,
    Ze = e.unstable_now,
    hs = e.unstable_getCurrentPriorityLevel,
    B2 = e.unstable_ImmediatePriority,
    u2 = e.unstable_UserBlockingPriority,
    Xn = e.unstable_NormalPriority,
    $2 = e.unstable_LowPriority,
    bi = e.unstable_IdlePriority,
    z2 = null,
    Bn = null;

  function fs(s) {
    if (Bn && typeof Bn.onCommitFiberRoot == "function") try {
      Bn.onCommitFiberRoot(z2, s, void 0, (s.current.flags & 128) === 128)
    } catch {}
  }
  var Rt = Math.clz32 ? Math.clz32 : ps,
    _i = Math.log,
    d3 = Math.LN2;

  function ps(s) {
    return s >>>= 0, s === 0 ? 32 : 31 - (_i(s) / d3 | 0) | 0
  }
  var c2 = 64,
    U2 = 4194304;

  function Pr(s) {
    switch (s & -s) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return s & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return s & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return s
    }
  }

  function W2(s, o) {
    var u = s.pendingLanes;
    if (u === 0) return 0;
    var f = 0,
      g = s.suspendedLanes,
      b = s.pingedLanes,
      I = u & 268435455;
    if (I !== 0) {
      var z = I & ~g;
      z !== 0 ? f = Pr(z) : (b &= I, b !== 0 && (f = Pr(b)))
    } else I = u & ~g, I !== 0 ? f = Pr(I) : b !== 0 && (f = Pr(b));
    if (f === 0) return 0;
    if (o !== 0 && o !== f && (o & g) === 0 && (g = f & -f, b = o & -o, g >= b || g === 16 && (b & 4194240) !== 0)) return o;
    if ((f & 4) !== 0 && (f |= u & 16), o = s.entangledLanes, o !== 0)
      for (s = s.entanglements, o &= f; 0 < o;) u = 31 - Rt(o), g = 1 << u, f |= s[u], o &= ~g;
    return f
  }

  function $o(s, o) {
    switch (s) {
      case 1:
      case 2:
      case 4:
        return o + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return o + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1
    }
  }

  function Ar(s, o) {
    for (var u = s.suspendedLanes, f = s.pingedLanes, g = s.expirationTimes, b = s.pendingLanes; 0 < b;) {
      var I = 31 - Rt(b),
        z = 1 << I,
        G = g[I];
      G === -1 ? ((z & u) === 0 || (z & f) !== 0) && (g[I] = $o(z, o)) : G <= o && (s.expiredLanes |= z), b &= ~z
    }
  }

  function Cn(s) {
    return s = s.pendingLanes & -1073741825, s !== 0 ? s : s & 1073741824 ? 1073741824 : 0
  }

  function Ir() {
    var s = c2;
    return c2 <<= 1, (c2 & 4194240) === 0 && (c2 = 64), s
  }

  function d2(s) {
    for (var o = [], u = 0; 31 > u; u++) o.push(s);
    return o
  }

  function Ye(s, o, u) {
    s.pendingLanes |= o, o !== 536870912 && (s.suspendedLanes = 0, s.pingedLanes = 0), s = s.eventTimes, o = 31 - Rt(o), s[o] = u
  }

  function Be(s, o) {
    var u = s.pendingLanes & ~o;
    s.pendingLanes = o, s.suspendedLanes = 0, s.pingedLanes = 0, s.expiredLanes &= o, s.mutableReadLanes &= o, s.entangledLanes &= o, o = s.entanglements;
    var f = s.eventTimes;
    for (s = s.expirationTimes; 0 < u;) {
      var g = 31 - Rt(u),
        b = 1 << g;
      o[g] = 0, f[g] = -1, s[g] = -1, u &= ~b
    }
  }

  function Kr(s, o) {
    var u = s.entangledLanes |= o;
    for (s = s.entanglements; u;) {
      var f = 31 - Rt(u),
        g = 1 << f;
      g & o | s[f] & o && (s[f] |= o), u &= ~g
    }
  }
  var fe = 0;

  function Qr(s) {
    return s &= -s, 1 < s ? 4 < s ? (s & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
  }
  var $n, fn, zn, ms, gs, h3 = !1,
    Rr = [],
    Qt = null,
    dr = null,
    hr = null,
    h2 = new Map,
    Jn = new Map,
    Un = [],
    ys = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

  function T(s, o) {
    switch (s) {
      case "focusin":
      case "focusout":
        Qt = null;
        break;
      case "dragenter":
      case "dragleave":
        dr = null;
        break;
      case "mouseover":
      case "mouseout":
        hr = null;
        break;
      case "pointerover":
      case "pointerout":
        h2.delete(o.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Jn.delete(o.pointerId)
    }
  }

  function S(s, o, u, f, g, b) {
    return s === null || s.nativeEvent !== b ? (s = {
      blockedOn: o,
      domEventName: u,
      eventSystemFlags: f,
      nativeEvent: b,
      targetContainers: [g]
    }, o !== null && (o = Zo(o), o !== null && fn(o)), s) : (s.eventSystemFlags |= f, o = s.targetContainers, g !== null && o.indexOf(g) === -1 && o.push(g), s)
  }

  function F(s, o, u, f, g) {
    switch (o) {
      case "focusin":
        return Qt = S(Qt, s, o, u, f, g), !0;
      case "dragenter":
        return dr = S(dr, s, o, u, f, g), !0;
      case "mouseover":
        return hr = S(hr, s, o, u, f, g), !0;
      case "pointerover":
        var b = g.pointerId;
        return h2.set(b, S(h2.get(b) || null, s, o, u, f, g)), !0;
      case "gotpointercapture":
        return b = g.pointerId, Jn.set(b, S(Jn.get(b) || null, s, o, u, f, g)), !0
    }
    return !1
  }

  function B(s) {
    var o = m3(s.target);
    if (o !== null) {
      var u = Tn(o);
      if (u !== null) {
        if (o = u.tag, o === 13) {
          if (o = l2(u), o !== null) {
            s.blockedOn = o, gs(s.priority, function() {
              zn(u)
            });
            return
          }
        } else if (o === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          s.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return
        }
      }
    }
    s.blockedOn = null
  }

  function Q(s) {
    if (s.blockedOn !== null) return !1;
    for (var o = s.targetContainers; 0 < o.length;) {
      var u = rt(s.domEventName, s.eventSystemFlags, o[0], s.nativeEvent);
      if (u === null) {
        u = s.nativeEvent;
        var f = new u.constructor(u.type, u);
        Pe = f, u.target.dispatchEvent(f), Pe = null
      } else return o = Zo(u), o !== null && fn(o), s.blockedOn = u, !1;
      o.shift()
    }
    return !0
  }

  function r1(s, o, u) {
    Q(s) && u.delete(o)
  }

  function x1() {
    h3 = !1, Qt !== null && Q(Qt) && (Qt = null), dr !== null && Q(dr) && (dr = null), hr !== null && Q(hr) && (hr = null), h2.forEach(r1), Jn.forEach(r1)
  }

  function l1(s, o) {
    s.blockedOn === o && (s.blockedOn = null, h3 || (h3 = !0, e.unstable_scheduleCallback(e.unstable_NormalPriority, x1)))
  }

  function N1(s) {
    function o(g) {
      return l1(g, s)
    }
    if (0 < Rr.length) {
      l1(Rr[0], s);
      for (var u = 1; u < Rr.length; u++) {
        var f = Rr[u];
        f.blockedOn === s && (f.blockedOn = null)
      }
    }
    for (Qt !== null && l1(Qt, s), dr !== null && l1(dr, s), hr !== null && l1(hr, s), h2.forEach(o), Jn.forEach(o), u = 0; u < Un.length; u++) f = Un[u], f.blockedOn === s && (f.blockedOn = null);
    for (; 0 < Un.length && (u = Un[0], u.blockedOn === null);) B(u), u.blockedOn === null && Un.shift()
  }
  var O1 = H.ReactCurrentBatchConfig,
    q1 = !0;

  function Y1(s, o, u, f) {
    var g = fe,
      b = O1.transition;
    O1.transition = null;
    try {
      fe = 1, Yt(s, o, u, f)
    } finally {
      fe = g, O1.transition = b
    }
  }

  function $e(s, o, u, f) {
    var g = fe,
      b = O1.transition;
    O1.transition = null;
    try {
      fe = 4, Yt(s, o, u, f)
    } finally {
      fe = g, O1.transition = b
    }
  }

  function Yt(s, o, u, f) {
    if (q1) {
      var g = rt(s, o, u, f);
      if (g === null) Hc(s, o, f, Xe, u), T(s, f);
      else if (F(g, s, o, u, f)) f.stopPropagation();
      else if (T(s, f), o & 4 && -1 < ys.indexOf(s)) {
        for (; g !== null;) {
          var b = Zo(g);
          if (b !== null && $n(b), b = rt(s, o, u, f), b === null && Hc(s, o, f, Xe, u), b === g) break;
          g = b
        }
        g !== null && f.stopPropagation()
      } else Hc(s, o, f, null, u)
    }
  }
  var Xe = null;

  function rt(s, o, u, f) {
    if (Xe = null, s = Te(f), s = m3(s), s !== null)
      if (o = Tn(s), o === null) s = null;
      else if (u = o.tag, u === 13) {
      if (s = l2(o), s !== null) return s;
      s = null
    } else if (u === 3) {
      if (o.stateNode.current.memoizedState.isDehydrated) return o.tag === 3 ? o.stateNode.containerInfo : null;
      s = null
    } else o !== s && (s = null);
    return Xe = s, null
  }

  function pn(s) {
    switch (s) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":