const cg = "5";
typeof window < "u" && (window.__svelte ||= { v: /* @__PURE__ */ new Set() }).v.add(cg);
const Eg = 1, Qg = 4, fg = 8, ug = 16, dg = 1, hg = 2, zt = "[", Vt = "[!", $t = "]", ZA = {}, T = Symbol(), Pt = !1;
var Ot = Array.isArray, wg = Array.from, De = Object.keys, _e = Object.defineProperty, NA = Object.getOwnPropertyDescriptor, yg = Object.getOwnPropertyDescriptors, vg = Object.prototype, Dg = Array.prototype, Ze = Object.getPrototypeOf;
function Ar(A) {
  for (var e = 0; e < A.length; e++)
    A[e]();
}
const tA = 2, er = 4, le = 8, Pe = 16, rA = 32, Be = 64, Te = 128, FA = 256, me = 512, q = 1024, dA = 2048, Ce = 4096, jA = 8192, zA = 16384, _g = 32768, Oe = 65536, mg = 1 << 19, tr = 1 << 20, Ie = Symbol("$state"), rr = Symbol("legacy props"), Ng = Symbol("");
function gr(A) {
  return A === this.v;
}
function bg(A, e) {
  return A != A ? e == e : A !== e || A !== null && typeof A == "object" || typeof A == "function";
}
function nr(A) {
  return !bg(A, this.v);
}
function Fg(A) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Rg() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Gg(A) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function kg() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Yg() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function pg(A) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Mg() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Jg() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Sg() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Lg() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let ir = !1;
function iA(A) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: A,
    reactions: null,
    equals: gr,
    version: 0
  };
}
function JA(A) {
  return /* @__PURE__ */ xg(iA(A));
}
// @__NO_SIDE_EFFECTS__
function Ir(A, e = !1) {
  const t = iA(A);
  return e || (t.equals = nr), t;
}
// @__NO_SIDE_EFFECTS__
function xg(A) {
  return _ !== null && _.f & tA && (IA === null ? Og([A]) : IA.push(A)), A;
}
function G(A, e) {
  return _ !== null && en() && _.f & (tA | Pe) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (IA === null || !IA.includes(A)) && Lg(), Ug(A, e);
}
function Ug(A, e) {
  return A.equals(e) || (A.v = e, A.version = mr(), or(A, dA), d !== null && d.f & q && !(d.f & rA) && (H !== null && H.includes(A) ? (sA(d, dA), Me(d)) : fA === null ? An([A]) : fA.push(A))), e;
}
function or(A, e) {
  var t = A.reactions;
  if (t !== null)
    for (var g = t.length, n = 0; n < g; n++) {
      var i = t[n], I = i.f;
      I & dA || (sA(i, e), I & (q | FA) && (I & tA ? or(
        /** @type {Derived} */
        i,
        Ce
      ) : Me(
        /** @type {Effect} */
        i
      )));
    }
}
function Ge(A) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let p = !1;
function HA(A) {
  p = A;
}
let k;
function hA(A) {
  if (A === null)
    throw Ge(), ZA;
  return k = A;
}
function XA() {
  return hA(
    /** @type {TemplateNode} */
    /* @__PURE__ */ yA(k)
  );
}
function j(A) {
  if (p) {
    if (/* @__PURE__ */ yA(k) !== null)
      throw Ge(), ZA;
    k = A;
  }
}
function Hg() {
  for (var A = 0, e = k; ; ) {
    if (e.nodeType === 8) {
      var t = (
        /** @type {Comment} */
        e.data
      );
      if (t === $t) {
        if (A === 0) return e;
        A -= 1;
      } else (t === zt || t === Vt) && (A += 1);
    }
    var g = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ yA(e)
    );
    e.remove(), e = g;
  }
}
function eA(A, e = null, t) {
  if (typeof A != "object" || A === null || Ie in A)
    return A;
  const g = Ze(A);
  if (g !== vg && g !== Dg)
    return A;
  var n = /* @__PURE__ */ new Map(), i = Ot(A), I = iA(0);
  i && n.set("length", iA(
    /** @type {any[]} */
    A.length
  ));
  var C;
  return new Proxy(
    /** @type {any} */
    A,
    {
      defineProperty(s, l, a) {
        (!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && Mg();
        var c = n.get(l);
        return c === void 0 ? (c = iA(a.value), n.set(l, c)) : G(c, eA(a.value, C)), !0;
      },
      deleteProperty(s, l) {
        var a = n.get(l);
        if (a === void 0)
          l in s && n.set(l, iA(T));
        else {
          if (i && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), E = Number(l);
            Number.isInteger(E) && E < c.v && G(c, E);
          }
          G(a, T), Jt(I);
        }
        return !0;
      },
      get(s, l, a) {
        if (l === Ie)
          return A;
        var c = n.get(l), E = l in s;
        if (c === void 0 && (!E || NA(s, l)?.writable) && (c = iA(eA(E ? s[l] : T, C)), n.set(l, c)), c !== void 0) {
          var f = B(c);
          return f === T ? void 0 : f;
        }
        return Reflect.get(s, l, a);
      },
      getOwnPropertyDescriptor(s, l) {
        var a = Reflect.getOwnPropertyDescriptor(s, l);
        if (a && "value" in a) {
          var c = n.get(l);
          c && (a.value = B(c));
        } else if (a === void 0) {
          var E = n.get(l), f = E?.v;
          if (E !== void 0 && f !== T)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return a;
      },
      has(s, l) {
        if (l === Ie)
          return !0;
        var a = n.get(l), c = a !== void 0 && a.v !== T || Reflect.has(s, l);
        if (a !== void 0 || d !== null && (!c || NA(s, l)?.writable)) {
          a === void 0 && (a = iA(c ? eA(s[l], C) : T), n.set(l, a));
          var E = B(a);
          if (E === T)
            return !1;
        }
        return c;
      },
      set(s, l, a, c) {
        var E = n.get(l), f = l in s;
        if (i && l === "length")
          for (var m = a; m < /** @type {Source<number>} */
          E.v; m += 1) {
            var R = n.get(m + "");
            R !== void 0 ? G(R, T) : m in s && (R = iA(T), n.set(m + "", R));
          }
        E === void 0 ? (!f || NA(s, l)?.writable) && (E = iA(void 0), G(E, eA(a, C)), n.set(l, E)) : (f = E.v !== T, G(E, eA(a, C)));
        var x = Reflect.getOwnPropertyDescriptor(s, l);
        if (x?.set && x.set.call(c, a), !f) {
          if (i && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              n.get("length")
            ), Y = Number(l);
            Number.isInteger(Y) && Y >= $.v && G($, Y + 1);
          }
          Jt(I);
        }
        return !0;
      },
      ownKeys(s) {
        B(I);
        var l = Reflect.ownKeys(s).filter((E) => {
          var f = n.get(E);
          return f === void 0 || f.v !== T;
        });
        for (var [a, c] of n)
          c.v !== T && !(a in s) && l.push(a);
        return l;
      },
      setPrototypeOf() {
        Jg();
      }
    }
  );
}
function Jt(A, e = 1) {
  G(A, A.v + e);
}
var St, sr, ar;
function qe() {
  if (St === void 0) {
    St = window;
    var A = Element.prototype, e = Node.prototype;
    sr = NA(e, "firstChild").get, ar = NA(e, "nextSibling").get, A.__click = void 0, A.__className = "", A.__attributes = null, A.__styles = null, A.__e = void 0, Text.prototype.__t = void 0;
  }
}
function ke(A = "") {
  return document.createTextNode(A);
}
// @__NO_SIDE_EFFECTS__
function bA(A) {
  return sr.call(A);
}
// @__NO_SIDE_EFFECTS__
function yA(A) {
  return ar.call(A);
}
function X(A, e) {
  if (!p)
    return /* @__PURE__ */ bA(A);
  var t = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ bA(k)
  );
  return t === null && (t = k.appendChild(ke())), hA(t), t;
}
function Ke(A, e) {
  if (!p) {
    var t = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ bA(
        /** @type {Node} */
        A
      )
    );
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ yA(t) : t;
  }
  return k;
}
function CA(A, e = 1, t = !1) {
  let g = p ? k : A;
  for (var n; e--; )
    n = g, g = /** @type {TemplateNode} */
    /* @__PURE__ */ yA(g);
  if (!p)
    return g;
  var i = g?.nodeType;
  if (t && i !== 3) {
    var I = ke();
    return g === null ? n?.after(I) : g.before(I), hA(I), I;
  }
  return hA(g), /** @type {TemplateNode} */
  g;
}
function Kg(A) {
  A.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function ne(A) {
  var e = tA | dA;
  d === null ? e |= FA : d.f |= tr;
  var t = _ !== null && _.f & tA ? (
    /** @type {Derived} */
    _
  ) : null;
  const g = {
    children: null,
    ctx: K,
    deps: null,
    equals: gr,
    f: e,
    fn: A,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: t ?? d
  };
  return t !== null && (t.children ??= []).push(g), g;
}
function lr(A) {
  var e = A.children;
  if (e !== null) {
    A.children = null;
    for (var t = 0; t < e.length; t += 1) {
      var g = e[t];
      g.f & tA ? At(
        /** @type {Derived} */
        g
      ) : RA(
        /** @type {Effect} */
        g
      );
    }
  }
}
function Zg(A) {
  for (var e = A.parent; e !== null; ) {
    if (!(e.f & tA))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Br(A) {
  var e, t = d;
  oA(Zg(A));
  try {
    lr(A), e = Nr(A);
  } finally {
    oA(t);
  }
  return e;
}
function Cr(A) {
  var e = Br(A), t = (KA || A.f & FA) && A.deps !== null ? Ce : q;
  sA(A, t), A.equals(e) || (A.v = e, A.version = mr());
}
function At(A) {
  lr(A), ae(A, 0), sA(A, zA), A.v = A.children = A.deps = A.ctx = A.reactions = null;
}
function Tg(A) {
  d === null && _ === null && Gg(), _ !== null && _.f & FA && Rg(), nt && Fg();
}
function qg(A, e) {
  var t = e.last;
  t === null ? e.last = e.first = A : (t.next = A, A.prev = t, e.last = A);
}
function VA(A, e, t, g = !0) {
  var n = (A & Be) !== 0, i = d, I = {
    ctx: K,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: A | dA,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: n ? null : i,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (t) {
    var C = TA;
    try {
      Ut(!0), pe(I), I.f |= _g;
    } catch (a) {
      throw RA(I), a;
    } finally {
      Ut(C);
    }
  } else e !== null && Me(I);
  var s = t && I.deps === null && I.first === null && I.nodes_start === null && I.teardown === null && (I.f & tr) === 0;
  if (!s && !n && g && (i !== null && qg(I, i), _ !== null && _.f & tA)) {
    var l = (
      /** @type {Derived} */
      _
    );
    (l.children ??= []).push(I);
  }
  return I;
}
function jg(A) {
  const e = VA(le, null, !1);
  return sA(e, q), e.teardown = A, e;
}
function je(A) {
  Tg();
  var e = d !== null && (d.f & rA) !== 0 && K !== null && !K.m;
  if (e) {
    var t = (
      /** @type {ComponentContext} */
      K
    );
    (t.e ??= []).push({
      fn: A,
      effect: d,
      reaction: _
    });
  } else {
    var g = et(A);
    return g;
  }
}
function cr(A) {
  const e = VA(Be, A, !0);
  return () => {
    RA(e);
  };
}
function et(A) {
  return VA(er, A, !1);
}
function tt(A) {
  return VA(le, A, !0);
}
function SA(A) {
  return rt(A);
}
function rt(A, e = 0) {
  return VA(le | Pe | e, A, !0);
}
function Ne(A, e = !0) {
  return VA(le | rA, A, !0, e);
}
function Er(A) {
  var e = A.teardown;
  if (e !== null) {
    const t = nt, g = _;
    Ht(!0), wA(null);
    try {
      e.call(null);
    } finally {
      Ht(t), wA(g);
    }
  }
}
function Qr(A) {
  var e = A.deriveds;
  if (e !== null) {
    A.deriveds = null;
    for (var t = 0; t < e.length; t += 1)
      At(e[t]);
  }
}
function fr(A, e = !1) {
  var t = A.first;
  for (A.first = A.last = null; t !== null; ) {
    var g = t.next;
    RA(t, e), t = g;
  }
}
function Xg(A) {
  for (var e = A.first; e !== null; ) {
    var t = e.next;
    e.f & rA || RA(e), e = t;
  }
}
function RA(A, e = !0) {
  var t = !1;
  if ((e || A.f & mg) && A.nodes_start !== null) {
    for (var g = A.nodes_start, n = A.nodes_end; g !== null; ) {
      var i = g === n ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ yA(g)
      );
      g.remove(), g = i;
    }
    t = !0;
  }
  fr(A, e && !t), Qr(A), ae(A, 0), sA(A, zA);
  var I = A.transitions;
  if (I !== null)
    for (const s of I)
      s.stop();
  Er(A);
  var C = A.parent;
  C !== null && C.first !== null && ur(A), A.next = A.prev = A.teardown = A.ctx = A.deps = A.fn = A.nodes_start = A.nodes_end = null;
}
function ur(A) {
  var e = A.parent, t = A.prev, g = A.next;
  t !== null && (t.next = g), g !== null && (g.prev = t), e !== null && (e.first === A && (e.first = g), e.last === A && (e.last = t));
}
function Lt(A, e) {
  var t = [];
  dr(A, t, !0), Wg(t, () => {
    RA(A), e && e();
  });
}
function Wg(A, e) {
  var t = A.length;
  if (t > 0) {
    var g = () => --t || e();
    for (var n of A)
      n.out(g);
  } else
    e();
}
function dr(A, e, t) {
  if (!(A.f & jA)) {
    if (A.f ^= jA, A.transitions !== null)
      for (const I of A.transitions)
        (I.is_global || t) && e.push(I);
    for (var g = A.first; g !== null; ) {
      var n = g.next, i = (g.f & Oe) !== 0 || (g.f & rA) !== 0;
      dr(g, e, i ? t : !1), g = n;
    }
  }
}
function xt(A) {
  hr(A, !0);
}
function hr(A, e) {
  if (A.f & jA) {
    ce(A) && pe(A), A.f ^= jA;
    for (var t = A.first; t !== null; ) {
      var g = t.next, n = (t.f & Oe) !== 0 || (t.f & rA) !== 0;
      hr(t, n ? e : !1), t = g;
    }
    if (A.transitions !== null)
      for (const i of A.transitions)
        (i.is_global || e) && i.in();
  }
}
const zg = typeof requestIdleCallback > "u" ? (A) => setTimeout(A, 1) : requestIdleCallback;
let be = !1, Fe = !1, Xe = [], We = [];
function wr() {
  be = !1;
  const A = Xe.slice();
  Xe = [], Ar(A);
}
function yr() {
  Fe = !1;
  const A = We.slice();
  We = [], Ar(A);
}
function gt(A) {
  be || (be = !0, queueMicrotask(wr)), Xe.push(A);
}
function Vg(A) {
  Fe || (Fe = !0, zg(yr)), We.push(A);
}
function $g() {
  be && wr(), Fe && yr();
}
function vr(A) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
const Dr = 0, Pg = 1;
let de = !1, he = Dr, oe = !1, se = null, TA = !1, nt = !1;
function Ut(A) {
  TA = A;
}
function Ht(A) {
  nt = A;
}
let mA = [], qA = 0;
let _ = null;
function wA(A) {
  _ = A;
}
let d = null;
function oA(A) {
  d = A;
}
let IA = null;
function Og(A) {
  IA = A;
}
let H = null, z = 0, fA = null;
function An(A) {
  fA = A;
}
let _r = 0, KA = !1, K = null;
function mr() {
  return ++_r;
}
function en() {
  return !ir;
}
function ce(A) {
  var e = A.f;
  if (e & dA)
    return !0;
  if (e & Ce) {
    var t = A.deps, g = (e & FA) !== 0;
    if (t !== null) {
      var n;
      if (e & me) {
        for (n = 0; n < t.length; n++)
          (t[n].reactions ??= []).push(A);
        A.f ^= me;
      }
      for (n = 0; n < t.length; n++) {
        var i = t[n];
        if (ce(
          /** @type {Derived} */
          i
        ) && Cr(
          /** @type {Derived} */
          i
        ), g && d !== null && !KA && !i?.reactions?.includes(A) && (i.reactions ??= []).push(A), i.version > A.version)
          return !0;
      }
    }
    g || sA(A, q);
  }
  return !1;
}
function tn(A, e) {
  for (var t = e; t !== null; ) {
    if (t.f & Te)
      try {
        t.fn(A);
        return;
      } catch {
        t.f ^= Te;
      }
    t = t.parent;
  }
  throw de = !1, A;
}
function rn(A) {
  return (A.f & zA) === 0 && (A.parent === null || (A.parent.f & Te) === 0);
}
function Ye(A, e, t, g) {
  if (de) {
    if (t === null && (de = !1), rn(e))
      throw A;
    return;
  }
  t !== null && (de = !0);
  {
    tn(A, e);
    return;
  }
}
function Nr(A) {
  var e = H, t = z, g = fA, n = _, i = KA, I = IA, C = K, s = A.f;
  H = /** @type {null | Value[]} */
  null, z = 0, fA = null, _ = s & (rA | Be) ? null : A, KA = !TA && (s & FA) !== 0, IA = null, K = A.ctx;
  try {
    var l = (
      /** @type {Function} */
      (0, A.fn)()
    ), a = A.deps;
    if (H !== null) {
      var c;
      if (ae(A, z), a !== null && z > 0)
        for (a.length = z + H.length, c = 0; c < H.length; c++)
          a[z + c] = H[c];
      else
        A.deps = a = H;
      if (!KA)
        for (c = z; c < a.length; c++)
          (a[c].reactions ??= []).push(A);
    } else a !== null && z < a.length && (ae(A, z), a.length = z);
    return l;
  } finally {
    H = e, z = t, fA = g, _ = n, KA = i, IA = I, K = C;
  }
}
function gn(A, e) {
  let t = e.reactions;
  if (t !== null) {
    var g = t.indexOf(A);
    if (g !== -1) {
      var n = t.length - 1;
      n === 0 ? t = e.reactions = null : (t[g] = t[n], t.pop());
    }
  }
  t === null && e.f & tA && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (H === null || !H.includes(e)) && (sA(e, Ce), e.f & (FA | me) || (e.f ^= me), ae(
    /** @type {Derived} **/
    e,
    0
  ));
}
function ae(A, e) {
  var t = A.deps;
  if (t !== null)
    for (var g = e; g < t.length; g++)
      gn(A, t[g]);
}
function pe(A) {
  var e = A.f;
  if (!(e & zA)) {
    sA(A, q);
    var t = d, g = K;
    d = A;
    try {
      e & Pe ? Xg(A) : fr(A), Qr(A), Er(A);
      var n = Nr(A);
      A.teardown = typeof n == "function" ? n : null, A.version = _r;
    } catch (i) {
      Ye(i, A, t, g || A.ctx);
    } finally {
      d = t;
    }
  }
}
function br() {
  if (qA > 1e3) {
    qA = 0;
    try {
      kg();
    } catch (A) {
      if (se !== null)
        Ye(A, se, null);
      else
        throw A;
    }
  }
  qA++;
}
function Fr(A) {
  var e = A.length;
  if (e !== 0) {
    br();
    var t = TA;
    TA = !0;
    try {
      for (var g = 0; g < e; g++) {
        var n = A[g];
        n.f & q || (n.f ^= q);
        var i = [];
        Rr(n, i), nn(i);
      }
    } finally {
      TA = t;
    }
  }
}
function nn(A) {
  var e = A.length;
  if (e !== 0)
    for (var t = 0; t < e; t++) {
      var g = A[t];
      if (!(g.f & (zA | jA)))
        try {
          ce(g) && (pe(g), g.deps === null && g.first === null && g.nodes_start === null && (g.teardown === null ? ur(g) : g.fn = null));
        } catch (n) {
          Ye(n, g, null, g.ctx);
        }
    }
}
function In() {
  if (oe = !1, qA > 1001)
    return;
  const A = mA;
  mA = [], Fr(A), oe || (qA = 0, se = null);
}
function Me(A) {
  he === Dr && (oe || (oe = !0, queueMicrotask(In))), se = A;
  for (var e = A; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (t & (Be | rA)) {
      if (!(t & q)) return;
      e.f ^= q;
    }
  }
  mA.push(e);
}
function Rr(A, e) {
  var t = A.first, g = [];
  A: for (; t !== null; ) {
    var n = t.f, i = (n & rA) !== 0, I = i && (n & q) !== 0, C = t.next;
    if (!I && !(n & jA))
      if (n & le) {
        if (i)
          t.f ^= q;
        else
          try {
            ce(t) && pe(t);
          } catch (c) {
            Ye(c, t, null, t.ctx);
          }
        var s = t.first;
        if (s !== null) {
          t = s;
          continue;
        }
      } else n & er && g.push(t);
    if (C === null) {
      let c = t.parent;
      for (; c !== null; ) {
        if (A === c)
          break A;
        var l = c.next;
        if (l !== null) {
          t = l;
          continue A;
        }
        c = c.parent;
      }
    }
    t = C;
  }
  for (var a = 0; a < g.length; a++)
    s = g[a], e.push(s), Rr(s, e);
}
function v(A) {
  var e = he, t = mA;
  try {
    br();
    const n = [];
    he = Pg, mA = n, oe = !1, Fr(t);
    var g = A?.();
    return $g(), (mA.length > 0 || n.length > 0) && v(), qA = 0, se = null, g;
  } finally {
    he = e, mA = t;
  }
}
async function on() {
  await Promise.resolve(), v();
}
function B(A) {
  var e = A.f, t = (e & tA) !== 0;
  if (t && e & zA) {
    var g = Br(
      /** @type {Derived} */
      A
    );
    return At(
      /** @type {Derived} */
      A
    ), g;
  }
  if (_ !== null) {
    IA !== null && IA.includes(A) && Sg();
    var n = _.deps;
    H === null && n !== null && n[z] === A ? z++ : H === null ? H = [A] : H.push(A), fA !== null && d !== null && d.f & q && !(d.f & rA) && fA.includes(A) && (sA(d, dA), Me(d));
  } else if (t && /** @type {Derived} */
  A.deps === null)
    for (var i = (
      /** @type {Derived} */
      A
    ), I = i.parent, C = i; I !== null; )
      if (I.f & tA) {
        var s = (
          /** @type {Derived} */
          I
        );
        C = s, I = s.parent;
      } else {
        var l = (
          /** @type {Effect} */
          I
        );
        l.deriveds?.includes(C) || (l.deriveds ??= []).push(C);
        break;
      }
  return t && (i = /** @type {Derived} */
  A, ce(i) && Cr(i)), A.v;
}
function WA(A) {
  const e = _;
  try {
    return _ = null, A();
  } finally {
    _ = e;
  }
}
const sn = ~(dA | Ce | q);
function sA(A, e) {
  A.f = A.f & sn | e;
}
function Gr(A, e = !1, t) {
  K = {
    p: K,
    c: null,
    e: null,
    m: !1,
    s: A,
    x: null,
    l: null
  };
}
function kr(A) {
  const e = K;
  if (e !== null) {
    A !== void 0 && (e.x = A);
    const I = e.e;
    if (I !== null) {
      var t = d, g = _;
      e.e = null;
      try {
        for (var n = 0; n < I.length; n++) {
          var i = I[n];
          oA(i.effect), wA(i.reaction), et(i.fn);
        }
      } finally {
        oA(t), wA(g);
      }
    }
    K = e.p, e.m = !0;
  }
  return A || /** @type {T} */
  {};
}
let Kt = !1;
function Yr() {
  Kt || (Kt = !0, document.addEventListener(
    "reset",
    (A) => {
      Promise.resolve().then(() => {
        if (!A.defaultPrevented)
          for (
            const e of
            /**@type {HTMLFormElement} */
            A.target.elements
          )
            e.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function pr(A) {
  var e = _, t = d;
  wA(null), oA(null);
  try {
    return A();
  } finally {
    wA(e), oA(t);
  }
}
function an(A, e, t, g = t) {
  A.addEventListener(e, () => pr(t));
  const n = A.__on_r;
  n ? A.__on_r = () => {
    n(), g(!0);
  } : A.__on_r = () => g(!0), Yr();
}
const Mr = /* @__PURE__ */ new Set(), ze = /* @__PURE__ */ new Set();
function ln(A, e, t, g) {
  function n(i) {
    if (g.capture || ie.call(e, i), !i.cancelBubble)
      return pr(() => t.call(this, i));
  }
  return A.startsWith("pointer") || A.startsWith("touch") || A === "wheel" ? gt(() => {
    e.addEventListener(A, n, g);
  }) : e.addEventListener(A, n, g), n;
}
function Bn(A, e, t, g, n) {
  var i = { capture: g, passive: n }, I = ln(A, e, t, i);
  (e === document.body || e === window || e === document) && jg(() => {
    e.removeEventListener(A, I, i);
  });
}
function Cn(A) {
  for (var e = 0; e < A.length; e++)
    Mr.add(A[e]);
  for (var t of ze)
    t(A);
}
function ie(A) {
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), g = A.type, n = A.composedPath?.() || [], i = (
    /** @type {null | Element} */
    n[0] || A.target
  ), I = 0, C = A.__root;
  if (C) {
    var s = n.indexOf(C);
    if (s !== -1 && (e === document || e === /** @type {any} */
    window)) {
      A.__root = e;
      return;
    }
    var l = n.indexOf(e);
    if (l === -1)
      return;
    s <= l && (I = s);
  }
  if (i = /** @type {Element} */
  n[I] || A.target, i !== e) {
    _e(A, "currentTarget", {
      configurable: !0,
      get() {
        return i || t;
      }
    });
    var a = _, c = d;
    wA(null), oA(null);
    try {
      for (var E, f = []; i !== null; ) {
        var m = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var R = i["__" + g];
          if (R !== void 0 && !/** @type {any} */
          i.disabled)
            if (Ot(R)) {
              var [x, ...$] = R;
              x.apply(i, [A, ...$]);
            } else
              R.call(i, A);
        } catch (Y) {
          E ? f.push(Y) : E = Y;
        }
        if (A.cancelBubble || m === e || m === null)
          break;
        i = m;
      }
      if (E) {
        for (let Y of f)
          queueMicrotask(() => {
            throw Y;
          });
        throw E;
      }
    } finally {
      A.__root = e, delete A.currentTarget, wA(a), oA(c);
    }
  }
}
function Jr(A) {
  var e = document.createElement("template");
  return e.innerHTML = A, e.content;
}
function uA(A, e) {
  var t = (
    /** @type {Effect} */
    d
  );
  t.nodes_start === null && (t.nodes_start = A, t.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function gA(A, e) {
  var t = (e & dg) !== 0, g = (e & hg) !== 0, n, i = !A.startsWith("<!>");
  return () => {
    if (p)
      return uA(k, null), k;
    n === void 0 && (n = Jr(i ? A : "<!>" + A), t || (n = /** @type {Node} */
    /* @__PURE__ */ bA(n)));
    var I = (
      /** @type {TemplateNode} */
      g ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    if (t) {
      var C = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ bA(I)
      ), s = (
        /** @type {TemplateNode} */
        I.lastChild
      );
      uA(C, s);
    } else
      uA(I, I);
    return I;
  };
}
function cn() {
  if (p)
    return uA(k, null), k;
  var A = document.createDocumentFragment(), e = document.createComment(""), t = ke();
  return A.append(e, t), uA(e, t), A;
}
function W(A, e) {
  if (p) {
    d.nodes_end = k, XA();
    return;
  }
  A !== null && A.before(
    /** @type {Node} */
    e
  );
}
const En = ["touchstart", "touchmove"];
function Qn(A) {
  return En.includes(A);
}
function Sr(A, e) {
  return Lr(A, e);
}
function fn(A, e) {
  qe(), e.intro = e.intro ?? !1;
  const t = e.target, g = p, n = k;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ bA(t)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== zt); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ yA(i);
    if (!i)
      throw ZA;
    HA(!0), hA(
      /** @type {Comment} */
      i
    ), XA();
    const I = Lr(A, { ...e, anchor: i });
    if (k === null || k.nodeType !== 8 || /** @type {Comment} */
    k.data !== $t)
      throw Ge(), ZA;
    return HA(!1), /**  @type {Exports} */
    I;
  } catch (I) {
    if (I === ZA)
      return e.recover === !1 && Yg(), qe(), Kg(t), HA(!1), Sr(A, e);
    throw I;
  } finally {
    HA(g), hA(n);
  }
}
const LA = /* @__PURE__ */ new Map();
function Lr(A, { target: e, anchor: t, props: g = {}, events: n, context: i, intro: I = !0 }) {
  qe();
  var C = /* @__PURE__ */ new Set(), s = (c) => {
    for (var E = 0; E < c.length; E++) {
      var f = c[E];
      if (!C.has(f)) {
        C.add(f);
        var m = Qn(f);
        e.addEventListener(f, ie, { passive: m });
        var R = LA.get(f);
        R === void 0 ? (document.addEventListener(f, ie, { passive: m }), LA.set(f, 1)) : LA.set(f, R + 1);
      }
    }
  };
  s(wg(Mr)), ze.add(s);
  var l = void 0, a = cr(() => {
    var c = t ?? e.appendChild(ke());
    return Ne(() => {
      if (i) {
        Gr({});
        var E = (
          /** @type {ComponentContext} */
          K
        );
        E.c = i;
      }
      n && (g.$$events = n), p && uA(
        /** @type {TemplateNode} */
        c,
        null
      ), l = A(c, g) || {}, p && (d.nodes_end = k), i && kr();
    }), () => {
      for (var E of C) {
        e.removeEventListener(E, ie);
        var f = (
          /** @type {number} */
          LA.get(E)
        );
        --f === 0 ? (document.removeEventListener(E, ie), LA.delete(E)) : LA.set(E, f);
      }
      ze.delete(s), Ve.delete(l), c !== t && c.parentNode?.removeChild(c);
    };
  });
  return Ve.set(l, a), l;
}
let Ve = /* @__PURE__ */ new WeakMap();
function un(A) {
  const e = Ve.get(A);
  e && e();
}
function QA(A, e, t = !1) {
  p && XA();
  var g = A, n = null, i = null, I = T, C = t ? Oe : 0, s = !1;
  const l = (c, E = !0) => {
    s = !0, a(E, c);
  }, a = (c, E) => {
    if (I === (I = c)) return;
    let f = !1;
    if (p) {
      const m = (
        /** @type {Comment} */
        g.data === Vt
      );
      !!I === m && (g = Hg(), hA(g), HA(!1), f = !0);
    }
    I ? (n ? xt(n) : E && (n = Ne(() => E(g))), i && Lt(i, () => {
      i = null;
    })) : (i ? xt(i) : E && (i = Ne(() => E(g))), n && Lt(n, () => {
      n = null;
    })), f && HA(!0);
  };
  rt(() => {
    s = !1, e(l), s || a(null, null);
  }, C), p && (g = k);
}
function xA(A, e, t, g, n) {
  var i = A, I = "", C;
  rt(() => {
    if (I === (I = e() ?? "")) {
      p && XA();
      return;
    }
    C !== void 0 && (RA(C), C = void 0), I !== "" && (C = Ne(() => {
      if (p) {
        k.data;
        for (var s = XA(), l = s; s !== null && (s.nodeType !== 8 || /** @type {Comment} */
        s.data !== ""); )
          l = s, s = /** @type {TemplateNode} */
          /* @__PURE__ */ yA(s);
        if (s === null)
          throw Ge(), ZA;
        uA(k, l), i = hA(s);
        return;
      }
      var a = I + "", c = Jr(a);
      uA(
        /** @type {TemplateNode} */
        /* @__PURE__ */ bA(c),
        /** @type {TemplateNode} */
        c.lastChild
      ), i.before(c);
    }));
  });
}
function dn(A, e, t, g, n) {
  p && XA();
  var i = e.$$slots?.[t], I = !1;
  i === !0 && (i = e.children, I = !0), i === void 0 || i(A, I ? () => g : g);
}
function hn(A, e) {
  gt(() => {
    var t = A.getRootNode(), g = (
      /** @type {ShadowRoot} */
      t.host ? (
        /** @type {ShadowRoot} */
        t
      ) : (
        /** @type {Document} */
        t.head ?? /** @type {Document} */
        t.ownerDocument.head
      )
    );
    if (!g.querySelector("#" + e.hash)) {
      const n = document.createElement("style");
      n.id = e.hash, n.textContent = e.code, g.appendChild(n);
    }
  });
}
function Zt(A) {
  if (p) {
    var e = !1, t = () => {
      if (!e) {
        if (e = !0, A.hasAttribute("value")) {
          var g = A.value;
          AA(A, "value", null), A.value = g;
        }
        if (A.hasAttribute("checked")) {
          var n = A.checked;
          AA(A, "checked", null), A.checked = n;
        }
      }
    };
    A.__on_r = t, Vg(t), Yr();
  }
}
function wn(A, e) {
  var t = A.__attributes ??= {};
  t.value === (t.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when its `0`
  A.value === e && (e !== 0 || A.nodeName !== "PROGRESS") || (A.value = e);
}
function AA(A, e, t, g) {
  var n = A.__attributes ??= {};
  p && (n[e] = A.getAttribute(e), e === "src" || e === "srcset" || e === "href" && A.nodeName === "LINK") || n[e] !== (n[e] = t) && (e === "style" && "__styles" in A && (A.__styles = {}), e === "loading" && (A[Ng] = t), t == null ? A.removeAttribute(e) : typeof t != "string" && yn(A).includes(e) ? A[e] = t : A.setAttribute(e, t));
}
var Tt = /* @__PURE__ */ new Map();
function yn(A) {
  var e = Tt.get(A.nodeName);
  if (e) return e;
  Tt.set(A.nodeName, e = []);
  for (var t, g = Ze(A), n = Element.prototype; n !== g; ) {
    t = yg(g);
    for (var i in t)
      t[i].set && e.push(i);
    g = Ze(g);
  }
  return e;
}
function vn(A, e, t) {
  if (t) {
    if (A.classList.contains(e)) return;
    A.classList.add(e);
  } else {
    if (!A.classList.contains(e)) return;
    A.classList.remove(e);
  }
}
function Dn(A, e, t = e) {
  an(A, "change", (g) => {
    var n = g ? A.defaultChecked : A.checked;
    t(n);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (p && A.defaultChecked !== A.checked || // If defaultChecked is set, then checked == defaultChecked
  WA(e) == null) && t(A.checked), tt(() => {
    var g = e();
    A.checked = !!g;
  });
}
function qt(A, e) {
  return A === e || A?.[Ie] === e;
}
function jt(A = {}, e, t, g) {
  return et(() => {
    var n, i;
    return tt(() => {
      n = i, i = [], WA(() => {
        A !== t(...i) && (e(A, ...i), n && qt(t(...n), A) && e(null, ...n));
      });
    }), () => {
      gt(() => {
        i && qt(t(...i), A) && e(null, ...i);
      });
    };
  }), A;
}
function xr(A) {
  K === null && vr(), je(() => {
    const e = WA(A);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function _n(A) {
  K === null && vr(), xr(() => () => WA(A));
}
let fe = !1;
function mn(A) {
  var e = fe;
  try {
    return fe = !1, [A(), fe];
  } finally {
    fe = e;
  }
}
function Nn(A) {
  for (var e = d, t = d; e !== null && !(e.f & (rA | Be)); )
    e = e.parent;
  try {
    return oA(e), A();
  } finally {
    oA(t);
  }
}
function F(A, e, t, g) {
  var n = (t & Eg) !== 0, i = !ir, I = (t & fg) !== 0, C = (t & ug) !== 0, s = !1, l;
  I ? [l, s] = mn(() => (
    /** @type {V} */
    A[e]
  )) : l = /** @type {V} */
  A[e];
  var a = Ie in A || rr in A, c = NA(A, e)?.set ?? (a && I && e in A ? (S) => A[e] = S : void 0), E = (
    /** @type {V} */
    g
  ), f = !0, m = !1, R = () => (m = !0, f && (f = !1, C ? E = WA(
    /** @type {() => V} */
    g
  ) : E = /** @type {V} */
  g), E);
  l === void 0 && g !== void 0 && (c && i && pg(), l = R(), c && c(l));
  var x;
  if (x = () => {
    var S = (
      /** @type {V} */
      A[e]
    );
    return S === void 0 ? R() : (f = !0, m = !1, S);
  }, !(t & Qg))
    return x;
  if (c) {
    var $ = A.$$legacy;
    return function(S, L) {
      return arguments.length > 0 ? ((!L || $ || s) && c(L ? x() : S), S) : x();
    };
  }
  var Y = !1, vA = !1, lA = /* @__PURE__ */ Ir(l), U = Nn(
    () => /* @__PURE__ */ ne(() => {
      var S = x(), L = B(lA);
      return Y ? (Y = !1, vA = !0, L) : (vA = !1, lA.v = S);
    })
  );
  return n || (U.equals = nr), function(S, L) {
    if (arguments.length > 0) {
      const P = L ? B(U) : I ? eA(S) : S;
      return U.equals(P) || (Y = !0, G(lA, P), m && E !== void 0 && (E = P), WA(() => B(U))), S;
    }
    return B(U);
  };
}
function bn(A) {
  return new Fn(A);
}
class Fn {
  /** @type {any} */
  #e;
  /** @type {Record<string, any>} */
  #A;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    var t = /* @__PURE__ */ new Map(), g = (i, I) => {
      var C = /* @__PURE__ */ Ir(I);
      return t.set(i, C), C;
    };
    const n = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(i, I) {
          return B(t.get(I) ?? g(I, Reflect.get(i, I)));
        },
        has(i, I) {
          return I === rr ? !0 : (B(t.get(I) ?? g(I, Reflect.get(i, I))), Reflect.has(i, I));
        },
        set(i, I, C) {
          return G(t.get(I) ?? g(I, C), C), Reflect.set(i, I, C);
        }
      }
    );
    this.#A = (e.hydrate ? fn : Sr)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: n,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && v(), this.#e = n.$$events;
    for (const i of Object.keys(this.#A))
      i === "$set" || i === "$destroy" || i === "$on" || _e(this, i, {
        get() {
          return this.#A[i];
        },
        /** @param {any} value */
        set(I) {
          this.#A[i] = I;
        },
        enumerable: !0
      });
    this.#A.$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(n, i);
    }, this.#A.$destroy = () => {
      un(this.#A);
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    this.#A.$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, t) {
    this.#e[e] = this.#e[e] || [];
    const g = (...n) => t.call(this, ...n);
    return this.#e[e].push(g), () => {
      this.#e[e] = this.#e[e].filter(
        /** @param {any} fn */
        (n) => n !== g
      );
    };
  }
  $destroy() {
    this.#A.$destroy();
  }
}
let Ur;
typeof HTMLElement == "function" && (Ur = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(A, e, t) {
    super(), this.$$ctor = A, this.$$s = e, t && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(A, e, t) {
    if (this.$$l[A] = this.$$l[A] || [], this.$$l[A].push(e), this.$$c) {
      const g = this.$$c.$on(A, e);
      this.$$l_u.set(e, g);
    }
    super.addEventListener(A, e, t);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(A, e, t) {
    if (super.removeEventListener(A, e, t), this.$$c) {
      const g = this.$$l_u.get(e);
      g && (g(), this.$$l_u.delete(e));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let A = function(g) {
        return (n) => {
          const i = document.createElement("slot");
          g !== "default" && (i.name = g), W(n, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, t = Rn(this);
      for (const g of this.$$s)
        g in t && (g === "default" && !this.$$d.children ? (this.$$d.children = A(g), e.default = !0) : e[g] = A(g));
      for (const g of this.attributes) {
        const n = this.$$g_p(g.name);
        n in this.$$d || (this.$$d[n] = we(n, g.value, this.$$p_d, "toProp"));
      }
      for (const g in this.$$p_d)
        !(g in this.$$d) && this[g] !== void 0 && (this.$$d[g] = this[g], delete this[g]);
      this.$$c = bn({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = cr(() => {
        tt(() => {
          this.$$r = !0;
          for (const g of De(this.$$c)) {
            if (!this.$$p_d[g]?.reflect) continue;
            this.$$d[g] = this.$$c[g];
            const n = we(
              g,
              this.$$d[g],
              this.$$p_d,
              "toAttribute"
            );
            n == null ? this.removeAttribute(this.$$p_d[g].attribute || g) : this.setAttribute(this.$$p_d[g].attribute || g, n);
          }
          this.$$r = !1;
        });
      });
      for (const g in this.$$l)
        for (const n of this.$$l[g]) {
          const i = this.$$c.$on(g, n);
          this.$$l_u.set(n, i);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(A, e, t) {
    this.$$r || (A = this.$$g_p(A), this.$$d[A] = we(A, t, this.$$p_d, "toProp"), this.$$c?.$set({ [A]: this.$$d[A] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(A) {
    return De(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === A || !this.$$p_d[e].attribute && e.toLowerCase() === A
    ) || A;
  }
});
function we(A, e, t, g) {
  const n = t[A]?.type;
  if (e = n === "Boolean" && typeof e != "boolean" ? e != null : e, !g || !t[A])
    return e;
  if (g === "toAttribute")
    switch (n) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (n) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function Rn(A) {
  const e = {};
  return A.childNodes.forEach((t) => {
    e[
      /** @type {Element} node */
      t.slot || "default"
    ] = !0;
  }), e;
}
function Gn(A, e, t, g, n, i) {
  let I = class extends Ur {
    constructor() {
      super(A, t, n), this.$$p_d = e;
    }
    static get observedAttributes() {
      return De(e).map(
        (C) => (e[C].attribute || C).toLowerCase()
      );
    }
  };
  return De(e).forEach((C) => {
    _e(I.prototype, C, {
      get() {
        return this.$$c && C in this.$$c ? this.$$c[C] : this.$$d[C];
      },
      set(s) {
        s = we(C, s, e), this.$$d[C] = s;
        var l = this.$$c;
        if (l) {
          var a = NA(l, C)?.get;
          a ? l[C] = s : l.$set({ [C]: s });
        }
      }
    });
  }), g.forEach((C) => {
    _e(I.prototype, C, {
      get() {
        return this.$$c?.[C];
      }
    });
  }), A.element = /** @type {any} */
  I, I;
}
const Hr = new TextEncoder();
function kn(A) {
  return [...new Uint8Array(A)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function Yn(A, e = "SHA-256", t = 1e5) {
  const g = Date.now().toString(16);
  A || (A = Math.round(Math.random() * t));
  const n = await Kr(g, A, e);
  return {
    algorithm: e,
    challenge: n,
    salt: g,
    signature: ""
  };
}
async function Kr(A, e, t) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return kn(
    await crypto.subtle.digest(
      t.toUpperCase(),
      Hr.encode(A + e)
    )
  );
}
function pn(A, e, t = "SHA-256", g = 1e6, n = 0) {
  const i = new AbortController(), I = Date.now();
  return {
    promise: (async () => {
      for (let s = n; s <= g; s += 1) {
        if (i.signal.aborted)
          return null;
        if (await Kr(e, s, t) === A)
          return {
            number: s,
            took: Date.now() - I
          };
      }
      return null;
    })(),
    controller: i
  };
}
function Mn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Jn(A) {
  const e = atob(A), t = new Uint8Array(e.length);
  for (let g = 0; g < e.length; g++)
    t[g] = e.charCodeAt(g);
  return t;
}
function Sn(A, e = 12) {
  const t = new Uint8Array(e);
  for (let g = 0; g < e; g++)
    t[g] = A % 256, A = Math.floor(A / 256);
  return t;
}
async function Ln(A, e = "", t = 1e6, g = 0) {
  const n = "AES-GCM", i = new AbortController(), I = Date.now(), C = async () => {
    for (let a = g; a <= t; a += 1) {
      if (i.signal.aborted || !s || !l)
        return null;
      try {
        const c = await crypto.subtle.decrypt(
          {
            name: n,
            iv: Sn(a)
          },
          s,
          l
        );
        if (c)
          return {
            clearText: new TextDecoder().decode(c),
            took: Date.now() - I
          };
      } catch {
      }
    }
    return null;
  };
  let s = null, l = null;
  try {
    l = Jn(A);
    const a = await crypto.subtle.digest(
      "SHA-256",
      Hr.encode(e)
    );
    s = await crypto.subtle.importKey(
      "raw",
      a,
      n,
      !1,
      ["decrypt"]
    );
  } catch {
    return {
      promise: Promise.reject(),
      controller: i
    };
  }
  return {
    promise: C(),
    controller: i
  };
}
var w = /* @__PURE__ */ ((A) => (A.ERROR = "error", A.VERIFIED = "verified", A.VERIFYING = "verifying", A.UNVERIFIED = "unverified", A.EXPIRED = "expired", A))(w || {});
const xn = "data:application/wasm;base64,AGFzbQEAAAABnAEYYAJ/fwF/YAJ/fwBgA39/fwF/YAF/AGADf39/AGAFf39/f38AYAR/f39/AX9gAAF/YAR/f39/AGAAAGABfwF/YAV/f39/fwF/YAJ/fwFvYAFvAGAAAW9gAn9vAGAGf39/f39/AGAGf39/f39/AX9gBX9/fn9/AGAEf35/fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwAC5wIHFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMVX193YmluZGdlbl9zdHJpbmdfbmV3AAwWLi9kZXRlY3Rpb25fd2FzbV9iZy5qcxpfX3diZ19sb2dfYzIyMjgxOWE0MWUwNjNkMwANFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMaX193YmdfbmV3XzhhNmYyMzhhNmVjZTg2ZWEADhYuL2RldGVjdGlvbl93YXNtX2JnLmpzHF9fd2JnX3N0YWNrXzBlZDc1ZDY4NTc1YjBmM2MADxYuL2RldGVjdGlvbl93YXNtX2JnLmpzHF9fd2JnX2Vycm9yXzc1MzRiOGU5YTM2ZjFhYjQAARYuL2RldGVjdGlvbl93YXNtX2JnLmpzEF9fd2JpbmRnZW5fdGhyb3cAARYuL2RldGVjdGlvbl93YXNtX2JnLmpzH19fd2JpbmRnZW5faW5pdF9leHRlcm5yZWZfdGFibGUACQNcWwoCAwIBAQABAAABAAEHBAUEAQcFAQEIBAAFBBAEAQEBBAICAQQACgMGAwYDAwERBQsSFBYDCAIDBAADAAYCBAIAAAcAAQEAAQAABAAAAwABAwkAAQAAAQIDAQEECQJwATAwbwCAAQUDAQARBgkBfwFBgIDAAAsHuwEKBm1lbW9yeQIAE19fd2JnX2RldGVjdG9yX2ZyZWUAJgxkZXRlY3Rvcl9uZXcASRRkZXRlY3Rvcl9pc19kZXRlY3RlZAAtDmRldGVjdG9yX2NoZWNrADIPX193YmluZGdlbl9mcmVlAEURX193YmluZGdlbl9tYWxsb2MALBJfX3diaW5kZ2VuX3JlYWxsb2MAMRNfX3diaW5kZ2VuX2V4cG9ydF8zAQEQX193YmluZGdlbl9zdGFydAAGCTUBAEEBCy9IYWFhPTw2Njc3NiI4OTo1VEQSU1VBTVIkPigQWUtMTypOWjsfExhgPikPW1xHUAwBBQqv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AEHcmsAAQdSawAA2AgBB8JrAAEHkmsAANgIAQeSawABB3JrAADYCAEH4msAAQeyawAA2AgBB7JrAAEHkmsAANgIAQYCbwABB9JrAADYCAEH0msAAQeyawAA2AgBBiJvAAEH8msAANgIAQfyawABB9JrAADYCAEGQm8AAQYSbwAA2AgBBhJvAAEH8msAANgIAQZibwABBjJvAADYCAEGMm8AAQYSbwAA2AgBBoJvAAEGUm8AANgIAQZSbwABBjJvAADYCAEGom8AAQZybwAA2AgBBnJvAAEGUm8AANgIAQbCbwABBpJvAADYCAEGkm8AAQZybwAA2AgBBuJvAAEGsm8AANgIAQaybwABBpJvAADYCAEHQm8AAIAFBD2pBeHEiAEEIayICNgIAQbSbwABBrJvAADYCAEHIm8AAIARBKGsiAyABIABrakEIaiIANgIAIAIgAEEBcjYCBCABIANqQSg2AgRB3JvAAEGAgIABNgIADAgLIAIgA0kgASACTXINACAAKAIMIgNBAXENACADQQF2IAZGDQMLQeCbwABB4JvAACgCACIAIAEgACABSRs2AgAgASAEaiEDQaSZwAAhAAJAAkADQCADIAAoAgAiB0cEQCAAKAIIIgANAQwCCwsgACgCDCIDQQFxDQAgA0EBdiAGRg0BC0GkmcAAIQADQAJAIAIgACgCACIDTwRAIAIgAyAAKAIEaiIHSQ0BCyAAKAIIIQAMAQsLQdCbwAAgAUEPakF4cSIAQQhrIgM2AgBByJvAACAEQShrIgkgASAAa2pBCGoiADYCACADIABBAXI2AgQgASAJakEoNgIEQdybwABBgICAATYCACACIAdBIGtBeHFBCGsiACAAIAJBEGpJGyIDQRs2AgRBpJnAACkCACEKIANBEGpBrJnAACkCADcCACADIAo3AghBsJnAACAGNgIAQaiZwAAgBDYCAEGkmcAAIAE2AgBBrJnAACADQQhqNgIAIANBHGohAANAIABBBzYCACAAQQRqIgAgB0kNAAsgAiADRg0HIAMgAygCBEF+cTYCBCACIAMgAmsiAEEBcjYCBCADIAA2AgAgAEGAAk8EQCACIAAQEQwICyAAQfgBcUG0mcAAaiEBAn9BvJvAACgCACIDQQEgAEEDdnQiAHFFBEBBvJvAACAAIANyNgIAIAEMAQsgASgCCAshACABIAI2AgggACACNgIMIAIgATYCDCACIAA2AggMBwsgACABNgIAIAAgACgCBCAEajYCBCABQQ9qQXhxQQhrIgIgBUEDcjYCBCAHQQ9qQXhxQQhrIgQgAiAFaiIAayEFIARB0JvAACgCAEYNAyAEQcybwAAoAgBGDQQgBCgCBCIBQQNxQQFGBEAgBCABQXhxIgEQDiABIAVqIQUgASAEaiIEKAIEIQELIAQgAUF+cTYCBCAAIAVBAXI2AgQgACAFaiAFNgIAIAVBgAJPBEAgACAFEBEMBgsgBUH4AXFBtJnAAGohAQJ/QbybwAAoAgAiA0EBIAVBA3Z0IgRxRQRAQbybwAAgAyAEcjYCACABDAELIAEoAggLIQMgASAANgIIIAMgADYCDCAAIAE2AgwgACADNgIIDAULQcibwAAgACAFayIBNgIAQdCbwABB0JvAACgCACIAIAVqIgI2AgAgAiABQQFyNgIEIAAgBUEDcjYCBCAAQQhqDAgLQcybwAAoAgAhAAJAIAEgBWsiAkEPTQRAQcybwABBADYCAEHEm8AAQQA2AgAgACABQQNyNgIEIAAgAWoiASABKAIEQQFyNgIEDAELQcSbwAAgAjYCAEHMm8AAIAAgBWoiAzYCACADIAJBAXI2AgQgACABaiACNgIAIAAgBUEDcjYCBAsgAEEIagwHCyAAIAQgB2o2AgRB0JvAAEHQm8AAKAIAIgBBD2pBeHEiAUEIayICNgIAQcibwABByJvAACgCACAEaiIDIAAgAWtqQQhqIgE2AgAgAiABQQFyNgIEIAAgA2pBKDYCBEHcm8AAQYCAgAE2AgAMAwtB0JvAACAANgIAQcibwABByJvAACgCACAFaiIBNgIAIAAgAUEBcjYCBAwBC0HMm8AAIAA2AgBBxJvAAEHEm8AAKAIAIAVqIgE2AgAgACABQQFyNgIEIAAgAWogATYCAAsgAkEIagwDC0EAQcibwAAoAgAiACAFTQ0CGkHIm8AAIAAgBWsiATYCAEHQm8AAQdCbwAAoAgAiACAFaiICNgIAIAIgAUEBcjYCBCAAIAVBA3I2AgQgAEEIagwCC0HAm8AAQcCbwAAoAgBBfiACKAIcd3E2AgALAkAgBEEQTwRAIAIgBUEDcjYCBCACIAVqIgAgBEEBcjYCBCAAIARqIAQ2AgAgBEGAAk8EQCAAIAQQEQwCCyAEQfgBcUG0mcAAaiEBAn9BvJvAACgCACIDQQEgBEEDdnQiBHFFBEBBvJvAACADIARyNgIAIAEMAQsgASgCCAshAyABIAA2AgggAyAANgIMIAAgATYCDCAAIAM2AggMAQsgAiAEIAVqIgBBA3I2AgQgACACaiIAIAAoAgRBAXI2AgQLIAJBCGoLIAhBEGokAAv5CwELfwJAIAAoAgAiCCAAKAIIIgNyBEACQCADQQFxRQ0AIAEgAmohBgJAIAAoAgwiB0UEQCABIQMMAQsgASEDA0AgAyIEIAZGDQICfyADQQFqIAMsAAAiA0EATg0AGiAEQQJqIANBYEkNABogBEEDaiADQXBJDQAaIARBBGoLIgMgBGsgBWohBSAHQQFrIgcNAAsLIAMgBkYNACADLAAAGiAFIAICfwJAIAVFDQAgAiAFTQRAIAIgBUYNAUEADAILIAEgBWosAABBQE4NAEEADAELIAELIgMbIQIgAyABIAMbIQELIAhFDQEgACgCBCEMAkAgAkEQTwRAAn9BACEGQQAhBQJAAkAgAiABQQNqQXxxIgMgAWsiCkkNACACIAprIgdBBEkNACAHQQNxIQlBACEEAkAgASADRiILDQACQCABIANrIghBfEsEQEEAIQMMAQtBACEDA0AgBCABIANqIgYsAABBv39KaiAGQQFqLAAAQb9/SmogBkECaiwAAEG/f0pqIAZBA2osAABBv39KaiEEIANBBGoiAw0ACwsgCw0AIAEgA2ohBgNAIAQgBiwAAEG/f0pqIQQgBkEBaiEGIAhBAWoiCA0ACwsgASAKaiEDAkAgCUUNACADIAdBfHFqIgYsAABBv39KIQUgCUEBRg0AIAUgBiwAAUG/f0pqIQUgCUECRg0AIAUgBiwAAkG/f0pqIQULIAdBAnYhCCAEIAVqIQUDQCADIQcgCEUNAkHAASAIIAhBwAFPGyIJQQNxIQogCUECdCELQQAhBiAIQQRPBEAgAyALQfAHcWohDSADIQQDQCAEKAIAIgNBf3NBB3YgA0EGdnJBgYKECHEgBmogBEEEaigCACIDQX9zQQd2IANBBnZyQYGChAhxaiAEQQhqKAIAIgNBf3NBB3YgA0EGdnJBgYKECHFqIARBDGooAgAiA0F/c0EHdiADQQZ2ckGBgoQIcWohBiAEQRBqIgQgDUcNAAsLIAggCWshCCAHIAtqIQMgBkEIdkH/gfwHcSAGQf+B/AdxakGBgARsQRB2IAVqIQUgCkUNAAsCfyAHIAlB/AFxQQJ0aiIDKAIAIgRBf3NBB3YgBEEGdnJBgYKECHEiBCAKQQFGDQAaIAQgAygCBCIHQX9zQQd2IAdBBnZyQYGChAhxaiIEIApBAkYNABogAygCCCIDQX9zQQd2IANBBnZyQYGChAhxIARqCyIDQQh2Qf+BHHEgA0H/gfwHcWpBgYAEbEEQdiAFagwCC0EAIAJFDQEaIAJBA3EhAyACQQRPBEAgAkF8cSEHA0AgBSABIAZqIgQsAABBv39KaiAEQQFqLAAAQb9/SmogBEECaiwAAEG/f0pqIARBA2osAABBv39KaiEFIAcgBkEEaiIGRw0ACwsgA0UNACABIAZqIQQDQCAFIAQsAABBv39KaiEFIARBAWohBCADQQFrIgMNAAsLIAULIQQMAQsgAkUEQEEAIQQMAQsgAkEDcSEHAkAgAkEESQRAQQAhBEEAIQUMAQsgAkEMcSEGQQAhBEEAIQUDQCAEIAEgBWoiAywAAEG/f0pqIANBAWosAABBv39KaiADQQJqLAAAQb9/SmogA0EDaiwAAEG/f0pqIQQgBiAFQQRqIgVHDQALCyAHRQ0AIAEgBWohAwNAIAQgAywAAEG/f0pqIQQgA0EBaiEDIAdBAWsiBw0ACwsCQCAEIAxJBEAgDCAEayEHAkACQAJAIAAtABgiA0EAIANBA0cbIgRBAWsOAgABAgsgByEEQQAhBwwBCyAHQQF2IQQgB0EBakEBdiEHCyAEQQFqIQQgACgCECEFIAAoAiAhAyAAKAIcIQADQCAEQQFrIgRFDQIgACAFIAMoAhARAABFDQALQQEPCwwCCyAAIAEgAiADKAIMEQIABEBBAQ8LQQAhBANAIAQgB0YEQEEADwsgBEEBaiEEIAAgBSADKAIQEQAARQ0ACyAEQQFrIAdJDwsgACgCHCABIAIgACgCICgCDBECAA8LIAAoAhwgASACIAAoAiAoAgwRAgAL/gUBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQCADQQFxDQAgA0ECcUUNASABKAIAIgMgAGohACABIANrIgFBzJvAACgCAEYEQCACKAIEQQNxQQNHDQFBxJvAACAANgIAIAIgAigCBEF+cTYCBCABIABBAXI2AgQgAiAANgIADwsgASADEA4LAkACQAJAAkACQCACKAIEIgNBAnFFBEAgAkHQm8AAKAIARg0CIAJBzJvAACgCAEYNAyACIANBeHEiAhAOIAEgACACaiIAQQFyNgIEIAAgAWogADYCACABQcybwAAoAgBHDQFBxJvAACAANgIADwsgAiADQX5xNgIEIAEgAEEBcjYCBCAAIAFqIAA2AgALIABBgAJJDQIgASAAEBFBACEBQeSbwABB5JvAACgCAEEBayIANgIAIAANBEGsmcAAKAIAIgAEQANAIAFBAWohASAAKAIIIgANAAsLQeSbwABB/x8gASABQf8fTRs2AgAPC0HQm8AAIAE2AgBByJvAAEHIm8AAKAIAIABqIgA2AgAgASAAQQFyNgIEQcybwAAoAgAgAUYEQEHEm8AAQQA2AgBBzJvAAEEANgIACyAAQdybwAAoAgAiA00NA0HQm8AAKAIAIgJFDQNBACEAQcibwAAoAgAiBEEpSQ0CQaSZwAAhAQNAIAIgASgCACIFTwRAIAIgBSABKAIEakkNBAsgASgCCCEBDAALAAtBzJvAACABNgIAQcSbwABBxJvAACgCACAAaiIANgIAIAEgAEEBcjYCBCAAIAFqIAA2AgAPCyAAQfgBcUG0mcAAaiECAn9BvJvAACgCACIDQQEgAEEDdnQiAHFFBEBBvJvAACAAIANyNgIAIAIMAQsgAigCCAshACACIAE2AgggACABNgIMIAEgAjYCDCABIAA2AggPC0GsmcAAKAIAIgEEQANAIABBAWohACABKAIIIgENAAsLQeSbwABB/x8gACAAQf8fTRs2AgAgAyAETw0AQdybwABBfzYCAAsL/QQBCn8jAEEwayIDJAAgAyABNgIsIAMgADYCKCADQQM6ACQgA0IgNwIcIANBADYCFCADQQA2AgwCfwJAIAIoAhAiCkUEQCACKAIMIgBFDQEgAigCCCIBIABBA3RqIQQgAEEBa0H/////AXFBAWohByACKAIAIQADQAJAIABBBGooAgAiBUUNACADKAIoIAAoAgAgBSADKAIsKAIMEQIARQ0AQQEMBAtBASABKAIAIANBDGogAUEEaigCABEAAA0DGiAAQQhqIQAgAUEIaiIBIARHDQALDAELIAIoAhQiAEUNACAAQQV0IQsgAEEBa0H///8/cUEBaiEHIAIoAgghBSACKAIA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AgAgAiAANgIMIAENACACQQxqEDMLIAJBEGokAA8LEFgAC98CAgh/AX4gAiABayIFIAAoAgAgACgCCCICa0sEQCMAQRBrIgYkACAGQQhqIQkjAEEgayIDJAACQCACIAVqIgcgAkkNAEEIIAcgACgCACIIQQF0IgIgAiAHSRsiAiACQQhNGyIHrSILQiCIpw0AIAunIgpB/////wdLDQACfyAIRQRAIANBGGohBEEADAELIANBHGohBCADQQE2AhggAyAAKAIENgIUIAgLIQggBCAINgIAIANBCGpBASAKIANBFGoQHSADKAIIRQRAIAMoAgwhBCAAIAc2AgAgACAENgIEQYGAgIB4IQQMAQsgAygCECECIAMoAgwhBAsgCSACNgIEIAkgBDYCACADQSBqJAAgBigCCCICQYGAgIB4RwRAIAIgBigCDEGcisAAED8ACyAGQRBqJAAgACgCCCECCyAFBEAgACgCBCACaiABIAX8CgAACyAAIAAoAgggBWo2AggLRwEBfyAAKAIAIAAoAggiA2sgAkkEQCAAIAMgAhAVIAAoAgghAwsgAgRAIAAoAgQgA2ogASAC/AoAAAsgACACIANqNgIIQQALRwEBfyAAKAIAIAAoAggiA2sgAkkEQCAAIAMgAhAXIAAoAgghAwsgAgRAIAAoAgQgA2ogASAC/AoAAAsgACACIANqNgIIQQALTQECf0GBmMAALQAAGiABKAIEIQIgASgCACEDQQhBBBBKIgFFBEBBBEEIEF0ACyABIAI2AgQgASADNgIAIABB4JLAADYCBCAAIAE2AgALQQEBfyMAQSBrIgMkACADQQA2AhAgA0EBNgIEIANCBDcCCCADIAE2AhwgAyAANgIYIAMgA0EYajYCACADIAIQNAALLwACQCABRSAAIAEQQEVyDQAgAARAQYGYwAAtAAAaIAAgARBKIgFFDQELIAEPCwALmwIBBX8jAEEQayIDJAAgA0EEaiIFIAAQJSMAQUBqIgAkACAAQRRqIgRBFRAbIAAoAhghAgJAIAAoAhRBAUcEQCAAKAIcIgFB6ITAACkAADcAACABQQ1qQfWEwAApAAA3AAAgAUEIakHwhMAAKQAANwAAIABBATYCGCAAQeCEwAA2AhQgAEIBNwIgIABBFTYCPCAAIAE2AjggACACNgI0IABBATYCMCAAIABBLGo2AhwgACAAQTRqIgE2AiwgAEEIaiICIAQQDCABEFcgACgCDCAAKAIQEEIhASACEFcgACABNgIUIAQQXyABQYQBTwRAIAEQLgsgAEFAayQADAELIAIgACgCHEH8g8AAED8ACyAFEDAgA0EQaiQAQQELpQICCH8BfiMAQRBrIgMkACADIAA2AgwgAEGEAU8EQCAA0G8mASMAQTBrIgAkACAAQRBqIgcQFCIBQRBqIgQoAgA2AgAgAEEIaiIIIAFBCGoiBSkCADcDACAEQQA2AgAgBUIANwIAIAEpAgAhCSABQoCAgIDAADcCACAAIAk3AwACQCADQQxqKAIAIgIgACgCECIGTwRAIAIgBmsiAiAAKAIISQ0BCwALIAAoAgwhBiAAIAI2AgwgACgCBCACQQJ0aiAGNgIAIABBKGogBCgCADYCACAAQSBqIAUpAgA3AwAgASkCACEJIAEgACkDADcCACAFIAgpAwA3AgAgBCAHKAIANgIAIAAgCTcDGCAAQRhqQQRBBBAhIABBMGokAAsgA0EQaiQACzgAAkAgAkGAgMQARg0AIAAgAiABKAIQEQAARQ0AQQEPCyADRQRAQQAPCyAAIANBACABKAIMEQIACzcBAX8gACgCBCIBIAEoAgBBAWs2AgAgACgCCCIBIAEoAgBBAWsiATYCACABRQRAIABBCGoQMwsLJQACQCADRSABIAMQQEVyRQRAIAAgASADIAIQQyIADQELAAsgAAuJAgEFfyMAQRBrIgMkACADQQRqIgUgABAlIwBBQGoiACQAIABBFGoiBEEPEBsgACgCGCEBAkAgACgCFEEBRwRAIAAoAhwiAkH9hMAAKQAANwAAIAJBB2pBhIXAACkAADcAACAAQQE2AhggAEHghMAANgIUIABCATcCICAAQQ82AjwgACACNgI4IAAgATYCNCAAQQE2AjAgACAAQSxqNgIcIAAgAEE0aiIBNgIsIABBCGoiAiAEEAwgARBXIAAoAgwgACgCEBBCIQEgAhBXIAAgATYCFCAEEF8gAUGEAU8EQCABEC4LIABBQGskAAwBCyABIAAoAhxB/IPAABA/AAsgBRAwIANBEGokAAsuAQF/AkAgACgCACIAQX9GDQAgACAAKAIEQQFrIgE2AgQgAQ0AIABBDEEEEFELC/oBAgJ/AX4jAEEQayICJAAgAkEBOwEMIAIgATYCCCACIAA2AgQjAEEQayIBJAAgAkEEaiIAKQIAIQQgASAANgIMIAEgBDcCBCMAQRBrIgAkACABQQRqIgEoAgAiAigCDCEDAkACQAJAAkAgAigCBA4CAAECCyADDQFBASECQQAhAwwCCyADDQAgAigCACICKAIEIQMgAigCACECDAELIABBgICAgHg2AgAgACABNgIMIABBjJPAACABKAIEIAEoAggiAC0ACCAALQAJEBoACyAAIAM2AgQgACACNgIAIABB8JLAACABKAIEIAEoAggiAC0ACCAALQAJEBoACyQAIABFBEBBiIbAAEEyEFYACyAAIAIgAyAEIAUgASgCEBELAAsiACAARQRAQYiGwABBMhBWAAsgACACIAMgBCABKAIQEQgACyIAIABFBEBBiIbAAEEyEFYACyAAIAIgAyAEIAEoAhARBgALIgAgAEUEQEGIhsAAQTIQVgALIAAgAiADIAQgASgCEBETAAsiACAARQRAQYiGwABBMhBWAAsgACACIAMgBCABKAIQERUACyIAIABFBEBBiIbAAEEyEFYACyAAIAIgAyAEIAEoAhARFwALJwEBfyAAKAIAIgFBgICAgHhyQYCAgIB4RwRAIAAoAgQgAUEBEFELCyAAIABFBEBBiIbAAEEyEFYACyAAIAIgAyABKAIQEQQACx4AIABFBEBBiIbAAEEyEFYACyAAIAIgASgCEBEAAAsZAQF/IAAoAgAiAQRAIAAoAgQgAUEBEFELC0EAIABFBEAjAEEgayIAJAAgAEEANgIYIABBATYCDCAAQdyTwAA2AgggAEIENwIQIABBCGogAhA0AAsgACABEF0ACxUAIAFpQQFGIABBgICAgHggAWtNcQscACAAQQA2AhAgAEIANwIIIABCgICAgMAANwIACxYBAW8gACABEAAhAhAZIgAgAiYBIAAL6QYBBn8CfwJAAkACQAJAAkAgAEEEayIFKAIAIgZBeHEiBEEEQQggBkEDcSIHGyABak8EQCAHQQAgAUEnaiIJIARJGw0BAkACQCACQQlPBEAgAiADEA0iCA0BQQAMCQsgA0HM/3tLDQFBECADQQtqQXhxIANBC0kbIQECQCAHRQRAIAFBgAJJIAQgAUEEcklyIAQgAWtBgYAIT3INAQwJCyAAQQhrIgIgBGohBwJAAkACQAJAIAEgBEsEQCAHQdCbwAAoAgBG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Yy9pbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zi9jb25zb2xlX2Vycm9yX3BhbmljX2hvb2stMC4xLjcvc3JjL2xpYi5ycwAAABAAawAAAJUAAAAOAEGEgcAAC8kGAQAAAAIAAAADAAAABAAAAE9uY2UgaW5zdGFuY2UgaGFzIHByZXZpb3VzbHkgYmVlbiBwb2lzb25lZAAAlAAQACoAAABvbmUtdGltZSBpbml0aWFsaXphdGlvbiBtYXkgbm90IGJlIHBlcmZvcm1lZCByZWN1cnNpdmVsecgAEAA4AAAAL1VzZXJzL2VyZnVyLy5ydXN0dXAvdG9vbGNoYWlucy9uaWdodGx5LWFhcmNoNjQtYXBwbGUtZGFyd2luL2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvc3RkL3NyYy9zeW5jL3BvaXNvbi9vbmNlLnJzAAAACAEQAHUAAACbAAAAMgAAAC9Vc2Vycy9lcmZ1ci8ucnVzdHVwL3Rvb2xjaGFpbnMvbmlnaHRseS1hYXJjaDY0LWFwcGxlLWRhcndpbi9saWIvcnVzdGxpYi9zcmMvcnVzdC9saWJyYXJ5L2FsbG9jL3NyYy9zbGljZS5yc5ABEABsAAAAogAAABkAAABhdHRlbXB0ZWQgdG8gdGFrZSBvd25lcnNoaXAgb2YgUnVzdCB2YWx1ZSB3aGlsZSBpdCB3YXMgYm9ycm93ZWREZXRlY3Rvcjo6bmV3W3dhc21dIABYAhAABwAAAERldGVjdG9yOjppc19kZXRlY3RlZERldGVjdG9yOjpjaGVjay9Vc2Vycy9lcmZ1ci8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmL3dhc20tYmluZGdlbi0wLjIuMTAwL3NyYy9jb252ZXJ0L3NsaWNlcy5yc4wCEABsAAAAJAEAAA4AAABjbG9zdXJlIGludm9rZWQgcmVjdXJzaXZlbHkgb3IgYWZ0ZXIgYmVpbmcgZHJvcHBlZC9Vc2Vycy9lcmZ1ci8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmL3dhc20tYmluZGdlbi0wLjIuMTAwL3NyYy9jb252ZXJ0L3NsaWNlcy5ycwAAOgMQAGwAAAAkAQAADgAAABEAAAAMAAAABAAAABIAAAATAAAAFABB2IfAAAvhDAEAAAAVAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseS9Vc2Vycy9lcmZ1ci8ucnVzdHVwL3Rvb2xjaGFpbnMvbmlnaHRseS1hYXJjaDY0LWFwcGxlLWRhcndpbi9saWIvcnVzdGxpYi9zcmMvcnVzdC9saWJyYXJ5L2FsbG9jL3NyYy9zdHJpbmcucnMXBBAAbQAAAOEKAAAOAAAARXJyb3IAAAAXBBAAbQAAAI0FAAAbAAAAL1VzZXJzL2VyZnVyLy5ydXN0dXAvdG9vbGNoYWlucy9uaWdodGx5LWFhcmNoNjQtYXBwbGUtZGFyd2luL2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvYWxsb2Mvc3JjL3Jhd192ZWMucnMAAKwEEABuAAAAKgIAABEAAAAKClN0YWNrOgoKCgpMYXp5IGluc3RhbmNlIGhhcyBwcmV2aW91c2x5IGJlZW4gcG9pc29uZWQAADgFEAAqAAAAL1VzZXJzL2VyZnVyLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2Yvb25jZV9jZWxsLTEuMjAuMy9zcmMvbGliLnJzAAAAbAUQAF0AAAAIAwAAGQAAAHJlZW50cmFudCBpbml0AADcBRAADgAAAGwFEABdAAAAegIAAA0AAAAvVXNlcnMvZXJmdXIvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zi93YXNtLWJpbmRnZW4tMC4yLjEwMC9zcmMvY29udmVydC9zbGljZXMucnNudWxsIHBvaW50ZXIgcGFzc2VkIHRvIHJ1c3RyZWN1cnNpdmUgdXNlIG9mIGFuIG9iamVjdCBkZXRlY3RlZCB3aGljaCB3b3VsZCBsZWFkIHRvIHVuc2FmZSBhbGlhc2luZyBpbiBydXN0AAAEBhAAbAAAAOgAAAABAAAAbGlicmFyeS9zdGQvc3JjL3Bhbmlja2luZy5ycy9ydXN0Yy82MTdhYWQ4YzJlODc4M2Y2ZGY4ZTVkMWY4YmIxZTRiY2RjNzBhYTdiL2xpYnJhcnkvYWxsb2Mvc3JjL3N0cmluZy5ycwAIBxAASwAAAI0FAAAbAAAAL3J1c3RjLzYxN2FhZDhjMmU4NzgzZjZkZjhlNWQxZjhiYjFlNGJjZGM3MGFhN2IvbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc2QHEABMAAAAKgIAABEAAAA6AAAAAQAAAAAAAADABxAAAQAAAMAHEAABAAAAGgAAAAwAAAAEAAAAGwAAABwAAAAdAAAAL3J1c3QvZGVwcy9kbG1hbGxvYy0wLjIuNy9zcmMvZGxtYWxsb2MucnNhc3NlcnRpb24gZmFpbGVkOiBwc2l6ZSA+PSBzaXplICsgbWluX292ZXJoZWFkAPQHEAApAAAAqAQAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBwc2l6ZSA8PSBzaXplICsgbWF4X292ZXJoZWFkAAD0BxAAKQAAAK4EAAANAAAAcGFuaWNrZWQgYXQgOgptZW1vcnkgYWxsb2NhdGlvbiBvZiAgYnl0ZXMgZmFpbGVkqggQABUAAAC/CBAADQAAAGxpYnJhcnkvc3RkL3NyYy9hbGxvYy5yc9wIEAAYAAAAYwEAAAkAAABjYW5ub3QgbW9kaWZ5IHRoZSBwYW5pYyBob29rIGZyb20gYSBwYW5pY2tpbmcgdGhyZWFkBAkQADQAAADsBhAAHAAAAI4AAAAJAAAAGgAAAAwAAAAEAAAAHgAAAAAAAAAIAAAABAAAAB8AAAAAAAAACAAAAAQAAAAgAAAAIQAAACIAAAAjAAAAJAAAABAAAAAEAAAAJQAAACYAAAAnAAAAKAAAAEVycm9yAAAAKQAAAAwAAAAEAAAAKgAAACsAAAAsAAAAY2FwYWNpdHkgb3ZlcmZsb3cAAADICRAAEQAAAGxpYnJhcnkvYWxsb2Mvc3JjL3Jhd192ZWMucnPkCRAAHAAAACoCAAARAAAAbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzABAKEAAbAAAA6gEAABcAQcSUwAALoAMBAAAALQAAAGEgZm9ybWF0dGluZyB0cmFpdCBpbXBsZW1lbnRhdGlvbiByZXR1cm5lZCBhbiBlcnJvciB3aGVuIHRoZSB1bmRlcmx5aW5nIHN0cmVhbSBkaWQgbm90bGlicmFyeS9hbGxvYy9zcmMvZm10LnJzAACiChAAGAAAAIoCAAAOAAAAEAoQABsAAACNBQAAGwAAAGNhbGxlZCBgT3B0aW9uOjp1bndyYXAoKWAgb24gYSBgTm9uZWAgdmFsdWU6IAAAAAEAAAAAAAAABwsQAAIAAAAwMDAxMDIwMzA0MDUwNjA3MDgwOTEwMTExMjEzMTQxNTE2MTcxODE5MjAyMTIyMjMyNDI1MjYyNzI4MjkzMDMxMzIzMzM0MzUzNjM3MzgzOTQwNDE0MjQzNDQ0NTQ2NDc0ODQ5NTA1MTUyNTM1NDU1NTY1NzU4NTk2MDYxNjI2MzY0NjU2NjY3Njg2OTcwNzE3MjczNzQ3NTc2Nzc3ODc5ODA4MTgyODM4NDg1ODY4Nzg4ODk5MDkxOTI5Mzk0OTU5Njk3OTg5OQBB/JfAAAsBFgB4CXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMlMS44Ny4wLW5pZ2h0bHkgKDYxN2FhZDhjMiAyMDI1LTAyLTI0KQZ3YWxydXMGMC4yMy4zDHdhc20tYmluZGdlbgcwLjIuMTAwAGsPdGFyZ2V0X2ZlYXR1cmVzBisPbXV0YWJsZS1nbG9iYWxzKxNub250cmFwcGluZy1mcHRvaW50KwtidWxrLW1lbW9yeSsIc2lnbi1leHQrD3JlZmVyZW5jZS10eXBlcysKbXVsdGl2YWx1ZQ==", Un = async (A = {}, e) => {
  let t;
  if (e.startsWith("data:")) {
    const g = e.replace(/^data:.*?base64,/, "");
    let n;
    if (typeof Buffer == "function" && typeof Buffer.from == "function")
      n = Buffer.from(g, "base64");
    else if (typeof atob == "function") {
      const i = atob(g);
      n = new Uint8Array(i.length);
      for (let I = 0; I < i.length; I++)
        n[I] = i.charCodeAt(I);
    } else
      throw new Error("Cannot decode base64-encoded data URL");
    t = await WebAssembly.instantiate(n, A);
  } else {
    const g = await fetch(e), n = g.headers.get("Content-Type") || "";
    if ("instantiateStreaming" in WebAssembly && n.startsWith("application/wasm"))
      t = await WebAssembly.instantiateStreaming(g, A);
    else {
      const i = await g.arrayBuffer();
      t = await WebAssembly.instantiate(i, A);
    }
  }
  return t.instance.exports;
};
let V;
function Hn(A) {
  V = A;
}
const Kn = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
let Zr = new Kn("utf-8", { ignoreBOM: !0, fatal: !0 });
Zr.decode();
let ue = null;
function ye() {
  return (ue === null || ue.byteLength === 0) && (ue = new Uint8Array(V.memory.buffer)), ue;
}
function it(A, e) {
  return A = A >>> 0, Zr.decode(ye().subarray(A, A + e));
}
let $e = 0;
const Zn = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
let ve = new Zn("utf-8");
const Tn = typeof ve.encodeInto == "function" ? function(A, e) {
  return ve.encodeInto(A, e);
} : function(A, e) {
  const t = ve.encode(A);
  return e.set(t), {
    read: A.length,
    written: t.length
  };
};
function qn(A, e, t) {
  if (t === void 0) {
    const C = ve.encode(A), s = e(C.length, 1) >>> 0;
    return ye().subarray(s, s + C.length).set(C), $e = C.length, s;
  }
  let g = A.length, n = e(g, 1) >>> 0;
  const i = ye();
  let I = 0;
  for (; I < g; I++) {
    const C = A.charCodeAt(I);
    if (C > 127) break;
    i[n + I] = C;
  }
  if (I !== g) {
    I !== 0 && (A = A.slice(I)), n = t(n, g, g = I + A.length * 3, 1) >>> 0;
    const C = ye().subarray(n + I, n + g), s = Tn(A, C);
    I += s.written, n = t(n, g, I, 1) >>> 0;
  }
  return $e = I, n;
}
let UA = null;
function Xt() {
  return (UA === null || UA.buffer.detached === !0 || UA.buffer.detached === void 0 && UA.buffer !== V.memory.buffer) && (UA = new DataView(V.memory.buffer)), UA;
}
const Wt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((A) => V.__wbg_detector_free(A >>> 0, 1));
class Re {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Re.prototype);
    return t.__wbg_ptr = e, Wt.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Wt.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    V.__wbg_detector_free(e, 0);
  }
  /**
   * @returns {Detector}
   */
  static new() {
    const e = V.detector_new();
    return Re.__wrap(e);
  }
  /**
   * @returns {boolean}
   */
  is_detected() {
    return V.detector_is_detected(this.__wbg_ptr) !== 0;
  }
  check() {
    V.detector_check(this.__wbg_ptr);
  }
}
function jn(A, e) {
  let t, g;
  try {
    t = A, g = e, console.error(it(A, e));
  } finally {
    V.__wbindgen_free(t, g, 1);
  }
}
function Xn(A) {
  console.log(A);
}
function Wn() {
  return new Error();
}
function zn(A, e) {
  const t = e.stack, g = qn(t, V.__wbindgen_malloc, V.__wbindgen_realloc), n = $e;
  Xt().setInt32(A + 4 * 1, n, !0), Xt().setInt32(A + 4 * 0, g, !0);
}
function Vn() {
  const A = V.__wbindgen_export_3, e = A.grow(4);
  A.set(0, void 0), A.set(e + 0, void 0), A.set(e + 1, null), A.set(e + 2, !0), A.set(e + 3, !1);
}
function $n(A, e) {
  return it(A, e);
}
function Pn(A, e) {
  throw new Error(it(A, e));
}
URL = globalThis.URL;
const aA = await Un({ "./detection_wasm_bg.js": {
  __wbindgen_string_new: $n,
  __wbg_log_c222819a41e063d3: Xn,
  __wbg_new_8a6f238a6ece86ea: Wn,
  __wbg_stack_0ed75d68575b0f3c: zn,
  __wbg_error_7534b8e9a36f1ab4: jn,
  __wbindgen_throw: Pn,
  __wbindgen_init_externref_table: Vn
} }, xn), On = aA.memory, Ai = aA.__wbg_detector_free, ei = aA.detector_new, ti = aA.detector_is_detected, ri = aA.detector_check, gi = aA.__wbindgen_free, ni = aA.__wbindgen_malloc, ii = aA.__wbindgen_realloc, Ii = aA.__wbindgen_export_3, Tr = aA.__wbindgen_start, oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __wbg_detector_free: Ai,
  __wbindgen_export_3: Ii,
  __wbindgen_free: gi,
  __wbindgen_malloc: ni,
  __wbindgen_realloc: ii,
  __wbindgen_start: Tr,
  detector_check: ri,
  detector_is_detected: ti,
  detector_new: ei,
  memory: On
}, Symbol.toStringTag, { value: "Module" }));
Hn(oi);
Tr();
class si {
  timer = null;
  detector = Re.new();
  constructor() {
    this.timer = setInterval(() => {
      this.detector.check();
    }, 100);
  }
  endDetection() {
    return this.timer !== null && (clearInterval(this.timer), this.timer = null), this.detector.is_detected();
  }
}
var ai = /* @__PURE__ */ gA('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-ddsc3z"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-ddsc3z"></path></svg>'), li = /* @__PURE__ */ gA('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span> <input type="hidden" class="svelte-ddsc3z">', 1), Bi = /* @__PURE__ */ gA('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span>'), Ci = /* @__PURE__ */ gA('<label class="svelte-ddsc3z"><!></label>'), ci = /* @__PURE__ */ gA('<div class="svelte-ddsc3z"><a target="_blank" class="altcha-logo svelte-ddsc3z"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-ddsc3z"></path></svg></a></div>'), Ei = /* @__PURE__ */ gA('<div class="svelte-ddsc3z"><!></div>'), Qi = /* @__PURE__ */ gA('<div class="svelte-ddsc3z"><!></div>'), fi = /* @__PURE__ */ gA('<div class="altcha-error svelte-ddsc3z"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svelte-ddsc3z"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-ddsc3z"></path></svg> <!></div>'), ui = /* @__PURE__ */ gA('<div class="altcha-footer svelte-ddsc3z"><div class="svelte-ddsc3z"><!></div></div>'), di = /* @__PURE__ */ gA('<div class="altcha-anchor-arrow svelte-ddsc3z"></div>'), hi = /* @__PURE__ */ gA('<!> <div class="altcha svelte-ddsc3z"><div class="altcha-main svelte-ddsc3z"><!> <div class="altcha-checkbox svelte-ddsc3z"><input type="checkbox" class="svelte-ddsc3z"></div> <div class="altcha-label svelte-ddsc3z"><!></div> <!></div> <!> <!> <!></div>', 1);
const wi = {
  hash: "svelte-ddsc3z",
  code: `.altcha.svelte-ddsc3z {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left;}.altcha.svelte-ddsc3z:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow:where(.svelte-ddsc3z) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-ddsc3z:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-ddsc3z:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-ddsc3z {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-ddsc3z {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;}.altcha-label.svelte-ddsc3z {flex-grow:1;}.altcha-label.svelte-ddsc3z label:where(.svelte-ddsc3z) {cursor:pointer;}.altcha-logo.svelte-ddsc3z {color:currentColor;opacity:0.3;}.altcha-logo.svelte-ddsc3z:hover {opacity:1;}.altcha-error.svelte-ddsc3z {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-ddsc3z {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right;}.altcha-footer.svelte-ddsc3z:hover {opacity:1;}.altcha-footer.svelte-ddsc3z > :where(.svelte-ddsc3z):first-child {flex-grow:1;}.altcha-footer.svelte-ddsc3z a {color:currentColor;}.altcha-checkbox.svelte-ddsc3z {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-ddsc3z input:where(.svelte-ddsc3z) {width:18px;height:18px;margin:0;}.altcha-hidden.svelte-ddsc3z {display:none;}.altcha-spinner.svelte-ddsc3z {
  animation: svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-ddsc3z-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function yi(A, e) {
  Gr(e, !0), hn(A, wi);
  let t = F(e, "auto", 7, void 0), g = F(e, "blockspam", 7, void 0), n = F(e, "challengeurl", 7, void 0), i = F(e, "challengejson", 7, void 0), I = F(e, "customfetch", 7, void 0), C = F(e, "debug", 7, !1), s = F(e, "delay", 7, 0), l = F(e, "expire", 7, void 0), a = F(e, "floating", 7, void 0), c = F(e, "floatinganchor", 7, void 0), E = F(e, "floatingoffset", 7, void 0), f = F(e, "hidefooter", 7, !1), m = F(e, "hidelogo", 7, !1), R = F(e, "name", 7, "altcha"), x = F(e, "maxnumber", 7, 1e6), $ = F(e, "mockerror", 7, !1), Y = F(e, "obfuscated", 7, void 0), vA = F(e, "plugins", 7, void 0), lA = F(e, "refetchonexpire", 7, !0), U = F(e, "spamfilter", 7, !1), S = F(e, "strings", 7, void 0), L = F(e, "test", 7, !1), P = F(e, "verifyurl", 7, void 0), GA = F(e, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), $A = F(e, "workerurl", 7, void 0);
  const It = ["SHA-256", "SHA-384", "SHA-512"], ot = "Visit Altcha.org", st = "https://altcha.org/", PA = (r, o) => {
    e.$$host.dispatchEvent(new CustomEvent(r, { detail: o }));
  }, at = document.documentElement.lang?.split("-")?.[0], Je = /* @__PURE__ */ ne(() => n() && new URL(n(), location.origin).host.endsWith(".altcha.org") && !!n()?.includes("apiKey=ckey_")), Se = /* @__PURE__ */ ne(() => i() ? wt(i()) : void 0), lt = /* @__PURE__ */ ne(() => S() ? wt(S()) : {}), O = /* @__PURE__ */ ne(() => ({
    ariaLinkLabel: ot,
    error: "Verification failed. Try again later.",
    expired: "Verification expired. Try again.",
    footer: `Protected by <a href="${st}" target="_blank" aria-label="${B(lt)?.ariaLinkLabel || ot}">ALTCHA</a>`,
    label: "I'm not a robot",
    verified: "Verified",
    verifying: "Verifying...",
    waitAlert: "Verifying... please wait.",
    ...B(lt)
  }));
  let kA = JA(!1), N = JA(eA(w.UNVERIFIED)), Z = JA(void 0), OA = JA(null), YA = null, M = null, pA = JA(null), nA = null, cA = [], DA = JA(null);
  je(() => {
    Pr(B(pA));
  }), je(() => {
    Or(B(N));
  }), _n(() => {
    qr(), M && (M.removeEventListener("submit", ft), M.removeEventListener("reset", ut), M.removeEventListener("focusin", Qt), M = null), nA && (clearTimeout(nA), nA = null), document.removeEventListener("click", ct), document.removeEventListener("scroll", Et), window.removeEventListener("resize", ht);
  }), xr(() => {
    b("mounted", "1.2.0-wasm"), b("workers", GA()), Vr(), b("plugins", cA.length ? cA.map((r) => r.constructor.pluginName).join(", ") : "none"), L() && b("using test mode"), l() && Le(l()), t() !== void 0 && b("auto", t()), a() !== void 0 && yt(a()), M = B(Z)?.closest("form"), M && (M.addEventListener("submit", ft, { capture: !0 }), M.addEventListener("reset", ut), t() === "onfocus" && M.addEventListener("focusin", Qt)), t() === "onload" && (Y() ? Ae() : EA()), B(Je) && (f() || m()) && b("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      PA("load");
    });
  });
  function Bt(r, o) {
    return btoa(JSON.stringify({
      algorithm: r.algorithm,
      challenge: r.challenge,
      number: o.number,
      salt: r.salt,
      signature: r.signature,
      test: L() ? !0 : void 0,
      took: o.took
    }));
  }
  function qr() {
    for (const r of cA)
      r.destroy();
  }
  function Ct() {
    n() && lA() && B(N) === w.VERIFIED ? EA() : ee(w.EXPIRED, B(O).expired);
  }
  async function jr() {
    if ($())
      throw b("mocking error"), new Error("Mocked error.");
    if (B(Se))
      return b("using provided json data"), B(Se);
    if (L())
      return b("generating test challenge", { test: L() }), Yn(typeof L() != "boolean" ? +L() : void 0);
    {
      if (!n() && M) {
        const h = M.getAttribute("action");
        h?.includes("/form/") && n(h + "/altcha");
      }
      if (!n())
        throw new Error("Attribute challengeurl not set.");
      b("fetching challenge from", n());
      let r = null, o = null;
      if (I())
        if (b("using customfetch"), typeof I() == "string") {
          if (r = globalThis[I()] || null, !r)
            throw new Error(`Custom fetch function not found: ${I()}`);
        } else
          r = I();
      const Q = {
        headers: U() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (r) {
        if (o = await r(n(), Q), !o || !(o instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        o = await fetch(n(), Q);
      if (o.status !== 200)
        throw new Error(`Server responded with ${o.status}.`);
      const y = o.headers.get("X-Altcha-Config"), J = await o.json(), D = new URLSearchParams(J.salt.split("?")?.[1]), u = D.get("expires") || D.get("expire");
      if (u) {
        const h = new Date(+u * 1e3), BA = isNaN(h.getTime()) ? 0 : h.getTime() - Date.now();
        BA > 0 && Le(BA);
      }
      if (y)
        try {
          const h = JSON.parse(y);
          h && typeof h == "object" && (h.verifyurl && (h.verifyurl = new URL(h.verifyurl, new URL(n())).toString()), _t(h));
        } catch (h) {
          b("unable to configure from X-Altcha-Config", h);
        }
      return J;
    }
  }
  function Xr(r) {
    const o = M?.querySelector(typeof r == "string" ? `input[name="${r}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return o?.value?.slice(o.value.indexOf("@")) || void 0;
  }
  function Wr() {
    return U() === "ipAddress" ? {
      blockedCountries: void 0,
      classifier: void 0,
      disableRules: void 0,
      email: !1,
      expectedCountries: void 0,
      expectedLanguages: void 0,
      fields: !1,
      ipAddress: void 0,
      text: void 0,
      timeZone: void 0
    } : typeof U() == "object" ? U() : {
      blockedCountries: void 0,
      classifier: void 0,
      disableRules: void 0,
      email: void 0,
      expectedCountries: void 0,
      expectedLanguages: void 0,
      fields: void 0,
      ipAddress: void 0,
      text: void 0,
      timeZone: void 0
    };
  }
  function zr(r) {
    return [
      ...M?.querySelectorAll(r?.length ? r.map((Q) => `input[name="${Q}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])') || []
    ].reduce(
      (Q, y) => {
        const J = y.name, D = y.value;
        return J && D && (Q[J] = /\n/.test(D) ? D.replace(/(?<!\r)\n/g, `\r
`) : D), Q;
      },
      {}
    );
  }
  function Vr() {
    const r = vA() !== void 0 ? vA().split(",") : void 0;
    for (const o of globalThis.altchaPlugins)
      (!r || r.includes(o.pluginName)) && cA.push(new o({
        el: B(Z),
        clarify: Ae,
        dispatch: PA,
        getConfiguration: mt,
        getFloatingAnchor: Nt,
        getState: bt,
        log: b,
        reset: ee,
        solve: Dt,
        setState: _A,
        setFloatingAnchor: Ft,
        verify: EA
      }));
  }
  function b(...r) {
    (C() || r.some((o) => o instanceof Error)) && console[r[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${R()}]`, ...r);
  }
  function $r() {
    [w.UNVERIFIED, w.ERROR, w.EXPIRED].includes(B(N)) ? U() !== !1 && M?.reportValidity() === !1 ? G(kA, !1) : Y() ? Ae() : EA() : G(kA, !0);
  }
  function ct(r) {
    const o = r.target;
    a() && o && !B(Z).contains(o) && (B(N) === w.VERIFIED || t() === "off" && B(N) === w.UNVERIFIED) && (B(Z).style.display = "none");
  }
  function Et() {
    a() && B(N) !== w.UNVERIFIED && Ee();
  }
  function Pr(r) {
    for (const o of cA)
      typeof o.onErrorChange == "function" && o.onErrorChange(B(pA));
  }
  function Qt(r) {
    B(N) === w.UNVERIFIED && EA();
  }
  function ft(r) {
    M && t() === "onsubmit" ? B(N) === w.UNVERIFIED ? (r.preventDefault(), r.stopPropagation(), EA().then(() => {
      M?.requestSubmit();
    })) : B(N) !== w.VERIFIED && (r.preventDefault(), r.stopPropagation(), B(N) === w.VERIFYING && dt()) : M && a() && t() === "off" && B(N) === w.UNVERIFIED && (r.preventDefault(), r.stopPropagation(), B(Z).style.display = "block", Ee());
  }
  function ut() {
    ee();
  }
  function dt() {
    B(N) === w.VERIFYING && B(O).waitAlert && alert(B(O).waitAlert);
  }
  function Or(r) {
    for (const o of cA)
      typeof o.onStateChange == "function" && o.onStateChange(B(N));
    a() && B(N) !== w.UNVERIFIED && requestAnimationFrame(() => {
      Ee();
    }), G(kA, B(N) === w.VERIFIED);
  }
  function ht() {
    a() && Ee();
  }
  function wt(r) {
    return JSON.parse(r);
  }
  function Ee(r = 20) {
    if (B(Z))
      if (YA || (YA = (c() ? document.querySelector(c()) : M?.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || M), YA) {
        const o = parseInt(E(), 10) || 12, Q = YA.getBoundingClientRect(), y = B(Z).getBoundingClientRect(), J = document.documentElement.clientHeight, D = document.documentElement.clientWidth, u = a() === "auto" ? Q.bottom + y.height + o + r > J : a() === "top", h = Math.max(r, Math.min(D - r - y.width, Q.left + Q.width / 2 - y.width / 2));
        if (u ? B(Z).style.top = `${Q.top - (y.height + o)}px` : B(Z).style.top = `${Q.bottom + o}px`, B(Z).style.left = `${h}px`, B(Z).setAttribute("data-floating", u ? "top" : "bottom"), B(OA)) {
          const BA = B(OA).getBoundingClientRect();
          B(OA).style.left = Q.left - h + Q.width / 2 - BA.width / 2 + "px";
        }
      } else
        b("unable to find floating anchor element");
  }
  async function Ag(r) {
    if (!P())
      throw new Error("Attribute verifyurl not set.");
    b("requesting server verification from", P());
    const o = { payload: r };
    if (U() !== !1) {
      const {
        blockedCountries: J,
        classifier: D,
        disableRules: u,
        email: h,
        expectedLanguages: BA,
        expectedCountries: He,
        fields: re,
        ipAddress: ge,
        text: Cg,
        timeZone: Mt
      } = Wr();
      o.blockedCountries = J, o.classifier = D, o.disableRules = u, o.email = h === !1 ? void 0 : Xr(h), o.expectedCountries = He, o.expectedLanguages = BA || (at ? [at] : void 0), o.fields = re === !1 ? void 0 : zr(re), o.ipAddress = ge === !1 ? void 0 : ge || "auto", o.text = Cg, o.timeZone = Mt === !1 ? void 0 : Mt || Mn();
    }
    const Q = await fetch(P(), {
      body: JSON.stringify(o),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (Q.status !== 200)
      throw new Error(`Server responded with ${Q.status}.`);
    const y = await Q.json();
    if (y?.payload && G(DA, eA(y.payload)), PA("serververification", y), g() && y.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function Le(r) {
    b("expire", r), nA && (clearTimeout(nA), nA = null), r < 1 ? Ct() : nA = setTimeout(Ct, r);
  }
  function yt(r) {
    b("floating", r), a() !== r && (B(Z).style.left = "", B(Z).style.top = ""), a(r === !0 || r === "" ? "auto" : r === !1 || r === "false" ? void 0 : a()), a() ? (t() || t("onsubmit"), document.addEventListener("scroll", Et), document.addEventListener("click", ct), window.addEventListener("resize", ht)) : t() === "onsubmit" && t(void 0);
  }
  function vt(r) {
    if (!r.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (r.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!It.includes(r.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${It.join(", ")}`);
    if (!r.challenge || r.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!r.salt || r.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Dt(r) {
    let o = null;
    if ("Worker" in window) {
      try {
        o = await eg(r, r.maxnumber);
      } catch (Q) {
        b(Q);
      }
      if (o?.number !== void 0 || "obfuscated" in r)
        return { data: r, solution: o };
    }
    if ("obfuscated" in r) {
      const Q = await Ln(r.obfuscated, r.key, r.maxnumber);
      return { data: r, solution: await Q.promise };
    }
    return {
      data: r,
      solution: await pn(r.challenge, r.salt, r.algorithm, r.maxnumber || x()).promise
    };
  }
  async function eg(r, o = typeof L() == "number" ? L() : x(), Q = Math.ceil(GA())) {
    const y = [];
    Q = Math.min(16, Math.max(1, Q));
    for (let u = 0; u < Q; u++)
      y.push(altchaCreateWorker($A()));
    const J = Math.ceil(o / Q), D = await Promise.all(y.map((u, h) => {
      const BA = h * J;
      return new Promise((He) => {
        u.addEventListener("message", (re) => {
          if (re.data)
            for (const ge of y)
              ge !== u && ge.postMessage({ type: "abort" });
          He(re.data);
        }), u.postMessage({
          payload: r,
          max: BA + J,
          start: BA,
          type: "work"
        });
      });
    }));
    for (const u of y)
      u.terminate();
    return D.find((u) => !!u) || null;
  }
  async function Ae() {
    if (!Y()) {
      _A(w.ERROR);
      return;
    }
    const r = cA.find((o) => o.constructor.pluginName === "obfuscation");
    if (!r || !("clarify" in r)) {
      _A(w.ERROR), b("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in r && typeof r.clarify == "function")
      return r.clarify();
  }
  function _t(r) {
    r.obfuscated !== void 0 && Y(r.obfuscated), r.auto !== void 0 && (t(r.auto), t() === "onload" && (Y() ? Ae() : EA())), r.blockspam !== void 0 && g(!!r.blockspam), r.customfetch !== void 0 && I(r.customfetch), r.floatinganchor !== void 0 && c(r.floatinganchor), r.delay !== void 0 && s(r.delay), r.floatingoffset !== void 0 && E(r.floatingoffset), r.floating !== void 0 && yt(r.floating), r.expire !== void 0 && (Le(r.expire), l(r.expire)), r.challenge && (i(typeof r.challenge == "string" ? r.challenge : JSON.stringify(r.challenge)), vt(B(Se))), r.challengeurl !== void 0 && n(r.challengeurl), r.debug !== void 0 && C(!!r.debug), r.hidefooter !== void 0 && f(!!r.hidefooter), r.hidelogo !== void 0 && m(!!r.hidelogo), r.maxnumber !== void 0 && x(+r.maxnumber), r.mockerror !== void 0 && $(!!r.mockerror), r.name !== void 0 && R(r.name), r.refetchonexpire !== void 0 && lA(!!r.refetchonexpire), r.spamfilter !== void 0 && U(typeof r.spamfilter == "object" ? r.spamfilter : !!r.spamfilter), r.strings && S(typeof r.strings == "string" ? r.strings : JSON.stringify(r.strings)), r.test !== void 0 && L(typeof r.test == "number" ? r.test : !!r.test), r.verifyurl !== void 0 && P(r.verifyurl), r.workers !== void 0 && GA(+r.workers), r.workerurl !== void 0 && $A(r.workerurl);
  }
  function mt() {
    return {
      auto: t(),
      blockspam: g(),
      challengeurl: n(),
      debug: C(),
      delay: s(),
      expire: l(),
      floating: a(),
      floatinganchor: c(),
      floatingoffset: E(),
      hidefooter: f(),
      hidelogo: m(),
      name: R(),
      maxnumber: x(),
      mockerror: $(),
      obfuscated: Y(),
      refetchonexpire: lA(),
      spamfilter: U(),
      strings: B(O),
      test: L(),
      verifyurl: P(),
      workers: GA(),
      workerurl: $A()
    };
  }
  function Nt() {
    return YA;
  }
  function tg(r) {
    return cA.find((o) => o.constructor.pluginName === r);
  }
  function bt() {
    return B(N);
  }
  function ee(r = w.UNVERIFIED, o = null) {
    nA && (clearTimeout(nA), nA = null), G(kA, !1), G(DA, null), _A(r, o);
  }
  function Ft(r) {
    YA = r;
  }
  function _A(r, o = null) {
    G(N, eA(r)), G(pA, eA(o)), PA("statechange", {
      payload: B(DA),
      state: B(N)
    });
  }
  async function EA() {
    ee(w.VERIFYING), await new Promise((o) => setTimeout(o, s() || 0));
    const r = new si();
    return jr().then((o) => (vt(o), b("challenge", o), Dt(o))).then(({ data: o, solution: Q }) => {
      if (b("solution", Q), "challenge" in o && Q && !("clearText" in Q))
        if (Q?.number !== void 0) {
          if (P())
            return Ag(Bt(o, Q));
          G(DA, eA(Bt(o, Q))), b("payload", B(DA));
        } else
          throw b("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      if (r.endDetection() === !0)
        throw new Error("Detected bot.");
      _A(w.VERIFIED), b("verified"), on().then(() => {
        PA("verified", { payload: B(DA) });
      });
    }).catch((o) => {
      b(o), _A(w.ERROR, o.message);
    });
  }
  var Rt = hi(), Gt = Ke(Rt);
  dn(Gt, e, "default", {});
  var te = CA(Gt, 2), xe = X(te), kt = X(xe);
  {
    var rg = (r) => {
      var o = ai();
      W(r, o);
    };
    QA(kt, (r) => {
      B(N) === w.VERIFYING && r(rg);
    });
  }
  var Qe = CA(kt, 2), MA = X(Qe);
  Zt(MA), MA.__change = $r, j(Qe);
  var Ue = CA(Qe, 2), gg = X(Ue);
  {
    var ng = (r) => {
      var o = li(), Q = Ke(o), y = X(Q);
      xA(y, () => B(O).verified), j(Q);
      var J = CA(Q, 2);
      Zt(J), SA(() => {
        AA(J, "name", R()), wn(J, B(DA));
      }), W(r, o);
    }, ig = (r) => {
      var o = cn(), Q = Ke(o);
      {
        var y = (D) => {
          var u = Bi(), h = X(u);
          xA(h, () => B(O).verifying), j(u), W(D, u);
        }, J = (D) => {
          var u = Ci(), h = X(u);
          xA(h, () => B(O).label), j(u), SA(() => AA(u, "for", `${R() ?? ""}_checkbox`)), W(D, u);
        };
        QA(
          Q,
          (D) => {
            B(N) === w.VERIFYING ? D(y) : D(J, !1);
          },
          !0
        );
      }
      W(r, o);
    };
    QA(gg, (r) => {
      B(N) === w.VERIFIED ? r(ng) : r(ig, !1);
    });
  }
  j(Ue);
  var Ig = CA(Ue, 2);
  {
    var og = (r) => {
      var o = ci(), Q = X(o);
      AA(Q, "href", st), j(o), SA(() => AA(Q, "aria-label", B(O).ariaLinkLabel)), W(r, o);
    };
    QA(Ig, (r) => {
      (m() !== !0 || B(Je)) && r(og);
    });
  }
  j(xe);
  var Yt = CA(xe, 2);
  {
    var sg = (r) => {
      var o = fi(), Q = CA(X(o), 2);
      {
        var y = (D) => {
          var u = Ei(), h = X(u);
          xA(h, () => B(O).expired), j(u), SA(() => AA(u, "title", B(pA))), W(D, u);
        }, J = (D) => {
          var u = Qi(), h = X(u);
          xA(h, () => B(O).error), j(u), SA(() => AA(u, "title", B(pA))), W(D, u);
        };
        QA(Q, (D) => {
          B(N) === w.EXPIRED ? D(y) : D(J, !1);
        });
      }
      j(o), W(r, o);
    };
    QA(Yt, (r) => {
      (B(pA) || B(N) === w.EXPIRED) && r(sg);
    });
  }
  var pt = CA(Yt, 2);
  {
    var ag = (r) => {
      var o = ui(), Q = X(o), y = X(Q);
      xA(y, () => B(O).footer), j(Q), j(o), W(r, o);
    };
    QA(pt, (r) => {
      B(O).footer && (f() !== !0 || B(Je)) && r(ag);
    });
  }
  var lg = CA(pt, 2);
  {
    var Bg = (r) => {
      var o = di();
      jt(o, (Q) => G(OA, Q), () => B(OA)), W(r, o);
    };
    QA(lg, (r) => {
      a() && r(Bg);
    });
  }
  return j(te), jt(te, (r) => G(Z, r), () => B(Z)), SA(() => {
    AA(te, "data-state", B(N)), AA(te, "data-floating", a()), vn(Qe, "altcha-hidden", B(N) === w.VERIFYING), AA(MA, "id", `${R() ?? ""}_checkbox`), MA.required = t() !== "onsubmit" && (!a() || t() !== "off");
  }), Bn("invalid", MA, dt), Dn(MA, () => B(kA), (r) => G(kA, r)), W(A, Rt), kr({
    clarify: Ae,
    configure: _t,
    getConfiguration: mt,
    getFloatingAnchor: Nt,
    getPlugin: tg,
    getState: bt,
    reset: ee,
    setFloatingAnchor: Ft,
    setState: _A,
    verify: EA,
    get auto() {
      return t();
    },
    set auto(r = void 0) {
      t(r), v();
    },
    get blockspam() {
      return g();
    },
    set blockspam(r = void 0) {
      g(r), v();
    },
    get challengeurl() {
      return n();
    },
    set challengeurl(r = void 0) {
      n(r), v();
    },
    get challengejson() {
      return i();
    },
    set challengejson(r = void 0) {
      i(r), v();
    },
    get customfetch() {
      return I();
    },
    set customfetch(r = void 0) {
      I(r), v();
    },
    get debug() {
      return C();
    },
    set debug(r = !1) {
      C(r), v();
    },
    get delay() {
      return s();
    },
    set delay(r = 0) {
      s(r), v();
    },
    get expire() {
      return l();
    },
    set expire(r = void 0) {
      l(r), v();
    },
    get floating() {
      return a();
    },
    set floating(r = void 0) {
      a(r), v();
    },
    get floatinganchor() {
      return c();
    },
    set floatinganchor(r = void 0) {
      c(r), v();
    },
    get floatingoffset() {
      return E();
    },
    set floatingoffset(r = void 0) {
      E(r), v();
    },
    get hidefooter() {
      return f();
    },
    set hidefooter(r = !1) {
      f(r), v();
    },
    get hidelogo() {
      return m();
    },
    set hidelogo(r = !1) {
      m(r), v();
    },
    get name() {
      return R();
    },
    set name(r = "altcha") {
      R(r), v();
    },
    get maxnumber() {
      return x();
    },
    set maxnumber(r = 1e6) {
      x(r), v();
    },
    get mockerror() {
      return $();
    },
    set mockerror(r = !1) {
      $(r), v();
    },
    get obfuscated() {
      return Y();
    },
    set obfuscated(r = void 0) {
      Y(r), v();
    },
    get plugins() {
      return vA();
    },
    set plugins(r = void 0) {
      vA(r), v();
    },
    get refetchonexpire() {
      return lA();
    },
    set refetchonexpire(r = !0) {
      lA(r), v();
    },
    get spamfilter() {
      return U();
    },
    set spamfilter(r = !1) {
      U(r), v();
    },
    get strings() {
      return S();
    },
    set strings(r = void 0) {
      S(r), v();
    },
    get test() {
      return L();
    },
    set test(r = !1) {
      L(r), v();
    },
    get verifyurl() {
      return P();
    },
    set verifyurl(r = void 0) {
      P(r), v();
    },
    get workers() {
      return GA();
    },
    set workers(r = Math.min(16, navigator.hardwareConcurrency || 8)) {
      GA(r), v();
    },
    get workerurl() {
      return $A();
    },
    set workerurl(r = void 0) {
      $A(r), v();
    }
  });
}
Cn(["change"]);
customElements.define("altcha-widget", Gn(
  yi,
  {
    blockspam: { type: "Boolean" },
    debug: { type: "Boolean" },
    delay: { type: "Number" },
    expire: { type: "Number" },
    floatingoffset: { type: "Number" },
    hidefooter: { type: "Boolean" },
    hidelogo: { type: "Boolean" },
    maxnumber: { type: "Number" },
    mockerror: { type: "Boolean" },
    refetchonexpire: { type: "Boolean" },
    test: { type: "Boolean" },
    workers: { type: "Number" },
    auto: {},
    challengeurl: {},
    challengejson: {},
    customfetch: {},
    floating: {},
    floatinganchor: {},
    name: {},
    obfuscated: {},
    plugins: {},
    spamfilter: {},
    strings: {},
    verifyurl: {},
    workerurl: {}
  },
  ["default"],
  [
    "clarify",
    "configure",
    "getConfiguration",
    "getFloatingAnchor",
    "getPlugin",
    "getState",
    "reset",
    "setFloatingAnchor",
    "setState",
    "verify"
  ],
  !1
));
globalThis.altchaCreateWorker = (A) => new Worker(new URL(A || "./worker.js", import.meta.url));
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
export {
  yi as Altcha
};
