! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e(require("echarts")) : "function" == typeof define && define.amd ? define(["echarts"], e) : "object" == typeof exports ? exports["echarts-liquidfill"] = e(require("echarts")) : t["echarts-liquidfill"] = e(t.echarts)
}(this, function (t) {
    return function (t) {
        function e(n) {
            if (r[n]) return r[n].exports;
            var i = r[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
        }
        var r = {};
        return e.m = t, e.c = r, e.p = "", e(0)
    }([function (t, e, r) {
        t.exports = r(26)
    }, function (t, e) {
        function r(t) {
            if (null == t || "object" != typeof t) return t;
            var e = t,
                n = E.call(t);
            if ("[object Array]" === n) {
                e = [];
                for (var i = 0, a = t.length; i < a; i++) e[i] = r(t[i])
            } else if (W[n]) {
                var o = t.constructor;
                if (t.constructor.from) e = o.from(t);
                else {
                    e = new o(t.length);
                    for (var i = 0, a = t.length; i < a; i++) e[i] = r(t[i])
                }
            } else if (!q[n] && !B(t) && !M(t)) {
                e = {};
                for (var s in t) t.hasOwnProperty(s) && (e[s] = r(t[s]))
            }
            return e
        }

        function n(t, e, i) {
            if (!S(e) || !S(t)) return i ? r(e) : t;
            for (var a in e)
                if (e.hasOwnProperty(a)) {
                    var o = t[a],
                        s = e[a];
                    !S(s) || !S(o) || _(s) || _(o) || M(s) || M(o) || T(s) || T(o) || B(s) || B(o) ? !i && a in t || (t[a] = r(e[a], !0)) : n(o, s, i)
                } return t
        }

        function i(t, e) {
            for (var r = t[0], i = 1, a = t.length; i < a; i++) r = n(r, t[i], e);
            return r
        }

        function a(t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            return t
        }

        function o(t, e, r) {
            for (var n in e) e.hasOwnProperty(n) && (r ? null != e[n] : null == t[n]) && (t[n] = e[n]);
            return t
        }

        function s() {
            return document.createElement("canvas")
        }

        function l() {
            return z || (z = $.createCanvas().getContext("2d")), z
        }

        function h(t, e) {
            if (t) {
                if (t.indexOf) return t.indexOf(e);
                for (var r = 0, n = t.length; r < n; r++)
                    if (t[r] === e) return r
            }
            return -1
        }

        function u(t, e) {
            function r() {}
            var n = t.prototype;
            r.prototype = e.prototype, t.prototype = new r;
            for (var i in n) t.prototype[i] = n[i];
            t.prototype.constructor = t, t.superClass = e
        }

        function c(t, e, r) {
            t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, o(t, e, r)
        }

        function f(t) {
            if (t) return "string" != typeof t && "number" == typeof t.length
        }

        function d(t, e, r) {
            if (t && e)
                if (t.forEach && t.forEach === H) t.forEach(e, r);
                else if (t.length === +t.length)
                for (var n = 0, i = t.length; n < i; n++) e.call(r, t[n], n, t);
            else
                for (var a in t) t.hasOwnProperty(a) && e.call(r, t[a], a, t)
        }

        function p(t, e, r) {
            if (t && e) {
                if (t.map && t.map === X) return t.map(e, r);
                for (var n = [], i = 0, a = t.length; i < a; i++) n.push(e.call(r, t[i], i, t));
                return n
            }
        }

        function g(t, e, r, n) {
            if (t && e) {
                if (t.reduce && t.reduce === G) return t.reduce(e, r, n);
                for (var i = 0, a = t.length; i < a; i++) r = e.call(n, r, t[i], i, t);
                return r
            }
        }

        function v(t, e, r) {
            if (t && e) {
                if (t.filter && t.filter === j) return t.filter(e, r);
                for (var n = [], i = 0, a = t.length; i < a; i++) e.call(r, t[i], i, t) && n.push(t[i]);
                return n
            }
        }

        function m(t, e, r) {
            if (t && e)
                for (var n = 0, i = t.length; n < i; n++)
                    if (e.call(r, t[n], n, t)) return t[n]
        }

        function x(t, e) {
            var r = V.call(arguments, 2);
            return function () {
                return t.apply(e, r.concat(V.call(arguments)))
            }
        }

        function y(t) {
            var e = V.call(arguments, 1);
            return function () {
                return t.apply(this, e.concat(V.call(arguments)))
            }
        }

        function _(t) {
            return "[object Array]" === E.call(t)
        }

        function w(t) {
            return "function" == typeof t
        }

        function b(t) {
            return "[object String]" === E.call(t)
        }

        function S(t) {
            var e = typeof t;
            return "function" === e || !!t && "object" == e
        }

        function T(t) {
            return !!q[E.call(t)]
        }

        function M(t) {
            return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
        }

        function P(t) {
            return t !== t
        }

        function k(t) {
            for (var e = 0, r = arguments.length; e < r; e++)
                if (null != arguments[e]) return arguments[e]
        }

        function C(t, e) {
            return null != t ? t : e
        }

        function I(t, e, r) {
            return null != t ? t : null != e ? e : r
        }

        function A() {
            return Function.call.apply(V, arguments)
        }

        function O(t) {
            if ("number" == typeof t) return [t, t, t, t];
            var e = t.length;
            return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
        }

        function D(t, e) {
            if (!t) throw new Error(e)
        }

        function L(t) {
            t[Y] = !0
        }

        function B(t) {
            return t[Y]
        }

        function F(t) {
            t && d(t, function (t, e) {
                this.set(e, t)
            }, this)
        }

        function R(t) {
            return new F(t)
        }
        var z, q = {
                "[object Function]": 1,
                "[object RegExp]": 1,
                "[object Date]": 1,
                "[object Error]": 1,
                "[object CanvasGradient]": 1,
                "[object CanvasPattern]": 1,
                "[object Image]": 1,
                "[object Canvas]": 1
            },
            W = {
                "[object Int8Array]": 1,
                "[object Uint8Array]": 1,
                "[object Uint8ClampedArray]": 1,
                "[object Int16Array]": 1,
                "[object Uint16Array]": 1,
                "[object Int32Array]": 1,
                "[object Uint32Array]": 1,
                "[object Float32Array]": 1,
                "[object Float64Array]": 1
            },
            E = Object.prototype.toString,
            N = Array.prototype,
            H = N.forEach,
            j = N.filter,
            V = N.slice,
            X = N.map,
            G = N.reduce,
            Y = "__ec_primitive__",
            U = "_ec_",
            Z = 4;
        F.prototype = {
            constructor: F,
            get: function (t) {
                return this[U + t]
            },
            set: function (t, e) {
                return this[U + t] = e, e
            },
            each: function (t, e) {
                void 0 !== e && (t = x(t, e));
                for (var r in this) this.hasOwnProperty(r) && t(this[r], r.slice(Z))
            },
            removeKey: function (t) {
                delete this[t]
            }
        };
        var $ = {
            inherits: u,
            mixin: c,
            clone: r,
            merge: n,
            mergeAll: i,
            extend: a,
            defaults: o,
            getContext: l,
            createCanvas: s,
            indexOf: h,
            slice: A,
            find: m,
            isArrayLike: f,
            each: d,
            map: p,
            reduce: g,
            filter: v,
            bind: x,
            curry: y,
            isArray: _,
            isString: b,
            isObject: S,
            isFunction: w,
            isBuiltInObject: T,
            isDom: M,
            eqNaN: P,
            retrieve: k,
            retrieve2: C,
            retrieve3: I,
            assert: D,
            setAsPrimitive: L,
            createHashMap: R,
            normalizeCssArray: O,
            noop: function () {}
        };
        t.exports = $
    }, function (t, e, r) {
        function n(t) {
            i.call(this, t), this.path = null
        }
        var i = r(11),
            a = r(1),
            o = r(7),
            s = r(47),
            l = r(57),
            h = l.prototype.getCanvasPattern,
            u = Math.abs,
            c = new o(!0);
        n.prototype = {
            constructor: n,
            type: "path",
            __dirtyPath: !0,
            strokeContainThreshold: 5,
            brush: function (t, e) {
                var r = this.style,
                    n = this.path || c,
                    i = r.hasStroke(),
                    a = r.hasFill(),
                    o = r.fill,
                    s = r.stroke,
                    l = a && !!o.colorStops,
                    u = i && !!s.colorStops,
                    f = a && !!o.image,
                    d = i && !!s.image;
                if (r.bind(t, this, e), this.setTransform(t), this.__dirty) {
                    var p;
                    l && (p = p || this.getBoundingRect(), this._fillGradient = r.getGradient(t, o, p)), u && (p = p || this.getBoundingRect(), this._strokeGradient = r.getGradient(t, s, p))
                }
                l ? t.fillStyle = this._fillGradient : f && (t.fillStyle = h.call(o, t)), u ? t.strokeStyle = this._strokeGradient : d && (t.strokeStyle = h.call(s, t));
                var g = r.lineDash,
                    v = r.lineDashOffset,
                    m = !!t.setLineDash,
                    x = this.getGlobalScale();
                n.setScale(x[0], x[1]), this.__dirtyPath || g && !m && i ? (n.beginPath(t), g && !m && (n.setLineDash(g), n.setLineDashOffset(v)), this.buildPath(n, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a && n.fill(t), g && m && (t.setLineDash(g), t.lineDashOffset = v), i && n.stroke(t), g && m && t.setLineDash([]), this.restoreTransform(t), null != r.text && this.drawRectText(t, this.getBoundingRect())
            },
            buildPath: function (t, e, r) {},
            createPathProxy: function () {
                this.path = new o
            },
            getBoundingRect: function () {
                var t = this._rect,
                    e = this.style,
                    r = !t;
                if (r) {
                    var n = this.path;
                    n || (n = this.path = new o), this.__dirtyPath && (n.beginPath(), this.buildPath(n, this.shape, !1)), t = n.getBoundingRect()
                }
                if (this._rect = t, e.hasStroke()) {
                    var i = this._rectWithStroke || (this._rectWithStroke = t.clone());
                    if (this.__dirty || r) {
                        i.copy(t);
                        var a = e.lineWidth,
                            s = e.strokeNoScale ? this.getLineScale() : 1;
                        e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), s > 1e-10 && (i.width += a / s, i.height += a / s, i.x -= a / s / 2, i.y -= a / s / 2)
                    }
                    return i
                }
                return t
            },
            contain: function (t, e) {
                var r = this.transformCoordToLocal(t, e),
                    n = this.getBoundingRect(),
                    i = this.style;
                if (t = r[0], e = r[1], n.contain(t, e)) {
                    var a = this.path.data;
                    if (i.hasStroke()) {
                        var o = i.lineWidth,
                            l = i.strokeNoScale ? this.getLineScale() : 1;
                        if (l > 1e-10 && (i.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), s.containStroke(a, o / l, t, e))) return !0
                    }
                    if (i.hasFill()) return s.contain(a, t, e)
                }
                return !1
            },
            dirty: function (t) {
                null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
            },
            animateShape: function (t) {
                return this.animate("shape", t)
            },
            attrKV: function (t, e) {
                "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : i.prototype.attrKV.call(this, t, e)
            },
            setShape: function (t, e) {
                var r = this.shape;
                if (r) {
                    if (a.isObject(t))
                        for (var n in t) t.hasOwnProperty(n) && (r[n] = t[n]);
                    else r[t] = e;
                    this.dirty(!0)
                }
                return this
            },
            getLineScale: function () {
                var t = this.transform;
                return t && u(t[0] - 1) > 1e-10 && u(t[3] - 1) > 1e-10 ? Math.sqrt(u(t[0] * t[3] - t[2] * t[1])) : 1
            }
        }, n.extend = function (t) {
            var e = function (e) {
                n.call(this, e), t.style && this.style.extendFrom(t.style, !1);
                var r = t.shape;
                if (r) {
                    this.shape = this.shape || {};
                    var i = this.shape;
                    for (var a in r) !i.hasOwnProperty(a) && r.hasOwnProperty(a) && (i[a] = r[a])
                }
                t.init && t.init.call(this, e)
            };
            a.inherits(e, n);
            for (var r in t) "style" !== r && "shape" !== r && (e.prototype[r] = t[r]);
            return e
        }, a.inherits(n, i), t.exports = n
    }, function (t, e) {
        var r = "undefined" == typeof Float32Array ? Array : Float32Array,
            n = {
                create: function (t, e) {
                    var n = new r(2);
                    return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n
                },
                copy: function (t, e) {
                    return t[0] = e[0], t[1] = e[1], t
                },
                clone: function (t) {
                    var e = new r(2);
                    return e[0] = t[0], e[1] = t[1], e
                },
                set: function (t, e, r) {
                    return t[0] = e, t[1] = r, t
                },
                add: function (t, e, r) {
                    return t[0] = e[0] + r[0], t[1] = e[1] + r[1], t
                },
                scaleAndAdd: function (t, e, r, n) {
                    return t[0] = e[0] + r[0] * n, t[1] = e[1] + r[1] * n, t
                },
                sub: function (t, e, r) {
                    return t[0] = e[0] - r[0], t[1] = e[1] - r[1], t
                },
                len: function (t) {
                    return Math.sqrt(this.lenSquare(t))
                },
                lenSquare: function (t) {
                    return t[0] * t[0] + t[1] * t[1]
                },
                mul: function (t, e, r) {
                    return t[0] = e[0] * r[0], t[1] = e[1] * r[1], t
                },
                div: function (t, e, r) {
                    return t[0] = e[0] / r[0], t[1] = e[1] / r[1], t
                },
                dot: function (t, e) {
                    return t[0] * e[0] + t[1] * e[1]
                },
                scale: function (t, e, r) {
                    return t[0] = e[0] * r, t[1] = e[1] * r, t
                },
                normalize: function (t, e) {
                    var r = n.len(e);
                    return 0 === r ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / r, t[1] = e[1] / r), t
                },
                distance: function (t, e) {
                    return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
                },
                distanceSquare: function (t, e) {
                    return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
                },
                negate: function (t, e) {
                    return t[0] = -e[0], t[1] = -e[1], t
                },
                lerp: function (t, e, r, n) {
                    return t[0] = e[0] + n * (r[0] - e[0]), t[1] = e[1] + n * (r[1] - e[1]), t
                },
                applyTransform: function (t, e, r) {
                    var n = e[0],
                        i = e[1];
                    return t[0] = r[0] * n + r[2] * i + r[4], t[1] = r[1] * n + r[3] * i + r[5], t
                },
                min: function (t, e, r) {
                    return t[0] = Math.min(e[0], r[0]), t[1] = Math.min(e[1], r[1]), t
                },
                max: function (t, e, r) {
                    return t[0] = Math.max(e[0], r[0]), t[1] = Math.max(e[1], r[1]), t
                }
            };
        n.length = n.len, n.lengthSquare = n.lenSquare, n.dist = n.distance, n.distSquare = n.distanceSquare, t.exports = n
    }, function (t, e, r) {
        "use strict";

        function n(t, e, r, n) {
            r < 0 && (t += r, r = -r), n < 0 && (e += n, n = -n), this.x = t, this.y = e, this.width = r, this.height = n
        }
        var i = r(3),
            a = r(10),
            o = i.applyTransform,
            s = Math.min,
            l = Math.max;
        n.prototype = {
            constructor: n,
            union: function (t) {
                var e = s(t.x, this.x),
                    r = s(t.y, this.y);
                this.width = l(t.x + t.width, this.x + this.width) - e, this.height = l(t.y + t.height, this.y + this.height) - r, this.x = e, this.y = r
            },
            applyTransform: function () {
                var t = [],
                    e = [],
                    r = [],
                    n = [];
                return function (i) {
                    if (i) {
                        t[0] = r[0] = this.x, t[1] = n[1] = this.y, e[0] = n[0] = this.x + this.width, e[1] = r[1] = this.y + this.height, o(t, t, i), o(e, e, i), o(r, r, i), o(n, n, i), this.x = s(t[0], e[0], r[0], n[0]), this.y = s(t[1], e[1], r[1], n[1]);
                        var a = l(t[0], e[0], r[0], n[0]),
                            h = l(t[1], e[1], r[1], n[1]);
                        this.width = a - this.x, this.height = h - this.y
                    }
                }
            }(),
            calculateTransform: function (t) {
                var e = this,
                    r = t.width / e.width,
                    n = t.height / e.height,
                    i = a.create();
                return a.translate(i, i, [-e.x, -e.y]), a.scale(i, i, [r, n]), a.translate(i, i, [t.x, t.y]), i
            },
            intersect: function (t) {
                if (!t) return !1;
                t instanceof n || (t = n.create(t));
                var e = this,
                    r = e.x,
                    i = e.x + e.width,
                    a = e.y,
                    o = e.y + e.height,
                    s = t.x,
                    l = t.x + t.width,
                    h = t.y,
                    u = t.y + t.height;
                return !(i < s || l < r || o < h || u < a)
            },
            contain: function (t, e) {
                var r = this;
                return t >= r.x && t <= r.x + r.width && e >= r.y && e <= r.y + r.height
            },
            clone: function () {
                return new n(this.x, this.y, this.width, this.height)
            },
            copy: function (t) {
                this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
            },
            plain: function () {
                return {
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: this.height
                }
            }
        }, n.create = function (t) {
            return new n(t.x, t.y, t.width, t.height)
        }, t.exports = n
    }, function (t, e, r) {
        "use strict";

        function n(t) {
            return t > -b && t < b
        }

        function i(t) {
            return t > b || t < -b
        }

        function a(t, e, r, n, i) {
            var a = 1 - i;
            return a * a * (a * t + 3 * i * e) + i * i * (i * n + 3 * a * r)
        }

        function o(t, e, r, n, i) {
            var a = 1 - i;
            return 3 * (((e - t) * a + 2 * (r - e) * i) * a + (n - r) * i * i)
        }

        function s(t, e, r, i, a, o) {
            var s = i + 3 * (e - r) - t,
                l = 3 * (r - 2 * e + t),
                h = 3 * (e - t),
                u = t - a,
                c = l * l - 3 * s * h,
                f = l * h - 9 * s * u,
                d = h * h - 3 * l * u,
                p = 0;
            if (n(c) && n(f))
                if (n(l)) o[0] = 0;
                else {
                    var g = -h / l;
                    g >= 0 && g <= 1 && (o[p++] = g)
                }
            else {
                var v = f * f - 4 * c * d;
                if (n(v)) {
                    var m = f / c,
                        g = -l / s + m,
                        x = -m / 2;
                    g >= 0 && g <= 1 && (o[p++] = g), x >= 0 && x <= 1 && (o[p++] = x)
                } else if (v > 0) {
                    var y = w(v),
                        b = c * l + 1.5 * s * (-f + y),
                        S = c * l + 1.5 * s * (-f - y);
                    b = b < 0 ? -_(-b, M) : _(b, M), S = S < 0 ? -_(-S, M) : _(S, M);
                    var g = (-l - (b + S)) / (3 * s);
                    g >= 0 && g <= 1 && (o[p++] = g)
                } else {
                    var P = (2 * c * l - 3 * s * f) / (2 * w(c * c * c)),
                        k = Math.acos(P) / 3,
                        C = w(c),
                        I = Math.cos(k),
                        g = (-l - 2 * C * I) / (3 * s),
                        x = (-l + C * (I + T * Math.sin(k))) / (3 * s),
                        A = (-l + C * (I - T * Math.sin(k))) / (3 * s);
                    g >= 0 && g <= 1 && (o[p++] = g), x >= 0 && x <= 1 && (o[p++] = x), A >= 0 && A <= 1 && (o[p++] = A)
                }
            }
            return p
        }

        function l(t, e, r, a, o) {
            var s = 6 * r - 12 * e + 6 * t,
                l = 9 * e + 3 * a - 3 * t - 9 * r,
                h = 3 * e - 3 * t,
                u = 0;
            if (n(l)) {
                if (i(s)) {
                    var c = -h / s;
                    c >= 0 && c <= 1 && (o[u++] = c)
                }
            } else {
                var f = s * s - 4 * l * h;
                if (n(f)) o[0] = -s / (2 * l);
                else if (f > 0) {
                    var d = w(f),
                        c = (-s + d) / (2 * l),
                        p = (-s - d) / (2 * l);
                    c >= 0 && c <= 1 && (o[u++] = c), p >= 0 && p <= 1 && (o[u++] = p)
                }
            }
            return u
        }

        function h(t, e, r, n, i, a) {
            var o = (e - t) * i + t,
                s = (r - e) * i + e,
                l = (n - r) * i + r,
                h = (s - o) * i + o,
                u = (l - s) * i + s,
                c = (u - h) * i + h;
            a[0] = t, a[1] = o, a[2] = h, a[3] = c, a[4] = c, a[5] = u, a[6] = l, a[7] = n
        }

        function u(t, e, r, n, i, o, s, l, h, u, c) {
            var f, d, p, g, v, m = .005,
                x = 1 / 0;
            P[0] = h, P[1] = u;
            for (var _ = 0; _ < 1; _ += .05) k[0] = a(t, r, i, s, _), k[1] = a(e, n, o, l, _), g = y(P, k), g < x && (f = _, x = g);
            x = 1 / 0;
            for (var b = 0; b < 32 && !(m < S); b++) d = f - m, p = f + m, k[0] = a(t, r, i, s, d), k[1] = a(e, n, o, l, d), g = y(k, P), d >= 0 && g < x ? (f = d, x = g) : (C[0] = a(t, r, i, s, p), C[1] = a(e, n, o, l, p), v = y(C, P), p <= 1 && v < x ? (f = p, x = v) : m *= .5);
            return c && (c[0] = a(t, r, i, s, f), c[1] = a(e, n, o, l, f)), w(x)
        }

        function c(t, e, r, n) {
            var i = 1 - n;
            return i * (i * t + 2 * n * e) + n * n * r
        }

        function f(t, e, r, n) {
            return 2 * ((1 - n) * (e - t) + n * (r - e))
        }

        function d(t, e, r, a, o) {
            var s = t - 2 * e + r,
                l = 2 * (e - t),
                h = t - a,
                u = 0;
            if (n(s)) {
                if (i(l)) {
                    var c = -h / l;
                    c >= 0 && c <= 1 && (o[u++] = c)
                }
            } else {
                var f = l * l - 4 * s * h;
                if (n(f)) {
                    var c = -l / (2 * s);
                    c >= 0 && c <= 1 && (o[u++] = c)
                } else if (f > 0) {
                    var d = w(f),
                        c = (-l + d) / (2 * s),
                        p = (-l - d) / (2 * s);
                    c >= 0 && c <= 1 && (o[u++] = c), p >= 0 && p <= 1 && (o[u++] = p)
                }
            }
            return u
        }

        function p(t, e, r) {
            var n = t + r - 2 * e;
            return 0 === n ? .5 : (t - e) / n
        }

        function g(t, e, r, n, i) {
            var a = (e - t) * n + t,
                o = (r - e) * n + e,
                s = (o - a) * n + a;
            i[0] = t, i[1] = a, i[2] = s, i[3] = s, i[4] = o, i[5] = r
        }

        function v(t, e, r, n, i, a, o, s, l) {
            var h, u = .005,
                f = 1 / 0;
            P[0] = o, P[1] = s;
            for (var d = 0; d < 1; d += .05) {
                k[0] = c(t, r, i, d), k[1] = c(e, n, a, d);
                var p = y(P, k);
                p < f && (h = d, f = p)
            }
            f = 1 / 0;
            for (var g = 0; g < 32 && !(u < S); g++) {
                var v = h - u,
                    m = h + u;
                k[0] = c(t, r, i, v), k[1] = c(e, n, a, v);
                var p = y(k, P);
                if (v >= 0 && p < f) h = v, f = p;
                else {
                    C[0] = c(t, r, i, m), C[1] = c(e, n, a, m);
                    var x = y(C, P);
                    m <= 1 && x < f ? (h = m, f = x) : u *= .5
                }
            }
            return l && (l[0] = c(t, r, i, h), l[1] = c(e, n, a, h)), w(f)
        }
        var m = r(3),
            x = m.create,
            y = m.distSquare,
            _ = Math.pow,
            w = Math.sqrt,
            b = 1e-8,
            S = 1e-4,
            T = w(3),
            M = 1 / 3,
            P = x(),
            k = x(),
            C = x();
        t.exports = {
            cubicAt: a,
            cubicDerivativeAt: o,
            cubicRootAt: s,
            cubicExtrema: l,
            cubicSubdivide: h,
            cubicProjectPoint: u,
            quadraticAt: c,
            quadraticDerivativeAt: f,
            quadraticRootAt: d,
            quadraticExtremum: p,
            quadraticSubdivide: g,
            quadraticProjectPoint: v
        }
    }, function (t, e, r) {
        function n(t, e) {
            e = e || k;
            var r = t + ":" + e;
            if (S[r]) return S[r];
            for (var n = (t + "").split("\n"), i = 0, a = 0, o = n.length; a < o; a++) i = Math.max(A.measureText(n[a], e).width, i);
            return T > M && (T = 0, S = {}), T++, S[r] = i, i
        }

        function i(t, e, r, n, i, s, l) {
            return s ? o(t, e, r, n, i, s, l) : a(t, e, r, n, i, l)
        }

        function a(t, e, r, i, a, o) {
            var h = v(t, e, a, o),
                u = n(t, e);
            a && (u += a[1] + a[3]);
            var c = h.outerHeight,
                f = s(0, u, r),
                d = l(0, c, i),
                p = new w(f, d, u, c);
            return p.lineHeight = h.lineHeight, p
        }

        function o(t, e, r, n, i, a, o) {
            var h = m(t, {
                    rich: a,
                    truncate: o,
                    font: e,
                    textAlign: r,
                    textPadding: i
                }),
                u = h.outerWidth,
                c = h.outerHeight,
                f = s(0, u, r),
                d = l(0, c, n);
            return new w(f, d, u, c)
        }

        function s(t, e, r) {
            return "right" === r ? t -= e : "center" === r && (t -= e / 2), t
        }

        function l(t, e, r) {
            return "middle" === r ? t -= e / 2 : "bottom" === r && (t -= e), t
        }

        function h(t, e, r) {
            var n = e.x,
                i = e.y,
                a = e.height,
                o = e.width,
                s = a / 2,
                l = "left",
                h = "top";
            switch (t) {
                case "left":
                    n -= r, i += s, l = "right", h = "middle";
                    break;
                case "right":
                    n += r + o, i += s, h = "middle";
                    break;
                case "top":
                    n += o / 2, i -= r, l = "center", h = "bottom";
                    break;
                case "bottom":
                    n += o / 2, i += a + r, l = "center";
                    break;
                case "inside":
                    n += o / 2, i += s, l = "center", h = "middle";
                    break;
                case "insideLeft":
                    n += r, i += s, h = "middle";
                    break;
                case "insideRight":
                    n += o - r, i += s, l = "right", h = "middle";
                    break;
                case "insideTop":
                    n += o / 2, i += r, l = "center";
                    break;
                case "insideBottom":
                    n += o / 2, i += a - r, l = "center", h = "bottom";
                    break;
                case "insideTopLeft":
                    n += r, i += r;
                    break;
                case "insideTopRight":
                    n += o - r, i += r, l = "right";
                    break;
                case "insideBottomLeft":
                    n += r, i += a - r, h = "bottom";
                    break;
                case "insideBottomRight":
                    n += o - r, i += a - r, l = "right", h = "bottom"
            }
            return {
                x: n,
                y: i,
                textAlign: l,
                textVerticalAlign: h
            }
        }

        function u(t, e, r, n, i) {
            if (!e) return "";
            var a = (t + "").split("\n");
            i = c(e, r, n, i);
            for (var o = 0, s = a.length; o < s; o++) a[o] = f(a[o], i);
            return a.join("\n")
        }

        function c(t, e, r, i) {
            i = _.extend({}, i), i.font = e;
            var r = C(r, "...");
            i.maxIterations = C(i.maxIterations, 2);
            var a = i.minChar = C(i.minChar, 0);
            i.cnCharWidth = n("鍥�", e);
            var o = i.ascCharWidth = n("a", e);
            i.placeholder = C(i.placeholder, "");
            for (var s = t = Math.max(0, t - 1), l = 0; l < a && s >= o; l++) s -= o;
            var h = n(r);
            return h > s && (r = "", h = 0), s = t - h, i.ellipsis = r, i.ellipsisWidth = h, i.contentWidth = s, i.containerWidth = t, i
        }

        function f(t, e) {
            var r = e.containerWidth,
                i = e.font,
                a = e.contentWidth;
            if (!r) return "";
            var o = n(t, i);
            if (o <= r) return t;
            for (var s = 0;; s++) {
                if (o <= a || s >= e.maxIterations) {
                    t += e.ellipsis;
                    break
                }
                var l = 0 === s ? d(t, a, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor(t.length * a / o) : 0;
                t = t.substr(0, l), o = n(t, i)
            }
            return "" === t && (t = e.placeholder), t
        }

        function d(t, e, r, n) {
            for (var i = 0, a = 0, o = t.length; a < o && i < e; a++) {
                var s = t.charCodeAt(a);
                i += 0 <= s && s <= 127 ? r : n
            }
            return a
        }

        function p(t) {
            return n("鍥�", t)
        }

        function g(t, e) {
            var r = _.getContext();
            return r.font = e || k, r.measureText(t)
        }

        function v(t, e, r, n) {
            null != t && (t += "");
            var i = p(e),
                a = t ? t.split("\n") : [],
                o = a.length * i,
                s = o;
            if (r && (s += r[0] + r[2]), t && n) {
                var l = n.outerHeight,
                    h = n.outerWidth;
                if (null != l && s > l) t = "", a = [];
                else if (null != h)
                    for (var u = c(h - (r ? r[1] + r[3] : 0), e, n.ellipsis, {
                            minChar: n.minChar,
                            placeholder: n.placeholder
                        }), d = 0, g = a.length; d < g; d++) a[d] = f(a[d], u)
            }
            return {
                lines: a,
                height: o,
                outerHeight: s,
                lineHeight: i
            }
        }

        function m(t, e) {
            var r = {
                lines: [],
                width: 0,
                height: 0
            };
            if (null != t && (t += ""), !t) return r;
            for (var n, i = P.lastIndex = 0; null != (n = P.exec(t));) {
                var a = n.index;
                a > i && x(r, t.substring(i, a)), x(r, n[2], n[1]), i = P.lastIndex
            }
            i < t.length && x(r, t.substring(i, t.length));
            var o = r.lines,
                s = 0,
                l = 0,
                h = [],
                c = e.textPadding,
                f = e.truncate,
                d = f && f.outerWidth,
                p = f && f.outerHeight;
            c && (null != d && (d -= c[1] + c[3]), null != p && (p -= c[0] + c[2]));
            for (var g = 0; g < o.length; g++) {
                for (var v = o[g], m = 0, y = 0, _ = 0; _ < v.tokens.length; _++) {
                    var w = v.tokens[_],
                        S = w.styleName && e.rich[w.styleName] || {},
                        T = w.textPadding = S.textPadding,
                        M = w.font = S.font || e.font,
                        k = w.textHeight = C(S.textHeight, A.getLineHeight(M));
                    if (T && (k += T[0] + T[2]), w.height = k, w.lineHeight = I(S.textLineHeight, e.textLineHeight, k), w.textAlign = S && S.textAlign || e.textAlign, w.textVerticalAlign = S && S.textVerticalAlign || "middle", null != p && s + w.lineHeight > p) return {
                        lines: [],
                        width: 0,
                        height: 0
                    };
                    w.textWidth = A.getWidth(w.text, M);
                    var O = S.textWidth,
                        D = null == O || "auto" === O;
                    if ("string" == typeof O && "%" === O.charAt(O.length - 1)) w.percentWidth = O, h.push(w), O = 0;
                    else {
                        if (D) {
                            O = w.textWidth;
                            var L = S.textBackgroundColor,
                                B = L && L.image;
                            B && (B = b.findExistImage(B), b.isImageReady(B) && (O = Math.max(O, B.width * k / B.height)))
                        }
                        var F = T ? T[1] + T[3] : 0;
                        O += F;
                        var R = null != d ? d - y : null;
                        null != R && R < O && (!D || R < F ? (w.text = "", w.textWidth = O = 0) : (w.text = u(w.text, R - F, M, f.ellipsis, {
                            minChar: f.minChar
                        }), w.textWidth = A.getWidth(w.text, M), O = w.textWidth + F))
                    }
                    y += w.width = O, S && (m = Math.max(m, w.lineHeight))
                }
                v.width = y, v.lineHeight = m, s += m, l = Math.max(l, y)
            }
            r.outerWidth = r.width = C(e.textWidth, l), r.outerHeight = r.height = C(e.textHeight, s), c && (r.outerWidth += c[1] + c[3], r.outerHeight += c[0] + c[2]);
            for (var g = 0; g < h.length; g++) {
                var w = h[g],
                    z = w.percentWidth;
                w.width = parseInt(z, 10) / 100 * l
            }
            return r
        }

        function x(t, e, r) {
            for (var n = "" === e, i = e.split("\n"), a = t.lines, o = 0; o < i.length; o++) {
                var s = i[o],
                    l = {
                        styleName: r,
                        text: s,
                        isLineHolder: !s && !n
                    };
                if (o) a.push({
                    tokens: [l]
                });
                else {
                    var h = (a[a.length - 1] || (a[0] = {
                            tokens: []
                        })).tokens,
                        u = h.length;
                    1 === u && h[0].isLineHolder ? h[0] = l : (s || !u || n) && h.push(l)
                }
            }
        }

        function y(t) {
            return (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ") || t.textFont || t.font
        }
        var _ = r(1),
            w = r(4),
            b = r(12),
            S = {},
            T = 0,
            M = 5e3,
            P = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
            k = "12px sans-serif",
            C = _.retrieve2,
            I = _.retrieve3,
            A = {
                getWidth: n,
                getBoundingRect: i,
                adjustTextPositionOnRect: h,
                truncateText: u,
                measureText: g,
                getLineHeight: p,
                parsePlainText: v,
                parseRichText: m,
                adjustTextX: s,
                adjustTextY: l,
                makeFont: y,
                DEFAULT_FONT: k
            };
        t.exports = A
    }, function (t, e, r) {
        "use strict";
        var n = r(5),
            i = r(3),
            a = r(51),
            o = r(4),
            s = r(17).devicePixelRatio,
            l = {
                M: 1,
                L: 2,
                C: 3,
                Q: 4,
                A: 5,
                Z: 6,
                R: 7
            },
            h = [],
            u = [],
            c = [],
            f = [],
            d = Math.min,
            p = Math.max,
            g = Math.cos,
            v = Math.sin,
            m = Math.sqrt,
            x = Math.abs,
            y = "undefined" != typeof Float32Array,
            _ = function (t) {
                this._saveData = !t, this._saveData && (this.data = []), this._ctx = null
            };
        _.prototype = {
            constructor: _,
            _xi: 0,
            _yi: 0,
            _x0: 0,
            _y0: 0,
            _ux: 0,
            _uy: 0,
            _len: 0,
            _lineDash: null,
            _dashOffset: 0,
            _dashIdx: 0,
            _dashSum: 0,
            setScale: function (t, e) {
                this._ux = x(1 / s / t) || 0, this._uy = x(1 / s / e) || 0
            },
            getContext: function () {
                return this._ctx
            },
            beginPath: function (t) {
                return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
            },
            moveTo: function (t, e) {
                return this.addData(l.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
            },
            lineTo: function (t, e) {
                var r = x(t - this._xi) > this._ux || x(e - this._yi) > this._uy || this._len < 5;
                return this.addData(l.L, t, e), this._ctx && r && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), r && (this._xi = t, this._yi = e), this
            },
            bezierCurveTo: function (t, e, r, n, i, a) {
                return this.addData(l.C, t, e, r, n, i, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, r, n, i, a) : this._ctx.bezierCurveTo(t, e, r, n, i, a)), this._xi = i, this._yi = a, this
            },
            quadraticCurveTo: function (t, e, r, n) {
                return this.addData(l.Q, t, e, r, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, r, n) : this._ctx.quadraticCurveTo(t, e, r, n)), this._xi = r, this._yi = n, this
            },
            arc: function (t, e, r, n, i, a) {
                return this.addData(l.A, t, e, r, r, n, i - n, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, r, n, i, a), this._xi = g(i) * r + t, this._yi = v(i) * r + t, this
            },
            arcTo: function (t, e, r, n, i) {
                return this._ctx && this._ctx.arcTo(t, e, r, n, i), this
            },
            rect: function (t, e, r, n) {
                return this._ctx && this._ctx.rect(t, e, r, n), this.addData(l.R, t, e, r, n), this
            },
            closePath: function () {
                this.addData(l.Z);
                var t = this._ctx,
                    e = this._x0,
                    r = this._y0;
                return t && (this._needsDash() && this._dashedLineTo(e, r), t.closePath()), this._xi = e, this._yi = r, this
            },
            fill: function (t) {
                t && t.fill(), this.toStatic()
            },
            stroke: function (t) {
                t && t.stroke(), this.toStatic()
            },
            setLineDash: function (t) {
                if (t instanceof Array) {
                    this._lineDash = t, this._dashIdx = 0;
                    for (var e = 0, r = 0; r < t.length; r++) e += t[r];
                    this._dashSum = e
                }
                return this
            },
            setLineDashOffset: function (t) {
                return this._dashOffset = t, this
            },
            len: function () {
                return this._len
            },
            setData: function (t) {
                var e = t.length;
                this.data && this.data.length == e || !y || (this.data = new Float32Array(e));
                for (var r = 0; r < e; r++) this.data[r] = t[r];
                this._len = e
            },
            appendPath: function (t) {
                t instanceof Array || (t = [t]);
                for (var e = t.length, r = 0, n = this._len, i = 0; i < e; i++) r += t[i].len();
                y && this.data instanceof Float32Array && (this.data = new Float32Array(n + r));
                for (var i = 0; i < e; i++)
                    for (var a = t[i].data, o = 0; o < a.length; o++) this.data[n++] = a[o];
                this._len = n
            },
            addData: function (t) {
                if (this._saveData) {
                    var e = this.data;
                    this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                    for (var r = 0; r < arguments.length; r++) e[this._len++] = arguments[r];
                    this._prevCmd = t
                }
            },
            _expandData: function () {
                if (!(this.data instanceof Array)) {
                    for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                    this.data = t
                }
            },
            _needsDash: function () {
                return this._lineDash
            },
            _dashedLineTo: function (t, e) {
                var r, n, i = this._dashSum,
                    a = this._dashOffset,
                    o = this._lineDash,
                    s = this._ctx,
                    l = this._xi,
                    h = this._yi,
                    u = t - l,
                    c = e - h,
                    f = m(u * u + c * c),
                    g = l,
                    v = h,
                    x = o.length;
                for (u /= f, c /= f, a < 0 && (a = i + a), a %= i, g -= a * u, v -= a * c; u > 0 && g <= t || u < 0 && g >= t || 0 == u && (c > 0 && v <= e || c < 0 && v >= e);) n = this._dashIdx, r = o[n], g += u * r, v += c * r, this._dashIdx = (n + 1) % x, u > 0 && g < l || u < 0 && g > l || c > 0 && v < h || c < 0 && v > h || s[n % 2 ? "moveTo" : "lineTo"](u >= 0 ? d(g, t) : p(g, t), c >= 0 ? d(v, e) : p(v, e));
                u = g - t, c = v - e, this._dashOffset = -m(u * u + c * c)
            },
            _dashedBezierTo: function (t, e, r, i, a, o) {
                var s, l, h, u, c, f = this._dashSum,
                    d = this._dashOffset,
                    p = this._lineDash,
                    g = this._ctx,
                    v = this._xi,
                    x = this._yi,
                    y = n.cubicAt,
                    _ = 0,
                    w = this._dashIdx,
                    b = p.length,
                    S = 0;
                for (d < 0 && (d = f + d), d %= f, s = 0; s < 1; s += .1) l = y(v, t, r, a, s + .1) - y(v, t, r, a, s), h = y(x, e, i, o, s + .1) - y(x, e, i, o, s), _ += m(l * l + h * h);
                for (; w < b && (S += p[w], !(S > d)); w++);
                for (s = (S - d) / _; s <= 1;) u = y(v, t, r, a, s), c = y(x, e, i, o, s), w % 2 ? g.moveTo(u, c) : g.lineTo(u, c), s += p[w] / _, w = (w + 1) % b;
                w % 2 !== 0 && g.lineTo(a, o), l = a - u, h = o - c, this._dashOffset = -m(l * l + h * h)
            },
            _dashedQuadraticTo: function (t, e, r, n) {
                var i = r,
                    a = n;
                r = (r + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, r, n, i, a)
            },
            toStatic: function () {
                var t = this.data;
                t instanceof Array && (t.length = this._len, y && (this.data = new Float32Array(t)))
            },
            getBoundingRect: function () {
                h[0] = h[1] = c[0] = c[1] = Number.MAX_VALUE, u[0] = u[1] = f[0] = f[1] = -Number.MAX_VALUE;
                for (var t = this.data, e = 0, r = 0, n = 0, s = 0, d = 0; d < t.length;) {
                    var p = t[d++];
                    switch (1 == d && (e = t[d], r = t[d + 1], n = e, s = r), p) {
                        case l.M:
                            n = t[d++], s = t[d++], e = n, r = s, c[0] = n, c[1] = s, f[0] = n, f[1] = s;
                            break;
                        case l.L:
                            a.fromLine(e, r, t[d], t[d + 1], c, f), e = t[d++], r = t[d++];
                            break;
                        case l.C:
                            a.fromCubic(e, r, t[d++], t[d++], t[d++], t[d++], t[d], t[d + 1], c, f), e = t[d++], r = t[d++];
                            break;
                        case l.Q:
                            a.fromQuadratic(e, r, t[d++], t[d++], t[d], t[d + 1], c, f), e = t[d++], r = t[d++];
                            break;
                        case l.A:
                            var m = t[d++],
                                x = t[d++],
                                y = t[d++],
                                _ = t[d++],
                                w = t[d++],
                                b = t[d++] + w,
                                S = (t[d++], 1 - t[d++]);
                            1 == d && (n = g(w) * y + m, s = v(w) * _ + x), a.fromArc(m, x, y, _, w, b, S, c, f), e = g(b) * y + m, r = v(b) * _ + x;
                            break;
                        case l.R:
                            n = e = t[d++], s = r = t[d++];
                            var T = t[d++],
                                M = t[d++];
                            a.fromLine(n, s, n + T, s + M, c, f);
                            break;
                        case l.Z:
                            e = n, r = s
                    }
                    i.min(h, h, c), i.max(u, u, f)
                }
                return 0 === d && (h[0] = h[1] = u[0] = u[1] = 0), new o(h[0], h[1], u[0] - h[0], u[1] - h[1])
            },
            rebuildPath: function (t) {
                for (var e, r, n, i, a, o, s = this.data, h = this._ux, u = this._uy, c = this._len, f = 0; f < c;) {
                    var d = s[f++];
                    switch (1 == f && (n = s[f], i = s[f + 1], e = n, r = i), d) {
                        case l.M:
                            e = n = s[f++], r = i = s[f++], t.moveTo(n, i);
                            break;
                        case l.L:
                            a = s[f++], o = s[f++], (x(a - n) > h || x(o - i) > u || f === c - 1) && (t.lineTo(a, o), n = a, i = o);
                            break;
                        case l.C:
                            t.bezierCurveTo(s[f++], s[f++], s[f++], s[f++], s[f++], s[f++]), n = s[f - 2], i = s[f - 1];
                            break;
                        case l.Q:
                            t.quadraticCurveTo(s[f++], s[f++], s[f++], s[f++]), n = s[f - 2], i = s[f - 1];
                            break;
                        case l.A:
                            var p = s[f++],
                                m = s[f++],
                                y = s[f++],
                                _ = s[f++],
                                w = s[f++],
                                b = s[f++],
                                S = s[f++],
                                T = s[f++],
                                M = y > _ ? y : _,
                                P = y > _ ? 1 : y / _,
                                k = y > _ ? _ / y : 1,
                                C = Math.abs(y - _) > .001,
                                I = w + b;
                            C ? (t.translate(p, m), t.rotate(S), t.scale(P, k), t.arc(0, 0, M, w, I, 1 - T), t.scale(1 / P, 1 / k), t.rotate(-S), t.translate(-p, -m)) : t.arc(p, m, M, w, I, 1 - T), 1 == f && (e = g(w) * y + p, r = v(w) * _ + m), n = g(I) * y + p, i = v(I) * _ + m;
                            break;
                        case l.R:
                            e = n = s[f], r = i = s[f + 1], t.rect(s[f++], s[f++], s[f++], s[f++]);
                            break;
                        case l.Z:
                            t.closePath(), n = e, i = r
                    }
                }
            }
        }, _.CMD = l, t.exports = _
    }, function (e, r) {
        e.exports = t
    }, function (t, e, r) {
        var n = r(1);
        t.exports = function (t) {
            for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
            return function (e, r) {
                for (var i = {}, a = 0; a < t.length; a++) {
                    var o = t[a][1];
                    if (!(e && n.indexOf(e, o) >= 0 || r && n.indexOf(r, o) < 0)) {
                        var s = this.getShallow(o);
                        null != s && (i[t[a][0]] = s)
                    }
                }
                return i
            }
        }
    }, function (t, e) {
        var r = "undefined" == typeof Float32Array ? Array : Float32Array,
            n = {
                create: function () {
                    var t = new r(6);
                    return n.identity(t), t
                },
                identity: function (t) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
                },
                copy: function (t, e) {
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
                },
                mul: function (t, e, r) {
                    var n = e[0] * r[0] + e[2] * r[1],
                        i = e[1] * r[0] + e[3] * r[1],
                        a = e[0] * r[2] + e[2] * r[3],
                        o = e[1] * r[2] + e[3] * r[3],
                        s = e[0] * r[4] + e[2] * r[5] + e[4],
                        l = e[1] * r[4] + e[3] * r[5] + e[5];
                    return t[0] = n, t[1] = i, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t
                },
                translate: function (t, e, r) {
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + r[0], t[5] = e[5] + r[1], t
                },
                rotate: function (t, e, r) {
                    var n = e[0],
                        i = e[2],
                        a = e[4],
                        o = e[1],
                        s = e[3],
                        l = e[5],
                        h = Math.sin(r),
                        u = Math.cos(r);
                    return t[0] = n * u + o * h, t[1] = -n * h + o * u, t[2] = i * u + s * h, t[3] = -i * h + u * s, t[4] = u * a + h * l, t[5] = u * l - h * a, t
                },
                scale: function (t, e, r) {
                    var n = r[0],
                        i = r[1];
                    return t[0] = e[0] * n, t[1] = e[1] * i, t[2] = e[2] * n, t[3] = e[3] * i, t[4] = e[4] * n, t[5] = e[5] * i, t
                },
                invert: function (t, e) {
                    var r = e[0],
                        n = e[2],
                        i = e[4],
                        a = e[1],
                        o = e[3],
                        s = e[5],
                        l = r * o - a * n;
                    return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -n * l, t[3] = r * l, t[4] = (n * s - o * i) * l, t[5] = (a * i - r * s) * l, t) : null
                }
            };
        t.exports = n
    }, function (t, e, r) {
        function n(t) {
            t = t || {}, o.call(this, t);
            for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
            this.style = new a(t.style, this), this._rect = null, this.__clipPaths = []
        }
        var i = r(1),
            a = r(59),
            o = r(16),
            s = r(64);
        n.prototype = {
            constructor: n,
            type: "displayable",
            __dirty: !0,
            invisible: !1,
            z: 0,
            z2: 0,
            zlevel: 0,
            draggable: !1,
            dragging: !1,
            silent: !1,
            culling: !1,
            cursor: "pointer",
            rectHover: !1,
            progressive: -1,
            beforeBrush: function (t) {},
            afterBrush: function (t) {},
            brush: function (t, e) {},
            getBoundingRect: function () {},
            contain: function (t, e) {
                return this.rectContain(t, e)
            },
            traverse: function (t, e) {
                t.call(e, this)
            },
            rectContain: function (t, e) {
                var r = this.transformCoordToLocal(t, e),
                    n = this.getBoundingRect();
                return n.contain(r[0], r[1])
            },
            dirty: function () {
                this.__dirty = !0, this._rect = null, this.__zr && this.__zr.refresh()
            },
            animateStyle: function (t) {
                return this.animate("style", t)
            },
            attrKV: function (t, e) {
                "style" !== t ? o.prototype.attrKV.call(this, t, e) : this.style.set(e)
            },
            setStyle: function (t, e) {
                return this.style.set(t, e), this.dirty(!1), this
            },
            useStyle: function (t) {
                return this.style = new a(t, this), this.dirty(!1), this
            }
        }, i.inherits(n, o), i.mixin(n, s), t.exports = n
    }, function (t, e, r) {
        function n() {
            var t = this.__cachedImgObj;
            this.onload = this.__cachedImgObj = null;
            for (var e = 0; e < t.pending.length; e++) {
                var r = t.pending[e],
                    n = r.cb;
                n && n(this, r.cbPayload), r.hostEl.dirty()
            }
            t.pending.length = 0
        }
        var i = r(19),
            a = new i(50),
            o = {};
        o.findExistImage = function (t) {
            if ("string" == typeof t) {
                var e = a.get(t);
                return e && e.image
            }
            return t
        }, o.createOrUpdateImage = function (t, e, r, i, o) {
            if (t) {
                if ("string" == typeof t) {
                    if (e && e.__zrImageSrc === t || !r) return e;
                    var l = a.get(t),
                        h = {
                            hostEl: r,
                            cb: i,
                            cbPayload: o
                        };
                    return l ? (e = l.image, !s(e) && l.pending.push(h)) : (!e && (e = new Image), e.onload = n, a.put(t, e.__cachedImgObj = {
                        image: e,
                        pending: [h]
                    }), e.src = e.__zrImageSrc = t), e
                }
                return t
            }
            return e
        };
        var s = o.isImageReady = function (t) {
            return t && t.width && t.height
        };
        t.exports = o
    }, function (t, e, r) {
        function n(t) {
            if (t) {
                t.font = v.makeFont(t);
                var e = t.textAlign;
                "middle" === e && (e = "center"), t.textAlign = null == e || b[e] ? e : "left";
                var r = t.textVerticalAlign || t.textBaseline;
                "center" === r && (r = "middle"), t.textVerticalAlign = null == r || S[r] ? r : "top";
                var n = t.textPadding;
                n && (t.textPadding = m.normalizeCssArray(t.textPadding))
            }
        }

        function i(t, e, r, n, i) {
            var a = d(e, "font", n.font || v.DEFAULT_FONT),
                o = n.textPadding,
                l = t.__textCotentBlock;
            l && !t.__dirty || (l = t.__textCotentBlock = v.parsePlainText(r, a, o, n.truncate));
            var c = l.outerHeight,
                p = l.lines,
                m = l.lineHeight,
                x = f(c, n, i),
                y = x.baseX,
                _ = x.baseY,
                w = x.textAlign,
                b = x.textVerticalAlign;
            s(e, n, i, y, _);
            var S = v.adjustTextY(_, c, b),
                T = y,
                k = S,
                C = h(n);
            if (C || o) {
                var I = v.getWidth(r, a),
                    A = I;
                o && (A += o[1] + o[3]);
                var O = v.adjustTextX(y, A, w);
                C && u(t, e, n, O, S, A, c), o && (T = g(y, w, o), k += o[0])
            }
            d(e, "textAlign", w || "left"), d(e, "textBaseline", "middle"), d(e, "shadowBlur", n.textShadowBlur || 0), d(e, "shadowColor", n.textShadowColor || "transparent"), d(e, "shadowOffsetX", n.textShadowOffsetX || 0), d(e, "shadowOffsetY", n.textShadowOffsetY || 0), k += m / 2;
            var D = n.textLineWidth,
                L = M(n.textStroke, D),
                B = P(n.textFill);
            L && (d(e, "lineWidth", D), d(e, "strokeStyle", L)), B && d(e, "fillStyle", B);
            for (var F = 0; F < p.length; F++) L && e.strokeText(p[F], T, k), B && e.fillText(p[F], T, k), k += m
        }

        function a(t, e, r, n, i) {
            var a = t.__textCotentBlock;
            a && !t.__dirty || (a = t.__textCotentBlock = v.parseRichText(r, n)), o(t, e, a, n, i)
        }

        function o(t, e, r, n, i) {
            var a = r.width,
                o = r.outerWidth,
                c = r.outerHeight,
                d = n.textPadding,
                p = f(c, n, i),
                g = p.baseX,
                m = p.baseY,
                x = p.textAlign,
                y = p.textVerticalAlign;
            s(e, n, i, g, m);
            var _ = v.adjustTextX(g, o, x),
                w = v.adjustTextY(m, c, y),
                b = _,
                S = w;
            d && (b += d[3], S += d[0]);
            var T = b + a;
            h(n) && u(t, e, n, _, w, o, c);
            for (var M = 0; M < r.lines.length; M++) {
                for (var P, k = r.lines[M], C = k.tokens, I = C.length, A = k.lineHeight, O = k.width, D = 0, L = b, B = T, F = I - 1; D < I && (P = C[D], !P.textAlign || "left" === P.textAlign);) l(t, e, P, n, A, S, L, "left"), O -= P.width, L += P.width, D++;
                for (; F >= 0 && (P = C[F], "right" === P.textAlign);) l(t, e, P, n, A, S, B, "right"), O -= P.width, B -= P.width, F--;
                for (L += (a - (L - b) - (T - B) - O) / 2; D <= F;) P = C[D], l(t, e, P, n, A, S, L + P.width / 2, "center"), L += P.width, D++;
                S += A
            }
        }

        function s(t, e, r, n, i) {
            if (r && e.textRotation) {
                var a = e.textOrigin;
                "center" === a ? (n = r.width / 2 + r.x, i = r.height / 2 + r.y) : a && (n = a[0] + r.x, i = a[1] + r.y), t.translate(n, i), t.rotate(-e.textRotation), t.translate(-n, -i)
            }
        }

        function l(t, e, r, n, i, a, o, s) {
            var l = n.rich[r.styleName] || {},
                c = r.textVerticalAlign,
                f = a + i / 2;
            "top" === c ? f = a + r.height / 2 : "bottom" === c && (f = a + i - r.height / 2), !r.isLineHolder && h(l) && u(t, e, l, "right" === s ? o - r.width : "center" === s ? o - r.width / 2 : o, f - r.height / 2, r.width, r.height);
            var p = r.textPadding;
            p && (o = g(o, s, p), f -= r.height / 2 - p[2] - r.textHeight / 2), d(e, "shadowBlur", _(l.textShadowBlur, n.textShadowBlur, 0)), d(e, "shadowColor", l.textShadowColor || n.textShadowColor || "transparent"), d(e, "shadowOffsetX", _(l.textShadowOffsetX, n.textShadowOffsetX, 0)), d(e, "shadowOffsetY", _(l.textShadowOffsetY, n.textShadowOffsetY, 0)),
                d(e, "textAlign", s), d(e, "textBaseline", "middle"), d(e, "font", r.font || v.DEFAULT_FONT);
            var m = M(l.textStroke || n.textStroke, y),
                x = P(l.textFill || n.textFill),
                y = w(l.textLineWidth, n.textLineWidth);
            m && (d(e, "lineWidth", y), d(e, "strokeStyle", m), e.strokeText(r.text, o, f)), x && (d(e, "fillStyle", x), e.fillText(r.text, o, f))
        }

        function h(t) {
            return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor
        }

        function u(t, e, r, n, i, a, o) {
            var s = r.textBackgroundColor,
                l = r.textBorderWidth,
                h = r.textBorderColor,
                u = m.isString(s);
            if (d(e, "shadowBlur", r.textBoxShadowBlur || 0), d(e, "shadowColor", r.textBoxShadowColor || "transparent"), d(e, "shadowOffsetX", r.textBoxShadowOffsetX || 0), d(e, "shadowOffsetY", r.textBoxShadowOffsetY || 0), u || l && h) {
                e.beginPath();
                var f = r.textBorderRadius;
                f ? x.buildPath(e, {
                    x: n,
                    y: i,
                    width: a,
                    height: o,
                    r: f
                }) : e.rect(n, i, a, o), e.closePath()
            }
            if (u) d(e, "fillStyle", s), e.fill();
            else if (m.isObject(s)) {
                var p = s.image;
                p = y.createOrUpdateImage(p, null, t, c, s), p && y.isImageReady(p) && e.drawImage(p, n, i, a, o)
            }
            l && h && (d(e, "lineWidth", l), d(e, "strokeStyle", h), e.stroke())
        }

        function c(t, e) {
            e.image = t
        }

        function f(t, e, r) {
            var n = e.x || 0,
                i = e.y || 0,
                a = e.textAlign,
                o = e.textVerticalAlign;
            if (r) {
                var s = e.textPosition;
                if (s instanceof Array) n = r.x + p(s[0], r.width), i = r.y + p(s[1], r.height);
                else {
                    var l = v.adjustTextPositionOnRect(s, r, e.textDistance);
                    n = l.x, i = l.y, a = a || l.textAlign, o = o || l.textVerticalAlign
                }
                var h = e.textOffset;
                h && (n += h[0], i += h[1])
            }
            return {
                baseX: n,
                baseY: i,
                textAlign: a,
                textVerticalAlign: o
            }
        }

        function d(t, e, r) {
            return t[e] = t.__currentValues[e] = r, t[e]
        }

        function p(t, e) {
            return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
        }

        function g(t, e, r) {
            return "right" === e ? t - r[1] : "center" === e ? t + r[3] / 2 - r[1] / 2 : t + r[3]
        }
        var v = r(6),
            m = r(1),
            x = r(23),
            y = r(12),
            _ = m.retrieve3,
            w = m.retrieve2,
            b = {
                left: 1,
                right: 1,
                center: 1
            },
            S = {
                top: 1,
                bottom: 1,
                middle: 1
            },
            T = {};
        T.normalizeTextStyle = function (t) {
            return n(t), m.each(t.rich, n), t
        }, T.renderText = function (t, e, r, n, o) {
            n.rich ? a(t, e, r, n, o) : i(t, e, r, n, o)
        };
        var M = T.getStroke = function (t, e) {
                return null == t || e <= 0 || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
            },
            P = T.getFill = function (t) {
                return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
            };
        T.needDrawText = function (t, e) {
            return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
        }, t.exports = T
    }, function (t, e, r) {
        "use strict";

        function n(t) {
            return null != t && "none" != t
        }

        function i(t) {
            return "string" == typeof t ? T.lift(t, -.1) : t
        }

        function a(t) {
            if (t.__hoverStlDirty) {
                var e = t.style.stroke,
                    r = t.style.fill,
                    a = t.__hoverStl;
                a.fill = a.fill || (n(r) ? i(r) : null), a.stroke = a.stroke || (n(e) ? i(e) : null);
                var o = {};
                for (var s in a) null != a[s] && (o[s] = t.style[s]);
                t.__normalStl = o, t.__hoverStlDirty = !1
            }
        }

        function o(t) {
            t.__isHover || (a(t), t.useHoverLayer ? t.__zr && t.__zr.addHover(t, t.__hoverStl) : (t.style.extendFrom(t.__hoverStl), t.dirty(!1), t.z2 += 1), t.__isHover = !0)
        }

        function s(t) {
            if (t.__isHover) {
                var e = t.__normalStl;
                t.useHoverLayer ? t.__zr && t.__zr.removeHover(t) : (e && t.setStyle(e), t.z2 -= 1), t.__isHover = !1
            }
        }

        function l(t) {
            "group" === t.type ? t.traverse(function (t) {
                "group" !== t.type && o(t)
            }) : o(t)
        }

        function h(t) {
            "group" === t.type ? t.traverse(function (t) {
                "group" !== t.type && s(t)
            }) : s(t)
        }

        function u(t, e) {
            t.__hoverStl = t.hoverStyle || e || {}, t.__hoverStlDirty = !0, t.__isHover && a(t)
        }

        function c(t) {
            this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && l(this)
        }

        function f(t) {
            this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && h(this)
        }

        function d() {
            this.__isEmphasis = !0, l(this)
        }

        function p() {
            this.__isEmphasis = !1, h(this)
        }

        function g(t, e) {
            return e && e.indexOf("inside") >= 0
        }

        function v(t, e, r) {
            if (r = r || D, r.isRectText) {
                var n = e.getShallow("position") || (r.forMerge ? null : "inside");
                "outside" === n && (n = "top"), t.textPosition = n, t.textOffset = e.getShallow("offset");
                var i = e.getShallow("rotate");
                null != i && (i *= Math.PI / 180), t.textRotation = i, t.textDistance = w.retrieve2(e.getShallow("distance"), r.forMerge ? null : 5)
            }
            var a, o = e.ecModel,
                s = o && o.option.textStyle,
                l = m(e);
            if (l) {
                a = {};
                for (var h in l)
                    if (l.hasOwnProperty(h)) {
                        var u = e.getModel(["rich", h]);
                        x(a[h] = {}, u, s, r)
                    }
            }
            return t.rich = a, x(t, e, s, r, !0), r.forceRich && !r.textStyle && (r.textStyle = {}), t
        }

        function m(t) {
            for (var e; t && t !== t.ecModel;) {
                var r = (t.option || D).rich;
                if (r) {
                    e = e || {};
                    for (var n in r) r.hasOwnProperty(n) && (e[n] = 1)
                }
                t = t.parentModel
            }
            return e
        }

        function x(t, e, r, n, i) {
            var a = n.forMerge;
            r = !a && r || D;
            var o = y(e.getShallow("color")),
                s = y(e.getShallow("textBorderColor")),
                l = e.getShallow("textBorderWidth");
            a || (null == o && (o = r.color), null == s && (s = r.textBorderColor), null == l && (l = r.textBorderWidth), null == o && n.checkInside && n.checkInside(e, t.textPosition) && (o = "#fff", null == s && (s = n.defaultTextColor, null == l && (l = 2))), null == o && (o = n.defaultTextColor)), t.textFill = o, t.textStroke = s, t.textLineWidth = l, t.fontStyle = e.getShallow("fontStyle") || r.fontStyle, t.fontWeight = e.getShallow("fontWeight") || r.fontWeight, t.fontSize = e.getShallow("fontSize") || r.fontSize, t.fontFamily = e.getShallow("fontFamily") || r.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), i && n.disableBox || (t.textBackgroundColor = y(e.getShallow("backgroundColor"), n), t.textPadding = e.getShallow("padding"), t.textBorderColor = y(e.getShallow("borderColor"), n), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || r.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || r.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || r.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || r.textShadowOffsetY
        }

        function y(t, e) {
            return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null
        }

        function _(t, e, r, n, i, a) {
            "function" == typeof i && (a = i, i = null);
            var o = n && n.isAnimationEnabled();
            if (o) {
                var s = t ? "Update" : "",
                    l = n.getShallow("animationDuration" + s),
                    h = n.getShallow("animationEasing" + s),
                    u = n.getShallow("animationDelay" + s);
                "function" == typeof u && (u = u(i, n.getAnimationDelayParams ? n.getAnimationDelayParams(e, i) : null)), "function" == typeof l && (l = l(i)), l > 0 ? e.animateTo(r, l, u || 0, h, a, !!a) : (e.stopAnimation(), e.attr(r), a && a())
            } else e.stopAnimation(), e.attr(r), a && a()
        }
        var w = r(1),
            b = r(76),
            S = r(2),
            T = r(25),
            M = r(10),
            P = r(3),
            k = r(24),
            C = r(4),
            I = Math.round,
            A = Math.max,
            O = Math.min,
            D = {},
            L = {};
        L.Group = r(50), L.Image = r(55), L.Text = r(60), L.Circle = r(67), L.Sector = r(73), L.Ring = r(72), L.Polygon = r(69), L.Polyline = r(70), L.Rect = r(71), L.Line = r(68), L.BezierCurve = r(66), L.Arc = r(65), L.CompoundPath = r(54), L.LinearGradient = r(56), L.RadialGradient = r(58), L.BoundingRect = C, L.extendShape = function (t) {
            return S.extend(t)
        }, L.extendPath = function (t, e) {
            return b.extendFromString(t, e)
        }, L.makePath = function (t, e, r, n) {
            var i = b.createFromString(t, e),
                a = i.getBoundingRect();
            if (r) {
                var o = a.width / a.height;
                if ("center" === n) {
                    var s, l = r.height * o;
                    l <= r.width ? s = r.height : (l = r.width, s = l / o);
                    var h = r.x + r.width / 2,
                        u = r.y + r.height / 2;
                    r.x = h - l / 2, r.y = u - s / 2, r.width = l, r.height = s
                }
                L.resizePath(i, r)
            }
            return i
        }, L.mergePath = b.mergePath, L.resizePath = function (t, e) {
            if (t.applyTransform) {
                var r = t.getBoundingRect(),
                    n = r.calculateTransform(e);
                t.applyTransform(n)
            }
        }, L.subPixelOptimizeLine = function (t) {
            var e = L.subPixelOptimize,
                r = t.shape,
                n = t.style.lineWidth;
            return I(2 * r.x1) === I(2 * r.x2) && (r.x1 = r.x2 = e(r.x1, n, !0)), I(2 * r.y1) === I(2 * r.y2) && (r.y1 = r.y2 = e(r.y1, n, !0)), t
        }, L.subPixelOptimizeRect = function (t) {
            var e = L.subPixelOptimize,
                r = t.shape,
                n = t.style.lineWidth,
                i = r.x,
                a = r.y,
                o = r.width,
                s = r.height;
            return r.x = e(r.x, n, !0), r.y = e(r.y, n, !0), r.width = Math.max(e(i + o, n, !1) - r.x, 0 === o ? 0 : 1), r.height = Math.max(e(a + s, n, !1) - r.y, 0 === s ? 0 : 1), t
        }, L.subPixelOptimize = function (t, e, r) {
            var n = I(2 * t);
            return (n + I(e)) % 2 === 0 ? n / 2 : (n + (r ? 1 : -1)) / 2
        }, L.setHoverStyle = function (t, e, r) {
            t.__hoverSilentOnTouch = r && r.hoverSilentOnTouch, "group" === t.type ? t.traverse(function (t) {
                "group" !== t.type && u(t, e)
            }) : u(t, e), t.on("mouseover", c).on("mouseout", f), t.on("emphasis", d).on("normal", p)
        }, L.setTextStyle = function (t, e, r, n) {
            return v(t, e, n), r && w.extend(t, r), t.host && t.host.dirty && t.host.dirty(!1), t
        }, L.setText = function (t, e, r) {
            var n = {
                isRectText: !0
            };
            r === !1 ? n.forMerge = !0 : (n.defaultTextColor = n.autoColor = r, n.checkInside = g), v(t, e, n), t.host && t.host.dirty && t.host.dirty(!1)
        }, L.getFont = function (t, e) {
            var r = e || e.getModel("textStyle");
            return [t.fontStyle || r && r.getShallow("fontStyle") || "", t.fontWeight || r && r.getShallow("fontWeight") || "", (t.fontSize || r && r.getShallow("fontSize") || 12) + "px", t.fontFamily || r && r.getShallow("fontFamily") || "sans-serif"].join(" ")
        }, L.updateProps = function (t, e, r, n, i) {
            _(!0, t, e, r, n, i)
        }, L.initProps = function (t, e, r, n, i) {
            _(!1, t, e, r, n, i)
        }, L.getTransform = function (t, e) {
            for (var r = M.identity([]); t && t !== e;) M.mul(r, t.getLocalTransform(), r), t = t.parent;
            return r
        }, L.applyTransform = function (t, e, r) {
            return e && !w.isArrayLike(e) && (e = k.getLocalTransform(e)), r && (e = M.invert([], e)), P.applyTransform([], t, e)
        }, L.transformDirection = function (t, e, r) {
            var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
                i = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
                a = ["left" === t ? -n : "right" === t ? n : 0, "top" === t ? -i : "bottom" === t ? i : 0];
            return a = L.applyTransform(a, e, r), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top"
        }, L.groupTransition = function (t, e, r, n) {
            function i(t) {
                var e = {};
                return t.traverse(function (t) {
                    !t.isGroup && t.anid && (e[t.anid] = t)
                }), e
            }

            function a(t) {
                var e = {
                    position: P.clone(t.position),
                    rotation: t.rotation
                };
                return t.shape && (e.shape = w.extend({}, t.shape)), e
            }
            if (t && e) {
                var o = i(t);
                e.traverse(function (t) {
                    if (!t.isGroup && t.anid) {
                        var e = o[t.anid];
                        if (e) {
                            var n = a(t);
                            t.attr(a(e)), L.updateProps(t, n, r, t.dataIndex)
                        }
                    }
                })
            }
        }, L.clipPointsByRect = function (t, e) {
            return w.map(t, function (t) {
                var r = t[0];
                r = A(r, e.x), r = O(r, e.x + e.width);
                var n = t[1];
                return n = A(n, e.y), n = O(n, e.y + e.height), [r, n]
            })
        }, L.clipRectByRect = function (t, e) {
            var r = A(t.x, e.x),
                n = O(t.x + t.width, e.x + e.width),
                i = A(t.y, e.y),
                a = O(t.y + t.height, e.y + e.height);
            if (n >= r && a >= i) return {
                x: r,
                y: i,
                width: n - r,
                height: a - i
            }
        }, L.createIcon = function (t, e, r) {
            e = w.extend({
                rectHover: !0
            }, e);
            var n = e.style = {
                strokeNoScale: !0
            };
            if (r = r || {
                    x: -1,
                    y: -1,
                    width: 2,
                    height: 2
                }, t) return 0 === t.indexOf("image://") ? (n.image = t.slice(8), w.defaults(n, r), new L.Image(e)) : L.makePath(t.replace("path://", ""), e, r, "center")
        }, t.exports = L
    }, function (t, e, r) {
        function n(t) {
            return t.replace(/^\s+/, "").replace(/\s+$/, "")
        }

        function i(t) {
            return Math.floor(Math.log(t) / Math.LN10)
        }
        var a = r(1),
            o = {},
            s = 1e-4;
        o.linearMap = function (t, e, r, n) {
            var i = e[1] - e[0],
                a = r[1] - r[0];
            if (0 === i) return 0 === a ? r[0] : (r[0] + r[1]) / 2;
            if (n)
                if (i > 0) {
                    if (t <= e[0]) return r[0];
                    if (t >= e[1]) return r[1]
                } else {
                    if (t >= e[0]) return r[0];
                    if (t <= e[1]) return r[1]
                }
            else {
                if (t === e[0]) return r[0];
                if (t === e[1]) return r[1]
            }
            return (t - e[0]) / i * a + r[0]
        }, o.parsePercent = function (t, e) {
            switch (t) {
                case "center":
                case "middle":
                    t = "50%";
                    break;
                case "left":
                case "top":
                    t = "0%";
                    break;
                case "right":
                case "bottom":
                    t = "100%"
            }
            return "string" == typeof t ? n(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t
        }, o.round = function (t, e, r) {
            return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), r ? t : +t
        }, o.asc = function (t) {
            return t.sort(function (t, e) {
                return t - e
            }), t
        }, o.getPrecision = function (t) {
            if (t = +t, isNaN(t)) return 0;
            for (var e = 1, r = 0; Math.round(t * e) / e !== t;) e *= 10, r++;
            return r
        }, o.getPrecisionSafe = function (t) {
            var e = t.toString(),
                r = e.indexOf("e");
            if (r > 0) {
                var n = +e.slice(r + 1);
                return n < 0 ? -n : 0
            }
            var i = e.indexOf(".");
            return i < 0 ? 0 : e.length - 1 - i
        }, o.getPixelPrecision = function (t, e) {
            var r = Math.log,
                n = Math.LN10,
                i = Math.floor(r(t[1] - t[0]) / n),
                a = Math.round(r(Math.abs(e[1] - e[0])) / n),
                o = Math.min(Math.max(-i + a, 0), 20);
            return isFinite(o) ? o : 20
        }, o.getPercentWithPrecision = function (t, e, r) {
            if (!t[e]) return 0;
            var n = a.reduce(t, function (t, e) {
                return t + (isNaN(e) ? 0 : e)
            }, 0);
            if (0 === n) return 0;
            for (var i = Math.pow(10, r), o = a.map(t, function (t) {
                    return (isNaN(t) ? 0 : t) / n * i * 100
                }), s = 100 * i, l = a.map(o, function (t) {
                    return Math.floor(t)
                }), h = a.reduce(l, function (t, e) {
                    return t + e
                }, 0), u = a.map(o, function (t, e) {
                    return t - l[e]
                }); h < s;) {
                for (var c = Number.NEGATIVE_INFINITY, f = null, d = 0, p = u.length; d < p; ++d) u[d] > c && (c = u[d], f = d);
                ++l[f], u[f] = 0, ++h
            }
            return l[e] / i
        }, o.MAX_SAFE_INTEGER = 9007199254740991, o.remRadian = function (t) {
            var e = 2 * Math.PI;
            return (t % e + e) % e
        }, o.isRadianAroundZero = function (t) {
            return t > -s && t < s
        };
        var l = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
        o.getTimezoneOffset = function () {
            return (new Date).getTimezoneOffset()
        }, o.parseDate = function (t) {
            if (t instanceof Date) return t;
            if ("string" == typeof t) {
                var e = l.exec(t);
                if (!e) return new Date(NaN);
                var r = o.getTimezoneOffset(),
                    n = e[8] ? "Z" === e[8].toUpperCase() ? r : 60 * +e[8].slice(0, 3) + r : 0;
                return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0) - n, +e[6] || 0, +e[7] || 0)
            }
            return null == t ? new Date(NaN) : new Date(Math.round(t))
        }, o.quantity = function (t) {
            return Math.pow(10, i(t))
        }, o.nice = function (t, e) {
            var r, n = i(t),
                a = Math.pow(10, n),
                o = t / a;
            return r = e ? o < 1.5 ? 1 : o < 2.5 ? 2 : o < 4 ? 3 : o < 7 ? 5 : 10 : o < 1 ? 1 : o < 2 ? 2 : o < 3 ? 3 : o < 5 ? 5 : 10, t = r * a, n >= -20 ? +t.toFixed(n < 0 ? -n : 0) : t
        }, o.reformIntervals = function (t) {
            function e(t, r, n) {
                return t.interval[n] < r.interval[n] || t.interval[n] === r.interval[n] && (t.close[n] - r.close[n] === (n ? -1 : 1) || !n && e(t, r, 1))
            }
            t.sort(function (t, r) {
                return e(t, r, 0) ? -1 : 1
            });
            for (var r = -(1 / 0), n = 1, i = 0; i < t.length;) {
                for (var a = t[i].interval, o = t[i].close, s = 0; s < 2; s++) a[s] <= r && (a[s] = r, o[s] = s ? 1 : 1 - n), r = a[s], n = o[s];
                a[0] === a[1] && o[0] * o[1] !== 1 ? t.splice(i, 1) : i++
            }
            return t
        }, o.isNumeric = function (t) {
            return t - parseFloat(t) >= 0
        }, t.exports = o
    }, function (t, e, r) {
        "use strict";
        var n = r(52),
            i = r(75),
            a = r(24),
            o = r(74),
            s = r(1),
            l = function (t) {
                a.call(this, t), i.call(this, t), o.call(this, t), this.id = t.id || n()
            };
        l.prototype = {
            type: "element",
            name: "",
            __zr: null,
            ignore: !1,
            clipPath: null,
            drift: function (t, e) {
                switch (this.draggable) {
                    case "horizontal":
                        e = 0;
                        break;
                    case "vertical":
                        t = 0
                }
                var r = this.transform;
                r || (r = this.transform = [1, 0, 0, 1, 0, 0]), r[4] += t, r[5] += e, this.decomposeTransform(), this.dirty(!1)
            },
            beforeUpdate: function () {},
            afterUpdate: function () {},
            update: function () {
                this.updateTransform()
            },
            traverse: function (t, e) {},
            attrKV: function (t, e) {
                if ("position" === t || "scale" === t || "origin" === t) {
                    if (e) {
                        var r = this[t];
                        r || (r = this[t] = []), r[0] = e[0], r[1] = e[1]
                    }
                } else this[t] = e
            },
            hide: function () {
                this.ignore = !0, this.__zr && this.__zr.refresh()
            },
            show: function () {
                this.ignore = !1, this.__zr && this.__zr.refresh()
            },
            attr: function (t, e) {
                if ("string" == typeof t) this.attrKV(t, e);
                else if (s.isObject(t))
                    for (var r in t) t.hasOwnProperty(r) && this.attrKV(r, t[r]);
                return this.dirty(!1), this
            },
            setClipPath: function (t) {
                var e = this.__zr;
                e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
            },
            removeClipPath: function () {
                var t = this.clipPath;
                t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
            },
            addSelfToZr: function (t) {
                this.__zr = t;
                var e = this.animators;
                if (e)
                    for (var r = 0; r < e.length; r++) t.animation.addAnimator(e[r]);
                this.clipPath && this.clipPath.addSelfToZr(t)
            },
            removeSelfFromZr: function (t) {
                this.__zr = null;
                var e = this.animators;
                if (e)
                    for (var r = 0; r < e.length; r++) t.animation.removeAnimator(e[r]);
                this.clipPath && this.clipPath.removeSelfFromZr(t)
            }
        }, s.mixin(l, o), s.mixin(l, a), s.mixin(l, i), t.exports = l
    }, function (t, e) {
        var r = 1;
        "undefined" != typeof window && (r = Math.max(window.devicePixelRatio || 1, 1));
        var n = {
            debugMode: 0,
            devicePixelRatio: r
        };
        t.exports = n
    }, function (t, e) {
        var r = 2 * Math.PI;
        t.exports = {
            normalizeRadian: function (t) {
                return t %= r, t < 0 && (t += r), t
            }
        }
    }, function (t, e) {
        var r = function () {
                this.head = null, this.tail = null, this._len = 0
            },
            n = r.prototype;
        n.insert = function (t) {
            var e = new i(t);
            return this.insertEntry(e), e
        }, n.insertEntry = function (t) {
            this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
        }, n.remove = function (t) {
            var e = t.prev,
                r = t.next;
            e ? e.next = r : this.head = r, r ? r.prev = e : this.tail = e, t.next = t.prev = null, this._len--
        }, n.len = function () {
            return this._len
        }, n.clear = function () {
            this.head = this.tail = null, this._len = 0
        };
        var i = function (t) {
                this.value = t, this.next, this.prev
            },
            a = function (t) {
                this._list = new r, this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null
            },
            o = a.prototype;
        o.put = function (t, e) {
            var r = this._list,
                n = this._map,
                a = null;
            if (null == n[t]) {
                var o = r.len(),
                    s = this._lastRemovedEntry;
                if (o >= this._maxSize && o > 0) {
                    var l = r.head;
                    r.remove(l), delete n[l.key], a = l.value, this._lastRemovedEntry = l
                }
                s ? s.value = e : s = new i(e), s.key = t, r.insertEntry(s), n[t] = s
            }
            return a
        }, o.get = function (t) {
            var e = this._map[t],
                r = this._list;
            if (null != e) return e !== r.tail && (r.remove(e), r.insertEntry(e)), e.value
        }, o.clear = function () {
            this._list.clear(), this._map = {}
        }, t.exports = a
    }, function (t, e) {
        function r(t) {
            var e = {},
                r = {},
                n = t.match(/Firefox\/([\d.]+)/),
                i = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
                a = t.match(/Edge\/([\d.]+)/),
                o = /micromessenger/i.test(t);
            return n && (r.firefox = !0, r.version = n[1]), i && (r.ie = !0, r.version = i[1]), a && (r.edge = !0, r.version = a[1]), o && (r.weChat = !0), {
                browser: r,
                os: e,
                node: !1,
                canvasSupported: !!document.createElement("canvas").getContext,
                touchEventsSupported: "ontouchstart" in window && !r.ie && !r.edge,
                pointerEventsSupported: "onpointerdown" in window && (r.edge || r.ie && r.version >= 11)
            }
        }
        var n = {};
        n = "undefined" == typeof navigator ? {
            browser: {},
            os: {},
            node: !0,
            canvasSupported: !0
        } : r(navigator.userAgent), t.exports = n
    }, function (t, e) {
        var r = function (t) {
            this.colorStops = t || []
        };
        r.prototype = {
            constructor: r,
            addColorStop: function (t, e) {
                this.colorStops.push({
                    offset: t,
                    color: e
                })
            }
        }, t.exports = r
    }, function (t, e, r) {
        var n = r(63),
            i = r(62);
        t.exports = {
            buildPath: function (t, e, r) {
                var a = e.points,
                    o = e.smooth;
                if (a && a.length >= 2) {
                    if (o && "spline" !== o) {
                        var s = i(a, o, r, e.smoothConstraint);
                        t.moveTo(a[0][0], a[0][1]);
                        for (var l = a.length, h = 0; h < (r ? l : l - 1); h++) {
                            var u = s[2 * h],
                                c = s[2 * h + 1],
                                f = a[(h + 1) % l];
                            t.bezierCurveTo(u[0], u[1], c[0], c[1], f[0], f[1])
                        }
                    } else {
                        "spline" === o && (a = n(a, r)), t.moveTo(a[0][0], a[0][1]);
                        for (var h = 1, d = a.length; h < d; h++) t.lineTo(a[h][0], a[h][1])
                    }
                    r && t.closePath()
                }
            }
        }
    }, function (t, e) {
        t.exports = {
            buildPath: function (t, e) {
                var r, n, i, a, o = e.x,
                    s = e.y,
                    l = e.width,
                    h = e.height,
                    u = e.r;
                l < 0 && (o += l, l = -l), h < 0 && (s += h, h = -h), "number" == typeof u ? r = n = i = a = u : u instanceof Array ? 1 === u.length ? r = n = i = a = u[0] : 2 === u.length ? (r = i = u[0], n = a = u[1]) : 3 === u.length ? (r = u[0], n = a = u[1], i = u[2]) : (r = u[0], n = u[1], i = u[2], a = u[3]) : r = n = i = a = 0;
                var c;
                r + n > l && (c = r + n, r *= l / c, n *= l / c), i + a > l && (c = i + a, i *= l / c, a *= l / c), n + i > h && (c = n + i, n *= h / c, i *= h / c), r + a > h && (c = r + a, r *= h / c, a *= h / c), t.moveTo(o + r, s), t.lineTo(o + l - n, s), 0 !== n && t.quadraticCurveTo(o + l, s, o + l, s + n), t.lineTo(o + l, s + h - i), 0 !== i && t.quadraticCurveTo(o + l, s + h, o + l - i, s + h), t.lineTo(o + a, s + h), 0 !== a && t.quadraticCurveTo(o, s + h, o, s + h - a), t.lineTo(o, s + r), 0 !== r && t.quadraticCurveTo(o, s, o + r, s)
            }
        }
    }, function (t, e, r) {
        "use strict";

        function n(t) {
            return t > s || t < -s
        }
        var i = r(10),
            a = r(3),
            o = i.identity,
            s = 5e-5,
            l = function (t) {
                t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
            },
            h = l.prototype;
        h.transform = null, h.needLocalTransform = function () {
            return n(this.rotation) || n(this.position[0]) || n(this.position[1]) || n(this.scale[0] - 1) || n(this.scale[1] - 1)
        }, h.updateTransform = function () {
            var t = this.parent,
                e = t && t.transform,
                r = this.needLocalTransform(),
                n = this.transform;
            return r || e ? (n = n || i.create(), r ? this.getLocalTransform(n) : o(n), e && (r ? i.mul(n, t.transform, n) : i.copy(n, t.transform)), this.transform = n, this.invTransform = this.invTransform || i.create(), void i.invert(this.invTransform, n)) : void(n && o(n))
        }, h.getLocalTransform = function (t) {
            return l.getLocalTransform(this, t)
        }, h.setTransform = function (t) {
            var e = this.transform,
                r = t.dpr || 1;
            e ? t.setTransform(r * e[0], r * e[1], r * e[2], r * e[3], r * e[4], r * e[5]) : t.setTransform(r, 0, 0, r, 0, 0)
        }, h.restoreTransform = function (t) {
            var e = t.dpr || 1;
            t.setTransform(e, 0, 0, e, 0, 0)
        };
        var u = [];
        h.decomposeTransform = function () {
            if (this.transform) {
                var t = this.parent,
                    e = this.transform;
                t && t.transform && (i.mul(u, t.invTransform, e), e = u);
                var r = e[0] * e[0] + e[1] * e[1],
                    a = e[2] * e[2] + e[3] * e[3],
                    o = this.position,
                    s = this.scale;
                n(r - 1) && (r = Math.sqrt(r)), n(a - 1) && (a = Math.sqrt(a)), e[0] < 0 && (r = -r), e[3] < 0 && (a = -a), o[0] = e[4], o[1] = e[5], s[0] = r, s[1] = a, this.rotation = Math.atan2(-e[1] / a, e[0] / r)
            }
        }, h.getGlobalScale = function () {
            var t = this.transform;
            if (!t) return [1, 1];
            var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]),
                r = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
            return t[0] < 0 && (e = -e), t[3] < 0 && (r = -r), [e, r]
        }, h.transformCoordToLocal = function (t, e) {
            var r = [t, e],
                n = this.invTransform;
            return n && a.applyTransform(r, r, n), r
        }, h.transformCoordToGlobal = function (t, e) {
            var r = [t, e],
                n = this.transform;
            return n && a.applyTransform(r, r, n), r
        }, l.getLocalTransform = function (t, e) {
            e = e || [], o(e);
            var r = t.origin,
                n = t.scale || [1, 1],
                a = t.rotation || 0,
                s = t.position || [0, 0];
            return r && (e[4] -= r[0], e[5] -= r[1]), i.scale(e, e, n), a && i.rotate(e, e, a), r && (e[4] += r[0], e[5] += r[1]), e[4] += s[0], e[5] += s[1], e
        }, t.exports = l
    }, function (t, e, r) {
        function n(t) {
            return t = Math.round(t), t < 0 ? 0 : t > 255 ? 255 : t
        }

        function i(t) {
            return t = Math.round(t), t < 0 ? 0 : t > 360 ? 360 : t
        }

        function a(t) {
            return t < 0 ? 0 : t > 1 ? 1 : t
        }

        function o(t) {
            return n(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
        }

        function s(t) {
            return a(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
        }

        function l(t, e, r) {
            return r < 0 ? r += 1 : r > 1 && (r -= 1), 6 * r < 1 ? t + (e - t) * r * 6 : 2 * r < 1 ? e : 3 * r < 2 ? t + (e - t) * (2 / 3 - r) * 6 : t
        }

        function h(t, e, r) {
            return t + (e - t) * r
        }

        function u(t, e, r, n, i) {
            return t[0] = e, t[1] = r, t[2] = n, t[3] = i, t
        }

        function c(t, e) {
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
        }

        function f(t, e) {
            P && c(P, e), P = M.put(t, P || e.slice())
        }

        function d(t, e) {
            if (t) {
                e = e || [];
                var r = M.get(t);
                if (r) return c(e, r);
                t += "";
                var n = t.replace(/ /g, "").toLowerCase();
                if (n in T) return c(e, T[n]), f(t, e), e;
                if ("#" !== n.charAt(0)) {
                    var i = n.indexOf("("),
                        a = n.indexOf(")");
                    if (i !== -1 && a + 1 === n.length) {
                        var l = n.substr(0, i),
                            h = n.substr(i + 1, a - (i + 1)).split(","),
                            d = 1;
                        switch (l) {
                            case "rgba":
                                if (4 !== h.length) return void u(e, 0, 0, 0, 1);
                                d = s(h.pop());
                            case "rgb":
                                return 3 !== h.length ? void u(e, 0, 0, 0, 1) : (u(e, o(h[0]), o(h[1]), o(h[2]), d), f(t, e), e);
                            case "hsla":
                                return 4 !== h.length ? void u(e, 0, 0, 0, 1) : (h[3] = s(h[3]), p(h, e), f(t, e), e);
                            case "hsl":
                                return 3 !== h.length ? void u(e, 0, 0, 0, 1) : (p(h, e), f(t, e), e);
                            default:
                                return
                        }
                    }
                    u(e, 0, 0, 0, 1)
                } else {
                    if (4 === n.length) {
                        var g = parseInt(n.substr(1), 16);
                        return g >= 0 && g <= 4095 ? (u(e, (3840 & g) >> 4 | (3840 & g) >> 8, 240 & g | (240 & g) >> 4, 15 & g | (15 & g) << 4, 1), f(t, e), e) : void u(e, 0, 0, 0, 1)
                    }
                    if (7 === n.length) {
                        var g = parseInt(n.substr(1), 16);
                        return g >= 0 && g <= 16777215 ? (u(e, (16711680 & g) >> 16, (65280 & g) >> 8, 255 & g, 1), f(t, e), e) : void u(e, 0, 0, 0, 1)
                    }
                }
            }
        }

        function p(t, e) {
            var r = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
                i = s(t[1]),
                a = s(t[2]),
                o = a <= .5 ? a * (i + 1) : a + i - a * i,
                h = 2 * a - o;
            return e = e || [], u(e, n(255 * l(h, o, r + 1 / 3)), n(255 * l(h, o, r)), n(255 * l(h, o, r - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
        }

        function g(t) {
            if (t) {
                var e, r, n = t[0] / 255,
                    i = t[1] / 255,
                    a = t[2] / 255,
                    o = Math.min(n, i, a),
                    s = Math.max(n, i, a),
                    l = s - o,
                    h = (s + o) / 2;
                if (0 === l) e = 0, r = 0;
                else {
                    r = h < .5 ? l / (s + o) : l / (2 - s - o);
                    var u = ((s - n) / 6 + l / 2) / l,
                        c = ((s - i) / 6 + l / 2) / l,
                        f = ((s - a) / 6 + l / 2) / l;
                    n === s ? e = f - c : i === s ? e = 1 / 3 + u - f : a === s && (e = 2 / 3 + c - u), e < 0 && (e += 1), e > 1 && (e -= 1)
                }
                var d = [360 * e, r, h];
                return null != t[3] && d.push(t[3]), d
            }
        }

        function v(t, e) {
            var r = d(t);
            if (r) {
                for (var n = 0; n < 3; n++) e < 0 ? r[n] = r[n] * (1 - e) | 0 : r[n] = (255 - r[n]) * e + r[n] | 0;
                return b(r, 4 === r.length ? "rgba" : "rgb")
            }
        }

        function m(t, e) {
            var r = d(t);
            if (r) return ((1 << 24) + (r[0] << 16) + (r[1] << 8) + +r[2]).toString(16).slice(1)
        }

        function x(t, e, r) {
            if (e && e.length && t >= 0 && t <= 1) {
                r = r || [];
                var i = t * (e.length - 1),
                    o = Math.floor(i),
                    s = Math.ceil(i),
                    l = e[o],
                    u = e[s],
                    c = i - o;
                return r[0] = n(h(l[0], u[0], c)), r[1] = n(h(l[1], u[1], c)), r[2] = n(h(l[2], u[2], c)), r[3] = a(h(l[3], u[3], c)), r
            }
        }

        function y(t, e, r) {
            if (e && e.length && t >= 0 && t <= 1) {
                var i = t * (e.length - 1),
                    o = Math.floor(i),
                    s = Math.ceil(i),
                    l = d(e[o]),
                    u = d(e[s]),
                    c = i - o,
                    f = b([n(h(l[0], u[0], c)), n(h(l[1], u[1], c)), n(h(l[2], u[2], c)), a(h(l[3], u[3], c))], "rgba");
                return r ? {
                    color: f,
                    leftIndex: o,
                    rightIndex: s,
                    value: i
                } : f
            }
        }

        function _(t, e, r, n) {
            if (t = d(t)) return t = g(t), null != e && (t[0] = i(e)), null != r && (t[1] = s(r)), null != n && (t[2] = s(n)), b(p(t), "rgba")
        }

        function w(t, e) {
            if (t = d(t), t && null != e) return t[3] = a(e), b(t, "rgba")
        }

        function b(t, e) {
            if (t && t.length) {
                var r = t[0] + "," + t[1] + "," + t[2];
                return "rgba" !== e && "hsva" !== e && "hsla" !== e || (r += "," + t[3]), e + "(" + r + ")"
            }
        }
        var S = r(19),
            T = {
                transparent: [0, 0, 0, 0],
                aliceblue: [240, 248, 255, 1],
                antiquewhite: [250, 235, 215, 1],
                aqua: [0, 255, 255, 1],
                aquamarine: [127, 255, 212, 1],
                azure: [240, 255, 255, 1],
                beige: [245, 245, 220, 1],
                bisque: [255, 228, 196, 1],
                black: [0, 0, 0, 1],
                blanchedalmond: [255, 235, 205, 1],
                blue: [0, 0, 255, 1],
                blueviolet: [138, 43, 226, 1],
                brown: [165, 42, 42, 1],
                burlywood: [222, 184, 135, 1],
                cadetblue: [95, 158, 160, 1],
                chartreuse: [127, 255, 0, 1],
                chocolate: [210, 105, 30, 1],
                coral: [255, 127, 80, 1],
                cornflowerblue: [100, 149, 237, 1],
                cornsilk: [255, 248, 220, 1],
                crimson: [220, 20, 60, 1],
                cyan: [0, 255, 255, 1],
                darkblue: [0, 0, 139, 1],
                darkcyan: [0, 139, 139, 1],
                darkgoldenrod: [184, 134, 11, 1],
                darkgray: [169, 169, 169, 1],
                darkgreen: [0, 100, 0, 1],
                darkgrey: [169, 169, 169, 1],
                darkkhaki: [189, 183, 107, 1],
                darkmagenta: [139, 0, 139, 1],
                darkolivegreen: [85, 107, 47, 1],
                darkorange: [255, 140, 0, 1],
                darkorchid: [153, 50, 204, 1],
                darkred: [139, 0, 0, 1],
                darksalmon: [233, 150, 122, 1],
                darkseagreen: [143, 188, 143, 1],
                darkslateblue: [72, 61, 139, 1],
                darkslategray: [47, 79, 79, 1],
                darkslategrey: [47, 79, 79, 1],
                darkturquoise: [0, 206, 209, 1],
                darkviolet: [148, 0, 211, 1],
                deeppink: [255, 20, 147, 1],
                deepskyblue: [0, 191, 255, 1],
                dimgray: [105, 105, 105, 1],
                dimgrey: [105, 105, 105, 1],
                dodgerblue: [30, 144, 255, 1],
                firebrick: [178, 34, 34, 1],
                floralwhite: [255, 250, 240, 1],
                forestgreen: [34, 139, 34, 1],
                fuchsia: [255, 0, 255, 1],
                gainsboro: [220, 220, 220, 1],
                ghostwhite: [248, 248, 255, 1],
                gold: [255, 215, 0, 1],
                goldenrod: [218, 165, 32, 1],
                gray: [128, 128, 128, 1],
                green: [0, 128, 0, 1],
                greenyellow: [173, 255, 47, 1],
                grey: [128, 128, 128, 1],
                honeydew: [240, 255, 240, 1],
                hotpink: [255, 105, 180, 1],
                indianred: [205, 92, 92, 1],
                indigo: [75, 0, 130, 1],
                ivory: [255, 255, 240, 1],
                khaki: [240, 230, 140, 1],
                lavender: [230, 230, 250, 1],
                lavenderblush: [255, 240, 245, 1],
                lawngreen: [124, 252, 0, 1],
                lemonchiffon: [255, 250, 205, 1],
                lightblue: [173, 216, 230, 1],
                lightcoral: [240, 128, 128, 1],
                lightcyan: [224, 255, 255, 1],
                lightgoldenrodyellow: [250, 250, 210, 1],
                lightgray: [211, 211, 211, 1],
                lightgreen: [144, 238, 144, 1],
                lightgrey: [211, 211, 211, 1],
                lightpink: [255, 182, 193, 1],
                lightsalmon: [255, 160, 122, 1],
                lightseagreen: [32, 178, 170, 1],
                lightskyblue: [135, 206, 250, 1],
                lightslategray: [119, 136, 153, 1],
                lightslategrey: [119, 136, 153, 1],
                lightsteelblue: [176, 196, 222, 1],
                lightyellow: [255, 255, 224, 1],
                lime: [0, 255, 0, 1],
                limegreen: [50, 205, 50, 1],
                linen: [250, 240, 230, 1],
                magenta: [255, 0, 255, 1],
                maroon: [128, 0, 0, 1],
                mediumaquamarine: [102, 205, 170, 1],
                mediumblue: [0, 0, 205, 1],
                mediumorchid: [186, 85, 211, 1],
                mediumpurple: [147, 112, 219, 1],
                mediumseagreen: [60, 179, 113, 1],
                mediumslateblue: [123, 104, 238, 1],
                mediumspringgreen: [0, 250, 154, 1],
                mediumturquoise: [72, 209, 204, 1],
                mediumvioletred: [199, 21, 133, 1],
                midnightblue: [25, 25, 112, 1],
                mintcream: [245, 255, 250, 1],
                mistyrose: [255, 228, 225, 1],
                moccasin: [255, 228, 181, 1],
                navajowhite: [255, 222, 173, 1],
                navy: [0, 0, 128, 1],
                oldlace: [253, 245, 230, 1],
                olive: [128, 128, 0, 1],
                olivedrab: [107, 142, 35, 1],
                orange: [255, 165, 0, 1],
                orangered: [255, 69, 0, 1],
                orchid: [218, 112, 214, 1],
                palegoldenrod: [238, 232, 170, 1],
                palegreen: [152, 251, 152, 1],
                paleturquoise: [175, 238, 238, 1],
                palevioletred: [219, 112, 147, 1],
                papayawhip: [255, 239, 213, 1],
                peachpuff: [255, 218, 185, 1],
                peru: [205, 133, 63, 1],
                pink: [255, 192, 203, 1],
                plum: [221, 160, 221, 1],
                powderblue: [176, 224, 230, 1],
                purple: [128, 0, 128, 1],
                red: [255, 0, 0, 1],
                rosybrown: [188, 143, 143, 1],
                royalblue: [65, 105, 225, 1],
                saddlebrown: [139, 69, 19, 1],
                salmon: [250, 128, 114, 1],
                sandybrown: [244, 164, 96, 1],
                seagreen: [46, 139, 87, 1],
                seashell: [255, 245, 238, 1],
                sienna: [160, 82, 45, 1],
                silver: [192, 192, 192, 1],
                skyblue: [135, 206, 235, 1],
                slateblue: [106, 90, 205, 1],
                slategray: [112, 128, 144, 1],
                slategrey: [112, 128, 144, 1],
                snow: [255, 250, 250, 1],
                springgreen: [0, 255, 127, 1],
                steelblue: [70, 130, 180, 1],
                tan: [210, 180, 140, 1],
                teal: [0, 128, 128, 1],
                thistle: [216, 191, 216, 1],
                tomato: [255, 99, 71, 1],
                turquoise: [64, 224, 208, 1],
                violet: [238, 130, 238, 1],
                wheat: [245, 222, 179, 1],
                white: [255, 255, 255, 1],
                whitesmoke: [245, 245, 245, 1],
                yellow: [255, 255, 0, 1],
                yellowgreen: [154, 205, 50, 1]
            },
            M = new S(20),
            P = null;
        t.exports = {
            parse: d,
            lift: v,
            toHex: m,
            fastMapToColor: x,
            mapToColor: y,
            modifyHSL: _,
            modifyAlpha: w,
            stringify: b
        }
    }, function (t, e, r) {
        var n = r(8);
        r(28), r(29), n.registerVisual(n.util.curry(r(40), "liquidFill"))
    }, function (t, e, r) {
        function n(t, e, r, n) {
            return 0 === e ? [
                [t + .5 * r / Math.PI / 2, n / 2],
                [t + .5 * r / Math.PI, n],
                [t + r / 4, n]
            ] : 1 === e ? [
                [t + .5 * r / Math.PI / 2 * (Math.PI - 2), n],
                [t + .5 * r / Math.PI / 2 * (Math.PI - 1), n / 2],
                [t + r / 4, 0]
            ] : 2 === e ? [
                [t + .5 * r / Math.PI / 2, -n / 2],
                [t + .5 * r / Math.PI, -n],
                [t + r / 4, -n]
            ] : [
                [t + .5 * r / Math.PI / 2 * (Math.PI - 2), -n],
                [t + .5 * r / Math.PI / 2 * (Math.PI - 1), -n / 2],
                [t + r / 4, 0]
            ]
        }
        var i = r(8);
        t.exports = i.graphic.extendShape({
            type: "ec-liquid-fill",
            shape: {
                waveLength: 0,
                radius: 0,
                cx: 0,
                cy: 0,
                waterLevel: 0,
                amplitude: 0,
                phase: 0,
                inverse: !1
            },
            style: {
                fill: "#0f0"
            },
            buildPath: function (t, e) {
                for (var r = Math.max(2 * Math.ceil(2 * e.radius / e.waveLength * 4), 8); e.phase < 2 * -Math.PI;) e.phase += 2 * Math.PI;
                for (; e.phase > 0;) e.phase -= 2 * Math.PI;
                var i = e.phase / Math.PI / 2 * e.waveLength,
                    a = e.cx - e.radius + i - 2 * e.radius;
                t.moveTo(a, e.waterLevel);
                for (var o = 0, s = 0; s < r; ++s) {
                    var l = s % 4,
                        h = n(s * e.waveLength / 4, l, e.waveLength, e.amplitude);
                    t.bezierCurveTo(h[0][0] + a, -h[0][1] + e.waterLevel, h[1][0] + a, -h[1][1] + e.waterLevel, h[2][0] + a, -h[2][1] + e.waterLevel), s === r - 1 && (o = h[2][0])
                }
                e.inverse ? (t.lineTo(o + a, e.cy - e.radius), t.lineTo(a, e.cy - e.radius), t.lineTo(a, e.waterLevel)) : (t.lineTo(o + a, e.cy + e.radius), t.lineTo(a, e.cy + e.radius), t.lineTo(a, e.waterLevel)), t.closePath()
            }
        })
    }, function (t, e, r) {
        var n = r(30),
            i = r(8);
        i.extendSeriesModel({
            type: "series.liquidFill",
            visualColorAccessPath: "textStyle.normal.color",
            optionUpdated: function () {
                var t = this.option;
                t.gridSize = Math.max(Math.floor(t.gridSize), 4)
            },
            getInitialData: function (t, e) {
                var r = n(["value"], t.data),
                    a = new i.List(r, this);
                return a.initData(t.data), a
            },
            defaultOption: {
                color: ["#294D99", "#156ACF", "#1598ED", "#45BDFF"],
                center: ["50%", "50%"],
                radius: "50%",
                amplitude: "8%",
                waveLength: "80%",
                phase: "auto",
                period: "auto",
                direction: "right",
                shape: "circle",
                waveAnimation: !0,
                animationEasing: "linear",
                animationEasingUpdate: "linear",
                animationDuration: 2e3,
                animationDurationUpdate: 1e3,
                outline: {
                    show: !0,
                    borderDistance: 8,
                    itemStyle: {
                        color: "none",
                        borderColor: "#294D99",
                        borderWidth: 8,
                        shadowBlur: 20,
                        shadowColor: "rgba(0, 0, 0, 0.25)"
                    }
                },
                backgroundStyle: {
                    color: "#E3F7FF"
                },
                itemStyle: {
                    normal: {
                        opacity: .95,
                        shadowBlur: 50,
                        shadowColor: "rgba(0, 0, 0, 0.4)"
                    },
                    emphasis: {
                        opacity: .8
                    }
                },
                label: {
                    normal: {
                        show: !0,
                        color: "#294D99",
                        insideColor: "#fff",
                        fontSize: 50,
                        fontWeight: "bold",
                        align: "center",
                        baseline: "middle",
                        position: "inside"
                    }
                }
            }
        })
    }, function (t, e, r) {
        var n = r(8),
            i = n.number,
            a = r(39),
            o = i.parsePercent,
            s = r(27);
        n.extendChartView({
            type: "liquidFill",
            render: function (t, e, r) {
                function i(t, e) {
                    if (A) {
                        if (0 === A.indexOf("path://")) {
                            var r = n.graphic.makePath(A.slice(7), {}),
                                i = r.getBoundingRect(),
                                o = i.width,
                                s = i.height;
                            o > s ? (s *= 2 * t / o, o = 2 * t) : (o *= 2 * t / s, s = 2 * t);
                            var l = e ? 0 : k - o / 2,
                                h = e ? 0 : C - s / 2;
                            return r = n.graphic.makePath(A.slice(7), {}, new n.graphic.BoundingRect(l, h, o, s)), e && (r.position = [-o / 2, -s / 2]), r
                        }
                        if (I) {
                            var u = e ? -t[0] : k - t[0],
                                c = e ? -t[1] : C - t[1];
                            return a.createSymbol("rect", u, c, 2 * t[0], 2 * t[1])
                        }
                        var u = e ? -t : k - t,
                            c = e ? -t : C - t;
                        return "pin" === A ? c += t : "arrow" === A && (c -= t), a.createSymbol(A, u, c, 2 * t, 2 * t)
                    }
                    return new n.graphic.Circle({
                        shape: {
                            cx: e ? 0 : k,
                            cy: e ? 0 : C,
                            r: t
                        }
                    })
                }

                function l() {
                    var e = i(T);
                    return e.style.fill = null, e.setStyle(t.getModel("outline.itemStyle").getItemStyle()), e
                }

                function h() {
                    var e = i(m);
                    e.setStyle(t.getModel("backgroundStyle").getItemStyle()), e.style.fill = null, e.z2 = 5;
                    var r = i(m);
                    r.setStyle(t.getModel("backgroundStyle").getItemStyle()), r.style.stroke = null;
                    var a = new n.graphic.Group;
                    return a.add(e), a.add(r), a
                }

                function u(t, e, r) {
                    var a = I ? m[0] : m,
                        l = I ? m[1] : m,
                        h = p.getItemModel(t),
                        u = h.getModel("itemStyle"),
                        c = h.get("phase"),
                        f = o(h.get("amplitude"), 2 * l),
                        d = o(h.get("waveLength"), 2 * a),
                        g = p.get("value", t),
                        v = l - g * l * 2;
                    c = r ? r.shape.phase : "auto" === c ? t * Math.PI / 4 : c;
                    var x = u.getModel("normal").getItemStyle();
                    x.fill = p.getItemVisual(t, "color");
                    var y = 2 * a,
                        _ = new s({
                            shape: {
                                waveLength: d,
                                radius: a,
                                cx: y,
                                cy: 0,
                                waterLevel: v,
                                amplitude: f,
                                phase: c,
                                inverse: e
                            },
                            style: x,
                            position: [k, C]
                        });
                    _.shape._waterLevel = v;
                    var w = u.getModel("emphasis").getItemStyle();
                    w.lineWidth = 0, n.graphic.setHoverStyle(_, w);
                    var b = i(m, !0);
                    return b.setStyle({
                        fill: "white"
                    }), _.setClipPath(b), _
                }

                function c(t, e, r) {
                    var n = p.getItemModel(t),
                        i = n.get("period"),
                        a = n.get("direction"),
                        o = p.get("value", t),
                        s = n.get("phase");
                    s = r ? r.shape.phase : "auto" === s ? t * Math.PI / 4 : s;
                    var l = function (e) {
                            var r = p.count();
                            return 0 === r ? e : e * (.2 + (r - t) / r * .8)
                        },
                        h = 0;
                    h = "auto" === i ? l(5e3) : "function" == typeof i ? i(o, t) : i;
                    var u = 0;
                    "right" === a || null == a ? u = Math.PI : "left" === a ? u = -Math.PI : "none" === a ? u = 0 : console.error("Illegal direction value for liquid fill."), "none" !== a && n.get("waveAnimation") && e.animate("shape", !0).when(0, {
                        phase: s
                    }).when(h / 2, {
                        phase: u + s
                    }).when(h, {
                        phase: 2 * u + s
                    }).during(function () {
                        B && B.dirty(!0)
                    }).start()
                }

                function f(e) {
                    function r() {
                        var e = t.getFormattedLabel(0, "normal"),
                            r = 100 * p.get("value", 0),
                            n = p.getName(0) || t.name;
                        return isNaN(r) || (n = r.toFixed(0) + "%"), null == e ? n : e
                    }
                    var a = g.getModel("label.normal"),
                        o = a.getModel("textStyle"),
                        s = {
                            z2: 10,
                            shape: {
                                x: D,
                                y: L,
                                width: 2 * (I ? m[0] : m),
                                height: 2 * (I ? m[1] : m)
                            },
                            style: {
                                fill: "transparent",
                                text: r(),
                                textAlign: o.get("align"),
                                textVerticalAlign: o.get("baseline")
                            },
                            silent: !0
                        },
                        l = new n.graphic.Rect(s),
                        h = a.get("color") || o.get("color");
                    n.graphic.setText(l.style, a, h);
                    var u = new n.graphic.Rect(s),
                        c = a.get("insideColor") || o.get("insideColor");
                    n.graphic.setText(u.style, a, c), u.style.textFill = c;
                    var f = new n.graphic.Group;
                    f.add(l), f.add(u);
                    var d = i(m, !0);
                    return B = new n.graphic.CompoundPath({
                        shape: {
                            paths: e
                        },
                        position: [k, C]
                    }), B.setClipPath(d), u.setClipPath(B), f
                }
                var d = this.group;
                d.removeAll();
                var p = t.getData(),
                    g = p.getItemModel(0),
                    v = g.get("center"),
                    m = g.get("radius"),
                    x = r.getWidth(),
                    y = r.getHeight(),
                    _ = Math.min(x, y),
                    w = 0,
                    b = 0,
                    S = t.get("outline.show");
                S && (w = t.get("outline.borderDistance"), b = o(t.get("outline.itemStyle.borderWidth"), _));
                var T, M, P, k = o(v[0], x),
                    C = o(v[1], y),
                    I = !1,
                    A = t.get("shape");
                if ("container" === A ? (I = !0, T = [x / 2, y / 2], M = [T[0] - b / 2, T[1] - b / 2], P = [o(w, x), o(w, y)], m = [M[0] - P[0], M[1] - P[1]]) : (T = o(m, _) / 2, M = T - b / 2, P = o(w, _), m = M - P), S) {
                    var O = l();
                    O.style.lineWidth = b, d.add(l())
                }
                var D = I ? 0 : k - m,
                    L = I ? 0 : C - m,
                    B = null;
                d.add(h());
                var F = this._data,
                    R = [];
                p.diff(F).add(function (e) {
                    var r = u(e, !1),
                        i = r.shape.waterLevel;
                    r.shape.waterLevel = I ? m[1] : m, n.graphic.initProps(r, {
                        shape: {
                            waterLevel: i
                        }
                    }, t), r.z2 = 2, c(e, r, null), d.add(r), p.setItemGraphicEl(e, r), R.push(r)
                }).update(function (e, r) {
                    var i = F.getItemGraphicEl(r),
                        a = u(e, !1, i),
                        o = Object.assign({}, a.shape),
                        s = Object.assign({}, a.style);
                    s.host = null, n.graphic.updateProps(i, {
                        shape: o,
                        style: s
                    }, t), i.position = a.position, i.setClipPath(a.clipPath), c(e, i, i), d.add(i), p.setItemGraphicEl(e, i), R.push(i)
                }).remove(function (t) {
                    var e = F.getItemGraphicEl(t);
                    d.remove(e)
                }).execute(), d.add(f(R)), this._data = p
            },
            dispose: function () {}
        })
    }, function (t, e, r) {
        function n(t, e, r) {
            function n(t, e, r) {
                c[e] ? t.otherDims[e] = r : (t.coordDim = e, t.coordDimIndex = r, v.set(e, !0))
            }

            function o(t, e, r) {
                if (r || null != e.get(t)) {
                    for (var n = 0; null != e.get(t + n);) n++;
                    t += n
                }
                return e.set(t, !0), t
            }
            e = e || [], r = r || {}, t = (t || []).slice();
            var d = (r.dimsDef || []).slice(),
                p = a.createHashMap(r.encodeDef),
                g = a.createHashMap(),
                v = a.createHashMap(),
                m = [],
                x = r.dimCount;
            if (null == x) {
                var y = i(e[0]);
                x = Math.max(a.isArray(y) && y.length || 1, t.length, d.length), s(t, function (t) {
                    var e = t.dimsDef;
                    e && (x = Math.max(x, e.length))
                })
            }
            for (var _ = 0; _ < x; _++) {
                var w = l(d[_]) ? {
                        name: d[_]
                    } : d[_] || {},
                    b = w.name,
                    S = m[_] = {
                        otherDims: {}
                    };
                null != b && null == g.get(b) && (S.name = S.tooltipName = b, g.set(b, _)), null != w.type && (S.type = w.type)
            }
            p.each(function (t, e) {
                t = p.set(e, u(t).slice()), s(t, function (r, i) {
                    l(r) && (r = g.get(r)), null != r && r < x && (t[i] = r, n(m[r], e, i))
                })
            });
            var T = 0;
            s(t, function (t, e) {
                var r, t, i, o;
                l(t) ? (r = t, t = {}) : (r = t.name, t = a.clone(t), i = t.dimsDef, o = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null);
                var c = u(p.get(r));
                if (!c.length)
                    for (var f = 0; f < (i && i.length || 1); f++) {
                        for (; T < m.length && null != m[T].coordDim;) T++;
                        T < m.length && c.push(T++)
                    }
                s(c, function (e, a) {
                    var s = m[e];
                    n(h(s, t), r, a), null == s.name && i && (s.name = s.tooltipName = i[a]), o && h(s.otherDims, o)
                })
            });
            for (var M = r.extraPrefix || "value", P = 0; P < x; P++) {
                var S = m[P] = m[P] || {},
                    k = S.coordDim;
                null == k && (S.coordDim = o(M, v, r.extraFromZero), S.coordDimIndex = 0, S.isExtraCoord = !0), null == S.name && (S.name = o(S.coordDim, g)), null == S.type && f(e, P) && (S.type = "ordinal")
            }
            return m
        }

        function i(t) {
            return a.isArray(t) ? t : a.isObject(t) ? t.value : t
        }
        var a = r(1),
            o = r(38),
            s = a.each,
            l = a.isString,
            h = a.defaults,
            u = o.normalizeToArray,
            c = {
                tooltip: 1,
                label: 1,
                itemName: 1
            },
            f = n.guessOrdinal = function (t, e) {
                for (var r = 0, n = t.length; r < n; r++) {
                    var o = i(t[r]);
                    if (!a.isArray(o)) return !1;
                    var o = o[e];
                    if (null != o && isFinite(o) && "" !== o) return !1;
                    if (l(o) && "-" !== o) return !0
                }
                return !1
            };
        t.exports = n
    }, function (t, e, r) {
        function n(t, e, r) {
            this.parentModel = e, this.ecModel = r, this.option = t
        }

        function i(t, e, r) {
            for (var n = 0; n < e.length && (!e[n] || (t = t && "object" == typeof t ? t[e[n]] : null, null != t)); n++);
            return null == t && r && (t = r.get(e)), t
        }

        function a(t, e) {
            var r = s.get(t, "getParent");
            return r ? r.call(t, e) : t.parentModel
        }
        var o = r(1),
            s = r(36),
            l = r(20);
        n.prototype = {
            constructor: n,
            init: null,
            mergeOption: function (t) {
                o.merge(this.option, t, !0)
            },
            get: function (t, e) {
                return null == t ? this.option : i(this.option, this.parsePath(t), !e && a(this, t))
            },
            getShallow: function (t, e) {
                var r = this.option,
                    n = null == r ? r : r[t],
                    i = !e && a(this, t);
                return null == n && i && (n = i.getShallow(t)), n
            },
            getModel: function (t, e) {
                var r, o = null == t ? this.option : i(this.option, t = this.parsePath(t));
                return e = e || (r = a(this, t)) && r.getModel(t), new n(o, e, this.ecModel)
            },
            isEmpty: function () {
                return null == this.option
            },
            restoreData: function () {},
            clone: function () {
                var t = this.constructor;
                return new t(o.clone(this.option))
            },
            setReadOnly: function (t) {
                s.setReadOnly(this, t)
            },
            parsePath: function (t) {
                return "string" == typeof t && (t = t.split(".")), t
            },
            customizeGetParent: function (t) {
                s.set(this, "getParent", t)
            },
            isAnimationEnabled: function () {
                if (!l.node) {
                    if (null != this.option.animation) return !!this.option.animation;
                    if (this.parentModel) return this.parentModel.isAnimationEnabled()
                }
            }
        }, s.enableClassExtend(n);
        var h = o.mixin;
        h(n, r(34)), h(n, r(32)), h(n, r(35)), h(n, r(33)), t.exports = n
    }, function (t, e, r) {
        t.exports = {
            getAreaStyle: r(9)([
                ["fill", "color"],
                ["shadowBlur"],
                ["shadowOffsetX"],
                ["shadowOffsetY"],
                ["opacity"],
                ["shadowColor"]
            ])
        }
    }, function (t, e, r) {
        var n = r(9)([
            ["fill", "color"],
            ["stroke", "borderColor"],
            ["lineWidth", "borderWidth"],
            ["opacity"],
            ["shadowBlur"],
            ["shadowOffsetX"],
            ["shadowOffsetY"],
            ["shadowColor"],
            ["textPosition"],
            ["textAlign"]
        ]);
        t.exports = {
            getItemStyle: function (t, e) {
                var r = n.call(this, t, e),
                    i = this.getBorderLineDash();
                return i && (r.lineDash = i), r
            },
            getBorderLineDash: function () {
                var t = this.get("borderType");
                return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
            }
        }
    }, function (t, e, r) {
        var n = r(9)([
            ["lineWidth", "width"],
            ["stroke", "color"],
            ["opacity"],
            ["shadowBlur"],
            ["shadowOffsetX"],
            ["shadowOffsetY"],
            ["shadowColor"]
        ]);
        t.exports = {
            getLineStyle: function (t) {
                var e = n.call(this, t),
                    r = this.getLineDash(e.lineWidth);
                return r && (e.lineDash = r), e
            },
            getLineDash: function (t) {
                null == t && (t = 1);
                var e = this.get("type"),
                    r = Math.max(t, 2),
                    n = 4 * t;
                return "solid" === e || null == e ? null : "dashed" === e ? [n, n] : [r, r]
            }
        }
    }, function (t, e, r) {
        var n = r(6),
            i = r(14),
            a = ["textStyle", "color"];
        t.exports = {
            getTextColor: function (t) {
                var e = this.ecModel;
                return this.getShallow("color") || (!t && e ? e.get(a) : null)
            },
            getFont: function () {
                return i.getFont({
                    fontStyle: this.getShallow("fontStyle"),
                    fontWeight: this.getShallow("fontWeight"),
                    fontSize: this.getShallow("fontSize"),
                    fontFamily: this.getShallow("fontFamily")
                }, this.ecModel)
            },
            getTextRect: function (t) {
                return n.getBoundingRect(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"))
            }
        }
    }, function (t, e, r) {
        function n(t) {
            o.assert(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
        }

        function i(t, e) {
            var r = o.slice(arguments, 2);
            return this.superClass.prototype[e].apply(t, r)
        }

        function a(t, e, r) {
            return this.superClass.prototype[e].apply(t, r)
        }
        var o = r(1),
            s = {},
            l = ".",
            h = "___EC__COMPONENT__CONTAINER___",
            u = "\0ec_\0";
        s.set = function (t, e, r) {
            return t[u + e] = r
        }, s.get = function (t, e) {
            return t[u + e]
        }, s.hasOwn = function (t, e) {
            return t.hasOwnProperty(u + e)
        };
        var c = s.parseClassType = function (t) {
            var e = {
                main: "",
                sub: ""
            };
            return t && (t = t.split(l), e.main = t[0] || "", e.sub = t[1] || ""), e
        };
        s.enableClassExtend = function (t, e) {
            t.$constructor = t, t.extend = function (t) {
                __DEV__ && o.each(e, function (e) {
                    t[e] || console.warn("Method `" + e + "` should be implemented" + (t.type ? " in " + t.type : "") + ".")
                });
                var r = this,
                    n = function () {
                        t.$constructor ? t.$constructor.apply(this, arguments) : r.apply(this, arguments)
                    };
                return o.extend(n.prototype, t), n.extend = this.extend, n.superCall = i, n.superApply = a, o.inherits(n, this), n.superClass = r, n
            }
        }, s.enableClassManagement = function (t, e) {
            function r(t) {
                var e = i[t.main];
                return e && e[h] || (e = i[t.main] = {}, e[h] = !0), e
            }
            e = e || {};
            var i = {};
            if (t.registerClass = function (t, e) {
                    if (e)
                        if (n(e), e = c(e), e.sub) {
                            if (e.sub !== h) {
                                var a = r(e);
                                a[e.sub] = t
                            }
                        } else __DEV__ && i[e.main] && console.warn(e.main + " exists."), i[e.main] = t;
                    return t
                }, t.getClass = function (t, e, r) {
                    var n = i[t];
                    if (n && n[h] && (n = e ? n[e] : null), r && !n) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
                    return n
                }, t.getClassesByMainType = function (t) {
                    t = c(t);
                    var e = [],
                        r = i[t.main];
                    return r && r[h] ? o.each(r, function (t, r) {
                        r !== h && e.push(t)
                    }) : e.push(r), e
                }, t.hasClass = function (t) {
                    return t = c(t), !!i[t.main]
                }, t.getAllClassMainTypes = function () {
                    var t = [];
                    return o.each(i, function (e, r) {
                        t.push(r)
                    }), t
                }, t.hasSubTypes = function (t) {
                    t = c(t);
                    var e = i[t.main];
                    return e && e[h]
                }, t.parseClassType = c, e.registerWhenExtend) {
                var a = t.extend;
                a && (t.extend = function (e) {
                    var r = a.call(this, e);
                    return t.registerClass(r, e.type)
                })
            }
            return t
        }, s.setReadOnly = function (t, e) {}, t.exports = s
    }, function (t, e, r) {
        var n = r(1),
            i = r(15),
            a = r(6),
            o = {};
        o.addCommas = function (t) {
            return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
        }, o.toCamelCase = function (t, e) {
            return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
                return e.toUpperCase()
            }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
        }, o.normalizeCssArray = n.normalizeCssArray;
        var s = o.encodeHTML = function (t) {
                return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
            },
            l = ["a", "b", "c", "d", "e", "f", "g"],
            h = function (t, e) {
                return "{" + t + (null == e ? "" : e) + "}"
            };
        o.formatTpl = function (t, e, r) {
            n.isArray(e) || (e = [e]);
            var i = e.length;
            if (!i) return "";
            for (var a = e[0].$vars || [], o = 0; o < a.length; o++) {
                var u = l[o],
                    c = h(u, 0);
                t = t.replace(h(u), r ? s(c) : c)
            }
            for (var f = 0; f < i; f++)
                for (var d = 0; d < a.length; d++) {
                    var c = e[f][a[d]];
                    t = t.replace(h(l[d], f), r ? s(c) : c)
                }
            return t
        }, o.formatTplSimple = function (t, e, r) {
            return n.each(e, function (e, n) {
                t = t.replace("{" + n + "}", r ? s(e) : e)
            }), t
        }, o.getTooltipMarker = function (t, e) {
            return t ? '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + o.encodeHTML(t) + ";" + (e || "") + '"></span>' : ""
        };
        var u = function (t) {
            return t < 10 ? "0" + t : t
        };
        o.formatTime = function (t, e, r) {
            "week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");
            var n = i.parseDate(e),
                a = r ? "UTC" : "",
                o = n["get" + a + "FullYear"](),
                s = n["get" + a + "Month"]() + 1,
                l = n["get" + a + "Date"](),
                h = n["get" + a + "Hours"](),
                c = n["get" + a + "Minutes"](),
                f = n["get" + a + "Seconds"]();
            return t = t.replace("MM", u(s)).replace("M", s).replace("yyyy", o).replace("yy", o % 100).replace("dd", u(l)).replace("d", l).replace("hh", u(h)).replace("h", h).replace("mm", u(c)).replace("m", c).replace("ss", u(f)).replace("s", f)
        }, o.capitalFirst = function (t) {
            return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
        }, o.truncateText = a.truncateText, o.getTextRect = a.getBoundingRect, t.exports = o
    }, function (t, e, r) {
        function n(t, e) {
            return t && t.hasOwnProperty(e)
        }
        var i = r(37),
            a = r(15),
            o = r(31),
            s = r(1),
            l = s.each,
            h = s.isObject,
            u = {};
        u.normalizeToArray = function (t) {
            return t instanceof Array ? t : null == t ? [] : [t]
        }, u.defaultEmphasis = function (t, e) {
            if (t)
                for (var r = t.emphasis = t.emphasis || {}, n = t.normal = t.normal || {}, i = 0, a = e.length; i < a; i++) {
                    var o = e[i];
                    !r.hasOwnProperty(o) && n.hasOwnProperty(o) && (r[o] = n[o])
                }
        }, u.TEXT_STYLE_OPTIONS = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"], u.getDataItemValue = function (t) {
            return t && (null == t.value ? t : t.value)
        }, u.isDataItemOption = function (t) {
            return h(t) && !(t instanceof Array)
        }, u.converDataValue = function (t, e) {
            var r = e && e.type;
            return "ordinal" === r ? t : ("time" === r && "number" != typeof t && null != t && "-" !== t && (t = +a.parseDate(t)), null == t || "" === t ? NaN : +t)
        }, u.createDataFormatModel = function (t, e) {
            var r = new o;
            return s.mixin(r, u.dataFormatMixin), r.seriesIndex = e.seriesIndex, r.name = e.name || "", r.mainType = e.mainType, r.subType = e.subType, r.getData = function () {
                return t
            }, r
        }, u.dataFormatMixin = {
            getDataParams: function (t, e) {
                var r = this.getData(e),
                    n = this.getRawValue(t, e),
                    a = r.getRawIndex(t),
                    o = r.getName(t, !0),
                    s = r.getRawDataItem(t),
                    l = r.getItemVisual(t, "color");
                return {
                    componentType: this.mainType,
                    componentSubType: this.subType,
                    seriesType: "series" === this.mainType ? this.subType : null,
                    seriesIndex: this.seriesIndex,
                    seriesId: this.id,
                    seriesName: this.name,
                    name: o,
                    dataIndex: a,
                    data: s,
                    dataType: e,
                    value: n,
                    color: l,
                    marker: i.getTooltipMarker(l),
                    $vars: ["seriesName", "name", "value"]
                }
            },
            getFormattedLabel: function (t, e, r, n, a) {
                e = e || "normal";
                var o = this.getData(r),
                    s = o.getItemModel(t),
                    l = this.getDataParams(t, r);
                null != n && l.value instanceof Array && (l.value = l.value[n]);
                var h = s.get([a || "label", e, "formatter"]);
                return "function" == typeof h ? (l.status = e, h(l)) : "string" == typeof h ? i.formatTpl(h, l) : void 0
            },
            getRawValue: function (t, e) {
                var r = this.getData(e),
                    n = r.getRawDataItem(t);
                if (null != n) return !h(n) || n instanceof Array ? n : n.value
            },
            formatTooltip: s.noop
        }, u.mappingToExists = function (t, e) {
            e = (e || []).slice();
            var r = s.map(t || [], function (t, e) {
                return {
                    exist: t
                }
            });
            return l(e, function (t, n) {
                if (h(t)) {
                    for (var i = 0; i < r.length; i++)
                        if (!r[i].option && null != t.id && r[i].exist.id === t.id + "") return r[i].option = t, void(e[n] = null);
                    for (var i = 0; i < r.length; i++) {
                        var a = r[i].exist;
                        if (!(r[i].option || null != a.id && null != t.id || null == t.name || u.isIdInner(t) || u.isIdInner(a) || a.name !== t.name + "")) return r[i].option = t, void(e[n] = null)
                    }
                }
            }), l(e, function (t, e) {
                if (h(t)) {
                    for (var n = 0; n < r.length; n++) {
                        var i = r[n].exist;
                        if (!r[n].option && !u.isIdInner(i) && null == t.id) {
                            r[n].option = t;
                            break
                        }
                    }
                    n >= r.length && r.push({
                        option: t
                    })
                }
            }), r
        }, u.makeIdAndName = function (t) {
            var e = s.createHashMap();
            l(t, function (t, r) {
                var n = t.exist;
                n && e.set(n.id, t)
            }), l(t, function (t, r) {
                var n = t.option;
                s.assert(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {})
            }), l(t, function (t, r) {
                var n = t.exist,
                    i = t.option,
                    a = t.keyInfo;
                if (h(i)) {
                    if (a.name = null != i.name ? i.name + "" : n ? n.name : "\0-", n) a.id = n.id;
                    else if (null != i.id) a.id = i.id + "";
                    else {
                        var o = 0;
                        do a.id = "\0" + a.name + "\0" + o++; while (e.get(a.id))
                    }
                    e.set(a.id, t)
                }
            })
        }, u.isIdInner = function (t) {
            return h(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0")
        }, u.compressBatches = function (t, e) {
            function r(t, e, r) {
                for (var n = 0, i = t.length; n < i; n++)
                    for (var a = t[n].seriesId, o = u.normalizeToArray(t[n].dataIndex), s = r && r[a], l = 0, h = o.length; l < h; l++) {
                        var c = o[l];
                        s && s[c] ? s[c] = null : (e[a] || (e[a] = {}))[c] = 1
                    }
            }

            function n(t, e) {
                var r = [];
                for (var i in t)
                    if (t.hasOwnProperty(i) && null != t[i])
                        if (e) r.push(+i);
                        else {
                            var a = n(t[i], !0);
                            a.length && r.push({
                                seriesId: i,
                                dataIndex: a
                            })
                        } return r
            }
            var i = {},
                a = {};
            return r(t || [], i), r(e || [], a, i), [n(i), n(a)]
        }, u.queryDataIndex = function (t, e) {
            return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? s.isArray(e.dataIndex) ? s.map(e.dataIndex, function (e) {
                return t.indexOfRawIndex(e)
            }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? s.isArray(e.name) ? s.map(e.name, function (e) {
                return t.indexOfName(e)
            }) : t.indexOfName(e.name) : void 0
        }, u.makeGetter = function () {
            var t = 0;
            return function () {
                var e = "\0__ec_prop_getter_" + t++;
                return function (t) {
                    return t[e] || (t[e] = {})
                }
            }
        }(), u.parseFinder = function (t, e, r) {
            if (s.isString(e)) {
                var i = {};
                i[e + "Index"] = 0, e = i
            }
            var a = r && r.defaultMainType;
            !a || n(e, a + "Index") || n(e, a + "Id") || n(e, a + "Name") || (e[a + "Index"] = 0);
            var o = {};
            return l(e, function (n, i) {
                var n = e[i];
                if ("dataIndex" === i || "dataIndexInside" === i) return void(o[i] = n);
                var a = i.match(/^(\w+)(Index|Id|Name)$/) || [],
                    l = a[1],
                    h = (a[2] || "").toLowerCase();
                if (!(!l || !h || null == n || "index" === h && "none" === n || r && r.includeMainTypes && s.indexOf(r.includeMainTypes, l) < 0)) {
                    var u = {
                        mainType: l
                    };
                    "index" === h && "all" === n || (u[h] = n);
                    var c = t.queryComponents(u);
                    o[l + "Models"] = c, o[l + "Model"] = c[0]
                }
            }), o
        }, u.dataDimToCoordDim = function (t, e) {
            var r = t.dimensions;
            e = t.getDimension(e);
            for (var n = 0; n < r.length; n++) {
                var i = t.getDimensionInfo(r[n]);
                if (i.name === e) return i.coordDim
            }
        }, u.coordDimToDataDim = function (t, e) {
            var r = [];
            return l(t.dimensions, function (n) {
                var i = t.getDimensionInfo(n);
                i.coordDim === e && (r[i.coordDimIndex] = i.name)
            }), r
        }, u.otherDimToDataDim = function (t, e) {
            var r = [];
            return l(t.dimensions, function (n) {
                var i = t.getDimensionInfo(n),
                    a = i.otherDims,
                    o = a[e];
                null != o && o !== !1 && (r[o] = i.name)
            }), r
        }, t.exports = u
    }, function (t, e, r) {
        "use strict";
        var n = r(14),
            i = r(4),
            a = n.extendShape({
                type: "triangle",
                shape: {
                    cx: 0,
                    cy: 0,
                    width: 0,
                    height: 0
                },
                buildPath: function (t, e) {
                    var r = e.cx,
                        n = e.cy,
                        i = e.width / 2,
                        a = e.height / 2;
                    t.moveTo(r, n - a), t.lineTo(r + i, n + a), t.lineTo(r - i, n + a), t.closePath()
                }
            }),
            o = n.extendShape({
                type: "diamond",
                shape: {
                    cx: 0,
                    cy: 0,
                    width: 0,
                    height: 0
                },
                buildPath: function (t, e) {
                    var r = e.cx,
                        n = e.cy,
                        i = e.width / 2,
                        a = e.height / 2;
                    t.moveTo(r, n - a), t.lineTo(r + i, n), t.lineTo(r, n + a), t.lineTo(r - i, n), t.closePath()
                }
            }),
            s = n.extendShape({
                type: "pin",
                shape: {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                },
                buildPath: function (t, e) {
                    var r = e.x,
                        n = e.y,
                        i = e.width / 5 * 3,
                        a = Math.max(i, e.height),
                        o = i / 2,
                        s = o * o / (a - o),
                        l = n - a + o + s,
                        h = Math.asin(s / o),
                        u = Math.cos(h) * o,
                        c = Math.sin(h),
                        f = Math.cos(h);
                    t.arc(r, l, o, Math.PI - h, 2 * Math.PI + h);
                    var d = .6 * o,
                        p = .7 * o;
                    t.bezierCurveTo(r + u - c * d, l + s + f * d, r, n - p, r, n), t.bezierCurveTo(r, n - p, r - u + c * d, l + s + f * d, r - u, l + s), t.closePath()
                }
            }),
            l = n.extendShape({
                type: "arrow",
                shape: {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                },
                buildPath: function (t, e) {
                    var r = e.height,
                        n = e.width,
                        i = e.x,
                        a = e.y,
                        o = n / 3 * 2;
                    t.moveTo(i, a), t.lineTo(i + o, a + r), t.lineTo(i, a + r / 4 * 3), t.lineTo(i - o, a + r), t.lineTo(i, a), t.closePath()
                }
            }),
            h = {
                line: n.Line,
                rect: n.Rect,
                roundRect: n.Rect,
                square: n.Rect,
                circle: n.Circle,
                diamond: o,
                pin: s,
                arrow: l,
                triangle: a
            },
            u = {
                line: function (t, e, r, n, i) {
                    i.x1 = t, i.y1 = e + n / 2, i.x2 = t + r, i.y2 = e + n / 2
                },
                rect: function (t, e, r, n, i) {
                    i.x = t, i.y = e, i.width = r, i.height = n
                },
                roundRect: function (t, e, r, n, i) {
                    i.x = t, i.y = e, i.width = r, i.height = n, i.r = Math.min(r, n) / 4
                },
                square: function (t, e, r, n, i) {
                    var a = Math.min(r, n);
                    i.x = t, i.y = e, i.width = a, i.height = a
                },
                circle: function (t, e, r, n, i) {
                    i.cx = t + r / 2, i.cy = e + n / 2, i.r = Math.min(r, n) / 2
                },
                diamond: function (t, e, r, n, i) {
                    i.cx = t + r / 2, i.cy = e + n / 2, i.width = r, i.height = n
                },
                pin: function (t, e, r, n, i) {
                    i.x = t + r / 2, i.y = e + n / 2, i.width = r, i.height = n
                },
                arrow: function (t, e, r, n, i) {
                    i.x = t + r / 2, i.y = e + n / 2, i.width = r, i.height = n
                },
                triangle: function (t, e, r, n, i) {
                    i.cx = t + r / 2, i.cy = e + n / 2, i.width = r, i.height = n
                }
            },
            c = {};
        for (var f in h) h.hasOwnProperty(f) && (c[f] = new h[f]);
        var d = n.extendShape({
                type: "symbol",
                shape: {
                    symbolType: "",
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                },
                beforeBrush: function () {
                    var t = this.style,
                        e = this.shape;
                    "pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
                },
                buildPath: function (t, e, r) {
                    var n = e.symbolType,
                        i = c[n];
                    "none" !== e.symbolType && (i || (n = "rect", i = c[n]), u[n](e.x, e.y, e.width, e.height, i.shape), i.buildPath(t, i.shape, r))
                }
            }),
            p = function (t) {
                if ("image" !== this.type) {
                    var e = this.style,
                        r = this.shape;
                    r && "line" === r.symbolType ? e.stroke = t : this.__isEmptyBrush ? (e.stroke = t, e.fill = "#fff") : (e.fill && (e.fill = t), e.stroke && (e.stroke = t)), this.dirty(!1)
                }
            },
            g = {
                createSymbol: function (t, e, r, a, o, s) {
                    var l = 0 === t.indexOf("empty");
                    l && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
                    var h;
                    return h = 0 === t.indexOf("image://") ? new n.Image({
                        style: {
                            image: t.slice(8),
                            x: e,
                            y: r,
                            width: a,
                            height: o
                        }
                    }) : 0 === t.indexOf("path://") ? n.makePath(t.slice(7), {}, new i(e, r, a, o)) : new d({
                        shape: {
                            symbolType: t,
                            x: e,
                            y: r,
                            width: a,
                            height: o
                        }
                    }), h.__isEmptyBrush = l, h.setColor = p, h.setColor(s), h
                }
            };
        t.exports = g
    }, function (t, e) {
        t.exports = function (t, e) {
            var r = {};
            e.eachRawSeriesByType(t, function (t) {
                var n = t.getRawData(),
                    i = {};
                if (!e.isSeriesFiltered(t)) {
                    var a = t.getData();
                    a.each(function (t) {
                        var e = a.getRawIndex(t);
                        i[e] = t
                    }), n.each(function (e) {
                        var o = i[e],
                            s = null != o && a.getItemVisual(o, "color", !0);
                        if (s) n.setItemVisual(e, "color", s);
                        else {
                            var l = n.getItemModel(e),
                                h = l.get("itemStyle.normal.color") || t.getColorFromPalette(n.getName(e), r);
                            n.setItemVisual(e, "color", h), null != o && a.setItemVisual(o, "color", h)
                        }
                    })
                }
            })
        }
    }, function (t, e, r) {
        function n(t, e) {
            return t[e]
        }

        function i(t, e, r) {
            t[e] = r
        }

        function a(t, e, r) {
            return (e - t) * r + t
        }

        function o(t, e, r) {
            return r > .5 ? e : t
        }

        function s(t, e, r, n, i) {
            var o = t.length;
            if (1 == i)
                for (var s = 0; s < o; s++) n[s] = a(t[s], e[s], r);
            else
                for (var l = o && t[0].length, s = 0; s < o; s++)
                    for (var h = 0; h < l; h++) n[s][h] = a(t[s][h], e[s][h], r)
        }

        function l(t, e, r) {
            var n = t.length,
                i = e.length;
            if (n !== i) {
                var a = n > i;
                if (a) t.length = i;
                else
                    for (var o = n; o < i; o++) t.push(1 === r ? e[o] : _.call(e[o]))
            }
            for (var s = t[0] && t[0].length, o = 0; o < t.length; o++)
                if (1 === r) isNaN(t[o]) && (t[o] = e[o]);
                else
                    for (var l = 0; l < s; l++) isNaN(t[o][l]) && (t[o][l] = e[o][l])
        }

        function h(t, e, r) {
            if (t === e) return !0;
            var n = t.length;
            if (n !== e.length) return !1;
            if (1 === r) {
                for (var i = 0; i < n; i++)
                    if (t[i] !== e[i]) return !1
            } else
                for (var a = t[0].length, i = 0; i < n; i++)
                    for (var o = 0; o < a; o++)
                        if (t[i][o] !== e[i][o]) return !1;
            return !0
        }

        function u(t, e, r, n, i, a, o, s, l) {
            var h = t.length;
            if (1 == l)
                for (var u = 0; u < h; u++) s[u] = c(t[u], e[u], r[u], n[u], i, a, o);
            else
                for (var f = t[0].length, u = 0; u < h; u++)
                    for (var d = 0; d < f; d++) s[u][d] = c(t[u][d], e[u][d], r[u][d], n[u][d], i, a, o)
        }

        function c(t, e, r, n, i, a, o) {
            var s = .5 * (r - t),
                l = .5 * (n - e);
            return (2 * (e - r) + s + l) * o + (-3 * (e - r) - 2 * s - l) * a + s * i + e
        }

        function f(t) {
            if (y(t)) {
                var e = t.length;
                if (y(t[0])) {
                    for (var r = [], n = 0; n < e; n++) r.push(_.call(t[n]));
                    return r
                }
                return _.call(t)
            }
            return t
        }

        function d(t) {
            return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
        }

        function p(t) {
            var e = t[t.length - 1].value;
            return y(e && e[0]) ? 2 : 1
        }

        function g(t, e, r, n, i, f) {
            var g = t._getter,
                x = t._setter,
                _ = "spline" === e,
                w = n.length;
            if (w) {
                var b, S = n[0].value,
                    T = y(S),
                    M = !1,
                    P = !1,
                    k = T ? p(n) : 0;
                n.sort(function (t, e) {
                    return t.time - e.time
                }), b = n[w - 1].time;
                for (var C = [], I = [], A = n[0].value, O = !0, D = 0; D < w; D++) {
                    C.push(n[D].time / b);
                    var L = n[D].value;
                    if (T && h(L, A, k) || !T && L === A || (O = !1), A = L, "string" == typeof L) {
                        var B = m.parse(L);
                        B ? (L = B, M = !0) : P = !0
                    }
                    I.push(L)
                }
                if (f || !O) {
                    for (var F = I[w - 1], D = 0; D < w - 1; D++) T ? l(I[D], F, k) : !isNaN(I[D]) || isNaN(F) || P || M || (I[D] = F);
                    T && l(g(t._target, i), F, k);
                    var R, z, q, W, E, N, H = 0,
                        j = 0;
                    if (M) var V = [0, 0, 0, 0];
                    var X = function (t, e) {
                            var r;
                            if (e < 0) r = 0;
                            else if (e < j) {
                                for (R = Math.min(H + 1, w - 1), r = R; r >= 0 && !(C[r] <= e); r--);
                                r = Math.min(r, w - 2)
                            } else {
                                for (r = H; r < w && !(C[r] > e); r++);
                                r = Math.min(r - 1, w - 2)
                            }
                            H = r, j = e;
                            var n = C[r + 1] - C[r];
                            if (0 !== n)
                                if (z = (e - C[r]) / n, _)
                                    if (W = I[r], q = I[0 === r ? r : r - 1], E = I[r > w - 2 ? w - 1 : r + 1], N = I[r > w - 3 ? w - 1 : r + 2], T) u(q, W, E, N, z, z * z, z * z * z, g(t, i), k);
                                    else {
                                        var l;
                                        if (M) l = u(q, W, E, N, z, z * z, z * z * z, V, 1), l = d(V);
                                        else {
                                            if (P) return o(W, E, z);
                                            l = c(q, W, E, N, z, z * z, z * z * z)
                                        }
                                        x(t, i, l)
                                    }
                            else if (T) s(I[r], I[r + 1], z, g(t, i), k);
                            else {
                                var l;
                                if (M) s(I[r], I[r + 1], z, V, 1), l = d(V);
                                else {
                                    if (P) return o(I[r], I[r + 1], z);
                                    l = a(I[r], I[r + 1], z)
                                }
                                x(t, i, l)
                            }
                        },
                        G = new v({
                            target: t._target,
                            life: b,
                            loop: t._loop,
                            delay: t._delay,
                            onframe: X,
                            ondestroy: r
                        });
                    return e && "spline" !== e && (G.easing = e), G
                }
            }
        }
        var v = r(42),
            m = r(25),
            x = r(1),
            y = x.isArrayLike,
            _ = Array.prototype.slice,
            w = function (t, e, r, a) {
                this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = r || n, this._setter = a || i, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
            };
        w.prototype = {
            when: function (t, e) {
                var r = this._tracks;
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        if (!r[n]) {
                            r[n] = [];
                            var i = this._getter(this._target, n);
                            if (null == i) continue;
                            0 !== t && r[n].push({
                                time: 0,
                                value: f(i)
                            })
                        }
                        r[n].push({
                            time: t,
                            value: e[n]
                        })
                    } return this
            },
            during: function (t) {
                return this._onframeList.push(t), this
            },
            pause: function () {
                for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
                this._paused = !0
            },
            resume: function () {
                for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
                this._paused = !1
            },
            isPaused: function () {
                return !!this._paused
            },
            _doneCallback: function () {
                this._tracks = {}, this._clipList.length = 0;
                for (var t = this._doneList, e = t.length, r = 0; r < e; r++) t[r].call(this)
            },
            start: function (t, e) {
                var r, n = this,
                    i = 0,
                    a = function () {
                        i--, i || n._doneCallback()
                    };
                for (var o in this._tracks)
                    if (this._tracks.hasOwnProperty(o)) {
                        var s = g(this, t, a, this._tracks[o], o, e);
                        s && (this._clipList.push(s), i++, this.animation && this.animation.addClip(s), r = s)
                    } if (r) {
                    var l = r.onframe;
                    r.onframe = function (t, e) {
                        l(t, e);
                        for (var r = 0; r < n._onframeList.length; r++) n._onframeList[r](t, e)
                    }
                }
                return i || this._doneCallback(), this
            },
            stop: function (t) {
                for (var e = this._clipList, r = this.animation, n = 0; n < e.length; n++) {
                    var i = e[n];
                    t && i.onframe(this._target, 1), r && r.removeClip(i)
                }
                e.length = 0
            },
            delay: function (t) {
                return this._delay = t, this
            },
            done: function (t) {
                return t && this._doneList.push(t), this
            },
            getClips: function () {
                return this._clipList
            }
        }, t.exports = w
    }, function (t, e, r) {
        function n(t) {
            this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1
        }
        var i = r(43);
        n.prototype = {
            constructor: n,
            step: function (t, e) {
                if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void(this._pausedTime += e);
                var r = (t - this._startTime - this._pausedTime) / this._life;
                if (!(r < 0)) {
                    r = Math.min(r, 1);
                    var n = this.easing,
                        a = "string" == typeof n ? i[n] : n,
                        o = "function" == typeof a ? a(r) : r;
                    return this.fire("frame", o), 1 == r ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
                }
            },
            restart: function (t) {
                var e = (t - this._startTime - this._pausedTime) % this._life;
                this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1
            },
            fire: function (t, e) {
                t = "on" + t, this[t] && this[t](this._target, e)
            },
            pause: function () {
                this._paused = !0
            },
            resume: function () {
                this._paused = !1
            }
        }, t.exports = n
    }, function (t, e) {
        var r = {
            linear: function (t) {
                return t
            },
            quadraticIn: function (t) {
                return t * t
            },
            quadraticOut: function (t) {
                return t * (2 - t)
            },
            quadraticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            cubicIn: function (t) {
                return t * t * t
            },
            cubicOut: function (t) {
                return --t * t * t + 1
            },
            cubicInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            quarticIn: function (t) {
                return t * t * t * t
            },
            quarticOut: function (t) {
                return 1 - --t * t * t * t
            },
            quarticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            quinticIn: function (t) {
                return t * t * t * t * t
            },
            quinticOut: function (t) {
                return --t * t * t * t * t + 1
            },
            quinticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            sinusoidalIn: function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            },
            sinusoidalOut: function (t) {
                return Math.sin(t * Math.PI / 2)
            },
            sinusoidalInOut: function (t) {
                return .5 * (1 - Math.cos(Math.PI * t))
            },
            exponentialIn: function (t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1)
            },
            exponentialOut: function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            exponentialInOut: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
            },
            circularIn: function (t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            circularOut: function (t) {
                return Math.sqrt(1 - --t * t)
            },
            circularInOut: function (t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            elasticIn: function (t) {
                var e, r = .1,
                    n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!r || r < 1 ? (r = 1, e = n / 4) : e = n * Math.asin(1 / r) / (2 * Math.PI), -(r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)))
            },
            elasticOut: function (t) {
                var e, r = .1,
                    n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!r || r < 1 ? (r = 1, e = n / 4) : e = n * Math.asin(1 / r) / (2 * Math.PI), r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
            },
            elasticInOut: function (t) {
                var e, r = .1,
                    n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!r || r < 1 ? (r = 1, e = n / 4) : e = n * Math.asin(1 / r) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * (r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)) : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
            },
            backIn: function (t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            backOut: function (t) {
                var e = 1.70158;
                return --t * t * ((e + 1) * t + e) + 1
            },
            backInOut: function (t) {
                var e = 2.5949095;
                return (t *= 2) < 1 ? .5 * (t * t * ((e + 1) * t - e)) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
            },
            bounceIn: function (t) {
                return 1 - r.bounceOut(1 - t)
            },
            bounceOut: function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            bounceInOut: function (t) {
                return t < .5 ? .5 * r.bounceIn(2 * t) : .5 * r.bounceOut(2 * t - 1) + .5
            }
        };
        t.exports = r
    }, function (t, e, r) {
        var n = r(18).normalizeRadian,
            i = 2 * Math.PI;
        t.exports = {
            containStroke: function (t, e, r, a, o, s, l, h, u) {
                if (0 === l) return !1;
                var c = l;
                h -= t, u -= e;
                var f = Math.sqrt(h * h + u * u);
                if (f - c > r || f + c < r) return !1;
                if (Math.abs(a - o) % i < 1e-4) return !0;
                if (s) {
                    var d = a;
                    a = n(o), o = n(d)
                } else a = n(a), o = n(o);
                a > o && (o += i);
                var p = Math.atan2(u, h);
                return p < 0 && (p += i), p >= a && p <= o || p + i >= a && p + i <= o
            }
        }
    }, function (t, e, r) {
        var n = r(5);
        t.exports = {
            containStroke: function (t, e, r, i, a, o, s, l, h, u, c) {
                if (0 === h) return !1;
                var f = h;
                if (c > e + f && c > i + f && c > o + f && c > l + f || c < e - f && c < i - f && c < o - f && c < l - f || u > t + f && u > r + f && u > a + f && u > s + f || u < t - f && u < r - f && u < a - f && u < s - f) return !1;
                var d = n.cubicProjectPoint(t, e, r, i, a, o, s, l, u, c, null);
                return d <= f / 2
            }
        }
    }, function (t, e) {
        t.exports = {
            containStroke: function (t, e, r, n, i, a, o) {
                if (0 === i) return !1;
                var s = i,
                    l = 0,
                    h = t;
                if (o > e + s && o > n + s || o < e - s && o < n - s || a > t + s && a > r + s || a < t - s && a < r - s) return !1;
                if (t === r) return Math.abs(a - t) <= s / 2;
                l = (e - n) / (t - r), h = (t * n - r * e) / (t - r);
                var u = l * a - o + h,
                    c = u * u / (l * l + 1);
                return c <= s / 2 * s / 2
            }
        }
    }, function (t, e, r) {
        "use strict";

        function n(t, e) {
            return Math.abs(t - e) < y
        }

        function i() {
            var t = w[0];
            w[0] = w[1], w[1] = t
        }

        function a(t, e, r, n, a, o, s, l, h, u) {
            if (u > e && u > n && u > o && u > l || u < e && u < n && u < o && u < l) return 0;
            var c = g.cubicRootAt(e, n, o, l, u, _);
            if (0 === c) return 0;
            for (var f, d, p = 0, v = -1, m = 0; m < c; m++) {
                var x = _[m],
                    y = 0 === x || 1 === x ? .5 : 1,
                    b = g.cubicAt(t, r, a, s, x);
                b < h || (v < 0 && (v = g.cubicExtrema(e, n, o, l, w), w[1] < w[0] && v > 1 && i(), f = g.cubicAt(e, n, o, l, w[0]), v > 1 && (d = g.cubicAt(e, n, o, l, w[1]))), p += 2 == v ? x < w[0] ? f < e ? y : -y : x < w[1] ? d < f ? y : -y : l < d ? y : -y : x < w[0] ? f < e ? y : -y : l < f ? y : -y)
            }
            return p
        }

        function o(t, e, r, n, i, a, o, s) {
            if (s > e && s > n && s > a || s < e && s < n && s < a) return 0;
            var l = g.quadraticRootAt(e, n, a, s, _);
            if (0 === l) return 0;
            var h = g.quadraticExtremum(e, n, a);
            if (h >= 0 && h <= 1) {
                for (var u = 0, c = g.quadraticAt(e, n, a, h), f = 0; f < l; f++) {
                    var d = 0 === _[f] || 1 === _[f] ? .5 : 1,
                        p = g.quadraticAt(t, r, i, _[f]);
                    p < o || (u += _[f] < h ? c < e ? d : -d : a < c ? d : -d)
                }
                return u
            }
            var d = 0 === _[0] || 1 === _[0] ? .5 : 1,
                p = g.quadraticAt(t, r, i, _[0]);
            return p < o ? 0 : a < e ? d : -d
        }

        function s(t, e, r, n, i, a, o, s) {
            if (s -= e, s > r || s < -r) return 0;
            var l = Math.sqrt(r * r - s * s);
            _[0] = -l, _[1] = l;
            var h = Math.abs(n - i);
            if (h < 1e-4) return 0;
            if (h % x < 1e-4) {
                n = 0, i = x;
                var u = a ? 1 : -1;
                return o >= _[0] + t && o <= _[1] + t ? u : 0
            }
            if (a) {
                var l = n;
                n = p(i), i = p(l)
            } else n = p(n), i = p(i);
            n > i && (i += x);
            for (var c = 0, f = 0; f < 2; f++) {
                var d = _[f];
                if (d + t > o) {
                    var g = Math.atan2(s, d),
                        u = a ? 1 : -1;
                    g < 0 && (g = x + g), (g >= n && g <= i || g + x >= n && g + x <= i) && (g > Math.PI / 2 && g < 1.5 * Math.PI && (u = -u), c += u)
                }
            }
            return c
        }

        function l(t, e, r, i, l) {
            for (var u = 0, p = 0, g = 0, x = 0, y = 0, _ = 0; _ < t.length;) {
                var w = t[_++];
                switch (w === h.M && _ > 1 && (r || (u += v(p, g, x, y, i, l))), 1 == _ && (p = t[_], g = t[_ + 1], x = p, y = g), w) {
                    case h.M:
                        x = t[_++], y = t[_++], p = x, g = y;
                        break;
                    case h.L:
                        if (r) {
                            if (m(p, g, t[_], t[_ + 1], e, i, l)) return !0
                        } else u += v(p, g, t[_], t[_ + 1], i, l) || 0;
                        p = t[_++], g = t[_++];
                        break;
                    case h.C:
                        if (r) {
                            if (c.containStroke(p, g, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], e, i, l)) return !0
                        } else u += a(p, g, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], i, l) || 0;
                        p = t[_++], g = t[_++];
                        break;
                    case h.Q:
                        if (r) {
                            if (f.containStroke(p, g, t[_++], t[_++], t[_], t[_ + 1], e, i, l)) return !0
                        } else u += o(p, g, t[_++], t[_++], t[_], t[_ + 1], i, l) || 0;
                        p = t[_++], g = t[_++];
                        break;
                    case h.A:
                        var b = t[_++],
                            S = t[_++],
                            T = t[_++],
                            M = t[_++],
                            P = t[_++],
                            k = t[_++],
                            C = (t[_++], 1 - t[_++]),
                            I = Math.cos(P) * T + b,
                            A = Math.sin(P) * M + S;
                        _ > 1 ? u += v(p, g, I, A, i, l) : (x = I, y = A);
                        var O = (i - b) * M / T + b;
                        if (r) {
                            if (d.containStroke(b, S, M, P, P + k, C, e, O, l)) return !0
                        } else u += s(b, S, M, P, P + k, C, O, l);
                        p = Math.cos(P + k) * T + b, g = Math.sin(P + k) * M + S;
                        break;
                    case h.R:
                        x = p = t[_++], y = g = t[_++];
                        var D = t[_++],
                            L = t[_++],
                            I = x + D,
                            A = y + L;
                        if (r) {
                            if (m(x, y, I, y, e, i, l) || m(I, y, I, A, e, i, l) || m(I, A, x, A, e, i, l) || m(x, A, x, y, e, i, l)) return !0
                        } else u += v(I, y, I, A, i, l), u += v(x, A, x, y, i, l);
                        break;
                    case h.Z:
                        if (r) {
                            if (m(p, g, x, y, e, i, l)) return !0
                        } else u += v(p, g, x, y, i, l);
                        p = x, g = y
                }
            }
            return r || n(g, y) || (u += v(p, g, x, y, i, l) || 0), 0 !== u
        }
        var h = r(7).CMD,
            u = r(46),
            c = r(45),
            f = r(48),
            d = r(44),
            p = r(18).normalizeRadian,
            g = r(5),
            v = r(49),
            m = u.containStroke,
            x = 2 * Math.PI,
            y = 1e-4,
            _ = [-1, -1, -1],
            w = [-1, -1];
        t.exports = {
            contain: function (t, e, r) {
                return l(t, 0, !1, e, r)
            },
            containStroke: function (t, e, r, n) {
                return l(t, e, !0, r, n)
            }
        }
    }, function (t, e, r) {
        var n = r(5);
        t.exports = {
            containStroke: function (t, e, r, i, a, o, s, l, h) {
                if (0 === s) return !1;
                var u = s;
                if (h > e + u && h > i + u && h > o + u || h < e - u && h < i - u && h < o - u || l > t + u && l > r + u && l > a + u || l < t - u && l < r - u && l < a - u) return !1;
                var c = n.quadraticProjectPoint(t, e, r, i, a, o, l, h, null);
                return c <= u / 2
            }
        }
    }, function (t, e) {
        t.exports = function (t, e, r, n, i, a) {
            if (a > e && a > n || a < e && a < n) return 0;
            if (n === e) return 0;
            var o = n < e ? 1 : -1,
                s = (a - e) / (n - e);
            1 !== s && 0 !== s || (o = n < e ? .5 : -.5);
            var l = s * (r - t) + t;
            return l > i ? o : 0
        }
    }, function (t, e, r) {
        var n = r(1),
            i = r(16),
            a = r(4),
            o = function (t) {
                t = t || {}, i.call(this, t);
                for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                this._children = [], this.__storage = null, this.__dirty = !0
            };
        o.prototype = {
            constructor: o,
            isGroup: !0,
            type: "group",
            silent: !1,
            children: function () {
                return this._children.slice()
            },
            childAt: function (t) {
                return this._children[t]
            },
            childOfName: function (t) {
                for (var e = this._children, r = 0; r < e.length; r++)
                    if (e[r].name === t) return e[r]
            },
            childCount: function () {
                return this._children.length
            },
            add: function (t) {
                return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
            },
            addBefore: function (t, e) {
                if (t && t !== this && t.parent !== this && e && e.parent === this) {
                    var r = this._children,
                        n = r.indexOf(e);
                    n >= 0 && (r.splice(n, 0, t), this._doAdd(t))
                }
                return this
            },
            _doAdd: function (t) {
                t.parent && t.parent.remove(t), t.parent = this;
                var e = this.__storage,
                    r = this.__zr;
                e && e !== t.__storage && (e.addToStorage(t), t instanceof o && t.addChildrenToStorage(e)), r && r.refresh()
            },
            remove: function (t) {
                var e = this.__zr,
                    r = this.__storage,
                    i = this._children,
                    a = n.indexOf(i, t);
                return a < 0 ? this : (i.splice(a, 1), t.parent = null, r && (r.delFromStorage(t), t instanceof o && t.delChildrenFromStorage(r)), e && e.refresh(), this)
            },
            removeAll: function () {
                var t, e, r = this._children,
                    n = this.__storage;
                for (e = 0; e < r.length; e++) t = r[e], n && (n.delFromStorage(t), t instanceof o && t.delChildrenFromStorage(n)), t.parent = null;
                return r.length = 0, this
            },
            eachChild: function (t, e) {
                for (var r = this._children, n = 0; n < r.length; n++) {
                    var i = r[n];
                    t.call(e, i, n)
                }
                return this
            },
            traverse: function (t, e) {
                for (var r = 0; r < this._children.length; r++) {
                    var n = this._children[r];
                    t.call(e, n), "group" === n.type && n.traverse(t, e)
                }
                return this
            },
            addChildrenToStorage: function (t) {
                for (var e = 0; e < this._children.length; e++) {
                    var r = this._children[e];
                    t.addToStorage(r), r instanceof o && r.addChildrenToStorage(t)
                }
            },
            delChildrenFromStorage: function (t) {
                for (var e = 0; e < this._children.length; e++) {
                    var r = this._children[e];
                    t.delFromStorage(r), r instanceof o && r.delChildrenFromStorage(t)
                }
            },
            dirty: function () {
                return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
            },
            getBoundingRect: function (t) {
                for (var e = null, r = new a(0, 0, 0, 0), n = t || this._children, i = [], o = 0; o < n.length; o++) {
                    var s = n[o];
                    if (!s.ignore && !s.invisible) {
                        var l = s.getBoundingRect(),
                            h = s.getLocalTransform(i);
                        h ? (r.copy(l), r.applyTransform(h), e = e || r.clone(), e.union(r)) : (e = e || l.clone(), e.union(l))
                    }
                }
                return e || r
            }
        }, n.inherits(o, i), t.exports = o
    }, function (t, e, r) {
        var n = r(3),
            i = r(5),
            a = {},
            o = Math.min,
            s = Math.max,
            l = Math.sin,
            h = Math.cos,
            u = n.create(),
            c = n.create(),
            f = n.create(),
            d = 2 * Math.PI;
        a.fromPoints = function (t, e, r) {
            if (0 !== t.length) {
                var n, i = t[0],
                    a = i[0],
                    l = i[0],
                    h = i[1],
                    u = i[1];
                for (n = 1; n < t.length; n++) i = t[n], a = o(a, i[0]), l = s(l, i[0]), h = o(h, i[1]), u = s(u, i[1]);
                e[0] = a, e[1] = h, r[0] = l, r[1] = u
            }
        }, a.fromLine = function (t, e, r, n, i, a) {
            i[0] = o(t, r), i[1] = o(e, n), a[0] = s(t, r), a[1] = s(e, n)
        };
        var p = [],
            g = [];
        a.fromCubic = function (t, e, r, n, a, l, h, u, c, f) {
            var d, v = i.cubicExtrema,
                m = i.cubicAt,
                x = v(t, r, a, h, p);
            for (c[0] = 1 / 0, c[1] = 1 / 0, f[0] = -(1 / 0), f[1] = -(1 / 0), d = 0; d < x; d++) {
                var y = m(t, r, a, h, p[d]);
                c[0] = o(y, c[0]), f[0] = s(y, f[0])
            }
            for (x = v(e, n, l, u, g), d = 0; d < x; d++) {
                var _ = m(e, n, l, u, g[d]);
                c[1] = o(_, c[1]), f[1] = s(_, f[1])
            }
            c[0] = o(t, c[0]), f[0] = s(t, f[0]), c[0] = o(h, c[0]), f[0] = s(h, f[0]), c[1] = o(e, c[1]), f[1] = s(e, f[1]), c[1] = o(u, c[1]), f[1] = s(u, f[1])
        }, a.fromQuadratic = function (t, e, r, n, a, l, h, u) {
            var c = i.quadraticExtremum,
                f = i.quadraticAt,
                d = s(o(c(t, r, a), 1), 0),
                p = s(o(c(e, n, l), 1), 0),
                g = f(t, r, a, d),
                v = f(e, n, l, p);
            h[0] = o(t, a, g), h[1] = o(e, l, v), u[0] = s(t, a, g), u[1] = s(e, l, v)
        }, a.fromArc = function (t, e, r, i, a, o, s, p, g) {
            var v = n.min,
                m = n.max,
                x = Math.abs(a - o);
            if (x % d < 1e-4 && x > 1e-4) return p[0] = t - r, p[1] = e - i, g[0] = t + r, void(g[1] = e + i);
            if (u[0] = h(a) * r + t, u[1] = l(a) * i + e, c[0] = h(o) * r + t, c[1] = l(o) * i + e, v(p, u, c), m(g, u, c), a %= d, a < 0 && (a += d), o %= d, o < 0 && (o += d), a > o && !s ? o += d : a < o && s && (a += d), s) {
                var y = o;
                o = a, a = y
            }
            for (var _ = 0; _ < o; _ += Math.PI / 2) _ > a && (f[0] = h(_) * r + t, f[1] = l(_) * i + e, v(p, f, p), m(g, f, g))
        }, t.exports = a
    }, function (t, e) {
        var r = 2311;
        t.exports = function () {
            return r++
        }
    }, function (t, e, r) {
        var n = r(17);
        t.exports = function () {
            if (0 !== n.debugMode)
                if (1 == n.debugMode)
                    for (var t in arguments) throw new Error(arguments[t]);
                else if (n.debugMode > 1)
                for (var t in arguments) console.log(arguments[t])
        }
    }, function (t, e, r) {
        var n = r(2);
        t.exports = n.extend({
            type: "compound",
            shape: {
                paths: null
            },
            _updatePathDirty: function () {
                for (var t = this.__dirtyPath, e = this.shape.paths, r = 0; r < e.length; r++) t = t || e[r].__dirtyPath;
                this.__dirtyPath = t, this.__dirty = this.__dirty || t
            },
            beforeBrush: function () {
                this._updatePathDirty();
                for (var t = this.shape.paths || [], e = this.getGlobalScale(), r = 0; r < t.length; r++) t[r].path || t[r].createPathProxy(), t[r].path.setScale(e[0], e[1])
            },
            buildPath: function (t, e) {
                for (var r = e.paths || [], n = 0; n < r.length; n++) r[n].buildPath(t, r[n].shape, !0)
            },
            afterBrush: function () {
                for (var t = this.shape.paths, e = 0; e < t.length; e++) t[e].__dirtyPath = !1
            },
            getBoundingRect: function () {
                return this._updatePathDirty(), n.prototype.getBoundingRect.call(this)
            }
        })
    }, function (t, e, r) {
        function n(t) {
            i.call(this, t)
        }
        var i = r(11),
            a = r(4),
            o = r(1),
            s = r(12);
        n.prototype = {
            constructor: n,
            type: "image",
            brush: function (t, e) {
                var r = this.style,
                    n = r.image;
                r.bind(t, this, e);
                var i = this._image = s.createOrUpdateImage(n, this._image, this);
                if (i && s.isImageReady(i)) {
                    var a = r.x || 0,
                        o = r.y || 0,
                        l = r.width,
                        h = r.height,
                        u = i.width / i.height;
                    if (null == l && null != h ? l = h * u : null == h && null != l ? h = l / u : null == l && null == h && (l = i.width, h = i.height), this.setTransform(t), r.sWidth && r.sHeight) {
                        var c = r.sx || 0,
                            f = r.sy || 0;
                        t.drawImage(i, c, f, r.sWidth, r.sHeight, a, o, l, h)
                    } else if (r.sx && r.sy) {
                        var c = r.sx,
                            f = r.sy,
                            d = l - c,
                            p = h - f;
                        t.drawImage(i, c, f, d, p, a, o, l, h)
                    } else t.drawImage(i, a, o, l, h);
                    this.restoreTransform(t), null != r.text && this.drawRectText(t, this.getBoundingRect())
                }
            },
            getBoundingRect: function () {
                var t = this.style;
                return this._rect || (this._rect = new a(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
            }
        }, o.inherits(n, i), t.exports = n
    }, function (t, e, r) {
        "use strict";
        var n = r(1),
            i = r(21),
            a = function (t, e, r, n, a, o) {
                this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == r ? 1 : r, this.y2 = null == n ? 0 : n, this.type = "linear", this.global = o || !1, i.call(this, a)
            };
        a.prototype = {
            constructor: a
        }, n.inherits(a, i), t.exports = a
    }, function (t, e) {
        var r = function (t, e) {
            this.image = t, this.repeat = e, this.type = "pattern"
        };
        r.prototype.getCanvasPattern = function (t) {
            return t.createPattern(this.image, this.repeat || "repeat")
        }, t.exports = r
    }, function (t, e, r) {
        "use strict";
        var n = r(1),
            i = r(21),
            a = function (t, e, r, n, a) {
                this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == r ? .5 : r, this.type = "radial", this.global = a || !1, i.call(this, n)
            };
        a.prototype = {
            constructor: a
        }, n.inherits(a, i), t.exports = a
    }, function (t, e, r) {
        function n(t, e, r) {
            var n = null == e.x ? 0 : e.x,
                i = null == e.x2 ? 1 : e.x2,
                a = null == e.y ? 0 : e.y,
                o = null == e.y2 ? 0 : e.y2;
            e.global || (n = n * r.width + r.x, i = i * r.width + r.x, a = a * r.height + r.y, o = o * r.height + r.y);
            var s = t.createLinearGradient(n, a, i, o);
            return s
        }

        function i(t, e, r) {
            var n = r.width,
                i = r.height,
                a = Math.min(n, i),
                o = null == e.x ? .5 : e.x,
                s = null == e.y ? .5 : e.y,
                l = null == e.r ? .5 : e.r;
            e.global || (o = o * n + r.x, s = s * i + r.y, l *= a);
            var h = t.createRadialGradient(o, s, 0, o, s, l);
            return h
        }
        var a = r(13),
            o = [
                ["shadowBlur", 0],
                ["shadowOffsetX", 0],
                ["shadowOffsetY", 0],
                ["shadowColor", "#000"],
                ["lineCap", "butt"],
                ["lineJoin", "miter"],
                ["miterLimit", 10]
            ],
            s = function (t, e) {
                this.extendFrom(t, !1), this.host = e
            };
        s.prototype = {
            constructor: s,
            host: null,
            fill: "#000000",
            stroke: null,
            opacity: 1,
            lineDash: null,
            lineDashOffset: 0,
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            lineWidth: 1,
            strokeNoScale: !1,
            text: null,
            font: null,
            textFont: null,
            fontStyle: null,
            fontWeight: null,
            fontSize: null,
            fontFamily: null,
            textTag: null,
            textFill: "#000",
            textStroke: null,
            textWidth: null,
            textHeight: null,
            textLineWidth: 0,
            textLineHeight: null,
            textPosition: "inside",
            textRect: null,
            textOffset: null,
            textAlign: null,
            textVerticalAlign: null,
            textDistance: 5,
            textShadowColor: "transparent",
            textShadowBlur: 0,
            textShadowOffsetX: 0,
            textShadowOffsetY: 0,
            textBoxShadowColor: "transparent",
            textBoxShadowBlur: 0,
            textBoxShadowOffsetX: 0,
            textBoxShadowOffsetY: 0,
            transformText: !1,
            textRotation: 0,
            textOrigin: null,
            textBackgroundColor: null,
            textBorderColor: null,
            textBorderWidth: 0,
            textBorderRadius: 0,
            textPadding: null,
            rich: null,
            truncate: null,
            blend: null,
            normalize: function () {
                a.normalizeTextStyle(this)
            },
            bind: function (t, e, r) {
                for (var n = this, i = r && r.style, a = !i, s = 0; s < o.length; s++) {
                    var l = o[s],
                        h = l[0];
                    (a || n[h] !== i[h]) && (t[h] = n[h] || l[1])
                }
                if ((a || n.fill !== i.fill) && (t.fillStyle = n.fill), (a || n.stroke !== i.stroke) && (t.strokeStyle = n.stroke), (a || n.opacity !== i.opacity) && (t.globalAlpha = null == n.opacity ? 1 : n.opacity), (a || n.blend !== i.blend) && (t.globalCompositeOperation = n.blend || "source-over"), this.hasStroke()) {
                    var u = n.lineWidth;
                    t.lineWidth = u / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
                }
            },
            hasFill: function () {
                var t = this.fill;
                return null != t && "none" !== t
            },
            hasStroke: function () {
                var t = this.stroke;
                return null != t && "none" !== t && this.lineWidth > 0
            },
            extendFrom: function (t, e) {
                if (t)
                    for (var r in t) !t.hasOwnProperty(r) || e !== !0 && (e === !1 ? this.hasOwnProperty(r) : null == t[r]) || (this[r] = t[r])
            },
            set: function (t, e) {
                "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
            },
            clone: function () {
                var t = new this.constructor;
                return t.extendFrom(this, !0), t
            },
            getGradient: function (t, e, r) {
                for (var a = "radial" === e.type ? i : n, o = a(t, e, r), s = e.colorStops, l = 0; l < s.length; l++) o.addColorStop(s[l].offset, s[l].color);
                return o
            }
        };
        for (var l = s.prototype, h = 0; h < o.length; h++) {
            var u = o[h];
            u[0] in l || (l[u[0]] = u[1])
        }
        s.getGradient = l.getGradient, t.exports = s
    }, function (t, e, r) {
        var n = r(11),
            i = r(1),
            a = r(6),
            o = r(13),
            s = function (t) {
                n.call(this, t)
            };
        s.prototype = {
            constructor: s,
            type: "text",
            brush: function (t, e) {
                var r = this.style;
                this.__dirty && o.normalizeTextStyle(r, !0), r.fill = r.stroke = r.shadowBlur = r.shadowColor = r.shadowOffsetX = r.shadowOffsetY = null;
                var n = r.text;
                null != n && (n += ""), r.bind(t, this, e), o.needDrawText(n, r) && (this.setTransform(t), o.renderText(this, t, n, r), this.restoreTransform(t))
            },
            getBoundingRect: function () {
                var t = this.style;
                if (this.__dirty && o.normalizeTextStyle(t, !0), !this._rect) {
                    var e = t.text;
                    null != e ? e += "" : e = "";
                    var r = a.getBoundingRect(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);
                    if (r.x += t.x || 0, r.y += t.y || 0, o.getStroke(t.textStroke, t.textLineWidth)) {
                        var n = t.textLineWidth;
                        r.x -= n / 2, r.y -= n / 2, r.width += n, r.height += n
                    }
                    this._rect = r
                }
                return this._rect
            }
        }, i.inherits(s, n), t.exports = s
    }, function (t, e, r) {
        var n = r(20),
            i = [
                ["shadowBlur", 0],
                ["shadowColor", "#000"],
                ["shadowOffsetX", 0],
                ["shadowOffsetY", 0]
            ];
        t.exports = function (t) {
            return n.browser.ie && n.browser.version >= 11 ? function () {
                var e, r = this.__clipPaths,
                    n = this.style;
                if (r)
                    for (var a = 0; a < r.length; a++) {
                        var o = r[a],
                            s = o && o.shape,
                            l = o && o.type;
                        if (s && ("sector" === l && s.startAngle === s.endAngle || "rect" === l && (!s.width || !s.height))) {
                            for (var h = 0; h < i.length; h++) i[h][2] = n[i[h][0]], n[i[h][0]] = i[h][1];
                            e = !0;
                            break
                        }
                    }
                if (t.apply(this, arguments), e)
                    for (var h = 0; h < i.length; h++) n[i[h][0]] = i[h][2]
            } : t
        }
    }, function (t, e, r) {
        var n = r(3),
            i = n.min,
            a = n.max,
            o = n.scale,
            s = n.distance,
            l = n.add;
        t.exports = function (t, e, r, h) {
            var u, c, f, d, p = [],
                g = [],
                v = [],
                m = [];
            if (h) {
                f = [1 / 0, 1 / 0], d = [-(1 / 0), -(1 / 0)];
                for (var x = 0, y = t.length; x < y; x++) i(f, f, t[x]), a(d, d, t[x]);
                i(f, f, h[0]), a(d, d, h[1])
            }
            for (var x = 0, y = t.length; x < y; x++) {
                var _ = t[x];
                if (r) u = t[x ? x - 1 : y - 1], c = t[(x + 1) % y];
                else {
                    if (0 === x || x === y - 1) {
                        p.push(n.clone(t[x]));
                        continue
                    }
                    u = t[x - 1], c = t[x + 1]
                }
                n.sub(g, c, u), o(g, g, e);
                var w = s(_, u),
                    b = s(_, c),
                    S = w + b;
                0 !== S && (w /= S, b /= S), o(v, g, -w), o(m, g, b);
                var T = l([], _, v),
                    M = l([], _, m);
                h && (a(T, T, f), i(T, T, d), a(M, M, f), i(M, M, d)), p.push(T), p.push(M)
            }
            return r && p.push(p.shift()), p
        }
    }, function (t, e, r) {
        function n(t, e, r, n, i, a, o) {
            var s = .5 * (r - t),
                l = .5 * (n - e);
            return (2 * (e - r) + s + l) * o + (-3 * (e - r) - 2 * s - l) * a + s * i + e
        }
        var i = r(3);
        t.exports = function (t, e) {
            for (var r = t.length, a = [], o = 0, s = 1; s < r; s++) o += i.distance(t[s - 1], t[s]);
            var l = o / 2;
            l = l < r ? r : l;
            for (var s = 0; s < l; s++) {
                var h, u, c, f = s / (l - 1) * (e ? r : r - 1),
                    d = Math.floor(f),
                    p = f - d,
                    g = t[d % r];
                e ? (h = t[(d - 1 + r) % r], u = t[(d + 1) % r], c = t[(d + 2) % r]) : (h = t[0 === d ? d : d - 1], u = t[d > r - 2 ? r - 1 : d + 1], c = t[d > r - 3 ? r - 1 : d + 2]);
                var v = p * p,
                    m = p * v;
                a.push([n(h[0], g[0], u[0], c[0], p, v, m), n(h[1], g[1], u[1], c[1], p, v, m)])
            }
            return a
        }
    }, function (t, e, r) {
        var n = r(13),
            i = r(4),
            a = new i,
            o = function () {};
        o.prototype = {
            constructor: o,
            drawRectText: function (t, e) {
                var r = this.style;
                e = r.textRect || e, this.__dirty && n.normalizeTextStyle(r, !0);
                var i = r.text;
                if (null != i && (i += ""), n.needDrawText(i, r)) {
                    t.save();
                    var o = this.transform;
                    r.transformText ? this.setTransform(t) : o && (a.copy(e), a.applyTransform(o), e = a), n.renderText(this, t, i, r, e), t.restore()
                }
            }
        }, t.exports = o
    }, function (t, e, r) {
        t.exports = r(2).extend({
            type: "arc",
            shape: {
                cx: 0,
                cy: 0,
                r: 0,
                startAngle: 0,
                endAngle: 2 * Math.PI,
                clockwise: !0
            },
            style: {
                stroke: "#000",
                fill: null
            },
            buildPath: function (t, e) {
                var r = e.cx,
                    n = e.cy,
                    i = Math.max(e.r, 0),
                    a = e.startAngle,
                    o = e.endAngle,
                    s = e.clockwise,
                    l = Math.cos(a),
                    h = Math.sin(a);
                t.moveTo(l * i + r, h * i + n), t.arc(r, n, i, a, o, !s)
            }
        })
    }, function (t, e, r) {
        "use strict";

        function n(t, e, r) {
            var n = t.cpx2,
                i = t.cpy2;
            return null === n || null === i ? [(r ? c : h)(t.x1, t.cpx1, t.cpx2, t.x2, e), (r ? c : h)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(r ? u : l)(t.x1, t.cpx1, t.x2, e), (r ? u : l)(t.y1, t.cpy1, t.y2, e)]
        }
        var i = r(5),
            a = r(3),
            o = i.quadraticSubdivide,
            s = i.cubicSubdivide,
            l = i.quadraticAt,
            h = i.cubicAt,
            u = i.quadraticDerivativeAt,
            c = i.cubicDerivativeAt,
            f = [];
        t.exports = r(2).extend({
            type: "bezier-curve",
            shape: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                cpx1: 0,
                cpy1: 0,
                percent: 1
            },
            style: {
                stroke: "#000",
                fill: null
            },
            buildPath: function (t, e) {
                var r = e.x1,
                    n = e.y1,
                    i = e.x2,
                    a = e.y2,
                    l = e.cpx1,
                    h = e.cpy1,
                    u = e.cpx2,
                    c = e.cpy2,
                    d = e.percent;
                0 !== d && (t.moveTo(r, n), null == u || null == c ? (d < 1 && (o(r, l, i, d, f), l = f[1], i = f[2], o(n, h, a, d, f), h = f[1], a = f[2]), t.quadraticCurveTo(l, h, i, a)) : (d < 1 && (s(r, l, u, i, d, f), l = f[1], u = f[2], i = f[3], s(n, h, c, a, d, f), h = f[1], c = f[2], a = f[3]), t.bezierCurveTo(l, h, u, c, i, a)))
            },
            pointAt: function (t) {
                return n(this.shape, t, !1)
            },
            tangentAt: function (t) {
                var e = n(this.shape, t, !0);
                return a.normalize(e, e)
            }
        })
    }, function (t, e, r) {
        "use strict";
        t.exports = r(2).extend({
            type: "circle",
            shape: {
                cx: 0,
                cy: 0,
                r: 0
            },
            buildPath: function (t, e, r) {
                r && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
            }
        })
    }, function (t, e, r) {
        t.exports = r(2).extend({
            type: "line",
            shape: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                percent: 1
            },
            style: {
                stroke: "#000",
                fill: null
            },
            buildPath: function (t, e) {
                var r = e.x1,
                    n = e.y1,
                    i = e.x2,
                    a = e.y2,
                    o = e.percent;
                0 !== o && (t.moveTo(r, n), o < 1 && (i = r * (1 - o) + i * o, a = n * (1 - o) + a * o), t.lineTo(i, a))
            },
            pointAt: function (t) {
                var e = this.shape;
                return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
            }
        })
    }, function (t, e, r) {
        var n = r(22);
        t.exports = r(2).extend({
            type: "polygon",
            shape: {
                points: null,
                smooth: !1,
                smoothConstraint: null
            },
            buildPath: function (t, e) {
                n.buildPath(t, e, !0)
            }
        })
    }, function (t, e, r) {
        var n = r(22);
        t.exports = r(2).extend({
            type: "polyline",
            shape: {
                points: null,
                smooth: !1,
                smoothConstraint: null
            },
            style: {
                stroke: "#000",
                fill: null
            },
            buildPath: function (t, e) {
                n.buildPath(t, e, !1)
            }
        })
    }, function (t, e, r) {
        var n = r(23);
        t.exports = r(2).extend({
            type: "rect",
            shape: {
                r: 0,
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            buildPath: function (t, e) {
                var r = e.x,
                    i = e.y,
                    a = e.width,
                    o = e.height;
                e.r ? n.buildPath(t, e) : t.rect(r, i, a, o), t.closePath()
            }
        })
    }, function (t, e, r) {
        t.exports = r(2).extend({
            type: "ring",
            shape: {
                cx: 0,
                cy: 0,
                r: 0,
                r0: 0
            },
            buildPath: function (t, e) {
                var r = e.cx,
                    n = e.cy,
                    i = 2 * Math.PI;
                t.moveTo(r + e.r, n), t.arc(r, n, e.r, 0, i, !1), t.moveTo(r + e.r0, n), t.arc(r, n, e.r0, 0, i, !0)
            }
        })
    }, function (t, e, r) {
        var n = r(2),
            i = r(61);
        t.exports = n.extend({
            type: "sector",
            shape: {
                cx: 0,
                cy: 0,
                r0: 0,
                r: 0,
                startAngle: 0,
                endAngle: 2 * Math.PI,
                clockwise: !0
            },
            brush: i(n.prototype.brush),
            buildPath: function (t, e) {
                var r = e.cx,
                    n = e.cy,
                    i = Math.max(e.r0 || 0, 0),
                    a = Math.max(e.r, 0),
                    o = e.startAngle,
                    s = e.endAngle,
                    l = e.clockwise,
                    h = Math.cos(o),
                    u = Math.sin(o);
                t.moveTo(h * i + r, u * i + n), t.lineTo(h * a + r, u * a + n), t.arc(r, n, a, o, s, !l), t.lineTo(Math.cos(s) * i + r, Math.sin(s) * i + n), 0 !== i && t.arc(r, n, i, s, o, l), t.closePath()
            }
        })
    }, function (t, e, r) {
        "use strict";
        var n = r(41),
            i = r(1),
            a = i.isString,
            o = i.isFunction,
            s = i.isObject,
            l = r(53),
            h = function () {
                this.animators = []
            };
        h.prototype = {
            constructor: h,
            animate: function (t, e) {
                var r, a = !1,
                    o = this,
                    s = this.__zr;
                if (t) {
                    var h = t.split("."),
                        u = o;
                    a = "shape" === h[0];
                    for (var c = 0, f = h.length; c < f; c++) u && (u = u[h[c]]);
                    u && (r = u)
                } else r = o;
                if (!r) return void l('Property "' + t + '" is not existed in element ' + o.id);
                var d = o.animators,
                    p = new n(r, e);
                return p.during(function (t) {
                    o.dirty(a)
                }).done(function () {
                    d.splice(i.indexOf(d, p), 1)
                }), d.push(p), s && s.animation.addAnimator(p), p
            },
            stopAnimation: function (t) {
                for (var e = this.animators, r = e.length, n = 0; n < r; n++) e[n].stop(t);
                return e.length = 0, this
            },
            animateTo: function (t, e, r, n, i, s) {
                function l() {
                    u--, u || i && i()
                }
                a(r) ? (i = n, n = r, r = 0) : o(n) ? (i = n, n = "linear", r = 0) : o(r) ? (i = r, r = 0) : o(e) ? (i = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, r, n, i);
                var h = this.animators.slice(),
                    u = h.length;
                u || i && i();
                for (var c = 0; c < h.length; c++) h[c].done(l).start(n, s)
            },
            _animateToShallow: function (t, e, r, n, a) {
                var o = {},
                    l = 0;
                for (var h in r)
                    if (r.hasOwnProperty(h))
                        if (null != e[h]) s(r[h]) && !i.isArrayLike(r[h]) ? this._animateToShallow(t ? t + "." + h : h, e[h], r[h], n, a) : (o[h] = r[h], l++);
                        else if (null != r[h])
                    if (t) {
                        var u = {};
                        u[t] = {}, u[t][h] = r[h], this.attr(u)
                    } else this.attr(h, r[h]);
                return l > 0 && this.animate(t, !1).when(null == n ? 500 : n, o).delay(a || 0), this
            }
        }, t.exports = h
    }, function (t, e) {
        var r = Array.prototype.slice,
            n = function () {
                this._$handlers = {}
            };
        n.prototype = {
            constructor: n,
            one: function (t, e, r) {
                var n = this._$handlers;
                if (!e || !t) return this;
                n[t] || (n[t] = []);
                for (var i = 0; i < n[t].length; i++)
                    if (n[t][i].h === e) return this;
                return n[t].push({
                    h: e,
                    one: !0,
                    ctx: r || this
                }), this
            },
            on: function (t, e, r) {
                var n = this._$handlers;
                if (!e || !t) return this;
                n[t] || (n[t] = []);
                for (var i = 0; i < n[t].length; i++)
                    if (n[t][i].h === e) return this;
                return n[t].push({
                    h: e,
                    one: !1,
                    ctx: r || this
                }), this
            },
            isSilent: function (t) {
                var e = this._$handlers;
                return e[t] && e[t].length
            },
            off: function (t, e) {
                var r = this._$handlers;
                if (!t) return this._$handlers = {}, this;
                if (e) {
                    if (r[t]) {
                        for (var n = [], i = 0, a = r[t].length; i < a; i++) r[t][i].h != e && n.push(r[t][i]);
                        r[t] = n
                    }
                    r[t] && 0 === r[t].length && delete r[t]
                } else delete r[t];
                return this
            },
            trigger: function (t) {
                if (this._$handlers[t]) {
                    var e = arguments,
                        n = e.length;
                    n > 3 && (e = r.call(e, 1));
                    for (var i = this._$handlers[t], a = i.length, o = 0; o < a;) {
                        switch (n) {
                            case 1:
                                i[o].h.call(i[o].ctx);
                                break;
                            case 2:
                                i[o].h.call(i[o].ctx, e[1]);
                                break;
                            case 3:
                                i[o].h.call(i[o].ctx, e[1], e[2]);
                                break;
                            default:
                                i[o].h.apply(i[o].ctx, e)
                        }
                        i[o].one ? (i.splice(o, 1), a--) : o++
                    }
                }
                return this
            },
            triggerWithContext: function (t) {
                if (this._$handlers[t]) {
                    var e = arguments,
                        n = e.length;
                    n > 4 && (e = r.call(e, 1, e.length - 1));
                    for (var i = e[e.length - 1], a = this._$handlers[t], o = a.length, s = 0; s < o;) {
                        switch (n) {
                            case 1:
                                a[s].h.call(i);
                                break;
                            case 2:
                                a[s].h.call(i, e[1]);
                                break;
                            case 3:
                                a[s].h.call(i, e[1], e[2]);
                                break;
                            default:
                                a[s].h.apply(i, e)
                        }
                        a[s].one ? (a.splice(s, 1), o--) : s++
                    }
                }
                return this
            }
        }, t.exports = n
    }, function (t, e, r) {
        function n(t, e, r, n, i, a, o, s, l, h, p) {
            var m = l * (d / 180),
                x = f(m) * (t - r) / 2 + c(m) * (e - n) / 2,
                y = -1 * c(m) * (t - r) / 2 + f(m) * (e - n) / 2,
                _ = x * x / (o * o) + y * y / (s * s);
            _ > 1 && (o *= u(_), s *= u(_));
            var w = (i === a ? -1 : 1) * u((o * o * (s * s) - o * o * (y * y) - s * s * (x * x)) / (o * o * (y * y) + s * s * (x * x))) || 0,
                b = w * o * y / s,
                S = w * -s * x / o,
                T = (t + r) / 2 + f(m) * b - c(m) * S,
                M = (e + n) / 2 + c(m) * b + f(m) * S,
                P = v([1, 0], [(x - b) / o, (y - S) / s]),
                k = [(x - b) / o, (y - S) / s],
                C = [(-1 * x - b) / o, (-1 * y - S) / s],
                I = v(k, C);
            g(k, C) <= -1 && (I = d), g(k, C) >= 1 && (I = 0), 0 === a && I > 0 && (I -= 2 * d), 1 === a && I < 0 && (I += 2 * d), p.addData(h, T, M, o, s, P, I, m, a)
        }

        function i(t) {
            if (!t) return [];
            var e, r = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
            for (e = 0; e < h.length; e++) r = r.replace(new RegExp(h[e], "g"), "|" + h[e]);
            var i, a = r.split("|"),
                o = 0,
                l = 0,
                u = new s,
                c = s.CMD;
            for (e = 1; e < a.length; e++) {
                var f, d = a[e],
                    p = d.charAt(0),
                    g = 0,
                    v = d.slice(1).replace(/e,-/g, "e-").split(",");
                v.length > 0 && "" === v[0] && v.shift();
                for (var m = 0; m < v.length; m++) v[m] = parseFloat(v[m]);
                for (; g < v.length && !isNaN(v[g]) && !isNaN(v[0]);) {
                    var x, y, _, w, b, S, T, M = o,
                        P = l;
                    switch (p) {
                        case "l":
                            o += v[g++], l += v[g++], f = c.L, u.addData(f, o, l);
                            break;
                        case "L":
                            o = v[g++], l = v[g++], f = c.L, u.addData(f, o, l);
                            break;
                        case "m":
                            o += v[g++], l += v[g++], f = c.M, u.addData(f, o, l), p = "l";
                            break;
                        case "M":
                            o = v[g++], l = v[g++], f = c.M, u.addData(f, o, l), p = "L";
                            break;
                        case "h":
                            o += v[g++], f = c.L, u.addData(f, o, l);
                            break;
                        case "H":
                            o = v[g++], f = c.L, u.addData(f, o, l);
                            break;
                        case "v":
                            l += v[g++], f = c.L, u.addData(f, o, l);
                            break;
                        case "V":
                            l = v[g++], f = c.L, u.addData(f, o, l);
                            break;
                        case "C":
                            f = c.C, u.addData(f, v[g++], v[g++], v[g++], v[g++], v[g++], v[g++]), o = v[g - 2], l = v[g - 1];
                            break;
                        case "c":
                            f = c.C, u.addData(f, v[g++] + o, v[g++] + l, v[g++] + o, v[g++] + l, v[g++] + o, v[g++] + l), o += v[g - 2], l += v[g - 1];
                            break;
                        case "S":
                            x = o, y = l;
                            var k = u.len(),
                                C = u.data;
                            i === c.C && (x += o - C[k - 4], y += l - C[k - 3]), f = c.C, M = v[g++], P = v[g++], o = v[g++], l = v[g++], u.addData(f, x, y, M, P, o, l);
                            break;
                        case "s":
                            x = o, y = l;
                            var k = u.len(),
                                C = u.data;
                            i === c.C && (x += o - C[k - 4], y += l - C[k - 3]), f = c.C, M = o + v[g++], P = l + v[g++], o += v[g++], l += v[g++], u.addData(f, x, y, M, P, o, l);
                            break;
                        case "Q":
                            M = v[g++], P = v[g++], o = v[g++], l = v[g++], f = c.Q, u.addData(f, M, P, o, l);
                            break;
                        case "q":
                            M = v[g++] + o, P = v[g++] + l, o += v[g++], l += v[g++], f = c.Q, u.addData(f, M, P, o, l);
                            break;
                        case "T":
                            x = o, y = l;
                            var k = u.len(),
                                C = u.data;
                            i === c.Q && (x += o - C[k - 4], y += l - C[k - 3]), o = v[g++], l = v[g++], f = c.Q, u.addData(f, x, y, o, l);
                            break;
                        case "t":
                            x = o, y = l;
                            var k = u.len(),
                                C = u.data;
                            i === c.Q && (x += o - C[k - 4], y += l - C[k - 3]), o += v[g++], l += v[g++], f = c.Q, u.addData(f, x, y, o, l);
                            break;
                        case "A":
                            _ = v[g++], w = v[g++], b = v[g++], S = v[g++], T = v[g++], M = o, P = l, o = v[g++], l = v[g++], f = c.A, n(M, P, o, l, S, T, _, w, b, f, u);
                            break;
                        case "a":
                            _ = v[g++], w = v[g++], b = v[g++], S = v[g++], T = v[g++], M = o, P = l, o += v[g++], l += v[g++], f = c.A, n(M, P, o, l, S, T, _, w, b, f, u)
                    }
                }
                "z" !== p && "Z" !== p || (f = c.Z, u.addData(f)), i = f
            }
            return u.toStatic(), u
        }

        function a(t, e) {
            var r = i(t);
            return e = e || {}, e.buildPath = function (t) {
                if (t.setData) {
                    t.setData(r.data);
                    var e = t.getContext();
                    e && t.rebuildPath(e)
                } else {
                    var e = t;
                    r.rebuildPath(e)
                }
            }, e.applyTransform = function (t) {
                l(r, t), this.dirty(!0)
            }, e
        }
        var o = r(2),
            s = r(7),
            l = r(77),
            h = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"],
            u = Math.sqrt,
            c = Math.sin,
            f = Math.cos,
            d = Math.PI,
            p = function (t) {
                return Math.sqrt(t[0] * t[0] + t[1] * t[1])
            },
            g = function (t, e) {
                return (t[0] * e[0] + t[1] * e[1]) / (p(t) * p(e))
            },
            v = function (t, e) {
                return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(g(t, e))
            };
        t.exports = {
            createFromString: function (t, e) {
                return new o(a(t, e))
            },
            extendFromString: function (t, e) {
                return o.extend(a(t, e))
            },
            mergePath: function (t, e) {
                for (var r = [], n = t.length, i = 0; i < n; i++) {
                    var a = t[i];
                    a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), r.push(a.path)
                }
                var s = new o(e);
                return s.createPathProxy(), s.buildPath = function (t) {
                    t.appendPath(r);
                    var e = t.getContext();
                    e && t.rebuildPath(e)
                }, s
            }
        }
    }, function (t, e, r) {
        function n(t, e) {
            var r, n, a, u, c, f, d = t.data,
                p = i.M,
                g = i.C,
                v = i.L,
                m = i.R,
                x = i.A,
                y = i.Q;
            for (a = 0, u = 0; a < d.length;) {
                switch (r = d[a++], u = a, n = 0, r) {
                    case p:
                        n = 1;
                        break;
                    case v:
                        n = 1;
                        break;
                    case g:
                        n = 3;
                        break;
                    case y:
                        n = 2;
                        break;
                    case x:
                        var _ = e[4],
                            w = e[5],
                            b = l(e[0] * e[0] + e[1] * e[1]),
                            S = l(e[2] * e[2] + e[3] * e[3]),
                            T = h(-e[1] / S, e[0] / b);
                        d[a] *= b, d[a++] += _, d[a] *= S, d[a++] += w, d[a++] *= b, d[a++] *= S, d[a++] += T, d[a++] += T, a += 2, u = a;
                        break;
                    case m:
                        f[0] = d[a++], f[1] = d[a++], o(f, f, e), d[u++] = f[0], d[u++] = f[1], f[0] += d[a++], f[1] += d[a++], o(f, f, e), d[u++] = f[0], d[u++] = f[1]
                }
                for (c = 0; c < n; c++) {
                    var f = s[c];
                    f[0] = d[a++], f[1] = d[a++], o(f, f, e), d[u++] = f[0], d[u++] = f[1]
                }
            }
        }
        var i = r(7).CMD,
            a = r(3),
            o = a.applyTransform,
            s = [
                [],
                [],
                []
            ],
            l = Math.sqrt,
            h = Math.atan2;
        t.exports = n
    }])
});