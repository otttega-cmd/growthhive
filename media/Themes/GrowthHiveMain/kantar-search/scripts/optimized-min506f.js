/*! For license information please see bundle.js.LICENSE */ ! function (n) {
    function t(r) {
        if (i[r]) return i[r].exports;
        var u = i[r] = {
           i: r,
           l: !1,
           exports: {}
        };
        return n[r].call(u.exports, u, u.exports, t), u.l = !0, u.exports
     }
     var i = {};
     t.m = n;
     t.c = i;
     t.d = function (n, i, r) {
        t.o(n, i) || Object.defineProperty(n, i, {
           enumerable: !0,
           get: r
        })
     };
     t.r = function (n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
           value: "Module"
        });
        Object.defineProperty(n, "__esModule", {
           value: !0
        })
     };
     t.t = function (n, i) {
        var r, u;
        if ((1 & i && (n = t(n)), 8 & i) || 4 & i && "object" == typeof n && n && n.__esModule) return n;
        if (r = Object.create(null), t.r(r), Object.defineProperty(r, "default", {
              enumerable: !0,
              value: n
           }), 2 & i && "string" != typeof n)
           for (u in n) t.d(r, u, function (t) {
              return n[t]
           }.bind(null, u));
        return r
     };
     t.n = function (n) {
        var i = n && n.__esModule ? function () {
           return n.default
        } : function () {
           return n
        };
        return t.d(i, "a", i), i
     };
     t.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
     };
     t.p = "/-/media/Themes/Kantar/";
     t(t.s = 249)
  }({
     0: function (n) {
        n.exports = XA
     },
     1: function (n, t, i) {
        "use strict";
  
        function tt(n) {
           return function (n) {
              if (Array.isArray(n)) return s(n)
           }(n) || function (n) {
              if ("undefined" != typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
           }(n) || it(n) || function () {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
           }()
        }
  
        function it(n, t) {
           if (n) {
              if ("string" == typeof n) return s(n, t);
              var i = Object.prototype.toString.call(n).slice(8, -1);
              return "Object" === i && n.constructor && (i = n.constructor.name), "Map" === i || "Set" === i ? Array.from(n) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? s(n, t) : void 0
           }
        }
  
        function s(n, t) {
           (null == t || t > n.length) && (t = n.length);
           for (var i = 0, r = new Array(t); i < t; i++) r[i] = n[i];
           return r
        }
  
        function a(n) {
           return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
              return typeof n
           } : function (n) {
              return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
           })(n)
        }
  
        function r(n, t, i, r) {
           var u = void 0 !== a(r) && r;
           n.addEventListener(t, i, {
              passive: u
           })
        }
  
        function u(n, t, i) {
           n.removeEventListener(t, i)
        }
  
        function p(n) {
           function i() {
              t = !1
           }
           var t;
           return function () {
              var r = this;
              t || (n.apply(r, arguments), t = !0, window.requestAnimationFrame(i))
           }
        }
  
        function h() {
           return Math.max(window.pageYOffset, window.document.body.scrollTop, window.document.documentElement.scrollTop)
        }
  
        function f(n) {
           var t = {};
           return n && ((t = n.getBoundingClientRect()).offset = t.top + h(), n.box = t), t
        }
  
        function rt(n, t) {
           for (var i = 0; i < t.length; i++)
              if (t[i] === n) return i;
           return -1
        }
  
        function b() {
           return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        }
  
        function ut(n) {
           var t = f(n),
              i = b();
           return t.top <= 0 && t.bottom >= 0 || t.bottom >= i && t.top <= i || t.top >= 0 && t.bottom <= i
        }
  
        function ft(n) {
           var t = n[0];
           t.scrollLeft != n[1] && (t.scrollLeft = n[1]);
           t.scrollTop != n[2] && (t.scrollTop = n[2])
        }
  
        function et(n, t, i, r) {
           return (n /= r / 2) < 1 ? i / 2 * n * n + t : -i / 2 * (--n * (n - 2) - 1) + t
        }
  
        function ot(n, t, i, r) {
           return t + i * (n /= r) * n * n
        }
  
        function st(n, t, i, r) {
           var u = (n /= r) * n,
              f = u * n;
           return t + i * (6 * f * u + -15 * u * u + 10 * f)
        }
  
        function ht(n, t, i, r) {
           var e = {
                 easeInOutQuad: et,
                 easeInCubic: ot,
                 inOutQuintic: st
              },
              f = h(),
              o = n - f,
              u = 0;
           i = void 0 === i ? 500 : i;
           ! function n() {
              u += 20;
              var s = e[r || "inOutQuintic"](u, f, o, i);
              c(s);
              u < i ? window.requestAnimationFrame(n) : t && "function" == typeof t && t()
           }()
        }
  
        function ct(n, t) {
           for (var i = t.parentNode; null != i;) {
              if (i == n) return !0;
              i = i.parentNode
           }
           return !1
        }
  
        function lt(n, t, i, r) {
           var u = 0;
           if (!r || u < r)
              for (; n && "HTML" !== n.nodeName && "class" === t ? !n.classList.contains(i) : n.getAttribute(t) !== i;)
                 if (u += 1, !(n = n.parentNode) || "HTML" === n.nodeName) return null;
           return n
        }
  
        function at() {
           return window.innerWidth >= 1080
        }
  
        function vt(n, t) {
           return f(n).height <= f(t).height ? 1 : -1
        }
  
        function yt(n) {
           n.style.minHeight = ""
        }
  
        function pt(n) {
           function c() {
              var n = tt(t).sort(vt);
              return {
                 sorted: n,
                 selected: n[0],
                 rest: n.splice(1, n.length - 1)
              }
           }
  
           function a(n) {
              var t;
              s && s();
              var r = c(),
                 i = r.selected,
                 u = r.rest,
                 e = f(i).height;
              for (n ? i.setAttribute("data-resize", !0) : i.removeAttribute("data-resize"), t = 0; t <= u.length - 1; t++) u[t].style.minHeight = n ? "".concat(e + y, "px") : "";
              h && h()
           }
  
           function w() {
              var i = c().selected,
                 n = l();
              i.style.minHeight && function () {
                 for (var i = yt, n = 0; n <= t.length - 1; n++) i(t[n], n, t)
              }();
              (n || i.getAttribute("data-resize") && !n) && a(n)
           }
           var u, t = n.nodeList,
              e = n.condition,
              v = void 0 === e ? at : e,
              o = n.additionalHeight,
              y = void 0 === o ? 0 : o,
              s = n.preInit,
              h = n.callback,
              l = v,
              i;
           return a(l()), i = p(function () {
              u && clearTimeout(u);
              u = setTimeout(w, 100)
           }), r(window, "resize", i), r(window, "load", i), i
        }
  
        function wt(n, t) {
           document.cookie = n + "=" + t + ";path=/"
        }
  
        function bt(n) {
           var t = ("; " + document.cookie).split("; " + n + "=");
           if (2 == t.length) return t.pop().split(";").shift()
        }
  
        function kt(n, t) {
           function e() {
              i && i.classList.toggle("related-hover");
              f && f.classList.toggle("related-hover")
           }
           var i = t ? t.querySelector("a img") : null,
              f = n ? n.querySelector("a") : null;
           return f && (r(f, "mouseover", e), r(f, "mouseout", e)), i && (r(i, "mouseover", e), r(i, "mouseout", e)), {
              destroy: function () {
                 f && (u(f, "mouseover", e), u(f, "mouseout", e));
                 i && (u(i, "mouseover", e), u(i, "mouseout", e))
              }
           }
        }
  
        function dt(n) {
           var t = document.body;
           n ? (t.removeAttribute("data-scrollenabled"), t.style.overflow = "") : (t.setAttribute("data-scrollenabled", !0), t.style.overflow = "hidden")
        }
  
        function gt(n, t) {
           return "" === n ? t : decodeURIComponent(t)
        }
        var l, o, v, y, e, w, k, c, d, g, nt;
        i.d(t, "a", function () {
           return v
        });
        i.d(t, "e", function () {
           return y
        });
        i.d(t, "g", function () {
           return f
        });
        i.d(t, "w", function () {
           return p
        });
        i.d(t, "t", function () {
           return r
        });
        i.d(t, "s", function () {
           return u
        });
        i.d(t, "k", function () {
           return h
        });
        i.d(t, "j", function () {
           return b
        });
        i.d(t, "b", function () {
           return rt
        });
        i.d(t, "o", function () {
           return ut
        });
        i.d(t, "q", function () {
           return w
        });
        i.d(t, "f", function () {
           return k
        });
        i.d(t, "n", function () {
           return ct
        });
        i.d(t, "h", function () {
           return lt
        });
        i.d(t, "c", function () {
           return ht
        });
        i.d(t, "m", function () {
           return d
        });
        i.d(t, "p", function () {
           return g
        });
        i.d(t, "d", function () {
           return pt
        });
        i.d(t, "v", function () {
           return wt
        });
        i.d(t, "i", function () {
           return bt
        });
        i.d(t, "l", function () {
           return kt
        });
        i.d(t, "x", function () {
           return dt
        });
        i.d(t, "r", function () {
           return c
        });
        i.d(t, "u", function () {
           return nt
        });
        l = i(13);
        o = i.n(l);
        v = function (n) {
           var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
           return [].slice.call(t.querySelectorAll(n))
        };
        y = function (n, t) {
           for (; n && !n.matches(t);) n = n.parentElement;
           return n
        };
        e = window.Sitecore;
        w = !!(e && e.WebEditSettings && e.WebEditSettings.editing);
        k = function (n, t) {
           for (var f, u, r = [], i = n.parentNode; i;) r.push([i, i.scrollLeft, i.scrollTop]), i = i.parentNode;
           for (n.focus(), t && t(), f = ft, u = 0; u <= r.length - 1; u++) f(r[u], u, r)
        };
        c = function (n) {
           document.documentElement.scrollTop = n;
           document.body.parentNode.scrollTop = n;
           document.body.scrollTop = n
        };
        d = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        g = !(document.location.pathname.length > 1 || !o.a || o.a.get("homepageFirstRun"));
        nt = new function (n) {
           function t() {
              var t = n.location.search.substring(1).replace(/&/g, '","').replace(/=/g, '":"');
              return t.length ? JSON.parse('{"'.concat(t, '"}'), gt) : {}
           }
           return {
              get: t,
              set: function (i, r) {
                 var u = t(),
                    f;
                 u[i] = r;
                 f = Object.keys(u).map(function (n) {
                    return encodeURIComponent(n) + "=" + encodeURIComponent(u[n])
                 }).join("&");
                 n.history.pushState(void 0, void 0, "?".concat(f).concat(n.location.hash))
              }
           }
        }(window)
     },
     100: function (n, t, i) {
        "use strict";
  
        function r(n, t) {
           for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
        }
  
        function f() {
           var i = this,
              r, t, n;
           for (this.elCount.classList.add("initialized"), t = this.checkboxes, n = 0; n <= t.length - 1; n++)(r = t[n]).removeEventListener("change", i.bndUpdateCheckboxCount), r.addEventListener("change", i.bndUpdateCheckboxCount)
        }
  
        function e(n) {
           return n.classList.contains("active")
        }
  
        function o() {
           for (var t = this.checkboxes, r = e, i = [], n = 0; n <= t.length - 1; n++) r(t[n], n, t) && i.push(t[n]);
           this.count = i.length;
           this.count ? (this.elCount.innerHTML = this.count, this.elCount.classList.add("active")) : this.elCount.classList.remove("active");
           this.mainCounter && this.updateMainCounter()
        }
  
        function s() {
           var n = this.count ? this.count : 0,
              t = this.parent.querySelector("h3").textContent.trim().replace(/\s/, "-").toLowerCase();
           this.mainCounter.setAttribute("data-count-".concat(t), n);
           this.sumFilterCounts()
        }
  
        function h() {
           for (var r, n = this.mainCounter.nextElementSibling, u = this.mainCounter.dataset, t = 0, f = Object.keys(u), i = 0; i <= f.length - 1; i++) - 1 !== (r = f[i]).indexOf("count") && (t += parseInt(u[r], 10));
           n.textContent && parseInt(n.textContent, 10) === t || (n.textContent = t, t > 0 ? (n.classList.add("active"), document.body.setAttribute("data-filters", !0)) : (n.classList.remove("active"), document.body.setAttribute("data-filters", !1)))
        }
        var u = i(1),
           c = function () {
              function t(n) {
                 ! function (n, t) {
                    if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
                 }(this, t);
                 this.elCount = n;
                 this.count = 0;
                 this.parent = this.elCount.parentNode.classList.contains("js-filter-accordion-head") ? this.elCount.parentNode.parentNode : this.elCount.parentNode;
                 this.checkboxes = Object(u.a)(".facet-value", this.parent);
                 this.mainCounter = document.querySelector(".js-main-counter");
                 this.bndUpdateCheckboxCount = this.updateCheckboxCount.bind(this);
                 this.checkboxes.length && this.initBindings()
              }
              var n, i, e;
              return n = t, (i = [{
                 key: "initBindings",
                 value: f
              }, {
                 key: "updateCheckboxCount",
                 value: o
              }, {
                 key: "updateMainCounter",
                 value: s
              }, {
                 key: "sumFilterCounts",
                 value: h
              }]) && r(n.prototype, i), e && r(n, e), Object.defineProperty(n, "prototype", {
                 writable: !1
              }), t
           }();
        t.a = c
     },
     104: function (n) {
        function h() {
           throw new Error("setTimeout has not been defined");
        }
  
        function c() {
           throw new Error("clearTimeout has not been defined");
        }
  
        function l(n) {
           if (i === setTimeout) return setTimeout(n, 0);
           if ((i === h || !i) && setTimeout) return i = setTimeout, setTimeout(n, 0);
           try {
              return i(n, 0)
           } catch (t) {
              try {
                 return i.call(null, n, 0)
              } catch (t) {
                 return i.call(this, n, 0)
              }
           }
        }
  
        function y() {
           o && e && (o = !1, e.length ? u = e.concat(u) : s = -1, u.length && a())
        }
  
        function a() {
           var t, n;
           if (!o) {
              for (t = l(y), o = !0, n = u.length; n;) {
                 for (e = u, u = []; ++s < n;) e && e[s].run();
                 s = -1;
                 n = u.length
              }
              e = null;
              o = !1,
                 function (n) {
                    if (r === clearTimeout) return clearTimeout(n);
                    if ((r === c || !r) && clearTimeout) return r = clearTimeout, clearTimeout(n);
                    try {
                       r(n)
                    } catch (t) {
                       try {
                          return r.call(null, n)
                       } catch (t) {
                          return r.call(this, n)
                       }
                    }
                 }(t)
           }
        }
  
        function v(n, t) {
           this.fun = n;
           this.array = t
        }
  
        function f() {}
        var i, r, t = n.exports = {};
        ! function () {
           try {
              i = "function" == typeof setTimeout ? setTimeout : h
           } catch (n) {
              i = h
           }
           try {
              r = "function" == typeof clearTimeout ? clearTimeout : c
           } catch (n) {
              r = c
           }
        }();
        var e, u = [],
           o = !1,
           s = -1;
        t.nextTick = function (n) {
           var i = new Array(arguments.length - 1),
              t;
           if (arguments.length > 1)
              for (t = 1; t < arguments.length; t++) i[t - 1] = arguments[t];
           u.push(new v(n, i));
           1 !== u.length || o || l(a)
        };
        v.prototype.run = function () {
           this.fun.apply(null, this.array)
        };
        t.title = "browser";
        t.browser = !0;
        t.env = {};
        t.argv = [];
        t.version = "";
        t.versions = {};
        t.on = f;
        t.addListener = f;
        t.once = f;
        t.off = f;
        t.removeListener = f;
        t.removeAllListeners = f;
        t.emit = f;
        t.prependListener = f;
        t.prependOnceListener = f;
        t.listeners = function () {
           return []
        };
        t.binding = function () {
           throw new Error("process.binding is not supported");
        };
        t.cwd = function () {
           return "/"
        };
        t.chdir = function () {
           throw new Error("process.chdir is not supported");
        };
        t.umask = function () {
           return 0
        }
     },
     105: function (n, t, i) {
        (function (n) {
           function r(n, t) {
              this._id = n;
              this._clearFn = t
           }
           var u = void 0 !== n && n || "undefined" != typeof self && self || window,
              f = Function.prototype.apply;
           t.setTimeout = function () {
              return new r(f.call(setTimeout, u, arguments), clearTimeout)
           };
           t.setInterval = function () {
              return new r(f.call(setInterval, u, arguments), clearInterval)
           };
           t.clearTimeout = t.clearInterval = function (n) {
              n && n.close()
           };
           r.prototype.unref = r.prototype.ref = function () {};
           r.prototype.close = function () {
              this._clearFn.call(u, this._id)
           };
           t.enroll = function (n, t) {
              clearTimeout(n._idleTimeoutId);
              n._idleTimeout = t
           };
           t.unenroll = function (n) {
              clearTimeout(n._idleTimeoutId);
              n._idleTimeout = -1
           };
           t._unrefActive = t.active = function (n) {
              clearTimeout(n._idleTimeoutId);
              var t = n._idleTimeout;
              t >= 0 && (n._idleTimeoutId = setTimeout(function () {
                 n._onTimeout && n._onTimeout()
              }, t))
           };
           i(106);
           t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== n && n.setImmediate || this && this.setImmediate;
           t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== n && n.clearImmediate || this && this.clearImmediate
        }).call(this, i(27))
     },
     106: function (n, t, i) {
        (function (n, t) {
           ! function (n) {
              "use strict";
  
              function v(n) {
                 delete c[n]
              }
  
              function u(n) {
                 if (l) setTimeout(u, 0, n);
                 else {
                    var t = c[n];
                    if (t) {
                       l = !0;
                       try {
                          ! function (n) {
                             var i = n.callback,
                                t = n.args;
                             switch (t.length) {
                                case 0:
                                   i();
                                   break;
                                case 1:
                                   i(t[0]);
                                   break;
                                case 2:
                                   i(t[0], t[1]);
                                   break;
                                case 3:
                                   i(t[0], t[1], t[2]);
                                   break;
                                default:
                                   i.apply(void 0, t)
                             }
                          }(t)
                       } finally {
                          v(n);
                          l = !1
                       }
                    }
                 }
              }
              if (!n.setImmediate) {
                 var i, o, a, f, s, h = 1,
                    c = {},
                    l = !1,
                    e = n.document,
                    r = Object.getPrototypeOf && Object.getPrototypeOf(n);
                 r = r && r.setTimeout ? r : n;
                 "[object process]" === {}.toString.call(n.process) ? i = function (n) {
                    t.nextTick(function () {
                       u(n)
                    })
                 } : function () {
                    if (n.postMessage && !n.importScripts) {
                       var t = !0,
                          i = n.onmessage;
                       return n.onmessage = function () {
                          t = !1
                       }, n.postMessage("", "*"), n.onmessage = i, t
                    }
                 }() ? (f = "setImmediate$" + Math.random() + "$", s = function (t) {
                    t.source === n && "string" == typeof t.data && 0 === t.data.indexOf(f) && u(+t.data.slice(f.length))
                 }, n.addEventListener ? n.addEventListener("message", s, !1) : n.attachEvent("onmessage", s), i = function (t) {
                    n.postMessage(f + t, "*")
                 }) : n.MessageChannel ? ((a = new MessageChannel).port1.onmessage = function (n) {
                    u(n.data)
                 }, i = function (n) {
                    a.port2.postMessage(n)
                 }) : e && "onreadystatechange" in e.createElement("script") ? (o = e.documentElement, i = function (n) {
                    var t = e.createElement("script");
                    t.onreadystatechange = function () {
                       u(n);
                       t.onreadystatechange = null;
                       o.removeChild(t);
                       t = null
                    };
                    o.appendChild(t)
                 }) : i = function (n) {
                    setTimeout(u, 0, n)
                 };
                 r.setImmediate = function (n) {
                    var r, t, u;
                    for ("function" != typeof n && (n = new Function("" + n)), r = new Array(arguments.length - 1), t = 0; t < r.length; t++) r[t] = arguments[t + 1];
                    return u = {
                       callback: n,
                       args: r
                    }, c[h] = u, i(h), h++
                 };
                 r.clearImmediate = v
              }
           }("undefined" == typeof self ? void 0 === n ? this : n : self)
        }).call(this, i(27), i(104))
     },
     13: function (n, t, i) {
        function e(n) {
           return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
              return typeof n
           } : function (n) {
              return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
           })(n)
        }
  
        function o() {
           for (var i, r, n = 0, t = {}; n < arguments.length; n++) {
              i = arguments[n];
              for (r in i) t[r] = i[r]
           }
           return t
        }
  
        function s(n) {
           return n.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        }
  
        function r() {}
  
        function h() {}
        var u, f;
        ! function (r) {
           var o, h, s;
           (void 0 === (f = "function" == typeof (u = r) ? u.call(t, i, t, n) : u) || (n.exports = f), o = !0, "object" === e(t) && (n.exports = r(), o = !0), o) || (h = window.Cookies, s = window.Cookies = r(), s.noConflict = function () {
              return window.Cookies = h, s
           })
        }(function () {
           return function n(t) {
              function i(n, i, u) {
                 var s, e, f;
                 if ("undefined" != typeof document) {
                    "number" == typeof (u = o({
                       path: "/"
                    }, r.defaults, u)).expires && (u.expires = new Date(1 * new Date + 864e5 * u.expires));
                    u.expires = u.expires ? u.expires.toUTCString() : "";
                    try {
                       s = JSON.stringify(i);
                       /^[\{\[]/.test(s) && (i = s)
                    } catch (n) {}
                    i = t.write ? t.write(i, n) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                    n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                    e = "";
                    for (f in u) u[f] && (e += "; " + f, !0 !== u[f] && (e += "=" + u[f].split(";")[0]));
                    return document.cookie = n + "=" + i + e
                 }
              }
  
              function u(n, i) {
                 var o, r, u;
                 if ("undefined" != typeof document) {
                    for (var f = {}, h = document.cookie ? document.cookie.split("; ") : [], e = 0; e < h.length; e++) {
                       o = h[e].split("=");
                       r = o.slice(1).join("=");
                       i || '"' !== r.charAt(0) || (r = r.slice(1, -1));
                       try {
                          if (u = s(o[0]), r = (t.read || t)(r, u) || s(r), i) try {
                             r = JSON.parse(r)
                          } catch (n) {}
                          if (f[u] = r, n === u) break
                       } catch (n) {}
                    }
                    return n ? f[n] : f
                 }
              }
              return r.set = i, r.get = function (n) {
                 return u(n, !1)
              }, r.getJSON = function (n) {
                 return u(n, !0)
              }, r.remove = function (n, t) {
                 i(n, "", o(t, {
                    expires: -1
                 }))
              }, r.defaults = {}, r.withConverter = n, r
           }(h)
        })
     },
     14: function (n, t, i) {
        "use strict";
  
        function u(n) {
           var t = n,
              i;
           return t.style.height = "auto", t.style.transition = "none", i = t.offsetHeight, t.style.height = "", t.style.transition = "", i
        }
  
        function f(n) {
           var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              i = t.duration,
              s = void 0 === i ? 1e3 : i,
              f = t.callback,
              e = void 0 === f ? null : f,
              o = n.style,
              h = u(n);
           Object(r.g)(n);
           o.height = "".concat(h, "px");
           clearTimeout(n.slideTimeout);
           n.slideTimeout = setTimeout(function () {
              o.height = "auto";
              Object(r.g)(n);
              e && e()
           }, s)
        }
  
        function e(n) {
           var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              i = t.duration,
              s = void 0 === i ? 1e3 : i,
              f = t.callback,
              e = void 0 === f ? null : f,
              o = n.style,
              h = u(n);
           o.height = "".concat(h, "px");
           Object(r.g)(n);
           o.height = "";
           clearTimeout(n.slideTimeout);
           n.slideTimeout = setTimeout(function () {
              e && e()
           }, s)
        }
        i.d(t, "a", function () {
           return f
        });
        i.d(t, "b", function () {
           return e
        });
        var r = i(1)
     },
     2: function (n) {
        n.exports = _
     },
     249: function (n, t, i) {
        "use strict";
  
        function b() {
           var t, i = navigator.userAgent,
              n = i.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
           return /trident/i.test(n[1]) ? (t = /\brv[ :]+(\d+)/g.exec(i) || [], "IE ".concat(t[1] || "")) : "Chrome" === n[1] && null != (t = i.match(/\b(OPR|Edge)\/(\d+)/)) ? t.slice(1).join(" ").replace("OPR", "Opera") : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (t = i.match(/version\/(\d+)/i)) && n.splice(1, 1, t[1]), n.join(" "))
        }
  
        function k(n) {
           var t = this.getPrameterByName("sc_site"),
              i = void 0 !== n.excludeSiteName && n.excludeSiteName ? n.url : r.a.component.search.url.createSiteUrl(n.url, t);
           f.a.ajax({
              dataType: "json",
              url: i,
              success: function (t) {
                 n.callback(t)
              }
           })
        }
  
        function d(n, t) {
           t || (t = window.location.href);
           n = n.replace(/[\[\]]/g, "\\$&");
           var i = new RegExp("[?&]".concat(n, "(=([^&#]*)|&|#|$)")).exec(t);
           return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
        }
  
        function g(n, t) {
           return n.Count < t.Count
        }
  
        function nt(n, t) {
           switch (n) {
              case "SortByCount":
                 t.sort(g)
           }
        }
  
        function tt() {}
  
        function it(n, t) {
           var i, r;
           if (t = t.toLowerCase(), null == n) return [t];
           if (i = n.split(","), "" === n) return [t];
           for (r = 0; r < i.length; r++) i[r] = "".concat(i[r], "_").concat(t);
           return i
        }
  
        function rt(n, t, i) {
           for (var r = 0; r < n.length; r++) i[n[r]] = t;
           return i
        }
  
        function ut(n) {
           return {
              html: n.Html,
              payload: n.Payload
           }
        }
  
        function ft(n) {
           return u.a.map(n.Results, ut)
        }
  
        function et() {
           var t, n = this.get("dataProperties").searchResultsSignature;
           return null == n ? "" : (t = n.split(","), "" === n ? "" : t[0])
        }
  
        function ot() {
           var n, t = this.get("dataProperties"),
              i = r.a.component.search.results.searchResultModels,
              u = t.languageSource,
              f = this.getSignature();
           switch (u) {
              case "CurrentLanguage":
              case "AllLanguages":
                 return t.l;
              default:
                 if (void 0 !== (n = i.filter(function (n) {
                       return n.get("dataProperties").sig === f
                    })[0])) return n.get("dataProperties").l
           }
           return ""
        }
  
        function st() {
           this.$el.toggleClass("loading-in-progress")
        }
  
        function ht(n) {
           var t = this.model.get("dataProperties").resultPage,
              i = encodeURIComponent(n.target.innerText);
           this.updateQueryWithRedirect(i);
           window.location.pathname === t && window.location.reload()
        }
  
        function ct(n) {
           n.preventDefault();
           var t = encodeURIComponent(this.$el.find(".search-box-input.tt-input").val());
           this.updateQueryWithRedirect(t)
        }
  
        function lt(n) {
           n.preventDefault();
           var t = this.$el.find(".search-box-input.tt-input").val();
           this.closeDropdown();
           this.updateQueryModel(t)
        }
  
        function at(n) {
           13 !== n.keyCode && "click" !== n.type || (n.preventDefault(), this.performSearch(this.$el.find(".search-box-input.tt-input").val()))
        }
  
        function vt() {
           for (var r = this.model.get("sig"), t = this.model.get("dataProperties").targetSignature, u = "" !== t ? t : this.model.get("dataProperties").searchResultsSignature, f = this.translateSignatures(u, "e"), i = {}, n = 0; n < r.length; n++) i[f[n]] = 0;
           return i
        }
  
        function yt() {
           this.$el.find(".search-box-input").typeahead("close")
        }
  
        function pt() {}
  
        function wt(n) {
           r.a.component.search.vent.trigger("facet-data-loaded", n)
        }
  
        function bt() {
           var f, u = this.getFacetRequestData(),
              i = u.data,
              n = [];
           for (var t in i) i.hasOwnProperty(t) && (n = (n = n.concat(i[t].normalFiltering)).concat(i[t].partialFiltering), f = this.getSearchResultsLanguage(t), n.length > 0 && r.a.component.search.ajax.getData({
              callback: wt,
              url: r.a.component.search.url.createMultiFacetUrl({
                 endpoint: u.endpoint,
                 s: u.s,
                 l: f
              }, n, t)
           }))
        }
  
        function kt(n) {
           r.a.component.search.vent.trigger("facet-data-filtered", n)
        }
  
        function dt(n) {
           r.a.component.search.vent.trigger("facet-data-partial-filtered", n)
        }
  
        function gt(n) {
           function c(r) {
              f = "" !== r.signature ? "".concat(r.signature, "_").concat(r.facetName) : r.facetName;
              t.hasOwnProperty(r.signature) || h.initRequestObject(t, r);
              r.filterWithoutMe && (void 0 === n || n.hasOwnProperty(f) || n.hasOwnProperty(f.toLowerCase())) ? (t[r.signature].partialFiltering.push(r.facetName), i = r.endpoint) : (t[r.signature].normalFiltering.push(r.facetName), i = r.endpoint)
           }
           var e, o, i, f, h = this,
              s = [],
              t = {};
           for (e in r.a.component.search.facet) "function" == typeof (o = r.a.component.search.facet[e]).getFacetDataRequestInfo && (s = o.getFacetDataRequestInfo(), u.a.each(s, c));
           return {
              endpoint: i,
              data: t
           }
        }
  
        function ni(n, t) {
           n[t.signature] = {};
           n[t.signature].normalFiltering = [];
           n[t.signature].partialFiltering = []
        }
  
        function ti(n) {
           var t = this.getSearchResultsModelBySignature(n);
           return void 0 !== t ? t.get("dataProperties").l : ""
        }
  
        function ii(n) {
           var t = this.getSearchResultsModelBySignature(n);
           return void 0 !== t ? t.get("dataProperties").s : ""
        }
  
        function ri(n) {
           return r.a.component.search.results.searchResultModels.filter(function (t) {
              return t.get("dataProperties").sig === n
           })[0]
        }
  
        function ui() {
           r.a.component.search.vent.on("facet-data-loaded", this.processData.bind(this));
           r.a.component.search.vent.on("facet-data-filtered", this.processData.bind(this));
           r.a.component.search.vent.on("facet-data-partial-filtered", this.processData.bind(this));
           r.a.component.search.vent.on("hashChanged", this.updateComponent.bind(this))
        }
  
        function fi() {
           var n = this.get("blockNextRequest");
           this.set(this.get("blockNextRequest"), !n)
        }
  
        function ei(n) {
           for (var i, r = this.get("sig"), t = 0; t < r.length; t++) i = r[t].toLowerCase(), n.hasOwnProperty(i) && "" !== n[i] ? this.set({
              optionSelected: !0
           }) : this.set({
              optionSelected: !1
           })
        }
  
        function oi() {
           var n = this.$el.data();
           this.properties = n.properties;
           this.model && (this.model.set({
              dataProperties: this.properties
           }), this.model.set("sig", this.translateSignatures(this.properties.searchResultsSignature, this.properties.f)));
           this.model.on("change", this.render, this)
        }
  
        function si() {
           this.properties = this.$el.data().properties;
           this.model && (this.model.set({
              dataProperties: this.properties
           }), this.model.set("sig", this.translateSignatures(this.properties.searchResultsSignature, this.properties.f)));
           0 === this.$el.find(".filterButton").length && (this.$el.find(".manualRangeMin").on("blur", this.textBoxChange.bind(this, [])), this.$el.find(".manualRangeMax").on("blur", this.textBoxChange.bind(this, [])));
           this.model.on("change", this.render, this);
           r.a.component.search.vent.on("hashChanged", this.updateComponent.bind(this))
        }
  
        function hi(n) {
           13 == n.keyCode && this.filter()
        }
  
        function ci(n) {
           for (var i, r = this.model.get("sig"), t = 0; t < r.length; t++) i = r[t].toLowerCase(), n.hasOwnProperty(i) ? this.render() : this.clearFilter()
        }
  
        function li() {
           var n = this.$el.data();
           this.properties = n.properties;
           this.model && (this.model.set({
              dataProperties: this.properties
           }), this.model.set("sig", this.translateSignatures(this.properties.searchResultsSignature, this.properties.f)));
           this.model.on("change", this.updateSelectedValue, this);
           r.a.component.search.vent.on("hashChanged", this.updateModel.bind(this));
           this.render()
        }
  
        function ai(n, t) {
           var r = this.$el.find(".slider-value"),
              i = this.model.get("dataProperties").formatingString;
           i = i.replace("{from}", n).replace("{to}", t);
           r.html(i)
        }
  
        function vi() {
           var n = this.$el.data();
           this.properties = n.properties;
           this.model && (this.model.set({
              dataProperties: this.properties
           }), this.model.set("sig", this.translateSignatures(this.properties.searchResultsSignature, this.properties.f)));
           this.model.on("change", this.updateSelectedValue, this);
           r.a.component.search.vent.on("hashChanged", this.updateModel.bind(this));
           this.render()
        }
  
        function yi() {
           var t = this.$el.data(),
              n = this;
           null === t.properties.searchResultsSignature && (t.properties.searchResultsSignature = "");
           this.model && this.model.set("sig", t.properties.searchResultsSignature.split(","));
           r.a.component.search.vent.on("results-loaded", function (t) {
              for (var r = n.model.get("sig"), i = 0; i < r.length; i++) t.pageSize >= t.dataCount ? n.$el.hide() : r[i] === t.searchResultsSignature && (t.offset + t.pageSize >= t.dataCount ? n.$el.hide() : n.$el.show())
           })
        }
  
        function pi() {
           for (var t = this.model.get("sig"), n = 0; n < t.length; n++) r.a.component.search.vent.trigger("loadMore", {
              sig: t[n]
           })
        }
  
        function wi() {
           return Date.now().toString()
        }
  
        function bi(n) {
           return n.hasOwnProperty("text") ? n.text : n
        }
  
        function ki(n) {
           return '<div class="suggestion-item">'.concat(n, "<\/div>")
        }
  
        function di() {
           var f = this,
              e = this,
              n = this.$el.data(),
              t = this.$el.find(".location-search-box-input"),
              i = n.properties.searchResultsSignature.split(","),
              u;
           null === n.properties.searchResultsSignature && (n.properties.searchResultsSignature = "");
           this.model.set({
              dataProperties: n.properties
           });
           this.model.set({
              sig: i
           });
           this.model.set({
              queryParams: {
                 maxResults: n.p,
                 text: ""
              }
           });
           this.model.initAutocompleteEngine();
           u = this.model.get("searchEngine");
           u && t.typeahead({
              hint: !0,
              minLength: 2
           }, {
              source: u.ttAdapter(),
              templates: {
                 suggestion: ki
              }
           }).on("typeahead:selected", function (n, i) {
              e.translateUserLocation(i);
              t.typeahead("val", i)
           });
           this.addressLookup();
           r.a.component.search.vent.trigger("checkUrlLocationAction", function (n) {
              t.val(n)
           });
           r.a.component.search.vent.on("hashChanged", function (n) {
              var r = n[i.length > 0 && "" !== i[0] ? "".concat(i[0], "_a") : "a"];
              null != r && "" !== r && t.val(r)
           });
           r.a.component.search.vent.on("set-location", function (n) {
              f.setLocation(n.lat, n.lng, n.country)
           });
           r.a.component.search.vent.on("locationHasChanged", function (n) {
              t.val(n)
           })
        }
  
        function gi() {
           var t, i = this.model.get("dataProperties"),
              n = {
                 text: this.getAddress(),
                 maxResults: 1
              };
           if ("" === n.text) return t = this.createHashObject("", ""), void this.updateHash(t, i);
           switch (i.mode) {
              case "Location":
                 this.detectLocation();
                 break;
              case "UserProvided":
                 this.translateUserLocation(n);
                 break;
              case "Mixed":
                 void 0 === n.text || "" === n.text ? this.detectLocation() : this.translateUserLocation(n)
           }
        }
  
        function nr(n) {
           var t, i, r = this.model.get("dataProperties");
           n.stopPropagation();
           13 !== n.keyCode && (i = {
              text: 0 !== (t = this.$el.find(".location-search-box-input.tt-input")).length ? t.val() : this.$el.find(".location-search-box-input").val(),
              maxResults: r.p
           }, this.model.set({
              queryParams: i
           }))
        }
  
        function tr(n) {
           return n.stopPropagation(), 13 !== n.keyCode || (this.addressLookup(n), !1)
        }
  
        function ir(n, t, i) {
           var r = this.model.get("dataProperties"),
              u;
           n && t && (u = this.createHashObject("".concat(n, "|").concat(t), "".concat(r.f, ",Ascending")), this.updateHash.call(this, u, r, i))
        }
  
        function rr(n) {
           console.log(n)
        }
  
        function ur() {
           var n = this.model.get("dataProperties"),
              i = this.$el.find(".location-search-box-input"),
              u = {},
              t = this;
           r.a.component.locationService.detectLocation(function (r) {
              u = t.createHashObject("".concat(r[0], "|").concat(r[1]), "".concat(n.f, ",Ascending"));
              t.updateHash.call(t, u, n);
              i.length > 0 && i.attr("placeholder", n.myLocationText)
           }, rr)
        }
  
        function fr(n, t, i) {
           for (var r, e = this.model.get("sig"), f = {}, u = 0; u < e.length; u++) f["" !== (r = e[u]) ? "".concat(r, "_g") : "g"] = n, f["" !== r ? "".concat(r, "_o") : "o"] = t, i && (f["" !== r ? "".concat(r, "_p") : "p"] = i);
           return f
        }
  
        function er(n, t) {
           this.model.set({
              pageSize: parseInt(n.pageSize),
              resultsCount: parseInt(n.dataCount),
              offset: parseInt(n.offset),
              selectedValue: parseInt(t)
           });
           this.model.set("timeStamp", (new Date).getTime());
           this.updateElementCssClass(n)
        }
  
        function or(n) {
           this.el.classList.remove("page-selector-empty");
           this.el.classList.remove("page-selector-single-page");
           0 === n.dataCount ? this.el.classList.add("page-selector-empty") : (n.pageSize > n.dataCount || n.offset > n.dataCount) && this.el.classList.add("page-selector-single-page")
        }
  
        function sr() {
           var h, i = this.model.get("dataProperties").properties,
              l = this.model.get("resultsCount"),
              o = this.model.get("pageSize"),
              r = this.model.get("selectedValue"),
              t = Math.ceil(l / o),
              s = [],
              f = r - i.treshold / 2,
              e = r + i.treshold / 2,
              n, c;
           if (f < 0 && (e += Math.abs(f)), e > t && (f -= e - t), i.treshold >= t)
              for (n = 0; n < t; n++) s.push({
                 number: n + 1,
                 offset: n * o,
                 hideMobile: n < t - 1 ? "hide-mobile" : ""
              });
           else
              for (n = 1; n <= t; n++)(1 === n || n === t || n >= f && n <= e) && s.push({
                 number: n,
                 offset: (n - 1) * o,
                 hideMobile: n < t ? "hide-mobile" : ""
              });
           h = {
              previous: i.previous,
              first: i.first,
              next: i.next,
              last: i.last,
              pages: s,
              selectedValue: r
           };
           c = u.a.template(this.model.get("template"))({
              data: h
           });
           this.$el.html(c);
           this.$el[0].classList.add("initialized");
           this.handleButtonState(r, t)
        }
  
        function hr(n, t) {
           this.$el.find(".page-selector-item-last, .page-selector-item-next").removeClass("inactive");
           this.$el.find(".page-selector-item-first, .page-selector-item-previous").removeClass("inactive");
           0 == t ? (this.$el.find(".page-selector-item-first, .page-selector-item-previous").addClass("inactive"), this.$el.find(".page-selector-item-last, .page-selector-item-next").addClass("inactive")) : (1 == n && this.$el.find(".page-selector-item-first, .page-selector-item-previous").addClass("inactive"), n == t && this.$el.find(".page-selector-item-last, .page-selector-item-next").addClass("inactive"))
        }
  
        function cr(n) {
           var t = "",
              i = 0;
           return u.a.each(n, function (n, r) {
              i > 0 && (t += "&");
              i++;
              t += "".concat(r, "=").concat(n)
           }), t
        }
  
        function lr(n) {
           if (void 0 !== n) {
              var t = this.$el.find("select option[value='".concat(n, "']"));
              t.siblings().removeAttr("selected");
              t.attr("selected", "selected")
           }
        }
  
        function ar(n) {
           var t = n.currentTarget.value;
           this.updatePageSize(t)
        }
  
        function vr() {
           var n = window.location.hash;
           n.length && (this.set({
              hash: n
           }), this.createHashObj())
        }
  
        function yr() {
           this.set({
              hashObj: this.parseHashParameters(this.get("hash"))
           })
        }
  
        function pr(n) {
           return "" !== n
        }
  
        function wr(n) {
           var o, t, u, f, s;
           if (null === n || "" === n) return {};
           var e = {},
              i = (n = n || window.location.hash).slice(n.indexOf("#") + 1).split("&"),
              r = i;
           for (i = [], o = pr, t = 0; t <= r.length - 1; t++) o(r[t], t, r) && i.push(r[t]);
           for (u = 0; u < i.length; u++) f = i[u].split("="), s = f[0].toLowerCase(), e[decodeURIComponent(s)] = f.length > 1 ? decodeURIComponent(f[1].replace(/\+/g, " ")) : null;
           return e
        }
  
        function br(n, t) {
           var e = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              i = "#",
              r = this.parseHashParameters(window.location.hash),
              s = 0 === n.e && !r.e,
              o;
           u.a.each(n, function (n, t) {
              "" !== n ? r[t] = n : delete r[t]
           });
           "#" !== t && null != t || (t = window.location.pathname);
           o = 0;
           u.a.each(r, function (n, t) {
              o > 0 && (i += "&");
              o++;
              i += "".concat(t, "=").concat(encodeURIComponent(n).replace(/%7C/g, "|"))
           });
           (n["placeholder tag"] || s) && (e = !1);
           i.length > 1 ? f.a.history.navigate(i, {
              trigger: e
           }) : f.a.history.navigate("#_=", {
              trigger: e
           });
           i.length && (this.set({
              hash: i
           }), this.createHashObj())
        }
  
        function kr(n, t) {
           for (var r = Object.keys(n), u = !1, f = r.length, i = 0; i < f; i++)
              if (r[i].startsWith(t)) {
                 u = !0;
                 break
              } return u
        }
  
        function dr(n) {
           n.addClass("radius-button")
        }
  
        function gr() {
           this.updateHash("");
           this.model.set({
              selected: void 0
           })
        }
  
        function ru(n) {
           this.set("blockNextRequest", n)
        }
  
        function uu() {
           return this.get("blockNextRequest")
        }
  
        function fu() {
           this.model.get("loadingInProgress") ? this.$el.addClass("loading-in-progress") : this.$el.removeClass("loading-in-progress")
        }
  
        function eu() {
           this.model.get("loadingMoreInProgress") ? this.$el.addClass("loading-more-in-progress") : this.$el.removeClass("loading-more-in-progress")
        }
  
        function ou(n) {
           var t = iu.a.isMobile() ? 65 : 128,
              i = Object(o.g)(n);
           c.b.scrollTo(i.offset - t)
        }
  
        function su(n) {
           var t = Object(o.a)(".js-hero-media")[0];
           t && n && (this.currentVideo = new tu.default(t))
        }
  
        function hu(n) {
           return n.text()
        }
  
        function cu(n, t, i, r) {
           var u = this,
              o = this.model.get("preloaderTemplate"),
              f = function (t, i) {
                 return new Promise(function (f) {
                    var e = {
                       callback: function () {
                          u.handleVideoPlayer(i);
                          f()
                       }
                    };
                    r ? u.isDrawerMapCountryActive ? Object(s.b)(n, {
                       callback: function () {
                          u.isDrawerMapCountryActive = !0;
                          n.innerHTML = t;
                          i = !0;
                          Object(s.a)(n, e)
                       }
                    }) : (u.isDrawerMapCountryActive = !0, n.innerHTML = t, i = !0, Object(s.a)(n, e)) : (u.isDrawerMapCountryActive = !0, Object(s.a)(n, e))
                 })
              },
              e;
           (this.scrollToDrawer(n), this.drawerTemplates[t]) ? (this.drawerMapCountry = t, f(this.drawerTemplates[t])) : (e = f(o), fetch("/?sc_itemid={".concat(i, "}")).then(hu).then(function (n) {
              u.drawerMapCountry = t;
              u.drawerTemplates[t] = n;
              e.then(function () {
                 f(n, !0)
              })
           }))
        }
  
        function lu(n) {
           return Object(o.l)(n.querySelector(".c-card__title"), n.querySelector(".c-card__image-container"))
        }
  
        function au() {
           for (var i = lu, t = Object(o.a)(".search-result-list .js-card"), n = 0; n <= t.length - 1; n++) i(t[n], n, t)
        }
  
        function vu() {
           var t = u.a.template(this.model.get("templateItems")),
              i = u.a.template(this.model.get("templateItemsSuggested")),
              n = this.model.get("resultDataMore").data,
              r = t({
                 results: n
              }),
              f = i({
                 results: n
              });
           this.$el.find(".search-result-list__suggested").append(f);
           this.$el.find(".search-result-list").append(r);
           this.initializeMapComponents();
           this.initializeCardScript()
        }
  
        function yu(n) {
           return n.Featured
        }
  
        function pu(n) {
           return !n.Featured
        }
  
        function wu(n) {
           var t = n.sig,
              u = void 0 === t ? this.model.get("dataProperties").sig : t,
              f = n.coordinates,
              e = n.id,
              o = n.handleArray,
              i = n.zoom,
              s = void 0 === i ? null : i;
           r.a.component.search.vent.trigger("center-map", {
              sig: u,
              coordinates: f,
              id: e,
              handleArray: o,
              zoom: s
           })
        }
  
        function bu() {
           this.$el.data();
           var t = this.$el.find(".results-count"),
              n = this;
           if (this.resultsCountText = t.find(".query").html(), this.resultsCountTextNoQuery = t.find(".no-query").html(), window.location.href.startsWith("file://")) return t.html(n.resultsCountText.replace("{count}", 1)), void n.$el.find(".results-count").show();
           r.a.component.search.vent.on("results-loaded", function (i) {
              var r = Number(i.offset) + 1,
                 f = 0,
                 e, u;
              0 === i.dataCount && (r = 0);
              f = r + i.pageSize >= i.dataCount ? i.dataCount : r + i.pageSize - 1;
              u = r.toString() + " - " + f.toString();
              e = void 0 === i.query ? n.resultsCountTextNoQuery.replace("{pages}", u).replace("{count}", i.dataCount) : n.resultsCountText.replace("{pages}", u).replace("{count}", i.dataCount).replace("{query}", i.query);
              t.text(e);
              n.$el.find(".results-count").show()
           })
        }
  
        function ku() {
           XA.component.search.vent.on("facet-data-loaded", this.processData.bind(this));
           XA.component.search.vent.on("facet-data-partial-filtered", this.processData.bind(this));
           XA.component.search.vent.on("facet-data-filtered", this.processData.bind(this));
           XA.component.search.vent.on("hashChanged", this.updateComponent.bind(this));
           this.set({
              facetArray: []
           })
        }
  
        function du() {
           var n = this.get("blockNextRequest");
           this.set(this.get("blockNextRequest"), !n)
        }
  
        function gu(n) {
           function o(n) {
              return n.Key.toLowerCase() === r.get("dataProperties").f.toLowerCase()
           }
           var t, r = this,
              u = this.get("dataProperties"),
              f = u.searchResultsSignature.split(","),
              e = u.sortOrder,
              i;
           for (null === n.Signature && (n.Signature = ""), t = 0; t < f.length; t++) n.Facets.length > 0 && n.Signature === f[t] ? (i = _.find(n.Facets, o), void 0 !== i && (this.sortFacetArray(e, i.Values), r.set({
              resultData: i
           }))) : r.set({
              resultData: []
           })
        }
  
        function nf(n) {
           if (n) {
              for (var i = n.split("||"), r = this.get("facetArray"), t = 0; t < i.length; t++) r.push(i[t]);
              this.set({
                 facetArray: _.unique(r)
              })
           }
        }
  
        function tf(n) {
           for (var i = this.get("sig"), t = 0; t < i.length; t++) n.hasOwnProperty(i[t]) ? this.updateFacetArray(n[i[t]]) : this.set({
              facetArray: []
           }), this.set("timeStamp", (new Date).getTime())
        }
  
        function rf(n) {
           return JSON.stringify(n)
        }
  
        function uf(n) {
           return n.classList.remove("active")
        }
  
        function ff(n) {
           return n.bndUpdateCheckboxCount()
        }
  
        function ef() {
           var n = this.$el.data();
           this.model && this.model.set("sig", this.translateSignatures(n.properties.sig, "o"));
           r.a.component.search.vent.on("hashChanged", this.updateComponent.bind(this))
        }
  
        function of (n) {
           for (var i, r, u = this.model.get("sig"), t = 0; t < u.length; t++) n.hasOwnProperty(u[t]) ? (r = n[u[t]].split(","), i = this.$el.find("[data-facet='".concat(r[0], "'][data-direction='").concat(r[1], "']"))) : i = this.$el.find("[data-facet][data-direction]:first");
           this.$el.find("[data-facet][data-direction]").removeAttr("selected");
           i.attr("selected", "selected")
        }
  
        function sf(n) {
           var t, r = (n += "").split("||"),
              i = [];
           return u.a.each(r, function (n) {
              t = n.split("|");
              u.a.contains(n, "|") && 3 === t.length ? i.push("".concat(t[1], "|").concat(t[2])) : i.push(n)
           }), i.join("||")
        }
  
        function hf(n, t, i) {
           var r = this.setEndpoint(n);
           return r += "?q=" + encodeURIComponent(i), r += "&v=" + t.v, r += "&p=" + t.p, r += t.l ? "&l=" + t.l : "", r += t.s ? "&s=" + t.s : "", r + (t.itemid ? "&itemid=" + t.itemid : "")
        }
  
        function cf(n, t) {
           var i = this.setEndpoint(n.endpoint);
           return i += "?f=" + n.f.toLowerCase(), i += n.s ? "&s=" + n.s : "", i += n.l ? "&l=" + n.l : "", i += t ? "&q=" + encodeURIComponent(t) : "", i + this.getFacetParams(n)
        }
  
        function lf(n, t, i, r) {
           var u = this.setEndpoint(n.endpoint);
           return u += "?f=" + t.join("||").toLowerCase(), u += n.s ? "&s=" + n.s : "", u += n.l ? "&l=" + n.l : "", u += r ? "&itemid=" + r : "", u += this.getFacetParams(n, i), u + ("&sig=" + encodeURIComponent(i))
        }
  
        function af(n, t) {
           var i = n.f.toLowerCase(),
              u = {};
           return delete t[i], delete u[i], r.a.component.search.query.updateHash(u), t
        }
  
        function vf(n, t, i) {
           var r = this.setEndpoint(n.endpoint);
           return r + ("/" + i + "/" + t)
        }
  
        function yf(n, t, i, r, u) {
           var f = this.setEndpoint(n.endpoint);
           return f + ("/" + i + "/" + t + "/" + r + "/" + u)
        }
  
        function pf(n, t) {
           return null != t && "" !== t ? "".concat(n, "&sc_site=").concat(t) : n
        }
  
        function wf(n) {
           var t = window.location.origin;
           return -1 !== n.indexOf(t) ? n : t + n
        }
  
        function bf(n) {
           var t;
           return t = (n = n.replace(/[?]/g, "&")).indexOf("&"), n = "".concat(n.substr(0, t), "?").concat(n.substr(t + 1))
        }
  
        function kf(n, t) {
           r.a.component.search.vent.trigger("add-variant-class", {
              classes: n,
              sig: t
           })
        }
  
        function df(n) {
           this.$el.find("div[data-variantIndex]").removeClass("active-variant");
           this.$el.find("div[data-variantIndex=".concat(n, "]")).addClass("active-variant")
        }
  
        function v(n) {
           return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
              return typeof n
           } : function (n) {
              return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
           })(n)
        }
  
        function gf() {
           var n = this;
           r.a.component.search.vent.on("orderChanged", function (t) {
              n.getData(t)
           })
        }
  
        function ne(n) {
           return !!+(n.Latitude || n.Longitude)
        }
  
        function te(n) {
           return !n.Offices || (n.Offices = n.Offices.filter(ne), !!+n.Offices.length)
        }
  
        function ie(n) {
           for (var r = te, i = [], t = 0; t <= n.length - 1; t++) r(n[t], t, n) && i.push(n[t]);
           return i
        }
  
        function re() {
           void 0 !== r.a.component.map.getSearchEndpoint() ? this.getSearchData() : setTimeout(this.getEndpointAndSearch.bind(this), 100)
        }
  
        function ue(n) {
           var i = n.substr(0, 4),
              r = n.substr(4, 2) - 1,
              u = n.substr(6, 2),
              t = new Date(i, r, u);
           if ("" !== n) {
              if (t.getFullYear() == i && t.getMonth() == r && t.getDate() == u) return t;
              throw "Invalid date: ".concat(n);
           }
        }
  
        function fe() {
           this.properties = this.$el.data().properties;
           this.model && (this.model.set({
              dataProperties: this.properties
           }), this.model.set("sig", this.translateSignatures(this.properties.searchResultsSignature, this.properties.f)));
           this.model.on("change", this.render, this);
           r.a.component.search.vent.on("hashChanged", this.updateComponent.bind(this))
        }
  
        function ee(n) {
           for (var t, i, f = this.$el.find(".startDate"), e = this.$el.find(".endDate"), u = this.model.get("sig"), r = 0; r < u.length; r++) t = u[r].toLowerCase(), n.hasOwnProperty(t) && "" !== n[t] ? ("" !== (i = n[t].split("|"))[0] && this.handleDate(f, i[0]), "" !== i[1] && this.handleDate(e, i[1])) : this.clearFilter()
        }
        var h, l, f, a;
        i.r(t);
        var y = i(0),
           r = i.n(y),
           p = i(4),
           e = i.n(p),
           w = i(2),
           u = i.n(w);
        r.a.component.locationService = function () {
           function s() {
              i("Error while detecting user location location");
              n = !1
           }
           var u, f, e, i, o = {},
              n = !1,
              t = [],
              r = [];
           return u = function (u, e) {
              var o;
              t.push(e);
              r.push(u);
              n || (n = !0, navigator.geolocation ? navigator.geolocation.getCurrentPosition(function (t) {
                 for (o = 0; o < r.length; o++) r[o]([t.coords.latitude, t.coords.longitude]);
                 n = !1
              }, s, f()) : (i("Your browser doesn't support geolocation"), n = !1))
           }, f = function () {
              return -1 !== e().indexOf("Chrome") ? {
                 enableHighAccuracy: !0,
                 timeout: 1e4,
                 maximumAge: 0
              } : {
                 timeout: 1e3,
                 maximumAge: 1 / 0
              }
           }, e = b, i = function (n) {
              for (var i = 0; i < t.length; i++) "function" == typeof t[i] && t[i](n)
           }, o.detectLocation = function (n, t) {
              u(n, t)
           }, o
        }(e.a, document);
        r.a.register("locationService", r.a.component.locationService);
        l = i(5);
        f = i.n(l);
        r.a.component.search = {};
        r.a.component.search.facet = {};
        r.a.component.search.results = {};
        r.a.component.search.vent = u.a.extend({}, f.a.Events);
        r.a.component.search.ajax = (e.a, document, new(f.a.Model.extend({
           getData: k,
           getPrameterByName: d
        })));
        r.a.component.search.baseModel = (e.a, document, f.a.Model.extend({
           sortFacetArray: nt
        }));
        r.a.register("searchBaseModel", r.a.component.search.baseModel);
        r.a.component.search.baseView = (e.a, document, f.a.View.extend({
           initialize: tt,
           translateSignatures: it,
           updateSignaturesHash: rt
        }));
        r.a.register("searchBaseView", r.a.component.search.baseView);
        r.a.component.search.box = function (n, t) {
           function v(t) {
              var i = n(t),
                 r = new l;
              h.push(r);
              s.push(new a({
                 el: i,
                 model: r
              }));
              i.addClass("initialized")
           }
           var o, i, e = {},
              s = [],
              h = [],
              c = !1,
              l = f.a.Model.extend({
                 defaults: {
                    searchEngine: "",
                    typeahead: "",
                    dataProperties: {},
                    searchQuery: "",
                    loadingInProgress: !1,
                    sig: []
                 },
                 initSearchEngine: function () {
                    var t = this,
                       u = r.a.component.search.ajax.getPrameterByName("sc_site"),
                       f = new Bloodhound({
                          datumTokenizer: Bloodhound.tokenizers.obj.whitespace("name"),
                          queryTokenizer: Bloodhound.tokenizers.whitespace,
                          limit: t.get("dataProperties").p,
                          remote: {
                             url: i.createSiteUrl(t.createSuggestionsUrl(n.extend({
                                l: t.getLanguage()
                             }, t.get("dataProperties")), t.get("searchQuery")), u),
                             filter: ft,
                             replace: function () {
                                var r = t.get("valueProvider")(),
                                   f = n.extend({
                                      l: t.getLanguage()
                                   }, t.get("dataProperties"));
                                return i.createSiteUrl(t.createSuggestionsUrl(f, r), u)
                             },
                             ajax: {
                                beforeSend: function () {
                                   t.set({
                                      loadingInProgress: !0
                                   })
                                },
                                complete: function () {
                                   t.set({
                                      loadingInProgress: !1
                                   })
                                }
                             }
                          }
                       });
                    f.initialize();
                    this.set({
                       searchEngine: f
                    })
                 },
                 createSuggestionsUrl: function (n, t) {
                    var r = this.get("dataProperties").suggestionsMode,
                       u = this.get("dataProperties").endpoint,
                       f = this.get("dataProperties").suggestionEndpoint;
                    switch (r) {
                       case "ShowPredictions":
                          return i.createPredictiveSearchUrl(f, n, t);
                       default:
                          return i.createPredictiveSearchUrl(u, n, t)
                    }
                 },
                 getSignature: et,
                 getLanguage: ot
              }),
              a = r.a.component.search.baseView.extend({
                 initialize: function () {
                    var o, f = this,
                       n = this.$el.data(),
                       i, u, e;
                    n.properties.targetSignature = null !== n.properties.targetSignature ? n.properties.targetSignature : "";
                    this.model.set({
                       dataProperties: n.properties
                    });
                    this.model.set("sig", this.translateSignatures(n.properties.searchResultsSignature, "q"));
                    this.model.initSearchEngine();
                    this.model.on("change:loadingInProgress", this.loading, this);
                    i = t.querySelector(".js-search-results-data");
                    u = null;
                    i && (u = {
                       empty: i.dataset.empty || "not found",
                       link: i.dataset.link || "#",
                       btn: i.dataset.btn || "show more"
                    });
                    o = this.$el.find(".search-box-input").typeahead({
                       hint: !0,
                       minLength: 3
                    }, {
                       source: f.model.get("searchEngine").ttAdapter(),
                       displayKey: function () {
                          return f.$el.find(".search-box-input.tt-input").val()
                       },
                       templates: {
                          notFound: 0 === n.properties.p ? "" : '<p class="c-search-results__empty">'.concat(u.empty, "<\/p>"),
                          footer: '<div class="c-search-results__more search-box-button-with-redirect">\n                        <a href="'.concat(u.link, '" class="btn btn--primary">\n                          ').concat(u.btn, "\n                        <\/a>\n                      <\/div>"),
                          suggestion: function (t) {
                             var f = n.properties.suggestionsMode,
                                i = t.html.replace(/(<([^>]+)>)/gi, ""),
                                r = "" !== i ? i : t.html,
                                e = n.properties.renderSuggestionsAsLinks,
                                u = t.payload;
                             switch (f) {
                                case "ShowPredictions":
                                case "ShowSearchResultsAsPredictions":
                                   return e && null !== u ? '<div class="sugesstion-item">\n                          <a href="'.concat(u, '">').concat(r, "<\/a>\n                        <\/div>") : '<div class="sugesstion-item">'.concat(r, "<\/div>");
                                default:
                                   return '<div class="sugesstion-item">'.concat(t.html, "<\/div>")
                             }
                          }
                       }
                    }).on("typeahead:selected", this.suggestionSelected.bind(f));
                    this.model.set({
                       typeahead: o
                    });
                    this.model.set({
                       valueProvider: function () {
                          return f.$el.find(".search-box-input.tt-input").val()
                       }
                    });
                    r.a.component.search.vent.on("hashChanged", this.updateSearchBoxValue.bind(this));
                    e = t.querySelectorAll(".js-search .js-search-input")[1];
                    e && e.focus()
                 },
                 events: {
                    "click .search-box-button": "updateQueryModelClick",
                    "click .search-box-button-with-redirect": "handleButton",
                    "keypress .search-box-input.tt-input": "predictiveSearch",
                    "keydown .search-box-input.tt-input": "predictiveSearch",
                    "click .js-search-submit": "predictiveSearch",
                    "click .c-search-suggested__link": "handleSuggestion"
                 },
                 loading: st,
                 suggestionSelected: function (t, i) {
                    t.preventDefault();
                    var r, f = this.model.get("dataProperties").suggestionsMode,
                       u = n(i.html).text(),
                       e = "" != u ? u : i.html;
                    switch (f) {
                       case "ShowPredictions":
                       case "ShowSearchResultsAsPredictions":
                          this.performSearch(e);
                          break;
                       default:
                          (r = n(i.html).find("a")).length && (window.location.href = n(r[0]).attr("href"))
                    }
                 },
                 handleSuggestion: ht,
                 handleButton: ct,
                 updateQueryWithRedirect: function (n) {
                    var u = this.model.get("dataProperties").resultPage,
                       t = this.model.get("dataProperties").targetSignature,
                       f = this.model.get("dataProperties").searchResultsSignature,
                       e = this.model.get("sig"),
                       r = {};
                    r = "" !== t ? this.updateSignaturesHash(["".concat(t, "_q")], n, this.createOffsetObject()) : this.updateSignaturesHash(e, n, this.createOffsetObject());
                    window.location.href = i.createRedirectSearchUrl(u, r, f, t)
                 },
                 updateQueryModelClick: lt,
                 updateQueryModel: function (n) {
                    for (var i = {}, u = this.translateSignatures(this.model.get("dataProperties").searchResultsSignature, "e"), r = this.model.get("sig"), t = 0; t < r.length; t++) i[r[t]] = n, i[u[t]] = 0;
                    o.updateHash(i, this.model.get("dataProperties").targetUrl)
                 },
                 predictiveSearch: at,
                 performSearch: function (n) {
                    var t = this.model.get("dataProperties"),
                       r = t.targetSignature,
                       e = t.searchResultsSignature,
                       u = t.resultPage,
                       o = this.model.get("sig"),
                       f = {};
                    this.closeDropdown();
                    "" === u ? (this.updateQueryModel(n), this.$el.find(".search-box-input.tt-input").blur().val(n)) : (n = encodeURIComponent(n), f = "" !== r ? this.updateSignaturesHash(["".concat(r, "_q")], n, this.createOffsetObject()) : this.updateSignaturesHash(o, n, this.createOffsetObject()), window.location.href = i.createRedirectSearchUrl(u, f, e, r))
                 },
                 createOffsetObject: vt,
                 updateSearchBoxValue: function () {
                    for (var i = o.parseHashParameters(window.location.hash), r = this.$el.find(".search-box-input.tt-input"), t = this.model.get("sig"), n = 0; n < t.length; n++) i.hasOwnProperty(t[n]) ? r.val(decodeURIComponent(i[t[n]])) : r.val("")
                 },
                 closeDropdown: yt
              });
           return e.init = function () {
              if (!n("body").hasClass("on-page-editor") && !c) {
                 o = r.a.component.search.query;
                 r.a.component.search.results.searchResultModels;
                 i = r.a.component.search.url;
                 var t = n(".search-box:not(.initialized)");
                 u.a.each(t, v);
                 c = !0
              }
           }, e.searchBoxViews = s, e.searchBoxModels = h, e
        }(e.a, document);
        r.a.register("searchBox", r.a.component.search.box);
        r.a.component.search.facet.data = (h = e.a, document, new(f.a.Model.extend({
           defaults: {},
           initialize: pt,
           getInitialFacetData: bt,
           filterFacetData: function (n) {
              function a(i) {
                 var u = h.extend({}, n);
                 delete u["" !== t ? "".concat(t, "_").concat(i) : i];
                 delete u["" !== t ? "".concat(t, "_").concat(i.toLowerCase()) : i.toLowerCase()];
                 f = h.extend({
                    endpoint: c.endpoint,
                    s: o,
                    l: e
                 }, u);
                 r.a.component.search.ajax.getData({
                    callback: dt,
                    url: r.a.component.search.url.createMultiFacetUrl(f, [i], t, s)
                 })
              }
              var f, e, o, l, s, c = this.getFacetRequestData(n),
                 i = c.data;
              for (var t in i) i.hasOwnProperty(t) && (e = this.getSearchResultsLanguage(t), o = this.getSearchResultsScope(t), l = this.getSearchResultsModelBySignature(t), s = l.get("dataProperties").itemid, i[t].normalFiltering.length > 0 && (f = h.extend({
                 endpoint: c.endpoint,
                 s: o,
                 l: e
              }, n), r.a.component.search.ajax.getData({
                 callback: kt,
                 url: r.a.component.search.url.createMultiFacetUrl(f, i[t].normalFiltering, t, s)
              })), i[t].partialFiltering.length > 0 && u.a.each(i[t].partialFiltering, a))
           },
           getFacetRequestData: gt,
           initRequestObject: ni,
           getSearchResultsLanguage: ti,
           getSearchResultsScope: ii,
           getSearchResultsModelBySignature: ri
        })));
        r.a.component.search.facet.dropdown = function (n) {
           function h(t) {
              new s({
                 el: n(t),
                 model: new o
              })
           }
           var t, i = {},
              f = !1,
              o = r.a.component.search.baseModel.extend({
                 defaults: {
                    template: '<% _.forEach(results, function(result){%><li class="custom-dropdown__item <%= result.Count ? "" : "custom-dropdown__item--disabled" %>" data-facetName="<%= result.Name !== "" ? result.Name : "_empty_" %>" ><%= result.Name !== "" ? result.Name : emptyText %><\/li><%}); %>',
                    templateSelect: '<% _.forEach(results, function(result){%><option data-facetName="<%= result.Name !== "" ? result.Name : "_empty_" %>" <%= result.Selected !== undefined ? "selected" : "" %> <%= result.Count ? "" : "disabled" %> ><%= result.Name !== "" ? result.Name : emptyText %><\/option><%}); %>',
                    indicator: "<span class='component c-loadingindicator js-loadingindicator'><span class='c-loadingindicator__animation'><\/span><\/div>",
                    dataProperties: {},
                    blockNextRequest: !1,
                    resultData: {},
                    optionSelected: !1,
                    sig: []
                 },
                 initialize: ui,
                 toggleBlockRequests: fi,
                 processData: function (n) {
                    function y(n) {
                       return n.Key.toLowerCase() === v.toLowerCase()
                    }
                    for (var f, r, i, h = t.parseHashParameters(window.location.hash), s = this.get("sig"), c = this.get("dataProperties"), l = c.searchResultsSignature.split(","), a = c.sortOrder, v = c.f, o = 0; o < l.length; o++)
                       if (n.Facets.length > 0 && n.Signature === l[o] || "" === n.Signature || null === n.Signature) {
                          if (void 0 === (r = u.a.find(n.Facets, y))) return;
                          for (i = 0; i < s.length; i++) e.a.isEmptyObject(u.a.pick(h, s[i])) || "" !== h[s[i]] && (0 === (f = u.a.where(r.Values, {
                             Name: h[s[i]]
                          })).length && (f = u.a.where(r.Values, {
                             Name: ""
                          })), f.length > 0 && (f[0].Selected = !0, this.optionSelected = !0));
                          this.sortFacetArray(a, r.Values);
                          this.set({
                             resultData: r.Values
                          })
                       }
                 },
                 updateComponent: ei
              }),
              s = r.a.component.search.baseView.extend({
                 initialize: oi,
                 events: {
                    "change .facet-dropdown-select": "updateFacet",
                    "click .bottom-remove-filter, .clear-filter": "clearFilter"
                 },
                 updateFacet: function (n) {
                    var r = n.currentTarget,
                       u = this.$el.find(".facet-dropdown-select").find("option:selected").data("facetname"),
                       i = decodeURIComponent(r.dataset.facetname || u),
                       f = this.model.get("sig");
                    "" === i ? this.model.set({
                       optionSelected: !1
                    }) : this.model.set({
                       optionSelected: !0
                    });
                    t.updateHash(this.updateSignaturesHash(f, i, {}))
                 },
                 render: function () {
                    var r = this.model.get("resultData"),
                       i = this.$el.find(".facet-dropdown-select"),
                       f = this.model.get("dataProperties").emptyValueText,
                       e = this.$el.find(".facet-heading > span"),
                       o = i.find("option:first"),
                       t = n("<option />"),
                       s = u.a.template(this.model.get("templateSelect"))({
                          results: r,
                          emptyText: f
                       });
                    t.text(o.text());
                    t.data("facetname", "");
                    this.model.get("optionSelected") && e.addClass("has-active-facet");
                    i.empty().append(t).append(s)
                 },
                 clearFilter: function () {
                    var n = this.$el.find(".facet-dropdown-select"),
                       i = this.$el.find(".facet-heading > span"),
                       r = this.model.get("sig");
                    t.updateHash(this.updateSignaturesHash(r, "", {}));
                    this.model.set({
                       optionSelected: !1
                    });
                    i.removeClass("has-active-facet");
                    n.val(n.find("option:first").val())
                 }
              });
           return i.init = function () {
              if (!n("body").hasClass("on-page-editor") && !f) {
                 t = r.a.component.search.query;
                 r.a.component.search.url;
                 var i = n(".facet-dropdown");
                 u.a.each(i, h);
                 f = !0
              }
           }, i.getFacetDataRequestInfo = function () {
              var i = n(".facet-dropdown"),
                 t = [];
              return u.a.each(i, function (i) {
                 for (var u = n(i).data().properties, f = u.searchResultsSignature.split(","), r = 0; r < f.length; r++) t.push({
                    signature: null === f[r] ? "" : f[r],
                    facetName: u.f,
                    endpoint: u.endpoint,
                    filterWithoutMe: !0
                 })
              }), t
           }, i
        }(e.a, document);
        r.a.register("facetDropdown", r.a.component.search.facet.dropdown);
        r.a.component.search.facet.managedrange = function (n) {
           function h(t) {
              var i = new o;
              new s({
                 el: n(t),
                 model: i
              }).render()
           }
           var t, i = {},
              e = !1,
              o = f.a.Model.extend({
                 defaults: {
                    dataProperties: {},
                    sig: []
                 }
              }),
              s = r.a.component.search.baseView.extend({
                 initialize: si,
                 events: {
                    "click .faceLink": "linkClick",
                    "click .facetRadio": "radioClick",
                    "click .facetCheckbox": "checkBoxClick",
                    "click .filterButton": "filter",
                    "click .bottom-remove-filter, .clear-filter": "clearFilter",
                    "keyup .manualRangeMin, .manualRangeMax": "configureKeyCodes"
                 },
                 configureKeyCodes: hi,
                 updateHash: function (i) {
                    var f = this.model.get("sig"),
                       r = [];
                    u.a.each(i, function (t) {
                       var i = n(t);
                       r.push("".concat(i.data().minvalue, "|").concat(i.data().maxvalue))
                    });
                    this.$el.find(".manualRangeMin").val("");
                    this.$el.find(".manualRangeMax").val("");
                    t.updateHash(this.updateSignaturesHash(f, r.join(","), {}))
                 },
                 render: function () {
                    function h(t) {
                       var u, e, f = t.split("|"),
                          i = f[0],
                          r = f[1];
                       "" === i && "" === r || ("" !== i && "" !== r ? u = ".facetCheckbox[data-minvalue='".concat(i, "'][data-maxvalue='").concat(r, "'], .facetRadio[data-minvalue='").concat(i, "'][data-maxvalue='").concat(r, "']") : "" !== i && "" === r ? u = ".facetCheckbox[data-minvalue='".concat(i, "'], .facetRadio[data-minvalue='").concat(i, "']") : "" === i && "" !== r && (u = ".facetCheckbox[data-maxvalue='".concat(r, "'], .facetRadio[data-maxvalue='").concat(r, "']")), (e = n(u)).length > 0 ? e.attr("checked", "checked") : (o.$el.find(".manualRangeMin").val(f[0]), o.$el.find(".manualRangeMax").val(f[1])))
                    }
                    for (var e, f = t.parseHashParameters(window.location.hash), s = this.$el.find(".facet-heading > span"), r = this.model.get("sig"), o = this, i = 0; i < r.length; i++) f.hasOwnProperty(r[i]) && "" !== f[r[i]] && (e = f[r[i]].split(","), s.addClass("has-active-facet"), u.a.each(e, h))
                 },
                 radioClick: function (t) {
                    var i = n(t.currentTarget);
                    n(".facetRadio").attr("name", i.attr("name"));
                    this.updateHash(i)
                 },
                 checkBoxClick: function (t) {
                    n(t.currentTarget).is(":checked") && (this.$el.find(".manualRangeMin").val(""), this.$el.find(".manualRangeMax").val(""))
                 },
                 linkClick: function (i) {
                    var r = n(i.currentTarget),
                       u = "".concat(r.data().minvalue, "|").concat(r.data().maxvalue);
                    this.$el.find(".facetCheckbox[data-shortid!=".concat(r.data().shortid, "]")).removeAttr("checked");
                    this.$el.find(".facetCheckbox[data-shortid=".concat(r.data().shortid, "]")).attr("checked", "checked");
                    this.$el.find(".manualRangeMin").val("");
                    this.$el.find(".manualRangeMax").val("");
                    t.updateHash(this.updateSignaturesHash(sig, u, {}))
                 },
                 filter: function () {
                    var n, i, o = this.model.get("dataProperties").multipleSelection,
                       f = this.$el.find(".facetCheckbox:checked"),
                       e = this.$el.find(".facetRadio:checked"),
                       r = this.$el.find(".manualRangeMin"),
                       u = this.$el.find(".manualRangeMax"),
                       s = this.model.get("sig");
                    n = r.length > 0 && "" !== r.val() ? r.val() : "";
                    i = u.length > 0 && "" !== u.val() ? u.val() : "";
                    "" !== n || "" !== i ? (this.$el.find(".facetRadio").removeAttr("checked"), this.$el.find(".facetCheckbox").removeAttr("checked"), t.updateHash(this.updateSignaturesHash(s, "".concat(n, "|").concat(i), {}))) : (f.length > 0 || e.length > 0) && (o ? this.updateHash(f) : this.radioClick({
                       currentTarget: e
                    }))
                 },
                 clearFilter: function () {
                    for (var n, u = this.$el.find(".manualRangeMin"), f = this.$el.find(".manualRangeMax"), e = this.model.get("dataProperties"), h = this.$el.find(".facet-heading > span"), r = t.parseHashParameters(window.location.hash), o = this.model.get("sig"), s = !1, i = 0; i < o.length; i++) void 0 !== r[n = o[i]] && "" !== r[n] && (delete e[n], r[n] = "", s = !0);
                    s && (t.updateHash(r), this.model.set({
                       dataProperties: e
                    }), this.$el.find(".facetCheckbox").removeAttr("checked"), this.$el.find(".facetRadio").removeAttr("checked"), h.removeClass("has-active-facet"), u.length > 0 && u.val(u.data().defaultvalue), f.length > 0 && f.val(f.data().defaultvalue))
                 },
                 textBoxChange: function () {
                    var n = this.$el.find(".manualRangeMin"),
                       i = this.$el.find(".manualRangeMax"),
                       r = n.length > 0 && "" !== n.val() ? n.val() : "",
                       u = i.length > 0 && "" !== i.val() ? i.val() : "",
                       f = this.model.get("sig");
                    this.$el.find(".facetRadio").removeAttr("checked");
                    this.$el.find(".facetCheckbox").removeAttr("checked");
                    "" !== r || "" !== u ? t.updateHash(this.updateSignaturesHash(f, "".concat(r, "|").concat(u), {})) : t.updateHash(this.updateSignaturesHash(f, "", {}))
                 },
                 updateComponent: ci
              });
           return i.init = function () {
              if (!n("body").hasClass("on-page-editor") && !e) {
                 t = r.a.component.search.query;
                 r.a.component.search.ajax;
                 r.a.component.search.url;
                 var i = n(".facet-managed-range");
                 u.a.each(i, h);
                 e = !0
              }
           }, i
        }(e.a, document);
        r.a.register("managedrange", r.a.component.search.facet.managedrange);
        r.a.component.search.facet.rangeslider = function (n) {
           function h(t) {
              var i = new o;
              new s({
                 el: n(t),
                 model: i
              })
           }
           var t, i = {},
              o = f.a.Model.extend({
                 defaults: {
                    dataProperties: {},
                    sig: [],
                    timeStamp: ""
                 }
              }),
              s = r.a.component.search.baseView.extend({
                 initialize: li,
                 events: {
                    "click .bottom-remove-filter, .clear-filter": "removeFacet",
                    "mouseup .ui-slider-handle": "updateModel"
                 },
                 render: function () {
                    for (var t, i, c = this, o = this.model.get("sig"), v = r.a.component.search.query.parseHashParameters(window.location.hash), l = parseFloat(this.model.get("dataProperties").minRangeValue), a = parseFloat(this.model.get("dataProperties").maxRangeValue), s = parseFloat(this.model.get("dataProperties").changeStep), w = n("<div />").addClass("slider-value"), y = this.$el.find(".facet-heading > span"), p = this.$el.find(".slider"), h, f = 0; f < o.length; f++) e.a.isEmptyObject(u.a.pick(v, o[f])) ? (t = parseFloat(this.model.get("dataProperties").selectedMinValue), i = parseFloat(this.model.get("dataProperties").selectedMaxValue), y.removeClass("has-active-facet")) : (h = u.a.values(u.a.pick(v, o[f]))[0], h && (t = h.split("|")[0], i = h.split("|")[1], y.addClass("has-active-facet")));
                    isNaN(l) && (l = 0);
                    isNaN(a) && (a = 0);
                    (isNaN(s) || 0 === s) && (s = 1);
                    isNaN(t) && (t = 0);
                    isNaN(i) && (i = 0);
                    p.slider({
                       range: !0,
                       min: l,
                       max: a,
                       step: s,
                       values: [t, i],
                       create: function () {
                          n(".slider-value").remove();
                          p.after(w);
                          0 === t && 0 === i || c.updateText(t, i)
                       },
                       slide: function (n, t) {
                          c.updateModel(c.updateSignaturesHash(o, t.values[0] + "|" + t.values[1], {}))
                       }
                    })
                 },
                 removeFacet: function () {
                    var r = this.$el,
                       u = this.model.get("sig"),
                       f = this.$el.find(".slider"),
                       e = r.find(".facet-heading > span"),
                       n = this.model.get("dataProperties"),
                       i = t.parseHashParameters(window.location.hash);
                    e.removeClass("has-active-facet");
                    n.selectedMinValue = n.minRangeValue;
                    n.selectedMaxValue = n.maxRangeValue;
                    this.updateText(n.minRangeValue, n.maxRangeValue);
                    f.slider("values", [n.minRangeValue, n.maxRangeValue]);
                    this.model.set({
                       dataProperties: n
                    });
                    i.hasOwnProperty(this.model.get("sig")) && t.updateHash(this.updateSignaturesHash(u, "", i))
                 },
                 updateModel: function (n) {
                    var r, f, e, o, s, i, h = this.model.get("sig");
                    for (n || (n = t.parseHashParameters(window.location.hash)), i = 0; i < h.length; i++)
                       if (r = h[i].toLocaleString(), n.hasOwnProperty(r))
                          if ("" !== (e = u.a.values(u.a.pick(n, r))[0])) {
                             if (o = e.split("|")[0], void 0 === (s = e.split("|")[1]) || void 0 === o) continue;
                             (f = this.model.get("dataProperties")).selectedMinValue = o;
                             f.selectedMaxValue = s;
                             this.model.set("dataProperties", f);
                             this.model.set("timeStamp", (new Date).getTime())
                          } else this.removeFacet()
                 },
                 updateSelectedValue: function () {
                    var r = this.model.get("dataProperties"),
                       n = r.selectedMinValue,
                       i = r.selectedMaxValue,
                       u = this.$el.find(".slider"),
                       f = this.model.get("sig");
                    u.slider("values", [n, i]);
                    this.updateText(n, i);
                    this.$el.find(".facet-heading > span").addClass("has-active-facet");
                    t.updateHash(this.updateSignaturesHash(f, n + "|" + i, {}))
                 },
                 updateText: ai
              });
           return i.init = function () {
              t = r.a.component.search.query;
              r.a.component.search.url;
              var i = n(".facet-range-selector");
              u.a.each(i, h);
              !0
           }, i
        }(e.a, document);
        r.a.register("searchFacetRangeSlider", r.a.component.search.facet.rangeslider);
        r.a.component.search.facet.slider = function (n) {
           function s(t) {
              var i = new e;
              new o({
                 el: n(t),
                 model: i
              })
           }
           var t, i = {},
              e = f.a.Model.extend({
                 defaults: {
                    dataProperties: {},
                    selectedValue: null,
                    sig: [],
                    timeStamp: ""
                 }
              }),
              o = r.a.component.search.baseView.extend({
                 initialize: vi,
                 events: {
                    "click .bottom-remove-filter, .clear-filter": "removeFacet",
                    "mouseup .ui-slider-handle": "updateModel"
                 },
                 render: function () {
                    var h = this,
                       v = this.model.get("sig"),
                       i = this.model.get("dataProperties"),
                       c = t.parseHashParameters(window.location.hash),
                       e = parseFloat(i.minValue),
                       o = parseFloat(i.maxValue),
                       f = u.a.isEmpty(u.a.pick(c, i.f)) ? parseFloat(i.selectedValue) : u.a.values(u.a.pick(c, i.f))[0],
                       s = parseFloat(i.changeStep),
                       l = n("<div />").addClass("slider-value"),
                       a = this.$el.find(".slider");
                    t = r.a.component.search.query;
                    r.a.component.search.url;
                    isNaN(e) && (e = 0);
                    isNaN(o) && (o = 0);
                    isNaN(s) && (s = 1);
                    isNaN(f) && (f = 0);
                    a.slider({
                       min: e,
                       max: o,
                       step: s,
                       value: f,
                       slide: function (n, t) {
                          h.updateModel(h.updateSignaturesHash(v, t.value, {}))
                       }
                    });
                    n(".slider-value").remove();
                    l.html(i.formatingString.replace("{value}", f));
                    a.after(l)
                 },
                 removeFacet: function () {
                    var n = this.$el,
                       u = this.model.get("sig"),
                       f = this.$el.find(".slider"),
                       e = this.$el.find(".slider-value"),
                       o = n.find(".facet-heading > span"),
                       i = this.model.get("dataProperties"),
                       r = n.data("properties"),
                       s = r.f;
                    o.removeClass("has-active-facet");
                    e.html("");
                    f.slider("value", r.minValue);
                    i[s] = "";
                    t.updateHash(this.updateSignaturesHash(u, "", {}));
                    this.model.set({
                       dataProperties: i
                    })
                 },
                 updateModel: function (n) {
                    var f, r, e, i, o = this.model.get("sig");
                    for (n || (n = t.parseHashParameters(window.location.hash)), i = 0; i < o.length; i++) r = o[i].toLowerCase(), n.hasOwnProperty(r) && ("" !== (e = u.a.values(u.a.pick(n, r))[0]) ? ((f = this.model.get("dataProperties")).selectedValue = e, this.model.set("dataProperties", f), this.model.set("timeStamp", (new Date).getTime())) : this.removeFacet())
                 },
                 updateSelectedValue: function () {
                    var i, r = this.model.get("dataProperties"),
                       n = r.selectedValue,
                       u = this.$el.find(".slider-value"),
                       f = this.$el.find(".slider"),
                       e = this.model.get("sig");
                    f.slider("value", n);
                    i = r.formatingString.replace("{value}", n);
                    u.html(i);
                    this.$el.find(".facet-heading > span").addClass("has-active-facet");
                    t.updateHash(this.updateSignaturesHash(e, n, {}))
                 }
              });
           return i.init = function () {
              t = r.a.component.search.query;
              r.a.component.search.url;
              var i = n(".facet-slider");
              u.a.each(i, s);
              !0
           }, i
        }(e.a, document);
        r.a.register("searchFacetSlider", r.a.component.search.facet.slider);
        r.a.component.search.loadMore = function (n) {
           function o(r) {
              new i({
                 el: n(r),
                 model: new t
              })
           }
           var t, i, r = {},
              e = !1;
           return t = f.a.Model.extend({
              defaults: {
                 dataProperties: {},
                 sig: []
              }
           }), i = f.a.View.extend({
              initialize: yi,
              events: {
                 "mousedown input": "loadMore"
              },
              loadMore: pi
           }), r.init = function () {
              if (!n("body").hasClass("on-page-editor") && !e) {
                 var t = n(".load-more");
                 u.a.each(t, o);
                 e = !0
              }
           }, r
        }(e.a, document);
        r.a.register("searchLoadMore", r.a.component.search.loadMore);
        r.a.component.search.locationfilter = function (n) {
           function a() {
              for (var t, n = 0; n < e.length; n++) t = new c({
                 el: e[n],
                 model: new h
              }), v.push(t)
           }
  
           function y(t) {
              var i = n(t),
                 u = i.data("properties");
              e.push(i);
              o || "Location" === u.mode ? a() : s.loadScript(u.key, r.a.component.search.locationfilter.scriptsLoaded);
              i.addClass("initialized")
           }
           var t, h, c, i = {},
              e = [],
              v = [],
              l = !1,
              o = !1,
              s = r.a.connector.mapsConnector;
           return h = f.a.Model.extend({
              defaults: {
                 dataProperties: {},
                 sig: []
              },
              initAutocompleteEngine: function () {
                 var t, n = this;
                 n.get("dataProperties").p > 0 && ((t = new Bloodhound({
                    datumTokenizer: Bloodhound.tokenizers.obj.whitespace("name"),
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    limit: n.get("dataProperties").p,
                    remote: {
                       url: "-",
                       replace: wi,
                       transport: function (t, i, r) {
                          var u = n.get("queryParams");
                          u.text ? s.locationAutocomplete(u, function (n) {
                             for (var u = bi, r = new Array(n.length), t = 0; t <= n.length - 1; t++) r[t] = u(n[t], t, n);
                             i(r)
                          }, function () {
                             r("Could not autocomplete")
                          }) : i([])
                       }
                    }
                 })).initialize(), this.set({
                    searchEngine: t
                 }))
              }
           }), c = r.a.component.search.baseView.extend({
              initialize: di,
              events: {
                 "click .location-search-box-button": "addressLookup",
                 "keypress .location-search-box-input": "searchTextChanges",
                 "keyup .location-search-box-input": "autocomplete"
              },
              addressLookup: gi,
              getAddress: function () {
                 var r, u = this.$el.find(".location-search-box-input.tt-input"),
                    n = 0 !== u.length ? u.val() : this.$el.find(".location-search-box-input").val(),
                    f = t.parseHashParameters(window.location.hash),
                    i = this.model.get("sig");
                 return "" !== n && void 0 !== n || ("" !== (r = f[i.length > 0 && "" !== i[0] ? "".concat(i[0], "_a") : "a"]) && (n = r), void 0 === n && (n = "")), n
              },
              autocomplete: nr,
              searchTextChanges: tr,
              translateUserLocation: function (n) {
                 var r = this,
                    u = this.model.get("dataProperties"),
                    t = void 0 !== n.text ? n.text : n,
                    i = this.$el.find(".location-search-box-input.tt-input"),
                    f = {};
                 "" !== t && (s.addressLookup({
                    text: t
                 }, function (n) {
                    f = r.createHashObject("".concat(n[0], "|").concat(n[1]), "".concat(u.f, ",Ascending"));
                    r.updateHash(f, u)
                 }, function () {
                    console.error("Error while getting '".concat(t, "' location"))
                 }), i.blur(), "" === i.val() && i.val(t))
              },
              setLocation: ir,
              detectLocation: ur,
              updateHash: function (n, i, u) {
                 for (var o, s, e = this.model.get("sig"), h = void 0 !== r.a.component.search ? r.a.component.search.results.searchResultModels : [], l = this.$el.find(".location-search-box-input.tt-input"), c = 0 !== l.length ? l.val() : this.$el.find(".location-search-box-input").val(), f = 0; f < h.length; f++)
                    for (s = 0; s < e.length; s++) o = e[s], h[f].get("dataProperties").sig === o && h[f].set("loadMoreOffset", 0);
                 if (null !== c && "" !== c)
                    for (f = 0; f < e.length; f++) n["" !== (o = e[f]) ? "".concat(o, "_a") : "a"] = c;
                 for (u || t.updateHash(n, i.targetUrl), f = 0; f < e.length; f++) r.a.component.search.vent.trigger("my-location-coordinates-changed", {
                    hashData: {
                       params: n,
                       url: i.targetUrl
                    },
                    sig: e[f],
                    coordinates: n["" !== e[f] ? "".concat(e[f], "_g") : "g"].split("|"),
                    country: u
                 })
              },
              createHashObject: fr
           }), i.init = function () {
              if (!n("body").hasClass("on-page-editor") && !l) {
                 t = r.a.component.search.query;
                 var i = n(".location-filter:not(.initialized)");
                 u.a.each(i, y);
                 l = !0
              }
           }, i.scriptsLoaded = function () {
              o || (o = !0, a())
           }, i
        }(e.a, document);
        r.a.register("locationfilter", r.a.component.search.locationfilter);
        r.a.component.search.pageSelector = function (n, t) {
           function c(t) {
              new h({
                 el: n(t),
                 model: new s
              })
           }
           var i, e = {},
              o = !1,
              s = f.a.Model.extend({
                 defaults: {
                    dataProperties: {},
                    resultsCount: 0,
                    offset: 0,
                    selectedValue: 1,
                    pageSize: 0,
                    repeatRequest: !1,
                    template: "<ul class='page-selector-list'> <li class='page-selector-item-first'><a href='#'><%= data.first %><\/a><\/li><li class='page-selector-item-previous'><a href='#'><%= data.previous %>\n    <span class=\"icon icon-pagination-next\">\n      <span class=\"icon__wrapper\">\n        <svg viewBox=\"0 0 256 256\" role=\"img\">\n          <use xlink:href=\"/-/media/Themes/Kantar/Global/KantarMain/images/sprite.svg#pagination-next\"><\/use>\n        <\/svg>\n      <\/span>\n    <\/span><\/a><\/li><% var beforePage = 0; %><% _.each(data.pages, function(page){ %><% if((beforePage+1) != page.number){ %><li class='hide-mobile'><span class='page-selector-more'>...<\/span><\/li><% } %><% beforePage = page.number; %><% if(data.selectedValue === page.number){ %><% active = 'active'; %><% }else { active = '' } %><li class='<%= page.hideMobile %> <%= active %>'><a class='page-selector-item-link' data-offset='<%= page.offset %>' data-itemNumber='<%= page.number %>' href='#'><%= page.number %><\/a><\/li><% }); %><li class='page-selector-item-next'><a href='#'><%= data.next %>\n    <span class=\"icon icon-pagination-next\">\n      <span class=\"icon__wrapper\">\n        <svg viewBox=\"0 0 256 256\" role=\"img\">\n          <use xlink:href=\"/-/media/Themes/Kantar/Global/KantarMain/images/sprite.svg#pagination-next\"><\/use>\n        <\/svg>\n      <\/span>\n    <\/span><\/a><\/li><li class='page-selector-item-last'><a href='#'><%= data.last %><\/a><\/li><\/ul>",
                    sig: [],
                    timeStamp: (new Date).getTime()
                 }
              }),
              h = r.a.component.search.baseView.extend({
                 initialize: function () {
                    var n = this.$el.data();
                    null === n.properties.searchResultsSignature && (n.properties.searchResultsSignature = "");
                    this.model.set("dataProperties", n);
                    this.model.set("sig", this.translateSignatures(n.properties.searchResultsSignature, "e"));
                    this.model.on("change", this.render, this);
                    r.a.component.search.vent.on("results-loaded", this.handleLoadedData.bind(this));
                    window.location.href.startsWith("file://") && this.model.set({
                       resultsCount: 10,
                       pageSize: 2,
                       selectedValue: 2
                    })
                 },
                 events: {
                    "click .page-selector-item-link": "updateSelectedValue",
                    "click .page-selector-item-first a": "showFirstPage",
                    "click .page-selector-item-last a": "showLastPage",
                    "click .page-selector-item-previous a": "showPrevPage",
                    "click .page-selector-item-next a": "showNextPage"
                 },
                 updateModelAfterSearch: er,
                 updateElementCssClass: or,
                 updateSelectedValue: function (t) {
                    t.preventDefault();
                    t.stopPropagation();
                    var r = this.model.get("sig"),
                       u = n(t.target).data();
                    i.updateHash(this.updateSignaturesHash(r, u.offset, {}));
                    this.scrollToResults()
                 },
                 showFirstPage: function (t) {
                    t.preventDefault();
                    t.stopPropagation();
                    var r = this.model.get("sig");
                    n(t.target).data();
                    i.updateHash(this.updateSignaturesHash(r, 0, {}))
                 },
                 showLastPage: function (n) {
                    n.preventDefault();
                    n.stopPropagation();
                    var t = this.model.get("resultsCount") % this.model.get("pageSize"),
                       r = this.model.get("resultsCount") - (0 === t ? this.model.get("pageSize") : t),
                       u = this.model.get("sig");
                    i.updateHash(this.updateSignaturesHash(u, r, {}))
                 },
                 showNextPage: function (n) {
                    n.preventDefault();
                    n.stopPropagation();
                    var t = this.model.get("offset"),
                       r = this.model.get("sig");
                    t + this.model.get("pageSize") < this.model.get("resultsCount") && (t += this.model.get("pageSize"));
                    i.updateHash(this.updateSignaturesHash(r, t, {}));
                    this.scrollToResults()
                 },
                 showPrevPage: function (t) {
                    t.preventDefault();
                    t.stopPropagation();
                    var r = this.model.get("offset"),
                       u = (n(t.target).data(), this.model.get("sig"));
                    r - this.model.get("pageSize") >= 0 && (r -= this.model.get("pageSize"));
                    i.updateHash(this.updateSignaturesHash(u, r, {}));
                    this.scrollToResults()
                 },
                 render: sr,
                 handleButtonState: hr,
                 handleLoadedData: function (n) {
                    function c() {
                       i.updateHash({
                          e: 0
                       });
                       u = i.parseHashParameters(window.location.hash);
                       r = "" !== n.searchResultsSignature ? n.searchResultsSignature + "_e" : "e";
                       "0" !== h[r] && (u[r] = 0, f.a.history.navigate(s.createFirstPageUrlHash(u), {
                          trigger: !0,
                          replace: !0
                       }))
                    }
                    var e, r, u, t, s = this,
                       o = this.model.get("dataProperties").properties.searchResultsSignature.split(","),
                       h = i.parseHashParameters(window.location.hash);
                    for (void 0 === n.offset && (n.offset = 0), t = 0; t < o.length; t++) encodeURIComponent(o[t]) === n.searchResultsSignature && (n.pageSize > n.dataCount || n.offset > n.dataCount ? (this.updateModelAfterSearch(n, 1), setTimeout(c, 100)) : (e = Math.ceil(n.offset / n.pageSize) + 1, this.updateModelAfterSearch(n, e)))
                 },
                 createFirstPageUrlHash: cr,
                 scrollToResults: function () {
                    var n = t.querySelector(".c-results"),
                       i;
                    n && (i = n.getBoundingClientRect().top + window.pageYOffset - 100, window.scroll({
                       top: i,
                       left: 0,
                       behavior: "smooth"
                    }))
                 }
              });
           return e.init = function () {
              if (!n("body").hasClass("on-page-editor") && !o) {
                 i = r.a.component.search.query;
                 var t = n(".page-selector");
                 u.a.each(t, c);
                 o = !0
              }
           }, e
        }(e.a, document);
        r.a.register("searchPageSelector", r.a.component.search.pageSelector);
        r.a.component.search.pageSize = function (n) {
           function c(t) {
              new h({
                 el: n(t),
                 model: new s
              })
           }
           var i, e, t = {},
              o = !1,
              s = f.a.Model.extend({
                 defaults: {
                    sig: []
                 }
              }),
              h = r.a.component.search.baseView.extend({
                 clicks: 0,
                 initialize: function () {
                    var n = this,
                       i = this.getCurrentPageSize(),
                       t = this.$el.data().properties;
                    this.model.set("sig", this.translateSignatures(t.searchResultsSignature, "p"));
                    this.selectOption(i);
                    void 0 === i && "" !== t.defaultPageSize && n.selectOption(t.defaultPageSize);
                    r.a.component.search.vent.on("hashChanged", function (t) {
                       for (var r = n.model.get("sig"), i = 0; i < r.length; i++) t.hasOwnProperty(r[i]) && n.selectOption(t[r[i]])
                    })
                 },
                 events: {
                    "click select": "updatePageSizeClick",
                    "change select": "updatePageSizeSelect"
                 },
                 getCurrentPageSize: function () {
                    i.parseHashParameters(window.location.hash);
                    for (var t = this.model.get("sig"), n = 0; n < t.length; n++)
                       if (hash.hasOwnProperty(t[n])) return hash[t[n]]
                 },
                 selectOption: lr,
                 updatePageSizeClick: function (t) {
                    if (this.clicks++, 2 === this.clicks) {
                       var i = n(t.target).find("option:selected").val();
                       void 0 !== i && this.updatePageSize(i);
                       this.clicks = 0
                    }
                 },
                 updatePageSize: function (n) {
                    var t = this.model.get("sig");
                    e.updateHash(this.updateSignaturesHash(t, n, {}))
                 },
                 updatePageSizeSelect: ar
              });
           return t.init = function () {
              if (!n("body").hasClass("on-page-editor") && !o) {
                 i = r.a.component.search.query;
                 e = r.a.component.search.parameters;
                 r.a.component.search.results.searchResultModels;
                 var t = n(".page-size");
                 u.a.each(t, c);
                 o = !0
              }
           }, t.getDefaultPageSizes = function () {
              var u, t, i, f, e, r = n(".page-size"),
                 o = [];
              if (r.length > 0) {
                 for (t = 0; t < r.length; t++) f = (u = (e = n(r[t])).data()).properties.searchResultsSignature.split(","), i = u.properties.defaultPageSize, o.push({
                    signatures: f,
                    defaultPageSize: "" !== i ? i : e.find("select option:first-child").val()
                 });
                 return o
              }
              return -1
           }, t
        }(e.a, document);
        r.a.register("searchPageSize", r.a.component.search.pageSize);
        r.a.component.search.parameters = function (n) {
           var i, t = {},
              f = !1,
              e = {};
           return t.init = function () {
              n("body").hasClass("on-page-editor") || f || (i = r.a.component.search.query, r.a.component.search.results.searchResultModels, f = !0)
           }, t.registerDefault = function (n) {
              u.a.each(n, function (t, i) {
                 e[i] = n[i].toString()
              })
           }, t.updateHash = function (n) {
              u.a.each(n, function (t, i) {
                 e[i] === n[i].toString() && (n[i] = "")
              });
              i.updateHash(n)
           }, t
        }(e.a, document);
        r.a.register("searchParameters", r.a.component.search.parameters);
        r.a.component.search.query = (e.a, document, new(f.a.Model.extend({
           defaults: {
              hash: "",
              hashObj: {}
           },
           initialize: vr,
           createHashObj: yr,
           parseHashParameters: wr,
           updateHash: br,
           isSignaturePresentInHash: kr
        })));
        r.a.component.search.radiusFilter = function (n) {
           function h(t) {
              return n(t)
           }
  
           function c(i) {
              t(n(i))
           }
           var t, i, e, o, s = {};
           return i = f.a.Model.extend({
              defaults: {
                 properties: [],
                 selected: {},
                 sig: []
              }
           }), e = r.a.component.search.baseView.extend({
              initialize: function () {
                 var t = u.a.map(this.$el.find("li[data-value][data-title]"), h),
                    n = this.$el.data("properties");
                 u.a.each(t, dr);
                 this.model.set({
                    properties: n,
                    selected: {}
                 });
                 this.model.bind("change", this.render, this);
                 this.model.set("sig", this.translateSignatures(n.searchResultsSignature, n.f));
                 r.a.component.search.vent.on("hashChanged", this.hashChanged.bind(this));
                 this.render()
              },
              events: {
                 "click li": "radiusClick",
                 "click .bottom-remove-filter, .clear-filter": "deselect"
              },
              render: function () {
                 var t;
                 t = this.model.get("selected");
                 this.$el.find(".selected").removeClass("selected");
                 void 0 !== t && t.length ? t.addClass("selected") : (t = this.$el.find("[data-value='-1']")).length && t.length >= 1 && n(t[0]).addClass("selected")
              },
              updateHash: function (n) {
                 var t = this.model.get("sig");
                 n = -1 == n ? "" : n;
                 o.updateHash(this.updateSignaturesHash(t, n, {}))
              },
              radiusClick: function (t) {
                 var i = n(t.currentTarget);
                 this.updateHash(i.data("value"));
                 this.model.set({
                    selected: i
                 })
              },
              deselect: gr,
              hashChanged: function (t) {
                 for (var u, i, f, e = this.model.get("sig"), r = 0; r < e.length; r++) u = e[r].toLowerCase(), t.hasOwnProperty(u) && (i = "" === (i = t[u]) ? -1 : i, (f = this.$el.find("[data-value='".concat(i, "']"))).length && f.length >= 1 ? this.model.set({
                    selected: n(f[0])
                 }) : this.model.set({
                    selected: void 0
                 }))
              }
           }), t = function (n) {
              var t = new i;
              new e({
                 el: n[0],
                 model: t
              });
              n.addClass("initialized")
           }, s.init = function () {
              if (!n("body").hasClass("on-page-editor")) {
                 var t = n(".radius-filter:not(.initialized)");
                 u.a.each(t, c);
                 o = r.a.component.search.query;
                 r.a.component.search.url
              }
           }, s
        }(e.a, document);
        r.a.register("radiusFilter", r.a.component.search.radiusFilter);
        var nu = i(34),
           tu = i(96),
           o = i(1),
           c = i(8),
           s = i(14),
           iu = i(7);
        r.a.component.search.results = function (n, t) {
           function p(n) {
              n.accordion = new nu.default(n);
              i || n.accordion.showPanel(n.accordion.headers[0])
           }
  
           function b(t) {
              var i = new y;
              a.push(i);
              l.push(new w({
                 el: n(t),
                 model: i
              }))
           }
           var e, l = [],
              a = [],
              h = !1,
              i = !1,
              v = t.querySelectorAll(".c-interactive-map").length,
              y = f.a.Model.extend({
                 defaults: {
                    template: "<% if(!results.length){ %><div class='no-results'><%= noResultsText %><\/div> <% }else { %><ul class='search-result-list'> <% _.forEach(results, function(result){ %><li class=\"item\" <% if(result.Offices){%> data-id='<%= result.Id %>' data-country='<%= result.CountryName %>' <%} %><% if(result.Geospatial){%>data-id='<%= result.Id %>' data-longitude='<%= result.Geospatial.Longitude %>' data-latitude='<%= result.Geospatial.Latitude %>' data-distance='<%= result.Geospatial.Distance %> <%= result.Geospatial.Unit %>'<% } %>><%= result.Html %><\/li><% }); %><\/ul><% } %>",
                    templateItems: "<% _.forEach(results, function(result){ %><li class=\"item\" <% if(result.Geospatial){%>data-id='<%= result.Id %>' data-longitude='<%= result.Geospatial.Longitude %>' data-latitude='<%= result.Geospatial.Latitude %>' data-distance='<%= result.Geospatial.Distance %> <%= result.Geospatial.Unit %>'<% } %>><%= result.Html %><\/li><% }); %>",
                    templateSuggested: "<% if(!results.length){ %><div class='no-results'><%= noResultsText %><\/div> <% }else { %><ul class='search-result-list search-result-list__suggested'> <% _.forEach(results, function(result){ %><li class=\"item\" <% if(result.Geospatial){%>data-id='<%= result.Id %>' data-longitude='<%= result.Geospatial.Longitude %>' data-latitude='<%= result.Geospatial.Latitude %>' data-distance='<%= result.Geospatial.Distance %> <%= result.Geospatial.Unit %>'<% } %>><%= result.Html %><\/li><% }); %><\/ul><% } %>",
                    templateItemsSuggested: "<% _.forEach(results, function(result){ %><li class=\"item\" <% if(result.Geospatial){%>data-id='<%= result.Id %>' data-longitude='<%= result.Geospatial.Longitude %>' data-latitude='<%= result.Geospatial.Latitude %>' data-distance='<%= result.Geospatial.Distance %> <%= result.Geospatial.Unit %>'<% } %>><%= result.Html %><\/li><% }); %>",
                    preloaderTemplate: '\n        <div class="js-drawer-container__preloader">\n          <span class="component c-loadingindicator js-loadingindicator">\n            <span class="c-loadingindicator__animation"><\/span>\n          <\/div>\n        <\/div>\n      ',
                    templatePromo: '<div class="item__promo"><%= promoHTML %><\/div>',
                    dataProperties: {},
                    blockNextRequest: !1,
                    noResultsText: "",
                    resultData: {},
                    loadingInProgress: !1,
                    loadingMoreInProgress: !1,
                    resultDataMore: {},
                    loadMoreOffset: 0,
                    loadMore: !1
                 },
                 initialize: function () {
                    var n = e.parseHashParameters(window.location.hash),
                       t = encodeURIComponent(this.get("dataProperties").sig),
                       i = "e_".concat(t);
                    n.hasOwnProperty("e") && "" === t && this.set("loadMoreOffset", parseInt(n.e));
                    n.hasOwnProperty(i) && this.set("loadMoreOffset", parseInt(n[i]));
                    r.a.component.search.vent.on("results-loaded", this.resultsLoaded.bind(this));
                    r.a.component.search.vent.on("results-loading", this.resultsLoading.bind(this))
                 },
                 blockRequests: ru,
                 checkBlockingRequest: uu,
                 getMyOffset: function () {
                    var n = e.parseHashParameters(window.location.hash),
                       t = encodeURIComponent(this.get("dataProperties").sig);
                    return n.hasOwnProperty("e_".concat(t)) ? n["e_".concat(t)] : 0
                 },
                 resultsLoaded: function (n) {
                    encodeURIComponent(this.get("dataProperties").sig) === n.searchResultsSignature && (this.get("loadMore") ? (this.set({
                       resultDataMore: n
                    }), this.set({
                       loadingMoreInProgress: !1
                    }), this.unset("loadMore", {
                       silent: !0
                    })) : (this.set({
                       resultData: n
                    }), this.set({
                       loadingInProgress: !1
                    })), this.blockRequests(!1));
                    var i = t.querySelector(".js-loadingindicator");
                    i && i.remove()
                 },
                 resultsLoading: function (n) {
                    if (this.cid == n) {
                       var i = t.querySelector(".js-results"),
                          r = t.querySelector(".js-loadingindicator");
                       i && !r && i.insertAdjacentHTML("beforeend", this.get("preloaderTemplate"));
                       this.get("loadMore") ? this.set({
                          loadingMoreInProgress: !0
                       }) : this.set({
                          loadingInProgress: !0
                       })
                    }
                 }
              }),
              w = f.a.View.extend({
                 initialize: function () {
                    var i = this,
                       t = this.$el.data(),
                       u = this.$el.find(".no-results").html(),
                       n = this;
                    null === t.properties.sig && (t.properties.sig = "");
                    this.model && this.model.set({
                       dataProperties: t.properties,
                       noResultsText: u
                    });
                    this.model.on("change:loadingInProgress", this.loading, this);
                    this.model.on("change:loadingMoreInProgress", this.loadingMore, this);
                    this.model.on("change:resultData", this.render, this);
                    this.model.on("change:resultDataMore", this.renderPart, this);
                    r.a.component.search.vent.on("add-variant-class", function (t) {
                       var i = n.model.get("dataProperties").sig;
                       t.sig === i && (n.$el.removeClass(n.$el.attr("data-class-variant")), n.$el.attr("data-class-variant", t.classes), n.$el.addClass(t.classes))
                    });
                    r.a.component.search.vent.on("loadMore", function (t) {
                       var i = n.model.get("dataProperties").sig;
                       t.sig === i && r.a.component.search.service.getData({
                          loadMore: "true",
                          p: n.model.get("dataProperties").p,
                          singleRequestMode: i
                       })
                    });
                    r.a.component.search.vent.on("my-location-coordinates-changed", function (t) {
                       if (t.country) {
                          var r = !i.focusedMapCountry || i.focusedMapCountry !== t.country;
                          e.updateHash(t.hashData.params, t.hashData.url, r)
                       }
                       t.sig === n.model.get("dataProperties").sig && n.model.get("loadMore") && n.$el.find(".search-result-list").html("")
                    });
                    this.render()
                 },
                 events: {
                    "click .search-result-list > li": "poiClick"
                 },
                 loading: fu,
                 loadingMore: eu,
                 scrollToDrawer: ou,
                 handleVideoPlayer: su,
                 handleDrawerClick: cu,
                 initializeMapComponents: function () {
                    function u() {
                       n.isDrawerMapCountryActive = !1
                    }
                    var n = this;
                    this.drawerTemplates || (this.drawerTemplates = {});
                    for (var f = function (i) {
                          function w(t) {
                             t.preventDefault();
                             var i = t.target.closest("[data-country]"),
                                u = i.getAttribute("data-country"),
                                f = n.drawerMapCountry !== u;
                             n.isDrawerMapCountryActive && !f || n.handleDrawerClick(r, u, i.getAttribute("data-id"), f)
                          }
                          var r = i.querySelector(".js-drawer-container"),
                             v, h, f;
                          for (r || ((r = t.createElement("div")).classList.add("js-drawer-container"), i.appendChild(r), Object(o.t)(r, "click", function (n) {
                                if (n.target.classList.contains("c-country-detail__close")) {
                                   n.preventDefault();
                                   var t = Object(o.g)(i);
                                   c.b.scrollTo(t.offset);
                                   Object(s.b)(r, {
                                      callback: u
                                   })
                                }
                             })), h = Object(o.a)(".js-drawer-trigger", i), f = 0; f <= h.length - 1; f++) v = h[f], Object(o.t)(v, "click", w);
                          for (var b = p, l = Object(o.a)(".search-result-list", i), e = 0; e <= l.length - 1; e++) b(l[e], e, l);
                          for (var k = function (n) {
                                var t = Object(o.a)(".distance", n)[0],
                                   f = n.dataset.distance,
                                   i, u, e;
                                f && t ? t.innerHTML = f : t && (t.style.display = "none");
                                i = n.querySelector(".drawer-content");
                                u = n.querySelector(".js-drawer-trigger");
                                i && u && (e = i.innerHTML, Object(o.t)(u, "click", function () {
                                   r.innerHTML = e;
                                   var n = Object(o.g)(r);
                                   c.b.scrollTo(n.offset);
                                   Object(s.a)(r)
                                }))
                             }, y = Object(o.a)(".item", i), a = 0; a <= y.length - 1; a++) k(y[a])
                       }, r = Object(o.a)(".c-interactive-map"), i = 0; i <= r.length - 1; i++) f(r[i])
                 },
                 initializeCardScript: au,
                 renderPart: vu,
                 render: function () {
                    var p = this,
                       w = t.querySelector(".c-search-page"),
                       ot = t.querySelector(".c-search-solutions"),
                       b = this.model.get("resultData"),
                       n, e, r, it, f, rt, l, a, y, ut, c, ft, nt, et;
                    if (b.type, i = b.firstRun, n = b.data, this.results = n, v && n && n.length) {
                       var k = n[0].Offices,
                          d = k ? {
                             Id: k[0].Id,
                             Geospatial: n[0].Offices[0]
                          } : n[0],
                          tt = function () {
                             k ? i || (p.focusedMapCountry = n[0].CountryName, p.focusMap({
                                coordinates: n[0].Offices,
                                id: n[0].Id,
                                handleArray: n[0].CountryName
                             })) : p.focusMap({
                                coordinates: i ? n : [d.Geospatial.Latitude, d.Geospatial.Longitude],
                                id: d.Id,
                                zoom: i ? null : 17
                             })
                          };
                       "complete" === t.readyState ? tt() : window.onload = tt
                    }
                    if (!window.location.href.startsWith("file://")) {
                       if (void 0 === n && (n = []), e = "", r = n, w) {
                          for (var st = yu, g = [], s = 0; s <= n.length - 1; s++) st(n[s], s, n) && g.push(n[s]);
                          for (r = [], it = pu, f = 0; f <= n.length - 1; f++) it(n[f], f, n) && r.push(n[f]);
                          (e = u.a.template(this.model.get("templateSuggested"))({
                             results: g,
                             noResultsText: this.model.get("noResultsText")
                          }), g.length > 0) && (rt = this.model.get("dataProperties").featuredResultsLabel, e = "<h3 class='c-results c-results__version'>\n            ".concat(rt, "\n          <\/h3>") + e)
                       }
                       a = this.model.get("resultData").offset;
                       "0" == a ? l = 0 : "10" === a ? l = 1 : "20" === a && (l = 2);
                       y = Object(o.a)("#featured-promo-page-".concat(l + 1, " .component-content"))[0];
                       y && "" !== y.innerHTML.trim() && (ut = u.a.template(this.model.get("templatePromo"))({
                          promoHTML: y.innerHTML
                       }), r.splice(5, 0, {
                          Featured: !1,
                          Html: ut
                       }));
                       c = u.a.template(this.model.get("template"))({
                          results: r,
                          noResultsText: this.model.get("noResultsText")
                       });
                       w && r.length > 0 && (ft = this.model.get("dataProperties").otherResultsLabel, c = "<h3 class='c-results c-results__version'>\n            ".concat(ft, "\n          <\/h3>") + c);
                       !n.length && h && (nt = t.querySelector(".js-search-results-data"), (w || ot) && (et = nt ? nt.dataset.empty : "Results not found", c += '<p class="c-search-results__empty" style="display: block;" >'.concat(et, "<\/p>")));
                       this.$el.html("".concat(e).concat(c));
                       this.initializeMapComponents();
                       this.initializeCardScript()
                    }
                 },
                 focusMap: wu,
                 poiClick: function (t) {
                    var u, f = t.currentTarget,
                       e = f.querySelector(".toggle-content"),
                       i, o, r, s;
                    e && (u = e.getAttribute("aria-hidden"));
                    i = n(f);
                    o = n(".js-careers")[0];
                    "true" !== u && (o ? (r = i.data("country"), s = i.data("id"), this.focusedMapCountry = r, this.focusMap({
                       id: s,
                       handleArray: r
                    })) : this.focusMap({
                       coordinates: [i.data("latitude"), i.data("longitude")],
                       id: i.data("id"),
                       zoom: 17
                    }))
                 }
              });
           return {
              init: function () {
                 if (!n("body").hasClass("on-page-editor") && !h) {
                    e = r.a.component.search.query;
                    var t = n(".search-results");
                    u.a.each(t, b);
                    h = !0
                 }
              },
              searchResultViews: l,
              searchResultModels: a
           }
        }(e.a, document);
        r.a.register("searchResults", r.a.component.search.results);
        r.a.component.search.results.count = function (n) {
           function e(t) {
              new r({
                 el: n(t)
              })
           }
           var t = {},
              i = !1,
              r = f.a.View.extend({
                 initialize: bu
              });
           return t.init = function () {
              if (!n("body").hasClass("on-page-editor") && !i) {
                 var t = n(".search-results-count");
                 u.a.each(t, e);
                 i = !0
              }
           }, t
        }(e.a, document);
        r.a.register("searchResultsCount", r.a.component.search.results.count);
        a = i(100);
        XA.component.search.facet.resultsfilter = function (n, t) {
           function e(t) {
              var i = n(t);
              i.hasClass("active") && (i.removeClass("active"), i.find("[type=checkbox]").prop("checked", !1), i.find("[type=checkbox] + label:after").css({
                 background: "#fff"
              }))
           }
  
           function s(t) {
              var i = new f;
              new o({
                 el: n(t),
                 model: i
              })
           }
           var i, r = {},
              u = !1,
              f = XA.component.search.baseModel.extend({
                 defaults: {
                    template: "<div class='facet-search-filter'><% _.forEach(facet.Values, function(value){%><p class='js-filter-item facet-value <%= !value.Count ? 'disabled' : emptyText %> <%= activeDefault && value.Count == -1 ? 'active' : '' %>' data-count='<%= value.Count == -1 ? '*' : value.Count %>' data-facetValue='<%= value.Name !== '' ? value.Count == -1 ? '*' : encodeURI(value.Name) : '_empty_' %>'><span><%= value.Name !== '' ? value.Name : emptyText %> <% if (value.Count !== -1) { %> <span class='facet-count'>(<%= value.Count %>)<\/span> <% } %><\/span><\/p><% }); %><\/div>",
                    templateMulti: "<div class='facet-search-filter'><% _.forEach(facet.Values, function(value){%><p class='facet-value <%= !value.Count ? 'disabled': '' %>' data-count='<%= value.Count %>' data-facetValue='<%= value.Name !== '' ? encodeURI(value.Name) : '_empty_' %>'><input type='checkbox' name='<%= value.Name !== '' ? value.Name : emptyText %>' /><label for='<%= value.Name !== '' ? value.Name : emptyText %>'><%= value.Name !== '' ? value.Name : emptyText %> <span class='facet-count' data-facetCount='<%= value.Count %>'>(<%= value.Count %>)<\/span><\/label><\/p><% }); %><\/div>",
                    templateSelect: "<select class='facet-search-filter'><option value='' selected>Select A - Z<\/option><% _.forEach(facet.Values, function(value){ if(value.Count) { %> <option data-facetValue='<%= value.Name !== '' ? encodeURI(value.Name) : '_empty_' %>'><%= value.Name !== '' ? value.Name : emptyText %> <\/option><% } }); %><\/select>",
                    indicator: "<span class='component c-loadingindicator js-loadingindicator'><span class='c-loadingindicator__animation'><\/span><\/div>",
                    dataProperties: {},
                    blockNextRequest: !1,
                    resultData: {},
                    timeStamp: "",
                    isInit: !0,
                    sig: []
                 },
                 initialize: ku,
                 toggleBlockRequests: du,
                 processData: gu,
                 updateFacetArray: nf,
                 updateComponent: tf
              }),
              o = XA.component.search.baseView.extend({
                 initialize: function () {
                    var n, t, r = this.$el.data(),
                       f = i.parseHashParameters(window.location.hash),
                       u = r.properties,
                       e;
                    for (null === r.properties.searchResultsSignature && (r.properties.searchResultsSignature = ""), n = this.translateSignatures(u.searchResultsSignature, u.f), this.model.set({
                          dataProperties: u
                       }), this.model.set("sig", n), t = 0; t < n.length; t++) jQuery.isEmptyObject(_.pick(f, n[t])) || (e = _.values(_.pick(f, n[t]))[0], this.model.updateFacetArray(e));
                    this.model.on("change", this.render, this)
                 },
                 events: {
                    "click .facet-value": "updateFacet",
                    "click .filterButton": "updateFacet",
                    "click .clear-filter": "removeFacet",
                    "click .bottom-remove-filter > button": "removeFacet"
                 },
                 updateFacet: function (t) {
                    var c, u, e = n(t.currentTarget),
                       f = this.model.get("facetArray"),
                       l = this.model.get("dataProperties"),
                       v = this.$el.find(".facet-heading > span"),
                       y = e.parents(".component-content").find(".facet-search-filter"),
                       a = l.f.toLowerCase(),
                       h = e.data("facetvalue"),
                       r = void 0 !== h ? decodeURIComponent(h) : h,
                       s = this.model.get("sig"),
                       o = {};
                    if ("*" !== r) {
                       if (l.multi) {
                          if (r && (-1 === f.indexOf(r) ? (this.setActiveFacet(a, r), f.push(r)) : (e.removeClass("active"), e.find("[type=checkbox]").prop("checked", !1), (c = f.indexOf(r)) > -1 && f.splice(c, 1), 0 == f.length && v.removeClass("has-active-facet")), this.model.set({
                                facetArray: f
                             })), e[0]) {
                             for (u = 0; u < s.length; u++) o[s[u]] = _.uniq(f, rf).join("||");
                             i.updateHash(o)
                          }
                       } else if (r) {
                          for (u = 0; u < s.length; u++) o[s[u]] = r;
                          y.data("active", o);
                          this.setActiveFacet(a, r);
                          i.updateHash(o)
                       }
                    } else this.removeFacet(t)
                 },
                 removeFacet: function (n) {
                    n.preventDefault();
                    var t = this.$el,
                       r = t.find(".facet-heading > span"),
                       u = t.find(".facet-value"),
                       f = this.model.get("sig");
                    i.updateHash(this.updateSignaturesHash(f, "", {}));
                    r.removeClass("has-active-facet");
                    _.each(u, e);
                    this.model.set({
                       facetArray: []
                    })
                 },
                 render: function () {
                    function wt(t) {
                       return n.removeFacet(t)
                    }
                    var l, g, nt, v, lt = this,
                       n = this,
                       y = this.model.get("resultData"),
                       tt = this.$el.find(".facet-heading > span"),
                       at = this.model.get("dataProperties").f.split("|"),
                       it = this.model.get("dataProperties").emptyValueText,
                       rt = this.model.get("dataProperties").highlightThreshold,
                       ut = i.parseHashParameters(window.location.hash),
                       p = this.model.get("sig"),
                       ft = !0,
                       et = this.model.get("dataProperties").multi,
                       ot, w, b, k, h, r, st, u, ht, f, d, e, o, ct, s;
                    if (!window.location.href.startsWith("file://")) {
                       for ((!1 === et && 0 !== this.model.get("facetArray").length && (ft = !1), void 0 !== y) && (!0 === et ? l = _.template(n.model.get("templateMulti")) : (l = _.template(n.model.get("template")), v = _.template(n.model.get("templateSelect"))), nt = l({
                             facet: y,
                             emptyText: it,
                             activeDefault: ft
                          }), v && (ot = v({
                             facet: y,
                             emptyText: it
                          }), n.$el.find(".c-letters__select").html(ot), n.$el.find(".c-letters__select select").on("change", function (t) {
                             n.$el.find('.c-letters__items .facet-search-filter [data-facetvalue="' + t.target.value + '"]').click()
                          }))), n.$el.find(".contentContainer").html(nt), k = this.$el.find(".c-filter__list .facet-value"), h = 0; h <= k.length - 1; h++) w = k[h], b = void 0, b = w.dataset.facetvalue.split("%20").join(" "), lt.model.get("facetArray").indexOf(decodeURI(b)) > -1 && w.classList.add("active");
                       if (t.querySelector(".c-search-page")) {
                          r = t.querySelectorAll(".js-filter-item");
  
                          function vt(n) {
                             for (var i = uf, t = 0; t <= r.length - 1; t++) i(r[t], t, r);
                             n.currentTarget.classList.add("active")
                          }
                          if (r)
                             for (st = function (n) {
                                   n.addEventListener("click", vt)
                                }, u = 0; u <= r.length - 1; u++) st(r[u], u, r)
                       }
                       var c = t.querySelectorAll(".js-filter-reset"),
                          yt = t.querySelector(".c-search-page"),
                          pt = t.querySelector(".c-inspiration-search");
                       if ((yt || pt) && c && window.innerWidth > 1080)
                          for (ht = function (n) {
                                return n.addEventListener("click", wt)
                             }, f = 0; f <= c.length - 1; f++) ht(c[f], f, c);
                       else n.$el.find(".js-filter-reset").on("click", function (t) {
                          return n.removeFacet(t)
                       });
                       if ((_.each(at, function (t) {
                             var i, r;
                             for (g = t.toLowerCase(), i = 0; i < p.length; i++)
                                if (!jQuery.isEmptyObject(_.pick(ut, p)) && (r = _.values(_.pick(ut, p))[0], r)) return void n.setActiveFacet(g, r)
                          }), rt && this.handleThreshold(rt), 0 === this.model.get("facetArray").length ? tt.removeClass("has-active-facet") : tt.addClass("has-active-facet"), t.querySelector(".c-search-page") && this.model.get("isInit")) && (d = t.querySelector('.sort-results-group input[selected="selected"]'), d && (d.parentNode.classList.add("active"), this.model.set("isInit", !1))), e = t.querySelectorAll(".js-filter-count"), o = [], e.length)
                          for (ct = function (n) {
                                o.push(new a.a(n));
                                for (var i = ff, t = 0; t <= o.length - 1; t++) i(o[t], t, o)
                             }, s = 0; s <= e.length - 1; s++) ct(e[s], s, e)
                    }
                 },
                 setActiveFacet: function (t, i) {
                    var r, u, o = this.model.get("dataProperties"),
                       s = this.$el.find("p[data-facetvalue]"),
                       h = this.$el.find(".facet-heading > span"),
                       c = this;
                    i = i.replace(/ /g, "%20");
                    this.$el.find('.c-letters__items p[data-facetvalue="' + i + '"]').addClass("active");
                    this.$el.find('.c-filter__options p[data-facetvalue="' + i + '"]').addClass("active");
                    this.$el.find('.c-letters__select select [data-facetvalue="' + i + '"]').attr("selected", "selected");
                    i = i.toString().toLowerCase();
                    r = [];
                    for (var e = this.$el.find("[data-facetvalue]"), l = function (t) {
                          if (n(t).attr("data-facetvalue")) return n(t).attr("data-facetvalue").toLowerCase() === i
                       }, f = 0; f <= e.length - 1; f++) l(e[f]) && r.push(e[f]);
                    null != i && ((u = i.split("||")).length > 1 && (o.multi = !0), o.multi ? _.each(s, function (t) {
                       function s(t) {
                          return !!n(t).attr("data-facetvalue") && decodeURIComponent(n(t).attr("data-facetvalue").toLowerCase()) === u[f]
                       }
                       var f, o;
                       if (u.length > 1)
                          for (f = 0, o = u.length; f < o; f++) {
                             r = [];
                             for (var e = c.$el.find("[data-facetvalue]"), h = s, i = 0; i <= e.length - 1; i++) h(e[i], i, e) && r.push(e[i]);
                             t === r[0] && (n(t).addClass("active"), n(t).find("[type=checkbox]").prop("checked", !0))
                          }
                       t === r[0] && (n(t).addClass("active"), n(t).find("[type=checkbox]").prop("checked", !0))
                    }) : _.each(s, function (t) {
                       t !== r[0] ? (n(t).removeClass("active"), n(t).find("[type=checkbox]").prop("checked", !1), n(t).find("[type=checkbox] + label:after").css({
                          background: "#fff"
                       })) : n(t).addClass("active")
                    }), h.addClass("has-active-facet"))
                 },
                 handleThreshold: function (t) {
                    var i = this.$el.find(".facet-search-filter").children("p");
                    _.each(i, function (i) {
                       var r = n(i).find(".facet-count");
                       r.data("facetcount") > t && r.addClass("highlighted")
                    })
                 }
              });
           return r.init = function () {
              if (!n("body").hasClass("on-page-editor") && !u) {
                 i = XA.component.search.query;
                 XA.component.search.ajax;
                 XA.component.search.url;
                 var t = n(".facet-single-selection-list");
                 _.each(t, s);
                 u = !0
              }
           }, r.getFacetDataRequestInfo = function () {
              var i = n(".facet-single-selection-list"),
                 t = [];
              return _.each(i, function (i) {
                 for (var u = n(i).data().properties, f = u.searchResultsSignature.split(","), r = 0; r < f.length; r++) t.push({
                    signature: null === f[r] ? "" : f[r],
                    facetName: u.f,
                    endpoint: u.endpoint,
                    s: u.s,
                    filterWithoutMe: !u.collapseOnSelection
                 })
              }), t
           }, r
        }(jQuery, document);
        XA.register("facetResultsFilter", XA.component.search.facet.resultsfilter);
        r.a.component.search.sort = function (n) {
           function h(t) {
              var i = new o;
              new s({
                 el: n(t),
                 model: i
              })
           }
           var t, i = {},
              e = !1,
              o = f.a.Model.extend({
                 defaults: {
                    updateOrder: !1,
                    sig: []
                 }
              }),
              s = r.a.component.search.baseView.extend({
                 initialize: ef,
                 events: {
                    "click .sort-results-group input": "sortSearchResultsLink",
                    "change select": "sortSearchResultsSelect"
                 },
                 sortSearchResultsLink: function (t) {
                    t.preventDefault();
                    this.sortSearchResults(n(t.currentTarget))
                 },
                 sortSearchResultsSelect: function (t) {
                    this.sortSearchResults(n(t.currentTarget[t.currentTarget.options.selectedIndex]))
                 },
                 sortSearchResults: function (n) {
                    var i = n.data(),
                       r = this.model.get("sig"),
                       u = "".concat(i.facet, ",").concat(i.direction);
                    "" !== i.direction ? t.updateHash(this.updateSignaturesHash(r, u, {})) : t.updateHash(this.updateSignaturesHash(r, "", {}))
                 },
                 updateComponent: of
              });
           return i.init = function () {
              if (!n("body").hasClass("on-page-editor") && !e) {
                 r.a.component.search.query;
                 t = r.a.component.search.parameters;
                 var i = n(".sort-results");
                 u.a.each(i, h);
                 e = !0
              }
           }, i.getFirstSortingOption = function (t) {
              for (var u, f, r, e = n(".sort-results"), i = 0; i < e.length; i++)
                 if (void 0 !== t)
                    for (f = n(e[i]).data().properties.sig.split(","), r = 0; r < f.length; r++)
                       if (f[r] === t && "" !== (u = n(e[i]).find("[data-facet][data-direction]").data()).direction) return "".concat(u.facet, ",").concat(u.direction);
              return -1
           }, i
        }(e.a, document);
        r.a.register("searchSort", r.a.component.search.sort);
        r.a.component.search.url = function (n) {
           var h = n('[data-class-variant="js-careers"]'),
              o = n(".c-interactive-map .location-filter"),
              t = o.length ? o.data().properties : null,
              s = !1,
              i = !1,
              c = sf;
           return new(f.a.Model.extend({
              initialize: function () {
                 var n = this;
                 r.a.component.search.vent.on("checkUrlLocationAction", function (i) {
                    n.handleLocationCheck() && (i(t.countryName), s = !0)
                 })
              },
              handleLocationCheck: function () {
                 var n = r.a.component.search.query.get("hashObj");
                 return !(!(t && t.countryName && e.a.isEmptyObject(n)) || s)
              },
              createSearchUrl: function (n, i) {
                 var u = !1,
                    f = "",
                    r = this.setEndpoint(n.endpoint);
                 return r += n.l ? "&l=" + n.l : "", r += n.s ? "&s=" + n.s : "", r += n.itemid ? "&itemid=" + n.itemid : "", h.length && (r += "&c=1", n["".concat(i, "_g")] || (n["".concat(i, "_g")] = "1", n["".concat(i, "_p")] = 1e3, u = !0), f = "careers"), this.handleLocationCheck() && (r += "&g=1", r += "&parentName=".concat(t.parentName), n["".concat(i, "_g")] || (u = !0), f = "locations"), r += this.getFacetParams(n, i), {
                    url: r = this.fixUrl(r),
                    firstRun: u,
                    type: f
                 }
              },
              createRedirectSearchUrl: function (t, i, f, e) {
                 var h, c, o, l, a = r.a.component.search.query.get("hashObj"),
                    s = {},
                    v = {},
                    y = 0;
                 if ("" !== f)
                    for (o in a) h = o.substring(o.indexOf("_") + 1), (c = o.substr(0, o.indexOf("_"))) === f && (v[o] = a[o]);
                 else v = a;
                 if (i = n.extend({}, v, i), "" !== e)
                    for (o in i) h = o.substring(o.indexOf("_") + 1), (c = o.substr(0, o.indexOf("_"))) === f ? s["".concat(e, "_").concat(h)] = i[o] : c === e && (s[o] = i[o]);
                 else s = i;
                 return l = this.setEndpoint("".concat(t, "#")), u.a.each(s, function (n, t) {
                    l += (0 === y ? "" : "&") + t + "=" + n;
                    y++
                 }), l
              },
              createPredictiveSearchUrl: hf,
              createFacetUrl: cf,
              createMultiFacetUrl: lf,
              clearUrlParams: af,
              getFacetParams: function (n, t) {
                 var r, u = "",
                    e = ["endpoint", "l", "s", "e", "f", "sig", "itemid"],
                    f = ["g", "o", "q", "p", "e", "v"];
                 for (var i in n.hasOwnProperty("sig") && (u += "&sig=" + encodeURIComponent(n.sig)), n) - 1 === e.indexOf(i) && i && n[i] && (r = i.substring(i.indexOf("_") + 1), t === i.substr(0, i.indexOf("_")) && -1 === f.indexOf(r) && (u += "&" + r + "=" + encodeURIComponent(c(n[i]))));
                 return this.getSpecialParams(n, t, f, u)
              },
              getSpecialParams: function (n, t, r, u) {
                 var f, o, e, s;
                 for (f in -1 !== u.indexOf("q=") && (i = !0), n) e = f.substring(f.indexOf("_") + 1), s = f.substr(0, f.indexOf("_")), -1 !== r.indexOf(e) && (o = void 0 !== n[f] ? n[f] : "", t === s && (u += "&" + e + "=" + encodeURIComponent(o), "q" !== f || i || (i = !0)));
                 return u
              },
              createGetPoiContentUrl: vf,
              createGetGeoPoiContentUrl: yf,
              createSiteUrl: pf,
              setEndpoint: wf,
              fixUrl: bf
           }))
        }(e.a, document);
        r.a.component.search.variantFilter = function (n) {
           function l(t) {
              new c({
                 el: n(t),
                 model: new h
              })
           }
           var i, o, e = {},
              t = [],
              s = !1,
              h = (t = {}, f.a.Model.extend({
                 defaults: {
                    dataProperties: {},
                    sig: []
                 }
              })),
              c = r.a.component.search.baseView.extend({
                 initialize: function () {
                    var n, f = i.parseHashParameters(window.location.hash),
                       e = this.$el.data(),
                       u = this.translateSignatures(e.properties.searchResultsSignature, "v"),
                       o = this;
                    for (null === e.properties.searchResultsSignature && (e.properties.searchResultsSignature = ""), this.model.set({
                          dataProperties: e
                       }), this.model.set("sig", u), n = 0; n < u.length; n++) f.hasOwnProperty(u[n]) && this.selectVariantIcon(f[u[n]]);
                    r.a.component.search.vent.on("results-loaded", function () {
                       function c() {
                          o.triggerAddVariant(t[r][0].cssClass, r);
                          o.selectVariantIcon(0)
                       }
                       var r, s, h = e.properties.searchResultsSignature.split(",");
                       for (f = i.parseHashParameters(window.location.hash), n = 0; n < h.length; n++) r = h[n], f.hasOwnProperty(u[n]) && t.hasOwnProperty(r) ? (s = t[r][f[u[n]]], o.triggerAddVariant(s.cssClass, r), o.selectVariantIcon(f[u[n]])) : t.hasOwnProperty(r) && t[r].hasOwnProperty(0) && setTimeout(c, 100)
                    })
                 },
                 events: {
                    "click div > div": "changeVariant"
                 },
                 changeVariant: function (t) {
                    var i = n(t.currentTarget),
                       r = this.model.get("sig"),
                       u = i.data();
                    this.$el.find(".active-variant").removeClass("active-variant");
                    i.addClass("active-variant");
                    o.updateHash(this.updateSignaturesHash(r, u.variantindex, {}));
                    this.triggerAddVariant(n(t.currentTarget).attr("class"))
                 },
                 triggerAddVariant: kf,
                 selectVariantIcon: df
              });
           return e.init = function () {
              if (!n("body").hasClass("on-page-editor") && !s) {
                 i = r.a.component.search.query;
                 o = r.a.component.search.parameters;
                 var t = n(".variant-selector");
                 u.a.each(t, l);
                 s = !0
              }
           }, e.getVariantMappings = function (i) {
              function s(t) {
                 var i = n(t).data();
                 o[i.variantindex] = {
                    id: i.variant,
                    cssClass: n(t).attr("class")
                 }
              }
              var e, r, f = n(".variant-selector"),
                 o = {};
              if (!t.hasOwnProperty(i))
                 for (r = 0; r < f.length; r++) - 1 !== n(f[r]).data().properties.searchResultsSignature.split(",").indexOf(i) && (e = n(f[r]).find(".variant-option"), u.a.each(e, s), t[i] = o);
              return t.hasOwnProperty(i) ? t[i] : {}
           }, e
        }(e.a, document);
        r.a.register("variantFilter", r.a.component.search.variantFilter);
        r.a.component.search.service = function (n) {
           var e = r.a.component.search.results.searchResultModels,
              o = r.a.component.search.url,
              t = r.a.component.search.query,
              i = r.a.component.search.parameters,
              s = r.a.component.search.ajax;
           return new(f.a.Model.extend({
              defaults: {},
              initialize: gf,
              getData: function (n) {
                 e.length > 0 ? this.getSearchResultsData(n) : this.getEndpointAndSearch(n)
              },
              processData: ie,
              getSearchResultsData: function (i) {
                 var v, a, y, p, h, f, w, c = t.parseHashParameters(window.location.hash),
                    l = this;
                 u.a.each(e, function (u) {
                    function k(n) {
                       n.Signature = null !== n.Signature ? n.Signature : "";
                       r.a.component.search.vent.trigger("results-loaded", {
                          dataCount: n.Count,
                          data: l.processData(n.Results),
                          pageSize: "" !== n.Signature && f.hasOwnProperty("".concat(n.Signature, "_p")) ? f["".concat(n.Signature, "_p")] : f.p,
                          firstRun: e.firstRun,
                          type: e.type,
                          offset: "" !== n.Signature && f.hasOwnProperty("".concat(n.Signature, "_e")) ? f["".concat(n.Signature, "_e")] : f.e,
                          searchResultsSignature: n.Signature,
                          loadMore: u.get("loadMore"),
                          query: c.q
                       })
                    }
                    var b, e;
                    (h = null !== u.get("dataProperties").sig ? encodeURIComponent(u.get("dataProperties").sig) : "", a = "" !== h ? "".concat(h, "_e") : "e", (u.get("dataProperties").autoFireSearch || c && t.isSignaturePresentInHash(c, h)) && (v = u.get("dataProperties").defaultSortOrder, y = u.get("dataProperties").p, p = u.get("dataProperties").v, void 0 === i || !i.hasOwnProperty("singleRequestMode") || i.singleRequestMode == h)) && (((c = l.getDefaultDefaultPageSize(h, y, c)).hasOwnProperty("l") && "" === c.l && (c.l = u.get("dataProperties").l), f = n.extend({}, u.get("dataProperties"), c), (f = n.extend(f, i)).hasOwnProperty("loadMore")) ? (u.set("loadMore", !0), delete f.loadMore, b = u.get("loadMoreOffset") + f.p, u.set("loadMoreOffset", b), f[a] = b) : u.get("loadMoreOffset") && (0 !== f.p && (f.p *= 1 + u.get("loadMoreOffset") / f.p, f[a] = 0, u.set("loadMoreOffset", 0)), delete f.variantChanged), f = l.getSortOrder(h, f, v), f = l.setVariant(h, f, p), e = o.createSearchUrl(f, h), (w = e.url) && (clearTimeout(u.waitTimeout), u.waitTimeout = setTimeout(function () {
                       u.checkBlockingRequest() || (u.blockRequests(!0), r.a.component.search.vent.trigger("results-loading", u.cid), s.getData({
                          callback: k,
                          url: w
                       }))
                    }, 50)))
                 })
              },
              getSearchData: function (i) {
                 var e, c, l, f, y = t.parseHashParameters(window.location.hash),
                    u = n.extend({}, y, u, i),
                    a, h;
                 for ((u = this.getDefaultDefaultPageSize("", 0, u)).hasOwnProperty("o") || void 0 === r.a.component.search.sort || -1 !== (c = r.a.component.search.sort.getFirstSortingOption()) && (u.o = c), u.endpoint = r.a.component.map.getSearchEndpoint(), e = r.a.component.map.getSignatures(), a = function () {
                       u.sig = e[f];
                       var n = o.createSearchUrl(u, e[f]);
                       if (!(l = n.url)) return {
                          v: void 0
                       };
                       s.getData({
                          callback: function (t) {
                             t.Signature = null !== t.Signature ? t.Signature : "";
                             r.a.component.search.vent.trigger("results-loaded", {
                                dataCount: t.Count,
                                data: that.processData(t.Results),
                                pageSize: u.p,
                                firstRun: n.firstRun,
                                type: n.type,
                                offset: 0,
                                searchResultsSignature: t.Signature
                             })
                          },
                          url: l
                       })
                    }, f = 0; f < e.length; f++)
                    if (h = a(), "object" === v(h)) return h.v
              },
              getEndpointAndSearch: re,
              getSortOrder: function (n, t, u) {
                 var o = r.a.component.search.sort.getFirstSortingOption(n),
                    e = "" !== n ? "".concat(n, "_o") : "o",
                    f = "",
                    s = {};
                 return -1 !== o ? f = o : "" !== u && (f = u), t.hasOwnProperty(e) || "" === f || (delete t.defaultSortOrder, delete t.o, t[e] = f), s[e] = f, i.registerDefault(s), t
              },
              getDefaultDefaultPageSize: function (n, t, u) {
                 var s, e = r.a.component.search.pageSize.getDefaultPageSizes(),
                    o = "" !== n ? "".concat(n, "_p") : "p",
                    c, f, h;
                 if (!u.hasOwnProperty(o) && void 0 !== r.a.component.search.pageSize && -1 !== e) {
                    for (s = [], c = function (t) {
                          return -1 !== t.signatures.indexOf(n)
                       }, f = 0; f <= e.length - 1; f++) c(e[f], f, e) && s.push(e[f]);
                    s.length > 0 && (u[o] = s[0].defaultPageSize)
                 }
                 return u.hasOwnProperty(o) || 0 == t || (u[o] = t), h = {}, h[o] = t, i.registerDefault(h), u
              },
              setVariant: function (t, u, f) {
                 var o = r.a.component.search.variantFilter.getVariantMappings(t),
                    e = "" !== t ? "".concat(t, "_v") : "v",
                    s;
                 return "" === t && n.isEmptyObject(o) || ("" === t && u.hasOwnProperty(e) && o.hasOwnProperty(u[e]) ? u[e] = o[u[e]].id : "" === t && o.hasOwnProperty(0) ? u[e] = o[0].id : (delete u.v, u[e] = u.hasOwnProperty(e) ? o[u[e]].id : o.hasOwnProperty(0) ? o[0].id : f)), s = {}, s[e] = 0, i.registerDefault(s), u
              }
           }))
        }(e.a, document);
        r.a.component.search.router = function (n) {
           var t, i, u, e = {},
              o = !1;
           return u = f.a.Router.extend({
              routes: {
                 "*params": "checkUrl"
              },
              checkUrl: function () {
                 var n = t.parseHashParameters(window.location.hash);
                 r.a.component.search.service.getData();
                 n ? JSON.stringify(n) !== JSON.stringify(i) && (r.a.component.search.facet.data.filterFacetData(n), i = n, r.a.component.search.vent.trigger("hashChanged", n)) : (r.a.component.search.facet.data.getInitialFacetData(), r.a.component.search.vent.trigger("hashChanged", n))
              }
           }), e.init = function () {
              n("body").hasClass("on-page-editor") || o || (t = r.a.component.search.query, new u, f.a.History.started || f.a.history.start(), o = !0)
           }, e
        }(e.a, document);
        r.a.register("searchRouter", r.a.component.search.router);
        r.a.component.search.facet.daterange = function (n) {
           function l(t) {
              var i = new h;
              new c({
                 el: n(t),
                 model: i
              }).render()
           }
           var t, i, e, o = {},
              s = !1,
              h, c;
           return i = function (t) {
              return null !== t && "" !== t ? n.datepicker.formatDate("yymmdd", t) : ""
           }, e = ue, h = f.a.Model.extend({
              defaults: {
                 dataProperties: {},
                 sig: []
              }
           }), c = r.a.component.search.baseView.extend({
              initialize: fe,
              events: {
                 "change .startDate": "updateFacet",
                 "change .endDate": "updateFacet",
                 "click .bottom-remove-filter, .clear-filter": "clearFilter"
              },
              render: function () {
                 var o, i, h = parseInt(this.model.get("dataProperties").fromDateDefaultOffset),
                    c = parseInt(this.model.get("dataProperties").toDateDefaultOffset),
                    r = this.model.get("dataProperties").fromDateDisplayFormat,
                    u = this.model.get("dataProperties").toDateDisplayFormat,
                    l = this.model.get("dataProperties").fromDateMonthsShown,
                    a = this.model.get("dataProperties").toDateMonthsShown,
                    p = this.model.get("dataProperties").fromDatePastDays,
                    w = this.model.get("dataProperties").toDateFutureDays,
                    b = this.model.get("dataProperties").fromDateVisible,
                    k = this.model.get("dataProperties").toDateVisible,
                    v = this.$el.find(".startDate"),
                    y = this.$el.find(".endDate"),
                    s = t.parseHashParameters(window.location.hash),
                    f = this.model.get("sig"),
                    d = n("html").attr("lang") ? n("html").attr("lang") : "";
                 for (u && (u = u.replace(/yy/g, "y")), r && (r = r.replace(/yy/g, "y")), b && v.datepicker({
                       dateFormat: r,
                       changeMonth: l,
                       changeYear: l,
                       minDate: p ? "" != h ? -1 * h : new Date(1900, 1, 1) : new Date
                    }), k && y.datepicker({
                       dateFormat: u,
                       changeMonth: a,
                       changeYear: a,
                       maxDate: w ? "" != c ? c : new Date(2100, 1, 1) : new Date
                    }), $xa.datepicker.setDefaults($xa.datepicker.regional[d]), i = 0; i < f.length; i++) s.hasOwnProperty(f[i]) && "" != s[f[i]] && (o = s[f[i]].split("|"), v.datepicker("setDate", e(o[0])), y.datepicker("setDate", e(o[1])))
              },
              updateFacet: function () {
                 var u = this.$el.find(".facet-heading > span"),
                    n = this.$el.find(".startDate"),
                    r = this.$el.find(".endDate"),
                    f = n.length > 0 ? n.datepicker("getDate") : null,
                    e = r.length > 0 ? r.datepicker("getDate") : null,
                    o = this.model.get("sig");
                 t.updateHash(this.updateSignaturesHash(o, "".concat(i(f), "|").concat(i(e)), {}));
                 u.addClass("has-active-facet")
              },
              clearFilter: function () {
                 var i, n, f = this.model.get("dataProperties"),
                    o = this.$el.find(".facet-heading > span"),
                    r = t.parseHashParameters(window.location.hash),
                    u = this.model.get("sig"),
                    e = !1;
                 for (o.removeClass("has-active-facet"), n = 0; n < u.length; n++) void 0 !== r[i = u[n]] && "" !== r[i] && (delete f[i], e = !0);
                 e && (t.updateHash(this.updateSignaturesHash(u, "", r)), this.model.set({
                    dataProperties: f
                 }), this.$el.find(".startDate").val(""), this.$el.find(".endDate").val(""))
              },
              updateComponent: ee,
              handleDate: function (n, t) {
                 var r = this.$el.find(".facet-heading > span");
                 0 !== n.length && i(n.datepicker("getDate")) !== t ? (n.datepicker("setDate", e(t)), r.addClass("has-active-facet")) : "" === t && n.datepicker("setDate", null)
              }
           }), o.init = function () {
              if (!n("body").hasClass("on-page-editor") && !s) {
                 t = r.a.component.search.query;
                 r.a.component.search.url;
                 var i = n(".facet-date-range");
                 u.a.each(i, l);
                 s = !0
              }
           }, o
        }(e.a, document);
        r.a.register("facetDateRange", r.a.component.search.facet.daterange)
     },
     27: function (n) {
        var t = function () {
           return this
        }();
        try {
           t = t || new Function("return this")()
        } catch (n) {
           "object" == typeof window && (t = window)
        }
        n.exports = t
     },
     34: function (n, t, i) {
        "use strict";
  
        function s(n, t) {
           if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
  
        function f(n, t) {
           for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
        }
  
        function e(n, t, i) {
           return t in n ? Object.defineProperty(n, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
           }) : n[t] = i, n
        }
  
        function h() {
           this.firstPanelsOpenByDefault ? this.togglePanel(this.accordionContainer.querySelector(this.headerSelector)) : (this.accordionContainer.querySelector(this.headerSelector), this.accordionContainer && this.accordionContainer.setAttribute("tabindex", 0));
           this.accordionContainer.classList.add(this.readyClass)
        }
  
        function c(n) {
           n.setAttribute("role", "tab");
           n.setAttribute("tabindex", 0)
        }
  
        function l(n) {
           var e = this,
              i, f, r;
           n.setAttribute("role", "tablist");
           n.setAttribute("aria-multiselectable", this.multiselectable);
           for (var o = c, u = this.headers, t = 0; t <= u.length - 1; t++) o(u[t], t, u);
           for (f = this.panels, r = 0; r <= f.length - 1; r++)(i = f[r]).setAttribute("role", "tabpanel"), i.setAttribute("aria-labelledby", i.id.replace(e.panelIdPrefix, e.headerIdPrefix)), i.setAttribute("tabindex", 0)
        }
  
        function a(n) {
           n.removeAttribute("role");
           n.removeAttribute("aria-selected");
           n.removeAttribute("aria-expanded");
           n.removeAttribute("tabindex")
        }
  
        function v(n) {
           n.removeAttribute("role");
           n.removeAttribute("aria-labelledby");
           n.removeAttribute("aria-hidden");
           n.removeAttribute("tabindex")
        }
  
        function y(n) {
           n.removeAttribute("role");
           n.removeAttribute("aria-multiselectable");
           for (var f = a, r = this.headers, t = 0; t <= r.length - 1; t++) f(r[t], t, r);
           for (var e = v, u = this.panels, i = 0; i <= u.length - 1; i++) e(u[i], i, u)
        }
  
        function p() {
           for (var n, u = this, i = Object(r.a)(this.headerSelector, this.accordionContainer), t = 0; t <= i.length - 1; t++) "true" === (n = i[t]).getAttribute("aria-expanded") && u.hidePanel(n), n.setAttribute("tabindex", -1), n.setAttribute("aria-selected", "false"), n.setAttribute("aria-expanded", "false")
        }
  
        function w(n) {
           var t = n.nextElementSibling;
           t && (n.setAttribute("aria-selected", "false"), n.setAttribute("aria-expanded", "false"), this.unsetPanelHeight(t), t.setAttribute("aria-hidden", "true"), this.parentSelector && t.parentElement && t.parentElement.classList.contains(this.parentSelector) && t.parentElement.classList.remove(this.expandedClass))
        }
  
        function b(n) {
           var t = n.nextElementSibling;
           t && (n.setAttribute("tabindex", 0), n.setAttribute("aria-selected", "true"), n.setAttribute("aria-expanded", "true"), this.setPanelHeight(t, this.transitionDuration), t.setAttribute("aria-hidden", "false"), this.parentSelector && t.parentElement && t.parentElement.classList.contains(this.parentSelector) && t.parentElement.classList.add(this.expandedClass))
        }
  
        function k(n) {
           "true" !== n.getAttribute("aria-selected") ? (this.multiselectable || this.hideAllPanels(), this.showPanel(n)) : this.hidePanel(n)
        }
  
        function d(n) {
           return "true" === n.getAttribute("aria-selected")
        }
  
        function g(n) {
           n.setAttribute("tabindex", -1)
        }
  
        function nt(n, t) {
           for (var r = g, i = 0; i <= n.length - 1; i++) r(n[i], i, n);
           n[t].setAttribute("tabindex", 0);
           n[t].focus()
        }
  
        function tt(n) {
           this.togglePanel(n.currentTarget)
        }
  
        function it(n) {
           var u = n.currentTarget,
              o = n.metaKey || n.altKey,
              t = Object(r.a)(this.headerSelector, this.accordionContainer),
              i = [].indexOf.call(t, u),
              f, e;
           if (!o) switch (n.keyCode) {
              case 13:
              case 32:
                 r.q || (this.togglePanel(u), n.preventDefault());
                 break;
              case 37:
              case 38:
                 f = 0 === i ? t.length - 1 : i - 1;
                 this.giveHeaderFocus(t, f);
                 n.preventDefault();
                 break;
              case 39:
              case 40:
                 e = i < t.length - 1 ? i + 1 : 0;
                 this.giveHeaderFocus(t, e);
                 n.preventDefault()
           }
        }
  
        function rt() {
           for (var t, i = this, r = this.headers, n = 0; n <= r.length - 1; n++)(t = r[n]).addEventListener("click", i.bindedHeaderClick), t.addEventListener("keydown", i.bindedHeaderKeydown)
        }
  
        function ut() {
           for (var t, i = this, r = this.headers, n = 0; n <= r.length - 1; n++)(t = r[n]).removeEventListener("click", i.bindedHeaderClick), t.removeEventListener("keydown", i.bindedHeaderKeydown)
        }
  
        function ft() {
           this.removeA11y(this.accordionContainer);
           this.unbindAccordionEvents();
           this.accordionContainer.classList.remove(this.readyClass)
        }
        var r, u, o;
        i.r(t);
        r = i(1);
        u = i(14);
        o = function () {
           function t(n) {
              var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                 f = i.headerSelector,
                 o = void 0 === f ? ".toggle-header" : f,
                 h = i.headerIdPrefix,
                 d = void 0 === h ? "accordion-header" : h,
                 c = i.panelSelector,
                 l = void 0 === c ? ".toggle-content" : c,
                 a = i.panelIdPrefix,
                 g = void 0 === a ? "accordion-panel" : a,
                 v = i.parentSelector,
                 nt = void 0 === v ? "item" : v,
                 y = i.expandedClass,
                 tt = void 0 === y ? "expanded" : y,
                 p = i.firstPanelsOpenByDefault,
                 it = void 0 !== p && p,
                 w = i.multiselectable,
                 rt = void 0 !== w && w,
                 b = i.readyClass,
                 ut = void 0 === b ? "c-accordion--is-ready" : b,
                 k = i.transitionDuration,
                 ft = void 0 === k ? 1e3 : k;
              s(this, t);
              e(this, "setPanelHeight", u.a);
              e(this, "unsetPanelHeight", u.b);
              this.accordionContainer = n;
              this.headerSelector = o;
              this.headerIdPrefix = d;
              this.panelSelector = l;
              this.panelIdPrefix = g;
              this.parentSelector = nt;
              this.expandedClass = tt;
              this.headers = Object(r.a)(o, n);
              this.panels = Object(r.a)(l, n);
              this.firstPanelsOpenByDefault = it;
              this.multiselectable = rt;
              this.readyClass = ut;
              this.transitionDuration = ft;
              this.bindedHeaderClick = this.eventHeaderClick.bind(this);
              this.bindedHeaderKeydown = this.eventHeaderKeydown.bind(this);
              this.addA11y(this.accordionContainer);
              this.bindAccordionEvents();
              this.hideAllPanels();
              this.initDOMElements()
           }
           var n, i, o;
           return n = t, (i = [{
              key: "initDOMElements",
              value: h
           }, {
              key: "addA11y",
              value: l
           }, {
              key: "removeA11y",
              value: y
           }, {
              key: "hideAllPanels",
              value: p
           }, {
              key: "hidePanel",
              value: w
           }, {
              key: "showPanel",
              value: b
           }, {
              key: "togglePanel",
              value: k
           }, {
              key: "isPanelOpen",
              value: d
           }, {
              key: "giveHeaderFocus",
              value: nt
           }, {
              key: "eventHeaderClick",
              value: tt
           }, {
              key: "eventHeaderKeydown",
              value: it
           }, {
              key: "bindAccordionEvents",
              value: rt
           }, {
              key: "unbindAccordionEvents",
              value: ut
           }, {
              key: "destroy",
              value: ft
           }]) && f(n.prototype, i), o && f(n, o), Object.defineProperty(n, "prototype", {
              writable: !1
           }), t
        }();
        t.default = o
     },
     35: function () {
        function n(t) {
           return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
              return typeof n
           } : function (n) {
              return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
           })(t)
        }
  
        function i(n, t) {
           this.scrollLeft = n;
           this.scrollTop = t
        }
  
        function t(t) {
           if (null === t || "object" !== n(t) || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
           if ("object" === n(t) && "smooth" === t.behavior) return !1;
           throw new TypeError("behavior member of ScrollOptions ".concat(t.behavior, " is not a valid value for enumeration ScrollBehavior."));
        }! function () {
           function l(n, t) {
              return "Y" === t ? n.clientHeight + c < n.scrollHeight : "X" === t && n.clientWidth + c < n.scrollWidth
           }
  
           function a(n, t) {
              var i = r.getComputedStyle(n, null)["overflow".concat(t)];
              return "auto" === i || "scroll" === i
           }
  
           function w(n) {
              var t = l(n, "Y") && a(n, "Y"),
                 i = l(n, "X") && a(n, "X");
              return t || i
           }
  
           function b(n) {
              for (var t = n; t !== u.body && !1 === w(t);) t = t.parentNode || t.host;
              return t
           }
  
           function v(n) {
              var i, t = (h() - n.startTime) / 468,
                 u = (i = t = t > 1 ? 1 : t, .5 * (1 - Math.cos(Math.PI * i))),
                 f = n.startX + (n.x - n.startX) * u,
                 e = n.startY + (n.y - n.startY) * u;
              n.method.call(n.scrollable, f, e);
              f === n.x && e === n.y || r.requestAnimationFrame(v.bind(r, n))
           }
  
           function o(n, t, f) {
              var o, s, c, l, a = h();
              n === u.body ? (o = r, s = r.scrollX || r.pageXOffset, c = r.scrollY || r.pageYOffset, l = e.scroll) : (o = n, s = n.scrollLeft, c = n.scrollTop, l = i);
              v({
                 scrollable: o,
                 method: l,
                 startTime: a,
                 startX: s,
                 startY: c,
                 x: t,
                 y: f
              })
           }
  
           function y() {
              var i = arguments;
              void 0 !== i[0] && (!0 !== t(i[0]) ? o.call(r, u.body, void 0 !== i[0].left ? ~~i[0].left : r.scrollX || r.pageXOffset, void 0 !== i[0].top ? ~~i[0].top : r.scrollY || r.pageYOffset) : e.scroll.call(r, void 0 !== i[0].left ? i[0].left : "object" !== n(i[0]) ? i[0] : r.scrollX || r.pageXOffset, void 0 !== i[0].top ? i[0].top : void 0 !== i[1] ? i[1] : r.scrollY || r.pageYOffset))
           }
  
           function p() {
              var i = arguments,
                 r, u;
              if (void 0 !== i[0])
                 if (!0 !== t(i[0])) r = i[0].left, u = i[0].top, o.call(this, this, void 0 === r ? this.scrollLeft : ~~r, void 0 === u ? this.scrollTop : ~~u);
                 else {
                    if ("number" == typeof i[0] && void 0 === i[1]) throw new SyntaxError("Value could not be converted");
                    e.elementScroll.call(this, void 0 !== i[0].left ? ~~i[0].left : "object" !== n(i[0]) ? ~~i[0] : this.scrollLeft, void 0 !== i[0].top ? ~~i[0].top : void 0 !== i[1] ? ~~i[1] : this.scrollTop)
                 }
           }
           var r = window,
              u = document;
           if (!("scrollBehavior" in u.documentElement.style) || !0 === r.__forceSmoothScrollPolyfill__) {
              var s, f = r.HTMLElement || r.Element,
                 e = {
                    scroll: r.scroll || r.scrollTo,
                    scrollBy: r.scrollBy,
                    elementScroll: f.prototype.scroll || i,
                    scrollIntoView: f.prototype.scrollIntoView
                 },
                 h = r.performance && r.performance.now ? r.performance.now.bind(r.performance) : Date.now,
                 c = (s = r.navigator.userAgent, new RegExp("MSIE |Trident/|Edge/").test(s) ? 1 : 0);
              r.scrollBy = function () {
                 var i = arguments;
                 void 0 !== i[0] && (t(i[0]) ? e.scrollBy.call(r, void 0 !== i[0].left ? i[0].left : "object" !== n(i[0]) ? i[0] : 0, void 0 !== i[0].top ? i[0].top : void 0 !== i[1] ? i[1] : 0) : o.call(r, u.body, ~~i[0].left + (r.scrollX || r.pageXOffset), ~~i[0].top + (r.scrollY || r.pageYOffset)))
              };
              r.scroll = y;
              r.scrollTo = y;
              f.prototype.scroll = p;
              f.prototype.scrollTo = p;
              f.prototype.scrollBy = function () {
                 var n = arguments;
                 void 0 !== n[0] && (!0 !== t(n[0]) ? this.scroll({
                    left: ~~n[0].left + this.scrollLeft,
                    top: ~~n[0].top + this.scrollTop,
                    behavior: n[0].behavior
                 }) : e.elementScroll.call(this, void 0 !== n[0].left ? ~~n[0].left + this.scrollLeft : ~~n[0] + this.scrollLeft, void 0 !== n[0].top ? ~~n[0].top + this.scrollTop : ~~n[1] + this.scrollTop))
              };
              f.prototype.scrollIntoView = function () {
                 var s = arguments;
                 if (!0 !== t(s[0])) {
                    var n = b(this),
                       i = n.getBoundingClientRect(),
                       f = this.getBoundingClientRect();
                    n !== u.body ? (o.call(this, n, n.scrollLeft + f.left - i.left, n.scrollTop + f.top - i.top), "fixed" !== r.getComputedStyle(n).position && r.scrollBy({
                       left: i.left,
                       top: i.top,
                       behavior: "smooth"
                    })) : r.scrollBy({
                       left: f.left,
                       top: f.top,
                       behavior: "smooth"
                    })
                 } else e.scrollIntoView.call(this, void 0 === s[0] || s[0])
              }
           }
        }(window, document)
     },
     4: function (n) {
        n.exports = jQuery
     },
     47: function () {
        function n(t) {
           return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
              return typeof n
           } : function (n) {
              return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
           })(t)
        }
  
        function t() {}
  
        function i(n) {
           n.refresh()
        }
  
        function r(n, t) {
           return n.scrollOffset() > t.scrollOffset() ? 1 : -1
        }
  
        function u(n) {
           if (n.length <= 1) return n;
           var t = n.slice(0);
           return t.sort(r), t
        }
  
        function f(n) {
           return !!n
        }
  
        function e(n, t, i, r) {
           for (var u in r = r || {}) this[u] = r[u];
           return this.type = n, this.target = this.currentTarget = i, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
        }
  
        function o(n) {
           return parseFloat(n) || 0
        }
  
        function s(n) {
           return n[1].toUpperCase()
        }
  
        function h(n) {
           return n.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, s)
        }
  
        function c(n) {
           return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(n) > -1
        }
  
        function l() {}
  
        function a(n) {
           return Object.prototype.toString.call(n).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        }
  
        function v(n) {
           return Array.isArray(n)
        }
  
        function y(t) {
           return "object" === ("undefined" == typeof HTMLElement ? "undefined" : n(HTMLElement)) || "function" == typeof HTMLElement ? t instanceof HTMLElement || t instanceof SVGElement : t && "object" === n(t) && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
        }
  
        function p(n, t) {
           t && (n.classList ? n.classList.add(t) : n.className += " " + t)
        }
  
        function w(n, t) {
           t && (n.classList ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }
        window.ScrollMagic = function () {
           "use strict";
           var r = function () {
                 n.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
              },
              b, s, n;
           return r.version = "2.0.7", window.addEventListener("mousewheel", t), r.Controller = function (t) {
              function st(n) {
                 e.addScene(n)
              }
  
              function ht() {
                 o = w(o)
              }
  
              function ct(n) {
                 e.removeScene(n)
              }
              var nt, tt, l = "ScrollMagic.Controller",
                 k = b.defaults,
                 e = this,
                 f = n.extend({}, k, t),
                 o = [],
                 h = !1,
                 d = 0,
                 v = "PAUSED",
                 c = !0,
                 y = 0,
                 p = !0,
                 it = function () {
                    f.refreshInterval > 0 && (tt = window.setTimeout(ot, f.refreshInterval))
                 },
                 rt = function () {
                    return f.vertical ? n.get.scrollTop(f.container) : n.get.scrollLeft(f.container)
                 },
                 g = function () {
                    return f.vertical ? n.get.height(f.container) : n.get.width(f.container)
                 },
                 ut = this._setScrollPos = function (t) {
                    f.vertical ? c ? window.scrollTo(n.get.scrollLeft(), t) : f.container.scrollTop = t : c ? window.scrollTo(t, n.get.scrollTop()) : f.container.scrollLeft = t
                 },
                 ft = function () {
                    var t, u, r, c, i;
                    if (p && h) {
                       for (t = n.type.Array(h) ? h : o.slice(0), h = !1, u = d, r = (d = e.scrollPos()) - u, 0 !== r && (v = r > 0 ? "FORWARD" : "REVERSE"), "REVERSE" === v && t.reverse(), c = function (n, i) {
                             s(3, "updating Scene " + (i + 1) + "/" + t.length + " (" + o.length + " total)");
                             n.update(!0)
                          }, i = 0; i <= t.length - 1; i++) c(t[i], i, t);
                       0 === t.length && f.loglevel >= 3 && s(3, "updating 0 Scenes (nothing added to controller)")
                    }
                 },
                 et = function () {
                    nt = n.rAF(ft)
                 },
                 a = function (n) {
                    s(3, "event fired causing an update:", n.type);
                    "resize" == n.type && (y = g(), v = "PAUSED");
                    !0 !== h && (h = !0, et())
                 },
                 ot = function () {
                    var t, r, n;
                    if (!c && y != g()) {
                       try {
                          t = new Event("resize", {
                             bubbles: !1,
                             cancelable: !1
                          })
                       } catch (r) {
                          (t = document.createEvent("Event")).initEvent("resize", !1, !1)
                       }
                       f.container.dispatchEvent(t)
                    }
                    for (r = i, n = 0; n <= o.length - 1; n++) r(o[n], n, o);
                    it()
                 },
                 s = this._log = function (t) {
                    f.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + l + ") ->"), n.log.apply(window, arguments))
                 },
                 w;
              return this._options = f, w = u, this.addScene = function (t) {
                    var h, i, u;
                    if (n.type.Array(t))
                       for (h = st, i = 0; i <= t.length - 1; i++) h(t[i], i, t);
                    else if (t instanceof r.Scene) {
                       if (t.controller() !== e) t.addTo(e);
                       else if (o.indexOf(t) < 0) {
                          for (u in o.push(t), o = w(o), t.on("shift.controller_sort", ht), f.globalSceneOptions) t[u] && t[u].call(t, f.globalSceneOptions[u]);
                          s(3, "adding Scene (now " + o.length + " total)")
                       }
                    } else s(1, "ERROR: invalid argument supplied for '.addScene()'");
                    return e
                 }, this.removeScene = function (t) {
                    var u, i, r;
                    if (n.type.Array(t))
                       for (u = ct, i = 0; i <= t.length - 1; i++) u(t[i], i, t);
                    else r = o.indexOf(t), r > -1 && (t.off("shift.controller_sort"), o.splice(r, 1), s(3, "removing Scene (now " + o.length + " left)"), t.remove());
                    return e
                 }, this.updateScene = function (t, i) {
                    if (n.type.Array(t))
                       for (var f = function (n) {
                             e.updateScene(n, i)
                          }, u = 0; u <= t.length - 1; u++) f(t[u], u, t);
                    else i ? t.update(!0) : !0 !== h && t instanceof r.Scene && (-1 == (h = h || []).indexOf(t) && h.push(t), h = w(h), et());
                    return e
                 }, this.update = function (n) {
                    return a({
                       type: "resize"
                    }), n && ft(), e
                 }, this.scrollTo = function (t, i) {
                    var u;
                    if (n.type.Number(t)) ut.call(f.container, t, i);
                    else if (t instanceof r.Scene) t.controller() === e ? e.scrollTo(t.scrollOffset(), i) : s(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", t);
                    else if (n.type.Function(t)) ut = t;
                    else if (u = n.get.elements(t)[0], u) {
                       for (; u.parentNode.hasAttribute("data-scrollmagic-pin-spacer");) u = u.parentNode;
                       var o = f.vertical ? "top" : "left",
                          h = n.get.offset(f.container),
                          l = n.get.offset(u);
                       c || (h[o] -= e.scrollPos());
                       e.scrollTo(l[o] - h[o], i)
                    } else s(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", t);
                    return e
                 }, this.scrollPos = function (t) {
                    return arguments.length ? (n.type.Function(t) ? rt = t : s(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."), e) : rt.call(e)
                 }, this.info = function (n) {
                    var t = {
                       size: y,
                       vertical: f.vertical,
                       scrollPos: d,
                       scrollDirection: v,
                       container: f.container,
                       isDocument: c
                    };
                    return arguments.length ? void 0 !== t[n] ? t[n] : void s(1, 'ERROR: option "' + n + '" is not available') : t
                 }, this.loglevel = function (n) {
                    return arguments.length ? (f.loglevel != n && (f.loglevel = n), e) : f.loglevel
                 }, this.enabled = function (n) {
                    return arguments.length ? (p != n && (p = !!n, e.updateScene(o, !0)), e) : p
                 }, this.destroy = function (t) {
                    window.clearTimeout(tt);
                    for (var i = o.length; i--;) o[i].destroy(t);
                    return f.container.removeEventListener("resize", a), f.container.removeEventListener("scroll", a), n.cAF(nt), s(3, "destroyed " + l + " (reset: " + (t ? "true" : "false") + ")"), null
                 },
                 function () {
                    var t, i;
                    for (t in f) k.hasOwnProperty(t) || (s(2, 'WARNING: Unknown option "' + t + '"'), delete f[t]);
                    if (f.container = n.get.elements(f.container)[0], !f.container) throw s(1, "ERROR creating object " + l + ": No valid scroll container supplied"), l + " init failed.";
                    (c = f.container === window || f.container === document.body || !document.body.contains(f.container)) && (f.container = window);
                    y = g();
                    f.container.addEventListener("resize", a);
                    f.container.addEventListener("scroll", a);
                    i = parseInt(f.refreshInterval, 10);
                    f.refreshInterval = n.type.Number(i) ? i : k.refreshInterval;
                    it();
                    s(3, "added new " + l + " controller (v" + r.version + ")")
                 }(), e
           }, b = {
              defaults: {
                 container: window,
                 vertical: !0,
                 globalSceneOptions: {},
                 loglevel: 2,
                 refreshInterval: 100
              }
           }, r.Controller.addOption = function (n, t) {
              b.defaults[n] = t
           }, r.Controller.extend = function (t) {
              var i = this;
              r.Controller = function () {
                 return i.apply(this, arguments), this.$super = n.extend({}, this), t.apply(this, arguments) || this
              };
              n.extend(r.Controller, i);
              r.Controller.prototype = i.prototype;
              r.Controller.prototype.constructor = r.Controller
           }, r.Scene = function (t) {
              function at(t, i) {
                 var u, r;
                 if (ft[t]) try {
                    u = ft[t](o[t])
                 } catch (i) {
                    u = g[t];
                    r = n.type.String(i) ? [i] : i;
                    n.type.Array(r) ? (r[0] = "ERROR: " + r[0], r.unshift(1), c.apply(this, r)) : c(1, "ERROR: Problem executing validation callback for option '" + t + "':", i.message)
                 } finally {
                    o[t] = u
                 }
              }
  
              function yt(t) {
                 for (var r, u = "enter" === t.type ? n.addClass : n.removeClass, i = 0; i <= v.length - 1; i++) r = v[i], u(r, rt)
              }
  
              function pt(t) {
                 n.removeClass(t, rt)
              }
              var y, f, d = "ScrollMagic.Scene",
                 g = s.defaults,
                 i = this,
                 o = n.extend({}, g, t),
                 h = "BEFORE",
                 l = 0,
                 a = {
                    start: 0,
                    end: 0
                 },
                 b = 0,
                 nt = !0,
                 p = {},
                 c, rt, v;
              this.on = function (t, r) {
                 if (n.type.Function(r)) {
                    t = t.trim().split(" ");
                    for (var f = function (n) {
                          var i = n.split("."),
                             t = i[0],
                             u = i[1];
                          "*" != t && (p[t] || (p[t] = []), p[t].push({
                             namespace: u || "",
                             callback: r
                          }))
                       }, u = 0; u <= t.length - 1; u++) f(t[u], u, t)
                 } else c(1, "ERROR when calling '.on()': Supplied callback for '" + t + "' is not a valid function!");
                 return i
              };
              this.off = function (n, t) {
                 if (!n) return c(1, "ERROR: Invalid event name supplied."), i;
                 n = n.trim().split(" ");
                 for (var u = function (n) {
                       for (var r = n.split("."), u = r[0], f = r[1] || "", e = "*" === u ? Object.keys(p) : [u], o = function (n) {
                             for (var u, i = p[n] || [], r = i.length; r--;) u = i[r], !u || f !== u.namespace && "*" !== f || t && t != u.callback || i.splice(r, 1);
                             i.length || delete p[n]
                          }, i = 0; i <= e.length - 1; i++) o(e[i])
                    }, r = 0; r <= n.length - 1; r++) u(n[r]);
                 return i
              };
              this.trigger = function (n, t) {
                 var h, u;
                 if (n) {
                    var o = n.trim().split("."),
                       e = o[0],
                       s = o[1],
                       f = p[e];
                    if (c(3, "event fired:", e, t ? "->" : "", t || ""), f)
                       for (h = function (n) {
                             s && s !== n.namespace || n.callback.call(i, new r.Event(e, n.namespace, i, t))
                          }, u = 0; u <= f.length - 1; u++) h(f[u], u, f)
                 } else c(1, "ERROR: Invalid event name supplied.");
                 return i
              };
              i.on("change.internal", function (n) {
                 "loglevel" !== n.what && "tweenChanges" !== n.what && ("triggerElement" === n.what ? ut() : "reverse" === n.what && i.update())
              }).on("shift.internal", function () {
                 ot();
                 i.update()
              });
              c = this._log = function (t) {
                 o.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + d + ") ->"), n.log.apply(window, arguments))
              };
              this.addTo = function (n) {
                 return n instanceof r.Controller ? f != n && (f && f.removeScene(i), f = n, et(), st(!0), ut(!0), ot(), f.info("container").addEventListener("resize", ht), n.addScene(i), i.trigger("add", {
                    controller: f
                 }), c(3, "added " + d + " to controller"), i.update()) : c(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"), i
              };
              this.enabled = function (n) {
                 return arguments.length ? (nt != n && (nt = !!n, i.update(!0)), i) : nt
              };
              this.remove = function () {
                 if (f) {
                    f.info("container").removeEventListener("resize", ht);
                    var n = f;
                    f = void 0;
                    n.removeScene(i);
                    i.trigger("remove");
                    c(3, "removed " + d + " from controller")
                 }
                 return i
              };
              this.destroy = function (n) {
                 return i.trigger("destroy", {
                    reset: n
                 }), i.remove(), i.off("*.*"), c(3, "destroyed " + d + " (reset: " + (n ? "true" : "false") + ")"), null
              };
              this.update = function (n) {
                 if (f)
                    if (n)
                       if (f.enabled() && nt) {
                          var r, t = f.info("scrollPos");
                          r = o.duration > 0 ? (t - a.start) / (a.end - a.start) : t >= a.start ? 1 : 0;
                          i.trigger("update", {
                             startPos: a.start,
                             endPos: a.end,
                             scrollPos: t
                          });
                          i.progress(r)
                       } else u && "DURING" === h && w(!0);
                 else f.updateScene(i, !1);
                 return i
              };
              this.refresh = function () {
                 return st(), ut(), i
              };
              this.progress = function (n) {
                 function c(n) {
                    i.trigger(n, v)
                 }
                 if (arguments.length) {
                    var t = !1,
                       e = h,
                       a = f ? f.info("scrollDirection") : "PAUSED",
                       u = o.reverse || n >= l;
                    if (0 === o.duration ? (t = l != n, h = 0 == (l = n < 1 && u ? 0 : 1) ? "BEFORE" : "DURING") : n < 0 && "BEFORE" !== h && u ? (l = 0, h = "BEFORE", t = !0) : n >= 0 && n < 1 && u ? (l = n, h = "DURING", t = !0) : n >= 1 && "AFTER" !== h ? (l = 1, h = "AFTER", t = !0) : "DURING" !== h || u || w(), t) {
                       var v = {
                             progress: l,
                             state: h,
                             scrollDirection: a
                          },
                          s = h != e,
                          r = c;
                       s && "DURING" !== e && (r("enter"), r("BEFORE" === e ? "start" : "end"));
                       r("progress");
                       s && "DURING" !== h && (r("BEFORE" === h ? "start" : "end"), r("leave"))
                    }
                    return i
                 }
                 return l
              };
              var ot = function () {
                    a = {
                       start: b + o.offset
                    };
                    f && o.triggerElement && (a.start -= f.info("size") * o.triggerHook);
                    a.end = a.start + o.duration
                 },
                 st = function (n) {
                    y && ct("duration", y.call(i)) && !n && (i.trigger("change", {
                       what: "duration",
                       newval: o.duration
                    }), i.trigger("shift", {
                       reason: "duration"
                    }))
                 },
                 ut = function (t) {
                    var u = 0,
                       r = o.triggerElement,
                       l, a;
                    if (f && (r || b > 0)) {
                       if (r)
                          if (r.parentNode) {
                             for (var e = f.info(), h = n.get.offset(e.container), s = e.vertical ? "top" : "left"; r.parentNode.hasAttribute("data-scrollmagic-pin-spacer");) r = r.parentNode;
                             l = n.get.offset(r);
                             e.isDocument || (h[s] -= f.scrollPos());
                             u = l[s] - h[s]
                          } else c(2, "WARNING: triggerElement was removed from DOM and will be reset to", void 0), i.triggerElement(void 0);
                       a = u != b;
                       b = u;
                       a && !t && i.trigger("shift", {
                          reason: "triggerElementPosition"
                       })
                    }
                 },
                 ht = function () {
                    o.triggerHook > 0 && i.trigger("shift", {
                       reason: "containerResize"
                    })
                 },
                 ft = n.extend(s.validate, {
                    duration: function (t) {
                       if (n.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                          var r = parseFloat(t) / 100;
                          t = function () {
                             return f ? f.info("size") * r : 0
                          }
                       }
                       if (n.type.Function(t)) {
                          y = t;
                          try {
                             t = parseFloat(y.call(i))
                          } catch (r) {
                             t = -1
                          }
                       }
                       if (t = parseFloat(t), !n.type.Number(t) || t < 0) throw y ? (y = void 0, ['Invalid return value of supplied function for option "duration":', t]) : ['Invalid value for option "duration":', t];
                       return t
                    }
                 });
              var u, e, et = function (n) {
                    n = arguments.length ? [n] : Object.keys(ft);
                    for (var i = at, t = 0; t <= n.length - 1; t++) i(n[t], t, n)
                 },
                 ct = function (n, t) {
                    var i = !1,
                       r = o[n];
                    return o[n] != t && (o[n] = t, et(n), i = r != o[n]), i
                 },
                 vt = function (n) {
                    i[n] || (i[n] = function (t) {
                       return arguments.length ? ("duration" === n && (y = void 0), ct(n, t) && (i.trigger("change", {
                          what: n,
                          newval: o[n]
                       }), s.shifts.indexOf(n) > -1 && i.trigger("shift", {
                          reason: n
                       })), i) : o[n]
                    })
                 };
              this.controller = function () {
                 return f
              };
              this.state = function () {
                 return h
              };
              this.scrollOffset = function () {
                 return a.start
              };
              this.triggerPosition = function () {
                 var n = o.offset;
                 return f && (n += o.triggerElement ? b : f.info("size") * i.triggerHook()), n
              };
              i.on("shift.internal", function (n) {
                 var t = "duration" === n.reason;
                 ("AFTER" === h && t || "DURING" === h && 0 === o.duration) && w();
                 t && k()
              }).on("progress.internal", function () {
                 w()
              }).on("add.internal", function () {
                 k()
              }).on("destroy.internal", function (n) {
                 i.removePin(n.reset)
              });
              var w = function (t) {
                    var r, i, s, v, c, y;
                    u && f && (r = f.info(), i = e.spacer.firstChild, t || "DURING" !== h ? (s = {
                       position: e.inFlow ? "relative" : "absolute",
                       top: 0,
                       left: 0
                    }, v = n.css(i, "position") != s.position, e.pushFollowers ? o.duration > 0 && ("AFTER" === h && 0 === parseFloat(n.css(e.spacer, "padding-top")) || "BEFORE" === h && 0 === parseFloat(n.css(e.spacer, "padding-bottom"))) && (v = !0) : s[r.vertical ? "top" : "left"] = o.duration * l, n.css(i, s), v && k()) : ("fixed" != n.css(i, "position") && (n.css(i, {
                       position: "fixed"
                    }), k()), c = n.get.offset(e.spacer, !0), y = o.reverse || 0 === o.duration ? r.scrollPos - a.start : Math.round(l * o.duration * 10) / 10, c[r.vertical ? "top" : "left"] += y, n.css(e.spacer.firstChild, {
                       top: c.top,
                       left: c.left
                    })))
                 },
                 k = function () {
                    if (u && f && e.inFlow) {
                       var i = "DURING" === h,
                          r = f.info("vertical"),
                          s = e.spacer.firstChild,
                          c = n.isMarginCollapseType(n.css(e.spacer, "display")),
                          t = {};
                       e.relSize.width || e.relSize.autoFullWidth ? i ? n.css(u, {
                          width: n.get.width(e.spacer)
                       }) : n.css(u, {
                          width: "100%"
                       }) : (t["min-width"] = n.get.width(r ? u : s, !0, !0), t.width = i ? t["min-width"] : "auto");
                       e.relSize.height ? i ? n.css(u, {
                          height: n.get.height(e.spacer) - (e.pushFollowers ? o.duration : 0)
                       }) : n.css(u, {
                          height: "100%"
                       }) : (t["min-height"] = n.get.height(r ? s : u, !0, !c), t.height = i ? t["min-height"] : "auto");
                       e.pushFollowers && (t["padding" + (r ? "Top" : "Left")] = o.duration * l, t["padding" + (r ? "Bottom" : "Right")] = o.duration * (1 - l));
                       n.css(e.spacer, t)
                    }
                 },
                 tt = function () {
                    f && u && "DURING" === h && !f.info("isDocument") && w()
                 },
                 lt = function () {
                    f && u && "DURING" === h && ((e.relSize.width || e.relSize.autoFullWidth) && n.get.width(window) != n.get.width(e.spacer.parentNode) || e.relSize.height && n.get.height(window) != n.get.height(e.spacer.parentNode)) && k()
                 },
                 it = function (n) {
                    f && u && "DURING" === h && !f.info("isDocument") && (n.preventDefault(), f._setScrollPos(f.info("scrollPos") - ((n.wheelDelta || n[f.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -n.detail)))
                 };
              return this.setPin = function (t, r) {
                    var k = r && r.hasOwnProperty("pushFollowers"),
                       p, a, f, v;
                    if (r = n.extend({}, {
                          pushFollowers: !0,
                          spacerClass: "scrollmagic-pin-spacer"
                       }, r), !(t = n.get.elements(t)[0])) return c(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), i;
                    if ("fixed" === n.css(t, "position")) return c(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."), i;
                    if (u) {
                       if (u === t) return i;
                       i.removePin()
                    }
                    p = (u = t).parentNode.style.display;
                    a = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                    u.parentNode.style.display = "none";
                    var s = "absolute" != n.css(u, "position"),
                       b = n.css(u, a.concat(["display"])),
                       h = n.css(u, ["width", "height"]);
                    if (u.parentNode.style.display = p, !s && r.pushFollowers && (c(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."), r.pushFollowers = !1), window.setTimeout(function () {
                          u && 0 === o.duration && k && r.pushFollowers && c(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.")
                       }, 0), f = u.parentNode.insertBefore(document.createElement("div"), u), v = n.extend(b, {
                          position: s ? "relative" : "absolute",
                          boxSizing: "content-box",
                          mozBoxSizing: "content-box",
                          webkitBoxSizing: "content-box"
                       }), s || n.extend(v, n.css(u, ["width", "height"])), n.css(f, v), f.setAttribute("data-scrollmagic-pin-spacer", ""), n.addClass(f, r.spacerClass), e = {
                          spacer: f,
                          relSize: {
                             width: "%" === h.width.slice(-1),
                             height: "%" === h.height.slice(-1),
                             autoFullWidth: "auto" === h.width && s && n.isMarginCollapseType(b.display)
                          },
                          pushFollowers: r.pushFollowers,
                          inFlow: s
                       }, !u.___origStyle) {
                       u.___origStyle = {};
                       for (var d = u.style, y = a.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]), g = function (n) {
                             u.___origStyle[n] = d[n] || ""
                          }, l = 0; l <= y.length - 1; l++) g(y[l], l, y)
                    }
                    return e.relSize.width && n.css(f, {
                       width: h.width
                    }), e.relSize.height && n.css(f, {
                       height: h.height
                    }), f.appendChild(u), n.css(u, {
                       position: s ? "relative" : "absolute",
                       margin: "auto",
                       top: "auto",
                       left: "auto",
                       bottom: "auto",
                       right: "auto"
                    }), (e.relSize.width || e.relSize.autoFullWidth) && n.css(u, {
                       boxSizing: "border-box",
                       mozBoxSizing: "border-box",
                       webkitBoxSizing: "border-box"
                    }), window.addEventListener("scroll", tt), window.addEventListener("resize", tt), window.addEventListener("resize", lt), u.addEventListener("mousewheel", it), u.addEventListener("DOMMouseScroll", it), c(3, "added pin"), w(), i
                 }, this.removePin = function (t) {
                    var r;
                    if (u) {
                       if ("DURING" === h && w(!0), t || !f) {
                          if (r = e.spacer.firstChild, r.hasAttribute("data-scrollmagic-pin-spacer")) {
                             for (var a = e.spacer.style, s = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"], l = {}, v = function (n) {
                                   l[n] = a[n] || ""
                                }, o = 0; o <= s.length - 1; o++) v(s[o], o, s);
                             n.css(r, l)
                          }
                          e.spacer.parentNode.insertBefore(r, e.spacer);
                          e.spacer.parentNode.removeChild(e.spacer);
                          u.parentNode.hasAttribute("data-scrollmagic-pin-spacer") || (n.css(u, u.___origStyle), delete u.___origStyle)
                       }
                       window.removeEventListener("scroll", tt);
                       window.removeEventListener("resize", tt);
                       window.removeEventListener("resize", lt);
                       u.removeEventListener("mousewheel", it);
                       u.removeEventListener("DOMMouseScroll", it);
                       u = void 0;
                       c(3, "removed pin (reset: " + (t ? "true" : "false") + ")")
                    }
                    return i
                 }, v = [], i.on("destroy.internal", function (n) {
                    i.removeClassToggle(n.reset)
                 }), this.setClassToggle = function (t, r) {
                    var u = n.get.elements(t);
                    return 0 !== u.length && n.type.String(r) ? (v.length > 0 && i.removeClassToggle(), rt = r, v = u, i.on("enter.internal_class leave.internal_class", yt), i) : (c(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === u.length ? "element" : "classes") + " supplied."), i)
                 }, this.removeClassToggle = function (n) {
                    if (n)
                       for (var r = pt, t = 0; t <= v.length - 1; t++) r(v[t], t, v);
                    return i.off("start.internal_class end.internal_class"), rt = void 0, v = [], i
                 },
                 function () {
                    var n, t;
                    for (n in o) g.hasOwnProperty(n) || (c(2, 'WARNING: Unknown option "' + n + '"'), delete o[n]);
                    for (t in g) vt(t);
                    et()
                 }(), i
           }, s = {
              defaults: {
                 duration: 0,
                 offset: 0,
                 triggerElement: void 0,
                 triggerHook: .5,
                 reverse: !0,
                 loglevel: 2
              },
              validate: {
                 offset: function (t) {
                    if (t = parseFloat(t), !n.type.Number(t)) throw ['Invalid value for option "offset":', t];
                    return t
                 },
                 triggerElement: function (t) {
                    if (t = t || void 0) {
                       var i = n.get.elements(t)[0];
                       if (!i || !i.parentNode) throw ['Element defined in option "triggerElement" was not found:', t];
                       t = i
                    }
                    return t
                 },
                 triggerHook: function (t) {
                    var i = {
                       onCenter: .5,
                       onEnter: 1,
                       onLeave: 0
                    };
                    if (n.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1));
                    else {
                       if (!(t in i)) throw ['Invalid value for option "triggerHook": ', t];
                       t = i[t]
                    }
                    return t
                 },
                 reverse: f,
                 loglevel: function (t) {
                    if (t = parseInt(t), !n.type.Number(t) || t < 0 || t > 3) throw ['Invalid value for option "loglevel":', t];
                    return t
                 }
              },
              shifts: ["duration", "offset", "triggerHook"]
           }, r.Scene.addOption = function (n, t, i, u) {
              n in s.defaults ? r._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + n + "', because it already exists.") : (s.defaults[n] = t, s.validate[n] = i, u && s.shifts.push(n))
           }, r.Scene.extend = function (t) {
              var i = this;
              r.Scene = function () {
                 return i.apply(this, arguments), this.$super = n.extend({}, this), t.apply(this, arguments) || this
              };
              n.extend(r.Scene, i);
              r.Scene.prototype = i.prototype;
              r.Scene.prototype.constructor = r.Scene
           }, r.Event = e, n = r._util = function (n) {
              var t, r = {},
                 b = o,
                 g = function (t) {
                    return t.currentStyle ? t.currentStyle : n.getComputedStyle(t)
                 },
                 it = function (t, r, u, f) {
                    var o, e;
                    if ((r = r === document ? n : r) === n) f = !1;
                    else if (!i.DomElement(r)) return 0;
                    return t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase(), o = (u ? r["offset" + t] || r["outer" + t] : r["client" + t] || r["inner" + t]) || 0, u && f && (e = g(r), o += "Height" === t ? b(e.marginTop) + b(e.marginBottom) : b(e.marginLeft) + b(e.marginRight)), o
                 },
                 nt = h,
                 e, f, tt, i, u;
              r.extend = function (n) {
                 for (n = n || {}, t = 1; t < arguments.length; t++)
                    if (arguments[t])
                       for (var i in arguments[t]) arguments[t].hasOwnProperty(i) && (n[i] = arguments[t][i]);
                 return n
              };
              r.isMarginCollapseType = c;
              var rt = 0,
                 k = ["ms", "moz", "webkit", "o"],
                 s = n.requestAnimationFrame,
                 d = n.cancelAnimationFrame;
              for (t = 0; !s && t < k.length; ++t) s = n[k[t] + "RequestAnimationFrame"], d = n[k[t] + "CancelAnimationFrame"] || n[k[t] + "CancelRequestAnimationFrame"];
              for (s || (s = function (t) {
                    var i = (new Date).getTime(),
                       r = Math.max(0, 16 - (i - rt)),
                       u = n.setTimeout(function () {
                          t(i + r)
                       }, r);
                    return rt = i + r, u
                 }), d || (d = function (t) {
                    n.clearTimeout(t)
                 }), r.rAF = s.bind(n), r.cAF = d.bind(n), e = ["error", "warn", "log"], f = n.console || {}, f.log = f.log || l, t = 0; t < e.length; t++) tt = e[t], f[tt] || (f[tt] = f.log);
              return r.log = function (n) {
                 (n > e.length || n <= 0) && (n = e.length);
                 var t = new Date,
                    r = ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + ":" + ("0" + t.getSeconds()).slice(-2) + ":" + ("00" + t.getMilliseconds()).slice(-3),
                    u = e[n - 1],
                    i = Array.prototype.splice.call(arguments, 1),
                    o = Function.prototype.bind.call(f[u], f);
                 i.unshift(r);
                 o.apply(f, i)
              }, i = r.type = a, i.String = function (n) {
                 return "string" === i(n)
              }, i.Function = function (n) {
                 return "function" === i(n)
              }, i.Array = v, i.Number = function (n) {
                 return !i.Array(n) && n - parseFloat(n) + 1 >= 0
              }, i.DomElement = y, u = r.get = {}, u.elements = function (t) {
                 var r = [],
                    f, o, e;
                 if (i.String(t)) try {
                    t = document.querySelectorAll(t)
                 } catch (n) {
                    return r
                 }
                 if ("nodelist" === i(t) || i.Array(t) || t instanceof NodeList)
                    for (f = 0, o = r.length = t.length; f < o; f++) e = t[f], r[f] = i.DomElement(e) ? e : u.elements(e);
                 else(i.DomElement(t) || t === document || t === n) && (r = [t]);
                 return r
              }, u.scrollTop = function (t) {
                 return t && "number" == typeof t.scrollTop ? t.scrollTop : n.pageYOffset || 0
              }, u.scrollLeft = function (t) {
                 return t && "number" == typeof t.scrollLeft ? t.scrollLeft : n.pageXOffset || 0
              }, u.width = function (n, t, i) {
                 return it("width", n, t, i)
              }, u.height = function (n, t, i) {
                 return it("height", n, t, i)
              }, u.offset = function (n, t) {
                 var i = {
                       top: 0,
                       left: 0
                    },
                    r;
                 return n && n.getBoundingClientRect && (r = n.getBoundingClientRect(), i.top = r.top, i.left = r.left, t || (i.top += u.scrollTop(), i.left += u.scrollLeft())), i
              }, r.addClass = p, r.removeClass = w, r.css = function (n, t) {
                 var f, r;
                 if (i.String(t)) return g(n)[nt(t)];
                 if (i.Array(t)) {
                    for (var e = {}, o = g(n), s = function (n) {
                          e[n] = o[nt(n)]
                       }, u = 0; u <= t.length - 1; u++) s(t[u], u, t);
                    return e
                 }
                 for (f in t) r = t[f], r == parseFloat(r) && (r += "px"), n.style[nt(f)] = r
              }, r
           }(window || {}), r.Scene.prototype.addIndicators = function () {
              return r._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
           }, r.Scene.prototype.removeIndicators = function () {
              return r._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
           }, r.Scene.prototype.setTween = function () {
              return r._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
           }, r.Scene.prototype.removeTween = function () {
              return r._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
           }, r.Scene.prototype.setVelocity = function () {
              return r._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
           }, r.Scene.prototype.removeVelocity = function () {
              return r._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
           }, r
        }()
     },
     48: function () {
        function t() {}
        var n;
        (function (n) {
           "use strict";
           var u = "debug.addIndicators",
              f = window.console || {},
              s = Function.prototype.bind.call(f.error || f.log || t, f),
              i, e, o, r;
           n || s("(" + u + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
           i = n._util;
           e = 0;
           n.Scene.extend(function () {
              var t, n = this;
              n.addIndicators = function (r) {
                 if (!t) r = i.extend({}, {
                    name: "",
                    indent: 0,
                    parent: void 0,
                    colorStart: "green",
                    colorEnd: "red",
                    colorTrigger: "blue"
                 }, r), e++, t = new o(n, r), n.on("add.plugin_addIndicators", t.add), n.on("remove.plugin_addIndicators", t.remove), n.on("destroy.plugin_addIndicators", n.removeIndicators), n.controller() && t.add();
                 return n
              };
              n.removeIndicators = function () {
                 return t && (t.remove(), this.off("*.plugin_addIndicators"), t = void 0), n
              }
           });
           n.Controller.addOption("addIndicators", !1);
           n.Controller.extend(function () {
              var f = this,
                 c = f.info(),
                 t = c.container,
                 h = c.isDocument,
                 r = c.vertical,
                 o = {
                    groups: []
                 },
                 s, e;
              return f._indicators && function () {
                 f._log && (Array.prototype.splice.call(arguments, 1, 0, "(" + u + ")", "->"), f._log.apply(this, arguments))
              }(2, "WARNING: Scene already has a property '_indicators', which will be overwritten by plugin."), this._indicators = o, s = function () {
                 o.updateBoundsPositions()
              }, e = function () {
                 o.updateTriggerGroupPositions()
              }, t.addEventListener("resize", e), h || (window.addEventListener("resize", e), window.addEventListener("scroll", e)), t.addEventListener("resize", s), t.addEventListener("scroll", s), this._indicators.updateBoundsPositions = function (n) {
                 for (var u, e, f, s = n ? [i.extend({}, n.triggerGroup, {
                       members: [n]
                    })] : o.groups, h = s.length, c = {}, l = r ? "left" : "top", a = r ? "width" : "height", v = r ? i.get.scrollLeft(t) + i.get.width(t) - 15 : i.get.scrollTop(t) + i.get.height(t) - 15; h--;)
                    for (u = (f = s[h]).members.length, e = i.get[a](f.element.firstChild); u--;) c[l] = v - e, i.css(f.members[u].bounds, c)
              }, this._indicators.updateTriggerGroupPositions = function (n) {
                 for (var u, e, c, s, l = n ? [n] : o.groups, a = l.length, p = h ? document.body : t, v = h ? {
                       top: 0,
                       left: 0
                    } : i.get.offset(p, !0), y = r ? i.get.width(t) - 15 : i.get.height(t) - 15, w = r ? "width" : "height", b = r ? "Y" : "X"; a--;) e = (u = l[a]).element, s = (c = u.triggerHook * f.info("size")) > i.get[w](e.firstChild.firstChild) ? "translate" + b + "(-100%)" : "", i.css(e, {
                    top: v.top + (r ? c : y - u.members[0].options.indent),
                    left: v.left + (r ? y - u.members[0].options.indent : c)
                 }), i.css(e.firstChild.firstChild, {
                    "-ms-transform": s,
                    "-webkit-transform": s,
                    transform: s
                 })
              }, this._indicators.updateTriggerGroupLabel = function (n) {
                 var t = "trigger" + (n.members.length > 1 ? "" : " " + n.members[0].options.name),
                    i = n.element.firstChild.firstChild;
                 i.textContent !== t && (i.textContent = t, r && o.updateBoundsPositions())
              }, this.addScene = function (t) {
                 this._options.addIndicators && t instanceof n.Scene && t.controller() === f && t.addIndicators();
                 this.$super.addScene.apply(this, arguments)
              }, this.destroy = function () {
                 t.removeEventListener("resize", e);
                 h || (window.removeEventListener("resize", e), window.removeEventListener("scroll", e));
                 t.removeEventListener("resize", s);
                 t.removeEventListener("scroll", s);
                 this.$super.destroy.apply(this, arguments)
              }, f
           });
           o = function (n, t) {
              function d() {
                 o._indicators.updateBoundsPositions(f)
              }
              var h, o, f = this,
                 s = r.bounds(),
                 a = r.start(t.colorStart),
                 l = r.end(t.colorEnd),
                 c = t.parent && i.get.elements(t.parent)[0],
                 v = function () {
                    n._log && (Array.prototype.splice.call(arguments, 1, 0, "(" + u + ")", "->"), n._log.apply(this, arguments))
                 };
              t.name = t.name || e;
              a.firstChild.textContent += " " + t.name;
              l.textContent += " " + t.name;
              s.appendChild(a);
              s.appendChild(l);
              f.options = t;
              f.bounds = s;
              f.triggerGroup = void 0;
              this.add = function () {
                 o = n.controller();
                 h = o.info("vertical");
                 var t = o.info("isDocument");
                 c || (c = t ? document.body : o.info("container"));
                 t || "static" !== i.css(c, "position") || i.css(c, {
                    position: "relative"
                 });
                 n.on("change.plugin_addIndicators", p);
                 n.on("shift.plugin_addIndicators", y);
                 k();
                 w();
                 setTimeout(d, 0);
                 v(3, "added indicators")
              };
              this.remove = function () {
                 if (f.triggerGroup) {
                    if (n.off("change.plugin_addIndicators", p), n.off("shift.plugin_addIndicators", y), f.triggerGroup.members.length > 1) {
                       var t = f.triggerGroup;
                       t.members.splice(t.members.indexOf(f), 1);
                       o._indicators.updateTriggerGroupLabel(t);
                       o._indicators.updateTriggerGroupPositions(t);
                       f.triggerGroup = void 0
                    } else b();
                    g();
                    v(3, "removed indicators")
                 }
              };
              var y = function () {
                    w()
                 },
                 p = function (n) {
                    "triggerHook" === n.what && k()
                 },
                 g = function () {
                    s.parentNode.removeChild(s)
                 },
                 w = function () {
                    var r, u;
                    s.parentNode !== c && (r = o.info("vertical"), i.css(a.firstChild, {
                       "border-bottom-width": r ? 1 : 0,
                       "border-right-width": r ? 0 : 1,
                       bottom: r ? -1 : t.indent,
                       right: r ? t.indent : -1,
                       padding: r ? "0 8px" : "2px 4px"
                    }), i.css(l, {
                       "border-top-width": r ? 1 : 0,
                       "border-left-width": r ? 0 : 1,
                       top: r ? "100%" : "",
                       right: r ? t.indent : "",
                       bottom: r ? "" : t.indent,
                       left: r ? "" : "100%",
                       padding: r ? "0 8px" : "2px 4px"
                    }), c.appendChild(s));
                    u = {};
                    u[h ? "top" : "left"] = n.triggerPosition();
                    u[h ? "height" : "width"] = n.duration();
                    i.css(s, u);
                    i.css(l, {
                       display: n.duration() > 0 ? "" : "none"
                    })
                 },
                 b = function () {
                    o._indicators.groups.splice(o._indicators.groups.indexOf(f.triggerGroup), 1);
                    f.triggerGroup.element.parentNode.removeChild(f.triggerGroup.element);
                    f.triggerGroup = void 0
                 },
                 k = function () {
                    var e = n.triggerHook(),
                       u, s, c;
                    if (!(f.triggerGroup && Math.abs(f.triggerGroup.triggerHook - e) < .0001)) {
                       for (s = o._indicators.groups, c = s.length; c--;)
                          if (u = s[c], Math.abs(u.triggerHook - e) < .0001) return f.triggerGroup && (1 === f.triggerGroup.members.length ? b() : (f.triggerGroup.members.splice(f.triggerGroup.members.indexOf(f), 1), o._indicators.updateTriggerGroupLabel(f.triggerGroup), o._indicators.updateTriggerGroupPositions(f.triggerGroup))), u.members.push(f), f.triggerGroup = u, void o._indicators.updateTriggerGroupLabel(u);
                       if (f.triggerGroup) {
                          if (1 === f.triggerGroup.members.length) return f.triggerGroup.triggerHook = e, void o._indicators.updateTriggerGroupPositions(f.triggerGroup);
                          f.triggerGroup.members.splice(f.triggerGroup.members.indexOf(f), 1);
                          o._indicators.updateTriggerGroupLabel(f.triggerGroup);
                          o._indicators.updateTriggerGroupPositions(f.triggerGroup);
                          f.triggerGroup = void 0
                       }! function () {
                          var e = r.trigger(t.colorTrigger),
                             s = {},
                             u;
                          s[h ? "right" : "bottom"] = 0;
                          s[h ? "border-top-width" : "border-left-width"] = 1;
                          i.css(e.firstChild, s);
                          i.css(e.firstChild.firstChild, {
                             padding: h ? "0 8px 3px 8px" : "3px 4px"
                          });
                          document.body.appendChild(e);
                          u = {
                             triggerHook: n.triggerHook(),
                             element: e,
                             members: [f]
                          };
                          o._indicators.groups.push(u);
                          f.triggerGroup = u;
                          o._indicators.updateTriggerGroupLabel(u);
                          o._indicators.updateTriggerGroupPositions(u)
                       }()
                    }
                 }
           };
           r = {
              start: function (n) {
                 var r = document.createElement("div"),
                    t;
                 return r.textContent = "start", i.css(r, {
                    position: "absolute",
                    overflow: "visible",
                    "border-width": 0,
                    "border-style": "solid",
                    color: n,
                    "border-color": n
                 }), t = document.createElement("div"), i.css(t, {
                    position: "absolute",
                    overflow: "visible",
                    width: 0,
                    height: 0
                 }), t.appendChild(r), t
              },
              end: function (n) {
                 var t = document.createElement("div");
                 return t.textContent = "end", i.css(t, {
                    position: "absolute",
                    overflow: "visible",
                    "border-width": 0,
                    "border-style": "solid",
                    color: n,
                    "border-color": n
                 }), t
              },
              bounds: function () {
                 var n = document.createElement("div");
                 return i.css(n, {
                    position: "absolute",
                    overflow: "visible",
                    "white-space": "nowrap",
                    "pointer-events": "none",
                    "font-size": "0.85em"
                 }), n.style.zIndex = "9999", n
              },
              trigger: function (n) {
                 var u = document.createElement("div"),
                    r, t;
                 return u.textContent = "trigger", i.css(u, {
                    position: "relative"
                 }), r = document.createElement("div"), i.css(r, {
                    position: "absolute",
                    overflow: "visible",
                    "border-width": 0,
                    "border-style": "solid",
                    color: n,
                    "border-color": n
                 }), r.appendChild(u), t = document.createElement("div"), i.css(t, {
                    position: "fixed",
                    overflow: "visible",
                    "white-space": "nowrap",
                    "pointer-events": "none",
                    "font-size": "0.85em"
                 }), t.style.zIndex = "9999", t.appendChild(r), t
              }
           }
        })((n = window).ScrollMagic || n.jQuery && n.jQuery.ScrollMagic)
     },
     5: function (n) {
        n.exports = Backbone
     },
     7: function (n, t, i) {
        "use strict";
  
        function e(n, t) {
           for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
        }
  
        function r(n, t) {
           Object(f.b)(n, t) < 0 && t.push(n)
        }
  
        function u(n, t) {
           var i = Object(f.b)(n, t);
           i > -1 && t.splice(i, 1)
        }
  
        function o(n) {
           return n()
        }
  
        function s(n) {
           return n()
        }
  
        function h(n) {
           return n()
        }
  
        function c(n) {
           return n()
        }
  
        function l(n) {
           return n()
        }
  
        function a() {
           return this.mql.widedesktop.matches
        }
  
        function v() {
           return this.mql.desktop.matches
        }
  
        function y() {
           return this.mql.tablet.matches
        }
  
        function p() {
           return !this.mql.tablet.matches
        }
  
        function w() {
           return !this.mql.desktop.matches
        }
        var f = i(1);
        t.a = function (n) {
           function d(n) {
              var u, i, f, r;
              if (n.matches)
                 for (u = o, i = 0; i <= t.length - 1; i++) u(t[i], i, t);
              else
                 for (f = s, r = 0; r <= k.length - 1; r++) f(k[r], r, k)
           }
  
           function g(n) {
              var u, t, e, r;
              if (n.matches)
                 for (u = h, t = 0; t <= f.length - 1; t++) u(f[t], t, f);
              else
                 for (e = c, r = 0; r <= i.length - 1; r++) e(i[r], r, i)
           }
  
           function nt(n) {
              if (n.matches)
                 for (var i = l, t = 0; t <= b.length - 1; t++) i(b[t], t, b)
           }
  
           function tt(n, t) {
              t && this.mql.widedesktop.matches && n();
              r(n, b)
           }
  
           function it(n, i) {
              i && this.mql.desktop.matches && n();
              r(n, t)
           }
  
           function rt(n, t) {
              t && this.mql.desktop.matches && n();
              r(n, f)
           }
  
           function ut(n, t) {
              t && !this.mql.desktop.matches && n();
              r(n, i)
           }
  
           function ft(n, t) {
              t && !this.mql.desktop.matches && n();
              r(n, k)
           }
  
           function et(n) {
              u(n, b)
           }
  
           function ot(n) {
              u(n, t)
           }
  
           function st(n) {
              u(n, f)
           }
  
           function ht(n) {
              u(n, i)
           }
  
           function ct(n) {
              u(n, k)
           }
           var t = [],
              i = [],
              f = [],
              b = [],
              k = [];
           return new(function () {
              function i() {
                 ! function (n, t) {
                    if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
                 }(this, i);
                 this.mql = {
                    tablet: n.matchMedia("screen and (min-width: 1080px)"),
                    desktop: n.matchMedia("screen and (min-width: 1080px)"),
                    widedesktop: n.matchMedia("screen and (min-width: 1080px)")
                 };
                 this.mql.desktop.addListener(d);
                 this.mql.tablet.addListener(g);
                 this.mql.widedesktop.addListener(nt)
              }
              var t, r, u;
              return t = i, (r = [{
                 key: "matchWideDesktop",
                 value: tt
              }, {
                 key: "matchDesktop",
                 value: it
              }, {
                 key: "matchTablet",
                 value: rt
              }, {
                 key: "matchMobile",
                 value: ut
              }, {
                 key: "matchHandheld",
                 value: ft
              }, {
                 key: "removeWideDesktop",
                 value: et
              }, {
                 key: "removeDesktop",
                 value: ot
              }, {
                 key: "removeTablet",
                 value: st
              }, {
                 key: "removeMobile",
                 value: ht
              }, {
                 key: "removeHandheld",
                 value: ct
              }, {
                 key: "isWideDesktop",
                 value: a
              }, {
                 key: "isDesktop",
                 value: v
              }, {
                 key: "isTablet",
                 value: y
              }, {
                 key: "isMobile",
                 value: p
              }, {
                 key: "isHandheld",
                 value: w
              }]) && e(t.prototype, r), u && e(t, u), Object.defineProperty(t, "prototype", {
                 writable: !1
              }), i
           }())
        }(window)
     },
     8: function (n, t, i) {
        "use strict";
        i.d(t, "b", function () {
           return r
        });
        i.d(t, "a", function () {
           return u
        });
        i(35);
        i(47);
        i(48);
        window.scrollController = window.ScrollController || new window.ScrollMagic.Controller({
           globalSceneOptions: {
              triggerHook: "onLeave"
           }
        });
        var r = window.scrollController,
           u = window.ScrollMagic.Scene;
        r.scrollTo(function (n, t) {
           window.scroll({
              top: t ? n + t : n,
              behavior: "smooth"
           })
        })
     },
     95: function (n, t, i) {
        "use strict";
        (function (n, i) {
           function it(n, t) {
              if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
           }
  
           function p(n, t) {
              for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
           }
  
           function b(n, t) {
              return 0 === n.indexOf(t.toLowerCase()) ? n : "".concat(t.toLowerCase()).concat(n.substr(0, 1).toUpperCase()).concat(n.substr(1))
           }
  
           function rt(n) {
              return Boolean(n && 1 === n.nodeType && "nodeName" in n && n.ownerDocument && n.ownerDocument.defaultView)
           }
  
           function ut(n) {
              return !isNaN(parseFloat(n)) && isFinite(n) && Math.floor(n) == n
           }
  
           function o(n) {
              return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(n)
           }
  
           function k() {
              var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                 t = i.id,
                 r = i.url,
                 n = t || r;
              if (!n) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
              if (ut(n)) return "https://vimeo.com/".concat(n);
              if (o(n)) return n.replace("http:", "https:");
              if (t) throw new TypeError("“".concat(t, "” is not a valid video id."));
              throw new TypeError("“".concat(n, "” is not a vimeo.com url."));
           }
  
           function s(n, t, i) {
              var r = u.get(n.element) || {};
              t in r || (r[t] = []);
              r[t].push(i);
              u.set(n.element, r)
           }
  
           function c(n, t) {
              return (u.get(n.element) || {})[t] || []
           }
  
           function l(n, t, i) {
              var r = u.get(n.element) || {},
                 f;
              return r[t] ? i ? (f = r[t].indexOf(i), -1 !== f && r[t].splice(f, 1), u.set(n.element, r), r[t] && 0 === r[t].length) : (r[t] = [], u.set(n.element, r), !0) : !0
           }
  
           function ot(n, t) {
              var i = u.get(n);
              u.set(t, i);
              u.delete(n)
           }
  
           function g(n) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return d.reduce(function (t, i) {
                 var r = n.getAttribute("data-vimeo-".concat(i));
                 return (r || "" === r) && (t[i] = "" === r ? 1 : r), t
              }, t)
           }
  
           function v(n, t) {
              var r = n.html,
                 i;
              if (!t) throw new TypeError("An element must be provided");
              return null !== t.getAttribute("data-vimeo-initialized") ? t.querySelector("iframe") : (i = document.createElement("div"), i.innerHTML = r, t.appendChild(i.firstChild), t.setAttribute("data-vimeo-initialized", "true"), t.querySelector("iframe"))
           }
  
           function nt(n) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                 i = arguments.length > 2 ? arguments[2] : void 0;
              return new Promise(function (r, u) {
                 var s, e, f;
                 if (!o(n)) throw new TypeError("“".concat(n, "” is not a vimeo.com url."));
                 s = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(n));
                 for (e in t) t.hasOwnProperty(e) && (s += "&".concat(e, "=").concat(encodeURIComponent(t[e])));
                 f = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
                 f.open("GET", s, !0);
                 f.onload = function () {
                    if (404 !== f.status)
                       if (403 !== f.status) try {
                          var t = JSON.parse(f.responseText);
                          if (403 === t.domain_status_code) return v(t, i), void u(new Error("“".concat(n, "” is not embeddable.")));
                          r(t)
                       } catch (n) {
                          u(n)
                       } else u(new Error("“".concat(n, "” is not embeddable.")));
                       else u(new Error("“".concat(n, "” was not found.")))
                 };
                 f.onerror = function () {
                    var n = f.status ? " (".concat(f.status, ")") : "";
                    u(new Error("There was an error fetching the embed code from Vimeo".concat(n, ".")))
                 };
                 f.send()
              })
           }
  
           function tt(n) {
              if ("string" == typeof n) try {
                 n = JSON.parse(n)
              } catch (n) {
                 return console.warn(n), {}
              }
              return n
           }
  
           function h(n, t, i) {
              var r, u;
              n.element.contentWindow && n.element.contentWindow.postMessage && (r = {
                 method: t
              }, void 0 !== i && (r.value = i), u = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1")), u >= 8 && u < 10 && (r = JSON.stringify(r)), n.element.contentWindow.postMessage(r, n.origin))
           }
  
           function st(n, t) {
              var i, r = [],
                 u;
              (t = tt(t)).event ? ("error" === t.event && c(n, t.data.method).forEach(function (i) {
                 var r = new Error(t.data.message);
                 r.name = t.data.name;
                 i.reject(r);
                 l(n, t.data.method, i)
              }), r = c(n, "event:".concat(t.event)), i = t.data) : t.method && (u = function (n, t) {
                 var r = c(n, t),
                    i;
                 return r.length < 1 ? !1 : (i = r.shift(), l(n, t, i), i)
              }(n, t.method), u && (r.push(u), i = t.value));
              r.forEach(function (t) {
                 try {
                    if ("function" == typeof t) return void t.call(n, i);
                    t.resolve(i)
                 } catch (n) {}
              })
           }
           var w = void 0 !== n && "[object global]" === {}.toString.call(n),
              ft = void 0 !== Array.prototype.indexOf,
              et = "undefined" != typeof window && void 0 !== window.postMessage,
              a, f, u, d;
           if (!(w || ft && et)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
           a = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n ? n : "undefined" != typeof self ? self : {};
           ! function (n) {
              function i(n) {
                 return Object(n) === n
              }
              if (!n.WeakMap) {
                 var r = Object.prototype.hasOwnProperty,
                    u = Object.defineProperty && function () {
                       try {
                          return 1 === Object.defineProperty({}, "x", {
                             value: 1
                          }).x
                       } catch (n) {}
                    }(),
                    t = function (n, t, i) {
                       u ? Object.defineProperty(n, t, {
                          configurable: !0,
                          writable: !0,
                          value: i
                       }) : n[t] = i
                    };
                 n.WeakMap = function () {
                    function n() {
                       if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'");
                       if (t(this, "_id", e("_WeakMap")), arguments.length > 0) throw new TypeError("WeakMap iterable is not supported");
                    }
  
                    function u(n, t) {
                       if (!i(n) || !r.call(n, "_id")) throw new TypeError(t + " method called on incompatible receiver " + typeof n);
                    }
  
                    function e(n) {
                       return n + "_" + f() + "." + f()
                    }
  
                    function f() {
                       return Math.random().toString().substring(2)
                    }
                    return t(n.prototype, "delete", function (n) {
                       if (u(this, "delete"), !i(n)) return !1;
                       var t = n[this._id];
                       return !(!t || t[0] !== n) && (delete n[this._id], !0)
                    }), t(n.prototype, "get", function (n) {
                       if (u(this, "get"), i(n)) {
                          var t = n[this._id];
                          return t && t[0] === n ? t[1] : void 0
                       }
                    }), t(n.prototype, "has", function (n) {
                       if (u(this, "has"), !i(n)) return !1;
                       var t = n[this._id];
                       return !(!t || t[0] !== n)
                    }), t(n.prototype, "set", function (n, r) {
                       if (u(this, "set"), !i(n)) throw new TypeError("Invalid value used as weak map key");
                       var f = n[this._id];
                       return f && f[0] === n ? (f[1] = r, this) : (t(n, this._id, [n, r]), this)
                    }), t(n, "_polyfill", !0), n
                 }()
              }
           }("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : a);
           f = function (n, t) {
              return n(t = {
                 exports: {}
              }, t.exports), t.exports
           }(function (n) {
              var t, r, u;
              u = function () {
                 function u(n, t) {
                    e.add(n, t);
                    f || (f = y(e.drain))
                 }
  
                 function c(n) {
                    var t, i = typeof n;
                    return null == n || "object" != i && "function" != i || (t = n.then), "function" == typeof t && t
                 }
  
                 function o() {
                    for (var n = 0; n < this.chain.length; n++) p(this, 1 === this.state ? this.chain[n].success : this.chain[n].failure, this.chain[n]);
                    this.chain.length = 0
                 }
  
                 function p(n, t, i) {
                    var r, u;
                    try {
                       !1 === t ? i.reject(n.msg) : (r = !0 === t ? n.msg : t.call(void 0, n.msg)) === i.promise ? i.reject(TypeError("Promise-chain cycle")) : (u = c(r)) ? u.call(r, i.resolve, i.reject) : i.resolve(r)
                    } catch (n) {
                       i.reject(n)
                    }
                 }
  
                 function l(n) {
                    var i, t = this;
                    if (!t.triggered) {
                       t.triggered = !0;
                       t.def && (t = t.def);
                       try {
                          (i = c(n)) ? u(function () {
                             var u = new v(t);
                             try {
                                i.call(n, function () {
                                   l.apply(u, arguments)
                                }, function () {
                                   r.apply(u, arguments)
                                })
                             } catch (n) {
                                r.call(u, n)
                             }
                          }): (t.msg = n, t.state = 1, t.chain.length > 0 && u(o, t))
                       } catch (n) {
                          r.call(new v(t), n)
                       }
                    }
                 }
  
                 function r(n) {
                    var t = this;
                    t.triggered || (t.triggered = !0, t.def && (t = t.def), t.msg = n, t.state = 2, t.chain.length > 0 && u(o, t))
                 }
  
                 function a(n, t, i, r) {
                    for (var u = 0; u < t.length; u++) ! function (u) {
                       n.resolve(t[u]).then(function (n) {
                          i(u, n)
                       }, r)
                    }(u)
                 }
  
                 function v(n) {
                    this.def = n;
                    this.triggered = !1
                 }
  
                 function w(n) {
                    this.promise = n;
                    this.state = 0;
                    this.triggered = !1;
                    this.chain = [];
                    this.msg = void 0
                 }
  
                 function t(n) {
                    if ("function" != typeof n) throw TypeError("Not a function");
                    if (0 !== this.__NPO__) throw TypeError("Not a promise");
                    this.__NPO__ = 1;
                    var t = new w(this);
                    this.then = function (n, i) {
                       var r = {
                          success: "function" != typeof n || n,
                          failure: "function" == typeof i && i
                       };
                       return r.promise = new this.constructor(function (n, t) {
                          if ("function" != typeof n || "function" != typeof t) throw TypeError("Not a function");
                          r.resolve = n;
                          r.reject = t
                       }), t.chain.push(r), 0 !== t.state && u(o, t), r.promise
                    };
                    this.catch = function (n) {
                       return this.then(void 0, n)
                    };
                    try {
                       n.call(void 0, function (n) {
                          l.call(t, n)
                       }, function (n) {
                          r.call(t, n)
                       })
                    } catch (n) {
                       r.call(t, n)
                    }
                 }
                 var n, f, e, h = Object.prototype.toString,
                    y = void 0 !== i ? function (n) {
                       return i(n)
                    } : setTimeout,
                    s;
                 try {
                    Object.defineProperty({}, "x", {});
                    n = function (n, t, i, r) {
                       return Object.defineProperty(n, t, {
                          value: i,
                          writable: !0,
                          configurable: !1 !== r
                       })
                    }
                 } catch (f) {
                    n = function (n, t, i) {
                       return n[t] = i, n
                    }
                 }
                 return e = function () {
                    function r(n, t) {
                       this.fn = n;
                       this.self = t;
                       this.next = void 0
                    }
                    var i, t, n;
                    return {
                       add: function (u, f) {
                          n = new r(u, f);
                          t ? t.next = n : i = n;
                          t = n;
                          n = void 0
                       },
                       drain: function () {
                          var n = i;
                          for (i = t = f = void 0; n;) n.fn.call(n.self), n = n.next
                       }
                    }
                 }(), s = n({}, "constructor", t, !1), t.prototype = s, n(s, "__NPO__", 0, !1), n(t, "resolve", function (n) {
                    return n && "object" == typeof n && 1 === n.__NPO__ ? n : new this(function (t, i) {
                       if ("function" != typeof t || "function" != typeof i) throw TypeError("Not a function");
                       t(n)
                    })
                 }), n(t, "reject", function (n) {
                    return new this(function (t, i) {
                       if ("function" != typeof t || "function" != typeof i) throw TypeError("Not a function");
                       i(n)
                    })
                 }), n(t, "all", function (n) {
                    var t = this;
                    return "[object Array]" != h.call(n) ? t.reject(TypeError("Not an array")) : 0 === n.length ? t.resolve([]) : new t(function (i, r) {
                       if ("function" != typeof i || "function" != typeof r) throw TypeError("Not a function");
                       var u = n.length,
                          f = Array(u),
                          e = 0;
                       a(t, n, function (n, t) {
                          f[n] = t;
                          ++e === u && i(f)
                       }, r)
                    })
                 }), n(t, "race", function (n) {
                    var t = this;
                    return "[object Array]" != h.call(n) ? t.reject(TypeError("Not an array")) : new t(function (i, r) {
                       if ("function" != typeof i || "function" != typeof r) throw TypeError("Not a function");
                       a(t, n, function (n, t) {
                          i(t)
                       }, r)
                    })
                 }), t
              };
              (r = a)[t = "Promise"] = r[t] || u();
              n.exports && (n.exports = r[t])
           });
           u = new WeakMap;
           d = ["autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "keyboard", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];
           var e = new WeakMap,
              y = new WeakMap,
              r = {},
              ht = function () {
                 function n(t) {
                    var i = this,
                       p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                       u, a, c;
                    if (it(this, n), window.jQuery && t instanceof jQuery && (t.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), t = t[0]), "undefined" != typeof document && "string" == typeof t && (t = document.getElementById(t)), !rt(t)) throw new TypeError("You must pass either a valid element or a valid id.");
                    if ("IFRAME" !== t.nodeName && (u = t.querySelector("iframe"), u && (t = u)), "IFRAME" === t.nodeName && !o(t.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
                    return e.has(t) ? e.get(t) : (this._window = t.ownerDocument.defaultView, this.element = t, this.origin = "*", a = new f(function (n, r) {
                       if (i._onMessage = function (t) {
                             var u, f, e, s;
                             if (o(t.origin) && i.element.contentWindow === t.source) {
                                if ("*" === i.origin && (i.origin = t.origin), u = tt(t.data), u && "error" === u.event && u.data && "ready" === u.data.method) return f = new Error(u.data.message), f.name = u.data.name, void r(f);
                                if (e = u && "ready" === u.event, s = u && "ping" === u.method, e || s) return i.element.setAttribute("data-ready", "true"), void n();
                                st(i, u)
                             }
                          }, i._window.addEventListener("message", i._onMessage), "IFRAME" !== i.element.nodeName) {
                          var u = g(t, p);
                          nt(k(u), u, t).then(function (n) {
                             var r = v(n, t);
                             return i.element = r, i._originalElement = t, ot(t, r), e.set(i.element, i), n
                          }).catch(r)
                       }
                    }), (y.set(this, a), e.set(this.element, this), "IFRAME" === this.element.nodeName && h(this, "ping"), r.isEnabled) && (c = function () {
                       return r.exit()
                    }, this.fullscreenchangeHandler = function () {
                       r.isFullscreen ? s(i, "event:exitFullscreen", c) : l(i, "event:exitFullscreen", c);
                       i.ready().then(function () {
                          h(i, "fullscreenchange", r.isFullscreen)
                       })
                    }, r.on("fullscreenchange", this.fullscreenchangeHandler)), this)
                 }
                 var t, i, u;
                 return t = n, (i = [{
                    key: "callMethod",
                    value: function (n) {
                       var t = this,
                          i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                       return new f(function (r, u) {
                          return t.ready().then(function () {
                             s(t, n, {
                                resolve: r,
                                reject: u
                             });
                             h(t, n, i)
                          }).catch(u)
                       })
                    }
                 }, {
                    key: "get",
                    value: function (n) {
                       var t = this;
                       return new f(function (i, r) {
                          return n = b(n, "get"), t.ready().then(function () {
                             s(t, n, {
                                resolve: i,
                                reject: r
                             });
                             h(t, n)
                          }).catch(r)
                       })
                    }
                 }, {
                    key: "set",
                    value: function (n, t) {
                       var i = this;
                       return new f(function (r, u) {
                          if (n = b(n, "set"), null == t) throw new TypeError("There must be a value to set.");
                          return i.ready().then(function () {
                             s(i, n, {
                                resolve: r,
                                reject: u
                             });
                             h(i, n, t)
                          }).catch(u)
                       })
                    }
                 }, {
                    key: "on",
                    value: function (n, t) {
                       if (!n) throw new TypeError("You must pass an event name.");
                       if (!t) throw new TypeError("You must pass a callback function.");
                       if ("function" != typeof t) throw new TypeError("The callback must be a function.");
                       0 === c(this, "event:".concat(n)).length && this.callMethod("addEventListener", n).catch(function () {});
                       s(this, "event:".concat(n), t)
                    }
                 }, {
                    key: "off",
                    value: function (n, t) {
                       if (!n) throw new TypeError("You must pass an event name.");
                       if (t && "function" != typeof t) throw new TypeError("The callback must be a function.");
                       l(this, "event:".concat(n), t) && this.callMethod("removeEventListener", n).catch(function () {})
                    }
                 }, {
                    key: "loadVideo",
                    value: function (n) {
                       return this.callMethod("loadVideo", n)
                    }
                 }, {
                    key: "ready",
                    value: function () {
                       var n = y.get(this) || new f(function (n, t) {
                          t(new Error("Unknown player. Probably unloaded."))
                       });
                       return f.resolve(n)
                    }
                 }, {
                    key: "addCuePoint",
                    value: function (n) {
                       var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                       return this.callMethod("addCuePoint", {
                          time: n,
                          data: t
                       })
                    }
                 }, {
                    key: "removeCuePoint",
                    value: function (n) {
                       return this.callMethod("removeCuePoint", n)
                    }
                 }, {
                    key: "enableTextTrack",
                    value: function (n, t) {
                       if (!n) throw new TypeError("You must pass a language.");
                       return this.callMethod("enableTextTrack", {
                          language: n,
                          kind: t
                       })
                    }
                 }, {
                    key: "disableTextTrack",
                    value: function () {
                       return this.callMethod("disableTextTrack")
                    }
                 }, {
                    key: "pause",
                    value: function () {
                       return this.callMethod("pause")
                    }
                 }, {
                    key: "play",
                    value: function () {
                       return this.callMethod("play")
                    }
                 }, {
                    key: "requestFullscreen",
                    value: function () {
                       return r.isEnabled ? r.request(this.element) : this.callMethod("requestFullscreen")
                    }
                 }, {
                    key: "exitFullscreen",
                    value: function () {
                       return r.isEnabled ? r.exit() : this.callMethod("exitFullscreen")
                    }
                 }, {
                    key: "getFullscreen",
                    value: function () {
                       return r.isEnabled ? f.resolve(r.isFullscreen) : this.get("fullscreen")
                    }
                 }, {
                    key: "requestPictureInPicture",
                    value: function () {
                       return this.callMethod("requestPictureInPicture")
                    }
                 }, {
                    key: "exitPictureInPicture",
                    value: function () {
                       return this.callMethod("exitPictureInPicture")
                    }
                 }, {
                    key: "getPictureInPicture",
                    value: function () {
                       return this.get("pictureInPicture")
                    }
                 }, {
                    key: "unload",
                    value: function () {
                       return this.callMethod("unload")
                    }
                 }, {
                    key: "destroy",
                    value: function () {
                       var n = this;
                       return new f(function (t) {
                          if (y.delete(n), e.delete(n.element), n._originalElement && (e.delete(n._originalElement), n._originalElement.removeAttribute("data-vimeo-initialized")), n.element && "IFRAME" === n.element.nodeName && n.element.parentNode && (n.element.parentNode.parentNode && n._originalElement && n._originalElement !== n.element.parentNode ? n.element.parentNode.parentNode.removeChild(n.element.parentNode) : n.element.parentNode.removeChild(n.element)), n.element && "DIV" === n.element.nodeName && n.element.parentNode) {
                             n.element.removeAttribute("data-vimeo-initialized");
                             var i = n.element.querySelector("iframe");
                             i && i.parentNode && (i.parentNode.parentNode && n._originalElement && n._originalElement !== i.parentNode ? i.parentNode.parentNode.removeChild(i.parentNode) : i.parentNode.removeChild(i))
                          }
                          n._window.removeEventListener("message", n._onMessage);
                          r.isEnabled && r.off("fullscreenchange", n.fullscreenchangeHandler);
                          t()
                       })
                    }
                 }, {
                    key: "getAutopause",
                    value: function () {
                       return this.get("autopause")
                    }
                 }, {
                    key: "setAutopause",
                    value: function (n) {
                       return this.set("autopause", n)
                    }
                 }, {
                    key: "getBuffered",
                    value: function () {
                       return this.get("buffered")
                    }
                 }, {
                    key: "getCameraProps",
                    value: function () {
                       return this.get("cameraProps")
                    }
                 }, {
                    key: "setCameraProps",
                    value: function (n) {
                       return this.set("cameraProps", n)
                    }
                 }, {
                    key: "getChapters",
                    value: function () {
                       return this.get("chapters")
                    }
                 }, {
                    key: "getCurrentChapter",
                    value: function () {
                       return this.get("currentChapter")
                    }
                 }, {
                    key: "getColor",
                    value: function () {
                       return this.get("color")
                    }
                 }, {
                    key: "setColor",
                    value: function (n) {
                       return this.set("color", n)
                    }
                 }, {
                    key: "getCuePoints",
                    value: function () {
                       return this.get("cuePoints")
                    }
                 }, {
                    key: "getCurrentTime",
                    value: function () {
                       return this.get("currentTime")
                    }
                 }, {
                    key: "setCurrentTime",
                    value: function (n) {
                       return this.set("currentTime", n)
                    }
                 }, {
                    key: "getDuration",
                    value: function () {
                       return this.get("duration")
                    }
                 }, {
                    key: "getEnded",
                    value: function () {
                       return this.get("ended")
                    }
                 }, {
                    key: "getLoop",
                    value: function () {
                       return this.get("loop")
                    }
                 }, {
                    key: "setLoop",
                    value: function (n) {
                       return this.set("loop", n)
                    }
                 }, {
                    key: "setMuted",
                    value: function (n) {
                       return this.set("muted", n)
                    }
                 }, {
                    key: "getMuted",
                    value: function () {
                       return this.get("muted")
                    }
                 }, {
                    key: "getPaused",
                    value: function () {
                       return this.get("paused")
                    }
                 }, {
                    key: "getPlaybackRate",
                    value: function () {
                       return this.get("playbackRate")
                    }
                 }, {
                    key: "setPlaybackRate",
                    value: function (n) {
                       return this.set("playbackRate", n)
                    }
                 }, {
                    key: "getPlayed",
                    value: function () {
                       return this.get("played")
                    }
                 }, {
                    key: "getQualities",
                    value: function () {
                       return this.get("qualities")
                    }
                 }, {
                    key: "getQuality",
                    value: function () {
                       return this.get("quality")
                    }
                 }, {
                    key: "setQuality",
                    value: function (n) {
                       return this.set("quality", n)
                    }
                 }, {
                    key: "getSeekable",
                    value: function () {
                       return this.get("seekable")
                    }
                 }, {
                    key: "getSeeking",
                    value: function () {
                       return this.get("seeking")
                    }
                 }, {
                    key: "getTextTracks",
                    value: function () {
                       return this.get("textTracks")
                    }
                 }, {
                    key: "getVideoEmbedCode",
                    value: function () {
                       return this.get("videoEmbedCode")
                    }
                 }, {
                    key: "getVideoId",
                    value: function () {
                       return this.get("videoId")
                    }
                 }, {
                    key: "getVideoTitle",
                    value: function () {
                       return this.get("videoTitle")
                    }
                 }, {
                    key: "getVideoWidth",
                    value: function () {
                       return this.get("videoWidth")
                    }
                 }, {
                    key: "getVideoHeight",
                    value: function () {
                       return this.get("videoHeight")
                    }
                 }, {
                    key: "getVideoUrl",
                    value: function () {
                       return this.get("videoUrl")
                    }
                 }, {
                    key: "getVolume",
                    value: function () {
                       return this.get("volume")
                    }
                 }, {
                    key: "setVolume",
                    value: function (n) {
                       return this.set("volume", n)
                    }
                 }]) && p(t.prototype, i), u && p(t, u), n
              }();
           w || (r = function () {
              var n = function () {
                    for (var t, i = [
                          ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                          ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                          ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                          ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                          ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                       ], n = 0, u = i.length, r = {}; n < u; n++)
                       if ((t = i[n]) && t[1] in document) {
                          for (n = 0; n < t.length; n++) r[i[0][n]] = t[n];
                          return r
                       } return !1
                 }(),
                 i = {
                    fullscreenchange: n.fullscreenchange,
                    fullscreenerror: n.fullscreenerror
                 },
                 t = {
                    request: function (i) {
                       return new Promise(function (r, u) {
                          var e = function n() {
                                t.off("fullscreenchange", n);
                                r()
                             },
                             f;
                          t.on("fullscreenchange", e);
                          f = (i = i || document.documentElement)[n.requestFullscreen]();
                          f instanceof Promise && f.then(e).catch(u)
                       })
                    },
                    exit: function () {
                       return new Promise(function (i, r) {
                          var u, f;
                          if (t.isFullscreen) {
                             u = function n() {
                                t.off("fullscreenchange", n);
                                i()
                             };
                             t.on("fullscreenchange", u);
                             f = document[n.exitFullscreen]();
                             f instanceof Promise && f.then(u).catch(r)
                          } else i()
                       })
                    },
                    on: function (n, t) {
                       var r = i[n];
                       r && document.addEventListener(r, t)
                    },
                    off: function (n, t) {
                       var r = i[n];
                       r && document.removeEventListener(r, t)
                    }
                 };
              return Object.defineProperties(t, {
                 isFullscreen: {
                    get: function () {
                       return Boolean(document[n.fullscreenElement])
                    }
                 },
                 element: {
                    enumerable: !0,
                    get: function () {
                       return document[n.fullscreenElement]
                    }
                 },
                 isEnabled: {
                    enumerable: !0,
                    get: function () {
                       return Boolean(document[n.fullscreenEnabled])
                    }
                 }
              }), t
           }(), function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                 i = [].slice.call(t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
                 n = function (n) {
                    "console" in window && console.error && console.error("There was an error creating an embed: ".concat(n))
                 };
              i.forEach(function (t) {
                 try {
                    if (null !== t.getAttribute("data-vimeo-defer")) return;
                    var i = g(t);
                    nt(k(i), i, t).then(function (n) {
                       return v(n, t)
                    }).catch(n)
                 } catch (t) {
                    n(t)
                 }
              })
           }(), function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                 n;
              window.VimeoPlayerResizeEmbeds_ || (window.VimeoPlayerResizeEmbeds_ = !0, n = function (n) {
                 if (o(n.origin) && n.data && "spacechange" === n.data.event)
                    for (var r = t.querySelectorAll("iframe"), i = 0; i < r.length; i++)
                       if (r[i].contentWindow === n.source) {
                          r[i].parentElement.style.paddingBottom = "".concat(n.data.data[0].bottom, "px");
                          break
                       }
              }, window.addEventListener("message", n))
           }());
           t.a = ht
        }).call(this, i(27), i(105).setImmediate)
     },
     96: function (n, t, i) {
        "use strict";
  
        function k() {
           var n = this.figure,
              t;
           n && (t = .7 * n.offsetHeight, this.imageScene = new u.a({
              triggerElement: n,
              duration: t
           }).on("enter", function () {
              n.classList.contains("js-hero-summary") || n.classList.add("gold-bar-activate")
           }).on("leave", function () {
              n.classList.remove("gold-bar-activate")
           }).addTo(u.b), this.imageScene.triggerHook(.3))
        }
  
        function d() {
           var t = this,
              n = this.figure;
           n && !this.element.classList.contains("js-video-stand-alone") && (this.scene = new u.a({
              offset: 5,
              triggerElement: document.body
           }).on("enter", function () {
              t.player && t.player.autoplay || (n.classList.contains("js-hero-summary") ? n.classList.add("remove-padding") : n.classList.add("full-width"))
           }).on("leave", function () {
              n.classList.remove("full-width");
              n.classList.remove("remove-padding")
           }).addTo(u.b), this.scene.triggerHook(0))
        }
  
        function g() {
           var n = this,
              t = this.figure,
              i;
           t && !this.element.classList.contains("js-video-stand-alone") && (i = t.offsetHeight, this.resetScene = new u.a({
              duration: i,
              triggerElement: t
           }).on("enter", function (t) {
              "REVERSE" === t.scrollDirection && n.player && n.player.autoplay && n.play()
           }).on("leave", function (t) {
              "FORWARD" !== t.scrollDirection && n.player && n.player.autoplay || n.resetVideoOnPlay()
           }).addTo(u.b), this.resetScene.triggerHook(.2))
        }
  
        function nt() {
           var n = this,
              t = this.figure;
           u.b.removeScene(this.scene);
           u.b.removeScene(this.resetScene);
           t && (t.classList.remove("full-width"), this.scene = "", this.resetScene = "", setTimeout(function () {
              n.heroPoster && (n.createResetVideoScene(), n.createScene())
           }, 250))
        }
  
        function tt(n, t) {
           if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
  
        function s(n, t) {
           for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
        }
  
        function it(n) {
           var t = this;
           this.player.onloadedmetadata = function () {
              n(t.player.duration)
           };
           this.onVideoEnd && Object(f.t)(this.player, "ended", this.onVideoEnd)
        }
  
        function rt() {
           this.player.play()
        }
  
        function ut() {
           this.player.pause()
        }
  
        function ft() {}
  
        function et() {
           this.player.src = this.player.src
        }
  
        function ot(n) {
           this.player.paused || (this.player.pause(), n())
        }
  
        function st(n, t) {
           if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
  
        function c(n, t) {
           for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
        }
  
        function e(n, t, i) {
           return t in n ? Object.defineProperty(n, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
           }) : n[t] = i, n
        }
  
        function l(n) {
           var t = n;
           t.player = new window.YT.Player(t.componentPlayerId, {
              host: "https://www.youtube.com",
              height: "100%",
              width: "100%",
              videoId: t.id,
              events: {
                 onReady: t.onReady,
                 onStateChange: t.onStateChange
              },
              playerVars: {
                 modestbranding: 1,
                 disablekb: 1,
                 fs: 0,
                 iv_load_policy: 3,
                 rel: 0,
                 playsinline: 1,
                 showinfo: 0,
                 mute: t.autoplay ? 1 : 0
              }
           })
        }
  
        function ht(n) {
           var t = document.createElement("div");
           return t.classList.add("video-iframe-wrapper"), n.parentNode.insertBefore(t, n), t.appendChild(n), t
        }
  
        function ct() {
           Object(f.t)(this.wrapper, "click", this.togglePlay)
        }
  
        function lt() {
           this.player.playVideo()
        }
  
        function at() {
           this.player && this.player.pauseVideo && 1 === this.player.getPlayerState() && this.player.pauseVideo()
        }
  
        function vt() {
           this.player && this.player.seekTo && this.player.seekTo(0).stopVideo()
        }
  
        function yt() {
           this.player && this.player.seekTo && 1 === this.player.getPlayerState() && this.pause()
        }
  
        function pt(n, t) {
           if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
  
        function y(n, t) {
           for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
        }
  
        function wt(n, t, i) {
           return t in n ? Object.defineProperty(n, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
           }) : n[t] = i, n
        }
  
        function bt(n) {
           var t = document.createElement("div");
           return t.classList.add("video-iframe-wrapper"), n.parentNode.insertBefore(t, n), t.appendChild(n), t
        }
  
        function kt() {
           Object(f.t)(this.wrapper, "click", this.togglePlay);
           this.onVideoEnd && this.player.on("ended", this.onVideoEnd)
        }
  
        function dt() {
           this.player.play()
        }
  
        function gt() {
           var n = this;
           this.player.getPaused().then(function (t) {
              t || n.player.pause()
           })
        }
  
        function ni() {
           var n = this;
           this.player.getPaused().then(function (t) {
              t || (n.player.setCurrentTime(0), n.player.pause())
           })
        }
  
        function ti(n) {
           var t = this;
           this.player.getPaused().then(function (i) {
              i || (t.player.pause(), n())
           })
        }
  
        function w(n, t) {
           for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
        }
  
        function r(n, t, i) {
           return t in n ? Object.defineProperty(n, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
           }) : n[t] = i, n
        }
  
        function ii() {
           this.currentTime >= this.duration && (this.currentTime = 0, this.play())
        }
  
        function ri(n) {
           var i = document.querySelector("#header"),
              t = this;
           t.HeaderNav = i;
           t.element.player = t;
           t.accordion = null;
           t.switch = n.querySelector(".js-hero-switch");
           t.scene = null;
           t.resetScene = null;
           t.imageScene = null;
           t.duration = null;
           t.figure = n.querySelector(".js-hero-media-figure");
           t.videoPlayer = n.querySelector(".js-hero-player");
           t.embedVideoTime = n.querySelector(".js-hero-figure-time");
           t.heroPlayButton = n.querySelector(".js-hero-play-button");
           t.heroPoster = n.querySelector(".js-hero-poster");
           t.scrollArrow = n.querySelector(".js-scroll-arrow");
           t.player = t.buildPlayer();
           t.arrowDown = n.querySelector(".c-header-campaign__scroll-arrow");
           t.heroPoster ? (t.heroPosterVideo = t.heroPoster.getElementsByTagName("video")[0], this.createScene(), this.createResetVideoScene(), t.heroPosterVideo && (t.heroPosterVideo.addEventListener("timeupdate", ii), t.heroPosterVideo.click())) : this.createImageScene();
           t.switch && (t.iconMore = t.switch.querySelector(".js-hero-switch-title"), t.linksEl = t.switch.querySelector(".js-hero-switch-content"), t.accordion = new o.default(t.switch, {
              parentSelector: null
           }))
        }
  
        function ui() {
           var n = this,
              u, f, e, o;
           if (!n.videoPlayer || !n.videoPlayer.id) return null;
           var t = n.videoPlayer.dataset,
              i = "true" === n.videoPlayer.dataset.videoAutoloop,
              r = "true" === n.videoPlayer.dataset.videoAutoplay;
           return t.vimeoId ? (u = t.vimeoId, new p(u, n.setVideo, n.resetVideoState, n.videoPlayer.id, i, r)) : t.youtubeId ? (f = t.youtubeId, e = t.youtubeApi, new a(f, e, n.setVideo, n.resetVideoState, n.videoPlayer.id, i, r)) : t.externalLink ? (o = t.externalLink, new h(o, n.setVideo, n.resetVideoState, n.videoPlayer, i, r)) : null
        }
  
        function fi(n) {
           var i = Math.floor(n / 60),
              t = n % 60 ? n % 60 : 0,
              r = t >= 10 ? t.toFixed(0) : "0".concat(Math.round(t)),
              u = "".concat(i.toFixed(0), ":").concat(r);
           this.duration = n;
           this.embedVideoTime.innerHTML = u;
           this.heroPlayButton.classList.add("active")
        }
  
        function ei() {
           this.play = this.startVideo;
           this.iconMore && this.iconMore.addEventListener("click", this.updateIcon);
           this.heroPlayButton && (this.heroPoster && (this.play = this.hidePoster), this.heroPlayButton.addEventListener("click", this.play));
           this.scrollArrow && Object(f.t)(this.scrollArrow, "click", this.scrollToNextSection);
           window.addEventListener("scroll", this.setArrowPosition);
           window.addEventListener("resize", this.setArrowPosition)
        }
  
        function oi() {
           Object(f.s)(this.scrollArrow, "click", this.scrollToNextSection)
        }
        var o, u, f, h, a, v, p, b;
        i.r(t);
        o = i(34);
        u = i(8);
        f = i(1);
        h = function () {
           function t(n, i) {
              var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                 o = arguments.length > 3 ? arguments[3] : void 0,
                 u = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                 f = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                 r;
              tt(this, t);
              r = document.createElement("video");
              r.src = n;
              r.autoplay = !1;
              f && (r.muted = !0);
              r.setAttribute("width", "100%");
              r.setAttribute("height", "100%");
              r.setAttribute("controls", "true");
              u && (r.loop = !0);
              o.appendChild(r);
              this.player = r;
              this.loop = u;
              this.autoplay = f;
              this.onVideoEnd = e;
              this.initBindings(i)
           }
           var n, i, r;
           return n = t, (i = [{
              key: "initBindings",
              value: it
           }, {
              key: "play",
              value: rt
           }, {
              key: "pause",
              value: ut
           }, {
              key: "togglePlay",
              value: ft
           }, {
              key: "reset",
              value: et
           }, {
              key: "resetOnPlay",
              value: ot
           }]) && s(n.prototype, i), r && s(n, r), Object.defineProperty(n, "prototype", {
              writable: !1
           }), t
        }();
        window.playersContainer = window.playersContainer || [];
        window.onYouTubeIframeAPIReady = window.onYouTubeIframeAPIReady || function () {
           for (var t = window.playersContainer, n = 0; n <= t.length - 1; n++) l(t[n])
        };
        a = function () {
           function t(n, i, r) {
              var u = this,
                 h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                 s = arguments.length > 4 ? arguments[4] : void 0,
                 c = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                 a = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                 f, o;
              (st(this, t), e(this, "onStateChange", function (n) {
                 0 === n.data && u.onVideoEnd && u.onVideoEnd()
              }), e(this, "onReady", function (n) {
                 var t = n.target.getDuration();
                 u.setVideo(t)
              }), e(this, "togglePlay", function (n) {
                 n.preventDefault();
                 u.player && (1 === u.player.getPlayerState() ? u.pause() : u.play())
              }), window.youtubeReady) || (f = document.createElement("script"), o = document.getElementsByTagName("script")[0], f.src = i, o.parentNode.insertBefore(f, o), window.youtubeReady = !0);
              this.player = null;
              this.id = n;
              this.componentPlayerId = s;
              this.setVideo = r;
              this.loop = c;
              this.autoplay = a;
              this.wrapper = ht(document.getElementById(s));
              this.onVideoEnd = h;
              window.YT && window.YT.Player ? l(this) : window.playersContainer.push(this);
              this.initBindings()
           }
           var n, i, r;
           return n = t, (i = [{
              key: "initBindings",
              value: ct
           }, {
              key: "play",
              value: lt
           }, {
              key: "pause",
              value: at
           }, {
              key: "reset",
              value: vt
           }, {
              key: "resetOnPlay",
              value: yt
           }]) && c(n.prototype, i), r && c(n, r), Object.defineProperty(n, "prototype", {
              writable: !1
           }), t
        }();
        v = i(95);
        p = function () {
           function t(n, i) {
              function s(n) {
                 n ? r.player.play() : r.player.pause()
              }
              var r = this,
                 f = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                 u = arguments.length > 3 ? arguments[3] : void 0,
                 e = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                 o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
              pt(this, t);
              wt(this, "togglePlay", function (n) {
                 n.preventDefault();
                 r.player.getPaused().then(s)
              });
              this.vimeoElement = document.getElementById(u);
              this.videoId = n;
              this.loop = e;
              this.autoplay = o;
              this.options = {
                 url: "https://player.vimeo.com/video/".concat(n),
                 width: "100%",
                 height: "100%",
                 loop: this.loop,
                 autoplay: this.autoplay,
                 controls: !1
              };
              this.wrapper = bt(document.getElementById(u));
              this.player = new v.a(u, this.options);
              this.autoplay && this.player.setVolume(0);
              this.player.getDuration().then(function (n) {
                 return i(n)
              });
              this.onVideoEnd = f;
              this.initBindings()
           }
           var n, i, r;
           return n = t, (i = [{
              key: "initBindings",
              value: kt
           }, {
              key: "play",
              value: dt
           }, {
              key: "pause",
              value: gt
           }, {
              key: "reset",
              value: ni
           }, {
              key: "resetOnPlay",
              value: ti
           }]) && y(n.prototype, i), r && y(n, r), Object.defineProperty(n, "prototype", {
              writable: !1
           }), t
        }();
        b = function () {
           function t(n) {
              var i = this;
              ! function (n, t) {
                 if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, t);
              r(this, "setVideo", function (n) {
                 i.setVideoDuration(n);
                 i.player && i.player.autoplay && i.play()
              });
              r(this, "startVideo", function (n) {
                 n && n.preventDefault();
                 i.player && i.player.play();
                 i.videoPlayer.classList.add("active")
              });
              r(this, "resetVideoOnPlay", function () {
                 i.player && i.player.resetOnPlay(i.resetPoster)
              });
              r(this, "resetVideoState", function () {
                 i.player && (i.player.reset(), i.player.play())
              });
              r(this, "pausePoster", function () {
                 var t = i.heroPoster,
                    n = i.heroPosterVideo;
                 t && n && n.pause()
              });
              r(this, "playPoster", function () {
                 var n = i.heroPoster,
                    t = i.heroPosterVideo;
                 n && (n.classList.remove("hidden"), t && t.play())
              });
              r(this, "hidePoster", function (n) {
                 n && n.preventDefault();
                 i.heroPoster.classList.add("hidden");
                 i.heroPlayButton.classList.remove("active");
                 setTimeout(i.pausePoster, 350);
                 i.startVideo()
              });
              r(this, "resetPoster", function () {
                 i.heroPoster && (i.heroPlayButton.classList.add("active"), i.playPoster())
              });
              r(this, "createImageScene", k);
              r(this, "createScene", d);
              r(this, "createResetVideoScene", g);
              r(this, "updateScene", nt);
              r(this, "updateIcon", function () {
                 i.iconMore.classList.toggle("opened");
                 i.updateScene()
              });
              r(this, "scrollToNextSection", function (n) {
                 n.preventDefault();
                 var t = Object(f.g)(i.element);
                 u.b.scrollTo(t.height + t.offset)
              });
              r(this, "setArrowPosition", function () {
                 if (i.arrowDown && window.matchMedia("(min-width: 1080px)").matches) {
                    var f = window.scrollY,
                       n = window.innerHeight,
                       t = i.arrowDown.offsetHeight,
                       r = i.element.offsetHeight,
                       u = i.element.offsetTop;
                    r >= n - (u - t) ? (i.arrowDown.classList.contains("sticky") || i.arrowDown.classList.add("sticky"), f >= r - n + (u - t) && i.arrowDown.classList.remove("sticky")) : i.arrowDown.classList.remove("sticky")
                 }
              });
              this.element = n;
              n && (this.initDOMElements(n), this.initBindings(), this.setArrowPosition())
           }
           var n, i, e;
           return n = t, (i = [{
              key: "initDOMElements",
              value: ri
           }, {
              key: "buildPlayer",
              value: ui
           }, {
              key: "setVideoDuration",
              value: fi
           }, {
              key: "initBindings",
              value: ei
           }, {
              key: "destroy",
              value: oi
           }]) && w(n.prototype, i), e && w(n, e), Object.defineProperty(n, "prototype", {
              writable: !1
           }), t
        }();
        t.default = b
     }
  })