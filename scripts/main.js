!
function(e) {
    function t(a) {
        if (n[a]) return n[a].exports;
        var s = n[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        return e[a].call(s.exports, s, s.exports, t),
        s.loaded = !0,
        s.exports
    }
    var n = {};
    t.m = e,
    t.c = n,
    t.p = "",
    t(0)
} ([function(e, t, n) {
    "use strict";
    var a = n(1),
    s = n(2),
    o = n(3),
    i = n(4),
    r = n(5);
    console.info("hexo-theme-archer: v20170912-bulma modified by jjk"),
    (0, a.init)(),
    (0, s.toggleHeader)(),
    (0, i.sidebarInit)(),
    (0, r.initTag)(),
    (0, o.initMobile)()
},
function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.init = function() {
        var e = $(".site-intro-img:first"),
        t = $(".site-intro-placeholder:first"),
        n = e.css("background-image").match(/url\("?(.*)"?\)/)[1],
        a = new Image;
        a.src = n,
        a.onload = function() {
            t.remove()
        }
    }
},
function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.toggleHeader = function() {
        function e(e) {
            return (h += e - u) > 50 ? (h = 0, 1) : h < -50 ? (h = 0, -1) : 0
        }
        function t(e) {
            if (e > f) {
                if (1 !== v) return v = 1,
                p = !1,
                1
            } else if ( - 1 !== v) return v = -1,
            p = !0,
            -1;
            return 0
        }
        function n(n) {
            m || (requestAnimationFrame(function() {
                var a = $(document).scrollTop(),
                i = t(a);
                if (1 == i ? (nv_bar.addClass("is-hidden"), c.addClass("home-link-hide"), c_a.addClass("home-link-a-hide"), c_b.addClass("home-link-b-hide"), l.addClass("back-top-show"), d.addClass("header-sidebar-menu-black")) : -1 == i && (nv_bar.removeClass("is-hidden"), c.removeClass("home-link-hide"), c_a.removeClass("home-link-a-hide"), c_b.removeClass("home-link-b-hide"), o.removeClass("banner-show"), l.removeClass("back-top-show"), d.removeClass("header-sidebar-menu-black")), s) {
                    var r = e(a);
                    1 == r ? o.removeClass("banner-show") : -1 != r || p || o.addClass("banner-show")
                }
                u = $(n).scrollTop(),
                m = !1
            }), m = !0)
        }
        function a(e) {
            e.preventDefault();
            var t = setInterval(function() {
                var e = $(document).scrollTop();
                window.scrollTo(0, Math.max(Math.floor(.8 * e))),
                0 === e && clearInterval(t)
            },
            20)
        }
        var s = 0;
        void 0 !== document.getElementsByClassName("post-body")[0] && (s = 1);
        var o = $(".banner:first"),
        i = o.find(".post-title a"),
        r = $(".site-intro:first"),
        c = $(".home-link:first"),
        c_a = $(".home-link-a:first"),
        c_b = $(".home-link-b:first"),
        l = $(".back-top:first"),
        d = $(".header-sidebar-menu:first"),
        nv_bar = $(".prj_container:first"),
        f = r.offset().top + r.outerHeight(),
        u = 0,
        h = 0,
        v = -1,
        p = !0,
        m = !1;
        $(document).on("scroll",
        function() {
            n(this)
        }),
        [i, l].forEach(function(e) {
            e.on("click", a)
        })
    }
},
function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.initMobile = function() {
        function e(e) {
            e.matches ? (console.log("jjk found it in <mobile> mode"), document.body.addEventListener("touchstart",
            function() {})) : console.log("jjk found it in <desktop> mode")
        }
        if (window.matchMedia) {
            var t = window.matchMedia("(max-width: 900px)");
            t.addListener(e),
            e(t)
        } else window.addListener("resize",
        function() {
            e((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 900 ? {
                matches: !1
            }: {
                matches: !0
            })
        },
        !1)
    }
},
function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.sidebarInit = function() {
        function e(e) {
            s.addClass("sidebar-show"),
            o.addClass("wrapper-show-sidebar"),
            d.addClass("header-slide"),
            e.stopPropagation()
        }
        function t(e) {
            this.scrollHeight == this.clientHeight ? window.event.preventDefault() : this.scrollTop <= 0 ? e.originalEvent.wheelDelta > 0 && window.event.preventDefault() : this.scrollTop >= this.scrollHeight - this.clientHeight && e.originalEvent.wheelDelta < 0 && window.event.preventDefault()
        }
        function n() {
            var e = document.createEvent("MouseEvents");
            e.initMouseEvent("click", !1, !0),
            i[0].dispatchEvent(e),
            l[0].dispatchEvent(e)
        }
        function a(e) {
            var t = document.createEvent("MouseEvents");
            t.initMouseEvent("click", !1, !0),
            i[0].dispatchEvent(t),
            u.currTagName = e,
            u.dispatchEvent(t)
        }
        var s = $(".sidebar:first"),
        o = $(".wrapper:first"),
        i = $(".header-sidebar-menu:first"),
        r = s.find(".sidebar-content:first"),
        c = s.find(".sidebar-archive-link:first"),
        l = s.find(".sidebar-tags-link:first"),
        ll = s.find(".sidebar-about-link:first"),
        d = $(".header:first"),
        f = s.find(".sidebar-header:first");
        i.on("click",
        function(t) {
            e(t)
        }),
        s.on("click",
        function(e) {
            e.stopPropagation()
        }),
        o.on("click",
        function(e) {
            s.hasClass("sidebar-show") && (e.preventDefault(), s.removeClass("sidebar-show"), d.removeClass("header-slide"), o.removeClass("wrapper-show-sidebar"))
        }),
        c.on("click",
        function() {
            r.addClass("sidebar-content-show-archive").removeClass("sidebar-content-show-tags").removeClass("sidebar-content-show-about"),
            f.addClass("sidebar-header-show-archive").removeClass("sidebar-header-show-tags").removeClass("sidebar-header-show-about")
        }),
        l.on("click",
        function() {
            r.addClass("sidebar-content-show-tags").removeClass("sidebar-content-show-archive").removeClass("sidebar-content-show-about"),
            f.addClass("sidebar-header-show-tags").removeClass("sidebar-header-show-archive").removeClass("sidebar-header-show-about")
        }),
        ll.on("click",
        function() {
            r.addClass("sidebar-content-show-about").removeClass("sidebar-content-show-archive").removeClass("sidebar-content-show-tags"),
            f.addClass("sidebar-header-show-about").removeClass("sidebar-header-show-archive").removeClass("sidebar-header-show-tags")
        }),
        s.on("mousewheel",
        function(e) {
            var n = e.target,
            a = s.find(".sidebar-tag-list:first"),
            o = s.find(".sidebar-archive:first");
            $.contains(a[0], n) || a === n ? t.call(a[0], e) : $.contains(o[0], n) || o === n ? t.call(o[0], e) : e.preventDefault()
        });
        var u = $(".sidebar-tags-name:first")[0];
        $(".post-tag").on("click",
        function(e) {
            n(),
            a(e.target.dataset.href),
            e.stopPropagation()
        })
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.initTag = void 0;
    var a = n(6);
    t.initTag = function() {
        function e(e) {
            e[0].style.display = "block"
        }
        function t(e) {
            for (var t = this,
            n = 0; n < e.length; n++) !
            function(n) {
                var a = e[n].tags;
                a.length && a.forEach(function(e) {
                    if (o.has(e.name)) {
                        var t = o.get(e.name) + "," + n.toString();
                        o.set(e.name, t)
                    } else o.set(e.name, n.toString())
                },
                t)
            } (n)
        }
        function n(e) {
            var t = $('<li class="tag-post-item"><span class="tag-post-date">' + a.archerUtil.dateFormater(new Date(Date.parse(e.date)), "yyyy/MM/dd") + "</span></li>"),
            n = $('<a class="tag-post-title" href="' + jsInfo.root + e.path + '">' + e.title + "</a>");
            return t.append(n),
            t
        }
        var s = void 0,
        o = new Map; !
        function() {
            var n = jsInfo.root + "content.json?t=" + +new Date,
            a = new XMLHttpRequest;
            a.responseType = "",
            a.open("get", n, !0);
            var o = $(".tag-load-fail:first");
            a.onload = function() {
                200 == this.status || 304 == this.status ? (o.remove(), t(s = JSON.parse(this.responseText))) : (e(o), $(".sidebar-tags-name:first").remove())
            },
            a.send()
        } (),
        $(".sidebar-tags-name:first").on("click",
        function(e) {
            e.preventDefault();
            var t = e.target,
            a = void 0;
            16 & this.compareDocumentPosition(t) && ("SPAN" === t.tagName ? this.currTagName = t.firstChild.innerHTML: this.currTagName = t.innerHTML),
            a = this.currTagName;
            var i = o.get(a);
            if (i) {
                var r = i.split(","),
                c = document.createDocumentFragment(),
                l = document.getElementsByClassName("sidebar-tag-list")[0];
                l.innerHTML = "",
                r.forEach(function(e) {
                    c.appendChild(n(s[e])[0])
                }),
                l.appendChild(c)
            }
        })
    }
},
function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        backTop: function() {
            var e = setInterval(function() {
                var t = document.body.scrollTop;
                document.body.scrollTop -= Math.max(Math.ceil(t / 9) + 2),
                0 === t && clearInterval(e)
            },
            20)
        },
        getScrollTop: function() {
            return document.documentElement.scrollTop || document.body.scrollTop
        },
        getAbsPosition: function(e) {
            for (var t = e.offsetLeft,
            n = e.offsetTop; e = e.offsetParent;) t += e.offsetLeft,
            n += e.offsetTop;
            return {
                x: t,
                y: n
            }
        },
        dateFormater: function(e, t) {
            var n = {
                "M+": e.getMonth() + 1,
                "d+": e.getDate(),
                "h+": e.getHours(),
                "m+": e.getMinutes(),
                "s+": e.getSeconds(),
                "q+": Math.floor((e.getMonth() + 3) / 3),
                S: e.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var a in n) new RegExp("(" + a + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? n[a] : ("00" + n[a]).substr(("" + n[a]).length)));
            return t
        },
        toggler: function(e, t, n, a, s, o) {
            e && "undefined" != typeof window && (e === window || e.nodeType) && n.addEventListener(t,
            function(t) {
                if (a) for (var n = a.split(/[, ]/), i = n.length; i--;) e.classList.add(n[i]);
                if (s) for (var r = s.split(/[, ]/), c = r.length; c--;) e.classList.remove(r[c]);
                o && o(t)
            })
        }
    };
    t.archerUtil = n
}]);