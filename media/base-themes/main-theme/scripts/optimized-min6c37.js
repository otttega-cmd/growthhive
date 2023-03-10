var movieTracker, XAContext;
XA.component.observer = function (n) {
   function u() {
      typeof Sitecore != "undefined" && !i && r.hasClass("on-page-editor") && (Sitecore.PageModes.ChromeManager.chromesReseted.observe(function () {
         XA.init()
      }), i = !0)
   }
   var t = {},
      i = !1,
      r = n("body");
   return t.init = function () {
      u()
   }, t
}(jQuery);
XA.register("observer", XA.component.observer);
XA.component.partialDesignHighlight = function (n) {
   var t = {},
      i = !1;
   return t.init = function () {
      var u, t, r;
      if (!Object.prototype.hasOwnProperty.call(window, "Sitecore")) return !1;
      if (n(".on-page-editor").length > 0 && !i) {
         i = !0;
         u = Sitecore.PageModes.HoverFrame.extend({
            horizontalSideClassName: function () {
               return this.base() + " scHilghlightedChrome boldHighlight sxaFrame"
            },
            verticalSideClassName: function () {
               return this.base() + " scHilghlightedChrome boldHighlight sxaFrame"
            },
            dispose: function () {
               this.sides && $sc.each(this.sides, function () {
                  this.remove()
               });
               this.sides = null
            },
            show: function (n) {
               this.base(n);
               this.top.css("left", this.top.position().left - 2 + "px").css("width", this.top.width() + 4 + "px");
               this.bottom.css("left", this.bottom.position().left - 2 + "px").css("width", this.bottom.width() + 4 + "px");
               this.topRightCorner.css("left", this.topRightCorner.position().left + 2 + "px");
               this.bottomRightCorner.css("top", this.bottomRightCorner.position().top + 3 + "px");
               this.bottomLeftCorner.css("top", this.bottomLeftCorner.position().top + 3 + "px");
               this.left.css("height", this.left.height() + 7 + "px").css("top", this.left.position().top - 2 + "px");
               this.right.css("height", this.right.height() + 7 + "px").css("left", this.right.position().left - 1 + "px").css("top", this.right.position().top - 2 + "px");
               this.bottom.position().top - this.top.position().top < 7 && this.bottom.css("top", this.top.position().top + 7 + "px")
            }
         });
         t = function (n) {
            var r, i, t;
            if (n)
               for (r = Sitecore.PageModes.ChromeManager.chromes(), i = 0; i < r.length; i++) t = r[i], t.data !== undefined && t.data.custom !== undefined && n === t.data.custom.sxaSource && (t._highlight !== undefined && t._highlight.hide(), t._highlight = new u, t._highlight.show(t))
         };
         r = function () {
            for (var i = Sitecore.PageModes.ChromeManager.chromes(), t = 0; t < i.length; t++) i[t].hideHighlight();
            n(".sxaFrame").remove()
         };
         n(".on-page-editor").on("mouseover", "table[data-zgtype=snippets] tr", function () {
            t(n(this).attr("id"))
         });
         n(".on-page-editor").on("mouseout", "table[data-zgtype=snippets] tr", r);
         n(".on-page-editor").on("mouseenter", ".sc_DropDownItemLink", function () {
            var i = n(this).data("sc-sxa-item-id");
            i.length && (i = i.substring(i.indexOf("{") + 1, i.indexOf("}")), i && t("L" + i.replace(/-/g, "")))
         });
         n(".on-page-editor").on("mouseleave", ".sc_DropDownItemLink", function () {
            n(this).data("sc-sxa-item-id").length > 0 && r()
         })
      }
   }, t
}(jQuery, _, document);
XA.register("partialDesignHighlight", XA.component.partialDesignHighlight);
XAContext = XAContext || {};
XAContext.Tracking = function (n) {
   function t() {
      var t = XAContext.Tracking.Movies(n),
         i = XAContext.Tracking.Movies.YouTubePlayer.Handlers(n, {
            customEvents: ["onPlayerHidden", "onPlayerVisible"]
         })
   }
   n(document).ready(t)
}(jQuery);
XAContext = XAContext || {};
XAContext.Domain = XAContext.Domain || {};
XAContext.Domain.TrackingOptions = function () {
   return {
      category: "",
      event: "",
      label: "",
      data: ""
   }
};
XAContext.Domain.TrackingTypes = function () {
   return {
      view: "page-view",
      event: "event"
   }
};
XAContext.Domain.TrackingType = function (n, t, i, r) {
   return {
      type: n || "",
      method: i || "async",
      custom: t || !1,
      label: r || ""
   }
};
XAContext.Tracking = function (n) {
   function o(i) {
      var r = n(i),
         u = XAContext.Domain.TrackingType();
      return r.filter(":input").length > 0 && (u.label = r.val()), r.hasClass("track") || r.hasClass("live") || (r = r.closest("div.track")), u.type = r.attr(t.attributes.prefix + t.attributes.type), u.custom = r.attr(t.attributes.prefix + t.attributes.data), u.method = r.attr(t.attributes.prefix + t.attributes.method), u
   }

   function s(n, t) {
      var i = n ? n.split(",") : !1,
         r = XAContext.Domain.TrackingOptions();
      return r.category = i[0], r.event = i[1], r.label = t.length == 0 ? i[2] : i[2] == undefined ? t : i[2] + "_" + t, r.data = i[3], r
   }

   function u(n) {
      var t, i, r;
      XAContext.Tracking.Blacklist != null && XAContext.Tracking.Blacklist.isForbidden != null && XAContext.Tracking.Blacklist.isForbidden(window.location.href) || (t = n.data || window.location.pathname, t = t.toLowerCase(), i = t.indexOf("?"), i > -1 && t.charAt(i - 1) != "/" && (t = t.replace("?", "/?")), r = t.indexOf("#"), r > -1 ? (t.charAt(r - 1) != "/" && (t = t.replace("#", "/#")), t.charAt(t.length - 1) != "/" && (t = t + "/"), t.charAt(t.length - 1) != "#!" && t.indexOf("#!/") == -1 && (t = t.replace("#!", "#!/"))) : t.charAt(t.length - 1) != "/" && (t = t + "/"), t = t.replace("//", "/"), _gaq.push(["_trackPageview", t]))
   }

   function f(n, i) {
      i ? _gat._getTrackerByName()._trackEvent(n.category, n.event, n.label, n.data) : _gaq.push([t.googleMethods.trackEvent, n.category, n.event, n.label, n.data])
   }

   function e(n, i) {
      n.type == t.types.event && i ? f(i, n.method == "sync") : n.type == t.types.view && u(i)
   }

   function r(n) {
      var i = o(n.currentTarget),
         r = i.type == t.types.event ? s(i.custom, i.label) : {
            data: n.currentTarget[i.custom]
         };
      e(i, r)
   }

   function h() {
      for (var u, f, i = 0; i < t.selectors.length; i++) n("a" + t.selectors[i]).click(r), n("div" + t.selectors[i] + " a").click(r), n("div" + t.selectors[i] + " input[type=submit]").click(r);
      t.trackInitalView && _gaq.push(["_trackPageview"]);
      u = document.createElement("script");
      u.type = "text/javascript";
      u.async = !0;
      u.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
      f = document.getElementsByTagName("script")[0];
      f.parentNode.insertBefore(u, f)
   }
   var t, i;
   return window._gaq = window._gaq || [], t = {
      accountId: "",
      domainName: "",
      trackInitalView: !1,
      attributes: {
         prefix: "data-",
         type: "tracking-type",
         data: "tracking-info",
         method: "tracking-method"
      },
      schema: "",
      selectors: [".live", ".track"],
      types: {
         view: "page-view",
         event: "event"
      },
      googleMethods: {
         trackPageView: "",
         trackEvent: "_trackEvent"
      }
   }, n(document).ready(h), i = {}, i.track = function (n, t, i) {
      var n = XAContext.Domain.TrackingType(n, null, i ? "sync" : "async");
      e(n, t)
   }, i.view = function (n) {
      var i = XAContext.Domain.TrackingType(t.types.view);
      u({
         data: n
      })
   }, i.event = function (n, i) {
      var r = XAContext.Domain.TrackingType(t.types.event);
      f(n, i)
   }, i.setAccounts = function (n) {
      t.accountId = ("" + n).split(",")[0];
      _gaq.push(["_setAccount", t.accountId])
   }, i.setDomainName = function (n) {
      n !== "" && (t.domainName = n, _gaq.push(["_setDomainName", t.domainName]))
   }, i
}(jQuery);
XAContext.Tracking.Movies = function (n) {
   function f(n) {
      return n != null && u[n] != null
   }

   function o(n) {
      for (var r = null, t = 0; t < i.length; t++)
         if (i[t].id === n) {
            r = i[t];
            break
         } return r
   }
   var r = {},
      i = [{
         id: "mejs",
         player: XAContext.Tracking.Movies.MediaElementJsPlayer
      }, {
         id: "youTube",
         player: XAContext.Tracking.Movies.YouTubePlayer
      }],
      u = [],
      t = {
         moviesCount: 2,
         trackingOptions: {
            category: "movie",
            event: "play",
            label: "both"
         },
         names: []
      };
   return r.register = function (t) {
      var e = o(t.trackerId),
         i, r;
      e == null || f(t.name) || (r = e.player(n, t), i = XAContext.Tracking.Movies.PlayerManager(n, r), r.init(i), u[t.name] = i)
   }, r
};
XAContext.Tracking.Movies.MediaElementJsPlayer = function (n, t) {
   function h() {
      i.movieName === r && u.play();
      f = !1
   }

   function c() {
      i.movieName === r && !f && i.currentTime && i.duration > i.currentTime && u.pause()
   }

   function o() {
      i.movieName === r && u.update()
   }

   function l() {
      i.movieName === r && (u.stop(), f = !0)
   }

   function a() {
      i.movieName === r && (f = !0)
   }
   var e = XAContext.Tracking.Movies.Player(n, {
         name: t.name,
         completedTime: t.completedTime,
         getDuration: function () {
            return t.api ? t.api.duration : null
         },
         getCurrentTime: function () {
            return t.api ? t.api.currentTime : null
         }
      }),
      r = e.getName(),
      u = null,
      i = t.api,
      f = !0,
      s = "createTouch" in document ? "touchstart" : "click";
   return e.init = function (n) {
      u = n;
      i != null && (t.$elem && t.$elem.length && t.$elem.bind(s, l), i.addEventListener("play", h, !1), i.addEventListener("pause", c, !1), i.addEventListener("seeked", o, !1), i.addEventListener("timeupdate", o, !1), i.addEventListener("ended", a, !1))
   }, e
};
XAContext.Tracking.Movies.Player = function (n, t) {
   var r = {},
      u = {
         name: null,
         completedTime: null,
         getDuration: function () {},
         getCurrentTime: function () {}
      },
      i = n.extend({}, u, t);
   return i.completedTime = isNaN(i.completedTime) ? u.completedTime : i.completedTime, r.getName = function () {
      return i.name
   }, r.getCompletedTime = function () {
      return i.completedTime
   }, r.getCurrentTime = function () {
      return i.getCurrentTime()
   }, r.getDuration = function () {
      return i.getDuration()
   }, r.init = function () {}, r
};
XAContext.Tracking.Movies.PlayerManager = function (n, t) {
   function h() {
      var r = t.getDuration(),
         u = t.getCurrentTime(),
         n = r && u ? Math.floor(u * 100 / r) : -1,
         i = -1;
      return n < 25 && n >= 0 ? i = 0 : n >= 98 ? i = 100 : n >= 75 ? i = 75 : n >= 50 ? i = 50 : n >= 25 && (i = 25), i
   }

   function c() {
      var u = t.getDuration(),
         r = t.getCurrentTime(),
         n = t.getCompletedTime(),
         i;
      r && u && (n && r >= n || n === null && h() === 100) && (i = t.getName(), XAContext.Tracking.track(XAContext.Domain.TrackingTypes().event, {
         category: "movie",
         event: "watched " + i,
         label: "6. " + i + " completed"
      }), e = !0)
   }

   function l() {
      for (var u = h(), n, r, i = 0; i < s.length; i++) n = s[i], u >= n.value && !n.isReached && (n.isReached = !0, r = t.getName(), XAContext.Tracking.track(XAContext.Domain.TrackingTypes().event, {
         category: "movie",
         event: "watched " + r,
         label: n.number + r + " " + n.value
      }))
   }

   function a(n) {
      for (var t = 0; t < n.length; t++) n[t](i)
   }
   var i = {},
      r = !1,
      u = !1,
      f = !1,
      e = !1,
      o = [],
      s = [{
         number: "1. ",
         value: 0,
         isReached: !1
      }, {
         number: "2. ",
         value: 25,
         isReached: !1
      }, {
         number: "3. ",
         value: 50,
         isReached: !1
      }, {
         number: "4. ",
         value: 75,
         isReached: !1
      }, {
         number: "5. ",
         value: 100,
         isReached: !1
      }];
   return i.isPlayedTracked = function () {
      return r
   }, i.play = function () {
      r || (XAContext.Tracking.track(XAContext.Domain.TrackingTypes().event, {
         category: "movie",
         event: "play",
         label: t.getName()
      }), r = !0);
      a(o)
   }, i.pause = function () {
      u || (XAContext.Tracking.track(XAContext.Domain.TrackingTypes().event, {
         category: "movie",
         event: "pause",
         label: t.getName()
      }), u = !0)
   }, i.stop = function () {
      f || (XAContext.Tracking.track(XAContext.Domain.TrackingTypes().event, {
         category: "movie",
         event: "stop",
         label: t.getName()
      }), f = !0)
   }, i.onPlay = function (n) {
      o.push(n)
   }, i.update = function () {
      l();
      e || c()
   }, i.getPlayer = function () {
      return t
   }, i
};
XAContext.Tracking.Movies.YouTubePlayer = function (n, t) {
   function a() {
      var u = null,
         i = t.$container.children().first().attr("id"),
         r;
      return i != null && (r = n.tubeplayer.getPlayers(), u = r[i] != null && n.isFunction(r[i].getVideoUrl) ? r[i] : null), u
   }

   function v() {
      var i = null,
         r = t.$container.tubeplayer("player");
      return n.isFunction(r.getVideoUrl) && (i = r), i == null && l && (i = a()), i
   }

   function y() {
      var n = null,
         t = i.getVideoUrl();
      return s.compile(s), n = s.exec(t), n = n != null && n.length > 0 ? n[0] : null, n != null && (n = n.replace("v=", "")), n
   }

   function p() {
      return i != null && c != null && c === y()
   }

   function e(n) {
      u && (i == null && (i = v()), p() && n())
   }

   function w() {
      f = setInterval(function () {
         e(r.update)
      }, 1e3)
   }
   var i = null,
      h = XAContext.Tracking.Movies.Player(n, {
         name: t.name,
         completedTime: t.completedTime || 0,
         getDuration: function () {
            return i.getDuration()
         },
         getCurrentTime: function () {
            return i.getCurrentTime()
         }
      }),
      r = null,
      c = t.videoId,
      f = null,
      u = !1,
      o = !1,
      l = t.isIE != null ? t.isIE : !1,
      s = /v=[^&]+/ig;
   return h.init = function (n) {
      var s = t.handlers,
         h = "onPlayerPlaying",
         c = ["onPlayerCued", h, "onPlayerPaused", "onPlayerBuffering", "onPlayerEnded"];
      r = n;
      t.$container != null && s != null && (s.addHandlers(c, function () {
         e(r.update)
      }), s.addHandler("onPlayerPaused", function () {
         e(r.pause)
      }), s.addHandler(h, function () {
         var n = u;
         u = u ? !0 : !u && o;
         e(r.play)
      }), s.addHandler("onPlayerVisible", function () {
         o = !0;
         w()
      }), s.addHandler("onPlayerHidden", function () {
         o = !1;
         u = !1;
         f != null && (clearInterval(f), f = null);
         i = null
      }), t.$elem && t.$elem.length && t.$elem.bind("click", r.stop))
   }, h
};
XAContext.Tracking.Movies.YouTubePlayer.Handlers = function (n, t) {
   function o(n, t) {
      var i;
      if (n !== null)
         for (i = 0; i < n.length; i++) n[i](t)
   }

   function f(n) {
      var t = u[n];
      return t == null && i[n] !== undefined && (t = function (t) {
         o(i[n], t, n)
      }, u[n] = t), t
   }
   var r = {},
      e = n.extend({}, {
         customEvents: []
      }, t),
      i = {
         onPlay: null,
         onPause: null,
         onStop: null,
         onSeek: null,
         onPlayerUnstarted: null,
         onPlayerEnded: null,
         onPlayerPlaying: null,
         onPlayerPaused: null,
         onPlayerBuffering: null,
         onPlayerCued: null
      },
      u = {};
   return n.each(e.customEvents, function (n, t) {
      i[t] = null
   }), r.dispatch = function (n) {
      var t = f(n);
      t != null && t()
   }, r.get = function (t) {
      var i = f(t);
      return i != null ? i : n.noop
   }, r.addHandler = function (n, t) {
      i[n] !== undefined && (i[n] === null && (i[n] = []), i[n].push(t))
   }, r.addHandlers = function (n, t) {
      for (var i = 0; i < n.length; i++) r.addHandler(n[i], t)
   }, r.detachHandlers = function () {
      for (var n in i) i[n] = null
   }, r
}