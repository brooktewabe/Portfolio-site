  Zg;

function FD() {
  return Zg || (Zg = 1, (() => {
    var t = {
        296: (i, a, l) => {
          var c = /^\s+|\s+$/g,
            h = /^[-+]0x[0-9a-f]+$/i,
            p = /^0b[01]+$/i,
            m = /^0o[0-7]+$/i,
            y = parseInt,
            v = typeof l.g == "object" && l.g && l.g.Object === Object && l.g,
            C = typeof self == "object" && self && self.Object === Object && self,
            P = v || C || Function("return this")(),
            k = Object.prototype.toString,
            R = Math.max,
            W = Math.min,
            q = function() {
              return P.Date.now()
            };

          function U($) {
            var X = typeof $;
            return !!$ && (X == "object" || X == "function")
          }

          function H($) {
            if (typeof $ == "number") return $;
            if (function(A) {
                return typeof A == "symbol" || function(j) {
                  return !!j && typeof j == "object"
                }(A) && k.call(A) == "[object Symbol]"
              }($)) return NaN;
            if (U($)) {
              var X = typeof $.valueOf == "function" ? $.valueOf() : $;
              $ = U(X) ? X + "" : X
            }
            if (typeof $ != "string") return $ === 0 ? $ : +$;
            $ = $.replace(c, "");
            var D = p.test($);
            return D || m.test($) ? y($.slice(2), D ? 2 : 8) : h.test($) ? NaN : +$
          }
          i.exports = function($, X, D) {
            var A, j, x, N, V, L, h1 = 0,
              A1 = !1,
              V1 = !1,
              k1 = !0;
            if (typeof $ != "function") throw new TypeError("Expected a function");

            function c1(E1) {
              var M1 = A,
                F1 = j;
              return A = j = void 0, h1 = E1, N = $.apply(F1, M1)
            }

            function y1(E1) {
              var M1 = E1 - L;
              return L === void 0 || M1 >= X || M1 < 0 || V1 && E1 - h1 >= x
            }

            function f1() {
              var E1 = q();
              if (y1(E1)) return K(E1);
              V = setTimeout(f1, function(M1) {
                var F1 = X - (M1 - L);
                return V1 ? W(F1, x - (M1 - h1)) : F1
              }(E1))
            }

            function K(E1) {
              return V = void 0, k1 && A ? c1(E1) : (A = j = void 0, N)
            }

            function s1() {
              var E1 = q(),
                M1 = y1(E1);
              if (A = arguments, j = this, L = E1, M1) {
                if (V === void 0) return function(F1) {
                  return h1 = F1, V = setTimeout(f1, X), A1 ? c1(F1) : N
                }(L);
                if (V1) return V = setTimeout(f1, X), c1(L)
              }
              return V === void 0 && (V = setTimeout(f1, X)), N
            }
            return X = H(X) || 0, U(D) && (A1 = !!D.leading, x = (V1 = "maxWait" in D) ? R(H(D.maxWait) || 0, X) : x, k1 = "trailing" in D ? !!D.trailing : k1), s1.cancel = function() {
              V !== void 0 && clearTimeout(V), h1 = 0, A = L = j = V = void 0
            }, s1.flush = function() {
              return V === void 0 ? N : K(q())
            }, s1
          }
        },
        96: (i, a, l) => {
          var c = "Expected a function",
            h = NaN,
            p = "[object Symbol]",
            m = /^\s+|\s+$/g,
            y = /^[-+]0x[0-9a-f]+$/i,
            v = /^0b[01]+$/i,
            C = /^0o[0-7]+$/i,
            P = parseInt,
            k = typeof l.g == "object" && l.g && l.g.Object === Object && l.g,
            R = typeof self == "object" && self && self.Object === Object && self,
            W = k || R || Function("return this")(),
            q = Object.prototype.toString,
            U = Math.max,
            H = Math.min,
            $ = function() {
              return W.Date.now()
            };

          function X(A) {
            var j = typeof A;
            return !!A && (j == "object" || j == "function")
          }

          function D(A) {
            if (typeof A == "number") return A;
            if (function(N) {
                return typeof N == "symbol" || function(V) {
                  return !!V && typeof V == "object"
                }(N) && q.call(N) == p
              }(A)) return h;
            if (X(A)) {
              var j = typeof A.valueOf == "function" ? A.valueOf() : A;
              A = X(j) ? j + "" : j
            }
            if (typeof A != "string") return A === 0 ? A : +A;
            A = A.replace(m, "");
            var x = v.test(A);
            return x || C.test(A) ? P(A.slice(2), x ? 2 : 8) : y.test(A) ? h : +A
          }
          i.exports = function(A, j, x) {
            var N = !0,
              V = !0;
            if (typeof A != "function") throw new TypeError(c);
            return X(x) && (N = "leading" in x ? !!x.leading : N, V = "trailing" in x ? !!x.trailing : V),
              function(L, h1, A1) {
                var V1, k1, c1, y1, f1, K, s1 = 0,
                  E1 = !1,
                  M1 = !1,
                  F1 = !0;
                if (typeof L != "function") throw new TypeError(c);

                function $1(he) {
                  var be = V1,
                    J1 = k1;
                  return V1 = k1 = void 0, s1 = he, y1 = L.apply(J1, be)
                }

                function K1(he) {
                  var be = he - K;
                  return K === void 0 || be >= h1 || be < 0 || M1 && he - s1 >= c1
                }

                function B1() {
                  var he = $();
                  if (K1(he)) return ee(he);
                  f1 = setTimeout(B1, function(be) {
                    var J1 = h1 - (be - K);
                    return M1 ? H(J1, c1 - (be - s1)) : J1
                  }(he))
                }

                function ee(he) {
                  return f1 = void 0, F1 && V1 ? $1(he) : (V1 = k1 = void 0, y1)
                }

                function me() {
                  var he = $(),
                    be = K1(he);
                  if (V1 = arguments, k1 = this, K = he, be) {
                    if (f1 === void 0) return function(J1) {
                      return s1 = J1, f1 = setTimeout(B1, h1), E1 ? $1(J1) : y1
                    }(K);
                    if (M1) return f1 = setTimeout(B1, h1), $1(K)
                  }
                  return f1 === void 0 && (f1 = setTimeout(B1, h1)), y1
                }
                return h1 = D(h1) || 0, X(A1) && (E1 = !!A1.leading, c1 = (M1 = "maxWait" in A1) ? U(D(A1.maxWait) || 0, h1) : c1, F1 = "trailing" in A1 ? !!A1.trailing : F1), me.cancel = function() {
                  f1 !== void 0 && clearTimeout(f1), s1 = 0, V1 = K = k1 = f1 = void 0
                }, me.flush = function() {
                  return f1 === void 0 ? y1 : ee($())
                }, me
              }(A, j, {
                leading: N,
                maxWait: j,
                trailing: V
              })
          }
        },
        703: (i, a, l) => {
          var c = l(414);

          function h() {}

          function p() {}
          p.resetWarningCache = h, i.exports = function() {
            function m(C, P, k, R, W, q) {
              if (q !== c) {
                var U = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw U.name = "Invariant Violation", U
              }
            }

            function y() {
              return m
            }
            m.isRequired = m;
            var v = {
              array: m,
              bigint: m,
              bool: m,
              func: m,
              number: m,
              object: m,
              string: m,
              symbol: m,
              any: m,
              arrayOf: y,
              element: m,
              elementType: m,
              instanceOf: y,
              node: m,
              objectOf: y,
              oneOf: y,
              oneOfType: y,
              shape: y,
              exact: y,
              checkPropTypes: p,
              resetWarningCache: h
            };
            return v.PropTypes = v, v
          }
        },
        697: (i, a, l) => {
          i.exports = l(703)()
        },
        414: i => {
          i.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        }
      },
      e = {};

    function n(i) {
      var a = e[i];
      if (a !== void 0) return a.exports;
      var l = e[i] = {
        exports: {}
      };
      return t[i](l, l.exports, n), l.exports
    }
    n.n = i => {
      var a = i && i.__esModule ? () => i.default : () => i;
      return n.d(a, {
        a
      }), a
    }, n.d = (i, a) => {
      for (var l in a) n.o(a, l) && !n.o(i, l) && Object.defineProperty(i, l, {
        enumerable: !0,
        get: a[l]
      })
    }, n.g = function() {
      if (typeof globalThis == "object") return globalThis;
      try {
        return this || new Function("return this")()
      } catch {
        if (typeof window == "object") return window
      }
    }(), n.o = (i, a) => Object.prototype.hasOwnProperty.call(i, a), n.r = i => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(i, "__esModule", {
        value: !0
      })
    };
    var r = {};
    (() => {
      n.r(r), n.d(r, {
        LazyLoadComponent: () => be,
        LazyLoadImage: () => wt,
        trackWindowScroll: () => y1
      });
      const i = Yu();
      var a = n.n(i),
        l = n(697);

      function c() {
        return typeof window < "u" && "IntersectionObserver" in window && "isIntersecting" in window.IntersectionObserverEntry.prototype
      }

      function h(v1) {
        return h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(J) {
          return typeof J
        } : function(J) {
          return J && typeof Symbol == "function" && J.constructor === Symbol && J !== Symbol.prototype ? "symbol" : typeof J
        }, h(v1)
      }

      function p(v1, J) {
        var p1 = Object.keys(v1);
        if (Object.getOwnPropertySymbols) {
          var w1 = Object.getOwnPropertySymbols(v1);
          J && (w1 = w1.filter(function(se) {
            return Object.getOwnPropertyDescriptor(v1, se).enumerable
          })), p1.push.apply(p1, w1)
        }
        return p1
      }

      function m(v1, J, p1) {
        return (J = v(J)) in v1 ? Object.defineProperty(v1, J, {
          value: p1,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : v1[J] = p1, v1
      }

      function y(v1, J) {
        for (var p1 = 0; p1 < J.length; p1++) {
          var w1 = J[p1];
          w1.enumerable = w1.enumerable || !1, w1.configurable = !0, "value" in w1 && (w1.writable = !0), Object.defineProperty(v1, v(w1.key), w1)
        }
      }

      function v(v1) {
        var J = function(p1, w1) {
          if (h(p1) !== "object" || p1 === null) return p1;
          var se = p1[Symbol.toPrimitive];
          if (se !== void 0) {
            var oe = se.call(p1, "string");
            if (h(oe) !== "object") return oe;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(p1)
        }(v1);
        return h(J) === "symbol" ? J : String(J)
      }

      function C(v1, J) {
        return C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p1, w1) {
          return p1.__proto__ = w1, p1
        }, C(v1, J)
      }

      function P(v1) {
        return P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(J) {
          return J.__proto__ || Object.getPrototypeOf(J)
        }, P(v1)
      }
      var k = function(v1) {
          v1.forEach(function(J) {
            J.isIntersecting && J.target.onVisible()
          })
        },
        R = {},
        W = function(v1) {
          (function(i1, d1) {
            if (typeof d1 != "function" && d1 !== null) throw new TypeError("Super expression must either be null or a function");
            i1.prototype = Object.create(d1 && d1.prototype, {
              constructor: {
                value: i1,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(i1, "prototype", {
              writable: !1
            }), d1 && C(i1, d1)
          })(ye, v1);
          var J, p1, w1, se, oe = (w1 = ye, se = function() {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
            if (typeof Proxy == "function") return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch {
              return !1
            }
          }(), function() {
            var i1, d1 = P(w1);
            if (se) {
              var j1 = P(this).constructor;
              i1 = Reflect.construct(d1, arguments, j1)
            } else i1 = d1.apply(this, arguments);
            return function(L1, D1) {
              if (D1 && (h(D1) === "object" || typeof D1 == "function")) return D1;
              if (D1 !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
              return function(le) {
                if (le === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return le
              }(L1)
            }(this, i1)
          });

          function ye(i1) {
            var d1;
            if (function(L1, D1) {
                if (!(L1 instanceof D1)) throw new TypeError("Cannot call a class as a function")
              }(this, ye), (d1 = oe.call(this, i1)).supportsObserver = !i1.scrollPosition && i1.useIntersectionObserver && c(), d1.supportsObserver) {
              var j1 = i1.threshold;
              d1.observer = function(L1) {
                return R[L1] = R[L1] || new IntersectionObserver(k, {
                  rootMargin: L1 + "px"
                }), R[L1]
              }(j1)
            }
            return d1
          }
          return J = ye, p1 = [{
            key: "componentDidMount",
            value: function() {
              this.placeholder && this.observer && (this.placeholder.onVisible = this.props.onVisible, this.observer.observe(this.placeholder)), this.supportsObserver || this.updateVisibility()
            }
          }, {
            key: "componentWillUnmount",
            value: function() {
              this.observer && this.placeholder && this.observer.unobserve(this.placeholder)
            }
          }, {
            key: "componentDidUpdate",
            value: function() {
              this.supportsObserver || this.updateVisibility()
            }
          }, {
            key: "getPlaceholderBoundingBox",
            value: function() {
              var i1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props.scrollPosition,
                d1 = this.placeholder.getBoundingClientRect(),
                j1 = this.placeholder.style,
                L1 = parseInt(j1.getPropertyValue("margin-left"), 10) || 0,
                D1 = parseInt(j1.getPropertyValue("margin-top"), 10) || 0;
              return {
                bottom: i1.y + d1.bottom + D1,
                left: i1.x + d1.left + L1,
                right: i1.x + d1.right + L1,
                top: i1.y + d1.top + D1
              }
            }
          }, {
            key: "isPlaceholderInViewport",
            value: function() {
              if (typeof window > "u" || !this.placeholder) return !1;
              var i1 = this.props,
                d1 = i1.scrollPosition,
                j1 = i1.threshold,
                L1 = this.getPlaceholderBoundingBox(d1),
                D1 = d1.y + window.innerHeight,
                le = d1.x,
                Pe = d1.x + window.innerWidth,
                Te = d1.y;
              return Te - j1 <= L1.bottom && D1 + j1 >= L1.top && le - j1 <= L1.right && Pe + j1 >= L1.left
            }
          }, {
            key: "updateVisibility",
            value: function() {
              this.isPlaceholderInViewport() && this.props.onVisible()
            }
          }, {
            key: "render",
            value: function() {
              var i1 = this,
                d1 = this.props,
                j1 = d1.className,
                L1 = d1.height,
                D1 = d1.placeholder,
                le = d1.style,
                Pe = d1.width;
              if (D1 && typeof D1.type != "function") return a().cloneElement(D1, {
                ref: function(Se) {
                  return i1.placeholder = Se
                }
              });
              var Te = function(Se) {
                for (var Re = 1; Re < arguments.length; Re++) {
                  var Ce = arguments[Re] != null ? arguments[Re] : {};
                  Re % 2 ? p(Object(Ce), !0).forEach(function(tt) {
                    m(Se, tt, Ce[tt])
                  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Se, Object.getOwnPropertyDescriptors(Ce)) : p(Object(Ce)).forEach(function(tt) {
                    Object.defineProperty(Se, tt, Object.getOwnPropertyDescriptor(Ce, tt))
                  })
                }
                return Se
              }({
                display: "inline-block"
              }, le);
              return Pe !== void 0 && (Te.width = Pe), L1 !== void 0 && (Te.height = L1), a().createElement("span", {
                className: j1,
                ref: function(Se) {
                  return i1.placeholder = Se
                },
                style: Te
              }, D1)
            }
          }], p1 && y(J.prototype, p1), Object.defineProperty(J, "prototype", {
            writable: !1
          }), ye
        }(a().Component);
      W.propTypes = {
        onVisible: l.PropTypes.func.isRequired,
        className: l.PropTypes.string,
        height: l.PropTypes.oneOfType([l.PropTypes.number, l.PropTypes.string]),
        placeholder: l.PropTypes.element,
        threshold: l.PropTypes.number,
        useIntersectionObserver: l.PropTypes.bool,
        scrollPosition: l.PropTypes.shape({
          x: l.PropTypes.number.isRequired,
          y: l.PropTypes.number.isRequired
        }),
        width: l.PropTypes.oneOfType([l.PropTypes.number, l.PropTypes.string])
      }, W.defaultProps = {
        className: "",
        placeholder: null,
        threshold: 100,
        useIntersectionObserver: !0
      };
      const q = W;
      var U = n(296),
        H = n.n(U),
        $ = n(96),
        X = n.n($),
        D = function(v1) {
          var J = getComputedStyle(v1, null);
          return J.getPropertyValue("overflow") + J.getPropertyValue("overflow-y") + J.getPropertyValue("overflow-x")
        };
      const A = function(v1) {
        if (!(v1 instanceof HTMLElement)) return window;
        for (var J = v1; J && J instanceof HTMLElement;) {
          if (/(scroll|auto)/.test(D(J))) return J;
          J = J.parentNode
        }
        return window
      };

      function j(v1) {
        return j = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(J) {
          return typeof J
        } : function(J) {
          return J && typeof Symbol == "function" && J.constructor === Symbol && J !== Symbol.prototype ? "symbol" : typeof J
        }, j(v1)
      }
      var x = ["delayMethod", "delayTime"];

      function N() {
        return N = Object.assign ? Object.assign.bind() : function(v1) {
          for (var J = 1; J < arguments.length; J++) {
            var p1 = arguments[J];
            for (var w1 in p1) Object.prototype.hasOwnProperty.call(p1, w1) && (v1[w1] = p1[w1])
          }
          return v1
        }, N.apply(this, arguments)
      }

      function V(v1, J) {
        for (var p1 = 0; p1 < J.length; p1++) {
          var w1 = J[p1];
          w1.enumerable = w1.enumerable || !1, w1.configurable = !0, "value" in w1 && (w1.writable = !0), Object.defineProperty(v1, (se = function(oe, ye) {
            if (j(oe) !== "object" || oe === null) return oe;
            var i1 = oe[Symbol.toPrimitive];
            if (i1 !== void 0) {
              var d1 = i1.call(oe, "string");
              if (j(d1) !== "object") return d1;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(oe)
          }(w1.key), j(se) === "symbol" ? se : String(se)), w1)
        }
        var se
      }

      function L(v1, J) {
        return L = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p1, w1) {
          return p1.__proto__ = w1, p1
        }, L(v1, J)
      }

      function h1(v1, J) {
        if (J && (j(J) === "object" || typeof J == "function")) return J;
        if (J !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return A1(v1)
      }

      function A1(v1) {
        if (v1 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return v1
      }

      function V1(v1) {
        return V1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(J) {
          return J.__proto__ || Object.getPrototypeOf(J)
        }, V1(v1)
      }
      var k1 = function() {
          return typeof window > "u" ? 0 : window.scrollX || window.pageXOffset
        },
        c1 = function() {
          return typeof window > "u" ? 0 : window.scrollY || window.pageYOffset
        };
      const y1 = function(v1) {
        var J = function(p1) {
          (function(j1, L1) {
            if (typeof L1 != "function" && L1 !== null) throw new TypeError("Super expression must either be null or a function");
            j1.prototype = Object.create(L1 && L1.prototype, {
              constructor: {
                value: j1,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(j1, "prototype", {
              writable: !1
            }), L1 && L(j1, L1)
          })(d1, p1);
          var w1, se, oe, ye, i1 = (oe = d1, ye = function() {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
            if (typeof Proxy == "function") return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch {
              return !1
            }
          }(), function() {
            var j1, L1 = V1(oe);
            if (ye) {
              var D1 = V1(this).constructor;
              j1 = Reflect.construct(L1, arguments, D1)
            } else j1 = L1.apply(this, arguments);
            return h1(this, j1)
          });

          function d1(j1) {
            var L1;
            if (function(le, Pe) {
                if (!(le instanceof Pe)) throw new TypeError("Cannot call a class as a function")
              }(this, d1), (L1 = i1.call(this, j1)).useIntersectionObserver = j1.useIntersectionObserver && c(), L1.useIntersectionObserver) return h1(L1);
            var D1 = L1.onChangeScroll.bind(A1(L1));
            return j1.delayMethod === "debounce" ? L1.delayedScroll = H()(D1, j1.delayTime) : j1.delayMethod === "throttle" && (L1.delayedScroll = X()(D1, j1.delayTime)), L1.state = {
              scrollPosition: {
                x: k1(),
                y: c1()
              }
            }, L1.baseComponentRef = a().createRef(), L1
          }
          return w1 = d1, (se = [{
            key: "componentDidMount",
            value: function() {
              this.addListeners()
            }
          }, {
            key: "componentWillUnmount",
            value: function() {
              this.removeListeners()
            }
          }, {
            key: "componentDidUpdate",
            value: function() {
              typeof window > "u" || this.useIntersectionObserver || A(this.baseComponentRef.current) !== this.scrollElement && (this.removeListeners(), this.addListeners())
            }
          }, {
            key: "addListeners",
            value: function() {
              typeof window > "u" || this.useIntersectionObserver || (this.scrollElement = A(this.baseComponentRef.current), this.scrollElement.addEventListener("scroll", this.delayedScroll, {
                passive: !0
              }), window.addEventListener("resize", this.delayedScroll, {
                passive: !0
              }), this.scrollElement !== window && window.addEventListener("scroll", this.delayedScroll, {
                passive: !0
              }))
            }
          }, {
            key: "removeListeners",
            value: function() {
              typeof window > "u" || this.useIntersectionObserver || (this.scrollElement.removeEventListener("scroll", this.delayedScroll), window.removeEventListener("resize", this.delayedScroll), this.scrollElement !== window && window.removeEventListener("scroll", this.delayedScroll))
            }
          }, {
            key: "onChangeScroll",
            value: function() {
              this.useIntersectionObserver || this.setState({
                scrollPosition: {
                  x: k1(),
                  y: c1()
                }
              })
            }
          }, {
            key: "render",
            value: function() {
              var j1 = this.props,
                L1 = (j1.delayMethod, j1.delayTime, function(le, Pe) {
                  if (le == null) return {};
                  var Te, Se, Re = function(tt, ct) {
                    if (tt == null) return {};
                    var rn, nt, Cr = {},
                      En = Object.keys(tt);
                    for (nt = 0; nt < En.length; nt++) rn = En[nt], ct.indexOf(rn) >= 0 || (Cr[rn] = tt[rn]);
                    return Cr
                  }(le, Pe);
                  if (Object.getOwnPropertySymbols) {
                    var Ce = Object.getOwnPropertySymbols(le);
                    for (Se = 0; Se < Ce.length; Se++) Te = Ce[Se], Pe.indexOf(Te) >= 0 || Object.prototype.propertyIsEnumerable.call(le, Te) && (Re[Te] = le[Te])
                  }
                  return Re
                }(j1, x)),
                D1 = this.useIntersectionObserver ? null : this.state.scrollPosition;
              return a().createElement(v1, N({
                forwardRef: this.baseComponentRef,
                scrollPosition: D1
              }, L1))
            }
          }]) && V(w1.prototype, se), Object.defineProperty(w1, "prototype", {
            writable: !1
          }), d1
        }(a().Component);
        return J.propTypes = {
          delayMethod: l.PropTypes.oneOf(["debounce", "throttle"]),
          delayTime: l.PropTypes.number,
          useIntersectionObserver: l.PropTypes.bool
        }, J.defaultProps = {
          delayMethod: "throttle",
          delayTime: 300,
          useIntersectionObserver: !0
        }, J
      };

      function f1(v1) {
        return f1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(J) {
          return typeof J
        } : function(J) {
          return J && typeof Symbol == "function" && J.constructor === Symbol && J !== Symbol.prototype ? "symbol" : typeof J
        }, f1(v1)
      }

      function K(v1, J) {
        for (var p1 = 0; p1 < J.length; p1++) {
          var w1 = J[p1];
          w1.enumerable = w1.enumerable || !1, w1.configurable = !0, "value" in w1 && (w1.writable = !0), Object.defineProperty(v1, (se = function(oe, ye) {
            if (f1(oe) !== "object" || oe === null) return oe;
            var i1 = oe[Symbol.toPrimitive];
            if (i1 !== void 0) {
              var d1 = i1.call(oe, "string");
              if (f1(d1) !== "object") return d1;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(oe)
          }(w1.key), f1(se) === "symbol" ? se : String(se)), w1)
        }
        var se
      }

      function s1(v1, J) {
        return s1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p1, w1) {
          return p1.__proto__ = w1, p1
        }, s1(v1, J)
      }

      function E1(v1) {
        return E1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(J) {
          return J.__proto__ || Object.getPrototypeOf(J)
        }, E1(v1)
      }
      var M1 = function(v1) {
        (function(i1, d1) {
          if (typeof d1 != "function" && d1 !== null) throw new TypeError("Super expression must either be null or a function");
          i1.prototype = Object.create(d1 && d1.prototype, {
            constructor: {
              value: i1,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(i1, "prototype", {
            writable: !1
          }), d1 && s1(i1, d1)
        })(ye, v1);
        var J, p1, w1, se, oe = (w1 = ye, se = function() {
          if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
          if (typeof Proxy == "function") return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
          } catch {
            return !1
          }
        }(), function() {
          var i1, d1 = E1(w1);
          if (se) {
            var j1 = E1(this).constructor;
            i1 = Reflect.construct(d1, arguments, j1)
          } else i1 = d1.apply(this, arguments);
          return function(L1, D1) {
            if (D1 && (f1(D1) === "object" || typeof D1 == "function")) return D1;
            if (D1 !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
            return function(le) {
              if (le === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return le
            }(L1)
          }(this, i1)
        });

        function ye(i1) {
          return function(d1, j1) {
            if (!(d1 instanceof j1)) throw new TypeError("Cannot call a class as a function")
          }(this, ye), oe.call(this, i1)
        }
        return J = ye, (p1 = [{
          key: "render",
          value: function() {
            return a().createElement(q, this.props)
          }
        }]) && K(J.prototype, p1), Object.defineProperty(J, "prototype", {
          writable: !1
        }), ye
      }(a().Component);
      const F1 = y1(M1);

      function $1(v1) {
        return $1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(J) {
          return typeof J
        } : function(J) {
          return J && typeof Symbol == "function" && J.constructor === Symbol && J !== Symbol.prototype ? "symbol" : typeof J
        }, $1(v1)
      }

      function K1(v1, J) {
        for (var p1 = 0; p1 < J.length; p1++) {
          var w1 = J[p1];
          w1.enumerable = w1.enumerable || !1, w1.configurable = !0, "value" in w1 && (w1.writable = !0), Object.defineProperty(v1, (se = function(oe, ye) {
            if ($1(oe) !== "object" || oe === null) return oe;
            var i1 = oe[Symbol.toPrimitive];
            if (i1 !== void 0) {
              var d1 = i1.call(oe, "string");
              if ($1(d1) !== "object") return d1;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(oe)
          }(w1.key), $1(se) === "symbol" ? se : String(se)), w1)
        }
        var se
      }

      function B1(v1, J) {
        return B1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p1, w1) {
          return p1.__proto__ = w1, p1
        }, B1(v1, J)
      }

      function ee(v1) {
        if (v1 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return v1
      }

      function me(v1) {
        return me = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(J) {
          return J.__proto__ || Object.getPrototypeOf(J)
        }, me(v1)
      }
      var he = function(v1) {
        (function(i1, d1) {
          if (typeof d1 != "function" && d1 !== null) throw new TypeError("Super expression must either be null or a function");
          i1.prototype = Object.create(d1 && d1.prototype, {
            constructor: {
              value: i1,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(i1, "prototype", {
            writable: !1
          }), d1 && B1(i1, d1)
        })(ye, v1);
        var J, p1, w1, se, oe = (w1 = ye, se = function() {
          if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
          if (typeof Proxy == "function") return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
          } catch {
            return !1
          }
        }(), function() {
          var i1, d1 = me(w1);
          if (se) {
            var j1 = me(this).constructor;
            i1 = Reflect.construct(d1, arguments, j1)
          } else i1 = d1.apply(this, arguments);
          return function(L1, D1) {
            if (D1 && ($1(D1) === "object" || typeof D1 == "function")) return D1;
            if (D1 !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
            return ee(L1)
          }(this, i1)
        });

        function ye(i1) {
          var d1;
          (function(Pe, Te) {
            if (!(Pe instanceof Te)) throw new TypeError("Cannot call a class as a function")
          })(this, ye), d1 = oe.call(this, i1);
          var j1 = i1.afterLoad,
            L1 = i1.beforeLoad,
            D1 = i1.scrollPosition,
            le = i1.visibleByDefault;
          return d1.state = {
            visible: le
          }, le && (L1(), j1()), d1.onVisible = d1.onVisible.bind(ee(d1)), d1.isScrollTracked = !!(D1 && Number.isFinite(D1.x) && D1.x >= 0 && Number.isFinite(D1.y) && D1.y >= 0), d1
        }
        return J = ye, (p1 = [{
          key: "componentDidUpdate",
          value: function(i1, d1) {
            d1.visible !== this.state.visible && this.props.afterLoad()
          }
        }, {
          key: "onVisible",
          value: function() {
            this.props.beforeLoad(), this.setState({
              visible: !0
            })
          }
        }, {
          key: "render",
          value: function() {
            if (this.state.visible) return this.props.children;
            var i1 = this.props,
              d1 = i1.className,
              j1 = i1.delayMethod,
              L1 = i1.delayTime,
              D1 = i1.height,
              le = i1.placeholder,
              Pe = i1.scrollPosition,
              Te = i1.style,
              Se = i1.threshold,
              Re = i1.useIntersectionObserver,
              Ce = i1.width;
            return this.isScrollTracked || Re && c() ? a().createElement(q, {
              className: d1,
              height: D1,
              onVisible: this.onVisible,
              placeholder: le,
              scrollPosition: Pe,
              style: Te,
              threshold: Se,
              useIntersectionObserver: Re,
              width: Ce
            }) : a().createElement(F1, {
              className: d1,
              delayMethod: j1,
              delayTime: L1,
              height: D1,
              onVisible: this.onVisible,
              placeholder: le,
              style: Te,
              threshold: Se,
              width: Ce
            })
          }
        }]) && K1(J.prototype, p1), Object.defineProperty(J, "prototype", {
          writable: !1
        }), ye
      }(a().Component);
      he.propTypes = {
        afterLoad: l.PropTypes.func,
        beforeLoad: l.PropTypes.func,
        useIntersectionObserver: l.PropTypes.bool,
        visibleByDefault: l.PropTypes.bool
      }, he.defaultProps = {
        afterLoad: function() {
          return {}
        },
        beforeLoad: function() {
          return {}
        },
        useIntersectionObserver: !0,
        visibleByDefault: !1
      };
      const be = he;

      function J1(v1) {
        return J1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(J) {
          return typeof J
        } : function(J) {
          return J && typeof Symbol == "function" && J.constructor === Symbol && J !== Symbol.prototype ? "symbol" : typeof J
        }, J1(v1)
      }
      var ie = ["afterLoad", "beforeLoad", "delayMethod", "delayTime", "effect", "placeholder", "placeholderSrc", "scrollPosition", "threshold", "useIntersectionObserver", "visibleByDefault", "wrapperClassName", "wrapperProps"];

      function Ie(v1, J) {
        var p1 = Object.keys(v1);
        if (Object.getOwnPropertySymbols) {
          var w1 = Object.getOwnPropertySymbols(v1);
          J && (w1 = w1.filter(function(se) {
            return Object.getOwnPropertyDescriptor(v1, se).enumerable
          })), p1.push.apply(p1, w1)
        }
        return p1
      }

      function He(v1) {
        for (var J = 1; J < arguments.length; J++) {
          var p1 = arguments[J] != null ? arguments[J] : {};
          J % 2 ? Ie(Object(p1), !0).forEach(function(w1) {
            qe(v1, w1, p1[w1])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v1, Object.getOwnPropertyDescriptors(p1)) : Ie(Object(p1)).forEach(function(w1) {
            Object.defineProperty(v1, w1, Object.getOwnPropertyDescriptor(p1, w1))
          })
        }
        return v1
      }

      function qe(v1, J, p1) {
        return (J = It(J)) in v1 ? Object.defineProperty(v1, J, {
          value: p1,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : v1[J] = p1, v1
      }

      function Qe() {
        return Qe = Object.assign ? Object.assign.bind() : function(v1) {
          for (var J = 1; J < arguments.length; J++) {
            var p1 = arguments[J];
            for (var w1 in p1) Object.prototype.hasOwnProperty.call(p1, w1) && (v1[w1] = p1[w1])
          }
          return v1
        }, Qe.apply(this, arguments)
      }

      function ot(v1, J) {
        for (var p1 = 0; p1 < J.length; p1++) {
          var w1 = J[p1];
          w1.enumerable = w1.enumerable || !1, w1.configurable = !0, "value" in w1 && (w1.writable = !0), Object.defineProperty(v1, It(w1.key), w1)
        }
      }

      function It(v1) {
        var J = function(p1, w1) {
          if (J1(p1) !== "object" || p1 === null) return p1;
          var se = p1[Symbol.toPrimitive];
          if (se !== void 0) {
            var oe = se.call(p1, "string");
            if (J1(oe) !== "object") return oe;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(p1)
        }(v1);
        return J1(J) === "symbol" ? J : String(J)
      }

      function _e(v1, J) {
        return _e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p1, w1) {
          return p1.__proto__ = w1, p1
        }, _e(v1, J)
      }

      function T1(v1) {
        return T1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(J) {
          return J.__proto__ || Object.getPrototypeOf(J)
        }, T1(v1)
      }
      var Fn = function(v1) {
        (function(i1, d1) {
          if (typeof d1 != "function" && d1 !== null) throw new TypeError("Super expression must either be null or a function");
          i1.prototype = Object.create(d1 && d1.prototype, {
            constructor: {
              value: i1,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(i1, "prototype", {
            writable: !1
          }), d1 && _e(i1, d1)
        })(ye, v1);
        var J, p1, w1, se, oe = (w1 = ye, se = function() {
          if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
          if (typeof Proxy == "function") return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
          } catch {
            return !1
          }
        }(), function() {
          var i1, d1 = T1(w1);
          if (se) {
            var j1 = T1(this).constructor;
            i1 = Reflect.construct(d1, arguments, j1)
          } else i1 = d1.apply(this, arguments);
          return function(L1, D1) {
            if (D1 && (J1(D1) === "object" || typeof D1 == "function")) return D1;
            if (D1 !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
            return function(le) {
              if (le === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return le
            }(L1)
          }(this, i1)
        });

        function ye(i1) {
          var d1;
          return function(j1, L1) {
            if (!(j1 instanceof L1)) throw new TypeError("Cannot call a class as a function")
          }(this, ye), (d1 = oe.call(this, i1)).state = {
            loaded: !1
          }, d1
        }
        return J = ye, (p1 = [{
          key: "onImageLoad",
          value: function() {
            var i1 = this;
            return this.state.loaded ? null : function(d1) {
              i1.props.onLoad(d1), i1.props.afterLoad(), i1.setState({
                loaded: !0
              })
            }
          }
        }, {
          key: "getImg",
          value: function() {
            var i1 = this.props,
              d1 = (i1.afterLoad, i1.beforeLoad, i1.delayMethod, i1.delayTime, i1.effect, i1.placeholder, i1.placeholderSrc, i1.scrollPosition, i1.threshold, i1.useIntersectionObserver, i1.visibleByDefault, i1.wrapperClassName, i1.wrapperProps, function(j1, L1) {
                if (j1 == null) return {};
                var D1, le, Pe = function(Se, Re) {
                  if (Se == null) return {};
                  var Ce, tt, ct = {},
                    rn = Object.keys(Se);
                  for (tt = 0; tt < rn.length; tt++) Ce = rn[tt], Re.indexOf(Ce) >= 0 || (ct[Ce] = Se[Ce]);
                  return ct
                }(j1, L1);
                if (Object.getOwnPropertySymbols) {
                  var Te = Object.getOwnPropertySymbols(j1);
                  for (le = 0; le < Te.length; le++) D1 = Te[le], L1.indexOf(D1) >= 0 || Object.prototype.propertyIsEnumerable.call(j1, D1) && (Pe[D1] = j1[D1])
                }
                return Pe
              }(i1, ie));
            return a().createElement("img", Qe({}, d1, {
              onLoad: this.onImageLoad()
            }))
          }
        }, {
          key: "getLazyLoadImage",
          value: function() {
            var i1 = this.props,
              d1 = i1.beforeLoad,
              j1 = i1.className,
              L1 = i1.delayMethod,
              D1 = i1.delayTime,
              le = i1.height,
              Pe = i1.placeholder,
              Te = i1.scrollPosition,
              Se = i1.style,
              Re = i1.threshold,
              Ce = i1.useIntersectionObserver,
              tt = i1.visibleByDefault,
              ct = i1.width;
            return a().createElement(be, {
              beforeLoad: d1,
              className: j1,
              delayMethod: L1,
              delayTime: D1,
              height: le,
              placeholder: Pe,
              scrollPosition: Te,
              style: Se,
              threshold: Re,
              useIntersectionObserver: Ce,
              visibleByDefault: tt,
              width: ct
            }, this.getImg())
          }
        }, {
          key: "getWrappedLazyLoadImage",
          value: function(i1) {
            var d1 = this.props,
              j1 = d1.effect,
              L1 = d1.height,
              D1 = d1.placeholderSrc,
              le = d1.width,
              Pe = d1.wrapperClassName,
              Te = d1.wrapperProps,
              Se = this.state.loaded,
              Re = Se ? " lazy-load-image-loaded" : "",
              Ce = Se || !D1 ? {} : {
                backgroundImage: "url(".concat(D1, ")"),
                backgroundSize: "100% 100%"
              };
            return a().createElement("span", Qe({
              className: Pe + " lazy-load-image-background " + j1 + Re,
              style: He(He({}, Ce), {}, {
                color: "transparent",
                display: "inline-block",
                height: L1,
                width: le
              })
            }, Te), i1)
          }
        }, {
          key: "render",
          value: function() {
            var i1 = this.props,
              d1 = i1.effect,
              j1 = i1.placeholderSrc,
              L1 = i1.visibleByDefault,
              D1 = i1.wrapperClassName,
              le = i1.wrapperProps,
              Pe = this.getLazyLoadImage();
            return (d1 || j1) && !L1 || D1 || le ? this.getWrappedLazyLoadImage(Pe) : Pe
          }
        }]) && ot(J.prototype, p1), Object.defineProperty(J, "prototype", {
          writable: !1
        }), ye
      }(a().Component);
      Fn.propTypes = {
        onLoad: l.PropTypes.func,
        afterLoad: l.PropTypes.func,
        beforeLoad: l.PropTypes.func,
        delayMethod: l.PropTypes.string,
        delayTime: l.PropTypes.number,
        effect: l.PropTypes.string,
        placeholderSrc: l.PropTypes.string,
        threshold: l.PropTypes.number,
        useIntersectionObserver: l.PropTypes.bool,
        visibleByDefault: l.PropTypes.bool,
        wrapperClassName: l.PropTypes.string,
        wrapperProps: l.PropTypes.object
      }, Fn.defaultProps = {
        onLoad: function() {},
        afterLoad: function() {
          return {}
        },
        beforeLoad: function() {
          return {}
        },
        delayMethod: "throttle",
        delayTime: 300,
        effect: "",
        placeholderSrc: null,
        threshold: 100,
        useIntersectionObserver: !0,
        visibleByDefault: !1,
        wrapperClassName: ""
      };
      const wt = Fn
    })(), M4.exports = r
  })()), M4.exports
}
FD();
const BD = ({
    Img: t,
    Title: e,
    Description: n,
    Link: r,
    id: i
  }) => {
    const a = c => {
        r || (console.log("ProjectLink kosong"), c.preventDefault(), alert("Live demo link is not available"))
      },
      l = c => {
        i || (console.log("ID kosong"), c.preventDefault(), alert("Project details are not available"))
      };
    return _.jsx("div", {
      className: "group relative w-full",
      children: _.jsxs("div", {
        className: "relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20",
        children: [_.jsx("div", {
          className: "absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"
        }), _.jsxs("div", {
          className: "relative p-5 z-10",
          children: [_.jsx("div", {
            className: "relative overflow-hidden rounded-lg",
            children: _.jsx("img", {
              src: t,
              alt: e,
              className: "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            })
          }), _.jsxs("div", {
            className: "mt-4 space-y-3",
            children: [_.jsx("h3", {
              className: "text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent",
              children: e
            }), _.jsx("p", {
              className: "text-gray-300/80 text-sm leading-relaxed line-clamp-2",
              children: n
            }), _.jsxs("div", {
              className: "pt-4 flex items-center justify-between",
              children: [r ? _.jsxs("a", {
                href: r || "#",
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: a,
                className: "inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200",
                children: [_.jsx("span", {
                  className: "text-sm font-medium",
                  children: "Live Demo"
                }), _.jsx(O3, {
                  className: "w-4 h-4"
                })]
              }) : _.jsx("span", {
                className: "text-gray-500 text-sm",
                children: "Demo Not Available"
              }), i ? _.jsxs(uT, {
                to: `/project/${i}`,
                onClick: l,
                className: "inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50",
                children: [_.jsx("span", {
                  className: "text-sm font-medium",
                  children: "Details"
                }), _.jsx(mT, {
                  className: "w-4 h-4"
                })]
              }) : _.jsx("span", {
                className: "text-gray-500 text-sm",
                children: "Details Not Available"
              })]
            })]
          }), _.jsx("div", {
            className: "absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"
          })]
        })]
      })
    })
  },
  $D = ({
    TechStackIcon: t,
    Language: e
  }) => _.jsxs("div", {
    className: "group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl",
    children: [_.jsxs("div", {
      className: "relative",
      children: [_.jsx("div", {
        className: "absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"
      }), _.jsx("img", {
        src: t,
        alt: `${e} icon`,
        className: "relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
      })]
    }), _.jsx("span", {
      className: "text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300",
      children: e
    })]
  }),
  zD = () => {
    const t = [{
      type: "Education",
      entries: [{
        title: "Bachelor of Science in Computer Science (Honours)",
        institution: "Government College University, Faisalabad, Pakistan",
        year: "2020 - 2024",
        marks: "CGPA: 3.35/4.00"
      }, {
        title: "Intermediate of Computer Science (ICS)",
        institution: "Tips College of Science, Faisalabad, Pakistan",
        year: "2018 - 2020"
      }, {
        title: "Matriculation in Science",
        institution: "Government High School, Sheikhupura, Pakistan",
        year: "2015 - 2017"
      }]
    }, {
      type: "Experience",
      entries: [{
        title: "Web Developer",
        company: "VendAxis FZ-LLC, Faisalabad, Pakistan",
        year: "02-2025 - Present"
      }, {
        title: "Front-End Web Developer (Intern)",
        company: "Snow Dream Studios, Faisalabad, Pakistan",
        year: "11-2024 - 01-2025"
      }, {
        title: "Data Entry Operator & Accountant",
        company: "Cambridge International College, Faisalabad, Pakistan",
        year: "05-2023 - 10-2023"
      }, {
        title: "Lecturer in Computer Science",
        company: "Spirit Idea Tech System, Faisalabad, Pakistan",
        year: "05-2021 - 04-2023"
      }]
    }, {
      type: "Certificates",
      entries: [{
        title: "Web Development",
        institution: "Spirit Idea Tech System, Faisalabad, Pakistan",
        year: "2023"
      }, {
        title: "Diploma in Computer Office Management",
        institution: "Quaid-e-Azam Educational College, Faisalabad, Pakistan.",
        year: "2020"
      }]
    }];
    return _.jsxs(M3, {
      sx: {
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 1fr"
        },
        gap: {
          xs: 3,
          md: 5
        },
        width: "100%"
      },
      children: [_.jsx(M3, {
        children: t.filter(e => e.type === "Experience").map((e, n) => _.jsx(M3, {
          sx: {
            mb: {
              xs: 0,
              md: 3
            }
          },
          "data-aos": "fade-up-right",
          "data-aos-duration": "1000",
          children: _.jsxs("div", {
            className: "bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group",
            children: [_.jsxs("h3", {
              className: "text-xl font-semibold text-white/90 flex items-center gap-3",
              children: [_.jsx(vT, {
                className: "w-5 h-5 text-purple-400 group-hover:rotate-[20deg] transition-transform duration-300"
              }), e.type]
            }), _.jsx("div", {
              className: "space-y-4",
              children: e.entries.map((r, i) => _.jsxs("div", {
                className: "group/title flex items-start space-x-3 p-2.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10",
                children: [_.jsxs("div", {
                  className: "relative mt-2",
                  children: [_.jsx("div", {
                    className: "absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover/title:opacity-100 opacity-0 transition-opacity duration-300"
                  }), _.jsx("div", {
                    className: "relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover/title:scale-125 transition-transform duration-300"
                  })]
                }), _.jsxs("div", {
                  className: "space-y-2",
                  children: [_.jsx(Ca, {
                    variant: "h6",
                    sx: {
                      color: "#fff",
                      fontWeight: 500
                    },
                    className: "text-white group-hover/title:text-white transition-colors",
                    children: r.title
                  }), _.jsxs(Ca, {
                    variant: "body2",
                    sx: {
                      color: "#94a3b8"
                    },
                    className: "text-gray-300 group-hover/title:text-white transition-colors",
                    children: [r.company, " ", _.jsx("br", {}), " ", r.year]
                  })]
                })]
              }, i))
            })]
          })
        }, e.type))
      }), _.jsx(M3, {
        children: t.filter(e => e.type === "Education" || e.type === "Certificates").map((e, n) => _.jsx(M3, {
          sx: {
            mb: {
              xs: 3,
              md: 3
            }
          },
          "data-aos": "fade-up-left",
          "data-aos-duration": "1200",
          children: _.jsxs("div", {
            className: "bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group",
            children: [_.jsxs("h3", {
              className: "text-xl font-semibold text-white/90 flex items-center gap-3",
              children: [e.type === "Education" ? _.jsx(Jy, {
                className: "w-5 h-5 text-purple-400 group-hover:rotate-[20deg] transition-transform duration-300"
              }) : _.jsx(Yy, {
                className: "w-5 h-5 text-purple-400 group-hover:rotate-[20deg] transition-transform duration-300"
              }), e.type]
            }), _.jsx("div", {
              className: "space-y-4",
              children: e.entries.map((r, i) => _.jsxs("div", {
                className: "group/title flex items-start space-x-3 p-2.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10",
                children: [_.jsxs("div", {
                  className: "relative mt-2",
                  children: [_.jsx("div", {
                    className: "absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover/title:opacity-100 opacity-0 transition-opacity duration-300"
                  }), _.jsx("div", {
                    className: "relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover/title:scale-125 transition-transform duration-300"
                  })]
                }), _.jsxs("div", {
                  className: "space-y-2",
                  children: [_.jsx(Ca, {
                    variant: "h6",
                    sx: {
                      color: "#fff",
                      fontWeight: 500
                    },
                    className: "text-white group-hover/title:text-white transition-colors",
                    children: r.title
                  }), _.jsxs(Ca, {
                    variant: "body2",
                    sx: {
                      color: "#94a3b8"
                    },
                    className: "text-gray-300 group-hover/title:text-white transition-colors",
                    children: [r.institution, " ", _.jsx("br", {}), " ", r.year, r.marks && _.jsx("br", {}), r.marks]
                  })]
                })]
              }, i))
            })]
          })
        }, e.type))
      })]
    })
  },
  UD = ({
    onClick: t,
    isShowingMore: e
  }) => _.jsxs("button", {
    onClick: t,
    className: `
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    `,
    children: [_.jsxs("span", {
      className: "relative z-10 flex items-center gap-2",
      children: [e ? "See Less" : "See More", _.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: `
          transition-transform 
          duration-300 
          ${e?"group-hover:-translate-y-0.5":"group-hover:translate-y-0.5"}
        `,
        children: _.jsx("polyline", {
          points: e ? "18 15 12 9 6 15" : "6 9 12 15 18 9"
        })
      })]
    }), _.jsx("span", {
      className: "absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"
    })]
  });

function su({
  children: t,
  value: e,
  index: n,
  ...r
}) {
  return _.jsx("div", {
    role: "tabpanel",
    hidden: e !== n,
    id: `full-width-tabpanel-${n}`,
    "aria-labelledby": `full-width-tab-${n}`,
    ...r,
    children: e === n && _.jsx(M3, {
      sx: {
        p: {
          xs: 1,
          sm: 3
        }
      },
      children: _.jsx(Ca, {
        children: t
      })
    })
  })
}
su.propTypes = {
  children: E4.node,
  index: E4.number.isRequired,
  value: E4.number.isRequired
};

function D4(t) {
  return {
    id: `full-width-tab-${t}`,
    "aria-controls": `full-width-tabpanel-${t}`
  }
}
const tb = [{
  icon: "html.svg",
  language: "HTML"
}, {
  icon: "css.svg",
  language: "CSS"
}, {
  icon: "tailwind.svg",
  language: "Tailwind CSS"
}, {
  icon: "javascript.svg",
  language: "JavaScript"
}, {
  icon: "reactjs.svg",
  language: "React JS"
}, {
  icon: "next-js.svg",
  language: "Next JS"
}, {
  icon: "nodejs.svg",
  language: "Node JS"
}, {
  icon: "laravellogo.svg",
  language: "Laravel"
}, {
  icon: "vite.svg",
  language: "Vite"
}, {
  icon: "MySql.svg",
  language: "MySQL"
}, {
  icon: "firebase.svg",
  language: "Firebase"
}, {
  icon: "mongodb.svg",
  language: "MongoDB"
}, {
  icon: "Postman.svg",
  language: "Postman"
}, {
  icon: "Github.svg",
  language: "GitHub"
}, {
  icon: "vercel.svg",
  language: "Vercel"
}, {
  icon: "MUI.svg",
  language: "Material UI"
}, {
  icon: "Motion.svg",
  language: "Motion"
}, {
  icon: "Figma.svg",
  language: "Figma"
}, {
  icon: "Linux.svg.png",
  language: "Linux"
}, {
  icon: "Ubuntu.svg",
  language: "Ubuntu"
}];

function WD() {
  const t = yf(),
    [e, n] = M.useState(0);
  var [r, i] = M.useState([]);
  const [a, l] = M.useState(!1), h = window.innerWidth < 768 ? 4 : 6;
  M.useEffect(() => {
    ko.init({
      once: !1
    })
  }, []);
  const p = (v, C) => {
    n(C)
  };
  r = [{
    id: "tool-matrix",
    Features: ["AI-powered handwriting recognition using a Python-based model integrated with the Gemini API, achieving 95% accuracy in solving handwritten math problems.", "A visually appealing and dynamic web platform designed for seamless interaction and an optimal user experience.", "Comprehensive calculators for various domains, catering to a wide range of user needs."],
    Link: "https://tool-matrix.vercel.app/",
    Img: "/tool matrix dark.png",
    TechStack: ["Python", "React JS", "Node JS", "Tailwind CSS", "Gemini API", "Vite", "GitHub", "Vercel"],
    Github: "https://github.com/masabqurban",
    Description: "A web-based platform developed in React JS, Node JS, Python and Tailwind CSS featuring calculators for various domains. Integrated a Python-powered AI model utilizing Gemini API to solve handwritten math problems. Achieved 95% accuracy in solving math queries through the AI-powered handwriting recognition feature.",
    Title: "Tool Matrix (FYP)"
  }, {
    id: "snowdreamstudios",
    Features: ["A Swiss-based digital studio offering a visually immersive experience with fluid animations, interactive elements, and a modern design powered by Framer Motion and Tailwind CSS.", "Showcases a comprehensive portfolio, including case studies, projects, services, and team insights, all presented in a structured and visually appealing way.", "Built with Next.js for fast load times, optimized performance, and seamless navigation, ensuring a top-tier user experience across devices."],
    Link: "https://snowdreamstudios.com/",
    Img: "/snowdreamstudios.ch_en_.png",
    TechStack: ["Next.js", "Tailwind CSS", "JavaScript", "Framer Motion", "Figma", "GitHub", "Vercel"],
    Github: "https://github.com/masabqurban",
    Description: "Snow Dream Studios is a Swiss-based digital studio blending cutting-edge tech with stunning design. Built with Next.js, Tailwind CSS, Framer Motion, and JavaScript, and hosted on Vercel, it delivers a visually rich, interactive experience. The platform features smooth animations, a modern design, and a comprehensive portfolio, including case studies, services, career opportunities, and team insights. With intuitive design and optimized performance, it sets a new standard for corporate websites.",
    Title: "Snow Dream Studios"
  }, {
    id: "estorefoam",
    Features: ["Users can input foam measurements to instantly generate a visual representation of the foam’s size and shape, enhancing the shopping experience.", "Offers a wide variety of foam materials, including polyurethane and polyethylene, cut to any shape or size, catering to diverse industries.", "Built with PHP Laravel and Tailwind CSS, the website features a sleek, user-friendly design with seamless navigation for easy browsing and purchasing."],
    Link: "https://estorefoam.co.uk/",
    Img: "/estorefoam.png",
    TechStack: ["Laravel", "Tailwind CSS", "JavaScript", "Figma", "GitHub"],
    Github: "https://github.com/masabqurban",
    Description: "Estorefoam, the UK’s largest online foam supplier since 2000, has a revamped e-commerce platform built with PHP Laravel and Tailwind CSS. The website offers custom foam visualization, allowing users to input measurements and see a visual representation of their foam. With over 25 years of expertise, it provides high-quality foam materials, including polyurethane and polyethylene, cut to any shape or size. Catering to upholsterers, crafters, and more, the platform combines modern design, functionality, and ease of use for an exceptional shopping experience.",
    Title: "Estorefoam"
  }, {
    id: "the-fresh-drop",
    Features: ["An integrated admin panel provides full control over the store, enabling seamless management of products, orders, inventory, and promotional discount coupons.", "Built with Next.js for server-side rendering, ensuring fast page loads, improved SEO, and a smooth, responsive shopping experience for all customers.", "Features a secure and streamlined checkout process tailored for the UAE market, with a clean user interface for effortless Browse and purchasing on any device."],
    Img: "/fresh-drop.vercel.app_.png",
    TechStack: ["Next JS", "JavaScript", "Tailwind CSS", "MongoDB", "Motion", "Vercel", "GitHub"],
    Github: "https://github.com/masabqurban",
    Description: "A full-stack e-commerce solution built with Next.js and JavaScript, specifically designed for a UAE-based sanitary products business. This platform delivers a high-performance, server-rendered shopping experience for customers and includes a powerful, integrated admin panel for comprehensive store management. Administrators can effortlessly manage the entire product lifecycle, track orders, oversee inventory, and create discount coupons, all from a unified dashboard within the same application. The architecture prioritizes a seamless workflow, combining a clean, responsive, and intuitive public storefront with a robust backend, ensuring an exceptional user journey from Browse to checkout and simplifying store operations.",
    Title: "The Fresh Drop"
  }, {
    id: "png-to-text",
    Features: ["A versatile web platform designed to simplify file processing with tools for image conversion, compression, and text extraction.", "Enhanced file handling through integrated features that streamline image optimization and text extraction tasks.", "Efficient processing with advanced tools that improve workflow and save time in handling various file types."],
    Link: "https://pngtotext.com/",
    Img: "/pngtotext dark.png",
    TechStack: ["Laravel", "JavaScript", "Tailwind CSS", "Figma", "MySQL", "Tesseract OCR", "GitHub"],
    Github: "https://github.com/masabqurban",
    Description: "Developed a feature-rich web-based platform using PHP, Laravel and Tailwind CSS. Integrated tools for image conversion, compression, and text extraction to enhance file processing efficiency.",
    Title: "PNG to TEXT"
  }, {
    id: "zoa-vet",
    Features: ["Role-based dashboard (Admin, Veterinarian, Client) for managing patients, appointments, medical records, and billing.", "Integrated accounts system with secure authentication, invoicing, and prescription tracking for seamless clinic operations.", "Real-time data visualization (appointments, revenue) and automated reminders to improve workflow efficiency.", "Built with Laravel for robust backend logic and a responsive UI for desktop/mobile clinic staff."],
    Link: "https://zoa.ai/",
    Img: "/zoa.ai_.png",
    TechStack: ["Laravel", "MySQL", "JavaScript", "Tailwind CSS", "GitHub"],
    Github: "https://github.com/masabqurban",
    Description: "ZOA is a comprehensive Veterinary Clinic Management System designed to streamline operations for clinics, veterinarians, and pet owners. Developed with Laravel, it features role-based access (admins, doctors, clients), patient record management, appointment scheduling, and an integrated billing system. The dashboard provides real-time analytics, automated reminders, and prescription tracking, replacing manual processes with a secure, scalable digital solution. Ideal for modern veterinary practices seeking efficiency and improved patient care.",
    Title: "ZOA – Veterinary Clinic System"
  }, {
    id: "sds-erp",
    Features: ["Centralizes business operations, including project management, resource allocation, and client data, for improved efficiency and collaboration.", "Provides real-time analytics and reporting tools, enabling data-driven decision-making and better tracking of studio performance.", "Built with PHP Laravel and Tailwind CSS, the ERP system features a sleek, modern interface with intuitive navigation for seamless workflow management."],
    Link: "",
    Img: "/ERP.png",
    TechStack: ["Laravel", "Tailwind CSS", "JavaScript", "GitHub"],
    Github: "https://github.com/masabqurban",
    Description: "The SDS Enterprise Resource Planning (ERP) system is a powerful, centralized platform designed to streamline operations for Snow Dream Studios. Built with PHP Laravel and Tailwind CSS, it offers tools for managing projects, resources, and client data with precision. The system includes real-time analytics and reporting features, empowering data-driven decisions and performance tracking. With its modern, user-friendly interface, the SDS ERP enhances collaboration and workflow efficiency, ensuring seamless operations for the studio’s creative and business needs.",
    Title: "SDS - ERP System"
  }, {
    id: "sbs-crm",
    Features: ["A comprehensive CRM system designed to manage client relationships, track leads, and streamline communication for brokers and agents.", "Provides real-time analytics and reporting tools, enabling brokers to make data-driven decisions and optimize client engagement strategies.", "Built with PHP Laravel and Tailwind CSS, the CRM system features a sleek, modern interface with intuitive navigation for efficient client and lead management."],
    Link: "",
    Img: "/CRM.png",
    TechStack: ["Laravel", "Tailwind CSS", "JavaScript", "GitHub"],
    Github: "https://github.com/masabqurban",
    Description: "The SBS Customer Relationship Management (CRM) is a powerful broker system designed to enhance client relationship management for brokers and agents. Built with PHP Laravel and Tailwind CSS, it offers tools for tracking leads, managing client interactions, and streamlining communication. The system includes real-time analytics and reporting features, empowering brokers to make data-driven decisions and optimize engagement strategies. With its modern, user-friendly interface, the SBS CRM ensures efficient client and lead management, making it an essential tool for brokers in the real estate and financial industries.",
    Title: "SBS - CRM System"
  }, {
    id: "sbs-rms",
    Features: ["A mobile-friendly POS system designed for seamless order management, payment processing, and real-time inventory tracking on the go.", "Provides real-time sales analytics and reporting tools, enabling businesses to make data-driven decisions and optimize performance.", "Built with PHP Laravel and Tailwind CSS, the RMS system features a sleek, modern interface with intuitive navigation for quick and efficient transactions."],
    Link: "",
    Img: "/POS.png",
    TechStack: ["Laravel", "Tailwind CSS", "JavaScript", "GitHub"],
    Github: "https://github.com/masabqurban",
    Description: "The SBS Mobile Repairing Management System (RMS) is a robust Mobile POS system designed to streamline retail and hospitality operations. Built with PHP Laravel and Tailwind CSS, it offers tools for order management, payment processing, and real-time inventory tracking. The system includes real-time sales analytics and reporting features, empowering businesses to make data-driven decisions and optimize performance. With its modern, user-friendly interface, the SBS RMS ensures quick and efficient transactions, making it an ideal solution for businesses on the go.",
    Title: "SBS - RMS System"
  }, {
    id: "Sertify",
    Features: ["Real-time case tracking and collaboration tools with automated deadline alerts to ensure timely legal submissions.", "Role-based access control (RBAC) to safeguard sensitive client data and restrict permissions by seniority or department.", "Integrated encrypted document vault with AI-powered search, ensuring quick retrieval and compliance with UAE data protection laws."],
    Link: "",
    Img: "/Sertify.png",
    TechStack: ["React JS", "Node JS", "MySQL", "Tailwind CSS", "GitHub", "Vite", "Vercel"],
    Github: "https://github.com/masabqurban",
    Description: "Sertify is a modern, secure admin panel designed exclusively for Dubai-based legal professionals, developed using React.js for a dynamic frontend and Node.js for a robust backend. It streamlines case management, client communication, document handling, and appointment scheduling with an intuitive interface. Features include role-based access, real-time updates, encrypted data storage, and compliance with UAE legal standards. Built for scalability, Sertify empowers law firms to enhance productivity, organize workflows, and deliver seamless client services while adhering to Dubai’s regulatory requirements.",
    Title: "Sertify"
  }, {
    id: "notarify-admin-platform",
    Features: ["Enables comprehensive management of user profiles, including the verification of lawyer credentials and moderation of client case files to ensure platform integrity.", "Provides tools to oversee lawyer-client interactions, manage case statuses, and handle platform-specific rules and financial data for streamlined operations.", "Built on a secure Node.js backend API that serves both this admin panel and the Flutter mobile app, with a responsive React.js interface for efficient control."],
    Link: "",
    Img: "/localhost_5173_.png",
    TechStack: ["React JS", "Node JS", "Express JS", "JavaScript", "GitHub"],
    Github: "https://github.com/masabqurban",
    Description: "The operational core of Notarify, a legal-tech platform designed to connect lawyers and clients across the UAE. This web-based admin panel, developed with React.js and a Node.js backend, gives administrators complete control over the network. While legal professionals and clients interact via a Flutter mobile app, this system manages all backend activities, including the verification of lawyer profiles, oversight of client case submissions, and management of user data. It features essential tools and data dashboards to maintain the platform's integrity, security, and efficiency, acting as the central hub for all administrative, support, and moderation functions of the legal marketplace.",
    Title: "Notarify"
  }, {
    id: "ZENE",
    Features: ["Unified dashboard for managing services, real estate listings, e-commerce products, orders, and transactions with real-time inventory tracking and automated order processing.", "Secure multi-payment gateway integration supporting credit cards, digital wallets, and local payment methods, backed by end-to-end encryption and real-time financial analytics.", "Customizable vendor/agent roles with granular permissions, audit logs, and commission tracking to streamline operations and ensure transparency across diverse business verticals."],
    Link: "",
    Img: "/ZENE.png",
    TechStack: ["React JS", "Node JS", "MySQL", "Tailwind CSS", "GitHub", "Vite", "Vercel"],
    Github: "https://github.com/masabqurban",
    Description: "Zene is a comprehensive all-in-one vendor admin panel built with React.js and Node.js, enabling seamless management of services, real estate, e-commerce, orders, and transactions. It offers a unified dashboard with real-time inventory tracking, automated workflows, and integrated multi-payment gateways, all secured by end-to-end encryption. Designed for scalability, Zene simplifies cross-industry operations with customizable roles, audit trails, and compliance tools for businesses in Dubai and beyond.",
    Title: "ZENE"
  }, {
    id: "0NE",
    Features: ["AI-powered personalized fitness plans with step-by-step video guides, calorie tracking, and adaptive recommendations based on user progress.", "Real-time health dashboards with interactive graphs (weight, steps, hydration, calories) and cross-device synchronization for seamless tracking.", "Secure HIPAA-compliant data storage, end-to-end encryption, and smart alerts for hydration, exercise, and goal milestones."],
    Link: "",
    Img: "/0NE.png",
    TechStack: ["React JS", "Node JS", "MySQL", "Tailwind CSS", "GitHub", "Vite", "Vercel"],
    Github: "https://github.com/masabqurban",
    Description: "0NE is a holistic health management platform developed with React.js and Node.js, offering real-time tracking of weight, steps, water intake, calories (burned/consumed), and personalized exercise guides with step-by-step video tutorials. It features interactive graphs for trend analysis, AI-driven health recommendations, and goal-setting tools. Built with end-to-end encryption, the app ensures secure storage of sensitive health data while providing cross-device synchronization. Ideal for fitness enthusiasts and healthcare providers, 0NE simplifies wellness journeys with actionable insights and compliance with global health standards.",
    Title: "0NE Life Style"
  }, {
    id: "partora-admin-panel",
    Features: ["Provides comprehensive control over the marketplace, including user management for buyers and sellers, product listing moderation, and transaction monitoring.", "Features an advanced analytics dashboard with real-time reporting on sales trends, inventory levels, and user activity to drive informed business decisions.", "Built with a robust React.js frontend and a secure Node.js backend, ensuring a scalable and efficient system for managing all platform operations."],
    Link: "",
    Img: "/admin.partora.com_.png",
    TechStack: ["React JS", "Node JS", "Express JS", "JavaScript", "GitHub"],
    Github: "https://github.com/masabqurban",
    Description: "The central command center for Partora, a specialized marketplace for luxury automobile spare parts in the UAE. This powerful admin panel, built with a React.js frontend and a Node.js backend, provides complete oversight of the entire platform's operations. While buyers and sellers use a separate Flutter mobile app, this web application serves as the backbone, allowing administrators to manage users, moderate complex product listings, process transactions, and handle platform-wide settings. It includes a detailed dashboard that visualizes real-time analytics on sales, inventory, and user engagement, offering critical business intelligence for a high-value market.",
    Title: "Partora"
  }, {
    id: "portfolio",
    Features: ["Interactive Physics: Objects move and react dynamically with the cursor, influenced by gravity and magnetic forces.", "Realistic Gravity and Magnetism: Simulates natural physics, creating immersive and engaging interactions.", "Fluid Animations: Smooth transitions and object movements enhance user experience with Matter.js-powered effects."],
    Link: "https://masab-qurban-portfolio.vercel.app/",
    Img: "/portfolio1.png",
    TechStack: ["React JS", "Matter JS", "Tailwind CSS", "Framer Motion", "Vite", "GitHub", "Vercel"],
    Github: "https://github.com/masabqurban",
    Description: "My portfolio integrates Matter.js to bring interactive physics to life. Using Matter.js, I’ve created a dynamic environment where objects move with the cursor, influenced by gravity-like forces, and even magnetic effects. This adds a layer of realism and engagement, offering an immersive experience that showcases my skills in combining design and physics for web interactivity.",
    Title: "MotionCode Portfolio"
  }, {
    id: "mind-vs-machine",
    Features: ["Adaptive AI opponent that learns from your moves, making each game more challenging and engaging. Also includes a multiplayer mode for real-time matches against friends.", "Keyboard and touch controls provide flexible gameplay, allowing players to use arrow keys and Enter for precise moves or tap for smooth interactions on any device.", "Dark and light mode toggle lets you switch themes for a comfortable visual experience, ensuring clear visibility and reduced eye strain in any lighting condition."],
    Link: "https://mind-vs-machine-tic-tac-toe-game.vercel.app/",
    Img: "/mind vs machine.png",
    TechStack: ["React JS", "Tailwind CSS", "JavaScript", "GitHub", "Vercel"],
    Github: "https://github.com/masabqurban",
    Description: "A modern twist on the classic Tic Tac Toe game, built with React.js and JavaScript and styled using Tailwind CSS. This game features an intelligent AI opponent with adaptive difficulty, challenging players to think strategically. It also includes a multiplayer mode for real-time competitive matches and move analytics to help refine strategies. The sleek, retro-modern design ensures a visually appealing experience, while touch-friendly controls make it accessible across all devices. With full keyboard navigation support, players can effortlessly place their moves using arrow keys and the Enter key. A built-in dark and light mode toggle enhances visibility and comfort, allowing for seamless gameplay in any environment.",
    Title: "Mind vs Machine Game"
  }, {
    id: "snap-puzzle-game",
    Features: ["Players can upload their own images to create personalized puzzles, making each game unique and more engaging.", "The game records the number of moves and completion time, helping players analyze their performance and improve their skills.", "Features adaptive difficulty scaling, smooth animations, and logic-testing grids for a challenging yet enjoyable puzzle-solving experience."],
    Link: "https://snap-puzzle-game.vercel.app/",
    Img: "/snap puzzle game 1.png",
    TechStack: ["React JS", "Tailwind CSS", "JavaScript", "GitHub", "Vercel"],
    Github: "https://github.com/masabqurban",
    Description: "A fast-paced puzzle game built with React.js and JavaScript, styled with Tailwind CSS. Features drag-and-drop tile mechanics and dynamic difficulty scaling. Includes smooth animations, a minimalist UI, and a progress tracker with scoreboards. Players can upload custom images to generate unique puzzles, adding a personal touch to the gameplay. The game also tracks moves and time, allowing players to analyze their performance and improve their puzzle-solving skills. Designed for cross-device play, it combines logic-testing grids with vibrant visuals for an engaging brain-teasing experience.",
    Title: "Snap Puzzle Game"
  }, {
    id: "wormhole-snake-game",
    Features: ["Wormhole portals, speed boosts, and maze challenges add unique twists to traditional snake gameplay, making each level more dynamic and unpredictable.", "Keyboard-based movement with precise controls ensures smooth navigation and responsiveness, allowing players to maneuver the snake with accuracy and ease.", "Global leaderboard system tracks high scores and player rankings, encouraging competition and replayability as users strive to improve their performance."],
    Link: "https://wormhole-snake-game.vercel.app/",
    Img: "/wormhole snake game.png",
    TechStack: ["React JS", "Tailwind CSS", "JavaScript", "GitHub", "Vercel"],
    Github: "https://github.com/masabqurban",
    Description: "A retro-inspired arcade game built with React.js and JavaScript, styled with Tailwind CSS. It enhances classic snake gameplay with wormhole portals, speed boosts, and maze challenges, adding new layers of excitement. The game features fluid animations, smooth controls, and dynamic obstacles for an engaging experience. Players can navigate using keyboard arrow keys for precise movement. A global leaderboard system tracks high scores, encouraging competitive play. Optimized for performance, it blends nostalgic mechanics with modern physics for a fast-paced, gravity-defying adventure.",
    Title: "Wormhole Snake Game"
  }, {
    id: "shopease",
    Features: ["Seamless client management with order history tracking, automated customer segmentation, and real-time communication tools for sellers.", "Real-time sales metrics, inventory insights, and customer behavior reports to optimize pricing and marketing strategies.", "Scalable, responsive frontend and backend architecture with a user-friendly interface for effortless browsing and checkout experiences."],
    Link: "",
    Img: "/ShopEase.png",
    TechStack: ["Next JS", "Tailwind CSS", "TypeScript", "GitHub"],
    Github: "https://github.com/masabqurban",
    Description: "ShopEase is a modern E-Commerce platform crafted as a personal project, leveraging Next.js, TypeScript, and Tailwind CSS for a performant and visually polished experience. It showcases dynamic product catalogs, real-time inventory management, and a secure checkout process with integrated payment gateways. The platform includes smooth animations, personalized user dashboards, and AI-powered product recommendations for tailored shopping journeys. Built with clean code architecture and mobile-first responsiveness, ShopEase emphasizes intuitive navigation, fast load times, and developer-friendly scalability, serving as a robust showcase of full-stack development and modern design practices.",
    Title: "ShopEase"
  }], M.useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(r))
  }, []);
  const m = M.useCallback(() => {
      l(v => !v)
    }, []),
    y = a ? r : r.slice(0, h);
  return _.jsxs("div", {
    className: "md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden",
    id: "Portofolio",
    children: [_.jsxs("div", {
      className: "text-center pb-10",
      "data-aos": "fade-up",
      "data-aos-duration": "1000",
      children: [_.jsx("h2", {
        className: "inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]",
        children: _.jsx("span", {
          style: {
            color: "#6366f1",
            backgroundImage: "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent"
          },
          children: "Portfolio Showcase"
        })
      }), _.jsx("p", {
        className: "text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2",
        children: "Explore my journey through projects, qualifications, and technical expertise. Each section represents a milestone in my continuous learning path."
      })]
    }), _.jsxs(M3, {
      sx: {
        width: "100%"
      },
      children: [_.jsx(VM, {
        position: "static",
        elevation: 0,
        sx: {
          bgcolor: "transparent",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "20px",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
            backdropFilter: "blur(10px)",
            zIndex: 0
          }
        },
        className: "md:px-4",
        children: _.jsxs(PD, {
          value: e,
          onChange: p,
          textColor: "secondary",
          indicatorColor: "secondary",
          variant: "fullWidth",
          sx: {
            minHeight: "70px",
            "& .MuiTab-root": {
              fontSize: {
                xs: "0.9rem",
                md: "1rem"
              },
              fontWeight: "600",
              color: "#94a3b8",
              textTransform: "none",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              padding: "20px 0",
              zIndex: 1,
              margin: "8px",
              borderRadius: "12px",
              "&:hover": {
                color: "#ffffff",
                backgroundColor: "rgba(139, 92, 246, 0.1)",
                transform: "translateY(-2px)",
                "& .lucide": {
                  transform: "scale(1.1) rotate(5deg)"
                }
              },
              "&.Mui-selected": {
                color: "#fff",
                background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                "& .lucide": {
                  color: "#a78bfa"
                }
              }
            },
            "& .MuiTabs-indicator": {
              height: 0
            },
            "& .MuiTabs-flexContainer": {
              gap: "8px"
            }
          },
          children: [_.jsx(L4, {
            icon: _.jsx(oo, {
              className: "mb-2 w-5 h-5 transition-all duration-300"
            }),
            label: "Projects",
            ...D4(0)
          }), _.jsx(L4, {
            icon: _.jsx(Jy, {
              className: "mb-2 w-5 h-5 transition-all duration-300"
            }),
            label: "Qualifications",
            ...D4(1)
          }), _.jsx(L4, {
            icon: _.jsx(yT, {
              className: "mb-2 w-5 h-5 transition-all duration-300"
            }),
            label: "Tech Stack",
            ...D4(2)
          })]
        })
      }), _.jsxs(su, {
        value: e,
        index: 0,
        dir: t.direction,
        children: [_.jsx("div", {
          className: "container mx-auto flex justify-center items-center overflow-hidden",
          children: _.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5",
            children: y.map((v, C) => _.jsx("div", {
              "data-aos": C % 3 === 0 ? "fade-up-right" : C % 3 === 1 ? "fade-up" : "fade-up-left",
              "data-aos-duration": C % 3 === 0 ? "1000" : C % 3 === 1 ? "1200" : "1000",
              children: _.jsx(BD, {
                Img: v.Img,
                Title: v.Title,
                Description: v.Description,
                Link: v.Link,
                id: v.id
              })
            }, v.id || C))
          })
        }), r.length > h && _.jsx("div", {
          className: "mt-6 w-full flex justify-start",
          children: _.jsx(UD, {
            onClick: () => m("projects"),
            isShowingMore: a
          })
        })]
      }), _.jsx(su, {
        value: e,
        index: 1,
        dir: t.direction,
        children: _.jsx("div", {
          className: "container mx-auto flex justify-center items-center overflow-hidden",
          children: _.jsx("div", {
            className: "w-full",
            children: _.jsx(zD, {})
          })
        })
      }), _.jsx(su, {
        value: e,
        index: 2,
        dir: t.direction,
        children: _.jsx("div", {
          className: "container mx-auto flex justify-center items-center overflow-hidden pb-[5%]",