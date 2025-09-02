              var J1 = x();
              return k1(J1) ? y1(J1) : void(K1 = setTimeout(c1, V1(J1)))
            }

            function y1(J1) {
              return K1 = void 0, be && E1 ? h1(J1) : (E1 = M1 = void 0, $1)
            }

            function f1() {
              K1 !== void 0 && clearTimeout(K1), ee = 0, E1 = B1 = M1 = K1 = void 0
            }

            function K() {
              return K1 === void 0 ? $1 : y1(x())
            }

            function s1() {
              var J1 = x(),
                ie = k1(J1);
              if (E1 = arguments, M1 = this, B1 = J1, ie) {
                if (K1 === void 0) return A1(B1);
                if (he) return K1 = setTimeout(c1, V), h1(B1)
              }
              return K1 === void 0 && (K1 = setTimeout(c1, V)), $1
            }
            var E1, M1, F1, $1, K1, B1, ee = 0,
              me = !1,
              he = !1,
              be = !0;
            if (typeof N != "function") throw new TypeError(y);
            return V = p(V) || 0, l(L) && (me = !!L.leading, he = "maxWait" in L, F1 = he ? A(p(L.maxWait) || 0, V) : F1, be = "trailing" in L ? !!L.trailing : be), s1.cancel = f1, s1.flush = K, s1
          }

          function l(N) {
            var V = typeof N > "u" ? "undefined" : m(N);
            return !!N && (V == "object" || V == "function")
          }

          function c(N) {
            return !!N && (typeof N > "u" ? "undefined" : m(N)) == "object"
          }

          function h(N) {
            return (typeof N > "u" ? "undefined" : m(N)) == "symbol" || c(N) && D.call(N) == C
          }

          function p(N) {
            if (typeof N == "number") return N;
            if (h(N)) return v;
            if (l(N)) {
              var V = typeof N.valueOf == "function" ? N.valueOf() : N;
              N = l(V) ? V + "" : V
            }
            if (typeof N != "string") return N === 0 ? N : +N;
            N = N.replace(P, "");
            var L = R.test(N);
            return L || W.test(N) ? q(N.slice(2), L ? 2 : 8) : k.test(N) ? v : +N
          }
          var m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(N) {
              return typeof N
            } : function(N) {
              return N && typeof Symbol == "function" && N.constructor === Symbol && N !== Symbol.prototype ? "symbol" : typeof N
            },
            y = "Expected a function",
            v = NaN,
            C = "[object Symbol]",
            P = /^\s+|\s+$/g,
            k = /^[-+]0x[0-9a-f]+$/i,
            R = /^0b[01]+$/i,
            W = /^0o[0-7]+$/i,
            q = parseInt,
            U = (typeof i > "u" ? "undefined" : m(i)) == "object" && i && i.Object === Object && i,
            H = (typeof self > "u" ? "undefined" : m(self)) == "object" && self && self.Object === Object && self,
            $ = U || H || Function("return this")(),
            X = Object.prototype,
            D = X.toString,
            A = Math.max,
            j = Math.min,
            x = function() {
              return $.Date.now()
            };
          n.exports = a
        }).call(r, function() {
          return this
        }())
      }, function(n, r) {
        function i(m) {
          var y = void 0,
            v = void 0;
          for (y = 0; y < m.length; y += 1)
            if (v = m[y], v.dataset && v.dataset.aos || v.children && i(v.children)) return !0;
          return !1
        }

        function a() {
          return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
        }

        function l() {
          return !!a()
        }

        function c(m, y) {
          var v = window.document,
            C = a(),
            P = new C(h);
          p = y, P.observe(v.documentElement, {
            childList: !0,
            subtree: !0,
            removedNodes: !0
          })
        }

        function h(m) {
          m && m.forEach(function(y) {
            var v = Array.prototype.slice.call(y.addedNodes),
              C = Array.prototype.slice.call(y.removedNodes),
              P = v.concat(C);
            if (i(P)) return p()
          })
        }
        Object.defineProperty(r, "__esModule", {
          value: !0
        });
        var p = function() {};
        r.default = {
          isSupported: l,
          ready: c
        }
      }, function(n, r) {
        function i(v, C) {
          if (!(v instanceof C)) throw new TypeError("Cannot call a class as a function")
        }

        function a() {
          return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(r, "__esModule", {
          value: !0
        });
        var l = function() {
            function v(C, P) {
              for (var k = 0; k < P.length; k++) {
                var R = P[k];
                R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(C, R.key, R)
              }
            }
            return function(C, P, k) {
              return P && v(C.prototype, P), k && v(C, k), C
            }
          }(),
          c = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          h = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          p = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          m = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          y = function() {
            function v() {
              i(this, v)
            }
            return l(v, [{
              key: "phone",
              value: function() {
                var C = a();
                return !(!c.test(C) && !h.test(C.substr(0, 4)))
              }
            }, {
              key: "mobile",
              value: function() {
                var C = a();
                return !(!p.test(C) && !m.test(C.substr(0, 4)))
              }
            }, {
              key: "tablet",
              value: function() {
                return this.mobile() && !this.phone()
              }
            }]), v
          }();
        r.default = new y
      }, function(n, r) {
        Object.defineProperty(r, "__esModule", {
          value: !0
        });
        var i = function(l, c, h) {
            var p = l.node.getAttribute("data-aos-once");
            c > l.position ? l.node.classList.add("aos-animate") : typeof p < "u" && (p === "false" || !h && p !== "true") && l.node.classList.remove("aos-animate")
          },
          a = function(l, c) {
            var h = window.pageYOffset,
              p = window.innerHeight;
            l.forEach(function(m, y) {
              i(m, p + h, c)
            })
          };
        r.default = a
      }, function(n, r, i) {
        function a(p) {
          return p && p.__esModule ? p : {
            default: p
          }
        }
        Object.defineProperty(r, "__esModule", {
          value: !0
        });
        var l = i(12),
          c = a(l),
          h = function(p, m) {
            return p.forEach(function(y, v) {
              y.node.classList.add("aos-init"), y.position = (0, c.default)(y.node, m.offset)
            }), p
          };
        r.default = h
      }, function(n, r, i) {
        function a(p) {
          return p && p.__esModule ? p : {
            default: p
          }
        }
        Object.defineProperty(r, "__esModule", {
          value: !0
        });
        var l = i(13),
          c = a(l),
          h = function(p, m) {
            var y = 0,
              v = 0,
              C = window.innerHeight,
              P = {
                offset: p.getAttribute("data-aos-offset"),
                anchor: p.getAttribute("data-aos-anchor"),
                anchorPlacement: p.getAttribute("data-aos-anchor-placement")
              };
            switch (P.offset && !isNaN(P.offset) && (v = parseInt(P.offset)), P.anchor && document.querySelectorAll(P.anchor) && (p = document.querySelectorAll(P.anchor)[0]), y = (0, c.default)(p).top, P.anchorPlacement) {
              case "top-bottom":
                break;
              case "center-bottom":
                y += p.offsetHeight / 2;
                break;
              case "bottom-bottom":
                y += p.offsetHeight;
                break;
              case "top-center":
                y += C / 2;
                break;
              case "bottom-center":
                y += C / 2 + p.offsetHeight;
                break;
              case "center-center":
                y += C / 2 + p.offsetHeight / 2;
                break;
              case "top-top":
                y += C;
                break;
              case "bottom-top":
                y += p.offsetHeight + C;
                break;
              case "center-top":
                y += p.offsetHeight / 2 + C
            }
            return P.anchorPlacement || P.offset || isNaN(m) || (v = m), y + v
          };
        r.default = h
      }, function(n, r) {
        Object.defineProperty(r, "__esModule", {
          value: !0
        });
        var i = function(a) {
          for (var l = 0, c = 0; a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop);) l += a.offsetLeft - (a.tagName != "BODY" ? a.scrollLeft : 0), c += a.offsetTop - (a.tagName != "BODY" ? a.scrollTop : 0), a = a.offsetParent;
          return {
            top: c,
            left: l
          }
        };
        r.default = i
      }, function(n, r) {
        Object.defineProperty(r, "__esModule", {
          value: !0
        });
        var i = function(a) {
          return a = a || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(a, function(l) {
            return {
              node: l
            }
          })
        };
        r.default = i
      }])
    })
  }(Kl)), Kl.exports
}
var sC = iC();
const ko = Qu(sC),
  oC = M.memo(() => _.jsx("div", {
    className: "inline-block animate-float lg:mx-0",
    "data-aos": "zoom-in",
    "data-aos-delay": "400",
    children: _.jsxs("div", {
      className: "relative group",
      children: [_.jsx("div", {
        className: "absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"
      }), _.jsx("div", {
        className: "relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10",
        children: _.jsxs("span", {
          className: "bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center",
          children: [_.jsx(ih, {
            className: "sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400"
          }), "Ready to Innovate"]
        })
      })]
    })
  })),
  aC = M.memo(() => _.jsx("div", {
    className: "space-y-2",
    "data-aos": "fade-up",
    "data-aos-delay": "600",
    children: _.jsxs("h1", {
      className: "text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight",
      children: [_.jsxs("span", {
        className: "relative inline-block",
        children: [_.jsx("span", {
          className: "absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"
        }), _.jsx("span", {
          className: "relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent",
          children: "Software"
        })]
      }), _.jsx("br", {}), _.jsxs("span", {
        className: "relative inline-block mt-2",
        children: [_.jsx("span", {
          className: "absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"
        }), _.jsx("span", {
          className: "relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent",
          children: "Engineer"
        })]
      })]
    })
  })),
  lC = M.memo(({
    tech: t
  }) => _.jsx("div", {
    className: " px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors",
    children: t
  })),
  Jp = M.memo(({
    href: t,
    text: e,
    icon: n
  }) => _.jsx("a", {
    href: t,
    children: _.jsxs("button", {
      className: "group relative w-[140px] xs:w-[160px]",
      children: [_.jsx("div", {
        className: "absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"
      }), _.jsxs("div", {
        className: "relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden",
        children: [_.jsx("div", {
          className: "absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"
        }), _.jsxs("span", {
          className: "absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300",
          children: [_.jsx("span", {
            className: "bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10",
            children: e
          }), _.jsx(n, {
            className: `w-4 h-4 text-gray-200 ${e==="Contact"?"group-hover:translate-x-1":"group-hover:rotate-45"} transform transition-all duration-300 z-10`
          })]
        })]
      })]
    })
  })),
  uC = M.memo(({
    icon: t,
    link: e
  }) => _.jsx("a", {
    href: e,
    target: "_blank",
    rel: "noopener noreferrer",
    children: _.jsxs("button", {
      className: "group relative p-3",
      children: [_.jsx("div", {
        className: "absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"
      }), _.jsx("div", {
        className: "relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300",
        children: _.jsx(t, {
          className: "w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
        })
      })]
    })
  })),
  cC = 100,
  dC = 50,
  hC = 2e3,
  h4 = ["Tech Enthusiast", "Full-Stack Web Developer", "Creative Coder", "UX Advocate", "Problem Solver"],
  fC = ["React JS", "Next JS", "Node JS", "Laravel"],
  pC = [{
    icon: h9,
    link: "https://github.com/masabqurban"
  }, {
    icon: ev,
    link: "https://www.linkedin.com/in/masab-qurban/"
  }, {
    icon: Zy,
    link: "https://www.instagram.com/masabqurban/"
  }],
  mC = () => {
    const [t, e] = M.useState(""), [n, r] = M.useState(!0), [i, a] = M.useState(0), [l, c] = M.useState(0), [h, p] = M.useState(!1), [m, y] = M.useState(!1);
    M.useEffect(() => {
      const P = () => {
        ko.init({
          once: !0,
          offset: 10
        })
      };
      return P(), window.addEventListener("resize", P), () => window.removeEventListener("resize", P)
    }, []), M.useEffect(() => (p(!0), () => p(!1)), []);
    const v = M.useCallback(() => {
      n ? l < h4[i].length ? (e(P => P + h4[i][l]), c(P => P + 1)) : setTimeout(() => r(!1), hC) : l > 0 ? (e(P => P.slice(0, -1)), c(P => P - 1)) : (a(P => (P + 1) % h4.length), r(!0))
    }, [l, n, i]);
    M.useEffect(() => {
      const P = setTimeout(v, n ? cC : dC);
      return () => clearTimeout(P)
    }, [v]);
    const C = {
      src: "https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie",
      loop: !0,
      autoplay: !0,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        progressiveLoad: !0
      },
      style: {
        width: "100%",
        height: "100%"
      },
      className: `w-full h-full transition-all duration-500 ${m?"scale-[180%] sm:scale-[160%] md:scale-[150%] lg:scale-[145%] rotate-2":"scale-[175%] sm:scale-[155%] md:scale-[145%] lg:scale-[140%]"}`
    };
    return _.jsx("div", {
      className: "px-0 md:px-5 min-h-screen bg-[#030014] overflow-hidden",
      id: "Home",
      children: _.jsx("div", {
        className: `relative z-10 transition-all duration-1000 ${h?"opacity-100":"opacity-0"}`,
        children: _.jsx("div", {
          className: "container mx-auto px-[5%] sm:px-6 lg:px-[0%] min-h-screen",
          children: _.jsxs("div", {
            className: "flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20",
            children: [_.jsx("div", {
              className: "w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 md:mt-36 lg:mt-0",
              "data-aos": "fade-right",
              "data-aos-delay": "200",
              children: _.jsxs("div", {
                className: "space-y-2 xs:space-y-4 sm:space-y-6",
                children: [_.jsx(oC, {}), _.jsx(aC, {}), _.jsxs("div", {
                  className: "h-8 flex items-center",
                  "data-aos": "fade-up",
                  "data-aos-delay": "800",
                  children: [_.jsx("span", {
                    className: "text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light",
                    children: t
                  }), _.jsx("span", {
                    className: "w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"
                  })]
                }), _.jsx("p", {
                  className: "text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light",
                  "data-aos": "fade-up",
                  "data-aos-delay": "1000",
                  children: "Building Modern, Full-Stack, and User-Centric Web Applications with Cutting-Edge Technologies."
                }), _.jsx("div", {
                  className: "flex flex-wrap gap-3 justify-start",
                  "data-aos": "fade-up",
                  "data-aos-delay": "1200",
                  children: fC.map((P, k) => _.jsx(lC, {
                    tech: P
                  }, k))
                }), _.jsxs("div", {
                  className: "flex flex-row gap-3 w-full justify-start",
                  "data-aos": "fade-up",
                  "data-aos-delay": "1400",
                  children: [_.jsx(Jp, {
                    href: "#Portofolio",
                    text: "Projects",
                    icon: O3
                  }), _.jsx(Jp, {
                    href: "#Contact",
                    text: "Contact",
                    icon: tv
                  })]
                }), _.jsx("div", {
                  className: "hidden sm:flex gap-4 justify-start",
                  "data-aos": "fade-up",
                  "data-aos-delay": "1600",
                  children: pC.map((P, k) => _.jsx(uC, {
                    ...P
                  }, k))
                })]
              })
            }), _.jsx("div", {
              className: "w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0",
              onMouseEnter: () => y(!0),
              onMouseLeave: () => y(!1),
              "data-aos": "fade-left",
              "data-aos-delay": "600",
              children: _.jsxs("div", {
                className: "relative w-full opacity-90",
                children: [_.jsx("div", {
                  className: `absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-3xl transition-all duration-700 ease-in-out ${m?"opacity-50 scale-105":"opacity-20 scale-100"}`
                }), _.jsx("div", {
                  className: `relative z-10 w-full opacity-90 transform transition-transform duration-500 ${m?"scale-105":"scale-100"}`,
                  children: _.jsx(nC, {
                    ...C
                  })
                }), _.jsx("div", {
                  className: `absolute inset-0 pointer-events-none transition-all duration-700 ${m?"opacity-50":"opacity-20"}`,
                  children: _.jsx("div", {
                    className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 ${m?"scale-110":"scale-100"}`
                  })
                })]
              })
            })]
          })
        })
      })
    })
  },
  gC = M.memo(mC),
  yC = () => {};
var Zp = {};
/**
 * @license
 * Copyright 2017 Google LLC
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
const mv = function(t) {
    const e = [];
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      let i = t.charCodeAt(r);
      i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = i >> 6 | 192, e[n++] = i & 63 | 128) : (i & 64512) === 55296 && r + 1 < t.length && (t.charCodeAt(r + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023), e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128) : (e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128)
    }
    return e
  },
  vC = function(t) {
    const e = [];
    let n = 0,
      r = 0;
    for (; n < t.length;) {
      const i = t[n++];
      if (i < 128) e[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const a = t[n++];
        e[r++] = String.fromCharCode((i & 31) << 6 | a & 63)
      } else if (i > 239 && i < 365) {
        const a = t[n++],
          l = t[n++],
          c = t[n++],
          h = ((i & 7) << 18 | (a & 63) << 12 | (l & 63) << 6 | c & 63) - 65536;
        e[r++] = String.fromCharCode(55296 + (h >> 10)), e[r++] = String.fromCharCode(56320 + (h & 1023))
      } else {
        const a = t[n++],
          l = t[n++];
        e[r++] = String.fromCharCode((i & 15) << 12 | (a & 63) << 6 | l & 63)
      }
    }
    return e.join("")
  },
  gv = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/="
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_."
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(t, e) {
      if (!Array.isArray(t)) throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < t.length; i += 3) {
        const a = t[i],
          l = i + 1 < t.length,
          c = l ? t[i + 1] : 0,
          h = i + 2 < t.length,
          p = h ? t[i + 2] : 0,
          m = a >> 2,
          y = (a & 3) << 4 | c >> 4;
        let v = (c & 15) << 2 | p >> 6,
          C = p & 63;
        h || (C = 64, l || (v = 64)), r.push(n[m], n[y], n[v], n[C])
      }
      return r.join("")
    },
    encodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(mv(t), e)
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : vC(this.decodeStringToByteArray(t, e))
    },
    decodeStringToByteArray(t, e) {
      this.init_();
      const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < t.length;) {
        const a = n[t.charAt(i++)],
          c = i < t.length ? n[t.charAt(i)] : 0;
        ++i;
        const p = i < t.length ? n[t.charAt(i)] : 64;
        ++i;
        const y = i < t.length ? n[t.charAt(i)] : 64;
        if (++i, a == null || c == null || p == null || y == null) throw new wC;
        const v = a << 2 | c >> 4;
        if (r.push(v), p !== 64) {
          const C = c << 4 & 240 | p >> 2;
          if (r.push(C), y !== 64) {
            const P = p << 6 & 192 | y;
            r.push(P)
          }
        }
      }
      return r
    },
    init_() {
      if (!this.byteToCharMap_) {
        this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
        for (let t = 0; t < this.ENCODED_VALS.length; t++) this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t, t >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t)
      }
    }
  };
class wC extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError"
  }
}
const bC = function(t) {
    const e = mv(t);
    return gv.encodeByteArray(e, !0)
  },
  fu = function(t) {
    return bC(t).replace(/\./g, "")
  },
  _C = function(t) {
    try {
      return gv.decodeString(t, !0)
    } catch (e) {
      console.error("base64Decode failed: ", e)
    }
    return null
  };
/**
 * @license
 * Copyright 2022 Google LLC
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
function xC() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.")
}
/**
 * @license
 * Copyright 2022 Google LLC
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
const SC = () => xC().__FIREBASE_DEFAULTS__,
  EC = () => {
    if (typeof process > "u" || typeof Zp > "u") return;
    const t = Zp.__FIREBASE_DEFAULTS__;
    if (t) return JSON.parse(t)
  },
  TC = () => {
    if (typeof document > "u") return;
    let t;
    try {
      t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
    } catch {
      return
    }
    const e = t && _C(t[1]);
    return e && JSON.parse(e)
  },
  p9 = () => {
    try {
      return yC() || SC() || EC() || TC()
    } catch (t) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
      return
    }
  },
  CC = t => {
    var e, n;
    return (n = (e = p9()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null || n === void 0 ? void 0 : n[t]
  },
  yv = t => {
    const e = CC(t);
    if (!e) return;
    const n = e.lastIndexOf(":");
    if (n <= 0 || n + 1 === e.length) throw new Error(`Invalid host ${e} with no separate hostname and port!`);
    const r = parseInt(e.substring(n + 1), 10);
    return e[0] === "[" ? [e.substring(1, n - 1), r] : [e.substring(0, n), r]
  },
  vv = () => {
    var t;
    return (t = p9()) === null || t === void 0 ? void 0 : t.config
  };
/**
 * @license
 * Copyright 2017 Google LLC
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
class kC {
  constructor() {
    this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise((e, n) => {
      this.resolve = e, this.reject = n
    })
  }
  wrapCallback(e) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r), typeof e == "function" && (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, r))
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
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
function c0(t) {
  try {
    return (t.startsWith("http://") || t.startsWith("https://") ? new URL(t).hostname : t).endsWith(".cloudworkstations.dev")
  } catch {
    return !1
  }
}
async function wv(t) {
  return (await fetch(t, {
    credentials: "include"
  })).ok
}
/**
 * @license
 * Copyright 2021 Google LLC
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
function bv(t, e) {
  if (t.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
  const n = {
      alg: "none",
      type: "JWT"
    },
    r = e || "demo-project",
    i = t.iat || 0,
    a = t.sub || t.user_id;
  if (!a) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const l = Object.assign({
    iss: `https://securetoken.google.com/${r}`,
    aud: r,
    iat: i,
    exp: i + 3600,
    auth_time: i,
    sub: a,
    user_id: a,
    firebase: {
      sign_in_provider: "custom",
      identities: {}
    }
  }, t);
  return [fu(JSON.stringify(n)), fu(JSON.stringify(l)), ""].join(".")
}
const Ia = {};

function PC() {
  const t = {
    prod: [],
    emulator: []
  };
  for (const e of Object.keys(Ia)) Ia[e] ? t.emulator.push(e) : t.prod.push(e);
  return t
}

function AC(t) {
  let e = document.getElementById(t),
    n = !1;
  return e || (e = document.createElement("div"), e.setAttribute("id", t), n = !0), {
    created: n,
    element: e
  }
}
let em = !1;

function _v(t, e) {
  if (typeof window > "u" || typeof document > "u" || !c0(window.location.host) || Ia[t] === e || Ia[t] || em) return;
  Ia[t] = e;

  function n(v) {
    return `__firebase__banner__${v}`
  }
  const r = "__firebase__banner",
    a = PC().prod.length > 0;

  function l() {
    const v = document.getElementById(r);
    v && v.remove()
  }

  function c(v) {
    v.style.display = "flex", v.style.background = "#7faaf0", v.style.position = "fixed", v.style.bottom = "5px", v.style.left = "5px", v.style.padding = ".5em", v.style.borderRadius = "5px", v.style.alignItems = "center"
  }

  function h(v, C) {
    v.setAttribute("width", "24"), v.setAttribute("id", C), v.setAttribute("height", "24"), v.setAttribute("viewBox", "0 0 24 24"), v.setAttribute("fill", "none"), v.style.marginLeft = "-6px"
  }

  function p() {
    const v = document.createElement("span");
    return v.style.cursor = "pointer", v.style.marginLeft = "16px", v.style.fontSize = "24px", v.innerHTML = " &times;", v.onclick = () => {
      em = !0, l()
    }, v
  }

  function m(v, C) {
    v.setAttribute("id", C), v.innerText = "Learn more", v.href = "https://firebase.google.com/docs/studio/preview-apps#preview-backend", v.setAttribute("target", "__blank"), v.style.paddingLeft = "5px", v.style.textDecoration = "underline"
  }

  function y() {
    const v = AC(r),
      C = n("text"),
      P = document.getElementById(C) || document.createElement("span"),
      k = n("learnmore"),
      R = document.getElementById(k) || document.createElement("a"),
      W = n("preprendIcon"),
      q = document.getElementById(W) || document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (v.created) {
      const U = v.element;
      c(U), m(R, k);
      const H = p();
      h(q, W), U.append(q, P, R, H), document.body.appendChild(U)
    }
    a ? (P.innerText = "Preview backend disconnected.", q.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`) : (q.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`, P.innerText = "Preview backend running in this workspace."), P.setAttribute("id", C)
  }
  document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", y) : y()
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function IC() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : ""
}

function RC() {
  var t;
  const e = (t = p9()) === null || t === void 0 ? void 0 : t.forceEnvironment;
  if (e === "node") return !0;
  if (e === "browser") return !1;
  try {
    return Object.prototype.toString.call(global.process) === "[object process]"
  } catch {
    return !1
  }
}

function NC() {
  return !RC() && !!navigator.userAgent && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")
}

function LC() {
  try {
    return typeof indexedDB == "object"
  } catch {
    return !1
  }
}

function MC() {
  return new Promise((t, e) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0)
      }, i.onupgradeneeded = () => {
        n = !1
      }, i.onerror = () => {
        var a;
        e(((a = i.error) === null || a === void 0 ? void 0 : a.message) || "")
      }
    } catch (n) {
      e(n)
    }
  })
}
/**
 * @license
 * Copyright 2017 Google LLC
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
const DC = "FirebaseError";
class ns extends Error {
  constructor(e, n, r) {
    super(n), this.code = e, this.customData = r, this.name = DC, Object.setPrototypeOf(this, ns.prototype), Error.captureStackTrace && Error.captureStackTrace(this, xv.prototype.create)
  }
}
class xv {
  constructor(e, n, r) {
    this.service = e, this.serviceName = n, this.errors = r
  }
  create(e, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${e}`,
      a = this.errors[e],
      l = a ? OC(a, r) : "Error",
      c = `${this.serviceName}: ${l} (${i}).`;
    return new ns(i, c, r)
  }
}

function OC(t, e) {
  return t.replace(jC, (n, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`
  })
}
const jC = /\{\$([^}]+)}/g;

function pu(t, e) {
  if (t === e) return !0;
  const n = Object.keys(t),
    r = Object.keys(e);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const a = t[i],
      l = e[i];
    if (tm(a) && tm(l)) {
      if (!pu(a, l)) return !1
    } else if (a !== l) return !1
  }
  for (const i of r)
    if (!n.includes(i)) return !1;
  return !0
}

function tm(t) {
  return t !== null && typeof t == "object"
}
/**
 * @license
 * Copyright 2021 Google LLC
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
function s2(t) {
  return t && t._delegate ? t._delegate : t
}
class po {
  constructor(e, n, r) {
    this.name = e, this.instanceFactory = n, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
  }
  setInstantiationMode(e) {
    return this.instantiationMode = e, this
  }
  setMultipleInstances(e) {
    return this.multipleInstances = e, this
  }
  setServiceProps(e) {
    return this.serviceProps = e, this
  }
  setInstanceCreatedCallback(e) {
    return this.onInstanceCreated = e, this
  }
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
const I3 = "[DEFAULT]";
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
class VC {
  constructor(e, n) {
    this.name = e, this.container = n, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
  }
  get(e) {
    const n = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(n)) {
      const r = new kC;
      if (this.instancesDeferred.set(n, r), this.isInitialized(n) || this.shouldAutoInitialize()) try {
        const i = this.getOrInitializeService({
          instanceIdentifier: n
        });
        i && r.resolve(i)
      } catch {}
    }
    return this.instancesDeferred.get(n).promise
  }
  getImmediate(e) {
    var n;
    const r = this.normalizeInstanceIdentifier(e == null ? void 0 : e.identifier),
      i = (n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize()) try {
      return this.getOrInitializeService({
        instanceIdentifier: r
      })
    } catch (a) {
      if (i) return null;
      throw a
    } else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`)
    }
  }
  getComponent() {
    return this.component
  }
  setComponent(e) {
    if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component) throw Error(`Component for ${this.name} has already been provided`);
    if (this.component = e, !!this.shouldAutoInitialize()) {
      if (BC(e)) try {
        this.getOrInitializeService({
          instanceIdentifier: I3
        })
      } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const a = this.getOrInitializeService({
            instanceIdentifier: i
          });
          r.resolve(a)
        } catch {}
      }
    }
  }
  clearInstance(e = I3) {
    this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
  }
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([...e.filter(n => "INTERNAL" in n).map(n => n.INTERNAL.delete()), ...e.filter(n => "_delete" in n).map(n => n._delete())])
  }
  isComponentSet() {
    return this.component != null
  }
  isInitialized(e = I3) {
    return this.instances.has(e)
  }
  getOptions(e = I3) {
    return this.instancesOptions.get(e) || {}
  }
  initialize(e = {}) {
    const {
      options: n = {}
    } = e, r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r)) throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n
    });
    for (const [a, l] of this.instancesDeferred.entries()) {
      const c = this.normalizeInstanceIdentifier(a);
      r === c && l.resolve(i)
    }
    return i
  }
  onInit(e, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      a = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : new Set;
    a.add(e), this.onInitCallbacks.set(i, a);
    const l = this.instances.get(i);
    return l && e(l, i), () => {
      a.delete(e)
    }
  }
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r) try {
        i(e, n)
      } catch {}
  }
  getOrInitializeService({
    instanceIdentifier: e,
    options: n = {}
  }) {
    let r = this.instances.get(e);
    if (!r && this.component && (r = this.component.instanceFactory(this.container, {
        instanceIdentifier: FC(e),
        options: n
      }), this.instances.set(e, r), this.instancesOptions.set(e, n), this.invokeOnInitCallbacks(r, e), this.component.onInstanceCreated)) try {
      this.component.onInstanceCreated(this.container, e, r)
    } catch {}
    return r || null
  }
  normalizeInstanceIdentifier(e = I3) {
    return this.component ? this.component.multipleInstances ? e : I3 : e
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT"
  }
}

function FC(t) {
  return t === I3 ? void 0 : t
}

function BC(t) {
  return t.instantiationMode === "EAGER"
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
class $C {
  constructor(e) {
    this.name = e, this.providers = new Map
  }
  addComponent(e) {
    const n = this.getProvider(e.name);
    if (n.isComponentSet()) throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
    n.setComponent(e)
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    const n = new VC(e, this);
    return this.providers.set(e, n), n
  }
  getProviders() {
    return Array.from(this.providers.values())
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var De;
(function(t) {
  t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT"
})(De || (De = {}));
const zC = {
    debug: De.DEBUG,
    verbose: De.VERBOSE,
    info: De.INFO,
    warn: De.WARN,
    error: De.ERROR,
    silent: De.SILENT
  },
  UC = De.INFO,
  WC = {
    [De.DEBUG]: "log",
    [De.VERBOSE]: "log",
    [De.INFO]: "info",
    [De.WARN]: "warn",
    [De.ERROR]: "error"
  },
  HC = (t, e, ...n) => {
    if (e < t.logLevel) return;
    const r = new Date().toISOString(),
      i = WC[e];
    if (i) console[i](`[${r}]  ${t.name}:`, ...n);
    else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)
  };
class Sv {
  constructor(e) {
    this.name = e, this._logLevel = UC, this._logHandler = HC, this._userLogHandler = null
  }
  get logLevel() {
    return this._logLevel
  }
  set logLevel(e) {
    if (!(e in De)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e
  }
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? zC[e] : e
  }
  get logHandler() {
    return this._logHandler
  }
  set logHandler(e) {
    if (typeof e != "function") throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e
  }
  get userLogHandler() {
    return this._userLogHandler
  }
  set userLogHandler(e) {
    this._userLogHandler = e
  }
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, De.DEBUG, ...e), this._logHandler(this, De.DEBUG, ...e)
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, De.VERBOSE, ...e), this._logHandler(this, De.VERBOSE, ...e)
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, De.INFO, ...e), this._logHandler(this, De.INFO, ...e)
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, De.WARN, ...e), this._logHandler(this, De.WARN, ...e)
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, De.ERROR, ...e), this._logHandler(this, De.ERROR, ...e)
  }
}
const qC = (t, e) => e.some(n => t instanceof n);
let nm, rm;

function GC() {
  return nm || (nm = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
}

function KC() {
  return rm || (rm = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
}
const Ev = new WeakMap,
  ah = new WeakMap,
  Tv = new WeakMap,
  f4 = new WeakMap,
  m9 = new WeakMap;

function QC(t) {
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("success", a), t.removeEventListener("error", l)
      },
      a = () => {
        n(Hi(t.result)), i()
      },
      l = () => {
        r(t.error), i()
      };
    t.addEventListener("success", a), t.addEventListener("error", l)
  });
  return e.then(n => {
    n instanceof IDBCursor && Ev.set(n, t)
  }).catch(() => {}), m9.set(e, t), e
}

function YC(t) {
  if (ah.has(t)) return;
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("complete", a), t.removeEventListener("error", l), t.removeEventListener("abort", l)
      },
      a = () => {
        n(), i()
      },
      l = () => {
        r(t.error || new DOMException("AbortError", "AbortError")), i()
      };
    t.addEventListener("complete", a), t.addEventListener("error", l), t.addEventListener("abort", l)
  });
  ah.set(t, e)
}
let lh = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done") return ah.get(t);
      if (e === "objectStoreNames") return t.objectStoreNames || Tv.get(t);
      if (e === "store") return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
    }
    return Hi(t[e])
  },
  set(t, e, n) {
    return t[e] = n, !0
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t
  }
};

function XC(t) {
  lh = t(lh)
}

function JC(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...n) {
    const r = t.call(p4(this), e, ...n);
    return Tv.set(r, e.sort ? e.sort() : [e]), Hi(r)
  } : KC().includes(t) ? function(...e) {
    return t.apply(p4(this), e), Hi(Ev.get(this))
  } : function(...e) {
    return Hi(t.apply(p4(this), e))
  }
}

function ZC(t) {
  return typeof t == "function" ? JC(t) : (t instanceof IDBTransaction && YC(t), qC(t, GC()) ? new Proxy(t, lh) : t)
}

function Hi(t) {
  if (t instanceof IDBRequest) return QC(t);
  if (f4.has(t)) return f4.get(t);
  const e = ZC(t);
  return e !== t && (f4.set(t, e), m9.set(e, t)), e
}
const p4 = t => m9.get(t);

function ek(t, e, {
  blocked: n,
  upgrade: r,
  blocking: i,
  terminated: a
} = {}) {
  const l = indexedDB.open(t, e),
    c = Hi(l);
  return r && l.addEventListener("upgradeneeded", h => {
    r(Hi(l.result), h.oldVersion, h.newVersion, Hi(l.transaction), h)
  }), n && l.addEventListener("blocked", h => n(h.oldVersion, h.newVersion, h)), c.then(h => {
    a && h.addEventListener("close", () => a()), i && h.addEventListener("versionchange", p => i(p.oldVersion, p.newVersion, p))
  }).catch(() => {}), c
}
const tk = ["get", "getKey", "getAll", "getAllKeys", "count"],
  nk = ["put", "add", "delete", "clear"],
  m4 = new Map;

function im(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string")) return;
  if (m4.get(e)) return m4.get(e);
  const n = e.replace(/FromIndex$/, ""),
    r = e !== n,
    i = nk.includes(n);
  if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || tk.includes(n))) return;
  const a = async function(l, ...c) {
    const h = this.transaction(l, i ? "readwrite" : "readonly");
    let p = h.store;
    return r && (p = p.index(c.shift())), (await Promise.all([p[n](...c), i && h.done]))[0]
  };
  return m4.set(e, a), a
}
XC(t => ({
  ...t,
  get: (e, n, r) => im(e, n) || t.get(e, n, r),
  has: (e, n) => !!im(e, n) || t.has(e, n)
}));
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
class rk {
  constructor(e) {
    this.container = e
  }
  getPlatformInfoString() {
    return this.container.getProviders().map(n => {
      if (ik(n)) {
        const r = n.getImmediate();
        return `${r.library}/${r.version}`
      } else return null
    }).filter(n => n).join(" ")
  }
}

function ik(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION"
}
const uh = "@firebase/app",
  sm = "0.13.2";
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
const ui = new Sv("@firebase/app"),
  sk = "@firebase/app-compat",
  ok = "@firebase/analytics-compat",
  ak = "@firebase/analytics",
  lk = "@firebase/app-check-compat",
  uk = "@firebase/app-check",
  ck = "@firebase/auth",
  dk = "@firebase/auth-compat",
  hk = "@firebase/database",
  fk = "@firebase/data-connect",
  pk = "@firebase/database-compat",
  mk = "@firebase/functions",
  gk = "@firebase/functions-compat",
  yk = "@firebase/installations",
  vk = "@firebase/installations-compat",
  wk = "@firebase/messaging",
  bk = "@firebase/messaging-compat",
  _k = "@firebase/performance",
  xk = "@firebase/performance-compat",
  Sk = "@firebase/remote-config",
  Ek = "@firebase/remote-config-compat",
  Tk = "@firebase/storage",
  Ck = "@firebase/storage-compat",
  kk = "@firebase/firestore",
  Pk = "@firebase/ai",
  Ak = "@firebase/firestore-compat",
  Ik = "firebase",
  Rk = "11.10.0";
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
const ch = "[DEFAULT]",
  Nk = {
    [uh]: "fire-core",
    [sk]: "fire-core-compat",
    [ak]: "fire-analytics",
    [ok]: "fire-analytics-compat",
    [uk]: "fire-app-check",
    [lk]: "fire-app-check-compat",
    [ck]: "fire-auth",
    [dk]: "fire-auth-compat",
    [hk]: "fire-rtdb",
    [fk]: "fire-data-connect",
    [pk]: "fire-rtdb-compat",
    [mk]: "fire-fn",
    [gk]: "fire-fn-compat",
    [yk]: "fire-iid",
    [vk]: "fire-iid-compat",
    [wk]: "fire-fcm",
    [bk]: "fire-fcm-compat",
    [_k]: "fire-perf",
    [xk]: "fire-perf-compat",
    [Sk]: "fire-rc",
    [Ek]: "fire-rc-compat",
    [Tk]: "fire-gcs",
    [Ck]: "fire-gcs-compat",
    [kk]: "fire-fst",
    [Ak]: "fire-fst-compat",
    [Pk]: "fire-vertex",
    "fire-js": "fire-js",
    [Ik]: "fire-js-all"
  };
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
const mu = new Map,
  Lk = new Map,
  dh = new Map;

function om(t, e) {
  try {
    t.container.addComponent(e)
  } catch (n) {
    ui.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, n)
  }
}

function Wa(t) {
  const e = t.name;
  if (dh.has(e)) return ui.debug(`There were multiple attempts to register component ${e}.`), !1;
  dh.set(e, t);
  for (const n of mu.values()) om(n, t);
  for (const n of Lk.values()) om(n, t);
  return !0
}

function Cv(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({
    optional: !0
  });
  return n && n.triggerHeartbeat(), t.container.getProvider(e)
}

function kv(t) {
  return t == null ? !1 : t.settings !== void 0
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
const Mk = {
    "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options": "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument": "First argument to `onLog` must be null or a function.",
    "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
  },
  qi = new xv("app", "Firebase", Mk);
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
class Dk {
  constructor(e, n, r) {
    this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, n), this._name = n.name, this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled, this._container = r, this.container.addComponent(new po("app", () => this, "PUBLIC"))
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), this._automaticDataCollectionEnabled = e
  }
  get name() {
    return this.checkDestroyed(), this._name
  }
  get options() {
    return this.checkDestroyed(), this._options
  }
  get config() {
    return this.checkDestroyed(), this._config
  }
  get container() {
    return this._container
  }
  get isDeleted() {
    return this._isDeleted
  }
  set isDeleted(e) {
    this._isDeleted = e
  }
  checkDestroyed() {
    if (this.isDeleted) throw qi.create("app-deleted", {
      appName: this._name
    })
  }
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
const Pv = Rk;

function g9(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = {
    name: e
  });
  const r = Object.assign({
      name: ch,
      automaticDataCollectionEnabled: !0
    }, e),
    i = r.name;
  if (typeof i != "string" || !i) throw qi.create("bad-app-name", {
    appName: String(i)
  });
  if (n || (n = vv()), !n) throw qi.create("no-options");
  const a = mu.get(i);
  if (a) {
    if (pu(n, a.options) && pu(r, a.config)) return a;
    throw qi.create("duplicate-app", {
      appName: i
    })
  }
  const l = new $C(i);
  for (const h of dh.values()) l.addComponent(h);
  const c = new Dk(n, r, l);
  return mu.set(i, c), c
}

function Av(t = ch) {
  const e = mu.get(t);
  if (!e && t === ch && vv()) return g9();
  if (!e) throw qi.create("no-app", {
    appName: t
  });
  return e
}

function Gi(t, e, n) {
  var r;
  let i = (r = Nk[t]) !== null && r !== void 0 ? r : t;
  n && (i += `-${n}`);
  const a = i.match(/\s|\//),
    l = e.match(/\s|\//);
  if (a || l) {
    const c = [`Unable to register library "${i}" with version "${e}":`];
    a && c.push(`library name "${i}" contains illegal characters (whitespace or "/")`), a && l && c.push("and"), l && c.push(`version name "${e}" contains illegal characters (whitespace or "/")`), ui.warn(c.join(" "));
    return
  }
  Wa(new po(`${i}-version`, () => ({
    library: i,
    version: e
  }), "VERSION"))
}
/**
 * @license
 * Copyright 2021 Google LLC
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
const Ok = "firebase-heartbeat-database",
  jk = 1,
  Ha = "firebase-heartbeat-store";
let g4 = null;

function Iv() {
  return g4 || (g4 = ek(Ok, jk, {
    upgrade: (t, e) => {
      switch (e) {
        case 0:
          try {
            t.createObjectStore(Ha)
          } catch (n) {
            console.warn(n)
          }
      }
    }
  }).catch(t => {
    throw qi.create("idb-open", {
      originalErrorMessage: t.message
    })
  })), g4
}
async function Vk(t) {
  try {
    const n = (await Iv()).transaction(Ha),
      r = await n.objectStore(Ha).get(Rv(t));
    return await n.done, r
  } catch (e) {
    if (e instanceof ns) ui.warn(e.message);
    else {
      const n = qi.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message
      });
      ui.warn(n.message)
    }
  }
}
async function am(t, e) {
  try {
    const r = (await Iv()).transaction(Ha, "readwrite");
    await r.objectStore(Ha).put(e, Rv(t)), await r.done
  } catch (n) {
    if (n instanceof ns) ui.warn(n.message);
    else {
      const r = qi.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message
      });
      ui.warn(r.message)
    }
  }
}

function Rv(t) {
  return `${t.name}!${t.options.appId}`
}
/**
 * @license
 * Copyright 2021 Google LLC
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
const Fk = 1024,
  Bk = 30;
class $k {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const n = this.container.getProvider("app").getImmediate();
    this._storage = new Uk(n), this._heartbeatsCachePromise = this._storage.read().then(r => (this._heartbeatsCache = r, r))
  }
  async triggerHeartbeat() {
    var e, n;
    try {
      const i = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
        a = lm();
      if (((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, ((n = this._heartbeatsCache) === null || n === void 0 ? void 0 : n.heartbeats) == null) || this._heartbeatsCache.lastSentHeartbeatDate === a || this._heartbeatsCache.heartbeats.some(l => l.date === a)) return;
      if (this._heartbeatsCache.heartbeats.push({
          date: a,
          agent: i
        }), this._heartbeatsCache.heartbeats.length > Bk) {
        const l = Wk(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(l, 1)
      }
      return this._storage.overwrite(this._heartbeatsCache)
    } catch (r) {
      ui.warn(r)
    }
  }
  async getHeartbeatsHeader() {
    var e;
    try {
      if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, ((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0) return "";
      const n = lm(),
        {
          heartbeatsToSend: r,
          unsentEntries: i
        } = zk(this._heartbeatsCache.heartbeats),
        a = fu(JSON.stringify({
          version: 2,
          heartbeats: r
        }));
      return this._heartbeatsCache.lastSentHeartbeatDate = n, i.length > 0 ? (this._heartbeatsCache.heartbeats = i, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), a
    } catch (n) {
      return ui.warn(n), ""
    }
  }
}

function lm() {
  return new Date().toISOString().substring(0, 10)
}

function zk(t, e = Fk) {
  const n = [];
  let r = t.slice();
  for (const i of t) {
    const a = n.find(l => l.agent === i.agent);
    if (a) {
      if (a.dates.push(i.date), um(n) > e) {
        a.dates.pop();
        break
      }
    } else if (n.push({
        agent: i.agent,
        dates: [i.date]
      }), um(n) > e) {
      n.pop();
      break
    }
    r = r.slice(1)
  }
  return {
    heartbeatsToSend: n,
    unsentEntries: r
  }
}
class Uk {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
  }