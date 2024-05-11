import {
    g as Re,
    c as Ot,
    C as hr,
    a as ev
} from "./auth-72H9TcpW.js";
import {
    e as tv,
    a as C2,
    b as I2,
    r as N2,
    p as T2,
    c as x2
} from "./caption-parsing-BABN6jyO.js";

function k2(e, t) {
    for (var r = 0; r < t.length; r++) {
        const n = t[r];
        if (typeof n != "string" && !Array.isArray(n)) {
            for (const a in n)
                if (a !== "default" && !(a in e)) {
                    const i = Object.getOwnPropertyDescriptor(n, a);
                    i && Object.defineProperty(e, a, i.get ? i : {
                        enumerable: !0,
                        get: () => n[a]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
var rv = {
        exports: {}
    },
    Vs = {},
    nv = {
        exports: {}
    },
    ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Na = Symbol.for("react.element"),
    P2 = Symbol.for("react.portal"),
    L2 = Symbol.for("react.fragment"),
    D2 = Symbol.for("react.strict_mode"),
    F2 = Symbol.for("react.profiler"),
    j2 = Symbol.for("react.provider"),
    U2 = Symbol.for("react.context"),
    M2 = Symbol.for("react.forward_ref"),
    B2 = Symbol.for("react.suspense"),
    z2 = Symbol.for("react.memo"),
    V2 = Symbol.for("react.lazy"),
    Ud = Symbol.iterator;

function q2(e) {
    return e === null || typeof e != "object" ? null : (e = Ud && e[Ud] || e["@@iterator"], typeof e == "function" ? e : null)
}
var av = {
        isMounted: function () {
            return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
    },
    iv = Object.assign,
    sv = {};

function pn(e, t, r) {
    this.props = e, this.context = t, this.refs = sv, this.updater = r || av
}
pn.prototype.isReactComponent = {};
pn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
pn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function ov() {}
ov.prototype = pn.prototype;

function El(e, t, r) {
    this.props = e, this.context = t, this.refs = sv, this.updater = r || av
}
var Sl = El.prototype = new ov;
Sl.constructor = El;
iv(Sl, pn.prototype);
Sl.isPureReactComponent = !0;
var Md = Array.isArray,
    uv = Object.prototype.hasOwnProperty,
    $l = {
        current: null
    },
    cv = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function lv(e, t, r) {
    var n, a = {},
        i = null,
        s = null;
    if (t != null)
        for (n in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) uv.call(t, n) && !cv.hasOwnProperty(n) && (a[n] = t[n]);
    var o = arguments.length - 2;
    if (o === 1) a.children = r;
    else if (1 < o) {
        for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
        a.children = u
    }
    if (e && e.defaultProps)
        for (n in o = e.defaultProps, o) a[n] === void 0 && (a[n] = o[n]);
    return {
        $$typeof: Na,
        type: e,
        key: i,
        ref: s,
        props: a,
        _owner: $l.current
    }
}

function W2(e, t) {
    return {
        $$typeof: Na,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Al(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Na
}

function G2(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function (r) {
        return t[r]
    })
}
var Bd = /\/+/g;

function Ko(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? G2("" + e.key) : t.toString(36)
}

function Ii(e, t, r, n, a) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Na:
                case P2:
                    s = !0
            }
    }
    if (s) return s = e, a = a(s), e = n === "" ? "." + Ko(s, 0) : n, Md(a) ? (r = "", e != null && (r = e.replace(Bd, "$&/") + "/"), Ii(a, t, r, "", function (c) {
        return c
    })) : a != null && (Al(a) && (a = W2(a, r + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(Bd, "$&/") + "/") + e)), t.push(a)), 1;
    if (s = 0, n = n === "" ? "." : n + ":", Md(e))
        for (var o = 0; o < e.length; o++) {
            i = e[o];
            var u = n + Ko(i, o);
            s += Ii(i, t, r, u, a)
        } else if (u = q2(e), typeof u == "function")
            for (e = u.call(e), o = 0; !(i = e.next()).done;) i = i.value, u = n + Ko(i, o++), s += Ii(i, t, r, u, a);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function ri(e, t, r) {
    if (e == null) return e;
    var n = [],
        a = 0;
    return Ii(e, n, "", "", function (i) {
        return t.call(r, i, a++)
    }), n
}

function H2(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (r) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r)
        }, function (r) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Ce = {
        current: null
    },
    Ni = {
        transition: null
    },
    K2 = {
        ReactCurrentDispatcher: Ce,
        ReactCurrentBatchConfig: Ni,
        ReactCurrentOwner: $l
    };
ee.Children = {
    map: ri,
    forEach: function (e, t, r) {
        ri(e, function () {
            t.apply(this, arguments)
        }, r)
    },
    count: function (e) {
        var t = 0;
        return ri(e, function () {
            t++
        }), t
    },
    toArray: function (e) {
        return ri(e, function (t) {
            return t
        }) || []
    },
    only: function (e) {
        if (!Al(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
ee.Component = pn;
ee.Fragment = L2;
ee.Profiler = F2;
ee.PureComponent = El;
ee.StrictMode = D2;
ee.Suspense = B2;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K2;
ee.cloneElement = function (e, t, r) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var n = iv({}, e.props),
        a = e.key,
        i = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, s = $l.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
        for (u in t) uv.call(t, u) && !cv.hasOwnProperty(u) && (n[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) n.children = r;
    else if (1 < u) {
        o = Array(u);
        for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
        n.children = o
    }
    return {
        $$typeof: Na,
        type: e.type,
        key: a,
        ref: i,
        props: n,
        _owner: s
    }
};
ee.createContext = function (e) {
    return e = {
        $$typeof: U2,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: j2,
        _context: e
    }, e.Consumer = e
};
ee.createElement = lv;
ee.createFactory = function (e) {
    var t = lv.bind(null, e);
    return t.type = e, t
};
ee.createRef = function () {
    return {
        current: null
    }
};
ee.forwardRef = function (e) {
    return {
        $$typeof: M2,
        render: e
    }
};
ee.isValidElement = Al;
ee.lazy = function (e) {
    return {
        $$typeof: V2,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: H2
    }
};
ee.memo = function (e, t) {
    return {
        $$typeof: z2,
        type: e,
        compare: t === void 0 ? null : t
    }
};
ee.startTransition = function (e) {
    var t = Ni.transition;
    Ni.transition = {};
    try {
        e()
    } finally {
        Ni.transition = t
    }
};
ee.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.")
};
ee.useCallback = function (e, t) {
    return Ce.current.useCallback(e, t)
};
ee.useContext = function (e) {
    return Ce.current.useContext(e)
};
ee.useDebugValue = function () {};
ee.useDeferredValue = function (e) {
    return Ce.current.useDeferredValue(e)
};
ee.useEffect = function (e, t) {
    return Ce.current.useEffect(e, t)
};
ee.useId = function () {
    return Ce.current.useId()
};
ee.useImperativeHandle = function (e, t, r) {
    return Ce.current.useImperativeHandle(e, t, r)
};
ee.useInsertionEffect = function (e, t) {
    return Ce.current.useInsertionEffect(e, t)
};
ee.useLayoutEffect = function (e, t) {
    return Ce.current.useLayoutEffect(e, t)
};
ee.useMemo = function (e, t) {
    return Ce.current.useMemo(e, t)
};
ee.useReducer = function (e, t, r) {
    return Ce.current.useReducer(e, t, r)
};
ee.useRef = function (e) {
    return Ce.current.useRef(e)
};
ee.useState = function (e) {
    return Ce.current.useState(e)
};
ee.useSyncExternalStore = function (e, t, r) {
    return Ce.current.useSyncExternalStore(e, t, r)
};
ee.useTransition = function () {
    return Ce.current.useTransition()
};
ee.version = "18.2.0";
nv.exports = ee;
var L = nv.exports;
const fv = Re(L),
    eB = k2({
        __proto__: null,
        default: fv
    }, [L]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X2 = L,
    Y2 = Symbol.for("react.element"),
    J2 = Symbol.for("react.fragment"),
    Q2 = Object.prototype.hasOwnProperty,
    Z2 = X2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    eE = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function dv(e, t, r) {
    var n, a = {},
        i = null,
        s = null;
    r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (n in t) Q2.call(t, n) && !eE.hasOwnProperty(n) && (a[n] = t[n]);
    if (e && e.defaultProps)
        for (n in t = e.defaultProps, t) a[n] === void 0 && (a[n] = t[n]);
    return {
        $$typeof: Y2,
        type: e,
        key: i,
        ref: s,
        props: a,
        _owner: Z2.current
    }
}
Vs.Fragment = J2;
Vs.jsx = dv;
Vs.jsxs = dv;
rv.exports = Vs;
var tB = rv.exports,
    Nn = function (e) {
        return e && e.Math === Math && e
    },
    fe = Nn(typeof globalThis == "object" && globalThis) || Nn(typeof window == "object" && window) || Nn(typeof self == "object" && self) || Nn(typeof Ot == "object" && Ot) || Nn(typeof Ot == "object" && Ot) || function () {
        return this
    }() || Function("return this")(),
    Ol = {},
    me = function (e) {
        try {
            return !!e()
        } catch {
            return !0
        }
    },
    tE = me,
    Ie = !tE(function () {
        return Object.defineProperty({}, 1, {
            get: function () {
                return 7
            }
        })[1] !== 7
    }),
    rE = me,
    qs = !rE(function () {
        var e = (function () {}).bind();
        return typeof e != "function" || e.hasOwnProperty("prototype")
    }),
    nE = qs,
    ni = Function.prototype.call,
    mt = nE ? ni.bind(ni) : function () {
        return ni.apply(ni, arguments)
    },
    hv = {},
    pv = {}.propertyIsEnumerable,
    mv = Object.getOwnPropertyDescriptor,
    aE = mv && !pv.call({
        1: 2
    }, 1);
hv.f = aE ? function (t) {
    var r = mv(this, t);
    return !!r && r.enumerable
} : pv;
var Ta = function (e, t) {
        return {
            enumerable: !(e & 1),
            configurable: !(e & 2),
            writable: !(e & 4),
            value: t
        }
    },
    gv = qs,
    vv = Function.prototype,
    oc = vv.call,
    iE = gv && vv.bind.bind(oc, oc),
    se = gv ? iE : function (e) {
        return function () {
            return oc.apply(e, arguments)
        }
    },
    yv = se,
    sE = yv({}.toString),
    oE = yv("".slice),
    xa = function (e) {
        return oE(sE(e), 8, -1)
    },
    uE = se,
    cE = me,
    lE = xa,
    Xo = Object,
    fE = uE("".split),
    bv = cE(function () {
        return !Xo("z").propertyIsEnumerable(0)
    }) ? function (e) {
        return lE(e) === "String" ? fE(e, "") : Xo(e)
    } : Xo,
    Ws = function (e) {
        return e == null
    },
    dE = Ws,
    hE = TypeError,
    Ar = function (e) {
        if (dE(e)) throw new hE("Can't call method on " + e);
        return e
    },
    pE = bv,
    mE = Ar,
    Yt = function (e) {
        return pE(mE(e))
    },
    uc = typeof document == "object" && document.all,
    gE = typeof uc > "u" && uc !== void 0,
    wv = {
        all: uc,
        IS_HTMLDDA: gE
    },
    Ev = wv,
    vE = Ev.all,
    ye = Ev.IS_HTMLDDA ? function (e) {
        return typeof e == "function" || e === vE
    } : function (e) {
        return typeof e == "function"
    },
    zd = ye,
    Sv = wv,
    yE = Sv.all,
    xt = Sv.IS_HTMLDDA ? function (e) {
        return typeof e == "object" ? e !== null : zd(e) || e === yE
    } : function (e) {
        return typeof e == "object" ? e !== null : zd(e)
    },
    Yo = fe,
    bE = ye,
    wE = function (e) {
        return bE(e) ? e : void 0
    },
    gt = function (e, t) {
        return arguments.length < 2 ? wE(Yo[e]) : Yo[e] && Yo[e][t]
    },
    EE = se,
    mn = EE({}.isPrototypeOf),
    _l = typeof navigator < "u" && String(navigator.userAgent) || "",
    $v = fe,
    Jo = _l,
    Vd = $v.process,
    qd = $v.Deno,
    Wd = Vd && Vd.versions || qd && qd.version,
    Gd = Wd && Wd.v8,
    Qe, Gi;
Gd && (Qe = Gd.split("."), Gi = Qe[0] > 0 && Qe[0] < 4 ? 1 : +(Qe[0] + Qe[1]));
!Gi && Jo && (Qe = Jo.match(/Edge\/(\d+)/), (!Qe || Qe[1] >= 74) && (Qe = Jo.match(/Chrome\/(\d+)/), Qe && (Gi = +Qe[1])));
var Av = Gi,
    Hd = Av,
    SE = me,
    $E = fe,
    AE = $E.String,
    Ov = !!Object.getOwnPropertySymbols && !SE(function () {
        var e = Symbol("symbol detection");
        return !AE(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Hd && Hd < 41
    }),
    OE = Ov,
    _v = OE && !Symbol.sham && typeof Symbol.iterator == "symbol",
    _E = gt,
    RE = ye,
    CE = mn,
    IE = _v,
    NE = Object,
    Rl = IE ? function (e) {
        return typeof e == "symbol"
    } : function (e) {
        var t = _E("Symbol");
        return RE(t) && CE(t.prototype, NE(e))
    },
    TE = String,
    ka = function (e) {
        try {
            return TE(e)
        } catch {
            return "Object"
        }
    },
    xE = ye,
    kE = ka,
    PE = TypeError,
    kt = function (e) {
        if (xE(e)) return e;
        throw new PE(kE(e) + " is not a function")
    },
    LE = kt,
    DE = Ws,
    Cl = function (e, t) {
        var r = e[t];
        return DE(r) ? void 0 : LE(r)
    },
    Qo = mt,
    Zo = ye,
    eu = xt,
    FE = TypeError,
    jE = function (e, t) {
        var r, n;
        if (t === "string" && Zo(r = e.toString) && !eu(n = Qo(r, e)) || Zo(r = e.valueOf) && !eu(n = Qo(r, e)) || t !== "string" && Zo(r = e.toString) && !eu(n = Qo(r, e))) return n;
        throw new FE("Can't convert object to primitive value")
    },
    Rv = {
        exports: {}
    },
    Cv = !1,
    Kd = fe,
    UE = Object.defineProperty,
    Il = function (e, t) {
        try {
            UE(Kd, e, {
                value: t,
                configurable: !0,
                writable: !0
            })
        } catch {
            Kd[e] = t
        }
        return t
    },
    ME = fe,
    BE = Il,
    Xd = "__core-js_shared__",
    zE = ME[Xd] || BE(Xd, {}),
    Nl = zE,
    Yd = Nl;
(Rv.exports = function (e, t) {
    return Yd[e] || (Yd[e] = t !== void 0 ? t : {})
})("versions", []).push({
    version: "3.34.0",
    mode: "global",
    copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
});
var Iv = Rv.exports,
    VE = Ar,
    qE = Object,
    Or = function (e) {
        return qE(VE(e))
    },
    WE = se,
    GE = Or,
    HE = WE({}.hasOwnProperty),
    Ne = Object.hasOwn || function (t, r) {
        return HE(GE(t), r)
    },
    KE = se,
    XE = 0,
    YE = Math.random(),
    JE = KE(1 .toString),
    Gs = function (e) {
        return "Symbol(" + (e === void 0 ? "" : e) + ")_" + JE(++XE + YE, 36)
    },
    QE = fe,
    ZE = Iv,
    Jd = Ne,
    eS = Gs,
    tS = Ov,
    rS = _v,
    Vr = QE.Symbol,
    tu = ZE("wks"),
    nS = rS ? Vr.for || Vr : Vr && Vr.withoutSetter || eS,
    Jt = function (e) {
        return Jd(tu, e) || (tu[e] = tS && Jd(Vr, e) ? Vr[e] : nS("Symbol." + e)), tu[e]
    },
    aS = mt,
    Qd = xt,
    Zd = Rl,
    iS = Cl,
    sS = jE,
    oS = Jt,
    uS = TypeError,
    cS = oS("toPrimitive"),
    Nv = function (e, t) {
        if (!Qd(e) || Zd(e)) return e;
        var r = iS(e, cS),
            n;
        if (r) {
            if (t === void 0 && (t = "default"), n = aS(r, e, t), !Qd(n) || Zd(n)) return n;
            throw new uS("Can't convert object to primitive value")
        }
        return t === void 0 && (t = "number"), sS(e, t)
    },
    lS = Nv,
    fS = Rl,
    Hs = function (e) {
        var t = lS(e, "string");
        return fS(t) ? t : t + ""
    },
    dS = fe,
    eh = xt,
    cc = dS.document,
    hS = eh(cc) && eh(cc.createElement),
    Tl = function (e) {
        return hS ? cc.createElement(e) : {}
    },
    pS = Ie,
    mS = me,
    gS = Tl,
    Tv = !pS && !mS(function () {
        return Object.defineProperty(gS("div"), "a", {
            get: function () {
                return 7
            }
        }).a !== 7
    }),
    vS = Ie,
    yS = mt,
    bS = hv,
    wS = Ta,
    ES = Yt,
    SS = Hs,
    $S = Ne,
    AS = Tv,
    th = Object.getOwnPropertyDescriptor;
Ol.f = vS ? th : function (t, r) {
    if (t = ES(t), r = SS(r), AS) try {
        return th(t, r)
    } catch {}
    if ($S(t, r)) return wS(!yS(bS.f, t, r), t[r])
};
var vt = {},
    OS = Ie,
    _S = me,
    xv = OS && _S(function () {
        return Object.defineProperty(function () {}, "prototype", {
            value: 42,
            writable: !1
        }).prototype !== 42
    }),
    RS = xt,
    CS = String,
    IS = TypeError,
    yt = function (e) {
        if (RS(e)) return e;
        throw new IS(CS(e) + " is not an object")
    },
    NS = Ie,
    TS = Tv,
    xS = xv,
    ai = yt,
    rh = Hs,
    kS = TypeError,
    ru = Object.defineProperty,
    PS = Object.getOwnPropertyDescriptor,
    nu = "enumerable",
    au = "configurable",
    iu = "writable";
vt.f = NS ? xS ? function (t, r, n) {
    if (ai(t), r = rh(r), ai(n), typeof t == "function" && r === "prototype" && "value" in n && iu in n && !n[iu]) {
        var a = PS(t, r);
        a && a[iu] && (t[r] = n.value, n = {
            configurable: au in n ? n[au] : a[au],
            enumerable: nu in n ? n[nu] : a[nu],
            writable: !1
        })
    }
    return ru(t, r, n)
} : ru : function (t, r, n) {
    if (ai(t), r = rh(r), ai(n), TS) try {
        return ru(t, r, n)
    } catch {}
    if ("get" in n || "set" in n) throw new kS("Accessors not supported");
    return "value" in n && (t[r] = n.value), t
};
var LS = Ie,
    DS = vt,
    FS = Ta,
    _r = LS ? function (e, t, r) {
        return DS.f(e, t, FS(1, r))
    } : function (e, t, r) {
        return e[t] = r, e
    },
    kv = {
        exports: {}
    },
    lc = Ie,
    jS = Ne,
    Pv = Function.prototype,
    US = lc && Object.getOwnPropertyDescriptor,
    xl = jS(Pv, "name"),
    MS = xl && (function () {}).name === "something",
    BS = xl && (!lc || lc && US(Pv, "name").configurable),
    zS = {
        EXISTS: xl,
        PROPER: MS,
        CONFIGURABLE: BS
    },
    VS = se,
    qS = ye,
    fc = Nl,
    WS = VS(Function.toString);
qS(fc.inspectSource) || (fc.inspectSource = function (e) {
    return WS(e)
});
var Lv = fc.inspectSource,
    GS = fe,
    HS = ye,
    nh = GS.WeakMap,
    KS = HS(nh) && /native code/.test(String(nh)),
    XS = Iv,
    YS = Gs,
    ah = XS("keys"),
    kl = function (e) {
        return ah[e] || (ah[e] = YS(e))
    },
    Pl = {},
    JS = KS,
    Dv = fe,
    QS = xt,
    ZS = _r,
    su = Ne,
    ou = Nl,
    e3 = kl,
    t3 = Pl,
    ih = "Object already initialized",
    dc = Dv.TypeError,
    r3 = Dv.WeakMap,
    Hi, aa, Ki, n3 = function (e) {
        return Ki(e) ? aa(e) : Hi(e, {})
    },
    a3 = function (e) {
        return function (t) {
            var r;
            if (!QS(t) || (r = aa(t)).type !== e) throw new dc("Incompatible receiver, " + e + " required");
            return r
        }
    };
if (JS || ou.state) {
    var it = ou.state || (ou.state = new r3);
    it.get = it.get, it.has = it.has, it.set = it.set, Hi = function (e, t) {
        if (it.has(e)) throw new dc(ih);
        return t.facade = e, it.set(e, t), t
    }, aa = function (e) {
        return it.get(e) || {}
    }, Ki = function (e) {
        return it.has(e)
    }
} else {
    var Fr = e3("state");
    t3[Fr] = !0, Hi = function (e, t) {
        if (su(e, Fr)) throw new dc(ih);
        return t.facade = e, ZS(e, Fr, t), t
    }, aa = function (e) {
        return su(e, Fr) ? e[Fr] : {}
    }, Ki = function (e) {
        return su(e, Fr)
    }
}
var Fv = {
        set: Hi,
        get: aa,
        has: Ki,
        enforce: n3,
        getterFor: a3
    },
    Ll = se,
    i3 = me,
    s3 = ye,
    ii = Ne,
    hc = Ie,
    o3 = zS.CONFIGURABLE,
    u3 = Lv,
    jv = Fv,
    c3 = jv.enforce,
    l3 = jv.get,
    sh = String,
    Ti = Object.defineProperty,
    f3 = Ll("".slice),
    d3 = Ll("".replace),
    h3 = Ll([].join),
    p3 = hc && !i3(function () {
        return Ti(function () {}, "length", {
            value: 8
        }).length !== 8
    }),
    m3 = String(String).split("String"),
    g3 = kv.exports = function (e, t, r) {
        f3(sh(t), 0, 7) === "Symbol(" && (t = "[" + d3(sh(t), /^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!ii(e, "name") || o3 && e.name !== t) && (hc ? Ti(e, "name", {
            value: t,
            configurable: !0
        }) : e.name = t), p3 && r && ii(r, "arity") && e.length !== r.arity && Ti(e, "length", {
            value: r.arity
        });
        try {
            r && ii(r, "constructor") && r.constructor ? hc && Ti(e, "prototype", {
                writable: !1
            }) : e.prototype && (e.prototype = void 0)
        } catch {}
        var n = c3(e);
        return ii(n, "source") || (n.source = h3(m3, typeof t == "string" ? t : "")), e
    };
Function.prototype.toString = g3(function () {
    return s3(this) && l3(this).source || u3(this)
}, "toString");
var Uv = kv.exports,
    v3 = ye,
    y3 = vt,
    b3 = Uv,
    w3 = Il,
    Ks = function (e, t, r, n) {
        n || (n = {});
        var a = n.enumerable,
            i = n.name !== void 0 ? n.name : t;
        if (v3(r) && b3(r, i, n), n.global) a ? e[t] = r : w3(t, r);
        else {
            try {
                n.unsafe ? e[t] && (a = !0) : delete e[t]
            } catch {}
            a ? e[t] = r : y3.f(e, t, {
                value: r,
                enumerable: !1,
                configurable: !n.nonConfigurable,
                writable: !n.nonWritable
            })
        }
        return e
    },
    Mv = {},
    E3 = Math.ceil,
    S3 = Math.floor,
    $3 = Math.trunc || function (t) {
        var r = +t;
        return (r > 0 ? S3 : E3)(r)
    },
    A3 = $3,
    Pt = function (e) {
        var t = +e;
        return t !== t || t === 0 ? 0 : A3(t)
    },
    O3 = Pt,
    _3 = Math.max,
    R3 = Math.min,
    Bv = function (e, t) {
        var r = O3(e);
        return r < 0 ? _3(r + t, 0) : R3(r, t)
    },
    C3 = Pt,
    I3 = Math.min,
    N3 = function (e) {
        return e > 0 ? I3(C3(e), 9007199254740991) : 0
    },
    T3 = N3,
    Ve = function (e) {
        return T3(e.length)
    },
    x3 = Yt,
    k3 = Bv,
    P3 = Ve,
    oh = function (e) {
        return function (t, r, n) {
            var a = x3(t),
                i = P3(a),
                s = k3(n, i),
                o;
            if (e && r !== r) {
                for (; i > s;)
                    if (o = a[s++], o !== o) return !0
            } else
                for (; i > s; s++)
                    if ((e || s in a) && a[s] === r) return e || s || 0;
            return !e && -1
        }
    },
    L3 = {
        includes: oh(!0),
        indexOf: oh(!1)
    },
    D3 = se,
    uu = Ne,
    F3 = Yt,
    j3 = L3.indexOf,
    U3 = Pl,
    uh = D3([].push),
    zv = function (e, t) {
        var r = F3(e),
            n = 0,
            a = [],
            i;
        for (i in r) !uu(U3, i) && uu(r, i) && uh(a, i);
        for (; t.length > n;) uu(r, i = t[n++]) && (~j3(a, i) || uh(a, i));
        return a
    },
    Dl = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    M3 = zv,
    B3 = Dl,
    z3 = B3.concat("length", "prototype");
Mv.f = Object.getOwnPropertyNames || function (t) {
    return M3(t, z3)
};
var Vv = {};
Vv.f = Object.getOwnPropertySymbols;
var V3 = gt,
    q3 = se,
    W3 = Mv,
    G3 = Vv,
    H3 = yt,
    K3 = q3([].concat),
    X3 = V3("Reflect", "ownKeys") || function (t) {
        var r = W3.f(H3(t)),
            n = G3.f;
        return n ? K3(r, n(t)) : r
    },
    ch = Ne,
    Y3 = X3,
    J3 = Ol,
    Q3 = vt,
    qv = function (e, t, r) {
        for (var n = Y3(t), a = Q3.f, i = J3.f, s = 0; s < n.length; s++) {
            var o = n[s];
            !ch(e, o) && !(r && ch(r, o)) && a(e, o, i(t, o))
        }
    },
    Z3 = me,
    e$ = ye,
    t$ = /#|\.prototype\./,
    Pa = function (e, t) {
        var r = n$[r$(e)];
        return r === i$ ? !0 : r === a$ ? !1 : e$(t) ? Z3(t) : !!t
    },
    r$ = Pa.normalize = function (e) {
        return String(e).replace(t$, ".").toLowerCase()
    },
    n$ = Pa.data = {},
    a$ = Pa.NATIVE = "N",
    i$ = Pa.POLYFILL = "P",
    s$ = Pa,
    cu = fe,
    o$ = Ol.f,
    u$ = _r,
    c$ = Ks,
    l$ = Il,
    f$ = qv,
    d$ = s$,
    he = function (e, t) {
        var r = e.target,
            n = e.global,
            a = e.stat,
            i, s, o, u, c, l;
        if (n ? s = cu : a ? s = cu[r] || l$(r, {}) : s = (cu[r] || {}).prototype, s)
            for (o in t) {
                if (c = t[o], e.dontCallGetSet ? (l = o$(s, o), u = l && l.value) : u = s[o], i = d$(n ? o : r + (a ? "." : "#") + o, e.forced), !i && u !== void 0) {
                    if (typeof c == typeof u) continue;
                    f$(c, u)
                }(e.sham || u && u.sham) && u$(c, "sham", !0), c$(s, o, c, e)
            }
    },
    h$ = qs,
    Wv = Function.prototype,
    lh = Wv.apply,
    fh = Wv.call,
    Xs = typeof Reflect == "object" && Reflect.apply || (h$ ? fh.bind(lh) : function () {
        return fh.apply(lh, arguments)
    }),
    p$ = se,
    m$ = kt,
    g$ = function (e, t, r) {
        try {
            return p$(m$(Object.getOwnPropertyDescriptor(e, t)[r]))
        } catch {}
    },
    v$ = ye,
    y$ = String,
    b$ = TypeError,
    w$ = function (e) {
        if (typeof e == "object" || v$(e)) return e;
        throw new b$("Can't set " + y$(e) + " as a prototype")
    },
    E$ = g$,
    S$ = yt,
    $$ = w$,
    Fl = Object.setPrototypeOf || ("__proto__" in {} ? function () {
        var e = !1,
            t = {},
            r;
        try {
            r = E$(Object.prototype, "__proto__", "set"), r(t, []), e = t instanceof Array
        } catch {}
        return function (a, i) {
            return S$(a), $$(i), e ? r(a, i) : a.__proto__ = i, a
        }
    }() : void 0),
    A$ = vt.f,
    O$ = function (e, t, r) {
        r in e || A$(e, r, {
            configurable: !0,
            get: function () {
                return t[r]
            },
            set: function (n) {
                t[r] = n
            }
        })
    },
    _$ = ye,
    R$ = xt,
    dh = Fl,
    Gv = function (e, t, r) {
        var n, a;
        return dh && _$(n = t.constructor) && n !== r && R$(a = n.prototype) && a !== r.prototype && dh(e, a), e
    },
    C$ = Jt,
    I$ = C$("toStringTag"),
    Hv = {};
Hv[I$] = "z";
var N$ = String(Hv) === "[object z]",
    T$ = N$,
    x$ = ye,
    xi = xa,
    k$ = Jt,
    P$ = k$("toStringTag"),
    L$ = Object,
    D$ = xi(function () {
        return arguments
    }()) === "Arguments",
    F$ = function (e, t) {
        try {
            return e[t]
        } catch {}
    },
    gn = T$ ? xi : function (e) {
        var t, r, n;
        return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = F$(t = L$(e), P$)) == "string" ? r : D$ ? xi(t) : (n = xi(t)) === "Object" && x$(t.callee) ? "Arguments" : n
    },
    j$ = gn,
    U$ = String,
    Rr = function (e) {
        if (j$(e) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
        return U$(e)
    },
    M$ = Rr,
    Kv = function (e, t) {
        return e === void 0 ? arguments.length < 2 ? "" : t : M$(e)
    },
    B$ = xt,
    z$ = _r,
    V$ = function (e, t) {
        B$(t) && "cause" in t && z$(e, "cause", t.cause)
    },
    q$ = se,
    Xv = Error,
    W$ = q$("".replace),
    G$ = function (e) {
        return String(new Xv(e).stack)
    }("zxcasd"),
    Yv = /\n\s*at [^:]*:[^\n]*/,
    H$ = Yv.test(G$),
    Jv = function (e, t) {
        if (H$ && typeof e == "string" && !Xv.prepareStackTrace)
            for (; t--;) e = W$(e, Yv, "");
        return e
    },
    K$ = me,
    X$ = Ta,
    Qv = !K$(function () {
        var e = new Error("a");
        return "stack" in e ? (Object.defineProperty(e, "stack", X$(1, 7)), e.stack !== 7) : !0
    }),
    Y$ = _r,
    J$ = Jv,
    Q$ = Qv,
    hh = Error.captureStackTrace,
    Z$ = function (e, t, r, n) {
        Q$ && (hh ? hh(e, t) : Y$(e, "stack", J$(r, n)))
    },
    ph = gt,
    e4 = Ne,
    mh = _r,
    t4 = mn,
    gh = Fl,
    vh = qv,
    yh = O$,
    r4 = Gv,
    n4 = Kv,
    a4 = V$,
    i4 = Z$,
    s4 = Ie,
    Zv = function (e, t, r, n) {
        var a = "stackTraceLimit",
            i = n ? 2 : 1,
            s = e.split("."),
            o = s[s.length - 1],
            u = ph.apply(null, s);
        if (u) {
            var c = u.prototype;
            if (e4(c, "cause") && delete c.cause, !r) return u;
            var l = ph("Error"),
                f = t(function (d, h) {
                    var p = n4(n ? h : d, void 0),
                        y = n ? new u(d) : new u;
                    return p !== void 0 && mh(y, "message", p), i4(y, f, y.stack, 2), this && t4(c, this) && r4(y, this, f), arguments.length > i && a4(y, arguments[i]), y
                });
            f.prototype = c, o !== "Error" ? gh ? gh(f, l) : vh(f, l, {
                name: !0
            }) : s4 && a in u && (yh(f, u, a), yh(f, u, "prepareStackTrace")), vh(f, u);
            try {
                c.name !== o && mh(c, "name", o), c.constructor = f
            } catch {}
            return f
        }
    },
    ey = he,
    o4 = fe,
    bt = Xs,
    ty = Zv,
    pc = "WebAssembly",
    bh = o4[pc],
    Xi = new Error("e", {
        cause: 7
    }).cause !== 7,
    Cr = function (e, t) {
        var r = {};
        r[e] = ty(e, t, Xi), ey({
            global: !0,
            constructor: !0,
            arity: 1,
            forced: Xi
        }, r)
    },
    jl = function (e, t) {
        if (bh && bh[e]) {
            var r = {};
            r[e] = ty(pc + "." + e, t, Xi), ey({
                target: pc,
                stat: !0,
                constructor: !0,
                arity: 1,
                forced: Xi
            }, r)
        }
    };
Cr("Error", function (e) {
    return function (r) {
        return bt(e, this, arguments)
    }
});
Cr("EvalError", function (e) {
    return function (r) {
        return bt(e, this, arguments)
    }
});
Cr("RangeError", function (e) {
    return function (r) {
        return bt(e, this, arguments)
    }
});
Cr("ReferenceError", function (e) {
    return function (r) {
        return bt(e, this, arguments)
    }
});
Cr("SyntaxError", function (e) {
    return function (r) {
        return bt(e, this, arguments)
    }
});
Cr("TypeError", function (e) {
    return function (r) {
        return bt(e, this, arguments)
    }
});
Cr("URIError", function (e) {
    return function (r) {
        return bt(e, this, arguments)
    }
});
jl("CompileError", function (e) {
    return function (r) {
        return bt(e, this, arguments)
    }
});
jl("LinkError", function (e) {
    return function (r) {
        return bt(e, this, arguments)
    }
});
jl("RuntimeError", function (e) {
    return function (r) {
        return bt(e, this, arguments)
    }
});
var u4 = he,
    c4 = gt,
    l4 = Xs,
    wh = me,
    f4 = Zv,
    Ul = "AggregateError",
    Eh = c4(Ul),
    Sh = !wh(function () {
        return Eh([1]).errors[0] !== 1
    }) && wh(function () {
        return Eh([1], Ul, {
            cause: 7
        }).cause !== 7
    });
u4({
    global: !0,
    constructor: !0,
    arity: 2,
    forced: Sh
}, {
    AggregateError: f4(Ul, function (e) {
        return function (r, n) {
            return l4(e, this, arguments)
        }
    }, Sh, !0)
});
var ry = {},
    d4 = zv,
    h4 = Dl,
    p4 = Object.keys || function (t) {
        return d4(t, h4)
    },
    m4 = Ie,
    g4 = xv,
    v4 = vt,
    y4 = yt,
    b4 = Yt,
    w4 = p4;
ry.f = m4 && !g4 ? Object.defineProperties : function (t, r) {
    y4(t);
    for (var n = b4(r), a = w4(r), i = a.length, s = 0, o; i > s;) v4.f(t, o = a[s++], n[o]);
    return t
};
var E4 = gt,
    ny = E4("document", "documentElement"),
    S4 = yt,
    $4 = ry,
    $h = Dl,
    A4 = Pl,
    O4 = ny,
    _4 = Tl,
    R4 = kl,
    Ah = ">",
    Oh = "<",
    mc = "prototype",
    gc = "script",
    ay = R4("IE_PROTO"),
    lu = function () {},
    iy = function (e) {
        return Oh + gc + Ah + e + Oh + "/" + gc + Ah
    },
    _h = function (e) {
        e.write(iy("")), e.close();
        var t = e.parentWindow.Object;
        return e = null, t
    },
    C4 = function () {
        var e = _4("iframe"),
            t = "java" + gc + ":",
            r;
        return e.style.display = "none", O4.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(iy("document.F=Object")), r.close(), r.F
    },
    si, ki = function () {
        try {
            si = new ActiveXObject("htmlfile")
        } catch {}
        ki = typeof document < "u" ? document.domain && si ? _h(si) : C4() : _h(si);
        for (var e = $h.length; e--;) delete ki[mc][$h[e]];
        return ki()
    };
A4[ay] = !0;
var I4 = Object.create || function (t, r) {
        var n;
        return t !== null ? (lu[mc] = S4(t), n = new lu, lu[mc] = null, n[ay] = t) : n = ki(), r === void 0 ? n : $4.f(n, r)
    },
    N4 = Jt,
    T4 = I4,
    x4 = vt.f,
    vc = N4("unscopables"),
    yc = Array.prototype;
yc[vc] === void 0 && x4(yc, vc, {
    configurable: !0,
    value: T4(null)
});
var vn = function (e) {
        yc[vc][e] = !0
    },
    k4 = he,
    P4 = Or,
    L4 = Ve,
    D4 = Pt,
    F4 = vn;
k4({
    target: "Array",
    proto: !0
}, {
    at: function (t) {
        var r = P4(this),
            n = L4(r),
            a = D4(t),
            i = a >= 0 ? a : n + a;
        return i < 0 || i >= n ? void 0 : r[i]
    }
});
F4("at");
var j4 = xa,
    U4 = se,
    M4 = function (e) {
        if (j4(e) === "Function") return U4(e)
    },
    Rh = M4,
    B4 = kt,
    z4 = qs,
    V4 = Rh(Rh.bind),
    Ml = function (e, t) {
        return B4(e), t === void 0 ? e : z4 ? V4(e, t) : function () {
            return e.apply(t, arguments)
        }
    },
    q4 = Ml,
    W4 = bv,
    G4 = Or,
    H4 = Ve,
    Ch = function (e) {
        var t = e === 1;
        return function (r, n, a) {
            for (var i = G4(r), s = W4(i), o = H4(s), u = q4(n, a), c, l; o-- > 0;)
                if (c = s[o], l = u(c, o, i), l) switch (e) {
                    case 0:
                        return c;
                    case 1:
                        return o
                }
            return t ? -1 : void 0
        }
    },
    Ys = {
        findLast: Ch(0),
        findLastIndex: Ch(1)
    },
    K4 = he,
    X4 = Ys.findLast,
    Y4 = vn;
K4({
    target: "Array",
    proto: !0
}, {
    findLast: function (t) {
        return X4(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
});
Y4("findLast");
var J4 = he,
    Q4 = Ys.findLastIndex,
    Z4 = vn;
J4({
    target: "Array",
    proto: !0
}, {
    findLastIndex: function (t) {
        return Q4(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
});
Z4("findLastIndex");
var eA = xa,
    tA = Array.isArray || function (t) {
        return eA(t) === "Array"
    },
    rA = Ie,
    nA = tA,
    aA = TypeError,
    iA = Object.getOwnPropertyDescriptor,
    sA = rA && ! function () {
        if (this !== void 0) return !0;
        try {
            Object.defineProperty([], "length", {
                writable: !1
            }).length = 1
        } catch (e) {
            return e instanceof TypeError
        }
    }(),
    sy = sA ? function (e, t) {
        if (nA(e) && !iA(e, "length").writable) throw new aA("Cannot set read only .length");
        return e.length = t
    } : function (e, t) {
        return e.length = t
    },
    oA = TypeError,
    uA = 9007199254740991,
    Bl = function (e) {
        if (e > uA) throw oA("Maximum allowed index exceeded");
        return e
    },
    cA = he,
    lA = Or,
    fA = Ve,
    dA = sy,
    hA = Bl,
    pA = me,
    mA = pA(function () {
        return [].push.call({
            length: 4294967296
        }, 1) !== 4294967297
    }),
    gA = function () {
        try {
            Object.defineProperty([], "length", {
                writable: !1
            }).push()
        } catch (e) {
            return e instanceof TypeError
        }
    },
    vA = mA || !gA();
cA({
    target: "Array",
    proto: !0,
    arity: 1,
    forced: vA
}, {
    push: function (t) {
        var r = lA(this),
            n = fA(r),
            a = arguments.length;
        hA(n + a);
        for (var i = 0; i < a; i++) r[n] = arguments[i], n++;
        return dA(r, n), n
    }
});
var yA = Ve,
    oy = function (e, t) {
        for (var r = yA(e), n = new t(r), a = 0; a < r; a++) n[a] = e[r - a - 1];
        return n
    },
    bA = he,
    wA = oy,
    EA = Yt,
    SA = vn,
    $A = Array;
bA({
    target: "Array",
    proto: !0
}, {
    toReversed: function () {
        return wA(EA(this), $A)
    }
});
SA("toReversed");
var AA = Ve,
    uy = function (e, t, r) {
        for (var n = 0, a = arguments.length > 2 ? r : AA(t), i = new e(a); a > n;) i[n] = t[n++];
        return i
    },
    OA = fe,
    _A = function (e, t) {
        var r = OA[e],
            n = r && r.prototype;
        return n && n[t]
    },
    RA = he,
    CA = se,
    IA = kt,
    NA = Yt,
    TA = uy,
    xA = _A,
    kA = vn,
    PA = Array,
    LA = CA(xA("Array", "sort"));
RA({
    target: "Array",
    proto: !0
}, {
    toSorted: function (t) {
        t !== void 0 && IA(t);
        var r = NA(this),
            n = TA(PA, r);
        return LA(n, t)
    }
});
kA("toSorted");
var DA = he,
    FA = vn,
    jA = Bl,
    UA = Ve,
    MA = Bv,
    BA = Yt,
    zA = Pt,
    VA = Array,
    qA = Math.max,
    WA = Math.min;
DA({
    target: "Array",
    proto: !0
}, {
    toSpliced: function (t, r) {
        var n = BA(this),
            a = UA(n),
            i = MA(t, a),
            s = arguments.length,
            o = 0,
            u, c, l, f;
        for (s === 0 ? u = c = 0 : s === 1 ? (u = 0, c = a - i) : (u = s - 2, c = WA(qA(zA(r), 0), a - i)), l = jA(a + u - c), f = VA(l); o < i; o++) f[o] = n[o];
        for (; o < i + u; o++) f[o] = arguments[o - i + 2];
        for (; o < l; o++) f[o] = n[o + c - u];
        return f
    }
});
FA("toSpliced");
var Ih = ka,
    GA = TypeError,
    HA = function (e, t) {
        if (!delete e[t]) throw new GA("Cannot delete property " + Ih(t) + " of " + Ih(e))
    },
    KA = he,
    XA = Or,
    YA = Ve,
    JA = sy,
    QA = HA,
    ZA = Bl,
    eO = [].unshift(0) !== 1,
    tO = function () {
        try {
            Object.defineProperty([], "length", {
                writable: !1
            }).unshift()
        } catch (e) {
            return e instanceof TypeError
        }
    },
    rO = eO || !tO();
KA({
    target: "Array",
    proto: !0,
    arity: 1,
    forced: rO
}, {
    unshift: function (t) {
        var r = XA(this),
            n = YA(r),
            a = arguments.length;
        if (a) {
            ZA(n + a);
            for (var i = n; i--;) {
                var s = i + a;
                i in r ? r[s] = r[i] : QA(r, s)
            }
            for (var o = 0; o < a; o++) r[o] = arguments[o]
        }
        return JA(r, n + a)
    }
});
var nO = Ve,
    aO = Pt,
    iO = RangeError,
    cy = function (e, t, r, n) {
        var a = nO(e),
            i = aO(r),
            s = i < 0 ? a + i : i;
        if (s >= a || s < 0) throw new iO("Incorrect index");
        for (var o = new t(a), u = 0; u < a; u++) o[u] = u === s ? n : e[u];
        return o
    },
    sO = he,
    oO = cy,
    uO = Yt,
    cO = Array;
sO({
    target: "Array",
    proto: !0
}, {
    with: function (e, t) {
        return oO(uO(this), cO, e, t)
    }
});
var ly = {},
    lO = Jt,
    fO = ly,
    dO = lO("iterator"),
    hO = Array.prototype,
    pO = function (e) {
        return e !== void 0 && (fO.Array === e || hO[dO] === e)
    },
    mO = gn,
    Nh = Cl,
    gO = Ws,
    vO = ly,
    yO = Jt,
    bO = yO("iterator"),
    fy = function (e) {
        if (!gO(e)) return Nh(e, bO) || Nh(e, "@@iterator") || vO[mO(e)]
    },
    wO = mt,
    EO = kt,
    SO = yt,
    $O = ka,
    AO = fy,
    OO = TypeError,
    _O = function (e, t) {
        var r = arguments.length < 2 ? AO(e) : t;
        if (EO(r)) return SO(wO(r, e));
        throw new OO($O(e) + " is not iterable")
    },
    RO = mt,
    Th = yt,
    CO = Cl,
    IO = function (e, t, r) {
        var n, a;
        Th(e);
        try {
            if (n = CO(e, "return"), !n) {
                if (t === "throw") throw r;
                return r
            }
            n = RO(n, e)
        } catch (i) {
            a = !0, n = i
        }
        if (t === "throw") throw r;
        if (a) throw n;
        return Th(n), r
    },
    NO = Ml,
    TO = mt,
    xO = yt,
    kO = ka,
    PO = pO,
    LO = Ve,
    xh = mn,
    DO = _O,
    FO = fy,
    kh = IO,
    jO = TypeError,
    Pi = function (e, t) {
        this.stopped = e, this.result = t
    },
    Ph = Pi.prototype,
    zl = function (e, t, r) {
        var n = r && r.that,
            a = !!(r && r.AS_ENTRIES),
            i = !!(r && r.IS_RECORD),
            s = !!(r && r.IS_ITERATOR),
            o = !!(r && r.INTERRUPTED),
            u = NO(t, n),
            c, l, f, d, h, p, y, b = function (g) {
                return c && kh(c, "normal", g), new Pi(!0, g)
            },
            _ = function (g) {
                return a ? (xO(g), o ? u(g[0], g[1], b) : u(g[0], g[1])) : o ? u(g, b) : u(g)
            };
        if (i) c = e.iterator;
        else if (s) c = e;
        else {
            if (l = FO(e), !l) throw new jO(kO(e) + " is not iterable");
            if (PO(l)) {
                for (f = 0, d = LO(e); d > f; f++)
                    if (h = _(e[f]), h && xh(Ph, h)) return h;
                return new Pi(!1)
            }
            c = DO(e, l)
        }
        for (p = i ? e.next : c.next; !(y = TO(p, c)).done;) {
            try {
                h = _(y.value)
            } catch (g) {
                kh(c, "throw", g)
            }
            if (typeof h == "object" && h && xh(Ph, h)) return h
        }
        return new Pi(!1)
    },
    oi = se,
    Tn = Map.prototype,
    dy = {
        Map,
        set: oi(Tn.set),
        get: oi(Tn.get),
        has: oi(Tn.has),
        remove: oi(Tn.delete),
        proto: Tn
    },
    UO = he,
    MO = se,
    BO = kt,
    zO = Ar,
    VO = zl,
    Js = dy,
    qO = Cv,
    WO = Js.Map,
    GO = Js.has,
    HO = Js.get,
    KO = Js.set,
    XO = MO([].push);
UO({
    target: "Map",
    stat: !0,
    forced: qO
}, {
    groupBy: function (t, r) {
        zO(t), BO(r);
        var n = new WO,
            a = 0;
        return VO(t, function (i) {
            var s = r(i, a++);
            GO(n, s) ? XO(HO(n, s), i) : KO(n, s, [i])
        }), n
    }
});
var YO = he,
    JO = gt,
    QO = se,
    ZO = kt,
    e_ = Ar,
    t_ = Hs,
    r_ = zl,
    n_ = JO("Object", "create"),
    a_ = QO([].push);
YO({
    target: "Object",
    stat: !0
}, {
    groupBy: function (t, r) {
        e_(t), ZO(r);
        var n = n_(null),
            a = 0;
        return r_(t, function (i) {
            var s = t_(r(i, a++));
            s in n ? a_(n[s], i) : n[s] = [i]
        }), n
    }
});
var i_ = he,
    s_ = Ne;
i_({
    target: "Object",
    stat: !0
}, {
    hasOwn: s_
});
var hy = {},
    Lh = kt,
    o_ = TypeError,
    u_ = function (e) {
        var t, r;
        this.promise = new e(function (n, a) {
            if (t !== void 0 || r !== void 0) throw new o_("Bad Promise constructor");
            t = n, r = a
        }), this.resolve = Lh(t), this.reject = Lh(r)
    };
hy.f = function (e) {
    return new u_(e)
};
var c_ = he,
    l_ = hy;
c_({
    target: "Promise",
    stat: !0
}, {
    withResolvers: function () {
        var t = l_.f(this);
        return {
            promise: t.promise,
            resolve: t.resolve,
            reject: t.reject
        }
    }
});
var Dh = Uv,
    f_ = vt,
    Vl = function (e, t, r) {
        return r.get && Dh(r.get, t, {
            getter: !0
        }), r.set && Dh(r.set, t, {
            setter: !0
        }), f_.f(e, t, r)
    },
    d_ = yt,
    py = function () {
        var e = d_(this),
            t = "";
        return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
    },
    h_ = fe,
    p_ = Ie,
    m_ = Vl,
    g_ = py,
    v_ = me,
    my = h_.RegExp,
    gy = my.prototype,
    y_ = p_ && v_(function () {
        var e = !0;
        try {
            my(".", "d")
        } catch {
            e = !1
        }
        var t = {},
            r = "",
            n = e ? "dgimsy" : "gimsy",
            a = function (u, c) {
                Object.defineProperty(t, u, {
                    get: function () {
                        return r += c, !0
                    }
                })
            },
            i = {
                dotAll: "s",
                global: "g",
                ignoreCase: "i",
                multiline: "m",
                sticky: "y"
            };
        e && (i.hasIndices = "d");
        for (var s in i) a(s, i[s]);
        var o = Object.getOwnPropertyDescriptor(gy, "flags").get.call(t);
        return o !== n || r !== n
    });
y_ && m_(gy, "flags", {
    configurable: !0,
    get: g_
});
var b_ = he,
    w_ = se,
    E_ = Ar,
    S_ = Pt,
    $_ = Rr,
    A_ = me,
    O_ = w_("".charAt),
    __ = A_(function () {
        return "𠮷".at(-2) !== "\uD842"
    });
b_({
    target: "String",
    proto: !0,
    forced: __
}, {
    at: function (t) {
        var r = $_(E_(this)),
            n = r.length,
            a = S_(t),
            i = a >= 0 ? a : n + a;
        return i < 0 || i >= n ? void 0 : O_(r, i)
    }
});
var R_ = he,
    C_ = se,
    I_ = Ar,
    N_ = Rr,
    Fh = C_("".charCodeAt);
R_({
    target: "String",
    proto: !0
}, {
    isWellFormed: function () {
        for (var t = N_(I_(this)), r = t.length, n = 0; n < r; n++) {
            var a = Fh(t, n);
            if ((a & 63488) === 55296 && (a >= 56320 || ++n >= r || (Fh(t, n) & 64512) !== 56320)) return !1
        }
        return !0
    }
});
var T_ = he,
    vy = mt,
    ql = se,
    x_ = Ar,
    k_ = Rr,
    P_ = me,
    L_ = Array,
    fu = ql("".charAt),
    jh = ql("".charCodeAt),
    D_ = ql([].join),
    bc = "".toWellFormed,
    F_ = "�",
    Uh = bc && P_(function () {
        return vy(bc, 1) !== "1"
    });
T_({
    target: "String",
    proto: !0,
    forced: Uh
}, {
    toWellFormed: function () {
        var t = k_(x_(this));
        if (Uh) return vy(bc, t);
        for (var r = t.length, n = L_(r), a = 0; a < r; a++) {
            var i = jh(t, a);
            (i & 63488) !== 55296 ? n[a] = fu(t, a) : i >= 56320 || a + 1 >= r || (jh(t, a + 1) & 64512) !== 56320 ? n[a] = F_ : (n[a] = fu(t, a), n[++a] = fu(t, a))
        }
        return D_(n, "")
    }
});
var j_ = typeof ArrayBuffer < "u" && typeof DataView < "u",
    U_ = me,
    M_ = !U_(function () {
        function e() {}
        return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
    }),
    B_ = Ne,
    z_ = ye,
    V_ = Or,
    q_ = kl,
    W_ = M_,
    Mh = q_("IE_PROTO"),
    wc = Object,
    G_ = wc.prototype,
    H_ = W_ ? wc.getPrototypeOf : function (e) {
        var t = V_(e);
        if (B_(t, Mh)) return t[Mh];
        var r = t.constructor;
        return z_(r) && t instanceof r ? r.prototype : t instanceof wc ? G_ : null
    },
    K_ = j_,
    Wl = Ie,
    _e = fe,
    yy = ye,
    Qs = xt,
    Kt = Ne,
    Gl = gn,
    X_ = ka,
    Y_ = _r,
    Ec = Ks,
    J_ = Vl,
    Q_ = mn,
    Zs = H_,
    yn = Fl,
    Z_ = Jt,
    e5 = Gs,
    by = Fv,
    wy = by.enforce,
    t5 = by.get,
    Yi = _e.Int8Array,
    Sc = Yi && Yi.prototype,
    Bh = _e.Uint8ClampedArray,
    zh = Bh && Bh.prototype,
    ft = Yi && Zs(Yi),
    tt = Sc && Zs(Sc),
    r5 = Object.prototype,
    Hl = _e.TypeError,
    Vh = Z_("toStringTag"),
    $c = e5("TYPED_ARRAY_TAG"),
    Ji = "TypedArrayConstructor",
    Ct = K_ && !!yn && Gl(_e.opera) !== "Opera",
    Ey = !1,
    De, Bt, Hr, It = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
    },
    Kl = {
        BigInt64Array: 8,
        BigUint64Array: 8
    },
    n5 = function (t) {
        if (!Qs(t)) return !1;
        var r = Gl(t);
        return r === "DataView" || Kt(It, r) || Kt(Kl, r)
    },
    Sy = function (e) {
        var t = Zs(e);
        if (Qs(t)) {
            var r = t5(t);
            return r && Kt(r, Ji) ? r[Ji] : Sy(t)
        }
    },
    $y = function (e) {
        if (!Qs(e)) return !1;
        var t = Gl(e);
        return Kt(It, t) || Kt(Kl, t)
    },
    a5 = function (e) {
        if ($y(e)) return e;
        throw new Hl("Target is not a typed array")
    },
    i5 = function (e) {
        if (yy(e) && (!yn || Q_(ft, e))) return e;
        throw new Hl(X_(e) + " is not a typed array constructor")
    },
    s5 = function (e, t, r, n) {
        if (Wl) {
            if (r)
                for (var a in It) {
                    var i = _e[a];
                    if (i && Kt(i.prototype, e)) try {
                        delete i.prototype[e]
                    } catch {
                        try {
                            i.prototype[e] = t
                        } catch {}
                    }
                }(!tt[e] || r) && Ec(tt, e, r ? t : Ct && Sc[e] || t, n)
        }
    },
    o5 = function (e, t, r) {
        var n, a;
        if (Wl) {
            if (yn) {
                if (r) {
                    for (n in It)
                        if (a = _e[n], a && Kt(a, e)) try {
                            delete a[e]
                        } catch {}
                }
                if (!ft[e] || r) try {
                    return Ec(ft, e, r ? t : Ct && ft[e] || t)
                } catch {} else return
            }
            for (n in It) a = _e[n], a && (!a[e] || r) && Ec(a, e, t)
        }
    };
for (De in It) Bt = _e[De], Hr = Bt && Bt.prototype, Hr ? wy(Hr)[Ji] = Bt : Ct = !1;
for (De in Kl) Bt = _e[De], Hr = Bt && Bt.prototype, Hr && (wy(Hr)[Ji] = Bt);
if ((!Ct || !yy(ft) || ft === Function.prototype) && (ft = function () {
        throw new Hl("Incorrect invocation")
    }, Ct))
    for (De in It) _e[De] && yn(_e[De], ft);
if ((!Ct || !tt || tt === r5) && (tt = ft.prototype, Ct))
    for (De in It) _e[De] && yn(_e[De].prototype, tt);
Ct && Zs(zh) !== tt && yn(zh, tt);
if (Wl && !Kt(tt, Vh)) {
    Ey = !0, J_(tt, Vh, {
        configurable: !0,
        get: function () {
            return Qs(this) ? this[$c] : void 0
        }
    });
    for (De in It) _e[De] && Y_(_e[De], $c, De)
}
var Ir = {
        NATIVE_ARRAY_BUFFER_VIEWS: Ct,
        TYPED_ARRAY_TAG: Ey && $c,
        aTypedArray: a5,
        aTypedArrayConstructor: i5,
        exportTypedArrayMethod: s5,
        exportTypedArrayStaticMethod: o5,
        getTypedArrayConstructor: Sy,
        isView: n5,
        isTypedArray: $y,
        TypedArray: ft,
        TypedArrayPrototype: tt
    },
    Ay = Ir,
    u5 = Ve,
    c5 = Pt,
    l5 = Ay.aTypedArray,
    f5 = Ay.exportTypedArrayMethod;
f5("at", function (t) {
    var r = l5(this),
        n = u5(r),
        a = c5(t),
        i = a >= 0 ? a : n + a;
    return i < 0 || i >= n ? void 0 : r[i]
});
var Oy = Ir,
    d5 = Ys.findLast,
    h5 = Oy.aTypedArray,
    p5 = Oy.exportTypedArrayMethod;
p5("findLast", function (t) {
    return d5(h5(this), t, arguments.length > 1 ? arguments[1] : void 0)
});
var _y = Ir,
    m5 = Ys.findLastIndex,
    g5 = _y.aTypedArray,
    v5 = _y.exportTypedArrayMethod;
v5("findLastIndex", function (t) {
    return m5(g5(this), t, arguments.length > 1 ? arguments[1] : void 0)
});
var y5 = Pt,
    b5 = RangeError,
    w5 = function (e) {
        var t = y5(e);
        if (t < 0) throw new b5("The argument can't be less than 0");
        return t
    },
    E5 = w5,
    S5 = RangeError,
    $5 = function (e, t) {
        var r = E5(e);
        if (r % t) throw new S5("Wrong offset");
        return r
    },
    Ry = fe,
    Cy = mt,
    Xl = Ir,
    A5 = Ve,
    O5 = $5,
    _5 = Or,
    Iy = me,
    R5 = Ry.RangeError,
    Ac = Ry.Int8Array,
    qh = Ac && Ac.prototype,
    Ny = qh && qh.set,
    C5 = Xl.aTypedArray,
    I5 = Xl.exportTypedArrayMethod,
    Oc = !Iy(function () {
        var e = new Uint8ClampedArray(2);
        return Cy(Ny, e, {
            length: 1,
            0: 3
        }, 1), e[1] !== 3
    }),
    N5 = Oc && Xl.NATIVE_ARRAY_BUFFER_VIEWS && Iy(function () {
        var e = new Ac(2);
        return e.set(1), e.set("2", 1), e[0] !== 0 || e[1] !== 2
    });
I5("set", function (t) {
    C5(this);
    var r = O5(arguments.length > 1 ? arguments[1] : void 0, 1),
        n = _5(t);
    if (Oc) return Cy(Ny, this, n, r);
    var a = this.length,
        i = A5(n),
        s = 0;
    if (i + r > a) throw new R5("Wrong length");
    for (; s < i;) this[r + s] = n[s++]
}, !Oc || N5);
var T5 = oy,
    Yl = Ir,
    x5 = Yl.aTypedArray,
    k5 = Yl.exportTypedArrayMethod,
    P5 = Yl.getTypedArrayConstructor;
k5("toReversed", function () {
    return T5(x5(this), P5(this))
});
var eo = Ir,
    L5 = se,
    D5 = kt,
    F5 = uy,
    j5 = eo.aTypedArray,
    U5 = eo.getTypedArrayConstructor,
    M5 = eo.exportTypedArrayMethod,
    B5 = L5(eo.TypedArrayPrototype.sort);
M5("toSorted", function (t) {
    t !== void 0 && D5(t);
    var r = j5(this),
        n = F5(U5(r), r);
    return B5(n, t)
});
var z5 = gn,
    V5 = function (e) {
        var t = z5(e);
        return t === "BigInt64Array" || t === "BigUint64Array"
    },
    q5 = Nv,
    W5 = TypeError,
    G5 = function (e) {
        var t = q5(e, "number");
        if (typeof t == "number") throw new W5("Can't convert number to bigint");
        return BigInt(t)
    },
    H5 = cy,
    Jl = Ir,
    K5 = V5,
    X5 = Pt,
    Y5 = G5,
    J5 = Jl.aTypedArray,
    Q5 = Jl.getTypedArrayConstructor,
    Z5 = Jl.exportTypedArrayMethod,
    eR = !! function () {
        try {
            new Int8Array(1).with(2, {
                valueOf: function () {
                    throw 8
                }
            })
        } catch (e) {
            return e === 8
        }
    }();
Z5("with", function (e, t) {
    var r = J5(this),
        n = X5(e),
        a = K5(r) ? Y5(t) : +t;
    return H5(r, Q5(r), n, a)
}, !eR);
var tR = mn,
    rR = TypeError,
    nR = function (e, t) {
        if (tR(t, e)) return e;
        throw new rR("Incorrect invocation")
    },
    aR = {
        IndexSizeError: {
            s: "INDEX_SIZE_ERR",
            c: 1,
            m: 1
        },
        DOMStringSizeError: {
            s: "DOMSTRING_SIZE_ERR",
            c: 2,
            m: 0
        },
        HierarchyRequestError: {
            s: "HIERARCHY_REQUEST_ERR",
            c: 3,
            m: 1
        },
        WrongDocumentError: {
            s: "WRONG_DOCUMENT_ERR",
            c: 4,
            m: 1
        },
        InvalidCharacterError: {
            s: "INVALID_CHARACTER_ERR",
            c: 5,
            m: 1
        },
        NoDataAllowedError: {
            s: "NO_DATA_ALLOWED_ERR",
            c: 6,
            m: 0
        },
        NoModificationAllowedError: {
            s: "NO_MODIFICATION_ALLOWED_ERR",
            c: 7,
            m: 1
        },
        NotFoundError: {
            s: "NOT_FOUND_ERR",
            c: 8,
            m: 1
        },
        NotSupportedError: {
            s: "NOT_SUPPORTED_ERR",
            c: 9,
            m: 1
        },
        InUseAttributeError: {
            s: "INUSE_ATTRIBUTE_ERR",
            c: 10,
            m: 1
        },
        InvalidStateError: {
            s: "INVALID_STATE_ERR",
            c: 11,
            m: 1
        },
        SyntaxError: {
            s: "SYNTAX_ERR",
            c: 12,
            m: 1
        },
        InvalidModificationError: {
            s: "INVALID_MODIFICATION_ERR",
            c: 13,
            m: 1
        },
        NamespaceError: {
            s: "NAMESPACE_ERR",
            c: 14,
            m: 1
        },
        InvalidAccessError: {
            s: "INVALID_ACCESS_ERR",
            c: 15,
            m: 1
        },
        ValidationError: {
            s: "VALIDATION_ERR",
            c: 16,
            m: 0
        },
        TypeMismatchError: {
            s: "TYPE_MISMATCH_ERR",
            c: 17,
            m: 1
        },
        SecurityError: {
            s: "SECURITY_ERR",
            c: 18,
            m: 1
        },
        NetworkError: {
            s: "NETWORK_ERR",
            c: 19,
            m: 1
        },
        AbortError: {
            s: "ABORT_ERR",
            c: 20,
            m: 1
        },
        URLMismatchError: {
            s: "URL_MISMATCH_ERR",
            c: 21,
            m: 1
        },
        QuotaExceededError: {
            s: "QUOTA_EXCEEDED_ERR",
            c: 22,
            m: 1
        },
        TimeoutError: {
            s: "TIMEOUT_ERR",
            c: 23,
            m: 1
        },
        InvalidNodeTypeError: {
            s: "INVALID_NODE_TYPE_ERR",
            c: 24,
            m: 1
        },
        DataCloneError: {
            s: "DATA_CLONE_ERR",
            c: 25,
            m: 1
        }
    },
    iR = he,
    sR = fe,
    Ql = gt,
    _c = Ta,
    Rc = vt.f,
    Wh = Ne,
    oR = nR,
    uR = Gv,
    Gh = Kv,
    du = aR,
    cR = Jv,
    lR = Ie,
    La = "DOMException",
    Ty = Ql("Error"),
    Da = Ql(La),
    Zl = function () {
        oR(this, fR);
        var t = arguments.length,
            r = Gh(t < 1 ? void 0 : arguments[0]),
            n = Gh(t < 2 ? void 0 : arguments[1], "Error"),
            a = new Da(r, n),
            i = new Ty(r);
        return i.name = La, Rc(a, "stack", _c(1, cR(i.stack, 1))), uR(a, this, Zl), a
    },
    fR = Zl.prototype = Da.prototype,
    dR = "stack" in new Ty(La),
    hR = "stack" in new Da(1, 2),
    hu = Da && lR && Object.getOwnPropertyDescriptor(sR, La),
    pR = !!hu && !(hu.writable && hu.configurable),
    Hh = dR && !pR && !hR;
iR({
    global: !0,
    constructor: !0,
    forced: Hh
}, {
    DOMException: Hh ? Zl : Da
});
var zn = Ql(La),
    Kh = zn.prototype;
if (Kh.constructor !== zn) {
    Rc(Kh, "constructor", _c(1, zn));
    for (var Xh in du)
        if (Wh(du, Xh)) {
            var Yh = du[Xh],
                Jh = Yh.s;
            Wh(zn, Jh) || Rc(zn, Jh, _c(6, Yh.c))
        }
}
var mR = se,
    xy = mR([].slice),
    gR = TypeError,
    bn = function (e, t) {
        if (e < t) throw new gR("Not enough arguments");
        return e
    },
    vR = _l,
    yR = /(?:ipad|iphone|ipod).*applewebkit/i.test(vR),
    bR = fe,
    wR = xa,
    to = wR(bR.process) === "process",
    Me = fe,
    ER = Xs,
    SR = Ml,
    Qh = ye,
    $R = Ne,
    ky = me,
    Zh = ny,
    AR = xy,
    ep = Tl,
    OR = bn,
    _R = yR,
    RR = to,
    Cc = Me.setImmediate,
    Ic = Me.clearImmediate,
    CR = Me.process,
    pu = Me.Dispatch,
    IR = Me.Function,
    tp = Me.MessageChannel,
    NR = Me.String,
    mu = 0,
    Kn = {},
    rp = "onreadystatechange",
    ia, ar, gu, vu;
ky(function () {
    ia = Me.location
});
var ef = function (e) {
        if ($R(Kn, e)) {
            var t = Kn[e];
            delete Kn[e], t()
        }
    },
    yu = function (e) {
        return function () {
            ef(e)
        }
    },
    np = function (e) {
        ef(e.data)
    },
    ap = function (e) {
        Me.postMessage(NR(e), ia.protocol + "//" + ia.host)
    };
(!Cc || !Ic) && (Cc = function (t) {
    OR(arguments.length, 1);
    var r = Qh(t) ? t : IR(t),
        n = AR(arguments, 1);
    return Kn[++mu] = function () {
        ER(r, void 0, n)
    }, ar(mu), mu
}, Ic = function (t) {
    delete Kn[t]
}, RR ? ar = function (e) {
    CR.nextTick(yu(e))
} : pu && pu.now ? ar = function (e) {
    pu.now(yu(e))
} : tp && !_R ? (gu = new tp, vu = gu.port2, gu.port1.onmessage = np, ar = SR(vu.postMessage, vu)) : Me.addEventListener && Qh(Me.postMessage) && !Me.importScripts && ia && ia.protocol !== "file:" && !ky(ap) ? (ar = ap, Me.addEventListener("message", np, !1)) : rp in ep("script") ? ar = function (e) {
    Zh.appendChild(ep("script"))[rp] = function () {
        Zh.removeChild(this), ef(e)
    }
} : ar = function (e) {
    setTimeout(yu(e), 0)
});
var Py = {
        set: Cc,
        clear: Ic
    },
    TR = he,
    xR = fe,
    ip = Py.clear;
TR({
    global: !0,
    bind: !0,
    enumerable: !0,
    forced: xR.clearImmediate !== ip
}, {
    clearImmediate: ip
});
var kR = typeof Bun == "function" && Bun && typeof Bun.version == "string",
    Ly = fe,
    PR = Xs,
    LR = ye,
    DR = kR,
    FR = _l,
    jR = xy,
    UR = bn,
    MR = Ly.Function,
    BR = /MSIE .\./.test(FR) || DR && function () {
        var e = Ly.Bun.version.split(".");
        return e.length < 3 || e[0] === "0" && (e[1] < 3 || e[1] === "3" && e[2] === "0")
    }(),
    zR = function (e, t) {
        var r = t ? 2 : 1;
        return BR ? function (n, a) {
            var i = UR(arguments.length, 1) > r,
                s = LR(n) ? n : MR(n),
                o = i ? jR(arguments, r) : [],
                u = i ? function () {
                    PR(s, this, o)
                } : s;
            return t ? e(u, a) : e(u)
        } : e
    },
    VR = he,
    Dy = fe,
    sp = Py.set,
    qR = zR,
    op = Dy.setImmediate ? qR(sp, !1) : sp;
VR({
    global: !0,
    bind: !0,
    enumerable: !0,
    forced: Dy.setImmediate !== op
}, {
    setImmediate: op
});
var WR = se,
    GR = me,
    Fy = ye,
    HR = gn,
    KR = gt,
    XR = Lv,
    jy = function () {},
    YR = [],
    Uy = KR("Reflect", "construct"),
    tf = /^\s*(?:class|function)\b/,
    JR = WR(tf.exec),
    QR = !tf.test(jy),
    xn = function (t) {
        if (!Fy(t)) return !1;
        try {
            return Uy(jy, YR, t), !0
        } catch {
            return !1
        }
    },
    My = function (t) {
        if (!Fy(t)) return !1;
        switch (HR(t)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
                return !1
        }
        try {
            return QR || !!JR(tf, XR(t))
        } catch {
            return !0
        }
    };
My.sham = !0;
var ZR = !Uy || GR(function () {
        var e;
        return xn(xn.call) || !xn(Object) || !xn(function () {
            e = !0
        }) || e
    }) ? My : xn,
    eC = Hs,
    tC = vt,
    rC = Ta,
    nC = function (e, t, r) {
        var n = eC(t);
        n in e ? tC.f(e, n, rC(0, r)) : e[n] = r
    },
    aC = mt,
    iC = Ne,
    sC = mn,
    oC = py,
    up = RegExp.prototype,
    uC = function (e) {
        var t = e.flags;
        return t === void 0 && !("flags" in up) && !iC(e, "flags") && sC(up, e) ? aC(oC, e) : t
    },
    bu = se,
    ui = Set.prototype,
    By = {
        Set,
        add: bu(ui.add),
        has: bu(ui.has),
        remove: bu(ui.delete),
        proto: ui
    },
    cC = mt,
    lC = function (e, t, r) {
        for (var n = r ? e : e.iterator, a = e.next, i, s; !(i = cC(a, n)).done;)
            if (s = t(i.value), s !== void 0) return s
    },
    zy = se,
    fC = lC,
    Vy = By,
    dC = Vy.Set,
    qy = Vy.proto,
    hC = zy(qy.forEach),
    Wy = zy(qy.keys),
    pC = Wy(new dC).next,
    mC = function (e, t, r) {
        return r ? fC({
            iterator: Wy(e),
            next: pC
        }, t) : hC(e, t)
    },
    gC = to,
    vC = function (e) {
        try {
            if (gC) return Function('return require("' + e + '")')()
        } catch {}
    },
    Gy = typeof Deno == "object" && Deno && typeof Deno.version == "object",
    yC = Gy,
    bC = to,
    wC = !yC && !bC && typeof window == "object" && typeof document == "object",
    EC = fe,
    SC = me,
    wu = Av,
    $C = wC,
    AC = Gy,
    OC = to,
    cp = EC.structuredClone,
    Hy = !!cp && !SC(function () {
        if (AC && wu > 92 || OC && wu > 94 || $C && wu > 97) return !1;
        var e = new ArrayBuffer(8),
            t = cp(e, {
                transfer: [e]
            });
        return e.byteLength !== 0 || t.byteLength !== 8
    }),
    rf = fe,
    _C = vC,
    RC = Hy,
    CC = rf.structuredClone,
    lp = rf.ArrayBuffer,
    ci = rf.MessageChannel,
    Nc = !1,
    Eu, fp, li, Su;
if (RC) Nc = function (e) {
    CC(e, {
        transfer: [e]
    })
};
else if (lp) try {
    ci || (Eu = _C("worker_threads"), Eu && (ci = Eu.MessageChannel)), ci && (fp = new ci, li = new lp(2), Su = function (e) {
        fp.port1.postMessage(null, [e])
    }, li.byteLength === 2 && (Su(li), li.byteLength === 0 && (Nc = Su)))
} catch {}
var IC = Nc,
    NC = he,
    Ae = fe,
    Xn = gt,
    Fa = se,
    nf = me,
    TC = Gs,
    rn = ye,
    xC = ZR,
    kC = Ws,
    ro = xt,
    PC = Rl,
    LC = zl,
    Ky = yt,
    Qi = gn,
    DC = Ne,
    FC = nC,
    $u = _r,
    Li = Ve,
    jC = bn,
    UC = uC,
    no = dy,
    af = By,
    MC = mC,
    dp = IC,
    BC = Qv,
    sf = Hy,
    Vn = Ae.Object,
    zC = Ae.Array,
    Xy = Ae.Date,
    Yy = Ae.Error,
    VC = Ae.TypeError,
    qC = Ae.PerformanceMark,
    pr = Xn("DOMException"),
    Tc = no.Map,
    of = no.has,
    Jy = no.get,
    Zi = no.set,
    Qy = af.Set,
    Zy = af.add,
    WC = af.has,
    GC = Xn("Object", "keys"),
    HC = Fa([].push),
    KC = Fa((!0).valueOf),
    XC = Fa(1 .valueOf),
    YC = Fa("".valueOf),
    JC = Fa(Xy.prototype.getTime),
    xc = TC("structuredClone"),
    sa = "DataCloneError",
    Di = "Transferring",
    e0 = function (e) {
        return !nf(function () {
            var t = new Ae.Set([7]),
                r = e(t),
                n = e(Vn(7));
            return r === t || !r.has(7) || !ro(n) || +n != 7
        }) && e
    },
    hp = function (e, t) {
        return !nf(function () {
            var r = new t,
                n = e({
                    a: r,
                    b: r
                });
            return !(n && n.a === n.b && n.a instanceof t && n.a.stack === r.stack)
        })
    },
    QC = function (e) {
        return !nf(function () {
            var t = e(new Ae.AggregateError([1], xc, {
                cause: 3
            }));
            return t.name !== "AggregateError" || t.errors[0] !== 1 || t.message !== xc || t.cause !== 3
        })
    },
    Kr = Ae.structuredClone,
    ZC = !hp(Kr, Yy) || !hp(Kr, pr) || !QC(Kr),
    e6 = !Kr && e0(function (e) {
        return new qC(xc, {
            detail: e
        }).detail
    }),
    _t = e0(Kr) || e6,
    Au = function (e) {
        throw new pr("Uncloneable type: " + e, sa)
    },
    Le = function (e, t) {
        throw new pr((t || "Cloning") + " of " + e + " cannot be properly polyfilled in this engine", sa)
    },
    Ou = function (e, t) {
        return _t || Le(t), _t(e)
    },
    t6 = function () {
        var e;
        try {
            e = new Ae.DataTransfer
        } catch {
            try {
                e = new Ae.ClipboardEvent("").clipboardData
            } catch {}
        }
        return e && e.items && e.files ? e : null
    },
    t0 = function (e, t, r) {
        if (of(t, e)) return Jy(t, e);
        var n = r || Qi(e),
            a, i, s, o, u, c;
        if (n === "SharedArrayBuffer") _t ? a = _t(e) : a = e;
        else {
            var l = Ae.DataView;
            !l && !rn(e.slice) && Le("ArrayBuffer");
            try {
                if (rn(e.slice) && !e.resizable) a = e.slice(0);
                else
                    for (i = e.byteLength, s = ("maxByteLength" in e) ? {
                            maxByteLength: e.maxByteLength
                        } : void 0, a = new ArrayBuffer(i, s), o = new l(e), u = new l(a), c = 0; c < i; c++) u.setUint8(c, o.getUint8(c))
            } catch {
                throw new pr("ArrayBuffer is detached", sa)
            }
        }
        return Zi(t, e, a), a
    },
    r6 = function (e, t, r, n, a) {
        var i = Ae[t];
        return ro(i) || Le(t), new i(t0(e.buffer, a), r, n)
    },
    $e = function (e, t) {
        if (PC(e) && Au("Symbol"), !ro(e)) return e;
        if (t) {
            if (of(t, e)) return Jy(t, e)
        } else t = new Tc;
        var r = Qi(e),
            n, a, i, s, o, u, c, l;
        switch (r) {
            case "Array":
                i = zC(Li(e));
                break;
            case "Object":
                i = {};
                break;
            case "Map":
                i = new Tc;
                break;
            case "Set":
                i = new Qy;
                break;
            case "RegExp":
                i = new RegExp(e.source, UC(e));
                break;
            case "Error":
                switch (a = e.name, a) {
                    case "AggregateError":
                        i = new(Xn(a))([]);
                        break;
                    case "EvalError":
                    case "RangeError":
                    case "ReferenceError":
                    case "SuppressedError":
                    case "SyntaxError":
                    case "TypeError":
                    case "URIError":
                        i = new(Xn(a));
                        break;
                    case "CompileError":
                    case "LinkError":
                    case "RuntimeError":
                        i = new(Xn("WebAssembly", a));
                        break;
                    default:
                        i = new Yy
                }
                break;
            case "DOMException":
                i = new pr(e.message, e.name);
                break;
            case "ArrayBuffer":
            case "SharedArrayBuffer":
                i = t0(e, t, r);
                break;
            case "DataView":
            case "Int8Array":
            case "Uint8Array":
            case "Uint8ClampedArray":
            case "Int16Array":
            case "Uint16Array":
            case "Int32Array":
            case "Uint32Array":
            case "Float16Array":
            case "Float32Array":
            case "Float64Array":
            case "BigInt64Array":
            case "BigUint64Array":
                u = r === "DataView" ? e.byteLength : e.length, i = r6(e, r, e.byteOffset, u, t);
                break;
            case "DOMQuad":
                try {
                    i = new DOMQuad($e(e.p1, t), $e(e.p2, t), $e(e.p3, t), $e(e.p4, t))
                } catch {
                    i = Ou(e, r)
                }
                break;
            case "File":
                if (_t) try {
                    i = _t(e), Qi(i) !== r && (i = void 0)
                } catch {}
                if (!i) try {
                    i = new File([e], e.name, e)
                } catch {}
                i || Le(r);
                break;
            case "FileList":
                if (s = t6(), s) {
                    for (o = 0, u = Li(e); o < u; o++) s.items.add($e(e[o], t));
                    i = s.files
                } else i = Ou(e, r);
                break;
            case "ImageData":
                try {
                    i = new ImageData($e(e.data, t), e.width, e.height, {
                        colorSpace: e.colorSpace
                    })
                } catch {
                    i = Ou(e, r)
                }
                break;
            default:
                if (_t) i = _t(e);
                else switch (r) {
                    case "BigInt":
                        i = Vn(e.valueOf());
                        break;
                    case "Boolean":
                        i = Vn(KC(e));
                        break;
                    case "Number":
                        i = Vn(XC(e));
                        break;
                    case "String":
                        i = Vn(YC(e));
                        break;
                    case "Date":
                        i = new Xy(JC(e));
                        break;
                    case "Blob":
                        try {
                            i = e.slice(0, e.size, e.type)
                        } catch {
                            Le(r)
                        }
                        break;
                    case "DOMPoint":
                    case "DOMPointReadOnly":
                        n = Ae[r];
                        try {
                            i = n.fromPoint ? n.fromPoint(e) : new n(e.x, e.y, e.z, e.w)
                        } catch {
                            Le(r)
                        }
                        break;
                    case "DOMRect":
                    case "DOMRectReadOnly":
                        n = Ae[r];
                        try {
                            i = n.fromRect ? n.fromRect(e) : new n(e.x, e.y, e.width, e.height)
                        } catch {
                            Le(r)
                        }
                        break;
                    case "DOMMatrix":
                    case "DOMMatrixReadOnly":
                        n = Ae[r];
                        try {
                            i = n.fromMatrix ? n.fromMatrix(e) : new n(e)
                        } catch {
                            Le(r)
                        }
                        break;
                    case "AudioData":
                    case "VideoFrame":
                        rn(e.clone) || Le(r);
                        try {
                            i = e.clone()
                        } catch {
                            Au(r)
                        }
                        break;
                    case "CropTarget":
                    case "CryptoKey":
                    case "FileSystemDirectoryHandle":
                    case "FileSystemFileHandle":
                    case "FileSystemHandle":
                    case "GPUCompilationInfo":
                    case "GPUCompilationMessage":
                    case "ImageBitmap":
                    case "RTCCertificate":
                    case "WebAssembly.Module":
                        Le(r);
                    default:
                        Au(r)
                }
        }
        switch (Zi(t, e, i), r) {
            case "Array":
            case "Object":
                for (c = GC(e), o = 0, u = Li(c); o < u; o++) l = c[o], FC(i, l, $e(e[l], t));
                break;
            case "Map":
                e.forEach(function (f, d) {
                    Zi(i, $e(d, t), $e(f, t))
                });
                break;
            case "Set":
                e.forEach(function (f) {
                    Zy(i, $e(f, t))
                });
                break;
            case "Error":
                $u(i, "message", $e(e.message, t)), DC(e, "cause") && $u(i, "cause", $e(e.cause, t)), a === "AggregateError" ? i.errors = $e(e.errors, t) : a === "SuppressedError" && (i.error = $e(e.error, t), i.suppressed = $e(e.suppressed, t));
            case "DOMException":
                BC && $u(i, "stack", $e(e.stack, t))
        }
        return i
    },
    n6 = function (e, t) {
        if (!ro(e)) throw new VC("Transfer option cannot be converted to a sequence");
        var r = [];
        LC(e, function (d) {
            HC(r, Ky(d))
        });
        for (var n = 0, a = Li(r), i = new Qy, s, o, u, c, l, f; n < a;) {
            if (s = r[n++], o = Qi(s), o === "ArrayBuffer" ? WC(i, s) : of(t, s)) throw new pr("Duplicate transferable", sa);
            if (o === "ArrayBuffer") {
                Zy(i, s);
                continue
            }
            if (sf) c = Kr(s, {
                transfer: [s]
            });
            else switch (o) {
                case "ImageBitmap":
                    u = Ae.OffscreenCanvas, xC(u) || Le(o, Di);
                    try {
                        l = new u(s.width, s.height), f = l.getContext("bitmaprenderer"), f.transferFromImageBitmap(s), c = l.transferToImageBitmap()
                    } catch {}
                    break;
                case "AudioData":
                case "VideoFrame":
                    (!rn(s.clone) || !rn(s.close)) && Le(o, Di);
                    try {
                        c = s.clone(), s.close()
                    } catch {}
                    break;
                case "MediaSourceHandle":
                case "MessagePort":
                case "OffscreenCanvas":
                case "ReadableStream":
                case "TransformStream":
                case "WritableStream":
                    Le(o, Di)
            }
            if (c === void 0) throw new pr("This object cannot be transferred: " + o, sa);
            Zi(t, s, c)
        }
        return i
    },
    a6 = function (e) {
        MC(e, function (t) {
            sf ? _t(t, {
                transfer: [t]
            }) : rn(t.transfer) ? t.transfer() : dp ? dp(t) : Le("ArrayBuffer", Di)
        })
    };
NC({
    global: !0,
    enumerable: !0,
    sham: !sf,
    forced: ZC
}, {
    structuredClone: function (t) {
        var r = jC(arguments.length, 1) > 1 && !kC(arguments[1]) ? Ky(arguments[1]) : void 0,
            n = r ? r.transfer : void 0,
            a, i;
        n !== void 0 && (a = new Tc, i = n6(n, a));
        var s = $e(t, a);
        return i && a6(i), s
    }
});
var i6 = me,
    s6 = Jt,
    o6 = Ie,
    pp = Cv,
    u6 = s6("iterator"),
    c6 = !i6(function () {
        var e = new URL("b?a=1&b=2&c=3", "http://a"),
            t = e.searchParams,
            r = new URLSearchParams("a=1&a=2&b=3"),
            n = "";
        return e.pathname = "c%20d", t.forEach(function (a, i) {
            t.delete("b"), n += i + a
        }), r.delete("a", 2), r.delete("b", void 0), pp && (!e.toJSON || !r.has("a", 1) || r.has("a", 2) || !r.has("a", void 0) || r.has("b")) || !t.size && (pp || !o6) || !t.sort || e.href !== "http://a/c%20d?a=1&c=3" || t.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !t[u6] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("http://тест").host !== "xn--e1aybc" || new URL("http://a#б").hash !== "#%D0%B1" || n !== "a1c3" || new URL("http://x", void 0).host !== "x"
    }),
    l6 = he,
    f6 = gt,
    d6 = me,
    h6 = bn,
    mp = Rr,
    p6 = c6,
    r0 = f6("URL"),
    m6 = p6 && d6(function () {
        r0.canParse()
    });
l6({
    target: "URL",
    stat: !0,
    forced: !m6
}, {
    canParse: function (t) {
        var r = h6(arguments.length, 1),
            n = mp(t),
            a = r < 2 || arguments[1] === void 0 ? void 0 : mp(arguments[1]);
        try {
            return !!new r0(n, a)
        } catch {
            return !1
        }
    }
});
var g6 = Ks,
    ao = se,
    gp = Rr,
    v6 = bn,
    n0 = URLSearchParams,
    io = n0.prototype,
    y6 = ao(io.append),
    vp = ao(io.delete),
    b6 = ao(io.forEach),
    w6 = ao([].push),
    uf = new n0("a=1&a=2&b=3");
uf.delete("a", 1);
uf.delete("b", void 0);
uf + "" != "a=2" && g6(io, "delete", function (e) {
    var t = arguments.length,
        r = t < 2 ? void 0 : arguments[1];
    if (t && r === void 0) return vp(this, e);
    var n = [];
    b6(this, function (f, d) {
        w6(n, {
            key: d,
            value: f
        })
    }), v6(t, 1);
    for (var a = gp(e), i = gp(r), s = 0, o = 0, u = !1, c = n.length, l; s < c;) l = n[s++], u || l.key === a ? (u = !0, vp(this, l.key)) : o++;
    for (; o < c;) l = n[o++], l.key === a && l.value === i || y6(this, l.key, l.value)
}, {
    enumerable: !0,
    unsafe: !0
});
var E6 = Ks,
    a0 = se,
    S6 = Rr,
    $6 = bn,
    i0 = URLSearchParams,
    cf = i0.prototype,
    A6 = a0(cf.getAll),
    O6 = a0(cf.has),
    yp = new i0("a=1");
(yp.has("a", 2) || !yp.has("a", void 0)) && E6(cf, "has", function (t) {
    var r = arguments.length,
        n = r < 2 ? void 0 : arguments[1];
    if (r && n === void 0) return O6(this, t);
    var a = A6(this, t);
    $6(r, 1);
    for (var i = S6(n), s = 0; s < a.length;)
        if (a[s++] === i) return !0;
    return !1
}, {
    enumerable: !0,
    unsafe: !0
});
var _6 = Ie,
    R6 = se,
    C6 = Vl,
    kc = URLSearchParams.prototype,
    I6 = R6(kc.forEach);
_6 && !("size" in kc) && C6(kc, "size", {
    get: function () {
        var t = 0;
        return I6(this, function () {
            t++
        }), t
    },
    configurable: !0,
    enumerable: !0
});
var N6 = {
    VITE_PWA_ENABLED: "true",
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1,
    PACKAGE_VERSION: "4.7.0"
};
const bp = e => {
        let t;
        const r = new Set,
            n = (u, c) => {
                const l = typeof u == "function" ? u(t) : u;
                if (!Object.is(l, t)) {
                    const f = t;
                    t = c ?? (typeof l != "object" || l === null) ? l : Object.assign({}, t, l), r.forEach(d => d(t, f))
                }
            },
            a = () => t,
            o = {
                setState: n,
                getState: a,
                subscribe: u => (r.add(u), () => r.delete(u)),
                destroy: () => {
                    (N6 ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), r.clear()
                }
            };
        return t = e(n, a, o), o
    },
    T6 = e => e ? bp(e) : bp;
var s0 = {
        exports: {}
    },
    o0 = {},
    u0 = {
        exports: {}
    },
    c0 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nn = L;

function x6(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var k6 = typeof Object.is == "function" ? Object.is : x6,
    P6 = nn.useState,
    L6 = nn.useEffect,
    D6 = nn.useLayoutEffect,
    F6 = nn.useDebugValue;

function j6(e, t) {
    var r = t(),
        n = P6({
            inst: {
                value: r,
                getSnapshot: t
            }
        }),
        a = n[0].inst,
        i = n[1];
    return D6(function () {
        a.value = r, a.getSnapshot = t, _u(a) && i({
            inst: a
        })
    }, [e, r, t]), L6(function () {
        return _u(a) && i({
            inst: a
        }), e(function () {
            _u(a) && i({
                inst: a
            })
        })
    }, [e]), F6(r), r
}

function _u(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var r = t();
        return !k6(e, r)
    } catch {
        return !0
    }
}

function U6(e, t) {
    return t()
}
var M6 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? U6 : j6;
c0.useSyncExternalStore = nn.useSyncExternalStore !== void 0 ? nn.useSyncExternalStore : M6;
u0.exports = c0;
var B6 = u0.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var so = L,
    z6 = B6;

function V6(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var q6 = typeof Object.is == "function" ? Object.is : V6,
    W6 = z6.useSyncExternalStore,
    G6 = so.useRef,
    H6 = so.useEffect,
    K6 = so.useMemo,
    X6 = so.useDebugValue;
o0.useSyncExternalStoreWithSelector = function (e, t, r, n, a) {
    var i = G6(null);
    if (i.current === null) {
        var s = {
            hasValue: !1,
            value: null
        };
        i.current = s
    } else s = i.current;
    i = K6(function () {
        function u(h) {
            if (!c) {
                if (c = !0, l = h, h = n(h), a !== void 0 && s.hasValue) {
                    var p = s.value;
                    if (a(p, h)) return f = p
                }
                return f = h
            }
            if (p = f, q6(l, h)) return p;
            var y = n(h);
            return a !== void 0 && a(p, y) ? p : (l = h, f = y)
        }
        var c = !1,
            l, f, d = r === void 0 ? null : r;
        return [function () {
            return u(t())
        }, d === null ? void 0 : function () {
            return u(d())
        }]
    }, [t, r, n, a]);
    var o = W6(e, i[0], i[1]);
    return H6(function () {
        s.hasValue = !0, s.value = o
    }, [o]), X6(o), o
};
s0.exports = o0;
var Y6 = s0.exports;
const J6 = Re(Y6);
var l0 = {
    VITE_PWA_ENABLED: "true",
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1,
    PACKAGE_VERSION: "4.7.0"
};
const {
    useDebugValue: Q6
} = fv, {
    useSyncExternalStoreWithSelector: Z6
} = J6;
let wp = !1;

function e8(e, t = e.getState, r) {
    (l0 ? "production" : void 0) !== "production" && r && !wp && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), wp = !0);
    const n = Z6(e.subscribe, e.getState, e.getServerState || e.getState, t, r);
    return Q6(n), n
}
const Ep = e => {
        (l0 ? "production" : void 0) !== "production" && typeof e != "function" && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
        const t = typeof e == "function" ? T6(e) : e,
            r = (n, a) => e8(t, n, a);
        return Object.assign(r, t), r
    },
    rB = e => e ? Ep(e) : Ep;
var t8 = {
    VITE_PWA_ENABLED: "true",
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1,
    PACKAGE_VERSION: "4.7.0"
};

function r8(e, t) {
    let r;
    try {
        r = e()
    } catch {
        return
    }
    return {
        getItem: a => {
            var i;
            const s = u => u === null ? null : JSON.parse(u, t == null ? void 0 : t.reviver),
                o = (i = r.getItem(a)) != null ? i : null;
            return o instanceof Promise ? o.then(s) : s(o)
        },
        setItem: (a, i) => r.setItem(a, JSON.stringify(i, t == null ? void 0 : t.replacer)),
        removeItem: a => r.removeItem(a)
    }
}
const oa = e => t => {
        try {
            const r = e(t);
            return r instanceof Promise ? r : {
                then(n) {
                    return oa(n)(r)
                },
                catch (n) {
                    return this
                }
            }
        } catch (r) {
            return {
                then(n) {
                    return this
                },
                catch (n) {
                    return oa(n)(r)
                }
            }
        }
    },
    n8 = (e, t) => (r, n, a) => {
        let i = {
                getStorage: () => localStorage,
                serialize: JSON.stringify,
                deserialize: JSON.parse,
                partialize: b => b,
                version: 0,
                merge: (b, _) => ({
                    ..._,
                    ...b
                }),
                ...t
            },
            s = !1;
        const o = new Set,
            u = new Set;
        let c;
        try {
            c = i.getStorage()
        } catch {}
        if (!c) return e((...b) => {
            console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`), r(...b)
        }, n, a);
        const l = oa(i.serialize),
            f = () => {
                const b = i.partialize({
                    ...n()
                });
                let _;
                const g = l({
                    state: b,
                    version: i.version
                }).then(R => c.setItem(i.name, R)).catch(R => {
                    _ = R
                });
                if (_) throw _;
                return g
            },
            d = a.setState;
        a.setState = (b, _) => {
            d(b, _), f()
        };
        const h = e((...b) => {
            r(...b), f()
        }, n, a);
        let p;
        const y = () => {
            var b;
            if (!c) return;
            s = !1, o.forEach(g => g(n()));
            const _ = ((b = i.onRehydrateStorage) == null ? void 0 : b.call(i, n())) || void 0;
            return oa(c.getItem.bind(c))(i.name).then(g => {
                if (g) return i.deserialize(g)
            }).then(g => {
                if (g)
                    if (typeof g.version == "number" && g.version !== i.version) {
                        if (i.migrate) return i.migrate(g.state, g.version);
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                    } else return g.state
            }).then(g => {
                var R;
                return p = i.merge(g, (R = n()) != null ? R : h), r(p, !0), f()
            }).then(() => {
                _ == null || _(p, void 0), s = !0, u.forEach(g => g(p))
            }).catch(g => {
                _ == null || _(void 0, g)
            })
        };
        return a.persist = {
            setOptions: b => {
                i = {
                    ...i,
                    ...b
                }, b.getStorage && (c = b.getStorage())
            },
            clearStorage: () => {
                c == null || c.removeItem(i.name)
            },
            getOptions: () => i,
            rehydrate: () => y(),
            hasHydrated: () => s,
            onHydrate: b => (o.add(b), () => {
                o.delete(b)
            }),
            onFinishHydration: b => (u.add(b), () => {
                u.delete(b)
            })
        }, y(), p || h
    },
    a8 = (e, t) => (r, n, a) => {
        let i = {
                storage: r8(() => localStorage),
                partialize: y => y,
                version: 0,
                merge: (y, b) => ({
                    ...b,
                    ...y
                }),
                ...t
            },
            s = !1;
        const o = new Set,
            u = new Set;
        let c = i.storage;
        if (!c) return e((...y) => {
            console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`), r(...y)
        }, n, a);
        const l = () => {
                const y = i.partialize({
                    ...n()
                });
                return c.setItem(i.name, {
                    state: y,
                    version: i.version
                })
            },
            f = a.setState;
        a.setState = (y, b) => {
            f(y, b), l()
        };
        const d = e((...y) => {
            r(...y), l()
        }, n, a);
        let h;
        const p = () => {
            var y, b;
            if (!c) return;
            s = !1, o.forEach(g => {
                var R;
                return g((R = n()) != null ? R : d)
            });
            const _ = ((b = i.onRehydrateStorage) == null ? void 0 : b.call(i, (y = n()) != null ? y : d)) || void 0;
            return oa(c.getItem.bind(c))(i.name).then(g => {
                if (g)
                    if (typeof g.version == "number" && g.version !== i.version) {
                        if (i.migrate) return i.migrate(g.state, g.version);
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                    } else return g.state
            }).then(g => {
                var R;
                return h = i.merge(g, (R = n()) != null ? R : d), r(h, !0), l()
            }).then(() => {
                _ == null || _(h, void 0), h = n(), s = !0, u.forEach(g => g(h))
            }).catch(g => {
                _ == null || _(void 0, g)
            })
        };
        return a.persist = {
            setOptions: y => {
                i = {
                    ...i,
                    ...y
                }, y.storage && (c = y.storage)
            },
            clearStorage: () => {
                c == null || c.removeItem(i.name)
            },
            getOptions: () => i,
            rehydrate: () => p(),
            hasHydrated: () => s,
            onHydrate: y => (o.add(y), () => {
                o.delete(y)
            }),
            onFinishHydration: y => (u.add(y), () => {
                u.delete(y)
            })
        }, i.skipHydration || p(), h || d
    },
    i8 = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? ((t8 ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."), n8(e, t)) : a8(e, t),
    nB = i8;
var f0 = Symbol.for("immer-nothing"),
    Sp = Symbol.for("immer-draftable"),
    Be = Symbol.for("immer-state");

function et(e, ...t) {
    throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
}
var an = Object.getPrototypeOf;

function sn(e) {
    return !!e && !!e[Be]
}

function mr(e) {
    var t;
    return e ? d0(e) || Array.isArray(e) || !!e[Sp] || !!((t = e.constructor) != null && t[Sp]) || uo(e) || co(e) : !1
}
var s8 = Object.prototype.constructor.toString();

function d0(e) {
    if (!e || typeof e != "object") return !1;
    const t = an(e);
    if (t === null) return !0;
    const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === s8
}

function ua(e, t) {
    oo(e) === 0 ? Object.entries(e).forEach(([r, n]) => {
        t(r, n, e)
    }) : e.forEach((r, n) => t(n, r, e))
}

function oo(e) {
    const t = e[Be];
    return t ? t.type_ : Array.isArray(e) ? 1 : uo(e) ? 2 : co(e) ? 3 : 0
}

function Pc(e, t) {
    return oo(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}

function h0(e, t, r) {
    const n = oo(e);
    n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r
}

function o8(e, t) {
    return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
}

function uo(e) {
    return e instanceof Map
}

function co(e) {
    return e instanceof Set
}

function sr(e) {
    return e.copy_ || e.base_
}

function Lc(e, t) {
    if (uo(e)) return new Map(e);
    if (co(e)) return new Set(e);
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    if (!t && d0(e)) return an(e) ? {
        ...e
    } : Object.assign(Object.create(null), e);
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Be];
    let n = Reflect.ownKeys(r);
    for (let a = 0; a < n.length; a++) {
        const i = n[a],
            s = r[i];
        s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[i] = {
            configurable: !0,
            writable: !0,
            enumerable: s.enumerable,
            value: e[i]
        })
    }
    return Object.create(an(e), r)
}

function lf(e, t = !1) {
    return lo(e) || sn(e) || !mr(e) || (oo(e) > 1 && (e.set = e.add = e.clear = e.delete = u8), Object.freeze(e), t && ua(e, (r, n) => lf(n, !0))), e
}

function u8() {
    et(2)
}

function lo(e) {
    return Object.isFrozen(e)
}
var c8 = {};

function gr(e) {
    const t = c8[e];
    return t || et(0, e), t
}
var ca;

function p0() {
    return ca
}

function l8(e, t) {
    return {
        drafts_: [],
        parent_: e,
        immer_: t,
        canAutoFreeze_: !0,
        unfinalizedDrafts_: 0
    }
}

function $p(e, t) {
    t && (gr("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t)
}

function Dc(e) {
    Fc(e), e.drafts_.forEach(f8), e.drafts_ = null
}

function Fc(e) {
    e === ca && (ca = e.parent_)
}

function Ap(e) {
    return ca = l8(ca, e)
}

function f8(e) {
    const t = e[Be];
    t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0
}

function Op(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length;
    const r = t.drafts_[0];
    return e !== void 0 && e !== r ? (r[Be].modified_ && (Dc(t), et(4)), mr(e) && (e = es(t, e), t.parent_ || ts(t, e)), t.patches_ && gr("Patches").generateReplacementPatches_(r[Be].base_, e, t.patches_, t.inversePatches_)) : e = es(t, r, []), Dc(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== f0 ? e : void 0
}

function es(e, t, r) {
    if (lo(t)) return t;
    const n = t[Be];
    if (!n) return ua(t, (a, i) => _p(e, n, t, a, i, r)), t;
    if (n.scope_ !== e) return t;
    if (!n.modified_) return ts(e, n.base_, !0), n.base_;
    if (!n.finalized_) {
        n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
        const a = n.copy_;
        let i = a,
            s = !1;
        n.type_ === 3 && (i = new Set(a), a.clear(), s = !0), ua(i, (o, u) => _p(e, n, a, o, u, r, s)), ts(e, a, !1), r && e.patches_ && gr("Patches").generatePatches_(n, r, e.patches_, e.inversePatches_)
    }
    return n.copy_
}

function _p(e, t, r, n, a, i, s) {
    if (sn(a)) {
        const o = i && t && t.type_ !== 3 && !Pc(t.assigned_, n) ? i.concat(n) : void 0,
            u = es(e, a, o);
        if (h0(r, n, u), sn(u)) e.canAutoFreeze_ = !1;
        else return
    } else s && r.add(a);
    if (mr(a) && !lo(a)) {
        if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
        es(e, a), (!t || !t.scope_.parent_) && ts(e, a)
    }
}

function ts(e, t, r = !1) {
    !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && lf(t, r)
}

function d8(e, t) {
    const r = Array.isArray(e),
        n = {
            type_: r ? 1 : 0,
            scope_: t ? t.scope_ : p0(),
            modified_: !1,
            finalized_: !1,
            assigned_: {},
            parent_: t,
            base_: e,
            draft_: null,
            copy_: null,
            revoke_: null,
            isManual_: !1
        };
    let a = n,
        i = ff;
    r && (a = [n], i = la);
    const {
        revoke: s,
        proxy: o
    } = Proxy.revocable(a, i);
    return n.draft_ = o, n.revoke_ = s, o
}
var ff = {
        get(e, t) {
            if (t === Be) return e;
            const r = sr(e);
            if (!Pc(r, t)) return h8(e, r, t);
            const n = r[t];
            return e.finalized_ || !mr(n) ? n : n === Ru(e.base_, t) ? (Cu(e), e.copy_[t] = Uc(n, e)) : n
        },
        has(e, t) {
            return t in sr(e)
        },
        ownKeys(e) {
            return Reflect.ownKeys(sr(e))
        },
        set(e, t, r) {
            const n = m0(sr(e), t);
            if (n != null && n.set) return n.set.call(e.draft_, r), !0;
            if (!e.modified_) {
                const a = Ru(sr(e), t),
                    i = a == null ? void 0 : a[Be];
                if (i && i.base_ === r) return e.copy_[t] = r, e.assigned_[t] = !1, !0;
                if (o8(r, a) && (r !== void 0 || Pc(e.base_, t))) return !0;
                Cu(e), jc(e)
            }
            return e.copy_[t] === r && (r !== void 0 || t in e.copy_) || Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0
        },
        deleteProperty(e, t) {
            return Ru(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Cu(e), jc(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0
        },
        getOwnPropertyDescriptor(e, t) {
            const r = sr(e),
                n = Reflect.getOwnPropertyDescriptor(r, t);
            return n && {
                writable: !0,
                configurable: e.type_ !== 1 || t !== "length",
                enumerable: n.enumerable,
                value: r[t]
            }
        },
        defineProperty() {
            et(11)
        },
        getPrototypeOf(e) {
            return an(e.base_)
        },
        setPrototypeOf() {
            et(12)
        }
    },
    la = {};
ua(ff, (e, t) => {
    la[e] = function () {
        return arguments[0] = arguments[0][0], t.apply(this, arguments)
    }
});
la.deleteProperty = function (e, t) {
    return la.set.call(this, e, t, void 0)
};
la.set = function (e, t, r) {
    return ff.set.call(this, e[0], t, r, e[0])
};

function Ru(e, t) {
    const r = e[Be];
    return (r ? sr(r) : e)[t]
}

function h8(e, t, r) {
    var a;
    const n = m0(t, r);
    return n ? "value" in n ? n.value : (a = n.get) == null ? void 0 : a.call(e.draft_) : void 0
}

function m0(e, t) {
    if (!(t in e)) return;
    let r = an(e);
    for (; r;) {
        const n = Object.getOwnPropertyDescriptor(r, t);
        if (n) return n;
        r = an(r)
    }
}

function jc(e) {
    e.modified_ || (e.modified_ = !0, e.parent_ && jc(e.parent_))
}

function Cu(e) {
    e.copy_ || (e.copy_ = Lc(e.base_, e.scope_.immer_.useStrictShallowCopy_))
}
var p8 = class {
    constructor(e) {
        this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
            if (typeof t == "function" && typeof r != "function") {
                const i = r;
                r = t;
                const s = this;
                return function (u = i, ...c) {
                    return s.produce(u, l => r.call(this, l, ...c))
                }
            }
            typeof r != "function" && et(6), n !== void 0 && typeof n != "function" && et(7);
            let a;
            if (mr(t)) {
                const i = Ap(this),
                    s = Uc(t, void 0);
                let o = !0;
                try {
                    a = r(s), o = !1
                } finally {
                    o ? Dc(i) : Fc(i)
                }
                return $p(i, n), Op(a, i)
            } else if (!t || typeof t != "object") {
                if (a = r(t), a === void 0 && (a = t), a === f0 && (a = void 0), this.autoFreeze_ && lf(a, !0), n) {
                    const i = [],
                        s = [];
                    gr("Patches").generateReplacementPatches_(t, a, i, s), n(i, s)
                }
                return a
            } else et(1, t)
        }, this.produceWithPatches = (t, r) => {
            if (typeof t == "function") return (s, ...o) => this.produceWithPatches(s, u => t(u, ...o));
            let n, a;
            return [this.produce(t, r, (s, o) => {
                n = s, a = o
            }), n, a]
        }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy)
    }
    createDraft(e) {
        mr(e) || et(8), sn(e) && (e = m8(e));
        const t = Ap(this),
            r = Uc(e, void 0);
        return r[Be].isManual_ = !0, Fc(t), r
    }
    finishDraft(e, t) {
        const r = e && e[Be];
        (!r || !r.isManual_) && et(9);
        const {
            scope_: n
        } = r;
        return $p(n, t), Op(void 0, n)
    }
    setAutoFreeze(e) {
        this.autoFreeze_ = e
    }
    setUseStrictShallowCopy(e) {
        this.useStrictShallowCopy_ = e
    }
    applyPatches(e, t) {
        let r;
        for (r = t.length - 1; r >= 0; r--) {
            const a = t[r];
            if (a.path.length === 0 && a.op === "replace") {
                e = a.value;
                break
            }
        }
        r > -1 && (t = t.slice(r + 1));
        const n = gr("Patches").applyPatches_;
        return sn(e) ? n(e, t) : this.produce(e, a => n(a, t))
    }
};

function Uc(e, t) {
    const r = uo(e) ? gr("MapSet").proxyMap_(e, t) : co(e) ? gr("MapSet").proxySet_(e, t) : d8(e, t);
    return (t ? t.scope_ : p0()).drafts_.push(r), r
}

function m8(e) {
    return sn(e) || et(10, e), g0(e)
}

function g0(e) {
    if (!mr(e) || lo(e)) return e;
    const t = e[Be];
    let r;
    if (t) {
        if (!t.modified_) return t.base_;
        t.finalized_ = !0, r = Lc(e, t.scope_.immer_.useStrictShallowCopy_)
    } else r = Lc(e, !0);
    return ua(r, (n, a) => {
        h0(r, n, g0(a))
    }), t && (t.finalized_ = !1), r
}
var ze = new p8,
    g8 = ze.produce;
ze.produceWithPatches.bind(ze);
ze.setAutoFreeze.bind(ze);
ze.setUseStrictShallowCopy.bind(ze);
ze.applyPatches.bind(ze);
ze.createDraft.bind(ze);
ze.finishDraft.bind(ze);
const v8 = e => (t, r, n) => (n.setState = (a, i, ...s) => {
        const o = typeof a == "function" ? g8(a) : a;
        return t(o, i, ...s)
    }, e(n.setState, r, n)),
    aB = v8,
    y8 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    b8 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    w8 = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;

function E8(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
        S8(e);
        return
    }
    return t
}

function S8(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}

function $8(e, t = {}) {
    if (typeof e != "string") return e;
    const r = e.trim();
    if (e[0] === '"' && e[e.length - 1] === '"') return r.slice(1, -1);
    if (r.length <= 9) {
        const n = r.toLowerCase();
        if (n === "true") return !0;
        if (n === "false") return !1;
        if (n === "undefined") return;
        if (n === "null") return null;
        if (n === "nan") return Number.NaN;
        if (n === "infinity") return Number.POSITIVE_INFINITY;
        if (n === "-infinity") return Number.NEGATIVE_INFINITY
    }
    if (!w8.test(e)) {
        if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (y8.test(e) || b8.test(e)) {
            if (t.strict) throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, E8)
        }
        return JSON.parse(e)
    } catch (n) {
        if (t.strict) throw n;
        return e
    }
}
const A8 = /#/g,
    O8 = /&/g,
    _8 = /=/g,
    df = /\+/g,
    R8 = /%5e/gi,
    C8 = /%60/gi,
    I8 = /%7c/gi,
    N8 = /%20/gi;

function T8(e) {
    return encodeURI("" + e).replace(I8, "|")
}

function Mc(e) {
    return T8(typeof e == "string" ? e : JSON.stringify(e)).replace(df, "%2B").replace(N8, "+").replace(A8, "%23").replace(O8, "%26").replace(C8, "`").replace(R8, "^")
}

function Iu(e) {
    return Mc(e).replace(_8, "%3D")
}

function v0(e = "") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}

function x8(e) {
    return v0(e.replace(df, " "))
}

function k8(e) {
    return v0(e.replace(df, " "))
}

function P8(e = "") {
    const t = {};
    e[0] === "?" && (e = e.slice(1));
    for (const r of e.split("&")) {
        const n = r.match(/([^=]+)=?(.*)/) || [];
        if (n.length < 2) continue;
        const a = x8(n[1]);
        if (a === "__proto__" || a === "constructor") continue;
        const i = k8(n[2] || "");
        t[a] === void 0 ? t[a] = i : Array.isArray(t[a]) ? t[a].push(i) : t[a] = [t[a], i]
    }
    return t
}

function L8(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map(r => `${Iu(e)}=${Mc(r)}`).join("&") : `${Iu(e)}=${Mc(t)}` : Iu(e)
}

function D8(e) {
    return Object.keys(e).filter(t => e[t] !== void 0).map(t => L8(t, e[t])).filter(Boolean).join("&")
}
const F8 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
    j8 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
    U8 = /^([/\\]\s*){2,}[^/\\]/;

function y0(e, t = {}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }), t.strict ? F8.test(e) : j8.test(e) || (t.acceptRelative ? U8.test(e) : !1)
}
const M8 = /\/$|\/\?/;

function Bc(e = "", t = !1) {
    return t ? M8.test(e) : e.endsWith("/")
}

function B8(e = "", t = !1) {
    if (!t) return (Bc(e) ? e.slice(0, -1) : e) || "/";
    if (!Bc(e, !0)) return e || "/";
    const [r, ...n] = e.split("?");
    return (r.slice(0, -1) || "/") + (n.length > 0 ? `?${n.join("?")}` : "")
}

function z8(e = "", t = !1) {
    if (!t) return e.endsWith("/") ? e : e + "/";
    if (Bc(e, !0)) return e || "/";
    const [r, ...n] = e.split("?");
    return r + "/" + (n.length > 0 ? `?${n.join("?")}` : "")
}

function V8(e, t) {
    if (W8(t) || y0(e)) return e;
    const r = B8(t);
    return e.startsWith(r) ? e : K8(r, e)
}

function q8(e, t) {
    const r = b0(e),
        n = {
            ...P8(r.search),
            ...t
        };
    return r.search = D8(n), X8(r)
}

function W8(e) {
    return !e || e === "/"
}

function G8(e) {
    return e && e !== "/"
}
const H8 = /^\.?\//;

function K8(e, ...t) {
    let r = e || "";
    for (const n of t.filter(a => G8(a)))
        if (r) {
            const a = n.replace(H8, "");
            r = z8(r) + a
        } else r = n;
    return r
}

function b0(e = "", t) {
    const r = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/);
    if (r) {
        const [, f, d = ""] = r;
        return {
            protocol: f,
            pathname: d,
            href: f + d,
            auth: "",
            host: "",
            search: "",
            hash: ""
        }
    }
    if (!y0(e, {
            acceptRelative: !0
        })) return t ? b0(t + e) : Rp(e);
    const [, n = "", a, i = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [], [, s = "", o = ""] = i.match(/([^#/?]*)(.*)?/) || [], {
        pathname: u,
        search: c,
        hash: l
    } = Rp(o.replace(/\/(?=[A-Za-z]:)/, ""));
    return {
        protocol: n,
        auth: a ? a.slice(0, Math.max(0, a.length - 1)) : "",
        host: s,
        pathname: u,
        search: c,
        hash: l
    }
}

function Rp(e = "") {
    const [t = "", r = "", n = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: r,
        hash: n
    }
}

function X8(e) {
    const t = e.pathname || "",
        r = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "",
        n = e.hash || "",
        a = e.auth ? e.auth + "@" : "",
        i = e.host || "";
    return (e.protocol ? e.protocol + "//" : "") + a + i + t + r + n
}
class Y8 extends Error {
    constructor(t, r) {
        super(t, r), this.name = "FetchError", r != null && r.cause && !this.cause && (this.cause = r.cause)
    }
}

function J8(e) {
    var u, c, l, f, d;
    const t = ((u = e.error) == null ? void 0 : u.message) || ((c = e.error) == null ? void 0 : c.toString()) || "",
        r = ((l = e.request) == null ? void 0 : l.method) || ((f = e.options) == null ? void 0 : f.method) || "GET",
        n = ((d = e.request) == null ? void 0 : d.url) || String(e.request) || "/",
        a = `[${r}] ${JSON.stringify(n)}`,
        i = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>",
        s = `${a}: ${i}${t?` ${t}`:""}`,
        o = new Y8(s, e.error ? {
            cause: e.error
        } : void 0);
    for (const h of ["request", "options", "response"]) Object.defineProperty(o, h, {
        get() {
            return e[h]
        }
    });
    for (const [h, p] of [
            ["data", "_data"],
            ["status", "status"],
            ["statusCode", "status"],
            ["statusText", "statusText"],
            ["statusMessage", "statusText"]
        ]) Object.defineProperty(o, h, {
        get() {
            return e.response && e.response[p]
        }
    });
    return o
}
const Q8 = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function Cp(e = "GET") {
    return Q8.has(e.toUpperCase())
}

function Z8(e) {
    if (e === void 0) return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const e9 = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
    t9 = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function r9(e = "") {
    if (!e) return "json";
    const t = e.split(";").shift() || "";
    return t9.test(t) ? "json" : e9.has(t) || t.startsWith("text/") ? "text" : "blob"
}

function n9(e, t, r = globalThis.Headers) {
    const n = {
        ...t,
        ...e
    };
    if (t != null && t.params && (e != null && e.params) && (n.params = {
            ...t == null ? void 0 : t.params,
            ...e == null ? void 0 : e.params
        }), t != null && t.query && (e != null && e.query) && (n.query = {
            ...t == null ? void 0 : t.query,
            ...e == null ? void 0 : e.query
        }), t != null && t.headers && (e != null && e.headers)) {
        n.headers = new r((t == null ? void 0 : t.headers) || {});
        for (const [a, i] of new r((e == null ? void 0 : e.headers) || {})) n.headers.set(a, i)
    }
    return n
}
const a9 = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
    i9 = new Set([101, 204, 205, 304]);

function w0(e = {}) {
    const {
        fetch: t = globalThis.fetch,
        Headers: r = globalThis.Headers,
        AbortController: n = globalThis.AbortController
    } = e;
    async function a(o) {
        const u = o.error && o.error.name === "AbortError" && !o.options.timeout || !1;
        if (o.options.retry !== !1 && !u) {
            let l;
            typeof o.options.retry == "number" ? l = o.options.retry : l = Cp(o.options.method) ? 0 : 1;
            const f = o.response && o.response.status || 500;
            if (l > 0 && (Array.isArray(o.options.retryStatusCodes) ? o.options.retryStatusCodes.includes(f) : a9.has(f))) {
                const d = o.options.retryDelay || 0;
                return d > 0 && await new Promise(h => setTimeout(h, d)), i(o.request, {
                    ...o.options,
                    retry: l - 1,
                    timeout: o.options.timeout
                })
            }
        }
        const c = J8(o);
        throw Error.captureStackTrace && Error.captureStackTrace(c, i), c
    }
    const i = async function (u, c = {}) {
        var d;
        const l = {
            request: u,
            options: n9(c, e.defaults, r),
            response: void 0,
            error: void 0
        };
        if (l.options.method = (d = l.options.method) == null ? void 0 : d.toUpperCase(), l.options.onRequest && await l.options.onRequest(l), typeof l.request == "string" && (l.options.baseURL && (l.request = V8(l.request, l.options.baseURL)), (l.options.query || l.options.params) && (l.request = q8(l.request, {
                ...l.options.params,
                ...l.options.query
            }))), l.options.body && Cp(l.options.method) && (Z8(l.options.body) ? (l.options.body = typeof l.options.body == "string" ? l.options.body : JSON.stringify(l.options.body), l.options.headers = new r(l.options.headers || {}), l.options.headers.has("content-type") || l.options.headers.set("content-type", "application/json"), l.options.headers.has("accept") || l.options.headers.set("accept", "application/json")) : ("pipeTo" in l.options.body && typeof l.options.body.pipeTo == "function" || typeof l.options.body.pipe == "function") && ("duplex" in l.options || (l.options.duplex = "half"))), !l.options.signal && l.options.timeout) {
            const h = new n;
            setTimeout(() => h.abort(), l.options.timeout), l.options.signal = h.signal
        }
        try {
            l.response = await t(l.request, l.options)
        } catch (h) {
            return l.error = h, l.options.onRequestError && await l.options.onRequestError(l), await a(l)
        }
        if (l.response.body && !i9.has(l.response.status) && l.options.method !== "HEAD") {
            const h = (l.options.parseResponse ? "json" : l.options.responseType) || r9(l.response.headers.get("content-type") || "");
            switch (h) {
                case "json": {
                    const p = await l.response.text(),
                        y = l.options.parseResponse || $8;
                    l.response._data = y(p);
                    break
                }
                case "stream": {
                    l.response._data = l.response.body;
                    break
                }
                default:
                    l.response._data = await l.response[h]()
            }
        }
        return l.options.onResponse && await l.options.onResponse(l), !l.options.ignoreResponseError && l.response.status >= 400 && l.response.status < 600 ? (l.options.onResponseError && await l.options.onResponseError(l), await a(l)) : l.response
    }, s = async function (u, c) {
        return (await i(u, c))._data
    };
    return s.raw = i, s.native = (...o) => t(...o), s.create = (o = {}) => w0({
        ...e,
        defaults: {
            ...e.defaults,
            ...o
        }
    }), s
}
const hf = function () {
        if (typeof globalThis < "u") return globalThis;
        if (typeof self < "u") return self;
        if (typeof window < "u") return window;
        if (typeof global < "u") return global;
        throw new Error("unable to locate global object")
    }(),
    s9 = hf.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),
    o9 = hf.Headers,
    u9 = hf.AbortController,
    iB = w0({
        fetch: s9,
        Headers: o9,
        AbortController: u9
    });
var E0 = {
    exports: {}
};
(function (e, t) {
    (function (r, n, a) {
        e.exports = a(), e.exports.default = a()
    })("slugify", Ot, function () {
        var r = JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E'","Ը":"Y'","Թ":"T'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C'","Կ":"K","Հ":"H","Ձ":"D'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P'","Ք":"Q'","Օ":"O''","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"'","’":"'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}`),
            n = JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');

        function a(i, s) {
            if (typeof i != "string") throw new Error("slugify: string argument expected");
            s = typeof s == "string" ? {
                replacement: s
            } : s || {};
            var o = n[s.locale] || {},
                u = s.replacement === void 0 ? "-" : s.replacement,
                c = s.trim === void 0 ? !0 : s.trim,
                l = i.normalize().split("").reduce(function (f, d) {
                    var h = o[d];
                    return h === void 0 && (h = r[d]), h === void 0 && (h = d), h === u && (h = " "), f + h.replace(s.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, "")
                }, "");
            return s.strict && (l = l.replace(/[^A-Za-z0-9\s]/g, "")), c && (l = l.trim()), l = l.replace(/\s+/g, u), s.lower && (l = l.toLowerCase()), l
        }
        return a.extend = function (i) {
            Object.assign(r, i)
        }, a
    })
})(E0);
var c9 = E0.exports;
const sB = Re(c9);
let l9 = e => crypto.getRandomValues(new Uint8Array(e)),
    f9 = (e, t, r) => {
        let n = (2 << Math.log(e.length - 1) / Math.LN2) - 1,
            a = -~(1.6 * n * t / e.length);
        return (i = t) => {
            let s = "";
            for (;;) {
                let o = r(a),
                    u = a;
                for (; u--;)
                    if (s += e[o[u] & n] || "", s.length === i) return s
            }
        }
    },
    S0 = (e, t = 21) => f9(e, t, l9);
var fa = {};
Object.defineProperty(fa, "__esModule", {
    value: !0
});
var Qt = fa.unpack = fa.detect = void 0;

function d9(e) {
    return e.replace(" ", "").startsWith("eval(function(p,a,c,k,e,")
}
fa.detect = d9;

function h9(e) {
    let {
        payload: t,
        symtab: r,
        radix: n,
        count: a
    } = o(e);
    if (a != r.length) throw Error("Malformed p.a.c.k.e.r. symtab.");
    let i;
    try {
        i = new p9(n)
    } catch {
        throw Error("Unknown p.a.c.k.e.r. encoding.")
    }

    function s(c) {
        const l = c;
        let f;
        return n == 1 ? f = r[parseInt(l)] : f = r[i.unbase(l)], f || l
    }
    return e = t.replace(/\b\w+\b/g, s), e;

    function o(c) {
        const l = [/}\('(.*)', *(\d+|\[\]), *(\d+), *'(.*)'\.split\('\|'\), *(\d+), *(.*)\)\)/, /}\('(.*)', *(\d+|\[\]), *(\d+), *'(.*)'\.split\('\|'\)/];
        for (const f of l) {
            const d = f.exec(c);
            if (d) {
                let h = d;
                h[2] == "[]";
                try {
                    return {
                        payload: h[1],
                        symtab: h[4].split("|"),
                        radix: parseInt(h[2]),
                        count: parseInt(h[3])
                    }
                } catch {
                    throw Error("Corrupted p.a.c.k.e.r. data.")
                }
            }
        }
        throw Error("Could not make sense of p.a.c.k.e.r data (unexpected code structure)")
    }

    function u(c) {
        return c
    }
}
Qt = fa.unpack = h9;
class p9 {
    constructor(t) {
        if (this.ALPHABET = {
                62: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                95: "' !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'"
            }, this.dictionary = {}, this.base = t, 36 < t && t < 62 && (this.ALPHABET[t] = this.ALPHABET[t] || this.ALPHABET[62].substr(0, t)), 2 <= t && t <= 36) this.unbase = r => parseInt(r, t);
        else {
            try {
                [...this.ALPHABET[t]].forEach((r, n) => {
                    this.dictionary[r] = n
                })
            } catch {
                throw Error("Unsupported base encoding.")
            }
            this.unbase = this._dictunbaser
        }
    }
    _dictunbaser(t) {
        let r = 0;
        return [...t].reverse().forEach((n, a) => {
            r = r + Math.pow(this.base, a) * this.dictionary[n]
        }), r
    }
}
const m9 = {
    aa: {
        name: "Afar",
        nativeName: "Afaraf"
    },
    ab: {
        name: "Abkhaz",
        nativeName: "аҧсуа бызшәа"
    },
    ae: {
        name: "Avestan",
        nativeName: "avesta"
    },
    af: {
        name: "Afrikaans",
        nativeName: "Afrikaans"
    },
    ak: {
        name: "Akan",
        nativeName: "Akan"
    },
    am: {
        name: "Amharic",
        nativeName: "አማርኛ"
    },
    an: {
        name: "Aragonese",
        nativeName: "aragonés"
    },
    ar: {
        name: "Arabic",
        nativeName: "اَلْعَرَبِيَّةُ"
    },
    as: {
        name: "Assamese",
        nativeName: "অসমীয়া"
    },
    av: {
        name: "Avaric",
        nativeName: "авар мацӀ"
    },
    ay: {
        name: "Aymara",
        nativeName: "aymar aru"
    },
    az: {
        name: "Azerbaijani",
        nativeName: "azərbaycan dili"
    },
    ba: {
        name: "Bashkir",
        nativeName: "башҡорт теле"
    },
    be: {
        name: "Belarusian",
        nativeName: "беларуская мова"
    },
    bg: {
        name: "Bulgarian",
        nativeName: "български език"
    },
    bi: {
        name: "Bislama",
        nativeName: "Bislama"
    },
    bm: {
        name: "Bambara",
        nativeName: "bamanankan"
    },
    bn: {
        name: "Bengali",
        nativeName: "বাংলা"
    },
    bo: {
        name: "Tibetan",
        nativeName: "བོད་ཡིག"
    },
    br: {
        name: "Breton",
        nativeName: "brezhoneg"
    },
    bs: {
        name: "Bosnian",
        nativeName: "bosanski jezik"
    },
    ca: {
        name: "Catalan",
        nativeName: "Català"
    },
    ce: {
        name: "Chechen",
        nativeName: "нохчийн мотт"
    },
    ch: {
        name: "Chamorro",
        nativeName: "Chamoru"
    },
    co: {
        name: "Corsican",
        nativeName: "corsu"
    },
    cr: {
        name: "Cree",
        nativeName: "ᓀᐦᐃᔭᐍᐏᐣ"
    },
    cs: {
        name: "Czech",
        nativeName: "čeština"
    },
    cu: {
        name: "Old Church Slavonic",
        nativeName: "ѩзыкъ словѣньскъ"
    },
    cv: {
        name: "Chuvash",
        nativeName: "чӑваш чӗлхи"
    },
    cy: {
        name: "Welsh",
        nativeName: "Cymraeg"
    },
    da: {
        name: "Danish",
        nativeName: "Dansk"
    },
    de: {
        name: "German",
        nativeName: "Deutsch"
    },
    dv: {
        name: "Divehi",
        nativeName: "ދިވެހި"
    },
    dz: {
        name: "Dzongkha",
        nativeName: "རྫོང་ཁ"
    },
    ee: {
        name: "Ewe",
        nativeName: "Eʋegbe"
    },
    el: {
        name: "Greek",
        nativeName: "Ελληνικά"
    },
    en: {
        name: "English",
        nativeName: "English"
    },
    eo: {
        name: "Esperanto",
        nativeName: "Esperanto"
    },
    es: {
        name: "Spanish",
        nativeName: "Español"
    },
    et: {
        name: "Estonian",
        nativeName: "eesti"
    },
    eu: {
        name: "Basque",
        nativeName: "euskara"
    },
    fa: {
        name: "Persian",
        nativeName: "فارسی"
    },
    ff: {
        name: "Fula",
        nativeName: "Fulfulde"
    },
    fi: {
        name: "Finnish",
        nativeName: "suomi"
    },
    fj: {
        name: "Fijian",
        nativeName: "vosa Vakaviti"
    },
    fo: {
        name: "Faroese",
        nativeName: "Føroyskt"
    },
    fr: {
        name: "French",
        nativeName: "Français"
    },
    fy: {
        name: "Western Frisian",
        nativeName: "Frysk"
    },
    ga: {
        name: "Irish",
        nativeName: "Gaeilge"
    },
    gd: {
        name: "Scottish Gaelic",
        nativeName: "Gàidhlig"
    },
    gl: {
        name: "Galician",
        nativeName: "galego"
    },
    gn: {
        name: "Guaraní",
        nativeName: "Avañe'ẽ"
    },
    gu: {
        name: "Gujarati",
        nativeName: "ગુજરાતી"
    },
    gv: {
        name: "Manx",
        nativeName: "Gaelg"
    },
    ha: {
        name: "Hausa",
        nativeName: "هَوُسَ"
    },
    he: {
        name: "Hebrew",
        nativeName: "עברית"
    },
    hi: {
        name: "Hindi",
        nativeName: "हिन्दी"
    },
    ho: {
        name: "Hiri Motu",
        nativeName: "Hiri Motu"
    },
    hr: {
        name: "Croatian",
        nativeName: "Hrvatski"
    },
    ht: {
        name: "Haitian",
        nativeName: "Kreyòl ayisyen"
    },
    hu: {
        name: "Hungarian",
        nativeName: "magyar"
    },
    hy: {
        name: "Armenian",
        nativeName: "Հայերեն"
    },
    hz: {
        name: "Herero",
        nativeName: "Otjiherero"
    },
    ia: {
        name: "Interlingua",
        nativeName: "Interlingua"
    },
    id: {
        name: "Indonesian",
        nativeName: "Bahasa Indonesia"
    },
    ie: {
        name: "Interlingue",
        nativeName: "Interlingue"
    },
    ig: {
        name: "Igbo",
        nativeName: "Asụsụ Igbo"
    },
    ii: {
        name: "Nuosu",
        nativeName: "ꆈꌠ꒿ Nuosuhxop"
    },
    ik: {
        name: "Inupiaq",
        nativeName: "Iñupiaq"
    },
    io: {
        name: "Ido",
        nativeName: "Ido"
    },
    is: {
        name: "Icelandic",
        nativeName: "Íslenska"
    },
    it: {
        name: "Italian",
        nativeName: "Italiano"
    },
    iu: {
        name: "Inuktitut",
        nativeName: "ᐃᓄᒃᑎᑐᑦ"
    },
    ja: {
        name: "Japanese",
        nativeName: "日本語"
    },
    jv: {
        name: "Javanese",
        nativeName: "basa Jawa"
    },
    ka: {
        name: "Georgian",
        nativeName: "ქართული"
    },
    kg: {
        name: "Kongo",
        nativeName: "Kikongo"
    },
    ki: {
        name: "Kikuyu",
        nativeName: "Gĩkũyũ"
    },
    kj: {
        name: "Kwanyama",
        nativeName: "Kuanyama"
    },
    kk: {
        name: "Kazakh",
        nativeName: "қазақ тілі"
    },
    kl: {
        name: "Kalaallisut",
        nativeName: "kalaallisut"
    },
    km: {
        name: "Khmer",
        nativeName: "ខេមរភាសា"
    },
    kn: {
        name: "Kannada",
        nativeName: "ಕನ್ನಡ"
    },
    ko: {
        name: "Korean",
        nativeName: "한국어"
    },
    kr: {
        name: "Kanuri",
        nativeName: "Kanuri"
    },
    ks: {
        name: "Kashmiri",
        nativeName: "कश्मीरी"
    },
    ku: {
        name: "Kurdish",
        nativeName: "Kurdî"
    },
    kv: {
        name: "Komi",
        nativeName: "коми кыв"
    },
    kw: {
        name: "Cornish",
        nativeName: "Kernewek"
    },
    ky: {
        name: "Kyrgyz",
        nativeName: "Кыргызча"
    },
    la: {
        name: "Latin",
        nativeName: "latine"
    },
    lb: {
        name: "Luxembourgish",
        nativeName: "Lëtzebuergesch"
    },
    lg: {
        name: "Ganda",
        nativeName: "Luganda"
    },
    li: {
        name: "Limburgish",
        nativeName: "Limburgs"
    },
    ln: {
        name: "Lingala",
        nativeName: "Lingála"
    },
    lo: {
        name: "Lao",
        nativeName: "ພາສາລາວ"
    },
    lt: {
        name: "Lithuanian",
        nativeName: "lietuvių kalba"
    },
    lu: {
        name: "Luba-Katanga",
        nativeName: "Kiluba"
    },
    lv: {
        name: "Latvian",
        nativeName: "latviešu valoda"
    },
    mg: {
        name: "Malagasy",
        nativeName: "fiteny malagasy"
    },
    mh: {
        name: "Marshallese",
        nativeName: "Kajin M̧ajeļ"
    },
    mi: {
        name: "Māori",
        nativeName: "te reo Māori"
    },
    mk: {
        name: "Macedonian",
        nativeName: "македонски јазик"
    },
    ml: {
        name: "Malayalam",
        nativeName: "മലയാളം"
    },
    mn: {
        name: "Mongolian",
        nativeName: "Монгол хэл"
    },
    mr: {
        name: "Marathi",
        nativeName: "मराठी"
    },
    ms: {
        name: "Malay",
        nativeName: "Bahasa Melayu"
    },
    mt: {
        name: "Maltese",
        nativeName: "Malti"
    },
    my: {
        name: "Burmese",
        nativeName: "ဗမာစာ"
    },
    na: {
        name: "Nauru",
        nativeName: "Dorerin Naoero"
    },
    nb: {
        name: "Norwegian Bokmål",
        nativeName: "Norsk bokmål"
    },
    nd: {
        name: "Northern Ndebele",
        nativeName: "isiNdebele"
    },
    ne: {
        name: "Nepali",
        nativeName: "नेपाली"
    },
    ng: {
        name: "Ndonga",
        nativeName: "Owambo"
    },
    nl: {
        name: "Dutch",
        nativeName: "Nederlands"
    },
    nn: {
        name: "Norwegian Nynorsk",
        nativeName: "Norsk nynorsk"
    },
    no: {
        name: "Norwegian",
        nativeName: "Norsk"
    },
    nr: {
        name: "Southern Ndebele",
        nativeName: "isiNdebele"
    },
    nv: {
        name: "Navajo",
        nativeName: "Diné bizaad"
    },
    ny: {
        name: "Chichewa",
        nativeName: "chiCheŵa"
    },
    oc: {
        name: "Occitan",
        nativeName: "occitan"
    },
    oj: {
        name: "Ojibwe",
        nativeName: "ᐊᓂᔑᓈᐯᒧᐎᓐ"
    },
    om: {
        name: "Oromo",
        nativeName: "Afaan Oromoo"
    },
    or: {
        name: "Oriya",
        nativeName: "ଓଡ଼ିଆ"
    },
    os: {
        name: "Ossetian",
        nativeName: "ирон æвзаг"
    },
    pa: {
        name: "Panjabi",
        nativeName: "ਪੰਜਾਬੀ"
    },
    pi: {
        name: "Pāli",
        nativeName: "पाऴि"
    },
    pl: {
        name: "Polish",
        nativeName: "Polski"
    },
    ps: {
        name: "Pashto",
        nativeName: "پښتو"
    },
    pt: {
        name: "Portuguese",
        nativeName: "Português"
    },
    qu: {
        name: "Quechua",
        nativeName: "Runa Simi"
    },
    rm: {
        name: "Romansh",
        nativeName: "rumantsch grischun"
    },
    rn: {
        name: "Kirundi",
        nativeName: "Ikirundi"
    },
    ro: {
        name: "Romanian",
        nativeName: "Română"
    },
    ru: {
        name: "Russian",
        nativeName: "Русский"
    },
    rw: {
        name: "Kinyarwanda",
        nativeName: "Ikinyarwanda"
    },
    sa: {
        name: "Sanskrit",
        nativeName: "संस्कृतम्"
    },
    sc: {
        name: "Sardinian",
        nativeName: "sardu"
    },
    sd: {
        name: "Sindhi",
        nativeName: "सिन्धी"
    },
    se: {
        name: "Northern Sami",
        nativeName: "Davvisámegiella"
    },
    sg: {
        name: "Sango",
        nativeName: "yângâ tî sängö"
    },
    si: {
        name: "Sinhala",
        nativeName: "සිංහල"
    },
    sk: {
        name: "Slovak",
        nativeName: "slovenčina"
    },
    sl: {
        name: "Slovenian",
        nativeName: "slovenščina"
    },
    sm: {
        name: "Samoan",
        nativeName: "gagana fa'a Samoa"
    },
    sn: {
        name: "Shona",
        nativeName: "chiShona"
    },
    so: {
        name: "Somali",
        nativeName: "Soomaaliga"
    },
    sq: {
        name: "Albanian",
        nativeName: "Shqip"
    },
    sr: {
        name: "Serbian",
        nativeName: "српски језик"
    },
    ss: {
        name: "Swati",
        nativeName: "SiSwati"
    },
    st: {
        name: "Southern Sotho",
        nativeName: "Sesotho"
    },
    su: {
        name: "Sundanese",
        nativeName: "Basa Sunda"
    },
    sv: {
        name: "Swedish",
        nativeName: "Svenska"
    },
    sw: {
        name: "Swahili",
        nativeName: "Kiswahili"
    },
    ta: {
        name: "Tamil",
        nativeName: "தமிழ்"
    },
    te: {
        name: "Telugu",
        nativeName: "తెలుగు"
    },
    tg: {
        name: "Tajik",
        nativeName: "тоҷикӣ"
    },
    th: {
        name: "Thai",
        nativeName: "ไทย"
    },
    ti: {
        name: "Tigrinya",
        nativeName: "ትግርኛ"
    },
    tk: {
        name: "Turkmen",
        nativeName: "Türkmençe"
    },
    tl: {
        name: "Tagalog",
        nativeName: "Wikang Tagalog"
    },
    tn: {
        name: "Tswana",
        nativeName: "Setswana"
    },
    to: {
        name: "Tonga",
        nativeName: "faka Tonga"
    },
    tr: {
        name: "Turkish",
        nativeName: "Türkçe"
    },
    ts: {
        name: "Tsonga",
        nativeName: "Xitsonga"
    },
    tt: {
        name: "Tatar",
        nativeName: "татар теле"
    },
    tw: {
        name: "Twi",
        nativeName: "Twi"
    },
    ty: {
        name: "Tahitian",
        nativeName: "Reo Tahiti"
    },
    ug: {
        name: "Uyghur",
        nativeName: "ئۇيغۇرچە‎"
    },
    uk: {
        name: "Ukrainian",
        nativeName: "Українська"
    },
    ur: {
        name: "Urdu",
        nativeName: "اردو"
    },
    uz: {
        name: "Uzbek",
        nativeName: "Ўзбек"
    },
    ve: {
        name: "Venda",
        nativeName: "Tshivenḓa"
    },
    vi: {
        name: "Vietnamese",
        nativeName: "Tiếng Việt"
    },
    vo: {
        name: "Volapük",
        nativeName: "Volapük"
    },
    wa: {
        name: "Walloon",
        nativeName: "walon"
    },
    wo: {
        name: "Wolof",
        nativeName: "Wollof"
    },
    xh: {
        name: "Xhosa",
        nativeName: "isiXhosa"
    },
    yi: {
        name: "Yiddish",
        nativeName: "ייִדיש"
    },
    yo: {
        name: "Yoruba",
        nativeName: "Yorùbá"
    },
    za: {
        name: "Zhuang",
        nativeName: "Saɯ cueŋƅ"
    },
    zh: {
        name: "Chinese",
        nativeName: "中文"
    },
    zu: {
        name: "Zulu",
        nativeName: "isiZulu"
    }
};
var g9 = m9;
const Yn = g9,
    $0 = {},
    rs = {},
    A0 = [],
    O0 = [],
    _0 = [];
for (const e in Yn) {
    const {
        name: t,
        nativeName: r
    } = Yn[e];
    $0[e] = rs[t.toLowerCase()] = rs[r.toLowerCase()] = {
        code: e,
        name: t,
        nativeName: r
    }, A0.push(e), O0.push(t), _0.push(r)
}
var v9 = class Fi {
    static getLanguages(t = []) {
        return t.map(r => Fi.validate(r) ? Object.assign({}, $0[r]) : {
            code: r,
            name: "",
            nativeName: ""
        })
    }
    static getName(t) {
        return Fi.validate(t) ? Yn[t].name : ""
    }
    static getAllNames() {
        return O0.slice()
    }
    static getNativeName(t) {
        return Fi.validate(t) ? Yn[t].nativeName : ""
    }
    static getAllNativeNames() {
        return _0.slice()
    }
    static getCode(t) {
        return t = t.toLowerCase(), rs.hasOwnProperty(t) ? rs[t].code : ""
    }
    static getAllCodes() {
        return A0.slice()
    }
    static validate(t) {
        return Yn.hasOwnProperty(t)
    }
};
const R0 = Re(v9),
    pf = {
        xml: !1,
        decodeEntities: !0
    },
    Ip = {
        _useHtmlParser2: !0,
        xmlMode: !0
    };

function zc(e) {
    return e != null && e.xml ? typeof e.xml == "boolean" ? Ip : {
        ...Ip,
        ...e.xml
    } : e ?? void 0
}
var ae;
(function (e) {
    e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"
})(ae || (ae = {}));

function y9(e) {
    return e.type === ae.Tag || e.type === ae.Script || e.type === ae.Style
}
const b9 = ae.Root,
    w9 = ae.Text,
    E9 = ae.Directive,
    S9 = ae.Comment,
    $9 = ae.Script,
    A9 = ae.Style,
    O9 = ae.Tag,
    _9 = ae.CDATA,
    R9 = ae.Doctype;
let C0 = class {
    constructor() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null
    }
    get parentNode() {
        return this.parent
    }
    set parentNode(t) {
        this.parent = t
    }
    get previousSibling() {
        return this.prev
    }
    set previousSibling(t) {
        this.prev = t
    }
    get nextSibling() {
        return this.next
    }
    set nextSibling(t) {
        this.next = t
    }
    cloneNode(t = !1) {
        return as(this, t)
    }
};
class mf extends C0 {
    constructor(t) {
        super(), this.data = t
    }
    get nodeValue() {
        return this.data
    }
    set nodeValue(t) {
        this.data = t
    }
}
class ns extends mf {
    constructor() {
        super(...arguments), this.type = ae.Text
    }
    get nodeType() {
        return 3
    }
}
class I0 extends mf {
    constructor() {
        super(...arguments), this.type = ae.Comment
    }
    get nodeType() {
        return 8
    }
}
class N0 extends mf {
    constructor(t, r) {
        super(r), this.name = t, this.type = ae.Directive
    }
    get nodeType() {
        return 1
    }
}
class gf extends C0 {
    constructor(t) {
        super(), this.children = t
    }
    get firstChild() {
        var t;
        return (t = this.children[0]) !== null && t !== void 0 ? t : null
    }
    get lastChild() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null
    }
    get childNodes() {
        return this.children
    }
    set childNodes(t) {
        this.children = t
    }
}
class T0 extends gf {
    constructor() {
        super(...arguments), this.type = ae.CDATA
    }
    get nodeType() {
        return 4
    }
}
let da = class extends gf {
        constructor() {
            super(...arguments), this.type = ae.Root
        }
        get nodeType() {
            return 9
        }
    },
    x0 = class extends gf {
        constructor(t, r, n = [], a = t === "script" ? ae.Script : t === "style" ? ae.Style : ae.Tag) {
            super(n), this.name = t, this.attribs = r, this.type = a
        }
        get nodeType() {
            return 1
        }
        get tagName() {
            return this.name
        }
        set tagName(t) {
            this.name = t
        }
        get attributes() {
            return Object.keys(this.attribs).map(t => {
                var r, n;
                return {
                    name: t,
                    value: this.attribs[t],
                    namespace: (r = this["x-attribsNamespace"]) === null || r === void 0 ? void 0 : r[t],
                    prefix: (n = this["x-attribsPrefix"]) === null || n === void 0 ? void 0 : n[t]
                }
            })
        }
    };

function X(e) {
    return y9(e)
}

function fo(e) {
    return e.type === ae.CDATA
}

function vr(e) {
    return e.type === ae.Text
}

function vf(e) {
    return e.type === ae.Comment
}

function C9(e) {
    return e.type === ae.Directive
}

function wn(e) {
    return e.type === ae.Root
}

function we(e) {
    return Object.prototype.hasOwnProperty.call(e, "children")
}

function as(e, t = !1) {
    let r;
    if (vr(e)) r = new ns(e.data);
    else if (vf(e)) r = new I0(e.data);
    else if (X(e)) {
        const n = t ? Nu(e.children) : [],
            a = new x0(e.name, {
                ...e.attribs
            }, n);
        n.forEach(i => i.parent = a), e.namespace != null && (a.namespace = e.namespace), e["x-attribsNamespace"] && (a["x-attribsNamespace"] = {
            ...e["x-attribsNamespace"]
        }), e["x-attribsPrefix"] && (a["x-attribsPrefix"] = {
            ...e["x-attribsPrefix"]
        }), r = a
    } else if (fo(e)) {
        const n = t ? Nu(e.children) : [],
            a = new T0(n);
        n.forEach(i => i.parent = a), r = a
    } else if (wn(e)) {
        const n = t ? Nu(e.children) : [],
            a = new da(n);
        n.forEach(i => i.parent = a), e["x-mode"] && (a["x-mode"] = e["x-mode"]), r = a
    } else if (C9(e)) {
        const n = new N0(e.name, e.data);
        e["x-name"] != null && (n["x-name"] = e["x-name"], n["x-publicId"] = e["x-publicId"], n["x-systemId"] = e["x-systemId"]), r = n
    } else throw new Error(`Not implemented yet: ${e.type}`);
    return r.startIndex = e.startIndex, r.endIndex = e.endIndex, e.sourceCodeLocation != null && (r.sourceCodeLocation = e.sourceCodeLocation), r
}

function Nu(e) {
    const t = e.map(r => as(r, !0));
    for (let r = 1; r < t.length; r++) t[r].prev = t[r - 1], t[r - 1].next = t[r];
    return t
}
const Np = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
};
class lB {
    constructor(t, r, n) {
        this.dom = [], this.root = new da(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof r == "function" && (n = r, r = Np), typeof t == "object" && (r = t, t = void 0), this.callback = t ?? null, this.options = r ?? Np, this.elementCB = n ?? null
    }
    onparserinit(t) {
        this.parser = t
    }
    onreset() {
        this.dom = [], this.root = new da(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null
    }
    onend() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null))
    }
    onerror(t) {
        this.handleCallback(t)
    }
    onclosetag() {
        this.lastNode = null;
        const t = this.tagStack.pop();
        this.options.withEndIndices && (t.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(t)
    }
    onopentag(t, r) {
        const n = this.options.xmlMode ? ae.Tag : void 0,
            a = new x0(t, r, void 0, n);
        this.addNode(a), this.tagStack.push(a)
    }
    ontext(t) {
        const {
            lastNode: r
        } = this;
        if (r && r.type === ae.Text) r.data += t, this.options.withEndIndices && (r.endIndex = this.parser.endIndex);
        else {
            const n = new ns(t);
            this.addNode(n), this.lastNode = n
        }
    }
    oncomment(t) {
        if (this.lastNode && this.lastNode.type === ae.Comment) {
            this.lastNode.data += t;
            return
        }
        const r = new I0(t);
        this.addNode(r), this.lastNode = r
    }
    oncommentend() {
        this.lastNode = null
    }
    oncdatastart() {
        const t = new ns(""),
            r = new T0([t]);
        this.addNode(r), t.parent = r, this.lastNode = t
    }
    oncdataend() {
        this.lastNode = null
    }
    onprocessinginstruction(t, r) {
        const n = new N0(t, r);
        this.addNode(n)
    }
    handleCallback(t) {
        if (typeof this.callback == "function") this.callback(t, this.dom);
        else if (t) throw t
    }
    addNode(t) {
        const r = this.tagStack[this.tagStack.length - 1],
            n = r.children[r.children.length - 1];
        this.options.withStartIndices && (t.startIndex = this.parser.startIndex), this.options.withEndIndices && (t.endIndex = this.parser.endIndex), r.children.push(t), n && (t.prev = n, n.next = t), t.parent = r, this.lastNode = null
    }
}
const I9 = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(e => [e.toLowerCase(), e])),
    N9 = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(e => [e.toLowerCase(), e])),
    T9 = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);

function x9(e) {
    return e.replace(/"/g, "&quot;")
}

function k9(e, t) {
    var r;
    if (!e) return;
    const n = ((r = t.encodeEntities) !== null && r !== void 0 ? r : t.decodeEntities) === !1 ? x9 : t.xmlMode || t.encodeEntities !== "utf8" ? tv : I2;
    return Object.keys(e).map(a => {
        var i, s;
        const o = (i = e[a]) !== null && i !== void 0 ? i : "";
        return t.xmlMode === "foreign" && (a = (s = N9.get(a)) !== null && s !== void 0 ? s : a), !t.emptyAttrs && !t.xmlMode && o === "" ? a : `${a}="${n(o)}"`
    }).join(" ")
}
const Tp = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);

function ho(e, t = {}) {
    const r = "length" in e ? e : [e];
    let n = "";
    for (let a = 0; a < r.length; a++) n += P9(r[a], t);
    return n
}

function P9(e, t) {
    switch (e.type) {
        case b9:
            return ho(e.children, t);
        case R9:
        case E9:
            return j9(e);
        case S9:
            return B9(e);
        case _9:
            return M9(e);
        case $9:
        case A9:
        case O9:
            return F9(e, t);
        case w9:
            return U9(e, t)
    }
}
const L9 = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]),
    D9 = new Set(["svg", "math"]);

function F9(e, t) {
    var r;
    t.xmlMode === "foreign" && (e.name = (r = I9.get(e.name)) !== null && r !== void 0 ? r : e.name, e.parent && L9.has(e.parent.name) && (t = {
        ...t,
        xmlMode: !1
    })), !t.xmlMode && D9.has(e.name) && (t = {
        ...t,
        xmlMode: "foreign"
    });
    let n = `<${e.name}`;
    const a = k9(e.attribs, t);
    return a && (n += ` ${a}`), e.children.length === 0 && (t.xmlMode ? t.selfClosingTags !== !1 : t.selfClosingTags && Tp.has(e.name)) ? (t.xmlMode || (n += " "), n += "/>") : (n += ">", e.children.length > 0 && (n += ho(e.children, t)), (t.xmlMode || !Tp.has(e.name)) && (n += `</${e.name}>`)), n
}

function j9(e) {
    return `<${e.data}>`
}

function U9(e, t) {
    var r;
    let n = e.data || "";
    return ((r = t.encodeEntities) !== null && r !== void 0 ? r : t.decodeEntities) !== !1 && !(!t.xmlMode && e.parent && T9.has(e.parent.name)) && (n = t.xmlMode || t.encodeEntities !== "utf8" ? tv(n) : C2(n)), n
}

function M9(e) {
    return `<![CDATA[${e.children[0].data}]]>`
}

function B9(e) {
    return `<!--${e.data}-->`
}

function k0(e, t) {
    return ho(e, t)
}

function z9(e, t) {
    return we(e) ? e.children.map(r => k0(r, t)).join("") : ""
}

function ji(e) {
    return Array.isArray(e) ? e.map(ji).join("") : X(e) ? e.name === "br" ? `
` : ji(e.children) : fo(e) ? ji(e.children) : vr(e) ? e.data : ""
}

function on(e) {
    return Array.isArray(e) ? e.map(on).join("") : we(e) && !vf(e) ? on(e.children) : vr(e) ? e.data : ""
}

function is(e) {
    return Array.isArray(e) ? e.map(is).join("") : we(e) && (e.type === ae.Tag || fo(e)) ? is(e.children) : vr(e) ? e.data : ""
}

function po(e) {
    return we(e) ? e.children : []
}

function P0(e) {
    return e.parent || null
}

function L0(e) {
    const t = P0(e);
    if (t != null) return po(t);
    const r = [e];
    let {
        prev: n,
        next: a
    } = e;
    for (; n != null;) r.unshift(n), {
        prev: n
    } = n;
    for (; a != null;) r.push(a), {
        next: a
    } = a;
    return r
}

function V9(e, t) {
    var r;
    return (r = e.attribs) === null || r === void 0 ? void 0 : r[t]
}

function q9(e, t) {
    return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, t) && e.attribs[t] != null
}

function W9(e) {
    return e.name
}

function yf(e) {
    let {
        next: t
    } = e;
    for (; t !== null && !X(t);)({
        next: t
    } = t);
    return t
}

function bf(e) {
    let {
        prev: t
    } = e;
    for (; t !== null && !X(t);)({
        prev: t
    } = t);
    return t
}

function Nr(e) {
    if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
        const t = e.parent.children,
            r = t.lastIndexOf(e);
        r >= 0 && t.splice(r, 1)
    }
    e.next = null, e.prev = null, e.parent = null
}

function G9(e, t) {
    const r = t.prev = e.prev;
    r && (r.next = t);
    const n = t.next = e.next;
    n && (n.prev = t);
    const a = t.parent = e.parent;
    if (a) {
        const i = a.children;
        i[i.lastIndexOf(e)] = t, e.parent = null
    }
}

function H9(e, t) {
    if (Nr(t), t.next = null, t.parent = e, e.children.push(t) > 1) {
        const r = e.children[e.children.length - 2];
        r.next = t, t.prev = r
    } else t.prev = null
}

function K9(e, t) {
    Nr(t);
    const {
        parent: r
    } = e, n = e.next;
    if (t.next = n, t.prev = e, e.next = t, t.parent = r, n) {
        if (n.prev = t, r) {
            const a = r.children;
            a.splice(a.lastIndexOf(n), 0, t)
        }
    } else r && r.children.push(t)
}

function X9(e, t) {
    if (Nr(t), t.parent = e, t.prev = null, e.children.unshift(t) !== 1) {
        const r = e.children[1];
        r.prev = t, t.next = r
    } else t.next = null
}

function Y9(e, t) {
    Nr(t);
    const {
        parent: r
    } = e;
    if (r) {
        const n = r.children;
        n.splice(n.indexOf(e), 0, t)
    }
    e.prev && (e.prev.next = t), t.parent = r, t.prev = e.prev, t.next = e, e.prev = t
}

function mo(e, t, r = !0, n = 1 / 0) {
    return wf(e, Array.isArray(t) ? t : [t], r, n)
}

function wf(e, t, r, n) {
    const a = [],
        i = [t],
        s = [0];
    for (;;) {
        if (s[0] >= i[0].length) {
            if (s.length === 1) return a;
            i.shift(), s.shift();
            continue
        }
        const o = i[0][s[0]++];
        if (e(o) && (a.push(o), --n <= 0)) return a;
        r && we(o) && o.children.length > 0 && (s.unshift(0), i.unshift(o.children))
    }
}

function J9(e, t) {
    return t.find(e)
}

function Ef(e, t, r = !0) {
    let n = null;
    for (let a = 0; a < t.length && !n; a++) {
        const i = t[a];
        if (X(i)) e(i) ? n = i : r && i.children.length > 0 && (n = Ef(e, i.children, !0));
        else continue
    }
    return n
}

function D0(e, t) {
    return t.some(r => X(r) && (e(r) || D0(e, r.children)))
}

function Q9(e, t) {
    const r = [],
        n = [t],
        a = [0];
    for (;;) {
        if (a[0] >= n[0].length) {
            if (n.length === 1) return r;
            n.shift(), a.shift();
            continue
        }
        const i = n[0][a[0]++];
        X(i) && (e(i) && r.push(i), i.children.length > 0 && (a.unshift(0), n.unshift(i.children)))
    }
}
const ss = {
    tag_name(e) {
        return typeof e == "function" ? t => X(t) && e(t.name) : e === "*" ? X : t => X(t) && t.name === e
    },
    tag_type(e) {
        return typeof e == "function" ? t => e(t.type) : t => t.type === e
    },
    tag_contains(e) {
        return typeof e == "function" ? t => vr(t) && e(t.data) : t => vr(t) && t.data === e
    }
};

function F0(e, t) {
    return typeof t == "function" ? r => X(r) && t(r.attribs[e]) : r => X(r) && r.attribs[e] === t
}

function Z9(e, t) {
    return r => e(r) || t(r)
}

function j0(e) {
    const t = Object.keys(e).map(r => {
        const n = e[r];
        return Object.prototype.hasOwnProperty.call(ss, r) ? ss[r](n) : F0(r, n)
    });
    return t.length === 0 ? null : t.reduce(Z9)
}

function e7(e, t) {
    const r = j0(e);
    return r ? r(t) : !0
}

function t7(e, t, r, n = 1 / 0) {
    const a = j0(e);
    return a ? mo(a, t, r, n) : []
}

function r7(e, t, r = !0) {
    return Array.isArray(t) || (t = [t]), Ef(F0("id", e), t, r)
}

function En(e, t, r = !0, n = 1 / 0) {
    return mo(ss.tag_name(e), t, r, n)
}

function n7(e, t, r = !0, n = 1 / 0) {
    return mo(ss.tag_type(e), t, r, n)
}

function a7(e) {
    let t = e.length;
    for (; --t >= 0;) {
        const r = e[t];
        if (t > 0 && e.lastIndexOf(r, t - 1) >= 0) {
            e.splice(t, 1);
            continue
        }
        for (let n = r.parent; n; n = n.parent)
            if (e.includes(n)) {
                e.splice(t, 1);
                break
            }
    }
    return e
}
var He;
(function (e) {
    e[e.DISCONNECTED = 1] = "DISCONNECTED", e[e.PRECEDING = 2] = "PRECEDING", e[e.FOLLOWING = 4] = "FOLLOWING", e[e.CONTAINS = 8] = "CONTAINS", e[e.CONTAINED_BY = 16] = "CONTAINED_BY"
})(He || (He = {}));

function U0(e, t) {
    const r = [],
        n = [];
    if (e === t) return 0;
    let a = we(e) ? e : e.parent;
    for (; a;) r.unshift(a), a = a.parent;
    for (a = we(t) ? t : t.parent; a;) n.unshift(a), a = a.parent;
    const i = Math.min(r.length, n.length);
    let s = 0;
    for (; s < i && r[s] === n[s];) s++;
    if (s === 0) return He.DISCONNECTED;
    const o = r[s - 1],
        u = o.children,
        c = r[s],
        l = n[s];
    return u.indexOf(c) > u.indexOf(l) ? o === t ? He.FOLLOWING | He.CONTAINED_BY : He.FOLLOWING : o === e ? He.PRECEDING | He.CONTAINS : He.PRECEDING
}

function Sn(e) {
    return e = e.filter((t, r, n) => !n.includes(t, r + 1)), e.sort((t, r) => {
        const n = U0(t, r);
        return n & He.PRECEDING ? -1 : n & He.FOLLOWING ? 1 : 0
    }), e
}

function i7(e) {
    const t = os(l7, e);
    return t ? t.name === "feed" ? s7(t) : o7(t) : null
}

function s7(e) {
    var t;
    const r = e.children,
        n = {
            type: "atom",
            items: En("entry", r).map(s => {
                var o;
                const {
                    children: u
                } = s, c = {
                    media: M0(u)
                };
                Pe(c, "id", "id", u), Pe(c, "title", "title", u);
                const l = (o = os("link", u)) === null || o === void 0 ? void 0 : o.attribs.href;
                l && (c.link = l);
                const f = zt("summary", u) || zt("content", u);
                f && (c.description = f);
                const d = zt("updated", u);
                return d && (c.pubDate = new Date(d)), c
            })
        };
    Pe(n, "id", "id", r), Pe(n, "title", "title", r);
    const a = (t = os("link", r)) === null || t === void 0 ? void 0 : t.attribs.href;
    a && (n.link = a), Pe(n, "description", "subtitle", r);
    const i = zt("updated", r);
    return i && (n.updated = new Date(i)), Pe(n, "author", "email", r, !0), n
}

function o7(e) {
    var t, r;
    const n = (r = (t = os("channel", e.children)) === null || t === void 0 ? void 0 : t.children) !== null && r !== void 0 ? r : [],
        a = {
            type: e.name.substr(0, 3),
            id: "",
            items: En("item", e.children).map(s => {
                const {
                    children: o
                } = s, u = {
                    media: M0(o)
                };
                Pe(u, "id", "guid", o), Pe(u, "title", "title", o), Pe(u, "link", "link", o), Pe(u, "description", "description", o);
                const c = zt("pubDate", o) || zt("dc:date", o);
                return c && (u.pubDate = new Date(c)), u
            })
        };
    Pe(a, "title", "title", n), Pe(a, "link", "link", n), Pe(a, "description", "description", n);
    const i = zt("lastBuildDate", n);
    return i && (a.updated = new Date(i)), Pe(a, "author", "managingEditor", n, !0), a
}
const u7 = ["url", "type", "lang"],
    c7 = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];

function M0(e) {
    return En("media:content", e).map(t => {
        const {
            attribs: r
        } = t, n = {
            medium: r.medium,
            isDefault: !!r.isDefault
        };
        for (const a of u7) r[a] && (n[a] = r[a]);
        for (const a of c7) r[a] && (n[a] = parseInt(r[a], 10));
        return r.expression && (n.expression = r.expression), n
    })
}

function os(e, t) {
    return En(e, t, !0, 1)[0]
}

function zt(e, t, r = !1) {
    return on(En(e, t, r, 1)).trim()
}

function Pe(e, t, r, n, a = !1) {
    const i = zt(r, n, a);
    i && (e[t] = i)
}

function l7(e) {
    return e === "rss" || e === "feed" || e === "rdf:RDF"
}
const go = Object.freeze(Object.defineProperty({
    __proto__: null,
    get DocumentPosition() {
        return He
    },
    append: K9,
    appendChild: H9,
    compareDocumentPosition: U0,
    existsOne: D0,
    filter: mo,
    find: wf,
    findAll: Q9,
    findOne: Ef,
    findOneChild: J9,
    getAttributeValue: V9,
    getChildren: po,
    getElementById: r7,
    getElements: t7,
    getElementsByTagName: En,
    getElementsByTagType: n7,
    getFeed: i7,
    getInnerHTML: z9,
    getName: W9,
    getOuterHTML: k0,
    getParent: P0,
    getSiblings: L0,
    getText: ji,
    hasAttrib: q9,
    hasChildren: we,
    innerText: is,
    isCDATA: fo,
    isComment: vf,
    isDocument: wn,
    isTag: X,
    isText: vr,
    nextElementSibling: yf,
    prepend: Y9,
    prependChild: X9,
    prevElementSibling: bf,
    removeElement: Nr,
    removeSubsets: a7,
    replaceElement: G9,
    testElement: e7,
    textContent: on,
    uniqueSort: Sn
}, Symbol.toStringTag, {
    value: "Module"
}));

function B0(e, t, r) {
    return e ? e(t ?? e._root.children, null, void 0, r).toString() : ""
}

function f7(e, t) {
    return !t && typeof e == "object" && e != null && !("length" in e) && !("type" in e)
}

function d7(e, t) {
    const r = f7(e) ? (t = e, void 0) : e,
        n = {
            ...pf,
            ...this === null || this === void 0 ? void 0 : this._options,
            ...zc(t ?? {})
        };
    return B0(this, r, n)
}

function h7(e) {
    const t = {
        ...this._options,
        xmlMode: !0
    };
    return B0(this, e, t)
}

function ha(e) {
    const t = e || (this ? this.root() : []);
    let r = "";
    for (let n = 0; n < t.length; n++) r += on(t[n]);
    return r
}

function p7(e, t, r = typeof t == "boolean" ? t : !1) {
    if (!e || typeof e != "string") return null;
    typeof t == "boolean" && (r = t);
    const n = this.load(e, pf, !1);
    return r || n("script").remove(), n.root()[0].children.slice()
}

function m7() {
    return this(this._root)
}

function z0(e, t) {
    if (t === e) return !1;
    let r = t;
    for (; r && r !== r.parent;)
        if (r = r.parent, r === e) return !0;
    return !1
}

function g7(e, t) {
    if (!xp(e) || !xp(t)) return;
    let r = e.length;
    const n = +t.length;
    for (let a = 0; a < n; a++) e[r++] = t[a];
    return e.length = r, e
}

function xp(e) {
    if (Array.isArray(e)) return !0;
    if (typeof e != "object" || !Object.prototype.hasOwnProperty.call(e, "length") || typeof e.length != "number" || e.length < 0) return !1;
    for (let t = 0; t < e.length; t++)
        if (!(t in e)) return !1;
    return !0
}
const v7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    contains: z0,
    html: d7,
    merge: g7,
    parseHTML: p7,
    root: m7,
    text: ha,
    xml: h7
}, Symbol.toStringTag, {
    value: "Module"
}));

function ht(e) {
    return e.cheerio != null
}

function y7(e) {
    return e.replace(/[_.-](\w|$)/g, (t, r) => r.toUpperCase())
}

function b7(e) {
    return e.replace(/[A-Z]/g, "-$&").toLowerCase()
}

function de(e, t) {
    const r = e.length;
    for (let n = 0; n < r; n++) t(e[n], n);
    return e
}

function Vc(e) {
    const t = "length" in e ? Array.prototype.map.call(e, n => as(n, !0)) : [as(e, !0)],
        r = new da(t);
    return t.forEach(n => {
        n.parent = r
    }), t
}
var cr;
(function (e) {
    e[e.LowerA = 97] = "LowerA", e[e.LowerZ = 122] = "LowerZ", e[e.UpperA = 65] = "UpperA", e[e.UpperZ = 90] = "UpperZ", e[e.Exclamation = 33] = "Exclamation"
})(cr || (cr = {}));

function qc(e) {
    const t = e.indexOf("<");
    if (t < 0 || t > e.length - 3) return !1;
    const r = e.charCodeAt(t + 1);
    return (r >= cr.LowerA && r <= cr.LowerZ || r >= cr.UpperA && r <= cr.UpperZ || r === cr.Exclamation) && e.includes(">", t + 2)
}
const Xr = Object.prototype.hasOwnProperty,
    pa = /\s+/,
    Tu = "data-",
    kp = {
        null: null,
        true: !0,
        false: !1
    },
    Sf = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    w7 = /^{[^]*}$|^\[[^]*]$/;

function us(e, t, r) {
    var n;
    if (!(!e || !X(e))) {
        if ((n = e.attribs) !== null && n !== void 0 || (e.attribs = {}), !t) return e.attribs;
        if (Xr.call(e.attribs, t)) return !r && Sf.test(t) ? t : e.attribs[t];
        if (e.name === "option" && t === "value") return ha(e.children);
        if (e.name === "input" && (e.attribs.type === "radio" || e.attribs.type === "checkbox") && t === "value") return "on"
    }
}

function Yr(e, t, r) {
    r === null ? V0(e, t) : e.attribs[t] = `${r}`
}

function E7(e, t) {
    if (typeof e == "object" || t !== void 0) {
        if (typeof t == "function") {
            if (typeof e != "string") throw new Error("Bad combination of arguments.");
            return de(this, (r, n) => {
                X(r) && Yr(r, e, t.call(r, n, r.attribs[e]))
            })
        }
        return de(this, r => {
            X(r) && (typeof e == "object" ? Object.keys(e).forEach(n => {
                const a = e[n];
                Yr(r, n, a)
            }) : Yr(r, e, t))
        })
    }
    return arguments.length > 1 ? this : us(this[0], e, this.options.xmlMode)
}

function Pp(e, t, r) {
    return t in e ? e[t] : !r && Sf.test(t) ? us(e, t, !1) !== void 0 : us(e, t, r)
}

function xu(e, t, r, n) {
    t in e ? e[t] = r : Yr(e, t, !n && Sf.test(t) ? r ? "" : null : `${r}`)
}

function S7(e, t) {
    var r;
    if (typeof e == "string" && t === void 0) {
        const n = this[0];
        if (!n || !X(n)) return;
        switch (e) {
            case "style": {
                const a = this.css(),
                    i = Object.keys(a);
                return i.forEach((s, o) => {
                    a[o] = s
                }), a.length = i.length, a
            }
            case "tagName":
            case "nodeName":
                return n.name.toUpperCase();
            case "href":
            case "src": {
                const a = (r = n.attribs) === null || r === void 0 ? void 0 : r[e];
                return typeof URL < "u" && (e === "href" && (n.tagName === "a" || n.name === "link") || e === "src" && (n.tagName === "img" || n.tagName === "iframe" || n.tagName === "audio" || n.tagName === "video" || n.tagName === "source")) && a !== void 0 && this.options.baseURI ? new URL(a, this.options.baseURI).href : a
            }
            case "innerText":
                return is(n);
            case "textContent":
                return on(n);
            case "outerHTML":
                return this.clone().wrap("<container />").parent().html();
            case "innerHTML":
                return this.html();
            default:
                return Pp(n, e, this.options.xmlMode)
        }
    }
    if (typeof e == "object" || t !== void 0) {
        if (typeof t == "function") {
            if (typeof e == "object") throw new Error("Bad combination of arguments.");
            return de(this, (n, a) => {
                X(n) && xu(n, e, t.call(n, a, Pp(n, e, this.options.xmlMode)), this.options.xmlMode)
            })
        }
        return de(this, n => {
            X(n) && (typeof e == "object" ? Object.keys(e).forEach(a => {
                const i = e[a];
                xu(n, a, i, this.options.xmlMode)
            }) : xu(n, e, t, this.options.xmlMode))
        })
    }
}

function Lp(e, t, r) {
    var n;
    const a = e;
    (n = a.data) !== null && n !== void 0 || (a.data = {}), typeof t == "object" ? Object.assign(a.data, t) : typeof t == "string" && r !== void 0 && (a.data[t] = r)
}

function Dp(e, t) {
    let r, n, a;
    t == null ? (r = Object.keys(e.attribs).filter(i => i.startsWith(Tu)), n = r.map(i => y7(i.slice(Tu.length)))) : (r = [Tu + b7(t)], n = [t]);
    for (let i = 0; i < r.length; ++i) {
        const s = r[i],
            o = n[i];
        if (Xr.call(e.attribs, s) && !Xr.call(e.data, o)) {
            if (a = e.attribs[s], Xr.call(kp, a)) a = kp[a];
            else if (a === String(Number(a))) a = Number(a);
            else if (w7.test(a)) try {
                a = JSON.parse(a)
            } catch {}
            e.data[o] = a
        }
    }
    return t == null ? e.data : a
}

function $7(e, t) {
    var r;
    const n = this[0];
    if (!n || !X(n)) return;
    const a = n;
    return (r = a.data) !== null && r !== void 0 || (a.data = {}), e ? typeof e == "object" || t !== void 0 ? (de(this, i => {
        X(i) && (typeof e == "object" ? Lp(i, e) : Lp(i, e, t))
    }), this) : Xr.call(a.data, e) ? a.data[e] : Dp(a, e) : Dp(a)
}

function A7(e) {
    const t = arguments.length === 0,
        r = this[0];
    if (!r || !X(r)) return t ? void 0 : this;
    switch (r.name) {
        case "textarea":
            return this.text(e);
        case "select": {
            const n = this.find("option:selected");
            if (!t) {
                if (this.attr("multiple") == null && typeof e == "object") return this;
                this.find("option").removeAttr("selected");
                const a = typeof e != "object" ? [e] : e;
                for (let i = 0; i < a.length; i++) this.find(`option[value="${a[i]}"]`).attr("selected", "");
                return this
            }
            return this.attr("multiple") ? n.toArray().map(a => ha(a.children)) : n.attr("value")
        }
        case "input":
        case "option":
            return t ? this.attr("value") : this.attr("value", e)
    }
}

function V0(e, t) {
    !e.attribs || !Xr.call(e.attribs, t) || delete e.attribs[t]
}

function cs(e) {
    return e ? e.trim().split(pa) : []
}

function O7(e) {
    const t = cs(e);
    for (let r = 0; r < t.length; r++) de(this, n => {
        X(n) && V0(n, t[r])
    });
    return this
}

function _7(e) {
    return this.toArray().some(t => {
        const r = X(t) && t.attribs.class;
        let n = -1;
        if (r && e.length)
            for (;
                (n = r.indexOf(e, n + 1)) > -1;) {
                const a = n + e.length;
                if ((n === 0 || pa.test(r[n - 1])) && (a === r.length || pa.test(r[a]))) return !0
            }
        return !1
    })
}

function q0(e) {
    if (typeof e == "function") return de(this, (n, a) => {
        if (X(n)) {
            const i = n.attribs.class || "";
            q0.call([n], e.call(n, a, i))
        }
    });
    if (!e || typeof e != "string") return this;
    const t = e.split(pa),
        r = this.length;
    for (let n = 0; n < r; n++) {
        const a = this[n];
        if (!X(a)) continue;
        const i = us(a, "class", !1);
        if (!i) Yr(a, "class", t.join(" ").trim());
        else {
            let s = ` ${i} `;
            for (let o = 0; o < t.length; o++) {
                const u = `${t[o]} `;
                s.includes(` ${u}`) || (s += u)
            }
            Yr(a, "class", s.trim())
        }
    }
    return this
}

function W0(e) {
    if (typeof e == "function") return de(this, (a, i) => {
        X(a) && W0.call([a], e.call(a, i, a.attribs.class || ""))
    });
    const t = cs(e),
        r = t.length,
        n = arguments.length === 0;
    return de(this, a => {
        if (X(a))
            if (n) a.attribs.class = "";
            else {
                const i = cs(a.attribs.class);
                let s = !1;
                for (let o = 0; o < r; o++) {
                    const u = i.indexOf(t[o]);
                    u >= 0 && (i.splice(u, 1), s = !0, o--)
                }
                s && (a.attribs.class = i.join(" "))
            }
    })
}

function G0(e, t) {
    if (typeof e == "function") return de(this, (s, o) => {
        X(s) && G0.call([s], e.call(s, o, s.attribs.class || "", t), t)
    });
    if (!e || typeof e != "string") return this;
    const r = e.split(pa),
        n = r.length,
        a = typeof t == "boolean" ? t ? 1 : -1 : 0,
        i = this.length;
    for (let s = 0; s < i; s++) {
        const o = this[s];
        if (!X(o)) continue;
        const u = cs(o.attribs.class);
        for (let c = 0; c < n; c++) {
            const l = u.indexOf(r[c]);
            a >= 0 && l < 0 ? u.push(r[c]) : a <= 0 && l >= 0 && u.splice(l, 1)
        }
        o.attribs.class = u.join(" ")
    }
    return this
}
const R7 = Object.freeze(Object.defineProperty({
    __proto__: null,
    addClass: q0,
    attr: E7,
    data: $7,
    hasClass: _7,
    prop: S7,
    removeAttr: O7,
    removeClass: W0,
    toggleClass: G0,
    val: A7
}, Symbol.toStringTag, {
    value: "Module"
}));
var G;
(function (e) {
    e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"
})(G || (G = {}));
var ve;
(function (e) {
    e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"
})(ve || (ve = {}));
const Fp = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
    C7 = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
    I7 = new Map([
        [126, ve.Element],
        [94, ve.Start],
        [36, ve.End],
        [42, ve.Any],
        [33, ve.Not],
        [124, ve.Hyphen]
    ]),
    N7 = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);

function Jn(e) {
    switch (e.type) {
        case G.Adjacent:
        case G.Child:
        case G.Descendant:
        case G.Parent:
        case G.Sibling:
        case G.ColumnCombinator:
            return !0;
        default:
            return !1
    }
}
const T7 = new Set(["contains", "icontains"]);

function x7(e, t, r) {
    const n = parseInt(t, 16) - 65536;
    return n !== n || r ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320)
}

function kn(e) {
    return e.replace(C7, x7)
}

function ku(e) {
    return e === 39 || e === 34
}

function jp(e) {
    return e === 32 || e === 9 || e === 10 || e === 12 || e === 13
}

function vo(e) {
    const t = [],
        r = H0(t, `${e}`, 0);
    if (r < e.length) throw new Error(`Unmatched selector: ${e.slice(r)}`);
    return t
}

function H0(e, t, r) {
    let n = [];

    function a(d) {
        const h = t.slice(r + d).match(Fp);
        if (!h) throw new Error(`Expected name, found ${t.slice(r)}`);
        const [p] = h;
        return r += d + p.length, kn(p)
    }

    function i(d) {
        for (r += d; r < t.length && jp(t.charCodeAt(r));) r++
    }

    function s() {
        r += 1;
        const d = r;
        let h = 1;
        for (; h > 0 && r < t.length; r++) t.charCodeAt(r) === 40 && !o(r) ? h++ : t.charCodeAt(r) === 41 && !o(r) && h--;
        if (h) throw new Error("Parenthesis not matched");
        return kn(t.slice(d, r - 1))
    }

    function o(d) {
        let h = 0;
        for (; t.charCodeAt(--d) === 92;) h++;
        return (h & 1) === 1
    }

    function u() {
        if (n.length > 0 && Jn(n[n.length - 1])) throw new Error("Did not expect successive traversals.")
    }

    function c(d) {
        if (n.length > 0 && n[n.length - 1].type === G.Descendant) {
            n[n.length - 1].type = d;
            return
        }
        u(), n.push({
            type: d
        })
    }

    function l(d, h) {
        n.push({
            type: G.Attribute,
            name: d,
            action: h,
            value: a(1),
            namespace: null,
            ignoreCase: "quirks"
        })
    }

    function f() {
        if (n.length && n[n.length - 1].type === G.Descendant && n.pop(), n.length === 0) throw new Error("Empty sub-selector");
        e.push(n)
    }
    if (i(0), t.length === r) return r;
    e: for (; r < t.length;) {
        const d = t.charCodeAt(r);
        switch (d) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13: {
                (n.length === 0 || n[0].type !== G.Descendant) && (u(), n.push({
                    type: G.Descendant
                })), i(1);
                break
            }
            case 62: {
                c(G.Child), i(1);
                break
            }
            case 60: {
                c(G.Parent), i(1);
                break
            }
            case 126: {
                c(G.Sibling), i(1);
                break
            }
            case 43: {
                c(G.Adjacent), i(1);
                break
            }
            case 46: {
                l("class", ve.Element);
                break
            }
            case 35: {
                l("id", ve.Equals);
                break
            }
            case 91: {
                i(1);
                let h, p = null;
                t.charCodeAt(r) === 124 ? h = a(1) : t.startsWith("*|", r) ? (p = "*", h = a(2)) : (h = a(0), t.charCodeAt(r) === 124 && t.charCodeAt(r + 1) !== 61 && (p = h, h = a(1))), i(0);
                let y = ve.Exists;
                const b = I7.get(t.charCodeAt(r));
                if (b) {
                    if (y = b, t.charCodeAt(r + 1) !== 61) throw new Error("Expected `=`");
                    i(2)
                } else t.charCodeAt(r) === 61 && (y = ve.Equals, i(1));
                let _ = "",
                    g = null;
                if (y !== "exists") {
                    if (ku(t.charCodeAt(r))) {
                        const k = t.charCodeAt(r);
                        let F = r + 1;
                        for (; F < t.length && (t.charCodeAt(F) !== k || o(F));) F += 1;
                        if (t.charCodeAt(F) !== k) throw new Error("Attribute value didn't end");
                        _ = kn(t.slice(r + 1, F)), r = F + 1
                    } else {
                        const k = r;
                        for (; r < t.length && (!jp(t.charCodeAt(r)) && t.charCodeAt(r) !== 93 || o(r));) r += 1;
                        _ = kn(t.slice(k, r))
                    }
                    i(0);
                    const x = t.charCodeAt(r) | 32;
                    x === 115 ? (g = !1, i(1)) : x === 105 && (g = !0, i(1))
                }
                if (t.charCodeAt(r) !== 93) throw new Error("Attribute selector didn't terminate");
                r += 1;
                const R = {
                    type: G.Attribute,
                    name: h,
                    action: y,
                    value: _,
                    namespace: p,
                    ignoreCase: g
                };
                n.push(R);
                break
            }
            case 58: {
                if (t.charCodeAt(r + 1) === 58) {
                    n.push({
                        type: G.PseudoElement,
                        name: a(2).toLowerCase(),
                        data: t.charCodeAt(r) === 40 ? s() : null
                    });
                    continue
                }
                const h = a(1).toLowerCase();
                let p = null;
                if (t.charCodeAt(r) === 40)
                    if (N7.has(h)) {
                        if (ku(t.charCodeAt(r + 1))) throw new Error(`Pseudo-selector ${h} cannot be quoted`);
                        if (p = [], r = H0(p, t, r + 1), t.charCodeAt(r) !== 41) throw new Error(`Missing closing parenthesis in :${h} (${t})`);
                        r += 1
                    } else {
                        if (p = s(), T7.has(h)) {
                            const y = p.charCodeAt(0);
                            y === p.charCodeAt(p.length - 1) && ku(y) && (p = p.slice(1, -1))
                        }
                        p = kn(p)
                    } n.push({
                    type: G.Pseudo,
                    name: h,
                    data: p
                });
                break
            }
            case 44: {
                f(), n = [], i(1);
                break
            }
            default: {
                if (t.startsWith("/*", r)) {
                    const y = t.indexOf("*/", r + 2);
                    if (y < 0) throw new Error("Comment was not terminated");
                    r = y + 2, n.length === 0 && i(0);
                    break
                }
                let h = null,
                    p;
                if (d === 42) r += 1, p = "*";
                else if (d === 124) {
                    if (p = "", t.charCodeAt(r + 1) === 124) {
                        c(G.ColumnCombinator), i(2);
                        break
                    }
                } else if (Fp.test(t.slice(r))) p = a(0);
                else break e;
                t.charCodeAt(r) === 124 && t.charCodeAt(r + 1) !== 124 && (h = p, t.charCodeAt(r + 1) === 42 ? (p = "*", r += 2) : p = a(1)), n.push(p === "*" ? {
                    type: G.Universal,
                    namespace: h
                } : {
                    type: G.Tag,
                    name: p,
                    namespace: h
                })
            }
        }
    }
    return f(), r
}
var ls = {
    trueFunc: function () {
        return !0
    },
    falseFunc: function () {
        return !1
    }
};
const Z = Re(ls),
    K0 = new Map([
        [G.Universal, 50],
        [G.Tag, 30],
        [G.Attribute, 1],
        [G.Pseudo, 0]
    ]);

function $f(e) {
    return !K0.has(e.type)
}
const k7 = new Map([
    [ve.Exists, 10],
    [ve.Equals, 8],
    [ve.Not, 7],
    [ve.Start, 6],
    [ve.End, 6],
    [ve.Any, 5]
]);

function P7(e) {
    const t = e.map(X0);
    for (let r = 1; r < e.length; r++) {
        const n = t[r];
        if (!(n < 0))
            for (let a = r - 1; a >= 0 && n < t[a]; a--) {
                const i = e[a + 1];
                e[a + 1] = e[a], e[a] = i, t[a + 1] = t[a], t[a] = n
            }
    }
}

function X0(e) {
    var t, r;
    let n = (t = K0.get(e.type)) !== null && t !== void 0 ? t : -1;
    return e.type === G.Attribute ? (n = (r = k7.get(e.action)) !== null && r !== void 0 ? r : 4, e.action === ve.Equals && e.name === "id" && (n = 9), e.ignoreCase && (n >>= 1)) : e.type === G.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? n = 0 : Array.isArray(e.data) ? (n = Math.min(...e.data.map(a => Math.min(...a.map(X0)))), n < 0 && (n = 0)) : n = 2 : n = 3), n
}
const L7 = /[-[\]{}()*+?.,\\^$|#\s]/g;

function Up(e) {
    return e.replace(L7, "\\$&")
}
const D7 = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);

function ir(e, t) {
    return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!t.quirksMode : !t.xmlMode && D7.has(e.name)
}
const F7 = {
        equals(e, t, r) {
            const {
                adapter: n
            } = r, {
                name: a
            } = t;
            let {
                value: i
            } = t;
            return ir(t, r) ? (i = i.toLowerCase(), s => {
                const o = n.getAttributeValue(s, a);
                return o != null && o.length === i.length && o.toLowerCase() === i && e(s)
            }) : s => n.getAttributeValue(s, a) === i && e(s)
        },
        hyphen(e, t, r) {
            const {
                adapter: n
            } = r, {
                name: a
            } = t;
            let {
                value: i
            } = t;
            const s = i.length;
            return ir(t, r) ? (i = i.toLowerCase(), function (u) {
                const c = n.getAttributeValue(u, a);
                return c != null && (c.length === s || c.charAt(s) === "-") && c.substr(0, s).toLowerCase() === i && e(u)
            }) : function (u) {
                const c = n.getAttributeValue(u, a);
                return c != null && (c.length === s || c.charAt(s) === "-") && c.substr(0, s) === i && e(u)
            }
        },
        element(e, t, r) {
            const {
                adapter: n
            } = r, {
                name: a,
                value: i
            } = t;
            if (/\s/.test(i)) return Z.falseFunc;
            const s = new RegExp(`(?:^|\\s)${Up(i)}(?:$|\\s)`, ir(t, r) ? "i" : "");
            return function (u) {
                const c = n.getAttributeValue(u, a);
                return c != null && c.length >= i.length && s.test(c) && e(u)
            }
        },
        exists(e, {
            name: t
        }, {
            adapter: r
        }) {
            return n => r.hasAttrib(n, t) && e(n)
        },
        start(e, t, r) {
            const {
                adapter: n
            } = r, {
                name: a
            } = t;
            let {
                value: i
            } = t;
            const s = i.length;
            return s === 0 ? Z.falseFunc : ir(t, r) ? (i = i.toLowerCase(), o => {
                const u = n.getAttributeValue(o, a);
                return u != null && u.length >= s && u.substr(0, s).toLowerCase() === i && e(o)
            }) : o => {
                var u;
                return !!(!((u = n.getAttributeValue(o, a)) === null || u === void 0) && u.startsWith(i)) && e(o)
            }
        },
        end(e, t, r) {
            const {
                adapter: n
            } = r, {
                name: a
            } = t;
            let {
                value: i
            } = t;
            const s = -i.length;
            return s === 0 ? Z.falseFunc : ir(t, r) ? (i = i.toLowerCase(), o => {
                var u;
                return ((u = n.getAttributeValue(o, a)) === null || u === void 0 ? void 0 : u.substr(s).toLowerCase()) === i && e(o)
            }) : o => {
                var u;
                return !!(!((u = n.getAttributeValue(o, a)) === null || u === void 0) && u.endsWith(i)) && e(o)
            }
        },
        any(e, t, r) {
            const {
                adapter: n
            } = r, {
                name: a,
                value: i
            } = t;
            if (i === "") return Z.falseFunc;
            if (ir(t, r)) {
                const s = new RegExp(Up(i), "i");
                return function (u) {
                    const c = n.getAttributeValue(u, a);
                    return c != null && c.length >= i.length && s.test(c) && e(u)
                }
            }
            return s => {
                var o;
                return !!(!((o = n.getAttributeValue(s, a)) === null || o === void 0) && o.includes(i)) && e(s)
            }
        },
        not(e, t, r) {
            const {
                adapter: n
            } = r, {
                name: a
            } = t;
            let {
                value: i
            } = t;
            return i === "" ? s => !!n.getAttributeValue(s, a) && e(s) : ir(t, r) ? (i = i.toLowerCase(), s => {
                const o = n.getAttributeValue(s, a);
                return (o == null || o.length !== i.length || o.toLowerCase() !== i) && e(s)
            }) : s => n.getAttributeValue(s, a) !== i && e(s)
        }
    },
    j7 = new Set([9, 10, 12, 13, 32]),
    Mp = 48,
    U7 = 57;

function M7(e) {
    if (e = e.trim().toLowerCase(), e === "even") return [2, 0];
    if (e === "odd") return [2, 1];
    let t = 0,
        r = 0,
        n = i(),
        a = s();
    if (t < e.length && e.charAt(t) === "n" && (t++, r = n * (a ?? 1), o(), t < e.length ? (n = i(), o(), a = s()) : n = a = 0), a === null || t < e.length) throw new Error(`n-th rule couldn't be parsed ('${e}')`);
    return [r, n * a];

    function i() {
        return e.charAt(t) === "-" ? (t++, -1) : (e.charAt(t) === "+" && t++, 1)
    }

    function s() {
        const u = t;
        let c = 0;
        for (; t < e.length && e.charCodeAt(t) >= Mp && e.charCodeAt(t) <= U7;) c = c * 10 + (e.charCodeAt(t) - Mp), t++;
        return t === u ? null : c
    }

    function o() {
        for (; t < e.length && j7.has(e.charCodeAt(t));) t++
    }
}

function B7(e) {
    const t = e[0],
        r = e[1] - 1;
    if (r < 0 && t <= 0) return Z.falseFunc;
    if (t === -1) return i => i <= r;
    if (t === 0) return i => i === r;
    if (t === 1) return r < 0 ? Z.trueFunc : i => i >= r;
    const n = Math.abs(t),
        a = (r % n + n) % n;
    return t > 1 ? i => i >= r && i % n === a : i => i <= r && i % n === a
}

function fi(e) {
    return B7(M7(e))
}

function di(e, t) {
    return r => {
        const n = t.getParent(r);
        return n != null && t.isTag(n) && e(r)
    }
}
const Wc = {
    contains(e, t, {
        adapter: r
    }) {
        return function (a) {
            return e(a) && r.getText(a).includes(t)
        }
    },
    icontains(e, t, {
        adapter: r
    }) {
        const n = t.toLowerCase();
        return function (i) {
            return e(i) && r.getText(i).toLowerCase().includes(n)
        }
    },
    "nth-child"(e, t, {
        adapter: r,
        equals: n
    }) {
        const a = fi(t);
        return a === Z.falseFunc ? Z.falseFunc : a === Z.trueFunc ? di(e, r) : function (s) {
            const o = r.getSiblings(s);
            let u = 0;
            for (let c = 0; c < o.length && !n(s, o[c]); c++) r.isTag(o[c]) && u++;
            return a(u) && e(s)
        }
    },
    "nth-last-child"(e, t, {
        adapter: r,
        equals: n
    }) {
        const a = fi(t);
        return a === Z.falseFunc ? Z.falseFunc : a === Z.trueFunc ? di(e, r) : function (s) {
            const o = r.getSiblings(s);
            let u = 0;
            for (let c = o.length - 1; c >= 0 && !n(s, o[c]); c--) r.isTag(o[c]) && u++;
            return a(u) && e(s)
        }
    },
    "nth-of-type"(e, t, {
        adapter: r,
        equals: n
    }) {
        const a = fi(t);
        return a === Z.falseFunc ? Z.falseFunc : a === Z.trueFunc ? di(e, r) : function (s) {
            const o = r.getSiblings(s);
            let u = 0;
            for (let c = 0; c < o.length; c++) {
                const l = o[c];
                if (n(s, l)) break;
                r.isTag(l) && r.getName(l) === r.getName(s) && u++
            }
            return a(u) && e(s)
        }
    },
    "nth-last-of-type"(e, t, {
        adapter: r,
        equals: n
    }) {
        const a = fi(t);
        return a === Z.falseFunc ? Z.falseFunc : a === Z.trueFunc ? di(e, r) : function (s) {
            const o = r.getSiblings(s);
            let u = 0;
            for (let c = o.length - 1; c >= 0; c--) {
                const l = o[c];
                if (n(s, l)) break;
                r.isTag(l) && r.getName(l) === r.getName(s) && u++
            }
            return a(u) && e(s)
        }
    },
    root(e, t, {
        adapter: r
    }) {
        return n => {
            const a = r.getParent(n);
            return (a == null || !r.isTag(a)) && e(n)
        }
    },
    scope(e, t, r, n) {
        const {
            equals: a
        } = r;
        return !n || n.length === 0 ? Wc.root(e, t, r) : n.length === 1 ? i => a(n[0], i) && e(i) : i => n.includes(i) && e(i)
    },
    hover: Pu("isHovered"),
    visited: Pu("isVisited"),
    active: Pu("isActive")
};

function Pu(e) {
    return function (r, n, {
        adapter: a
    }) {
        const i = a[e];
        return typeof i != "function" ? Z.falseFunc : function (o) {
            return i(o) && r(o)
        }
    }
}
const Bp = {
    empty(e, {
        adapter: t
    }) {
        return !t.getChildren(e).some(r => t.isTag(r) || t.getText(r) !== "")
    },
    "first-child"(e, {
        adapter: t,
        equals: r
    }) {
        if (t.prevElementSibling) return t.prevElementSibling(e) == null;
        const n = t.getSiblings(e).find(a => t.isTag(a));
        return n != null && r(e, n)
    },
    "last-child"(e, {
        adapter: t,
        equals: r
    }) {
        const n = t.getSiblings(e);
        for (let a = n.length - 1; a >= 0; a--) {
            if (r(e, n[a])) return !0;
            if (t.isTag(n[a])) break
        }
        return !1
    },
    "first-of-type"(e, {
        adapter: t,
        equals: r
    }) {
        const n = t.getSiblings(e),
            a = t.getName(e);
        for (let i = 0; i < n.length; i++) {
            const s = n[i];
            if (r(e, s)) return !0;
            if (t.isTag(s) && t.getName(s) === a) break
        }
        return !1
    },
    "last-of-type"(e, {
        adapter: t,
        equals: r
    }) {
        const n = t.getSiblings(e),
            a = t.getName(e);
        for (let i = n.length - 1; i >= 0; i--) {
            const s = n[i];
            if (r(e, s)) return !0;
            if (t.isTag(s) && t.getName(s) === a) break
        }
        return !1
    },
    "only-of-type"(e, {
        adapter: t,
        equals: r
    }) {
        const n = t.getName(e);
        return t.getSiblings(e).every(a => r(e, a) || !t.isTag(a) || t.getName(a) !== n)
    },
    "only-child"(e, {
        adapter: t,
        equals: r
    }) {
        return t.getSiblings(e).every(n => r(e, n) || !t.isTag(n))
    }
};

function zp(e, t, r, n) {
    if (r === null) {
        if (e.length > n) throw new Error(`Pseudo-class :${t} requires an argument`)
    } else if (e.length === n) throw new Error(`Pseudo-class :${t} doesn't have any arguments`)
}
const z7 = {
        "any-link": ":is(a, area, link)[href]",
        link: ":any-link:not(:visited)",
        disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
        enabled: ":not(:disabled)",
        checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
        required: ":is(input, select, textarea)[required]",
        optional: ":is(input, select, textarea):not([required])",
        selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
        checkbox: "[type=checkbox]",
        file: "[type=file]",
        password: "[type=password]",
        radio: "[type=radio]",
        reset: "[type=reset]",
        image: "[type=image]",
        submit: "[type=submit]",
        parent: ":not(:empty)",
        header: ":is(h1, h2, h3, h4, h5, h6)",
        button: ":is(button, input[type=button])",
        input: ":is(input, textarea, select, button)",
        text: "input:is(:not([type!='']), [type=text])"
    },
    Y0 = {};

function V7(e, t) {
    return e === Z.falseFunc ? Z.falseFunc : r => t.isTag(r) && e(r)
}

function J0(e, t) {
    const r = t.getSiblings(e);
    if (r.length <= 1) return [];
    const n = r.indexOf(e);
    return n < 0 || n === r.length - 1 ? [] : r.slice(n + 1).filter(t.isTag)
}

function Gc(e) {
    return {
        xmlMode: !!e.xmlMode,
        lowerCaseAttributeNames: !!e.lowerCaseAttributeNames,
        lowerCaseTags: !!e.lowerCaseTags,
        quirksMode: !!e.quirksMode,
        cacheResults: !!e.cacheResults,
        pseudos: e.pseudos,
        adapter: e.adapter,
        equals: e.equals
    }
}
const Lu = (e, t, r, n, a) => {
        const i = a(t, Gc(r), n);
        return i === Z.trueFunc ? e : i === Z.falseFunc ? Z.falseFunc : s => i(s) && e(s)
    },
    Du = {
        is: Lu,
        matches: Lu,
        where: Lu,
        not(e, t, r, n, a) {
            const i = a(t, Gc(r), n);
            return i === Z.falseFunc ? e : i === Z.trueFunc ? Z.falseFunc : s => !i(s) && e(s)
        },
        has(e, t, r, n, a) {
            const {
                adapter: i
            } = r, s = Gc(r);
            s.relativeSelector = !0;
            const o = t.some(l => l.some($f)) ? [Y0] : void 0,
                u = a(t, s, o);
            if (u === Z.falseFunc) return Z.falseFunc;
            const c = V7(u, i);
            if (o && u !== Z.trueFunc) {
                const {
                    shouldTestNextSiblings: l = !1
                } = u;
                return f => {
                    if (!e(f)) return !1;
                    o[0] = f;
                    const d = i.getChildren(f),
                        h = l ? [...d, ...J0(f, i)] : d;
                    return i.existsOne(c, h)
                }
            }
            return l => e(l) && i.existsOne(c, i.getChildren(l))
        }
    };

function q7(e, t, r, n, a) {
    var i;
    const {
        name: s,
        data: o
    } = t;
    if (Array.isArray(o)) {
        if (!(s in Du)) throw new Error(`Unknown pseudo-class :${s}(${o})`);
        return Du[s](e, o, r, n, a)
    }
    const u = (i = r.pseudos) === null || i === void 0 ? void 0 : i[s],
        c = typeof u == "string" ? u : z7[s];
    if (typeof c == "string") {
        if (o != null) throw new Error(`Pseudo ${s} doesn't have any arguments`);
        const l = vo(c);
        return Du.is(e, l, r, n, a)
    }
    if (typeof u == "function") return zp(u, s, o, 1), l => u(l, o) && e(l);
    if (s in Wc) return Wc[s](e, o, r, n);
    if (s in Bp) {
        const l = Bp[s];
        return zp(l, s, o, 2), f => l(f, r, o) && e(f)
    }
    throw new Error(`Unknown pseudo-class :${s}`)
}

function Fu(e, t) {
    const r = t.getParent(e);
    return r && t.isTag(r) ? r : null
}

function W7(e, t, r, n, a) {
    const {
        adapter: i,
        equals: s
    } = r;
    switch (t.type) {
        case G.PseudoElement:
            throw new Error("Pseudo-elements are not supported by css-select");
        case G.ColumnCombinator:
            throw new Error("Column combinators are not yet supported by css-select");
        case G.Attribute: {
            if (t.namespace != null) throw new Error("Namespaced attributes are not yet supported by css-select");
            return (!r.xmlMode || r.lowerCaseAttributeNames) && (t.name = t.name.toLowerCase()), F7[t.action](e, t, r)
        }
        case G.Pseudo:
            return q7(e, t, r, n, a);
        case G.Tag: {
            if (t.namespace != null) throw new Error("Namespaced tag names are not yet supported by css-select");
            let {
                name: o
            } = t;
            return (!r.xmlMode || r.lowerCaseTags) && (o = o.toLowerCase()),
                function (c) {
                    return i.getName(c) === o && e(c)
                }
        }
        case G.Descendant: {
            if (r.cacheResults === !1 || typeof WeakSet > "u") return function (c) {
                let l = c;
                for (; l = Fu(l, i);)
                    if (e(l)) return !0;
                return !1
            };
            const o = new WeakSet;
            return function (c) {
                let l = c;
                for (; l = Fu(l, i);)
                    if (!o.has(l)) {
                        if (i.isTag(l) && e(l)) return !0;
                        o.add(l)
                    } return !1
            }
        }
        case "_flexibleDescendant":
            return function (u) {
                let c = u;
                do
                    if (e(c)) return !0; while (c = Fu(c, i));
                return !1
            };
        case G.Parent:
            return function (u) {
                return i.getChildren(u).some(c => i.isTag(c) && e(c))
            };
        case G.Child:
            return function (u) {
                const c = i.getParent(u);
                return c != null && i.isTag(c) && e(c)
            };
        case G.Sibling:
            return function (u) {
                const c = i.getSiblings(u);
                for (let l = 0; l < c.length; l++) {
                    const f = c[l];
                    if (s(u, f)) break;
                    if (i.isTag(f) && e(f)) return !0
                }
                return !1
            };
        case G.Adjacent:
            return i.prevElementSibling ? function (u) {
                const c = i.prevElementSibling(u);
                return c != null && e(c)
            } : function (u) {
                const c = i.getSiblings(u);
                let l;
                for (let f = 0; f < c.length; f++) {
                    const d = c[f];
                    if (s(u, d)) break;
                    i.isTag(d) && (l = d)
                }
                return !!l && e(l)
            };
        case G.Universal: {
            if (t.namespace != null && t.namespace !== "*") throw new Error("Namespaced universal selectors are not yet supported by css-select");
            return e
        }
    }
}

function Q0(e) {
    return e.type === G.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(t => t.some(Q0)))
}
const G7 = {
        type: G.Descendant
    },
    H7 = {
        type: "_flexibleDescendant"
    },
    K7 = {
        type: G.Pseudo,
        name: "scope",
        data: null
    };

function X7(e, {
    adapter: t
}, r) {
    const n = !!(r != null && r.every(a => {
        const i = t.isTag(a) && t.getParent(a);
        return a === Y0 || i && t.isTag(i)
    }));
    for (const a of e) {
        if (!(a.length > 0 && $f(a[0]) && a[0].type !== G.Descendant))
            if (n && !a.some(Q0)) a.unshift(G7);
            else continue;
        a.unshift(K7)
    }
}

function Z0(e, t, r) {
    var n;
    e.forEach(P7), r = (n = t.context) !== null && n !== void 0 ? n : r;
    const a = Array.isArray(r),
        i = r && (Array.isArray(r) ? r : [r]);
    if (t.relativeSelector !== !1) X7(e, t, i);
    else if (e.some(u => u.length > 0 && $f(u[0]))) throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
    let s = !1;
    const o = e.map(u => {
        if (u.length >= 2) {
            const [c, l] = u;
            c.type !== G.Pseudo || c.name !== "scope" || (a && l.type === G.Descendant ? u[1] = H7 : (l.type === G.Adjacent || l.type === G.Sibling) && (s = !0))
        }
        return Y7(u, t, i)
    }).reduce(J7, Z.falseFunc);
    return o.shouldTestNextSiblings = s, o
}

function Y7(e, t, r) {
    var n;
    return e.reduce((a, i) => a === Z.falseFunc ? Z.falseFunc : W7(a, i, t, r, Z0), (n = t.rootFunc) !== null && n !== void 0 ? n : Z.trueFunc)
}

function J7(e, t) {
    return t === Z.falseFunc || e === Z.trueFunc ? e : e === Z.falseFunc || t === Z.trueFunc ? t : function (n) {
        return e(n) || t(n)
    }
}
const e1 = (e, t) => e === t,
    Q7 = {
        adapter: go,
        equals: e1
    };

function Z7(e) {
    var t, r, n, a;
    const i = e ?? Q7;
    return (t = i.adapter) !== null && t !== void 0 || (i.adapter = go), (r = i.equals) !== null && r !== void 0 || (i.equals = (a = (n = i.adapter) === null || n === void 0 ? void 0 : n.equals) !== null && a !== void 0 ? a : e1), i
}

function eI(e) {
    return function (r, n, a) {
        const i = Z7(n);
        return e(r, i, a)
    }
}
const Af = eI(Z0);

function t1(e, t, r = !1) {
    return r && (e = tI(e, t)), Array.isArray(e) ? t.removeSubsets(e) : t.getChildren(e)
}

function tI(e, t) {
    const r = Array.isArray(e) ? e.slice(0) : [e],
        n = r.length;
    for (let a = 0; a < n; a++) {
        const i = J0(r[a], t);
        r.push(...i)
    }
    return r
}
const rI = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);

function fs(e) {
    return e.type !== "pseudo" ? !1 : rI.has(e.name) ? !0 : e.name === "not" && Array.isArray(e.data) ? e.data.some(t => t.some(fs)) : !1
}

function nI(e, t, r) {
    const n = t != null ? parseInt(t, 10) : NaN;
    switch (e) {
        case "first":
            return 1;
        case "nth":
        case "eq":
            return isFinite(n) ? n >= 0 ? n + 1 : 1 / 0 : 0;
        case "lt":
            return isFinite(n) ? n >= 0 ? Math.min(n, r) : 1 / 0 : 0;
        case "gt":
            return isFinite(n) ? 1 / 0 : 0;
        case "odd":
            return 2 * r;
        case "even":
            return 2 * r - 1;
        case "last":
        case "not":
            return 1 / 0
    }
}

function aI(e) {
    for (; e.parent;) e = e.parent;
    return e
}

function Of(e) {
    const t = [],
        r = [];
    for (const n of e) n.some(fs) ? t.push(n) : r.push(n);
    return [r, t]
}
const iI = {
        type: G.Universal,
        namespace: null
    },
    sI = {
        type: G.Pseudo,
        name: "scope",
        data: null
    };

function r1(e, t, r = {}) {
    return n1([e], t, r)
}

function n1(e, t, r = {}) {
    if (typeof t == "function") return e.some(t);
    const [n, a] = Of(vo(t));
    return n.length > 0 && e.some(Af(n, r)) || a.some(i => s1(i, e, r).length > 0)
}

function oI(e, t, r, n) {
    const a = typeof r == "string" ? parseInt(r, 10) : NaN;
    switch (e) {
        case "first":
        case "lt":
            return t;
        case "last":
            return t.length > 0 ? [t[t.length - 1]] : t;
        case "nth":
        case "eq":
            return isFinite(a) && Math.abs(a) < t.length ? [a < 0 ? t[t.length + a] : t[a]] : [];
        case "gt":
            return isFinite(a) ? t.slice(a + 1) : [];
        case "even":
            return t.filter((i, s) => s % 2 === 0);
        case "odd":
            return t.filter((i, s) => s % 2 === 1);
        case "not": {
            const i = new Set(i1(r, t, n));
            return t.filter(s => !i.has(s))
        }
    }
}

function a1(e, t, r = {}) {
    return i1(vo(e), t, r)
}

function i1(e, t, r) {
    if (t.length === 0) return [];
    const [n, a] = Of(e);
    let i;
    if (n.length) {
        const s = Kc(t, n, r);
        if (a.length === 0) return s;
        s.length && (i = new Set(s))
    }
    for (let s = 0; s < a.length && (i == null ? void 0 : i.size) !== t.length; s++) {
        const o = a[s];
        if ((i ? t.filter(l => X(l) && !i.has(l)) : t).length === 0) break;
        const c = s1(o, t, r);
        if (c.length)
            if (i) c.forEach(l => i.add(l));
            else {
                if (s === a.length - 1) return c;
                i = new Set(c)
            }
    }
    return typeof i < "u" ? i.size === t.length ? t : t.filter(s => i.has(s)) : []
}

function s1(e, t, r) {
    var n;
    if (e.some(Jn)) {
        const a = (n = r.root) !== null && n !== void 0 ? n : aI(t[0]),
            i = {
                ...r,
                context: t,
                relativeSelector: !1
            };
        return e.push(sI), ds(a, e, i, !0, t.length)
    }
    return ds(t, e, r, !1, t.length)
}

function uI(e, t, r = {}, n = 1 / 0) {
    if (typeof e == "function") return o1(t, e);
    const [a, i] = Of(vo(e)), s = i.map(o => ds(t, o, r, !0, n));
    return a.length && s.push(Hc(t, a, r, n)), s.length === 0 ? [] : s.length === 1 ? s[0] : Sn(s.reduce((o, u) => [...o, ...u]))
}

function ds(e, t, r, n, a) {
    const i = t.findIndex(fs),
        s = t.slice(0, i),
        o = t[i],
        u = t.length - 1 === i ? a : 1 / 0,
        c = nI(o.name, o.data, u);
    if (c === 0) return [];
    const f = (s.length === 0 && !Array.isArray(e) ? po(e).filter(X) : s.length === 0 ? (Array.isArray(e) ? e : [e]).filter(X) : n || s.some(Jn) ? Hc(e, [s], r, c) : Kc(e, [s], r)).slice(0, c);
    let d = oI(o.name, f, o.data, r);
    if (d.length === 0 || t.length === i + 1) return d;
    const h = t.slice(i + 1),
        p = h.some(Jn);
    if (p) {
        if (Jn(h[0])) {
            const {
                type: y
            } = h[0];
            (y === G.Sibling || y === G.Adjacent) && (d = t1(d, go, !0)), h.unshift(iI)
        }
        r = {
            ...r,
            relativeSelector: !1,
            rootFunc: y => d.includes(y)
        }
    } else r.rootFunc && r.rootFunc !== ls.trueFunc && (r = {
        ...r,
        rootFunc: ls.trueFunc
    });
    return h.some(fs) ? ds(d, h, r, !1, a) : p ? Hc(d, [h], r, a) : Kc(d, [h], r)
}

function Hc(e, t, r, n) {
    const a = Af(t, r, e);
    return o1(e, a, n)
}

function o1(e, t, r = 1 / 0) {
    const n = t1(e, go, t.shouldTestNextSiblings);
    return wf(a => X(a) && t(a), n, !0, r)
}

function Kc(e, t, r) {
    const n = (Array.isArray(e) ? e : [e]).filter(X);
    if (n.length === 0) return n;
    const a = Af(t, r);
    return a === ls.trueFunc ? n : n.filter(a)
}
const cI = /^\s*[~+]/;

function lI(e) {
    var t;
    if (!e) return this._make([]);
    const r = this.toArray();
    if (typeof e != "string") {
        const i = ht(e) ? e.toArray() : [e];
        return this._make(i.filter(s => r.some(o => z0(o, s))))
    }
    const n = cI.test(e) ? r : this.children().toArray(),
        a = {
            context: r,
            root: (t = this._root) === null || t === void 0 ? void 0 : t[0],
            xmlMode: this.options.xmlMode,
            lowerCaseTags: this.options.lowerCaseTags,
            lowerCaseAttributeNames: this.options.lowerCaseAttributeNames,
            pseudos: this.options.pseudos,
            quirksMode: this.options.quirksMode
        };
    return this._make(uI(e, n, a))
}

function _f(e) {
    return function (t, ...r) {
        return function (n) {
            var a;
            let i = e(t, this);
            return n && (i = If(i, n, this.options.xmlMode, (a = this._root) === null || a === void 0 ? void 0 : a[0])), this._make(this.length > 1 && i.length > 1 ? r.reduce((s, o) => o(s), i) : i)
        }
    }
}
const ja = _f((e, t) => {
        const r = [];
        for (let n = 0; n < t.length; n++) {
            const a = e(t[n]);
            r.push(a)
        }
        return new Array().concat(...r)
    }),
    Rf = _f((e, t) => {
        const r = [];
        for (let n = 0; n < t.length; n++) {
            const a = e(t[n]);
            a !== null && r.push(a)
        }
        return r
    });

function Cf(e, ...t) {
    let r = null;
    const n = _f((a, i) => {
        const s = [];
        return de(i, o => {
            for (let u;
                (u = a(o)) && !(r != null && r(u, s.length)); o = u) s.push(u)
        }), s
    })(e, ...t);
    return function (a, i) {
        r = typeof a == "string" ? o => r1(o, a, this.options) : a ? Ua(a) : null;
        const s = n.call(this, i);
        return r = null, s
    }
}

function $n(e) {
    return Array.from(new Set(e))
}
const fI = Rf(({
        parent: e
    }) => e && !wn(e) ? e : null, $n),
    dI = ja(e => {
        const t = [];
        for (; e.parent && !wn(e.parent);) t.push(e.parent), e = e.parent;
        return t
    }, Sn, e => e.reverse()),
    hI = Cf(({
        parent: e
    }) => e && !wn(e) ? e : null, Sn, e => e.reverse());

function pI(e) {
    var t;
    const r = [];
    if (!e) return this._make(r);
    const n = {
            xmlMode: this.options.xmlMode,
            root: (t = this._root) === null || t === void 0 ? void 0 : t[0]
        },
        a = typeof e == "string" ? i => r1(i, e, n) : Ua(e);
    return de(this, i => {
        for (; i && X(i);) {
            if (a(i, 0)) {
                r.includes(i) || r.push(i);
                break
            }
            i = i.parent
        }
    }), this._make(r)
}
const mI = Rf(e => yf(e)),
    gI = ja(e => {
        const t = [];
        for (; e.next;) e = e.next, X(e) && t.push(e);
        return t
    }, $n),
    vI = Cf(e => yf(e), $n),
    yI = Rf(e => bf(e)),
    bI = ja(e => {
        const t = [];
        for (; e.prev;) e = e.prev, X(e) && t.push(e);
        return t
    }, $n),
    wI = Cf(e => bf(e), $n),
    EI = ja(e => L0(e).filter(t => X(t) && t !== e), Sn),
    SI = ja(e => po(e).filter(X), $n);

function $I() {
    const e = this.toArray().reduce((t, r) => we(r) ? t.concat(r.children) : t, []);
    return this._make(e)
}

function AI(e) {
    let t = 0;
    const r = this.length;
    for (; t < r && e.call(this[t], t, this[t]) !== !1;) ++t;
    return this
}

function OI(e) {
    let t = [];
    for (let r = 0; r < this.length; r++) {
        const n = this[r],
            a = e.call(n, r, n);
        a != null && (t = t.concat(a))
    }
    return this._make(t)
}

function Ua(e) {
    return typeof e == "function" ? (t, r) => e.call(t, r, t) : ht(e) ? t => Array.prototype.includes.call(e, t) : function (t) {
        return e === t
    }
}

function _I(e) {
    var t;
    return this._make(If(this.toArray(), e, this.options.xmlMode, (t = this._root) === null || t === void 0 ? void 0 : t[0]))
}

function If(e, t, r, n) {
    return typeof t == "string" ? a1(t, e, {
        xmlMode: r,
        root: n
    }) : e.filter(Ua(t))
}

function RI(e) {
    const t = this.toArray();
    return typeof e == "string" ? n1(t.filter(X), e, this.options) : e ? t.some(Ua(e)) : !1
}

function CI(e) {
    let t = this.toArray();
    if (typeof e == "string") {
        const r = new Set(a1(e, t, this.options));
        t = t.filter(n => !r.has(n))
    } else {
        const r = Ua(e);
        t = t.filter((n, a) => !r(n, a))
    }
    return this._make(t)
}

function II(e) {
    return this.filter(typeof e == "string" ? `:has(${e})` : (t, r) => this._make(r).find(e).length > 0)
}

function NI() {
    return this.length > 1 ? this._make(this[0]) : this
}

function TI() {
    return this.length > 0 ? this._make(this[this.length - 1]) : this
}

function xI(e) {
    var t;
    return e = +e, e === 0 && this.length <= 1 ? this : (e < 0 && (e = this.length + e), this._make((t = this[e]) !== null && t !== void 0 ? t : []))
}

function kI(e) {
    return e == null ? this.toArray() : this[e < 0 ? this.length + e : e]
}

function PI() {
    return Array.prototype.slice.call(this)
}

function LI(e) {
    let t, r;
    return e == null ? (t = this.parent().children(), r = this[0]) : typeof e == "string" ? (t = this._make(e), r = this[0]) : (t = this, r = ht(e) ? e[0] : e), Array.prototype.indexOf.call(t, r)
}

function DI(e, t) {
    return this._make(Array.prototype.slice.call(this, e, t))
}

function FI() {
    var e;
    return (e = this.prevObject) !== null && e !== void 0 ? e : this._make([])
}

function jI(e, t) {
    const r = this._make(e, t),
        n = Sn([...this.get(), ...r.get()]);
    return this._make(n)
}

function UI(e) {
    return this.prevObject ? this.add(e ? this.prevObject.filter(e) : this.prevObject) : this
}
const MI = Object.freeze(Object.defineProperty({
    __proto__: null,
    add: jI,
    addBack: UI,
    children: SI,
    closest: pI,
    contents: $I,
    each: AI,
    end: FI,
    eq: xI,
    filter: _I,
    filterArray: If,
    find: lI,
    first: NI,
    get: kI,
    has: II,
    index: LI,
    is: RI,
    last: TI,
    map: OI,
    next: mI,
    nextAll: gI,
    nextUntil: vI,
    not: CI,
    parent: fI,
    parents: dI,
    parentsUntil: hI,
    prev: yI,
    prevAll: bI,
    prevUntil: wI,
    siblings: EI,
    slice: DI,
    toArray: PI
}, Symbol.toStringTag, {
    value: "Module"
}));

function BI(e) {
    return function (r, n, a, i) {
        if (typeof Buffer < "u" && Buffer.isBuffer(r) && (r = r.toString()), typeof r == "string") return e(r, n, a, i);
        const s = r;
        if (!Array.isArray(s) && wn(s)) return s;
        const o = new da([]);
        return yr(s, o), o
    }
}

function yr(e, t) {
    const r = Array.isArray(e) ? e : [e];
    t ? t.children = r : t = null;
    for (let n = 0; n < r.length; n++) {
        const a = r[n];
        a.parent && a.parent.children !== r && Nr(a), t ? (a.prev = r[n - 1] || null, a.next = r[n + 1] || null) : a.prev = a.next = null, a.parent = t
    }
    return t
}

function zI(e, t) {
    return e == null ? [] : ht(e) ? t ? Vc(e.get()) : e.get() : Array.isArray(e) ? e.reduce((r, n) => r.concat(this._makeDomArray(n, t)), []) : typeof e == "string" ? this._parse(e, this.options, !1, null).children : t ? Vc([e]) : [e]
}

function u1(e) {
    return function (...t) {
        const r = this.length - 1;
        return de(this, (n, a) => {
            if (!we(n)) return;
            const i = typeof t[0] == "function" ? t[0].call(n, a, this._render(n.children)) : t,
                s = this._makeDomArray(i, a < r);
            e(s, n.children, n)
        })
    }
}

function Zt(e, t, r, n, a) {
    var i, s;
    const o = [t, r, ...n],
        u = t === 0 ? null : e[t - 1],
        c = t + r >= e.length ? null : e[t + r];
    for (let l = 0; l < n.length; ++l) {
        const f = n[l],
            d = f.parent;
        if (d) {
            const p = d.children.indexOf(f);
            p > -1 && (d.children.splice(p, 1), a === d && t > p && o[0]--)
        }
        f.parent = a, f.prev && (f.prev.next = (i = f.next) !== null && i !== void 0 ? i : null), f.next && (f.next.prev = (s = f.prev) !== null && s !== void 0 ? s : null), f.prev = l === 0 ? u : n[l - 1], f.next = l === n.length - 1 ? c : n[l + 1]
    }
    return u && (u.next = n[0]), c && (c.prev = n[n.length - 1]), e.splice(...o)
}

function VI(e) {
    return (ht(e) ? e : this._make(e)).append(this), this
}

function qI(e) {
    return (ht(e) ? e : this._make(e)).prepend(this), this
}
const WI = u1((e, t, r) => {
        Zt(t, t.length, 0, e, r)
    }),
    GI = u1((e, t, r) => {
        Zt(t, 0, 0, e, r)
    });

function c1(e) {
    return function (t) {
        const r = this.length - 1,
            n = this.parents().last();
        for (let a = 0; a < this.length; a++) {
            const i = this[a],
                s = typeof t == "function" ? t.call(i, a, i) : typeof t == "string" && !qc(t) ? n.find(t).clone() : t,
                [o] = this._makeDomArray(s, a < r);
            if (!o || !we(o)) continue;
            let u = o,
                c = 0;
            for (; c < u.children.length;) {
                const l = u.children[c];
                X(l) ? (u = l, c = 0) : c++
            }
            e(i, u, [o])
        }
        return this
    }
}
const HI = c1((e, t, r) => {
        const {
            parent: n
        } = e;
        if (!n) return;
        const a = n.children,
            i = a.indexOf(e);
        yr([e], t), Zt(a, i, 0, r, n)
    }),
    KI = c1((e, t, r) => {
        we(e) && (yr(e.children, t), yr(r, e))
    });

function XI(e) {
    return this.parent(e).not("body").each((t, r) => {
        this._make(r).replaceWith(r.children)
    }), this
}

function YI(e) {
    const t = this[0];
    if (t) {
        const r = this._make(typeof e == "function" ? e.call(t, 0, t) : e).insertBefore(t);
        let n;
        for (let i = 0; i < r.length; i++) r[i].type === "tag" && (n = r[i]);
        let a = 0;
        for (; n && a < n.children.length;) {
            const i = n.children[a];
            i.type === "tag" ? (n = i, a = 0) : a++
        }
        n && this._make(n).append(this)
    }
    return this
}

function JI(...e) {
    const t = this.length - 1;
    return de(this, (r, n) => {
        const {
            parent: a
        } = r;
        if (!we(r) || !a) return;
        const i = a.children,
            s = i.indexOf(r);
        if (s < 0) return;
        const o = typeof e[0] == "function" ? e[0].call(r, n, this._render(r.children)) : e,
            u = this._makeDomArray(o, n < t);
        Zt(i, s + 1, 0, u, a)
    })
}

function QI(e) {
    typeof e == "string" && (e = this._make(e)), this.remove();
    const t = [];
    return this._makeDomArray(e).forEach(r => {
        const n = this.clone().toArray(),
            {
                parent: a
            } = r;
        if (!a) return;
        const i = a.children,
            s = i.indexOf(r);
        s < 0 || (Zt(i, s + 1, 0, n, a), t.push(...n))
    }), this._make(t)
}

function ZI(...e) {
    const t = this.length - 1;
    return de(this, (r, n) => {
        const {
            parent: a
        } = r;
        if (!we(r) || !a) return;
        const i = a.children,
            s = i.indexOf(r);
        if (s < 0) return;
        const o = typeof e[0] == "function" ? e[0].call(r, n, this._render(r.children)) : e,
            u = this._makeDomArray(o, n < t);
        Zt(i, s, 0, u, a)
    })
}

function eN(e) {
    const t = this._make(e);
    this.remove();
    const r = [];
    return de(t, n => {
        const a = this.clone().toArray(),
            {
                parent: i
            } = n;
        if (!i) return;
        const s = i.children,
            o = s.indexOf(n);
        o < 0 || (Zt(s, o, 0, a, i), r.push(...a))
    }), this._make(r)
}

function tN(e) {
    const t = e ? this.filter(e) : this;
    return de(t, r => {
        Nr(r), r.prev = r.next = r.parent = null
    }), this
}

function rN(e) {
    return de(this, (t, r) => {
        const {
            parent: n
        } = t;
        if (!n) return;
        const a = n.children,
            i = typeof e == "function" ? e.call(t, r, t) : e,
            s = this._makeDomArray(i);
        yr(s, null);
        const o = a.indexOf(t);
        Zt(a, o, 1, s, n), s.includes(t) || (t.parent = t.prev = t.next = null)
    })
}

function nN() {
    return de(this, e => {
        we(e) && (e.children.forEach(t => {
            t.next = t.prev = t.parent = null
        }), e.children.length = 0)
    })
}

function aN(e) {
    if (e === void 0) {
        const t = this[0];
        return !t || !we(t) ? null : this._render(t.children)
    }
    return de(this, t => {
        if (!we(t)) return;
        t.children.forEach(n => {
            n.next = n.prev = n.parent = null
        });
        const r = ht(e) ? e.toArray() : this._parse(`${e}`, this.options, !1, t).children;
        yr(r, t)
    })
}

function iN() {
    return this._render(this)
}

function sN(e) {
    return e === void 0 ? ha(this) : typeof e == "function" ? de(this, (t, r) => this._make(t).text(e.call(t, r, ha([t])))) : de(this, t => {
        if (!we(t)) return;
        t.children.forEach(n => {
            n.next = n.prev = n.parent = null
        });
        const r = new ns(`${e}`);
        yr(r, t)
    })
}

function oN() {
    return this._make(Vc(this.get()))
}
const uN = Object.freeze(Object.defineProperty({
    __proto__: null,
    _makeDomArray: zI,
    after: JI,
    append: WI,
    appendTo: VI,
    before: ZI,
    clone: oN,
    empty: nN,
    html: aN,
    insertAfter: QI,
    insertBefore: eN,
    prepend: GI,
    prependTo: qI,
    remove: tN,
    replaceWith: rN,
    text: sN,
    toString: iN,
    unwrap: XI,
    wrap: HI,
    wrapAll: YI,
    wrapInner: KI
}, Symbol.toStringTag, {
    value: "Module"
}));

function cN(e, t) {
    if (e != null && t != null || typeof e == "object" && !Array.isArray(e)) return de(this, (r, n) => {
        X(r) && l1(r, e, t, n)
    });
    if (this.length !== 0) return f1(this[0], e)
}

function l1(e, t, r, n) {
    if (typeof t == "string") {
        const a = f1(e),
            i = typeof r == "function" ? r.call(e, n, a[t]) : r;
        i === "" ? delete a[t] : i != null && (a[t] = i), e.attribs.style = lN(a)
    } else typeof t == "object" && Object.keys(t).forEach((a, i) => {
        l1(e, a, t[a], i)
    })
}

function f1(e, t) {
    if (!e || !X(e)) return;
    const r = fN(e.attribs.style);
    if (typeof t == "string") return r[t];
    if (Array.isArray(t)) {
        const n = {};
        return t.forEach(a => {
            r[a] != null && (n[a] = r[a])
        }), n
    }
    return r
}

function lN(e) {
    return Object.keys(e).reduce((t, r) => `${t}${t?" ":""}${r}: ${e[r]};`, "")
}

function fN(e) {
    if (e = (e || "").trim(), !e) return {};
    const t = {};
    let r;
    for (const n of e.split(";")) {
        const a = n.indexOf(":");
        if (a < 1 || a === n.length - 1) {
            const i = n.trimEnd();
            i.length > 0 && r !== void 0 && (t[r] += `;${i}`)
        } else r = n.slice(0, a).trim(), t[r] = n.slice(a + 1).trim()
    }
    return t
}
const dN = Object.freeze(Object.defineProperty({
        __proto__: null,
        css: cN
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Vp = "input,select,textarea,keygen",
    hN = /%20/g,
    qp = /\r?\n/g;

function pN() {
    return this.serializeArray().map(r => `${encodeURIComponent(r.name)}=${encodeURIComponent(r.value)}`).join("&").replace(hN, "+")
}

function mN() {
    return this.map((e, t) => {
        const r = this._make(t);
        return X(t) && t.name === "form" ? r.find(Vp).toArray() : r.filter(Vp).toArray()
    }).filter('[name!=""]:enabled:not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))').map((e, t) => {
        var r;
        const n = this._make(t),
            a = n.attr("name"),
            i = (r = n.val()) !== null && r !== void 0 ? r : "";
        return Array.isArray(i) ? i.map(s => ({
            name: a,
            value: s.replace(qp, `\r
`)
        })) : {
            name: a,
            value: i.replace(qp, `\r
`)
        }
    }).toArray()
}
const gN = Object.freeze(Object.defineProperty({
    __proto__: null,
    serialize: pN,
    serializeArray: mN
}, Symbol.toStringTag, {
    value: "Module"
}));
class Ma {
    constructor(t, r, n) {
        if (this.length = 0, this.options = n, this._root = r, t) {
            for (let a = 0; a < t.length; a++) this[a] = t[a];
            this.length = t.length
        }
    }
}
Ma.prototype.cheerio = "[cheerio object]";
Ma.prototype.splice = Array.prototype.splice;
Ma.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
Object.assign(Ma.prototype, R7, MI, uN, dN, gN);

function vN(e, t) {
    return function r(n, a, i = !0) {
        if (n == null) throw new Error("cheerio.load() expects a string");
        const s = {
                ...pf,
                ...zc(a)
            },
            o = e(n, s, i, null);
        class u extends Ma {
            _make(f, d) {
                const h = c(f, d);
                return h.prevObject = this, h
            }
            _parse(f, d, h, p) {
                return e(f, d, h, p)
            }
            _render(f) {
                return t(f, this.options)
            }
        }

        function c(l, f, d = o, h) {
            if (l && ht(l)) return l;
            const p = {
                    ...s,
                    ...zc(h)
                },
                y = typeof d == "string" ? [e(d, p, !1, null)] : "length" in d ? d : [d],
                b = ht(y) ? y : new u(y, null, p);
            if (b._root = b, !l) return new u(void 0, b, p);
            const _ = typeof l == "string" && qc(l) ? e(l, p, !1, null).children : yN(l) ? [l] : Array.isArray(l) ? l : void 0,
                g = new u(_, b, p);
            if (_) return g;
            if (typeof l != "string") throw new Error("Unexpected type of selector");
            let R = l;
            const x = f ? typeof f == "string" ? qc(f) ? new u([e(f, p, !1, null)], b, p) : (R = `${f} ${R}`, b) : ht(f) ? f : new u(Array.isArray(f) ? f : [f], b, p) : b;
            return x ? x.find(R) : g
        }
        return Object.assign(c, v7, {
            load: r,
            _root: o,
            _options: s,
            fn: u.prototype,
            prototype: u.prototype
        }), c
    }
}

function yN(e) {
    return !!e.name || e.type === "root" || e.type === "text" || e.type === "comment"
}
const bN = BI((e, t, r, n) => t.xmlMode || t._useHtmlParser2 ? T2(e, t) : x2(e, t, r, n)),
    Y = vN(bN, (e, t) => t.xmlMode || t._useHtmlParser2 ? ho(e, t) : N2(e));
Y([]);
var wN = typeof self == "object" ? self.FormData : window.FormData;
const Nf = Re(wN);
var Tf = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
Tf.parse = SN;
Tf.serialize = $N;
var EN = Object.prototype.toString,
    hi = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

function SN(e, t) {
    if (typeof e != "string") throw new TypeError("argument str must be a string");
    for (var r = {}, n = t || {}, a = n.decode || AN, i = 0; i < e.length;) {
        var s = e.indexOf("=", i);
        if (s === -1) break;
        var o = e.indexOf(";", i);
        if (o === -1) o = e.length;
        else if (o < s) {
            i = e.lastIndexOf(";", s - 1) + 1;
            continue
        }
        var u = e.slice(i, s).trim();
        if (r[u] === void 0) {
            var c = e.slice(s + 1, o).trim();
            c.charCodeAt(0) === 34 && (c = c.slice(1, -1)), r[u] = RN(c, a)
        }
        i = o + 1
    }
    return r
}

function $N(e, t, r) {
    var n = r || {},
        a = n.encode || ON;
    if (typeof a != "function") throw new TypeError("option encode is invalid");
    if (!hi.test(e)) throw new TypeError("argument name is invalid");
    var i = a(t);
    if (i && !hi.test(i)) throw new TypeError("argument val is invalid");
    var s = e + "=" + i;
    if (n.maxAge != null) {
        var o = n.maxAge - 0;
        if (isNaN(o) || !isFinite(o)) throw new TypeError("option maxAge is invalid");
        s += "; Max-Age=" + Math.floor(o)
    }
    if (n.domain) {
        if (!hi.test(n.domain)) throw new TypeError("option domain is invalid");
        s += "; Domain=" + n.domain
    }
    if (n.path) {
        if (!hi.test(n.path)) throw new TypeError("option path is invalid");
        s += "; Path=" + n.path
    }
    if (n.expires) {
        var u = n.expires;
        if (!_N(u) || isNaN(u.valueOf())) throw new TypeError("option expires is invalid");
        s += "; Expires=" + u.toUTCString()
    }
    if (n.httpOnly && (s += "; HttpOnly"), n.secure && (s += "; Secure"), n.partitioned && (s += "; Partitioned"), n.priority) {
        var c = typeof n.priority == "string" ? n.priority.toLowerCase() : n.priority;
        switch (c) {
            case "low":
                s += "; Priority=Low";
                break;
            case "medium":
                s += "; Priority=Medium";
                break;
            case "high":
                s += "; Priority=High";
                break;
            default:
                throw new TypeError("option priority is invalid")
        }
    }
    if (n.sameSite) {
        var l = typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite;
        switch (l) {
            case !0:
                s += "; SameSite=Strict";
                break;
            case "lax":
                s += "; SameSite=Lax";
                break;
            case "strict":
                s += "; SameSite=Strict";
                break;
            case "none":
                s += "; SameSite=None";
                break;
            default:
                throw new TypeError("option sameSite is invalid")
        }
    }
    return s
}

function AN(e) {
    return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e
}

function ON(e) {
    return encodeURIComponent(e)
}

function _N(e) {
    return EN.call(e) === "[object Date]" || e instanceof Date
}

function RN(e, t) {
    try {
        return t(e)
    } catch {
        return e
    }
}
var Ba = {
        exports: {}
    },
    qr = {
        decodeValues: !0,
        map: !1,
        silent: !1
    };

function Xc(e) {
    return typeof e == "string" && !!e.trim()
}

function Yc(e, t) {
    var r = e.split(";").filter(Xc),
        n = r.shift(),
        a = CN(n),
        i = a.name,
        s = a.value;
    t = t ? Object.assign({}, qr, t) : qr;
    try {
        s = t.decodeValues ? decodeURIComponent(s) : s
    } catch (u) {
        console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + s + "'. Set options.decodeValues to false to disable this feature.", u)
    }
    var o = {
        name: i,
        value: s
    };
    return r.forEach(function (u) {
        var c = u.split("="),
            l = c.shift().trimLeft().toLowerCase(),
            f = c.join("=");
        l === "expires" ? o.expires = new Date(f) : l === "max-age" ? o.maxAge = parseInt(f, 10) : l === "secure" ? o.secure = !0 : l === "httponly" ? o.httpOnly = !0 : l === "samesite" ? o.sameSite = f : o[l] = f
    }), o
}

function CN(e) {
    var t = "",
        r = "",
        n = e.split("=");
    return n.length > 1 ? (t = n.shift(), r = n.join("=")) : r = e, {
        name: t,
        value: r
    }
}

function d1(e, t) {
    if (t = t ? Object.assign({}, qr, t) : qr, !e) return t.map ? {} : [];
    if (e.headers)
        if (typeof e.headers.getSetCookie == "function") e = e.headers.getSetCookie();
        else if (e.headers["set-cookie"]) e = e.headers["set-cookie"];
    else {
        var r = e.headers[Object.keys(e.headers).find(function (a) {
            return a.toLowerCase() === "set-cookie"
        })];
        !r && e.headers.cookie && !t.silent && console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), e = r
    }
    if (Array.isArray(e) || (e = [e]), t = t ? Object.assign({}, qr, t) : qr, t.map) {
        var n = {};
        return e.filter(Xc).reduce(function (a, i) {
            var s = Yc(i, t);
            return a[s.name] = s, a
        }, n)
    } else return e.filter(Xc).map(function (a) {
        return Yc(a, t)
    })
}

function IN(e) {
    if (Array.isArray(e)) return e;
    if (typeof e != "string") return [];
    var t = [],
        r = 0,
        n, a, i, s, o;

    function u() {
        for (; r < e.length && /\s/.test(e.charAt(r));) r += 1;
        return r < e.length
    }

    function c() {
        return a = e.charAt(r), a !== "=" && a !== ";" && a !== ","
    }
    for (; r < e.length;) {
        for (n = r, o = !1; u();)
            if (a = e.charAt(r), a === ",") {
                for (i = r, r += 1, u(), s = r; r < e.length && c();) r += 1;
                r < e.length && e.charAt(r) === "=" ? (o = !0, r = s, t.push(e.substring(n, i)), n = r) : r = i + 1
            } else r += 1;
        (!o || r >= e.length) && t.push(e.substring(n, e.length))
    }
    return t
}
Ba.exports = d1;
Ba.exports.parse = d1;
Ba.exports.parseString = Yc;
Ba.exports.splitCookiesString = IN;
var NN = Ba.exports;
const TN = Re(NN);
class U extends Error {
    constructor(t) {
        super(`Couldn't find a stream: ${t??"not found"}`), this.name = "NotFoundError"
    }
}

function h1(e) {
    const t = [];
    return e.scrapeMovie && t.push("movie"), e.scrapeShow && t.push("show"), {
        type: "source",
        id: e.id,
        rank: e.rank,
        name: e.name,
        mediaTypes: t
    }
}

function p1(e) {
    return {
        type: "embed",
        id: e.id,
        rank: e.rank,
        name: e.name
    }
}

function xN(e) {
    return e.sources.sort((t, r) => r.rank - t.rank).map(h1)
}

function kN(e) {
    return e.embeds.sort((t, r) => r.rank - t.rank).map(p1)
}

function PN(e, t) {
    const r = e.sources.find(a => a.id === t);
    if (r) return h1(r);
    const n = e.embeds.find(a => a.id === t);
    return n ? p1(n) : null
}

function xf(e, t) {
    let r = (t == null ? void 0 : t.baseUrl) ?? "",
        n = e;
    r.length > 0 && !r.endsWith("/") && (r += "/"), n.startsWith("/") && (n = n.slice(1));
    const a = r + n;
    if (!a.startsWith("http://") && !a.startsWith("https://")) throw new Error(`Invald URL -- URL doesn't start with a http scheme: '${a}'`);
    const i = new URL(a);
    return Object.entries((t == null ? void 0 : t.query) ?? {}).forEach(([s, o]) => {
        i.searchParams.set(s, o)
    }), i.toString()
}

function Wp(e) {
    const t = (n, a) => e(n, {
            headers: (a == null ? void 0 : a.headers) ?? {},
            method: (a == null ? void 0 : a.method) ?? "GET",
            query: (a == null ? void 0 : a.query) ?? {},
            baseUrl: (a == null ? void 0 : a.baseUrl) ?? "",
            readHeaders: (a == null ? void 0 : a.readHeaders) ?? [],
            body: a == null ? void 0 : a.body
        }),
        r = async (n, a) => (await t(n, a)).body;
    return r.full = t, r
}
const H = {
        CORS_ALLOWED: "cors-allowed",
        IP_LOCKED: "ip-locked",
        CF_BLOCKED: "cf-blocked"
    },
    fB = {
        BROWSER: "browser",
        BROWSER_EXTENSION: "browser-extension",
        NATIVE: "native",
        ANY: "any"
    },
    LN = {
        browser: {
            requires: [H.CORS_ALLOWED],
            disallowed: []
        },
        "browser-extension": {
            requires: [],
            disallowed: []
        },
        native: {
            requires: [],
            disallowed: []
        },
        any: {
            requires: [],
            disallowed: []
        }
    };

function DN(e, t) {
    const r = LN[e];
    return t || r.disallowed.push(H.IP_LOCKED), r
}

function ma(e, t) {
    return !(!e.requires.every(a => t.includes(a)) || e.disallowed.some(a => t.includes(a)))
}

function Ee(e) {
    const t = [];
    return e.scrapeMovie && t.push("movie"), e.scrapeShow && t.push("show"), {
        ...e,
        type: "source",
        disabled: e.disabled ?? !1,
        mediaTypes: t
    }
}

function ue(e) {
    return {
        ...e,
        type: "embed",
        disabled: e.disabled ?? !1,
        mediaTypes: void 0
    }
}
const pi = "https://embed.warezcdn.com",
    Gp = "https://warezcdn.com/embed",
    ju = "https://warezcdn.com/player",
    FN = "https://workerproxy.warezcdn.workers.dev";
async function Hp(e, t, r) {
    const n = {
            id: r,
            sv: t
        },
        i = (await e.proxiedFetcher("/getPlay.php", {
            baseUrl: Gp,
            headers: {
                Referer: `${Gp}/getEmbed.php?${new URLSearchParams(n)}`
            },
            query: n
        })).match(/window\.location\.href="([^"]*)";/);
    if (!i) throw new Error("Could not find embed url");
    return i[1]
}

function jN(e) {
    let t = atob(e);
    t = t.trim(), t = t.split("").reverse().join("");
    let r = t.slice(-5);
    return r = r.split("").reverse().join(""), t = t.slice(0, -5), `${t}${r}`
}
async function m1(e) {
    var t;
    const n = (t = (await e.proxiedFetcher("/player.php", {
        baseUrl: ju,
        headers: {
            Referer: `${ju}/getEmbed.php?${new URLSearchParams({id:e.url,sv:"warezcdn"})}`
        },
        query: {
            id: e.url
        }
    })).match(/let allowanceKey = "(.*?)";/)) == null ? void 0 : t[1];
    if (!n) throw new U("Failed to get allowanceKey");
    const a = await e.proxiedFetcher("/functions.php", {
            baseUrl: ju,
            method: "POST",
            body: new URLSearchParams({
                getVideo: e.url,
                key: n
            })
        }),
        i = JSON.parse(a);
    if (!i.id) throw new U("can't get stream id");
    const s = jN(i.id);
    if (!s) throw new U("can't get file id");
    return s
}
const UN = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64];
async function MN(e, t) {
    for (const r of UN) {
        const n = `https://cloclo${r}.cloud.mail.ru/weblink/view/${t}`;
        if ((await e.proxiedFetcher.full(n, {
                method: "GET",
                headers: {
                    Range: "bytes=0-1"
                }
            })).statusCode === 206) return n
    }
    return null
}
const hs = ue({
        id: "warezcdnembedmp4",
        name: "WarezCDN MP4",
        rank: 82,
        disabled: !1,
        async scrape(e) {
            const t = await m1(e);
            if (!t) throw new U("can't get file id");
            const r = await MN(e, t);
            if (!r) throw new U("can't get stream id");
            return {
                stream: [{
                    id: "primary",
                    captions: [],
                    qualities: {
                        unknown: {
                            type: "mp4",
                            url: `${FN}/?${new URLSearchParams({url:r})}`
                        }
                    },
                    type: "file",
                    flags: [H.CORS_ALLOWED]
                }]
            }
        }
    }),
    g1 = [hs.id];

function ps(e) {
    return e ? e.type === "hls" ? !!e.playlist : e.type === "file" ? Object.values(e.qualities).filter(r => r.url.length > 0).length !== 0 : !1 : !1
}
async function Jc(e, t, r) {
    if (g1.includes(r)) return e;
    if (e.type === "hls") {
        const n = await t.proxiedFetcher.full(e.playlist, {
            method: "GET",
            headers: {
                ...e.preferredHeaders,
                ...e.headers
            }
        });
        return n.statusCode < 200 || n.statusCode >= 400 ? null : e
    }
    if (e.type === "file") {
        const n = await Promise.all(Object.values(e.qualities).map(i => t.proxiedFetcher.full(i.url, {
                method: "GET",
                headers: {
                    ...e.preferredHeaders,
                    ...e.headers,
                    Range: "bytes=0-1"
                }
            }))),
            a = e.qualities;
        return Object.keys(e.qualities).forEach((i, s) => {
            (n[s].statusCode < 200 || n[s].statusCode >= 400) && delete a[i]
        }), Object.keys(a).length === 0 ? null : {
            ...e,
            qualities: a
        }
    }
    return null
}
async function v1(e, t, r) {
    return g1.includes(r) ? e : (await Promise.all(e.map(n => Jc(n, t, r)))).filter(n => n !== null)
}
async function BN(e, t) {
    const r = e.sources.find(i => t.id === i.id);
    if (!r) throw new Error("Source with ID not found");
    if (t.media.type === "movie" && !r.scrapeMovie) throw new Error("Source is not compatible with movies");
    if (t.media.type === "show" && !r.scrapeShow) throw new Error("Source is not compatible with shows");
    const n = {
        fetcher: t.fetcher,
        proxiedFetcher: t.proxiedFetcher,
        progress(i) {
            var s, o;
            (o = (s = t.events) == null ? void 0 : s.update) == null || o.call(s, {
                id: r.id,
                percentage: i,
                status: "pending"
            })
        }
    };
    let a = null;
    if (t.media.type === "movie" && r.scrapeMovie ? a = await r.scrapeMovie({
            ...n,
            media: t.media
        }) : t.media.type === "show" && r.scrapeShow && (a = await r.scrapeShow({
            ...n,
            media: t.media
        })), a != null && a.stream && (a.stream = a.stream.filter(i => ps(i)).filter(i => ma(t.features, i.flags))), !a) throw new Error("output is null");
    if (a.embeds = a.embeds.filter(i => {
            const s = e.embeds.find(o => o.id === i.embedId);
            return !(!s || s.disabled)
        }), (!a.stream || a.stream.length === 0) && a.embeds.length === 0) throw new U("No streams found");
    if (a.stream && a.stream.length > 0 && a.embeds.length === 0) {
        const i = await v1(a.stream, t, r.id);
        if (i.length === 0) throw new U("No playable streams found");
        a.stream = i
    }
    return a
}
async function zN(e, t) {
    const r = e.embeds.find(i => t.id === i.id);
    if (!r) throw new Error("Embed with ID not found");
    const n = await r.scrape({
        fetcher: t.fetcher,
        proxiedFetcher: t.proxiedFetcher,
        url: t.url,
        progress(i) {
            var s, o;
            (o = (s = t.events) == null ? void 0 : s.update) == null || o.call(s, {
                id: r.id,
                percentage: i,
                status: "pending"
            })
        }
    });
    if (n.stream = n.stream.filter(i => ps(i)).filter(i => ma(t.features, i.flags)), n.stream.length === 0) throw new U("No streams found");
    const a = await v1(n.stream, t, r.id);
    if (a.length === 0) throw new U("No playable streams found");
    return n.stream = a, n
}

function Kp(e, t) {
    const r = [...t];
    return r.sort((n, a) => {
        const i = e.indexOf(n.id),
            s = e.indexOf(a.id);
        return i >= 0 && s >= 0 ? i - s : s >= 0 ? 1 : i >= 0 ? -1 : a.rank - n.rank
    }), r
}
async function VN(e, t) {
    var r, n, a, i, s, o, u, c, l, f, d, h, p, y;
    const b = Kp(t.sourceOrder ?? [], e.sources).filter(k => t.media.type === "movie" ? !!k.scrapeMovie : t.media.type === "show" ? !!k.scrapeShow : !1),
        _ = Kp(t.embedOrder ?? [], e.embeds),
        g = _.map(k => k.id);
    let R = "";
    const x = {
        fetcher: t.fetcher,
        proxiedFetcher: t.proxiedFetcher,
        progress(k) {
            var F, z;
            (z = (F = t.events) == null ? void 0 : F.update) == null || z.call(F, {
                id: R,
                percentage: k,
                status: "pending"
            })
        }
    };
    (n = (r = t.events) == null ? void 0 : r.init) == null || n.call(r, {
        sourceIds: b.map(k => k.id)
    });
    for (const k of b) {
        (i = (a = t.events) == null ? void 0 : a.start) == null || i.call(a, k.id), R = k.id;
        let F = null;
        try {
            if (t.media.type === "movie" && k.scrapeMovie ? F = await k.scrapeMovie({
                    ...x,
                    media: t.media
                }) : t.media.type === "show" && k.scrapeShow && (F = await k.scrapeShow({
                    ...x,
                    media: t.media
                })), F && (F.stream = (F.stream ?? []).filter(ps).filter(K => ma(t.features, K.flags))), !F || !((s = F.stream) != null && s.length) && !F.embeds.length) throw new U("No streams found")
        } catch (K) {
            const j = {
                id: k.id,
                percentage: 100,
                status: K instanceof U ? "notfound" : "failure",
                reason: K instanceof U ? K.message : void 0,
                error: K instanceof U ? void 0 : K
            };
            (u = (o = t.events) == null ? void 0 : o.update) == null || u.call(o, j);
            continue
        }
        if (!F) throw new Error("Invalid media type");
        if ((c = F.stream) != null && c[0]) {
            const K = await Jc(F.stream[0], t, k.id);
            if (!K) throw new U("No streams found");
            return {
                sourceId: k.id,
                stream: K
            }
        }
        const z = F.embeds.filter(K => {
            const j = e.embeds.find(Q => Q.id === K.embedId);
            return j && !j.disabled
        }).sort((K, j) => g.indexOf(K.embedId) - g.indexOf(j.embedId));
        z.length > 0 && ((f = (l = t.events) == null ? void 0 : l.discoverEmbeds) == null || f.call(l, {
            embeds: z.map((K, j) => ({
                id: [k.id, j].join("-"),
                embedScraperId: K.embedId
            })),
            sourceId: k.id
        }));
        for (const [K, j] of z.entries()) {
            const Q = _.find(S => S.id === j.embedId);
            if (!Q) throw new Error("Invalid embed returned");
            const q = [k.id, K].join("-");
            (h = (d = t.events) == null ? void 0 : d.start) == null || h.call(d, q), R = q;
            let I;
            try {
                if (I = await Q.scrape({
                        ...x,
                        url: j.url
                    }), I.stream = I.stream.filter(ps).filter(v => ma(t.features, v.flags)), I.stream.length === 0) throw new U("No streams found");
                const S = await Jc(I.stream[0], t, j.embedId);
                if (!S) throw new U("No streams found");
                I.stream = [S]
            } catch (S) {
                const v = {
                    id: k.id,
                    percentage: 100,
                    status: S instanceof U ? "notfound" : "failure",
                    reason: S instanceof U ? S.message : void 0,
                    error: S instanceof U ? void 0 : S
                };
                (y = (p = t.events) == null ? void 0 : p.update) == null || y.call(p, v);
                continue
            }
            return {
                sourceId: k.id,
                embedId: Q.id,
                stream: I.stream[0]
            }
        }
    }
    return null
}

function qN(e) {
    const t = {
            embeds: e.embeds,
            sources: e.sources
        },
        r = {
            features: e.features,
            fetcher: Wp(e.fetcher),
            proxiedFetcher: Wp(e.proxiedFetcher ?? e.fetcher)
        };
    return {
        runAll(n) {
            return VN(t, {
                ...r,
                ...n
            })
        },
        runSourceScraper(n) {
            return BN(t, {
                ...r,
                ...n
            })
        },
        runEmbedScraper(n) {
            return zN(t, {
                ...r,
                ...n
            })
        },
        getMetadata(n) {
            return PN(t, n)
        },
        listSources() {
            return xN(t)
        },
        listEmbeds() {
            return kN(t)
        }
    }
}
const WN = S0("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 10),
    mi = "https://d000d.com",
    Qc = ue({
        id: "dood",
        name: "dood",
        rank: 173,
        async scrape(e) {
            var t, r;
            let n = e.url;
            e.url.includes("primewire") && (n = (await e.proxiedFetcher.full(e.url)).finalUrl);
            const a = n.split("/d/")[1] || n.split("/e/")[1],
                i = await e.proxiedFetcher(`/e/${a}`, {
                    method: "GET",
                    baseUrl: mi
                }),
                s = (t = i.match(/\?token=([^&]+)&expiry=/)) == null ? void 0 : t[1],
                o = (r = i.match(/\$\.get\('\/pass_md5([^']+)/)) == null ? void 0 : r[1],
                u = i.match(/thumbnails:\s\{\s*vtt:\s'([^']*)'/),
                l = `${await e.proxiedFetcher(`/pass_md5${o}`,{headers:{Referer:`${mi}/e/${a}`},method:"GET",baseUrl:mi})}${WN()}?token=${s}&expiry=${Date.now()}`;
            if (!l.startsWith("http")) throw new Error("Invalid URL");
            return {
                stream: [{
                    id: "primary",
                    type: "file",
                    flags: [],
                    captions: [],
                    qualities: {
                        unknown: {
                            type: "mp4",
                            url: l
                        }
                    },
                    headers: {
                        Referer: mi
                    },
                    ...u ? {
                        thumbnailTrack: {
                            type: "vtt",
                            url: `https:${u[1]}`
                        }
                    } : {}
                }]
            }
        }
    }),
    GN = /eval\((.*)\)/g,
    HN = /file:"(.*?)"/g,
    KN = /\{file:"([^"]+)",kind:"thumbnails"\}/g,
    XN = ue({
        id: "dropload",
        name: "Dropload",
        rank: 120,
        scrape: async e => {
            const t = await e.proxiedFetcher.full(e.url, {
                    headers: {
                        referer: e.url
                    }
                }),
                r = new URL(t.finalUrl),
                a = t.body.match(GN);
            if (!a) throw new Error("Failed to find eval code");
            const i = Qt(a[1]),
                s = HN.exec(i),
                o = KN.exec(i);
            if (!(s != null && s[1])) throw new Error("Failed to find file");
            return {
                stream: [{
                    id: "primary",
                    type: "hls",
                    playlist: s[1],
                    flags: [H.IP_LOCKED, H.CORS_ALLOWED],
                    captions: [],
                    ...o ? {
                        thumbnailTrack: {
                            type: "vtt",
                            url: r.origin + o[1]
                        }
                    } : {}
                }]
            }
        }
    }),
    YN = "https://www.febbox.com";

function y1(e) {
    const [t, r, n, a] = e.slice(1).split("/"), i = n ? parseInt(n, 10) : void 0, s = a ? parseInt(a, 10) : void 0;
    return {
        type: t,
        id: r,
        season: i,
        episode: s
    }
}
async function Xp(e, t, r) {
    var n;
    const a = {
        share_key: t,
        pwd: ""
    };
    return r && (a.parent_id = r.toString(), a.page = "1"), ((n = (await e.proxiedFetcher("/file/file_share_list", {
        headers: {
            "accept-language": "en"
        },
        baseUrl: YN,
        query: a
    })).data) == null ? void 0 : n.file_list) ?? []
}

function Yp(e) {
    return e.ext === "mp4" || e.ext === "mkv"
}
async function JN(e, t, r, n, a) {
    const i = await Xp(e, t);
    if (r === "show") {
        const s = i.find(f => f.is_dir ? f.file_name.toLowerCase() === `season ${n}` : !1);
        if (!s) return [];
        const o = await Xp(e, t, s.fid),
            u = (n == null ? void 0 : n.toString()) ?? "0",
            c = (a == null ? void 0 : a.toString()) ?? "0",
            l = new RegExp(`[Ss]0*${u}[Ee]0*${c}`);
        return o.filter(f => !(f.is_dir || !f.file_name.match(l))).filter(Yp)
    }
    return i.filter(s => !s.is_dir).filter(Yp)
}
const QN = {
    srt: "srt",
    vtt: "vtt"
};

function Tr(e) {
    const r = Object.keys(QN).find(n => e.endsWith(`.${n}`));
    return r || null
}

function er(e) {
    const t = R0.getCode(e);
    return t.length === 0 ? null : t
}

function ZN(e) {
    return e ? R0.validate(e) : !1
}

function kf(e) {
    const t = {};
    return e.filter(r => t[r.language] ? !1 : (t[r.language] = !0, !0))
}
const eT = atob("d0VpcGhUbiE="),
    b1 = atob("MTIzZDZjZWRmNjI2ZHk1NDIzM2FhMXc2"),
    Jp = [atob("aHR0cHM6Ly9zaG93Ym94LnNoZWd1Lm5ldC9hcGkvYXBpX2NsaWVudC9pbmRleC8="), atob("aHR0cHM6Ly9tYnBhcGkuc2hlZ3UubmV0L2FwaS9hcGlfY2xpZW50L2luZGV4Lw==")],
    Qp = atob("bW92aWVib3g="),
    tT = atob("Y29tLnRkby5zaG93Ym94"),
    Zp = [atob("bWJwaW1hZ2VzLmNodWF4aW4uY29t"), atob("aW1hZ2VzLnNoZWd1Lm5ldA==")],
    rT = "https://www.showbox.media";

function nT(e) {
    return hr.TripleDES.encrypt(e, hr.enc.Utf8.parse(b1), {
        iv: hr.enc.Utf8.parse(eT)
    }).toString()
}

function aT(e, t, r) {
    return e ? hr.MD5(hr.MD5(t).toString() + r + e).toString() : null
}
const iT = S0("1234567890abcdef"),
    sT = () => Math.floor(Date.now() / 1e3 + 60 * 60 * 12),
    Pf = async (e, t, r = !1) => {
        const n = {
                childmode: "0",
                app_version: "11.5",
                appid: tT,
                lang: "en",
                expired_date: `${sT()}`,
                platform: "android",
                channel: "Website"
            },
            a = nT(JSON.stringify({
                ...n,
                ...t
            })),
            i = hr.MD5(Qp).toString(),
            s = aT(a, Qp, b1),
            o = JSON.stringify({
                app_key: i,
                verify: s,
                encrypt_data: a
            }),
            u = btoa(o),
            c = new URLSearchParams;
        c.append("data", u), c.append("appid", "27"), c.append("platform", "android"), c.append("version", "129"), c.append("medium", "Website"), c.append("token", iT(32));
        const l = r ? Jp[1] : Jp[0],
            f = await e.proxiedFetcher(l, {
                method: "POST",
                headers: {
                    Platform: "android",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "User-Agent": "okhttp/3.2.0"
                },
                body: c
            });
        return JSON.parse(f)
    };
async function w1(e, t, r, n, a, i) {
    const o = {
            fid: r,
            uid: "",
            module: n === "movie" ? "Movie_srt_list_v2" : "TV_srt_list_v2",
            mid: n === "movie" ? t : void 0,
            tid: n !== "movie" ? t : void 0,
            episode: a == null ? void 0 : a.toString(),
            season: i == null ? void 0 : i.toString()
        },
        c = (await Pf(e, o)).data.list;
    let l = [];
    return c.forEach(f => {
        const d = f.subtitles.sort((b, _) => _.order - b.order)[0];
        if (!d) return;
        const h = d.file_path.replace(Zp[0], Zp[1]).replace(/\s/g, "+").replace(/[()]/g, b => `%${b.charCodeAt(0).toString(16)}`),
            p = Tr(h);
        !p || !ZN(d.lang) || l.push({
            id: h,
            language: d.lang,
            hasCorsRestrictions: !0,
            type: p,
            url: h
        })
    }), l = kf(l), l
}

function oT(e) {
    return new URL(e).pathname.split("/")[2]
}
const uT = ue({
        id: "febbox-hls",
        name: "Febbox (HLS)",
        rank: 160,
        disabled: !0,
        async scrape(e) {
            var t;
            const {
                type: r,
                id: n,
                season: a,
                episode: i
            } = y1(e.url), s = await e.proxiedFetcher("/index/share_link", {
                baseUrl: rT,
                query: {
                    id: n,
                    type: r === "movie" ? "1" : "2"
                }
            });
            if (!((t = s == null ? void 0 : s.data) != null && t.link)) throw new Error("No embed url found");
            e.progress(30);
            const o = oT(s.data.link),
                c = (await JN(e, o, r, a, i))[0];
            if (!c) throw new Error("No playable mp4 stream found");
            return e.progress(70), {
                stream: [{
                    id: "primary",
                    type: "hls",
                    flags: [],
                    captions: await w1(e, n, c.fid, r, a, i),
                    playlist: `https://www.febbox.com/hls/main/${c.oss_fid}.m3u8`
                }]
            }
        }
    }),
    E1 = ["360", "480", "720", "1080", "4k"];

function cT(e) {
    const t = e.real_quality.replace("p", "").toLowerCase();
    return E1.includes(t) ? {
        real_quality: t,
        path: e.path,
        fid: e.fid
    } : null
}
async function lT(e, t) {
    var r;
    const n = (await Pf(e, t)).data,
        a = n.list.map(s => cT(s)).filter(s => !!s),
        i = {};
    return E1.forEach(s => {
        const o = a.find(u => u.real_quality === s && u.path);
        o && (i[s] = {
            type: "mp4",
            url: o.path
        })
    }), {
        qualities: i,
        fid: (r = n.list[0]) == null ? void 0 : r.fid
    }
}
const S1 = ue({
        id: "febbox-mp4",
        name: "Febbox (MP4)",
        rank: 190,
        async scrape(e) {
            const {
                type: t,
                id: r,
                season: n,
                episode: a
            } = y1(e.url);
            let i = null;
            if (t === "movie" ? i = {
                    uid: "",
                    module: "Movie_downloadurl_v3",
                    mid: r,
                    oss: "1",
                    group: ""
                } : t === "show" && (i = {
                    uid: "",
                    module: "TV_downloadurl_v3",
                    tid: r,
                    season: n,
                    episode: a,
                    oss: "1",
                    group: ""
                }), !i) throw Error("Incorrect type");
            const {
                qualities: s,
                fid: o
            } = await lT(e, i);
            if (o === void 0) throw new Error("No streamable file found");
            return e.progress(70), {
                stream: [{
                    id: "primary",
                    captions: await w1(e, r, o, t, a, n),
                    qualities: s,
                    type: "file",
                    flags: [H.CORS_ALLOWED]
                }]
            }
        }
    }),
    fT = /file: ?"(http.*?)"/,
    dT = /\{file:\s"([^"]+)",\skind:\s"thumbnails"\}/g,
    hT = ue({
        id: "filelions",
        name: "filelions",
        rank: 115,
        async scrape(e) {
            const t = await e.proxiedFetcher.full(e.url, {
                    headers: {
                        referer: e.url
                    }
                }),
                r = t.body,
                n = new URL(t.finalUrl),
                a = r.match(fT) ?? [],
                i = dT.exec(r),
                s = a[1];
            if (!s) throw new Error("Stream url not found");
            return {
                stream: [{
                    id: "primary",
                    type: "hls",
                    playlist: s,
                    flags: [H.IP_LOCKED, H.CORS_ALLOWED],
                    captions: [],
                    ...i ? {
                        thumbnailTrack: {
                            type: "vtt",
                            url: n.origin + i[1]
                        }
                    } : {}
                }]
            }
        }
    }),
    em = "https://mixdrop.ag",
    pT = /(eval\(function\(p,a,c,k,e,d\){.*{}\)\))/,
    mT = /MDCore\.wurl="(.*?)";/,
    un = ue({
        id: "mixdrop",
        name: "MixDrop",
        rank: 198,
        async scrape(e) {
            let t = e.url;
            e.url.includes("primewire") && (t = (await e.fetcher.full(e.url)).finalUrl);
            const r = new URL(t).pathname.split("/")[2],
                a = (await e.proxiedFetcher(`/e/${r}`, {
                    baseUrl: em
                })).match(pT);
            if (!a) throw new Error("failed to find packed mixdrop JavaScript");
            const s = Qt(a[1]).match(mT);
            if (!s) throw new Error("failed to find packed mixdrop source link");
            const o = s[1];
            return {
                stream: [{
                    id: "primary",
                    type: "file",
                    flags: [H.IP_LOCKED],
                    captions: [],
                    qualities: {
                        unknown: {
                            type: "mp4",
                            url: o.startsWith("http") ? o : `https:${o}`,
                            headers: {
                                Referer: em
                            }
                        }
                    }
                }]
            }
        }
    }),
    $1 = ue({
        id: "mp4upload",
        name: "mp4upload",
        rank: 170,
        async scrape(e) {
            const t = await e.proxiedFetcher(e.url),
                r = new RegExp('(?<=player\\.src\\()\\s*{\\s*type:\\s*"[^"]+",\\s*src:\\s*"([^"]+)"\\s*}\\s*(?=\\);)', "s"),
                a = (t.match(r) ?? [])[1];
            if (!a) throw new Error("Stream url not found in embed code");
            return {
                stream: [{
                    id: "primary",
                    type: "file",
                    flags: [H.CORS_ALLOWED],
                    captions: [],
                    qualities: {
                        1080: {
                            type: "mp4",
                            url: a
                        }
                    }
                }]
            }
        }
    }),
    gT = /eval\(function\(h,u,n,t,e,r\).*?\("(.*?)",\d*?,"(.*?)",(\d*?),(\d*?),\d*?\)\)/,
    vT = /file:"(.*?)"/;

function yT(e, t, r, n) {
    const a = t[n];
    return e.split(a).filter(o => o).map(o => {
        const u = o.split("").reduceRight((c, l, f) => c + t.indexOf(l) * n ** (o.length - 1 - f), 0);
        return String.fromCharCode(u - r)
    }).join("")
}
const A1 = ue({
    id: "streambucket",
    name: "StreamBucket",
    rank: 196,
    disabled: !0,
    async scrape(e) {
        const r = await (await fetch(e.url)).text();
        if (r.includes("captcha-checkbox")) throw new Error("StreamBucket got captchaed");
        let n = r.match(gT);
        if (!n) throw new Error("Failed to find StreamBucket hunter JavaScript");
        const a = n[1],
            i = n[2],
            s = Number(n[3]),
            o = Number(n[4]);
        if (Number.isNaN(s)) throw new Error("StreamBucket hunter JavaScript charCodeOffset is not a valid number");
        if (Number.isNaN(o)) throw new Error("StreamBucket hunter JavaScript delimiterOffset is not a valid number");
        if (n = yT(a, i, s, o).match(vT), !n) throw new Error("Failed to find StreamBucket HLS link");
        return {
            stream: [{
                id: "primary",
                type: "hls",
                playlist: n[1],
                flags: [H.CORS_ALLOWED],
                captions: []
            }]
        }
    }
});
var Wr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function O1(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function bT(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var r = function n() {
            return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        r.prototype = t.prototype
    } else r = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function (n) {
        var a = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(r, n, a.get ? a : {
            enumerable: !0,
            get: function () {
                return e[n]
            }
        })
    }), r
}
var _1 = {
    exports: {}
};

function wT(e) {
    throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var Uu = {
    exports: {}
};
const ET = {},
    ST = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ET
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    $T = bT(ST);
var tm;

function R1() {
    return tm || (tm = 1, function (e, t) {
        (function (r, n) {
            e.exports = n()
        })(Wr, function () {
            var r = r || function (n, a) {
                var i;
                if (typeof window < "u" && window.crypto && (i = window.crypto), typeof self < "u" && self.crypto && (i = self.crypto), typeof globalThis < "u" && globalThis.crypto && (i = globalThis.crypto), !i && typeof window < "u" && window.msCrypto && (i = window.msCrypto), !i && typeof Wr < "u" && Wr.crypto && (i = Wr.crypto), !i && typeof wT == "function") try {
                    i = $T
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
                        function g() {}
                        return function (R) {
                            var x;
                            return g.prototype = R, x = new g, g.prototype = null, x
                        }
                    }(),
                    u = {},
                    c = u.lib = {},
                    l = c.Base = function () {
                        return {
                            extend: function (g) {
                                var R = o(this);
                                return g && R.mixIn(g), (!R.hasOwnProperty("init") || this.init === R.init) && (R.init = function () {
                                    R.$super.init.apply(this, arguments)
                                }), R.init.prototype = R, R.$super = this, R
                            },
                            create: function () {
                                var g = this.extend();
                                return g.init.apply(g, arguments), g
                            },
                            init: function () {},
                            mixIn: function (g) {
                                for (var R in g) g.hasOwnProperty(R) && (this[R] = g[R]);
                                g.hasOwnProperty("toString") && (this.toString = g.toString)
                            },
                            clone: function () {
                                return this.init.prototype.extend(this)
                            }
                        }
                    }(),
                    f = c.WordArray = l.extend({
                        init: function (g, R) {
                            g = this.words = g || [], R != a ? this.sigBytes = R : this.sigBytes = g.length * 4
                        },
                        toString: function (g) {
                            return (g || h).stringify(this)
                        },
                        concat: function (g) {
                            var R = this.words,
                                x = g.words,
                                k = this.sigBytes,
                                F = g.sigBytes;
                            if (this.clamp(), k % 4)
                                for (var z = 0; z < F; z++) {
                                    var K = x[z >>> 2] >>> 24 - z % 4 * 8 & 255;
                                    R[k + z >>> 2] |= K << 24 - (k + z) % 4 * 8
                                } else
                                    for (var j = 0; j < F; j += 4) R[k + j >>> 2] = x[j >>> 2];
                            return this.sigBytes += F, this
                        },
                        clamp: function () {
                            var g = this.words,
                                R = this.sigBytes;
                            g[R >>> 2] &= 4294967295 << 32 - R % 4 * 8, g.length = n.ceil(R / 4)
                        },
                        clone: function () {
                            var g = l.clone.call(this);
                            return g.words = this.words.slice(0), g
                        },
                        random: function (g) {
                            for (var R = [], x = 0; x < g; x += 4) R.push(s());
                            return new f.init(R, g)
                        }
                    }),
                    d = u.enc = {},
                    h = d.Hex = {
                        stringify: function (g) {
                            for (var R = g.words, x = g.sigBytes, k = [], F = 0; F < x; F++) {
                                var z = R[F >>> 2] >>> 24 - F % 4 * 8 & 255;
                                k.push((z >>> 4).toString(16)), k.push((z & 15).toString(16))
                            }
                            return k.join("")
                        },
                        parse: function (g) {
                            for (var R = g.length, x = [], k = 0; k < R; k += 2) x[k >>> 3] |= parseInt(g.substr(k, 2), 16) << 24 - k % 8 * 4;
                            return new f.init(x, R / 2)
                        }
                    },
                    p = d.Latin1 = {
                        stringify: function (g) {
                            for (var R = g.words, x = g.sigBytes, k = [], F = 0; F < x; F++) {
                                var z = R[F >>> 2] >>> 24 - F % 4 * 8 & 255;
                                k.push(String.fromCharCode(z))
                            }
                            return k.join("")
                        },
                        parse: function (g) {
                            for (var R = g.length, x = [], k = 0; k < R; k++) x[k >>> 2] |= (g.charCodeAt(k) & 255) << 24 - k % 4 * 8;
                            return new f.init(x, R)
                        }
                    },
                    y = d.Utf8 = {
                        stringify: function (g) {
                            try {
                                return decodeURIComponent(escape(p.stringify(g)))
                            } catch {
                                throw new Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function (g) {
                            return p.parse(unescape(encodeURIComponent(g)))
                        }
                    },
                    b = c.BufferedBlockAlgorithm = l.extend({
                        reset: function () {
                            this._data = new f.init, this._nDataBytes = 0
                        },
                        _append: function (g) {
                            typeof g == "string" && (g = y.parse(g)), this._data.concat(g), this._nDataBytes += g.sigBytes
                        },
                        _process: function (g) {
                            var R, x = this._data,
                                k = x.words,
                                F = x.sigBytes,
                                z = this.blockSize,
                                K = z * 4,
                                j = F / K;
                            g ? j = n.ceil(j) : j = n.max((j | 0) - this._minBufferSize, 0);
                            var Q = j * z,
                                q = n.min(Q * 4, F);
                            if (Q) {
                                for (var I = 0; I < Q; I += z) this._doProcessBlock(k, I);
                                R = k.splice(0, Q), x.sigBytes -= q
                            }
                            return new f.init(R, q)
                        },
                        clone: function () {
                            var g = l.clone.call(this);
                            return g._data = this._data.clone(), g
                        },
                        _minBufferSize: 0
                    });
                c.Hasher = b.extend({
                    cfg: l.extend(),
                    init: function (g) {
                        this.cfg = this.cfg.extend(g), this.reset()
                    },
                    reset: function () {
                        b.reset.call(this), this._doReset()
                    },
                    update: function (g) {
                        return this._append(g), this._process(), this
                    },
                    finalize: function (g) {
                        g && this._append(g);
                        var R = this._doFinalize();
                        return R
                    },
                    blockSize: 16,
                    _createHelper: function (g) {
                        return function (R, x) {
                            return new g.init(x).finalize(R)
                        }
                    },
                    _createHmacHelper: function (g) {
                        return function (R, x) {
                            return new _.HMAC.init(g, x).finalize(R)
                        }
                    }
                });
                var _ = u.algo = {};
                return u
            }(Math);
            return r
        })
    }(Uu)), Uu.exports
}(function (e, t) {
    (function (r, n) {
        e.exports = n(R1())
    })(Wr, function (r) {
        return function () {
            var n = r,
                a = n.lib,
                i = a.WordArray,
                s = n.enc;
            s.Base64 = {
                stringify: function (u) {
                    var c = u.words,
                        l = u.sigBytes,
                        f = this._map;
                    u.clamp();
                    for (var d = [], h = 0; h < l; h += 3)
                        for (var p = c[h >>> 2] >>> 24 - h % 4 * 8 & 255, y = c[h + 1 >>> 2] >>> 24 - (h + 1) % 4 * 8 & 255, b = c[h + 2 >>> 2] >>> 24 - (h + 2) % 4 * 8 & 255, _ = p << 16 | y << 8 | b, g = 0; g < 4 && h + g * .75 < l; g++) d.push(f.charAt(_ >>> 6 * (3 - g) & 63));
                    var R = f.charAt(64);
                    if (R)
                        for (; d.length % 4;) d.push(R);
                    return d.join("")
                },
                parse: function (u) {
                    var c = u.length,
                        l = this._map,
                        f = this._reverseMap;
                    if (!f) {
                        f = this._reverseMap = [];
                        for (var d = 0; d < l.length; d++) f[l.charCodeAt(d)] = d
                    }
                    var h = l.charAt(64);
                    if (h) {
                        var p = u.indexOf(h);
                        p !== -1 && (c = p)
                    }
                    return o(u, c, f)
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            };

            function o(u, c, l) {
                for (var f = [], d = 0, h = 0; h < c; h++)
                    if (h % 4) {
                        var p = l[u.charCodeAt(h - 1)] << h % 4 * 2,
                            y = l[u.charCodeAt(h)] >>> 6 - h % 4 * 2,
                            b = p | y;
                        f[d >>> 2] |= b << 24 - d % 4 * 8, d++
                    } return i.create(f, d)
            }
        }(), r.enc.Base64
    })
})(_1);
var AT = _1.exports;
const OT = O1(AT);
var C1 = {
    exports: {}
};
(function (e, t) {
    (function (r, n) {
        e.exports = n(R1())
    })(Wr, function (r) {
        return r.enc.Utf8
    })
})(C1);
var _T = C1.exports;
const RT = O1(_T);
async function CT(e, t, r) {
    const n = OT.stringify(RT.parse(t)).replace(/=/g, "."),
        a = await e.proxiedFetcher("https://www.google.com/recaptcha/api.js", {
            query: {
                render: r
            }
        }),
        i = a.substring(a.indexOf("/releases/") + 10, a.indexOf("/recaptcha__en.js")),
        s = await e.proxiedFetcher("https://www.google.com/recaptcha/api2/anchor?cb=1&hl=en&size=invisible&cb=flicklax", {
            query: {
                k: r,
                co: n,
                v: i
            }
        }),
        o = Y(s)("#recaptcha-token").attr("value");
    if (!o) throw new Error("Unable to find cToken");
    const c = (await e.proxiedFetcher("https://www.google.com/recaptcha/api2/reload", {
        query: {
            v: i,
            reason: "q",
            k: r,
            c: o,
            sa: "",
            co: t
        },
        headers: {
            referer: "https://www.google.com/recaptcha/api2/"
        },
        method: "POST"
    })).match('rresp","(.+?)"');
    return c ? c[1] : null
}
const I1 = ue({
        id: "streamsb",
        name: "StreamSB",
        rank: 150,
        async scrape(e) {
            const t = e.url.replace(".html", "").replace("embed-", "").replace("e/", "").replace("d/", ""),
                r = new URL(t),
                n = await e.proxiedFetcher(`${r.origin}/d${r.pathname}`);
            e.progress(20);
            const a = Y(n),
                i = [];
            a("[onclick^=download_video]").each((u, c) => {
                const l = a(c),
                    f = l.attr("onclick"),
                    h = /download_video\('(.+?)','(.+?)','(.+?)'\)/.exec(f ?? "");
                if (!h) return;
                const p = l.find("span").text(),
                    b = /(.+?) \((.+?)\)/.exec(p ?? "");
                b && i.push({
                    parameters: [h[1], h[2], h[3]],
                    quality: {
                        label: b[1].trim(),
                        size: b[2]
                    }
                })
            }), e.progress(40);
            let s = await Promise.all(i.map(async u => {
                const c = {
                        op: "download_orig",
                        id: u.parameters[0],
                        mode: u.parameters[1],
                        hash: u.parameters[2]
                    },
                    l = await e.proxiedFetcher("/dl", {
                        query: c,
                        baseUrl: r.origin
                    }),
                    d = Y(l)(".g-recaptcha").attr("data-sitekey");
                if (!d) throw new Error("Unable to get captcha key");
                const h = await CT(e, r.origin, d);
                if (!h) throw new Error("Unable to get captcha token");
                const p = new Nf;
                p.append("op", "download_orig"), p.append("id", u.parameters[0]), p.append("mode", u.parameters[1]), p.append("hash", u.parameters[2]), p.append("g-recaptcha-response", h);
                const y = await e.proxiedFetcher("/dl", {
                        method: "POST",
                        baseUrl: r.origin,
                        body: p,
                        query: c
                    }),
                    b = Y(y)(".btn.btn-light.btn-lg").attr("href");
                return {
                    quality: u.quality.label,
                    url: b
                }
            }));
            s = s.filter(u => !!u.url), e.progress(80);
            const o = s.reduce((u, c) => (u[c.quality] = {
                type: "mp4",
                url: c.url
            }, u), {});
            return {
                stream: [{
                    id: "primary",
                    type: "file",
                    flags: [H.CORS_ALLOWED],
                    qualities: o,
                    captions: []
                }]
            }
        }
    }),
    IT = "https://rabbitstream.net",
    NT = "https://rabbitstream.net/",
    {
        AES: TT,
        enc: xT
    } = hr;

function kT(e) {
    try {
        return JSON.parse(e), !0
    } catch {
        return !1
    }
}

function PT(e) {
    const t = e.lastIndexOf("switch"),
        r = e.indexOf("partKeyStartPosition"),
        n = e.slice(t, r),
        a = [],
        i = n.matchAll(/:[a-zA-Z0-9]+=([a-zA-Z0-9]+),[a-zA-Z0-9]+=([a-zA-Z0-9]+);/g);
    for (const s of i) {
        const o = [];
        for (const u of [s[1], s[2]]) {
            const c = new RegExp(`${u}=0x([a-zA-Z0-9]+)`, "g"),
                l = [...e.matchAll(c)],
                f = l[l.length - 1];
            if (!f) return null;
            const d = parseInt(f[1], 16);
            o.push(d)
        }
        a.push([o[0], o[1]])
    }
    return a
}
const Nt = ue({
        id: "upcloud",
        name: "UpCloud",
        rank: 200,
        disabled: !0,
        async scrape(e) {
            const t = new URL(e.url.replace("embed-5", "embed-4")),
                r = t.pathname.split("/"),
                n = r[r.length - 1],
                a = await e.proxiedFetcher(`${t.origin}/ajax/embed-4/getSources?id=${n}`, {
                    headers: {
                        Referer: t.origin,
                        "X-Requested-With": "XMLHttpRequest"
                    }
                });
            let i = null;
            if (!kT(a.sources)) {
                const o = await e.proxiedFetcher("https://rabbitstream.net/js/player/prod/e4-player.min.js", {
                        query: {
                            v: Date.now().toString()
                        }
                    }),
                    u = PT(o);
                if (!u) throw new Error("Key extraction failed");
                let c = "",
                    l = a.sources,
                    f = 0;
                u.forEach(([p, y]) => {
                    const b = p + f,
                        _ = b + y;
                    c += a.sources.slice(b, _), l = l.replace(a.sources.substring(b, _), ""), f += y
                });
                const d = TT.decrypt(l, c).toString(xT.Utf8),
                    h = JSON.parse(d)[0];
                if (!h) throw new Error("No stream found");
                i = h
            }
            if (!i) throw new Error("upcloud source not found");
            const s = [];
            return a.tracks.forEach(o => {
                if (o.kind !== "captions") return;
                const u = Tr(o.file);
                if (!u) return;
                const c = er(o.label.split(" ")[0]);
                c && s.push({
                    id: o.file,
                    language: c,
                    hasCorsRestrictions: !1,
                    type: u,
                    url: o.file
                })
            }), {
                stream: [{
                    id: "primary",
                    type: "hls",
                    playlist: i.file,
                    flags: [H.CORS_ALLOWED],
                    captions: s,
                    preferredHeaders: {
                        Referer: NT,
                        Origin: IT
                    }
                }]
            }
        }
    }),
    LT = /(eval\(function\(p,a,c,k,e,d\).*\)\)\))/,
    DT = /sources:\[{file:"(.*?)"/,
    ms = ue({
        id: "upstream",
        name: "UpStream",
        rank: 199,
        async scrape(e) {
            const r = (await e.proxiedFetcher(e.url)).match(LT);
            if (r) {
                const a = Qt(r[1]).match(DT);
                if (a) return {
                    stream: [{
                        id: "primary",
                        type: "hls",
                        playlist: a[1],
                        flags: [H.CORS_ALLOWED],
                        captions: []
                    }]
                }
            }
            throw new Error("upstream source not found")
        }
    }),
    Ui = "https://vidsrc.me",
    Zc = "https://vidsrc.stream",
    FT = /file:"(.*?)"/,
    jT = /var pass_path = "(.*set_pass\.php.*)";/;

function N1(e) {
    const t = e.replace(/\/@#@\/[^=/]+==/g, "");
    return t.match(/\/@#@\/[^=/]+==/) ? N1(t) : t
}
const T1 = ue({
        id: "vidsrcembed",
        name: "VidSrc",
        rank: 197,
        async scrape(e) {
            var t, r, n;
            const a = await e.proxiedFetcher(e.url, {
                headers: {
                    referer: e.url
                }
            });
            let i = (r = (t = a.match(FT)) == null ? void 0 : t[1]) == null ? void 0 : r.slice(2);
            if (!i) throw new Error("Unable to find HLS playlist");
            i = N1(i);
            const s = atob(i);
            if (!s.includes(".m3u8")) throw new Error("Unable to find HLS playlist");
            let o = (n = a.match(jT)) == null ? void 0 : n[1];
            return o && (o.startsWith("//") && (o = `https:${o}`), await e.proxiedFetcher(o, {
                headers: {
                    referer: e.url
                }
            })), {
                stream: [{
                    id: "primary",
                    type: "hls",
                    playlist: s,
                    headers: {
                        Referer: Zc,
                        Origin: Zc
                    },
                    flags: [],
                    captions: []
                }]
            }
        }
    }),
    UT = /eval\((.*)\)/g,
    MT = /file:"(.*?)"/g,
    BT = /\{file:"([^"]+)",kind:"thumbnails"\}/g,
    zT = ue({
        id: "vtube",
        name: "vTube",
        rank: 145,
        scrape: async e => {
            const t = await e.proxiedFetcher.full(e.url, {
                    headers: {
                        referer: e.url
                    }
                }),
                r = t.body,
                a = Y(r)("script").text().match(UT);
            if (!a) throw new Error("Failed to find eval code");
            const i = Qt(a == null ? void 0 : a.toString()),
                s = MT.exec(i),
                o = BT.exec(i);
            if (!(s != null && s[1])) throw new Error("Failed to find file");
            return {
                stream: [{
                    id: "primary",
                    type: "hls",
                    playlist: s[1],
                    flags: [H.CORS_ALLOWED],
                    captions: [],
                    ...o ? {
                        thumbnailTrack: {
                            type: "vtt",
                            url: new URL(t.finalUrl).origin + o[1]
                        }
                    } : {}
                }]
            }
        }
    }),
    cn = ue({
        id: "vidcloud",
        name: "VidCloud",
        rank: 201,
        disabled: !0,
        async scrape(e) {
            return {
                stream: (await Nt.scrape(e)).stream.map(r => ({
                    ...r,
                    flags: []
                }))
            }
        }
    }),
    Jr = "https://flixhq.to";
async function gi(e, t) {
    return (await e.proxiedFetcher(`/ajax/sources/${t}`, {
        baseUrl: Jr
    })).link
}
async function VT(e, t, r) {
    const n = r.split("-"),
        a = n[n.length - 1],
        i = await e.proxiedFetcher(`/ajax/movie/episodes/${a}`, {
            baseUrl: Jr
        }),
        s = Y(i);
    return s(".nav-item > a").toArray().map(u => {
        const c = s(u),
            l = c.attr("title"),
            f = c.attr("data-linkid");
        if (!l || !f) throw new Error("invalid sources");
        return {
            embed: l,
            episodeId: f
        }
    })
}
async function qT(e, t, r) {
    var n, a;
    const i = r.split("-"),
        s = i[i.length - 1],
        o = await e.proxiedFetcher(`/ajax/season/list/${s}`, {
            baseUrl: Jr
        }),
        u = Y(o),
        c = (n = u(".dropdown-item").toArray().find(b => u(b).text() === `Season ${t.season.number}`)) == null ? void 0 : n.attribs["data-id"];
    if (!c) throw new U("season not found");
    const l = await e.proxiedFetcher(`/ajax/season/episodes/${c}`, {
            baseUrl: Jr
        }),
        f = Y(l),
        d = (a = f(".nav-item > a").toArray().map(b => ({
            id: f(b).attr("data-id"),
            title: f(b).attr("title")
        })).find(b => {
            var _;
            return (_ = b.title) == null ? void 0 : _.startsWith(`Eps ${t.episode.number}`)
        })) == null ? void 0 : a.id;
    if (!d) throw new U("episode not found");
    const h = await e.proxiedFetcher(`/ajax/episode/servers/${d}`, {
            baseUrl: Jr
        }),
        p = Y(h);
    return p(".nav-item > a").toArray().map(b => {
        const _ = p(b),
            g = _.attr("title"),
            R = _.attr("data-id");
        if (!g || !R) throw new Error("invalid sources");
        return {
            embed: g,
            episodeId: R
        }
    })
}

function rm(e) {
    let t = e.trim().toLowerCase();
    return t !== "the movie" && t.endsWith("the movie") && (t = t.replace("the movie", "")), t !== "the series" && t.endsWith("the series") && (t = t.replace("the series", "")), t.replace(/['":]/g, "").replace(/[^a-zA-Z0-9]+/g, "_")
}

function yo(e, t) {
    return rm(e) === rm(t)
}

function br(e, t, r) {
    const n = r === void 0 ? !0 : e.releaseYear === r;
    return yo(e.title, t) && n
}
async function nm(e, t) {
    const r = await e.proxiedFetcher(`/search/${t.title.replaceAll(/[^a-z0-9A-Z]/g,"-")}`, {
            baseUrl: Jr
        }),
        n = Y(r),
        i = n(".film_list-wrap > div.flw-item").toArray().map(s => {
            var o;
            const u = n(s),
                c = (o = u.find("div.film-poster > a").attr("href")) == null ? void 0 : o.slice(1),
                l = u.find("div.film-detail > h2 > a").attr("title"),
                f = u.find("div.film-detail > div.fd-infor > span:nth-child(1)").text(),
                d = f.includes("SS") ? f.split("SS")[1] : "0";
            return !c || !l || !f ? null : {
                id: c,
                title: l,
                year: parseInt(f, 10),
                seasons: parseInt(d, 10)
            }
        }).find(s => s ? t.type === "movie" ? br(t, s.title, s.year) : yo(t.title, s.title) && t.season.number < s.seasons + 1 : !1);
    return i ? i.id : null
}
const WT = Ee({
        id: "flixhq",
        name: "FlixHQ",
        rank: 61,
        flags: [H.CORS_ALLOWED],
        disabled: !0,
        async scrapeMovie(e) {
            const t = await nm(e, e.media);
            if (!t) throw new U("no search results match");
            const r = await VT(e, e.media, t),
                n = [];
            for (const a of r) a.embed.toLowerCase() === "upcloud" ? n.push({
                embedId: Nt.id,
                url: await gi(e, a.episodeId)
            }) : a.embed.toLowerCase() === "vidcloud" && n.push({
                embedId: cn.id,
                url: await gi(e, a.episodeId)
            });
            return {
                embeds: n
            }
        },
        async scrapeShow(e) {
            const t = await nm(e, e.media);
            if (!t) throw new U("no search results match");
            const r = await qT(e, e.media, t),
                n = [];
            for (const a of r) a.embed.toLowerCase() === "server upcloud" ? n.push({
                embedId: Nt.id,
                url: await gi(e, a.episodeId)
            }) : a.embed.toLowerCase() === "server vidcloud" && n.push({
                embedId: cn.id,
                url: await gi(e, a.episodeId)
            });
            return {
                embeds: n
            }
        }
    }),
    GT = /'hls': ?'(http.*?)',/,
    HT = /previewThumbnails:\s{.*src:\["([^"]+)"]/,
    el = ue({
        id: "voe",
        name: "voe.sx",
        rank: 180,
        async scrape(e) {
            const t = await e.proxiedFetcher.full(e.url),
                r = t.body,
                n = r.match(GT) ?? [],
                a = r.match(HT),
                i = n[1];
            if (!i) throw new Error("Stream url not found in embed code");
            return {
                stream: [{
                    type: "hls",
                    id: "primary",
                    playlist: i,
                    flags: [H.CORS_ALLOWED, H.IP_LOCKED],
                    captions: [],
                    headers: {
                        Referer: "https://voe.sx"
                    },
                    ...a ? {
                        thumbnailTrack: {
                            type: "vtt",
                            url: new URL(t.finalUrl).origin + a[1]
                        }
                    } : {}
                }]
            }
        }
    });
async function We(e, t, r) {
    const n = Y(t)(`a[title*=${r} i]`),
        a = (n == null ? void 0 : n.attr("data-id")) ?? (n == null ? void 0 : n.attr("data-linkid"));
    if (!a) return;
    const i = await e.proxiedFetcher(`/ajax/sources/${a}`, {
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        },
        baseUrl: or
    });
    if (!(!i.link || i.type !== "iframe")) return i
}
const or = "https://gomovies.sx",
    KT = Ee({
        id: "gomovies",
        name: "GOmovies",
        rank: 60,
        disabled: !0,
        flags: [H.CORS_ALLOWED],
        async scrapeShow(e) {
            var t;
            const r = await e.proxiedFetcher(`/search/${e.media.title.replaceAll(/[^a-z0-9A-Z]/g,"-")}`, {
                    method: "GET",
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    baseUrl: or
                }),
                n = Y(r),
                s = n("div.film-detail").toArray().map(I => {
                    var S, v;
                    const E = (S = n(I).find("h2.film-name a")) == null ? void 0 : S.text(),
                        $ = (v = n(I).find("span.fdi-item:first")) == null ? void 0 : v.text(),
                        A = n(I).find("h2.film-name a").attr("href");
                    return {
                        name: E,
                        year: $,
                        path: A
                    }
                }).find(I => I.name === e.media.title);
            if (!(s != null && s.path)) throw new U("Media not found");
            let o = (t = s.path.split("-").pop()) == null ? void 0 : t.replace("/", "");
            const u = await e.proxiedFetcher(`/ajax/v2/tv/seasons/${o}`, {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    baseUrl: or
                }),
                l = Y(u)(".ss-item").toArray().map(I => ({
                    number: Y(I).text().replace("Season ", ""),
                    dataId: I.attribs["data-id"]
                })),
                f = e.media.season.number,
                d = l.find(I => +I.number === f);
            if (!d) throw new U("Season not found");
            const h = await e.proxiedFetcher(`/ajax/v2/season/episodes/${d.dataId}`, {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    baseUrl: or
                }),
                p = Y(h),
                b = p(".eps-item").toArray().map(I => ({
                    dataId: I.attribs["data-id"],
                    number: p(I).find("strong").text().replace("Eps", "").replace(":", "").trim()
                })),
                _ = e.media.episode.number,
                g = b.find(I => I.number ? +I.number === _ : !1);
            if (!(g != null && g.dataId)) throw new U("Episode not found");
            o = g.dataId;
            const R = await e.proxiedFetcher(`ajax/v2/episode/servers/${o}`, {
                    baseUrl: or,
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    }
                }),
                x = await We(e, R, "upcloud"),
                k = await We(e, R, "vidcloud"),
                F = await We(e, R, "voe"),
                z = await We(e, R, "doodstream"),
                K = await We(e, R, "upstream"),
                j = await We(e, R, "mixdrop"),
                q = [{
                    embedId: Nt.id,
                    url: x == null ? void 0 : x.link
                }, {
                    embedId: cn.id,
                    url: k == null ? void 0 : k.link
                }, {
                    embedId: el.id,
                    url: F == null ? void 0 : F.link
                }, {
                    embedId: Qc.id,
                    url: z == null ? void 0 : z.link
                }, {
                    embedId: ms.id,
                    url: K == null ? void 0 : K.link
                }, {
                    embedId: un.id,
                    url: j == null ? void 0 : j.link
                }].filter(I => I.url).map(I => ({
                    embedId: I.embedId,
                    url: I.url
                }));
            if (q.length === 0) throw new Error("No valid embeds found.");
            return {
                embeds: q
            }
        },
        async scrapeMovie(e) {
            var t;
            const r = await e.proxiedFetcher(`/search/${e.media.title.replaceAll(/[^a-z0-9A-Z]/g,"-")}`, {
                    method: "GET",
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    baseUrl: or
                }),
                n = Y(r),
                s = n("div.film-detail").toArray().map(_ => {
                    var g, R;
                    const x = (g = n(_).find("h2.film-name a")) == null ? void 0 : g.text(),
                        k = (R = n(_).find("span.fdi-item:first")) == null ? void 0 : R.text(),
                        F = n(_).find("h2.film-name a").attr("href");
                    return {
                        name: x,
                        year: k,
                        path: F
                    }
                }).find(_ => _.name === e.media.title && _.year === e.media.releaseYear.toString());
            if (!(s != null && s.path)) throw new U("Media not found");
            const o = (t = s.path.split("-").pop()) == null ? void 0 : t.replace("/", ""),
                u = await e.proxiedFetcher(`ajax/movie/episodes/${o}`, {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    baseUrl: or
                }),
                c = await We(e, u, "upcloud"),
                l = await We(e, u, "vidcloud"),
                f = await We(e, u, "voe"),
                d = await We(e, u, "doodstream"),
                h = await We(e, u, "upstream"),
                p = await We(e, u, "mixdrop"),
                b = [{
                    embedId: Nt.id,
                    url: c == null ? void 0 : c.link
                }, {
                    embedId: cn.id,
                    url: l == null ? void 0 : l.link
                }, {
                    embedId: el.id,
                    url: f == null ? void 0 : f.link
                }, {
                    embedId: Qc.id,
                    url: d == null ? void 0 : d.link
                }, {
                    embedId: ms.id,
                    url: h == null ? void 0 : h.link
                }, {
                    embedId: un.id,
                    url: p == null ? void 0 : p.link
                }].filter(_ => _.url).map(_ => ({
                    embedId: _.embedId,
                    url: _.url
                }));
            if (b.length === 0) throw new Error("No valid embeds found.");
            return {
                embeds: b
            }
        }
    });
async function am(e) {
    let t = [];
    for (const r of e) {
        let n = "";
        if (r.name.includes("Рус")) n = "ru";
        else if (r.name.includes("Укр")) n = "uk";
        else if (r.name.includes("Eng")) n = "en";
        else continue;
        t.push({
            id: r.url,
            url: r.url,
            language: n,
            type: "vtt",
            hasCorsRestrictions: !1
        })
    }
    return t = kf(t), t
}
const im = "https://api.insertunit.ws/",
    XT = Ee({
        id: "insertunit",
        name: "Insertunit",
        disabled: !1,
        rank: 60,
        flags: [H.CORS_ALLOWED],
        async scrapeShow(e) {
            const t = await e.fetcher(`/embed/imdb/${e.media.imdbId}`, {
                baseUrl: im
            });
            e.progress(30);
            const n = /seasons:(.*)/.exec(t);
            if (n === null || n[1] === null) throw new U("No result found");
            e.progress(60);
            const i = JSON.parse(n[1]).find(u => u.season === e.media.season.number && !u.blocked),
                s = i == null ? void 0 : i.episodes.find(u => u.episode.includes(e.media.episode.number.toString()));
            if (!(s != null && s.hls)) throw new U("No result found");
            let o = [];
            return s.cc != null && (o = await am(s.cc)), e.progress(95), {
                embeds: [],
                stream: [{
                    id: "primary",
                    playlist: s.hls,
                    type: "hls",
                    flags: [H.CORS_ALLOWED],
                    captions: o
                }]
            }
        },
        async scrapeMovie(e) {
            const t = await e.fetcher(`/embed/imdb/${e.media.imdbId}`, {
                baseUrl: im
            });
            e.progress(35);
            const n = /hls: "([^"]*)/.exec(t);
            if (n === null || n[1] === null) throw new U("No result found");
            e.progress(75);
            const i = /cc: (.*)/.exec(t);
            let s = [];
            if (i != null && i[1] != null) {
                const o = JSON.parse(i[1]);
                s = await am(o)
            }
            return e.progress(90), {
                embeds: [],
                stream: [{
                    id: "primary",
                    type: "hls",
                    playlist: n[1],
                    flags: [H.CORS_ALLOWED],
                    captions: s
                }]
            }
        }
    }),
    gs = "https://kissasian.sh",
    YT = [{
        type: $1.id,
        id: "mp"
    }, {
        type: I1.id,
        id: "sb"
    }];
async function sm(e, t) {
    let r = await Promise.all(YT.map(async n => {
        if (!t.url) throw new U("Episode not found");
        const a = await e.proxiedFetcher(`${t.url}&s=${n.id}`, {
                baseUrl: gs,
                headers: {
                    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                    "accept-language": "en-US,en;q=0.9",
                    "cache-control": "no-cache",
                    pragma: "no-cache",
                    "sec-ch-ua": '"Not)A;Brand";v="24", "Chromium";v="116"',
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": '"macOS"',
                    "sec-fetch-dest": "document",
                    "sec-fetch-mode": "navigate",
                    "sec-fetch-site": "cross-site",
                    "sec-fetch-user": "?1",
                    "upgrade-insecure-requests": "1",
                    cookie: "__rd=; ASP.NET_SessionId=jwnl2kmlw5h4mfdaxvpk30q0; k_token=OKbJDFNx3rUtaw7iAA6UxMKSJb79lgZ2X2rVC9aupJhycYQKVSLaW1y2B4K%2f%2fo3i6BuzhXgfkJGmKlKH6LpNlKPPpZUk31n9DapfMdJgjlLExgrPS3jpSKwGnNUI%2bOpNpZu9%2fFnkLZRxvVKCa8APMxrck1tYkKXWqfyJJh8%2b7hQTI1wfAOU%2fLEouHhtQGL%2fReTzElw2LQ0XSL1pjs%2fkWW3rM3of2je7Oo13I%2f7olLFuiJUVWyNbn%2fYKSgNrm%2bQ3p"
                }
            }),
            s = Y(a)("#my_video_1").attr("src");
        if (!s) throw new Error("Embed not found");
        return {
            embedId: n.id,
            url: s
        }
    }));
    return r = r.filter(n => !!n.url), r
}

function om(e) {
    return e(".episodeSub").toArray().map(r => {
        var n;
        const a = (n = e(r).find(".episodeSub a").text().split("Episode")[1]) == null ? void 0 : n.trim(),
            i = e(r).find(".episodeSub a").attr("href");
        return {
            number: a,
            url: i
        }
    }).filter(r => !!r.url)
}
async function um(e, t, r) {
    const n = new Nf;
    n.append("keyword", `${t} ${r??""}`.trim()), n.append("type", "Drama");
    const a = await e.proxiedFetcher("/Search/SearchSuggest", {
            baseUrl: gs,
            method: "POST",
            body: n
        }),
        i = Y(a);
    return Array.from(i("a")).map(s => ({
        name: i(s).text(),
        url: s.attribs.href
    }))
}
const JT = Ee({
    id: "kissasian",
    name: "KissAsian",
    rank: 40,
    flags: [H.CORS_ALLOWED],
    disabled: !0,
    async scrapeShow(e) {
        const t = e.media.season.number,
            r = e.media.episode.number,
            n = await um(e, e.media.title, t),
            a = n.find(l => {
                var f;
                return ((f = l.name) == null ? void 0 : f.toLowerCase()) === e.media.title.toLowerCase()
            }) ?? n[0];
        if (!a) throw new U("Drama not found");
        e.progress(30);
        const i = await e.proxiedFetcher(a.url, {
                baseUrl: gs
            }),
            s = Y(i),
            u = (await om(s)).find(l => l.number === `${r}`);
        if (!(u != null && u.url)) throw new U("Episode not found");
        return e.progress(70), {
            embeds: await sm(e, u)
        }
    },
    async scrapeMovie(e) {
        const t = await um(e, e.media.title, void 0),
            r = t.find(u => {
                var c;
                return ((c = u.name) == null ? void 0 : c.toLowerCase()) === e.media.title.toLowerCase()
            }) ?? t[0];
        if (!r) throw new U("Drama not found");
        e.progress(30);
        const n = await e.proxiedFetcher(r.url, {
                baseUrl: gs
            }),
            a = Y(n),
            s = om(a)[0];
        if (!(s != null && s.url)) throw new U("Episode not found");
        return e.progress(70), {
            embeds: await sm(e, s)
        }
    }
});
async function QT(e, t, r) {
    let n = "";
    return r.type === "show" ? n = "/v1/episodes/view" : r.type === "movie" && (n = "/v1/movies/view"), await e.fetcher(n, {
        baseUrl: ga,
        query: {
            expand: "streams,subtitles",
            id: t
        }
    })
}
async function ZT(e, t, r) {
    const n = await QT(e, t, r),
        a = n.streams,
        i = ["auto", "1080p", "1080", "720p", "720", "480p", "480", "240p", "240", "360p", "360", "144", "144p"];
    let s = null;
    for (const u of i) a[u] && !s && (s = a[u]);
    let o = [];
    for (const u of n.subtitles) {
        const c = er(u.language);
        c && o.push({
            id: u.url,
            type: "vtt",
            url: `${ga}${u.url}`,
            hasCorsRestrictions: !1,
            language: c
        })
    }
    return o = kf(o), {
        playlist: s,
        captions: o
    }
}
const ga = "https://lmscript.xyz";
async function ex(e, t) {
    if (t.type === "show") return (await e.fetcher("/v1/shows", {
        baseUrl: ga,
        query: {
            "filters[q]": t.title
        }
    })).items.find(i => br(t, i.title, Number(i.year)));
    if (t.type === "movie") return (await e.fetcher("/v1/movies", {
        baseUrl: ga,
        query: {
            "filters[q]": t.title
        }
    })).items.find(i => br(t, i.title, Number(i.year)))
}
async function tx(e, t, r) {
    var n;
    let a = null;
    if (t.type === "movie") a = r.id_movie;
    else if (t.type === "show") {
        const o = (n = (await e.fetcher("/v1/shows", {
            baseUrl: ga,
            query: {
                expand: "episodes",
                id: r.id_show
            }
        })).episodes) == null ? void 0 : n.find(u => Number(u.season) === Number(t.season.number) && Number(u.episode) === Number(t.episode.number));
        o && (a = o.id)
    }
    if (a === null) throw new U("Not found");
    return await ZT(e, a, t)
}
async function cm(e) {
    const t = await ex(e, e.media);
    if (!t) throw new U("Media not found");
    e.progress(30);
    const r = await tx(e, e.media, t);
    if (!r.playlist) throw new U("No video found");
    return e.progress(60), {
        embeds: [],
        stream: [{
            id: "primary",
            playlist: r.playlist,
            type: "hls",
            flags: [H.IP_LOCKED],
            captions: r.captions
        }]
    }
}
const rx = Ee({
        id: "lookmovie",
        name: "LookMovie",
        disabled: !0,
        rank: 50,
        flags: [H.IP_LOCKED],
        scrapeShow: cm,
        scrapeMovie: cm
    }),
    lm = atob("aHR0cHM6Ly9mc2IuOG1ldDNkdGpmcmNxY2hjb25xcGtsd3hzeGIyb2N1bWMuc3RyZWFt"),
    fm = "https://remotestre.am",
    vi = "https://remotestre.am/",
    nx = Ee({
        id: "remotestream",
        name: "Remote Stream",
        disabled: !0,
        rank: 20,
        flags: [H.CORS_ALLOWED],
        async scrapeShow(e) {
            var t;
            const r = e.media.season.number,
                n = e.media.episode.number,
                a = `${lm}/Shows/${e.media.tmdbId}/${r}/${n}/${n}.m3u8`;
            if (e.progress(30), !((t = (await e.proxiedFetcher.full(a, {
                    method: "GET",
                    readHeaders: ["content-type"],
                    headers: {
                        Referer: vi
                    }
                })).headers.get("content-type")) != null && t.toLowerCase().includes("application/x-mpegurl"))) throw new U("No watchable item found");
            return e.progress(90), {
                embeds: [],
                stream: [{
                    id: "primary",
                    captions: [],
                    playlist: a,
                    type: "hls",
                    flags: [H.CORS_ALLOWED],
                    preferredHeaders: {
                        Referer: vi,
                        Origin: fm
                    }
                }]
            }
        },
        async scrapeMovie(e) {
            var t;
            const r = `${lm}/Movies/${e.media.tmdbId}/${e.media.tmdbId}.m3u8`;
            if (e.progress(30), !((t = (await e.proxiedFetcher.full(r, {
                    method: "GET",
                    readHeaders: ["content-type"],
                    headers: {
                        Referer: vi
                    }
                })).headers.get("content-type")) != null && t.toLowerCase().includes("application/x-mpegurl"))) throw new U("No watchable item found");
            return e.progress(90), {
                embeds: [],
                stream: [{
                    id: "primary",
                    captions: [],
                    playlist: r,
                    type: "hls",
                    flags: [H.CORS_ALLOWED],
                    preferredHeaders: {
                        Referer: vi,
                        Origin: fm
                    }
                }]
            }
        }
    });
async function dm(e) {
    const t = {
            module: "Search4",
            page: "1",
            type: "all",
            keyword: e.media.title,
            pagelimit: "20"
        },
        r = (await Pf(e, t, !0)).data.list;
    e.progress(50);
    const n = r.find(o => yo(o.title, e.media.title) && o.year === Number(e.media.releaseYear));
    if (!n) throw new U("No entry found");
    const a = n.id,
        i = e.media.type === "show" ? e.media.season.number : "",
        s = e.media.type === "show" ? e.media.episode.number : "";
    return {
        embeds: [{
            embedId: S1.id,
            url: `/${e.media.type}/${a}/${i}/${s}`
        }]
    }
}
const ax = Ee({
    id: "showbox",
    name: "Showbox",
    rank: 150,
    disabled: !0,
    flags: [H.CORS_ALLOWED, H.CF_BLOCKED],
    scrapeShow: dm,
    scrapeMovie: dm
});

function ix(e, t) {
    let r = "";
    const n = t.length;
    for (let a = 0; a < e.length; a += 2) {
        const i = parseInt(e.substr(a, 2), 16),
            s = t.charCodeAt(a / 2 % n);
        r += String.fromCharCode(i ^ s)
    }
    return r
}
async function x1(e, t) {
    const r = [];
    let n = await e.proxiedFetcher(t, {
            baseUrl: Ui
        }),
        a = Y(n);
    const i = a(".server[data-hash]").toArray().map(s => a(s).attr("data-hash")).filter(s => s !== void 0);
    for (const s of i) {
        n = await e.proxiedFetcher(`/rcp/${s}`, {
            baseUrl: Zc,
            headers: {
                referer: Ui
            }
        }), a = Y(n);
        const o = a("#hidden").attr("data-h"),
            u = a("body").attr("data-i");
        if (!o || !u) throw new Error("Failed to find encoded iframe src");
        let c = ix(o, u);
        c.startsWith("//") && (c = `https:${c}`);
        const {
            finalUrl: l
        } = await e.proxiedFetcher.full(c, {
            method: "HEAD",
            headers: {
                referer: Ui
            }
        }), f = {
            embedId: "",
            url: l
        };
        switch (new URL(l).host) {
            case "vidsrc.stream":
                f.embedId = T1.id;
                break;
            case "streambucket.net":
                f.embedId = A1.id;
                break;
            case "2embed.cc":
            case "www.2embed.cc":
                break;
            case "player-cdn.com":
                break;
            default:
                throw new Error(`Failed to find VidSrc embed source for ${l}`)
        }
        f.embedId !== "" && r.push(f)
    }
    return r
}
async function sx(e) {
    return x1(e, `/embed/${e.media.tmdbId}`)
}
async function ox(e) {
    const t = await e.proxiedFetcher(`/embed/${e.media.tmdbId}`, {
            baseUrl: Ui
        }),
        n = Y(t)(`.ep[data-s="${e.media.season.number}"][data-e="${e.media.episode.number}"]`).first();
    if (n.length === 0) throw new Error("failed to find episode element");
    const a = n.attr("data-iframe");
    if (!a) throw new Error("failed to find episode starting URL");
    return x1(e, a)
}
async function ux(e) {
    return {
        embeds: await sx(e)
    }
}
async function cx(e) {
    return {
        embeds: await ox(e)
    }
}
const lx = Ee({
    id: "vidsrc",
    name: "VidSrc",
    rank: 90,
    disabled: !0,
    flags: [],
    scrapeMovie: ux,
    scrapeShow: cx
});
async function fx(e, t) {
    const r = e.media.type === "movie" ? "list" : "servers",
        n = await e.proxiedFetcher(`/ajax/episode/${r}/${t}`, {
            baseUrl: An
        }),
        a = Y(n);
    return a(".nav-item a").toArray().map(i => {
        const s = e.media.type === "movie" ? "data-linkid" : "data-id",
            o = a(i),
            u = o.attr("title"),
            c = o.attr(s);
        if (!u || !c) throw new Error("invalid sources");
        return {
            embed: u,
            episodeId: c
        }
    })
}
async function dx(e, t) {
    const r = await e.proxiedFetcher(`/ajax/sources/${t}`, {
        baseUrl: An
    });
    return r.type !== "iframe" ? null : r.link
}
async function hx(e, t, r) {
    const n = await e.proxiedFetcher(`/ajax/season/list/${r}`, {
            baseUrl: An
        }),
        a = Y(n),
        s = a(".dropdown-menu a").toArray().map(o => {
            var u;
            const c = a(o),
                l = c.attr("data-id"),
                f = (u = c.html()) == null ? void 0 : u.split(" ")[1];
            if (!l || !f || Number.isNaN(Number(f))) throw new Error("invalid season");
            return {
                id: l,
                season: Number(f)
            }
        }).find(o => o.season === t.season.number);
    return s ? s.id : null
}
async function px(e, t, r) {
    const n = /Eps (\d*):/,
        a = await e.proxiedFetcher(`/ajax/season/episodes/${r}`, {
            baseUrl: An
        }),
        i = Y(a),
        o = i(".eps-item").toArray().map(u => {
            const c = i(u),
                l = c.attr("data-id"),
                f = c.attr("title");
            if (!l || !f) throw new Error("invalid episode");
            const d = f.match(n);
            if (!d || Number.isNaN(Number(d[1]))) throw new Error("invalid episode");
            return {
                id: l,
                episode: Number(d[1])
            }
        }).find(u => u.episode === t.episode.number);
    return o ? o.id : null
}
const An = "https://zoechip.cc";
async function mx(e, t) {
    const r = await dx(e, t.episodeId);
    if (r) {
        const n = {
            embedId: "",
            url: r
        };
        switch (new URL(r).host) {
            case "rabbitstream.net":
                n.embedId = Nt.id;
                break;
            case "upstream.to":
                n.embedId = ms.id;
                break;
            case "mixdrop.co":
                n.embedId = un.id;
                break;
            default:
                return null
        }
        return n
    }
}
async function k1(e, t) {
    const r = await fx(e, t),
        n = [];
    for (const a of r) {
        const i = await mx(e, a);
        if (i) {
            const s = n.find(o => o.embedId === Nt.id);
            i.embedId === Nt.id && s && (i.embedId = cn.id), n.push(i)
        }
    }
    return {
        embeds: n
    }
}
async function P1(e, t) {
    const r = t.title.toLocaleLowerCase().replace(/ /g, "-"),
        n = await e.proxiedFetcher(`/search/${r}`, {
            baseUrl: An
        }),
        a = Y(n);
    return a(".film_list-wrap .flw-item .film-detail").toArray().map(i => {
        const s = a(i),
            o = s.find(".film-name a"),
            u = s.find(".fd-infor"),
            c = o.attr("title"),
            l = o.attr("href"),
            f = u.find(".fdi-type").html();
        let d = u.find(".fdi-item").html();
        const h = l == null ? void 0 : l.split("-").pop();
        if (!c || !l || !f) return null;
        if (!d || Number.isNaN(Number(d)))
            if (f === "TV") d = "0";
            else return null;
        return h ? {
            title: c,
            year: Number(d),
            id: h,
            type: f,
            href: l
        } : null
    })
}
async function gx(e, t) {
    const n = (await P1(e, t)).find(a => a && a.type === "Movie" && br(t, a.title, a.year));
    return n ? n.id : null
}
async function vx(e, t) {
    const r = /<\/strong><\/span> (\d.*)-\d.*-\d.*/,
        a = (await P1(e, t)).filter(i => i && i.type === "TV" && br(t, i.title));
    for (const i of a) {
        if (!i) continue;
        const o = (await e.proxiedFetcher(i.href, {
            baseUrl: An
        })).match(r);
        if (o) {
            const u = Number(o[1]);
            if (!Number.isNaN(u) && br(t, i.title, u)) return i.id
        }
    }
    return null
}
async function yx(e) {
    const t = await gx(e, e.media);
    if (!t) throw new U("no search results match");
    return k1(e, t)
}
async function bx(e) {
    const t = await vx(e, e.media);
    if (!t) throw new U("no search results match");
    const r = await hx(e, e.media, t);
    if (!r) throw new U("no season found");
    const n = await px(e, e.media, r);
    if (!n) throw new U("no episode found");
    return k1(e, n)
}
const wx = Ee({
        id: "zoechip",
        name: "ZoeChip",
        rank: 62,
        flags: [H.CORS_ALLOWED],
        disabled: !0,
        scrapeMovie: yx,
        scrapeShow: bx
    }),
    Ex = "https://ridomovies.tv/",
    L1 = ue({
        id: "closeload",
        name: "CloseLoad",
        rank: 106,
        async scrape(e) {
            var t;
            const r = new URL(e.url).origin,
                n = await e.proxiedFetcher(e.url, {
                    headers: {
                        referer: Ex
                    }
                }),
                a = Y(n),
                i = a("track").map((f, d) => {
                    const h = a(d),
                        p = `${r}${h.attr("src")}`,
                        y = h.attr("label") ?? "",
                        b = er(y),
                        _ = Tr(p);
                    return !b || !_ ? null : {
                        id: p,
                        language: b,
                        hasCorsRestrictions: !0,
                        type: _,
                        url: p
                    }
                }).get().filter(f => f !== null),
                s = a("script").filter((f, d) => {
                    var h;
                    const p = a(d);
                    return (p.attr("type") === "text/javascript" && ((h = p.html()) == null ? void 0 : h.includes("p,a,c,k,e,d"))) ?? !1
                }).html();
            if (!s) throw new Error("Couldn't find eval code");
            const o = Qt(s),
                c = (t = /var\s+(\w+)\s*=\s*"([^"]+)";/g.exec(o)) == null ? void 0 : t[2];
            if (!c) throw new U("Unable to find source url");
            return {
                stream: [{
                    id: "primary",
                    type: "hls",
                    playlist: atob(c),
                    captions: i,
                    flags: [H.IP_LOCKED],
                    headers: {
                        Referer: "https://closeload.top/",
                        Origin: "https://closeload.top"
                    }
                }]
            }
        }
    }),
    Sx = /eval\((.*)\)/g,
    $x = /file:"(.*?)"/g,
    Ax = ue({
        id: "filemoon",
        name: "Filemoon",
        rank: 400,
        scrape: async e => {
            const t = await e.proxiedFetcher(e.url, {
                    headers: {
                        referer: e.url
                    }
                }),
                n = Y(t)("script").text().match(Sx);
            if (!n) throw new Error("Failed to find eval code");
            const a = Qt(n[0]),
                i = $x.exec(a);
            if (!(i != null && i[1])) throw new Error("Failed to find file");
            const o = new URL(e.url).searchParams.get("sub.info"),
                u = [];
            if (o) {
                const c = await e.proxiedFetcher(o);
                for (const l of c) {
                    const f = er(l.label),
                        d = Tr(l.file);
                    !f || !d || u.push({
                        id: l.file,
                        url: l.file,
                        type: d,
                        language: f,
                        hasCorsRestrictions: !1
                    })
                }
            }
            return {
                stream: [{
                    id: "primary",
                    type: "hls",
                    playlist: i[1],
                    flags: [],
                    captions: u
                }]
            }
        }
    }),
    Ox = "https://ridomovies.tv/",
    D1 = ue({
        id: "ridoo",
        name: "Ridoo",
        rank: 105,
        async scrape(e) {
            var t;
            const r = await e.proxiedFetcher(e.url, {
                    headers: {
                        referer: Ox
                    }
                }),
                a = (t = /file:"([^"]+)"/g.exec(r)) == null ? void 0 : t[1];
            if (!a) throw new U("Unable to find source url");
            return {
                stream: [{
                    id: "primary",
                    type: "hls",
                    playlist: a,
                    captions: [],
                    flags: [H.CORS_ALLOWED]
                }]
            }
        }
    });

function _x(e) {
    const t = ["U0ZML2RVN0IvRGx4", "MGNhL0JWb0kvTlM5", "Ym94LzJTSS9aU0Zj", "SGJ0L1dGakIvN0dX", "eE52L1QwOC96N0Yz"];
    let r = e.slice(2);
    for (let n = 4; n > -1; n--) r = r.replace(`//${t[n]}`, "");
    return atob(r)
}
const Lf = ue({
        id: "smashystream-f",
        name: "SmashyStream (F)",
        rank: 71,
        async scrape(e) {
            var t, r;
            const n = await e.proxiedFetcher(e.url, {
                headers: {
                    Referer: e.url
                }
            });
            if (!n.sourceUrls[0]) throw new U("No watchable item found");
            const a = _x(n.sourceUrls[0]);
            if (!a.includes(".m3u8")) throw new Error("Failed to decode");
            const i = ((r = (t = n.subtitles) == null ? void 0 : t.match(/\[([^\]]+)\](https?:\/\/\S+?)(?=,\[|$)/g)) == null ? void 0 : r.map(s => {
                const o = s.match(/\[([^\]]+)\](https?:\/\/\S+?)(?=,\[|$)/);
                if (o) {
                    const [, u, c] = o;
                    if (u && c) {
                        const l = er(u.replace(/ - .*/, "")),
                            f = Tr(c);
                        return !l || !f ? null : {
                            id: c,
                            url: c.replace(",", ""),
                            language: l,
                            type: f,
                            hasCorsRestrictions: !1
                        }
                    }
                }
                return null
            }).filter(s => s !== null)) ?? [];
            return {
                stream: [{
                    id: "primary",
                    playlist: a,
                    type: "hls",
                    flags: [H.CORS_ALLOWED],
                    captions: i
                }]
            }
        }
    }),
    F1 = ue({
        id: "smashystream-o",
        name: "SmashyStream (O)",
        rank: 70,
        async scrape(e) {
            return {
                stream: (await Lf.scrape(e)).stream
            }
        }
    }),
    Rx = ue({
        id: "streamtape",
        name: "Streamtape",
        rank: 160,
        async scrape(e) {
            var t;
            const n = (await e.proxiedFetcher(e.url)).match(/robotlink'\).innerHTML = (.*)'/);
            if (!n) throw new Error("No match found");
            const [a, i] = ((t = n == null ? void 0 : n[1]) == null ? void 0 : t.split("+ ('")) ?? [];
            if (!a || !i) throw new Error("No match found");
            const s = `https:${a==null?void 0:a.replace(/'/g,"").trim()}${i==null?void 0:i.substring(3).trim()}`;
            return {
                stream: [{
                    id: "primary",
                    type: "file",
                    flags: [H.CORS_ALLOWED, H.IP_LOCKED],
                    captions: [],
                    qualities: {
                        unknown: {
                            type: "mp4",
                            url: s
                        }
                    },
                    headers: {
                        Referer: "https://streamtape.com"
                    }
                }]
            }
        }
    }),
    Cx = /(eval\(function\(p,a,c,k,e,d\).*\)\)\))/,
    Ix = /src:"(https:\/\/[^"]+)"/,
    Nx = ue({
        id: "streamvid",
        name: "Streamvid",
        rank: 215,
        async scrape(e) {
            const r = (await e.proxiedFetcher(e.url)).match(Cx);
            if (!r) throw new Error("streamvid packed not found");
            const a = Qt(r[1]).match(Ix);
            if (!a) throw new Error("streamvid link not found");
            return {
                stream: [{
                    type: "hls",
                    id: "primary",
                    playlist: a[1],
                    flags: [H.CORS_ALLOWED],
                    captions: []
                }]
            }
        }
    }),
    Tx = "WXrUARXb1aDLaZjI",
    xx = e => {
        const t = e.replace(/_/g, "/").replace(/-/g, "+"),
            r = atob(t),
            n = new Uint8Array(r.length);
        for (let a = 0; a < n.length; a += 1) n[a] = r.charCodeAt(a);
        return n
    },
    tl = (e, t) => {
        const r = Array.from(Array(256).keys());
        let n = 0;
        for (let s = 0; s < 256; s += 1) {
            n = (n + r[s] + e.charCodeAt(s % e.length)) % 256;
            const o = r[s];
            r[s] = r[n], r[n] = o
        }
        n = 0;
        let a = 0,
            i = "";
        for (let s = 0; s < t.length; s += 1) {
            n = (n + 1) % 256, a = (a + r[n]) % 256;
            const o = r[n];
            r[n] = r[a], r[a] = o, typeof t[s] == "string" ? i += String.fromCharCode(t[s].charCodeAt(0) ^ r[(r[n] + r[a]) % 256]) : typeof t[s] == "number" && (i += String.fromCharCode(t[s] ^ r[(r[n] + r[a]) % 256]))
        }
        return i
    },
    kx = e => {
        const t = xx(e),
            r = tl(Tx, t);
        return decodeURIComponent(decodeURIComponent(r))
    },
    j1 = "https://vidplay.online",
    Px = async e => {
        var t;
        const r = await e.proxiedFetcher("https://github.com/Ciarands/vidsrc-keys/blob/main/keys.json"),
            n = /"rawLines":\s*\[([\s\S]*?)\]/,
            a = (t = r.match(n)) == null ? void 0 : t[1];
        if (!a) throw new Error("No keys found");
        return JSON.parse(`${a.substring(1).replace(/\\"/g,'"')}]`)
    }, Lx = async e => {
        const r = new URL(e.url).pathname.replace("/e/", ""),
            n = await Px(e),
            a = tl(n[0], r),
            i = tl(n[1], a);
        return btoa(i).replace("/", "_")
    }, Dx = async e => {
        var t;
        const r = await Lx(e),
            a = (t = (await e.proxiedFetcher("/futoken", {
                baseUrl: j1,
                headers: {
                    referer: e.url
                }
            })).match(/var\s+k\s*=\s*'([^']+)'/)) == null ? void 0 : t[1];
        if (!a) throw new Error("No fuKey found");
        const i = [];
        for (let s = 0; s < r.length; s += 1) i.push(a.charCodeAt(s % a.length) + r.charCodeAt(s));
        return `${a},${i.join(",")}`
    }, Fx = async e => {
        const t = await Dx(e);
        return xf(`/mediainfo/${t}`, {
            baseUrl: j1,
            query: {
                ...Object.fromEntries(new URL(e.url).searchParams.entries()),
                autostart: "true"
            }
        })
    }, jx = ue({
        id: "vidplay",
        name: "VidPlay",
        rank: 401,
        scrape: async e => {
            const t = await Fx(e),
                r = await e.proxiedFetcher(t, {
                    headers: {
                        referer: e.url
                    }
                });
            if (typeof r.result == "number") throw new Error("File not found");
            const n = r.result.sources[0].file,
                a = r.result.tracks.find(c => c.kind === "thumbnails");
            let i;
            a && (i = {
                type: "vtt",
                url: a.file
            });
            const s = new URL(e.url),
                o = s.searchParams.get("sub.info"),
                u = [];
            if (o) {
                const c = await e.proxiedFetcher(o);
                for (const l of c) {
                    const f = er(l.label),
                        d = Tr(l.file);
                    !f || !d || u.push({
                        id: l.file,
                        url: l.file,
                        type: d,
                        language: f,
                        hasCorsRestrictions: !1
                    })
                }
            }
            return {
                stream: [{
                    id: "primary",
                    type: "hls",
                    playlist: n,
                    flags: [],
                    headers: {
                        Referer: s.origin,
                        Origin: s.origin
                    },
                    captions: u,
                    thumbnailTrack: i
                }]
            }
        }
    });
async function Ux(e, t) {
    var r;
    const n = await e.proxiedFetcher("https://cloud.mail.ru/public/uaRH/2PYWcJRpH"),
        i = (r = /"videowl_view":\{"count":"(\d+)","url":"([^"]+)"\}/g.exec(n)) == null ? void 0 : r[2];
    if (!i) throw new U("Failed to get videoOwlUrl");
    return `${i}/0p/${btoa(t)}.m3u8?${new URLSearchParams({double_encode:"1"})}`
}
const rl = ue({
    id: "warezcdnembedhls",
    name: "WarezCDN HLS",
    rank: 83,
    async scrape(e) {
        const t = await m1(e);
        if (!t) throw new U("can't get file id");
        const r = await Ux(e, t);
        return {
            stream: [{
                id: "primary",
                type: "hls",
                flags: [H.IP_LOCKED],
                captions: [],
                playlist: r
            }]
        }
    }
});

function Mi(e) {
    return Object.entries(e).map(([t, r]) => Tf.serialize(t, r)).join("; ")
}

function nl(e) {
    return TN.parse(e, {
        map: !0
    })
}
const Mx = ue({
        id: "wootly",
        name: "wootly",
        rank: 172,
        async scrape(e) {
            var t, r;
            const n = "https://www.wootly.ch",
                a = await e.proxiedFetcher.full(e.url, {
                    method: "GET",
                    readHeaders: ["Set-Cookie"]
                }),
                s = nl(a.headers.get("Set-Cookie") || "").wootsses.value;
            let o = Y(a.body);
            const u = o("iframe").attr("src") ?? "",
                c = await e.proxiedFetcher.full(u, {
                    method: "GET",
                    readHeaders: ["Set-Cookie"],
                    headers: {
                        cookie: Mi({
                            wootsses: s
                        })
                    }
                }),
                f = nl(c.headers.get("Set-Cookie") || "").wooz.value,
                d = await e.proxiedFetcher(u, {
                    method: "POST",
                    body: new URLSearchParams({
                        qdf: "1"
                    }),
                    headers: {
                        cookie: Mi({
                            wooz: f
                        }),
                        Referer: u
                    }
                });
            o = Y(d);
            const h = o("script").html() ?? "",
                p = (t = h.match(/tk=([^;]+)/)) == null ? void 0 : t[0].replace(/tk=|["\s]/g, ""),
                y = (r = h.match(/vd=([^,]+)/)) == null ? void 0 : r[0].replace(/vd=|["\s]/g, "");
            if (!p || !y) throw new Error("wootly source not found");
            const b = await e.proxiedFetcher("/grabd", {
                baseUrl: n,
                query: {
                    t: p,
                    id: y
                },
                method: "GET",
                headers: {
                    cookie: Mi({
                        wooz: f,
                        wootsses: s
                    })
                }
            });
            if (!b) throw new Error("wootly source not found");
            return {
                stream: [{
                    id: "primary",
                    type: "file",
                    flags: [H.IP_LOCKED],
                    captions: [],
                    qualities: {
                        unknown: {
                            type: "mp4",
                            url: b
                        }
                    }
                }]
            }
        }
    }),
    Df = "https://www.goojara.to",
    Mu = "https://ww1.goojara.to";
async function Bx(e, t) {
    const r = await e.fetcher.full(`/${t}`, {
            baseUrl: Mu,
            headers: {
                Referer: Df,
                cookie: ""
            },
            readHeaders: ["Set-Cookie"],
            method: "GET"
        }),
        n = nl(r.headers.get("Set-Cookie") || ""),
        a = r.body.split("_3chk('")[1].split("'")[0],
        i = r.body.split("_3chk('")[1].split("'")[2];
    let s = "",
        o = "";
    n && n.aGooz && a && i && (s = n.aGooz.value, o = Mi({
        aGooz: s,
        [a]: i
    }));
    const u = Y(r.body),
        c = u("a").map((d, h) => u(h).attr("href")).get().filter(d => d && d.includes(`${Mu}/go.php`)),
        l = await Promise.all(c.map(d => e.fetcher.full(d, {
            headers: {
                cookie: o,
                Referer: Mu
            },
            method: "GET"
        }).catch(() => null))),
        f = [];
    for (const d of l)
        if (d) {
            const h = ["wootly", "upstream", "mixdrop", "dood"].find(p => d.finalUrl.includes(p));
            h && f.push({
                embedId: h,
                url: d.finalUrl
            })
        } return f
}
let vs;
const U1 = {
    cookie: "aGooz=t9pmkdtef1b3lg3pmo1u2re816; bd9aa48e=0d7b89e8c79844e9df07a2; _b414=2151C6B12E2A88379AFF2C0DD65AC8298DEC2BF4; 9d287aaa=8f32ad589e1c4288fe152f",
    Referer: "https://www.goojara.to/"
};
async function zx(e, t) {
    vs = await e.fetcher("/xhrr.php", {
        baseUrl: Df,
        headers: U1,
        method: "POST",
        body: new URLSearchParams({
            q: t.title
        })
    });
    const r = Y(vs),
        n = [];
    return r(".mfeed > li").each((i, s) => {
        var o;
        const u = r(s).find("strong").text(),
            c = r(s).text().match(/\((\d{4})\)/),
            l = r(s).find("div").attr("class"),
            f = l === "it" ? "show" : l === "im" ? "movie" : "",
            d = c ? c[1] : "",
            h = (o = r(s).find("a").attr("href")) == null ? void 0 : o.split("/")[3];
        if (!h) throw new U("Not found");
        t.type === f && n.push({
            title: u,
            year: d,
            slug: h,
            type: f
        })
    }), n.find(i => br(t, i.title, Number(i.year)))
}
async function Vx(e, t, r) {
    let n = null;
    if (t.type === "movie") n = r.slug;
    else if (t.type === "show") {
        vs = await e.fetcher(`/${r.slug}`, {
            baseUrl: Df,
            headers: U1,
            method: "GET",
            query: {
                s: t.season.number.toString()
            }
        });
        let i = "";
        const s = Y(vs);
        s(".seho").each((o, u) => {
            const c = s(u).find(".seep .sea").text().trim();
            if (parseInt(c, 10) === t.episode.number) {
                const l = s(u).find(".snfo h1 a").attr("href"),
                    f = l == null ? void 0 : l.match(/\/([a-zA-Z0-9]+)$/);
                if (f && f[1]) return i = f[1], !1
            }
        }), n = i
    }
    if (n === null) throw new U("Not found");
    return await Bx(e, n)
}
async function hm(e) {
    const t = await zx(e, e.media);
    if (!t) throw new U("Media not found");
    e.progress(30);
    const r = await Vx(e, e.media, t);
    if ((r == null ? void 0 : r.length) === 0) throw new U("No embeds found");
    return e.progress(60), {
        embeds: r
    }
}
const qx = Ee({
    id: "goojara",
    name: "Goojara",
    rank: 70,
    flags: [],
    disabled: !0,
    scrapeShow: hm,
    scrapeMovie: hm
});

function Wx(e) {
    switch (e.toLowerCase().replace("p", "")) {
        case "360":
            return "360";
        case "480":
            return "480";
        case "720":
            return "720";
        case "1080":
            return "1080";
        case "2160":
            return "4k";
        case "4k":
            return "4k";
        default:
            return "unknown"
    }
}

function Gx() {
    const e = () => Math.floor(Math.random() * 16).toString(16),
        t = r => Array.from({
            length: r
        }, e).join("");
    return `${t(8)}-${t(4)}-${t(4)}-${t(4)}-${t(12)}`
}

function Hx(e) {
    if (!e || typeof e == "boolean") return [];
    const t = e.split(","),
        r = [];
    return t.forEach(n => {
        const a = n.match(/\[([^\]]+)\](https?:\/\/\S+?)(?=,\[|$)/);
        if (a) {
            const i = Tr(a[2]),
                s = er(a[1]);
            if (!i || !s) return;
            r.push({
                id: a[2],
                language: s,
                hasCorsRestrictions: !1,
                type: i,
                url: a[2]
            })
        }
    }), r
}

function Kx(e) {
    if (!e) throw new U("No video links found");
    const t = e.split(","),
        r = {};
    return t.forEach(n => {
        const a = n.match(/\[([^]+)](https?:\/\/[^\s,]+\.mp4)/);
        if (a) {
            const i = a[1],
                s = a[2],
                o = i.match(/(\d+p)/),
                u = o ? o[1] : "Unknown",
                c = Wx(u);
            r[c] = {
                type: "mp4",
                url: s
            }
        }
    }), r
}

function Xx(e) {
    const t = /^(.*?),.*?(\d{4})/,
        r = e.match(t);
    if (r) {
        const n = r[1],
            a = r[2];
        return {
            title: n.trim(),
            year: a ? parseInt(a, 10) : null
        }
    }
    return null
}
const M1 = "https://hdrzk.org",
    Ff = {
        "X-Hdrezka-Android-App": "1",
        "X-Hdrezka-Android-App-Version": "2.2.0"
    };
async function Yx(e) {
    var t;
    const r = /<a href="([^"]+)"><span class="enty">([^<]+)<\/span> \(([^)]+)\)/g,
        n = /\/(\d+)-[^/]+\.html$/,
        a = await e.proxiedFetcher("/engine/ajax/search.php", {
            baseUrl: M1,
            headers: Ff,
            query: {
                q: e.media.title
            }
        }),
        i = [];
    for (const o of a.matchAll(r)) {
        const u = o[1],
            c = o[3],
            l = Xx(c);
        if (l !== null) {
            const f = ((t = u.match(n)) == null ? void 0 : t[1]) || null;
            i.push({
                id: f ?? "",
                year: l.year ?? 0,
                type: e.media.type,
                url: u
            })
        }
    }
    return i.filter(o => o.type === e.media.type && o.year === e.media.releaseYear)[0] || null
}
async function Jx(e, t, r) {
    const n = new URLSearchParams;
    n.append("id", e), n.append("translator_id", t), r.media.type === "show" && (n.append("season", r.media.season.number.toString()), n.append("episode", r.media.episode.number.toString())), r.media.type === "movie" && (n.append("is_camprip", "0"), n.append("is_ads", "0"), n.append("is_director", "0")), n.append("favs", Gx()), n.append("action", r.media.type === "show" ? "get_stream" : "get_movie");
    const a = await r.proxiedFetcher("/ajax/get_cdn_series/", {
        baseUrl: M1,
        method: "POST",
        body: n,
        headers: Ff
    });
    return JSON.parse(a)
}
async function Qx(e, t, r) {
    const n = await r.proxiedFetcher(e, {
        headers: Ff
    });
    if (n.includes('data-translator_id="238"')) return "238";
    const a = r.media.type === "movie" ? "initCDNMoviesEvents" : "initCDNSeriesEvents",
        i = new RegExp(`sof\\.tv\\.${a}\\(${t}, ([^,]+)`, "i"),
        s = n.match(i);
    return s ? s[1] : null
}
const pm = async e => {
    const t = await Yx(e);
    if (!t || !t.id) throw new U("No result found");
    const r = await Qx(t.url, t.id, e);
    if (!r) throw new U("No translator id found");
    const {
        url: n,
        subtitle: a
    } = await Jx(t.id, r, e), i = Kx(n), s = Hx(a);
    return {
        embeds: [],
        stream: [{
            id: "primary",
            type: "file",
            flags: [H.CORS_ALLOWED, H.IP_LOCKED],
            captions: s,
            qualities: i
        }]
    }
}, Zx = Ee({
    id: "hdrezka",
    name: "HDRezka",
    rank: 120,
    flags: [H.CORS_ALLOWED, H.IP_LOCKED],
    scrapeShow: pm,
    scrapeMovie: pm
}), qn = "https://nepu.to", ek = `${qn}/`, mm = async e => {
    const t = await e.proxiedFetcher("/ajax/posts", {
            baseUrl: qn,
            query: {
                q: e.media.title
            }
        }),
        n = JSON.parse(t).data.find(l => !l || e.media.type === "movie" && l.type !== "Movie" || e.media.type === "show" && l.type !== "Serie" ? !1 : yo(e.media.title, l.name));
    if (!n) throw new U("No watchable item found");
    let a = n.url;
    e.media.type === "show" && (a = `${n.url}/season/${e.media.season.number}/episode/${e.media.episode.number}`);
    const i = await e.proxiedFetcher(a, {
            baseUrl: qn
        }),
        o = Y(i)("a[data-embed]").attr("data-embed");
    if (!o) throw new U("No embed found.");
    const c = (await e.proxiedFetcher("/ajax/embed", {
        method: "POST",
        baseUrl: qn,
        body: new URLSearchParams({
            id: o
        })
    })).match(/"file":"(http[^"]+)"/);
    if (!c) throw new U("No stream found.");
    return {
        embeds: [],
        stream: [{
            id: "primary",
            captions: [],
            playlist: c[1],
            type: "hls",
            flags: [],
            headers: {
                Origin: qn,
                Referer: ek
            }
        }]
    }
}, tk = Ee({
    id: "nepu",
    name: "Nepu",
    rank: 80,
    flags: [],
    disabled: !0,
    scrapeMovie: mm,
    scrapeShow: mm
}), Qn = "https://www.primewire.tf", rk = atob("bHpRUHNYU0tjRw=="), nk = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731], ak = [3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946], ik = [1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055], sk = [3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504], ok = [976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462];
class uk {
    constructor(t) {
        this.sBox0 = ak.slice(), this.sBox1 = ik.slice(), this.sBox2 = sk.slice(), this.sBox3 = ok.slice(), this.pArray = nk.slice(), this.keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", this.iv = "abc12345", this.generateSubkeys(t)
    }
    encrypt(t) {
        const r = this.utf8Decode(t);
        let n = "";
        const a = 8,
            i = "\0",
            s = Math.ceil(t.length / a);
        for (let o = 0; o < s; o++) {
            let u = r.substr(a * o, a);
            u.length < a && (u += i.repeat(a - u.length));
            let [c, l] = this.split64by32(u);
            [c, l] = this.encipher(c, l), n += this.num2block32(c) + this.num2block32(l)
        }
        return n
    }
    decrypt(t) {
        const r = Math.ceil(t.length / 8);
        let n = "";
        for (let a = 0; a < r; a++) {
            const i = t.substr(8 * a, 8);
            if (i.length < 8) throw new Error("Invalid block size");
            const [s, o] = this.split64by32(i), [u, c] = this.decipher(s, o);
            n += this.num2block32(u) + this.num2block32(c)
        }
        return this.utf8Encode(n)
    }
    substitute(t) {
        const r = t >>> 24,
            n = t << 8 >>> 24,
            a = t << 16 >>> 24,
            i = t << 24 >>> 24;
        let s = this.addMod32(this.sBox0[r], this.sBox1[n]);
        return s = this.xor(s, this.sBox2[a]), s = this.addMod32(s, this.sBox3[i]), s
    }
    encipher(t, r) {
        for (var n, a = 0; a < 16; a++) n = t = this.xor(t, this.pArray[a]), t = r = this.xor(this.substitute(t), r), r = n;
        return n = t, t = r, r = n, r = this.xor(r, this.pArray[16]), [t = this.xor(t, this.pArray[17]), r]
    }
    decipher(t, r) {
        let n, a = t,
            i = r;
        n = this.xor(a, this.pArray[17]), a = this.xor(i, this.pArray[16]), i = n;
        for (let s = 15; s >= 0; s--) n = a, a = i, i = n, i = this.xor(this.substitute(a), i), a = this.xor(a, this.pArray[s]);
        return [a, i]
    }
    generateSubkeys(t) {
        let r, n = 0,
            a = 0;
        for (let s = 0; s < 18; s++) {
            r = 0;
            for (let o = 0; o < 4; o++) r = this.fixNegative(r << 8 | t.charCodeAt(n)), n = (n + 1) % t.length;
            this.pArray[a] = this.xor(this.pArray[a], r), a++
        }
        let i = [0, 0];
        for (let s = 0; s < 18; s += 2) i = this.encipher(i[0], i[1]), this.pArray[s] = i[0], this.pArray[s + 1] = i[1];
        for (let s = 0; s < 256; s += 2) i = this.encipher(i[0], i[1]), this.sBox0[s] = i[0], this.sBox0[s + 1] = i[1];
        for (let s = 0; s < 256; s += 2) i = this.encipher(i[0], i[1]), this.sBox1[s] = i[0], this.sBox1[s + 1] = i[1];
        for (let s = 0; s < 256; s += 2) i = this.encipher(i[0], i[1]), this.sBox2[s] = i[0], this.sBox2[s + 1] = i[1];
        for (let s = 0; s < 256; s += 2) i = this.encipher(i[0], i[1]), this.sBox3[s] = i[0], this.sBox3[s + 1] = i[1]
    }
    block32toNum(t) {
        return this.fixNegative(t.charCodeAt(0) << 24 | t.charCodeAt(1) << 16 | t.charCodeAt(2) << 8 | t.charCodeAt(3))
    }
    num2block32(t) {
        return String.fromCharCode(t >>> 24) + String.fromCharCode(t << 8 >>> 24) + String.fromCharCode(t << 16 >>> 24) + String.fromCharCode(t << 24 >>> 24)
    }
    xor(t, r) {
        return this.fixNegative(t ^ r)
    }
    addMod32(t, r) {
        return this.fixNegative(t + r | 0)
    }
    fixNegative(t) {
        return t >>> 0
    }
    split64by32(t) {
        const r = t.substring(0, 4),
            n = t.substring(4, 8);
        return [this.block32toNum(r), this.block32toNum(n)]
    }
    utf8Decode(t) {
        let r = "";
        for (let n = 0; n < t.length; n++) {
            const a = t.charCodeAt(n);
            if (a < 128) r += String.fromCharCode(a);
            else if (a > 127 && a < 2048) {
                const i = a >> 6 | 192,
                    s = 63 & a | 128;
                r += String.fromCharCode(i, s)
            } else {
                const i = a >> 12 | 224,
                    s = a >> 6 & 63 | 128,
                    o = 63 & a | 128;
                r += String.fromCharCode(i, s, o)
            }
        }
        return r
    }
    utf8Encode(t) {
        let r = "",
            n;
        for (let a = 0; a < t.length; a++)
            if (n = t.charCodeAt(a), n < 128) r += String.fromCharCode(n);
            else if (n > 191 && n < 224) {
            const i = t.charCodeAt(a + 1);
            r += String.fromCharCode((31 & n) << 6 | 63 & i), a += 1
        } else {
            const i = t.charCodeAt(a + 1),
                s = t.charCodeAt(a + 2);
            r += String.fromCharCode((15 & n) << 12 | (63 & i) << 6 | 63 & s), a += 2
        }
        return r
    }
    base64(t) {
        let r, n, a, i, s, o, u = "",
            c = 0;
        const l = t.replace(/[^A-Za-z0-9\\+\\/=]/g, "");
        for (; c < l.length;) r = this.keyStr.indexOf(l.charAt(c++)) << 2 | (i = this.keyStr.indexOf(l.charAt(c++))) >> 4, n = (15 & i) << 4 | (s = this.keyStr.indexOf(l.charAt(c++))) >> 2, a = (3 & s) << 6 | (o = this.keyStr.indexOf(l.charAt(c++))), u += String.fromCharCode(r), s !== 64 && (u += String.fromCharCode(n)), o !== 64 && (u += String.fromCharCode(a));
        return u
    }
}

function ck(e) {
    const t = e.slice(-10),
        r = e.slice(0, -10),
        n = new uk(t),
        a = n.decrypt(n.base64(r)).match(/.{1,5}/g);
    if (a) return a;
    throw new Error("No links found")
}
async function gm(e, t) {
    return (await e.proxiedFetcher("/api/v1/show/", {
        baseUrl: Qn,
        query: {
            key: rk,
            imdb_id: t
        }
    })).id
}
async function vm(e) {
    const t = Y(e),
        r = t("#user-data").attr("v");
    if (!r) throw new U("No user data found");
    const n = ck(r),
        a = [];
    if (!n) throw new U("No links found");
    for (const i in n)
        if (i.includes(i)) {
            const o = t(`.propper-link[link_version='${i}']`).parent().parent().parent().find(".version-host").text().trim();
            let u;
            switch (o) {
                case "mixdrop.co":
                    u = "mixdrop";
                    break;
                case "voe.sx":
                    u = "voe";
                    break;
                case "upstream.to":
                    u = "upstream";
                    break;
                case "streamvid.net":
                    u = "streamvid";
                    break;
                case "dood.watch":
                    u = "dood";
                    break;
                case "dropload.io":
                    u = "dropload";
                    break;
                case "filelions.to":
                    u = "filelions";
                    break;
                case "vtube.to":
                    u = "vtube";
                    break;
                default:
                    u = null
            }
            if (!u) continue;
            a.push({
                url: `${Qn}/links/go/${n[i]}`,
                embedId: u
            })
        } return a
}
const lk = Ee({
        id: "primewire",
        name: "Primewire",
        rank: 110,
        flags: [H.CORS_ALLOWED],
        async scrapeMovie(e) {
            if (!e.media.imdbId) throw new Error("No imdbId provided");
            const t = await gm(e, e.media.imdbId),
                r = await e.proxiedFetcher(`movie/${t}`, {
                    baseUrl: Qn
                });
            return {
                embeds: await vm(r)
            }
        },
        async scrapeShow(e) {
            var t;
            if (!e.media.imdbId) throw new Error("No imdbId provided");
            const r = await gm(e, e.media.imdbId),
                n = await e.proxiedFetcher(`tv/${r}`, {
                    baseUrl: Qn
                }),
                i = (t = Y(n)(`.show_season[data-id='${e.media.season.number}'] > div > a`).toArray().find(u => u.attribs.href.includes(`-episode-${e.media.episode.number}`))) == null ? void 0 : t.attribs.href;
            if (!i) throw new U("No episode links found");
            const s = await e.proxiedFetcher(i, {
                baseUrl: Qn
            });
            return {
                embeds: await vm(s)
            }
        }
    }),
    B1 = "https://ridomovies.tv",
    ym = `${B1}/core/api`,
    bm = async e => {
        const n = (await e.proxiedFetcher("/search", {
            baseUrl: ym,
            query: {
                q: e.media.title
            }
        })).data.items.map(c => {
            const l = c.title,
                f = c.contentable.releaseYear,
                d = c.fullSlug;
            return {
                name: l,
                year: f,
                fullSlug: d
            }
        }).find(c => c.name === e.media.title && c.year === e.media.releaseYear.toString());
        if (!(n != null && n.fullSlug)) throw new U("No watchable item found");
        let a = `/${n.fullSlug}/videos`;
        if (e.media.type === "show") {
            const c = await e.proxiedFetcher(`/${n.fullSlug}`, {
                    baseUrl: B1
                }),
                l = `season-${e.media.season.number}/episode-${e.media.episode.number}`,
                f = new RegExp(`\\\\"id\\\\":\\\\"(\\d+)\\\\"(?=.*?\\\\\\"fullSlug\\\\\\":\\\\\\"[^"]*${l}[^"]*\\\\\\")`, "g"),
                h = [...c.matchAll(f)].map(y => y[1]);
            if (h.length === 0) throw new U("No watchable item found");
            a = `/episodes/${h.at(-1)}/videos`
        }
        const i = await e.proxiedFetcher(a, {
                baseUrl: ym
            }),
            o = Y(i.data[0].url)("iframe").attr("data-src");
        if (!o) throw new U("No watchable item found");
        const u = [];
        return o.includes("closeload") && u.push({
            embedId: L1.id,
            url: o
        }), o.includes("ridoo") && u.push({
            embedId: D1.id,
            url: o
        }), {
            embeds: u
        }
    }, fk = Ee({
        id: "ridomovies",
        name: "RidoMovies",
        rank: 100,
        flags: [H.CORS_ALLOWED],
        scrapeMovie: bm,
        scrapeShow: bm
    }), wm = async e => {
        const t = e.media.type === "movie" ? `?tmdb=${e.media.tmdbId}` : `?tmdbId=${e.media.tmdbId}&season=${e.media.season.number}&episode=${e.media.episode.number}`;
        return {
            embeds: [{
                embedId: Lf.id,
                url: `https://embed.smashystream.com/video1dn.php${t}`
            }, {
                embedId: F1.id,
                url: `https://embed.smashystream.com/videoop.php${t}`
            }]
        }
    }, dk = Ee({
        id: "smashystream",
        name: "SmashyStream",
        rank: 30,
        flags: [H.CORS_ALLOWED],
        scrapeMovie: wm,
        scrapeShow: wm
    }), Pn = "https://soaper.tv", Em = async e => {
        const t = await e.proxiedFetcher("/search.html", {
                baseUrl: Pn,
                query: {
                    keyword: e.media.title
                }
            }),
            r = Y(t);
        let n = r("a").filter((h, p) => r(p).text() === e.media.title).attr("href");
        if (!n) throw new U("Content not found");
        if (e.media.type === "show") {
            const h = e.media.season.number,
                p = e.media.episode.number,
                y = await e.proxiedFetcher(n, {
                    baseUrl: Pn
                }),
                b = Y(y),
                g = b("h4").filter((R, x) => b(x).text().trim().split(":")[0].trim() === `Season${h}`).parent().find("a").toArray();
            n = b(g.find(R => parseInt(b(R).text().split(".")[0], 10) === p)).attr("href")
        }
        if (!n) throw new U("Content not found");
        const a = await e.proxiedFetcher(n, {
                baseUrl: Pn
            }),
            i = Y(a),
            s = i("#hId").attr("value"),
            o = i("#divU").text();
        if (!s || !o) throw new U("Content not found");
        const u = new URLSearchParams;
        u.append("pass", s), u.append("param", o), u.append("e2", "0"), u.append("server", "0");
        const c = e.media.type === "show" ? "/home/index/getEInfoAjax" : "/home/index/getMInfoAjax",
            l = await e.proxiedFetcher(c, {
                baseUrl: Pn,
                method: "POST",
                body: u,
                headers: {
                    referer: `${Pn}${n}`
                }
            }),
            f = JSON.parse(l),
            d = [];
        for (const h of f.subs) {
            let p = "";
            h.name.includes(".srt") ? p = er(h.name.split(".srt")[0]) : h.name.includes(":") ? p = h.name.split(":")[0] : p = h.name, p && d.push({
                id: h.path,
                url: h.path,
                type: "srt",
                hasCorsRestrictions: !1,
                language: p
            })
        }
        return {
            embeds: [],
            stream: [{
                id: "primary",
                playlist: f.val,
                type: "hls",
                flags: [H.IP_LOCKED],
                captions: d
            }, ...f.val_bak ? [{
                id: "backup",
                playlist: f.val_bak,
                type: "hls",
                flags: [H.IP_LOCKED],
                captions: d
            }] : []]
        }
    }, hk = Ee({
        id: "soapertv",
        name: "SoaperTV",
        rank: 115,
        flags: [H.IP_LOCKED],
        scrapeMovie: Em,
        scrapeShow: Em
    }), Bi = "https://vidsrc.to", Bu = `${Bi}/`, Sm = async e => {
        var t;
        const r = e.media.imdbId ?? e.media.tmdbId,
            n = e.media.type === "movie" ? `/embed/movie/${r}` : `/embed/tv/${r}/${e.media.season.number}/${e.media.episode.number}`,
            a = await e.proxiedFetcher(n, {
                baseUrl: Bi,
                headers: {
                    referer: Bu
                }
            }),
            s = Y(a)("a[data-id]").attr("data-id");
        if (!s) throw new Error("No data-id found");
        const o = await e.proxiedFetcher(`/ajax/embed/episode/${s}/sources`, {
            baseUrl: Bi,
            headers: {
                referer: Bu
            }
        });
        if (o.status !== 200) throw new Error("No sources found");
        const u = [],
            c = [];
        for (const l of o.result) {
            const f = await e.proxiedFetcher(`/ajax/embed/source/${l.id}`, {
                    baseUrl: Bi,
                    headers: {
                        referer: Bu
                    }
                }),
                d = kx(f.result.url);
            c.push({
                source: l.title,
                url: d
            })
        }
        for (const l of c) {
            if (l.source === "Vidplay") {
                const f = new URL(l.url);
                u.push({
                    embedId: "vidplay",
                    url: f.toString()
                })
            }
            if (l.source === "Filemoon") {
                const f = new URL(l.url),
                    d = (t = c.find(p => p.source === "Vidplay" && p.url.includes("sub.info"))) == null ? void 0 : t.url,
                    h = d ? new URL(d).searchParams.get("sub.info") : null;
                h && f.searchParams.set("sub.info", h), u.push({
                    embedId: "filemoon",
                    url: f.toString()
                })
            }
        }
        return {
            embeds: u
        }
    }, pk = Ee({
        id: "vidsrcto",
        name: "VidSrcTo",
        scrapeMovie: Sm,
        scrapeShow: Sm,
        flags: [],
        rank: 130
    }), mk = Ee({
        id: "warezcdn",
        name: "WarezCDN",
        rank: 81,
        flags: [H.CORS_ALLOWED],
        scrapeMovie: async e => {
            if (!e.media.imdbId) throw new U("This source requires IMDB id.");
            const t = await e.proxiedFetcher(`/filme/${e.media.imdbId}`, {
                    baseUrl: pi
                }),
                r = Y(t),
                n = r(".hostList.active [data-load-embed]").get(),
                a = [];
            return n.forEach(async i => {
                const s = r(i).attr("data-load-embed-host"),
                    o = r(i).attr("data-load-embed");
                if (s === "mixdrop") {
                    const u = await Hp(e, "mixdrop", o);
                    if (!u) throw new Error("Could not find embed url");
                    a.push({
                        embedId: un.id,
                        url: u
                    })
                } else s === "warezcdn" && a.push({
                    embedId: rl.id,
                    url: o
                }, {
                    embedId: hs.id,
                    url: o
                })
            }), {
                embeds: a
            }
        },
        scrapeShow: async e => {
            var t;
            if (!e.media.imdbId) throw new U("This source requires IMDB id.");
            const r = `${pi}/serie/${e.media.imdbId}/${e.media.season.number}/${e.media.episode.number}`,
                a = (t = (await e.proxiedFetcher(r)).match(/\$\('\[data-load-episode-content="(\d+)"\]'\)/)) == null ? void 0 : t[1];
            if (!a) throw new U("Failed to find episode id");
            const i = await e.proxiedFetcher("/serieAjax.php", {
                    method: "POST",
                    baseUrl: pi,
                    body: new URLSearchParams({
                        getAudios: a
                    }),
                    headers: {
                        Origin: pi,
                        Referer: r,
                        "X-Requested-With": "XMLHttpRequest"
                    }
                }),
                o = JSON.parse(i).list[0],
                u = [];
            if (o.mixdropStatus === "3") {
                const c = await Hp(e, "mixdrop", o.id);
                if (!c) throw new Error("Could not find embed url");
                u.push({
                    embedId: un.id,
                    url: c
                })
            }
            return o.warezcdnStatus === "3" && u.push({
                embedId: rl.id,
                url: o.id
            }, {
                embedId: hs.id,
                url: o.id
            }), {
                embeds: u
            }
        }
    });

function gk() {
    return [WT, nx, JT, ax, KT, wx, lx, rx, dk, fk, pk, tk, qx, Zx, lk, mk, XT, hk]
}

function vk() {
    return [Nt, cn, $1, I1, ms, S1, uT, un, T1, A1, Lf, F1, D1, L1, Ax, jx, Mx, Qc, Nx, el, Rx, XN, hT, zT, rl, hs]
}

function yk() {
    return gk().filter(e => !e.disabled)
}

function bk() {
    return vk().filter(e => !e.disabled)
}

function zu(e) {
    return new Set(e).size !== e.length
}

function wk(e, t) {
    const r = t.sources.filter(u => !(u != null && u.disabled)),
        n = t.embeds.filter(u => !(u != null && u.disabled)),
        a = [...r, ...n],
        i = zu(a.map(u => u.id)),
        s = zu(r.map(u => u.rank)),
        o = zu(n.map(u => u.rank));
    if (i) throw new Error("Duplicate id found in sources/embeds");
    if (s) throw new Error("Duplicate rank found in sources");
    if (o) throw new Error("Duplicate rank found in embeds");
    return {
        sources: r.filter(u => ma(e, u.flags)),
        embeds: n
    }
}

function dB(e) {
    const t = DN(e.target, e.consistentIpForRequests ?? !1),
        r = wk(t, {
            embeds: bk(),
            sources: yk()
        });
    return qN({
        embeds: r.embeds,
        sources: r.sources,
        features: t,
        fetcher: e.fetcher,
        proxiedFetcher: e.proxiedFetcher
    })
}
const Ek = () => {
    try {
        return require("react-native"), !0
    } catch {
        return !1
    }
};

function Sk(e) {
    return e === void 0 || typeof e == "string" || e instanceof URLSearchParams || e instanceof Nf ? e instanceof URLSearchParams && Ek() ? {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: e.toString()
    } : {
        headers: {},
        body: e
    } : {
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(e)
    }
}

function $k(e, t) {
    const r = new Headers;
    return e.forEach(n => {
        var a;
        const i = n.toLowerCase(),
            s = t.headers.get(i),
            o = (a = t.extraHeaders) == null ? void 0 : a.get(i);
        s && r.set(i, o ?? s)
    }), r
}

function Ak(e) {
    return async (r, n) => {
        var a;
        const i = xf(r, n),
            s = Sk(n.body),
            o = await e(i, {
                method: n.method,
                headers: {
                    ...s.headers,
                    ...n.headers
                },
                body: s.body
            });
        let u;
        return ((a = o.headers.get("content-type")) == null ? void 0 : a.includes("application/json")) ? u = await o.json() : u = await o.text(), {
            body: u,
            finalUrl: o.extraUrl ?? o.url,
            headers: $k(n.readHeaders, o),
            statusCode: o.status
        }
    }
}
const $m = {
        cookie: "X-Cookie",
        referer: "X-Referer",
        origin: "X-Origin",
        "user-agent": "X-User-Agent",
        "x-real-ip": "X-X-Real-Ip"
    },
    Ok = {
        "x-set-cookie": "Set-Cookie"
    };

function hB(e, t) {
    return async (n, a) => {
        const i = Ak(async (u, c) => {
                const l = await t(u, c);
                return l.extraHeaders = new Headers, Object.entries(Ok).forEach(f => {
                    var d;
                    const h = l.headers.get(f[0]);
                    h && ((d = l.extraHeaders) == null || d.set(f[0].toLowerCase(), h))
                }), l.extraUrl = l.headers.get("X-Final-Destination") ?? l.url, l
            }),
            s = xf(n, a),
            o = Object.entries(a.headers).map(u => {
                const c = u[0].toLowerCase();
                return $m[c] ? [$m[c], u[1]] : u
            });
        return i(e, {
            ...a,
            query: {
                destination: s
            },
            headers: Object.fromEntries(o),
            baseUrl: void 0
        })
    }
}
class Wn extends Error {}
Wn.prototype.name = "InvalidTokenError";

function _k(e) {
    return decodeURIComponent(atob(e).replace(/(.)/g, (t, r) => {
        let n = r.charCodeAt(0).toString(16).toUpperCase();
        return n.length < 2 && (n = "0" + n), "%" + n
    }))
}

function Rk(e) {
    let t = e.replace(/-/g, "+").replace(/_/g, "/");
    switch (t.length % 4) {
        case 0:
            break;
        case 2:
            t += "==";
            break;
        case 3:
            t += "=";
            break;
        default:
            throw new Error("base64 string is not of the correct length")
    }
    try {
        return _k(t)
    } catch {
        return atob(t)
    }
}

function pB(e, t) {
    if (typeof e != "string") throw new Wn("Invalid token specified: must be a string");
    t || (t = {});
    const r = t.header === !0 ? 0 : 1,
        n = e.split(".")[r];
    if (typeof n != "string") throw new Wn(`Invalid token specified: missing part #${r+1}`);
    let a;
    try {
        a = Rk(n)
    } catch (i) {
        throw new Wn(`Invalid token specified: invalid base64 for part #${r+1} (${i.message})`)
    }
    try {
        return JSON.parse(a)
    } catch (i) {
        throw new Wn(`Invalid token specified: invalid json for part #${r+1} (${i.message})`)
    }
}
var z1 = {
    exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function (e) {
    (function () {
        var t = {}.hasOwnProperty;

        function r() {
            for (var n = [], a = 0; a < arguments.length; a++) {
                var i = arguments[a];
                if (i) {
                    var s = typeof i;
                    if (s === "string" || s === "number") n.push(i);
                    else if (Array.isArray(i)) {
                        if (i.length) {
                            var o = r.apply(null, i);
                            o && n.push(o)
                        }
                    } else if (s === "object") {
                        if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
                            n.push(i.toString());
                            continue
                        }
                        for (var u in i) t.call(i, u) && i[u] && n.push(u)
                    }
                }
            }
            return n.join(" ")
        }
        e.exports ? (r.default = r, e.exports = r) : window.classNames = r
    })()
})(z1);
var Ck = z1.exports;
const mB = Re(Ck);
let gB = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, r) => (r &= 63, r < 36 ? t += r.toString(36) : r < 62 ? t += (r - 26).toString(36).toUpperCase() : r > 62 ? t += "-" : t += "_", t), ""),
    Ik = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, r) => (r &= 63, r < 36 ? t += r.toString(36) : r < 62 ? t += (r - 26).toString(36).toUpperCase() : r > 62 ? t += "-" : t += "_", t), "");
var Yg, Jg;
(Yg = globalThis.browser) != null && Yg.runtime || ((Jg = globalThis.chrome) == null || Jg.runtime);
var Qg, Zg;
(Qg = globalThis.browser) != null && Qg.tabs || ((Zg = globalThis.chrome) == null || Zg.tabs);
var Nk = (e, t) => !t.__internal && e.source === globalThis.window && e.data.name === t.name && (t.relayId === void 0 || e.data.relayId === t.relayId),
    Tk = (e, t = globalThis.window) => new Promise((r, n) => {
        let a = Ik(),
            i = new AbortController;
        t.addEventListener("message", s => {
            Nk(s, e) && s.data.relayed && s.data.instanceId === a && (r(s.data.body), i.abort())
        }, {
            signal: i.signal
        }), t.postMessage({
            ...e,
            instanceId: a
        }, {
            targetOrigin: e.targetOrigin || "/"
        })
    }),
    vB = Tk,
    al = {
        exports: {}
    };
const xk = "2.0.0",
    V1 = 256,
    kk = Number.MAX_SAFE_INTEGER || 9007199254740991,
    Pk = 16,
    Lk = V1 - 6,
    Dk = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
var bo = {
        MAX_LENGTH: V1,
        MAX_SAFE_COMPONENT_LENGTH: Pk,
        MAX_SAFE_BUILD_LENGTH: Lk,
        MAX_SAFE_INTEGER: kk,
        RELEASE_TYPES: Dk,
        SEMVER_SPEC_VERSION: xk,
        FLAG_INCLUDE_PRERELEASE: 1,
        FLAG_LOOSE: 2
    },
    Vu = {};
const Fk = typeof process == "object" && Vu && Vu.NODE_DEBUG && /\bsemver\b/i.test(Vu.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
var wo = Fk;
(function (e, t) {
    const {
        MAX_SAFE_COMPONENT_LENGTH: r,
        MAX_SAFE_BUILD_LENGTH: n,
        MAX_LENGTH: a
    } = bo, i = wo;
    t = e.exports = {};
    const s = t.re = [],
        o = t.safeRe = [],
        u = t.src = [],
        c = t.t = {};
    let l = 0;
    const f = "[a-zA-Z0-9-]",
        d = [
            ["\\s", 1],
            ["\\d", a],
            [f, n]
        ],
        h = y => {
            for (const [b, _] of d) y = y.split(`${b}*`).join(`${b}{0,${_}}`).split(`${b}+`).join(`${b}{1,${_}}`);
            return y
        },
        p = (y, b, _) => {
            const g = h(b),
                R = l++;
            i(y, R, b), c[y] = R, u[R] = b, s[R] = new RegExp(b, _ ? "g" : void 0), o[R] = new RegExp(g, _ ? "g" : void 0)
        };
    p("NUMERICIDENTIFIER", "0|[1-9]\\d*"), p("NUMERICIDENTIFIERLOOSE", "\\d+"), p("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${f}*`), p("MAINVERSION", `(${u[c.NUMERICIDENTIFIER]})\\.(${u[c.NUMERICIDENTIFIER]})\\.(${u[c.NUMERICIDENTIFIER]})`), p("MAINVERSIONLOOSE", `(${u[c.NUMERICIDENTIFIERLOOSE]})\\.(${u[c.NUMERICIDENTIFIERLOOSE]})\\.(${u[c.NUMERICIDENTIFIERLOOSE]})`), p("PRERELEASEIDENTIFIER", `(?:${u[c.NUMERICIDENTIFIER]}|${u[c.NONNUMERICIDENTIFIER]})`), p("PRERELEASEIDENTIFIERLOOSE", `(?:${u[c.NUMERICIDENTIFIERLOOSE]}|${u[c.NONNUMERICIDENTIFIER]})`), p("PRERELEASE", `(?:-(${u[c.PRERELEASEIDENTIFIER]}(?:\\.${u[c.PRERELEASEIDENTIFIER]})*))`), p("PRERELEASELOOSE", `(?:-?(${u[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[c.PRERELEASEIDENTIFIERLOOSE]})*))`), p("BUILDIDENTIFIER", `${f}+`), p("BUILD", `(?:\\+(${u[c.BUILDIDENTIFIER]}(?:\\.${u[c.BUILDIDENTIFIER]})*))`), p("FULLPLAIN", `v?${u[c.MAINVERSION]}${u[c.PRERELEASE]}?${u[c.BUILD]}?`), p("FULL", `^${u[c.FULLPLAIN]}$`), p("LOOSEPLAIN", `[v=\\s]*${u[c.MAINVERSIONLOOSE]}${u[c.PRERELEASELOOSE]}?${u[c.BUILD]}?`), p("LOOSE", `^${u[c.LOOSEPLAIN]}$`), p("GTLT", "((?:<|>)?=?)"), p("XRANGEIDENTIFIERLOOSE", `${u[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), p("XRANGEIDENTIFIER", `${u[c.NUMERICIDENTIFIER]}|x|X|\\*`), p("XRANGEPLAIN", `[v=\\s]*(${u[c.XRANGEIDENTIFIER]})(?:\\.(${u[c.XRANGEIDENTIFIER]})(?:\\.(${u[c.XRANGEIDENTIFIER]})(?:${u[c.PRERELEASE]})?${u[c.BUILD]}?)?)?`), p("XRANGEPLAINLOOSE", `[v=\\s]*(${u[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[c.XRANGEIDENTIFIERLOOSE]})(?:${u[c.PRERELEASELOOSE]})?${u[c.BUILD]}?)?)?`), p("XRANGE", `^${u[c.GTLT]}\\s*${u[c.XRANGEPLAIN]}$`), p("XRANGELOOSE", `^${u[c.GTLT]}\\s*${u[c.XRANGEPLAINLOOSE]}$`), p("COERCE", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?(?:$|[^\\d])`), p("COERCERTL", u[c.COERCE], !0), p("LONETILDE", "(?:~>?)"), p("TILDETRIM", `(\\s*)${u[c.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", p("TILDE", `^${u[c.LONETILDE]}${u[c.XRANGEPLAIN]}$`), p("TILDELOOSE", `^${u[c.LONETILDE]}${u[c.XRANGEPLAINLOOSE]}$`), p("LONECARET", "(?:\\^)"), p("CARETTRIM", `(\\s*)${u[c.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", p("CARET", `^${u[c.LONECARET]}${u[c.XRANGEPLAIN]}$`), p("CARETLOOSE", `^${u[c.LONECARET]}${u[c.XRANGEPLAINLOOSE]}$`), p("COMPARATORLOOSE", `^${u[c.GTLT]}\\s*(${u[c.LOOSEPLAIN]})$|^$`), p("COMPARATOR", `^${u[c.GTLT]}\\s*(${u[c.FULLPLAIN]})$|^$`), p("COMPARATORTRIM", `(\\s*)${u[c.GTLT]}\\s*(${u[c.LOOSEPLAIN]}|${u[c.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", p("HYPHENRANGE", `^\\s*(${u[c.XRANGEPLAIN]})\\s+-\\s+(${u[c.XRANGEPLAIN]})\\s*$`), p("HYPHENRANGELOOSE", `^\\s*(${u[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[c.XRANGEPLAINLOOSE]})\\s*$`), p("STAR", "(<|>)?=?\\s*\\*"), p("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), p("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
})(al, al.exports);
var za = al.exports;
const jk = Object.freeze({
        loose: !0
    }),
    Uk = Object.freeze({}),
    Mk = e => e ? typeof e != "object" ? jk : e : Uk;
var jf = Mk;
const Am = /^[0-9]+$/,
    q1 = (e, t) => {
        const r = Am.test(e),
            n = Am.test(t);
        return r && n && (e = +e, t = +t), e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
    },
    Bk = (e, t) => q1(t, e);
var W1 = {
    compareIdentifiers: q1,
    rcompareIdentifiers: Bk
};
const yi = wo,
    {
        MAX_LENGTH: Om,
        MAX_SAFE_INTEGER: bi
    } = bo,
    {
        safeRe: _m,
        t: Rm
    } = za,
    zk = jf,
    {
        compareIdentifiers: jr
    } = W1;
let Vk = class ot {
    constructor(t, r) {
        if (r = zk(r), t instanceof ot) {
            if (t.loose === !!r.loose && t.includePrerelease === !!r.includePrerelease) return t;
            t = t.version
        } else if (typeof t != "string") throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
        if (t.length > Om) throw new TypeError(`version is longer than ${Om} characters`);
        yi("SemVer", t, r), this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
        const n = t.trim().match(r.loose ? _m[Rm.LOOSE] : _m[Rm.FULL]);
        if (!n) throw new TypeError(`Invalid Version: ${t}`);
        if (this.raw = t, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > bi || this.major < 0) throw new TypeError("Invalid major version");
        if (this.minor > bi || this.minor < 0) throw new TypeError("Invalid minor version");
        if (this.patch > bi || this.patch < 0) throw new TypeError("Invalid patch version");
        n[4] ? this.prerelease = n[4].split(".").map(a => {
            if (/^[0-9]+$/.test(a)) {
                const i = +a;
                if (i >= 0 && i < bi) return i
            }
            return a
        }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format()
    }
    format() {
        return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version
    }
    toString() {
        return this.version
    }
    compare(t) {
        if (yi("SemVer.compare", this.version, this.options, t), !(t instanceof ot)) {
            if (typeof t == "string" && t === this.version) return 0;
            t = new ot(t, this.options)
        }
        return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t)
    }
    compareMain(t) {
        return t instanceof ot || (t = new ot(t, this.options)), jr(this.major, t.major) || jr(this.minor, t.minor) || jr(this.patch, t.patch)
    }
    comparePre(t) {
        if (t instanceof ot || (t = new ot(t, this.options)), this.prerelease.length && !t.prerelease.length) return -1;
        if (!this.prerelease.length && t.prerelease.length) return 1;
        if (!this.prerelease.length && !t.prerelease.length) return 0;
        let r = 0;
        do {
            const n = this.prerelease[r],
                a = t.prerelease[r];
            if (yi("prerelease compare", r, n, a), n === void 0 && a === void 0) return 0;
            if (a === void 0) return 1;
            if (n === void 0) return -1;
            if (n === a) continue;
            return jr(n, a)
        } while (++r)
    }
    compareBuild(t) {
        t instanceof ot || (t = new ot(t, this.options));
        let r = 0;
        do {
            const n = this.build[r],
                a = t.build[r];
            if (yi("prerelease compare", r, n, a), n === void 0 && a === void 0) return 0;
            if (a === void 0) return 1;
            if (n === void 0) return -1;
            if (n === a) continue;
            return jr(n, a)
        } while (++r)
    }
    inc(t, r, n) {
        switch (t) {
            case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", r, n);
                break;
            case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", r, n);
                break;
            case "prepatch":
                this.prerelease.length = 0, this.inc("patch", r, n), this.inc("pre", r, n);
                break;
            case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", r, n), this.inc("pre", r, n);
                break;
            case "major":
                (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;
            case "minor":
                (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
                break;
            case "patch":
                this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                break;
            case "pre": {
                const a = Number(n) ? 1 : 0;
                if (!r && n === !1) throw new Error("invalid increment argument: identifier is empty");
                if (this.prerelease.length === 0) this.prerelease = [a];
                else {
                    let i = this.prerelease.length;
                    for (; --i >= 0;) typeof this.prerelease[i] == "number" && (this.prerelease[i]++, i = -2);
                    if (i === -1) {
                        if (r === this.prerelease.join(".") && n === !1) throw new Error("invalid increment argument: identifier already exists");
                        this.prerelease.push(a)
                    }
                }
                if (r) {
                    let i = [r, a];
                    n === !1 && (i = [r]), jr(this.prerelease[0], r) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = i) : this.prerelease = i
                }
                break
            }
            default:
                throw new Error(`invalid increment argument: ${t}`)
        }
        return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this
    }
};
var Te = Vk;
const Cm = Te,
    qk = (e, t, r = !1) => {
        if (e instanceof Cm) return e;
        try {
            return new Cm(e, t)
        } catch (n) {
            if (!r) return null;
            throw n
        }
    };
var On = qk;
const Wk = On,
    Gk = (e, t) => {
        const r = Wk(e, t);
        return r ? r.version : null
    };
var Hk = Gk;
const Kk = On,
    Xk = (e, t) => {
        const r = Kk(e.trim().replace(/^[=v]+/, ""), t);
        return r ? r.version : null
    };
var Yk = Xk;
const Im = Te,
    Jk = (e, t, r, n, a) => {
        typeof r == "string" && (a = n, n = r, r = void 0);
        try {
            return new Im(e instanceof Im ? e.version : e, r).inc(t, n, a).version
        } catch {
            return null
        }
    };
var Qk = Jk;
const Nm = On,
    Zk = (e, t) => {
        const r = Nm(e, null, !0),
            n = Nm(t, null, !0),
            a = r.compare(n);
        if (a === 0) return null;
        const i = a > 0,
            s = i ? r : n,
            o = i ? n : r,
            u = !!s.prerelease.length;
        if (!!o.prerelease.length && !u) return !o.patch && !o.minor ? "major" : s.patch ? "patch" : s.minor ? "minor" : "major";
        const l = u ? "pre" : "";
        return r.major !== n.major ? l + "major" : r.minor !== n.minor ? l + "minor" : r.patch !== n.patch ? l + "patch" : "prerelease"
    };
var eP = Zk;
const tP = Te,
    rP = (e, t) => new tP(e, t).major;
var nP = rP;
const aP = Te,
    iP = (e, t) => new aP(e, t).minor;
var sP = iP;
const oP = Te,
    uP = (e, t) => new oP(e, t).patch;
var cP = uP;
const lP = On,
    fP = (e, t) => {
        const r = lP(e, t);
        return r && r.prerelease.length ? r.prerelease : null
    };
var dP = fP;
const Tm = Te,
    hP = (e, t, r) => new Tm(e, r).compare(new Tm(t, r));
var nt = hP;
const pP = nt,
    mP = (e, t, r) => pP(t, e, r);
var gP = mP;
const vP = nt,
    yP = (e, t) => vP(e, t, !0);
var bP = yP;
const xm = Te,
    wP = (e, t, r) => {
        const n = new xm(e, r),
            a = new xm(t, r);
        return n.compare(a) || n.compareBuild(a)
    };
var Uf = wP;
const EP = Uf,
    SP = (e, t) => e.sort((r, n) => EP(r, n, t));
var $P = SP;
const AP = Uf,
    OP = (e, t) => e.sort((r, n) => AP(n, r, t));
var _P = OP;
const RP = nt,
    CP = (e, t, r) => RP(e, t, r) > 0;
var Eo = CP;
const IP = nt,
    NP = (e, t, r) => IP(e, t, r) < 0;
var Mf = NP;
const TP = nt,
    xP = (e, t, r) => TP(e, t, r) === 0;
var G1 = xP;
const kP = nt,
    PP = (e, t, r) => kP(e, t, r) !== 0;
var H1 = PP;
const LP = nt,
    DP = (e, t, r) => LP(e, t, r) >= 0;
var Bf = DP;
const FP = nt,
    jP = (e, t, r) => FP(e, t, r) <= 0;
var zf = jP;
const UP = G1,
    MP = H1,
    BP = Eo,
    zP = Bf,
    VP = Mf,
    qP = zf,
    WP = (e, t, r, n) => {
        switch (t) {
            case "===":
                return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e === r;
            case "!==":
                return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e !== r;
            case "":
            case "=":
            case "==":
                return UP(e, r, n);
            case "!=":
                return MP(e, r, n);
            case ">":
                return BP(e, r, n);
            case ">=":
                return zP(e, r, n);
            case "<":
                return VP(e, r, n);
            case "<=":
                return qP(e, r, n);
            default:
                throw new TypeError(`Invalid operator: ${t}`)
        }
    };
var K1 = WP;
const GP = Te,
    HP = On,
    {
        safeRe: wi,
        t: Ei
    } = za,
    KP = (e, t) => {
        if (e instanceof GP) return e;
        if (typeof e == "number" && (e = String(e)), typeof e != "string") return null;
        t = t || {};
        let r = null;
        if (!t.rtl) r = e.match(wi[Ei.COERCE]);
        else {
            let n;
            for (;
                (n = wi[Ei.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length);)(!r || n.index + n[0].length !== r.index + r[0].length) && (r = n), wi[Ei.COERCERTL].lastIndex = n.index + n[1].length + n[2].length;
            wi[Ei.COERCERTL].lastIndex = -1
        }
        return r === null ? null : HP(`${r[2]}.${r[3]||"0"}.${r[4]||"0"}`, t)
    };
var XP = KP,
    qu, km;

function YP() {
    return km || (km = 1, qu = function (e) {
        e.prototype[Symbol.iterator] = function* () {
            for (let t = this.head; t; t = t.next) yield t.value
        }
    }), qu
}
var JP = ne;
ne.Node = wr;
ne.create = ne;

function ne(e) {
    var t = this;
    if (t instanceof ne || (t = new ne), t.tail = null, t.head = null, t.length = 0, e && typeof e.forEach == "function") e.forEach(function (a) {
        t.push(a)
    });
    else if (arguments.length > 0)
        for (var r = 0, n = arguments.length; r < n; r++) t.push(arguments[r]);
    return t
}
ne.prototype.removeNode = function (e) {
    if (e.list !== this) throw new Error("removing node which does not belong to this list");
    var t = e.next,
        r = e.prev;
    return t && (t.prev = r), r && (r.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = r), e.list.length--, e.next = null, e.prev = null, e.list = null, t
};
ne.prototype.unshiftNode = function (e) {
    if (e !== this.head) {
        e.list && e.list.removeNode(e);
        var t = this.head;
        e.list = this, e.next = t, t && (t.prev = e), this.head = e, this.tail || (this.tail = e), this.length++
    }
};
ne.prototype.pushNode = function (e) {
    if (e !== this.tail) {
        e.list && e.list.removeNode(e);
        var t = this.tail;
        e.list = this, e.prev = t, t && (t.next = e), this.tail = e, this.head || (this.head = e), this.length++
    }
};
ne.prototype.push = function () {
    for (var e = 0, t = arguments.length; e < t; e++) ZP(this, arguments[e]);
    return this.length
};
ne.prototype.unshift = function () {
    for (var e = 0, t = arguments.length; e < t; e++) eL(this, arguments[e]);
    return this.length
};
ne.prototype.pop = function () {
    if (this.tail) {
        var e = this.tail.value;
        return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e
    }
};
ne.prototype.shift = function () {
    if (this.head) {
        var e = this.head.value;
        return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e
    }
};
ne.prototype.forEach = function (e, t) {
    t = t || this;
    for (var r = this.head, n = 0; r !== null; n++) e.call(t, r.value, n, this), r = r.next
};
ne.prototype.forEachReverse = function (e, t) {
    t = t || this;
    for (var r = this.tail, n = this.length - 1; r !== null; n--) e.call(t, r.value, n, this), r = r.prev
};
ne.prototype.get = function (e) {
    for (var t = 0, r = this.head; r !== null && t < e; t++) r = r.next;
    if (t === e && r !== null) return r.value
};
ne.prototype.getReverse = function (e) {
    for (var t = 0, r = this.tail; r !== null && t < e; t++) r = r.prev;
    if (t === e && r !== null) return r.value
};
ne.prototype.map = function (e, t) {
    t = t || this;
    for (var r = new ne, n = this.head; n !== null;) r.push(e.call(t, n.value, this)), n = n.next;
    return r
};
ne.prototype.mapReverse = function (e, t) {
    t = t || this;
    for (var r = new ne, n = this.tail; n !== null;) r.push(e.call(t, n.value, this)), n = n.prev;
    return r
};
ne.prototype.reduce = function (e, t) {
    var r, n = this.head;
    if (arguments.length > 1) r = t;
    else if (this.head) n = this.head.next, r = this.head.value;
    else throw new TypeError("Reduce of empty list with no initial value");
    for (var a = 0; n !== null; a++) r = e(r, n.value, a), n = n.next;
    return r
};
ne.prototype.reduceReverse = function (e, t) {
    var r, n = this.tail;
    if (arguments.length > 1) r = t;
    else if (this.tail) n = this.tail.prev, r = this.tail.value;
    else throw new TypeError("Reduce of empty list with no initial value");
    for (var a = this.length - 1; n !== null; a--) r = e(r, n.value, a), n = n.prev;
    return r
};
ne.prototype.toArray = function () {
    for (var e = new Array(this.length), t = 0, r = this.head; r !== null; t++) e[t] = r.value, r = r.next;
    return e
};
ne.prototype.toArrayReverse = function () {
    for (var e = new Array(this.length), t = 0, r = this.tail; r !== null; t++) e[t] = r.value, r = r.prev;
    return e
};
ne.prototype.slice = function (e, t) {
    t = t || this.length, t < 0 && (t += this.length), e = e || 0, e < 0 && (e += this.length);
    var r = new ne;
    if (t < e || t < 0) return r;
    e < 0 && (e = 0), t > this.length && (t = this.length);
    for (var n = 0, a = this.head; a !== null && n < e; n++) a = a.next;
    for (; a !== null && n < t; n++, a = a.next) r.push(a.value);
    return r
};
ne.prototype.sliceReverse = function (e, t) {
    t = t || this.length, t < 0 && (t += this.length), e = e || 0, e < 0 && (e += this.length);
    var r = new ne;
    if (t < e || t < 0) return r;
    e < 0 && (e = 0), t > this.length && (t = this.length);
    for (var n = this.length, a = this.tail; a !== null && n > t; n--) a = a.prev;
    for (; a !== null && n > e; n--, a = a.prev) r.push(a.value);
    return r
};
ne.prototype.splice = function (e, t, ...r) {
    e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
    for (var n = 0, a = this.head; a !== null && n < e; n++) a = a.next;
    for (var i = [], n = 0; a && n < t; n++) i.push(a.value), a = this.removeNode(a);
    a === null && (a = this.tail), a !== this.head && a !== this.tail && (a = a.prev);
    for (var n = 0; n < r.length; n++) a = QP(this, a, r[n]);
    return i
};
ne.prototype.reverse = function () {
    for (var e = this.head, t = this.tail, r = e; r !== null; r = r.prev) {
        var n = r.prev;
        r.prev = r.next, r.next = n
    }
    return this.head = t, this.tail = e, this
};

function QP(e, t, r) {
    var n = t === e.head ? new wr(r, null, t, e) : new wr(r, t, t.next, e);
    return n.next === null && (e.tail = n), n.prev === null && (e.head = n), e.length++, n
}

function ZP(e, t) {
    e.tail = new wr(t, e.tail, null, e), e.head || (e.head = e.tail), e.length++
}

function eL(e, t) {
    e.head = new wr(t, null, e.head, e), e.tail || (e.tail = e.head), e.length++
}

function wr(e, t, r, n) {
    if (!(this instanceof wr)) return new wr(e, t, r, n);
    this.list = n, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = null, r ? (r.prev = this, this.next = r) : this.next = null
}
try {
    YP()(ne)
} catch {}
const tL = JP,
    lr = Symbol("max"),
    At = Symbol("length"),
    Ur = Symbol("lengthCalculator"),
    Zn = Symbol("allowStale"),
    dr = Symbol("maxAge"),
    St = Symbol("dispose"),
    Pm = Symbol("noDisposeOnSet"),
    be = Symbol("lruList"),
    Je = Symbol("cache"),
    X1 = Symbol("updateAgeOnGet"),
    Wu = () => 1;
class rL {
    constructor(t) {
        if (typeof t == "number" && (t = {
                max: t
            }), t || (t = {}), t.max && (typeof t.max != "number" || t.max < 0)) throw new TypeError("max must be a non-negative number");
        this[lr] = t.max || 1 / 0;
        const r = t.length || Wu;
        if (this[Ur] = typeof r != "function" ? Wu : r, this[Zn] = t.stale || !1, t.maxAge && typeof t.maxAge != "number") throw new TypeError("maxAge must be a number");
        this[dr] = t.maxAge || 0, this[St] = t.dispose, this[Pm] = t.noDisposeOnSet || !1, this[X1] = t.updateAgeOnGet || !1, this.reset()
    }
    set max(t) {
        if (typeof t != "number" || t < 0) throw new TypeError("max must be a non-negative number");
        this[lr] = t || 1 / 0, Ln(this)
    }
    get max() {
        return this[lr]
    }
    set allowStale(t) {
        this[Zn] = !!t
    }
    get allowStale() {
        return this[Zn]
    }
    set maxAge(t) {
        if (typeof t != "number") throw new TypeError("maxAge must be a non-negative number");
        this[dr] = t, Ln(this)
    }
    get maxAge() {
        return this[dr]
    }
    set lengthCalculator(t) {
        typeof t != "function" && (t = Wu), t !== this[Ur] && (this[Ur] = t, this[At] = 0, this[be].forEach(r => {
            r.length = this[Ur](r.value, r.key), this[At] += r.length
        })), Ln(this)
    }
    get lengthCalculator() {
        return this[Ur]
    }
    get length() {
        return this[At]
    }
    get itemCount() {
        return this[be].length
    }
    rforEach(t, r) {
        r = r || this;
        for (let n = this[be].tail; n !== null;) {
            const a = n.prev;
            Lm(this, t, n, r), n = a
        }
    }
    forEach(t, r) {
        r = r || this;
        for (let n = this[be].head; n !== null;) {
            const a = n.next;
            Lm(this, t, n, r), n = a
        }
    }
    keys() {
        return this[be].toArray().map(t => t.key)
    }
    values() {
        return this[be].toArray().map(t => t.value)
    }
    reset() {
        this[St] && this[be] && this[be].length && this[be].forEach(t => this[St](t.key, t.value)), this[Je] = new Map, this[be] = new tL, this[At] = 0
    }
    dump() {
        return this[be].map(t => ys(this, t) ? !1 : {
            k: t.key,
            v: t.value,
            e: t.now + (t.maxAge || 0)
        }).toArray().filter(t => t)
    }
    dumpLru() {
        return this[be]
    }
    set(t, r, n) {
        if (n = n || this[dr], n && typeof n != "number") throw new TypeError("maxAge must be a number");
        const a = n ? Date.now() : 0,
            i = this[Ur](r, t);
        if (this[Je].has(t)) {
            if (i > this[lr]) return Qr(this, this[Je].get(t)), !1;
            const u = this[Je].get(t).value;
            return this[St] && (this[Pm] || this[St](t, u.value)), u.now = a, u.maxAge = n, u.value = r, this[At] += i - u.length, u.length = i, this.get(t), Ln(this), !0
        }
        const s = new nL(t, r, i, a, n);
        return s.length > this[lr] ? (this[St] && this[St](t, r), !1) : (this[At] += s.length, this[be].unshift(s), this[Je].set(t, this[be].head), Ln(this), !0)
    }
    has(t) {
        if (!this[Je].has(t)) return !1;
        const r = this[Je].get(t).value;
        return !ys(this, r)
    }
    get(t) {
        return Gu(this, t, !0)
    }
    peek(t) {
        return Gu(this, t, !1)
    }
    pop() {
        const t = this[be].tail;
        return t ? (Qr(this, t), t.value) : null
    }
    del(t) {
        Qr(this, this[Je].get(t))
    }
    load(t) {
        this.reset();
        const r = Date.now();
        for (let n = t.length - 1; n >= 0; n--) {
            const a = t[n],
                i = a.e || 0;
            if (i === 0) this.set(a.k, a.v);
            else {
                const s = i - r;
                s > 0 && this.set(a.k, a.v, s)
            }
        }
    }
    prune() {
        this[Je].forEach((t, r) => Gu(this, r, !1))
    }
}
const Gu = (e, t, r) => {
        const n = e[Je].get(t);
        if (n) {
            const a = n.value;
            if (ys(e, a)) {
                if (Qr(e, n), !e[Zn]) return
            } else r && (e[X1] && (n.value.now = Date.now()), e[be].unshiftNode(n));
            return a.value
        }
    },
    ys = (e, t) => {
        if (!t || !t.maxAge && !e[dr]) return !1;
        const r = Date.now() - t.now;
        return t.maxAge ? r > t.maxAge : e[dr] && r > e[dr]
    },
    Ln = e => {
        if (e[At] > e[lr])
            for (let t = e[be].tail; e[At] > e[lr] && t !== null;) {
                const r = t.prev;
                Qr(e, t), t = r
            }
    },
    Qr = (e, t) => {
        if (t) {
            const r = t.value;
            e[St] && e[St](r.key, r.value), e[At] -= r.length, e[Je].delete(r.key), e[be].removeNode(t)
        }
    };
class nL {
    constructor(t, r, n, a, i) {
        this.key = t, this.value = r, this.length = n, this.now = a, this.maxAge = i || 0
    }
}
const Lm = (e, t, r, n) => {
    let a = r.value;
    ys(e, a) && (Qr(e, r), e[Zn] || (a = void 0)), a && t.call(n, a.value, a.key, e)
};
var aL = rL,
    Hu, Dm;

function at() {
    if (Dm) return Hu;
    Dm = 1;
    class e {
        constructor(v, E) {
            if (E = n(E), v instanceof e) return v.loose === !!E.loose && v.includePrerelease === !!E.includePrerelease ? v : new e(v.raw, E);
            if (v instanceof a) return this.raw = v.value, this.set = [
                [v]
            ], this.format(), this;
            if (this.options = E, this.loose = !!E.loose, this.includePrerelease = !!E.includePrerelease, this.raw = v.trim().split(/\s+/).join(" "), this.set = this.raw.split("||").map($ => this.parseRange($.trim())).filter($ => $.length), !this.set.length) throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
            if (this.set.length > 1) {
                const $ = this.set[0];
                if (this.set = this.set.filter(A => !p(A[0])), this.set.length === 0) this.set = [$];
                else if (this.set.length > 1) {
                    for (const A of this.set)
                        if (A.length === 1 && y(A[0])) {
                            this.set = [A];
                            break
                        }
                }
            }
            this.format()
        }
        format() {
            return this.range = this.set.map(v => v.join(" ").trim()).join("||").trim(), this.range
        }
        toString() {
            return this.range
        }
        parseRange(v) {
            const $ = ((this.options.includePrerelease && d) | (this.options.loose && h)) + ":" + v,
                A = r.get($);
            if (A) return A;
            const w = this.options.loose,
                C = w ? o[u.HYPHENRANGELOOSE] : o[u.HYPHENRANGE];
            v = v.replace(C, q(this.options.includePrerelease)), i("hyphen replace", v), v = v.replace(o[u.COMPARATORTRIM], c), i("comparator trim", v), v = v.replace(o[u.TILDETRIM], l), i("tilde trim", v), v = v.replace(o[u.CARETTRIM], f), i("caret trim", v);
            let T = v.split(" ").map(W => _(W, this.options)).join(" ").split(/\s+/).map(W => Q(W, this.options));
            w && (T = T.filter(W => (i("loose invalid filter", W, this.options), !!W.match(o[u.COMPARATORLOOSE])))), i("range list", T);
            const P = new Map,
                B = T.map(W => new a(W, this.options));
            for (const W of B) {
                if (p(W)) return [W];
                P.set(W.value, W)
            }
            P.size > 1 && P.has("") && P.delete("");
            const M = [...P.values()];
            return r.set($, M), M
        }
        intersects(v, E) {
            if (!(v instanceof e)) throw new TypeError("a Range is required");
            return this.set.some($ => b($, E) && v.set.some(A => b(A, E) && $.every(w => A.every(C => w.intersects(C, E)))))
        }
        test(v) {
            if (!v) return !1;
            if (typeof v == "string") try {
                v = new s(v, this.options)
            } catch {
                return !1
            }
            for (let E = 0; E < this.set.length; E++)
                if (I(this.set[E], v, this.options)) return !0;
            return !1
        }
    }
    Hu = e;
    const t = aL,
        r = new t({
            max: 1e3
        }),
        n = jf,
        a = So(),
        i = wo,
        s = Te,
        {
            safeRe: o,
            t: u,
            comparatorTrimReplace: c,
            tildeTrimReplace: l,
            caretTrimReplace: f
        } = za,
        {
            FLAG_INCLUDE_PRERELEASE: d,
            FLAG_LOOSE: h
        } = bo,
        p = S => S.value === "<0.0.0-0",
        y = S => S.value === "",
        b = (S, v) => {
            let E = !0;
            const $ = S.slice();
            let A = $.pop();
            for (; E && $.length;) E = $.every(w => A.intersects(w, v)), A = $.pop();
            return E
        },
        _ = (S, v) => (i("comp", S, v), S = k(S, v), i("caret", S), S = R(S, v), i("tildes", S), S = z(S, v), i("xrange", S), S = j(S, v), i("stars", S), S),
        g = S => !S || S.toLowerCase() === "x" || S === "*",
        R = (S, v) => S.trim().split(/\s+/).map(E => x(E, v)).join(" "),
        x = (S, v) => {
            const E = v.loose ? o[u.TILDELOOSE] : o[u.TILDE];
            return S.replace(E, ($, A, w, C, T) => {
                i("tilde", S, $, A, w, C, T);
                let P;
                return g(A) ? P = "" : g(w) ? P = `>=${A}.0.0 <${+A+1}.0.0-0` : g(C) ? P = `>=${A}.${w}.0 <${A}.${+w+1}.0-0` : T ? (i("replaceTilde pr", T), P = `>=${A}.${w}.${C}-${T} <${A}.${+w+1}.0-0`) : P = `>=${A}.${w}.${C} <${A}.${+w+1}.0-0`, i("tilde return", P), P
            })
        },
        k = (S, v) => S.trim().split(/\s+/).map(E => F(E, v)).join(" "),
        F = (S, v) => {
            i("caret", S, v);
            const E = v.loose ? o[u.CARETLOOSE] : o[u.CARET],
                $ = v.includePrerelease ? "-0" : "";
            return S.replace(E, (A, w, C, T, P) => {
                i("caret", S, A, w, C, T, P);
                let B;
                return g(w) ? B = "" : g(C) ? B = `>=${w}.0.0${$} <${+w+1}.0.0-0` : g(T) ? w === "0" ? B = `>=${w}.${C}.0${$} <${w}.${+C+1}.0-0` : B = `>=${w}.${C}.0${$} <${+w+1}.0.0-0` : P ? (i("replaceCaret pr", P), w === "0" ? C === "0" ? B = `>=${w}.${C}.${T}-${P} <${w}.${C}.${+T+1}-0` : B = `>=${w}.${C}.${T}-${P} <${w}.${+C+1}.0-0` : B = `>=${w}.${C}.${T}-${P} <${+w+1}.0.0-0`) : (i("no pr"), w === "0" ? C === "0" ? B = `>=${w}.${C}.${T}${$} <${w}.${C}.${+T+1}-0` : B = `>=${w}.${C}.${T}${$} <${w}.${+C+1}.0-0` : B = `>=${w}.${C}.${T} <${+w+1}.0.0-0`), i("caret return", B), B
            })
        },
        z = (S, v) => (i("replaceXRanges", S, v), S.split(/\s+/).map(E => K(E, v)).join(" ")),
        K = (S, v) => {
            S = S.trim();
            const E = v.loose ? o[u.XRANGELOOSE] : o[u.XRANGE];
            return S.replace(E, ($, A, w, C, T, P) => {
                i("xRange", S, $, A, w, C, T, P);
                const B = g(w),
                    M = B || g(C),
                    W = M || g(T),
                    Se = W;
                return A === "=" && Se && (A = ""), P = v.includePrerelease ? "-0" : "", B ? A === ">" || A === "<" ? $ = "<0.0.0-0" : $ = "*" : A && Se ? (M && (C = 0), T = 0, A === ">" ? (A = ">=", M ? (w = +w + 1, C = 0, T = 0) : (C = +C + 1, T = 0)) : A === "<=" && (A = "<", M ? w = +w + 1 : C = +C + 1), A === "<" && (P = "-0"), $ = `${A+w}.${C}.${T}${P}`) : M ? $ = `>=${w}.0.0${P} <${+w+1}.0.0-0` : W && ($ = `>=${w}.${C}.0${P} <${w}.${+C+1}.0-0`), i("xRange return", $), $
            })
        },
        j = (S, v) => (i("replaceStars", S, v), S.trim().replace(o[u.STAR], "")),
        Q = (S, v) => (i("replaceGTE0", S, v), S.trim().replace(o[v.includePrerelease ? u.GTE0PRE : u.GTE0], "")),
        q = S => (v, E, $, A, w, C, T, P, B, M, W, Se, ge) => (g($) ? E = "" : g(A) ? E = `>=${$}.0.0${S?"-0":""}` : g(w) ? E = `>=${$}.${A}.0${S?"-0":""}` : C ? E = `>=${E}` : E = `>=${E}${S?"-0":""}`, g(B) ? P = "" : g(M) ? P = `<${+B+1}.0.0-0` : g(W) ? P = `<${B}.${+M+1}.0-0` : Se ? P = `<=${B}.${M}.${W}-${Se}` : S ? P = `<${B}.${M}.${+W+1}-0` : P = `<=${P}`, `${E} ${P}`.trim()),
        I = (S, v, E) => {
            for (let $ = 0; $ < S.length; $++)
                if (!S[$].test(v)) return !1;
            if (v.prerelease.length && !E.includePrerelease) {
                for (let $ = 0; $ < S.length; $++)
                    if (i(S[$].semver), S[$].semver !== a.ANY && S[$].semver.prerelease.length > 0) {
                        const A = S[$].semver;
                        if (A.major === v.major && A.minor === v.minor && A.patch === v.patch) return !0
                    } return !1
            }
            return !0
        };
    return Hu
}
var Ku, Fm;

function So() {
    if (Fm) return Ku;
    Fm = 1;
    const e = Symbol("SemVer ANY");
    class t {
        static get ANY() {
            return e
        }
        constructor(l, f) {
            if (f = r(f), l instanceof t) {
                if (l.loose === !!f.loose) return l;
                l = l.value
            }
            l = l.trim().split(/\s+/).join(" "), s("comparator", l, f), this.options = f, this.loose = !!f.loose, this.parse(l), this.semver === e ? this.value = "" : this.value = this.operator + this.semver.version, s("comp", this)
        }
        parse(l) {
            const f = this.options.loose ? n[a.COMPARATORLOOSE] : n[a.COMPARATOR],
                d = l.match(f);
            if (!d) throw new TypeError(`Invalid comparator: ${l}`);
            this.operator = d[1] !== void 0 ? d[1] : "", this.operator === "=" && (this.operator = ""), d[2] ? this.semver = new o(d[2], this.options.loose) : this.semver = e
        }
        toString() {
            return this.value
        }
        test(l) {
            if (s("Comparator.test", l, this.options.loose), this.semver === e || l === e) return !0;
            if (typeof l == "string") try {
                l = new o(l, this.options)
            } catch {
                return !1
            }
            return i(l, this.operator, this.semver, this.options)
        }
        intersects(l, f) {
            if (!(l instanceof t)) throw new TypeError("a Comparator is required");
            return this.operator === "" ? this.value === "" ? !0 : new u(l.value, f).test(this.value) : l.operator === "" ? l.value === "" ? !0 : new u(this.value, f).test(l.semver) : (f = r(f), f.includePrerelease && (this.value === "<0.0.0-0" || l.value === "<0.0.0-0") || !f.includePrerelease && (this.value.startsWith("<0.0.0") || l.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && l.operator.startsWith(">") || this.operator.startsWith("<") && l.operator.startsWith("<") || this.semver.version === l.semver.version && this.operator.includes("=") && l.operator.includes("=") || i(this.semver, "<", l.semver, f) && this.operator.startsWith(">") && l.operator.startsWith("<") || i(this.semver, ">", l.semver, f) && this.operator.startsWith("<") && l.operator.startsWith(">")))
        }
    }
    Ku = t;
    const r = jf,
        {
            safeRe: n,
            t: a
        } = za,
        i = K1,
        s = wo,
        o = Te,
        u = at();
    return Ku
}
const iL = at(),
    sL = (e, t, r) => {
        try {
            t = new iL(t, r)
        } catch {
            return !1
        }
        return t.test(e)
    };
var $o = sL;
const oL = at(),
    uL = (e, t) => new oL(e, t).set.map(r => r.map(n => n.value).join(" ").trim().split(" "));
var cL = uL;
const lL = Te,
    fL = at(),
    dL = (e, t, r) => {
        let n = null,
            a = null,
            i = null;
        try {
            i = new fL(t, r)
        } catch {
            return null
        }
        return e.forEach(s => {
            i.test(s) && (!n || a.compare(s) === -1) && (n = s, a = new lL(n, r))
        }), n
    };
var hL = dL;
const pL = Te,
    mL = at(),
    gL = (e, t, r) => {
        let n = null,
            a = null,
            i = null;
        try {
            i = new mL(t, r)
        } catch {
            return null
        }
        return e.forEach(s => {
            i.test(s) && (!n || a.compare(s) === 1) && (n = s, a = new pL(n, r))
        }), n
    };
var vL = gL;
const Xu = Te,
    yL = at(),
    jm = Eo,
    bL = (e, t) => {
        e = new yL(e, t);
        let r = new Xu("0.0.0");
        if (e.test(r) || (r = new Xu("0.0.0-0"), e.test(r))) return r;
        r = null;
        for (let n = 0; n < e.set.length; ++n) {
            const a = e.set[n];
            let i = null;
            a.forEach(s => {
                const o = new Xu(s.semver.version);
                switch (s.operator) {
                    case ">":
                        o.prerelease.length === 0 ? o.patch++ : o.prerelease.push(0), o.raw = o.format();
                    case "":
                    case ">=":
                        (!i || jm(o, i)) && (i = o);
                        break;
                    case "<":
                    case "<=":
                        break;
                    default:
                        throw new Error(`Unexpected operation: ${s.operator}`)
                }
            }), i && (!r || jm(r, i)) && (r = i)
        }
        return r && e.test(r) ? r : null
    };
var wL = bL;
const EL = at(),
    SL = (e, t) => {
        try {
            return new EL(e, t).range || "*"
        } catch {
            return null
        }
    };
var $L = SL;
const AL = Te,
    Y1 = So(),
    {
        ANY: OL
    } = Y1,
    _L = at(),
    RL = $o,
    Um = Eo,
    Mm = Mf,
    CL = zf,
    IL = Bf,
    NL = (e, t, r, n) => {
        e = new AL(e, n), t = new _L(t, n);
        let a, i, s, o, u;
        switch (r) {
            case ">":
                a = Um, i = CL, s = Mm, o = ">", u = ">=";
                break;
            case "<":
                a = Mm, i = IL, s = Um, o = "<", u = "<=";
                break;
            default:
                throw new TypeError('Must provide a hilo val of "<" or ">"')
        }
        if (RL(e, t, n)) return !1;
        for (let c = 0; c < t.set.length; ++c) {
            const l = t.set[c];
            let f = null,
                d = null;
            if (l.forEach(h => {
                    h.semver === OL && (h = new Y1(">=0.0.0")), f = f || h, d = d || h, a(h.semver, f.semver, n) ? f = h : s(h.semver, d.semver, n) && (d = h)
                }), f.operator === o || f.operator === u || (!d.operator || d.operator === o) && i(e, d.semver)) return !1;
            if (d.operator === u && s(e, d.semver)) return !1
        }
        return !0
    };
var Vf = NL;
const TL = Vf,
    xL = (e, t, r) => TL(e, t, ">", r);
var kL = xL;
const PL = Vf,
    LL = (e, t, r) => PL(e, t, "<", r);
var DL = LL;
const Bm = at(),
    FL = (e, t, r) => (e = new Bm(e, r), t = new Bm(t, r), e.intersects(t, r));
var jL = FL;
const UL = $o,
    ML = nt;
var BL = (e, t, r) => {
    const n = [];
    let a = null,
        i = null;
    const s = e.sort((l, f) => ML(l, f, r));
    for (const l of s) UL(l, t, r) ? (i = l, a || (a = l)) : (i && n.push([a, i]), i = null, a = null);
    a && n.push([a, null]);
    const o = [];
    for (const [l, f] of n) l === f ? o.push(l) : !f && l === s[0] ? o.push("*") : f ? l === s[0] ? o.push(`<=${f}`) : o.push(`${l} - ${f}`) : o.push(`>=${l}`);
    const u = o.join(" || "),
        c = typeof t.raw == "string" ? t.raw : String(t);
    return u.length < c.length ? u : t
};
const zm = at(),
    qf = So(),
    {
        ANY: Yu
    } = qf,
    Dn = $o,
    Wf = nt,
    zL = (e, t, r = {}) => {
        if (e === t) return !0;
        e = new zm(e, r), t = new zm(t, r);
        let n = !1;
        e: for (const a of e.set) {
            for (const i of t.set) {
                const s = qL(a, i, r);
                if (n = n || s !== null, s) continue e
            }
            if (n) return !1
        }
        return !0
    },
    VL = [new qf(">=0.0.0-0")],
    Vm = [new qf(">=0.0.0")],
    qL = (e, t, r) => {
        if (e === t) return !0;
        if (e.length === 1 && e[0].semver === Yu) {
            if (t.length === 1 && t[0].semver === Yu) return !0;
            r.includePrerelease ? e = VL : e = Vm
        }
        if (t.length === 1 && t[0].semver === Yu) {
            if (r.includePrerelease) return !0;
            t = Vm
        }
        const n = new Set;
        let a, i;
        for (const h of e) h.operator === ">" || h.operator === ">=" ? a = qm(a, h, r) : h.operator === "<" || h.operator === "<=" ? i = Wm(i, h, r) : n.add(h.semver);
        if (n.size > 1) return null;
        let s;
        if (a && i) {
            if (s = Wf(a.semver, i.semver, r), s > 0) return null;
            if (s === 0 && (a.operator !== ">=" || i.operator !== "<=")) return null
        }
        for (const h of n) {
            if (a && !Dn(h, String(a), r) || i && !Dn(h, String(i), r)) return null;
            for (const p of t)
                if (!Dn(h, String(p), r)) return !1;
            return !0
        }
        let o, u, c, l, f = i && !r.includePrerelease && i.semver.prerelease.length ? i.semver : !1,
            d = a && !r.includePrerelease && a.semver.prerelease.length ? a.semver : !1;
        f && f.prerelease.length === 1 && i.operator === "<" && f.prerelease[0] === 0 && (f = !1);
        for (const h of t) {
            if (l = l || h.operator === ">" || h.operator === ">=", c = c || h.operator === "<" || h.operator === "<=", a) {
                if (d && h.semver.prerelease && h.semver.prerelease.length && h.semver.major === d.major && h.semver.minor === d.minor && h.semver.patch === d.patch && (d = !1), h.operator === ">" || h.operator === ">=") {
                    if (o = qm(a, h, r), o === h && o !== a) return !1
                } else if (a.operator === ">=" && !Dn(a.semver, String(h), r)) return !1
            }
            if (i) {
                if (f && h.semver.prerelease && h.semver.prerelease.length && h.semver.major === f.major && h.semver.minor === f.minor && h.semver.patch === f.patch && (f = !1), h.operator === "<" || h.operator === "<=") {
                    if (u = Wm(i, h, r), u === h && u !== i) return !1
                } else if (i.operator === "<=" && !Dn(i.semver, String(h), r)) return !1
            }
            if (!h.operator && (i || a) && s !== 0) return !1
        }
        return !(a && c && !i && s !== 0 || i && l && !a && s !== 0 || d || f)
    },
    qm = (e, t, r) => {
        if (!e) return t;
        const n = Wf(e.semver, t.semver, r);
        return n > 0 ? e : n < 0 || t.operator === ">" && e.operator === ">=" ? t : e
    },
    Wm = (e, t, r) => {
        if (!e) return t;
        const n = Wf(e.semver, t.semver, r);
        return n < 0 ? e : n > 0 || t.operator === "<" && e.operator === "<=" ? t : e
    };
var WL = zL;
const Ju = za,
    Gm = bo,
    GL = Te,
    Hm = W1,
    HL = On,
    KL = Hk,
    XL = Yk,
    YL = Qk,
    JL = eP,
    QL = nP,
    ZL = sP,
    eD = cP,
    tD = dP,
    rD = nt,
    nD = gP,
    aD = bP,
    iD = Uf,
    sD = $P,
    oD = _P,
    uD = Eo,
    cD = Mf,
    lD = G1,
    fD = H1,
    dD = Bf,
    hD = zf,
    pD = K1,
    mD = XP,
    gD = So(),
    vD = at(),
    yD = $o,
    bD = cL,
    wD = hL,
    ED = vL,
    SD = wL,
    $D = $L,
    AD = Vf,
    OD = kL,
    _D = DL,
    RD = jL,
    CD = BL,
    ID = WL;
var yB = {
        parse: HL,
        valid: KL,
        clean: XL,
        inc: YL,
        diff: JL,
        major: QL,
        minor: ZL,
        patch: eD,
        prerelease: tD,
        compare: rD,
        rcompare: nD,
        compareLoose: aD,
        compareBuild: iD,
        sort: sD,
        rsort: oD,
        gt: uD,
        lt: cD,
        eq: lD,
        neq: fD,
        gte: dD,
        lte: hD,
        cmp: pD,
        coerce: mD,
        Comparator: gD,
        Range: vD,
        satisfies: yD,
        toComparators: bD,
        maxSatisfying: wD,
        minSatisfying: ED,
        minVersion: SD,
        validRange: $D,
        outside: AD,
        gtr: OD,
        ltr: _D,
        intersects: RD,
        simplifyRange: CD,
        subset: ID,
        SemVer: GL,
        re: Ju.re,
        src: Ju.src,
        tokens: Ju.t,
        SEMVER_SPEC_VERSION: Gm.SEMVER_SPEC_VERSION,
        RELEASE_TYPES: Gm.RELEASE_TYPES,
        compareIdentifiers: Hm.compareIdentifiers,
        rcompareIdentifiers: Hm.rcompareIdentifiers
    },
    ND = typeof Element < "u",
    TD = typeof Map == "function",
    xD = typeof Set == "function",
    kD = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;

function zi(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor) return !1;
        var r, n, a;
        if (Array.isArray(e)) {
            if (r = e.length, r != t.length) return !1;
            for (n = r; n-- !== 0;)
                if (!zi(e[n], t[n])) return !1;
            return !0
        }
        var i;
        if (TD && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size) return !1;
            for (i = e.entries(); !(n = i.next()).done;)
                if (!t.has(n.value[0])) return !1;
            for (i = e.entries(); !(n = i.next()).done;)
                if (!zi(n.value[1], t.get(n.value[0]))) return !1;
            return !0
        }
        if (xD && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size) return !1;
            for (i = e.entries(); !(n = i.next()).done;)
                if (!t.has(n.value[0])) return !1;
            return !0
        }
        if (kD && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if (r = e.length, r != t.length) return !1;
            for (n = r; n-- !== 0;)
                if (e[n] !== t[n]) return !1;
            return !0
        }
        if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
        if (a = Object.keys(e), r = a.length, r !== Object.keys(t).length) return !1;
        for (n = r; n-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(t, a[n])) return !1;
        if (ND && e instanceof Element) return !1;
        for (n = r; n-- !== 0;)
            if (!((a[n] === "_owner" || a[n] === "__v" || a[n] === "__o") && e.$$typeof) && !zi(e[a[n]], t[a[n]])) return !1;
        return !0
    }
    return e !== e && t !== t
}
var PD = function (t, r) {
    try {
        return zi(t, r)
    } catch (n) {
        if ((n.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
        throw n
    }
};
const bB = Re(PD);
var LD = function (e, t, r, n, a, i, s, o) {
        if (!e) {
            var u;
            if (t === void 0) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var c = [r, n, a, i, s, o],
                    l = 0;
                u = new Error(t.replace(/%s/g, function () {
                    return c[l++]
                })), u.name = "Invariant Violation"
            }
            throw u.framesToPop = 1, u
        }
    },
    DD = LD;
const wB = Re(DD);
var FD = function (t, r, n, a) {
    var i = n ? n.call(a, t, r) : void 0;
    if (i !== void 0) return !!i;
    if (t === r) return !0;
    if (typeof t != "object" || !t || typeof r != "object" || !r) return !1;
    var s = Object.keys(t),
        o = Object.keys(r);
    if (s.length !== o.length) return !1;
    for (var u = Object.prototype.hasOwnProperty.bind(r), c = 0; c < s.length; c++) {
        var l = s[c];
        if (!u(l)) return !1;
        var f = t[l],
            d = r[l];
        if (i = n ? n.call(a, f, d, l) : void 0, i === !1 || i === void 0 && f !== d) return !1
    }
    return !0
};
const EB = Re(FD),
    jD = {
        type: "logger",
        log(e) {
            this.output("log", e)
        },
        warn(e) {
            this.output("warn", e)
        },
        error(e) {
            this.output("error", e)
        },
        output(e, t) {
            console && console[e] && console[e].apply(console, t)
        }
    };
class bs {
    constructor(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.init(t, r)
    }
    init(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.prefix = r.prefix || "i18next:", this.logger = t || jD, this.options = r, this.debug = r.debug
    }
    log() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        return this.forward(r, "log", "", !0)
    }
    warn() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        return this.forward(r, "warn", "", !0)
    }
    error() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        return this.forward(r, "error", "")
    }
    deprecate() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        return this.forward(r, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(t, r, n, a) {
        return a && !this.debug ? null : (typeof t[0] == "string" && (t[0] = `${n}${this.prefix} ${t[0]}`), this.logger[r](t))
    }
    create(t) {
        return new bs(this.logger, {
            prefix: `${this.prefix}:${t}:`,
            ...this.options
        })
    }
    clone(t) {
        return t = t || this.options, t.prefix = t.prefix || this.prefix, new bs(this.logger, t)
    }
}
var dt = new bs;
class Ao {
    constructor() {
        this.observers = {}
    }
    on(t, r) {
        return t.split(" ").forEach(n => {
            this.observers[n] = this.observers[n] || [], this.observers[n].push(r)
        }), this
    }
    off(t, r) {
        if (this.observers[t]) {
            if (!r) {
                delete this.observers[t];
                return
            }
            this.observers[t] = this.observers[t].filter(n => n !== r)
        }
    }
    emit(t) {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
        this.observers[t] && [].concat(this.observers[t]).forEach(s => {
            s(...n)
        }), this.observers["*"] && [].concat(this.observers["*"]).forEach(s => {
            s.apply(s, [t, ...n])
        })
    }
}

function Fn() {
    let e, t;
    const r = new Promise((n, a) => {
        e = n, t = a
    });
    return r.resolve = e, r.reject = t, r
}

function Km(e) {
    return e == null ? "" : "" + e
}

function UD(e, t, r) {
    e.forEach(n => {
        t[n] && (r[n] = t[n])
    })
}

function Gf(e, t, r) {
    function n(s) {
        return s && s.indexOf("###") > -1 ? s.replace(/###/g, ".") : s
    }

    function a() {
        return !e || typeof e == "string"
    }
    const i = typeof t != "string" ? [].concat(t) : t.split(".");
    for (; i.length > 1;) {
        if (a()) return {};
        const s = n(i.shift());
        !e[s] && r && (e[s] = new r), Object.prototype.hasOwnProperty.call(e, s) ? e = e[s] : e = {}
    }
    return a() ? {} : {
        obj: e,
        k: n(i.shift())
    }
}

function Xm(e, t, r) {
    const {
        obj: n,
        k: a
    } = Gf(e, t, Object);
    n[a] = r
}

function MD(e, t, r, n) {
    const {
        obj: a,
        k: i
    } = Gf(e, t, Object);
    a[i] = a[i] || [], n && (a[i] = a[i].concat(r)), n || a[i].push(r)
}

function ws(e, t) {
    const {
        obj: r,
        k: n
    } = Gf(e, t);
    if (r) return r[n]
}

function BD(e, t, r) {
    const n = ws(e, r);
    return n !== void 0 ? n : ws(t, r)
}

function J1(e, t, r) {
    for (const n in t) n !== "__proto__" && n !== "constructor" && (n in e ? typeof e[n] == "string" || e[n] instanceof String || typeof t[n] == "string" || t[n] instanceof String ? r && (e[n] = t[n]) : J1(e[n], t[n], r) : e[n] = t[n]);
    return e
}

function Mr(e) {
    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
}
var zD = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};

function VD(e) {
    return typeof e == "string" ? e.replace(/[&<>"'\/]/g, t => zD[t]) : e
}
const qD = [" ", ",", "?", "!", ";"];

function WD(e, t, r) {
    t = t || "", r = r || "";
    const n = qD.filter(s => t.indexOf(s) < 0 && r.indexOf(s) < 0);
    if (n.length === 0) return !0;
    const a = new RegExp(`(${n.map(s=>s==="?"?"\\?":s).join("|")})`);
    let i = !a.test(e);
    if (!i) {
        const s = e.indexOf(r);
        s > 0 && !a.test(e.substring(0, s)) && (i = !0)
    }
    return i
}

function Es(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!e) return;
    if (e[t]) return e[t];
    const n = t.split(r);
    let a = e;
    for (let i = 0; i < n.length; ++i) {
        if (!a || typeof a[n[i]] == "string" && i + 1 < n.length) return;
        if (a[n[i]] === void 0) {
            let s = 2,
                o = n.slice(i, i + s).join(r),
                u = a[o];
            for (; u === void 0 && n.length > i + s;) s++, o = n.slice(i, i + s).join(r), u = a[o];
            if (u === void 0) return;
            if (u === null) return null;
            if (t.endsWith(o)) {
                if (typeof u == "string") return u;
                if (o && typeof u[o] == "string") return u[o]
            }
            const c = n.slice(i + s).join(r);
            return c ? Es(u, c, r) : void 0
        }
        a = a[n[i]]
    }
    return a
}

function Ss(e) {
    return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e
}
class Ym extends Ao {
    constructor(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            ns: ["translation"],
            defaultNS: "translation"
        };
        super(), this.data = t || {}, this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(t) {
        this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
    }
    removeNamespaces(t) {
        const r = this.options.ns.indexOf(t);
        r > -1 && this.options.ns.splice(r, 1)
    }
    getResource(t, r, n) {
        let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        const i = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator,
            s = a.ignoreJSONStructure !== void 0 ? a.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let o = [t, r];
        n && typeof n != "string" && (o = o.concat(n)), n && typeof n == "string" && (o = o.concat(i ? n.split(i) : n)), t.indexOf(".") > -1 && (o = t.split("."));
        const u = ws(this.data, o);
        return u || !s || typeof n != "string" ? u : Es(this.data && this.data[t] && this.data[t][r], n, i)
    }
    addResource(t, r, n, a) {
        let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
            silent: !1
        };
        const s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
        let o = [t, r];
        n && (o = o.concat(s ? n.split(s) : n)), t.indexOf(".") > -1 && (o = t.split("."), a = r, r = o[1]), this.addNamespaces(r), Xm(this.data, o, a), i.silent || this.emit("added", t, r, n, a)
    }
    addResources(t, r, n) {
        let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
            silent: !1
        };
        for (const i in n)(typeof n[i] == "string" || Object.prototype.toString.apply(n[i]) === "[object Array]") && this.addResource(t, r, i, n[i], {
            silent: !0
        });
        a.silent || this.emit("added", t, r, n)
    }
    addResourceBundle(t, r, n, a, i) {
        let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
                silent: !1
            },
            o = [t, r];
        t.indexOf(".") > -1 && (o = t.split("."), a = n, n = r, r = o[1]), this.addNamespaces(r);
        let u = ws(this.data, o) || {};
        a ? J1(u, n, i) : u = {
            ...u,
            ...n
        }, Xm(this.data, o, u), s.silent || this.emit("added", t, r, n)
    }
    removeResourceBundle(t, r) {
        this.hasResourceBundle(t, r) && delete this.data[t][r], this.removeNamespaces(r), this.emit("removed", t, r)
    }
    hasResourceBundle(t, r) {
        return this.getResource(t, r) !== void 0
    }
    getResourceBundle(t, r) {
        return r || (r = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
            ...this.getResource(t, r)
        } : this.getResource(t, r)
    }
    getDataByLanguage(t) {
        return this.data[t]
    }
    hasLanguageSomeTranslations(t) {
        const r = this.getDataByLanguage(t);
        return !!(r && Object.keys(r) || []).find(a => r[a] && Object.keys(r[a]).length > 0)
    }
    toJSON() {
        return this.data
    }
}
var Q1 = {
    processors: {},
    addPostProcessor(e) {
        this.processors[e.name] = e
    },
    handle(e, t, r, n, a) {
        return e.forEach(i => {
            this.processors[i] && (t = this.processors[i].process(t, r, n, a))
        }), t
    }
};
const Jm = {};
class $s extends Ao {
    constructor(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        super(), UD(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = dt.create("translator")
    }
    changeLanguage(t) {
        t && (this.language = t)
    }
    exists(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
        };
        if (t == null) return !1;
        const n = this.resolve(t, r);
        return n && n.res !== void 0
    }
    extractFromKey(t, r) {
        let n = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
        n === void 0 && (n = ":");
        const a = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
        let i = r.ns || this.options.defaultNS || [];
        const s = n && t.indexOf(n) > -1,
            o = !this.options.userDefinedKeySeparator && !r.keySeparator && !this.options.userDefinedNsSeparator && !r.nsSeparator && !WD(t, n, a);
        if (s && !o) {
            const u = t.match(this.interpolator.nestingRegexp);
            if (u && u.length > 0) return {
                key: t,
                namespaces: i
            };
            const c = t.split(n);
            (n !== a || n === a && this.options.ns.indexOf(c[0]) > -1) && (i = c.shift()), t = c.join(a)
        }
        return typeof i == "string" && (i = [i]), {
            key: t,
            namespaces: i
        }
    }
    translate(t, r, n) {
        if (typeof r != "object" && this.options.overloadTranslationOptionHandler && (r = this.options.overloadTranslationOptionHandler(arguments)), typeof r == "object" && (r = {
                ...r
            }), r || (r = {}), t == null) return "";
        Array.isArray(t) || (t = [String(t)]);
        const a = r.returnDetails !== void 0 ? r.returnDetails : this.options.returnDetails,
            i = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator,
            {
                key: s,
                namespaces: o
            } = this.extractFromKey(t[t.length - 1], r),
            u = o[o.length - 1],
            c = r.lng || this.language,
            l = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (c && c.toLowerCase() === "cimode") {
            if (l) {
                const x = r.nsSeparator || this.options.nsSeparator;
                return a ? {
                    res: `${u}${x}${s}`,
                    usedKey: s,
                    exactUsedKey: s,
                    usedLng: c,
                    usedNS: u,
                    usedParams: this.getUsedParamsDetails(r)
                } : `${u}${x}${s}`
            }
            return a ? {
                res: s,
                usedKey: s,
                exactUsedKey: s,
                usedLng: c,
                usedNS: u,
                usedParams: this.getUsedParamsDetails(r)
            } : s
        }
        const f = this.resolve(t, r);
        let d = f && f.res;
        const h = f && f.usedKey || s,
            p = f && f.exactUsedKey || s,
            y = Object.prototype.toString.apply(d),
            b = ["[object Number]", "[object Function]", "[object RegExp]"],
            _ = r.joinArrays !== void 0 ? r.joinArrays : this.options.joinArrays,
            g = !this.i18nFormat || this.i18nFormat.handleAsObject;
        if (g && d && (typeof d != "string" && typeof d != "boolean" && typeof d != "number") && b.indexOf(y) < 0 && !(typeof _ == "string" && y === "[object Array]")) {
            if (!r.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const x = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(h, d, {
                    ...r,
                    ns: o
                }) : `key '${s} (${this.language})' returned an object instead of string.`;
                return a ? (f.res = x, f.usedParams = this.getUsedParamsDetails(r), f) : x
            }
            if (i) {
                const x = y === "[object Array]",
                    k = x ? [] : {},
                    F = x ? p : h;
                for (const z in d)
                    if (Object.prototype.hasOwnProperty.call(d, z)) {
                        const K = `${F}${i}${z}`;
                        k[z] = this.translate(K, {
                            ...r,
                            joinArrays: !1,
                            ns: o
                        }), k[z] === K && (k[z] = d[z])
                    } d = k
            }
        } else if (g && typeof _ == "string" && y === "[object Array]") d = d.join(_), d && (d = this.extendTranslation(d, t, r, n));
        else {
            let x = !1,
                k = !1;
            const F = r.count !== void 0 && typeof r.count != "string",
                z = $s.hasDefaultValue(r),
                K = F ? this.pluralResolver.getSuffix(c, r.count, r) : "",
                j = r.ordinal && F ? this.pluralResolver.getSuffix(c, r.count, {
                    ordinal: !1
                }) : "",
                Q = r[`defaultValue${K}`] || r[`defaultValue${j}`] || r.defaultValue;
            !this.isValidLookup(d) && z && (x = !0, d = Q), this.isValidLookup(d) || (k = !0, d = s);
            const I = (r.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && k ? void 0 : d,
                S = z && Q !== d && this.options.updateMissing;
            if (k || x || S) {
                if (this.logger.log(S ? "updateKey" : "missingKey", c, u, s, S ? Q : d), i) {
                    const A = this.resolve(s, {
                        ...r,
                        keySeparator: !1
                    });
                    A && A.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                }
                let v = [];
                const E = this.languageUtils.getFallbackCodes(this.options.fallbackLng, r.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && E && E[0])
                    for (let A = 0; A < E.length; A++) v.push(E[A]);
                else this.options.saveMissingTo === "all" ? v = this.languageUtils.toResolveHierarchy(r.lng || this.language) : v.push(r.lng || this.language);
                const $ = (A, w, C) => {
                    const T = z && C !== d ? C : I;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(A, u, w, T, S, r) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(A, u, w, T, S, r), this.emit("missingKey", A, u, w, d)
                };
                this.options.saveMissing && (this.options.saveMissingPlurals && F ? v.forEach(A => {
                    this.pluralResolver.getSuffixes(A, r).forEach(w => {
                        $([A], s + w, r[`defaultValue${w}`] || Q)
                    })
                }) : $(v, s, Q))
            }
            d = this.extendTranslation(d, t, r, f, n), k && d === s && this.options.appendNamespaceToMissingKey && (d = `${u}:${s}`), (k || x) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? d = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}:${s}` : s, x ? d : void 0) : d = this.options.parseMissingKeyHandler(d))
        }
        return a ? (f.res = d, f.usedParams = this.getUsedParamsDetails(r), f) : d
    }
    extendTranslation(t, r, n, a, i) {
        var s = this;
        if (this.i18nFormat && this.i18nFormat.parse) t = this.i18nFormat.parse(t, {
            ...this.options.interpolation.defaultVariables,
            ...n
        }, n.lng || this.language || a.usedLng, a.usedNS, a.usedKey, {
            resolved: a
        });
        else if (!n.skipInterpolation) {
            n.interpolation && this.interpolator.init({
                ...n,
                interpolation: {
                    ...this.options.interpolation,
                    ...n.interpolation
                }
            });
            const c = typeof t == "string" && (n && n.interpolation && n.interpolation.skipOnVariables !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let l;
            if (c) {
                const d = t.match(this.interpolator.nestingRegexp);
                l = d && d.length
            }
            let f = n.replace && typeof n.replace != "string" ? n.replace : n;
            if (this.options.interpolation.defaultVariables && (f = {
                    ...this.options.interpolation.defaultVariables,
                    ...f
                }), t = this.interpolator.interpolate(t, f, n.lng || this.language, n), c) {
                const d = t.match(this.interpolator.nestingRegexp),
                    h = d && d.length;
                l < h && (n.nest = !1)
            }!n.lng && this.options.compatibilityAPI !== "v1" && a && a.res && (n.lng = a.usedLng), n.nest !== !1 && (t = this.interpolator.nest(t, function () {
                for (var d = arguments.length, h = new Array(d), p = 0; p < d; p++) h[p] = arguments[p];
                return i && i[0] === h[0] && !n.context ? (s.logger.warn(`It seems you are nesting recursively key: ${h[0]} in key: ${r[0]}`), null) : s.translate(...h, r)
            }, n)), n.interpolation && this.interpolator.reset()
        }
        const o = n.postProcess || this.options.postProcess,
            u = typeof o == "string" ? [o] : o;
        return t != null && u && u.length && n.applyPostProcessor !== !1 && (t = Q1.handle(u, t, r, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: {
                ...a,
                usedParams: this.getUsedParamsDetails(n)
            },
            ...n
        } : n, this)), t
    }
    resolve(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            n, a, i, s, o;
        return typeof t == "string" && (t = [t]), t.forEach(u => {
            if (this.isValidLookup(n)) return;
            const c = this.extractFromKey(u, r),
                l = c.key;
            a = l;
            let f = c.namespaces;
            this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
            const d = r.count !== void 0 && typeof r.count != "string",
                h = d && !r.ordinal && r.count === 0 && this.pluralResolver.shouldUseIntlApi(),
                p = r.context !== void 0 && (typeof r.context == "string" || typeof r.context == "number") && r.context !== "",
                y = r.lngs ? r.lngs : this.languageUtils.toResolveHierarchy(r.lng || this.language, r.fallbackLng);
            f.forEach(b => {
                this.isValidLookup(n) || (o = b, !Jm[`${y[0]}-${b}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(o) && (Jm[`${y[0]}-${b}`] = !0, this.logger.warn(`key "${a}" for languages "${y.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), y.forEach(_ => {
                    if (this.isValidLookup(n)) return;
                    s = _;
                    const g = [l];
                    if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(g, l, _, b, r);
                    else {
                        let x;
                        d && (x = this.pluralResolver.getSuffix(_, r.count, r));
                        const k = `${this.options.pluralSeparator}zero`,
                            F = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (d && (g.push(l + x), r.ordinal && x.indexOf(F) === 0 && g.push(l + x.replace(F, this.options.pluralSeparator)), h && g.push(l + k)), p) {
                            const z = `${l}${this.options.contextSeparator}${r.context}`;
                            g.push(z), d && (g.push(z + x), r.ordinal && x.indexOf(F) === 0 && g.push(z + x.replace(F, this.options.pluralSeparator)), h && g.push(z + k))
                        }
                    }
                    let R;
                    for (; R = g.pop();) this.isValidLookup(n) || (i = R, n = this.getResource(_, b, R, r))
                }))
            })
        }), {
            res: n,
            usedKey: a,
            exactUsedKey: i,
            usedLng: s,
            usedNS: o
        }
    }
    isValidLookup(t) {
        return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "")
    }
    getResource(t, r, n) {
        let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, r, n, a) : this.resourceStore.getResource(t, r, n, a)
    }
    getUsedParamsDetails() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const r = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"],
            n = t.replace && typeof t.replace != "string";
        let a = n ? t.replace : t;
        if (n && typeof t.count < "u" && (a.count = t.count), this.options.interpolation.defaultVariables && (a = {
                ...this.options.interpolation.defaultVariables,
                ...a
            }), !n) {
            a = {
                ...a
            };
            for (const i of r) delete a[i]
        }
        return a
    }
    static hasDefaultValue(t) {
        const r = "defaultValue";
        for (const n in t)
            if (Object.prototype.hasOwnProperty.call(t, n) && r === n.substring(0, r.length) && t[n] !== void 0) return !0;
        return !1
    }
}

function Qu(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
class Qm {
    constructor(t) {
        this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = dt.create("languageUtils")
    }
    getScriptPartFromCode(t) {
        if (t = Ss(t), !t || t.indexOf("-") < 0) return null;
        const r = t.split("-");
        return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(r.join("-"))
    }
    getLanguagePartFromCode(t) {
        if (t = Ss(t), !t || t.indexOf("-") < 0) return t;
        const r = t.split("-");
        return this.formatLanguageCode(r[0])
    }
    formatLanguageCode(t) {
        if (typeof t == "string" && t.indexOf("-") > -1) {
            const r = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
            let n = t.split("-");
            return this.options.lowerCaseLng ? n = n.map(a => a.toLowerCase()) : n.length === 2 ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), r.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Qu(n[1].toLowerCase()))) : n.length === 3 && (n[0] = n[0].toLowerCase(), n[1].length === 2 && (n[1] = n[1].toUpperCase()), n[0] !== "sgn" && n[2].length === 2 && (n[2] = n[2].toUpperCase()), r.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Qu(n[1].toLowerCase())), r.indexOf(n[2].toLowerCase()) > -1 && (n[2] = Qu(n[2].toLowerCase()))), n.join("-")
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
    }
    isSupportedCode(t) {
        return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1
    }
    getBestMatchFromCodes(t) {
        if (!t) return null;
        let r;
        return t.forEach(n => {
            if (r) return;
            const a = this.formatLanguageCode(n);
            (!this.options.supportedLngs || this.isSupportedCode(a)) && (r = a)
        }), !r && this.options.supportedLngs && t.forEach(n => {
            if (r) return;
            const a = this.getLanguagePartFromCode(n);
            if (this.isSupportedCode(a)) return r = a;
            r = this.options.supportedLngs.find(i => {
                if (i === a) return i;
                if (!(i.indexOf("-") < 0 && a.indexOf("-") < 0) && i.indexOf(a) === 0) return i
            })
        }), r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]), r
    }
    getFallbackCodes(t, r) {
        if (!t) return [];
        if (typeof t == "function" && (t = t(r)), typeof t == "string" && (t = [t]), Object.prototype.toString.apply(t) === "[object Array]") return t;
        if (!r) return t.default || [];
        let n = t[r];
        return n || (n = t[this.getScriptPartFromCode(r)]), n || (n = t[this.formatLanguageCode(r)]), n || (n = t[this.getLanguagePartFromCode(r)]), n || (n = t.default), n || []
    }
    toResolveHierarchy(t, r) {
        const n = this.getFallbackCodes(r || this.options.fallbackLng || [], t),
            a = [],
            i = s => {
                s && (this.isSupportedCode(s) ? a.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`))
            };
        return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(t))) : typeof t == "string" && i(this.formatLanguageCode(t)), n.forEach(s => {
            a.indexOf(s) < 0 && i(this.formatLanguageCode(s))
        }), a
    }
}
let GD = [{
        lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
        nr: [1, 2],
        fc: 1
    }, {
        lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
        nr: [1, 2],
        fc: 2
    }, {
        lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
        nr: [1],
        fc: 3
    }, {
        lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
        nr: [1, 2, 5],
        fc: 4
    }, {
        lngs: ["ar"],
        nr: [0, 1, 2, 3, 11, 100],
        fc: 5
    }, {
        lngs: ["cs", "sk"],
        nr: [1, 2, 5],
        fc: 6
    }, {
        lngs: ["csb", "pl"],
        nr: [1, 2, 5],
        fc: 7
    }, {
        lngs: ["cy"],
        nr: [1, 2, 3, 8],
        fc: 8
    }, {
        lngs: ["fr"],
        nr: [1, 2],
        fc: 9
    }, {
        lngs: ["ga"],
        nr: [1, 2, 3, 7, 11],
        fc: 10
    }, {
        lngs: ["gd"],
        nr: [1, 2, 3, 20],
        fc: 11
    }, {
        lngs: ["is"],
        nr: [1, 2],
        fc: 12
    }, {
        lngs: ["jv"],
        nr: [0, 1],
        fc: 13
    }, {
        lngs: ["kw"],
        nr: [1, 2, 3, 4],
        fc: 14
    }, {
        lngs: ["lt"],
        nr: [1, 2, 10],
        fc: 15
    }, {
        lngs: ["lv"],
        nr: [1, 2, 0],
        fc: 16
    }, {
        lngs: ["mk"],
        nr: [1, 2],
        fc: 17
    }, {
        lngs: ["mnk"],
        nr: [0, 1, 2],
        fc: 18
    }, {
        lngs: ["mt"],
        nr: [1, 2, 11, 20],
        fc: 19
    }, {
        lngs: ["or"],
        nr: [2, 1],
        fc: 2
    }, {
        lngs: ["ro"],
        nr: [1, 2, 20],
        fc: 20
    }, {
        lngs: ["sl"],
        nr: [5, 1, 2, 3],
        fc: 21
    }, {
        lngs: ["he", "iw"],
        nr: [1, 2, 20, 21],
        fc: 22
    }],
    HD = {
        1: function (e) {
            return +(e > 1)
        },
        2: function (e) {
            return +(e != 1)
        },
        3: function (e) {
            return 0
        },
        4: function (e) {
            return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
        },
        5: function (e) {
            return e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
        },
        6: function (e) {
            return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2
        },
        7: function (e) {
            return e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
        },
        8: function (e) {
            return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3
        },
        9: function (e) {
            return +(e >= 2)
        },
        10: function (e) {
            return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4
        },
        11: function (e) {
            return e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3
        },
        12: function (e) {
            return +(e % 10 != 1 || e % 100 == 11)
        },
        13: function (e) {
            return +(e !== 0)
        },
        14: function (e) {
            return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3
        },
        15: function (e) {
            return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
        },
        16: function (e) {
            return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2
        },
        17: function (e) {
            return e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1
        },
        18: function (e) {
            return e == 0 ? 0 : e == 1 ? 1 : 2
        },
        19: function (e) {
            return e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3
        },
        20: function (e) {
            return e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2
        },
        21: function (e) {
            return e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0
        },
        22: function (e) {
            return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
        }
    };
const KD = ["v1", "v2", "v3"],
    XD = ["v4"],
    Zm = {
        zero: 0,
        one: 1,
        two: 2,
        few: 3,
        many: 4,
        other: 5
    };

function YD() {
    const e = {};
    return GD.forEach(t => {
        t.lngs.forEach(r => {
            e[r] = {
                numbers: t.nr,
                plurals: HD[t.fc]
            }
        })
    }), e
}
class JD {
    constructor(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.languageUtils = t, this.options = r, this.logger = dt.create("pluralResolver"), (!this.options.compatibilityJSON || XD.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = YD()
    }
    addRule(t, r) {
        this.rules[t] = r
    }
    getRule(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (this.shouldUseIntlApi()) try {
            return new Intl.PluralRules(Ss(t), {
                type: r.ordinal ? "ordinal" : "cardinal"
            })
        } catch {
            return
        }
        return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    }
    needsPlural(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const n = this.getRule(t, r);
        return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
    }
    getPluralFormsOfKey(t, r) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return this.getSuffixes(t, n).map(a => `${r}${a}`)
    }
    getSuffixes(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const n = this.getRule(t, r);
        return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort((a, i) => Zm[a] - Zm[i]).map(a => `${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${a}`) : n.numbers.map(a => this.getSuffix(t, a, r)) : []
    }
    getSuffix(t, r) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        const a = this.getRule(t, n);
        return a ? this.shouldUseIntlApi() ? `${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${a.select(r)}` : this.getSuffixRetroCompatible(a, r) : (this.logger.warn(`no plural rule found for: ${t}`), "")
    }
    getSuffixRetroCompatible(t, r) {
        const n = t.noAbs ? t.plurals(r) : t.plurals(Math.abs(r));
        let a = t.numbers[n];
        this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (a === 2 ? a = "plural" : a === 1 && (a = ""));
        const i = () => this.options.prepend && a.toString() ? this.options.prepend + a.toString() : a.toString();
        return this.options.compatibilityJSON === "v1" ? a === 1 ? "" : typeof a == "number" ? `_plural_${a.toString()}` : i() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? i() : this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString()
    }
    shouldUseIntlApi() {
        return !KD.includes(this.options.compatibilityJSON)
    }
}

function eg(e, t, r) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
        a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
        i = BD(e, t, r);
    return !i && a && typeof r == "string" && (i = Es(e, r, n), i === void 0 && (i = Es(t, r, n))), i
}
class QD {
    constructor() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.logger = dt.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || (r => r), this.init(t)
    }
    init() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        t.interpolation || (t.interpolation = {
            escapeValue: !0
        });
        const r = t.interpolation;
        this.escape = r.escape !== void 0 ? r.escape : VD, this.escapeValue = r.escapeValue !== void 0 ? r.escapeValue : !0, this.useRawValueToEscape = r.useRawValueToEscape !== void 0 ? r.useRawValueToEscape : !1, this.prefix = r.prefix ? Mr(r.prefix) : r.prefixEscaped || "{{", this.suffix = r.suffix ? Mr(r.suffix) : r.suffixEscaped || "}}", this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",", this.unescapePrefix = r.unescapeSuffix ? "" : r.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : r.unescapeSuffix || "", this.nestingPrefix = r.nestingPrefix ? Mr(r.nestingPrefix) : r.nestingPrefixEscaped || Mr("$t("), this.nestingSuffix = r.nestingSuffix ? Mr(r.nestingSuffix) : r.nestingSuffixEscaped || Mr(")"), this.nestingOptionsSeparator = r.nestingOptionsSeparator ? r.nestingOptionsSeparator : r.nestingOptionsSeparator || ",", this.maxReplaces = r.maxReplaces ? r.maxReplaces : 1e3, this.alwaysFormat = r.alwaysFormat !== void 0 ? r.alwaysFormat : !1, this.resetRegExp()
    }
    reset() {
        this.options && this.init(this.options)
    }
    resetRegExp() {
        const t = `${this.prefix}(.+?)${this.suffix}`;
        this.regexp = new RegExp(t, "g");
        const r = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
        this.regexpUnescape = new RegExp(r, "g");
        const n = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
        this.nestingRegexp = new RegExp(n, "g")
    }
    interpolate(t, r, n, a) {
        let i, s, o;
        const u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

        function c(p) {
            return p.replace(/\$/g, "$$$$")
        }
        const l = p => {
            if (p.indexOf(this.formatSeparator) < 0) {
                const g = eg(r, u, p, this.options.keySeparator, this.options.ignoreJSONStructure);
                return this.alwaysFormat ? this.format(g, void 0, n, {
                    ...a,
                    ...r,
                    interpolationkey: p
                }) : g
            }
            const y = p.split(this.formatSeparator),
                b = y.shift().trim(),
                _ = y.join(this.formatSeparator).trim();
            return this.format(eg(r, u, b, this.options.keySeparator, this.options.ignoreJSONStructure), _, n, {
                ...a,
                ...r,
                interpolationkey: b
            })
        };
        this.resetRegExp();
        const f = a && a.missingInterpolationHandler || this.options.missingInterpolationHandler,
            d = a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: p => c(p)
        }, {
            regex: this.regexp,
            safeValue: p => this.escapeValue ? c(this.escape(p)) : c(p)
        }].forEach(p => {
            for (o = 0; i = p.regex.exec(t);) {
                const y = i[1].trim();
                if (s = l(y), s === void 0)
                    if (typeof f == "function") {
                        const _ = f(t, i, a);
                        s = typeof _ == "string" ? _ : ""
                    } else if (a && Object.prototype.hasOwnProperty.call(a, y)) s = "";
                else if (d) {
                    s = i[0];
                    continue
                } else this.logger.warn(`missed to pass in variable ${y} for interpolating ${t}`), s = "";
                else typeof s != "string" && !this.useRawValueToEscape && (s = Km(s));
                const b = p.safeValue(s);
                if (t = t.replace(i[0], b), d ? (p.regex.lastIndex += s.length, p.regex.lastIndex -= i[0].length) : p.regex.lastIndex = 0, o++, o >= this.maxReplaces) break
            }
        }), t
    }
    nest(t, r) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            a, i, s;

        function o(u, c) {
            const l = this.nestingOptionsSeparator;
            if (u.indexOf(l) < 0) return u;
            const f = u.split(new RegExp(`${l}[ ]*{`));
            let d = `{${f[1]}`;
            u = f[0], d = this.interpolate(d, s);
            const h = d.match(/'/g),
                p = d.match(/"/g);
            (h && h.length % 2 === 0 && !p || p.length % 2 !== 0) && (d = d.replace(/'/g, '"'));
            try {
                s = JSON.parse(d), c && (s = {
                    ...c,
                    ...s
                })
            } catch (y) {
                return this.logger.warn(`failed parsing options string in nesting for key ${u}`, y), `${u}${l}${d}`
            }
            return delete s.defaultValue, u
        }
        for (; a = this.nestingRegexp.exec(t);) {
            let u = [];
            s = {
                ...n
            }, s = s.replace && typeof s.replace != "string" ? s.replace : s, s.applyPostProcessor = !1, delete s.defaultValue;
            let c = !1;
            if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
                const l = a[1].split(this.formatSeparator).map(f => f.trim());
                a[1] = l.shift(), u = l, c = !0
            }
            if (i = r(o.call(this, a[1].trim(), s), s), i && a[0] === t && typeof i != "string") return i;
            typeof i != "string" && (i = Km(i)), i || (this.logger.warn(`missed to resolve ${a[1]} for nesting ${t}`), i = ""), c && (i = u.reduce((l, f) => this.format(l, f, n.lng, {
                ...n,
                interpolationkey: a[1].trim()
            }), i.trim())), t = t.replace(a[0], i), this.regexp.lastIndex = 0
        }
        return t
    }
}

function ZD(e) {
    let t = e.toLowerCase().trim();
    const r = {};
    if (e.indexOf("(") > -1) {
        const n = e.split("(");
        t = n[0].toLowerCase().trim();
        const a = n[1].substring(0, n[1].length - 1);
        t === "currency" && a.indexOf(":") < 0 ? r.currency || (r.currency = a.trim()) : t === "relativetime" && a.indexOf(":") < 0 ? r.range || (r.range = a.trim()) : a.split(";").forEach(s => {
            if (!s) return;
            const [o, ...u] = s.split(":"), c = u.join(":").trim().replace(/^'+|'+$/g, "");
            r[o.trim()] || (r[o.trim()] = c), c === "false" && (r[o.trim()] = !1), c === "true" && (r[o.trim()] = !0), isNaN(c) || (r[o.trim()] = parseInt(c, 10))
        })
    }
    return {
        formatName: t,
        formatOptions: r
    }
}

function Br(e) {
    const t = {};
    return function (n, a, i) {
        const s = a + JSON.stringify(i);
        let o = t[s];
        return o || (o = e(Ss(a), i), t[s] = o), o(n)
    }
}
class eF {
    constructor() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.logger = dt.create("formatter"), this.options = t, this.formats = {
            number: Br((r, n) => {
                const a = new Intl.NumberFormat(r, {
                    ...n
                });
                return i => a.format(i)
            }),
            currency: Br((r, n) => {
                const a = new Intl.NumberFormat(r, {
                    ...n,
                    style: "currency"
                });
                return i => a.format(i)
            }),
            datetime: Br((r, n) => {
                const a = new Intl.DateTimeFormat(r, {
                    ...n
                });
                return i => a.format(i)
            }),
            relativetime: Br((r, n) => {
                const a = new Intl.RelativeTimeFormat(r, {
                    ...n
                });
                return i => a.format(i, n.range || "day")
            }),
            list: Br((r, n) => {
                const a = new Intl.ListFormat(r, {
                    ...n
                });
                return i => a.format(i)
            })
        }, this.init(t)
    }
    init(t) {
        const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
        }).interpolation;
        this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ","
    }
    add(t, r) {
        this.formats[t.toLowerCase().trim()] = r
    }
    addCached(t, r) {
        this.formats[t.toLowerCase().trim()] = Br(r)
    }
    format(t, r, n) {
        let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return r.split(this.formatSeparator).reduce((o, u) => {
            const {
                formatName: c,
                formatOptions: l
            } = ZD(u);
            if (this.formats[c]) {
                let f = o;
                try {
                    const d = a && a.formatParams && a.formatParams[a.interpolationkey] || {},
                        h = d.locale || d.lng || a.locale || a.lng || n;
                    f = this.formats[c](o, h, {
                        ...l,
                        ...a,
                        ...d
                    })
                } catch (d) {
                    this.logger.warn(d)
                }
                return f
            } else this.logger.warn(`there was no format function for ${c}`);
            return o
        }, t)
    }
}

function tF(e, t) {
    e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--)
}
class rF extends Ao {
    constructor(t, r, n) {
        let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        super(), this.backend = t, this.store = r, this.services = n, this.languageUtils = n.languageUtils, this.options = a, this.logger = dt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = a.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5, this.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(n, a.backend, a)
    }
    queueLoad(t, r, n, a) {
        const i = {},
            s = {},
            o = {},
            u = {};
        return t.forEach(c => {
            let l = !0;
            r.forEach(f => {
                const d = `${c}|${f}`;
                !n.reload && this.store.hasResourceBundle(c, f) ? this.state[d] = 2 : this.state[d] < 0 || (this.state[d] === 1 ? s[d] === void 0 && (s[d] = !0) : (this.state[d] = 1, l = !1, s[d] === void 0 && (s[d] = !0), i[d] === void 0 && (i[d] = !0), u[f] === void 0 && (u[f] = !0)))
            }), l || (o[c] = !0)
        }), (Object.keys(i).length || Object.keys(s).length) && this.queue.push({
            pending: s,
            pendingCount: Object.keys(s).length,
            loaded: {},
            errors: [],
            callback: a
        }), {
            toLoad: Object.keys(i),
            pending: Object.keys(s),
            toLoadLanguages: Object.keys(o),
            toLoadNamespaces: Object.keys(u)
        }
    }
    loaded(t, r, n) {
        const a = t.split("|"),
            i = a[0],
            s = a[1];
        r && this.emit("failedLoading", i, s, r), n && this.store.addResourceBundle(i, s, n), this.state[t] = r ? -1 : 2;
        const o = {};
        this.queue.forEach(u => {
            MD(u.loaded, [i], s), tF(u, t), r && u.errors.push(r), u.pendingCount === 0 && !u.done && (Object.keys(u.loaded).forEach(c => {
                o[c] || (o[c] = {});
                const l = u.loaded[c];
                l.length && l.forEach(f => {
                    o[c][f] === void 0 && (o[c][f] = !0)
                })
            }), u.done = !0, u.errors.length ? u.callback(u.errors) : u.callback())
        }), this.emit("loaded", o), this.queue = this.queue.filter(u => !u.done)
    }
    read(t, r, n) {
        let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
            i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
            s = arguments.length > 5 ? arguments[5] : void 0;
        if (!t.length) return s(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: t,
                ns: r,
                fcName: n,
                tried: a,
                wait: i,
                callback: s
            });
            return
        }
        this.readingCalls++;
        const o = (c, l) => {
                if (this.readingCalls--, this.waitingReads.length > 0) {
                    const f = this.waitingReads.shift();
                    this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback)
                }
                if (c && l && a < this.maxRetries) {
                    setTimeout(() => {
                        this.read.call(this, t, r, n, a + 1, i * 2, s)
                    }, i);
                    return
                }
                s(c, l)
            },
            u = this.backend[n].bind(this.backend);
        if (u.length === 2) {
            try {
                const c = u(t, r);
                c && typeof c.then == "function" ? c.then(l => o(null, l)).catch(o) : o(null, c)
            } catch (c) {
                o(c)
            }
            return
        }
        return u(t, r, o)
    }
    prepareLoading(t, r) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            a = arguments.length > 3 ? arguments[3] : void 0;
        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), a && a();
        typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)), typeof r == "string" && (r = [r]);
        const i = this.queueLoad(t, r, n, a);
        if (!i.toLoad.length) return i.pending.length || a(), null;
        i.toLoad.forEach(s => {
            this.loadOne(s)
        })
    }
    load(t, r, n) {
        this.prepareLoading(t, r, {}, n)
    }
    reload(t, r, n) {
        this.prepareLoading(t, r, {
            reload: !0
        }, n)
    }
    loadOne(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        const n = t.split("|"),
            a = n[0],
            i = n[1];
        this.read(a, i, "read", void 0, void 0, (s, o) => {
            s && this.logger.warn(`${r}loading namespace ${i} for language ${a} failed`, s), !s && o && this.logger.log(`${r}loaded namespace ${i} for language ${a}`, o), this.loaded(t, s, o)
        })
    }
    saveMissing(t, r, n, a, i) {
        let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
            o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {};
        if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(r)) {
            this.logger.warn(`did not save key "${n}" as the namespace "${r}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return
        }
        if (!(n == null || n === "")) {
            if (this.backend && this.backend.create) {
                const u = {
                        ...s,
                        isUpdate: i
                    },
                    c = this.backend.create.bind(this.backend);
                if (c.length < 6) try {
                    let l;
                    c.length === 5 ? l = c(t, r, n, a, u) : l = c(t, r, n, a), l && typeof l.then == "function" ? l.then(f => o(null, f)).catch(o) : o(null, l)
                } catch (l) {
                    o(l)
                } else c(t, r, n, a, o, u)
            }!t || !t[0] || this.store.addResource(t[0], r, n, a)
        }
    }
}

function tg() {
    return {
        debug: !1,
        initImmediate: !0,
        ns: ["translation"],
        defaultNS: ["translation"],
        fallbackLng: ["dev"],
        fallbackNS: !1,
        supportedLngs: !1,
        nonExplicitSupportedLngs: !1,
        load: "all",
        preload: !1,
        simplifyPluralSuffix: !0,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        partialBundledLanguages: !1,
        saveMissing: !1,
        updateMissing: !1,
        saveMissingTo: "fallback",
        saveMissingPlurals: !0,
        missingKeyHandler: !1,
        missingInterpolationHandler: !1,
        postProcess: !1,
        postProcessPassResolved: !1,
        returnNull: !1,
        returnEmptyString: !0,
        returnObjects: !1,
        joinArrays: !1,
        returnedObjectHandler: !1,
        parseMissingKeyHandler: !1,
        appendNamespaceToMissingKey: !1,
        appendNamespaceToCIMode: !1,
        overloadTranslationOptionHandler: function (t) {
            let r = {};
            if (typeof t[1] == "object" && (r = t[1]), typeof t[1] == "string" && (r.defaultValue = t[1]), typeof t[2] == "string" && (r.tDescription = t[2]), typeof t[2] == "object" || typeof t[3] == "object") {
                const n = t[3] || t[2];
                Object.keys(n).forEach(a => {
                    r[a] = n[a]
                })
            }
            return r
        },
        interpolation: {
            escapeValue: !0,
            format: (e, t, r, n) => e,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0
        }
    }
}

function rg(e) {
    return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e
}

function Si() {}

function nF(e) {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(r => {
        typeof e[r] == "function" && (e[r] = e[r].bind(e))
    })
}
class va extends Ao {
    constructor() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            r = arguments.length > 1 ? arguments[1] : void 0;
        if (super(), this.options = rg(t), this.services = {}, this.logger = dt, this.modules = {
                external: []
            }, nF(this), r && !this.isInitialized && !t.isClone) {
            if (!this.options.initImmediate) return this.init(t, r), this;
            setTimeout(() => {
                this.init(t, r)
            }, 0)
        }
    }
    init() {
        var t = this;
        let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            n = arguments.length > 1 ? arguments[1] : void 0;
        typeof r == "function" && (n = r, r = {}), !r.defaultNS && r.defaultNS !== !1 && r.ns && (typeof r.ns == "string" ? r.defaultNS = r.ns : r.ns.indexOf("translation") < 0 && (r.defaultNS = r.ns[0]));
        const a = tg();
        this.options = {
            ...a,
            ...this.options,
            ...rg(r)
        }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
            ...a.interpolation,
            ...this.options.interpolation
        }), r.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = r.keySeparator), r.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = r.nsSeparator);

        function i(l) {
            return l ? typeof l == "function" ? new l : l : null
        }
        if (!this.options.isClone) {
            this.modules.logger ? dt.init(i(this.modules.logger), this.options) : dt.init(null, this.options);
            let l;
            this.modules.formatter ? l = this.modules.formatter : typeof Intl < "u" && (l = eF);
            const f = new Qm(this.options);
            this.store = new Ym(this.options.resources, this.options);
            const d = this.services;
            d.logger = dt, d.resourceStore = this.store, d.languageUtils = f, d.pluralResolver = new JD(f, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }), l && (!this.options.interpolation.format || this.options.interpolation.format === a.interpolation.format) && (d.formatter = i(l), d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new QD(this.options), d.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            }, d.backendConnector = new rF(i(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", function (h) {
                for (var p = arguments.length, y = new Array(p > 1 ? p - 1 : 0), b = 1; b < p; b++) y[b - 1] = arguments[b];
                t.emit(h, ...y)
            }), this.modules.languageDetector && (d.languageDetector = i(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = i(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new $s(this.services, this.options), this.translator.on("*", function (h) {
                for (var p = arguments.length, y = new Array(p > 1 ? p - 1 : 0), b = 1; b < p; b++) y[b - 1] = arguments[b];
                t.emit(h, ...y)
            }), this.modules.external.forEach(h => {
                h.init && h.init(this)
            })
        }
        if (this.format = this.options.interpolation.format, n || (n = Si), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const l = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            l.length > 0 && l[0] !== "dev" && (this.options.lng = l[0])
        }!this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(l => {
            this[l] = function () {
                return t.store[l](...arguments)
            }
        }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(l => {
            this[l] = function () {
                return t.store[l](...arguments), t
            }
        });
        const u = Fn(),
            c = () => {
                const l = (f, d) => {
                    this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), u.resolve(d), n(f, d)
                };
                if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return l(null, this.t.bind(this));
                this.changeLanguage(this.options.lng, l)
            };
        return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), u
    }
    loadResources(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Si;
        const a = typeof t == "string" ? t : this.language;
        if (typeof t == "function" && (n = t), !this.options.resources || this.options.partialBundledLanguages) {
            if (a && a.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return n();
            const i = [],
                s = o => {
                    if (!o || o === "cimode") return;
                    this.services.languageUtils.toResolveHierarchy(o).forEach(c => {
                        c !== "cimode" && i.indexOf(c) < 0 && i.push(c)
                    })
                };
            a ? s(a) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(u => s(u)), this.options.preload && this.options.preload.forEach(o => s(o)), this.services.backendConnector.load(i, this.options.ns, o => {
                !o && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(o)
            })
        } else n(null)
    }
    reloadResources(t, r, n) {
        const a = Fn();
        return t || (t = this.languages), r || (r = this.options.ns), n || (n = Si), this.services.backendConnector.reload(t, r, i => {
            a.resolve(), n(i)
        }), a
    }
    use(t) {
        if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && Q1.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this
    }
    setResolvedLanguage(t) {
        if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
            for (let r = 0; r < this.languages.length; r++) {
                const n = this.languages[r];
                if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
                    this.resolvedLanguage = n;
                    break
                }
            }
    }
    changeLanguage(t, r) {
        var n = this;
        this.isLanguageChangingTo = t;
        const a = Fn();
        this.emit("languageChanging", t);
        const i = u => {
                this.language = u, this.languages = this.services.languageUtils.toResolveHierarchy(u), this.resolvedLanguage = void 0, this.setResolvedLanguage(u)
            },
            s = (u, c) => {
                c ? (i(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, a.resolve(function () {
                    return n.t(...arguments)
                }), r && r(u, function () {
                    return n.t(...arguments)
                })
            },
            o = u => {
                !t && !u && this.services.languageDetector && (u = []);
                const c = typeof u == "string" ? u : this.services.languageUtils.getBestMatchFromCodes(u);
                c && (this.language || i(c), this.translator.language || this.translator.changeLanguage(c), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(c)), this.loadResources(c, l => {
                    s(l, c)
                })
            };
        return !t && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(t), a
    }
    getFixedT(t, r, n) {
        var a = this;
        const i = function (s, o) {
            let u;
            if (typeof o != "object") {
                for (var c = arguments.length, l = new Array(c > 2 ? c - 2 : 0), f = 2; f < c; f++) l[f - 2] = arguments[f];
                u = a.options.overloadTranslationOptionHandler([s, o].concat(l))
            } else u = {
                ...o
            };
            u.lng = u.lng || i.lng, u.lngs = u.lngs || i.lngs, u.ns = u.ns || i.ns, u.keyPrefix = u.keyPrefix || n || i.keyPrefix;
            const d = a.options.keySeparator || ".";
            let h;
            return u.keyPrefix && Array.isArray(s) ? h = s.map(p => `${u.keyPrefix}${d}${p}`) : h = u.keyPrefix ? `${u.keyPrefix}${d}${s}` : s, a.t(h, u)
        };
        return typeof t == "string" ? i.lng = t : i.lngs = t, i.ns = r, i.keyPrefix = n, i
    }
    t() {
        return this.translator && this.translator.translate(...arguments)
    }
    exists() {
        return this.translator && this.translator.exists(...arguments)
    }
    setDefaultNamespace(t) {
        this.options.defaultNS = t
    }
    hasLoadedNamespace(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
        if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
        const n = r.lng || this.resolvedLanguage || this.languages[0],
            a = this.options ? this.options.fallbackLng : !1,
            i = this.languages[this.languages.length - 1];
        if (n.toLowerCase() === "cimode") return !0;
        const s = (o, u) => {
            const c = this.services.backendConnector.state[`${o}|${u}`];
            return c === -1 || c === 2
        };
        if (r.precheck) {
            const o = r.precheck(this, s);
            if (o !== void 0) return o
        }
        return !!(this.hasResourceBundle(n, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(n, t) && (!a || s(i, t)))
    }
    loadNamespaces(t, r) {
        const n = Fn();
        return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach(a => {
            this.options.ns.indexOf(a) < 0 && this.options.ns.push(a)
        }), this.loadResources(a => {
            n.resolve(), r && r(a)
        }), n) : (r && r(), Promise.resolve())
    }
    loadLanguages(t, r) {
        const n = Fn();
        typeof t == "string" && (t = [t]);
        const a = this.options.preload || [],
            i = t.filter(s => a.indexOf(s) < 0);
        return i.length ? (this.options.preload = a.concat(i), this.loadResources(s => {
            n.resolve(), r && r(s)
        }), n) : (r && r(), Promise.resolve())
    }
    dir(t) {
        if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t) return "rtl";
        const r = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"],
            n = this.services && this.services.languageUtils || new Qm(tg());
        return r.indexOf(n.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            r = arguments.length > 1 ? arguments[1] : void 0;
        return new va(t, r)
    }
    cloneInstance() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Si;
        const n = t.forkResourceStore;
        n && delete t.forkResourceStore;
        const a = {
                ...this.options,
                ...t,
                isClone: !0
            },
            i = new va(a);
        return (t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)), ["store", "services", "language"].forEach(o => {
            i[o] = this[o]
        }), i.services = {
            ...this.services
        }, i.services.utils = {
            hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
        }, n && (i.store = new Ym(this.store.data, a), i.services.resourceStore = i.store), i.translator = new $s(i.services, a), i.translator.on("*", function (o) {
            for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), l = 1; l < u; l++) c[l - 1] = arguments[l];
            i.emit(o, ...c)
        }), i.init(a, r), i.translator.options = a, i.translator.backendConnector.services.utils = {
            hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
        }, i
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const xe = va.createInstance();
xe.createInstance = va.createInstance;
xe.createInstance;
xe.dir;
xe.init;
xe.loadResources;
xe.reloadResources;
xe.use;
xe.changeLanguage;
xe.getFixedT;
const SB = xe.t;
xe.exists;
xe.setDefaultNamespace;
xe.hasLoadedNamespace;
xe.loadNamespaces;
xe.loadLanguages;

function ng() {
    return ng = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, ng.apply(this, arguments)
}
var aF = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
};
const iF = Re(aF);
var sF = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;

function ag(e) {
    var t = {
            type: "tag",
            name: "",
            voidElement: !1,
            attrs: {},
            children: []
        },
        r = e.match(/<\/?([^\s]+?)[/\s>]/);
    if (r && (t.name = r[1], (iF[r[1]] || e.charAt(e.length - 2) === "/") && (t.voidElement = !0), t.name.startsWith("!--"))) {
        var n = e.indexOf("-->");
        return {
            type: "comment",
            comment: n !== -1 ? e.slice(4, n) : ""
        }
    }
    for (var a = new RegExp(sF), i = null;
        (i = a.exec(e)) !== null;)
        if (i[0].trim())
            if (i[1]) {
                var s = i[1].trim(),
                    o = [s, ""];
                s.indexOf("=") > -1 && (o = s.split("=")), t.attrs[o[0]] = o[1], a.lastIndex--
            } else i[2] && (t.attrs[i[2]] = i[3].trim().substring(1, i[3].length - 1));
    return t
}
var oF = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
    uF = /^\s*$/,
    cF = Object.create(null);

function Z1(e, t) {
    switch (t.type) {
        case "text":
            return e + t.content;
        case "tag":
            return e += "<" + t.name + (t.attrs ? function (r) {
                var n = [];
                for (var a in r) n.push(a + '="' + r[a] + '"');
                return n.length ? " " + n.join(" ") : ""
            }(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(Z1, "") + "</" + t.name + ">";
        case "comment":
            return e + "<!--" + t.comment + "-->"
    }
}
var $B = {
    parse: function (e, t) {
        t || (t = {}), t.components || (t.components = cF);
        var r, n = [],
            a = [],
            i = -1,
            s = !1;
        if (e.indexOf("<") !== 0) {
            var o = e.indexOf("<");
            n.push({
                type: "text",
                content: o === -1 ? e : e.substring(0, o)
            })
        }
        return e.replace(oF, function (u, c) {
            if (s) {
                if (u !== "</" + r.name + ">") return;
                s = !1
            }
            var l, f = u.charAt(1) !== "/",
                d = u.startsWith("<!--"),
                h = c + u.length,
                p = e.charAt(h);
            if (d) {
                var y = ag(u);
                return i < 0 ? (n.push(y), n) : ((l = a[i]).children.push(y), n)
            }
            if (f && (i++, (r = ag(u)).type === "tag" && t.components[r.name] && (r.type = "component", s = !0), r.voidElement || s || !p || p === "<" || r.children.push({
                    type: "text",
                    content: e.slice(h, e.indexOf("<", h))
                }), i === 0 && n.push(r), (l = a[i - 1]) && l.children.push(r), a[i] = r), (!f || r.voidElement) && (i > -1 && (r.voidElement || r.name === u.slice(2, -1)) && (i--, r = i === -1 ? n : a[i]), !s && p !== "<" && p)) {
                l = i === -1 ? n : a[i].children;
                var b = e.indexOf("<", h),
                    _ = e.slice(h, b === -1 ? void 0 : b);
                uF.test(_) && (_ = " "), (b > -1 && i + l.length >= 0 || _ !== " ") && l.push({
                    type: "text",
                    content: _
                })
            }
        }), n
    },
    stringify: function (e) {
        return e.reduce(function (t, r) {
            return t + Z1("", r)
        }, "")
    }
};

function lF(e) {
    for (var t = -1, r = e ? e.length : 0, n = 0, a = []; ++t < r;) {
        var i = e[t];
        i && (a[n++] = i)
    }
    return a
}
var AB = lF,
    As = {
        exports: {}
    };
As.exports;
(function (e, t) {
    var r = 200,
        n = "__lodash_hash_undefined__",
        a = 800,
        i = 16,
        s = 9007199254740991,
        o = "[object Arguments]",
        u = "[object Array]",
        c = "[object AsyncFunction]",
        l = "[object Boolean]",
        f = "[object Date]",
        d = "[object Error]",
        h = "[object Function]",
        p = "[object GeneratorFunction]",
        y = "[object Map]",
        b = "[object Number]",
        _ = "[object Null]",
        g = "[object Object]",
        R = "[object Proxy]",
        x = "[object RegExp]",
        k = "[object Set]",
        F = "[object String]",
        z = "[object Undefined]",
        K = "[object WeakMap]",
        j = "[object ArrayBuffer]",
        Q = "[object DataView]",
        q = "[object Float32Array]",
        I = "[object Float64Array]",
        S = "[object Int8Array]",
        v = "[object Int16Array]",
        E = "[object Int32Array]",
        $ = "[object Uint8Array]",
        A = "[object Uint8ClampedArray]",
        w = "[object Uint16Array]",
        C = "[object Uint32Array]",
        T = /[\\^$.*+?()[\]{}|]/g,
        P = /^\[object .+?Constructor\]$/,
        B = /^(?:0|[1-9]\d*)$/,
        M = {};
    M[q] = M[I] = M[S] = M[v] = M[E] = M[$] = M[A] = M[w] = M[C] = !0, M[o] = M[u] = M[j] = M[l] = M[Q] = M[f] = M[d] = M[h] = M[y] = M[b] = M[g] = M[x] = M[k] = M[F] = M[K] = !1;
    var W = typeof Ot == "object" && Ot && Ot.Object === Object && Ot,
        Se = typeof self == "object" && self && self.Object === Object && self,
        ge = W || Se || Function("return this")(),
        Oe = t && !t.nodeType && t,
        Dt = Oe && !0 && e && !e.nodeType && e,
        vd = Dt && Dt.exports === Oe,
        Do = vd && W.process,
        yd = function () {
            try {
                var m = Dt && Dt.require && Dt.require("util").types;
                return m || Do && Do.binding && Do.binding("util")
            } catch {}
        }(),
        bd = yd && yd.isTypedArray;

    function mw(m, O, N) {
        switch (N.length) {
            case 0:
                return m.call(O);
            case 1:
                return m.call(O, N[0]);
            case 2:
                return m.call(O, N[0], N[1]);
            case 3:
                return m.call(O, N[0], N[1], N[2])
        }
        return m.apply(O, N)
    }

    function gw(m, O) {
        for (var N = -1, V = Array(m); ++N < m;) V[N] = O(N);
        return V
    }

    function vw(m) {
        return function (O) {
            return m(O)
        }
    }

    function yw(m, O) {
        return m == null ? void 0 : m[O]
    }

    function bw(m, O) {
        return function (N) {
            return m(O(N))
        }
    }
    var ww = Array.prototype,
        Ew = Function.prototype,
        Ka = Object.prototype,
        Fo = ge["__core-js_shared__"],
        Xa = Ew.toString,
        wt = Ka.hasOwnProperty,
        wd = function () {
            var m = /[^.]+$/.exec(Fo && Fo.keys && Fo.keys.IE_PROTO || "");
            return m ? "Symbol(src)_1." + m : ""
        }(),
        Ed = Ka.toString,
        Sw = Xa.call(Object),
        $w = RegExp("^" + Xa.call(wt).replace(T, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        Ya = vd ? ge.Buffer : void 0,
        Sd = ge.Symbol,
        $d = ge.Uint8Array,
        Ad = Ya ? Ya.allocUnsafe : void 0,
        Od = bw(Object.getPrototypeOf, Object),
        _d = Object.create,
        Aw = Ka.propertyIsEnumerable,
        Ow = ww.splice,
        tr = Sd ? Sd.toStringTag : void 0,
        Ja = function () {
            try {
                var m = Mo(Object, "defineProperty");
                return m({}, "", {}), m
            } catch {}
        }(),
        _w = Ya ? Ya.isBuffer : void 0,
        Rd = Math.max,
        Rw = Date.now,
        Cd = Mo(ge, "Map"),
        Rn = Mo(Object, "create"),
        Cw = function () {
            function m() {}
            return function (O) {
                if (!nr(O)) return {};
                if (_d) return _d(O);
                m.prototype = O;
                var N = new m;
                return m.prototype = void 0, N
            }
        }();

    function rr(m) {
        var O = -1,
            N = m == null ? 0 : m.length;
        for (this.clear(); ++O < N;) {
            var V = m[O];
            this.set(V[0], V[1])
        }
    }

    function Iw() {
        this.__data__ = Rn ? Rn(null) : {}, this.size = 0
    }

    function Nw(m) {
        var O = this.has(m) && delete this.__data__[m];
        return this.size -= O ? 1 : 0, O
    }

    function Tw(m) {
        var O = this.__data__;
        if (Rn) {
            var N = O[m];
            return N === n ? void 0 : N
        }
        return wt.call(O, m) ? O[m] : void 0
    }

    function xw(m) {
        var O = this.__data__;
        return Rn ? O[m] !== void 0 : wt.call(O, m)
    }

    function kw(m, O) {
        var N = this.__data__;
        return this.size += this.has(m) ? 0 : 1, N[m] = Rn && O === void 0 ? n : O, this
    }
    rr.prototype.clear = Iw, rr.prototype.delete = Nw, rr.prototype.get = Tw, rr.prototype.has = xw, rr.prototype.set = kw;

    function Et(m) {
        var O = -1,
            N = m == null ? 0 : m.length;
        for (this.clear(); ++O < N;) {
            var V = m[O];
            this.set(V[0], V[1])
        }
    }

    function Pw() {
        this.__data__ = [], this.size = 0
    }

    function Lw(m) {
        var O = this.__data__,
            N = Qa(O, m);
        if (N < 0) return !1;
        var V = O.length - 1;
        return N == V ? O.pop() : Ow.call(O, N, 1), --this.size, !0
    }

    function Dw(m) {
        var O = this.__data__,
            N = Qa(O, m);
        return N < 0 ? void 0 : O[N][1]
    }

    function Fw(m) {
        return Qa(this.__data__, m) > -1
    }

    function jw(m, O) {
        var N = this.__data__,
            V = Qa(N, m);
        return V < 0 ? (++this.size, N.push([m, O])) : N[V][1] = O, this
    }
    Et.prototype.clear = Pw, Et.prototype.delete = Lw, Et.prototype.get = Dw, Et.prototype.has = Fw, Et.prototype.set = jw;

    function Lr(m) {
        var O = -1,
            N = m == null ? 0 : m.length;
        for (this.clear(); ++O < N;) {
            var V = m[O];
            this.set(V[0], V[1])
        }
    }

    function Uw() {
        this.size = 0, this.__data__ = {
            hash: new rr,
            map: new(Cd || Et),
            string: new rr
        }
    }

    function Mw(m) {
        var O = ei(this, m).delete(m);
        return this.size -= O ? 1 : 0, O
    }

    function Bw(m) {
        return ei(this, m).get(m)
    }

    function zw(m) {
        return ei(this, m).has(m)
    }

    function Vw(m, O) {
        var N = ei(this, m),
            V = N.size;
        return N.set(m, O), this.size += N.size == V ? 0 : 1, this
    }
    Lr.prototype.clear = Uw, Lr.prototype.delete = Mw, Lr.prototype.get = Bw, Lr.prototype.has = zw, Lr.prototype.set = Vw;

    function Dr(m) {
        var O = this.__data__ = new Et(m);
        this.size = O.size
    }

    function qw() {
        this.__data__ = new Et, this.size = 0
    }

    function Ww(m) {
        var O = this.__data__,
            N = O.delete(m);
        return this.size = O.size, N
    }

    function Gw(m) {
        return this.__data__.get(m)
    }

    function Hw(m) {
        return this.__data__.has(m)
    }

    function Kw(m, O) {
        var N = this.__data__;
        if (N instanceof Et) {
            var V = N.__data__;
            if (!Cd || V.length < r - 1) return V.push([m, O]), this.size = ++N.size, this;
            N = this.__data__ = new Lr(V)
        }
        return N.set(m, O), this.size = N.size, this
    }
    Dr.prototype.clear = qw, Dr.prototype.delete = Ww, Dr.prototype.get = Gw, Dr.prototype.has = Hw, Dr.prototype.set = Kw;

    function Xw(m, O) {
        var N = Vo(m),
            V = !N && zo(m),
            re = !N && !V && kd(m),
            oe = !N && !V && !re && Ld(m),
            ce = N || V || re || oe,
            te = ce ? gw(m.length, String) : [],
            le = te.length;
        for (var qe in m)(O || wt.call(m, qe)) && !(ce && (qe == "length" || re && (qe == "offset" || qe == "parent") || oe && (qe == "buffer" || qe == "byteLength" || qe == "byteOffset") || Td(qe, le))) && te.push(qe);
        return te
    }

    function jo(m, O, N) {
        (N !== void 0 && !ti(m[O], N) || N === void 0 && !(O in m)) && Uo(m, O, N)
    }

    function Yw(m, O, N) {
        var V = m[O];
        (!(wt.call(m, O) && ti(V, N)) || N === void 0 && !(O in m)) && Uo(m, O, N)
    }

    function Qa(m, O) {
        for (var N = m.length; N--;)
            if (ti(m[N][0], O)) return N;
        return -1
    }

    function Uo(m, O, N) {
        O == "__proto__" && Ja ? Ja(m, O, {
            configurable: !0,
            enumerable: !0,
            value: N,
            writable: !0
        }) : m[O] = N
    }
    var Jw = l2();

    function Za(m) {
        return m == null ? m === void 0 ? z : _ : tr && tr in Object(m) ? f2(m) : v2(m)
    }

    function Id(m) {
        return Cn(m) && Za(m) == o
    }

    function Qw(m) {
        if (!nr(m) || m2(m)) return !1;
        var O = Wo(m) ? $w : P;
        return O.test(E2(m))
    }

    function Zw(m) {
        return Cn(m) && Pd(m.length) && !!M[Za(m)]
    }

    function e2(m) {
        if (!nr(m)) return g2(m);
        var O = xd(m),
            N = [];
        for (var V in m) V == "constructor" && (O || !wt.call(m, V)) || N.push(V);
        return N
    }

    function Nd(m, O, N, V, re) {
        m !== O && Jw(O, function (oe, ce) {
            if (re || (re = new Dr), nr(oe)) t2(m, O, ce, N, Nd, V, re);
            else {
                var te = V ? V(Bo(m, ce), oe, ce + "", m, O, re) : void 0;
                te === void 0 && (te = oe), jo(m, ce, te)
            }
        }, Dd)
    }

    function t2(m, O, N, V, re, oe, ce) {
        var te = Bo(m, N),
            le = Bo(O, N),
            qe = ce.get(le);
        if (qe) {
            jo(m, N, qe);
            return
        }
        var je = oe ? oe(te, le, N + "", m, O, ce) : void 0,
            In = je === void 0;
        if (In) {
            var Go = Vo(le),
                Ho = !Go && kd(le),
                jd = !Go && !Ho && Ld(le);
            je = le, Go || Ho || jd ? Vo(te) ? je = te : S2(te) ? je = o2(te) : Ho ? (In = !1, je = a2(le, !0)) : jd ? (In = !1, je = s2(le, !0)) : je = [] : $2(le) || zo(le) ? (je = te, zo(te) ? je = A2(te) : (!nr(te) || Wo(te)) && (je = d2(le))) : In = !1
        }
        In && (ce.set(le, je), re(je, le, V, oe, ce), ce.delete(le)), jo(m, N, je)
    }

    function r2(m, O) {
        return b2(y2(m, O, Fd), m + "")
    }
    var n2 = Ja ? function (m, O) {
        return Ja(m, "toString", {
            configurable: !0,
            enumerable: !1,
            value: _2(O),
            writable: !0
        })
    } : Fd;

    function a2(m, O) {
        if (O) return m.slice();
        var N = m.length,
            V = Ad ? Ad(N) : new m.constructor(N);
        return m.copy(V), V
    }

    function i2(m) {
        var O = new m.constructor(m.byteLength);
        return new $d(O).set(new $d(m)), O
    }

    function s2(m, O) {
        var N = O ? i2(m.buffer) : m.buffer;
        return new m.constructor(N, m.byteOffset, m.length)
    }

    function o2(m, O) {
        var N = -1,
            V = m.length;
        for (O || (O = Array(V)); ++N < V;) O[N] = m[N];
        return O
    }

    function u2(m, O, N, V) {
        var re = !N;
        N || (N = {});
        for (var oe = -1, ce = O.length; ++oe < ce;) {
            var te = O[oe],
                le = V ? V(N[te], m[te], te, N, m) : void 0;
            le === void 0 && (le = m[te]), re ? Uo(N, te, le) : Yw(N, te, le)
        }
        return N
    }

    function c2(m) {
        return r2(function (O, N) {
            var V = -1,
                re = N.length,
                oe = re > 1 ? N[re - 1] : void 0,
                ce = re > 2 ? N[2] : void 0;
            for (oe = m.length > 3 && typeof oe == "function" ? (re--, oe) : void 0, ce && h2(N[0], N[1], ce) && (oe = re < 3 ? void 0 : oe, re = 1), O = Object(O); ++V < re;) {
                var te = N[V];
                te && m(O, te, V, oe)
            }
            return O
        })
    }

    function l2(m) {
        return function (O, N, V) {
            for (var re = -1, oe = Object(O), ce = V(O), te = ce.length; te--;) {
                var le = ce[m ? te : ++re];
                if (N(oe[le], le, oe) === !1) break
            }
            return O
        }
    }

    function ei(m, O) {
        var N = m.__data__;
        return p2(O) ? N[typeof O == "string" ? "string" : "hash"] : N.map
    }

    function Mo(m, O) {
        var N = yw(m, O);
        return Qw(N) ? N : void 0
    }

    function f2(m) {
        var O = wt.call(m, tr),
            N = m[tr];
        try {
            m[tr] = void 0;
            var V = !0
        } catch {}
        var re = Ed.call(m);
        return V && (O ? m[tr] = N : delete m[tr]), re
    }

    function d2(m) {
        return typeof m.constructor == "function" && !xd(m) ? Cw(Od(m)) : {}
    }

    function Td(m, O) {
        var N = typeof m;
        return O = O ?? s, !!O && (N == "number" || N != "symbol" && B.test(m)) && m > -1 && m % 1 == 0 && m < O
    }

    function h2(m, O, N) {
        if (!nr(N)) return !1;
        var V = typeof O;
        return (V == "number" ? qo(N) && Td(O, N.length) : V == "string" && O in N) ? ti(N[O], m) : !1
    }

    function p2(m) {
        var O = typeof m;
        return O == "string" || O == "number" || O == "symbol" || O == "boolean" ? m !== "__proto__" : m === null
    }

    function m2(m) {
        return !!wd && wd in m
    }

    function xd(m) {
        var O = m && m.constructor,
            N = typeof O == "function" && O.prototype || Ka;
        return m === N
    }

    function g2(m) {
        var O = [];
        if (m != null)
            for (var N in Object(m)) O.push(N);
        return O
    }

    function v2(m) {
        return Ed.call(m)
    }

    function y2(m, O, N) {
        return O = Rd(O === void 0 ? m.length - 1 : O, 0),
            function () {
                for (var V = arguments, re = -1, oe = Rd(V.length - O, 0), ce = Array(oe); ++re < oe;) ce[re] = V[O + re];
                re = -1;
                for (var te = Array(O + 1); ++re < O;) te[re] = V[re];
                return te[O] = N(ce), mw(m, this, te)
            }
    }

    function Bo(m, O) {
        if (!(O === "constructor" && typeof m[O] == "function") && O != "__proto__") return m[O]
    }
    var b2 = w2(n2);

    function w2(m) {
        var O = 0,
            N = 0;
        return function () {
            var V = Rw(),
                re = i - (V - N);
            if (N = V, re > 0) {
                if (++O >= a) return arguments[0]
            } else O = 0;
            return m.apply(void 0, arguments)
        }
    }

    function E2(m) {
        if (m != null) {
            try {
                return Xa.call(m)
            } catch {}
            try {
                return m + ""
            } catch {}
        }
        return ""
    }

    function ti(m, O) {
        return m === O || m !== m && O !== O
    }
    var zo = Id(function () {
            return arguments
        }()) ? Id : function (m) {
            return Cn(m) && wt.call(m, "callee") && !Aw.call(m, "callee")
        },
        Vo = Array.isArray;

    function qo(m) {
        return m != null && Pd(m.length) && !Wo(m)
    }

    function S2(m) {
        return Cn(m) && qo(m)
    }
    var kd = _w || R2;

    function Wo(m) {
        if (!nr(m)) return !1;
        var O = Za(m);
        return O == h || O == p || O == c || O == R
    }

    function Pd(m) {
        return typeof m == "number" && m > -1 && m % 1 == 0 && m <= s
    }

    function nr(m) {
        var O = typeof m;
        return m != null && (O == "object" || O == "function")
    }

    function Cn(m) {
        return m != null && typeof m == "object"
    }

    function $2(m) {
        if (!Cn(m) || Za(m) != g) return !1;
        var O = Od(m);
        if (O === null) return !0;
        var N = wt.call(O, "constructor") && O.constructor;
        return typeof N == "function" && N instanceof N && Xa.call(N) == Sw
    }
    var Ld = bd ? vw(bd) : Zw;

    function A2(m) {
        return u2(m, Dd(m))
    }

    function Dd(m) {
        return qo(m) ? Xw(m, !0) : e2(m)
    }
    var O2 = c2(function (m, O, N) {
        Nd(m, O, N)
    });

    function _2(m) {
        return function () {
            return m
        }
    }

    function Fd(m) {
        return m
    }

    function R2() {
        return !1
    }
    e.exports = O2
})(As, As.exports);
var fF = As.exports;
const OB = Re(fF);
var eb = {},
    tb = {},
    rb = {};
(function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = function () {
            for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s];
            if (typeof window < "u") {
                var o;
                typeof window.gtag > "u" && (window.dataLayer = window.dataLayer || [], window.gtag = function () {
                    window.dataLayer.push(arguments)
                }), (o = window).gtag.apply(o, i)
            }
        },
        r = t;
    e.default = r
})(rb);
var nb = {};
(function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = s;
    var t = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

    function r(o) {
        return o.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (u, c, l) {
            return c > 0 && c + u.length !== l.length && u.search(t) > -1 && l.charAt(c - 2) !== ":" && (l.charAt(c + u.length) !== "-" || l.charAt(c - 1) === "-") && l.charAt(c - 1).search(/[^\s-]/) < 0 ? u.toLowerCase() : u.substr(1).search(/[A-Z]|\../) > -1 ? u : u.charAt(0).toUpperCase() + u.substr(1)
        })
    }

    function n(o) {
        return typeof o == "string" && o.indexOf("@") !== -1
    }
    var a = "REDACTED (Potential Email Address)";

    function i(o) {
        return n(o) ? (console.warn("This arg looks like an email address, redacting."), a) : o
    }

    function s() {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "",
            u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
            c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
            l = o || "";
        return u && (l = r(o)), c && (l = i(l)), l
    }
})(nb);
(function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.GA4 = void 0;
    var t = s(rb),
        r = s(nb),
        n = ["eventCategory", "eventAction", "eventLabel", "eventValue", "hitType"],
        a = ["title", "location"],
        i = ["page", "hitType"];

    function s(v) {
        return v && v.__esModule ? v : {
            default: v
        }
    }

    function o(v, E) {
        if (v == null) return {};
        var $ = u(v, E),
            A, w;
        if (Object.getOwnPropertySymbols) {
            var C = Object.getOwnPropertySymbols(v);
            for (w = 0; w < C.length; w++) A = C[w], !(E.indexOf(A) >= 0) && Object.prototype.propertyIsEnumerable.call(v, A) && ($[A] = v[A])
        }
        return $
    }

    function u(v, E) {
        if (v == null) return {};
        var $ = {},
            A = Object.keys(v),
            w, C;
        for (C = 0; C < A.length; C++) w = A[C], !(E.indexOf(w) >= 0) && ($[w] = v[w]);
        return $
    }

    function c(v) {
        "@babel/helpers - typeof";
        return c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (E) {
            return typeof E
        } : function (E) {
            return E && typeof Symbol == "function" && E.constructor === Symbol && E !== Symbol.prototype ? "symbol" : typeof E
        }, c(v)
    }

    function l(v) {
        return h(v) || d(v) || g(v) || f()
    }

    function f() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function d(v) {
        if (typeof Symbol < "u" && v[Symbol.iterator] != null || v["@@iterator"] != null) return Array.from(v)
    }

    function h(v) {
        if (Array.isArray(v)) return R(v)
    }

    function p(v, E) {
        var $ = Object.keys(v);
        if (Object.getOwnPropertySymbols) {
            var A = Object.getOwnPropertySymbols(v);
            E && (A = A.filter(function (w) {
                return Object.getOwnPropertyDescriptor(v, w).enumerable
            })), $.push.apply($, A)
        }
        return $
    }

    function y(v) {
        for (var E = 1; E < arguments.length; E++) {
            var $ = arguments[E] != null ? arguments[E] : {};
            E % 2 ? p(Object($), !0).forEach(function (A) {
                j(v, A, $[A])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors($)) : p(Object($)).forEach(function (A) {
                Object.defineProperty(v, A, Object.getOwnPropertyDescriptor($, A))
            })
        }
        return v
    }

    function b(v, E) {
        return k(v) || x(v, E) || g(v, E) || _()
    }

    function _() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function g(v, E) {
        if (v) {
            if (typeof v == "string") return R(v, E);
            var $ = Object.prototype.toString.call(v).slice(8, -1);
            if ($ === "Object" && v.constructor && ($ = v.constructor.name), $ === "Map" || $ === "Set") return Array.from(v);
            if ($ === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($)) return R(v, E)
        }
    }

    function R(v, E) {
        (E == null || E > v.length) && (E = v.length);
        for (var $ = 0, A = new Array(E); $ < E; $++) A[$] = v[$];
        return A
    }

    function x(v, E) {
        var $ = v == null ? null : typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
        if ($ != null) {
            var A, w, C, T, P = [],
                B = !0,
                M = !1;
            try {
                if (C = ($ = $.call(v)).next, E === 0) {
                    if (Object($) !== $) return;
                    B = !1
                } else
                    for (; !(B = (A = C.call($)).done) && (P.push(A.value), P.length !== E); B = !0);
            } catch (W) {
                M = !0, w = W
            } finally {
                try {
                    if (!B && $.return != null && (T = $.return(), Object(T) !== T)) return
                } finally {
                    if (M) throw w
                }
            }
            return P
        }
    }

    function k(v) {
        if (Array.isArray(v)) return v
    }

    function F(v, E) {
        if (!(v instanceof E)) throw new TypeError("Cannot call a class as a function")
    }

    function z(v, E) {
        for (var $ = 0; $ < E.length; $++) {
            var A = E[$];
            A.enumerable = A.enumerable || !1, A.configurable = !0, "value" in A && (A.writable = !0), Object.defineProperty(v, Q(A.key), A)
        }
    }

    function K(v, E, $) {
        return E && z(v.prototype, E), $ && z(v, $), Object.defineProperty(v, "prototype", {
            writable: !1
        }), v
    }

    function j(v, E, $) {
        return E = Q(E), E in v ? Object.defineProperty(v, E, {
            value: $,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : v[E] = $, v
    }

    function Q(v) {
        var E = q(v, "string");
        return c(E) === "symbol" ? E : String(E)
    }

    function q(v, E) {
        if (c(v) !== "object" || v === null) return v;
        var $ = v[Symbol.toPrimitive];
        if ($ !== void 0) {
            var A = $.call(v, E || "default");
            if (c(A) !== "object") return A;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (E === "string" ? String : Number)(v)
    }
    var I = function () {
        function v() {
            var E = this;
            F(this, v), j(this, "reset", function () {
                E.isInitialized = !1, E._testMode = !1, E._currentMeasurementId, E._hasLoadedGA = !1, E._isQueuing = !1, E._queueGtag = []
            }), j(this, "_gtag", function () {
                for (var $ = arguments.length, A = new Array($), w = 0; w < $; w++) A[w] = arguments[w];
                E._testMode || E._isQueuing ? E._queueGtag.push(A) : t.default.apply(void 0, A)
            }), j(this, "_loadGA", function ($, A) {
                var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "https://www.googletagmanager.com/gtag/js";
                if (!(typeof window > "u" || typeof document > "u") && !E._hasLoadedGA) {
                    var C = document.createElement("script");
                    C.async = !0, C.src = "".concat(w, "?id=").concat($), A && C.setAttribute("nonce", A), document.body.appendChild(C), window.dataLayer = window.dataLayer || [], window.gtag = function () {
                        window.dataLayer.push(arguments)
                    }, E._hasLoadedGA = !0
                }
            }), j(this, "_toGtagOptions", function ($) {
                if ($) {
                    var A = {
                            cookieUpdate: "cookie_update",
                            cookieExpires: "cookie_expires",
                            cookieDomain: "cookie_domain",
                            cookieFlags: "cookie_flags",
                            userId: "user_id",
                            clientId: "client_id",
                            anonymizeIp: "anonymize_ip",
                            contentGroup1: "content_group1",
                            contentGroup2: "content_group2",
                            contentGroup3: "content_group3",
                            contentGroup4: "content_group4",
                            contentGroup5: "content_group5",
                            allowAdFeatures: "allow_google_signals",
                            allowAdPersonalizationSignals: "allow_ad_personalization_signals",
                            nonInteraction: "non_interaction",
                            page: "page_path",
                            hitCallback: "event_callback"
                        },
                        w = Object.entries($).reduce(function (C, T) {
                            var P = b(T, 2),
                                B = P[0],
                                M = P[1];
                            return A[B] ? C[A[B]] = M : C[B] = M, C
                        }, {});
                    return w
                }
            }), j(this, "initialize", function ($) {
                var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (!$) throw new Error("Require GA_MEASUREMENT_ID");
                var w = typeof $ == "string" ? [{
                    trackingId: $
                }] : $;
                E._currentMeasurementId = w[0].trackingId;
                var C = A.gaOptions,
                    T = A.gtagOptions,
                    P = A.nonce,
                    B = A.testMode,
                    M = B === void 0 ? !1 : B,
                    W = A.gtagUrl;
                if (E._testMode = M, M || E._loadGA(E._currentMeasurementId, P, W), E.isInitialized || (E._gtag("js", new Date), w.forEach(function (Oe) {
                        var Dt = y(y(y({}, E._toGtagOptions(y(y({}, C), Oe.gaOptions))), T), Oe.gtagOptions);
                        Object.keys(Dt).length ? E._gtag("config", Oe.trackingId, Dt) : E._gtag("config", Oe.trackingId)
                    })), E.isInitialized = !0, !M) {
                    var Se = l(E._queueGtag);
                    for (E._queueGtag = [], E._isQueuing = !1; Se.length;) {
                        var ge = Se.shift();
                        E._gtag.apply(E, l(ge)), ge[0] === "get" && (E._isQueuing = !0)
                    }
                }
            }), j(this, "set", function ($) {
                if (!$) {
                    console.warn("`fieldsObject` is required in .set()");
                    return
                }
                if (c($) !== "object") {
                    console.warn("Expected `fieldsObject` arg to be an Object");
                    return
                }
                Object.keys($).length === 0 && console.warn("empty `fieldsObject` given to .set()"), E._gaCommand("set", $)
            }), j(this, "_gaCommandSendEvent", function ($, A, w, C, T) {
                E._gtag("event", A, y(y({
                    event_category: $,
                    event_label: w,
                    value: C
                }, T && {
                    non_interaction: T.nonInteraction
                }), E._toGtagOptions(T)))
            }), j(this, "_gaCommandSendEventParameters", function () {
                for (var $ = arguments.length, A = new Array($), w = 0; w < $; w++) A[w] = arguments[w];
                if (typeof A[0] == "string") E._gaCommandSendEvent.apply(E, l(A.slice(1)));
                else {
                    var C = A[0],
                        T = C.eventCategory,
                        P = C.eventAction,
                        B = C.eventLabel,
                        M = C.eventValue;
                    C.hitType;
                    var W = o(C, n);
                    E._gaCommandSendEvent(T, P, B, M, W)
                }
            }), j(this, "_gaCommandSendTiming", function ($, A, w, C) {
                E._gtag("event", "timing_complete", {
                    name: A,
                    value: w,
                    event_category: $,
                    event_label: C
                })
            }), j(this, "_gaCommandSendPageview", function ($, A) {
                if (A && Object.keys(A).length) {
                    var w = E._toGtagOptions(A),
                        C = w.title,
                        T = w.location,
                        P = o(w, a);
                    E._gtag("event", "page_view", y(y(y(y({}, $ && {
                        page_path: $
                    }), C && {
                        page_title: C
                    }), T && {
                        page_location: T
                    }), P))
                } else $ ? E._gtag("event", "page_view", {
                    page_path: $
                }) : E._gtag("event", "page_view")
            }), j(this, "_gaCommandSendPageviewParameters", function () {
                for (var $ = arguments.length, A = new Array($), w = 0; w < $; w++) A[w] = arguments[w];
                if (typeof A[0] == "string") E._gaCommandSendPageview.apply(E, l(A.slice(1)));
                else {
                    var C = A[0],
                        T = C.page;
                    C.hitType;
                    var P = o(C, i);
                    E._gaCommandSendPageview(T, P)
                }
            }), j(this, "_gaCommandSend", function () {
                for (var $ = arguments.length, A = new Array($), w = 0; w < $; w++) A[w] = arguments[w];
                var C = typeof A[0] == "string" ? A[0] : A[0].hitType;
                switch (C) {
                    case "event":
                        E._gaCommandSendEventParameters.apply(E, A);
                        break;
                    case "pageview":
                        E._gaCommandSendPageviewParameters.apply(E, A);
                        break;
                    case "timing":
                        E._gaCommandSendTiming.apply(E, l(A.slice(1)));
                        break;
                    case "screenview":
                    case "transaction":
                    case "item":
                    case "social":
                    case "exception":
                        console.warn("Unsupported send command: ".concat(C));
                        break;
                    default:
                        console.warn("Send command doesn't exist: ".concat(C))
                }
            }), j(this, "_gaCommandSet", function () {
                for (var $ = arguments.length, A = new Array($), w = 0; w < $; w++) A[w] = arguments[w];
                typeof A[0] == "string" && (A[0] = j({}, A[0], A[1])), E._gtag("set", E._toGtagOptions(A[0]))
            }), j(this, "_gaCommand", function ($) {
                for (var A = arguments.length, w = new Array(A > 1 ? A - 1 : 0), C = 1; C < A; C++) w[C - 1] = arguments[C];
                switch ($) {
                    case "send":
                        E._gaCommandSend.apply(E, w);
                        break;
                    case "set":
                        E._gaCommandSet.apply(E, w);
                        break;
                    default:
                        console.warn("Command doesn't exist: ".concat($))
                }
            }), j(this, "ga", function () {
                for (var $ = arguments.length, A = new Array($), w = 0; w < $; w++) A[w] = arguments[w];
                if (typeof A[0] == "string") E._gaCommand.apply(E, A);
                else {
                    var C = A[0];
                    E._gtag("get", E._currentMeasurementId, "client_id", function (T) {
                        E._isQueuing = !1;
                        var P = E._queueGtag;
                        for (C({
                                get: function (W) {
                                    return W === "clientId" ? T : W === "trackingId" ? E._currentMeasurementId : W === "apiVersion" ? "1" : void 0
                                }
                            }); P.length;) {
                            var B = P.shift();
                            E._gtag.apply(E, l(B))
                        }
                    }), E._isQueuing = !0
                }
                return E.ga
            }), j(this, "event", function ($, A) {
                if (typeof $ == "string") E._gtag("event", $, E._toGtagOptions(A));
                else {
                    var w = $.action,
                        C = $.category,
                        T = $.label,
                        P = $.value,
                        B = $.nonInteraction,
                        M = $.transport;
                    if (!C || !w) {
                        console.warn("args.category AND args.action are required in event()");
                        return
                    }
                    var W = {
                        hitType: "event",
                        eventCategory: (0, r.default)(C),
                        eventAction: (0, r.default)(w)
                    };
                    T && (W.eventLabel = (0, r.default)(T)), typeof P < "u" && (typeof P != "number" ? console.warn("Expected `args.value` arg to be a Number.") : W.eventValue = P), typeof B < "u" && (typeof B != "boolean" ? console.warn("`args.nonInteraction` must be a boolean.") : W.nonInteraction = B), typeof M < "u" && (typeof M != "string" ? console.warn("`args.transport` must be a string.") : (["beacon", "xhr", "image"].indexOf(M) === -1 && console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"), W.transport = M)), E._gaCommand("send", W)
                }
            }), j(this, "send", function ($) {
                E._gaCommand("send", $)
            }), this.reset()
        }
        return K(v, [{
            key: "gtag",
            value: function () {
                this._gtag.apply(this, arguments)
            }
        }]), v
    }();
    e.GA4 = I;
    var S = new I;
    e.default = S
})(tb);
(function (e) {
    function t(o) {
        "@babel/helpers - typeof";
        return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (u) {
            return typeof u
        } : function (u) {
            return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
        }, t(o)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.ReactGAImplementation = void 0;
    var r = a(tb);

    function n(o) {
        if (typeof WeakMap != "function") return null;
        var u = new WeakMap,
            c = new WeakMap;
        return (n = function (f) {
            return f ? c : u
        })(o)
    }

    function a(o, u) {
        if (!u && o && o.__esModule) return o;
        if (o === null || t(o) !== "object" && typeof o != "function") return {
            default: o
        };
        var c = n(u);
        if (c && c.has(o)) return c.get(o);
        var l = {},
            f = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var d in o)
            if (d !== "default" && Object.prototype.hasOwnProperty.call(o, d)) {
                var h = f ? Object.getOwnPropertyDescriptor(o, d) : null;
                h && (h.get || h.set) ? Object.defineProperty(l, d, h) : l[d] = o[d]
            } return l.default = o, c && c.set(o, l), l
    }
    var i = r.GA4;
    e.ReactGAImplementation = i;
    var s = r.default;
    e.default = s
})(eb);
const _B = Re(eb);
var ab = {
        exports: {}
    },
    ib = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
    function t(w, C) {
        var T = w.length;
        w.push(C);
        e: for (; 0 < T;) {
            var P = T - 1 >>> 1,
                B = w[P];
            if (0 < a(B, C)) w[P] = C, w[T] = B, T = P;
            else break e
        }
    }

    function r(w) {
        return w.length === 0 ? null : w[0]
    }

    function n(w) {
        if (w.length === 0) return null;
        var C = w[0],
            T = w.pop();
        if (T !== C) {
            w[0] = T;
            e: for (var P = 0, B = w.length, M = B >>> 1; P < M;) {
                var W = 2 * (P + 1) - 1,
                    Se = w[W],
                    ge = W + 1,
                    Oe = w[ge];
                if (0 > a(Se, T)) ge < B && 0 > a(Oe, Se) ? (w[P] = Oe, w[ge] = T, P = ge) : (w[P] = Se, w[W] = T, P = W);
                else if (ge < B && 0 > a(Oe, T)) w[P] = Oe, w[ge] = T, P = ge;
                else break e
            }
        }
        return C
    }

    function a(w, C) {
        var T = w.sortIndex - C.sortIndex;
        return T !== 0 ? T : w.id - C.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function () {
            return i.now()
        }
    } else {
        var s = Date,
            o = s.now();
        e.unstable_now = function () {
            return s.now() - o
        }
    }
    var u = [],
        c = [],
        l = 1,
        f = null,
        d = 3,
        h = !1,
        p = !1,
        y = !1,
        b = typeof setTimeout == "function" ? setTimeout : null,
        _ = typeof clearTimeout == "function" ? clearTimeout : null,
        g = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function R(w) {
        for (var C = r(c); C !== null;) {
            if (C.callback === null) n(c);
            else if (C.startTime <= w) n(c), C.sortIndex = C.expirationTime, t(u, C);
            else break;
            C = r(c)
        }
    }

    function x(w) {
        if (y = !1, R(w), !p)
            if (r(u) !== null) p = !0, $(k);
            else {
                var C = r(c);
                C !== null && A(x, C.startTime - w)
            }
    }

    function k(w, C) {
        p = !1, y && (y = !1, _(K), K = -1), h = !0;
        var T = d;
        try {
            for (R(C), f = r(u); f !== null && (!(f.expirationTime > C) || w && !q());) {
                var P = f.callback;
                if (typeof P == "function") {
                    f.callback = null, d = f.priorityLevel;
                    var B = P(f.expirationTime <= C);
                    C = e.unstable_now(), typeof B == "function" ? f.callback = B : f === r(u) && n(u), R(C)
                } else n(u);
                f = r(u)
            }
            if (f !== null) var M = !0;
            else {
                var W = r(c);
                W !== null && A(x, W.startTime - C), M = !1
            }
            return M
        } finally {
            f = null, d = T, h = !1
        }
    }
    var F = !1,
        z = null,
        K = -1,
        j = 5,
        Q = -1;

    function q() {
        return !(e.unstable_now() - Q < j)
    }

    function I() {
        if (z !== null) {
            var w = e.unstable_now();
            Q = w;
            var C = !0;
            try {
                C = z(!0, w)
            } finally {
                C ? S() : (F = !1, z = null)
            }
        } else F = !1
    }
    var S;
    if (typeof g == "function") S = function () {
        g(I)
    };
    else if (typeof MessageChannel < "u") {
        var v = new MessageChannel,
            E = v.port2;
        v.port1.onmessage = I, S = function () {
            E.postMessage(null)
        }
    } else S = function () {
        b(I, 0)
    };

    function $(w) {
        z = w, F || (F = !0, S())
    }

    function A(w, C) {
        K = b(function () {
            w(e.unstable_now())
        }, C)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (w) {
        w.callback = null
    }, e.unstable_continueExecution = function () {
        p || h || (p = !0, $(k))
    }, e.unstable_forceFrameRate = function (w) {
        0 > w || 125 < w ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < w ? Math.floor(1e3 / w) : 5
    }, e.unstable_getCurrentPriorityLevel = function () {
        return d
    }, e.unstable_getFirstCallbackNode = function () {
        return r(u)
    }, e.unstable_next = function (w) {
        switch (d) {
            case 1:
            case 2:
            case 3:
                var C = 3;
                break;
            default:
                C = d
        }
        var T = d;
        d = C;
        try {
            return w()
        } finally {
            d = T
        }
    }, e.unstable_pauseExecution = function () {}, e.unstable_requestPaint = function () {}, e.unstable_runWithPriority = function (w, C) {
        switch (w) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                w = 3
        }
        var T = d;
        d = w;
        try {
            return C()
        } finally {
            d = T
        }
    }, e.unstable_scheduleCallback = function (w, C, T) {
        var P = e.unstable_now();
        switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? P + T : P) : T = P, w) {
            case 1:
                var B = -1;
                break;
            case 2:
                B = 250;
                break;
            case 5:
                B = 1073741823;
                break;
            case 4:
                B = 1e4;
                break;
            default:
                B = 5e3
        }
        return B = T + B, w = {
            id: l++,
            callback: C,
            priorityLevel: w,
            startTime: T,
            expirationTime: B,
            sortIndex: -1
        }, T > P ? (w.sortIndex = T, t(c, w), r(u) === null && w === r(c) && (y ? (_(K), K = -1) : y = !0, A(x, T - P))) : (w.sortIndex = B, t(u, w), p || h || (p = !0, $(k))), w
    }, e.unstable_shouldYield = q, e.unstable_wrapCallback = function (w) {
        var C = d;
        return function () {
            var T = d;
            d = C;
            try {
                return w.apply(this, arguments)
            } finally {
                d = T
            }
        }
    }
})(ib);
ab.exports = ib;
var RB = ab.exports;
/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ya() {
    return ya = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, ya.apply(this, arguments)
}
var Vt;
(function (e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Vt || (Vt = {}));
const ig = "popstate";

function CB(e) {
    e === void 0 && (e = {});

    function t(n, a) {
        let {
            pathname: i,
            search: s,
            hash: o
        } = n.location;
        return Os("", {
            pathname: i,
            search: s,
            hash: o
        }, a.state && a.state.usr || null, a.state && a.state.key || "default")
    }

    function r(n, a) {
        return typeof a == "string" ? a : Hf(a)
    }
    return sb(t, r, null, e)
}

function IB(e) {
    e === void 0 && (e = {});

    function t(a, i) {
        let {
            pathname: s = "/",
            search: o = "",
            hash: u = ""
        } = xr(a.location.hash.substr(1));
        return !s.startsWith("/") && !s.startsWith(".") && (s = "/" + s), Os("", {
            pathname: s,
            search: o,
            hash: u
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }

    function r(a, i) {
        let s = a.document.querySelector("base"),
            o = "";
        if (s && s.getAttribute("href")) {
            let u = a.location.href,
                c = u.indexOf("#");
            o = c === -1 ? u : u.slice(0, c)
        }
        return o + "#" + (typeof i == "string" ? i : Hf(i))
    }

    function n(a, i) {
        Va(a.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(i) + ")")
    }
    return sb(t, r, n, e)
}

function pe(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function Va(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function dF() {
    return Math.random().toString(36).substr(2, 8)
}

function sg(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function Os(e, t, r, n) {
    return r === void 0 && (r = null), ya({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? xr(t) : t, {
        state: r,
        key: t && t.key || n || dF()
    })
}

function Hf(e) {
    let {
        pathname: t = "/",
        search: r = "",
        hash: n = ""
    } = e;
    return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n), t
}

function xr(e) {
    let t = {};
    if (e) {
        let r = e.indexOf("#");
        r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
        let n = e.indexOf("?");
        n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e)
    }
    return t
}

function sb(e, t, r, n) {
    n === void 0 && (n = {});
    let {
        window: a = document.defaultView,
        v5Compat: i = !1
    } = n, s = a.history, o = Vt.Pop, u = null, c = l();
    c == null && (c = 0, s.replaceState(ya({}, s.state, {
        idx: c
    }), ""));

    function l() {
        return (s.state || {
            idx: null
        }).idx
    }

    function f() {
        o = Vt.Pop;
        let b = l(),
            _ = b == null ? null : b - c;
        c = b, u && u({
            action: o,
            location: y.location,
            delta: _
        })
    }

    function d(b, _) {
        o = Vt.Push;
        let g = Os(y.location, b, _);
        r && r(g, b), c = l() + 1;
        let R = sg(g, c),
            x = y.createHref(g);
        try {
            s.pushState(R, "", x)
        } catch (k) {
            if (k instanceof DOMException && k.name === "DataCloneError") throw k;
            a.location.assign(x)
        }
        i && u && u({
            action: o,
            location: y.location,
            delta: 1
        })
    }

    function h(b, _) {
        o = Vt.Replace;
        let g = Os(y.location, b, _);
        r && r(g, b), c = l();
        let R = sg(g, c),
            x = y.createHref(g);
        s.replaceState(R, "", x), i && u && u({
            action: o,
            location: y.location,
            delta: 0
        })
    }

    function p(b) {
        let _ = a.location.origin !== "null" ? a.location.origin : a.location.href,
            g = typeof b == "string" ? b : Hf(b);
        return pe(_, "No window.location.(origin|href) available to create URL for href: " + g), new URL(g, _)
    }
    let y = {
        get action() {
            return o
        },
        get location() {
            return e(a, s)
        },
        listen(b) {
            if (u) throw new Error("A history only accepts one active listener");
            return a.addEventListener(ig, f), u = b, () => {
                a.removeEventListener(ig, f), u = null
            }
        },
        createHref(b) {
            return t(a, b)
        },
        createURL: p,
        encodeLocation(b) {
            let _ = p(b);
            return {
                pathname: _.pathname,
                search: _.search,
                hash: _.hash
            }
        },
        push: d,
        replace: h,
        go(b) {
            return s.go(b)
        }
    };
    return y
}
var og;
(function (e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(og || (og = {}));

function hF(e, t, r) {
    r === void 0 && (r = "/");
    let n = typeof t == "string" ? xr(t) : t,
        a = cb(n.pathname || "/", r);
    if (a == null) return null;
    let i = ob(e);
    pF(i);
    let s = null;
    for (let o = 0; s == null && o < i.length; ++o) s = $F(i[o], _F(a));
    return s
}

function ob(e, t, r, n) {
    t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
    let a = (i, s, o) => {
        let u = {
            relativePath: o === void 0 ? i.path || "" : o,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        u.relativePath.startsWith("/") && (pe(u.relativePath.startsWith(n), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), u.relativePath = u.relativePath.slice(n.length));
        let c = Gt([n, u.relativePath]),
            l = r.concat(u);
        i.children && i.children.length > 0 && (pe(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')), ob(i.children, t, l, c)), !(i.path == null && !i.index) && t.push({
            path: c,
            score: EF(c, i.index),
            routesMeta: l
        })
    };
    return e.forEach((i, s) => {
        var o;
        if (i.path === "" || !((o = i.path) != null && o.includes("?"))) a(i, s);
        else
            for (let u of ub(i.path)) a(i, s, u)
    }), t
}

function ub(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [r, ...n] = t, a = r.endsWith("?"), i = r.replace(/\?$/, "");
    if (n.length === 0) return a ? [i, ""] : [i];
    let s = ub(n.join("/")),
        o = [];
    return o.push(...s.map(u => u === "" ? i : [i, u].join("/"))), a && o.push(...s), o.map(u => e.startsWith("/") && u === "" ? "/" : u)
}

function pF(e) {
    e.sort((t, r) => t.score !== r.score ? r.score - t.score : SF(t.routesMeta.map(n => n.childrenIndex), r.routesMeta.map(n => n.childrenIndex)))
}
const mF = /^:\w+$/,
    gF = 3,
    vF = 2,
    yF = 1,
    bF = 10,
    wF = -2,
    ug = e => e === "*";

function EF(e, t) {
    let r = e.split("/"),
        n = r.length;
    return r.some(ug) && (n += wF), t && (n += vF), r.filter(a => !ug(a)).reduce((a, i) => a + (mF.test(i) ? gF : i === "" ? yF : bF), n)
}

function SF(e, t) {
    return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function $F(e, t) {
    let {
        routesMeta: r
    } = e, n = {}, a = "/", i = [];
    for (let s = 0; s < r.length; ++s) {
        let o = r[s],
            u = s === r.length - 1,
            c = a === "/" ? t : t.slice(a.length) || "/",
            l = AF({
                path: o.relativePath,
                caseSensitive: o.caseSensitive,
                end: u
            }, c);
        if (!l) return null;
        Object.assign(n, l.params);
        let f = o.route;
        i.push({
            params: n,
            pathname: Gt([a, l.pathname]),
            pathnameBase: TF(Gt([a, l.pathnameBase])),
            route: f
        }), l.pathnameBase !== "/" && (a = Gt([a, l.pathnameBase]))
    }
    return i
}

function NB(e, t) {
    t === void 0 && (t = {});
    let r = e;
    r.endsWith("*") && r !== "*" && !r.endsWith("/*") && (Va(!1, 'Route path "' + r + '" will be treated as if it were ' + ('"' + r.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + r.replace(/\*$/, "/*") + '".')), r = r.replace(/\*$/, "/*"));
    const n = r.startsWith("/") ? "/" : "",
        a = s => s == null ? "" : typeof s == "string" ? s : String(s),
        i = r.split(/\/+/).map((s, o, u) => {
            if (o === u.length - 1 && s === "*") return a(t["*"]);
            const l = s.match(/^:(\w+)(\??)$/);
            if (l) {
                const [, f, d] = l;
                let h = t[f];
                return pe(d === "?" || h != null, 'Missing ":' + f + '" param'), a(h)
            }
            return s.replace(/\?$/g, "")
        }).filter(s => !!s);
    return n + i.join("/")
}

function AF(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [r, n] = OF(e.path, e.caseSensitive, e.end), a = t.match(r);
    if (!a) return null;
    let i = a[0],
        s = i.replace(/(.)\/+$/, "$1"),
        o = a.slice(1);
    return {
        params: n.reduce((c, l, f) => {
            let {
                paramName: d,
                isOptional: h
            } = l;
            if (d === "*") {
                let y = o[f] || "";
                s = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1")
            }
            const p = o[f];
            return h && !p ? c[d] = void 0 : c[d] = RF(p || "", d), c
        }, {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}

function OF(e, t, r) {
    t === void 0 && (t = !1), r === void 0 && (r = !0), Va(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let n = [],
        a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:(\w+)(\?)?/g, (s, o, u) => (n.push({
            paramName: o,
            isOptional: u != null
        }), u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (n.push({
        paramName: "*"
    }), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), n]
}

function _F(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return Va(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function RF(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (r) {
        return Va(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + r + ").")), e
    }
}

function cb(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let r = t.endsWith("/") ? t.length - 1 : t.length,
        n = e.charAt(r);
    return n && n !== "/" ? null : e.slice(r) || "/"
}

function CF(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: r,
        search: n = "",
        hash: a = ""
    } = typeof e == "string" ? xr(e) : e;
    return {
        pathname: r ? r.startsWith("/") ? r : IF(r, t) : t,
        search: xF(n),
        hash: kF(a)
    }
}

function IF(e, t) {
    let r = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(a => {
        a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a)
    }), r.length > 1 ? r.join("/") : "/"
}

function Zu(e, t, r, n) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function NF(e) {
    return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0)
}

function Kf(e, t) {
    let r = NF(e);
    return t ? r.map((n, a) => a === e.length - 1 ? n.pathname : n.pathnameBase) : r.map(n => n.pathnameBase)
}

function Xf(e, t, r, n) {
    n === void 0 && (n = !1);
    let a;
    typeof e == "string" ? a = xr(e) : (a = ya({}, e), pe(!a.pathname || !a.pathname.includes("?"), Zu("?", "pathname", "search", a)), pe(!a.pathname || !a.pathname.includes("#"), Zu("#", "pathname", "hash", a)), pe(!a.search || !a.search.includes("#"), Zu("#", "search", "hash", a)));
    let i = e === "" || a.pathname === "",
        s = i ? "/" : a.pathname,
        o;
    if (s == null) o = r;
    else {
        let f = t.length - 1;
        if (!n && s.startsWith("..")) {
            let d = s.split("/");
            for (; d[0] === "..";) d.shift(), f -= 1;
            a.pathname = d.join("/")
        }
        o = f >= 0 ? t[f] : "/"
    }
    let u = CF(a, o),
        c = s && s !== "/" && s.endsWith("/"),
        l = (i || s === ".") && r.endsWith("/");
    return !u.pathname.endsWith("/") && (c || l) && (u.pathname += "/"), u
}
const Gt = e => e.join("/").replace(/\/\/+/g, "/"),
    TF = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    xF = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    kF = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function PF(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const lb = ["post", "put", "patch", "delete"];
new Set(lb);
const LF = ["get", ...lb];
new Set(LF);
/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ba() {
    return ba = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, ba.apply(this, arguments)
}
const Yf = L.createContext(null),
    DF = L.createContext(null),
    kr = L.createContext(null),
    Oo = L.createContext(null),
    Lt = L.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    fb = L.createContext(null);

function TB(e, t) {
    let {
        relative: r
    } = t === void 0 ? {} : t;
    _n() || pe(!1);
    let {
        basename: n,
        navigator: a
    } = L.useContext(kr), {
        hash: i,
        pathname: s,
        search: o
    } = UF(e, {
        relative: r
    }), u = s;
    return n !== "/" && (u = s === "/" ? n : Gt([n, s])), a.createHref({
        pathname: u,
        search: o,
        hash: i
    })
}

function _n() {
    return L.useContext(Oo) != null
}

function _o() {
    return _n() || pe(!1), L.useContext(Oo).location
}

function db(e) {
    L.useContext(kr).static || L.useLayoutEffect(e)
}

function FF() {
    let {
        isDataRoute: e
    } = L.useContext(Lt);
    return e ? JF() : jF()
}

function jF() {
    _n() || pe(!1);
    let e = L.useContext(Yf),
        {
            basename: t,
            future: r,
            navigator: n
        } = L.useContext(kr),
        {
            matches: a
        } = L.useContext(Lt),
        {
            pathname: i
        } = _o(),
        s = JSON.stringify(Kf(a, r.v7_relativeSplatPath)),
        o = L.useRef(!1);
    return db(() => {
        o.current = !0
    }), L.useCallback(function (c, l) {
        if (l === void 0 && (l = {}), !o.current) return;
        if (typeof c == "number") {
            n.go(c);
            return
        }
        let f = Xf(c, JSON.parse(s), i, l.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Gt([t, f.pathname])), (l.replace ? n.replace : n.push)(f, l.state, l)
    }, [t, n, s, i, e])
}

function xB() {
    let {
        matches: e
    } = L.useContext(Lt), t = e[e.length - 1];
    return t ? t.params : {}
}

function UF(e, t) {
    let {
        relative: r
    } = t === void 0 ? {} : t, {
        future: n
    } = L.useContext(kr), {
        matches: a
    } = L.useContext(Lt), {
        pathname: i
    } = _o(), s = JSON.stringify(Kf(a, n.v7_relativeSplatPath));
    return L.useMemo(() => Xf(e, JSON.parse(s), i, r === "path"), [e, s, i, r])
}

function MF(e, t) {
    return BF(e, t)
}

function BF(e, t, r, n) {
    _n() || pe(!1);
    let {
        navigator: a
    } = L.useContext(kr), {
        matches: i
    } = L.useContext(Lt), s = i[i.length - 1], o = s ? s.params : {};
    s && s.pathname;
    let u = s ? s.pathnameBase : "/";
    s && s.route;
    let c = _o(),
        l;
    if (t) {
        var f;
        let b = typeof t == "string" ? xr(t) : t;
        u === "/" || (f = b.pathname) != null && f.startsWith(u) || pe(!1), l = b
    } else l = c;
    let d = l.pathname || "/",
        h = u === "/" ? d : d.slice(u.length) || "/",
        p = hF(e, {
            pathname: h
        }),
        y = GF(p && p.map(b => Object.assign({}, b, {
            params: Object.assign({}, o, b.params),
            pathname: Gt([u, a.encodeLocation ? a.encodeLocation(b.pathname).pathname : b.pathname]),
            pathnameBase: b.pathnameBase === "/" ? u : Gt([u, a.encodeLocation ? a.encodeLocation(b.pathnameBase).pathname : b.pathnameBase])
        })), i, r, n);
    return t && y ? L.createElement(Oo.Provider, {
        value: {
            location: ba({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, l),
            navigationType: Vt.Pop
        }
    }, y) : y
}

function zF() {
    let e = YF(),
        t = PF(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        r = e instanceof Error ? e.stack : null,
        a = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        },
        i = null;
    return L.createElement(L.Fragment, null, L.createElement("h2", null, "Unexpected Application Error!"), L.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), r ? L.createElement("pre", {
        style: a
    }, r) : null, i)
}
const VF = L.createElement(zF, null);
class qF extends L.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, r) {
        return r.location !== t.location || r.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : r.error,
            location: r.location,
            revalidation: t.revalidation || r.revalidation
        }
    }
    componentDidCatch(t, r) {
        console.error("React Router caught the following error during render", t, r)
    }
    render() {
        return this.state.error !== void 0 ? L.createElement(Lt.Provider, {
            value: this.props.routeContext
        }, L.createElement(fb.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function WF(e) {
    let {
        routeContext: t,
        match: r,
        children: n
    } = e, a = L.useContext(Yf);
    return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), L.createElement(Lt.Provider, {
        value: t
    }, n)
}

function GF(e, t, r, n) {
    var a;
    if (t === void 0 && (t = []), r === void 0 && (r = null), n === void 0 && (n = null), e == null) {
        var i;
        if ((i = r) != null && i.errors) e = r.matches;
        else return null
    }
    let s = e,
        o = (a = r) == null ? void 0 : a.errors;
    if (o != null) {
        let l = s.findIndex(f => f.route.id && (o == null ? void 0 : o[f.route.id]));
        l >= 0 || pe(!1), s = s.slice(0, Math.min(s.length, l + 1))
    }
    let u = !1,
        c = -1;
    if (r && n && n.v7_partialHydration)
        for (let l = 0; l < s.length; l++) {
            let f = s[l];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = l), f.route.id) {
                let {
                    loaderData: d,
                    errors: h
                } = r, p = f.route.loader && d[f.route.id] === void 0 && (!h || h[f.route.id] === void 0);
                if (f.route.lazy || p) {
                    u = !0, c >= 0 ? s = s.slice(0, c + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight((l, f, d) => {
        let h, p = !1,
            y = null,
            b = null;
        r && (h = o && f.route.id ? o[f.route.id] : void 0, y = f.route.errorElement || VF, u && (c < 0 && d === 0 ? (QF("route-fallback", !1), p = !0, b = null) : c === d && (p = !0, b = f.route.hydrateFallbackElement || null)));
        let _ = t.concat(s.slice(0, d + 1)),
            g = () => {
                let R;
                return h ? R = y : p ? R = b : f.route.Component ? R = L.createElement(f.route.Component, null) : f.route.element ? R = f.route.element : R = l, L.createElement(WF, {
                    match: f,
                    routeContext: {
                        outlet: l,
                        matches: _,
                        isDataRoute: r != null
                    },
                    children: R
                })
            };
        return r && (f.route.ErrorBoundary || f.route.errorElement || d === 0) ? L.createElement(qF, {
            location: r.location,
            revalidation: r.revalidation,
            component: y,
            error: h,
            children: g(),
            routeContext: {
                outlet: null,
                matches: _,
                isDataRoute: !0
            }
        }) : g()
    }, null)
}
var hb = function (e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
    }(hb || {}),
    _s = function (e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    }(_s || {});

function HF(e) {
    let t = L.useContext(Yf);
    return t || pe(!1), t
}

function KF(e) {
    let t = L.useContext(DF);
    return t || pe(!1), t
}

function XF(e) {
    let t = L.useContext(Lt);
    return t || pe(!1), t
}

function pb(e) {
    let t = XF(),
        r = t.matches[t.matches.length - 1];
    return r.route.id || pe(!1), r.route.id
}

function YF() {
    var e;
    let t = L.useContext(fb),
        r = KF(_s.UseRouteError),
        n = pb(_s.UseRouteError);
    return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n]
}

function JF() {
    let {
        router: e
    } = HF(hb.UseNavigateStable), t = pb(_s.UseNavigateStable), r = L.useRef(!1);
    return db(() => {
        r.current = !0
    }), L.useCallback(function (a, i) {
        i === void 0 && (i = {}), r.current && (typeof a == "number" ? e.navigate(a) : e.navigate(a, ba({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
const cg = {};

function QF(e, t, r) {
    !t && !cg[e] && (cg[e] = !0)
}

function kB(e) {
    let {
        to: t,
        replace: r,
        state: n,
        relative: a
    } = e;
    _n() || pe(!1);
    let {
        future: i,
        static: s
    } = L.useContext(kr), {
        matches: o
    } = L.useContext(Lt), {
        pathname: u
    } = _o(), c = FF(), l = Xf(t, Kf(o, i.v7_relativeSplatPath), u, a === "path"), f = JSON.stringify(l);
    return L.useEffect(() => c(JSON.parse(f), {
        replace: r,
        state: n,
        relative: a
    }), [c, f, a, r, n]), null
}

function ZF(e) {
    pe(!1)
}

function PB(e) {
    let {
        basename: t = "/",
        children: r = null,
        location: n,
        navigationType: a = Vt.Pop,
        navigator: i,
        static: s = !1,
        future: o
    } = e;
    _n() && pe(!1);
    let u = t.replace(/^\/*/, "/"),
        c = L.useMemo(() => ({
            basename: u,
            navigator: i,
            static: s,
            future: ba({
                v7_relativeSplatPath: !1
            }, o)
        }), [u, o, i, s]);
    typeof n == "string" && (n = xr(n));
    let {
        pathname: l = "/",
        search: f = "",
        hash: d = "",
        state: h = null,
        key: p = "default"
    } = n, y = L.useMemo(() => {
        let b = cb(l, u);
        return b == null ? null : {
            location: {
                pathname: b,
                search: f,
                hash: d,
                state: h,
                key: p
            },
            navigationType: a
        }
    }, [u, l, f, d, h, p, a]);
    return y == null ? null : L.createElement(kr.Provider, {
        value: c
    }, L.createElement(Oo.Provider, {
        children: r,
        value: y
    }))
}

function LB(e) {
    let {
        children: t,
        location: r
    } = e;
    return MF(il(t), r)
}
new Promise(() => {});

function il(e, t) {
    t === void 0 && (t = []);
    let r = [];
    return L.Children.forEach(e, (n, a) => {
        if (!L.isValidElement(n)) return;
        let i = [...t, a];
        if (n.type === L.Fragment) {
            r.push.apply(r, il(n.props.children, i));
            return
        }
        n.type !== ZF && pe(!1), !n.props.index || !n.props.children || pe(!1);
        let s = {
            id: n.props.id || i.join("-"),
            caseSensitive: n.props.caseSensitive,
            element: n.props.element,
            Component: n.props.Component,
            index: n.props.index,
            path: n.props.path,
            loader: n.props.loader,
            action: n.props.action,
            errorElement: n.props.errorElement,
            ErrorBoundary: n.props.ErrorBoundary,
            hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null,
            shouldRevalidate: n.props.shouldRevalidate,
            handle: n.props.handle,
            lazy: n.props.lazy
        };
        n.props.children && (s.children = il(n.props.children, i)), r.push(s)
    }), r
}
var lg = function () {
    return lg = Object.assign || function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
            r = arguments[n];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }, lg.apply(this, arguments)
};
var ej = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++) r.push(e.getRangeAt(n));
        switch (t.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
                t.blur();
                break;
            default:
                t = null;
                break
        }
        return e.removeAllRanges(),
            function () {
                e.type === "Caret" && e.removeAllRanges(), e.rangeCount || r.forEach(function (a) {
                    e.addRange(a)
                }), t && t.focus()
            }
    },
    tj = ej,
    fg = {
        "text/plain": "Text",
        "text/html": "Url",
        default: "Text"
    },
    rj = "Copy to clipboard: #{key}, Enter";

function nj(e) {
    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return e.replace(/#{\s*key\s*}/g, t)
}

function aj(e, t) {
    var r, n, a, i, s, o, u = !1;
    t || (t = {}), r = t.debug || !1;
    try {
        a = tj(), i = document.createRange(), s = document.getSelection(), o = document.createElement("span"), o.textContent = e, o.ariaHidden = "true", o.style.all = "unset", o.style.position = "fixed", o.style.top = 0, o.style.clip = "rect(0, 0, 0, 0)", o.style.whiteSpace = "pre", o.style.webkitUserSelect = "text", o.style.MozUserSelect = "text", o.style.msUserSelect = "text", o.style.userSelect = "text", o.addEventListener("copy", function (l) {
            if (l.stopPropagation(), t.format)
                if (l.preventDefault(), typeof l.clipboardData > "u") {
                    r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                    var f = fg[t.format] || fg.default;
                    window.clipboardData.setData(f, e)
                } else l.clipboardData.clearData(), l.clipboardData.setData(t.format, e);
            t.onCopy && (l.preventDefault(), t.onCopy(l.clipboardData))
        }), document.body.appendChild(o), i.selectNodeContents(o), s.addRange(i);
        var c = document.execCommand("copy");
        if (!c) throw new Error("copy command was unsuccessful");
        u = !0
    } catch (l) {
        r && console.error("unable to copy using execCommand: ", l), r && console.warn("trying IE specific stuff");
        try {
            window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0
        } catch (f) {
            r && console.error("unable to copy using clipboardData: ", f), r && console.error("falling back to prompt"), n = nj("message" in t ? t.message : rj), window.prompt(n, e)
        }
    } finally {
        s && (typeof s.removeRange == "function" ? s.removeRange(i) : s.removeAllRanges()), o && document.body.removeChild(o), a()
    }
    return u
}
var ij = aj;
const DB = Re(ij);

function Zr(e) {
    if (!Number.isSafeInteger(e) || e < 0) throw new Error(`Wrong positive integer: ${e}`)
}

function sj(e) {
    return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array"
}

function Jf(e, ...t) {
    if (!sj(e)) throw new Error("Expected Uint8Array");
    if (t.length > 0 && !t.includes(e.length)) throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)
}

function mb(e) {
    if (typeof e != "function" || typeof e.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
    Zr(e.outputLen), Zr(e.blockLen)
}

function Rs(e, t = !0) {
    if (e.destroyed) throw new Error("Hash instance has been destroyed");
    if (t && e.finished) throw new Error("Hash#digest() has already been called")
}

function oj(e, t) {
    Jf(e);
    const r = t.outputLen;
    if (e.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`)
}
const ec = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0; /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function uj(e) {
    return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array"
}
const Vi = e => new DataView(e.buffer, e.byteOffset, e.byteLength),
    st = (e, t) => e << 32 - t | e >>> t,
    cj = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!cj) throw new Error("Non little-endian hardware is not supported");
const lj = async () => {};
async function fj(e, t, r) {
    let n = Date.now();
    for (let a = 0; a < e; a++) {
        r(a);
        const i = Date.now() - n;
        i >= 0 && i < t || (await lj(), n += i)
    }
}

function dj(e) {
    if (typeof e != "string") throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
    return new Uint8Array(new TextEncoder().encode(e))
}

function wa(e) {
    if (typeof e == "string" && (e = dj(e)), !uj(e)) throw new Error(`expected Uint8Array, got ${typeof e}`);
    return e
}
class gb {
    clone() {
        return this._cloneInto()
    }
}
const hj = {}.toString;

function pj(e, t) {
    if (t !== void 0 && hj.call(t) !== "[object Object]") throw new Error("Options should be object or undefined");
    return Object.assign(e, t)
}

function mj(e) {
    const t = n => e().update(wa(n)).digest(),
        r = e();
    return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t
}

function gj(e = 32) {
    if (ec && typeof ec.getRandomValues == "function") return ec.getRandomValues(new Uint8Array(e));
    throw new Error("crypto.getRandomValues must be defined")
}
class vb extends gb {
    constructor(t, r) {
        super(), this.finished = !1, this.destroyed = !1, mb(t);
        const n = wa(r);
        if (this.iHash = t.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
        const a = this.blockLen,
            i = new Uint8Array(a);
        i.set(n.length > a ? t.create().update(n).digest() : n);
        for (let s = 0; s < i.length; s++) i[s] ^= 54;
        this.iHash.update(i), this.oHash = t.create();
        for (let s = 0; s < i.length; s++) i[s] ^= 106;
        this.oHash.update(i), i.fill(0)
    }
    update(t) {
        return Rs(this), this.iHash.update(t), this
    }
    digestInto(t) {
        Rs(this), Jf(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy()
    }
    digest() {
        const t = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(t), t
    }
    _cloneInto(t) {
        t || (t = Object.create(Object.getPrototypeOf(this), {}));
        const {
            oHash: r,
            iHash: n,
            finished: a,
            destroyed: i,
            blockLen: s,
            outputLen: o
        } = this;
        return t = t, t.finished = a, t.destroyed = i, t.blockLen = s, t.outputLen = o, t.oHash = r._cloneInto(t.oHash), t.iHash = n._cloneInto(t.iHash), t
    }
    destroy() {
        this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
    }
}
const yb = (e, t, r) => new vb(e, t).update(r).digest();
yb.create = (e, t) => new vb(e, t);

function vj(e, t, r, n) {
    mb(e);
    const a = pj({
            dkLen: 32,
            asyncTick: 10
        }, n),
        {
            c: i,
            dkLen: s,
            asyncTick: o
        } = a;
    if (Zr(i), Zr(s), Zr(o), i < 1) throw new Error("PBKDF2: iterations (c) should be >= 1");
    const u = wa(t),
        c = wa(r),
        l = new Uint8Array(s),
        f = yb.create(e, u),
        d = f._cloneInto().update(c);
    return {
        c: i,
        dkLen: s,
        asyncTick: o,
        DK: l,
        PRF: f,
        PRFSalt: d
    }
}

function yj(e, t, r, n, a) {
    return e.destroy(), t.destroy(), n && n.destroy(), a.fill(0), r
}
async function FB(e, t, r, n) {
    const {
        c: a,
        dkLen: i,
        asyncTick: s,
        DK: o,
        PRF: u,
        PRFSalt: c
    } = vj(e, t, r, n);
    let l;
    const f = new Uint8Array(4),
        d = Vi(f),
        h = new Uint8Array(u.outputLen);
    for (let p = 1, y = 0; y < i; p++, y += u.outputLen) {
        const b = o.subarray(y, y + u.outputLen);
        d.setInt32(0, p, !1), (l = c._cloneInto(l)).update(f).digestInto(h), b.set(h.subarray(0, b.length)), await fj(a - 1, s, () => {
            u._cloneInto(l).update(h).digestInto(h);
            for (let _ = 0; _ < b.length; _++) b[_] ^= h[_]
        })
    }
    return yj(u, c, o, l, h)
}

function bj(e, t, r, n) {
    if (typeof e.setBigUint64 == "function") return e.setBigUint64(t, r, n);
    const a = BigInt(32),
        i = BigInt(4294967295),
        s = Number(r >> a & i),
        o = Number(r & i),
        u = n ? 4 : 0,
        c = n ? 0 : 4;
    e.setUint32(t + u, s, n), e.setUint32(t + c, o, n)
}
class wj extends gb {
    constructor(t, r, n, a) {
        super(), this.blockLen = t, this.outputLen = r, this.padOffset = n, this.isLE = a, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = Vi(this.buffer)
    }
    update(t) {
        Rs(this);
        const {
            view: r,
            buffer: n,
            blockLen: a
        } = this;
        t = wa(t);
        const i = t.length;
        for (let s = 0; s < i;) {
            const o = Math.min(a - this.pos, i - s);
            if (o === a) {
                const u = Vi(t);
                for (; a <= i - s; s += a) this.process(u, s);
                continue
            }
            n.set(t.subarray(s, s + o), this.pos), this.pos += o, s += o, this.pos === a && (this.process(r, 0), this.pos = 0)
        }
        return this.length += t.length, this.roundClean(), this
    }
    digestInto(t) {
        Rs(this), oj(t, this), this.finished = !0;
        const {
            buffer: r,
            view: n,
            blockLen: a,
            isLE: i
        } = this;
        let {
            pos: s
        } = this;
        r[s++] = 128, this.buffer.subarray(s).fill(0), this.padOffset > a - s && (this.process(n, 0), s = 0);
        for (let f = s; f < a; f++) r[f] = 0;
        bj(n, a - 8, BigInt(this.length * 8), i), this.process(n, 0);
        const o = Vi(t),
            u = this.outputLen;
        if (u % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const c = u / 4,
            l = this.get();
        if (c > l.length) throw new Error("_sha2: outputLen bigger than state");
        for (let f = 0; f < c; f++) o.setUint32(4 * f, l[f], i)
    }
    digest() {
        const {
            buffer: t,
            outputLen: r
        } = this;
        this.digestInto(t);
        const n = t.slice(0, r);
        return this.destroy(), n
    }
    _cloneInto(t) {
        t || (t = new this.constructor), t.set(...this.get());
        const {
            blockLen: r,
            buffer: n,
            length: a,
            finished: i,
            destroyed: s,
            pos: o
        } = this;
        return t.length = a, t.pos = o, t.finished = i, t.destroyed = s, a % r && t.buffer.set(n), t
    }
}
const Ej = (e, t, r) => e & t ^ ~e & r,
    Sj = (e, t, r) => e & t ^ e & r ^ t & r,
    $j = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
    Ft = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
    jt = new Uint32Array(64);
class Aj extends wj {
    constructor() {
        super(64, 32, 8, !1), this.A = Ft[0] | 0, this.B = Ft[1] | 0, this.C = Ft[2] | 0, this.D = Ft[3] | 0, this.E = Ft[4] | 0, this.F = Ft[5] | 0, this.G = Ft[6] | 0, this.H = Ft[7] | 0
    }
    get() {
        const {
            A: t,
            B: r,
            C: n,
            D: a,
            E: i,
            F: s,
            G: o,
            H: u
        } = this;
        return [t, r, n, a, i, s, o, u]
    }
    set(t, r, n, a, i, s, o, u) {
        this.A = t | 0, this.B = r | 0, this.C = n | 0, this.D = a | 0, this.E = i | 0, this.F = s | 0, this.G = o | 0, this.H = u | 0
    }
    process(t, r) {
        for (let f = 0; f < 16; f++, r += 4) jt[f] = t.getUint32(r, !1);
        for (let f = 16; f < 64; f++) {
            const d = jt[f - 15],
                h = jt[f - 2],
                p = st(d, 7) ^ st(d, 18) ^ d >>> 3,
                y = st(h, 17) ^ st(h, 19) ^ h >>> 10;
            jt[f] = y + jt[f - 7] + p + jt[f - 16] | 0
        }
        let {
            A: n,
            B: a,
            C: i,
            D: s,
            E: o,
            F: u,
            G: c,
            H: l
        } = this;
        for (let f = 0; f < 64; f++) {
            const d = st(o, 6) ^ st(o, 11) ^ st(o, 25),
                h = l + d + Ej(o, u, c) + $j[f] + jt[f] | 0,
                y = (st(n, 2) ^ st(n, 13) ^ st(n, 22)) + Sj(n, a, i) | 0;
            l = c, c = u, u = o, o = s + h | 0, s = i, i = a, a = n, n = h + y | 0
        }
        n = n + this.A | 0, a = a + this.B | 0, i = i + this.C | 0, s = s + this.D | 0, o = o + this.E | 0, u = u + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(n, a, i, s, o, u, c, l)
    }
    roundClean() {
        jt.fill(0)
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
    }
}
const Oj = mj(() => new Aj); /*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Cs(e) {
    return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array"
}

function _j(...e) {
    const t = i => i,
        r = (i, s) => o => i(s(o)),
        n = e.map(i => i.encode).reduceRight(r, t),
        a = e.map(i => i.decode).reduce(r, t);
    return {
        encode: n,
        decode: a
    }
}

function Rj(e) {
    return {
        encode: t => {
            if (!Array.isArray(t) || t.length && typeof t[0] != "number") throw new Error("alphabet.encode input should be an array of numbers");
            return t.map(r => {
                if (r < 0 || r >= e.length) throw new Error(`Digit index outside alphabet: ${r} (alphabet: ${e.length})`);
                return e[r]
            })
        },
        decode: t => {
            if (!Array.isArray(t) || t.length && typeof t[0] != "string") throw new Error("alphabet.decode input should be array of strings");
            return t.map(r => {
                if (typeof r != "string") throw new Error(`alphabet.decode: not string element=${r}`);
                const n = e.indexOf(r);
                if (n === -1) throw new Error(`Unknown letter: "${r}". Allowed: ${e}`);
                return n
            })
        }
    }
}

function Cj(e = "") {
    if (typeof e != "string") throw new Error("join separator should be string");
    return {
        encode: t => {
            if (!Array.isArray(t) || t.length && typeof t[0] != "string") throw new Error("join.encode input should be array of strings");
            for (let r of t)
                if (typeof r != "string") throw new Error(`join.encode: non-string input=${r}`);
            return t.join(e)
        },
        decode: t => {
            if (typeof t != "string") throw new Error("join.decode input should be string");
            return t.split(e)
        }
    }
}

function Ij(e, t = "=") {
    if (typeof t != "string") throw new Error("padding chr should be string");
    return {
        encode(r) {
            if (!Array.isArray(r) || r.length && typeof r[0] != "string") throw new Error("padding.encode input should be array of strings");
            for (let n of r)
                if (typeof n != "string") throw new Error(`padding.encode: non-string input=${n}`);
            for (; r.length * e % 8;) r.push(t);
            return r
        },
        decode(r) {
            if (!Array.isArray(r) || r.length && typeof r[0] != "string") throw new Error("padding.encode input should be array of strings");
            for (let a of r)
                if (typeof a != "string") throw new Error(`padding.decode: non-string input=${a}`);
            let n = r.length;
            if (n * e % 8) throw new Error("Invalid padding: string should have whole number of bytes");
            for (; n > 0 && r[n - 1] === t; n--)
                if (!((n - 1) * e % 8)) throw new Error("Invalid padding: string has too much padding");
            return r.slice(0, n)
        }
    }
}

function sl(e, t, r) {
    if (t < 2) throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);
    if (r < 2) throw new Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);
    if (!Array.isArray(e)) throw new Error("convertRadix: data should be array");
    if (!e.length) return [];
    let n = 0;
    const a = [],
        i = Array.from(e);
    for (i.forEach(s => {
            if (s < 0 || s >= t) throw new Error(`Wrong integer: ${s}`)
        });;) {
        let s = 0,
            o = !0;
        for (let u = n; u < i.length; u++) {
            const c = i[u],
                l = t * s + c;
            if (!Number.isSafeInteger(l) || t * s / t !== s || l - c !== t * s) throw new Error("convertRadix: carry overflow");
            s = l % r;
            const f = Math.floor(l / r);
            if (i[u] = f, !Number.isSafeInteger(f) || f * r + s !== l) throw new Error("convertRadix: carry overflow");
            if (o) f ? o = !1 : n = u;
            else continue
        }
        if (a.push(s), o) break
    }
    for (let s = 0; s < e.length - 1 && e[s] === 0; s++) a.push(0);
    return a.reverse()
}
const bb = (e, t) => t ? bb(t, e % t) : e,
    Is = (e, t) => e + (t - bb(e, t));

function ol(e, t, r, n) {
    if (!Array.isArray(e)) throw new Error("convertRadix2: data should be array");
    if (t <= 0 || t > 32) throw new Error(`convertRadix2: wrong from=${t}`);
    if (r <= 0 || r > 32) throw new Error(`convertRadix2: wrong to=${r}`);
    if (Is(t, r) > 32) throw new Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${Is(t,r)}`);
    let a = 0,
        i = 0;
    const s = 2 ** r - 1,
        o = [];
    for (const u of e) {
        if (u >= 2 ** t) throw new Error(`convertRadix2: invalid data word=${u} from=${t}`);
        if (a = a << t | u, i + t > 32) throw new Error(`convertRadix2: carry overflow pos=${i} from=${t}`);
        for (i += t; i >= r; i -= r) o.push((a >> i - r & s) >>> 0);
        a &= 2 ** i - 1
    }
    if (a = a << r - i & s, !n && i >= t) throw new Error("Excess padding");
    if (!n && a) throw new Error(`Non-zero padding: ${a}`);
    return n && i > 0 && o.push(a >>> 0), o
}

function Nj(e) {
    return {
        encode: t => {
            if (!Cs(t)) throw new Error("radix.encode input should be Uint8Array");
            return sl(Array.from(t), 2 ** 8, e)
        },
        decode: t => {
            if (!Array.isArray(t) || t.length && typeof t[0] != "number") throw new Error("radix.decode input should be array of numbers");
            return Uint8Array.from(sl(t, e, 2 ** 8))
        }
    }
}

function Tj(e, t = !1) {
    if (e <= 0 || e > 32) throw new Error("radix2: bits should be in (0..32]");
    if (Is(8, e) > 32 || Is(e, 8) > 32) throw new Error("radix2: carry overflow");
    return {
        encode: r => {
            if (!Cs(r)) throw new Error("radix2.encode input should be Uint8Array");
            return ol(Array.from(r), 8, e, !t)
        },
        decode: r => {
            if (!Array.isArray(r) || r.length && typeof r[0] != "number") throw new Error("radix2.decode input should be array of numbers");
            return Uint8Array.from(ol(r, e, 8, t))
        }
    }
}

function xj(e, t) {
    if (typeof t != "function") throw new Error("checksum fn should be function");
    return {
        encode(r) {
            if (!Cs(r)) throw new Error("checksum.encode: input should be Uint8Array");
            const n = t(r).slice(0, e),
                a = new Uint8Array(r.length + e);
            return a.set(r), a.set(n, r.length), a
        },
        decode(r) {
            if (!Cs(r)) throw new Error("checksum.decode: input should be Uint8Array");
            const n = r.slice(0, -e),
                a = t(n).slice(0, e),
                i = r.slice(-e);
            for (let s = 0; s < e; s++)
                if (a[s] !== i[s]) throw new Error("Invalid checksum");
            return n
        }
    }
}
const $i = {
    alphabet: Rj,
    chain: _j,
    checksum: xj,
    convertRadix: sl,
    convertRadix2: ol,
    radix: Nj,
    radix2: Tj,
    join: Cj,
    padding: Ij
}; /*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */
const kj = e => e[0] === "あいこくしん";

function Pj(e) {
    if (typeof e != "string") throw new TypeError(`Invalid mnemonic type: ${typeof e}`);
    return e.normalize("NFKD")
}

function Lj(e) {
    const t = Pj(e),
        r = t.split(" ");
    if (![12, 15, 18, 21, 24].includes(r.length)) throw new Error("Invalid mnemonic");
    return {
        nfkd: t,
        words: r
    }
}

function wb(e) {
    Jf(e, 16, 20, 24, 28, 32)
}

function jB(e, t = 128) {
    if (Zr(t), t % 32 !== 0 || t > 256) throw new TypeError("Invalid entropy");
    return jj(gj(t / 8), e)
}
const Dj = e => {
    const t = 8 - e.length / 4;
    return new Uint8Array([Oj(e)[0] >> t << t])
};

function Eb(e) {
    if (!Array.isArray(e) || e.length !== 2048 || typeof e[0] != "string") throw new Error("Wordlist: expected array of 2048 strings");
    return e.forEach(t => {
        if (typeof t != "string") throw new Error(`Wordlist: non-string element: ${t}`)
    }), $i.chain($i.checksum(1, Dj), $i.radix2(11, !0), $i.alphabet(e))
}

function Fj(e, t) {
    const {
        words: r
    } = Lj(e), n = Eb(t).decode(r);
    return wb(n), n
}

function jj(e, t) {
    return wb(e), Eb(t).encode(e).join(kj(t) ? "　" : " ")
}

function UB(e, t) {
    try {
        Fj(e, t)
    } catch {
        return !1
    }
    return !0
}
const MB = `abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`);
var Sb = {
        exports: {}
    },
    Uj = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    Mj = Uj,
    Bj = Mj;

function $b() {}

function Ab() {}
Ab.resetWarningCache = $b;
var zj = function () {
    function e(n, a, i, s, o, u) {
        if (u !== Bj) {
            var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw c.name = "Invariant Violation", c
        }
    }
    e.isRequired = e;

    function t() {
        return e
    }
    var r = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: Ab,
        resetWarningCache: $b
    };
    return r.PropTypes = r, r
};
Sb.exports = zj();
var BB = Sb.exports;
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */
var Ob = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
    Ns = Ob.join(","),
    _b = typeof Element > "u",
    Er = _b ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
    Ts = !_b && Element.prototype.getRootNode ? function (e) {
        var t;
        return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e)
    } : function (e) {
        return e == null ? void 0 : e.ownerDocument
    },
    xs = function e(t, r) {
        var n;
        r === void 0 && (r = !0);
        var a = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"),
            i = a === "" || a === "true",
            s = i || r && t && e(t.parentNode);
        return s
    },
    Vj = function (t) {
        var r, n = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "contenteditable");
        return n === "" || n === "true"
    },
    Rb = function (t, r, n) {
        if (xs(t)) return [];
        var a = Array.prototype.slice.apply(t.querySelectorAll(Ns));
        return r && Er.call(t, Ns) && a.unshift(t), a = a.filter(n), a
    },
    Cb = function e(t, r, n) {
        for (var a = [], i = Array.from(t); i.length;) {
            var s = i.shift();
            if (!xs(s, !1))
                if (s.tagName === "SLOT") {
                    var o = s.assignedElements(),
                        u = o.length ? o : s.children,
                        c = e(u, !0, n);
                    n.flatten ? a.push.apply(a, c) : a.push({
                        scopeParent: s,
                        candidates: c
                    })
                } else {
                    var l = Er.call(s, Ns);
                    l && n.filter(s) && (r || !t.includes(s)) && a.push(s);
                    var f = s.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(s),
                        d = !xs(f, !1) && (!n.shadowRootFilter || n.shadowRootFilter(s));
                    if (f && d) {
                        var h = e(f === !0 ? s.children : f.children, !0, n);
                        n.flatten ? a.push.apply(a, h) : a.push({
                            scopeParent: s,
                            candidates: h
                        })
                    } else i.unshift.apply(i, s.children)
                }
        }
        return a
    },
    Ib = function (t) {
        return !isNaN(parseInt(t.getAttribute("tabindex"), 10))
    },
    Mt = function (t) {
        if (!t) throw new Error("No node provided");
        return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Vj(t)) && !Ib(t) ? 0 : t.tabIndex
    },
    qj = function (t, r) {
        var n = Mt(t);
        return n < 0 && r && !Ib(t) ? 0 : n
    },
    Wj = function (t, r) {
        return t.tabIndex === r.tabIndex ? t.documentOrder - r.documentOrder : t.tabIndex - r.tabIndex
    },
    Nb = function (t) {
        return t.tagName === "INPUT"
    },
    Gj = function (t) {
        return Nb(t) && t.type === "hidden"
    },
    Hj = function (t) {
        var r = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function (n) {
            return n.tagName === "SUMMARY"
        });
        return r
    },
    Kj = function (t, r) {
        for (var n = 0; n < t.length; n++)
            if (t[n].checked && t[n].form === r) return t[n]
    },
    Xj = function (t) {
        if (!t.name) return !0;
        var r = t.form || Ts(t),
            n = function (o) {
                return r.querySelectorAll('input[type="radio"][name="' + o + '"]')
            },
            a;
        if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") a = n(window.CSS.escape(t.name));
        else try {
            a = n(t.name)
        } catch (s) {
            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1
        }
        var i = Kj(a, t.form);
        return !i || i === t
    },
    Yj = function (t) {
        return Nb(t) && t.type === "radio"
    },
    Jj = function (t) {
        return Yj(t) && !Xj(t)
    },
    Qj = function (t) {
        var r, n = t && Ts(t),
            a = (r = n) === null || r === void 0 ? void 0 : r.host,
            i = !1;
        if (n && n !== t) {
            var s, o, u;
            for (i = !!((s = a) !== null && s !== void 0 && (o = s.ownerDocument) !== null && o !== void 0 && o.contains(a) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !i && a;) {
                var c, l, f;
                n = Ts(a), a = (c = n) === null || c === void 0 ? void 0 : c.host, i = !!((l = a) !== null && l !== void 0 && (f = l.ownerDocument) !== null && f !== void 0 && f.contains(a))
            }
        }
        return i
    },
    dg = function (t) {
        var r = t.getBoundingClientRect(),
            n = r.width,
            a = r.height;
        return n === 0 && a === 0
    },
    Zj = function (t, r) {
        var n = r.displayCheck,
            a = r.getShadowRoot;
        if (getComputedStyle(t).visibility === "hidden") return !0;
        var i = Er.call(t, "details>summary:first-of-type"),
            s = i ? t.parentElement : t;
        if (Er.call(s, "details:not([open]) *")) return !0;
        if (!n || n === "full" || n === "legacy-full") {
            if (typeof a == "function") {
                for (var o = t; t;) {
                    var u = t.parentElement,
                        c = Ts(t);
                    if (u && !u.shadowRoot && a(u) === !0) return dg(t);
                    t.assignedSlot ? t = t.assignedSlot : !u && c !== t.ownerDocument ? t = c.host : t = u
                }
                t = o
            }
            if (Qj(t)) return !t.getClientRects().length;
            if (n !== "legacy-full") return !0
        } else if (n === "non-zero-area") return dg(t);
        return !1
    },
    eU = function (t) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
            for (var r = t.parentElement; r;) {
                if (r.tagName === "FIELDSET" && r.disabled) {
                    for (var n = 0; n < r.children.length; n++) {
                        var a = r.children.item(n);
                        if (a.tagName === "LEGEND") return Er.call(r, "fieldset[disabled] *") ? !0 : !a.contains(t)
                    }
                    return !0
                }
                r = r.parentElement
            }
        return !1
    },
    ks = function (t, r) {
        return !(r.disabled || xs(r) || Gj(r) || Zj(r, t) || Hj(r) || eU(r))
    },
    ul = function (t, r) {
        return !(Jj(r) || Mt(r) < 0 || !ks(t, r))
    },
    tU = function (t) {
        var r = parseInt(t.getAttribute("tabindex"), 10);
        return !!(isNaN(r) || r >= 0)
    },
    rU = function e(t) {
        var r = [],
            n = [];
        return t.forEach(function (a, i) {
            var s = !!a.scopeParent,
                o = s ? a.scopeParent : a,
                u = qj(o, s),
                c = s ? e(a.candidates) : o;
            u === 0 ? s ? r.push.apply(r, c) : r.push(o) : n.push({
                documentOrder: i,
                tabIndex: u,
                item: a,
                isScope: s,
                content: c
            })
        }), n.sort(Wj).reduce(function (a, i) {
            return i.isScope ? a.push.apply(a, i.content) : a.push(i.content), a
        }, []).concat(r)
    },
    Tb = function (t, r) {
        r = r || {};
        var n;
        return r.getShadowRoot ? n = Cb([t], r.includeContainer, {
            filter: ul.bind(null, r),
            flatten: !1,
            getShadowRoot: r.getShadowRoot,
            shadowRootFilter: tU
        }) : n = Rb(t, r.includeContainer, ul.bind(null, r)), rU(n)
    },
    xb = function (t, r) {
        r = r || {};
        var n;
        return r.getShadowRoot ? n = Cb([t], r.includeContainer, {
            filter: ks.bind(null, r),
            flatten: !0,
            getShadowRoot: r.getShadowRoot
        }) : n = Rb(t, r.includeContainer, ks.bind(null, r)), n
    },
    ur = function (t, r) {
        if (r = r || {}, !t) throw new Error("No node provided");
        return Er.call(t, Ns) === !1 ? !1 : ul(r, t)
    },
    nU = Ob.concat("iframe").join(","),
    qi = function (t, r) {
        if (r = r || {}, !t) throw new Error("No node provided");
        return Er.call(t, nU) === !1 ? !1 : ks(r, t)
    };
const aU = Object.freeze(Object.defineProperty({
    __proto__: null,
    focusable: xb,
    getTabIndex: Mt,
    isFocusable: qi,
    isTabbable: ur,
    tabbable: Tb
}, Symbol.toStringTag, {
    value: "Module"
}));
/*!
 * focus-trap 7.5.4
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */
function hg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function pg(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? hg(Object(r), !0).forEach(function (n) {
            iU(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function iU(e, t, r) {
    return t = oU(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function sU(e, t) {
    if (typeof e != "object" || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function oU(e) {
    var t = sU(e, "string");
    return typeof t == "symbol" ? t : String(t)
}
var mg = {
        activateTrap: function (t, r) {
            if (t.length > 0) {
                var n = t[t.length - 1];
                n !== r && n.pause()
            }
            var a = t.indexOf(r);
            a === -1 || t.splice(a, 1), t.push(r)
        },
        deactivateTrap: function (t, r) {
            var n = t.indexOf(r);
            n !== -1 && t.splice(n, 1), t.length > 0 && t[t.length - 1].unpause()
        }
    },
    uU = function (t) {
        return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function"
    },
    cU = function (t) {
        return (t == null ? void 0 : t.key) === "Escape" || (t == null ? void 0 : t.key) === "Esc" || (t == null ? void 0 : t.keyCode) === 27
    },
    ea = function (t) {
        return (t == null ? void 0 : t.key) === "Tab" || (t == null ? void 0 : t.keyCode) === 9
    },
    lU = function (t) {
        return ea(t) && !t.shiftKey
    },
    fU = function (t) {
        return ea(t) && t.shiftKey
    },
    gg = function (t) {
        return setTimeout(t, 0)
    },
    vg = function (t, r) {
        var n = -1;
        return t.every(function (a, i) {
            return r(a) ? (n = i, !1) : !0
        }), n
    },
    jn = function (t) {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
        return typeof t == "function" ? t.apply(void 0, n) : t
    },
    Ai = function (t) {
        return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target
    },
    dU = [],
    hU = function (t, r) {
        var n = (r == null ? void 0 : r.document) || document,
            a = (r == null ? void 0 : r.trapStack) || dU,
            i = pg({
                returnFocusOnDeactivate: !0,
                escapeDeactivates: !0,
                delayInitialFocus: !0,
                isKeyForward: lU,
                isKeyBackward: fU
            }, r),
            s = {
                containers: [],
                containerGroups: [],
                tabbableGroups: [],
                nodeFocusedBeforeActivation: null,
                mostRecentlyFocusedNode: null,
                active: !1,
                paused: !1,
                delayInitialFocusTimer: void 0,
                recentNavEvent: void 0
            },
            o, u = function (I, S, v) {
                return I && I[S] !== void 0 ? I[S] : i[v || S]
            },
            c = function (I, S) {
                var v = typeof (S == null ? void 0 : S.composedPath) == "function" ? S.composedPath() : void 0;
                return s.containerGroups.findIndex(function (E) {
                    var $ = E.container,
                        A = E.tabbableNodes;
                    return $.contains(I) || (v == null ? void 0 : v.includes($)) || A.find(function (w) {
                        return w === I
                    })
                })
            },
            l = function (I) {
                var S = i[I];
                if (typeof S == "function") {
                    for (var v = arguments.length, E = new Array(v > 1 ? v - 1 : 0), $ = 1; $ < v; $++) E[$ - 1] = arguments[$];
                    S = S.apply(void 0, E)
                }
                if (S === !0 && (S = void 0), !S) {
                    if (S === void 0 || S === !1) return S;
                    throw new Error("`".concat(I, "` was specified but was not a node, or did not return a node"))
                }
                var A = S;
                if (typeof S == "string" && (A = n.querySelector(S), !A)) throw new Error("`".concat(I, "` as selector refers to no known node"));
                return A
            },
            f = function () {
                var I = l("initialFocus");
                if (I === !1) return !1;
                if (I === void 0 || !qi(I, i.tabbableOptions))
                    if (c(n.activeElement) >= 0) I = n.activeElement;
                    else {
                        var S = s.tabbableGroups[0],
                            v = S && S.firstTabbableNode;
                        I = v || l("fallbackFocus")
                    } if (!I) throw new Error("Your focus-trap needs to have at least one focusable element");
                return I
            },
            d = function () {
                if (s.containerGroups = s.containers.map(function (I) {
                        var S = Tb(I, i.tabbableOptions),
                            v = xb(I, i.tabbableOptions),
                            E = S.length > 0 ? S[0] : void 0,
                            $ = S.length > 0 ? S[S.length - 1] : void 0,
                            A = v.find(function (T) {
                                return ur(T)
                            }),
                            w = v.slice().reverse().find(function (T) {
                                return ur(T)
                            }),
                            C = !!S.find(function (T) {
                                return Mt(T) > 0
                            });
                        return {
                            container: I,
                            tabbableNodes: S,
                            focusableNodes: v,
                            posTabIndexesFound: C,
                            firstTabbableNode: E,
                            lastTabbableNode: $,
                            firstDomTabbableNode: A,
                            lastDomTabbableNode: w,
                            nextTabbableNode: function (P) {
                                var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
                                    M = S.indexOf(P);
                                return M < 0 ? B ? v.slice(v.indexOf(P) + 1).find(function (W) {
                                    return ur(W)
                                }) : v.slice(0, v.indexOf(P)).reverse().find(function (W) {
                                    return ur(W)
                                }) : S[M + (B ? 1 : -1)]
                            }
                        }
                    }), s.tabbableGroups = s.containerGroups.filter(function (I) {
                        return I.tabbableNodes.length > 0
                    }), s.tabbableGroups.length <= 0 && !l("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
                if (s.containerGroups.find(function (I) {
                        return I.posTabIndexesFound
                    }) && s.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
            },
            h = function q(I) {
                var S = I.activeElement;
                if (S) return S.shadowRoot && S.shadowRoot.activeElement !== null ? q(S.shadowRoot) : S
            },
            p = function q(I) {
                if (I !== !1 && I !== h(document)) {
                    if (!I || !I.focus) {
                        q(f());
                        return
                    }
                    I.focus({
                        preventScroll: !!i.preventScroll
                    }), s.mostRecentlyFocusedNode = I, uU(I) && I.select()
                }
            },
            y = function (I) {
                var S = l("setReturnFocus", I);
                return S || (S === !1 ? !1 : I)
            },
            b = function (I) {
                var S = I.target,
                    v = I.event,
                    E = I.isBackward,
                    $ = E === void 0 ? !1 : E;
                S = S || Ai(v), d();
                var A = null;
                if (s.tabbableGroups.length > 0) {
                    var w = c(S, v),
                        C = w >= 0 ? s.containerGroups[w] : void 0;
                    if (w < 0) $ ? A = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : A = s.tabbableGroups[0].firstTabbableNode;
                    else if ($) {
                        var T = vg(s.tabbableGroups, function (ge) {
                            var Oe = ge.firstTabbableNode;
                            return S === Oe
                        });
                        if (T < 0 && (C.container === S || qi(S, i.tabbableOptions) && !ur(S, i.tabbableOptions) && !C.nextTabbableNode(S, !1)) && (T = w), T >= 0) {
                            var P = T === 0 ? s.tabbableGroups.length - 1 : T - 1,
                                B = s.tabbableGroups[P];
                            A = Mt(S) >= 0 ? B.lastTabbableNode : B.lastDomTabbableNode
                        } else ea(v) || (A = C.nextTabbableNode(S, !1))
                    } else {
                        var M = vg(s.tabbableGroups, function (ge) {
                            var Oe = ge.lastTabbableNode;
                            return S === Oe
                        });
                        if (M < 0 && (C.container === S || qi(S, i.tabbableOptions) && !ur(S, i.tabbableOptions) && !C.nextTabbableNode(S)) && (M = w), M >= 0) {
                            var W = M === s.tabbableGroups.length - 1 ? 0 : M + 1,
                                Se = s.tabbableGroups[W];
                            A = Mt(S) >= 0 ? Se.firstTabbableNode : Se.firstDomTabbableNode
                        } else ea(v) || (A = C.nextTabbableNode(S))
                    }
                } else A = l("fallbackFocus");
                return A
            },
            _ = function (I) {
                var S = Ai(I);
                if (!(c(S, I) >= 0)) {
                    if (jn(i.clickOutsideDeactivates, I)) {
                        o.deactivate({
                            returnFocus: i.returnFocusOnDeactivate
                        });
                        return
                    }
                    jn(i.allowOutsideClick, I) || I.preventDefault()
                }
            },
            g = function (I) {
                var S = Ai(I),
                    v = c(S, I) >= 0;
                if (v || S instanceof Document) v && (s.mostRecentlyFocusedNode = S);
                else {
                    I.stopImmediatePropagation();
                    var E, $ = !0;
                    if (s.mostRecentlyFocusedNode)
                        if (Mt(s.mostRecentlyFocusedNode) > 0) {
                            var A = c(s.mostRecentlyFocusedNode),
                                w = s.containerGroups[A].tabbableNodes;
                            if (w.length > 0) {
                                var C = w.findIndex(function (T) {
                                    return T === s.mostRecentlyFocusedNode
                                });
                                C >= 0 && (i.isKeyForward(s.recentNavEvent) ? C + 1 < w.length && (E = w[C + 1], $ = !1) : C - 1 >= 0 && (E = w[C - 1], $ = !1))
                            }
                        } else s.containerGroups.some(function (T) {
                            return T.tabbableNodes.some(function (P) {
                                return Mt(P) > 0
                            })
                        }) || ($ = !1);
                    else $ = !1;
                    $ && (E = b({
                        target: s.mostRecentlyFocusedNode,
                        isBackward: i.isKeyBackward(s.recentNavEvent)
                    })), p(E || s.mostRecentlyFocusedNode || f())
                }
                s.recentNavEvent = void 0
            },
            R = function (I) {
                var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                s.recentNavEvent = I;
                var v = b({
                    event: I,
                    isBackward: S
                });
                v && (ea(I) && I.preventDefault(), p(v))
            },
            x = function (I) {
                if (cU(I) && jn(i.escapeDeactivates, I) !== !1) {
                    I.preventDefault(), o.deactivate();
                    return
                }(i.isKeyForward(I) || i.isKeyBackward(I)) && R(I, i.isKeyBackward(I))
            },
            k = function (I) {
                var S = Ai(I);
                c(S, I) >= 0 || jn(i.clickOutsideDeactivates, I) || jn(i.allowOutsideClick, I) || (I.preventDefault(), I.stopImmediatePropagation())
            },
            F = function () {
                if (s.active) return mg.activateTrap(a, o), s.delayInitialFocusTimer = i.delayInitialFocus ? gg(function () {
                    p(f())
                }) : p(f()), n.addEventListener("focusin", g, !0), n.addEventListener("mousedown", _, {
                    capture: !0,
                    passive: !1
                }), n.addEventListener("touchstart", _, {
                    capture: !0,
                    passive: !1
                }), n.addEventListener("click", k, {
                    capture: !0,
                    passive: !1
                }), n.addEventListener("keydown", x, {
                    capture: !0,
                    passive: !1
                }), o
            },
            z = function () {
                if (s.active) return n.removeEventListener("focusin", g, !0), n.removeEventListener("mousedown", _, !0), n.removeEventListener("touchstart", _, !0), n.removeEventListener("click", k, !0), n.removeEventListener("keydown", x, !0), o
            },
            K = function (I) {
                var S = I.some(function (v) {
                    var E = Array.from(v.removedNodes);
                    return E.some(function ($) {
                        return $ === s.mostRecentlyFocusedNode
                    })
                });
                S && p(f())
            },
            j = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(K) : void 0,
            Q = function () {
                j && (j.disconnect(), s.active && !s.paused && s.containers.map(function (I) {
                    j.observe(I, {
                        subtree: !0,
                        childList: !0
                    })
                }))
            };
        return o = {
            get active() {
                return s.active
            },
            get paused() {
                return s.paused
            },
            activate: function (I) {
                if (s.active) return this;
                var S = u(I, "onActivate"),
                    v = u(I, "onPostActivate"),
                    E = u(I, "checkCanFocusTrap");
                E || d(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = n.activeElement, S == null || S();
                var $ = function () {
                    E && d(), F(), Q(), v == null || v()
                };
                return E ? (E(s.containers.concat()).then($, $), this) : ($(), this)
            },
            deactivate: function (I) {
                if (!s.active) return this;
                var S = pg({
                    onDeactivate: i.onDeactivate,
                    onPostDeactivate: i.onPostDeactivate,
                    checkCanReturnFocus: i.checkCanReturnFocus
                }, I);
                clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, z(), s.active = !1, s.paused = !1, Q(), mg.deactivateTrap(a, o);
                var v = u(S, "onDeactivate"),
                    E = u(S, "onPostDeactivate"),
                    $ = u(S, "checkCanReturnFocus"),
                    A = u(S, "returnFocus", "returnFocusOnDeactivate");
                v == null || v();
                var w = function () {
                    gg(function () {
                        A && p(y(s.nodeFocusedBeforeActivation)), E == null || E()
                    })
                };
                return A && $ ? ($(y(s.nodeFocusedBeforeActivation)).then(w, w), this) : (w(), this)
            },
            pause: function (I) {
                if (s.paused || !s.active) return this;
                var S = u(I, "onPause"),
                    v = u(I, "onPostPause");
                return s.paused = !0, S == null || S(), z(), Q(), v == null || v(), this
            },
            unpause: function (I) {
                if (!s.paused || !s.active) return this;
                var S = u(I, "onUnpause"),
                    v = u(I, "onPostUnpause");
                return s.paused = !1, S == null || S(), d(), F(), Q(), v == null || v(), this
            },
            updateContainerElements: function (I) {
                var S = [].concat(I).filter(Boolean);
                return s.containers = S.map(function (v) {
                    return typeof v == "string" ? n.querySelector(v) : v
                }), s.active && d(), Q(), this
            }
        }, o.updateContainerElements(t), o
    };
const pU = Object.freeze(Object.defineProperty({
        __proto__: null,
        createFocusTrap: hU
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    zB = ev(pU),
    VB = ev(aU);
var Ro = {};
Object.defineProperty(Ro, "__esModule", {
    value: !0
});
var mU = Ro.lazyWithPreload = void 0,
    Oi = L;

function kb(e) {
    var t = (0, Oi.lazy)(e),
        r, n, a = (0, Oi.forwardRef)(function (o, u) {
            var c = (0, Oi.useRef)(r ?? t);
            return (0, Oi.createElement)(c.current, Object.assign(u ? {
                ref: u
            } : {}, o))
        }),
        i = a;
    return i.preload = function () {
        return n || (n = e().then(function (s) {
            return r = s.default, r
        })), n
    }, i
}
mU = Ro.lazyWithPreload = kb;
Ro.default = kb;
var yg = function (e, t, r) {
        if (r || arguments.length === 2)
            for (var n = 0, a = t.length, i; n < a; n++)(i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
        return e.concat(i || Array.prototype.slice.call(t))
    },
    gU = function () {
        function e(t, r, n) {
            this.name = t, this.version = r, this.os = n, this.type = "browser"
        }
        return e
    }(),
    vU = function () {
        function e(t) {
            this.version = t, this.type = "node", this.name = "node", this.os = process.platform
        }
        return e
    }(),
    yU = function () {
        function e(t, r, n, a) {
            this.name = t, this.version = r, this.os = n, this.bot = a, this.type = "bot-device"
        }
        return e
    }(),
    bU = function () {
        function e() {
            this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
        }
        return e
    }(),
    wU = function () {
        function e() {
            this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
        }
        return e
    }(),
    EU = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
    SU = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
    bg = 3,
    $U = [
        ["aol", /AOLShield\/([0-9\._]+)/],
        ["edge", /Edge\/([0-9\._]+)/],
        ["edge-ios", /EdgiOS\/([0-9\._]+)/],
        ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
        ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
        ["samsung", /SamsungBrowser\/([0-9\.]+)/],
        ["silk", /\bSilk\/([0-9._-]+)\b/],
        ["miui", /MiuiBrowser\/([0-9\.]+)$/],
        ["beaker", /BeakerBrowser\/([0-9\.]+)/],
        ["edge-chromium", /EdgA?\/([0-9\.]+)/],
        ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
        ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
        ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
        ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
        ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
        ["fxios", /FxiOS\/([0-9\.]+)/],
        ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
        ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
        ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
        ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
        ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
        ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
        ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
        ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
        ["ie", /MSIE\s(7\.0)/],
        ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
        ["android", /Android\s([0-9\.]+)/],
        ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
        ["safari", /Version\/([0-9\._]+).*Safari/],
        ["facebook", /FB[AS]V\/([0-9\.]+)/],
        ["instagram", /Instagram\s([0-9\.]+)/],
        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
        ["curl", /^curl\/([0-9\.]+)$/],
        ["searchbot", EU]
    ],
    wg = [
        ["iOS", /iP(hone|od|ad)/],
        ["Android OS", /Android/],
        ["BlackBerry OS", /BlackBerry|BB10/],
        ["Windows Mobile", /IEMobile/],
        ["Amazon OS", /Kindle/],
        ["Windows 3.11", /Win16/],
        ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
        ["Windows 98", /(Windows 98)|(Win98)/],
        ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
        ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
        ["Windows Server 2003", /(Windows NT 5.2)/],
        ["Windows Vista", /(Windows NT 6.0)/],
        ["Windows 7", /(Windows NT 6.1)/],
        ["Windows 8", /(Windows NT 6.2)/],
        ["Windows 8.1", /(Windows NT 6.3)/],
        ["Windows 10", /(Windows NT 10.0)/],
        ["Windows ME", /Windows ME/],
        ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
        ["Open BSD", /OpenBSD/],
        ["Sun OS", /SunOS/],
        ["Chrome OS", /CrOS/],
        ["Linux", /(Linux)|(X11)/],
        ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
        ["QNX", /QNX/],
        ["BeOS", /BeOS/],
        ["OS/2", /OS\/2/]
    ];

function qB(e) {
    return e ? Eg(e) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new wU : typeof navigator < "u" ? Eg(navigator.userAgent) : _U()
}

function AU(e) {
    return e !== "" && $U.reduce(function (t, r) {
        var n = r[0],
            a = r[1];
        if (t) return t;
        var i = a.exec(e);
        return !!i && [n, i]
    }, !1)
}

function Eg(e) {
    var t = AU(e);
    if (!t) return null;
    var r = t[0],
        n = t[1];
    if (r === "searchbot") return new bU;
    var a = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
    a ? a.length < bg && (a = yg(yg([], a, !0), RU(bg - a.length), !0)) : a = [];
    var i = a.join("."),
        s = OU(e),
        o = SU.exec(e);
    return o && o[1] ? new yU(r, i, s, o[1]) : new gU(r, i, s)
}

function OU(e) {
    for (var t = 0, r = wg.length; t < r; t++) {
        var n = wg[t],
            a = n[0],
            i = n[1],
            s = i.exec(e);
        if (s) return a
    }
    return null
}

function _U() {
    var e = typeof process < "u" && process.version;
    return e ? new vU(process.version.slice(1)) : null
}

function RU(e) {
    for (var t = [], r = 0; r < e; r++) t.push("0");
    return t
}
var Ue = {
        fullscreenEnabled: 0,
        fullscreenElement: 1,
        requestFullscreen: 2,
        exitFullscreen: 3,
        fullscreenchange: 4,
        fullscreenerror: 5,
        fullscreen: 6
    },
    Sg = ["webkitFullscreenEnabled", "webkitFullscreenElement", "webkitRequestFullscreen", "webkitExitFullscreen", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"],
    $g = ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"],
    Ag = ["msFullscreenEnabled", "msFullscreenElement", "msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"],
    ke = typeof window < "u" && typeof window.document < "u" ? window.document : {},
    Ge = "fullscreenEnabled" in ke && Object.keys(Ue) || Sg[0] in ke && Sg || $g[0] in ke && $g || Ag[0] in ke && Ag || [],
    WB = {
        requestFullscreen: function (e) {
            return e[Ge[Ue.requestFullscreen]]()
        },
        requestFullscreenFunction: function (e) {
            return e[Ge[Ue.requestFullscreen]]
        },
        get exitFullscreen() {
            return ke[Ge[Ue.exitFullscreen]].bind(ke)
        },
        get fullscreenPseudoClass() {
            return ":" + Ge[Ue.fullscreen]
        },
        addEventListener: function (e, t, r) {
            return ke.addEventListener(Ge[Ue[e]], t, r)
        },
        removeEventListener: function (e, t, r) {
            return ke.removeEventListener(Ge[Ue[e]], t, r)
        },
        get fullscreenEnabled() {
            return !!ke[Ge[Ue.fullscreenEnabled]]
        },
        set fullscreenEnabled(e) {},
        get fullscreenElement() {
            return ke[Ge[Ue.fullscreenElement]]
        },
        set fullscreenElement(e) {},
        get onfullscreenchange() {
            return ke[("on" + Ge[Ue.fullscreenchange]).toLowerCase()]
        },
        set onfullscreenchange(e) {
            return ke[("on" + Ge[Ue.fullscreenchange]).toLowerCase()] = e
        },
        get onfullscreenerror() {
            return ke[("on" + Ge[Ue.fullscreenerror]).toLowerCase()]
        },
        set onfullscreenerror(e) {
            return ke[("on" + Ge[Ue.fullscreenerror]).toLowerCase()] = e
        }
    },
    CU = Object.defineProperty,
    IU = (e, t) => {
        for (var r in t) CU(e, r, {
            get: t[r],
            enumerable: !0
        })
    },
    pt = {};
IU(pt, {
    assign: () => xU,
    colors: () => Ht,
    createStringInterpolator: () => ad,
    skipAnimation: () => Mb,
    to: () => Ub,
    willAdvance: () => id
});
var Qf = Wa(),
    J = e => qa(e, Qf),
    Zf = Wa();
J.write = e => qa(e, Zf);
var Co = Wa();
J.onStart = e => qa(e, Co);
var ed = Wa();
J.onFrame = e => qa(e, ed);
var td = Wa();
J.onFinish = e => qa(e, td);
var en = [];
J.setTimeout = (e, t) => {
    const r = J.now() + t,
        n = () => {
            const i = en.findIndex(s => s.cancel == n);
            ~i && en.splice(i, 1), Wt -= ~i ? 1 : 0
        },
        a = {
            time: r,
            handler: e,
            cancel: n
        };
    return en.splice(Pb(r), 0, a), Wt += 1, Lb(), a
};
var Pb = e => ~(~en.findIndex(t => t.time > e) || ~en.length);
J.cancel = e => {
    Co.delete(e), ed.delete(e), td.delete(e), Qf.delete(e), Zf.delete(e)
};
J.sync = e => {
    cl = !0, J.batchedUpdates(e), cl = !1
};
J.throttle = e => {
    let t;

    function r() {
        try {
            e(...t)
        } finally {
            t = null
        }
    }

    function n(...a) {
        t = a, J.onStart(r)
    }
    return n.handler = e, n.cancel = () => {
        Co.delete(r), t = null
    }, n
};
var rd = typeof window < "u" ? window.requestAnimationFrame : () => {};
J.use = e => rd = e;
J.now = typeof performance < "u" ? () => performance.now() : Date.now;
J.batchedUpdates = e => e();
J.catch = console.error;
J.frameLoop = "always";
J.advance = () => {
    J.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Fb()
};
var qt = -1,
    Wt = 0,
    cl = !1;

function qa(e, t) {
    cl ? (t.delete(e), e(0)) : (t.add(e), Lb())
}

function Lb() {
    qt < 0 && (qt = 0, J.frameLoop !== "demand" && rd(Db))
}

function NU() {
    qt = -1
}

function Db() {
    ~qt && (rd(Db), J.batchedUpdates(Fb))
}

function Fb() {
    const e = qt;
    qt = J.now();
    const t = Pb(qt);
    if (t && (jb(en.splice(0, t), r => r.handler()), Wt -= t), !Wt) {
        NU();
        return
    }
    Co.flush(), Qf.flush(e ? Math.min(64, qt - e) : 16.667), ed.flush(), Zf.flush(), td.flush()
}

function Wa() {
    let e = new Set,
        t = e;
    return {
        add(r) {
            Wt += t == e && !e.has(r) ? 1 : 0, e.add(r)
        },
        delete(r) {
            return Wt -= t == e && e.has(r) ? 1 : 0, e.delete(r)
        },
        flush(r) {
            t.size && (e = new Set, Wt -= t.size, jb(t, n => n(r) && e.add(n)), Wt += e.size, t = e)
        }
    }
}

function jb(e, t) {
    e.forEach(r => {
        try {
            t(r)
        } catch (n) {
            J.catch(n)
        }
    })
}

function ll() {}
var TU = (e, t, r) => Object.defineProperty(e, t, {
        value: r,
        writable: !0,
        configurable: !0
    }),
    D = {
        arr: Array.isArray,
        obj: e => !!e && e.constructor.name === "Object",
        fun: e => typeof e == "function",
        str: e => typeof e == "string",
        num: e => typeof e == "number",
        und: e => e === void 0
    };

function $t(e, t) {
    if (D.arr(e)) {
        if (!D.arr(t) || e.length !== t.length) return !1;
        for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
        return !0
    }
    return e === t
}
var ie = (e, t) => e.forEach(t);

function Tt(e, t, r) {
    if (D.arr(e)) {
        for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        return
    }
    for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
}
var Ye = e => D.und(e) ? [] : D.arr(e) ? e : [e];

function ta(e, t) {
    if (e.size) {
        const r = Array.from(e);
        e.clear(), ie(r, t)
    }
}
var Gn = (e, ...t) => ta(e, r => r(...t)),
    nd = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    ad, Ub, Ht = null,
    Mb = !1,
    id = ll,
    xU = e => {
        e.to && (Ub = e.to), e.now && (J.now = e.now), e.colors !== void 0 && (Ht = e.colors), e.skipAnimation != null && (Mb = e.skipAnimation), e.createStringInterpolator && (ad = e.createStringInterpolator), e.requestAnimationFrame && J.use(e.requestAnimationFrame), e.batchedUpdates && (J.batchedUpdates = e.batchedUpdates), e.willAdvance && (id = e.willAdvance), e.frameLoop && (J.frameLoop = e.frameLoop)
    },
    ra = new Set,
    Xe = [],
    tc = [],
    Ps = 0,
    Io = {
        get idle() {
            return !ra.size && !Xe.length
        },
        start(e) {
            Ps > e.priority ? (ra.add(e), J.onStart(kU)) : (Bb(e), J(fl))
        },
        advance: fl,
        sort(e) {
            if (Ps) J.onFrame(() => Io.sort(e));
            else {
                const t = Xe.indexOf(e);
                ~t && (Xe.splice(t, 1), zb(e))
            }
        },
        clear() {
            Xe = [], ra.clear()
        }
    };

function kU() {
    ra.forEach(Bb), ra.clear(), J(fl)
}

function Bb(e) {
    Xe.includes(e) || zb(e)
}

function zb(e) {
    Xe.splice(PU(Xe, t => t.priority > e.priority), 0, e)
}

function fl(e) {
    const t = tc;
    for (let r = 0; r < Xe.length; r++) {
        const n = Xe[r];
        Ps = n.priority, n.idle || (id(n), n.advance(e), n.idle || t.push(n))
    }
    return Ps = 0, tc = Xe, tc.length = 0, Xe = t, Xe.length > 0
}

function PU(e, t) {
    const r = e.findIndex(t);
    return r < 0 ? e.length : r
}
var LU = (e, t, r) => Math.min(Math.max(r, e), t),
    GB = {
        transparent: 0,
        aliceblue: 4042850303,
        antiquewhite: 4209760255,
        aqua: 16777215,
        aquamarine: 2147472639,
        azure: 4043309055,
        beige: 4126530815,
        bisque: 4293182719,
        black: 255,
        blanchedalmond: 4293643775,
        blue: 65535,
        blueviolet: 2318131967,
        brown: 2771004159,
        burlywood: 3736635391,
        burntsienna: 3934150143,
        cadetblue: 1604231423,
        chartreuse: 2147418367,
        chocolate: 3530104575,
        coral: 4286533887,
        cornflowerblue: 1687547391,
        cornsilk: 4294499583,
        crimson: 3692313855,
        cyan: 16777215,
        darkblue: 35839,
        darkcyan: 9145343,
        darkgoldenrod: 3095792639,
        darkgray: 2846468607,
        darkgreen: 6553855,
        darkgrey: 2846468607,
        darkkhaki: 3182914559,
        darkmagenta: 2332068863,
        darkolivegreen: 1433087999,
        darkorange: 4287365375,
        darkorchid: 2570243327,
        darkred: 2332033279,
        darksalmon: 3918953215,
        darkseagreen: 2411499519,
        darkslateblue: 1211993087,
        darkslategray: 793726975,
        darkslategrey: 793726975,
        darkturquoise: 13554175,
        darkviolet: 2483082239,
        deeppink: 4279538687,
        deepskyblue: 12582911,
        dimgray: 1768516095,
        dimgrey: 1768516095,
        dodgerblue: 512819199,
        firebrick: 2988581631,
        floralwhite: 4294635775,
        forestgreen: 579543807,
        fuchsia: 4278255615,
        gainsboro: 3705462015,
        ghostwhite: 4177068031,
        gold: 4292280575,
        goldenrod: 3668254975,
        gray: 2155905279,
        green: 8388863,
        greenyellow: 2919182335,
        grey: 2155905279,
        honeydew: 4043305215,
        hotpink: 4285117695,
        indianred: 3445382399,
        indigo: 1258324735,
        ivory: 4294963455,
        khaki: 4041641215,
        lavender: 3873897215,
        lavenderblush: 4293981695,
        lawngreen: 2096890111,
        lemonchiffon: 4294626815,
        lightblue: 2916673279,
        lightcoral: 4034953471,
        lightcyan: 3774873599,
        lightgoldenrodyellow: 4210742015,
        lightgray: 3553874943,
        lightgreen: 2431553791,
        lightgrey: 3553874943,
        lightpink: 4290167295,
        lightsalmon: 4288707327,
        lightseagreen: 548580095,
        lightskyblue: 2278488831,
        lightslategray: 2005441023,
        lightslategrey: 2005441023,
        lightsteelblue: 2965692159,
        lightyellow: 4294959359,
        lime: 16711935,
        limegreen: 852308735,
        linen: 4210091775,
        magenta: 4278255615,
        maroon: 2147483903,
        mediumaquamarine: 1724754687,
        mediumblue: 52735,
        mediumorchid: 3126187007,
        mediumpurple: 2473647103,
        mediumseagreen: 1018393087,
        mediumslateblue: 2070474495,
        mediumspringgreen: 16423679,
        mediumturquoise: 1221709055,
        mediumvioletred: 3340076543,
        midnightblue: 421097727,
        mintcream: 4127193855,
        mistyrose: 4293190143,
        moccasin: 4293178879,
        navajowhite: 4292783615,
        navy: 33023,
        oldlace: 4260751103,
        olive: 2155872511,
        olivedrab: 1804477439,
        orange: 4289003775,
        orangered: 4282712319,
        orchid: 3664828159,
        palegoldenrod: 4008225535,
        palegreen: 2566625535,
        paleturquoise: 2951671551,
        palevioletred: 3681588223,
        papayawhip: 4293907967,
        peachpuff: 4292524543,
        peru: 3448061951,
        pink: 4290825215,
        plum: 3718307327,
        powderblue: 2967529215,
        purple: 2147516671,
        rebeccapurple: 1714657791,
        red: 4278190335,
        rosybrown: 3163525119,
        royalblue: 1097458175,
        saddlebrown: 2336560127,
        salmon: 4202722047,
        sandybrown: 4104413439,
        seagreen: 780883967,
        seashell: 4294307583,
        sienna: 2689740287,
        silver: 3233857791,
        skyblue: 2278484991,
        slateblue: 1784335871,
        slategray: 1887473919,
        slategrey: 1887473919,
        snow: 4294638335,
        springgreen: 16744447,
        steelblue: 1182971135,
        tan: 3535047935,
        teal: 8421631,
        thistle: 3636451583,
        tomato: 4284696575,
        turquoise: 1088475391,
        violet: 4001558271,
        wheat: 4125012991,
        white: 4294967295,
        whitesmoke: 4126537215,
        yellow: 4294902015,
        yellowgreen: 2597139199
    },
    rt = "[-+]?\\d*\\.?\\d+",
    Ls = rt + "%";

function No(...e) {
    return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
}
var DU = new RegExp("rgb" + No(rt, rt, rt)),
    FU = new RegExp("rgba" + No(rt, rt, rt, rt)),
    jU = new RegExp("hsl" + No(rt, Ls, Ls)),
    UU = new RegExp("hsla" + No(rt, Ls, Ls, rt)),
    MU = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    BU = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    zU = /^#([0-9a-fA-F]{6})$/,
    VU = /^#([0-9a-fA-F]{8})$/;

function qU(e) {
    let t;
    return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = zU.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Ht && Ht[e] !== void 0 ? Ht[e] : (t = DU.exec(e)) ? (zr(t[1]) << 24 | zr(t[2]) << 16 | zr(t[3]) << 8 | 255) >>> 0 : (t = FU.exec(e)) ? (zr(t[1]) << 24 | zr(t[2]) << 16 | zr(t[3]) << 8 | Rg(t[4])) >>> 0 : (t = MU.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = VU.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = BU.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = jU.exec(e)) ? (Og(_g(t[1]), _i(t[2]), _i(t[3])) | 255) >>> 0 : (t = UU.exec(e)) ? (Og(_g(t[1]), _i(t[2]), _i(t[3])) | Rg(t[4])) >>> 0 : null
}

function rc(e, t, r) {
    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
}

function Og(e, t, r) {
    const n = r < .5 ? r * (1 + t) : r + t - r * t,
        a = 2 * r - n,
        i = rc(a, n, e + 1 / 3),
        s = rc(a, n, e),
        o = rc(a, n, e - 1 / 3);
    return Math.round(i * 255) << 24 | Math.round(s * 255) << 16 | Math.round(o * 255) << 8
}

function zr(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t
}

function _g(e) {
    return (parseFloat(e) % 360 + 360) % 360 / 360
}

function Rg(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255)
}

function _i(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100
}

function Cg(e) {
    let t = qU(e);
    if (t === null) return e;
    t = t || 0;
    const r = (t & 4278190080) >>> 24,
        n = (t & 16711680) >>> 16,
        a = (t & 65280) >>> 8,
        i = (t & 255) / 255;
    return `rgba(${r}, ${n}, ${a}, ${i})`
}
var Ea = (e, t, r) => {
    if (D.fun(e)) return e;
    if (D.arr(e)) return Ea({
        range: e,
        output: t,
        extrapolate: r
    });
    if (D.str(e.output[0])) return ad(e);
    const n = e,
        a = n.output,
        i = n.range || [0, 1],
        s = n.extrapolateLeft || n.extrapolate || "extend",
        o = n.extrapolateRight || n.extrapolate || "extend",
        u = n.easing || (c => c);
    return c => {
        const l = GU(c, i);
        return WU(c, i[l], i[l + 1], a[l], a[l + 1], u, s, o, n.map)
    }
};

function WU(e, t, r, n, a, i, s, o, u) {
    let c = u ? u(e) : e;
    if (c < t) {
        if (s === "identity") return c;
        s === "clamp" && (c = t)
    }
    if (c > r) {
        if (o === "identity") return c;
        o === "clamp" && (c = r)
    }
    return n === a ? n : t === r ? e <= t ? n : a : (t === -1 / 0 ? c = -c : r === 1 / 0 ? c = c - t : c = (c - t) / (r - t), c = i(c), n === -1 / 0 ? c = -c : a === 1 / 0 ? c = c + n : c = c * (a - n) + n, c)
}

function GU(e, t) {
    for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
    return r - 1
}
var HU = (e, t = "end") => r => {
        r = t === "end" ? Math.min(r, .999) : Math.max(r, .001);
        const n = r * e,
            a = t === "end" ? Math.floor(n) : Math.ceil(n);
        return LU(0, 1, a / e)
    },
    Ds = 1.70158,
    Ri = Ds * 1.525,
    Ig = Ds + 1,
    Ng = 2 * Math.PI / 3,
    Tg = 2 * Math.PI / 4.5,
    Ci = e => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375,
    KU = {
        linear: e => e,
        easeInQuad: e => e * e,
        easeOutQuad: e => 1 - (1 - e) * (1 - e),
        easeInOutQuad: e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
        easeInCubic: e => e * e * e,
        easeOutCubic: e => 1 - Math.pow(1 - e, 3),
        easeInOutCubic: e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
        easeInQuart: e => e * e * e * e,
        easeOutQuart: e => 1 - Math.pow(1 - e, 4),
        easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
        easeInQuint: e => e * e * e * e * e,
        easeOutQuint: e => 1 - Math.pow(1 - e, 5),
        easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
        easeInSine: e => 1 - Math.cos(e * Math.PI / 2),
        easeOutSine: e => Math.sin(e * Math.PI / 2),
        easeInOutSine: e => -(Math.cos(Math.PI * e) - 1) / 2,
        easeInExpo: e => e === 0 ? 0 : Math.pow(2, 10 * e - 10),
        easeOutExpo: e => e === 1 ? 1 : 1 - Math.pow(2, -10 * e),
        easeInOutExpo: e => e === 0 ? 0 : e === 1 ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
        easeInCirc: e => 1 - Math.sqrt(1 - Math.pow(e, 2)),
        easeOutCirc: e => Math.sqrt(1 - Math.pow(e - 1, 2)),
        easeInOutCirc: e => e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
        easeInBack: e => Ig * e * e * e - Ds * e * e,
        easeOutBack: e => 1 + Ig * Math.pow(e - 1, 3) + Ds * Math.pow(e - 1, 2),
        easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * ((Ri + 1) * 2 * e - Ri) / 2 : (Math.pow(2 * e - 2, 2) * ((Ri + 1) * (e * 2 - 2) + Ri) + 2) / 2,
        easeInElastic: e => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * Ng),
        easeOutElastic: e => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - .75) * Ng) + 1,
        easeInOutElastic: e => e === 0 ? 0 : e === 1 ? 1 : e < .5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Tg)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Tg) / 2 + 1,
        easeInBounce: e => 1 - Ci(1 - e),
        easeOutBounce: Ci,
        easeInOutBounce: e => e < .5 ? (1 - Ci(1 - 2 * e)) / 2 : (1 + Ci(2 * e - 1)) / 2,
        steps: HU
    },
    Sa = Symbol.for("FluidValue.get"),
    ln = Symbol.for("FluidValue.observers"),
    lt = e => !!(e && e[Sa]),
    Ke = e => e && e[Sa] ? e[Sa]() : e,
    xg = e => e[ln] || null;

function XU(e, t) {
    e.eventObserved ? e.eventObserved(t) : e(t)
}

function Fs(e, t) {
    const r = e[ln];
    r && r.forEach(n => {
        XU(n, t)
    })
}
var YU = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            JU(this, e)
        }
    },
    JU = (e, t) => Vb(e, Sa, t);

function Ga(e, t) {
    if (e[Sa]) {
        let r = e[ln];
        r || Vb(e, ln, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
    }
    return t
}

function js(e, t) {
    const r = e[ln];
    if (r && r.has(t)) {
        const n = r.size - 1;
        n ? r.delete(t) : e[ln] = null, e.observerRemoved && e.observerRemoved(n, t)
    }
}
var Vb = (e, t, r) => Object.defineProperty(e, t, {
        value: r,
        writable: !0,
        configurable: !0
    }),
    Wi = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    QU = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    kg = new RegExp(`(${Wi.source})(%|[a-z]+)`, "i"),
    ZU = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    To = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    qb = e => {
        const [t, r] = eM(e);
        if (!t || nd()) return e;
        const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (n) return n.trim();
        if (r && r.startsWith("--")) {
            const a = window.getComputedStyle(document.documentElement).getPropertyValue(r);
            return a || e
        } else {
            if (r && To.test(r)) return qb(r);
            if (r) return r
        }
        return e
    },
    eM = e => {
        const t = To.exec(e);
        if (!t) return [, ];
        const [, r, n] = t;
        return [r, n]
    },
    nc, tM = (e, t, r, n, a) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${a})`,
    rM = e => {
        nc || (nc = Ht ? new RegExp(`(${Object.keys(Ht).join("|")})(?!\\w)`, "g") : /^\b$/);
        const t = e.output.map(i => Ke(i).replace(To, qb).replace(QU, Cg).replace(nc, Cg)),
            r = t.map(i => i.match(Wi).map(Number)),
            a = r[0].map((i, s) => r.map(o => {
                if (!(s in o)) throw Error('The arity of each "output" value must be equal');
                return o[s]
            })).map(i => Ea({
                ...e,
                output: i
            }));
        return i => {
            var u;
            const s = !kg.test(t[0]) && ((u = t.find(c => kg.test(c))) == null ? void 0 : u.replace(Wi, ""));
            let o = 0;
            return t[0].replace(Wi, () => `${a[o++](i)}${s||""}`).replace(ZU, tM)
        }
    },
    sd = "react-spring: ",
    Wb = e => {
        const t = e;
        let r = !1;
        if (typeof t != "function") throw new TypeError(`${sd}once requires a function parameter`);
        return (...n) => {
            r || (t(...n), r = !0)
        }
    },
    nM = Wb(console.warn);

function aM() {
    nM(`${sd}The "interpolate" function is deprecated in v9 (use "to" instead)`)
}
var iM = Wb(console.warn);

function sM() {
    iM(`${sd}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)
}

function xo(e) {
    return D.str(e) && (e[0] == "#" || /\d/.test(e) || !nd() && To.test(e) || e in (Ht || {}))
}
var od = nd() ? L.useEffect : L.useLayoutEffect,
    oM = () => {
        const e = L.useRef(!1);
        return od(() => (e.current = !0, () => {
            e.current = !1
        }), []), e
    };

function Gb() {
    const e = L.useState()[1],
        t = oM();
    return () => {
        t.current && e(Math.random())
    }
}

function uM(e, t) {
    const [r] = L.useState(() => ({
        inputs: t,
        result: e()
    })), n = L.useRef(), a = n.current;
    let i = a;
    return i ? t && i.inputs && cM(t, i.inputs) || (i = {
        inputs: t,
        result: e()
    }) : i = r, L.useEffect(() => {
        n.current = i, a == r && (r.inputs = r.result = void 0)
    }, [i]), i.result
}

function cM(e, t) {
    if (e.length !== t.length) return !1;
    for (let r = 0; r < e.length; r++)
        if (e[r] !== t[r]) return !1;
    return !0
}
var Hb = e => L.useEffect(e, lM),
    lM = [];

function Pg(e) {
    const t = L.useRef();
    return L.useEffect(() => {
        t.current = e
    }), t.current
}
var $a = Symbol.for("Animated:node"),
    fM = e => !!e && e[$a] === e,
    ct = e => e && e[$a],
    ud = (e, t) => TU(e, $a, t),
    ko = e => e && e[$a] && e[$a].getPayload(),
    Kb = class {
        constructor() {
            ud(this, this)
        }
        getPayload() {
            return this.payload || []
        }
    },
    Ha = class extends Kb {
        constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, D.num(this._value) && (this.lastPosition = this._value)
        }
        static create(e) {
            return new Ha(e)
        }
        getPayload() {
            return [this]
        }
        getValue() {
            return this._value
        }
        setValue(e, t) {
            return D.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0)
        }
        reset() {
            const {
                done: e
            } = this;
            this.done = !1, D.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
        }
    },
    Aa = class extends Ha {
        constructor(e) {
            super(0), this._string = null, this._toString = Ea({
                output: [e, e]
            })
        }
        static create(e) {
            return new Aa(e)
        }
        getValue() {
            const e = this._string;
            return e ?? (this._string = this._toString(this._value))
        }
        setValue(e) {
            if (D.str(e)) {
                if (e == this._string) return !1;
                this._string = e, this._value = 1
            } else if (super.setValue(e)) this._string = null;
            else return !1;
            return !0
        }
        reset(e) {
            e && (this._toString = Ea({
                output: [this.getValue(), e]
            })), this._value = 0, super.reset()
        }
    },
    Us = {
        dependencies: null
    },
    cd = class extends Kb {
        constructor(e) {
            super(), this.source = e, this.setValue(e)
        }
        getValue(e) {
            const t = {};
            return Tt(this.source, (r, n) => {
                fM(r) ? t[n] = r.getValue(e) : lt(r) ? t[n] = Ke(r) : e || (t[n] = r)
            }), t
        }
        setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
        }
        reset() {
            this.payload && ie(this.payload, e => e.reset())
        }
        _makePayload(e) {
            if (e) {
                const t = new Set;
                return Tt(e, this._addToPayload, t), Array.from(t)
            }
        }
        _addToPayload(e) {
            Us.dependencies && lt(e) && Us.dependencies.add(e);
            const t = ko(e);
            t && ie(t, r => this.add(r))
        }
    },
    Xb = class extends cd {
        constructor(e) {
            super(e)
        }
        static create(e) {
            return new Xb(e)
        }
        getValue() {
            return this.source.map(e => e.getValue())
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map((r, n) => r.setValue(e[n])).some(Boolean) : (super.setValue(e.map(dM)), !0)
        }
    };

function dM(e) {
    return (xo(e) ? Aa : Ha).create(e)
}

function dl(e) {
    const t = ct(e);
    return t ? t.constructor : D.arr(e) ? Xb : xo(e) ? Aa : Ha
}
var Lg = (e, t) => {
        const r = !D.fun(e) || e.prototype && e.prototype.isReactComponent;
        return L.forwardRef((n, a) => {
            const i = L.useRef(null),
                s = r && L.useCallback(p => {
                    i.current = mM(a, p)
                }, [a]),
                [o, u] = pM(n, t),
                c = Gb(),
                l = () => {
                    const p = i.current;
                    if (r && !p) return;
                    (p ? t.applyAnimatedValues(p, o.getValue(!0)) : !1) === !1 && c()
                },
                f = new hM(l, u),
                d = L.useRef();
            od(() => (d.current = f, ie(u, p => Ga(p, f)), () => {
                d.current && (ie(d.current.deps, p => js(p, d.current)), J.cancel(d.current.update))
            })), L.useEffect(l, []), Hb(() => () => {
                const p = d.current;
                ie(p.deps, y => js(y, p))
            });
            const h = t.getComponentProps(o.getValue());
            return L.createElement(e, {
                ...h,
                ref: s
            })
        })
    },
    hM = class {
        constructor(e, t) {
            this.update = e, this.deps = t
        }
        eventObserved(e) {
            e.type == "change" && J.write(this.update)
        }
    };

function pM(e, t) {
    const r = new Set;
    return Us.dependencies = r, e.style && (e = {
        ...e,
        style: t.createAnimatedStyle(e.style)
    }), e = new cd(e), Us.dependencies = null, [e, r]
}

function mM(e, t) {
    return e && (D.fun(e) ? e(t) : e.current = t), t
}
var Dg = Symbol.for("AnimatedComponent"),
    HB = (e, {
        applyAnimatedValues: t = () => !1,
        createAnimatedStyle: r = a => new cd(a),
        getComponentProps: n = a => a
    } = {}) => {
        const a = {
                applyAnimatedValues: t,
                createAnimatedStyle: r,
                getComponentProps: n
            },
            i = s => {
                const o = Fg(s) || "Anonymous";
                return D.str(s) ? s = i[s] || (i[s] = Lg(s, a)) : s = s[Dg] || (s[Dg] = Lg(s, a)), s.displayName = `Animated(${o})`, s
            };
        return Tt(e, (s, o) => {
            D.arr(e) && (o = Fg(s)), i[o] = i(s)
        }), {
            animated: i
        }
    },
    Fg = e => D.str(e) ? e : e && D.str(e.displayName) ? e.displayName : D.fun(e) && e.name || null;

function fr(e, ...t) {
    return D.fun(e) ? e(...t) : e
}
var na = (e, t) => e === !0 || !!(t && e && (D.fun(e) ? e(t) : Ye(e).includes(t))),
    Yb = (e, t) => D.obj(e) ? t && e[t] : e,
    Jb = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0,
    gM = e => e,
    ld = (e, t = gM) => {
        let r = vM;
        e.default && e.default !== !0 && (e = e.default, r = Object.keys(e));
        const n = {};
        for (const a of r) {
            const i = t(e[a], a);
            D.und(i) || (n[a] = i)
        }
        return n
    },
    vM = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
    yM = {
        config: 1,
        from: 1,
        to: 1,
        ref: 1,
        loop: 1,
        reset: 1,
        pause: 1,
        cancel: 1,
        reverse: 1,
        immediate: 1,
        default: 1,
        delay: 1,
        onProps: 1,
        onStart: 1,
        onChange: 1,
        onPause: 1,
        onResume: 1,
        onRest: 1,
        onResolve: 1,
        items: 1,
        trail: 1,
        sort: 1,
        expires: 1,
        initial: 1,
        enter: 1,
        update: 1,
        leave: 1,
        children: 1,
        onDestroyed: 1,
        keys: 1,
        callId: 1,
        parentId: 1
    };

function bM(e) {
    const t = {};
    let r = 0;
    if (Tt(e, (n, a) => {
            yM[a] || (t[a] = n, r++)
        }), r) return t
}

function Qb(e) {
    const t = bM(e);
    if (t) {
        const r = {
            to: t
        };
        return Tt(e, (n, a) => a in t || (r[a] = n)), r
    }
    return {
        ...e
    }
}

function Oa(e) {
    return e = Ke(e), D.arr(e) ? e.map(Oa) : xo(e) ? pt.createStringInterpolator({
        range: [0, 1],
        output: [e, e]
    })(1) : e
}

function wM(e) {
    for (const t in e) return !0;
    return !1
}

function hl(e) {
    return D.fun(e) || D.arr(e) && D.obj(e[0])
}

function EM(e, t) {
    var r;
    (r = e.ref) == null || r.delete(e), t == null || t.delete(e)
}

function SM(e, t) {
    var r;
    t && e.ref !== t && ((r = e.ref) == null || r.delete(e), t.add(e), e.ref = t)
}
var $M = {
        default: {
            tension: 170,
            friction: 26
        },
        gentle: {
            tension: 120,
            friction: 14
        },
        wobbly: {
            tension: 180,
            friction: 12
        },
        stiff: {
            tension: 210,
            friction: 20
        },
        slow: {
            tension: 280,
            friction: 60
        },
        molasses: {
            tension: 280,
            friction: 120
        }
    },
    pl = {
        ...$M.default,
        mass: 1,
        damping: 1,
        easing: KU.linear,
        clamp: !1
    },
    AM = class {
        constructor() {
            this.velocity = 0, Object.assign(this, pl)
        }
    };

function OM(e, t, r) {
    r && (r = {
        ...r
    }, jg(r, t), t = {
        ...r,
        ...t
    }), jg(e, t), Object.assign(e, t);
    for (const s in pl) e[s] == null && (e[s] = pl[s]);
    let {
        frequency: n,
        damping: a
    } = e;
    const {
        mass: i
    } = e;
    return D.und(n) || (n < .01 && (n = .01), a < 0 && (a = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * a * i / n), e
}

function jg(e, t) {
    if (!D.und(t.decay)) e.duration = void 0;
    else {
        const r = !D.und(t.tension) || !D.und(t.friction);
        (r || !D.und(t.frequency) || !D.und(t.damping) || !D.und(t.mass)) && (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
    }
}
var Ug = [],
    _M = class {
        constructor() {
            this.changed = !1, this.values = Ug, this.toValues = null, this.fromValues = Ug, this.config = new AM, this.immediate = !1
        }
    };

function Zb(e, {
    key: t,
    props: r,
    defaultProps: n,
    state: a,
    actions: i
}) {
    return new Promise((s, o) => {
        let u, c, l = na(r.cancel ?? (n == null ? void 0 : n.cancel), t);
        if (l) h();
        else {
            D.und(r.pause) || (a.paused = na(r.pause, t));
            let p = n == null ? void 0 : n.pause;
            p !== !0 && (p = a.paused || na(p, t)), u = fr(r.delay || 0, t), p ? (a.resumeQueue.add(d), i.pause()) : (i.resume(), d())
        }

        function f() {
            a.resumeQueue.add(d), a.timeouts.delete(c), c.cancel(), u = c.time - J.now()
        }

        function d() {
            u > 0 && !pt.skipAnimation ? (a.delayed = !0, c = J.setTimeout(h, u), a.pauseQueue.add(f), a.timeouts.add(c)) : h()
        }

        function h() {
            a.delayed && (a.delayed = !1), a.pauseQueue.delete(f), a.timeouts.delete(c), e <= (a.cancelId || 0) && (l = !0);
            try {
                i.start({
                    ...r,
                    callId: e,
                    cancel: l
                }, s)
            } catch (p) {
                o(p)
            }
        }
    })
}
var fd = (e, t) => t.length == 1 ? t[0] : t.some(r => r.cancelled) ? tn(e.get()) : t.every(r => r.noop) ? ew(e.get()) : Ze(e.get(), t.every(r => r.finished)),
    ew = e => ({
        value: e,
        noop: !0,
        finished: !0,
        cancelled: !1
    }),
    Ze = (e, t, r = !1) => ({
        value: e,
        finished: t,
        cancelled: r
    }),
    tn = e => ({
        value: e,
        cancelled: !0,
        finished: !1
    });

function tw(e, t, r, n) {
    const {
        callId: a,
        parentId: i,
        onRest: s
    } = t, {
        asyncTo: o,
        promise: u
    } = r;
    return !i && e === o && !t.reset ? u : r.promise = (async () => {
        r.asyncId = a, r.asyncTo = e;
        const c = ld(t, (b, _) => _ === "onRest" ? void 0 : b);
        let l, f;
        const d = new Promise((b, _) => (l = b, f = _)),
            h = b => {
                const _ = a <= (r.cancelId || 0) && tn(n) || a !== r.asyncId && Ze(n, !1);
                if (_) throw b.result = _, f(b), b
            },
            p = (b, _) => {
                const g = new Mg,
                    R = new Bg;
                return (async () => {
                    if (pt.skipAnimation) throw _a(r), R.result = Ze(n, !1), f(R), R;
                    h(g);
                    const x = D.obj(b) ? {
                        ...b
                    } : {
                        ..._,
                        to: b
                    };
                    x.parentId = a, Tt(c, (F, z) => {
                        D.und(x[z]) && (x[z] = F)
                    });
                    const k = await n.start(x);
                    return h(g), r.paused && await new Promise(F => {
                        r.resumeQueue.add(F)
                    }), k
                })()
            };
        let y;
        if (pt.skipAnimation) return _a(r), Ze(n, !1);
        try {
            let b;
            D.arr(e) ? b = (async _ => {
                for (const g of _) await p(g)
            })(e) : b = Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([b.then(l), d]), y = Ze(n.get(), !0, !1)
        } catch (b) {
            if (b instanceof Mg) y = b.result;
            else if (b instanceof Bg) y = b.result;
            else throw b
        } finally {
            a == r.asyncId && (r.asyncId = i, r.asyncTo = i ? o : void 0, r.promise = i ? u : void 0)
        }
        return D.fun(s) && J.batchedUpdates(() => {
            s(y, n, n.item)
        }), y
    })()
}

function _a(e, t) {
    ta(e.timeouts, r => r.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
}
var Mg = class extends Error {
        constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
        }
    },
    Bg = class extends Error {
        constructor() {
            super("SkipAnimationSignal")
        }
    },
    ml = e => e instanceof dd,
    RM = 1,
    dd = class extends YU {
        constructor() {
            super(...arguments), this.id = RM++, this._priority = 0
        }
        get priority() {
            return this._priority
        }
        set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
        }
        get() {
            const e = ct(this);
            return e && e.getValue()
        }
        to(...e) {
            return pt.to(this, e)
        }
        interpolate(...e) {
            return aM(), pt.to(this, e)
        }
        toJSON() {
            return this.get()
        }
        observerAdded(e) {
            e == 1 && this._attach()
        }
        observerRemoved(e) {
            e == 0 && this._detach()
        }
        _attach() {}
        _detach() {}
        _onChange(e, t = !1) {
            Fs(this, {
                type: "change",
                parent: this,
                value: e,
                idle: t
            })
        }
        _onPriorityChange(e) {
            this.idle || Io.sort(this), Fs(this, {
                type: "priority",
                parent: this,
                priority: e
            })
        }
    },
    Sr = Symbol.for("SpringPhase"),
    rw = 1,
    gl = 2,
    vl = 4,
    ac = e => (e[Sr] & rw) > 0,
    Ut = e => (e[Sr] & gl) > 0,
    Un = e => (e[Sr] & vl) > 0,
    zg = (e, t) => t ? e[Sr] |= gl | rw : e[Sr] &= ~gl,
    Vg = (e, t) => t ? e[Sr] |= vl : e[Sr] &= ~vl,
    CM = class extends dd {
        constructor(e, t) {
            if (super(), this.animation = new _M, this.defaultProps = {}, this._state = {
                    paused: !1,
                    delayed: !1,
                    pauseQueue: new Set,
                    resumeQueue: new Set,
                    timeouts: new Set
                }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !D.und(e) || !D.und(t)) {
                const r = D.obj(e) ? {
                    ...e
                } : {
                    ...t,
                    from: e
                };
                D.und(r.default) && (r.default = !0), this.start(r)
            }
        }
        get idle() {
            return !(Ut(this) || this._state.asyncTo) || Un(this)
        }
        get goal() {
            return Ke(this.animation.to)
        }
        get velocity() {
            const e = ct(this);
            return e instanceof Ha ? e.lastVelocity || 0 : e.getPayload().map(t => t.lastVelocity || 0)
        }
        get hasAnimated() {
            return ac(this)
        }
        get isAnimating() {
            return Ut(this)
        }
        get isPaused() {
            return Un(this)
        }
        get isDelayed() {
            return this._state.delayed
        }
        advance(e) {
            let t = !0,
                r = !1;
            const n = this.animation;
            let {
                toValues: a
            } = n;
            const {
                config: i
            } = n, s = ko(n.to);
            !s && lt(n.to) && (a = Ye(Ke(n.to))), n.values.forEach((c, l) => {
                if (c.done) return;
                const f = c.constructor == Aa ? 1 : s ? s[l].lastPosition : a[l];
                let d = n.immediate,
                    h = f;
                if (!d) {
                    if (h = c.lastPosition, i.tension <= 0) {
                        c.done = !0;
                        return
                    }
                    let p = c.elapsedTime += e;
                    const y = n.fromValues[l],
                        b = c.v0 != null ? c.v0 : c.v0 = D.arr(i.velocity) ? i.velocity[l] : i.velocity;
                    let _;
                    const g = i.precision || (y == f ? .005 : Math.min(1, Math.abs(f - y) * .001));
                    if (D.und(i.duration))
                        if (i.decay) {
                            const R = i.decay === !0 ? .998 : i.decay,
                                x = Math.exp(-(1 - R) * p);
                            h = y + b / (1 - R) * (1 - x), d = Math.abs(c.lastPosition - h) <= g, _ = b * x
                        } else {
                            _ = c.lastVelocity == null ? b : c.lastVelocity;
                            const R = i.restVelocity || g / 10,
                                x = i.clamp ? 0 : i.bounce,
                                k = !D.und(x),
                                F = y == f ? c.v0 > 0 : y < f;
                            let z, K = !1;
                            const j = 1,
                                Q = Math.ceil(e / j);
                            for (let q = 0; q < Q && (z = Math.abs(_) > R, !(!z && (d = Math.abs(f - h) <= g, d))); ++q) {
                                k && (K = h == f || h > f == F, K && (_ = -_ * x, h = f));
                                const I = -i.tension * 1e-6 * (h - f),
                                    S = -i.friction * .001 * _,
                                    v = (I + S) / i.mass;
                                _ = _ + v * j, h = h + _ * j
                            }
                        }
                    else {
                        let R = 1;
                        i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, c.durationProgress > 0 && (c.elapsedTime = i.duration * c.durationProgress, p = c.elapsedTime += e)), R = (i.progress || 0) + p / this._memoizedDuration, R = R > 1 ? 1 : R < 0 ? 0 : R, c.durationProgress = R), h = y + i.easing(R) * (f - y), _ = (h - c.lastPosition) / e, d = R == 1
                    }
                    c.lastVelocity = _, Number.isNaN(h) && (console.warn("Got NaN while animating:", this), d = !0)
                }
                s && !s[l].done && (d = !1), d ? c.done = !0 : t = !1, c.setValue(h, i.round) && (r = !0)
            });
            const o = ct(this),
                u = o.getValue();
            if (t) {
                const c = Ke(n.to);
                (u !== c || r) && !i.decay ? (o.setValue(c), this._onChange(c)) : r && i.decay && this._onChange(u), this._stop()
            } else r && this._onChange(u)
        }
        set(e) {
            return J.batchedUpdates(() => {
                this._stop(), this._focus(e), this._set(e)
            }), this
        }
        pause() {
            this._update({
                pause: !0
            })
        }
        resume() {
            this._update({
                pause: !1
            })
        }
        finish() {
            if (Ut(this)) {
                const {
                    to: e,
                    config: t
                } = this.animation;
                J.batchedUpdates(() => {
                    this._onStart(), t.decay || this._set(e, !1), this._stop()
                })
            }
            return this
        }
        update(e) {
            return (this.queue || (this.queue = [])).push(e), this
        }
        start(e, t) {
            let r;
            return D.und(e) ? (r = this.queue || [], this.queue = []) : r = [D.obj(e) ? e : {
                ...t,
                to: e
            }], Promise.all(r.map(n => this._update(n))).then(n => fd(this, n))
        }
        stop(e) {
            const {
                to: t
            } = this.animation;
            return this._focus(this.get()), _a(this._state, e && this._lastCallId), J.batchedUpdates(() => this._stop(t, e)), this
        }
        reset() {
            this._update({
                reset: !0
            })
        }
        eventObserved(e) {
            e.type == "change" ? this._start() : e.type == "priority" && (this.priority = e.priority + 1)
        }
        _prepareNode(e) {
            const t = this.key || "";
            let {
                to: r,
                from: n
            } = e;
            r = D.obj(r) ? r[t] : r, (r == null || hl(r)) && (r = void 0), n = D.obj(n) ? n[t] : n, n == null && (n = void 0);
            const a = {
                to: r,
                from: n
            };
            return ac(this) || (e.reverse && ([r, n] = [n, r]), n = Ke(n), D.und(n) ? ct(this) || this._set(r) : this._set(n)), a
        }
        _update({
            ...e
        }, t) {
            const {
                key: r,
                defaultProps: n
            } = this;
            e.default && Object.assign(n, ld(e, (s, o) => /^on/.test(o) ? Yb(s, r) : s)), Wg(this, e, "onProps"), Bn(this, "onProps", e, this);
            const a = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return Zb(++this._lastCallId, {
                key: r,
                props: e,
                defaultProps: n,
                state: i,
                actions: {
                    pause: () => {
                        Un(this) || (Vg(this, !0), Gn(i.pauseQueue), Bn(this, "onPause", Ze(this, Mn(this, this.animation.to)), this))
                    },
                    resume: () => {
                        Un(this) && (Vg(this, !1), Ut(this) && this._resume(), Gn(i.resumeQueue), Bn(this, "onResume", Ze(this, Mn(this, this.animation.to)), this))
                    },
                    start: this._merge.bind(this, a)
                }
            }).then(s => {
                if (e.loop && s.finished && !(t && s.noop)) {
                    const o = nw(e);
                    if (o) return this._update(o, !0)
                }
                return s
            })
        }
        _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(tn(this));
            const n = !D.und(e.to),
                a = !D.und(e.from);
            if (n || a)
                if (t.callId > this._lastToId) this._lastToId = t.callId;
                else return r(tn(this));
            const {
                key: i,
                defaultProps: s,
                animation: o
            } = this, {
                to: u,
                from: c
            } = o;
            let {
                to: l = u,
                from: f = c
            } = e;
            a && !n && (!t.default || D.und(l)) && (l = f), t.reverse && ([l, f] = [f, l]);
            const d = !$t(f, c);
            d && (o.from = f), f = Ke(f);
            const h = !$t(l, u);
            h && this._focus(l);
            const p = hl(t.to),
                {
                    config: y
                } = o,
                {
                    decay: b,
                    velocity: _
                } = y;
            (n || a) && (y.velocity = 0), t.config && !p && OM(y, fr(t.config, i), t.config !== s.config ? fr(s.config, i) : void 0);
            let g = ct(this);
            if (!g || D.und(l)) return r(Ze(this, !0));
            const R = D.und(t.reset) ? a && !t.default : !D.und(f) && na(t.reset, i),
                x = R ? f : this.get(),
                k = Oa(l),
                F = D.num(k) || D.arr(k) || xo(k),
                z = !p && (!F || na(s.immediate || t.immediate, i));
            if (h) {
                const q = dl(l);
                if (q !== g.constructor)
                    if (z) g = this._set(k);
                    else throw Error(`Cannot animate between ${g.constructor.name} and ${q.name}, as the "to" prop suggests`)
            }
            const K = g.constructor;
            let j = lt(l),
                Q = !1;
            if (!j) {
                const q = R || !ac(this) && d;
                (h || q) && (Q = $t(Oa(x), k), j = !Q), (!$t(o.immediate, z) && !z || !$t(y.decay, b) || !$t(y.velocity, _)) && (j = !0)
            }
            if (Q && Ut(this) && (o.changed && !R ? j = !0 : j || this._stop(u)), !p && ((j || lt(u)) && (o.values = g.getPayload(), o.toValues = lt(l) ? null : K == Aa ? [1] : Ye(k)), o.immediate != z && (o.immediate = z, !z && !R && this._set(u)), j)) {
                const {
                    onRest: q
                } = o;
                ie(NM, S => Wg(this, t, S));
                const I = Ze(this, Mn(this, u));
                Gn(this._pendingCalls, I), this._pendingCalls.add(r), o.changed && J.batchedUpdates(() => {
                    var S;
                    o.changed = !R, q == null || q(I, this), R ? fr(s.onRest, I) : (S = o.onStart) == null || S.call(o, I, this)
                })
            }
            R && this._set(x), p ? r(tw(t.to, t, this._state, this)) : j ? this._start() : Ut(this) && !h ? this._pendingCalls.add(r) : r(ew(x))
        }
        _focus(e) {
            const t = this.animation;
            e !== t.to && (xg(this) && this._detach(), t.to = e, xg(this) && this._attach())
        }
        _attach() {
            let e = 0;
            const {
                to: t
            } = this.animation;
            lt(t) && (Ga(t, this), ml(t) && (e = t.priority + 1)), this.priority = e
        }
        _detach() {
            const {
                to: e
            } = this.animation;
            lt(e) && js(e, this)
        }
        _set(e, t = !0) {
            const r = Ke(e);
            if (!D.und(r)) {
                const n = ct(this);
                if (!n || !$t(r, n.getValue())) {
                    const a = dl(r);
                    !n || n.constructor != a ? ud(this, a.create(r)) : n.setValue(r), n && J.batchedUpdates(() => {
                        this._onChange(r, t)
                    })
                }
            }
            return ct(this)
        }
        _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Bn(this, "onStart", Ze(this, Mn(this, e.to)), this))
        }
        _onChange(e, t) {
            t || (this._onStart(), fr(this.animation.onChange, e, this)), fr(this.defaultProps.onChange, e, this), super._onChange(e, t)
        }
        _start() {
            const e = this.animation;
            ct(this).reset(Ke(e.to)), e.immediate || (e.fromValues = e.values.map(t => t.lastPosition)), Ut(this) || (zg(this, !0), Un(this) || this._resume())
        }
        _resume() {
            pt.skipAnimation ? this.finish() : Io.start(this)
        }
        _stop(e, t) {
            if (Ut(this)) {
                zg(this, !1);
                const r = this.animation;
                ie(r.values, a => {
                    a.done = !0
                }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Fs(this, {
                    type: "idle",
                    parent: this
                });
                const n = t ? tn(this.get()) : Ze(this.get(), Mn(this, e ?? r.to));
                Gn(this._pendingCalls, n), r.changed && (r.changed = !1, Bn(this, "onRest", n, this))
            }
        }
    };

function Mn(e, t) {
    const r = Oa(t),
        n = Oa(e.get());
    return $t(n, r)
}

function nw(e, t = e.loop, r = e.to) {
    const n = fr(t);
    if (n) {
        const a = n !== !0 && Qb(n),
            i = (a || e).reverse,
            s = !a || a.reset;
        return Ra({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || hl(r) ? r : void 0,
            from: s ? e.from : void 0,
            reset: s,
            ...a
        })
    }
}

function Ra(e) {
    const {
        to: t,
        from: r
    } = e = Qb(e), n = new Set;
    return D.obj(t) && qg(t, n), D.obj(r) && qg(r, n), e.keys = n.size ? Array.from(n) : null, e
}

function IM(e) {
    const t = Ra(e);
    return D.und(t.default) && (t.default = ld(t)), t
}

function qg(e, t) {
    Tt(e, (r, n) => r != null && t.add(n))
}
var NM = ["onStart", "onRest", "onChange", "onPause", "onResume"];

function Wg(e, t, r) {
    e.animation[r] = t[r] !== Jb(t, r) ? Yb(t[r], e.key) : void 0
}

function Bn(e, t, ...r) {
    var n, a, i, s;
    (a = (n = e.animation)[t]) == null || a.call(n, ...r), (s = (i = e.defaultProps)[t]) == null || s.call(i, ...r)
}
var TM = ["onStart", "onChange", "onRest"],
    xM = 1,
    kM = class {
        constructor(e, t) {
            this.id = xM++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
                paused: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
            }, this._events = {
                onStart: new Map,
                onChange: new Map,
                onRest: new Map
            }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({
                default: !0,
                ...e
            })
        }
        get idle() {
            return !this._state.asyncTo && Object.values(this.springs).every(e => e.idle && !e.isDelayed && !e.isPaused)
        }
        get item() {
            return this._item
        }
        set item(e) {
            this._item = e
        }
        get() {
            const e = {};
            return this.each((t, r) => e[r] = t.get()), e
        }
        set(e) {
            for (const t in e) {
                const r = e[t];
                D.und(r) || this.springs[t].set(r)
            }
        }
        update(e) {
            return e && this.queue.push(Ra(e)), this
        }
        start(e) {
            let {
                queue: t
            } = this;
            return e ? t = Ye(e).map(Ra) : this.queue = [], this._flush ? this._flush(this, t) : (uw(this, t), yl(this, t))
        }
        stop(e, t) {
            if (e !== !!e && (t = e), t) {
                const r = this.springs;
                ie(Ye(t), n => r[n].stop(!!e))
            } else _a(this._state, this._lastAsyncId), this.each(r => r.stop(!!e));
            return this
        }
        pause(e) {
            if (D.und(e)) this.start({
                pause: !0
            });
            else {
                const t = this.springs;
                ie(Ye(e), r => t[r].pause())
            }
            return this
        }
        resume(e) {
            if (D.und(e)) this.start({
                pause: !1
            });
            else {
                const t = this.springs;
                ie(Ye(e), r => t[r].resume())
            }
            return this
        }
        each(e) {
            Tt(this.springs, e)
        }
        _onFrame() {
            const {
                onStart: e,
                onChange: t,
                onRest: r
            } = this._events, n = this._active.size > 0, a = this._changed.size > 0;
            (n && !this._started || a && !this._started) && (this._started = !0, ta(e, ([o, u]) => {
                u.value = this.get(), o(u, this, this._item)
            }));
            const i = !n && this._started,
                s = a || i && r.size ? this.get() : null;
            a && t.size && ta(t, ([o, u]) => {
                u.value = s, o(u, this, this._item)
            }), i && (this._started = !1, ta(r, ([o, u]) => {
                u.value = s, o(u, this, this._item)
            }))
        }
        eventObserved(e) {
            if (e.type == "change") this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else if (e.type == "idle") this._active.delete(e.parent);
            else return;
            J.onFrame(this._onFrame)
        }
    };

function yl(e, t) {
    return Promise.all(t.map(r => aw(e, r))).then(r => fd(e, r))
}
async function aw(e, t, r) {
    const {
        keys: n,
        to: a,
        from: i,
        loop: s,
        onRest: o,
        onResolve: u
    } = t, c = D.obj(t.default) && t.default;
    s && (t.loop = !1), a === !1 && (t.to = null), i === !1 && (t.from = null);
    const l = D.arr(a) || D.fun(a) ? a : void 0;
    l ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : ie(TM, y => {
        const b = t[y];
        if (D.fun(b)) {
            const _ = e._events[y];
            t[y] = ({
                finished: g,
                cancelled: R
            }) => {
                const x = _.get(b);
                x ? (g || (x.finished = !1), R && (x.cancelled = !0)) : _.set(b, {
                    value: null,
                    finished: g || !1,
                    cancelled: R || !1
                })
            }, c && (c[y] = t[y])
        }
    });
    const f = e._state;
    t.pause === !f.paused ? (f.paused = t.pause, Gn(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
    const d = (n || Object.keys(e.springs)).map(y => e.springs[y].start(t)),
        h = t.cancel === !0 || Jb(t, "cancel") === !0;
    (l || h && f.asyncId) && d.push(Zb(++e._lastAsyncId, {
        props: t,
        state: f,
        actions: {
            pause: ll,
            resume: ll,
            start(y, b) {
                h ? (_a(f, e._lastAsyncId), b(tn(e))) : (y.onRest = o, b(tw(l, y, f, e)))
            }
        }
    })), f.paused && await new Promise(y => {
        f.resumeQueue.add(y)
    });
    const p = fd(e, await Promise.all(d));
    if (s && p.finished && !(r && p.noop)) {
        const y = nw(t, s, a);
        if (y) return uw(e, [y]), aw(e, y, !0)
    }
    return u && J.batchedUpdates(() => u(p, e, e.item)), p
}

function Gg(e, t) {
    const r = {
        ...e.springs
    };
    return t && ie(Ye(t), n => {
        D.und(n.keys) && (n = Ra(n)), D.obj(n.to) || (n = {
            ...n,
            to: void 0
        }), ow(r, n, a => sw(a))
    }), iw(e, r), r
}

function iw(e, t) {
    Tt(t, (r, n) => {
        e.springs[n] || (e.springs[n] = r, Ga(r, e))
    })
}

function sw(e, t) {
    const r = new CM;
    return r.key = e, t && Ga(r, t), r
}

function ow(e, t, r) {
    t.keys && ie(t.keys, n => {
        (e[n] || (e[n] = r(n)))._prepareNode(t)
    })
}

function uw(e, t) {
    ie(t, r => {
        ow(e.springs, r, n => sw(n, e))
    })
}
var Po = ({
        children: e,
        ...t
    }) => {
        const r = L.useContext(Ms),
            n = t.pause || !!r.pause,
            a = t.immediate || !!r.immediate;
        t = uM(() => ({
            pause: n,
            immediate: a
        }), [n, a]);
        const {
            Provider: i
        } = Ms;
        return L.createElement(i, {
            value: t
        }, e)
    },
    Ms = PM(Po, {});
Po.Provider = Ms.Provider;
Po.Consumer = Ms.Consumer;

function PM(e, t) {
    return Object.assign(e, L.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e
}
var LM = () => {
    const e = [],
        t = function (n) {
            sM();
            const a = [];
            return ie(e, (i, s) => {
                if (D.und(n)) a.push(i.start());
                else {
                    const o = r(n, i, s);
                    o && a.push(i.start(o))
                }
            }), a
        };
    t.current = e, t.add = function (n) {
        e.includes(n) || e.push(n)
    }, t.delete = function (n) {
        const a = e.indexOf(n);
        ~a && e.splice(a, 1)
    }, t.pause = function () {
        return ie(e, n => n.pause(...arguments)), this
    }, t.resume = function () {
        return ie(e, n => n.resume(...arguments)), this
    }, t.set = function (n) {
        ie(e, (a, i) => {
            const s = D.fun(n) ? n(i, a) : n;
            s && a.set(s)
        })
    }, t.start = function (n) {
        const a = [];
        return ie(e, (i, s) => {
            if (D.und(n)) a.push(i.start());
            else {
                const o = this._getProps(n, i, s);
                o && a.push(i.start(o))
            }
        }), a
    }, t.stop = function () {
        return ie(e, n => n.stop(...arguments)), this
    }, t.update = function (n) {
        return ie(e, (a, i) => a.update(this._getProps(n, a, i))), this
    };
    const r = function (n, a, i) {
        return D.fun(n) ? n(i, a) : n
    };
    return t._getProps = r, t
};

function DM(e, t, r) {
    const n = D.fun(t) && t;
    n && !r && (r = []);
    const a = L.useMemo(() => n || arguments.length == 3 ? LM() : void 0, []),
        i = L.useRef(0),
        s = Gb(),
        o = L.useMemo(() => ({
            ctrls: [],
            queue: [],
            flush(_, g) {
                const R = Gg(_, g);
                return i.current > 0 && !o.queue.length && !Object.keys(R).some(k => !_.springs[k]) ? yl(_, g) : new Promise(k => {
                    iw(_, R), o.queue.push(() => {
                        k(yl(_, g))
                    }), s()
                })
            }
        }), []),
        u = L.useRef([...o.ctrls]),
        c = [],
        l = Pg(e) || 0;
    L.useMemo(() => {
        ie(u.current.slice(e, l), _ => {
            EM(_, a), _.stop(!0)
        }), u.current.length = e, f(l, e)
    }, [e]), L.useMemo(() => {
        f(0, Math.min(l, e))
    }, r);

    function f(_, g) {
        for (let R = _; R < g; R++) {
            const x = u.current[R] || (u.current[R] = new kM(null, o.flush)),
                k = n ? n(R, x) : t[R];
            k && (c[R] = IM(k))
        }
    }
    const d = u.current.map((_, g) => Gg(_, c[g])),
        h = L.useContext(Po),
        p = Pg(h),
        y = h !== p && wM(h);
    od(() => {
        i.current++, o.ctrls = u.current;
        const {
            queue: _
        } = o;
        _.length && (o.queue = [], ie(_, g => g())), ie(u.current, (g, R) => {
            a == null || a.add(g), y && g.start({
                default: h
            });
            const x = c[R];
            x && (SM(g, x.ref), g.ref ? g.queue.push(x) : g.start(x))
        })
    }), Hb(() => () => {
        ie(o.ctrls, _ => _.stop(!0))
    });
    const b = d.map(_ => ({
        ..._
    }));
    return a ? [b, a] : b
}

function XB(e, t) {
    const r = D.fun(e),
        [
            [n], a
        ] = DM(1, r ? e : [e], r ? t || [] : t);
    return r || arguments.length == 2 ? [n, a] : n
}
var cw = class extends dd {
    constructor(e, t) {
        super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Ea(...t);
        const r = this._get(),
            n = dl(r);
        ud(this, n.create(r))
    }
    advance(e) {
        const t = this._get(),
            r = this.get();
        $t(t, r) || (ct(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Hg(this._active) && ic(this)
    }
    _get() {
        const e = D.arr(this.source) ? this.source.map(Ke) : Ye(Ke(this.source));
        return this.calc(...e)
    }
    _start() {
        this.idle && !Hg(this._active) && (this.idle = !1, ie(ko(this), e => {
            e.done = !1
        }), pt.skipAnimation ? (J.batchedUpdates(() => this.advance()), ic(this)) : Io.start(this))
    }
    _attach() {
        let e = 1;
        ie(Ye(this.source), t => {
            lt(t) && Ga(t, this), ml(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
        }), this.priority = e, this._start()
    }
    _detach() {
        ie(Ye(this.source), e => {
            lt(e) && js(e, this)
        }), this._active.clear(), ic(this)
    }
    eventObserved(e) {
        e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = Ye(this.source).reduce((t, r) => Math.max(t, (ml(r) ? r.priority : 0) + 1), 0))
    }
};

function FM(e) {
    return e.idle !== !1
}

function Hg(e) {
    return !e.size || Array.from(e).every(FM)
}

function ic(e) {
    e.idle || (e.idle = !0, ie(ko(e), t => {
        t.done = !0
    }), Fs(e, {
        type: "idle",
        parent: e
    }))
}
var YB = (e, ...t) => new cw(e, t);
pt.assign({
    createStringInterpolator: rM,
    to: (e, t) => new cw(e, t)
});
const lw = new Set,
    Fe = new WeakMap,
    fn = new WeakMap,
    $r = new WeakMap,
    bl = new WeakMap,
    jM = new WeakMap,
    dn = new WeakMap,
    Bs = new WeakMap,
    Hn = new WeakSet;
let Xt, hd = 0,
    pd = 0;
const Rt = "__aa_tgt",
    Ca = "__aa_del",
    zs = "__aa_new",
    UM = e => {
        const t = qM(e);
        t && t.forEach(r => WM(r))
    },
    MM = e => {
        e.forEach(t => {
            t.target === Xt && zM(), Fe.has(t.target) && Pr(t.target)
        })
    };

function BM(e) {
    const t = bl.get(e);
    t == null || t.disconnect();
    let r = Fe.get(e),
        n = 0;
    const a = 5;
    r || (r = hn(e), Fe.set(e, r));
    const {
        offsetWidth: i,
        offsetHeight: s
    } = Xt, u = [r.top - a, i - (r.left + a + r.width), s - (r.top + a + r.height), r.left - a].map(l => `${-1*Math.floor(l)}px`).join(" "), c = new IntersectionObserver(() => {
        ++n > 1 && Pr(e)
    }, {
        root: Xt,
        threshold: 1,
        rootMargin: u
    });
    c.observe(e), bl.set(e, c)
}

function Pr(e) {
    clearTimeout(Bs.get(e));
    const t = Lo(e),
        r = Ia(t) ? 500 : t.duration;
    Bs.set(e, setTimeout(async () => {
        const n = $r.get(e);
        try {
            await (n == null ? void 0 : n.finished), Fe.set(e, hn(e)), BM(e)
        } catch {}
    }, r))
}

function zM() {
    clearTimeout(Bs.get(Xt)), Bs.set(Xt, setTimeout(() => {
        lw.forEach(e => pw(e, t => fw(() => Pr(t))))
    }, 100))
}

function VM(e) {
    setTimeout(() => {
        jM.set(e, setInterval(() => fw(Pr.bind(null, e)), 2e3))
    }, Math.round(2e3 * Math.random()))
}

function fw(e) {
    typeof requestIdleCallback == "function" ? requestIdleCallback(() => e()) : requestAnimationFrame(() => e())
}
let wl, Gr;
typeof window < "u" && (Xt = document.documentElement, wl = new MutationObserver(UM), Gr = new ResizeObserver(MM), window.addEventListener("scroll", () => {
    pd = window.scrollY, hd = window.scrollX
}), Gr.observe(Xt));

function qM(e) {
    return e.reduce((n, a) => [...n, ...Array.from(a.addedNodes), ...Array.from(a.removedNodes)], []).every(n => n.nodeName === "#comment") ? !1 : e.reduce((n, a) => {
        if (n === !1) return !1;
        if (a.target instanceof Element) {
            if (sc(a.target), !n.has(a.target)) {
                n.add(a.target);
                for (let i = 0; i < a.target.children.length; i++) {
                    const s = a.target.children.item(i);
                    if (s) {
                        if (Ca in s) return !1;
                        sc(a.target, s), n.add(s)
                    }
                }
            }
            if (a.removedNodes.length)
                for (let i = 0; i < a.removedNodes.length; i++) {
                    const s = a.removedNodes[i];
                    if (Ca in s) return !1;
                    s instanceof Element && (n.add(s), sc(a.target, s), fn.set(s, [a.previousSibling, a.nextSibling]))
                }
        }
        return n
    }, new Set)
}

function sc(e, t) {
    !t && !(Rt in e) ? Object.defineProperty(e, Rt, {
        value: e
    }) : t && !(Rt in t) && Object.defineProperty(t, Rt, {
        value: e
    })
}

function WM(e) {
    var t;
    const r = e.isConnected,
        n = Fe.has(e);
    r && fn.has(e) && fn.delete(e), $r.has(e) && ((t = $r.get(e)) === null || t === void 0 || t.cancel()), zs in e ? Kg(e) : n && r ? HM(e) : n && !r ? KM(e) : Kg(e)
}

function ut(e) {
    return Number(e.replace(/[^0-9.\-]/g, ""))
}

function GM(e) {
    let t = e.parentElement;
    for (; t;) {
        if (t.scrollLeft || t.scrollTop) return {
            x: t.scrollLeft,
            y: t.scrollTop
        };
        t = t.parentElement
    }
    return {
        x: 0,
        y: 0
    }
}

function hn(e) {
    const t = e.getBoundingClientRect(),
        {
            x: r,
            y: n
        } = GM(e);
    return {
        top: t.top + n,
        left: t.left + r,
        width: t.width,
        height: t.height
    }
}

function dw(e, t, r) {
    let n = t.width,
        a = t.height,
        i = r.width,
        s = r.height;
    const o = getComputedStyle(e);
    if (o.getPropertyValue("box-sizing") === "content-box") {
        const c = ut(o.paddingTop) + ut(o.paddingBottom) + ut(o.borderTopWidth) + ut(o.borderBottomWidth),
            l = ut(o.paddingLeft) + ut(o.paddingRight) + ut(o.borderRightWidth) + ut(o.borderLeftWidth);
        n -= l, i -= l, a -= c, s -= c
    }
    return [n, i, a, s].map(Math.round)
}

function Lo(e) {
    return Rt in e && dn.has(e[Rt]) ? dn.get(e[Rt]) : {
        duration: 250,
        easing: "ease-in-out"
    }
}

function hw(e) {
    if (Rt in e) return e[Rt]
}

function md(e) {
    const t = hw(e);
    return t ? Hn.has(t) : !1
}

function pw(e, ...t) {
    t.forEach(r => r(e, dn.has(e)));
    for (let r = 0; r < e.children.length; r++) {
        const n = e.children.item(r);
        n && t.forEach(a => a(n, dn.has(n)))
    }
}

function gd(e) {
    return Array.isArray(e) ? e : [e]
}

function Ia(e) {
    return typeof e == "function"
}

function HM(e) {
    const t = Fe.get(e),
        r = hn(e);
    if (!md(e)) return Fe.set(e, r);
    let n;
    if (!t) return;
    const a = Lo(e);
    if (typeof a != "function") {
        const i = t.left - r.left,
            s = t.top - r.top,
            [o, u, c, l] = dw(e, t, r),
            f = {
                transform: `translate(${i}px, ${s}px)`
            },
            d = {
                transform: "translate(0, 0)"
            };
        o !== u && (f.width = `${o}px`, d.width = `${u}px`), c !== l && (f.height = `${c}px`, d.height = `${l}px`), n = e.animate([f, d], {
            duration: a.duration,
            easing: a.easing
        })
    } else {
        const [i] = gd(a(e, "remain", t, r));
        n = new Animation(i), n.play()
    }
    $r.set(e, n), Fe.set(e, r), n.addEventListener("finish", Pr.bind(null, e))
}

function Kg(e) {
    zs in e && delete e[zs];
    const t = hn(e);
    Fe.set(e, t);
    const r = Lo(e);
    if (!md(e)) return;
    let n;
    if (typeof r != "function") n = e.animate([{
        transform: "scale(.98)",
        opacity: 0
    }, {
        transform: "scale(0.98)",
        opacity: 0,
        offset: .5
    }, {
        transform: "scale(1)",
        opacity: 1
    }], {
        duration: r.duration * 1.5,
        easing: "ease-in"
    });
    else {
        const [a] = gd(r(e, "add", t));
        n = new Animation(a), n.play()
    }
    $r.set(e, n), n.addEventListener("finish", Pr.bind(null, e))
}

function Xg(e, t) {
    var r;
    e.remove(), Fe.delete(e), fn.delete(e), $r.delete(e), (r = bl.get(e)) === null || r === void 0 || r.disconnect(), setTimeout(() => {
        if (Ca in e && delete e[Ca], Object.defineProperty(e, zs, {
                value: !0,
                configurable: !0
            }), t && e instanceof HTMLElement)
            for (const n in t) e.style[n] = ""
    }, 0)
}

function KM(e) {
    var t;
    if (!fn.has(e) || !Fe.has(e)) return;
    const [r, n] = fn.get(e);
    Object.defineProperty(e, Ca, {
        value: !0,
        configurable: !0
    });
    const a = window.scrollX,
        i = window.scrollY;
    if (n && n.parentNode && n.parentNode instanceof Element ? n.parentNode.insertBefore(e, n) : r && r.parentNode ? r.parentNode.appendChild(e) : (t = hw(e)) === null || t === void 0 || t.appendChild(e), !md(e)) return Xg(e);
    const [s, o, u, c] = YM(e), l = Lo(e), f = Fe.get(e);
    (a !== hd || i !== pd) && XM(e, a, i, l);
    let d, h = {
        position: "absolute",
        top: `${s}px`,
        left: `${o}px`,
        width: `${u}px`,
        height: `${c}px`,
        margin: "0",
        pointerEvents: "none",
        transformOrigin: "center",
        zIndex: "100"
    };
    if (!Ia(l)) Object.assign(e.style, h), d = e.animate([{
        transform: "scale(1)",
        opacity: 1
    }, {
        transform: "scale(.98)",
        opacity: 0
    }], {
        duration: l.duration,
        easing: "ease-out"
    });
    else {
        const [p, y] = gd(l(e, "remove", f));
        (y == null ? void 0 : y.styleReset) !== !1 && (h = (y == null ? void 0 : y.styleReset) || h, Object.assign(e.style, h)), d = new Animation(p), d.play()
    }
    $r.set(e, d), d.addEventListener("finish", Xg.bind(null, e, h))
}

function XM(e, t, r, n) {
    const a = hd - t,
        i = pd - r,
        s = document.documentElement.style.scrollBehavior;
    if (getComputedStyle(Xt).scrollBehavior === "smooth" && (document.documentElement.style.scrollBehavior = "auto"), window.scrollTo(window.scrollX + a, window.scrollY + i), !e.parentElement) return;
    const u = e.parentElement;
    let c = u.clientHeight,
        l = u.clientWidth;
    const f = performance.now();

    function d() {
        requestAnimationFrame(() => {
            if (!Ia(n)) {
                const h = c - u.clientHeight,
                    p = l - u.clientWidth;
                f + n.duration > performance.now() ? (window.scrollTo({
                    left: window.scrollX - p,
                    top: window.scrollY - h
                }), c = u.clientHeight, l = u.clientWidth, d()) : document.documentElement.style.scrollBehavior = s
            }
        })
    }
    d()
}

function YM(e) {
    const t = Fe.get(e),
        [r, , n] = dw(e, t, hn(e));
    let a = e.parentElement;
    for (; a && (getComputedStyle(a).position === "static" || a instanceof HTMLBodyElement);) a = a.parentElement;
    a || (a = document.body);
    const i = getComputedStyle(a),
        s = Fe.get(a) || hn(a),
        o = Math.round(t.top - s.top) - ut(i.borderTopWidth),
        u = Math.round(t.left - s.left) - ut(i.borderLeftWidth);
    return [o, u, r, n]
}

function JM(e, t = {}) {
    return wl && Gr && (window.matchMedia("(prefers-reduced-motion: reduce)").matches && !Ia(t) && !t.disrespectUserMotionPreference || (Hn.add(e), getComputedStyle(e).position === "static" && Object.assign(e.style, {
        position: "relative"
    }), pw(e, Pr, VM, a => Gr == null ? void 0 : Gr.observe(a)), Ia(t) ? dn.set(e, t) : dn.set(e, {
        duration: 250,
        easing: "ease-in-out",
        ...t
    }), wl.observe(e, {
        childList: !0
    }), lw.add(e))), Object.freeze({
        parent: e,
        enable: () => {
            Hn.add(e)
        },
        disable: () => {
            Hn.delete(e)
        },
        isEnabled: () => Hn.has(e)
    })
}

function JB(e) {
    const [t, r] = L.useState(), n = L.useMemo(() => e, []), a = L.useCallback(s => {
        s instanceof HTMLElement ? r(JM(s, n)) : r(void 0)
    }, [n]), i = L.useCallback(s => {
        t && (s ? t.enable() : t.disable())
    }, [t]);
    return [a, i]
}
export {
    rB as $, DB as A, BB as B, I0 as C, da as D, x0 as E, zB as F, VB as G, pt as H, rM as I, GB as J, HB as K, cd as L, Tt as M, kr as N, D as O, N0 as P, YU as Q, PB as R, ie as S, ns as T, Ke as U, lt as V, Ga as W, js as X, Fs as Y, Ye as Z, ng as _, X as a, nB as a0, aB as a1, yB as a2, vB as a3, iB as a4, gB as a5, U as a6, pB as a7, hB as a8, sB as a9, Y8 as aa, xe as ab, OB as ac, _B as ad, FB as ae, Oj as af, UB as ag, jB as ah, MB as ai, WB as aj, qB as ak, XB as al, KU as am, dB as an, fB as ao, Ak as ap, SB as aq, xB as ar, NB as as, JB as at, mU as au, LB as av, ZF as aw, kB as ax, YB as ay, vr as b, mB as c, C9 as d, wn as e, lB as f, fv as g, bB as h, vf as i, tB as j, wB as k, AB as l, $B as m, RB as n, cb as o, FF as p, _o as q, L as r, EB as s, UF as t, TB as u, Hf as v, CB as w, IB as x, eB as y, lg as z
};
//# sourceMappingURL=vendor-Dkz3gcSC.js.map