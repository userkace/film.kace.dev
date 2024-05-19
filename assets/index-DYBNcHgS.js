import {
  $ as z,
  a0 as xe,
  a1 as q,
  a2 as Pa,
  a3 as Ra,
  r as m,
  a4 as V,
  a5 as Aa,
  j as n,
  c as C,
  a6 as _e,
  a7 as _a,
  a8 as Oa,
  a9 as Ma,
  aa as Da,
  ab as Js,
  ac as Zs,
  ad as Ba,
  p as se,
  ae as Ua,
  af as Fa,
  ag as Va,
  ah as $a,
  ai as er,
  q as Ue,
  aj as ie,
  ak as Ha,
  al as Wa,
  am as Ga,
  an as ss,
  ao as rs,
  ap as Ka,
  aq as as,
  ar as kn,
  as as za,
  at as Nn,
  au as tr,
  av as qa,
  aw as G,
  ax as Qa
} from "./vendor-Dkz3gcSC.js";
import {
  _ as Ya,
  i as Xa,
  H as we,
  u as Sn,
  a as Fe,
  t as tn,
  r as Ja,
  F as Za,
  b as I,
  c as ei,
  L as at,
  d as fe,
  N as ft,
  e as ti,
  f as nr,
  T as ye,
  g as ni,
  h as sr,
  j as si,
  k as ri,
  l as ai,
  m as ii,
  n as oi,
  o as li,
  p as ci,
  B as ui,
  q as di
} from "./react-dom-DpNJ2UNC.js";
import {
  c as mi,
  a as hi,
  b as fi,
  d as gi,
  f as xi,
  i as pi,
  n as bi,
  p as yi,
  t as vi,
  v as ji,
  z as wi,
  h as ki,
  s as Ni,
  e as Si,
  m as Ei,
  l as Ci,
  g as Ii,
  j as Li,
  k as Ti,
  o as Pi,
  q as Ri,
  r as Ai,
  u as _i,
  w as Oi,
  x as Mi,
  y as Di,
  A as Bi,
  B as Ui,
  C as Fi,
  D as Vi,
  E as $i,
  F as Hi,
  G as Wi,
  H as Gi,
  I as Ki,
  J as zi,
  K as qi,
  L as Qi,
  M as Yi,
  N as Xi,
  O as Ji,
  P as Zi,
  Q as eo,
  R as to
} from "./locales-BXkJCeK5.js";
import {
  g as En,
  I as P,
  a as w,
  U as rr,
  b as Nt,
  F as ar,
  s as no,
  c as qe
} from "./Icons-Ct84pi7p.js";
import {
  f as oe
} from "./auth-72H9TcpW.js";
import {
  d as so,
  f as _t,
  g as ir,
  h as ro,
  l as ao,
  s as io,
  F as oo
} from "./caption-parsing-BABN6jyO.js";
import {
  H as me
} from "./hls-2_Gpnevg.js";
import "./language-db-DxKZVAm4.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a);
  new MutationObserver(a => {
    for (const i of a)
      if (i.type === "childList")
        for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function s(a) {
    const i = {};
    return a.integrity && (i.integrity = a.integrity), a.referrerPolicy && (i.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? i.credentials = "include" : a.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
  }

  function r(a) {
    if (a.ep) return;
    a.ep = !0;
    const i = s(a);
    fetch(a.href, i)
  }
})();
const lo = "modulepreload",
  co = function (e) {
    return "/" + e
  },
  is = {},
  it = function (t, s, r) {
    let a = Promise.resolve();
    if (s && s.length > 0) {
      const i = document.getElementsByTagName("link");
      a = Promise.all(s.map(o => {
        if (o = co(o), o in is) return;
        is[o] = !0;
        const l = o.endsWith(".css"),
          c = l ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let b = i.length - 1; b >= 0; b--) {
            const g = i[b];
            if (g.href === o && (!l || g.rel === "stylesheet")) return
          } else if (document.querySelector(`link[href="${o}"]${c}`)) return;
        const d = document.createElement("link");
        if (d.rel = l ? "stylesheet" : lo, l || (d.as = "script", d.crossOrigin = ""), d.href = o, document.head.appendChild(d), l) return new Promise((b, g) => {
          d.addEventListener("load", b), d.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${o}`)))
        })
      }))
    }
    return a.then(() => t()).catch(i => {
      const o = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (o.payload = i, window.dispatchEvent(o), !o.defaultPrevented) throw i
    })
  };

function uo(e = {}) {
  const {
    immediate: t = !1,
    onNeedRefresh: s,
    onOfflineReady: r,
    onRegistered: a,
    onRegisteredSW: i,
    onRegisterError: o
  } = e;
  let l, c;
  const u = async (b = !0) => {
    await c
  };
  async function d() {
    if ("serviceWorker" in navigator) {
      const {
        Workbox: b
      } = await it(() => import("./workbox-window.prod.es5-DFjpnwFp.js"), __vite__mapDeps([]));
      l = new b("/sw.js", {
        scope: "/",
        type: "classic"
      }), l.addEventListener("activated", g => {
        (g.isUpdate || g.isExternal) && window.location.reload()
      }), l.addEventListener("installed", g => {
        g.isUpdate || r == null || r()
      }), l.register({
        immediate: t
      }).then(g => {
        i ? i("/sw.js", g) : a == null || a(g)
      }).catch(g => {
        o == null || o(g)
      })
    }
  }
  return c = d(), u
}
const mo = 60 * 60 * 1e3;
uo({
  immediate: !0,
  onRegisteredSW(e, t) {
    t && setInterval(async () => {
      if (!(!t.installing && navigator) || "connection" in navigator && !navigator.onLine) return;
      const s = await fetch(e, {
        cache: "no-store",
        headers: {
          cache: "no-store",
          "cache-control": "no-cache"
        }
      });
      (s == null ? void 0 : s.status) === 200 && await t.update()
    }, mo)
  }
});
let B = function (e) {
    return e.MOVIE = "movie", e.SERIES = "series", e.ANIME = "anime", e
  }({}),
  gt = 0;
const Z = z(xe(q(e => ({
    bookmarks: {},
    updateQueue: [],
    removeBookmark(t) {
      e(s => {
        gt += 1, s.updateQueue.push({
          id: gt.toString(),
          action: "delete",
          tmdbId: t
        }), delete s.bookmarks[t]
      })
    },
    addBookmark(t) {
      e(s => {
        gt += 1, s.updateQueue.push({
          id: gt.toString(),
          action: "add",
          tmdbId: t.tmdbId,
          type: t.type,
          title: t.title,
          year: t.releaseYear,
          poster: t.poster
        }), s.bookmarks[t.tmdbId] = {
          type: t.type,
          title: t.title,
          year: t.releaseYear,
          poster: t.poster,
          updatedAt: Date.now()
        }
      })
    },
    replaceBookmarks(t) {
      e(s => {
        s.bookmarks = t
      })
    },
    clear() {
      e(t => {
        t.bookmarks = {}
      })
    },
    clearUpdateQueue() {
      e(t => {
        t.updateQueue = []
      })
    },
    removeUpdateItem(t) {
      e(s => {
        s.updateQueue = [...s.updateQueue.filter(r => r.id !== t)]
      })
    }
  })), {
    name: "__MW::bookmarks"
  })),
  je = {},
  or = {};
async function ho() {
  var e, t;
  for (const [s, r] of Object.values(or)) {
    const a = r.versions.sort((u, d) => u.version - d.version),
      i = s._raw(),
      o = i["--version"] && typeof i["--version"] == "number" ? i["--version"] : 0,
      l = a.filter(u => u.version >= o);
    let c = i;
    try {
      for (const u of l) u.migrate && (localStorage.setItem(`BACKUP-v${u.version}-${r.key}`, JSON.stringify(c)), c = await u.migrate(c))
    } catch (u) {
      console.error(`FAILED TO MIGRATE STORE ${r.key}`, u), c = ((t = (e = l[l.length - 1]).create) == null ? void 0 : t.call(e)) ?? {}
    }
    s.save(c)
  }
}

function fo(e) {
  const t = e.key ?? "",
    s = e.versions.sort((l, c) => c.version - l.version)[0];

  function r(l) {
    return je[t] || (je[t] = []), je[t].push(l), {
      destroy() {
        je[t] = je[t].filter(c => c === l)
      }
    }
  }

  function a() {
    var c;
    const l = ((c = s.create) == null ? void 0 : c.call(s)) ?? {};
    return l["--version"] = s.version, l
  }

  function i() {
    const l = localStorage.getItem(t);
    if (!l) return a();
    try {
      return JSON.parse(l)
    } catch (c) {
      return console.error(`FAILED TO PARSE LOCALSTORAGE FOR KEY ${t}`, c), a()
    }
  }

  function o(l) {
    const c = {
      ...l
    };
    c["--version"] = s.version, localStorage.setItem(t, JSON.stringify(c)), je[t] || (je[t] = []), je[t].forEach(u => u(window.structuredClone(l)))
  }
  return {
    get() {
      const l = i();
      return delete l["--version"], l
    },
    _raw() {
      return i()
    },
    onChange: r,
    save: o
  }
}

function go(e) {
  var r;
  const t = e.versions.sort((a, i) => a.version - i.version);
  if (t.forEach((a, i, o) => {
      if (i !== 0 && a.version !== o[i - 1].version + 1) throw new Error("Version list of store is not incremental")
    }), t.forEach(a => {
      if (a.version < 0) throw new Error("Versions cannot be negative")
    }), ((r = t[0]) == null ? void 0 : r.version) !== 0) throw new Error("Version 0 doesn't exist in version list of store");
  if (!e.versions[e.versions.length - 1].create) throw new Error("Missing create function on latest version of store");
  if (!e.key) throw new Error("storage key not set in store");
  const s = [...t];
  s.pop(), s.forEach(a => {
    if (!a.migrate) throw new Error(`Migration missing on version ${a.version}`)
  })
}

function Ot() {
  const e = {
    versions: [],
    key: null
  };
  return {
    setKey(t) {
      return e.key = t, this
    },
    addVersion(t) {
      return e.versions.push(t), this
    },
    build() {
      go(e);
      const t = fo(e);
      return or[e.key ?? ""] = [t, e], t
    }
  }
}
const os = "https://apis.justwatch.com",
  xo = "https://images.justwatch.com";

function po(e) {
  if (e === B.MOVIE) return "movie";
  if (e === B.SERIES) return "show";
  throw new Error("unsupported type")
}

function bo(e) {
  if (e === "movie") return B.MOVIE;
  if (e === "show") return B.SERIES;
  throw new Error("unsupported type")
}

function yo(e, t) {
  var a, i;
  const s = bo(e.object_type);
  let r;
  return s === B.SERIES && (r = (a = e.seasons) == null ? void 0 : a.sort((o, l) => o.season_number - l.season_number).map(o => ({
    id: o.id.toString(),
    number: o.season_number,
    title: o.title
  }))), {
    title: e.title,
    id: e.id.toString(),
    year: (i = e.original_release_year) == null ? void 0 : i.toString(),
    poster: e.poster ? `${xo}${e.poster.replace("{profile}","s166")}` : void 0,
    type: s,
    seasons: r,
    seasonData: t ? {
      id: t.id.toString(),
      number: t.season_number,
      title: t.title,
      episodes: t.episodes.sort((o, l) => o.episode_number - l.episode_number).map(o => ({
        id: o.id.toString(),
        number: o.episode_number,
        title: o.title
      }))
    } : void 0
  }
}
var lr = {
  VITE_PWA_ENABLED: "true",
  BASE_URL: "/",
  MODE: "production",
  DEV: !1,
  PROD: !0,
  SSR: !1,
  PACKAGE_VERSION: "4.7.0"
};
const vo = "4.7.0",
  jo = "https://discord.gg/mvDhUJGs5H",
  wo = "https://github.com/userkace/film.kace.dev",
  ko = "https://ko-fi.com/userkace",
  ls = lr.VITE_GA_ID,
  ot = lr.VITE_BACKEND_URL;
var re = {
  VITE_PWA_ENABLED: "true",
  BASE_URL: "/",
  MODE: "production",
  DEV: !1,
  PROD: !0,
  SSR: !1,
  PACKAGE_VERSION: "4.7.0"
};
const No = {
  TMDB_READ_API_KEY: re.VITE_TMDB_READ_API_KEY,
  APP_VERSION: void 0,
  GITHUB_LINK: void 0,
  DONATION_LINK: void 0,
  DISCORD_LINK: void 0,
  ONBOARDING_CHROME_EXTENSION_INSTALL_LINK: re.VITE_ONBOARDING_CHROME_EXTENSION_INSTALL_LINK,
  ONBOARDING_FIREFOX_EXTENSION_INSTALL_LINK: re.VITE_ONBOARDING_FIREFOX_EXTENSION_INSTALL_LINK,
  ONBOARDING_PROXY_INSTALL_LINK: re.VITE_ONBOARDING_PROXY_INSTALL_LINK,
  DMCA_EMAIL: re.VITE_DMCA_EMAIL,
  CORS_PROXY_URL: re.VITE_CORS_PROXY_URL,
  NORMAL_ROUTER: re.VITE_NORMAL_ROUTER,
  BACKEND_URL: re.VITE_BACKEND_URL,
  DISALLOWED_IDS: re.VITE_DISALLOWED_IDS,
  TURNSTILE_KEY: re.VITE_TURNSTILE_KEY,
  CDN_REPLACEMENTS: re.VITE_CDN_REPLACEMENTS,
  HAS_ONBOARDING: re.VITE_HAS_ONBOARDING,
  ALLOW_AUTOPLAY: re.VITE_ALLOW_AUTOPLAY
};

function cs(e) {
  if (e != null && e.length !== 0) return e
}

function So(e) {
  var s;
  const t = (s = window == null ? void 0 : window.__CONFIG__) == null ? void 0 : s[`VITE_${e}`];
  return cs(No[e]) ?? cs(t) ?? void 0
}

function ae(e, t) {
  var s;
  return ((s = So(e)) == null ? void 0 : s.toString()) ?? t ?? null
}

function F() {
  return {
    APP_VERSION: vo,
    GITHUB_LINK: wo,
    DONATION_LINK: ko,
    DISCORD_LINK: jo,
    DMCA_EMAIL: ae("DMCA_EMAIL"),
    ONBOARDING_CHROME_EXTENSION_INSTALL_LINK: ae("ONBOARDING_CHROME_EXTENSION_INSTALL_LINK", "https://github.com/userkace/film-ext"),
    // https://chromewebstore.google.com/detail/movie-web-extension/hoffoikpiofojilgpofjhnkkamfnnhmm
    ONBOARDING_FIREFOX_EXTENSION_INSTALL_LINK: ae("ONBOARDING_FIREFOX_EXTENSION_INSTALL_LINK", "https://github.com/userkace/film-ext"),
    // https://addons.mozilla.org/en-GB/firefox/addon/movie-web-extension
    ONBOARDING_PROXY_INSTALL_LINK: ae("ONBOARDING_PROXY_INSTALL_LINK"),
    BACKEND_URL: ae("BACKEND_URL", ot),
    TMDB_READ_API_KEY: ae("TMDB_READ_API_KEY"),
    PROXY_URLS: ae("CORS_PROXY_URL", "").split(",").map(e => e.trim()).filter(e => e.length > 0),
    NORMAL_ROUTER: ae("NORMAL_ROUTER", "false") === "true",
    HAS_ONBOARDING: ae("HAS_ONBOARDING", "true") === "true",
    ALLOW_AUTOPLAY: ae("ALLOW_AUTOPLAY", "false") === "true",
    TURNSTILE_KEY: ae("TURNSTILE_KEY"),
    DISALLOWED_IDS: ae("DISALLOWED_IDS", "").split(",").map(e => e.trim()).filter(e => e.length > 0),
    CDN_REPLACEMENTS: ae("CDN_REPLACEMENTS", "").split(",").map(e => e.split(":").map(t => t.trim()).filter(t => t.length > 0)).filter(e => e.length === 2)
  }
}
let te = function (e) {
  return e.MOVIE = "movie", e.TV = "tv", e
}({});
const Eo = "^1.0.2";

function cr(e) {
  return Pa.satisfies(e, Eo)
}
const nn = {
    PREPARE_STREAM: 1,
    SET_DOMAINS_HLS: 2,
    SET_DOMAINS_HLS_AUDIO: 3
  },
  Co = new Promise(e => {
    setTimeout(() => {
      e()
    }, 500)
  });
let sn = !1;
async function Mt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0,
    s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
  return await Co, new Promise(r => {
    s >= 0 && setTimeout(() => r(null), s), Ra({
      name: e,
      body: t
    }).then(a => {
      sn = !0, r(a)
    }).catch(() => {
      sn = !1, r(null)
    })
  })
}
async function ur(e) {
  return Mt("makeRequest", e)
}
async function rn(e) {
  return Mt("prepareStream", e)
}
async function Io(e) {
  return Mt("openPage", e)
}
async function dr() {
  return await Mt("hello", void 0, 500)
}

function he() {
  return sn
}
async function yf() {
  const e = await dr();
  return !(e != null && e.success) || !cr(e.version) ? !1 : e.allowed && e.hasPermission
}
const $ = z(xe(q(e => ({
    account: null,
    backendUrl: null,
    proxySet: null,
    setAccount(t) {
      e(s => {
        s.account = t
      })
    },
    removeAccount() {
      e(t => {
        t.account = null
      })
    },
    setBackendUrl(t) {
      e(s => {
        s.backendUrl = t
      })
    },
    setProxySet(t) {
      e(s => {
        s.proxySet = t
      })
    },
    setAccountProfile(t) {
      e(s => {
        s.account && (s.account.profile = t)
      })
    },
    updateAccount(t) {
      e(s => {
        s.account && (s.account = {
          ...s.account,
          ...t
        })
      })
    },
    updateDeviceName(t) {
      e(s => {
        s.account && (s.account.deviceName = t)
      })
    }
  })), {
    name: "__MW::auth"
  })),
  Lo = `${ot}/metrics/providers`,
  To = `${ot}/metrics/captcha`,
  Po = () => Aa(32);

function Ro() {
  return he() ? "extension" : $.getState().proxySet ? "custom-proxy" : "default"
}

function mr(e, t) {
  const s = e.toString(),
    r = (e.stack ?? "").split(`
`, t + 1);
  return r.pop(), `${s}

${r.join(`
`)}`
}
async function Ao(e) {
  if (ot) return V(Lo, {
    method: "POST",
    body: {
      items: e,
      tool: Ro(),
      batchId: Po()
    }
  })
}
const _o = {
  success: "success",
  notfound: "notfound",
  failure: "failed",
  pending: null,
  waiting: null
};

function Ae(e, t, s, r, a) {
  var c, u;
  const i = (c = e.episode) == null ? void 0 : c.tmdbId,
    o = (u = e.season) == null ? void 0 : u.tmdbId;
  let l;
  return a instanceof Error && (l = a), {
    status: r,
    providerId: t,
    title: e.title,
    tmdbId: e.tmdbId,
    type: e.type,
    embedId: s ?? void 0,
    episodeId: i,
    seasonId: o,
    errorMessage: l == null ? void 0 : l.message,
    fullError: l ? mr(l, 5) : void 0
  }
}

function us(e, t, s) {
  const r = _o[s.status];
  if (!r) return null;
  let a, i;
  e.type === "show" && (a = e.episode.tmdbId, i = e.season.tmdbId);
  let o;
  return s.error instanceof Error && (o = s.error), {
    status: r,
    providerId: t,
    title: e.title,
    tmdbId: e.tmdbId,
    type: e.type,
    embedId: s.embedId,
    episodeId: a,
    seasonId: i,
    errorMessage: s.reason ?? (o == null ? void 0 : o.message),
    fullError: o ? mr(o, 5) : void 0
  }
}

function vf(e, t, s) {
  const r = [];
  return t.forEach(a => {
    const i = s[a.id];
    a.children.forEach(l => {
      const c = s[l];
      if (!c.embedId) return;
      const u = us(e, i.id, c);
      u && r.push(u)
    });
    const o = us(e, i.id, i);
    o && r.push(o)
  }), r
}

function hr() {
  return {
    report: m.useCallback(t => {
      t.length !== 0 && Ao(t).catch(() => {})
    }, [])
  }
}

function ds(e) {
  ot && V(To, {
    method: "POST",
    body: {
      success: e
    }
  }).catch(() => {})
}
const St = z(q((e, t) => ({
  isInWidget: !1,
  turnstiles: [],
  cbs: [],
  processToken(s, r) {
    const a = t().cbs,
      i = t().turnstiles.find(o => o.id === r);
    (i == null ? void 0 : i.id) === r && (a.forEach(o => o(s)), e(o => {
      o.cbs = []
    }))
  },
  getToken() {
    return new Promise((s, r) => {
      e(a => {
        a.cbs = [...a.cbs, i => {
          i ? s(i) : r(new Error("Failed to get token"))
        }]
      })
    })
  },
  setTurnstile(s, r, a) {
    e(i => {
      i.turnstiles = i.turnstiles.filter(o => o.id !== s), r && i.turnstiles.push({
        controls: r,
        isInPopout: a,
        id: s
      })
    })
  }
})));

function fr() {
  const e = St.getState().turnstiles,
    t = e.find(s => s.isInPopout);
  return t || e[0]
}

function Oo() {
  return !!fr()
}
async function Mo() {
  const e = fr();
  try {
    window.turnstile.execute(document.querySelector(`#${e.id}`), {});
    const t = await St.getState().getToken();
    return ds(!0), t
  } catch (t) {
    throw ds(!1), t
  }
}

function gr(e) {
  const t = F().TURNSTILE_KEY,
    s = m.useRef(null),
    r = St(i => i.setTurnstile),
    a = St(i => i.processToken);
  return t ? n.jsx("div", {
    className: C({
      hidden: !e.isInPopout
    }),
    children: n.jsx(Ya, {
      sitekey: t,
      onLoad: (i, o) => {
        s.current = i, r(i, o, !!e.isInPopout)
      },
      onError: () => {
        const i = s.current;
        i && a(null, i)
      },
      onVerify: i => {
        var l;
        const o = s.current;
        o && (a(i, o), (l = e.onUpdateShow) == null || l.call(e, !1))
      },
      onBeforeInteractive: () => {
        var i;
        (i = e.onUpdateShow) == null || i.call(e, !0)
      },
      refreshExpired: "never",
      execution: "render"
    })
  }) : null
}
let Et = null,
  Qe = null;

function jf(e) {
  Et = e
}

function Dt() {
  return Et ?? []
}

function Cn(e) {
  Qe = e
}

function Do() {
  if (!Qe) return null;
  try {
    const e = _a(Qe);
    if (!e.exp) return `jwt|${Qe}`;
    if (Date.now() / 1e3 < e.exp) return `jwt|${Qe}`
  } catch {}
  return null
}
async function wf(e) {
  if (Et) return;
  Et = (await ln(`${e}/metadata`)).flat()
}

function ms(e) {
  let t = {};
  return e.type === "show" && (t = {
    episodeNumber: e.episode.number.toString(),
    episodeTmdbId: e.episode.tmdbId,
    seasonNumber: e.season.number.toString(),
    seasonTmdbId: e.season.tmdbId
  }), {
    type: e.type,
    releaseYear: e.releaseYear.toString(),
    imdbId: e.imdbId,
    tmdbId: e.tmdbId,
    title: e.title,
    ...t
  }
}

function xt(e, t) {
  Object.entries(t).forEach(s => {
    s[1] && e.searchParams.set(s[0], s[1])
  })
}

function an(e) {
  const t = s => new URL(`${e}${s}`);
  return {
    scrapeSource(s, r) {
      const a = t("/scrape/source");
      return xt(a, ms(r)), xt(a, {
        id: s
      }), a.toString()
    },
    scrapeAll(s) {
      const r = t("/scrape");
      return xt(r, ms(s)), r.toString()
    },
    scrapeEmbed(s, r) {
      const a = t("/scrape/embed");
      return xt(a, {
        id: s,
        url: r
      }), a.toString()
    }
  }
}
async function In() {
  let e = Do();
  return !e && Oo() && (e = `turnstile|${await Mo()}`), e
}

function hs(e) {
  return e.length === 0 ? {} : JSON.parse(e)
}
async function on(e, t) {
  const s = await In(),
    r = new URL(e);
  s && r.searchParams.set("token", s);
  const a = new EventSource(r.toString());
  let i, o;
  const l = new Promise((c, u) => {
    o = c, i = u
  });
  return t.forEach(c => {
    a.addEventListener(c, u => {
      a.close(), o(hs(u.data))
    })
  }), a.addEventListener("token", c => {
    Cn(hs(c.data))
  }), a.addEventListener("error", c => {
    if (a.close(), c.data) {
      const u = JSON.parse(c.data);
      let d = new Error("scrape error");
      u.name === _e.name && (d = new _e("Notfound from server")), Object.assign(d, u), i(d);
      return
    }
    console.error("Failed to connect to SSE", c), i(c)
  }), a.addEventListener("message", c => {
    if (!c) {
      a.close();
      return
    }
    setTimeout(() => {
      i(new Error("SSE closed improperly"))
    }, 1e3)
  }), {
    promise: () => l,
    on(c, u) {
      a.addEventListener(c, d => u(JSON.parse(d.data)))
    }
  }
}
const Bo = F().PROXY_URLS,
  Uo = ["proxy", "api"];

function fs(e) {
  try {
    return !!new URL(e)
  } catch {
    return !1
  }
}

function Fo(e) {
  return Uo.includes(e)
}

function Vo(e) {
  const t = e.split(";").map(s => s.split("=", 2).filter(r => r.length !== 0)).filter(s => s.length === 2);
  return Object.fromEntries(t)
}

function xr() {
  const e = $.getState().proxySet ?? Bo,
    t = [];
  return e.forEach(s => {
    if (!s.startsWith("|") && fs(s)) {
      t.push({
        url: s,
        type: "proxy"
      });
      return
    }
    const r = /^\|([^|]+)\|(.*)$/g.exec(s);
    if (!r || !r[2] || !fs(r[2])) return;
    const i = Vo(r[1]).type ?? "proxy";
    Fo(i) && t.push({
      url: r[2],
      type: i
    })
  }), t
}

function Ln() {
  return xr().filter(e => e.type === "proxy").map(e => e.url)
}

function $o() {
  return xr().filter(e => e.type === "api").map(e => e.url)
}

function Ho(e) {
  return typeof e == "string" ? "string" : e instanceof FormData ? "FormData" : e instanceof URLSearchParams ? "URLSearchParams" : "object"
}

function Wo(e) {
  return e instanceof FormData || e instanceof URLSearchParams ? [...e] : e
}

function pr(e) {
  let t = -1;
  return () => {
    const s = e();
    (t === -1 || t >= s.length) && (t = Math.floor(Math.random() * s.length));
    const r = s[t];
    return t = (t + 1) % s.length, r
  }
}
const br = pr(Ln),
  yr = pr($o);
async function Go(e, t) {
  const s = await In(),
    r = new Headers(t == null ? void 0 : t.headers);
  s && r.set("X-Token", s);
  const a = await fetch(e, t ? {
      ...t,
      headers: r
    } : void 0),
    i = a.headers.get("X-Token");
  return i && Cn(i), a
}

function Ko() {
  return async (t, s) => Oa(br(), Go)(t, s)
}

function zo(e, t) {
  const s = e.map(r => r.toLowerCase());
  return new Headers(Object.entries(t).filter(r => s.includes(r[0].toLowerCase())))
}

function qo() {
  return async (t, s) => {
    const r = await ur({
      url: t,
      ...s,
      body: Wo(s.body),
      bodyType: Ho(s.body)
    });
    if (!(r != null && r.success)) throw new Error(`extension error: ${r==null?void 0:r.error}`);
    const a = r.response;
    return {
      body: a.body,
      finalUrl: a.finalUrl,
      statusCode: a.statusCode,
      headers: zo(s.readHeaders, a.headers)
    }
  }
}
const vr = V.create({
  retry: 0
});

function gs(e, t) {
  let s = e;
  return Object.entries(t).forEach(r => {
    let [a, i] = r;
    s = s.replace(`{${a}}`, encodeURIComponent(i))
  }), s
}

function ln(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return vr(e, t)
}
async function Tn(e, t) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = (s == null ? void 0 : s.baseURL) ?? "";
  r.length > 0 && r.endsWith("/") && t.startsWith("/") ? r += t.slice(1) : r.length > 0 && !r.endsWith("/") && !t.startsWith("/") ? r += `/${t}` : r += t;
  const a = new URL(r);
  Object.entries((s == null ? void 0 : s.params) ?? {}).forEach(l => {
    let [c, u] = l;
    a.searchParams.set(c, u)
  }), Object.entries((s == null ? void 0 : s.query) ?? {}).forEach(l => {
    let [c, u] = l;
    a.searchParams.set(c, u)
  });
  let i = s.headers ?? {};
  const o = await In();
  return o && (i = {
    ...i,
    "X-Token": o
  }), vr(e, {
    ...s,
    baseURL: void 0,
    params: {
      destination: a.toString()
    },
    query: {},
    headers: i,
    onResponse(l) {
      var u;
      const c = l.response.headers.get("X-Token");
      c && Cn(c), (u = s.onResponse) == null || u.call(s, l)
    }
  })
}

function cn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Tn(br(), e, t)
}

function Ct(e) {
  if (e === B.MOVIE) return te.MOVIE;
  if (e === B.SERIES) return te.TV;
  throw new Error("unsupported type")
}

function It(e) {
  if (e === "movie") return B.MOVIE;
  if (e === "show") return B.SERIES;
  throw new Error("unsupported type")
}

function lt(e) {
  if (e === te.MOVIE) return B.MOVIE;
  if (e === te.TV) return B.SERIES;
  throw new Error("unsupported type")
}

function Qo(e) {
  if (e === te.MOVIE) return "movie";
  if (e === te.TV) return "show";
  throw new Error("unsupported type")
}

function Yo(e, t) {
  var a, i, o;
  const s = lt(e.object_type);
  let r;
  return s === B.SERIES && (r = (a = e.seasons) == null ? void 0 : a.sort((l, c) => l.season_number - c.season_number).map(l => ({
    title: l.title,
    id: l.id.toString(),
    number: l.season_number
  }))), {
    title: e.title,
    id: e.id.toString(),
    year: (o = (i = e.original_release_date) == null ? void 0 : i.getFullYear()) == null ? void 0 : o.toString(),
    poster: e.poster,
    type: s,
    seasons: r,
    seasonData: t ? {
      id: t.id.toString(),
      number: t.season_number,
      title: t.title,
      episodes: t.episodes.sort((l, c) => l.episode_number - c.episode_number).map(l => ({
        id: l.id.toString(),
        number: l.episode_number,
        title: l.title,
        air_date: l.air_date
      }))
    } : void 0
  }
}

function Xo(e) {
  var s;
  const t = Qo(e.object_type);
  return {
    title: e.title,
    id: e.id.toString(),
    year: ((s = e.original_release_date) == null ? void 0 : s.getFullYear()) ?? 0,
    release_date: e.original_release_date,
    poster: e.poster,
    type: t
  }
}

function Xe(e, t, s) {
  return ["tmdb", Ct(e), t, Ma(s, {
    lower: !0,
    strict: !0
  })].join("-")
}

function Jo(e) {
  return Xe(It(e.type), e.id, e.title)
}

function kf(e) {
  const [t, s, r] = e.split("-", 3);
  if (t !== "tmdb") return null;
  let a;
  try {
    a = lt(s)
  } catch {
    return null
  }
  return {
    type: a,
    id: r
  }
}
const Zo = "https://api.themoviedb.org/3",
  el = "https://api.tmdb.org/3",
  jr = F().TMDB_READ_API_KEY,
  xs = {
    accept: "application/json",
    Authorization: `Bearer ${jr}`
  };
async function et(e, t) {
  if (!jr) throw new Error("TMDB API key not set");
  try {
    return await ln(encodeURI(e), {
      headers: xs,
      baseURL: Zo,
      params: {
        ...t
      },
      signal: AbortSignal.timeout(5e3)
    })
  } catch {
    return ln(encodeURI(e), {
      headers: xs,
      baseURL: el,
      params: {
        ...t
      },
      signal: AbortSignal.timeout(3e4)
    })
  }
}
async function wr(e) {
  return (await et("search/multi", {
    query: e,
    include_adult: !1,
    language: "en-US",
    page: 1
  })).results.filter(r => r.media_type === te.MOVIE || r.media_type === te.TV)
}
async function tl(e) {
  const t = await wr(e);
  if (t.length === 0) return;
  const s = t[0],
    r = s.media_type === te.MOVIE ? s.title : s.name;
  return `/media/${Xe(lt(s.media_type),s.id.toString(),r)}`
}

function Bt(e, t) {
  if (t === te.MOVIE) return et(`/movie/${e}`, {
    append_to_response: "external_ids"
  });
  if (t === te.TV) return et(`/tv/${e}`, {
    append_to_response: "external_ids"
  });
  throw new Error("Invalid media type")
}

function Lt(e) {
  if (e) return `https://image.tmdb.org/t/p/w342/${e}`
}
async function kr(e, t) {
  return (await et(`/tv/${e}/season/${t}`)).episodes.map(r => ({
    id: r.id,
    episode_number: r.episode_number,
    title: r.name,
    air_date: r.air_date
  }))
}
async function Nr(e) {
  const s = (await et(`/find/${e}`, {
    external_source: "imdb_id"
  })).movie_results[0];
  if (s) return s.id.toString()
}

function nl(e, t) {
  if (lt(t) === B.SERIES) {
    const a = e;
    return {
      title: a.name,
      poster: Lt(a.poster_path),
      id: a.id,
      original_release_date: new Date(a.first_air_date),
      object_type: t
    }
  }
  const r = e;
  return {
    title: r.title,
    poster: Lt(r.poster_path),
    id: r.id,
    original_release_date: new Date(r.release_date),
    object_type: t
  }
}

function sl(e, t) {
  if (t === B.MOVIE) {
    const s = e;
    return {
      id: e.id,
      title: s.title,
      object_type: Ct(t),
      poster: Lt(s.poster_path) ?? void 0,
      original_release_date: new Date(s.release_date)
    }
  }
  if (t === B.SERIES) {
    const s = e;
    return {
      id: e.id,
      title: s.name,
      object_type: Ct(t),
      seasons: s.seasons.map(r => ({
        id: r.id,
        season_number: r.season_number,
        title: r.name
      })),
      poster: Lt(s.poster_path) ?? void 0,
      original_release_date: new Date(s.first_air_date)
    }
  }
  throw new Error("unsupported type")
}
async function tt(e, t, s) {
  const r = await Bt(t, Ct(e));
  if (!r) return null;
  const a = r.external_ids.imdb_id ?? void 0;
  let i;
  if (e === B.SERIES) {
    const c = r.seasons;
    let u = c.find(d => d.id.toString() === s);
    if (u || (u = c.find(d => d.season_number === 1)), u) {
      const d = await kr(r.id.toString(), u.season_number);
      i = {
        id: u.id.toString(),
        season_number: u.season_number,
        title: u.name,
        episodes: d
      }
    }
  }
  const o = sl(r, e);
  if (!o) return null;
  const l = Yo(o, i);
  return l ? {
    meta: l,
    imdbId: a,
    tmdbId: t
  } : null
}
async function Sr(e, t, s) {
  var c, u, d, b, g;
  const r = po(e);
  let a;
  try {
    const h = gs("/content/titles/{type}/{id}/locale/en_US", {
      type: r,
      id: t
    });
    a = await cn(h, {
      baseURL: os
    })
  } catch (h) {
    if (h instanceof Da && (h.statusCode === 400 || h.statusCode === 404)) return null;
    throw h
  }
  let i = (c = a.external_ids.find(h => h.provider === "imdb_latest")) == null ? void 0 : c.external_id;
  i || (i = (u = a.external_ids.find(h => h.provider === "imdb")) == null ? void 0 : u.external_id);
  let o = (d = a.external_ids.find(h => h.provider === "tmdb_latest")) == null ? void 0 : d.external_id;
  o || (o = (b = a.external_ids.find(h => h.provider === "tmdb")) == null ? void 0 : b.external_id);
  let l;
  if (a.object_type === "show") {
    const h = s ?? ((g = a.seasons) == null ? void 0 : g[0].id.toString()) ?? "",
      f = gs("/content/titles/show_season/{id}/locale/en_US", {
        id: h
      });
    l = await cn(f, {
      baseURL: os
    })
  }
  return {
    meta: yo(a, l),
    imdbId: i,
    tmdbId: o
  }
}

function un(e) {
  return !!(e.startsWith("/media/JW") || e.startsWith("/media/tmdb-show"))
}

function rl(e) {
  return !!e.startsWith("/media/tmdb-show")
}
async function al(e) {
  if (!un(e)) return;
  const t = e.split("/").slice(2),
    [, s, r] = t[0].split("-", 3),
    a = t.slice(1).map(u => `/${u}`).join("");
  if (rl(e)) {
    const u = await Bt(r, te.TV);
    return `/media/${Xe(B.SERIES,u.id.toString(),u.name)}${a}`
  }
  const i = lt(s),
    o = await Sr(i, r);
  if (!o) return;
  const {
    tmdbId: l,
    imdbId: c
  } = o;
  if (!(!l && !c) && c && i === B.MOVIE) {
    const u = await Nr(c);
    if (u) return `/media/${Xe(i,u,o.meta.title)}`;
    if (l) return `/media/${Xe(i,l,o.meta.title)}`
  }
}
class Er {
  constructor() {
    this.INTERVAL_MS = 2 * 60 * 1e3, this._interval = null, this._compare = null, this._storage = []
  }
  initialize() {
    if (this._interval) throw new Error("cache is already initialized");
    this._interval = setInterval(() => {
      const t = new Date;
      this._storage.filter(s => !(s.expiry < t))
    }, this.INTERVAL_MS)
  }
  destroy() {
    this._interval && clearInterval(this._interval), this.clear()
  }
  setCompare(t) {
    this._compare = t
  }
  has(t) {
    return !!this.get(t)
  }
  get(t) {
    if (!this._compare) throw new Error("Compare function not set");
    const s = this._storage.find(r => this._compare && this._compare(r.key, t));
    if (s) return s.value
  }
  set(t, s, r) {
    if (!this._compare) throw new Error("Compare function not set");
    const a = this._storage.find(o => this._compare && this._compare(o.key, t)),
      i = new Date(new Date().getTime() + r * 1e3);
    if (a) {
      a.key = t, a.value = s, a.expiry = i;
      return
    }
    this._storage.push({
      key: t,
      value: s,
      expiry: i
    })
  }
  remove(t) {
    if (!this._compare) throw new Error("Compare function not set");
    this._storage.filter(s => !(this._compare && this._compare(s.key, t)))
  }
  clear() {
    this._storage = []
  }
}
const Je = new Er;
Je.setCompare((e, t) => e.searchQuery.trim() === t.searchQuery.trim());
Je.initialize();
async function Cr(e) {
  if (Je.has(e)) return Je.get(e);
  const {
    searchQuery: t
  } = e, r = (await wr(t)).map(l => {
    const c = nl(l, l.media_type);
    return Xo(c)
  }), a = r.filter(l => l.poster), i = r.filter(l => !l.poster), o = a.concat(i);
  return Je.set(e, o, 3600), o
}

function ps(e) {
  return e.trim().toLowerCase().replace(/['":]/g, "").replace(/[^a-zA-Z0-9]+/g, "_")
}

function il(e, t) {
  return ps(e) === ps(t)
}
async function Ir(e, t) {
  const s = (i, o) => Math.abs(i - o) <= 1,
    r = {},
    a = await Promise.all(Object.values(e).map(async i => {
      const o = Number(i.year.toString().split("-")[0]),
        c = (await Cr({
          searchQuery: `${i.title} ${o}`
        })).find(u => s(Number(u.year), o) && il(u.title, i.title));
      if (!c) {
        console.error(`No item found for migration: ${i.title}`);
        return
      }
      return {
        id: i.mediaId,
        data: c
      }
    }));
  for (const i of a.filter(Boolean)) {
    if (!i) continue;
    let o = [
      ["0", "0"]
    ];
    if (i.data.type === "show") {
      const l = await tt(B.SERIES, i.data.id);
      if (!l || !(l != null && l.meta.seasons)) return;
      o = [...new Set(t != null && t.items ? t.items.filter(d => d.mediaId === i.id).map(d => d.seasonId) : ["0"])].map(d => {
        var b, g;
        return {
          num: d,
          season: (g = (b = l.meta) == null ? void 0 : b.seasons) == null ? void 0 : g[Math.max(0, d - 1)]
        }
      }).map(d => {
        var b;
        return d ? [d.num, (b = d == null ? void 0 : d.season) == null ? void 0 : b.id] : []
      }).filter(d => d.length > 0)
    }
    r[i.id] || (r[i.id] = {}), await Promise.all(o.map(async l => {
      let [c, u] = l;
      c && (r[i.id][c] = await tt(It(i.data.type), i.data.id, u === "0" || u === null ? void 0 : u))
    }))
  }
  return r
}
async function ol(e) {
  const t = e;
  if (!t) return;
  const s = {};
  t.bookmarks.forEach(i => {
    s[i.mediaId] || (s[i.mediaId] = i)
  });
  const r = await Ir(s);
  return r ? {
    bookmarks: Object.keys(r).map(i => r[i][0]).map(i => i == null ? void 0 : i.meta).filter(Boolean)
  } : void 0
}
async function ll(e) {
  var o, l, c, u;
  const t = e;
  if (!t) return;
  const s = {};
  t.items.forEach(d => {
    s[d.mediaId] || (s[d.mediaId] = d)
  });
  const r = await Ir(s, t);
  if (!r) return;
  const a = {
      ...t,
      items: []
    },
    i = Date.now();
  for (const d of t.items)
    if (d.mediaType === "movie") {
      if (!((o = r[d.mediaId][0]) != null && o.meta)) continue;
      const b = {
        item: {
          meta: (l = r[d.mediaId][0]) == null ? void 0 : l.meta
        },
        progress: d.progress,
        percentage: d.percentage,
        watchedAt: Date.now()
      };
      t.items = t.items.filter(g => JSON.stringify(g) !== JSON.stringify(d)), a.items.push(b)
    } else if (d.mediaType === "series") {
    if (!((c = r[d.mediaId][d.seasonId]) != null && c.meta)) continue;
    const b = (u = r[d.mediaId][d.seasonId]) == null ? void 0 : u.meta;
    if (b.type !== "series") return;
    const g = {
      item: {
        meta: b,
        series: {
          episode: Number(d.episodeId),
          season: Number(d.seasonId),
          seasonId: b.seasonData.id,
          episodeId: b.seasonData.episodes[Number(d.episodeId) - 1].id
        }
      },
      progress: d.progress,
      percentage: d.percentage,
      watchedAt: i + Number(d.seasonId) * 1e3 + Number(d.episodeId)
    };
    if (a.items.find(h => {
        var f, v;
        return h.item.meta.id === g.item.meta.id && ((f = h.item.series) == null ? void 0 : f.episodeId) === ((v = g.item.series) == null ? void 0 : v.episodeId)
      })) continue;
    t.items = t.items.filter(h => JSON.stringify(h) !== JSON.stringify(d)), a.items.push(g)
  }
  return a
}

function cl(e) {
  return e != null
}
async function Lr(e, t) {
  const s = await Sr(t, e);
  if (!s) return;
  const {
    tmdbId: r,
    imdbId: a
  } = s;
  if (!(!r && !a)) {
    if (a && t === B.MOVIE) {
      const i = await Nr(a);
      if (i) return i
    }
    if (r) return r
  }
}
async function ul(e) {
  const t = e.bookmarks.map(async s => ({
    ...s,
    id: await Lr(s.id, s.type).catch(() => {})
  }));
  return {
    bookmarks: (await Promise.all(t)).filter(s => s.id)
  }
}
async function dl(e) {
  return {
    items: (await Promise.all(e.items.map(async s => {
      try {
        const r = await Lr(s.item.meta.id, s.item.meta.type);
        if (!r) return null;
        const a = structuredClone(s);
        if (a.item.meta.id = r, a.item.series) {
          const i = a.item.series,
            l = (await Bt(r, te.TV)).seasons.find(d => d.season_number === i.season);
          if (!l) return null;
          const u = (await kr(r, l.season_number)).find(d => d.episode_number === i.episode);
          if (!u) return null;
          a.item.series.episodeId = u.id.toString(), a.item.series.seasonId = l.id.toString()
        }
        return a
      } catch {
        return null
      }
    }))).filter(cl)
  }
}
const ml = {
  [B.ANIME]: null,
  [B.MOVIE]: "movie",
  [B.SERIES]: "show"
};
Ot().setKey("mw-bookmarks").addVersion({
  version: 0,
  migrate(e) {
    return ol(e)
  }
}).addVersion({
  version: 1,
  migrate(e) {
    return ul(e)
  }
}).addVersion({
  version: 2,
  migrate(e) {
    const t = {};
    for (const s of e.bookmarks) {
      const r = ml[s.type];
      r && (t[s.id] = {
        title: s.title,
        year: s.year ? Number(s.year) : void 0,
        poster: s.poster,
        type: r,
        updatedAt: Date.now()
      })
    }
    return Z.getState().replaceBookmarks(t), {
      bookmarks: []
    }
  }
}).addVersion({
  version: 3,
  create() {
    return {
      bookmarks: []
    }
  }
}).build();
const hl = {
    description: "film.kace.dev is a web application that searches the internet for streams. The team aims for a mostly minimalistic approach to consuming content.",
    faqTitle: "Common questions",
    q1: {
      body: "film.kace.dev does not host any content. When you click on something to watch, the internet is searched for the selected media (On the loading screen and in the 'video sources' tab you can see which source you're using). Media never gets uploaded by film.kace.dev, everything is through this searching mechanism.",
      title: "Where does the content come from?"
    },
    q2: {
      body: "It's not possible to request a show or movie, film.kace.dev does not manage any content. All content is viewed through sources on the internet.",
      title: "Where can I request a show or movie?"
    },
    q3: {
      body: "Our search results are powered by The Movie Database (TMDB) and display regardless of whether our sources actually have the content.",
      title: "The search results display the show or movie, why can't I play it?"
    },
    title: "About film.kace.dev"
  },
  fl = {
    copied: "Copied",
    copy: "Copy"
  },
  gl = {
    createAccount: "Don't have an account yet? <0>Create an account.</0>",
    deviceNameLabel: "Device name",
    deviceNamePlaceholder: "Personal phone",
    generate: {
      description: "Your passphrase acts as your username and password. Make sure to keep it safe as you will need to enter it to login to your account",
      next: "I have saved my passphrase",
      passphraseFrameLabel: "Passphrase",
      title: "Your passphrase"
    },
    hasAccount: "Already have an account? <0>Login here.</0>",
    login: {
      description: "Please enter your passphrase to login to your account",
      deviceLengthError: "Please enter a device name",
      passphraseLabel: "12-Word passphrase",
      passphrasePlaceholder: "Passphrase",
      submit: "Login",
      title: "Login to your account",
      validationError: "Incorrect or incomplete passphrase"
    },
    register: {
      information: {
        color1: "Profile color one",
        color2: "Profile color two",
        header: "Enter a name for your device and pick colours and a user icon of your choosing",
        icon: "User icon",
        next: "Next",
        title: "Account information"
      }
    },
    trust: {
      failed: {
        text: "Did you configure it correctly?",
        title: "Failed to reach server"
      },
      noHostTitle: "Server not configured!",
      noHost: "The server has not been configured, therefore you cannot create an account",
      host: "You are connecting to <0>{{hostname}}</0> - please confirm you trust it before making an account",
      no: "Go back",
      title: "Do you trust this server?",
      yes: "I trust this server"
    },
    verify: {
      description: "Please enter your passphrase from earlier to confirm you have saved it and to create your account",
      invalidData: "Data is not valid",
      noMatch: "Passphrase doesn't match",
      passphraseLabel: "Your 12-word passphrase",
      recaptchaFailed: "ReCaptcha validation failed",
      register: "Create account",
      title: "Confirm your passphrase"
    }
  },
  xl = {
    badge: "It broke",
    details: "Error details",
    reloadPage: "Reload the page",
    showError: "Show error details",
    title: "We encountered an error!"
  },
  pl = {
    legal: {
      disclaimer: "Disclaimer",
      disclaimerText: "film.kace.dev does not host any files, it merely links to 3rd party services. Legal issues should be taken up with the file hosts and providers. film.kace.dev is not responsible for any media files shown by the video providers."
    },
    links: {
      discord: "Discord",
      dmca: "DMCA",
      github: "GitHub"
    },
    tagline: "Watch your favourite shows and movies with this open source streaming app."
  },
  bl = {
    name: "film.kace.dev",
    pages: {
      about: "About",
      dmca: "DMCA",
      login: "Login",
      onboarding: "Setup",
      pagetitle: "{{title}} - film.kace.dev",
      register: "Register",
      settings: "Settings"
    }
  },
  yl = {
    bookmarks: {
      sectionTitle: "Bookmarks"
    },
    continueWatching: {
      sectionTitle: "Continue Watching"
    },
    mediaList: {
      stopEditing: "Stop editing"
    },
    search: {
      allResults: "That's all we have!",
      failed: "Failed to find media, try again!",
      loading: "Loading...",
      noResults: "We couldn't find anything!",
      placeholder: {
        default: "What do you want to watch?",
        extra: ["What do you want to explore?", "What's on your watchlist?", "What's your favorite movie?", "What's your favorite series?", "What are you in the mood for today?", "Cult classics anyone?"]
      },
      sectionTitle: "Search results"
    },
    titles: {
      day: {
        default: "What would you like to watch this afternoon?",
        extra: ["Feeling adventurous? Jurassic Park might be the perfect choice.", "Take a trip down memory lane with a classic like Back to the Future."]
      },
      morning: {
        default: "What would you like to watch this morning?",
        extra: ["I hear Before Sunrise is good.", "A cup of coffee and Singin' in the Rain might be just the pick-me-up you need."]
      },
      night: {
        default: "What would you like to watch tonight?",
        extra: ["Tired? I hear The Exorcist is good.", "Feeling brave? Test your nerves with The Shining."]
      }
    }
  },
  vl = {
    episodeDisplay: "S{{season}} E{{episode}}",
    unreleased: "Unreleased",
    types: {
      movie: "Movie",
      show: "Show"
    }
  },
  jl = {
    banner: {
      offline: "Check your internet connection"
    },
    menu: {
      about: "About us",
      donation: "Donate",
      logout: "Log out",
      register: "Sync to cloud",
      settings: "Settings",
      support: "Support"
    }
  },
  wl = {
    badge: "Not found",
    goHome: "Back to home",
    message: "We looked everywhere: under the bins, in the closet, behind the proxy but ultimately couldn't find the page you are looking for.",
    title: "Couldn't find that page"
  },
  kl = {
    defaultConfirm: {
      cancel: "Cancel",
      confirm: "Use default setup",
      description: "The default setup does not have the best streams and can be unbearably slow.",
      title: "Are you sure?"
    },
    extension: {
      back: "Go back",
      explainer: "Using the browser extension, you can get the best streams we have to offer. With just a simple install.",
      explainerIos: "Unfortunately, the browser extension is not supported on iOS, Press <bold>Go back</bold> to choose another option.",
      extensionHelp: "If you've installed the extension but it's not detected, <bold>open the extension through your browsers extension menu</bold> and follow the steps on screen.",
      linkChrome: "Install Chrome extension",
      linkFirefox: "Install Firefox extension",
      notDetecting: "Installed on Chrome, but the site isn't detecting it? Try reloading the page!",
      notDetectingAction: "Reload page",
      status: {
        disallowed: "Extension is not enabled for this page",
        disallowedAction: "Enable extension",
        failed: "Failed to request status",
        loading: "Waiting for you to install the extension",
        outdated: "Extension version too old",
        success: "Extension is working as expected!"
      },
      submit: "Continue",
      title: "Let's start with an extension"
    },
    proxy: {
      back: "Go back",
      explainer: "With the proxy method, you can get great quality streams by making a self-service proxy.",
      input: {
        errorConnection: "Could not connect to proxy",
        errorInvalidUrl: "Not a valid URL",
        errorNotProxy: "Expected a proxy but got a website",
        label: "Proxy URL",
        placeholder: "https://"
      },
      link: "Learn how to make a proxy",
      submit: "Submit proxy",
      title: "Let's make a new proxy"
    },
    start: {
      explainer: "To get the best streams possible, you will need to choose which streaming method you want to use.",
      options: {
        default: {
          text: "Can't install extension or you're on mobile?<0 /> <1>Use the default setup.</1>"
        },
        extension: {
          action: "Install extension",
          description: "Install browser extension and gain access to the best sources.",
          quality: "Best quality",
          title: "Browser extension"
        },
        proxy: {
          action: "Setup proxy",
          description: "Setup a proxy in just 5 minutes and gain access to great sources.",
          quality: "Good quality",
          title: "Custom proxy"
        }
      },
      title: "Let's get you setup with film.kace.dev"
    }
  },
  Nl = {
    close: "Close"
  },
  Sl = {
    back: {
      default: "Back to home",
      short: "Back"
    },
    casting: {
      enabled: "Casting to device..."
    },
    menus: {
      downloads: {
        disclaimer: "Downloads are taken directly from the provider. film.kace.dev does not have control over how the downloads are provided.",
        copyHlsPlaylist: "Copy HLS playlist link",
        downloadSubtitle: "Download current subtitle",
        downloadVideo: "Download video",
        hlsDisclaimer: "Downloads are taken directly from the provider. film.kace.dev does not have control over how the downloads are provided.<br /><br />Please note that you are downloading an HLS playlist, <bold>it is not recommended to download if you are not familiar with advanced streaming formats</bold>. Try different sources for different formats.",
        onAndroid: {
          1: "To download on Android, click the download button then, on the new page, <bold>tap and hold</bold> on the video, then select <bold>save</bold>.",
          shortTitle: "Download / Android",
          title: "Downloading on Android"
        },
        onIos: {
          1: "To download on iOS, click the download button then, on the new page, click <bold><ios_share /></bold>, then <bold>Save to Files <ios_files /></bold>.",
          shortTitle: "Download / iOS",
          title: "Downloading on iOS"
        },
        onPc: {
          1: "On PC, click the download button then, on the new page, right click the video and select <bold>Save video as</bold>",
          shortTitle: "Download / PC",
          title: "Downloading on PC"
        },
        title: "Download"
      },
      episodes: {
        button: "Episodes",
        emptyState: "There are no episodes in this season, check back later!",
        episodeBadge: "E{{episode}}",
        loadingError: "Error loading season",
        loadingList: "Loading...",
        loadingTitle: "Loading...",
        unairedEpisodes: "One or more episodes in this season have been disabled because they haven't been aired yet."
      },
      playback: {
        speedLabel: "Playback speed",
        title: "Playback settings"
      },
      quality: {
        automaticLabel: "Automatic quality",
        hint: "You can try <0>switching source</0> to get different quality options.",
        iosNoQuality: "Due to Apple-defined limitations, quality selection is not available on iOS for this source. You can try <0>switching to another source</0> to get different quality options.",
        title: "Quality"
      },
      settings: {
        downloadItem: "Download",
        enableSubtitles: "Enable Subtitles",
        experienceSection: "Viewing experience",
        playbackItem: "Playback settings",
        audioItem: "Audio",
        qualityItem: "Quality",
        sourceItem: "Video sources",
        subtitleItem: "Subtitle settings",
        videoSection: "Video settings"
      },
      sources: {
        failed: {
          text: "There was an error while trying to find any videos, please try a different source.",
          title: "Failed to scrape"
        },
        noEmbeds: {
          text: "We were unable to find any embeds, please try a different source.",
          title: "No embeds found"
        },
        noStream: {
          text: "This source has no streams for this movie or show.",
          title: "No stream"
        },
        title: "Sources",
        unknownOption: "Unknown"
      },
      subtitles: {
        customChoice: "Drop or upload file",
        customizeLabel: "Customize",
        offChoice: "Off",
        settings: {
          backlink: "Custom subtitles",
          delay: "Subtitle delay",
          fixCapitals: "Fix capitalization"
        },
        title: "Subtitles",
        unknownLanguage: "Unknown",
        dropSubtitleFile: "Drop subtitle file here"
      }
    },
    metadata: {
      api: {
        text: "Could not load API metadata, please check your internet connection.",
        title: "Failed to load API metadata"
      },
      dmca: {
        badge: "Removed",
        text: "This media is no longer available due to a takedown notice or copyright claim.",
        title: "Media has been removed"
      },
      extensionPermission: {
        badge: "Permission Missing",
        button: "Use extension",
        text: "You have the browser extension, but we need your permission to get started using the extension.",
        title: "Configure the extension"
      },
      failed: {
        badge: "Failed",
        homeButton: "Go home",
        text: "Could not load the media's metadata from TMDB. Please check whether TMDB is down or blocked on your internet connection.",
        title: "Failed to load metadata"
      },
      notFound: {
        badge: "Not found",
        homeButton: "Back to home",
        text: "We couldn't find the media you requested. Either it's been removed or you tampered with the URL.",
        title: "Couldn't find that media."
      }
    },
    nextEpisode: {
      cancel: "Cancel",
      next: "Next episode",
      nextSeason: "Next season"
    },
    playbackError: {
      badge: "Playback error",
      errors: {
        errorAborted: "The fetching of the media was aborted by the user's request.",
        errorDecode: "Despite having previously been determined to be usable, an error occurred while trying to decode the media resource, resulting in an error.",
        errorGenericMedia: "Unknown media error occurred.",
        errorNetwork: "Some kind of network error occurred which prevented the media from being successfully fetched, despite having previously been available.",
        errorNotSupported: "The media or media provider object is not supported."
      },
      homeButton: "Go home",
      text: "There was an error trying to play the media. Please try again.",
      title: "Failed to play video!"
    },
    scraping: {
      items: {
        failure: "Error occurred",
        notFound: "Doesn't have the video",
        pending: "Checking for videos..."
      },
      notFound: {
        badge: "Not found",
        detailsButton: "Show details",
        homeButton: "Go home",
        text: "We have searched through our providers and cannot find the media you are looking for! We do not host the media and have no control over what is available. Please click 'Show details' below for more details.",
        title: "We couldn't find that"
      },
      extensionFailure: {
        badge: "Extension disabled",
        homeButton: "Go home",
        enableExtension: "Enable extension",
        title: "Please enable the extension",
        text: "You've installed the movie-web extension. To start using it, you need to enable the extension for this site."
      }
    },
    time: {
      regular: "{{timeWatched}} / {{duration}}",
      remaining: "{{timeLeft}} left • Finish at {{timeFinished, datetime}}",
      shortRegular: "{{timeWatched}}",
      shortRemaining: "-{{timeLeft}}"
    },
    turnstile: {
      description: "Please verify that you are human by completing the Captcha on the right. This is to keep film.kace.dev safe!",
      error: "Failed to verify your humanity. Please try again.",
      title: "We need to verify that you're human.",
      verifyingHumanity: "Verifying your humanity..."
    }
  },
  El = {
    dmca: {
      text: "Welcome to film.kace.dev's DMCA contact page! We respect intellectual property rights and want to address any copyright concerns swiftly. If you believe your copyrighted work has been improperly used on our platform, please send a detailed DMCA notice to the email below. Please include a description of the copyrighted material, your contact details, and a statement of good faith belief. We're committed to resolving these matters promptly and appreciate your cooperation in keeping film.kace.dev a place that respects creativity and copyrights.",
      title: "DMCA"
    },
    loadingApp: "Loading application",
    loadingUser: "Loading your profile",
    loadingUserError: {
      logout: "Logout",
      reset: "Reset custom server",
      text: "Failed to load your profile",
      textWithReset: "Failed to load your profile from your custom server, want to reset back to the default server?"
    },
    migration: {
      failed: "Failed to migrate your data.",
      inProgress: "Please hold, we are migrating your data. This shouldn't take long."
    }
  },
  Cl = {
    account: {
      accountDetails: {
        deviceNameLabel: "Device name",
        deviceNamePlaceholder: "Personal phone",
        editProfile: "Edit",
        logoutButton: "Log out"
      },
      actions: {
        delete: {
          button: "Delete account",
          confirmButton: "Delete account",
          confirmDescription: "Are you sure you want to delete your account? All your data will be lost!",
          confirmTitle: "Are you sure?",
          text: "This action is irreversible. All data will be deleted and nothing can be recovered.",
          title: "Delete account"
        },
        title: "Actions"
      },
      devices: {
        deviceNameLabel: "Device name",
        failed: "Failed to load sessions",
        removeDevice: "Remove",
        title: "Devices"
      },
      profile: {
        finish: "Finish editing",
        firstColor: "Profile color one",
        secondColor: "Profile color two",
        title: "Edit profile picture",
        userIcon: "User icon"
      },
      register: {
        cta: "Get started",
        text: "Share your watch progress between devices and keep them synced.",
        title: "Sync to the cloud"
      },
      title: "Account"
    },
    appearance: {
      activeTheme: "Active",
      themes: {
        blue: "Blue",
        default: "Default",
        amoled: "AMOLED",
        gray: "Gray",
        red: "Red",
        teal: "Teal"
      },
      title: "Appearance"
    },
    connections: {
      server: {
        description: "If you would like to connect to a custom backend to store your data, enable this and provide the URL. <0>Instructions.</0>",
        label: "Custom server",
        urlLabel: "Custom server URL"
      },
      setup: {
        doSetup: "Do setup",
        errorStatus: {
          description: "It seems that one or more items in this setup need your attention.",
          title: "Something needs your attention"
        },
        itemError: "There is something wrong with this setting. Go through setup again to fix it.",
        items: {
          default: "Default setup",
          extension: "Extension",
          proxy: "Custom proxy"
        },
        redoSetup: "Redo setup",
        successStatus: {
          description: "All things are in place for you to start watching your favourite media.",
          title: "Everything is set up!"
        },
        unsetStatus: {
          description: "Please click the button to the right to start the setup process.",
          title: "You haven't gone through setup"
        }
      },
      title: "Connections",
      workers: {
        addButton: "Add new worker",
        description: "To make the application function, all traffic is routed through proxies. Enable this if you want to bring your own workers. <0>Instructions.</0>",
        emptyState: "No workers yet, add one below",
        label: "Use custom proxy workers",
        urlLabel: "Worker URLs",
        urlPlaceholder: "https://"
      }
    },
    preferences: {
      language: "Application language",
      languageDescription: "Language applied to the entire application.",
      thumbnail: "Generate thumbnails",
      thumbnailDescription: "Most of the time, videos don't have thumbnails. You can enable this setting to generate them on the fly but they can make your video slower.",
      thumbnailLabel: "Generate thumbnails",
      autoplay: "Autoplay",
      autoplayDescription: "Automatically play the next episode in a series after reaching the end. Can be enabled by users with the browser extension, a custom proxy, or with the default setup if allowed by the host.",
      autoplayLabel: "Autoplay",
      title: "Preferences"
    },
    reset: "Reset",
    save: "Save",
    sidebar: {
      info: {
        appVersion: "App version",
        backendUrl: "Backend URL",
        backendVersion: "Backend version",
        hostname: "Hostname",
        insecure: "Insecure",
        notLoggedIn: "You are not logged in",
        secure: "Secure",
        title: "App information",
        unknownVersion: "Unknown",
        userId: "User ID",
      }
    },
    subtitles: {
      backgroundLabel: "Background opacity",
      backgroundBlurLabel: "Background blur",
      colorLabel: "Color",
      previewQuote: "I must not fear. Fear is the mind-killer.",
      textSizeLabel: "Text size",
      title: "Subtitles"
    },
    unsaved: "You have unsaved changes"
  },
  Il = {
    about: hl,
    actions: fl,
    auth: gl,
    errors: xl,
    footer: pl,
    global: bl,
    home: yl,
    media: vl,
    navigation: jl,
    notFound: wl,
    onboarding: kl,
    overlays: Nl,
    player: Sl,
    screens: El,
    settings: Cl
  },
  Tr = {
    en: Il,
    ca: mi,
    "ca-ES": hi,
    cs: fi,
    de: gi,
    fr: xi,
    it: pi,
    nl: bi,
    pl: yi,
    tr: vi,
    vi: ji,
    zh: wi,
    he: ki,
    sv: Ni,
    pirate: Si,
    minion: Ei,
    lv: Ci,
    th: Ii,
    ne: Li,
    ar: Ti,
    es: Pi,
    et: Ri,
    tok: Ai,
    hi: _i,
    "pt-BR": Oi,
    "pt-PT": Mi,
    uk: Di,
    bg: Bi,
    bn: Ui,
    el: Fi,
    fa: Vi,
    gu: $i,
    id: Hi,
    ja: Wi,
    ko: Gi,
    sl: Ki,
    ta: zi,
    "zh-Hant": qi,
    is: Qi,
    ru: Yi,
    gl: Xi,
    pa: Ji,
    ro: Zi,
    fi: eo,
    nv: to
  },
  Ll = Object.keys(Tr),
  Tl = Object.fromEntries(Object.entries(Tr).map(e => [e[0], {
    translation: e[1]
  }]));
Js.use(Xa).init({
  fallbackLng: "en",
  resources: Tl,
  interpolation: {
    escapeValue: !1
  }
});
const Nf = Ll.map(e => {
    const t = En(e);
    if (!t) throw new Error(`Language with code ${e} cannot be found in database`);
    return t
  }),
  Ve = z(xe(q(e => ({
    language: "en",
    setLanguage(t) {
      e(s => {
        s.language = t
      })
    }
  })), {
    name: "__MW::locale"
  }));

function Pr(e) {
  const t = En(e);
  t && Js.changeLanguage(t.code)
}

function Pl(e) {
  const t = En(e);
  return t ? t.isRtl : !1
}

function Rl() {
  const e = Ve(s => s.language);
  m.useEffect(() => {
    Pr(e)
  }, [e]);
  const t = Pl(e);
  return n.jsx(we, {
    children: n.jsx("html", {
      dir: t ? "rtl" : "ltr"
    })
  })
}
const H = z(xe(q(e => ({
  enabled: !1,
  lastSync: {
    lastSelectedLanguage: null
  },
  lastSelectedLanguage: null,
  overrideCasing: !1,
  delay: 0,
  styling: {
    color: "#ffffff",
    backgroundOpacity: .5,
    size: 1,
    backgroundBlur: .5
  },
  resetSubtitleSpecificSettings() {
    e(t => {
      t.delay = 0, t.overrideCasing = !1
    })
  },
  updateStyling(t) {
    e(s => {
      t.backgroundOpacity !== void 0 && (s.styling.backgroundOpacity = Math.min(1, Math.max(0, t.backgroundOpacity))), t.backgroundBlur !== void 0 && (s.styling.backgroundBlur = Math.min(1, Math.max(0, t.backgroundBlur))), t.color !== void 0 && (s.styling.color = t.color.toLowerCase()), t.size !== void 0 && (s.styling.size = Math.min(10, Math.max(.01, t.size)))
    })
  },
  setLanguage(t) {
    e(s => {
      s.enabled = !!t, t && (s.lastSelectedLanguage = t)
    })
  },
  setCustomSubs() {
    e(t => {
      t.enabled = !0, t.lastSelectedLanguage = null
    })
  },
  setOverrideCasing(t) {
    e(s => {
      s.overrideCasing = t
    })
  },
  setDelay(t) {
    e(s => {
      s.delay = Math.max(Math.min(500, t), -500)
    })
  },
  importSubtitleLanguage(t) {
    e(s => {
      s.lastSelectedLanguage = t, s.lastSync.lastSelectedLanguage = t
    })
  }
})), {
  name: "__MW::subtitles",
  merge: (e, t) => Zs({}, t, e)
}));
Ot().setKey("mw-settings").addVersion({
  version: 0,
  create() {
    return {
      language: "en",
      captionSettings: {
        delay: 0,
        style: {
          color: "#ffffff",
          fontSize: 25,
          backgroundColor: "#00000096"
        }
      }
    }
  },
  migrate(e) {
    return {
      language: e.language,
      captionSettings: {
        language: "none",
        ...e.captionSettings
      }
    }
  }
}).addVersion({
  version: 1,
  migrate(e) {
    const t = Ve.getState(),
      s = H.getState(),
      r = e.captionSettings.style.backgroundColor;
    let a = .5;
    if (r.length === 9) {
      const i = r.slice(7);
      a = parseInt(i, 16) / 255
    }
    return t.setLanguage(e.language), s.updateStyling({
      backgroundOpacity: a,
      color: e.captionSettings.style.color,
      size: e.captionSettings.style.fontSize / 25
    }), s.importSubtitleLanguage(e.captionSettings.language === "none" ? null : e.captionSettings.language), {}
  }
}).addVersion({
  version: 2,
  create() {
    return {}
  }
}).build();
const Pn = z(xe(q(e => ({
    volume: 1,
    setVolume(t) {
      e(s => {
        s.volume = t
      })
    }
  })), {
    name: "__MW::volume"
  })),
  Rr = z(q(e => ({
    showVolume: !1,
    setShowVolume(t) {
      e(s => {
        s.showVolume = t
      })
    }
  })));
Ot().setKey("mw-volume").addVersion({
  version: 0,
  create() {
    return {
      volume: 1
    }
  },
  migrate(e) {
    return Pn.getState().setVolume(e.volume), {}
  }
}).addVersion({
  version: 1,
  create() {
    return {}
  }
}).build();
let pt = 0;
const Y = z(xe(q(e => ({
  items: {},
  updateQueue: [],
  removeItem(t) {
    e(s => {
      pt += 1, s.updateQueue.push({
        id: pt.toString(),
        action: "delete",
        tmdbId: t
      }), delete s.items[t]
    })
  },
  replaceItems(t) {
    e(s => {
      s.items = t
    })
  },
  updateItem(t) {
    let {
      meta: s,
      progress: r
    } = t;
    e(a => {
      var o, l, c, u;
      pt += 1, a.updateQueue.push({
        tmdbId: s.tmdbId,
        title: s.title,
        year: s.releaseYear,
        poster: s.poster,
        type: s.type,
        progress: {
          ...r
        },
        id: pt.toString(),
        episodeId: (o = s.episode) == null ? void 0 : o.tmdbId,
        seasonId: (l = s.season) == null ? void 0 : l.tmdbId,
        seasonNumber: (c = s.season) == null ? void 0 : c.number,
        episodeNumber: (u = s.episode) == null ? void 0 : u.number,
        action: "upsert"
      }), a.items[s.tmdbId] || (a.items[s.tmdbId] = {
        type: s.type,
        episodes: {},
        seasons: {},
        updatedAt: 0,
        title: s.title,
        year: s.releaseYear,
        poster: s.poster
      });
      const i = a.items[s.tmdbId];
      if (i.updatedAt = Date.now(), s.type === "movie") {
        i.progress || (i.progress = {
          duration: 0,
          watched: 0
        }), i.progress = {
          ...r
        };
        return
      }!s.episode || !s.season || (i.seasons[s.season.tmdbId] || (i.seasons[s.season.tmdbId] = {
        id: s.season.tmdbId,
        number: s.season.number,
        title: s.season.title
      }), i.episodes[s.episode.tmdbId] || (i.episodes[s.episode.tmdbId] = {
        id: s.episode.tmdbId,
        number: s.episode.number,
        title: s.episode.title,
        seasonId: s.season.tmdbId,
        updatedAt: Date.now(),
        progress: {
          duration: 0,
          watched: 0
        }
      }), i.episodes[s.episode.tmdbId].progress = {
        ...r
      })
    })
  },
  clear() {
    e(t => {
      t.items = {}
    })
  },
  clearUpdateQueue() {
    e(t => {
      t.updateQueue = []
    })
  },
  removeUpdateItem(t) {
    e(s => {
      s.updateQueue = [...s.updateQueue.filter(r => r.id !== t)]
    })
  }
})), {
  name: "__MW::progress"
}));

function Al(e) {
  var s, r;
  const t = {};
  for (const a of e.items)
    if (a.item.meta.type === B.SERIES) {
      if (t[a.item.meta.id] || (t[a.item.meta.id] = {
          type: "show",
          episodes: {},
          seasons: {},
          title: a.item.meta.title,
          updatedAt: a.watchedAt,
          poster: a.item.meta.poster,
          year: Number(a.item.meta.year)
        }), a.item.series && !t[a.item.meta.id].episodes[a.item.series.episodeId]) {
        const i = (s = a.item.meta.seasonData.episodes.find(o => {
          var l;
          return o.number === ((l = a.item.series) == null ? void 0 : l.episode)
        })) == null ? void 0 : s.title;
        t[a.item.meta.id].seasons[a.item.series.seasonId] = {
          id: a.item.series.seasonId,
          number: a.item.series.season,
          title: ((r = a.item.meta.seasons.find(o => {
            var l;
            return o.number === ((l = a.item.series) == null ? void 0 : l.season)
          })) == null ? void 0 : r.title) || "Unknown season"
        }, t[a.item.meta.id].episodes[a.item.series.episodeId] = {
          title: i || "Unknown",
          id: a.item.series.episodeId,
          number: a.item.series.episode,
          seasonId: a.item.series.seasonId,
          updatedAt: a.watchedAt,
          progress: {
            duration: 100 / a.percentage * a.progress,
            watched: a.progress
          }
        }
      }
    } else t[a.item.meta.id] = {
      type: "movie",
      episodes: {},
      seasons: {},
      title: a.item.meta.title,
      updatedAt: a.watchedAt,
      year: Number(a.item.meta.year),
      poster: a.item.meta.poster,
      progress: {
        duration: 100 / a.percentage * a.progress,
        watched: a.progress
      }
    };
  return t
}
Ot().setKey("video-progress").addVersion({
  version: 0,
  migrate() {
    return {
      items: []
    }
  }
}).addVersion({
  version: 1,
  async migrate(e) {
    return ll(e)
  }
}).addVersion({
  version: 2,
  migrate(e) {
    return dl(e)
  }
}).addVersion({
  version: 3,
  migrate(e) {
    return Y.getState().replaceItems(Al(e)), {
      items: []
    }
  }
}).addVersion({
  version: 4,
  create() {
    return {
      items: []
    }
  }
}).build();
ls && Ba.initialize([{
  trackingId: ls
}]);

function Ut(e) {
  return n.jsx("div", {
    className: ["spinner", e.className ?? ""].join(" ")
  })
}

function D(e) {
  var u;
  const t = se(),
    {
      onClick: s,
      href: r,
      loading: a
    } = e,
    i = m.useCallback(d => {
      a || (r && !s ? (d.preventDefault(), r.includes("http") ? window.open(r, "_blank", "noreferrer") : t(r)) : s == null || s(d))
    }, [a, r, s, t]);
  let o = "bg-white hover:bg-gray-200 text-black";
  e.theme === "purple" && (o = "bg-buttons-purple hover:bg-buttons-purpleHover text-white"), e.theme === "secondary" && (o = "bg-buttons-cancel hover:bg-buttons-cancelHover transition-colors duration-100 text-white"), e.theme === "danger" && (o = "bg-buttons-danger hover:bg-buttons-dangerHover text-white");
  let l = C("tabbable cursor-pointer inline-flex items-center justify-center rounded-lg font-medium transition-[transform,background-color] duration-100 active:scale-105 md:px-8", e.padding ?? "px-4 py-3", e.className, o, e.disabled ? "!cursor-not-allowed bg-opacity-60 text-opacity-60" : null);
  e.disabled && (l = l.split(" ").filter(d => !d.startsWith("hover:") && !d.startsWith("active:")).join(" "));
  const c = n.jsxs(n.Fragment, {
    children: [e.icon && !e.loading ? n.jsx("span", {
      className: "mr-3 hidden md:inline-block",
      children: n.jsx(P, {
        icon: e.icon
      })
    }) : null, e.loading ? n.jsx("span", {
      className: "mr-3 inline-flex justify-center",
      children: n.jsx(Ut, {
        className: "text-lg"
      })
    }) : null, e.children]
  });
  return e.href && (e.href.startsWith("https://") || (u = e.href) != null && u.startsWith("data:")) ? n.jsx("a", {
    className: l,
    href: e.href,
    target: "_blank",
    rel: "noreferrer",
    download: e.download,
    onClick: i,
    children: c
  }) : e.href ? n.jsx("a", {
    className: l,
    onClick: i,
    children: c
  }) : n.jsx("button", {
    type: "button",
    onClick: i,
    className: l,
    children: c
  })
}

function bs(e) {
  let t = "bg-white hover:bg-gray-200 text-black";
  e.theme === "purple" && (t = "bg-buttons-purple hover:bg-buttons-purpleHover text-white"), e.theme === "secondary" && (t = "bg-buttons-cancel hover:bg-buttons-cancelHover transition-colors duration-100 text-white");
  const s = C("cursor-pointer inline-flex items-center justify-center rounded-lg font-medium transition-[transform,background-color] duration-100 active:scale-105 md:px-8", "px-4 py-3", e.className, t);
  return n.jsx("button", {
    type: "button",
    onClick: e.onClick,
    className: s,
    children: e.children
  })
}
const _l = function (t) {
    return n.jsx("div", {
      className: t.className,
      children: n.jsxs("div", {
        className: "flex flex-col items-center justify-center",
        children: [n.jsxs("div", {
          className: "flex h-12 items-center justify-center",
          children: [n.jsx("div", {
            className: "mx-1 h-2 w-2 animate-loading-pin rounded-full bg-[#211D30]"
          }), n.jsx("div", {
            className: "mx-1 h-2 w-2 animate-loading-pin rounded-full bg-[#211D30] [animation-delay:150ms]"
          }), n.jsx("div", {
            className: "mx-1 h-2 w-2 animate-loading-pin rounded-full bg-[#211D30] [animation-delay:300ms]"
          }), n.jsx("div", {
            className: "mx-1 h-2 w-2 animate-loading-pin rounded-full bg-[#211D30] [animation-delay:450ms]"
          })]
        }), t.text && t.text.length ? n.jsx("p", {
          className: "mt-3 max-w-xs text-sm opacity-75",
          children: t.text
        }) : null]
      })
    })
  },
  $e = _l;

function X(e) {
  return {
    authorization: `Bearer ${e}`
  }
}

function Ol(e, t) {
  return {
    meta: {
      title: t.title,
      type: t.type,
      poster: t.poster,
      year: t.year ?? 0
    },
    tmdbId: e
  }
}
async function Ml(e, t, s) {
  return V(`/users/${t.userId}/bookmarks/${s.tmdbId}`, {
    method: "POST",
    headers: X(t.token),
    baseURL: e,
    body: s
  })
}
async function Dl(e, t, s) {
  return V(`/users/${t.userId}/bookmarks/${s}`, {
    method: "DELETE",
    headers: X(t.token),
    baseURL: e
  })
}
async function Bl(e) {
  return Ua(Fa, e, "mnemonic", {
    c: 2048,
    dkLen: 32
  })
}

function Ul(e) {
  return Va(e, er)
}
async function ys(e) {
  const t = await Bl(e),
    {
      privateKey: s,
      publicKey: r
    } = oe.pki.ed25519.generateKeyPair({
      seed: t
    });
  return {
    privateKey: s,
    publicKey: r,
    seed: t
  }
}

function Fl() {
  return $a(er)
}
async function Vl(e, t) {
  return oe.pki.ed25519.sign({
    encoding: "utf8",
    message: e,
    privateKey: t
  })
}

function dn(e) {
  return oe.util.encode64(String.fromCodePoint(...e))
}

function mn(e) {
  return dn(e).replace(/\//g, "_").replace(/\+/g, "-").replace(/=+$/, "")
}
async function vs(e, t) {
  const s = await Vl(t, e.privateKey);
  return mn(s)
}

function Rn(e) {
  return oe.util.binary.base64.decode(e)
}

function Qt(e) {
  return oe.util.createBuffer(Rn(e))
}

function js(e) {
  return oe.util.encode64(e.getBytes())
}
async function ws(e, t) {
  if (t.byteLength !== 32) throw new Error("Secret must be at least 256-bit");
  const s = await new Promise((o, l) => {
      oe.random.getBytes(16, (c, u) => {
        c && l(c), o(u)
      })
    }),
    r = oe.cipher.createCipher("AES-GCM", oe.util.createBuffer(t));
  r.start({
    iv: s,
    tagLength: 128
  }), r.update(oe.util.createBuffer(e, "utf8")), r.finish();
  const a = r.output,
    i = r.mode.tag;
  return `${oe.util.encode64(s)}.${js(a)}.${js(i)}`
}

function Ar(e, t) {
  if (t.byteLength !== 32) throw new Error("Secret must be 256-bit");
  const [s, r, a] = e.split("."), i = oe.cipher.createDecipher("AES-GCM", oe.util.createBuffer(t));
  if (i.start({
      iv: Qt(s),
      tag: Qt(a),
      tagLength: 128
    }), i.update(Qt(r)), !i.finish()) throw new Error("Error decrypting data");
  return i.output.toString()
}

function $l(e, t, s) {
  return V(`/users/${t.userId}/progress/import`, {
    method: "PUT",
    body: s,
    baseURL: e,
    headers: X(t.token)
  })
}

function Hl(e, t, s) {
  return V(`/users/${t.userId}/bookmarks`, {
    method: "PUT",
    body: s,
    baseURL: e,
    headers: X(t.token)
  })
}
async function Wl(e, t) {
  return V("/auth/login/start", {
    method: "POST",
    body: {
      publicKey: t
    },
    baseURL: e
  })
}
async function Gl(e, t) {
  return V("/auth/login/complete", {
    method: "POST",
    body: {
      namespace: "movie-web",
      ...t
    },
    baseURL: e
  })
}

function Kl(e) {
  var t, s;
  return {
    duration: ((t = e.progress) == null ? void 0 : t.duration) ?? 0,
    watched: ((s = e.progress) == null ? void 0 : s.watched) ?? 0,
    tmdbId: e.tmdbId,
    meta: {
      title: e.title ?? "",
      type: e.type ?? "",
      year: e.year ?? NaN,
      poster: e.poster
    },
    episodeId: e.episodeId,
    seasonId: e.seasonId,
    episodeNumber: e.episodeNumber,
    seasonNumber: e.seasonNumber
  }
}

function zl(e, t) {
  var s, r;
  return t.type === "show" ? Object.entries(t.episodes).flatMap(a => {
    var l, c;
    let [i, o] = a;
    return {
      duration: ((l = t.progress) == null ? void 0 : l.duration) ?? o.progress.duration,
      watched: ((c = t.progress) == null ? void 0 : c.watched) ?? o.progress.watched,
      tmdbId: e,
      meta: {
        title: t.title ?? "",
        type: t.type ?? "",
        year: t.year ?? NaN,
        poster: t.poster
      },
      episodeId: o.id,
      seasonId: o.seasonId,
      episodeNumber: o.number,
      seasonNumber: t.seasons[o.seasonId].number,
      updatedAt: new Date(o.updatedAt).toISOString()
    }
  }) : [{
    duration: ((s = t.progress) == null ? void 0 : s.duration) ?? 0,
    watched: ((r = t.progress) == null ? void 0 : r.watched) ?? 0,
    tmdbId: e,
    updatedAt: new Date(t.updatedAt).toISOString(),
    meta: {
      title: t.title ?? "",
      type: t.type ?? "",
      year: t.year ?? NaN,
      poster: t.poster
    }
  }]
}
async function ql(e, t, s) {
  return V(`/users/${t.userId}/progress/${s.tmdbId}`, {
    method: "PUT",
    headers: X(t.token),
    baseURL: e,
    body: s
  })
}
async function Ql(e, t, s, r, a) {
  await V(`/users/${t.userId}/progress/${s}`, {
    method: "DELETE",
    headers: X(t.token),
    baseURL: e,
    body: {
      episodeId: r,
      seasonId: a
    }
  })
}
async function Yl(e, t) {
  return V("/auth/register/start", {
    method: "POST",
    body: {
      captchaToken: t
    },
    baseURL: e
  })
}
async function Xl(e, t) {
  return V("/auth/register/complete", {
    method: "POST",
    body: {
      namespace: "movie-web",
      ...t
    },
    baseURL: e
  })
}
async function Sf(e, t) {
  return V(`/users/${t.userId}/sessions`, {
    headers: X(t.token),
    baseURL: e
  })
}
async function Ef(e, t, s) {
  return V(`/sessions/${t.sessionId}`, {
    method: "PATCH",
    headers: X(t.token),
    body: s,
    baseURL: e
  })
}
async function Jl(e, t, s) {
  return V(`/sessions/${s}`, {
    method: "DELETE",
    headers: X(t),
    baseURL: e
  })
}

function An(e, t, s) {
  return V(`/users/${t.userId}/settings`, {
    method: "PUT",
    body: s,
    baseURL: e,
    headers: X(t.token)
  })
}

function Zl(e, t) {
  return V(`/users/${t.userId}/settings`, {
    method: "GET",
    baseURL: e,
    headers: X(t.token)
  })
}

function ec(e) {
  const t = e.map(s => {
    const r = {
      ...s.meta,
      updatedAt: new Date(s.updatedAt).getTime()
    };
    return [s.tmdbId, r]
  });
  return Object.fromEntries(t)
}

function tc(e) {
  const t = {};
  return e.forEach(s => {
    t[s.tmdbId] || (t[s.tmdbId] = {
      title: s.meta.title,
      poster: s.meta.poster,
      type: s.meta.type,
      updatedAt: new Date(s.updatedAt).getTime(),
      episodes: {},
      seasons: {},
      year: s.meta.year
    });
    const r = t[s.tmdbId];
    new Date(s.updatedAt).getTime() > r.updatedAt && (r.updatedAt = new Date(s.updatedAt).getTime()), r.type === "movie" && (r.progress = {
      duration: Number(s.duration),
      watched: Number(s.watched)
    }), r.type === "show" && s.season.id && s.episode.id && (r.seasons[s.season.id] = {
      id: s.season.id,
      number: s.season.number ?? 0,
      title: ""
    }, r.episodes[s.episode.id] = {
      id: s.episode.id,
      number: s.episode.number ?? 0,
      title: "",
      progress: {
        duration: Number(s.duration),
        watched: Number(s.watched)
      },
      seasonId: s.season.id,
      updatedAt: new Date(s.updatedAt).getTime()
    })
  }), t
}
async function ks(e, t) {
  return V("/users/@me", {
    headers: X(t),
    baseURL: e
  })
}
async function Cf(e, t, s) {
  return V(`/users/${t.userId}`, {
    method: "PATCH",
    headers: X(t.token),
    body: s,
    baseURL: e
  })
}
async function If(e, t) {
  return V(`/users/${t.userId}`, {
    headers: X(t.token),
    baseURL: e
  })
}
async function nc(e, t) {
  return V(`/users/${t.userId}/bookmarks`, {
    headers: X(t.token),
    baseURL: e
  })
}
async function sc(e, t) {
  return V(`/users/${t.userId}/progress`, {
    headers: X(t.token),
    baseURL: e
  })
}
const _n = z(xe(q(e => ({
    theme: null,
    setTheme(t) {
      e(s => {
        s.theme = t
      })
    }
  })), {
    name: "__MW::theme"
  })),
  rc = z(q(e => ({
    previewTheme: null,
    setPreviewTheme(t) {
      e(s => {
        s.previewTheme = t
      })
    }
  })));

function ac(e) {
  const t = rc(i => i.previewTheme),
    s = _n(i => i.theme),
    r = t ?? s,
    a = r ? `theme-${r}` : void 0;
  return n.jsxs("div", {
    className: a,
    children: [e.applyGlobal ? n.jsx(we, {
      children: n.jsx("body", {
        className: a
      })
    }) : null, e.children]
  })
}

function ic() {
  const e = !!$(f => f.account),
    t = $(f => f.setAccount),
    s = $(f => f.removeAccount),
    r = $(f => f.setProxySet),
    a = Z(f => f.clear),
    i = Y(f => f.clear),
    o = _n(f => f.setTheme),
    l = Ve(f => f.setLanguage),
    c = H(f => f.importSubtitleLanguage),
    u = Z(f => f.replaceBookmarks),
    d = Y(f => f.replaceItems),
    b = m.useCallback(async (f, v, p, y) => {
      const j = {
        token: f.token,
        userId: v.id,
        sessionId: f.session.id,
        deviceName: p.device,
        profile: v.profile,
        seed: y
      };
      return t(j), j
    }, [t]),
    g = m.useCallback(async () => {
      s(), a(), i()
    }, [s, a, i]),
    h = m.useCallback(async (f, v, p, y, j) => {
      u(ec(y)), d(tc(p)), j.applicationLanguage && l(j.applicationLanguage), j.defaultSubtitleLanguage && c(j.defaultSubtitleLanguage), j.applicationTheme && o(j.applicationTheme), j.proxyUrls && r(j.proxyUrls)
    }, [u, d, l, c, o, r]);
  return {
    loggedIn: e,
    login: b,
    logout: g,
    syncData: h
  }
}

function ke() {
  return $(t => t.backendUrl) ?? F().BACKEND_URL
}

function He() {
  const e = $(g => g.account),
    t = $(g => {
      var h;
      return (h = g.account) == null ? void 0 : h.profile
    }),
    s = !!$(g => g.account),
    r = ke(),
    {
      logout: a,
      login: i,
      syncData: o
    } = ic(),
    l = m.useCallback(async g => {
      if (!r) return;
      const h = await ys(g.mnemonic),
        f = mn(h.publicKey),
        {
          challenge: v
        } = await Wl(r, f),
        p = await vs(h, v),
        y = await Gl(r, {
          challenge: {
            code: v,
            signature: p
          },
          publicKey: f,
          device: await ws(g.userData.device, h.seed)
        }),
        j = await ks(r, y.token),
        R = dn(h.seed);
      return i(y, j.user, j.session, R)
    }, [i, r]),
    c = m.useCallback(async () => {
      if (!(!e || !r)) {
        try {
          await Jl(r, e.token, e.sessionId)
        } catch {}
        await a()
      }
    }, [a, r, e]),
    u = m.useCallback(async g => {
      if (!r) return;
      const {
        challenge: h
      } = await Yl(r, g.recaptchaToken), f = await ys(g.mnemonic), v = await vs(f, h), p = await Xl(r, {
        challenge: {
          code: h,
          signature: v
        },
        publicKey: mn(f.publicKey),
        device: await ws(g.userData.device, f.seed),
        profile: g.userData.profile
      });
      return i(p, p.user, p.session, dn(f.seed))
    }, [r, i]),
    d = m.useCallback(async (g, h, f) => {
      if (!r || Object.keys(h).length === 0 && Object.keys(f).length === 0) return;
      const v = Object.entries(h).flatMap(y => {
          let [j, R] = y;
          return zl(j, R)
        }),
        p = Object.entries(f).map(y => {
          let [j, R] = y;
          return Ol(j, R)
        });
      await Promise.all([$l(r, g, v), Hl(r, g, p)])
    }, [r]),
    b = m.useCallback(async g => {
      var y, j, R;
      if (!r) return;
      let h;
      try {
        h = await ks(r, g.token)
      } catch (T) {
        const L = T;
        if (((y = L == null ? void 0 : L.response) == null ? void 0 : y.status) === 401 || ((j = L == null ? void 0 : L.response) == null ? void 0 : j.status) === 403 || ((R = L == null ? void 0 : L.response) == null ? void 0 : R.status) === 400) {
          await c();
          return
        }
        throw console.error(T), T
      }
      const [f, v, p] = await Promise.all([nc(r, g), sc(r, g), Zl(r, g)]);
      o(h.user, h.session, v, f, p)
    }, [r, o, c]);
  return {
    loggedIn: s,
    profile: t,
    login: l,
    logout: c,
    register: u,
    restore: b,
    importData: d
  }
}
const oc = 12 * 60 * 60 * 1e3;

function lc() {
  const {
    account: e
  } = $(), {
    restore: t
  } = He(), s = m.useRef(!1);
  return Sn(() => {
    e && t(e)
  }, oc), Fe(async () => {
    s.current || !e || await t(e).finally(() => {
      s.current = !0
    })
  }, [])
}

function On(e) {
  return n.jsxs("div", {
    className: "bg-pill-background bg-opacity-50 px-4 py-2 rounded-full text-white flex justify-center items-center",
    children: [n.jsx(P, {
      icon: e.icon ?? w.WAND,
      className: "mr-3 text-xl text-type-link"
    }), e.children]
  })
}

function nt(e) {
  return n.jsx("h2", {
    className: C("text-white text-3xl font-bold text-opacity-100 mt-6", e.className),
    children: e.children
  })
}
const Ft = "pb-4 border-b border-utils-divider border-opacity-50";

function Vt(e) {
  return n.jsx("h1", {
    className: ["text-3xl lg:text-5xl font-bold text-white mb-9", e.border ? Ft : null, e.className ?? ""].join(" "),
    children: e.children
  })
}

function de(e) {
  return n.jsx("h2", {
    className: ["text-xl lg:text-2xl font-bold text-white mt-20 mb-9", e.border ? Ft : null, e.className ?? ""].join(" "),
    children: e.children
  })
}

function cc(e) {
  return n.jsx("h2", {
    className: ["text-lg lg:text-xl font-bold text-white mb-3", e.border ? Ft : null, e.className ?? ""].join(" "),
    children: e.children
  })
}

function ne(e) {
  return n.jsx("p", {
    className: ["text-type-text my-9 font-medium", e.border ? Ft : null, e.className ?? ""].join(" "),
    children: e.children
  })
}

function Mn(e) {
  return n.jsx("div", {
    className: C("w-full p-6 text-center flex flex-col items-center", e.maxWidth ?? "max-w-[28rem]"),
    children: e.children
  })
}

function Dn(e) {
  return n.jsx("div", {
    className: "w-full h-full flex justify-center items-center flex-col",
    children: e.children
  })
}

function uc(e, t) {
  return e === "slide-down" ? {
    leave: `transition-[transform,opacity] ${t}`,
    leaveFrom: "opacity-100 translate-y-0",
    leaveTo: "-translate-y-4 opacity-0",
    enter: `transition-[transform,opacity] ${t}`,
    enterFrom: "opacity-0 -translate-y-4",
    enterTo: "translate-y-0 opacity-100"
  } : e === "slide-up" ? {
    leave: `transition-[transform,opacity] ${t}`,
    leaveFrom: "opacity-100 translate-y-0",
    leaveTo: "translate-y-4 opacity-0",
    enter: `transition-[transform,opacity] ${t}`,
    enterFrom: "opacity-0 translate-y-4",
    enterTo: "translate-y-0 opacity-100"
  } : e === "slide-full-left" ? {
    leave: `transition-[transform] ${t}`,
    leaveFrom: "translate-x-0",
    leaveTo: "-translate-x-full",
    enter: `transition-[transform] ${t}`,
    enterFrom: "-translate-x-full",
    enterTo: "translate-x-0"
  } : e === "slide-full-right" ? {
    leave: `transition-[transform] ${t}`,
    leaveFrom: "translate-x-0",
    leaveTo: "translate-x-full",
    enter: `transition-[transform] ${t}`,
    enterFrom: "translate-x-full",
    enterTo: "translate-x-0"
  } : e === "fade" ? {
    leave: `transition-[transform,opacity] ${t}`,
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
    enter: `transition-[transform,opacity] ${t}`,
    enterFrom: "opacity-0",
    enterTo: "opacity-100"
  } : {}
}

function ee(e) {
  const t = e.durationClass ?? "duration-200",
    s = uc(e.animation, t);
  return e.isChild ? n.jsx(tn.Child, {
    as: m.Fragment,
    ...s,
    children: n.jsx("div", {
      className: e.className,
      style: e.style,
      children: e.children
    })
  }) : n.jsx(tn, {
    show: e.show,
    as: m.Fragment,
    ...s,
    children: n.jsx("div", {
      className: e.className,
      style: e.style,
      children: e.children
    })
  })
}

function dc() {
  const e = Ue();
  return m.useMemo(() => Object.fromEntries(new URLSearchParams(e.search).entries()), [e.search])
}

function $t(e) {
  const t = dc(),
    s = Ue(),
    r = se(),
    a = t[e] ?? null,
    i = m.useCallback(o => {
      const l = new URLSearchParams(s.search);
      o ? l.set(e, o) : l.delete(e), r({
        search: l.toString()
      })
    }, [e, s.search, r]);
  return [a, i]
}
const Me = z(q(e => ({
  transition: null,
  routes: {},
  anchorPoint: null,
  setTransition(t) {
    e(s => {
      s.transition = t
    })
  },
  registerRoute(t) {
    e(s => {
      s.routes[t.id] = t
    })
  },
  setAnchorPoint(t) {
    e(s => {
      s.anchorPoint = t
    })
  }
})));

function Le(e, t) {
  return [t ?? "", ...e.split("/")].filter(r => r.length > 0)
}

function Te(e) {
  return `/${e.join("/")}`
}

function mc(e) {
  const [t] = $t("r"), s = Me(i => i.setAnchorPoint), r = m.useMemo(() => !!t && t.startsWith(`/${e}`), [t, e]), a = m.useCallback(() => {
    if (!r) return;
    const i = document.getElementById(`__overlayRouter::${e}`);
    if (i) {
      const o = i.getBoundingClientRect();
      s({
        h: o.height,
        w: o.width,
        x: o.x,
        y: o.y
      })
    }
  }, [r, s, e]);
  m.useEffect(() => {
    a()
  }, [r, a]), m.useEffect(() => {
    function i() {
      a()
    }
    return window.addEventListener("resize", i), () => {
      window.removeEventListener("resize", i)
    }
  }, [a])
}

function We(e) {
  const [t, s] = $t("r"), r = Me(f => f.transition), a = Me(f => f.setTransition), i = !!t && t.startsWith(`/${e}`);

  function o(f) {
    return Te(Le(f, e))
  }

  function l(f) {
    const v = t,
      p = Te(Le(f, e));
    a({
      from: v ?? "/",
      to: p
    }), s(p)
  }

  function c(f) {
    if (!r) return "none";
    const v = Te(Le(f, e));
    return v === r.to && r.from.startsWith(r.to) || v === r.from && r.to.startsWith(r.from) ? "yes" : "no"
  }

  function u(f) {
    return i && t === Te(Le(f, e))
  }

  function d() {
    return i
  }
  const b = m.useCallback(f => {
      t && !f && s(null), a(null)
    }, [s, t, a]),
    g = m.useCallback(function () {
      let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "/";
      a(null), s(Te(Le(f, e)))
    }, [e, s, a]);
  return {
    activeRoute: i ? Te(Le(t.slice(`/${e}`.length))) : "/",
    showBackwardsTransition: c,
    isCurrentPage: u,
    isOverlayActive: d,
    navigate: l,
    close: b,
    open: g,
    makePath: o,
    currentRoute: t
  }
}

function W(e) {
  const t = We(e);
  return {
    id: e,
    route: t.activeRoute,
    isRouterActive: t.isOverlayActive(),
    open: t.open,
    close: t.close,
    navigate: t.navigate
  }
}
const hc = function () {
    const {
      t
    } = I(), [s, r] = m.useState(!1);
    return n.jsx("div", {
      className: C("absolute w-10/12 max-w-[800px] bg-background-main p-20 rounded-lg select-none z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform", s ? "" : "hidden"),
      children: n.jsxs("div", {
        className: "w-full grid lg:grid-cols-[1fr,auto] gap-12 items-center",
        children: [n.jsxs("div", {
          className: "text-left",
          children: [n.jsx("h2", {
            className: "text-type-emphasis font-bold text-xl mb-6",
            children: t("player.turnstile.title")
          }), n.jsx("p", {
            children: t("player.turnstile.description")
          })]
        }), n.jsx(gr, {
          isInPopout: !0,
          onUpdateShow: a => r(a)
        })]
      })
    })
  },
  fc = hc;

function gc(e) {
  const t = We("hello world :)"),
    s = m.useRef(t);
  return m.useEffect(() => {
    const r = s.current;
    return r.close(), () => {
      r.close()
    }
  }, []), n.jsxs("div", {
    className: "popout-location",
    children: [n.jsx(fc, {}), e.children]
  })
}

function _r(e) {
  const [t, s] = m.useState(null), r = m.useRef(null), a = e.close;
  return m.useEffect(() => {
    var o;
    const i = (o = r.current) == null ? void 0 : o.closest(".popout-location");
    s(i ?? document.body)
  }, []), n.jsx("div", {
    ref: r,
    children: t ? Ja.createPortal(n.jsx(ee, {
      show: e.show,
      animation: "none",
      children: n.jsx(Za, {
        children: n.jsxs("div", {
          className: "popout-wrapper fixed overflow-hidden pointer-events-auto inset-0 z-[999] select-none",
          children: [n.jsx(ee, {
            animation: "fade",
            isChild: !0,
            children: n.jsx("div", {
              onClick: a,
              className: C({
                "absolute inset-0": !0,
                "bg-black opacity-90": e.darken
              })
            })
          }), n.jsxs(ee, {
            animation: "slide-up",
            className: "absolute inset-0 pointer-events-none",
            isChild: !0,
            children: [n.jsx("div", {
              tabIndex: 1,
              className: "focus:ring-0 focus:outline-none opacity-0"
            }), e.children]
          })]
        })
      })
    }), t) : null
  })
}

function Or(e) {
  const t = We(e.id),
    s = t.close;
  mc(e.id);
  const r = m.useCallback(() => {
    s()
  }, [s]);
  return n.jsx(_r, {
    close: r,
    show: t.isOverlayActive(),
    darken: e.darken,
    children: e.children
  })
}

function Bn(e) {
  const [t, s] = $t("m"), r = m.useCallback(() => s(e), [e, s]), a = m.useCallback(() => s(null), [s]);
  return {
    id: e,
    isShown: t === e,
    show: r,
    hide: a
  }
}

function xc(e) {
  return n.jsx("div", {
    className: "w-full max-w-[30rem] m-4",
    children: n.jsx("div", {
      className: "w-full bg-modal-background rounded-xl p-8 pointer-events-auto",
      children: e.children
    })
  })
}

function Mr(e) {
  const t = Bn(e.id);
  return n.jsxs(_r, {
    darken: !0,
    close: t.hide,
    show: t.isShown,
    children: [n.jsx(we, {
      children: n.jsx("html", {
        "data-no-scroll": !0
      })
    }), n.jsx("div", {
      className: "flex absolute inset-0 items-center justify-center flex-col",
      children: e.children
    })]
  })
}
const pc = function (t) {
    const [s, r] = m.useState(!1), a = m.useRef(null), {
      t: i
    } = I();
    let o = null;
    typeof t.error == "string" ? o = t.error : t.error.key ? o = `${t.error.type}: ${i(t.error.key)}` : t.error.message && (o = `${t.error.type}: ${i(t.error.message)}`);

    function l() {
      !t.error || !navigator.clipboard || (navigator.clipboard.writeText(`\`\`\`${o}\`\`\``), r(!0), a.current && clearTimeout(a.current), a.current = setTimeout(() => r(!1), 2e3))
    }
    return n.jsxs("div", {
      className: "bg-errors-card w-full rounded-lg p-6 text-left",
      children: [n.jsxs("div", {
        className: "border-errors-border flex items-center justify-between border-b pb-2",
        children: [n.jsx("span", {
          className: "font-medium text-white",
          children: i("errors.details")
        }), n.jsxs("div", {
          className: "flex items-center justify-center gap-3",
          children: [n.jsx(D, {
            theme: "secondary",
            padding: "p-2 h-10 min-w-[40px] md:px-4",
            onClick: () => l(),
            children: s ? n.jsxs(n.Fragment, {
              children: [n.jsx(P, {
                icon: w.CHECKMARK,
                className: "text-xs"
              }), n.jsx("span", {
                className: "hidden min-[400px]:inline-block ml-3",
                children: i("actions.copied")
              })]
            }) : n.jsxs(n.Fragment, {
              children: [n.jsx(P, {
                icon: w.COPY,
                className: "text-2xl"
              }), n.jsx("span", {
                className: "hidden min-[400px]:inline-block ml-3",
                children: i("actions.copy")
              })]
            })
          }), n.jsx(D, {
            theme: "secondary",
            padding: "p-2 md:px-2",
            onClick: t.onClose,
            children: n.jsx(P, {
              icon: w.X,
              className: "text-2xl"
            })
          })]
        })]
      }), n.jsx("div", {
        className: "pointer-events-auto mt-4 h-60 select-text overflow-y-auto whitespace-pre text-left",
        children: o
      })]
    })
  },
  Dr = pc;

function bc(e) {
  return !e.show || !e.error ? null : n.jsx("div", {
    className: "fixed inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-30 p-12",
    children: n.jsx("div", {
      className: "w-full max-w-2xl",
      children: n.jsx(Dr, {
        error: e.error,
        onClose: e.onClose
      })
    })
  })
}

function yc(e) {
  return e.error ? n.jsx(Mr, {
    id: e.id,
    children: n.jsx("div", {
      className: "pointer-events-auto w-11/12 max-w-2xl",
      children: n.jsx(Dr, {
        error: e.error,
        onClose: e.onClose
      })
    })
  }) : null
}

function vc(e) {
  const {
    t
  } = I(), [s, r] = m.useState(!1), a = 5, i = (e.errorInfo.componentStack || "").split(`
`).slice(0, a), o = `${e.error.toString()}
${i.join(`
`)}`;
  return n.jsx("div", {
    className: "relative flex min-h-screen flex-1 flex-col",
    children: n.jsx("div", {
      className: "flex h-full flex-1 flex-col items-center justify-center p-5 text-center",
      children: n.jsx(Dn, {
        children: n.jsxs(Mn, {
          maxWidth: "max-w-2xl w-9/10",
          children: [n.jsx(On, {
            icon: w.EYE_SLASH,
            children: t("errors.badge")
          }), n.jsx(nt, {
            children: t("errors.title")
          }), n.jsx(ne, {
            children: e.error.toString()
          }), n.jsx(bc, {
            show: s,
            onClose: () => r(!1),
            error: o
          }), n.jsxs("div", {
            className: "flex gap-3",
            children: [n.jsx(bs, {
              theme: "secondary",
              className: "mt-6 p-2.5 md:px-12",
              onClick: () => window.location.reload(),
              children: t("errors.reloadPage")
            }), n.jsx(bs, {
              theme: "purple",
              className: "mt-6 p-2.5 md:px-12",
              onClick: () => r(!0),
              children: t("errors.showError")
            })]
          })]
        })
      })
    })
  })
}
class jc extends m.Component {
  constructor(t) {
    super(t), this.state = {
      error: void 0
    }
  }
  componentDidCatch(t, s) {
    console.error("Render error caught", t, s), this.setState(r => ({
      ...r,
      error: {
        error: t,
        errorInfo: s
      }
    }))
  }
  render() {
    return this.state.error ? n.jsx(vc, {
      error: this.state.error.error,
      errorInfo: this.state.error.errorInfo
    }) : this.props.children
  }
}

function Ee(e) {
  const {
    t
  } = I();
  return n.jsxs("div", {
    className: C("flex items-center space-x-2 rounded-full px-4 py-2 text-type-logo", e.backgroundClass ?? "bg-pill-background bg-opacity-50", e.clickable ? "transition-[transform,background-color] hover:scale-105 hover:bg-pill-backgroundHover backdrop-blur-lg hover:text-type-logo active:scale-95" : ""),
    children: [n.jsx(P, {
      className: "text-xl",
      icon: w.MOVIE_WEB
    }), n.jsx("span", {
      className: ["font-semibold text-white", e.hideTextOnMobile ? "hidden sm:block" : ""].join(" "),
      children: t("global.name")
    })]
  })
}

function Br(e) {
  return n.jsx("div", {
    className: `mx-auto max-w-full px-8 ${e.ultraWide?"w-[1300px] sm:px-16":"w-[900px] sm:px-8"} ${e.classNames||""}`,
    children: e.children
  })
}

function Ht(e) {
  return n.jsx("div", {
    className: `mx-auto w-[600px] max-w-full px-8 sm:px-0 ${e.classNames||""}`,
    children: e.children
  })
}

function Un(e) {
  return n.jsx("div", {
    className: C("min-h-screen w-full flex justify-center p-8 py-24 items-center", e.classNames),
    children: n.jsx("div", {
      className: "w-[700px] max-w-full",
      children: e.children
    })
  })
}

function Ce(e) {
  const {
    t
  } = I(), s = t(e.k), r = t("global.pages.pagetitle", {
    title: s
  });
  return n.jsx(we, {
    children: n.jsx("title", {
      children: e.subpage ? r : s
    })
  })
}

function Ur() {
  return !!F().DMCA_EMAIL
}

function wc() {
  const {
    t: e
  } = I();
  return n.jsxs(ut, {
    children: [n.jsx(Ce, {
      subpage: !0,
      k: "global.pages.dmca"
    }), n.jsxs(Ht, {
      children: [n.jsx(Vt, {
        children: e("screens.dmca.title")
      }), n.jsx(ne, {
        children: e("screens.dmca.text")
      }), n.jsxs(ne, {
        className: "flex space-x-3 items-center",
        children: [n.jsx(P, {
          icon: w.MAIL
        }), n.jsx("span", {
          children: F().DMCA_EMAIL ?? ""
        })]
      })]
    })]
  })
}

function hn(e) {
  const t = se(),
    s = m.useCallback(() => {
      e.to && t(e.to)
    }, [t, e.to]);
  return n.jsxs("a", {
    href: e.href,
    target: e.href ? "_blank" : void 0,
    rel: "noreferrer",
    className: "tabbable rounded py-2 px-3 inline-flex cursor-pointer items-center space-x-3 transition-colors duration-200 hover:text-type-emphasis",
    onClick: e.to ? s : void 0,
    children: [n.jsx(P, {
      icon: e.icon,
      className: "text-2xl"
    }), n.jsx("span", {
      className: "font-medium",
      children: e.children
    })]
  })
}

function Ns() {
  const {
    t: e
  } = I();
  return Ur() ? n.jsx(hn, {
    to: "/dmca",
    icon: w.DRAGON,
    children: e("footer.links.dmca")
  }) : null
}

function kc() {
  const {
    t: e
  } = I();
  return n.jsx("footer", {
    className: "mt-16 border-t border-type-divider py-16 md:py-8",
    children: n.jsxs(Br, {
      ultraWide: !0,
      classNames: "grid md:grid-cols-2 gap-16 md:gap-8",
      children: [n.jsxs("div", {
        children: [n.jsx("div", {
          className: "inline-block",
          children: n.jsx(Ee, {})
        }), n.jsx("p", {
          className: "mt-4 lg:max-w-[400px]",
          children: e("footer.tagline")
        })]
      }), n.jsxs("div", {
        className: "md:text-right",
        children: [n.jsx("h3", {
          className: "font-semibold text-type-emphasis",
          children: e("footer.legal.disclaimer")
        }), n.jsx("p", {
          className: "mt-3",
          children: e("footer.legal.disclaimerText")
        })]
      }), n.jsxs("div", {
        className: "flex flex-wrap gap-[0.5rem] -ml-3",
        children: [n.jsx(hn, {
          icon: w.GITHUB,
          href: F().GITHUB_LINK,
          children: e("footer.links.github")
        }), n.jsx(hn, {
          icon: w.DISCORD,
          href: F().DISCORD_LINK,
          children: e("footer.links.discord")
        }), n.jsx("div", {
          className: "inline md:hidden",
          children: n.jsx(Ns, {})
        })]
      }), n.jsx("div", {
        className: "hidden items-center justify-end md:flex -mr-3",
        children: n.jsx(Ns, {})
      })]
    })
  })
}

function Fr(e) {
  return n.jsxs("div", {
    className: ["flex min-h-screen flex-col", e.className || ""].join(" "),
    children: [n.jsx("div", {
      style: {
        flex: "1 0 auto"
      },
      children: e.children
    }), n.jsx(kc, {})]
  })
}

function Vr(e) {
  return n.jsxs("div", {
    className: "relative inline-block",
    children: [n.jsx("div", {
      className: C(e.sizeClass, "rounded-full overflow-hidden flex items-center justify-center text-white"),
      style: {
        background: `linear-gradient(to bottom right, ${e.profile.colorA}, ${e.profile.colorB})`
      },
      children: n.jsx(rr, {
        className: e.iconClass,
        icon: e.profile.icon
      })
    }), e.bottom ? n.jsx("div", {
      className: "absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2",
      children: e.bottom
    }) : null]
  })
}

function $r(e) {
  const t = $(),
    s = m.useMemo(() => t.account && t.account.seed ? Rn(t.account.seed) : null, [t]);
  if (!t.account || t.account === null) return null;
  const r = s ? Ar(t.account.deviceName, s) : "...";
  return n.jsxs(n.Fragment, {
    children: [n.jsx(Vr, {
      profile: t.account.profile,
      sizeClass: e.sizeClass ?? "w-[1.5rem] h-[1.5rem] ssm:w-[2rem] ssm:h-[2rem]",
      iconClass: e.iconClass,
      bottom: e.bottom
    }), e.withName && s ? n.jsx("span", {
      className: "hidden md:inline-block",
      children: r.length >= 20 ? `${r.slice(0,19)}…` : r
    }) : null]
  })
}

function Nc(e) {
  return n.jsx("div", {
    className: "relative inline-block p-1 text-type-dimmed",
    children: n.jsx(P, {
      className: e.iconClass ?? "text-base ssm:text-xl",
      icon: w.MENU
    })
  })
}
const Sc = function (t) {
    const s = t.clickable ? "cursor-pointer hover:scale-110 hover:bg-pill-backgroundHover hover:text-white active:scale-125" : "",
      r = t.transparent ? "bg-opacity-0 hover:bg-opacity-50" : "",
      a = t.active ? "bg-pill-backgroundHover text-white" : "",
      i = t.downsized ? "h-10 w-10" : "h-12 w-12";
    return n.jsx("div", {
      className: t.className || void 0,
      onClick: t.onClick,
      children: n.jsx("div", {
        className: `flex items-center justify-center rounded-full border-2 border-transparent bg-pill-background bg-opacity-100 transition-[background-color,color,transform,border-color] duration-75 ${r} ${s} ${a} ${i}`,
        children: n.jsx(P, {
          icon: t.icon
        })
      })
    })
  },
  Tt = Sc;

function Ss() {
  return n.jsx("hr", {
    className: "border-0 w-full h-px bg-dropdown-border"
  })
}
const Ec = function (t) {
    const s = se(),
      r = a => {
        a.startsWith("http") ? window.open(a, "_blank") : s(a)
      };
    return n.jsx("a", {
      tabIndex: 0,
      href: t.href,
      onClick: a => {
        var i;
        a.preventDefault(), t.href ? r(t.href) : (i = t.onClick) == null || i.call(t)
      },
      className: t.className,
      children: t.children
    })
  },
  Hr = Ec;

function Pe(e) {
  return n.jsxs(Hr, {
    onClick: e.onClick,
    href: e.href,
    className: C("tabbable cursor-pointer flex gap-3 items-center m-3 p-1 rounded font-medium transition-colors duration-100", e.highlight ? "text-dropdown-highlight hover:text-dropdown-highlightHover" : "text-dropdown-text hover:text-white", e.className),
    children: [e.icon ? n.jsx(P, {
      icon: e.icon,
      className: "text-xl"
    }) : null, e.children]
  })
}

function Yt(e) {
  return n.jsx(Hr, {
    href: e.href,
    className: "tabbable w-11 h-11 rounded-full bg-dropdown-contentBackground text-dropdown-text hover:text-white transition-colors duration-100 flex justify-center items-center",
    children: n.jsx(P, {
      className: "text-2xl",
      icon: e.icon
    })
  })
}

function Cc(e) {
  const {
    t
  } = I(), [s, r] = m.useState(!1), a = $(u => {
    var d;
    return (d = u.account) == null ? void 0 : d.deviceName
  }), i = $(u => {
    var d;
    return (d = u.account) == null ? void 0 : d.seed
  }), o = m.useMemo(() => i ? Rn(i) : null, [i]), {
    logout: l
  } = He();
  m.useEffect(() => {
    function u(d) {
      d.target.closest(".is-dropdown") || r(!1)
    }
    return window.addEventListener("click", u), () => window.removeEventListener("click", u)
  }, []);
  const c = m.useCallback(() => {
    r(u => !u)
  }, []);
  return n.jsxs("div", {
    className: "relative is-dropdown",
    children: [n.jsxs("div", {
      className: "cursor-pointer tabbable rounded-full flex gap-2 text-white items-center py-2 px-3 bg-pill-background bg-opacity-50 hover:bg-pill-backgroundHover backdrop-blur-lg transition-[background,transform] duration-100 hover:scale-105",
      tabIndex: 0,
      onClick: c,
      onKeyUp: u => u.key === "Enter" && c(),
      children: [e.children, n.jsx(P, {
        className: C("text-xl transition-transform duration-100", s ? "rotate-180" : ""),
        icon: w.CHEVRON_DOWN
      })]
    }), n.jsx(ee, {
      animation: "slide-down",
      show: s,
      children: n.jsxs("div", {
        className: "rounded-lg absolute w-64 bg-dropdown-altBackground top-full mt-3 right-0",
        children: [a && o ? n.jsxs(Pe, {
          className: "text-white",
          href: "/settings",
          children: [n.jsx($r, {}), Ar(a, o)]
        }) : n.jsx(Pe, {
          href: "/login",
          icon: w.RISING_STAR,
          highlight: !0,
          children: t("navigation.menu.register")
        }), n.jsx(Ss, {}), n.jsx(Pe, {
          href: "/settings",
          icon: w.SETTINGS,
          children: t("navigation.menu.settings")
        }), n.jsx(Pe, {
          href: "/about",
          icon: w.CIRCLE_QUESTION,
          children: t("navigation.menu.about")
        }), n.jsx(Pe, {
          href: F().DONATION_LINK,
          icon: w.DONATION,
          children: t("navigation.menu.donation")
        }), a ? n.jsx(Pe, {
          className: "!text-type-danger opacity-75 hover:opacity-100",
          icon: w.LOGOUT,
          onClick: l,
          children: t("navigation.menu.logout")
        }) : null, n.jsx(Ss, {}), n.jsxs("div", {
          className: "my-4 flex justify-center items-center gap-4",
          children: [n.jsx(Yt, {
            href: F().DISCORD_LINK,
            icon: w.DISCORD
          }), n.jsx(Yt, {
            href: F().GITHUB_LINK,
            icon: w.GITHUB
          }), n.jsx(Yt, {
            href: F().DONATION_LINK,
            icon: w.DONATION
          })]
        })]
      })
    })]
  })
}
class Ic {
  constructor(t) {
    this.x = 0, this.y = 0, this.radius = 0, this.direction = 0, this.speed = 0, this.lifetime = 0, this.ran = 0, this.image = null, this.size = 10;
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      horizontalMotion: !1,
      sizeRange: [10, 10]
    };
    s.imgSrc && (this.image = new Image, this.image.src = s.imgSrc), this.options = s, this.reset(t), this.initialize(t)
  }
  reset(t) {
    this.x = Math.round(Math.random() * t.width / 2 + t.width / 4), this.y = Math.random() * 100 + 5, this.radius = 1 + Math.floor(Math.random() * .5), this.direction = Math.random() * Math.PI / 2 + Math.PI / 4, this.speed = .02 + Math.random() * .08;
    const s = 60;
    this.lifetime = s * 3 + Math.random() * (s * 30), this.size = this.options.sizeRange ? Math.random() * (this.options.sizeRange[1] - this.options.sizeRange[0]) + this.options.sizeRange[0] : 10, this.options.horizontalMotion && (this.direction = Math.random() <= .5 ? 0 : Math.PI, this.lifetime = 30 * s), this.ran = 0
  }
  initialize(t) {
    this.ran = Math.random() * this.lifetime;
    const s = this.speed;
    this.speed = Math.random() * this.lifetime * s, this.update(t), this.speed = s
  }
  update(t) {
    this.ran += 1;
    const s = this.speed * Math.cos(this.direction),
      r = this.speed * Math.sin(this.direction);
    this.x += s, this.y += r, this.ran > this.lifetime && this.reset(t)
  }
  render(t) {
    const s = t.getContext("2d");
    if (!s) return;
    s.save(), s.beginPath();
    const r = this.ran / this.lifetime,
      a = (r - r * r) * 4;
    if (s.globalAlpha = Math.max(0, a * .8), this.image) {
      s.translate(this.x, this.y);
      const i = this.size,
        o = this.image.naturalWidth / this.image.naturalHeight * i;
      s.rotate(this.direction - Math.PI), s.drawImage(this.image, -i / 2, o, o, i)
    } else s.ellipse(this.x, this.y, this.radius, this.radius * 1.5, this.direction, 0, Math.PI * 2), s.fillStyle = "white", s.fill();
    s.restore()
  }
}

function Lc() {
  const e = m.useRef(null);
  return m.useEffect(() => {
    var f, v;
    if (!e.current) return;
    const t = e.current,
      s = [];
    t.width = t.scrollWidth, t.height = t.scrollHeight;
    const r = 20;
    let a = r,
      i = [];
    const o = new Date,
      l = o.getMonth(),
      c = o.getDate();
    l === 11 && c >= 24 && c <= 26 && (i = [{
      image: "/lightbar-images/snowflake.svg",
      sizeRange: [4, 15]
    }, {
      image: "/lightbar-images/santa.png",
      sizeRange: [15, 30]
    }]), Math.floor(Math.random() * 600) === 69 && (i = [{
      image: "/lightbar-images/fishie.png",
      sizeRange: [10, 11]
    }], a = r / 2);
    for (let p = 0; p < r; p += 1) {
      const y = i && p <= a,
        j = Math.floor(Math.random() * i.length),
        R = (f = i[j]) == null ? void 0 : f.sizeRange,
        T = (v = i[j]) == null ? void 0 : v.image,
        L = new Ic(t, {
          imgSrc: y ? T : void 0,
          horizontalMotion: T == null ? void 0 : T.includes("fishie"),
          sizeRange: R
        });
      s.push(L)
    }
    let d = !0,
      b = null;

    function g() {
      if (t.getContext("2d")) {
        if (d) {
          for (const y of s) y.update(t);
          d = !1
        }
        t.width = t.scrollWidth, t.height = t.scrollHeight;
        for (const y of s) y.render(t);
        b = requestAnimationFrame(g)
      }
    }
    const h = setInterval(() => {
      d = !0
    }, 1e3 / 120);
    return g(), () => {
      b && cancelAnimationFrame(b), clearInterval(h)
    }
  }, []), n.jsx("canvas", {
    className: "particles",
    ref: e
  })
}
const Tc = function (t) {
    return n.jsx("div", {
      className: "absolute inset-0 w-full h-[680px] overflow-hidden pointer-events-none -mt-64",
      children: n.jsx("div", {
        className: "max-w-screen w-full h-[680px] relative pt-64",
        children: n.jsx("div", {
          className: t.className,
          children: n.jsxs("div", {
            className: "lightbar",
            children: [n.jsx(Lc, {}), n.jsx("div", {
              className: "lightbar-visual"
            })]
          })
        })
      })
    })
  },
  Pc = Tc,
  le = z(q(e => ({
    banners: [],
    isOnline: !0,
    isTurnstile: !1,
    location: null,
    ignoredBannerIds: [],
    updateOnline(t) {
      e(s => {
        s.isOnline = t
      })
    },
    updateTurnstile(t) {
      e(s => {
        s.isTurnstile = t
      })
    },
    setLocation(t) {
      e(s => {
        s.location = t
      })
    },
    showBanner(t) {
      e(s => {
        s.banners.find(r => r.id === t) || s.ignoredBannerIds.includes(t) || s.banners.push({
          id: t,
          height: 0
        })
      })
    },
    hideBanner(t) {
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      e(r => {
        s && r.ignoredBannerIds.push(t), r.banners = r.banners.filter(a => a.id !== t)
      })
    },
    updateHeight(t, s) {
      e(r => {
        const a = r.banners.find(i => i.id === t);
        a && (a.height = s)
      })
    }
  })));

function Wt(e) {
  const t = e ?? null,
    s = le(i => i.banners),
    r = le(i => i.location),
    a = s.reduce((i, o) => i + o.height, 0);
  return t !== r ? 0 : a
}

function Rc(e) {
  const [t, {
    height: s
  }] = ei(), r = le(o => o.updateHeight), a = le(o => o.showBanner), i = le(o => o.hideBanner);
  return m.useEffect(() => (a(e), () => {
    i(e)
  }), [a, i, e]), m.useEffect(() => {
    r(e, s)
  }, [s, e, r]), [t]
}
const Ac = function (t) {
    const s = Wt(),
      {
        loggedIn: r
      } = He();
    return n.jsxs(n.Fragment, {
      children: [t.noLightbar ? null : n.jsx("div", {
        className: "absolute inset-x-0 top-0 flex h-[88px] items-center justify-center",
        style: {
          top: `${s}px`
        },
        children: n.jsx("div", {
          className: "absolute inset-x-0 -mt-[22%] flex items-center sm:mt-0",
          children: n.jsx(Pc, {})
        })
      }), n.jsx("div", {
        className: "fixed z-[20] pointer-events-none left-0 right-0 top-0 min-h-[150px]",
        style: {
          top: `${s}px`
        },
        children: n.jsxs("div", {
          className: C("fixed left-0 right-0 h-20 flex items-center", t.doBackground ? "bg-background-main border-b border-utils-divider border-opacity-50" : null),
          children: [t.doBackground ? n.jsx("div", {
            className: "absolute w-full h-full inset-0 overflow-hidden",
            children: n.jsx(ct, {
              positionClass: "absolute"
            })
          }) : null, n.jsx("div", {
            className: "opacity-0 absolute inset-0 block h-20 pointer-events-auto"
          }), n.jsx("div", {
            className: `${t.bg?"opacity-100":"opacity-0"} absolute inset-0 block h-24 bg-background-main transition-opacity duration-300`,
            children: n.jsx("div", {
              className: "absolute -bottom-24 h-24 w-full bg-gradient-to-b from-background-main to-transparent"
            })
          })]
        })
      }), n.jsx("div", {
        className: "fixed pointer-events-none left-0 right-0 z-[60] top-0 min-h-[150px]",
        style: {
          top: `${s}px`
        },
        children: n.jsx("div", {
          className: C("fixed left-0 right-0 flex items-center"),
          children: n.jsxs("div", {
            className: "px-7 py-5 relative z-[60] flex flex-1 items-center justify-between",
            children: [n.jsxs("div", {
              className: "flex items-center space-x-1.5 ssm:space-x-3 pointer-events-auto",
              children: [n.jsx(at, {
                className: "block tabbable rounded-full text-xs ssm:text-base",
                to: "/",
                children: n.jsx(Ee, {
                  clickable: !0
                })
              }), n.jsx("a", {
                href: F().DISCORD_LINK,
                target: "_blank",
                rel: "noreferrer",
                className: "text-xl text-white tabbable rounded-full",
                children: n.jsx(Tt, {
                  icon: w.DISCORD,
                  clickable: !0,
                  downsized: !0
                })
              }), n.jsx("a", {
                href: F().GITHUB_LINK,
                target: "_blank",
                rel: "noreferrer",
                className: "text-xl text-white tabbable rounded-full",
                children: n.jsx(Tt, {
                  icon: w.GITHUB,
                  clickable: !0,
                  downsized: !0
                })
              })]
            }), n.jsx("div", {
              className: "relative pointer-events-auto",
              children: n.jsx(Cc, {
                children: r ? n.jsx($r, {
                  withName: !0
                }) : n.jsx(Nc, {})
              })
            })]
          })
        })
      })]
    })
  },
  Fn = Ac;

function ct(e) {
  return n.jsxs(n.Fragment, {
    children: [n.jsx("div", {
      className: C(e.positionClass ?? "fixed", "top-0 -right-48 rotate-[32deg] w-[50rem] h-[15rem] rounded-[70rem] bg-background-accentA blur-[100px] pointer-events-none opacity-25 transition-colors duration-75")
    }), n.jsx("div", {
      className: C(e.positionClass ?? "fixed", "top-0 right-48 rotate-[32deg] w-[50rem] h-[15rem] rounded-[70rem] bg-background-accentB blur-[100px] pointer-events-none opacity-25 transition-colors duration-75")
    })]
  })
}

function ut(e) {
  return n.jsxs("div", {
    className: "bg-background-main",
    style: {
      backgroundImage: "linear-gradient(to bottom, var(--tw-gradient-from), var(--tw-gradient-to) 800px)"
    },
    children: [n.jsx(ct, {}), n.jsxs(Fr, {
      children: [n.jsx(Fn, {
        doBackground: !0,
        noLightbar: !0
      }), n.jsx("div", {
        className: "mt-40 relative",
        children: e.children
      })]
    })]
  })
}

function _c() {
  const {
    t: e
  } = I();
  return n.jsxs("div", {
    className: "flex flex-col justify-center items-center h-screen text-center font-medium",
    children: [n.jsx(ct, {}), n.jsx("div", {
      className: "right-[calc(2rem+env(safe-area-inset-right))] top-6 absolute",
      children: n.jsx(Ee, {})
    }), n.jsx($e, {}), n.jsx("p", {
      className: "max-w-[19rem] mt-3 mb-12 text-type-secondary",
      children: e("screens.migration.inProgress")
    })]
  })
}

function Wr(e) {
  return n.jsxs("div", {
    className: "flex flex-col justify-center items-center h-screen text-center font-medium",
    children: [n.jsx(ct, {}), n.jsx("div", {
      className: "right-[calc(2rem+env(safe-area-inset-right))] top-6 absolute",
      children: n.jsx(Ee, {})
    }), e.iconSlot ? e.iconSlot : null, n.jsx("div", {
      className: "max-w-[19rem] mt-3 mb-12 text-type-secondary",
      children: e.children
    })]
  })
}

function Oc() {
  const e = le(s => s.updateOnline),
    t = m.useRef(!0);
  m.useEffect(() => {
    let s = 0,
      r = null;
    const a = setInterval(() => {
      if (s += 1, t.current && s < 10) return;
      s = 0, r && r.abort(), r = new AbortController;
      const i = r.signal;
      fetch("/ping.txt", {
        signal: i
      }).then(() => {
        e(!0), t.current = !0
      }).catch(o => {
        o.name !== "AbortError" && (e(!1), t.current = !1)
      })
    }, 5e3);
    return () => {
      clearInterval(a), r && r.abort()
    }
  }, [e])
}
const Mc = function (t) {
    return n.jsx("ol", {
      children: t.items.map((s, r) => n.jsxs("li", {
        className: C("grid grid-cols-[auto,1fr] gap-6", r !== t.items.length - 1 ? "pb-12" : void 0),
        children: [n.jsxs("div", {
          className: "relative z-0",
          children: [n.jsx("div", {
            className: "w-7 h-7 rounded-full bg-about-circle text-about-circleText font-medium flex justify-center items-center relative z-10",
            children: r + 1
          }), r !== t.items.length - 1 ? n.jsx("div", {
            className: "h-[calc(100%+1.5rem)] w-px absolute top-6 left-1/2 transform -translate-x-1/2",
            style: {
              backgroundImage: "linear-gradient(to bottom, transparent 5px, #1F1F29 5px, #1F1F29 10px)",
              backgroundSize: "10px 10px",
              backgroundRepeat: "Repeat"
            }
          }) : null]
        }), n.jsx("div", {
          children: s
        })]
      }))
    })
  },
  Dc = Mc;

function Xt(e) {
  return n.jsxs(n.Fragment, {
    children: [n.jsx("p", {
      className: "text-white mb-2 font-medium",
      children: e.title
    }), n.jsx("div", {
      className: "text-type-text",
      children: e.children
    })]
  })
}

function Bc() {
  const {
    t: e
  } = I();
  return n.jsxs(ut, {
    children: [n.jsx(Ce, {
      subpage: !0,
      k: "global.pages.about"
    }), n.jsxs(Ht, {
      children: [n.jsx(Vt, {
        children: e("about.title")
      }), n.jsx(ne, {
        children: e("about.description")
      }), n.jsx(de, {
        children: e("about.faqTitle")
      }), n.jsx(Dc, {
        items: [n.jsx(Xt, {
          title: e("about.q1.title"),
          children: e("about.q1.body")
        }), n.jsx(Xt, {
          title: e("about.q2.title"),
          children: e("about.q2.body")
        }), n.jsx(Xt, {
          title: e("about.q3.title"),
          children: e("about.q3.body")
        })]
      })]
    })]
  })
}

function Gt(e) {
  return n.jsx("hr", {
    className: C("w-full h-px border-0 bg-utils-divider bg-opacity-50", e.marginClass ?? "my-8")
  })
}

function Jt(e) {
  return n.jsxs(n.Fragment, {
    children: [n.jsxs("div", {
      className: "flex",
      children: [n.jsx("p", {
        className: "flex-1 font-bold text-white",
        children: e.name
      }), n.jsx("p", {
        children: e.children
      })]
    }), n.jsx(Gt, {
      marginClass: "my-3"
    })]
  })
}

function Uc() {
  const e = F().NORMAL_ROUTER,
    t = F().APP_VERSION,
    s = F().BACKEND_URL;
  return n.jsxs(n.Fragment, {
    children: [n.jsx(de, {
      className: "mb-8 mt-12",
      children: "Configured values"
    }), n.jsx(Jt, {
      name: "Routing mode",
      children: e ? "Normal routing" : "Hash based routing"
    }), n.jsxs(Jt, {
      name: "Application version",
      children: ["v", t]
    }), n.jsx(Jt, {
      name: "Backend URL",
      children: s
    })]
  })
}

function Vn(e) {
  return n.jsx("div", {
    className: "bg-video-scraping-card rounded-xl p-8",
    children: e.children
  })
}

function Fc() {
  const e = F().TMDB_READ_API_KEY,
    [t, s] = m.useState({
      hasTested: !1,
      success: !1,
      errorText: ""
    }),
    [r, a] = fe(async () => {
      if (s({
          hasTested: !1,
          success: !1,
          errorText: ""
        }), !e || e.length === 0) return s({
        hasTested: !0,
        success: !1,
        errorText: "TMDB API key is not set"
      });
      if (!(e.split(".").length > 2)) return s({
        hasTested: !0,
        success: !1,
        errorText: "TMDB API key is not a read only key"
      });
      try {
        await Bt("556574", te.MOVIE)
      } catch {
        return s({
          hasTested: !0,
          success: !1,
          errorText: "Failed to call TMDB, double check API key and your internet connection"
        })
      }
      return s({
        hasTested: !0,
        success: !0,
        errorText: ""
      })
    }, [e, s]);
  return n.jsxs(n.Fragment, {
    children: [n.jsx(de, {
      className: "mb-8 mt-12",
      children: "TMDB test"
    }), n.jsx(Vn, {
      children: n.jsxs("div", {
        className: "flex items-center",
        children: [n.jsx("div", {
          className: "flex-1",
          children: t.hasTested ? t.success ? n.jsxs("p", {
            className: "flex items-center",
            children: [n.jsx(P, {
              icon: w.CIRCLE_CHECK,
              className: "text-video-scraping-success mr-2"
            }), "TMDB is working as expected"]
          }) : n.jsxs(n.Fragment, {
            children: [n.jsxs("p", {
              className: "text-white font-bold w-full mb-3 flex items-center gap-1",
              children: [n.jsx(P, {
                icon: w.CIRCLE_EXCLAMATION,
                className: "text-video-scraping-error mr-2"
              }), "TMDB is not working"]
            }), n.jsx("p", {
              children: t.errorText
            })]
          }) : n.jsx("p", {
            children: "Run the test to validate TMDB"
          })
        }), n.jsxs(D, {
          theme: "purple",
          onClick: a,
          children: [r.loading ? n.jsx(Ut, {
            className: "text-base mr-2"
          }) : null, "Test TMDB"]
        })]
      })
    })]
  })
}

function bt(e) {
  return n.jsxs("div", {
    className: "flex mb-2",
    children: [n.jsx(P, {
      icon: e.errored ? w.WARNING : e.success ? w.CIRCLE_CHECK : w.EYE_SLASH,
      className: C({
        "text-xl mr-2 mt-0.5": !0,
        "text-video-scraping-error": e.errored,
        "text-video-scraping-noresult": !e.errored && !e.success,
        "text-video-scraping-success": e.success
      })
    }), n.jsxs("div", {
      className: "flex-1",
      children: [n.jsx("p", {
        className: "text-white font-bold",
        children: e.name
      }), e.errorText ? n.jsx("p", {
        children: e.errorText
      }) : null]
    })]
  })
}

function Vc() {
  const e = m.useMemo(() => Ln().map((l, c) => ({
      id: c.toString(),
      url: l
    })), []),
    [t, s] = m.useState([]),
    [r, a] = m.useState(!1),
    [i, o] = fe(async () => {
      a(!0);

      function l(u, d) {
        s(b => [...b.filter(g => g.id !== u), d])
      }
      s([]);
      const c = e.map(async u => {
        try {
          if (u.url.endsWith("/")) {
            l(u.id, {
              id: u.id,
              status: "error",
              error: new Error("URL ends with slash")
            });
            return
          }
          await Tn(u.url, "https://postman-echo.com/get", {}), l(u.id, {
            id: u.id,
            status: "success"
          })
        } catch (d) {
          const b = d;
          b.message = b.message.replace(u.url, "WORKER_URL"), l(u.id, {
            id: u.id,
            status: "error",
            error: b
          })
        }
      });
      await Promise.all(c), setTimeout(() => a(!1), 5e3)
    }, [e, s]);
  return n.jsxs(n.Fragment, {
    children: [n.jsx(de, {
      className: "!mb-0 mt-12",
      children: "Worker tests"
    }), n.jsxs("p", {
      className: "mb-8 mt-2",
      children: [e.length, " worker(s) registered"]
    }), n.jsxs(Vn, {
      children: [e.map((l, c) => {
        var b;
        const u = t.find(g => g.id === l.id),
          d = `Worker ${c+1}`;
        return u ? u.status === "error" ? n.jsx(bt, {
          name: d,
          errored: !0,
          errorText: (b = u.error) == null ? void 0 : b.toString()
        }, l.id) : u.status === "success" ? n.jsx(bt, {
          name: d,
          success: !0
        }, l.id) : n.jsx(bt, {
          name: d
        }, l.id) : n.jsx(bt, {
          name: d
        }, l.id)
      }), n.jsx(Gt, {}), n.jsx("div", {
        className: "flex justify-end",
        children: n.jsx(D, {
          theme: "purple",
          loading: i.loading,
          onClick: r ? void 0 : o,
          disabled: r,
          children: "Test workers"
        })
      })]
    })]
  })
}
async function Gr(e) {
  return V("/meta", {
    baseURL: e
  })
}

function $c() {
  var i, o, l, c;
  const e = F().BACKEND_URL,
    [t, s] = m.useState({
      hasTested: !1,
      success: !1,
      errorText: "",
      value: null
    }),
    [r, a] = fe(async () => {
      if (s({
          hasTested: !1,
          success: !1,
          errorText: "",
          value: null
        }), !e) return s({
        hasTested: !0,
        success: !1,
        errorText: "Backend URL is not set",
        value: null
      });
      try {
        const u = await Gr(e);
        return s({
          hasTested: !0,
          success: !0,
          errorText: "",
          value: u
        })
      } catch {
        return s({
          hasTested: !0,
          success: !1,
          errorText: "Failed to call backend, double check the URL, your internet connection, and ensure CORS is properly configured on your backend.",
          value: null
        })
      }
    }, [s]);
  return n.jsxs(n.Fragment, {
    children: [n.jsx(de, {
      className: "mb-8 mt-12",
      children: "Backend API test"
    }), n.jsxs(Vn, {
      children: [n.jsx("div", {
        children: n.jsx("div", {
          className: "flex-1",
          children: t.hasTested && t.success ? n.jsxs(n.Fragment, {
            children: [n.jsxs("p", {
              children: [n.jsx("span", {
                className: "inline-block w-36 text-white font-medium",
                children: "Version:"
              }), (i = t.value) == null ? void 0 : i.version]
            }), n.jsxs("p", {
              children: [n.jsx("span", {
                className: "inline-block w-36 text-white font-medium",
                children: "Backend name:"
              }), (o = t.value) == null ? void 0 : o.name]
            }), n.jsxs("p", {
              children: [n.jsx("span", {
                className: "inline-block w-36 text-white font-medium",
                children: "Description:"
              }), ((l = t.value) == null ? void 0 : l.description) ?? "Not set"]
            }), n.jsxs("p", {
              children: [n.jsx("span", {
                className: "inline-block w-36 text-white font-medium",
                children: "Captcha enabled:"
              }), (c = t.value) != null && c.hasCaptcha ? "Yes" : "No"]
            }), n.jsx(Gt, {})]
          }) : null
        })
      }), n.jsxs("div", {
        className: "w-full flex gap-6 justify-between items-center",
        children: [t.hasTested ? t.success ? n.jsxs("p", {
          className: "flex items-center text-md",
          children: [n.jsx(P, {
            icon: w.CIRCLE_CHECK,
            className: "text-video-scraping-success mr-2"
          }), "Backend is working as expected"]
        }) : n.jsxs("div", {
          children: [n.jsxs("p", {
            className: "text-white font-bold w-full mb-3 flex items-center gap-1",
            children: [n.jsx(P, {
              icon: w.CIRCLE_EXCLAMATION,
              className: "text-video-scraping-error mr-2"
            }), "Backend is not working"]
          }), n.jsx("p", {
            children: t.errorText
          })]
        }) : n.jsx("p", {
          children: "Run the test to validate backend"
        }), n.jsx(D, {
          theme: "purple",
          loading: r.loading,
          className: "whitespace-nowrap",
          onClick: a,
          children: "Test backend"
        })]
      })]
    })]
  })
}

function Hc() {
  return n.jsx(ut, {
    children: n.jsxs(Ht, {
      children: [n.jsx(Vt, {
        children: "Admin tools"
      }), n.jsx(ne, {
        children: "Useful tools to test out your current deployment"
      }), n.jsx(Uc, {}), n.jsx($c, {}), n.jsx(Vc, {}), n.jsx(Fc, {})]
    })
  })
}

function Wc(e) {
  return n.jsx("div", {
    className: "relative my-4 max-w-[25rem]",
    children: n.jsx(ft, {
      value: e.selectedItem,
      onChange: e.setSelectedItem,
      children: () => n.jsxs(n.Fragment, {
        children: [n.jsxs(ft.Button, {
          className: "relative w-full rounded-lg bg-dropdown-background hover:bg-dropdown-hoverBackground py-3 pl-3 pr-10 text-left text-white shadow-md focus:outline-none tabbable cursor-pointer",
          children: [n.jsxs("span", {
            className: "flex gap-4 items-center truncate",
            children: [e.selectedItem.leftIcon ? e.selectedItem.leftIcon : null, e.selectedItem.name]
          }), n.jsx("span", {
            className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
            children: n.jsx(P, {
              icon: w.UP_DOWN_ARROW,
              className: "transform transition-transform text-xl text-dropdown-secondary"
            })
          })]
        }), n.jsx(tn, {
          as: m.Fragment,
          leave: "transition ease-in duration-100",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: n.jsx(ft.Options, {
            className: "absolute left-0 right-0 top-10 z-[1] mt-4 max-h-60 overflow-auto rounded-md bg-dropdown-background py-1 text-white shadow-lg ring-1 ring-black ring-opacity-5 scrollbar-thin scrollbar-track-background-secondary scrollbar-thumb-type-secondary focus:outline-none sm:top-10",
            children: e.options.map(t => n.jsxs(ft.Option, {
              className: s => {
                let {
                  active: r
                } = s;
                return `cursor-pointer flex gap-4 items-center relative select-none py-3 pl-4 pr-4 ${r?"bg-background-secondaryHover text-type-link":"text-white"}`
              },
              value: t,
              children: [t.leftIcon ? t.leftIcon : null, t.name]
            }, t.id))
          })
        })]
      })
    })
  })
}
const Gc = e => ({
    casting: {
      instance: null,
      player: null,
      controller: null,
      setInstance(t) {
        e(s => {
          s.casting.instance = t
        })
      },
      setPlayer(t) {
        e(s => {
          s.casting.player = t
        })
      },
      setController(t) {
        e(s => {
          s.casting.controller = t
        })
      },
      setIsCasting(t) {
        e(s => {
          s.interface.isCasting = t
        })
      },
      clear() {
        e(t => {
          t.casting.instance = null
        })
      }
    }
  }),
  Kc = {
    unknown: 0,
    360: 10,
    480: 20,
    720: 30,
    1080: 40,
    "4k": 25
  },
  Ne = Object.entries(Kc).sort((e, t) => t[1] - e[1]).map(e => e[0]);

function Kr(e, t) {
  if (t.automaticQuality || t.lastChosenQuality === null || t.lastChosenQuality === "unknown") return Ne.find(a => e.includes(a));
  const s = Ne.indexOf(t.lastChosenQuality);
  let r;
  for (let a = s; a < Ne.length; a += 1)
    if (e.includes(Ne[a])) {
      r = Ne[a];
      break
    } if (r) return r;
  for (let a = s; a >= 0; a -= 1)
    if (e.includes(Ne[a])) {
      r = Ne[a];
      break
    } return r
}

function fn(e, t) {
  if (e.type === "hls") return {
    stream: e,
    quality: null
  };
  if (e.type === "file") {
    const s = Object.entries(e.qualities).filter(a => (a[1].url.length ?? 0) > 0).map(a => a[0]),
      r = Kr(s, t);
    if (r) {
      const a = e.qualities[r];
      if (a) return {
        stream: a,
        quality: r
      }
    }
  }
  throw new Error("couldn't select quality")
}
const zr = {
    "4k": "4K",
    1080: "1080p",
    360: "360p",
    480: "480p",
    720: "720p",
    unknown: "unknown"
  },
  zc = Object.keys(zr);

function qr(e) {
  return zr[e]
}
const Ze = z(xe(q(e => ({
    quality: {
      automaticQuality: !0,
      lastChosenQuality: null
    },
    setLastChosenQuality(t) {
      e(s => {
        s.quality.lastChosenQuality = t
      })
    },
    setAutomaticQuality(t) {
      e(s => {
        s.quality.automaticQuality = t
      })
    }
  })), {
    name: "__MW::quality",
    merge: (e, t) => Zs({}, t, e)
  })),
  U = {
    IDLE: "idle",
    SCRAPING: "scraping",
    PLAYING: "playing",
    SCRAPE_NOT_FOUND: "scrapeNotFound",
    PLAYBACK_ERROR: "playbackError"
  };

function Qr(e) {
  if (e.type === "show") {
    if (!e.episode || !e.season) throw new Error("missing show data");
    return {
      title: e.title,
      releaseYear: e.releaseYear,
      tmdbId: e.tmdbId,
      type: "show",
      imdbId: e.imdbId,
      episode: e.episode,
      season: e.season
    }
  }
  return {
    title: e.title,
    releaseYear: e.releaseYear,
    tmdbId: e.tmdbId,
    type: "movie",
    imdbId: e.imdbId
  }
}
const qc = (e, t) => ({
    source: null,
    sourceId: null,
    qualities: [],
    audioTracks: [],
    captionList: [],
    currentQuality: null,
    currentAudioTrack: null,
    status: U.IDLE,
    meta: null,
    caption: {
      selected: null,
      asTrack: !1
    },
    setSourceId(s) {
      e(r => {
        r.status = U.PLAYING, r.sourceId = s
      })
    },
    setStatus(s) {
      e(r => {
        r.status = s
      })
    },
    setMeta(s, r) {
      e(a => {
        a.meta = s, a.interface.hideNextEpisodeBtn = !1, r && (a.status = r)
      })
    },
    setCaption(s) {
      var a;
      (a = t().display) == null || a.setCaption(s), e(i => {
        i.caption.selected = s
      })
    },
    setSource(s, r, a) {
      let i = [];
      s.type === "file" && (i = Object.keys(s.qualities));
      const o = Ze.getState(),
        l = fn(s, o.quality);
      e(u => {
        u.source = s, u.qualities = i, u.currentQuality = l.quality, u.captionList = r, u.interface.error = void 0, u.status = U.PLAYING, u.audioTracks = [], u.currentAudioTrack = null
      }), t().redisplaySource(a)
    },
    redisplaySource(s) {
      var l;
      const r = t(),
        a = r.currentQuality;
      if (!r.source) return;
      const i = Ze.getState(),
        o = fn(r.source, {
          automaticQuality: i.quality.automaticQuality,
          lastChosenQuality: a
        });
      e(c => {
        c.interface.error = void 0, c.status = U.PLAYING
      }), (l = r.display) == null || l.load({
        source: o.stream,
        startAt: s,
        automaticQuality: i.quality.automaticQuality,
        preferredQuality: i.quality.lastChosenQuality
      })
    },
    switchQuality(s) {
      var a, i;
      const r = t();
      if (r.source)
        if (r.source.type === "file") {
          const o = r.source.qualities[s];
          if (!o) return;
          e(l => {
            l.currentQuality = s, l.status = U.PLAYING, l.interface.error = void 0
          }), (a = r.display) == null || a.load({
            source: o,
            startAt: r.progress.time,
            automaticQuality: !1,
            preferredQuality: s
          })
        } else r.source.type === "hls" && ((i = r.display) == null || i.changeQuality(!1, s))
    },
    enableAutomaticQuality() {
      var r;
      (r = t().display) == null || r.changeQuality(!0, null)
    }
  }),
  Qc = (e, t) => ({
    display: null,
    setDisplay(s) {
      const r = t().display;
      if (r && r.destroy(), !s) {
        e(a => {
          a.display = null
        });
        return
      }
      s.on("pause", () => e(a => {
        a.mediaPlaying.isPaused = !0, a.mediaPlaying.isPlaying = !1
      })), s.on("play", () => e(a => {
        a.mediaPlaying.hasPlayedOnce = !0, a.mediaPlaying.isPaused = !1, a.mediaPlaying.isPlaying = !0
      })), s.on("fullscreen", a => e(i => {
        i.interface.isFullscreen = a
      })), s.on("time", a => e(i => {
        i.progress.time = a
      })), s.on("volumechange", a => e(i => {
        i.mediaPlaying.volume = a
      })), s.on("duration", a => e(i => {
        i.progress.duration = a
      })), s.on("buffered", a => e(i => {
        i.progress.buffered = a
      })), s.on("loading", a => e(i => {
        i.mediaPlaying.isLoading = a
      })), s.on("qualities", a => {
        e(i => {
          i.qualities = a
        })
      }), s.on("changedquality", a => {
        e(i => {
          i.currentQuality = a
        })
      }), s.on("audiotracks", a => {
        e(i => {
          i.audioTracks = a
        })
      }), s.on("changedaudiotrack", a => {
        e(i => {
          i.currentAudioTrack = a
        })
      }), s.on("needstrack", a => {
        e(i => {
          i.caption.asTrack = a
        })
      }), s.on("canairplay", a => {
        e(i => {
          i.interface.canAirplay = a
        })
      }), s.on("playbackrate", a => {
        e(i => {
          i.mediaPlaying.playbackRate = a
        })
      }), s.on("error", a => {
        e(i => {
          i.status = U.PLAYBACK_ERROR, i.interface.error = a
        })
      }), e(a => {
        a.display = s
      })
    },
    reset() {
      var s;
      (s = t().display) == null || s.load({
        source: null,
        startAt: 0,
        automaticQuality: !1,
        preferredQuality: null
      }), e(r => {
        r.status = U.IDLE, r.meta = null, r.thumbnails.images = [], r.progress.time = 0, r.progress.duration = 0
      })
    }
  });
let Re = function (e) {
    return e[e.REGULAR = 0] = "REGULAR", e[e.REMAINING = 1] = "REMAINING", e
  }({}),
  ce = function (e) {
    return e.NOT_HOVERING = "not_hovering", e.MOUSE_HOVER = "mouse_hover", e.MOBILE_TAPPED = "mobile_tapped", e
  }({});
const Yc = (e, t) => ({
    interface: {
      isCasting: !1,
      hasOpenOverlay: !1,
      isFullscreen: !1,
      isSeeking: !1,
      lastVolume: 0,
      leftControlHovering: !1,
      isHoveringControls: !1,
      hovering: ce.NOT_HOVERING,
      lastHoveringState: ce.NOT_HOVERING,
      volumeChangedWithKeybind: !1,
      volumeChangedWithKeybindDebounce: null,
      timeFormat: Re.REGULAR,
      canAirplay: !1,
      hideNextEpisodeBtn: !1,
      shouldStartFromBeginning: !1
    },
    setShouldStartFromBeginning(s) {
      e(r => {
        r.interface.shouldStartFromBeginning = s
      })
    },
    setLastVolume(s) {
      e(r => {
        r.interface.lastVolume = s
      })
    },
    setHasOpenOverlay(s) {
      e(r => {
        r.interface.hasOpenOverlay = s
      })
    },
    setTimeFormat(s) {
      e(r => {
        r.interface.timeFormat = s
      })
    },
    updateInterfaceHovering(s) {
      e(r => {
        s !== ce.NOT_HOVERING && (r.interface.lastHoveringState = s), r.interface.hovering = s
      })
    },
    setSeeking(s) {
      const r = t().display;
      r == null || r.setSeeking(s), e(a => {
        a.interface.isSeeking = s
      })
    },
    setHoveringLeftControls(s) {
      e(r => {
        r.interface.leftControlHovering = s
      })
    },
    setHoveringAnyControls(s) {
      e(r => {
        r.interface.isHoveringControls = s
      })
    },
    hideNextEpisodeButton() {
      e(s => {
        s.interface.hideNextEpisodeBtn = !0
      })
    }
  }),
  Xc = e => ({
    mediaPlaying: {
      isPlaying: !1,
      isPaused: !0,
      isLoading: !1,
      isSeeking: !1,
      isDragSeeking: !1,
      hasPlayedOnce: !1,
      volume: 1,
      playbackRate: 1
    },
    play() {
      e(t => {
        t.mediaPlaying.isPlaying = !0, t.mediaPlaying.isPaused = !1
      })
    },
    pause() {
      e(t => {
        t.mediaPlaying.isPlaying = !1, t.mediaPlaying.isPaused = !1
      })
    }
  }),
  Jc = e => ({
    progress: {
      time: 0,
      duration: 0,
      buffered: 0,
      draggingTime: 0
    },
    setDraggingTime(t) {
      e(s => {
        s.progress.draggingTime = t
      })
    }
  });

function Zc(e, t) {
  if (e.length === 0) return null;
  const s = e.findIndex(l => l.at > t);
  if (s === -1) return {
    index: e.length - 1,
    image: e[e.length - 1]
  };
  const r = e[s];
  if (s === 0) return {
    index: s,
    image: r
  };
  const a = e[s - 1],
    i = t - a.at,
    o = r.at - t;
  return i < o ? {
    index: s - 1,
    image: a
  } : {
    index: s,
    image: r
  }
}
const eu = (e, t) => ({
    thumbnails: {
      images: [],
      resetImages() {
        e(s => {
          s.thumbnails.images = []
        })
      },
      addImage(s) {
        const r = t(),
          a = r.thumbnails.images.findIndex(o => o.at >= s.at);
        if (a === -1) {
          e(o => {
            o.thumbnails.images.push(s), o.thumbnails.images = [...o.thumbnails.images]
          });
          return
        }
        if (r.thumbnails.images[a].at === s.at) {
          e(o => {
            o.thumbnails.images[a] = s, o.thumbnails.images = [...o.thumbnails.images]
          });
          return
        }
        e(o => {
          o.thumbnails.images.splice(a, 0, s), o.thumbnails.images = [...o.thumbnails.images]
        })
      }
    }
  }),
  x = z(q(function () {
    return {
      ...Yc(...arguments),
      ...Jc(...arguments),
      ...Xc(...arguments),
      ...qc(...arguments),
      ...Qc(...arguments),
      ...Gc(...arguments),
      ...eu(...arguments)
    }
  })),
  tu = so.sanitize;

function nu(e, t, s, r) {
  const a = e / 1e3 + s,
    i = t / 1e3 + s;
  return Math.max(0, a) <= r && Math.max(0, i) >= r
}

function su(e, t, s) {
  return `${e}-${t}-${s}`
}

function Yr(e) {
  const t = e.trim();
  if (t === "") throw new Error("Given text is empty");
  const s = _t(t, "vtt");
  if (ir(s) === "") throw new Error("Invalid subtitle format");
  return s
}

function Xr(e) {
  const t = e.trim();
  if (t === "") throw new Error("Given text is empty");
  const s = _t(t, "srt");
  if (ir(s) === "") throw new Error("Invalid subtitle format");
  return s
}

function ru(e) {
  return e.reduce((t, s) => {
    const r = t[t.length - 1],
      a = (r == null ? void 0 : r.start) === s.start && (r == null ? void 0 : r.end) === s.end && (r == null ? void 0 : r.content) === s.content;
    return (r === void 0 || !a) && t.push(s), t
  }, [])
}

function Jr(e) {
  return ro(e).filter(t => t.type === "caption")
}

function au(e, t) {
  const s = Yr(e);
  return Jr(s)
}

function iu(e) {
  return btoa(String.fromCodePoint(...new TextEncoder().encode(e)))
}

function ou(e) {
  return `data:application/x-subrip;base64,${iu(Xr(e))}`
}

function lu(e) {
  return URL.createObjectURL(new Blob([Yr(e)], {
    type: "text/vtt"
  }))
}

function gn(e) {
  return e.map(t => ({
    id: t.id,
    language: t.language,
    url: t.url,
    needsProxy: t.hasCorsRestrictions
  }))
}
const Zr = ao().map(e => `.${e}`),
  Pt = new Er;
Pt.setCompare((e, t) => e === t);
const cu = 24 * 60 * 60;
async function uu(e) {
  const t = Pt.get(e.url);
  if (t) return t;
  let s;
  if (e.needsProxy)
    if (he()) {
      const a = await ur({
        url: e.url,
        method: "GET"
      });
      if (!(a != null && a.success) || typeof a.response.body != "string") throw new Error("failed to get caption data from extension");
      s = a.response.body
    } else s = await cn(e.url, {
      responseType: "text"
    });
  else s = await fetch(e.url).then(a => a.text());
  if (!s) throw new Error("failed to get caption data");
  const r = Xr(s);
  return Pt.set(e.url, r, cu), r
}
async function du(e) {
  const t = Pt.get(e);
  return t || await fetch(e).then(r => r.text())
}

function Kt() {
  const e = H(p => p.setLanguage),
    t = H(p => p.enabled),
    s = H(p => p.resetSubtitleSpecificSettings),
    r = x(p => p.setCaption),
    a = H(p => p.lastSelectedLanguage),
    i = x(p => p.captionList),
    o = x(p => {
      var y;
      return (y = p.display) == null ? void 0 : y.getCaptionList
    }),
    l = x(p => {
      var y;
      return (y = p.display) == null ? void 0 : y.getSubtitleTracks
    }),
    c = x(p => {
      var y;
      return (y = p.display) == null ? void 0 : y.setSubtitlePreference
    }),
    u = m.useMemo(() => i.length !== 0 ? i : (o == null ? void 0 : o()) ?? [], [i, o]),
    d = m.useCallback(async p => {
      var R, T;
      const y = u.find(L => L.id === p);
      if (!y) return;
      const j = {
        id: y.id,
        language: y.language,
        url: y.url,
        srtData: ""
      };
      if (y.hls) {
        await (c == null ? void 0 : c(y.language));
        const L = l == null ? void 0 : l().find(A => A.id.toString() === y.id && A.details !== void 0);
        if (!L) return;
        const E = ((T = (R = L.details) == null ? void 0 : R.fragments) == null ? void 0 : T.filter(A => A !== null && A.url !== null)) ?? [],
          k = (await Promise.all(E.map(async A => {
            const M = await du(A.url);
            return Jr(M)
          }))).flat(),
          S = ru(k),
          _ = io.build(S, {
            format: "srt"
          });
        j.srtData = _
      } else {
        const L = await uu(y);
        j.srtData = L
      }
      r(j), s(), e(y.language)
    }, [e, u, r, s, l, c]),
    b = m.useCallback(async p => {
      const y = u.find(j => j.language === p);
      if (y) return d(y.id)
    }, [u, d]),
    g = m.useCallback(async () => {
      r(null), e(null)
    }, [r, e]),
    h = m.useCallback(async () => (await b(a ?? "en"), !0), [a, b]),
    f = m.useCallback(async () => {
      t ? g() : await h()
    }, [h, g, t]),
    v = m.useCallback(async () => {
      t && await h()
    }, [h, t]);
  return {
    selectLanguage: b,
    disable: g,
    selectLastUsedLanguage: h,
    toggleLastUsed: f,
    selectLastUsedLanguageIfEnabled: v,
    selectCaptionById: d
  }
}

function mu() {
  const e = x(r => r.display),
    t = Pn(r => r.volume);
  return {
    init: m.useCallback(() => {
      e == null || e.setVolume(t)
    }, [e, t])
  }
}

function hu() {
  const e = x(a => a.source),
    t = m.useMemo(() => e ? JSON.stringify(e) : null, [e]),
    {
      selectLastUsedLanguageIfEnabled: s
    } = Kt(),
    r = m.useRef(s);
  m.useEffect(() => {
    r.current = s
  }, [s]), m.useEffect(() => {
    t && r.current()
  }, [t])
}

function fu(e, t) {
  var a;
  const s = e[(t == null ? void 0 : t.tmdbId) ?? ""];
  if (!s || !t) return 0;
  if (t.type === "movie") return s.progress ? s.progress.watched : 0;
  const r = s.episodes[((a = t.episode) == null ? void 0 : a.tmdbId) ?? ""];
  return r ? r.progress.watched : 0
}

function ea() {
  const e = x(g => g.setStatus),
    t = x(g => g.setMeta),
    s = x(g => g.setSource),
    r = x(g => g.setCaption),
    a = x(g => g.setSourceId),
    i = x(g => g.status),
    o = x(g => g.interface.shouldStartFromBeginning),
    l = x(g => g.setShouldStartFromBeginning),
    c = x(g => g.reset),
    u = x(g => g.meta),
    {
      init: d
    } = mu(),
    b = Y();
  return {
    meta: u,
    reset: c,
    status: i,
    shouldStartFromBeginning: o,
    setShouldStartFromBeginning: l,
    setMeta(g, h) {
      t(g, h)
    },
    playMedia(g, h, f, v) {
      const p = v ?? fu(b.items, u);
      r(null), s(g, h, p), a(f), e(U.PLAYING), d()
    },
    setScrapeStatus() {
      e(U.SCRAPING)
    },
    setScrapeNotFound() {
      e(U.SCRAPE_NOT_FOUND)
    }
  }
}
const $n = m.forwardRef((e, t) => {
  let {
    onChange: s,
    onUnFocus: r,
    value: a,
    label: i,
    name: o,
    autoComplete: l,
    className: c,
    placeholder: u,
    onFocus: d,
    passwordToggleable: b
  } = e, g = "text";
  const [h, f] = m.useState(!0);
  b && (g = h ? "password" : "text");
  const v = n.jsxs("div", {
    className: "relative",
    children: [n.jsx("input", {
      type: g,
      ref: t,
      className: C(c, b && "pr-12"),
      placeholder: u,
      onChange: p => s && s(p.target.value),
      value: a,
      name: o,
      autoComplete: l,
      onBlur: () => r && r(),
      onFocus: () => d == null ? void 0 : d(),
      onKeyDown: p => p.key === "Enter" ? p.target.blur() : null
    }), b ? n.jsx("button", {
      type: "button",
      className: "absolute top-1/2 -translate-y-1/2 right-1 text-xl p-3",
      onClick: () => f(!h),
      children: n.jsx(P, {
        icon: h ? w.EYE : w.EYE_SLASH
      })
    }) : null]
  });
  return i ? n.jsxs("label", {
    children: [n.jsx("span", {
      children: i
    }), v]
  }) : v
});

function gu(e) {
  return n.jsx("p", {
    className: C("text-errors-type-secondary", e.marginClass ?? "mt-6"),
    children: e.children
  })
}

function xu() {
  const {
    t: e
  } = I(), t = x(r => r.interface.error), s = Bn("error");
  return n.jsxs(Dn, {
    children: [n.jsxs(Mn, {
      children: [n.jsx(On, {
        icon: w.WAND,
        children: e("player.playbackError.badge")
      }), n.jsx(nt, {
        children: e("player.playbackError.title")
      }), n.jsx(gu, {
        children: e("player.playbackError.text")
      }), n.jsxs("div", {
        className: "flex gap-3",
        children: [n.jsx(D, {
          href: "/",
          theme: "secondary",
          padding: "md:px-12 p-2.5",
          className: "mt-6",
          children: e("player.playbackError.homeButton")
        }), n.jsx(D, {
          onClick: () => s.show(),
          theme: "purple",
          padding: "md:px-12 p-2.5",
          className: "mt-6",
          children: e("errors.showError")
        })]
      })]
    }), n.jsx(yc, {
      onClose: () => s.hide(),
      error: t,
      id: s.id
    })]
  })
}
const ge = m.forwardRef((e, t) => n.jsxs("button", {
  ref: t,
  type: "button",
  onClick: s => {
    var r;
    return (r = e.onClick) == null ? void 0 : r.call(e, s.currentTarget)
  },
  className: C(["tabbable p-2 rounded-full hover:bg-video-buttonBackground hover:bg-opacity-50 transition-transform duration-100 flex items-center gap-3", e.activeClass ?? "active:scale-110 active:bg-opacity-75 active:text-white", e.className ?? ""]),
  children: [e.icon && n.jsx(P, {
    className: e.iconSizeClass || "text-2xl",
    icon: e.icon
  }), e.children]
}));

function Es(e) {
  const t = x(a => a.display),
    {
      isPaused: s
    } = x(a => a.mediaPlaying),
    r = () => {
      s ? t == null || t.play() : t == null || t.pause()
    };
  return n.jsx(ge, {
    className: e.className,
    iconSizeClass: e.iconSizeClass,
    onClick: r,
    icon: s ? w.PLAY : w.PAUSE
  })
}

function Cs() {
  const {
    isFullscreen: e
  } = x(s => s.interface), t = x(s => s.display);
  return n.jsx(ge, {
    onClick: () => t == null ? void 0 : t.toggleFullscreen(),
    icon: e ? w.COMPRESS : w.EXPAND
  })
}
const ta = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
let Zt = null;
async function Rt() {
  if (Zt === null) {
    const e = new Promise(s => {
        setTimeout(() => s(!1), 1e3)
      }),
      t = new Promise(s => {
        const r = document.createElement("video"),
          a = () => {
            r.removeEventListener("volumechange", a), s(!0)
          };
        r.addEventListener("volumechange", a), r.volume = .5
      });
    Zt = await Promise.race([t, e])
  }
  return Zt
}

function zt() {
  return ie.fullscreenEnabled
}

function na() {
  return zt() || ta
}

function sa() {
  return zt() || na()
}

function ra() {
  return "pictureInPictureEnabled" in document
}

function aa() {
  return "webkitSupportsPresentationMode" in document.createElement("video")
}

function jt(e) {
  return me.isSupported() ? !1 : !!e.canPlayType("application/vnd.apple.mpegurl")
}

function pu() {
  const e = Ha();
  return (e == null ? void 0 : e.type) !== "browser" ? "unknown" : e.name === "ios" || e.name === "ios-webview" ? "ios" : e.name === "chrome" || e.name === "chromium-webview" || e.name === "edge-chromium" || e.name === "opera" ? "chrome" : e.name === "firefox" ? "firefox" : "unknown"
}

function Is() {
  const e = x(t => t.display);
  return !ra() && !aa() ? null : n.jsx(ge, {
    onClick: () => e == null ? void 0 : e.togglePictureInPicture(),
    icon: w.PICTURE_IN_PICTURE
  })
}

function bu(e) {
  return `${e.toFixed(2)}%`
}

function Ls(e) {
  return Number(Math.max(0, Math.min(e, 100)).toFixed(2))
}

function yu(e) {
  return e.type === "mousedown" || e.type === "mouseup" || e.type === "mousemove"
}
const en = e => yu(e) ? e.pageX : e.changedTouches[0].pageX;

function Hn(e, t) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  const [r, a] = m.useState(!1), [i, o] = m.useState(0);
  m.useEffect(() => {
    function c(d) {
      if (!r || !e.current) return;
      const b = e.current.getBoundingClientRect(),
        g = (en(d) - b.left) / e.current.offsetWidth;
      o(g * 100), s && t(g)
    }

    function u(d) {
      if (!r || (a(!1), document.body.removeAttribute("data-no-select"), !e.current)) return;
      const b = e.current.getBoundingClientRect(),
        g = (en(d) - b.left) / e.current.offsetWidth;
      t(g)
    }
    return document.addEventListener("mousemove", c), document.addEventListener("touchmove", c), document.addEventListener("mouseup", u), document.addEventListener("touchend", u), () => {
      document.removeEventListener("mousemove", c), document.removeEventListener("touchmove", c), document.removeEventListener("mouseup", u), document.removeEventListener("touchend", u)
    }
  }, [r, e, t, s]);
  const l = m.useCallback(c => {
    if (a(!0), document.body.setAttribute("data-no-select", "true"), !e.current) return;
    const u = e.current.getBoundingClientRect(),
      d = (en(c) - u.left) / e.current.offsetWidth * 100;
    o(d)
  }, [o, e]);
  return {
    dragging: r,
    dragPercentage: i,
    dragMouseDown: l
  }
}

function wt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (Number.isNaN(e)) return t ? "0:00:00" : "0:00";
  let s = e;
  const r = Math.floor(s % 60);
  s /= 60;
  const a = Math.floor(s % 60);
  s /= 60;
  const i = Math.floor(s),
    o = r.toString().padStart(2, "0"),
    l = a.toString().padStart(2, "0");
  return t ? [i, l, o].join(":") : [l, o].join(":")
}

function xn(e) {
  return e > 60 * 60
}

function vu(e) {
  const t = x(o => o.thumbnails.images),
    s = m.useMemo(() => {
      var o;
      return (o = Zc(t, e.at)) == null ? void 0 : o.image
    }, [t, e.at]),
    [r, a] = m.useState({
      offscreenLeft: 0,
      offscreenRight: 0
    }),
    i = m.useRef(null);
  return m.useEffect(() => {
    if (!i.current) return;
    const o = i.current.getBoundingClientRect(),
      l = 32,
      c = Math.max(0, (o.left - l) * -1),
      u = Math.max(0, o.right + l - window.innerWidth);
    a({
      offscreenLeft: c,
      offscreenRight: u
    })
  }, [e.at]), !e.show || !s ? null : n.jsx("div", {
    className: "flex flex-col items-center -translate-x-1/2 pointer-events-none",
    children: n.jsx("div", {
      className: "w-screen flex justify-center",
      children: n.jsx("div", {
        ref: i,
        children: n.jsxs("div", {
          style: {
            transform: `translateX(${r.offscreenLeft>0?r.offscreenLeft:-r.offscreenRight}px)`
          },
          children: [n.jsx("img", {
            src: s.data,
            className: "h-24 border rounded-xl border-gray-800"
          }), n.jsx("p", {
            className: "text-center mt-1",
            children: wt(Math.max(e.at, 0), xn(e.at))
          })]
        })
      })
    })
  })
}

function ju(e) {
  const [t, s] = m.useState(-1), r = m.useCallback(i => {
    if (!e.current) return;
    const l = e.current.getBoundingClientRect(),
      c = (i.pageX - l.left) / e.current.offsetWidth;
    s(c * 100)
  }, [s, e]), a = m.useCallback(() => {
    s(-1)
  }, [s]);
  return {
    mousePos: t,
    mouseMove: r,
    mouseLeave: a
  }
}
const wu = function () {
    const {
      duration: t,
      time: s,
      buffered: r
    } = x(p => p.progress), a = x(p => p.display), i = x(p => p.setDraggingTime), o = x(p => p.setSeeking), {
      isSeeking: l
    } = x(p => p.interface), c = m.useCallback(p => {
      a == null || a.setTime(p * t)
    }, [t, a]), u = m.useRef(null), {
      mouseMove: d,
      mouseLeave: b,
      mousePos: g
    } = ju(u), {
      dragging: h,
      dragPercentage: f,
      dragMouseDown: v
    } = Hn(u, c);
    return m.useEffect(() => {
      o(h)
    }, [o, h]), m.useEffect(() => {
      i(f / 100 * t)
    }, [i, t, f]), n.jsxs("div", {
      className: "w-full relative",
      dir: "ltr",
      children: [n.jsx("div", {
        className: "top-0 absolute inset-x-0",
        children: n.jsx("div", {
          className: "absolute bottom-0",
          style: {
            left: `${g}%`
          },
          children: n.jsx(vu, {
            at: Math.floor(g / 100 * t),
            show: g > -1
          })
        })
      }), n.jsx("div", {
        className: "w-full",
        ref: u,
        children: n.jsx("div", {
          className: "group w-full h-8 flex items-center cursor-pointer",
          onMouseDown: v,
          onTouchStart: v,
          onMouseLeave: b,
          onMouseMove: d,
          children: n.jsxs("div", {
            className: ["relative w-full h-1 bg-progress-background bg-opacity-25 rounded-full transition-[height] duration-100 group-hover:h-1.5", h ? "!h-1.5" : ""].join(" "),
            children: [n.jsx("div", {
              className: "absolute top-0 left-0 h-full rounded-full bg-progress-preloaded bg-opacity-50 flex justify-end items-center",
              style: {
                width: `${r/t*100}%`
              }
            }), n.jsx("div", {
              className: "absolute top-0 dir-neutral:left-0 h-full rounded-full bg-progress-filled flex justify-end items-center",
              style: {
                width: `${Math.max(0,Math.min(1,h?f/100:s/t))*100}%`
              },
              children: n.jsx("div", {
                className: ["w-[1rem] min-w-[1rem] h-[1rem] rounded-full transform translate-x-1/2 scale-0 group-hover:scale-100 bg-white transition-[transform] duration-100", l ? "scale-100" : ""].join(" ")
              })
            })]
          })
        })
      })]
    })
  },
  ku = wu;

function Ts(e) {
  const t = x(a => a.display),
    s = x(a => a.progress.time),
    r = m.useCallback(() => {
      t == null || t.setTime(s + 10)
    }, [t, s]);
  return n.jsx(ge, {
    iconSizeClass: e.iconSizeClass,
    onClick: r,
    icon: w.SKIP_FORWARD
  })
}

function Ps(e) {
  const t = x(a => a.display),
    s = x(a => a.progress.time),
    r = m.useCallback(() => {
      t == null || t.setTime(s - 10)
    }, [t, s]);
  return n.jsx(ge, {
    iconSizeClass: e.iconSizeClass,
    onClick: r,
    icon: w.SKIP_BACKWARD
  })
}

function Rs(e) {
  const t = x(y => y.interface.timeFormat),
    s = x(y => y.setTimeFormat),
    {
      duration: r,
      time: a,
      draggingTime: i
    } = x(y => y.progress),
    {
      isSeeking: o
    } = x(y => y.interface),
    {
      t: l
    } = I(),
    c = xn(r);

  function u() {
    s(t === Re.REGULAR ? Re.REMAINING : Re.REGULAR)
  }
  const d = Math.min(Math.max(o ? i : a, 0), r),
    b = Math.abs(d - r),
    g = wt(b, xn(b)),
    h = wt(d, c),
    f = new Date(Date.now() + b * 1e3),
    v = wt(r, c);
  let p = t === Re.REGULAR ? "regular" : "remaining";
  return e.short && (p = t === Re.REGULAR ? "shortRegular" : "shortRemaining"), n.jsx(ge, {
    onClick: () => u(),
    children: n.jsx("span", {
      children: l(`player.time.${p}`, {
        timeFinished: f,
        timeWatched: h,
        timeLeft: g,
        duration: v,
        formatParams: {
          timeFinished: {
            hour: "numeric",
            minute: "numeric"
          }
        }
      })
    })
  })
}

function Nu() {
  return x(t => t.mediaPlaying.isLoading) ? n.jsx(Ut, {
    className: "text-4xl"
  }) : null
}

function Su() {
  const e = x(o => o.display),
    t = x(o => o.mediaPlaying.isPlaying),
    s = x(o => o.mediaPlaying.isLoading),
    r = x(o => o.mediaPlaying.hasPlayedOnce),
    a = x(o => o.status),
    i = m.useCallback(() => {
      e == null || e.play()
    }, [e]);
  return r || t || s || a !== U.PLAYING ? null : n.jsx("div", {
    onClick: i,
    className: "group pointer-events-auto flex h-16 w-16 cursor-pointer items-center justify-center bg-video-autoPlay-background hover:bg-video-autoPlay-hover rounded-full text-white transition-[background-color,transform] hover:scale-125 active:scale-100",
    children: n.jsx(P, {
      icon: w.PLAY,
      className: "text-2xl transition-transform group-hover:scale-125"
    })
  })
}

function ia() {
  const e = x(o => o.mediaPlaying.volume),
    t = x(o => o.interface.lastVolume),
    s = x(o => o.setLastVolume),
    r = x(o => o.display),
    a = Pn(o => o.setVolume),
    i = () => {
      let o = 0;
      e > 0 ? (o = 0, s(e)) : t > 0 ? o = t : o = 1, r == null || r.setVolume(o), a(o)
    };
  return {
    toggleMute() {
      i()
    },
    setVolume(o) {
      a(o), s(o), r == null || r.setVolume(o)
    }
  }
}
const Eu = function (t) {
    const s = m.useRef(null),
      r = x(j => j.setHoveringLeftControls),
      a = x(j => j.interface.leftControlHovering),
      i = x(j => j.mediaPlaying.volume),
      {
        setVolume: o,
        toggleMute: l
      } = ia(),
      c = m.useCallback(j => {
        o(j)
      }, [o]),
      {
        dragging: u,
        dragPercentage: d,
        dragMouseDown: b
      } = Hn(s, c, !0),
      g = m.useCallback(() => {
        l()
      }, [l]),
      h = m.useCallback(async () => {
        await Rt() && r(!0), document.body.classList.add("overflow-y-hidden")
      }, [r]),
      f = () => {
        document.body.classList.remove("overflow-y-hidden")
      };
    let v = Ls(i * 100);
    u && (v = Ls(d));
    const p = bu(v),
      y = m.useCallback(j => {
        j.preventDefault();
        let R = i - j.deltaY / 1e3;
        R = Math.max(0, Math.min(R, 1)), o(R)
      }, [i, o]);
    return n.jsx("div", {
      className: t.className,
      onMouseEnter: h,
      onMouseLeave: f,
      onWheel: y,
      children: n.jsxs("div", {
        className: "pointer-events-auto flex cursor-pointer items-center py-0 touch-none",
        children: [n.jsx("div", {
          className: "px-4 text-2xl text-white",
          onClick: g,
          children: n.jsx(P, {
            icon: v > 0 ? w.VOLUME : w.VOLUME_X
          })
        }), n.jsx("div", {
          className: `linear -ml-2 w-0 overflow-hidden transition-[width,opacity] duration-300 ${a||u?"!w-24 opacity-100":"w-4 opacity-0"}`,
          children: n.jsx("div", {
            ref: s,
            className: "flex h-10 w-20 items-center px-2",
            onMouseDown: b,
            onTouchStart: b,
            children: n.jsx("div", {
              className: "relative h-1 flex-1 rounded-full bg-gray-500 bg-opacity-50",
              children: n.jsx("div", {
                className: "absolute inset-y-0 left-0 flex items-center justify-end rounded-full bg-video-audio-set",
                style: {
                  width: p
                },
                children: n.jsx("div", {
                  className: "absolute h-3 w-3 translate-x-1/2 rounded-full bg-white"
                })
              })
            })
          })
        })]
      })
    })
  },
  Cu = Eu;

function Iu() {
  const e = x(t => {
    var s;
    return (s = t.meta) == null ? void 0 : s.title
  });
  return n.jsx("p", {
    children: e
  })
}

function Lu() {
  var s, r, a;
  const {
    t: e
  } = I(), t = x(i => i.meta);
  return (t == null ? void 0 : t.type) !== "show" ? null : n.jsxs("div", {
    className: "flex gap-3",
    children: [n.jsx("span", {
      className: "text-white font-medium",
      children: e("media.episodeDisplay", {
        season: (s = t == null ? void 0 : t.season) == null ? void 0 : s.number,
        episode: (r = t == null ? void 0 : t.episode) == null ? void 0 : r.number
      })
    }), n.jsx("span", {
      className: "text-type-secondary font-medium",
      children: (a = t == null ? void 0 : t.episode) == null ? void 0 : a.title
    })]
  })
}

function oa(e) {
  return n.jsxs("div", {
    className: C("relative", e.className),
    children: [n.jsx("div", {
      id: `__overlayRouter::${e.id}`,
      className: "absolute inset-0 -z-10"
    }), e.children]
  })
}

function qt(e) {
  const [t, s] = m.useState(!1), r = m.useRef(!1);
  return m.useEffect(() => {
    function a() {
      const i = e ? window.innerHeight < 600 : window.innerWidth < 1024;
      r.current !== i && (r.current = i, s(i))
    }
    return a(), window.addEventListener("resize", a), () => {
      window.removeEventListener("resize", a)
    }
  }, [e]), {
    isMobile: t
  }
}

function J(e) {
  const t = We(e.id),
    s = t.showBackwardsTransition(e.path),
    r = t.isCurrentPage(e.path),
    a = Me(u => u.registerRoute),
    i = m.useMemo(() => t.makePath(e.path), [e.path, t]),
    {
      isMobile: o
    } = qt();
  m.useEffect(() => {
    a({
      id: i,
      width: e.width,
      height: e.height
    })
  }, [e.height, e.width, i, a]);
  const l = o ? "100%" : `${e.width}px`;
  let c = "none";
  return (s === "yes" || s === "no") && (c = s === "yes" ? "slide-full-left" : "slide-full-right"), n.jsx(ee, {
    animation: c,
    className: "absolute inset-0",
    durationClass: "duration-[400ms]",
    show: r,
    children: n.jsx("div", {
      className: C(["grid grid-rows-1 max-h-full", e.className]),
      style: {
        height: e.height ? `${e.height}px` : void 0,
        width: e.width ? l : void 0
      },
      children: e.children
    })
  })
}

function Tu() {
  const e = Me(u => u.anchorPoint),
    t = m.useRef(null),
    [s, r] = m.useState(0),
    [a, i] = m.useState(0),
    [o, l] = m.useState(null),
    c = m.useCallback((u, d) => {
      if (!u) return;
      const b = u.x + u.w / 2,
        g = window.innerHeight - (u.y + u.h);
      i(window.innerHeight - g - u.h - d.height - 30), r(Math.min(b - d.width / 2, window.innerWidth - d.width - 30))
    }, []);
  return m.useEffect(() => {
    !e || !o || c(e, o)
  }, [e, c, o]), m.useEffect(() => {
    if (!t.current) return;

    function u() {
      var g;
      const b = (g = t.current) == null ? void 0 : g.getBoundingClientRect();
      l(b ?? null)
    }
    u();
    const d = new ResizeObserver(u);
    return d.observe(t.current), () => {
      d.disconnect()
    }
  }, []), [t, s, a]
}

function Pu(e) {
  const [t, s, r] = Tu();
  return n.jsx("div", {
    ref: t,
    style: {
      transform: `translateX(${s}px) translateY(${r}px)`
    },
    className: C(["[&>*]:pointer-events-auto z-10 flex dir-neutral:items-start rtl:justify-start ltr:justify-end dir-neutral:origin-top-left touch-none", e.className]),
    children: e.children
  })
}
const Ru = function (t) {
    const s = We("hello world :)"),
      {
        t: r
      } = I();
    return n.jsxs("div", {
      className: C(["pointer-events-auto px-4 pb-6 z-10 ml-[env(safe-area-inset-left)] mr-[env(safe-area-inset-right)] bottom-0 origin-top-left inset-x-0 absolute overflow-hidden max-h-[calc(100vh-1.5rem)] grid grid-rows-[minmax(0,1fr),auto]", t.className]),
      children: [t.children, n.jsx("button", {
        className: "w-full text-video-context-type-main bg-video-context-background z-10 relative hover:bg-video-context-closeHover active:scale-95 rounded-2xl pointer-events-auto transition-all duration-100 flex justify-center items-center py-3 mt-3 font-bold border border-video-context-border hover:text-white",
        type: "button",
        onClick: () => s.close(),
        children: r("overlays.close")
      }), n.jsx("div", {
        className: "pointer-events-none absolute z-0 bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"
      })]
    })
  },
  Au = Ru,
  _u = 200,
  Ou = "--colors-global-accentA";

function Mu(e) {
  return n.jsx("div", {
    tabIndex: e.tabIndex,
    className: C(e.className, "relative"),
    onKeyUp: e.onKeyUp,
    children: e.children
  })
}

function Du(e) {
  return n.jsx("div", {
    className: C(e.className, "relative"),
    children: e.children
  })
}
const Bu = function (t) {
    const s = m.useRef(null),
      r = t.flareSize ?? _u,
      a = t.cssColorVar ?? Ou;
    return m.useEffect(() => {
      function i(o) {
        if (!s.current) return;
        const l = s.current.getBoundingClientRect(),
          c = r / 2;
        s.current.style.setProperty("--bg-x", `${(o.clientX-l.left-c).toFixed(0)}px`), s.current.style.setProperty("--bg-y", `${(o.clientY-l.top-c).toFixed(0)}px`)
      }
      return document.addEventListener("mousemove", i), () => document.removeEventListener("mousemove", i)
    }, [r]), n.jsx("div", {
      ref: s,
      className: C("flare-light pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-[400ms]", t.className, {
        "!opacity-100": t.enabled ?? !1
      }),
      style: {
        backgroundImage: `radial-gradient(circle at center, rgba(var(${a}) / 1), rgba(var(${a}) / 0) 70%)`,
        backgroundPosition: "var(--bg-x) var(--bg-y)",
        backgroundRepeat: "no-repeat",
        backgroundSize: `${r.toFixed(0)}px ${r.toFixed(0)}px`
      },
      children: n.jsx("div", {
        className: C("absolute inset-[1px] overflow-hidden", t.className, t.backgroundClass),
        children: n.jsx("div", {
          className: "absolute inset-0 opacity-10",
          style: {
            background: `radial-gradient(circle at center, rgba(var(${a}) / 1), rgba(var(${a}) / 0) 70%)`,
            backgroundPosition: "var(--bg-x) var(--bg-y)",
            backgroundRepeat: "no-repeat",
            backgroundSize: `${r.toFixed(0)}px ${r.toFixed(0)}px`
          }
        })
      })
    })
  },
  Uu = Bu,
  ue = {
    Base: Mu,
    Light: Uu,
    Child: Du
  };

function Fu(e) {
  const t = m.useRef(null),
    {
      isMobile: s
    } = qt(),
    r = Me(u => u.routes),
    a = We(e.id),
    i = m.useMemo(() => r[a.currentRoute ?? ""], [r, a]),
    [o, l] = Wa(() => ({
      from: {
        height: `${(i==null?void 0:i.height)??0}px`,
        width: s ? "100%" : `${(i==null?void 0:i.width)??0}px`
      },
      config: {
        easing: Ga.linear
      }
    }), []),
    c = m.useRef(null);
  return m.useEffect(() => {
    const u = {
        height: i == null ? void 0 : i.height,
        width: i == null ? void 0 : i.width,
        isMobile: s
      },
      d = JSON.stringify(u);
    if (d !== c.current) {
      const b = c.current ? JSON.parse(c.current) : null;
      c.current = d, u.isMobile ? (l.set({
        width: "100%"
      }), l.start({
        height: `${(i==null?void 0:i.height)??0}px`
      })) : (b == null ? void 0 : b.height) === void 0 && u.height !== void 0 ? l.set({
        height: `${(i==null?void 0:i.height)??0}px`,
        width: `${(i==null?void 0:i.width)??0}px`
      }) : l.start({
        height: `${(i==null?void 0:i.height)??0}px`,
        width: `${(i==null?void 0:i.width)??0}px`
      })
    }
  }, [i == null ? void 0 : i.height, i == null ? void 0 : i.width, s, l]), n.jsx(ti.div, {
    ref: t,
    style: o,
    className: "overflow-hidden relative z-10 max-h-full",
    children: n.jsxs(ue.Base, {
      className: "group w-full bg-video-context-border h-full rounded-2xl transition-colors duration-100 text-video-context-type-main",
      children: [n.jsx(ue.Light, {
        flareSize: 400,
        cssColorVar: "--colors-video-context-light",
        backgroundClass: "bg-video-context-background duration-100",
        className: "rounded-2xl opacity-100"
      }), n.jsx(ue.Child, {
        className: "pointer-events-auto relative transition-transform duration-100 h-full",
        children: e.children
      })]
    })
  })
}

function la(e) {
  const {
    isMobile: t
  } = qt(), s = n.jsx(Fu, {
    id: e.id,
    children: e.children
  });
  return t ? n.jsx(Au, {
    children: s
  }) : n.jsx(Pu, {
    children: s
  })
}

function As(e) {
  try {
    return new URL(e).hostname
  } catch {
    return null
  }
}

function Vu(e) {
  return e.type === "hls" ? [As(e.playlist)].filter(t => !!t) : e.type === "file" ? Object.values(e.qualities).map(t => As(t.url)).filter(t => !!t) : []
}

function $u(e) {
  const t = {};
  return Object.entries(e.headers ?? {}).forEach(s => {
    t[s[0]] = s[1]
  }), Object.entries(e.preferredHeaders ?? {}).forEach(s => {
    t[s[0]] = s[1]
  }), t
}
async function pn(e) {
  await rn({
    ruleId: nn.PREPARE_STREAM,
    targetDomains: Vu(e),
    requestHeaders: $u(e)
  })
}

function bn() {
  return he() ? ss({
    fetcher: qo(),
    target: rs.BROWSER_EXTENSION,
    consistentIpForRequests: !0
  }) : ss({
    fetcher: Ka(fetch),
    proxiedFetcher: Ko(),
    target: rs.BROWSER
  })
}
const Hu = {
    "4k": "4k",
    1080: "1080",
    480: "480",
    360: "360",
    720: "720",
    unknown: "unknown"
  },
  Wu = Object.keys(Hu),
  Gu = ["mp4"];

function Ku(e) {
  return Wu.includes(e)
}

function yn(e) {
  if (e.stream.type === "hls") return {
    type: "hls",
    url: e.stream.playlist,
    headers: e.stream.headers,
    preferredHeaders: e.stream.preferredHeaders
  };
  if (e.stream.type === "file") {
    const t = {};
    return Object.entries(e.stream.qualities).forEach(s => {
      if (!Ku(s[0])) {
        console.warn(`unrecognized quality: ${s[0]}`);
        return
      }
      if (!Gu.includes(s[1].type)) {
        console.warn(`unrecognized file type: ${s[1].type}`);
        return
      }
      t[s[0]] = {
        type: s[1].type,
        url: s[1].url
      }
    }), {
      type: "file",
      qualities: t,
      headers: e.stream.headers,
      preferredHeaders: e.stream.preferredHeaders
    }
  }
  throw new Error("unrecognized type")
}

function zu(e, t, s, r) {
  const a = x(h => h.setSource),
    i = x(h => h.setCaption),
    o = x(h => h.setSourceId),
    l = x(h => h.progress.time),
    c = x(h => h.meta),
    u = W(e),
    {
      report: d
    } = hr(),
    [b, g] = fe(async () => {
      const h = yr();
      let f;
      if (c) {
        try {
          if (h && !he()) {
            const v = an(h);
            f = await (await on(v.scrapeEmbed(r, s), ["completed", "noOutput"])).promise()
          } else f = await bn().runEmbedScraper({
            id: r,
            url: s
          })
        } catch (v) {
          console.error(`Failed to scrape ${r}`, v);
          const y = v instanceof _e ? "notfound" : "failed";
          throw d([Ae(c, t, r, y, v)]), v
        }
        d([Ae(c, t, null, "success", null)]), he() && await pn(f.stream[0]), o(t), i(null), a(yn({
          stream: f.stream[0]
        }), gn(f.stream[0].captions), l), u.close()
      }
    }, [r, t, c, u, d, i]);
  return {
    run: g,
    loading: b.loading,
    errored: !!b.error
  }
}

function qu(e, t) {
  const s = x(b => b.meta),
    r = x(b => b.setSource),
    a = x(b => b.setCaption),
    i = x(b => b.setSourceId),
    o = x(b => b.progress.time),
    l = W(t),
    {
      report: c
    } = hr(),
    [u, d] = fe(async () => {
      if (!e || !s) return null;
      const b = Qr(s),
        g = yr();
      let h;
      try {
        if (g && !he()) {
          const f = an(g);
          h = await (await on(f.scrapeSource(e, b), ["completed", "noOutput"])).promise()
        } else h = await bn().runSourceScraper({
          id: e,
          media: b
        })
      } catch (f) {
        console.error(`Failed to scrape ${e}`, f);
        const p = f instanceof _e ? "notfound" : "failed";
        throw c([Ae(s, e, null, p, f)]), f
      }
      if (c([Ae(s, e, null, "success", null)]), h.stream) return he() && await pn(h.stream[0]), a(null), r(yn({
        stream: h.stream[0]
      }), gn(h.stream[0].captions), o), i(e), l.close(), null;
      if (h.embeds.length === 1) {
        let f;
        if (!s) return;
        try {
          if (g && !he()) {
            const v = an(g);
            f = await (await on(v.scrapeEmbed(h.embeds[0].embedId, h.embeds[0].url), ["completed", "noOutput"])).promise()
          } else f = await bn().runEmbedScraper({
            id: h.embeds[0].embedId,
            url: h.embeds[0].url
          })
        } catch (v) {
          console.error(`Failed to scrape ${h.embeds[0].embedId}`, v);
          const y = v instanceof _e ? "notfound" : "failed";
          throw c([Ae(s, e, h.embeds[0].embedId, y, v)]), v
        }
        c([Ae(s, e, h.embeds[0].embedId, "success", null)]), i(e), a(null), he() && await pn(f.stream[0]), r(yn({
          stream: f.stream[0]
        }), gn(f.stream[0].captions), o), l.close()
      }
      return h.embeds
    }, [e, s, l, a]);
  return {
    run: d,
    watching: (u.value ?? null) === null,
    loading: u.loading,
    items: u.value,
    notfound: u.error instanceof _e,
    errored: !!u.error
  }
}

function Qu(e) {
  return n.jsx("div", {
    className: "h-full grid grid-rows-[1fr]",
    children: n.jsx("div", {
      className: "px-6 h-full flex flex-col justify-start overflow-y-auto overflow-x-hidden",
      children: e.children
    })
  })
}

function Yu(e) {
  return n.jsx("div", {
    className: "[&>*]:px-6 h-full grid grid-rows-[auto,1fr] [&>*:nth-child(2)]:overflow-y-auto [&>*:nth-child(2)]:overflow-x-hidden",
    children: e.children
  })
}
const Xu = Object.freeze(Object.defineProperty({
  __proto__: null,
  Card: Qu,
  CardWithScrollable: Yu
}, Symbol.toStringTag, {
  value: "Module"
}));

function ca(e) {
  return n.jsx("div", {
    children: n.jsxs("h3", {
      className: "font-bold text-video-context-type-main pb-3 pt-5 border-b border-video-context-border flex justify-between items-center",
      children: [n.jsx("div", {
        className: "flex items-center space-x-3",
        children: e.children
      }), n.jsx("div", {
        children: e.rightSide
      })]
    })
  })
}

function Ju(e) {
  return n.jsx("button", {
    type: "button",
    onClick: e.onClick,
    children: n.jsx(P, {
      className: "text-xl",
      icon: e.icon
    })
  })
}

function Zu() {
  return n.jsx("hr", {
    className: "!my-4 border-0 w-full h-px bg-video-context-border"
  })
}

function ed(e) {
  return n.jsx("p", {
    className: "text-sm mt-8 font-medium",
    children: e.children
  })
}

function td(e) {
  return n.jsx("a", {
    type: "button",
    className: "text-video-context-type-accent cursor-pointer",
    onClick: e.onClick,
    children: e.children
  })
}

function nd(e) {
  return n.jsx("p", {
    className: "font-medium",
    children: e.children
  })
}

function sd(e) {
  return n.jsx("p", {
    className: e.marginClass ?? "my-3",
    children: e.children
  })
}

function rd(e) {
  return n.jsx("span", {
    className: "text-white",
    children: e.children
  })
}

function ad(e) {
  return n.jsx("div", {
    className: "w-full h-full flex justify-center items-center text-center",
    children: n.jsxs("div", {
      className: "flex items-center gap-4 flex-col",
      children: [e.noIcon ? null : n.jsx("div", {
        className: "w-16 h-10 border border-video-context-border rounded-lg flex justify-center items-center",
        children: n.jsx(P, {
          className: "text-xl",
          icon: w.EYE_SLASH
        })
      }), e.title ? n.jsx("h2", {
        className: "text-white text-lg font-bold",
        children: e.title
      }) : null, n.jsx("div", {
        children: e.children
      })]
    })
  })
}
const id = Object.freeze(Object.defineProperty({
  __proto__: null,
  Anchor: td,
  Divider: Zu,
  FieldTitle: nd,
  Highlight: rd,
  IconButton: Ju,
  Paragraph: sd,
  SmallText: ed,
  TextDisplay: ad,
  Title: ca
}, Symbol.toStringTag, {
  value: "Module"
}));

function ua(e) {
  return n.jsxs("span", {
    className: "text-white flex items-center font-medium",
    children: [e.children, n.jsx(P, {
      className: "text-xl ml-1 -mr-1.5",
      icon: w.CHEVRON_RIGHT
    })]
  })
}

function Wn(e) {
  return n.jsx("span", {
    className: C(["font-medium text-left", e.textClass || "text-video-context-type-main"]),
    children: e.children
  })
}

function od(e) {
  return n.jsxs(ca, {
    rightSide: e.rightSide,
    children: [n.jsx("button", {
      type: "button",
      className: "-ml-2 p-2 rounded tabbable hover:bg-video-context-light hover:bg-opacity-10",
      onClick: e.onClick,
      children: n.jsx(P, {
        className: "text-xl",
        icon: w.ARROW_LEFT
      })
    }), n.jsx("span", {
      className: "line-clamp-1 break-all",
      children: e.children
    })]
  })
}

function Gn(e) {
  const t = C("flex py-2 px-3 rounded-lg w-full -ml-3", {
      "cursor-default": !e.clickable,
      "hover:bg-video-context-hoverColor hover:bg-opacity-50 cursor-pointer tabbable": e.clickable,
      "bg-video-context-hoverColor bg-opacity-50": e.active
    }),
    s = {
      width: "calc(100% + 1.5rem)"
    },
    r = n.jsxs("div", {
      className: C("flex items-center flex-1", e.className),
      children: [n.jsx("div", {
        className: "flex-1 text-left",
        children: e.children
      }), n.jsx("div", {
        className: "flex",
        children: e.rightSide
      })]
    });
  return e.onClick ? n.jsx("button", {
    type: "button",
    className: t,
    style: s,
    onClick: e.onClick,
    "data-active-link": e.active ? !0 : void 0,
    children: r
  }) : n.jsx("div", {
    className: t,
    style: s,
    "data-active-link": e.active ? !0 : void 0,
    children: r
  })
}

function ld(e) {
  const t = n.jsx(ua, {
    children: e.rightText
  });
  return n.jsx(Gn, {
    onClick: e.onClick,
    active: e.active,
    clickable: !0,
    rightSide: t,
    children: n.jsx(Wn, {
      children: e.children
    })
  })
}

function Ge(e) {
  let t;
  return e.selected && (t = n.jsx(P, {
    icon: w.CIRCLE_CHECK,
    className: "text-xl text-video-context-type-accent"
  })), e.error && (t = n.jsx("span", {
    className: "flex items-center text-video-context-error",
    children: n.jsx(P, {
      className: "ml-2",
      icon: w.WARNING
    })
  })), e.loading && (t = n.jsx(Ut, {
    className: "text-lg"
  })), n.jsx(Gn, {
    onClick: e.onClick,
    clickable: !e.disabled,
    rightSide: t,
    children: n.jsx(Wn, {
      textClass: C({
        "text-white": e.selected,
        "text-video-context-type-main text-opacity-40": e.disabled
      }),
      children: e.children
    })
  })
}
const cd = Object.freeze(Object.defineProperty({
  __proto__: null,
  BackLink: od,
  Chevron: ua,
  ChevronLink: ld,
  Link: Gn,
  LinkTitle: Wn,
  SelectableLink: Ge
}, Symbol.toStringTag, {
  value: "Module"
}));

function ud(e) {
  return n.jsx("h3", {
    className: C("uppercase font-bold text-video-context-type-secondary text-xs pt-8 pl-1 pb-2.5 border-b border-video-context-border", e.className),
    children: e.children
  })
}

function dd(e) {
  return n.jsx("div", {
    className: C("pt-4 space-y-1", e.className),
    children: e.children
  })
}

function md(e) {
  const t = m.useRef(null);
  return m.useEffect(() => {
    var o, l, c;
    const s = (o = t.current) == null ? void 0 : o.querySelector("[data-active-link]"),
      r = (l = t.current) == null ? void 0 : l.getBoundingClientRect(),
      a = s == null ? void 0 : s.getBoundingClientRect();
    if (!a || !r) return;
    const i = a.top - r.top;
    (c = t.current) == null || c.scrollTo(0, i - r.height / 2 + a.height / 2)
  }, [e.loaded]), n.jsx("div", {
    ref: t,
    className: C("pt-4 space-y-1", e.className),
    children: e.children
  })
}
const hd = Object.freeze(Object.defineProperty({
    __proto__: null,
    ScrollToActiveSection: md,
    Section: dd,
    SectionTitle: ud
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  N = {
    ...Xu,
    ...cd,
    ...hd,
    ...id
  };

function fd(e) {
  const {
    t
  } = I(), s = t("player.menus.sources.unknownOption"), r = m.useMemo(() => {
    if (!e.embedId) return s;
    const l = Dt().find(c => c.id === e.embedId);
    return (l == null ? void 0 : l.name) ?? s
  }, [e.embedId, s]), {
    run: a,
    errored: i,
    loading: o
  } = zu(e.routerId, e.sourceId, e.url, e.embedId);
  return n.jsx(Ge, {
    loading: o,
    error: i,
    onClick: a,
    children: n.jsx("span", {
      className: "flex flex-col",
      children: n.jsx("span", {
        children: r
      })
    })
  })
}

function gd(e) {
  let {
    sourceId: t,
    id: s
  } = e;
  const {
    t: r
  } = I(), a = W(s), {
    run: i,
    watching: o,
    notfound: l,
    loading: c,
    items: u,
    errored: d
  } = qu(t, s), b = m.useMemo(() => {
    if (!t) return "...";
    const f = Dt().find(v => v.id === t);
    return (f == null ? void 0 : f.name) ?? "..."
  }, [t]), g = m.useRef(null);
  m.useEffect(() => {
    g.current !== t && (g.current = t, t && i())
  }, [i, t]);
  let h = null;
  return c ? h = n.jsx(N.TextDisplay, {
    noIcon: !0,
    children: n.jsx($e, {})
  }) : l ? h = n.jsx(N.TextDisplay, {
    title: r("player.menus.sources.noStream.title") ?? void 0,
    children: r("player.menus.sources.noStream.text")
  }) : (u == null ? void 0 : u.length) === 0 ? h = n.jsx(N.TextDisplay, {
    title: r("player.menus.sources.noEmbeds.title") ?? void 0,
    children: r("player.menus.sources.noEmbeds.text")
  }) : d ? h = n.jsx(N.TextDisplay, {
    title: r("player.menus.sources.failed.title") ?? void 0,
    children: r("player.menus.sources.failed.text")
  }) : o ? h = null : u && t && (h = u.map(f => n.jsx(fd, {
    embedId: f.embedId,
    url: f.url,
    routerId: s,
    sourceId: t
  }, `${f.embedId}-${f.url}`))), n.jsxs(n.Fragment, {
    children: [n.jsx(N.BackLink, {
      onClick: () => a.navigate("/source"),
      children: b
    }), n.jsx(N.Section, {
      children: h
    })]
  })
}

function xd(e) {
  let {
    id: t,
    onChoose: s
  } = e;
  const {
    t: r
  } = I(), a = W(t), i = x(c => {
    var u;
    return (u = c.meta) == null ? void 0 : u.type
  }), o = x(c => c.sourceId), l = m.useMemo(() => i ? Dt().filter(c => c.type === "source").filter(c => {
    var u;
    return (u = c.mediaTypes) == null ? void 0 : u.includes(i)
  }) : [], [i]);
  return n.jsxs(n.Fragment, {
    children: [n.jsx(N.BackLink, {
      onClick: () => a.navigate("/"),
      children: r("player.menus.sources.title")
    }), n.jsx(N.Section, {
      className: "pb-4",
      children: l.map(c => n.jsx(Ge, {
        onClick: () => {
          s == null || s(c.id), a.navigate("/source/embeds")
        },
        selected: c.id === o,
        children: c.name
      }, c.id))
    })]
  })
}

function pd(e) {
  return n.jsx(Ge, {
    selected: e.selected,
    onClick: e.onClick,
    children: n.jsxs("span", {
      className: "flex items-center",
      children: [n.jsx("span", {
        "data-code": e.langCode,
        className: "mr-3 inline-flex",
        children: n.jsx(ar, {
          langCode: e.langCode
        })
      }), n.jsx("span", {
        children: e.children
      })]
    })
  })
}

function bd(e) {
  let {
    id: t
  } = e;
  const {
    t: s
  } = I(), r = s("player.menus.subtitles.unknownLanguage"), a = W(t), i = x(u => u.audioTracks), o = x(u => u.currentAudioTrack), l = x(u => {
    var d;
    return (d = u.display) == null ? void 0 : d.changeAudioTrack
  }), c = m.useCallback(u => {
    l == null || l(u), a.close()
  }, [a, l]);
  return n.jsxs(n.Fragment, {
    children: [n.jsx(N.BackLink, {
      onClick: () => a.navigate("/"),
      children: "Audio"
    }), n.jsx(N.Section, {
      className: "flex flex-col pb-4",
      children: i.map(u => n.jsx(pd, {
        selected: u.id === (o == null ? void 0 : o.id),
        langCode: u.language,
        onClick: i.includes(u) ? () => c(u) : void 0,
        children: Nt(u.language) ?? r
      }, u.id))
    })]
  })
}
const yd = function (t) {
    return n.jsx("button", {
      type: "button",
      onClick: t.onClick,
      className: C("w-11 h-6 p-1 rounded-full grid transition-colors duration-100 group/toggle tabbable", t.enabled ? "bg-buttons-toggle" : "bg-buttons-toggleDisabled"),
      children: n.jsx("div", {
        className: "relative w-full h-full",
        children: n.jsx("div", {
          className: C("scale-90 group-hover/toggle:scale-100 h-full aspect-square rounded-full bg-white absolute transition-all duration-100", t.enabled ? "left-full transform -translate-x-full" : "left-0")
        })
      })
    })
  },
  Kn = yd,
  vd = function (t) {
    return n.jsx("button", {
      type: "button",
      className: C("tabbable p-1.5 bg-video-context-buttonFocus rounded transition-colors duration-100", t.active ? "bg-opacity-100" : "bg-opacity-0 cursor-pointer"),
      onClick: t.onClick,
      children: n.jsx("div", {
        className: "w-6 h-6 rounded-full flex justify-center items-center",
        style: {
          backgroundColor: t.color
        },
        children: t.active ? n.jsx(P, {
          className: "text-sm text-black",
          icon: w.CHECKMARK
        }) : null
      })
    })
  },
  jd = vd,
  wd = function (t) {
    const s = m.useRef(null),
      r = m.useRef(null),
      a = (t.value - t.min) / (t.max - t.min),
      i = m.useCallback(p => {
        var R;
        const y = t.max - t.min,
          j = Math.min(Math.max(p, 0), 1);
        (R = t.onChange) == null || R.call(t, t.min + y * j)
      }, [t]),
      {
        dragging: o,
        dragPercentage: l,
        dragMouseDown: c
      } = Hn(r, i, !0),
      [u, d] = m.useState(!1),
      [b, g] = m.useState("");
    m.useEffect(() => {
      function p(y) {
        var j;
        y.key === "Enter" && u && ((j = s.current) == null || j.blur())
      }
      return window.addEventListener("keydown", p), () => {
        window.removeEventListener("keydown", p)
      }
    }, [u]);
    const h = `tabbable py-1 bg-video-context-inputBg rounded text-white cursor-text ${t.controlButtons?"text-center px-4 w-24":"px-3 text-left w-20"}`,
      f = "tabbable hover:text-white transition-colors duration-100 w-full h-full flex justify-center items-center hover:bg-video-context-buttonOverInputHover rounded",
      v = t.textTransformer ?? (p => p);
    return n.jsxs("div", {
      children: [n.jsx(N.FieldTitle, {
        children: t.label
      }), n.jsxs("div", {
        className: "grid items-center grid-cols-[1fr,auto] gap-4",
        children: [n.jsx("div", {
          ref: r,
          children: n.jsx("div", {
            className: "group/progress w-full h-8 flex items-center cursor-pointer",
            onMouseDown: c,
            onTouchStart: c,
            children: n.jsx("div", {
              dir: "ltr",
              className: ["relative w-full h-1 bg-video-context-slider bg-opacity-25 rounded-full transition-[height] duration-100 group-hover/progress:h-1.5", o ? "!h-1.5" : ""].join(" "),
              children: n.jsx("div", {
                className: "absolute top-0 left-0 h-full rounded-full bg-video-context-sliderFilled flex justify-end items-center",
                style: {
                  width: `${Math.max(0,Math.min(1,o?l/100:a))*100}%`
                },
                children: n.jsx("div", {
                  className: ["w-[1rem] min-w-[1rem] h-[1rem] border-[4px] border-video-context-sliderFilled rounded-full transform translate-x-1/2 bg-white transition-[transform] duration-100"].join(" ")
                })
              })
            })
          })
        }), n.jsx("div", {
          children: u ? n.jsx("input", {
            className: h,
            value: b,
            autoFocus: !0,
            onFocus: p => {
              p.target.select()
            },
            onBlur: p => {
              var j;
              d(!1);
              const y = Number(p.target.value);
              Number.isNaN(y) || (j = t.onChange) == null || j.call(t, (t.decimalsAllowed ?? 0) === 0 ? Math.round(y) : y)
            },
            ref: s,
            onChange: p => g(p.target.value)
          }) : n.jsxs("div", {
            className: "relative",
            onClick: p => {
              p.target.closest(".actions") || (g(t.value.toFixed(t.decimalsAllowed ?? 0)), d(!0))
            },
            children: [n.jsx("button", {
              className: C(h, t.controlButtons ? "relative" : void 0),
              type: "button",
              tabIndex: 0,
              children: v(t.value.toFixed(t.decimalsAllowed ?? 0))
            }), t.controlButtons ? n.jsxs(n.Fragment, {
              children: [n.jsx("div", {
                className: "actions w-6 h-full absolute left-0 top-0 grid grid-cols-1 items-center justify-center",
                children: n.jsx("button", {
                  type: "button",
                  onClick: () => {
                    var p;
                    return (p = t.onChange) == null ? void 0 : p.call(t, t.value - 1 / 10 ** (t.decimalsAllowed ?? 0))
                  },
                  className: f,
                  children: n.jsx(P, {
                    icon: w.CHEVRON_LEFT
                  })
                })
              }), n.jsx("div", {
                className: "actions w-6 h-full absolute right-0 top-0 grid grid-cols-1 items-center justify-center",
                children: n.jsx("button", {
                  type: "button",
                  onClick: () => {
                    var p;
                    return (p = t.onChange) == null ? void 0 : p.call(t, t.value + 1 / 10 ** (t.decimalsAllowed ?? 0))
                  },
                  className: f,
                  children: n.jsx(P, {
                    icon: w.CHEVRON_RIGHT
                  })
                })
              })]
            }) : null]
          })
        })]
      })]
    })
  },
  yt = wd,
  kd = ["#ffffff", "#b0b0b0", "#80b1fa", "#e2e535"];

function Nd(e) {
  let {
    id: t
  } = e;
  const {
    t: s
  } = I(), r = W(t), a = H(d => d.styling), i = H(d => d.overrideCasing), o = H(d => d.delay), l = H(d => d.setOverrideCasing), c = H(d => d.setDelay), u = H(d => d.updateStyling);
  return n.jsxs(n.Fragment, {
    children: [n.jsx(N.BackLink, {
      onClick: () => r.navigate("/captions"),
      children: s("player.menus.subtitles.settings.backlink")
    }), n.jsxs(N.Section, {
      className: "space-y-6 pb-5",
      children: [n.jsx(yt, {
        label: s("player.menus.subtitles.settings.delay"),
        max: 10,
        min: -10,
        onChange: d => c(d),
        value: o,
        textTransformer: d => `${d}s`,
        decimalsAllowed: 1,
        controlButtons: !0
      }), n.jsxs("div", {
        className: "flex justify-between items-center",
        children: [n.jsx(N.FieldTitle, {
          children: s("player.menus.subtitles.settings.fixCapitals")
        }), n.jsx("div", {
          className: "flex justify-center items-center",
          children: n.jsx(Kn, {
            enabled: i,
            onClick: () => l(!i)
          })
        })]
      }), n.jsx(N.Divider, {}), n.jsx(yt, {
        label: s("settings.subtitles.backgroundLabel"),
        max: 100,
        min: 0,
        onChange: d => u({
          backgroundOpacity: d / 100
        }),
        value: a.backgroundOpacity * 100,
        textTransformer: d => `${d}%`
      }), n.jsx(yt, {
        label: s("settings.subtitles.backgroundBlurLabel"),
        max: 100,
        min: 0,
        onChange: d => u({
          backgroundBlur: d / 100
        }),
        value: a.backgroundBlur * 100,
        textTransformer: d => `${d}%`
      }), n.jsx(yt, {
        label: s("settings.subtitles.textSizeLabel"),
        max: 200,
        min: 1,
        textTransformer: d => `${d}%`,
        onChange: d => u({
          size: d / 100
        }),
        value: a.size * 100
      }), n.jsxs("div", {
        className: "flex justify-between items-center",
        children: [n.jsx(N.FieldTitle, {
          children: s("settings.subtitles.colorLabel")
        }), n.jsx("div", {
          className: "flex justify-center items-center",
          children: kd.map(d => n.jsx(jd, {
            onClick: () => u({
              color: d
            }),
            color: d,
            active: a.color === d
          }, d))
        })]
      })]
    })]
  })
}

function Sd(e) {
  const [t, s] = m.useState(!1), r = l => {
    l.preventDefault(), s(!0)
  }, a = l => {
    l.currentTarget.contains(l.relatedTarget) || s(!1)
  }, i = l => {
    l.preventDefault()
  }, o = l => {
    l.preventDefault(), s(!1), e.onDrop(l)
  };
  return m.useEffect(() => {
    e.onDraggingChange(t)
  }, [t, e]), n.jsx("div", {
    onDragEnter: r,
    onDragLeave: a,
    onDragOver: i,
    onDrop: o,
    className: e.className,
    children: e.children
  })
}

function Ed(e) {
  return n.jsxs("div", {
    className: "w-full relative",
    children: [n.jsx(P, {
      className: "pointer-events-none absolute top-1/2 left-3 transform -translate-y-1/2 text-video-context-inputPlaceholder",
      icon: w.SEARCH
    }), n.jsx("input", {
      placeholder: "Search",
      className: "w-full py-2 px-3 pl-[calc(0.75rem+24px)] tabbable bg-video-context-inputBg rounded placeholder:text-video-context-inputPlaceholder",
      value: e.value,
      onInput: t => e.onInput(t.currentTarget.value)
    })]
  })
}

function vn(e) {
  return n.jsx(Ge, {
    selected: e.selected,
    loading: e.loading,
    error: e.error,
    onClick: e.onClick,
    children: n.jsxs("span", {
      "data-active-link": e.selected ? !0 : void 0,
      className: "flex items-center",
      children: [n.jsx("span", {
        "data-code": e.countryCode,
        className: "mr-3 inline-flex",
        children: n.jsx(ar, {
          langCode: e.countryCode
        })
      }), n.jsx("span", {
        children: e.children
      })]
    })
  })
}

function Cd() {
  const {
    t: e
  } = I(), t = x(i => {
    var o;
    return (o = i.caption.selected) == null ? void 0 : o.language
  }), s = x(i => i.setCaption), r = H(i => i.setCustomSubs), a = m.useRef(null);
  return n.jsxs(vn, {
    selected: t === "custom",
    onClick: () => {
      var i;
      return (i = a.current) == null ? void 0 : i.click()
    },
    children: [e("player.menus.subtitles.customChoice"), n.jsx("input", {
      className: "hidden",
      ref: a,
      accept: Zr.join(","),
      type: "file",
      onChange: i => {
        if (!i.target.files) return;
        const o = new FileReader;
        o.addEventListener("load", l => {
          if (!l.target || typeof l.target.result != "string") return;
          const c = _t(l.target.result, "srt");
          s({
            language: "custom",
            srtData: c,
            id: "custom-caption"
          }), r()
        }), o.readAsText(i.target.files[0], "utf-8")
      }
    })]
  })
}

function Id(e, t) {
  const {
    t: s
  } = I(), r = s("player.menus.subtitles.unknownLanguage");
  return m.useMemo(() => {
    const a = e.map(l => ({
        ...l,
        languageName: Nt(l.language) ?? r
      })),
      i = no(a.map(l => l.language));
    let o = a.sort((l, c) => i.indexOf(l.language) - i.indexOf(c.language));
    return t.trim().length > 0 && (o = new oo(a, {
      includeScore: !0,
      keys: ["languageName"]
    }).search(t).map(c => c.item)), o
  }, [e, t, r])
}

function Ld(e) {
  let {
    id: t
  } = e;
  const {
    t: s
  } = I(), r = W(t), a = x(E => {
    var k;
    return (k = E.caption.selected) == null ? void 0 : k.id
  }), [i, o] = m.useState(null), {
    selectCaptionById: l,
    disable: c
  } = Kt(), u = x(E => E.captionList), d = x(E => {
    var k;
    return (k = E.display) == null ? void 0 : k.getCaptionList
  }), [b, g] = m.useState(!1), h = x(E => E.setCaption);

  function f(E) {
    const k = E.dataTransfer.files,
      S = k[0];
    if (!k || !S) return;
    const _ = `.${S.name.split(".").pop()}`;
    if (!_ || !Zr.includes(_)) return;
    const A = new FileReader;
    A.addEventListener("load", M => {
      if (!M.target || typeof M.target.result != "string") return;
      const Q = _t(M.target.result, "srt");
      h({
        language: "custom",
        srtData: Q,
        id: "custom-caption"
      })
    }), A.readAsText(S)
  }
  const v = m.useMemo(() => u.length !== 0 ? u : (d == null ? void 0 : d()) ?? [], [u, d]),
    [p, y] = m.useState(""),
    j = Id(v, p),
    [R, T] = fe(async E => (o(E), l(E)), [l, o]),
    L = j.map(E => n.jsx(vn, {
      countryCode: E.language,
      selected: E.id === a,
      loading: E.id === i && R.loading,
      error: E.id === i && R.error ? R.error.toString() : void 0,
      onClick: () => T(E.id),
      children: E.languageName
    }, E.id));
  return n.jsxs(n.Fragment, {
    children: [n.jsxs("div", {
      children: [n.jsx("div", {
        className: C("absolute inset-0 flex items-center justify-center text-white z-10 pointer-events-none transition-opacity duration-300", b ? "opacity-100" : "opacity-0"),
        children: n.jsxs("div", {
          className: "flex flex-col items-center",
          children: [n.jsx(P, {
            className: "text-5xl mb-4",
            icon: w.UPLOAD
          }), n.jsx("span", {
            className: "text-xl weight font-medium",
            children: s("player.menus.subtitles.dropSubtitleFile")
          })]
        })
      }), n.jsx(N.BackLink, {
        onClick: () => r.navigate("/"),
        rightSide: n.jsx("button", {
          type: "button",
          onClick: () => r.navigate("/captions/settings"),
          className: "py-1 -my-1 px-3 -mx-3 rounded tabbable",
          children: s("player.menus.subtitles.customizeLabel")
        }),
        children: s("player.menus.subtitles.title")
      })]
    }), n.jsxs(Sd, {
      className: `transition duration-300 ${b?"opacity-20":""}`,
      onDraggingChange: E => {
        g(E)
      },
      onDrop: E => f(E),
      children: [n.jsx("div", {
        className: "mt-3",
        children: n.jsx(Ed, {
          value: p,
          onInput: y
        })
      }), n.jsxs(N.ScrollToActiveSection, {
        className: "!pt-1 mt-2 pb-3",
        children: [n.jsx(vn, {
          onClick: () => c(),
          selected: !a,
          children: s("player.menus.subtitles.offChoice")
        }), n.jsx(Cd, {}), L]
      })]
    })]
  })
}

function Td() {
  const e = x(r => r.source),
    t = x(r => r.currentQuality);
  return m.useMemo(() => {
    var r;
    return (e == null ? void 0 : e.type) === "file" && t ? ((r = e.qualities[t]) == null ? void 0 : r.url) ?? null : (e == null ? void 0 : e.type) === "hls" ? e.url : null
  }, [e, t])
}

function De(e) {
  return n.jsx(ye, {
    i18nKey: e.k,
    components: {
      bold: n.jsx(N.Highlight, {}),
      br: n.jsx("br", {}),
      ios_share: n.jsx(P, {
        icon: w.IOS_SHARE,
        className: "inline-block text-xl -mb-1"
      }),
      ios_files: n.jsx(P, {
        icon: w.IOS_FILES,
        className: "inline-block text-xl -mb-1"
      })
    }
  })
}

function Pd(e) {
  let {
    id: t
  } = e;
  const s = W(t),
    {
      t: r
    } = I(),
    a = Td(),
    [, i] = nr(),
    o = x(u => {
      var d;
      return (d = u.source) == null ? void 0 : d.type
    }),
    l = x(u => {
      var d;
      return (d = u.caption) == null ? void 0 : d.selected
    }),
    c = m.useCallback(() => {
      const u = l ? ou(l == null ? void 0 : l.srtData) : null;
      u && window.open(u)
    }, [l]);
  return a ? n.jsxs(n.Fragment, {
    children: [n.jsx(N.BackLink, {
      onClick: () => s.navigate("/"),
      children: r("player.menus.downloads.title")
    }), n.jsx(N.Section, {
      children: n.jsx("div", {
        children: o === "hls" ? n.jsxs(n.Fragment, {
          children: [n.jsx(N.Paragraph, {
            marginClass: "mb-6",
            children: n.jsx(De, {
              k: "player.menus.downloads.hlsDisclaimer"
            })
          }), n.jsx(D, {
            className: "w-full",
            theme: "purple",
            href: a,
            onClick: u => {
              u.preventDefault(), i(a)
            },
            children: r("player.menus.downloads.copyHlsPlaylist")
          }), n.jsx(D, {
            className: "w-full mt-2",
            onClick: c,
            disabled: !l,
            theme: "secondary",
            children: r("player.menus.downloads.downloadSubtitle")
          })]
        }) : n.jsxs(n.Fragment, {
          children: [n.jsx(N.ChevronLink, {
            onClick: () => s.navigate("/download/pc"),
            children: r("player.menus.downloads.onPc.title")
          }), n.jsx(N.ChevronLink, {
            onClick: () => s.navigate("/download/ios"),
            children: r("player.menus.downloads.onIos.title")
          }), n.jsx(N.ChevronLink, {
            onClick: () => s.navigate("/download/android"),
            children: r("player.menus.downloads.onAndroid.title")
          }), n.jsx(N.Divider, {}), n.jsx(N.Paragraph, {
            marginClass: "my-6",
            children: n.jsx(De, {
              k: "player.menus.downloads.disclaimer"
            })
          }), n.jsx(D, {
            className: "w-full",
            href: a,
            theme: "purple",
            children: r("player.menus.downloads.downloadVideo")
          }), n.jsx(D, {
            className: "w-full mt-2",
            onClick: c,
            disabled: !l,
            theme: "secondary",
            download: "subtitles.srt",
            children: r("player.menus.downloads.downloadSubtitle")
          })]
        })
      })
    })]
  }) : null
}

function Rd(e) {
  let {
    id: t
  } = e;
  const s = W(t),
    {
      t: r
    } = I();
  return n.jsxs(n.Fragment, {
    children: [n.jsx(N.BackLink, {
      onClick: () => s.navigate("/download"),
      children: r("player.menus.downloads.onAndroid.shortTitle")
    }), n.jsx(N.Section, {
      children: n.jsx(N.Paragraph, {
        children: n.jsx(De, {
          k: "player.menus.downloads.onAndroid.1"
        })
      })
    })]
  })
}

function Ad(e) {
  let {
    id: t
  } = e;
  const s = W(t),
    {
      t: r
    } = I();
  return n.jsxs(n.Fragment, {
    children: [n.jsx(N.BackLink, {
      onClick: () => s.navigate("/download"),
      children: r("player.menus.downloads.onPc.shortTitle")
    }), n.jsx(N.Section, {
      children: n.jsx(N.Paragraph, {
        children: n.jsx(De, {
          k: "player.menus.downloads.onPc.1"
        })
      })
    })]
  })
}

function _d(e) {
  let {
    id: t
  } = e;
  const s = W(t);
  return n.jsxs(n.Fragment, {
    children: [n.jsx(N.BackLink, {
      onClick: () => s.navigate("/download"),
      children: n.jsx(De, {
        k: "player.menus.downloads.onIos.shortTitle"
      })
    }), n.jsx(N.Section, {
      children: n.jsx(N.Paragraph, {
        children: n.jsx(De, {
          k: "player.menus.downloads.onIos.1"
        })
      })
    })]
  })
}

function Od(e) {
  let {
    id: t
  } = e;
  return n.jsxs(n.Fragment, {
    children: [n.jsx(J, {
      id: t,
      path: "/download",
      width: 343,
      height: 490,
      children: n.jsx(N.CardWithScrollable, {
        children: n.jsx(Pd, {
          id: t
        })
      })
    }), n.jsx(J, {
      id: t,
      path: "/download/ios",
      width: 343,
      height: 440,
      children: n.jsx(N.CardWithScrollable, {
        children: n.jsx(_d, {
          id: t
        })
      })
    }), n.jsx(J, {
      id: t,
      path: "/download/android",
      width: 343,
      height: 440,
      children: n.jsx(N.CardWithScrollable, {
        children: n.jsx(Rd, {
          id: t
        })
      })
    }), n.jsx(J, {
      id: t,
      path: "/download/pc",
      width: 343,
      height: 440,
      children: n.jsx(N.CardWithScrollable, {
        children: n.jsx(Ad, {
          id: t
        })
      })
    })]
  })
}
const Md = function (t) {
    return n.jsx("div", {
      className: "flex items-center bg-video-context-buttons-list p-1 rounded-lg",
      children: t.options.map(s => n.jsxs("button", {
        type: "button",
        className: C("w-full px-2 py-1 rounded-md tabbable", t.selected === s ? "bg-video-context-buttons-active text-white" : null),
        onClick: () => t.onClick(s),
        children: [s, "x"]
      }, s))
    })
  },
  Dd = Md;

function Bd(e) {
  let {
    id: t
  } = e;
  const {
    t: s
  } = I(), r = W(t), a = x(c => c.mediaPlaying.playbackRate), i = x(c => c.display), o = m.useCallback(c => {
    i == null || i.setPlaybackRate(c)
  }, [i]), l = [.25, .5, 1, 1.5, 2];
  return n.jsxs(n.Fragment, {
    children: [n.jsx(N.BackLink, {
      onClick: () => r.navigate("/"),
      children: s("player.menus.playback.title")
    }), n.jsx(N.Section, {
      children: n.jsxs("div", {
        className: "space-y-4 mt-3",
        children: [n.jsx(N.FieldTitle, {
          children: s("player.menus.playback.speedLabel")
        }), n.jsx(Dd, {
          options: l,
          selected: a,
          onClick: o
        })]
      })
    })]
  })
}
const Ud = {
  unknown: !1,
  360: !0,
  480: !0,
  720: !0,
  1080: !0,
  "4k": !1
};

function Fd() {
  const e = x(s => {
    var r;
    return (r = s.source) == null ? void 0 : r.type
  });
  return m.useMemo(() => {
    const s = document.createElement("video");
    return !(e !== "hls" || me.isSupported() || !jt(s))
  }, [e])
}

function Vd(e) {
  let {
    id: t
  } = e;
  const s = W(t),
    r = Fd(),
    a = x(f => f.qualities),
    i = x(f => f.currentQuality),
    o = x(f => f.switchQuality),
    l = x(f => f.enableAutomaticQuality),
    c = Ze(f => f.setAutomaticQuality),
    u = Ze(f => f.setLastChosenQuality),
    d = Ze(f => f.quality.automaticQuality),
    b = m.useCallback(f => {
      u(f), c(!1), o(f), s.close()
    }, [s, o, u, c]),
    g = m.useCallback(() => {
      const f = !d;
      c(f), f && l()
    }, [c, d, l]),
    h = zc.filter(f => !!(Ud[f] || a.includes(f)));
  return n.jsxs(n.Fragment, {
    children: [n.jsx(N.BackLink, {
      onClick: () => s.navigate("/"),
      children: as("player.menus.quality.title")
    }), n.jsxs(N.Section, {
      className: "flex flex-col pb-4",
      children: [h.map(f => n.jsx(Ge, {
        selected: f === i,
        onClick: a.includes(f) ? () => b(f) : void 0,
        disabled: !a.includes(f),
        children: qr(f)
      }, f)), n.jsx(N.Divider, {}), n.jsx(N.Link, {
        rightSide: n.jsx(Kn, {
          onClick: g,
          enabled: d
        }),
        children: as("player.menus.quality.automaticLabel")
      }), n.jsx(N.SmallText, {
        children: n.jsx(ye, {
          i18nKey: r ? "player.menus.quality.iosNoQuality" : "player.menus.quality.hint",
          children: n.jsx(N.Anchor, {
            onClick: () => s.navigate("/source"),
            children: "text"
          })
        })
      })]
    })]
  })
}

function $d(e) {
  let {
    id: t
  } = e;
  const {
    t: s
  } = I(), r = W(t), a = x(v => v.currentQuality), i = x(v => v.currentAudioTrack), o = x(v => {
    var p;
    return (p = v.caption.selected) == null ? void 0 : p.language
  }), l = H(v => v.enabled), c = x(v => v.sourceId), u = m.useMemo(() => {
    if (!c) return "...";
    const v = Dt().find(p => p.id === c);
    return (v == null ? void 0 : v.name) ?? "..."
  }, [c]), {
    toggleLastUsed: d
  } = Kt(), b = o ? Nt(o) ?? s("player.menus.subtitles.unknownLanguage") : void 0, g = i ? Nt(i.language) ?? s("player.menus.subtitles.unknownLanguage") : void 0, h = x(v => v.source), f = (h == null ? void 0 : h.type) === "file" || (h == null ? void 0 : h.type) === "hls";
  return n.jsxs(N.Card, {
    children: [n.jsx(N.SectionTitle, {
      children: s("player.menus.settings.videoSection")
    }), n.jsxs(N.Section, {
      children: [n.jsx(N.ChevronLink, {
        onClick: () => r.navigate("/quality"),
        rightText: a ? qr(a) : "",
        children: s("player.menus.settings.qualityItem")
      }), i && n.jsx(N.ChevronLink, {
        onClick: () => r.navigate("/audio"),
        rightText: g ?? void 0,
        children: s("player.menus.settings.audioItem")
      }), n.jsx(N.ChevronLink, {
        onClick: () => r.navigate("/source"),
        rightText: u,
        children: s("player.menus.settings.sourceItem")
      }), n.jsx(N.Link, {
        clickable: !0,
        onClick: () => r.navigate(f ? "/download" : "/download/unable"),
        rightSide: n.jsx(P, {
          className: "text-xl",
          icon: w.DOWNLOAD
        }),
        className: f ? "opacity-100" : "opacity-50",
        children: s("player.menus.settings.downloadItem")
      })]
    }), n.jsx(N.SectionTitle, {
      children: s("player.menus.settings.experienceSection")
    }), n.jsxs(N.Section, {
      children: [n.jsx(N.Link, {
        rightSide: n.jsx(Kn, {
          enabled: l,
          onClick: () => d().catch(() => {})
        }),
        children: s("player.menus.settings.enableSubtitles")
      }), n.jsx(N.ChevronLink, {
        onClick: () => r.navigate("/captions"),
        rightText: b ?? void 0,
        children: s("player.menus.settings.subtitleItem")
      }), n.jsx(N.ChevronLink, {
        onClick: () => r.navigate("/playback"),
        children: s("player.menus.settings.playbackItem")
      })]
    })]
  })
}

function Hd(e) {
  let {
    id: t
  } = e;
  const [s, r] = m.useState(null), a = W(t);
  return m.useEffect(() => {
    a.isRouterActive || r(null), a.route === "/" && r(null)
  }, [a.isRouterActive, a.route]), n.jsx(Or, {
    id: t,
    children: n.jsxs(la, {
      id: t,
      children: [n.jsx(J, {
        id: t,
        path: "/",
        width: 343,
        height: 431,
        children: n.jsx($d, {
          id: t
        })
      }), n.jsx(J, {
        id: t,
        path: "/quality",
        width: 343,
        height: 400,
        children: n.jsx(N.Card, {
          children: n.jsx(Vd, {
            id: t
          })
        })
      }), n.jsx(J, {
        id: t,
        path: "/audio",
        width: 343,
        height: 431,
        children: n.jsx(N.Card, {
          children: n.jsx(bd, {
            id: t
          })
        })
      }), n.jsx(J, {
        id: t,
        path: "/captions",
        width: 343,
        height: 431,
        children: n.jsx(N.CardWithScrollable, {
          children: n.jsx(Ld, {
            id: t
          })
        })
      }), n.jsx(J, {
        id: t,
        path: "/captions/settings",
        width: 343,
        height: 450,
        children: n.jsx(N.Card, {
          children: n.jsx(Nd, {
            id: t
          })
        })
      }), n.jsx(J, {
        id: t,
        path: "/source",
        width: 343,
        height: 431,
        children: n.jsx(N.CardWithScrollable, {
          children: n.jsx(xd, {
            id: t,
            onChoose: r
          })
        })
      }), n.jsx(J, {
        id: t,
        path: "/source/embeds",
        width: 343,
        height: 431,
        children: n.jsx(N.CardWithScrollable, {
          children: n.jsx(gd, {
            id: t,
            sourceId: s
          })
        })
      }), n.jsx(J, {
        id: t,
        path: "/playback",
        width: 343,
        height: 215,
        children: n.jsx(N.Card, {
          children: n.jsx(Bd, {
            id: t
          })
        })
      }), n.jsx(Od, {
        id: t
      })]
    })
  })
}

function Wd() {
  return n.jsx(Hd, {
    id: "settings"
  })
}

function _s() {
  const e = W("settings"),
    t = x(s => s.setHasOpenOverlay);
  return m.useEffect(() => {
    t(e.isRouterActive)
  }, [t, e.isRouterActive]), n.jsx(oa, {
    id: e.id,
    children: n.jsx(ge, {
      onClick: () => e.open(),
      icon: w.GEAR
    })
  })
}
const Gd = function (t) {
    const s = t.radius ?? 40;
    return n.jsxs("svg", {
      className: `${t.className??""} -rotate-90`,
      viewBox: "0 0 100 100",
      children: [n.jsx("circle", {
        className: `fill-transparent stroke-type-text stroke-[15] opacity-25 ${t.backingRingClassname??""}`,
        r: s,
        cx: "50",
        cy: "50"
      }), n.jsx("circle", {
        className: "fill-transparent stroke-current stroke-[15] transition-[stroke-dashoffset] duration-150",
        r: s,
        cx: "50",
        cy: "50",
        style: {
          strokeDasharray: `${2*Math.PI*s} ${2*Math.PI*s}`,
          strokeDashoffset: `${2*Math.PI*s-t.percentage/100*(2*Math.PI*s)}`
        }
      })]
    })
  },
  Kd = Gd;

function zn() {
  const {
    meta: e,
    setMeta: t
  } = ea(), s = m.useMemo(() => e ? Qr(e) : null, [e]), r = m.useCallback(i => {
    t(i, U.SCRAPING)
  }, [t]), a = m.useCallback((i, o) => {
    let l;
    if (i.meta.type === B.SERIES) {
      const c = i.meta.seasonData.episodes.find(u => u.id === o);
      if (!c) return null;
      l = {
        type: "show",
        releaseYear: +(i.meta.year ?? 0),
        title: i.meta.title,
        poster: i.meta.poster,
        tmdbId: i.tmdbId ?? "",
        imdbId: i.imdbId,
        episodes: i.meta.seasonData.episodes.map(u => ({
          number: u.number,
          title: u.title,
          tmdbId: u.id
        })),
        episode: {
          number: c.number,
          title: c.title,
          tmdbId: c.id
        },
        season: {
          number: i.meta.seasonData.number,
          title: i.meta.seasonData.title,
          tmdbId: i.meta.seasonData.id
        }
      }
    } else l = {
      type: "movie",
      releaseYear: +(i.meta.year ?? 0),
      title: i.meta.title,
      poster: i.meta.poster,
      tmdbId: i.tmdbId ?? "",
      imdbId: i.imdbId
    };
    return r(l), l
  }, [r]);
  return {
    playerMeta: e,
    setPlayerMeta: a,
    setDirectMeta: r,
    scrapeMedia: s
  }
}
const vt = {};

function Ye(e) {
  if (vt[e]) return vt[e];
  const t = new Date,
    s = new Date(e);
  return vt[e] = s < t, vt[e]
}

function At(e) {
  return n.jsx("div", {
    className: "h-full w-full flex justify-center items-center p-8 text-center",
    children: e.children
  })
}

function da(e, t) {
  const [s, r] = m.useState(null);
  return [Fe(async () => {
    const i = await tt(B.SERIES, e, t);
    return (i == null ? void 0 : i.meta.type) !== B.SERIES ? null : (r(i.meta.seasons), {
      season: i.meta.seasonData,
      fullData: i
    })
  }, [e, t]), s]
}

function zd(e) {
  let {
    selectedSeason: t,
    setSeason: s
  } = e;
  const {
    t: r
  } = I(), a = x(c => c.meta), [i, o] = da((a == null ? void 0 : a.tmdbId) ?? "", t);
  let l = null;
  return o ? l = n.jsx(N.Section, {
    className: "pb-6",
    children: o == null ? void 0 : o.map(c => n.jsx(N.ChevronLink, {
      onClick: () => s(c.id),
      children: c.title
    }, c.id))
  }) : i.error ? l = n.jsx(At, {
    children: r("player.menus.episodes.loadingError")
  }) : i.loading && (l = n.jsx(At, {
    children: r("player.menus.episodes.loadingList")
  })), n.jsxs(N.CardWithScrollable, {
    children: [n.jsx(N.Title, {
      children: (a == null ? void 0 : a.title) ?? r("player.menus.episodes.loadingTitle")
    }), l]
  })
}

function qd(e) {
  var h;
  let {
    id: t,
    selectedSeason: s,
    goBack: r,
    onChange: a
  } = e;
  const {
    t: i
  } = I(), o = W(t), {
    setPlayerMeta: l
  } = zn(), c = x(f => f.meta), [u] = da((c == null ? void 0 : c.tmdbId) ?? "", s), d = Y(), b = m.useCallback(f => {
    if (u.value) {
      const v = l(u.value.fullData, f);
      v && (a == null || a(v))
    }
    o.close(!0)
  }, [l, u, o, a]);
  if (!(c != null && c.tmdbId)) return null;
  let g = null;
  if (u.error) g = n.jsx(At, {
    children: i("player.menus.episodes.loadingError")
  });
  else if (u.loading) g = n.jsx(At, {
    children: i("player.menus.episodes.loadingList")
  });
  else if (u.value) {
    const f = u.value.season.episodes.some(v => !Ye(v.air_date));
    g = n.jsxs(N.ScrollToActiveSection, {
      className: "pb-6",
      children: [u.value.season.episodes.length === 0 ? n.jsx(N.TextDisplay, {
        title: "No episodes found",
        children: i("player.menus.episodes.emptyState")
      }) : null, u.value.season.episodes.map(v => {
        var j, R, T, L, E, k;
        const p = (R = (j = d.items[c == null ? void 0 : c.tmdbId]) == null ? void 0 : j.episodes) == null ? void 0 : R[v.id];
        let y;
        if (p) {
          const S = p.progress.watched / p.progress.duration * 100;
          y = n.jsx(Kd, {
            className: "h-[18px] w-[18px] text-white",
            percentage: S > 90 ? 100 : S
          })
        }
        return n.jsx(N.Link, {
          onClick: () => b(v.id),
          active: v.id === ((T = c == null ? void 0 : c.episode) == null ? void 0 : T.tmdbId),
          clickable: Ye(v.air_date),
          rightSide: y,
          children: n.jsx(N.LinkTitle, {
            children: n.jsxs("div", {
              className: C("text-left flex items-center space-x-3 text-video-context-type-main", Ye(v.air_date) || v.id === ((L = c == null ? void 0 : c.episode) == null ? void 0 : L.tmdbId) ? "" : "text-opacity-25"),
              children: [n.jsx("span", {
                className: C("p-0.5 px-2 rounded inline bg-video-context-hoverColor", v.id === ((E = c == null ? void 0 : c.episode) == null ? void 0 : E.tmdbId) ? "text-white bg-opacity-100" : "bg-opacity-50", Ye(v.air_date) || v.id === ((k = c == null ? void 0 : c.episode) == null ? void 0 : k.tmdbId) ? "" : "!bg-opacity-25"),
                children: i("player.menus.episodes.episodeBadge", {
                  episode: v.number
                })
              }), n.jsx("span", {
                className: "line-clamp-1 break-all",
                children: v.title
              })]
            })
          })
        }, v.id)
      }), f ? n.jsx("p", {
        children: i("player.menus.episodes.unairedEpisodes")
      }) : null]
    })
  }
  return n.jsxs(N.CardWithScrollable, {
    children: [n.jsx(N.BackLink, {
      onClick: r,
      children: ((h = u == null ? void 0 : u.value) == null ? void 0 : h.season.title) || i("player.menus.episodes.loadingTitle")
    }), g]
  })
}

function Qd(e) {
  let {
    id: t,
    onChange: s
  } = e;
  const r = W(t),
    a = x(u => u.meta),
    [i, o] = m.useState(""),
    l = m.useRef(!1);
  m.useEffect(() => {
    var u;
    l.current !== r.isRouterActive && (l.current = r.isRouterActive, o(((u = a == null ? void 0 : a.season) == null ? void 0 : u.tmdbId) ?? ""))
  }, [a, i, o, r.isRouterActive]);
  const c = m.useCallback(u => {
    o(u), r.navigate("/episodes")
  }, [r]);
  return n.jsx(Or, {
    id: t,
    children: n.jsxs(la, {
      id: t,
      children: [n.jsx(J, {
        id: t,
        path: "/",
        width: 343,
        height: 431,
        children: n.jsx(zd, {
          setSeason: c,
          selectedSeason: i
        })
      }), n.jsx(J, {
        id: t,
        path: "/episodes",
        width: 343,
        height: 431,
        children: i.length > 0 ? n.jsx(qd, {
          selectedSeason: i,
          id: t,
          goBack: () => r.navigate("/"),
          onChange: s
        }) : null
      })]
    })
  })
}

function Yd(e) {
  return n.jsx(Qd, {
    onChange: e.onChange,
    id: "episodes"
  })
}

function Os() {
  const {
    t: e
  } = I(), t = W("episodes"), s = x(a => a.setHasOpenOverlay), r = x(a => {
    var i;
    return (i = a.meta) == null ? void 0 : i.type
  });
  return m.useEffect(() => {
    s(t.isRouterActive)
  }, [s, t.isRouterActive]), r !== "show" ? null : n.jsx(oa, {
    id: t.id,
    children: n.jsx(ge, {
      onClick: () => t.open("/episodes"),
      icon: w.EPISODES,
      children: e("player.menus.episodes.button")
    })
  })
}

function Ms() {
  const e = x(s => s.interface.canAirplay),
    t = x(s => s.display);
  return e ? n.jsx(ge, {
    onClick: () => t == null ? void 0 : t.startAirplay(),
    icon: w.AIRPLAY
  }) : null
}

function Xd() {
  const e = Rr(),
    t = x(s => s.mediaPlaying.volume);
  return n.jsx(ee, {
    animation: "slide-down",
    show: e.showVolume,
    className: "absolute inset-x-0 top-4 flex justify-center pointer-events-none",
    children: n.jsxs(ue.Base, {
      className: "hover:flare-enabled pointer-events-auto bg-video-context-background pl-4 pr-6 py-3 group w-72 h-full rounded-lg transition-colors text-video-context-type-main",
      children: [n.jsx(ue.Light, {
        enabled: !0,
        flareSize: 200,
        cssColorVar: "--colors-video-context-light",
        backgroundClass: "bg-video-context-background duration-100",
        className: "rounded-lg"
      }), n.jsxs(ue.Child, {
        className: "grid grid-cols-[auto,1fr] gap-3 pointer-events-auto relative transition-transform",
        children: [n.jsx(P, {
          className: "text-2xl",
          icon: t > 0 ? w.VOLUME : w.VOLUME_X
        }), n.jsx("div", {
          className: "w-full flex items-center",
          children: n.jsx("div", {
            className: "w-full h-1.5 rounded-full bg-video-context-slider bg-opacity-25",
            children: n.jsx("div", {
              className: "h-full bg-video-context-sliderFilled rounded-full transition-[width] duration-100",
              style: {
                width: `${t*100}%`
              }
            })
          })
        })]
      })]
    })
  })
}
const ma = z(xe(q(e => ({
  enableThumbnails: !1,
  setEnableThumbnails(t) {
    e(s => {
      s.enableThumbnails = t
    })
  },
  enableAutoplay: !1,
  setEnableAutoplay(t) {
    e(s => {
      s.enableAutoplay = t
    })
  }
})), {
  name: "__MW::preferences"
}));

function Jd() {
  return !!(F().ALLOW_AUTOPLAY || he() || $.getState().proxySet)
}

function Zd(e, t) {
  const s = e / t;
  return t - e <= 30 ? "always" : s >= .9 ? "hover" : "none"
}

function Ds(e) {
  return n.jsx("button", {
    className: C("font-bold rounded h-10 w-40 scale-95 hover:scale-100 transition-all duration-200", e.className),
    type: "button",
    onClick: e.onClick,
    children: e.children
  })
}

function em(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return Fe(async () => {
    if (t) {
      const r = await tt(B.SERIES, e ?? "");
      return (r == null ? void 0 : r.meta.type) !== B.SERIES ? null : r.meta.seasons
    }
  }, [e, t])
}

function tm(e, t) {
  return Fe(async () => {
    var r, a;
    if (e) {
      const i = await tt(B.SERIES, t ?? "", e == null ? void 0 : e.id);
      if ((i == null ? void 0 : i.meta.type) !== B.SERIES) return null;
      const o = (a = (r = i == null ? void 0 : i.meta) == null ? void 0 : r.seasonData) == null ? void 0 : a.episodes.filter(l => Ye(l.air_date)).map(l => ({
        number: l.number,
        title: l.title,
        tmdbId: l.id
      }));
      if (o.length > 0) return o[0]
    }
  }, [t, e == null ? void 0 : e.id])
}

function nm(e) {
  var S, _, A, M, Q;
  const {
    t
  } = I(), s = x(O => O.progress.duration), r = x(O => O.interface.hideNextEpisodeBtn), a = x(O => O.meta), {
    setDirectMeta: i
  } = zn(), o = x(O => O.hideNextEpisodeButton), l = x(O => {
    var K;
    return (K = O.meta) == null ? void 0 : K.type
  }), c = x(O => O.progress.time), u = Zd(c, s), d = x(O => O.status), b = x(O => O.setShouldStartFromBeginning), g = Y(O => O.updateItem), h = ma(O => O.enableAutoplay), f = ((S = a == null ? void 0 : a.episode) == null ? void 0 : S.number) === ((A = (_ = a == null ? void 0 : a.episodes) == null ? void 0 : _.at(-1)) == null ? void 0 : A.number), p = (M = em((a == null ? void 0 : a.tmdbId) ?? "", f).value) == null ? void 0 : M.find(O => {
    var K;
    return O.number === (((K = a == null ? void 0 : a.season) == null ? void 0 : K.number) ?? 0) + 1
  }), y = tm(p, (a == null ? void 0 : a.tmdbId) ?? "");
  let j = !1;
  const R = m.useRef(!1);
  (u === "always" || u === "hover" && e.controlsShowing) && (j = !0), (r || d !== "playing" || s === 0) && (j = !1);
  const T = u === "hover" ? "slide-up" : "fade";
  let L = "bottom-[calc(6rem+env(safe-area-inset-bottom))]";
  u === "always" && (L = e.controlsShowing ? L : "bottom-[calc(3rem+env(safe-area-inset-bottom))]");
  const E = f ? y.value : (Q = a == null ? void 0 : a.episodes) == null ? void 0 : Q.find(O => {
      var K;
      return O.number === (((K = a == null ? void 0 : a.episode) == null ? void 0 : K.number) ?? 0) + 1
    }),
    k = m.useCallback(() => {
      var ve;
      if (!a || !E) return;
      const O = {
        ...a
      };
      O.episode = E, O.season = f && p ? {
        ...p,
        tmdbId: p.id
      } : O.season, b(!0), i(O), (ve = e.onChange) == null || ve.call(e, O), g({
        meta: O,
        progress: {
          duration: 0,
          watched: 0
        }
      })
    }, [i, E, a, e, b, g, f, p]);
  return m.useEffect(() => {
    if (!h || l !== "show") return;
    const O = s / 100,
      K = c >= s - O && s !== 0;
    s === 0 && (R.current = !1), K && Jd() && !R.current && (R.current = !0, k())
  }, [s, h, k, l, c]), !(a != null && a.episode) || !E || l !== "show" ? null : n.jsx(ee, {
    animation: T,
    show: j,
    className: "absolute right-[calc(3rem+env(safe-area-inset-right))] bottom-0",
    children: n.jsxs("div", {
      className: C(["absolute bottom-0 right-0 transition-[bottom] duration-200 flex items-center space-x-3", L]),
      children: [n.jsx(Ds, {
        className: "py-px box-content bg-buttons-secondary hover:bg-buttons-secondaryHover bg-opacity-90 text-buttons-secondaryText",
        onClick: o,
        children: t("player.nextEpisode.cancel")
      }), n.jsxs(Ds, {
        onClick: () => k(),
        className: "bg-buttons-primary hover:bg-buttons-primaryHover text-buttons-primaryText flex justify-center items-center",
        children: [n.jsx(P, {
          className: "text-xl mr-1",
          icon: w.SKIP_EPISODE
        }), t(f && E ? "player.nextEpisode.nextSeason" : "player.nextEpisode.next")]
      })]
    })
  })
}

function Bs(e) {
  const [t, s] = m.useState(!1), r = x(o => o.interface.isCasting), a = m.useRef(null), i = m.useCallback(o => {
    const l = (o.getAttribute("style") ?? "").includes("inline");
    s(!l)
  }, [s]);
  return m.useEffect(() => {
    var c;
    const o = (c = a.current) == null ? void 0 : c.querySelector("google-cast-launcher");
    if (!o) return;
    const l = new MutationObserver(() => {
      i(o)
    });
    return l.observe(o, {
      attributes: !0,
      attributeFilter: ["style"]
    }), i(o), () => {
      l.disconnect()
    }
  }, [i]), n.jsx(ge, {
    ref: a,
    className: [e.className ?? "", "google-cast-button", r ? "casting" : "", t ? "hidden" : ""].join(" "),
    icon: w.CASTING,
    onClick: o => {
      const l = o.querySelector("google-cast-launcher");
      l && l.click()
    }
  })
}

function sm() {
  const {
    t: e
  } = I(), t = x(a => a.mediaPlaying.isLoading), s = x(a => a.display), r = (s == null ? void 0 : s.getType()) === "casting";
  return t || !r ? null : n.jsxs("div", {
    className: "flex flex-col items-center justify-center gap-4",
    children: [n.jsx("div", {
      className: "rounded-full bg-opacity-10 bg-video-buttonBackground p-3 brightness-100 grayscale",
      children: n.jsx(P, {
        icon: w.CASTING
      })
    }), n.jsx("p", {
      className: "text-center",
      children: e("player.casting.enabled")
    })]
  })
}

function rm(e, t) {
  for (let s = 0; s < t.length; s += 1)
    if (t.start(t.length - 1 - s) < e) return t.end(t.length - 1 - s);
  return 0
}
const am = {
  1: {
    name: "MEDIA_ERR_ABORTED",
    key: "player.playbackError.errors.errorAborted"
  },
  2: {
    name: "MEDIA_ERR_NETWORK",
    key: "player.playbackError.errors.errorNetwork"
  },
  3: {
    name: "MEDIA_ERR_DECODE",
    key: "player.playbackError.errors.errorDecode"
  },
  4: {
    name: "MEDIA_ERR_SRC_NOT_SUPPORTED",
    key: "player.playbackError.errors.errorNotSupported"
  }
};

function im(e) {
  const t = am[(e == null ? void 0 : e.code) ?? -1];
  return t || {
    name: "MEDIA_ERR_GENERIC",
    key: "player.playbackError.errors.errorGenericMedia"
  }
}

function Oe(e) {
  const t = new URL(e),
    s = F().CDN_REPLACEMENTS;
  for (const [r, a] of s)
    if (t.hostname.endsWith(r)) return t.hostname = a, t.port = "", t.protocol = "https://", t.toString();
  return e
}

function ha() {
  const e = {};
  return {
    on(t, s) {
      var r;
      e[t] || (e[t] = []), (r = e[t]) == null || r.push(s)
    },
    off(t, s) {
      var r;
      e[t] = ((r = e[t]) == null ? void 0 : r.filter(a => a !== s)) ?? []
    },
    emit(t, s) {
      (e[t] ?? []).forEach(r => r(s))
    }
  }
}
const fa = {
  360: "360",
  1080: "1080",
  720: "720",
  480: "480"
};

function kt(e) {
  return fa[(e == null ? void 0 : e.height) ?? 0] ?? null
}

function om(e) {
  const t = Object.entries(fa).find(s => s[1] === e);
  return t ? +t[0] : null
}

function lm(e) {
  return e.map(t => kt(t)).filter(t => !!t)
}

function ga() {
  const {
    emit: e,
    on: t,
    off: s
  } = ha();
  let r = null,
    a = null,
    i = null,
    o = null,
    l = !1,
    c = !1,
    u = !1,
    d = 0,
    b = !1,
    g = null,
    h = 1;
  const f = new Map;

  function v() {
    if (!a) return;
    const S = a.levels.map(_ => kt(_)).filter(_ => !!_);
    e("qualities", S)
  }

  function p() {
    if (!a) return;
    const k = Ve.getState().language,
      S = a.audioTracks,
      _ = S.find(M => M.lang === k);
    _ && (a.audioTrack = S.indexOf(_));
    const A = S == null ? void 0 : S[a.audioTrack ?? 0];
    A && (e("changedaudiotrack", {
      id: A.id.toString(),
      label: A.name,
      language: A.lang ?? "unknown"
    }), e("audiotracks", a.audioTracks.map(M => ({
      id: M.id.toString(),
      label: M.name,
      language: M.lang ?? "unknown"
    }))))
  }

  function y() {
    if (i && jt(i) || !a) return;
    if (b) a.currentLevel = -1, a.loadLevel = -1;
    else {
      const S = lm(a.levels),
        _ = Kr(S, {
          lastChosenQuality: g,
          automaticQuality: b
        });
      if (_) {
        const A = a.levels.findIndex(M => M.height === om(_));
        A !== -1 && (a.currentLevel = A, a.loadLevel = A)
      }
    }
    const k = kt(a.levels[a.currentLevel]);
    e("changedquality", k)
  }

  function j(k, S) {
    if (a = null, S.type === "hls") {
      if (jt(k)) {
        k.src = Oe(S.url), k.currentTime = d;
        return
      }
      if (!me.isSupported()) throw new Error("HLS not supported");
      a || (a = new me({
        maxBufferSize: 500 * 1e3 * 1e3,
        fragLoadPolicy: {
          default: {
            maxLoadTimeMs: 30 * 1e3,
            maxTimeToFirstByteMs: 30 * 1e3,
            errorRetry: {
              maxNumRetry: 2,
              retryDelayMs: 1e3,
              maxRetryDelayMs: 8e3
            },
            timeoutRetry: {
              maxNumRetry: 3,
              maxRetryDelayMs: 0,
              retryDelayMs: 0
            }
          }
        },
        renderTextTracksNatively: !1
      }), a.on(me.Events.ERROR, (_, A) => {
        var M;
        console.error("HLS error", A), A.fatal && (S == null ? void 0 : S.url) === ((M = A.frag) == null ? void 0 : M.baseurl) && e("error", {
          message: A.error.message,
          stackTrace: A.error.stack,
          errorName: A.error.name,
          type: "hls"
        })
      }), a.on(me.Events.MANIFEST_LOADED, () => {
        a && (v(), y(), p(), he() && (a.on(me.Events.LEVEL_LOADED, async (_, A) => {
          const M = A.details.fragments.map(O => new URL(O.url).hostname),
            Q = [...new Set(M)];
          await rn({
            ruleId: nn.SET_DOMAINS_HLS,
            targetDomains: Q,
            requestHeaders: {
              ...S.preferredHeaders,
              ...S.headers
            }
          })
        }), a.on(me.Events.AUDIO_TRACK_LOADED, async (_, A) => {
          const M = A.details.fragments.map(O => new URL(O.url).hostname),
            Q = [...new Set(M)];
          await rn({
            ruleId: nn.SET_DOMAINS_HLS_AUDIO,
            targetDomains: Q,
            requestHeaders: {
              ...S.preferredHeaders,
              ...S.headers
            }
          })
        })))
      }), a.on(me.Events.LEVEL_SWITCHED, () => {
        if (!a) return;
        const _ = kt(a.levels[a.currentLevel]);
        e("changedquality", _)
      }), a.on(me.Events.SUBTITLE_TRACK_LOADED, () => {
        for (const [_, A] of f)
          if (a == null ? void 0 : a.subtitleTracks.find(Q => Q.lang === _)) {
            A(), f.delete(_);
            break
          }
      })), a.attachMedia(k), a.loadSource(Oe(S.url)), k.currentTime = d;
      return
    }
    k.src = Oe(S.url), k.currentTime = d
  }

  function R() {
    !i || !r || (j(i, r), i.addEventListener("play", () => {
      e("play", void 0), e("loading", !1)
    }), i.addEventListener("error", () => {
      const k = (i == null ? void 0 : i.error) ?? null,
        S = im(k);
      e("error", {
        errorName: S.name,
        key: S.key,
        type: "htmlvideo"
      })
    }), i.addEventListener("playing", () => e("play", void 0)), i.addEventListener("pause", () => e("pause", void 0)), i.addEventListener("canplay", () => e("loading", !1)), i.addEventListener("waiting", () => e("loading", !0)), i.addEventListener("volumechange", () => e("volumechange", i != null && i.muted ? 0 : (i == null ? void 0 : i.volume) ?? 0)), i.addEventListener("timeupdate", () => e("time", (i == null ? void 0 : i.currentTime) ?? 0)), i.addEventListener("loadedmetadata", () => {
      (r == null ? void 0 : r.type) === "hls" && i && jt(i) && (e("qualities", ["unknown"]), e("changedquality", "unknown")), e("duration", (i == null ? void 0 : i.duration) ?? 0)
    }), i.addEventListener("progress", () => {
      i && e("buffered", rm(i.currentTime, i.buffered))
    }), i.addEventListener("webkitendfullscreen", () => {
      l = !1, e("fullscreen", l), l || e("needstrack", !1)
    }), i.addEventListener("webkitplaybacktargetavailabilitychanged", k => {
      k.availability === "available" && e("canairplay", !0)
    }), i.addEventListener("ratechange", () => {
      i && e("playbackrate", i.playbackRate)
    }))
  }

  function T() {
    i && (i.removeAttribute("src"), i.load()), a && (a.destroy(), a = null)
  }

  function L() {
    T(), i && (i = null)
  }

  function E() {
    l = !!document.fullscreenElement || !!document.webkitFullscreenElement, e("fullscreen", l), l || e("needstrack", !1)
  }
  return ie.addEventListener("fullscreenchange", E), {
    on: t,
    off: s,
    getType() {
      return "web"
    },
    destroy: () => {
      L(), ie.removeEventListener("fullscreenchange", E)
    },
    load(k) {
      k.source || T(), b = k.automaticQuality, g = k.preferredQuality, r = k.source, e("loading", !0), d = k.startAt, R()
    },
    changeQuality(k, S) {
      (r == null ? void 0 : r.type) === "hls" && (b = k, g = S, y())
    },
    processVideoElement(k) {
      L(), i = k, R(), this.setVolume(h)
    },
    processContainerElement(k) {
      o = k
    },
    setMeta() {},
    setCaption() {},
    pause() {
      i == null || i.pause()
    },
    play() {
      i == null || i.play()
    },
    setSeeking(k) {
      if (k !== u) {
        if (u = k, !k) {
          c || this.play();
          return
        }
        c = (i == null ? void 0 : i.paused) ?? !0, this.pause()
      }
    },
    setTime(k) {
      if (!i) return;
      let S = Math.min(k, i.duration);
      S = Math.max(0, S), !Number.isNaN(S) && (e("time", S), i.currentTime = S)
    },
    async setVolume(k) {
      let S = Math.min(k, 1);
      if (S = Math.max(0, S), h = k, !i) return;
      i.muted = S === 0, await Rt() ? i.volume = S : e("volumechange", S === 0 ? 0 : 1)
    },
    toggleFullscreen() {
      if (l) {
        if (l = !1, e("fullscreen", l), e("needstrack", !1), !ie.fullscreenElement) return;
        ie.exitFullscreen();
        return
      }
      if (l = !0, e("fullscreen", l), !(!sa() || ie.fullscreenElement)) {
        if (zt()) {
          o && ie.requestFullscreen(o);
          return
        }
        na() && i && (e("needstrack", !0), i.webkitEnterFullscreen())
      }
    },
    togglePictureInPicture() {
      if (i) {
        if (aa()) {
          const k = i;
          k.webkitSetPresentationMode(k.webkitPresentationMode === "picture-in-picture" ? "inline" : "picture-in-picture")
        }
        ra() && (i !== document.pictureInPictureElement ? i.requestPictureInPicture() : document.exitPictureInPicture())
      }
    },
    startAirplay() {
      const k = i;
      k && k.webkitShowPlaybackTargetPicker && k.webkitShowPlaybackTargetPicker()
    },
    setPlaybackRate(k) {
      i && (i.playbackRate = k)
    },
    getCaptionList() {
      return (a == null ? void 0 : a.subtitleTracks.map(k => ({
        id: k.id.toString(),
        language: k.lang ?? "unknown",
        url: k.url,
        needsProxy: !1,
        hls: !0
      }))) ?? []
    },
    getSubtitleTracks() {
      return (a == null ? void 0 : a.subtitleTracks) ?? []
    },
    async setSubtitlePreference(k) {
      const S = a == null ? void 0 : a.subtitleTracks.find(A => A.lang === k);
      if ((S == null ? void 0 : S.details) !== void 0) return Promise.resolve();
      const _ = new Promise((A, M) => {
        f.set(k, A), setTimeout(() => {
          M(), f.delete(k)
        }, 5e3)
      });
      return a == null || a.setSubtitleOption({
        lang: k
      }), _
    },
    changeAudioTrack(k) {
      if (!a) return;
      const S = a == null ? void 0 : a.audioTracks.find(_ => _.id.toString() === k.id);
      S && (a.audioTrack = a.audioTracks.indexOf(S), e("changedaudiotrack", {
        id: S.id.toString(),
        label: S.name,
        language: S.lang ?? "unknown"
      }))
    }
  }
}

function cm(e) {
  const {
    emit: t,
    on: s,
    off: r
  } = ha();
  let a = !1,
    i = 1,
    o = null,
    l = null,
    c = null,
    u = !1,
    d = !1,
    b = !1,
    g = 0,
    h = {
      title: "",
      type: B.MOVIE
    };

  function f() {
    var L;
    const T = async E => {
      switch (E.field) {
        case "volumeLevel":
          await Rt() && t("volumechange", E.value);
          break;
        case "currentTime":
          t("time", E.value);
          break;
        case "duration":
          t("duration", E.value ?? 0);
          break;
        case "mediaInfo":
          E.value && t("duration", E.value.duration ?? 0);
          break;
        case "playerState":
          t("loading", E.value === "BUFFERING"), E.value === "PLAYING" ? t("play", void 0) : E.value === "PAUSED" && t("pause", void 0), a = E.value === "PAUSED";
          break;
        case "isMuted":
          t("volumechange", E.value ? 1 : 0);
          break
      }
    };
    return (L = e.controller) == null || L.addEventListener(cast.framework.RemotePlayerEventType.ANY_CHANGE, T), () => {
      var E;
      (E = e.controller) == null || E.removeEventListener(cast.framework.RemotePlayerEventType.ANY_CHANGE, T)
    }
  }

  function v() {
    var _;
    if (!o) {
      (_ = e.controller) == null || _.stop();
      return
    }
    let T = "video/mp4";
    o.type === "hls" && (T = "application/x-mpegurl");
    const L = new chrome.cast.media.GenericMediaMetadata;
    L.title = h.title;
    const E = new chrome.cast.media.MediaInfo("video", T);
    E.contentUrl = Oe(o.url), E.streamType = chrome.cast.media.StreamType.BUFFERED, E.metadata = L, E.customData = {
      playbackRate: i
    };
    const k = new chrome.cast.media.LoadRequest(E);
    if (k.autoplay = !0, k.currentTime = g, o.type === "hls") {
      const A = chrome.cast.media,
        M = k.media;
      M.hlsSegmentFormat = A.HlsSegmentFormat.FMP4, M.hlsVideoSegmentFormat = A.HlsVideoSegmentFormat.FMP4
    }
    const S = e.instance.getCurrentSession();
    S == null || S.loadMedia(k)
  }

  function p() {
    !l || !o || v()
  }

  function y() {
    l && (l = null)
  }

  function j() {
    u = !!document.fullscreenElement || !!document.webkitFullscreenElement, t("fullscreen", u), u || t("needstrack", !1)
  }
  ie.addEventListener("fullscreenchange", j);
  const R = f();
  return {
    on: s,
    off: r,
    getType() {
      return "casting"
    },
    destroy: () => {
      R(), y(), ie.removeEventListener("fullscreenchange", j)
    },
    load(T) {
      o = T.source, t("loading", !0), g = T.startAt, p()
    },
    changeQuality() {},
    setCaption(T) {
      p()
    },
    processVideoElement(T) {
      y(), l = T, p()
    },
    processContainerElement(T) {
      c = T
    },
    setMeta(T) {
      h = T, p()
    },
    pause() {
      a || (e.controller.playOrPause(), a = !0)
    },
    play() {
      a && (e.controller.playOrPause(), a = !1)
    },
    setSeeking(T) {
      if (T !== b) {
        if (b = T, !T) {
          d || this.play();
          return
        }
        d = a ?? !0, this.pause()
      }
    },
    setTime(T) {
      if (!l) return;
      let L = Math.min(T, e.player.duration);
      L = Math.max(0, L), !Number.isNaN(L) && (t("time", L), e.player.currentTime = L, e.controller.seek())
    },
    async setVolume(T) {
      let L = Math.min(T, 1);
      L = Math.max(0, L), await Rt() ? (e.player.volumeLevel = L, e.controller.setVolumeLevel(), t("volumechange", L)) : t("volumechange", L === 0 ? 0 : 1)
    },
    toggleFullscreen() {
      if (u) {
        if (u = !1, t("fullscreen", u), t("needstrack", !1), !ie.fullscreenElement) return;
        ie.exitFullscreen();
        return
      }
      u = !0, t("fullscreen", u), !(!sa() || ie.fullscreenElement) && zt() && c && ie.requestFullscreen(c)
    },
    togglePictureInPicture() {},
    startAirplay() {},
    setPlaybackRate(T) {
      i = T, p()
    },
    getCaptionList() {
      return []
    },
    getSubtitleTracks() {
      return []
    },
    async setSubtitlePreference() {
      return Promise.resolve()
    },
    changeAudioTrack() {}
  }
}
const um = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1",
  xa = [];
let jn = null;

function dm(e) {
  jn = e, xa.forEach(t => t(e))
}

function mm(e) {
  if (jn !== null) return e(jn);
  xa.push(e)
}

function hm() {
  if (window.__onGCastApiAvailable = t => {
      dm(t)
    }, !!!document.getElementById("chromecast-script")) {
    const t = document.createElement("script");
    t.setAttribute("src", um), t.setAttribute("id", "chromecast-script"), document.body.appendChild(t)
  }
}

function fm() {
  const [e, t] = m.useState(null);
  return m.useEffect(() => {
    mm(s => t(s))
  }, []), e
}

function gm() {
  const e = x(y => y.casting.setInstance),
    t = x(y => y.casting.setController),
    s = x(y => y.casting.setPlayer),
    r = x(y => y.casting.setIsCasting),
    a = x(y => y.interface.isCasting),
    i = x(y => {
      var j;
      return (j = y.caption) == null ? void 0 : j.selected
    }),
    o = x(y => y.setDisplay),
    l = x(y => y.redisplaySource),
    c = fm(),
    u = x(y => y.display),
    d = x(y => y.casting.controller),
    b = x(y => y.casting.player),
    g = x(y => y.casting.instance),
    h = x(y => y.progress.time),
    f = x(y => {
      var j;
      return (j = y.meta) == null ? void 0 : j.title
    }),
    v = x(y => {
      var j;
      return (j = y.meta) == null ? void 0 : j.type
    }),
    p = m.useRef({
      controller: d,
      player: b,
      instance: g,
      time: h,
      metaTitle: f,
      metaType: v,
      caption: i
    });
  return m.useEffect(() => {
    p.current = {
      controller: d,
      player: b,
      instance: g,
      time: h,
      metaTitle: f,
      metaType: v,
      caption: i
    }
  }, [d, b, g, h, f, v, i]), m.useEffect(() => {
    if (a) {
      if (p.current.controller && p.current.instance && p.current.player) {
        const y = cm({
          controller: p.current.controller,
          instance: p.current.instance,
          player: p.current.player
        });
        y.setMeta({
          title: p.current.metaTitle ?? "",
          type: It(p.current.metaType ?? "movie")
        }), y.setCaption(p.current.caption), o(y), l(p.current.time ?? 0)
      }
    } else {
      const y = ga();
      o(y), l(p.current.time ?? 0)
    }
  }, [a, o, l]), m.useEffect(() => {
    u == null || u.setMeta({
      title: p.current.metaTitle ?? "",
      type: It(p.current.metaType ?? "movie")
    })
  }, [f, v, u]), m.useEffect(() => {
    if (!c) return;
    const y = cast.framework.CastContext.getInstance();
    e(y), y.setOptions({
      receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
      autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
    });
    const j = new cast.framework.RemotePlayer;
    s(j);
    const R = new cast.framework.RemotePlayerController(j);
    t(R);

    function T(L) {
      L.field === "isConnected" && r(L.value)
    }
    return R.addEventListener(cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED, T), () => {
      R.removeEventListener(cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED, T)
    }
  }, [c, s, t, e, r]), null
}

function xm() {
  var r, a;
  const {
    t: e
  } = I(), t = x(i => i.meta);
  if (!t) return null;
  if (t.type !== "show") return n.jsx(we, {
    children: n.jsx("title", {
      children: t.title
    })
  });
  const s = e("media.episodeDisplay", {
    season: (r = t.season) == null ? void 0 : r.number,
    episode: (a = t.episode) == null ? void 0 : a.number
  });
  return n.jsx(we, {
    children: n.jsxs("title", {
      children: [t.title, " - ", s]
    })
  })
}

function pm() {
  const e = W(""),
    t = x(f => f.display),
    s = x(f => f.progress),
    {
      isSeeking: r
    } = x(f => f.interface),
    a = x(f => f.mediaPlaying),
    i = x(f => f.progress.time),
    {
      setVolume: o,
      toggleMute: l
    } = ia(),
    {
      toggleLastUsed: c
    } = Kt(),
    u = Rr(f => f.setShowVolume),
    [d, b] = m.useState(!1),
    g = m.useRef(),
    h = m.useRef({
      setShowVolume: u,
      setVolume: o,
      toggleMute: l,
      setIsRolling: b,
      toggleLastUsed: c,
      display: t,
      mediaPlaying: a,
      mediaProgress: s,
      isSeeking: r,
      isRolling: d,
      time: i,
      router: e
    });
  return m.useEffect(() => {
    h.current = {
      setShowVolume: u,
      setVolume: o,
      toggleMute: l,
      setIsRolling: b,
      toggleLastUsed: c,
      display: t,
      mediaPlaying: a,
      mediaProgress: s,
      isSeeking: r,
      isRolling: d,
      time: i,
      router: e
    }
  }, [u, o, l, b, c, t, a, s, r, d, i, e]), m.useEffect(() => {
    const f = v => {
      var j, R, T, L, E, k, S, _, A, M, Q, O, K, ve, Ke;
      if (v.target && v.target.nodeName === "INPUT") return;
      const p = v.key,
        y = v.key.toLowerCase();
      if (["ArrowUp", "ArrowDown", "m", "M"].includes(p) && (h.current.setShowVolume(!0), g.current && clearTimeout(g.current), g.current = setTimeout(() => {
          h.current.setShowVolume(!1)
        }, 3e3)), p === "ArrowUp" && h.current.setVolume((((j = h.current.mediaPlaying) == null ? void 0 : j.volume) || 0) + .15), p === "ArrowDown" && h.current.setVolume((((R = h.current.mediaPlaying) == null ? void 0 : R.volume) || 0) - .15), y === "m" && h.current.toggleMute(), p === ">" || p === "<") {
        const pe = [.25, .5, 1, 1.5, 2];
        let Ie = pe.indexOf((T = h.current.mediaPlaying) == null ? void 0 : T.playbackRate);
        Ie === -1 && (Ie = pe.indexOf(1));
        const ht = Ie + (p === ">" ? 1 : -1),
          ze = pe[ht];
        ze && ((L = h.current.display) == null || L.setPlaybackRate(ze))
      }
      if (p === "ArrowRight" && ((E = h.current.display) == null || E.setTime(h.current.time + 5)), p === "ArrowLeft" && ((k = h.current.display) == null || k.setTime(h.current.time - 5)), y === "j" && ((S = h.current.display) == null || S.setTime(h.current.time - 10)), y === "l" && ((_ = h.current.display) == null || _.setTime(h.current.time + 10)), p === "." && ((A = h.current.mediaPlaying) != null && A.isPaused) && ((M = h.current.display) == null || M.setTime(h.current.time + 1)), p === "," && ((Q = h.current.mediaPlaying) != null && Q.isPaused) && ((O = h.current.display) == null || O.setTime(h.current.time - 1)), y === "f" && ((K = h.current.display) == null || K.toggleFullscreen()), (p === " " || y === "k") && ((ve = h.current.display) == null || ve[h.current.mediaPlaying.isPaused ? "play" : "pause"]()), p === "Escape" && h.current.router.close(), y === "c" && h.current.toggleLastUsed().catch(() => {}), y === "r") {
        if (h.current.isRolling || v.ctrlKey || v.metaKey) return;
        h.current.setIsRolling(!0), (Ke = document.querySelector(".popout-location")) == null || Ke.classList.add("roll"), document.body.setAttribute("data-no-scroll", "true"), setTimeout(() => {
          var pe;
          (pe = document.querySelector(".popout-location")) == null || pe.classList.remove("roll"), document.body.removeAttribute("data-no-scroll"), h.current.setIsRolling(!1)
        }, 1e3)
      }
    };
    return window.addEventListener("keydown", f), () => {
      window.removeEventListener("keydown", f)
    }
  }, []), null
}

function bm() {
  var l, c, u, d, b, g, h, f, v, p, y;
  const {
    setDirectMeta: e
  } = zn(), t = x(j => j.setShouldStartFromBeginning), s = m.useRef(!1), r = m.useRef(0), a = x.getState(), i = m.useCallback(j => {
    var L, E;
    const R = (E = (L = a.meta) == null ? void 0 : L.episodes) == null ? void 0 : E.find(k => {
      var S, _;
      return k.number === (((_ = (S = a.meta) == null ? void 0 : S.episode) == null ? void 0 : _.number) ?? 0) + j
    });
    if (!a.meta || !R) return;
    const T = {
      ...a.meta
    };
    T.episode = R, t(!0), e(T)
  }, [a.meta, e, t]), o = m.useCallback(j => {
    typeof navigator.mediaSession.setPositionState == "function" && (j > a.progress.buffered && (s.current = !0), !(j > a.progress.duration) && (r.current = a.progress.time, navigator.mediaSession.setPositionState({
      duration: a.progress.duration,
      playbackRate: a.mediaPlaying.playbackRate,
      position: j
    })))
  }, [a.mediaPlaying.playbackRate, a.progress.buffered, a.progress.duration, a.progress.time]);
  return m.useEffect(() => {
    "mediaSession" in navigator && (a.mediaPlaying.isPaused ? navigator.mediaSession.playbackState = "paused" : navigator.mediaSession.playbackState = "playing")
  }, [a.mediaPlaying.isPaused]), m.useEffect(() => {
    "mediaSession" in navigator && o(a.progress.time)
  }, [a.progress.time, a.mediaPlaying.playbackRate, o]), m.useEffect(() => {
    "mediaSession" in navigator && (!s.current && a.mediaPlaying.isLoading && (s.current = !0), Math.abs(a.progress.time - r.current) >= 5 && !a.mediaPlaying.isLoading && !s.current && (s.current = !0), s.current && !a.mediaPlaying.isLoading && (s.current = !1, o(a.progress.time)), r.current = a.progress.time)
  }, [o, a.progress.time, a.mediaPlaying.isLoading]), m.useEffect(() => {
    var T, L, E, k, S, _, A, M, Q, O, K, ve, Ke, pe, Ie, ht, ze;
    if (!("mediaSession" in navigator) || !a.mediaPlaying.isLoading && a.mediaPlaying.isPlaying && !a.display) return;
    let j, R;
    ((T = a.meta) == null ? void 0 : T.type) === "movie" ? j = (L = a.meta) == null ? void 0 : L.title: ((E = a.meta) == null ? void 0 : E.type) === "show" && (R = (k = a.meta) == null ? void 0 : k.title, j = `S${(_=(S=a.meta)==null?void 0:S.season)==null?void 0:_.number} E${(M=(A=a.meta)==null?void 0:A.episode)==null?void 0:M.number}: ${(O=(Q=a.meta)==null?void 0:Q.episode)==null?void 0:O.title}`), navigator.mediaSession.metadata = new MediaMetadata({
      title: j,
      artist: R,
      artwork: [{
        src: ((K = a.meta) == null ? void 0 : K.poster) ?? "",
        sizes: "342x513",
        type: "image/png"
      }]
    }), navigator.mediaSession.setActionHandler("play", () => {
      var be;
      a.mediaPlaying.isLoading || ((be = a.display) == null || be.play(), o(a.progress.time))
    }), navigator.mediaSession.setActionHandler("pause", () => {
      var be;
      a.mediaPlaying.isLoading || ((be = a.display) == null || be.pause(), o(a.progress.time))
    }), navigator.mediaSession.setActionHandler("seekto", be => {
      var ns;
      be.seekTime && ((ns = a.display) == null || ns.setTime(be.seekTime), o(be.seekTime))
    }), (((Ke = (ve = a.meta) == null ? void 0 : ve.episode) == null ? void 0 : Ke.number) ?? 1) !== 1 ? navigator.mediaSession.setActionHandler("previoustrack", () => {
      i(-1)
    }) : navigator.mediaSession.setActionHandler("previoustrack", null), ((Ie = (pe = a.meta) == null ? void 0 : pe.episode) == null ? void 0 : Ie.number) !== ((ze = (ht = a.meta) == null ? void 0 : ht.episodes) == null ? void 0 : ze.length) ? navigator.mediaSession.setActionHandler("nexttrack", () => {
      i(1)
    }) : navigator.mediaSession.setActionHandler("nexttrack", null)
  }, [i, o, a.mediaPlaying.hasPlayedOnce, a.mediaPlaying.isLoading, a.progress.duration, a.progress.time, (c = (l = a.meta) == null ? void 0 : l.episode) == null ? void 0 : c.number, (d = (u = a.meta) == null ? void 0 : u.episodes) == null ? void 0 : d.length, a.display, a.mediaPlaying, (g = (b = a.meta) == null ? void 0 : b.episode) == null ? void 0 : g.title, (h = a.meta) == null ? void 0 : h.title, (f = a.meta) == null ? void 0 : f.type, (v = a.meta) == null ? void 0 : v.poster, (y = (p = a.meta) == null ? void 0 : p.season) == null ? void 0 : y.number]), null
}

function ym() {
  const e = x(r => r.meta),
    t = x(r => r.progress),
    s = x(r => r.mediaPlaying);
  return m.useEffect(() => (window.meta || (window.meta = {}), e && (window.meta.player = {
    meta: {
      title: e.title,
      type: e.type,
      tmdbId: e.tmdbId,
      year: e.releaseYear,
      poster: e.poster
    },
    controls: {
      isPlaying: s.isPlaying,
      isLoading: s.isLoading
    },
    season: e.season ? {
      number: e.season.number,
      tmdbId: e.season.tmdbId,
      title: e.season.title
    } : void 0,
    episode: e.episode ? {
      number: e.episode.number,
      tmdbId: e.episode.tmdbId,
      title: e.episode.title
    } : void 0,
    progress: {
      time: t.time,
      duration: t.duration
    }
  }), () => {
    window.meta && delete window.meta.player
  }), [e, t, s]), null
}

function vm() {
  const e = x(l => l.meta),
    t = x(l => l.progress),
    s = Y(l => l.updateItem),
    r = x(l => l.status),
    a = x(l => l.mediaPlaying.hasPlayedOnce),
    i = m.useRef(null),
    o = m.useRef({
      updateItem: s,
      meta: e,
      progress: t,
      status: r,
      hasPlayedOnce: a
    });
  return m.useEffect(() => {
    o.current.updateItem = s, o.current.meta = e, o.current.progress = t, o.current.status = r, o.current.hasPlayedOnce = a
  }, [s, t, e, r, a]), Sn(() => {
    var u, d;
    const l = o.current;
    if (!l.progress || !l.meta || !l.updateItem || l.status !== U.PLAYING || !a) return;
    let c = !1;
    i.current ? (((u = i.current) == null ? void 0 : u.duration) !== t.duration || ((d = i.current) == null ? void 0 : d.watched) !== t.time) && (c = !0) : c = !0, i.current = {
      duration: t.duration,
      watched: t.time
    }, c && l.updateItem({
      meta: l.meta,
      progress: i.current
    })
  }, 3e3), null
}

function jm(e) {
  const t = [0, 1];
  let s = .5,
    r = 0;
  for (let a = 0; a < e; a += 1) {
    const i = 1 / s - 1;
    for (let o = 0; o < i - r; o += 1) {
      const l = o * s * 2;
      t.push(l + s)
    }
    r = i, s /= 2
  }
  return t
}
class wm {
  constructor(t) {
    this.videoEl = null, this.canvasEl = null, this.hls = null, this.cb = t.addImage, this.interrupted = !1
  }
  start(t) {
    if (ta) return !1;
    const s = document.createElement("video");
    s.setAttribute("muted", "true");
    const r = document.createElement("canvas");
    if (this.hls = new me, t.type === "mp4") s.src = Oe(t.url), s.crossOrigin = "anonymous";
    else if (t.type === "hls") this.hls.attachMedia(s), this.hls.loadSource(Oe(t.url));
    else throw new Error("Invalid loadable source type");
    this.videoEl = s, this.canvasEl = r, this.begin().catch(a => console.error(a))
  }
  destroy() {
    var t, s;
    this.interrupted = !0, this.videoEl = null, this.canvasEl = null, (t = this.hls) == null || t.detachMedia(), (s = this.hls) == null || s.destroy(), this.hls = null
  }
  async initVideo() {
    !this.videoEl || !this.canvasEl || (await new Promise((t, s) => {
      var r, a;
      (r = this.videoEl) == null || r.addEventListener("loadedmetadata", t), (a = this.videoEl) == null || a.addEventListener("error", s)
    }), !(!this.videoEl || !this.canvasEl) && (this.canvasEl.height = this.videoEl.videoHeight, this.canvasEl.width = this.videoEl.videoWidth))
  }
  async takeSnapshot(t) {
    if (!this.videoEl || !this.canvasEl || (this.videoEl.currentTime = t, await new Promise(a => {
        var o;
        const i = () => {
          var l;
          (l = this.videoEl) == null || l.removeEventListener("seeked", i), a(null)
        };
        (o = this.videoEl) == null || o.addEventListener("seeked", i)
      }), !this.videoEl || !this.canvasEl)) return;
    const s = this.canvasEl.getContext("2d");
    if (!s) return;
    s.drawImage(this.videoEl, 0, 0, this.canvasEl.width, this.canvasEl.height);
    const r = this.canvasEl.toDataURL();
    this.interrupted || r === "data:," || !r || this.cb({
      at: t,
      data: r
    })
  }
  async begin() {
    const t = this.videoEl;
    if (!t) return;
    await this.initVideo();
    const s = jm(6);
    for (let r = 0; r < s.length; r += 1) {
      if (this.interrupted) return;
      await this.takeSnapshot(t.duration * s[r])
    }
  }
}

function km() {
  var b, g;
  const e = x(h => h.thumbnails.addImage),
    t = x(h => h.status),
    s = x(h => h.thumbnails.resetImages),
    r = x(h => h.meta),
    a = x(h => h.source),
    i = ma(h => h.enableThumbnails),
    o = m.useRef(null),
    l = JSON.stringify(a),
    c = m.useCallback(() => {
      let h = null;
      if (a && (h = fn(a, {
          automaticQuality: !1,
          lastChosenQuality: "360"
        })), o.current || t !== U.PLAYING || !h) return;
      s();
      const f = new wm({
        addImage: e
      });
      o.current = f, f.start(h.stream)
    }, [a, e, s, t]),
    u = m.useRef(c);
  m.useEffect(() => {
    u.current = c
  }, [c, t]), m.useEffect(() => {
    i && u.current()
  }, [l, i]), m.useEffect(() => () => {
    o.current && (o.current.destroy(), o.current = null)
  }, []);
  const d = JSON.stringify({
    id: r == null ? void 0 : r.tmdbId,
    ep: (b = r == null ? void 0 : r.episode) == null ? void 0 : b.tmdbId,
    se: (g = r == null ? void 0 : r.season) == null ? void 0 : g.tmdbId
  });
  return m.useEffect(() => {
    o.current && (o.current.destroy(), o.current = null), i && u.current()
  }, [d, l, t, i]), null
}

function Nm() {
  const e = x(r => r.display),
    t = x(r => r.setDisplay),
    s = m.useRef(e);
  m.useEffect(() => {
    s.current = e
  }, [e]), m.useEffect(() => {
    if (!s.current) {
      const r = ga();
      s.current = r, t(r)
    }
    return () => {
      s.current && (s.current = null, t(null))
    }
  }, [t])
}

function pa() {
  return x(t => t.status) === U.PLAYING
}

function Sm(e, t) {
  const s = m.useRef(null),
    r = m.useMemo(() => {
      s.current && URL.revokeObjectURL(s.current);
      const a = e();
      return s.current = a, a
    }, t);
  return m.useEffect(() => () => {
    s.current && URL.revokeObjectURL(s.current)
  }, []), r
}
const Em = function () {
    const t = m.useRef(null),
      s = m.useRef(null),
      r = x(u => u.display),
      a = x(u => {
        var d;
        return (d = u.caption.selected) == null ? void 0 : d.srtData
      }),
      i = x(u => u.caption.asTrack),
      o = x(u => {
        var d;
        return (d = u.caption.selected) == null ? void 0 : d.language
      }),
      l = Sm(() => a ? lu(a) : null, [a]);
    m.useEffect(() => {
      r && t.current && r.processVideoElement(t.current)
    }, [r, t]), m.useEffect(() => {
      s.current && (s.current.track.mode = "showing")
    }, [s]);
    let c = null;
    return i && l && o && (c = n.jsx("track", {
      label: "movie-web",
      kind: "subtitles",
      srcLang: o,
      src: l,
      default: !0
    })), n.jsx("video", {
      className: "absolute inset-0 w-full h-screen bg-black",
      autoPlay: !0,
      playsInline: !0,
      ref: t,
      children: c
    })
  },
  Cm = Em;

function Im() {
  const e = pa();
  return Nm(), hu(), e ? n.jsx(Cm, {}) : null
}

function Lm(e) {
  const t = pa(),
    s = x(b => b.display),
    r = x(b => b.mediaPlaying.isPaused),
    a = x(b => b.updateInterfaceHovering),
    i = x(b => b.interface.hovering),
    [o, l, c] = ni(() => {
      a(ce.NOT_HOVERING)
    }, 3e3);
  sr(() => {
    l()
  });
  const u = m.useCallback(() => {
      s == null || s.toggleFullscreen()
    }, [s]),
    d = m.useCallback(b => {
      if (b.pointerType === "mouse") {
        if (b.button !== 0) return;
        r ? s == null || s.play() : s == null || s.pause();
        return
      }
      i !== ce.MOBILE_TAPPED ? (a(ce.MOBILE_TAPPED), c()) : (a(ce.NOT_HOVERING), l())
    }, [s, r, i, a, c, l]);
  return t ? n.jsx("div", {
    className: C("absolute inset-0", {
      "absolute inset-0": !0,
      "cursor-none": !e.showingControls
    }),
    onDoubleClick: u,
    onPointerUp: d
  }) : null
}

function Tm(e) {
  const t = m.useRef(null),
    s = x(a => a.updateInterfaceHovering),
    r = x(a => a.interface.hovering);
  m.useEffect(() => {
    if (!e.current) return;
    const a = e.current;

    function i(l) {
      l.pointerType === "mouse" && (s(ce.MOUSE_HOVER), t.current && clearTimeout(t.current), t.current = setTimeout(() => {
        s(ce.NOT_HOVERING), t.current = null
      }, 3e3))
    }

    function o(l) {
      l.pointerType === "mouse" && (s(ce.NOT_HOVERING), t.current && clearTimeout(t.current))
    }
    return a.addEventListener("pointermove", i), a.addEventListener("pointerleave", o), () => {
      a.removeEventListener("pointermove", i), a.removeEventListener("pointerleave", o)
    }
  }, [e, r, s])
}

function Pm(e) {
  const t = m.useRef(null),
    s = x(r => r.display);
  return Tm(t), m.useEffect(() => {
    s && t.current && s.processContainerElement(t.current)
  }, [s, t]), n.jsx("div", {
    ref: t,
    children: n.jsx(gc, {
      children: n.jsx("div", {
        className: "h-screen select-none",
        children: e.children
      })
    })
  })
}

function Rm(e) {
  const t = m.useRef(e.onLoad);
  return m.useEffect(() => {
    var s;
    (s = t.current) == null || s.call(t)
  }, []), n.jsx("div", {
    className: "relative",
    children: n.jsxs(Pm, {
      children: [n.jsx(ym, {}), n.jsx(km, {}), n.jsx(gm, {}), n.jsx(Im, {}), n.jsx(vm, {}), n.jsx(pm, {}), n.jsx(bm, {}), n.jsxs("div", {
        className: "relative h-screen overflow-hidden",
        children: [n.jsx(Lm, {
          showingControls: e.showingControls
        }), n.jsx(xm, {}), e.children]
      })]
    })
  })
}
const Am = function (t) {
    const [s] = Rc(t.id), r = le(o => o.hideBanner), a = {
      error: "bg-[#C93957] text-white"
    }, i = {
      error: w.CIRCLE_EXCLAMATION
    };
    return n.jsx("div", {
      ref: s,
      children: n.jsxs("div", {
        className: [a[t.type], "flex items-center justify-center p-1"].join(" "),
        children: [n.jsxs("div", {
          className: "flex items-center space-x-3",
          children: [n.jsx(P, {
            icon: i[t.type]
          }), n.jsx("div", {
            children: t.children
          })]
        }), n.jsx("span", {
          className: "absolute right-4 hover:cursor-pointer",
          onClick: () => r(t.id, !0),
          children: n.jsx(P, {
            icon: w.X
          })
        })]
      })
    })
  },
  _m = Am;

function ba(e) {
  const {
    t
  } = I(), s = le(l => l.isOnline), r = le(l => l.setLocation), a = le(l => l.ignoredBannerIds), i = le(l => l.location), o = e.location ?? null;
  return m.useEffect(() => {
    if (o) return r(o), () => {
      r(null)
    }
  }, [r, o]), i !== o ? null : n.jsx("div", {
    children: !s && !a.includes("offline") ? n.jsx(_m, {
      id: "offline",
      type: "error",
      children: t("navigation.banner.offline")
    }) : null
  })
}

function Om(e) {
  const t = Wt("player"),
    s = x(r => r.setHoveringAnyControls);
  return m.useEffect(() => () => {
    s(!1)
  }, [s]), n.jsxs("div", {
    className: "w-full text-white",
    children: [n.jsx(ee, {
      animation: "fade",
      show: e.show,
      style: {
        top: `${t}px`
      },
      className: "pointer-events-none flex justify-end pb-32 bg-gradient-to-b from-black to-transparent [margin-bottom:env(safe-area-inset-bottom)] transition-opacity duration-200 absolute top-0 w-full"
    }), n.jsx("div", {
      className: "relative z-10",
      children: n.jsx(ba, {
        location: "player"
      })
    }), n.jsx("div", {
      onMouseOver: () => s(!0),
      onMouseOut: () => s(!1),
      className: "pointer-events-auto pl-[calc(2rem+env(safe-area-inset-left))] pr-[calc(2rem+env(safe-area-inset-right))] pt-6 absolute top-0 w-full",
      style: {
        top: `${t}px`
      },
      children: n.jsx(ee, {
        animation: "slide-down",
        show: e.show,
        className: "text-white",
        children: e.children
      })
    })]
  })
}

function Us(e) {
  return n.jsx("div", {
    className: "absolute inset-0 flex items-center justify-center pointer-events-none [&>*]:pointer-events-auto",
    children: e.children
  })
}

function Mm(e) {
  const t = x(s => s.setHoveringAnyControls);
  return m.useEffect(() => () => {
    t(!1)
  }, [t]), n.jsxs("div", {
    className: "w-full text-white",
    children: [n.jsx(ee, {
      animation: "fade",
      show: e.show,
      className: "pointer-events-none flex justify-end pt-32 bg-gradient-to-t from-black to-transparent transition-opacity duration-200 absolute bottom-0 w-full"
    }), n.jsx("div", {
      onMouseOver: () => t(!0),
      onMouseOut: () => t(!1),
      className: "pointer-events-auto z-10 pl-[calc(2rem+env(safe-area-inset-left))] pr-[calc(2rem+env(safe-area-inset-right))] pb-3 mb-[env(safe-area-inset-bottom)] absolute bottom-0 w-full",
      children: n.jsx(ee, {
        animation: "slide-up",
        show: e.show,
        children: e.children
      })
    })]
  })
}

function Dm(e) {
  return n.jsx(ee, {
    animation: "fade",
    show: e.show,
    className: "absolute inset-0 w-full h-full bg-black bg-opacity-20 pointer-events-none"
  })
}

function Bm(e) {
  const {
    t
  } = I();
  return n.jsx("div", {
    className: "flex items-center",
    children: n.jsxs(at, {
      to: e.url,
      className: "py-1 -my-1 px-2 -mx-2 tabbable rounded-lg flex items-center cursor-pointer text-type-secondary hover:text-white transition-colors duration-200 font-medium",
      children: [n.jsx(P, {
        className: "mr-2",
        icon: w.ARROW_LEFT
      }), n.jsx("span", {
        className: "md:hidden",
        children: t("player.back.short")
      }), n.jsx("span", {
        className: "hidden md:block",
        children: t("player.back.default")
      })]
    })
  })
}

function Um(e) {
  const t = x(r => r.setHoveringLeftControls),
    s = m.useCallback(() => {
      t(!1)
    }, [t]);
  return m.useEffect(() => () => {
    t(!1)
  }, [t]), n.jsx("div", {
    className: C(["flex space-x-3 items-center", e.className]),
    onMouseLeave: s,
    children: e.children
  })
}

function Fm(e) {
  return n.jsx(ee, {
    animation: "fade",
    show: e.show,
    className: "pointer-events-none",
    children: n.jsx("div", {
      className: C(["absolute inset-0 flex space-x-6 items-center justify-center pointer-events-none [&>*]:pointer-events-auto", e.className]),
      children: e.children
    })
  })
}
const Vm = {
  i: "I"
};

function $m(e) {
  let {
    text: t,
    styling: s,
    overrideCasing: r
  } = e;
  const a = m.useMemo(() => {
    let i = t;
    r && t && (i = t.slice(0, 1) + t.slice(1).toLowerCase());
    const o = (i || "").split(" ").map(c => Vm[c] ?? c).join(" ").replaceAll(/ i'/g, " I'").replaceAll(/\r?\n/g, "<br />");
    return tu(o, {
      ALLOWED_TAGS: ["c", "b", "i", "u", "span", "ruby", "rt", "br"],
      ADD_TAGS: ["v", "lang"],
      ALLOWED_ATTR: ["title", "lang"]
    })
  }, [t, r]);
  return n.jsx("p", {
    className: "pointer-events-none mb-1 select-none rounded px-4 py-1 text-center leading-normal [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]",
    style: {
      color: s.color,
      fontSize: `${(1.5*s.size).toFixed(2)}em`,
      backgroundColor: `rgba(0,0,0,${s.backgroundOpacity.toFixed(2)})`,
      backdropFilter: s.backgroundBlur !== 0 ? `blur(${Math.floor(s.backgroundBlur*64)}px)` : "none"
    },
    children: n.jsx("span", {
      dangerouslySetInnerHTML: {
        __html: a
      },
      dir: "ltr"
    })
  })
}

function Hm() {
  const e = x(c => c.progress.time),
    t = x(c => {
      var u;
      return (u = c.caption.selected) == null ? void 0 : u.srtData
    }),
    s = x(c => {
      var u;
      return (u = c.caption.selected) == null ? void 0 : u.language
    }),
    r = H(c => c.styling),
    a = H(c => c.overrideCasing),
    i = H(c => c.delay),
    o = m.useMemo(() => t ? au(t) : [], [t, s]),
    l = m.useMemo(() => o.filter(c => {
      let {
        start: u,
        end: d
      } = c;
      return nu(u, d, i, e)
    }), [o, e, i]);
  return n.jsx("div", {
    children: l.map((c, u) => {
      let {
        start: d,
        end: b,
        content: g
      } = c;
      return n.jsx($m, {
        text: g,
        styling: r,
        overrideCasing: a
      }, su(u, d, b))
    })
  })
}

function Wm(e) {
  const t = x(i => i.caption.selected),
    s = x(i => i.caption.asTrack),
    r = x(i => i.display),
    a = (r == null ? void 0 : r.getType()) === "casting";
  return s || !t || a ? null : n.jsx(ee, {
    className: "absolute inset-0 pointer-events-none",
    animation: "slide-up",
    show: !0,
    children: n.jsx("div", {
      className: C(["text-white absolute flex w-full flex-col items-center transition-[bottom]", e.controlsShown ? "bottom-24" : "bottom-12"]),
      children: n.jsx(Hm, {})
    })
  })
}

function Gm() {
  const e = Z(o => o.addBookmark),
    t = Z(o => o.removeBookmark),
    s = Z(o => o.bookmarks),
    r = x(o => o.meta),
    a = !!s[(r == null ? void 0 : r.tmdbId) ?? ""],
    i = m.useCallback(() => {
      r && (a ? t(r.tmdbId) : e(r))
    }, [a, r, e, t]);
  return n.jsx(ge, {
    onClick: () => i(),
    icon: a ? w.BOOKMARK : w.BOOKMARK_OUTLINE,
    iconSizeClass: "text-base",
    className: "p-3"
  })
}

function Km() {
  const e = x(d => d.interface.hovering),
    t = x(d => d.interface.lastHoveringState),
    s = x(d => d.mediaPlaying.isPaused),
    r = x(d => d.interface.hasOpenOverlay),
    a = x(d => d.interface.isHoveringControls),
    i = t === ce.MOBILE_TAPPED,
    l = e !== ce.NOT_HOVERING || a && !i || r,
    u = i ? l : l || s;
  return {
    showTouchTargets: i && u,
    showTargets: u
  }
}

function zm(e) {
  const {
    showTargets: t,
    showTouchTargets: s
  } = Km(), r = x(o => o.status), {
    isMobile: a
  } = qt(), i = x(o => o.mediaPlaying.isLoading);
  return n.jsxs(Rm, {
    onLoad: e.onLoad,
    showingControls: t,
    children: [e.children, n.jsx(Dm, {
      show: t && r === U.PLAYING
    }), n.jsx(Yd, {
      onChange: e.onMetaChange
    }), n.jsx(Wd, {}), n.jsx(Wm, {
      controlsShown: t
    }), r === U.PLAYING ? n.jsxs(n.Fragment, {
      children: [n.jsxs(Us, {
        children: [n.jsx(Nu, {}), n.jsx(Su, {})]
      }), n.jsx(Us, {
        children: n.jsx(sm, {})
      })]
    }) : null, n.jsxs(Fm, {
      className: "text-white",
      show: s && r === U.PLAYING,
      children: [n.jsx(Ps, {
        iconSizeClass: "text-3xl"
      }), n.jsx(Es, {
        iconSizeClass: "text-5xl",
        className: i ? "opacity-0" : "opacity-100"
      }), n.jsx(Ts, {
        iconSizeClass: "text-3xl"
      })]
    }), n.jsx(Om, {
      show: t,
      children: n.jsxs("div", {
        className: "grid grid-cols-[1fr,auto] xl:grid-cols-3 items-center",
        children: [n.jsxs("div", {
          className: "flex space-x-3 items-center",
          children: [n.jsx(Bm, {
            url: e.backUrl
          }), n.jsx("span", {
            className: "text mx-3 text-type-secondary",
            children: "/"
          }), n.jsx(Iu, {}), n.jsx(Gm, {})]
        }), n.jsx("div", {
          className: "text-center hidden xl:flex justify-center items-center",
          children: n.jsx(Lu, {})
        }), n.jsx("div", {
          className: "hidden sm:flex items-center justify-end",
          children: n.jsx(Ee, {})
        }), n.jsx("div", {
          className: "flex sm:hidden items-center justify-end",
          children: r === U.PLAYING ? n.jsxs(n.Fragment, {
            children: [n.jsx(Ms, {}), n.jsx(Bs, {})]
          }) : null
        })]
      })
    }), n.jsxs(Mm, {
      show: t,
      children: [n.jsx("div", {
        className: "flex items-center space-x-3",
        children: r === U.PLAYING ? n.jsxs(n.Fragment, {
          children: [a ? n.jsx(Rs, {
            short: !0
          }) : null, n.jsx(ku, {})]
        }) : null
      }), n.jsxs("div", {
        className: "hidden lg:flex justify-between",
        dir: "ltr",
        children: [n.jsx(Um, {
          children: r === U.PLAYING ? n.jsxs(n.Fragment, {
            children: [n.jsx(Es, {}), n.jsx(Ps, {}), n.jsx(Ts, {}), n.jsx(Cu, {}), n.jsx(Rs, {})]
          }) : null
        }), n.jsxs("div", {
          className: "flex items-center space-x-3",
          children: [n.jsx(Os, {}), r === U.PLAYING ? n.jsxs(n.Fragment, {
            children: [n.jsx(Is, {}), n.jsx(Ms, {}), n.jsx(Bs, {})]
          }) : null, r === U.PLAYBACK_ERROR || r === U.PLAYING ? n.jsx(_s, {}) : null, n.jsx(Cs, {})]
        })]
      }), n.jsxs("div", {
        className: "grid grid-cols-[2.5rem,1fr,2.5rem] gap-3 lg:hidden",
        children: [n.jsx("div", {}), n.jsxs("div", {
          className: "flex justify-center space-x-3",
          children: [r === U.PLAYING ? n.jsx(Is, {}) : null, n.jsx(Os, {}), r === U.PLAYING ? n.jsx(_s, {}) : null]
        }), n.jsx("div", {
          children: n.jsx(Cs, {})
        })]
      })]
    }), n.jsx(Xd, {}), n.jsx(nm, {
      controlsShowing: t,
      onChange: e.onMetaChange
    })]
  })
}
const qm = {
    releaseYear: 2010,
    title: "Sintel",
    tmdbId: "",
    type: "movie"
  },
  Fs = {
    hls: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
    mp4: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
  },
  Vs = {
    hls: "HLS",
    mp4: "MP4"
  };

function Qm() {
  const {
    status: e,
    playMedia: t,
    setMeta: s
  } = ea(), [r, a] = m.useState("mp4"), [i, o] = m.useState(""), l = m.useCallback((c, u) => {
    let d;
    if (u === "hls") d = {
      type: "hls",
      url: c
    };
    else if (u === "mp4") d = {
      type: "file",
      qualities: {
        unknown: {
          type: "mp4",
          url: c
        }
      }
    };
    else throw new Error("Invalid type");
    s(qm), t(d, [], null)
  }, [t, s]);
  return n.jsxs(zm, {
    backUrl: "/",
    children: [e === U.IDLE ? n.jsx("div", {
      className: "absolute inset-0 flex items-center justify-center",
      children: n.jsx("div", {
        className: "w-full max-w-4xl rounded-xl bg-video-scraping-card p-10 m-4",
        children: n.jsxs("div", {
          className: "flex gap-16 flex-col lg:flex-row",
          children: [n.jsxs("div", {
            className: "flex-1",
            children: [n.jsx(nt, {
              children: "Custom stream"
            }), n.jsxs("div", {
              className: "grid grid-cols-[1fr,auto] gap-2 items-center",
              children: [n.jsx($n, {
                className: "bg-video-context-flagBg rounded-md p-2 text-white w-full",
                value: i,
                onChange: o,
                placeholder: "https://..."
              }), n.jsx(Wc, {
                options: Object.entries(Vs).map(c => ({
                  id: c[0],
                  name: c[1]
                })),
                selectedItem: {
                  id: r,
                  name: Vs[r]
                },
                setSelectedItem: c => a(c.id)
              })]
            }), n.jsx(D, {
              onClick: () => l(i, r),
              children: "Start stream"
            })]
          }), n.jsxs("div", {
            className: "flex-1",
            children: [n.jsx(nt, {
              children: "Preset tests"
            }), n.jsxs("div", {
              className: "grid grid-cols-[1fr,1fr] gap-2",
              children: [n.jsx(D, {
                onClick: () => l(Fs.hls, "hls"),
                children: "HLS test"
              }), n.jsx(D, {
                onClick: () => l(Fs.mp4, "mp4"),
                children: "MP4 test"
              })]
            })]
          })]
        })
      })
    }) : null, e === U.PLAYBACK_ERROR ? n.jsx(xu, {}) : null]
  })
}

function Ym() {
  const {
    t: e
  } = I();
  return n.jsxs("div", {
    className: "relative flex flex-1 flex-col",
    children: [n.jsx(we, {
      children: n.jsx("title", {
        children: e("notFound.badge")
      })
    }), n.jsx(Fn, {}), n.jsx("div", {
      className: "flex h-full flex-1 flex-col items-center justify-center p-5 text-center",
      children: n.jsx(Dn, {
        children: n.jsxs(Mn, {
          children: [n.jsx(On, {
            icon: w.EYE_SLASH,
            children: e("notFound.badge")
          }), n.jsx(nt, {
            children: e("notFound.title")
          }), n.jsx(ne, {
            children: e("notFound.message")
          }), n.jsx(D, {
            href: "/",
            theme: "purple",
            padding: "md:px-12 p-2.5",
            className: "mt-6",
            children: e("notFound.goHome")
          })]
        })
      })
    })]
  })
}

function Xm() {
  return n.jsx(Ym, {})
}

function Jm(e, t) {
  const [s, r] = m.useState(e);
  return m.useEffect(() => {
    const a = setTimeout(() => {
      r(e)
    }, t);
    return () => {
      clearTimeout(a)
    }
  }, [e, t]), s
}

function $s(e) {
  return e ? decodeURIComponent(e) : ""
}

function Zm() {
  const e = se(),
    t = kn(),
    [s, r] = m.useState($s(t.query));
  m.useEffect(() => {
    r($s(t.query))
  }, [t.query]);
  const a = function (o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (r(o), !!l) {
      if (o.length === 0) {
        e("/", {
          replace: !0
        });
        return
      }
      e(za("/browse/:query", {
        query: o
      }), {
        replace: !0
      })
    }
  };
  return [s, a, o => {
    a(o ?? s, !0)
  }]
}

function eh(e) {
  return n.jsxs(Fr, {
    children: [n.jsx(Fn, {
      bg: e.showBg
    }), e.children]
  })
}

function ya(e) {
  const {
    t
  } = I(), [s] = Nn(), r = m.useCallback(() => {
    var a;
    (a = e.onEdit) == null || a.call(e, !e.editing)
  }, [e]);
  return n.jsx("button", {
    type: "button",
    onClick: r,
    className: "flex h-12 items-center overflow-hidden rounded-full bg-background-secondary px-4 py-2 text-white transition-[background-color,transform] hover:bg-background-secondaryHover active:scale-105",
    children: n.jsx("span", {
      ref: s,
      children: e.editing ? n.jsx("span", {
        className: "mx-4 whitespace-nowrap",
        children: t("home.mediaList.stopEditing")
      }) : n.jsx(P, {
        icon: w.EDIT
      })
    })
  })
}

function qn(e) {
  return n.jsx("div", {
    className: e.className,
    children: n.jsxs("div", {
      className: "mb-5 flex items-center",
      children: [n.jsxs("p", {
        className: "flex flex-1 items-center font-bold uppercase text-type-text",
        children: [e.icon ? n.jsx("span", {
          className: "mr-2 text-xl",
          children: n.jsx(P, {
            icon: e.icon
          })
        }) : null, e.title]
      }), e.children]
    })
  })
}
const Qn = m.forwardRef((e, t) => n.jsx("div", {
    className: "grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4",
    ref: t,
    children: e.children
  })),
  Hs = {
    duration: 0,
    watched: 0
  };

function th(e, t) {
  return e - t < 60 * 2
}

function va(e, t) {
  return t < 20
}

function nh(e, t) {
  return !(va(e, t) || th(e, t))
}

function sh(e, t) {
  const s = t.seasonId;
  return e.seasons[s].number === 1 && t.number === 1
}

function ja(e) {
  var r, a;
  if (e.type !== "show") return {
    show: nh(((r = e.progress) == null ? void 0 : r.duration) ?? 0, ((a = e.progress) == null ? void 0 : a.watched) ?? 0),
    progress: e.progress ?? Hs
  };
  const t = Object.values(e.episodes).sort((i, o) => o.updatedAt - i.updatedAt).filter(i => !va(i.progress.duration, i.progress.watched) || !sh(e, i))[0],
    s = e.seasons[t == null ? void 0 : t.seasonId];
  return !t || !s ? {
    show: !1,
    progress: Hs
  } : {
    season: s,
    episode: t,
    show: !0,
    progress: t.progress
  }
}

function rh(e) {
  return n.jsx("p", {
    className: `font-semibold text-type-secondary ${e.className||""}`,
    children: e.content.map((t, s) => n.jsxs("span", {
      children: [s !== 0 ? n.jsx("span", {
        className: "mx-[0.6em] text-[1em]",
        children: "●"
      }) : null, t]
    }, t))
  })
}

function wa(e) {
  const t = !!(e.year && e.year <= new Date().getFullYear()),
    s = !!(e.release_date && e.release_date <= new Date);
  return e.release_date ? s : t
}

function ah(e) {
  let {
    media: t,
    linkable: s,
    series: r,
    percentage: a,
    closable: i,
    onClose: o
  } = e;
  const {
    t: l
  } = I(), c = `${Math.round(a??0).toFixed(0)}%`, u = m.useCallback(() => wa(t), [t]), d = s && !i && u(), b = [l(`media.types.${t.type}`)];
  return t.year && b.push(t.year.toFixed()), u() || b.push(l("media.unreleased")), n.jsxs(ue.Base, {
    className: `group -m-3 mb-2 rounded-xl bg-background-main transition-colors duration-100 focus:relative focus:z-10 ${d?"hover:bg-mediaCard-hoverBackground tabbable":""}`,
    tabIndex: d ? 0 : -1,
    onKeyUp: g => g.key === "Enter" && g.currentTarget.click(),
    children: [n.jsx(ue.Light, {
      flareSize: 300,
      cssColorVar: "--colors-mediaCard-hoverAccent",
      backgroundClass: "bg-mediaCard-hoverBackground duration-100",
      className: C({
        "rounded-xl bg-background-main group-hover:opacity-100": d
      })
    }), n.jsxs(ue.Child, {
      className: `pointer-events-auto relative mb-2 p-3 transition-transform duration-100 ${d?"group-hover:scale-95":"opacity-60"}`,
      children: [n.jsxs("div", {
        className: C("relative mb-4 pb-[150%] w-full overflow-hidden rounded-xl bg-mediaCard-hoverBackground bg-cover bg-center transition-[border-radius] duration-100", {
          "group-hover:rounded-lg": d
        }),
        style: {
          backgroundImage: t.poster ? `url(${t.poster})` : void 0
        },
        children: [r ? n.jsx("div", {
          className: ["absolute right-2 top-2 rounded-md bg-mediaCard-badge px-2 py-1 transition-colors"].join(" "),
          children: n.jsx("p", {
            className: ["text-center text-xs font-bold text-mediaCard-badgeText transition-colors", i ? "" : "group-hover:text-white"].join(" "),
            children: l("media.episodeDisplay", {
              season: r.season || 1,
              episode: r.episode
            })
          })
        }) : null, a !== void 0 ? n.jsxs(n.Fragment, {
          children: [n.jsx("div", {
            className: `absolute inset-x-0 -bottom-px pb-1 h-12 bg-gradient-to-t from-mediaCard-shadow to-transparent transition-colors ${d?"group-hover:from-mediaCard-hoverShadow":""}`
          }), n.jsx("div", {
            className: `absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-mediaCard-shadow to-transparent transition-colors ${d?"group-hover:from-mediaCard-hoverShadow":""}`
          }), n.jsx("div", {
            className: "absolute inset-x-0 bottom-0 p-3",
            children: n.jsx("div", {
              className: "relative h-1 overflow-hidden rounded-full bg-mediaCard-barColor",
              children: n.jsx("div", {
                className: "absolute inset-y-0 left-0 rounded-full bg-mediaCard-barFillColor",
                style: {
                  width: c
                }
              })
            })
          })]
        }) : null, n.jsx("div", {
          className: `absolute inset-0 flex items-center justify-center bg-mediaCard-badge bg-opacity-80 transition-opacity duration-200 ${i?"opacity-100":"pointer-events-none opacity-0"}`,
          children: n.jsx(Tt, {
            clickable: !0,
            className: "text-2xl text-mediaCard-badgeText",
            onClick: () => i && (o == null ? void 0 : o()),
            icon: w.X
          })
        })]
      }), n.jsx("h1", {
        className: "mb-1 line-clamp-3 max-h-[4.5rem] text-ellipsis break-words font-bold text-white",
        children: n.jsx("span", {
          children: t.title
        })
      }), n.jsx(rh, {
        className: "text-xs",
        content: b
      })]
    })]
  })
}

function ih(e) {
  const t = n.jsx(ah, {
      ...e
    }),
    s = m.useCallback(() => wa(e.media), [e.media]),
    r = e.linkable && !e.closable && s();
  let a = r ? `/media/${encodeURIComponent(Jo(e.media))}` : "#";
  return r && e.series && (e.series.season === 0 && !e.series.episodeId ? a += `/${encodeURIComponent(e.series.seasonId)}` : a += `/${encodeURIComponent(e.series.seasonId)}/${encodeURIComponent(e.series.episodeId)}`), r ? n.jsx(at, {
    to: a,
    tabIndex: -1,
    className: C("tabbable", e.closable ? "hover:cursor-default" : ""),
    children: t
  }) : n.jsx("span", {
    children: t
  })
}

function oh(e) {
  var t, s, r, a;
  if (!(!e || !e.episode || !e.season)) return {
    episode: (t = e.episode) == null ? void 0 : t.number,
    season: (s = e.season) == null ? void 0 : s.number,
    episodeId: (r = e.episode) == null ? void 0 : r.id,
    seasonId: (a = e.season) == null ? void 0 : a.id
  }
}

function Yn(e) {
  const t = Y(i => i.items),
    s = m.useMemo(() => t[e.media.id], [t, e.media]),
    r = m.useMemo(() => s ? ja(s) : null, [s]),
    a = r != null && r.show ? r.progress.watched / r.progress.duration * 100 : void 0;
  return n.jsx(ih, {
    media: e.media,
    series: oh(r),
    linkable: !0,
    percentage: a,
    onClose: e.onClose,
    closable: e.closable
  })
}

function lh() {
  const {
    t: e
  } = I(), t = Y(c => c.items), s = Z(c => c.bookmarks), r = Z(c => c.removeBookmark), [a, i] = m.useState(!1), [o] = Nn(), l = m.useMemo(() => {
    let c = [];
    return Object.entries(s).forEach(u => {
      c.push({
        id: u[0],
        ...u[1]
      })
    }), c = c.sort((u, d) => {
      const b = s[u.id],
        g = s[d.id],
        h = t[u.id],
        f = t[d.id],
        v = Math.max(b.updatedAt, (h == null ? void 0 : h.updatedAt) ?? 0);
      return Math.max(g.updatedAt, (f == null ? void 0 : f.updatedAt) ?? 0) - v
    }), c
  }, [s, t]);
  return l.length === 0 ? null : n.jsxs("div", {
    children: [n.jsx(qn, {
      title: e("home.bookmarks.sectionTitle") || "Bookmarks",
      icon: w.BOOKMARK,
      children: n.jsx(ya, {
        editing: a,
        onEdit: i
      })
    }), n.jsx(Qn, {
      ref: o,
      children: l.map(c => n.jsx(Yn, {
        media: c,
        closable: a,
        onClose: () => r(c.id)
      }, c.id))
    })]
  })
}
const ch = m.forwardRef((e, t) => {
  const [s, r] = m.useState(!1);

  function a(i) {
    e.onChange(i, !1)
  }
  return n.jsxs(ue.Base, {
    className: C({
      "hover:flare-enabled group flex flex-col rounded-[28px] transition-colors sm:flex-row sm:items-center relative": !0,
      "bg-search-background": !s,
      "bg-search-focused": s
    }),
    children: [n.jsx(ue.Light, {
      flareSize: 400,
      enabled: s,
      className: "rounded-[28px]",
      backgroundClass: C({
        "transition-colors": !0,
        "bg-search-background": !s,
        "bg-search-focused": s
      })
    }), n.jsxs(ue.Child, {
      className: "flex flex-1 flex-col",
      children: [n.jsx("div", {
        className: "pointer-events-none absolute bottom-0 left-5 top-0 flex max-h-14 items-center text-search-icon",
        children: n.jsx(P, {
          icon: w.SEARCH
        })
      }), n.jsx($n, {
        ref: t,
        onUnFocus: () => {
          r(!1), e.onUnFocus()
        },
        onFocus: () => r(!0),
        onChange: i => a(i),
        value: e.value,
        className: "w-full flex-1 bg-transparent px-4 py-4 pl-12 text-search-text placeholder-search-placeholder focus:outline-none sm:py-4 sm:pr-2",
        placeholder: e.placeholder
      }), e.value.length > 0 && n.jsx("div", {
        onClick: () => {
          var i;
          e.onUnFocus(""), t && typeof t != "function" && ((i = t.current) == null || i.focus())
        },
        className: "cursor-pointer hover:text-white  absolute bottom-0 right-2 top-0 flex justify-center my-auto h-10 w-10 items-center hover:bg-search-hoverBackground active:scale-110 text-search-icon rounded-full transition-[transform,background-color] duration-200",
        children: n.jsx(P, {
          icon: w.X,
          className: "transition-colors duration-200"
        })
      })]
    })]
  })
});

function uh(e) {
  m.useEffect(() => {
    const t = s => {
      var r;
      if (s.key === "/") {
        if (document.activeElement && document.activeElement.tagName.toLowerCase() === "input") return;
        s.preventDefault(), (r = e.current) == null || r.focus()
      }
    };
    return window.addEventListener("keydown", t), () => {
      window.removeEventListener("keydown", t)
    }
  }, [e])
}

function dh(e) {
  return n.jsx("h1", {
    className: `text-2xl font-bold text-white sm:text-3xl md:text-4xl ${e.className??""}`,
    children: e.children
  })
}
const mh = () => Math.floor(Math.random() * 10) === 0;

function hh() {
  const {
    t: e
  } = I(), t = m.useMemo(() => mh(), []), s = m.useMemo(() => Math.random(), []);
  return {
    t: m.useCallback(a => {
      const i = e(`${a}.default`) ?? "";
      if (!t) return i;
      const o = e(`${a}.extra`, {
        returnObjects: !0,
        defaultValue: i
      });
      return Array.isArray(o) ? o.length === 0 ? i : o[Math.floor(s * o.length)] : typeof o == "string" ? o : i
    }, [e, s, t])
  }
}

function fh(e) {
  const t = e.getHours();
  return t < 5 ? "night" : t < 12 ? "morning" : t < 19 ? "day" : "night"
}

function gh(e) {
  let {
    setIsSticky: t,
    searchParams: s
  } = e;
  const {
    t: r
  } = hh(), [a, i, o] = s, [, l] = m.useState(!1), c = Wt(), u = m.useCallback(j => {
    l(j), t(j)
  }, [l, t]), {
    width: d
  } = si(), b = 16, [g, h] = m.useState(b);
  m.useEffect(() => {
    d > 1200 ? h(b) : h(b + 60)
  }, [d]);
  const f = fh(new Date),
    v = r(`home.titles.${f}`),
    p = r("home.search.placeholder"),
    y = m.useRef(null);
  return uh(y), n.jsx(Ht, {
    children: n.jsxs("div", {
      className: "mt-44 space-y-16 text-center",
      children: [n.jsx("div", {
        className: "relative z-10 mb-16",
        children: n.jsx(dh, {
          className: "mx-auto max-w-md",
          children: v
        })
      }), n.jsx("div", {
        className: "relative h-20 z-30",
        children: n.jsx(ri, {
          topOffset: g * -1 + c,
          stickyStyle: {
            paddingTop: `${g+c}px`
          },
          onFixedToggle: u,
          children: n.jsx(ch, {
            ref: y,
            onChange: i,
            value: a,
            onUnFocus: o,
            placeholder: p ?? ""
          })
        })
      })]
    })
  })
}

function xh() {
  const {
    t: e
  } = I(), t = Z(c => c.bookmarks), s = Y(c => c.items), r = Y(c => c.removeItem), [a, i] = m.useState(!1), [o] = Nn(), l = m.useMemo(() => {
    let c = [];
    return Object.entries(s).filter(u => ja(u[1]).show).sort((u, d) => d[1].updatedAt - u[1].updatedAt).forEach(u => {
      c.push({
        id: u[0],
        ...u[1]
      })
    }), c = c.filter(u => !!!t[u.id]), c
  }, [s, t]);
  return l.length === 0 ? null : n.jsxs("div", {
    children: [n.jsx(qn, {
      title: e("home.continueWatching.sectionTitle"),
      icon: w.CLOCK,
      children: n.jsx(ya, {
        editing: a,
        onEdit: i
      })
    }), n.jsx(Qn, {
      ref: o,
      children: l.map(c => n.jsx(Yn, {
        media: c,
        closable: a,
        onClose: () => r(c.id)
      }, c.id))
    })]
  })
}

function ka() {
  const {
    t: e
  } = I();
  return n.jsx($e, {
    className: "mb-24 mt-40",
    text: e("home.search.loading") ?? void 0
  })
}

function Ws(e) {
  const {
    t
  } = I(), s = e.failed ? w.WARNING : w.EYE_SLASH;
  return n.jsxs("div", {
    className: "mb-24 mt-40  flex flex-col items-center justify-center space-y-3 text-center",
    children: [n.jsx(Tt, {
      icon: s,
      className: `text-xl ${e.failed?"text-red-400":"text-type-logo"}`
    }), e.failed ? null : n.jsx("div", {
      children: (e.results ?? 0) > 0 ? n.jsx("p", {
        children: t("home.search.allResults")
      }) : n.jsx("p", {
        children: t("home.search.noResults")
      })
    }), e.failed ? n.jsx("div", {
      children: n.jsx("p", {
        children: t("home.search.failed")
      })
    }) : null]
  })
}

function ph(e) {
  let {
    searchQuery: t
  } = e;
  const {
    t: s
  } = I(), [r, a] = m.useState([]), [i, o] = fe(l => Cr(l));
  return m.useEffect(() => {
    async function l(c) {
      const u = await o(c);
      u && a(u)
    }
    t !== "" && l({
      searchQuery: t
    })
  }, [t, o]), i.loading ? n.jsx(ka, {}) : i.error ? n.jsx(Ws, {
    failed: !0
  }) : r ? n.jsxs("div", {
    children: [r.length > 0 ? n.jsxs("div", {
      children: [n.jsx(qn, {
        title: s("home.search.sectionTitle"),
        icon: w.SEARCH
      }), n.jsx(Qn, {
        children: r.map(l => n.jsx(Yn, {
          media: l
        }, l.id.toString()))
      })]
    }) : null, n.jsx(Ws, {
      results: r.length
    })]
  }) : null
}

function bh(e) {
  const [t, s] = m.useState(!1), [r, a] = m.useState(!1), i = Jm(e, 500);
  return m.useEffect(() => {
    s(e !== ""), a(e !== "")
  }, [e]), m.useEffect(() => {
    a(!1)
  }, [i]), {
    loading: r,
    searching: t
  }
}

function Gs() {
  const {
    t: e
  } = I(), [t, s] = m.useState(!1), r = Zm(), [a] = r, i = bh(a);
  return n.jsxs(eh, {
    showBg: t,
    children: [n.jsxs("div", {
      className: "mb-16 sm:mb-24",
      children: [n.jsx(we, {
        children: n.jsx("title", {
          children: e("global.name")
        })
      }), n.jsx(gh, {
        searchParams: r,
        setIsSticky: s
      })]
    }), n.jsx(Br, {
      children: i.loading ? n.jsx(ka, {}) : i.searching ? n.jsx(ph, {
        searchQuery: a
      }) : n.jsxs(n.Fragment, {
        children: [n.jsx(lh, {}), n.jsx(xh, {})]
      })
    })]
  })
}

function dt(e) {
  return n.jsxs("div", {
    className: "flex flex-col items-center",
    children: [e.top ? n.jsx("div", {
      className: "inline-block transform translate-y-1/2",
      children: e.top
    }) : null, n.jsx("div", {
      className: "w-full rounded-xl bg-largeCard-background bg-opacity-50 max-w-[600px] mx-auto p-[3rem]",
      children: e.children
    })]
  })
}

function mt(e) {
  return n.jsx("div", {
    className: "flex flex-col items-center text-center mb-8",
    children: n.jsxs("div", {
      className: "flex flex-col items-center text-center max-w-[318px]",
      children: [e.icon ? n.jsx("div", {
        className: "text-2xl mb-4 text-largeCard-icon",
        children: e.icon
      }) : null, n.jsx("h2", {
        className: "text-xl text-white font-bold",
        children: e.title
      }), e.children ? n.jsx("div", {
        className: "text-type-text mt-4",
        children: e.children
      }) : null]
    })
  })
}

function Be(e) {
  return n.jsx("div", {
    className: "mt-12",
    children: n.jsx("div", {
      className: C("mx-auto", {
        "flex flex-row-reverse justify-between items-center": e.splitAlign,
        "flex max-w-xs flex-col-reverse gap-3": !e.splitAlign
      }),
      children: e.children
    })
  })
}

function Na(e) {
  const t = !!e.url,
    s = !!e.to,
    r = n.jsx("span", {
      className: "group mt-1 cursor-pointer font-bold text-type-link hover:text-type-linkHover active:scale-95",
      children: e.children
    });
  return t ? n.jsx("a", {
    href: e.url,
    children: r
  }) : s ? n.jsx(at, {
    to: e.to ?? "",
    children: r
  }) : n.jsx("span", {
    onClick: () => e.onClick && e.onClick(),
    children: r
  })
}

function st(e) {
  return n.jsxs("div", {
    className: C("space-y-3", e.className),
    children: [e.label ? n.jsx("p", {
      className: "font-bold text-white",
      children: e.label
    }) : null, n.jsx($n, {
      name: e.name,
      value: e.value,
      autoComplete: e.autoComplete,
      onChange: e.onChange,
      placeholder: e.placeholder,
      passwordToggleable: e.passwordToggleable,
      className: "w-full flex-1 bg-authentication-inputBg px-4 py-3 text-search-text focus:outline-none rounded-lg placeholder:text-gray-700"
    })]
  })
}

function yh(e) {
  const [t, s] = m.useState(""), [r, a] = m.useState(""), {
    login: i,
    restore: o,
    importData: l
  } = He(), c = Y(h => h.items), u = Z(h => h.bookmarks), {
    t: d
  } = I(), [b, g] = fe(async (h, f) => {
    var y;
    if (!Ul(h)) throw new Error(d("auth.login.validationError") ?? void 0);
    const v = f.trim();
    if (v.length === 0) throw new Error(d("auth.login.deviceLengthError") ?? void 0);
    let p;
    try {
      p = await i({
        mnemonic: h,
        userData: {
          device: v
        }
      })
    } catch (j) {
      throw j.status === 401 ? new Error(d("auth.login.validationError") ?? void 0) : j
    }
    if (!p) throw new Error(d("auth.login.validationError") ?? void 0);
    await l(p, c, u), await o(p), (y = e.onLogin) == null || y.call(e)
  }, [e, i, o, d]);
  return n.jsxs(dt, {
    top: n.jsx(Ee, {
      backgroundClass: "bg-[#161527]"
    }),
    children: [n.jsx(mt, {
      title: d("auth.login.title"),
      children: d("auth.login.description")
    }), n.jsxs("div", {
      className: "space-y-4",
      children: [n.jsx(st, {
        label: d("auth.login.passphraseLabel") ?? void 0,
        value: t,
        autoComplete: "username",
        name: "username",
        onChange: s,
        placeholder: d("auth.login.passphrasePlaceholder") ?? void 0,
        passwordToggleable: !0
      }), n.jsx(st, {
        label: d("auth.deviceNameLabel") ?? void 0,
        value: r,
        onChange: a,
        placeholder: d("auth.deviceNamePlaceholder") ?? void 0
      }), b.error && !b.loading ? n.jsx("p", {
        className: "text-authentication-errorText",
        children: b.error.message
      }) : null]
    }), n.jsx(Be, {
      children: n.jsx(D, {
        theme: "purple",
        loading: b.loading,
        onClick: () => g(t, r),
        children: d("auth.login.submit")
      })
    }), n.jsx("p", {
      className: "text-center mt-6",
      children: n.jsx(ye, {
        i18nKey: "auth.createAccount",
        children: n.jsx(Na, {
          to: "/register",
          children: "."
        })
      })
    })]
  })
}

function vh() {
  const e = se();
  return n.jsxs(ut, {
    children: [n.jsx(Ce, {
      subpage: !0,
      k: "global.pages.login"
    }), n.jsx(yh, {
      onLogin: () => {
        e("/")
      }
    })]
  })
}
const jh = function (t) {
    const s = t.current / t.steps * 100;
    return n.jsxs("div", {
      className: t.className,
      children: [n.jsxs("p", {
        className: "mb-2",
        children: [t.current, "/", t.steps]
      }), n.jsx("div", {
        className: "max-w-full h-1 w-32 bg-onboarding-bar rounded-full overflow-hidden",
        children: n.jsx("div", {
          className: "h-full bg-onboarding-barFilled transition-[width] rounded-full",
          style: {
            width: `${s.toFixed(0)}%`
          }
        })
      })]
    })
  },
  Xn = jh;

function Jn(e) {
  return n.jsxs("div", {
    className: "bg-background-main min-h-screen",
    style: {
      backgroundImage: "linear-gradient(to bottom, var(--tw-gradient-from), var(--tw-gradient-to) 800px)"
    },
    children: [n.jsx(ct, {}), n.jsx("div", {
      className: "fixed px-7 py-5 left-0 top-0",
      children: n.jsx(at, {
        className: "block tabbable rounded-full text-xs ssm:text-base",
        to: "/",
        children: n.jsx(Ee, {
          clickable: !0
        })
      })
    }), n.jsx("div", {
      className: "min-h-screen",
      children: e.children
    })]
  })
}
const wh = z(xe(q(e => ({
  completed: !1,
  setCompleted(t) {
    e(s => {
      s.completed = t
    })
  }
})), {
  name: "__MW::onboarding"
}));

function Zn() {
  const [e] = $t("redirect"), t = se(), s = wh(i => i.setCompleted), r = m.useCallback(() => {
    t(e ?? "/")
  }, [t, e]);
  return {
    completeAndRedirect: m.useCallback(() => {
      s(!0), r()
    }, [r, s])
  }
}

function es() {
  const e = se(),
    t = Ue();
  return m.useCallback(r => {
    e({
      pathname: r,
      search: t.search
    })
  }, [e, t])
}

function rt(e) {
  return n.jsx("div", {
    className: C({
      "bg-onboarding-card duration-300 border border-onboarding-border rounded-lg p-7": !0,
      "hover:bg-onboarding-cardHover transition-colors cursor-pointer": !!e.onClick
    }, e.className),
    onClick: e.onClick,
    children: e.children
  })
}

function Ks(e) {
  return n.jsxs("div", {
    className: "grid grid-rows-[1fr,auto] h-full",
    children: [n.jsxs("div", {
      children: [n.jsx(P, {
        icon: w.RISING_STAR,
        className: C("text-4xl mb-8 block", e.colorClass)
      }), n.jsx(cc, {
        className: C("!mt-0 !mb-0 !text-xs uppercase", e.colorClass),
        children: e.subtitle
      }), n.jsx(de, {
        className: "!mb-0 !mt-1 !text-base",
        children: e.title
      }), n.jsx(ne, {
        className: "max-w-[320px] !my-4",
        children: e.description
      })]
    }), n.jsx("div", {
      children: e.children
    })]
  })
}

function Se(e) {
  const t = se();
  return n.jsxs("a", {
    onClick: () => {
      e.to && t(e.to)
    },
    href: e.href,
    target: e.target,
    className: C("text-onboarding-link cursor-pointer inline-flex gap-2 items-center group hover:opacity-75 transition-opacity", e.className),
    rel: "noreferrer",
    children: [e.children, n.jsx(P, {
      icon: w.ARROW_RIGHT,
      className: "group-hover:translate-x-0.5 transition-transform text-xl group-active:translate-x-0"
    })]
  })
}

function zs(e) {
  return n.jsx("div", {
    className: C("w-full grid justify-center", e.className),
    children: n.jsx("div", {
      className: "w-px h-10 bg-onboarding-divider"
    })
  })
}

function kh() {
  const e = es(),
    t = Bn("skip"),
    {
      completeAndRedirect: s
    } = Zn(),
    {
      t: r
    } = I(),
    a = Ln().length === 0;
  return n.jsxs(Jn, {
    children: [n.jsx(Ce, {
      subpage: !0,
      k: "global.pages.onboarding"
    }), n.jsx(Mr, {
      id: t.id,
      children: n.jsxs(xc, {
        children: [n.jsx(Vt, {
          className: "!mt-0 !mb-4 !text-2xl",
          children: r("onboarding.defaultConfirm.title")
        }), n.jsx(ne, {
          className: "!mt-1 !mb-12",
          children: r("onboarding.defaultConfirm.description")
        }), n.jsxs("div", {
          className: "flex flex-col-reverse gap-3 md:flex-row md:justify-between",
          children: [n.jsx(D, {
            theme: "secondary",
            onClick: t.hide,
            children: r("onboarding.defaultConfirm.cancel")
          }), n.jsx(D, {
            theme: "purple",
            onClick: () => s(),
            children: r("onboarding.defaultConfirm.confirm")
          })]
        })]
      })
    }), n.jsxs(Un, {
      children: [n.jsx(Xn, {
        steps: 2,
        current: 1,
        className: "mb-12"
      }), n.jsx(de, {
        className: "!mt-0 !text-3xl max-w-[435px]",
        children: r("onboarding.start.title")
      }), n.jsx(ne, {
        className: "max-w-[320px]",
        children: r("onboarding.start.explainer")
      }), n.jsxs("div", {
        className: "w-full flex flex-col md:flex-row gap-3",
        children: [n.jsx(rt, {
          onClick: () => e("/onboarding/extension"),
          children: n.jsx(Ks, {
            colorClass: "!text-onboarding-best",
            title: r("onboarding.start.options.extension.title"),
            subtitle: r("onboarding.start.options.extension.quality"),
            description: r("onboarding.start.options.extension.description"),
            children: n.jsx(Se, {
              children: r("onboarding.start.options.extension.action")
            })
          })
        }), n.jsxs("div", {
          className: "hidden md:grid grid-rows-[1fr,auto,1fr] justify-center gap-4",
          children: [n.jsx(zs, {
            className: "items-end"
          }), n.jsx("span", {
            className: "text-xs uppercase font-bold",
            children: "or"
          }), n.jsx(zs, {})]
        }), n.jsx(rt, {
          onClick: () => e("/onboarding/proxy"),
          children: n.jsx(Ks, {
            colorClass: "!text-onboarding-good",
            title: r("onboarding.start.options.proxy.title"),
            subtitle: r("onboarding.start.options.proxy.quality"),
            description: r("onboarding.start.options.proxy.description"),
            children: n.jsx(Se, {
              children: r("onboarding.start.options.proxy.action")
            })
          })
        })]
      }), a ? null : n.jsxs(n.Fragment, {
        children: [n.jsx("p", {
          className: "text-center hidden md:block mt-12",
          children: n.jsxs(ye, {
            i18nKey: "onboarding.start.options.default.text",
            children: [n.jsx("br", {}), n.jsx("a", {
              onClick: t.show,
              type: "button",
              className: "text-onboarding-link hover:opacity-75 cursor-pointer"
            })]
          })
        }), n.jsx("div", {
          className: " max-w-[300px] mx-auto md:hidden mt-12 ",
          children: n.jsx(D, {
            className: "!text-type-text !bg-opacity-50",
            theme: "secondary",
            onClick: t.show,
            children: n.jsx("span", {
              children: n.jsxs(ye, {
                i18nKey: "onboarding.start.options.default.text",
                children: [n.jsx("span", {}), n.jsx("span", {})]
              })
            })
          })
        })]
      })]
    })]
  })
}
async function Nh() {
  const e = await dr();
  return e ? e.success ? e.allowed ? e.hasPermission ? cr(e.version) ? "success" : "outdated" : "noperms" : "disallowed" : "failed" : "unknown"
}

function Sh() {
  const {
    t: e
  } = I(), t = m.useCallback(() => {
    window.location.reload()
  }, []);
  return n.jsx(rt, {
    className: "mt-4",
    children: n.jsxs("div", {
      className: "flex items-center space-x-7",
      children: [n.jsx("p", {
        className: "flex-1",
        children: e("onboarding.extension.notDetecting")
      }), n.jsx(D, {
        theme: "secondary",
        onClick: t,
        children: e("onboarding.extension.notDetectingAction")
      })]
    })
  })
}

function ts(e) {
  const {
    t
  } = I(), [s, r] = m.useState(e.status);
  m.useEffect(() => {
    e.loading || r(e.status)
  }, [e.status, e.loading]);
  let a = null;
  return (e.loading || e.status === "unknown") && (a = n.jsxs(n.Fragment, {
    children: [n.jsx($e, {}), n.jsx("p", {
      children: t("onboarding.extension.status.loading")
    })]
  })), e.status === "disallowed" || e.status === "noperms" ? a = n.jsxs(n.Fragment, {
    children: [n.jsx("p", {
      children: t("onboarding.extension.status.disallowed")
    }), n.jsx(D, {
      onClick: () => {
        Io({
          page: "PermissionGrant",
          redirectUrl: window.location.href
        })
      },
      theme: "purple",
      padding: "md:px-12 p-2.5",
      className: "mt-6",
      children: t("onboarding.extension.status.disallowedAction")
    })]
  }) : e.status === "failed" ? a = n.jsx("p", {
    children: t("onboarding.extension.status.failed")
  }) : e.status === "outdated" ? a = n.jsx("p", {
    children: t("onboarding.extension.status.outdated")
  }) : e.status === "success" && (a = n.jsxs("p", {
    className: "flex items-center",
    children: [n.jsx(P, {
      icon: w.CHECKMARK,
      className: "text-type-success mr-4"
    }), t("onboarding.extension.status.success")]
  })), n.jsxs(n.Fragment, {
    children: [n.jsx(rt, {
      children: n.jsx("div", {
        className: "flex py-6 flex-col space-y-2 items-center justify-center",
        children: a
      })
    }), s === "unknown" ? n.jsx(Sh, {}) : null, e.showHelp && e.status !== "success" ? n.jsx(rt, {
      className: "mt-4",
      children: n.jsxs("div", {
        className: "flex items-center space-x-7",
        children: [n.jsx(P, {
          icon: w.WARNING,
          className: "text-type-danger text-2xl"
        }), n.jsx("p", {
          className: "flex-1",
          children: n.jsx(ye, {
            i18nKey: "onboarding.extension.extensionHelp",
            components: {
              bold: n.jsx("span", {
                className: "text-white"
              })
            }
          })
        })]
      })
    }) : null]
  })
}

function Eh(e) {
  const {
    t
  } = I(), s = F().ONBOARDING_CHROME_EXTENSION_INSTALL_LINK;
  return n.jsxs(n.Fragment, {
    children: [n.jsx(de, {
      className: "!mt-0 !text-3xl max-w-[435px]",
      children: t("onboarding.extension.title")
    }), n.jsx(ne, {
      className: "max-w-[320px] mb-4",
      children: t("onboarding.extension.explainer")
    }), s ? n.jsx(Se, {
      href: s,
      target: "_blank",
      className: "mb-12",
      children: t("onboarding.extension.linkChrome")
    }) : null, n.jsx(ts, {
      status: e.status,
      loading: e.loading
    })]
  })
}

function Ch(e) {
  const {
    t
  } = I(), s = F().ONBOARDING_FIREFOX_EXTENSION_INSTALL_LINK;
  return n.jsxs(n.Fragment, {
    children: [n.jsx(de, {
      className: "!mt-0 !text-3xl max-w-[435px]",
      children: t("onboarding.extension.title")
    }), n.jsx(ne, {
      className: "max-w-[320px] mb-4",
      children: t("onboarding.extension.explainer")
    }), s ? n.jsx(Se, {
      href: s,
      target: "_blank",
      className: "mb-12",
      children: t("onboarding.extension.linkFirefox")
    }) : null, n.jsx(ts, {
      status: e.status,
      loading: e.loading,
      showHelp: !0
    })]
  })
}

function Ih(e) {
  const {
    t
  } = I();
  return n.jsxs(n.Fragment, {
    children: [n.jsx(de, {
      className: "!mt-0 !text-3xl max-w-[435px]",
      children: t("onboarding.extension.title")
    }), n.jsx(ne, {
      className: "max-w-[320px] mb-4",
      children: n.jsx(ye, {
        i18nKey: "onboarding.extension.explainerIos",
        components: {
          bold: n.jsx("span", {
            className: "text-white font-bold"
          })
        }
      })
    })]
  })
}

function Lh(e) {
  const {
    t
  } = I(), s = F().ONBOARDING_CHROME_EXTENSION_INSTALL_LINK, r = F().ONBOARDING_FIREFOX_EXTENSION_INSTALL_LINK;
  return n.jsxs(n.Fragment, {
    children: [n.jsx(de, {
      className: "!mt-0 !text-3xl max-w-[435px]",
      children: t("onboarding.extension.title")
    }), n.jsx(ne, {
      className: "max-w-[320px] mb-4",
      children: t("onboarding.extension.explainer")
    }), n.jsx("div", {
      className: "mb-4",
      children: s ? n.jsx(Se, {
        href: s,
        target: "_blank",
        children: t("onboarding.extension.linkChrome")
      }) : null
    }), n.jsx("div", {
      className: "mb-12",
      children: r ? n.jsx(Se, {
        href: r,
        target: "_blank",
        children: t("onboarding.extension.linkFirefox")
      }) : null
    }), n.jsx(ts, {
      status: e.status,
      loading: e.loading,
      showHelp: !0
    })]
  })
}

function Th() {
  const {
    t: e
  } = I(), t = es(), {
    completeAndRedirect: s
  } = Zn(), r = m.useMemo(() => pu(), []), [{
    loading: a,
    value: i
  }, o] = fe(async function () {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const d = await Nh();
    return d === "success" && u && s(), d
  }, [s]);
  Sn(o, 1e3);
  const c = {
    chrome: Eh,
    firefox: Ch,
    ios: Ih,
    unknown: Lh
  } [r];
  return n.jsxs(Jn, {
    children: [n.jsx(Ce, {
      subpage: !0,
      k: "global.pages.onboarding"
    }), n.jsxs(Un, {
      children: [n.jsx(Xn, {
        steps: 2,
        current: 2,
        className: "mb-12"
      }), n.jsx(c, {
        loading: a,
        status: i ?? "unknown"
      }), n.jsxs("div", {
        className: "flex justify-between items-center mt-8",
        children: [n.jsx(D, {
          onClick: () => t("/onboarding"),
          theme: "secondary",
          children: e("onboarding.extension.back")
        }), i === "success" ? n.jsx(D, {
          onClick: () => o(!0),
          theme: "purple",
          children: e("onboarding.extension.submit")
        }) : null]
      })]
    })]
  })
}

function Ph(e) {
  return n.jsxs("p", {
    className: C("inline-flex items-center text-type-danger", e.className),
    children: [n.jsx(P, {
      icon: w.WARNING,
      className: "text-xl mr-4"
    }), e.children]
  })
}
const qs = "https://postman-echo.com/get";

function Rh() {
  const {
    t: e
  } = I(), t = es(), {
    completeAndRedirect: s
  } = Zn(), [r, a] = m.useState(""), i = $(g => g.setProxySet), o = F().ONBOARDING_PROXY_INSTALL_LINK, l = ke(), c = $(g => g.account), [{
    loading: u,
    error: d
  }, b] = fe(async () => {
    if (!r.startsWith("http")) throw new Error("onboarding.proxy.input.errorInvalidUrl");
    try {
      if ((await Tn(r, qs, {})).url !== qs) throw new Error("onboarding.proxy.input.errorNotProxy");
      i([r]), c && l && await An(l, c, {
        proxyUrls: [r]
      }), s()
    } catch {
      throw new Error("onboarding.proxy.input.errorConnection")
    }
  }, [r, s, i]);
  return n.jsxs(Jn, {
    children: [n.jsx(Ce, {
      subpage: !0,
      k: "global.pages.onboarding"
    }), n.jsxs(Un, {
      children: [n.jsx(Xn, {
        steps: 2,
        current: 2,
        className: "mb-12"
      }), n.jsx(de, {
        className: "!mt-0 !text-3xl max-w-[435px]",
        children: e("onboarding.proxy.title")
      }), n.jsx(ne, {
        className: "max-w-[320px] !mb-5",
        children: e("onboarding.proxy.explainer")
      }), o ? n.jsx(Se, {
        href: o,
        target: "_blank",
        className: "mb-12",
        children: e("onboarding.proxy.link")
      }) : null, n.jsxs("div", {
        className: "w-[400px] max-w-full  mt-14 mb-28",
        children: [n.jsx(st, {
          label: e("onboarding.proxy.input.label"),
          value: r,
          onChange: a,
          placeholder: e("onboarding.proxy.input.placeholder"),
          className: "mb-4"
        }), d ? n.jsx(Ph, {
          children: e(d.message)
        }) : null]
      }), n.jsx(Gt, {}), n.jsxs("div", {
        className: "flex justify-between",
        children: [n.jsx(D, {
          theme: "secondary",
          onClick: () => t("/onboarding"),
          children: e("onboarding.proxy.back")
        }), n.jsx(D, {
          theme: "purple",
          loading: u,
          onClick: b,
          children: e("onboarding.proxy.submit")
        })]
      })]
    })]
  })
}
const Sa = ["#0A54FF", "#CF2E68", "#F9DD7F", "#7652DD", "#2ECFA8"],
  Qs = Sa[0],
  Ah = function (t) {
    return n.jsxs("div", {
      className: "space-y-3",
      children: [t.label ? n.jsx("p", {
        className: "font-bold text-white",
        children: t.label
      }) : null, n.jsx("div", {
        className: "flex gap-3",
        children: Sa.map(s => n.jsx("button", {
          type: "button",
          tabIndex: 0,
          className: C("w-full h-10 rounded flex justify-center items-center text-white pointer border-2 border-opacity-10 cursor-pointer", t.value === s ? "border-white" : "border-transparent"),
          onClick: () => t.onInput(s),
          style: {
            backgroundColor: s
          },
          children: t.value === s ? n.jsx(P, {
            icon: w.CHECKMARK
          }) : null
        }, s))
      })]
    })
  },
  Ys = Ah,
  Ea = [qe.USER_GROUP, qe.COUCH, qe.MOBILE, qe.TICKET, qe.HANDCUFFS],
  _h = Ea[0],
  Oh = function (t) {
    return n.jsxs("div", {
      className: "space-y-3",
      children: [t.label ? n.jsx("p", {
        className: "font-bold text-white",
        children: t.label
      }) : null, n.jsx("div", {
        className: "flex gap-3",
        children: Ea.map(s => n.jsx("button", {
          type: "button",
          tabIndex: 0,
          className: C("w-full h-10 rounded flex justify-center items-center text-white pointer border-2 border-opacity-10 cursor-pointer", t.value === s ? "bg-buttons-purple border-white" : "bg-authentication-inputBg border-transparent"),
          onClick: () => t.onInput(s),
          children: n.jsx(rr, {
            className: "text-xl",
            icon: s
          })
        }, s))
      })]
    })
  },
  Mh = Oh;

function Dh(e) {
  const [t, s] = m.useState(""), [r, a] = m.useState(Qs), [i, o] = m.useState(Qs), [l, c] = m.useState(_h), {
    t: u
  } = I(), [d, b] = m.useState(!1), g = m.useCallback(() => {
    var f;
    b(!1);
    const h = t.trim();
    if (h.length === 0) {
      b(!0);
      return
    }(f = e.onNext) == null || f.call(e, {
      device: h,
      profile: {
        colorA: r,
        colorB: i,
        icon: l
      }
    })
  }, [t, e, r, i, l]);
  return n.jsxs(dt, {
    children: [n.jsx(mt, {
      icon: n.jsx(Vr, {
        profile: {
          colorA: r,
          colorB: i,
          icon: l
        },
        iconClass: "text-3xl",
        sizeClass: "w-16 h-16"
      }),
      title: u("auth.register.information.title") ?? void 0,
      children: u("auth.register.information.header")
    }), n.jsxs("div", {
      className: "space-y-6",
      children: [n.jsx(st, {
        label: u("auth.deviceNameLabel") ?? void 0,
        value: t,
        onChange: s,
        placeholder: u("auth.deviceNamePlaceholder") ?? void 0
      }), n.jsx(Ys, {
        label: u("auth.register.information.color1"),
        value: r,
        onInput: a
      }), n.jsx(Ys, {
        label: u("auth.register.information.color2"),
        value: i,
        onInput: o
      }), n.jsx(Mh, {
        label: u("auth.register.information.icon"),
        value: l,
        onInput: c
      }), d ? n.jsx("p", {
        className: "text-authentication-errorText",
        children: u("auth.login.deviceLengthError")
      }) : null]
    }), n.jsx(Be, {
      children: n.jsx(D, {
        theme: "purple",
        onClick: () => g(),
        children: u("auth.register.information.next")
      })
    })]
  })
}
const Bh = function (t) {
    const {
      t: s
    } = I(), r = t.mnemonic.split(" "), [, a] = nr(), [i, o] = m.useState(!1), l = ai(), c = m.useRef();

    function u() {
      a(t.mnemonic), o(!0), c.current && clearTimeout(c.current), c.current = setTimeout(() => l() && o(!1), 500)
    }
    return n.jsxs("div", {
      className: "rounded-lg border border-authentication-border/50 ",
      children: [n.jsxs("div", {
        className: "px-4 py-2 flex justify-between border-b border-authentication-border/50",
        children: [n.jsx("p", {
          className: "font-bold text-sm text-white",
          children: s("auth.generate.passphraseFrameLabel")
        }), n.jsxs("button", {
          type: "button",
          className: "text-authentication-copyText hover:text-authentication-copyTextHover transition-colors flex gap-2 items-center cursor-pointer",
          onClick: () => u(),
          children: [n.jsx(P, {
            icon: i ? w.CHECKMARK : w.COPY,
            className: i ? "text-xs" : ""
          }), n.jsx("span", {
            className: "text-sm",
            children: s("actions.copy")
          })]
        })]
      }), n.jsx("div", {
        className: "px-4 py-4 grid grid-cols-3 text-sm sm:text-base sm:grid-cols-4 gap-2",
        children: r.map((d, b) => n.jsx("div", {
          className: "rounded-md py-2 bg-authentication-wordBackground text-white font-medium text-center",
          children: d
        }, b))
      })]
    })
  },
  Uh = Bh;

function Fh(e) {
  const t = m.useMemo(() => Fl(), []),
    {
      t: s
    } = I();
  return n.jsxs(dt, {
    children: [n.jsx(mt, {
      title: s("auth.generate.title"),
      icon: n.jsx(P, {
        icon: w.USER
      }),
      children: s("auth.generate.description")
    }), n.jsx(Uh, {
      mnemonic: t
    }), n.jsx(Be, {
      children: n.jsx(D, {
        theme: "purple",
        onClick: () => {
          var r;
          return (r = e.onNext) == null ? void 0 : r.call(e, t)
        },
        children: s("auth.generate.next")
      })
    })]
  })
}

function Vh(e) {
  const t = se(),
    s = ke(),
    r = m.useMemo(() => s ? new URL(s).hostname : void 0, [s]),
    a = Fe(() => s ? Gr(s) : Promise.resolve(null), [s]),
    {
      t: i
    } = I();
  let o = n.jsxs(n.Fragment, {
    children: [n.jsx("h3", {
      className: "text-white font-bold text-lg",
      children: i("auth.trust.failed.title")
    }), n.jsx("p", {
      children: i("auth.trust.failed.text")
    })]
  });
  return a.loading && (o = n.jsx($e, {})), a.value && (o = n.jsxs(n.Fragment, {
    children: [n.jsx("h3", {
      className: "text-white font-bold text-lg",
      children: a.value.name
    }), a.value.description ? n.jsx("p", {
      className: "text-center",
      children: a.value.description
    }) : null]
  })), n.jsxs(dt, {
    children: [n.jsx(mt, {
      title: i(r ? "auth.trust.title" : "auth.trust.noHostTitle"),
      icon: n.jsx(P, {
        icon: w.CIRCLE_EXCLAMATION
      }),
      children: r ? n.jsx(ye, {
        i18nKey: "auth.trust.host",
        values: {
          hostname: r
        },
        children: n.jsx("span", {
          className: "text-white"
        })
      }) : n.jsx("p", {
        children: i("auth.trust.noHost")
      })
    }), r ? n.jsxs(n.Fragment, {
      children: [n.jsx("div", {
        className: "border border-authentication-border rounded-xl px-4 py-8 flex flex-col items-center space-y-2 my-8",
        children: o
      }), n.jsxs(Be, {
        children: [n.jsx(D, {
          theme: "secondary",
          onClick: () => t("/"),
          children: i("auth.trust.no")
        }), n.jsx(D, {
          theme: "purple",
          onClick: () => {
            var l;
            return a.value && ((l = e.onNext) == null ? void 0 : l.call(e, a.value))
          },
          children: i("auth.trust.yes")
        })]
      }), n.jsx("p", {
        className: "text-center mt-6",
        children: n.jsx(ye, {
          i18nKey: "auth.hasAccount",
          children: n.jsx(Na, {
            to: "/login",
            children: "."
          })
        })
      })]
    }) : n.jsx(Be, {
      children: n.jsx(D, {
        theme: "purple",
        onClick: () => t("/"),
        children: i("auth.trust.no")
      })
    })]
  })
}

function $h(e) {
  const [t, s] = m.useState(""), {
    register: r,
    restore: a,
    importData: i
  } = He(), o = Y(p => p.items), l = Z(p => p.bookmarks), c = Ve(p => p.language), u = H(p => p.lastSelectedLanguage), d = _n(p => p.theme), b = ke(), {
    t: g
  } = I(), {
    executeRecaptcha: h
  } = ii(), [f, v] = fe(async p => {
    var R;
    if (!b) throw new Error(g("auth.verify.noBackendUrl") ?? void 0);
    if (!e.mnemonic || !e.userData) throw new Error(g("auth.verify.invalidData") ?? void 0);
    let y;
    if (e.hasCaptcha && (y = h ? await h() : void 0, !y)) throw new Error(g("auth.verify.recaptchaFailed") ?? void 0);
    if (p !== e.mnemonic) throw new Error(g("auth.verify.noMatch") ?? void 0);
    const j = await r({
      mnemonic: p,
      userData: e.userData,
      recaptchaToken: y
    });
    if (!j) throw new Error(g("auth.verify.registrationFailed") ?? void 0);
    await i(j, o, l), await An(b, j, {
      applicationLanguage: c,
      defaultSubtitleLanguage: u ?? void 0,
      applicationTheme: d ?? void 0,
      proxyUrls: void 0
    }), await a(j), (R = e.onNext) == null || R.call(e)
  }, [e, r, a]);
  return n.jsx(dt, {
    children: n.jsxs("form", {
      children: [n.jsx(mt, {
        icon: n.jsx(P, {
          icon: w.CIRCLE_CHECK
        }),
        title: g("auth.verify.title"),
        children: g("auth.verify.description")
      }), n.jsx(st, {
        label: g("auth.verify.passphraseLabel") ?? void 0,
        autoComplete: "username",
        name: "username",
        value: t,
        onChange: s,
        passwordToggleable: !0
      }), f.error ? n.jsx("p", {
        className: "mt-3 text-authentication-errorText",
        children: f.error.message
      }) : null, n.jsx(Be, {
        children: n.jsx(D, {
          theme: "purple",
          loading: f.loading,
          onClick: () => v(t),
          children: g("auth.verify.register")
        })
      })]
    })
  })
}

function Hh(e) {
  return e.siteKey ? n.jsx(oi, {
    reCaptchaKey: e.siteKey,
    children: e.children
  }) : e.children
}

function Wh() {
  const e = se(),
    [t, s] = m.useState(0),
    [r, a] = m.useState(null),
    [i, o] = m.useState(null),
    [l, c] = m.useState(null);
  return n.jsx(Hh, {
    siteKey: l,
    children: n.jsxs(ut, {
      children: [n.jsx(Ce, {
        subpage: !0,
        k: "global.pages.register"
      }), t === 0 ? n.jsx(Vh, {
        onNext: u => {
          c(u.hasCaptcha && u.captchaClientKey ? u.captchaClientKey : null), s(1)
        }
      }) : null, t === 1 ? n.jsx(Fh, {
        onNext: u => {
          a(u), s(2)
        }
      }) : null, t === 2 ? n.jsx(Dh, {
        onNext: u => {
          o(u), s(3)
        }
      }) : null, t === 3 ? n.jsx($h, {
        hasCaptcha: !!l,
        mnemonic: r,
        userData: i,
        onNext: () => {
          e("/")
        }
      }) : null]
    })
  })
}

function Gh(e) {
  const t = Wt(),
    s = le(r => r.location);
  return n.jsxs("div", {
    children: [n.jsx("div", {
      className: "fixed inset-x-0 z-[1000]",
      children: n.jsx(ba, {})
    }), n.jsx("div", {
      style: {
        paddingTop: s === null ? `${t}px` : "0px"
      },
      className: "flex min-h-screen flex-col",
      children: e.children
    })]
  })
}
const Ca = z(q(e => ({
  routes: [],
  registerRoute(t) {
    e(s => {
      s.routes.push(t)
    })
  }
})));

function Kh() {
  const e = Ue(),
    t = Ca(s => s.registerRoute);
  m.useEffect(() => {
    t({
      path: e.pathname
    })
  }, [e.pathname, t]), sr(() => {
    t({
      path: e.pathname
    })
  })
}

function Lf() {
  const e = Ca(r => r.routes),
    t = Ue();
  return m.useMemo(() => {
    const r = [...e];
    r.reverse();
    const a = r.find(i => !i.path.startsWith("/media") && t.pathname !== i.path && !i.path.startsWith("/s/") && !i.path.startsWith("/onboarding"));
    return (a == null ? void 0 : a.path) ?? "/"
  }, [e, t])
}
const zh = m.lazy(() => it(() => import("./DeveloperPage--1rV1y1n.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])));
m.lazy(() => it(() => import("./TestView-C1rlAP4k.js"), __vite__mapDeps([10, 1, 2, 3, 4, 8, 5, 6, 7, 9])));
const wn = tr(() => it(() => import("./PlayerView-CHau_TOb.js"), __vite__mapDeps([11, 1, 2, 3, 5, 6, 7, 4, 12, 8, 9]))),
  Ia = tr(() => it(() => import("./Settings-CEKoIO_M.js"), __vite__mapDeps([13, 1, 2, 3, 4, 5, 6, 7, 9, 12, 8])));
wn.preload();
Ia.preload();

function Xs(e) {
  let {
    children: t
  } = e;
  const s = Ue(),
    r = se();
  return m.useEffect(() => {
    const a = s.pathname;
    un(a) && al(s.pathname).then(i => {
      r(i ?? "/", {
        replace: !0
      })
    })
  }, [s.pathname, r]), un(s.pathname) ? null : t
}

function qh() {
  const {
    query: e
  } = kn(), t = se();
  return m.useEffect(() => {
    e ? tl(e).then(s => {
      t(s ?? "/", {
        replace: !0
      })
    }) : t("/", {
      replace: !0
    })
  }, [e, t]), null
}

function Qh() {
  const {
    query: e
  } = kn(), t = se();
  return m.useEffect(() => {
    e ? t(`/browse/${e}`, {
      replace: !0
    }) : t("/", {
      replace: !0
    })
  }, [e, t]), null
}

function Yh() {
  return Kh(), Oc(), n.jsxs(Gh, {
    children: [n.jsx(Rl, {}), n.jsxs(qa, {
      children: [n.jsx(G, {
        path: "/s/:query",
        element: n.jsx(qh, {})
      }), n.jsx(G, {
        path: "/search/:type",
        element: n.jsx(Qa, {
          to: "/browse"
        })
      }), n.jsx(G, {
        path: "/search/:type/:query?",
        element: n.jsx(Qh, {})
      }), n.jsx(G, {
        path: "/media/:media",
        element: n.jsx(Xs, {
          children: n.jsx(m.Suspense, {
            fallback: null,
            children: n.jsx(wn, {})
          })
        })
      }), n.jsx(G, {
        path: "/media/:media/:season/:episode",
        element: n.jsx(Xs, {
          children: n.jsx(m.Suspense, {
            fallback: null,
            children: n.jsx(wn, {})
          })
        })
      }), n.jsx(G, {
        path: "/browse/:query?",
        element: n.jsx(Gs, {})
      }), n.jsx(G, {
        path: "/",
        element: n.jsx(Gs, {})
      }), n.jsx(G, {
        path: "/register",
        element: n.jsx(Wh, {})
      }), n.jsx(G, {
        path: "/login",
        element: n.jsx(vh, {})
      }), n.jsx(G, {
        path: "/about",
        element: n.jsx(Bc, {})
      }), n.jsx(G, {
        path: "/onboarding",
        element: n.jsx(kh, {})
      }), n.jsx(G, {
        path: "/onboarding/extension",
        element: n.jsx(Th, {})
      }), n.jsx(G, {
        path: "/onboarding/proxy",
        element: n.jsx(Rh, {})
      }), Ur() ? n.jsx(G, {
        path: "/dmca",
        element: n.jsx(wc, {})
      }) : null, n.jsx(G, {
        path: "/settings",
        element: n.jsx(m.Suspense, {
          fallback: null,
          children: n.jsx(Ia, {})
        })
      }), n.jsx(G, {
        path: "/admin",
        element: n.jsx(Hc, {})
      }), n.jsx(G, {
        path: "/dev",
        element: n.jsx(zh, {})
      }), n.jsx(G, {
        path: "/dev/video",
        element: n.jsx(Qm, {})
      }), null, n.jsx(G, {
        path: "*",
        element: n.jsx(Xm, {})
      })]
    })]
  })
}
const Xh = 5 * 1e3;
async function Jh(e, t, s, r) {
  for (const a of e)
    if (t(a.id), !!r) try {
      if (a.action === "delete") {
        await Dl(s, r, a.tmdbId);
        continue
      }
      if (a.action === "add") {
        await Ml(s, r, {
          meta: {
            poster: a.poster,
            title: a.title ?? "",
            type: a.type ?? "",
            year: a.year ?? NaN
          },
          tmdbId: a.tmdbId
        });
        continue
      }
    } catch (i) {
      console.error(`Failed to sync bookmark: ${a.tmdbId} - ${a.action}`, i)
    }
}

function Zh() {
  const e = Z(r => r.clearUpdateQueue),
    t = Z(r => r.removeUpdateItem),
    s = ke();
  return m.useEffect(() => {
    e()
  }, [e]), m.useEffect(() => {
    const r = setInterval(() => {
      (async () => {
        if (!s) return;
        const a = Z.getState(),
          i = $.getState();
        await Jh(a.updateQueue, t, s, i.account)
      })()
    }, Xh);
    return () => {
      clearInterval(r)
    }
  }, [t, s]), null
}
const ef = 5 * 1e3;
async function tf(e, t, s, r) {
  for (const a of e)
    if (t(a.id), !!r) try {
      if (a.action === "delete") {
        await Ql(s, r, a.tmdbId, a.seasonId, a.episodeId);
        continue
      }
      if (a.action === "upsert") {
        await ql(s, r, Kl(a));
        continue
      }
    } catch (i) {
      console.error(`Failed to sync progress: ${a.tmdbId} - ${a.action}`, i)
    }
}

function nf() {
  const e = Y(r => r.clearUpdateQueue),
    t = Y(r => r.removeUpdateItem),
    s = ke();
  return m.useEffect(() => {
    e()
  }, [e]), m.useEffect(() => {
    const r = setInterval(() => {
      (async () => {
        if (!s) return;
        const a = Y.getState(),
          i = $.getState();
        await tf(a.updateQueue, t, s, i.account)
      })()
    }, ef);
    return () => {
      clearInterval(r)
    }
  }, [t, s]), null
}
const sf = 5 * 1e3;

function rf() {
  const e = H(s => s.importSubtitleLanguage),
    t = ke();
  return m.useEffect(() => {
    const s = setInterval(() => {
      (async () => {
        if (!t) return;
        const r = H.getState(),
          a = $.getState();
        r.lastSync.lastSelectedLanguage !== r.lastSelectedLanguage && a.account && r.lastSelectedLanguage && (await An(t, a.account, {
          defaultSubtitleLanguage: r.lastSelectedLanguage
        }), e(r.lastSelectedLanguage))
      })()
    }, sf);
    return () => {
      clearInterval(s)
    }
  }, [e, t]), null
}
hm();

function La(e) {
  const t = {
      user: "screens.loadingUser",
      lazy: "screens.loadingApp"
    },
    {
      t: s
    } = I();
  return n.jsx(Wr, {
    iconSlot: n.jsx($e, {}),
    children: s(t[e.type] ?? "unknown.translation")
  })
}

function Ta(e) {
  const {
    t
  } = I(), {
    logout: s
  } = He(), r = $(o => o.setBackendUrl), a = m.useCallback(() => {
    r(null), location.reload()
  }, [r]), i = m.useCallback(() => {
    s().then(() => {
      location.reload()
    })
  }, [s]);
  return n.jsxs(Wr, {
    iconSlot: n.jsx(P, {
      className: "text-type-danger text-2xl",
      icon: w.WARNING
    }),
    children: [e.children, e.showResetButton ? n.jsx("div", {
      className: "mt-6",
      children: n.jsx(D, {
        theme: "secondary",
        onClick: a,
        children: t("screens.loadingUserError.reset")
      })
    }) : null, e.showLogoutButton ? n.jsx("div", {
      className: "mt-6",
      children: n.jsx(D, {
        theme: "secondary",
        onClick: i,
        children: t("screens.loadingUserError.logout")
      })
    }) : null]
  })
}

function af() {
  const e = lc(),
    t = F().BACKEND_URL,
    s = ke(),
    {
      t: r
    } = I(),
    a = t !== s;
  return e.loading ? n.jsx(La, {
    type: "user"
  }) : e.error ? n.jsx(Ta, {
    showResetButton: a,
    showLogoutButton: !a,
    children: r(a ? "screens.loadingUserError.textWithReset" : "screens.loadingUserError.text")
  }) : n.jsx(Yh, {})
}

function of() {
  const e = Fe(async () => {
      Pr(Ve.getState().language), await ho()
    }, []),
    {
      t
    } = I();
  return e.loading ? n.jsx(_c, {}) : e.error ? n.jsx(Ta, {
    children: t("screens.migration.failed")
  }) : n.jsx(af, {})
}

function lf(e) {
  return F().NORMAL_ROUTER ? n.jsx(ui, {
    children: e.children
  }) : n.jsx(di, {
    children: e.children
  })
}
const cf = document.getElementById("root"),
  uf = li(cf);
uf.render(n.jsx(m.StrictMode, {
  children: n.jsxs(jc, {
    children: [n.jsx(gr, {}), n.jsx(ci, {
      children: n.jsx(m.Suspense, {
        fallback: n.jsx(La, {
          type: "lazy"
        }),
        children: n.jsxs(ac, {
          applyGlobal: !0,
          children: [n.jsx(nf, {}), n.jsx(Zh, {}), n.jsx(rf, {}), n.jsx(lf, {
            children: n.jsx(of, {})
          })]
        })
      })
    })]
  })
}));
export {
  ne as $, $ as A, D as B, wh as C, $t as D, Dn as E, ea as F, zn as G, Lf as H, On as I, yn as J, gn as K, $e as L, B as M, Fn as N, zm as O, gu as P, U as Q, xu as R, rc as S, Ht as T, ke as U, ic as V, If as W, de as X, cc as Y, Mr as Z, xc as _, nt as a, Vr as a0, Ys as a1, Mh as a2, He as a3, st as a4, Vt as a5, yt as a6, N as a7, kd as a8, jd as a9, $m as aa, Tn as ab, Na as ac, Kn as ad, Gt as ae, Ar as af, Rn as ag, Jl as ah, qt as ai, Gr as aj, Nf as ak, Jd as al, Wc as am, Sf as an, _n as ao, Ve as ap, H as aq, ma as ar, An as as, ws as at, Ef as au, Cf as av, ut as aw, Ce as ax, Br as ay, bn as b, tt as c, kf as d, dr as e, wf as f, yr as g, Mn as h, cr as i, Io as j, F as k, $o as l, Nh as m, yc as n, ee as o, he as p, on as q, pn as r, jf as s, Dt as t, Bn as u, an as v, ct as w, hr as x, vf as y, yf as z
};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DeveloperPage--1rV1y1n.js", "assets/vendor-Dkz3gcSC.js", "assets/auth-72H9TcpW.js", "assets/caption-parsing-BABN6jyO.js", "assets/react-dom-DpNJ2UNC.js", "assets/Icons-Ct84pi7p.js", "assets/language-db-DxKZVAm4.js", "assets/Icons-7LetCtYR.css", "assets/locales-BXkJCeK5.js", "assets/hls-2_Gpnevg.js", "assets/TestView-C1rlAP4k.js", "assets/PlayerView-CHau_TOb.js", "assets/StatusCircle-D7h8AcdR.js", "assets/Settings-CEKoIO_M.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=index-DYBNcHgS.js.map
// if digital purchase isn't ownership, then piracy isn't theft.