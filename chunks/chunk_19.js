
function lj(t, e) {
  return t = s2(t), ij(t, e)
}

function uj(t = Av(), e) {
  t = s2(t);
  const r = Cv(t, vb).getImmediate({
      identifier: e
    }),
    i = yv("storage");
  return i && cj(r, ...i), r
}

function cj(t, e, n, r = {}) {
  sj(t, e, n, r)
}

function dj(t, {
  instanceIdentifier: e
}) {
  const n = t.getProvider("app").getImmediate(),
    r = t.getProvider("auth-internal"),
    i = t.getProvider("app-check-internal");
  return new Ef(n, r, i, e, Pv)
}

function hj() {
  Wa(new po(vb, dj, "PUBLIC").setMultipleInstances(!0)), Gi(i7, s7, ""), Gi(i7, s7, "esm2017")
}
hj();
const fj = {
    apiKey: "AIzaSyBoNZmyP3oBhF9NZLa46UuaDDmRmeDfT6c",
    authDomain: "portfolio-2900b.firebaseapp.com",
    projectId: "portfolio-2900b",
    storageBucket: "portfolio-2900b.firebasestorage.app",
    messagingSenderId: "981368026218",
    appId: "1:981368026218:web:1616710ad45c433dec8613",
    measurementId: "G-VDYNNXW8CV"
  },
  wb = g9(fj, "portfolio-2900b-70b95"),
  o7 = J8(wb),
  pj = uj(wb),
  mj = M.memo(({
    comment: t,
    formatDate: e,
    index: n
  }) => _.jsx("div", {
    className: "px-4 pt-4 pb-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group hover:shadow-lg hover:-translate-y-0.5",
    children: _.jsxs("div", {
      className: "flex items-start gap-3 ",
      children: [t.profileImage ? _.jsx("img", {
        src: t.profileImage,
        alt: `${t.userName}'s profile`,
        className: "w-10 h-10 rounded-full object-cover border-2 border-indigo-500/30",
        loading: "lazy"
      }) : _.jsx("div", {
        className: "p-2 rounded-full bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/30 transition-colors",
        children: _.jsx(Xy, {
          className: "w-5 h-5"
        })
      }), _.jsxs("div", {
        className: "flex-grow min-w-0",
        children: [_.jsxs("div", {
          className: "flex items-center justify-between gap-4 mb-2",
          children: [_.jsx("h4", {
            className: "font-medium text-white truncate",
            children: t.userName
          }), _.jsx("span", {
            className: "text-xs text-gray-400 whitespace-nowrap",
            children: e(t.createdAt)
          })]
        }), _.jsx("p", {
          className: "text-gray-300 text-sm break-words leading-relaxed relative bottom-2",
          children: t.content
        })]
      })]
    })
  })),
  gj = M.memo(({
    onSubmit: t,
    isSubmitting: e,
    error: n
  }) => {
    const [r, i] = M.useState(""), [a, l] = M.useState(""), [c, h] = M.useState(null), [p, m] = M.useState(null), y = M.useRef(null), v = M.useRef(null);
    M.useCallback(k => {
      const R = k.target.files[0];
      if (R) {
        if (R.size > 5 * 1024 * 1024) return;
        m(R);
        const W = new FileReader;
        W.onloadend = () => h(W.result), W.readAsDataURL(R)
      }
    }, []);
    const C = M.useCallback(k => {
        i(k.target.value), y.current && (y.current.style.height = "auto", y.current.style.height = `${y.current.scrollHeight}px`)
      }, []),
      P = M.useCallback(k => {
        k.preventDefault(), !(!r.trim() || !a.trim()) && (t({
          newComment: r,
          userName: a,
          imageFile: p
        }), i(""), h(null), m(null), v.current && (v.current.value = ""), y.current && (y.current.style.height = "auto"))
      }, [r, a, p, t]);
    return _.jsxs("form", {
      onSubmit: P,
      className: "space-y-6",
      children: [_.jsxs("div", {
        className: "space-y-2",
        "data-aos": "fade-up",
        "data-aos-duration": "1000",
        children: [_.jsxs("label", {
          className: "block text-sm font-medium text-white",
          children: ["Name ", _.jsx("span", {
            className: "text-red-400",
            children: "*"
          })]
        }), _.jsx("input", {
          type: "text",
          value: a,
          onChange: k => l(k.target.value),
          z: !0,
          placeholder: "Enter your name",
          className: "w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all",
          required: !0
        })]
      }), _.jsxs("div", {
        className: "space-y-2",
        "data-aos": "fade-up",
        "data-aos-duration": "1200",
        children: [_.jsxs("label", {
          className: "block text-sm font-medium text-white",
          children: ["Message ", _.jsx("span", {
            className: "text-red-400",
            children: "*"
          })]
        }), _.jsx("textarea", {
          ref: y,
          value: r,
          onChange: C,
          placeholder: "Write your message here...",
          className: "w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none min-h-[120px]",
          required: !0
        })]
      }), _.jsxs("button", {
        type: "submit",
        disabled: e,
        "data-aos": "fade-up",
        "data-aos-duration": "1000",
        className: "relative w-full h-12 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl font-medium text-white overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed",
        children: [_.jsx("div", {
          className: "absolute inset-0 bg-white/20 translate-y-12 group-hover:translate-y-0 transition-transform duration-300"
        }), _.jsx("div", {
          className: "relative flex items-center justify-center gap-2",
          children: e ? _.jsxs(_.Fragment, {
            children: [_.jsx(TT, {
              className: "w-4 h-4 animate-spin"
            }), _.jsx("span", {
              children: "Posting..."
            })]
          }) : _.jsxs(_.Fragment, {
            children: [_.jsx(nv, {
              className: "w-4 h-4"
            }), _.jsx("span", {
              children: "Post Comment"
            })]
          })
        })]
      })]
    })
  }),
  yj = () => {
    const [t, e] = M.useState([]), [n, r] = M.useState(!1), [i, a] = M.useState("");
    M.useEffect(() => {
      ko.init({
        once: !1,
        duration: 1e3
      })
    }, []), M.useEffect(() => {
      const p = og(o7, "portfolio-comments"),
        m = rR(p, iR("createdAt", "desc"));
      return uR(m, y => {
        const v = y.docs.map(C => ({
          id: C.id,
          ...C.data()
        }));
        e(v)
      })
    }, []);
    const l = M.useCallback(async p => {
        if (!p) return null;
        const m = lj(pj, `profile-images/${Date.now()}_${p.name}`);
        return await oj(m, p), aj(m)
      }, []),
      c = M.useCallback(async ({
        newComment: p,
        userName: m,
        imageFile: y
      }) => {
        a(""), r(!0);
        try {
          const v = await l(y);
          await lR(og(o7, "portfolio-comments"), {
            content: p,
            userName: m,
            profileImage: v,
            createdAt: hR()
          })
        } catch (v) {
          a("Failed to post comment. Please try again."), console.error("Error adding comment: ", v)
        } finally {
          r(!1)
        }
      }, [l]),
      h = M.useCallback(p => {
        if (!p) return "";
        const m = p.toDate(),
          v = Math.floor((new Date - m) / (1e3 * 60)),
          C = Math.floor(v / 60),
          P = Math.floor(C / 24);
        return v < 1 ? "Just now" : v < 60 ? `${v}m ago` : C < 24 ? `${C}h ago` : P < 7 ? `${P}d ago` : new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        }).format(m)
      }, []);
    return _.jsxs("div", {
      className: "w-full bg-gradient-to-b from-white/10 to-white/5 rounded-2xl overflow-hidden backdrop-blur-xl shadow-xl",
      "data-aos": "fade-up",
      "data-aos-duration": "1000",
      children: [_.jsx("div", {
        className: "p-6 border-b border-white/10",
        "data-aos": "fade-down",
        "data-aos-duration": "800",
        children: _.jsxs("div", {
          className: "flex items-center gap-3",
          children: [_.jsx("div", {
            className: "p-2 rounded-xl bg-indigo-500/20",
            children: _.jsx(kT, {
              className: "w-6 h-6 text-indigo-400"
            })
          }), _.jsxs("h3", {
            className: "text-xl font-semibold text-white",
            children: ["Comments ", _.jsxs("span", {
              className: "text-indigo-400",
              children: ["(", t.length, ")"]
            })]
          })]
        })
      }), _.jsxs("div", {
        className: "p-6 space-y-6",
        children: [i && _.jsxs("div", {
          className: "flex items-center gap-2 p-4 text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl",
          "data-aos": "fade-in",
          children: [_.jsx(bT, {
            className: "w-5 h-5 flex-shrink-0"
          }), _.jsx("p", {
            className: "text-sm",
            children: i
          })]
        }), _.jsx("div", {
          children: _.jsx(gj, {
            onSubmit: c,
            isSubmitting: n,
            error: i
          })
        }), _.jsx("div", {
          className: "space-y-4 h-[500px] overflow-y-auto custom-scrollbar",
          "data-aos": "fade-up",
          "data-aos-delay": "200",
          children: t.length === 0 ? _.jsxs("div", {
            className: "text-center py-8",
            "data-aos": "fade-in",
            children: [_.jsx(Xy, {
              className: "w-12 h-12 text-indigo-400 mx-auto mb-3 opacity-50"
            }), _.jsx("p", {
              className: "text-gray-400",
              children: "No comments yet. Start the conversation!"
            })]
          }) : t.map((p, m) => _.jsx(mj, {
            comment: p,
            formatDate: h,
            index: m
          }, p.id))
        })]
      }), _.jsx("style", {
        jsx: !0,
        children: `
            .custom-scrollbar::-webkit-scrollbar {
                width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(99, 102, 241, 0.5);
                border-radius: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(99, 102, 241, 0.7);
            }
        `
      })]
    })
  };
/*!
 * sweetalert2 v11.22.2
 * Released under the MIT License.
 */
function bb(t, e, n) {
  if (typeof t == "function" ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
  throw new TypeError("Private element is not present on this object")
}

function vj(t, e) {
  if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
}

function a7(t, e) {
  return t.get(bb(t, e))
}

function wj(t, e, n) {
  vj(t, e), e.set(t, n)
}

function bj(t, e, n) {
  return t.set(bb(t, e), n), n
}
const _j = 100,
  re = {},
  xj = () => {
    re.previousActiveElement instanceof HTMLElement ? (re.previousActiveElement.focus(), re.previousActiveElement = null) : document.body && document.body.focus()
  },
  Sj = t => new Promise(e => {
    if (!t) return e();
    const n = window.scrollX,
      r = window.scrollY;
    re.restoreFocusTimeout = setTimeout(() => {
      xj(), e()
    }, _j), window.scrollTo(n, r)
  }),
  _b = "swal2-",
  Ej = ["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "draggable", "dragging"],
  a1 = Ej.reduce((t, e) => (t[e] = _b + e, t), {}),
  Tj = ["success", "warning", "info", "question", "error"],
  Lu = Tj.reduce((t, e) => (t[e] = _b + e, t), {}),
  xb = "SweetAlert2:",
  Tf = t => t.charAt(0).toUpperCase() + t.slice(1),
  Qn = t => {
    console.warn(`${xb} ${typeof t=="object"?t.join(" "):t}`)
  },
  us = t => {
    console.error(`${xb} ${t}`)
  },
  l7 = [],
  Cj = t => {
    l7.includes(t) || (l7.push(t), Qn(t))
  },
  Sb = (t, e = null) => {
    Cj(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)
  },
  Ec = t => typeof t == "function" ? t() : t,
  Cf = t => t && typeof t.toPromise == "function",
  b0 = t => Cf(t) ? t.toPromise() : Promise.resolve(t),
  kf = t => t && Promise.resolve(t) === t,
  Yn = () => document.body.querySelector(`.${a1.container}`),
  _0 = t => {
    const e = Yn();
    return e ? e.querySelector(t) : null
  },
  Er = t => _0(`.${t}`),
  Fe = () => Er(a1.popup),
  Mo = () => Er(a1.icon),
  kj = () => Er(a1["icon-content"]),
  Eb = () => Er(a1.title),
  Pf = () => Er(a1["html-container"]),
  Tb = () => Er(a1.image),
  Af = () => Er(a1["progress-steps"]),
  Tc = () => Er(a1["validation-message"]),
  j2 = () => _0(`.${a1.actions} .${a1.confirm}`),
  Do = () => _0(`.${a1.actions} .${a1.cancel}`),
  cs = () => _0(`.${a1.actions} .${a1.deny}`),
  Pj = () => Er(a1["input-label"]),
  Oo = () => _0(`.${a1.loader}`),
  x0 = () => Er(a1.actions),
  Cb = () => Er(a1.footer),
  Cc = () => Er(a1["timer-progress-bar"]),
  If = () => Er(a1.close),
  Aj = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
  Rf = () => {
    const t = Fe();
    if (!t) return [];
    const e = t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),
      n = Array.from(e).sort((a, l) => {
        const c = parseInt(a.getAttribute("tabindex") || "0"),
          h = parseInt(l.getAttribute("tabindex") || "0");
        return c > h ? 1 : c < h ? -1 : 0
      }),
      r = t.querySelectorAll(Aj),
      i = Array.from(r).filter(a => a.getAttribute("tabindex") !== "-1");
    return [...new Set(n.concat(i))].filter(a => ar(a))
  },
  Nf = () => oi(document.body, a1.shown) && !oi(document.body, a1["toast-shown"]) && !oi(document.body, a1["no-backdrop"]),
  kc = () => {
    const t = Fe();
    return t ? oi(t, a1.toast) : !1
  },
  Ij = () => {
    const t = Fe();
    return t ? t.hasAttribute("data-loading") : !1
  },
  Tr = (t, e) => {
    if (t.textContent = "", e) {
      const r = new DOMParser().parseFromString(e, "text/html"),
        i = r.querySelector("head");
      i && Array.from(i.childNodes).forEach(l => {
        t.appendChild(l)
      });
      const a = r.querySelector("body");
      a && Array.from(a.childNodes).forEach(l => {
        l instanceof HTMLVideoElement || l instanceof HTMLAudioElement ? t.appendChild(l.cloneNode(!0)) : t.appendChild(l)
      })
    }
  },
  oi = (t, e) => {
    if (!e) return !1;
    const n = e.split(/\s+/);
    for (let r = 0; r < n.length; r++)
      if (!t.classList.contains(n[r])) return !1;
    return !0
  },
  Rj = (t, e) => {
    Array.from(t.classList).forEach(n => {
      !Object.values(a1).includes(n) && !Object.values(Lu).includes(n) && !Object.values(e.showClass || {}).includes(n) && t.classList.remove(n)
    })
  },
  xr = (t, e, n) => {
    if (Rj(t, e), !e.customClass) return;
    const r = e.customClass[n];
    if (r) {
      if (typeof r != "string" && !r.forEach) {
        Qn(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof r}"`);
        return
      }
      We(t, r)
    }
  },
  Pc = (t, e) => {
    if (!e) return null;
    switch (e) {
      case "select":
      case "textarea":
      case "file":
        return t.querySelector(`.${a1.popup} > .${a1[e]}`);
      case "checkbox":
        return t.querySelector(`.${a1.popup} > .${a1.checkbox} input`);
      case "radio":
        return t.querySelector(`.${a1.popup} > .${a1.radio} input:checked`) || t.querySelector(`.${a1.popup} > .${a1.radio} input:first-child`);
      case "range":
        return t.querySelector(`.${a1.popup} > .${a1.range} input`);
      default:
        return t.querySelector(`.${a1.popup} > .${a1.input}`)
    }
  },
  kb = t => {
    if (t.focus(), t.type !== "file") {
      const e = t.value;
      t.value = "", t.value = e
    }
  },
  Pb = (t, e, n) => {
    !t || !e || (typeof e == "string" && (e = e.split(/\s+/).filter(Boolean)), e.forEach(r => {
      Array.isArray(t) ? t.forEach(i => {
        n ? i.classList.add(r) : i.classList.remove(r)
      }) : n ? t.classList.add(r) : t.classList.remove(r)
    }))
  },
  We = (t, e) => {
    Pb(t, e, !0)
  },
  qr = (t, e) => {
    Pb(t, e, !1)
  },
  zi = (t, e) => {
    const n = Array.from(t.children);
    for (let r = 0; r < n.length; r++) {
      const i = n[r];
      if (i instanceof HTMLElement && oi(i, e)) return i
    }
  },
  G3 = (t, e, n) => {
    n === `${parseInt(n)}` && (n = parseInt(n)), n || parseInt(n) === 0 ? t.style.setProperty(e, typeof n == "number" ? `${n}px` : n) : t.style.removeProperty(e)
  },
  dn = (t, e = "flex") => {
    t && (t.style.display = e)
  },
  Vn = t => {
    t && (t.style.display = "none")
  },
  Lf = (t, e = "block") => {
    t && new MutationObserver(() => {
      S0(t, t.innerHTML, e)
    }).observe(t, {
      childList: !0,
      subtree: !0
    })
  },
  u7 = (t, e, n, r) => {
    const i = t.querySelector(e);
    i && i.style.setProperty(n, r)
  },
  S0 = (t, e, n = "flex") => {
    e ? dn(t, n) : Vn(t)
  },
  ar = t => !!(t && (t.offsetWidth || t.offsetHeight || t.getClientRects().length)),
  Nj = () => !ar(j2()) && !ar(cs()) && !ar(Do()),
  zh = t => t.scrollHeight > t.clientHeight,
  Lj = (t, e) => {
    let n = t;
    for (; n && n !== e;) {
      if (zh(n)) return !0;
      n = n.parentElement
    }
    return !1
  },
  Ab = t => {
    const e = window.getComputedStyle(t),
      n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
      r = parseFloat(e.getPropertyValue("transition-duration") || "0");
    return n > 0 || r > 0
  },
  Mf = (t, e = !1) => {
    const n = Cc();
    n && ar(n) && (e && (n.style.transition = "none", n.style.width = "100%"), setTimeout(() => {
      n.style.transition = `width ${t/1e3}s linear`, n.style.width = "0%"
    }, 10))
  },
  Mj = () => {
    const t = Cc();
    if (!t) return;
    const e = parseInt(window.getComputedStyle(t).width);
    t.style.removeProperty("transition"), t.style.width = "100%";
    const n = parseInt(window.getComputedStyle(t).width),
      r = e / n * 100;
    t.style.width = `${r}%`
  },
  Dj = () => typeof window > "u" || typeof document > "u",
  Oj = `
 <div aria-labelledby="${a1.title}" aria-describedby="${a1["html-container"]}" class="${a1.popup}" tabindex="-1">
   <button type="button" class="${a1.close}"></button>
   <ul class="${a1["progress-steps"]}"></ul>
   <div class="${a1.icon}"></div>
   <img class="${a1.image}" />
   <h2 class="${a1.title}" id="${a1.title}"></h2>
   <div class="${a1["html-container"]}" id="${a1["html-container"]}"></div>
   <input class="${a1.input}" id="${a1.input}" />
   <input type="file" class="${a1.file}" />
   <div class="${a1.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${a1.select}" id="${a1.select}"></select>
   <div class="${a1.radio}"></div>
   <label class="${a1.checkbox}">
     <input type="checkbox" id="${a1.checkbox}" />
     <span class="${a1.label}"></span>
   </label>
   <textarea class="${a1.textarea}" id="${a1.textarea}"></textarea>
   <div class="${a1["validation-message"]}" id="${a1["validation-message"]}"></div>
   <div class="${a1.actions}">
     <div class="${a1.loader}"></div>
     <button type="button" class="${a1.confirm}"></button>
     <button type="button" class="${a1.deny}"></button>
     <button type="button" class="${a1.cancel}"></button>
   </div>
   <div class="${a1.footer}"></div>
   <div class="${a1["timer-progress-bar-container"]}">
     <div class="${a1["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, ""),
  jj = () => {
    const t = Yn();
    return t ? (t.remove(), qr([document.documentElement, document.body], [a1["no-backdrop"], a1["toast-shown"], a1["has-column"]]), !0) : !1
  },
  k3 = () => {
    re.currentInstance.resetValidationMessage()
  },
  Vj = () => {
    const t = Fe(),
      e = zi(t, a1.input),
      n = zi(t, a1.file),
      r = t.querySelector(`.${a1.range} input`),
      i = t.querySelector(`.${a1.range} output`),
      a = zi(t, a1.select),
      l = t.querySelector(`.${a1.checkbox} input`),
      c = zi(t, a1.textarea);
    e.oninput = k3, n.onchange = k3, a.onchange = k3, l.onchange = k3, c.oninput = k3, r.oninput = () => {
      k3(), i.value = r.value
    }, r.onchange = () => {
      k3(), i.value = r.value
    }
  },
  Fj = t => typeof t == "string" ? document.querySelector(t) : t,
  Bj = t => {
    const e = Fe();
    e.setAttribute("role", t.toast ? "alert" : "dialog"), e.setAttribute("aria-live", t.toast ? "polite" : "assertive"), t.toast || e.setAttribute("aria-modal", "true")
  },
  $j = t => {
    window.getComputedStyle(t).direction === "rtl" && We(Yn(), a1.rtl)
  },
  zj = t => {
    const e = jj();
    if (Dj()) {
      us("SweetAlert2 requires document to initialize");
      return
    }
    const n = document.createElement("div");
    n.className = a1.container, e && We(n, a1["no-transition"]), Tr(n, Oj), n.dataset.swal2Theme = t.theme;
    const r = Fj(t.target);
    r.appendChild(n), t.topLayer && (n.setAttribute("popover", ""), n.showPopover()), Bj(t), $j(r), Vj()
  },
  Df = (t, e) => {
    t instanceof HTMLElement ? e.appendChild(t) : typeof t == "object" ? Uj(t, e) : t && Tr(e, t)
  },
  Uj = (t, e) => {
    t.jquery ? Wj(e, t) : Tr(e, t.toString())
  },
  Wj = (t, e) => {
    if (t.textContent = "", 0 in e)
      for (let n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
    else t.appendChild(e.cloneNode(!0))
  },
  Hj = (t, e) => {
    const n = x0(),
      r = Oo();
    !n || !r || (!e.showConfirmButton && !e.showDenyButton && !e.showCancelButton ? Vn(n) : dn(n), xr(n, e, "actions"), qj(n, r, e), Tr(r, e.loaderHtml || ""), xr(r, e, "loader"))
  };

function qj(t, e, n) {
  const r = j2(),
    i = cs(),
    a = Do();
  !r || !i || !a || (F4(r, "confirm", n), F4(i, "deny", n), F4(a, "cancel", n), Gj(r, i, a, n), n.reverseButtons && (n.toast ? (t.insertBefore(a, r), t.insertBefore(i, r)) : (t.insertBefore(a, e), t.insertBefore(i, e), t.insertBefore(r, e))))
}

function Gj(t, e, n, r) {
  if (!r.buttonsStyling) {
    qr([t, e, n], a1.styled);
    return
  }
  We([t, e, n], a1.styled), r.confirmButtonColor && t.style.setProperty("--swal2-confirm-button-background-color", r.confirmButtonColor), r.denyButtonColor && e.style.setProperty("--swal2-deny-button-background-color", r.denyButtonColor), r.cancelButtonColor && n.style.setProperty("--swal2-cancel-button-background-color", r.cancelButtonColor), V4(t), V4(e), V4(n)
}

function V4(t) {
  const e = window.getComputedStyle(t);
  if (e.getPropertyValue("--swal2-action-button-focus-box-shadow")) return;
  const n = e.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/, "rgba($1, $2, $3, 0.5)");
  t.style.setProperty("--swal2-action-button-focus-box-shadow", e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/, ` ${n}`))
}

function F4(t, e, n) {
  const r = Tf(e);
  S0(t, n[`show${r}Button`], "inline-block"), Tr(t, n[`${e}ButtonText`] || ""), t.setAttribute("aria-label", n[`${e}ButtonAriaLabel`] || ""), t.className = a1[e], xr(t, n, `${e}Button`)
}
const Kj = (t, e) => {
    const n = If();
    n && (Tr(n, e.closeButtonHtml || ""), xr(n, e, "closeButton"), S0(n, e.showCloseButton), n.setAttribute("aria-label", e.closeButtonAriaLabel || ""))
  },
  Qj = (t, e) => {
    const n = Yn();
    n && (Yj(n, e.backdrop), Xj(n, e.position), Jj(n, e.grow), xr(n, e, "container"))
  };

function Yj(t, e) {
  typeof e == "string" ? t.style.background = e : e || We([document.documentElement, document.body], a1["no-backdrop"])
}

function Xj(t, e) {
  e && (e in a1 ? We(t, a1[e]) : (Qn('The "position" parameter is not valid, defaulting to "center"'), We(t, a1.center)))
}

function Jj(t, e) {
  e && We(t, a1[`grow-${e}`])
}
var ut = {
  innerParams: new WeakMap,
  domCache: new WeakMap
};
const Zj = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
  eV = (t, e) => {
    const n = Fe();
    if (!n) return;
    const r = ut.innerParams.get(t),
      i = !r || e.input !== r.input;
    Zj.forEach(a => {
      const l = zi(n, a1[a]);
      l && (rV(a, e.inputAttributes), l.className = a1[a], i && Vn(l))
    }), e.input && (i && tV(e), iV(e))
  },
  tV = t => {
    if (!t.input) return;
    if (!Mt[t.input]) {
      us(`Unexpected type of input! Expected ${Object.keys(Mt).join(" | ")}, got "${t.input}"`);
      return
    }
    const e = Ib(t.input);
    if (!e) return;
    const n = Mt[t.input](e, t);
    dn(e), t.inputAutoFocus && setTimeout(() => {
      kb(n)
    })
  },
  nV = t => {
    for (let e = 0; e < t.attributes.length; e++) {
      const n = t.attributes[e].name;
      ["id", "type", "value", "style"].includes(n) || t.removeAttribute(n)
    }
  },
  rV = (t, e) => {
    const n = Fe();
    if (!n) return;
    const r = Pc(n, t);
    if (r) {
      nV(r);
      for (const i in e) r.setAttribute(i, e[i])
    }
  },
  iV = t => {
    if (!t.input) return;
    const e = Ib(t.input);
    e && xr(e, t, "input")
  },
  Of = (t, e) => {
    !t.placeholder && e.inputPlaceholder && (t.placeholder = e.inputPlaceholder)
  },
  E0 = (t, e, n) => {
    if (n.inputLabel) {
      const r = document.createElement("label"),
        i = a1["input-label"];
      r.setAttribute("for", t.id), r.className = i, typeof n.customClass == "object" && We(r, n.customClass.inputLabel), r.innerText = n.inputLabel, e.insertAdjacentElement("beforebegin", r)
    }
  },
  Ib = t => {
    const e = Fe();
    if (e) return zi(e, a1[t] || a1.input)
  },
  Mu = (t, e) => {
    ["string", "number"].includes(typeof e) ? t.value = `${e}` : kf(e) || Qn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)
  },
  Mt = {};
Mt.text = Mt.email = Mt.password = Mt.number = Mt.tel = Mt.url = Mt.search = Mt.date = Mt["datetime-local"] = Mt.time = Mt.week = Mt.month = (t, e) => (Mu(t, e.inputValue), E0(t, t, e), Of(t, e), t.type = e.input, t);
Mt.file = (t, e) => (E0(t, t, e), Of(t, e), t);
Mt.range = (t, e) => {
  const n = t.querySelector("input"),
    r = t.querySelector("output");
  return Mu(n, e.inputValue), n.type = e.input, Mu(r, e.inputValue), E0(n, t, e), t
};
Mt.select = (t, e) => {
  if (t.textContent = "", e.inputPlaceholder) {
    const n = document.createElement("option");
    Tr(n, e.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, t.appendChild(n)
  }
  return E0(t, t, e), t
};
Mt.radio = t => (t.textContent = "", t);
Mt.checkbox = (t, e) => {
  const n = Pc(Fe(), "checkbox");
  n.value = "1", n.checked = !!e.inputValue;
  const r = t.querySelector("span");
  return Tr(r, e.inputPlaceholder || e.inputLabel), n
};
Mt.textarea = (t, e) => {
  Mu(t, e.inputValue), Of(t, e), E0(t, t, e);
  const n = r => parseInt(window.getComputedStyle(r).marginLeft) + parseInt(window.getComputedStyle(r).marginRight);
  return setTimeout(() => {
    if ("MutationObserver" in window) {
      const r = parseInt(window.getComputedStyle(Fe()).width),
        i = () => {
          if (!document.body.contains(t)) return;
          const a = t.offsetWidth + n(t);
          a > r ? Fe().style.width = `${a}px` : G3(Fe(), "width", e.width)
        };
      new MutationObserver(i).observe(t, {
        attributes: !0,
        attributeFilter: ["style"]
      })
    }
  }), t
};
const sV = (t, e) => {
    const n = Pf();
    n && (Lf(n), xr(n, e, "htmlContainer"), e.html ? (Df(e.html, n), dn(n, "block")) : e.text ? (n.textContent = e.text, dn(n, "block")) : Vn(n), eV(t, e))
  },
  oV = (t, e) => {
    const n = Cb();
    n && (Lf(n), S0(n, e.footer, "block"), e.footer && Df(e.footer, n), xr(n, e, "footer"))
  },
  aV = (t, e) => {
    const n = ut.innerParams.get(t),
      r = Mo();
    if (!r) return;
    if (n && e.icon === n.icon) {
      d7(r, e), c7(r, e);
      return
    }
    if (!e.icon && !e.iconHtml) {
      Vn(r);
      return
    }
    if (e.icon && Object.keys(Lu).indexOf(e.icon) === -1) {
      us(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`), Vn(r);
      return
    }
    dn(r), d7(r, e), c7(r, e), We(r, e.showClass && e.showClass.icon), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", Rb)
  },
  c7 = (t, e) => {
    for (const [n, r] of Object.entries(Lu)) e.icon !== n && qr(t, r);
    We(t, e.icon && Lu[e.icon]), cV(t, e), Rb(), xr(t, e, "icon")
  },
  Rb = () => {
    const t = Fe();
    if (!t) return;
    const e = window.getComputedStyle(t).getPropertyValue("background-color"),
      n = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
    for (let r = 0; r < n.length; r++) n[r].style.backgroundColor = e
  },
  lV = t => `
  ${t.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${t.animation?'<div class="swal2-success-fix"></div>':""}
  ${t.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,
  uV = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
  d7 = (t, e) => {
    if (!e.icon && !e.iconHtml) return;
    let n = t.innerHTML,
      r = "";
    e.iconHtml ? r = h7(e.iconHtml) : e.icon === "success" ? (r = lV(e), n = n.replace(/ style=".*?"/g, "")) : e.icon === "error" ? r = uV : e.icon && (r = h7({
      question: "?",
      warning: "!",
      info: "i"
    } [e.icon])), n.trim() !== r.trim() && Tr(t, r)
  },
  cV = (t, e) => {
    if (e.iconColor) {
      t.style.color = e.iconColor, t.style.borderColor = e.iconColor;
      for (const n of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) u7(t, n, "background-color", e.iconColor);
      u7(t, ".swal2-success-ring", "border-color", e.iconColor)
    }
  },
  h7 = t => `<div class="${a1["icon-content"]}">${t}</div>`,
  dV = (t, e) => {
    const n = Tb();
    if (n) {
      if (!e.imageUrl) {
        Vn(n);
        return
      }
      dn(n, ""), n.setAttribute("src", e.imageUrl), n.setAttribute("alt", e.imageAlt || ""), G3(n, "width", e.imageWidth), G3(n, "height", e.imageHeight), n.className = a1.image, xr(n, e, "image")
    }
  };
let jf = !1,
  Nb = 0,
  Lb = 0,
  Mb = 0,
  Db = 0;
const hV = t => {
    t.addEventListener("mousedown", Du), document.body.addEventListener("mousemove", Ou), t.addEventListener("mouseup", ju), t.addEventListener("touchstart", Du), document.body.addEventListener("touchmove", Ou), t.addEventListener("touchend", ju)
  },
  fV = t => {
    t.removeEventListener("mousedown", Du), document.body.removeEventListener("mousemove", Ou), t.removeEventListener("mouseup", ju), t.removeEventListener("touchstart", Du), document.body.removeEventListener("touchmove", Ou), t.removeEventListener("touchend", ju)
  },
  Du = t => {
    const e = Fe();
    if (t.target === e || Mo().contains(t.target)) {
      jf = !0;
      const n = Ob(t);
      Nb = n.clientX, Lb = n.clientY, Mb = parseInt(e.style.insetInlineStart) || 0, Db = parseInt(e.style.insetBlockStart) || 0, We(e, "swal2-dragging")
    }
  },
  Ou = t => {
    const e = Fe();
    if (jf) {
      let {
        clientX: n,
        clientY: r
      } = Ob(t);
      e.style.insetInlineStart = `${Mb+(n-Nb)}px`, e.style.insetBlockStart = `${Db+(r-Lb)}px`
    }
  },
  ju = () => {
    const t = Fe();
    jf = !1, qr(t, "swal2-dragging")
  },
  Ob = t => {
    let e = 0,
      n = 0;
    return t.type.startsWith("mouse") ? (e = t.clientX, n = t.clientY) : t.type.startsWith("touch") && (e = t.touches[0].clientX, n = t.touches[0].clientY), {
      clientX: e,
      clientY: n
    }
  },
  pV = (t, e) => {
    const n = Yn(),
      r = Fe();
    if (!(!n || !r)) {
      if (e.toast) {
        G3(n, "width", e.width), r.style.width = "100%";
        const i = Oo();
        i && r.insertBefore(i, Mo())
      } else G3(r, "width", e.width);
      G3(r, "padding", e.padding), e.color && (r.style.color = e.color), e.background && (r.style.background = e.background), Vn(Tc()), mV(r, e), e.draggable && !e.toast ? (We(r, a1.draggable), hV(r)) : (qr(r, a1.draggable), fV(r))
    }
  },
  mV = (t, e) => {
    const n = e.showClass || {};
    t.className = `${a1.popup} ${ar(t)?n.popup:""}`, e.toast ? (We([document.documentElement, document.body], a1["toast-shown"]), We(t, a1.toast)) : We(t, a1.modal), xr(t, e, "popup"), typeof e.customClass == "string" && We(t, e.customClass), e.icon && We(t, a1[`icon-${e.icon}`])
  },
  gV = (t, e) => {
    const n = Af();
    if (!n) return;
    const {
      progressSteps: r,
      currentProgressStep: i
    } = e;
    if (!r || r.length === 0 || i === void 0) {
      Vn(n);
      return
    }
    dn(n), n.textContent = "", i >= r.length && Qn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), r.forEach((a, l) => {
      const c = yV(a);
      if (n.appendChild(c), l === i && We(c, a1["active-progress-step"]), l !== r.length - 1) {
        const h = vV(e);
        n.appendChild(h)
      }
    })
  },
  yV = t => {
    const e = document.createElement("li");
    return We(e, a1["progress-step"]), Tr(e, t), e
  },
  vV = t => {
    const e = document.createElement("li");
    return We(e, a1["progress-step-line"]), t.progressStepsDistance && G3(e, "width", t.progressStepsDistance), e
  },
  wV = (t, e) => {
    const n = Eb();
    n && (Lf(n), S0(n, e.title || e.titleText, "block"), e.title && Df(e.title, n), e.titleText && (n.innerText = e.titleText), xr(n, e, "title"))
  },
  jb = (t, e) => {
    pV(t, e), Qj(t, e), gV(t, e), aV(t, e), dV(t, e), wV(t, e), Kj(t, e), sV(t, e), Hj(t, e), oV(t, e);
    const n = Fe();
    typeof e.didRender == "function" && n && e.didRender(n), re.eventEmitter.emit("didRender", n)
  },
  bV = () => ar(Fe()),
  Vb = () => {
    var t;
    return (t = j2()) === null || t === void 0 ? void 0 : t.click()
  },
  _V = () => {
    var t;
    return (t = cs()) === null || t === void 0 ? void 0 : t.click()
  },
  xV = () => {
    var t;
    return (t = Do()) === null || t === void 0 ? void 0 : t.click()
  },
  jo = Object.freeze({
    cancel: "cancel",
    backdrop: "backdrop",
    close: "close",
    esc: "esc",
    timer: "timer"
  }),
  Fb = t => {
    t.keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
      capture: t.keydownListenerCapture
    }), t.keydownHandlerAdded = !1)
  },
  SV = (t, e, n) => {
    Fb(t), e.toast || (t.keydownHandler = r => TV(e, r, n), t.keydownTarget = e.keydownListenerCapture ? window : Fe(), t.keydownListenerCapture = e.keydownListenerCapture, t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
      capture: t.keydownListenerCapture
    }), t.keydownHandlerAdded = !0)
  },
  Uh = (t, e) => {
    var n;
    const r = Rf();
    if (r.length) {
      t = t + e, t === -2 && (t = r.length - 1), t === r.length ? t = 0 : t === -1 && (t = r.length - 1), r[t].focus();
      return
    }(n = Fe()) === null || n === void 0 || n.focus()
  },
  Bb = ["ArrowRight", "ArrowDown"],
  EV = ["ArrowLeft", "ArrowUp"],
  TV = (t, e, n) => {
    t && (e.isComposing || e.keyCode === 229 || (t.stopKeydownPropagation && e.stopPropagation(), e.key === "Enter" ? CV(e, t) : e.key === "Tab" ? kV(e) : [...Bb, ...EV].includes(e.key) ? PV(e.key) : e.key === "Escape" && AV(e, t, n)))
  },
  CV = (t, e) => {
    if (!Ec(e.allowEnterKey)) return;
    const n = Pc(Fe(), e.input);
    if (t.target && n && t.target instanceof HTMLElement && t.target.outerHTML === n.outerHTML) {
      if (["textarea", "file"].includes(e.input)) return;
      Vb(), t.preventDefault()
    }
  },
  kV = t => {
    const e = t.target,
      n = Rf();
    let r = -1;
    for (let i = 0; i < n.length; i++)
      if (e === n[i]) {
        r = i;
        break
      } t.shiftKey ? Uh(r, -1) : Uh(r, 1), t.stopPropagation(), t.preventDefault()
  },
  PV = t => {
    const e = x0(),
      n = j2(),
      r = cs(),
      i = Do();
    if (!e || !n || !r || !i) return;
    const a = [n, r, i];
    if (document.activeElement instanceof HTMLElement && !a.includes(document.activeElement)) return;
    const l = Bb.includes(t) ? "nextElementSibling" : "previousElementSibling";
    let c = document.activeElement;
    if (c) {
      for (let h = 0; h < e.children.length; h++) {
        if (c = c[l], !c) return;
        if (c instanceof HTMLButtonElement && ar(c)) break
      }
      c instanceof HTMLButtonElement && c.focus()
    }
  },
  AV = (t, e, n) => {
    t.preventDefault(), Ec(e.allowEscapeKey) && n(jo.esc)
  };
var _o = {
  swalPromiseResolve: new WeakMap,
  swalPromiseReject: new WeakMap
};
const IV = () => {
    const t = Yn();
    Array.from(document.body.children).forEach(n => {
      n.contains(t) || (n.hasAttribute("aria-hidden") && n.setAttribute("data-previous-aria-hidden", n.getAttribute("aria-hidden") || ""), n.setAttribute("aria-hidden", "true"))
    })
  },
  $b = () => {
    Array.from(document.body.children).forEach(e => {
      e.hasAttribute("data-previous-aria-hidden") ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden") || ""), e.removeAttribute("data-previous-aria-hidden")) : e.removeAttribute("aria-hidden")
    })
  },
  zb = typeof window < "u" && !!window.GestureEvent,
  RV = () => {
    if (zb && !oi(document.body, a1.iosfix)) {
      const t = document.body.scrollTop;
      document.body.style.top = `${t*-1}px`, We(document.body, a1.iosfix), NV()
    }
  },
  NV = () => {
    const t = Yn();
    if (!t) return;
    let e;
    t.ontouchstart = n => {
      e = LV(n)
    }, t.ontouchmove = n => {
      e && (n.preventDefault(), n.stopPropagation())
    }
  },
  LV = t => {
    const e = t.target,
      n = Yn(),
      r = Pf();
    return !n || !r || MV(t) || DV(t) ? !1 : e === n || !zh(n) && e instanceof HTMLElement && !Lj(e, r) && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" && !(zh(r) && r.contains(e))
  },
  MV = t => t.touches && t.touches.length && t.touches[0].touchType === "stylus",
  DV = t => t.touches && t.touches.length > 1,
  OV = () => {
    if (oi(document.body, a1.iosfix)) {
      const t = parseInt(document.body.style.top, 10);
      qr(document.body, a1.iosfix), document.body.style.top = "", document.body.scrollTop = t * -1
    }
  },
  jV = () => {
    const t = document.createElement("div");
    t.className = a1["scrollbar-measure"], document.body.appendChild(t);
    const e = t.getBoundingClientRect().width - t.clientWidth;
    return document.body.removeChild(t), e
  };
let ho = null;
const VV = t => {
    ho === null && (document.body.scrollHeight > window.innerHeight || t === "scroll") && (ho = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = `${ho+jV()}px`)
  },
  FV = () => {
    ho !== null && (document.body.style.paddingRight = `${ho}px`, ho = null)
  };

function Ub(t, e, n, r) {
  kc() ? f7(t, r) : (Sj(n).then(() => f7(t, r)), Fb(re)), zb ? (e.setAttribute("style", "display:none !important"), e.removeAttribute("class"), e.innerHTML = "") : e.remove(), Nf() && (FV(), OV(), $b()), BV()
}

function BV() {
  qr([document.documentElement, document.body], [a1.shown, a1["height-auto"], a1["no-backdrop"], a1["toast-shown"]])
}

function Ui(t) {
  t = zV(t);
  const e = _o.swalPromiseResolve.get(this),
    n = $V(this);
  this.isAwaitingPromise ? t.isDismissed || (T0(this), e(t)) : n && e(t)
}
const $V = t => {
  const e = Fe();
  if (!e) return !1;
  const n = ut.innerParams.get(t);
  if (!n || oi(e, n.hideClass.popup)) return !1;
  qr(e, n.showClass.popup), We(e, n.hideClass.popup);
  const r = Yn();
  return qr(r, n.showClass.backdrop), We(r, n.hideClass.backdrop), UV(t, e, n), !0
};

function Wb(t) {
  const e = _o.swalPromiseReject.get(this);
  T0(this), e && e(t)
}
const T0 = t => {
    t.isAwaitingPromise && (delete t.isAwaitingPromise, ut.innerParams.get(t) || t._destroy())
  },
  zV = t => typeof t > "u" ? {
    isConfirmed: !1,
    isDenied: !1,
    isDismissed: !0
  } : Object.assign({
    isConfirmed: !1,
    isDenied: !1,
    isDismissed: !1
  }, t),
  UV = (t, e, n) => {
    var r;
    const i = Yn(),
      a = Ab(e);
    typeof n.willClose == "function" && n.willClose(e), (r = re.eventEmitter) === null || r === void 0 || r.emit("willClose", e), a ? WV(t, e, i, n.returnFocus, n.didClose) : Ub(t, i, n.returnFocus, n.didClose)
  },
  WV = (t, e, n, r, i) => {
    re.swalCloseEventFinishedCallback = Ub.bind(null, t, n, r, i);
    const a = function(l) {
      if (l.target === e) {
        var c;
        (c = re.swalCloseEventFinishedCallback) === null || c === void 0 || c.call(re), delete re.swalCloseEventFinishedCallback, e.removeEventListener("animationend", a), e.removeEventListener("transitionend", a)
      }
    };
    e.addEventListener("animationend", a), e.addEventListener("transitionend", a)
  },
  f7 = (t, e) => {
    setTimeout(() => {
      var n;
      typeof e == "function" && e.bind(t.params)(), (n = re.eventEmitter) === null || n === void 0 || n.emit("didClose"), t._destroy && t._destroy()
    })
  },
  xo = t => {
    let e = Fe();
    if (e || new B3, e = Fe(), !e) return;
    const n = Oo();
    kc() ? Vn(Mo()) : HV(e, t), dn(n), e.setAttribute("data-loading", "true"), e.setAttribute("aria-busy", "true"), e.focus()
  },
  HV = (t, e) => {
    const n = x0(),
      r = Oo();
    !n || !r || (!e && ar(j2()) && (e = j2()), dn(n), e && (Vn(e), r.setAttribute("data-button-to-replace", e.className), n.insertBefore(r, e)), We([t, n], a1.loading))
  },
  qV = (t, e) => {
    e.input === "select" || e.input === "radio" ? XV(t, e) : ["text", "email", "number", "tel", "textarea"].some(n => n === e.input) && (Cf(e.inputValue) || kf(e.inputValue)) && (xo(j2()), JV(t, e))
  },
  GV = (t, e) => {
    const n = t.getInput();
    if (!n) return null;
    switch (e.input) {
      case "checkbox":
        return KV(n);
      case "radio":
        return QV(n);
      case "file":
        return YV(n);
      default:
        return e.inputAutoTrim ? n.value.trim() : n.value
    }
  },
  KV = t => t.checked ? 1 : 0,
  QV = t => t.checked ? t.value : null,
  YV = t => t.files && t.files.length ? t.getAttribute("multiple") !== null ? t.files : t.files[0] : null,
  XV = (t, e) => {
    const n = Fe();
    if (!n) return;
    const r = i => {
      e.input === "select" ? ZV(n, Vu(i), e) : e.input === "radio" && eF(n, Vu(i), e)
    };
    Cf(e.inputOptions) || kf(e.inputOptions) ? (xo(j2()), b0(e.inputOptions).then(i => {
      t.hideLoading(), r(i)
    })) : typeof e.inputOptions == "object" ? r(e.inputOptions) : us(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)
  },
  JV = (t, e) => {
    const n = t.getInput();
    n && (Vn(n), b0(e.inputValue).then(r => {
      n.value = e.input === "number" ? `${parseFloat(r)||0}` : `${r}`, dn(n), n.focus(), t.hideLoading()
    }).catch(r => {
      us(`Error in inputValue promise: ${r}`), n.value = "", dn(n), n.focus(), t.hideLoading()
    }))
  };

function ZV(t, e, n) {
  const r = zi(t, a1.select);
  if (!r) return;
  const i = (a, l, c) => {
    const h = document.createElement("option");
    h.value = c, Tr(h, l), h.selected = Hb(c, n.inputValue), a.appendChild(h)
  };
  e.forEach(a => {
    const l = a[0],
      c = a[1];
    if (Array.isArray(c)) {
      const h = document.createElement("optgroup");
      h.label = l, h.disabled = !1, r.appendChild(h), c.forEach(p => i(h, p[1], p[0]))
    } else i(r, c, l)
  }), r.focus()
}

function eF(t, e, n) {
  const r = zi(t, a1.radio);
  if (!r) return;
  e.forEach(a => {
    const l = a[0],
      c = a[1],
      h = document.createElement("input"),
      p = document.createElement("label");
    h.type = "radio", h.name = a1.radio, h.value = l, Hb(l, n.inputValue) && (h.checked = !0);
    const m = document.createElement("span");
    Tr(m, c), m.className = a1.label, p.appendChild(h), p.appendChild(m), r.appendChild(p)
  });
  const i = r.querySelectorAll("input");
  i.length && i[0].focus()
}
const Vu = t => {
    const e = [];
    return t instanceof Map ? t.forEach((n, r) => {
      let i = n;
      typeof i == "object" && (i = Vu(i)), e.push([r, i])
    }) : Object.keys(t).forEach(n => {
      let r = t[n];
      typeof r == "object" && (r = Vu(r)), e.push([n, r])
    }), e
  },
  Hb = (t, e) => !!e && e.toString() === t.toString(),
  tF = t => {
    const e = ut.innerParams.get(t);
    t.disableButtons(), e.input ? qb(t, "confirm") : Ff(t, !0)
  },
  nF = t => {
    const e = ut.innerParams.get(t);
    t.disableButtons(), e.returnInputValueOnDeny ? qb(t, "deny") : Vf(t, !1)
  },
  rF = (t, e) => {
    t.disableButtons(), e(jo.cancel)
  },
  qb = (t, e) => {
    const n = ut.innerParams.get(t);
    if (!n.input) {
      us(`The "input" parameter is needed to be set when using returnInputValueOn${Tf(e)}`);
      return
    }
    const r = t.getInput(),
      i = GV(t, n);
    n.inputValidator ? iF(t, i, e) : r && !r.checkValidity() ? (t.enableButtons(), t.showValidationMessage(n.validationMessage || r.validationMessage)) : e === "deny" ? Vf(t, i) : Ff(t, i)
  },
  iF = (t, e, n) => {
    const r = ut.innerParams.get(t);
    t.disableInput(), Promise.resolve().then(() => b0(r.inputValidator(e, r.validationMessage))).then(a => {
      t.enableButtons(), t.enableInput(), a ? t.showValidationMessage(a) : n === "deny" ? Vf(t, e) : Ff(t, e)
    })
  },
  Vf = (t, e) => {
    const n = ut.innerParams.get(t || void 0);
    n.showLoaderOnDeny && xo(cs()), n.preDeny ? (t.isAwaitingPromise = !0, Promise.resolve().then(() => b0(n.preDeny(e, n.validationMessage))).then(i => {
      i === !1 ? (t.hideLoading(), T0(t)) : t.close({
        isDenied: !0,
        value: typeof i > "u" ? e : i
      })
    }).catch(i => Gb(t || void 0, i))) : t.close({
      isDenied: !0,
      value: e
    })
  },
  p7 = (t, e) => {
    t.close({
      isConfirmed: !0,
      value: e
    })
  },
  Gb = (t, e) => {
    t.rejectPromise(e)
  },
  Ff = (t, e) => {
    const n = ut.innerParams.get(t || void 0);
    n.showLoaderOnConfirm && xo(), n.preConfirm ? (t.resetValidationMessage(), t.isAwaitingPromise = !0, Promise.resolve().then(() => b0(n.preConfirm(e, n.validationMessage))).then(i => {
      ar(Tc()) || i === !1 ? (t.hideLoading(), T0(t)) : p7(t, typeof i > "u" ? e : i)
    }).catch(i => Gb(t || void 0, i))) : p7(t, e)
  };

function Fu() {
  const t = ut.innerParams.get(this);
  if (!t) return;
  const e = ut.domCache.get(this);
  Vn(e.loader), kc() ? t.icon && dn(Mo()) : sF(e), qr([e.popup, e.actions], a1.loading), e.popup.removeAttribute("aria-busy"), e.popup.removeAttribute("data-loading"), e.confirmButton.disabled = !1, e.denyButton.disabled = !1, e.cancelButton.disabled = !1
}
const sF = t => {
  const e = t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));
  e.length ? dn(e[0], "inline-block") : Nj() && Vn(t.actions)
};

function Kb() {
  const t = ut.innerParams.get(this),
    e = ut.domCache.get(this);
  return e ? Pc(e.popup, t.input) : null
}

function Qb(t, e, n) {
  const r = ut.domCache.get(t);
  e.forEach(i => {
    r[i].disabled = n
  })
}

function Yb(t, e) {
  const n = Fe();
  if (!(!n || !t))
    if (t.type === "radio") {
      const r = n.querySelectorAll(`[name="${a1.radio}"]`);
      for (let i = 0; i < r.length; i++) r[i].disabled = e
    } else t.disabled = e
}

function Xb() {
  Qb(this, ["confirmButton", "denyButton", "cancelButton"], !1)
}

function Jb() {
  Qb(this, ["confirmButton", "denyButton", "cancelButton"], !0)
}

function Zb() {
  Yb(this.getInput(), !1)
}

function e_() {
  Yb(this.getInput(), !0)
}

function t_(t) {
  const e = ut.domCache.get(this),
    n = ut.innerParams.get(this);
  Tr(e.validationMessage, t), e.validationMessage.className = a1["validation-message"], n.customClass && n.customClass.validationMessage && We(e.validationMessage, n.customClass.validationMessage), dn(e.validationMessage);
  const r = this.getInput();
  r && (r.setAttribute("aria-invalid", "true"), r.setAttribute("aria-describedby", a1["validation-message"]), kb(r), We(r, a1.inputerror))
}

function n_() {
  const t = ut.domCache.get(this);
  t.validationMessage && Vn(t.validationMessage);
  const e = this.getInput();
  e && (e.removeAttribute("aria-invalid"), e.removeAttribute("aria-describedby"), qr(e, a1.inputerror))
}
const fo = {
    title: "",
    titleText: "",
    text: "",
    html: "",
    footer: "",
    icon: void 0,
    iconColor: void 0,
    iconHtml: void 0,
    template: void 0,
    toast: !1,
    draggable: !1,
    animation: !0,
    theme: "light",
    showClass: {
      popup: "swal2-show",
      backdrop: "swal2-backdrop-show",
      icon: "swal2-icon-show"
    },
    hideClass: {
      popup: "swal2-hide",
      backdrop: "swal2-backdrop-hide",
      icon: "swal2-icon-hide"
    },
    customClass: {},
    target: "body",
    color: void 0,
    backdrop: !0,
    heightAuto: !0,
    allowOutsideClick: !0,
    allowEscapeKey: !0,
    allowEnterKey: !0,
    stopKeydownPropagation: !0,
    keydownListenerCapture: !1,
    showConfirmButton: !0,
    showDenyButton: !1,
    showCancelButton: !1,
    preConfirm: void 0,
    preDeny: void 0,
    confirmButtonText: "OK",
    confirmButtonAriaLabel: "",
    confirmButtonColor: void 0,
    denyButtonText: "No",
    denyButtonAriaLabel: "",
    denyButtonColor: void 0,
    cancelButtonText: "Cancel",
    cancelButtonAriaLabel: "",
    cancelButtonColor: void 0,
    buttonsStyling: !0,
    reverseButtons: !1,
    focusConfirm: !0,
    focusDeny: !1,
    focusCancel: !1,
    returnFocus: !0,
    showCloseButton: !1,
    closeButtonHtml: "&times;",
    closeButtonAriaLabel: "Close this dialog",
    loaderHtml: "",
    showLoaderOnConfirm: !1,
    showLoaderOnDeny: !1,
    imageUrl: void 0,
    imageWidth: void 0,
    imageHeight: void 0,
    imageAlt: "",
    timer: void 0,
    timerProgressBar: !1,
    width: void 0,
    padding: void 0,
    background: void 0,
    input: void 0,
    inputPlaceholder: "",
    inputLabel: "",
    inputValue: "",
    inputOptions: {},
    inputAutoFocus: !0,
    inputAutoTrim: !0,
    inputAttributes: {},
    inputValidator: void 0,
    returnInputValueOnDeny: !1,
    validationMessage: void 0,
    grow: !1,
    position: "center",
    progressSteps: [],
    currentProgressStep: void 0,
    progressStepsDistance: void 0,
    willOpen: void 0,
    didOpen: void 0,
    didRender: void 0,
    willClose: void 0,
    didClose: void 0,
    didDestroy: void 0,
    scrollbarPadding: !0,
    topLayer: !1
  },
  oF = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "draggable", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "theme", "willClose"],
  aF = {
    allowEnterKey: void 0
  },
  lF = ["allowOutsideClick", "allowEnterKey", "backdrop", "draggable", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
  r_ = t => Object.prototype.hasOwnProperty.call(fo, t),
  i_ = t => oF.indexOf(t) !== -1,
  s_ = t => aF[t],
  uF = t => {
    r_(t) || Qn(`Unknown parameter "${t}"`)
  },
  cF = t => {
    lF.includes(t) && Qn(`The parameter "${t}" is incompatible with toasts`)
  },
  dF = t => {
    const e = s_(t);
    e && Sb(t, e)
  },
  o_ = t => {
    t.backdrop === !1 && t.allowOutsideClick && Qn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), t.theme && !["light", "dark", "auto", "minimal", "borderless", "embed-iframe", "bulma", "bulma-light", "bulma-dark"].includes(t.theme) && Qn(`Invalid theme "${t.theme}"`);
    for (const e in t) uF(e), t.toast && cF(e), dF(e)
  };

function a_(t) {
  const e = Yn(),
    n = Fe(),
    r = ut.innerParams.get(this);
  if (!n || oi(n, r.hideClass.popup)) {
    Qn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    return
  }
  const i = hF(t),
    a = Object.assign({}, r, i);
  o_(a), e.dataset.swal2Theme = a.theme, jb(this, a), ut.innerParams.set(this, a), Object.defineProperties(this, {
    params: {
      value: Object.assign({}, this.params, t),
      writable: !1,
      enumerable: !0
    }
  })
}
const hF = t => {
  const e = {};
  return Object.keys(t).forEach(n => {
    i_(n) ? e[n] = t[n] : Qn(`Invalid parameter to update: ${n}`)
  }), e
};

function l_() {
  const t = ut.domCache.get(this),
    e = ut.innerParams.get(this);
  if (!e) {
    u_(this);
    return
  }
  t.popup && re.swalCloseEventFinishedCallback && (re.swalCloseEventFinishedCallback(), delete re.swalCloseEventFinishedCallback), typeof e.didDestroy == "function" && e.didDestroy(), re.eventEmitter.emit("didDestroy"), fF(this)
}
const fF = t => {
    u_(t), delete t.params, delete re.keydownHandler, delete re.keydownTarget, delete re.currentInstance
  },
  u_ = t => {
    t.isAwaitingPromise ? (B4(ut, t), t.isAwaitingPromise = !0) : (B4(_o, t), B4(ut, t), delete t.isAwaitingPromise, delete t.disableButtons, delete t.enableButtons, delete t.getInput, delete t.disableInput, delete t.enableInput, delete t.hideLoading, delete t.disableLoading, delete t.showValidationMessage, delete t.resetValidationMessage, delete t.close, delete t.closePopup, delete t.closeModal, delete t.closeToast, delete t.rejectPromise, delete t.update, delete t._destroy)
  },
  B4 = (t, e) => {
    for (const n in t) t[n].delete(e)
  };
var pF = Object.freeze({
  __proto__: null,
  _destroy: l_,
  close: Ui,
  closeModal: Ui,
  closePopup: Ui,
  closeToast: Ui,
  disableButtons: Jb,
  disableInput: e_,
  disableLoading: Fu,
  enableButtons: Xb,
  enableInput: Zb,
  getInput: Kb,
  handleAwaitingPromise: T0,
  hideLoading: Fu,
  rejectPromise: Wb,
  resetValidationMessage: n_,
  showValidationMessage: t_,
  update: a_
});
const mF = (t, e, n) => {
    t.toast ? gF(t, e, n) : (vF(e), wF(e), bF(t, e, n))
  },
  gF = (t, e, n) => {
    e.popup.onclick = () => {
      t && (yF(t) || t.timer || t.input) || n(jo.close)
    }
  },
  yF = t => !!(t.showConfirmButton || t.showDenyButton || t.showCancelButton || t.showCloseButton);
let Bu = !1;
const vF = t => {
    t.popup.onmousedown = () => {
      t.container.onmouseup = function(e) {
        t.container.onmouseup = () => {}, e.target === t.container && (Bu = !0)
      }
    }
  },
  wF = t => {
    t.container.onmousedown = e => {
      e.target === t.container && e.preventDefault(), t.popup.onmouseup = function(n) {
        t.popup.onmouseup = () => {}, (n.target === t.popup || n.target instanceof HTMLElement && t.popup.contains(n.target)) && (Bu = !0)
      }
    }
  },
  bF = (t, e, n) => {
    e.container.onclick = r => {
      if (Bu) {
        Bu = !1;
        return
      }
      r.target === e.container && Ec(t.allowOutsideClick) && n(jo.backdrop)
    }
  },
  _F = t => typeof t == "object" && t.jquery,
  m7 = t => t instanceof Element || _F(t),
  xF = t => {
    const e = {};
    return typeof t[0] == "object" && !m7(t[0]) ? Object.assign(e, t[0]) : ["title", "html", "icon"].forEach((n, r) => {
      const i = t[r];
      typeof i == "string" || m7(i) ? e[n] = i : i !== void 0 && us(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)
    }), e
  };

function SF(...t) {
  return new this(...t)
}

function EF(t) {
  class e extends this {
    _main(r, i) {
      return super._main(r, Object.assign({}, t, i))
    }
  }
  return e
}
const TF = () => re.timeout && re.timeout.getTimerLeft(),
  c_ = () => {
    if (re.timeout) return Mj(), re.timeout.stop()
  },
  d_ = () => {
    if (re.timeout) {
      const t = re.timeout.start();
      return Mf(t), t
    }
  },
  CF = () => {
    const t = re.timeout;
    return t && (t.running ? c_() : d_())
  },
  kF = t => {
    if (re.timeout) {
      const e = re.timeout.increase(t);
      return Mf(e, !0), e
    }
  },
  PF = () => !!(re.timeout && re.timeout.isRunning());
let g7 = !1;
const Wh = {};

function AF(t = "data-swal-template") {
  Wh[t] = this, g7 || (document.body.addEventListener("click", IF), g7 = !0)
}
const IF = t => {
  for (let e = t.target; e && e !== document; e = e.parentNode)
    for (const n in Wh) {
      const r = e.getAttribute(n);
      if (r) {
        Wh[n].fire({
          template: r
        });
        return
      }
    }
};
class RF {
  constructor() {
    this.events = {}
  }
  _getHandlersByEventName(e) {
    return typeof this.events[e] > "u" && (this.events[e] = []), this.events[e]
  }
  on(e, n) {
    const r = this._getHandlersByEventName(e);
    r.includes(n) || r.push(n)
  }
  once(e, n) {
    const r = (...i) => {
      this.removeListener(e, r), n.apply(this, i)
    };
    this.on(e, r)
  }
  emit(e, ...n) {
    this._getHandlersByEventName(e).forEach(r => {
      try {
        r.apply(this, n)
      } catch (i) {
        console.error(i)
      }
    })
  }
  removeListener(e, n) {
    const r = this._getHandlersByEventName(e),
      i = r.indexOf(n);
    i > -1 && r.splice(i, 1)
  }
  removeAllListeners(e) {
    this.events[e] !== void 0 && (this.events[e].length = 0)
  }
  reset() {
    this.events = {}
  }
}
re.eventEmitter = new RF;
const NF = (t, e) => {
    re.eventEmitter.on(t, e)
  },
  LF = (t, e) => {
    re.eventEmitter.once(t, e)
  },
  MF = (t, e) => {
    if (!t) {
      re.eventEmitter.reset();
      return
    }
    e ? re.eventEmitter.removeListener(t, e) : re.eventEmitter.removeAllListeners(t)
  };
var DF = Object.freeze({
  __proto__: null,
  argsToParams: xF,
  bindClickHandler: AF,
  clickCancel: xV,
  clickConfirm: Vb,
  clickDeny: _V,
  enableLoading: xo,
  fire: SF,
  getActions: x0,
  getCancelButton: Do,
  getCloseButton: If,
  getConfirmButton: j2,
  getContainer: Yn,
  getDenyButton: cs,
  getFocusableElements: Rf,
  getFooter: Cb,
  getHtmlContainer: Pf,
  getIcon: Mo,
  getIconContent: kj,
  getImage: Tb,
  getInputLabel: Pj,
  getLoader: Oo,
  getPopup: Fe,
  getProgressSteps: Af,
  getTimerLeft: TF,
  getTimerProgressBar: Cc,
  getTitle: Eb,
  getValidationMessage: Tc,
  increaseTimer: kF,
  isDeprecatedParameter: s_,
  isLoading: Ij,
  isTimerRunning: PF,
  isUpdatableParameter: i_,
  isValidParameter: r_,
  isVisible: bV,
  mixin: EF,
  off: MF,
  on: NF,
  once: LF,
  resumeTimer: d_,
  showLoading: xo,
  stopTimer: c_,
  toggleTimer: CF
});
class OF {
  constructor(e, n) {
    this.callback = e, this.remaining = n, this.running = !1, this.start()
  }
  start() {
    return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
  }
  stop() {
    return this.started && this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date().getTime() - this.started.getTime()), this.remaining
  }
  increase(e) {
    const n = this.running;
    return n && this.stop(), this.remaining += e, n && this.start(), this.remaining
  }
  getTimerLeft() {
    return this.running && (this.stop(), this.start()), this.remaining
  }
  isRunning() {
    return this.running
  }
}
const h_ = ["swal-title", "swal-html", "swal-footer"],
  jF = t => {
    const e = typeof t.template == "string" ? document.querySelector(t.template) : t.template;
    if (!e) return {};
    const n = e.content;
    return HF(n), Object.assign(VF(n), FF(n), BF(n), $F(n), zF(n), UF(n), WF(n, h_))
  },
  VF = t => {
    const e = {};
    return Array.from(t.querySelectorAll("swal-param")).forEach(r => {
      es(r, ["name", "value"]);
      const i = r.getAttribute("name"),
        a = r.getAttribute("value");
      !i || !a || (typeof fo[i] == "boolean" ? e[i] = a !== "false" : typeof fo[i] == "object" ? e[i] = JSON.parse(a) : e[i] = a)
    }), e
  },
  FF = t => {
    const e = {};
    return Array.from(t.querySelectorAll("swal-function-param")).forEach(r => {
      const i = r.getAttribute("name"),
        a = r.getAttribute("value");
      !i || !a || (e[i] = new Function(`return ${a}`)())
    }), e
  },
  BF = t => {
    const e = {};
    return Array.from(t.querySelectorAll("swal-button")).forEach(r => {
      es(r, ["type", "color", "aria-label"]);
      const i = r.getAttribute("type");
      !i || !["confirm", "cancel", "deny"].includes(i) || (e[`${i}ButtonText`] = r.innerHTML, e[`show${Tf(i)}Button`] = !0, r.hasAttribute("color") && (e[`${i}ButtonColor`] = r.getAttribute("color")), r.hasAttribute("aria-label") && (e[`${i}ButtonAriaLabel`] = r.getAttribute("aria-label")))
    }), e
  },
  $F = t => {
    const e = {},
      n = t.querySelector("swal-image");
    return n && (es(n, ["src", "width", "height", "alt"]), n.hasAttribute("src") && (e.imageUrl = n.getAttribute("src") || void 0), n.hasAttribute("width") && (e.imageWidth = n.getAttribute("width") || void 0), n.hasAttribute("height") && (e.imageHeight = n.getAttribute("height") || void 0), n.hasAttribute("alt") && (e.imageAlt = n.getAttribute("alt") || void 0)), e
  },
  zF = t => {
    const e = {},
      n = t.querySelector("swal-icon");
    return n && (es(n, ["type", "color"]), n.hasAttribute("type") && (e.icon = n.getAttribute("type")), n.hasAttribute("color") && (e.iconColor = n.getAttribute("color")), e.iconHtml = n.innerHTML), e
  },
  UF = t => {
    const e = {},
      n = t.querySelector("swal-input");
    n && (es(n, ["type", "label", "placeholder", "value"]), e.input = n.getAttribute("type") || "text", n.hasAttribute("label") && (e.inputLabel = n.getAttribute("label")), n.hasAttribute("placeholder") && (e.inputPlaceholder = n.getAttribute("placeholder")), n.hasAttribute("value") && (e.inputValue = n.getAttribute("value")));
    const r = Array.from(t.querySelectorAll("swal-input-option"));
    return r.length && (e.inputOptions = {}, r.forEach(i => {
      es(i, ["value"]);
      const a = i.getAttribute("value");
      if (!a) return;
      const l = i.innerHTML;
      e.inputOptions[a] = l
    })), e
  },
  WF = (t, e) => {
    const n = {};
    for (const r in e) {
      const i = e[r],
        a = t.querySelector(i);
      a && (es(a, []), n[i.replace(/^swal-/, "")] = a.innerHTML.trim())
    }
    return n
  },
  HF = t => {
    const e = h_.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
    Array.from(t.children).forEach(n => {
      const r = n.tagName.toLowerCase();
      e.includes(r) || Qn(`Unrecognized element <${r}>`)
    })
  },
  es = (t, e) => {
    Array.from(t.attributes).forEach(n => {
      e.indexOf(n.name) === -1 && Qn([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`, `${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])
    })
  },
  f_ = 10,
  qF = t => {
    const e = Yn(),
      n = Fe();
    typeof t.willOpen == "function" && t.willOpen(n), re.eventEmitter.emit("willOpen", n);
    const i = window.getComputedStyle(document.body).overflowY;
    QF(e, n, t), setTimeout(() => {
      GF(e, n)
    }, f_), Nf() && (KF(e, t.scrollbarPadding, i), IV()), !kc() && !re.previousActiveElement && (re.previousActiveElement = document.activeElement), typeof t.didOpen == "function" && setTimeout(() => t.didOpen(n)), re.eventEmitter.emit("didOpen", n), qr(e, a1["no-transition"])
  },
  $u = t => {
    const e = Fe();
    if (t.target !== e) return;
    const n = Yn();
    e.removeEventListener("animationend", $u), e.removeEventListener("transitionend", $u), n.style.overflowY = "auto"
  },
  GF = (t, e) => {
    Ab(e) ? (t.style.overflowY = "hidden", e.addEventListener("animationend", $u), e.addEventListener("transitionend", $u)) : t.style.overflowY = "auto"
  },
  KF = (t, e, n) => {
    RV(), e && n !== "hidden" && VV(n), setTimeout(() => {
      t.scrollTop = 0
    })
  },
  QF = (t, e, n) => {
    We(t, n.showClass.backdrop), n.animation ? (e.style.setProperty("opacity", "0", "important"), dn(e, "grid"), setTimeout(() => {
      We(e, n.showClass.popup), e.style.removeProperty("opacity")
    }, f_)) : dn(e, "grid"), We([document.documentElement, document.body], a1.shown), n.heightAuto && n.backdrop && !n.toast && We([document.documentElement, document.body], a1["height-auto"])
  };
var y7 = {
  email: (t, e) => /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address"),
  url: (t, e) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid URL")
};

function YF(t) {
  t.inputValidator || (t.input === "email" && (t.inputValidator = y7.email), t.input === "url" && (t.inputValidator = y7.url))
}

function XF(t) {
  (!t.target || typeof t.target == "string" && !document.querySelector(t.target) || typeof t.target != "string" && !t.target.appendChild) && (Qn('Target parameter is not valid, defaulting to "body"'), t.target = "body")
}

function JF(t) {
  YF(t), t.showLoaderOnConfirm && !t.preConfirm && Qn(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), XF(t), typeof t.title == "string" && (t.title = t.title.split(`
`).join("<br />")), zj(t)
}
let x2;
var $l = new WeakMap;
class jt {
  constructor(...e) {
    if (wj(this, $l, void 0), typeof window > "u") return;
    x2 = this;
    const n = Object.freeze(this.constructor.argsToParams(e));
    this.params = n, this.isAwaitingPromise = !1, bj($l, this, this._main(x2.params))
  }
  _main(e, n = {}) {
    if (o_(Object.assign({}, n, e)), re.currentInstance) {
      const a = _o.swalPromiseResolve.get(re.currentInstance),
        {
          isAwaitingPromise: l
        } = re.currentInstance;
      re.currentInstance._destroy(), l || a({
        isDismissed: !0
      }), Nf() && $b()
    }
    re.currentInstance = x2;
    const r = eB(e, n);
    JF(r), Object.freeze(r), re.timeout && (re.timeout.stop(), delete re.timeout), clearTimeout(re.restoreFocusTimeout);
    const i = tB(x2);
    return jb(x2, r), ut.innerParams.set(x2, r), ZF(x2, i, r)
  }
  then(e) {
    return a7($l, this).then(e)
  } finally(e) {
    return a7($l, this).finally(e)
  }
}
const ZF = (t, e, n) => new Promise((r, i) => {
    const a = l => {
      t.close({
        isDismissed: !0,
        dismiss: l
      })
    };
    _o.swalPromiseResolve.set(t, r), _o.swalPromiseReject.set(t, i), e.confirmButton.onclick = () => {
      tF(t)
    }, e.denyButton.onclick = () => {
      nF(t)
    }, e.cancelButton.onclick = () => {
      rF(t, a)
    }, e.closeButton.onclick = () => {
      a(jo.close)
    }, mF(n, e, a), SV(re, n, a), qV(t, n), qF(n), nB(re, n, a), rB(e, n), setTimeout(() => {
      e.container.scrollTop = 0
    })
  }),
  eB = (t, e) => {
    const n = jF(t),
      r = Object.assign({}, fo, e, n, t);
    return r.showClass = Object.assign({}, fo.showClass, r.showClass), r.hideClass = Object.assign({}, fo.hideClass, r.hideClass), r.animation === !1 && (r.showClass = {
      backdrop: "swal2-noanimation"
    }, r.hideClass = {}), r
  },
  tB = t => {
    const e = {
      popup: Fe(),
      container: Yn(),
      actions: x0(),
      confirmButton: j2(),
      denyButton: cs(),
      cancelButton: Do(),
      loader: Oo(),
      closeButton: If(),
      validationMessage: Tc(),
      progressSteps: Af()
    };
    return ut.domCache.set(t, e), e
  },
  nB = (t, e, n) => {
    const r = Cc();
    Vn(r), e.timer && (t.timeout = new OF(() => {
      n("timer"), delete t.timeout
    }, e.timer), e.timerProgressBar && (dn(r), xr(r, e, "timerProgressBar"), setTimeout(() => {
      t.timeout && t.timeout.running && Mf(e.timer)
    })))
  },
  rB = (t, e) => {
    if (!e.toast) {
      if (!Ec(e.allowEnterKey)) {
        Sb("allowEnterKey"), oB();
        return
      }
      iB(t) || sB(t, e) || Uh(-1, 1)
    }
  },
  iB = t => {
    const e = Array.from(t.popup.querySelectorAll("[autofocus]"));