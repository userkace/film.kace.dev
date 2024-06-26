var ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Gn(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function Zi(e) {
	if (e.__esModule) return e;
	var t = e.default;
	if (typeof t == "function") {
		var a = function r() {
			return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
		};
		a.prototype = t.prototype
	} else a = {};
	return Object.defineProperty(a, "__esModule", {
		value: !0
	}), Object.keys(e).forEach(function (r) {
		var n = Object.getOwnPropertyDescriptor(e, r);
		Object.defineProperty(a, r, n.get ? n : {
			enumerable: !0,
			get: function () {
				return e[r]
			}
		})
	}), a
}
var Qn = {
	exports: {}
};

function Ji(e) {
	throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var Jr = {
	exports: {}
};
const es = {},
	ts = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: es
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Kr = Zi(ts);
var Ua;

function ve() {
	return Ua || (Ua = 1, function (e, t) {
		(function (a, r) {
			e.exports = r()
		})(ue, function () {
			var a = a || function (r, n) {
				var i;
				if (typeof window < "u" && window.crypto && (i = window.crypto), typeof self < "u" && self.crypto && (i = self.crypto), typeof globalThis < "u" && globalThis.crypto && (i = globalThis.crypto), !i && typeof window < "u" && window.msCrypto && (i = window.msCrypto), !i && typeof ue < "u" && ue.crypto && (i = ue.crypto), !i && typeof Ji == "function") try {
					i = Kr
				} catch {}
				var s = function () {
						if (i) {
							if (typeof i.getRandomValues == "function") try {
								return i.getRandomValues(new Uint32Array(1))[0]
							} catch {}
							if (typeof i.randomBytes == "function") try {
								return i.randomBytes(4).readInt32LE()
							} catch {}
						}
						throw new Error("Native crypto module could not be used to get secure random number.")
					},
					o = Object.create || function () {
						function E() {}
						return function (m) {
							var A;
							return E.prototype = m, A = new E, E.prototype = null, A
						}
					}(),
					l = {},
					f = l.lib = {},
					u = f.Base = function () {
						return {
							extend: function (E) {
								var m = o(this);
								return E && m.mixIn(E), (!m.hasOwnProperty("init") || this.init === m.init) && (m.init = function () {
									m.$super.init.apply(this, arguments)
								}), m.init.prototype = m, m.$super = this, m
							},
							create: function () {
								var E = this.extend();
								return E.init.apply(E, arguments), E
							},
							init: function () {},
							mixIn: function (E) {
								for (var m in E) E.hasOwnProperty(m) && (this[m] = E[m]);
								E.hasOwnProperty("toString") && (this.toString = E.toString)
							},
							clone: function () {
								return this.init.prototype.extend(this)
							}
						}
					}(),
					c = f.WordArray = u.extend({
						init: function (E, m) {
							E = this.words = E || [], m != n ? this.sigBytes = m : this.sigBytes = E.length * 4
						},
						toString: function (E) {
							return (E || x).stringify(this)
						},
						concat: function (E) {
							var m = this.words,
								A = E.words,
								T = this.sigBytes,
								S = E.sigBytes;
							if (this.clamp(), T % 4)
								for (var N = 0; N < S; N++) {
									var w = A[N >>> 2] >>> 24 - N % 4 * 8 & 255;
									m[T + N >>> 2] |= w << 24 - (T + N) % 4 * 8
								} else
									for (var K = 0; K < S; K += 4) m[T + K >>> 2] = A[K >>> 2];
							return this.sigBytes += S, this
						},
						clamp: function () {
							var E = this.words,
								m = this.sigBytes;
							E[m >>> 2] &= 4294967295 << 32 - m % 4 * 8, E.length = r.ceil(m / 4)
						},
						clone: function () {
							var E = u.clone.call(this);
							return E.words = this.words.slice(0), E
						},
						random: function (E) {
							for (var m = [], A = 0; A < E; A += 4) m.push(s());
							return new c.init(m, E)
						}
					}),
					h = l.enc = {},
					x = h.Hex = {
						stringify: function (E) {
							for (var m = E.words, A = E.sigBytes, T = [], S = 0; S < A; S++) {
								var N = m[S >>> 2] >>> 24 - S % 4 * 8 & 255;
								T.push((N >>> 4).toString(16)), T.push((N & 15).toString(16))
							}
							return T.join("")
						},
						parse: function (E) {
							for (var m = E.length, A = [], T = 0; T < m; T += 2) A[T >>> 3] |= parseInt(E.substr(T, 2), 16) << 24 - T % 8 * 4;
							return new c.init(A, m / 2)
						}
					},
					d = h.Latin1 = {
						stringify: function (E) {
							for (var m = E.words, A = E.sigBytes, T = [], S = 0; S < A; S++) {
								var N = m[S >>> 2] >>> 24 - S % 4 * 8 & 255;
								T.push(String.fromCharCode(N))
							}
							return T.join("")
						},
						parse: function (E) {
							for (var m = E.length, A = [], T = 0; T < m; T++) A[T >>> 2] |= (E.charCodeAt(T) & 255) << 24 - T % 4 * 8;
							return new c.init(A, m)
						}
					},
					g = h.Utf8 = {
						stringify: function (E) {
							try {
								return decodeURIComponent(escape(d.stringify(E)))
							} catch {
								throw new Error("Malformed UTF-8 data")
							}
						},
						parse: function (E) {
							return d.parse(unescape(encodeURIComponent(E)))
						}
					},
					v = f.BufferedBlockAlgorithm = u.extend({
						reset: function () {
							this._data = new c.init, this._nDataBytes = 0
						},
						_append: function (E) {
							typeof E == "string" && (E = g.parse(E)), this._data.concat(E), this._nDataBytes += E.sigBytes
						},
						_process: function (E) {
							var m, A = this._data,
								T = A.words,
								S = A.sigBytes,
								N = this.blockSize,
								w = N * 4,
								K = S / w;
							E ? K = r.ceil(K) : K = r.max((K | 0) - this._minBufferSize, 0);
							var D = K * N,
								F = r.min(D * 4, S);
							if (D) {
								for (var U = 0; U < D; U += N) this._doProcessBlock(T, U);
								m = T.splice(0, D), A.sigBytes -= F
							}
							return new c.init(m, F)
						},
						clone: function () {
							var E = u.clone.call(this);
							return E._data = this._data.clone(), E
						},
						_minBufferSize: 0
					});
				f.Hasher = v.extend({
					cfg: u.extend(),
					init: function (E) {
						this.cfg = this.cfg.extend(E), this.reset()
					},
					reset: function () {
						v.reset.call(this), this._doReset()
					},
					update: function (E) {
						return this._append(E), this._process(), this
					},
					finalize: function (E) {
						E && this._append(E);
						var m = this._doFinalize();
						return m
					},
					blockSize: 16,
					_createHelper: function (E) {
						return function (m, A) {
							return new E.init(A).finalize(m)
						}
					},
					_createHmacHelper: function (E) {
						return function (m, A) {
							return new B.HMAC.init(E, A).finalize(m)
						}
					}
				});
				var B = l.algo = {};
				return l
			}(Math);
			return a
		})
	}(Jr)), Jr.exports
}
var e0 = {
		exports: {}
	},
	Pa;

function Hr() {
	return Pa || (Pa = 1, function (e, t) {
		(function (a, r) {
			e.exports = r(ve())
		})(ue, function (a) {
			return function (r) {
				var n = a,
					i = n.lib,
					s = i.Base,
					o = i.WordArray,
					l = n.x64 = {};
				l.Word = s.extend({
					init: function (f, u) {
						this.high = f, this.low = u
					}
				}), l.WordArray = s.extend({
					init: function (f, u) {
						f = this.words = f || [], u != r ? this.sigBytes = u : this.sigBytes = f.length * 8
					},
					toX32: function () {
						for (var f = this.words, u = f.length, c = [], h = 0; h < u; h++) {
							var x = f[h];
							c.push(x.high), c.push(x.low)
						}
						return o.create(c, this.sigBytes)
					},
					clone: function () {
						for (var f = s.clone.call(this), u = f.words = this.words.slice(0), c = u.length, h = 0; h < c; h++) u[h] = u[h].clone();
						return f
					}
				})
			}(), a
		})
	}(e0)), e0.exports
}
var t0 = {
		exports: {}
	},
	Va;

function rs() {
	return Va || (Va = 1, function (e, t) {
		(function (a, r) {
			e.exports = r(ve())
		})(ue, function (a) {
			return function () {
				if (typeof ArrayBuffer == "function") {
					var r = a,
						n = r.lib,
						i = n.WordArray,
						s = i.init,
						o = i.init = function (l) {
							if (l instanceof ArrayBuffer && (l = new Uint8Array(l)), (l instanceof Int8Array || typeof Uint8ClampedArray < "u" && l instanceof Uint8ClampedArray || l instanceof Int16Array || l instanceof Uint16Array || l instanceof Int32Array || l instanceof Uint32Array || l instanceof Float32Array || l instanceof Float64Array) && (l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength)), l instanceof Uint8Array) {
								for (var f = l.byteLength, u = [], c = 0; c < f; c++) u[c >>> 2] |= l[c] << 24 - c % 4 * 8;
								s.call(this, u, f)
							} else s.apply(this, arguments)
						};
					o.prototype = i
				}
			}(), a.lib.WordArray
		})
	}(t0)), t0.exports
}
var r0 = {
		exports: {}
	},
	Oa;

function as() {
	return Oa || (Oa = 1, function (e, t) {
		(function (a, r) {
			e.exports = r(ve())
		})(ue, function (a) {
			return function () {
				var r = a,
					n = r.lib,
					i = n.WordArray,
					s = r.enc;
				s.Utf16 = s.Utf16BE = {
					stringify: function (l) {
						for (var f = l.words, u = l.sigBytes, c = [], h = 0; h < u; h += 2) {
							var x = f[h >>> 2] >>> 16 - h % 4 * 8 & 65535;
							c.push(String.fromCharCode(x))
						}
						return c.join("")
					},
					parse: function (l) {
						for (var f = l.length, u = [], c = 0; c < f; c++) u[c >>> 1] |= l.charCodeAt(c) << 16 - c % 2 * 16;
						return i.create(u, f * 2)
					}
				}, s.Utf16LE = {
					stringify: function (l) {
						for (var f = l.words, u = l.sigBytes, c = [], h = 0; h < u; h += 2) {
							var x = o(f[h >>> 2] >>> 16 - h % 4 * 8 & 65535);
							c.push(String.fromCharCode(x))
						}
						return c.join("")
					},
					parse: function (l) {
						for (var f = l.length, u = [], c = 0; c < f; c++) u[c >>> 1] |= o(l.charCodeAt(c) << 16 - c % 2 * 16);
						return i.create(u, f * 2)
					}
				};

				function o(l) {
					return l << 8 & 4278255360 | l >>> 8 & 16711935
				}
			}(), a.enc.Utf16
		})
	}(r0)), r0.exports
}
var a0 = {
		exports: {}
	},
	Ka;

function Ht() {
	return Ka || (Ka = 1, function (e, t) {
		(function (a, r) {
			e.exports = r(ve())
		})(ue, function (a) {
			return function () {
				var r = a,
					n = r.lib,
					i = n.WordArray,
					s = r.enc;
				s.Base64 = {
					stringify: function (l) {
						var f = l.words,
							u = l.sigBytes,
							c = this._map;
						l.clamp();
						for (var h = [], x = 0; x < u; x += 3)
							for (var d = f[x >>> 2] >>> 24 - x % 4 * 8 & 255, g = f[x + 1 >>> 2] >>> 24 - (x + 1) % 4 * 8 & 255, v = f[x + 2 >>> 2] >>> 24 - (x + 2) % 4 * 8 & 255, B = d << 16 | g << 8 | v, E = 0; E < 4 && x + E * .75 < u; E++) h.push(c.charAt(B >>> 6 * (3 - E) & 63));
						var m = c.charAt(64);
						if (m)
							for (; h.length % 4;) h.push(m);
						return h.join("")
					},
					parse: function (l) {
						var f = l.length,
							u = this._map,
							c = this._reverseMap;
						if (!c) {
							c = this._reverseMap = [];
							for (var h = 0; h < u.length; h++) c[u.charCodeAt(h)] = h
						}
						var x = u.charAt(64);
						if (x) {
							var d = l.indexOf(x);
							d !== -1 && (f = d)
						}
						return o(l, f, c)
					},
					_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
				};

				function o(l, f, u) {
					for (var c = [], h = 0, x = 0; x < f; x++)
						if (x % 4) {
							var d = u[l.charCodeAt(x - 1)] << x % 4 * 2,
								g = u[l.charCodeAt(x)] >>> 6 - x % 4 * 2,
								v = d | g;
							c[h >>> 2] |= v << 24 - h % 4 * 8, h++
						} return i.create(c, h)
				}
			}(), a.enc.Base64
		})
	}(a0)), a0.exports
}
var n0 = {
		exports: {}
	},
	Ha;

function ns() {
	return Ha || (Ha = 1, function (e, t) {
		(function (a, r) {
			e.exports = r(ve())
		})(ue, function (a) {
			return function () {
				var r = a,
					n = r.lib,
					i = n.WordArray,
					s = r.enc;
				s.Base64url = {
					stringify: function (l, f) {
						f === void 0 && (f = !0);
						var u = l.words,
							c = l.sigBytes,
							h = f ? this._safe_map : this._map;
						l.clamp();
						for (var x = [], d = 0; d < c; d += 3)
							for (var g = u[d >>> 2] >>> 24 - d % 4 * 8 & 255, v = u[d + 1 >>> 2] >>> 24 - (d + 1) % 4 * 8 & 255, B = u[d + 2 >>> 2] >>> 24 - (d + 2) % 4 * 8 & 255, E = g << 16 | v << 8 | B, m = 0; m < 4 && d + m * .75 < c; m++) x.push(h.charAt(E >>> 6 * (3 - m) & 63));
						var A = h.charAt(64);
						if (A)
							for (; x.length % 4;) x.push(A);
						return x.join("")
					},
					parse: function (l, f) {
						f === void 0 && (f = !0);
						var u = l.length,
							c = f ? this._safe_map : this._map,
							h = this._reverseMap;
						if (!h) {
							h = this._reverseMap = [];
							for (var x = 0; x < c.length; x++) h[c.charCodeAt(x)] = x
						}
						var d = c.charAt(64);
						if (d) {
							var g = l.indexOf(d);
							g !== -1 && (u = g)
						}
						return o(l, u, h)
					},
					_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
					_safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
				};

				function o(l, f, u) {
					for (var c = [], h = 0, x = 0; x < f; x++)
						if (x % 4) {
							var d = u[l.charCodeAt(x - 1)] << x % 4 * 2,
								g = u[l.charCodeAt(x)] >>> 6 - x % 4 * 2,
								v = d | g;
							c[h >>> 2] |= v << 24 - h % 4 * 8, h++
						} return i.create(c, h)
				}
			}(), a.enc.Base64url
		})
	}(n0)), n0.exports
}
var i0 = {
		exports: {}
	},
	Ma;

function Mt() {
	return Ma || (Ma = 1, function (e, t) {
		(function (a, r) {
			e.exports = r(ve())
		})(ue, function (a) {
			return function (r) {
				var n = a,
					i = n.lib,
					s = i.WordArray,
					o = i.Hasher,
					l = n.algo,
					f = [];
				(function () {
					for (var g = 0; g < 64; g++) f[g] = r.abs(r.sin(g + 1)) * 4294967296 | 0
				})();
				var u = l.MD5 = o.extend({
					_doReset: function () {
						this._hash = new s.init([1732584193, 4023233417, 2562383102, 271733878])
					},
					_doProcessBlock: function (g, v) {
						for (var B = 0; B < 16; B++) {
							var E = v + B,
								m = g[E];
							g[E] = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360
						}
						var A = this._hash.words,
							T = g[v + 0],
							S = g[v + 1],
							N = g[v + 2],
							w = g[v + 3],
							K = g[v + 4],
							D = g[v + 5],
							F = g[v + 6],
							U = g[v + 7],
							P = g[v + 8],
							Z = g[v + 9],
							W = g[v + 10],
							J = g[v + 11],
							Q = g[v + 12],
							ce = g[v + 13],
							ge = g[v + 14],
							ne = g[v + 15],
							k = A[0],
							O = A[1],
							H = A[2],
							V = A[3];
						k = c(k, O, H, V, T, 7, f[0]), V = c(V, k, O, H, S, 12, f[1]), H = c(H, V, k, O, N, 17, f[2]), O = c(O, H, V, k, w, 22, f[3]), k = c(k, O, H, V, K, 7, f[4]), V = c(V, k, O, H, D, 12, f[5]), H = c(H, V, k, O, F, 17, f[6]), O = c(O, H, V, k, U, 22, f[7]), k = c(k, O, H, V, P, 7, f[8]), V = c(V, k, O, H, Z, 12, f[9]), H = c(H, V, k, O, W, 17, f[10]), O = c(O, H, V, k, J, 22, f[11]), k = c(k, O, H, V, Q, 7, f[12]), V = c(V, k, O, H, ce, 12, f[13]), H = c(H, V, k, O, ge, 17, f[14]), O = c(O, H, V, k, ne, 22, f[15]), k = h(k, O, H, V, S, 5, f[16]), V = h(V, k, O, H, F, 9, f[17]), H = h(H, V, k, O, J, 14, f[18]), O = h(O, H, V, k, T, 20, f[19]), k = h(k, O, H, V, D, 5, f[20]), V = h(V, k, O, H, W, 9, f[21]), H = h(H, V, k, O, ne, 14, f[22]), O = h(O, H, V, k, K, 20, f[23]), k = h(k, O, H, V, Z, 5, f[24]), V = h(V, k, O, H, ge, 9, f[25]), H = h(H, V, k, O, w, 14, f[26]), O = h(O, H, V, k, P, 20, f[27]), k = h(k, O, H, V, ce, 5, f[28]), V = h(V, k, O, H, N, 9, f[29]), H = h(H, V, k, O, U, 14, f[30]), O = h(O, H, V, k, Q, 20, f[31]), k = x(k, O, H, V, D, 4, f[32]), V = x(V, k, O, H, P, 11, f[33]), H = x(H, V, k, O, J, 16, f[34]), O = x(O, H, V, k, ge, 23, f[35]), k = x(k, O, H, V, S, 4, f[36]), V = x(V, k, O, H, K, 11, f[37]), H = x(H, V, k, O, U, 16, f[38]), O = x(O, H, V, k, W, 23, f[39]), k = x(k, O, H, V, ce, 4, f[40]), V = x(V, k, O, H, T, 11, f[41]), H = x(H, V, k, O, w, 16, f[42]), O = x(O, H, V, k, F, 23, f[43]), k = x(k, O, H, V, Z, 4, f[44]), V = x(V, k, O, H, Q, 11, f[45]), H = x(H, V, k, O, ne, 16, f[46]), O = x(O, H, V, k, N, 23, f[47]), k = d(k, O, H, V, T, 6, f[48]), V = d(V, k, O, H, U, 10, f[49]), H = d(H, V, k, O, ge, 15, f[50]), O = d(O, H, V, k, D, 21, f[51]), k = d(k, O, H, V, Q, 6, f[52]), V = d(V, k, O, H, w, 10, f[53]), H = d(H, V, k, O, W, 15, f[54]), O = d(O, H, V, k, S, 21, f[55]), k = d(k, O, H, V, P, 6, f[56]), V = d(V, k, O, H, ne, 10, f[57]), H = d(H, V, k, O, F, 15, f[58]), O = d(O, H, V, k, ce, 21, f[59]), k = d(k, O, H, V, K, 6, f[60]), V = d(V, k, O, H, J, 10, f[61]), H = d(H, V, k, O, N, 15, f[62]), O = d(O, H, V, k, Z, 21, f[63]), A[0] = A[0] + k | 0, A[1] = A[1] + O | 0, A[2] = A[2] + H | 0, A[3] = A[3] + V | 0
					},
					_doFinalize: function () {
						var g = this._data,
							v = g.words,
							B = this._nDataBytes * 8,
							E = g.sigBytes * 8;
						v[E >>> 5] |= 128 << 24 - E % 32;
						var m = r.floor(B / 4294967296),
							A = B;
						v[(E + 64 >>> 9 << 4) + 15] = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360, v[(E + 64 >>> 9 << 4) + 14] = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360, g.sigBytes = (v.length + 1) * 4, this._process();
						for (var T = this._hash, S = T.words, N = 0; N < 4; N++) {
							var w = S[N];
							S[N] = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360
						}
						return T
					},
					clone: function () {
						var g = o.clone.call(this);
						return g._hash = this._hash.clone(), g
					}
				});

				function c(g, v, B, E, m, A, T) {
					var S = g + (v & B | ~v & E) + m + T;
					return (S << A | S >>> 32 - A) + v
				}

				function h(g, v, B, E, m, A, T) {
					var S = g + (v & E | B & ~E) + m + T;
					return (S << A | S >>> 32 - A) + v
				}

				function x(g, v, B, E, m, A, T) {
					var S = g + (v ^ B ^ E) + m + T;
					return (S << A | S >>> 32 - A) + v
				}

				function d(g, v, B, E, m, A, T) {
					var S = g + (B ^ (v | ~E)) + m + T;
					return (S << A | S >>> 32 - A) + v
				}
				n.MD5 = o._createHelper(u), n.HmacMD5 = o._createHmacHelper(u)
			}(Math), a.MD5
		})
	}(i0)), i0.exports
}
var s0 = {
		exports: {}
	},
	qa;

function Wn() {
	return qa || (qa = 1, function (e, t) {
		(function (a, r) {
			e.exports = r(ve())
		})(ue, function (a) {
			return function () {
				var r = a,
					n = r.lib,
					i = n.WordArray,
					s = n.Hasher,
					o = r.algo,
					l = [],
					f = o.SHA1 = s.extend({
						_doReset: function () {
							this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
						},
						_doProcessBlock: function (u, c) {
							for (var h = this._hash.words, x = h[0], d = h[1], g = h[2], v = h[3], B = h[4], E = 0; E < 80; E++) {
								if (E < 16) l[E] = u[c + E] | 0;
								else {
									var m = l[E - 3] ^ l[E - 8] ^ l[E - 14] ^ l[E - 16];
									l[E] = m << 1 | m >>> 31
								}
								var A = (x << 5 | x >>> 27) + B + l[E];
								E < 20 ? A += (d & g | ~d & v) + 1518500249 : E < 40 ? A += (d ^ g ^ v) + 1859775393 : E < 60 ? A += (d & g | d & v | g & v) - 1894007588 : A += (d ^ g ^ v) - 899497514, B = v, v = g, g = d << 30 | d >>> 2, d = x, x = A
							}
							h[0] = h[0] + x | 0, h[1] = h[1] + d | 0, h[2] = h[2] + g | 0, h[3] = h[3] + v | 0, h[4] = h[4] + B | 0
						},
						_doFinalize: function () {
							var u = this._data,
								c = u.words,
								h = this._nDataBytes * 8,
								x = u.sigBytes * 8;
							return c[x >>> 5] |= 128 << 24 - x % 32, c[(x + 64 >>> 9 << 4) + 14] = Math.floor(h / 4294967296), c[(x + 64 >>> 9 << 4) + 15] = h, u.sigBytes = c.length * 4, this._process(), this._hash
						},
						clone: function () {
							var u = s.clone.call(this);
							return u._hash = this._hash.clone(), u
						}
					});
				r.SHA1 = s._createHelper(f), r.HmacSHA1 = s._createHmacHelper(f)
			}(), a.SHA1
		})
	}(s0)), s0.exports
}
var o0 = {
		exports: {}
	},
	za;

function na() {
	return za || (za = 1, function (e, t) {
		(function (a, r) {
			e.exports = r(ve())
		})(ue, function (a) {
			return function (r) {
				var n = a,
					i = n.lib,
					s = i.WordArray,
					o = i.Hasher,
					l = n.algo,
					f = [],
					u = [];
				(function () {
					function x(B) {
						for (var E = r.sqrt(B), m = 2; m <= E; m++)
							if (!(B % m)) return !1;
						return !0
					}

					function d(B) {
						return (B - (B | 0)) * 4294967296 | 0
					}
					for (var g = 2, v = 0; v < 64;) x(g) && (v < 8 && (f[v] = d(r.pow(g, 1 / 2))), u[v] = d(r.pow(g, 1 / 3)), v++), g++
				})();
				var c = [],
					h = l.SHA256 = o.extend({
						_doReset: function () {
							this._hash = new s.init(f.slice(0))
						},
						_doProcessBlock: function (x, d) {
							for (var g = this._hash.words, v = g[0], B = g[1], E = g[2], m = g[3], A = g[4], T = g[5], S = g[6], N = g[7], w = 0; w < 64; w++) {
								if (w < 16) c[w] = x[d + w] | 0;
								else {
									var K = c[w - 15],
										D = (K << 25 | K >>> 7) ^ (K << 14 | K >>> 18) ^ K >>> 3,
										F = c[w - 2],
										U = (F << 15 | F >>> 17) ^ (F << 13 | F >>> 19) ^ F >>> 10;
									c[w] = D + c[w - 7] + U + c[w - 16]
								}
								var P = A & T ^ ~A & S,
									Z = v & B ^ v & E ^ B & E,
									W = (v << 30 | v >>> 2) ^ (v << 19 | v >>> 13) ^ (v << 10 | v >>> 22),
									J = (A << 26 | A >>> 6) ^ (A << 21 | A >>> 11) ^ (A << 7 | A >>> 25),
									Q = N + J + P + u[w] + c[w],
									ce = W + Z;
								N = S, S = T, T = A, A = m + Q | 0, m = E, E = B, B = v, v = Q + ce | 0
							}
							g[0] = g[0] + v | 0, g[1] = g[1] + B | 0, g[2] = g[2] + E | 0, g[3] = g[3] + m | 0, g[4] = g[4] + A | 0, g[5] = g[5] + T | 0, g[6] = g[6] + S | 0, g[7] = g[7] + N | 0
						},
						_doFinalize: function () {
							var x = this._data,
								d = x.words,
								g = this._nDataBytes * 8,
								v = x.sigBytes * 8;
							return d[v >>> 5] |= 128 << 24 - v % 32, d[(v + 64 >>> 9 << 4) + 14] = r.floor(g / 4294967296), d[(v + 64 >>> 9 << 4) + 15] = g, x.sigBytes = d.length * 4, this._process(), this._hash
						},
						clone: function () {
							var x = o.clone.call(this);
							return x._hash = this._hash.clone(), x
						}
					});
				n.SHA256 = o._createHelper(h), n.HmacSHA256 = o._createHmacHelper(h)
			}(Math), a.SHA256
		})
	}(o0)), o0.exports
}
var f0 = {
		exports: {}
	},
	Ga;

function is() {
	return Ga || (Ga = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), na())
		})(ue, function (a) {
			return function () {
				var r = a,
					n = r.lib,
					i = n.WordArray,
					s = r.algo,
					o = s.SHA256,
					l = s.SHA224 = o.extend({
						_doReset: function () {
							this._hash = new i.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
						},
						_doFinalize: function () {
							var f = o._doFinalize.call(this);
							return f.sigBytes -= 4, f
						}
					});
				r.SHA224 = o._createHelper(l), r.HmacSHA224 = o._createHmacHelper(l)
			}(), a.SHA224
		})
	}(f0)), f0.exports
}
var u0 = {
		exports: {}
	},
	Qa;

function Xn() {
	return Qa || (Qa = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Hr())
		})(ue, function (a) {
			return function () {
				var r = a,
					n = r.lib,
					i = n.Hasher,
					s = r.x64,
					o = s.Word,
					l = s.WordArray,
					f = r.algo;

				function u() {
					return o.create.apply(o, arguments)
				}
				var c = [u(1116352408, 3609767458), u(1899447441, 602891725), u(3049323471, 3964484399), u(3921009573, 2173295548), u(961987163, 4081628472), u(1508970993, 3053834265), u(2453635748, 2937671579), u(2870763221, 3664609560), u(3624381080, 2734883394), u(310598401, 1164996542), u(607225278, 1323610764), u(1426881987, 3590304994), u(1925078388, 4068182383), u(2162078206, 991336113), u(2614888103, 633803317), u(3248222580, 3479774868), u(3835390401, 2666613458), u(4022224774, 944711139), u(264347078, 2341262773), u(604807628, 2007800933), u(770255983, 1495990901), u(1249150122, 1856431235), u(1555081692, 3175218132), u(1996064986, 2198950837), u(2554220882, 3999719339), u(2821834349, 766784016), u(2952996808, 2566594879), u(3210313671, 3203337956), u(3336571891, 1034457026), u(3584528711, 2466948901), u(113926993, 3758326383), u(338241895, 168717936), u(666307205, 1188179964), u(773529912, 1546045734), u(1294757372, 1522805485), u(1396182291, 2643833823), u(1695183700, 2343527390), u(1986661051, 1014477480), u(2177026350, 1206759142), u(2456956037, 344077627), u(2730485921, 1290863460), u(2820302411, 3158454273), u(3259730800, 3505952657), u(3345764771, 106217008), u(3516065817, 3606008344), u(3600352804, 1432725776), u(4094571909, 1467031594), u(275423344, 851169720), u(430227734, 3100823752), u(506948616, 1363258195), u(659060556, 3750685593), u(883997877, 3785050280), u(958139571, 3318307427), u(1322822218, 3812723403), u(1537002063, 2003034995), u(1747873779, 3602036899), u(1955562222, 1575990012), u(2024104815, 1125592928), u(2227730452, 2716904306), u(2361852424, 442776044), u(2428436474, 593698344), u(2756734187, 3733110249), u(3204031479, 2999351573), u(3329325298, 3815920427), u(3391569614, 3928383900), u(3515267271, 566280711), u(3940187606, 3454069534), u(4118630271, 4000239992), u(116418474, 1914138554), u(174292421, 2731055270), u(289380356, 3203993006), u(460393269, 320620315), u(685471733, 587496836), u(852142971, 1086792851), u(1017036298, 365543100), u(1126000580, 2618297676), u(1288033470, 3409855158), u(1501505948, 4234509866), u(1607167915, 987167468), u(1816402316, 1246189591)],
					h = [];
				(function () {
					for (var d = 0; d < 80; d++) h[d] = u()
				})();
				var x = f.SHA512 = i.extend({
					_doReset: function () {
						this._hash = new l.init([new o.init(1779033703, 4089235720), new o.init(3144134277, 2227873595), new o.init(1013904242, 4271175723), new o.init(2773480762, 1595750129), new o.init(1359893119, 2917565137), new o.init(2600822924, 725511199), new o.init(528734635, 4215389547), new o.init(1541459225, 327033209)])
					},
					_doProcessBlock: function (d, g) {
						for (var v = this._hash.words, B = v[0], E = v[1], m = v[2], A = v[3], T = v[4], S = v[5], N = v[6], w = v[7], K = B.high, D = B.low, F = E.high, U = E.low, P = m.high, Z = m.low, W = A.high, J = A.low, Q = T.high, ce = T.low, ge = S.high, ne = S.low, k = N.high, O = N.low, H = w.high, V = w.low, oe = K, ie = D, me = F, ee = U, Re = P, Fe = Z, Ue = W, we = J, Se = Q, Be = ce, Le = ge, ir = ne, mr = k, sr = O, Zr = H, or = V, ot = 0; ot < 80; ot++) {
							var tt, Bt, Br = h[ot];
							if (ot < 16) Bt = Br.high = d[g + ot * 2] | 0, tt = Br.low = d[g + ot * 2 + 1] | 0;
							else {
								var Sa = h[ot - 15],
									Gt = Sa.high,
									fr = Sa.low,
									Oi = (Gt >>> 1 | fr << 31) ^ (Gt >>> 8 | fr << 24) ^ Gt >>> 7,
									Ta = (fr >>> 1 | Gt << 31) ^ (fr >>> 8 | Gt << 24) ^ (fr >>> 7 | Gt << 25),
									ba = h[ot - 2],
									Qt = ba.high,
									ur = ba.low,
									Ki = (Qt >>> 19 | ur << 13) ^ (Qt << 3 | ur >>> 29) ^ Qt >>> 6,
									Ia = (ur >>> 19 | Qt << 13) ^ (ur << 3 | Qt >>> 29) ^ (ur >>> 6 | Qt << 26),
									_a = h[ot - 7],
									Hi = _a.high,
									Mi = _a.low,
									Da = h[ot - 16],
									qi = Da.high,
									Na = Da.low;
								tt = Ta + Mi, Bt = Oi + Hi + (tt >>> 0 < Ta >>> 0 ? 1 : 0), tt = tt + Ia, Bt = Bt + Ki + (tt >>> 0 < Ia >>> 0 ? 1 : 0), tt = tt + Na, Bt = Bt + qi + (tt >>> 0 < Na >>> 0 ? 1 : 0), Br.high = Bt, Br.low = tt
							}
							var zi = Se & Le ^ ~Se & mr,
								Fa = Be & ir ^ ~Be & sr,
								Gi = oe & me ^ oe & Re ^ me & Re,
								Qi = ie & ee ^ ie & Fe ^ ee & Fe,
								Wi = (oe >>> 28 | ie << 4) ^ (oe << 30 | ie >>> 2) ^ (oe << 25 | ie >>> 7),
								Ra = (ie >>> 28 | oe << 4) ^ (ie << 30 | oe >>> 2) ^ (ie << 25 | oe >>> 7),
								Xi = (Se >>> 14 | Be << 18) ^ (Se >>> 18 | Be << 14) ^ (Se << 23 | Be >>> 9),
								Yi = (Be >>> 14 | Se << 18) ^ (Be >>> 18 | Se << 14) ^ (Be << 23 | Se >>> 9),
								wa = c[ot],
								$i = wa.high,
								ka = wa.low,
								Ze = or + Yi,
								At = Zr + Xi + (Ze >>> 0 < or >>> 0 ? 1 : 0),
								Ze = Ze + Fa,
								At = At + zi + (Ze >>> 0 < Fa >>> 0 ? 1 : 0),
								Ze = Ze + ka,
								At = At + $i + (Ze >>> 0 < ka >>> 0 ? 1 : 0),
								Ze = Ze + tt,
								At = At + Bt + (Ze >>> 0 < tt >>> 0 ? 1 : 0),
								La = Ra + Qi,
								ji = Wi + Gi + (La >>> 0 < Ra >>> 0 ? 1 : 0);
							Zr = mr, or = sr, mr = Le, sr = ir, Le = Se, ir = Be, Be = we + Ze | 0, Se = Ue + At + (Be >>> 0 < we >>> 0 ? 1 : 0) | 0, Ue = Re, we = Fe, Re = me, Fe = ee, me = oe, ee = ie, ie = Ze + La | 0, oe = At + ji + (ie >>> 0 < Ze >>> 0 ? 1 : 0) | 0
						}
						D = B.low = D + ie, B.high = K + oe + (D >>> 0 < ie >>> 0 ? 1 : 0), U = E.low = U + ee, E.high = F + me + (U >>> 0 < ee >>> 0 ? 1 : 0), Z = m.low = Z + Fe, m.high = P + Re + (Z >>> 0 < Fe >>> 0 ? 1 : 0), J = A.low = J + we, A.high = W + Ue + (J >>> 0 < we >>> 0 ? 1 : 0), ce = T.low = ce + Be, T.high = Q + Se + (ce >>> 0 < Be >>> 0 ? 1 : 0), ne = S.low = ne + ir, S.high = ge + Le + (ne >>> 0 < ir >>> 0 ? 1 : 0), O = N.low = O + sr, N.high = k + mr + (O >>> 0 < sr >>> 0 ? 1 : 0), V = w.low = V + or, w.high = H + Zr + (V >>> 0 < or >>> 0 ? 1 : 0)
					},
					_doFinalize: function () {
						var d = this._data,
							g = d.words,
							v = this._nDataBytes * 8,
							B = d.sigBytes * 8;
						g[B >>> 5] |= 128 << 24 - B % 32, g[(B + 128 >>> 10 << 5) + 30] = Math.floor(v / 4294967296), g[(B + 128 >>> 10 << 5) + 31] = v, d.sigBytes = g.length * 4, this._process();
						var E = this._hash.toX32();
						return E
					},
					clone: function () {
						var d = i.clone.call(this);
						return d._hash = this._hash.clone(), d
					},
					blockSize: 1024 / 32
				});
				r.SHA512 = i._createHelper(x), r.HmacSHA512 = i._createHmacHelper(x)
			}(), a.SHA512
		})
	}(u0)), u0.exports
}
var l0 = {
		exports: {}
	},
	Wa;

function ss() {
	return Wa || (Wa = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Hr(), Xn())
		})(ue, function (a) {
			return function () {
				var r = a,
					n = r.x64,
					i = n.Word,
					s = n.WordArray,
					o = r.algo,
					l = o.SHA512,
					f = o.SHA384 = l.extend({
						_doReset: function () {
							this._hash = new s.init([new i.init(3418070365, 3238371032), new i.init(1654270250, 914150663), new i.init(2438529370, 812702999), new i.init(355462360, 4144912697), new i.init(1731405415, 4290775857), new i.init(2394180231, 1750603025), new i.init(3675008525, 1694076839), new i.init(1203062813, 3204075428)])
						},
						_doFinalize: function () {
							var u = l._doFinalize.call(this);
							return u.sigBytes -= 16, u
						}
					});
				r.SHA384 = l._createHelper(f), r.HmacSHA384 = l._createHmacHelper(f)
			}(), a.SHA384
		})
	}(l0)), l0.exports
}
var c0 = {
		exports: {}
	},
	Xa;

function os() {
	return Xa || (Xa = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Hr())
		})(ue, function (a) {
			return function (r) {
				var n = a,
					i = n.lib,
					s = i.WordArray,
					o = i.Hasher,
					l = n.x64,
					f = l.Word,
					u = n.algo,
					c = [],
					h = [],
					x = [];
				(function () {
					for (var v = 1, B = 0, E = 0; E < 24; E++) {
						c[v + 5 * B] = (E + 1) * (E + 2) / 2 % 64;
						var m = B % 5,
							A = (2 * v + 3 * B) % 5;
						v = m, B = A
					}
					for (var v = 0; v < 5; v++)
						for (var B = 0; B < 5; B++) h[v + 5 * B] = B + (2 * v + 3 * B) % 5 * 5;
					for (var T = 1, S = 0; S < 24; S++) {
						for (var N = 0, w = 0, K = 0; K < 7; K++) {
							if (T & 1) {
								var D = (1 << K) - 1;
								D < 32 ? w ^= 1 << D : N ^= 1 << D - 32
							}
							T & 128 ? T = T << 1 ^ 113 : T <<= 1
						}
						x[S] = f.create(N, w)
					}
				})();
				var d = [];
				(function () {
					for (var v = 0; v < 25; v++) d[v] = f.create()
				})();
				var g = u.SHA3 = o.extend({
					cfg: o.cfg.extend({
						outputLength: 512
					}),
					_doReset: function () {
						for (var v = this._state = [], B = 0; B < 25; B++) v[B] = new f.init;
						this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
					},
					_doProcessBlock: function (v, B) {
						for (var E = this._state, m = this.blockSize / 2, A = 0; A < m; A++) {
							var T = v[B + 2 * A],
								S = v[B + 2 * A + 1];
							T = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360, S = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360;
							var N = E[A];
							N.high ^= S, N.low ^= T
						}
						for (var w = 0; w < 24; w++) {
							for (var K = 0; K < 5; K++) {
								for (var D = 0, F = 0, U = 0; U < 5; U++) {
									var N = E[K + 5 * U];
									D ^= N.high, F ^= N.low
								}
								var P = d[K];
								P.high = D, P.low = F
							}
							for (var K = 0; K < 5; K++)
								for (var Z = d[(K + 4) % 5], W = d[(K + 1) % 5], J = W.high, Q = W.low, D = Z.high ^ (J << 1 | Q >>> 31), F = Z.low ^ (Q << 1 | J >>> 31), U = 0; U < 5; U++) {
									var N = E[K + 5 * U];
									N.high ^= D, N.low ^= F
								}
							for (var ce = 1; ce < 25; ce++) {
								var D, F, N = E[ce],
									ge = N.high,
									ne = N.low,
									k = c[ce];
								k < 32 ? (D = ge << k | ne >>> 32 - k, F = ne << k | ge >>> 32 - k) : (D = ne << k - 32 | ge >>> 64 - k, F = ge << k - 32 | ne >>> 64 - k);
								var O = d[h[ce]];
								O.high = D, O.low = F
							}
							var H = d[0],
								V = E[0];
							H.high = V.high, H.low = V.low;
							for (var K = 0; K < 5; K++)
								for (var U = 0; U < 5; U++) {
									var ce = K + 5 * U,
										N = E[ce],
										oe = d[ce],
										ie = d[(K + 1) % 5 + 5 * U],
										me = d[(K + 2) % 5 + 5 * U];
									N.high = oe.high ^ ~ie.high & me.high, N.low = oe.low ^ ~ie.low & me.low
								}
							var N = E[0],
								ee = x[w];
							N.high ^= ee.high, N.low ^= ee.low
						}
					},
					_doFinalize: function () {
						var v = this._data,
							B = v.words;
						this._nDataBytes * 8;
						var E = v.sigBytes * 8,
							m = this.blockSize * 32;
						B[E >>> 5] |= 1 << 24 - E % 32, B[(r.ceil((E + 1) / m) * m >>> 5) - 1] |= 128, v.sigBytes = B.length * 4, this._process();
						for (var A = this._state, T = this.cfg.outputLength / 8, S = T / 8, N = [], w = 0; w < S; w++) {
							var K = A[w],
								D = K.high,
								F = K.low;
							D = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360, F = (F << 8 | F >>> 24) & 16711935 | (F << 24 | F >>> 8) & 4278255360, N.push(F), N.push(D)
						}
						return new s.init(N, T)
					},
					clone: function () {
						for (var v = o.clone.call(this), B = v._state = this._state.slice(0), E = 0; E < 25; E++) B[E] = B[E].clone();
						return v
					}
				});
				n.SHA3 = o._createHelper(g), n.HmacSHA3 = o._createHmacHelper(g)
			}(Math), a.SHA3
		})
	}(c0)), c0.exports
}
var h0 = {
		exports: {}
	},
	Ya;

function fs() {
	return Ya || (Ya = 1, function (e, t) {
		(function (a, r) {
			e.exports = r(ve())
		})(ue, function (a) {
			/** @preserve
						(c) 2012 by Cédric Mesnil. All rights reserved.

						Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

						    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
						    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

						THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
						*/
			return function (r) {
				var n = a,
					i = n.lib,
					s = i.WordArray,
					o = i.Hasher,
					l = n.algo,
					f = s.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
					u = s.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
					c = s.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
					h = s.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
					x = s.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
					d = s.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
					g = l.RIPEMD160 = o.extend({
						_doReset: function () {
							this._hash = s.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
						},
						_doProcessBlock: function (S, N) {
							for (var w = 0; w < 16; w++) {
								var K = N + w,
									D = S[K];
								S[K] = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360
							}
							var F = this._hash.words,
								U = x.words,
								P = d.words,
								Z = f.words,
								W = u.words,
								J = c.words,
								Q = h.words,
								ce, ge, ne, k, O, H, V, oe, ie, me;
							H = ce = F[0], V = ge = F[1], oe = ne = F[2], ie = k = F[3], me = O = F[4];
							for (var ee, w = 0; w < 80; w += 1) ee = ce + S[N + Z[w]] | 0, w < 16 ? ee += v(ge, ne, k) + U[0] : w < 32 ? ee += B(ge, ne, k) + U[1] : w < 48 ? ee += E(ge, ne, k) + U[2] : w < 64 ? ee += m(ge, ne, k) + U[3] : ee += A(ge, ne, k) + U[4], ee = ee | 0, ee = T(ee, J[w]), ee = ee + O | 0, ce = O, O = k, k = T(ne, 10), ne = ge, ge = ee, ee = H + S[N + W[w]] | 0, w < 16 ? ee += A(V, oe, ie) + P[0] : w < 32 ? ee += m(V, oe, ie) + P[1] : w < 48 ? ee += E(V, oe, ie) + P[2] : w < 64 ? ee += B(V, oe, ie) + P[3] : ee += v(V, oe, ie) + P[4], ee = ee | 0, ee = T(ee, Q[w]), ee = ee + me | 0, H = me, me = ie, ie = T(oe, 10), oe = V, V = ee;
							ee = F[1] + ne + ie | 0, F[1] = F[2] + k + me | 0, F[2] = F[3] + O + H | 0, F[3] = F[4] + ce + V | 0, F[4] = F[0] + ge + oe | 0, F[0] = ee
						},
						_doFinalize: function () {
							var S = this._data,
								N = S.words,
								w = this._nDataBytes * 8,
								K = S.sigBytes * 8;
							N[K >>> 5] |= 128 << 24 - K % 32, N[(K + 64 >>> 9 << 4) + 14] = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, S.sigBytes = (N.length + 1) * 4, this._process();
							for (var D = this._hash, F = D.words, U = 0; U < 5; U++) {
								var P = F[U];
								F[U] = (P << 8 | P >>> 24) & 16711935 | (P << 24 | P >>> 8) & 4278255360
							}
							return D
						},
						clone: function () {
							var S = o.clone.call(this);
							return S._hash = this._hash.clone(), S
						}
					});

				function v(S, N, w) {
					return S ^ N ^ w
				}

				function B(S, N, w) {
					return S & N | ~S & w
				}

				function E(S, N, w) {
					return (S | ~N) ^ w
				}

				function m(S, N, w) {
					return S & w | N & ~w
				}

				function A(S, N, w) {
					return S ^ (N | ~w)
				}

				function T(S, N) {
					return S << N | S >>> 32 - N
				}
				n.RIPEMD160 = o._createHelper(g), n.HmacRIPEMD160 = o._createHmacHelper(g)
			}(), a.RIPEMD160
		})
	}(h0)), h0.exports
}
var d0 = {
		exports: {}
	},
	$a;

function ia() {
	return $a || ($a = 1, function (e, t) {
		(function (a, r) {
			e.exports = r(ve())
		})(ue, function (a) {
			(function () {
				var r = a,
					n = r.lib,
					i = n.Base,
					s = r.enc,
					o = s.Utf8,
					l = r.algo;
				l.HMAC = i.extend({
					init: function (f, u) {
						f = this._hasher = new f.init, typeof u == "string" && (u = o.parse(u));
						var c = f.blockSize,
							h = c * 4;
						u.sigBytes > h && (u = f.finalize(u)), u.clamp();
						for (var x = this._oKey = u.clone(), d = this._iKey = u.clone(), g = x.words, v = d.words, B = 0; B < c; B++) g[B] ^= 1549556828, v[B] ^= 909522486;
						x.sigBytes = d.sigBytes = h, this.reset()
					},
					reset: function () {
						var f = this._hasher;
						f.reset(), f.update(this._iKey)
					},
					update: function (f) {
						return this._hasher.update(f), this
					},
					finalize: function (f) {
						var u = this._hasher,
							c = u.finalize(f);
						u.reset();
						var h = u.finalize(this._oKey.clone().concat(c));
						return h
					}
				})
			})()
		})
	}(d0)), d0.exports
}
var x0 = {
		exports: {}
	},
	ja;

function us() {
	return ja || (ja = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), na(), ia())
		})(ue, function (a) {
			return function () {
				var r = a,
					n = r.lib,
					i = n.Base,
					s = n.WordArray,
					o = r.algo,
					l = o.SHA256,
					f = o.HMAC,
					u = o.PBKDF2 = i.extend({
						cfg: i.extend({
							keySize: 128 / 32,
							hasher: l,
							iterations: 25e4
						}),
						init: function (c) {
							this.cfg = this.cfg.extend(c)
						},
						compute: function (c, h) {
							for (var x = this.cfg, d = f.create(x.hasher, c), g = s.create(), v = s.create([1]), B = g.words, E = v.words, m = x.keySize, A = x.iterations; B.length < m;) {
								var T = d.update(h).finalize(v);
								d.reset();
								for (var S = T.words, N = S.length, w = T, K = 1; K < A; K++) {
									w = d.finalize(w), d.reset();
									for (var D = w.words, F = 0; F < N; F++) S[F] ^= D[F]
								}
								g.concat(T), E[0]++
							}
							return g.sigBytes = m * 4, g
						}
					});
				r.PBKDF2 = function (c, h, x) {
					return u.create(x).compute(c, h)
				}
			}(), a.PBKDF2
		})
	}(x0)), x0.exports
}
var p0 = {
		exports: {}
	},
	Za;

function kt() {
	return Za || (Za = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Wn(), ia())
		})(ue, function (a) {
			return function () {
				var r = a,
					n = r.lib,
					i = n.Base,
					s = n.WordArray,
					o = r.algo,
					l = o.MD5,
					f = o.EvpKDF = i.extend({
						cfg: i.extend({
							keySize: 128 / 32,
							hasher: l,
							iterations: 1
						}),
						init: function (u) {
							this.cfg = this.cfg.extend(u)
						},
						compute: function (u, c) {
							for (var h, x = this.cfg, d = x.hasher.create(), g = s.create(), v = g.words, B = x.keySize, E = x.iterations; v.length < B;) {
								h && d.update(h), h = d.update(u).finalize(c), d.reset();
								for (var m = 1; m < E; m++) h = d.finalize(h), d.reset();
								g.concat(h)
							}
							return g.sigBytes = B * 4, g
						}
					});
				r.EvpKDF = function (u, c, h) {
					return f.create(h).compute(u, c)
				}
			}(), a.EvpKDF
		})
	}(p0)), p0.exports
}
var v0 = {
		exports: {}
	},
	Ja;

function Me() {
	return Ja || (Ja = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), kt())
		})(ue, function (a) {
			a.lib.Cipher || function (r) {
				var n = a,
					i = n.lib,
					s = i.Base,
					o = i.WordArray,
					l = i.BufferedBlockAlgorithm,
					f = n.enc;
				f.Utf8;
				var u = f.Base64,
					c = n.algo,
					h = c.EvpKDF,
					x = i.Cipher = l.extend({
						cfg: s.extend(),
						createEncryptor: function (D, F) {
							return this.create(this._ENC_XFORM_MODE, D, F)
						},
						createDecryptor: function (D, F) {
							return this.create(this._DEC_XFORM_MODE, D, F)
						},
						init: function (D, F, U) {
							this.cfg = this.cfg.extend(U), this._xformMode = D, this._key = F, this.reset()
						},
						reset: function () {
							l.reset.call(this), this._doReset()
						},
						process: function (D) {
							return this._append(D), this._process()
						},
						finalize: function (D) {
							D && this._append(D);
							var F = this._doFinalize();
							return F
						},
						keySize: 128 / 32,
						ivSize: 128 / 32,
						_ENC_XFORM_MODE: 1,
						_DEC_XFORM_MODE: 2,
						_createHelper: function () {
							function D(F) {
								return typeof F == "string" ? K : S
							}
							return function (F) {
								return {
									encrypt: function (U, P, Z) {
										return D(P).encrypt(F, U, P, Z)
									},
									decrypt: function (U, P, Z) {
										return D(P).decrypt(F, U, P, Z)
									}
								}
							}
						}()
					});
				i.StreamCipher = x.extend({
					_doFinalize: function () {
						var D = this._process(!0);
						return D
					},
					blockSize: 1
				});
				var d = n.mode = {},
					g = i.BlockCipherMode = s.extend({
						createEncryptor: function (D, F) {
							return this.Encryptor.create(D, F)
						},
						createDecryptor: function (D, F) {
							return this.Decryptor.create(D, F)
						},
						init: function (D, F) {
							this._cipher = D, this._iv = F
						}
					}),
					v = d.CBC = function () {
						var D = g.extend();
						D.Encryptor = D.extend({
							processBlock: function (U, P) {
								var Z = this._cipher,
									W = Z.blockSize;
								F.call(this, U, P, W), Z.encryptBlock(U, P), this._prevBlock = U.slice(P, P + W)
							}
						}), D.Decryptor = D.extend({
							processBlock: function (U, P) {
								var Z = this._cipher,
									W = Z.blockSize,
									J = U.slice(P, P + W);
								Z.decryptBlock(U, P), F.call(this, U, P, W), this._prevBlock = J
							}
						});

						function F(U, P, Z) {
							var W, J = this._iv;
							J ? (W = J, this._iv = r) : W = this._prevBlock;
							for (var Q = 0; Q < Z; Q++) U[P + Q] ^= W[Q]
						}
						return D
					}(),
					B = n.pad = {},
					E = B.Pkcs7 = {
						pad: function (D, F) {
							for (var U = F * 4, P = U - D.sigBytes % U, Z = P << 24 | P << 16 | P << 8 | P, W = [], J = 0; J < P; J += 4) W.push(Z);
							var Q = o.create(W, P);
							D.concat(Q)
						},
						unpad: function (D) {
							var F = D.words[D.sigBytes - 1 >>> 2] & 255;
							D.sigBytes -= F
						}
					};
				i.BlockCipher = x.extend({
					cfg: x.cfg.extend({
						mode: v,
						padding: E
					}),
					reset: function () {
						var D;
						x.reset.call(this);
						var F = this.cfg,
							U = F.iv,
							P = F.mode;
						this._xformMode == this._ENC_XFORM_MODE ? D = P.createEncryptor : (D = P.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == D ? this._mode.init(this, U && U.words) : (this._mode = D.call(P, this, U && U.words), this._mode.__creator = D)
					},
					_doProcessBlock: function (D, F) {
						this._mode.processBlock(D, F)
					},
					_doFinalize: function () {
						var D, F = this.cfg.padding;
						return this._xformMode == this._ENC_XFORM_MODE ? (F.pad(this._data, this.blockSize), D = this._process(!0)) : (D = this._process(!0), F.unpad(D)), D
					},
					blockSize: 128 / 32
				});
				var m = i.CipherParams = s.extend({
						init: function (D) {
							this.mixIn(D)
						},
						toString: function (D) {
							return (D || this.formatter).stringify(this)
						}
					}),
					A = n.format = {},
					T = A.OpenSSL = {
						stringify: function (D) {
							var F, U = D.ciphertext,
								P = D.salt;
							return P ? F = o.create([1398893684, 1701076831]).concat(P).concat(U) : F = U, F.toString(u)
						},
						parse: function (D) {
							var F, U = u.parse(D),
								P = U.words;
							return P[0] == 1398893684 && P[1] == 1701076831 && (F = o.create(P.slice(2, 4)), P.splice(0, 4), U.sigBytes -= 16), m.create({
								ciphertext: U,
								salt: F
							})
						}
					},
					S = i.SerializableCipher = s.extend({
						cfg: s.extend({
							format: T
						}),
						encrypt: function (D, F, U, P) {
							P = this.cfg.extend(P);
							var Z = D.createEncryptor(U, P),
								W = Z.finalize(F),
								J = Z.cfg;
							return m.create({
								ciphertext: W,
								key: U,
								iv: J.iv,
								algorithm: D,
								mode: J.mode,
								padding: J.padding,
								blockSize: D.blockSize,
								formatter: P.format
							})
						},
						decrypt: function (D, F, U, P) {
							P = this.cfg.extend(P), F = this._parse(F, P.format);
							var Z = D.createDecryptor(U, P).finalize(F.ciphertext);
							return Z
						},
						_parse: function (D, F) {
							return typeof D == "string" ? F.parse(D, this) : D
						}
					}),
					N = n.kdf = {},
					w = N.OpenSSL = {
						execute: function (D, F, U, P, Z) {
							if (P || (P = o.random(64 / 8)), Z) var W = h.create({
								keySize: F + U,
								hasher: Z
							}).compute(D, P);
							else var W = h.create({
								keySize: F + U
							}).compute(D, P);
							var J = o.create(W.words.slice(F), U * 4);
							return W.sigBytes = F * 4, m.create({
								key: W,
								iv: J,
								salt: P
							})
						}
					},
					K = i.PasswordBasedCipher = S.extend({
						cfg: S.cfg.extend({
							kdf: w
						}),
						encrypt: function (D, F, U, P) {
							P = this.cfg.extend(P);
							var Z = P.kdf.execute(U, D.keySize, D.ivSize, P.salt, P.hasher);
							P.iv = Z.iv;
							var W = S.encrypt.call(this, D, F, Z.key, P);
							return W.mixIn(Z), W
						},
						decrypt: function (D, F, U, P) {
							P = this.cfg.extend(P), F = this._parse(F, P.format);
							var Z = P.kdf.execute(U, D.keySize, D.ivSize, F.salt, P.hasher);
							P.iv = Z.iv;
							var W = S.decrypt.call(this, D, F, Z.key, P);
							return W
						}
					})
			}()
		})
	}(v0)), v0.exports
}
var y0 = {
		exports: {}
	},
	en;

function ls() {
	return en || (en = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Me())
		})(ue, function (a) {
			return a.mode.CFB = function () {
				var r = a.lib.BlockCipherMode.extend();
				r.Encryptor = r.extend({
					processBlock: function (i, s) {
						var o = this._cipher,
							l = o.blockSize;
						n.call(this, i, s, l, o), this._prevBlock = i.slice(s, s + l)
					}
				}), r.Decryptor = r.extend({
					processBlock: function (i, s) {
						var o = this._cipher,
							l = o.blockSize,
							f = i.slice(s, s + l);
						n.call(this, i, s, l, o), this._prevBlock = f
					}
				});

				function n(i, s, o, l) {
					var f, u = this._iv;
					u ? (f = u.slice(0), this._iv = void 0) : f = this._prevBlock, l.encryptBlock(f, 0);
					for (var c = 0; c < o; c++) i[s + c] ^= f[c]
				}
				return r
			}(), a.mode.CFB
		})
	}(y0)), y0.exports
}
var g0 = {
		exports: {}
	},
	tn;

function cs() {
	return tn || (tn = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Me())
		})(ue, function (a) {
			return a.mode.CTR = function () {
				var r = a.lib.BlockCipherMode.extend(),
					n = r.Encryptor = r.extend({
						processBlock: function (i, s) {
							var o = this._cipher,
								l = o.blockSize,
								f = this._iv,
								u = this._counter;
							f && (u = this._counter = f.slice(0), this._iv = void 0);
							var c = u.slice(0);
							o.encryptBlock(c, 0), u[l - 1] = u[l - 1] + 1 | 0;
							for (var h = 0; h < l; h++) i[s + h] ^= c[h]
						}
					});
				return r.Decryptor = n, r
			}(), a.mode.CTR
		})
	}(g0)), g0.exports
}
var C0 = {
		exports: {}
	},
	rn;

function hs() {
	return rn || (rn = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Me())
		})(ue, function (a) {
			/** @preserve
			 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
			 * derived from CryptoJS.mode.CTR
			 * Jan Hruby jhruby.web@gmail.com
			 */
			return a.mode.CTRGladman = function () {
				var r = a.lib.BlockCipherMode.extend();

				function n(o) {
					if ((o >> 24 & 255) === 255) {
						var l = o >> 16 & 255,
							f = o >> 8 & 255,
							u = o & 255;
						l === 255 ? (l = 0, f === 255 ? (f = 0, u === 255 ? u = 0 : ++u) : ++f) : ++l, o = 0, o += l << 16, o += f << 8, o += u
					} else o += 1 << 24;
					return o
				}

				function i(o) {
					return (o[0] = n(o[0])) === 0 && (o[1] = n(o[1])), o
				}
				var s = r.Encryptor = r.extend({
					processBlock: function (o, l) {
						var f = this._cipher,
							u = f.blockSize,
							c = this._iv,
							h = this._counter;
						c && (h = this._counter = c.slice(0), this._iv = void 0), i(h);
						var x = h.slice(0);
						f.encryptBlock(x, 0);
						for (var d = 0; d < u; d++) o[l + d] ^= x[d]
					}
				});
				return r.Decryptor = s, r
			}(), a.mode.CTRGladman
		})
	}(C0)), C0.exports
}
var E0 = {
		exports: {}
	},
	an;

function ds() {
	return an || (an = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Me())
		})(ue, function (a) {
			return a.mode.OFB = function () {
				var r = a.lib.BlockCipherMode.extend(),
					n = r.Encryptor = r.extend({
						processBlock: function (i, s) {
							var o = this._cipher,
								l = o.blockSize,
								f = this._iv,
								u = this._keystream;
							f && (u = this._keystream = f.slice(0), this._iv = void 0), o.encryptBlock(u, 0);
							for (var c = 0; c < l; c++) i[s + c] ^= u[c]
						}
					});
				return r.Decryptor = n, r
			}(), a.mode.OFB
		})
	}(E0)), E0.exports
}
var m0 = {
		exports: {}
	},
	nn;

function xs() {
	return nn || (nn = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Me())
		})(ue, function (a) {
			return a.mode.ECB = function () {
				var r = a.lib.BlockCipherMode.extend();
				return r.Encryptor = r.extend({
					processBlock: function (n, i) {
						this._cipher.encryptBlock(n, i)
					}
				}), r.Decryptor = r.extend({
					processBlock: function (n, i) {
						this._cipher.decryptBlock(n, i)
					}
				}), r
			}(), a.mode.ECB
		})
	}(m0)), m0.exports
}
var B0 = {
		exports: {}
	},
	sn;

function ps() {
	return sn || (sn = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Me())
		})(ue, function (a) {
			return a.pad.AnsiX923 = {
				pad: function (r, n) {
					var i = r.sigBytes,
						s = n * 4,
						o = s - i % s,
						l = i + o - 1;
					r.clamp(), r.words[l >>> 2] |= o << 24 - l % 4 * 8, r.sigBytes += o
				},
				unpad: function (r) {
					var n = r.words[r.sigBytes - 1 >>> 2] & 255;
					r.sigBytes -= n
				}
			}, a.pad.Ansix923
		})
	}(B0)), B0.exports
}
var A0 = {
		exports: {}
	},
	on;

function vs() {
	return on || (on = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Me())
		})(ue, function (a) {
			return a.pad.Iso10126 = {
				pad: function (r, n) {
					var i = n * 4,
						s = i - r.sigBytes % i;
					r.concat(a.lib.WordArray.random(s - 1)).concat(a.lib.WordArray.create([s << 24], 1))
				},
				unpad: function (r) {
					var n = r.words[r.sigBytes - 1 >>> 2] & 255;
					r.sigBytes -= n
				}
			}, a.pad.Iso10126
		})
	}(A0)), A0.exports
}
var S0 = {
		exports: {}
	},
	fn;

function ys() {
	return fn || (fn = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Me())
		})(ue, function (a) {
			return a.pad.Iso97971 = {
				pad: function (r, n) {
					r.concat(a.lib.WordArray.create([2147483648], 1)), a.pad.ZeroPadding.pad(r, n)
				},
				unpad: function (r) {
					a.pad.ZeroPadding.unpad(r), r.sigBytes--
				}
			}, a.pad.Iso97971
		})
	}(S0)), S0.exports
}
var T0 = {
		exports: {}
	},
	un;

function gs() {
	return un || (un = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Me())
		})(ue, function (a) {
			return a.pad.ZeroPadding = {
				pad: function (r, n) {
					var i = n * 4;
					r.clamp(), r.sigBytes += i - (r.sigBytes % i || i)
				},
				unpad: function (r) {
					for (var n = r.words, i = r.sigBytes - 1, i = r.sigBytes - 1; i >= 0; i--)
						if (n[i >>> 2] >>> 24 - i % 4 * 8 & 255) {
							r.sigBytes = i + 1;
							break
						}
				}
			}, a.pad.ZeroPadding
		})
	}(T0)), T0.exports
}
var b0 = {
		exports: {}
	},
	ln;

function Cs() {
	return ln || (ln = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Me())
		})(ue, function (a) {
			return a.pad.NoPadding = {
				pad: function () {},
				unpad: function () {}
			}, a.pad.NoPadding
		})
	}(b0)), b0.exports
}
var I0 = {
		exports: {}
	},
	cn;

function Es() {
	return cn || (cn = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Me())
		})(ue, function (a) {
			return function (r) {
				var n = a,
					i = n.lib,
					s = i.CipherParams,
					o = n.enc,
					l = o.Hex,
					f = n.format;
				f.Hex = {
					stringify: function (u) {
						return u.ciphertext.toString(l)
					},
					parse: function (u) {
						var c = l.parse(u);
						return s.create({
							ciphertext: c
						})
					}
				}
			}(), a.format.Hex
		})
	}(I0)), I0.exports
}
var _0 = {
		exports: {}
	},
	hn;

function ms() {
	return hn || (hn = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Ht(), Mt(), kt(), Me())
		})(ue, function (a) {
			return function () {
				var r = a,
					n = r.lib,
					i = n.BlockCipher,
					s = r.algo,
					o = [],
					l = [],
					f = [],
					u = [],
					c = [],
					h = [],
					x = [],
					d = [],
					g = [],
					v = [];
				(function () {
					for (var m = [], A = 0; A < 256; A++) A < 128 ? m[A] = A << 1 : m[A] = A << 1 ^ 283;
					for (var T = 0, S = 0, A = 0; A < 256; A++) {
						var N = S ^ S << 1 ^ S << 2 ^ S << 3 ^ S << 4;
						N = N >>> 8 ^ N & 255 ^ 99, o[T] = N, l[N] = T;
						var w = m[T],
							K = m[w],
							D = m[K],
							F = m[N] * 257 ^ N * 16843008;
						f[T] = F << 24 | F >>> 8, u[T] = F << 16 | F >>> 16, c[T] = F << 8 | F >>> 24, h[T] = F;
						var F = D * 16843009 ^ K * 65537 ^ w * 257 ^ T * 16843008;
						x[N] = F << 24 | F >>> 8, d[N] = F << 16 | F >>> 16, g[N] = F << 8 | F >>> 24, v[N] = F, T ? (T = w ^ m[m[m[D ^ w]]], S ^= m[m[S]]) : T = S = 1
					}
				})();
				var B = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
					E = s.AES = i.extend({
						_doReset: function () {
							var m;
							if (!(this._nRounds && this._keyPriorReset === this._key)) {
								for (var A = this._keyPriorReset = this._key, T = A.words, S = A.sigBytes / 4, N = this._nRounds = S + 6, w = (N + 1) * 4, K = this._keySchedule = [], D = 0; D < w; D++) D < S ? K[D] = T[D] : (m = K[D - 1], D % S ? S > 6 && D % S == 4 && (m = o[m >>> 24] << 24 | o[m >>> 16 & 255] << 16 | o[m >>> 8 & 255] << 8 | o[m & 255]) : (m = m << 8 | m >>> 24, m = o[m >>> 24] << 24 | o[m >>> 16 & 255] << 16 | o[m >>> 8 & 255] << 8 | o[m & 255], m ^= B[D / S | 0] << 24), K[D] = K[D - S] ^ m);
								for (var F = this._invKeySchedule = [], U = 0; U < w; U++) {
									var D = w - U;
									if (U % 4) var m = K[D];
									else var m = K[D - 4];
									U < 4 || D <= 4 ? F[U] = m : F[U] = x[o[m >>> 24]] ^ d[o[m >>> 16 & 255]] ^ g[o[m >>> 8 & 255]] ^ v[o[m & 255]]
								}
							}
						},
						encryptBlock: function (m, A) {
							this._doCryptBlock(m, A, this._keySchedule, f, u, c, h, o)
						},
						decryptBlock: function (m, A) {
							var T = m[A + 1];
							m[A + 1] = m[A + 3], m[A + 3] = T, this._doCryptBlock(m, A, this._invKeySchedule, x, d, g, v, l);
							var T = m[A + 1];
							m[A + 1] = m[A + 3], m[A + 3] = T
						},
						_doCryptBlock: function (m, A, T, S, N, w, K, D) {
							for (var F = this._nRounds, U = m[A] ^ T[0], P = m[A + 1] ^ T[1], Z = m[A + 2] ^ T[2], W = m[A + 3] ^ T[3], J = 4, Q = 1; Q < F; Q++) {
								var ce = S[U >>> 24] ^ N[P >>> 16 & 255] ^ w[Z >>> 8 & 255] ^ K[W & 255] ^ T[J++],
									ge = S[P >>> 24] ^ N[Z >>> 16 & 255] ^ w[W >>> 8 & 255] ^ K[U & 255] ^ T[J++],
									ne = S[Z >>> 24] ^ N[W >>> 16 & 255] ^ w[U >>> 8 & 255] ^ K[P & 255] ^ T[J++],
									k = S[W >>> 24] ^ N[U >>> 16 & 255] ^ w[P >>> 8 & 255] ^ K[Z & 255] ^ T[J++];
								U = ce, P = ge, Z = ne, W = k
							}
							var ce = (D[U >>> 24] << 24 | D[P >>> 16 & 255] << 16 | D[Z >>> 8 & 255] << 8 | D[W & 255]) ^ T[J++],
								ge = (D[P >>> 24] << 24 | D[Z >>> 16 & 255] << 16 | D[W >>> 8 & 255] << 8 | D[U & 255]) ^ T[J++],
								ne = (D[Z >>> 24] << 24 | D[W >>> 16 & 255] << 16 | D[U >>> 8 & 255] << 8 | D[P & 255]) ^ T[J++],
								k = (D[W >>> 24] << 24 | D[U >>> 16 & 255] << 16 | D[P >>> 8 & 255] << 8 | D[Z & 255]) ^ T[J++];
							m[A] = ce, m[A + 1] = ge, m[A + 2] = ne, m[A + 3] = k
						},
						keySize: 256 / 32
					});
				r.AES = i._createHelper(E)
			}(), a.AES
		})
	}(_0)), _0.exports
}
var D0 = {
		exports: {}
	},
	dn;

function Bs() {
	return dn || (dn = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Ht(), Mt(), kt(), Me())
		})(ue, function (a) {
			return function () {
				var r = a,
					n = r.lib,
					i = n.WordArray,
					s = n.BlockCipher,
					o = r.algo,
					l = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
					f = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
					u = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
					c = [{
						0: 8421888,
						268435456: 32768,
						536870912: 8421378,
						805306368: 2,
						1073741824: 512,
						1342177280: 8421890,
						1610612736: 8389122,
						1879048192: 8388608,
						2147483648: 514,
						2415919104: 8389120,
						2684354560: 33280,
						2952790016: 8421376,
						3221225472: 32770,
						3489660928: 8388610,
						3758096384: 0,
						4026531840: 33282,
						134217728: 0,
						402653184: 8421890,
						671088640: 33282,
						939524096: 32768,
						1207959552: 8421888,
						1476395008: 512,
						1744830464: 8421378,
						2013265920: 2,
						2281701376: 8389120,
						2550136832: 33280,
						2818572288: 8421376,
						3087007744: 8389122,
						3355443200: 8388610,
						3623878656: 32770,
						3892314112: 514,
						4160749568: 8388608,
						1: 32768,
						268435457: 2,
						536870913: 8421888,
						805306369: 8388608,
						1073741825: 8421378,
						1342177281: 33280,
						1610612737: 512,
						1879048193: 8389122,
						2147483649: 8421890,
						2415919105: 8421376,
						2684354561: 8388610,
						2952790017: 33282,
						3221225473: 514,
						3489660929: 8389120,
						3758096385: 32770,
						4026531841: 0,
						134217729: 8421890,
						402653185: 8421376,
						671088641: 8388608,
						939524097: 512,
						1207959553: 32768,
						1476395009: 8388610,
						1744830465: 2,
						2013265921: 33282,
						2281701377: 32770,
						2550136833: 8389122,
						2818572289: 514,
						3087007745: 8421888,
						3355443201: 8389120,
						3623878657: 0,
						3892314113: 33280,
						4160749569: 8421378
					}, {
						0: 1074282512,
						16777216: 16384,
						33554432: 524288,
						50331648: 1074266128,
						67108864: 1073741840,
						83886080: 1074282496,
						100663296: 1073758208,
						117440512: 16,
						134217728: 540672,
						150994944: 1073758224,
						167772160: 1073741824,
						184549376: 540688,
						201326592: 524304,
						218103808: 0,
						234881024: 16400,
						251658240: 1074266112,
						8388608: 1073758208,
						25165824: 540688,
						41943040: 16,
						58720256: 1073758224,
						75497472: 1074282512,
						92274688: 1073741824,
						109051904: 524288,
						125829120: 1074266128,
						142606336: 524304,
						159383552: 0,
						176160768: 16384,
						192937984: 1074266112,
						209715200: 1073741840,
						226492416: 540672,
						243269632: 1074282496,
						260046848: 16400,
						268435456: 0,
						285212672: 1074266128,
						301989888: 1073758224,
						318767104: 1074282496,
						335544320: 1074266112,
						352321536: 16,
						369098752: 540688,
						385875968: 16384,
						402653184: 16400,
						419430400: 524288,
						436207616: 524304,
						452984832: 1073741840,
						469762048: 540672,
						486539264: 1073758208,
						503316480: 1073741824,
						520093696: 1074282512,
						276824064: 540688,
						293601280: 524288,
						310378496: 1074266112,
						327155712: 16384,
						343932928: 1073758208,
						360710144: 1074282512,
						377487360: 16,
						394264576: 1073741824,
						411041792: 1074282496,
						427819008: 1073741840,
						444596224: 1073758224,
						461373440: 524304,
						478150656: 0,
						494927872: 16400,
						511705088: 1074266128,
						528482304: 540672
					}, {
						0: 260,
						1048576: 0,
						2097152: 67109120,
						3145728: 65796,
						4194304: 65540,
						5242880: 67108868,
						6291456: 67174660,
						7340032: 67174400,
						8388608: 67108864,
						9437184: 67174656,
						10485760: 65792,
						11534336: 67174404,
						12582912: 67109124,
						13631488: 65536,
						14680064: 4,
						15728640: 256,
						524288: 67174656,
						1572864: 67174404,
						2621440: 0,
						3670016: 67109120,
						4718592: 67108868,
						5767168: 65536,
						6815744: 65540,
						7864320: 260,
						8912896: 4,
						9961472: 256,
						11010048: 67174400,
						12058624: 65796,
						13107200: 65792,
						14155776: 67109124,
						15204352: 67174660,
						16252928: 67108864,
						16777216: 67174656,
						17825792: 65540,
						18874368: 65536,
						19922944: 67109120,
						20971520: 256,
						22020096: 67174660,
						23068672: 67108868,
						24117248: 0,
						25165824: 67109124,
						26214400: 67108864,
						27262976: 4,
						28311552: 65792,
						29360128: 67174400,
						30408704: 260,
						31457280: 65796,
						32505856: 67174404,
						17301504: 67108864,
						18350080: 260,
						19398656: 67174656,
						20447232: 0,
						21495808: 65540,
						22544384: 67109120,
						23592960: 256,
						24641536: 67174404,
						25690112: 65536,
						26738688: 67174660,
						27787264: 65796,
						28835840: 67108868,
						29884416: 67109124,
						30932992: 67174400,
						31981568: 4,
						33030144: 65792
					}, {
						0: 2151682048,
						65536: 2147487808,
						131072: 4198464,
						196608: 2151677952,
						262144: 0,
						327680: 4198400,
						393216: 2147483712,
						458752: 4194368,
						524288: 2147483648,
						589824: 4194304,
						655360: 64,
						720896: 2147487744,
						786432: 2151678016,
						851968: 4160,
						917504: 4096,
						983040: 2151682112,
						32768: 2147487808,
						98304: 64,
						163840: 2151678016,
						229376: 2147487744,
						294912: 4198400,
						360448: 2151682112,
						425984: 0,
						491520: 2151677952,
						557056: 4096,
						622592: 2151682048,
						688128: 4194304,
						753664: 4160,
						819200: 2147483648,
						884736: 4194368,
						950272: 4198464,
						1015808: 2147483712,
						1048576: 4194368,
						1114112: 4198400,
						1179648: 2147483712,
						1245184: 0,
						1310720: 4160,
						1376256: 2151678016,
						1441792: 2151682048,
						1507328: 2147487808,
						1572864: 2151682112,
						1638400: 2147483648,
						1703936: 2151677952,
						1769472: 4198464,
						1835008: 2147487744,
						1900544: 4194304,
						1966080: 64,
						2031616: 4096,
						1081344: 2151677952,
						1146880: 2151682112,
						1212416: 0,
						1277952: 4198400,
						1343488: 4194368,
						1409024: 2147483648,
						1474560: 2147487808,
						1540096: 64,
						1605632: 2147483712,
						1671168: 4096,
						1736704: 2147487744,
						1802240: 2151678016,
						1867776: 4160,
						1933312: 2151682048,
						1998848: 4194304,
						2064384: 4198464
					}, {
						0: 128,
						4096: 17039360,
						8192: 262144,
						12288: 536870912,
						16384: 537133184,
						20480: 16777344,
						24576: 553648256,
						28672: 262272,
						32768: 16777216,
						36864: 537133056,
						40960: 536871040,
						45056: 553910400,
						49152: 553910272,
						53248: 0,
						57344: 17039488,
						61440: 553648128,
						2048: 17039488,
						6144: 553648256,
						10240: 128,
						14336: 17039360,
						18432: 262144,
						22528: 537133184,
						26624: 553910272,
						30720: 536870912,
						34816: 537133056,
						38912: 0,
						43008: 553910400,
						47104: 16777344,
						51200: 536871040,
						55296: 553648128,
						59392: 16777216,
						63488: 262272,
						65536: 262144,
						69632: 128,
						73728: 536870912,
						77824: 553648256,
						81920: 16777344,
						86016: 553910272,
						90112: 537133184,
						94208: 16777216,
						98304: 553910400,
						102400: 553648128,
						106496: 17039360,
						110592: 537133056,
						114688: 262272,
						118784: 536871040,
						122880: 0,
						126976: 17039488,
						67584: 553648256,
						71680: 16777216,
						75776: 17039360,
						79872: 537133184,
						83968: 536870912,
						88064: 17039488,
						92160: 128,
						96256: 553910272,
						100352: 262272,
						104448: 553910400,
						108544: 0,
						112640: 553648128,
						116736: 16777344,
						120832: 262144,
						124928: 537133056,
						129024: 536871040
					}, {
						0: 268435464,
						256: 8192,
						512: 270532608,
						768: 270540808,
						1024: 268443648,
						1280: 2097152,
						1536: 2097160,
						1792: 268435456,
						2048: 0,
						2304: 268443656,
						2560: 2105344,
						2816: 8,
						3072: 270532616,
						3328: 2105352,
						3584: 8200,
						3840: 270540800,
						128: 270532608,
						384: 270540808,
						640: 8,
						896: 2097152,
						1152: 2105352,
						1408: 268435464,
						1664: 268443648,
						1920: 8200,
						2176: 2097160,
						2432: 8192,
						2688: 268443656,
						2944: 270532616,
						3200: 0,
						3456: 270540800,
						3712: 2105344,
						3968: 268435456,
						4096: 268443648,
						4352: 270532616,
						4608: 270540808,
						4864: 8200,
						5120: 2097152,
						5376: 268435456,
						5632: 268435464,
						5888: 2105344,
						6144: 2105352,
						6400: 0,
						6656: 8,
						6912: 270532608,
						7168: 8192,
						7424: 268443656,
						7680: 270540800,
						7936: 2097160,
						4224: 8,
						4480: 2105344,
						4736: 2097152,
						4992: 268435464,
						5248: 268443648,
						5504: 8200,
						5760: 270540808,
						6016: 270532608,
						6272: 270540800,
						6528: 270532616,
						6784: 8192,
						7040: 2105352,
						7296: 2097160,
						7552: 0,
						7808: 268435456,
						8064: 268443656
					}, {
						0: 1048576,
						16: 33555457,
						32: 1024,
						48: 1049601,
						64: 34604033,
						80: 0,
						96: 1,
						112: 34603009,
						128: 33555456,
						144: 1048577,
						160: 33554433,
						176: 34604032,
						192: 34603008,
						208: 1025,
						224: 1049600,
						240: 33554432,
						8: 34603009,
						24: 0,
						40: 33555457,
						56: 34604032,
						72: 1048576,
						88: 33554433,
						104: 33554432,
						120: 1025,
						136: 1049601,
						152: 33555456,
						168: 34603008,
						184: 1048577,
						200: 1024,
						216: 34604033,
						232: 1,
						248: 1049600,
						256: 33554432,
						272: 1048576,
						288: 33555457,
						304: 34603009,
						320: 1048577,
						336: 33555456,
						352: 34604032,
						368: 1049601,
						384: 1025,
						400: 34604033,
						416: 1049600,
						432: 1,
						448: 0,
						464: 34603008,
						480: 33554433,
						496: 1024,
						264: 1049600,
						280: 33555457,
						296: 34603009,
						312: 1,
						328: 33554432,
						344: 1048576,
						360: 1025,
						376: 34604032,
						392: 33554433,
						408: 34603008,
						424: 0,
						440: 34604033,
						456: 1049601,
						472: 1024,
						488: 33555456,
						504: 1048577
					}, {
						0: 134219808,
						1: 131072,
						2: 134217728,
						3: 32,
						4: 131104,
						5: 134350880,
						6: 134350848,
						7: 2048,
						8: 134348800,
						9: 134219776,
						10: 133120,
						11: 134348832,
						12: 2080,
						13: 0,
						14: 134217760,
						15: 133152,
						2147483648: 2048,
						2147483649: 134350880,
						2147483650: 134219808,
						2147483651: 134217728,
						2147483652: 134348800,
						2147483653: 133120,
						2147483654: 133152,
						2147483655: 32,
						2147483656: 134217760,
						2147483657: 2080,
						2147483658: 131104,
						2147483659: 134350848,
						2147483660: 0,
						2147483661: 134348832,
						2147483662: 134219776,
						2147483663: 131072,
						16: 133152,
						17: 134350848,
						18: 32,
						19: 2048,
						20: 134219776,
						21: 134217760,
						22: 134348832,
						23: 131072,
						24: 0,
						25: 131104,
						26: 134348800,
						27: 134219808,
						28: 134350880,
						29: 133120,
						30: 2080,
						31: 134217728,
						2147483664: 131072,
						2147483665: 2048,
						2147483666: 134348832,
						2147483667: 133152,
						2147483668: 32,
						2147483669: 134348800,
						2147483670: 134217728,
						2147483671: 134219808,
						2147483672: 134350880,
						2147483673: 134217760,
						2147483674: 134219776,
						2147483675: 0,
						2147483676: 133120,
						2147483677: 2080,
						2147483678: 131104,
						2147483679: 134350848
					}],
					h = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
					x = o.DES = s.extend({
						_doReset: function () {
							for (var B = this._key, E = B.words, m = [], A = 0; A < 56; A++) {
								var T = l[A] - 1;
								m[A] = E[T >>> 5] >>> 31 - T % 32 & 1
							}
							for (var S = this._subKeys = [], N = 0; N < 16; N++) {
								for (var w = S[N] = [], K = u[N], A = 0; A < 24; A++) w[A / 6 | 0] |= m[(f[A] - 1 + K) % 28] << 31 - A % 6, w[4 + (A / 6 | 0)] |= m[28 + (f[A + 24] - 1 + K) % 28] << 31 - A % 6;
								w[0] = w[0] << 1 | w[0] >>> 31;
								for (var A = 1; A < 7; A++) w[A] = w[A] >>> (A - 1) * 4 + 3;
								w[7] = w[7] << 5 | w[7] >>> 27
							}
							for (var D = this._invSubKeys = [], A = 0; A < 16; A++) D[A] = S[15 - A]
						},
						encryptBlock: function (B, E) {
							this._doCryptBlock(B, E, this._subKeys)
						},
						decryptBlock: function (B, E) {
							this._doCryptBlock(B, E, this._invSubKeys)
						},
						_doCryptBlock: function (B, E, m) {
							this._lBlock = B[E], this._rBlock = B[E + 1], d.call(this, 4, 252645135), d.call(this, 16, 65535), g.call(this, 2, 858993459), g.call(this, 8, 16711935), d.call(this, 1, 1431655765);
							for (var A = 0; A < 16; A++) {
								for (var T = m[A], S = this._lBlock, N = this._rBlock, w = 0, K = 0; K < 8; K++) w |= c[K][((N ^ T[K]) & h[K]) >>> 0];
								this._lBlock = N, this._rBlock = S ^ w
							}
							var D = this._lBlock;
							this._lBlock = this._rBlock, this._rBlock = D, d.call(this, 1, 1431655765), g.call(this, 8, 16711935), g.call(this, 2, 858993459), d.call(this, 16, 65535), d.call(this, 4, 252645135), B[E] = this._lBlock, B[E + 1] = this._rBlock
						},
						keySize: 64 / 32,
						ivSize: 64 / 32,
						blockSize: 64 / 32
					});

				function d(B, E) {
					var m = (this._lBlock >>> B ^ this._rBlock) & E;
					this._rBlock ^= m, this._lBlock ^= m << B
				}

				function g(B, E) {
					var m = (this._rBlock >>> B ^ this._lBlock) & E;
					this._lBlock ^= m, this._rBlock ^= m << B
				}
				r.DES = s._createHelper(x);
				var v = o.TripleDES = s.extend({
					_doReset: function () {
						var B = this._key,
							E = B.words;
						if (E.length !== 2 && E.length !== 4 && E.length < 6) throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
						var m = E.slice(0, 2),
							A = E.length < 4 ? E.slice(0, 2) : E.slice(2, 4),
							T = E.length < 6 ? E.slice(0, 2) : E.slice(4, 6);
						this._des1 = x.createEncryptor(i.create(m)), this._des2 = x.createEncryptor(i.create(A)), this._des3 = x.createEncryptor(i.create(T))
					},
					encryptBlock: function (B, E) {
						this._des1.encryptBlock(B, E), this._des2.decryptBlock(B, E), this._des3.encryptBlock(B, E)
					},
					decryptBlock: function (B, E) {
						this._des3.decryptBlock(B, E), this._des2.encryptBlock(B, E), this._des1.decryptBlock(B, E)
					},
					keySize: 192 / 32,
					ivSize: 64 / 32,
					blockSize: 64 / 32
				});
				r.TripleDES = s._createHelper(v)
			}(), a.TripleDES
		})
	}(D0)), D0.exports
}
var N0 = {
		exports: {}
	},
	xn;

function As() {
	return xn || (xn = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Ht(), Mt(), kt(), Me())
		})(ue, function (a) {
			return function () {
				var r = a,
					n = r.lib,
					i = n.StreamCipher,
					s = r.algo,
					o = s.RC4 = i.extend({
						_doReset: function () {
							for (var u = this._key, c = u.words, h = u.sigBytes, x = this._S = [], d = 0; d < 256; d++) x[d] = d;
							for (var d = 0, g = 0; d < 256; d++) {
								var v = d % h,
									B = c[v >>> 2] >>> 24 - v % 4 * 8 & 255;
								g = (g + x[d] + B) % 256;
								var E = x[d];
								x[d] = x[g], x[g] = E
							}
							this._i = this._j = 0
						},
						_doProcessBlock: function (u, c) {
							u[c] ^= l.call(this)
						},
						keySize: 256 / 32,
						ivSize: 0
					});

				function l() {
					for (var u = this._S, c = this._i, h = this._j, x = 0, d = 0; d < 4; d++) {
						c = (c + 1) % 256, h = (h + u[c]) % 256;
						var g = u[c];
						u[c] = u[h], u[h] = g, x |= u[(u[c] + u[h]) % 256] << 24 - d * 8
					}
					return this._i = c, this._j = h, x
				}
				r.RC4 = i._createHelper(o);
				var f = s.RC4Drop = o.extend({
					cfg: o.cfg.extend({
						drop: 192
					}),
					_doReset: function () {
						o._doReset.call(this);
						for (var u = this.cfg.drop; u > 0; u--) l.call(this)
					}
				});
				r.RC4Drop = i._createHelper(f)
			}(), a.RC4
		})
	}(N0)), N0.exports
}
var F0 = {
		exports: {}
	},
	pn;

function Ss() {
	return pn || (pn = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Ht(), Mt(), kt(), Me())
		})(ue, function (a) {
			return function () {
				var r = a,
					n = r.lib,
					i = n.StreamCipher,
					s = r.algo,
					o = [],
					l = [],
					f = [],
					u = s.Rabbit = i.extend({
						_doReset: function () {
							for (var h = this._key.words, x = this.cfg.iv, d = 0; d < 4; d++) h[d] = (h[d] << 8 | h[d] >>> 24) & 16711935 | (h[d] << 24 | h[d] >>> 8) & 4278255360;
							var g = this._X = [h[0], h[3] << 16 | h[2] >>> 16, h[1], h[0] << 16 | h[3] >>> 16, h[2], h[1] << 16 | h[0] >>> 16, h[3], h[2] << 16 | h[1] >>> 16],
								v = this._C = [h[2] << 16 | h[2] >>> 16, h[0] & 4294901760 | h[1] & 65535, h[3] << 16 | h[3] >>> 16, h[1] & 4294901760 | h[2] & 65535, h[0] << 16 | h[0] >>> 16, h[2] & 4294901760 | h[3] & 65535, h[1] << 16 | h[1] >>> 16, h[3] & 4294901760 | h[0] & 65535];
							this._b = 0;
							for (var d = 0; d < 4; d++) c.call(this);
							for (var d = 0; d < 8; d++) v[d] ^= g[d + 4 & 7];
							if (x) {
								var B = x.words,
									E = B[0],
									m = B[1],
									A = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360,
									T = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360,
									S = A >>> 16 | T & 4294901760,
									N = T << 16 | A & 65535;
								v[0] ^= A, v[1] ^= S, v[2] ^= T, v[3] ^= N, v[4] ^= A, v[5] ^= S, v[6] ^= T, v[7] ^= N;
								for (var d = 0; d < 4; d++) c.call(this)
							}
						},
						_doProcessBlock: function (h, x) {
							var d = this._X;
							c.call(this), o[0] = d[0] ^ d[5] >>> 16 ^ d[3] << 16, o[1] = d[2] ^ d[7] >>> 16 ^ d[5] << 16, o[2] = d[4] ^ d[1] >>> 16 ^ d[7] << 16, o[3] = d[6] ^ d[3] >>> 16 ^ d[1] << 16;
							for (var g = 0; g < 4; g++) o[g] = (o[g] << 8 | o[g] >>> 24) & 16711935 | (o[g] << 24 | o[g] >>> 8) & 4278255360, h[x + g] ^= o[g]
						},
						blockSize: 128 / 32,
						ivSize: 64 / 32
					});

				function c() {
					for (var h = this._X, x = this._C, d = 0; d < 8; d++) l[d] = x[d];
					x[0] = x[0] + 1295307597 + this._b | 0, x[1] = x[1] + 3545052371 + (x[0] >>> 0 < l[0] >>> 0 ? 1 : 0) | 0, x[2] = x[2] + 886263092 + (x[1] >>> 0 < l[1] >>> 0 ? 1 : 0) | 0, x[3] = x[3] + 1295307597 + (x[2] >>> 0 < l[2] >>> 0 ? 1 : 0) | 0, x[4] = x[4] + 3545052371 + (x[3] >>> 0 < l[3] >>> 0 ? 1 : 0) | 0, x[5] = x[5] + 886263092 + (x[4] >>> 0 < l[4] >>> 0 ? 1 : 0) | 0, x[6] = x[6] + 1295307597 + (x[5] >>> 0 < l[5] >>> 0 ? 1 : 0) | 0, x[7] = x[7] + 3545052371 + (x[6] >>> 0 < l[6] >>> 0 ? 1 : 0) | 0, this._b = x[7] >>> 0 < l[7] >>> 0 ? 1 : 0;
					for (var d = 0; d < 8; d++) {
						var g = h[d] + x[d],
							v = g & 65535,
							B = g >>> 16,
							E = ((v * v >>> 17) + v * B >>> 15) + B * B,
							m = ((g & 4294901760) * g | 0) + ((g & 65535) * g | 0);
						f[d] = E ^ m
					}
					h[0] = f[0] + (f[7] << 16 | f[7] >>> 16) + (f[6] << 16 | f[6] >>> 16) | 0, h[1] = f[1] + (f[0] << 8 | f[0] >>> 24) + f[7] | 0, h[2] = f[2] + (f[1] << 16 | f[1] >>> 16) + (f[0] << 16 | f[0] >>> 16) | 0, h[3] = f[3] + (f[2] << 8 | f[2] >>> 24) + f[1] | 0, h[4] = f[4] + (f[3] << 16 | f[3] >>> 16) + (f[2] << 16 | f[2] >>> 16) | 0, h[5] = f[5] + (f[4] << 8 | f[4] >>> 24) + f[3] | 0, h[6] = f[6] + (f[5] << 16 | f[5] >>> 16) + (f[4] << 16 | f[4] >>> 16) | 0, h[7] = f[7] + (f[6] << 8 | f[6] >>> 24) + f[5] | 0
				}
				r.Rabbit = i._createHelper(u)
			}(), a.Rabbit
		})
	}(F0)), F0.exports
}
var R0 = {
		exports: {}
	},
	vn;

function Ts() {
	return vn || (vn = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Ht(), Mt(), kt(), Me())
		})(ue, function (a) {
			return function () {
				var r = a,
					n = r.lib,
					i = n.StreamCipher,
					s = r.algo,
					o = [],
					l = [],
					f = [],
					u = s.RabbitLegacy = i.extend({
						_doReset: function () {
							var h = this._key.words,
								x = this.cfg.iv,
								d = this._X = [h[0], h[3] << 16 | h[2] >>> 16, h[1], h[0] << 16 | h[3] >>> 16, h[2], h[1] << 16 | h[0] >>> 16, h[3], h[2] << 16 | h[1] >>> 16],
								g = this._C = [h[2] << 16 | h[2] >>> 16, h[0] & 4294901760 | h[1] & 65535, h[3] << 16 | h[3] >>> 16, h[1] & 4294901760 | h[2] & 65535, h[0] << 16 | h[0] >>> 16, h[2] & 4294901760 | h[3] & 65535, h[1] << 16 | h[1] >>> 16, h[3] & 4294901760 | h[0] & 65535];
							this._b = 0;
							for (var v = 0; v < 4; v++) c.call(this);
							for (var v = 0; v < 8; v++) g[v] ^= d[v + 4 & 7];
							if (x) {
								var B = x.words,
									E = B[0],
									m = B[1],
									A = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360,
									T = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360,
									S = A >>> 16 | T & 4294901760,
									N = T << 16 | A & 65535;
								g[0] ^= A, g[1] ^= S, g[2] ^= T, g[3] ^= N, g[4] ^= A, g[5] ^= S, g[6] ^= T, g[7] ^= N;
								for (var v = 0; v < 4; v++) c.call(this)
							}
						},
						_doProcessBlock: function (h, x) {
							var d = this._X;
							c.call(this), o[0] = d[0] ^ d[5] >>> 16 ^ d[3] << 16, o[1] = d[2] ^ d[7] >>> 16 ^ d[5] << 16, o[2] = d[4] ^ d[1] >>> 16 ^ d[7] << 16, o[3] = d[6] ^ d[3] >>> 16 ^ d[1] << 16;
							for (var g = 0; g < 4; g++) o[g] = (o[g] << 8 | o[g] >>> 24) & 16711935 | (o[g] << 24 | o[g] >>> 8) & 4278255360, h[x + g] ^= o[g]
						},
						blockSize: 128 / 32,
						ivSize: 64 / 32
					});

				function c() {
					for (var h = this._X, x = this._C, d = 0; d < 8; d++) l[d] = x[d];
					x[0] = x[0] + 1295307597 + this._b | 0, x[1] = x[1] + 3545052371 + (x[0] >>> 0 < l[0] >>> 0 ? 1 : 0) | 0, x[2] = x[2] + 886263092 + (x[1] >>> 0 < l[1] >>> 0 ? 1 : 0) | 0, x[3] = x[3] + 1295307597 + (x[2] >>> 0 < l[2] >>> 0 ? 1 : 0) | 0, x[4] = x[4] + 3545052371 + (x[3] >>> 0 < l[3] >>> 0 ? 1 : 0) | 0, x[5] = x[5] + 886263092 + (x[4] >>> 0 < l[4] >>> 0 ? 1 : 0) | 0, x[6] = x[6] + 1295307597 + (x[5] >>> 0 < l[5] >>> 0 ? 1 : 0) | 0, x[7] = x[7] + 3545052371 + (x[6] >>> 0 < l[6] >>> 0 ? 1 : 0) | 0, this._b = x[7] >>> 0 < l[7] >>> 0 ? 1 : 0;
					for (var d = 0; d < 8; d++) {
						var g = h[d] + x[d],
							v = g & 65535,
							B = g >>> 16,
							E = ((v * v >>> 17) + v * B >>> 15) + B * B,
							m = ((g & 4294901760) * g | 0) + ((g & 65535) * g | 0);
						f[d] = E ^ m
					}
					h[0] = f[0] + (f[7] << 16 | f[7] >>> 16) + (f[6] << 16 | f[6] >>> 16) | 0, h[1] = f[1] + (f[0] << 8 | f[0] >>> 24) + f[7] | 0, h[2] = f[2] + (f[1] << 16 | f[1] >>> 16) + (f[0] << 16 | f[0] >>> 16) | 0, h[3] = f[3] + (f[2] << 8 | f[2] >>> 24) + f[1] | 0, h[4] = f[4] + (f[3] << 16 | f[3] >>> 16) + (f[2] << 16 | f[2] >>> 16) | 0, h[5] = f[5] + (f[4] << 8 | f[4] >>> 24) + f[3] | 0, h[6] = f[6] + (f[5] << 16 | f[5] >>> 16) + (f[4] << 16 | f[4] >>> 16) | 0, h[7] = f[7] + (f[6] << 8 | f[6] >>> 24) + f[5] | 0
				}
				r.RabbitLegacy = i._createHelper(u)
			}(), a.RabbitLegacy
		})
	}(R0)), R0.exports
}
var w0 = {
		exports: {}
	},
	yn;

function bs() {
	return yn || (yn = 1, function (e, t) {
		(function (a, r, n) {
			e.exports = r(ve(), Ht(), Mt(), kt(), Me())
		})(ue, function (a) {
			return function () {
				var r = a,
					n = r.lib,
					i = n.BlockCipher,
					s = r.algo;
				const o = 16,
					l = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731],
					f = [
						[3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946],
						[1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055],
						[3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504],
						[976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462]
					];
				var u = {
					pbox: [],
					sbox: []
				};

				function c(v, B) {
					let E = B >> 24 & 255,
						m = B >> 16 & 255,
						A = B >> 8 & 255,
						T = B & 255,
						S = v.sbox[0][E] + v.sbox[1][m];
					return S = S ^ v.sbox[2][A], S = S + v.sbox[3][T], S
				}

				function h(v, B, E) {
					let m = B,
						A = E,
						T;
					for (let S = 0; S < o; ++S) m = m ^ v.pbox[S], A = c(v, m) ^ A, T = m, m = A, A = T;
					return T = m, m = A, A = T, A = A ^ v.pbox[o], m = m ^ v.pbox[o + 1], {
						left: m,
						right: A
					}
				}

				function x(v, B, E) {
					let m = B,
						A = E,
						T;
					for (let S = o + 1; S > 1; --S) m = m ^ v.pbox[S], A = c(v, m) ^ A, T = m, m = A, A = T;
					return T = m, m = A, A = T, A = A ^ v.pbox[1], m = m ^ v.pbox[0], {
						left: m,
						right: A
					}
				}

				function d(v, B, E) {
					for (let N = 0; N < 4; N++) {
						v.sbox[N] = [];
						for (let w = 0; w < 256; w++) v.sbox[N][w] = f[N][w]
					}
					let m = 0;
					for (let N = 0; N < o + 2; N++) v.pbox[N] = l[N] ^ B[m], m++, m >= E && (m = 0);
					let A = 0,
						T = 0,
						S = 0;
					for (let N = 0; N < o + 2; N += 2) S = h(v, A, T), A = S.left, T = S.right, v.pbox[N] = A, v.pbox[N + 1] = T;
					for (let N = 0; N < 4; N++)
						for (let w = 0; w < 256; w += 2) S = h(v, A, T), A = S.left, T = S.right, v.sbox[N][w] = A, v.sbox[N][w + 1] = T;
					return !0
				}
				var g = s.Blowfish = i.extend({
					_doReset: function () {
						if (this._keyPriorReset !== this._key) {
							var v = this._keyPriorReset = this._key,
								B = v.words,
								E = v.sigBytes / 4;
							d(u, B, E)
						}
					},
					encryptBlock: function (v, B) {
						var E = h(u, v[B], v[B + 1]);
						v[B] = E.left, v[B + 1] = E.right
					},
					decryptBlock: function (v, B) {
						var E = x(u, v[B], v[B + 1]);
						v[B] = E.left, v[B + 1] = E.right
					},
					blockSize: 64 / 32,
					keySize: 128 / 32,
					ivSize: 64 / 32
				});
				r.Blowfish = i._createHelper(g)
			}(), a.Blowfish
		})
	}(w0)), w0.exports
}(function (e, t) {
	(function (a, r, n) {
		e.exports = r(ve(), Hr(), rs(), as(), Ht(), ns(), Mt(), Wn(), na(), is(), Xn(), ss(), os(), fs(), ia(), us(), kt(), Me(), ls(), cs(), hs(), ds(), xs(), ps(), vs(), ys(), gs(), Cs(), Es(), ms(), Bs(), As(), Ss(), Ts(), bs())
	})(ue, function (a) {
		return a
	})
})(Qn);
var Is = Qn.exports;
const yl = Gn(Is);
var le = {
		options: {
			usePureJavaScript: !1
		}
	},
	sa = {},
	_s = sa,
	gn = {};
sa.encode = function (e, t, a) {
	if (typeof t != "string") throw new TypeError('"alphabet" must be a string.');
	if (a !== void 0 && typeof a != "number") throw new TypeError('"maxline" must be a number.');
	var r = "";
	if (!(e instanceof Uint8Array)) r = Ds(e, t);
	else {
		var n = 0,
			i = t.length,
			s = t.charAt(0),
			o = [0];
		for (n = 0; n < e.length; ++n) {
			for (var l = 0, f = e[n]; l < o.length; ++l) f += o[l] << 8, o[l] = f % i, f = f / i | 0;
			for (; f > 0;) o.push(f % i), f = f / i | 0
		}
		for (n = 0; e[n] === 0 && n < e.length - 1; ++n) r += s;
		for (n = o.length - 1; n >= 0; --n) r += t[o[n]]
	}
	if (a) {
		var u = new RegExp(".{1," + a + "}", "g");
		r = r.match(u).join(`\r
`)
	}
	return r
};
sa.decode = function (e, t) {
	if (typeof e != "string") throw new TypeError('"input" must be a string.');
	if (typeof t != "string") throw new TypeError('"alphabet" must be a string.');
	var a = gn[t];
	if (!a) {
		a = gn[t] = [];
		for (var r = 0; r < t.length; ++r) a[t.charCodeAt(r)] = r
	}
	e = e.replace(/\s/g, "");
	for (var n = t.length, i = t.charAt(0), s = [0], r = 0; r < e.length; r++) {
		var o = a[e.charCodeAt(r)];
		if (o === void 0) return;
		for (var l = 0, f = o; l < s.length; ++l) f += s[l] * n, s[l] = f & 255, f >>= 8;
		for (; f > 0;) s.push(f & 255), f >>= 8
	}
	for (var u = 0; e[u] === i && u < e.length - 1; ++u) s.push(0);
	return typeof Buffer < "u" ? Buffer.from(s.reverse()) : new Uint8Array(s.reverse())
};

function Ds(e, t) {
	var a = 0,
		r = t.length,
		n = t.charAt(0),
		i = [0];
	for (a = 0; a < e.length(); ++a) {
		for (var s = 0, o = e.at(a); s < i.length; ++s) o += i[s] << 8, i[s] = o % r, o = o / r | 0;
		for (; o > 0;) i.push(o % r), o = o / r | 0
	}
	var l = "";
	for (a = 0; e.at(a) === 0 && a < e.length() - 1; ++a) l += n;
	for (a = i.length - 1; a >= 0; --a) l += t[i[a]];
	return l
}
var Cn = le,
	En = _s,
	_ = Cn.util = Cn.util || {};
(function () {
	if (typeof process < "u" && process.nextTick && !process.browser) {
		_.nextTick = process.nextTick, typeof setImmediate == "function" ? _.setImmediate = setImmediate : _.setImmediate = _.nextTick;
		return
	}
	if (typeof setImmediate == "function") {
		_.setImmediate = function () {
			return setImmediate.apply(void 0, arguments)
		}, _.nextTick = function (s) {
			return setImmediate(s)
		};
		return
	}
	if (_.setImmediate = function (s) {
			setTimeout(s, 0)
		}, typeof window < "u" && typeof window.postMessage == "function") {
		let s = function (o) {
			if (o.source === window && o.data === e) {
				o.stopPropagation();
				var l = t.slice();
				t.length = 0, l.forEach(function (f) {
					f()
				})
			}
		};
		var e = "forge.setImmediate",
			t = [];
		_.setImmediate = function (o) {
			t.push(o), t.length === 1 && window.postMessage(e, "*")
		}, window.addEventListener("message", s, !0)
	}
	if (typeof MutationObserver < "u") {
		var a = Date.now(),
			r = !0,
			n = document.createElement("div"),
			t = [];
		new MutationObserver(function () {
			var o = t.slice();
			t.length = 0, o.forEach(function (l) {
				l()
			})
		}).observe(n, {
			attributes: !0
		});
		var i = _.setImmediate;
		_.setImmediate = function (o) {
			Date.now() - a > 15 ? (a = Date.now(), i(o)) : (t.push(o), t.length === 1 && n.setAttribute("a", r = !r))
		}
	}
	_.nextTick = _.setImmediate
})();
_.isNodejs = typeof process < "u" && process.versions && process.versions.node;
_.globalScope = function () {
	return _.isNodejs ? ue : typeof self > "u" ? window : self
}();
_.isArray = Array.isArray || function (e) {
	return Object.prototype.toString.call(e) === "[object Array]"
};
_.isArrayBuffer = function (e) {
	return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer
};
_.isArrayBufferView = function (e) {
	return e && _.isArrayBuffer(e.buffer) && e.byteLength !== void 0
};

function gr(e) {
	if (!(e === 8 || e === 16 || e === 24 || e === 32)) throw new Error("Only 8, 16, 24, or 32 bits supported: " + e)
}
_.ByteBuffer = oa;

function oa(e) {
	if (this.data = "", this.read = 0, typeof e == "string") this.data = e;
	else if (_.isArrayBuffer(e) || _.isArrayBufferView(e))
		if (typeof Buffer < "u" && e instanceof Buffer) this.data = e.toString("binary");
		else {
			var t = new Uint8Array(e);
			try {
				this.data = String.fromCharCode.apply(null, t)
			} catch {
				for (var a = 0; a < t.length; ++a) this.putByte(t[a])
			}
		}
	else(e instanceof oa || typeof e == "object" && typeof e.data == "string" && typeof e.read == "number") && (this.data = e.data, this.read = e.read);
	this._constructedStringLength = 0
}
_.ByteStringBuffer = oa;
var Ns = 4096;
_.ByteStringBuffer.prototype._optimizeConstructedString = function (e) {
	this._constructedStringLength += e, this._constructedStringLength > Ns && (this.data.substr(0, 1), this._constructedStringLength = 0)
};
_.ByteStringBuffer.prototype.length = function () {
	return this.data.length - this.read
};
_.ByteStringBuffer.prototype.isEmpty = function () {
	return this.length() <= 0
};
_.ByteStringBuffer.prototype.putByte = function (e) {
	return this.putBytes(String.fromCharCode(e))
};
_.ByteStringBuffer.prototype.fillWithByte = function (e, t) {
	e = String.fromCharCode(e);
	for (var a = this.data; t > 0;) t & 1 && (a += e), t >>>= 1, t > 0 && (e += e);
	return this.data = a, this._optimizeConstructedString(t), this
};
_.ByteStringBuffer.prototype.putBytes = function (e) {
	return this.data += e, this._optimizeConstructedString(e.length), this
};
_.ByteStringBuffer.prototype.putString = function (e) {
	return this.putBytes(_.encodeUtf8(e))
};
_.ByteStringBuffer.prototype.putInt16 = function (e) {
	return this.putBytes(String.fromCharCode(e >> 8 & 255) + String.fromCharCode(e & 255))
};
_.ByteStringBuffer.prototype.putInt24 = function (e) {
	return this.putBytes(String.fromCharCode(e >> 16 & 255) + String.fromCharCode(e >> 8 & 255) + String.fromCharCode(e & 255))
};
_.ByteStringBuffer.prototype.putInt32 = function (e) {
	return this.putBytes(String.fromCharCode(e >> 24 & 255) + String.fromCharCode(e >> 16 & 255) + String.fromCharCode(e >> 8 & 255) + String.fromCharCode(e & 255))
};
_.ByteStringBuffer.prototype.putInt16Le = function (e) {
	return this.putBytes(String.fromCharCode(e & 255) + String.fromCharCode(e >> 8 & 255))
};
_.ByteStringBuffer.prototype.putInt24Le = function (e) {
	return this.putBytes(String.fromCharCode(e & 255) + String.fromCharCode(e >> 8 & 255) + String.fromCharCode(e >> 16 & 255))
};
_.ByteStringBuffer.prototype.putInt32Le = function (e) {
	return this.putBytes(String.fromCharCode(e & 255) + String.fromCharCode(e >> 8 & 255) + String.fromCharCode(e >> 16 & 255) + String.fromCharCode(e >> 24 & 255))
};
_.ByteStringBuffer.prototype.putInt = function (e, t) {
	gr(t);
	var a = "";
	do t -= 8, a += String.fromCharCode(e >> t & 255); while (t > 0);
	return this.putBytes(a)
};
_.ByteStringBuffer.prototype.putSignedInt = function (e, t) {
	return e < 0 && (e += 2 << t - 1), this.putInt(e, t)
};
_.ByteStringBuffer.prototype.putBuffer = function (e) {
	return this.putBytes(e.getBytes())
};
_.ByteStringBuffer.prototype.getByte = function () {
	return this.data.charCodeAt(this.read++)
};
_.ByteStringBuffer.prototype.getInt16 = function () {
	var e = this.data.charCodeAt(this.read) << 8 ^ this.data.charCodeAt(this.read + 1);
	return this.read += 2, e
};
_.ByteStringBuffer.prototype.getInt24 = function () {
	var e = this.data.charCodeAt(this.read) << 16 ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2);
	return this.read += 3, e
};
_.ByteStringBuffer.prototype.getInt32 = function () {
	var e = this.data.charCodeAt(this.read) << 24 ^ this.data.charCodeAt(this.read + 1) << 16 ^ this.data.charCodeAt(this.read + 2) << 8 ^ this.data.charCodeAt(this.read + 3);
	return this.read += 4, e
};
_.ByteStringBuffer.prototype.getInt16Le = function () {
	var e = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8;
	return this.read += 2, e
};
_.ByteStringBuffer.prototype.getInt24Le = function () {
	var e = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16;
	return this.read += 3, e
};
_.ByteStringBuffer.prototype.getInt32Le = function () {
	var e = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16 ^ this.data.charCodeAt(this.read + 3) << 24;
	return this.read += 4, e
};
_.ByteStringBuffer.prototype.getInt = function (e) {
	gr(e);
	var t = 0;
	do t = (t << 8) + this.data.charCodeAt(this.read++), e -= 8; while (e > 0);
	return t
};
_.ByteStringBuffer.prototype.getSignedInt = function (e) {
	var t = this.getInt(e),
		a = 2 << e - 2;
	return t >= a && (t -= a << 1), t
};
_.ByteStringBuffer.prototype.getBytes = function (e) {
	var t;
	return e ? (e = Math.min(this.length(), e), t = this.data.slice(this.read, this.read + e), this.read += e) : e === 0 ? t = "" : (t = this.read === 0 ? this.data : this.data.slice(this.read), this.clear()), t
};
_.ByteStringBuffer.prototype.bytes = function (e) {
	return typeof e > "u" ? this.data.slice(this.read) : this.data.slice(this.read, this.read + e)
};
_.ByteStringBuffer.prototype.at = function (e) {
	return this.data.charCodeAt(this.read + e)
};
_.ByteStringBuffer.prototype.setAt = function (e, t) {
	return this.data = this.data.substr(0, this.read + e) + String.fromCharCode(t) + this.data.substr(this.read + e + 1), this
};
_.ByteStringBuffer.prototype.last = function () {
	return this.data.charCodeAt(this.data.length - 1)
};
_.ByteStringBuffer.prototype.copy = function () {
	var e = _.createBuffer(this.data);
	return e.read = this.read, e
};
_.ByteStringBuffer.prototype.compact = function () {
	return this.read > 0 && (this.data = this.data.slice(this.read), this.read = 0), this
};
_.ByteStringBuffer.prototype.clear = function () {
	return this.data = "", this.read = 0, this
};
_.ByteStringBuffer.prototype.truncate = function (e) {
	var t = Math.max(0, this.length() - e);
	return this.data = this.data.substr(this.read, t), this.read = 0, this
};
_.ByteStringBuffer.prototype.toHex = function () {
	for (var e = "", t = this.read; t < this.data.length; ++t) {
		var a = this.data.charCodeAt(t);
		a < 16 && (e += "0"), e += a.toString(16)
	}
	return e
};
_.ByteStringBuffer.prototype.toString = function () {
	return _.decodeUtf8(this.bytes())
};

function Fs(e, t) {
	t = t || {}, this.read = t.readOffset || 0, this.growSize = t.growSize || 1024;
	var a = _.isArrayBuffer(e),
		r = _.isArrayBufferView(e);
	if (a || r) {
		a ? this.data = new DataView(e) : this.data = new DataView(e.buffer, e.byteOffset, e.byteLength), this.write = "writeOffset" in t ? t.writeOffset : this.data.byteLength;
		return
	}
	this.data = new DataView(new ArrayBuffer(0)), this.write = 0, e != null && this.putBytes(e), "writeOffset" in t && (this.write = t.writeOffset)
}
_.DataBuffer = Fs;
_.DataBuffer.prototype.length = function () {
	return this.write - this.read
};
_.DataBuffer.prototype.isEmpty = function () {
	return this.length() <= 0
};
_.DataBuffer.prototype.accommodate = function (e, t) {
	if (this.length() >= e) return this;
	t = Math.max(t || this.growSize, e);
	var a = new Uint8Array(this.data.buffer, this.data.byteOffset, this.data.byteLength),
		r = new Uint8Array(this.length() + t);
	return r.set(a), this.data = new DataView(r.buffer), this
};
_.DataBuffer.prototype.putByte = function (e) {
	return this.accommodate(1), this.data.setUint8(this.write++, e), this
};
_.DataBuffer.prototype.fillWithByte = function (e, t) {
	this.accommodate(t);
	for (var a = 0; a < t; ++a) this.data.setUint8(e);
	return this
};
_.DataBuffer.prototype.putBytes = function (e, t) {
	if (_.isArrayBufferView(e)) {
		var a = new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
			r = a.byteLength - a.byteOffset;
		this.accommodate(r);
		var n = new Uint8Array(this.data.buffer, this.write);
		return n.set(a), this.write += r, this
	}
	if (_.isArrayBuffer(e)) {
		var a = new Uint8Array(e);
		this.accommodate(a.byteLength);
		var n = new Uint8Array(this.data.buffer);
		return n.set(a, this.write), this.write += a.byteLength, this
	}
	if (e instanceof _.DataBuffer || typeof e == "object" && typeof e.read == "number" && typeof e.write == "number" && _.isArrayBufferView(e.data)) {
		var a = new Uint8Array(e.data.byteLength, e.read, e.length());
		this.accommodate(a.byteLength);
		var n = new Uint8Array(e.data.byteLength, this.write);
		return n.set(a), this.write += a.byteLength, this
	}
	if (e instanceof _.ByteStringBuffer && (e = e.data, t = "binary"), t = t || "binary", typeof e == "string") {
		var i;
		if (t === "hex") return this.accommodate(Math.ceil(e.length / 2)), i = new Uint8Array(this.data.buffer, this.write), this.write += _.binary.hex.decode(e, i, this.write), this;
		if (t === "base64") return this.accommodate(Math.ceil(e.length / 4) * 3), i = new Uint8Array(this.data.buffer, this.write), this.write += _.binary.base64.decode(e, i, this.write), this;
		if (t === "utf8" && (e = _.encodeUtf8(e), t = "binary"), t === "binary" || t === "raw") return this.accommodate(e.length), i = new Uint8Array(this.data.buffer, this.write), this.write += _.binary.raw.decode(i), this;
		if (t === "utf16") return this.accommodate(e.length * 2), i = new Uint16Array(this.data.buffer, this.write), this.write += _.text.utf16.encode(i), this;
		throw new Error("Invalid encoding: " + t)
	}
	throw Error("Invalid parameter: " + e)
};
_.DataBuffer.prototype.putBuffer = function (e) {
	return this.putBytes(e), e.clear(), this
};
_.DataBuffer.prototype.putString = function (e) {
	return this.putBytes(e, "utf16")
};
_.DataBuffer.prototype.putInt16 = function (e) {
	return this.accommodate(2), this.data.setInt16(this.write, e), this.write += 2, this
};
_.DataBuffer.prototype.putInt24 = function (e) {
	return this.accommodate(3), this.data.setInt16(this.write, e >> 8 & 65535), this.data.setInt8(this.write, e >> 16 & 255), this.write += 3, this
};
_.DataBuffer.prototype.putInt32 = function (e) {
	return this.accommodate(4), this.data.setInt32(this.write, e), this.write += 4, this
};
_.DataBuffer.prototype.putInt16Le = function (e) {
	return this.accommodate(2), this.data.setInt16(this.write, e, !0), this.write += 2, this
};
_.DataBuffer.prototype.putInt24Le = function (e) {
	return this.accommodate(3), this.data.setInt8(this.write, e >> 16 & 255), this.data.setInt16(this.write, e >> 8 & 65535, !0), this.write += 3, this
};
_.DataBuffer.prototype.putInt32Le = function (e) {
	return this.accommodate(4), this.data.setInt32(this.write, e, !0), this.write += 4, this
};
_.DataBuffer.prototype.putInt = function (e, t) {
	gr(t), this.accommodate(t / 8);
	do t -= 8, this.data.setInt8(this.write++, e >> t & 255); while (t > 0);
	return this
};
_.DataBuffer.prototype.putSignedInt = function (e, t) {
	return gr(t), this.accommodate(t / 8), e < 0 && (e += 2 << t - 1), this.putInt(e, t)
};
_.DataBuffer.prototype.getByte = function () {
	return this.data.getInt8(this.read++)
};
_.DataBuffer.prototype.getInt16 = function () {
	var e = this.data.getInt16(this.read);
	return this.read += 2, e
};
_.DataBuffer.prototype.getInt24 = function () {
	var e = this.data.getInt16(this.read) << 8 ^ this.data.getInt8(this.read + 2);
	return this.read += 3, e
};
_.DataBuffer.prototype.getInt32 = function () {
	var e = this.data.getInt32(this.read);
	return this.read += 4, e
};
_.DataBuffer.prototype.getInt16Le = function () {
	var e = this.data.getInt16(this.read, !0);
	return this.read += 2, e
};
_.DataBuffer.prototype.getInt24Le = function () {
	var e = this.data.getInt8(this.read) ^ this.data.getInt16(this.read + 1, !0) << 8;
	return this.read += 3, e
};
_.DataBuffer.prototype.getInt32Le = function () {
	var e = this.data.getInt32(this.read, !0);
	return this.read += 4, e
};
_.DataBuffer.prototype.getInt = function (e) {
	gr(e);
	var t = 0;
	do t = (t << 8) + this.data.getInt8(this.read++), e -= 8; while (e > 0);
	return t
};
_.DataBuffer.prototype.getSignedInt = function (e) {
	var t = this.getInt(e),
		a = 2 << e - 2;
	return t >= a && (t -= a << 1), t
};
_.DataBuffer.prototype.getBytes = function (e) {
	var t;
	return e ? (e = Math.min(this.length(), e), t = this.data.slice(this.read, this.read + e), this.read += e) : e === 0 ? t = "" : (t = this.read === 0 ? this.data : this.data.slice(this.read), this.clear()), t
};
_.DataBuffer.prototype.bytes = function (e) {
	return typeof e > "u" ? this.data.slice(this.read) : this.data.slice(this.read, this.read + e)
};
_.DataBuffer.prototype.at = function (e) {
	return this.data.getUint8(this.read + e)
};
_.DataBuffer.prototype.setAt = function (e, t) {
	return this.data.setUint8(e, t), this
};
_.DataBuffer.prototype.last = function () {
	return this.data.getUint8(this.write - 1)
};
_.DataBuffer.prototype.copy = function () {
	return new _.DataBuffer(this)
};
_.DataBuffer.prototype.compact = function () {
	if (this.read > 0) {
		var e = new Uint8Array(this.data.buffer, this.read),
			t = new Uint8Array(e.byteLength);
		t.set(e), this.data = new DataView(t), this.write -= this.read, this.read = 0
	}
	return this
};
_.DataBuffer.prototype.clear = function () {
	return this.data = new DataView(new ArrayBuffer(0)), this.read = this.write = 0, this
};
_.DataBuffer.prototype.truncate = function (e) {
	return this.write = Math.max(0, this.length() - e), this.read = Math.min(this.read, this.write), this
};
_.DataBuffer.prototype.toHex = function () {
	for (var e = "", t = this.read; t < this.data.byteLength; ++t) {
		var a = this.data.getUint8(t);
		a < 16 && (e += "0"), e += a.toString(16)
	}
	return e
};
_.DataBuffer.prototype.toString = function (e) {
	var t = new Uint8Array(this.data, this.read, this.length());
	if (e = e || "utf8", e === "binary" || e === "raw") return _.binary.raw.encode(t);
	if (e === "hex") return _.binary.hex.encode(t);
	if (e === "base64") return _.binary.base64.encode(t);
	if (e === "utf8") return _.text.utf8.decode(t);
	if (e === "utf16") return _.text.utf16.decode(t);
	throw new Error("Invalid encoding: " + e)
};
_.createBuffer = function (e, t) {
	return t = t || "raw", e !== void 0 && t === "utf8" && (e = _.encodeUtf8(e)), new _.ByteBuffer(e)
};
_.fillString = function (e, t) {
	for (var a = ""; t > 0;) t & 1 && (a += e), t >>>= 1, t > 0 && (e += e);
	return a
};
_.xorBytes = function (e, t, a) {
	for (var r = "", n = "", i = "", s = 0, o = 0; a > 0; --a, ++s) n = e.charCodeAt(s) ^ t.charCodeAt(s), o >= 10 && (r += i, i = "", o = 0), i += String.fromCharCode(n), ++o;
	return r += i, r
};
_.hexToBytes = function (e) {
	var t = "",
		a = 0;
	for (e.length & !0 && (a = 1, t += String.fromCharCode(parseInt(e[0], 16))); a < e.length; a += 2) t += String.fromCharCode(parseInt(e.substr(a, 2), 16));
	return t
};
_.bytesToHex = function (e) {
	return _.createBuffer(e).toHex()
};
_.int32ToBytes = function (e) {
	return String.fromCharCode(e >> 24 & 255) + String.fromCharCode(e >> 16 & 255) + String.fromCharCode(e >> 8 & 255) + String.fromCharCode(e & 255)
};
var bt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	It = [62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 64, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
	Yn = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
_.encode64 = function (e, t) {
	for (var a = "", r = "", n, i, s, o = 0; o < e.length;) n = e.charCodeAt(o++), i = e.charCodeAt(o++), s = e.charCodeAt(o++), a += bt.charAt(n >> 2), a += bt.charAt((n & 3) << 4 | i >> 4), isNaN(i) ? a += "==" : (a += bt.charAt((i & 15) << 2 | s >> 6), a += isNaN(s) ? "=" : bt.charAt(s & 63)), t && a.length > t && (r += a.substr(0, t) + `\r
`, a = a.substr(t));
	return r += a, r
};
_.decode64 = function (e) {
	e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
	for (var t = "", a, r, n, i, s = 0; s < e.length;) a = It[e.charCodeAt(s++) - 43], r = It[e.charCodeAt(s++) - 43], n = It[e.charCodeAt(s++) - 43], i = It[e.charCodeAt(s++) - 43], t += String.fromCharCode(a << 2 | r >> 4), n !== 64 && (t += String.fromCharCode((r & 15) << 4 | n >> 2), i !== 64 && (t += String.fromCharCode((n & 3) << 6 | i)));
	return t
};
_.encodeUtf8 = function (e) {
	return unescape(encodeURIComponent(e))
};
_.decodeUtf8 = function (e) {
	return decodeURIComponent(escape(e))
};
_.binary = {
	raw: {},
	hex: {},
	base64: {},
	base58: {},
	baseN: {
		encode: En.encode,
		decode: En.decode
	}
};
_.binary.raw.encode = function (e) {
	return String.fromCharCode.apply(null, e)
};
_.binary.raw.decode = function (e, t, a) {
	var r = t;
	r || (r = new Uint8Array(e.length)), a = a || 0;
	for (var n = a, i = 0; i < e.length; ++i) r[n++] = e.charCodeAt(i);
	return t ? n - a : r
};
_.binary.hex.encode = _.bytesToHex;
_.binary.hex.decode = function (e, t, a) {
	var r = t;
	r || (r = new Uint8Array(Math.ceil(e.length / 2))), a = a || 0;
	var n = 0,
		i = a;
	for (e.length & 1 && (n = 1, r[i++] = parseInt(e[0], 16)); n < e.length; n += 2) r[i++] = parseInt(e.substr(n, 2), 16);
	return t ? i - a : r
};
_.binary.base64.encode = function (e, t) {
	for (var a = "", r = "", n, i, s, o = 0; o < e.byteLength;) n = e[o++], i = e[o++], s = e[o++], a += bt.charAt(n >> 2), a += bt.charAt((n & 3) << 4 | i >> 4), isNaN(i) ? a += "==" : (a += bt.charAt((i & 15) << 2 | s >> 6), a += isNaN(s) ? "=" : bt.charAt(s & 63)), t && a.length > t && (r += a.substr(0, t) + `\r
`, a = a.substr(t));
	return r += a, r
};
_.binary.base64.decode = function (e, t, a) {
	var r = t;
	r || (r = new Uint8Array(Math.ceil(e.length / 4) * 3)), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""), a = a || 0;
	for (var n, i, s, o, l = 0, f = a; l < e.length;) n = It[e.charCodeAt(l++) - 43], i = It[e.charCodeAt(l++) - 43], s = It[e.charCodeAt(l++) - 43], o = It[e.charCodeAt(l++) - 43], r[f++] = n << 2 | i >> 4, s !== 64 && (r[f++] = (i & 15) << 4 | s >> 2, o !== 64 && (r[f++] = (s & 3) << 6 | o));
	return t ? f - a : r.subarray(0, f)
};
_.binary.base58.encode = function (e, t) {
	return _.binary.baseN.encode(e, Yn, t)
};
_.binary.base58.decode = function (e, t) {
	return _.binary.baseN.decode(e, Yn, t)
};
_.text = {
	utf8: {},
	utf16: {}
};
_.text.utf8.encode = function (e, t, a) {
	e = _.encodeUtf8(e);
	var r = t;
	r || (r = new Uint8Array(e.length)), a = a || 0;
	for (var n = a, i = 0; i < e.length; ++i) r[n++] = e.charCodeAt(i);
	return t ? n - a : r
};
_.text.utf8.decode = function (e) {
	return _.decodeUtf8(String.fromCharCode.apply(null, e))
};
_.text.utf16.encode = function (e, t, a) {
	var r = t;
	r || (r = new Uint8Array(e.length * 2));
	var n = new Uint16Array(r.buffer);
	a = a || 0;
	for (var i = a, s = a, o = 0; o < e.length; ++o) n[s++] = e.charCodeAt(o), i += 2;
	return t ? i - a : r
};
_.text.utf16.decode = function (e) {
	return String.fromCharCode.apply(null, new Uint16Array(e.buffer))
};
_.deflate = function (e, t, a) {
	if (t = _.decode64(e.deflate(_.encode64(t)).rval), a) {
		var r = 2,
			n = t.charCodeAt(1);
		n & 32 && (r = 6), t = t.substring(r, t.length - 4)
	}
	return t
};
_.inflate = function (e, t, a) {
	var r = e.inflate(_.encode64(t)).rval;
	return r === null ? null : _.decode64(r)
};
var fa = function (e, t, a) {
		if (!e) throw new Error("WebStorage not available.");
		var r;
		if (a === null ? r = e.removeItem(t) : (a = _.encode64(JSON.stringify(a)), r = e.setItem(t, a)), typeof r < "u" && r.rval !== !0) {
			var n = new Error(r.error.message);
			throw n.id = r.error.id, n.name = r.error.name, n
		}
	},
	ua = function (e, t) {
		if (!e) throw new Error("WebStorage not available.");
		var a = e.getItem(t);
		if (e.init)
			if (a.rval === null) {
				if (a.error) {
					var r = new Error(a.error.message);
					throw r.id = a.error.id, r.name = a.error.name, r
				}
				a = null
			} else a = a.rval;
		return a !== null && (a = JSON.parse(_.decode64(a))), a
	},
	Rs = function (e, t, a, r) {
		var n = ua(e, t);
		n === null && (n = {}), n[a] = r, fa(e, t, n)
	},
	ws = function (e, t, a) {
		var r = ua(e, t);
		return r !== null && (r = a in r ? r[a] : null), r
	},
	ks = function (e, t, a) {
		var r = ua(e, t);
		if (r !== null && a in r) {
			delete r[a];
			var n = !0;
			for (var i in r) {
				n = !1;
				break
			}
			n && (r = null), fa(e, t, r)
		}
	},
	Ls = function (e, t) {
		fa(e, t, null)
	},
	Mr = function (e, t, a) {
		var r = null;
		typeof a > "u" && (a = ["web", "flash"]);
		var n, i = !1,
			s = null;
		for (var o in a) {
			n = a[o];
			try {
				if (n === "flash" || n === "both") {
					if (t[0] === null) throw new Error("Flash local storage not available.");
					r = e.apply(this, t), i = n === "flash"
				}(n === "web" || n === "both") && (t[0] = localStorage, r = e.apply(this, t), i = !0)
			} catch (l) {
				s = l
			}
			if (i) break
		}
		if (!i) throw s;
		return r
	};
_.setItem = function (e, t, a, r, n) {
	Mr(Rs, arguments, n)
};
_.getItem = function (e, t, a, r) {
	return Mr(ws, arguments, r)
};
_.removeItem = function (e, t, a, r) {
	Mr(ks, arguments, r)
};
_.clearItems = function (e, t, a) {
	Mr(Ls, arguments, a)
};
_.isEmpty = function (e) {
	for (var t in e)
		if (e.hasOwnProperty(t)) return !1;
	return !0
};
_.format = function (e) {
	for (var t = /%./g, a, r, n = 0, i = [], s = 0; a = t.exec(e);) {
		r = e.substring(s, t.lastIndex - 2), r.length > 0 && i.push(r), s = t.lastIndex;
		var o = a[0][1];
		switch (o) {
			case "s":
			case "o":
				n < arguments.length ? i.push(arguments[n++ + 1]) : i.push("<?>");
				break;
			case "%":
				i.push("%");
				break;
			default:
				i.push("<%" + o + "?>")
		}
	}
	return i.push(e.substring(s)), i.join("")
};
_.formatNumber = function (e, t, a, r) {
	var n = e,
		i = isNaN(t = Math.abs(t)) ? 2 : t,
		s = a === void 0 ? "," : a,
		o = r === void 0 ? "." : r,
		l = n < 0 ? "-" : "",
		f = parseInt(n = Math.abs(+n || 0).toFixed(i), 10) + "",
		u = f.length > 3 ? f.length % 3 : 0;
	return l + (u ? f.substr(0, u) + o : "") + f.substr(u).replace(/(\d{3})(?=\d)/g, "$1" + o) + (i ? s + Math.abs(n - f).toFixed(i).slice(2) : "")
};
_.formatSize = function (e) {
	return e >= 1073741824 ? e = _.formatNumber(e / 1073741824, 2, ".", "") + " GiB" : e >= 1048576 ? e = _.formatNumber(e / 1048576, 2, ".", "") + " MiB" : e >= 1024 ? e = _.formatNumber(e / 1024, 0) + " KiB" : e = _.formatNumber(e, 0) + " bytes", e
};
_.bytesFromIP = function (e) {
	return e.indexOf(".") !== -1 ? _.bytesFromIPv4(e) : e.indexOf(":") !== -1 ? _.bytesFromIPv6(e) : null
};
_.bytesFromIPv4 = function (e) {
	if (e = e.split("."), e.length !== 4) return null;
	for (var t = _.createBuffer(), a = 0; a < e.length; ++a) {
		var r = parseInt(e[a], 10);
		if (isNaN(r)) return null;
		t.putByte(r)
	}
	return t.getBytes()
};
_.bytesFromIPv6 = function (e) {
	var t = 0;
	e = e.split(":").filter(function (s) {
		return s.length === 0 && ++t, !0
	});
	for (var a = (8 - e.length + t) * 2, r = _.createBuffer(), n = 0; n < 8; ++n) {
		if (!e[n] || e[n].length === 0) {
			r.fillWithByte(0, a), a = 0;
			continue
		}
		var i = _.hexToBytes(e[n]);
		i.length < 2 && r.putByte(0), r.putBytes(i)
	}
	return r.getBytes()
};
_.bytesToIP = function (e) {
	return e.length === 4 ? _.bytesToIPv4(e) : e.length === 16 ? _.bytesToIPv6(e) : null
};
_.bytesToIPv4 = function (e) {
	if (e.length !== 4) return null;
	for (var t = [], a = 0; a < e.length; ++a) t.push(e.charCodeAt(a));
	return t.join(".")
};
_.bytesToIPv6 = function (e) {
	if (e.length !== 16) return null;
	for (var t = [], a = [], r = 0, n = 0; n < e.length; n += 2) {
		for (var i = _.bytesToHex(e[n] + e[n + 1]); i[0] === "0" && i !== "0";) i = i.substr(1);
		if (i === "0") {
			var s = a[a.length - 1],
				o = t.length;
			!s || o !== s.end + 1 ? a.push({
				start: o,
				end: o
			}) : (s.end = o, s.end - s.start > a[r].end - a[r].start && (r = a.length - 1))
		}
		t.push(i)
	}
	if (a.length > 0) {
		var l = a[r];
		l.end - l.start > 0 && (t.splice(l.start, l.end - l.start + 1, ""), l.start === 0 && t.unshift(""), l.end === 7 && t.push(""))
	}
	return t.join(":")
};
_.estimateCores = function (e, t) {
	if (typeof e == "function" && (t = e, e = {}), e = e || {}, "cores" in _ && !e.update) return t(null, _.cores);
	if (typeof navigator < "u" && "hardwareConcurrency" in navigator && navigator.hardwareConcurrency > 0) return _.cores = navigator.hardwareConcurrency, t(null, _.cores);
	if (typeof Worker > "u") return _.cores = 1, t(null, _.cores);
	if (typeof Blob > "u") return _.cores = 2, t(null, _.cores);
	var a = URL.createObjectURL(new Blob(["(", (function () {
		self.addEventListener("message", function (s) {
			var o = Date.now(),
				l = o + 4;
			self.postMessage({
				st: o,
				et: l
			})
		})
	}).toString(), ")()"], {
		type: "application/javascript"
	}));
	r([], 5, 16);

	function r(s, o, l) {
		if (o === 0) {
			var f = Math.floor(s.reduce(function (u, c) {
				return u + c
			}, 0) / s.length);
			return _.cores = Math.max(1, f), URL.revokeObjectURL(a), t(null, _.cores)
		}
		n(l, function (u, c) {
			s.push(i(l, c)), r(s, o - 1, l)
		})
	}

	function n(s, o) {
		for (var l = [], f = [], u = 0; u < s; ++u) {
			var c = new Worker(a);
			c.addEventListener("message", function (h) {
				if (f.push(h.data), f.length === s) {
					for (var x = 0; x < s; ++x) l[x].terminate();
					o(null, f)
				}
			}), l.push(c)
		}
		for (var u = 0; u < s; ++u) l[u].postMessage(u)
	}

	function i(s, o) {
		for (var l = [], f = 0; f < s; ++f)
			for (var u = o[f], c = l[f] = [], h = 0; h < s; ++h)
				if (f !== h) {
					var x = o[h];
					(u.st > x.st && u.st < x.et || x.st > u.st && x.st < u.et) && c.push(h)
				} return l.reduce(function (d, g) {
			return Math.max(d, g.length)
		}, 0)
	}
};
var He = le;
He.cipher = He.cipher || {};
He.cipher.algorithms = He.cipher.algorithms || {};
He.cipher.createCipher = function (e, t) {
	var a = e;
	if (typeof a == "string" && (a = He.cipher.getAlgorithm(a), a && (a = a())), !a) throw new Error("Unsupported algorithm: " + e);
	return new He.cipher.BlockCipher({
		algorithm: a,
		key: t,
		decrypt: !1
	})
};
He.cipher.createDecipher = function (e, t) {
	var a = e;
	if (typeof a == "string" && (a = He.cipher.getAlgorithm(a), a && (a = a())), !a) throw new Error("Unsupported algorithm: " + e);
	return new He.cipher.BlockCipher({
		algorithm: a,
		key: t,
		decrypt: !0
	})
};
He.cipher.registerAlgorithm = function (e, t) {
	e = e.toUpperCase(), He.cipher.algorithms[e] = t
};
He.cipher.getAlgorithm = function (e) {
	return e = e.toUpperCase(), e in He.cipher.algorithms ? He.cipher.algorithms[e] : null
};
var la = He.cipher.BlockCipher = function (e) {
	this.algorithm = e.algorithm, this.mode = this.algorithm.mode, this.blockSize = this.mode.blockSize, this._finish = !1, this._input = null, this.output = null, this._op = e.decrypt ? this.mode.decrypt : this.mode.encrypt, this._decrypt = e.decrypt, this.algorithm.initialize(e)
};
la.prototype.start = function (e) {
	e = e || {};
	var t = {};
	for (var a in e) t[a] = e[a];
	t.decrypt = this._decrypt, this._finish = !1, this._input = He.util.createBuffer(), this.output = e.output || He.util.createBuffer(), this.mode.start(t)
};
la.prototype.update = function (e) {
	for (e && this._input.putBuffer(e); !this._op.call(this.mode, this._input, this.output, this._finish) && !this._finish;);
	this._input.compact()
};
la.prototype.finish = function (e) {
	e && (this.mode.name === "ECB" || this.mode.name === "CBC") && (this.mode.pad = function (a) {
		return e(this.blockSize, a, !1)
	}, this.mode.unpad = function (a) {
		return e(this.blockSize, a, !0)
	});
	var t = {};
	return t.decrypt = this._decrypt, t.overflow = this._input.length() % this.blockSize, !(!this._decrypt && this.mode.pad && !this.mode.pad(this._input, t) || (this._finish = !0, this.update(), this._decrypt && this.mode.unpad && !this.mode.unpad(this.output, t)) || this.mode.afterFinish && !this.mode.afterFinish(this.output, t))
};
var Ke = le;
Ke.cipher = Ke.cipher || {};
var xe = Ke.cipher.modes = Ke.cipher.modes || {};
xe.ecb = function (e) {
	e = e || {}, this.name = "ECB", this.cipher = e.cipher, this.blockSize = e.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = new Array(this._ints), this._outBlock = new Array(this._ints)
};
xe.ecb.prototype.start = function (e) {};
xe.ecb.prototype.encrypt = function (e, t, a) {
	if (e.length() < this.blockSize && !(a && e.length() > 0)) return !0;
	for (var r = 0; r < this._ints; ++r) this._inBlock[r] = e.getInt32();
	this.cipher.encrypt(this._inBlock, this._outBlock);
	for (var r = 0; r < this._ints; ++r) t.putInt32(this._outBlock[r])
};
xe.ecb.prototype.decrypt = function (e, t, a) {
	if (e.length() < this.blockSize && !(a && e.length() > 0)) return !0;
	for (var r = 0; r < this._ints; ++r) this._inBlock[r] = e.getInt32();
	this.cipher.decrypt(this._inBlock, this._outBlock);
	for (var r = 0; r < this._ints; ++r) t.putInt32(this._outBlock[r])
};
xe.ecb.prototype.pad = function (e, t) {
	var a = e.length() === this.blockSize ? this.blockSize : this.blockSize - e.length();
	return e.fillWithByte(a, a), !0
};
xe.ecb.prototype.unpad = function (e, t) {
	if (t.overflow > 0) return !1;
	var a = e.length(),
		r = e.at(a - 1);
	return r > this.blockSize << 2 ? !1 : (e.truncate(r), !0)
};
xe.cbc = function (e) {
	e = e || {}, this.name = "CBC", this.cipher = e.cipher, this.blockSize = e.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = new Array(this._ints), this._outBlock = new Array(this._ints)
};
xe.cbc.prototype.start = function (e) {
	if (e.iv === null) {
		if (!this._prev) throw new Error("Invalid IV parameter.");
		this._iv = this._prev.slice(0)
	} else if ("iv" in e) this._iv = qr(e.iv, this.blockSize), this._prev = this._iv.slice(0);
	else throw new Error("Invalid IV parameter.")
};
xe.cbc.prototype.encrypt = function (e, t, a) {
	if (e.length() < this.blockSize && !(a && e.length() > 0)) return !0;
	for (var r = 0; r < this._ints; ++r) this._inBlock[r] = this._prev[r] ^ e.getInt32();
	this.cipher.encrypt(this._inBlock, this._outBlock);
	for (var r = 0; r < this._ints; ++r) t.putInt32(this._outBlock[r]);
	this._prev = this._outBlock
};
xe.cbc.prototype.decrypt = function (e, t, a) {
	if (e.length() < this.blockSize && !(a && e.length() > 0)) return !0;
	for (var r = 0; r < this._ints; ++r) this._inBlock[r] = e.getInt32();
	this.cipher.decrypt(this._inBlock, this._outBlock);
	for (var r = 0; r < this._ints; ++r) t.putInt32(this._prev[r] ^ this._outBlock[r]);
	this._prev = this._inBlock.slice(0)
};
xe.cbc.prototype.pad = function (e, t) {
	var a = e.length() === this.blockSize ? this.blockSize : this.blockSize - e.length();
	return e.fillWithByte(a, a), !0
};
xe.cbc.prototype.unpad = function (e, t) {
	if (t.overflow > 0) return !1;
	var a = e.length(),
		r = e.at(a - 1);
	return r > this.blockSize << 2 ? !1 : (e.truncate(r), !0)
};
xe.cfb = function (e) {
	e = e || {}, this.name = "CFB", this.cipher = e.cipher, this.blockSize = e.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = null, this._outBlock = new Array(this._ints), this._partialBlock = new Array(this._ints), this._partialOutput = Ke.util.createBuffer(), this._partialBytes = 0
};
xe.cfb.prototype.start = function (e) {
	if (!("iv" in e)) throw new Error("Invalid IV parameter.");
	this._iv = qr(e.iv, this.blockSize), this._inBlock = this._iv.slice(0), this._partialBytes = 0
};
xe.cfb.prototype.encrypt = function (e, t, a) {
	var r = e.length();
	if (r === 0) return !0;
	if (this.cipher.encrypt(this._inBlock, this._outBlock), this._partialBytes === 0 && r >= this.blockSize) {
		for (var n = 0; n < this._ints; ++n) this._inBlock[n] = e.getInt32() ^ this._outBlock[n], t.putInt32(this._inBlock[n]);
		return
	}
	var i = (this.blockSize - r) % this.blockSize;
	i > 0 && (i = this.blockSize - i), this._partialOutput.clear();
	for (var n = 0; n < this._ints; ++n) this._partialBlock[n] = e.getInt32() ^ this._outBlock[n], this._partialOutput.putInt32(this._partialBlock[n]);
	if (i > 0) e.read -= this.blockSize;
	else
		for (var n = 0; n < this._ints; ++n) this._inBlock[n] = this._partialBlock[n];
	if (this._partialBytes > 0 && this._partialOutput.getBytes(this._partialBytes), i > 0 && !a) return t.putBytes(this._partialOutput.getBytes(i - this._partialBytes)), this._partialBytes = i, !0;
	t.putBytes(this._partialOutput.getBytes(r - this._partialBytes)), this._partialBytes = 0
};
xe.cfb.prototype.decrypt = function (e, t, a) {
	var r = e.length();
	if (r === 0) return !0;
	if (this.cipher.encrypt(this._inBlock, this._outBlock), this._partialBytes === 0 && r >= this.blockSize) {
		for (var n = 0; n < this._ints; ++n) this._inBlock[n] = e.getInt32(), t.putInt32(this._inBlock[n] ^ this._outBlock[n]);
		return
	}
	var i = (this.blockSize - r) % this.blockSize;
	i > 0 && (i = this.blockSize - i), this._partialOutput.clear();
	for (var n = 0; n < this._ints; ++n) this._partialBlock[n] = e.getInt32(), this._partialOutput.putInt32(this._partialBlock[n] ^ this._outBlock[n]);
	if (i > 0) e.read -= this.blockSize;
	else
		for (var n = 0; n < this._ints; ++n) this._inBlock[n] = this._partialBlock[n];
	if (this._partialBytes > 0 && this._partialOutput.getBytes(this._partialBytes), i > 0 && !a) return t.putBytes(this._partialOutput.getBytes(i - this._partialBytes)), this._partialBytes = i, !0;
	t.putBytes(this._partialOutput.getBytes(r - this._partialBytes)), this._partialBytes = 0
};
xe.ofb = function (e) {
	e = e || {}, this.name = "OFB", this.cipher = e.cipher, this.blockSize = e.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = null, this._outBlock = new Array(this._ints), this._partialOutput = Ke.util.createBuffer(), this._partialBytes = 0
};
xe.ofb.prototype.start = function (e) {
	if (!("iv" in e)) throw new Error("Invalid IV parameter.");
	this._iv = qr(e.iv, this.blockSize), this._inBlock = this._iv.slice(0), this._partialBytes = 0
};
xe.ofb.prototype.encrypt = function (e, t, a) {
	var r = e.length();
	if (e.length() === 0) return !0;
	if (this.cipher.encrypt(this._inBlock, this._outBlock), this._partialBytes === 0 && r >= this.blockSize) {
		for (var n = 0; n < this._ints; ++n) t.putInt32(e.getInt32() ^ this._outBlock[n]), this._inBlock[n] = this._outBlock[n];
		return
	}
	var i = (this.blockSize - r) % this.blockSize;
	i > 0 && (i = this.blockSize - i), this._partialOutput.clear();
	for (var n = 0; n < this._ints; ++n) this._partialOutput.putInt32(e.getInt32() ^ this._outBlock[n]);
	if (i > 0) e.read -= this.blockSize;
	else
		for (var n = 0; n < this._ints; ++n) this._inBlock[n] = this._outBlock[n];
	if (this._partialBytes > 0 && this._partialOutput.getBytes(this._partialBytes), i > 0 && !a) return t.putBytes(this._partialOutput.getBytes(i - this._partialBytes)), this._partialBytes = i, !0;
	t.putBytes(this._partialOutput.getBytes(r - this._partialBytes)), this._partialBytes = 0
};
xe.ofb.prototype.decrypt = xe.ofb.prototype.encrypt;
xe.ctr = function (e) {
	e = e || {}, this.name = "CTR", this.cipher = e.cipher, this.blockSize = e.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = null, this._outBlock = new Array(this._ints), this._partialOutput = Ke.util.createBuffer(), this._partialBytes = 0
};
xe.ctr.prototype.start = function (e) {
	if (!("iv" in e)) throw new Error("Invalid IV parameter.");
	this._iv = qr(e.iv, this.blockSize), this._inBlock = this._iv.slice(0), this._partialBytes = 0
};
xe.ctr.prototype.encrypt = function (e, t, a) {
	var r = e.length();
	if (r === 0) return !0;
	if (this.cipher.encrypt(this._inBlock, this._outBlock), this._partialBytes === 0 && r >= this.blockSize)
		for (var n = 0; n < this._ints; ++n) t.putInt32(e.getInt32() ^ this._outBlock[n]);
	else {
		var i = (this.blockSize - r) % this.blockSize;
		i > 0 && (i = this.blockSize - i), this._partialOutput.clear();
		for (var n = 0; n < this._ints; ++n) this._partialOutput.putInt32(e.getInt32() ^ this._outBlock[n]);
		if (i > 0 && (e.read -= this.blockSize), this._partialBytes > 0 && this._partialOutput.getBytes(this._partialBytes), i > 0 && !a) return t.putBytes(this._partialOutput.getBytes(i - this._partialBytes)), this._partialBytes = i, !0;
		t.putBytes(this._partialOutput.getBytes(r - this._partialBytes)), this._partialBytes = 0
	}
	zr(this._inBlock)
};
xe.ctr.prototype.decrypt = xe.ctr.prototype.encrypt;
xe.gcm = function (e) {
	e = e || {}, this.name = "GCM", this.cipher = e.cipher, this.blockSize = e.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = new Array(this._ints), this._outBlock = new Array(this._ints), this._partialOutput = Ke.util.createBuffer(), this._partialBytes = 0, this._R = 3774873600
};
xe.gcm.prototype.start = function (e) {
	if (!("iv" in e)) throw new Error("Invalid IV parameter.");
	var t = Ke.util.createBuffer(e.iv);
	this._cipherLength = 0;
	var a;
	if ("additionalData" in e ? a = Ke.util.createBuffer(e.additionalData) : a = Ke.util.createBuffer(), "tagLength" in e ? this._tagLength = e.tagLength : this._tagLength = 128, this._tag = null, e.decrypt && (this._tag = Ke.util.createBuffer(e.tag).getBytes(), this._tag.length !== this._tagLength / 8)) throw new Error("Authentication tag does not match tag length.");
	this._hashBlock = new Array(this._ints), this.tag = null, this._hashSubkey = new Array(this._ints), this.cipher.encrypt([0, 0, 0, 0], this._hashSubkey), this.componentBits = 4, this._m = this.generateHashTable(this._hashSubkey, this.componentBits);
	var r = t.length();
	if (r === 12) this._j0 = [t.getInt32(), t.getInt32(), t.getInt32(), 1];
	else {
		for (this._j0 = [0, 0, 0, 0]; t.length() > 0;) this._j0 = this.ghash(this._hashSubkey, this._j0, [t.getInt32(), t.getInt32(), t.getInt32(), t.getInt32()]);
		this._j0 = this.ghash(this._hashSubkey, this._j0, [0, 0].concat(K0(r * 8)))
	}
	this._inBlock = this._j0.slice(0), zr(this._inBlock), this._partialBytes = 0, a = Ke.util.createBuffer(a), this._aDataLength = K0(a.length() * 8);
	var n = a.length() % this.blockSize;
	for (n && a.fillWithByte(0, this.blockSize - n), this._s = [0, 0, 0, 0]; a.length() > 0;) this._s = this.ghash(this._hashSubkey, this._s, [a.getInt32(), a.getInt32(), a.getInt32(), a.getInt32()])
};
xe.gcm.prototype.encrypt = function (e, t, a) {
	var r = e.length();
	if (r === 0) return !0;
	if (this.cipher.encrypt(this._inBlock, this._outBlock), this._partialBytes === 0 && r >= this.blockSize) {
		for (var n = 0; n < this._ints; ++n) t.putInt32(this._outBlock[n] ^= e.getInt32());
		this._cipherLength += this.blockSize
	} else {
		var i = (this.blockSize - r) % this.blockSize;
		i > 0 && (i = this.blockSize - i), this._partialOutput.clear();
		for (var n = 0; n < this._ints; ++n) this._partialOutput.putInt32(e.getInt32() ^ this._outBlock[n]);
		if (i <= 0 || a) {
			if (a) {
				var s = r % this.blockSize;
				this._cipherLength += s, this._partialOutput.truncate(this.blockSize - s)
			} else this._cipherLength += this.blockSize;
			for (var n = 0; n < this._ints; ++n) this._outBlock[n] = this._partialOutput.getInt32();
			this._partialOutput.read -= this.blockSize
		}
		if (this._partialBytes > 0 && this._partialOutput.getBytes(this._partialBytes), i > 0 && !a) return e.read -= this.blockSize, t.putBytes(this._partialOutput.getBytes(i - this._partialBytes)), this._partialBytes = i, !0;
		t.putBytes(this._partialOutput.getBytes(r - this._partialBytes)), this._partialBytes = 0
	}
	this._s = this.ghash(this._hashSubkey, this._s, this._outBlock), zr(this._inBlock)
};
xe.gcm.prototype.decrypt = function (e, t, a) {
	var r = e.length();
	if (r < this.blockSize && !(a && r > 0)) return !0;
	this.cipher.encrypt(this._inBlock, this._outBlock), zr(this._inBlock), this._hashBlock[0] = e.getInt32(), this._hashBlock[1] = e.getInt32(), this._hashBlock[2] = e.getInt32(), this._hashBlock[3] = e.getInt32(), this._s = this.ghash(this._hashSubkey, this._s, this._hashBlock);
	for (var n = 0; n < this._ints; ++n) t.putInt32(this._outBlock[n] ^ this._hashBlock[n]);
	r < this.blockSize ? this._cipherLength += r % this.blockSize : this._cipherLength += this.blockSize
};
xe.gcm.prototype.afterFinish = function (e, t) {
	var a = !0;
	t.decrypt && t.overflow && e.truncate(this.blockSize - t.overflow), this.tag = Ke.util.createBuffer();
	var r = this._aDataLength.concat(K0(this._cipherLength * 8));
	this._s = this.ghash(this._hashSubkey, this._s, r);
	var n = [];
	this.cipher.encrypt(this._j0, n);
	for (var i = 0; i < this._ints; ++i) this.tag.putInt32(this._s[i] ^ n[i]);
	return this.tag.truncate(this.tag.length() % (this._tagLength / 8)), t.decrypt && this.tag.bytes() !== this._tag && (a = !1), a
};
xe.gcm.prototype.multiply = function (e, t) {
	for (var a = [0, 0, 0, 0], r = t.slice(0), n = 0; n < 128; ++n) {
		var i = e[n / 32 | 0] & 1 << 31 - n % 32;
		i && (a[0] ^= r[0], a[1] ^= r[1], a[2] ^= r[2], a[3] ^= r[3]), this.pow(r, r)
	}
	return a
};
xe.gcm.prototype.pow = function (e, t) {
	for (var a = e[3] & 1, r = 3; r > 0; --r) t[r] = e[r] >>> 1 | (e[r - 1] & 1) << 31;
	t[0] = e[0] >>> 1, a && (t[0] ^= this._R)
};
xe.gcm.prototype.tableMultiply = function (e) {
	for (var t = [0, 0, 0, 0], a = 0; a < 32; ++a) {
		var r = a / 8 | 0,
			n = e[r] >>> (7 - a % 8) * 4 & 15,
			i = this._m[a][n];
		t[0] ^= i[0], t[1] ^= i[1], t[2] ^= i[2], t[3] ^= i[3]
	}
	return t
};
xe.gcm.prototype.ghash = function (e, t, a) {
	return t[0] ^= a[0], t[1] ^= a[1], t[2] ^= a[2], t[3] ^= a[3], this.tableMultiply(t)
};
xe.gcm.prototype.generateHashTable = function (e, t) {
	for (var a = 8 / t, r = 4 * a, n = 16 * a, i = new Array(n), s = 0; s < n; ++s) {
		var o = [0, 0, 0, 0],
			l = s / r | 0,
			f = (r - 1 - s % r) * t;
		o[l] = 1 << t - 1 << f, i[s] = this.generateSubHashTable(this.multiply(o, e), t)
	}
	return i
};
xe.gcm.prototype.generateSubHashTable = function (e, t) {
	var a = 1 << t,
		r = a >>> 1,
		n = new Array(a);
	n[r] = e.slice(0);
	for (var i = r >>> 1; i > 0;) this.pow(n[2 * i], n[i] = []), i >>= 1;
	for (i = 2; i < r;) {
		for (var s = 1; s < i; ++s) {
			var o = n[i],
				l = n[s];
			n[i + s] = [o[0] ^ l[0], o[1] ^ l[1], o[2] ^ l[2], o[3] ^ l[3]]
		}
		i *= 2
	}
	for (n[0] = [0, 0, 0, 0], i = r + 1; i < a; ++i) {
		var f = n[i ^ r];
		n[i] = [e[0] ^ f[0], e[1] ^ f[1], e[2] ^ f[2], e[3] ^ f[3]]
	}
	return n
};

function qr(e, t) {
	if (typeof e == "string" && (e = Ke.util.createBuffer(e)), Ke.util.isArray(e) && e.length > 4) {
		var a = e;
		e = Ke.util.createBuffer();
		for (var r = 0; r < a.length; ++r) e.putByte(a[r])
	}
	if (e.length() < t) throw new Error("Invalid IV length; got " + e.length() + " bytes and expected " + t + " bytes.");
	if (!Ke.util.isArray(e)) {
		for (var n = [], i = t / 4, r = 0; r < i; ++r) n.push(e.getInt32());
		e = n
	}
	return e
}

function zr(e) {
	e[e.length - 1] = e[e.length - 1] + 1 & 4294967295
}

function K0(e) {
	return [e / 4294967296 | 0, e & 4294967295]
}
var Ie = le;
Ie.aes = Ie.aes || {};
Ie.aes.startEncrypting = function (e, t, a, r) {
	var n = Gr({
		key: e,
		output: a,
		decrypt: !1,
		mode: r
	});
	return n.start(t), n
};
Ie.aes.createEncryptionCipher = function (e, t) {
	return Gr({
		key: e,
		output: null,
		decrypt: !1,
		mode: t
	})
};
Ie.aes.startDecrypting = function (e, t, a, r) {
	var n = Gr({
		key: e,
		output: a,
		decrypt: !0,
		mode: r
	});
	return n.start(t), n
};
Ie.aes.createDecryptionCipher = function (e, t) {
	return Gr({
		key: e,
		output: null,
		decrypt: !0,
		mode: t
	})
};
Ie.aes.Algorithm = function (e, t) {
	ca || jn();
	var a = this;
	a.name = e, a.mode = new t({
		blockSize: 16,
		cipher: {
			encrypt: function (r, n) {
				return M0(a._w, r, n, !1)
			},
			decrypt: function (r, n) {
				return M0(a._w, r, n, !0)
			}
		}
	}), a._init = !1
};
Ie.aes.Algorithm.prototype.initialize = function (e) {
	if (!this._init) {
		var t = e.key,
			a;
		if (typeof t == "string" && (t.length === 16 || t.length === 24 || t.length === 32)) t = Ie.util.createBuffer(t);
		else if (Ie.util.isArray(t) && (t.length === 16 || t.length === 24 || t.length === 32)) {
			a = t, t = Ie.util.createBuffer();
			for (var r = 0; r < a.length; ++r) t.putByte(a[r])
		}
		if (!Ie.util.isArray(t)) {
			a = t, t = [];
			var n = a.length();
			if (n === 16 || n === 24 || n === 32) {
				n = n >>> 2;
				for (var r = 0; r < n; ++r) t.push(a.getInt32())
			}
		}
		if (!Ie.util.isArray(t) || !(t.length === 4 || t.length === 6 || t.length === 8)) throw new Error("Invalid key parameter.");
		var i = this.mode.name,
			s = ["CFB", "OFB", "CTR", "GCM"].indexOf(i) !== -1;
		this._w = Zn(t, e.decrypt && !s), this._init = !0
	}
};
Ie.aes._expandKey = function (e, t) {
	return ca || jn(), Zn(e, t)
};
Ie.aes._updateBlock = M0;
tr("AES-ECB", Ie.cipher.modes.ecb);
tr("AES-CBC", Ie.cipher.modes.cbc);
tr("AES-CFB", Ie.cipher.modes.cfb);
tr("AES-OFB", Ie.cipher.modes.ofb);
tr("AES-CTR", Ie.cipher.modes.ctr);
tr("AES-GCM", Ie.cipher.modes.gcm);

function tr(e, t) {
	var a = function () {
		return new Ie.aes.Algorithm(e, t)
	};
	Ie.cipher.registerAlgorithm(e, a)
}
var ca = !1,
	Wt = 4,
	Qe, H0, $n, Ot, ut;

function jn() {
	ca = !0, $n = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
	for (var e = new Array(256), t = 0; t < 128; ++t) e[t] = t << 1, e[t + 128] = t + 128 << 1 ^ 283;
	Qe = new Array(256), H0 = new Array(256), Ot = new Array(4), ut = new Array(4);
	for (var t = 0; t < 4; ++t) Ot[t] = new Array(256), ut[t] = new Array(256);
	for (var a = 0, r = 0, n, i, s, o, l, f, u, t = 0; t < 256; ++t) {
		o = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4, o = o >> 8 ^ o & 255 ^ 99, Qe[a] = o, H0[o] = a, l = e[o], n = e[a], i = e[n], s = e[i], f = l << 24 ^ o << 16 ^ o << 8 ^ (o ^ l), u = (n ^ i ^ s) << 24 ^ (a ^ s) << 16 ^ (a ^ i ^ s) << 8 ^ (a ^ n ^ s);
		for (var c = 0; c < 4; ++c) Ot[c][a] = f, ut[c][o] = u, f = f << 24 | f >>> 8, u = u << 24 | u >>> 8;
		a === 0 ? a = r = 1 : (a = n ^ e[e[e[n ^ s]]], r ^= e[e[r]])
	}
}

function Zn(e, t) {
	for (var a = e.slice(0), r, n = 1, i = a.length, s = i + 6 + 1, o = Wt * s, l = i; l < o; ++l) r = a[l - 1], l % i === 0 ? (r = Qe[r >>> 16 & 255] << 24 ^ Qe[r >>> 8 & 255] << 16 ^ Qe[r & 255] << 8 ^ Qe[r >>> 24] ^ $n[n] << 24, n++) : i > 6 && l % i === 4 && (r = Qe[r >>> 24] << 24 ^ Qe[r >>> 16 & 255] << 16 ^ Qe[r >>> 8 & 255] << 8 ^ Qe[r & 255]), a[l] = a[l - i] ^ r;
	if (t) {
		var f, u = ut[0],
			c = ut[1],
			h = ut[2],
			x = ut[3],
			d = a.slice(0);
		o = a.length;
		for (var l = 0, g = o - Wt; l < o; l += Wt, g -= Wt)
			if (l === 0 || l === o - Wt) d[l] = a[g], d[l + 1] = a[g + 3], d[l + 2] = a[g + 2], d[l + 3] = a[g + 1];
			else
				for (var v = 0; v < Wt; ++v) f = a[g + v], d[l + (3 & -v)] = u[Qe[f >>> 24]] ^ c[Qe[f >>> 16 & 255]] ^ h[Qe[f >>> 8 & 255]] ^ x[Qe[f & 255]];
		a = d
	}
	return a
}

function M0(e, t, a, r) {
	var n = e.length / 4 - 1,
		i, s, o, l, f;
	r ? (i = ut[0], s = ut[1], o = ut[2], l = ut[3], f = H0) : (i = Ot[0], s = Ot[1], o = Ot[2], l = Ot[3], f = Qe);
	var u, c, h, x, d, g, v;
	u = t[0] ^ e[0], c = t[r ? 3 : 1] ^ e[1], h = t[2] ^ e[2], x = t[r ? 1 : 3] ^ e[3];
	for (var B = 3, E = 1; E < n; ++E) d = i[u >>> 24] ^ s[c >>> 16 & 255] ^ o[h >>> 8 & 255] ^ l[x & 255] ^ e[++B], g = i[c >>> 24] ^ s[h >>> 16 & 255] ^ o[x >>> 8 & 255] ^ l[u & 255] ^ e[++B], v = i[h >>> 24] ^ s[x >>> 16 & 255] ^ o[u >>> 8 & 255] ^ l[c & 255] ^ e[++B], x = i[x >>> 24] ^ s[u >>> 16 & 255] ^ o[c >>> 8 & 255] ^ l[h & 255] ^ e[++B], u = d, c = g, h = v;
	a[0] = f[u >>> 24] << 24 ^ f[c >>> 16 & 255] << 16 ^ f[h >>> 8 & 255] << 8 ^ f[x & 255] ^ e[++B], a[r ? 3 : 1] = f[c >>> 24] << 24 ^ f[h >>> 16 & 255] << 16 ^ f[x >>> 8 & 255] << 8 ^ f[u & 255] ^ e[++B], a[2] = f[h >>> 24] << 24 ^ f[x >>> 16 & 255] << 16 ^ f[u >>> 8 & 255] << 8 ^ f[c & 255] ^ e[++B], a[r ? 1 : 3] = f[x >>> 24] << 24 ^ f[u >>> 16 & 255] << 16 ^ f[c >>> 8 & 255] << 8 ^ f[h & 255] ^ e[++B]
}

function Gr(e) {
	e = e || {};
	var t = (e.mode || "CBC").toUpperCase(),
		a = "AES-" + t,
		r;
	e.decrypt ? r = Ie.cipher.createDecipher(a, e.key) : r = Ie.cipher.createCipher(a, e.key);
	var n = r.start;
	return r.start = function (i, s) {
		var o = null;
		s instanceof Ie.util.ByteBuffer && (o = s, s = {}), s = s || {}, s.output = o, s.iv = i, n.call(r, s)
	}, r
}
var xr = le;
xr.pki = xr.pki || {};
var q0 = xr.pki.oids = xr.oids = xr.oids || {};

function z(e, t) {
	q0[e] = t, q0[t] = e
}

function Ae(e, t) {
	q0[e] = t
}
z("1.2.840.113549.1.1.1", "rsaEncryption");
z("1.2.840.113549.1.1.4", "md5WithRSAEncryption");
z("1.2.840.113549.1.1.5", "sha1WithRSAEncryption");
z("1.2.840.113549.1.1.7", "RSAES-OAEP");
z("1.2.840.113549.1.1.8", "mgf1");
z("1.2.840.113549.1.1.9", "pSpecified");
z("1.2.840.113549.1.1.10", "RSASSA-PSS");
z("1.2.840.113549.1.1.11", "sha256WithRSAEncryption");
z("1.2.840.113549.1.1.12", "sha384WithRSAEncryption");
z("1.2.840.113549.1.1.13", "sha512WithRSAEncryption");
z("1.3.101.112", "EdDSA25519");
z("1.2.840.10040.4.3", "dsa-with-sha1");
z("1.3.14.3.2.7", "desCBC");
z("1.3.14.3.2.26", "sha1");
z("1.3.14.3.2.29", "sha1WithRSASignature");
z("2.16.840.1.101.3.4.2.1", "sha256");
z("2.16.840.1.101.3.4.2.2", "sha384");
z("2.16.840.1.101.3.4.2.3", "sha512");
z("2.16.840.1.101.3.4.2.4", "sha224");
z("2.16.840.1.101.3.4.2.5", "sha512-224");
z("2.16.840.1.101.3.4.2.6", "sha512-256");
z("1.2.840.113549.2.2", "md2");
z("1.2.840.113549.2.5", "md5");
z("1.2.840.113549.1.7.1", "data");
z("1.2.840.113549.1.7.2", "signedData");
z("1.2.840.113549.1.7.3", "envelopedData");
z("1.2.840.113549.1.7.4", "signedAndEnvelopedData");
z("1.2.840.113549.1.7.5", "digestedData");
z("1.2.840.113549.1.7.6", "encryptedData");
z("1.2.840.113549.1.9.1", "emailAddress");
z("1.2.840.113549.1.9.2", "unstructuredName");
z("1.2.840.113549.1.9.3", "contentType");
z("1.2.840.113549.1.9.4", "messageDigest");
z("1.2.840.113549.1.9.5", "signingTime");
z("1.2.840.113549.1.9.6", "counterSignature");
z("1.2.840.113549.1.9.7", "challengePassword");
z("1.2.840.113549.1.9.8", "unstructuredAddress");
z("1.2.840.113549.1.9.14", "extensionRequest");
z("1.2.840.113549.1.9.20", "friendlyName");
z("1.2.840.113549.1.9.21", "localKeyId");
z("1.2.840.113549.1.9.22.1", "x509Certificate");
z("1.2.840.113549.1.12.10.1.1", "keyBag");
z("1.2.840.113549.1.12.10.1.2", "pkcs8ShroudedKeyBag");
z("1.2.840.113549.1.12.10.1.3", "certBag");
z("1.2.840.113549.1.12.10.1.4", "crlBag");
z("1.2.840.113549.1.12.10.1.5", "secretBag");
z("1.2.840.113549.1.12.10.1.6", "safeContentsBag");
z("1.2.840.113549.1.5.13", "pkcs5PBES2");
z("1.2.840.113549.1.5.12", "pkcs5PBKDF2");
z("1.2.840.113549.1.12.1.1", "pbeWithSHAAnd128BitRC4");
z("1.2.840.113549.1.12.1.2", "pbeWithSHAAnd40BitRC4");
z("1.2.840.113549.1.12.1.3", "pbeWithSHAAnd3-KeyTripleDES-CBC");
z("1.2.840.113549.1.12.1.4", "pbeWithSHAAnd2-KeyTripleDES-CBC");
z("1.2.840.113549.1.12.1.5", "pbeWithSHAAnd128BitRC2-CBC");
z("1.2.840.113549.1.12.1.6", "pbewithSHAAnd40BitRC2-CBC");
z("1.2.840.113549.2.7", "hmacWithSHA1");
z("1.2.840.113549.2.8", "hmacWithSHA224");
z("1.2.840.113549.2.9", "hmacWithSHA256");
z("1.2.840.113549.2.10", "hmacWithSHA384");
z("1.2.840.113549.2.11", "hmacWithSHA512");
z("1.2.840.113549.3.7", "des-EDE3-CBC");
z("2.16.840.1.101.3.4.1.2", "aes128-CBC");
z("2.16.840.1.101.3.4.1.22", "aes192-CBC");
z("2.16.840.1.101.3.4.1.42", "aes256-CBC");
z("2.5.4.3", "commonName");
z("2.5.4.4", "surname");
z("2.5.4.5", "serialNumber");
z("2.5.4.6", "countryName");
z("2.5.4.7", "localityName");
z("2.5.4.8", "stateOrProvinceName");
z("2.5.4.9", "streetAddress");
z("2.5.4.10", "organizationName");
z("2.5.4.11", "organizationalUnitName");
z("2.5.4.12", "title");
z("2.5.4.13", "description");
z("2.5.4.15", "businessCategory");
z("2.5.4.17", "postalCode");
z("2.5.4.42", "givenName");
z("1.3.6.1.4.1.311.60.2.1.2", "jurisdictionOfIncorporationStateOrProvinceName");
z("1.3.6.1.4.1.311.60.2.1.3", "jurisdictionOfIncorporationCountryName");
z("2.16.840.1.113730.1.1", "nsCertType");
z("2.16.840.1.113730.1.13", "nsComment");
Ae("2.5.29.1", "authorityKeyIdentifier");
Ae("2.5.29.2", "keyAttributes");
Ae("2.5.29.3", "certificatePolicies");
Ae("2.5.29.4", "keyUsageRestriction");
Ae("2.5.29.5", "policyMapping");
Ae("2.5.29.6", "subtreesConstraint");
Ae("2.5.29.7", "subjectAltName");
Ae("2.5.29.8", "issuerAltName");
Ae("2.5.29.9", "subjectDirectoryAttributes");
Ae("2.5.29.10", "basicConstraints");
Ae("2.5.29.11", "nameConstraints");
Ae("2.5.29.12", "policyConstraints");
Ae("2.5.29.13", "basicConstraints");
z("2.5.29.14", "subjectKeyIdentifier");
z("2.5.29.15", "keyUsage");
Ae("2.5.29.16", "privateKeyUsagePeriod");
z("2.5.29.17", "subjectAltName");
z("2.5.29.18", "issuerAltName");
z("2.5.29.19", "basicConstraints");
Ae("2.5.29.20", "cRLNumber");
Ae("2.5.29.21", "cRLReason");
Ae("2.5.29.22", "expirationDate");
Ae("2.5.29.23", "instructionCode");
Ae("2.5.29.24", "invalidityDate");
Ae("2.5.29.25", "cRLDistributionPoints");
Ae("2.5.29.26", "issuingDistributionPoint");
Ae("2.5.29.27", "deltaCRLIndicator");
Ae("2.5.29.28", "issuingDistributionPoint");
Ae("2.5.29.29", "certificateIssuer");
Ae("2.5.29.30", "nameConstraints");
z("2.5.29.31", "cRLDistributionPoints");
z("2.5.29.32", "certificatePolicies");
Ae("2.5.29.33", "policyMappings");
Ae("2.5.29.34", "policyConstraints");
z("2.5.29.35", "authorityKeyIdentifier");
Ae("2.5.29.36", "policyConstraints");
z("2.5.29.37", "extKeyUsage");
Ae("2.5.29.46", "freshestCRL");
Ae("2.5.29.54", "inhibitAnyPolicy");
z("1.3.6.1.4.1.11129.2.4.2", "timestampList");
z("1.3.6.1.5.5.7.1.1", "authorityInfoAccess");
z("1.3.6.1.5.5.7.3.1", "serverAuth");
z("1.3.6.1.5.5.7.3.2", "clientAuth");
z("1.3.6.1.5.5.7.3.3", "codeSigning");
z("1.3.6.1.5.5.7.3.4", "emailProtection");
z("1.3.6.1.5.5.7.3.8", "timeStamping");
var _e = le,
	Y = _e.asn1 = _e.asn1 || {};
Y.Class = {
	UNIVERSAL: 0,
	APPLICATION: 64,
	CONTEXT_SPECIFIC: 128,
	PRIVATE: 192
};
Y.Type = {
	NONE: 0,
	BOOLEAN: 1,
	INTEGER: 2,
	BITSTRING: 3,
	OCTETSTRING: 4,
	NULL: 5,
	OID: 6,
	ODESC: 7,
	EXTERNAL: 8,
	REAL: 9,
	ENUMERATED: 10,
	EMBEDDED: 11,
	UTF8: 12,
	ROID: 13,
	SEQUENCE: 16,
	SET: 17,
	PRINTABLESTRING: 19,
	IA5STRING: 22,
	UTCTIME: 23,
	GENERALIZEDTIME: 24,
	BMPSTRING: 30
};
Y.create = function (e, t, a, r, n) {
	if (_e.util.isArray(r)) {
		for (var i = [], s = 0; s < r.length; ++s) r[s] !== void 0 && i.push(r[s]);
		r = i
	}
	var o = {
		tagClass: e,
		type: t,
		constructed: a,
		composed: a || _e.util.isArray(r),
		value: r
	};
	return n && "bitStringContents" in n && (o.bitStringContents = n.bitStringContents, o.original = Y.copy(o)), o
};
Y.copy = function (e, t) {
	var a;
	if (_e.util.isArray(e)) {
		a = [];
		for (var r = 0; r < e.length; ++r) a.push(Y.copy(e[r], t));
		return a
	}
	return typeof e == "string" ? e : (a = {
		tagClass: e.tagClass,
		type: e.type,
		constructed: e.constructed,
		composed: e.composed,
		value: Y.copy(e.value, t)
	}, t && !t.excludeBitStringContents && (a.bitStringContents = e.bitStringContents), a)
};
Y.equals = function (e, t, a) {
	if (_e.util.isArray(e)) {
		if (!_e.util.isArray(t) || e.length !== t.length) return !1;
		for (var r = 0; r < e.length; ++r)
			if (!Y.equals(e[r], t[r])) return !1;
		return !0
	}
	if (typeof e != typeof t) return !1;
	if (typeof e == "string") return e === t;
	var n = e.tagClass === t.tagClass && e.type === t.type && e.constructed === t.constructed && e.composed === t.composed && Y.equals(e.value, t.value);
	return a && a.includeBitStringContents && (n = n && e.bitStringContents === t.bitStringContents), n
};
Y.getBerValueLength = function (e) {
	var t = e.getByte();
	if (t !== 128) {
		var a, r = t & 128;
		return r ? a = e.getInt((t & 127) << 3) : a = t, a
	}
};

function hr(e, t, a) {
	if (a > t) {
		var r = new Error("Too few bytes to parse DER.");
		throw r.available = e.length(), r.remaining = t, r.requested = a, r
	}
}
var Us = function (e, t) {
	var a = e.getByte();
	if (t--, a !== 128) {
		var r, n = a & 128;
		if (!n) r = a;
		else {
			var i = a & 127;
			hr(e, t, i), r = e.getInt(i << 3)
		}
		if (r < 0) throw new Error("Negative length: " + r);
		return r
	}
};
Y.fromDer = function (e, t) {
	t === void 0 && (t = {
		strict: !0,
		parseAllBytes: !0,
		decodeBitStrings: !0
	}), typeof t == "boolean" && (t = {
		strict: t,
		parseAllBytes: !0,
		decodeBitStrings: !0
	}), "strict" in t || (t.strict = !0), "parseAllBytes" in t || (t.parseAllBytes = !0), "decodeBitStrings" in t || (t.decodeBitStrings = !0), typeof e == "string" && (e = _e.util.createBuffer(e));
	var a = e.length(),
		r = Ir(e, e.length(), 0, t);
	if (t.parseAllBytes && e.length() !== 0) {
		var n = new Error("Unparsed DER bytes remain after ASN.1 parsing.");
		throw n.byteCount = a, n.remaining = e.length(), n
	}
	return r
};

function Ir(e, t, a, r) {
	var n;
	hr(e, t, 2);
	var i = e.getByte();
	t--;
	var s = i & 192,
		o = i & 31;
	n = e.length();
	var l = Us(e, t);
	if (t -= n - e.length(), l !== void 0 && l > t) {
		if (r.strict) {
			var f = new Error("Too few bytes to read ASN.1 value.");
			throw f.available = e.length(), f.remaining = t, f.requested = l, f
		}
		l = t
	}
	var u, c, h = (i & 32) === 32;
	if (h)
		if (u = [], l === void 0)
			for (;;) {
				if (hr(e, t, 2), e.bytes(2) === "\0\0") {
					e.getBytes(2), t -= 2;
					break
				}
				n = e.length(), u.push(Ir(e, t, a + 1, r)), t -= n - e.length()
			} else
				for (; l > 0;) n = e.length(), u.push(Ir(e, l, a + 1, r)), t -= n - e.length(), l -= n - e.length();
	if (u === void 0 && s === Y.Class.UNIVERSAL && o === Y.Type.BITSTRING && (c = e.bytes(l)), u === void 0 && r.decodeBitStrings && s === Y.Class.UNIVERSAL && o === Y.Type.BITSTRING && l > 1) {
		var x = e.read,
			d = t,
			g = 0;
		if (o === Y.Type.BITSTRING && (hr(e, t, 1), g = e.getByte(), t--), g === 0) try {
			n = e.length();
			var v = {
					strict: !0,
					decodeBitStrings: !0
				},
				B = Ir(e, t, a + 1, v),
				E = n - e.length();
			t -= E, o == Y.Type.BITSTRING && E++;
			var m = B.tagClass;
			E === l && (m === Y.Class.UNIVERSAL || m === Y.Class.CONTEXT_SPECIFIC) && (u = [B])
		} catch {}
		u === void 0 && (e.read = x, t = d)
	}
	if (u === void 0) {
		if (l === void 0) {
			if (r.strict) throw new Error("Non-constructed ASN.1 object of indefinite length.");
			l = t
		}
		if (o === Y.Type.BMPSTRING)
			for (u = ""; l > 0; l -= 2) hr(e, t, 2), u += String.fromCharCode(e.getInt16()), t -= 2;
		else u = e.getBytes(l), t -= l
	}
	var A = c === void 0 ? null : {
		bitStringContents: c
	};
	return Y.create(s, o, h, u, A)
}
Y.toDer = function (e) {
	var t = _e.util.createBuffer(),
		a = e.tagClass | e.type,
		r = _e.util.createBuffer(),
		n = !1;
	if ("bitStringContents" in e && (n = !0, e.original && (n = Y.equals(e, e.original))), n) r.putBytes(e.bitStringContents);
	else if (e.composed) {
		e.constructed ? a |= 32 : r.putByte(0);
		for (var i = 0; i < e.value.length; ++i) e.value[i] !== void 0 && r.putBuffer(Y.toDer(e.value[i]))
	} else if (e.type === Y.Type.BMPSTRING)
		for (var i = 0; i < e.value.length; ++i) r.putInt16(e.value.charCodeAt(i));
	else e.type === Y.Type.INTEGER && e.value.length > 1 && (e.value.charCodeAt(0) === 0 && !(e.value.charCodeAt(1) & 128) || e.value.charCodeAt(0) === 255 && (e.value.charCodeAt(1) & 128) === 128) ? r.putBytes(e.value.substr(1)) : r.putBytes(e.value);
	if (t.putByte(a), r.length() <= 127) t.putByte(r.length() & 127);
	else {
		var s = r.length(),
			o = "";
		do o += String.fromCharCode(s & 255), s = s >>> 8; while (s > 0);
		t.putByte(o.length | 128);
		for (var i = o.length - 1; i >= 0; --i) t.putByte(o.charCodeAt(i))
	}
	return t.putBuffer(r), t
};
Y.oidToDer = function (e) {
	var t = e.split("."),
		a = _e.util.createBuffer();
	a.putByte(40 * parseInt(t[0], 10) + parseInt(t[1], 10));
	for (var r, n, i, s, o = 2; o < t.length; ++o) {
		r = !0, n = [], i = parseInt(t[o], 10);
		do s = i & 127, i = i >>> 7, r || (s |= 128), n.push(s), r = !1; while (i > 0);
		for (var l = n.length - 1; l >= 0; --l) a.putByte(n[l])
	}
	return a
};
Y.derToOid = function (e) {
	var t;
	typeof e == "string" && (e = _e.util.createBuffer(e));
	var a = e.getByte();
	t = Math.floor(a / 40) + "." + a % 40;
	for (var r = 0; e.length() > 0;) a = e.getByte(), r = r << 7, a & 128 ? r += a & 127 : (t += "." + (r + a), r = 0);
	return t
};
Y.utcTimeToDate = function (e) {
	var t = new Date,
		a = parseInt(e.substr(0, 2), 10);
	a = a >= 50 ? 1900 + a : 2e3 + a;
	var r = parseInt(e.substr(2, 2), 10) - 1,
		n = parseInt(e.substr(4, 2), 10),
		i = parseInt(e.substr(6, 2), 10),
		s = parseInt(e.substr(8, 2), 10),
		o = 0;
	if (e.length > 11) {
		var l = e.charAt(10),
			f = 10;
		l !== "+" && l !== "-" && (o = parseInt(e.substr(10, 2), 10), f += 2)
	}
	if (t.setUTCFullYear(a, r, n), t.setUTCHours(i, s, o, 0), f && (l = e.charAt(f), l === "+" || l === "-")) {
		var u = parseInt(e.substr(f + 1, 2), 10),
			c = parseInt(e.substr(f + 4, 2), 10),
			h = u * 60 + c;
		h *= 6e4, l === "+" ? t.setTime(+t - h) : t.setTime(+t + h)
	}
	return t
};
Y.generalizedTimeToDate = function (e) {
	var t = new Date,
		a = parseInt(e.substr(0, 4), 10),
		r = parseInt(e.substr(4, 2), 10) - 1,
		n = parseInt(e.substr(6, 2), 10),
		i = parseInt(e.substr(8, 2), 10),
		s = parseInt(e.substr(10, 2), 10),
		o = parseInt(e.substr(12, 2), 10),
		l = 0,
		f = 0,
		u = !1;
	e.charAt(e.length - 1) === "Z" && (u = !0);
	var c = e.length - 5,
		h = e.charAt(c);
	if (h === "+" || h === "-") {
		var x = parseInt(e.substr(c + 1, 2), 10),
			d = parseInt(e.substr(c + 4, 2), 10);
		f = x * 60 + d, f *= 6e4, h === "+" && (f *= -1), u = !0
	}
	return e.charAt(14) === "." && (l = parseFloat(e.substr(14), 10) * 1e3), u ? (t.setUTCFullYear(a, r, n), t.setUTCHours(i, s, o, l), t.setTime(+t + f)) : (t.setFullYear(a, r, n), t.setHours(i, s, o, l)), t
};
Y.dateToUtcTime = function (e) {
	if (typeof e == "string") return e;
	var t = "",
		a = [];
	a.push(("" + e.getUTCFullYear()).substr(2)), a.push("" + (e.getUTCMonth() + 1)), a.push("" + e.getUTCDate()), a.push("" + e.getUTCHours()), a.push("" + e.getUTCMinutes()), a.push("" + e.getUTCSeconds());
	for (var r = 0; r < a.length; ++r) a[r].length < 2 && (t += "0"), t += a[r];
	return t += "Z", t
};
Y.dateToGeneralizedTime = function (e) {
	if (typeof e == "string") return e;
	var t = "",
		a = [];
	a.push("" + e.getUTCFullYear()), a.push("" + (e.getUTCMonth() + 1)), a.push("" + e.getUTCDate()), a.push("" + e.getUTCHours()), a.push("" + e.getUTCMinutes()), a.push("" + e.getUTCSeconds());
	for (var r = 0; r < a.length; ++r) a[r].length < 2 && (t += "0"), t += a[r];
	return t += "Z", t
};
Y.integerToDer = function (e) {
	var t = _e.util.createBuffer();
	if (e >= -128 && e < 128) return t.putSignedInt(e, 8);
	if (e >= -32768 && e < 32768) return t.putSignedInt(e, 16);
	if (e >= -8388608 && e < 8388608) return t.putSignedInt(e, 24);
	if (e >= -2147483648 && e < 2147483648) return t.putSignedInt(e, 32);
	var a = new Error("Integer too large; max is 32-bits.");
	throw a.integer = e, a
};
Y.derToInteger = function (e) {
	typeof e == "string" && (e = _e.util.createBuffer(e));
	var t = e.length() * 8;
	if (t > 32) throw new Error("Integer too large; max is 32-bits.");
	return e.getSignedInt(t)
};
Y.validate = function (e, t, a, r) {
	var n = !1;
	if ((e.tagClass === t.tagClass || typeof t.tagClass > "u") && (e.type === t.type || typeof t.type > "u"))
		if (e.constructed === t.constructed || typeof t.constructed > "u") {
			if (n = !0, t.value && _e.util.isArray(t.value))
				for (var i = 0, s = 0; n && s < t.value.length; ++s) n = t.value[s].optional || !1, e.value[i] && (n = Y.validate(e.value[i], t.value[s], a, r), n ? ++i : t.value[s].optional && (n = !0)), !n && r && r.push("[" + t.name + '] Tag class "' + t.tagClass + '", type "' + t.type + '" expected value length "' + t.value.length + '", got "' + e.value.length + '"');
			if (n && a && (t.capture && (a[t.capture] = e.value), t.captureAsn1 && (a[t.captureAsn1] = e), t.captureBitStringContents && "bitStringContents" in e && (a[t.captureBitStringContents] = e.bitStringContents), t.captureBitStringValue && "bitStringContents" in e))
				if (e.bitStringContents.length < 2) a[t.captureBitStringValue] = "";
				else {
					var o = e.bitStringContents.charCodeAt(0);
					if (o !== 0) throw new Error("captureBitStringValue only supported for zero unused bits");
					a[t.captureBitStringValue] = e.bitStringContents.slice(1)
				}
		} else r && r.push("[" + t.name + '] Expected constructed "' + t.constructed + '", got "' + e.constructed + '"');
	else r && (e.tagClass !== t.tagClass && r.push("[" + t.name + '] Expected tag class "' + t.tagClass + '", got "' + e.tagClass + '"'), e.type !== t.type && r.push("[" + t.name + '] Expected type "' + t.type + '", got "' + e.type + '"'));
	return n
};
var mn = /[^\\u0000-\\u00ff]/;
Y.prettyPrint = function (e, t, a) {
	var r = "";
	t = t || 0, a = a || 2, t > 0 && (r += `
`);
	for (var n = "", i = 0; i < t * a; ++i) n += " ";
	switch (r += n + "Tag: ", e.tagClass) {
		case Y.Class.UNIVERSAL:
			r += "Universal:";
			break;
		case Y.Class.APPLICATION:
			r += "Application:";
			break;
		case Y.Class.CONTEXT_SPECIFIC:
			r += "Context-Specific:";
			break;
		case Y.Class.PRIVATE:
			r += "Private:";
			break
	}
	if (e.tagClass === Y.Class.UNIVERSAL) switch (r += e.type, e.type) {
		case Y.Type.NONE:
			r += " (None)";
			break;
		case Y.Type.BOOLEAN:
			r += " (Boolean)";
			break;
		case Y.Type.INTEGER:
			r += " (Integer)";
			break;
		case Y.Type.BITSTRING:
			r += " (Bit string)";
			break;
		case Y.Type.OCTETSTRING:
			r += " (Octet string)";
			break;
		case Y.Type.NULL:
			r += " (Null)";
			break;
		case Y.Type.OID:
			r += " (Object Identifier)";
			break;
		case Y.Type.ODESC:
			r += " (Object Descriptor)";
			break;
		case Y.Type.EXTERNAL:
			r += " (External or Instance of)";
			break;
		case Y.Type.REAL:
			r += " (Real)";
			break;
		case Y.Type.ENUMERATED:
			r += " (Enumerated)";
			break;
		case Y.Type.EMBEDDED:
			r += " (Embedded PDV)";
			break;
		case Y.Type.UTF8:
			r += " (UTF8)";
			break;
		case Y.Type.ROID:
			r += " (Relative Object Identifier)";
			break;
		case Y.Type.SEQUENCE:
			r += " (Sequence)";
			break;
		case Y.Type.SET:
			r += " (Set)";
			break;
		case Y.Type.PRINTABLESTRING:
			r += " (Printable String)";
			break;
		case Y.Type.IA5String:
			r += " (IA5String (ASCII))";
			break;
		case Y.Type.UTCTIME:
			r += " (UTC time)";
			break;
		case Y.Type.GENERALIZEDTIME:
			r += " (Generalized time)";
			break;
		case Y.Type.BMPSTRING:
			r += " (BMP String)";
			break
	} else r += e.type;
	if (r += `
`, r += n + "Constructed: " + e.constructed + `
`, e.composed) {
		for (var s = 0, o = "", i = 0; i < e.value.length; ++i) e.value[i] !== void 0 && (s += 1, o += Y.prettyPrint(e.value[i], t + 1, a), i + 1 < e.value.length && (o += ","));
		r += n + "Sub values: " + s + o
	} else {
		if (r += n + "Value: ", e.type === Y.Type.OID) {
			var l = Y.derToOid(e.value);
			r += l, _e.pki && _e.pki.oids && l in _e.pki.oids && (r += " (" + _e.pki.oids[l] + ") ")
		}
		if (e.type === Y.Type.INTEGER) try {
			r += Y.derToInteger(e.value)
		} catch {
			r += "0x" + _e.util.bytesToHex(e.value)
		} else if (e.type === Y.Type.BITSTRING) {
			if (e.value.length > 1 ? r += "0x" + _e.util.bytesToHex(e.value.slice(1)) : r += "(none)", e.value.length > 0) {
				var f = e.value.charCodeAt(0);
				f == 1 ? r += " (1 unused bit shown)" : f > 1 && (r += " (" + f + " unused bits shown)")
			}
		} else if (e.type === Y.Type.OCTETSTRING) mn.test(e.value) || (r += "(" + e.value + ") "), r += "0x" + _e.util.bytesToHex(e.value);
		else if (e.type === Y.Type.UTF8) try {
			r += _e.util.decodeUtf8(e.value)
		} catch (u) {
			if (u.message === "URI malformed") r += "0x" + _e.util.bytesToHex(e.value) + " (malformed UTF8)";
			else throw u
		} else e.type === Y.Type.PRINTABLESTRING || e.type === Y.Type.IA5String ? r += e.value : mn.test(e.value) ? r += "0x" + _e.util.bytesToHex(e.value) : e.value.length === 0 ? r += "[null]" : r += e.value
	}
	return r
};
var Nr = le;
Nr.md = Nr.md || {};
Nr.md.algorithms = Nr.md.algorithms || {};
var Ct = le,
	Ps = Ct.hmac = Ct.hmac || {};
Ps.create = function () {
	var e = null,
		t = null,
		a = null,
		r = null,
		n = {};
	return n.start = function (i, s) {
		if (i !== null)
			if (typeof i == "string")
				if (i = i.toLowerCase(), i in Ct.md.algorithms) t = Ct.md.algorithms[i].create();
				else throw new Error('Unknown hash algorithm "' + i + '"');
		else t = i;
		if (s === null) s = e;
		else {
			if (typeof s == "string") s = Ct.util.createBuffer(s);
			else if (Ct.util.isArray(s)) {
				var o = s;
				s = Ct.util.createBuffer();
				for (var l = 0; l < o.length; ++l) s.putByte(o[l])
			}
			var f = s.length();
			f > t.blockLength && (t.start(), t.update(s.bytes()), s = t.digest()), a = Ct.util.createBuffer(), r = Ct.util.createBuffer(), f = s.length();
			for (var l = 0; l < f; ++l) {
				var o = s.at(l);
				a.putByte(54 ^ o), r.putByte(92 ^ o)
			}
			if (f < t.blockLength)
				for (var o = t.blockLength - f, l = 0; l < o; ++l) a.putByte(54), r.putByte(92);
			e = s, a = a.bytes(), r = r.bytes()
		}
		t.start(), t.update(a)
	}, n.update = function (i) {
		t.update(i)
	}, n.getMac = function () {
		var i = t.digest().bytes();
		return t.start(), t.update(r), t.update(i), t.digest()
	}, n.digest = n.getMac, n
};
var dt = le,
	Jn = dt.md5 = dt.md5 || {};
dt.md.md5 = dt.md.algorithms.md5 = Jn;
Jn.create = function () {
	ei || Vs();
	var e = null,
		t = dt.util.createBuffer(),
		a = new Array(16),
		r = {
			algorithm: "md5",
			blockLength: 64,
			digestLength: 16,
			messageLength: 0,
			fullMessageLength: null,
			messageLengthSize: 8
		};
	return r.start = function () {
		r.messageLength = 0, r.fullMessageLength = r.messageLength64 = [];
		for (var n = r.messageLengthSize / 4, i = 0; i < n; ++i) r.fullMessageLength.push(0);
		return t = dt.util.createBuffer(), e = {
			h0: 1732584193,
			h1: 4023233417,
			h2: 2562383102,
			h3: 271733878
		}, r
	}, r.start(), r.update = function (n, i) {
		i === "utf8" && (n = dt.util.encodeUtf8(n));
		var s = n.length;
		r.messageLength += s, s = [s / 4294967296 >>> 0, s >>> 0];
		for (var o = r.fullMessageLength.length - 1; o >= 0; --o) r.fullMessageLength[o] += s[1], s[1] = s[0] + (r.fullMessageLength[o] / 4294967296 >>> 0), r.fullMessageLength[o] = r.fullMessageLength[o] >>> 0, s[0] = s[1] / 4294967296 >>> 0;
		return t.putBytes(n), Bn(e, a, t), (t.read > 2048 || t.length() === 0) && t.compact(), r
	}, r.digest = function () {
		var n = dt.util.createBuffer();
		n.putBytes(t.bytes());
		var i = r.fullMessageLength[r.fullMessageLength.length - 1] + r.messageLengthSize,
			s = i & r.blockLength - 1;
		n.putBytes(z0.substr(0, r.blockLength - s));
		for (var o, l = 0, f = r.fullMessageLength.length - 1; f >= 0; --f) o = r.fullMessageLength[f] * 8 + l, l = o / 4294967296 >>> 0, n.putInt32Le(o >>> 0);
		var u = {
			h0: e.h0,
			h1: e.h1,
			h2: e.h2,
			h3: e.h3
		};
		Bn(u, a, n);
		var c = dt.util.createBuffer();
		return c.putInt32Le(u.h0), c.putInt32Le(u.h1), c.putInt32Le(u.h2), c.putInt32Le(u.h3), c
	}, r
};
var z0 = null,
	_r = null,
	dr = null,
	Yt = null,
	ei = !1;

function Vs() {
	z0 = "", z0 += dt.util.fillString("\0", 64), _r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 6, 11, 0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 5, 8, 11, 14, 1, 4, 7, 10, 13, 0, 3, 6, 9, 12, 15, 2, 0, 7, 14, 5, 12, 3, 10, 1, 8, 15, 6, 13, 4, 11, 2, 9], dr = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21], Yt = new Array(64);
	for (var e = 0; e < 64; ++e) Yt[e] = Math.floor(Math.abs(Math.sin(e + 1)) * 4294967296);
	ei = !0
}

function Bn(e, t, a) {
	for (var r, n, i, s, o, l, f, u, c = a.length(); c >= 64;) {
		for (n = e.h0, i = e.h1, s = e.h2, o = e.h3, u = 0; u < 16; ++u) t[u] = a.getInt32Le(), l = o ^ i & (s ^ o), r = n + l + Yt[u] + t[u], f = dr[u], n = o, o = s, s = i, i += r << f | r >>> 32 - f;
		for (; u < 32; ++u) l = s ^ o & (i ^ s), r = n + l + Yt[u] + t[_r[u]], f = dr[u], n = o, o = s, s = i, i += r << f | r >>> 32 - f;
		for (; u < 48; ++u) l = i ^ s ^ o, r = n + l + Yt[u] + t[_r[u]], f = dr[u], n = o, o = s, s = i, i += r << f | r >>> 32 - f;
		for (; u < 64; ++u) l = s ^ (i | ~o), r = n + l + Yt[u] + t[_r[u]], f = dr[u], n = o, o = s, s = i, i += r << f | r >>> 32 - f;
		e.h0 = e.h0 + n | 0, e.h1 = e.h1 + i | 0, e.h2 = e.h2 + s | 0, e.h3 = e.h3 + o | 0, c -= 64
	}
}
var Fr = le,
	ti = Fr.pem = Fr.pem || {};
ti.encode = function (e, t) {
	t = t || {};
	var a = "-----BEGIN " + e.type + `-----\r
`,
		r;
	if (e.procType && (r = {
			name: "Proc-Type",
			values: [String(e.procType.version), e.procType.type]
		}, a += Ar(r)), e.contentDomain && (r = {
			name: "Content-Domain",
			values: [e.contentDomain]
		}, a += Ar(r)), e.dekInfo && (r = {
			name: "DEK-Info",
			values: [e.dekInfo.algorithm]
		}, e.dekInfo.parameters && r.values.push(e.dekInfo.parameters), a += Ar(r)), e.headers)
		for (var n = 0; n < e.headers.length; ++n) a += Ar(e.headers[n]);
	return e.procType && (a += `\r
`), a += Fr.util.encode64(e.body, t.maxline || 64) + `\r
`, a += "-----END " + e.type + `-----\r
`, a
};
ti.decode = function (e) {
	for (var t = [], a = /\s*-----BEGIN ([A-Z0-9- ]+)-----\r?\n?([\x21-\x7e\s]+?(?:\r?\n\r?\n))?([:A-Za-z0-9+\/=\s]+?)-----END \1-----/g, r = /([\x21-\x7e]+):\s*([\x21-\x7e\s^:]+)/, n = /\r?\n/, i; i = a.exec(e), !!i;) {
		var s = i[1];
		s === "NEW CERTIFICATE REQUEST" && (s = "CERTIFICATE REQUEST");
		var o = {
			type: s,
			procType: null,
			contentDomain: null,
			dekInfo: null,
			headers: [],
			body: Fr.util.decode64(i[3])
		};
		if (t.push(o), !!i[2]) {
			for (var l = i[2].split(n), f = 0; i && f < l.length;) {
				for (var u = l[f].replace(/\s+$/, ""), c = f + 1; c < l.length; ++c) {
					var h = l[c];
					if (!/\s/.test(h[0])) break;
					u += h, f = c
				}
				if (i = u.match(r), i) {
					for (var x = {
							name: i[1],
							values: []
						}, d = i[2].split(","), g = 0; g < d.length; ++g) x.values.push(Os(d[g]));
					if (o.procType)
						if (!o.contentDomain && x.name === "Content-Domain") o.contentDomain = d[0] || "";
						else if (!o.dekInfo && x.name === "DEK-Info") {
						if (x.values.length === 0) throw new Error('Invalid PEM formatted message. The "DEK-Info" header must have at least one subfield.');
						o.dekInfo = {
							algorithm: d[0],
							parameters: d[1] || null
						}
					} else o.headers.push(x);
					else {
						if (x.name !== "Proc-Type") throw new Error('Invalid PEM formatted message. The first encapsulated header must be "Proc-Type".');
						if (x.values.length !== 2) throw new Error('Invalid PEM formatted message. The "Proc-Type" header must have two subfields.');
						o.procType = {
							version: d[0],
							type: d[1]
						}
					}
				}++f
			}
			if (o.procType === "ENCRYPTED" && !o.dekInfo) throw new Error('Invalid PEM formatted message. The "DEK-Info" header must be present if "Proc-Type" is "ENCRYPTED".')
		}
	}
	if (t.length === 0) throw new Error("Invalid PEM formatted message.");
	return t
};

function Ar(e) {
	for (var t = e.name + ": ", a = [], r = function (l, f) {
			return " " + f
		}, n = 0; n < e.values.length; ++n) a.push(e.values[n].replace(/^(\S+\r\n)/, r));
	t += a.join(",") + `\r
`;
	for (var i = 0, s = -1, n = 0; n < t.length; ++n, ++i)
		if (i > 65 && s !== -1) {
			var o = t[s];
			o === "," ? (++s, t = t.substr(0, s) + `\r
 ` + t.substr(s)) : t = t.substr(0, s) + `\r
` + o + t.substr(s + 1), i = n - s - 1, s = -1, ++n
		} else(t[n] === " " || t[n] === "	" || t[n] === ",") && (s = n);
	return t
}

function Os(e) {
	return e.replace(/^\s+/, "")
}
var Ne = le;
Ne.des = Ne.des || {};
Ne.des.startEncrypting = function (e, t, a, r) {
	var n = Qr({
		key: e,
		output: a,
		decrypt: !1,
		mode: r || (t === null ? "ECB" : "CBC")
	});
	return n.start(t), n
};
Ne.des.createEncryptionCipher = function (e, t) {
	return Qr({
		key: e,
		output: null,
		decrypt: !1,
		mode: t
	})
};
Ne.des.startDecrypting = function (e, t, a, r) {
	var n = Qr({
		key: e,
		output: a,
		decrypt: !0,
		mode: r || (t === null ? "ECB" : "CBC")
	});
	return n.start(t), n
};
Ne.des.createDecryptionCipher = function (e, t) {
	return Qr({
		key: e,
		output: null,
		decrypt: !0,
		mode: t
	})
};
Ne.des.Algorithm = function (e, t) {
	var a = this;
	a.name = e, a.mode = new t({
		blockSize: 8,
		cipher: {
			encrypt: function (r, n) {
				return An(a._keys, r, n, !1)
			},
			decrypt: function (r, n) {
				return An(a._keys, r, n, !0)
			}
		}
	}), a._init = !1
};
Ne.des.Algorithm.prototype.initialize = function (e) {
	if (!this._init) {
		var t = Ne.util.createBuffer(e.key);
		if (this.name.indexOf("3DES") === 0 && t.length() !== 24) throw new Error("Invalid Triple-DES key size: " + t.length() * 8);
		this._keys = Xs(t), this._init = !0
	}
};
yt("DES-ECB", Ne.cipher.modes.ecb);
yt("DES-CBC", Ne.cipher.modes.cbc);
yt("DES-CFB", Ne.cipher.modes.cfb);
yt("DES-OFB", Ne.cipher.modes.ofb);
yt("DES-CTR", Ne.cipher.modes.ctr);
yt("3DES-ECB", Ne.cipher.modes.ecb);
yt("3DES-CBC", Ne.cipher.modes.cbc);
yt("3DES-CFB", Ne.cipher.modes.cfb);
yt("3DES-OFB", Ne.cipher.modes.ofb);
yt("3DES-CTR", Ne.cipher.modes.ctr);

function yt(e, t) {
	var a = function () {
		return new Ne.des.Algorithm(e, t)
	};
	Ne.cipher.registerAlgorithm(e, a)
}
var Ks = [16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756],
	Hs = [-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344],
	Ms = [520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584],
	qs = [8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928],
	zs = [256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080],
	Gs = [536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312],
	Qs = [2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154],
	Ws = [268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696];

function Xs(e) {
	for (var t = [0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964], a = [0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697], r = [0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272], n = [0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144], i = [0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256], s = [0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488], o = [0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746], l = [0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568], f = [0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578], u = [0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488], c = [0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800], h = [0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744], x = [0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128], d = [0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261], g = e.length() > 8 ? 3 : 1, v = [], B = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0], E = 0, m, A = 0; A < g; A++) {
		var T = e.getInt32(),
			S = e.getInt32();
		m = (T >>> 4 ^ S) & 252645135, S ^= m, T ^= m << 4, m = (S >>> -16 ^ T) & 65535, T ^= m, S ^= m << -16, m = (T >>> 2 ^ S) & 858993459, S ^= m, T ^= m << 2, m = (S >>> -16 ^ T) & 65535, T ^= m, S ^= m << -16, m = (T >>> 1 ^ S) & 1431655765, S ^= m, T ^= m << 1, m = (S >>> 8 ^ T) & 16711935, T ^= m, S ^= m << 8, m = (T >>> 1 ^ S) & 1431655765, S ^= m, T ^= m << 1, m = T << 8 | S >>> 20 & 240, T = S << 24 | S << 8 & 16711680 | S >>> 8 & 65280 | S >>> 24 & 240, S = m;
		for (var N = 0; N < B.length; ++N) {
			B[N] ? (T = T << 2 | T >>> 26, S = S << 2 | S >>> 26) : (T = T << 1 | T >>> 27, S = S << 1 | S >>> 27), T &= -15, S &= -15;
			var w = t[T >>> 28] | a[T >>> 24 & 15] | r[T >>> 20 & 15] | n[T >>> 16 & 15] | i[T >>> 12 & 15] | s[T >>> 8 & 15] | o[T >>> 4 & 15],
				K = l[S >>> 28] | f[S >>> 24 & 15] | u[S >>> 20 & 15] | c[S >>> 16 & 15] | h[S >>> 12 & 15] | x[S >>> 8 & 15] | d[S >>> 4 & 15];
			m = (K >>> 16 ^ w) & 65535, v[E++] = w ^ m, v[E++] = K ^ m << 16
		}
	}
	return v
}

function An(e, t, a, r) {
	var n = e.length === 32 ? 3 : 9,
		i;
	n === 3 ? i = r ? [30, -2, -2] : [0, 32, 2] : i = r ? [94, 62, -2, 32, 64, 2, 30, -2, -2] : [0, 32, 2, 62, 30, -2, 64, 96, 2];
	var s, o = t[0],
		l = t[1];
	s = (o >>> 4 ^ l) & 252645135, l ^= s, o ^= s << 4, s = (o >>> 16 ^ l) & 65535, l ^= s, o ^= s << 16, s = (l >>> 2 ^ o) & 858993459, o ^= s, l ^= s << 2, s = (l >>> 8 ^ o) & 16711935, o ^= s, l ^= s << 8, s = (o >>> 1 ^ l) & 1431655765, l ^= s, o ^= s << 1, o = o << 1 | o >>> 31, l = l << 1 | l >>> 31;
	for (var f = 0; f < n; f += 3) {
		for (var u = i[f + 1], c = i[f + 2], h = i[f]; h != u; h += c) {
			var x = l ^ e[h],
				d = (l >>> 4 | l << 28) ^ e[h + 1];
			s = o, o = l, l = s ^ (Hs[x >>> 24 & 63] | qs[x >>> 16 & 63] | Gs[x >>> 8 & 63] | Ws[x & 63] | Ks[d >>> 24 & 63] | Ms[d >>> 16 & 63] | zs[d >>> 8 & 63] | Qs[d & 63])
		}
		s = o, o = l, l = s
	}
	o = o >>> 1 | o << 31, l = l >>> 1 | l << 31, s = (o >>> 1 ^ l) & 1431655765, l ^= s, o ^= s << 1, s = (l >>> 8 ^ o) & 16711935, o ^= s, l ^= s << 8, s = (l >>> 2 ^ o) & 858993459, o ^= s, l ^= s << 2, s = (o >>> 16 ^ l) & 65535, l ^= s, o ^= s << 16, s = (o >>> 4 ^ l) & 252645135, l ^= s, o ^= s << 4, a[0] = o, a[1] = l
}

function Qr(e) {
	e = e || {};
	var t = (e.mode || "CBC").toUpperCase(),
		a = "DES-" + t,
		r;
	e.decrypt ? r = Ne.cipher.createDecipher(a, e.key) : r = Ne.cipher.createCipher(a, e.key);
	var n = r.start;
	return r.start = function (i, s) {
		var o = null;
		s instanceof Ne.util.ByteBuffer && (o = s, s = {}), s = s || {}, s.output = o, s.iv = i, n.call(r, s)
	}, r
}
var We = le,
	Ys = We.pkcs5 = We.pkcs5 || {},
	gt;
We.util.isNodejs && !We.options.usePureJavaScript && (gt = Kr);
We.pbkdf2 = Ys.pbkdf2 = function (e, t, a, r, n, i) {
	if (typeof n == "function" && (i = n, n = null), We.util.isNodejs && !We.options.usePureJavaScript && gt.pbkdf2 && (n === null || typeof n != "object") && (gt.pbkdf2Sync.length > 4 || !n || n === "sha1")) return typeof n != "string" && (n = "sha1"), e = Buffer.from(e, "binary"), t = Buffer.from(t, "binary"), i ? gt.pbkdf2Sync.length === 4 ? gt.pbkdf2(e, t, a, r, function (m, A) {
		if (m) return i(m);
		i(null, A.toString("binary"))
	}) : gt.pbkdf2(e, t, a, r, n, function (m, A) {
		if (m) return i(m);
		i(null, A.toString("binary"))
	}) : gt.pbkdf2Sync.length === 4 ? gt.pbkdf2Sync(e, t, a, r).toString("binary") : gt.pbkdf2Sync(e, t, a, r, n).toString("binary");
	if ((typeof n > "u" || n === null) && (n = "sha1"), typeof n == "string") {
		if (!(n in We.md.algorithms)) throw new Error("Unknown hash algorithm: " + n);
		n = We.md[n].create()
	}
	var s = n.digestLength;
	if (r > 4294967295 * s) {
		var o = new Error("Derived key is too long.");
		if (i) return i(o);
		throw o
	}
	var l = Math.ceil(r / s),
		f = r - (l - 1) * s,
		u = We.hmac.create();
	u.start(n, e);
	var c = "",
		h, x, d;
	if (!i) {
		for (var g = 1; g <= l; ++g) {
			u.start(null, null), u.update(t), u.update(We.util.int32ToBytes(g)), h = d = u.digest().getBytes();
			for (var v = 2; v <= a; ++v) u.start(null, null), u.update(d), x = u.digest().getBytes(), h = We.util.xorBytes(h, x, s), d = x;
			c += g < l ? h : h.substr(0, f)
		}
		return c
	}
	var g = 1,
		v;

	function B() {
		if (g > l) return i(null, c);
		u.start(null, null), u.update(t), u.update(We.util.int32ToBytes(g)), h = d = u.digest().getBytes(), v = 2, E()
	}

	function E() {
		if (v <= a) return u.start(null, null), u.update(d), x = u.digest().getBytes(), h = We.util.xorBytes(h, x, s), d = x, ++v, We.util.setImmediate(E);
		c += g < l ? h : h.substr(0, f), ++g, B()
	}
	B()
};
var xt = le,
	ri = xt.sha256 = xt.sha256 || {};
xt.md.sha256 = xt.md.algorithms.sha256 = ri;
ri.create = function () {
	ai || $s();
	var e = null,
		t = xt.util.createBuffer(),
		a = new Array(64),
		r = {
			algorithm: "sha256",
			blockLength: 64,
			digestLength: 32,
			messageLength: 0,
			fullMessageLength: null,
			messageLengthSize: 8
		};
	return r.start = function () {
		r.messageLength = 0, r.fullMessageLength = r.messageLength64 = [];
		for (var n = r.messageLengthSize / 4, i = 0; i < n; ++i) r.fullMessageLength.push(0);
		return t = xt.util.createBuffer(), e = {
			h0: 1779033703,
			h1: 3144134277,
			h2: 1013904242,
			h3: 2773480762,
			h4: 1359893119,
			h5: 2600822924,
			h6: 528734635,
			h7: 1541459225
		}, r
	}, r.start(), r.update = function (n, i) {
		i === "utf8" && (n = xt.util.encodeUtf8(n));
		var s = n.length;
		r.messageLength += s, s = [s / 4294967296 >>> 0, s >>> 0];
		for (var o = r.fullMessageLength.length - 1; o >= 0; --o) r.fullMessageLength[o] += s[1], s[1] = s[0] + (r.fullMessageLength[o] / 4294967296 >>> 0), r.fullMessageLength[o] = r.fullMessageLength[o] >>> 0, s[0] = s[1] / 4294967296 >>> 0;
		return t.putBytes(n), Sn(e, a, t), (t.read > 2048 || t.length() === 0) && t.compact(), r
	}, r.digest = function () {
		var n = xt.util.createBuffer();
		n.putBytes(t.bytes());
		var i = r.fullMessageLength[r.fullMessageLength.length - 1] + r.messageLengthSize,
			s = i & r.blockLength - 1;
		n.putBytes(G0.substr(0, r.blockLength - s));
		for (var o, l, f = r.fullMessageLength[0] * 8, u = 0; u < r.fullMessageLength.length - 1; ++u) o = r.fullMessageLength[u + 1] * 8, l = o / 4294967296 >>> 0, f += l, n.putInt32(f >>> 0), f = o >>> 0;
		n.putInt32(f);
		var c = {
			h0: e.h0,
			h1: e.h1,
			h2: e.h2,
			h3: e.h3,
			h4: e.h4,
			h5: e.h5,
			h6: e.h6,
			h7: e.h7
		};
		Sn(c, a, n);
		var h = xt.util.createBuffer();
		return h.putInt32(c.h0), h.putInt32(c.h1), h.putInt32(c.h2), h.putInt32(c.h3), h.putInt32(c.h4), h.putInt32(c.h5), h.putInt32(c.h6), h.putInt32(c.h7), h
	}, r
};
var G0 = null,
	ai = !1,
	ni = null;

function $s() {
	G0 = "", G0 += xt.util.fillString("\0", 64), ni = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], ai = !0
}

function Sn(e, t, a) {
	for (var r, n, i, s, o, l, f, u, c, h, x, d, g, v, B, E = a.length(); E >= 64;) {
		for (f = 0; f < 16; ++f) t[f] = a.getInt32();
		for (; f < 64; ++f) r = t[f - 2], r = (r >>> 17 | r << 15) ^ (r >>> 19 | r << 13) ^ r >>> 10, n = t[f - 15], n = (n >>> 7 | n << 25) ^ (n >>> 18 | n << 14) ^ n >>> 3, t[f] = r + t[f - 7] + n + t[f - 16] | 0;
		for (u = e.h0, c = e.h1, h = e.h2, x = e.h3, d = e.h4, g = e.h5, v = e.h6, B = e.h7, f = 0; f < 64; ++f) s = (d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7), o = v ^ d & (g ^ v), i = (u >>> 2 | u << 30) ^ (u >>> 13 | u << 19) ^ (u >>> 22 | u << 10), l = u & c | h & (u ^ c), r = B + s + o + ni[f] + t[f], n = i + l, B = v, v = g, g = d, d = x + r >>> 0, x = h, h = c, c = u, u = r + n >>> 0;
		e.h0 = e.h0 + u | 0, e.h1 = e.h1 + c | 0, e.h2 = e.h2 + h | 0, e.h3 = e.h3 + x | 0, e.h4 = e.h4 + d | 0, e.h5 = e.h5 + g | 0, e.h6 = e.h6 + v | 0, e.h7 = e.h7 + B | 0, E -= 64
	}
}
var ct = le,
	Dr = null;
ct.util.isNodejs && !ct.options.usePureJavaScript && !process.versions["node-webkit"] && (Dr = Kr);
var js = ct.prng = ct.prng || {};
js.create = function (e) {
	for (var t = {
			plugin: e,
			key: null,
			seed: null,
			time: null,
			reseeds: 0,
			generated: 0,
			keyBytes: ""
		}, a = e.md, r = new Array(32), n = 0; n < 32; ++n) r[n] = a.create();
	t.pools = r, t.pool = 0, t.generate = function (f, u) {
		if (!u) return t.generateSync(f);
		var c = t.plugin.cipher,
			h = t.plugin.increment,
			x = t.plugin.formatKey,
			d = t.plugin.formatSeed,
			g = ct.util.createBuffer();
		t.key = null, v();

		function v(B) {
			if (B) return u(B);
			if (g.length() >= f) return u(null, g.getBytes(f));
			if (t.generated > 1048575 && (t.key = null), t.key === null) return ct.util.nextTick(function () {
				i(v)
			});
			var E = c(t.key, t.seed);
			t.generated += E.length, g.putBytes(E), t.key = x(c(t.key, h(t.seed))), t.seed = d(c(t.key, t.seed)), ct.util.setImmediate(v)
		}
	}, t.generateSync = function (f) {
		var u = t.plugin.cipher,
			c = t.plugin.increment,
			h = t.plugin.formatKey,
			x = t.plugin.formatSeed;
		t.key = null;
		for (var d = ct.util.createBuffer(); d.length() < f;) {
			t.generated > 1048575 && (t.key = null), t.key === null && s();
			var g = u(t.key, t.seed);
			t.generated += g.length, d.putBytes(g), t.key = h(u(t.key, c(t.seed))), t.seed = x(u(t.key, t.seed))
		}
		return d.getBytes(f)
	};

	function i(f) {
		if (t.pools[0].messageLength >= 32) return o(), f();
		var u = 32 - t.pools[0].messageLength << 5;
		t.seedFile(u, function (c, h) {
			if (c) return f(c);
			t.collect(h), o(), f()
		})
	}

	function s() {
		if (t.pools[0].messageLength >= 32) return o();
		var f = 32 - t.pools[0].messageLength << 5;
		t.collect(t.seedFileSync(f)), o()
	}

	function o() {
		t.reseeds = t.reseeds === 4294967295 ? 0 : t.reseeds + 1;
		var f = t.plugin.md.create();
		f.update(t.keyBytes);
		for (var u = 1, c = 0; c < 32; ++c) t.reseeds % u === 0 && (f.update(t.pools[c].digest().getBytes()), t.pools[c].start()), u = u << 1;
		t.keyBytes = f.digest().getBytes(), f.start(), f.update(t.keyBytes);
		var h = f.digest().getBytes();
		t.key = t.plugin.formatKey(t.keyBytes), t.seed = t.plugin.formatSeed(h), t.generated = 0
	}

	function l(f) {
		var u = null,
			c = ct.util.globalScope,
			h = c.crypto || c.msCrypto;
		h && h.getRandomValues && (u = function (T) {
			return h.getRandomValues(T)
		});
		var x = ct.util.createBuffer();
		if (u)
			for (; x.length() < f;) {
				var d = Math.max(1, Math.min(f - x.length(), 65536) / 4),
					g = new Uint32Array(Math.floor(d));
				try {
					u(g);
					for (var v = 0; v < g.length; ++v) x.putInt32(g[v])
				} catch (T) {
					if (!(typeof QuotaExceededError < "u" && T instanceof QuotaExceededError)) throw T
				}
			}
		if (x.length() < f)
			for (var B, E, m, A = Math.floor(Math.random() * 65536); x.length() < f;) {
				E = 16807 * (A & 65535), B = 16807 * (A >> 16), E += (B & 32767) << 16, E += B >> 15, E = (E & 2147483647) + (E >> 31), A = E & 4294967295;
				for (var v = 0; v < 3; ++v) m = A >>> (v << 3), m ^= Math.floor(Math.random() * 256), x.putByte(m & 255)
			}
		return x.getBytes(f)
	}
	return Dr ? (t.seedFile = function (f, u) {
		Dr.randomBytes(f, function (c, h) {
			if (c) return u(c);
			u(null, h.toString())
		})
	}, t.seedFileSync = function (f) {
		return Dr.randomBytes(f).toString()
	}) : (t.seedFile = function (f, u) {
		try {
			u(null, l(f))
		} catch (c) {
			u(c)
		}
	}, t.seedFileSync = l), t.collect = function (f) {
		for (var u = f.length, c = 0; c < u; ++c) t.pools[t.pool].update(f.substr(c, 1)), t.pool = t.pool === 31 ? 0 : t.pool + 1
	}, t.collectInt = function (f, u) {
		for (var c = "", h = 0; h < u; h += 8) c += String.fromCharCode(f >> h & 255);
		t.collect(c)
	}, t.registerWorker = function (f) {
		if (f === self) t.seedFile = function (c, h) {
			function x(d) {
				var g = d.data;
				g.forge && g.forge.prng && (self.removeEventListener("message", x), h(g.forge.prng.err, g.forge.prng.bytes))
			}
			self.addEventListener("message", x), self.postMessage({
				forge: {
					prng: {
						needed: c
					}
				}
			})
		};
		else {
			var u = function (c) {
				var h = c.data;
				h.forge && h.forge.prng && t.seedFile(h.forge.prng.needed, function (x, d) {
					f.postMessage({
						forge: {
							prng: {
								err: x,
								bytes: d
							}
						}
					})
				})
			};
			f.addEventListener("message", u)
		}
	}, t
};
var Ve = le;
(function () {
	if (Ve.random && Ve.random.getBytes) {
		Ve.random;
		return
	}(function (e) {
		var t = {},
			a = new Array(4),
			r = Ve.util.createBuffer();
		t.formatKey = function (c) {
			var h = Ve.util.createBuffer(c);
			return c = new Array(4), c[0] = h.getInt32(), c[1] = h.getInt32(), c[2] = h.getInt32(), c[3] = h.getInt32(), Ve.aes._expandKey(c, !1)
		}, t.formatSeed = function (c) {
			var h = Ve.util.createBuffer(c);
			return c = new Array(4), c[0] = h.getInt32(), c[1] = h.getInt32(), c[2] = h.getInt32(), c[3] = h.getInt32(), c
		}, t.cipher = function (c, h) {
			return Ve.aes._updateBlock(c, h, a, !1), r.putInt32(a[0]), r.putInt32(a[1]), r.putInt32(a[2]), r.putInt32(a[3]), r.getBytes()
		}, t.increment = function (c) {
			return ++c[3], c
		}, t.md = Ve.md.sha256;

		function n() {
			var c = Ve.prng.create(t);
			return c.getBytes = function (h, x) {
				return c.generate(h, x)
			}, c.getBytesSync = function (h) {
				return c.generate(h)
			}, c
		}
		var i = n(),
			s = null,
			o = Ve.util.globalScope,
			l = o.crypto || o.msCrypto;
		if (l && l.getRandomValues && (s = function (c) {
				return l.getRandomValues(c)
			}), Ve.options.usePureJavaScript || !Ve.util.isNodejs && !s) {
			if (i.collectInt(+new Date, 32), typeof navigator < "u") {
				var f = "";
				for (var u in navigator) try {
					typeof navigator[u] == "string" && (f += navigator[u])
				} catch {}
				i.collect(f), f = null
			}
			e && (e().mousemove(function (c) {
				i.collectInt(c.clientX, 16), i.collectInt(c.clientY, 16)
			}), e().keypress(function (c) {
				i.collectInt(c.charCode, 8)
			}))
		}
		if (!Ve.random) Ve.random = i;
		else
			for (var u in i) Ve.random[u] = i[u];
		Ve.random.createInstance = n, Ve.random
	})(typeof jQuery < "u" ? jQuery : null)
})();
var $e = le,
	k0 = [217, 120, 249, 196, 25, 221, 181, 237, 40, 233, 253, 121, 74, 160, 216, 157, 198, 126, 55, 131, 43, 118, 83, 142, 98, 76, 100, 136, 68, 139, 251, 162, 23, 154, 89, 245, 135, 179, 79, 19, 97, 69, 109, 141, 9, 129, 125, 50, 189, 143, 64, 235, 134, 183, 123, 11, 240, 149, 33, 34, 92, 107, 78, 130, 84, 214, 101, 147, 206, 96, 178, 28, 115, 86, 192, 20, 167, 140, 241, 220, 18, 117, 202, 31, 59, 190, 228, 209, 66, 61, 212, 48, 163, 60, 182, 38, 111, 191, 14, 218, 70, 105, 7, 87, 39, 242, 29, 155, 188, 148, 67, 3, 248, 17, 199, 246, 144, 239, 62, 231, 6, 195, 213, 47, 200, 102, 30, 215, 8, 232, 234, 222, 128, 82, 238, 247, 132, 170, 114, 172, 53, 77, 106, 42, 150, 26, 210, 113, 90, 21, 73, 116, 75, 159, 208, 94, 4, 24, 164, 236, 194, 224, 65, 110, 15, 81, 203, 204, 36, 145, 175, 80, 161, 244, 112, 57, 153, 124, 58, 133, 35, 184, 180, 122, 252, 2, 54, 91, 37, 85, 151, 49, 45, 93, 250, 152, 227, 138, 146, 174, 5, 223, 41, 16, 103, 108, 186, 201, 211, 0, 230, 207, 225, 158, 168, 44, 99, 22, 1, 63, 88, 226, 137, 169, 13, 56, 52, 27, 171, 51, 255, 176, 187, 72, 12, 95, 185, 177, 205, 46, 197, 243, 219, 71, 229, 165, 156, 119, 10, 166, 32, 104, 254, 127, 193, 173],
	Tn = [1, 2, 3, 5],
	Zs = function (e, t) {
		return e << t & 65535 | (e & 65535) >> 16 - t
	},
	Js = function (e, t) {
		return (e & 65535) >> t | e << 16 - t & 65535
	};
$e.rc2 = $e.rc2 || {};
$e.rc2.expandKey = function (e, t) {
	typeof e == "string" && (e = $e.util.createBuffer(e)), t = t || 128;
	var a = e,
		r = e.length(),
		n = t,
		i = Math.ceil(n / 8),
		s = 255 >> (n & 7),
		o;
	for (o = r; o < 128; o++) a.putByte(k0[a.at(o - 1) + a.at(o - r) & 255]);
	for (a.setAt(128 - i, k0[a.at(128 - i) & s]), o = 127 - i; o >= 0; o--) a.setAt(o, k0[a.at(o + 1) ^ a.at(o + i)]);
	return a
};
var ii = function (e, t, a) {
	var r = !1,
		n = null,
		i = null,
		s = null,
		o, l, f, u, c = [];
	for (e = $e.rc2.expandKey(e, t), f = 0; f < 64; f++) c.push(e.getInt16Le());
	a ? (o = function (d) {
		for (f = 0; f < 4; f++) d[f] += c[u] + (d[(f + 3) % 4] & d[(f + 2) % 4]) + (~d[(f + 3) % 4] & d[(f + 1) % 4]), d[f] = Zs(d[f], Tn[f]), u++
	}, l = function (d) {
		for (f = 0; f < 4; f++) d[f] += c[d[(f + 3) % 4] & 63]
	}) : (o = function (d) {
		for (f = 3; f >= 0; f--) d[f] = Js(d[f], Tn[f]), d[f] -= c[u] + (d[(f + 3) % 4] & d[(f + 2) % 4]) + (~d[(f + 3) % 4] & d[(f + 1) % 4]), u--
	}, l = function (d) {
		for (f = 3; f >= 0; f--) d[f] -= c[d[(f + 3) % 4] & 63]
	});
	var h = function (d) {
			var g = [];
			for (f = 0; f < 4; f++) {
				var v = n.getInt16Le();
				s !== null && (a ? v ^= s.getInt16Le() : s.putInt16Le(v)), g.push(v & 65535)
			}
			u = a ? 0 : 63;
			for (var B = 0; B < d.length; B++)
				for (var E = 0; E < d[B][0]; E++) d[B][1](g);
			for (f = 0; f < 4; f++) s !== null && (a ? s.putInt16Le(g[f]) : g[f] ^= s.getInt16Le()), i.putInt16Le(g[f])
		},
		x = null;
	return x = {
		start: function (d, g) {
			d && typeof d == "string" && (d = $e.util.createBuffer(d)), r = !1, n = $e.util.createBuffer(), i = g || new $e.util.createBuffer, s = d, x.output = i
		},
		update: function (d) {
			for (r || n.putBuffer(d); n.length() >= 8;) h([
				[5, o],
				[1, l],
				[6, o],
				[1, l],
				[5, o]
			])
		},
		finish: function (d) {
			var g = !0;
			if (a)
				if (d) g = d(8, n, !a);
				else {
					var v = n.length() === 8 ? 8 : 8 - n.length();
					n.fillWithByte(v, v)
				} if (g && (r = !0, x.update()), !a && (g = n.length() === 0, g))
				if (d) g = d(8, i, !a);
				else {
					var B = i.length(),
						E = i.at(B - 1);
					E > B ? g = !1 : i.truncate(E)
				} return g
		}
	}, x
};
$e.rc2.startEncrypting = function (e, t, a) {
	var r = $e.rc2.createEncryptionCipher(e, 128);
	return r.start(t, a), r
};
$e.rc2.createEncryptionCipher = function (e, t) {
	return ii(e, t, !0)
};
$e.rc2.startDecrypting = function (e, t, a) {
	var r = $e.rc2.createDecryptionCipher(e, 128);
	return r.start(t, a), r
};
$e.rc2.createDecryptionCipher = function (e, t) {
	return ii(e, t, !1)
};
var Q0 = le;
Q0.jsbn = Q0.jsbn || {};
var Et;

function q(e, t, a) {
	this.data = [], e != null && (typeof e == "number" ? this.fromNumber(e, t, a) : t == null && typeof e != "string" ? this.fromString(e, 256) : this.fromString(e, t))
}
Q0.jsbn.BigInteger = q;

function Ee() {
	return new q(null)
}

function eo(e, t, a, r, n, i) {
	for (; --i >= 0;) {
		var s = t * this.data[e++] + a.data[r] + n;
		n = Math.floor(s / 67108864), a.data[r++] = s & 67108863
	}
	return n
}

function to(e, t, a, r, n, i) {
	for (var s = t & 32767, o = t >> 15; --i >= 0;) {
		var l = this.data[e] & 32767,
			f = this.data[e++] >> 15,
			u = o * l + f * s;
		l = s * l + ((u & 32767) << 15) + a.data[r] + (n & 1073741823), n = (l >>> 30) + (u >>> 15) + o * f + (n >>> 30), a.data[r++] = l & 1073741823
	}
	return n
}

function bn(e, t, a, r, n, i) {
	for (var s = t & 16383, o = t >> 14; --i >= 0;) {
		var l = this.data[e] & 16383,
			f = this.data[e++] >> 14,
			u = o * l + f * s;
		l = s * l + ((u & 16383) << 14) + a.data[r] + n, n = (l >> 28) + (u >> 14) + o * f, a.data[r++] = l & 268435455
	}
	return n
}
typeof navigator > "u" ? (q.prototype.am = bn, Et = 28) : navigator.appName == "Microsoft Internet Explorer" ? (q.prototype.am = to, Et = 30) : navigator.appName != "Netscape" ? (q.prototype.am = eo, Et = 26) : (q.prototype.am = bn, Et = 28);
q.prototype.DB = Et;
q.prototype.DM = (1 << Et) - 1;
q.prototype.DV = 1 << Et;
var ha = 52;
q.prototype.FV = Math.pow(2, ha);
q.prototype.F1 = ha - Et;
q.prototype.F2 = 2 * Et - ha;
var ro = "0123456789abcdefghijklmnopqrstuvwxyz",
	Wr = new Array,
	rr, at;
rr = 48;
for (at = 0; at <= 9; ++at) Wr[rr++] = at;
rr = 97;
for (at = 10; at < 36; ++at) Wr[rr++] = at;
rr = 65;
for (at = 10; at < 36; ++at) Wr[rr++] = at;

function In(e) {
	return ro.charAt(e)
}

function si(e, t) {
	var a = Wr[e.charCodeAt(t)];
	return a ?? -1
}

function ao(e) {
	for (var t = this.t - 1; t >= 0; --t) e.data[t] = this.data[t];
	e.t = this.t, e.s = this.s
}

function no(e) {
	this.t = 1, this.s = e < 0 ? -1 : 0, e > 0 ? this.data[0] = e : e < -1 ? this.data[0] = e + this.DV : this.t = 0
}

function _t(e) {
	var t = Ee();
	return t.fromInt(e), t
}

function io(e, t) {
	var a;
	if (t == 16) a = 4;
	else if (t == 8) a = 3;
	else if (t == 256) a = 8;
	else if (t == 2) a = 1;
	else if (t == 32) a = 5;
	else if (t == 4) a = 2;
	else {
		this.fromRadix(e, t);
		return
	}
	this.t = 0, this.s = 0;
	for (var r = e.length, n = !1, i = 0; --r >= 0;) {
		var s = a == 8 ? e[r] & 255 : si(e, r);
		if (s < 0) {
			e.charAt(r) == "-" && (n = !0);
			continue
		}
		n = !1, i == 0 ? this.data[this.t++] = s : i + a > this.DB ? (this.data[this.t - 1] |= (s & (1 << this.DB - i) - 1) << i, this.data[this.t++] = s >> this.DB - i) : this.data[this.t - 1] |= s << i, i += a, i >= this.DB && (i -= this.DB)
	}
	a == 8 && e[0] & 128 && (this.s = -1, i > 0 && (this.data[this.t - 1] |= (1 << this.DB - i) - 1 << i)), this.clamp(), n && q.ZERO.subTo(this, this)
}

function so() {
	for (var e = this.s & this.DM; this.t > 0 && this.data[this.t - 1] == e;) --this.t
}

function oo(e) {
	if (this.s < 0) return "-" + this.negate().toString(e);
	var t;
	if (e == 16) t = 4;
	else if (e == 8) t = 3;
	else if (e == 2) t = 1;
	else if (e == 32) t = 5;
	else if (e == 4) t = 2;
	else return this.toRadix(e);
	var a = (1 << t) - 1,
		r, n = !1,
		i = "",
		s = this.t,
		o = this.DB - s * this.DB % t;
	if (s-- > 0)
		for (o < this.DB && (r = this.data[s] >> o) > 0 && (n = !0, i = In(r)); s >= 0;) o < t ? (r = (this.data[s] & (1 << o) - 1) << t - o, r |= this.data[--s] >> (o += this.DB - t)) : (r = this.data[s] >> (o -= t) & a, o <= 0 && (o += this.DB, --s)), r > 0 && (n = !0), n && (i += In(r));
	return n ? i : "0"
}

function fo() {
	var e = Ee();
	return q.ZERO.subTo(this, e), e
}

function uo() {
	return this.s < 0 ? this.negate() : this
}

function lo(e) {
	var t = this.s - e.s;
	if (t != 0) return t;
	var a = this.t;
	if (t = a - e.t, t != 0) return this.s < 0 ? -t : t;
	for (; --a >= 0;)
		if ((t = this.data[a] - e.data[a]) != 0) return t;
	return 0
}

function Xr(e) {
	var t = 1,
		a;
	return (a = e >>> 16) != 0 && (e = a, t += 16), (a = e >> 8) != 0 && (e = a, t += 8), (a = e >> 4) != 0 && (e = a, t += 4), (a = e >> 2) != 0 && (e = a, t += 2), (a = e >> 1) != 0 && (e = a, t += 1), t
}

function co() {
	return this.t <= 0 ? 0 : this.DB * (this.t - 1) + Xr(this.data[this.t - 1] ^ this.s & this.DM)
}

function ho(e, t) {
	var a;
	for (a = this.t - 1; a >= 0; --a) t.data[a + e] = this.data[a];
	for (a = e - 1; a >= 0; --a) t.data[a] = 0;
	t.t = this.t + e, t.s = this.s
}

function xo(e, t) {
	for (var a = e; a < this.t; ++a) t.data[a - e] = this.data[a];
	t.t = Math.max(this.t - e, 0), t.s = this.s
}

function po(e, t) {
	var a = e % this.DB,
		r = this.DB - a,
		n = (1 << r) - 1,
		i = Math.floor(e / this.DB),
		s = this.s << a & this.DM,
		o;
	for (o = this.t - 1; o >= 0; --o) t.data[o + i + 1] = this.data[o] >> r | s, s = (this.data[o] & n) << a;
	for (o = i - 1; o >= 0; --o) t.data[o] = 0;
	t.data[i] = s, t.t = this.t + i + 1, t.s = this.s, t.clamp()
}

function vo(e, t) {
	t.s = this.s;
	var a = Math.floor(e / this.DB);
	if (a >= this.t) {
		t.t = 0;
		return
	}
	var r = e % this.DB,
		n = this.DB - r,
		i = (1 << r) - 1;
	t.data[0] = this.data[a] >> r;
	for (var s = a + 1; s < this.t; ++s) t.data[s - a - 1] |= (this.data[s] & i) << n, t.data[s - a] = this.data[s] >> r;
	r > 0 && (t.data[this.t - a - 1] |= (this.s & i) << n), t.t = this.t - a, t.clamp()
}

function yo(e, t) {
	for (var a = 0, r = 0, n = Math.min(e.t, this.t); a < n;) r += this.data[a] - e.data[a], t.data[a++] = r & this.DM, r >>= this.DB;
	if (e.t < this.t) {
		for (r -= e.s; a < this.t;) r += this.data[a], t.data[a++] = r & this.DM, r >>= this.DB;
		r += this.s
	} else {
		for (r += this.s; a < e.t;) r -= e.data[a], t.data[a++] = r & this.DM, r >>= this.DB;
		r -= e.s
	}
	t.s = r < 0 ? -1 : 0, r < -1 ? t.data[a++] = this.DV + r : r > 0 && (t.data[a++] = r), t.t = a, t.clamp()
}

function go(e, t) {
	var a = this.abs(),
		r = e.abs(),
		n = a.t;
	for (t.t = n + r.t; --n >= 0;) t.data[n] = 0;
	for (n = 0; n < r.t; ++n) t.data[n + a.t] = a.am(0, r.data[n], t, n, 0, a.t);
	t.s = 0, t.clamp(), this.s != e.s && q.ZERO.subTo(t, t)
}

function Co(e) {
	for (var t = this.abs(), a = e.t = 2 * t.t; --a >= 0;) e.data[a] = 0;
	for (a = 0; a < t.t - 1; ++a) {
		var r = t.am(a, t.data[a], e, 2 * a, 0, 1);
		(e.data[a + t.t] += t.am(a + 1, 2 * t.data[a], e, 2 * a + 1, r, t.t - a - 1)) >= t.DV && (e.data[a + t.t] -= t.DV, e.data[a + t.t + 1] = 1)
	}
	e.t > 0 && (e.data[e.t - 1] += t.am(a, t.data[a], e, 2 * a, 0, 1)), e.s = 0, e.clamp()
}

function Eo(e, t, a) {
	var r = e.abs();
	if (!(r.t <= 0)) {
		var n = this.abs();
		if (n.t < r.t) {
			t != null && t.fromInt(0), a != null && this.copyTo(a);
			return
		}
		a == null && (a = Ee());
		var i = Ee(),
			s = this.s,
			o = e.s,
			l = this.DB - Xr(r.data[r.t - 1]);
		l > 0 ? (r.lShiftTo(l, i), n.lShiftTo(l, a)) : (r.copyTo(i), n.copyTo(a));
		var f = i.t,
			u = i.data[f - 1];
		if (u != 0) {
			var c = u * (1 << this.F1) + (f > 1 ? i.data[f - 2] >> this.F2 : 0),
				h = this.FV / c,
				x = (1 << this.F1) / c,
				d = 1 << this.F2,
				g = a.t,
				v = g - f,
				B = t ?? Ee();
			for (i.dlShiftTo(v, B), a.compareTo(B) >= 0 && (a.data[a.t++] = 1, a.subTo(B, a)), q.ONE.dlShiftTo(f, B), B.subTo(i, i); i.t < f;) i.data[i.t++] = 0;
			for (; --v >= 0;) {
				var E = a.data[--g] == u ? this.DM : Math.floor(a.data[g] * h + (a.data[g - 1] + d) * x);
				if ((a.data[g] += i.am(0, E, a, v, 0, f)) < E)
					for (i.dlShiftTo(v, B), a.subTo(B, a); a.data[g] < --E;) a.subTo(B, a)
			}
			t != null && (a.drShiftTo(f, t), s != o && q.ZERO.subTo(t, t)), a.t = f, a.clamp(), l > 0 && a.rShiftTo(l, a), s < 0 && q.ZERO.subTo(a, a)
		}
	}
}

function mo(e) {
	var t = Ee();
	return this.abs().divRemTo(e, null, t), this.s < 0 && t.compareTo(q.ZERO) > 0 && e.subTo(t, t), t
}

function qt(e) {
	this.m = e
}

function Bo(e) {
	return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e
}

function Ao(e) {
	return e
}

function So(e) {
	e.divRemTo(this.m, null, e)
}

function To(e, t, a) {
	e.multiplyTo(t, a), this.reduce(a)
}

function bo(e, t) {
	e.squareTo(t), this.reduce(t)
}
qt.prototype.convert = Bo;
qt.prototype.revert = Ao;
qt.prototype.reduce = So;
qt.prototype.mulTo = To;
qt.prototype.sqrTo = bo;

function Io() {
	if (this.t < 1) return 0;
	var e = this.data[0];
	if (!(e & 1)) return 0;
	var t = e & 3;
	return t = t * (2 - (e & 15) * t) & 15, t = t * (2 - (e & 255) * t) & 255, t = t * (2 - ((e & 65535) * t & 65535)) & 65535, t = t * (2 - e * t % this.DV) % this.DV, t > 0 ? this.DV - t : -t
}

function zt(e) {
	this.m = e, this.mp = e.invDigit(), this.mpl = this.mp & 32767, this.mph = this.mp >> 15, this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t
}

function _o(e) {
	var t = Ee();
	return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && t.compareTo(q.ZERO) > 0 && this.m.subTo(t, t), t
}

function Do(e) {
	var t = Ee();
	return e.copyTo(t), this.reduce(t), t
}

function No(e) {
	for (; e.t <= this.mt2;) e.data[e.t++] = 0;
	for (var t = 0; t < this.m.t; ++t) {
		var a = e.data[t] & 32767,
			r = a * this.mpl + ((a * this.mph + (e.data[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
		for (a = t + this.m.t, e.data[a] += this.m.am(0, r, e, t, 0, this.m.t); e.data[a] >= e.DV;) e.data[a] -= e.DV, e.data[++a]++
	}
	e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e)
}

function Fo(e, t) {
	e.squareTo(t), this.reduce(t)
}

function Ro(e, t, a) {
	e.multiplyTo(t, a), this.reduce(a)
}
zt.prototype.convert = _o;
zt.prototype.revert = Do;
zt.prototype.reduce = No;
zt.prototype.mulTo = Ro;
zt.prototype.sqrTo = Fo;

function wo() {
	return (this.t > 0 ? this.data[0] & 1 : this.s) == 0
}

function ko(e, t) {
	if (e > 4294967295 || e < 1) return q.ONE;
	var a = Ee(),
		r = Ee(),
		n = t.convert(this),
		i = Xr(e) - 1;
	for (n.copyTo(a); --i >= 0;)
		if (t.sqrTo(a, r), (e & 1 << i) > 0) t.mulTo(r, n, a);
		else {
			var s = a;
			a = r, r = s
		} return t.revert(a)
}

function Lo(e, t) {
	var a;
	return e < 256 || t.isEven() ? a = new qt(t) : a = new zt(t), this.exp(e, a)
}
q.prototype.copyTo = ao;
q.prototype.fromInt = no;
q.prototype.fromString = io;
q.prototype.clamp = so;
q.prototype.dlShiftTo = ho;
q.prototype.drShiftTo = xo;
q.prototype.lShiftTo = po;
q.prototype.rShiftTo = vo;
q.prototype.subTo = yo;
q.prototype.multiplyTo = go;
q.prototype.squareTo = Co;
q.prototype.divRemTo = Eo;
q.prototype.invDigit = Io;
q.prototype.isEven = wo;
q.prototype.exp = ko;
q.prototype.toString = oo;
q.prototype.negate = fo;
q.prototype.abs = uo;
q.prototype.compareTo = lo;
q.prototype.bitLength = co;
q.prototype.mod = mo;
q.prototype.modPowInt = Lo;
q.ZERO = _t(0);
q.ONE = _t(1);

function Uo() {
	var e = Ee();
	return this.copyTo(e), e
}

function Po() {
	if (this.s < 0) {
		if (this.t == 1) return this.data[0] - this.DV;
		if (this.t == 0) return -1
	} else {
		if (this.t == 1) return this.data[0];
		if (this.t == 0) return 0
	}
	return (this.data[1] & (1 << 32 - this.DB) - 1) << this.DB | this.data[0]
}

function Vo() {
	return this.t == 0 ? this.s : this.data[0] << 24 >> 24
}

function Oo() {
	return this.t == 0 ? this.s : this.data[0] << 16 >> 16
}

function Ko(e) {
	return Math.floor(Math.LN2 * this.DB / Math.log(e))
}

function Ho() {
	return this.s < 0 ? -1 : this.t <= 0 || this.t == 1 && this.data[0] <= 0 ? 0 : 1
}

function Mo(e) {
	if (e == null && (e = 10), this.signum() == 0 || e < 2 || e > 36) return "0";
	var t = this.chunkSize(e),
		a = Math.pow(e, t),
		r = _t(a),
		n = Ee(),
		i = Ee(),
		s = "";
	for (this.divRemTo(r, n, i); n.signum() > 0;) s = (a + i.intValue()).toString(e).substr(1) + s, n.divRemTo(r, n, i);
	return i.intValue().toString(e) + s
}

function qo(e, t) {
	this.fromInt(0), t == null && (t = 10);
	for (var a = this.chunkSize(t), r = Math.pow(t, a), n = !1, i = 0, s = 0, o = 0; o < e.length; ++o) {
		var l = si(e, o);
		if (l < 0) {
			e.charAt(o) == "-" && this.signum() == 0 && (n = !0);
			continue
		}
		s = t * s + l, ++i >= a && (this.dMultiply(r), this.dAddOffset(s, 0), i = 0, s = 0)
	}
	i > 0 && (this.dMultiply(Math.pow(t, i)), this.dAddOffset(s, 0)), n && q.ZERO.subTo(this, this)
}

function zo(e, t, a) {
	if (typeof t == "number")
		if (e < 2) this.fromInt(1);
		else
			for (this.fromNumber(e, a), this.testBit(e - 1) || this.bitwiseTo(q.ONE.shiftLeft(e - 1), da, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(t);) this.dAddOffset(2, 0), this.bitLength() > e && this.subTo(q.ONE.shiftLeft(e - 1), this);
	else {
		var r = new Array,
			n = e & 7;
		r.length = (e >> 3) + 1, t.nextBytes(r), n > 0 ? r[0] &= (1 << n) - 1 : r[0] = 0, this.fromString(r, 256)
	}
}

function Go() {
	var e = this.t,
		t = new Array;
	t[0] = this.s;
	var a = this.DB - e * this.DB % 8,
		r, n = 0;
	if (e-- > 0)
		for (a < this.DB && (r = this.data[e] >> a) != (this.s & this.DM) >> a && (t[n++] = r | this.s << this.DB - a); e >= 0;) a < 8 ? (r = (this.data[e] & (1 << a) - 1) << 8 - a, r |= this.data[--e] >> (a += this.DB - 8)) : (r = this.data[e] >> (a -= 8) & 255, a <= 0 && (a += this.DB, --e)), r & 128 && (r |= -256), n == 0 && (this.s & 128) != (r & 128) && ++n, (n > 0 || r != this.s) && (t[n++] = r);
	return t
}

function Qo(e) {
	return this.compareTo(e) == 0
}

function Wo(e) {
	return this.compareTo(e) < 0 ? this : e
}

function Xo(e) {
	return this.compareTo(e) > 0 ? this : e
}

function Yo(e, t, a) {
	var r, n, i = Math.min(e.t, this.t);
	for (r = 0; r < i; ++r) a.data[r] = t(this.data[r], e.data[r]);
	if (e.t < this.t) {
		for (n = e.s & this.DM, r = i; r < this.t; ++r) a.data[r] = t(this.data[r], n);
		a.t = this.t
	} else {
		for (n = this.s & this.DM, r = i; r < e.t; ++r) a.data[r] = t(n, e.data[r]);
		a.t = e.t
	}
	a.s = t(this.s, e.s), a.clamp()
}

function $o(e, t) {
	return e & t
}

function jo(e) {
	var t = Ee();
	return this.bitwiseTo(e, $o, t), t
}

function da(e, t) {
	return e | t
}

function Zo(e) {
	var t = Ee();
	return this.bitwiseTo(e, da, t), t
}

function oi(e, t) {
	return e ^ t
}

function Jo(e) {
	var t = Ee();
	return this.bitwiseTo(e, oi, t), t
}

function fi(e, t) {
	return e & ~t
}

function ef(e) {
	var t = Ee();
	return this.bitwiseTo(e, fi, t), t
}

function tf() {
	for (var e = Ee(), t = 0; t < this.t; ++t) e.data[t] = this.DM & ~this.data[t];
	return e.t = this.t, e.s = ~this.s, e
}

function rf(e) {
	var t = Ee();
	return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t
}

function af(e) {
	var t = Ee();
	return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t
}

function nf(e) {
	if (e == 0) return -1;
	var t = 0;
	return e & 65535 || (e >>= 16, t += 16), e & 255 || (e >>= 8, t += 8), e & 15 || (e >>= 4, t += 4), e & 3 || (e >>= 2, t += 2), e & 1 || ++t, t
}

function sf() {
	for (var e = 0; e < this.t; ++e)
		if (this.data[e] != 0) return e * this.DB + nf(this.data[e]);
	return this.s < 0 ? this.t * this.DB : -1
}

function of(e) {
	for (var t = 0; e != 0;) e &= e - 1, ++t;
	return t
}

function ff() {
	for (var e = 0, t = this.s & this.DM, a = 0; a < this.t; ++a) e += of(this.data[a] ^ t);
	return e
}

function uf(e) {
	var t = Math.floor(e / this.DB);
	return t >= this.t ? this.s != 0 : (this.data[t] & 1 << e % this.DB) != 0
}

function lf(e, t) {
	var a = q.ONE.shiftLeft(e);
	return this.bitwiseTo(a, t, a), a
}

function cf(e) {
	return this.changeBit(e, da)
}

function hf(e) {
	return this.changeBit(e, fi)
}

function df(e) {
	return this.changeBit(e, oi)
}

function xf(e, t) {
	for (var a = 0, r = 0, n = Math.min(e.t, this.t); a < n;) r += this.data[a] + e.data[a], t.data[a++] = r & this.DM, r >>= this.DB;
	if (e.t < this.t) {
		for (r += e.s; a < this.t;) r += this.data[a], t.data[a++] = r & this.DM, r >>= this.DB;
		r += this.s
	} else {
		for (r += this.s; a < e.t;) r += e.data[a], t.data[a++] = r & this.DM, r >>= this.DB;
		r += e.s
	}
	t.s = r < 0 ? -1 : 0, r > 0 ? t.data[a++] = r : r < -1 && (t.data[a++] = this.DV + r), t.t = a, t.clamp()
}

function pf(e) {
	var t = Ee();
	return this.addTo(e, t), t
}

function vf(e) {
	var t = Ee();
	return this.subTo(e, t), t
}

function yf(e) {
	var t = Ee();
	return this.multiplyTo(e, t), t
}

function gf(e) {
	var t = Ee();
	return this.divRemTo(e, t, null), t
}

function Cf(e) {
	var t = Ee();
	return this.divRemTo(e, null, t), t
}

function Ef(e) {
	var t = Ee(),
		a = Ee();
	return this.divRemTo(e, t, a), new Array(t, a)
}

function mf(e) {
	this.data[this.t] = this.am(0, e - 1, this, 0, 0, this.t), ++this.t, this.clamp()
}

function Bf(e, t) {
	if (e != 0) {
		for (; this.t <= t;) this.data[this.t++] = 0;
		for (this.data[t] += e; this.data[t] >= this.DV;) this.data[t] -= this.DV, ++t >= this.t && (this.data[this.t++] = 0), ++this.data[t]
	}
}

function Cr() {}

function ui(e) {
	return e
}

function Af(e, t, a) {
	e.multiplyTo(t, a)
}

function Sf(e, t) {
	e.squareTo(t)
}
Cr.prototype.convert = ui;
Cr.prototype.revert = ui;
Cr.prototype.mulTo = Af;
Cr.prototype.sqrTo = Sf;

function Tf(e) {
	return this.exp(e, new Cr)
}

function bf(e, t, a) {
	var r = Math.min(this.t + e.t, t);
	for (a.s = 0, a.t = r; r > 0;) a.data[--r] = 0;
	var n;
	for (n = a.t - this.t; r < n; ++r) a.data[r + this.t] = this.am(0, e.data[r], a, r, 0, this.t);
	for (n = Math.min(e.t, t); r < n; ++r) this.am(0, e.data[r], a, r, 0, t - r);
	a.clamp()
}

function If(e, t, a) {
	--t;
	var r = a.t = this.t + e.t - t;
	for (a.s = 0; --r >= 0;) a.data[r] = 0;
	for (r = Math.max(t - this.t, 0); r < e.t; ++r) a.data[this.t + r - t] = this.am(t - r, e.data[r], a, 0, 0, this.t + r - t);
	a.clamp(), a.drShiftTo(1, a)
}

function ar(e) {
	this.r2 = Ee(), this.q3 = Ee(), q.ONE.dlShiftTo(2 * e.t, this.r2), this.mu = this.r2.divide(e), this.m = e
}

function _f(e) {
	if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
	if (e.compareTo(this.m) < 0) return e;
	var t = Ee();
	return e.copyTo(t), this.reduce(t), t
}

function Df(e) {
	return e
}

function Nf(e) {
	for (e.drShiftTo(this.m.t - 1, this.r2), e.t > this.m.t + 1 && (e.t = this.m.t + 1, e.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); e.compareTo(this.r2) < 0;) e.dAddOffset(1, this.m.t + 1);
	for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0;) e.subTo(this.m, e)
}

function Ff(e, t) {
	e.squareTo(t), this.reduce(t)
}

function Rf(e, t, a) {
	e.multiplyTo(t, a), this.reduce(a)
}
ar.prototype.convert = _f;
ar.prototype.revert = Df;
ar.prototype.reduce = Nf;
ar.prototype.mulTo = Rf;
ar.prototype.sqrTo = Ff;

function wf(e, t) {
	var a = e.bitLength(),
		r, n = _t(1),
		i;
	if (a <= 0) return n;
	a < 18 ? r = 1 : a < 48 ? r = 3 : a < 144 ? r = 4 : a < 768 ? r = 5 : r = 6, a < 8 ? i = new qt(t) : t.isEven() ? i = new ar(t) : i = new zt(t);
	var s = new Array,
		o = 3,
		l = r - 1,
		f = (1 << r) - 1;
	if (s[1] = i.convert(this), r > 1) {
		var u = Ee();
		for (i.sqrTo(s[1], u); o <= f;) s[o] = Ee(), i.mulTo(u, s[o - 2], s[o]), o += 2
	}
	var c = e.t - 1,
		h, x = !0,
		d = Ee(),
		g;
	for (a = Xr(e.data[c]) - 1; c >= 0;) {
		for (a >= l ? h = e.data[c] >> a - l & f : (h = (e.data[c] & (1 << a + 1) - 1) << l - a, c > 0 && (h |= e.data[c - 1] >> this.DB + a - l)), o = r; !(h & 1);) h >>= 1, --o;
		if ((a -= o) < 0 && (a += this.DB, --c), x) s[h].copyTo(n), x = !1;
		else {
			for (; o > 1;) i.sqrTo(n, d), i.sqrTo(d, n), o -= 2;
			o > 0 ? i.sqrTo(n, d) : (g = n, n = d, d = g), i.mulTo(d, s[h], n)
		}
		for (; c >= 0 && !(e.data[c] & 1 << a);) i.sqrTo(n, d), g = n, n = d, d = g, --a < 0 && (a = this.DB - 1, --c)
	}
	return i.revert(n)
}

function kf(e) {
	var t = this.s < 0 ? this.negate() : this.clone(),
		a = e.s < 0 ? e.negate() : e.clone();
	if (t.compareTo(a) < 0) {
		var r = t;
		t = a, a = r
	}
	var n = t.getLowestSetBit(),
		i = a.getLowestSetBit();
	if (i < 0) return t;
	for (n < i && (i = n), i > 0 && (t.rShiftTo(i, t), a.rShiftTo(i, a)); t.signum() > 0;)(n = t.getLowestSetBit()) > 0 && t.rShiftTo(n, t), (n = a.getLowestSetBit()) > 0 && a.rShiftTo(n, a), t.compareTo(a) >= 0 ? (t.subTo(a, t), t.rShiftTo(1, t)) : (a.subTo(t, a), a.rShiftTo(1, a));
	return i > 0 && a.lShiftTo(i, a), a
}

function Lf(e) {
	if (e <= 0) return 0;
	var t = this.DV % e,
		a = this.s < 0 ? e - 1 : 0;
	if (this.t > 0)
		if (t == 0) a = this.data[0] % e;
		else
			for (var r = this.t - 1; r >= 0; --r) a = (t * a + this.data[r]) % e;
	return a
}

function Uf(e) {
	var t = e.isEven();
	if (this.isEven() && t || e.signum() == 0) return q.ZERO;
	for (var a = e.clone(), r = this.clone(), n = _t(1), i = _t(0), s = _t(0), o = _t(1); a.signum() != 0;) {
		for (; a.isEven();) a.rShiftTo(1, a), t ? ((!n.isEven() || !i.isEven()) && (n.addTo(this, n), i.subTo(e, i)), n.rShiftTo(1, n)) : i.isEven() || i.subTo(e, i), i.rShiftTo(1, i);
		for (; r.isEven();) r.rShiftTo(1, r), t ? ((!s.isEven() || !o.isEven()) && (s.addTo(this, s), o.subTo(e, o)), s.rShiftTo(1, s)) : o.isEven() || o.subTo(e, o), o.rShiftTo(1, o);
		a.compareTo(r) >= 0 ? (a.subTo(r, a), t && n.subTo(s, n), i.subTo(o, i)) : (r.subTo(a, r), t && s.subTo(n, s), o.subTo(i, o))
	}
	if (r.compareTo(q.ONE) != 0) return q.ZERO;
	if (o.compareTo(e) >= 0) return o.subtract(e);
	if (o.signum() < 0) o.addTo(e, o);
	else return o;
	return o.signum() < 0 ? o.add(e) : o
}
var ft = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509],
	Pf = (1 << 26) / ft[ft.length - 1];

function Vf(e) {
	var t, a = this.abs();
	if (a.t == 1 && a.data[0] <= ft[ft.length - 1]) {
		for (t = 0; t < ft.length; ++t)
			if (a.data[0] == ft[t]) return !0;
		return !1
	}
	if (a.isEven()) return !1;
	for (t = 1; t < ft.length;) {
		for (var r = ft[t], n = t + 1; n < ft.length && r < Pf;) r *= ft[n++];
		for (r = a.modInt(r); t < n;)
			if (r % ft[t++] == 0) return !1
	}
	return a.millerRabin(e)
}

function Of(e) {
	var t = this.subtract(q.ONE),
		a = t.getLowestSetBit();
	if (a <= 0) return !1;
	for (var r = t.shiftRight(a), n = Kf(), i, s = 0; s < e; ++s) {
		do i = new q(this.bitLength(), n); while (i.compareTo(q.ONE) <= 0 || i.compareTo(t) >= 0);
		var o = i.modPow(r, this);
		if (o.compareTo(q.ONE) != 0 && o.compareTo(t) != 0) {
			for (var l = 1; l++ < a && o.compareTo(t) != 0;)
				if (o = o.modPowInt(2, this), o.compareTo(q.ONE) == 0) return !1;
			if (o.compareTo(t) != 0) return !1
		}
	}
	return !0
}

function Kf() {
	return {
		nextBytes: function (e) {
			for (var t = 0; t < e.length; ++t) e[t] = Math.floor(Math.random() * 256)
		}
	}
}
q.prototype.chunkSize = Ko;
q.prototype.toRadix = Mo;
q.prototype.fromRadix = qo;
q.prototype.fromNumber = zo;
q.prototype.bitwiseTo = Yo;
q.prototype.changeBit = lf;
q.prototype.addTo = xf;
q.prototype.dMultiply = mf;
q.prototype.dAddOffset = Bf;
q.prototype.multiplyLowerTo = bf;
q.prototype.multiplyUpperTo = If;
q.prototype.modInt = Lf;
q.prototype.millerRabin = Of;
q.prototype.clone = Uo;
q.prototype.intValue = Po;
q.prototype.byteValue = Vo;
q.prototype.shortValue = Oo;
q.prototype.signum = Ho;
q.prototype.toByteArray = Go;
q.prototype.equals = Qo;
q.prototype.min = Wo;
q.prototype.max = Xo;
q.prototype.and = jo;
q.prototype.or = Zo;
q.prototype.xor = Jo;
q.prototype.andNot = ef;
q.prototype.not = tf;
q.prototype.shiftLeft = rf;
q.prototype.shiftRight = af;
q.prototype.getLowestSetBit = sf;
q.prototype.bitCount = ff;
q.prototype.testBit = uf;
q.prototype.setBit = cf;
q.prototype.clearBit = hf;
q.prototype.flipBit = df;
q.prototype.add = pf;
q.prototype.subtract = vf;
q.prototype.multiply = yf;
q.prototype.divide = gf;
q.prototype.remainder = Cf;
q.prototype.divideAndRemainder = Ef;
q.prototype.modPow = wf;
q.prototype.modInverse = Uf;
q.prototype.pow = Tf;
q.prototype.gcd = kf;
q.prototype.isProbablePrime = Vf;
var pt = le,
	li = pt.sha1 = pt.sha1 || {};
pt.md.sha1 = pt.md.algorithms.sha1 = li;
li.create = function () {
	ci || Hf();
	var e = null,
		t = pt.util.createBuffer(),
		a = new Array(80),
		r = {
			algorithm: "sha1",
			blockLength: 64,
			digestLength: 20,
			messageLength: 0,
			fullMessageLength: null,
			messageLengthSize: 8
		};
	return r.start = function () {
		r.messageLength = 0, r.fullMessageLength = r.messageLength64 = [];
		for (var n = r.messageLengthSize / 4, i = 0; i < n; ++i) r.fullMessageLength.push(0);
		return t = pt.util.createBuffer(), e = {
			h0: 1732584193,
			h1: 4023233417,
			h2: 2562383102,
			h3: 271733878,
			h4: 3285377520
		}, r
	}, r.start(), r.update = function (n, i) {
		i === "utf8" && (n = pt.util.encodeUtf8(n));
		var s = n.length;
		r.messageLength += s, s = [s / 4294967296 >>> 0, s >>> 0];
		for (var o = r.fullMessageLength.length - 1; o >= 0; --o) r.fullMessageLength[o] += s[1], s[1] = s[0] + (r.fullMessageLength[o] / 4294967296 >>> 0), r.fullMessageLength[o] = r.fullMessageLength[o] >>> 0, s[0] = s[1] / 4294967296 >>> 0;
		return t.putBytes(n), _n(e, a, t), (t.read > 2048 || t.length() === 0) && t.compact(), r
	}, r.digest = function () {
		var n = pt.util.createBuffer();
		n.putBytes(t.bytes());
		var i = r.fullMessageLength[r.fullMessageLength.length - 1] + r.messageLengthSize,
			s = i & r.blockLength - 1;
		n.putBytes(W0.substr(0, r.blockLength - s));
		for (var o, l, f = r.fullMessageLength[0] * 8, u = 0; u < r.fullMessageLength.length - 1; ++u) o = r.fullMessageLength[u + 1] * 8, l = o / 4294967296 >>> 0, f += l, n.putInt32(f >>> 0), f = o >>> 0;
		n.putInt32(f);
		var c = {
			h0: e.h0,
			h1: e.h1,
			h2: e.h2,
			h3: e.h3,
			h4: e.h4
		};
		_n(c, a, n);
		var h = pt.util.createBuffer();
		return h.putInt32(c.h0), h.putInt32(c.h1), h.putInt32(c.h2), h.putInt32(c.h3), h.putInt32(c.h4), h
	}, r
};
var W0 = null,
	ci = !1;

function Hf() {
	W0 = "", W0 += pt.util.fillString("\0", 64), ci = !0
}

function _n(e, t, a) {
	for (var r, n, i, s, o, l, f, u, c = a.length(); c >= 64;) {
		for (n = e.h0, i = e.h1, s = e.h2, o = e.h3, l = e.h4, u = 0; u < 16; ++u) r = a.getInt32(), t[u] = r, f = o ^ i & (s ^ o), r = (n << 5 | n >>> 27) + f + l + 1518500249 + r, l = o, o = s, s = (i << 30 | i >>> 2) >>> 0, i = n, n = r;
		for (; u < 20; ++u) r = t[u - 3] ^ t[u - 8] ^ t[u - 14] ^ t[u - 16], r = r << 1 | r >>> 31, t[u] = r, f = o ^ i & (s ^ o), r = (n << 5 | n >>> 27) + f + l + 1518500249 + r, l = o, o = s, s = (i << 30 | i >>> 2) >>> 0, i = n, n = r;
		for (; u < 32; ++u) r = t[u - 3] ^ t[u - 8] ^ t[u - 14] ^ t[u - 16], r = r << 1 | r >>> 31, t[u] = r, f = i ^ s ^ o, r = (n << 5 | n >>> 27) + f + l + 1859775393 + r, l = o, o = s, s = (i << 30 | i >>> 2) >>> 0, i = n, n = r;
		for (; u < 40; ++u) r = t[u - 6] ^ t[u - 16] ^ t[u - 28] ^ t[u - 32], r = r << 2 | r >>> 30, t[u] = r, f = i ^ s ^ o, r = (n << 5 | n >>> 27) + f + l + 1859775393 + r, l = o, o = s, s = (i << 30 | i >>> 2) >>> 0, i = n, n = r;
		for (; u < 60; ++u) r = t[u - 6] ^ t[u - 16] ^ t[u - 28] ^ t[u - 32], r = r << 2 | r >>> 30, t[u] = r, f = i & s | o & (i ^ s), r = (n << 5 | n >>> 27) + f + l + 2400959708 + r, l = o, o = s, s = (i << 30 | i >>> 2) >>> 0, i = n, n = r;
		for (; u < 80; ++u) r = t[u - 6] ^ t[u - 16] ^ t[u - 28] ^ t[u - 32], r = r << 2 | r >>> 30, t[u] = r, f = i ^ s ^ o, r = (n << 5 | n >>> 27) + f + l + 3395469782 + r, l = o, o = s, s = (i << 30 | i >>> 2) >>> 0, i = n, n = r;
		e.h0 = e.h0 + n | 0, e.h1 = e.h1 + i | 0, e.h2 = e.h2 + s | 0, e.h3 = e.h3 + o | 0, e.h4 = e.h4 + l | 0, c -= 64
	}
}
var vt = le,
	hi = vt.pkcs1 = vt.pkcs1 || {};
hi.encode_rsa_oaep = function (e, t, a) {
	var r, n, i, s;
	typeof a == "string" ? (r = a, n = arguments[3] || void 0, i = arguments[4] || void 0) : a && (r = a.label || void 0, n = a.seed || void 0, i = a.md || void 0, a.mgf1 && a.mgf1.md && (s = a.mgf1.md)), i ? i.start() : i = vt.md.sha1.create(), s || (s = i);
	var o = Math.ceil(e.n.bitLength() / 8),
		l = o - 2 * i.digestLength - 2;
	if (t.length > l) {
		var f = new Error("RSAES-OAEP input message length is too long.");
		throw f.length = t.length, f.maxLength = l, f
	}
	r || (r = ""), i.update(r, "raw");
	for (var u = i.digest(), c = "", h = l - t.length, x = 0; x < h; x++) c += "\0";
	var d = u.getBytes() + c + "" + t;
	if (!n) n = vt.random.getBytes(i.digestLength);
	else if (n.length !== i.digestLength) {
		var f = new Error("Invalid RSAES-OAEP seed. The seed length must match the digest length.");
		throw f.seedLength = n.length, f.digestLength = i.digestLength, f
	}
	var g = Rr(n, o - i.digestLength - 1, s),
		v = vt.util.xorBytes(d, g, d.length),
		B = Rr(v, i.digestLength, s),
		E = vt.util.xorBytes(n, B, n.length);
	return "\0" + E + v
};
hi.decode_rsa_oaep = function (e, t, a) {
	var r, n, i;
	typeof a == "string" ? (r = a, n = arguments[3] || void 0) : a && (r = a.label || void 0, n = a.md || void 0, a.mgf1 && a.mgf1.md && (i = a.mgf1.md));
	var s = Math.ceil(e.n.bitLength() / 8);
	if (t.length !== s) {
		var v = new Error("RSAES-OAEP encoded message length is invalid.");
		throw v.length = t.length, v.expectedLength = s, v
	}
	if (n === void 0 ? n = vt.md.sha1.create() : n.start(), i || (i = n), s < 2 * n.digestLength + 2) throw new Error("RSAES-OAEP key is too short for the hash function.");
	r || (r = ""), n.update(r, "raw");
	for (var o = n.digest().getBytes(), l = t.charAt(0), f = t.substring(1, n.digestLength + 1), u = t.substring(1 + n.digestLength), c = Rr(u, n.digestLength, i), h = vt.util.xorBytes(f, c, f.length), x = Rr(h, s - n.digestLength - 1, i), d = vt.util.xorBytes(u, x, u.length), g = d.substring(0, n.digestLength), v = l !== "\0", B = 0; B < n.digestLength; ++B) v |= o.charAt(B) !== g.charAt(B);
	for (var E = 1, m = n.digestLength, A = n.digestLength; A < d.length; A++) {
		var T = d.charCodeAt(A),
			S = T & 1 ^ 1,
			N = E ? 65534 : 0;
		v |= T & N, E = E & S, m += E
	}
	if (v || d.charCodeAt(m) !== 1) throw new Error("Invalid RSAES-OAEP padding.");
	return d.substring(m + 1)
};

function Rr(e, t, a) {
	a || (a = vt.md.sha1.create());
	for (var r = "", n = Math.ceil(t / a.digestLength), i = 0; i < n; ++i) {
		var s = String.fromCharCode(i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, i & 255);
		a.start(), a.update(e + s), r += a.digest().getBytes()
	}
	return r.substring(0, t)
}
var St = le;
(function () {
	if (St.prime) {
		St.prime;
		return
	}
	var e = St.prime = St.prime || {},
		t = St.jsbn.BigInteger,
		a = [6, 4, 2, 4, 2, 4, 6, 2],
		r = new t(null);
	r.fromInt(30);
	var n = function (c, h) {
		return c | h
	};
	e.generateProbablePrime = function (c, h, x) {
		typeof h == "function" && (x = h, h = {}), h = h || {};
		var d = h.algorithm || "PRIMEINC";
		typeof d == "string" && (d = {
			name: d
		}), d.options = d.options || {};
		var g = h.prng || St.random,
			v = {
				nextBytes: function (B) {
					for (var E = g.getBytesSync(B.length), m = 0; m < B.length; ++m) B[m] = E.charCodeAt(m)
				}
			};
		if (d.name === "PRIMEINC") return i(c, v, d.options, x);
		throw new Error("Invalid prime generation algorithm: " + d.name)
	};

	function i(c, h, x, d) {
		return "workers" in x ? l(c, h, x, d) : s(c, h, x, d)
	}

	function s(c, h, x, d) {
		var g = f(c, h),
			v = 0,
			B = u(g.bitLength());
		"millerRabinTests" in x && (B = x.millerRabinTests);
		var E = 10;
		"maxBlockTime" in x && (E = x.maxBlockTime), o(g, c, h, v, B, E, d)
	}

	function o(c, h, x, d, g, v, B) {
		var E = +new Date;
		do {
			if (c.bitLength() > h && (c = f(h, x)), c.isProbablePrime(g)) return B(null, c);
			c.dAddOffset(a[d++ % 8], 0)
		} while (v < 0 || +new Date - E < v);
		St.util.setImmediate(function () {
			o(c, h, x, d, g, v, B)
		})
	}

	function l(c, h, x, d) {
		if (typeof Worker > "u") return s(c, h, x, d);
		var g = f(c, h),
			v = x.workers,
			B = x.workLoad || 100,
			E = B * 30 / 8,
			m = x.workerScript || "forge/prime.worker.js";
		if (v === -1) return St.util.estimateCores(function (T, S) {
			T && (S = 2), v = S - 1, A()
		});
		A();

		function A() {
			v = Math.max(1, v);
			for (var T = [], S = 0; S < v; ++S) T[S] = new Worker(m);
			for (var S = 0; S < v; ++S) T[S].addEventListener("message", w);
			var N = !1;

			function w(K) {
				if (!N) {
					var D = K.data;
					if (D.found) {
						for (var F = 0; F < T.length; ++F) T[F].terminate();
						return N = !0, d(null, new t(D.prime, 16))
					}
					g.bitLength() > c && (g = f(c, h));
					var U = g.toString(16);
					K.target.postMessage({
						hex: U,
						workLoad: B
					}), g.dAddOffset(E, 0)
				}
			}
		}
	}

	function f(c, h) {
		var x = new t(c, h),
			d = c - 1;
		return x.testBit(d) || x.bitwiseTo(t.ONE.shiftLeft(d), n, x), x.dAddOffset(31 - x.mod(r).byteValue(), 0), x
	}

	function u(c) {
		return c <= 100 ? 27 : c <= 150 ? 18 : c <= 200 ? 15 : c <= 250 ? 12 : c <= 300 ? 9 : c <= 350 ? 8 : c <= 400 ? 7 : c <= 500 ? 6 : c <= 600 ? 5 : c <= 800 ? 4 : c <= 1250 ? 3 : 2
	}
})();
var te = le;
if (typeof Ce > "u") var Ce = te.jsbn.BigInteger;
var X0 = te.util.isNodejs ? Kr : null,
	R = te.asn1,
	nt = te.util;
te.pki = te.pki || {};
te.pki.rsa = te.rsa = te.rsa || {};
var se = te.pki,
	Mf = [6, 4, 2, 4, 2, 4, 6, 2],
	qf = {
		name: "PrivateKeyInfo",
		tagClass: R.Class.UNIVERSAL,
		type: R.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "PrivateKeyInfo.version",
			tagClass: R.Class.UNIVERSAL,
			type: R.Type.INTEGER,
			constructed: !1,
			capture: "privateKeyVersion"
		}, {
			name: "PrivateKeyInfo.privateKeyAlgorithm",
			tagClass: R.Class.UNIVERSAL,
			type: R.Type.SEQUENCE,
			constructed: !0,
			value: [{
				name: "AlgorithmIdentifier.algorithm",
				tagClass: R.Class.UNIVERSAL,
				type: R.Type.OID,
				constructed: !1,
				capture: "privateKeyOid"
			}]
		}, {
			name: "PrivateKeyInfo",
			tagClass: R.Class.UNIVERSAL,
			type: R.Type.OCTETSTRING,
			constructed: !1,
			capture: "privateKey"
		}]
	},
	zf = {
		name: "RSAPrivateKey",
		tagClass: R.Class.UNIVERSAL,
		type: R.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "RSAPrivateKey.version",
			tagClass: R.Class.UNIVERSAL,
			type: R.Type.INTEGER,
			constructed: !1,
			capture: "privateKeyVersion"
		}, {
			name: "RSAPrivateKey.modulus",
			tagClass: R.Class.UNIVERSAL,
			type: R.Type.INTEGER,
			constructed: !1,
			capture: "privateKeyModulus"
		}, {
			name: "RSAPrivateKey.publicExponent",
			tagClass: R.Class.UNIVERSAL,
			type: R.Type.INTEGER,
			constructed: !1,
			capture: "privateKeyPublicExponent"
		}, {
			name: "RSAPrivateKey.privateExponent",
			tagClass: R.Class.UNIVERSAL,
			type: R.Type.INTEGER,
			constructed: !1,
			capture: "privateKeyPrivateExponent"
		}, {
			name: "RSAPrivateKey.prime1",
			tagClass: R.Class.UNIVERSAL,
			type: R.Type.INTEGER,
			constructed: !1,
			capture: "privateKeyPrime1"
		}, {
			name: "RSAPrivateKey.prime2",
			tagClass: R.Class.UNIVERSAL,
			type: R.Type.INTEGER,
			constructed: !1,
			capture: "privateKeyPrime2"
		}, {
			name: "RSAPrivateKey.exponent1",
			tagClass: R.Class.UNIVERSAL,
			type: R.Type.INTEGER,
			constructed: !1,
			capture: "privateKeyExponent1"
		}, {
			name: "RSAPrivateKey.exponent2",
			tagClass: R.Class.UNIVERSAL,
			type: R.Type.INTEGER,
			constructed: !1,
			capture: "privateKeyExponent2"
		}, {
			name: "RSAPrivateKey.coefficient",
			tagClass: R.Class.UNIVERSAL,
			type: R.Type.INTEGER,
			constructed: !1,
			capture: "privateKeyCoefficient"
		}]
	},
	Gf = {
		name: "RSAPublicKey",
		tagClass: R.Class.UNIVERSAL,
		type: R.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "RSAPublicKey.modulus",
			tagClass: R.Class.UNIVERSAL,
			type: R.Type.INTEGER,
			constructed: !1,
			capture: "publicKeyModulus"
		}, {
			name: "RSAPublicKey.exponent",
			tagClass: R.Class.UNIVERSAL,
			type: R.Type.INTEGER,
			constructed: !1,
			capture: "publicKeyExponent"
		}]
	},
	Qf = te.pki.rsa.publicKeyValidator = {
		name: "SubjectPublicKeyInfo",
		tagClass: R.Class.UNIVERSAL,
		type: R.Type.SEQUENCE,
		constructed: !0,
		captureAsn1: "subjectPublicKeyInfo",
		value: [{
			name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
			tagClass: R.Class.UNIVERSAL,
			type: R.Type.SEQUENCE,
			constructed: !0,
			value: [{
				name: "AlgorithmIdentifier.algorithm",
				tagClass: R.Class.UNIVERSAL,
				type: R.Type.OID,
				constructed: !1,
				capture: "publicKeyOid"
			}]
		}, {
			name: "SubjectPublicKeyInfo.subjectPublicKey",
			tagClass: R.Class.UNIVERSAL,
			type: R.Type.BITSTRING,
			constructed: !1,
			value: [{
				name: "SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey",
				tagClass: R.Class.UNIVERSAL,
				type: R.Type.SEQUENCE,
				constructed: !0,
				optional: !0,
				captureAsn1: "rsaPublicKey"
			}]
		}]
	},
	Wf = {
		name: "DigestInfo",
		tagClass: R.Class.UNIVERSAL,
		type: R.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "DigestInfo.DigestAlgorithm",
			tagClass: R.Class.UNIVERSAL,
			type: R.Type.SEQUENCE,
			constructed: !0,
			value: [{
				name: "DigestInfo.DigestAlgorithm.algorithmIdentifier",
				tagClass: R.Class.UNIVERSAL,
				type: R.Type.OID,
				constructed: !1,
				capture: "algorithmIdentifier"
			}, {
				name: "DigestInfo.DigestAlgorithm.parameters",
				tagClass: R.Class.UNIVERSAL,
				type: R.Type.NULL,
				capture: "parameters",
				optional: !0,
				constructed: !1
			}]
		}, {
			name: "DigestInfo.digest",
			tagClass: R.Class.UNIVERSAL,
			type: R.Type.OCTETSTRING,
			constructed: !1,
			capture: "digest"
		}]
	},
	Xf = function (e) {
		var t;
		if (e.algorithm in se.oids) t = se.oids[e.algorithm];
		else {
			var a = new Error("Unknown message digest algorithm.");
			throw a.algorithm = e.algorithm, a
		}
		var r = R.oidToDer(t).getBytes(),
			n = R.create(R.Class.UNIVERSAL, R.Type.SEQUENCE, !0, []),
			i = R.create(R.Class.UNIVERSAL, R.Type.SEQUENCE, !0, []);
		i.value.push(R.create(R.Class.UNIVERSAL, R.Type.OID, !1, r)), i.value.push(R.create(R.Class.UNIVERSAL, R.Type.NULL, !1, ""));
		var s = R.create(R.Class.UNIVERSAL, R.Type.OCTETSTRING, !1, e.digest().getBytes());
		return n.value.push(i), n.value.push(s), R.toDer(n).getBytes()
	},
	di = function (e, t, a) {
		if (a) return e.modPow(t.e, t.n);
		if (!t.p || !t.q) return e.modPow(t.d, t.n);
		t.dP || (t.dP = t.d.mod(t.p.subtract(Ce.ONE))), t.dQ || (t.dQ = t.d.mod(t.q.subtract(Ce.ONE))), t.qInv || (t.qInv = t.q.modInverse(t.p));
		var r;
		do r = new Ce(te.util.bytesToHex(te.random.getBytes(t.n.bitLength() / 8)), 16); while (r.compareTo(t.n) >= 0 || !r.gcd(t.n).equals(Ce.ONE));
		e = e.multiply(r.modPow(t.e, t.n)).mod(t.n);
		for (var n = e.mod(t.p).modPow(t.dP, t.p), i = e.mod(t.q).modPow(t.dQ, t.q); n.compareTo(i) < 0;) n = n.add(t.p);
		var s = n.subtract(i).multiply(t.qInv).mod(t.p).multiply(t.q).add(i);
		return s = s.multiply(r.modInverse(t.n)).mod(t.n), s
	};
se.rsa.encrypt = function (e, t, a) {
	var r = a,
		n, i = Math.ceil(t.n.bitLength() / 8);
	a !== !1 && a !== !0 ? (r = a === 2, n = xi(e, t, a)) : (n = te.util.createBuffer(), n.putBytes(e));
	for (var s = new Ce(n.toHex(), 16), o = di(s, t, r), l = o.toString(16), f = te.util.createBuffer(), u = i - Math.ceil(l.length / 2); u > 0;) f.putByte(0), --u;
	return f.putBytes(te.util.hexToBytes(l)), f.getBytes()
};
se.rsa.decrypt = function (e, t, a, r) {
	var n = Math.ceil(t.n.bitLength() / 8);
	if (e.length !== n) {
		var i = new Error("Encrypted message length is invalid.");
		throw i.length = e.length, i.expected = n, i
	}
	var s = new Ce(te.util.createBuffer(e).toHex(), 16);
	if (s.compareTo(t.n) >= 0) throw new Error("Encrypted message is invalid.");
	for (var o = di(s, t, a), l = o.toString(16), f = te.util.createBuffer(), u = n - Math.ceil(l.length / 2); u > 0;) f.putByte(0), --u;
	return f.putBytes(te.util.hexToBytes(l)), r !== !1 ? wr(f.getBytes(), t, a) : f.getBytes()
};
se.rsa.createKeyPairGenerationState = function (e, t, a) {
	typeof e == "string" && (e = parseInt(e, 10)), e = e || 2048, a = a || {};
	var r = a.prng || te.random,
		n = {
			nextBytes: function (o) {
				for (var l = r.getBytesSync(o.length), f = 0; f < o.length; ++f) o[f] = l.charCodeAt(f)
			}
		},
		i = a.algorithm || "PRIMEINC",
		s;
	if (i === "PRIMEINC") s = {
		algorithm: i,
		state: 0,
		bits: e,
		rng: n,
		eInt: t || 65537,
		e: new Ce(null),
		p: null,
		q: null,
		qBits: e >> 1,
		pBits: e - (e >> 1),
		pqState: 0,
		num: null,
		keys: null
	}, s.e.fromInt(s.eInt);
	else throw new Error("Invalid key generation algorithm: " + i);
	return s
};
se.rsa.stepKeyPairGenerationState = function (e, t) {
	"algorithm" in e || (e.algorithm = "PRIMEINC");
	var a = new Ce(null);
	a.fromInt(30);
	for (var r = 0, n = function (c, h) {
			return c | h
		}, i = +new Date, s, o = 0; e.keys === null && (t <= 0 || o < t);) {
		if (e.state === 0) {
			var l = e.p === null ? e.pBits : e.qBits,
				f = l - 1;
			e.pqState === 0 ? (e.num = new Ce(l, e.rng), e.num.testBit(f) || e.num.bitwiseTo(Ce.ONE.shiftLeft(f), n, e.num), e.num.dAddOffset(31 - e.num.mod(a).byteValue(), 0), r = 0, ++e.pqState) : e.pqState === 1 ? e.num.bitLength() > l ? e.pqState = 0 : e.num.isProbablePrime($f(e.num.bitLength())) ? ++e.pqState : e.num.dAddOffset(Mf[r++ % 8], 0) : e.pqState === 2 ? e.pqState = e.num.subtract(Ce.ONE).gcd(e.e).compareTo(Ce.ONE) === 0 ? 3 : 0 : e.pqState === 3 && (e.pqState = 0, e.p === null ? e.p = e.num : e.q = e.num, e.p !== null && e.q !== null && ++e.state, e.num = null)
		} else if (e.state === 1) e.p.compareTo(e.q) < 0 && (e.num = e.p, e.p = e.q, e.q = e.num), ++e.state;
		else if (e.state === 2) e.p1 = e.p.subtract(Ce.ONE), e.q1 = e.q.subtract(Ce.ONE), e.phi = e.p1.multiply(e.q1), ++e.state;
		else if (e.state === 3) e.phi.gcd(e.e).compareTo(Ce.ONE) === 0 ? ++e.state : (e.p = null, e.q = null, e.state = 0);
		else if (e.state === 4) e.n = e.p.multiply(e.q), e.n.bitLength() === e.bits ? ++e.state : (e.q = null, e.state = 0);
		else if (e.state === 5) {
			var u = e.e.modInverse(e.phi);
			e.keys = {
				privateKey: se.rsa.setPrivateKey(e.n, e.e, u, e.p, e.q, u.mod(e.p1), u.mod(e.q1), e.q.modInverse(e.p)),
				publicKey: se.rsa.setPublicKey(e.n, e.e)
			}
		}
		s = +new Date, o += s - i, i = s
	}
	return e.keys !== null
};
se.rsa.generateKeyPair = function (e, t, a, r) {
	if (arguments.length === 1 ? typeof e == "object" ? (a = e, e = void 0) : typeof e == "function" && (r = e, e = void 0) : arguments.length === 2 ? typeof e == "number" ? typeof t == "function" ? (r = t, t = void 0) : typeof t != "number" && (a = t, t = void 0) : (a = e, r = t, e = void 0, t = void 0) : arguments.length === 3 && (typeof t == "number" ? typeof a == "function" && (r = a, a = void 0) : (r = a, a = t, t = void 0)), a = a || {}, e === void 0 && (e = a.bits || 2048), t === void 0 && (t = a.e || 65537), !te.options.usePureJavaScript && !a.prng && e >= 256 && e <= 16384 && (t === 65537 || t === 3)) {
		if (r) {
			if (Dn("generateKeyPair")) return X0.generateKeyPair("rsa", {
				modulusLength: e,
				publicExponent: t,
				publicKeyEncoding: {
					type: "spki",
					format: "pem"
				},
				privateKeyEncoding: {
					type: "pkcs8",
					format: "pem"
				}
			}, function (o, l, f) {
				if (o) return r(o);
				r(null, {
					privateKey: se.privateKeyFromPem(f),
					publicKey: se.publicKeyFromPem(l)
				})
			});
			if (Nn("generateKey") && Nn("exportKey")) return nt.globalScope.crypto.subtle.generateKey({
				name: "RSASSA-PKCS1-v1_5",
				modulusLength: e,
				publicExponent: Rn(t),
				hash: {
					name: "SHA-256"
				}
			}, !0, ["sign", "verify"]).then(function (o) {
				return nt.globalScope.crypto.subtle.exportKey("pkcs8", o.privateKey)
			}).then(void 0, function (o) {
				r(o)
			}).then(function (o) {
				if (o) {
					var l = se.privateKeyFromAsn1(R.fromDer(te.util.createBuffer(o)));
					r(null, {
						privateKey: l,
						publicKey: se.setRsaPublicKey(l.n, l.e)
					})
				}
			});
			if (Fn("generateKey") && Fn("exportKey")) {
				var n = nt.globalScope.msCrypto.subtle.generateKey({
					name: "RSASSA-PKCS1-v1_5",
					modulusLength: e,
					publicExponent: Rn(t),
					hash: {
						name: "SHA-256"
					}
				}, !0, ["sign", "verify"]);
				n.oncomplete = function (o) {
					var l = o.target.result,
						f = nt.globalScope.msCrypto.subtle.exportKey("pkcs8", l.privateKey);
					f.oncomplete = function (u) {
						var c = u.target.result,
							h = se.privateKeyFromAsn1(R.fromDer(te.util.createBuffer(c)));
						r(null, {
							privateKey: h,
							publicKey: se.setRsaPublicKey(h.n, h.e)
						})
					}, f.onerror = function (u) {
						r(u)
					}
				}, n.onerror = function (o) {
					r(o)
				};
				return
			}
		} else if (Dn("generateKeyPairSync")) {
			var i = X0.generateKeyPairSync("rsa", {
				modulusLength: e,
				publicExponent: t,
				publicKeyEncoding: {
					type: "spki",
					format: "pem"
				},
				privateKeyEncoding: {
					type: "pkcs8",
					format: "pem"
				}
			});
			return {
				privateKey: se.privateKeyFromPem(i.privateKey),
				publicKey: se.publicKeyFromPem(i.publicKey)
			}
		}
	}
	var s = se.rsa.createKeyPairGenerationState(e, t, a);
	if (!r) return se.rsa.stepKeyPairGenerationState(s, 0), s.keys;
	Yf(s, a, r)
};
se.setRsaPublicKey = se.rsa.setPublicKey = function (e, t) {
	var a = {
		n: e,
		e: t
	};
	return a.encrypt = function (r, n, i) {
		if (typeof n == "string" ? n = n.toUpperCase() : n === void 0 && (n = "RSAES-PKCS1-V1_5"), n === "RSAES-PKCS1-V1_5") n = {
			encode: function (o, l, f) {
				return xi(o, l, 2).getBytes()
			}
		};
		else if (n === "RSA-OAEP" || n === "RSAES-OAEP") n = {
			encode: function (o, l) {
				return te.pkcs1.encode_rsa_oaep(l, o, i)
			}
		};
		else if (["RAW", "NONE", "NULL", null].indexOf(n) !== -1) n = {
			encode: function (o) {
				return o
			}
		};
		else if (typeof n == "string") throw new Error('Unsupported encryption scheme: "' + n + '".');
		var s = n.encode(r, a, !0);
		return se.rsa.encrypt(s, a, !0)
	}, a.verify = function (r, n, i, s) {
		typeof i == "string" ? i = i.toUpperCase() : i === void 0 && (i = "RSASSA-PKCS1-V1_5"), s === void 0 && (s = {
			_parseAllDigestBytes: !0
		}), "_parseAllDigestBytes" in s || (s._parseAllDigestBytes = !0), i === "RSASSA-PKCS1-V1_5" ? i = {
			verify: function (l, f) {
				f = wr(f, a, !0);
				var u = R.fromDer(f, {
						parseAllBytes: s._parseAllDigestBytes
					}),
					c = {},
					h = [];
				if (!R.validate(u, Wf, c, h)) {
					var x = new Error("ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value.");
					throw x.errors = h, x
				}
				var d = R.derToOid(c.algorithmIdentifier);
				if (!(d === te.oids.md2 || d === te.oids.md5 || d === te.oids.sha1 || d === te.oids.sha224 || d === te.oids.sha256 || d === te.oids.sha384 || d === te.oids.sha512 || d === te.oids["sha512-224"] || d === te.oids["sha512-256"])) {
					var x = new Error("Unknown RSASSA-PKCS1-v1_5 DigestAlgorithm identifier.");
					throw x.oid = d, x
				}
				if ((d === te.oids.md2 || d === te.oids.md5) && !("parameters" in c)) throw new Error("ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value. Missing algorithm identifer NULL parameters.");
				return l === c.digest
			}
		} : (i === "NONE" || i === "NULL" || i === null) && (i = {
			verify: function (l, f) {
				return f = wr(f, a, !0), l === f
			}
		});
		var o = se.rsa.decrypt(n, a, !0, !1);
		return i.verify(r, o, a.n.bitLength())
	}, a
};
se.setRsaPrivateKey = se.rsa.setPrivateKey = function (e, t, a, r, n, i, s, o) {
	var l = {
		n: e,
		e: t,
		d: a,
		p: r,
		q: n,
		dP: i,
		dQ: s,
		qInv: o
	};
	return l.decrypt = function (f, u, c) {
		typeof u == "string" ? u = u.toUpperCase() : u === void 0 && (u = "RSAES-PKCS1-V1_5");
		var h = se.rsa.decrypt(f, l, !1, !1);
		if (u === "RSAES-PKCS1-V1_5") u = {
			decode: wr
		};
		else if (u === "RSA-OAEP" || u === "RSAES-OAEP") u = {
			decode: function (x, d) {
				return te.pkcs1.decode_rsa_oaep(d, x, c)
			}
		};
		else if (["RAW", "NONE", "NULL", null].indexOf(u) !== -1) u = {
			decode: function (x) {
				return x
			}
		};
		else throw new Error('Unsupported encryption scheme: "' + u + '".');
		return u.decode(h, l, !1)
	}, l.sign = function (f, u) {
		var c = !1;
		typeof u == "string" && (u = u.toUpperCase()), u === void 0 || u === "RSASSA-PKCS1-V1_5" ? (u = {
			encode: Xf
		}, c = 1) : (u === "NONE" || u === "NULL" || u === null) && (u = {
			encode: function () {
				return f
			}
		}, c = 1);
		var h = u.encode(f, l.n.bitLength());
		return se.rsa.encrypt(h, l, c)
	}, l
};
se.wrapRsaPrivateKey = function (e) {
	return R.create(R.Class.UNIVERSAL, R.Type.SEQUENCE, !0, [R.create(R.Class.UNIVERSAL, R.Type.INTEGER, !1, R.integerToDer(0).getBytes()), R.create(R.Class.UNIVERSAL, R.Type.SEQUENCE, !0, [R.create(R.Class.UNIVERSAL, R.Type.OID, !1, R.oidToDer(se.oids.rsaEncryption).getBytes()), R.create(R.Class.UNIVERSAL, R.Type.NULL, !1, "")]), R.create(R.Class.UNIVERSAL, R.Type.OCTETSTRING, !1, R.toDer(e).getBytes())])
};
se.privateKeyFromAsn1 = function (e) {
	var t = {},
		a = [];
	if (R.validate(e, qf, t, a) && (e = R.fromDer(te.util.createBuffer(t.privateKey))), t = {}, a = [], !R.validate(e, zf, t, a)) {
		var r = new Error("Cannot read private key. ASN.1 object does not contain an RSAPrivateKey.");
		throw r.errors = a, r
	}
	var n, i, s, o, l, f, u, c;
	return n = te.util.createBuffer(t.privateKeyModulus).toHex(), i = te.util.createBuffer(t.privateKeyPublicExponent).toHex(), s = te.util.createBuffer(t.privateKeyPrivateExponent).toHex(), o = te.util.createBuffer(t.privateKeyPrime1).toHex(), l = te.util.createBuffer(t.privateKeyPrime2).toHex(), f = te.util.createBuffer(t.privateKeyExponent1).toHex(), u = te.util.createBuffer(t.privateKeyExponent2).toHex(), c = te.util.createBuffer(t.privateKeyCoefficient).toHex(), se.setRsaPrivateKey(new Ce(n, 16), new Ce(i, 16), new Ce(s, 16), new Ce(o, 16), new Ce(l, 16), new Ce(f, 16), new Ce(u, 16), new Ce(c, 16))
};
se.privateKeyToAsn1 = se.privateKeyToRSAPrivateKey = function (e) {
	return R.create(R.Class.UNIVERSAL, R.Type.SEQUENCE, !0, [R.create(R.Class.UNIVERSAL, R.Type.INTEGER, !1, R.integerToDer(0).getBytes()), R.create(R.Class.UNIVERSAL, R.Type.INTEGER, !1, lt(e.n)), R.create(R.Class.UNIVERSAL, R.Type.INTEGER, !1, lt(e.e)), R.create(R.Class.UNIVERSAL, R.Type.INTEGER, !1, lt(e.d)), R.create(R.Class.UNIVERSAL, R.Type.INTEGER, !1, lt(e.p)), R.create(R.Class.UNIVERSAL, R.Type.INTEGER, !1, lt(e.q)), R.create(R.Class.UNIVERSAL, R.Type.INTEGER, !1, lt(e.dP)), R.create(R.Class.UNIVERSAL, R.Type.INTEGER, !1, lt(e.dQ)), R.create(R.Class.UNIVERSAL, R.Type.INTEGER, !1, lt(e.qInv))])
};
se.publicKeyFromAsn1 = function (e) {
	var t = {},
		a = [];
	if (R.validate(e, Qf, t, a)) {
		var r = R.derToOid(t.publicKeyOid);
		if (r !== se.oids.rsaEncryption) {
			var n = new Error("Cannot read public key. Unknown OID.");
			throw n.oid = r, n
		}
		e = t.rsaPublicKey
	}
	if (a = [], !R.validate(e, Gf, t, a)) {
		var n = new Error("Cannot read public key. ASN.1 object does not contain an RSAPublicKey.");
		throw n.errors = a, n
	}
	var i = te.util.createBuffer(t.publicKeyModulus).toHex(),
		s = te.util.createBuffer(t.publicKeyExponent).toHex();
	return se.setRsaPublicKey(new Ce(i, 16), new Ce(s, 16))
};
se.publicKeyToAsn1 = se.publicKeyToSubjectPublicKeyInfo = function (e) {
	return R.create(R.Class.UNIVERSAL, R.Type.SEQUENCE, !0, [R.create(R.Class.UNIVERSAL, R.Type.SEQUENCE, !0, [R.create(R.Class.UNIVERSAL, R.Type.OID, !1, R.oidToDer(se.oids.rsaEncryption).getBytes()), R.create(R.Class.UNIVERSAL, R.Type.NULL, !1, "")]), R.create(R.Class.UNIVERSAL, R.Type.BITSTRING, !1, [se.publicKeyToRSAPublicKey(e)])])
};
se.publicKeyToRSAPublicKey = function (e) {
	return R.create(R.Class.UNIVERSAL, R.Type.SEQUENCE, !0, [R.create(R.Class.UNIVERSAL, R.Type.INTEGER, !1, lt(e.n)), R.create(R.Class.UNIVERSAL, R.Type.INTEGER, !1, lt(e.e))])
};

function xi(e, t, a) {
	var r = te.util.createBuffer(),
		n = Math.ceil(t.n.bitLength() / 8);
	if (e.length > n - 11) {
		var i = new Error("Message is too long for PKCS#1 v1.5 padding.");
		throw i.length = e.length, i.max = n - 11, i
	}
	r.putByte(0), r.putByte(a);
	var s = n - 3 - e.length,
		o;
	if (a === 0 || a === 1) {
		o = a === 0 ? 0 : 255;
		for (var l = 0; l < s; ++l) r.putByte(o)
	} else
		for (; s > 0;) {
			for (var f = 0, u = te.random.getBytes(s), l = 0; l < s; ++l) o = u.charCodeAt(l), o === 0 ? ++f : r.putByte(o);
			s = f
		}
	return r.putByte(0), r.putBytes(e), r
}

function wr(e, t, a, r) {
	var n = Math.ceil(t.n.bitLength() / 8),
		i = te.util.createBuffer(e),
		s = i.getByte(),
		o = i.getByte();
	if (s !== 0 || a && o !== 0 && o !== 1 || !a && o != 2 || a && o === 0 && typeof r > "u") throw new Error("Encryption block is invalid.");
	var l = 0;
	if (o === 0) {
		l = n - 3 - r;
		for (var f = 0; f < l; ++f)
			if (i.getByte() !== 0) throw new Error("Encryption block is invalid.")
	} else if (o === 1)
		for (l = 0; i.length() > 1;) {
			if (i.getByte() !== 255) {
				--i.read;
				break
			}++l
		} else if (o === 2)
			for (l = 0; i.length() > 1;) {
				if (i.getByte() === 0) {
					--i.read;
					break
				}++l
			}
	var u = i.getByte();
	if (u !== 0 || l !== n - 3 - i.length()) throw new Error("Encryption block is invalid.");
	return i.getBytes()
}

function Yf(e, t, a) {
	typeof t == "function" && (a = t, t = {}), t = t || {};
	var r = {
		algorithm: {
			name: t.algorithm || "PRIMEINC",
			options: {
				workers: t.workers || 2,
				workLoad: t.workLoad || 100,
				workerScript: t.workerScript
			}
		}
	};
	"prng" in t && (r.prng = t.prng), n();

	function n() {
		i(e.pBits, function (o, l) {
			if (o) return a(o);
			if (e.p = l, e.q !== null) return s(o, e.q);
			i(e.qBits, s)
		})
	}

	function i(o, l) {
		te.prime.generateProbablePrime(o, r, l)
	}

	function s(o, l) {
		if (o) return a(o);
		if (e.q = l, e.p.compareTo(e.q) < 0) {
			var f = e.p;
			e.p = e.q, e.q = f
		}
		if (e.p.subtract(Ce.ONE).gcd(e.e).compareTo(Ce.ONE) !== 0) {
			e.p = null, n();
			return
		}
		if (e.q.subtract(Ce.ONE).gcd(e.e).compareTo(Ce.ONE) !== 0) {
			e.q = null, i(e.qBits, s);
			return
		}
		if (e.p1 = e.p.subtract(Ce.ONE), e.q1 = e.q.subtract(Ce.ONE), e.phi = e.p1.multiply(e.q1), e.phi.gcd(e.e).compareTo(Ce.ONE) !== 0) {
			e.p = e.q = null, n();
			return
		}
		if (e.n = e.p.multiply(e.q), e.n.bitLength() !== e.bits) {
			e.q = null, i(e.qBits, s);
			return
		}
		var u = e.e.modInverse(e.phi);
		e.keys = {
			privateKey: se.rsa.setPrivateKey(e.n, e.e, u, e.p, e.q, u.mod(e.p1), u.mod(e.q1), e.q.modInverse(e.p)),
			publicKey: se.rsa.setPublicKey(e.n, e.e)
		}, a(null, e.keys)
	}
}

function lt(e) {
	var t = e.toString(16);
	t[0] >= "8" && (t = "00" + t);
	var a = te.util.hexToBytes(t);
	return a.length > 1 && (a.charCodeAt(0) === 0 && !(a.charCodeAt(1) & 128) || a.charCodeAt(0) === 255 && (a.charCodeAt(1) & 128) === 128) ? a.substr(1) : a
}

function $f(e) {
	return e <= 100 ? 27 : e <= 150 ? 18 : e <= 200 ? 15 : e <= 250 ? 12 : e <= 300 ? 9 : e <= 350 ? 8 : e <= 400 ? 7 : e <= 500 ? 6 : e <= 600 ? 5 : e <= 800 ? 4 : e <= 1250 ? 3 : 2
}

function Dn(e) {
	return te.util.isNodejs && typeof X0[e] == "function"
}

function Nn(e) {
	return typeof nt.globalScope < "u" && typeof nt.globalScope.crypto == "object" && typeof nt.globalScope.crypto.subtle == "object" && typeof nt.globalScope.crypto.subtle[e] == "function"
}

function Fn(e) {
	return typeof nt.globalScope < "u" && typeof nt.globalScope.msCrypto == "object" && typeof nt.globalScope.msCrypto.subtle == "object" && typeof nt.globalScope.msCrypto.subtle[e] == "function"
}

function Rn(e) {
	for (var t = te.util.hexToBytes(e.toString(16)), a = new Uint8Array(t.length), r = 0; r < t.length; ++r) a[r] = t.charCodeAt(r);
	return a
}
var j = le;
if (typeof jf > "u") var jf = j.jsbn.BigInteger;
var L = j.asn1,
	fe = j.pki = j.pki || {};
fe.pbe = j.pbe = j.pbe || {};
var Lt = fe.oids,
	Zf = {
		name: "EncryptedPrivateKeyInfo",
		tagClass: L.Class.UNIVERSAL,
		type: L.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "EncryptedPrivateKeyInfo.encryptionAlgorithm",
			tagClass: L.Class.UNIVERSAL,
			type: L.Type.SEQUENCE,
			constructed: !0,
			value: [{
				name: "AlgorithmIdentifier.algorithm",
				tagClass: L.Class.UNIVERSAL,
				type: L.Type.OID,
				constructed: !1,
				capture: "encryptionOid"
			}, {
				name: "AlgorithmIdentifier.parameters",
				tagClass: L.Class.UNIVERSAL,
				type: L.Type.SEQUENCE,
				constructed: !0,
				captureAsn1: "encryptionParams"
			}]
		}, {
			name: "EncryptedPrivateKeyInfo.encryptedData",
			tagClass: L.Class.UNIVERSAL,
			type: L.Type.OCTETSTRING,
			constructed: !1,
			capture: "encryptedData"
		}]
	},
	Jf = {
		name: "PBES2Algorithms",
		tagClass: L.Class.UNIVERSAL,
		type: L.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "PBES2Algorithms.keyDerivationFunc",
			tagClass: L.Class.UNIVERSAL,
			type: L.Type.SEQUENCE,
			constructed: !0,
			value: [{
				name: "PBES2Algorithms.keyDerivationFunc.oid",
				tagClass: L.Class.UNIVERSAL,
				type: L.Type.OID,
				constructed: !1,
				capture: "kdfOid"
			}, {
				name: "PBES2Algorithms.params",
				tagClass: L.Class.UNIVERSAL,
				type: L.Type.SEQUENCE,
				constructed: !0,
				value: [{
					name: "PBES2Algorithms.params.salt",
					tagClass: L.Class.UNIVERSAL,
					type: L.Type.OCTETSTRING,
					constructed: !1,
					capture: "kdfSalt"
				}, {
					name: "PBES2Algorithms.params.iterationCount",
					tagClass: L.Class.UNIVERSAL,
					type: L.Type.INTEGER,
					constructed: !1,
					capture: "kdfIterationCount"
				}, {
					name: "PBES2Algorithms.params.keyLength",
					tagClass: L.Class.UNIVERSAL,
					type: L.Type.INTEGER,
					constructed: !1,
					optional: !0,
					capture: "keyLength"
				}, {
					name: "PBES2Algorithms.params.prf",
					tagClass: L.Class.UNIVERSAL,
					type: L.Type.SEQUENCE,
					constructed: !0,
					optional: !0,
					value: [{
						name: "PBES2Algorithms.params.prf.algorithm",
						tagClass: L.Class.UNIVERSAL,
						type: L.Type.OID,
						constructed: !1,
						capture: "prfOid"
					}]
				}]
			}]
		}, {
			name: "PBES2Algorithms.encryptionScheme",
			tagClass: L.Class.UNIVERSAL,
			type: L.Type.SEQUENCE,
			constructed: !0,
			value: [{
				name: "PBES2Algorithms.encryptionScheme.oid",
				tagClass: L.Class.UNIVERSAL,
				type: L.Type.OID,
				constructed: !1,
				capture: "encOid"
			}, {
				name: "PBES2Algorithms.encryptionScheme.iv",
				tagClass: L.Class.UNIVERSAL,
				type: L.Type.OCTETSTRING,
				constructed: !1,
				capture: "encIv"
			}]
		}]
	},
	eu = {
		name: "pkcs-12PbeParams",
		tagClass: L.Class.UNIVERSAL,
		type: L.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "pkcs-12PbeParams.salt",
			tagClass: L.Class.UNIVERSAL,
			type: L.Type.OCTETSTRING,
			constructed: !1,
			capture: "salt"
		}, {
			name: "pkcs-12PbeParams.iterations",
			tagClass: L.Class.UNIVERSAL,
			type: L.Type.INTEGER,
			constructed: !1,
			capture: "iterations"
		}]
	};
fe.encryptPrivateKeyInfo = function (e, t, a) {
	a = a || {}, a.saltSize = a.saltSize || 8, a.count = a.count || 2048, a.algorithm = a.algorithm || "aes128", a.prfAlgorithm = a.prfAlgorithm || "sha1";
	var r = j.random.getBytesSync(a.saltSize),
		n = a.count,
		i = L.integerToDer(n),
		s, o, l;
	if (a.algorithm.indexOf("aes") === 0 || a.algorithm === "des") {
		var f, u, c;
		switch (a.algorithm) {
			case "aes128":
				s = 16, f = 16, u = Lt["aes128-CBC"], c = j.aes.createEncryptionCipher;
				break;
			case "aes192":
				s = 24, f = 16, u = Lt["aes192-CBC"], c = j.aes.createEncryptionCipher;
				break;
			case "aes256":
				s = 32, f = 16, u = Lt["aes256-CBC"], c = j.aes.createEncryptionCipher;
				break;
			case "des":
				s = 8, f = 8, u = Lt.desCBC, c = j.des.createEncryptionCipher;
				break;
			default:
				var h = new Error("Cannot encrypt private key. Unknown encryption algorithm.");
				throw h.algorithm = a.algorithm, h
		}
		var x = "hmacWith" + a.prfAlgorithm.toUpperCase(),
			d = vi(x),
			g = j.pkcs5.pbkdf2(t, r, n, s, d),
			v = j.random.getBytesSync(f),
			B = c(g);
		B.start(v), B.update(L.toDer(e)), B.finish(), l = B.output.getBytes();
		var E = tu(r, i, s, x);
		o = L.create(L.Class.UNIVERSAL, L.Type.SEQUENCE, !0, [L.create(L.Class.UNIVERSAL, L.Type.OID, !1, L.oidToDer(Lt.pkcs5PBES2).getBytes()), L.create(L.Class.UNIVERSAL, L.Type.SEQUENCE, !0, [L.create(L.Class.UNIVERSAL, L.Type.SEQUENCE, !0, [L.create(L.Class.UNIVERSAL, L.Type.OID, !1, L.oidToDer(Lt.pkcs5PBKDF2).getBytes()), E]), L.create(L.Class.UNIVERSAL, L.Type.SEQUENCE, !0, [L.create(L.Class.UNIVERSAL, L.Type.OID, !1, L.oidToDer(u).getBytes()), L.create(L.Class.UNIVERSAL, L.Type.OCTETSTRING, !1, v)])])])
	} else if (a.algorithm === "3des") {
		s = 24;
		var m = new j.util.ByteBuffer(r),
			g = fe.pbe.generatePkcs12Key(t, m, 1, n, s),
			v = fe.pbe.generatePkcs12Key(t, m, 2, n, s),
			B = j.des.createEncryptionCipher(g);
		B.start(v), B.update(L.toDer(e)), B.finish(), l = B.output.getBytes(), o = L.create(L.Class.UNIVERSAL, L.Type.SEQUENCE, !0, [L.create(L.Class.UNIVERSAL, L.Type.OID, !1, L.oidToDer(Lt["pbeWithSHAAnd3-KeyTripleDES-CBC"]).getBytes()), L.create(L.Class.UNIVERSAL, L.Type.SEQUENCE, !0, [L.create(L.Class.UNIVERSAL, L.Type.OCTETSTRING, !1, r), L.create(L.Class.UNIVERSAL, L.Type.INTEGER, !1, i.getBytes())])])
	} else {
		var h = new Error("Cannot encrypt private key. Unknown encryption algorithm.");
		throw h.algorithm = a.algorithm, h
	}
	var A = L.create(L.Class.UNIVERSAL, L.Type.SEQUENCE, !0, [o, L.create(L.Class.UNIVERSAL, L.Type.OCTETSTRING, !1, l)]);
	return A
};
fe.decryptPrivateKeyInfo = function (e, t) {
	var a = null,
		r = {},
		n = [];
	if (!L.validate(e, Zf, r, n)) {
		var i = new Error("Cannot read encrypted private key. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
		throw i.errors = n, i
	}
	var s = L.derToOid(r.encryptionOid),
		o = fe.pbe.getCipher(s, r.encryptionParams, t),
		l = j.util.createBuffer(r.encryptedData);
	return o.update(l), o.finish() && (a = L.fromDer(o.output)), a
};
fe.encryptedPrivateKeyToPem = function (e, t) {
	var a = {
		type: "ENCRYPTED PRIVATE KEY",
		body: L.toDer(e).getBytes()
	};
	return j.pem.encode(a, {
		maxline: t
	})
};
fe.encryptedPrivateKeyFromPem = function (e) {
	var t = j.pem.decode(e)[0];
	if (t.type !== "ENCRYPTED PRIVATE KEY") {
		var a = new Error('Could not convert encrypted private key from PEM; PEM header type is "ENCRYPTED PRIVATE KEY".');
		throw a.headerType = t.type, a
	}
	if (t.procType && t.procType.type === "ENCRYPTED") throw new Error("Could not convert encrypted private key from PEM; PEM is encrypted.");
	return L.fromDer(t.body)
};
fe.encryptRsaPrivateKey = function (e, t, a) {
	if (a = a || {}, !a.legacy) {
		var r = fe.wrapRsaPrivateKey(fe.privateKeyToAsn1(e));
		return r = fe.encryptPrivateKeyInfo(r, t, a), fe.encryptedPrivateKeyToPem(r)
	}
	var n, i, s, o;
	switch (a.algorithm) {
		case "aes128":
			n = "AES-128-CBC", s = 16, i = j.random.getBytesSync(16), o = j.aes.createEncryptionCipher;
			break;
		case "aes192":
			n = "AES-192-CBC", s = 24, i = j.random.getBytesSync(16), o = j.aes.createEncryptionCipher;
			break;
		case "aes256":
			n = "AES-256-CBC", s = 32, i = j.random.getBytesSync(16), o = j.aes.createEncryptionCipher;
			break;
		case "3des":
			n = "DES-EDE3-CBC", s = 24, i = j.random.getBytesSync(8), o = j.des.createEncryptionCipher;
			break;
		case "des":
			n = "DES-CBC", s = 8, i = j.random.getBytesSync(8), o = j.des.createEncryptionCipher;
			break;
		default:
			var l = new Error('Could not encrypt RSA private key; unsupported encryption algorithm "' + a.algorithm + '".');
			throw l.algorithm = a.algorithm, l
	}
	var f = j.pbe.opensslDeriveBytes(t, i.substr(0, 8), s),
		u = o(f);
	u.start(i), u.update(L.toDer(fe.privateKeyToAsn1(e))), u.finish();
	var c = {
		type: "RSA PRIVATE KEY",
		procType: {
			version: "4",
			type: "ENCRYPTED"
		},
		dekInfo: {
			algorithm: n,
			parameters: j.util.bytesToHex(i).toUpperCase()
		},
		body: u.output.getBytes()
	};
	return j.pem.encode(c)
};
fe.decryptRsaPrivateKey = function (e, t) {
	var a = null,
		r = j.pem.decode(e)[0];
	if (r.type !== "ENCRYPTED PRIVATE KEY" && r.type !== "PRIVATE KEY" && r.type !== "RSA PRIVATE KEY") {
		var n = new Error('Could not convert private key from PEM; PEM header type is not "ENCRYPTED PRIVATE KEY", "PRIVATE KEY", or "RSA PRIVATE KEY".');
		throw n.headerType = n, n
	}
	if (r.procType && r.procType.type === "ENCRYPTED") {
		var i, s;
		switch (r.dekInfo.algorithm) {
			case "DES-CBC":
				i = 8, s = j.des.createDecryptionCipher;
				break;
			case "DES-EDE3-CBC":
				i = 24, s = j.des.createDecryptionCipher;
				break;
			case "AES-128-CBC":
				i = 16, s = j.aes.createDecryptionCipher;
				break;
			case "AES-192-CBC":
				i = 24, s = j.aes.createDecryptionCipher;
				break;
			case "AES-256-CBC":
				i = 32, s = j.aes.createDecryptionCipher;
				break;
			case "RC2-40-CBC":
				i = 5, s = function (c) {
					return j.rc2.createDecryptionCipher(c, 40)
				};
				break;
			case "RC2-64-CBC":
				i = 8, s = function (c) {
					return j.rc2.createDecryptionCipher(c, 64)
				};
				break;
			case "RC2-128-CBC":
				i = 16, s = function (c) {
					return j.rc2.createDecryptionCipher(c, 128)
				};
				break;
			default:
				var n = new Error('Could not decrypt private key; unsupported encryption algorithm "' + r.dekInfo.algorithm + '".');
				throw n.algorithm = r.dekInfo.algorithm, n
		}
		var o = j.util.hexToBytes(r.dekInfo.parameters),
			l = j.pbe.opensslDeriveBytes(t, o.substr(0, 8), i),
			f = s(l);
		if (f.start(o), f.update(j.util.createBuffer(r.body)), f.finish()) a = f.output.getBytes();
		else return a
	} else a = r.body;
	return r.type === "ENCRYPTED PRIVATE KEY" ? a = fe.decryptPrivateKeyInfo(L.fromDer(a), t) : a = L.fromDer(a), a !== null && (a = fe.privateKeyFromAsn1(a)), a
};
fe.pbe.generatePkcs12Key = function (e, t, a, r, n, i) {
	var s, o;
	if (typeof i > "u" || i === null) {
		if (!("sha1" in j.md)) throw new Error('"sha1" hash algorithm unavailable.');
		i = j.md.sha1.create()
	}
	var l = i.digestLength,
		f = i.blockLength,
		u = new j.util.ByteBuffer,
		c = new j.util.ByteBuffer;
	if (e != null) {
		for (o = 0; o < e.length; o++) c.putInt16(e.charCodeAt(o));
		c.putInt16(0)
	}
	var h = c.length(),
		x = t.length(),
		d = new j.util.ByteBuffer;
	d.fillWithByte(a, f);
	var g = f * Math.ceil(x / f),
		v = new j.util.ByteBuffer;
	for (o = 0; o < g; o++) v.putByte(t.at(o % x));
	var B = f * Math.ceil(h / f),
		E = new j.util.ByteBuffer;
	for (o = 0; o < B; o++) E.putByte(c.at(o % h));
	var m = v;
	m.putBuffer(E);
	for (var A = Math.ceil(n / l), T = 1; T <= A; T++) {
		var S = new j.util.ByteBuffer;
		S.putBytes(d.bytes()), S.putBytes(m.bytes());
		for (var N = 0; N < r; N++) i.start(), i.update(S.getBytes()), S = i.digest();
		var w = new j.util.ByteBuffer;
		for (o = 0; o < f; o++) w.putByte(S.at(o % l));
		var K = Math.ceil(x / f) + Math.ceil(h / f),
			D = new j.util.ByteBuffer;
		for (s = 0; s < K; s++) {
			var F = new j.util.ByteBuffer(m.getBytes(f)),
				U = 511;
			for (o = w.length() - 1; o >= 0; o--) U = U >> 8, U += w.at(o) + F.at(o), F.setAt(o, U & 255);
			D.putBuffer(F)
		}
		m = D, u.putBuffer(S)
	}
	return u.truncate(u.length() - n), u
};
fe.pbe.getCipher = function (e, t, a) {
	switch (e) {
		case fe.oids.pkcs5PBES2:
			return fe.pbe.getCipherForPBES2(e, t, a);
		case fe.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
		case fe.oids["pbewithSHAAnd40BitRC2-CBC"]:
			return fe.pbe.getCipherForPKCS12PBE(e, t, a);
		default:
			var r = new Error("Cannot read encrypted PBE data block. Unsupported OID.");
			throw r.oid = e, r.supportedOids = ["pkcs5PBES2", "pbeWithSHAAnd3-KeyTripleDES-CBC", "pbewithSHAAnd40BitRC2-CBC"], r
	}
};
fe.pbe.getCipherForPBES2 = function (e, t, a) {
	var r = {},
		n = [];
	if (!L.validate(t, Jf, r, n)) {
		var i = new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
		throw i.errors = n, i
	}
	if (e = L.derToOid(r.kdfOid), e !== fe.oids.pkcs5PBKDF2) {
		var i = new Error("Cannot read encrypted private key. Unsupported key derivation function OID.");
		throw i.oid = e, i.supportedOids = ["pkcs5PBKDF2"], i
	}
	if (e = L.derToOid(r.encOid), e !== fe.oids["aes128-CBC"] && e !== fe.oids["aes192-CBC"] && e !== fe.oids["aes256-CBC"] && e !== fe.oids["des-EDE3-CBC"] && e !== fe.oids.desCBC) {
		var i = new Error("Cannot read encrypted private key. Unsupported encryption scheme OID.");
		throw i.oid = e, i.supportedOids = ["aes128-CBC", "aes192-CBC", "aes256-CBC", "des-EDE3-CBC", "desCBC"], i
	}
	var s = r.kdfSalt,
		o = j.util.createBuffer(r.kdfIterationCount);
	o = o.getInt(o.length() << 3);
	var l, f;
	switch (fe.oids[e]) {
		case "aes128-CBC":
			l = 16, f = j.aes.createDecryptionCipher;
			break;
		case "aes192-CBC":
			l = 24, f = j.aes.createDecryptionCipher;
			break;
		case "aes256-CBC":
			l = 32, f = j.aes.createDecryptionCipher;
			break;
		case "des-EDE3-CBC":
			l = 24, f = j.des.createDecryptionCipher;
			break;
		case "desCBC":
			l = 8, f = j.des.createDecryptionCipher;
			break
	}
	var u = pi(r.prfOid),
		c = j.pkcs5.pbkdf2(a, s, o, l, u),
		h = r.encIv,
		x = f(c);
	return x.start(h), x
};
fe.pbe.getCipherForPKCS12PBE = function (e, t, a) {
	var r = {},
		n = [];
	if (!L.validate(t, eu, r, n)) {
		var i = new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
		throw i.errors = n, i
	}
	var s = j.util.createBuffer(r.salt),
		o = j.util.createBuffer(r.iterations);
	o = o.getInt(o.length() << 3);
	var l, f, u;
	switch (e) {
		case fe.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
			l = 24, f = 8, u = j.des.startDecrypting;
			break;
		case fe.oids["pbewithSHAAnd40BitRC2-CBC"]:
			l = 5, f = 8, u = function (g, v) {
				var B = j.rc2.createDecryptionCipher(g, 40);
				return B.start(v, null), B
			};
			break;
		default:
			var i = new Error("Cannot read PKCS #12 PBE data block. Unsupported OID.");
			throw i.oid = e, i
	}
	var c = pi(r.prfOid),
		h = fe.pbe.generatePkcs12Key(a, s, 1, o, l, c);
	c.start();
	var x = fe.pbe.generatePkcs12Key(a, s, 2, o, f, c);
	return u(h, x)
};
fe.pbe.opensslDeriveBytes = function (e, t, a, r) {
	if (typeof r > "u" || r === null) {
		if (!("md5" in j.md)) throw new Error('"md5" hash algorithm unavailable.');
		r = j.md.md5.create()
	}
	t === null && (t = "");
	for (var n = [wn(r, e + t)], i = 16, s = 1; i < a; ++s, i += 16) n.push(wn(r, n[s - 1] + e + t));
	return n.join("").substr(0, a)
};

function wn(e, t) {
	return e.start().update(t).digest().getBytes()
}

function pi(e) {
	var t;
	if (!e) t = "hmacWithSHA1";
	else if (t = fe.oids[L.derToOid(e)], !t) {
		var a = new Error("Unsupported PRF OID.");
		throw a.oid = e, a.supported = ["hmacWithSHA1", "hmacWithSHA224", "hmacWithSHA256", "hmacWithSHA384", "hmacWithSHA512"], a
	}
	return vi(t)
}

function vi(e) {
	var t = j.md;
	switch (e) {
		case "hmacWithSHA224":
			t = j.md.sha512;
		case "hmacWithSHA1":
		case "hmacWithSHA256":
		case "hmacWithSHA384":
		case "hmacWithSHA512":
			e = e.substr(8).toLowerCase();
			break;
		default:
			var a = new Error("Unsupported PRF algorithm.");
			throw a.algorithm = e, a.supported = ["hmacWithSHA1", "hmacWithSHA224", "hmacWithSHA256", "hmacWithSHA384", "hmacWithSHA512"], a
	}
	if (!t || !(e in t)) throw new Error("Unknown hash algorithm: " + e);
	return t[e].create()
}

function tu(e, t, a, r) {
	var n = L.create(L.Class.UNIVERSAL, L.Type.SEQUENCE, !0, [L.create(L.Class.UNIVERSAL, L.Type.OCTETSTRING, !1, e), L.create(L.Class.UNIVERSAL, L.Type.INTEGER, !1, t.getBytes())]);
	return r !== "hmacWithSHA1" && n.value.push(L.create(L.Class.UNIVERSAL, L.Type.INTEGER, !1, j.util.hexToBytes(a.toString(16))), L.create(L.Class.UNIVERSAL, L.Type.SEQUENCE, !0, [L.create(L.Class.UNIVERSAL, L.Type.OID, !1, L.oidToDer(fe.oids[r]).getBytes()), L.create(L.Class.UNIVERSAL, L.Type.NULL, !1, "")])), n
}
var Zt = le,
	$ = Zt.asn1,
	nr = Zt.pkcs7asn1 = Zt.pkcs7asn1 || {};
Zt.pkcs7 = Zt.pkcs7 || {};
Zt.pkcs7.asn1 = nr;
var yi = {
	name: "ContentInfo",
	tagClass: $.Class.UNIVERSAL,
	type: $.Type.SEQUENCE,
	constructed: !0,
	value: [{
		name: "ContentInfo.ContentType",
		tagClass: $.Class.UNIVERSAL,
		type: $.Type.OID,
		constructed: !1,
		capture: "contentType"
	}, {
		name: "ContentInfo.content",
		tagClass: $.Class.CONTEXT_SPECIFIC,
		type: 0,
		constructed: !0,
		optional: !0,
		captureAsn1: "content"
	}]
};
nr.contentInfoValidator = yi;
var gi = {
	name: "EncryptedContentInfo",
	tagClass: $.Class.UNIVERSAL,
	type: $.Type.SEQUENCE,
	constructed: !0,
	value: [{
		name: "EncryptedContentInfo.contentType",
		tagClass: $.Class.UNIVERSAL,
		type: $.Type.OID,
		constructed: !1,
		capture: "contentType"
	}, {
		name: "EncryptedContentInfo.contentEncryptionAlgorithm",
		tagClass: $.Class.UNIVERSAL,
		type: $.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "EncryptedContentInfo.contentEncryptionAlgorithm.algorithm",
			tagClass: $.Class.UNIVERSAL,
			type: $.Type.OID,
			constructed: !1,
			capture: "encAlgorithm"
		}, {
			name: "EncryptedContentInfo.contentEncryptionAlgorithm.parameter",
			tagClass: $.Class.UNIVERSAL,
			captureAsn1: "encParameter"
		}]
	}, {
		name: "EncryptedContentInfo.encryptedContent",
		tagClass: $.Class.CONTEXT_SPECIFIC,
		type: 0,
		capture: "encryptedContent",
		captureAsn1: "encryptedContentAsn1"
	}]
};
nr.envelopedDataValidator = {
	name: "EnvelopedData",
	tagClass: $.Class.UNIVERSAL,
	type: $.Type.SEQUENCE,
	constructed: !0,
	value: [{
		name: "EnvelopedData.Version",
		tagClass: $.Class.UNIVERSAL,
		type: $.Type.INTEGER,
		constructed: !1,
		capture: "version"
	}, {
		name: "EnvelopedData.RecipientInfos",
		tagClass: $.Class.UNIVERSAL,
		type: $.Type.SET,
		constructed: !0,
		captureAsn1: "recipientInfos"
	}].concat(gi)
};
nr.encryptedDataValidator = {
	name: "EncryptedData",
	tagClass: $.Class.UNIVERSAL,
	type: $.Type.SEQUENCE,
	constructed: !0,
	value: [{
		name: "EncryptedData.Version",
		tagClass: $.Class.UNIVERSAL,
		type: $.Type.INTEGER,
		constructed: !1,
		capture: "version"
	}].concat(gi)
};
var ru = {
	name: "SignerInfo",
	tagClass: $.Class.UNIVERSAL,
	type: $.Type.SEQUENCE,
	constructed: !0,
	value: [{
		name: "SignerInfo.version",
		tagClass: $.Class.UNIVERSAL,
		type: $.Type.INTEGER,
		constructed: !1
	}, {
		name: "SignerInfo.issuerAndSerialNumber",
		tagClass: $.Class.UNIVERSAL,
		type: $.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "SignerInfo.issuerAndSerialNumber.issuer",
			tagClass: $.Class.UNIVERSAL,
			type: $.Type.SEQUENCE,
			constructed: !0,
			captureAsn1: "issuer"
		}, {
			name: "SignerInfo.issuerAndSerialNumber.serialNumber",
			tagClass: $.Class.UNIVERSAL,
			type: $.Type.INTEGER,
			constructed: !1,
			capture: "serial"
		}]
	}, {
		name: "SignerInfo.digestAlgorithm",
		tagClass: $.Class.UNIVERSAL,
		type: $.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "SignerInfo.digestAlgorithm.algorithm",
			tagClass: $.Class.UNIVERSAL,
			type: $.Type.OID,
			constructed: !1,
			capture: "digestAlgorithm"
		}, {
			name: "SignerInfo.digestAlgorithm.parameter",
			tagClass: $.Class.UNIVERSAL,
			constructed: !1,
			captureAsn1: "digestParameter",
			optional: !0
		}]
	}, {
		name: "SignerInfo.authenticatedAttributes",
		tagClass: $.Class.CONTEXT_SPECIFIC,
		type: 0,
		constructed: !0,
		optional: !0,
		capture: "authenticatedAttributes"
	}, {
		name: "SignerInfo.digestEncryptionAlgorithm",
		tagClass: $.Class.UNIVERSAL,
		type: $.Type.SEQUENCE,
		constructed: !0,
		capture: "signatureAlgorithm"
	}, {
		name: "SignerInfo.encryptedDigest",
		tagClass: $.Class.UNIVERSAL,
		type: $.Type.OCTETSTRING,
		constructed: !1,
		capture: "signature"
	}, {
		name: "SignerInfo.unauthenticatedAttributes",
		tagClass: $.Class.CONTEXT_SPECIFIC,
		type: 1,
		constructed: !0,
		optional: !0,
		capture: "unauthenticatedAttributes"
	}]
};
nr.signedDataValidator = {
	name: "SignedData",
	tagClass: $.Class.UNIVERSAL,
	type: $.Type.SEQUENCE,
	constructed: !0,
	value: [{
		name: "SignedData.Version",
		tagClass: $.Class.UNIVERSAL,
		type: $.Type.INTEGER,
		constructed: !1,
		capture: "version"
	}, {
		name: "SignedData.DigestAlgorithms",
		tagClass: $.Class.UNIVERSAL,
		type: $.Type.SET,
		constructed: !0,
		captureAsn1: "digestAlgorithms"
	}, yi, {
		name: "SignedData.Certificates",
		tagClass: $.Class.CONTEXT_SPECIFIC,
		type: 0,
		optional: !0,
		captureAsn1: "certificates"
	}, {
		name: "SignedData.CertificateRevocationLists",
		tagClass: $.Class.CONTEXT_SPECIFIC,
		type: 1,
		optional: !0,
		captureAsn1: "crls"
	}, {
		name: "SignedData.SignerInfos",
		tagClass: $.Class.UNIVERSAL,
		type: $.Type.SET,
		capture: "signerInfos",
		optional: !0,
		value: [ru]
	}]
};
nr.recipientInfoValidator = {
	name: "RecipientInfo",
	tagClass: $.Class.UNIVERSAL,
	type: $.Type.SEQUENCE,
	constructed: !0,
	value: [{
		name: "RecipientInfo.version",
		tagClass: $.Class.UNIVERSAL,
		type: $.Type.INTEGER,
		constructed: !1,
		capture: "version"
	}, {
		name: "RecipientInfo.issuerAndSerial",
		tagClass: $.Class.UNIVERSAL,
		type: $.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "RecipientInfo.issuerAndSerial.issuer",
			tagClass: $.Class.UNIVERSAL,
			type: $.Type.SEQUENCE,
			constructed: !0,
			captureAsn1: "issuer"
		}, {
			name: "RecipientInfo.issuerAndSerial.serialNumber",
			tagClass: $.Class.UNIVERSAL,
			type: $.Type.INTEGER,
			constructed: !1,
			capture: "serial"
		}]
	}, {
		name: "RecipientInfo.keyEncryptionAlgorithm",
		tagClass: $.Class.UNIVERSAL,
		type: $.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "RecipientInfo.keyEncryptionAlgorithm.algorithm",
			tagClass: $.Class.UNIVERSAL,
			type: $.Type.OID,
			constructed: !1,
			capture: "encAlgorithm"
		}, {
			name: "RecipientInfo.keyEncryptionAlgorithm.parameter",
			tagClass: $.Class.UNIVERSAL,
			constructed: !1,
			captureAsn1: "encParameter",
			optional: !0
		}]
	}, {
		name: "RecipientInfo.encryptedKey",
		tagClass: $.Class.UNIVERSAL,
		type: $.Type.OCTETSTRING,
		constructed: !1,
		capture: "encKey"
	}]
};
var Kt = le;
Kt.mgf = Kt.mgf || {};
var au = Kt.mgf.mgf1 = Kt.mgf1 = Kt.mgf1 || {};
au.create = function (e) {
	var t = {
		generate: function (a, r) {
			for (var n = new Kt.util.ByteBuffer, i = Math.ceil(r / e.digestLength), s = 0; s < i; s++) {
				var o = new Kt.util.ByteBuffer;
				o.putInt32(s), e.start(), e.update(a + o.getBytes()), n.putBuffer(e.digest())
			}
			return n.truncate(n.length() - r), n.getBytes()
		}
	};
	return t
};
var kr = le;
kr.mgf = kr.mgf || {};
kr.mgf.mgf1 = kr.mgf1;
var Ut = le,
	nu = Ut.pss = Ut.pss || {};
nu.create = function (e) {
	arguments.length === 3 && (e = {
		md: arguments[0],
		mgf: arguments[1],
		saltLength: arguments[2]
	});
	var t = e.md,
		a = e.mgf,
		r = t.digestLength,
		n = e.salt || null;
	typeof n == "string" && (n = Ut.util.createBuffer(n));
	var i;
	if ("saltLength" in e) i = e.saltLength;
	else if (n !== null) i = n.length();
	else throw new Error("Salt length not specified or specific salt not given.");
	if (n !== null && n.length() !== i) throw new Error("Given salt length does not match length of given salt.");
	var s = e.prng || Ut.random,
		o = {};
	return o.encode = function (l, f) {
		var u, c = f - 1,
			h = Math.ceil(c / 8),
			x = l.digest().getBytes();
		if (h < r + i + 2) throw new Error("Message is too long to encrypt.");
		var d;
		n === null ? d = s.getBytesSync(i) : d = n.bytes();
		var g = new Ut.util.ByteBuffer;
		g.fillWithByte(0, 8), g.putBytes(x), g.putBytes(d), t.start(), t.update(g.getBytes());
		var v = t.digest().getBytes(),
			B = new Ut.util.ByteBuffer;
		B.fillWithByte(0, h - i - r - 2), B.putByte(1), B.putBytes(d);
		var E = B.getBytes(),
			m = h - r - 1,
			A = a.generate(v, m),
			T = "";
		for (u = 0; u < m; u++) T += String.fromCharCode(E.charCodeAt(u) ^ A.charCodeAt(u));
		var S = 65280 >> 8 * h - c & 255;
		return T = String.fromCharCode(T.charCodeAt(0) & ~S) + T.substr(1), T + v + "¼"
	}, o.verify = function (l, f, u) {
		var c, h = u - 1,
			x = Math.ceil(h / 8);
		if (f = f.substr(-x), x < r + i + 2) throw new Error("Inconsistent parameters to PSS signature verification.");
		if (f.charCodeAt(x - 1) !== 188) throw new Error("Encoded message does not end in 0xBC.");
		var d = x - r - 1,
			g = f.substr(0, d),
			v = f.substr(d, r),
			B = 65280 >> 8 * x - h & 255;
		if (g.charCodeAt(0) & B) throw new Error("Bits beyond keysize not zero as expected.");
		var E = a.generate(v, d),
			m = "";
		for (c = 0; c < d; c++) m += String.fromCharCode(g.charCodeAt(c) ^ E.charCodeAt(c));
		m = String.fromCharCode(m.charCodeAt(0) & ~B) + m.substr(1);
		var A = x - r - i - 2;
		for (c = 0; c < A; c++)
			if (m.charCodeAt(c) !== 0) throw new Error("Leftmost octets not zero as expected");
		if (m.charCodeAt(A) !== 1) throw new Error("Inconsistent PSS signature, 0x01 marker not found");
		var T = m.substr(-i),
			S = new Ut.util.ByteBuffer;
		S.fillWithByte(0, 8), S.putBytes(l), S.putBytes(T), t.start(), t.update(S.getBytes());
		var N = t.digest().getBytes();
		return v === N
	}, o
};
var re = le,
	p = re.asn1,
	G = re.pki = re.pki || {},
	ye = G.oids,
	ke = {};
ke.CN = ye.commonName;
ke.commonName = "CN";
ke.C = ye.countryName;
ke.countryName = "C";
ke.L = ye.localityName;
ke.localityName = "L";
ke.ST = ye.stateOrProvinceName;
ke.stateOrProvinceName = "ST";
ke.O = ye.organizationName;
ke.organizationName = "O";
ke.OU = ye.organizationalUnitName;
ke.organizationalUnitName = "OU";
ke.E = ye.emailAddress;
ke.emailAddress = "E";
var Ci = re.pki.rsa.publicKeyValidator,
	iu = {
		name: "Certificate",
		tagClass: p.Class.UNIVERSAL,
		type: p.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "Certificate.TBSCertificate",
			tagClass: p.Class.UNIVERSAL,
			type: p.Type.SEQUENCE,
			constructed: !0,
			captureAsn1: "tbsCertificate",
			value: [{
				name: "Certificate.TBSCertificate.version",
				tagClass: p.Class.CONTEXT_SPECIFIC,
				type: 0,
				constructed: !0,
				optional: !0,
				value: [{
					name: "Certificate.TBSCertificate.version.integer",
					tagClass: p.Class.UNIVERSAL,
					type: p.Type.INTEGER,
					constructed: !1,
					capture: "certVersion"
				}]
			}, {
				name: "Certificate.TBSCertificate.serialNumber",
				tagClass: p.Class.UNIVERSAL,
				type: p.Type.INTEGER,
				constructed: !1,
				capture: "certSerialNumber"
			}, {
				name: "Certificate.TBSCertificate.signature",
				tagClass: p.Class.UNIVERSAL,
				type: p.Type.SEQUENCE,
				constructed: !0,
				value: [{
					name: "Certificate.TBSCertificate.signature.algorithm",
					tagClass: p.Class.UNIVERSAL,
					type: p.Type.OID,
					constructed: !1,
					capture: "certinfoSignatureOid"
				}, {
					name: "Certificate.TBSCertificate.signature.parameters",
					tagClass: p.Class.UNIVERSAL,
					optional: !0,
					captureAsn1: "certinfoSignatureParams"
				}]
			}, {
				name: "Certificate.TBSCertificate.issuer",
				tagClass: p.Class.UNIVERSAL,
				type: p.Type.SEQUENCE,
				constructed: !0,
				captureAsn1: "certIssuer"
			}, {
				name: "Certificate.TBSCertificate.validity",
				tagClass: p.Class.UNIVERSAL,
				type: p.Type.SEQUENCE,
				constructed: !0,
				value: [{
					name: "Certificate.TBSCertificate.validity.notBefore (utc)",
					tagClass: p.Class.UNIVERSAL,
					type: p.Type.UTCTIME,
					constructed: !1,
					optional: !0,
					capture: "certValidity1UTCTime"
				}, {
					name: "Certificate.TBSCertificate.validity.notBefore (generalized)",
					tagClass: p.Class.UNIVERSAL,
					type: p.Type.GENERALIZEDTIME,
					constructed: !1,
					optional: !0,
					capture: "certValidity2GeneralizedTime"
				}, {
					name: "Certificate.TBSCertificate.validity.notAfter (utc)",
					tagClass: p.Class.UNIVERSAL,
					type: p.Type.UTCTIME,
					constructed: !1,
					optional: !0,
					capture: "certValidity3UTCTime"
				}, {
					name: "Certificate.TBSCertificate.validity.notAfter (generalized)",
					tagClass: p.Class.UNIVERSAL,
					type: p.Type.GENERALIZEDTIME,
					constructed: !1,
					optional: !0,
					capture: "certValidity4GeneralizedTime"
				}]
			}, {
				name: "Certificate.TBSCertificate.subject",
				tagClass: p.Class.UNIVERSAL,
				type: p.Type.SEQUENCE,
				constructed: !0,
				captureAsn1: "certSubject"
			}, Ci, {
				name: "Certificate.TBSCertificate.issuerUniqueID",
				tagClass: p.Class.CONTEXT_SPECIFIC,
				type: 1,
				constructed: !0,
				optional: !0,
				value: [{
					name: "Certificate.TBSCertificate.issuerUniqueID.id",
					tagClass: p.Class.UNIVERSAL,
					type: p.Type.BITSTRING,
					constructed: !1,
					captureBitStringValue: "certIssuerUniqueId"
				}]
			}, {
				name: "Certificate.TBSCertificate.subjectUniqueID",
				tagClass: p.Class.CONTEXT_SPECIFIC,
				type: 2,
				constructed: !0,
				optional: !0,
				value: [{
					name: "Certificate.TBSCertificate.subjectUniqueID.id",
					tagClass: p.Class.UNIVERSAL,
					type: p.Type.BITSTRING,
					constructed: !1,
					captureBitStringValue: "certSubjectUniqueId"
				}]
			}, {
				name: "Certificate.TBSCertificate.extensions",
				tagClass: p.Class.CONTEXT_SPECIFIC,
				type: 3,
				constructed: !0,
				captureAsn1: "certExtensions",
				optional: !0
			}]
		}, {
			name: "Certificate.signatureAlgorithm",
			tagClass: p.Class.UNIVERSAL,
			type: p.Type.SEQUENCE,
			constructed: !0,
			value: [{
				name: "Certificate.signatureAlgorithm.algorithm",
				tagClass: p.Class.UNIVERSAL,
				type: p.Type.OID,
				constructed: !1,
				capture: "certSignatureOid"
			}, {
				name: "Certificate.TBSCertificate.signature.parameters",
				tagClass: p.Class.UNIVERSAL,
				optional: !0,
				captureAsn1: "certSignatureParams"
			}]
		}, {
			name: "Certificate.signatureValue",
			tagClass: p.Class.UNIVERSAL,
			type: p.Type.BITSTRING,
			constructed: !1,
			captureBitStringValue: "certSignature"
		}]
	},
	su = {
		name: "rsapss",
		tagClass: p.Class.UNIVERSAL,
		type: p.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "rsapss.hashAlgorithm",
			tagClass: p.Class.CONTEXT_SPECIFIC,
			type: 0,
			constructed: !0,
			value: [{
				name: "rsapss.hashAlgorithm.AlgorithmIdentifier",
				tagClass: p.Class.UNIVERSAL,
				type: p.Class.SEQUENCE,
				constructed: !0,
				optional: !0,
				value: [{
					name: "rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm",
					tagClass: p.Class.UNIVERSAL,
					type: p.Type.OID,
					constructed: !1,
					capture: "hashOid"
				}]
			}]
		}, {
			name: "rsapss.maskGenAlgorithm",
			tagClass: p.Class.CONTEXT_SPECIFIC,
			type: 1,
			constructed: !0,
			value: [{
				name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier",
				tagClass: p.Class.UNIVERSAL,
				type: p.Class.SEQUENCE,
				constructed: !0,
				optional: !0,
				value: [{
					name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm",
					tagClass: p.Class.UNIVERSAL,
					type: p.Type.OID,
					constructed: !1,
					capture: "maskGenOid"
				}, {
					name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params",
					tagClass: p.Class.UNIVERSAL,
					type: p.Type.SEQUENCE,
					constructed: !0,
					value: [{
						name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm",
						tagClass: p.Class.UNIVERSAL,
						type: p.Type.OID,
						constructed: !1,
						capture: "maskGenHashOid"
					}]
				}]
			}]
		}, {
			name: "rsapss.saltLength",
			tagClass: p.Class.CONTEXT_SPECIFIC,
			type: 2,
			optional: !0,
			value: [{
				name: "rsapss.saltLength.saltLength",
				tagClass: p.Class.UNIVERSAL,
				type: p.Class.INTEGER,
				constructed: !1,
				capture: "saltLength"
			}]
		}, {
			name: "rsapss.trailerField",
			tagClass: p.Class.CONTEXT_SPECIFIC,
			type: 3,
			optional: !0,
			value: [{
				name: "rsapss.trailer.trailer",
				tagClass: p.Class.UNIVERSAL,
				type: p.Class.INTEGER,
				constructed: !1,
				capture: "trailer"
			}]
		}]
	},
	ou = {
		name: "CertificationRequestInfo",
		tagClass: p.Class.UNIVERSAL,
		type: p.Type.SEQUENCE,
		constructed: !0,
		captureAsn1: "certificationRequestInfo",
		value: [{
			name: "CertificationRequestInfo.integer",
			tagClass: p.Class.UNIVERSAL,
			type: p.Type.INTEGER,
			constructed: !1,
			capture: "certificationRequestInfoVersion"
		}, {
			name: "CertificationRequestInfo.subject",
			tagClass: p.Class.UNIVERSAL,
			type: p.Type.SEQUENCE,
			constructed: !0,
			captureAsn1: "certificationRequestInfoSubject"
		}, Ci, {
			name: "CertificationRequestInfo.attributes",
			tagClass: p.Class.CONTEXT_SPECIFIC,
			type: 0,
			constructed: !0,
			optional: !0,
			capture: "certificationRequestInfoAttributes",
			value: [{
				name: "CertificationRequestInfo.attributes",
				tagClass: p.Class.UNIVERSAL,
				type: p.Type.SEQUENCE,
				constructed: !0,
				value: [{
					name: "CertificationRequestInfo.attributes.type",
					tagClass: p.Class.UNIVERSAL,
					type: p.Type.OID,
					constructed: !1
				}, {
					name: "CertificationRequestInfo.attributes.value",
					tagClass: p.Class.UNIVERSAL,
					type: p.Type.SET,
					constructed: !0
				}]
			}]
		}]
	},
	fu = {
		name: "CertificationRequest",
		tagClass: p.Class.UNIVERSAL,
		type: p.Type.SEQUENCE,
		constructed: !0,
		captureAsn1: "csr",
		value: [ou, {
			name: "CertificationRequest.signatureAlgorithm",
			tagClass: p.Class.UNIVERSAL,
			type: p.Type.SEQUENCE,
			constructed: !0,
			value: [{
				name: "CertificationRequest.signatureAlgorithm.algorithm",
				tagClass: p.Class.UNIVERSAL,
				type: p.Type.OID,
				constructed: !1,
				capture: "csrSignatureOid"
			}, {
				name: "CertificationRequest.signatureAlgorithm.parameters",
				tagClass: p.Class.UNIVERSAL,
				optional: !0,
				captureAsn1: "csrSignatureParams"
			}]
		}, {
			name: "CertificationRequest.signature",
			tagClass: p.Class.UNIVERSAL,
			type: p.Type.BITSTRING,
			constructed: !1,
			captureBitStringValue: "csrSignature"
		}]
	};
G.RDNAttributesAsArray = function (e, t) {
	for (var a = [], r, n, i, s = 0; s < e.value.length; ++s) {
		r = e.value[s];
		for (var o = 0; o < r.value.length; ++o) i = {}, n = r.value[o], i.type = p.derToOid(n.value[0].value), i.value = n.value[1].value, i.valueTagClass = n.value[1].type, i.type in ye && (i.name = ye[i.type], i.name in ke && (i.shortName = ke[i.name])), t && (t.update(i.type), t.update(i.value)), a.push(i)
	}
	return a
};
G.CRIAttributesAsArray = function (e) {
	for (var t = [], a = 0; a < e.length; ++a)
		for (var r = e[a], n = p.derToOid(r.value[0].value), i = r.value[1].value, s = 0; s < i.length; ++s) {
			var o = {};
			if (o.type = n, o.value = i[s].value, o.valueTagClass = i[s].type, o.type in ye && (o.name = ye[o.type], o.name in ke && (o.shortName = ke[o.name])), o.type === ye.extensionRequest) {
				o.extensions = [];
				for (var l = 0; l < o.value.length; ++l) o.extensions.push(G.certificateExtensionFromAsn1(o.value[l]))
			}
			t.push(o)
		}
	return t
};

function Rt(e, t) {
	typeof t == "string" && (t = {
		shortName: t
	});
	for (var a = null, r, n = 0; a === null && n < e.attributes.length; ++n) r = e.attributes[n], (t.type && t.type === r.type || t.name && t.name === r.name || t.shortName && t.shortName === r.shortName) && (a = r);
	return a
}
var Lr = function (e, t, a) {
		var r = {};
		if (e !== ye["RSASSA-PSS"]) return r;
		a && (r = {
			hash: {
				algorithmOid: ye.sha1
			},
			mgf: {
				algorithmOid: ye.mgf1,
				hash: {
					algorithmOid: ye.sha1
				}
			},
			saltLength: 20
		});
		var n = {},
			i = [];
		if (!p.validate(t, su, n, i)) {
			var s = new Error("Cannot read RSASSA-PSS parameter block.");
			throw s.errors = i, s
		}
		return n.hashOid !== void 0 && (r.hash = r.hash || {}, r.hash.algorithmOid = p.derToOid(n.hashOid)), n.maskGenOid !== void 0 && (r.mgf = r.mgf || {}, r.mgf.algorithmOid = p.derToOid(n.maskGenOid), r.mgf.hash = r.mgf.hash || {}, r.mgf.hash.algorithmOid = p.derToOid(n.maskGenHashOid)), n.saltLength !== void 0 && (r.saltLength = n.saltLength.charCodeAt(0)), r
	},
	Yr = function (e) {
		switch (ye[e.signatureOid]) {
			case "sha1WithRSAEncryption":
			case "sha1WithRSASignature":
				return re.md.sha1.create();
			case "md5WithRSAEncryption":
				return re.md.md5.create();
			case "sha256WithRSAEncryption":
				return re.md.sha256.create();
			case "sha384WithRSAEncryption":
				return re.md.sha384.create();
			case "sha512WithRSAEncryption":
				return re.md.sha512.create();
			case "RSASSA-PSS":
				return re.md.sha256.create();
			default:
				var t = new Error("Could not compute " + e.type + " digest. Unknown signature OID.");
				throw t.signatureOid = e.signatureOid, t
		}
	},
	Ei = function (e) {
		var t = e.certificate,
			a;
		switch (t.signatureOid) {
			case ye.sha1WithRSAEncryption:
			case ye.sha1WithRSASignature:
				break;
			case ye["RSASSA-PSS"]:
				var r, n;
				if (r = ye[t.signatureParameters.mgf.hash.algorithmOid], r === void 0 || re.md[r] === void 0) {
					var i = new Error("Unsupported MGF hash function.");
					throw i.oid = t.signatureParameters.mgf.hash.algorithmOid, i.name = r, i
				}
				if (n = ye[t.signatureParameters.mgf.algorithmOid], n === void 0 || re.mgf[n] === void 0) {
					var i = new Error("Unsupported MGF function.");
					throw i.oid = t.signatureParameters.mgf.algorithmOid, i.name = n, i
				}
				if (n = re.mgf[n].create(re.md[r].create()), r = ye[t.signatureParameters.hash.algorithmOid], r === void 0 || re.md[r] === void 0) {
					var i = new Error("Unsupported RSASSA-PSS hash function.");
					throw i.oid = t.signatureParameters.hash.algorithmOid, i.name = r, i
				}
				a = re.pss.create(re.md[r].create(), n, t.signatureParameters.saltLength);
				break
		}
		return t.publicKey.verify(e.md.digest().getBytes(), e.signature, a)
	};
G.certificateFromPem = function (e, t, a) {
	var r = re.pem.decode(e)[0];
	if (r.type !== "CERTIFICATE" && r.type !== "X509 CERTIFICATE" && r.type !== "TRUSTED CERTIFICATE") {
		var n = new Error('Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');
		throw n.headerType = r.type, n
	}
	if (r.procType && r.procType.type === "ENCRYPTED") throw new Error("Could not convert certificate from PEM; PEM is encrypted.");
	var i = p.fromDer(r.body, a);
	return G.certificateFromAsn1(i, t)
};
G.certificateToPem = function (e, t) {
	var a = {
		type: "CERTIFICATE",
		body: p.toDer(G.certificateToAsn1(e)).getBytes()
	};
	return re.pem.encode(a, {
		maxline: t
	})
};
G.publicKeyFromPem = function (e) {
	var t = re.pem.decode(e)[0];
	if (t.type !== "PUBLIC KEY" && t.type !== "RSA PUBLIC KEY") {
		var a = new Error('Could not convert public key from PEM; PEM header type is not "PUBLIC KEY" or "RSA PUBLIC KEY".');
		throw a.headerType = t.type, a
	}
	if (t.procType && t.procType.type === "ENCRYPTED") throw new Error("Could not convert public key from PEM; PEM is encrypted.");
	var r = p.fromDer(t.body);
	return G.publicKeyFromAsn1(r)
};
G.publicKeyToPem = function (e, t) {
	var a = {
		type: "PUBLIC KEY",
		body: p.toDer(G.publicKeyToAsn1(e)).getBytes()
	};
	return re.pem.encode(a, {
		maxline: t
	})
};
G.publicKeyToRSAPublicKeyPem = function (e, t) {
	var a = {
		type: "RSA PUBLIC KEY",
		body: p.toDer(G.publicKeyToRSAPublicKey(e)).getBytes()
	};
	return re.pem.encode(a, {
		maxline: t
	})
};
G.getPublicKeyFingerprint = function (e, t) {
	t = t || {};
	var a = t.md || re.md.sha1.create(),
		r = t.type || "RSAPublicKey",
		n;
	switch (r) {
		case "RSAPublicKey":
			n = p.toDer(G.publicKeyToRSAPublicKey(e)).getBytes();
			break;
		case "SubjectPublicKeyInfo":
			n = p.toDer(G.publicKeyToAsn1(e)).getBytes();
			break;
		default:
			throw new Error('Unknown fingerprint type "' + t.type + '".')
	}
	a.start(), a.update(n);
	var i = a.digest();
	if (t.encoding === "hex") {
		var s = i.toHex();
		return t.delimiter ? s.match(/.{2}/g).join(t.delimiter) : s
	} else {
		if (t.encoding === "binary") return i.getBytes();
		if (t.encoding) throw new Error('Unknown encoding "' + t.encoding + '".')
	}
	return i
};
G.certificationRequestFromPem = function (e, t, a) {
	var r = re.pem.decode(e)[0];
	if (r.type !== "CERTIFICATE REQUEST") {
		var n = new Error('Could not convert certification request from PEM; PEM header type is not "CERTIFICATE REQUEST".');
		throw n.headerType = r.type, n
	}
	if (r.procType && r.procType.type === "ENCRYPTED") throw new Error("Could not convert certification request from PEM; PEM is encrypted.");
	var i = p.fromDer(r.body, a);
	return G.certificationRequestFromAsn1(i, t)
};
G.certificationRequestToPem = function (e, t) {
	var a = {
		type: "CERTIFICATE REQUEST",
		body: p.toDer(G.certificationRequestToAsn1(e)).getBytes()
	};
	return re.pem.encode(a, {
		maxline: t
	})
};
G.createCertificate = function () {
	var e = {};
	return e.version = 2, e.serialNumber = "00", e.signatureOid = null, e.signature = null, e.siginfo = {}, e.siginfo.algorithmOid = null, e.validity = {}, e.validity.notBefore = new Date, e.validity.notAfter = new Date, e.issuer = {}, e.issuer.getField = function (t) {
		return Rt(e.issuer, t)
	}, e.issuer.addField = function (t) {
		it([t]), e.issuer.attributes.push(t)
	}, e.issuer.attributes = [], e.issuer.hash = null, e.subject = {}, e.subject.getField = function (t) {
		return Rt(e.subject, t)
	}, e.subject.addField = function (t) {
		it([t]), e.subject.attributes.push(t)
	}, e.subject.attributes = [], e.subject.hash = null, e.extensions = [], e.publicKey = null, e.md = null, e.setSubject = function (t, a) {
		it(t), e.subject.attributes = t, delete e.subject.uniqueId, a && (e.subject.uniqueId = a), e.subject.hash = null
	}, e.setIssuer = function (t, a) {
		it(t), e.issuer.attributes = t, delete e.issuer.uniqueId, a && (e.issuer.uniqueId = a), e.issuer.hash = null
	}, e.setExtensions = function (t) {
		for (var a = 0; a < t.length; ++a) mi(t[a], {
			cert: e
		});
		e.extensions = t
	}, e.getExtension = function (t) {
		typeof t == "string" && (t = {
			name: t
		});
		for (var a = null, r, n = 0; a === null && n < e.extensions.length; ++n) r = e.extensions[n], (t.id && r.id === t.id || t.name && r.name === t.name) && (a = r);
		return a
	}, e.sign = function (t, a) {
		e.md = a || re.md.sha1.create();
		var r = ye[e.md.algorithm + "WithRSAEncryption"];
		if (!r) {
			var n = new Error("Could not compute certificate digest. Unknown message digest algorithm OID.");
			throw n.algorithm = e.md.algorithm, n
		}
		e.signatureOid = e.siginfo.algorithmOid = r, e.tbsCertificate = G.getTBSCertificate(e);
		var i = p.toDer(e.tbsCertificate);
		e.md.update(i.getBytes()), e.signature = t.sign(e.md)
	}, e.verify = function (t) {
		var a = !1;
		if (!e.issued(t)) {
			var r = t.issuer,
				n = e.subject,
				i = new Error("The parent certificate did not issue the given child certificate; the child certificate's issuer does not match the parent's subject.");
			throw i.expectedIssuer = n.attributes, i.actualIssuer = r.attributes, i
		}
		var s = t.md;
		if (s === null) {
			s = Yr({
				signatureOid: t.signatureOid,
				type: "certificate"
			});
			var o = t.tbsCertificate || G.getTBSCertificate(t),
				l = p.toDer(o);
			s.update(l.getBytes())
		}
		return s !== null && (a = Ei({
			certificate: e,
			md: s,
			signature: t.signature
		})), a
	}, e.isIssuer = function (t) {
		var a = !1,
			r = e.issuer,
			n = t.subject;
		if (r.hash && n.hash) a = r.hash === n.hash;
		else if (r.attributes.length === n.attributes.length) {
			a = !0;
			for (var i, s, o = 0; a && o < r.attributes.length; ++o) i = r.attributes[o], s = n.attributes[o], (i.type !== s.type || i.value !== s.value) && (a = !1)
		}
		return a
	}, e.issued = function (t) {
		return t.isIssuer(e)
	}, e.generateSubjectKeyIdentifier = function () {
		return G.getPublicKeyFingerprint(e.publicKey, {
			type: "RSAPublicKey"
		})
	}, e.verifySubjectKeyIdentifier = function () {
		for (var t = ye.subjectKeyIdentifier, a = 0; a < e.extensions.length; ++a) {
			var r = e.extensions[a];
			if (r.id === t) {
				var n = e.generateSubjectKeyIdentifier().getBytes();
				return re.util.hexToBytes(r.subjectKeyIdentifier) === n
			}
		}
		return !1
	}, e
};
G.certificateFromAsn1 = function (e, t) {
	var a = {},
		r = [];
	if (!p.validate(e, iu, a, r)) {
		var n = new Error("Cannot read X.509 certificate. ASN.1 object is not an X509v3 Certificate.");
		throw n.errors = r, n
	}
	var i = p.derToOid(a.publicKeyOid);
	if (i !== G.oids.rsaEncryption) throw new Error("Cannot read public key. OID is not RSA.");
	var s = G.createCertificate();
	s.version = a.certVersion ? a.certVersion.charCodeAt(0) : 0;
	var o = re.util.createBuffer(a.certSerialNumber);
	s.serialNumber = o.toHex(), s.signatureOid = re.asn1.derToOid(a.certSignatureOid), s.signatureParameters = Lr(s.signatureOid, a.certSignatureParams, !0), s.siginfo.algorithmOid = re.asn1.derToOid(a.certinfoSignatureOid), s.siginfo.parameters = Lr(s.siginfo.algorithmOid, a.certinfoSignatureParams, !1), s.signature = a.certSignature;
	var l = [];
	if (a.certValidity1UTCTime !== void 0 && l.push(p.utcTimeToDate(a.certValidity1UTCTime)), a.certValidity2GeneralizedTime !== void 0 && l.push(p.generalizedTimeToDate(a.certValidity2GeneralizedTime)), a.certValidity3UTCTime !== void 0 && l.push(p.utcTimeToDate(a.certValidity3UTCTime)), a.certValidity4GeneralizedTime !== void 0 && l.push(p.generalizedTimeToDate(a.certValidity4GeneralizedTime)), l.length > 2) throw new Error("Cannot read notBefore/notAfter validity times; more than two times were provided in the certificate.");
	if (l.length < 2) throw new Error("Cannot read notBefore/notAfter validity times; they were not provided as either UTCTime or GeneralizedTime.");
	if (s.validity.notBefore = l[0], s.validity.notAfter = l[1], s.tbsCertificate = a.tbsCertificate, t) {
		s.md = Yr({
			signatureOid: s.signatureOid,
			type: "certificate"
		});
		var f = p.toDer(s.tbsCertificate);
		s.md.update(f.getBytes())
	}
	var u = re.md.sha1.create(),
		c = p.toDer(a.certIssuer);
	u.update(c.getBytes()), s.issuer.getField = function (d) {
		return Rt(s.issuer, d)
	}, s.issuer.addField = function (d) {
		it([d]), s.issuer.attributes.push(d)
	}, s.issuer.attributes = G.RDNAttributesAsArray(a.certIssuer), a.certIssuerUniqueId && (s.issuer.uniqueId = a.certIssuerUniqueId), s.issuer.hash = u.digest().toHex();
	var h = re.md.sha1.create(),
		x = p.toDer(a.certSubject);
	return h.update(x.getBytes()), s.subject.getField = function (d) {
		return Rt(s.subject, d)
	}, s.subject.addField = function (d) {
		it([d]), s.subject.attributes.push(d)
	}, s.subject.attributes = G.RDNAttributesAsArray(a.certSubject), a.certSubjectUniqueId && (s.subject.uniqueId = a.certSubjectUniqueId), s.subject.hash = h.digest().toHex(), a.certExtensions ? s.extensions = G.certificateExtensionsFromAsn1(a.certExtensions) : s.extensions = [], s.publicKey = G.publicKeyFromAsn1(a.subjectPublicKeyInfo), s
};
G.certificateExtensionsFromAsn1 = function (e) {
	for (var t = [], a = 0; a < e.value.length; ++a)
		for (var r = e.value[a], n = 0; n < r.value.length; ++n) t.push(G.certificateExtensionFromAsn1(r.value[n]));
	return t
};
G.certificateExtensionFromAsn1 = function (e) {
	var t = {};
	if (t.id = p.derToOid(e.value[0].value), t.critical = !1, e.value[1].type === p.Type.BOOLEAN ? (t.critical = e.value[1].value.charCodeAt(0) !== 0, t.value = e.value[2].value) : t.value = e.value[1].value, t.id in ye) {
		if (t.name = ye[t.id], t.name === "keyUsage") {
			var a = p.fromDer(t.value),
				r = 0,
				n = 0;
			a.value.length > 1 && (r = a.value.charCodeAt(1), n = a.value.length > 2 ? a.value.charCodeAt(2) : 0), t.digitalSignature = (r & 128) === 128, t.nonRepudiation = (r & 64) === 64, t.keyEncipherment = (r & 32) === 32, t.dataEncipherment = (r & 16) === 16, t.keyAgreement = (r & 8) === 8, t.keyCertSign = (r & 4) === 4, t.cRLSign = (r & 2) === 2, t.encipherOnly = (r & 1) === 1, t.decipherOnly = (n & 128) === 128
		} else if (t.name === "basicConstraints") {
			var a = p.fromDer(t.value);
			a.value.length > 0 && a.value[0].type === p.Type.BOOLEAN ? t.cA = a.value[0].value.charCodeAt(0) !== 0 : t.cA = !1;
			var i = null;
			a.value.length > 0 && a.value[0].type === p.Type.INTEGER ? i = a.value[0].value : a.value.length > 1 && (i = a.value[1].value), i !== null && (t.pathLenConstraint = p.derToInteger(i))
		} else if (t.name === "extKeyUsage")
			for (var a = p.fromDer(t.value), s = 0; s < a.value.length; ++s) {
				var o = p.derToOid(a.value[s].value);
				o in ye ? t[ye[o]] = !0 : t[o] = !0
			} else if (t.name === "nsCertType") {
				var a = p.fromDer(t.value),
					r = 0;
				a.value.length > 1 && (r = a.value.charCodeAt(1)), t.client = (r & 128) === 128, t.server = (r & 64) === 64, t.email = (r & 32) === 32, t.objsign = (r & 16) === 16, t.reserved = (r & 8) === 8, t.sslCA = (r & 4) === 4, t.emailCA = (r & 2) === 2, t.objCA = (r & 1) === 1
			} else if (t.name === "subjectAltName" || t.name === "issuerAltName") {
			t.altNames = [];
			for (var l, a = p.fromDer(t.value), f = 0; f < a.value.length; ++f) {
				l = a.value[f];
				var u = {
					type: l.type,
					value: l.value
				};
				switch (t.altNames.push(u), l.type) {
					case 1:
					case 2:
					case 6:
						break;
					case 7:
						u.ip = re.util.bytesToIP(l.value);
						break;
					case 8:
						u.oid = p.derToOid(l.value);
						break
				}
			}
		} else if (t.name === "subjectKeyIdentifier") {
			var a = p.fromDer(t.value);
			t.subjectKeyIdentifier = re.util.bytesToHex(a.value)
		}
	}
	return t
};
G.certificationRequestFromAsn1 = function (e, t) {
	var a = {},
		r = [];
	if (!p.validate(e, fu, a, r)) {
		var n = new Error("Cannot read PKCS#10 certificate request. ASN.1 object is not a PKCS#10 CertificationRequest.");
		throw n.errors = r, n
	}
	var i = p.derToOid(a.publicKeyOid);
	if (i !== G.oids.rsaEncryption) throw new Error("Cannot read public key. OID is not RSA.");
	var s = G.createCertificationRequest();
	if (s.version = a.csrVersion ? a.csrVersion.charCodeAt(0) : 0, s.signatureOid = re.asn1.derToOid(a.csrSignatureOid), s.signatureParameters = Lr(s.signatureOid, a.csrSignatureParams, !0), s.siginfo.algorithmOid = re.asn1.derToOid(a.csrSignatureOid), s.siginfo.parameters = Lr(s.siginfo.algorithmOid, a.csrSignatureParams, !1), s.signature = a.csrSignature, s.certificationRequestInfo = a.certificationRequestInfo, t) {
		s.md = Yr({
			signatureOid: s.signatureOid,
			type: "certification request"
		});
		var o = p.toDer(s.certificationRequestInfo);
		s.md.update(o.getBytes())
	}
	var l = re.md.sha1.create();
	return s.subject.getField = function (f) {
		return Rt(s.subject, f)
	}, s.subject.addField = function (f) {
		it([f]), s.subject.attributes.push(f)
	}, s.subject.attributes = G.RDNAttributesAsArray(a.certificationRequestInfoSubject, l), s.subject.hash = l.digest().toHex(), s.publicKey = G.publicKeyFromAsn1(a.subjectPublicKeyInfo), s.getAttribute = function (f) {
		return Rt(s, f)
	}, s.addAttribute = function (f) {
		it([f]), s.attributes.push(f)
	}, s.attributes = G.CRIAttributesAsArray(a.certificationRequestInfoAttributes || []), s
};
G.createCertificationRequest = function () {
	var e = {};
	return e.version = 0, e.signatureOid = null, e.signature = null, e.siginfo = {}, e.siginfo.algorithmOid = null, e.subject = {}, e.subject.getField = function (t) {
		return Rt(e.subject, t)
	}, e.subject.addField = function (t) {
		it([t]), e.subject.attributes.push(t)
	}, e.subject.attributes = [], e.subject.hash = null, e.publicKey = null, e.attributes = [], e.getAttribute = function (t) {
		return Rt(e, t)
	}, e.addAttribute = function (t) {
		it([t]), e.attributes.push(t)
	}, e.md = null, e.setSubject = function (t) {
		it(t), e.subject.attributes = t, e.subject.hash = null
	}, e.setAttributes = function (t) {
		it(t), e.attributes = t
	}, e.sign = function (t, a) {
		e.md = a || re.md.sha1.create();
		var r = ye[e.md.algorithm + "WithRSAEncryption"];
		if (!r) {
			var n = new Error("Could not compute certification request digest. Unknown message digest algorithm OID.");
			throw n.algorithm = e.md.algorithm, n
		}
		e.signatureOid = e.siginfo.algorithmOid = r, e.certificationRequestInfo = G.getCertificationRequestInfo(e);
		var i = p.toDer(e.certificationRequestInfo);
		e.md.update(i.getBytes()), e.signature = t.sign(e.md)
	}, e.verify = function () {
		var t = !1,
			a = e.md;
		if (a === null) {
			a = Yr({
				signatureOid: e.signatureOid,
				type: "certification request"
			});
			var r = e.certificationRequestInfo || G.getCertificationRequestInfo(e),
				n = p.toDer(r);
			a.update(n.getBytes())
		}
		return a !== null && (t = Ei({
			certificate: e,
			md: a,
			signature: e.signature
		})), t
	}, e
};

function Jt(e) {
	for (var t = p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, []), a, r, n = e.attributes, i = 0; i < n.length; ++i) {
		a = n[i];
		var s = a.value,
			o = p.Type.PRINTABLESTRING;
		"valueTagClass" in a && (o = a.valueTagClass, o === p.Type.UTF8 && (s = re.util.encodeUtf8(s))), r = p.create(p.Class.UNIVERSAL, p.Type.SET, !0, [p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, [p.create(p.Class.UNIVERSAL, p.Type.OID, !1, p.oidToDer(a.type).getBytes()), p.create(p.Class.UNIVERSAL, o, !1, s)])]), t.value.push(r)
	}
	return t
}

function it(e) {
	for (var t, a = 0; a < e.length; ++a) {
		if (t = e[a], typeof t.name > "u" && (t.type && t.type in G.oids ? t.name = G.oids[t.type] : t.shortName && t.shortName in ke && (t.name = G.oids[ke[t.shortName]])), typeof t.type > "u")
			if (t.name && t.name in G.oids) t.type = G.oids[t.name];
			else {
				var r = new Error("Attribute type not specified.");
				throw r.attribute = t, r
			} if (typeof t.shortName > "u" && t.name && t.name in ke && (t.shortName = ke[t.name]), t.type === ye.extensionRequest && (t.valueConstructed = !0, t.valueTagClass = p.Type.SEQUENCE, !t.value && t.extensions)) {
			t.value = [];
			for (var n = 0; n < t.extensions.length; ++n) t.value.push(G.certificateExtensionToAsn1(mi(t.extensions[n])))
		}
		if (typeof t.value > "u") {
			var r = new Error("Attribute value not specified.");
			throw r.attribute = t, r
		}
	}
}

function mi(e, t) {
	if (t = t || {}, typeof e.name > "u" && e.id && e.id in G.oids && (e.name = G.oids[e.id]), typeof e.id > "u")
		if (e.name && e.name in G.oids) e.id = G.oids[e.name];
		else {
			var a = new Error("Extension ID not specified.");
			throw a.extension = e, a
		} if (typeof e.value < "u") return e;
	if (e.name === "keyUsage") {
		var r = 0,
			n = 0,
			i = 0;
		e.digitalSignature && (n |= 128, r = 7), e.nonRepudiation && (n |= 64, r = 6), e.keyEncipherment && (n |= 32, r = 5), e.dataEncipherment && (n |= 16, r = 4), e.keyAgreement && (n |= 8, r = 3), e.keyCertSign && (n |= 4, r = 2), e.cRLSign && (n |= 2, r = 1), e.encipherOnly && (n |= 1, r = 0), e.decipherOnly && (i |= 128, r = 7);
		var s = String.fromCharCode(r);
		i !== 0 ? s += String.fromCharCode(n) + String.fromCharCode(i) : n !== 0 && (s += String.fromCharCode(n)), e.value = p.create(p.Class.UNIVERSAL, p.Type.BITSTRING, !1, s)
	} else if (e.name === "basicConstraints") e.value = p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, []), e.cA && e.value.value.push(p.create(p.Class.UNIVERSAL, p.Type.BOOLEAN, !1, "ÿ")), "pathLenConstraint" in e && e.value.value.push(p.create(p.Class.UNIVERSAL, p.Type.INTEGER, !1, p.integerToDer(e.pathLenConstraint).getBytes()));
	else if (e.name === "extKeyUsage") {
		e.value = p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, []);
		var o = e.value.value;
		for (var l in e) e[l] === !0 && (l in ye ? o.push(p.create(p.Class.UNIVERSAL, p.Type.OID, !1, p.oidToDer(ye[l]).getBytes())) : l.indexOf(".") !== -1 && o.push(p.create(p.Class.UNIVERSAL, p.Type.OID, !1, p.oidToDer(l).getBytes())))
	} else if (e.name === "nsCertType") {
		var r = 0,
			n = 0;
		e.client && (n |= 128, r = 7), e.server && (n |= 64, r = 6), e.email && (n |= 32, r = 5), e.objsign && (n |= 16, r = 4), e.reserved && (n |= 8, r = 3), e.sslCA && (n |= 4, r = 2), e.emailCA && (n |= 2, r = 1), e.objCA && (n |= 1, r = 0);
		var s = String.fromCharCode(r);
		n !== 0 && (s += String.fromCharCode(n)), e.value = p.create(p.Class.UNIVERSAL, p.Type.BITSTRING, !1, s)
	} else if (e.name === "subjectAltName" || e.name === "issuerAltName") {
		e.value = p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, []);
		for (var f, u = 0; u < e.altNames.length; ++u) {
			f = e.altNames[u];
			var s = f.value;
			if (f.type === 7 && f.ip) {
				if (s = re.util.bytesFromIP(f.ip), s === null) {
					var a = new Error('Extension "ip" value is not a valid IPv4 or IPv6 address.');
					throw a.extension = e, a
				}
			} else f.type === 8 && (f.oid ? s = p.oidToDer(p.oidToDer(f.oid)) : s = p.oidToDer(s));
			e.value.value.push(p.create(p.Class.CONTEXT_SPECIFIC, f.type, !1, s))
		}
	} else if (e.name === "nsComment" && t.cert) {
		if (!/^[\x00-\x7F]*$/.test(e.comment) || e.comment.length < 1 || e.comment.length > 128) throw new Error('Invalid "nsComment" content.');
		e.value = p.create(p.Class.UNIVERSAL, p.Type.IA5STRING, !1, e.comment)
	} else if (e.name === "subjectKeyIdentifier" && t.cert) {
		var c = t.cert.generateSubjectKeyIdentifier();
		e.subjectKeyIdentifier = c.toHex(), e.value = p.create(p.Class.UNIVERSAL, p.Type.OCTETSTRING, !1, c.getBytes())
	} else if (e.name === "authorityKeyIdentifier" && t.cert) {
		e.value = p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, []);
		var o = e.value.value;
		if (e.keyIdentifier) {
			var h = e.keyIdentifier === !0 ? t.cert.generateSubjectKeyIdentifier().getBytes() : e.keyIdentifier;
			o.push(p.create(p.Class.CONTEXT_SPECIFIC, 0, !1, h))
		}
		if (e.authorityCertIssuer) {
			var x = [p.create(p.Class.CONTEXT_SPECIFIC, 4, !0, [Jt(e.authorityCertIssuer === !0 ? t.cert.issuer : e.authorityCertIssuer)])];
			o.push(p.create(p.Class.CONTEXT_SPECIFIC, 1, !0, x))
		}
		if (e.serialNumber) {
			var d = re.util.hexToBytes(e.serialNumber === !0 ? t.cert.serialNumber : e.serialNumber);
			o.push(p.create(p.Class.CONTEXT_SPECIFIC, 2, !1, d))
		}
	} else if (e.name === "cRLDistributionPoints") {
		e.value = p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, []);
		for (var o = e.value.value, g = p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, []), v = p.create(p.Class.CONTEXT_SPECIFIC, 0, !0, []), f, u = 0; u < e.altNames.length; ++u) {
			f = e.altNames[u];
			var s = f.value;
			if (f.type === 7 && f.ip) {
				if (s = re.util.bytesFromIP(f.ip), s === null) {
					var a = new Error('Extension "ip" value is not a valid IPv4 or IPv6 address.');
					throw a.extension = e, a
				}
			} else f.type === 8 && (f.oid ? s = p.oidToDer(p.oidToDer(f.oid)) : s = p.oidToDer(s));
			v.value.push(p.create(p.Class.CONTEXT_SPECIFIC, f.type, !1, s))
		}
		g.value.push(p.create(p.Class.CONTEXT_SPECIFIC, 0, !0, [v])), o.push(g)
	}
	if (typeof e.value > "u") {
		var a = new Error("Extension value not specified.");
		throw a.extension = e, a
	}
	return e
}

function xa(e, t) {
	switch (e) {
		case ye["RSASSA-PSS"]:
			var a = [];
			return t.hash.algorithmOid !== void 0 && a.push(p.create(p.Class.CONTEXT_SPECIFIC, 0, !0, [p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, [p.create(p.Class.UNIVERSAL, p.Type.OID, !1, p.oidToDer(t.hash.algorithmOid).getBytes()), p.create(p.Class.UNIVERSAL, p.Type.NULL, !1, "")])])), t.mgf.algorithmOid !== void 0 && a.push(p.create(p.Class.CONTEXT_SPECIFIC, 1, !0, [p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, [p.create(p.Class.UNIVERSAL, p.Type.OID, !1, p.oidToDer(t.mgf.algorithmOid).getBytes()), p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, [p.create(p.Class.UNIVERSAL, p.Type.OID, !1, p.oidToDer(t.mgf.hash.algorithmOid).getBytes()), p.create(p.Class.UNIVERSAL, p.Type.NULL, !1, "")])])])), t.saltLength !== void 0 && a.push(p.create(p.Class.CONTEXT_SPECIFIC, 2, !0, [p.create(p.Class.UNIVERSAL, p.Type.INTEGER, !1, p.integerToDer(t.saltLength).getBytes())])), p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, a);
		default:
			return p.create(p.Class.UNIVERSAL, p.Type.NULL, !1, "")
	}
}

function uu(e) {
	var t = p.create(p.Class.CONTEXT_SPECIFIC, 0, !0, []);
	if (e.attributes.length === 0) return t;
	for (var a = e.attributes, r = 0; r < a.length; ++r) {
		var n = a[r],
			i = n.value,
			s = p.Type.UTF8;
		"valueTagClass" in n && (s = n.valueTagClass), s === p.Type.UTF8 && (i = re.util.encodeUtf8(i));
		var o = !1;
		"valueConstructed" in n && (o = n.valueConstructed);
		var l = p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, [p.create(p.Class.UNIVERSAL, p.Type.OID, !1, p.oidToDer(n.type).getBytes()), p.create(p.Class.UNIVERSAL, p.Type.SET, !0, [p.create(p.Class.UNIVERSAL, s, o, i)])]);
		t.value.push(l)
	}
	return t
}
var lu = new Date("1950-01-01T00:00:00Z"),
	cu = new Date("2050-01-01T00:00:00Z");

function kn(e) {
	return e >= lu && e < cu ? p.create(p.Class.UNIVERSAL, p.Type.UTCTIME, !1, p.dateToUtcTime(e)) : p.create(p.Class.UNIVERSAL, p.Type.GENERALIZEDTIME, !1, p.dateToGeneralizedTime(e))
}
G.getTBSCertificate = function (e) {
	var t = kn(e.validity.notBefore),
		a = kn(e.validity.notAfter),
		r = p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, [p.create(p.Class.CONTEXT_SPECIFIC, 0, !0, [p.create(p.Class.UNIVERSAL, p.Type.INTEGER, !1, p.integerToDer(e.version).getBytes())]), p.create(p.Class.UNIVERSAL, p.Type.INTEGER, !1, re.util.hexToBytes(e.serialNumber)), p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, [p.create(p.Class.UNIVERSAL, p.Type.OID, !1, p.oidToDer(e.siginfo.algorithmOid).getBytes()), xa(e.siginfo.algorithmOid, e.siginfo.parameters)]), Jt(e.issuer), p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, [t, a]), Jt(e.subject), G.publicKeyToAsn1(e.publicKey)]);
	return e.issuer.uniqueId && r.value.push(p.create(p.Class.CONTEXT_SPECIFIC, 1, !0, [p.create(p.Class.UNIVERSAL, p.Type.BITSTRING, !1, "\0" + e.issuer.uniqueId)])), e.subject.uniqueId && r.value.push(p.create(p.Class.CONTEXT_SPECIFIC, 2, !0, [p.create(p.Class.UNIVERSAL, p.Type.BITSTRING, !1, "\0" + e.subject.uniqueId)])), e.extensions.length > 0 && r.value.push(G.certificateExtensionsToAsn1(e.extensions)), r
};
G.getCertificationRequestInfo = function (e) {
	var t = p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, [p.create(p.Class.UNIVERSAL, p.Type.INTEGER, !1, p.integerToDer(e.version).getBytes()), Jt(e.subject), G.publicKeyToAsn1(e.publicKey), uu(e)]);
	return t
};
G.distinguishedNameToAsn1 = function (e) {
	return Jt(e)
};
G.certificateToAsn1 = function (e) {
	var t = e.tbsCertificate || G.getTBSCertificate(e);
	return p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, [t, p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, [p.create(p.Class.UNIVERSAL, p.Type.OID, !1, p.oidToDer(e.signatureOid).getBytes()), xa(e.signatureOid, e.signatureParameters)]), p.create(p.Class.UNIVERSAL, p.Type.BITSTRING, !1, "\0" + e.signature)])
};
G.certificateExtensionsToAsn1 = function (e) {
	var t = p.create(p.Class.CONTEXT_SPECIFIC, 3, !0, []),
		a = p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, []);
	t.value.push(a);
	for (var r = 0; r < e.length; ++r) a.value.push(G.certificateExtensionToAsn1(e[r]));
	return t
};
G.certificateExtensionToAsn1 = function (e) {
	var t = p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, []);
	t.value.push(p.create(p.Class.UNIVERSAL, p.Type.OID, !1, p.oidToDer(e.id).getBytes())), e.critical && t.value.push(p.create(p.Class.UNIVERSAL, p.Type.BOOLEAN, !1, "ÿ"));
	var a = e.value;
	return typeof e.value != "string" && (a = p.toDer(a).getBytes()), t.value.push(p.create(p.Class.UNIVERSAL, p.Type.OCTETSTRING, !1, a)), t
};
G.certificationRequestToAsn1 = function (e) {
	var t = e.certificationRequestInfo || G.getCertificationRequestInfo(e);
	return p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, [t, p.create(p.Class.UNIVERSAL, p.Type.SEQUENCE, !0, [p.create(p.Class.UNIVERSAL, p.Type.OID, !1, p.oidToDer(e.signatureOid).getBytes()), xa(e.signatureOid, e.signatureParameters)]), p.create(p.Class.UNIVERSAL, p.Type.BITSTRING, !1, "\0" + e.signature)])
};
G.createCaStore = function (e) {
	var t = {
		certs: {}
	};
	t.getIssuer = function (s) {
		var o = a(s.issuer);
		return o
	}, t.addCertificate = function (s) {
		if (typeof s == "string" && (s = re.pki.certificateFromPem(s)), r(s.subject), !t.hasCertificate(s))
			if (s.subject.hash in t.certs) {
				var o = t.certs[s.subject.hash];
				re.util.isArray(o) || (o = [o]), o.push(s), t.certs[s.subject.hash] = o
			} else t.certs[s.subject.hash] = s
	}, t.hasCertificate = function (s) {
		typeof s == "string" && (s = re.pki.certificateFromPem(s));
		var o = a(s.subject);
		if (!o) return !1;
		re.util.isArray(o) || (o = [o]);
		for (var l = p.toDer(G.certificateToAsn1(s)).getBytes(), f = 0; f < o.length; ++f) {
			var u = p.toDer(G.certificateToAsn1(o[f])).getBytes();
			if (l === u) return !0
		}
		return !1
	}, t.listAllCertificates = function () {
		var s = [];
		for (var o in t.certs)
			if (t.certs.hasOwnProperty(o)) {
				var l = t.certs[o];
				if (!re.util.isArray(l)) s.push(l);
				else
					for (var f = 0; f < l.length; ++f) s.push(l[f])
			} return s
	}, t.removeCertificate = function (s) {
		var o;
		if (typeof s == "string" && (s = re.pki.certificateFromPem(s)), r(s.subject), !t.hasCertificate(s)) return null;
		var l = a(s.subject);
		if (!re.util.isArray(l)) return o = t.certs[s.subject.hash], delete t.certs[s.subject.hash], o;
		for (var f = p.toDer(G.certificateToAsn1(s)).getBytes(), u = 0; u < l.length; ++u) {
			var c = p.toDer(G.certificateToAsn1(l[u])).getBytes();
			f === c && (o = l[u], l.splice(u, 1))
		}
		return l.length === 0 && delete t.certs[s.subject.hash], o
	};

	function a(s) {
		return r(s), t.certs[s.hash] || null
	}

	function r(s) {
		if (!s.hash) {
			var o = re.md.sha1.create();
			s.attributes = G.RDNAttributesAsArray(Jt(s), o), s.hash = o.digest().toHex()
		}
	}
	if (e)
		for (var n = 0; n < e.length; ++n) {
			var i = e[n];
			t.addCertificate(i)
		}
	return t
};
G.certificateError = {
	bad_certificate: "forge.pki.BadCertificate",
	unsupported_certificate: "forge.pki.UnsupportedCertificate",
	certificate_revoked: "forge.pki.CertificateRevoked",
	certificate_expired: "forge.pki.CertificateExpired",
	certificate_unknown: "forge.pki.CertificateUnknown",
	unknown_ca: "forge.pki.UnknownCertificateAuthority"
};
G.verifyCertificateChain = function (e, t, a) {
	typeof a == "function" && (a = {
		verify: a
	}), a = a || {}, t = t.slice(0);
	var r = t.slice(0),
		n = a.validityCheckDate;
	typeof n > "u" && (n = new Date);
	var i = !0,
		s = null,
		o = 0;
	do {
		var l = t.shift(),
			f = null,
			u = !1;
		if (n && (n < l.validity.notBefore || n > l.validity.notAfter) && (s = {
				message: "Certificate is not valid yet or has expired.",
				error: G.certificateError.certificate_expired,
				notBefore: l.validity.notBefore,
				notAfter: l.validity.notAfter,
				now: n
			}), s === null) {
			if (f = t[0] || e.getIssuer(l), f === null && l.isIssuer(l) && (u = !0, f = l), f) {
				var c = f;
				re.util.isArray(c) || (c = [c]);
				for (var h = !1; !h && c.length > 0;) {
					f = c.shift();
					try {
						h = f.verify(l)
					} catch {}
				}
				h || (s = {
					message: "Certificate signature is invalid.",
					error: G.certificateError.bad_certificate
				})
			}
			s === null && (!f || u) && !e.hasCertificate(l) && (s = {
				message: "Certificate is not trusted.",
				error: G.certificateError.unknown_ca
			})
		}
		if (s === null && f && !l.isIssuer(f) && (s = {
				message: "Certificate issuer is invalid.",
				error: G.certificateError.bad_certificate
			}), s === null)
			for (var x = {
					keyUsage: !0,
					basicConstraints: !0
				}, d = 0; s === null && d < l.extensions.length; ++d) {
				var g = l.extensions[d];
				g.critical && !(g.name in x) && (s = {
					message: "Certificate has an unsupported critical extension.",
					error: G.certificateError.unsupported_certificate
				})
			}
		if (s === null && (!i || t.length === 0 && (!f || u))) {
			var v = l.getExtension("basicConstraints"),
				B = l.getExtension("keyUsage");
			if (B !== null && (!B.keyCertSign || v === null) && (s = {
					message: "Certificate keyUsage or basicConstraints conflict or indicate that the certificate is not a CA. If the certificate is the only one in the chain or isn't the first then the certificate must be a valid CA.",
					error: G.certificateError.bad_certificate
				}), s === null && v !== null && !v.cA && (s = {
					message: "Certificate basicConstraints indicates the certificate is not a CA.",
					error: G.certificateError.bad_certificate
				}), s === null && B !== null && "pathLenConstraint" in v) {
				var E = o - 1;
				E > v.pathLenConstraint && (s = {
					message: "Certificate basicConstraints pathLenConstraint violated.",
					error: G.certificateError.bad_certificate
				})
			}
		}
		var m = s === null ? !0 : s.error,
			A = a.verify ? a.verify(m, o, r) : m;
		if (A === !0) s = null;
		else throw m === !0 && (s = {
			message: "The application rejected the certificate.",
			error: G.certificateError.bad_certificate
		}), (A || A === 0) && (typeof A == "object" && !re.util.isArray(A) ? (A.message && (s.message = A.message), A.error && (s.error = A.error)) : typeof A == "string" && (s.error = A)), s;
		i = !1, ++o
	} while (t.length > 0);
	return !0
};
var be = le,
	b = be.asn1,
	he = be.pki,
	yr = be.pkcs12 = be.pkcs12 || {},
	Bi = {
		name: "ContentInfo",
		tagClass: b.Class.UNIVERSAL,
		type: b.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "ContentInfo.contentType",
			tagClass: b.Class.UNIVERSAL,
			type: b.Type.OID,
			constructed: !1,
			capture: "contentType"
		}, {
			name: "ContentInfo.content",
			tagClass: b.Class.CONTEXT_SPECIFIC,
			constructed: !0,
			captureAsn1: "content"
		}]
	},
	hu = {
		name: "PFX",
		tagClass: b.Class.UNIVERSAL,
		type: b.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "PFX.version",
			tagClass: b.Class.UNIVERSAL,
			type: b.Type.INTEGER,
			constructed: !1,
			capture: "version"
		}, Bi, {
			name: "PFX.macData",
			tagClass: b.Class.UNIVERSAL,
			type: b.Type.SEQUENCE,
			constructed: !0,
			optional: !0,
			captureAsn1: "mac",
			value: [{
				name: "PFX.macData.mac",
				tagClass: b.Class.UNIVERSAL,
				type: b.Type.SEQUENCE,
				constructed: !0,
				value: [{
					name: "PFX.macData.mac.digestAlgorithm",
					tagClass: b.Class.UNIVERSAL,
					type: b.Type.SEQUENCE,
					constructed: !0,
					value: [{
						name: "PFX.macData.mac.digestAlgorithm.algorithm",
						tagClass: b.Class.UNIVERSAL,
						type: b.Type.OID,
						constructed: !1,
						capture: "macAlgorithm"
					}, {
						name: "PFX.macData.mac.digestAlgorithm.parameters",
						tagClass: b.Class.UNIVERSAL,
						captureAsn1: "macAlgorithmParameters"
					}]
				}, {
					name: "PFX.macData.mac.digest",
					tagClass: b.Class.UNIVERSAL,
					type: b.Type.OCTETSTRING,
					constructed: !1,
					capture: "macDigest"
				}]
			}, {
				name: "PFX.macData.macSalt",
				tagClass: b.Class.UNIVERSAL,
				type: b.Type.OCTETSTRING,
				constructed: !1,
				capture: "macSalt"
			}, {
				name: "PFX.macData.iterations",
				tagClass: b.Class.UNIVERSAL,
				type: b.Type.INTEGER,
				constructed: !1,
				optional: !0,
				capture: "macIterations"
			}]
		}]
	},
	du = {
		name: "SafeBag",
		tagClass: b.Class.UNIVERSAL,
		type: b.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "SafeBag.bagId",
			tagClass: b.Class.UNIVERSAL,
			type: b.Type.OID,
			constructed: !1,
			capture: "bagId"
		}, {
			name: "SafeBag.bagValue",
			tagClass: b.Class.CONTEXT_SPECIFIC,
			constructed: !0,
			captureAsn1: "bagValue"
		}, {
			name: "SafeBag.bagAttributes",
			tagClass: b.Class.UNIVERSAL,
			type: b.Type.SET,
			constructed: !0,
			optional: !0,
			capture: "bagAttributes"
		}]
	},
	xu = {
		name: "Attribute",
		tagClass: b.Class.UNIVERSAL,
		type: b.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "Attribute.attrId",
			tagClass: b.Class.UNIVERSAL,
			type: b.Type.OID,
			constructed: !1,
			capture: "oid"
		}, {
			name: "Attribute.attrValues",
			tagClass: b.Class.UNIVERSAL,
			type: b.Type.SET,
			constructed: !0,
			capture: "values"
		}]
	},
	pu = {
		name: "CertBag",
		tagClass: b.Class.UNIVERSAL,
		type: b.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "CertBag.certId",
			tagClass: b.Class.UNIVERSAL,
			type: b.Type.OID,
			constructed: !1,
			capture: "certId"
		}, {
			name: "CertBag.certValue",
			tagClass: b.Class.CONTEXT_SPECIFIC,
			constructed: !0,
			value: [{
				name: "CertBag.certValue[0]",
				tagClass: b.Class.UNIVERSAL,
				type: b.Class.OCTETSTRING,
				constructed: !1,
				capture: "cert"
			}]
		}]
	};

function lr(e, t, a, r) {
	for (var n = [], i = 0; i < e.length; i++)
		for (var s = 0; s < e[i].safeBags.length; s++) {
			var o = e[i].safeBags[s];
			if (!(r !== void 0 && o.type !== r)) {
				if (t === null) {
					n.push(o);
					continue
				}
				o.attributes[t] !== void 0 && o.attributes[t].indexOf(a) >= 0 && n.push(o)
			}
		}
	return n
}
yr.pkcs12FromAsn1 = function (e, t, a) {
	typeof t == "string" ? (a = t, t = !0) : t === void 0 && (t = !0);
	var r = {},
		n = [];
	if (!b.validate(e, hu, r, n)) {
		var i = new Error("Cannot read PKCS#12 PFX. ASN.1 object is not an PKCS#12 PFX.");
		throw i.errors = i, i
	}
	var s = {
		version: r.version.charCodeAt(0),
		safeContents: [],
		getBags: function (v) {
			var B = {},
				E;
			return "localKeyId" in v ? E = v.localKeyId : "localKeyIdHex" in v && (E = be.util.hexToBytes(v.localKeyIdHex)), E === void 0 && !("friendlyName" in v) && "bagType" in v && (B[v.bagType] = lr(s.safeContents, null, null, v.bagType)), E !== void 0 && (B.localKeyId = lr(s.safeContents, "localKeyId", E, v.bagType)), "friendlyName" in v && (B.friendlyName = lr(s.safeContents, "friendlyName", v.friendlyName, v.bagType)), B
		},
		getBagsByFriendlyName: function (v, B) {
			return lr(s.safeContents, "friendlyName", v, B)
		},
		getBagsByLocalKeyId: function (v, B) {
			return lr(s.safeContents, "localKeyId", v, B)
		}
	};
	if (r.version.charCodeAt(0) !== 3) {
		var i = new Error("PKCS#12 PFX of version other than 3 not supported.");
		throw i.version = r.version.charCodeAt(0), i
	}
	if (b.derToOid(r.contentType) !== he.oids.data) {
		var i = new Error("Only PKCS#12 PFX in password integrity mode supported.");
		throw i.oid = b.derToOid(r.contentType), i
	}
	var o = r.content.value[0];
	if (o.tagClass !== b.Class.UNIVERSAL || o.type !== b.Type.OCTETSTRING) throw new Error("PKCS#12 authSafe content data is not an OCTET STRING.");
	if (o = pa(o), r.mac) {
		var l = null,
			f = 0,
			u = b.derToOid(r.macAlgorithm);
		switch (u) {
			case he.oids.sha1:
				l = be.md.sha1.create(), f = 20;
				break;
			case he.oids.sha256:
				l = be.md.sha256.create(), f = 32;
				break;
			case he.oids.sha384:
				l = be.md.sha384.create(), f = 48;
				break;
			case he.oids.sha512:
				l = be.md.sha512.create(), f = 64;
				break;
			case he.oids.md5:
				l = be.md.md5.create(), f = 16;
				break
		}
		if (l === null) throw new Error("PKCS#12 uses unsupported MAC algorithm: " + u);
		var c = new be.util.ByteBuffer(r.macSalt),
			h = "macIterations" in r ? parseInt(be.util.bytesToHex(r.macIterations), 16) : 1,
			x = yr.generateKey(a, c, 3, h, f, l),
			d = be.hmac.create();
		d.start(l, x), d.update(o.value);
		var g = d.getMac();
		if (g.getBytes() !== r.macDigest) throw new Error("PKCS#12 MAC could not be verified. Invalid password?")
	}
	return vu(s, o.value, t, a), s
};

function pa(e) {
	if (e.composed || e.constructed) {
		for (var t = be.util.createBuffer(), a = 0; a < e.value.length; ++a) t.putBytes(e.value[a].value);
		e.composed = e.constructed = !1, e.value = t.getBytes()
	}
	return e
}

function vu(e, t, a, r) {
	if (t = b.fromDer(t, a), t.tagClass !== b.Class.UNIVERSAL || t.type !== b.Type.SEQUENCE || t.constructed !== !0) throw new Error("PKCS#12 AuthenticatedSafe expected to be a SEQUENCE OF ContentInfo");
	for (var n = 0; n < t.value.length; n++) {
		var i = t.value[n],
			s = {},
			o = [];
		if (!b.validate(i, Bi, s, o)) {
			var l = new Error("Cannot read ContentInfo.");
			throw l.errors = o, l
		}
		var f = {
				encrypted: !1
			},
			u = null,
			c = s.content.value[0];
		switch (b.derToOid(s.contentType)) {
			case he.oids.data:
				if (c.tagClass !== b.Class.UNIVERSAL || c.type !== b.Type.OCTETSTRING) throw new Error("PKCS#12 SafeContents Data is not an OCTET STRING.");
				u = pa(c).value;
				break;
			case he.oids.encryptedData:
				u = yu(c, r), f.encrypted = !0;
				break;
			default:
				var l = new Error("Unsupported PKCS#12 contentType.");
				throw l.contentType = b.derToOid(s.contentType), l
		}
		f.safeBags = gu(u, a, r), e.safeContents.push(f)
	}
}

function yu(e, t) {
	var a = {},
		r = [];
	if (!b.validate(e, be.pkcs7.asn1.encryptedDataValidator, a, r)) {
		var n = new Error("Cannot read EncryptedContentInfo.");
		throw n.errors = r, n
	}
	var i = b.derToOid(a.contentType);
	if (i !== he.oids.data) {
		var n = new Error("PKCS#12 EncryptedContentInfo ContentType is not Data.");
		throw n.oid = i, n
	}
	i = b.derToOid(a.encAlgorithm);
	var s = he.pbe.getCipher(i, a.encParameter, t),
		o = pa(a.encryptedContentAsn1),
		l = be.util.createBuffer(o.value);
	if (s.update(l), !s.finish()) throw new Error("Failed to decrypt PKCS#12 SafeContents.");
	return s.output.getBytes()
}

function gu(e, t, a) {
	if (!t && e.length === 0) return [];
	if (e = b.fromDer(e, t), e.tagClass !== b.Class.UNIVERSAL || e.type !== b.Type.SEQUENCE || e.constructed !== !0) throw new Error("PKCS#12 SafeContents expected to be a SEQUENCE OF SafeBag.");
	for (var r = [], n = 0; n < e.value.length; n++) {
		var i = e.value[n],
			s = {},
			o = [];
		if (!b.validate(i, du, s, o)) {
			var l = new Error("Cannot read SafeBag.");
			throw l.errors = o, l
		}
		var f = {
			type: b.derToOid(s.bagId),
			attributes: Cu(s.bagAttributes)
		};
		r.push(f);
		var u, c, h = s.bagValue.value[0];
		switch (f.type) {
			case he.oids.pkcs8ShroudedKeyBag:
				if (h = he.decryptPrivateKeyInfo(h, a), h === null) throw new Error("Unable to decrypt PKCS#8 ShroudedKeyBag, wrong password?");
			case he.oids.keyBag:
				try {
					f.key = he.privateKeyFromAsn1(h)
				} catch {
					f.key = null, f.asn1 = h
				}
				continue;
			case he.oids.certBag:
				u = pu, c = function () {
					if (b.derToOid(s.certId) !== he.oids.x509Certificate) {
						var d = new Error("Unsupported certificate type, only X.509 supported.");
						throw d.oid = b.derToOid(s.certId), d
					}
					var g = b.fromDer(s.cert, t);
					try {
						f.cert = he.certificateFromAsn1(g, !0)
					} catch {
						f.cert = null, f.asn1 = g
					}
				};
				break;
			default:
				var l = new Error("Unsupported PKCS#12 SafeBag type.");
				throw l.oid = f.type, l
		}
		if (u !== void 0 && !b.validate(h, u, s, o)) {
			var l = new Error("Cannot read PKCS#12 " + u.name);
			throw l.errors = o, l
		}
		c()
	}
	return r
}

function Cu(e) {
	var t = {};
	if (e !== void 0)
		for (var a = 0; a < e.length; ++a) {
			var r = {},
				n = [];
			if (!b.validate(e[a], xu, r, n)) {
				var i = new Error("Cannot read PKCS#12 BagAttribute.");
				throw i.errors = n, i
			}
			var s = b.derToOid(r.oid);
			if (he.oids[s] !== void 0) {
				t[he.oids[s]] = [];
				for (var o = 0; o < r.values.length; ++o) t[he.oids[s]].push(r.values[o].value)
			}
		}
	return t
}
yr.toPkcs12Asn1 = function (e, t, a, r) {
	r = r || {}, r.saltSize = r.saltSize || 8, r.count = r.count || 2048, r.algorithm = r.algorithm || r.encAlgorithm || "aes128", "useMac" in r || (r.useMac = !0), "localKeyId" in r || (r.localKeyId = null), "generateLocalKeyId" in r || (r.generateLocalKeyId = !0);
	var n = r.localKeyId,
		i;
	if (n !== null) n = be.util.hexToBytes(n);
	else if (r.generateLocalKeyId)
		if (t) {
			var s = be.util.isArray(t) ? t[0] : t;
			typeof s == "string" && (s = he.certificateFromPem(s));
			var o = be.md.sha1.create();
			o.update(b.toDer(he.certificateToAsn1(s)).getBytes()), n = o.digest().getBytes()
		} else n = be.random.getBytes(20);
	var l = [];
	n !== null && l.push(b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(he.oids.localKeyId).getBytes()), b.create(b.Class.UNIVERSAL, b.Type.SET, !0, [b.create(b.Class.UNIVERSAL, b.Type.OCTETSTRING, !1, n)])])), "friendlyName" in r && l.push(b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(he.oids.friendlyName).getBytes()), b.create(b.Class.UNIVERSAL, b.Type.SET, !0, [b.create(b.Class.UNIVERSAL, b.Type.BMPSTRING, !1, r.friendlyName)])])), l.length > 0 && (i = b.create(b.Class.UNIVERSAL, b.Type.SET, !0, l));
	var f = [],
		u = [];
	t !== null && (be.util.isArray(t) ? u = t : u = [t]);
	for (var c = [], h = 0; h < u.length; ++h) {
		t = u[h], typeof t == "string" && (t = he.certificateFromPem(t));
		var x = h === 0 ? i : void 0,
			d = he.certificateToAsn1(t),
			g = b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(he.oids.certBag).getBytes()), b.create(b.Class.CONTEXT_SPECIFIC, 0, !0, [b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(he.oids.x509Certificate).getBytes()), b.create(b.Class.CONTEXT_SPECIFIC, 0, !0, [b.create(b.Class.UNIVERSAL, b.Type.OCTETSTRING, !1, b.toDer(d).getBytes())])])]), x]);
		c.push(g)
	}
	if (c.length > 0) {
		var v = b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, c),
			B = b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(he.oids.data).getBytes()), b.create(b.Class.CONTEXT_SPECIFIC, 0, !0, [b.create(b.Class.UNIVERSAL, b.Type.OCTETSTRING, !1, b.toDer(v).getBytes())])]);
		f.push(B)
	}
	var E = null;
	if (e !== null) {
		var m = he.wrapRsaPrivateKey(he.privateKeyToAsn1(e));
		a === null ? E = b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(he.oids.keyBag).getBytes()), b.create(b.Class.CONTEXT_SPECIFIC, 0, !0, [m]), i]) : E = b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(he.oids.pkcs8ShroudedKeyBag).getBytes()), b.create(b.Class.CONTEXT_SPECIFIC, 0, !0, [he.encryptPrivateKeyInfo(m, a, r)]), i]);
		var A = b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [E]),
			T = b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(he.oids.data).getBytes()), b.create(b.Class.CONTEXT_SPECIFIC, 0, !0, [b.create(b.Class.UNIVERSAL, b.Type.OCTETSTRING, !1, b.toDer(A).getBytes())])]);
		f.push(T)
	}
	var S = b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, f),
		N;
	if (r.useMac) {
		var o = be.md.sha1.create(),
			w = new be.util.ByteBuffer(be.random.getBytes(r.saltSize)),
			K = r.count,
			e = yr.generateKey(a, w, 3, K, 20),
			D = be.hmac.create();
		D.start(o, e), D.update(b.toDer(S).getBytes());
		var F = D.getMac();
		N = b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(he.oids.sha1).getBytes()), b.create(b.Class.UNIVERSAL, b.Type.NULL, !1, "")]), b.create(b.Class.UNIVERSAL, b.Type.OCTETSTRING, !1, F.getBytes())]), b.create(b.Class.UNIVERSAL, b.Type.OCTETSTRING, !1, w.getBytes()), b.create(b.Class.UNIVERSAL, b.Type.INTEGER, !1, b.integerToDer(K).getBytes())])
	}
	return b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [b.create(b.Class.UNIVERSAL, b.Type.INTEGER, !1, b.integerToDer(3).getBytes()), b.create(b.Class.UNIVERSAL, b.Type.SEQUENCE, !0, [b.create(b.Class.UNIVERSAL, b.Type.OID, !1, b.oidToDer(he.oids.data).getBytes()), b.create(b.Class.CONTEXT_SPECIFIC, 0, !0, [b.create(b.Class.UNIVERSAL, b.Type.OCTETSTRING, !1, b.toDer(S).getBytes())])]), N])
};
yr.generateKey = be.pbe.generatePkcs12Key;
var wt = le,
	va = wt.asn1,
	er = wt.pki = wt.pki || {};
er.pemToDer = function (e) {
	var t = wt.pem.decode(e)[0];
	if (t.procType && t.procType.type === "ENCRYPTED") throw new Error("Could not convert PEM to DER; PEM is encrypted.");
	return wt.util.createBuffer(t.body)
};
er.privateKeyFromPem = function (e) {
	var t = wt.pem.decode(e)[0];
	if (t.type !== "PRIVATE KEY" && t.type !== "RSA PRIVATE KEY") {
		var a = new Error('Could not convert private key from PEM; PEM header type is not "PRIVATE KEY" or "RSA PRIVATE KEY".');
		throw a.headerType = t.type, a
	}
	if (t.procType && t.procType.type === "ENCRYPTED") throw new Error("Could not convert private key from PEM; PEM is encrypted.");
	var r = va.fromDer(t.body);
	return er.privateKeyFromAsn1(r)
};
er.privateKeyToPem = function (e, t) {
	var a = {
		type: "RSA PRIVATE KEY",
		body: va.toDer(er.privateKeyToAsn1(e)).getBytes()
	};
	return wt.pem.encode(a, {
		maxline: t
	})
};
er.privateKeyInfoToPem = function (e, t) {
	var a = {
		type: "PRIVATE KEY",
		body: va.toDer(e).getBytes()
	};
	return wt.pem.encode(a, {
		maxline: t
	})
};
var M = le,
	$r = function (e, t, a, r) {
		var n = M.util.createBuffer(),
			i = e.length >> 1,
			s = i + (e.length & 1),
			o = e.substr(0, s),
			l = e.substr(i, s),
			f = M.util.createBuffer(),
			u = M.hmac.create();
		a = t + a;
		var c = Math.ceil(r / 16),
			h = Math.ceil(r / 20);
		u.start("MD5", o);
		var x = M.util.createBuffer();
		f.putBytes(a);
		for (var d = 0; d < c; ++d) u.start(null, null), u.update(f.getBytes()), f.putBuffer(u.digest()), u.start(null, null), u.update(f.bytes() + a), x.putBuffer(u.digest());
		u.start("SHA1", l);
		var g = M.util.createBuffer();
		f.clear(), f.putBytes(a);
		for (var d = 0; d < h; ++d) u.start(null, null), u.update(f.getBytes()), f.putBuffer(u.digest()), u.start(null, null), u.update(f.bytes() + a), g.putBuffer(u.digest());
		return n.putBytes(M.util.xorBytes(x.getBytes(), g.getBytes(), r)), n
	},
	Eu = function (e, t, a) {
		var r = M.hmac.create();
		r.start("SHA1", e);
		var n = M.util.createBuffer();
		return n.putInt32(t[0]), n.putInt32(t[1]), n.putByte(a.type), n.putByte(a.version.major), n.putByte(a.version.minor), n.putInt16(a.length), n.putBytes(a.fragment.bytes()), r.update(n.getBytes()), r.digest().getBytes()
	},
	mu = function (e, t, a) {
		var r = !1;
		try {
			var n = e.deflate(t.fragment.getBytes());
			t.fragment = M.util.createBuffer(n), t.length = n.length, r = !0
		} catch {}
		return r
	},
	Bu = function (e, t, a) {
		var r = !1;
		try {
			var n = e.inflate(t.fragment.getBytes());
			t.fragment = M.util.createBuffer(n), t.length = n.length, r = !0
		} catch {}
		return r
	},
	Je = function (e, t) {
		var a = 0;
		switch (t) {
			case 1:
				a = e.getByte();
				break;
			case 2:
				a = e.getInt16();
				break;
			case 3:
				a = e.getInt24();
				break;
			case 4:
				a = e.getInt32();
				break
		}
		return M.util.createBuffer(e.getBytes(a))
	},
	rt = function (e, t, a) {
		e.putInt(a.length(), t << 3), e.putBuffer(a)
	},
	C = {};
C.Versions = {
	TLS_1_0: {
		major: 3,
		minor: 1
	},
	TLS_1_1: {
		major: 3,
		minor: 2
	},
	TLS_1_2: {
		major: 3,
		minor: 3
	}
};
C.SupportedVersions = [C.Versions.TLS_1_1, C.Versions.TLS_1_0];
C.Version = C.SupportedVersions[0];
C.MaxFragment = 15360;
C.ConnectionEnd = {
	server: 0,
	client: 1
};
C.PRFAlgorithm = {
	tls_prf_sha256: 0
};
C.BulkCipherAlgorithm = {
	none: null,
	rc4: 0,
	des3: 1,
	aes: 2
};
C.CipherType = {
	stream: 0,
	block: 1,
	aead: 2
};
C.MACAlgorithm = {
	none: null,
	hmac_md5: 0,
	hmac_sha1: 1,
	hmac_sha256: 2,
	hmac_sha384: 3,
	hmac_sha512: 4
};
C.CompressionMethod = {
	none: 0,
	deflate: 1
};
C.ContentType = {
	change_cipher_spec: 20,
	alert: 21,
	handshake: 22,
	application_data: 23,
	heartbeat: 24
};
C.HandshakeType = {
	hello_request: 0,
	client_hello: 1,
	server_hello: 2,
	certificate: 11,
	server_key_exchange: 12,
	certificate_request: 13,
	server_hello_done: 14,
	certificate_verify: 15,
	client_key_exchange: 16,
	finished: 20
};
C.Alert = {};
C.Alert.Level = {
	warning: 1,
	fatal: 2
};
C.Alert.Description = {
	close_notify: 0,
	unexpected_message: 10,
	bad_record_mac: 20,
	decryption_failed: 21,
	record_overflow: 22,
	decompression_failure: 30,
	handshake_failure: 40,
	bad_certificate: 42,
	unsupported_certificate: 43,
	certificate_revoked: 44,
	certificate_expired: 45,
	certificate_unknown: 46,
	illegal_parameter: 47,
	unknown_ca: 48,
	access_denied: 49,
	decode_error: 50,
	decrypt_error: 51,
	export_restriction: 60,
	protocol_version: 70,
	insufficient_security: 71,
	internal_error: 80,
	user_canceled: 90,
	no_renegotiation: 100
};
C.HeartbeatMessageType = {
	heartbeat_request: 1,
	heartbeat_response: 2
};
C.CipherSuites = {};
C.getCipherSuite = function (e) {
	var t = null;
	for (var a in C.CipherSuites) {
		var r = C.CipherSuites[a];
		if (r.id[0] === e.charCodeAt(0) && r.id[1] === e.charCodeAt(1)) {
			t = r;
			break
		}
	}
	return t
};
C.handleUnexpected = function (e, t) {
	var a = !e.open && e.entity === C.ConnectionEnd.client;
	a || e.error(e, {
		message: "Unexpected message. Received TLS record out of order.",
		send: !0,
		alert: {
			level: C.Alert.Level.fatal,
			description: C.Alert.Description.unexpected_message
		}
	})
};
C.handleHelloRequest = function (e, t, a) {
	!e.handshaking && e.handshakes > 0 && (C.queue(e, C.createAlert(e, {
		level: C.Alert.Level.warning,
		description: C.Alert.Description.no_renegotiation
	})), C.flush(e)), e.process()
};
C.parseHelloMessage = function (e, t, a) {
	var r = null,
		n = e.entity === C.ConnectionEnd.client;
	if (a < 38) e.error(e, {
		message: n ? "Invalid ServerHello message. Message too short." : "Invalid ClientHello message. Message too short.",
		send: !0,
		alert: {
			level: C.Alert.Level.fatal,
			description: C.Alert.Description.illegal_parameter
		}
	});
	else {
		var i = t.fragment,
			s = i.length();
		if (r = {
				version: {
					major: i.getByte(),
					minor: i.getByte()
				},
				random: M.util.createBuffer(i.getBytes(32)),
				session_id: Je(i, 1),
				extensions: []
			}, n ? (r.cipher_suite = i.getBytes(2), r.compression_method = i.getByte()) : (r.cipher_suites = Je(i, 2), r.compression_methods = Je(i, 1)), s = a - (s - i.length()), s > 0) {
			for (var o = Je(i, 2); o.length() > 0;) r.extensions.push({
				type: [o.getByte(), o.getByte()],
				data: Je(o, 2)
			});
			if (!n)
				for (var l = 0; l < r.extensions.length; ++l) {
					var f = r.extensions[l];
					if (f.type[0] === 0 && f.type[1] === 0)
						for (var u = Je(f.data, 2); u.length() > 0;) {
							var c = u.getByte();
							if (c !== 0) break;
							e.session.extensions.server_name.serverNameList.push(Je(u, 2).getBytes())
						}
				}
		}
		if (e.session.version && (r.version.major !== e.session.version.major || r.version.minor !== e.session.version.minor)) return e.error(e, {
			message: "TLS version change is disallowed during renegotiation.",
			send: !0,
			alert: {
				level: C.Alert.Level.fatal,
				description: C.Alert.Description.protocol_version
			}
		});
		if (n) e.session.cipherSuite = C.getCipherSuite(r.cipher_suite);
		else
			for (var h = M.util.createBuffer(r.cipher_suites.bytes()); h.length() > 0 && (e.session.cipherSuite = C.getCipherSuite(h.getBytes(2)), e.session.cipherSuite === null););
		if (e.session.cipherSuite === null) return e.error(e, {
			message: "No cipher suites in common.",
			send: !0,
			alert: {
				level: C.Alert.Level.fatal,
				description: C.Alert.Description.handshake_failure
			},
			cipherSuite: M.util.bytesToHex(r.cipher_suite)
		});
		n ? e.session.compressionMethod = r.compression_method : e.session.compressionMethod = C.CompressionMethod.none
	}
	return r
};
C.createSecurityParameters = function (e, t) {
	var a = e.entity === C.ConnectionEnd.client,
		r = t.random.bytes(),
		n = a ? e.session.sp.client_random : r,
		i = a ? r : C.createRandom().getBytes();
	e.session.sp = {
		entity: e.entity,
		prf_algorithm: C.PRFAlgorithm.tls_prf_sha256,
		bulk_cipher_algorithm: null,
		cipher_type: null,
		enc_key_length: null,
		block_length: null,
		fixed_iv_length: null,
		record_iv_length: null,
		mac_algorithm: null,
		mac_length: null,
		mac_key_length: null,
		compression_algorithm: e.session.compressionMethod,
		pre_master_secret: null,
		master_secret: null,
		client_random: n,
		server_random: i
	}
};
C.handleServerHello = function (e, t, a) {
	var r = C.parseHelloMessage(e, t, a);
	if (!e.fail) {
		if (r.version.minor <= e.version.minor) e.version.minor = r.version.minor;
		else return e.error(e, {
			message: "Incompatible TLS version.",
			send: !0,
			alert: {
				level: C.Alert.Level.fatal,
				description: C.Alert.Description.protocol_version
			}
		});
		e.session.version = e.version;
		var n = r.session_id.bytes();
		n.length > 0 && n === e.session.id ? (e.expect = Ai, e.session.resuming = !0, e.session.sp.server_random = r.random.bytes()) : (e.expect = Su, e.session.resuming = !1, C.createSecurityParameters(e, r)), e.session.id = n, e.process()
	}
};
C.handleClientHello = function (e, t, a) {
	var r = C.parseHelloMessage(e, t, a);
	if (!e.fail) {
		var n = r.session_id.bytes(),
			i = null;
		if (e.sessionCache && (i = e.sessionCache.getSession(n), i === null ? n = "" : (i.version.major !== r.version.major || i.version.minor > r.version.minor) && (i = null, n = "")), n.length === 0 && (n = M.random.getBytes(32)), e.session.id = n, e.session.clientHelloVersion = r.version, e.session.sp = {}, i) e.version = e.session.version = i.version, e.session.sp = i.sp;
		else {
			for (var s, o = 1; o < C.SupportedVersions.length && (s = C.SupportedVersions[o], !(s.minor <= r.version.minor)); ++o);
			e.version = {
				major: s.major,
				minor: s.minor
			}, e.session.version = e.version
		}
		i !== null ? (e.expect = ya, e.session.resuming = !0, e.session.sp.client_random = r.random.bytes()) : (e.expect = e.verifyClient !== !1 ? Fu : Y0, e.session.resuming = !1, C.createSecurityParameters(e, r)), e.open = !0, C.queue(e, C.createRecord(e, {
			type: C.ContentType.handshake,
			data: C.createServerHello(e)
		})), e.session.resuming ? (C.queue(e, C.createRecord(e, {
			type: C.ContentType.change_cipher_spec,
			data: C.createChangeCipherSpec()
		})), e.state.pending = C.createConnectionState(e), e.state.current.write = e.state.pending.write, C.queue(e, C.createRecord(e, {
			type: C.ContentType.handshake,
			data: C.createFinished(e)
		}))) : (C.queue(e, C.createRecord(e, {
			type: C.ContentType.handshake,
			data: C.createCertificate(e)
		})), e.fail || (C.queue(e, C.createRecord(e, {
			type: C.ContentType.handshake,
			data: C.createServerKeyExchange(e)
		})), e.verifyClient !== !1 && C.queue(e, C.createRecord(e, {
			type: C.ContentType.handshake,
			data: C.createCertificateRequest(e)
		})), C.queue(e, C.createRecord(e, {
			type: C.ContentType.handshake,
			data: C.createServerHelloDone(e)
		})))), C.flush(e), e.process()
	}
};
C.handleCertificate = function (e, t, a) {
	if (a < 3) return e.error(e, {
		message: "Invalid Certificate message. Message too short.",
		send: !0,
		alert: {
			level: C.Alert.Level.fatal,
			description: C.Alert.Description.illegal_parameter
		}
	});
	var r = t.fragment,
		n = {
			certificate_list: Je(r, 3)
		},
		i, s, o = [];
	try {
		for (; n.certificate_list.length() > 0;) i = Je(n.certificate_list, 3), s = M.asn1.fromDer(i), i = M.pki.certificateFromAsn1(s, !0), o.push(i)
	} catch (f) {
		return e.error(e, {
			message: "Could not parse certificate list.",
			cause: f,
			send: !0,
			alert: {
				level: C.Alert.Level.fatal,
				description: C.Alert.Description.bad_certificate
			}
		})
	}
	var l = e.entity === C.ConnectionEnd.client;
	(l || e.verifyClient === !0) && o.length === 0 ? e.error(e, {
		message: l ? "No server certificate provided." : "No client certificate provided.",
		send: !0,
		alert: {
			level: C.Alert.Level.fatal,
			description: C.Alert.Description.illegal_parameter
		}
	}) : o.length === 0 ? e.expect = l ? Ln : Y0 : (l ? e.session.serverCertificate = o[0] : e.session.clientCertificate = o[0], C.verifyCertificateChain(e, o) && (e.expect = l ? Ln : Y0)), e.process()
};
C.handleServerKeyExchange = function (e, t, a) {
	if (a > 0) return e.error(e, {
		message: "Invalid key parameters. Only RSA is supported.",
		send: !0,
		alert: {
			level: C.Alert.Level.fatal,
			description: C.Alert.Description.unsupported_certificate
		}
	});
	e.expect = Tu, e.process()
};
C.handleClientKeyExchange = function (e, t, a) {
	if (a < 48) return e.error(e, {
		message: "Invalid key parameters. Only RSA is supported.",
		send: !0,
		alert: {
			level: C.Alert.Level.fatal,
			description: C.Alert.Description.unsupported_certificate
		}
	});
	var r = t.fragment,
		n = {
			enc_pre_master_secret: Je(r, 2).getBytes()
		},
		i = null;
	if (e.getPrivateKey) try {
		i = e.getPrivateKey(e, e.session.serverCertificate), i = M.pki.privateKeyFromPem(i)
	} catch (l) {
		e.error(e, {
			message: "Could not get private key.",
			cause: l,
			send: !0,
			alert: {
				level: C.Alert.Level.fatal,
				description: C.Alert.Description.internal_error
			}
		})
	}
	if (i === null) return e.error(e, {
		message: "No private key set.",
		send: !0,
		alert: {
			level: C.Alert.Level.fatal,
			description: C.Alert.Description.internal_error
		}
	});
	try {
		var s = e.session.sp;
		s.pre_master_secret = i.decrypt(n.enc_pre_master_secret);
		var o = e.session.clientHelloVersion;
		if (o.major !== s.pre_master_secret.charCodeAt(0) || o.minor !== s.pre_master_secret.charCodeAt(1)) throw new Error("TLS version rollback attack detected.")
	} catch {
		s.pre_master_secret = M.random.getBytes(48)
	}
	e.expect = ya, e.session.clientCertificate !== null && (e.expect = Ru), e.process()
};
C.handleCertificateRequest = function (e, t, a) {
	if (a < 3) return e.error(e, {
		message: "Invalid CertificateRequest. Message too short.",
		send: !0,
		alert: {
			level: C.Alert.Level.fatal,
			description: C.Alert.Description.illegal_parameter
		}
	});
	var r = t.fragment,
		n = {
			certificate_types: Je(r, 1),
			certificate_authorities: Je(r, 2)
		};
	e.session.certificateRequest = n, e.expect = bu, e.process()
};
C.handleCertificateVerify = function (e, t, a) {
	if (a < 2) return e.error(e, {
		message: "Invalid CertificateVerify. Message too short.",
		send: !0,
		alert: {
			level: C.Alert.Level.fatal,
			description: C.Alert.Description.illegal_parameter
		}
	});
	var r = t.fragment;
	r.read -= 4;
	var n = r.bytes();
	r.read += 4;
	var i = {
			signature: Je(r, 2).getBytes()
		},
		s = M.util.createBuffer();
	s.putBuffer(e.session.md5.digest()), s.putBuffer(e.session.sha1.digest()), s = s.getBytes();
	try {
		var o = e.session.clientCertificate;
		if (!o.publicKey.verify(s, i.signature, "NONE")) throw new Error("CertificateVerify signature does not match.");
		e.session.md5.update(n), e.session.sha1.update(n)
	} catch {
		return e.error(e, {
			message: "Bad signature in CertificateVerify.",
			send: !0,
			alert: {
				level: C.Alert.Level.fatal,
				description: C.Alert.Description.handshake_failure
			}
		})
	}
	e.expect = ya, e.process()
};
C.handleServerHelloDone = function (e, t, a) {
	if (a > 0) return e.error(e, {
		message: "Invalid ServerHelloDone message. Invalid length.",
		send: !0,
		alert: {
			level: C.Alert.Level.fatal,
			description: C.Alert.Description.record_overflow
		}
	});
	if (e.serverCertificate === null) {
		var r = {
				message: "No server certificate provided. Not enough security.",
				send: !0,
				alert: {
					level: C.Alert.Level.fatal,
					description: C.Alert.Description.insufficient_security
				}
			},
			n = 0,
			i = e.verify(e, r.alert.description, n, []);
		if (i !== !0) return (i || i === 0) && (typeof i == "object" && !M.util.isArray(i) ? (i.message && (r.message = i.message), i.alert && (r.alert.description = i.alert)) : typeof i == "number" && (r.alert.description = i)), e.error(e, r)
	}
	e.session.certificateRequest !== null && (t = C.createRecord(e, {
		type: C.ContentType.handshake,
		data: C.createCertificate(e)
	}), C.queue(e, t)), t = C.createRecord(e, {
		type: C.ContentType.handshake,
		data: C.createClientKeyExchange(e)
	}), C.queue(e, t), e.expect = Du;
	var s = function (o, l) {
		o.session.certificateRequest !== null && o.session.clientCertificate !== null && C.queue(o, C.createRecord(o, {
			type: C.ContentType.handshake,
			data: C.createCertificateVerify(o, l)
		})), C.queue(o, C.createRecord(o, {
			type: C.ContentType.change_cipher_spec,
			data: C.createChangeCipherSpec()
		})), o.state.pending = C.createConnectionState(o), o.state.current.write = o.state.pending.write, C.queue(o, C.createRecord(o, {
			type: C.ContentType.handshake,
			data: C.createFinished(o)
		})), o.expect = Ai, C.flush(o), o.process()
	};
	if (e.session.certificateRequest === null || e.session.clientCertificate === null) return s(e, null);
	C.getClientSignature(e, s)
};
C.handleChangeCipherSpec = function (e, t) {
	if (t.fragment.getByte() !== 1) return e.error(e, {
		message: "Invalid ChangeCipherSpec message received.",
		send: !0,
		alert: {
			level: C.Alert.Level.fatal,
			description: C.Alert.Description.illegal_parameter
		}
	});
	var a = e.entity === C.ConnectionEnd.client;
	(e.session.resuming && a || !e.session.resuming && !a) && (e.state.pending = C.createConnectionState(e)), e.state.current.read = e.state.pending.read, (!e.session.resuming && a || e.session.resuming && !a) && (e.state.pending = null), e.expect = a ? Iu : wu, e.process()
};
C.handleFinished = function (e, t, a) {
	var r = t.fragment;
	r.read -= 4;
	var n = r.bytes();
	r.read += 4;
	var i = t.fragment.getBytes();
	r = M.util.createBuffer(), r.putBuffer(e.session.md5.digest()), r.putBuffer(e.session.sha1.digest());
	var s = e.entity === C.ConnectionEnd.client,
		o = s ? "server finished" : "client finished",
		l = e.session.sp,
		f = 12,
		u = $r;
	if (r = u(l.master_secret, o, r.getBytes(), f), r.getBytes() !== i) return e.error(e, {
		message: "Invalid verify_data in Finished message.",
		send: !0,
		alert: {
			level: C.Alert.Level.fatal,
			description: C.Alert.Description.decrypt_error
		}
	});
	e.session.md5.update(n), e.session.sha1.update(n), (e.session.resuming && s || !e.session.resuming && !s) && (C.queue(e, C.createRecord(e, {
		type: C.ContentType.change_cipher_spec,
		data: C.createChangeCipherSpec()
	})), e.state.current.write = e.state.pending.write, e.state.pending = null, C.queue(e, C.createRecord(e, {
		type: C.ContentType.handshake,
		data: C.createFinished(e)
	}))), e.expect = s ? _u : ku, e.handshaking = !1, ++e.handshakes, e.peerCertificate = s ? e.session.serverCertificate : e.session.clientCertificate, C.flush(e), e.isConnected = !0, e.connected(e), e.process()
};
C.handleAlert = function (e, t) {
	var a = t.fragment,
		r = {
			level: a.getByte(),
			description: a.getByte()
		},
		n;
	switch (r.description) {
		case C.Alert.Description.close_notify:
			n = "Connection closed.";
			break;
		case C.Alert.Description.unexpected_message:
			n = "Unexpected message.";
			break;
		case C.Alert.Description.bad_record_mac:
			n = "Bad record MAC.";
			break;
		case C.Alert.Description.decryption_failed:
			n = "Decryption failed.";
			break;
		case C.Alert.Description.record_overflow:
			n = "Record overflow.";
			break;
		case C.Alert.Description.decompression_failure:
			n = "Decompression failed.";
			break;
		case C.Alert.Description.handshake_failure:
			n = "Handshake failure.";
			break;
		case C.Alert.Description.bad_certificate:
			n = "Bad certificate.";
			break;
		case C.Alert.Description.unsupported_certificate:
			n = "Unsupported certificate.";
			break;
		case C.Alert.Description.certificate_revoked:
			n = "Certificate revoked.";
			break;
		case C.Alert.Description.certificate_expired:
			n = "Certificate expired.";
			break;
		case C.Alert.Description.certificate_unknown:
			n = "Certificate unknown.";
			break;
		case C.Alert.Description.illegal_parameter:
			n = "Illegal parameter.";
			break;
		case C.Alert.Description.unknown_ca:
			n = "Unknown certificate authority.";
			break;
		case C.Alert.Description.access_denied:
			n = "Access denied.";
			break;
		case C.Alert.Description.decode_error:
			n = "Decode error.";
			break;
		case C.Alert.Description.decrypt_error:
			n = "Decrypt error.";
			break;
		case C.Alert.Description.export_restriction:
			n = "Export restriction.";
			break;
		case C.Alert.Description.protocol_version:
			n = "Unsupported protocol version.";
			break;
		case C.Alert.Description.insufficient_security:
			n = "Insufficient security.";
			break;
		case C.Alert.Description.internal_error:
			n = "Internal error.";
			break;
		case C.Alert.Description.user_canceled:
			n = "User canceled.";
			break;
		case C.Alert.Description.no_renegotiation:
			n = "Renegotiation not supported.";
			break;
		default:
			n = "Unknown error.";
			break
	}
	if (r.description === C.Alert.Description.close_notify) return e.close();
	e.error(e, {
		message: n,
		send: !1,
		origin: e.entity === C.ConnectionEnd.client ? "server" : "client",
		alert: r
	}), e.process()
};
C.handleHandshake = function (e, t) {
	var a = t.fragment,
		r = a.getByte(),
		n = a.getInt24();
	if (n > a.length()) return e.fragmented = t, t.fragment = M.util.createBuffer(), a.read -= 4, e.process();
	e.fragmented = null, a.read -= 4;
	var i = a.bytes(n + 4);
	a.read += 4, r in Ur[e.entity][e.expect] ? (e.entity === C.ConnectionEnd.server && !e.open && !e.fail && (e.handshaking = !0, e.session = {
		version: null,
		extensions: {
			server_name: {
				serverNameList: []
			}
		},
		cipherSuite: null,
		compressionMethod: null,
		serverCertificate: null,
		clientCertificate: null,
		md5: M.md.md5.create(),
		sha1: M.md.sha1.create()
	}), r !== C.HandshakeType.hello_request && r !== C.HandshakeType.certificate_verify && r !== C.HandshakeType.finished && (e.session.md5.update(i), e.session.sha1.update(i)), Ur[e.entity][e.expect][r](e, t, n)) : C.handleUnexpected(e, t)
};
C.handleApplicationData = function (e, t) {
	e.data.putBuffer(t.fragment), e.dataReady(e), e.process()
};
C.handleHeartbeat = function (e, t) {
	var a = t.fragment,
		r = a.getByte(),
		n = a.getInt16(),
		i = a.getBytes(n);
	if (r === C.HeartbeatMessageType.heartbeat_request) {
		if (e.handshaking || n > i.length) return e.process();
		C.queue(e, C.createRecord(e, {
			type: C.ContentType.heartbeat,
			data: C.createHeartbeat(C.HeartbeatMessageType.heartbeat_response, i)
		})), C.flush(e)
	} else if (r === C.HeartbeatMessageType.heartbeat_response) {
		if (i !== e.expectedHeartbeatPayload) return e.process();
		e.heartbeatReceived && e.heartbeatReceived(e, M.util.createBuffer(i))
	}
	e.process()
};
var Au = 0,
	Su = 1,
	Ln = 2,
	Tu = 3,
	bu = 4,
	Ai = 5,
	Iu = 6,
	_u = 7,
	Du = 8,
	Nu = 0,
	Fu = 1,
	Y0 = 2,
	Ru = 3,
	ya = 4,
	wu = 5,
	ku = 6,
	y = C.handleUnexpected,
	Si = C.handleChangeCipherSpec,
	qe = C.handleAlert,
	Xe = C.handleHandshake,
	Ti = C.handleApplicationData,
	ze = C.handleHeartbeat,
	ga = [];
ga[C.ConnectionEnd.client] = [
	[y, qe, Xe, y, ze],
	[y, qe, Xe, y, ze],
	[y, qe, Xe, y, ze],
	[y, qe, Xe, y, ze],
	[y, qe, Xe, y, ze],
	[Si, qe, y, y, ze],
	[y, qe, Xe, y, ze],
	[y, qe, Xe, Ti, ze],
	[y, qe, Xe, y, ze]
];
ga[C.ConnectionEnd.server] = [
	[y, qe, Xe, y, ze],
	[y, qe, Xe, y, ze],
	[y, qe, Xe, y, ze],
	[y, qe, Xe, y, ze],
	[Si, qe, y, y, ze],
	[y, qe, Xe, y, ze],
	[y, qe, Xe, Ti, ze],
	[y, qe, Xe, y, ze]
];
var Tt = C.handleHelloRequest,
	Lu = C.handleServerHello,
	bi = C.handleCertificate,
	Un = C.handleServerKeyExchange,
	L0 = C.handleCertificateRequest,
	Sr = C.handleServerHelloDone,
	Ii = C.handleFinished,
	Ur = [];
Ur[C.ConnectionEnd.client] = [
	[y, y, Lu, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y],
	[Tt, y, y, y, y, y, y, y, y, y, y, bi, Un, L0, Sr, y, y, y, y, y, y],
	[Tt, y, y, y, y, y, y, y, y, y, y, y, Un, L0, Sr, y, y, y, y, y, y],
	[Tt, y, y, y, y, y, y, y, y, y, y, y, y, L0, Sr, y, y, y, y, y, y],
	[Tt, y, y, y, y, y, y, y, y, y, y, y, y, y, Sr, y, y, y, y, y, y],
	[Tt, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y],
	[Tt, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, Ii],
	[Tt, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y],
	[Tt, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y]
];
var Uu = C.handleClientHello,
	Pu = C.handleClientKeyExchange,
	Vu = C.handleCertificateVerify;
Ur[C.ConnectionEnd.server] = [
	[y, Uu, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y],
	[y, y, y, y, y, y, y, y, y, y, y, bi, y, y, y, y, y, y, y, y, y],
	[y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, Pu, y, y, y, y],
	[y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, Vu, y, y, y, y, y],
	[y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y],
	[y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, Ii],
	[y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y],
	[y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y, y]
];
C.generateKeys = function (e, t) {
	var a = $r,
		r = t.client_random + t.server_random;
	e.session.resuming || (t.master_secret = a(t.pre_master_secret, "master secret", r, 48).bytes(), t.pre_master_secret = null), r = t.server_random + t.client_random;
	var n = 2 * t.mac_key_length + 2 * t.enc_key_length,
		i = e.version.major === C.Versions.TLS_1_0.major && e.version.minor === C.Versions.TLS_1_0.minor;
	i && (n += 2 * t.fixed_iv_length);
	var s = a(t.master_secret, "key expansion", r, n),
		o = {
			client_write_MAC_key: s.getBytes(t.mac_key_length),
			server_write_MAC_key: s.getBytes(t.mac_key_length),
			client_write_key: s.getBytes(t.enc_key_length),
			server_write_key: s.getBytes(t.enc_key_length)
		};
	return i && (o.client_write_IV = s.getBytes(t.fixed_iv_length), o.server_write_IV = s.getBytes(t.fixed_iv_length)), o
};
C.createConnectionState = function (e) {
	var t = e.entity === C.ConnectionEnd.client,
		a = function () {
			var i = {
				sequenceNumber: [0, 0],
				macKey: null,
				macLength: 0,
				macFunction: null,
				cipherState: null,
				cipherFunction: function (s) {
					return !0
				},
				compressionState: null,
				compressFunction: function (s) {
					return !0
				},
				updateSequenceNumber: function () {
					i.sequenceNumber[1] === 4294967295 ? (i.sequenceNumber[1] = 0, ++i.sequenceNumber[0]) : ++i.sequenceNumber[1]
				}
			};
			return i
		},
		r = {
			read: a(),
			write: a()
		};
	if (r.read.update = function (i, s) {
			return r.read.cipherFunction(s, r.read) ? r.read.compressFunction(i, s, r.read) || i.error(i, {
				message: "Could not decompress record.",
				send: !0,
				alert: {
					level: C.Alert.Level.fatal,
					description: C.Alert.Description.decompression_failure
				}
			}) : i.error(i, {
				message: "Could not decrypt record or bad MAC.",
				send: !0,
				alert: {
					level: C.Alert.Level.fatal,
					description: C.Alert.Description.bad_record_mac
				}
			}), !i.fail
		}, r.write.update = function (i, s) {
			return r.write.compressFunction(i, s, r.write) ? r.write.cipherFunction(s, r.write) || i.error(i, {
				message: "Could not encrypt record.",
				send: !1,
				alert: {
					level: C.Alert.Level.fatal,
					description: C.Alert.Description.internal_error
				}
			}) : i.error(i, {
				message: "Could not compress record.",
				send: !1,
				alert: {
					level: C.Alert.Level.fatal,
					description: C.Alert.Description.internal_error
				}
			}), !i.fail
		}, e.session) {
		var n = e.session.sp;
		switch (e.session.cipherSuite.initSecurityParameters(n), n.keys = C.generateKeys(e, n), r.read.macKey = t ? n.keys.server_write_MAC_key : n.keys.client_write_MAC_key, r.write.macKey = t ? n.keys.client_write_MAC_key : n.keys.server_write_MAC_key, e.session.cipherSuite.initConnectionState(r, e, n), n.compression_algorithm) {
			case C.CompressionMethod.none:
				break;
			case C.CompressionMethod.deflate:
				r.read.compressFunction = Bu, r.write.compressFunction = mu;
				break;
			default:
				throw new Error("Unsupported compression algorithm.")
		}
	}
	return r
};
C.createRandom = function () {
	var e = new Date,
		t = +e + e.getTimezoneOffset() * 6e4,
		a = M.util.createBuffer();
	return a.putInt32(t), a.putBytes(M.random.getBytes(28)), a
};
C.createRecord = function (e, t) {
	if (!t.data) return null;
	var a = {
		type: t.type,
		version: {
			major: e.version.major,
			minor: e.version.minor
		},
		length: t.data.length(),
		fragment: t.data
	};
	return a
};
C.createAlert = function (e, t) {
	var a = M.util.createBuffer();
	return a.putByte(t.level), a.putByte(t.description), C.createRecord(e, {
		type: C.ContentType.alert,
		data: a
	})
};
C.createClientHello = function (e) {
	e.session.clientHelloVersion = {
		major: e.version.major,
		minor: e.version.minor
	};
	for (var t = M.util.createBuffer(), a = 0; a < e.cipherSuites.length; ++a) {
		var r = e.cipherSuites[a];
		t.putByte(r.id[0]), t.putByte(r.id[1])
	}
	var n = t.length(),
		i = M.util.createBuffer();
	i.putByte(C.CompressionMethod.none);
	var s = i.length(),
		o = M.util.createBuffer();
	if (e.virtualHost) {
		var l = M.util.createBuffer();
		l.putByte(0), l.putByte(0);
		var f = M.util.createBuffer();
		f.putByte(0), rt(f, 2, M.util.createBuffer(e.virtualHost));
		var u = M.util.createBuffer();
		rt(u, 2, f), rt(l, 2, u), o.putBuffer(l)
	}
	var c = o.length();
	c > 0 && (c += 2);
	var h = e.session.id,
		x = h.length + 1 + 2 + 4 + 28 + 2 + n + 1 + s + c,
		d = M.util.createBuffer();
	return d.putByte(C.HandshakeType.client_hello), d.putInt24(x), d.putByte(e.version.major), d.putByte(e.version.minor), d.putBytes(e.session.sp.client_random), rt(d, 1, M.util.createBuffer(h)), rt(d, 2, t), rt(d, 1, i), c > 0 && rt(d, 2, o), d
};
C.createServerHello = function (e) {
	var t = e.session.id,
		a = t.length + 1 + 2 + 4 + 28 + 2 + 1,
		r = M.util.createBuffer();
	return r.putByte(C.HandshakeType.server_hello), r.putInt24(a), r.putByte(e.version.major), r.putByte(e.version.minor), r.putBytes(e.session.sp.server_random), rt(r, 1, M.util.createBuffer(t)), r.putByte(e.session.cipherSuite.id[0]), r.putByte(e.session.cipherSuite.id[1]), r.putByte(e.session.compressionMethod), r
};
C.createCertificate = function (e) {
	var t = e.entity === C.ConnectionEnd.client,
		a = null;
	if (e.getCertificate) {
		var r;
		t ? r = e.session.certificateRequest : r = e.session.extensions.server_name.serverNameList, a = e.getCertificate(e, r)
	}
	var n = M.util.createBuffer();
	if (a !== null) try {
		M.util.isArray(a) || (a = [a]);
		for (var i = null, s = 0; s < a.length; ++s) {
			var o = M.pem.decode(a[s])[0];
			if (o.type !== "CERTIFICATE" && o.type !== "X509 CERTIFICATE" && o.type !== "TRUSTED CERTIFICATE") {
				var l = new Error('Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');
				throw l.headerType = o.type, l
			}
			if (o.procType && o.procType.type === "ENCRYPTED") throw new Error("Could not convert certificate from PEM; PEM is encrypted.");
			var f = M.util.createBuffer(o.body);
			i === null && (i = M.asn1.fromDer(f.bytes(), !1));
			var u = M.util.createBuffer();
			rt(u, 3, f), n.putBuffer(u)
		}
		a = M.pki.certificateFromAsn1(i), t ? e.session.clientCertificate = a : e.session.serverCertificate = a
	} catch (x) {
		return e.error(e, {
			message: "Could not send certificate list.",
			cause: x,
			send: !0,
			alert: {
				level: C.Alert.Level.fatal,
				description: C.Alert.Description.bad_certificate
			}
		})
	}
	var c = 3 + n.length(),
		h = M.util.createBuffer();
	return h.putByte(C.HandshakeType.certificate), h.putInt24(c), rt(h, 3, n), h
};
C.createClientKeyExchange = function (e) {
	var t = M.util.createBuffer();
	t.putByte(e.session.clientHelloVersion.major), t.putByte(e.session.clientHelloVersion.minor), t.putBytes(M.random.getBytes(46));
	var a = e.session.sp;
	a.pre_master_secret = t.getBytes();
	var r = e.session.serverCertificate.publicKey;
	t = r.encrypt(a.pre_master_secret);
	var n = t.length + 2,
		i = M.util.createBuffer();
	return i.putByte(C.HandshakeType.client_key_exchange), i.putInt24(n), i.putInt16(t.length), i.putBytes(t), i
};
C.createServerKeyExchange = function (e) {
	var t = M.util.createBuffer();
	return t
};
C.getClientSignature = function (e, t) {
	var a = M.util.createBuffer();
	a.putBuffer(e.session.md5.digest()), a.putBuffer(e.session.sha1.digest()), a = a.getBytes(), e.getSignature = e.getSignature || function (r, n, i) {
		var s = null;
		if (r.getPrivateKey) try {
			s = r.getPrivateKey(r, r.session.clientCertificate), s = M.pki.privateKeyFromPem(s)
		} catch (o) {
			r.error(r, {
				message: "Could not get private key.",
				cause: o,
				send: !0,
				alert: {
					level: C.Alert.Level.fatal,
					description: C.Alert.Description.internal_error
				}
			})
		}
		s === null ? r.error(r, {
			message: "No private key set.",
			send: !0,
			alert: {
				level: C.Alert.Level.fatal,
				description: C.Alert.Description.internal_error
			}
		}) : n = s.sign(n, null), i(r, n)
	}, e.getSignature(e, a, t)
};
C.createCertificateVerify = function (e, t) {
	var a = t.length + 2,
		r = M.util.createBuffer();
	return r.putByte(C.HandshakeType.certificate_verify), r.putInt24(a), r.putInt16(t.length), r.putBytes(t), r
};
C.createCertificateRequest = function (e) {
	var t = M.util.createBuffer();
	t.putByte(1);
	var a = M.util.createBuffer();
	for (var r in e.caStore.certs) {
		var n = e.caStore.certs[r],
			i = M.pki.distinguishedNameToAsn1(n.subject),
			s = M.asn1.toDer(i);
		a.putInt16(s.length()), a.putBuffer(s)
	}
	var o = 1 + t.length() + 2 + a.length(),
		l = M.util.createBuffer();
	return l.putByte(C.HandshakeType.certificate_request), l.putInt24(o), rt(l, 1, t), rt(l, 2, a), l
};
C.createServerHelloDone = function (e) {
	var t = M.util.createBuffer();
	return t.putByte(C.HandshakeType.server_hello_done), t.putInt24(0), t
};
C.createChangeCipherSpec = function () {
	var e = M.util.createBuffer();
	return e.putByte(1), e
};
C.createFinished = function (e) {
	var t = M.util.createBuffer();
	t.putBuffer(e.session.md5.digest()), t.putBuffer(e.session.sha1.digest());
	var a = e.entity === C.ConnectionEnd.client,
		r = e.session.sp,
		n = 12,
		i = $r,
		s = a ? "client finished" : "server finished";
	t = i(r.master_secret, s, t.getBytes(), n);
	var o = M.util.createBuffer();
	return o.putByte(C.HandshakeType.finished), o.putInt24(t.length()), o.putBuffer(t), o
};
C.createHeartbeat = function (e, t, a) {
	typeof a > "u" && (a = t.length);
	var r = M.util.createBuffer();
	r.putByte(e), r.putInt16(a), r.putBytes(t);
	var n = r.length(),
		i = Math.max(16, n - a - 3);
	return r.putBytes(M.random.getBytes(i)), r
};
C.queue = function (e, t) {
	if (t && !(t.fragment.length() === 0 && (t.type === C.ContentType.handshake || t.type === C.ContentType.alert || t.type === C.ContentType.change_cipher_spec))) {
		if (t.type === C.ContentType.handshake) {
			var a = t.fragment.bytes();
			e.session.md5.update(a), e.session.sha1.update(a), a = null
		}
		var r;
		if (t.fragment.length() <= C.MaxFragment) r = [t];
		else {
			r = [];
			for (var n = t.fragment.bytes(); n.length > C.MaxFragment;) r.push(C.createRecord(e, {
				type: t.type,
				data: M.util.createBuffer(n.slice(0, C.MaxFragment))
			})), n = n.slice(C.MaxFragment);
			n.length > 0 && r.push(C.createRecord(e, {
				type: t.type,
				data: M.util.createBuffer(n)
			}))
		}
		for (var i = 0; i < r.length && !e.fail; ++i) {
			var s = r[i],
				o = e.state.current.write;
			o.update(e, s) && e.records.push(s)
		}
	}
};
C.flush = function (e) {
	for (var t = 0; t < e.records.length; ++t) {
		var a = e.records[t];
		e.tlsData.putByte(a.type), e.tlsData.putByte(a.version.major), e.tlsData.putByte(a.version.minor), e.tlsData.putInt16(a.fragment.length()), e.tlsData.putBuffer(e.records[t].fragment)
	}
	return e.records = [], e.tlsDataReady(e)
};
var U0 = function (e) {
		switch (e) {
			case !0:
				return !0;
			case M.pki.certificateError.bad_certificate:
				return C.Alert.Description.bad_certificate;
			case M.pki.certificateError.unsupported_certificate:
				return C.Alert.Description.unsupported_certificate;
			case M.pki.certificateError.certificate_revoked:
				return C.Alert.Description.certificate_revoked;
			case M.pki.certificateError.certificate_expired:
				return C.Alert.Description.certificate_expired;
			case M.pki.certificateError.certificate_unknown:
				return C.Alert.Description.certificate_unknown;
			case M.pki.certificateError.unknown_ca:
				return C.Alert.Description.unknown_ca;
			default:
				return C.Alert.Description.bad_certificate
		}
	},
	Ou = function (e) {
		switch (e) {
			case !0:
				return !0;
			case C.Alert.Description.bad_certificate:
				return M.pki.certificateError.bad_certificate;
			case C.Alert.Description.unsupported_certificate:
				return M.pki.certificateError.unsupported_certificate;
			case C.Alert.Description.certificate_revoked:
				return M.pki.certificateError.certificate_revoked;
			case C.Alert.Description.certificate_expired:
				return M.pki.certificateError.certificate_expired;
			case C.Alert.Description.certificate_unknown:
				return M.pki.certificateError.certificate_unknown;
			case C.Alert.Description.unknown_ca:
				return M.pki.certificateError.unknown_ca;
			default:
				return M.pki.certificateError.bad_certificate
		}
	};
C.verifyCertificateChain = function (e, t) {
	try {
		var a = {};
		for (var r in e.verifyOptions) a[r] = e.verifyOptions[r];
		a.verify = function (i, s, o) {
			var l = U0(i),
				f = e.verify(e, i, s, o);
			if (f !== !0) {
				if (typeof f == "object" && !M.util.isArray(f)) {
					var u = new Error("The application rejected the certificate.");
					throw u.send = !0, u.alert = {
						level: C.Alert.Level.fatal,
						description: C.Alert.Description.bad_certificate
					}, f.message && (u.message = f.message), f.alert && (u.alert.description = f.alert), u
				}
				f !== i && (f = Ou(f))
			}
			return f
		}, M.pki.verifyCertificateChain(e.caStore, t, a)
	} catch (i) {
		var n = i;
		(typeof n != "object" || M.util.isArray(n)) && (n = {
			send: !0,
			alert: {
				level: C.Alert.Level.fatal,
				description: U0(i)
			}
		}), "send" in n || (n.send = !0), "alert" in n || (n.alert = {
			level: C.Alert.Level.fatal,
			description: U0(n.error)
		}), e.error(e, n)
	}
	return !e.fail
};
C.createSessionCache = function (e, t) {
	var a = null;
	if (e && e.getSession && e.setSession && e.order) a = e;
	else {
		a = {}, a.cache = e || {}, a.capacity = Math.max(t || 100, 1), a.order = [];
		for (var r in e) a.order.length <= t ? a.order.push(r) : delete e[r];
		a.getSession = function (n) {
			var i = null,
				s = null;
			if (n ? s = M.util.bytesToHex(n) : a.order.length > 0 && (s = a.order[0]), s !== null && s in a.cache) {
				i = a.cache[s], delete a.cache[s];
				for (var o in a.order)
					if (a.order[o] === s) {
						a.order.splice(o, 1);
						break
					}
			}
			return i
		}, a.setSession = function (n, i) {
			if (a.order.length === a.capacity) {
				var s = a.order.shift();
				delete a.cache[s]
			}
			var s = M.util.bytesToHex(n);
			a.order.push(s), a.cache[s] = i
		}
	}
	return a
};
C.createConnection = function (e) {
	var t = null;
	e.caStore ? M.util.isArray(e.caStore) ? t = M.pki.createCaStore(e.caStore) : t = e.caStore : t = M.pki.createCaStore();
	var a = e.cipherSuites || null;
	if (a === null) {
		a = [];
		for (var r in C.CipherSuites) a.push(C.CipherSuites[r])
	}
	var n = e.server ? C.ConnectionEnd.server : C.ConnectionEnd.client,
		i = e.sessionCache ? C.createSessionCache(e.sessionCache) : null,
		s = {
			version: {
				major: C.Version.major,
				minor: C.Version.minor
			},
			entity: n,
			sessionId: e.sessionId,
			caStore: t,
			sessionCache: i,
			cipherSuites: a,
			connected: e.connected,
			virtualHost: e.virtualHost || null,
			verifyClient: e.verifyClient || !1,
			verify: e.verify || function (u, c, h, x) {
				return c
			},
			verifyOptions: e.verifyOptions || {},
			getCertificate: e.getCertificate || null,
			getPrivateKey: e.getPrivateKey || null,
			getSignature: e.getSignature || null,
			input: M.util.createBuffer(),
			tlsData: M.util.createBuffer(),
			data: M.util.createBuffer(),
			tlsDataReady: e.tlsDataReady,
			dataReady: e.dataReady,
			heartbeatReceived: e.heartbeatReceived,
			closed: e.closed,
			error: function (u, c) {
				c.origin = c.origin || (u.entity === C.ConnectionEnd.client ? "client" : "server"), c.send && (C.queue(u, C.createAlert(u, c.alert)), C.flush(u));
				var h = c.fatal !== !1;
				h && (u.fail = !0), e.error(u, c), h && u.close(!1)
			},
			deflate: e.deflate || null,
			inflate: e.inflate || null
		};
	s.reset = function (u) {
		s.version = {
			major: C.Version.major,
			minor: C.Version.minor
		}, s.record = null, s.session = null, s.peerCertificate = null, s.state = {
			pending: null,
			current: null
		}, s.expect = s.entity === C.ConnectionEnd.client ? Au : Nu, s.fragmented = null, s.records = [], s.open = !1, s.handshakes = 0, s.handshaking = !1, s.isConnected = !1, s.fail = !(u || typeof u > "u"), s.input.clear(), s.tlsData.clear(), s.data.clear(), s.state.current = C.createConnectionState(s)
	}, s.reset();
	var o = function (u, c) {
			var h = c.type - C.ContentType.change_cipher_spec,
				x = ga[u.entity][u.expect];
			h in x ? x[h](u, c) : C.handleUnexpected(u, c)
		},
		l = function (u) {
			var c = 0,
				h = u.input,
				x = h.length();
			if (x < 5) c = 5 - x;
			else {
				u.record = {
					type: h.getByte(),
					version: {
						major: h.getByte(),
						minor: h.getByte()
					},
					length: h.getInt16(),
					fragment: M.util.createBuffer(),
					ready: !1
				};
				var d = u.record.version.major === u.version.major;
				d && u.session && u.session.version && (d = u.record.version.minor === u.version.minor), d || u.error(u, {
					message: "Incompatible TLS version.",
					send: !0,
					alert: {
						level: C.Alert.Level.fatal,
						description: C.Alert.Description.protocol_version
					}
				})
			}
			return c
		},
		f = function (u) {
			var c = 0,
				h = u.input,
				x = h.length();
			if (x < u.record.length) c = u.record.length - x;
			else {
				u.record.fragment.putBytes(h.getBytes(u.record.length)), h.compact();
				var d = u.state.current.read;
				d.update(u, u.record) && (u.fragmented !== null && (u.fragmented.type === u.record.type ? (u.fragmented.fragment.putBuffer(u.record.fragment), u.record = u.fragmented) : u.error(u, {
					message: "Invalid fragmented record.",
					send: !0,
					alert: {
						level: C.Alert.Level.fatal,
						description: C.Alert.Description.unexpected_message
					}
				})), u.record.ready = !0)
			}
			return c
		};
	return s.handshake = function (u) {
		if (s.entity !== C.ConnectionEnd.client) s.error(s, {
			message: "Cannot initiate handshake as a server.",
			fatal: !1
		});
		else if (s.handshaking) s.error(s, {
			message: "Handshake already in progress.",
			fatal: !1
		});
		else {
			s.fail && !s.open && s.handshakes === 0 && (s.fail = !1), s.handshaking = !0, u = u || "";
			var c = null;
			u.length > 0 && (s.sessionCache && (c = s.sessionCache.getSession(u)), c === null && (u = "")), u.length === 0 && s.sessionCache && (c = s.sessionCache.getSession(), c !== null && (u = c.id)), s.session = {
				id: u,
				version: null,
				cipherSuite: null,
				compressionMethod: null,
				serverCertificate: null,
				certificateRequest: null,
				clientCertificate: null,
				sp: {},
				md5: M.md.md5.create(),
				sha1: M.md.sha1.create()
			}, c && (s.version = c.version, s.session.sp = c.sp), s.session.sp.client_random = C.createRandom().getBytes(), s.open = !0, C.queue(s, C.createRecord(s, {
				type: C.ContentType.handshake,
				data: C.createClientHello(s)
			})), C.flush(s)
		}
	}, s.process = function (u) {
		var c = 0;
		return u && s.input.putBytes(u), s.fail || (s.record !== null && s.record.ready && s.record.fragment.isEmpty() && (s.record = null), s.record === null && (c = l(s)), !s.fail && s.record !== null && !s.record.ready && (c = f(s)), !s.fail && s.record !== null && s.record.ready && o(s, s.record)), c
	}, s.prepare = function (u) {
		return C.queue(s, C.createRecord(s, {
			type: C.ContentType.application_data,
			data: M.util.createBuffer(u)
		})), C.flush(s)
	}, s.prepareHeartbeatRequest = function (u, c) {
		return u instanceof M.util.ByteBuffer && (u = u.bytes()), typeof c > "u" && (c = u.length), s.expectedHeartbeatPayload = u, C.queue(s, C.createRecord(s, {
			type: C.ContentType.heartbeat,
			data: C.createHeartbeat(C.HeartbeatMessageType.heartbeat_request, u, c)
		})), C.flush(s)
	}, s.close = function (u) {
		if (!s.fail && s.sessionCache && s.session) {
			var c = {
				id: s.session.id,
				version: s.session.version,
				sp: s.session.sp
			};
			c.sp.keys = null, s.sessionCache.setSession(c.id, c)
		}
		s.open && (s.open = !1, s.input.clear(), (s.isConnected || s.handshaking) && (s.isConnected = s.handshaking = !1, C.queue(s, C.createAlert(s, {
			level: C.Alert.Level.warning,
			description: C.Alert.Description.close_notify
		})), C.flush(s)), s.closed(s)), s.reset(u)
	}, s
};
M.tls = M.tls || {};
for (var P0 in C) typeof C[P0] != "function" && (M.tls[P0] = C[P0]);
M.tls.prf_tls1 = $r;
M.tls.hmac_sha1 = Eu;
M.tls.createSessionCache = C.createSessionCache;
M.tls.createConnection = C.createConnection;
var Ft = le,
	st = Ft.tls;
st.CipherSuites.TLS_RSA_WITH_AES_128_CBC_SHA = {
	id: [0, 47],
	name: "TLS_RSA_WITH_AES_128_CBC_SHA",
	initSecurityParameters: function (e) {
		e.bulk_cipher_algorithm = st.BulkCipherAlgorithm.aes, e.cipher_type = st.CipherType.block, e.enc_key_length = 16, e.block_length = 16, e.fixed_iv_length = 16, e.record_iv_length = 16, e.mac_algorithm = st.MACAlgorithm.hmac_sha1, e.mac_length = 20, e.mac_key_length = 20
	},
	initConnectionState: _i
};
st.CipherSuites.TLS_RSA_WITH_AES_256_CBC_SHA = {
	id: [0, 53],
	name: "TLS_RSA_WITH_AES_256_CBC_SHA",
	initSecurityParameters: function (e) {
		e.bulk_cipher_algorithm = st.BulkCipherAlgorithm.aes, e.cipher_type = st.CipherType.block, e.enc_key_length = 32, e.block_length = 16, e.fixed_iv_length = 16, e.record_iv_length = 16, e.mac_algorithm = st.MACAlgorithm.hmac_sha1, e.mac_length = 20, e.mac_key_length = 20
	},
	initConnectionState: _i
};

function _i(e, t, a) {
	var r = t.entity === Ft.tls.ConnectionEnd.client;
	e.read.cipherState = {
		init: !1,
		cipher: Ft.cipher.createDecipher("AES-CBC", r ? a.keys.server_write_key : a.keys.client_write_key),
		iv: r ? a.keys.server_write_IV : a.keys.client_write_IV
	}, e.write.cipherState = {
		init: !1,
		cipher: Ft.cipher.createCipher("AES-CBC", r ? a.keys.client_write_key : a.keys.server_write_key),
		iv: r ? a.keys.client_write_IV : a.keys.server_write_IV
	}, e.read.cipherFunction = qu, e.write.cipherFunction = Ku, e.read.macLength = e.write.macLength = a.mac_length, e.read.macFunction = e.write.macFunction = st.hmac_sha1
}

function Ku(e, t) {
	var a = !1,
		r = t.macFunction(t.macKey, t.sequenceNumber, e);
	e.fragment.putBytes(r), t.updateSequenceNumber();
	var n;
	e.version.minor === st.Versions.TLS_1_0.minor ? n = t.cipherState.init ? null : t.cipherState.iv : n = Ft.random.getBytesSync(16), t.cipherState.init = !0;
	var i = t.cipherState.cipher;
	return i.start({
		iv: n
	}), e.version.minor >= st.Versions.TLS_1_1.minor && i.output.putBytes(n), i.update(e.fragment), i.finish(Hu) && (e.fragment = i.output, e.length = e.fragment.length(), a = !0), a
}

function Hu(e, t, a) {
	if (!a) {
		var r = e - t.length() % e;
		t.fillWithByte(r - 1, r)
	}
	return !0
}

function Mu(e, t, a) {
	var r = !0;
	if (a) {
		for (var n = t.length(), i = t.last(), s = n - 1 - i; s < n - 1; ++s) r = r && t.at(s) == i;
		r && t.truncate(i + 1)
	}
	return r
}

function qu(e, t) {
	var a = !1,
		r;
	e.version.minor === st.Versions.TLS_1_0.minor ? r = t.cipherState.init ? null : t.cipherState.iv : r = e.fragment.getBytes(16), t.cipherState.init = !0;
	var n = t.cipherState.cipher;
	n.start({
		iv: r
	}), n.update(e.fragment), a = n.finish(Mu);
	var i = t.macLength,
		s = Ft.random.getBytesSync(i),
		o = n.output.length();
	o >= i ? (e.fragment = n.output.getBytes(o - i), s = n.output.getBytes(i)) : e.fragment = n.output.getBytes(), e.fragment = Ft.util.createBuffer(e.fragment), e.length = e.fragment.length();
	var l = t.macFunction(t.macKey, t.sequenceNumber, e);
	return t.updateSequenceNumber(), a = zu(t.macKey, s, l) && a, a
}

function zu(e, t, a) {
	var r = Ft.hmac.create();
	return r.start("SHA1", e), r.update(t), t = r.digest().getBytes(), r.start(null, null), r.update(a), a = r.digest().getBytes(), t === a
}
var De = le,
	Er = De.sha512 = De.sha512 || {};
De.md.sha512 = De.md.algorithms.sha512 = Er;
var Di = De.sha384 = De.sha512.sha384 = De.sha512.sha384 || {};
Di.create = function () {
	return Er.create("SHA-384")
};
De.md.sha384 = De.md.algorithms.sha384 = Di;
De.sha512.sha256 = De.sha512.sha256 || {
	create: function () {
		return Er.create("SHA-512/256")
	}
};
De.md["sha512/256"] = De.md.algorithms["sha512/256"] = De.sha512.sha256;
De.sha512.sha224 = De.sha512.sha224 || {
	create: function () {
		return Er.create("SHA-512/224")
	}
};
De.md["sha512/224"] = De.md.algorithms["sha512/224"] = De.sha512.sha224;
Er.create = function (e) {
	if (Ni || Gu(), typeof e > "u" && (e = "SHA-512"), !(e in Pt)) throw new Error("Invalid SHA-512 algorithm: " + e);
	for (var t = Pt[e], a = null, r = De.util.createBuffer(), n = new Array(80), i = 0; i < 80; ++i) n[i] = new Array(2);
	var s = 64;
	switch (e) {
		case "SHA-384":
			s = 48;
			break;
		case "SHA-512/256":
			s = 32;
			break;
		case "SHA-512/224":
			s = 28;
			break
	}
	var o = {
		algorithm: e.replace("-", "").toLowerCase(),
		blockLength: 128,
		digestLength: s,
		messageLength: 0,
		fullMessageLength: null,
		messageLengthSize: 16
	};
	return o.start = function () {
		o.messageLength = 0, o.fullMessageLength = o.messageLength128 = [];
		for (var l = o.messageLengthSize / 4, f = 0; f < l; ++f) o.fullMessageLength.push(0);
		r = De.util.createBuffer(), a = new Array(t.length);
		for (var f = 0; f < t.length; ++f) a[f] = t[f].slice(0);
		return o
	}, o.start(), o.update = function (l, f) {
		f === "utf8" && (l = De.util.encodeUtf8(l));
		var u = l.length;
		o.messageLength += u, u = [u / 4294967296 >>> 0, u >>> 0];
		for (var c = o.fullMessageLength.length - 1; c >= 0; --c) o.fullMessageLength[c] += u[1], u[1] = u[0] + (o.fullMessageLength[c] / 4294967296 >>> 0), o.fullMessageLength[c] = o.fullMessageLength[c] >>> 0, u[0] = u[1] / 4294967296 >>> 0;
		return r.putBytes(l), Pn(a, n, r), (r.read > 2048 || r.length() === 0) && r.compact(), o
	}, o.digest = function () {
		var l = De.util.createBuffer();
		l.putBytes(r.bytes());
		var f = o.fullMessageLength[o.fullMessageLength.length - 1] + o.messageLengthSize,
			u = f & o.blockLength - 1;
		l.putBytes($0.substr(0, o.blockLength - u));
		for (var c, h, x = o.fullMessageLength[0] * 8, d = 0; d < o.fullMessageLength.length - 1; ++d) c = o.fullMessageLength[d + 1] * 8, h = c / 4294967296 >>> 0, x += h, l.putInt32(x >>> 0), x = c >>> 0;
		l.putInt32(x);
		for (var g = new Array(a.length), d = 0; d < a.length; ++d) g[d] = a[d].slice(0);
		Pn(g, n, l);
		var v = De.util.createBuffer(),
			B;
		e === "SHA-512" ? B = g.length : e === "SHA-384" ? B = g.length - 2 : B = g.length - 4;
		for (var d = 0; d < B; ++d) v.putInt32(g[d][0]), (d !== B - 1 || e !== "SHA-512/224") && v.putInt32(g[d][1]);
		return v
	}, o
};
var $0 = null,
	Ni = !1,
	j0 = null,
	Pt = null;

function Gu() {
	$0 = "", $0 += De.util.fillString("\0", 128), j0 = [
		[1116352408, 3609767458],
		[1899447441, 602891725],
		[3049323471, 3964484399],
		[3921009573, 2173295548],
		[961987163, 4081628472],
		[1508970993, 3053834265],
		[2453635748, 2937671579],
		[2870763221, 3664609560],
		[3624381080, 2734883394],
		[310598401, 1164996542],
		[607225278, 1323610764],
		[1426881987, 3590304994],
		[1925078388, 4068182383],
		[2162078206, 991336113],
		[2614888103, 633803317],
		[3248222580, 3479774868],
		[3835390401, 2666613458],
		[4022224774, 944711139],
		[264347078, 2341262773],
		[604807628, 2007800933],
		[770255983, 1495990901],
		[1249150122, 1856431235],
		[1555081692, 3175218132],
		[1996064986, 2198950837],
		[2554220882, 3999719339],
		[2821834349, 766784016],
		[2952996808, 2566594879],
		[3210313671, 3203337956],
		[3336571891, 1034457026],
		[3584528711, 2466948901],
		[113926993, 3758326383],
		[338241895, 168717936],
		[666307205, 1188179964],
		[773529912, 1546045734],
		[1294757372, 1522805485],
		[1396182291, 2643833823],
		[1695183700, 2343527390],
		[1986661051, 1014477480],
		[2177026350, 1206759142],
		[2456956037, 344077627],
		[2730485921, 1290863460],
		[2820302411, 3158454273],
		[3259730800, 3505952657],
		[3345764771, 106217008],
		[3516065817, 3606008344],
		[3600352804, 1432725776],
		[4094571909, 1467031594],
		[275423344, 851169720],
		[430227734, 3100823752],
		[506948616, 1363258195],
		[659060556, 3750685593],
		[883997877, 3785050280],
		[958139571, 3318307427],
		[1322822218, 3812723403],
		[1537002063, 2003034995],
		[1747873779, 3602036899],
		[1955562222, 1575990012],
		[2024104815, 1125592928],
		[2227730452, 2716904306],
		[2361852424, 442776044],
		[2428436474, 593698344],
		[2756734187, 3733110249],
		[3204031479, 2999351573],
		[3329325298, 3815920427],
		[3391569614, 3928383900],
		[3515267271, 566280711],
		[3940187606, 3454069534],
		[4118630271, 4000239992],
		[116418474, 1914138554],
		[174292421, 2731055270],
		[289380356, 3203993006],
		[460393269, 320620315],
		[685471733, 587496836],
		[852142971, 1086792851],
		[1017036298, 365543100],
		[1126000580, 2618297676],
		[1288033470, 3409855158],
		[1501505948, 4234509866],
		[1607167915, 987167468],
		[1816402316, 1246189591]
	], Pt = {}, Pt["SHA-512"] = [
		[1779033703, 4089235720],
		[3144134277, 2227873595],
		[1013904242, 4271175723],
		[2773480762, 1595750129],
		[1359893119, 2917565137],
		[2600822924, 725511199],
		[528734635, 4215389547],
		[1541459225, 327033209]
	], Pt["SHA-384"] = [
		[3418070365, 3238371032],
		[1654270250, 914150663],
		[2438529370, 812702999],
		[355462360, 4144912697],
		[1731405415, 4290775857],
		[2394180231, 1750603025],
		[3675008525, 1694076839],
		[1203062813, 3204075428]
	], Pt["SHA-512/256"] = [
		[573645204, 4230739756],
		[2673172387, 3360449730],
		[596883563, 1867755857],
		[2520282905, 1497426621],
		[2519219938, 2827943907],
		[3193839141, 1401305490],
		[721525244, 746961066],
		[246885852, 2177182882]
	], Pt["SHA-512/224"] = [
		[2352822216, 424955298],
		[1944164710, 2312950998],
		[502970286, 855612546],
		[1738396948, 1479516111],
		[258812777, 2077511080],
		[2011393907, 79989058],
		[1067287976, 1780299464],
		[286451373, 2446758561]
	], Ni = !0
}

function Pn(e, t, a) {
	for (var r, n, i, s, o, l, f, u, c, h, x, d, g, v, B, E, m, A, T, S, N, w, K, D, F, U, P, Z, W, J, Q, ce, ge, ne, k, O = a.length(); O >= 128;) {
		for (W = 0; W < 16; ++W) t[W][0] = a.getInt32() >>> 0, t[W][1] = a.getInt32() >>> 0;
		for (; W < 80; ++W) ce = t[W - 2], J = ce[0], Q = ce[1], r = ((J >>> 19 | Q << 13) ^ (Q >>> 29 | J << 3) ^ J >>> 6) >>> 0, n = ((J << 13 | Q >>> 19) ^ (Q << 3 | J >>> 29) ^ (J << 26 | Q >>> 6)) >>> 0, ne = t[W - 15], J = ne[0], Q = ne[1], i = ((J >>> 1 | Q << 31) ^ (J >>> 8 | Q << 24) ^ J >>> 7) >>> 0, s = ((J << 31 | Q >>> 1) ^ (J << 24 | Q >>> 8) ^ (J << 25 | Q >>> 7)) >>> 0, ge = t[W - 7], k = t[W - 16], Q = n + ge[1] + s + k[1], t[W][0] = r + ge[0] + i + k[0] + (Q / 4294967296 >>> 0) >>> 0, t[W][1] = Q >>> 0;
		for (g = e[0][0], v = e[0][1], B = e[1][0], E = e[1][1], m = e[2][0], A = e[2][1], T = e[3][0], S = e[3][1], N = e[4][0], w = e[4][1], K = e[5][0], D = e[5][1], F = e[6][0], U = e[6][1], P = e[7][0], Z = e[7][1], W = 0; W < 80; ++W) f = ((N >>> 14 | w << 18) ^ (N >>> 18 | w << 14) ^ (w >>> 9 | N << 23)) >>> 0, u = ((N << 18 | w >>> 14) ^ (N << 14 | w >>> 18) ^ (w << 23 | N >>> 9)) >>> 0, c = (F ^ N & (K ^ F)) >>> 0, h = (U ^ w & (D ^ U)) >>> 0, o = ((g >>> 28 | v << 4) ^ (v >>> 2 | g << 30) ^ (v >>> 7 | g << 25)) >>> 0, l = ((g << 4 | v >>> 28) ^ (v << 30 | g >>> 2) ^ (v << 25 | g >>> 7)) >>> 0, x = (g & B | m & (g ^ B)) >>> 0, d = (v & E | A & (v ^ E)) >>> 0, Q = Z + u + h + j0[W][1] + t[W][1], r = P + f + c + j0[W][0] + t[W][0] + (Q / 4294967296 >>> 0) >>> 0, n = Q >>> 0, Q = l + d, i = o + x + (Q / 4294967296 >>> 0) >>> 0, s = Q >>> 0, P = F, Z = U, F = K, U = D, K = N, D = w, Q = S + n, N = T + r + (Q / 4294967296 >>> 0) >>> 0, w = Q >>> 0, T = m, S = A, m = B, A = E, B = g, E = v, Q = n + s, g = r + i + (Q / 4294967296 >>> 0) >>> 0, v = Q >>> 0;
		Q = e[0][1] + v, e[0][0] = e[0][0] + g + (Q / 4294967296 >>> 0) >>> 0, e[0][1] = Q >>> 0, Q = e[1][1] + E, e[1][0] = e[1][0] + B + (Q / 4294967296 >>> 0) >>> 0, e[1][1] = Q >>> 0, Q = e[2][1] + A, e[2][0] = e[2][0] + m + (Q / 4294967296 >>> 0) >>> 0, e[2][1] = Q >>> 0, Q = e[3][1] + S, e[3][0] = e[3][0] + T + (Q / 4294967296 >>> 0) >>> 0, e[3][1] = Q >>> 0, Q = e[4][1] + w, e[4][0] = e[4][0] + N + (Q / 4294967296 >>> 0) >>> 0, e[4][1] = Q >>> 0, Q = e[5][1] + D, e[5][0] = e[5][0] + K + (Q / 4294967296 >>> 0) >>> 0, e[5][1] = Q >>> 0, Q = e[6][1] + U, e[6][0] = e[6][0] + F + (Q / 4294967296 >>> 0) >>> 0, e[6][1] = Q >>> 0, Q = e[7][1] + Z, e[7][0] = e[7][0] + P + (Q / 4294967296 >>> 0) >>> 0, e[7][1] = Q >>> 0, O -= 128
	}
}
var Ca = {},
	Qu = le,
	Oe = Qu.asn1;
Ca.privateKeyValidator = {
	name: "PrivateKeyInfo",
	tagClass: Oe.Class.UNIVERSAL,
	type: Oe.Type.SEQUENCE,
	constructed: !0,
	value: [{
		name: "PrivateKeyInfo.version",
		tagClass: Oe.Class.UNIVERSAL,
		type: Oe.Type.INTEGER,
		constructed: !1,
		capture: "privateKeyVersion"
	}, {
		name: "PrivateKeyInfo.privateKeyAlgorithm",
		tagClass: Oe.Class.UNIVERSAL,
		type: Oe.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "AlgorithmIdentifier.algorithm",
			tagClass: Oe.Class.UNIVERSAL,
			type: Oe.Type.OID,
			constructed: !1,
			capture: "privateKeyOid"
		}]
	}, {
		name: "PrivateKeyInfo",
		tagClass: Oe.Class.UNIVERSAL,
		type: Oe.Type.OCTETSTRING,
		constructed: !1,
		capture: "privateKey"
	}]
};
Ca.publicKeyValidator = {
	name: "SubjectPublicKeyInfo",
	tagClass: Oe.Class.UNIVERSAL,
	type: Oe.Type.SEQUENCE,
	constructed: !0,
	captureAsn1: "subjectPublicKeyInfo",
	value: [{
		name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
		tagClass: Oe.Class.UNIVERSAL,
		type: Oe.Type.SEQUENCE,
		constructed: !0,
		value: [{
			name: "AlgorithmIdentifier.algorithm",
			tagClass: Oe.Class.UNIVERSAL,
			type: Oe.Type.OID,
			constructed: !1,
			capture: "publicKeyOid"
		}]
	}, {
		tagClass: Oe.Class.UNIVERSAL,
		type: Oe.Type.BITSTRING,
		constructed: !1,
		composed: !0,
		captureBitStringValue: "ed25519PublicKey"
	}]
};
var Ge = le,
	Fi = Ca,
	Wu = Fi.publicKeyValidator,
	Xu = Fi.privateKeyValidator;
if (typeof Yu > "u") var Yu = Ge.jsbn.BigInteger;
var Z0 = Ge.util.ByteBuffer,
	je = typeof Buffer > "u" ? Uint8Array : Buffer;
Ge.pki = Ge.pki || {};
Ge.pki.ed25519 = Ge.ed25519 = Ge.ed25519 || {};
var de = Ge.ed25519;
de.constants = {};
de.constants.PUBLIC_KEY_BYTE_LENGTH = 32;
de.constants.PRIVATE_KEY_BYTE_LENGTH = 64;
de.constants.SEED_BYTE_LENGTH = 32;
de.constants.SIGN_BYTE_LENGTH = 64;
de.constants.HASH_BYTE_LENGTH = 64;
de.generateKeyPair = function (e) {
	e = e || {};
	var t = e.seed;
	if (t === void 0) t = Ge.random.getBytesSync(de.constants.SEED_BYTE_LENGTH);
	else if (typeof t == "string") {
		if (t.length !== de.constants.SEED_BYTE_LENGTH) throw new TypeError('"seed" must be ' + de.constants.SEED_BYTE_LENGTH + " bytes in length.")
	} else if (!(t instanceof Uint8Array)) throw new TypeError('"seed" must be a node.js Buffer, Uint8Array, or a binary string.');
	t = mt({
		message: t,
		encoding: "binary"
	});
	for (var a = new je(de.constants.PUBLIC_KEY_BYTE_LENGTH), r = new je(de.constants.PRIVATE_KEY_BYTE_LENGTH), n = 0; n < 32; ++n) r[n] = t[n];
	return Ju(a, r), {
		publicKey: a,
		privateKey: r
	}
};
de.privateKeyFromAsn1 = function (e) {
	var t = {},
		a = [],
		r = Ge.asn1.validate(e, Xu, t, a);
	if (!r) {
		var n = new Error("Invalid Key.");
		throw n.errors = a, n
	}
	var i = Ge.asn1.derToOid(t.privateKeyOid),
		s = Ge.oids.EdDSA25519;
	if (i !== s) throw new Error('Invalid OID "' + i + '"; OID must be "' + s + '".');
	var o = t.privateKey,
		l = mt({
			message: Ge.asn1.fromDer(o).value,
			encoding: "binary"
		});
	return {
		privateKeyBytes: l
	}
};
de.publicKeyFromAsn1 = function (e) {
	var t = {},
		a = [],
		r = Ge.asn1.validate(e, Wu, t, a);
	if (!r) {
		var n = new Error("Invalid Key.");
		throw n.errors = a, n
	}
	var i = Ge.asn1.derToOid(t.publicKeyOid),
		s = Ge.oids.EdDSA25519;
	if (i !== s) throw new Error('Invalid OID "' + i + '"; OID must be "' + s + '".');
	var o = t.ed25519PublicKey;
	if (o.length !== de.constants.PUBLIC_KEY_BYTE_LENGTH) throw new Error("Key length is invalid.");
	return mt({
		message: o,
		encoding: "binary"
	})
};
de.publicKeyFromPrivateKey = function (e) {
	e = e || {};
	var t = mt({
		message: e.privateKey,
		encoding: "binary"
	});
	if (t.length !== de.constants.PRIVATE_KEY_BYTE_LENGTH) throw new TypeError('"options.privateKey" must have a byte length of ' + de.constants.PRIVATE_KEY_BYTE_LENGTH);
	for (var a = new je(de.constants.PUBLIC_KEY_BYTE_LENGTH), r = 0; r < a.length; ++r) a[r] = t[32 + r];
	return a
};
de.sign = function (e) {
	e = e || {};
	var t = mt(e),
		a = mt({
			message: e.privateKey,
			encoding: "binary"
		});
	if (a.length === de.constants.SEED_BYTE_LENGTH) {
		var r = de.generateKeyPair({
			seed: a
		});
		a = r.privateKey
	} else if (a.length !== de.constants.PRIVATE_KEY_BYTE_LENGTH) throw new TypeError('"options.privateKey" must have a byte length of ' + de.constants.SEED_BYTE_LENGTH + " or " + de.constants.PRIVATE_KEY_BYTE_LENGTH);
	var n = new je(de.constants.SIGN_BYTE_LENGTH + t.length);
	el(n, t, t.length, a);
	for (var i = new je(de.constants.SIGN_BYTE_LENGTH), s = 0; s < i.length; ++s) i[s] = n[s];
	return i
};
de.verify = function (e) {
	e = e || {};
	var t = mt(e);
	if (e.signature === void 0) throw new TypeError('"options.signature" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a binary string.');
	var a = mt({
		message: e.signature,
		encoding: "binary"
	});
	if (a.length !== de.constants.SIGN_BYTE_LENGTH) throw new TypeError('"options.signature" must have a byte length of ' + de.constants.SIGN_BYTE_LENGTH);
	var r = mt({
		message: e.publicKey,
		encoding: "binary"
	});
	if (r.length !== de.constants.PUBLIC_KEY_BYTE_LENGTH) throw new TypeError('"options.publicKey" must have a byte length of ' + de.constants.PUBLIC_KEY_BYTE_LENGTH);
	var n = new je(de.constants.SIGN_BYTE_LENGTH + t.length),
		i = new je(de.constants.SIGN_BYTE_LENGTH + t.length),
		s;
	for (s = 0; s < de.constants.SIGN_BYTE_LENGTH; ++s) n[s] = a[s];
	for (s = 0; s < t.length; ++s) n[s + de.constants.SIGN_BYTE_LENGTH] = t[s];
	return tl(i, n, n.length, r) >= 0
};

function mt(e) {
	var t = e.message;
	if (t instanceof Uint8Array || t instanceof je) return t;
	var a = e.encoding;
	if (t === void 0)
		if (e.md) t = e.md.digest().getBytes(), a = "binary";
		else throw new TypeError('"options.message" or "options.md" not specified.');
	if (typeof t == "string" && !a) throw new TypeError('"options.encoding" must be "binary" or "utf8".');
	if (typeof t == "string") {
		if (typeof Buffer < "u") return Buffer.from(t, a);
		t = new Z0(t, a)
	} else if (!(t instanceof Z0)) throw new TypeError('"options.message" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a string with "options.encoding" specifying its encoding.');
	for (var r = new je(t.length()), n = 0; n < r.length; ++n) r[n] = t.at(n);
	return r
}
var J0 = ae(),
	Pr = ae([1]),
	$u = ae([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
	ju = ae([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
	Vn = ae([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
	On = ae([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
	V0 = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]),
	Zu = ae([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

function pr(e, t) {
	var a = Ge.md.sha512.create(),
		r = new Z0(e);
	a.update(r.getBytes(t), "binary");
	var n = a.digest().getBytes();
	if (typeof Buffer < "u") return Buffer.from(n, "binary");
	for (var i = new je(de.constants.HASH_BYTE_LENGTH), s = 0; s < 64; ++s) i[s] = n.charCodeAt(s);
	return i
}

function Ju(e, t) {
	var a = [ae(), ae(), ae(), ae()],
		r, n = pr(t, 32);
	for (n[0] &= 248, n[31] &= 127, n[31] |= 64, ma(a, n), Ea(e, a), r = 0; r < 32; ++r) t[r + 32] = e[r];
	return 0
}

function el(e, t, a, r) {
	var n, i, s = new Float64Array(64),
		o = [ae(), ae(), ae(), ae()],
		l = pr(r, 32);
	l[0] &= 248, l[31] &= 127, l[31] |= 64;
	var f = a + 64;
	for (n = 0; n < a; ++n) e[64 + n] = t[n];
	for (n = 0; n < 32; ++n) e[32 + n] = l[32 + n];
	var u = pr(e.subarray(32), a + 32);
	for (ea(u), ma(o, u), Ea(e, o), n = 32; n < 64; ++n) e[n] = r[n];
	var c = pr(e, a + 64);
	for (ea(c), n = 32; n < 64; ++n) s[n] = 0;
	for (n = 0; n < 32; ++n) s[n] = u[n];
	for (n = 0; n < 32; ++n)
		for (i = 0; i < 32; i++) s[n + i] += c[n] * l[i];
	return Ri(e.subarray(32), s), f
}

function tl(e, t, a, r) {
	var n, i, s = new je(32),
		o = [ae(), ae(), ae(), ae()],
		l = [ae(), ae(), ae(), ae()];
	if (i = -1, a < 64 || rl(l, r)) return -1;
	for (n = 0; n < a; ++n) e[n] = t[n];
	for (n = 0; n < 32; ++n) e[n + 32] = r[n];
	var f = pr(e, a);
	if (ea(f), Li(o, l, f), ma(l, t.subarray(32)), ta(o, l), Ea(s, o), a -= 64, wi(t, 0, s, 0)) {
		for (n = 0; n < a; ++n) e[n] = 0;
		return -1
	}
	for (n = 0; n < a; ++n) e[n] = t[n + 64];
	return i = a, i
}

function Ri(e, t) {
	var a, r, n, i;
	for (r = 63; r >= 32; --r) {
		for (a = 0, n = r - 32, i = r - 12; n < i; ++n) t[n] += a - 16 * t[r] * V0[n - (r - 32)], a = t[n] + 128 >> 8, t[n] -= a * 256;
		t[n] += a, t[r] = 0
	}
	for (a = 0, n = 0; n < 32; ++n) t[n] += a - (t[31] >> 4) * V0[n], a = t[n] >> 8, t[n] &= 255;
	for (n = 0; n < 32; ++n) t[n] -= a * V0[n];
	for (r = 0; r < 32; ++r) t[r + 1] += t[r] >> 8, e[r] = t[r] & 255
}

function ea(e) {
	for (var t = new Float64Array(64), a = 0; a < 64; ++a) t[a] = e[a], e[a] = 0;
	Ri(e, t)
}

function ta(e, t) {
	var a = ae(),
		r = ae(),
		n = ae(),
		i = ae(),
		s = ae(),
		o = ae(),
		l = ae(),
		f = ae(),
		u = ae();
	$t(a, e[1], e[0]), $t(u, t[1], t[0]), Te(a, a, u), Xt(r, e[0], e[1]), Xt(u, t[0], t[1]), Te(r, r, u), Te(n, e[3], t[3]), Te(n, n, ju), Te(i, e[2], t[2]), Xt(i, i, i), $t(s, r, a), $t(o, i, n), Xt(l, i, n), Xt(f, r, a), Te(e[0], s, o), Te(e[1], f, l), Te(e[2], l, o), Te(e[3], s, f)
}

function Kn(e, t, a) {
	for (var r = 0; r < 4; ++r) Ui(e[r], t[r], a)
}

function Ea(e, t) {
	var a = ae(),
		r = ae(),
		n = ae();
	sl(n, t[2]), Te(a, t[0], n), Te(r, t[1], n), Vr(e, r), e[31] ^= ki(a) << 7
}

function Vr(e, t) {
	var a, r, n, i = ae(),
		s = ae();
	for (a = 0; a < 16; ++a) s[a] = t[a];
	for (O0(s), O0(s), O0(s), r = 0; r < 2; ++r) {
		for (i[0] = s[0] - 65517, a = 1; a < 15; ++a) i[a] = s[a] - 65535 - (i[a - 1] >> 16 & 1), i[a - 1] &= 65535;
		i[15] = s[15] - 32767 - (i[14] >> 16 & 1), n = i[15] >> 16 & 1, i[14] &= 65535, Ui(s, i, 1 - n)
	}
	for (a = 0; a < 16; a++) e[2 * a] = s[a] & 255, e[2 * a + 1] = s[a] >> 8
}

function rl(e, t) {
	var a = ae(),
		r = ae(),
		n = ae(),
		i = ae(),
		s = ae(),
		o = ae(),
		l = ae();
	return Dt(e[2], Pr), al(e[1], t), Vt(n, e[1]), Te(i, n, $u), $t(n, n, e[2]), Xt(i, e[2], i), Vt(s, i), Vt(o, s), Te(l, o, s), Te(a, l, n), Te(a, a, i), nl(a, a), Te(a, a, n), Te(a, a, i), Te(a, a, i), Te(e[0], a, i), Vt(r, e[0]), Te(r, r, i), Hn(r, n) && Te(e[0], e[0], Zu), Vt(r, e[0]), Te(r, r, i), Hn(r, n) ? -1 : (ki(e[0]) === t[31] >> 7 && $t(e[0], J0, e[0]), Te(e[3], e[0], e[1]), 0)
}

function al(e, t) {
	var a;
	for (a = 0; a < 16; ++a) e[a] = t[2 * a] + (t[2 * a + 1] << 8);
	e[15] &= 32767
}

function nl(e, t) {
	var a = ae(),
		r;
	for (r = 0; r < 16; ++r) a[r] = t[r];
	for (r = 250; r >= 0; --r) Vt(a, a), r !== 1 && Te(a, a, t);
	for (r = 0; r < 16; ++r) e[r] = a[r]
}

function Hn(e, t) {
	var a = new je(32),
		r = new je(32);
	return Vr(a, e), Vr(r, t), wi(a, 0, r, 0)
}

function wi(e, t, a, r) {
	return il(e, t, a, r, 32)
}

function il(e, t, a, r, n) {
	var i, s = 0;
	for (i = 0; i < n; ++i) s |= e[t + i] ^ a[r + i];
	return (1 & s - 1 >>> 8) - 1
}

function ki(e) {
	var t = new je(32);
	return Vr(t, e), t[0] & 1
}

function Li(e, t, a) {
	var r, n;
	for (Dt(e[0], J0), Dt(e[1], Pr), Dt(e[2], Pr), Dt(e[3], J0), n = 255; n >= 0; --n) r = a[n / 8 | 0] >> (n & 7) & 1, Kn(e, t, r), ta(t, e), ta(e, e), Kn(e, t, r)
}

function ma(e, t) {
	var a = [ae(), ae(), ae(), ae()];
	Dt(a[0], Vn), Dt(a[1], On), Dt(a[2], Pr), Te(a[3], Vn, On), Li(e, a, t)
}

function Dt(e, t) {
	var a;
	for (a = 0; a < 16; a++) e[a] = t[a] | 0
}

function sl(e, t) {
	var a = ae(),
		r;
	for (r = 0; r < 16; ++r) a[r] = t[r];
	for (r = 253; r >= 0; --r) Vt(a, a), r !== 2 && r !== 4 && Te(a, a, t);
	for (r = 0; r < 16; ++r) e[r] = a[r]
}

function O0(e) {
	var t, a, r = 1;
	for (t = 0; t < 16; ++t) a = e[t] + r + 65535, r = Math.floor(a / 65536), e[t] = a - r * 65536;
	e[0] += r - 1 + 37 * (r - 1)
}

function Ui(e, t, a) {
	for (var r, n = ~(a - 1), i = 0; i < 16; ++i) r = n & (e[i] ^ t[i]), e[i] ^= r, t[i] ^= r
}

function ae(e) {
	var t, a = new Float64Array(16);
	if (e)
		for (t = 0; t < e.length; ++t) a[t] = e[t];
	return a
}

function Xt(e, t, a) {
	for (var r = 0; r < 16; ++r) e[r] = t[r] + a[r]
}

function $t(e, t, a) {
	for (var r = 0; r < 16; ++r) e[r] = t[r] - a[r]
}

function Vt(e, t) {
	Te(e, t, t)
}

function Te(e, t, a) {
	var r, n, i = 0,
		s = 0,
		o = 0,
		l = 0,
		f = 0,
		u = 0,
		c = 0,
		h = 0,
		x = 0,
		d = 0,
		g = 0,
		v = 0,
		B = 0,
		E = 0,
		m = 0,
		A = 0,
		T = 0,
		S = 0,
		N = 0,
		w = 0,
		K = 0,
		D = 0,
		F = 0,
		U = 0,
		P = 0,
		Z = 0,
		W = 0,
		J = 0,
		Q = 0,
		ce = 0,
		ge = 0,
		ne = a[0],
		k = a[1],
		O = a[2],
		H = a[3],
		V = a[4],
		oe = a[5],
		ie = a[6],
		me = a[7],
		ee = a[8],
		Re = a[9],
		Fe = a[10],
		Ue = a[11],
		we = a[12],
		Se = a[13],
		Be = a[14],
		Le = a[15];
	r = t[0], i += r * ne, s += r * k, o += r * O, l += r * H, f += r * V, u += r * oe, c += r * ie, h += r * me, x += r * ee, d += r * Re, g += r * Fe, v += r * Ue, B += r * we, E += r * Se, m += r * Be, A += r * Le, r = t[1], s += r * ne, o += r * k, l += r * O, f += r * H, u += r * V, c += r * oe, h += r * ie, x += r * me, d += r * ee, g += r * Re, v += r * Fe, B += r * Ue, E += r * we, m += r * Se, A += r * Be, T += r * Le, r = t[2], o += r * ne, l += r * k, f += r * O, u += r * H, c += r * V, h += r * oe, x += r * ie, d += r * me, g += r * ee, v += r * Re, B += r * Fe, E += r * Ue, m += r * we, A += r * Se, T += r * Be, S += r * Le, r = t[3], l += r * ne, f += r * k, u += r * O, c += r * H, h += r * V, x += r * oe, d += r * ie, g += r * me, v += r * ee, B += r * Re, E += r * Fe, m += r * Ue, A += r * we, T += r * Se, S += r * Be, N += r * Le, r = t[4], f += r * ne, u += r * k, c += r * O, h += r * H, x += r * V, d += r * oe, g += r * ie, v += r * me, B += r * ee, E += r * Re, m += r * Fe, A += r * Ue, T += r * we, S += r * Se, N += r * Be, w += r * Le, r = t[5], u += r * ne, c += r * k, h += r * O, x += r * H, d += r * V, g += r * oe, v += r * ie, B += r * me, E += r * ee, m += r * Re, A += r * Fe, T += r * Ue, S += r * we, N += r * Se, w += r * Be, K += r * Le, r = t[6], c += r * ne, h += r * k, x += r * O, d += r * H, g += r * V, v += r * oe, B += r * ie, E += r * me, m += r * ee, A += r * Re, T += r * Fe, S += r * Ue, N += r * we, w += r * Se, K += r * Be, D += r * Le, r = t[7], h += r * ne, x += r * k, d += r * O, g += r * H, v += r * V, B += r * oe, E += r * ie, m += r * me, A += r * ee, T += r * Re, S += r * Fe, N += r * Ue, w += r * we, K += r * Se, D += r * Be, F += r * Le, r = t[8], x += r * ne, d += r * k, g += r * O, v += r * H, B += r * V, E += r * oe, m += r * ie, A += r * me, T += r * ee, S += r * Re, N += r * Fe, w += r * Ue, K += r * we, D += r * Se, F += r * Be, U += r * Le, r = t[9], d += r * ne, g += r * k, v += r * O, B += r * H, E += r * V, m += r * oe, A += r * ie, T += r * me, S += r * ee, N += r * Re, w += r * Fe, K += r * Ue, D += r * we, F += r * Se, U += r * Be, P += r * Le, r = t[10], g += r * ne, v += r * k, B += r * O, E += r * H, m += r * V, A += r * oe, T += r * ie, S += r * me, N += r * ee, w += r * Re, K += r * Fe, D += r * Ue, F += r * we, U += r * Se, P += r * Be, Z += r * Le, r = t[11], v += r * ne, B += r * k, E += r * O, m += r * H, A += r * V, T += r * oe, S += r * ie, N += r * me, w += r * ee, K += r * Re, D += r * Fe, F += r * Ue, U += r * we, P += r * Se, Z += r * Be, W += r * Le, r = t[12], B += r * ne, E += r * k, m += r * O, A += r * H, T += r * V, S += r * oe, N += r * ie, w += r * me, K += r * ee, D += r * Re, F += r * Fe, U += r * Ue, P += r * we, Z += r * Se, W += r * Be, J += r * Le, r = t[13], E += r * ne, m += r * k, A += r * O, T += r * H, S += r * V, N += r * oe, w += r * ie, K += r * me, D += r * ee, F += r * Re, U += r * Fe, P += r * Ue, Z += r * we, W += r * Se, J += r * Be, Q += r * Le, r = t[14], m += r * ne, A += r * k, T += r * O, S += r * H, N += r * V, w += r * oe, K += r * ie, D += r * me, F += r * ee, U += r * Re, P += r * Fe, Z += r * Ue, W += r * we, J += r * Se, Q += r * Be, ce += r * Le, r = t[15], A += r * ne, T += r * k, S += r * O, N += r * H, w += r * V, K += r * oe, D += r * ie, F += r * me, U += r * ee, P += r * Re, Z += r * Fe, W += r * Ue, J += r * we, Q += r * Se, ce += r * Be, ge += r * Le, i += 38 * T, s += 38 * S, o += 38 * N, l += 38 * w, f += 38 * K, u += 38 * D, c += 38 * F, h += 38 * U, x += 38 * P, d += 38 * Z, g += 38 * W, v += 38 * J, B += 38 * Q, E += 38 * ce, m += 38 * ge, n = 1, r = i + n + 65535, n = Math.floor(r / 65536), i = r - n * 65536, r = s + n + 65535, n = Math.floor(r / 65536), s = r - n * 65536, r = o + n + 65535, n = Math.floor(r / 65536), o = r - n * 65536, r = l + n + 65535, n = Math.floor(r / 65536), l = r - n * 65536, r = f + n + 65535, n = Math.floor(r / 65536), f = r - n * 65536, r = u + n + 65535, n = Math.floor(r / 65536), u = r - n * 65536, r = c + n + 65535, n = Math.floor(r / 65536), c = r - n * 65536, r = h + n + 65535, n = Math.floor(r / 65536), h = r - n * 65536, r = x + n + 65535, n = Math.floor(r / 65536), x = r - n * 65536, r = d + n + 65535, n = Math.floor(r / 65536), d = r - n * 65536, r = g + n + 65535, n = Math.floor(r / 65536), g = r - n * 65536, r = v + n + 65535, n = Math.floor(r / 65536), v = r - n * 65536, r = B + n + 65535, n = Math.floor(r / 65536), B = r - n * 65536, r = E + n + 65535, n = Math.floor(r / 65536), E = r - n * 65536, r = m + n + 65535, n = Math.floor(r / 65536), m = r - n * 65536, r = A + n + 65535, n = Math.floor(r / 65536), A = r - n * 65536, i += n - 1 + 37 * (n - 1), n = 1, r = i + n + 65535, n = Math.floor(r / 65536), i = r - n * 65536, r = s + n + 65535, n = Math.floor(r / 65536), s = r - n * 65536, r = o + n + 65535, n = Math.floor(r / 65536), o = r - n * 65536, r = l + n + 65535, n = Math.floor(r / 65536), l = r - n * 65536, r = f + n + 65535, n = Math.floor(r / 65536), f = r - n * 65536, r = u + n + 65535, n = Math.floor(r / 65536), u = r - n * 65536, r = c + n + 65535, n = Math.floor(r / 65536), c = r - n * 65536, r = h + n + 65535, n = Math.floor(r / 65536), h = r - n * 65536, r = x + n + 65535, n = Math.floor(r / 65536), x = r - n * 65536, r = d + n + 65535, n = Math.floor(r / 65536), d = r - n * 65536, r = g + n + 65535, n = Math.floor(r / 65536), g = r - n * 65536, r = v + n + 65535, n = Math.floor(r / 65536), v = r - n * 65536, r = B + n + 65535, n = Math.floor(r / 65536), B = r - n * 65536, r = E + n + 65535, n = Math.floor(r / 65536), E = r - n * 65536, r = m + n + 65535, n = Math.floor(r / 65536), m = r - n * 65536, r = A + n + 65535, n = Math.floor(r / 65536), A = r - n * 65536, i += n - 1 + 37 * (n - 1), e[0] = i, e[1] = s, e[2] = o, e[3] = l, e[4] = f, e[5] = u, e[6] = c, e[7] = h, e[8] = x, e[9] = d, e[10] = g, e[11] = v, e[12] = B, e[13] = E, e[14] = m, e[15] = A
}
var et = le;
et.kem = et.kem || {};
var Mn = et.jsbn.BigInteger;
et.kem.rsa = {};
et.kem.rsa.create = function (e, t) {
	t = t || {};
	var a = t.prng || et.random,
		r = {};
	return r.encrypt = function (n, i) {
		var s = Math.ceil(n.n.bitLength() / 8),
			o;
		do o = new Mn(et.util.bytesToHex(a.getBytesSync(s)), 16).mod(n.n); while (o.compareTo(Mn.ONE) <= 0);
		o = et.util.hexToBytes(o.toString(16));
		var l = s - o.length;
		l > 0 && (o = et.util.fillString("\0", l) + o);
		var f = n.encrypt(o, "NONE"),
			u = e.generate(o, i);
		return {
			encapsulation: f,
			key: u
		}
	}, r.decrypt = function (n, i, s) {
		var o = n.decrypt(i, "NONE");
		return e.generate(o, s)
	}, r
};
et.kem.kdf1 = function (e, t) {
	Pi(this, e, 0, t || e.digestLength)
};
et.kem.kdf2 = function (e, t) {
	Pi(this, e, 1, t || e.digestLength)
};

function Pi(e, t, a, r) {
	e.generate = function (n, i) {
		for (var s = new et.util.ByteBuffer, o = Math.ceil(i / r) + a, l = new et.util.ByteBuffer, f = a; f < o; ++f) {
			l.putInt32(f), t.start(), t.update(n + l.getBytes());
			var u = t.digest();
			s.putBytes(u.getBytes(r))
		}
		return s.truncate(s.length() - i), s.getBytes()
	}
}
var pe = le;
pe.log = pe.log || {};
pe.log.levels = ["none", "error", "warning", "info", "debug", "verbose", "max"];
var Or = {},
	ra = [],
	vr = null;
pe.log.LEVEL_LOCKED = 2;
pe.log.NO_LEVEL_CHECK = 4;
pe.log.INTERPOLATE = 8;
for (var Nt = 0; Nt < pe.log.levels.length; ++Nt) {
	var qn = pe.log.levels[Nt];
	Or[qn] = {
		index: Nt,
		name: qn.toUpperCase()
	}
}
pe.log.logMessage = function (e) {
	for (var t = Or[e.level].index, a = 0; a < ra.length; ++a) {
		var r = ra[a];
		if (r.flags & pe.log.NO_LEVEL_CHECK) r.f(e);
		else {
			var n = Or[r.level].index;
			t <= n && r.f(r, e)
		}
	}
};
pe.log.prepareStandard = function (e) {
	"standard" in e || (e.standard = Or[e.level].name + " [" + e.category + "] " + e.message)
};
pe.log.prepareFull = function (e) {
	if (!("full" in e)) {
		var t = [e.message];
		t = t.concat([]), e.full = pe.util.format.apply(this, t)
	}
};
pe.log.prepareStandardFull = function (e) {
	"standardFull" in e || (pe.log.prepareStandard(e), e.standardFull = e.standard)
};
for (var zn = ["error", "warning", "info", "debug", "verbose"], Nt = 0; Nt < zn.length; ++Nt)(function (t) {
	pe.log[t] = function (a, r) {
		var n = Array.prototype.slice.call(arguments).slice(2),
			i = {
				timestamp: new Date,
				level: t,
				category: a,
				message: r,
				arguments: n
			};
		pe.log.logMessage(i)
	}
})(zn[Nt]);
pe.log.makeLogger = function (e) {
	var t = {
		flags: 0,
		f: e
	};
	return pe.log.setLevel(t, "none"), t
};
pe.log.setLevel = function (e, t) {
	var a = !1;
	if (e && !(e.flags & pe.log.LEVEL_LOCKED))
		for (var r = 0; r < pe.log.levels.length; ++r) {
			var n = pe.log.levels[r];
			if (t == n) {
				e.level = t, a = !0;
				break
			}
		}
	return a
};
pe.log.lock = function (e, t) {
	typeof t > "u" || t ? e.flags |= pe.log.LEVEL_LOCKED : e.flags &= ~pe.log.LEVEL_LOCKED
};
pe.log.addLogger = function (e) {
	ra.push(e)
};
if (typeof console < "u" && "log" in console) {
	var cr;
	if (console.error && console.warn && console.info && console.debug) {
		var ol = {
				error: console.error,
				warning: console.warn,
				info: console.info,
				debug: console.debug,
				verbose: console.debug
			},
			Ba = function (e, t) {
				pe.log.prepareStandard(t);
				var a = ol[t.level],
					r = [t.standard];
				r = r.concat(t.arguments.slice()), a.apply(console, r)
			};
		cr = pe.log.makeLogger(Ba)
	} else {
		var Ba = function (t, a) {
			pe.log.prepareStandardFull(a), console.log(a.standardFull)
		};
		cr = pe.log.makeLogger(Ba)
	}
	pe.log.setLevel(cr, "debug"), pe.log.addLogger(cr), vr = cr
} else console = {
	log: function () {}
};
if (vr !== null && typeof window < "u" && window.location) {
	var Tr = new URL(window.location.href).searchParams;
	if (Tr.has("console.level") && pe.log.setLevel(vr, Tr.get("console.level").slice(-1)[0]), Tr.has("console.lock")) {
		var fl = Tr.get("console.lock").slice(-1)[0];
		fl == "true" && pe.log.lock(vr)
	}
}
pe.log.consoleLogger = vr;
var X = le,
	I = X.asn1,
	Ye = X.pkcs7 = X.pkcs7 || {};
Ye.messageFromPem = function (e) {
	var t = X.pem.decode(e)[0];
	if (t.type !== "PKCS7") {
		var a = new Error('Could not convert PKCS#7 message from PEM; PEM header type is not "PKCS#7".');
		throw a.headerType = t.type, a
	}
	if (t.procType && t.procType.type === "ENCRYPTED") throw new Error("Could not convert PKCS#7 message from PEM; PEM is encrypted.");
	var r = I.fromDer(t.body);
	return Ye.messageFromAsn1(r)
};
Ye.messageToPem = function (e, t) {
	var a = {
		type: "PKCS7",
		body: I.toDer(e.toAsn1()).getBytes()
	};
	return X.pem.encode(a, {
		maxline: t
	})
};
Ye.messageFromAsn1 = function (e) {
	var t = {},
		a = [];
	if (!I.validate(e, Ye.asn1.contentInfoValidator, t, a)) {
		var r = new Error("Cannot read PKCS#7 message. ASN.1 object is not an PKCS#7 ContentInfo.");
		throw r.errors = a, r
	}
	var n = I.derToOid(t.contentType),
		i;
	switch (n) {
		case X.pki.oids.envelopedData:
			i = Ye.createEnvelopedData();
			break;
		case X.pki.oids.encryptedData:
			i = Ye.createEncryptedData();
			break;
		case X.pki.oids.signedData:
			i = Ye.createSignedData();
			break;
		default:
			throw new Error("Cannot read PKCS#7 message. ContentType with OID " + n + " is not (yet) supported.")
	}
	return i.fromAsn1(t.content.value[0]), i
};
Ye.createSignedData = function () {
	var e = null;
	return e = {
		type: X.pki.oids.signedData,
		version: 1,
		certificates: [],
		crls: [],
		signers: [],
		digestAlgorithmIdentifiers: [],
		contentInfo: null,
		signerInfos: [],
		fromAsn1: function (r) {
			if (Aa(e, r, Ye.asn1.signedDataValidator), e.certificates = [], e.crls = [], e.digestAlgorithmIdentifiers = [], e.contentInfo = null, e.signerInfos = [], e.rawCapture.certificates)
				for (var n = e.rawCapture.certificates.value, i = 0; i < n.length; ++i) e.certificates.push(X.pki.certificateFromAsn1(n[i]))
		},
		toAsn1: function () {
			e.contentInfo || e.sign();
			for (var r = [], n = 0; n < e.certificates.length; ++n) r.push(X.pki.certificateToAsn1(e.certificates[n]));
			var i = [],
				s = I.create(I.Class.CONTEXT_SPECIFIC, 0, !0, [I.create(I.Class.UNIVERSAL, I.Type.SEQUENCE, !0, [I.create(I.Class.UNIVERSAL, I.Type.INTEGER, !1, I.integerToDer(e.version).getBytes()), I.create(I.Class.UNIVERSAL, I.Type.SET, !0, e.digestAlgorithmIdentifiers), e.contentInfo])]);
			return r.length > 0 && s.value[0].value.push(I.create(I.Class.CONTEXT_SPECIFIC, 0, !0, r)), i.length > 0 && s.value[0].value.push(I.create(I.Class.CONTEXT_SPECIFIC, 1, !0, i)), s.value[0].value.push(I.create(I.Class.UNIVERSAL, I.Type.SET, !0, e.signerInfos)), I.create(I.Class.UNIVERSAL, I.Type.SEQUENCE, !0, [I.create(I.Class.UNIVERSAL, I.Type.OID, !1, I.oidToDer(e.type).getBytes()), s])
		},
		addSigner: function (r) {
			var n = r.issuer,
				i = r.serialNumber;
			if (r.certificate) {
				var s = r.certificate;
				typeof s == "string" && (s = X.pki.certificateFromPem(s)), n = s.issuer.attributes, i = s.serialNumber
			}
			var o = r.key;
			if (!o) throw new Error("Could not add PKCS#7 signer; no private key specified.");
			typeof o == "string" && (o = X.pki.privateKeyFromPem(o));
			var l = r.digestAlgorithm || X.pki.oids.sha1;
			switch (l) {
				case X.pki.oids.sha1:
				case X.pki.oids.sha256:
				case X.pki.oids.sha384:
				case X.pki.oids.sha512:
				case X.pki.oids.md5:
					break;
				default:
					throw new Error("Could not add PKCS#7 signer; unknown message digest algorithm: " + l)
			}
			var f = r.authenticatedAttributes || [];
			if (f.length > 0) {
				for (var u = !1, c = !1, h = 0; h < f.length; ++h) {
					var x = f[h];
					if (!u && x.type === X.pki.oids.contentType) {
						if (u = !0, c) break;
						continue
					}
					if (!c && x.type === X.pki.oids.messageDigest) {
						if (c = !0, u) break;
						continue
					}
				}
				if (!u || !c) throw new Error("Invalid signer.authenticatedAttributes. If signer.authenticatedAttributes is specified, then it must contain at least two attributes, PKCS #9 content-type and PKCS #9 message-digest.")
			}
			e.signers.push({
				key: o,
				version: 1,
				issuer: n,
				serialNumber: i,
				digestAlgorithm: l,
				signatureAlgorithm: X.pki.oids.rsaEncryption,
				signature: null,
				authenticatedAttributes: f,
				unauthenticatedAttributes: []
			})
		},
		sign: function (r) {
			if (r = r || {}, (typeof e.content != "object" || e.contentInfo === null) && (e.contentInfo = I.create(I.Class.UNIVERSAL, I.Type.SEQUENCE, !0, [I.create(I.Class.UNIVERSAL, I.Type.OID, !1, I.oidToDer(X.pki.oids.data).getBytes())]), "content" in e)) {
				var n;
				e.content instanceof X.util.ByteBuffer ? n = e.content.bytes() : typeof e.content == "string" && (n = X.util.encodeUtf8(e.content)), r.detached ? e.detachedContent = I.create(I.Class.UNIVERSAL, I.Type.OCTETSTRING, !1, n) : e.contentInfo.value.push(I.create(I.Class.CONTEXT_SPECIFIC, 0, !0, [I.create(I.Class.UNIVERSAL, I.Type.OCTETSTRING, !1, n)]))
			}
			if (e.signers.length !== 0) {
				var i = t();
				a(i)
			}
		},
		verify: function () {
			throw new Error("PKCS#7 signature verification not yet implemented.")
		},
		addCertificate: function (r) {
			typeof r == "string" && (r = X.pki.certificateFromPem(r)), e.certificates.push(r)
		},
		addCertificateRevokationList: function (r) {
			throw new Error("PKCS#7 CRL support not yet implemented.")
		}
	}, e;

	function t() {
		for (var r = {}, n = 0; n < e.signers.length; ++n) {
			var i = e.signers[n],
				s = i.digestAlgorithm;
			s in r || (r[s] = X.md[X.pki.oids[s]].create()), i.authenticatedAttributes.length === 0 ? i.md = r[s] : i.md = X.md[X.pki.oids[s]].create()
		}
		e.digestAlgorithmIdentifiers = [];
		for (var s in r) e.digestAlgorithmIdentifiers.push(I.create(I.Class.UNIVERSAL, I.Type.SEQUENCE, !0, [I.create(I.Class.UNIVERSAL, I.Type.OID, !1, I.oidToDer(s).getBytes()), I.create(I.Class.UNIVERSAL, I.Type.NULL, !1, "")]));
		return r
	}

	function a(r) {
		var n;
		if (e.detachedContent ? n = e.detachedContent : (n = e.contentInfo.value[1], n = n.value[0]), !n) throw new Error("Could not sign PKCS#7 message; there is no content to sign.");
		var i = I.derToOid(e.contentInfo.value[0].value),
			s = I.toDer(n);
		s.getByte(), I.getBerValueLength(s), s = s.getBytes();
		for (var o in r) r[o].start().update(s);
		for (var l = new Date, f = 0; f < e.signers.length; ++f) {
			var u = e.signers[f];
			if (u.authenticatedAttributes.length === 0) {
				if (i !== X.pki.oids.data) throw new Error("Invalid signer; authenticatedAttributes must be present when the ContentInfo content type is not PKCS#7 Data.")
			} else {
				u.authenticatedAttributesAsn1 = I.create(I.Class.CONTEXT_SPECIFIC, 0, !0, []);
				for (var c = I.create(I.Class.UNIVERSAL, I.Type.SET, !0, []), h = 0; h < u.authenticatedAttributes.length; ++h) {
					var x = u.authenticatedAttributes[h];
					x.type === X.pki.oids.messageDigest ? x.value = r[u.digestAlgorithm].digest() : x.type === X.pki.oids.signingTime && (x.value || (x.value = l)), c.value.push(aa(x)), u.authenticatedAttributesAsn1.value.push(aa(x))
				}
				s = I.toDer(c).getBytes(), u.md.start().update(s)
			}
			u.signature = u.key.sign(u.md, "RSASSA-PKCS1-V1_5")
		}
		e.signerInfos = xl(e.signers)
	}
};
Ye.createEncryptedData = function () {
	var e = null;
	return e = {
		type: X.pki.oids.encryptedData,
		version: 0,
		encryptedContent: {
			algorithm: X.pki.oids["aes256-CBC"]
		},
		fromAsn1: function (t) {
			Aa(e, t, Ye.asn1.encryptedDataValidator)
		},
		decrypt: function (t) {
			t !== void 0 && (e.encryptedContent.key = t), Vi(e)
		}
	}, e
};
Ye.createEnvelopedData = function () {
	var e = null;
	return e = {
		type: X.pki.oids.envelopedData,
		version: 0,
		recipients: [],
		encryptedContent: {
			algorithm: X.pki.oids["aes256-CBC"]
		},
		fromAsn1: function (t) {
			var a = Aa(e, t, Ye.asn1.envelopedDataValidator);
			e.recipients = cl(a.recipientInfos.value)
		},
		toAsn1: function () {
			return I.create(I.Class.UNIVERSAL, I.Type.SEQUENCE, !0, [I.create(I.Class.UNIVERSAL, I.Type.OID, !1, I.oidToDer(e.type).getBytes()), I.create(I.Class.CONTEXT_SPECIFIC, 0, !0, [I.create(I.Class.UNIVERSAL, I.Type.SEQUENCE, !0, [I.create(I.Class.UNIVERSAL, I.Type.INTEGER, !1, I.integerToDer(e.version).getBytes()), I.create(I.Class.UNIVERSAL, I.Type.SET, !0, hl(e.recipients)), I.create(I.Class.UNIVERSAL, I.Type.SEQUENCE, !0, pl(e.encryptedContent))])])])
		},
		findRecipient: function (t) {
			for (var a = t.issuer.attributes, r = 0; r < e.recipients.length; ++r) {
				var n = e.recipients[r],
					i = n.issuer;
				if (n.serialNumber === t.serialNumber && i.length === a.length) {
					for (var s = !0, o = 0; o < a.length; ++o)
						if (i[o].type !== a[o].type || i[o].value !== a[o].value) {
							s = !1;
							break
						} if (s) return n
				}
			}
			return null
		},
		decrypt: function (t, a) {
			if (e.encryptedContent.key === void 0 && t !== void 0 && a !== void 0) switch (t.encryptedContent.algorithm) {
				case X.pki.oids.rsaEncryption:
				case X.pki.oids.desCBC:
					var r = a.decrypt(t.encryptedContent.content);
					e.encryptedContent.key = X.util.createBuffer(r);
					break;
				default:
					throw new Error("Unsupported asymmetric cipher, OID " + t.encryptedContent.algorithm)
			}
			Vi(e)
		},
		addRecipient: function (t) {
			e.recipients.push({
				version: 0,
				issuer: t.issuer.attributes,
				serialNumber: t.serialNumber,
				encryptedContent: {
					algorithm: X.pki.oids.rsaEncryption,
					key: t.publicKey
				}
			})
		},
		encrypt: function (t, a) {
			if (e.encryptedContent.content === void 0) {
				a = a || e.encryptedContent.algorithm, t = t || e.encryptedContent.key;
				var r, n, i;
				switch (a) {
					case X.pki.oids["aes128-CBC"]:
						r = 16, n = 16, i = X.aes.createEncryptionCipher;
						break;
					case X.pki.oids["aes192-CBC"]:
						r = 24, n = 16, i = X.aes.createEncryptionCipher;
						break;
					case X.pki.oids["aes256-CBC"]:
						r = 32, n = 16, i = X.aes.createEncryptionCipher;
						break;
					case X.pki.oids["des-EDE3-CBC"]:
						r = 24, n = 8, i = X.des.createEncryptionCipher;
						break;
					default:
						throw new Error("Unsupported symmetric cipher, OID " + a)
				}
				if (t === void 0) t = X.util.createBuffer(X.random.getBytes(r));
				else if (t.length() != r) throw new Error("Symmetric key has wrong length; got " + t.length() + " bytes, expected " + r + ".");
				e.encryptedContent.algorithm = a, e.encryptedContent.key = t, e.encryptedContent.parameter = X.util.createBuffer(X.random.getBytes(n));
				var s = i(t);
				if (s.start(e.encryptedContent.parameter.copy()), s.update(e.content), !s.finish()) throw new Error("Symmetric encryption failed.");
				e.encryptedContent.content = s.output
			}
			for (var o = 0; o < e.recipients.length; ++o) {
				var l = e.recipients[o];
				if (l.encryptedContent.content === void 0) switch (l.encryptedContent.algorithm) {
					case X.pki.oids.rsaEncryption:
						l.encryptedContent.content = l.encryptedContent.key.encrypt(e.encryptedContent.key.data);
						break;
					default:
						throw new Error("Unsupported asymmetric cipher, OID " + l.encryptedContent.algorithm)
				}
			}
		}
	}, e
};

function ul(e) {
	var t = {},
		a = [];
	if (!I.validate(e, Ye.asn1.recipientInfoValidator, t, a)) {
		var r = new Error("Cannot read PKCS#7 RecipientInfo. ASN.1 object is not an PKCS#7 RecipientInfo.");
		throw r.errors = a, r
	}
	return {
		version: t.version.charCodeAt(0),
		issuer: X.pki.RDNAttributesAsArray(t.issuer),
		serialNumber: X.util.createBuffer(t.serial).toHex(),
		encryptedContent: {
			algorithm: I.derToOid(t.encAlgorithm),
			parameter: t.encParameter ? t.encParameter.value : void 0,
			content: t.encKey
		}
	}
}

function ll(e) {
	return I.create(I.Class.UNIVERSAL, I.Type.SEQUENCE, !0, [I.create(I.Class.UNIVERSAL, I.Type.INTEGER, !1, I.integerToDer(e.version).getBytes()), I.create(I.Class.UNIVERSAL, I.Type.SEQUENCE, !0, [X.pki.distinguishedNameToAsn1({
		attributes: e.issuer
	}), I.create(I.Class.UNIVERSAL, I.Type.INTEGER, !1, X.util.hexToBytes(e.serialNumber))]), I.create(I.Class.UNIVERSAL, I.Type.SEQUENCE, !0, [I.create(I.Class.UNIVERSAL, I.Type.OID, !1, I.oidToDer(e.encryptedContent.algorithm).getBytes()), I.create(I.Class.UNIVERSAL, I.Type.NULL, !1, "")]), I.create(I.Class.UNIVERSAL, I.Type.OCTETSTRING, !1, e.encryptedContent.content)])
}

function cl(e) {
	for (var t = [], a = 0; a < e.length; ++a) t.push(ul(e[a]));
	return t
}

function hl(e) {
	for (var t = [], a = 0; a < e.length; ++a) t.push(ll(e[a]));
	return t
}

function dl(e) {
	var t = I.create(I.Class.UNIVERSAL, I.Type.SEQUENCE, !0, [I.create(I.Class.UNIVERSAL, I.Type.INTEGER, !1, I.integerToDer(e.version).getBytes()), I.create(I.Class.UNIVERSAL, I.Type.SEQUENCE, !0, [X.pki.distinguishedNameToAsn1({
		attributes: e.issuer
	}), I.create(I.Class.UNIVERSAL, I.Type.INTEGER, !1, X.util.hexToBytes(e.serialNumber))]), I.create(I.Class.UNIVERSAL, I.Type.SEQUENCE, !0, [I.create(I.Class.UNIVERSAL, I.Type.OID, !1, I.oidToDer(e.digestAlgorithm).getBytes()), I.create(I.Class.UNIVERSAL, I.Type.NULL, !1, "")])]);
	if (e.authenticatedAttributesAsn1 && t.value.push(e.authenticatedAttributesAsn1), t.value.push(I.create(I.Class.UNIVERSAL, I.Type.SEQUENCE, !0, [I.create(I.Class.UNIVERSAL, I.Type.OID, !1, I.oidToDer(e.signatureAlgorithm).getBytes()), I.create(I.Class.UNIVERSAL, I.Type.NULL, !1, "")])), t.value.push(I.create(I.Class.UNIVERSAL, I.Type.OCTETSTRING, !1, e.signature)), e.unauthenticatedAttributes.length > 0) {
		for (var a = I.create(I.Class.CONTEXT_SPECIFIC, 1, !0, []), r = 0; r < e.unauthenticatedAttributes.length; ++r) {
			var n = e.unauthenticatedAttributes[r];
			a.values.push(aa(n))
		}
		t.value.push(a)
	}
	return t
}

function xl(e) {
	for (var t = [], a = 0; a < e.length; ++a) t.push(dl(e[a]));
	return t
}

function aa(e) {
	var t;
	if (e.type === X.pki.oids.contentType) t = I.create(I.Class.UNIVERSAL, I.Type.OID, !1, I.oidToDer(e.value).getBytes());
	else if (e.type === X.pki.oids.messageDigest) t = I.create(I.Class.UNIVERSAL, I.Type.OCTETSTRING, !1, e.value.bytes());
	else if (e.type === X.pki.oids.signingTime) {
		var a = new Date("1950-01-01T00:00:00Z"),
			r = new Date("2050-01-01T00:00:00Z"),
			n = e.value;
		if (typeof n == "string") {
			var i = Date.parse(n);
			isNaN(i) ? n.length === 13 ? n = I.utcTimeToDate(n) : n = I.generalizedTimeToDate(n) : n = new Date(i)
		}
		n >= a && n < r ? t = I.create(I.Class.UNIVERSAL, I.Type.UTCTIME, !1, I.dateToUtcTime(n)) : t = I.create(I.Class.UNIVERSAL, I.Type.GENERALIZEDTIME, !1, I.dateToGeneralizedTime(n))
	}
	return I.create(I.Class.UNIVERSAL, I.Type.SEQUENCE, !0, [I.create(I.Class.UNIVERSAL, I.Type.OID, !1, I.oidToDer(e.type).getBytes()), I.create(I.Class.UNIVERSAL, I.Type.SET, !0, [t])])
}

function pl(e) {
	return [I.create(I.Class.UNIVERSAL, I.Type.OID, !1, I.oidToDer(X.pki.oids.data).getBytes()), I.create(I.Class.UNIVERSAL, I.Type.SEQUENCE, !0, [I.create(I.Class.UNIVERSAL, I.Type.OID, !1, I.oidToDer(e.algorithm).getBytes()), e.parameter ? I.create(I.Class.UNIVERSAL, I.Type.OCTETSTRING, !1, e.parameter.getBytes()) : void 0]), I.create(I.Class.CONTEXT_SPECIFIC, 0, !0, [I.create(I.Class.UNIVERSAL, I.Type.OCTETSTRING, !1, e.content.getBytes())])]
}

function Aa(e, t, a) {
	var r = {},
		n = [];
	if (!I.validate(t, a, r, n)) {
		var i = new Error("Cannot read PKCS#7 message. ASN.1 object is not a supported PKCS#7 message.");
		throw i.errors = i, i
	}
	var s = I.derToOid(r.contentType);
	if (s !== X.pki.oids.data) throw new Error("Unsupported PKCS#7 message. Only wrapped ContentType Data supported.");
	if (r.encryptedContent) {
		var o = "";
		if (X.util.isArray(r.encryptedContent))
			for (var l = 0; l < r.encryptedContent.length; ++l) {
				if (r.encryptedContent[l].type !== I.Type.OCTETSTRING) throw new Error("Malformed PKCS#7 message, expecting encrypted content constructed of only OCTET STRING objects.");
				o += r.encryptedContent[l].value
			} else o = r.encryptedContent;
		e.encryptedContent = {
			algorithm: I.derToOid(r.encAlgorithm),
			parameter: X.util.createBuffer(r.encParameter.value),
			content: X.util.createBuffer(o)
		}
	}
	if (r.content) {
		var o = "";
		if (X.util.isArray(r.content))
			for (var l = 0; l < r.content.length; ++l) {
				if (r.content[l].type !== I.Type.OCTETSTRING) throw new Error("Malformed PKCS#7 message, expecting content constructed of only OCTET STRING objects.");
				o += r.content[l].value
			} else o = r.content;
		e.content = X.util.createBuffer(o)
	}
	return e.version = r.version.charCodeAt(0), e.rawCapture = r, r
}

function Vi(e) {
	if (e.encryptedContent.key === void 0) throw new Error("Symmetric key not available.");
	if (e.content === void 0) {
		var t;
		switch (e.encryptedContent.algorithm) {
			case X.pki.oids["aes128-CBC"]:
			case X.pki.oids["aes192-CBC"]:
			case X.pki.oids["aes256-CBC"]:
				t = X.aes.createDecryptionCipher(e.encryptedContent.key);
				break;
			case X.pki.oids.desCBC:
			case X.pki.oids["des-EDE3-CBC"]:
				t = X.des.createDecryptionCipher(e.encryptedContent.key);
				break;
			default:
				throw new Error("Unsupported symmetric cipher, OID " + e.encryptedContent.algorithm)
		}
		if (t.start(e.encryptedContent.parameter), t.update(e.encryptedContent.content), !t.finish()) throw new Error("Symmetric decryption failed.");
		e.content = t.output
	}
}
var Pe = le,
	jr = Pe.ssh = Pe.ssh || {};
jr.privateKeyToPutty = function (e, t, a) {
	a = a || "", t = t || "";
	var r = "ssh-rsa",
		n = t === "" ? "none" : "aes256-cbc",
		i = "PuTTY-User-Key-File-2: " + r + `\r
`;
	i += "Encryption: " + n + `\r
`, i += "Comment: " + a + `\r
`;
	var s = Pe.util.createBuffer();
	jt(s, r), ht(s, e.e), ht(s, e.n);
	var o = Pe.util.encode64(s.bytes(), 64),
		l = Math.floor(o.length / 66) + 1;
	i += "Public-Lines: " + l + `\r
`, i += o;
	var f = Pe.util.createBuffer();
	ht(f, e.d), ht(f, e.p), ht(f, e.q), ht(f, e.qInv);
	var u;
	if (!t) u = Pe.util.encode64(f.bytes(), 64);
	else {
		var c = f.length() + 16 - 1;
		c -= c % 16;
		var h = br(f.bytes());
		h.truncate(h.length() - c + f.length()), f.putBuffer(h);
		var x = Pe.util.createBuffer();
		x.putBuffer(br("\0\0\0\0", t)), x.putBuffer(br("\0\0\0", t));
		var d = Pe.aes.createEncryptionCipher(x.truncate(8), "CBC");
		d.start(Pe.util.createBuffer().fillWithByte(0, 16)), d.update(f.copy()), d.finish();
		var g = d.output;
		g.truncate(16), u = Pe.util.encode64(g.bytes(), 64)
	}
	l = Math.floor(u.length / 66) + 1, i += `\r
Private-Lines: ` + l + `\r
`, i += u;
	var v = br("putty-private-key-file-mac-key", t),
		B = Pe.util.createBuffer();
	jt(B, r), jt(B, n), jt(B, a), B.putInt32(s.length()), B.putBuffer(s), B.putInt32(f.length()), B.putBuffer(f);
	var E = Pe.hmac.create();
	return E.start("sha1", v), E.update(B.bytes()), i += `\r
Private-MAC: ` + E.digest().toHex() + `\r
`, i
};
jr.publicKeyToOpenSSH = function (e, t) {
	var a = "ssh-rsa";
	t = t || "";
	var r = Pe.util.createBuffer();
	return jt(r, a), ht(r, e.e), ht(r, e.n), a + " " + Pe.util.encode64(r.bytes()) + " " + t
};
jr.privateKeyToOpenSSH = function (e, t) {
	return t ? Pe.pki.encryptRsaPrivateKey(e, t, {
		legacy: !0,
		algorithm: "aes128"
	}) : Pe.pki.privateKeyToPem(e)
};
jr.getPublicKeyFingerprint = function (e, t) {
	t = t || {};
	var a = t.md || Pe.md.md5.create(),
		r = "ssh-rsa",
		n = Pe.util.createBuffer();
	jt(n, r), ht(n, e.e), ht(n, e.n), a.start(), a.update(n.getBytes());
	var i = a.digest();
	if (t.encoding === "hex") {
		var s = i.toHex();
		return t.delimiter ? s.match(/.{2}/g).join(t.delimiter) : s
	} else {
		if (t.encoding === "binary") return i.getBytes();
		if (t.encoding) throw new Error('Unknown encoding "' + t.encoding + '".')
	}
	return i
};

function ht(e, t) {
	var a = t.toString(16);
	a[0] >= "8" && (a = "00" + a);
	var r = Pe.util.hexToBytes(a);
	e.putInt32(r.length), e.putBytes(r)
}

function jt(e, t) {
	e.putInt32(t.length), e.putString(t)
}

function br() {
	for (var e = Pe.md.sha1.create(), t = arguments.length, a = 0; a < t; ++a) e.update(arguments[a]);
	return e.digest()
}
var vl = le;
const gl = Gn(vl);
export {
	yl as C, Zi as a, ue as c, gl as f, Gn as g
};
//# sourceMappingURL=auth-72H9TcpW.js.map