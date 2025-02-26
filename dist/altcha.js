const zt = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGQ9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIHAoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAodD0+dC50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBiKGUsdCxyKXtpZih0eXBlb2YgY3J5cHRvPiJ1Inx8ISgic3VidGxlImluIGNyeXB0byl8fCEoImRpZ2VzdCJpbiBjcnlwdG8uc3VidGxlKSl0aHJvdyBuZXcgRXJyb3IoIldlYiBDcnlwdG8gaXMgbm90IGF2YWlsYWJsZS4gU2VjdXJlIGNvbnRleHQgaXMgcmVxdWlyZWQgKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NlY3VyaXR5L1NlY3VyZV9Db250ZXh0cykuIik7cmV0dXJuIHAoYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3Qoci50b1VwcGVyQ2FzZSgpLGQuZW5jb2RlKGUrdCkpKX1mdW5jdGlvbiB3KGUsdCxyPSJTSEEtMjU2IixuPTFlNixsPTApe2NvbnN0IG89bmV3IEFib3J0Q29udHJvbGxlcixhPURhdGUubm93KCk7cmV0dXJue3Byb21pc2U6KGFzeW5jKCk9Pntmb3IobGV0IGM9bDtjPD1uO2MrPTEpe2lmKG8uc2lnbmFsLmFib3J0ZWQpcmV0dXJuIG51bGw7aWYoYXdhaXQgYih0LGMscik9PT1lKXJldHVybntudW1iZXI6Yyx0b29rOkRhdGUubm93KCktYX19cmV0dXJuIG51bGx9KSgpLGNvbnRyb2xsZXI6b319ZnVuY3Rpb24gaChlKXtjb25zdCB0PWF0b2IoZSkscj1uZXcgVWludDhBcnJheSh0Lmxlbmd0aCk7Zm9yKGxldCBuPTA7bjx0Lmxlbmd0aDtuKyspcltuXT10LmNoYXJDb2RlQXQobik7cmV0dXJuIHJ9ZnVuY3Rpb24gZyhlLHQ9MTIpe2NvbnN0IHI9bmV3IFVpbnQ4QXJyYXkodCk7Zm9yKGxldCBuPTA7bjx0O24rKylyW25dPWUlMjU2LGU9TWF0aC5mbG9vcihlLzI1Nik7cmV0dXJuIHJ9YXN5bmMgZnVuY3Rpb24gbShlLHQ9IiIscj0xZTYsbj0wKXtjb25zdCBsPSJBRVMtR0NNIixvPW5ldyBBYm9ydENvbnRyb2xsZXIsYT1EYXRlLm5vdygpLHM9YXN5bmMoKT0+e2ZvcihsZXQgaT1uO2k8PXI7aSs9MSl7aWYoby5zaWduYWwuYWJvcnRlZHx8IWN8fCF1KXJldHVybiBudWxsO3RyeXtjb25zdCBmPWF3YWl0IGNyeXB0by5zdWJ0bGUuZGVjcnlwdCh7bmFtZTpsLGl2OmcoaSl9LGMsdSk7aWYoZilyZXR1cm57Y2xlYXJUZXh0Om5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShmKSx0b29rOkRhdGUubm93KCktYX19Y2F0Y2h7fX1yZXR1cm4gbnVsbH07bGV0IGM9bnVsbCx1PW51bGw7dHJ5e3U9aChlKTtjb25zdCBpPWF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KCJTSEEtMjU2IixkLmVuY29kZSh0KSk7Yz1hd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleSgicmF3IixpLGwsITEsWyJkZWNyeXB0Il0pfWNhdGNoe3JldHVybntwcm9taXNlOlByb21pc2UucmVqZWN0KCksY29udHJvbGxlcjpvfX1yZXR1cm57cHJvbWlzZTpzKCksY29udHJvbGxlcjpvfX1sZXQgeTtvbm1lc3NhZ2U9YXN5bmMgZT0+e2NvbnN0e3R5cGU6dCxwYXlsb2FkOnIsc3RhcnQ6bixtYXg6bH09ZS5kYXRhO2xldCBvPW51bGw7aWYodD09PSJhYm9ydCIpeT8uYWJvcnQoKSx5PXZvaWQgMDtlbHNlIGlmKHQ9PT0id29yayIpe2lmKCJvYmZ1c2NhdGVkImluIHIpe2NvbnN0e2tleTphLG9iZnVzY2F0ZWQ6c309cnx8e307bz1hd2FpdCBtKHMsYSxsLG4pfWVsc2V7Y29uc3R7YWxnb3JpdGhtOmEsY2hhbGxlbmdlOnMsc2FsdDpjfT1yfHx7fTtvPXcocyxjLGEsbCxuKX15PW8uY29udHJvbGxlcixvLnByb21pc2UudGhlbihhPT57c2VsZi5wb3N0TWVzc2FnZShhJiZ7Li4uYSx3b3JrZXI6ITB9KX0pfX19KSgpOwo=", Eg = (A) => Uint8Array.from(atob(A), (e) => e.charCodeAt(0)), Jt = typeof self < "u" && self.Blob && new Blob([Eg(zt)], { type: "text/javascript;charset=utf-8" });
function ug(A) {
  let e;
  try {
    if (e = Jt && (self.URL || self.webkitURL).createObjectURL(Jt), !e) throw "";
    const t = new Worker(e, {
      name: A?.name
    });
    return t.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(e);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + zt,
      {
        name: A?.name
      }
    );
  } finally {
    e && (self.URL || self.webkitURL).revokeObjectURL(e);
  }
}
const fg = "5";
typeof window < "u" && (window.__svelte ||= { v: /* @__PURE__ */ new Set() }).v.add(fg);
const dg = 1, hg = 4, wg = 8, yg = 16, vg = 1, bg = 2, Pt = "[", Ot = "[!", $t = "]", ZA = {}, X = Symbol(), Ar = !1;
var er = Array.isArray, mg = Array.from, be = Object.keys, me = Object.defineProperty, DA = Object.getOwnPropertyDescriptor, Ng = Object.getOwnPropertyDescriptors, Dg = Object.prototype, _g = Array.prototype, Ze = Object.getPrototypeOf;
function tr(A) {
  for (var e = 0; e < A.length; e++)
    A[e]();
}
const tA = 2, rr = 4, le = 8, Oe = 16, rA = 32, Ce = 64, Xe = 128, GA = 256, Ne = 512, T = 1024, dA = 2048, Be = 4096, WA = 8192, qA = 16384, Gg = 32768, $e = 65536, Rg = 1 << 19, gr = 1 << 20, Ie = Symbol("$state"), nr = Symbol("legacy props"), Fg = Symbol("");
function ir(A) {
  return A === this.v;
}
function Yg(A, e) {
  return A != A ? e == e : A !== e || A !== null && typeof A == "object" || typeof A == "function";
}
function Ir(A) {
  return !Yg(A, this.v);
}
function kg(A) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function pg() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Mg(A) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Jg() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Lg() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Sg(A) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function xg() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ug() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Hg() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Kg() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let or = !1;
function iA(A) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: A,
    reactions: null,
    equals: ir,
    version: 0
  };
}
function JA(A) {
  return /* @__PURE__ */ Zg(iA(A));
}
// @__NO_SIDE_EFFECTS__
function sr(A, e = !1) {
  const t = iA(A);
  return e || (t.equals = Ir), t;
}
// @__NO_SIDE_EFFECTS__
function Zg(A) {
  return m !== null && m.f & tA && (IA === null ? rn([A]) : IA.push(A)), A;
}
function F(A, e) {
  return m !== null && nn() && m.f & (tA | Oe) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (IA === null || !IA.includes(A)) && Kg(), Xg(A, e);
}
function Xg(A, e) {
  return A.equals(e) || (A.v = e, A.version = _r(), ar(A, dA), d !== null && d.f & T && !(d.f & rA) && (H !== null && H.includes(A) ? (sA(d, dA), Me(d)) : uA === null ? gn([A]) : uA.push(A))), e;
}
function ar(A, e) {
  var t = A.reactions;
  if (t !== null)
    for (var g = t.length, n = 0; n < g; n++) {
      var i = t[n], I = i.f;
      I & dA || (sA(i, e), I & (T | GA) && (I & tA ? ar(
        /** @type {Derived} */
        i,
        Be
      ) : Me(
        /** @type {Effect} */
        i
      )));
    }
}
function Fe(A) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let p = !1;
function HA(A) {
  p = A;
}
let Y;
function hA(A) {
  if (A === null)
    throw Fe(), ZA;
  return Y = A;
}
function jA() {
  return hA(
    /** @type {TemplateNode} */
    /* @__PURE__ */ yA(Y)
  );
}
function W(A) {
  if (p) {
    if (/* @__PURE__ */ yA(Y) !== null)
      throw Fe(), ZA;
    Y = A;
  }
}
function Tg() {
  for (var A = 0, e = Y; ; ) {
    if (e.nodeType === 8) {
      var t = (
        /** @type {Comment} */
        e.data
      );
      if (t === $t) {
        if (A === 0) return e;
        A -= 1;
      } else (t === Pt || t === Ot) && (A += 1);
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
  if (g !== Dg && g !== _g)
    return A;
  var n = /* @__PURE__ */ new Map(), i = er(A), I = iA(0);
  i && n.set("length", iA(
    /** @type {any[]} */
    A.length
  ));
  var B;
  return new Proxy(
    /** @type {any} */
    A,
    {
      defineProperty(s, l, a) {
        (!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && xg();
        var c = n.get(l);
        return c === void 0 ? (c = iA(a.value), n.set(l, c)) : F(c, eA(a.value, B)), !0;
      },
      deleteProperty(s, l) {
        var a = n.get(l);
        if (a === void 0)
          l in s && n.set(l, iA(X));
        else {
          if (i && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), Q = Number(l);
            Number.isInteger(Q) && Q < c.v && F(c, Q);
          }
          F(a, X), Lt(I);
        }
        return !0;
      },
      get(s, l, a) {
        if (l === Ie)
          return A;
        var c = n.get(l), Q = l in s;
        if (c === void 0 && (!Q || DA(s, l)?.writable) && (c = iA(eA(Q ? s[l] : X, B)), n.set(l, c)), c !== void 0) {
          var u = C(c);
          return u === X ? void 0 : u;
        }
        return Reflect.get(s, l, a);
      },
      getOwnPropertyDescriptor(s, l) {
        var a = Reflect.getOwnPropertyDescriptor(s, l);
        if (a && "value" in a) {
          var c = n.get(l);
          c && (a.value = C(c));
        } else if (a === void 0) {
          var Q = n.get(l), u = Q?.v;
          if (Q !== void 0 && u !== X)
            return {
              enumerable: !0,
              configurable: !0,
              value: u,
              writable: !0
            };
        }
        return a;
      },
      has(s, l) {
        if (l === Ie)
          return !0;
        var a = n.get(l), c = a !== void 0 && a.v !== X || Reflect.has(s, l);
        if (a !== void 0 || d !== null && (!c || DA(s, l)?.writable)) {
          a === void 0 && (a = iA(c ? eA(s[l], B) : X), n.set(l, a));
          var Q = C(a);
          if (Q === X)
            return !1;
        }
        return c;
      },
      set(s, l, a, c) {
        var Q = n.get(l), u = l in s;
        if (i && l === "length")
          for (var N = a; N < /** @type {Source<number>} */
          Q.v; N += 1) {
            var R = n.get(N + "");
            R !== void 0 ? F(R, X) : N in s && (R = iA(X), n.set(N + "", R));
          }
        Q === void 0 ? (!u || DA(s, l)?.writable) && (Q = iA(void 0), F(Q, eA(a, B)), n.set(l, Q)) : (u = Q.v !== X, F(Q, eA(a, B)));
        var x = Reflect.getOwnPropertyDescriptor(s, l);
        if (x?.set && x.set.call(c, a), !u) {
          if (i && typeof l == "string") {
            var P = (
              /** @type {Source<number>} */
              n.get("length")
            ), k = Number(l);
            Number.isInteger(k) && k >= P.v && F(P, k + 1);
          }
          Lt(I);
        }
        return !0;
      },
      ownKeys(s) {
        C(I);
        var l = Reflect.ownKeys(s).filter((Q) => {
          var u = n.get(Q);
          return u === void 0 || u.v !== X;
        });
        for (var [a, c] of n)
          c.v !== X && !(a in s) && l.push(a);
        return l;
      },
      setPrototypeOf() {
        Ug();
      }
    }
  );
}
function Lt(A, e = 1) {
  F(A, A.v + e);
}
var St, lr, Cr;
function Te() {
  if (St === void 0) {
    St = window;
    var A = Element.prototype, e = Node.prototype;
    lr = DA(e, "firstChild").get, Cr = DA(e, "nextSibling").get, A.__click = void 0, A.__className = "", A.__attributes = null, A.__styles = null, A.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Ye(A = "") {
  return document.createTextNode(A);
}
// @__NO_SIDE_EFFECTS__
function _A(A) {
  return lr.call(A);
}
// @__NO_SIDE_EFFECTS__
function yA(A) {
  return Cr.call(A);
}
function j(A, e) {
  if (!p)
    return /* @__PURE__ */ _A(A);
  var t = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ _A(Y)
  );
  return t === null && (t = Y.appendChild(Ye())), hA(t), t;
}
function Ke(A, e) {
  if (!p) {
    var t = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ _A(
        /** @type {Node} */
        A
      )
    );
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ yA(t) : t;
  }
  return Y;
}
function BA(A, e = 1, t = !1) {
  let g = p ? Y : A;
  for (var n; e--; )
    n = g, g = /** @type {TemplateNode} */
    /* @__PURE__ */ yA(g);
  if (!p)
    return g;
  var i = g?.nodeType;
  if (t && i !== 3) {
    var I = Ye();
    return g === null ? n?.after(I) : g.before(I), hA(I), I;
  }
  return hA(g), /** @type {TemplateNode} */
  g;
}
function Wg(A) {
  A.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function ne(A) {
  var e = tA | dA;
  d === null ? e |= GA : d.f |= gr;
  var t = m !== null && m.f & tA ? (
    /** @type {Derived} */
    m
  ) : null;
  const g = {
    children: null,
    ctx: K,
    deps: null,
    equals: ir,
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
function Br(A) {
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
function jg(A) {
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
function cr(A) {
  var e, t = d;
  oA(jg(A));
  try {
    Br(A), e = Gr(A);
  } finally {
    oA(t);
  }
  return e;
}
function Qr(A) {
  var e = cr(A), t = (KA || A.f & GA) && A.deps !== null ? Be : T;
  sA(A, t), A.equals(e) || (A.v = e, A.version = _r());
}
function At(A) {
  Br(A), ae(A, 0), sA(A, qA), A.v = A.children = A.deps = A.ctx = A.reactions = null;
}
function Vg(A) {
  d === null && m === null && Mg(), m !== null && m.f & GA && pg(), nt && kg();
}
function qg(A, e) {
  var t = e.last;
  t === null ? e.last = e.first = A : (t.next = A, A.prev = t, e.last = A);
}
function zA(A, e, t, g = !0) {
  var n = (A & Ce) !== 0, i = d, I = {
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
    var B = XA;
    try {
      Ht(!0), pe(I), I.f |= Gg;
    } catch (a) {
      throw RA(I), a;
    } finally {
      Ht(B);
    }
  } else e !== null && Me(I);
  var s = t && I.deps === null && I.first === null && I.nodes_start === null && I.teardown === null && (I.f & gr) === 0;
  if (!s && !n && g && (i !== null && qg(I, i), m !== null && m.f & tA)) {
    var l = (
      /** @type {Derived} */
      m
    );
    (l.children ??= []).push(I);
  }
  return I;
}
function zg(A) {
  const e = zA(le, null, !1);
  return sA(e, T), e.teardown = A, e;
}
function We(A) {
  Vg();
  var e = d !== null && (d.f & rA) !== 0 && K !== null && !K.m;
  if (e) {
    var t = (
      /** @type {ComponentContext} */
      K
    );
    (t.e ??= []).push({
      fn: A,
      effect: d,
      reaction: m
    });
  } else {
    var g = et(A);
    return g;
  }
}
function Er(A) {
  const e = zA(Ce, A, !0);
  return () => {
    RA(e);
  };
}
function et(A) {
  return zA(rr, A, !1);
}
function tt(A) {
  return zA(le, A, !0);
}
function LA(A) {
  return rt(A);
}
function rt(A, e = 0) {
  return zA(le | Oe | e, A, !0);
}
function De(A, e = !0) {
  return zA(le | rA, A, !0, e);
}
function ur(A) {
  var e = A.teardown;
  if (e !== null) {
    const t = nt, g = m;
    Kt(!0), wA(null);
    try {
      e.call(null);
    } finally {
      Kt(t), wA(g);
    }
  }
}
function fr(A) {
  var e = A.deriveds;
  if (e !== null) {
    A.deriveds = null;
    for (var t = 0; t < e.length; t += 1)
      At(e[t]);
  }
}
function dr(A, e = !1) {
  var t = A.first;
  for (A.first = A.last = null; t !== null; ) {
    var g = t.next;
    RA(t, e), t = g;
  }
}
function Pg(A) {
  for (var e = A.first; e !== null; ) {
    var t = e.next;
    e.f & rA || RA(e), e = t;
  }
}
function RA(A, e = !0) {
  var t = !1;
  if ((e || A.f & Rg) && A.nodes_start !== null) {
    for (var g = A.nodes_start, n = A.nodes_end; g !== null; ) {
      var i = g === n ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ yA(g)
      );
      g.remove(), g = i;
    }
    t = !0;
  }
  dr(A, e && !t), fr(A), ae(A, 0), sA(A, qA);
  var I = A.transitions;
  if (I !== null)
    for (const s of I)
      s.stop();
  ur(A);
  var B = A.parent;
  B !== null && B.first !== null && hr(A), A.next = A.prev = A.teardown = A.ctx = A.deps = A.fn = A.nodes_start = A.nodes_end = null;
}
function hr(A) {
  var e = A.parent, t = A.prev, g = A.next;
  t !== null && (t.next = g), g !== null && (g.prev = t), e !== null && (e.first === A && (e.first = g), e.last === A && (e.last = t));
}
function xt(A, e) {
  var t = [];
  wr(A, t, !0), Og(t, () => {
    RA(A), e && e();
  });
}
function Og(A, e) {
  var t = A.length;
  if (t > 0) {
    var g = () => --t || e();
    for (var n of A)
      n.out(g);
  } else
    e();
}
function wr(A, e, t) {
  if (!(A.f & WA)) {
    if (A.f ^= WA, A.transitions !== null)
      for (const I of A.transitions)
        (I.is_global || t) && e.push(I);
    for (var g = A.first; g !== null; ) {
      var n = g.next, i = (g.f & $e) !== 0 || (g.f & rA) !== 0;
      wr(g, e, i ? t : !1), g = n;
    }
  }
}
function Ut(A) {
  yr(A, !0);
}
function yr(A, e) {
  if (A.f & WA) {
    ce(A) && pe(A), A.f ^= WA;
    for (var t = A.first; t !== null; ) {
      var g = t.next, n = (t.f & $e) !== 0 || (t.f & rA) !== 0;
      yr(t, n ? e : !1), t = g;
    }
    if (A.transitions !== null)
      for (const i of A.transitions)
        (i.is_global || e) && i.in();
  }
}
const $g = typeof requestIdleCallback > "u" ? (A) => setTimeout(A, 1) : requestIdleCallback;
let _e = !1, Ge = !1, je = [], Ve = [];
function vr() {
  _e = !1;
  const A = je.slice();
  je = [], tr(A);
}
function br() {
  Ge = !1;
  const A = Ve.slice();
  Ve = [], tr(A);
}
function gt(A) {
  _e || (_e = !0, queueMicrotask(vr)), je.push(A);
}
function An(A) {
  Ge || (Ge = !0, $g(br)), Ve.push(A);
}
function en() {
  _e && vr(), Ge && br();
}
function mr(A) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
const Nr = 0, tn = 1;
let de = !1, he = Nr, oe = !1, se = null, XA = !1, nt = !1;
function Ht(A) {
  XA = A;
}
function Kt(A) {
  nt = A;
}
let NA = [], TA = 0;
let m = null;
function wA(A) {
  m = A;
}
let d = null;
function oA(A) {
  d = A;
}
let IA = null;
function rn(A) {
  IA = A;
}
let H = null, q = 0, uA = null;
function gn(A) {
  uA = A;
}
let Dr = 0, KA = !1, K = null;
function _r() {
  return ++Dr;
}
function nn() {
  return !or;
}
function ce(A) {
  var e = A.f;
  if (e & dA)
    return !0;
  if (e & Be) {
    var t = A.deps, g = (e & GA) !== 0;
    if (t !== null) {
      var n;
      if (e & Ne) {
        for (n = 0; n < t.length; n++)
          (t[n].reactions ??= []).push(A);
        A.f ^= Ne;
      }
      for (n = 0; n < t.length; n++) {
        var i = t[n];
        if (ce(
          /** @type {Derived} */
          i
        ) && Qr(
          /** @type {Derived} */
          i
        ), g && d !== null && !KA && !i?.reactions?.includes(A) && (i.reactions ??= []).push(A), i.version > A.version)
          return !0;
      }
    }
    g || sA(A, T);
  }
  return !1;
}
function In(A, e) {
  for (var t = e; t !== null; ) {
    if (t.f & Xe)
      try {
        t.fn(A);
        return;
      } catch {
        t.f ^= Xe;
      }
    t = t.parent;
  }
  throw de = !1, A;
}
function on(A) {
  return (A.f & qA) === 0 && (A.parent === null || (A.parent.f & Xe) === 0);
}
function ke(A, e, t, g) {
  if (de) {
    if (t === null && (de = !1), on(e))
      throw A;
    return;
  }
  t !== null && (de = !0);
  {
    In(A, e);
    return;
  }
}
function Gr(A) {
  var e = H, t = q, g = uA, n = m, i = KA, I = IA, B = K, s = A.f;
  H = /** @type {null | Value[]} */
  null, q = 0, uA = null, m = s & (rA | Ce) ? null : A, KA = !XA && (s & GA) !== 0, IA = null, K = A.ctx;
  try {
    var l = (
      /** @type {Function} */
      (0, A.fn)()
    ), a = A.deps;
    if (H !== null) {
      var c;
      if (ae(A, q), a !== null && q > 0)
        for (a.length = q + H.length, c = 0; c < H.length; c++)
          a[q + c] = H[c];
      else
        A.deps = a = H;
      if (!KA)
        for (c = q; c < a.length; c++)
          (a[c].reactions ??= []).push(A);
    } else a !== null && q < a.length && (ae(A, q), a.length = q);
    return l;
  } finally {
    H = e, q = t, uA = g, m = n, KA = i, IA = I, K = B;
  }
}
function sn(A, e) {
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
  (H === null || !H.includes(e)) && (sA(e, Be), e.f & (GA | Ne) || (e.f ^= Ne), ae(
    /** @type {Derived} **/
    e,
    0
  ));
}
function ae(A, e) {
  var t = A.deps;
  if (t !== null)
    for (var g = e; g < t.length; g++)
      sn(A, t[g]);
}
function pe(A) {
  var e = A.f;
  if (!(e & qA)) {
    sA(A, T);
    var t = d, g = K;
    d = A;
    try {
      e & Oe ? Pg(A) : dr(A), fr(A), ur(A);
      var n = Gr(A);
      A.teardown = typeof n == "function" ? n : null, A.version = Dr;
    } catch (i) {
      ke(i, A, t, g || A.ctx);
    } finally {
      d = t;
    }
  }
}
function Rr() {
  if (TA > 1e3) {
    TA = 0;
    try {
      Jg();
    } catch (A) {
      if (se !== null)
        ke(A, se, null);
      else
        throw A;
    }
  }
  TA++;
}
function Fr(A) {
  var e = A.length;
  if (e !== 0) {
    Rr();
    var t = XA;
    XA = !0;
    try {
      for (var g = 0; g < e; g++) {
        var n = A[g];
        n.f & T || (n.f ^= T);
        var i = [];
        Yr(n, i), an(i);
      }
    } finally {
      XA = t;
    }
  }
}
function an(A) {
  var e = A.length;
  if (e !== 0)
    for (var t = 0; t < e; t++) {
      var g = A[t];
      if (!(g.f & (qA | WA)))
        try {
          ce(g) && (pe(g), g.deps === null && g.first === null && g.nodes_start === null && (g.teardown === null ? hr(g) : g.fn = null));
        } catch (n) {
          ke(n, g, null, g.ctx);
        }
    }
}
function ln() {
  if (oe = !1, TA > 1001)
    return;
  const A = NA;
  NA = [], Fr(A), oe || (TA = 0, se = null);
}
function Me(A) {
  he === Nr && (oe || (oe = !0, queueMicrotask(ln))), se = A;
  for (var e = A; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (t & (Ce | rA)) {
      if (!(t & T)) return;
      e.f ^= T;
    }
  }
  NA.push(e);
}
function Yr(A, e) {
  var t = A.first, g = [];
  A: for (; t !== null; ) {
    var n = t.f, i = (n & rA) !== 0, I = i && (n & T) !== 0, B = t.next;
    if (!I && !(n & WA))
      if (n & le) {
        if (i)
          t.f ^= T;
        else
          try {
            ce(t) && pe(t);
          } catch (c) {
            ke(c, t, null, t.ctx);
          }
        var s = t.first;
        if (s !== null) {
          t = s;
          continue;
        }
      } else n & rr && g.push(t);
    if (B === null) {
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
    t = B;
  }
  for (var a = 0; a < g.length; a++)
    s = g[a], e.push(s), Yr(s, e);
}
function v(A) {
  var e = he, t = NA;
  try {
    Rr();
    const n = [];
    he = tn, NA = n, oe = !1, Fr(t);
    var g = A?.();
    return en(), (NA.length > 0 || n.length > 0) && v(), TA = 0, se = null, g;
  } finally {
    he = e, NA = t;
  }
}
async function Cn() {
  await Promise.resolve(), v();
}
function C(A) {
  var e = A.f, t = (e & tA) !== 0;
  if (t && e & qA) {
    var g = cr(
      /** @type {Derived} */
      A
    );
    return At(
      /** @type {Derived} */
      A
    ), g;
  }
  if (m !== null) {
    IA !== null && IA.includes(A) && Hg();
    var n = m.deps;
    H === null && n !== null && n[q] === A ? q++ : H === null ? H = [A] : H.push(A), uA !== null && d !== null && d.f & T && !(d.f & rA) && uA.includes(A) && (sA(d, dA), Me(d));
  } else if (t && /** @type {Derived} */
  A.deps === null)
    for (var i = (
      /** @type {Derived} */
      A
    ), I = i.parent, B = i; I !== null; )
      if (I.f & tA) {
        var s = (
          /** @type {Derived} */
          I
        );
        B = s, I = s.parent;
      } else {
        var l = (
          /** @type {Effect} */
          I
        );
        l.deriveds?.includes(B) || (l.deriveds ??= []).push(B);
        break;
      }
  return t && (i = /** @type {Derived} */
  A, ce(i) && Qr(i)), A.v;
}
function VA(A) {
  const e = m;
  try {
    return m = null, A();
  } finally {
    m = e;
  }
}
const Bn = ~(dA | Be | T);
function sA(A, e) {
  A.f = A.f & Bn | e;
}
function kr(A, e = !1, t) {
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
function pr(A) {
  const e = K;
  if (e !== null) {
    A !== void 0 && (e.x = A);
    const I = e.e;
    if (I !== null) {
      var t = d, g = m;
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
let Zt = !1;
function Mr() {
  Zt || (Zt = !0, document.addEventListener(
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
function Jr(A) {
  var e = m, t = d;
  wA(null), oA(null);
  try {
    return A();
  } finally {
    wA(e), oA(t);
  }
}
function cn(A, e, t, g = t) {
  A.addEventListener(e, () => Jr(t));
  const n = A.__on_r;
  n ? A.__on_r = () => {
    n(), g(!0);
  } : A.__on_r = () => g(!0), Mr();
}
const Lr = /* @__PURE__ */ new Set(), qe = /* @__PURE__ */ new Set();
function Qn(A, e, t, g) {
  function n(i) {
    if (g.capture || ie.call(e, i), !i.cancelBubble)
      return Jr(() => t.call(this, i));
  }
  return A.startsWith("pointer") || A.startsWith("touch") || A === "wheel" ? gt(() => {
    e.addEventListener(A, n, g);
  }) : e.addEventListener(A, n, g), n;
}
function En(A, e, t, g, n) {
  var i = { capture: g, passive: n }, I = Qn(A, e, t, i);
  (e === document.body || e === window || e === document) && zg(() => {
    e.removeEventListener(A, I, i);
  });
}
function un(A) {
  for (var e = 0; e < A.length; e++)
    Lr.add(A[e]);
  for (var t of qe)
    t(A);
}
function ie(A) {
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), g = A.type, n = A.composedPath?.() || [], i = (
    /** @type {null | Element} */
    n[0] || A.target
  ), I = 0, B = A.__root;
  if (B) {
    var s = n.indexOf(B);
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
    me(A, "currentTarget", {
      configurable: !0,
      get() {
        return i || t;
      }
    });
    var a = m, c = d;
    wA(null), oA(null);
    try {
      for (var Q, u = []; i !== null; ) {
        var N = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var R = i["__" + g];
          if (R !== void 0 && !/** @type {any} */
          i.disabled)
            if (er(R)) {
              var [x, ...P] = R;
              x.apply(i, [A, ...P]);
            } else
              R.call(i, A);
        } catch (k) {
          Q ? u.push(k) : Q = k;
        }
        if (A.cancelBubble || N === e || N === null)
          break;
        i = N;
      }
      if (Q) {
        for (let k of u)
          queueMicrotask(() => {
            throw k;
          });
        throw Q;
      }
    } finally {
      A.__root = e, delete A.currentTarget, wA(a), oA(c);
    }
  }
}
function Sr(A) {
  var e = document.createElement("template");
  return e.innerHTML = A, e.content;
}
function fA(A, e) {
  var t = (
    /** @type {Effect} */
    d
  );
  t.nodes_start === null && (t.nodes_start = A, t.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function gA(A, e) {
  var t = (e & vg) !== 0, g = (e & bg) !== 0, n, i = !A.startsWith("<!>");
  return () => {
    if (p)
      return fA(Y, null), Y;
    n === void 0 && (n = Sr(i ? A : "<!>" + A), t || (n = /** @type {Node} */
    /* @__PURE__ */ _A(n)));
    var I = (
      /** @type {TemplateNode} */
      g ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    if (t) {
      var B = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ _A(I)
      ), s = (
        /** @type {TemplateNode} */
        I.lastChild
      );
      fA(B, s);
    } else
      fA(I, I);
    return I;
  };
}
function fn() {
  if (p)
    return fA(Y, null), Y;
  var A = document.createDocumentFragment(), e = document.createComment(""), t = Ye();
  return A.append(e, t), fA(e, t), A;
}
function V(A, e) {
  if (p) {
    d.nodes_end = Y, jA();
    return;
  }
  A !== null && A.before(
    /** @type {Node} */
    e
  );
}
const dn = ["touchstart", "touchmove"];
function hn(A) {
  return dn.includes(A);
}
function xr(A, e) {
  return Ur(A, e);
}
function wn(A, e) {
  Te(), e.intro = e.intro ?? !1;
  const t = e.target, g = p, n = Y;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _A(t)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Pt); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ yA(i);
    if (!i)
      throw ZA;
    HA(!0), hA(
      /** @type {Comment} */
      i
    ), jA();
    const I = Ur(A, { ...e, anchor: i });
    if (Y === null || Y.nodeType !== 8 || /** @type {Comment} */
    Y.data !== $t)
      throw Fe(), ZA;
    return HA(!1), /**  @type {Exports} */
    I;
  } catch (I) {
    if (I === ZA)
      return e.recover === !1 && Lg(), Te(), Wg(t), HA(!1), xr(A, e);
    throw I;
  } finally {
    HA(g), hA(n);
  }
}
const SA = /* @__PURE__ */ new Map();
function Ur(A, { target: e, anchor: t, props: g = {}, events: n, context: i, intro: I = !0 }) {
  Te();
  var B = /* @__PURE__ */ new Set(), s = (c) => {
    for (var Q = 0; Q < c.length; Q++) {
      var u = c[Q];
      if (!B.has(u)) {
        B.add(u);
        var N = hn(u);
        e.addEventListener(u, ie, { passive: N });
        var R = SA.get(u);
        R === void 0 ? (document.addEventListener(u, ie, { passive: N }), SA.set(u, 1)) : SA.set(u, R + 1);
      }
    }
  };
  s(mg(Lr)), qe.add(s);
  var l = void 0, a = Er(() => {
    var c = t ?? e.appendChild(Ye());
    return De(() => {
      if (i) {
        kr({});
        var Q = (
          /** @type {ComponentContext} */
          K
        );
        Q.c = i;
      }
      n && (g.$$events = n), p && fA(
        /** @type {TemplateNode} */
        c,
        null
      ), l = A(c, g) || {}, p && (d.nodes_end = Y), i && pr();
    }), () => {
      for (var Q of B) {
        e.removeEventListener(Q, ie);
        var u = (
          /** @type {number} */
          SA.get(Q)
        );
        --u === 0 ? (document.removeEventListener(Q, ie), SA.delete(Q)) : SA.set(Q, u);
      }
      qe.delete(s), ze.delete(l), c !== t && c.parentNode?.removeChild(c);
    };
  });
  return ze.set(l, a), l;
}
let ze = /* @__PURE__ */ new WeakMap();
function yn(A) {
  const e = ze.get(A);
  e && e();
}
function EA(A, e, t = !1) {
  p && jA();
  var g = A, n = null, i = null, I = X, B = t ? $e : 0, s = !1;
  const l = (c, Q = !0) => {
    s = !0, a(Q, c);
  }, a = (c, Q) => {
    if (I === (I = c)) return;
    let u = !1;
    if (p) {
      const N = (
        /** @type {Comment} */
        g.data === Ot
      );
      !!I === N && (g = Tg(), hA(g), HA(!1), u = !0);
    }
    I ? (n ? Ut(n) : Q && (n = De(() => Q(g))), i && xt(i, () => {
      i = null;
    })) : (i ? Ut(i) : Q && (i = De(() => Q(g))), n && xt(n, () => {
      n = null;
    })), u && HA(!0);
  };
  rt(() => {
    s = !1, e(l), s || a(null, null);
  }, B), p && (g = Y);
}
function xA(A, e, t, g, n) {
  var i = A, I = "", B;
  rt(() => {
    if (I === (I = e() ?? "")) {
      p && jA();
      return;
    }
    B !== void 0 && (RA(B), B = void 0), I !== "" && (B = De(() => {
      if (p) {
        Y.data;
        for (var s = jA(), l = s; s !== null && (s.nodeType !== 8 || /** @type {Comment} */
        s.data !== ""); )
          l = s, s = /** @type {TemplateNode} */
          /* @__PURE__ */ yA(s);
        if (s === null)
          throw Fe(), ZA;
        fA(Y, l), i = hA(s);
        return;
      }
      var a = I + "", c = Sr(a);
      fA(
        /** @type {TemplateNode} */
        /* @__PURE__ */ _A(c),
        /** @type {TemplateNode} */
        c.lastChild
      ), i.before(c);
    }));
  });
}
function vn(A, e, t, g, n) {
  p && jA();
  var i = e.$$slots?.[t], I = !1;
  i === !0 && (i = e.children, I = !0), i === void 0 || i(A, I ? () => g : g);
}
function bn(A, e) {
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
function Xt(A) {
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
    A.__on_r = t, An(t), Mr();
  }
}
function mn(A, e) {
  var t = A.__attributes ??= {};
  t.value === (t.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when its `0`
  A.value === e && (e !== 0 || A.nodeName !== "PROGRESS") || (A.value = e);
}
function AA(A, e, t, g) {
  var n = A.__attributes ??= {};
  p && (n[e] = A.getAttribute(e), e === "src" || e === "srcset" || e === "href" && A.nodeName === "LINK") || n[e] !== (n[e] = t) && (e === "style" && "__styles" in A && (A.__styles = {}), e === "loading" && (A[Fg] = t), t == null ? A.removeAttribute(e) : typeof t != "string" && Nn(A).includes(e) ? A[e] = t : A.setAttribute(e, t));
}
var Tt = /* @__PURE__ */ new Map();
function Nn(A) {
  var e = Tt.get(A.nodeName);
  if (e) return e;
  Tt.set(A.nodeName, e = []);
  for (var t, g = Ze(A), n = Element.prototype; n !== g; ) {
    t = Ng(g);
    for (var i in t)
      t[i].set && e.push(i);
    g = Ze(g);
  }
  return e;
}
function Dn(A, e, t) {
  if (t) {
    if (A.classList.contains(e)) return;
    A.classList.add(e);
  } else {
    if (!A.classList.contains(e)) return;
    A.classList.remove(e);
  }
}
function _n(A, e, t = e) {
  cn(A, "change", (g) => {
    var n = g ? A.defaultChecked : A.checked;
    t(n);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (p && A.defaultChecked !== A.checked || // If defaultChecked is set, then checked == defaultChecked
  VA(e) == null) && t(A.checked), tt(() => {
    var g = e();
    A.checked = !!g;
  });
}
function Wt(A, e) {
  return A === e || A?.[Ie] === e;
}
function jt(A = {}, e, t, g) {
  return et(() => {
    var n, i;
    return tt(() => {
      n = i, i = [], VA(() => {
        A !== t(...i) && (e(A, ...i), n && Wt(t(...n), A) && e(null, ...n));
      });
    }), () => {
      gt(() => {
        i && Wt(t(...i), A) && e(null, ...i);
      });
    };
  }), A;
}
function Hr(A) {
  K === null && mr(), We(() => {
    const e = VA(A);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Gn(A) {
  K === null && mr(), Hr(() => () => VA(A));
}
let ue = !1;
function Rn(A) {
  var e = ue;
  try {
    return ue = !1, [A(), ue];
  } finally {
    ue = e;
  }
}
function Fn(A) {
  for (var e = d, t = d; e !== null && !(e.f & (rA | Ce)); )
    e = e.parent;
  try {
    return oA(e), A();
  } finally {
    oA(t);
  }
}
function G(A, e, t, g) {
  var n = (t & dg) !== 0, i = !or, I = (t & wg) !== 0, B = (t & yg) !== 0, s = !1, l;
  I ? [l, s] = Rn(() => (
    /** @type {V} */
    A[e]
  )) : l = /** @type {V} */
  A[e];
  var a = Ie in A || nr in A, c = DA(A, e)?.set ?? (a && I && e in A ? (L) => A[e] = L : void 0), Q = (
    /** @type {V} */
    g
  ), u = !0, N = !1, R = () => (N = !0, u && (u = !1, B ? Q = VA(
    /** @type {() => V} */
    g
  ) : Q = /** @type {V} */
  g), Q);
  l === void 0 && g !== void 0 && (c && i && Sg(), l = R(), c && c(l));
  var x;
  if (x = () => {
    var L = (
      /** @type {V} */
      A[e]
    );
    return L === void 0 ? R() : (u = !0, N = !1, L);
  }, !(t & hg))
    return x;
  if (c) {
    var P = A.$$legacy;
    return function(L, S) {
      return arguments.length > 0 ? ((!S || P || s) && c(S ? x() : L), L) : x();
    };
  }
  var k = !1, vA = !1, lA = /* @__PURE__ */ sr(l), U = Fn(
    () => /* @__PURE__ */ ne(() => {
      var L = x(), S = C(lA);
      return k ? (k = !1, vA = !0, S) : (vA = !1, lA.v = L);
    })
  );
  return n || (U.equals = Ir), function(L, S) {
    if (arguments.length > 0) {
      const O = S ? C(U) : I ? eA(L) : L;
      return U.equals(O) || (k = !0, F(lA, O), N && Q !== void 0 && (Q = O), VA(() => C(U))), L;
    }
    return C(U);
  };
}
function Yn(A) {
  return new kn(A);
}
class kn {
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
      var B = /* @__PURE__ */ sr(I);
      return t.set(i, B), B;
    };
    const n = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(i, I) {
          return C(t.get(I) ?? g(I, Reflect.get(i, I)));
        },
        has(i, I) {
          return I === nr ? !0 : (C(t.get(I) ?? g(I, Reflect.get(i, I))), Reflect.has(i, I));
        },
        set(i, I, B) {
          return F(t.get(I) ?? g(I, B), B), Reflect.set(i, I, B);
        }
      }
    );
    this.#A = (e.hydrate ? wn : xr)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: n,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && v(), this.#e = n.$$events;
    for (const i of Object.keys(this.#A))
      i === "$set" || i === "$destroy" || i === "$on" || me(this, i, {
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
      yn(this.#A);
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
let Kr;
typeof HTMLElement == "function" && (Kr = class extends HTMLElement {
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
          g !== "default" && (i.name = g), V(n, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, t = pn(this);
      for (const g of this.$$s)
        g in t && (g === "default" && !this.$$d.children ? (this.$$d.children = A(g), e.default = !0) : e[g] = A(g));
      for (const g of this.attributes) {
        const n = this.$$g_p(g.name);
        n in this.$$d || (this.$$d[n] = we(n, g.value, this.$$p_d, "toProp"));
      }
      for (const g in this.$$p_d)
        !(g in this.$$d) && this[g] !== void 0 && (this.$$d[g] = this[g], delete this[g]);
      this.$$c = Yn({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = Er(() => {
        tt(() => {
          this.$$r = !0;
          for (const g of be(this.$$c)) {
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
    return be(this.$$p_d).find(
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
function pn(A) {
  const e = {};
  return A.childNodes.forEach((t) => {
    e[
      /** @type {Element} node */
      t.slot || "default"
    ] = !0;
  }), e;
}
function Mn(A, e, t, g, n, i) {
  let I = class extends Kr {
    constructor() {
      super(A, t, n), this.$$p_d = e;
    }
    static get observedAttributes() {
      return be(e).map(
        (B) => (e[B].attribute || B).toLowerCase()
      );
    }
  };
  return be(e).forEach((B) => {
    me(I.prototype, B, {
      get() {
        return this.$$c && B in this.$$c ? this.$$c[B] : this.$$d[B];
      },
      set(s) {
        s = we(B, s, e), this.$$d[B] = s;
        var l = this.$$c;
        if (l) {
          var a = DA(l, B)?.get;
          a ? l[B] = s : l.$set({ [B]: s });
        }
      }
    });
  }), g.forEach((B) => {
    me(I.prototype, B, {
      get() {
        return this.$$c?.[B];
      }
    });
  }), A.element = /** @type {any} */
  I, I;
}
const Zr = new TextEncoder();
function Jn(A) {
  return [...new Uint8Array(A)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function Ln(A, e = "SHA-256", t = 1e5) {
  const g = Date.now().toString(16);
  A || (A = Math.round(Math.random() * t));
  const n = await Xr(g, A, e);
  return {
    algorithm: e,
    challenge: n,
    salt: g,
    signature: ""
  };
}
async function Xr(A, e, t) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Jn(
    await crypto.subtle.digest(
      t.toUpperCase(),
      Zr.encode(A + e)
    )
  );
}
function Sn(A, e, t = "SHA-256", g = 1e6, n = 0) {
  const i = new AbortController(), I = Date.now();
  return {
    promise: (async () => {
      for (let s = n; s <= g; s += 1) {
        if (i.signal.aborted)
          return null;
        if (await Xr(e, s, t) === A)
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
function xn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Un(A) {
  const e = atob(A), t = new Uint8Array(e.length);
  for (let g = 0; g < e.length; g++)
    t[g] = e.charCodeAt(g);
  return t;
}
function Hn(A, e = 12) {
  const t = new Uint8Array(e);
  for (let g = 0; g < e; g++)
    t[g] = A % 256, A = Math.floor(A / 256);
  return t;
}
async function Kn(A, e = "", t = 1e6, g = 0) {
  const n = "AES-GCM", i = new AbortController(), I = Date.now(), B = async () => {
    for (let a = g; a <= t; a += 1) {
      if (i.signal.aborted || !s || !l)
        return null;
      try {
        const c = await crypto.subtle.decrypt(
          {
            name: n,
            iv: Hn(a)
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
    l = Un(A);
    const a = await crypto.subtle.digest(
      "SHA-256",
      Zr.encode(e)
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
    promise: B(),
    controller: i
  };
}
var w = /* @__PURE__ */ ((A) => (A.ERROR = "error", A.VERIFIED = "verified", A.VERIFYING = "verifying", A.UNVERIFIED = "unverified", A.EXPIRED = "expired", A))(w || {});
const Zn = "data:application/wasm;base64,AGFzbQEAAAABnAEYYAJ/fwF/YAJ/fwBgA39/fwF/YAF/AGADf39/AGAFf39/f38AYAR/f39/AX9gAAF/YAR/f39/AGAAAGABfwF/YAV/f39/fwF/YAJ/fwFvYAFvAGAAAW9gAn9vAGAGf39/f39/AGAGf39/f39/AX9gBX9/fn9/AGAEf35/fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwAC5wIHFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMVX193YmluZGdlbl9zdHJpbmdfbmV3AAwWLi9kZXRlY3Rpb25fd2FzbV9iZy5qcxpfX3diZ19sb2dfYzIyMjgxOWE0MWUwNjNkMwANFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMaX193YmdfbmV3XzhhNmYyMzhhNmVjZTg2ZWEADhYuL2RldGVjdGlvbl93YXNtX2JnLmpzHF9fd2JnX3N0YWNrXzBlZDc1ZDY4NTc1YjBmM2MADxYuL2RldGVjdGlvbl93YXNtX2JnLmpzHF9fd2JnX2Vycm9yXzc1MzRiOGU5YTM2ZjFhYjQAARYuL2RldGVjdGlvbl93YXNtX2JnLmpzEF9fd2JpbmRnZW5fdGhyb3cAARYuL2RldGVjdGlvbl93YXNtX2JnLmpzH19fd2JpbmRnZW5faW5pdF9leHRlcm5yZWZfdGFibGUACQNcWwoCAwIBAQABAAABAAEHBAUEAQcFAQEIBAAFBBAEAQEBBAICAQQACgMGAwYDAwERBQsSFBYDCAIDBAADAAYCBAIAAAcAAQEAAQAABAAAAwABAwkAAQAAAQIDAQEECQJwATAwbwCAAQUDAQARBgkBfwFBgIDAAAsHuwEKBm1lbW9yeQIAE19fd2JnX2RldGVjdG9yX2ZyZWUAJgxkZXRlY3Rvcl9uZXcASRRkZXRlY3Rvcl9pc19kZXRlY3RlZAAtDmRldGVjdG9yX2NoZWNrADIPX193YmluZGdlbl9mcmVlAEURX193YmluZGdlbl9tYWxsb2MALBJfX3diaW5kZ2VuX3JlYWxsb2MAMRNfX3diaW5kZ2VuX2V4cG9ydF8zAQEQX193YmluZGdlbl9zdGFydAAGCTUBAEEBCy9IYWFhPTw2Njc3NiI4OTo1VEQSU1VBTVIkPigQWUtMTypOWjsfExhgPikPW1xHUAwBBQqv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AEHcmsAAQdSawAA2AgBB8JrAAEHkmsAANgIAQeSawABB3JrAADYCAEH4msAAQeyawAA2AgBB7JrAAEHkmsAANgIAQYCbwABB9JrAADYCAEH0msAAQeyawAA2AgBBiJvAAEH8msAANgIAQfyawABB9JrAADYCAEGQm8AAQYSbwAA2AgBBhJvAAEH8msAANgIAQZibwABBjJvAADYCAEGMm8AAQYSbwAA2AgBBoJvAAEGUm8AANgIAQZSbwABBjJvAADYCAEGom8AAQZybwAA2AgBBnJvAAEGUm8AANgIAQbCbwABBpJvAADYCAEGkm8AAQZybwAA2AgBBuJvAAEGsm8AANgIAQaybwABBpJvAADYCAEHQm8AAIAFBD2pBeHEiAEEIayICNgIAQbSbwABBrJvAADYCAEHIm8AAIARBKGsiAyABIABrakEIaiIANgIAIAIgAEEBcjYCBCABIANqQSg2AgRB3JvAAEGAgIABNgIADAgLIAIgA0kgASACTXINACAAKAIMIgNBAXENACADQQF2IAZGDQMLQeCbwABB4JvAACgCACIAIAEgACABSRs2AgAgASAEaiEDQaSZwAAhAAJAAkADQCADIAAoAgAiB0cEQCAAKAIIIgANAQwCCwsgACgCDCIDQQFxDQAgA0EBdiAGRg0BC0GkmcAAIQADQAJAIAIgACgCACIDTwRAIAIgAyAAKAIEaiIHSQ0BCyAAKAIIIQAMAQsLQdCbwAAgAUEPakF4cSIAQQhrIgM2AgBByJvAACAEQShrIgkgASAAa2pBCGoiADYCACADIABBAXI2AgQgASAJakEoNgIEQdybwABBgICAATYCACACIAdBIGtBeHFBCGsiACAAIAJBEGpJGyIDQRs2AgRBpJnAACkCACEKIANBEGpBrJnAACkCADcCACADIAo3AghBsJnAACAGNgIAQaiZwAAgBDYCAEGkmcAAIAE2AgBBrJnAACADQQhqNgIAIANBHGohAANAIABBBzYCACAAQQRqIgAgB0kNAAsgAiADRg0HIAMgAygCBEF+cTYCBCACIAMgAmsiAEEBcjYCBCADIAA2AgAgAEGAAk8EQCACIAAQEQwICyAAQfgBcUG0mcAAaiEBAn9BvJvAACgCACIDQQEgAEEDdnQiAHFFBEBBvJvAACAAIANyNgIAIAEMAQsgASgCCAshACABIAI2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NgIADwsgASADEA4LAkACQAJAAkACQCACKAIEIgNBAnFFBEAgAkHQm8AAKAIARg0CIAJBzJvAACgCAEYNAyACIANBeHEiAhAOIAEgACACaiIAQQFyNgIEIAAgAWogADYCACABQcybwAAoAgBHDQFBxJvAACAANgIADwsgAiADQX5xNgIEIAEgAEEBcjYCBCAAIAFqIAA2AgALIABBgAJJDQIgASAAEBFBACEBQeSbwABB5JvAACgCAEEBayIANgIAIAANBEGsmcAAKAIAIgAEQANAIAFBAWohASAAKAIIIgANAAsLQeSbwABB/x8gASABQf8fTRs2AgAPC0HQm8AAIAE2AgBByJvAAEHIm8AAKAIAIABqIgA2AgAgASAAQQFyNgIEQcybwAAoAgAgAUYEQEHEm8AAQQA2AgBBzJvAAEEANgIACyAAQdybwAAoAgAiA00NA0HQm8AAKAIAIgJFDQNBACEAQcibwAAoAgAiBEEpSQ0CQaSZwAAhAQNAIAIgASgCACIFTwRAIAIgBSABKAIEakkNBAsgASgCCCEBDAALAAtBzJvAACABNgIAQcSbwABBxJvAACgCACAAaiIANgIAIAEgAEEBcjYCBCAAIAFqIAA2AgAPCyAAQfgBcUG0mcAAaiECAn9BvJvAACgCACIDQQEgAEEDdnQiAHFFBEBBvJvAACAAIANyNgIAIAIMAQsgAigCCAshACACIAE2AgggACABNgIMIAEgAjYCDCABIAA2AggPC0GsmcAAKAIAIgEEQANAIABBAWohACABKAIIIgENAAsLQeSbwABB/x8gACAAQf8fTRs2AgAgAyAETw0AQdybwABBfzYCAAsL/QQBCn8jAEEwayIDJAAgAyABNgIsIAMgADYCKCADQQM6ACQgA0IgNwIcIANBADYCFCADQQA2AgwCfwJAIAIoAhAiCkUEQCACKAIMIgBFDQEgAigCCCIBIABBA3RqIQQgAEEBa0H/////AXFBAWohByACKAIAIQADQAJAIABBBGooAgAiBUUNACADKAIoIAAoAgAgBSADKAIsKAIMEQIARQ0AQQEMBAtBASABKAIAIANBDGogAUEEaigCABEAAA0DGiAAQQhqIQAgAUEIaiIBIARHDQALDAELIAIoAhQiAEUNACAAQQV0IQsgAEEBa0H///8/cUEBaiEHIAIoAgghBSACKAIAIQADQAJAIABBBGooAgAiAUUNACADKAIoIAAoAgAgASADKAIsKAIMEQIARQ0AQQEMAwsgAyAIIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAkIAMgAUEYaigCADYCICABQQxqKAIAIQRBACEJQQAhBgJAAkACQCABQQhqKAIAQQFrDgIAAgELIARBA3QgBWoiDCgCAA0BIAwoAgQhBAtBASEGCyADIAQ2AhAgAyAGNgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgBWoiBigCAA0BIAYoAgQhBAtBASEJCyADIAQ2AhggAyAJNgIUQQEgBSABQRRqKAIAQQN0aiIBKAIAIANBDGogAUEEaigCABEAAA0CGiAAQQhqIQAgCyAIQSBqIghHDQALCwJAIAcgAigCBE8NACADKAIoIAIoAgAgB0EDdGoiACgCACAAKAIEIAMoAiwoAgwRAgBFDQBBAQwBC0EACyADQTBqJAAL+QMBAn8gACABaiECAkACQCAAKAIEIgNBAXENACADQQJxRQ0BIAAoAgAiAyABaiEBIAAgA2siAEHMm8AAKAIARgRAIAIoAgRBA3FBA0cNAUHEm8AAIAE2AgAgAiACKAIEQX5xNgIEIAAgAUEBcjYCBCACIAE2AgAMAgsgACADEA4LAkACQAJAIAIoAgQiA0ECcUUEQCACQdCbwAAoAgBGDQIgAkHMm8AAKAIARg0DIAIgA0F4cSICEA4gACABIAJqIgFBAXI2AgQgACABaiABNgIAIABBzJvAACgCAEcNAUHEm8AAIAE2AgAPCyACIANBfnE2AgQgACABQQFyNgIEIAAgAWogATYCAAsgAUGAAk8EQCAAIAEQEQ8LIAFB+AFxQbSZwABqIQICf0G8m8AAKAIAIgNBASABQQN2dCIBcUUEQEG8m8AAIAEgA3I2AgAgAgwBCyACKAIICyEBIAIgADYCCCABIAA2AgwgACACNgIMIAAgATYCCA8LQdCbwAAgADYCAEHIm8AAQcibwAAoAgAgAWoiATYCACAAIAFBAXI2AgQgAEHMm8AAKAIARw0BQcSbwABBADYCAEHMm8AAQQA2AgAPC0HMm8AAIAA2AgBBxJvAAEHEm8AAKAIAIAFqIgE2AgAgACABQQFyNgIEIAAgAWogATYCAAsLiwMBB38jAEEQayIEJAACQAJAAkACQCABKAIEIgIEQCABKAIAIQcgAkEDcSEFAkAgAkEESQRAQQAhAgwBCyAHQRxqIQMgAkF8cSEIQQAhAgNAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCCAGQQRqIgZHDQALCyAFBEAgBkEDdCAHakEEaiEDA0AgAygCACACaiECIANBCGohAyAFQQFrIgUNAAsLIAEoAgxFDQIgAkEPSw0BIAcoAgQNAQwDC0EAIQIgASgCDEUNAgsgAkEAIAJBAEobQQF0IQILQQAhBSACQQBOBEAgAkUNAUGBmMAALQAAGkEBIQUgAkEBEEoiAw0CCyAFIAJBrJTAABA/AAtBASEDQQAhAgsgBEEANgIIIAQgAzYCBCAEIAI2AgAgBEGwk8AAIAEQCgRAQcyUwABB1gAgBEEPakG8lMAAQbyVwAAQIAALIAAgBCkCADcCACAAQQhqIARBCGooAgA2AgAgBEEQaiQAC+cCAQV/AkAgAUHN/3tBECAAIABBEE0bIgBrTw0AIABBECABQQtqQXhxIAFBC0kbIgRqQQxqEAciAkUNACACQQhrIQECQCAAQQFrIgMgAnFFBEAgASEADAELIAJBBGsiBSgCACIGQXhxIAIgA2pBACAAa3FBCGsiAiAAQQAgAiABa0EQTRtqIgAgAWsiAmshAyAGQQNxBEAgACADIAAoAgRBAXFyQQJyNgIEIAAgA2oiAyADKAIEQQFyNgIEIAUgAiAFKAIAQQFxckECcjYCACABIAJqIgMgAygCBEEBcjYCBCABIAIQCwwBCyABKAIAIQEgACADNgIEIAAgASACajYCAAsCQCAAKAIEIgFBA3FFDQAgAUF4cSICIARBEGpNDQAgACAEIAFBAXFyQQJyNgIEIAAgBGoiASACIARrIgRBA3I2AgQgACACaiICIAIoAgRBAXI2AgQgASAEEAsLIABBCGohAwsgAwuCAwEEfyAAKAIMIQICQAJAAkAgAUGAAk8EQCAAKAIYIQMCQAJAIAAgAkYEQCAAQRRBECAAKAIUIgIbaigCACIBDQFBACECDAILIAAoAggiASACNgIMIAIgATYCCAwBCyAAQRRqIABBEGogAhshBANAIAQhBSABIgJBFGogAkEQaiACKAIUIgEbIQQgAkEUQRAgARtqKAIAIgENAAsgBUEANgIACyADRQ0CAkAgACgCHEECdEGkmMAAaiIBKAIAIABHBEAgAygCECAARg0BIAMgAjYCFCACDQMMBAsgASACNgIAIAJFDQQMAgsgAyACNgIQIAINAQwCCyAAKAIIIgAgAkcEQCAAIAI2AgwgAiAANgIIDwtBvJvAAEG8m8AAKAIAQX4gAUEDdndxNgIADwsgAiADNgIYIAAoAhAiAQRAIAIgATYCECABIAI2AhgLIAAoAhQiAEUNACACIAA2AhQgACACNgIYDwsPC0HAm8AAQcCbwAAoAgBBfiAAKAIcd3E2AgALygIBA38jAEEQayICJAACQCABQYABTwRAIAJBADYCDAJ/IAFBgBBPBEAgAUGAgARPBEAgAkEMakEDciEEIAIgAUESdkHwAXI6AAwgAiABQQZ2QT9xQYABcjoADiACIAFBDHZBP3FBgAFyOgANQQQMAgsgAkEMakECciEEIAIgAUEMdkHgAXI6AAwgAiABQQZ2QT9xQYABcjoADUEDDAELIAJBDGpBAXIhBCACIAFBBnZBwAFyOgAMQQILIQMgBCABQT9xQYABcjoAACAAKAIAIAAoAggiAWsgA0kEQCAAIAEgAxAXIAAoAgghAQsgAwRAIAAoAgQgAWogAkEMaiAD/AoAAAsgACABIANqNgIIDAELIAAoAggiAyAAKAIARgRAIABBzJXAABAcCyAAIANBAWo2AgggACgCBCADaiABOgAACyACQRBqJABBAAvGAgECfyMAQRBrIgIkAAJAIAFBgAFPBEAgAkEANgIMAn8gAUGAEE8EQCABQYCABE8EQCACIAFBP3FBgAFyOgAPIAIgAUESdkHwAXI6AAwgAiABQQZ2QT9xQYABcjoADiACIAFBDHZBP3FBgAFyOgANQQQMAgsgAiABQT9xQYABcjoADiACIAFBDHZB4AFyOgAMIAIgAUEGdkE/cUGAAXI6AA1BAwwBCyACIAFBP3FBgAFyOgANIAIgAUEGdkHAAXI6AAxBAgsiASAAKAIAIAAoAggiA2tLBEAgACADIAEQFSAAKAIIIQMLIAEEQCAAKAIEIANqIAJBDGogAfwKAAALIAAgASADajYCCAwBCyAAKAIIIgMgACgCAEYEQCAAQdSOwAAQHAsgACgCBCADaiABOgAAIAAgA0EBajYCCAsgAkEQaiQAQQALxAIBBH8gAEIANwIQIAACf0EAIAFBgAJJDQAaQR8gAUH///8HSw0AGiABQQYgAUEIdmciA2t2QQFxIANBAXRrQT5qCyICNgIcIAJBAnRBpJjAAGohBEEBIAJ0IgNBwJvAACgCAHFFBEAgBCAANgIAIAAgBDYCGCAAIAA2AgwgACAANgIIQcCbwABBwJvAACgCACADcjYCAA8LAkACQCABIAQoAgAiAygCBEF4cUYEQCADIQIMAQsgAUEZIAJBAXZrQQAgAkEfRxt0IQUDQCADIAVBHXZBBHFqIgQoAhAiAkUNAiAFQQF0IQUgAiEDIAIoAgRBeHEgAUcNAAsLIAIoAggiASAANgIMIAIgADYCCCAAQQA2AhggACACNgIMIAAgATYCCA8LIARBEGogADYCACAAIAM2AhggACAANgIMIAAgADYCCAubAgEEfyMAQRBrIgIkAAJAIAFBgAFPBEAgAkEMaiIEQQJyIQMgAkEANgIMAkAgAUGAEE8EQCAEQQNyIQUgAUGAgARPBEAgAkEQaiEDIAIgAUESdkHwAXI6AAwgAiABQQZ2QT9xQYABcjoADiACIAFBDHZBP3FBgAFyOgANIAUhBAwCCyACIAFBDHZB4AFyOgAMIAIgAUEGdkE/cUGAAXI6AA0gAyEEIAUhAwwBCyACQQxqQQFyIQQgAiABQQZ2QcABcjoADAsgBCABQT9xQYABcjoAACAAIAJBDGogAxAnDAELIAAoAggiAyAAKAIARgRAIABBnInAABAcCyAAKAIEIANqIAE6AAAgACADQQFqNgIICyACQRBqJABBAAuoAgIDfwF+IwBBQGoiAiQAIAEoAgBBgICAgHhGBEAgASgCDCEDIAJBJGoiBEEANgIAIAJCgICAgBA3AhwgAkEwaiADKAIAIgNBCGopAgA3AwAgAkE4aiADQRBqKQIANwMAIAIgAykCADcDKCACQRxqQdyPwAAgAkEoahAKGiACQRhqIAQoAgAiAzYCACACIAIpAhwiBTcDECABQQhqIAM2AgAgASAFNwIACyABKQIAIQUgAUKAgICAEDcCACACQQhqIgMgAUEIaiIBKAIANgIAIAFBADYCAEGBmMAALQAAGiACIAU3AwBBDEEEEEoiAUUEQEEEQQwQXQALIAEgAikDADcCACABQQhqIAMoAgA2AgAgAEHQksAANgIEIAAgATYCACACQUBrJAALugIBAn8jAEEwayIAJAACQAJAQeSXwAAoAgBFBEBB/JfAACgCACEBQfyXwABBADYCACABRQ0BIABBBGogAREDAEHkl8AAKAIAIgENAiABBEBB6JfAAEEEQQQQIQtB5JfAAEEBNgIAQeiXwAAgACkCBDcCAEHwl8AAIABBDGopAgA3AgBB+JfAACAAQRRqKAIANgIACyAAQTBqJABB6JfAAA8LIABBADYCKCAAQQE2AhwgAEHkisAANgIYIABCBDcCICAAQRhqQcyLwAAQNAALIABBKGogAEEQaikCADcCACAAIAApAgg3AiAgACAAKAIENgIcIABBATYCGCAAQRhqIgEoAgAEQCABQQRqQQRBBBAhCyAAQQA2AiggAEEBNgIcIABB7IvAADYCGCAAQgQ3AiAgAUH0i8AAEDQAC9IBAgR/AX4jAEEgayIDJAACQAJAIAEgASACaiICSwRAQQAhAQwBC0EAIQFBCCACIAAoAgAiBUEBdCIEIAIgBEsbIgIgAkEITRsiBK0iB0IgiFBFDQAgB6ciBkH/////B0sNACADIAUEfyADIAU2AhwgAyAAKAIENgIUQQEFQQALNgIYIANBCGogBiADQRRqEB4gAygCCEEBRw0BIAMoAhAhAiADKAIMIQELIAEgAkGwj8AAED8ACyADKAIMIQEgACAENgIAIAAgATYCBCADQSBqJAAL1QEBBX8jAEEQayIHJAAgB0EMaiEIAkAgBEUNACABKAIAIgZFDQAgByADNgIMIAQgBmwhBSABKAIEIQkgB0EIaiEICyAIIAU2AgACQCAHKAIMIgUEQCAHKAIIIQYCQCACRQRAIAZFDQEgCSAGIAUQUQwBCyACIARsIQgCfwJAIARFBEAgBkUNASAJIAYgBRBRDAELIAkgBiAFIAgQQwwBCyAFCyIDRQ0CCyABIAI2AgAgASADNgIEC0GBgICAeCEFCyAAIAg2AgQgACAFNgIAIAdBEGokAAu4AQECfyMAQSBrIgMkAAJAAn9BACABIAEgAmoiAksNABpBAEEIIAIgACgCACIBQQF0IgQgAiAESxsiAiACQQhNGyIEQQBIDQAaQQAhAiADIAEEfyADIAE2AhwgAyAAKAIENgIUQQEFIAILNgIYIANBCGogBCADQRRqEB4gAygCCEEBRw0BIAMoAhAhACADKAIMCyAAQYCUwAAQPwALIAMoAgwhASAAIAQ2AgAgACABNgIEIANBIGokAAvBAQIDfwF+IwBBMGsiAiQAIAEoAgBBgICAgHhGBEAgASgCDCEDIAJBFGoiBEEANgIAIAJCgICAgBA3AgwgAkEgaiADKAIAIgNBCGopAgA3AwAgAkEoaiADQRBqKQIANwMAIAIgAykCADcDGCACQQxqQdyPwAAgAkEYahAKGiACQQhqIAQoAgAiAzYCACACIAIpAgwiBTcDACABQQhqIAM2AgAgASAFNwIACyAAQdCSwAA2AgQgACABNgIAIAJBMGokAAvnBAIPfwF+IwBBMGsiACQAIABBEGoiCxAUIgVBEGoiBygCADYCACAAQQhqIgwgBUEIaiIIKQIANwMAIAdBADYCACAIQgA3AgAgACAFKQIANwMAIAVCgICAgMAANwIAAn8jAEEQayIJJAACQCAAKAIMIgMgACgCCCIBRgRAIAMhAiAAKAIAIgEgA0YEQNBvQYABIAMgA0GAAU0bIgb8DwEiAkF/Rg0CAkAgACgCECIBRQRAIAAgAjYCEAwBCyABIANqIAJHDQMLIAlBCGohCiMAQSBrIgEkAAJAIAMiAiADIAZqIgZLDQAgBq1CAoYiD0IgiKcNACAPpyINQfz///8HSw0AAn8gACgCACICRQRAIAFBGGohBEEADAELIAFBHGohBCABQQQ2AhggASAAKAIENgIUIAJBAnQLIQ4gBCAONgIAIAFBCGpBBCANIAFBFGoQHSABKAIIRQRAIAEoAgwhBCAAIAY2AgAgACAENgIEQYGAgIB4IQQMAQsgASgCECECIAEoAgwhBAsgCiACNgIEIAogBDYCACABQSBqJAAgCSgCCEGBgICAeEcNAiAAKAIAIQEgACgCCCECCyABIAJNDQEgACACQQFqIgE2AgggACgCBCACQQJ0aiADQQFqNgIACyABIANNDQAgACAAKAIEIANBAnRqKAIANgIMIAAoAhAgCUEQaiQAIANqDAELAAsgAEEoaiAHKAIANgIAIABBIGogCCkCADcDACAFKQIAIQ8gBSAAKQMANwIAIAggDCkDADcCACAHIAsoAgA2AgAgACAPNwMYIABBGGpBBEEEECEgAEEwaiQAC5YCAQJ/IwBBIGsiBSQAQaCYwABBoJjAACgCACIGQQFqNgIAAkACf0EAIAZBAEgNABpBAUHsm8AALQAADQAaQeybwABBAToAAEHom8AAQeibwAAoAgBBAWo2AgBBAgtB/wFxIgZBAkcEQCAGQQFxRQ0BIAVBCGogACABKAIYEQEAAAtBlJjAACgCACIGQQBIDQBBlJjAACAGQQFqNgIAQZSYwABBmJjAACgCAAR/IAUgACABKAIUEQEAIAUgBDoAHSAFIAM6ABwgBSACNgIYIAUgBSkDADcCEEGYmMAAKAIAIAVBEGpBnJjAACgCACgCFBEBAEGUmMAAKAIAQQFrBSAGCzYCAEHsm8AAQQA6AAAgA0UNAAALAAuDAQICfwF+IAACfwJAIAGtIgRCIIinDQAgBKciAkH/////B0sNACACRQRAIABBATYCCCAAQQA2AgRBAAwCC0GBmMAALQAAGiACQQEQSiIDBEAgACADNgIIIAAgATYCBEEADAILIAAgAjYCCCAAQQE2AgRBAQwBCyAAQQA2AgRBAQs2AgALlgEBBH8jAEEgayICJABBCCAAKAIAIgRBAXQiAyADQQhNGyIDQQBIBEBBAEEAIAEQPwALIAIgBAR/IAIgBDYCHCACIAAoAgQ2AhRBAQUgBQs2AhggAkEIaiADIAJBFGoQHiACKAIIQQFGBEAgAigCDCACKAIQIAEQPwALIAIoAgwhASAAIAM2AgAgACABNgIEIAJBIGokAAuGAQEBfyAAAn8CQAJ/AkAgAkEATgRAIAMoAgQEQCADKAIIIgQEQCADKAIAIAQgASACEEMMBAsLIAJFDQFBgZjAAC0AABogAiABEEoMAgsgAEEANgIEDAILIAELIgMEQCAAIAI2AgggACADNgIEQQAMAgsgACACNgIIIAAgATYCBAtBAQs2AgALgwEBAX8CQCABQQBOBEACfyACKAIEBEAgAigCCCIDBEAgAigCACADQQEgARBDDAILC0EBIAFFDQAaQYGYwAAtAAAaIAFBARBKCyICBEAgACABNgIIIAAgAjYCBCAAQQA2AgAPCyAAIAE2AgggAEEBNgIEDAELIABBADYCBAsgAEEBNgIAC3kBAX8jAEEgayICJAACfyAAKAIAQYCAgIB4RwRAIAEgACgCBCAAKAIIEEYMAQsgAkEQaiAAKAIMKAIAIgBBCGopAgA3AwAgAkEYaiAAQRBqKQIANwMAIAIgACkCADcDCCABKAIcIAEoAiAgAkEIahAKCyACQSBqJAALewEBfyMAQUBqIgUkACAFIAE2AgwgBSAANgIIIAUgAzYCFCAFIAI2AhAgBUECNgIcIAVBjJbAADYCGCAFQgI3AiQgBSAFQRBqrUKAgICA4AWENwM4IAUgBUEIaq1CgICAgPAFhDcDMCAFIAVBMGo2AiAgBUEYaiAEEDQAC28BBH8jAEEQayIDJAAgA0EMaiEFAkAgAkUNACAAKAIAIgZFDQAgAyABNgIMIAIgBmwhBCAAKAIEIQIgA0EIaiEFCyAFIAQ2AgACQCADKAIMIgBFDQAgAygCCCIBRQ0AIAIgASAAEFELIANBEGokAAvdAQECfyMAQSBrIgYkACABRQRAQYiGwABBMhBWAAsgBkEUaiIHIAEgAyAEIAUgAigCEBEFACMAQRBrIgMkAAJAAkAgBkEIaiICIAcoAggiASAHKAIASQR/IANBCGogByABQQRBBBAWIAMoAggiAUGBgICAeEcNASAHKAIIBSABCzYCBCACIAcoAgQ2AgAgA0EQaiQADAELIAEgAygCDEH4hcAAED8ACyAGKAIIIQEgBiAGKAIMNgIEIAYgATYCACAGKAIEIQEgACAGKAIANgIAIAAgATYCBCAGQSBqJAALagECfyMAQRBrIgMkAAJAIAAgASgCCCIEIAEoAgBJBH8gA0EIaiABIARBAUEBEBYgAygCCCIEQYGAgIB4Rw0BIAEoAggFIAQLNgIEIAAgASgCBDYCACADQRBqJAAPCyAEIAMoAgwgAhA/AAtmACMAQTBrIgAkAEGAmMAALQAABEAgAEECNgIMIABBzJHAADYCCCAAQgE3AhQgACABNgIsIAAgAEEsaq1CgICAgIADhDcDICAAIABBIGo2AhAgAEEIakH0kcAAEDQACyAAQTBqJAALZQECfwJAAkAgAQRAIAFBCGsiAyADKAIAQQFqIgI2AgAgAkUNASABKAIAIgJBf0YNAiAAIAM2AgggACABNgIEIAAgAUEEajYCACABIAJBAWo2AgAPCxBYCwALQYuNwABBzwAQVgALpAEBAX8jAEEQayICJAACQAJAIAFFBEAgAARAIABBCGsiASgCAEEBRgRAIAFBADYCAAJAIAFBf0YNACAAQQRrIgAgACgCAEEBayIANgIAIAANACABQQxBBBBRCwwDC0GMhMAAQT8QVgALEFgACyAARQ0BIABBCGsiACAAKAIAQQFrIgE2AgAgAiAANgIMIAENACACQQxqEDMLIAJBEGokAA8LEFgAC98CAgh/AX4gAiABayIFIAAoAgAgACgCCCICa0sEQCMAQRBrIgYkACAGQQhqIQkjAEEgayIDJAACQCACIAVqIgcgAkkNAEEIIAcgACgCACIIQQF0IgIgAiAHSRsiAiACQQhNGyIHrSILQiCIpw0AIAunIgpB/////wdLDQACfyAIRQRAIANBGGohBEEADAELIANBHGohBCADQQE2AhggAyAAKAIENgIUIAgLIQggBCAINgIAIANBCGpBASAKIANBFGoQHSADKAIIRQRAIAMoAgwhBCAAIAc2AgAgACAENgIEQYGAgIB4IQQMAQsgAygCECECIAMoAgwhBAsgCSACNgIEIAkgBDYCACADQSBqJAAgBigCCCICQYGAgIB4RwRAIAIgBigCDEGcisAAED8ACyAGQRBqJAAgACgCCCECCyAFBEAgACgCBCACaiABIAX8CgAACyAAIAAoAgggBWo2AggLRwEBfyAAKAIAIAAoAggiA2sgAkkEQCAAIAMgAhAVIAAoAgghAwsgAgRAIAAoAgQgA2ogASAC/AoAAAsgACACIANqNgIIQQALRwEBfyAAKAIAIAAoAggiA2sgAkkEQCAAIAMgAhAXIAAoAgghAwsgAgRAIAAoAgQgA2ogASAC/AoAAAsgACACIANqNgIIQQALTQECf0GBmMAALQAAGiABKAIEIQIgASgCACEDQQhBBBBKIgFFBEBBBEEIEF0ACyABIAI2AgQgASADNgIAIABB4JLAADYCBCAAIAE2AgALQQEBfyMAQSBrIgMkACADQQA2AhAgA0EBNgIEIANCBDcCCCADIAE2AhwgAyAANgIYIAMgA0EYajYCACADIAIQNAALLwACQCABRSAAIAEQQEVyDQAgAARAQYGYwAAtAAAaIAAgARBKIgFFDQELIAEPCwALmwIBBX8jAEEQayIDJAAgA0EEaiIFIAAQJSMAQUBqIgAkACAAQRRqIgRBFRAbIAAoAhghAgJAIAAoAhRBAUcEQCAAKAIcIgFB6ITAACkAADcAACABQQ1qQfWEwAApAAA3AAAgAUEIakHwhMAAKQAANwAAIABBATYCGCAAQeCEwAA2AhQgAEIBNwIgIABBFTYCPCAAIAE2AjggACACNgI0IABBATYCMCAAIABBLGo2AhwgACAAQTRqIgE2AiwgAEEIaiICIAQQDCABEFcgACgCDCAAKAIQEEIhASACEFcgACABNgIUIAQQXyABQYQBTwRAIAEQLgsgAEFAayQADAELIAIgACgCHEH8g8AAED8ACyAFEDAgA0EQaiQAQQELpQICCH8BfiMAQRBrIgMkACADIAA2AgwgAEGEAU8EQCAA0G8mASMAQTBrIgAkACAAQRBqIgcQFCIBQRBqIgQoAgA2AgAgAEEIaiIIIAFBCGoiBSkCADcDACAEQQA2AgAgBUIANwIAIAEpAgAhCSABQoCAgIDAADcCACAAIAk3AwACQCADQQxqKAIAIgIgACgCECIGTwRAIAIgBmsiAiAAKAIISQ0BCwALIAAoAgwhBiAAIAI2AgwgACgCBCACQQJ0aiAGNgIAIABBKGogBCgCADYCACAAQSBqIAUpAgA3AwAgASkCACEJIAEgACkDADcCACAFIAgpAwA3AgAgBCAHKAIANgIAIAAgCTcDGCAAQRhqQQRBBBAhIABBMGokAAsgA0EQaiQACzgAAkAgAkGAgMQARg0AIAAgAiABKAIQEQAARQ0AQQEPCyADRQRAQQAPCyAAIANBACABKAIMEQIACzcBAX8gACgCBCIBIAEoAgBBAWs2AgAgACgCCCIBIAEoAgBBAWsiATYCACABRQRAIABBCGoQMwsLJQACQCADRSABIAMQQEVyRQRAIAAgASADIAIQQyIADQELAAsgAAuJAgEFfyMAQRBrIgMkACADQQRqIgUgABAlIwBBQGoiACQAIABBFGoiBEEPEBsgACgCGCEBAkAgACgCFEEBRwRAIAAoAhwiAkH9hMAAKQAANwAAIAJBB2pBhIXAACkAADcAACAAQQE2AhggAEHghMAANgIUIABCATcCICAAQQ82AjwgACACNgI4IAAgATYCNCAAQQE2AjAgACAAQSxqNgIcIAAgAEE0aiIBNgIsIABBCGoiAiAEEAwgARBXIAAoAgwgACgCEBBCIQEgAhBXIAAgATYCFCAEEF8gAUGEAU8EQCABEC4LIABBQGskAAwBCyABIAAoAhxB/IPAABA/AAsgBRAwIANBEGokAAsuAQF/AkAgACgCACIAQX9GDQAgACAAKAIEQQFrIgE2AgQgAQ0AIABBDEEEEFELC/oBAgJ/AX4jAEEQayICJAAgAkEBOwEMIAIgATYCCCACIAA2AgQjAEEQayIBJAAgAkEEaiIAKQIAIQQgASAANgIMIAEgBDcCBCMAQRBrIgAkACABQQRqIgEoAgAiAigCDCEDAkACQAJAAkAgAigCBA4CAAECCyADDQFBASECQQAhAwwCCyADDQAgAigCACICKAIEIQMgAigCACECDAELIABBgICAgHg2AgAgACABNgIMIABBjJPAACABKAIEIAEoAggiAC0ACCAALQAJEBoACyAAIAM2AgQgACACNgIAIABB8JLAACABKAIEIAEoAggiAC0ACCAALQAJEBoACyQAIABFBEBBiIbAAEEyEFYACyAAIAIgAyAEIAUgASgCEBELAAsiACAARQRAQYiGwABBMhBWAAsgACACIAMgBCABKAIQEQgACyIAIABFBEBBiIbAAEEyEFYACyAAIAIgAyAEIAEoAhARBgALIgAgAEUEQEGIhsAAQTIQVgALIAAgAiADIAQgASgCEBETAAsiACAARQRAQYiGwABBMhBWAAsgACACIAMgBCABKAIQERUACyIAIABFBEBBiIbAAEEyEFYACyAAIAIgAyAEIAEoAhARFwALJwEBfyAAKAIAIgFBgICAgHhyQYCAgIB4RwRAIAAoAgQgAUEBEFELCyAAIABFBEBBiIbAAEEyEFYACyAAIAIgAyABKAIQEQQACx4AIABFBEBBiIbAAEEyEFYACyAAIAIgASgCEBEAAAsZAQF/IAAoAgAiAQRAIAAoAgQgAUEBEFELC0EAIABFBEAjAEEgayIAJAAgAEEANgIYIABBATYCDCAAQdyTwAA2AgggAEIENwIQIABBCGogAhA0AAsgACABEF0ACxUAIAFpQQFGIABBgICAgHggAWtNcQscACAAQQA2AhAgAEIANwIIIABCgICAgMAANwIACxYBAW8gACABEAAhAhAZIgAgAiYBIAAL6QYBBn8CfwJAAkACQAJAAkAgAEEEayIFKAIAIgZBeHEiBEEEQQggBkEDcSIHGyABak8EQCAHQQAgAUEnaiIJIARJGw0BAkACQCACQQlPBEAgAiADEA0iCA0BQQAMCQsgA0HM/3tLDQFBECADQQtqQXhxIANBC0kbIQECQCAHRQRAIAFBgAJJIAQgAUEEcklyIAQgAWtBgYAIT3INAQwJCyAAQQhrIgIgBGohBwJAAkACQAJAIAEgBEsEQCAHQdCbwAAoAgBG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Yy9pbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zi9jb25zb2xlX2Vycm9yX3BhbmljX2hvb2stMC4xLjcvc3JjL2xpYi5ycwAAABAAawAAAJUAAAAOAEGEgcAAC8kGAQAAAAIAAAADAAAABAAAAE9uY2UgaW5zdGFuY2UgaGFzIHByZXZpb3VzbHkgYmVlbiBwb2lzb25lZAAAlAAQACoAAABvbmUtdGltZSBpbml0aWFsaXphdGlvbiBtYXkgbm90IGJlIHBlcmZvcm1lZCByZWN1cnNpdmVsecgAEAA4AAAAL1VzZXJzL2VyZnVyLy5ydXN0dXAvdG9vbGNoYWlucy9uaWdodGx5LWFhcmNoNjQtYXBwbGUtZGFyd2luL2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvc3RkL3NyYy9zeW5jL3BvaXNvbi9vbmNlLnJzAAAACAEQAHUAAACbAAAAMgAAAC9Vc2Vycy9lcmZ1ci8ucnVzdHVwL3Rvb2xjaGFpbnMvbmlnaHRseS1hYXJjaDY0LWFwcGxlLWRhcndpbi9saWIvcnVzdGxpYi9zcmMvcnVzdC9saWJyYXJ5L2FsbG9jL3NyYy9zbGljZS5yc5ABEABsAAAAogAAABkAAABhdHRlbXB0ZWQgdG8gdGFrZSBvd25lcnNoaXAgb2YgUnVzdCB2YWx1ZSB3aGlsZSBpdCB3YXMgYm9ycm93ZWREZXRlY3Rvcjo6bmV3W3dhc21dIABYAhAABwAAAERldGVjdG9yOjppc19kZXRlY3RlZERldGVjdG9yOjpjaGVjay9Vc2Vycy9lcmZ1ci8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmL3dhc20tYmluZGdlbi0wLjIuMTAwL3NyYy9jb252ZXJ0L3NsaWNlcy5yc4wCEABsAAAAJAEAAA4AAABjbG9zdXJlIGludm9rZWQgcmVjdXJzaXZlbHkgb3IgYWZ0ZXIgYmVpbmcgZHJvcHBlZC9Vc2Vycy9lcmZ1ci8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmL3dhc20tYmluZGdlbi0wLjIuMTAwL3NyYy9jb252ZXJ0L3NsaWNlcy5ycwAAOgMQAGwAAAAkAQAADgAAABEAAAAMAAAABAAAABIAAAATAAAAFABB2IfAAAvhDAEAAAAVAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseS9Vc2Vycy9lcmZ1ci8ucnVzdHVwL3Rvb2xjaGFpbnMvbmlnaHRseS1hYXJjaDY0LWFwcGxlLWRhcndpbi9saWIvcnVzdGxpYi9zcmMvcnVzdC9saWJyYXJ5L2FsbG9jL3NyYy9zdHJpbmcucnMXBBAAbQAAAOEKAAAOAAAARXJyb3IAAAAXBBAAbQAAAI0FAAAbAAAAL1VzZXJzL2VyZnVyLy5ydXN0dXAvdG9vbGNoYWlucy9uaWdodGx5LWFhcmNoNjQtYXBwbGUtZGFyd2luL2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvYWxsb2Mvc3JjL3Jhd192ZWMucnMAAKwEEABuAAAAKgIAABEAAAAKClN0YWNrOgoKCgpMYXp5IGluc3RhbmNlIGhhcyBwcmV2aW91c2x5IGJlZW4gcG9pc29uZWQAADgFEAAqAAAAL1VzZXJzL2VyZnVyLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2Yvb25jZV9jZWxsLTEuMjAuMy9zcmMvbGliLnJzAAAAbAUQAF0AAAAIAwAAGQAAAHJlZW50cmFudCBpbml0AADcBRAADgAAAGwFEABdAAAAegIAAA0AAAAvVXNlcnMvZXJmdXIvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zi93YXNtLWJpbmRnZW4tMC4yLjEwMC9zcmMvY29udmVydC9zbGljZXMucnNudWxsIHBvaW50ZXIgcGFzc2VkIHRvIHJ1c3RyZWN1cnNpdmUgdXNlIG9mIGFuIG9iamVjdCBkZXRlY3RlZCB3aGljaCB3b3VsZCBsZWFkIHRvIHVuc2FmZSBhbGlhc2luZyBpbiBydXN0AAAEBhAAbAAAAOgAAAABAAAAbGlicmFyeS9zdGQvc3JjL3Bhbmlja2luZy5ycy9ydXN0Yy82MTdhYWQ4YzJlODc4M2Y2ZGY4ZTVkMWY4YmIxZTRiY2RjNzBhYTdiL2xpYnJhcnkvYWxsb2Mvc3JjL3N0cmluZy5ycwAIBxAASwAAAI0FAAAbAAAAL3J1c3RjLzYxN2FhZDhjMmU4NzgzZjZkZjhlNWQxZjhiYjFlNGJjZGM3MGFhN2IvbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc2QHEABMAAAAKgIAABEAAAA6AAAAAQAAAAAAAADABxAAAQAAAMAHEAABAAAAGgAAAAwAAAAEAAAAGwAAABwAAAAdAAAAL3J1c3QvZGVwcy9kbG1hbGxvYy0wLjIuNy9zcmMvZGxtYWxsb2MucnNhc3NlcnRpb24gZmFpbGVkOiBwc2l6ZSA+PSBzaXplICsgbWluX292ZXJoZWFkAPQHEAApAAAAqAQAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBwc2l6ZSA8PSBzaXplICsgbWF4X292ZXJoZWFkAAD0BxAAKQAAAK4EAAANAAAAcGFuaWNrZWQgYXQgOgptZW1vcnkgYWxsb2NhdGlvbiBvZiAgYnl0ZXMgZmFpbGVkqggQABUAAAC/CBAADQAAAGxpYnJhcnkvc3RkL3NyYy9hbGxvYy5yc9wIEAAYAAAAYwEAAAkAAABjYW5ub3QgbW9kaWZ5IHRoZSBwYW5pYyBob29rIGZyb20gYSBwYW5pY2tpbmcgdGhyZWFkBAkQADQAAADsBhAAHAAAAI4AAAAJAAAAGgAAAAwAAAAEAAAAHgAAAAAAAAAIAAAABAAAAB8AAAAAAAAACAAAAAQAAAAgAAAAIQAAACIAAAAjAAAAJAAAABAAAAAEAAAAJQAAACYAAAAnAAAAKAAAAEVycm9yAAAAKQAAAAwAAAAEAAAAKgAAACsAAAAsAAAAY2FwYWNpdHkgb3ZlcmZsb3cAAADICRAAEQAAAGxpYnJhcnkvYWxsb2Mvc3JjL3Jhd192ZWMucnPkCRAAHAAAACoCAAARAAAAbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzABAKEAAbAAAA6gEAABcAQcSUwAALoAMBAAAALQAAAGEgZm9ybWF0dGluZyB0cmFpdCBpbXBsZW1lbnRhdGlvbiByZXR1cm5lZCBhbiBlcnJvciB3aGVuIHRoZSB1bmRlcmx5aW5nIHN0cmVhbSBkaWQgbm90bGlicmFyeS9hbGxvYy9zcmMvZm10LnJzAACiChAAGAAAAIoCAAAOAAAAEAoQABsAAACNBQAAGwAAAGNhbGxlZCBgT3B0aW9uOjp1bndyYXAoKWAgb24gYSBgTm9uZWAgdmFsdWU6IAAAAAEAAAAAAAAABwsQAAIAAAAwMDAxMDIwMzA0MDUwNjA3MDgwOTEwMTExMjEzMTQxNTE2MTcxODE5MjAyMTIyMjMyNDI1MjYyNzI4MjkzMDMxMzIzMzM0MzUzNjM3MzgzOTQwNDE0MjQzNDQ0NTQ2NDc0ODQ5NTA1MTUyNTM1NDU1NTY1NzU4NTk2MDYxNjI2MzY0NjU2NjY3Njg2OTcwNzE3MjczNzQ3NTc2Nzc3ODc5ODA4MTgyODM4NDg1ODY4Nzg4ODk5MDkxOTI5Mzk0OTU5Njk3OTg5OQBB/JfAAAsBFgB4CXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMlMS44Ny4wLW5pZ2h0bHkgKDYxN2FhZDhjMiAyMDI1LTAyLTI0KQZ3YWxydXMGMC4yMy4zDHdhc20tYmluZGdlbgcwLjIuMTAwAGsPdGFyZ2V0X2ZlYXR1cmVzBisPbXV0YWJsZS1nbG9iYWxzKxNub250cmFwcGluZy1mcHRvaW50KwtidWxrLW1lbW9yeSsIc2lnbi1leHQrD3JlZmVyZW5jZS10eXBlcysKbXVsdGl2YWx1ZQ==", Xn = async (A = {}, e) => {
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
let z;
function Tn(A) {
  z = A;
}
const Wn = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
let Tr = new Wn("utf-8", { ignoreBOM: !0, fatal: !0 });
Tr.decode();
let fe = null;
function ye() {
  return (fe === null || fe.byteLength === 0) && (fe = new Uint8Array(z.memory.buffer)), fe;
}
function it(A, e) {
  return A = A >>> 0, Tr.decode(ye().subarray(A, A + e));
}
let Pe = 0;
const jn = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
let ve = new jn("utf-8");
const Vn = typeof ve.encodeInto == "function" ? function(A, e) {
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
    const B = ve.encode(A), s = e(B.length, 1) >>> 0;
    return ye().subarray(s, s + B.length).set(B), Pe = B.length, s;
  }
  let g = A.length, n = e(g, 1) >>> 0;
  const i = ye();
  let I = 0;
  for (; I < g; I++) {
    const B = A.charCodeAt(I);
    if (B > 127) break;
    i[n + I] = B;
  }
  if (I !== g) {
    I !== 0 && (A = A.slice(I)), n = t(n, g, g = I + A.length * 3, 1) >>> 0;
    const B = ye().subarray(n + I, n + g), s = Vn(A, B);
    I += s.written, n = t(n, g, I, 1) >>> 0;
  }
  return Pe = I, n;
}
let UA = null;
function Vt() {
  return (UA === null || UA.buffer.detached === !0 || UA.buffer.detached === void 0 && UA.buffer !== z.memory.buffer) && (UA = new DataView(z.memory.buffer)), UA;
}
const qt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((A) => z.__wbg_detector_free(A >>> 0, 1));
class Re {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Re.prototype);
    return t.__wbg_ptr = e, qt.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, qt.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    z.__wbg_detector_free(e, 0);
  }
  /**
   * @returns {Detector}
   */
  static new() {
    const e = z.detector_new();
    return Re.__wrap(e);
  }
  /**
   * @returns {boolean}
   */
  is_detected() {
    return z.detector_is_detected(this.__wbg_ptr) !== 0;
  }
  check() {
    z.detector_check(this.__wbg_ptr);
  }
}
function zn(A, e) {
  let t, g;
  try {
    t = A, g = e, console.error(it(A, e));
  } finally {
    z.__wbindgen_free(t, g, 1);
  }
}
function Pn(A) {
  console.log(A);
}
function On() {
  return new Error();
}
function $n(A, e) {
  const t = e.stack, g = qn(t, z.__wbindgen_malloc, z.__wbindgen_realloc), n = Pe;
  Vt().setInt32(A + 4 * 1, n, !0), Vt().setInt32(A + 4 * 0, g, !0);
}
function Ai() {
  const A = z.__wbindgen_export_3, e = A.grow(4);
  A.set(0, void 0), A.set(e + 0, void 0), A.set(e + 1, null), A.set(e + 2, !0), A.set(e + 3, !1);
}
function ei(A, e) {
  return it(A, e);
}
function ti(A, e) {
  throw new Error(it(A, e));
}
URL = globalThis.URL;
const aA = await Xn({ "./detection_wasm_bg.js": {
  __wbindgen_string_new: ei,
  __wbg_log_c222819a41e063d3: Pn,
  __wbg_new_8a6f238a6ece86ea: On,
  __wbg_stack_0ed75d68575b0f3c: $n,
  __wbg_error_7534b8e9a36f1ab4: zn,
  __wbindgen_throw: ti,
  __wbindgen_init_externref_table: Ai
} }, Zn), ri = aA.memory, gi = aA.__wbg_detector_free, ni = aA.detector_new, ii = aA.detector_is_detected, Ii = aA.detector_check, oi = aA.__wbindgen_free, si = aA.__wbindgen_malloc, ai = aA.__wbindgen_realloc, li = aA.__wbindgen_export_3, Wr = aA.__wbindgen_start, Ci = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __wbg_detector_free: gi,
  __wbindgen_export_3: li,
  __wbindgen_free: oi,
  __wbindgen_malloc: si,
  __wbindgen_realloc: ai,
  __wbindgen_start: Wr,
  detector_check: Ii,
  detector_is_detected: ii,
  detector_new: ni,
  memory: ri
}, Symbol.toStringTag, { value: "Module" }));
Tn(Ci);
Wr();
class Bi {
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
var ci = /* @__PURE__ */ gA('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-ddsc3z"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-ddsc3z"></path></svg>'), Qi = /* @__PURE__ */ gA('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span> <input type="hidden" class="svelte-ddsc3z">', 1), Ei = /* @__PURE__ */ gA('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span>'), ui = /* @__PURE__ */ gA('<label class="svelte-ddsc3z"><!></label>'), fi = /* @__PURE__ */ gA('<div class="svelte-ddsc3z"><a target="_blank" class="altcha-logo svelte-ddsc3z"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-ddsc3z"></path></svg></a></div>'), di = /* @__PURE__ */ gA('<div class="svelte-ddsc3z"><!></div>'), hi = /* @__PURE__ */ gA('<div class="svelte-ddsc3z"><!></div>'), wi = /* @__PURE__ */ gA('<div class="altcha-error svelte-ddsc3z"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svelte-ddsc3z"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-ddsc3z"></path></svg> <!></div>'), yi = /* @__PURE__ */ gA('<div class="altcha-footer svelte-ddsc3z"><div class="svelte-ddsc3z"><!></div></div>'), vi = /* @__PURE__ */ gA('<div class="altcha-anchor-arrow svelte-ddsc3z"></div>'), bi = /* @__PURE__ */ gA('<!> <div class="altcha svelte-ddsc3z"><div class="altcha-main svelte-ddsc3z"><!> <div class="altcha-checkbox svelte-ddsc3z"><input type="checkbox" class="svelte-ddsc3z"></div> <div class="altcha-label svelte-ddsc3z"><!></div> <!></div> <!> <!> <!></div>', 1);
const mi = {
  hash: "svelte-ddsc3z",
  code: `.altcha.svelte-ddsc3z {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left;}.altcha.svelte-ddsc3z:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow:where(.svelte-ddsc3z) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-ddsc3z:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-ddsc3z:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-ddsc3z {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-ddsc3z {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;}.altcha-label.svelte-ddsc3z {flex-grow:1;}.altcha-label.svelte-ddsc3z label:where(.svelte-ddsc3z) {cursor:pointer;}.altcha-logo.svelte-ddsc3z {color:currentColor;opacity:0.3;}.altcha-logo.svelte-ddsc3z:hover {opacity:1;}.altcha-error.svelte-ddsc3z {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-ddsc3z {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right;}.altcha-footer.svelte-ddsc3z:hover {opacity:1;}.altcha-footer.svelte-ddsc3z > :where(.svelte-ddsc3z):first-child {flex-grow:1;}.altcha-footer.svelte-ddsc3z a {color:currentColor;}.altcha-checkbox.svelte-ddsc3z {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-ddsc3z input:where(.svelte-ddsc3z) {width:18px;height:18px;margin:0;}.altcha-hidden.svelte-ddsc3z {display:none;}.altcha-spinner.svelte-ddsc3z {
  animation: svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-ddsc3z-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function Ni(A, e) {
  kr(e, !0), bn(A, mi);
  let t = G(e, "auto", 7, void 0), g = G(e, "blockspam", 7, void 0), n = G(e, "challengeurl", 7, void 0), i = G(e, "challengejson", 7, void 0), I = G(e, "customfetch", 7, void 0), B = G(e, "debug", 7, !1), s = G(e, "delay", 7, 0), l = G(e, "expire", 7, void 0), a = G(e, "floating", 7, void 0), c = G(e, "floatinganchor", 7, void 0), Q = G(e, "floatingoffset", 7, void 0), u = G(e, "hidefooter", 7, !1), N = G(e, "hidelogo", 7, !1), R = G(e, "name", 7, "altcha"), x = G(e, "maxnumber", 7, 1e6), P = G(e, "mockerror", 7, !1), k = G(e, "obfuscated", 7, void 0), vA = G(e, "plugins", 7, void 0), lA = G(e, "refetchonexpire", 7, !0), U = G(e, "spamfilter", 7, !1), L = G(e, "strings", 7, void 0), S = G(e, "test", 7, !1), O = G(e, "verifyurl", 7, void 0), FA = G(e, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), PA = G(e, "workerurl", 7, void 0);
  const It = ["SHA-256", "SHA-384", "SHA-512"], ot = "Visit Altcha.org", st = "https://altcha.org/", OA = (r, o) => {
    e.$$host.dispatchEvent(new CustomEvent(r, { detail: o }));
  }, at = document.documentElement.lang?.split("-")?.[0], Je = /* @__PURE__ */ ne(() => n() && new URL(n(), location.origin).host.endsWith(".altcha.org") && !!n()?.includes("apiKey=ckey_")), Le = /* @__PURE__ */ ne(() => i() ? wt(i()) : void 0), lt = /* @__PURE__ */ ne(() => L() ? wt(L()) : {}), $ = /* @__PURE__ */ ne(() => ({
    ariaLinkLabel: ot,
    error: "Verification failed. Try again later.",
    expired: "Verification expired. Try again.",
    footer: `Protected by <a href="${st}" target="_blank" aria-label="${C(lt)?.ariaLinkLabel || ot}">ALTCHA</a>`,
    label: "I'm not a robot",
    verified: "Verified",
    verifying: "Verifying...",
    waitAlert: "Verifying... please wait.",
    ...C(lt)
  }));
  let YA = JA(!1), D = JA(eA(w.UNVERIFIED)), Z = JA(void 0), $A = JA(null), kA = null, M = null, pA = JA(null), nA = null, cA = [], bA = JA(null);
  We(() => {
    Ag(C(pA));
  }), We(() => {
    eg(C(D));
  }), Gn(() => {
    jr(), M && (M.removeEventListener("submit", ut), M.removeEventListener("reset", ft), M.removeEventListener("focusin", Et), M = null), nA && (clearTimeout(nA), nA = null), document.removeEventListener("click", ct), document.removeEventListener("scroll", Qt), window.removeEventListener("resize", ht);
  }), Hr(() => {
    _("mounted", "1.2.0-wasm"), _("workers", FA()), Or(), _("plugins", cA.length ? cA.map((r) => r.constructor.pluginName).join(", ") : "none"), S() && _("using test mode"), l() && Se(l()), t() !== void 0 && _("auto", t()), a() !== void 0 && yt(a()), M = C(Z)?.closest("form"), M && (M.addEventListener("submit", ut, { capture: !0 }), M.addEventListener("reset", ft), t() === "onfocus" && M.addEventListener("focusin", Et)), t() === "onload" && (k() ? Ae() : QA()), C(Je) && (u() || N()) && _("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      OA("load");
    });
  });
  function Ct(r, o) {
    return btoa(JSON.stringify({
      algorithm: r.algorithm,
      challenge: r.challenge,
      number: o.number,
      salt: r.salt,
      signature: r.signature,
      test: S() ? !0 : void 0,
      took: o.took
    }));
  }
  function jr() {
    for (const r of cA)
      r.destroy();
  }
  function Bt() {
    n() && lA() && C(D) === w.VERIFIED ? QA() : ee(w.EXPIRED, C($).expired);
  }
  async function Vr() {
    if (P())
      throw _("mocking error"), new Error("Mocked error.");
    if (C(Le))
      return _("using provided json data"), C(Le);
    if (S())
      return _("generating test challenge", { test: S() }), Ln(typeof S() != "boolean" ? +S() : void 0);
    {
      if (!n() && M) {
        const h = M.getAttribute("action");
        h?.includes("/form/") && n(h + "/altcha");
      }
      if (!n())
        throw new Error("Attribute challengeurl not set.");
      _("fetching challenge from", n());
      let r = null, o = null;
      if (I())
        if (_("using customfetch"), typeof I() == "string") {
          if (r = globalThis[I()] || null, !r)
            throw new Error(`Custom fetch function not found: ${I()}`);
        } else
          r = I();
      const E = {
        headers: U() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (r) {
        if (o = await r(n(), E), !o || !(o instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        o = await fetch(n(), E);
      if (o.status !== 200)
        throw new Error(`Server responded with ${o.status}.`);
      const y = o.headers.get("X-Altcha-Config"), J = await o.json(), b = new URLSearchParams(J.salt.split("?")?.[1]), f = b.get("expires") || b.get("expire");
      if (f) {
        const h = new Date(+f * 1e3), CA = isNaN(h.getTime()) ? 0 : h.getTime() - Date.now();
        CA > 0 && Se(CA);
      }
      if (y)
        try {
          const h = JSON.parse(y);
          h && typeof h == "object" && (h.verifyurl && (h.verifyurl = new URL(h.verifyurl, new URL(n())).toString()), mt(h));
        } catch (h) {
          _("unable to configure from X-Altcha-Config", h);
        }
      return J;
    }
  }
  function qr(r) {
    const o = M?.querySelector(typeof r == "string" ? `input[name="${r}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return o?.value?.slice(o.value.indexOf("@")) || void 0;
  }
  function zr() {
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
  function Pr(r) {
    return [
      ...M?.querySelectorAll(r?.length ? r.map((E) => `input[name="${E}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])') || []
    ].reduce(
      (E, y) => {
        const J = y.name, b = y.value;
        return J && b && (E[J] = /\n/.test(b) ? b.replace(/(?<!\r)\n/g, `\r
`) : b), E;
      },
      {}
    );
  }
  function Or() {
    const r = vA() !== void 0 ? vA().split(",") : void 0;
    for (const o of globalThis.altchaPlugins)
      (!r || r.includes(o.pluginName)) && cA.push(new o({
        el: C(Z),
        clarify: Ae,
        dispatch: OA,
        getConfiguration: Nt,
        getFloatingAnchor: Dt,
        getState: _t,
        log: _,
        reset: ee,
        solve: bt,
        setState: mA,
        setFloatingAnchor: Gt,
        verify: QA
      }));
  }
  function _(...r) {
    (B() || r.some((o) => o instanceof Error)) && console[r[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${R()}]`, ...r);
  }
  function $r() {
    [w.UNVERIFIED, w.ERROR, w.EXPIRED].includes(C(D)) ? U() !== !1 && M?.reportValidity() === !1 ? F(YA, !1) : k() ? Ae() : QA() : F(YA, !0);
  }
  function ct(r) {
    const o = r.target;
    a() && o && !C(Z).contains(o) && (C(D) === w.VERIFIED || t() === "off" && C(D) === w.UNVERIFIED) && (C(Z).style.display = "none");
  }
  function Qt() {
    a() && C(D) !== w.UNVERIFIED && Qe();
  }
  function Ag(r) {
    for (const o of cA)
      typeof o.onErrorChange == "function" && o.onErrorChange(C(pA));
  }
  function Et(r) {
    C(D) === w.UNVERIFIED && QA();
  }
  function ut(r) {
    M && t() === "onsubmit" ? C(D) === w.UNVERIFIED ? (r.preventDefault(), r.stopPropagation(), QA().then(() => {
      M?.requestSubmit();
    })) : C(D) !== w.VERIFIED && (r.preventDefault(), r.stopPropagation(), C(D) === w.VERIFYING && dt()) : M && a() && t() === "off" && C(D) === w.UNVERIFIED && (r.preventDefault(), r.stopPropagation(), C(Z).style.display = "block", Qe());
  }
  function ft() {
    ee();
  }
  function dt() {
    C(D) === w.VERIFYING && C($).waitAlert && alert(C($).waitAlert);
  }
  function eg(r) {
    for (const o of cA)
      typeof o.onStateChange == "function" && o.onStateChange(C(D));
    a() && C(D) !== w.UNVERIFIED && requestAnimationFrame(() => {
      Qe();
    }), F(YA, C(D) === w.VERIFIED);
  }
  function ht() {
    a() && Qe();
  }
  function wt(r) {
    return JSON.parse(r);
  }
  function Qe(r = 20) {
    if (C(Z))
      if (kA || (kA = (c() ? document.querySelector(c()) : M?.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || M), kA) {
        const o = parseInt(Q(), 10) || 12, E = kA.getBoundingClientRect(), y = C(Z).getBoundingClientRect(), J = document.documentElement.clientHeight, b = document.documentElement.clientWidth, f = a() === "auto" ? E.bottom + y.height + o + r > J : a() === "top", h = Math.max(r, Math.min(b - r - y.width, E.left + E.width / 2 - y.width / 2));
        if (f ? C(Z).style.top = `${E.top - (y.height + o)}px` : C(Z).style.top = `${E.bottom + o}px`, C(Z).style.left = `${h}px`, C(Z).setAttribute("data-floating", f ? "top" : "bottom"), C($A)) {
          const CA = C($A).getBoundingClientRect();
          C($A).style.left = E.left - h + E.width / 2 - CA.width / 2 + "px";
        }
      } else
        _("unable to find floating anchor element");
  }
  async function tg(r) {
    if (!O())
      throw new Error("Attribute verifyurl not set.");
    _("requesting server verification from", O());
    const o = { payload: r };
    if (U() !== !1) {
      const {
        blockedCountries: J,
        classifier: b,
        disableRules: f,
        email: h,
        expectedLanguages: CA,
        expectedCountries: He,
        fields: re,
        ipAddress: ge,
        text: Qg,
        timeZone: Mt
      } = zr();
      o.blockedCountries = J, o.classifier = b, o.disableRules = f, o.email = h === !1 ? void 0 : qr(h), o.expectedCountries = He, o.expectedLanguages = CA || (at ? [at] : void 0), o.fields = re === !1 ? void 0 : Pr(re), o.ipAddress = ge === !1 ? void 0 : ge || "auto", o.text = Qg, o.timeZone = Mt === !1 ? void 0 : Mt || xn();
    }
    const E = await fetch(O(), {
      body: JSON.stringify(o),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (E.status !== 200)
      throw new Error(`Server responded with ${E.status}.`);
    const y = await E.json();
    if (y?.payload && F(bA, eA(y.payload)), OA("serververification", y), g() && y.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function Se(r) {
    _("expire", r), nA && (clearTimeout(nA), nA = null), r < 1 ? Bt() : nA = setTimeout(Bt, r);
  }
  function yt(r) {
    _("floating", r), a() !== r && (C(Z).style.left = "", C(Z).style.top = ""), a(r === !0 || r === "" ? "auto" : r === !1 || r === "false" ? void 0 : a()), a() ? (t() || t("onsubmit"), document.addEventListener("scroll", Qt), document.addEventListener("click", ct), window.addEventListener("resize", ht)) : t() === "onsubmit" && t(void 0);
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
  async function bt(r) {
    let o = null;
    if ("Worker" in window) {
      try {
        o = await rg(r, r.maxnumber);
      } catch (E) {
        _(E);
      }
      if (o?.number !== void 0 || "obfuscated" in r)
        return { data: r, solution: o };
    }
    if ("obfuscated" in r) {
      const E = await Kn(r.obfuscated, r.key, r.maxnumber);
      return { data: r, solution: await E.promise };
    }
    return {
      data: r,
      solution: await Sn(r.challenge, r.salt, r.algorithm, r.maxnumber || x()).promise
    };
  }
  async function rg(r, o = typeof S() == "number" ? S() : x(), E = Math.ceil(FA())) {
    const y = [];
    E = Math.min(16, Math.max(1, E));
    for (let f = 0; f < E; f++)
      y.push(altchaCreateWorker(PA()));
    const J = Math.ceil(o / E), b = await Promise.all(y.map((f, h) => {
      const CA = h * J;
      return new Promise((He) => {
        f.addEventListener("message", (re) => {
          if (re.data)
            for (const ge of y)
              ge !== f && ge.postMessage({ type: "abort" });
          He(re.data);
        }), f.postMessage({
          payload: r,
          max: CA + J,
          start: CA,
          type: "work"
        });
      });
    }));
    for (const f of y)
      f.terminate();
    return b.find((f) => !!f) || null;
  }
  async function Ae() {
    if (!k()) {
      mA(w.ERROR);
      return;
    }
    const r = cA.find((o) => o.constructor.pluginName === "obfuscation");
    if (!r || !("clarify" in r)) {
      mA(w.ERROR), _("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in r && typeof r.clarify == "function")
      return r.clarify();
  }
  function mt(r) {
    r.obfuscated !== void 0 && k(r.obfuscated), r.auto !== void 0 && (t(r.auto), t() === "onload" && (k() ? Ae() : QA())), r.blockspam !== void 0 && g(!!r.blockspam), r.customfetch !== void 0 && I(r.customfetch), r.floatinganchor !== void 0 && c(r.floatinganchor), r.delay !== void 0 && s(r.delay), r.floatingoffset !== void 0 && Q(r.floatingoffset), r.floating !== void 0 && yt(r.floating), r.expire !== void 0 && (Se(r.expire), l(r.expire)), r.challenge && (i(typeof r.challenge == "string" ? r.challenge : JSON.stringify(r.challenge)), vt(C(Le))), r.challengeurl !== void 0 && n(r.challengeurl), r.debug !== void 0 && B(!!r.debug), r.hidefooter !== void 0 && u(!!r.hidefooter), r.hidelogo !== void 0 && N(!!r.hidelogo), r.maxnumber !== void 0 && x(+r.maxnumber), r.mockerror !== void 0 && P(!!r.mockerror), r.name !== void 0 && R(r.name), r.refetchonexpire !== void 0 && lA(!!r.refetchonexpire), r.spamfilter !== void 0 && U(typeof r.spamfilter == "object" ? r.spamfilter : !!r.spamfilter), r.strings && L(typeof r.strings == "string" ? r.strings : JSON.stringify(r.strings)), r.test !== void 0 && S(typeof r.test == "number" ? r.test : !!r.test), r.verifyurl !== void 0 && O(r.verifyurl), r.workers !== void 0 && FA(+r.workers), r.workerurl !== void 0 && PA(r.workerurl);
  }
  function Nt() {
    return {
      auto: t(),
      blockspam: g(),
      challengeurl: n(),
      debug: B(),
      delay: s(),
      expire: l(),
      floating: a(),
      floatinganchor: c(),
      floatingoffset: Q(),
      hidefooter: u(),
      hidelogo: N(),
      name: R(),
      maxnumber: x(),
      mockerror: P(),
      obfuscated: k(),
      refetchonexpire: lA(),
      spamfilter: U(),
      strings: C($),
      test: S(),
      verifyurl: O(),
      workers: FA(),
      workerurl: PA()
    };
  }
  function Dt() {
    return kA;
  }
  function gg(r) {
    return cA.find((o) => o.constructor.pluginName === r);
  }
  function _t() {
    return C(D);
  }
  function ee(r = w.UNVERIFIED, o = null) {
    nA && (clearTimeout(nA), nA = null), F(YA, !1), F(bA, null), mA(r, o);
  }
  function Gt(r) {
    kA = r;
  }
  function mA(r, o = null) {
    F(D, eA(r)), F(pA, eA(o)), OA("statechange", {
      payload: C(bA),
      state: C(D)
    });
  }
  async function QA() {
    ee(w.VERIFYING), await new Promise((o) => setTimeout(o, s() || 0));
    const r = new Bi();
    return Vr().then((o) => (vt(o), _("challenge", o), bt(o))).then(({ data: o, solution: E }) => {
      if (_("solution", E), "challenge" in o && E && !("clearText" in E))
        if (E?.number !== void 0) {
          if (O())
            return tg(Ct(o, E));
          F(bA, eA(Ct(o, E))), _("payload", C(bA));
        } else
          throw _("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      if (r.endDetection() === !0)
        throw new Error("Detected bot.");
      mA(w.VERIFIED), _("verified"), Cn().then(() => {
        OA("verified", { payload: C(bA) });
      });
    }).catch((o) => {
      _(o), mA(w.ERROR, o.message);
    });
  }
  var Rt = bi(), Ft = Ke(Rt);
  vn(Ft, e, "default", {});
  var te = BA(Ft, 2), xe = j(te), Yt = j(xe);
  {
    var ng = (r) => {
      var o = ci();
      V(r, o);
    };
    EA(Yt, (r) => {
      C(D) === w.VERIFYING && r(ng);
    });
  }
  var Ee = BA(Yt, 2), MA = j(Ee);
  Xt(MA), MA.__change = $r, W(Ee);
  var Ue = BA(Ee, 2), ig = j(Ue);
  {
    var Ig = (r) => {
      var o = Qi(), E = Ke(o), y = j(E);
      xA(y, () => C($).verified), W(E);
      var J = BA(E, 2);
      Xt(J), LA(() => {
        AA(J, "name", R()), mn(J, C(bA));
      }), V(r, o);
    }, og = (r) => {
      var o = fn(), E = Ke(o);
      {
        var y = (b) => {
          var f = Ei(), h = j(f);
          xA(h, () => C($).verifying), W(f), V(b, f);
        }, J = (b) => {
          var f = ui(), h = j(f);
          xA(h, () => C($).label), W(f), LA(() => AA(f, "for", `${R() ?? ""}_checkbox`)), V(b, f);
        };
        EA(
          E,
          (b) => {
            C(D) === w.VERIFYING ? b(y) : b(J, !1);
          },
          !0
        );
      }
      V(r, o);
    };
    EA(ig, (r) => {
      C(D) === w.VERIFIED ? r(Ig) : r(og, !1);
    });
  }
  W(Ue);
  var sg = BA(Ue, 2);
  {
    var ag = (r) => {
      var o = fi(), E = j(o);
      AA(E, "href", st), W(o), LA(() => AA(E, "aria-label", C($).ariaLinkLabel)), V(r, o);
    };
    EA(sg, (r) => {
      (N() !== !0 || C(Je)) && r(ag);
    });
  }
  W(xe);
  var kt = BA(xe, 2);
  {
    var lg = (r) => {
      var o = wi(), E = BA(j(o), 2);
      {
        var y = (b) => {
          var f = di(), h = j(f);
          xA(h, () => C($).expired), W(f), LA(() => AA(f, "title", C(pA))), V(b, f);
        }, J = (b) => {
          var f = hi(), h = j(f);
          xA(h, () => C($).error), W(f), LA(() => AA(f, "title", C(pA))), V(b, f);
        };
        EA(E, (b) => {
          C(D) === w.EXPIRED ? b(y) : b(J, !1);
        });
      }
      W(o), V(r, o);
    };
    EA(kt, (r) => {
      (C(pA) || C(D) === w.EXPIRED) && r(lg);
    });
  }
  var pt = BA(kt, 2);
  {
    var Cg = (r) => {
      var o = yi(), E = j(o), y = j(E);
      xA(y, () => C($).footer), W(E), W(o), V(r, o);
    };
    EA(pt, (r) => {
      C($).footer && (u() !== !0 || C(Je)) && r(Cg);
    });
  }
  var Bg = BA(pt, 2);
  {
    var cg = (r) => {
      var o = vi();
      jt(o, (E) => F($A, E), () => C($A)), V(r, o);
    };
    EA(Bg, (r) => {
      a() && r(cg);
    });
  }
  return W(te), jt(te, (r) => F(Z, r), () => C(Z)), LA(() => {
    AA(te, "data-state", C(D)), AA(te, "data-floating", a()), Dn(Ee, "altcha-hidden", C(D) === w.VERIFYING), AA(MA, "id", `${R() ?? ""}_checkbox`), MA.required = t() !== "onsubmit" && (!a() || t() !== "off");
  }), En("invalid", MA, dt), _n(MA, () => C(YA), (r) => F(YA, r)), V(A, Rt), pr({
    clarify: Ae,
    configure: mt,
    getConfiguration: Nt,
    getFloatingAnchor: Dt,
    getPlugin: gg,
    getState: _t,
    reset: ee,
    setFloatingAnchor: Gt,
    setState: mA,
    verify: QA,
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
      return B();
    },
    set debug(r = !1) {
      B(r), v();
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
      return Q();
    },
    set floatingoffset(r = void 0) {
      Q(r), v();
    },
    get hidefooter() {
      return u();
    },
    set hidefooter(r = !1) {
      u(r), v();
    },
    get hidelogo() {
      return N();
    },
    set hidelogo(r = !1) {
      N(r), v();
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
      return P();
    },
    set mockerror(r = !1) {
      P(r), v();
    },
    get obfuscated() {
      return k();
    },
    set obfuscated(r = void 0) {
      k(r), v();
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
      return L();
    },
    set strings(r = void 0) {
      L(r), v();
    },
    get test() {
      return S();
    },
    set test(r = !1) {
      S(r), v();
    },
    get verifyurl() {
      return O();
    },
    set verifyurl(r = void 0) {
      O(r), v();
    },
    get workers() {
      return FA();
    },
    set workers(r = Math.min(16, navigator.hardwareConcurrency || 8)) {
      FA(r), v();
    },
    get workerurl() {
      return PA();
    },
    set workerurl(r = void 0) {
      PA(r), v();
    }
  });
}
un(["change"]);
customElements.define("altcha-widget", Mn(
  Ni,
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
globalThis.altchaCreateWorker = (A) => A ? new Worker(new URL(A)) : new ug();
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
export {
  Ni as Altcha
};
