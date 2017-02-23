! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Waveform = t() : e.Waveform = t()
}(this, function() {
    return function(e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function(e, t, n) {
        var i, o;
        i = [n(3), n(9)], o = function(e, t) {
            document.addEventListener("DOMContentLoaded", function(t) {
                var n = new e(document.body);
                window.addEventListener("resize", function() {
                    n.resize()
                })
            })
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t) {
        e.exports = function() {
            var e = [];
            return e.toString = function() {
                for (var e = [], t = 0; t < this.length; t++) {
                    var n = this[t];
                    n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
                }
                return e.join("")
            }, e.i = function(t, n) {
                "string" == typeof t && (t = [
                    [null, t, ""]
                ]);
                for (var i = {}, o = 0; o < this.length; o++) {
                    var r = this[o][0];
                    "number" == typeof r && (i[r] = !0)
                }
                for (o = 0; o < t.length; o++) {
                    var a = t[o];
                    "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
                }
            }, e
        }
    }, function(e, t, n) {
        function i(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n],
                    o = j[i.id];
                if (o) {
                    o.refs++;
                    for (var r = 0; r < o.parts.length; r++) o.parts[r](i.parts[r]);
                    for (; r < i.parts.length; r++) o.parts.push(s(i.parts[r], t))
                } else {
                    for (var a = [], r = 0; r < i.parts.length; r++) a.push(s(i.parts[r], t));
                    j[i.id] = {
                        id: i.id,
                        refs: 1,
                        parts: a
                    }
                }
            }
        }

        function o(e) {
            for (var t = [], n = {}, i = 0; i < e.length; i++) {
                var o = e[i],
                    r = o[0],
                    a = o[1],
                    s = o[2],
                    u = o[3],
                    M = {
                        css: a,
                        media: s,
                        sourceMap: u
                    };
                n[r] ? n[r].parts.push(M) : t.push(n[r] = {
                    id: r,
                    parts: [M]
                })
            }
            return t
        }

        function r() {
            var e = document.createElement("style"),
                t = N();
            return e.type = "text/css", t.appendChild(e), e
        }

        function a() {
            var e = document.createElement("link"),
                t = N();
            return e.rel = "stylesheet", t.appendChild(e), e
        }

        function s(e, t) {
            var n, i, o;
            if (t.singleton) {
                var s = l++;
                n = L || (L = r()), i = u.bind(null, n, s, !1), o = u.bind(null, n, s, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = a(), i = g.bind(null, n), o = function() {
                n.parentNode.removeChild(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = r(), i = M.bind(null, n), o = function() {
                n.parentNode.removeChild(n)
            });
            return i(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        i(e = t)
                    } else o()
                }
        }

        function u(e, t, n, i) {
            var o = n ? "" : i.css;
            if (e.styleSheet) e.styleSheet.cssText = h(t, o);
            else {
                var r = document.createTextNode(o),
                    a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
            }
        }

        function M(e, t) {
            var n = t.css,
                i = t.media;
            if (t.sourceMap, i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }

        function g(e, t) {
            var n = t.css,
                i = (t.media, t.sourceMap);
            i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var o = new Blob([n], {
                    type: "text/css"
                }),
                r = e.href;
            e.href = URL.createObjectURL(o), r && URL.revokeObjectURL(r)
        }
        var j = {},
            c = function(e) {
                var t;
                return function() {
                    return "undefined" == typeof t && (t = e.apply(this, arguments)), t
                }
            },
            D = c(function() {
                return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
            }),
            N = c(function() {
                return document.head || document.getElementsByTagName("head")[0]
            }),
            L = null,
            l = 0;
        e.exports = function(e, t) {
            t = t || {}, "undefined" == typeof t.singleton && (t.singleton = D());
            var n = o(e);
            return i(n, t),
                function(e) {
                    for (var r = [], a = 0; a < n.length; a++) {
                        var s = n[a],
                            u = j[s.id];
                        u.refs--, r.push(u)
                    }
                    if (e) {
                        var M = o(e);
                        i(M, t)
                    }
                    for (var a = 0; a < r.length; a++) {
                        var u = r[a];
                        if (0 === u.refs) {
                            for (var g = 0; g < u.parts.length; g++) u.parts[g]();
                            delete j[u.id]
                        }
                    }
                }
        };
        var h = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n, e.filter(Boolean).join("\n")
            }
        }()
    }, function(e, t, n) {
        var i, o;
        i = [n(4)], o = function(e) {
            function t() {
                return "function" == typeof window.Tone
            }
            var n = 256,
                i = e(n).random,
                o = function(e) {
                    this._silentThresh = .01, this._rms = 0, this._container = e, this._element = document.createElement("canvas"), this._element.id = "Canvas", e.appendChild(this._element), this._context = this._element.getContext("2d"), t() && (this._analyser = new Tone.Analyser({
                        size: n,
                        type: "waveform",
                        returnType: "byte"
                    }), this._signal = (new Tone.Zero).connect(this._analyser), Tone.Master.connect(this._analyser)), t() && (this._boundLoop = this._loop.bind(this), this._loop()), this.resize()
                };
            return o.prototype.resize = function(e, n) {
                e = e || this._container.offsetWidth, n = n || this._container.offsetHeight, this._context.canvas.width = 2 * e, this._context.canvas.height = 2 * n, t() || this._drawBuffer(i, !0)
            }, o.prototype._loop = function() {
                requestAnimationFrame(this._boundLoop);
                var e = this._analyser.analyse();
                this._isSilent(e) ? this._drawBuffer(i, !0) : this._drawBuffer(e, !1)
            }, o.prototype._drawBuffer = function(e, t) {
                var n = this._context,
                    i = this._context.canvas.width,
                    o = this._context.canvas.height;
                t ? margin = this._scale(this._rms, 0, this._silentThresh, .2 * o, .5 * o) : margin = .2 * o, n.clearRect(0, 0, i, o), n.beginPath();
                for (var r, a = 0, s = e.length; s > a; a++) {
                    var u = this._scale(a, 0, s - 1, 0, i),
                        M = this._scale(e[a], 0, 255, o - margin, margin);
                    0 === a ? (r = M, n.moveTo(u, M)) : n.lineTo(u, M)
                }
                n.lineTo(i, o), n.lineTo(0, o), n.lineTo(0, r), n.lineCap = "round", n.fillStyle = "#22DBC0", n.fill()
            }, o.prototype._isSilent = function(e) {
                for (var t = 0, n = 0; n < e.length; n++) t += Math.pow((e[n] - 128) / 128, 2);
                var i = Math.sqrt(t / e.length);
                return this._rms = Math.max(i, .9 * this._rms), this._rms < this._silentThresh
            }, o.prototype._scale = function(e, t, n, i, o) {
                var r = (e - t) / (n - t);
                return r * (o - i) + i
            }, o
        }.apply(t, i), !(void 0 !== o && (e.exports = o))
    }, function(e, t, n) {
        var i;
        i = function() {
            return function(e) {
                var t, n = new Array(e),
                    i = new Array(e),
                    o = new Array(e),
                    r = new Array(e),
                    a = [n, o, r, i];
                for (t = 0; e > t; t++) n[t] = 128 * (Math.sin(2 * Math.PI * t / 255) + 1);
                for (t = 0; e > t; t++) o[t] = (t + e / 2) % e / e * 255;
                for (t = 0; e > t; t++) e / 4 > t ? r[t] = t / (e / 4) * 127 + 128 : .75 * e > t ? r[t] = 255 * (1 - (t - e / 4) / (e / 2)) : r[t] = (t - .75 * e) / (e / 4) * 127;
                for (t = 0; e > t; t++) {
                    var s = e / 16;
                    s > t ? i[t] = 0 : e / 2 > t ? i[t] = 255 : e - s > t ? i[t] = 0 : i[t] = 255
                }
                var u = a[Math.floor(Math.random() * a.length)];
                return {
                    sawtooth: o,
                    sine: n,
                    triangle: r,
                    square: i,
                    random: u
                }
            }
        }.call(t, n, t, e), !(void 0 !== i && (e.exports = i))
    }, , , function(e, t, n) {
        t = e.exports = n(1)(), t.push([e.id, "body,canvas{width:100%;height:100%;position:absolute;top:0;left:0;margin:0;background-color:#f734d7}", ""])
    }, , function(e, t, n) {
        var i = n(7);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]), n(2)(i, {}), i.locals && (e.exports = i.locals)
    }])
});