/*
 * Copyright 2015 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
/* Web Font Loader v1.5.18 - (c) Adobe Systems, Google. License: Apache 2.0 */
; (function (window, document, undefined) {
    function aa(a, b, c) { return a.call.apply(a.bind, arguments) } function ba(a, b, c) { if (!a) throw Error(); if (2 < arguments.length) { var d = Array.prototype.slice.call(arguments, 2); return function () { var c = Array.prototype.slice.call(arguments); Array.prototype.unshift.apply(c, d); return a.apply(b, c) } } return function () { return a.apply(b, arguments) } } function k(a, b, c) { k = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba; return k.apply(null, arguments) } var n = Date.now || function () { return +new Date }; function q(a, b) { this.K = a; this.w = b || a; this.G = this.w.document } q.prototype.createElement = function (a, b, c) { a = this.G.createElement(a); if (b) for (var d in b) b.hasOwnProperty(d) && ("style" == d ? a.style.cssText = b[d] : a.setAttribute(d, b[d])); c && a.appendChild(this.G.createTextNode(c)); return a }; function r(a, b, c) { a = a.G.getElementsByTagName(b)[0]; a || (a = document.documentElement); a && a.lastChild && a.insertBefore(c, a.lastChild) } function ca(a, b) { function c() { a.G.body ? b() : setTimeout(c, 0) } c() }
    function s(a, b, c) { b = b || []; c = c || []; for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) { for (var f = !1, g = 0; g < d.length; g += 1)if (b[e] === d[g]) { f = !0; break } f || d.push(b[e]) } b = []; for (e = 0; e < d.length; e += 1) { f = !1; for (g = 0; g < c.length; g += 1)if (d[e] === c[g]) { f = !0; break } f || b.push(d[e]) } a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "") } function t(a, b) { for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)if (c[d] == b) return !0; return !1 }
    function u(a) { if ("string" === typeof a.na) return a.na; var b = a.w.location.protocol; "about:" == b && (b = a.K.location.protocol); return "https:" == b ? "https:" : "http:" } function v(a, b) { var c = a.createElement("link", { rel: "stylesheet", href: b, media: "all" }), d = !1; c.onload = function () { d || (d = !0) }; c.onerror = function () { d || (d = !0) }; r(a, "head", c) }
    function w(a, b, c, d) { var e = a.G.getElementsByTagName("head")[0]; if (e) { var f = a.createElement("script", { src: b }), g = !1; f.onload = f.onreadystatechange = function () { g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f)) }; e.appendChild(f); window.setTimeout(function () { g || (g = !0, c && c(Error("Script load timeout"))) }, d || 5E3); return f } return null }; function x(a, b) { this.Y = a; this.ga = b }; function y(a, b, c, d) { this.c = null != a ? a : null; this.g = null != b ? b : null; this.D = null != c ? c : null; this.e = null != d ? d : null } var da = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/; y.prototype.compare = function (a) { return this.c > a.c || this.c === a.c && this.g > a.g || this.c === a.c && this.g === a.g && this.D > a.D ? 1 : this.c < a.c || this.c === a.c && this.g < a.g || this.c === a.c && this.g === a.g && this.D < a.D ? -1 : 0 }; y.prototype.toString = function () { return [this.c, this.g || "", this.D || "", this.e || ""].join("") };
    function z(a) { a = da.exec(a); var b = null, c = null, d = null, e = null; a && (null !== a[1] && a[1] && (b = parseInt(a[1], 10)), null !== a[2] && a[2] && (c = parseInt(a[2], 10)), null !== a[3] && a[3] && (d = parseInt(a[3], 10)), null !== a[4] && a[4] && (e = /^[0-9]+$/.test(a[4]) ? parseInt(a[4], 10) : a[4])); return new y(b, c, d, e) }; function A(a, b, c, d, e, f, g, h) { this.N = a; this.k = h } A.prototype.getName = function () { return this.N }; function B(a) { this.a = a } var ea = new A("Unknown", 0, 0, 0, 0, 0, 0, new x(!1, !1));
    B.prototype.parse = function () {
        var a; if (-1 != this.a.indexOf("MSIE") || -1 != this.a.indexOf("Trident/")) { a = C(this); var b = z(D(this)), c = null, d = E(this.a, /Trident\/([\d\w\.]+)/, 1), c = -1 != this.a.indexOf("MSIE") ? z(E(this.a, /MSIE ([\d\w\.]+)/, 1)) : z(E(this.a, /rv:([\d\w\.]+)/, 1)); "" != d && z(d); a = new A("MSIE", 0, 0, 0, 0, 0, 0, new x("Windows" == a && 6 <= c.c || "Windows Phone" == a && 8 <= b.c, !1)) } else if (-1 != this.a.indexOf("Opera")) a: if (a = z(E(this.a, /Presto\/([\d\w\.]+)/, 1)), z(D(this)), null !== a.c || z(E(this.a, /rv:([^\)]+)/, 1)), -1 != this.a.indexOf("Opera Mini/")) a =
            z(E(this.a, /Opera Mini\/([\d\.]+)/, 1)), a = new A("OperaMini", 0, 0, 0, C(this), 0, 0, new x(!1, !1)); else { if (-1 != this.a.indexOf("Version/") && (a = z(E(this.a, /Version\/([\d\.]+)/, 1)), null !== a.c)) { a = new A("Opera", 0, 0, 0, C(this), 0, 0, new x(10 <= a.c, !1)); break a } a = z(E(this.a, /Opera[\/ ]([\d\.]+)/, 1)); a = null !== a.c ? new A("Opera", 0, 0, 0, C(this), 0, 0, new x(10 <= a.c, !1)) : new A("Opera", 0, 0, 0, C(this), 0, 0, new x(!1, !1)) } else /OPR\/[\d.]+/.test(this.a) ? a = F(this) : /AppleWeb(K|k)it/.test(this.a) ? a = F(this) : -1 != this.a.indexOf("Gecko") ?
                (a = "Unknown", b = new y, z(D(this)), b = !1, -1 != this.a.indexOf("Firefox") ? (a = "Firefox", b = z(E(this.a, /Firefox\/([\d\w\.]+)/, 1)), b = 3 <= b.c && 5 <= b.g) : -1 != this.a.indexOf("Mozilla") && (a = "Mozilla"), c = z(E(this.a, /rv:([^\)]+)/, 1)), b || (b = 1 < c.c || 1 == c.c && 9 < c.g || 1 == c.c && 9 == c.g && 2 <= c.D), a = new A(a, 0, 0, 0, C(this), 0, 0, new x(b, !1))) : a = ea; return a
    };
    function C(a) { var b = E(a.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1); if ("" != b) return /BB\d{2}/.test(b) && (b = "BlackBerry"), b; a = E(a.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/, 1); return "" != a ? ("Mac_PowerPC" == a ? a = "Macintosh" : "PlayStation" == a && (a = "Linux"), a) : "Unknown" }
    function D(a) { var b = E(a.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2); if (b || (b = E(a.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (b = E(a.a, /(iPhone )?OS ([\d_]+)/, 2))) return b; if (b = E(a.a, /(?:Linux|CrOS|CrKey) ([^;)]+)/, 1)) for (var b = b.split(/\s/), c = 0; c < b.length; c += 1)if (/^[\d\._]+$/.test(b[c])) return b[c]; return (a = E(a.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : "Unknown" }
    function F(a) {
        var b = C(a), c = z(D(a)), d = z(E(a.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1)), e = "Unknown", f = new y, f = "Unknown", g = !1; /OPR\/[\d.]+/.test(a.a) ? e = "Opera" : -1 != a.a.indexOf("Chrome") || -1 != a.a.indexOf("CrMo") || -1 != a.a.indexOf("CriOS") ? e = "Chrome" : /Silk\/\d/.test(a.a) ? e = "Silk" : "BlackBerry" == b || "Android" == b ? e = "BuiltinBrowser" : -1 != a.a.indexOf("PhantomJS") ? e = "PhantomJS" : -1 != a.a.indexOf("Safari") ? e = "Safari" : -1 != a.a.indexOf("AdobeAIR") ? e = "AdobeAIR" : -1 != a.a.indexOf("PlayStation") && (e = "BuiltinBrowser"); "BuiltinBrowser" ==
            e ? f = "Unknown" : "Silk" == e ? f = E(a.a, /Silk\/([\d\._]+)/, 1) : "Chrome" == e ? f = E(a.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != a.a.indexOf("Version/") ? f = E(a.a, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == e ? f = E(a.a, /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == e ? f = E(a.a, /OPR\/([\d.]+)/, 1) : "PhantomJS" == e && (f = E(a.a, /PhantomJS\/([\d.]+)/, 1)); f = z(f); g = "AdobeAIR" == e ? 2 < f.c || 2 == f.c && 5 <= f.g : "BlackBerry" == b ? 10 <= c.c : "Android" == b ? 2 < c.c || 2 == c.c && 1 < c.g : 526 <= d.c || 525 <= d.c && 13 <= d.g; return new A(e, 0, 0, 0, 0, 0, 0, new x(g, 536 > d.c || 536 == d.c && 11 > d.g))
    }
    function E(a, b, c) { return (a = a.match(b)) && a[c] ? a[c] : "" }; function G(a) { this.ma = a || "-" } G.prototype.e = function (a) { for (var b = [], c = 0; c < arguments.length; c++)b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase()); return b.join(this.ma) }; function H(a, b) { this.N = a; this.Z = 4; this.O = "n"; var c = (b || "n4").match(/^([nio])([1-9])$/i); c && (this.O = c[1], this.Z = parseInt(c[2], 10)) } H.prototype.getName = function () { return this.N }; function I(a) { return a.O + a.Z } function ga(a) { var b = 4, c = "n", d = null; a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10)))); return c + b }; function ha(a, b) { this.d = a; this.q = a.w.document.documentElement; this.Q = b; this.j = "wf"; this.h = new G("-"); this.ha = !1 !== b.events; this.F = !1 !== b.classes } function J(a) { if (a.F) { var b = t(a.q, a.h.e(a.j, "active")), c = [], d = [a.h.e(a.j, "loading")]; b || c.push(a.h.e(a.j, "inactive")); s(a.q, c, d) } K(a, "inactive") } function K(a, b, c) { if (a.ha && a.Q[b]) if (c) a.Q[b](c.getName(), I(c)); else a.Q[b]() }; function ia() { this.C = {} }; function L(a, b) { this.d = a; this.I = b; this.o = this.d.createElement("span", { "aria-hidden": "true" }, this.I) }
    function M(a, b) { var c = a.o, d; d = []; for (var e = b.N.split(/,\s*/), f = 0; f < e.length; f++) { var g = e[f].replace(/['"]/g, ""); -1 == g.indexOf(" ") ? d.push(g) : d.push("'" + g + "'") } d = d.join(","); e = "normal"; "o" === b.O ? e = "oblique" : "i" === b.O && (e = "italic"); c.style.cssText = "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + d + ";" + ("font-style:" + e + ";font-weight:" + (b.Z + "00") + ";") }
    function N(a) { r(a.d, "body", a.o) } L.prototype.remove = function () { var a = this.o; a.parentNode && a.parentNode.removeChild(a) }; function O(a, b, c, d, e, f, g, h) { this.$ = a; this.ka = b; this.d = c; this.m = d; this.k = e; this.I = h || "BESbswy"; this.v = {}; this.X = f || 3E3; this.ca = g || null; this.H = this.u = this.t = null; this.t = new L(this.d, this.I); this.u = new L(this.d, this.I); this.H = new L(this.d, this.I); M(this.t, new H("serif", I(this.m))); M(this.u, new H("sans-serif", I(this.m))); M(this.H, new H("monospace", I(this.m))); N(this.t); N(this.u); N(this.H); this.v.serif = this.t.o.offsetWidth; this.v["sans-serif"] = this.u.o.offsetWidth; this.v.monospace = this.H.o.offsetWidth }
    var P = { sa: "serif", ra: "sans-serif", qa: "monospace" }; O.prototype.start = function () { this.oa = n(); M(this.t, new H(this.m.getName() + ",serif", I(this.m))); M(this.u, new H(this.m.getName() + ",sans-serif", I(this.m))); Q(this) }; function R(a, b, c) { for (var d in P) if (P.hasOwnProperty(d) && b === a.v[P[d]] && c === a.v[P[d]]) return !0; return !1 }
    function Q(a) { var b = a.t.o.offsetWidth, c = a.u.o.offsetWidth; b === a.v.serif && c === a.v["sans-serif"] || a.k.ga && R(a, b, c) ? n() - a.oa >= a.X ? a.k.ga && R(a, b, c) && (null === a.ca || a.ca.hasOwnProperty(a.m.getName())) ? S(a, a.$) : S(a, a.ka) : ja(a) : S(a, a.$) } function ja(a) { setTimeout(k(function () { Q(this) }, a), 50) } function S(a, b) { a.t.remove(); a.u.remove(); a.H.remove(); b(a.m) }; function T(a, b, c, d) { this.d = b; this.A = c; this.S = 0; this.ea = this.ba = !1; this.X = d; this.k = a.k } function ka(a, b, c, d, e) { c = c || {}; if (0 === b.length && e) J(a.A); else for (a.S += b.length, e && (a.ba = e), e = 0; e < b.length; e++) { var f = b[e], g = c[f.getName()], h = a.A, m = f; h.F && s(h.q, [h.h.e(h.j, m.getName(), I(m).toString(), "loading")]); K(h, "fontloading", m); h = null; h = new O(k(a.ia, a), k(a.ja, a), a.d, f, a.k, a.X, d, g); h.start() } }
    T.prototype.ia = function (a) { var b = this.A; b.F && s(b.q, [b.h.e(b.j, a.getName(), I(a).toString(), "active")], [b.h.e(b.j, a.getName(), I(a).toString(), "loading"), b.h.e(b.j, a.getName(), I(a).toString(), "inactive")]); K(b, "fontactive", a); this.ea = !0; la(this) };
    T.prototype.ja = function (a) { var b = this.A; if (b.F) { var c = t(b.q, b.h.e(b.j, a.getName(), I(a).toString(), "active")), d = [], e = [b.h.e(b.j, a.getName(), I(a).toString(), "loading")]; c || d.push(b.h.e(b.j, a.getName(), I(a).toString(), "inactive")); s(b.q, d, e) } K(b, "fontinactive", a); la(this) }; function la(a) { 0 == --a.S && a.ba && (a.ea ? (a = a.A, a.F && s(a.q, [a.h.e(a.j, "active")], [a.h.e(a.j, "loading"), a.h.e(a.j, "inactive")]), K(a, "active")) : J(a.A)) }; function U(a) { this.K = a; this.B = new ia; this.pa = new B(a.navigator.userAgent); this.a = this.pa.parse(); this.U = this.V = 0; this.R = this.T = !0 }
    U.prototype.load = function (a) { this.d = new q(this.K, a.context || this.K); this.T = !1 !== a.events; this.R = !1 !== a.classes; var b = new ha(this.d, a), c = [], d = a.timeout; b.F && s(b.q, [b.h.e(b.j, "loading")]); K(b, "loading"); var c = this.B, e = this.d, f = [], g; for (g in a) if (a.hasOwnProperty(g)) { var h = c.C[g]; h && f.push(h(a[g], e)) } c = f; this.U = this.V = c.length; a = new T(this.a, this.d, b, d); d = 0; for (g = c.length; d < g; d++)e = c[d], e.L(this.a, k(this.la, this, e, b, a)) };
    U.prototype.la = function (a, b, c, d) { var e = this; d ? a.load(function (a, b, d) { ma(e, c, a, b, d) }) : (a = 0 == --this.V, this.U--, a && 0 == this.U ? J(b) : (this.R || this.T) && ka(c, [], {}, null, a)) }; function ma(a, b, c, d, e) { var f = 0 == --a.V; (a.R || a.T) && setTimeout(function () { ka(b, c, d || null, e || null, f) }, 0) }; function na(a, b, c) { this.P = a ? a : b + oa; this.s = []; this.W = []; this.fa = c || "" } var oa = "//fonts.googleapis.com/css"; na.prototype.e = function () { if (0 == this.s.length) throw Error("No fonts to load!"); if (-1 != this.P.indexOf("kit=")) return this.P; for (var a = this.s.length, b = [], c = 0; c < a; c++)b.push(this.s[c].replace(/ /g, "+")); a = this.P + "?family=" + b.join("%7C"); 0 < this.W.length && (a += "&subset=" + this.W.join(",")); 0 < this.fa.length && (a += "&text=" + encodeURIComponent(this.fa)); return a }; function pa(a) { this.s = a; this.da = []; this.M = {} }
    var qa = { latin: "BESbswy", cyrillic: "&#1081;&#1103;&#1046;", greek: "&#945;&#946;&#931;", khmer: "&#x1780;&#x1781;&#x1782;", Hanuman: "&#x1780;&#x1781;&#x1782;" }, ra = { thin: "1", extralight: "2", "extra-light": "2", ultralight: "2", "ultra-light": "2", light: "3", regular: "4", book: "4", medium: "5", "semi-bold": "6", semibold: "6", "demi-bold": "6", demibold: "6", bold: "7", "extra-bold": "8", extrabold: "8", "ultra-bold": "8", ultrabold: "8", black: "9", heavy: "9", l: "3", r: "4", b: "7" }, sa = { i: "i", italic: "i", n: "n", normal: "n" }, ta = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
    pa.prototype.parse = function () {
        for (var a = this.s.length, b = 0; b < a; b++) {
            var c = this.s[b].split(":"), d = c[0].replace(/\+/g, " "), e = ["n4"]; if (2 <= c.length) {
                var f; var g = c[1]; f = []; if (g) for (var g = g.split(","), h = g.length, m = 0; m < h; m++) { var l; l = g[m]; if (l.match(/^[\w-]+$/)) { l = ta.exec(l.toLowerCase()); var p = void 0; if (null == l) p = ""; else { p = void 0; p = l[1]; if (null == p || "" == p) p = "4"; else var fa = ra[p], p = fa ? fa : isNaN(p) ? "4" : p.substr(0, 1); l = l[2]; p = [null == l || "" == l ? "n" : sa[l], p].join("") } l = p } else l = ""; l && f.push(l) } 0 < f.length && (e = f);
                3 == c.length && (c = c[2], f = [], c = c ? c.split(",") : f, 0 < c.length && (c = qa[c[0]]) && (this.M[d] = c))
            } this.M[d] || (c = qa[d]) && (this.M[d] = c); for (c = 0; c < e.length; c += 1)this.da.push(new H(d, e[c]))
        }
    }; function V(a, b) { this.a = (new B(navigator.userAgent)).parse(); this.d = a; this.f = b } var ua = { Arimo: !0, Cousine: !0, Tinos: !0 }; V.prototype.L = function (a, b) { b(a.k.Y) }; V.prototype.load = function (a) { var b = this.d; "MSIE" == this.a.getName() && 1 != this.f.blocking ? ca(b, k(this.aa, this, a)) : this.aa(a) };
    V.prototype.aa = function (a) { for (var b = this.d, c = new na(this.f.api, u(b), this.f.text), d = this.f.families, e = d.length, f = 0; f < e; f++) { var g = d[f].split(":"); 3 == g.length && c.W.push(g.pop()); var h = ""; 2 == g.length && "" != g[1] && (h = ":"); c.s.push(g.join(h)) } d = new pa(d); d.parse(); v(b, c.e()); a(d.da, d.M, ua) }; function W(a, b) { this.d = a; this.f = b; this.p = [] } W.prototype.J = function (a) { var b = this.d; return u(this.d) + (this.f.api || "//f.fontdeck.com/s/css/js/") + (b.w.location.hostname || b.K.location.hostname) + "/" + a + ".js" };
    W.prototype.L = function (a, b) { var c = this.f.id, d = this.d.w, e = this; c ? (d.__webfontfontdeckmodule__ || (d.__webfontfontdeckmodule__ = {}), d.__webfontfontdeckmodule__[c] = function (a, c) { for (var d = 0, m = c.fonts.length; d < m; ++d) { var l = c.fonts[d]; e.p.push(new H(l.name, ga("font-weight:" + l.weight + ";font-style:" + l.style))) } b(a) }, w(this.d, this.J(c), function (a) { a && b(!1) })) : b(!1) }; W.prototype.load = function (a) { a(this.p) }; function X(a, b) { this.d = a; this.f = b; this.p = [] } X.prototype.J = function (a) { var b = u(this.d); return (this.f.api || b + "//use.typekit.net") + "/" + a + ".js" }; X.prototype.L = function (a, b) { var c = this.f.id, d = this.d.w, e = this; c ? w(this.d, this.J(c), function (a) { if (a) b(!1); else { if (d.Typekit && d.Typekit.config && d.Typekit.config.fn) { a = d.Typekit.config.fn; for (var c = 0; c < a.length; c += 2)for (var h = a[c], m = a[c + 1], l = 0; l < m.length; l++)e.p.push(new H(h, m[l])); try { d.Typekit.load({ events: !1, classes: !1 }) } catch (p) { } } b(!0) } }, 2E3) : b(!1) };
    X.prototype.load = function (a) { a(this.p) }; function Y(a, b) { this.d = a; this.f = b; this.p = [] } Y.prototype.L = function (a, b) { var c = this, d = c.f.projectId, e = c.f.version; if (d) { var f = c.d.w; w(this.d, c.J(d, e), function (e) { if (e) b(!1); else { if (f["__mti_fntLst" + d] && (e = f["__mti_fntLst" + d]())) for (var h = 0; h < e.length; h++)c.p.push(new H(e[h].fontfamily)); b(a.k.Y) } }).id = "__MonotypeAPIScript__" + d } else b(!1) }; Y.prototype.J = function (a, b) { var c = u(this.d), d = (this.f.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, ""); return c + "//" + d + "/" + a + ".js" + (b ? "?v=" + b : "") };
    Y.prototype.load = function (a) { a(this.p) }; function Z(a, b) { this.d = a; this.f = b } Z.prototype.load = function (a) { var b, c, d = this.f.urls || [], e = this.f.families || [], f = this.f.testStrings || {}; b = 0; for (c = d.length; b < c; b++)v(this.d, d[b]); d = []; b = 0; for (c = e.length; b < c; b++) { var g = e[b].split(":"); if (g[1]) for (var h = g[1].split(","), m = 0; m < h.length; m += 1)d.push(new H(g[0], h[m])); else d.push(new H(g[0])) } a(d, f) }; Z.prototype.L = function (a, b) { return b(a.k.Y) }; var $ = new U(this); $.B.C.custom = function (a, b) { return new Z(b, a) }; $.B.C.fontdeck = function (a, b) { return new W(b, a) }; $.B.C.monotype = function (a, b) { return new Y(b, a) }; $.B.C.typekit = function (a, b) { return new X(b, a) }; $.B.C.google = function (a, b) { return new V(b, a) }; this.WebFont || (this.WebFont = {}, this.WebFont.load = k($.load, $), this.WebFontConfig && $.load(this.WebFontConfig));
})(this, document);

