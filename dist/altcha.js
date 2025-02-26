const eg = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGQ9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIHAoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAodD0+dC50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBiKGUsdCxyKXtpZih0eXBlb2YgY3J5cHRvPiJ1Inx8ISgic3VidGxlImluIGNyeXB0byl8fCEoImRpZ2VzdCJpbiBjcnlwdG8uc3VidGxlKSl0aHJvdyBuZXcgRXJyb3IoIldlYiBDcnlwdG8gaXMgbm90IGF2YWlsYWJsZS4gU2VjdXJlIGNvbnRleHQgaXMgcmVxdWlyZWQgKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NlY3VyaXR5L1NlY3VyZV9Db250ZXh0cykuIik7cmV0dXJuIHAoYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3Qoci50b1VwcGVyQ2FzZSgpLGQuZW5jb2RlKGUrdCkpKX1mdW5jdGlvbiB3KGUsdCxyPSJTSEEtMjU2IixuPTFlNixsPTApe2NvbnN0IG89bmV3IEFib3J0Q29udHJvbGxlcixhPURhdGUubm93KCk7cmV0dXJue3Byb21pc2U6KGFzeW5jKCk9Pntmb3IobGV0IGM9bDtjPD1uO2MrPTEpe2lmKG8uc2lnbmFsLmFib3J0ZWQpcmV0dXJuIG51bGw7aWYoYXdhaXQgYih0LGMscik9PT1lKXJldHVybntudW1iZXI6Yyx0b29rOkRhdGUubm93KCktYX19cmV0dXJuIG51bGx9KSgpLGNvbnRyb2xsZXI6b319ZnVuY3Rpb24gaChlKXtjb25zdCB0PWF0b2IoZSkscj1uZXcgVWludDhBcnJheSh0Lmxlbmd0aCk7Zm9yKGxldCBuPTA7bjx0Lmxlbmd0aDtuKyspcltuXT10LmNoYXJDb2RlQXQobik7cmV0dXJuIHJ9ZnVuY3Rpb24gZyhlLHQ9MTIpe2NvbnN0IHI9bmV3IFVpbnQ4QXJyYXkodCk7Zm9yKGxldCBuPTA7bjx0O24rKylyW25dPWUlMjU2LGU9TWF0aC5mbG9vcihlLzI1Nik7cmV0dXJuIHJ9YXN5bmMgZnVuY3Rpb24gbShlLHQ9IiIscj0xZTYsbj0wKXtjb25zdCBsPSJBRVMtR0NNIixvPW5ldyBBYm9ydENvbnRyb2xsZXIsYT1EYXRlLm5vdygpLHM9YXN5bmMoKT0+e2ZvcihsZXQgaT1uO2k8PXI7aSs9MSl7aWYoby5zaWduYWwuYWJvcnRlZHx8IWN8fCF1KXJldHVybiBudWxsO3RyeXtjb25zdCBmPWF3YWl0IGNyeXB0by5zdWJ0bGUuZGVjcnlwdCh7bmFtZTpsLGl2OmcoaSl9LGMsdSk7aWYoZilyZXR1cm57Y2xlYXJUZXh0Om5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShmKSx0b29rOkRhdGUubm93KCktYX19Y2F0Y2h7fX1yZXR1cm4gbnVsbH07bGV0IGM9bnVsbCx1PW51bGw7dHJ5e3U9aChlKTtjb25zdCBpPWF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KCJTSEEtMjU2IixkLmVuY29kZSh0KSk7Yz1hd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleSgicmF3IixpLGwsITEsWyJkZWNyeXB0Il0pfWNhdGNoe3JldHVybntwcm9taXNlOlByb21pc2UucmVqZWN0KCksY29udHJvbGxlcjpvfX1yZXR1cm57cHJvbWlzZTpzKCksY29udHJvbGxlcjpvfX1sZXQgeTtvbm1lc3NhZ2U9YXN5bmMgZT0+e2NvbnN0e3R5cGU6dCxwYXlsb2FkOnIsc3RhcnQ6bixtYXg6bH09ZS5kYXRhO2xldCBvPW51bGw7aWYodD09PSJhYm9ydCIpeT8uYWJvcnQoKSx5PXZvaWQgMDtlbHNlIGlmKHQ9PT0id29yayIpe2lmKCJvYmZ1c2NhdGVkImluIHIpe2NvbnN0e2tleTphLG9iZnVzY2F0ZWQ6c309cnx8e307bz1hd2FpdCBtKHMsYSxsLG4pfWVsc2V7Y29uc3R7YWxnb3JpdGhtOmEsY2hhbGxlbmdlOnMsc2FsdDpjfT1yfHx7fTtvPXcocyxjLGEsbCxuKX15PW8uY29udHJvbGxlcixvLnByb21pc2UudGhlbihhPT57c2VsZi5wb3N0TWVzc2FnZShhJiZ7Li4uYSx3b3JrZXI6ITB9KX0pfX19KSgpOwo=", vn = (A) => Uint8Array.from(atob(A), (e) => e.charCodeAt(0)), xt = typeof self < "u" && self.Blob && new Blob([vn(eg)], { type: "text/javascript;charset=utf-8" });
function _n(A) {
  let e;
  try {
    if (e = xt && (self.URL || self.webkitURL).createObjectURL(xt), !e) throw "";
    const t = new Worker(e, {
      name: A?.name
    });
    return t.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(e);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + eg,
      {
        name: A?.name
      }
    );
  } finally {
    e && (self.URL || self.webkitURL).revokeObjectURL(e);
  }
}
const bn = "5";
typeof window < "u" && (window.__svelte ||= { v: /* @__PURE__ */ new Set() }).v.add(bn);
const Dn = 1, Nn = 4, Gn = 8, mn = 16, Yn = 1, Rn = 2, tg = "[", gg = "[!", ng = "]", XA = {}, H = Symbol(), ig = !1;
var Ig = Array.isArray, Fn = Array.from, Ne = Object.keys, Ge = Object.defineProperty, NA = Object.getOwnPropertyDescriptor, kn = Object.getOwnPropertyDescriptors, pn = Object.prototype, Ln = Array.prototype, Ve = Object.getPrototypeOf;
function rg(A) {
  for (var e = 0; e < A.length; e++)
    A[e]();
}
const gA = 2, og = 4, le = 8, gt = 16, nA = 32, Ee = 64, qe = 128, mA = 256, me = 512, W = 1024, dA = 2048, ce = 4096, WA = 8192, qA = 16384, Mn = 32768, nt = 65536, Sn = 1 << 19, Cg = 1 << 20, Ce = Symbol("$state"), Bg = Symbol("legacy props"), Jn = Symbol("");
function sg(A) {
  return A === this.v;
}
function Un(A, e) {
  return A != A ? e == e : A !== e || A !== null && typeof A == "object" || typeof A == "function";
}
function ag(A) {
  return !Un(A, this.v);
}
function Zn(A) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function xn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Kn(A) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Xn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function jn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Hn(A) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Wn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Tn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Vn() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function qn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let lg = !1;
function rA(A) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: A,
    reactions: null,
    equals: sg,
    version: 0
  };
}
function MA(A) {
  return /* @__PURE__ */ zn(rA(A));
}
// @__NO_SIDE_EFFECTS__
function Eg(A, e = !1) {
  const t = rA(A);
  return e || (t.equals = ag), t;
}
// @__NO_SIDE_EFFECTS__
function zn(A) {
  return b !== null && b.f & gA && (oA === null ? Bi([A]) : oA.push(A)), A;
}
function R(A, e) {
  return b !== null && ai() && b.f & (gA | gt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (oA === null || !oA.includes(A)) && qn(), Pn(A, e);
}
function Pn(A, e) {
  return A.equals(e) || (A.v = e, A.version = kg(), cg(A, dA), d !== null && d.f & W && !(d.f & nA) && (K !== null && K.includes(A) ? (BA(d, dA), Ze(d)) : fA === null ? si([A]) : fA.push(A))), e;
}
function cg(A, e) {
  var t = A.reactions;
  if (t !== null)
    for (var g = t.length, i = 0; i < g; i++) {
      var I = t[i], r = I.f;
      r & dA || (BA(I, e), r & (W | mA) && (r & gA ? cg(
        /** @type {Derived} */
        I,
        ce
      ) : Ze(
        /** @type {Effect} */
        I
      )));
    }
}
function Me(A) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let L = !1;
function xA(A) {
  L = A;
}
let F;
function hA(A) {
  if (A === null)
    throw Me(), XA;
  return F = A;
}
function TA() {
  return hA(
    /** @type {TemplateNode} */
    /* @__PURE__ */ yA(F)
  );
}
function V(A) {
  if (L) {
    if (/* @__PURE__ */ yA(F) !== null)
      throw Me(), XA;
    F = A;
  }
}
function On() {
  for (var A = 0, e = F; ; ) {
    if (e.nodeType === 8) {
      var t = (
        /** @type {Comment} */
        e.data
      );
      if (t === ng) {
        if (A === 0) return e;
        A -= 1;
      } else (t === tg || t === gg) && (A += 1);
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
  const g = Ve(A);
  if (g !== pn && g !== Ln)
    return A;
  var i = /* @__PURE__ */ new Map(), I = Ig(A), r = rA(0);
  I && i.set("length", rA(
    /** @type {any[]} */
    A.length
  ));
  var a;
  return new Proxy(
    /** @type {any} */
    A,
    {
      defineProperty(C, s, B) {
        (!("value" in B) || B.configurable === !1 || B.enumerable === !1 || B.writable === !1) && Wn();
        var E = i.get(s);
        return E === void 0 ? (E = rA(B.value), i.set(s, E)) : R(E, tA(B.value, a)), !0;
      },
      deleteProperty(C, s) {
        var B = i.get(s);
        if (B === void 0)
          s in C && i.set(s, rA(H));
        else {
          if (I && typeof s == "string") {
            var E = (
              /** @type {Source<number>} */
              i.get("length")
            ), c = Number(s);
            Number.isInteger(c) && c < E.v && R(E, c);
          }
          R(B, H), Kt(r);
        }
        return !0;
      },
      get(C, s, B) {
        if (s === Ce)
          return A;
        var E = i.get(s), c = s in C;
        if (E === void 0 && (!c || NA(C, s)?.writable) && (E = rA(tA(c ? C[s] : H, a)), i.set(s, E)), E !== void 0) {
          var f = l(E);
          return f === H ? void 0 : f;
        }
        return Reflect.get(C, s, B);
      },
      getOwnPropertyDescriptor(C, s) {
        var B = Reflect.getOwnPropertyDescriptor(C, s);
        if (B && "value" in B) {
          var E = i.get(s);
          E && (B.value = l(E));
        } else if (B === void 0) {
          var c = i.get(s), f = c?.v;
          if (c !== void 0 && f !== H)
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
        var B = i.get(s), E = B !== void 0 && B.v !== H || Reflect.has(C, s);
        if (B !== void 0 || d !== null && (!E || NA(C, s)?.writable)) {
          B === void 0 && (B = rA(E ? tA(C[s], a) : H), i.set(s, B));
          var c = l(B);
          if (c === H)
            return !1;
        }
        return E;
      },
      set(C, s, B, E) {
        var c = i.get(s), f = s in C;
        if (I && s === "length")
          for (var D = B; D < /** @type {Source<number>} */
          c.v; D += 1) {
            var Y = i.get(D + "");
            Y !== void 0 ? R(Y, H) : D in C && (Y = rA(H), i.set(D + "", Y));
          }
        c === void 0 ? (!f || NA(C, s)?.writable) && (c = rA(void 0), R(c, tA(B, a)), i.set(s, c)) : (f = c.v !== H, R(c, tA(B, a)));
        var Z = Reflect.getOwnPropertyDescriptor(C, s);
        if (Z?.set && Z.set.call(E, B), !f) {
          if (I && typeof s == "string") {
            var O = (
              /** @type {Source<number>} */
              i.get("length")
            ), k = Number(s);
            Number.isInteger(k) && k >= O.v && R(O, k + 1);
          }
          Kt(r);
        }
        return !0;
      },
      ownKeys(C) {
        l(r);
        var s = Reflect.ownKeys(C).filter((c) => {
          var f = i.get(c);
          return f === void 0 || f.v !== H;
        });
        for (var [B, E] of i)
          E.v !== H && !(B in C) && s.push(B);
        return s;
      },
      setPrototypeOf() {
        Tn();
      }
    }
  );
}
function Kt(A, e = 1) {
  R(A, A.v + e);
}
var Xt, Qg, fg;
function ze() {
  if (Xt === void 0) {
    Xt = window;
    var A = Element.prototype, e = Node.prototype;
    Qg = NA(e, "firstChild").get, fg = NA(e, "nextSibling").get, A.__click = void 0, A.__className = "", A.__attributes = null, A.__styles = null, A.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Se(A = "") {
  return document.createTextNode(A);
}
// @__NO_SIDE_EFFECTS__
function GA(A) {
  return Qg.call(A);
}
// @__NO_SIDE_EFFECTS__
function yA(A) {
  return fg.call(A);
}
function q(A, e) {
  if (!L)
    return /* @__PURE__ */ GA(A);
  var t = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ GA(F)
  );
  return t === null && (t = F.appendChild(Se())), hA(t), t;
}
function Te(A, e) {
  if (!L) {
    var t = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ GA(
        /** @type {Node} */
        A
      )
    );
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ yA(t) : t;
  }
  return F;
}
function lA(A, e = 1, t = !1) {
  let g = L ? F : A;
  for (var i; e--; )
    i = g, g = /** @type {TemplateNode} */
    /* @__PURE__ */ yA(g);
  if (!L)
    return g;
  var I = g?.nodeType;
  if (t && I !== 3) {
    var r = Se();
    return g === null ? i?.after(r) : g.before(r), hA(r), r;
  }
  return hA(g), /** @type {TemplateNode} */
  g;
}
function $n(A) {
  A.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function re(A) {
  var e = gA | dA;
  d === null ? e |= mA : d.f |= Cg;
  var t = b !== null && b.f & gA ? (
    /** @type {Derived} */
    b
  ) : null;
  const g = {
    children: null,
    ctx: X,
    deps: null,
    equals: sg,
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
function ug(A) {
  var e = A.children;
  if (e !== null) {
    A.children = null;
    for (var t = 0; t < e.length; t += 1) {
      var g = e[t];
      g.f & gA ? it(
        /** @type {Derived} */
        g
      ) : YA(
        /** @type {Effect} */
        g
      );
    }
  }
}
function Ai(A) {
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
function dg(A) {
  var e, t = d;
  CA(Ai(A));
  try {
    ug(A), e = pg(A);
  } finally {
    CA(t);
  }
  return e;
}
function hg(A) {
  var e = dg(A), t = (KA || A.f & mA) && A.deps !== null ? ce : W;
  BA(A, t), A.equals(e) || (A.v = e, A.version = kg());
}
function it(A) {
  ug(A), ae(A, 0), BA(A, qA), A.v = A.children = A.deps = A.ctx = A.reactions = null;
}
function ei(A) {
  d === null && b === null && Kn(), b !== null && b.f & mA && xn(), Bt && Zn();
}
function ti(A, e) {
  var t = e.last;
  t === null ? e.last = e.first = A : (t.next = A, A.prev = t, e.last = A);
}
function zA(A, e, t, g = !0) {
  var i = (A & Ee) !== 0, I = d, r = {
    ctx: X,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: A | dA,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i ? null : I,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (t) {
    var a = jA;
    try {
      Wt(!0), Ue(r), r.f |= Mn;
    } catch (B) {
      throw YA(r), B;
    } finally {
      Wt(a);
    }
  } else e !== null && Ze(r);
  var C = t && r.deps === null && r.first === null && r.nodes_start === null && r.teardown === null && (r.f & Cg) === 0;
  if (!C && !i && g && (I !== null && ti(r, I), b !== null && b.f & gA)) {
    var s = (
      /** @type {Derived} */
      b
    );
    (s.children ??= []).push(r);
  }
  return r;
}
function gi(A) {
  const e = zA(le, null, !1);
  return BA(e, W), e.teardown = A, e;
}
function Pe(A) {
  ei();
  var e = d !== null && (d.f & nA) !== 0 && X !== null && !X.m;
  if (e) {
    var t = (
      /** @type {ComponentContext} */
      X
    );
    (t.e ??= []).push({
      fn: A,
      effect: d,
      reaction: b
    });
  } else {
    var g = It(A);
    return g;
  }
}
function wg(A) {
  const e = zA(Ee, A, !0);
  return () => {
    YA(e);
  };
}
function It(A) {
  return zA(og, A, !1);
}
function rt(A) {
  return zA(le, A, !0);
}
function SA(A) {
  return ot(A);
}
function ot(A, e = 0) {
  return zA(le | gt | e, A, !0);
}
function Ye(A, e = !0) {
  return zA(le | nA, A, !0, e);
}
function yg(A) {
  var e = A.teardown;
  if (e !== null) {
    const t = Bt, g = b;
    Tt(!0), wA(null);
    try {
      e.call(null);
    } finally {
      Tt(t), wA(g);
    }
  }
}
function vg(A) {
  var e = A.deriveds;
  if (e !== null) {
    A.deriveds = null;
    for (var t = 0; t < e.length; t += 1)
      it(e[t]);
  }
}
function _g(A, e = !1) {
  var t = A.first;
  for (A.first = A.last = null; t !== null; ) {
    var g = t.next;
    YA(t, e), t = g;
  }
}
function ni(A) {
  for (var e = A.first; e !== null; ) {
    var t = e.next;
    e.f & nA || YA(e), e = t;
  }
}
function YA(A, e = !0) {
  var t = !1;
  if ((e || A.f & Sn) && A.nodes_start !== null) {
    for (var g = A.nodes_start, i = A.nodes_end; g !== null; ) {
      var I = g === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ yA(g)
      );
      g.remove(), g = I;
    }
    t = !0;
  }
  _g(A, e && !t), vg(A), ae(A, 0), BA(A, qA);
  var r = A.transitions;
  if (r !== null)
    for (const C of r)
      C.stop();
  yg(A);
  var a = A.parent;
  a !== null && a.first !== null && bg(A), A.next = A.prev = A.teardown = A.ctx = A.deps = A.fn = A.nodes_start = A.nodes_end = null;
}
function bg(A) {
  var e = A.parent, t = A.prev, g = A.next;
  t !== null && (t.next = g), g !== null && (g.prev = t), e !== null && (e.first === A && (e.first = g), e.last === A && (e.last = t));
}
function jt(A, e) {
  var t = [];
  Dg(A, t, !0), ii(t, () => {
    YA(A), e && e();
  });
}
function ii(A, e) {
  var t = A.length;
  if (t > 0) {
    var g = () => --t || e();
    for (var i of A)
      i.out(g);
  } else
    e();
}
function Dg(A, e, t) {
  if (!(A.f & WA)) {
    if (A.f ^= WA, A.transitions !== null)
      for (const r of A.transitions)
        (r.is_global || t) && e.push(r);
    for (var g = A.first; g !== null; ) {
      var i = g.next, I = (g.f & nt) !== 0 || (g.f & nA) !== 0;
      Dg(g, e, I ? t : !1), g = i;
    }
  }
}
function Ht(A) {
  Ng(A, !0);
}
function Ng(A, e) {
  if (A.f & WA) {
    Qe(A) && Ue(A), A.f ^= WA;
    for (var t = A.first; t !== null; ) {
      var g = t.next, i = (t.f & nt) !== 0 || (t.f & nA) !== 0;
      Ng(t, i ? e : !1), t = g;
    }
    if (A.transitions !== null)
      for (const I of A.transitions)
        (I.is_global || e) && I.in();
  }
}
const Ii = typeof requestIdleCallback > "u" ? (A) => setTimeout(A, 1) : requestIdleCallback;
let Re = !1, Fe = !1, Oe = [], $e = [];
function Gg() {
  Re = !1;
  const A = Oe.slice();
  Oe = [], rg(A);
}
function mg() {
  Fe = !1;
  const A = $e.slice();
  $e = [], rg(A);
}
function Ct(A) {
  Re || (Re = !0, queueMicrotask(Gg)), Oe.push(A);
}
function ri(A) {
  Fe || (Fe = !0, Ii(mg)), $e.push(A);
}
function oi() {
  Re && Gg(), Fe && mg();
}
function Yg(A) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
const Rg = 0, Ci = 1;
let ye = !1, ve = Rg, Be = !1, se = null, jA = !1, Bt = !1;
function Wt(A) {
  jA = A;
}
function Tt(A) {
  Bt = A;
}
let DA = [], HA = 0;
let b = null;
function wA(A) {
  b = A;
}
let d = null;
function CA(A) {
  d = A;
}
let oA = null;
function Bi(A) {
  oA = A;
}
let K = null, P = 0, fA = null;
function si(A) {
  fA = A;
}
let Fg = 0, KA = !1, X = null;
function kg() {
  return ++Fg;
}
function ai() {
  return !lg;
}
function Qe(A) {
  var e = A.f;
  if (e & dA)
    return !0;
  if (e & ce) {
    var t = A.deps, g = (e & mA) !== 0;
    if (t !== null) {
      var i;
      if (e & me) {
        for (i = 0; i < t.length; i++)
          (t[i].reactions ??= []).push(A);
        A.f ^= me;
      }
      for (i = 0; i < t.length; i++) {
        var I = t[i];
        if (Qe(
          /** @type {Derived} */
          I
        ) && hg(
          /** @type {Derived} */
          I
        ), g && d !== null && !KA && !I?.reactions?.includes(A) && (I.reactions ??= []).push(A), I.version > A.version)
          return !0;
      }
    }
    g || BA(A, W);
  }
  return !1;
}
function li(A, e) {
  for (var t = e; t !== null; ) {
    if (t.f & qe)
      try {
        t.fn(A);
        return;
      } catch {
        t.f ^= qe;
      }
    t = t.parent;
  }
  throw ye = !1, A;
}
function Ei(A) {
  return (A.f & qA) === 0 && (A.parent === null || (A.parent.f & qe) === 0);
}
function Je(A, e, t, g) {
  if (ye) {
    if (t === null && (ye = !1), Ei(e))
      throw A;
    return;
  }
  t !== null && (ye = !0);
  {
    li(A, e);
    return;
  }
}
function pg(A) {
  var e = K, t = P, g = fA, i = b, I = KA, r = oA, a = X, C = A.f;
  K = /** @type {null | Value[]} */
  null, P = 0, fA = null, b = C & (nA | Ee) ? null : A, KA = !jA && (C & mA) !== 0, oA = null, X = A.ctx;
  try {
    var s = (
      /** @type {Function} */
      (0, A.fn)()
    ), B = A.deps;
    if (K !== null) {
      var E;
      if (ae(A, P), B !== null && P > 0)
        for (B.length = P + K.length, E = 0; E < K.length; E++)
          B[P + E] = K[E];
      else
        A.deps = B = K;
      if (!KA)
        for (E = P; E < B.length; E++)
          (B[E].reactions ??= []).push(A);
    } else B !== null && P < B.length && (ae(A, P), B.length = P);
    return s;
  } finally {
    K = e, P = t, fA = g, b = i, KA = I, oA = r, X = a;
  }
}
function ci(A, e) {
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
  (K === null || !K.includes(e)) && (BA(e, ce), e.f & (mA | me) || (e.f ^= me), ae(
    /** @type {Derived} **/
    e,
    0
  ));
}
function ae(A, e) {
  var t = A.deps;
  if (t !== null)
    for (var g = e; g < t.length; g++)
      ci(A, t[g]);
}
function Ue(A) {
  var e = A.f;
  if (!(e & qA)) {
    BA(A, W);
    var t = d, g = X;
    d = A;
    try {
      e & gt ? ni(A) : _g(A), vg(A), yg(A);
      var i = pg(A);
      A.teardown = typeof i == "function" ? i : null, A.version = Fg;
    } catch (I) {
      Je(I, A, t, g || A.ctx);
    } finally {
      d = t;
    }
  }
}
function Lg() {
  if (HA > 1e3) {
    HA = 0;
    try {
      Xn();
    } catch (A) {
      if (se !== null)
        Je(A, se, null);
      else
        throw A;
    }
  }
  HA++;
}
function Mg(A) {
  var e = A.length;
  if (e !== 0) {
    Lg();
    var t = jA;
    jA = !0;
    try {
      for (var g = 0; g < e; g++) {
        var i = A[g];
        i.f & W || (i.f ^= W);
        var I = [];
        Sg(i, I), Qi(I);
      }
    } finally {
      jA = t;
    }
  }
}
function Qi(A) {
  var e = A.length;
  if (e !== 0)
    for (var t = 0; t < e; t++) {
      var g = A[t];
      if (!(g.f & (qA | WA)))
        try {
          Qe(g) && (Ue(g), g.deps === null && g.first === null && g.nodes_start === null && (g.teardown === null ? bg(g) : g.fn = null));
        } catch (i) {
          Je(i, g, null, g.ctx);
        }
    }
}
function fi() {
  if (Be = !1, HA > 1001)
    return;
  const A = DA;
  DA = [], Mg(A), Be || (HA = 0, se = null);
}
function Ze(A) {
  ve === Rg && (Be || (Be = !0, queueMicrotask(fi))), se = A;
  for (var e = A; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (t & (Ee | nA)) {
      if (!(t & W)) return;
      e.f ^= W;
    }
  }
  DA.push(e);
}
function Sg(A, e) {
  var t = A.first, g = [];
  A: for (; t !== null; ) {
    var i = t.f, I = (i & nA) !== 0, r = I && (i & W) !== 0, a = t.next;
    if (!r && !(i & WA))
      if (i & le) {
        if (I)
          t.f ^= W;
        else
          try {
            Qe(t) && Ue(t);
          } catch (E) {
            Je(E, t, null, t.ctx);
          }
        var C = t.first;
        if (C !== null) {
          t = C;
          continue;
        }
      } else i & og && g.push(t);
    if (a === null) {
      let E = t.parent;
      for (; E !== null; ) {
        if (A === E)
          break A;
        var s = E.next;
        if (s !== null) {
          t = s;
          continue A;
        }
        E = E.parent;
      }
    }
    t = a;
  }
  for (var B = 0; B < g.length; B++)
    C = g[B], e.push(C), Sg(C, e);
}
function v(A) {
  var e = ve, t = DA;
  try {
    Lg();
    const i = [];
    ve = Ci, DA = i, Be = !1, Mg(t);
    var g = A?.();
    return oi(), (DA.length > 0 || i.length > 0) && v(), HA = 0, se = null, g;
  } finally {
    ve = e, DA = t;
  }
}
async function ui() {
  await Promise.resolve(), v();
}
function l(A) {
  var e = A.f, t = (e & gA) !== 0;
  if (t && e & qA) {
    var g = dg(
      /** @type {Derived} */
      A
    );
    return it(
      /** @type {Derived} */
      A
    ), g;
  }
  if (b !== null) {
    oA !== null && oA.includes(A) && Vn();
    var i = b.deps;
    K === null && i !== null && i[P] === A ? P++ : K === null ? K = [A] : K.push(A), fA !== null && d !== null && d.f & W && !(d.f & nA) && fA.includes(A) && (BA(d, dA), Ze(d));
  } else if (t && /** @type {Derived} */
  A.deps === null)
    for (var I = (
      /** @type {Derived} */
      A
    ), r = I.parent, a = I; r !== null; )
      if (r.f & gA) {
        var C = (
          /** @type {Derived} */
          r
        );
        a = C, r = C.parent;
      } else {
        var s = (
          /** @type {Effect} */
          r
        );
        s.deriveds?.includes(a) || (s.deriveds ??= []).push(a);
        break;
      }
  return t && (I = /** @type {Derived} */
  A, Qe(I) && hg(I)), A.v;
}
function VA(A) {
  const e = b;
  try {
    return b = null, A();
  } finally {
    b = e;
  }
}
const di = ~(dA | ce | W);
function BA(A, e) {
  A.f = A.f & di | e;
}
function Jg(A, e = !1, t) {
  X = {
    p: X,
    c: null,
    e: null,
    m: !1,
    s: A,
    x: null,
    l: null
  };
}
function Ug(A) {
  const e = X;
  if (e !== null) {
    A !== void 0 && (e.x = A);
    const r = e.e;
    if (r !== null) {
      var t = d, g = b;
      e.e = null;
      try {
        for (var i = 0; i < r.length; i++) {
          var I = r[i];
          CA(I.effect), wA(I.reaction), It(I.fn);
        }
      } finally {
        CA(t), wA(g);
      }
    }
    X = e.p, e.m = !0;
  }
  return A || /** @type {T} */
  {};
}
let Vt = !1;
function Zg() {
  Vt || (Vt = !0, document.addEventListener(
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
function xg(A) {
  var e = b, t = d;
  wA(null), CA(null);
  try {
    return A();
  } finally {
    wA(e), CA(t);
  }
}
function hi(A, e, t, g = t) {
  A.addEventListener(e, () => xg(t));
  const i = A.__on_r;
  i ? A.__on_r = () => {
    i(), g(!0);
  } : A.__on_r = () => g(!0), Zg();
}
const Kg = /* @__PURE__ */ new Set(), At = /* @__PURE__ */ new Set();
function wi(A, e, t, g) {
  function i(I) {
    if (g.capture || oe.call(e, I), !I.cancelBubble)
      return xg(() => t.call(this, I));
  }
  return A.startsWith("pointer") || A.startsWith("touch") || A === "wheel" ? Ct(() => {
    e.addEventListener(A, i, g);
  }) : e.addEventListener(A, i, g), i;
}
function yi(A, e, t, g, i) {
  var I = { capture: g, passive: i }, r = wi(A, e, t, I);
  (e === document.body || e === window || e === document) && gi(() => {
    e.removeEventListener(A, r, I);
  });
}
function vi(A) {
  for (var e = 0; e < A.length; e++)
    Kg.add(A[e]);
  for (var t of At)
    t(A);
}
function oe(A) {
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), g = A.type, i = A.composedPath?.() || [], I = (
    /** @type {null | Element} */
    i[0] || A.target
  ), r = 0, a = A.__root;
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
    C <= s && (r = C);
  }
  if (I = /** @type {Element} */
  i[r] || A.target, I !== e) {
    Ge(A, "currentTarget", {
      configurable: !0,
      get() {
        return I || t;
      }
    });
    var B = b, E = d;
    wA(null), CA(null);
    try {
      for (var c, f = []; I !== null; ) {
        var D = I.assignedSlot || I.parentNode || /** @type {any} */
        I.host || null;
        try {
          var Y = I["__" + g];
          if (Y !== void 0 && !/** @type {any} */
          I.disabled)
            if (Ig(Y)) {
              var [Z, ...O] = Y;
              Z.apply(I, [A, ...O]);
            } else
              Y.call(I, A);
        } catch (k) {
          c ? f.push(k) : c = k;
        }
        if (A.cancelBubble || D === e || D === null)
          break;
        I = D;
      }
      if (c) {
        for (let k of f)
          queueMicrotask(() => {
            throw k;
          });
        throw c;
      }
    } finally {
      A.__root = e, delete A.currentTarget, wA(B), CA(E);
    }
  }
}
function Xg(A) {
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
  var t = (e & Yn) !== 0, g = (e & Rn) !== 0, i, I = !A.startsWith("<!>");
  return () => {
    if (L)
      return uA(F, null), F;
    i === void 0 && (i = Xg(I ? A : "<!>" + A), t || (i = /** @type {Node} */
    /* @__PURE__ */ GA(i)));
    var r = (
      /** @type {TemplateNode} */
      g ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (t) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ GA(r)
      ), C = (
        /** @type {TemplateNode} */
        r.lastChild
      );
      uA(a, C);
    } else
      uA(r, r);
    return r;
  };
}
function _i() {
  if (L)
    return uA(F, null), F;
  var A = document.createDocumentFragment(), e = document.createComment(""), t = Se();
  return A.append(e, t), uA(e, t), A;
}
function z(A, e) {
  if (L) {
    d.nodes_end = F, TA();
    return;
  }
  A !== null && A.before(
    /** @type {Node} */
    e
  );
}
const bi = ["touchstart", "touchmove"];
function Di(A) {
  return bi.includes(A);
}
function jg(A, e) {
  return Hg(A, e);
}
function Ni(A, e) {
  ze(), e.intro = e.intro ?? !1;
  const t = e.target, g = L, i = F;
  try {
    for (var I = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ GA(t)
    ); I && (I.nodeType !== 8 || /** @type {Comment} */
    I.data !== tg); )
      I = /** @type {TemplateNode} */
      /* @__PURE__ */ yA(I);
    if (!I)
      throw XA;
    xA(!0), hA(
      /** @type {Comment} */
      I
    ), TA();
    const r = Hg(A, { ...e, anchor: I });
    if (F === null || F.nodeType !== 8 || /** @type {Comment} */
    F.data !== ng)
      throw Me(), XA;
    return xA(!1), /**  @type {Exports} */
    r;
  } catch (r) {
    if (r === XA)
      return e.recover === !1 && jn(), ze(), $n(t), xA(!1), jg(A, e);
    throw r;
  } finally {
    xA(g), hA(i);
  }
}
const JA = /* @__PURE__ */ new Map();
function Hg(A, { target: e, anchor: t, props: g = {}, events: i, context: I, intro: r = !0 }) {
  ze();
  var a = /* @__PURE__ */ new Set(), C = (E) => {
    for (var c = 0; c < E.length; c++) {
      var f = E[c];
      if (!a.has(f)) {
        a.add(f);
        var D = Di(f);
        e.addEventListener(f, oe, { passive: D });
        var Y = JA.get(f);
        Y === void 0 ? (document.addEventListener(f, oe, { passive: D }), JA.set(f, 1)) : JA.set(f, Y + 1);
      }
    }
  };
  C(Fn(Kg)), At.add(C);
  var s = void 0, B = wg(() => {
    var E = t ?? e.appendChild(Se());
    return Ye(() => {
      if (I) {
        Jg({});
        var c = (
          /** @type {ComponentContext} */
          X
        );
        c.c = I;
      }
      i && (g.$$events = i), L && uA(
        /** @type {TemplateNode} */
        E,
        null
      ), s = A(E, g) || {}, L && (d.nodes_end = F), I && Ug();
    }), () => {
      for (var c of a) {
        e.removeEventListener(c, oe);
        var f = (
          /** @type {number} */
          JA.get(c)
        );
        --f === 0 ? (document.removeEventListener(c, oe), JA.delete(c)) : JA.set(c, f);
      }
      At.delete(C), et.delete(s), E !== t && E.parentNode?.removeChild(E);
    };
  });
  return et.set(s, B), s;
}
let et = /* @__PURE__ */ new WeakMap();
function Gi(A) {
  const e = et.get(A);
  e && e();
}
function QA(A, e, t = !1) {
  L && TA();
  var g = A, i = null, I = null, r = H, a = t ? nt : 0, C = !1;
  const s = (E, c = !0) => {
    C = !0, B(c, E);
  }, B = (E, c) => {
    if (r === (r = E)) return;
    let f = !1;
    if (L) {
      const D = (
        /** @type {Comment} */
        g.data === gg
      );
      !!r === D && (g = On(), hA(g), xA(!1), f = !0);
    }
    r ? (i ? Ht(i) : c && (i = Ye(() => c(g))), I && jt(I, () => {
      I = null;
    })) : (I ? Ht(I) : c && (I = Ye(() => c(g))), i && jt(i, () => {
      i = null;
    })), f && xA(!0);
  };
  ot(() => {
    C = !1, e(s), C || B(null, null);
  }, a), L && (g = F);
}
function UA(A, e, t, g, i) {
  var I = A, r = "", a;
  ot(() => {
    if (r === (r = e() ?? "")) {
      L && TA();
      return;
    }
    a !== void 0 && (YA(a), a = void 0), r !== "" && (a = Ye(() => {
      if (L) {
        F.data;
        for (var C = TA(), s = C; C !== null && (C.nodeType !== 8 || /** @type {Comment} */
        C.data !== ""); )
          s = C, C = /** @type {TemplateNode} */
          /* @__PURE__ */ yA(C);
        if (C === null)
          throw Me(), XA;
        uA(F, s), I = hA(C);
        return;
      }
      var B = r + "", E = Xg(B);
      uA(
        /** @type {TemplateNode} */
        /* @__PURE__ */ GA(E),
        /** @type {TemplateNode} */
        E.lastChild
      ), I.before(E);
    }));
  });
}
function mi(A, e, t, g, i) {
  L && TA();
  var I = e.$$slots?.[t], r = !1;
  I === !0 && (I = e.children, r = !0), I === void 0 || I(A, r ? () => g : g);
}
function Yi(A, e) {
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
  if (L) {
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
    A.__on_r = t, ri(t), Zg();
  }
}
function Ri(A, e) {
  var t = A.__attributes ??= {};
  t.value === (t.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when its `0`
  A.value === e && (e !== 0 || A.nodeName !== "PROGRESS") || (A.value = e);
}
function eA(A, e, t, g) {
  var i = A.__attributes ??= {};
  L && (i[e] = A.getAttribute(e), e === "src" || e === "srcset" || e === "href" && A.nodeName === "LINK") || i[e] !== (i[e] = t) && (e === "style" && "__styles" in A && (A.__styles = {}), e === "loading" && (A[Jn] = t), t == null ? A.removeAttribute(e) : typeof t != "string" && Fi(A).includes(e) ? A[e] = t : A.setAttribute(e, t));
}
var zt = /* @__PURE__ */ new Map();
function Fi(A) {
  var e = zt.get(A.nodeName);
  if (e) return e;
  zt.set(A.nodeName, e = []);
  for (var t, g = Ve(A), i = Element.prototype; i !== g; ) {
    t = kn(g);
    for (var I in t)
      t[I].set && e.push(I);
    g = Ve(g);
  }
  return e;
}
function ki(A, e, t) {
  if (t) {
    if (A.classList.contains(e)) return;
    A.classList.add(e);
  } else {
    if (!A.classList.contains(e)) return;
    A.classList.remove(e);
  }
}
function pi(A, e, t = e) {
  hi(A, "change", (g) => {
    var i = g ? A.defaultChecked : A.checked;
    t(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (L && A.defaultChecked !== A.checked || // If defaultChecked is set, then checked == defaultChecked
  VA(e) == null) && t(A.checked), rt(() => {
    var g = e();
    A.checked = !!g;
  });
}
function Pt(A, e) {
  return A === e || A?.[Ce] === e;
}
function Ot(A = {}, e, t, g) {
  return It(() => {
    var i, I;
    return rt(() => {
      i = I, I = [], VA(() => {
        A !== t(...I) && (e(A, ...I), i && Pt(t(...i), A) && e(null, ...i));
      });
    }), () => {
      Ct(() => {
        I && Pt(t(...I), A) && e(null, ...I);
      });
    };
  }), A;
}
function Wg(A) {
  X === null && Yg(), Pe(() => {
    const e = VA(A);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Li(A) {
  X === null && Yg(), Wg(() => () => VA(A));
}
let he = !1;
function Mi(A) {
  var e = he;
  try {
    return he = !1, [A(), he];
  } finally {
    he = e;
  }
}
function Si(A) {
  for (var e = d, t = d; e !== null && !(e.f & (nA | Ee)); )
    e = e.parent;
  try {
    return CA(e), A();
  } finally {
    CA(t);
  }
}
function m(A, e, t, g) {
  var i = (t & Dn) !== 0, I = !lg, r = (t & Gn) !== 0, a = (t & mn) !== 0, C = !1, s;
  r ? [s, C] = Mi(() => (
    /** @type {V} */
    A[e]
  )) : s = /** @type {V} */
  A[e];
  var B = Ce in A || Bg in A, E = NA(A, e)?.set ?? (B && r && e in A ? (J) => A[e] = J : void 0), c = (
    /** @type {V} */
    g
  ), f = !0, D = !1, Y = () => (D = !0, f && (f = !1, a ? c = VA(
    /** @type {() => V} */
    g
  ) : c = /** @type {V} */
  g), c);
  s === void 0 && g !== void 0 && (E && I && Hn(), s = Y(), E && E(s));
  var Z;
  if (Z = () => {
    var J = (
      /** @type {V} */
      A[e]
    );
    return J === void 0 ? Y() : (f = !0, D = !1, J);
  }, !(t & Nn))
    return Z;
  if (E) {
    var O = A.$$legacy;
    return function(J, U) {
      return arguments.length > 0 ? ((!U || O || C) && E(U ? Z() : J), J) : Z();
    };
  }
  var k = !1, vA = !1, sA = /* @__PURE__ */ Eg(s), x = Si(
    () => /* @__PURE__ */ re(() => {
      var J = Z(), U = l(sA);
      return k ? (k = !1, vA = !0, U) : (vA = !1, sA.v = J);
    })
  );
  return i || (x.equals = ag), function(J, U) {
    if (arguments.length > 0) {
      const $ = U ? l(x) : r ? tA(J) : J;
      return x.equals($) || (k = !0, R(sA, $), D && c !== void 0 && (c = $), VA(() => l(x))), J;
    }
    return l(x);
  };
}
function Ji(A) {
  return new Ui(A);
}
class Ui {
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
    var t = /* @__PURE__ */ new Map(), g = (I, r) => {
      var a = /* @__PURE__ */ Eg(r);
      return t.set(I, a), a;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(I, r) {
          return l(t.get(r) ?? g(r, Reflect.get(I, r)));
        },
        has(I, r) {
          return r === Bg ? !0 : (l(t.get(r) ?? g(r, Reflect.get(I, r))), Reflect.has(I, r));
        },
        set(I, r, a) {
          return R(t.get(r) ?? g(r, a), a), Reflect.set(I, r, a);
        }
      }
    );
    this.#A = (e.hydrate ? Ni : jg)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && v(), this.#e = i.$$events;
    for (const I of Object.keys(this.#A))
      I === "$set" || I === "$destroy" || I === "$on" || Ge(this, I, {
        get() {
          return this.#A[I];
        },
        /** @param {any} value */
        set(r) {
          this.#A[I] = r;
        },
        enumerable: !0
      });
    this.#A.$set = /** @param {Record<string, any>} next */
    (I) => {
      Object.assign(i, I);
    }, this.#A.$destroy = () => {
      Gi(this.#A);
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
let Tg;
typeof HTMLElement == "function" && (Tg = class extends HTMLElement {
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
          const I = document.createElement("slot");
          g !== "default" && (I.name = g), z(i, I);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, t = Zi(this);
      for (const g of this.$$s)
        g in t && (g === "default" && !this.$$d.children ? (this.$$d.children = A(g), e.default = !0) : e[g] = A(g));
      for (const g of this.attributes) {
        const i = this.$$g_p(g.name);
        i in this.$$d || (this.$$d[i] = _e(i, g.value, this.$$p_d, "toProp"));
      }
      for (const g in this.$$p_d)
        !(g in this.$$d) && this[g] !== void 0 && (this.$$d[g] = this[g], delete this[g]);
      this.$$c = Ji({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = wg(() => {
        rt(() => {
          this.$$r = !0;
          for (const g of Ne(this.$$c)) {
            if (!this.$$p_d[g]?.reflect) continue;
            this.$$d[g] = this.$$c[g];
            const i = _e(
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
          const I = this.$$c.$on(g, i);
          this.$$l_u.set(i, I);
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
    this.$$r || (A = this.$$g_p(A), this.$$d[A] = _e(A, t, this.$$p_d, "toProp"), this.$$c?.$set({ [A]: this.$$d[A] }));
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
    return Ne(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === A || !this.$$p_d[e].attribute && e.toLowerCase() === A
    ) || A;
  }
});
function _e(A, e, t, g) {
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
function Zi(A) {
  const e = {};
  return A.childNodes.forEach((t) => {
    e[
      /** @type {Element} node */
      t.slot || "default"
    ] = !0;
  }), e;
}
function xi(A, e, t, g, i, I) {
  let r = class extends Tg {
    constructor() {
      super(A, t, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Ne(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return Ne(e).forEach((a) => {
    Ge(r.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(C) {
        C = _e(a, C, e), this.$$d[a] = C;
        var s = this.$$c;
        if (s) {
          var B = NA(s, a)?.get;
          B ? s[a] = C : s.$set({ [a]: C });
        }
      }
    });
  }), g.forEach((a) => {
    Ge(r.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), A.element = /** @type {any} */
  r, r;
}
const Vg = new TextEncoder();
function Ki(A) {
  return [...new Uint8Array(A)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function Xi(A, e = "SHA-256", t = 1e5) {
  const g = Date.now().toString(16);
  A || (A = Math.round(Math.random() * t));
  const i = await qg(g, A, e);
  return {
    algorithm: e,
    challenge: i,
    salt: g,
    signature: ""
  };
}
async function qg(A, e, t) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Ki(
    await crypto.subtle.digest(
      t.toUpperCase(),
      Vg.encode(A + e)
    )
  );
}
function ji(A, e, t = "SHA-256", g = 1e6, i = 0) {
  const I = new AbortController(), r = Date.now();
  return {
    promise: (async () => {
      for (let C = i; C <= g; C += 1) {
        if (I.signal.aborted)
          return null;
        if (await qg(e, C, t) === A)
          return {
            number: C,
            took: Date.now() - r
          };
      }
      return null;
    })(),
    controller: I
  };
}
function Hi() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Wi(A) {
  const e = atob(A), t = new Uint8Array(e.length);
  for (let g = 0; g < e.length; g++)
    t[g] = e.charCodeAt(g);
  return t;
}
function Ti(A, e = 12) {
  const t = new Uint8Array(e);
  for (let g = 0; g < e; g++)
    t[g] = A % 256, A = Math.floor(A / 256);
  return t;
}
async function Vi(A, e = "", t = 1e6, g = 0) {
  const i = "AES-GCM", I = new AbortController(), r = Date.now(), a = async () => {
    for (let B = g; B <= t; B += 1) {
      if (I.signal.aborted || !C || !s)
        return null;
      try {
        const E = await crypto.subtle.decrypt(
          {
            name: i,
            iv: Ti(B)
          },
          C,
          s
        );
        if (E)
          return {
            clearText: new TextDecoder().decode(E),
            took: Date.now() - r
          };
      } catch {
      }
    }
    return null;
  };
  let C = null, s = null;
  try {
    s = Wi(A);
    const B = await crypto.subtle.digest(
      "SHA-256",
      Vg.encode(e)
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
      controller: I
    };
  }
  return {
    promise: a(),
    controller: I
  };
}
var w = /* @__PURE__ */ ((A) => (A.ERROR = "error", A.VERIFIED = "verified", A.VERIFYING = "verifying", A.UNVERIFIED = "unverified", A.EXPIRED = "expired", A))(w || {});
const qi = "data:application/wasm;base64,AGFzbQEAAAABwAEeYAJ/fwBgAn9/AX9gAX8AYAN/f38Bf2ADf39/AGAAAX9gAW8Bf2AFf39/f38AYAR/f39/AX9gAX8Bf2AEf39/fwBgAn9/AW9gBG9/f28AYAJ/bwBgAABgBn9/f39/fwBgBX9/f39/AX9gAW8AYAFvAXxgAm9vAW9gAAFvYAN/f38Bb2AGf39/f39/AX9gBX9/fn9/AGAEf35/fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgA39/bwAC4woYFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMSX193YmluZGdlbl9jYl9kcm9wAAYWLi9kZXRlY3Rpb25fd2FzbV9iZy5qcxVfX3diaW5kZ2VuX3N0cmluZ19uZXcACxYuL2RldGVjdGlvbl93YXNtX2JnLmpzKF9fd2JnX2luc3RhbmNlb2ZfV2luZG93X2RlZjczZWEwOTU1ZmM1NjkABhYuL2RldGVjdGlvbl93YXNtX2JnLmpzH19fd2JnX2RvY3VtZW50X2QyNDk0MDBiZDdiZDk5NmQABhYuL2RldGVjdGlvbl93YXNtX2JnLmpzGl9fd2JnX2xvZ19jMjIyODE5YTQxZTA2M2QzABEWLi9kZXRlY3Rpb25fd2FzbV9iZy5qcx5fX3diZ19jbGllbnRYXzVlYjM4MGE1ZjFmZWM2ZmQABhYuL2RldGVjdGlvbl93YXNtX2JnLmpzHl9fd2JnX2NsaWVudFlfZDhiOWM3ZjBjNGUyZTY3NwAGFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMgX193YmdfdGltZVN0YW1wXzc3ZjRlYzhiNjY2OTI1M2MAEhYuL2RldGVjdGlvbl93YXNtX2JnLmpzJ19fd2JnX2FkZEV2ZW50TGlzdGVuZXJfOTBlNTUzZmRjZTI1NDQyMQAMFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMqX193YmdfcmVtb3ZlRXZlbnRMaXN0ZW5lcl8wNTZkZmU4YzNkNmM1OGY5AAwWLi9kZXRlY3Rpb25fd2FzbV9iZy5qcyBfX3diZ19uZXdub2FyZ3NfMTA1ZWQ0NzE0NzVhYWY1MAALFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMbX193YmdfY2FsbF82NzJhNGQyMTYzNGQ0YTI0ABMWLi9kZXRlY3Rpb25fd2FzbV9iZy5qcxdfX3diaW5kZ2VuX2lzX3VuZGVmaW5lZAAGFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMyX193Ymdfc3RhdGljX2FjY2Vzc29yX0dMT0JBTF9USElTXzU2NTc4YmU3ZTlmODMyYjAABRYuL2RldGVjdGlvbl93YXNtX2JnLmpzK19fd2JnX3N0YXRpY19hY2Nlc3Nvcl9TRUxGXzM3YzVkNDE4ZTRiZjU4MTkABRYuL2RldGVjdGlvbl93YXNtX2JnLmpzLV9fd2JnX3N0YXRpY19hY2Nlc3Nvcl9XSU5ET1dfNWRlMzcwNDNhOTFhOWM0MAAFFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMtX193Ymdfc3RhdGljX2FjY2Vzc29yX0dMT0JBTF84OGE5MDJkMTNhNTU3ZDA3AAUWLi9kZXRlY3Rpb25fd2FzbV9iZy5qcxpfX3diZ19uZXdfOGE2ZjIzOGE2ZWNlODZlYQAUFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMcX193Ymdfc3RhY2tfMGVkNzVkNjg1NzViMGYzYwANFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMcX193YmdfZXJyb3JfNzUzNGI4ZTlhMzZmMWFiNAAAFi4vZGV0ZWN0aW9uX3dhc21fYmcuanMXX193YmluZGdlbl9kZWJ1Z19zdHJpbmcADRYuL2RldGVjdGlvbl93YXNtX2JnLmpzEF9fd2JpbmRnZW5fdGhyb3cAABYuL2RldGVjdGlvbl93YXNtX2JnLmpzHF9fd2JpbmRnZW5fY2xvc3VyZV93cmFwcGVyMzQAFRYuL2RldGVjdGlvbl93YXNtX2JnLmpzH19fd2JpbmRnZW5faW5pdF9leHRlcm5yZWZfdGFibGUADgN5eAkDAgMAAAABBQMAAgEBAA8BAAUEBwQABQcAAAAKBAEBBwQCDwQAAAQEAwIDAAQBAAkCBQIIAgACAggCAAIBFgcQFxkbAgQKAwIEAQICAgICAgECCAMEAgEBAx0BAQEAAAEAAQEJAAQBAQIBAAIOAQABAQADAgAABQQJAnABQ0NvAIABBQMBABEGCQF/AUGAgMAACwelAg4GbWVtb3J5AgATX193YmdfZGV0ZWN0b3JfZnJlZQAyDGRldGVjdG9yX25ldwBKFmRldGVjdG9yX2VuZF9k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xKHAADYCAEHUocAAQcyhwAA2AgBB4KHAAEHUocAANgIAQdyhwABB1KHAADYCAEHoocAAQdyhwAA2AgBB5KHAAEHcocAANgIAQfChwABB5KHAADYCAEHsocAAQeShwAA2AgBB+KHAAEHsocAANgIAQfShwABB7KHAADYCAEGAosAAQfShwAA2AgBB/KHAAEH0ocAANgIAQYiiwABB/KHAADYCAEGEosAAQfyhwAA2AgBBkKLAAEGEosAANgIAQYyiwABBhKLAADYCAEGYosAAQYyiwAA2AgBBoKLAAEGUosAANgIAQZSiwABBjKLAADYCAEGoosAAQZyiwAA2AgBBnKLAAEGUosAANgIAQbCiwABBpKLAADYCAEGkosAAQZyiwAA2AgBBuKLAAEGsosAANgIAQayiwABBpKLAADYCAEHAosAAQbSiwAA2AgBBtKLAAEGsosAANgIAQciiwABBvKLAADYCAEG8osAAQbSiwAA2AgBB0KLAAEHEosAANgIAQcSiwABBvKLAADYCAEHYosAAQcyiwAA2AgBBzKLAAEHEosAANgIAQeCiwABB1KLAADYCAEHUosAAQcyiwAA2AgBB6KLAAEHcosAANgIAQdyiwABB1KLAADYCAEHwosAAQeSiwAA2AgBB5KLAAEHcosAANgIAQfiiwABB7KLAADYCAEHsosAAQeSiwAA2AgBBgKPAAEH0osAANgIAQfSiwABB7KLAADYCAEGIo8AAQfyiwAA2AgBB/KLAAEH0osAANgIAQZCjwABBhKPAADYCAEGEo8AAQfyiwAA2AgBBqKPAACABQQ9qQXhxIgBBCGsiAjYCAEGMo8AAQYSjwAA2AgBBoKPAACAEQShrIgMgASAAa2pBCGoiADYCACACIABBAXI2AgQgASADakEoNgIEQbSjwABBgICAATYCAAwICyACIANJIAEgAk1yDQAgACgCDCIDQQFxDQAgA0EBdiAGRg0DC0G4o8AAQbijwAAoAgAiACABIAAgAUkbNgIAIAEgBGohA0H8oMAAIQACQAJAA0AgAyAAKAIAIgdHBEAgACgCCCIADQEMAgsLIAAoAgwiA0EBcQ0AIANBAXYgBkYNAQtB/KDAACEAA0ACQCACIAAoAgAiA08EQCACIAMgACgCBGoiB0kNAQsgACgCCCEADAELC0Goo8AAIAFBD2pBeHEiAEEI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RQRAIABBATYCCCAAQQA2AgRBAAwCC0HZn8AALQAAGiACQQEQdSIDBEAgACADNgIIIAAgATYCBEEADAILIAAgAjYCCCAAQQE2AgRBAQwBCyAAQQA2AgRBAQs2AgAL8wICA38BfiMAQSBrIgIkAAJAAkAgAUUEQCACQQhqIQMjAEEgayIBJAACQAJAIAAEQCAAQQhrIgQoAgBBAUcNASABQRxqIABBGGooAgA2AgAgAUEUaiAAQRBqKQIANwIAIAFBDGogAEEIaikCADcCACAAKQIAIQUgBEEANgIAIAEgBTcCBAJAIARBf0YNACAAQQRrIgAgACgCAEEBayIANgIAIAANACAEQSRBBBB+CyADIAEpAgg3AgAgA0EQaiABQRhqKQIANwIAIANBCGogAUEQaikCADcCACABQSBqJAAMAgsQhQEAC0HshcAAQT8QgwEACyADECMgAigCDCIAQYQBTwRAIAAQSwsgAigCFARAIAJBFGoQagsgAigCCCIAIAAoAgBBAWsiADYCACAADQEgAkEIahBSDAELIABFDQEgAiAAQQhrIgA2AgggACAAKAIAQQFrIgA2AgAgAA0AIAJBCGoQOgsgAkEgaiQADwsQhQEAC5YBAQR/IwBBIGsiAiQAQQggACgCACIEQQF0IgMgA0EITRsiA0EASARAQQBBACABEGEACyACIAQEfyACIAQ2AhwgAiAAKAIENgIUQQEFIAULNgIYIAJBCGogAyACQRRqEDUgAigCCEEBRgRAIAIoAgwgAigCECABEGEACyACKAIMIQEgACADNgIAIAAgATYCBCACQSBqJAALhgEBAX8gAAJ/AkACfwJAIAJBAE4EQCADKAIEBEAgAygCCCIEBEAgAygCACAEIAEgAhBrDAQLCyACRQ0BQdmfwAAtAAAaIAIgARB1DAILIABBADYCBAwCCyABCyIDBEAgACACNgIIIAAgAzYCBEEADAILIAAgAjYCCCAAIAE2AgQLQQELNgIAC4MBAQF/AkAgAUEATgRAAn8gAigCBARAIAIoAggiAwRAIAIoAgAgA0EBIAEQawwCCwtBASABRQ0AGkHZn8AALQAAGiABQQEQdQsiAgRAIAAgATYCCCAAIAI2AgQgAEEANgIADwsgACABNgIIIABBATYCBAwBCyAAQQA2AgQLIABBATYCAAuUAQEBfyMAQUBqIgIk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QGsgBygCADYCACAAIAApAyA3AzggAEEIaiAFQcSNwAAQPCAAKAIIIAAoAgwQEyAGEIQBIAJBhAFPBEAgAhBLCyAAQeAAaiQADAELQfyNwABBNyAAQSBqQeyNwABBoI/AABA4AAsLBAAQLwsLvB8FAEGIgMAAC+ENAQAAAAEAAAACAAAAAwAAAE9uY2UgaW5zdGFuY2UgaGFzIHByZXZpb3VzbHkgYmVlbiBwb2lzb25lZAAAGAAQACoAAABvbmUtdGltZSBpbml0aWFsaXphdGlvbiBtYXkgbm90IGJlIHBlcmZvcm1lZCByZWN1cnNpdmVseUwAEAA4AAAAL1VzZXJzL2VyZnVyLy5ydXN0dXAvdG9vbGNoYWlucy9uaWdodGx5LWFhcmNoNjQtYXBwbGUtZGFyd2luL2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvc3RkL3NyYy9zeW5jL3BvaXNvbi9vbmNlLnJzAAAAjAAQAHUAAACbAAAAMgAAAC9Vc2Vycy9lcmZ1ci8ucnVzdHVwL3Rvb2xjaGFpbnMvbmlnaHRseS1hYXJjaDY0LWFwcGxlLWRhcndpbi9saWIvcnVzdGxpYi9zcmMvcnVzdC9saWJyYXJ5L2NvcmUvc3JjL2NlbGwucnMAABQBEABqAAAACQUAAA4AAABzcmMvYW5vbWFseS5ycwAAkAEQAA4AAAA1AAAAFQAAAGNsb3N1cmUgaW52b2tlZCByZWN1cnNpdmVseSBvciBhZnRlciBiZWluZyBkcm9wcGVkL1VzZXJzL2VyZnVyLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2YvY29uc29sZV9lcnJvcl9wYW5pY19ob29rLTAuMS43L3NyYy9saWIucnMAAADiARAAawAAAJUAAAAOAAAACgAAAAQAAAAEAAAACwAAAC9Vc2Vycy9lcmZ1ci8ucnVzdHVwL3Rvb2xjaGFpbnMvbmlnaHRseS1hYXJjaDY0LWFwcGxlLWRhcndpbi9saWIvcnVzdGxpYi9zcmMvcnVzdC9saWJyYXJ5L2FsbG9jL3NyYy9zbGljZS5yc3ACEABsAAAAogAAABkAAABhdHRlbXB0ZWQgdG8gdGFrZSBvd25lcnNoaXAgb2YgUnVzdCB2YWx1ZSB3aGlsZSBpdCB3YXMgYm9ycm93ZWREZXRlY3Rvcjo6bmV3W3dhc21dIAA4AxAABwAAAHNyYy9saWIucnNubyBnbG9iYWwgYHdpbmRvd2AgZXhpc3RzAEgDEAAKAAAAHgAAACgAAABzaG91bGQgaGF2ZSBhIGRvY3VtZW50IG9uIHdpbmRvd0gDEAAKAAAAHwAAACoAAAAMAAAAQAAAAAgAAAANAAAADgAAAG1vdXNlbW92ZWZhaWxlZCB0byBhZGQgZXZlbnQgbGlzdGVuZXIAAABIAxAACgAAADwAAAAOAAAATW91c2UgbW92ZWQgdG86IHg9LCB5PQAA+AMQABIAAAAKBBAABAAAAEFub21hbHkgZGV0ZWN0ZWQhAAAASAMQAAoAAAAxAAAAJwAAAGZhaWxlZCB0byByZW1vdmUgZXZlbnQgbGlzdGVuZXIASAMQAAoAAABJAAAAEgAAAERldGVjdG9yOjpkcm9wIC0gcmVtb3ZlZCBldmVudCBsaXN0ZW5lckRldGVjdG9yOjppc19kZXRlY3RlZEgDEAAKAAAAUQAAACAAAAByZXR1cm4gdGhpcwCIDxAAlA8QAKAPEACsDxAATGF6eSBpbnN0YW5jZSBoYXMgcHJldmlvdXNseSBiZWVuIHBvaXNvbmVkAADcBBAAKgAAAC9Vc2Vycy9lcmZ1ci8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmL29uY2VfY2VsbC0xLjIwLjMvc3JjL2xpYi5ycwAAABAFEABdAAAACAMAABkAAAByZWVudHJhbnQgaW5pdAAAgAUQAA4AAAAQBRAAXQAAAHoCAAANAAAAL1VzZXJzL2VyZnVyLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2Yvd2FzbS1iaW5kZ2VuLTAuMi4xMDAvc3JjL2NvbnZlcnQvc2xpY2VzLnJzqAUQAGwAAAAkAQAADgAAAGNsb3N1cmUgaW52b2tlZCByZWN1cnNpdmVseSBvciBhZnRlciBiZWluZyBkcm9wcGVkL1VzZXJzL2VyZnVyLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2Yvd2FzbS1iaW5kZ2VuLTAuMi4xMDAvc3JjL2NvbnZlcnQvc2xpY2VzLnJzAABWBhAAbAAAACQBAAAOAAAAIAAAAAwAAAAEAAAAIQAAACIAAAAjAEH0jcAAC/0MAQAAACQAAABhIERpc3BsYXkgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IgdW5leHBlY3RlZGx5L1VzZXJzL2VyZnVyLy5ydXN0dXAvdG9vbGNoYWlucy9uaWdodGx5LWFhcmNoNjQtYXBwbGUtZGFyd2luL2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvYWxsb2Mvc3JjL3N0cmluZy5yczMHEABtAAAA4QoAAA4AAABFcnJvcgAAADMHEABtAAAAjQUAABsAAAAvVXNlcnMvZXJmdXIvLnJ1c3R1cC90b29sY2hhaW5zL25pZ2h0bHktYWFyY2g2NC1hcHBsZS1kYXJ3aW4vbGliL3J1c3RsaWIvc3JjL3J1c3QvbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5ycwAAyAcQAG4AAAAqAgAAEQAAAAoKU3RhY2s6CgoKCkpzVmFsdWUoKQAAAFQIEAAIAAAAXAgQAAEAAABMYXp5IGluc3RhbmNlIGhhcyBwcmV2aW91c2x5IGJlZW4gcG9pc29uZWQAAHAIEAAqAAAAL1VzZXJzL2VyZnVyLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2Yvb25jZV9jZWxsLTEuMjAuMy9zcmMvbGliLnJzAAAApAgQAF0AAAAIAwAAGQAAAHJlZW50cmFudCBpbml0AAAUCRAADgAAAKQIEABdAAAAegIAAA0AAAAvVXNlcnMvZXJmdXIvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zi93YXNtLWJpbmRnZW4tMC4yLjEwMC9zcmMvY29udmVydC9zbGljZXMucnNudWxsIHBvaW50ZXIgcGFzc2VkIHRvIHJ1c3RyZWN1cnNpdmUgdXNlIG9mIGFuIG9iamVjdCBkZXRlY3RlZCB3aGljaCB3b3VsZCBsZWFkIHRvIHVuc2FmZSBhbGlhc2luZyBpbiBydXN0AAA8CRAAbAAAAOgAAAABAAAAbGlicmFyeS9zdGQvc3JjL3Bhbmlja2luZy5ycy9ydXN0Yy82MTdhYWQ4YzJlODc4M2Y2ZGY4ZTVkMWY4YmIxZTRiY2RjNzBhYTdiL2xpYnJhcnkvYWxsb2Mvc3JjL3N0cmluZy5ycwBAChAASwAAAI0FAAAbAAAAL3J1c3RjLzYxN2FhZDhjMmU4NzgzZjZkZjhlNWQxZjhiYjFlNGJjZGM3MGFhN2IvbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc5wKEABMAAAAKgIAABEAAAA6AAAAAQAAAAAAAAD4ChAAAQAAAPgKEAABAAAAKgAAAAwAAAAEAAAAKwAAACwAAAAtAAAAL3J1c3QvZGVwcy9kbG1hbGxvYy0wLjIuNy9zcmMvZGxtYWxsb2MucnNhc3NlcnRpb24gZmFpbGVkOiBwc2l6ZSA+PSBzaXplICsgbWluX292ZXJoZWFkACwLEAApAAAAqAQAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBwc2l6ZSA8PSBzaXplICsgbWF4X292ZXJoZWFkAAAsCxAAKQAAAK4EAAANAAAAcGFuaWNrZWQgYXQgOgptZW1vcnkgYWxsb2NhdGlvbiBvZiAgYnl0ZXMgZmFpbGVk4gsQABUAAAD3CxAADQAAAGxpYnJhcnkvc3RkL3NyYy9hbGxvYy5ycxQMEAAYAAAAYwEAAAkAAABjYW5ub3QgbW9kaWZ5IHRoZSBwYW5pYyBob29rIGZyb20gYSBwYW5pY2tpbmcgdGhyZWFkPAwQADQAAAAkChAAHAAAAI4AAAAJAAAAKgAAAAwAAAAEAAAALgAAAAAAAAAIAAAABAAAAC8AAAAAAAAACAAAAAQAAAAwAAAAMQAAADIAAAAzAAAANAAAABAAAAAEAAAANQAAADYAAAA3AAAAOAAAAEVycm9yAAAAOQAAAAwAAAAEAAAAOgAAADsAAAA8AAAAY2FwYWNpdHkgb3ZlcmZsb3cAAAAADRAAEQAAAGxpYnJhcnkvYWxsb2Mvc3JjL3Jhd192ZWMucnMcDRAAHAAAACoCAAARAAAAbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAEgNEAAbAAAA6gEAABcAQfyawAALgAQBAAAAPQAAAGEgZm9ybWF0dGluZyB0cmFpdCBpbXBsZW1lbnRhdGlvbiByZXR1cm5lZCBhbiBlcnJvciB3aGVuIHRoZSB1bmRlcmx5aW5nIHN0cmVhbSBkaWQgbm90bGlicmFyeS9hbGxvYy9zcmMvZm10LnJzAADaDRAAGAAAAIoCAAAOAAAASA0QABsAAACNBQAAGwAAAAEAAAAAAAAAQm9ycm93RXJyb3JCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAA1DhAAEgAAAGFscmVhZHkgbXV0YWJseSBib3Jyb3dlZDogAABQDhAAGgAAAGNhbGxlZCBgT3B0aW9uOjp1bndyYXAoKWAgb24gYSBgTm9uZWAgdmFsdWU6IAAAAAEAAAAAAAAAnw4QAAIAAAAwMDAxMDIwMzA0MDUwNjA3MDgwOTEwMTExMjEzMTQxNTE2MTcxODE5MjAyMTIyMjMyNDI1MjYyNzI4MjkzMDMxMzIzMzM0MzUzNjM3MzgzOTQwNDE0MjQzNDQ0NTQ2NDc0ODQ5NTA1MTUyNTM1NDU1NTY1NzU4NTk2MDYxNjI2MzY0NjU2NjY3Njg2OTcwNzE3MjczNzQ3NTc2Nzc3ODc5ODA4MTgyODM4NDg1ODY4Nzg4ODk5MDkxOTI5Mzk0OTU5Njk3OTg5OQBBhJ/AAAsxDwAAAAIAAAAAAAAAEAAAAAIAAAAAAAAAEQAAAAIAAAAAAAAAEgAAAAIAAAAAAAAAEwBB0J/AAAsBJgB4CXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMlMS44Ny4wLW5pZ2h0bHkgKDYxN2FhZDhjMiAyMDI1LTAyLTI0KQZ3YWxydXMGMC4yMy4zDHdhc20tYmluZGdlbgcwLjIuMTAwAGsPdGFyZ2V0X2ZlYXR1cmVzBisPbXV0YWJsZS1nbG9iYWxzKxNub250cmFwcGluZy1mcHRvaW50KwtidWxrLW1lbW9yeSsIc2lnbi1leHQrD3JlZmVyZW5jZS10eXBlcysKbXVsdGl2YWx1ZQ==", zi = async (A = {}, e) => {
  let t;
  if (e.startsWith("data:")) {
    const g = e.replace(/^data:.*?base64,/, "");
    let i;
    if (typeof Buffer == "function" && typeof Buffer.from == "function")
      i = Buffer.from(g, "base64");
    else if (typeof atob == "function") {
      const I = atob(g);
      i = new Uint8Array(I.length);
      for (let r = 0; r < I.length; r++)
        i[r] = I.charCodeAt(r);
    } else
      throw new Error("Cannot decode base64-encoded data URL");
    t = await WebAssembly.instantiate(i, A);
  } else {
    const g = await fetch(e), i = g.headers.get("Content-Type") || "";
    if ("instantiateStreaming" in WebAssembly && i.startsWith("application/wasm"))
      t = await WebAssembly.instantiateStreaming(g, A);
    else {
      const I = await g.arrayBuffer();
      t = await WebAssembly.instantiate(I, A);
    }
  }
  return t.instance.exports;
};
let p;
function Pi(A) {
  p = A;
}
const Oi = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
let zg = new Oi("utf-8", { ignoreBOM: !0, fatal: !0 });
zg.decode();
let we = null;
function be() {
  return (we === null || we.byteLength === 0) && (we = new Uint8Array(p.memory.buffer)), we;
}
function PA(A, e) {
  return A = A >>> 0, zg.decode(be().subarray(A, A + e));
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
const $i = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
let De = new $i("utf-8");
const AI = typeof De.encodeInto == "function" ? function(A, e) {
  return De.encodeInto(A, e);
} : function(A, e) {
  const t = De.encode(A);
  return e.set(t), {
    read: A.length,
    written: t.length
  };
};
function Pg(A, e, t) {
  if (t === void 0) {
    const a = De.encode(A), C = e(a.length, 1) >>> 0;
    return be().subarray(C, C + a.length).set(a), ke = a.length, C;
  }
  let g = A.length, i = e(g, 1) >>> 0;
  const I = be();
  let r = 0;
  for (; r < g; r++) {
    const a = A.charCodeAt(r);
    if (a > 127) break;
    I[i + r] = a;
  }
  if (r !== g) {
    r !== 0 && (A = A.slice(r)), i = t(i, g, g = r + A.length * 3, 1) >>> 0;
    const a = be().subarray(i + r, i + g), C = AI(A, a);
    r += C.written, i = t(i, g, r, 1) >>> 0;
  }
  return ke = r, i;
}
let ZA = null;
function pe() {
  return (ZA === null || ZA.buffer.detached === !0 || ZA.buffer.detached === void 0 && ZA.buffer !== p.memory.buffer) && (ZA = new DataView(p.memory.buffer)), ZA;
}
const $t = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((A) => {
  p.__wbindgen_export_6.get(A.dtor)(A.a, A.b);
});
function eI(A, e, t, g) {
  const i = { a: A, b: e, cnt: 1, dtor: t }, I = (...r) => {
    i.cnt++;
    const a = i.a;
    i.a = 0;
    try {
      return g(a, i.b, ...r);
    } finally {
      --i.cnt === 0 ? (p.__wbindgen_export_6.get(i.dtor)(a, i.b), $t.unregister(i)) : i.a = a;
    }
  };
  return I.original = i, $t.register(I, i, i), I;
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
    let I = "[";
    i > 0 && (I += tt(A[0]));
    for (let r = 1; r < i; r++)
      I += ", " + tt(A[r]);
    return I += "]", I;
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
function tI(A, e, t) {
  p.closure5_externref_shim(A, e, t);
}
const Ag = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((A) => p.__wbg_detector_free(A >>> 0, 1));
class Le {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Le.prototype);
    return t.__wbg_ptr = e, Ag.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ag.unregister(this), e;
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
    return Le.__wrap(e);
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
function gI() {
  return st(function(A, e, t, g) {
    A.addEventListener(PA(e, t), g);
  }, arguments);
}
function nI() {
  return st(function(A, e) {
    return A.call(e);
  }, arguments);
}
function iI(A) {
  return A.clientX;
}
function II(A) {
  return A.clientY;
}
function rI(A) {
  const e = A.document;
  return fe(e) ? 0 : OA(e);
}
function oI(A, e) {
  let t, g;
  try {
    t = A, g = e, console.error(PA(A, e));
  } finally {
    p.__wbindgen_free(t, g, 1);
  }
}
function CI(A) {
  let e;
  try {
    e = A instanceof Window;
  } catch {
    e = !1;
  }
  return e;
}
function BI(A) {
  console.log(A);
}
function sI() {
  return new Error();
}
function aI(A, e) {
  return new Function(PA(A, e));
}
function lI() {
  return st(function(A, e, t, g) {
    A.removeEventListener(PA(e, t), g);
  }, arguments);
}
function EI(A, e) {
  const t = e.stack, g = Pg(t, p.__wbindgen_malloc, p.__wbindgen_realloc), i = ke;
  pe().setInt32(A + 4 * 1, i, !0), pe().setInt32(A + 4 * 0, g, !0);
}
function cI() {
  const A = typeof global > "u" ? null : global;
  return fe(A) ? 0 : OA(A);
}
function QI() {
  const A = typeof globalThis > "u" ? null : globalThis;
  return fe(A) ? 0 : OA(A);
}
function fI() {
  const A = typeof self > "u" ? null : self;
  return fe(A) ? 0 : OA(A);
}
function uI() {
  const A = typeof window > "u" ? null : window;
  return fe(A) ? 0 : OA(A);
}
function dI(A) {
  return A.timeStamp;
}
function hI(A) {
  const e = A.original;
  return e.cnt-- == 1 ? (e.a = 0, !0) : !1;
}
function wI(A, e, t) {
  return eI(A, e, 6, tI);
}
function yI(A, e) {
  const t = tt(e), g = Pg(t, p.__wbindgen_malloc, p.__wbindgen_realloc), i = ke;
  pe().setInt32(A + 4 * 1, i, !0), pe().setInt32(A + 4 * 0, g, !0);
}
function vI() {
  const A = p.__wbindgen_export_2, e = A.grow(4);
  A.set(0, void 0), A.set(e + 0, void 0), A.set(e + 1, null), A.set(e + 2, !0), A.set(e + 3, !1);
}
function _I(A) {
  return A === void 0;
}
function bI(A, e) {
  return PA(A, e);
}
function DI(A, e) {
  throw new Error(PA(A, e));
}
URL = globalThis.URL;
const T = await zi({ "./detection_wasm_bg.js": {
  __wbindgen_cb_drop: hI,
  __wbindgen_string_new: bI,
  __wbg_instanceof_Window_def73ea0955fc569: CI,
  __wbg_document_d249400bd7bd996d: rI,
  __wbg_log_c222819a41e063d3: BI,
  __wbg_clientX_5eb380a5f1fec6fd: iI,
  __wbg_clientY_d8b9c7f0c4e2e677: II,
  __wbg_timeStamp_77f4ec8b6669253c: dI,
  __wbg_addEventListener_90e553fdce254421: gI,
  __wbg_removeEventListener_056dfe8c3d6c58f9: lI,
  __wbg_newnoargs_105ed471475aaf50: aI,
  __wbg_call_672a4d21634d4a24: nI,
  __wbindgen_is_undefined: _I,
  __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0: QI,
  __wbg_static_accessor_SELF_37c5d418e4bf5819: fI,
  __wbg_static_accessor_WINDOW_5de37043a91a9c40: uI,
  __wbg_static_accessor_GLOBAL_88a902d13a557d07: cI,
  __wbg_new_8a6f238a6ece86ea: sI,
  __wbg_stack_0ed75d68575b0f3c: EI,
  __wbg_error_7534b8e9a36f1ab4: oI,
  __wbindgen_debug_string: yI,
  __wbindgen_throw: DI,
  __wbindgen_closure_wrapper34: wI,
  __wbindgen_init_externref_table: vI
} }, qi), NI = T.memory, GI = T.__wbg_detector_free, mI = T.detector_new, YI = T.detector_end_detection, RI = T.detector_is_detected, FI = T.__wbindgen_exn_store, kI = T.__externref_table_alloc, pI = T.__wbindgen_export_2, LI = T.__wbindgen_free, MI = T.__wbindgen_malloc, SI = T.__wbindgen_realloc, JI = T.__wbindgen_export_6, UI = T.closure5_externref_shim, Og = T.__wbindgen_start, ZI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __externref_table_alloc: kI,
  __wbg_detector_free: GI,
  __wbindgen_exn_store: FI,
  __wbindgen_export_2: pI,
  __wbindgen_export_6: JI,
  __wbindgen_free: LI,
  __wbindgen_malloc: MI,
  __wbindgen_realloc: SI,
  __wbindgen_start: Og,
  closure5_externref_shim: UI,
  detector_end_detection: YI,
  detector_is_detected: RI,
  detector_new: mI,
  memory: NI
}, Symbol.toStringTag, { value: "Module" }));
Pi(ZI);
Og();
class xI {
  timer = null;
  detector = Le.new();
  endDetection() {
    return this.timer !== null && (clearInterval(this.timer), this.timer = null), this.detector.end_detection(), this.detector.is_detected();
  }
}
var KI = /* @__PURE__ */ iA('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-ddsc3z"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-ddsc3z"></path></svg>'), XI = /* @__PURE__ */ iA('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span> <input type="hidden" class="svelte-ddsc3z">', 1), jI = /* @__PURE__ */ iA('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span>'), HI = /* @__PURE__ */ iA('<label class="svelte-ddsc3z"><!></label>'), WI = /* @__PURE__ */ iA('<div class="svelte-ddsc3z"><a target="_blank" class="altcha-logo svelte-ddsc3z"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-ddsc3z"></path></svg></a></div>'), TI = /* @__PURE__ */ iA('<div class="svelte-ddsc3z"><!></div>'), VI = /* @__PURE__ */ iA('<div class="svelte-ddsc3z"><!></div>'), qI = /* @__PURE__ */ iA('<div class="altcha-error svelte-ddsc3z"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svelte-ddsc3z"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-ddsc3z"></path></svg> <!></div>'), zI = /* @__PURE__ */ iA('<div class="altcha-footer svelte-ddsc3z"><div class="svelte-ddsc3z"><!></div></div>'), PI = /* @__PURE__ */ iA('<div class="altcha-anchor-arrow svelte-ddsc3z"></div>'), OI = /* @__PURE__ */ iA('<!> <div class="altcha svelte-ddsc3z"><div class="altcha-main svelte-ddsc3z"><!> <div class="altcha-checkbox svelte-ddsc3z"><input type="checkbox" class="svelte-ddsc3z"></div> <div class="altcha-label svelte-ddsc3z"><!></div> <!></div> <!> <!> <!></div>', 1);
const $I = {
  hash: "svelte-ddsc3z",
  code: `.altcha.svelte-ddsc3z {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left;}.altcha.svelte-ddsc3z:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow:where(.svelte-ddsc3z) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-ddsc3z:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-ddsc3z:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-ddsc3z {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-ddsc3z {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;}.altcha-label.svelte-ddsc3z {flex-grow:1;}.altcha-label.svelte-ddsc3z label:where(.svelte-ddsc3z) {cursor:pointer;}.altcha-logo.svelte-ddsc3z {color:currentColor;opacity:0.3;}.altcha-logo.svelte-ddsc3z:hover {opacity:1;}.altcha-error.svelte-ddsc3z {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-ddsc3z {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right;}.altcha-footer.svelte-ddsc3z:hover {opacity:1;}.altcha-footer.svelte-ddsc3z > :where(.svelte-ddsc3z):first-child {flex-grow:1;}.altcha-footer.svelte-ddsc3z a {color:currentColor;}.altcha-checkbox.svelte-ddsc3z {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-ddsc3z input:where(.svelte-ddsc3z) {width:18px;height:18px;margin:0;}.altcha-hidden.svelte-ddsc3z {display:none;}.altcha-spinner.svelte-ddsc3z {
  animation: svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-ddsc3z-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function Ar(A, e) {
  Jg(e, !0), Yi(A, $I);
  let t = m(e, "auto", 7, void 0), g = m(e, "blockspam", 7, void 0), i = m(e, "challengeurl", 7, void 0), I = m(e, "challengejson", 7, void 0), r = m(e, "customfetch", 7, void 0), a = m(e, "debug", 7, !1), C = m(e, "delay", 7, 0), s = m(e, "expire", 7, void 0), B = m(e, "floating", 7, void 0), E = m(e, "floatinganchor", 7, void 0), c = m(e, "floatingoffset", 7, void 0), f = m(e, "hidefooter", 7, !1), D = m(e, "hidelogo", 7, !1), Y = m(e, "name", 7, "altcha"), Z = m(e, "maxnumber", 7, 1e6), O = m(e, "mockerror", 7, !1), k = m(e, "obfuscated", 7, void 0), vA = m(e, "plugins", 7, void 0), sA = m(e, "refetchonexpire", 7, !0), x = m(e, "spamfilter", 7, !1), J = m(e, "strings", 7, void 0), U = m(e, "test", 7, !1), $ = m(e, "verifyurl", 7, void 0), RA = m(e, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), $A = m(e, "workerurl", 7, void 0);
  const at = ["SHA-256", "SHA-384", "SHA-512"], lt = "Visit Altcha.org", Et = "https://altcha.org/", Ae = (n, o) => {
    e.$$host.dispatchEvent(new CustomEvent(n, { detail: o }));
  }, ct = document.documentElement.lang?.split("-")?.[0], xe = /* @__PURE__ */ re(() => i() && new URL(i(), location.origin).host.endsWith(".altcha.org") && !!i()?.includes("apiKey=ckey_")), Ke = /* @__PURE__ */ re(() => I() ? Dt(I()) : void 0), Qt = /* @__PURE__ */ re(() => J() ? Dt(J()) : {}), AA = /* @__PURE__ */ re(() => ({
    ariaLinkLabel: lt,
    error: "Verification failed. Try again later.",
    expired: "Verification expired. Try again.",
    footer: `Protected by <a href="${Et}" target="_blank" aria-label="${l(Qt)?.ariaLinkLabel || lt}">ALTCHA</a>`,
    label: "I'm not a robot",
    verified: "Verified",
    verifying: "Verifying...",
    waitAlert: "Verifying... please wait.",
    ...l(Qt)
  }));
  let FA = MA(!1), N = MA(tA(w.UNVERIFIED)), j = MA(void 0), ee = MA(null), kA = null, M = null, pA = MA(null), IA = null, EA = [], _A = MA(null);
  Pe(() => {
    rn(l(pA));
  }), Pe(() => {
    on(l(N));
  }), Li(() => {
    $g(), M && (M.removeEventListener("submit", yt), M.removeEventListener("reset", vt), M.removeEventListener("focusin", wt), M = null), IA && (clearTimeout(IA), IA = null), document.removeEventListener("click", dt), document.removeEventListener("scroll", ht), window.removeEventListener("resize", bt);
  }), Wg(() => {
    G("mounted", "1.2.0-wasm"), G("workers", RA()), nn(), G("plugins", EA.length ? EA.map((n) => n.constructor.pluginName).join(", ") : "none"), U() && G("using test mode"), s() && Xe(s()), t() !== void 0 && G("auto", t()), B() !== void 0 && Nt(B()), M = l(j)?.closest("form"), M && (M.addEventListener("submit", yt, { capture: !0 }), M.addEventListener("reset", vt), t() === "onfocus" && M.addEventListener("focusin", wt)), t() === "onload" && (k() ? te() : cA()), l(xe) && (f() || D()) && G("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
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
  function $g() {
    for (const n of EA)
      n.destroy();
  }
  function ut() {
    i() && sA() && l(N) === w.VERIFIED ? cA() : ge(w.EXPIRED, l(AA).expired);
  }
  async function An() {
    if (O())
      throw G("mocking error"), new Error("Mocked error.");
    if (l(Ke))
      return G("using provided json data"), l(Ke);
    if (U())
      return G("generating test challenge", { test: U() }), Xi(typeof U() != "boolean" ? +U() : void 0);
    {
      if (!i() && M) {
        const h = M.getAttribute("action");
        h?.includes("/form/") && i(h + "/altcha");
      }
      if (!i())
        throw new Error("Attribute challengeurl not set.");
      G("fetching challenge from", i());
      let n = null, o = null;
      if (r())
        if (G("using customfetch"), typeof r() == "string") {
          if (n = globalThis[r()] || null, !n)
            throw new Error(`Custom fetch function not found: ${r()}`);
        } else
          n = r();
      const Q = {
        headers: x() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (n) {
        if (o = await n(i(), Q), !o || !(o instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        o = await fetch(i(), Q);
      if (o.status !== 200)
        throw new Error(`Server responded with ${o.status}.`);
      const y = o.headers.get("X-Altcha-Config"), S = await o.json(), _ = new URLSearchParams(S.salt.split("?")?.[1]), u = _.get("expires") || _.get("expire");
      if (u) {
        const h = new Date(+u * 1e3), aA = isNaN(h.getTime()) ? 0 : h.getTime() - Date.now();
        aA > 0 && Xe(aA);
      }
      if (y)
        try {
          const h = JSON.parse(y);
          h && typeof h == "object" && (h.verifyurl && (h.verifyurl = new URL(h.verifyurl, new URL(i())).toString()), Yt(h));
        } catch (h) {
          G("unable to configure from X-Altcha-Config", h);
        }
      return S;
    }
  }
  function en(n) {
    const o = M?.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return o?.value?.slice(o.value.indexOf("@")) || void 0;
  }
  function tn() {
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
  function gn(n) {
    return [
      ...M?.querySelectorAll(n?.length ? n.map((Q) => `input[name="${Q}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])') || []
    ].reduce(
      (Q, y) => {
        const S = y.name, _ = y.value;
        return S && _ && (Q[S] = /\n/.test(_) ? _.replace(/(?<!\r)\n/g, `\r
`) : _), Q;
      },
      {}
    );
  }
  function nn() {
    const n = vA() !== void 0 ? vA().split(",") : void 0;
    for (const o of globalThis.altchaPlugins)
      (!n || n.includes(o.pluginName)) && EA.push(new o({
        el: l(j),
        clarify: te,
        dispatch: Ae,
        getConfiguration: Rt,
        getFloatingAnchor: Ft,
        getState: kt,
        log: G,
        reset: ge,
        solve: mt,
        setState: bA,
        setFloatingAnchor: pt,
        verify: cA
      }));
  }
  function G(...n) {
    (a() || n.some((o) => o instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${Y()}]`, ...n);
  }
  function In() {
    [w.UNVERIFIED, w.ERROR, w.EXPIRED].includes(l(N)) ? x() !== !1 && M?.reportValidity() === !1 ? R(FA, !1) : k() ? te() : cA() : R(FA, !0);
  }
  function dt(n) {
    const o = n.target;
    B() && o && !l(j).contains(o) && (l(N) === w.VERIFIED || t() === "off" && l(N) === w.UNVERIFIED) && (l(j).style.display = "none");
  }
  function ht() {
    B() && l(N) !== w.UNVERIFIED && ue();
  }
  function rn(n) {
    for (const o of EA)
      typeof o.onErrorChange == "function" && o.onErrorChange(l(pA));
  }
  function wt(n) {
    l(N) === w.UNVERIFIED && cA();
  }
  function yt(n) {
    M && t() === "onsubmit" ? l(N) === w.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), cA().then(() => {
      M?.requestSubmit();
    })) : l(N) !== w.VERIFIED && (n.preventDefault(), n.stopPropagation(), l(N) === w.VERIFYING && _t()) : M && B() && t() === "off" && l(N) === w.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), l(j).style.display = "block", ue());
  }
  function vt() {
    ge();
  }
  function _t() {
    l(N) === w.VERIFYING && l(AA).waitAlert && alert(l(AA).waitAlert);
  }
  function on(n) {
    for (const o of EA)
      typeof o.onStateChange == "function" && o.onStateChange(l(N));
    B() && l(N) !== w.UNVERIFIED && requestAnimationFrame(() => {
      ue();
    }), R(FA, l(N) === w.VERIFIED);
  }
  function bt() {
    B() && ue();
  }
  function Dt(n) {
    return JSON.parse(n);
  }
  function ue(n = 20) {
    if (l(j))
      if (kA || (kA = (E() ? document.querySelector(E()) : M?.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || M), kA) {
        const o = parseInt(c(), 10) || 12, Q = kA.getBoundingClientRect(), y = l(j).getBoundingClientRect(), S = document.documentElement.clientHeight, _ = document.documentElement.clientWidth, u = B() === "auto" ? Q.bottom + y.height + o + n > S : B() === "top", h = Math.max(n, Math.min(_ - n - y.width, Q.left + Q.width / 2 - y.width / 2));
        if (u ? l(j).style.top = `${Q.top - (y.height + o)}px` : l(j).style.top = `${Q.bottom + o}px`, l(j).style.left = `${h}px`, l(j).setAttribute("data-floating", u ? "top" : "bottom"), l(ee)) {
          const aA = l(ee).getBoundingClientRect();
          l(ee).style.left = Q.left - h + Q.width / 2 - aA.width / 2 + "px";
        }
      } else
        G("unable to find floating anchor element");
  }
  async function Cn(n) {
    if (!$())
      throw new Error("Attribute verifyurl not set.");
    G("requesting server verification from", $());
    const o = { payload: n };
    if (x() !== !1) {
      const {
        blockedCountries: S,
        classifier: _,
        disableRules: u,
        email: h,
        expectedLanguages: aA,
        expectedCountries: We,
        fields: ie,
        ipAddress: Ie,
        text: yn,
        timeZone: Zt
      } = tn();
      o.blockedCountries = S, o.classifier = _, o.disableRules = u, o.email = h === !1 ? void 0 : en(h), o.expectedCountries = We, o.expectedLanguages = aA || (ct ? [ct] : void 0), o.fields = ie === !1 ? void 0 : gn(ie), o.ipAddress = Ie === !1 ? void 0 : Ie || "auto", o.text = yn, o.timeZone = Zt === !1 ? void 0 : Zt || Hi();
    }
    const Q = await fetch($(), {
      body: JSON.stringify(o),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (Q.status !== 200)
      throw new Error(`Server responded with ${Q.status}.`);
    const y = await Q.json();
    if (y?.payload && R(_A, tA(y.payload)), Ae("serververification", y), g() && y.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function Xe(n) {
    G("expire", n), IA && (clearTimeout(IA), IA = null), n < 1 ? ut() : IA = setTimeout(ut, n);
  }
  function Nt(n) {
    G("floating", n), B() !== n && (l(j).style.left = "", l(j).style.top = ""), B(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : B()), B() ? (t() || t("onsubmit"), document.addEventListener("scroll", ht), document.addEventListener("click", dt), window.addEventListener("resize", bt)) : t() === "onsubmit" && t(void 0);
  }
  function Gt(n) {
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
  async function mt(n) {
    let o = null;
    if ("Worker" in window) {
      try {
        o = await Bn(n, n.maxnumber);
      } catch (Q) {
        G(Q);
      }
      if (o?.number !== void 0 || "obfuscated" in n)
        return { data: n, solution: o };
    }
    if ("obfuscated" in n) {
      const Q = await Vi(n.obfuscated, n.key, n.maxnumber);
      return { data: n, solution: await Q.promise };
    }
    return {
      data: n,
      solution: await ji(n.challenge, n.salt, n.algorithm, n.maxnumber || Z()).promise
    };
  }
  async function Bn(n, o = typeof U() == "number" ? U() : Z(), Q = Math.ceil(RA())) {
    const y = [];
    Q = Math.min(16, Math.max(1, Q));
    for (let u = 0; u < Q; u++)
      y.push(altchaCreateWorker($A()));
    const S = Math.ceil(o / Q), _ = await Promise.all(y.map((u, h) => {
      const aA = h * S;
      return new Promise((We) => {
        u.addEventListener("message", (ie) => {
          if (ie.data)
            for (const Ie of y)
              Ie !== u && Ie.postMessage({ type: "abort" });
          We(ie.data);
        }), u.postMessage({
          payload: n,
          max: aA + S,
          start: aA,
          type: "work"
        });
      });
    }));
    for (const u of y)
      u.terminate();
    return _.find((u) => !!u) || null;
  }
  async function te() {
    if (!k()) {
      bA(w.ERROR);
      return;
    }
    const n = EA.find((o) => o.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      bA(w.ERROR), G("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function Yt(n) {
    n.obfuscated !== void 0 && k(n.obfuscated), n.auto !== void 0 && (t(n.auto), t() === "onload" && (k() ? te() : cA())), n.blockspam !== void 0 && g(!!n.blockspam), n.customfetch !== void 0 && r(n.customfetch), n.floatinganchor !== void 0 && E(n.floatinganchor), n.delay !== void 0 && C(n.delay), n.floatingoffset !== void 0 && c(n.floatingoffset), n.floating !== void 0 && Nt(n.floating), n.expire !== void 0 && (Xe(n.expire), s(n.expire)), n.challenge && (I(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), Gt(l(Ke))), n.challengeurl !== void 0 && i(n.challengeurl), n.debug !== void 0 && a(!!n.debug), n.hidefooter !== void 0 && f(!!n.hidefooter), n.hidelogo !== void 0 && D(!!n.hidelogo), n.maxnumber !== void 0 && Z(+n.maxnumber), n.mockerror !== void 0 && O(!!n.mockerror), n.name !== void 0 && Y(n.name), n.refetchonexpire !== void 0 && sA(!!n.refetchonexpire), n.spamfilter !== void 0 && x(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && J(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && U(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && $(n.verifyurl), n.workers !== void 0 && RA(+n.workers), n.workerurl !== void 0 && $A(n.workerurl);
  }
  function Rt() {
    return {
      auto: t(),
      blockspam: g(),
      challengeurl: i(),
      debug: a(),
      delay: C(),
      expire: s(),
      floating: B(),
      floatinganchor: E(),
      floatingoffset: c(),
      hidefooter: f(),
      hidelogo: D(),
      name: Y(),
      maxnumber: Z(),
      mockerror: O(),
      obfuscated: k(),
      refetchonexpire: sA(),
      spamfilter: x(),
      strings: l(AA),
      test: U(),
      verifyurl: $(),
      workers: RA(),
      workerurl: $A()
    };
  }
  function Ft() {
    return kA;
  }
  function sn(n) {
    return EA.find((o) => o.constructor.pluginName === n);
  }
  function kt() {
    return l(N);
  }
  function ge(n = w.UNVERIFIED, o = null) {
    IA && (clearTimeout(IA), IA = null), R(FA, !1), R(_A, null), bA(n, o);
  }
  function pt(n) {
    kA = n;
  }
  function bA(n, o = null) {
    R(N, tA(n)), R(pA, tA(o)), Ae("statechange", {
      payload: l(_A),
      state: l(N)
    });
  }
  async function cA() {
    ge(w.VERIFYING), await new Promise((o) => setTimeout(o, C() || 0));
    const n = new xI();
    return An().then((o) => (Gt(o), G("challenge", o), mt(o))).then(({ data: o, solution: Q }) => {
      if (G("solution", Q), "challenge" in o && Q && !("clearText" in Q))
        if (Q?.number !== void 0) {
          if ($())
            return Cn(ft(o, Q));
          R(_A, tA(ft(o, Q))), G("payload", l(_A));
        } else
          throw G("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      if (n.endDetection() === !0)
        throw new Error("Detected bot.");
      bA(w.VERIFIED), G("verified"), ui().then(() => {
        Ae("verified", { payload: l(_A) });
      });
    }).catch((o) => {
      G(o), bA(w.ERROR, o.message);
    });
  }
  var Lt = OI(), Mt = Te(Lt);
  mi(Mt, e, "default", {});
  var ne = lA(Mt, 2), je = q(ne), St = q(je);
  {
    var an = (n) => {
      var o = KI();
      z(n, o);
    };
    QA(St, (n) => {
      l(N) === w.VERIFYING && n(an);
    });
  }
  var de = lA(St, 2), LA = q(de);
  qt(LA), LA.__change = In, V(de);
  var He = lA(de, 2), ln = q(He);
  {
    var En = (n) => {
      var o = XI(), Q = Te(o), y = q(Q);
      UA(y, () => l(AA).verified), V(Q);
      var S = lA(Q, 2);
      qt(S), SA(() => {
        eA(S, "name", Y()), Ri(S, l(_A));
      }), z(n, o);
    }, cn = (n) => {
      var o = _i(), Q = Te(o);
      {
        var y = (_) => {
          var u = jI(), h = q(u);
          UA(h, () => l(AA).verifying), V(u), z(_, u);
        }, S = (_) => {
          var u = HI(), h = q(u);
          UA(h, () => l(AA).label), V(u), SA(() => eA(u, "for", `${Y() ?? ""}_checkbox`)), z(_, u);
        };
        QA(
          Q,
          (_) => {
            l(N) === w.VERIFYING ? _(y) : _(S, !1);
          },
          !0
        );
      }
      z(n, o);
    };
    QA(ln, (n) => {
      l(N) === w.VERIFIED ? n(En) : n(cn, !1);
    });
  }
  V(He);
  var Qn = lA(He, 2);
  {
    var fn = (n) => {
      var o = WI(), Q = q(o);
      eA(Q, "href", Et), V(o), SA(() => eA(Q, "aria-label", l(AA).ariaLinkLabel)), z(n, o);
    };
    QA(Qn, (n) => {
      (D() !== !0 || l(xe)) && n(fn);
    });
  }
  V(je);
  var Jt = lA(je, 2);
  {
    var un = (n) => {
      var o = qI(), Q = lA(q(o), 2);
      {
        var y = (_) => {
          var u = TI(), h = q(u);
          UA(h, () => l(AA).expired), V(u), SA(() => eA(u, "title", l(pA))), z(_, u);
        }, S = (_) => {
          var u = VI(), h = q(u);
          UA(h, () => l(AA).error), V(u), SA(() => eA(u, "title", l(pA))), z(_, u);
        };
        QA(Q, (_) => {
          l(N) === w.EXPIRED ? _(y) : _(S, !1);
        });
      }
      V(o), z(n, o);
    };
    QA(Jt, (n) => {
      (l(pA) || l(N) === w.EXPIRED) && n(un);
    });
  }
  var Ut = lA(Jt, 2);
  {
    var dn = (n) => {
      var o = zI(), Q = q(o), y = q(Q);
      UA(y, () => l(AA).footer), V(Q), V(o), z(n, o);
    };
    QA(Ut, (n) => {
      l(AA).footer && (f() !== !0 || l(xe)) && n(dn);
    });
  }
  var hn = lA(Ut, 2);
  {
    var wn = (n) => {
      var o = PI();
      Ot(o, (Q) => R(ee, Q), () => l(ee)), z(n, o);
    };
    QA(hn, (n) => {
      B() && n(wn);
    });
  }
  return V(ne), Ot(ne, (n) => R(j, n), () => l(j)), SA(() => {
    eA(ne, "data-state", l(N)), eA(ne, "data-floating", B()), ki(de, "altcha-hidden", l(N) === w.VERIFYING), eA(LA, "id", `${Y() ?? ""}_checkbox`), LA.required = t() !== "onsubmit" && (!B() || t() !== "off");
  }), yi("invalid", LA, _t), pi(LA, () => l(FA), (n) => R(FA, n)), z(A, Lt), Ug({
    clarify: te,
    configure: Yt,
    getConfiguration: Rt,
    getFloatingAnchor: Ft,
    getPlugin: sn,
    getState: kt,
    reset: ge,
    setFloatingAnchor: pt,
    setState: bA,
    verify: cA,
    get auto() {
      return t();
    },
    set auto(n = void 0) {
      t(n), v();
    },
    get blockspam() {
      return g();
    },
    set blockspam(n = void 0) {
      g(n), v();
    },
    get challengeurl() {
      return i();
    },
    set challengeurl(n = void 0) {
      i(n), v();
    },
    get challengejson() {
      return I();
    },
    set challengejson(n = void 0) {
      I(n), v();
    },
    get customfetch() {
      return r();
    },
    set customfetch(n = void 0) {
      r(n), v();
    },
    get debug() {
      return a();
    },
    set debug(n = !1) {
      a(n), v();
    },
    get delay() {
      return C();
    },
    set delay(n = 0) {
      C(n), v();
    },
    get expire() {
      return s();
    },
    set expire(n = void 0) {
      s(n), v();
    },
    get floating() {
      return B();
    },
    set floating(n = void 0) {
      B(n), v();
    },
    get floatinganchor() {
      return E();
    },
    set floatinganchor(n = void 0) {
      E(n), v();
    },
    get floatingoffset() {
      return c();
    },
    set floatingoffset(n = void 0) {
      c(n), v();
    },
    get hidefooter() {
      return f();
    },
    set hidefooter(n = !1) {
      f(n), v();
    },
    get hidelogo() {
      return D();
    },
    set hidelogo(n = !1) {
      D(n), v();
    },
    get name() {
      return Y();
    },
    set name(n = "altcha") {
      Y(n), v();
    },
    get maxnumber() {
      return Z();
    },
    set maxnumber(n = 1e6) {
      Z(n), v();
    },
    get mockerror() {
      return O();
    },
    set mockerror(n = !1) {
      O(n), v();
    },
    get obfuscated() {
      return k();
    },
    set obfuscated(n = void 0) {
      k(n), v();
    },
    get plugins() {
      return vA();
    },
    set plugins(n = void 0) {
      vA(n), v();
    },
    get refetchonexpire() {
      return sA();
    },
    set refetchonexpire(n = !0) {
      sA(n), v();
    },
    get spamfilter() {
      return x();
    },
    set spamfilter(n = !1) {
      x(n), v();
    },
    get strings() {
      return J();
    },
    set strings(n = void 0) {
      J(n), v();
    },
    get test() {
      return U();
    },
    set test(n = !1) {
      U(n), v();
    },
    get verifyurl() {
      return $();
    },
    set verifyurl(n = void 0) {
      $(n), v();
    },
    get workers() {
      return RA();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      RA(n), v();
    },
    get workerurl() {
      return $A();
    },
    set workerurl(n = void 0) {
      $A(n), v();
    }
  });
}
vi(["change"]);
customElements.define("altcha-widget", xi(
  Ar,
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
globalThis.altchaCreateWorker = (A) => A ? new Worker(new URL(A)) : new _n();
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
export {
  Ar as Altcha
};
