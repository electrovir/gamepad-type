(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Go(e,t){return e.includes(t)}function Pe(e){return!!e}const zo={capitalizeFirstLetter:!1};function xr(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Uo(e,t){return t.capitalizeFirstLetter?xr(e):e}function $r(e,t=zo){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return Uo(r,t)}var ve;(function(e){e.Upper="upper",e.Lower="lower"})(ve||(ve={}));function Wo(e){return e.toLowerCase()!==e.toUpperCase()}function Mn(e,t,n){if(!e&&(n!=null&&n.blockNoCaseCharacters))return!1;for(let r=0;r<e.length;r++){const o=e[r]||"";if(!Wo(o)){if(n!=null&&n.blockNoCaseCharacters)return!1;continue}if(t===ve.Upper&&o!==o.toUpperCase())return!1;if(t===ve.Lower&&o!==o.toLowerCase())return!1}return!0}function jo(e){return e.split("").reduce((n,r,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",u=Mn(a,ve.Lower,{blockNoCaseCharacters:!0})||Mn(s,ve.Lower,{blockNoCaseCharacters:!0});return r===r.toLowerCase()||o===0||!u?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}var _n;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(_n||(_n={}));const Ko=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function D(e,t){return e?Ko.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function Xo(e){return!!(D(e,"then")&&typeof e.then=="function")}function Tr(e){return e?e instanceof Error?e.message:D(e,"message")?String(e.message):String(e):""}function rn(e){return e instanceof Error?e:new Error(Tr(e))}function qo(e,t){const n=rn(e);return n.message=`${t}: ${n.message}`,n}class Yo extends Error{constructor(){super(...arguments),this.name="AssertionError"}}function Ft(e){return Array.isArray(e)?"array":typeof e}function ne(e,t){return Ft(e)===t}function be(e,t,n){if(!(e instanceof t))throw new Yo(n||"instanceof assertion failed")}function K(e){return!!e&&typeof e=="object"}function kn(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}function P(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ye(e){return P(e).map(t=>e[t])}function Zo(e){return Object.fromEntries(e)}function Cn({source:e,whitespace:t,errorHandler:n}){try{return JSON.stringify(e,void 0,t)}catch(r){if(n)return n(r);throw r}}const An="Failed to compare objects using JSON.stringify";function Ln(e,t,n){return Cn({source:e,errorHandler(r){if(n)return"";throw r}})===Cn({source:t,errorHandler(r){if(n)return"";throw r}})}function we(e,t,n={}){try{return e===t?!0:K(e)&&K(t)?Ln(Object.keys(e).sort(),Object.keys(t).sort(),!!(n!=null&&n.ignoreNonSerializableProperties))?Object.keys(e).every(o=>we(e[o],t[o])):!1:Ln(e,t,!!(n!=null&&n.ignoreNonSerializableProperties))}catch(r){const o=rn(r);throw o.message.startsWith(An)||(o.message=`${An}: ${o.message}`),o}}function Jo(e){return P(e).filter(t=>isNaN(Number(t)))}function Sr(e){return Jo(e).map(n=>e[n])}function Qo(e,t){return Sr(t).includes(e)}function Er(e,t){return P(e).filter(r=>{const o=e[r];return t(r,o,e)}).reduce((r,o)=>(r[o]=e[o],r),{})}function ei(e,t){return Er(e,n=>t.includes(n))}function ze(e,t){let n=!1;const r=P(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(n=!0),{...o,[i]:a}},{});return n?new Promise(async(o,i)=>{try{await Promise.all(P(r).map(async a=>{const s=await r[a];r[a]=s})),o(r)}catch(a){i(a)}}):r}function Ie(){let e,t,n=!1;const r=new Promise((o,i)=>{e=a=>(n=!0,o(a)),t=a=>{n=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Ie.name}.`);return{promise:r,resolve:e,reject:t,isSettled(){return n}}}function Bn(e){const t=Ie();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const ti="px";function ni(e){return ri({value:e,suffix:ti})}function ri({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=globalThis,on=tt.ShadowRoot&&(tt.ShadyCSS===void 0||tt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,an=Symbol(),Pn=new WeakMap;let Nr=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==an)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(on&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Pn.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Pn.set(n,t))}return t}toString(){return this.cssText}};const j=e=>new Nr(typeof e=="string"?e:e+"",void 0,an),nt=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Nr(n,e,an)},oi=(e,t)=>{if(on)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),o=tt.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}},In=on?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return j(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ii,defineProperty:ai,getOwnPropertyDescriptor:si,getOwnPropertyNames:ui,getOwnPropertySymbols:ci,getPrototypeOf:li}=Object,oe=globalThis,Rn=oe.trustedTypes,di=Rn?Rn.emptyScript:"",Nt=oe.reactiveElementPolyfillSupport,Ce=(e,t)=>e,ut={toAttribute(e,t){switch(t){case Boolean:e=e?di:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},sn=(e,t)=>!ii(e,t),Dn={attribute:!0,type:String,converter:ut,reflect:!1,hasChanged:sn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),oe.litPropertyMetadata??(oe.litPropertyMetadata=new WeakMap);class fe extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Dn){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,n);o!==void 0&&ai(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){const{get:o,set:i}=si(this.prototype,t)??{get(){return this[n]},set(a){this[n]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const s=o==null?void 0:o.call(this);i.call(this,a),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Dn}static _$Ei(){if(this.hasOwnProperty(Ce("elementProperties")))return;const t=li(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ce("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ce("properties"))){const n=this.properties,r=[...ui(n),...ci(n)];for(const o of r)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(In(o))}else t!==void 0&&n.push(In(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$E_)==null||n.delete(t)}_$ES(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return oi(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n){var i;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const a=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:ut).toAttribute(n,r.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,n){var i;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:ut;this._$Em=o,this[o]=s.fromAttribute(n,a.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??sn)(this[t],n))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$ET??(this._$ET=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,a]of o)a.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],a)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$E_)==null||r.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(n)):this._$Ej()}catch(o){throw t=!1,this._$Ej(),o}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$E_)==null||n.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&(this._$ET=this._$ET.forEach(n=>this._$EO(n,this[n]))),this._$Ej()}updated(t){}firstUpdated(t){}}fe.elementStyles=[],fe.shadowRootOptions={mode:"open"},fe[Ce("elementProperties")]=new Map,fe[Ce("finalized")]=new Map,Nt==null||Nt({ReactiveElement:fe}),(oe.reactiveElementVersions??(oe.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae=globalThis,ct=Ae.trustedTypes,On=ct?ct.createPolicy("lit-html",{createHTML:e=>e}):void 0,Mr="$lit$",te=`lit$${(Math.random()+"").slice(9)}$`,_r="?"+te,pi=`<${_r}>`,le=document,Re=()=>le.createComment(""),De=e=>e===null||typeof e!="object"&&typeof e!="function",kr=Array.isArray,fi=e=>kr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Mt=`[ 	
\f\r]`,Me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Hn=/-->/g,Fn=/>/g,ae=RegExp(`>|${Mt}(?:([^\\s"'>=/]+)(${Mt}*=${Mt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vn=/'/g,Gn=/"/g,Cr=/^(?:script|style|textarea|title)$/i,mi=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),hi=mi(1),G=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),zn=new WeakMap,ue=le.createTreeWalker(le,129);function Ar(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return On!==void 0?On.createHTML(t):t}const gi=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":"",a=Me;for(let s=0;s<n;s++){const u=e[s];let c,l,p=-1,f=0;for(;f<u.length&&(a.lastIndex=f,l=a.exec(u),l!==null);)f=a.lastIndex,a===Me?l[1]==="!--"?a=Hn:l[1]!==void 0?a=Fn:l[2]!==void 0?(Cr.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=ae):l[3]!==void 0&&(a=ae):a===ae?l[0]===">"?(a=o??Me,p=-1):l[1]===void 0?p=-2:(p=a.lastIndex-l[2].length,c=l[1],a=l[3]===void 0?ae:l[3]==='"'?Gn:Vn):a===Gn||a===Vn?a=ae:a===Hn||a===Fn?a=Me:(a=ae,o=void 0);const g=a===ae&&e[s+1].startsWith("/>")?" ":"";i+=a===Me?u+pi:p>=0?(r.push(c),u.slice(0,p)+Mr+u.slice(p)+te+g):u+te+(p===-2?s:g)}return[Ar(e,i+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class Oe{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,a=0;const s=t.length-1,u=this.parts,[c,l]=gi(t,n);if(this.el=Oe.createElement(c,r),ue.currentNode=this.el.content,n===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=ue.nextNode())!==null&&u.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(Mr)){const f=l[a++],g=o.getAttribute(p).split(te),h=/([.?@])?(.*)/.exec(f);u.push({type:1,index:i,name:h[2],strings:g,ctor:h[1]==="."?bi:h[1]==="?"?yi:h[1]==="@"?wi:bt}),o.removeAttribute(p)}else p.startsWith(te)&&(u.push({type:6,index:i}),o.removeAttribute(p));if(Cr.test(o.tagName)){const p=o.textContent.split(te),f=p.length-1;if(f>0){o.textContent=ct?ct.emptyScript:"";for(let g=0;g<f;g++)o.append(p[g],Re()),ue.nextNode(),u.push({type:2,index:++i});o.append(p[f],Re())}}}else if(o.nodeType===8)if(o.data===_r)u.push({type:2,index:i});else{let p=-1;for(;(p=o.data.indexOf(te,p+1))!==-1;)u.push({type:7,index:i}),p+=te.length-1}i++}}static createElement(t,n){const r=le.createElement("template");return r.innerHTML=t,r}}function xe(e,t,n=e,r){var a,s;if(t===G)return t;let o=r!==void 0?(a=n._$Co)==null?void 0:a[r]:n._$Cl;const i=De(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=o:n._$Cl=o),o!==void 0&&(t=xe(e,o._$AS(e,t.values),o,r)),t}class vi{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,o=((t==null?void 0:t.creationScope)??le).importNode(n,!0);ue.currentNode=o;let i=ue.nextNode(),a=0,s=0,u=r[0];for(;u!==void 0;){if(a===u.index){let c;u.type===2?c=new Ue(i,i.nextSibling,this,t):u.type===1?c=new u.ctor(i,u.name,u.strings,this,t):u.type===6&&(c=new xi(i,this,t)),this._$AV.push(c),u=r[++s]}a!==(u==null?void 0:u.index)&&(i=ue.nextNode(),a++)}return ue.currentNode=le,o}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Ue{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,o){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=xe(this,t,n),De(t)?t===k||t==null||t===""?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==G&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):fi(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==k&&De(this._$AH)?this._$AA.nextSibling.data=t:this.$(le.createTextNode(t)),this._$AH=t}g(t){var i;const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Oe.createElement(Ar(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(n);else{const a=new vi(o,this),s=a.u(this.options);a.p(n),this.$(s),this._$AH=a}}_$AC(t){let n=zn.get(t.strings);return n===void 0&&zn.set(t.strings,n=new Oe(t)),n}T(t){kr(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new Ue(this.k(Re()),this.k(Re()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class bt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,o,i){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=k}_$AI(t,n=this,r,o){const i=this.strings;let a=!1;if(i===void 0)t=xe(this,t,n,0),a=!De(t)||t!==this._$AH&&t!==G,a&&(this._$AH=t);else{const s=t;let u,c;for(t=i[0],u=0;u<i.length-1;u++)c=xe(this,s[r+u],n,u),c===G&&(c=this._$AH[u]),a||(a=!De(c)||c!==this._$AH[u]),c===k?t=k:t!==k&&(t+=(c??"")+i[u+1]),this._$AH[u]=c}a&&!o&&this.O(t)}O(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class bi extends bt{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===k?void 0:t}}class yi extends bt{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==k)}}class wi extends bt{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){if((t=xe(this,t,n,0)??k)===G)return;const r=this._$AH,o=t===k&&r!==k||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==k&&(r===k||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class xi{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){xe(this,t)}}const _t=Ae.litHtmlPolyfillSupport;_t==null||_t(Oe,Ue),(Ae.litHtmlVersions??(Ae.litHtmlVersions=[])).push("3.1.1");const $i=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const i=(n==null?void 0:n.renderBefore)??null;r._$litPart$=o=new Ue(t.insertBefore(Re(),i),i,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Le extends fe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$i(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return G}}var wr;Le._$litElement$=!0,Le.finalized=!0,(wr=globalThis.litElementHydrateSupport)==null||wr.call(globalThis,{LitElement:Le});const kt=globalThis.litElementPolyfillSupport;kt==null||kt({LitElement:Le});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const un={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},We=e=>(...t)=>({_$litDirective$:e,values:t});class Se{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ti={attribute:!0,type:String,converter:ut,reflect:!1,hasChanged:sn},Si=(e=Ti,t,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(n.name,e),r==="accessor"){const{name:a}=n;return{set(s){const u=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,u,e)},init(s){return s!==void 0&&this.C(a,void 0,e),s}}}if(r==="setter"){const{name:a}=n;return function(s){const u=this[a];t.call(this,s),this.requestUpdate(a,u,e)}}throw Error("Unsupported decorator location: "+r)};function Ei(e){return(t,n)=>typeof n=="object"?Si(e,t,n):((r,o,i)=>{const a=o.hasOwnProperty(i);return o.constructor.createProperty(i,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lr=We(class extends Se{constructor(e){var t;if(super(e),e.type!==un.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((r=this.st)!=null&&r.has(i))&&this.it.add(i);return this.render(t)}const n=e.element.classList;for(const i of this.it)i in t||(n.remove(i),this.it.delete(i));for(const i in t){const a=!!t[i];a===this.it.has(i)||(o=this.st)!=null&&o.has(i)||(a?(n.add(i),this.it.add(i)):(n.remove(i),this.it.delete(i)))}return G}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vt extends Se{constructor(t){if(super(t),this.et=k,t.type!==un.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===k||t==null)return this.vt=void 0,this.et=t;if(t===G)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const n=[t];return n.raw=n,this.vt={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Vt.directiveName="unsafeHTML",Vt.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Un extends Vt{}Un.directiveName="unsafeSVG",Un.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ni(e,t,n){return e?t(e):n==null?void 0:n(e)}class Br extends Le{}function Ee(e){if(K(e))return ze(e,(n,r)=>{if(!ne(n,"string"))throw new Error(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(jo(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const i=r,a=n.startsWith("--")?j(n):n.startsWith("-")?nt`-${j(n)}`:nt`--${j(n)}`;return{name:a,value:nt`var(${a}, ${j(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${Ee.name}' function.`)}function Mi(e,t,n){const r=!t.length&&!n.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(r||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),n.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const u=i[s.index];u&&u.splice(0,0,...s.values)}),i.flat()}function Gt(e){return D(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function cn(e){return D(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Pr(e){return e.map(t=>Gt(t)?t.definition:t).filter(t=>cn(t))}const Ir=new WeakMap;function _i(e,t){var o;const n=Pr(t);return(o=Rr(Ir,[e,...n]).value)==null?void 0:o.template}function ki(e,t,n){const r=Pr(t);return Or(Ir,[e,...r],n)}function Rr(e,t,n=0){const{currentTemplateAndNested:r,reason:o}=Dr(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?Rr(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:o}}function Dr(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const o=e.get(r);return o==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:o,reason:"key and value exists"}}function Or(e,t,n,r=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=Dr(e,t,r);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),r===t.length-1)return s.template=n,{result:!0,reason:"set value at end of keys array"};const u=s.nested??new WeakMap;return s.nested||(s.nested=u),Or(u,t,n,r+1)}const Ci=new WeakMap;function Hr(e,t,n){const r=_i(e,t),o=r??n();if(!r){const s=ki(e,t,o);if(s.result)Ci.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=Mi(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function Fr(e,t,n,r){const o=[],i=[],a=[],s=[];return e.forEach((c,l)=>{const p=o.length-1,f=o[p],g=l-1,h=t[g];r&&r(c);let y,C=[];if(typeof f=="string"&&(y=n(f,c,h),y)){o[p]=f+y.replacement,a.push(g);const U=y.getExtraValues;C=U?U(h):[],C.length&&U?(o[p]+=" ",C.forEach((Nn,Et)=>{Et&&o.push(" ")}),s.push(Nn=>{const Et=Nn[g],Vo=U(Et);return{index:g,values:Vo}}),o.push(c)):o[p]+=c}y||o.push(c);const V=e.raw[l];y?(i[p]=i[p]+y.replacement+V,C.length&&C.forEach(()=>{i.push("")})):i.push(V)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const l=s.map(p=>p(c)).flat();return{valueIndexDeletions:a,valueInsertions:l}}}}function Ai(...[e,t,n]){if(cn(n))return{replacement:n.tagName,getExtraValues:void 0}}function Li(e,t){return Fr(e,t,Ai)}function $(e,...t){const n=Hr(e,t,()=>Li(e,t));return nt(n.strings,...n.values)}const ln=Symbol("key for ignoring inputs not having been set yet"),Bi={[ln]:!0,allowPolymorphicState:!1};function Vr(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const n=t.host;return n instanceof Br?!0:Vr(n)}function Gr(e,t){const n=e.instanceState;P(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${r}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&P(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)}),Pi(e)}function Pi(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function Wn(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid CSS property name '${r}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Ii extends CustomEvent{get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function yt(){return e=>{var t;return t=class extends Ii{constructor(n){super(e,n),this._type=e}},t.type=e,t}}function I(){return yt()}function Ri(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new Error(`Expected event key of type string but got type "${typeof n}" for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const o=yt()([e,r].join("-"));return n[r]=o,n},{}):{}}const Di="_elementVirStateSetup";function Oi(e){return K(e)?Di in e:!1}function Hi(e,t){const n=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Ft(e)===Ft(t)&&n}const zr=Symbol("and"),Ur=Symbol("or"),Wr=Symbol("exact"),jr=Symbol("enum"),dn=Symbol("unknown"),Kr="__vir__shape__definition__key__do__not__use__in__actual__objects";function Xr(e){return D(e,Kr)}const qr="__vir__shape__specifier__key__do__not__use__in__actual__objects",Fi=[zr,Ur,Wr,jr,dn];function Vi(){return Gi([],dn)}function wt(e){return je(e,Ur)}function pn(e){return je(e,zr)}function fn(e){return je(e,Wr)}function mn(e){return je(e,jr)}function hn(e){return je(e,dn)}function je(e,t){const n=xt(e);return!!n&&n.specifierType===t}function Gi(e,t){return{[qr]:!0,specifierType:t,parts:e}}function rt(e,t){const n=xt(t);if(n){if(pn(n))return n.parts.every(r=>rt(e,r));if(wt(n))return n.parts.some(r=>rt(e,r));if(fn(n))return K(e)?rt(e,n.parts[0]):e===n.parts[0];if(mn(n))return Object.values(n.parts[0]).some(r=>r===e);if(hn(n))return!0}return Hi(e,t)}function xt(e){if(K(e)&&D(e,qr)){if(!D(e,"parts")||!ne(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!D(e,"specifierType")||!Go(Fi,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function zt(e,t=!1){return ot(e)}function ot(e){const t=xt(e);if(t){if(wt(t)||fn(t))return ot(t.parts[0]);if(pn(t))return t.parts.reduce((n,r)=>Object.assign(n,ot(r)),{});if(mn(t))return Object.values(t.parts[0])[0];if(hn(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return Xr(e)?zt(e.shape):e instanceof RegExp?e:ne(e,"array")?e.map(ot):K(e)?ze(e,(n,r)=>zt(r)):e}function zi(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:zt(e),[Kr]:!0}}class H extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Ui(e,t,n={}){try{return Wi(e,t,n),!0}catch{return!1}}function Wi(e,t,n={}){se(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!n.allowExtraKeys})}function Yr(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function se(e,t,n,r){if(hn(t))return!0;if(Xr(t))return se(e,t.shape,n,r);const o=Yr(n);if(xt(e))throw new H(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!rt(e,t))throw new H(`Subject does not match shape definition at key ${o}`);if(ne(t,"function"))return ne(e,"function");if(K(e)){const a=e,s=r.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(c=>[c,!1]));let u=!1;if(wt(t))u=t.parts.some(c=>{try{const l=se(e,c,n,{...r});return Object.assign(s,l),!0}catch(l){if(l instanceof H)return!1;throw l}});else if(pn(t))u=t.parts.every(c=>{try{const l=se(e,c,n,{...r,ignoreExtraKeys:!0});return Object.assign(s,l),!0}catch(l){if(l instanceof H)return!1;throw l}});else if(fn(t)){const c=se(e,t.parts[0],n,{...r,exactValues:!0});Object.assign(s,c),u=!0}else{if(mn(t))throw new H(`Cannot compare an enum specifier to an object at ${o}`);if(ne(t,"array")&&ne(a,"array"))u=a.every((c,l)=>{const p=t.some(f=>{try{return se(c,f,[...n,l],r),!0}catch(g){if(g instanceof H)return!1;throw g}});return s[l]=p,p});else{const c=ji({keys:n,options:r,shape:t,subject:e});Object.assign(s,c),u=!0}}if(!u){const l=`Failed on key(s): ${Object.keys(s).filter(p=>!s[p]).join(",")}`;throw new H(l)}return r.ignoreExtraKeys||Object.entries(s).forEach(([c,l])=>{if(!l)throw new H(`subject as extra key '${c}' in ${o}.`)}),s}else if(r.exactValues)return e===t;return!0}function ji({keys:e,options:t,shape:n,subject:r}){const o=Yr(e),i={};if(K(n)){const a=new Set(P(r)),s=new Set(P(n));t.ignoreExtraKeys||a.forEach(u=>{if(!s.has(u))throw new H(`Subject has extra key '${String(u)}' in ${o}`)}),s.forEach(u=>{var f;const c=n[u],l=wt(c)?c.parts.includes(void 0):!1,p=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!a.has(u)&&!l&&!p)throw new H(`Subject missing key '${String(u)}' in ${o}`)}),a.forEach(u=>{const c=r[u];if(t.ignoreExtraKeys&&!s.has(u))return;const l=n[u];se(c,l,[...e,u],t),i[u]=!0})}else throw new H(`shape definition at ${o} was not an object.`);return i}const Ki=zi({addListener(){return()=>!1},removeListener(){return!1},destroy(){},value:Vi()});function Ct(e){return Ui(e,Ki,{allowExtraKeys:!0})}function Zr(e,t){t in e||Ei()(e,t)}function Xi(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function jn(e,t){const n=e;function r(a){t?Xi(a,e,e.tagName):Zr(e,a)}function o(a,s){return r(s),n[s]}return new Proxy({},{get:o,set(a,s,u){const c=Oi(u)?u._elementVirStateSetup():u;r(s);const l=n[s];function p(h){a[s]=h,n[s]=h}const f=e.observablePropertyListenerMap[s];if(l!==c&&Ct(l)&&(f!=null&&f.length)&&l.removeListener(f),Ct(c))if(f)c.addListener(f);else{let h=function(){e.requestUpdate()};var g=h;e.observablePropertyListenerMap[s]=h,c.addListener(h)}else Ct(l)&&(e.observablePropertyListenerMap[s]=void 0);return p(c),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has(a,s){return Reflect.has(a,s)}})}function qi(e){return e?ze(e,t=>t):{}}function Yi({hostClassNames:e,cssVars:t}){return{hostClasses:ze(e,(n,r)=>({name:j(r),selector:j(`:host(.${r})`)})),cssVars:t}}function Zi({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:o}){t&&P(t).forEach(i=>{const a=t[i],s=n[i];typeof a=="function"&&(a({state:r,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function Ji(e,t){function n(o){P(o).forEach(i=>{const a=o[i];e.instanceState[i]=a})}return{dispatch:o=>e.dispatchEvent(o),updateState:n,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Qi=globalThis&&globalThis.__setFunctionName||function(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})};function $t(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const n={...Bi,...e.options},r=Ri(e.tagName,e.events),o=qi(e.hostClasses);e.hostClasses&&Wn(e.tagName,e.hostClasses),e.cssVars&&Wn(e.tagName,e.cssVars);const i=e.cssVars?Ee(e.cssVars):{},a=typeof e.styles=="function"?e.styles(Yi({hostClassNames:o,cssVars:i})):e.styles||$``,s=e.renderCallback;function u(...[l]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:l}}const c=(t=class extends Br{createRenderParams(){return Ji(this,r)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{Vr(this)&&!this._haveInputsBeenSet&&!n[ln]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${$t.name}' to define ${e.tagName}.`),this._hasRendered=!0;const l=this.createRenderParams();if(!this._initCalled&&e.initCallback&&(this._initCalled=!0,e.initCallback(l)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const p=s(l);if(p instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Zi({host:l.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:l.state,inputs:l.inputs}),this._lastRenderedProps={inputs:{...l.inputs},state:{...l.state}},p}catch(l){const p=qo(l,`Failed to render ${e.tagName}`);return this._lastRenderError=p,Tr(p)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.initCallback){this._initCalled=!0;const l=this.createRenderParams();if(e.initCallback(l)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const l=this.createRenderParams();if(e.cleanupCallback(l)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(l){Gr(this,l)}constructor(){var p;super(),this._lastRenderError=void 0,this._internalRenderCount=0,this._initCalled=!1,this._hasRendered=!1,this._lastRenderedProps=void 0,this._haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=jn(this,!1),this.instanceState=jn(this,!((p=e.options)!=null&&p.allowPolymorphicState));const l=e.stateInitStatic||{};P(l).forEach(f=>{Zr(this,f),this.instanceState[f]=l[f]}),this.definition=c}},Qi(t,"anonymousClass"),t.tagName=e.tagName,t.styles=a,t.assign=u,t.isStrictInstance=()=>!1,t.events=r,t.renderCallback=s,t.hostClasses=o,t.cssVars=i,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:$r(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:l=>l instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function z(){return e=>$t({...e,options:{[ln]:!1,...e.options}})}function Jr(e,t){return He(e,t),e.element}function ea(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function He(e,t){const n=ea(e),r=n?`: in ${n}`:"";if(e.type!==un.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function ta(e,t){return t?Kn(e,t):Kn(void 0,e)}const Kn=We(class extends Se{constructor(e){super(e),this.element=Jr(e,"assign")}render(e,t){return Gr(this.element,t),G}});function na(e,t){return e===t}function ra(e,t=na){const n=new Set;function r(){n.forEach(a=>a(i.value))}function o(a){return n.delete(a)}const i={value:e,setValue(a){t(i.value,a)||(i.value=a,r())},addListener(a){return!n.has(a)&&n.add(a),()=>o(a)},removeListener:o,destroy(){n.clear()}};return i}const At=Symbol("not set");function oa(e){let t=At,n;const r=e&&"updateCallback"in e?e.updateCallback:void 0;let o=Ie();const i=ra(o.promise);function a(){o=Ie(),i.setValue(o.promise)}function s(h){o.resolve(h),i.setValue(h)}function u(h){o.reject(h),i.setValue(h)}function c(h){h!==n&&(n=h,o.isSettled()&&a(),h.then(y=>{n===h&&s(y)}).catch(y=>{n===h&&(o.promise.catch(()=>{}),u(rn(y)))}))}function l(h,y){if(!r)throw console.error(e),new Error("Trigger was updated for asyncProp but no updateCallback has been defined.");const C={...h},V={...y};if(t===At||!we(C,t,{ignoreNonSerializableProperties:!0})){t=C;const U=r(t,V);c(U)}}function p(h,y){t=At,l(h,y)}const f=e&&"defaultValue"in e?e.defaultValue:new Promise(()=>{});return f instanceof Promise?c(f):s(f),Object.assign(i,{setNewPromise(h){c(h)},setResolvedValue(h){h!==i.value&&(o.isSettled()&&a(),o.resolve(h),s(h))},updateTrigger:r?l:()=>{throw new Error("Cannot run updateTrigger when updateCallback was not set on the asyncProp.")},forceUpdate:r?p:()=>{throw new Error("Cannot run forceUpdate when updateCallback was not set on the asyncProp.")}})}function Lt(...e){return{_elementVirStateSetup(){return oa(...e)}}}function Bt(e){return!Xo(e)}function Pt(e){return e instanceof Error}function T(e,t){return ia(e,t)}const ia=We(class extends Se{constructor(e){super(e),this.element=Jr(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>{var r;return(r=this.lastListenerMetaData)==null?void 0:r.callback(n)}}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),G}}),Xn="onDomCreated",aa=We(class extends Se{constructor(e){super(e),He(e,Xn)}update(e,[t]){He(e,Xn);const n=e.element;return n!==this.element&&(requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),It="onResize",Qr=We(class extends Se{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),He(e,It)}fireCallback(e){var n;const t=e[0];if(!t)throw console.error(e),new Error(`${It} observation triggered but the first entry was empty.`);(n=this.callback)==null||n.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){He(e,It),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function it(e,t,n){return Ni(e,()=>t,()=>n)}function sa(e){return{_elementVirStateSetup:e}}function ua(e){const{assertInputs:t,transformInputs:n}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(r=>r)};return{defineElement:()=>r=>(t(r),z()(n(r))),defineElementNoInputs:r=>(t(r),$t(n(r)))}}function ca(...[e,t,n]){const r=Gt(n)?n.definition:n,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=cn(r);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r.prototype.constructor.name}'`);return!a||!s?void 0:{replacement:r.tagName,getExtraValues(c){const l=Gt(c)?c.inputs:void 0;return[o&&l?ta(l):void 0].filter(Pe)}}}function la(e){}function da(e){return Fr(e.strings,e.values,ca,la)}function v(e,...t){const n=hi(e,...t),r=Hr(e,t,()=>da(n));return{...n,strings:r.strings,values:r.values}}var x;(function(e){e.Keyboard="keyboard",e.Mouse="mouse",e.Gamepad="gamepad"})(x||(x={}));const eo={gamepad1:0,gamepad2:1,gamepad3:2,gamepad4:3};function to(e){return Object.values(eo).includes(e)}const pa={mouse:"mouse",keyboard:"keyboard"},Q={...pa,...eo};x.Gamepad,x.Gamepad,x.Gamepad,x.Gamepad,x.Keyboard,x.Mouse;function fa(e){return Array.isArray(e)?"array":typeof e}function ma(e,t){return fa(e)===t}const ha=.01;function ga({value:e,gamepadDeadZone:t,globalDeadZone:n}){const r=t??(n||ha);return Math.abs(e)>r?e:0}var d;(function(e){e.Button="button",e.Axe="axe"})(d||(d={}));function ke(e){return`button-${e}`}function Ut(e){return`axe-${e}`}function qn({gamepadInput:e,inputIndex:t,deadZones:n,globalDeadZone:r}){const o=ma(e,"number"),i=o?Ut(t):ke(t),a=o?e:e.value;return{inputName:i,value:ga({value:a,gamepadDeadZone:n[i],globalDeadZone:r}),inputType:o?d.Axe:d.Button}}function va({gamepad:e,deadZoneSettings:t,globalDeadZone:n}){if(!to(e.index))throw new Error(`Tried to serialize gamepad with out-of-bounds index: '${e.index}'`);const r=t[e.id]||{},o=e.axes.map((s,u)=>qn({gamepadInput:s,inputIndex:u,deadZones:r,globalDeadZone:n})),i=e.buttons.map((s,u)=>qn({deadZones:r,gamepadInput:s,globalDeadZone:n,inputIndex:u})),a=Zo([...i,...o].map(s=>[s.inputName,s]));return{axes:o,buttons:i,isConnected:e.connected,gamepadName:e.id,index:e.index,mapping:e.mapping,serialized:!0,timestamp:e.timestamp,inputsByName:a}}const qe=window.navigator;function ba({deadZoneSettings:e,globalDeadZone:t}){return Array.from(D(qe,"webkitGetGamepads")?qe.webkitGetGamepads():D(qe,"getGamepads")?qe.getGamepads():[]).filter(n=>!!n).map(n=>va({gamepad:n,deadZoneSettings:e,globalDeadZone:t}))}function ya({deadZoneSettings:e,globalDeadZone:t}){return ba({deadZoneSettings:e,globalDeadZone:t}).reduce((o,i)=>{const a=i.index;return to(a)?(o[a]=i,o):(console.warn(`ignoring gamepad index '${a}'`),o)},{})}function wa(e){const t={},n={deviceKey:e.index,deviceName:e.gamepadName,deviceType:x.Gamepad};return Object.values(e.inputsByName).forEach(r=>{r.value&&(t[r.inputName]={...n,details:r,inputName:r.inputName,inputValue:r.value})}),t}function xa(e){return ze(e,(t,n)=>({currentInputs:wa(n),deviceDetails:n,deviceName:n.gamepadName,deviceKey:n.index,deviceType:x.Gamepad}))}function Yn(e){return ye(e).map(r=>r==null?void 0:r.currentInputs).filter(Pe).map(r=>ye(r)).flat()}const Zn={deviceDetails:void 0,deviceKey:Q.keyboard,deviceName:"keyboard",deviceType:x.Keyboard},Ye={deviceDetails:void 0,deviceKey:Q.mouse,deviceName:"mouse",deviceType:x.Mouse};var X;(function(e){e.NewDevicesAdded="new-devices-added",e.AllDevicesUpdated="all-devices-updated",e.CurrentInputsChanged="current-inputs-updated",e.DevicesRemoved="devices-removed"})(X||(X={}));var $a=globalThis&&globalThis.__setFunctionName||function(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})};function Ta(){return class extends Event{constructor(t,n){super(t,n),this.detail=n.detail}}}const Sa=globalThis.CustomEvent||Ta();function Ea(){function e(t){var n;return n=class extends Sa{constructor(o){super(t,o)}},$a(n,"TypedEventConstructor"),n.type=t,n}return e}globalThis&&globalThis.__setFunctionName;function Na(e){return Array.isArray(e)?"array":typeof e}function Ma(e,t){return Na(e)===t}class _a{constructor(){this.listeners={}}getListenerCount(){return ye(this.listeners).map(n=>(n==null?void 0:n.size)||0).reduce((n,r)=>n+r,0)}listen(t,n,r={}){const o=this.listeners,i=Ma(t,"string")?t:t.type;function a(){var u;return((u=o[i])==null?void 0:u.delete(s))||!1}function s(u,c){r.once&&a(),n(u,c)}return o[i]||(o[i]=new Set),o[i].add(s),a}dispatchEvent(t){const n=this.listeners[t.type],r=(n==null?void 0:n.size)||0;return n==null||n.forEach(o=>{o(t,()=>n.delete(o))}),r}removeListeners(){const n=ye(this.listeners).reduce((r,o)=>{const i=(o==null?void 0:o.size)||0;return o==null||o.clear(),r+i},0);return this.listeners={},n}}var ka=globalThis&&globalThis.__setFunctionName||function(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})};function Tt(){return(e,t)=>{var n;const r=$r(e,{capitalizeFirstLetter:!0}),o=(n=class extends Ea()(e){constructor(){super(...arguments),this.eventType=e}static constructIfDataIsNew(i,...a){const s=o.getNewData(...a);if(s)return new o({detail:{timestamp:i,inputs:s}})}},ka(n,"TimedEventConstructor"),n.getNewData=t,n);return Object.defineProperty(o,"name",{value:r,writable:!0}),o}}function Ca(...[e,t]){return t}const Aa=Tt()(X.AllDevicesUpdated,Ca);function Jn(e,t){return e.deviceKey===t.deviceKey&&e.inputName===t.inputName&&e.inputName===t.inputName&&e.inputValue===t.inputValue}function La(...[e,t]){const n=Yn(t),r=e?Yn(e):[];if(!we(r,n)){const o=n.filter(a=>!r.find(s=>Jn(s,a))),i=r.filter(a=>!n.find(s=>Jn(s,a)));return{newInputs:o,removedInputs:i,allCurrentInputs:n}}}const Ba=Tt()(X.CurrentInputsChanged,La);function Pa(...[e,t]){if(!e)return[];const n=P(e).filter(r=>!D(t,r));if(n.length)return n.map(r=>e[r]).filter(Pe)}const Ia=Tt()(X.DevicesRemoved,Pa);function Ra(...[e,t]){if(!e)return ye(t).filter(Pe);const n=P(t).filter(r=>!D(e,r));if(n.length)return n.map(r=>t[r]).filter(Pe)}const Da=Tt()(X.NewDevicesAdded,Ra),no=[Aa,Da,Ia,Ba];Object.fromEntries(no.map(e=>[e.type,e]));class Oa extends _a{constructor(t={}){super(),this.currentKeyboardInputs={},this.currentMouseInputs={},this.gamepadDeadZoneSettings={},this.loopIsRunning=!1,this.globalDeadZone=0,this.currentLoopIndex=-1,this.lastEventDetails={},t.gamepadDeadZoneSettings&&this.updateGamepadDeadZoneSettings(t.gamepadDeadZoneSettings),t.globalDeadZone&&(this.globalDeadZone=t.globalDeadZone),this.attachWindowListeners(t),this.readAllDevices(),t.startLoopImmediately&&this.startPollingLoop()}attachWindowListeners(t){window.addEventListener("keydown",n=>{const r=ke(n.key);if(this.currentKeyboardInputs.hasOwnProperty(r))return;const o={deviceType:x.Keyboard,details:{keyboardEvent:n},deviceKey:Q.keyboard,deviceName:Zn.deviceName,inputName:r,inputValue:1};this.currentKeyboardInputs[r]=o}),window.addEventListener("keyup",n=>{delete this.currentKeyboardInputs[ke(n.key)]}),window.addEventListener("mousedown",n=>{const r=ke(n.button);this.currentMouseInputs.hasOwnProperty(r)||(this.currentMouseInputs[r]={deviceType:x.Mouse,details:{mouseEvent:n},deviceName:Ye.deviceName,deviceKey:Q.mouse,inputName:r,inputValue:1})}),window.addEventListener("mouseup",n=>{delete this.currentMouseInputs[ke(n.button)]}),t.disableMouseMovement||window.addEventListener("mousemove",n=>{const r=Ut("x"),o=Ut("y");this.currentMouseInputs[r]={deviceType:x.Mouse,details:{mouseEvent:n},deviceName:Ye.deviceName,deviceKey:Q.mouse,inputName:r,inputValue:n.clientX},this.currentMouseInputs[o]={deviceType:x.Mouse,details:{mouseEvent:n},deviceName:Ye.deviceName,deviceKey:Q.mouse,inputName:o,inputValue:n.clientY}})}runPollingLoop(t,n){this.loopIsRunning&&this.currentLoopIndex===t&&(this.readAllDevices(this.gamepadDeadZoneSettings,n),requestAnimationFrame(r=>{this.runPollingLoop(t,r)}))}fireEvents(t,n,r){no.forEach(o=>{const i=o.constructIfDataIsNew(t,n,r);i&&(this.lastEventDetails[i.type]={constructor:o,constructorInputs:[t,n,r]},this.dispatchEvent(i))})}getCurrentDeviceValues(t,n){const r=ya({deadZoneSettings:t,globalDeadZone:n}),o=xa(r);return{[Q.keyboard]:{...Zn,currentInputs:{...this.currentKeyboardInputs}},[Q.mouse]:{...Ye,currentInputs:{...this.currentMouseInputs}},...o}}startPollingLoop(){this.loopIsRunning||(this.loopIsRunning=!0,this.currentLoopIndex++,requestAnimationFrame(t=>{this.runPollingLoop(this.currentLoopIndex,t)}))}pausePollingLoop(){this.loopIsRunning&&(this.loopIsRunning=!1)}getLastPollResults(){return this.lastReadInputDevices}readAllDevices(t=this.gamepadDeadZoneSettings,n=performance.now(),r=this.globalDeadZone){const o=this.getCurrentDeviceValues(t,r),i=this.lastReadInputDevices;return this.lastReadInputDevices=o,this.fireEvents(n,i,o),o}updateGamepadDeadZoneSettings(t){this.gamepadDeadZoneSettings=t}}var Fe;(function(e){e.Browser="browser",e.Node="node"})(Fe||(Fe={}));function ro(e){return{extra:e.extraContext??{},level:e.severity}}function Ha(e){return!!e}var Qn;(function(e){e.Upper="upper",e.Lower="lower"})(Qn||(Qn={}));const Fa=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function oo(e,t){return e?Fa.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function io(e){return e?e instanceof Error?e.message:oo(e,"message")?String(e.message):String(e):""}function Va(e){return!!e&&typeof e=="object"}function Ga(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function za(e){return Array.isArray(e)?"array":typeof e}function Wt(e,t){return za(e)===t}function Ua(e){return Ga(e).filter(t=>isNaN(Number(t)))}function Wa(e){return Ua(e).map(n=>e[n])}function ja(e,t){return Wa(t).includes(e)}function Ka(e,t){try{return Xa(e,t),!0}catch{return!1}}function Xa(e,t,n){if(e.length<t)throw new Error(n?`'${n}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function ao(...e){if(!Ka(e,1))return{};if(e.length===1)return e[0];let t;const n={};return e.forEach(r=>{try{if(!Va(r)){t=r;return}Object.entries(r).forEach(([o,i])=>{n[o]||(n[o]=[]),n[o].push(i)}),t||(Wt(r,"array")?t=[...r]:t={...r})}catch{}}),Object.entries(n).forEach(([r,o])=>{const i=ao(...o);i===void 0&&r in t?delete t[r]:i!==void 0&&(t[r]=i)}),Wt(t,"array")&&(t=t.filter(r=>r!==void 0)),t}var B;(function(e){e.Warning="warning",e.Info="info",e.Debug="debug",e.Fatal="fatal",e.Error="error"})(B||(B={}));const qa={[B.Warning]:console.warn,[B.Info]:console.info,[B.Debug]:console.debug,[B.Fatal]:console.error,[B.Error]:console.error};function so(e){return ja(e.level,B)?e.level:B.Info}function Ya(e){const t=so(e);return qa[t]}const uo=Symbol("extra-event-context");function Za(e){return oo(e,uo)}function er(e){if(Za(e))return e[uo]}function tr(e){var i;const t=er(e),n="originalException"in e?er(e.originalException):void 0,r="captureContext"in e&&"extra"in e.captureContext?(i=e.captureContext)==null?void 0:i.extra:void 0,o={...t,...n,...r};if(Object.keys(o).length)return o}const jt=[];function Ja(){for(;jt.length;)try{const e=jt.pop();if(!e)return;e.callback(...e.inputs)}catch(e){console.error("error while trying to send premature sentry events:",e)}}function Qa(e){jt.push(e)}let Be;async function es(e){const t=!!Be;Be=await e,t||Ja()}function ts(e,t,n){const r={...tr(t),...tr(e),...n==null?void 0:n(),originalFullMessage:e.message||io(t.originalException)},o=ro({severity:so(e),extraContext:r});return Object.assign(e,o),e}function nr(e){function t(n,r){const o=Ya(n),a=[ns(n,r),n.extra,{event:n,hint:r},r.originalException].filter(Ha);return e?(o("Would have sent to Sentry:",...a),null):(o("Sending to Sentry:",...a),n)}return t}function ns(e,t){return e.message||io(t.originalException)}async function rs(e,t,n,r,o){const i={beforeSend:nr(o),beforeSendTransaction:nr(o),defaultIntegrations:!1,enabled:!0},a=os[e](t);return ao(i,a,n,r||{})}const os={[Fe.Browser](e){return{integrations:[new e.HttpContext,new e.Dedupe,new e.InboundFilters,new e.FunctionToString,new e.GlobalHandlers]}},[Fe.Node](e){return{integrations:[new e.Integrations.OnUncaughtException,new e.Integrations.OnUnhandledRejection,new e.Integrations.ContextLines,new e.Integrations.Context,new e.Integrations.FunctionToString]}}};async function is({dsn:e,releaseEnv:t,releaseName:n,sentryConfigOverrides:r,createUniversalContext:o,sentryDep:i,executionEnv:a,isDev:s}){const u=await rs(a,i,{dsn:e,environment:t,release:n},r,s);return i.init(u),i.addGlobalEventProcessor((c,l)=>ts(c,l,o)),es(i),i}const as={[B.Debug]:Rt(B.Debug),[B.Info]:Rt(B.Info),[B.Warning]:Rt(B.Warning)};function Rt(e){return(t,n)=>co(t,{extraContext:n,severity:e})}function co(e,t){try{if(!Be){Qa({callback:co,inputs:[e,t]});return}const n=ro(t);return Wt(e,"string")?Be.captureMessage(e,n):Be.captureEvent({...e,...n})}catch(n){console.error("Error while trying to send Sentry log:",n);return}}const rr="vira-",{defineElement:Ne,defineElementNoInputs:Xu}=ua({assertInputs:e=>{if(!e.tagName.startsWith(rr))throw new Error(`Tag name should start with '${rr}' but got '${e.tagName}'`)}}),lo=$`
    pointer-events: none;
    opacity: 0.3;
`,ce=Ee({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),lt=Ee({"vira-form-input-border-radius":"8px"}),dt=Ee({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":$`calc(${lt["vira-form-input-border-radius"].value} + 4px)`});function po({mainSelector:e,elementBorderSize:t,outlineGap:n=2,outlineWidth:r=3}){const o=j(ni(r+n+t));return $`
        ${j(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${r}px solid ${dt["vira-focus-outline-color"].value};
            border-radius: ${dt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Ke=$`
    padding: 0;
    margin: 0;
`,R=$`
    ${Ke};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Kt=$`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,A=Ne()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>$`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var pt;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(pt||(pt={}));const W=Ne()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===pt.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>$`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Kt};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${dt["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-active-color"].value};
        }

        ${e["vira-button-disabled"].selector} {
            ${lo};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${R};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${lt["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${ce["vira-interaction-animation-duration"].value},
                background-color
                    ${ce["vira-interaction-animation-duration"].value},
                border-color ${ce["vira-interaction-animation-duration"].value};
        }

        ${po({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${A} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?v`
                  <${A.assign({icon:e.icon})}></${A}>
              `:"",n=e.text?v`
                  <span class="text-template">${e.text}</span>
              `:"";return v`
            <button ?disabled=${e.disabled}>${t} ${n}</button>
        `}});var Xt;(function(e){e.Header="header"})(Xt||(Xt={}));Ne()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>$`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${R};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${ce["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:I()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:n,events:r,inputs:o}){const i=o.expanded?$`
                  height: ${e.contentHeight}px;
              `:$`
                  height: 0;
              `;return v`
            <button
                class="header-wrapper"
                ${T("click",()=>{n(new r.expandChange(!o.expanded))})}
            >
                <slot name=${Xt.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${Qr(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const w=Ee({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function q({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const fo=q({name:"CloseX24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});q({name:"Element16Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});q({name:"Element24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const ss=q({name:"Loader24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),us=$`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${ce["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,mo=q({name:"LoaderAnimated24Icon",svgTemplate:v`
        <style>
            ${us}
        </style>
        ${ss.svgTemplate}
    `});q({name:"Options24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${w["vira-icon-stroke-color"].value}"
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const cs=q({name:"StatusFailure24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});q({name:"StatusInProgress24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});q({name:"StatusSuccess24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});var ft;(function(e){e.Loading="loading",e.Error="error"})(ft||(ft={}));Ne()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:I(),imageError:I()},styles:({hostClasses:e})=>$`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${e["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${e["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:e,state:t,updateState:n,dispatch:r,events:o}){const i=e.imageUrl,a=t.erroredUrls[i]?v`
                  <slot class="status-wrapper" name=${ft.Error}>
                      <${A.assign({icon:cs})} class="error"></${A}>
                  </slot>
              `:t.loadedUrls[i]?void 0:v`
                    <slot class="status-wrapper" name=${ft.Loading}>
                        <${A.assign({icon:mo})}></${A}>
                    </slot>
                `;return v`
            ${it(!!a,a)}
            <img
                class=${Lr({hidden:!!a})}
                ${T("load",async()=>{e._debugLoadDelay&&await Bn(e._debugLoadDelay.milliseconds),n({loadedUrls:{...t.loadedUrls,[i]:!0}}),r(new o.imageLoad)})}
                ${T("error",async s=>{e._debugLoadDelay&&await Bn(e._debugLoadDelay.milliseconds),n({erroredUrls:{...t.erroredUrls,[i]:!0}}),r(new o.imageError(s.error))})}
                src=${i}
            />
        `}});async function ho(e=1){const t=Ie();function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}const ls={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},ds=Object.keys(ls),ps=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...ds,...ps];function fs(e,t){const n=e.currentTarget;if(!(n instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${n==null?void 0:n.constructor.name}'.`);return n}function qt({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(n=>qt({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function go({value:e,allowed:t,blocked:n}){const r=t?qt({input:e,matcher:t}):!0,o=n?qt({input:e,matcher:n}):!1;return r&&!o}function vo(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,o)=>(go({...e,value:o})?r.filtered.push(o):r.blocked.push(o),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}function ms({inputs:e,filteredValue:t,event:n,inputBlockedCallback:r,newValueCallback:o}){if(!(n instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=fs(n,HTMLInputElement),a=n.data,s=t;let u=i.value??"";if(a)if(a.length===1)go({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(u=s,r(a));else{const{filtered:c,blocked:l}=vo({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});u=c,r(l)}i.value!==u&&(i.value=u),s!==u&&o(u)}const F=Ne()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:I(),inputBlocked:I()},styles:({hostClasses:e,cssVars:t})=>$`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${dt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${lo};
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${R};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${Kt};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${R};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${lt["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${ce["vira-interaction-animation-duration"].value};
            }

            label {
                ${R};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${lt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${po({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${R};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${t["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${t["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${Kt};
            }

            .close-x-button {
                ${R};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${ce["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:n,updateState:r,events:o})=>{const{filtered:i}=vo({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?v`
                  <${A.assign({icon:e.icon})} class="left-side-icon"></${A}>
              `:"",s=e.fitText?$`
                  width: ${n.forcedInputWidth}px;
              `:"";return v`
            <label>
                ${a}
                ${it(!!e.fitText,v`
                        <span
                            class="size-span"
                            ${Qr(({contentRect:u})=>{r({forcedInputWidth:u.width})})}
                        >
                            <pre>${i||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    style=${s}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${i}
                    ${T("input",u=>{ms({inputs:e,filteredValue:i,event:u,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${it(!!(e.showClearButton&&e.value),v`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${T("click",u=>{u.stopImmediatePropagation(),u.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${A.assign({icon:fo})}></${A}>
                        </button>
                    `)}
                ${it(!!e.suffix,v`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),hs=0;function gs(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==hs)}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;Ne()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>$`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${e["vira-link-hover-color"].value};
        }
    `,events:{routeChange:I()},renderCallback({inputs:e,dispatch:t,events:n}){var o,i;function r(a){e.route&&gs(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new n.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return v`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return v`
                <a href=${a} rel="noopener noreferrer" ${T("click",r)}>
                    <slot></slot>
                </a>
            `}}});var S=(e=>(e.SwitchPro="switch-pro",e.PlaystationDualShock="playstation-dual-shock",e.PlaystationDualShock4="playstation-dual-shock-4",e.PlaystationDualSense="playstation-dual-sense",e.SteamDeck="steam-deck",e.Xbox360="xbox-360",e.XboxWireless="xbox-wireless",e.Unknown="unknown",e))(S||{}),_=(e=>(e.Microsoft="microsoft",e.Nintendo="nintendo",e.Sony="sony",e.Valve="valve",e.Unknown="unknown",e))(_||{});const vs={"switch-pro":"Nintendo Switch Pro gamepad for the Nintendo Switch console.","playstation-dual-sense":"Sony PlayStation DualSense gamepad for the Sony PlayStation 5 console.","playstation-dual-shock":"Sony PlayStation DualShock gamepad for the Sony PlayStation 1 through Sony PlayStation 3 consoles.","playstation-dual-shock-4":"Sony PlayStation DualShock 4 gamepad for the Sony PlayStation 4 console.","steam-deck":"Gamepad for the Valve Steam Deck handheld console.","xbox-360":"Microsoft Xbox 360 gamepad for the Microsoft Xbox 360 console. Can be wired or wireless.","xbox-wireless":"Microsoft Xbox Wireless gamepad for Microsoft Xbox One through Xbox Series X/S consoles.",unknown:"Unknown gamepad type."},gn=[{gamepadModels:[S.SwitchPro],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"A","button-1":"B","button-2":"X","button-3":"Y","button-4":"L","button-5":"R","button-6":"ZL","button-7":"ZR","button-8":"minus","button-9":"plus","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"home"},systemVersions:[{browserVersion:"17.2.1",browserName:"Safari",osName:"macOS",osVersion:"10.15.7"}],notes:{info:"The capture / screenshot button is not detected by this browser."}},{gamepadModels:[S.XboxWireless],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"A","button-1":"B","button-2":"X","button-3":"Y","button-4":"LB","button-5":"RB","button-6":"LT","button-7":"RT","button-8":"view","button-9":"menu","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"guide"},systemVersions:[{browserVersion:"17.2.1",browserName:"Safari",osName:"macOS",osVersion:"10.15.7"}],notes:{info:"The share button is not detected by this browser."}},{gamepadModels:[S.SwitchPro],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"B","button-1":"A","button-2":"Y","button-3":"X","button-4":"L","button-5":"R","button-6":"ZL","button-7":"ZR","button-8":"minus","button-9":"plus","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"home","button-17":"capture"},systemVersions:[{browserVersion:"117.0.0.0",browserName:"Chrome",osName:"macOS",osVersion:"10.15.7"}],notes:void 0},{inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"X","button-1":"O","button-2":"square","button-3":"triangle","button-4":"L1","button-5":"R1","button-6":"L2","button-7":"R2","button-8":"create","button-9":"options","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"playstation","button-17":"touch-pad"},gamepadModels:[S.PlaystationDualSense],systemVersions:[{browserVersion:"117.0.0.0",browserName:"Chrome",osName:"macOS",osVersion:"10.15.7"}],notes:{info:"Touch pad navigation and the mute button are not detected by this browser."}},{inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"X","button-1":"O","button-2":"square","button-3":"triangle","button-4":"L1","button-5":"R1","button-6":"L2","button-7":"R2","button-8":"create","button-9":"options","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"playstation"},gamepadModels:[S.PlaystationDualSense],systemVersions:[{browserVersion:"17.2.1",browserName:"Safari",osName:"macOS",osVersion:"10.15.7"}],notes:{info:"Touch pad navigation, the touch pad button, and the mute button are not detected by this browser."}},{inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","axe-4":"L2-axe","axe-5":"R2-axe","axe-6":"d-pad","button-0":"square","button-1":"X","button-2":"O","button-3":"triangle","button-4":"L1","button-5":"R1","button-6":"L2","button-7":"R2","button-8":"create","button-9":"options","button-10":"L3","button-11":"R3","button-12":"playstation","button-13":"touch-pad","button-14":"mute","button-15":"d-pad-right","button-16":"playstation","button-17":"touch-pad"},gamepadModels:[S.PlaystationDualSense],systemVersions:[{browserVersion:"109.0",browserName:"Firefox",osName:"macOS",osVersion:"10.15"}],notes:{warning:"This browser has major issues reading this gamepad."}},{gamepadModels:[S.XboxWireless],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","axe-4":"d-pad","button-0":"A","button-1":"B","button-2":"unknown","button-3":"X","button-4":"Y","button-5":"unknown","button-6":"LB","button-7":"RB","button-8":"unknown","button-9":"unknown","button-10":"view","button-11":"menu","button-12":"guide","button-13":"L3","button-14":"R3","button-15":"LT","button-16":"RT"},systemVersions:[{browserVersion:"109.0",browserName:"Firefox",osName:"macOS",osVersion:"10.15"}],notes:{warning:"This browser has major issues reading this gamepad."}},{gamepadModels:[S.XboxWireless],inputMappings:{"axe-0":"left-stick-x","axe-1":"left-stick-y","axe-2":"right-stick-x","axe-3":"right-stick-y","button-0":"A","button-1":"B","button-10":"L3","button-11":"R3","button-12":"d-pad-up","button-13":"d-pad-down","button-14":"d-pad-left","button-15":"d-pad-right","button-16":"guide","button-2":"X","button-3":"Y","button-4":"LB","button-5":"RB","button-6":"LT","button-7":"RT","button-8":"view","button-9":"menu","button-17":"share"},systemVersions:[{browserVersion:"117.0.0.0",browserName:"Chrome",osName:"macOS",osVersion:"10.15.7"}],notes:void 0}];function bs(e){return Object.fromEntries(Object.entries(e).map(([t,n])=>[typeof t=="string"?t.toLowerCase():t,n]))}const Ve=bs({"Pro Controller Extended Gamepad":S.SwitchPro,"Xbox Wireless Controller Extended Gamepad":S.XboxWireless,"DualSense Wireless Controller Extended Gamepad":S.PlaystationDualSense,"Wireless Controller Extended Gamepad":S.PlaystationDualSense,"54c-ce6-Wireless Controller":S.PlaystationDualSense,"45e-b13-Xbox Wireless Controller":S.XboxWireless,"Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)":S.SwitchPro,"Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 0ce6)":S.PlaystationDualSense,"Xbox Series X Controller (STANDARD GAMEPAD Vendor: 045e Product: 0b12)":S.XboxWireless}),ys={[S.SwitchPro]:_.Nintendo,[S.Xbox360]:_.Microsoft,[S.XboxWireless]:_.Microsoft,[S.PlaystationDualSense]:_.Sony,[S.PlaystationDualShock]:_.Sony,[S.PlaystationDualShock4]:_.Sony,[S.SteamDeck]:_.Valve,[S.Unknown]:_.Unknown},ws={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},bo={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},M={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},L={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},J={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class m{static getFirstMatch(t,n){const r=n.match(t);return r&&r.length>0&&r[1]||""}static getSecondMatch(t,n){const r=n.match(t);return r&&r.length>1&&r[2]||""}static matchAndReturnConst(t,n,r){if(t.test(n))return r}static getWindowsVersionName(t){switch(t){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(t){const n=t.split(".").splice(0,2).map(r=>parseInt(r,10)||0);if(n.push(0),n[0]===10)switch(n[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(t){const n=t.split(".").splice(0,2).map(r=>parseInt(r,10)||0);if(n.push(0),!(n[0]===1&&n[1]<5)){if(n[0]===1&&n[1]<6)return"Cupcake";if(n[0]===1&&n[1]>=6)return"Donut";if(n[0]===2&&n[1]<2)return"Eclair";if(n[0]===2&&n[1]===2)return"Froyo";if(n[0]===2&&n[1]>2)return"Gingerbread";if(n[0]===3)return"Honeycomb";if(n[0]===4&&n[1]<1)return"Ice Cream Sandwich";if(n[0]===4&&n[1]<4)return"Jelly Bean";if(n[0]===4&&n[1]>=4)return"KitKat";if(n[0]===5)return"Lollipop";if(n[0]===6)return"Marshmallow";if(n[0]===7)return"Nougat";if(n[0]===8)return"Oreo";if(n[0]===9)return"Pie"}}static getVersionPrecision(t){return t.split(".").length}static compareVersions(t,n,r=!1){const o=m.getVersionPrecision(t),i=m.getVersionPrecision(n);let a=Math.max(o,i),s=0;const u=m.map([t,n],c=>{const l=a-m.getVersionPrecision(c),p=c+new Array(l+1).join(".0");return m.map(p.split("."),f=>new Array(20-f.length).join("0")+f).reverse()});for(r&&(s=a-Math.min(o,i)),a-=1;a>=s;){if(u[0][a]>u[1][a])return 1;if(u[0][a]===u[1][a]){if(a===s)return 0;a-=1}else if(u[0][a]<u[1][a])return-1}}static map(t,n){const r=[];let o;if(Array.prototype.map)return Array.prototype.map.call(t,n);for(o=0;o<t.length;o+=1)r.push(n(t[o]));return r}static find(t,n){let r,o;if(Array.prototype.find)return Array.prototype.find.call(t,n);for(r=0,o=t.length;r<o;r+=1){const i=t[r];if(n(i,r))return i}}static assign(t,...n){const r=t;let o,i;if(Object.assign)return Object.assign(t,...n);for(o=0,i=n.length;o<i;o+=1){const a=n[o];typeof a=="object"&&a!==null&&Object.keys(a).forEach(u=>{r[u]=a[u]})}return t}static getBrowserAlias(t){return ws[t]}static getBrowserTypeByAlias(t){return bo[t]||""}}const N=/version\/(\d+(\.?_?\d+)+)/i,xs=[{test:[/googlebot/i],describe(e){const t={name:"Googlebot"},n=m.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||m.getFirstMatch(N,e);return n&&(t.version=n),t}},{test:[/opera/i],describe(e){const t={name:"Opera"},n=m.getFirstMatch(N,e)||m.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/opr\/|opios/i],describe(e){const t={name:"Opera"},n=m.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||m.getFirstMatch(N,e);return n&&(t.version=n),t}},{test:[/SamsungBrowser/i],describe(e){const t={name:"Samsung Internet for Android"},n=m.getFirstMatch(N,e)||m.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/Whale/i],describe(e){const t={name:"NAVER Whale Browser"},n=m.getFirstMatch(N,e)||m.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/MZBrowser/i],describe(e){const t={name:"MZ Browser"},n=m.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||m.getFirstMatch(N,e);return n&&(t.version=n),t}},{test:[/focus/i],describe(e){const t={name:"Focus"},n=m.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||m.getFirstMatch(N,e);return n&&(t.version=n),t}},{test:[/swing/i],describe(e){const t={name:"Swing"},n=m.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||m.getFirstMatch(N,e);return n&&(t.version=n),t}},{test:[/coast/i],describe(e){const t={name:"Opera Coast"},n=m.getFirstMatch(N,e)||m.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(e){const t={name:"Opera Touch"},n=m.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||m.getFirstMatch(N,e);return n&&(t.version=n),t}},{test:[/yabrowser/i],describe(e){const t={name:"Yandex Browser"},n=m.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||m.getFirstMatch(N,e);return n&&(t.version=n),t}},{test:[/ucbrowser/i],describe(e){const t={name:"UC Browser"},n=m.getFirstMatch(N,e)||m.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/Maxthon|mxios/i],describe(e){const t={name:"Maxthon"},n=m.getFirstMatch(N,e)||m.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/epiphany/i],describe(e){const t={name:"Epiphany"},n=m.getFirstMatch(N,e)||m.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/puffin/i],describe(e){const t={name:"Puffin"},n=m.getFirstMatch(N,e)||m.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/sleipnir/i],describe(e){const t={name:"Sleipnir"},n=m.getFirstMatch(N,e)||m.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/k-meleon/i],describe(e){const t={name:"K-Meleon"},n=m.getFirstMatch(N,e)||m.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/micromessenger/i],describe(e){const t={name:"WeChat"},n=m.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||m.getFirstMatch(N,e);return n&&(t.version=n),t}},{test:[/qqbrowser/i],describe(e){const t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},n=m.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||m.getFirstMatch(N,e);return n&&(t.version=n),t}},{test:[/msie|trident/i],describe(e){const t={name:"Internet Explorer"},n=m.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/\sedg\//i],describe(e){const t={name:"Microsoft Edge"},n=m.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/edg([ea]|ios)/i],describe(e){const t={name:"Microsoft Edge"},n=m.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/vivaldi/i],describe(e){const t={name:"Vivaldi"},n=m.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/seamonkey/i],describe(e){const t={name:"SeaMonkey"},n=m.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/sailfish/i],describe(e){const t={name:"Sailfish"},n=m.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return n&&(t.version=n),t}},{test:[/silk/i],describe(e){const t={name:"Amazon Silk"},n=m.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/phantom/i],describe(e){const t={name:"PhantomJS"},n=m.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/slimerjs/i],describe(e){const t={name:"SlimerJS"},n=m.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){const t={name:"BlackBerry"},n=m.getFirstMatch(N,e)||m.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/(web|hpw)[o0]s/i],describe(e){const t={name:"WebOS Browser"},n=m.getFirstMatch(N,e)||m.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/bada/i],describe(e){const t={name:"Bada"},n=m.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/tizen/i],describe(e){const t={name:"Tizen"},n=m.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||m.getFirstMatch(N,e);return n&&(t.version=n),t}},{test:[/qupzilla/i],describe(e){const t={name:"QupZilla"},n=m.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||m.getFirstMatch(N,e);return n&&(t.version=n),t}},{test:[/firefox|iceweasel|fxios/i],describe(e){const t={name:"Firefox"},n=m.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/electron/i],describe(e){const t={name:"Electron"},n=m.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/MiuiBrowser/i],describe(e){const t={name:"Miui"},n=m.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/chromium/i],describe(e){const t={name:"Chromium"},n=m.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||m.getFirstMatch(N,e);return n&&(t.version=n),t}},{test:[/chrome|crios|crmo/i],describe(e){const t={name:"Chrome"},n=m.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/GSA/i],describe(e){const t={name:"Google Search"},n=m.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test(e){const t=!e.test(/like android/i),n=e.test(/android/i);return t&&n},describe(e){const t={name:"Android Browser"},n=m.getFirstMatch(N,e);return n&&(t.version=n),t}},{test:[/playstation 4/i],describe(e){const t={name:"PlayStation 4"},n=m.getFirstMatch(N,e);return n&&(t.version=n),t}},{test:[/safari|applewebkit/i],describe(e){const t={name:"Safari"},n=m.getFirstMatch(N,e);return n&&(t.version=n),t}},{test:[/.*/i],describe(e){const t=/^(.*)\/(.*) /,n=/^(.*)\/(.*)[ \t]\((.*)/,o=e.search("\\(")!==-1?n:t;return{name:m.getFirstMatch(o,e),version:m.getSecondMatch(o,e)}}}],$s=[{test:[/Roku\/DVP/],describe(e){const t=m.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:L.Roku,version:t}}},{test:[/windows phone/i],describe(e){const t=m.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:L.WindowsPhone,version:t}}},{test:[/windows /i],describe(e){const t=m.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),n=m.getWindowsVersionName(t);return{name:L.Windows,version:t,versionName:n}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(e){const t={name:L.iOS},n=m.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return n&&(t.version=n),t}},{test:[/macintosh/i],describe(e){const t=m.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),n=m.getMacOSVersionName(t),r={name:L.MacOS,version:t};return n&&(r.versionName=n),r}},{test:[/(ipod|iphone|ipad)/i],describe(e){const t=m.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:L.iOS,version:t}}},{test(e){const t=!e.test(/like android/i),n=e.test(/android/i);return t&&n},describe(e){const t=m.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),n=m.getAndroidVersionName(t),r={name:L.Android,version:t};return n&&(r.versionName=n),r}},{test:[/(web|hpw)[o0]s/i],describe(e){const t=m.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),n={name:L.WebOS};return t&&t.length&&(n.version=t),n}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){const t=m.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||m.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||m.getFirstMatch(/\bbb(\d+)/i,e);return{name:L.BlackBerry,version:t}}},{test:[/bada/i],describe(e){const t=m.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:L.Bada,version:t}}},{test:[/tizen/i],describe(e){const t=m.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:L.Tizen,version:t}}},{test:[/linux/i],describe(){return{name:L.Linux}}},{test:[/CrOS/],describe(){return{name:L.ChromeOS}}},{test:[/PlayStation 4/],describe(e){const t=m.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:L.PlayStation4,version:t}}}],Ts=[{test:[/googlebot/i],describe(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe(e){const t=m.getFirstMatch(/(can-l01)/i,e)&&"Nova",n={type:M.mobile,vendor:"Huawei"};return t&&(n.model=t),n}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe(){return{type:M.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe(){return{type:M.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(){return{type:M.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe(){return{type:M.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe(){return{type:M.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe(){return{type:M.tablet}}},{test(e){const t=e.test(/ipod|iphone/i),n=e.test(/like (ipod|iphone)/i);return t&&!n},describe(e){const t=m.getFirstMatch(/(ipod|iphone)/i,e);return{type:M.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe(){return{type:M.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe(){return{type:M.mobile}}},{test(e){return e.getBrowserName(!0)==="blackberry"},describe(){return{type:M.mobile,vendor:"BlackBerry"}}},{test(e){return e.getBrowserName(!0)==="bada"},describe(){return{type:M.mobile}}},{test(e){return e.getBrowserName()==="windows phone"},describe(){return{type:M.mobile,vendor:"Microsoft"}}},{test(e){const t=Number(String(e.getOSVersion()).split(".")[0]);return e.getOSName(!0)==="android"&&t>=3},describe(){return{type:M.tablet}}},{test(e){return e.getOSName(!0)==="android"},describe(){return{type:M.mobile}}},{test(e){return e.getOSName(!0)==="macos"},describe(){return{type:M.desktop,vendor:"Apple"}}},{test(e){return e.getOSName(!0)==="windows"},describe(){return{type:M.desktop}}},{test(e){return e.getOSName(!0)==="linux"},describe(){return{type:M.desktop}}},{test(e){return e.getOSName(!0)==="playstation 4"},describe(){return{type:M.tv}}},{test(e){return e.getOSName(!0)==="roku"},describe(){return{type:M.tv}}}],Ss=[{test(e){return e.getBrowserName(!0)==="microsoft edge"},describe(e){if(/\sedg\//i.test(e))return{name:J.Blink};const n=m.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:J.EdgeHTML,version:n}}},{test:[/trident/i],describe(e){const t={name:J.Trident},n=m.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test(e){return e.test(/presto/i)},describe(e){const t={name:J.Presto},n=m.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test(e){const t=e.test(/gecko/i),n=e.test(/like gecko/i);return t&&!n},describe(e){const t={name:J.Gecko},n=m.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/(apple)?webkit\/537\.36/i],describe(){return{name:J.Blink}}},{test:[/(apple)?webkit/i],describe(e){const t={name:J.WebKit},n=m.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}}];class or{constructor(t,n=!1){if(t==null||t==="")throw new Error("UserAgent parameter can't be empty");this._ua=t,this.parsedResult={},n!==!0&&this.parse()}getUA(){return this._ua}test(t){return t.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const t=m.find(xs,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(r=>this.test(r));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(t){return t?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const t=m.find($s,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(r=>this.test(r));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os}getOSName(t){const{name:n}=this.getOS();return t?String(n).toLowerCase()||"":n||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(t=!1){const{type:n}=this.getPlatform();return t?String(n).toLowerCase()||"":n||""}parsePlatform(){this.parsedResult.platform={};const t=m.find(Ts,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(r=>this.test(r));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(t){return t?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const t=m.find(Ss,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(r=>this.test(r));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return m.assign({},this.parsedResult)}satisfies(t){const n={};let r=0;const o={};let i=0;if(Object.keys(t).forEach(s=>{const u=t[s];typeof u=="string"?(o[s]=u,i+=1):typeof u=="object"&&(n[s]=u,r+=1)}),r>0){const s=Object.keys(n),u=m.find(s,l=>this.isOS(l));if(u){const l=this.satisfies(n[u]);if(l!==void 0)return l}const c=m.find(s,l=>this.isPlatform(l));if(c){const l=this.satisfies(n[c]);if(l!==void 0)return l}}if(i>0){const s=Object.keys(o),u=m.find(s,c=>this.isBrowser(c,!0));if(u!==void 0)return this.compareVersion(o[u])}}isBrowser(t,n=!1){const r=this.getBrowserName().toLowerCase();let o=t.toLowerCase();const i=m.getBrowserTypeByAlias(o);return n&&i&&(o=i.toLowerCase()),o===r}compareVersion(t){let n=[0],r=t,o=!1;const i=this.getBrowserVersion();if(typeof i=="string")return t[0]===">"||t[0]==="<"?(r=t.substr(1),t[1]==="="?(o=!0,r=t.substr(2)):n=[],t[0]===">"?n.push(1):n.push(-1)):t[0]==="="?r=t.substr(1):t[0]==="~"&&(o=!0,r=t.substr(1)),n.indexOf(m.compareVersions(i,r,o))>-1}isOS(t){return this.getOSName(!0)===String(t).toLowerCase()}isPlatform(t){return this.getPlatformType(!0)===String(t).toLowerCase()}isEngine(t){return this.getEngineName(!0)===String(t).toLowerCase()}is(t,n=!1){return this.isBrowser(t,n)||this.isOS(t)||this.isPlatform(t)}some(t=[]){return t.some(n=>this.is(n))}}/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */class Es{static getParser(t,n=!1){if(typeof t!="string")throw new Error("UserAgent should be a string");return new or(t,n)}static parse(t){return new or(t).getResult()}static get BROWSER_MAP(){return bo}static get ENGINE_MAP(){return J}static get OS_MAP(){return L}static get PLATFORMS_MAP(){return M}}const Ze=Es.getParser(navigator.userAgent);function Ge(){return{browserVersion:Ze.getBrowserVersion(),browserName:Ze.getBrowserName(),osName:Ze.getOSName(),osVersion:Ze.getOSVersion()}}function Ns(e,t){return!!e.find(n=>we(n,t))}function Yt({gamepad:e,layouts:t=gn,gamepadModelMap:n=Ve,systemVersions:r=Ge()}){const o=(ne(e,"string")?e:e==null?void 0:e.deviceName)||"",{gamepadModel:i}=de({gamepad:o,gamepadModelMap:n}),a=t.filter(c=>c.gamepadModels.includes(i));if(a.length<2)return a[0];const s=a.filter(c=>c.systemVersions.some(l=>r.osName.toLowerCase()===l.osName.toLowerCase()));if(s.length===1)return s[0];if(!s.length)return a[0];const u=s.filter(c=>c.systemVersions.some(l=>r.browserName.toLowerCase()===l.browserName.toLowerCase()));return u.length===1||u.length?u[0]:s[0]}function de({gamepad:e,gamepadModelMap:t=Ve,gamepadBrandMap:n=ys}){const r=(typeof e=="string"?e:e==null?void 0:e.deviceName)||"",o=t[r.toLowerCase()]||S.Unknown;return{gamepadModel:o,gamepadBrand:n[o]||_.Unknown,gamepadModelDescription:vs[o]||""}}function Ms(e){const{gamepadModel:t}=de({gamepad:e.deviceName});return{inputMappings:{},gamepadModels:[t],systemVersions:[Ge()],notes:void 0}}const mt=yt()("modal-close"),vn=yt()("selected-gamepad-index-change"),_s="modulepreload",ks=function(e){return"/gamepad-type/"+e},ir={},Cs=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=ks(i),i in ir)return;ir[i]=!0;const a=i.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(!!r)for(let l=o.length-1;l>=0;l--){const p=o[l];if(p.href===i&&(!a||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":_s,a||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),a)return new Promise((l,p)=>{c.addEventListener("load",l),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})};async function As({dsn:e,releaseEnv:t,releaseName:n,sentryConfigOverrides:r,createUniversalContext:o,isDev:i}){const a=await Cs(()=>import("./index-1697b00f.js"),[]);return await is({dsn:e,releaseEnv:t,releaseName:n,sentryConfigOverrides:r,createUniversalContext:o,sentryDep:a,executionEnv:Fe.Browser,isDev:i}),a}const Ls={releaseName:"8e0c5bc336620b62cf412ccece72b2bae5115a00"},ar=window.location.hostname==="localhost";function Bs(){As({dsn:"https://5b5d58b459305bfcd595aabfd356136c@o4506447710060544.ingest.sentry.io/4506479530737664",isDev:ar,releaseEnv:ar?"dev":"prod",releaseName:Ls.releaseName})}function sr({layouts:e,models:t},n){const r=e.filter(i=>{const a=!!gn.find(u=>we(u,i)),s=n?!!n.layouts.find(u=>we(u,i)):!1;return!a&&!s}),o=Er(t,(i,a)=>{const s=!(i in Ve)||Ve[i]!==a;return(n?!(i in n.models)||n.models[i]!==a:!0)&&s});return{layouts:r,models:o}}const Ps={currentInputs:{"button-0":{deviceKey:3,deviceName:"Pro Controller Extended Gamepad",deviceType:x.Gamepad,details:{inputType:d.Button,inputName:"button-0",value:1},inputName:"button-0",inputValue:1},"axe-0":{deviceKey:3,deviceName:"Pro Controller Extended Gamepad",deviceType:x.Gamepad,details:{inputType:d.Axe,inputName:"axe-0",value:0},inputName:"axe-0",inputValue:0},"axe-1":{deviceKey:3,deviceName:"Pro Controller Extended Gamepad",deviceType:x.Gamepad,details:{inputType:d.Axe,inputName:"axe-1",value:0},inputName:"axe-1",inputValue:0}},deviceDetails:{inputsByName:{"axe-0":{inputName:"axe-0",inputType:d.Axe,value:0},"axe-1":{inputName:"axe-1",inputType:d.Axe,value:0},"axe-2":{inputName:"axe-2",inputType:d.Axe,value:0},"axe-3":{inputName:"axe-3",inputType:d.Axe,value:0},"button-0":{inputName:"button-0",inputType:d.Button,value:1},"button-1":{inputName:"button-1",value:0,inputType:d.Button},"button-2":{inputName:"button-2",value:0,inputType:d.Button},"button-3":{inputName:"button-3",value:0,inputType:d.Button},"button-4":{inputName:"button-4",value:0,inputType:d.Button},"button-5":{inputName:"button-5",value:0,inputType:d.Button},"button-6":{inputName:"button-6",value:0,inputType:d.Button},"button-7":{inputName:"button-7",value:0,inputType:d.Button},"button-8":{inputName:"button-8",value:0,inputType:d.Button},"button-9":{inputName:"button-9",value:0,inputType:d.Button},"button-10":{inputName:"button-10",value:0,inputType:d.Button},"button-11":{inputName:"button-11",value:0,inputType:d.Button},"button-12":{inputName:"button-12",value:0,inputType:d.Button},"button-13":{inputName:"button-13",value:0,inputType:d.Button},"button-14":{inputName:"button-14",value:0,inputType:d.Button},"button-15":{inputName:"button-15",value:0,inputType:d.Button},"button-16":{inputName:"button-16",value:0,inputType:d.Button}},axes:[{inputName:"axe-0",inputType:d.Axe,value:0},{inputName:"axe-1",inputType:d.Axe,value:0},{inputName:"axe-2",inputType:d.Axe,value:0},{inputName:"axe-3",inputType:d.Axe,value:0}],buttons:[{inputName:"button-0",inputType:d.Button,value:1},{inputName:"button-1",value:0,inputType:d.Button},{inputName:"button-2",value:0,inputType:d.Button},{inputName:"button-3",value:0,inputType:d.Button},{inputName:"button-4",value:0,inputType:d.Button},{inputName:"button-5",value:0,inputType:d.Button},{inputName:"button-6",value:0,inputType:d.Button},{inputName:"button-7",value:0,inputType:d.Button},{inputName:"button-8",value:0,inputType:d.Button},{inputName:"button-9",value:0,inputType:d.Button},{inputName:"button-10",value:0,inputType:d.Button},{inputName:"button-11",value:0,inputType:d.Button},{inputName:"button-12",value:0,inputType:d.Button},{inputName:"button-13",value:0,inputType:d.Button},{inputName:"button-14",value:0,inputType:d.Button},{inputName:"button-15",value:0,inputType:d.Button},{inputName:"button-16",value:0,inputType:d.Button}],isConnected:!0,gamepadName:"Pro Controller Extended Gamepad",index:0,mapping:"standard",serialized:!0,timestamp:23640.422582875},deviceName:"Pro Controller Extended Gamepad",deviceKey:3,deviceType:x.Gamepad},Is={currentInputs:{"button-0":{deviceKey:3,deviceName:"Xbox Wireless Controller Extended Gamepad",deviceType:x.Gamepad,details:{inputType:d.Button,inputName:"button-0",value:1},inputName:"button-0",inputValue:1},"axe-0":{deviceKey:3,deviceName:"Xbox Wireless Controller Extended Gamepad",deviceType:x.Gamepad,details:{inputType:d.Axe,inputName:"axe-0",value:0},inputName:"axe-0",inputValue:0},"axe-1":{deviceKey:3,deviceName:"Xbox Wireless Controller Extended Gamepad",deviceType:x.Gamepad,details:{inputType:d.Axe,inputName:"axe-1",value:0},inputName:"axe-1",inputValue:0}},deviceDetails:{inputsByName:{"axe-0":{inputName:"axe-0",inputType:d.Axe,value:0},"axe-1":{inputName:"axe-1",inputType:d.Axe,value:0},"axe-2":{inputName:"axe-2",inputType:d.Axe,value:0},"axe-3":{inputName:"axe-3",inputType:d.Axe,value:0},"button-0":{inputName:"button-0",inputType:d.Button,value:1},"button-1":{inputName:"button-1",value:0,inputType:d.Button},"button-2":{inputName:"button-2",value:0,inputType:d.Button},"button-3":{inputName:"button-3",value:0,inputType:d.Button},"button-4":{inputName:"button-4",value:0,inputType:d.Button},"button-5":{inputName:"button-5",value:0,inputType:d.Button},"button-6":{inputName:"button-6",value:0,inputType:d.Button},"button-7":{inputName:"button-7",value:0,inputType:d.Button},"button-8":{inputName:"button-8",value:0,inputType:d.Button},"button-9":{inputName:"button-9",value:0,inputType:d.Button},"button-10":{inputName:"button-10",value:0,inputType:d.Button},"button-11":{inputName:"button-11",value:0,inputType:d.Button},"button-12":{inputName:"button-12",value:0,inputType:d.Button},"button-13":{inputName:"button-13",value:0,inputType:d.Button},"button-14":{inputName:"button-14",value:0,inputType:d.Button},"button-15":{inputName:"button-15",value:0,inputType:d.Button},"button-16":{inputName:"button-16",value:0,inputType:d.Button}},axes:[{inputName:"axe-0",inputType:d.Axe,value:0},{inputName:"axe-1",inputType:d.Axe,value:0},{inputName:"axe-2",inputType:d.Axe,value:0},{inputName:"axe-3",inputType:d.Axe,value:0}],buttons:[{inputName:"button-0",inputType:d.Button,value:1},{inputName:"button-1",value:0,inputType:d.Button},{inputName:"button-2",value:0,inputType:d.Button},{inputName:"button-3",value:0,inputType:d.Button},{inputName:"button-4",value:0,inputType:d.Button},{inputName:"button-5",value:0,inputType:d.Button},{inputName:"button-6",value:0,inputType:d.Button},{inputName:"button-7",value:0,inputType:d.Button},{inputName:"button-8",value:0,inputType:d.Button},{inputName:"button-9",value:0,inputType:d.Button},{inputName:"button-10",value:0,inputType:d.Button},{inputName:"button-11",value:0,inputType:d.Button},{inputName:"button-12",value:0,inputType:d.Button},{inputName:"button-13",value:0,inputType:d.Button},{inputName:"button-14",value:0,inputType:d.Button},{inputName:"button-15",value:0,inputType:d.Button},{inputName:"button-16",value:0,inputType:d.Button}],isConnected:!0,gamepadName:"Xbox Wireless Controller Extended Gamepad",index:0,mapping:"standard",serialized:!0,timestamp:23640.422582875},deviceName:"Xbox Wireless Controller Extended Gamepad",deviceKey:3,deviceType:x.Gamepad},Rs={currentInputs:{"button-0":{deviceKey:3,deviceName:"DualSense Wireless Controller Extended Gamepad",deviceType:x.Gamepad,details:{inputType:d.Button,inputName:"button-0",value:1},inputName:"button-0",inputValue:1},"axe-0":{deviceKey:3,deviceName:"DualSense Wireless Controller Extended Gamepad",deviceType:x.Gamepad,details:{inputType:d.Axe,inputName:"axe-0",value:0},inputName:"axe-0",inputValue:0},"axe-1":{deviceKey:3,deviceName:"DualSense Wireless Controller Extended Gamepad",deviceType:x.Gamepad,details:{inputType:d.Axe,inputName:"axe-1",value:0},inputName:"axe-1",inputValue:0}},deviceDetails:{inputsByName:{"axe-0":{inputName:"axe-0",inputType:d.Axe,value:0},"axe-1":{inputName:"axe-1",inputType:d.Axe,value:0},"axe-2":{inputName:"axe-2",inputType:d.Axe,value:0},"axe-3":{inputName:"axe-3",inputType:d.Axe,value:0},"button-0":{inputName:"button-0",inputType:d.Button,value:1},"button-1":{inputName:"button-1",value:0,inputType:d.Button},"button-2":{inputName:"button-2",value:0,inputType:d.Button},"button-3":{inputName:"button-3",value:0,inputType:d.Button},"button-4":{inputName:"button-4",value:0,inputType:d.Button},"button-5":{inputName:"button-5",value:0,inputType:d.Button},"button-6":{inputName:"button-6",value:0,inputType:d.Button},"button-7":{inputName:"button-7",value:0,inputType:d.Button},"button-8":{inputName:"button-8",value:0,inputType:d.Button},"button-9":{inputName:"button-9",value:0,inputType:d.Button},"button-10":{inputName:"button-10",value:0,inputType:d.Button},"button-11":{inputName:"button-11",value:0,inputType:d.Button},"button-12":{inputName:"button-12",value:0,inputType:d.Button},"button-13":{inputName:"button-13",value:0,inputType:d.Button},"button-14":{inputName:"button-14",value:0,inputType:d.Button},"button-15":{inputName:"button-15",value:0,inputType:d.Button},"button-16":{inputName:"button-16",value:0,inputType:d.Button}},axes:[{inputName:"axe-0",inputType:d.Axe,value:0},{inputName:"axe-1",inputType:d.Axe,value:0},{inputName:"axe-2",inputType:d.Axe,value:0},{inputName:"axe-3",inputType:d.Axe,value:0}],buttons:[{inputName:"button-0",inputType:d.Button,value:1},{inputName:"button-1",value:0,inputType:d.Button},{inputName:"button-2",value:0,inputType:d.Button},{inputName:"button-3",value:0,inputType:d.Button},{inputName:"button-4",value:0,inputType:d.Button},{inputName:"button-5",value:0,inputType:d.Button},{inputName:"button-6",value:0,inputType:d.Button},{inputName:"button-7",value:0,inputType:d.Button},{inputName:"button-8",value:0,inputType:d.Button},{inputName:"button-9",value:0,inputType:d.Button},{inputName:"button-10",value:0,inputType:d.Button},{inputName:"button-11",value:0,inputType:d.Button},{inputName:"button-12",value:0,inputType:d.Button},{inputName:"button-13",value:0,inputType:d.Button},{inputName:"button-14",value:0,inputType:d.Button},{inputName:"button-15",value:0,inputType:d.Button},{inputName:"button-16",value:0,inputType:d.Button}],isConnected:!0,gamepadName:"DualSense Wireless Controller Extended Gamepad",index:0,mapping:"standard",serialized:!0,timestamp:23640.422582875},deviceName:"DualSense Wireless Controller Extended Gamepad",deviceKey:3,deviceType:x.Gamepad},Ds=[Ps,Is,Rs];function Os(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var $e=Os();function Hs(){try{if(!$e||!$e.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function bn(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if(i.name!=="TypeError")throw i;for(var n=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,r=new n,o=0;o<e.length;o+=1)r.append(e[o]);return r.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const b=Promise;function E(e,t){t&&e.then(function(n){t(null,n)},function(n){t(n)})}function me(e,t,n){typeof t=="function"&&e.then(t),typeof n=="function"&&e.catch(n)}function Y(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function yn(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const Zt="local-forage-detect-blob-support";let Je;const O={},Fs=Object.prototype.toString,Xe="readonly",St="readwrite";function Vs(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),o=0;o<t;o++)r[o]=e.charCodeAt(o);return n}function Gs(e){return new b(function(t){var n=e.transaction(Zt,St),r=bn([""]);n.objectStore(Zt).put(r,"key"),n.onabort=function(o){o.preventDefault(),o.stopPropagation(),t(!1)},n.oncomplete=function(){var o=navigator.userAgent.match(/Chrome\/(\d+)/),i=navigator.userAgent.match(/Edge\//);t(i||!o||parseInt(o[1],10)>=43)}}).catch(function(){return!1})}function zs(e){return typeof Je=="boolean"?b.resolve(Je):Gs(e).then(function(t){return Je=t,Je})}function ht(e){var t=O[e.name],n={};n.promise=new b(function(r,o){n.resolve=r,n.reject=o}),t.deferredOperations.push(n),t.dbReady?t.dbReady=t.dbReady.then(function(){return n.promise}):t.dbReady=n.promise}function Jt(e){var t=O[e.name],n=t.deferredOperations.pop();if(n)return n.resolve(),n.promise}function Qt(e,t){var n=O[e.name],r=n.deferredOperations.pop();if(r)return r.reject(t),r.promise}function yo(e,t){return new b(function(n,r){if(O[e.name]=O[e.name]||To(),e.db)if(t)ht(e),e.db.close();else return n(e.db);var o=[e.name];t&&o.push(e.version);var i=$e.open.apply($e,o);t&&(i.onupgradeneeded=function(a){var s=i.result;try{s.createObjectStore(e.storeName),a.oldVersion<=1&&s.createObjectStore(Zt)}catch(u){if(u.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+a.oldVersion+" to version "+a.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw u}}),i.onerror=function(a){a.preventDefault(),r(i.error)},i.onsuccess=function(){var a=i.result;a.onversionchange=function(s){s.target.close()},n(a),Jt(e)}})}function wn(e){return yo(e,!1)}function xn(e){return yo(e,!0)}function wo(e,t){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,o=e.version>e.db.version;if(r&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||n){if(n){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function Us(e){return new b(function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(o){var i=btoa(o.target.result||"");t({__local_forage_encoded_blob:!0,data:i,type:e.type})},r.readAsBinaryString(e)})}function xo(e){var t=Vs(atob(e.data));return bn([t],{type:e.type})}function $o(e){return e&&e.__local_forage_encoded_blob}function Ws(e){var t=this,n=t._initReady().then(function(){var r=O[t._dbInfo.name];if(r&&r.dbReady)return r.dbReady});return me(n,e,e),n}function js(e){ht(e);for(var t=O[e.name],n=t.forages,r=0;r<n.length;r++){const o=n[r];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,wn(e).then(o=>(e.db=o,wo(e)?xn(e):o)).then(o=>{e.db=t.db=o;for(var i=0;i<n.length;i++)n[i]._dbInfo.db=o}).catch(o=>{throw Qt(e,o),o})}function Z(e,t,n,r){r===void 0&&(r=1);try{var o=e.db.transaction(e.storeName,t);n(null,o)}catch(i){if(r>0&&(!e.db||i.name==="InvalidStateError"||i.name==="NotFoundError"))return b.resolve().then(()=>{if(!e.db||i.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),xn(e)}).then(()=>js(e).then(function(){Z(e,t,n,r-1)})).catch(n);n(i)}}function To(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Ks(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=e[r];var o=O[n.name];o||(o=To(),O[n.name]=o),o.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=Ws);var i=[];function a(){return b.resolve()}for(var s=0;s<o.forages.length;s++){var u=o.forages[s];u!==t&&i.push(u._initReady().catch(a))}var c=o.forages.slice(0);return b.all(i).then(function(){return n.db=o.db,wn(n)}).then(function(l){return n.db=l,wo(n,t._defaultConfig.version)?xn(n):l}).then(function(l){n.db=o.db=l,t._dbInfo=n;for(var p=0;p<c.length;p++){var f=c[p];f!==t&&(f._dbInfo.db=n.db,f._dbInfo.version=n.version)}})}function Xs(e,t){var n=this;e=Y(e);var r=new b(function(o,i){n.ready().then(function(){Z(n._dbInfo,Xe,function(a,s){if(a)return i(a);try{var u=s.objectStore(n._dbInfo.storeName),c=u.get(e);c.onsuccess=function(){var l=c.result;l===void 0&&(l=null),$o(l)&&(l=xo(l)),o(l)},c.onerror=function(){i(c.error)}}catch(l){i(l)}})}).catch(i)});return E(r,t),r}function qs(e,t){var n=this,r=new b(function(o,i){n.ready().then(function(){Z(n._dbInfo,Xe,function(a,s){if(a)return i(a);try{var u=s.objectStore(n._dbInfo.storeName),c=u.openCursor(),l=1;c.onsuccess=function(){var p=c.result;if(p){var f=p.value;$o(f)&&(f=xo(f));var g=e(f,p.key,l++);g!==void 0?o(g):p.continue()}else o()},c.onerror=function(){i(c.error)}}catch(p){i(p)}})}).catch(i)});return E(r,t),r}function Ys(e,t,n){var r=this;e=Y(e);var o=new b(function(i,a){var s;r.ready().then(function(){return s=r._dbInfo,Fs.call(t)==="[object Blob]"?zs(s.db).then(function(u){return u?t:Us(t)}):t}).then(function(u){Z(r._dbInfo,St,function(c,l){if(c)return a(c);try{var p=l.objectStore(r._dbInfo.storeName);u===null&&(u=void 0);var f=p.put(u,e);l.oncomplete=function(){u===void 0&&(u=null),i(u)},l.onabort=l.onerror=function(){var g=f.error?f.error:f.transaction.error;a(g)}}catch(g){a(g)}})}).catch(a)});return E(o,n),o}function Zs(e,t){var n=this;e=Y(e);var r=new b(function(o,i){n.ready().then(function(){Z(n._dbInfo,St,function(a,s){if(a)return i(a);try{var u=s.objectStore(n._dbInfo.storeName),c=u.delete(e);s.oncomplete=function(){o()},s.onerror=function(){i(c.error)},s.onabort=function(){var l=c.error?c.error:c.transaction.error;i(l)}}catch(l){i(l)}})}).catch(i)});return E(r,t),r}function Js(e){var t=this,n=new b(function(r,o){t.ready().then(function(){Z(t._dbInfo,St,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),u=s.clear();a.oncomplete=function(){r()},a.onabort=a.onerror=function(){var c=u.error?u.error:u.transaction.error;o(c)}}catch(c){o(c)}})}).catch(o)});return E(n,e),n}function Qs(e){var t=this,n=new b(function(r,o){t.ready().then(function(){Z(t._dbInfo,Xe,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),u=s.count();u.onsuccess=function(){r(u.result)},u.onerror=function(){o(u.error)}}catch(c){o(c)}})}).catch(o)});return E(n,e),n}function eu(e,t){var n=this,r=new b(function(o,i){if(e<0){o(null);return}n.ready().then(function(){Z(n._dbInfo,Xe,function(a,s){if(a)return i(a);try{var u=s.objectStore(n._dbInfo.storeName),c=!1,l=u.openKeyCursor();l.onsuccess=function(){var p=l.result;if(!p){o(null);return}e===0||c?o(p.key):(c=!0,p.advance(e))},l.onerror=function(){i(l.error)}}catch(p){i(p)}})}).catch(i)});return E(r,t),r}function tu(e){var t=this,n=new b(function(r,o){t.ready().then(function(){Z(t._dbInfo,Xe,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),u=s.openKeyCursor(),c=[];u.onsuccess=function(){var l=u.result;if(!l){r(c);return}c.push(l.key),l.continue()},u.onerror=function(){o(u.error)}}catch(l){o(l)}})}).catch(o)});return E(n,e),n}function nu(e,t){t=yn.apply(this,arguments);var n=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r=this,o;if(!e.name)o=b.reject("Invalid arguments");else{const a=e.name===n.name&&r._dbInfo.db?b.resolve(r._dbInfo.db):wn(e).then(s=>{const u=O[e.name],c=u.forages;u.db=s;for(var l=0;l<c.length;l++)c[l]._dbInfo.db=s;return s});e.storeName?o=a.then(s=>{if(!s.objectStoreNames.contains(e.storeName))return;const u=s.version+1;ht(e);const c=O[e.name],l=c.forages;s.close();for(let f=0;f<l.length;f++){const g=l[f];g._dbInfo.db=null,g._dbInfo.version=u}return new b((f,g)=>{const h=$e.open(e.name,u);h.onerror=y=>{h.result.close(),g(y)},h.onupgradeneeded=()=>{var y=h.result;y.deleteObjectStore(e.storeName)},h.onsuccess=()=>{const y=h.result;y.close(),f(y)}}).then(f=>{c.db=f;for(let g=0;g<l.length;g++){const h=l[g];h._dbInfo.db=f,Jt(h._dbInfo)}}).catch(f=>{throw(Qt(e,f)||b.resolve()).catch(()=>{}),f})}):o=a.then(s=>{ht(e);const u=O[e.name],c=u.forages;s.close();for(var l=0;l<c.length;l++){const f=c[l];f._dbInfo.db=null}return new b((f,g)=>{var h=$e.deleteDatabase(e.name);h.onerror=()=>{const y=h.result;y&&y.close(),g(h.error)},h.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},h.onsuccess=()=>{const y=h.result;y&&y.close(),f(y)}}).then(f=>{u.db=f;for(var g=0;g<c.length;g++){const h=c[g];Jt(h._dbInfo)}}).catch(f=>{throw(Qt(e,f)||b.resolve()).catch(()=>{}),f})})}return E(o,t),o}var ru={_driver:"asyncStorage",_initStorage:Ks,_support:Hs(),iterate:qs,getItem:Xs,setItem:Ys,removeItem:Zs,clear:Js,length:Qs,key:eu,keys:tu,dropInstance:nu};function ou(){return typeof openDatabase=="function"}var re="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",iu="~~local_forage_type~",ur=/^~~local_forage_type~([^~]+)~/,gt="__lfsc__:",en=gt.length,$n="arbf",tn="blob",So="si08",Eo="ui08",No="uic8",Mo="si16",_o="si32",ko="ur16",Co="ui32",Ao="fl32",Lo="fl64",cr=en+$n.length,lr=Object.prototype.toString;function Bo(e){var t=e.length*.75,n=e.length,r,o=0,i,a,s,u;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var c=new ArrayBuffer(t),l=new Uint8Array(c);for(r=0;r<n;r+=4)i=re.indexOf(e[r]),a=re.indexOf(e[r+1]),s=re.indexOf(e[r+2]),u=re.indexOf(e[r+3]),l[o++]=i<<2|a>>4,l[o++]=(a&15)<<4|s>>2,l[o++]=(s&3)<<6|u&63;return c}function nn(e){var t=new Uint8Array(e),n="",r;for(r=0;r<t.length;r+=3)n+=re[t[r]>>2],n+=re[(t[r]&3)<<4|t[r+1]>>4],n+=re[(t[r+1]&15)<<2|t[r+2]>>6],n+=re[t[r+2]&63];return t.length%3===2?n=n.substring(0,n.length-1)+"=":t.length%3===1&&(n=n.substring(0,n.length-2)+"=="),n}function au(e,t){var n="";if(e&&(n=lr.call(e)),e&&(n==="[object ArrayBuffer]"||e.buffer&&lr.call(e.buffer)==="[object ArrayBuffer]")){var r,o=gt;e instanceof ArrayBuffer?(r=e,o+=$n):(r=e.buffer,n==="[object Int8Array]"?o+=So:n==="[object Uint8Array]"?o+=Eo:n==="[object Uint8ClampedArray]"?o+=No:n==="[object Int16Array]"?o+=Mo:n==="[object Uint16Array]"?o+=ko:n==="[object Int32Array]"?o+=_o:n==="[object Uint32Array]"?o+=Co:n==="[object Float32Array]"?o+=Ao:n==="[object Float64Array]"?o+=Lo:t(new Error("Failed to get type for BinaryArray"))),t(o+nn(r))}else if(n==="[object Blob]"){var i=new FileReader;i.onload=function(){var a=iu+e.type+"~"+nn(this.result);t(gt+tn+a)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(a){console.error("Couldn't convert value into a JSON string: ",e),t(null,a)}}function su(e){if(e.substring(0,en)!==gt)return JSON.parse(e);var t=e.substring(cr),n=e.substring(en,cr),r;if(n===tn&&ur.test(t)){var o=t.match(ur);r=o[1],t=t.substring(o[0].length)}var i=Bo(t);switch(n){case $n:return i;case tn:return bn([i],{type:r});case So:return new Int8Array(i);case Eo:return new Uint8Array(i);case No:return new Uint8ClampedArray(i);case Mo:return new Int16Array(i);case ko:return new Uint16Array(i);case _o:return new Int32Array(i);case Co:return new Uint32Array(i);case Ao:return new Float32Array(i);case Lo:return new Float64Array(i);default:throw new Error("Unkown type: "+n)}}var Tn={serialize:au,deserialize:su,stringToBuffer:Bo,bufferToString:nn};function Po(e,t,n,r){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],n,r)}function uu(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=typeof e[r]!="string"?e[r].toString():e[r];var o=new b(function(i,a){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(s){return a(s)}n.db.transaction(function(s){Po(s,n,function(){t._dbInfo=n,i()},function(u,c){a(c)})},a)});return n.serializer=Tn,o}function ie(e,t,n,r,o,i){e.executeSql(n,r,o,function(a,s){s.code===s.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(u,c){c.rows.length?i(u,s):Po(u,t,function(){u.executeSql(n,r,o,i)},i)},i):i(a,s)},i)}function cu(e,t){var n=this;e=Y(e);var r=new b(function(o,i){n.ready().then(function(){var a=n._dbInfo;a.db.transaction(function(s){ie(s,a,`SELECT * FROM ${a.storeName} WHERE key = ? LIMIT 1`,[e],function(u,c){var l=c.rows.length?c.rows.item(0).value:null;l&&(l=a.serializer.deserialize(l)),o(l)},function(u,c){i(c)})})}).catch(i)});return E(r,t),r}function lu(e,t){var n=this,r=new b(function(o,i){n.ready().then(function(){var a=n._dbInfo;a.db.transaction(function(s){ie(s,a,`SELECT * FROM ${a.storeName}`,[],function(u,c){for(var l=c.rows,p=l.length,f=0;f<p;f++){var g=l.item(f),h=g.value;if(h&&(h=a.serializer.deserialize(h)),h=e(h,g.key,f+1),h!==void 0){o(h);return}}o()},function(u,c){i(c)})})}).catch(i)});return E(r,t),r}function Io(e,t,n,r){var o=this;e=Y(e);var i=new b(function(a,s){o.ready().then(function(){t===void 0&&(t=null);var u=t,c=o._dbInfo;c.serializer.serialize(t,function(l,p){p?s(p):c.db.transaction(function(f){ie(f,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[e,l],function(){a(u)},function(g,h){s(h)})},function(f){if(f.code===f.QUOTA_ERR){if(r>0){a(Io.apply(o,[e,u,n,r-1]));return}s(f)}})})}).catch(s)});return E(i,n),i}function du(e,t,n){return Io.apply(this,[e,t,n,1])}function pu(e,t){var n=this;e=Y(e);var r=new b(function(o,i){n.ready().then(function(){var a=n._dbInfo;a.db.transaction(function(s){ie(s,a,`DELETE FROM ${a.storeName} WHERE key = ?`,[e],function(){o()},function(u,c){i(c)})})}).catch(i)});return E(r,t),r}function fu(e){var t=this,n=new b(function(r,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){ie(a,i,`DELETE FROM ${i.storeName}`,[],function(){r()},function(s,u){o(u)})})}).catch(o)});return E(n,e),n}function mu(e){var t=this,n=new b(function(r,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){ie(a,i,`SELECT COUNT(key) as c FROM ${i.storeName}`,[],function(s,u){var c=u.rows.item(0).c;r(c)},function(s,u){o(u)})})}).catch(o)});return E(n,e),n}function hu(e,t){var n=this,r=new b(function(o,i){n.ready().then(function(){var a=n._dbInfo;a.db.transaction(function(s){ie(s,a,`SELECT key FROM ${a.storeName} WHERE id = ? LIMIT 1`,[e+1],function(u,c){var l=c.rows.length?c.rows.item(0).key:null;o(l)},function(u,c){i(c)})})}).catch(i)});return E(r,t),r}function gu(e){var t=this,n=new b(function(r,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){ie(a,i,`SELECT key FROM ${i.storeName}`,[],function(s,u){for(var c=[],l=0;l<u.rows.length;l++)c.push(u.rows.item(l).key);r(c)},function(s,u){o(u)})})}).catch(o)});return E(n,e),n}function vu(e){return new b(function(t,n){e.transaction(function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(o,i){for(var a=[],s=0;s<i.rows.length;s++)a.push(i.rows.item(s).name);t({db:e,storeNames:a})},function(o,i){n(i)})},function(r){n(r)})})}function bu(e,t){t=yn.apply(this,arguments);var n=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r=this,o;return e.name?o=new b(function(i){var a;e.name===n.name?a=r._dbInfo.db:a=openDatabase(e.name,"","",0),e.storeName?i({db:a,storeNames:[e.storeName]}):i(vu(a))}).then(function(i){return new b(function(a,s){i.db.transaction(function(u){function c(g){return new b(function(h,y){u.executeSql(`DROP TABLE IF EXISTS ${g}`,[],function(){h()},function(C,V){y(V)})})}for(var l=[],p=0,f=i.storeNames.length;p<f;p++)l.push(c(i.storeNames[p]));b.all(l).then(function(){a()}).catch(function(g){s(g)})},function(u){s(u)})})}):o=b.reject("Invalid arguments"),E(o,t),o}var yu={_driver:"webSQLStorage",_initStorage:uu,_support:ou(),iterate:lu,getItem:cu,setItem:du,removeItem:pu,clear:fu,length:mu,key:hu,keys:gu,dropInstance:bu};function wu(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Ro(e,t){var n=e.name+"/";return e.storeName!==t.storeName&&(n+=e.storeName+"/"),n}function xu(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function $u(){return!xu()||localStorage.length>0}function Tu(e){var t=this,n={};if(e)for(var r in e)n[r]=e[r];return n.keyPrefix=Ro(e,t._defaultConfig),$u()?(t._dbInfo=n,n.serializer=Tn,b.resolve()):b.reject()}function Su(e){var t=this,n=t.ready().then(function(){for(var r=t._dbInfo.keyPrefix,o=localStorage.length-1;o>=0;o--){var i=localStorage.key(o);i.indexOf(r)===0&&localStorage.removeItem(i)}});return E(n,e),n}function Eu(e,t){var n=this;e=Y(e);var r=n.ready().then(function(){var o=n._dbInfo,i=localStorage.getItem(o.keyPrefix+e);return i&&(i=o.serializer.deserialize(i)),i});return E(r,t),r}function Nu(e,t){var n=this,r=n.ready().then(function(){for(var o=n._dbInfo,i=o.keyPrefix,a=i.length,s=localStorage.length,u=1,c=0;c<s;c++){var l=localStorage.key(c);if(l.indexOf(i)===0){var p=localStorage.getItem(l);if(p&&(p=o.serializer.deserialize(p)),p=e(p,l.substring(a),u++),p!==void 0)return p}}});return E(r,t),r}function Mu(e,t){var n=this,r=n.ready().then(function(){var o=n._dbInfo,i;try{i=localStorage.key(e)}catch{i=null}return i&&(i=i.substring(o.keyPrefix.length)),i});return E(r,t),r}function _u(e){var t=this,n=t.ready().then(function(){for(var r=t._dbInfo,o=localStorage.length,i=[],a=0;a<o;a++){var s=localStorage.key(a);s.indexOf(r.keyPrefix)===0&&i.push(s.substring(r.keyPrefix.length))}return i});return E(n,e),n}function ku(e){var t=this,n=t.keys().then(function(r){return r.length});return E(n,e),n}function Cu(e,t){var n=this;e=Y(e);var r=n.ready().then(function(){var o=n._dbInfo;localStorage.removeItem(o.keyPrefix+e)});return E(r,t),r}function Au(e,t,n){var r=this;e=Y(e);var o=r.ready().then(function(){t===void 0&&(t=null);var i=t;return new b(function(a,s){var u=r._dbInfo;u.serializer.serialize(t,function(c,l){if(l)s(l);else try{localStorage.setItem(u.keyPrefix+e,c),a(i)}catch(p){(p.name==="QuotaExceededError"||p.name==="NS_ERROR_DOM_QUOTA_REACHED")&&s(p),s(p)}})})});return E(o,n),o}function Lu(e,t){if(t=yn.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var n=this.config();e.name=e.name||n.name,e.storeName=e.storeName||n.storeName}var r=this,o;return e.name?o=new b(function(i){e.storeName?i(Ro(e,r._defaultConfig)):i(`${e.name}/`)}).then(function(i){for(var a=localStorage.length-1;a>=0;a--){var s=localStorage.key(a);s.indexOf(i)===0&&localStorage.removeItem(s)}}):o=b.reject("Invalid arguments"),E(o,t),o}var Bu={_driver:"localStorageWrapper",_initStorage:Tu,_support:wu(),iterate:Nu,getItem:Eu,setItem:Au,removeItem:Cu,clear:Su,length:ku,key:Mu,keys:_u,dropInstance:Lu};const Pu=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),Iu=(e,t)=>{const n=e.length;let r=0;for(;r<n;){if(Pu(e[r],t))return!0;r++}return!1},Do=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},_e={},dr={},he={INDEXEDDB:ru,WEBSQL:yu,LOCALSTORAGE:Bu},Ru=[he.INDEXEDDB._driver,he.WEBSQL._driver,he.LOCALSTORAGE._driver],at=["dropInstance"],Dt=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(at),Du={description:"",driver:Ru.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Ou(e,t){e[t]=function(){const n=arguments;return e.ready().then(function(){return e[t].apply(e,n)})}}function Ot(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let n in t)t.hasOwnProperty(n)&&(Do(t[n])?arguments[0][n]=t[n].slice():arguments[0][n]=t[n])}return arguments[0]}class Sn{constructor(t){for(let n in he)if(he.hasOwnProperty(n)){const r=he[n],o=r._driver;this[n]=o,_e[o]||this.defineDriver(r)}this._defaultConfig=Ot({},Du),this._config=Ot({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let n in t){if(n==="storeName"&&(t[n]=t[n].replace(/\W/g,"_")),n==="version"&&typeof t[n]!="number")return new Error("Database version must be a number.");this._config[n]=t[n]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,n,r){const o=new b(function(i,a){try{const s=t._driver,u=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){a(u);return}const c=Dt.concat("_initStorage");for(let f=0,g=c.length;f<g;f++){const h=c[f];if((!Iu(at,h)||t[h])&&typeof t[h]!="function"){a(u);return}}(function(){const f=function(g){return function(){const h=new Error(`Method ${g} is not implemented by the current driver`),y=b.reject(h);return E(y,arguments[arguments.length-1]),y}};for(let g=0,h=at.length;g<h;g++){const y=at[g];t[y]||(t[y]=f(y))}})();const p=function(f){_e[s]&&console.info(`Redefining LocalForage driver: ${s}`),_e[s]=t,dr[s]=f,i()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(p,a):p(!!t._support):p(!0)}catch(s){a(s)}});return me(o,n,r),o}driver(){return this._driver||null}getDriver(t,n,r){const o=_e[t]?b.resolve(_e[t]):b.reject(new Error("Driver not found."));return me(o,n,r),o}getSerializer(t){const n=b.resolve(Tn);return me(n,t),n}ready(t){const n=this,r=n._driverSet.then(()=>(n._ready===null&&(n._ready=n._initDriver()),n._ready));return me(r,t,t),r}setDriver(t,n,r){const o=this;Do(t)||(t=[t]);const i=this._getSupportedDrivers(t);function a(){o._config.driver=o.driver()}function s(l){return o._extend(l),a(),o._ready=o._initStorage(o._config),o._ready}function u(l){return function(){let p=0;function f(){for(;p<l.length;){let h=l[p];return p++,o._dbInfo=null,o._ready=null,o.getDriver(h).then(s).catch(f)}a();const g=new Error("No available storage method found.");return o._driverSet=b.reject(g),o._driverSet}return f()}}const c=this._driverSet!==null?this._driverSet.catch(()=>b.resolve()):b.resolve();return this._driverSet=c.then(()=>{const l=i[0];return o._dbInfo=null,o._ready=null,o.getDriver(l).then(p=>{o._driver=p._driver,a(),o._wrapLibraryMethodsWithReady(),o._initDriver=u(i)})}).catch(()=>{a();const l=new Error("No available storage method found.");return o._driverSet=b.reject(l),o._driverSet}),me(this._driverSet,n,r),this._driverSet}supports(t){return!!dr[t]}_extend(t){Ot(this,t)}_getSupportedDrivers(t){const n=[];for(let r=0,o=t.length;r<o;r++){const i=t[r];this.supports(i)&&n.push(i)}return n}_wrapLibraryMethodsWithReady(){for(let t=0,n=Dt.length;t<n;t++)Ou(this,Dt[t])}createInstance(t){return new Sn(t)}}const Hu=new Sn,Fu=Hu,pe=Fu.createInstance({name:"gamepad-type",storeName:"gamepad-type",description:"For storing user-entered gamepad information."}),Oo="saved-layouts",Ho="saved-types",Fo="submitted-changes";async function Vu(){await pe.clear()}async function pr(){return await pe.getItem(Oo)??gn}async function Gu(e){await pe.setItem(Oo,e)}async function fr(){const e=await pe.getItem(Ho)??{};return{...Ve,...e}}async function mr(e){await pe.setItem(Ho,e)}async function zu(){return await pe.getItem(Fo)||void 0}async function Uu(e){await pe.setItem(Fo,e)}const Qe=Ge();function Wu(e,t,n){return window.addEventListener(e,t,n),()=>{window.removeEventListener(e,t,n)}}const hr={[_.Microsoft]:"#aaff97",[_.Nintendo]:"#ffaaaa",[_.Sony]:"#86e2ff",[_.Unknown]:"#ffaaaa",[_.Valve]:"#ffaaaa"};function Te(e){return Qo(e,_)?hr[e]:hr[_.Unknown]}const gr=z()({tagName:"vir-gamepad-axe",cssVars:{"vir-gamepad-axe-color":Te(_.Unknown)},styles:({cssVars:e})=>$`
        :host {
            display: block;
            width: 200px;
            border: 2px solid ${e["vir-gamepad-axe-color"].value};
            text-align: center;
            position: relative;
            background-color: white;
        }

        .progress {
            z-index: 1;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            right: 50%;
            border: 1px solid ${e["vir-gamepad-axe-color"].value};
            background-color: ${e["vir-gamepad-axe-color"].value};
        }

        p {
            ${Ke};
            position: relative;
            z-index: 10;
        }
    `,renderCallback({inputs:e,host:t}){var i;t.style.setProperty("--vir-gamepad-axe-color",Te(e.gamepadBrand));const n=e.gamepadInput.value>=0?{left:50,right:50-e.gamepadInput.value*50}:{left:50+e.gamepadInput.value*50,right:50},r=$`
            left: ${n.left}%;
            right: ${n.right}%;
        `,o=((i=e.gamepadLayout)==null?void 0:i.inputMappings[e.gamepadInput.inputName])||e.gamepadInput.inputName;return v`
            <div class="progress" style=${r}></div>
            <p class="axe-words">${o}</p>
            <p>${e.gamepadInput.value.toFixed(1)}</p>
        `}}),vr=z()({tagName:"vir-gamepad-button",cssVars:{"vir-gamepad-button-button-size":"75px","vir-gamepad-button-color":Te(_.Unknown)},styles:({cssVars:e})=>$`
        :host {
            display: flex;
            position: relative;
            height: ${e["vir-gamepad-button-button-size"].value};
            width: ${e["vir-gamepad-button-button-size"].value};
            border: 2px solid ${e["vir-gamepad-button-color"].value};
            box-sizing: border-box;
            border-radius: 50%;
        }

        .button-fill-wrapper {
            box-sizing: border-box;
            position: absolute;
            top: -1px;
            left: -1px;
            width: calc(100% + 2px);
            height: calc(100% + 2px);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .button-fill {
            box-sizing: border-box;
            width: 0%;
            height: 0%;
            pointer-events: none;
            opacity: 1;
            border-radius: 50%;
            background-color: ${e["vir-gamepad-button-color"].value};
            border: 2px solid ${e["vir-gamepad-button-color"].value};
            z-index: 1;
        }

        .no-fill {
            opacity: 0;
        }

        .button-name {
            z-index: 4;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    `,renderCallback({inputs:e,host:t}){var o;if(e.gamepadInput.inputType!==d.Button)throw new Error(`
                Incorrect input type '${e.gamepadInput.inputType}': expected
                '${d.Button}'.
            `);t.style.setProperty("--vir-gamepad-button-color",Te(e.gamepadBrand));const n=$`
            width: ${e.gamepadInput.value*100}%;
            height: ${e.gamepadInput.value*100}%;
        `,r=((o=e.gamepadLayout)==null?void 0:o.inputMappings[e.gamepadInput.inputName])||e.gamepadInput.inputName;return v`
            <div class="button-fill-wrapper">
                <div
                    class="button-fill ${Lr({"no-fill":!e.gamepadInput.value})}"
                    style=${n}
                ></div>
            </div>
            <div class="button-name">${r}</div>
        `}}),ee=z()({tagName:"vir-gamepad-input",hostClasses:{"vir-gamepad-input-circle":({inputs:e})=>e.gamepadInput.inputType===d.Button},styles:({hostClasses:e})=>$`
        :host {
            display: flex;
        }

        ${e["vir-gamepad-input-circle"].selector} {
            border-radius: 50%;
        }
    `,renderCallback({inputs:e}){return e.gamepadInput.inputType===d.Axe?v`
                <${gr.assign(e)}></${gr}>
            `:e.gamepadInput.inputType===d.Button?v`
                <${vr.assign(e)}></${vr}>
            `:`Invalid gamepad type received: ${e.gamepadInput.inputType}`}}),st=z()({tagName:"vir-gamepad-inputs",events:{gamepadInputClick:I()},styles:$`
        :host {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .inputs {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        ${ee} {
            cursor: pointer;
            border: 1px solid transparent;
        }

        ${ee}:hover {
            border-color: black;
        }

        .prefix.warning {
            color: red;
        }

        .prefix {
            font-weight: bold;
        }

        .prefix.info {
            color: dodgerblue;
        }
    `,renderCallback({inputs:e,dispatch:t,events:n}){var s;const{gamepadBrand:r}=de({gamepad:e.gamepad.deviceName,gamepadModelMap:e.gamepadModelMap}),o=e.gamepad.deviceDetails.buttons.map(u=>v`
                <${ee.assign({gamepadBrand:r,gamepadInput:u,gamepadLayout:e.gamepadLayout})}
                    ${T("click",()=>{t(new n.gamepadInputClick({details:u,deviceKey:e.gamepad.deviceKey,deviceName:e.gamepad.deviceName,deviceType:e.gamepad.deviceType,inputName:u.inputName,inputValue:u.value}))})}
                ></${ee}>
            `),i=e.gamepad.deviceDetails.axes.map(u=>v`
                <${ee.assign({gamepadBrand:r,gamepadInput:u,gamepadLayout:e.gamepadLayout})}
                    ${T("click",()=>{t(new n.gamepadInputClick({details:u,deviceKey:e.gamepad.deviceKey,deviceName:e.gamepad.deviceName,deviceType:e.gamepad.deviceType,inputName:u.inputName,inputValue:u.value}))})}
                ></${ee}>
            `),a=(s=e.gamepadLayout)!=null&&s.notes?P(e.gamepadLayout.notes).map(u=>{var p,f;const c=(f=(p=e.gamepadLayout)==null?void 0:p.notes)==null?void 0:f[u];return c?v`
                      <p class="notes">
                          <span class="prefix ${u}">${u==="info"?"Note":"WARNING"}:</span>
                          ${c}
                      </p>
                  `:""}):"";return v`
            ${a}
            <div class="inputs">${o}</div>
            <div class="inputs">${i}</div>
        `}});function En(e){return e.split("-").map(t=>xr(t)).join(" ")}const br="create new gamepad model",ge=z()({tagName:"vir-gamepad-name",cssVars:{"vir-gamepad-name-gamepad-brand-color":Te(_.Unknown)},events:{editMappingsClick:I(),gamepadModelOverride:I(),createNewModel:I()},styles:({cssVars:e})=>$`
        :host {
            border-radius: 24px;
            padding: 32px;
            gap: 16px;
            display: flex;
            flex-direction: column;
            background-color: ${e["vir-gamepad-name-gamepad-brand-color"].value};
            border: 2px solid ${e["vir-gamepad-name-gamepad-brand-color"].value};
            background-image: linear-gradient(
                hsla(0, 0%, 100%, 0.8),
                hsla(0, 0%, 100%, 0) 75px,
                hsla(0, 0%, 0%, 0.01) 75px,
                hsla(0, 0%, 100%, 0)
            );
            text-shadow: 0 2px 4px hsla(0, 0%, 100%, 0.7);
            box-shadow: inset 0 5px 20px hsla(0, 0%, 100%, 0.9);
        }

        h2,
        p {
            ${Ke}
        }

        h2 {
            font-size: 2em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .subtitle {
            color: #575757;
        }

        .subtitle:hover {
            color: black;
        }

        button {
            ${R};
            align-self: center;
            transition: 100ms;
            border: 1px solid ${e["vir-gamepad-name-gamepad-brand-color"].value};
            background-color: white;
            padding: 4px 8px;
            font: inherit;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
        }

        button:hover,
        button:active {
            color: ${e["vir-gamepad-name-gamepad-brand-color"].value};
            background-color: black;
        }

        select {
            ${R};
            flex-grow: 1;
            padding: 2px 4px;
            cursor: pointer;
            width: 0;
            font: inherit;
        }
    `,renderCallback({inputs:e,host:t,dispatch:n,events:r}){const{gamepadBrand:o,gamepadModel:i,gamepadModelDescription:a}=de({gamepad:e.gamepad,gamepadModelMap:e.gamepadModelMap});t.style.setProperty("--vir-gamepad-name-gamepad-brand-color",Te(o));const s=Array.from(new Set([...Sr(S),...ye(e.gamepadModelMap)])),u=v`
            <select
                ${aa(c=>{be(c,HTMLSelectElement),c.value=i})}
                ${T("change",c=>{const l=c.currentTarget;be(l,HTMLSelectElement);const p=l.value;p===br?(n(new r.createNewModel),l.value=i):n(new r.gamepadModelOverride(p))})}
            >
                ${s.map(c=>v`
                        <option ?selected=${i===c} value=${c}>
                            ${En(c)}
                        </option>
                    `)}
                <option value=${br}>&gt; Enter New Gamepad Model</option>
            </select>
        `;return v`
            <h2>
                <span>${e.gamepadIndex}:</span>
                ${u}
            </h2>
            <p class="subtitle">
                "${e.gamepad.deviceName}"
                <br />
                <br />
                ${a}
            </p>
            <button
                ${T("click",()=>{n(new r.editMappingsClick)})}
            >
                Edit Mappings
            </button>
        `}}),yr=z()({tagName:"vir-gamepad",styles:$`
        :host {
            display: flex;
            background-color: white;
            color: black;
            gap: 16px;
            flex-wrap: wrap;
            align-items: flex-start;
        }

        ${ge} {
            flex-grow: 1;
            flex-basis: 600px;
        }

        ${st} {
            flex-grow: 1000000;
            flex-shrink: 1;
            flex-basis: 300px;
        }
    `,renderCallback({inputs:e}){return v`
            <${ge.assign({gamepad:e.gamepad,gamepadIndex:e.gamepadIndex,gamepadModelMap:e.gamepadModelMap})}></${ge}>
            <${st.assign({gamepad:e.gamepad,gamepadLayout:e.gamepadLayout,gamepadModelMap:e.gamepadModelMap})}></${st}>
        `}}),vt=z()({tagName:"vir-modal",styles:$`
        .background {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 9999;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.8);
        }

        .modal-wrapper {
            background-color: white;
            border: 4px solid #ddd;
            border-radius: 16px;
            padding: 0 0 32px 16px;
        }

        h1 {
            ${Ke};
            font-size: 1.8em;
            margin-top: 8px;
            margin-bottom: 16px;
            flex-grow: 1;
        }

        .slot-wrapper {
            margin: 0 32px 16px 16px;
        }

        .close-x {
            ${R};
            padding: 2px;
            font-family: monospace;
            color: #aaa;
            cursor: pointer;
            transition: 100ms;
        }

        .close-x:hover {
            color: black;
        }

        header {
            display: flex;
            align-items: flex-start;
        }
    `,renderCallback({inputs:e,dispatch:t,events:n}){return v`
            <div
                class="background"
                ${T("mousedown",r=>{r.target===r.currentTarget&&t(new mt)})}
            >
                <div class="modal-wrapper">
                    <header>
                        <h1>${e.modalTitle}</h1>
                        <button
                            class="close-x"
                            ${T("click",()=>{t(new mt)})}
                        >
                            <${A.assign({icon:fo})}></${A}>
                        </button>
                    </header>
                    <div class="slot-wrapper">
                        <slot></slot>
                    </div>
                </div>
            </div>
        `}}),Ht=z()({tagName:"vir-create-new-type-modal",events:{newModelCreate:I()},styles:$`
        .wrapper {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 24px;
        }

        select {
            ${R};
            flex-grow: 1;
            cursor: pointer;
            padding: 2px 4px;
            font: inherit;
            margin: 2px 0;
        }

        .selected-gamepad {
            display: flex;
            flex-direction: column;
        }

        .new-model-name {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        ${F} {
            width: 100%;
        }
    `,stateInitStatic:{newModelName:""},initCallback({host:e}){setTimeout(async()=>{var n;await ho();const t=e.shadowRoot.querySelector(F.tagName);t&&(be(t,F),(n=t.shadowRoot.querySelector("input"))==null||n.select())},0)},renderCallback({inputs:e,dispatch:t,state:n,updateState:r,events:o}){const i=e.gamepadDevices[e.selectedGamepadIndex];if(!i)return v`
                No selected gamepad.
            `;const a=v`
            <select
                ${T("change",l=>{const p=l.currentTarget;be(p,HTMLSelectElement);const f=Number(p.value);isNaN(f)||t(new vn(f))})}
            >
                ${e.gamepadDevices.map((l,p)=>v`
                        <option
                            ?selected=${e.selectedGamepadIndex===p}
                            value=${String(p)}
                            title=${l.deviceName}
                        >
                            &nbsp;${p}: "${l.deviceName}"
                        </option>
                    `)}
            </select>
        `,{gamepadModel:s}=de({gamepad:i}),u=v`
            <p>Current model: ${En(s)}</p>
        `,c=v`
            <${F.assign({placeholder:"Enter a new model name",value:n.newModelName,disableBrowserHelps:!0})}
                ${T(F.events.valueChange,l=>{r({newModelName:l.detail})})}
            ></${F}>
            <${W.assign({text:"Save"})}
                ${T("click",()=>{t(new o.newModelCreate(n.newModelName)),t(new mt)})}
            ></${W}>
        `;return v`
            <${vt.assign({modalTitle:"Enter New Model"})}>
                <div class="wrapper">
                    <div class="selected-gamepad">
                        <span>Selected Gamepad by Name:</span>
                        ${a}
                    </div>
                    <div class="current-model">${u}</div>
                    <div class="new-model-name">${c}</div>
                </div>
            </${vt}>
        `}}),et=z()({tagName:"vir-edit-mappings-modal",events:{inputMapSave:I(),selectedGamepadInputChange:I()},styles:$`
        .wrapper {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 24px;
        }

        select {
            ${R};
            flex-grow: 1;
            cursor: pointer;
            padding: 2px 4px;
            font: inherit;
            margin: 2px 0;
        }

        .selected-gamepad {
            display: flex;
            flex-direction: column;
        }

        .current-input {
            display: flex;
            justify-content: center;
        }
    `,stateInitStatic:{cleanup:void 0},initCallback({state:e,updateState:t,inputs:n,host:r,dispatch:o,events:i}){function a(){setTimeout(async()=>{var u;await ho();const s=r.shadowRoot.querySelector(F.tagName);s&&(be(s,F),(u=s.shadowRoot.querySelector("input"))==null||u.select())},0)}if(a(),!e.cleanup){const s=n.inputDeviceHandler.listen(X.CurrentInputsChanged,u=>{var f;const c=n.gamepadDevices[n.selectedGamepadIndex];if(!c)return;const l=u.detail.inputs.newInputs.filter(g=>g.deviceKey===c.deviceKey).sort((g,h)=>Math.abs(h.inputValue)-Math.abs(g.inputValue));if(!l.length)return;const p=l[0];p&&((f=n.selectedGamepadInput)==null?void 0:f.inputName)!==p.inputName&&(a(),o(new i.selectedGamepadInputChange(p)))});t({cleanup:s})}},cleanupCallback({state:e,updateState:t}){var n;(n=e.cleanup)==null||n.call(e),t({cleanup:void 0})},renderCallback({inputs:e,dispatch:t,events:n,host:r}){const o=e.gamepadDevices[e.selectedGamepadIndex];if(!o)return v`
                No selected gamepad.
            `;const{gamepadBrand:i}=de({gamepad:o==null?void 0:o.deviceName,gamepadModelMap:e.savedGamepadModelMap});e.selectedGamepadInput&&(o.deviceKey!==e.selectedGamepadInput.deviceKey||o.deviceName!==e.selectedGamepadInput.deviceName)&&t(new n.selectedGamepadInputChange(void 0));const a=v`
            <select
                ${T("change",p=>{const f=p.currentTarget;be(f,HTMLSelectElement);const g=Number(f.value);isNaN(g)||t(new vn(g))})}
            >
                ${e.gamepadDevices.map((p,f)=>{const{gamepadModel:g}=de({gamepad:p.deviceName,gamepadModelMap:e.savedGamepadModelMap});return v`
                        <option
                            ?selected=${e.selectedGamepadIndex===f}
                            value=${String(f)}
                        >
                            &nbsp;${f}: ${En(g)}
                        </option>
                    `})}
            </select>
        `,s=e.selectedGamepadInput?o.deviceDetails.inputsByName[e.selectedGamepadInput.inputName]:void 0,u=s?v`
                  <${ee.assign({gamepadLayout:void 0,gamepadInput:s,gamepadBrand:i})}></${ee}>
              `:v`
                  <p>Press an input on this gamepad to map it.</p>
              `,c=Yt({gamepad:o,layouts:e.savedGamepadLayouts,gamepadModelMap:e.savedGamepadModelMap}),l=s?v`
                  <${F.assign({placeholder:"Enter an input name",value:(c==null?void 0:c.inputMappings[s.inputName])||"",disableBrowserHelps:!0})}
                      ${T(F.events.valueChange,p=>{s&&t(new n.inputMapSave({inputName:s.inputName,mappedName:p.detail}))})}
                  ></${F}>
              `:"";return v`
            <${vt.assign({modalTitle:"Edit Mappings"})}>
                <div class="wrapper">
                    <div class="selected-gamepad">
                        <span>Selected Gamepad:</span>
                        ${a}
                    </div>
                    <div class="current-input">${u}</div>
                    <div class="current-mapping">${l}</div>
                </div>
            </${vt}>
        `}});Bs();$t({tagName:"vir-app",styles:$`
        :host {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            font-family: sans-serif;
        }

        main {
            box-sizing: border-box;
            width: 100%;
            min-height: 100%;
            display: flex;
            flex-direction: column;
            padding: 24px;
            gap: 24px;
        }

        p {
            margin: 0;
        }

        .description {
            font-size: 0.5em;
            opacity: 0.3;
            transition: 100ms;
        }

        .description:hover {
            opacity: 1;
        }

        .modal-wrapper {
            position: absolute;
        }

        .gamepads-wrapper {
            display: flex;
            flex-direction: column;
            gap: 64px;
        }

        ${A} {
            display: flex;
            height: 100%;
            width: 100%;
            justify-content: center;
            align-items: center;
            transform: scale(2);
        }

        header {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        header .column {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        h1 {
            ${Ke};
        }

        header .row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
        }

        .reset-button {
            ${W.cssVars["vira-button-primary-color"].name}: red;
            ${W.cssVars["vira-button-primary-hover-color"].name}: red;
            ${W.cssVars["vira-button-primary-active-color"].name}: red;
        }

        .submission-buttons {
            display: flex;
            gap: 16px;
            align-items: flex-start;
        }

        .submission-buttons .subtitle {
            opacity: 0.3;
            font-size: 0.5em;
            transition: 100ms;
        }

        .user-agent {
            opacity: 0.5;
            font-size: 0.7em;
            transition: 100ms;
        }

        .user-agent:hover,
        .submission-buttons .subtitle:hover {
            opacity: 1;
        }
        
        .error {
            font-weight: bold
            color: red;
        }
    `,stateInitStatic:{deviceHandler:sa(()=>new Oa({startLoopImmediately:!1,disableMouseMovement:!0,globalDeadZone:.1})),gamepadDevices:[],newInputs:{timestamp:0,devices:[]},useMocks:!1,gamepadIndexForEditing:0,inputForEditing:void 0,savedGamepadLayouts:Lt({defaultValue:pr().then(e=>(console.info(JSON.stringify(e)),e))}),submittedChanges:Lt({defaultValue:zu()}),savedGamepadModelMap:Lt({defaultValue:fr().then(e=>(console.info(JSON.stringify(e)),e))}),overrides:{gamepadLayouts:[],gamepadTypes:{}},editMode:"none",cleanup:void 0},initCallback({state:e,updateState:t}){const n=[e.deviceHandler.listen(X.CurrentInputsChanged,()=>{const r=e.deviceHandler.getLastPollResults();t({gamepadDevices:Object.values(r).filter(o=>o.deviceType===x.Gamepad)})}),e.deviceHandler.listen(X.CurrentInputsChanged,r=>{const o=Date.now(),i=r.detail.inputs.newInputs.reduce((a,s)=>(a.add(String(s.deviceKey)),a),new Set);i.size&&t({newInputs:{timestamp:o,devices:Array.from(i)}})}),Wu("keydown",r=>{r.code.toLowerCase()==="escape"&&e.editMode!=="none"&&t({editMode:"none"})})];t({cleanup(){n.forEach(r=>r())}}),e.deviceHandler.startPollingLoop()},cleanupCallback({state:e,updateState:t}){var n;(n=e.cleanup)==null||n.call(e),t({cleanup:void 0})},renderCallback({state:e,updateState:t}){const n=e.savedGamepadLayouts.value,r=e.savedGamepadModelMap.value,o=e.submittedChanges.value;if(!Bt(n)||!Bt(r)||!Bt(o))return v`
                <${A.assign({icon:mo})}></${A}>
            `;if(Pt(n)||Pt(r)||Pt(o))return v`
                <p class="error">Failed to initialize.</p>
            `;const i=sr({layouts:n,models:r},o),a=sr({layouts:n,models:r},void 0),s=a.layouts.length||Object.values(a.models).length,u=i.layouts.length||Object.values(i.models).length,c=[...e.gamepadDevices,...e.useMocks?Ds:[]],l=c.map((f,g)=>{if(f.deviceType===x.Gamepad){const h=Yt({gamepad:f,layouts:n,gamepadModelMap:r});return v`
                    <${yr.assign({gamepad:f,gamepadIndex:g,gamepadLayout:h,gamepadModelMap:r})}
                        ${T(ge.events.editMappingsClick,()=>{t({gamepadIndexForEditing:g,editMode:"mappings"})})}
                        ${T(ge.events.gamepadModelOverride,async y=>{const C={...r,[f.deviceName.toLowerCase()]:y.detail};e.savedGamepadModelMap.setResolvedValue(C),await mr(C)})}
                        ${T(st.events.gamepadInputClick,y=>{t({editMode:"mappings",gamepadIndexForEditing:g,inputForEditing:y.detail})})}
                        ${T(ge.events.createNewModel,()=>{t({editMode:"create-type",gamepadIndexForEditing:g})})}
                    ></${yr}>
                `}else return""}),p=e.editMode==="create-type"?v`
                      <${Ht.assign({gamepadDevices:c,selectedGamepadIndex:e.gamepadIndexForEditing})}
                          ${T(Ht.events.newModelCreate,async f=>{const g=e.gamepadDevices[e.gamepadIndexForEditing];if(!g)throw new Error("Cannot update layouts, failed to find selected device");const h={...r,[g.deviceName.toLowerCase()]:f.detail};console.info(JSON.stringify(h)),e.savedGamepadModelMap.setResolvedValue(h),await mr(h)})}
                      ></${Ht}>
                  `:e.editMode==="mappings"?v`
                        <${et.assign({savedGamepadLayouts:n,gamepadDevices:c,selectedGamepadIndex:e.gamepadIndexForEditing,savedGamepadModelMap:r,selectedGamepadInput:e.inputForEditing,inputDeviceHandler:e.deviceHandler})}
                            ${T(et.events.selectedGamepadInputChange,f=>{t({inputForEditing:f.detail})})}
                            ${T(et.events.inputMapSave,async f=>{if(n instanceof Error)throw new Error("Cannot save mapping, failed to load current mappings.");const g=e.gamepadDevices[e.gamepadIndexForEditing];if(!g)throw new Error("Cannot update layouts, failed to find selected device");const h=Yt({gamepad:g,layouts:n,gamepadModelMap:r}),y=Ge(),C=h?Ns(h.systemVersions,y):!0,V=Ms(g),U=C?h??V:h?{...kn(h),systemVersions:V.systemVersions}:V;U.inputMappings[f.detail.inputName]=f.detail.mappedName,(!h||!C)&&n.push(U),console.info(JSON.stringify(n)),e.savedGamepadLayouts.setResolvedValue(kn(n)),await Gu(n)})}
                        ></${et}>
                    `:"";return v`
            <main
                ${T(mt,()=>{t({editMode:"none"})})}
                ${T(vn,f=>{t({gamepadIndexForEditing:f.detail})})}
            >
                <div class="modal-wrapper">${p}</div>
                <header>
                    <div class="column">
                        <h1>Gamepad Type</h1>
                        <p>Map gamepad ids to gamepad models, brands, and input names.</p>
                        <ul>
                            <li>
                                <a href="https://electrovir.github.io/gamepad-type/docs">
                                    Full API docs
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/electrovir/gamepad-type">
                                    Repository in GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.npmjs.com/package/gamepad-type">
                                    Package on npm
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="row">
                        <p
                            class="user-agent"
                            title="These versions determine gamepad input mappings."
                        >
                            Current system versions (used for correct mapping):
                            <br />
                            ${Qe.osName} ${Qe.osVersion}
                            <br />
                            ${Qe.browserName} ${Qe.browserVersion}
                        </p>
                        <div class="submission-buttons">
                            <div class="column">
                                <${W.assign({text:"Submit Changes",disabled:!u})}
                                    ${T("click",async()=>{await Uu(i),e.submittedChanges.setResolvedValue(i),as.info("New mapping override received",{changes:i,systemVersions:Ge(),connectedDevices:e.gamepadDevices.map(f=>ei(f,["deviceKey","deviceName","deviceType"]))})})}
                                ></${W}>
                                <p class="subtitle">
                                    Submit your changes. IP address is not stored.
                                </p>
                            </div>
                            <${W.assign({text:"Reset Changes",disabled:!s,buttonStyle:pt.Outline})}
                                ${T("click",async()=>{await Vu(),e.savedGamepadLayouts.setNewPromise(pr()),e.savedGamepadModelMap.setNewPromise(fr())})}
                                class="reset-button"
                            ></${W}>
                        </div>
                    </div>
                </header>
                <div class="gamepads-wrapper">
                    ${l.length?l:v`
                              Connect a gamepad and press a button on it.
                          `}
                </div>
            </main>
        `}});
