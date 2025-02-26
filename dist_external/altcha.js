const wn = "5";
typeof window < "u" && (window.__svelte ||= { v: /* @__PURE__ */ new Set() }).v.add(wn);
const yn = 1, _n = 4, vn = 8, Dn = 16, Nn = 1, Gn = 2, Ag = "[", eg = "[!", tg = "]", jA = {}, X = Symbol(), gg = !1;
var ng = Array.isArray, bn = Array.from, Ge = Object.keys, be = Object.defineProperty, GA = Object.getOwnPropertyDescriptor, Yn = Object.getOwnPropertyDescriptors, mn = Object.prototype, Fn = Array.prototype, qe = Object.getPrototypeOf;
function ig(A) {
  for (var e = 0; e < A.length; e++)
    A[e]();
}
const gA = 2, rg = 4, Ee = 8, gt = 16, nA = 32, Qe = 64, ze = 128, YA = 256, Ye = 512, T = 1024, dA = 2048, le = 4096, TA = 8192, zA = 16384, Rn = 32768, nt = 65536, kn = 1 << 19, Ig = 1 << 20, Ce = Symbol("$state"), og = Symbol("legacy props"), pn = Symbol("");
function Cg(A) {
  return A === this.v;
}
function Mn(A, e) {
  return A != A ? e == e : A !== e || A !== null && typeof A == "object" || typeof A == "function";
}
function Bg(A) {
  return !Mn(A, this.v);
}
function Sn(A) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ln() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Jn(A) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Un() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Kn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function xn(A) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Zn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function jn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Hn() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Xn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let sg = !1;
function IA(A) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: A,
    reactions: null,
    equals: Cg,
    version: 0
  };
}
function SA(A) {
  return /* @__PURE__ */ Tn(IA(A));
}
// @__NO_SIDE_EFFECTS__
function ag(A, e = !1) {
  const t = IA(A);
  return e || (t.equals = Bg), t;
}
// @__NO_SIDE_EFFECTS__
function Tn(A) {
  return D !== null && D.f & gA && (oA === null ? ri([A]) : oA.push(A)), A;
}
function F(A, e) {
  return D !== null && oi() && D.f & (gA | gt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (oA === null || !oA.includes(A)) && Xn(), Wn(A, e);
}
function Wn(A, e) {
  return A.equals(e) || (A.v = e, A.version = Fg(), Eg(A, dA), d !== null && d.f & T && !(d.f & nA) && (Z !== null && Z.includes(A) ? (BA(d, dA), Ke(d)) : fA === null ? Ii([A]) : fA.push(A))), e;
}
function Eg(A, e) {
  var t = A.reactions;
  if (t !== null)
    for (var g = t.length, i = 0; i < g; i++) {
      var r = t[i], I = r.f;
      I & dA || (BA(r, e), I & (T | YA) && (I & gA ? Eg(
        /** @type {Derived} */
        r,
        le
      ) : Ke(
        /** @type {Effect} */
        r
      )));
    }
}
function Se(A) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let M = !1;
function xA(A) {
  M = A;
}
let R;
function hA(A) {
  if (A === null)
    throw Se(), jA;
  return R = A;
}
function WA() {
  return hA(
    /** @type {TemplateNode} */
    /* @__PURE__ */ yA(R)
  );
}
function q(A) {
  if (M) {
    if (/* @__PURE__ */ yA(R) !== null)
      throw Se(), jA;
    R = A;
  }
}
function qn() {
  for (var A = 0, e = R; ; ) {
    if (e.nodeType === 8) {
      var t = (
        /** @type {Comment} */
        e.data
      );
      if (t === tg) {
        if (A === 0) return e;
        A -= 1;
      } else (t === Ag || t === eg) && (A += 1);
    }
    var g = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ yA(e)
    );
    e.remove(), e = g;
  }
}
function tA(A, e = null, t) {
  if (typeof A != "object" || A === null || Ce in A)
    return A;
  const g = qe(A);
  if (g !== mn && g !== Fn)
    return A;
  var i = /* @__PURE__ */ new Map(), r = ng(A), I = IA(0);
  r && i.set("length", IA(
    /** @type {any[]} */
    A.length
  ));
  var a;
  return new Proxy(
    /** @type {any} */
    A,
    {
      defineProperty(C, s, B) {
        (!("value" in B) || B.configurable === !1 || B.enumerable === !1 || B.writable === !1) && Zn();
        var Q = i.get(s);
        return Q === void 0 ? (Q = IA(B.value), i.set(s, Q)) : F(Q, tA(B.value, a)), !0;
      },
      deleteProperty(C, s) {
        var B = i.get(s);
        if (B === void 0)
          s in C && i.set(s, IA(X));
        else {
          if (r && typeof s == "string") {
            var Q = (
              /** @type {Source<number>} */
              i.get("length")
            ), l = Number(s);
            Number.isInteger(l) && l < Q.v && F(Q, l);
          }
          F(B, X), xt(I);
        }
        return !0;
      },
      get(C, s, B) {
        if (s === Ce)
          return A;
        var Q = i.get(s), l = s in C;
        if (Q === void 0 && (!l || GA(C, s)?.writable) && (Q = IA(tA(l ? C[s] : X, a)), i.set(s, Q)), Q !== void 0) {
          var f = E(Q);
          return f === X ? void 0 : f;
        }
        return Reflect.get(C, s, B);
      },
      getOwnPropertyDescriptor(C, s) {
        var B = Reflect.getOwnPropertyDescriptor(C, s);
        if (B && "value" in B) {
          var Q = i.get(s);
          Q && (B.value = E(Q));
        } else if (B === void 0) {
          var l = i.get(s), f = l?.v;
          if (l !== void 0 && f !== X)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return B;
      },
      has(C, s) {
        if (s === Ce)
          return !0;
        var B = i.get(s), Q = B !== void 0 && B.v !== X || Reflect.has(C, s);
        if (B !== void 0 || d !== null && (!Q || GA(C, s)?.writable)) {
          B === void 0 && (B = IA(Q ? tA(C[s], a) : X), i.set(s, B));
          var l = E(B);
          if (l === X)
            return !1;
        }
        return Q;
      },
      set(C, s, B, Q) {
        var l = i.get(s), f = s in C;
        if (r && s === "length")
          for (var N = B; N < /** @type {Source<number>} */
          l.v; N += 1) {
            var m = i.get(N + "");
            m !== void 0 ? F(m, X) : N in C && (m = IA(X), i.set(N + "", m));
          }
        l === void 0 ? (!f || GA(C, s)?.writable) && (l = IA(void 0), F(l, tA(B, a)), i.set(s, l)) : (f = l.v !== X, F(l, tA(B, a)));
        var K = Reflect.getOwnPropertyDescriptor(C, s);
        if (K?.set && K.set.call(Q, B), !f) {
          if (r && typeof s == "string") {
            var O = (
              /** @type {Source<number>} */
              i.get("length")
            ), k = Number(s);
            Number.isInteger(k) && k >= O.v && F(O, k + 1);
          }
          xt(I);
        }
        return !0;
      },
      ownKeys(C) {
        E(I);
        var s = Reflect.ownKeys(C).filter((l) => {
          var f = i.get(l);
          return f === void 0 || f.v !== X;
        });
        for (var [B, Q] of i)
          Q.v !== X && !(B in C) && s.push(B);
        return s;
      },
      setPrototypeOf() {
        jn();
      }
    }
  );
}
function xt(A, e = 1) {
  F(A, A.v + e);
}
var Zt, Qg, lg;
function Ve() {
  if (Zt === void 0) {
    Zt = window;
    var A = Element.prototype, e = Node.prototype;
    Qg = GA(e, "firstChild").get, lg = GA(e, "nextSibling").get, A.__click = void 0, A.__className = "", A.__attributes = null, A.__styles = null, A.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Le(A = "") {
  return document.createTextNode(A);
}
// @__NO_SIDE_EFFECTS__
function bA(A) {
  return Qg.call(A);
}
// @__NO_SIDE_EFFECTS__
function yA(A) {
  return lg.call(A);
}
function z(A, e) {
  if (!M)
    return /* @__PURE__ */ bA(A);
  var t = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ bA(R)
  );
  return t === null && (t = R.appendChild(Le())), hA(t), t;
}
function We(A, e) {
  if (!M) {
    var t = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ bA(
        /** @type {Node} */
        A
      )
    );
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ yA(t) : t;
  }
  return R;
}
function EA(A, e = 1, t = !1) {
  let g = M ? R : A;
  for (var i; e--; )
    i = g, g = /** @type {TemplateNode} */
    /* @__PURE__ */ yA(g);
  if (!M)
    return g;
  var r = g?.nodeType;
  if (t && r !== 3) {
    var I = Le();
    return g === null ? i?.after(I) : g.before(I), hA(I), I;
  }
  return hA(g), /** @type {TemplateNode} */
  g;
}
function zn(A) {
  A.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function Ie(A) {
  var e = gA | dA;
  d === null ? e |= YA : d.f |= Ig;
  var t = D !== null && D.f & gA ? (
    /** @type {Derived} */
    D
  ) : null;
  const g = {
    children: null,
    ctx: j,
    deps: null,
    equals: Cg,
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
function cg(A) {
  var e = A.children;
  if (e !== null) {
    A.children = null;
    for (var t = 0; t < e.length; t += 1) {
      var g = e[t];
      g.f & gA ? it(
        /** @type {Derived} */
        g
      ) : mA(
        /** @type {Effect} */
        g
      );
    }
  }
}
function Vn(A) {
  for (var e = A.parent; e !== null; ) {
    if (!(e.f & gA))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function fg(A) {
  var e, t = d;
  CA(Vn(A));
  try {
    cg(A), e = Rg(A);
  } finally {
    CA(t);
  }
  return e;
}
function ug(A) {
  var e = fg(A), t = (ZA || A.f & YA) && A.deps !== null ? le : T;
  BA(A, t), A.equals(e) || (A.v = e, A.version = Fg());
}
function it(A) {
  cg(A), ae(A, 0), BA(A, zA), A.v = A.children = A.deps = A.ctx = A.reactions = null;
}
function Pn(A) {
  d === null && D === null && Jn(), D !== null && D.f & YA && Ln(), Bt && Sn();
}
function On(A, e) {
  var t = e.last;
  t === null ? e.last = e.first = A : (t.next = A, A.prev = t, e.last = A);
}
function VA(A, e, t, g = !0) {
  var i = (A & Qe) !== 0, r = d, I = {
    ctx: j,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: A | dA,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i ? null : r,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (t) {
    var a = HA;
    try {
      Xt(!0), Ue(I), I.f |= Rn;
    } catch (B) {
      throw mA(I), B;
    } finally {
      Xt(a);
    }
  } else e !== null && Ke(I);
  var C = t && I.deps === null && I.first === null && I.nodes_start === null && I.teardown === null && (I.f & Ig) === 0;
  if (!C && !i && g && (r !== null && On(I, r), D !== null && D.f & gA)) {
    var s = (
      /** @type {Derived} */
      D
    );
    (s.children ??= []).push(I);
  }
  return I;
}
function $n(A) {
  const e = VA(Ee, null, !1);
  return BA(e, T), e.teardown = A, e;
}
function Pe(A) {
  Pn();
  var e = d !== null && (d.f & nA) !== 0 && j !== null && !j.m;
  if (e) {
    var t = (
      /** @type {ComponentContext} */
      j
    );
    (t.e ??= []).push({
      fn: A,
      effect: d,
      reaction: D
    });
  } else {
    var g = rt(A);
    return g;
  }
}
function dg(A) {
  const e = VA(Qe, A, !0);
  return () => {
    mA(e);
  };
}
function rt(A) {
  return VA(rg, A, !1);
}
function It(A) {
  return VA(Ee, A, !0);
}
function LA(A) {
  return ot(A);
}
function ot(A, e = 0) {
  return VA(Ee | gt | e, A, !0);
}
function me(A, e = !0) {
  return VA(Ee | nA, A, !0, e);
}
function hg(A) {
  var e = A.teardown;
  if (e !== null) {
    const t = Bt, g = D;
    Tt(!0), wA(null);
    try {
      e.call(null);
    } finally {
      Tt(t), wA(g);
    }
  }
}
function wg(A) {
  var e = A.deriveds;
  if (e !== null) {
    A.deriveds = null;
    for (var t = 0; t < e.length; t += 1)
      it(e[t]);
  }
}
function yg(A, e = !1) {
  var t = A.first;
  for (A.first = A.last = null; t !== null; ) {
    var g = t.next;
    mA(t, e), t = g;
  }
}
function Ai(A) {
  for (var e = A.first; e !== null; ) {
    var t = e.next;
    e.f & nA || mA(e), e = t;
  }
}
function mA(A, e = !0) {
  var t = !1;
  if ((e || A.f & kn) && A.nodes_start !== null) {
    for (var g = A.nodes_start, i = A.nodes_end; g !== null; ) {
      var r = g === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ yA(g)
      );
      g.remove(), g = r;
    }
    t = !0;
  }
  yg(A, e && !t), wg(A), ae(A, 0), BA(A, zA);
  var I = A.transitions;
  if (I !== null)
    for (const C of I)
      C.stop();
  hg(A);
  var a = A.parent;
  a !== null && a.first !== null && _g(A), A.next = A.prev = A.teardown = A.ctx = A.deps = A.fn = A.nodes_start = A.nodes_end = null;
}
function _g(A) {
  var e = A.parent, t = A.prev, g = A.next;
  t !== null && (t.next = g), g !== null && (g.prev = t), e !== null && (e.first === A && (e.first = g), e.last === A && (e.last = t));
}
function jt(A, e) {
  var t = [];
  vg(A, t, !0), ei(t, () => {
    mA(A), e && e();
  });
}
function ei(A, e) {
  var t = A.length;
  if (t > 0) {
    var g = () => --t || e();
    for (var i of A)
      i.out(g);
  } else
    e();
}
function vg(A, e, t) {
  if (!(A.f & TA)) {
    if (A.f ^= TA, A.transitions !== null)
      for (const I of A.transitions)
        (I.is_global || t) && e.push(I);
    for (var g = A.first; g !== null; ) {
      var i = g.next, r = (g.f & nt) !== 0 || (g.f & nA) !== 0;
      vg(g, e, r ? t : !1), g = i;
    }
  }
}
function Ht(A) {
  Dg(A, !0);
}
function Dg(A, e) {
  if (A.f & TA) {
    ce(A) && Ue(A), A.f ^= TA;
    for (var t = A.first; t !== null; ) {
      var g = t.next, i = (t.f & nt) !== 0 || (t.f & nA) !== 0;
      Dg(t, i ? e : !1), t = g;
    }
    if (A.transitions !== null)
      for (const r of A.transitions)
        (r.is_global || e) && r.in();
  }
}
const ti = typeof requestIdleCallback > "u" ? (A) => setTimeout(A, 1) : requestIdleCallback;
let Fe = !1, Re = !1, Oe = [], $e = [];
function Ng() {
  Fe = !1;
  const A = Oe.slice();
  Oe = [], ig(A);
}
function Gg() {
  Re = !1;
  const A = $e.slice();
  $e = [], ig(A);
}
function Ct(A) {
  Fe || (Fe = !0, queueMicrotask(Ng)), Oe.push(A);
}
function gi(A) {
  Re || (Re = !0, ti(Gg)), $e.push(A);
}
function ni() {
  Fe && Ng(), Re && Gg();
}
function bg(A) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
const Yg = 0, ii = 1;
let ye = !1, _e = Yg, Be = !1, se = null, HA = !1, Bt = !1;
function Xt(A) {
  HA = A;
}
function Tt(A) {
  Bt = A;
}
let NA = [], XA = 0;
let D = null;
function wA(A) {
  D = A;
}
let d = null;
function CA(A) {
  d = A;
}
let oA = null;
function ri(A) {
  oA = A;
}
let Z = null, P = 0, fA = null;
function Ii(A) {
  fA = A;
}
let mg = 0, ZA = !1, j = null;
function Fg() {
  return ++mg;
}
function oi() {
  return !sg;
}
function ce(A) {
  var e = A.f;
  if (e & dA)
    return !0;
  if (e & le) {
    var t = A.deps, g = (e & YA) !== 0;
    if (t !== null) {
      var i;
      if (e & Ye) {
        for (i = 0; i < t.length; i++)
          (t[i].reactions ??= []).push(A);
        A.f ^= Ye;
      }
      for (i = 0; i < t.length; i++) {
        var r = t[i];
        if (ce(
          /** @type {Derived} */
          r
        ) && ug(
          /** @type {Derived} */
          r
        ), g && d !== null && !ZA && !r?.reactions?.includes(A) && (r.reactions ??= []).push(A), r.version > A.version)
          return !0;
      }
    }
    g || BA(A, T);
  }
  return !1;
}
function Ci(A, e) {
  for (var t = e; t !== null; ) {
    if (t.f & ze)
      try {
        t.fn(A);
        return;
      } catch {
        t.f ^= ze;
      }
    t = t.parent;
  }
  throw ye = !1, A;
}
function Bi(A) {
  return (A.f & zA) === 0 && (A.parent === null || (A.parent.f & ze) === 0);
}
function Je(A, e, t, g) {
  if (ye) {
    if (t === null && (ye = !1), Bi(e))
      throw A;
    return;
  }
  t !== null && (ye = !0);
  {
    Ci(A, e);
    return;
  }
}
function Rg(A) {
  var e = Z, t = P, g = fA, i = D, r = ZA, I = oA, a = j, C = A.f;
  Z = /** @type {null | Value[]} */
  null, P = 0, fA = null, D = C & (nA | Qe) ? null : A, ZA = !HA && (C & YA) !== 0, oA = null, j = A.ctx;
  try {
    var s = (
      /** @type {Function} */
      (0, A.fn)()
    ), B = A.deps;
    if (Z !== null) {
      var Q;
      if (ae(A, P), B !== null && P > 0)
        for (B.length = P + Z.length, Q = 0; Q < Z.length; Q++)
          B[P + Q] = Z[Q];
      else
        A.deps = B = Z;
      if (!ZA)
        for (Q = P; Q < B.length; Q++)
          (B[Q].reactions ??= []).push(A);
    } else B !== null && P < B.length && (ae(A, P), B.length = P);
    return s;
  } finally {
    Z = e, P = t, fA = g, D = i, ZA = r, oA = I, j = a;
  }
}
function si(A, e) {
  let t = e.reactions;
  if (t !== null) {
    var g = t.indexOf(A);
    if (g !== -1) {
      var i = t.length - 1;
      i === 0 ? t = e.reactions = null : (t[g] = t[i], t.pop());
    }
  }
  t === null && e.f & gA && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Z === null || !Z.includes(e)) && (BA(e, le), e.f & (YA | Ye) || (e.f ^= Ye), ae(
    /** @type {Derived} **/
    e,
    0
  ));
}
function ae(A, e) {
  var t = A.deps;
  if (t !== null)
    for (var g = e; g < t.length; g++)
      si(A, t[g]);
}
function Ue(A) {
  var e = A.f;
  if (!(e & zA)) {
    BA(A, T);
    var t = d, g = j;
    d = A;
    try {
      e & gt ? Ai(A) : yg(A), wg(A), hg(A);
      var i = Rg(A);
      A.teardown = typeof i == "function" ? i : null, A.version = mg;
    } catch (r) {
      Je(r, A, t, g || A.ctx);
    } finally {
      d = t;
    }
  }
}
function kg() {
  if (XA > 1e3) {
    XA = 0;
    try {
      Un();
    } catch (A) {
      if (se !== null)
        Je(A, se, null);
      else
        throw A;
    }
  }
  XA++;
}
function pg(A) {
  var e = A.length;
  if (e !== 0) {
    kg();
    var t = HA;
    HA = !0;
    try {
      for (var g = 0; g < e; g++) {
        var i = A[g];
        i.f & T || (i.f ^= T);
        var r = [];
        Mg(i, r), ai(r);
      }
    } finally {
      HA = t;
    }
  }
}
function ai(A) {
  var e = A.length;
  if (e !== 0)
    for (var t = 0; t < e; t++) {
      var g = A[t];
      if (!(g.f & (zA | TA)))
        try {
          ce(g) && (Ue(g), g.deps === null && g.first === null && g.nodes_start === null && (g.teardown === null ? _g(g) : g.fn = null));
        } catch (i) {
          Je(i, g, null, g.ctx);
        }
    }
}
function Ei() {
  if (Be = !1, XA > 1001)
    return;
  const A = NA;
  NA = [], pg(A), Be || (XA = 0, se = null);
}
function Ke(A) {
  _e === Yg && (Be || (Be = !0, queueMicrotask(Ei))), se = A;
  for (var e = A; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (t & (Qe | nA)) {
      if (!(t & T)) return;
      e.f ^= T;
    }
  }
  NA.push(e);
}
function Mg(A, e) {
  var t = A.first, g = [];
  A: for (; t !== null; ) {
    var i = t.f, r = (i & nA) !== 0, I = r && (i & T) !== 0, a = t.next;
    if (!I && !(i & TA))
      if (i & Ee) {
        if (r)
          t.f ^= T;
        else
          try {
            ce(t) && Ue(t);
          } catch (Q) {
            Je(Q, t, null, t.ctx);
          }
        var C = t.first;
        if (C !== null) {
          t = C;
          continue;
        }
      } else i & rg && g.push(t);
    if (a === null) {
      let Q = t.parent;
      for (; Q !== null; ) {
        if (A === Q)
          break A;
        var s = Q.next;
        if (s !== null) {
          t = s;
          continue A;
        }
        Q = Q.parent;
      }
    }
    t = a;
  }
  for (var B = 0; B < g.length; B++)
    C = g[B], e.push(C), Mg(C, e);
}
function _(A) {
  var e = _e, t = NA;
  try {
    kg();
    const i = [];
    _e = ii, NA = i, Be = !1, pg(t);
    var g = A?.();
    return ni(), (NA.length > 0 || i.length > 0) && _(), XA = 0, se = null, g;
  } finally {
    _e = e, NA = t;
  }
}
async function Qi() {
  await Promise.resolve(), _();
}
function E(A) {
  var e = A.f, t = (e & gA) !== 0;
  if (t && e & zA) {
    var g = fg(
      /** @type {Derived} */
      A
    );
    return it(
      /** @type {Derived} */
      A
    ), g;
  }
  if (D !== null) {
    oA !== null && oA.includes(A) && Hn();
    var i = D.deps;
    Z === null && i !== null && i[P] === A ? P++ : Z === null ? Z = [A] : Z.push(A), fA !== null && d !== null && d.f & T && !(d.f & nA) && fA.includes(A) && (BA(d, dA), Ke(d));
  } else if (t && /** @type {Derived} */
  A.deps === null)
    for (var r = (
      /** @type {Derived} */
      A
    ), I = r.parent, a = r; I !== null; )
      if (I.f & gA) {
        var C = (
          /** @type {Derived} */
          I
        );
        a = C, I = C.parent;
      } else {
        var s = (
          /** @type {Effect} */
          I
        );
        s.deriveds?.includes(a) || (s.deriveds ??= []).push(a);
        break;
      }
  return t && (r = /** @type {Derived} */
  A, ce(r) && ug(r)), A.v;
}
function qA(A) {
  const e = D;
  try {
    return D = null, A();
  } finally {
    D = e;
  }
}
const li = ~(dA | le | T);
function BA(A, e) {
  A.f = A.f & li | e;
}
function Sg(A, e = !1, t) {
  j = {
    p: j,
    c: null,
    e: null,
    m: !1,
    s: A,
    x: null,
    l: null
  };
}
function Lg(A) {
  const e = j;
  if (e !== null) {
    A !== void 0 && (e.x = A);
    const I = e.e;
    if (I !== null) {
      var t = d, g = D;
      e.e = null;
      try {
        for (var i = 0; i < I.length; i++) {
          var r = I[i];
          CA(r.effect), wA(r.reaction), rt(r.fn);
        }
      } finally {
        CA(t), wA(g);
      }
    }
    j = e.p, e.m = !0;
  }
  return A || /** @type {T} */
  {};
}
let Wt = !1;
function Jg() {
  Wt || (Wt = !0, document.addEventListener(
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
function Ug(A) {
  var e = D, t = d;
  wA(null), CA(null);
  try {
    return A();
  } finally {
    wA(e), CA(t);
  }
}
function ci(A, e, t, g = t) {
  A.addEventListener(e, () => Ug(t));
  const i = A.__on_r;
  i ? A.__on_r = () => {
    i(), g(!0);
  } : A.__on_r = () => g(!0), Jg();
}
const Kg = /* @__PURE__ */ new Set(), At = /* @__PURE__ */ new Set();
function fi(A, e, t, g) {
  function i(r) {
    if (g.capture || oe.call(e, r), !r.cancelBubble)
      return Ug(() => t.call(this, r));
  }
  return A.startsWith("pointer") || A.startsWith("touch") || A === "wheel" ? Ct(() => {
    e.addEventListener(A, i, g);
  }) : e.addEventListener(A, i, g), i;
}
function ui(A, e, t, g, i) {
  var r = { capture: g, passive: i }, I = fi(A, e, t, r);
  (e === document.body || e === window || e === document) && $n(() => {
    e.removeEventListener(A, I, r);
  });
}
function di(A) {
  for (var e = 0; e < A.length; e++)
    Kg.add(A[e]);
  for (var t of At)
    t(A);
}
function oe(A) {
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), g = A.type, i = A.composedPath?.() || [], r = (
    /** @type {null | Element} */
    i[0] || A.target
  ), I = 0, a = A.__root;
  if (a) {
    var C = i.indexOf(a);
    if (C !== -1 && (e === document || e === /** @type {any} */
    window)) {
      A.__root = e;
      return;
    }
    var s = i.indexOf(e);
    if (s === -1)
      return;
    C <= s && (I = C);
  }
  if (r = /** @type {Element} */
  i[I] || A.target, r !== e) {
    be(A, "currentTarget", {
      configurable: !0,
      get() {
        return r || t;
      }
    });
    var B = D, Q = d;
    wA(null), CA(null);
    try {
      for (var l, f = []; r !== null; ) {
        var N = r.assignedSlot || r.parentNode || /** @type {any} */
        r.host || null;
        try {
          var m = r["__" + g];
          if (m !== void 0 && !/** @type {any} */
          r.disabled)
            if (ng(m)) {
              var [K, ...O] = m;
              K.apply(r, [A, ...O]);
            } else
              m.call(r, A);
        } catch (k) {
          l ? f.push(k) : l = k;
        }
        if (A.cancelBubble || N === e || N === null)
          break;
        r = N;
      }
      if (l) {
        for (let k of f)
          queueMicrotask(() => {
            throw k;
          });
        throw l;
      }
    } finally {
      A.__root = e, delete A.currentTarget, wA(B), CA(Q);
    }
  }
}
function xg(A) {
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
function iA(A, e) {
  var t = (e & Nn) !== 0, g = (e & Gn) !== 0, i, r = !A.startsWith("<!>");
  return () => {
    if (M)
      return uA(R, null), R;
    i === void 0 && (i = xg(r ? A : "<!>" + A), t || (i = /** @type {Node} */
    /* @__PURE__ */ bA(i)));
    var I = (
      /** @type {TemplateNode} */
      g ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (t) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ bA(I)
      ), C = (
        /** @type {TemplateNode} */
        I.lastChild
      );
      uA(a, C);
    } else
      uA(I, I);
    return I;
  };
}
function hi() {
  if (M)
    return uA(R, null), R;
  var A = document.createDocumentFragment(), e = document.createComment(""), t = Le();
  return A.append(e, t), uA(e, t), A;
}
function V(A, e) {
  if (M) {
    d.nodes_end = R, WA();
    return;
  }
  A !== null && A.before(
    /** @type {Node} */
    e
  );
}
const wi = ["touchstart", "touchmove"];
function yi(A) {
  return wi.includes(A);
}
function Zg(A, e) {
  return jg(A, e);
}
function _i(A, e) {
  Ve(), e.intro = e.intro ?? !1;
  const t = e.target, g = M, i = R;
  try {
    for (var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ bA(t)
    ); r && (r.nodeType !== 8 || /** @type {Comment} */
    r.data !== Ag); )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ yA(r);
    if (!r)
      throw jA;
    xA(!0), hA(
      /** @type {Comment} */
      r
    ), WA();
    const I = jg(A, { ...e, anchor: r });
    if (R === null || R.nodeType !== 8 || /** @type {Comment} */
    R.data !== tg)
      throw Se(), jA;
    return xA(!1), /**  @type {Exports} */
    I;
  } catch (I) {
    if (I === jA)
      return e.recover === !1 && Kn(), Ve(), zn(t), xA(!1), Zg(A, e);
    throw I;
  } finally {
    xA(g), hA(i);
  }
}
const JA = /* @__PURE__ */ new Map();
function jg(A, { target: e, anchor: t, props: g = {}, events: i, context: r, intro: I = !0 }) {
  Ve();
  var a = /* @__PURE__ */ new Set(), C = (Q) => {
    for (var l = 0; l < Q.length; l++) {
      var f = Q[l];
      if (!a.has(f)) {
        a.add(f);
        var N = yi(f);
        e.addEventListener(f, oe, { passive: N });
        var m = JA.get(f);
        m === void 0 ? (document.addEventListener(f, oe, { passive: N }), JA.set(f, 1)) : JA.set(f, m + 1);
      }
    }
  };
  C(bn(Kg)), At.add(C);
  var s = void 0, B = dg(() => {
    var Q = t ?? e.appendChild(Le());
    return me(() => {
      if (r) {
        Sg({});
        var l = (
          /** @type {ComponentContext} */
          j
        );
        l.c = r;
      }
      i && (g.$$events = i), M && uA(
        /** @type {TemplateNode} */
        Q,
        null
      ), s = A(Q, g) || {}, M && (d.nodes_end = R), r && Lg();
    }), () => {
      for (var l of a) {
        e.removeEventListener(l, oe);
        var f = (
          /** @type {number} */
          JA.get(l)
        );
        --f === 0 ? (document.removeEventListener(l, oe), JA.delete(l)) : JA.set(l, f);
      }
      At.delete(C), et.delete(s), Q !== t && Q.parentNode?.removeChild(Q);
    };
  });
  return et.set(s, B), s;
}
let et = /* @__PURE__ */ new WeakMap();
function vi(A) {
  const e = et.get(A);
  e && e();
}
function cA(A, e, t = !1) {
  M && WA();
  var g = A, i = null, r = null, I = X, a = t ? nt : 0, C = !1;
  const s = (Q, l = !0) => {
    C = !0, B(l, Q);
  }, B = (Q, l) => {
    if (I === (I = Q)) return;
    let f = !1;
    if (M) {
      const N = (
        /** @type {Comment} */
        g.data === eg
      );
      !!I === N && (g = qn(), hA(g), xA(!1), f = !0);
    }
    I ? (i ? Ht(i) : l && (i = me(() => l(g))), r && jt(r, () => {
      r = null;
    })) : (r ? Ht(r) : l && (r = me(() => l(g))), i && jt(i, () => {
      i = null;
    })), f && xA(!0);
  };
  ot(() => {
    C = !1, e(s), C || B(null, null);
  }, a), M && (g = R);
}
function UA(A, e, t, g, i) {
  var r = A, I = "", a;
  ot(() => {
    if (I === (I = e() ?? "")) {
      M && WA();
      return;
    }
    a !== void 0 && (mA(a), a = void 0), I !== "" && (a = me(() => {
      if (M) {
        R.data;
        for (var C = WA(), s = C; C !== null && (C.nodeType !== 8 || /** @type {Comment} */
        C.data !== ""); )
          s = C, C = /** @type {TemplateNode} */
          /* @__PURE__ */ yA(C);
        if (C === null)
          throw Se(), jA;
        uA(R, s), r = hA(C);
        return;
      }
      var B = I + "", Q = xg(B);
      uA(
        /** @type {TemplateNode} */
        /* @__PURE__ */ bA(Q),
        /** @type {TemplateNode} */
        Q.lastChild
      ), r.before(Q);
    }));
  });
}
function Di(A, e, t, g, i) {
  M && WA();
  var r = e.$$slots?.[t], I = !1;
  r === !0 && (r = e.children, I = !0), r === void 0 || r(A, I ? () => g : g);
}
function Ni(A, e) {
  Ct(() => {
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
      const i = document.createElement("style");
      i.id = e.hash, i.textContent = e.code, g.appendChild(i);
    }
  });
}
function qt(A) {
  if (M) {
    var e = !1, t = () => {
      if (!e) {
        if (e = !0, A.hasAttribute("value")) {
          var g = A.value;
          eA(A, "value", null), A.value = g;
        }
        if (A.hasAttribute("checked")) {
          var i = A.checked;
          eA(A, "checked", null), A.checked = i;
        }
      }
    };
    A.__on_r = t, gi(t), Jg();
  }
}
function Gi(A, e) {
  var t = A.__attributes ??= {};
  t.value === (t.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when its `0`
  A.value === e && (e !== 0 || A.nodeName !== "PROGRESS") || (A.value = e);
}
function eA(A, e, t, g) {
  var i = A.__attributes ??= {};
  M && (i[e] = A.getAttribute(e), e === "src" || e === "srcset" || e === "href" && A.nodeName === "LINK") || i[e] !== (i[e] = t) && (e === "style" && "__styles" in A && (A.__styles = {}), e === "loading" && (A[pn] = t), t == null ? A.removeAttribute(e) : typeof t != "string" && bi(A).includes(e) ? A[e] = t : A.setAttribute(e, t));
}
var zt = /* @__PURE__ */ new Map();
function bi(A) {
  var e = zt.get(A.nodeName);
  if (e) return e;
  zt.set(A.nodeName, e = []);
  for (var t, g = qe(A), i = Element.prototype; i !== g; ) {
    t = Yn(g);
    for (var r in t)
      t[r].set && e.push(r);
    g = qe(g);
  }
  return e;
}
function Yi(A, e, t) {
  if (t) {
    if (A.classList.contains(e)) return;
    A.classList.add(e);
  } else {
    if (!A.classList.contains(e)) return;
    A.classList.remove(e);
  }
}
function mi(A, e, t = e) {
  ci(A, "change", (g) => {
    var i = g ? A.defaultChecked : A.checked;
    t(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (M && A.defaultChecked !== A.checked || // If defaultChecked is set, then checked == defaultChecked
  qA(e) == null) && t(A.checked), It(() => {
    var g = e();
    A.checked = !!g;
  });
}
function Vt(A, e) {
  return A === e || A?.[Ce] === e;
}
function Pt(A = {}, e, t, g) {
  return rt(() => {
    var i, r;
    return It(() => {
      i = r, r = [], qA(() => {
        A !== t(...r) && (e(A, ...r), i && Vt(t(...i), A) && e(null, ...i));
      });
    }), () => {
      Ct(() => {
        r && Vt(t(...r), A) && e(null, ...r);
      });
    };
  }), A;
}
function Hg(A) {
  j === null && bg(), Pe(() => {
    const e = qA(A);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Fi(A) {
  j === null && bg(), Hg(() => () => qA(A));
}
let he = !1;
function Ri(A) {
  var e = he;
  try {
    return he = !1, [A(), he];
  } finally {
    he = e;
  }
}
function ki(A) {
  for (var e = d, t = d; e !== null && !(e.f & (nA | Qe)); )
    e = e.parent;
  try {
    return CA(e), A();
  } finally {
    CA(t);
  }
}
function Y(A, e, t, g) {
  var i = (t & yn) !== 0, r = !sg, I = (t & vn) !== 0, a = (t & Dn) !== 0, C = !1, s;
  I ? [s, C] = Ri(() => (
    /** @type {V} */
    A[e]
  )) : s = /** @type {V} */
  A[e];
  var B = Ce in A || og in A, Q = GA(A, e)?.set ?? (B && I && e in A ? (J) => A[e] = J : void 0), l = (
    /** @type {V} */
    g
  ), f = !0, N = !1, m = () => (N = !0, f && (f = !1, a ? l = qA(
    /** @type {() => V} */
    g
  ) : l = /** @type {V} */
  g), l);
  s === void 0 && g !== void 0 && (Q && r && xn(), s = m(), Q && Q(s));
  var K;
  if (K = () => {
    var J = (
      /** @type {V} */
      A[e]
    );
    return J === void 0 ? m() : (f = !0, N = !1, J);
  }, !(t & _n))
    return K;
  if (Q) {
    var O = A.$$legacy;
    return function(J, U) {
      return arguments.length > 0 ? ((!U || O || C) && Q(U ? K() : J), J) : K();
    };
  }
  var k = !1, _A = !1, sA = /* @__PURE__ */ ag(s), x = ki(
    () => /* @__PURE__ */ Ie(() => {
      var J = K(), U = E(sA);
      return k ? (k = !1, _A = !0, U) : (_A = !1, sA.v = J);
    })
  );
  return i || (x.equals = Bg), function(J, U) {
    if (arguments.length > 0) {
      const $ = U ? E(x) : I ? tA(J) : J;
      return x.equals($) || (k = !0, F(sA, $), N && l !== void 0 && (l = $), qA(() => E(x))), J;
    }
    return E(x);
  };
}
function pi(A) {
  return new Mi(A);
}
class Mi {
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
    var t = /* @__PURE__ */ new Map(), g = (r, I) => {
      var a = /* @__PURE__ */ ag(I);
      return t.set(r, a), a;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(r, I) {
          return E(t.get(I) ?? g(I, Reflect.get(r, I)));
        },
        has(r, I) {
          return I === og ? !0 : (E(t.get(I) ?? g(I, Reflect.get(r, I))), Reflect.has(r, I));
        },
        set(r, I, a) {
          return F(t.get(I) ?? g(I, a), a), Reflect.set(r, I, a);
        }
      }
    );
    this.#A = (e.hydrate ? _i : Zg)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && _(), this.#e = i.$$events;
    for (const r of Object.keys(this.#A))
      r === "$set" || r === "$destroy" || r === "$on" || be(this, r, {
        get() {
          return this.#A[r];
        },
        /** @param {any} value */
        set(I) {
          this.#A[r] = I;
        },
        enumerable: !0
      });
    this.#A.$set = /** @param {Record<string, any>} next */
    (r) => {
      Object.assign(i, r);
    }, this.#A.$destroy = () => {
      vi(this.#A);
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
    const g = (...i) => t.call(this, ...i);
    return this.#e[e].push(g), () => {
      this.#e[e] = this.#e[e].filter(
        /** @param {any} fn */
        (i) => i !== g
      );
    };
  }
  $destroy() {
    this.#A.$destroy();
  }
}
let Xg;
typeof HTMLElement == "function" && (Xg = class extends HTMLElement {
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
        return (i) => {
          const r = document.createElement("slot");
          g !== "default" && (r.name = g), V(i, r);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, t = Si(this);
      for (const g of this.$$s)
        g in t && (g === "default" && !this.$$d.children ? (this.$$d.children = A(g), e.default = !0) : e[g] = A(g));
      for (const g of this.attributes) {
        const i = this.$$g_p(g.name);
        i in this.$$d || (this.$$d[i] = ve(i, g.value, this.$$p_d, "toProp"));
      }
      for (const g in this.$$p_d)
        !(g in this.$$d) && this[g] !== void 0 && (this.$$d[g] = this[g], delete this[g]);
      this.$$c = pi({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = dg(() => {
        It(() => {
          this.$$r = !0;
          for (const g of Ge(this.$$c)) {
            if (!this.$$p_d[g]?.reflect) continue;
            this.$$d[g] = this.$$c[g];
            const i = ve(
              g,
              this.$$d[g],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[g].attribute || g) : this.setAttribute(this.$$p_d[g].attribute || g, i);
          }
          this.$$r = !1;
        });
      });
      for (const g in this.$$l)
        for (const i of this.$$l[g]) {
          const r = this.$$c.$on(g, i);
          this.$$l_u.set(i, r);
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
    this.$$r || (A = this.$$g_p(A), this.$$d[A] = ve(A, t, this.$$p_d, "toProp"), this.$$c?.$set({ [A]: this.$$d[A] }));
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
    return Ge(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === A || !this.$$p_d[e].attribute && e.toLowerCase() === A
    ) || A;
  }
});
function ve(A, e, t, g) {
  const i = t[A]?.type;
  if (e = i === "Boolean" && typeof e != "boolean" ? e != null : e, !g || !t[A])
    return e;
  if (g === "toAttribute")
    switch (i) {
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
    switch (i) {
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
function Si(A) {
  const e = {};
  return A.childNodes.forEach((t) => {
    e[
      /** @type {Element} node */
      t.slot || "default"
    ] = !0;
  }), e;
}
function Li(A, e, t, g, i, r) {
  let I = class extends Xg {
    constructor() {
      super(A, t, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Ge(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return Ge(e).forEach((a) => {
    be(I.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(C) {
        C = ve(a, C, e), this.$$d[a] = C;
        var s = this.$$c;
        if (s) {
          var B = GA(s, a)?.get;
          B ? s[a] = C : s.$set({ [a]: C });
        }
      }
    });
  }), g.forEach((a) => {
    be(I.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), A.element = /** @type {any} */
  I, I;
}
const Tg = new TextEncoder();
function Ji(A) {
  return [...new Uint8Array(A)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function Ui(A, e = "SHA-256", t = 1e5) {
  const g = Date.now().toString(16);
  A || (A = Math.round(Math.random() * t));
  const i = await Wg(g, A, e);
  return {
    algorithm: e,
    challenge: i,
    salt: g,
    signature: ""
  };
}
async function Wg(A, e, t) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Ji(
    await crypto.subtle.digest(
      t.toUpperCase(),
      Tg.encode(A + e)
    )
  );
}
function Ki(A, e, t = "SHA-256", g = 1e6, i = 0) {
  const r = new AbortController(), I = Date.now();
  return {
    promise: (async () => {
      for (let C = i; C <= g; C += 1) {
        if (r.signal.aborted)
          return null;
        if (await Wg(e, C, t) === A)
          return {
            number: C,
            took: Date.now() - I
          };
      }
      return null;
    })(),
    controller: r
  };
}
function xi() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Zi(A) {
  const e = atob(A), t = new Uint8Array(e.length);
  for (let g = 0; g < e.length; g++)
    t[g] = e.charCodeAt(g);
  return t;
}
function ji(A, e = 12) {
  const t = new Uint8Array(e);
  for (let g = 0; g < e; g++)
    t[g] = A % 256, A = Math.floor(A / 256);
  return t;
}
async function Hi(A, e = "", t = 1e6, g = 0) {
  const i = "AES-GCM", r = new AbortController(), I = Date.now(), a = async () => {
    for (let B = g; B <= t; B += 1) {
      if (r.signal.aborted || !C || !s)
        return null;
      try {
        const Q = await crypto.subtle.decrypt(
          {
            name: i,
            iv: ji(B)
          },
          C,
          s
        );
        if (Q)
          return {
            clearText: new TextDecoder().decode(Q),
            took: Date.now() - I
          };
      } catch {
      }
    }
    return null;
  };
  let C = null, s = null;
  try {
    s = Zi(A);
    const B = await crypto.subtle.digest(
      "SHA-256",
      Tg.encode(e)
    );
    C = await crypto.subtle.importKey(
      "raw",
      B,
      i,
      !1,
      ["decrypt"]
    );
  } catch {
    return {
      promise: Promise.reject(),
      controller: r
    };
  }
  return {
    promise: a(),
    controller: r
  };
}
var w = /* @__PURE__ */ ((A) => (A.ERROR = "error", A.VERIFIED = "verified", A.VERIFYING = "verifying", A.UNVERIFIED = "unverified", A.EXPIRED = "expired", A))(w || {});
const Xi = "data:application/wasm;base64,AGFzbQEAAAABwAEeYAJ/fwBgAn9/AX9gAX8AYAN/f38Bf2ADf39/AGAAAX9gAW8Bf2AFf39/f38AYAR/f39/AX9gAX8Bf2AEf39/fwBgAn9/AW9gBG9/f28AYAJ/bwBgAABgBn9/f39/fwBgBX9/f39/AX9gAW8AYAFvAXxgAm9vAW9gAAFvYAN/f38Bb2AGf39/f39/AX9gBX9/fn9/AGAEf35/fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgA39/bwAC4woYFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMSX193YmluZGdlbl9jYl9kcm9wAAYWLi9kZXRlY3Rpb25fd2FzbV9iZy5qcxVfX3diaW5kZ2VuX3N0cmluZ19uZXcACxYuL2RldGVjdGlvbl93YXNtX2JnLmpzKF9fd2JnX2luc3RhbmNlb2ZfV2luZG93X2RlZjczZWEwOTU1ZmM1NjkABhYuL2RldGVjdGlvbl93YXNtX2JnLmpzH19fd2JnX2RvY3VtZW50X2QyNDk0MDBiZDdiZDk5NmQABhYuL2RldGVjdGlvbl93YXNtX2JnLmpzGl9fd2JnX2xvZ19jMjIyODE5YTQxZTA2M2QzABEWLi9kZXRlY3Rpb25fd2FzbV9iZy5qcx5fX3diZ19jbGllbnRYXzVlYjM4MGE1ZjFmZWM2ZmQABhYuL2RldGVjdGlvbl93YXNtX2JnLmpzHl9fd2JnX2NsaWVudFlfZDhiOWM3ZjBjNGUyZTY3NwAGFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMgX193YmdfdGltZVN0YW1wXzc3ZjRlYzhiNjY2OTI1M2MAEhYuL2RldGVjdGlvbl93YXNtX2JnLmpzJ19fd2JnX2FkZEV2ZW50TGlzdGVuZXJfOTBlNTUzZmRjZTI1NDQyMQAMFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMqX193YmdfcmVtb3ZlRXZlbnRMaXN0ZW5lcl8wNTZkZmU4YzNkNmM1OGY5AAwWLi9kZXRlY3Rpb25fd2FzbV9iZy5qcyBfX3diZ19uZXdub2FyZ3NfMTA1ZWQ0NzE0NzVhYWY1MAALFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMbX193YmdfY2FsbF82NzJhNGQyMTYzNGQ0YTI0ABMWLi9kZXRlY3Rpb25fd2FzbV9iZy5qcxdfX3diaW5kZ2VuX2lzX3VuZGVmaW5lZAAGFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMyX193Ymdfc3RhdGljX2FjY2Vzc29yX0dMT0JBTF9USElTXzU2NTc4YmU3ZTlmODMyYjAABRYuL2RldGVjdGlvbl93YXNtX2JnLmpzK19fd2JnX3N0YXRpY19hY2Nlc3Nvcl9TRUxGXzM3YzVkNDE4ZTRiZjU4MTkABRYuL2RldGVjdGlvbl93YXNtX2JnLmpzLV9fd2JnX3N0YXRpY19hY2Nlc3Nvcl9XSU5ET1dfNWRlMzcwNDNhOTFhOWM0MAAFFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMtX193Ymdfc3RhdGljX2FjY2Vzc29yX0dMT0JBTF84OGE5MDJkMTNhNTU3ZDA3AAUWLi9kZXRlY3Rpb25fd2FzbV9iZy5qcxpfX3diZ19uZXdfOGE2ZjIzOGE2ZWNlODZlYQAUFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMcX193Ymdfc3RhY2tfMGVkNzVkNjg1NzViMGYzYwANFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMcX193YmdfZXJyb3JfNzUzNGI4ZTlhMzZmMWFiNAAAFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMXX193YmluZGdlbl9kZWJ1Z19zdHJpbmcADRYuL2RldGVjdGlvbl93YXNtX2JnLmpzEF9fd2JpbmRnZW5fdGhyb3cAABYuL2RldGVjdGlvbl93YXNtX2JnLmpzHF9fd2JpbmRnZW5fY2xvc3VyZV93cmFwcGVyMzQAFRYuL2RldGVjdGlvbl93YXNtX2JnLmpzH19fd2JpbmRnZW5faW5pdF9leHRlcm5yZWZfdGFibGUADgN5eAkDAgMAAAABBQMAAgEBAA8BAAUEBwQABQcAAAAKBAEBBwQCDwQAAAQEAwIDAAQBAAkCBQIIAgACAggCAAIBFgcQFxkbAgQKAwIEAQICAgICAgECCAMEAgEBAx0BAQEAAAEAAQEJAAQBAQIBAAIOAQABAQADAgAABQQJAnABQ0NvAIABBQMBABEGCQF/AUGAgMAACwelAg4GbWVtb3J5AgATX193YmdfZGV0ZWN0b3JfZnJlZQAyDGRldGVjdG9yX25ldwBKFmRldGVjdG9yX2VuZF9k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xKHAADYCAEHUocAAQcyhwAA2AgBB4KHAAEHUocAANgIAQdyhwABB1KHAADYCAEHoocAAQdyhwAA2AgBB5KHAAEHcocAANgIAQfChwABB5KHAADYCAEHsocAAQeShwAA2AgBB+KHAAEHsocAANgIAQfShwABB7KHAADYCAEGAosAAQfShwAA2AgBB/KHAAEH0ocAANgIAQYiiwABB/KHAADYCAEGEosAAQfyhwAA2AgBBkKLAAEGEosAANgIAQYyiwABBhKLAADYCAEGYosAAQYyiwAA2AgBBoKLAAEGUosAANgIAQZSiwABBjKLAADYCAEGoosAAQZyiwAA2AgBBnKLAAEGUosAANgIAQbCiwABBpKLAADYCAEGkosAAQZyiwAA2AgBBuKLAAEGsosAANgIAQayiwABBpKLAADYCAEHAosAAQbSiwAA2AgBBtKLAAEGsosAANgIAQciiwABBvKLAADYCAEG8osAAQbSiwAA2AgBB0KLAAEHEosAANgIAQcSiwABBvKLAADYCAEHYosAAQcyiwAA2AgBBzKLAAEHEosAANgIAQeCiwABB1KLAADYCAEHUosAAQcyiwAA2AgBB6KLAAEHcosAANgIAQdyiwABB1KLAADYCAEHwosAAQeSiwAA2AgBB5KLAAEHcosAANgIAQfiiwABB7KLAADYCAEHsosAAQeSiwAA2AgBBgKPAAEH0osAANgIAQfSiwABB7KLAADYCAEGIo8AAQfyiwAA2AgBB/KLAAEH0osAANgIAQZCjwABBhKPAADYCAEGEo8AAQfyiwAA2AgBBqKPAACABQQ9qQXhxIgBBCGsiAjYCAEGMo8AAQYSjwAA2AgBBoKPAACAEQShrIgMgASAAa2pBCGoiADYCACACIABBAXI2AgQgASADakEoNgIEQbSjwABBgICAATYCAAwICyACIANJIAEgAk1yDQAgACgCDCIDQQFxDQAgA0EBdiAGRg0DC0G4o8AAQbijwAAoAgAiACABIAAgAUkbNgIAIAEgBGohA0H8oMAAIQACQAJAA0AgAyAAKAIAIgdHBEAgACgCCCIADQEMAgsLIAAoAgwiA0EBcQ0AIANBAXYgBkYNAQtB/KDAACEAA0ACQCACIAAoAgAiA08EQCACIAMgACgCBGoiB0kNAQsgACgCCCEADAELC0Goo8AAIAFBD2pBeHEiAEEI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RQRAIABBATYCCCAAQQA2AgRBAAwCC0HZn8AALQAAGiACQQEQdSIDBEAgACADNgIIIAAgATYCBEEADAILIAAgAjYCCCAAQQE2AgRBAQwBCyAAQQA2AgRBAQs2AgAL8wICA38BfiMAQSBrIgIkAAJAAkAgAUUEQCACQQhqIQMjAEEgayIBJAACQAJAIAAEQCAAQQhrIgQoAgBBAUcNASABQRxqIABBGGooAgA2AgAgAUEUaiAAQRBqKQIANwIAIAFBDGogAEEIaikCADcCACAAKQIAIQUgBEEANgIAIAEgBTcCBAJAIARBf0YNACAAQQRrIgAgACgCAEEBayIANgIAIAANACAEQSRBBBB+CyADIAEpAgg3AgAgA0EQaiABQRhqKQIANwIAIANBCGogAUEQaikCADcCACABQSBqJAAMAgsQhQEAC0HshcAAQT8QgwEACyADECMgAigCDCIAQYQBTwRAIAAQSwsgAigCFARAIAJBFGoQagsgAigCCCIAIAAoAgBBAWsiADYCACAADQEgAkEIahBSDAELIABFDQEgAiAAQQhrIgA2AgggACAAKAIAQQFrIgA2AgAgAA0AIAJBCGoQOgsgAkEgaiQADwsQhQEAC5YBAQR/IwBBIGsiAiQAQQggACgCACIEQQF0IgMgA0EITRsiA0EASARAQQBBACABEGEACyACIAQEfyACIAQ2AhwgAiAAKAIENgIUQQEFIAULNgIYIAJBCGogAyACQRRqEDUgAigCCEEBRgRAIAIoAgwgAigCECABEGEACyACKAIMIQEgACADNgIAIAAgATYCBCACQSBqJAALhgEBAX8gAAJ/AkACfwJAIAJBAE4EQCADKAIEBEAgAygCCCIEBEAgAygCACAEIAEgAhBrDAQLCyACRQ0BQdmfwAAtAAAaIAIgARB1DAILIABBADYCBAwCCyABCyIDBEAgACACNgIIIAAgAzYCBEEADAILIAAgAjYCCCAAIAE2AgQLQQELNgIAC4MBAQF/AkAgAUEATgRAAn8gAigCBARAIAIoAggiAwRAIAIoAgAgA0EBIAEQawwCCwtBASABRQ0AGkHZn8AALQAAGiABQQEQdQsiAgRAIAAgATYCCCAAIAI2AgQgAEEANgIADwsgACABNgIIIABBATYCBAwBCyAAQQA2AgQLIABBATYCAAuUAQEBfyMAQUBqIgIk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QGsgBygCADYCACAAIAApAyA3AzggAEEIaiAFQcSNwAAQPCAAKAIIIAAoAgwQEyAGEIQBIAJBhAFPBEAgAhBLCyAAQeAAaiQADAELQfyNwABBNyAAQSBqQeyNwABBoI/AABA4AAsLBAAQLwsLvB8FAEGIgMAAC+ENAQAAAAEAAAACAAAAAwAAAE9uY2UgaW5zdGFuY2UgaGFzIHByZXZpb3VzbHkgYmVlbiBwb2lzb25lZAAAGAAQACoAAABvbmUtdGltZSBpbml0aWFsaXphdGlvbiBtYXkgbm90IGJlIHBlcmZvcm1lZCByZWN1cnNpdmVseUwAEAA4AAAAL1VzZXJzL2VyZnVyLy5ydXN0dXAvdG9vbGNoYWlucy9uaWdodGx5LWFhcmNoNjQtYXBwbGUtZGFyd2luL2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvc3RkL3NyYy9zeW5jL3BvaXNvbi9vbmNlLnJzAAAAjAAQAHUAAACbAAAAMgAAAC9Vc2Vycy9lcmZ1ci8ucnVzdHVwL3Rvb2xjaGFpbnMvbmlnaHRseS1hYXJjaDY0LWFwcGxlLWRhcndpbi9saWIvcnVzdGxpYi9zcmMvcnVzdC9saWJyYXJ5L2NvcmUvc3JjL2NlbGwucnMAABQBEABqAAAACQUAAA4AAABzcmMvYW5vbWFseS5ycwAAkAEQAA4AAAA1AAAAFQAAAGNsb3N1cmUgaW52b2tlZCByZWN1cnNpdmVseSBvciBhZnRlciBiZWluZyBkcm9wcGVkL1VzZXJzL2VyZnVyLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2YvY29uc29sZV9lcnJvcl9wYW5pY19ob29rLTAuMS43L3NyYy9saWIucnMAAADiARAAawAAAJUAAAAOAAAACgAAAAQAAAAEAAAACwAAAC9Vc2Vycy9lcmZ1ci8ucnVzdHVwL3Rvb2xjaGFpbnMvbmlnaHRseS1hYXJjaDY0LWFwcGxlLWRhcndpbi9saWIvcnVzdGxpYi9zcmMvcnVzdC9saWJyYXJ5L2FsbG9jL3NyYy9zbGljZS5yc3ACEABsAAAAogAAABkAAABhdHRlbXB0ZWQgdG8gdGFrZSBvd25lcnNoaXAgb2YgUnVzdCB2YWx1ZSB3aGlsZSBpdCB3YXMgYm9ycm93ZWREZXRlY3Rvcjo6bmV3W3dhc21dIAA4AxAABwAAAHNyYy9saWIucnNubyBnbG9iYWwgYHdpbmRvd2AgZXhpc3RzAEgDEAAKAAAAHgAAACgAAABzaG91bGQgaGF2ZSBhIGRvY3VtZW50IG9uIHdpbmRvd0gDEAAKAAAAHwAAACoAAAAMAAAAQAAAAAgAAAANAAAADgAAAG1vdXNlbW92ZWZhaWxlZCB0byBhZGQgZXZlbnQgbGlzdGVuZXIAAABIAxAACgAAADwAAAAOAAAATW91c2UgbW92ZWQgdG86IHg9LCB5PQAA+AMQABIAAAAKBBAABAAAAEFub21hbHkgZGV0ZWN0ZWQhAAAASAMQAAoAAAAxAAAAJwAAAGZhaWxlZCB0byByZW1vdmUgZXZlbnQgbGlzdGVuZXIASAMQAAoAAABJAAAAEgAAAERldGVjdG9yOjpkcm9wIC0gcmVtb3ZlZCBldmVudCBsaXN0ZW5lckRldGVjdG9yOjppc19kZXRlY3RlZEgDEAAKAAAAUQAAACAAAAByZXR1cm4gdGhpcwCIDxAAlA8QAKAPEACsDxAATGF6eSBpbnN0YW5jZSBoYXMgcHJldmlvdXNseSBiZWVuIHBvaXNvbmVkAADcBBAAKgAAAC9Vc2Vycy9lcmZ1ci8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmL29uY2VfY2VsbC0xLjIwLjMvc3JjL2xpYi5ycwAAABAFEABdAAAACAMAABkAAAByZWVudHJhbnQgaW5pdAAAgAUQAA4AAAAQBRAAXQAAAHoCAAANAAAAL1VzZXJzL2VyZnVyLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2Yvd2FzbS1iaW5kZ2VuLTAuMi4xMDAvc3JjL2NvbnZlcnQvc2xpY2VzLnJzqAUQAGwAAAAkAQAADgAAAGNsb3N1cmUgaW52b2tlZCByZWN1cnNpdmVseSBvciBhZnRlciBiZWluZyBkcm9wcGVkL1VzZXJzL2VyZnVyLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2Yvd2FzbS1iaW5kZ2VuLTAuMi4xMDAvc3JjL2NvbnZlcnQvc2xpY2VzLnJzAABWBhAAbAAAACQBAAAOAAAAIAAAAAwAAAAEAAAAIQAAACIAAAAjAEH0jcAAC/0MAQAAACQAAABhIERpc3BsYXkgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IgdW5leHBlY3RlZGx5L1VzZXJzL2VyZnVyLy5ydXN0dXAvdG9vbGNoYWlucy9uaWdodGx5LWFhcmNoNjQtYXBwbGUtZGFyd2luL2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvYWxsb2Mvc3JjL3N0cmluZy5yczMHEABtAAAA4QoAAA4AAABFcnJvcgAAADMHEABtAAAAjQUAABsAAAAvVXNlcnMvZXJmdXIvLnJ1c3R1cC90b29sY2hhaW5zL25pZ2h0bHktYWFyY2g2NC1hcHBsZS1kYXJ3aW4vbGliL3J1c3RsaWIvc3JjL3J1c3QvbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5ycwAAyAcQAG4AAAAqAgAAEQAAAAoKU3RhY2s6CgoKCkpzVmFsdWUoKQAAAFQIEAAIAAAAXAgQAAEAAABMYXp5IGluc3RhbmNlIGhhcyBwcmV2aW91c2x5IGJlZW4gcG9pc29uZWQAAHAIEAAqAAAAL1VzZXJzL2VyZnVyLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2Yvb25jZV9jZWxsLTEuMjAuMy9zcmMvbGliLnJzAAAApAgQAF0AAAAIAwAAGQAAAHJlZW50cmFudCBpbml0AAAUCRAADgAAAKQIEABdAAAAegIAAA0AAAAvVXNlcnMvZXJmdXIvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zi93YXNtLWJpbmRnZW4tMC4yLjEwMC9zcmMvY29udmVydC9zbGljZXMucnNudWxsIHBvaW50ZXIgcGFzc2VkIHRvIHJ1c3RyZWN1cnNpdmUgdXNlIG9mIGFuIG9iamVjdCBkZXRlY3RlZCB3aGljaCB3b3VsZCBsZWFkIHRvIHVuc2FmZSBhbGlhc2luZyBpbiBydXN0AAA8CRAAbAAAAOgAAAABAAAAbGlicmFyeS9zdGQvc3JjL3Bhbmlja2luZy5ycy9ydXN0Yy82MTdhYWQ4YzJlODc4M2Y2ZGY4ZTVkMWY4YmIxZTRiY2RjNzBhYTdiL2xpYnJhcnkvYWxsb2Mvc3JjL3N0cmluZy5ycwBAChAASwAAAI0FAAAbAAAAL3J1c3RjLzYxN2FhZDhjMmU4NzgzZjZkZjhlNWQxZjhiYjFlNGJjZGM3MGFhN2IvbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc5wKEABMAAAAKgIAABEAAAA6AAAAAQAAAAAAAAD4ChAAAQAAAPgKEAABAAAAKgAAAAwAAAAEAAAAKwAAACwAAAAtAAAAL3J1c3QvZGVwcy9kbG1hbGxvYy0wLjIuNy9zcmMvZGxtYWxsb2MucnNhc3NlcnRpb24gZmFpbGVkOiBwc2l6ZSA+PSBzaXplICsgbWluX292ZXJoZWFkACwLEAApAAAAqAQAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBwc2l6ZSA8PSBzaXplICsgbWF4X292ZXJoZWFkAAAsCxAAKQAAAK4EAAANAAAAcGFuaWNrZWQgYXQgOgptZW1vcnkgYWxsb2NhdGlvbiBvZiAgYnl0ZXMgZmFpbGVk4gsQABUAAAD3CxAADQAAAGxpYnJhcnkvc3RkL3NyYy9hbGxvYy5ycxQMEAAYAAAAYwEAAAkAAABjYW5ub3QgbW9kaWZ5IHRoZSBwYW5pYyBob29rIGZyb20gYSBwYW5pY2tpbmcgdGhyZWFkPAwQADQAAAAkChAAHAAAAI4AAAAJAAAAKgAAAAwAAAAEAAAALgAAAAAAAAAIAAAABAAAAC8AAAAAAAAACAAAAAQAAAAwAAAAMQAAADIAAAAzAAAANAAAABAAAAAEAAAANQAAADYAAAA3AAAAOAAAAEVycm9yAAAAOQAAAAwAAAAEAAAAOgAAADsAAAA8AAAAY2FwYWNpdHkgb3ZlcmZsb3cAAAAADRAAEQAAAGxpYnJhcnkvYWxsb2Mvc3JjL3Jhd192ZWMucnMcDRAAHAAAACoCAAARAAAAbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAEgNEAAbAAAA6gEAABcAQfyawAALgAQBAAAAPQAAAGEgZm9ybWF0dGluZyB0cmFpdCBpbXBsZW1lbnRhdGlvbiByZXR1cm5lZCBhbiBlcnJvciB3aGVuIHRoZSB1bmRlcmx5aW5nIHN0cmVhbSBkaWQgbm90bGlicmFyeS9hbGxvYy9zcmMvZm10LnJzAADaDRAAGAAAAIoCAAAOAAAASA0QABsAAACNBQAAGwAAAAEAAAAAAAAAQm9ycm93RXJyb3JCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAA1DhAAEgAAAGFscmVhZHkgbXV0YWJseSBib3Jyb3dlZDogAABQDhAAGgAAAGNhbGxlZCBgT3B0aW9uOjp1bndyYXAoKWAgb24gYSBgTm9uZWAgdmFsdWU6IAAAAAEAAAAAAAAAnw4QAAIAAAAwMDAxMDIwMzA0MDUwNjA3MDgwOTEwMTExMjEzMTQxNTE2MTcxODE5MjAyMTIyMjMyNDI1MjYyNzI4MjkzMDMxMzIzMzM0MzUzNjM3MzgzOTQwNDE0MjQzNDQ0NTQ2NDc0ODQ5NTA1MTUyNTM1NDU1NTY1NzU4NTk2MDYxNjI2MzY0NjU2NjY3Njg2OTcwNzE3MjczNzQ3NTc2Nzc3ODc5ODA4MTgyODM4NDg1ODY4Nzg4ODk5MDkxOTI5Mzk0OTU5Njk3OTg5OQBBhJ/AAAsxDwAAAAIAAAAAAAAAEAAAAAIAAAAAAAAAEQAAAAIAAAAAAAAAEgAAAAIAAAAAAAAAEwBB0J/AAAsBJgB4CXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMlMS44Ny4wLW5pZ2h0bHkgKDYxN2FhZDhjMiAyMDI1LTAyLTI0KQZ3YWxydXMGMC4yMy4zDHdhc20tYmluZGdlbgcwLjIuMTAwAGsPdGFyZ2V0X2ZlYXR1cmVzBisPbXV0YWJsZS1nbG9iYWxzKxNub250cmFwcGluZy1mcHRvaW50KwtidWxrLW1lbW9yeSsIc2lnbi1leHQrD3JlZmVyZW5jZS10eXBlcysKbXVsdGl2YWx1ZQ==", Ti = async (A = {}, e) => {
  let t;
  if (e.startsWith("data:")) {
    const g = e.replace(/^data:.*?base64,/, "");
    let i;
    if (typeof Buffer == "function" && typeof Buffer.from == "function")
      i = Buffer.from(g, "base64");
    else if (typeof atob == "function") {
      const r = atob(g);
      i = new Uint8Array(r.length);
      for (let I = 0; I < r.length; I++)
        i[I] = r.charCodeAt(I);
    } else
      throw new Error("Cannot decode base64-encoded data URL");
    t = await WebAssembly.instantiate(i, A);
  } else {
    const g = await fetch(e), i = g.headers.get("Content-Type") || "";
    if ("instantiateStreaming" in WebAssembly && i.startsWith("application/wasm"))
      t = await WebAssembly.instantiateStreaming(g, A);
    else {
      const r = await g.arrayBuffer();
      t = await WebAssembly.instantiate(r, A);
    }
  }
  return t.instance.exports;
};
let p;
function Wi(A) {
  p = A;
}
const qi = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
let qg = new qi("utf-8", { ignoreBOM: !0, fatal: !0 });
qg.decode();
let we = null;
function De() {
  return (we === null || we.byteLength === 0) && (we = new Uint8Array(p.memory.buffer)), we;
}
function PA(A, e) {
  return A = A >>> 0, qg.decode(De().subarray(A, A + e));
}
function OA(A) {
  const e = p.__externref_table_alloc();
  return p.__wbindgen_export_2.set(e, A), e;
}
function st(A, e) {
  try {
    return A.apply(this, e);
  } catch (t) {
    const g = OA(t);
    p.__wbindgen_exn_store(g);
  }
}
function fe(A) {
  return A == null;
}
let ke = 0;
const zi = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
let Ne = new zi("utf-8");
const Vi = typeof Ne.encodeInto == "function" ? function(A, e) {
  return Ne.encodeInto(A, e);
} : function(A, e) {
  const t = Ne.encode(A);
  return e.set(t), {
    read: A.length,
    written: t.length
  };
};
function zg(A, e, t) {
  if (t === void 0) {
    const a = Ne.encode(A), C = e(a.length, 1) >>> 0;
    return De().subarray(C, C + a.length).set(a), ke = a.length, C;
  }
  let g = A.length, i = e(g, 1) >>> 0;
  const r = De();
  let I = 0;
  for (; I < g; I++) {
    const a = A.charCodeAt(I);
    if (a > 127) break;
    r[i + I] = a;
  }
  if (I !== g) {
    I !== 0 && (A = A.slice(I)), i = t(i, g, g = I + A.length * 3, 1) >>> 0;
    const a = De().subarray(i + I, i + g), C = Vi(A, a);
    I += C.written, i = t(i, g, I, 1) >>> 0;
  }
  return ke = I, i;
}
let KA = null;
function pe() {
  return (KA === null || KA.buffer.detached === !0 || KA.buffer.detached === void 0 && KA.buffer !== p.memory.buffer) && (KA = new DataView(p.memory.buffer)), KA;
}
const Ot = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((A) => {
  p.__wbindgen_export_6.get(A.dtor)(A.a, A.b);
});
function Pi(A, e, t, g) {
  const i = { a: A, b: e, cnt: 1, dtor: t }, r = (...I) => {
    i.cnt++;
    const a = i.a;
    i.a = 0;
    try {
      return g(a, i.b, ...I);
    } finally {
      --i.cnt === 0 ? (p.__wbindgen_export_6.get(i.dtor)(a, i.b), Ot.unregister(i)) : i.a = a;
    }
  };
  return r.original = i, Ot.register(r, i, i), r;
}
function tt(A) {
  const e = typeof A;
  if (e == "number" || e == "boolean" || A == null)
    return `${A}`;
  if (e == "string")
    return `"${A}"`;
  if (e == "symbol") {
    const i = A.description;
    return i == null ? "Symbol" : `Symbol(${i})`;
  }
  if (e == "function") {
    const i = A.name;
    return typeof i == "string" && i.length > 0 ? `Function(${i})` : "Function";
  }
  if (Array.isArray(A)) {
    const i = A.length;
    let r = "[";
    i > 0 && (r += tt(A[0]));
    for (let I = 1; I < i; I++)
      r += ", " + tt(A[I]);
    return r += "]", r;
  }
  const t = /\[object ([^\]]+)\]/.exec(toString.call(A));
  let g;
  if (t && t.length > 1)
    g = t[1];
  else
    return toString.call(A);
  if (g == "Object")
    try {
      return "Object(" + JSON.stringify(A) + ")";
    } catch {
      return "Object";
    }
  return A instanceof Error ? `${A.name}: ${A.message}
${A.stack}` : g;
}
function Oi(A, e, t) {
  p.closure5_externref_shim(A, e, t);
}
const $t = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((A) => p.__wbg_detector_free(A >>> 0, 1));
class Me {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Me.prototype);
    return t.__wbg_ptr = e, $t.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, $t.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    p.__wbg_detector_free(e, 0);
  }
  /**
   * @returns {Detector}
   */
  static new() {
    const e = p.detector_new();
    return Me.__wrap(e);
  }
  end_detection() {
    p.detector_end_detection(this.__wbg_ptr);
  }
  /**
   * @returns {boolean}
   */
  is_detected() {
    return p.detector_is_detected(this.__wbg_ptr) !== 0;
  }
}
function $i() {
  return st(function(A, e, t, g) {
    A.addEventListener(PA(e, t), g);
  }, arguments);
}
function Ar() {
  return st(function(A, e) {
    return A.call(e);
  }, arguments);
}
function er(A) {
  return A.clientX;
}
function tr(A) {
  return A.clientY;
}
function gr(A) {
  const e = A.document;
  return fe(e) ? 0 : OA(e);
}
function nr(A, e) {
  let t, g;
  try {
    t = A, g = e, console.error(PA(A, e));
  } finally {
    p.__wbindgen_free(t, g, 1);
  }
}
function ir(A) {
  let e;
  try {
    e = A instanceof Window;
  } catch {
    e = !1;
  }
  return e;
}
function rr(A) {
  console.log(A);
}
function Ir() {
  return new Error();
}
function or(A, e) {
  return new Function(PA(A, e));
}
function Cr() {
  return st(function(A, e, t, g) {
    A.removeEventListener(PA(e, t), g);
  }, arguments);
}
function Br(A, e) {
  const t = e.stack, g = zg(t, p.__wbindgen_malloc, p.__wbindgen_realloc), i = ke;
  pe().setInt32(A + 4 * 1, i, !0), pe().setInt32(A + 4 * 0, g, !0);
}
function sr() {
  const A = typeof global > "u" ? null : global;
  return fe(A) ? 0 : OA(A);
}
function ar() {
  const A = typeof globalThis > "u" ? null : globalThis;
  return fe(A) ? 0 : OA(A);
}
function Er() {
  const A = typeof self > "u" ? null : self;
  return fe(A) ? 0 : OA(A);
}
function Qr() {
  const A = typeof window > "u" ? null : window;
  return fe(A) ? 0 : OA(A);
}
function lr(A) {
  return A.timeStamp;
}
function cr(A) {
  const e = A.original;
  return e.cnt-- == 1 ? (e.a = 0, !0) : !1;
}
function fr(A, e, t) {
  return Pi(A, e, 6, Oi);
}
function ur(A, e) {
  const t = tt(e), g = zg(t, p.__wbindgen_malloc, p.__wbindgen_realloc), i = ke;
  pe().setInt32(A + 4 * 1, i, !0), pe().setInt32(A + 4 * 0, g, !0);
}
function dr() {
  const A = p.__wbindgen_export_2, e = A.grow(4);
  A.set(0, void 0), A.set(e + 0, void 0), A.set(e + 1, null), A.set(e + 2, !0), A.set(e + 3, !1);
}
function hr(A) {
  return A === void 0;
}
function wr(A, e) {
  return PA(A, e);
}
function yr(A, e) {
  throw new Error(PA(A, e));
}
URL = globalThis.URL;
const W = await Ti({ "./detection_wasm_bg.js": {
  __wbindgen_cb_drop: cr,
  __wbindgen_string_new: wr,
  __wbg_instanceof_Window_def73ea0955fc569: ir,
  __wbg_document_d249400bd7bd996d: gr,
  __wbg_log_c222819a41e063d3: rr,
  __wbg_clientX_5eb380a5f1fec6fd: er,
  __wbg_clientY_d8b9c7f0c4e2e677: tr,
  __wbg_timeStamp_77f4ec8b6669253c: lr,
  __wbg_addEventListener_90e553fdce254421: $i,
  __wbg_removeEventListener_056dfe8c3d6c58f9: Cr,
  __wbg_newnoargs_105ed471475aaf50: or,
  __wbg_call_672a4d21634d4a24: Ar,
  __wbindgen_is_undefined: hr,
  __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0: ar,
  __wbg_static_accessor_SELF_37c5d418e4bf5819: Er,
  __wbg_static_accessor_WINDOW_5de37043a91a9c40: Qr,
  __wbg_static_accessor_GLOBAL_88a902d13a557d07: sr,
  __wbg_new_8a6f238a6ece86ea: Ir,
  __wbg_stack_0ed75d68575b0f3c: Br,
  __wbg_error_7534b8e9a36f1ab4: nr,
  __wbindgen_debug_string: ur,
  __wbindgen_throw: yr,
  __wbindgen_closure_wrapper34: fr,
  __wbindgen_init_externref_table: dr
} }, Xi), _r = W.memory, vr = W.__wbg_detector_free, Dr = W.detector_new, Nr = W.detector_end_detection, Gr = W.detector_is_detected, br = W.__wbindgen_exn_store, Yr = W.__externref_table_alloc, mr = W.__wbindgen_export_2, Fr = W.__wbindgen_free, Rr = W.__wbindgen_malloc, kr = W.__wbindgen_realloc, pr = W.__wbindgen_export_6, Mr = W.closure5_externref_shim, Vg = W.__wbindgen_start, Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __externref_table_alloc: Yr,
  __wbg_detector_free: vr,
  __wbindgen_exn_store: br,
  __wbindgen_export_2: mr,
  __wbindgen_export_6: pr,
  __wbindgen_free: Fr,
  __wbindgen_malloc: Rr,
  __wbindgen_realloc: kr,
  __wbindgen_start: Vg,
  closure5_externref_shim: Mr,
  detector_end_detection: Nr,
  detector_is_detected: Gr,
  detector_new: Dr,
  memory: _r
}, Symbol.toStringTag, { value: "Module" }));
Wi(Sr);
Vg();
class Lr {
  timer = null;
  detector = Me.new();
  endDetection() {
    return this.timer !== null && (clearInterval(this.timer), this.timer = null), this.detector.end_detection(), this.detector.is_detected();
  }
}
var Jr = /* @__PURE__ */ iA('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-ddsc3z"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-ddsc3z"></path></svg>'), Ur = /* @__PURE__ */ iA('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span> <input type="hidden" class="svelte-ddsc3z">', 1), Kr = /* @__PURE__ */ iA('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span>'), xr = /* @__PURE__ */ iA('<label class="svelte-ddsc3z"><!></label>'), Zr = /* @__PURE__ */ iA('<div class="svelte-ddsc3z"><a target="_blank" class="altcha-logo svelte-ddsc3z"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-ddsc3z"></path></svg></a></div>'), jr = /* @__PURE__ */ iA('<div class="svelte-ddsc3z"><!></div>'), Hr = /* @__PURE__ */ iA('<div class="svelte-ddsc3z"><!></div>'), Xr = /* @__PURE__ */ iA('<div class="altcha-error svelte-ddsc3z"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svelte-ddsc3z"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-ddsc3z"></path></svg> <!></div>'), Tr = /* @__PURE__ */ iA('<div class="altcha-footer svelte-ddsc3z"><div class="svelte-ddsc3z"><!></div></div>'), Wr = /* @__PURE__ */ iA('<div class="altcha-anchor-arrow svelte-ddsc3z"></div>'), qr = /* @__PURE__ */ iA('<!> <div class="altcha svelte-ddsc3z"><div class="altcha-main svelte-ddsc3z"><!> <div class="altcha-checkbox svelte-ddsc3z"><input type="checkbox" class="svelte-ddsc3z"></div> <div class="altcha-label svelte-ddsc3z"><!></div> <!></div> <!> <!> <!></div>', 1);
const zr = {
  hash: "svelte-ddsc3z",
  code: `.altcha.svelte-ddsc3z {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left;}.altcha.svelte-ddsc3z:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow:where(.svelte-ddsc3z) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-ddsc3z:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-ddsc3z:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-ddsc3z {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-ddsc3z {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;}.altcha-label.svelte-ddsc3z {flex-grow:1;}.altcha-label.svelte-ddsc3z label:where(.svelte-ddsc3z) {cursor:pointer;}.altcha-logo.svelte-ddsc3z {color:currentColor;opacity:0.3;}.altcha-logo.svelte-ddsc3z:hover {opacity:1;}.altcha-error.svelte-ddsc3z {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-ddsc3z {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right;}.altcha-footer.svelte-ddsc3z:hover {opacity:1;}.altcha-footer.svelte-ddsc3z > :where(.svelte-ddsc3z):first-child {flex-grow:1;}.altcha-footer.svelte-ddsc3z a {color:currentColor;}.altcha-checkbox.svelte-ddsc3z {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-ddsc3z input:where(.svelte-ddsc3z) {width:18px;height:18px;margin:0;}.altcha-hidden.svelte-ddsc3z {display:none;}.altcha-spinner.svelte-ddsc3z {
  animation: svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-ddsc3z-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function Vr(A, e) {
  Sg(e, !0), Ni(A, zr);
  let t = Y(e, "auto", 7, void 0), g = Y(e, "blockspam", 7, void 0), i = Y(e, "challengeurl", 7, void 0), r = Y(e, "challengejson", 7, void 0), I = Y(e, "customfetch", 7, void 0), a = Y(e, "debug", 7, !1), C = Y(e, "delay", 7, 0), s = Y(e, "expire", 7, void 0), B = Y(e, "floating", 7, void 0), Q = Y(e, "floatinganchor", 7, void 0), l = Y(e, "floatingoffset", 7, void 0), f = Y(e, "hidefooter", 7, !1), N = Y(e, "hidelogo", 7, !1), m = Y(e, "name", 7, "altcha"), K = Y(e, "maxnumber", 7, 1e6), O = Y(e, "mockerror", 7, !1), k = Y(e, "obfuscated", 7, void 0), _A = Y(e, "plugins", 7, void 0), sA = Y(e, "refetchonexpire", 7, !0), x = Y(e, "spamfilter", 7, !1), J = Y(e, "strings", 7, void 0), U = Y(e, "test", 7, !1), $ = Y(e, "verifyurl", 7, void 0), FA = Y(e, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), $A = Y(e, "workerurl", 7, void 0);
  const at = ["SHA-256", "SHA-384", "SHA-512"], Et = "Visit Altcha.org", Qt = "https://altcha.org/", Ae = (n, o) => {
    e.$$host.dispatchEvent(new CustomEvent(n, { detail: o }));
  }, lt = document.documentElement.lang?.split("-")?.[0], xe = /* @__PURE__ */ Ie(() => i() && new URL(i(), location.origin).host.endsWith(".altcha.org") && !!i()?.includes("apiKey=ckey_")), Ze = /* @__PURE__ */ Ie(() => r() ? Nt(r()) : void 0), ct = /* @__PURE__ */ Ie(() => J() ? Nt(J()) : {}), AA = /* @__PURE__ */ Ie(() => ({
    ariaLinkLabel: Et,
    error: "Verification failed. Try again later.",
    expired: "Verification expired. Try again.",
    footer: `Protected by <a href="${Qt}" target="_blank" aria-label="${E(ct)?.ariaLinkLabel || Et}">ALTCHA</a>`,
    label: "I'm not a robot",
    verified: "Verified",
    verifying: "Verifying...",
    waitAlert: "Verifying... please wait.",
    ...E(ct)
  }));
  let RA = SA(!1), G = SA(tA(w.UNVERIFIED)), H = SA(void 0), ee = SA(null), kA = null, S = null, pA = SA(null), rA = null, QA = [], vA = SA(null);
  Pe(() => {
    nn(E(pA));
  }), Pe(() => {
    rn(E(G));
  }), Fi(() => {
    Pg(), S && (S.removeEventListener("submit", yt), S.removeEventListener("reset", _t), S.removeEventListener("focusin", wt), S = null), rA && (clearTimeout(rA), rA = null), document.removeEventListener("click", dt), document.removeEventListener("scroll", ht), window.removeEventListener("resize", Dt);
  }), Hg(() => {
    b("mounted", "1.2.0-wasm"), b("workers", FA()), tn(), b("plugins", QA.length ? QA.map((n) => n.constructor.pluginName).join(", ") : "none"), U() && b("using test mode"), s() && je(s()), t() !== void 0 && b("auto", t()), B() !== void 0 && Gt(B()), S = E(H)?.closest("form"), S && (S.addEventListener("submit", yt, { capture: !0 }), S.addEventListener("reset", _t), t() === "onfocus" && S.addEventListener("focusin", wt)), t() === "onload" && (k() ? te() : lA()), E(xe) && (f() || N()) && b("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Ae("load");
    });
  });
  function ft(n, o) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: o.number,
      salt: n.salt,
      signature: n.signature,
      test: U() ? !0 : void 0,
      took: o.took
    }));
  }
  function Pg() {
    for (const n of QA)
      n.destroy();
  }
  function ut() {
    i() && sA() && E(G) === w.VERIFIED ? lA() : ge(w.EXPIRED, E(AA).expired);
  }
  async function Og() {
    if (O())
      throw b("mocking error"), new Error("Mocked error.");
    if (E(Ze))
      return b("using provided json data"), E(Ze);
    if (U())
      return b("generating test challenge", { test: U() }), Ui(typeof U() != "boolean" ? +U() : void 0);
    {
      if (!i() && S) {
        const h = S.getAttribute("action");
        h?.includes("/form/") && i(h + "/altcha");
      }
      if (!i())
        throw new Error("Attribute challengeurl not set.");
      b("fetching challenge from", i());
      let n = null, o = null;
      if (I())
        if (b("using customfetch"), typeof I() == "string") {
          if (n = globalThis[I()] || null, !n)
            throw new Error(`Custom fetch function not found: ${I()}`);
        } else
          n = I();
      const c = {
        headers: x() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (n) {
        if (o = await n(i(), c), !o || !(o instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        o = await fetch(i(), c);
      if (o.status !== 200)
        throw new Error(`Server responded with ${o.status}.`);
      const y = o.headers.get("X-Altcha-Config"), L = await o.json(), v = new URLSearchParams(L.salt.split("?")?.[1]), u = v.get("expires") || v.get("expire");
      if (u) {
        const h = new Date(+u * 1e3), aA = isNaN(h.getTime()) ? 0 : h.getTime() - Date.now();
        aA > 0 && je(aA);
      }
      if (y)
        try {
          const h = JSON.parse(y);
          h && typeof h == "object" && (h.verifyurl && (h.verifyurl = new URL(h.verifyurl, new URL(i())).toString()), mt(h));
        } catch (h) {
          b("unable to configure from X-Altcha-Config", h);
        }
      return L;
    }
  }
  function $g(n) {
    const o = S?.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return o?.value?.slice(o.value.indexOf("@")) || void 0;
  }
  function An() {
    return x() === "ipAddress" ? {
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
    } : typeof x() == "object" ? x() : {
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
  function en(n) {
    return [
      ...S?.querySelectorAll(n?.length ? n.map((c) => `input[name="${c}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])') || []
    ].reduce(
      (c, y) => {
        const L = y.name, v = y.value;
        return L && v && (c[L] = /\n/.test(v) ? v.replace(/(?<!\r)\n/g, `\r
`) : v), c;
      },
      {}
    );
  }
  function tn() {
    const n = _A() !== void 0 ? _A().split(",") : void 0;
    for (const o of globalThis.altchaPlugins)
      (!n || n.includes(o.pluginName)) && QA.push(new o({
        el: E(H),
        clarify: te,
        dispatch: Ae,
        getConfiguration: Ft,
        getFloatingAnchor: Rt,
        getState: kt,
        log: b,
        reset: ge,
        solve: Yt,
        setState: DA,
        setFloatingAnchor: pt,
        verify: lA
      }));
  }
  function b(...n) {
    (a() || n.some((o) => o instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${m()}]`, ...n);
  }
  function gn() {
    [w.UNVERIFIED, w.ERROR, w.EXPIRED].includes(E(G)) ? x() !== !1 && S?.reportValidity() === !1 ? F(RA, !1) : k() ? te() : lA() : F(RA, !0);
  }
  function dt(n) {
    const o = n.target;
    B() && o && !E(H).contains(o) && (E(G) === w.VERIFIED || t() === "off" && E(G) === w.UNVERIFIED) && (E(H).style.display = "none");
  }
  function ht() {
    B() && E(G) !== w.UNVERIFIED && ue();
  }
  function nn(n) {
    for (const o of QA)
      typeof o.onErrorChange == "function" && o.onErrorChange(E(pA));
  }
  function wt(n) {
    E(G) === w.UNVERIFIED && lA();
  }
  function yt(n) {
    S && t() === "onsubmit" ? E(G) === w.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), lA().then(() => {
      S?.requestSubmit();
    })) : E(G) !== w.VERIFIED && (n.preventDefault(), n.stopPropagation(), E(G) === w.VERIFYING && vt()) : S && B() && t() === "off" && E(G) === w.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), E(H).style.display = "block", ue());
  }
  function _t() {
    ge();
  }
  function vt() {
    E(G) === w.VERIFYING && E(AA).waitAlert && alert(E(AA).waitAlert);
  }
  function rn(n) {
    for (const o of QA)
      typeof o.onStateChange == "function" && o.onStateChange(E(G));
    B() && E(G) !== w.UNVERIFIED && requestAnimationFrame(() => {
      ue();
    }), F(RA, E(G) === w.VERIFIED);
  }
  function Dt() {
    B() && ue();
  }
  function Nt(n) {
    return JSON.parse(n);
  }
  function ue(n = 20) {
    if (E(H))
      if (kA || (kA = (Q() ? document.querySelector(Q()) : S?.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || S), kA) {
        const o = parseInt(l(), 10) || 12, c = kA.getBoundingClientRect(), y = E(H).getBoundingClientRect(), L = document.documentElement.clientHeight, v = document.documentElement.clientWidth, u = B() === "auto" ? c.bottom + y.height + o + n > L : B() === "top", h = Math.max(n, Math.min(v - n - y.width, c.left + c.width / 2 - y.width / 2));
        if (u ? E(H).style.top = `${c.top - (y.height + o)}px` : E(H).style.top = `${c.bottom + o}px`, E(H).style.left = `${h}px`, E(H).setAttribute("data-floating", u ? "top" : "bottom"), E(ee)) {
          const aA = E(ee).getBoundingClientRect();
          E(ee).style.left = c.left - h + c.width / 2 - aA.width / 2 + "px";
        }
      } else
        b("unable to find floating anchor element");
  }
  async function In(n) {
    if (!$())
      throw new Error("Attribute verifyurl not set.");
    b("requesting server verification from", $());
    const o = { payload: n };
    if (x() !== !1) {
      const {
        blockedCountries: L,
        classifier: v,
        disableRules: u,
        email: h,
        expectedLanguages: aA,
        expectedCountries: Te,
        fields: ie,
        ipAddress: re,
        text: hn,
        timeZone: Kt
      } = An();
      o.blockedCountries = L, o.classifier = v, o.disableRules = u, o.email = h === !1 ? void 0 : $g(h), o.expectedCountries = Te, o.expectedLanguages = aA || (lt ? [lt] : void 0), o.fields = ie === !1 ? void 0 : en(ie), o.ipAddress = re === !1 ? void 0 : re || "auto", o.text = hn, o.timeZone = Kt === !1 ? void 0 : Kt || xi();
    }
    const c = await fetch($(), {
      body: JSON.stringify(o),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (c.status !== 200)
      throw new Error(`Server responded with ${c.status}.`);
    const y = await c.json();
    if (y?.payload && F(vA, tA(y.payload)), Ae("serververification", y), g() && y.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function je(n) {
    b("expire", n), rA && (clearTimeout(rA), rA = null), n < 1 ? ut() : rA = setTimeout(ut, n);
  }
  function Gt(n) {
    b("floating", n), B() !== n && (E(H).style.left = "", E(H).style.top = ""), B(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : B()), B() ? (t() || t("onsubmit"), document.addEventListener("scroll", ht), document.addEventListener("click", dt), window.addEventListener("resize", Dt)) : t() === "onsubmit" && t(void 0);
  }
  function bt(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!at.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${at.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Yt(n) {
    let o = null;
    if ("Worker" in window) {
      try {
        o = await on(n, n.maxnumber);
      } catch (c) {
        b(c);
      }
      if (o?.number !== void 0 || "obfuscated" in n)
        return { data: n, solution: o };
    }
    if ("obfuscated" in n) {
      const c = await Hi(n.obfuscated, n.key, n.maxnumber);
      return { data: n, solution: await c.promise };
    }
    return {
      data: n,
      solution: await Ki(n.challenge, n.salt, n.algorithm, n.maxnumber || K()).promise
    };
  }
  async function on(n, o = typeof U() == "number" ? U() : K(), c = Math.ceil(FA())) {
    const y = [];
    c = Math.min(16, Math.max(1, c));
    for (let u = 0; u < c; u++)
      y.push(altchaCreateWorker($A()));
    const L = Math.ceil(o / c), v = await Promise.all(y.map((u, h) => {
      const aA = h * L;
      return new Promise((Te) => {
        u.addEventListener("message", (ie) => {
          if (ie.data)
            for (const re of y)
              re !== u && re.postMessage({ type: "abort" });
          Te(ie.data);
        }), u.postMessage({
          payload: n,
          max: aA + L,
          start: aA,
          type: "work"
        });
      });
    }));
    for (const u of y)
      u.terminate();
    return v.find((u) => !!u) || null;
  }
  async function te() {
    if (!k()) {
      DA(w.ERROR);
      return;
    }
    const n = QA.find((o) => o.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      DA(w.ERROR), b("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function mt(n) {
    n.obfuscated !== void 0 && k(n.obfuscated), n.auto !== void 0 && (t(n.auto), t() === "onload" && (k() ? te() : lA())), n.blockspam !== void 0 && g(!!n.blockspam), n.customfetch !== void 0 && I(n.customfetch), n.floatinganchor !== void 0 && Q(n.floatinganchor), n.delay !== void 0 && C(n.delay), n.floatingoffset !== void 0 && l(n.floatingoffset), n.floating !== void 0 && Gt(n.floating), n.expire !== void 0 && (je(n.expire), s(n.expire)), n.challenge && (r(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), bt(E(Ze))), n.challengeurl !== void 0 && i(n.challengeurl), n.debug !== void 0 && a(!!n.debug), n.hidefooter !== void 0 && f(!!n.hidefooter), n.hidelogo !== void 0 && N(!!n.hidelogo), n.maxnumber !== void 0 && K(+n.maxnumber), n.mockerror !== void 0 && O(!!n.mockerror), n.name !== void 0 && m(n.name), n.refetchonexpire !== void 0 && sA(!!n.refetchonexpire), n.spamfilter !== void 0 && x(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && J(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && U(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && $(n.verifyurl), n.workers !== void 0 && FA(+n.workers), n.workerurl !== void 0 && $A(n.workerurl);
  }
  function Ft() {
    return {
      auto: t(),
      blockspam: g(),
      challengeurl: i(),
      debug: a(),
      delay: C(),
      expire: s(),
      floating: B(),
      floatinganchor: Q(),
      floatingoffset: l(),
      hidefooter: f(),
      hidelogo: N(),
      name: m(),
      maxnumber: K(),
      mockerror: O(),
      obfuscated: k(),
      refetchonexpire: sA(),
      spamfilter: x(),
      strings: E(AA),
      test: U(),
      verifyurl: $(),
      workers: FA(),
      workerurl: $A()
    };
  }
  function Rt() {
    return kA;
  }
  function Cn(n) {
    return QA.find((o) => o.constructor.pluginName === n);
  }
  function kt() {
    return E(G);
  }
  function ge(n = w.UNVERIFIED, o = null) {
    rA && (clearTimeout(rA), rA = null), F(RA, !1), F(vA, null), DA(n, o);
  }
  function pt(n) {
    kA = n;
  }
  function DA(n, o = null) {
    F(G, tA(n)), F(pA, tA(o)), Ae("statechange", {
      payload: E(vA),
      state: E(G)
    });
  }
  async function lA() {
    ge(w.VERIFYING), await new Promise((o) => setTimeout(o, C() || 0));
    const n = new Lr();
    return Og().then((o) => (bt(o), b("challenge", o), Yt(o))).then(({ data: o, solution: c }) => {
      if (b("solution", c), "challenge" in o && c && !("clearText" in c))
        if (c?.number !== void 0) {
          if ($())
            return In(ft(o, c));
          F(vA, tA(ft(o, c))), b("payload", E(vA));
        } else
          throw b("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      if (n.endDetection() === !0)
        throw new Error("Detected bot.");
      DA(w.VERIFIED), b("verified"), Qi().then(() => {
        Ae("verified", { payload: E(vA) });
      });
    }).catch((o) => {
      b(o), DA(w.ERROR, o.message);
    });
  }
  var Mt = qr(), St = We(Mt);
  Di(St, e, "default", {});
  var ne = EA(St, 2), He = z(ne), Lt = z(He);
  {
    var Bn = (n) => {
      var o = Jr();
      V(n, o);
    };
    cA(Lt, (n) => {
      E(G) === w.VERIFYING && n(Bn);
    });
  }
  var de = EA(Lt, 2), MA = z(de);
  qt(MA), MA.__change = gn, q(de);
  var Xe = EA(de, 2), sn = z(Xe);
  {
    var an = (n) => {
      var o = Ur(), c = We(o), y = z(c);
      UA(y, () => E(AA).verified), q(c);
      var L = EA(c, 2);
      qt(L), LA(() => {
        eA(L, "name", m()), Gi(L, E(vA));
      }), V(n, o);
    }, En = (n) => {
      var o = hi(), c = We(o);
      {
        var y = (v) => {
          var u = Kr(), h = z(u);
          UA(h, () => E(AA).verifying), q(u), V(v, u);
        }, L = (v) => {
          var u = xr(), h = z(u);
          UA(h, () => E(AA).label), q(u), LA(() => eA(u, "for", `${m() ?? ""}_checkbox`)), V(v, u);
        };
        cA(
          c,
          (v) => {
            E(G) === w.VERIFYING ? v(y) : v(L, !1);
          },
          !0
        );
      }
      V(n, o);
    };
    cA(sn, (n) => {
      E(G) === w.VERIFIED ? n(an) : n(En, !1);
    });
  }
  q(Xe);
  var Qn = EA(Xe, 2);
  {
    var ln = (n) => {
      var o = Zr(), c = z(o);
      eA(c, "href", Qt), q(o), LA(() => eA(c, "aria-label", E(AA).ariaLinkLabel)), V(n, o);
    };
    cA(Qn, (n) => {
      (N() !== !0 || E(xe)) && n(ln);
    });
  }
  q(He);
  var Jt = EA(He, 2);
  {
    var cn = (n) => {
      var o = Xr(), c = EA(z(o), 2);
      {
        var y = (v) => {
          var u = jr(), h = z(u);
          UA(h, () => E(AA).expired), q(u), LA(() => eA(u, "title", E(pA))), V(v, u);
        }, L = (v) => {
          var u = Hr(), h = z(u);
          UA(h, () => E(AA).error), q(u), LA(() => eA(u, "title", E(pA))), V(v, u);
        };
        cA(c, (v) => {
          E(G) === w.EXPIRED ? v(y) : v(L, !1);
        });
      }
      q(o), V(n, o);
    };
    cA(Jt, (n) => {
      (E(pA) || E(G) === w.EXPIRED) && n(cn);
    });
  }
  var Ut = EA(Jt, 2);
  {
    var fn = (n) => {
      var o = Tr(), c = z(o), y = z(c);
      UA(y, () => E(AA).footer), q(c), q(o), V(n, o);
    };
    cA(Ut, (n) => {
      E(AA).footer && (f() !== !0 || E(xe)) && n(fn);
    });
  }
  var un = EA(Ut, 2);
  {
    var dn = (n) => {
      var o = Wr();
      Pt(o, (c) => F(ee, c), () => E(ee)), V(n, o);
    };
    cA(un, (n) => {
      B() && n(dn);
    });
  }
  return q(ne), Pt(ne, (n) => F(H, n), () => E(H)), LA(() => {
    eA(ne, "data-state", E(G)), eA(ne, "data-floating", B()), Yi(de, "altcha-hidden", E(G) === w.VERIFYING), eA(MA, "id", `${m() ?? ""}_checkbox`), MA.required = t() !== "onsubmit" && (!B() || t() !== "off");
  }), ui("invalid", MA, vt), mi(MA, () => E(RA), (n) => F(RA, n)), V(A, Mt), Lg({
    clarify: te,
    configure: mt,
    getConfiguration: Ft,
    getFloatingAnchor: Rt,
    getPlugin: Cn,
    getState: kt,
    reset: ge,
    setFloatingAnchor: pt,
    setState: DA,
    verify: lA,
    get auto() {
      return t();
    },
    set auto(n = void 0) {
      t(n), _();
    },
    get blockspam() {
      return g();
    },
    set blockspam(n = void 0) {
      g(n), _();
    },
    get challengeurl() {
      return i();
    },
    set challengeurl(n = void 0) {
      i(n), _();
    },
    get challengejson() {
      return r();
    },
    set challengejson(n = void 0) {
      r(n), _();
    },
    get customfetch() {
      return I();
    },
    set customfetch(n = void 0) {
      I(n), _();
    },
    get debug() {
      return a();
    },
    set debug(n = !1) {
      a(n), _();
    },
    get delay() {
      return C();
    },
    set delay(n = 0) {
      C(n), _();
    },
    get expire() {
      return s();
    },
    set expire(n = void 0) {
      s(n), _();
    },
    get floating() {
      return B();
    },
    set floating(n = void 0) {
      B(n), _();
    },
    get floatinganchor() {
      return Q();
    },
    set floatinganchor(n = void 0) {
      Q(n), _();
    },
    get floatingoffset() {
      return l();
    },
    set floatingoffset(n = void 0) {
      l(n), _();
    },
    get hidefooter() {
      return f();
    },
    set hidefooter(n = !1) {
      f(n), _();
    },
    get hidelogo() {
      return N();
    },
    set hidelogo(n = !1) {
      N(n), _();
    },
    get name() {
      return m();
    },
    set name(n = "altcha") {
      m(n), _();
    },
    get maxnumber() {
      return K();
    },
    set maxnumber(n = 1e6) {
      K(n), _();
    },
    get mockerror() {
      return O();
    },
    set mockerror(n = !1) {
      O(n), _();
    },
    get obfuscated() {
      return k();
    },
    set obfuscated(n = void 0) {
      k(n), _();
    },
    get plugins() {
      return _A();
    },
    set plugins(n = void 0) {
      _A(n), _();
    },
    get refetchonexpire() {
      return sA();
    },
    set refetchonexpire(n = !0) {
      sA(n), _();
    },
    get spamfilter() {
      return x();
    },
    set spamfilter(n = !1) {
      x(n), _();
    },
    get strings() {
      return J();
    },
    set strings(n = void 0) {
      J(n), _();
    },
    get test() {
      return U();
    },
    set test(n = !1) {
      U(n), _();
    },
    get verifyurl() {
      return $();
    },
    set verifyurl(n = void 0) {
      $(n), _();
    },
    get workers() {
      return FA();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      FA(n), _();
    },
    get workerurl() {
      return $A();
    },
    set workerurl(n = void 0) {
      $A(n), _();
    }
  });
}
di(["change"]);
customElements.define("altcha-widget", Li(
  Vr,
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
  Vr as Altcha
};
