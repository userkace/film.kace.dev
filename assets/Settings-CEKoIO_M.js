import {
     r as N,
     j as t,
     c as L,
     p as Ht
} from "./vendor-Dkz3gcSC.js";
import {
     S as ct,
     U as je,
     A as U,
     V as un,
     u as Kt,
     W as gn,
     X as He,
     Y as ot,
     B as q,
     Z as zt,
     _ as Ft,
     $ as hn,
     a0 as Gt,
     a1 as It,
     a2 as mn,
     a3 as $t,
     a4 as dt,
     a5 as we,
     a6 as it,
     a7 as fn,
     a8 as xn,
     a9 as pn,
     o as Wt,
     aa as bn,
     L as qt,
     z as yn,
     ab as vn,
     ac as Xt,
     ad as Ke,
     ae as ut,
     af as Yt,
     ag as lt,
     ah as jn,
     ai as Zt,
     aj as wn,
     k as Nn,
     ak as Bt,
     al as Cn,
     am as Sn,
     an as _n,
     ao as Ut,
     ap as Lt,
     aq as Ot,
     ar as Me,
     as as Tn,
     at as An,
     au as Pn,
     av as kn,
     aw as En,
     ax as In,
     ay as Bn
} from "./index-DYBNcHgS.js";
import {
     c as Re,
     g as Un
} from "./auth-72H9TcpW.js";
import {
     b as C,
     d as gt,
     H as Ln,
     a as Jt,
     T as Qt,
     k as On
} from "./react-dom-DpNJ2UNC.js";
import {
     I as ie,
     a as k,
     s as Dn,
     F as Mn,
     g as Rn
} from "./Icons-Ct84pi7p.js";
import "./hls-2_Gpnevg.js";
import "./language-db-DxKZVAm4.js";
import "./caption-parsing-BABN6jyO.js";
import {
     S as Hn
} from "./StatusCircle-D7h8AcdR.js";
import "./locales-BXkJCeK5.js";
var ze = {
     exports: {}
};
ze.exports;
(function (s, i) {
     var r = 200,
          o = "__lodash_hash_undefined__",
          c = 1,
          f = 2,
          g = 9007199254740991,
          u = "[object Arguments]",
          x = "[object Array]",
          D = "[object AsyncFunction]",
          E = "[object Boolean]",
          w = "[object Date]",
          M = "[object Error]",
          z = "[object Function]",
          V = "[object GeneratorFunction]",
          F = "[object Map]",
          I = "[object Number]",
          v = "[object Null]",
          B = "[object Object]",
          X = "[object Promise]",
          ee = "[object Proxy]",
          R = "[object RegExp]",
          Y = "[object Set]",
          re = "[object String]",
          h = "[object Symbol]",
          me = "[object Undefined]",
          te = "[object WeakMap]",
          d = "[object ArrayBuffer]",
          S = "[object DataView]",
          T = "[object Float32Array]",
          Ne = "[object Float64Array]",
          Fe = "[object Int8Array]",
          Ge = "[object Int16Array]",
          $e = "[object Int32Array]",
          Ce = "[object Uint8Array]",
          We = "[object Uint8ClampedArray]",
          qe = "[object Uint16Array]",
          Xe = "[object Uint32Array]",
          Se = /[\\^$.*+?()[\]{}|]/g,
          Ye = /^\[object .+?Constructor\]$/,
          Ze = /^(?:0|[1-9]\d*)$/,
          p = {};
     p[T] = p[Ne] = p[Fe] = p[Ge] = p[$e] = p[Ce] = p[We] = p[qe] = p[Xe] = !0, p[u] = p[x] = p[d] = p[E] = p[S] = p[w] = p[M] = p[z] = p[F] = p[I] = p[B] = p[R] = p[Y] = p[re] = p[te] = !1;
     var fe = typeof Re == "object" && Re && Re.Object === Object && Re,
          Je = typeof self == "object" && self && self.Object === Object && self,
          G = fe || Je || Function("return this")(),
          _e = i && !i.nodeType && i,
          xe = _e && !0 && s && !s.nodeType && s,
          Te = xe && xe.exports === _e,
          Ae = Te && fe.process,
          Pe = function () {
               try {
                    return Ae && Ae.binding && Ae.binding("util")
               } catch {}
          }(),
          ht = Pe && Pe.isTypedArray;

     function es(e, n) {
          for (var a = -1, l = e == null ? 0 : e.length, b = 0, m = []; ++a < l;) {
               var j = e[a];
               n(j, a, e) && (m[b++] = j)
          }
          return m
     }

     function ts(e, n) {
          for (var a = -1, l = n.length, b = e.length; ++a < l;) e[b + a] = n[a];
          return e
     }

     function ss(e, n) {
          for (var a = -1, l = e == null ? 0 : e.length; ++a < l;)
               if (n(e[a], a, e)) return !0;
          return !1
     }

     function ns(e, n) {
          for (var a = -1, l = Array(e); ++a < e;) l[a] = n(a);
          return l
     }

     function as(e) {
          return function (n) {
               return e(n)
          }
     }

     function is(e, n) {
          return e.has(n)
     }

     function rs(e, n) {
          return e == null ? void 0 : e[n]
     }

     function cs(e) {
          var n = -1,
               a = Array(e.size);
          return e.forEach(function (l, b) {
               a[++n] = [b, l]
          }), a
     }

     function ls(e, n) {
          return function (a) {
               return e(n(a))
          }
     }

     function os(e) {
          var n = -1,
               a = Array(e.size);
          return e.forEach(function (l) {
               a[++n] = l
          }), a
     }
     var ds = Array.prototype,
          us = Function.prototype,
          ke = Object.prototype,
          Qe = G["__core-js_shared__"],
          mt = us.toString,
          W = ke.hasOwnProperty,
          ft = function () {
               var e = /[^.]+$/.exec(Qe && Qe.keys && Qe.keys.IE_PROTO || "");
               return e ? "Symbol(src)_1." + e : ""
          }(),
          xt = ke.toString,
          gs = RegExp("^" + mt.call(W).replace(Se, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          pt = Te ? G.Buffer : void 0,
          Ee = G.Symbol,
          bt = G.Uint8Array,
          yt = ke.propertyIsEnumerable,
          hs = ds.splice,
          ce = Ee ? Ee.toStringTag : void 0,
          vt = Object.getOwnPropertySymbols,
          ms = pt ? pt.isBuffer : void 0,
          fs = ls(Object.keys, Object),
          Ve = ge(G, "DataView"),
          pe = ge(G, "Map"),
          et = ge(G, "Promise"),
          tt = ge(G, "Set"),
          st = ge(G, "WeakMap"),
          be = ge(Object, "create"),
          xs = de(Ve),
          ps = de(pe),
          bs = de(et),
          ys = de(tt),
          vs = de(st),
          jt = Ee ? Ee.prototype : void 0,
          nt = jt ? jt.valueOf : void 0;

     function le(e) {
          var n = -1,
               a = e == null ? 0 : e.length;
          for (this.clear(); ++n < a;) {
               var l = e[n];
               this.set(l[0], l[1])
          }
     }

     function js() {
          this.__data__ = be ? be(null) : {}, this.size = 0
     }

     function ws(e) {
          var n = this.has(e) && delete this.__data__[e];
          return this.size -= n ? 1 : 0, n
     }

     function Ns(e) {
          var n = this.__data__;
          if (be) {
               var a = n[e];
               return a === o ? void 0 : a
          }
          return W.call(n, e) ? n[e] : void 0
     }

     function Cs(e) {
          var n = this.__data__;
          return be ? n[e] !== void 0 : W.call(n, e)
     }

     function Ss(e, n) {
          var a = this.__data__;
          return this.size += this.has(e) ? 0 : 1, a[e] = be && n === void 0 ? o : n, this
     }
     le.prototype.clear = js, le.prototype.delete = ws, le.prototype.get = Ns, le.prototype.has = Cs, le.prototype.set = Ss;

     function Z(e) {
          var n = -1,
               a = e == null ? 0 : e.length;
          for (this.clear(); ++n < a;) {
               var l = e[n];
               this.set(l[0], l[1])
          }
     }

     function _s() {
          this.__data__ = [], this.size = 0
     }

     function Ts(e) {
          var n = this.__data__,
               a = Be(n, e);
          if (a < 0) return !1;
          var l = n.length - 1;
          return a == l ? n.pop() : hs.call(n, a, 1), --this.size, !0
     }

     function As(e) {
          var n = this.__data__,
               a = Be(n, e);
          return a < 0 ? void 0 : n[a][1]
     }

     function Ps(e) {
          return Be(this.__data__, e) > -1
     }

     function ks(e, n) {
          var a = this.__data__,
               l = Be(a, e);
          return l < 0 ? (++this.size, a.push([e, n])) : a[l][1] = n, this
     }
     Z.prototype.clear = _s, Z.prototype.delete = Ts, Z.prototype.get = As, Z.prototype.has = Ps, Z.prototype.set = ks;

     function oe(e) {
          var n = -1,
               a = e == null ? 0 : e.length;
          for (this.clear(); ++n < a;) {
               var l = e[n];
               this.set(l[0], l[1])
          }
     }

     function Es() {
          this.size = 0, this.__data__ = {
               hash: new le,
               map: new(pe || Z),
               string: new le
          }
     }

     function Is(e) {
          var n = Ue(this, e).delete(e);
          return this.size -= n ? 1 : 0, n
     }

     function Bs(e) {
          return Ue(this, e).get(e)
     }

     function Us(e) {
          return Ue(this, e).has(e)
     }

     function Ls(e, n) {
          var a = Ue(this, e),
               l = a.size;
          return a.set(e, n), this.size += a.size == l ? 0 : 1, this
     }
     oe.prototype.clear = Es, oe.prototype.delete = Is, oe.prototype.get = Bs, oe.prototype.has = Us, oe.prototype.set = Ls;

     function Ie(e) {
          var n = -1,
               a = e == null ? 0 : e.length;
          for (this.__data__ = new oe; ++n < a;) this.add(e[n])
     }

     function Os(e) {
          return this.__data__.set(e, o), this
     }

     function Ds(e) {
          return this.__data__.has(e)
     }
     Ie.prototype.add = Ie.prototype.push = Os, Ie.prototype.has = Ds;

     function se(e) {
          var n = this.__data__ = new Z(e);
          this.size = n.size
     }

     function Ms() {
          this.__data__ = new Z, this.size = 0
     }

     function Rs(e) {
          var n = this.__data__,
               a = n.delete(e);
          return this.size = n.size, a
     }

     function Hs(e) {
          return this.__data__.get(e)
     }

     function Ks(e) {
          return this.__data__.has(e)
     }

     function zs(e, n) {
          var a = this.__data__;
          if (a instanceof Z) {
               var l = a.__data__;
               if (!pe || l.length < r - 1) return l.push([e, n]), this.size = ++a.size, this;
               a = this.__data__ = new oe(l)
          }
          return a.set(e, n), this.size = a.size, this
     }
     se.prototype.clear = Ms, se.prototype.delete = Rs, se.prototype.get = Hs, se.prototype.has = Ks, se.prototype.set = zs;

     function Fs(e, n) {
          var a = Le(e),
               l = !a && an(e),
               b = !a && !l && at(e),
               m = !a && !l && !b && kt(e),
               j = a || l || b || m,
               _ = j ? ns(e.length, String) : [],
               A = _.length;
          for (var y in e)(n || W.call(e, y)) && !(j && (y == "length" || b && (y == "offset" || y == "parent") || m && (y == "buffer" || y == "byteLength" || y == "byteOffset") || Vs(y, A))) && _.push(y);
          return _
     }

     function Be(e, n) {
          for (var a = e.length; a--;)
               if (_t(e[a][0], n)) return a;
          return -1
     }

     function Gs(e, n, a) {
          var l = n(e);
          return Le(e) ? l : ts(l, a(e))
     }

     function ye(e) {
          return e == null ? e === void 0 ? me : v : ce && ce in Object(e) ? Js(e) : nn(e)
     }

     function wt(e) {
          return ve(e) && ye(e) == u
     }

     function Nt(e, n, a, l, b) {
          return e === n ? !0 : e == null || n == null || !ve(e) && !ve(n) ? e !== e && n !== n : $s(e, n, a, l, Nt, b)
     }

     function $s(e, n, a, l, b, m) {
          var j = Le(e),
               _ = Le(n),
               A = j ? x : ne(e),
               y = _ ? x : ne(n);
          A = A == u ? B : A, y = y == u ? B : y;
          var O = A == B,
               $ = y == B,
               P = A == y;
          if (P && at(e)) {
               if (!at(n)) return !1;
               j = !0, O = !1
          }
          if (P && !O) return m || (m = new se), j || kt(e) ? Ct(e, n, a, l, b, m) : Ys(e, n, A, a, l, b, m);
          if (!(a & c)) {
               var H = O && W.call(e, "__wrapped__"),
                    K = $ && W.call(n, "__wrapped__");
               if (H || K) {
                    var ae = H ? e.value() : e,
                         J = K ? n.value() : n;
                    return m || (m = new se), b(ae, J, a, l, m)
               }
          }
          return P ? (m || (m = new se), Zs(e, n, a, l, b, m)) : !1
     }

     function Ws(e) {
          if (!Pt(e) || tn(e)) return !1;
          var n = Tt(e) ? gs : Ye;
          return n.test(de(e))
     }

     function qs(e) {
          return ve(e) && At(e.length) && !!p[ye(e)]
     }

     function Xs(e) {
          if (!sn(e)) return fs(e);
          var n = [];
          for (var a in Object(e)) W.call(e, a) && a != "constructor" && n.push(a);
          return n
     }

     function Ct(e, n, a, l, b, m) {
          var j = a & c,
               _ = e.length,
               A = n.length;
          if (_ != A && !(j && A > _)) return !1;
          var y = m.get(e);
          if (y && m.get(n)) return y == n;
          var O = -1,
               $ = !0,
               P = a & f ? new Ie : void 0;
          for (m.set(e, n), m.set(n, e); ++O < _;) {
               var H = e[O],
                    K = n[O];
               if (l) var ae = j ? l(K, H, O, n, e, m) : l(H, K, O, e, n, m);
               if (ae !== void 0) {
                    if (ae) continue;
                    $ = !1;
                    break
               }
               if (P) {
                    if (!ss(n, function (J, ue) {
                              if (!is(P, ue) && (H === J || b(H, J, a, l, m))) return P.push(ue)
                         })) {
                         $ = !1;
                         break
                    }
               } else if (!(H === K || b(H, K, a, l, m))) {
                    $ = !1;
                    break
               }
          }
          return m.delete(e), m.delete(n), $
     }

     function Ys(e, n, a, l, b, m, j) {
          switch (a) {
               case S:
                    if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset) return !1;
                    e = e.buffer, n = n.buffer;
               case d:
                    return !(e.byteLength != n.byteLength || !m(new bt(e), new bt(n)));
               case E:
               case w:
               case I:
                    return _t(+e, +n);
               case M:
                    return e.name == n.name && e.message == n.message;
               case R:
               case re:
                    return e == n + "";
               case F:
                    var _ = cs;
               case Y:
                    var A = l & c;
                    if (_ || (_ = os), e.size != n.size && !A) return !1;
                    var y = j.get(e);
                    if (y) return y == n;
                    l |= f, j.set(e, n);
                    var O = Ct(_(e), _(n), l, b, m, j);
                    return j.delete(e), O;
               case h:
                    if (nt) return nt.call(e) == nt.call(n)
          }
          return !1
     }

     function Zs(e, n, a, l, b, m) {
          var j = a & c,
               _ = St(e),
               A = _.length,
               y = St(n),
               O = y.length;
          if (A != O && !j) return !1;
          for (var $ = A; $--;) {
               var P = _[$];
               if (!(j ? P in n : W.call(n, P))) return !1
          }
          var H = m.get(e);
          if (H && m.get(n)) return H == n;
          var K = !0;
          m.set(e, n), m.set(n, e);
          for (var ae = j; ++$ < A;) {
               P = _[$];
               var J = e[P],
                    ue = n[P];
               if (l) var Et = j ? l(ue, J, P, n, e, m) : l(J, ue, P, e, n, m);
               if (!(Et === void 0 ? J === ue || b(J, ue, a, l, m) : Et)) {
                    K = !1;
                    break
               }
               ae || (ae = P == "constructor")
          }
          if (K && !ae) {
               var Oe = e.constructor,
                    De = n.constructor;
               Oe != De && "constructor" in e && "constructor" in n && !(typeof Oe == "function" && Oe instanceof Oe && typeof De == "function" && De instanceof De) && (K = !1)
          }
          return m.delete(e), m.delete(n), K
     }

     function St(e) {
          return Gs(e, ln, Qs)
     }

     function Ue(e, n) {
          var a = e.__data__;
          return en(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map
     }

     function ge(e, n) {
          var a = rs(e, n);
          return Ws(a) ? a : void 0
     }

     function Js(e) {
          var n = W.call(e, ce),
               a = e[ce];
          try {
               e[ce] = void 0;
               var l = !0
          } catch {}
          var b = xt.call(e);
          return l && (n ? e[ce] = a : delete e[ce]), b
     }
     var Qs = vt ? function (e) {
               return e == null ? [] : (e = Object(e), es(vt(e), function (n) {
                    return yt.call(e, n)
               }))
          } : on,
          ne = ye;
     (Ve && ne(new Ve(new ArrayBuffer(1))) != S || pe && ne(new pe) != F || et && ne(et.resolve()) != X || tt && ne(new tt) != Y || st && ne(new st) != te) && (ne = function (e) {
          var n = ye(e),
               a = n == B ? e.constructor : void 0,
               l = a ? de(a) : "";
          if (l) switch (l) {
               case xs:
                    return S;
               case ps:
                    return F;
               case bs:
                    return X;
               case ys:
                    return Y;
               case vs:
                    return te
          }
          return n
     });

     function Vs(e, n) {
          return n = n ?? g, !!n && (typeof e == "number" || Ze.test(e)) && e > -1 && e % 1 == 0 && e < n
     }

     function en(e) {
          var n = typeof e;
          return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null
     }

     function tn(e) {
          return !!ft && ft in e
     }

     function sn(e) {
          var n = e && e.constructor,
               a = typeof n == "function" && n.prototype || ke;
          return e === a
     }

     function nn(e) {
          return xt.call(e)
     }

     function de(e) {
          if (e != null) {
               try {
                    return mt.call(e)
               } catch {}
               try {
                    return e + ""
               } catch {}
          }
          return ""
     }

     function _t(e, n) {
          return e === n || e !== e && n !== n
     }
     var an = wt(function () {
               return arguments
          }()) ? wt : function (e) {
               return ve(e) && W.call(e, "callee") && !yt.call(e, "callee")
          },
          Le = Array.isArray;

     function rn(e) {
          return e != null && At(e.length) && !Tt(e)
     }
     var at = ms || dn;

     function cn(e, n) {
          return Nt(e, n)
     }

     function Tt(e) {
          if (!Pt(e)) return !1;
          var n = ye(e);
          return n == z || n == V || n == D || n == ee
     }

     function At(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= g
     }

     function Pt(e) {
          var n = typeof e;
          return e != null && (n == "object" || n == "function")
     }

     function ve(e) {
          return e != null && typeof e == "object"
     }
     var kt = ht ? as(ht) : qs;

     function ln(e) {
          return rn(e) ? Fs(e) : Xs(e)
     }

     function on() {
          return []
     }

     function dn() {
          return !1
     }
     s.exports = cn
})(ze, ze.exports);
var Kn = ze.exports;
const zn = Un(Kn);

function Q(s) {
     const [i, r] = N.useState(void 0);
     N.useEffect(() => {
          r(void 0)
     }, [s]);
     const o = N.useMemo(() => !zn(i, s) && i !== void 0, [i, s]),
          c = N.useCallback(u => {
               u instanceof Function ? r(x => u(x !== void 0 ? x : s)) : r(u)
          }, [s, r]),
          f = i === void 0 ? s : i,
          g = N.useCallback(() => r(void 0), [r]);
     return [f, c, g, o]
}

function Fn(s, i, r, o, c, f, g, u, x) {
     const [D, E, w, M] = Q(c), [z, V, F, I] = Q(f), [v, B, X, ee] = Q(s), R = ct(Pe => Pe.setPreviewTheme), Y = N.useCallback(() => R(s), [R, s]), [re, h, me, te] = Q(i), [d, S, T, Ne] = Q(r), [Fe, Ge, $e, Ce] = Q(o), [We, qe, Xe, Se] = Q(g), [Ye, Ze, p, fe] = Q(u), [Je, G, _e, xe] = Q(x);

     function Te() {
          X(), Y(), me(), T(), w(), F(), $e(), Xe(), p(), _e()
     }
     return {
          reset: Te,
          changed: ee || te || Ne || Ce || I || M || Se || fe || xe,
          theme: {
               state: v,
               set: B,
               changed: ee
          },
          appLanguage: {
               state: re,
               set: h,
               changed: te
          },
          subtitleStyling: {
               state: d,
               set: S,
               changed: Ne
          },
          deviceName: {
               state: Fe,
               set: Ge,
               changed: Ce
          },
          proxyUrls: {
               state: D,
               set: E,
               changed: M
          },
          backendUrl: {
               state: z,
               set: V,
               changed: I
          },
          profile: {
               state: We,
               set: qe,
               changed: Se
          },
          enableThumbnails: {
               state: Ye,
               set: Ze,
               changed: fe
          },
          enableAutoplay: {
               state: Je,
               set: G,
               changed: xe
          }
     }
}

function he(s) {
     return t.jsx("div", {
          className: L("w-full rounded-lg bg-settings-card-background bg-opacity-[0.15] border border-settings-card-border", s.paddingClass ?? "px-8 py-6", s.className),
          children: s.children
     })
}

function Vt(s) {
     return t.jsx("div", {
          className: L("w-full rounded-lg bg-settings-card-altBackground bg-opacity-50", s.paddingClass ?? "px-8 py-6", s.className),
          children: s.children
     })
}

function Gn() {
     const {
          t: s
     } = C(), i = je(), r = U(u => u.account), {
          logout: o
     } = un(), c = Kt("account-delete"), [f, g] = gt(async () => {
          !r || !i || (await gn(i, r), await o(), c.hide())
     }, [o, r, i, c.hide]);
     return r ? t.jsxs("div", {
          children: [t.jsx(He, {
               border: !0,
               children: s("settings.account.actions.title")
          }), t.jsxs(Vt, {
               paddingClass: "px-6 py-12",
               className: "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12",
               children: [t.jsxs("div", {
                    children: [t.jsx(ot, {
                         children: s("settings.account.actions.delete.title")
                    }), t.jsx("p", {
                         className: "text-type-text",
                         children: s("settings.account.actions.delete.text")
                    })]
               }), t.jsx("div", {
                    className: "flex justify-start lg:justify-end items-center",
                    children: t.jsx(q, {
                         theme: "danger",
                         loading: f.loading,
                         onClick: c.show,
                         children: s("settings.account.actions.delete.button")
                    })
               })]
          }), t.jsx(zt, {
               id: c.id,
               children: t.jsxs(Ft, {
                    children: [t.jsx(He, {
                         className: "!mt-0",
                         children: s("settings.account.actions.delete.confirmTitle")
                    }), t.jsx(hn, {
                         children: s("settings.account.actions.delete.confirmDescription")
                    }), t.jsx(q, {
                         theme: "danger",
                         loading: f.loading,
                         onClick: g,
                         children: s("settings.account.actions.delete.confirmButton")
                    })]
               })
          })]
     }) : null
}

function $n(s) {
     const {
          t: i
     } = C();
     return t.jsx(zt, {
          id: s.id,
          children: t.jsxs(Ft, {
               children: [t.jsxs("div", {
                    className: "flex justify-between items-center mb-9",
                    children: [t.jsx(He, {
                         className: "!mt-0 !mb-0",
                         children: i("settings.account.profile.title")
                    }), t.jsx(Gt, {
                         profile: {
                              colorA: s.colorA,
                              colorB: s.colorB,
                              icon: s.userIcon
                         },
                         iconClass: "text-2xl",
                         sizeClass: "w-12 h-12"
                    })]
               }), t.jsxs("div", {
                    className: "space-y-6",
                    children: [t.jsx(It, {
                         label: i("settings.account.profile.firstColor"),
                         value: s.colorA,
                         onInput: s.setColorA
                    }), t.jsx(It, {
                         label: i("settings.account.profile.secondColor"),
                         value: s.colorB,
                         onInput: s.setColorB
                    }), t.jsx(mn, {
                         label: i("settings.account.profile.userIcon"),
                         value: s.userIcon,
                         onInput: s.setUserIcon
                    })]
               }), t.jsx("div", {
                    className: "flex justify-center mt-8",
                    children: t.jsx(q, {
                         theme: "purple",
                         className: "!px-20",
                         onClick: s.close,
                         children: i("settings.account.profile.finish")
                    })
               })]
          })
     })
}

function Wn(s) {
     const {
          t: i
     } = C(), {
          logout: r
     } = $t(), o = Kt("profile-edit");
     return t.jsxs(he, {
          paddingClass: "px-8 py-10",
          className: "!mt-8",
          children: [t.jsx($n, {
               id: o.id,
               close: o.hide,
               colorA: s.colorA,
               setColorA: s.setColorA,
               colorB: s.colorB,
               setColorB: s.setColorB,
               userIcon: s.userIcon,
               setUserIcon: s.setUserIcon
          }), t.jsxs("div", {
               className: "grid lg:grid-cols-[auto,1fr] gap-8",
               children: [t.jsx("div", {
                    children: t.jsx(Gt, {
                         profile: {
                              colorA: s.colorA,
                              colorB: s.colorB,
                              icon: s.userIcon
                         },
                         iconClass: "text-5xl",
                         sizeClass: "w-32 h-32",
                         bottom: t.jsxs("button", {
                              type: "button",
                              className: "tabbable text-xs flex gap-2 items-center bg-editBadge-bg text-editBadge-text hover:bg-editBadge-bgHover py-1 px-3 rounded-full cursor-pointer",
                              onClick: o.show,
                              children: [t.jsx(ie, {
                                   icon: k.EDIT
                              }), i("settings.account.accountDetails.editProfile")]
                         })
                    })
               }), t.jsx("div", {
                    children: t.jsxs("div", {
                         className: "space-y-8 max-w-xs",
                         children: [t.jsx(dt, {
                              label: i("settings.account.accountDetails.deviceNameLabel") ?? void 0,
                              placeholder: i("settings.account.accountDetails.deviceNamePlaceholder") ?? void 0,
                              value: s.deviceName,
                              onChange: c => s.setDeviceName(c)
                         }), t.jsx("div", {
                              className: "flex space-x-3",
                              children: t.jsx(q, {
                                   theme: "danger",
                                   onClick: r,
                                   children: i("settings.account.accountDetails.logoutButton")
                              })
                         })]
                    })
               })]
          })]
     })
}

function Dt(s) {
     const {
          t: i
     } = C();
     return t.jsxs("div", {
          className: L({
               "pointer-events-none overflow-hidden w-full rounded": !0,
               "aspect-video relative": !s.fullscreen,
               "fixed inset-0 z-[60]": s.fullscreen
          }),
          children: [s.fullscreen && s.show ? t.jsx(Ln, {
               children: t.jsx("html", {
                    "data-no-scroll": !0
               })
          }) : null, t.jsx(Wt, {
               animation: "fade",
               show: s.show,
               children: t.jsxs("div", {
                    className: "absolute inset-0 pointer-events-auto",
                    style: {
                         backgroundImage: "radial-gradient(102.95% 87.07% at 100% 100%, #EEAA45 0%, rgba(165, 186, 151, 0.56) 54.69%, rgba(74, 207, 254, 0.00) 100%), linear-gradient(180deg, #48D3FF 0%, #3B27B2 100%)"
                    },
                    children: [t.jsx("button", {
                         type: "button",
                         className: "tabbable bg-black absolute right-3 top-3 text-white bg-opacity-25 duration-100 transition-[background-color,transform] active:scale-110 hover:bg-opacity-50 p-2 rounded-md cursor-pointer",
                         onClick: s.onToggle,
                         children: t.jsx(ie, {
                              icon: s.fullscreen ? k.X : k.EXPAND
                         })
                    }), t.jsx("div", {
                         className: "text-white pointer-events-none absolute flex w-full flex-col items-center transition-[bottom] bottom-0 p-4",
                         children: t.jsx("div", {
                              className: s.fullscreen ? "" : "transform origin-bottom text-[0.5rem]",
                              children: t.jsx(bn, {
                                   text: i("settings.subtitles.previewQuote") ?? void 0,
                                   styling: s.styling,
                                   overrideCasing: !1
                              })
                         })
                    })]
               })
          })]
     })
}

function qn(s) {
     const {
          t: i
     } = C(), [r, o] = N.useState(!1);
     return t.jsxs("div", {
          children: [t.jsx(we, {
               border: !0,
               children: i("settings.subtitles.title")
          }), t.jsxs("div", {
               className: "grid md:grid-cols-[1fr,356px] gap-8",
               children: [t.jsxs("div", {
                    className: "space-y-6",
                    children: [t.jsx(it, {
                         label: i("settings.subtitles.backgroundLabel"),
                         max: 100,
                         min: 0,
                         onChange: c => s.setStyling({
                              ...s.styling,
                              backgroundOpacity: c / 100
                         }),
                         value: s.styling.backgroundOpacity * 100,
                         textTransformer: c => `${c}%`
                    }), t.jsx(it, {
                         label: i("settings.subtitles.backgroundBlurLabel"),
                         max: 100,
                         min: 0,
                         onChange: c => s.setStyling({
                              ...s.styling,
                              backgroundBlur: c / 100
                         }),
                         value: s.styling.backgroundBlur * 100,
                         textTransformer: c => `${c}%`
                    }), t.jsx(it, {
                         label: i("settings.subtitles.textSizeLabel"),
                         max: 200,
                         min: 1,
                         textTransformer: c => `${c}%`,
                         onChange: c => s.setStyling({
                              ...s.styling,
                              size: c / 100
                         }),
                         value: s.styling.size * 100
                    }), t.jsxs("div", {
                         className: "flex justify-between items-center",
                         children: [t.jsx(fn.FieldTitle, {
                              children: i("settings.subtitles.colorLabel")
                         }), t.jsx("div", {
                              className: "flex justify-center items-center",
                              children: xn.map(c => t.jsx(pn, {
                                   onClick: () => s.setStyling({
                                        ...s.styling,
                                        color: c
                                   }),
                                   color: c,
                                   active: s.styling.color === c
                              }, c))
                         })]
                    })]
               }), t.jsx(Dt, {
                    show: !0,
                    styling: s.styling,
                    onToggle: () => o(c => !c)
               }), t.jsx(Dt, {
                    show: r,
                    fullscreen: !0,
                    styling: s.styling,
                    onToggle: () => o(c => !c)
               })]
          })]
     })
}
const Mt = "https://postman-echo.com/get";

function Xn(s) {
     return new Promise((i, r) => {
          setTimeout(() => r(new Error("Timed out!")), 3e3), vn(s, Mt, {}).then(o => {
               if (o.url !== Mt) return r(new Error("Not a proxy"));
               i()
          }).catch(r)
     })
}

function Yn() {
     const s = U(c => c.proxySet),
          {
               loading: i,
               value: r
          } = Jt(async () => {
               const c = await yn() ? "success" : "unset";
               let f = "unset";
               if (s && s.length > 0) try {
                    await Xn(s[0]), f = "success"
               } catch {
                    f = "error"
               }
               return {
                    extension: c,
                    proxy: f,
                    defaultProxy: "success"
               }
          }, [s]);
     let o = "unset";
     return ((r == null ? void 0 : r.extension) === "success" || (r == null ? void 0 : r.proxy) === "success") && (o = "success"), ((r == null ? void 0 : r.proxy) === "error" || (r == null ? void 0 : r.extension) === "error") && (o = "error"), {
          setupStates: r,
          globalState: o,
          loading: i
     }
}

function rt(s) {
     const {
          t: i
     } = C(), r = {
          error: "error",
          success: "success",
          unset: "noresult"
     };
     return t.jsxs("div", {
          className: "flex items-start text-type-dimmed my-4",
          children: [t.jsx(Hn, {
               type: r[s.status],
               className: L({
                    "!text-video-scraping-noresult !bg-video-scraping-noresult opacity-50": s.grey,
                    "scale-90 mr-3": !0
               })
          }), t.jsxs("div", {
               children: [t.jsx("p", {
                    className: L({
                         "!text-white": s.grey && s.highlight,
                         "!text-type-dimmed opacity-75": s.grey && !s.highlight,
                         "text-type-danger": s.status === "error",
                         "text-white": s.status === "success"
                    }),
                    children: s.children
               }), s.status === "error" ? t.jsx("p", {
                    className: "max-w-96",
                    children: i("settings.connections.setup.itemError")
               }) : null]
          })]
     })
}

function Zn() {
     const {
          t: s
     } = C(), i = Ht(), {
          loading: r,
          setupStates: o,
          globalState: c
     } = Yn();
     if (r || !o) return t.jsx(he, {
          children: t.jsx("div", {
               className: "flex py-6 items-center justify-center",
               children: t.jsx(qt, {})
          })
     });
     const f = {
          error: {
               title: "settings.connections.setup.errorStatus.title",
               desc: "settings.connections.setup.errorStatus.description",
               button: "settings.connections.setup.redoSetup"
          },
          success: {
               title: "settings.connections.setup.successStatus.title",
               desc: "settings.connections.setup.successStatus.description",
               button: "settings.connections.setup.redoSetup"
          },
          unset: {
               title: "settings.connections.setup.unsetStatus.title",
               desc: "settings.connections.setup.unsetStatus.description",
               button: "settings.connections.setup.doSetup"
          }
     };
     return t.jsx(he, {
          children: t.jsxs("div", {
               className: "flex flex-col md:flex-row items-start gap-4",
               children: [t.jsx("div", {
                    children: t.jsx("div", {
                         className: L({
                              "rounded-full h-12 w-12 flex bg-opacity-15 justify-center items-center": !0,
                              "text-type-success bg-type-success": c === "success",
                              "text-type-danger bg-type-danger": c === "error" || c === "unset"
                         }),
                         children: t.jsx(ie, {
                              icon: c === "success" ? k.CHECKMARK : k.X,
                              className: "text-xl"
                         })
                    })
               }), t.jsxs("div", {
                    className: "flex-1",
                    children: [t.jsx(ot, {
                         className: "!mb-3",
                         children: s(f[c].title)
                    }), t.jsx("p", {
                         className: "max-w-[20rem] font-medium mb-6",
                         children: s(f[c].desc)
                    }), t.jsx(rt, {
                         status: o.extension,
                         children: s("settings.connections.setup.items.extension")
                    }), t.jsx(rt, {
                         status: o.proxy,
                         children: s("settings.connections.setup.items.proxy")
                    }), t.jsx(rt, {
                         grey: !0,
                         highlight: c === "unset",
                         status: o.defaultProxy,
                         children: s("settings.connections.setup.items.default")
                    })]
               }), t.jsx("div", {
                    className: "md:mt-5",
                    children: t.jsx(q, {
                         theme: "purple",
                         onClick: () => i("/onboarding"),
                         children: s(f[c].button)
                    })
               })]
          })
     })
}

function Jn(s) {
     let {
          proxyUrls: i,
          setProxyUrls: r
     } = s;
     const {
          t: o
     } = C(), c = N.useCallback(() => {
          r(u => [...u ?? [], ""])
     }, [r]), f = N.useCallback((u, x) => {
          r(D => [...(D ?? []).map((E, w) => w !== u ? E : x)])
     }, [r]), g = N.useCallback(u => {
          r(x => [...(x ?? []).filter((D, E) => E !== u)])
     }, [r]);
     return t.jsxs(he, {
          children: [t.jsxs("div", {
               className: "flex justify-between items-center gap-4",
               children: [t.jsxs("div", {
                    className: "my-3",
                    children: [t.jsx("p", {
                         className: "text-white font-bold mb-3",
                         children: o("settings.connections.workers.label")
                    }), t.jsx("p", {
                         className: "max-w-[20rem] font-medium",
                         children: t.jsx(Qt, {
                              i18nKey: "settings.connections.workers.description",
                              children: t.jsx(Xt, {
                                   to: "https://movie-web.github.io/docs/proxy/deploy",
                                   children: "Proxy documentation"
                              })
                         })
                    })]
               }), t.jsx("div", {
                    children: t.jsx(Ke, {
                         onClick: () => r(u => u === null ? [] : null),
                         enabled: i !== null
                    })
               })]
          }), i !== null ? t.jsxs(t.Fragment, {
               children: [t.jsx(ut, {
                    marginClass: "my-6 px-8 box-content -mx-8"
               }), t.jsx("p", {
                    className: "text-white font-bold mb-3",
                    children: o("settings.connections.workers.urlLabel")
               }), t.jsxs("div", {
                    className: "my-6 space-y-2 max-w-md",
                    children: [((i == null ? void 0 : i.length) ?? 0) === 0 ? t.jsx("p", {
                         children: o("settings.connections.workers.emptyState")
                    }) : null, (i ?? []).map((u, x) => t.jsxs("div", {
                         className: "grid grid-cols-[1fr,auto] items-center gap-2",
                         children: [t.jsx(dt, {
                              value: u,
                              onChange: D => f(x, D),
                              placeholder: o("settings.connections.workers.urlPlaceholder") ?? void 0
                         }), t.jsx("button", {
                              type: "button",
                              onClick: () => g(x),
                              className: "h-full scale-90 hover:scale-100 rounded-full aspect-square bg-authentication-inputBg hover:bg-authentication-inputBgHover flex justify-center items-center transition-transform duration-200 hover:text-white cursor-pointer",
                              children: t.jsx(ie, {
                                   className: "text-xl",
                                   icon: k.X
                              })
                         })]
                    }, x))]
               }), t.jsx(q, {
                    theme: "purple",
                    onClick: c,
                    children: o("settings.connections.workers.addButton")
               })]
          }) : null]
     })
}

function Qn(s) {
     let {
          backendUrl: i,
          setBackendUrl: r
     } = s;
     const {
          t: o
     } = C();
     return t.jsxs(he, {
          children: [t.jsxs("div", {
               className: "flex justify-between items-center gap-4",
               children: [t.jsxs("div", {
                    className: "my-3",
                    children: [t.jsx("p", {
                         className: "text-white font-bold mb-3",
                         children: o("settings.connections.server.label")
                    }), t.jsx("p", {
                         className: "max-w-[20rem] font-medium",
                         children: t.jsx(Qt, {
                              i18nKey: "settings.connections.server.description",
                              children: t.jsx(Xt, {
                                   to: "https://movie-web.github.io/docs/backend/deploy",
                                   children: "Backend documentation"
                              })
                         })
                    })]
               }), t.jsx("div", {
                    children: t.jsx(Ke, {
                         onClick: () => r(c => c === null ? "" : null),
                         enabled: i !== null
                    })
               })]
          }), i !== null ? t.jsxs(t.Fragment, {
               children: [t.jsx(ut, {
                    marginClass: "my-6 px-8 box-content -mx-8"
               }), t.jsx("p", {
                    className: "text-white font-bold mb-3",
                    children: o("settings.connections.server.urlLabel")
               }), t.jsx(dt, {
                    onChange: r,
                    value: i ?? ""
               })]
          }) : null]
     })
}

function Vn(s) {
     const {
          t: i
     } = C();
     return t.jsxs("div", {
          children: [t.jsx(we, {
               border: !0,
               children: i("settings.connections.title")
          }), t.jsxs("div", {
               className: "space-y-6",
               children: [t.jsx(Zn, {}), t.jsx(Jn, {
                    proxyUrls: s.proxyUrls,
                    setProxyUrls: s.setProxyUrls
               }), t.jsx(Qn, {
                    backendUrl: s.backendUrl,
                    setBackendUrl: s.setBackendUrl
               })]
          })]
     })
}

function ea(s) {
     return t.jsx("p", {
          className: "text-type-text",
          children: s.children
     })
}

function ta(s) {
     const {
          t: i
     } = C(), r = je(), o = U(g => {
          var u;
          return (u = g.account) == null ? void 0 : u.token
     }), [c, f] = gt(async () => {
          var g;
          if (!o) throw new Error("No token present");
          if (!r) throw new Error("No backend set");
          await jn(r, o, s.id), (g = s.onRemove) == null || g.call(s)
     }, [r, o, s.id]);
     return t.jsxs(he, {
          className: "flex justify-between items-center",
          paddingClass: "px-6 py-4",
          children: [t.jsxs("div", {
               className: "font-medium",
               children: [t.jsx(ea, {
                    children: i("settings.account.devices.deviceNameLabel")
               }), t.jsx("p", {
                    className: "text-white",
                    children: s.name
               })]
          }), s.isCurrent ? null : t.jsx(q, {
               theme: "danger",
               loading: c.loading,
               onClick: f,
               children: i("settings.account.devices.removeDevice")
          })]
     })
}

function sa(s) {
     const {
          t: i
     } = C(), r = U(g => {
          var u;
          return (u = g.account) == null ? void 0 : u.seed
     }), o = s.sessions, c = U(g => {
          var u;
          return (u = g.account) == null ? void 0 : u.sessionId
     }), f = N.useMemo(() => {
          if (!r) return [];
          let g = o.map(u => {
               const x = Yt(u.device, lt(r));
               return {
                    current: u.id === c,
                    id: u.id,
                    name: x
               }
          });
          return g = g.sort((u, x) => u.current ? -1 : x.current ? 1 : u.name.localeCompare(x.name)), g
     }, [r, o, c]);
     return r ? t.jsxs("div", {
          children: [t.jsx(He, {
               border: !0,
               className: "mt-0 mb-9",
               children: i("settings.account.devices.title")
          }), s.error ? t.jsx("p", {
               children: i("settings.account.devices.failed")
          }) : s.loading ? t.jsx(qt, {}) : t.jsx("div", {
               className: "space-y-5",
               children: f.map(g => t.jsx(ta, {
                    name: g.name,
                    id: g.id,
                    isCurrent: g.current,
                    onRemove: s.onChange
               }, g.id))
          })]
     }) : null
}

function na() {
     const s = Ht(),
          {
               t: i
          } = C();
     return t.jsx("div", {
          children: t.jsxs(Vt, {
               paddingClass: "px-6 py-12",
               className: "grid grid-cols-2 gap-12 mt-5",
               children: [t.jsxs("div", {
                    children: [t.jsx(ot, {
                         children: i("settings.account.register.title")
                    }), t.jsx("p", {
                         className: "text-type-text",
                         children: i("settings.account.register.text")
                    })]
               }), t.jsx("div", {
                    className: "flex justify-end items-center",
                    children: t.jsx(q, {
                         theme: "purple",
                         onClick: () => s("/register"),
                         children: i("settings.account.register.cta")
                    })
               })]
          })
     })
}

function Rt(s) {
     return t.jsxs("section", {
          className: s.className ?? "",
          children: [t.jsx("p", {
               className: "text-sm font-bold uppercase text-settings-sidebar-type-secondary mb-2",
               children: s.title
          }), s.children]
     })
}

function aa(s) {
     return t.jsxs("button", {
          type: "button",
          onClick: s.onClick,
          className: L("tabbable w-full px-3 py-2 flex items-center space-x-3 cursor-pointer rounded my-2", s.active ? "bg-settings-sidebar-activeLink text-settings-sidebar-type-activated" : null),
          children: [t.jsx(ie, {
               className: L("text-2xl text-settings-sidebar-type-icon", s.active ? "text-settings-sidebar-type-iconActivated" : null),
               icon: s.icon
          }), t.jsx("span", {
               children: s.children
          })]
     })
}
const ia = 16;

function ra(s) {
     const {
          t: i
     } = C(), r = s.url ? s.url.startsWith("https://") : !1;
     return t.jsxs("div", {
          className: "flex items-center gap-1 -mx-1 ml-3 px-1 rounded bg-largeCard-background font-bold",
          children: [t.jsx(ie, {
               icon: r ? k.LOCK : k.UNLOCK
          }), i(r ? "settings.sidebar.info.secure" : "settings.sidebar.info.insecure")]
     })
}

function ca() {
     var E;
     const {
          t: s
     } = C(), {
          isMobile: i
     } = Zt(), {
          account: r
     } = U(), o = location.hostname, [c, f] = N.useState(""), g = [{
          textKey: "settings.account.title",
          id: "settings-account",
          icon: k.USER
     }, {
          textKey: "settings.preferences.title",
          id: "settings-preferences",
          icon: k.SETTINGS
     }, {
          textKey: "settings.appearance.title",
          id: "settings-appearance",
          icon: k.BRUSH
     }, {
          textKey: "settings.subtitles.title",
          id: "settings-captions",
          icon: k.CAPTIONS
     }, {
          textKey: "settings.connections.title",
          id: "settings-connection",
          icon: k.LINK
     }], u = je(), x = Jt(async () => {
          if (u) return wn(u)
     }, [u]);
     N.useEffect(() => {
          function w() {
               var F;
               const z = (window.innerHeight || document.documentElement.clientHeight) / 4,
                    V = g.map(I => {
                         const v = document.getElementById(I.id);
                         if (!v) return {
                              distance: 1 / 0,
                              link: I.id
                         };
                         const B = v.getBoundingClientRect(),
                              X = Math.abs(z - B.top),
                              ee = Math.abs(z - B.bottom);
                         return {
                              distance: Math.min(ee, X),
                              link: I.id
                         }
                    }).sort((I, v) => I.distance - v.distance);
               window.innerHeight + window.scrollY >= document.body.offsetHeight ? f(g[g.length - 1].id) : f(((F = V[0]) == null ? void 0 : F.link) ?? "")
          }
          return document.addEventListener("scroll", w), w(), () => {
               document.removeEventListener("scroll", w)
          }
     });
     const D = N.useCallback(w => {
          const M = document.getElementById(w);
          if (!M) return null;
          const z = M.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
               top: z - 120,
               behavior: "smooth"
          })
     }, []);
     return t.jsx("div", {
          className: "text-settings-sidebar-type-inactive sidebar-boundary",
          children: t.jsxs(On, {
               topOffset: -6 * ia,
               stickyClassName: "pt-[6rem]",
               disabled: i,
               hideOnBoundaryHit: !1,
               boundaryElement: ".sidebar-boundary",
               children: [t.jsxs("div", {
                    className: "hidden lg:block",
                    children: [t.jsx(Rt, {
                         title: s("global.pages.settings"),
                         children: g.map(w => t.jsx(aa, {
                              icon: w.icon,
                              active: w.id === c,
                              onClick: () => D(w.id),
                              children: s(w.textKey)
                         }, w.id))
                    }), t.jsx(ut, {})]
               }), t.jsx(Rt, {
                    className: "text-sm",
                    title: s("settings.sidebar.info.title"),
                    children: t.jsxs("div", {
                         className: "px-3 py-3.5 rounded-lg bg-largeCard-background bg-opacity-50 grid grid-cols-2 gap-4",
                         children: [t.jsxs("div", {
                              className: "col-span-2 space-y-1",
                              children: [t.jsx("p", {
                                   className: "text-type-dimmed font-medium",
                                   children: s("settings.sidebar.info.hostname")
                              }), t.jsx("p", {
                                   className: "text-white",
                                   children: o
                              })]
                         }), t.jsxs("div", {
                              className: "col-span-2 space-y-1",
                              children: [t.jsxs("div", {
                                   className: "text-type-dimmed font-medium flex items-center",
                                   children: [t.jsx("p", {
                                        children: s("settings.sidebar.info.backendUrl")
                                   }), t.jsx(ra, {
                                        url: u
                                   })]
                              }), t.jsx("p", {
                                   className: "text-white",
                                   children: (u == null ? void 0 : u.replace(/https?:\/\//, "")) ?? "—"
                              })]
                         }), t.jsxs("div", {
                              className: "col-span-2 space-y-1",
                              children: [t.jsx("p", {
                                   className: "text-type-dimmed font-medium",
                                   children: s("settings.sidebar.info.userId")
                              }), t.jsx("p", {
                                   className: "text-white",
                                   children: (r == null ? void 0 : r.userId) ?? s("settings.sidebar.info.notLoggedIn")
                              })]
                         }), t.jsxs("div", {
                              className: "col-span-1 space-y-1",
                              children: [t.jsx("p", {
                                   className: "text-type-dimmed font-medium",
                                   children: s("settings.sidebar.info.appVersion")
                              }), t.jsx("p", {
                                   className: "text-type-dimmed px-2 py-1 rounded bg-settings-sidebar-badge inline-block",
                                   children: Nn().APP_VERSION
                              })]
                         }), t.jsxs("div", {
                              className: "col-span-1 space-y-1",
                              children: [t.jsx("p", {
                                   className: "text-type-dimmed font-medium",
                                   children: s("settings.sidebar.info.backendVersion")
                              }), t.jsxs("p", {
                                   className: "text-type-dimmed px-2 py-1 rounded bg-settings-sidebar-badge inline-flex items-center gap-1",
                                   children: [x.error ? t.jsx(ie, {
                                        icon: k.WARNING,
                                        className: "text-type-danger text-base"
                                   }) : null, x.loading ? t.jsx("span", {
                                        className: "block h-4 w-12 bg-type-dimmed/20 rounded"
                                   }) : ((E = x == null ? void 0 : x.value) == null ? void 0 : E.version) || s("settings.sidebar.info.unknownVersion")]
                              })]
                         })]
                    })
               })]
          })
     })
}
const la = [{
          id: "default",
          selector: "theme-default",
          key: "settings.appearance.themes.default"
     }, {
          id: "blue",
          selector: "theme-blue",
          key: "settings.appearance.themes.blue"
     }, {
          id: "teal",
          selector: "theme-teal",
          key: "settings.appearance.themes.teal"
     }, {
          id: "red",
          selector: "theme-red",
          key: "settings.appearance.themes.red"
     }, {
          id: "gray",
          selector: "theme-gray",
          key: "settings.appearance.themes.gray"
     }, {
          id: "amoled",
          selector: "theme-amoled",
          key: "settings.appearance.themes.amoled"
     }],
     oa = function (i) {
          const {
               t: r
          } = C();
          return t.jsxs("div", {
               className: L(i.selector, "cursor-pointer group tabbable"),
               onClick: i.onClick,
               children: [t.jsxs("div", {
                    tabIndex: 0,
                    onKeyUp: o => o.key === "Enter" && o.currentTarget.click(),
                    className: L("tabbable scroll-mt-32 w-full h-32 relative rounded-lg border bg-gradient-to-br from-themePreview-primary/20 to-themePreview-secondary/10 bg-clip-content transition-colors duration-150", i.active ? "border-themePreview-primary" : "border-transparent group-hover:border-white/20"),
                    children: [t.jsxs("div", {
                         className: "absolute top-2 left-2",
                         children: [t.jsx("div", {
                              className: "h-5 w-5 bg-themePreview-primary rounded-full"
                         }), t.jsx("div", {
                              className: "h-5 w-5 bg-themePreview-secondary rounded-full -mt-2"
                         })]
                    }), t.jsx(ie, {
                         icon: k.CHECKMARK,
                         className: L("absolute top-3 right-3 text-xs text-white transition-opacity duration-150", i.active ? "opacity-100" : "opacity-0")
                    }), t.jsx("div", {
                         className: "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/5 h-4/5 rounded-t-lg -mb-px bg-background-main overflow-hidden",
                         children: t.jsxs("div", {
                              className: "relative w-full h-full",
                              children: [t.jsx("div", {
                                   className: "bg-themePreview-primary/50 w-[130%] h-10 absolute left-1/2 -top-5 blur-xl transform -translate-x-1/2 rounded-[100%]"
                              }), t.jsxs("div", {
                                   className: "p-2 flex justify-between items-center",
                                   children: [t.jsxs("div", {
                                        className: "flex space-x-1",
                                        children: [t.jsx("div", {
                                             className: "bg-themePreview-ghost bg-opacity-10 w-4 h-2 rounded-full"
                                        }), t.jsx("div", {
                                             className: "bg-themePreview-ghost bg-opacity-10 w-2 h-2 rounded-full"
                                        }), t.jsx("div", {
                                             className: "bg-themePreview-ghost bg-opacity-10 w-2 h-2 rounded-full"
                                        })]
                                   }), t.jsx("div", {
                                        className: "bg-themePreview-ghost bg-opacity-10 w-2 h-2 rounded-full"
                                   })]
                              }), t.jsxs("div", {
                                   className: "mt-1 flex items-center flex-col gap-1",
                                   children: [t.jsx("div", {
                                        className: "bg-themePreview-ghost bg-opacity-20 w-8 h-0.5 rounded-full"
                                   }), t.jsx("div", {
                                        className: "bg-themePreview-ghost bg-opacity-20 w-6 h-0.5 rounded-full"
                                   }), t.jsx("div", {
                                        className: "bg-themePreview-ghost bg-opacity-10 w-16 h-2 mt-1 rounded-full"
                                   })]
                              }), t.jsxs("div", {
                                   className: "mt-5 px-3",
                                   children: [t.jsxs("div", {
                                        className: "flex gap-1 items-center",
                                        children: [t.jsx("div", {
                                             className: "bg-themePreview-ghost bg-opacity-20 w-2 h-2 rounded-full"
                                        }), t.jsx("div", {
                                             className: "bg-themePreview-ghost bg-opacity-20 w-8 h-0.5 rounded-full"
                                        })]
                                   }), t.jsxs("div", {
                                        className: "flex w-full gap-1 mt-1",
                                        children: [t.jsx("div", {
                                             className: "bg-themePreview-ghost bg-opacity-10 w-full h-20 rounded"
                                        }), t.jsx("div", {
                                             className: "bg-themePreview-ghost bg-opacity-10 w-full h-20 rounded"
                                        }), t.jsx("div", {
                                             className: "bg-themePreview-ghost bg-opacity-10 w-full h-20 rounded"
                                        }), t.jsx("div", {
                                             className: "bg-themePreview-ghost bg-opacity-10 w-full h-20 rounded"
                                        })]
                                   })]
                              })]
                         })
                    })]
               }), t.jsxs("div", {
                    className: "mt-2 flex justify-between items-center",
                    children: [t.jsx("span", {
                         className: "font-medium text-white",
                         children: i.name
                    }), t.jsx("span", {
                         className: L("inline-block px-3 py-1 leading-tight text-sm transition-opacity duration-150 rounded-full bg-pill-activeBackground text-white/85", i.inUse ? "opacity-100" : "opacity-0 pointer-events-none"),
                         children: r("settings.appearance.activeTheme")
                    })]
               })]
          })
     },
     da = oa;

function ua(s) {
     const {
          t: i
     } = C();
     return t.jsxs("div", {
          children: [t.jsx(we, {
               border: !0,
               children: i("settings.appearance.title")
          }), t.jsx("div", {
               className: "grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-6 max-w-[700px]",
               children: la.map(r => t.jsx(da, {
                    selector: r.selector,
                    active: s.active === r.id,
                    inUse: s.inUse === r.id,
                    name: i(r.key),
                    onClick: () => s.setTheme(r.id)
               }, r.id))
          })]
     })
}

function ga(s) {
     const {
          t: i
     } = C(), r = Dn(Bt.map(g => g.code)), o = Cn(), c = Bt.sort((g, u) => r.indexOf(g.code) - r.indexOf(u.code)).map(g => ({
          id: g.code,
          name: `${g.name}${g.nativeName?` — ${g.nativeName}`:""}`,
          leftIcon: t.jsx(Mn, {
               langCode: g.code
          })
     })), f = c.find(g => {
          var u;
          return g.id === ((u = Rn(s.language)) == null ? void 0 : u.code)
     });
     return t.jsxs("div", {
          className: "space-y-12",
          children: [t.jsx(we, {
               border: !0,
               children: i("settings.preferences.title")
          }), t.jsxs("div", {
               children: [t.jsx("p", {
                    className: "text-white font-bold mb-3",
                    children: i("settings.preferences.language")
               }), t.jsx("p", {
                    className: "max-w-[20rem] font-medium",
                    children: i("settings.preferences.languageDescription")
               }), t.jsx(Sn, {
                    options: c,
                    selectedItem: f || c[0],
                    setSelectedItem: g => s.setLanguage(g.id)
               })]
          }), t.jsxs("div", {
               children: [t.jsx("p", {
                    className: "text-white font-bold mb-3",
                    children: i("settings.preferences.thumbnail")
               }), t.jsx("p", {
                    className: "max-w-[25rem] font-medium",
                    children: i("settings.preferences.thumbnailDescription")
               }), t.jsxs("div", {
                    onClick: () => s.setEnableThumbnails(!s.enableThumbnails),
                    className: "bg-dropdown-background hover:bg-dropdown-hoverBackground select-none my-4 cursor-pointer space-x-3 flex items-center max-w-[25rem] py-3 px-4 rounded-lg",
                    children: [t.jsx(Ke, {
                         enabled: s.enableThumbnails
                    }), t.jsx("p", {
                         className: "flex-1 text-white font-bold",
                         children: i("settings.preferences.thumbnailLabel")
                    })]
               })]
          }), t.jsxs("div", {
               children: [t.jsx("p", {
                    className: "text-white font-bold mb-3",
                    children: i("settings.preferences.autoplay")
               }), t.jsx("p", {
                    className: "max-w-[25rem] font-medium",
                    children: i("settings.preferences.autoplayDescription")
               }), t.jsxs("div", {
                    onClick: () => o ? s.setEnableAutoplay(!s.enableAutoplay) : null,
                    className: L("bg-dropdown-background hover:bg-dropdown-hoverBackground select-none my-4 cursor-pointer space-x-3 flex items-center max-w-[25rem] py-3 px-4 rounded-lg", o ? "cursor-pointer opacity-100 pointer-events-auto" : "cursor-not-allowed opacity-50 pointer-events-none"),
                    children: [t.jsx(Ke, {
                         enabled: s.enableAutoplay && o
                    }), t.jsx("p", {
                         className: "flex-1 text-white font-bold",
                         children: i("settings.preferences.autoplayLabel")
                    })]
               })]
          })]
     })
}

function ha(s) {
     const {
          isMobile: i
     } = Zt();
     return t.jsx(Bn, {
          ultraWide: !0,
          classNames: "overflow-visible",
          children: t.jsxs("div", {
               className: L("grid gap-12", i ? "grid-cols-1" : "lg:grid-cols-[280px,1fr]"),
               children: [t.jsx(ca, {}), t.jsx("div", {
                    children: s.children
               })]
          })
     })
}

function ma(s) {
     const i = je(),
          {
               account: r
          } = s,
          [o, c] = gt(() => i ? _n(i, r) : Promise.resolve([]), [r, i]);
     return N.useEffect(() => {
          c()
     }, [c]), t.jsxs(t.Fragment, {
          children: [t.jsx(Wn, {
               deviceName: s.deviceName,
               setDeviceName: s.setDeviceName,
               colorA: s.colorA,
               setColorA: s.setColorA,
               colorB: s.colorB,
               setColorB: s.setColorB,
               userIcon: s.userIcon,
               setUserIcon: s.setUserIcon
          }), t.jsx(sa, {
               error: !!o.error,
               loading: o.loading,
               sessions: o.value ?? [],
               onChange: c
          }), t.jsx(Gn, {})]
     })
}

function Sa() {
     const {
          t: s
     } = C(), i = Ut(d => d.theme), r = Ut(d => d.setTheme), o = ct(d => d.previewTheme), c = ct(d => d.setPreviewTheme), f = Lt(d => d.language), g = Lt(d => d.setLanguage), u = Ot(d => d.styling), x = Ot(d => d.updateStyling), D = U(d => d.proxySet), E = U(d => d.setProxySet), w = U(d => d.backendUrl), M = U(d => d.setBackendUrl), z = Me(d => d.enableThumbnails), V = Me(d => d.setEnableThumbnails), F = Me(d => d.enableAutoplay), I = Me(d => d.setEnableAutoplay), v = U(d => d.account), B = U(d => d.setAccountProfile), X = U(d => d.updateDeviceName), ee = N.useMemo(() => v ? Yt(v.deviceName, lt(v.seed)) : "", [v]), R = je(), {
          logout: Y
     } = $t(), re = U(), h = Fn(i, f, u, ee, D, w, v == null ? void 0 : v.profile, z, F);
     N.useEffect(() => {
          c(i ?? "default")
     }, [c, i]), N.useEffect(() => () => {
          c(null)
     }, [c]);
     const me = N.useCallback(d => {
               h.theme.set(d === "default" ? null : d), c(d)
          }, [h.theme, c]),
          te = N.useCallback(async () => {
               var d, S;
               if (v && R) {
                    if ((h.appLanguage.changed || h.theme.changed || h.proxyUrls.changed) && await Tn(R, v, {
                              applicationLanguage: h.appLanguage.state,
                              applicationTheme: h.theme.state,
                              proxyUrls: ((d = h.proxyUrls.state) == null ? void 0 : d.filter(T => T !== "")) ?? null
                         }), h.deviceName.changed) {
                         const T = await An(h.deviceName.state, lt(v.seed));
                         await Pn(R, v, {
                              deviceName: T
                         }), X(T)
                    }
                    h.profile.changed && await kn(R, v, {
                         profile: h.profile.state
                    })
               }
               if (V(h.enableThumbnails.state), I(h.enableAutoplay.state), g(h.appLanguage.state), r(h.theme.state), x(h.subtitleStyling.state), E(((S = h.proxyUrls.state) == null ? void 0 : S.filter(T => T !== "")) ?? null), h.profile.state && B(h.profile.state), h.backendUrl.changed) {
                    await Y();
                    let T = h.backendUrl.state;
                    T && !T.startsWith("http://") && !T.startsWith("https://") && (T = `https://${T}`), M(T)
               }
          }, [v, R, V, h, I, g, r, x, E, X, B, Y, M]);
     return t.jsxs(En, {
          children: [t.jsx(In, {
               subpage: !0,
               k: "global.pages.settings"
          }), t.jsxs(ha, {
               children: [t.jsxs("div", {
                    id: "settings-account",
                    children: [t.jsx(we, {
                         border: !0,
                         className: "!mb-0",
                         children: s("settings.account.title")
                    }), re.account && h.profile.state ? t.jsx(ma, {
                         account: re.account,
                         deviceName: h.deviceName.state,
                         setDeviceName: h.deviceName.set,
                         colorA: h.profile.state.colorA,
                         setColorA: d => {
                              h.profile.set(S => S ? {
                                   ...S,
                                   colorA: d
                              } : void 0)
                         },
                         colorB: h.profile.state.colorB,
                         setColorB: d => h.profile.set(S => S ? {
                              ...S,
                              colorB: d
                         } : void 0),
                         userIcon: h.profile.state.icon,
                         setUserIcon: d => h.profile.set(S => S ? {
                              ...S,
                              icon: d
                         } : void 0)
                    }) : t.jsx(na, {})]
               }), t.jsx("div", {
                    id: "settings-preferences",
                    className: "mt-48",
                    children: t.jsx(ga, {
                         language: h.appLanguage.state,
                         setLanguage: h.appLanguage.set,
                         enableThumbnails: h.enableThumbnails.state,
                         setEnableThumbnails: h.enableThumbnails.set,
                         enableAutoplay: h.enableAutoplay.state,
                         setEnableAutoplay: h.enableAutoplay.set
                    })
               }), t.jsx("div", {
                    id: "settings-appearance",
                    className: "mt-48",
                    children: t.jsx(ua, {
                         active: o ?? "default",
                         inUse: i ?? "default",
                         setTheme: me
                    })
               }), t.jsx("div", {
                    id: "settings-captions",
                    className: "mt-48",
                    children: t.jsx(qn, {
                         styling: h.subtitleStyling.state,
                         setStyling: h.subtitleStyling.set
                    })
               }), t.jsx("div", {
                    id: "settings-connection",
                    className: "mt-48",
                    children: t.jsx(Vn, {
                         backendUrl: h.backendUrl.state,
                         setBackendUrl: h.backendUrl.set,
                         proxyUrls: h.proxyUrls.state,
                         setProxyUrls: h.proxyUrls.set
                    })
               })]
          }), t.jsxs(Wt, {
               animation: "fade",
               show: h.changed,
               className: "bg-settings-saveBar-background border-t border-settings-card-border/50 py-4 transition-opacity w-full fixed bottom-0 flex justify-between flex-col md:flex-row px-8 items-start md:items-center gap-3",
               children: [t.jsx("p", {
                    className: "text-type-danger",
                    children: s("settings.unsaved")
               }), t.jsxs("div", {
                    className: "space-x-3 w-full md:w-auto flex",
                    children: [t.jsx(q, {
                         className: "w-full md:w-auto",
                         theme: "secondary",
                         onClick: h.reset,
                         children: s("settings.reset")
                    }), t.jsx(q, {
                         className: "w-full md:w-auto",
                         theme: "purple",
                         onClick: te,
                         children: s("settings.save")
                    })]
               })]
          })]
     })
}
export {
     ma as AccountSettings, Sa as SettingsPage, Sa as
     default
};
//# sourceMappingURL=Settings-CEKoIO_M.js.map