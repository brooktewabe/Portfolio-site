          children: _.jsx("div", {
            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5",
            children: tb.map((v, C) => _.jsx("div", {
              "data-aos": C % 3 === 0 ? "fade-up-right" : C % 3 === 1 ? "fade-up" : "fade-up-left",
              "data-aos-duration": C % 3 === 0 ? "1000" : C % 3 === 1 ? "1200" : "1000",
              children: _.jsx($D, {
                TechStackIcon: v.icon,
                Language: v.language
              })
            }, C))
          })
        })
      })]
    })]
  })
}
const HD = M.memo(() => _.jsxs("div", {
    className: "text-center lg:mb-8 mb-2 px-[5%]",
    children: [_.jsx("div", {
      className: "inline-block relative group",
      children: _.jsx("h2", {
        className: "text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]",
        "data-aos": "zoom-in-up",
        "data-aos-duration": "600",
        children: "About Me"
      })
    }), _.jsxs("p", {
      className: "mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2",
      "data-aos": "zoom-in-up",
      "data-aos-duration": "800",
      children: [_.jsx(ih, {
        className: "w-5 h-5 text-purple-400"
      }), "Transforming ideas into digital experiences", _.jsx(ih, {
        className: "w-5 h-5 text-purple-400"
      })]
    })]
  })),
  qD = M.memo(() => _.jsx("div", {
    className: "flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2",
    children: _.jsxs("div", {
      className: "relative group",
      "data-aos": "fade-up",
      "data-aos-duration": "1000",
      children: [_.jsxs("div", {
        className: "absolute -inset-6 opacity-[25%] z-0 hidden sm:block",
        children: [_.jsx("div", {
          className: "absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower"
        }), _.jsx("div", {
          className: "absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50"
        }), _.jsx("div", {
          className: "absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50"
        })]
      }), _.jsx("div", {
        className: "relative",
        children: _.jsxs("div", {
          className: "w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105",
          children: [_.jsx("div", {
            className: "absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105"
          }), _.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block"
          }), _.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block"
          }), _.jsx("img", {
            src: "/Masab Qurban.png",
            alt: "Profile",
            className: "w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
          }), _.jsxs("div", {
            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block",
            children: [_.jsx("div", {
              className: "absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            }), _.jsx("div", {
              className: "absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100"
            }), _.jsx("div", {
              className: "absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow"
            })]
          })]
        })
      })]
    })
  })),
  GD = M.memo(({
    icon: t,
    color: e,
    value: n,
    label: r,
    description: i,
    animation: a
  }) => _.jsx("div", {
    "data-aos": a,
    "data-aos-duration": 1300,
    className: "relative group",
    children: _.jsxs("div", {
      className: "relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between",
      children: [_.jsx("div", {
        className: `absolute -z-10 inset-0 bg-gradient-to-br ${e} opacity-10 group-hover:opacity-20 transition-opacity duration-300`
      }), _.jsxs("div", {
        className: "flex items-center justify-between mb-4",
        children: [_.jsx("div", {
          className: "w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6",
          children: _.jsx(t, {
            className: "w-8 h-8 text-white"
          })
        }), _.jsx("span", {
          className: "text-4xl font-bold text-white",
          "data-aos": "fade-up-left",
          "data-aos-duration": "1500",
          "data-aos-anchor-placement": "top-bottom",
          children: n
        })]
      }), _.jsxs("div", {
        children: [_.jsx("p", {
          className: "text-sm uppercase tracking-wider text-gray-300 mb-2",
          "data-aos": "fade-up",
          "data-aos-duration": "800",
          "data-aos-anchor-placement": "top-bottom",
          children: r
        }), _.jsxs("div", {
          className: "flex items-center justify-between",
          children: [_.jsx("p", {
            className: "text-xs text-gray-400",
            "data-aos": "fade-up",
            "data-aos-duration": "1000",
            "data-aos-anchor-placement": "top-bottom",
            children: i
          }), _.jsx(gT, {
            className: "w-4 h-4 text-white/50 group-hover:text-white transition-colors"
          })]
        })]
      })]
    })
  })),
  KD = () => {
    const {
      totalProjects: t,
      totalCertificates: e,
      YearExperience: n
    } = M.useMemo(() => {
      const i = JSON.parse(localStorage.getItem("projects") || "[]"),
        a = JSON.parse(localStorage.getItem("certificates") || "[]"),
        l = new Date("2024-07-01"),
        c = new Date,
        p = (((c.getFullYear() - l.getFullYear()) * 12 + (c.getMonth() - l.getMonth())) / 12).toFixed(1);
      return {
        totalProjects: i.length,
        totalCertificates: a.length,
        YearExperience: p
      }
    }, []);
    M.useEffect(() => {
      const i = () => {
        ko.init({
          once: !1
        })
      };
      i();
      let a;
      const l = () => {
        clearTimeout(a), a = setTimeout(i, 250)
      };
      return window.addEventListener("resize", l), () => {
        window.removeEventListener("resize", l), clearTimeout(a)
      }
    }, []);
    const r = M.useMemo(() => [{
      icon: oo,
      color: "from-[#6366f1] to-[#a855f7]",
      value: t,
      label: "Total Projects",
      description: "Innovative web solutions crafted",
      animation: "fade-right"
    }, {
      icon: Yy,
      color: "from-[#a855f7] to-[#6366f1]",
      value: `${tb.length}`,
      label: "Professional Skills",
      description: "Validated expertise across modern tech stack",
      animation: "fade-up"
    }, {
      icon: f9,
      color: "from-[#6366f1] to-[#a855f7]",
      value: n,
      label: "Years of Experience",
      description: "Continuous learning journey",
      animation: "fade-left"
    }], [t, e, n]);
    return _.jsxs("div", {
      className: "h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0",
      id: "About",
      children: [_.jsx(HD, {}), _.jsxs("div", {
        className: "w-full mx-auto pt-8 sm:pt-12 relative",
        children: [_.jsxs("div", {
          className: "flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center",
          children: [_.jsxs("div", {
            className: "space-y-6 text-center lg:text-left",
            children: [_.jsxs("h2", {
              className: "text-3xl sm:text-4xl lg:text-5xl font-bold",
              "data-aos": "fade-right",
              "data-aos-duration": "1000",
              children: [_.jsx("span", {
                className: "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]",
                children: "Hello, I'm"
              }), _.jsx("span", {
                className: "block mt-2 text-gray-200",
                "data-aos": "fade-right",
                "data-aos-duration": "1300",
                children: "Masab Qurban"
              })]
            }), _.jsx("p", {
              className: "text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0",
              "data-aos": "fade-right",
              "data-aos-duration": "1500",
              children: "Full Stack Web Developer with expertise in React JS, Next JS, Node JS, Laravel, and Tailwind CSS. Skilled in building responsive, scalable, and user-friendly web applications, developing and integrating RESTful APIs, connecting frontend with backend systems, and optimizing performance. Proficient in JavaScript and database management, with a strong focus on writing clean, maintainable code and improving user experience."
            }), _.jsxs("div", {
              className: "flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full",
              children: [_.jsx("a", {
                href: "/Masab Qurban Resume.pdf",
                className: "w-full lg:w-auto",
                children: _.jsxs("button", {
                  "data-aos": "fade-up",
                  "data-aos-duration": "800",
                  className: "w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow",
                  children: [_.jsx(ST, {
                    className: "w-4 h-4 sm:w-5 sm:h-5"
                  }), " Download CV"]
                })
              }), _.jsx("a", {
                href: "#Portofolio",
                className: "w-full lg:w-auto",
                children: _.jsxs("button", {
                  "data-aos": "fade-up",
                  "data-aos-duration": "1000",
                  className: "w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 animate-bounce-slow delay-200",
                  children: [_.jsx(oo, {
                    className: "w-4 h-4 sm:w-5 sm:h-5"
                  }), " View Projects"]
                })
              })]
            })]
          }), _.jsx(qD, {})]
        }), _.jsx("a", {
          href: "#Portofolio",
          children: _.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer",
            children: r.map(i => _.jsx(GD, {
              ...i
            }, i.label))
          })
        })]
      }), _.jsx("style", {
        jsx: !0,
        children: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slower {
          to { transform: rotate(360deg); }
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 8s linear infinite;
        }
      `
      })]
    })
  },
  QD = M.memo(KD),
  YD = () => {
    const t = M.useRef([]),
      e = [{
        x: -4,
        y: 0
      }, {
        x: -4,
        y: 0
      }, {
        x: 20,
        y: -8
      }, {
        x: 20,
        y: -8
      }];
    return M.useEffect(() => {
      let n;
      const r = () => {
        const i = window.pageYOffset;
        t.current.forEach((a, l) => {
          const c = e[l],
            h = Math.sin(i / 100 + l * .5) * 340,
            p = Math.cos(i / 100 + l * .5) * 40,
            m = c.x + h,
            y = c.y + p;
          a.style.transform = `translate(${m}px, ${y}px)`, a.style.transition = "transform 1.4s ease-out"
        }), n = requestAnimationFrame(r)
      };
      return window.addEventListener("scroll", r), () => {
        window.removeEventListener("scroll", r), cancelAnimationFrame(n)
      }
    }, []), _.jsxs("div", {
      className: "fixed inset-0 ",
      children: [_.jsxs("div", {
        className: "absolute inset-0",
        children: [_.jsx("div", {
          ref: n => t.current[0] = n,
          className: "absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 "
        }), _.jsx("div", {
          ref: n => t.current[1] = n,
          className: "absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 hidden sm:block"
        }), _.jsx("div", {
          ref: n => t.current[2] = n,
          className: "absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 "
        }), _.jsx("div", {
          ref: n => t.current[3] = n,
          className: "absolute -bottom-10 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 md:opacity-10 hidden sm:block"
        })]
      }), _.jsx("div", {
        className: "absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px]"
      })]
    })
  },
  XD = () => {
    const [t, e] = M.useState(!1), [n, r] = M.useState(!1), [i, a] = M.useState("Home"), l = [{
      href: "#Home",
      label: "Home"
    }, {
      href: "#About",
      label: "About"
    }, {
      href: "#Portofolio",
      label: "Portofolio"
    }, {
      href: "#Contact",
      label: "Contact"
    }];
    M.useEffect(() => {
      const h = () => {
        r(window.scrollY > 20);
        const p = l.map(v => {
            const C = document.querySelector(v.href);
            return C ? {
              id: v.href.replace("#", ""),
              offset: C.offsetTop - 550,
              height: C.offsetHeight
            } : null
          }).filter(Boolean),
          m = window.scrollY,
          y = p.find(v => m >= v.offset && m < v.offset + v.height);
        y && a(y.id)
      };
      return window.addEventListener("scroll", h), h(), () => window.removeEventListener("scroll", h)
    }, []), M.useEffect(() => {
      t ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset"
    }, [t]);
    const c = (h, p) => {
      h.preventDefault();
      const m = document.querySelector(p);
      if (m) {
        const y = m.offsetTop - 100;
        window.scrollTo({
          top: y,
          behavior: "smooth"
        })
      }
      e(!1)
    };
    return _.jsxs("nav", {
      className: `fixed w-full top-0 z-50 transition-all duration-500 ${t?"bg-[#030014] opacity-100":n?"bg-[#030014]/50 backdrop-blur-xl pb-1 sm:pb-6":"bg-transparent"}`,
      children: [_.jsx("div", {
        className: "mx-auto px-4 sm:px-6 lg:px-[10%]",
        children: _.jsxs("div", {
          className: "flex items-center justify-between h-16",
          children: [_.jsx("div", {
            className: "flex-shrink-0",
            children: _.jsx("a", {
              href: "#Home",
              onClick: h => c(h, "#Home"),
              className: "text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent",
              children: _.jsx("img", {
                className: "h-12 w-12 sm:h-16 sm:w-16 mt-1 sm:mt-6",
                src: "../Mlogo1.svg",
                alt: ""
              })
            })
          }), _.jsx("div", {
            className: "hidden md:block",
            children: _.jsx("div", {
              className: "ml-8 flex items-center space-x-8 mt-3",
              children: l.map(h => _.jsxs("a", {
                href: h.href,
                onClick: p => c(p, h.href),
                className: "group relative px-1 py-2 text-sm font-medium",
                children: [_.jsx("span", {
                  className: `relative z-10 transition-colors duration-300 ${i===h.href.substring(1)?"bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold":"text-[#e2d3fd] group-hover:text-white"}`,
                  children: h.label
                }), _.jsx("span", {
                  className: `absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 ${i===h.href.substring(1)?"scale-x-100":"scale-x-0 group-hover:scale-x-100"}`
                })]
              }, h.label))
            })
          }), _.jsx("div", {
            className: "md:hidden",
            children: _.jsx("button", {
              onClick: () => e(!t),
              className: `relative p-2 text-[#e2d3fd] hover:text-white transition-transform duration-300 ease-in-out transform ${t?"rotate-90 scale-125":"rotate-0 scale-100"}`,
              children: t ? _.jsx(NT, {
                className: "w-6 h-6"
              }) : _.jsx(CT, {
                className: "w-6 h-6"
              })
            })
          })]
        })
      }), _.jsx("div", {
        className: `md:hidden h-2/5 fixed inset-0 bg-[#030014] transition-all duration-300 ease-in-out ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-[-100%] pointer-events-none"}`,
        style: {
          top: "64px"
        },
        children: _.jsx("div", {
          className: "flex flex-col h-full",
          children: _.jsx("div", {
            className: "px-4 py-6 space-y-4 flex-1 ",
            children: l.map((h, p) => _.jsx("a", {
              href: h.href,
              onClick: m => c(m, h.href),
              className: `block px-4 py-3 text-lg font-medium transition-all duration-300 ease ${i===h.href.substring(1)?"bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold":"text-[#e2d3fd] hover:text-white"}`,
              style: {
                transitionDelay: `${p*100}ms`,
                transform: t ? "translateX(0)" : "translateX(50px)",
                opacity: t ? 1 : 0
              },
              children: h.label
            }, h.label))
          })
        })
      })]
    })
  },
  e7 = [{
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: ev,
    url: "https://www.linkedin.com/in/masab-qurban/",
    color: "#0a66c2",
    gradient: "from-[#0a66c2] to-[#377abd]",
    isPrimary: !0
  }, {
    name: "GitHub",
    displayName: "Github",
    subText: "masabqurban",
    icon: h9,
    url: "https://github.com/masabqurban",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]"
  }, {
    name: "Facebook",
    displayName: "Facebook",
    subText: "masabqurban",
    icon: xT,
    url: "https://facebook.com/masabqurban",
    color: "#0866ff",
    gradient: "from-[#0866ff] to-[#428aff]"
  }, {
    name: "Instagram",
    displayName: "Instagram",
    subText: "masabqurban",
    icon: Zy,
    url: "https://www.instagram.com/masabqurban/",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]"
  }],
  JD = () => {
    const t = e7.find(a => a.isPrimary),
      e = e7.filter(a => !a.isPrimary),
      [n, r, i] = e;
    return _.jsxs("div", {
      className: "w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl",
      children: [_.jsxs("h3", {
        className: "text-xl font-semibold text-white mb-6 flex items-center gap-2",
        children: [_.jsx("span", {
          className: "inline-block w-8 h-1 bg-indigo-500 rounded-full"
        }), "Connect With Me"]
      }), _.jsxs("div", {
        className: "flex flex-col gap-4",
        children: [_.jsxs("a", {
          href: t.url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: `group relative flex items-center justify-between p-4 rounded-lg 
             bg-white/5 border border-white/10 overflow-hidden
             hover:border-white/20 transition-all duration-500`,
          children: [_.jsx("div", {
            className: `absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
               bg-gradient-to-r ${t.gradient}`
          }), _.jsxs("div", {
            className: "relative flex items-center gap-4",
            children: [_.jsxs("div", {
              className: "relative flex items-center justify-center",
              children: [_.jsx("div", {
                className: `absolute inset-0 opacity-20 rounded-md transition-all duration-500
                   group-hover:scale-110 group-hover:opacity-30`,
                style: {
                  backgroundColor: t.color
                }
              }), _.jsx("div", {
                className: "relative p-2 rounded-md",
                children: _.jsx(t.icon, {
                  className: "w-6 h-6 transition-all duration-500 group-hover:scale-105",
                  style: {
                    color: t.color
                  }
                })
              })]
            }), _.jsxs("div", {
              className: "flex flex-col",
              children: [_.jsx("span", {
                className: "text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300",
                children: t.displayName
              }), _.jsx("span", {
                className: "text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300",
                children: t.subText
              })]
            })]
          }), _.jsx(O3, {
            className: `relative w-5 h-5 text-gray-500 group-hover:text-white
               opacity-0 group-hover:opacity-100 transition-all duration-300
               transform group-hover:translate-x-0 -translate-x-1`
          }), _.jsx("div", {
            className: "absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden",
            children: _.jsx("div", {
              className: `absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`
            })
          })]
        }), _.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: [_.jsxs("a", {
            href: "https://x.com/masab_qurban",
            target: "_blank",
            rel: "noopener noreferrer",
            className: `group relative flex items-center gap-3 p-4 rounded-xl 
                   bg-white/5 border border-white/10 overflow-hidden
                   hover:border-white/20 transition-all duration-500`,
            children: [_.jsx("div", {
              className: `absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                         bg-gradient-to-r from-[#000000] to-[#000]`
            }), _.jsxs("div", {
              className: "relative flex items-center justify-center",
              children: [_.jsx("div", {
                className: `absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                           group-hover:scale-125 group-hover:opacity-30`,
                style: {
                  backgroundColor: "#fff"
                }
              }), _.jsx("div", {
                className: "relative p-2 rounded-lg transition-all duration-500 group-hover:scale-110",
                children: _.jsx("svg", {
                  className: "w-5 h-5 ",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512",
                  children: _.jsx("path", {
                    fill: "#fff",
                    d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  })
                })
              })]
            }), _.jsxs("div", {
              className: "flex flex-col min-w-0",
              children: [_.jsx("span", {
                className: "text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300",
                children: "X"
              }), _.jsx("span", {
                className: "text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300",
                children: "masab_qurban"
              })]
            }), _.jsx(O3, {
              className: `w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                 opacity-0 group-hover:opacity-100 transition-all duration-300
                                 transform group-hover:translate-x-0 -translate-x-2`
            }), _.jsx("div", {
              className: "absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden",
              children: _.jsx("div", {
                className: `absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`
              })
            })]
          }), [n].map(a => _.jsxs("a", {
            href: a.url || "#",
            target: "_blank",
            rel: "noopener noreferrer",
            className: `group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500`,
            children: [_.jsx("div", {
              className: `absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-gradient-to-r ${a.gradient}`
            }), _.jsxs("div", {
              className: "relative flex items-center justify-center",
              children: [_.jsx("div", {
                className: `absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30`,
                style: {
                  backgroundColor: a.color
                }
              }), _.jsx("div", {
                className: "relative p-2 rounded-lg",
                children: _.jsx(a.icon, {
                  className: "w-5 h-5 transition-all duration-500 group-hover:scale-110",
                  style: {
                    color: a.color
                  }
                })
              })]
            }), _.jsxs("div", {
              className: "flex flex-col min-w-0",
              children: [_.jsx("span", {
                className: "text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300",
                children: a.displayName
              }), _.jsx("span", {
                className: "text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300",
                children: a.subText
              })]
            }), _.jsx(O3, {
              className: `w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2`
            }), _.jsx("div", {
              className: "absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden",
              children: _.jsx("div", {
                className: `absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`
              })
            })]
          }, a.name))]
        }), _.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: [r, i].map(a => _.jsxs("a", {
            href: a.url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: `group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500`,
            children: [_.jsx("div", {
              className: `absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-gradient-to-r ${a.gradient}`
            }), _.jsxs("div", {
              className: "relative flex items-center justify-center",
              children: [_.jsx("div", {
                className: `absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30`,
                style: {
                  backgroundColor: a.color
                }
              }), _.jsx("div", {
                className: "relative p-2 rounded-lg",
                children: _.jsx(a.icon, {
                  className: "w-5 h-5 transition-all duration-500 group-hover:scale-110",
                  style: {
                    color: a.color
                  }
                })
              })]
            }), _.jsxs("div", {
              className: "flex flex-col min-w-0",
              children: [_.jsx("span", {
                className: "text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300",
                children: a.displayName
              }), _.jsx("span", {
                className: "text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300",
                children: a.subText
              })]
            }), _.jsx(O3, {
              className: `w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2`
            }), _.jsx("div", {
              className: "absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden",
              children: _.jsx("div", {
                className: `absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`
              })
            })]
          }, a.name))
        })]
      })]
    })
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
const nb = "firebasestorage.googleapis.com",
  rb = "storageBucket",
  ZD = 120 * 1e3,
  eO = 600 * 1e3;
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
class At extends ns {
  constructor(e, n, r = 0) {
    super(O4(e), `Firebase Storage: ${n} (${O4(e)})`), this.status_ = r, this.customData = {
      serverResponse: null
    }, this._baseMessage = this.message, Object.setPrototypeOf(this, At.prototype)
  }
  get status() {
    return this.status_
  }
  set status(e) {
    this.status_ = e
  }
  _codeEquals(e) {
    return O4(e) === this.code
  }
  get serverResponse() {
    return this.customData.serverResponse
  }
  set serverResponse(e) {
    this.customData.serverResponse = e, this.customData.serverResponse ? this.message = `${this._baseMessage}
${this.customData.serverResponse}` : this.message = this._baseMessage
  }
}
var Pt;
(function(t) {
  t.UNKNOWN = "unknown", t.OBJECT_NOT_FOUND = "object-not-found", t.BUCKET_NOT_FOUND = "bucket-not-found", t.PROJECT_NOT_FOUND = "project-not-found", t.QUOTA_EXCEEDED = "quota-exceeded", t.UNAUTHENTICATED = "unauthenticated", t.UNAUTHORIZED = "unauthorized", t.UNAUTHORIZED_APP = "unauthorized-app", t.RETRY_LIMIT_EXCEEDED = "retry-limit-exceeded", t.INVALID_CHECKSUM = "invalid-checksum", t.CANCELED = "canceled", t.INVALID_EVENT_NAME = "invalid-event-name", t.INVALID_URL = "invalid-url", t.INVALID_DEFAULT_BUCKET = "invalid-default-bucket", t.NO_DEFAULT_BUCKET = "no-default-bucket", t.CANNOT_SLICE_BLOB = "cannot-slice-blob", t.SERVER_FILE_WRONG_SIZE = "server-file-wrong-size", t.NO_DOWNLOAD_URL = "no-download-url", t.INVALID_ARGUMENT = "invalid-argument", t.INVALID_ARGUMENT_COUNT = "invalid-argument-count", t.APP_DELETED = "app-deleted", t.INVALID_ROOT_OPERATION = "invalid-root-operation", t.INVALID_FORMAT = "invalid-format", t.INTERNAL_ERROR = "internal-error", t.UNSUPPORTED_ENVIRONMENT = "unsupported-environment"
})(Pt || (Pt = {}));

function O4(t) {
  return "storage/" + t
}

function bf() {
  const t = "An unknown error occurred, please check the error payload for server response.";
  return new At(Pt.UNKNOWN, t)
}

function tO(t) {
  return new At(Pt.OBJECT_NOT_FOUND, "Object '" + t + "' does not exist.")
}

function nO(t) {
  return new At(Pt.QUOTA_EXCEEDED, "Quota for bucket '" + t + "' exceeded, please view quota on https://firebase.google.com/pricing/.")
}

function rO() {
  const t = "User is not authenticated, please authenticate using Firebase Authentication and try again.";
  return new At(Pt.UNAUTHENTICATED, t)
}

function iO() {
  return new At(Pt.UNAUTHORIZED_APP, "This app does not have permission to access Firebase Storage on this project.")
}

function sO(t) {
  return new At(Pt.UNAUTHORIZED, "User does not have permission to access '" + t + "'.")
}

function oO() {
  return new At(Pt.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again.")
}

function aO() {
  return new At(Pt.CANCELED, "User canceled the upload/download.")
}

function lO(t) {
  return new At(Pt.INVALID_URL, "Invalid URL '" + t + "'.")
}

function uO(t) {
  return new At(Pt.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + t + "'.")
}

function cO() {
  return new At(Pt.NO_DEFAULT_BUCKET, "No default bucket found. Did you set the '" + rb + "' property when initializing the app?")
}

function dO() {
  return new At(Pt.CANNOT_SLICE_BLOB, "Cannot slice blob for upload. Please retry the upload.")
}

function hO() {
  return new At(Pt.NO_DOWNLOAD_URL, "The given file does not have any download URLs.")
}

function fO(t) {
  return new At(Pt.UNSUPPORTED_ENVIRONMENT, `${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)
}

function $h(t) {
  return new At(Pt.INVALID_ARGUMENT, t)
}

function ib() {
  return new At(Pt.APP_DELETED, "The Firebase app was deleted.")
}

function pO(t) {
  return new At(Pt.INVALID_ROOT_OPERATION, "The operation '" + t + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")
}

function ja(t, e) {
  return new At(Pt.INVALID_FORMAT, "String does not match format '" + t + "': " + e)
}

function va(t) {
  throw new At(Pt.INTERNAL_ERROR, "Internal error: " + t)
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
class vr {
  constructor(e, n) {
    this.bucket = e, this.path_ = n
  }
  get path() {
    return this.path_
  }
  get isRoot() {
    return this.path.length === 0
  }
  fullServerUrl() {
    const e = encodeURIComponent;
    return "/b/" + e(this.bucket) + "/o/" + e(this.path)
  }
  bucketOnlyServerUrl() {
    return "/b/" + encodeURIComponent(this.bucket) + "/o"
  }
  static makeFromBucketSpec(e, n) {
    let r;
    try {
      r = vr.makeFromUrl(e, n)
    } catch {
      return new vr(e, "")
    }
    if (r.path === "") return r;
    throw uO(e)
  }
  static makeFromUrl(e, n) {
    let r = null;
    const i = "([A-Za-z0-9.\\-_]+)";

    function a(H) {
      H.path.charAt(H.path.length - 1) === "/" && (H.path_ = H.path_.slice(0, -1))
    }
    const l = "(/(.*))?$",
      c = new RegExp("^gs://" + i + l, "i"),
      h = {
        bucket: 1,
        path: 3
      };

    function p(H) {
      H.path_ = decodeURIComponent(H.path)
    }
    const m = "v[A-Za-z0-9_]+",
      y = n.replace(/[.]/g, "\\."),
      v = "(/([^?#]*).*)?$",
      C = new RegExp(`^https?://${y}/${m}/b/${i}/o${v}`, "i"),
      P = {
        bucket: 1,
        path: 3
      },
      k = n === nb ? "(?:storage.googleapis.com|storage.cloud.google.com)" : n,
      R = "([^?#]*)",
      W = new RegExp(`^https?://${k}/${i}/${R}`, "i"),
      U = [{
        regex: c,
        indices: h,
        postModify: a
      }, {
        regex: C,
        indices: P,
        postModify: p
      }, {
        regex: W,
        indices: {
          bucket: 1,
          path: 2
        },
        postModify: p
      }];
    for (let H = 0; H < U.length; H++) {
      const $ = U[H],
        X = $.regex.exec(e);
      if (X) {
        const D = X[$.indices.bucket];
        let A = X[$.indices.path];
        A || (A = ""), r = new vr(D, A), $.postModify(r);
        break
      }
    }
    if (r == null) throw lO(e);
    return r
  }
}
class mO {
  constructor(e) {
    this.promise_ = Promise.reject(e)
  }
  getPromise() {
    return this.promise_
  }
  cancel(e = !1) {}
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
function gO(t, e, n) {
  let r = 1,
    i = null,
    a = null,
    l = !1,
    c = 0;

  function h() {
    return c === 2
  }
  let p = !1;

  function m(...R) {
    p || (p = !0, e.apply(null, R))
  }

  function y(R) {
    i = setTimeout(() => {
      i = null, t(C, h())
    }, R)
  }

  function v() {
    a && clearTimeout(a)
  }

  function C(R, ...W) {
    if (p) {
      v();
      return
    }
    if (R) {
      v(), m.call(null, R, ...W);
      return
    }
    if (h() || l) {
      v(), m.call(null, R, ...W);
      return
    }
    r < 64 && (r *= 2);
    let U;
    c === 1 ? (c = 2, U = 0) : U = (r + Math.random()) * 1e3, y(U)
  }
  let P = !1;

  function k(R) {
    P || (P = !0, v(), !p && (i !== null ? (R || (c = 2), clearTimeout(i), y(0)) : R || (c = 1)))
  }
  return y(0), a = setTimeout(() => {
    l = !0, k(!0)
  }, n), k
}

function yO(t) {
  t(!1)
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
function vO(t) {
  return t !== void 0
}

function wO(t) {
  return typeof t == "object" && !Array.isArray(t)
}

function _f(t) {
  return typeof t == "string" || t instanceof String
}

function t7(t) {
  return xf() && t instanceof Blob
}

function xf() {
  return typeof Blob < "u"
}

function n7(t, e, n, r) {
  if (r < e) throw $h(`Invalid value for '${t}'. Expected ${e} or greater.`);
  if (r > n) throw $h(`Invalid value for '${t}'. Expected ${n} or less.`)
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
function Sf(t, e, n) {
  let r = e;
  return n == null && (r = `https://${e}`), `${n}://${r}/v0${t}`
}

function sb(t) {
  const e = encodeURIComponent;
  let n = "?";
  for (const r in t)
    if (t.hasOwnProperty(r)) {
      const i = e(r) + "=" + e(t[r]);
      n = n + i + "&"
    } return n = n.slice(0, -1), n
}
var q3;
(function(t) {
  t[t.NO_ERROR = 0] = "NO_ERROR", t[t.NETWORK_ERROR = 1] = "NETWORK_ERROR", t[t.ABORT = 2] = "ABORT"
})(q3 || (q3 = {}));
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
function bO(t, e) {
  const n = t >= 500 && t < 600,
    i = [408, 429].indexOf(t) !== -1,
    a = e.indexOf(t) !== -1;
  return n || i || a
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
class _O {
  constructor(e, n, r, i, a, l, c, h, p, m, y, v = !0, C = !1) {
    this.url_ = e, this.method_ = n, this.headers_ = r, this.body_ = i, this.successCodes_ = a, this.additionalRetryCodes_ = l, this.callback_ = c, this.errorCallback_ = h, this.timeout_ = p, this.progressCallback_ = m, this.connectionFactory_ = y, this.retry = v, this.isUsingEmulator = C, this.pendingConnection_ = null, this.backoffId_ = null, this.canceled_ = !1, this.appDelete_ = !1, this.promise_ = new Promise((P, k) => {
      this.resolve_ = P, this.reject_ = k, this.start_()
    })
  }
  start_() {
    const e = (r, i) => {
        if (i) {
          r(!1, new Fl(!1, null, !0));
          return
        }
        const a = this.connectionFactory_();
        this.pendingConnection_ = a;
        const l = c => {
          const h = c.loaded,
            p = c.lengthComputable ? c.total : -1;
          this.progressCallback_ !== null && this.progressCallback_(h, p)
        };
        this.progressCallback_ !== null && a.addUploadProgressListener(l), a.send(this.url_, this.method_, this.isUsingEmulator, this.body_, this.headers_).then(() => {
          this.progressCallback_ !== null && a.removeUploadProgressListener(l), this.pendingConnection_ = null;
          const c = a.getErrorCode() === q3.NO_ERROR,
            h = a.getStatus();
          if (!c || bO(h, this.additionalRetryCodes_) && this.retry) {
            const m = a.getErrorCode() === q3.ABORT;
            r(!1, new Fl(!1, null, m));
            return
          }
          const p = this.successCodes_.indexOf(h) !== -1;
          r(!0, new Fl(p, a))
        })
      },
      n = (r, i) => {
        const a = this.resolve_,
          l = this.reject_,
          c = i.connection;
        if (i.wasSuccessCode) try {
          const h = this.callback_(c, c.getResponse());
          vO(h) ? a(h) : a()
        } catch (h) {
          l(h)
        } else if (c !== null) {
          const h = bf();
          h.serverResponse = c.getErrorText(), this.errorCallback_ ? l(this.errorCallback_(c, h)) : l(h)
        } else if (i.canceled) {
          const h = this.appDelete_ ? ib() : aO();
          l(h)
        } else {
          const h = oO();
          l(h)
        }
      };
    this.canceled_ ? n(!1, new Fl(!1, null, !0)) : this.backoffId_ = gO(e, n, this.timeout_)
  }
  getPromise() {
    return this.promise_
  }
  cancel(e) {
    this.canceled_ = !0, this.appDelete_ = e || !1, this.backoffId_ !== null && yO(this.backoffId_), this.pendingConnection_ !== null && this.pendingConnection_.abort()
  }
}
class Fl {
  constructor(e, n, r) {
    this.wasSuccessCode = e, this.connection = n, this.canceled = !!r
  }
}

function xO(t, e) {
  e !== null && e.length > 0 && (t.Authorization = "Firebase " + e)
}

function SO(t, e) {
  t["X-Firebase-Storage-Version"] = "webjs/" + (e ?? "AppManager")
}

function EO(t, e) {
  e && (t["X-Firebase-GMPID"] = e)
}

function TO(t, e) {
  e !== null && (t["X-Firebase-AppCheck"] = e)
}

function CO(t, e, n, r, i, a, l = !0, c = !1) {
  const h = sb(t.urlParams),
    p = t.url + h,
    m = Object.assign({}, t.headers);
  return EO(m, e), xO(m, n), SO(m, a), TO(m, r), new _O(p, t.method, m, t.body, t.successCodes, t.additionalRetryCodes, t.handler, t.errorHandler, t.timeout, t.progressCallback, i, l, c)
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
function kO() {
  return typeof BlobBuilder < "u" ? BlobBuilder : typeof WebKitBlobBuilder < "u" ? WebKitBlobBuilder : void 0
}

function PO(...t) {
  const e = kO();
  if (e !== void 0) {
    const n = new e;
    for (let r = 0; r < t.length; r++) n.append(t[r]);
    return n.getBlob()
  } else {
    if (xf()) return new Blob(t);
    throw new At(Pt.UNSUPPORTED_ENVIRONMENT, "This browser doesn't seem to support creating Blobs")
  }
}

function AO(t, e, n) {
  return t.webkitSlice ? t.webkitSlice(e, n) : t.mozSlice ? t.mozSlice(e, n) : t.slice ? t.slice(e, n) : null
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
function IO(t) {
  if (typeof atob > "u") throw fO("base-64");
  return atob(t)
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
const P2 = {
  RAW: "raw",
  BASE64: "base64",
  BASE64URL: "base64url",
  DATA_URL: "data_url"
};
class j4 {
  constructor(e, n) {
    this.data = e, this.contentType = n || null
  }
}

function RO(t, e) {
  switch (t) {
    case P2.RAW:
      return new j4(ob(e));
    case P2.BASE64:
    case P2.BASE64URL:
      return new j4(ab(t, e));
    case P2.DATA_URL:
      return new j4(LO(e), MO(e))
  }
  throw bf()
}

function ob(t) {
  const e = [];
  for (let n = 0; n < t.length; n++) {
    let r = t.charCodeAt(n);
    if (r <= 127) e.push(r);
    else if (r <= 2047) e.push(192 | r >> 6, 128 | r & 63);
    else if ((r & 64512) === 55296)
      if (!(n < t.length - 1 && (t.charCodeAt(n + 1) & 64512) === 56320)) e.push(239, 191, 189);
      else {
        const a = r,
          l = t.charCodeAt(++n);
        r = 65536 | (a & 1023) << 10 | l & 1023, e.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | r & 63)
      }
    else(r & 64512) === 56320 ? e.push(239, 191, 189) : e.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | r & 63)
  }
  return new Uint8Array(e)
}

function NO(t) {
  let e;
  try {
    e = decodeURIComponent(t)
  } catch {
    throw ja(P2.DATA_URL, "Malformed data URL.")
  }
  return ob(e)
}

function ab(t, e) {
  switch (t) {
    case P2.BASE64: {
      const i = e.indexOf("-") !== -1,
        a = e.indexOf("_") !== -1;
      if (i || a) throw ja(t, "Invalid character '" + (i ? "-" : "_") + "' found: is it base64url encoded?");
      break
    }
    case P2.BASE64URL: {
      const i = e.indexOf("+") !== -1,
        a = e.indexOf("/") !== -1;
      if (i || a) throw ja(t, "Invalid character '" + (i ? "+" : "/") + "' found: is it base64 encoded?");
      e = e.replace(/-/g, "+").replace(/_/g, "/");
      break
    }
  }
  let n;
  try {
    n = IO(e)
  } catch (i) {
    throw i.message.includes("polyfill") ? i : ja(t, "Invalid character found")
  }
  const r = new Uint8Array(n.length);
  for (let i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
  return r
}
class lb {
  constructor(e) {
    this.base64 = !1, this.contentType = null;
    const n = e.match(/^data:([^,]+)?,/);
    if (n === null) throw ja(P2.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
    const r = n[1] || null;
    r != null && (this.base64 = DO(r, ";base64"), this.contentType = this.base64 ? r.substring(0, r.length - 7) : r), this.rest = e.substring(e.indexOf(",") + 1)
  }
}

function LO(t) {
  const e = new lb(t);
  return e.base64 ? ab(P2.BASE64, e.rest) : NO(e.rest)
}

function MO(t) {
  return new lb(t).contentType
}

function DO(t, e) {
  return t.length >= e.length ? t.substring(t.length - e.length) === e : !1
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
class Vi {
  constructor(e, n) {
    let r = 0,
      i = "";
    t7(e) ? (this.data_ = e, r = e.size, i = e.type) : e instanceof ArrayBuffer ? (n ? this.data_ = new Uint8Array(e) : (this.data_ = new Uint8Array(e.byteLength), this.data_.set(new Uint8Array(e))), r = this.data_.length) : e instanceof Uint8Array && (n ? this.data_ = e : (this.data_ = new Uint8Array(e.length), this.data_.set(e)), r = e.length), this.size_ = r, this.type_ = i
  }
  size() {
    return this.size_
  }
  type() {
    return this.type_
  }
  slice(e, n) {
    if (t7(this.data_)) {
      const r = this.data_,
        i = AO(r, e, n);
      return i === null ? null : new Vi(i)
    } else {
      const r = new Uint8Array(this.data_.buffer, e, n - e);
      return new Vi(r, !0)
    }
  }
  static getBlob(...e) {
    if (xf()) {
      const n = e.map(r => r instanceof Vi ? r.data_ : r);
      return new Vi(PO.apply(null, n))
    } else {
      const n = e.map(l => _f(l) ? RO(P2.RAW, l).data : l.data_);
      let r = 0;
      n.forEach(l => {
        r += l.byteLength
      });
      const i = new Uint8Array(r);
      let a = 0;
      return n.forEach(l => {
        for (let c = 0; c < l.length; c++) i[a++] = l[c]
      }), new Vi(i, !0)
    }
  }
  uploadData() {
    return this.data_
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
function ub(t) {
  let e;
  try {
    e = JSON.parse(t)
  } catch {
    return null
  }
  return wO(e) ? e : null
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
function OO(t) {
  if (t.length === 0) return null;
  const e = t.lastIndexOf("/");
  return e === -1 ? "" : t.slice(0, e)
}

function jO(t, e) {
  const n = e.split("/").filter(r => r.length > 0).join("/");
  return t.length === 0 ? n : t + "/" + n
}

function cb(t) {
  const e = t.lastIndexOf("/", t.length - 2);
  return e === -1 ? t : t.slice(e + 1)
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
function VO(t, e) {
  return e
}
class Gn {
  constructor(e, n, r, i) {
    this.server = e, this.local = n || e, this.writable = !!r, this.xform = i || VO
  }
}
let Bl = null;

function FO(t) {
  return !_f(t) || t.length < 2 ? t : cb(t)
}

function db() {
  if (Bl) return Bl;
  const t = [];
  t.push(new Gn("bucket")), t.push(new Gn("generation")), t.push(new Gn("metageneration")), t.push(new Gn("name", "fullPath", !0));

  function e(a, l) {
    return FO(l)
  }
  const n = new Gn("name");
  n.xform = e, t.push(n);

  function r(a, l) {
    return l !== void 0 ? Number(l) : l
  }
  const i = new Gn("size");
  return i.xform = r, t.push(i), t.push(new Gn("timeCreated")), t.push(new Gn("updated")), t.push(new Gn("md5Hash", null, !0)), t.push(new Gn("cacheControl", null, !0)), t.push(new Gn("contentDisposition", null, !0)), t.push(new Gn("contentEncoding", null, !0)), t.push(new Gn("contentLanguage", null, !0)), t.push(new Gn("contentType", null, !0)), t.push(new Gn("metadata", "customMetadata", !0)), Bl = t, Bl
}

function BO(t, e) {
  function n() {
    const r = t.bucket,
      i = t.fullPath,
      a = new vr(r, i);
    return e._makeStorageReference(a)
  }
  Object.defineProperty(t, "ref", {
    get: n
  })
}

function $O(t, e, n) {
  const r = {};
  r.type = "file";
  const i = n.length;
  for (let a = 0; a < i; a++) {
    const l = n[a];
    r[l.local] = l.xform(r, e[l.server])
  }
  return BO(r, t), r
}

function hb(t, e, n) {
  const r = ub(e);
  return r === null ? null : $O(t, r, n)
}

function zO(t, e, n, r) {
  const i = ub(e);
  if (i === null || !_f(i.downloadTokens)) return null;
  const a = i.downloadTokens;
  if (a.length === 0) return null;
  const l = encodeURIComponent;
  return a.split(",").map(p => {
    const m = t.bucket,
      y = t.fullPath,
      v = "/b/" + l(m) + "/o/" + l(y),
      C = Sf(v, n, r),
      P = sb({
        alt: "media",
        token: p
      });
    return C + P
  })[0]
}

function UO(t, e) {
  const n = {},
    r = e.length;
  for (let i = 0; i < r; i++) {
    const a = e[i];
    a.writable && (n[a.server] = t[a.local])
  }
  return JSON.stringify(n)
}
class fb {
  constructor(e, n, r, i) {
    this.url = e, this.method = n, this.handler = r, this.timeout = i, this.urlParams = {}, this.headers = {}, this.body = null, this.errorHandler = null, this.progressCallback = null, this.successCodes = [200], this.additionalRetryCodes = []
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
function pb(t) {
  if (!t) throw bf()
}

function WO(t, e) {
  function n(r, i) {
    const a = hb(t, i, e);
    return pb(a !== null), a
  }
  return n
}

function HO(t, e) {
  function n(r, i) {
    const a = hb(t, i, e);
    return pb(a !== null), zO(a, i, t.host, t._protocol)
  }
  return n
}

function mb(t) {
  function e(n, r) {
    let i;
    return n.getStatus() === 401 ? n.getErrorText().includes("Firebase App Check token is invalid") ? i = iO() : i = rO() : n.getStatus() === 402 ? i = nO(t.bucket) : n.getStatus() === 403 ? i = sO(t.path) : i = r, i.status = n.getStatus(), i.serverResponse = r.serverResponse, i
  }
  return e
}

function qO(t) {
  const e = mb(t);

  function n(r, i) {
    let a = e(r, i);
    return r.getStatus() === 404 && (a = tO(t.path)), a.serverResponse = i.serverResponse, a
  }
  return n
}

function GO(t, e, n) {
  const r = e.fullServerUrl(),
    i = Sf(r, t.host, t._protocol),
    a = "GET",
    l = t.maxOperationRetryTime,
    c = new fb(i, a, HO(t, n), l);
  return c.errorHandler = qO(e), c
}

function KO(t, e) {
  return t && t.contentType || e && e.type() || "application/octet-stream"
}

function QO(t, e, n) {
  const r = Object.assign({}, n);
  return r.fullPath = t.path, r.size = e.size(), r.contentType || (r.contentType = KO(null, e)), r
}

function YO(t, e, n, r, i) {
  const a = e.bucketOnlyServerUrl(),
    l = {
      "X-Goog-Upload-Protocol": "multipart"
    };

  function c() {
    let U = "";
    for (let H = 0; H < 2; H++) U = U + Math.random().toString().slice(2);
    return U
  }
  const h = c();
  l["Content-Type"] = "multipart/related; boundary=" + h;
  const p = QO(e, r, i),
    m = UO(p, n),
    y = "--" + h + `\r
Content-Type: application/json; charset=utf-8\r
\r
` + m + `\r
--` + h + `\r
Content-Type: ` + p.contentType + `\r
\r
`,
    v = `\r
--` + h + "--",
    C = Vi.getBlob(y, r, v);
  if (C === null) throw dO();
  const P = {
      name: p.fullPath
    },
    k = Sf(a, t.host, t._protocol),
    R = "POST",
    W = t.maxUploadRetryTime,
    q = new fb(k, R, WO(t, n), W);
  return q.urlParams = P, q.headers = l, q.body = C.uploadData(), q.errorHandler = mb(e), q
}
class XO {
  constructor() {
    this.sent_ = !1, this.xhr_ = new XMLHttpRequest, this.initXhr(), this.errorCode_ = q3.NO_ERROR, this.sendPromise_ = new Promise(e => {
      this.xhr_.addEventListener("abort", () => {
        this.errorCode_ = q3.ABORT, e()
      }), this.xhr_.addEventListener("error", () => {
        this.errorCode_ = q3.NETWORK_ERROR, e()
      }), this.xhr_.addEventListener("load", () => {
        e()
      })
    })
  }
  send(e, n, r, i, a) {
    if (this.sent_) throw va("cannot .send() more than once");
    if (c0(e) && r && (this.xhr_.withCredentials = !0), this.sent_ = !0, this.xhr_.open(n, e, !0), a !== void 0)
      for (const l in a) a.hasOwnProperty(l) && this.xhr_.setRequestHeader(l, a[l].toString());
    return i !== void 0 ? this.xhr_.send(i) : this.xhr_.send(), this.sendPromise_
  }
  getErrorCode() {
    if (!this.sent_) throw va("cannot .getErrorCode() before sending");
    return this.errorCode_
  }
  getStatus() {
    if (!this.sent_) throw va("cannot .getStatus() before sending");
    try {
      return this.xhr_.status
    } catch {
      return -1
    }
  }
  getResponse() {
    if (!this.sent_) throw va("cannot .getResponse() before sending");
    return this.xhr_.response
  }
  getErrorText() {
    if (!this.sent_) throw va("cannot .getErrorText() before sending");
    return this.xhr_.statusText
  }
  abort() {
    this.xhr_.abort()
  }
  getResponseHeader(e) {
    return this.xhr_.getResponseHeader(e)
  }
  addUploadProgressListener(e) {
    this.xhr_.upload != null && this.xhr_.upload.addEventListener("progress", e)
  }
  removeUploadProgressListener(e) {
    this.xhr_.upload != null && this.xhr_.upload.removeEventListener("progress", e)
  }
}
class JO extends XO {
  initXhr() {
    this.xhr_.responseType = "text"
  }
}

function gb() {
  return new JO
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
class Z3 {
  constructor(e, n) {
    this._service = e, n instanceof vr ? this._location = n : this._location = vr.makeFromUrl(n, e.host)
  }
  toString() {
    return "gs://" + this._location.bucket + "/" + this._location.path
  }
  _newRef(e, n) {
    return new Z3(e, n)
  }
  get root() {
    const e = new vr(this._location.bucket, "");
    return this._newRef(this._service, e)
  }
  get bucket() {
    return this._location.bucket
  }
  get fullPath() {
    return this._location.path
  }
  get name() {
    return cb(this._location.path)
  }
  get storage() {
    return this._service
  }
  get parent() {
    const e = OO(this._location.path);
    if (e === null) return null;
    const n = new vr(this._location.bucket, e);
    return new Z3(this._service, n)
  }
  _throwIfRoot(e) {
    if (this._location.path === "") throw pO(e)
  }
}

function ZO(t, e, n) {
  t._throwIfRoot("uploadBytes");
  const r = YO(t.storage, t._location, db(), new Vi(e, !0), n);
  return t.storage.makeRequestWithTokens(r, gb).then(i => ({
    metadata: i,
    ref: t
  }))
}

function ej(t) {
  t._throwIfRoot("getDownloadURL");
  const e = GO(t.storage, t._location, db());
  return t.storage.makeRequestWithTokens(e, gb).then(n => {
    if (n === null) throw hO();
    return n
  })
}

function tj(t, e) {
  const n = jO(t._location.path, e),
    r = new vr(t._location.bucket, n);
  return new Z3(t.storage, r)
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
function nj(t) {
  return /^[A-Za-z]+:\/\//.test(t)
}

function rj(t, e) {
  return new Z3(t, e)
}

function yb(t, e) {
  if (t instanceof Ef) {
    const n = t;
    if (n._bucket == null) throw cO();
    const r = new Z3(n, n._bucket);
    return e != null ? yb(r, e) : r
  } else return e !== void 0 ? tj(t, e) : t
}

function ij(t, e) {
  if (e && nj(e)) {
    if (t instanceof Ef) return rj(t, e);
    throw $h("To use ref(service, url), the first argument must be a Storage instance.")
  } else return yb(t, e)
}

function r7(t, e) {
  const n = e == null ? void 0 : e[rb];
  return n == null ? null : vr.makeFromBucketSpec(n, t)
}

function sj(t, e, n, r = {}) {
  t.host = `${e}:${n}`;
  const i = c0(e);
  i && (wv(`https://${t.host}/b`), _v("Storage", !0)), t._isUsingEmulator = !0, t._protocol = i ? "https" : "http";
  const {
    mockUserToken: a
  } = r;
  a && (t._overrideAuthToken = typeof a == "string" ? a : bv(a, t.app.options.projectId))
}
class Ef {
  constructor(e, n, r, i, a, l = !1) {
    this.app = e, this._authProvider = n, this._appCheckProvider = r, this._url = i, this._firebaseVersion = a, this._isUsingEmulator = l, this._bucket = null, this._host = nb, this._protocol = "https", this._appId = null, this._deleted = !1, this._maxOperationRetryTime = ZD, this._maxUploadRetryTime = eO, this._requests = new Set, i != null ? this._bucket = vr.makeFromBucketSpec(i, this._host) : this._bucket = r7(this._host, this.app.options)
  }
  get host() {
    return this._host
  }
  set host(e) {
    this._host = e, this._url != null ? this._bucket = vr.makeFromBucketSpec(this._url, e) : this._bucket = r7(e, this.app.options)
  }
  get maxUploadRetryTime() {
    return this._maxUploadRetryTime
  }
  set maxUploadRetryTime(e) {
    n7("time", 0, Number.POSITIVE_INFINITY, e), this._maxUploadRetryTime = e
  }
  get maxOperationRetryTime() {
    return this._maxOperationRetryTime
  }
  set maxOperationRetryTime(e) {
    n7("time", 0, Number.POSITIVE_INFINITY, e), this._maxOperationRetryTime = e
  }
  async _getAuthToken() {
    if (this._overrideAuthToken) return this._overrideAuthToken;
    const e = this._authProvider.getImmediate({
      optional: !0
    });
    if (e) {
      const n = await e.getToken();
      if (n !== null) return n.accessToken
    }
    return null
  }
  async _getAppCheckToken() {
    if (kv(this.app) && this.app.settings.appCheckToken) return this.app.settings.appCheckToken;
    const e = this._appCheckProvider.getImmediate({
      optional: !0
    });
    return e ? (await e.getToken()).token : null
  }
  _delete() {
    return this._deleted || (this._deleted = !0, this._requests.forEach(e => e.cancel()), this._requests.clear()), Promise.resolve()
  }
  _makeStorageReference(e) {
    return new Z3(this, e)
  }
  _makeRequest(e, n, r, i, a = !0) {
    if (this._deleted) return new mO(ib());
    {
      const l = CO(e, this._appId, r, i, n, this._firebaseVersion, a, this._isUsingEmulator);
      return this._requests.add(l), l.getPromise().then(() => this._requests.delete(l), () => this._requests.delete(l)), l
    }
  }
  async makeRequestWithTokens(e, n) {
    const [r, i] = await Promise.all([this._getAuthToken(), this._getAppCheckToken()]);
    return this._makeRequest(e, n, r, i).getPromise()
  }
}
const i7 = "@firebase/storage",
  s7 = "0.13.14";
/**
 * @license
 * Copyright 2020 Google LLC
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
const vb = "storage";

function oj(t, e, n) {
  return t = s2(t), ZO(t, e, n)
}

function aj(t) {
  return t = s2(t), ej(t)
}