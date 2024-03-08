var altcha=function(j){"use strict";var Tt=Object.defineProperty;var Mt=(j,L,H)=>L in j?Tt(j,L,{enumerable:!0,configurable:!0,writable:!0,value:H}):j[L]=H;var T=(j,L,H)=>(Mt(j,typeof L!="symbol"?L+"":L,H),H);function L(){}function H(t){return t()}function ae(){return Object.create(null)}function X(t){t.forEach(H)}function fe(t){return typeof t=="function"}function Ge(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function je(t){return Object.keys(t).length===0}function v(t,e){t.appendChild(e)}function Ve(t,e,r){const n=Ze(t);if(!n.getElementById(e)){const o=_("style");o.id=e,o.textContent=r,He(n,o)}}function Ze(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function He(t,e){return v(t.head||t,e),e.sheet}function I(t,e,r){t.insertBefore(e,r||null)}function R(t){t.parentNode&&t.parentNode.removeChild(t)}function _(t){return document.createElement(t)}function V(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Pe(t){return document.createTextNode(t)}function P(){return Pe(" ")}function te(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function c(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function Fe(t){return Array.from(t.childNodes)}function he(t,e,r){t.classList.toggle(e,!!r)}function Oe(t,e,{bubbles:r=!1,cancelable:n=!1}={}){return new CustomEvent(t,{detail:e,bubbles:r,cancelable:n})}function We(t){const e={};return t.childNodes.forEach(r=>{e[r.slot||"default"]=!0}),e}let K;function J(t){K=t}function re(){if(!K)throw new Error("Function called outside component initialization");return K}function De(t){re().$$.on_mount.push(t)}function Ye(t){re().$$.on_destroy.push(t)}function Be(){const t=re();return(e,r,{cancelable:n=!1}={})=>{const o=t.$$.callbacks[e];if(o){const l=Oe(e,r,{cancelable:n});return o.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}const O=[],ne=[];let W=[];const de=[],ge=Promise.resolve();let ie=!1;function be(){ie||(ie=!0,ge.then(x))}function Ue(){return be(),ge}function oe(t){W.push(t)}const le=new Set;let D=0;function x(){if(D!==0)return;const t=K;do{try{for(;D<O.length;){const e=O[D];D++,J(e),Xe(e.$$)}}catch(e){throw O.length=0,D=0,e}for(J(null),O.length=0,D=0;ne.length;)ne.pop()();for(let e=0;e<W.length;e+=1){const r=W[e];le.has(r)||(le.add(r),r())}W.length=0}while(O.length);for(;de.length;)de.pop()();ie=!1,le.clear(),J(t)}function Xe(t){if(t.fragment!==null){t.update(),X(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(oe)}}function Ke(t){const e=[],r=[];W.forEach(n=>t.indexOf(n)===-1?e.push(n):r.push(n)),r.forEach(n=>n()),W=e}const Je=new Set;function ze(t,e){t&&t.i&&(Je.delete(t),t.i(e))}function Qe(t,e,r){const{fragment:n,after_update:o}=t.$$;n&&n.m(e,r),oe(()=>{const l=t.$$.on_mount.map(H).filter(fe);t.$$.on_destroy?t.$$.on_destroy.push(...l):X(l),t.$$.on_mount=[]}),o.forEach(oe)}function qe(t,e){const r=t.$$;r.fragment!==null&&(Ke(r.after_update),X(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function et(t,e){t.$$.dirty[0]===-1&&(O.push(t),be(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(t,e,r,n,o,l,s=null,u=[-1]){const f=K;J(t);const a=t.$$={fragment:null,ctx:[],props:l,update:L,not_equal:o,bound:ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:ae(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};s&&s(a.root);let k=!1;if(a.ctx=r?r(t,e.props||{},(w,N,...A)=>{const M=A.length?A[0]:N;return a.ctx&&o(a.ctx[w],a.ctx[w]=M)&&(!a.skip_bound&&a.bound[w]&&a.bound[w](M),k&&et(t,w)),N}):[],a.update(),k=!0,X(a.before_update),a.fragment=n?n(a.ctx):!1,e.target){if(e.hydrate){const w=Fe(e.target);a.fragment&&a.fragment.l(w),w.forEach(R)}else a.fragment&&a.fragment.c();e.intro&&ze(t.$$.fragment),Qe(t,e.target,e.anchor),x()}J(f)}let me;typeof HTMLElement=="function"&&(me=class extends HTMLElement{constructor(e,r,n){super();T(this,"$$ctor");T(this,"$$s");T(this,"$$c");T(this,"$$cn",!1);T(this,"$$d",{});T(this,"$$r",!1);T(this,"$$p_d",{});T(this,"$$l",{});T(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=r,n&&this.attachShadow({mode:"open"})}addEventListener(e,r,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(r),this.$$c){const o=this.$$c.$on(e,r);this.$$l_u.set(r,o)}super.addEventListener(e,r,n)}removeEventListener(e,r,n){if(super.removeEventListener(e,r,n),this.$$c){const o=this.$$l_u.get(r);o&&(o(),this.$$l_u.delete(r))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(l){return()=>{let s;return{c:function(){s=_("slot"),l!=="default"&&c(s,"name",l)},m:function(a,k){I(a,s,k)},d:function(a){a&&R(s)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const r={},n=We(this);for(const l of this.$$s)l in n&&(r[l]=[e(l)]);for(const l of this.attributes){const s=this.$$g_p(l.name);s in this.$$d||(this.$$d[s]=z(s,l.value,this.$$p_d,"toProp"))}for(const l in this.$$p_d)!(l in this.$$d)&&this[l]!==void 0&&(this.$$d[l]=this[l],delete this[l]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:r,$$scope:{ctx:[]}}});const o=()=>{this.$$r=!0;for(const l in this.$$p_d)if(this.$$d[l]=this.$$c.$$.ctx[this.$$c.$$.props[l]],this.$$p_d[l].reflect){const s=z(l,this.$$d[l],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[l].attribute||l):this.setAttribute(this.$$p_d[l].attribute||l,s)}this.$$r=!1};this.$$c.$$.after_update.push(o),o();for(const l in this.$$l)for(const s of this.$$l[l]){const u=this.$$c.$on(l,s);this.$$l_u.set(s,u)}this.$$l={}}}attributeChangedCallback(e,r,n){var o;this.$$r||(e=this.$$g_p(e),this.$$d[e]=z(e,n,this.$$p_d,"toProp"),(o=this.$$c)==null||o.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(r=>this.$$p_d[r].attribute===e||!this.$$p_d[r].attribute&&r.toLowerCase()===e)||e}});function z(t,e,r,n){var l;const o=(l=r[t])==null?void 0:l.type;if(e=o==="Boolean"&&typeof e!="boolean"?e!=null:e,!n||!r[t])return e;if(n==="toAttribute")switch(o){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(o){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function rt(t,e,r,n,o,l){let s=class extends me{constructor(){super(t,r,o),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(u=>(e[u].attribute||u).toLowerCase())}};return Object.keys(e).forEach(u=>{Object.defineProperty(s.prototype,u,{get(){return this.$$c&&u in this.$$c?this.$$c[u]:this.$$d[u]},set(f){var a;f=z(u,f,e),this.$$d[u]=f,(a=this.$$c)==null||a.$set({[u]:f})}})}),n.forEach(u=>{Object.defineProperty(s.prototype,u,{get(){var f;return(f=this.$$c)==null?void 0:f[u]}})}),l&&(s=l(s)),t.element=s,s}class nt{constructor(){T(this,"$$");T(this,"$$set")}$destroy(){qe(this,1),this.$destroy=L}$on(e,r){if(!fe(r))return L;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(r),()=>{const o=n.indexOf(r);o!==-1&&n.splice(o,1)}}$set(e){this.$$set&&!je(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const it="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(it);const ve="KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGY9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGcodCl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KHQpXS5tYXAoZT0+ZS50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBoKHQsZSxvKXtyZXR1cm4gZyhhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChvLnRvVXBwZXJDYXNlKCksZi5lbmNvZGUodCtlKSkpfWZ1bmN0aW9uIG0odCxlLG89IlNIQS0yNTYiLGk9MWU2LHA9MCl7Y29uc3QgYT1uZXcgQWJvcnRDb250cm9sbGVyO3JldHVybntwcm9taXNlOm5ldyBQcm9taXNlKChzLGMpPT57Y29uc3Qgcj1EYXRlLm5vdygpLGQ9bD0+e2Euc2lnbmFsLmFib3J0ZWR8fGw+aT9zKG51bGwpOmgoZSxsLG8pLnRoZW4odz0+e3c9PT10P3Moe251bWJlcjpsLHRvb2s6RGF0ZS5ub3coKS1yfSk6ZChsKzEpfSkuY2F0Y2goYyl9O2QocCl9KSxjb250cm9sbGVyOmF9fWxldCBuO29ubWVzc2FnZT1hc3luYyB0PT57Y29uc3R7dHlwZTplLHBheWxvYWQ6b309dC5kYXRhO2lmKGU9PT0iYWJvcnQiKW49PW51bGx8fG4uYWJvcnQoKSxuPXZvaWQgMDtlbHNlIGlmKGU9PT0id29yayIpe2NvbnN0e2FsZzppLGNoYWxsZW5nZTpwLG1heDphLHNhbHQ6dSxzdGFydDpzfT1vfHx7fSxjPW0ocCx1LGksYSxzKTtuPWMuY29udHJvbGxlcixjLnByb21pc2UudGhlbihyPT57c2VsZi5wb3N0TWVzc2FnZShyJiZ7Li4ucix3b3JrZXI6ITB9KX0pfX19KSgpOwo=",ot=t=>Uint8Array.from(atob(t),e=>e.charCodeAt(0)),we=typeof window<"u"&&window.Blob&&new Blob([ot(ve)],{type:"text/javascript;charset=utf-8"});function lt(t){let e;try{if(e=we&&(window.URL||window.webkitURL).createObjectURL(we),!e)throw"";const r=new Worker(e,{name:t==null?void 0:t.name});return r.addEventListener("error",()=>{(window.URL||window.webkitURL).revokeObjectURL(e)}),r}catch{return new Worker("data:text/javascript;base64,"+ve,{name:t==null?void 0:t.name})}finally{e&&(window.URL||window.webkitURL).revokeObjectURL(e)}}const st=new TextEncoder;function ct(t){return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,"0")).join("")}async function ut(t,e="SHA-256",r=1e5){const n=Date.now().toString(16);t||(t=Math.round(Math.random()*r));const o=await _e(n,t,e);return{algorithm:e,challenge:o,salt:n,signature:""}}async function _e(t,e,r){return ct(await crypto.subtle.digest(r.toUpperCase(),st.encode(t+e)))}function at(t,e,r="SHA-256",n=1e6,o=0){const l=new AbortController;return{promise:new Promise((u,f)=>{const a=Date.now(),k=w=>{l.signal.aborted||w>n?u(null):_e(e,w,r).then(N=>{N===t?u({number:w,took:Date.now()-a}):k(w+1)}).catch(f)};k(o)}),controller:l}}var b=(t=>(t.ERROR="error",t.VERIFIED="verified",t.VERIFYING="verifying",t.UNVERIFIED="unverified",t.EXPIRED="expired",t))(b||{});function ft(t){Ve(t,"svelte-vuofbg",".altcha.svelte-vuofbg.svelte-vuofbg{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);overflow:hidden;position:relative;text-align:left}.altcha.svelte-vuofbg.svelte-vuofbg:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha-main.svelte-vuofbg.svelte-vuofbg{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-vuofbg.svelte-vuofbg{flex-grow:1}.altcha-label.svelte-vuofbg label.svelte-vuofbg{cursor:pointer}.altcha-logo.svelte-vuofbg.svelte-vuofbg{color:currentColor;opacity:0.3}.altcha-logo.svelte-vuofbg.svelte-vuofbg:hover{opacity:1}.altcha-error.svelte-vuofbg.svelte-vuofbg{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-vuofbg.svelte-vuofbg{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-vuofbg.svelte-vuofbg:hover{opacity:1}.altcha-footer.svelte-vuofbg>.svelte-vuofbg:first-child{flex-grow:1}.altcha-footer.svelte-vuofbg a{color:currentColor}.altcha-checkbox.svelte-vuofbg.svelte-vuofbg{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-vuofbg input.svelte-vuofbg{width:18px;height:18px;margin:0}.altcha-hidden.svelte-vuofbg.svelte-vuofbg{display:none}.altcha-spinner.svelte-vuofbg.svelte-vuofbg{animation:svelte-vuofbg-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-vuofbg-altcha-spinner{100%{transform:rotate(360deg)}}")}function pe(t){let e,r,n;return{c(){e=V("svg"),r=V("path"),n=V("path"),c(r,"d","M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"),c(r,"fill","currentColor"),c(r,"opacity",".25"),c(n,"d","M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"),c(n,"fill","currentColor"),c(n,"class","altcha-spinner svelte-vuofbg"),c(e,"width","24"),c(e,"height","24"),c(e,"viewBox","0 0 24 24"),c(e,"xmlns","http://www.w3.org/2000/svg")},m(o,l){I(o,e,l),v(e,r),v(e,n)},d(o){o&&R(e)}}}function ht(t){let e,r=t[9].label+"",n;return{c(){e=_("label"),c(e,"for",n=t[3]+"_checkbox"),c(e,"class","svelte-vuofbg")},m(o,l){I(o,e,l),e.innerHTML=r},p(o,l){l[0]&512&&r!==(r=o[9].label+"")&&(e.innerHTML=r),l[0]&8&&n!==(n=o[3]+"_checkbox")&&c(e,"for",n)},d(o){o&&R(e)}}}function dt(t){let e,r=t[9].verifying+"";return{c(){e=_("span")},m(n,o){I(n,e,o),e.innerHTML=r},p(n,o){o[0]&512&&r!==(r=n[9].verifying+"")&&(e.innerHTML=r)},d(n){n&&R(e)}}}function gt(t){let e,r=t[9].verified+"",n,o;return{c(){e=_("span"),n=P(),o=_("input"),c(o,"type","hidden"),c(o,"name",t[3]),o.value=t[4]},m(l,s){I(l,e,s),e.innerHTML=r,I(l,n,s),I(l,o,s)},p(l,s){s[0]&512&&r!==(r=l[9].verified+"")&&(e.innerHTML=r),s[0]&8&&c(o,"name",l[3]),s[0]&16&&(o.value=l[4])},d(l){l&&(R(e),R(n),R(o))}}}function ye(t){let e,r,n,o,l,s;return{c(){e=_("div"),r=_("a"),n=V("svg"),o=V("path"),l=V("path"),s=V("path"),c(o,"d","M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"),c(o,"fill","currentColor"),c(l,"d","M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"),c(l,"fill","currentColor"),c(s,"d","M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"),c(s,"fill","currentColor"),c(n,"width","22"),c(n,"height","22"),c(n,"viewBox","0 0 20 20"),c(n,"fill","none"),c(n,"xmlns","http://www.w3.org/2000/svg"),c(r,"href",Ee),c(r,"target","_blank"),c(r,"class","altcha-logo svelte-vuofbg")},m(u,f){I(u,e,f),v(e,r),v(r,n),v(n,o),v(n,l),v(n,s)},p:L,d(u){u&&R(e)}}}function $e(t){let e,r,n,o;function l(f,a){return f[5]===b.EXPIRED?mt:bt}let s=l(t),u=s(t);return{c(){e=_("div"),r=V("svg"),n=V("path"),o=P(),u.c(),c(n,"stroke-linecap","round"),c(n,"stroke-linejoin","round"),c(n,"d","M6 18L18 6M6 6l12 12"),c(r,"width","14"),c(r,"height","14"),c(r,"xmlns","http://www.w3.org/2000/svg"),c(r,"fill","none"),c(r,"viewBox","0 0 24 24"),c(r,"stroke-width","1.5"),c(r,"stroke","currentColor"),c(e,"class","altcha-error svelte-vuofbg")},m(f,a){I(f,e,a),v(e,r),v(r,n),v(e,o),u.m(e,null)},p(f,a){s===(s=l(f))&&u?u.p(f,a):(u.d(1),u=s(f),u&&(u.c(),u.m(e,null)))},d(f){f&&R(e),u.d()}}}function bt(t){let e,r=t[9].error+"";return{c(){e=_("div"),c(e,"title",t[8])},m(n,o){I(n,e,o),e.innerHTML=r},p(n,o){o[0]&512&&r!==(r=n[9].error+"")&&(e.innerHTML=r),o[0]&256&&c(e,"title",n[8])},d(n){n&&R(e)}}}function mt(t){let e,r=t[9].expired+"";return{c(){e=_("div"),c(e,"title",t[8])},m(n,o){I(n,e,o),e.innerHTML=r},p(n,o){o[0]&512&&r!==(r=n[9].expired+"")&&(e.innerHTML=r),o[0]&256&&c(e,"title",n[8])},d(n){n&&R(e)}}}function ke(t){let e,r,n=t[9].footer+"";return{c(){e=_("div"),r=_("div"),c(r,"class","svelte-vuofbg"),c(e,"class","altcha-footer svelte-vuofbg")},m(o,l){I(o,e,l),v(e,r),r.innerHTML=n},p(o,l){l[0]&512&&n!==(n=o[9].footer+"")&&(r.innerHTML=n)},d(o){o&&R(e)}}}function vt(t){let e,r,n,o,l,s,u,f,a,k,w,N,A,M,p=t[5]===b.VERIFYING&&pe();function F(h,d){return h[5]===b.VERIFIED?gt:h[5]===b.VERIFYING?dt:ht}let S=F(t),E=S(t),y=t[2]!==!0&&ye(),$=(t[8]||t[5]===b.EXPIRED)&&$e(t),m=t[9].footer&&t[1]!==!0&&ke(t);return{c(){e=_("div"),r=_("div"),p&&p.c(),n=P(),o=_("div"),l=_("input"),f=P(),a=_("div"),E.c(),k=P(),y&&y.c(),w=P(),$&&$.c(),N=P(),m&&m.c(),c(l,"type","checkbox"),c(l,"id",s=t[3]+"_checkbox"),l.required=u=t[0]!=="onsubmit",c(l,"class","svelte-vuofbg"),c(o,"class","altcha-checkbox svelte-vuofbg"),he(o,"altcha-hidden",t[5]===b.VERIFYING),c(a,"class","altcha-label svelte-vuofbg"),c(r,"class","altcha-main svelte-vuofbg"),c(e,"class","altcha svelte-vuofbg"),c(e,"data-state",t[5])},m(h,d){I(h,e,d),v(e,r),p&&p.m(r,null),v(r,n),v(r,o),v(o,l),l.checked=t[6],v(r,f),v(r,a),E.m(a,null),v(r,k),y&&y.m(r,null),v(e,w),$&&$.m(e,null),v(e,N),m&&m.m(e,null),t[26](e),A||(M=[te(l,"change",t[25]),te(l,"change",t[10]),te(l,"invalid",t[11])],A=!0)},p(h,d){h[5]===b.VERIFYING?p||(p=pe(),p.c(),p.m(r,n)):p&&(p.d(1),p=null),d[0]&8&&s!==(s=h[3]+"_checkbox")&&c(l,"id",s),d[0]&1&&u!==(u=h[0]!=="onsubmit")&&(l.required=u),d[0]&64&&(l.checked=h[6]),d[0]&32&&he(o,"altcha-hidden",h[5]===b.VERIFYING),S===(S=F(h))&&E?E.p(h,d):(E.d(1),E=S(h),E&&(E.c(),E.m(a,null))),h[2]!==!0?y?y.p(h,d):(y=ye(),y.c(),y.m(r,null)):y&&(y.d(1),y=null),h[8]||h[5]===b.EXPIRED?$?$.p(h,d):($=$e(h),$.c(),$.m(e,N)):$&&($.d(1),$=null),h[9].footer&&h[1]!==!0?m?m.p(h,d):(m=ke(h),m.c(),m.m(e,null)):m&&(m.d(1),m=null),d[0]&32&&c(e,"data-state",h[5])},i:L,o:L,d(h){h&&R(e),p&&p.d(),E.d(),y&&y.d(),$&&$.d(),m&&m.d(),t[26](null),A=!1,X(M)}}}const Ee="https://altcha.org/";function xe(t){return JSON.parse(t)}function wt(t,e,r){let n,o,l,{auto:s=void 0}=e,{challengeurl:u=void 0}=e,{challengejson:f=void 0}=e,{debug:a=!1}=e,{expire:k=void 0}=e,{hidefooter:w=!1}=e,{hidelogo:N=!1}=e,{name:A="altcha"}=e,{maxnumber:M=1e6}=e,{mockerror:p=!1}=e,{strings:F=void 0}=e,{test:S=!1}=e,{workers:E=navigator.hardwareConcurrency||8}=e;const y=Be(),$=["SHA-256","SHA-384","SHA-512"];let m=!1,h,d=null,se=null,Y=null,Z=b.UNVERIFIED,ce;Ye(()=>{d&&(d.removeEventListener("submit",Le),d.removeEventListener("reset",Re),d=null)}),De(()=>{C("mounted","0.2.1"),C("workers",E),S&&C("using test mode"),k&&ue(k),s!==void 0&&C("auto",s),d=h.closest("form"),d&&(d.addEventListener("submit",Le),d.addEventListener("reset",Re)),s==="onload"&&B()});function C(...i){(a||i.some(g=>g instanceof Error))&&console[i[0]instanceof Error?"error":"log"]("ALTCHA",...i)}function Le(i){d&&s==="onsubmit"&&Z===b.UNVERIFIED&&(i.preventDefault(),i.stopPropagation(),B().then(()=>{d==null||d.requestSubmit()}))}function Re(){Q()}function _t(i,g){return btoa(JSON.stringify({algorithm:i.algorithm,challenge:i.challenge,number:g.number,salt:i.salt,signature:i.signature,test:S?!0:void 0,took:g.took}))}function Ie(i){if(!i.algorithm)throw new Error("Invalid challenge. Property algorithm is missing.");if(i.signature===void 0)throw new Error("Invalid challenge. Property signature is missing.");if(!$.includes(i.algorithm.toUpperCase()))throw new Error(`Unknown algorithm value. Allowed values: ${$.join(", ")}`);if(!i.challenge||i.challenge.length<40)throw new Error("Challenge is too short. Min. 40 chars.");if(!i.salt||i.salt.length<10)throw new Error("Salt is too short. Min. 10 chars.")}async function pt(){if(p)throw C("mocking error"),new Error("Mocked error.");if(n)return C("using provided json data"),n;if(S)return C("generating test challenge"),ut();{if(!u)throw new Error("Attribute challengeurl not set.");C("fetching challenge from",u);const i=await fetch(u);if(i.status!==200)throw new Error(`Server responded with ${i.status}.`);const g=i.headers.get("Expires");if(g!=null&&g.length){const U=Date.parse(g);isNaN(U)||ue(U-Date.now())}return i.json()}}function Ne(){u&&Z===b.VERIFIED?B():Q(b.EXPIRED,l.expired)}async function yt(i){let g=null;if("Worker"in window){try{g=await $t(i.challenge,i.salt,i.algorithm)}catch(U){C(U)}if((g==null?void 0:g.number)!==void 0)return{data:i,solution:g}}return{data:i,solution:await at(i.challenge,i.salt,i.algorithm,M).promise}}async function $t(i,g,U,q=Math.ceil(E)){const ee=[];if(q<1)throw new Error("Wrong number of workers configured.");if(q>16)throw new Error("Too many workers. Max. 16 allowed workers.");for(let G=0;G<q;G++)ee.push(new lt);const Te=Math.ceil(M/q),Rt=await Promise.all(ee.map((G,It)=>{const Me=It*Te;return new Promise(Nt=>{G.addEventListener("message",Se=>{if(Se.data)for(const Ae of ee)Ae!==G&&Ae.postMessage({type:"abort"});Nt(Se.data)}),G.postMessage({payload:{alg:U,challenge:i,max:Me+Te,salt:g,start:Me},type:"work"})})}));for(const G of ee)G.terminate();return Rt.find(G=>!!G)||null}function kt(){[b.UNVERIFIED,b.ERROR,b.EXPIRED].includes(Z)?B():r(6,m=!0)}function Et(){Z===b.VERIFYING&&alert(l.waitAlert)}function ue(i){console.log(">>>"),C("expire",i),clearTimeout(ce),i<1?Ne():ce=setTimeout(Ne,i)}function xt(i){i.auto!==void 0&&(r(0,s=i.auto),s==="onload"&&B()),i.expire!==void 0&&(ue(i.expire),r(13,k=i.expire)),i.challenge&&(Ie(i.challenge),n=i.challenge),i.debug!==void 0&&r(12,a=!!i.debug),i.hidefooter!==void 0&&r(1,w=!!i.hidefooter),i.hidelogo!==void 0&&r(2,N=!!i.hidelogo),i.maxnumber!==void 0&&r(14,M=+i.maxnumber),i.mockerror!==void 0&&r(15,p=!!i.mockerror),i.name!==void 0&&r(3,A=i.name),i.test!==void 0&&r(16,S=!!i.test),i.strings&&r(24,o=i.strings),i.workers!==void 0&&r(17,E=+i.workers)}function Q(i=b.UNVERIFIED,g=null){clearTimeout(ce),r(6,m=!1),r(8,se=g),r(4,Y=null),r(5,Z=i)}async function B(){return Q(b.VERIFYING),pt().then(i=>(Ie(i),C("challenge",i),yt(i))).then(({data:i,solution:g})=>{if(C("solution",g),(g==null?void 0:g.number)!==void 0)C("verified"),r(5,Z=b.VERIFIED),r(6,m=!0),r(4,Y=_t(i,g)),C("payload",Y),Ue().then(()=>{y("verified",{payload:Y})});else throw new Error("Unexpected result returned.")}).catch(i=>{C(i),r(5,Z=b.ERROR),r(6,m=!1),r(8,se=i.message)})}function Ct(){m=this.checked,r(6,m)}function Lt(i){ne[i?"unshift":"push"](()=>{h=i,r(7,h)})}return t.$$set=i=>{"auto"in i&&r(0,s=i.auto),"challengeurl"in i&&r(18,u=i.challengeurl),"challengejson"in i&&r(19,f=i.challengejson),"debug"in i&&r(12,a=i.debug),"expire"in i&&r(13,k=i.expire),"hidefooter"in i&&r(1,w=i.hidefooter),"hidelogo"in i&&r(2,N=i.hidelogo),"name"in i&&r(3,A=i.name),"maxnumber"in i&&r(14,M=i.maxnumber),"mockerror"in i&&r(15,p=i.mockerror),"strings"in i&&r(20,F=i.strings),"test"in i&&r(16,S=i.test),"workers"in i&&r(17,E=i.workers)},t.$$.update=()=>{t.$$.dirty[0]&524288&&(n=f?xe(f):void 0),t.$$.dirty[0]&1048576&&r(24,o=F?xe(F):{}),t.$$.dirty[0]&16777216&&r(9,l={error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:`Protected by <a href="${Ee}" target="_blank">ALTCHA</a>`,label:"I'm not a robot",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait.",...o}),t.$$.dirty[0]&48&&y("statechange",{payload:Y,state:Z})},[s,w,N,A,Y,Z,m,h,se,l,kt,Et,a,k,M,p,S,E,u,f,F,xt,Q,B,o,Ct,Lt]}class Ce extends nt{constructor(e){super(),tt(this,e,wt,vt,Ge,{auto:0,challengeurl:18,challengejson:19,debug:12,expire:13,hidefooter:1,hidelogo:2,name:3,maxnumber:14,mockerror:15,strings:20,test:16,workers:17,configure:21,reset:22,verify:23},ft,[-1,-1])}get auto(){return this.$$.ctx[0]}set auto(e){this.$$set({auto:e}),x()}get challengeurl(){return this.$$.ctx[18]}set challengeurl(e){this.$$set({challengeurl:e}),x()}get challengejson(){return this.$$.ctx[19]}set challengejson(e){this.$$set({challengejson:e}),x()}get debug(){return this.$$.ctx[12]}set debug(e){this.$$set({debug:e}),x()}get expire(){return this.$$.ctx[13]}set expire(e){this.$$set({expire:e}),x()}get hidefooter(){return this.$$.ctx[1]}set hidefooter(e){this.$$set({hidefooter:e}),x()}get hidelogo(){return this.$$.ctx[2]}set hidelogo(e){this.$$set({hidelogo:e}),x()}get name(){return this.$$.ctx[3]}set name(e){this.$$set({name:e}),x()}get maxnumber(){return this.$$.ctx[14]}set maxnumber(e){this.$$set({maxnumber:e}),x()}get mockerror(){return this.$$.ctx[15]}set mockerror(e){this.$$set({mockerror:e}),x()}get strings(){return this.$$.ctx[20]}set strings(e){this.$$set({strings:e}),x()}get test(){return this.$$.ctx[16]}set test(e){this.$$set({test:e}),x()}get workers(){return this.$$.ctx[17]}set workers(e){this.$$set({workers:e}),x()}get configure(){return this.$$.ctx[21]}get reset(){return this.$$.ctx[22]}get verify(){return this.$$.ctx[23]}}return customElements.define("altcha-widget",rt(Ce,{auto:{},challengeurl:{},challengejson:{},debug:{type:"Boolean"},expire:{},hidefooter:{type:"Boolean"},hidelogo:{type:"Boolean"},name:{},maxnumber:{},mockerror:{type:"Boolean"},strings:{},test:{type:"Boolean"},workers:{}},[],["configure","reset","verify"],!1)),j.Altcha=Ce,Object.defineProperty(j,Symbol.toStringTag,{value:"Module"}),j}({});
