/*! For license information please see 66074-cwGCoKS5zdY.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[66074],{8485:(e,t,n)=>{n.d(t,{a:()=>u});var r=n(87480),i=n(72774),o={ROOT:"mdc-form-field"},a={LABEL_SELECTOR:".mdc-form-field > label"};const c=function(e){function t(n){var i=e.call(this,(0,r.__assign)((0,r.__assign)({},t.defaultAdapter),n))||this;return i.click=function(){i.handleClick()},i}return(0,r.__extends)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return o},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return a},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},t.prototype.handleClick=function(){var e=this;this.adapter.activateInputRipple(),requestAnimationFrame((function(){e.adapter.deactivateInputRipple()}))},t}(i.K);var l=n(78220),s=n(18601),d=n(14114),f=n(68144),p=n(79932),m=n(83448);class u extends l.H{constructor(){super(...arguments),this.alignEnd=!1,this.spaceBetween=!1,this.nowrap=!1,this.label="",this.mdcFoundationClass=c}createAdapter(){return{registerInteractionHandler:(e,t)=>{this.labelEl.addEventListener(e,t)},deregisterInteractionHandler:(e,t)=>{this.labelEl.removeEventListener(e,t)},activateInputRipple:async()=>{const e=this.input;if(e instanceof s.Wg){const t=await e.ripple;t&&t.startPress()}},deactivateInputRipple:async()=>{const e=this.input;if(e instanceof s.Wg){const t=await e.ripple;t&&t.endPress()}}}}get input(){var e,t;return null!==(t=null===(e=this.slottedInputs)||void 0===e?void 0:e[0])&&void 0!==t?t:null}render(){const e={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return f.dy` <div class="mdc-form-field ${(0,m.$)(e)}"> <slot></slot> <label class="mdc-label" @click="${this._labelClick}">${this.label}</label> </div>`}click(){this._labelClick()}_labelClick(){const e=this.input;e&&(e.focus(),e.click())}}(0,r.__decorate)([(0,p.Cb)({type:Boolean})],u.prototype,"alignEnd",void 0),(0,r.__decorate)([(0,p.Cb)({type:Boolean})],u.prototype,"spaceBetween",void 0),(0,r.__decorate)([(0,p.Cb)({type:Boolean})],u.prototype,"nowrap",void 0),(0,r.__decorate)([(0,p.Cb)({type:String}),(0,d.P)((async function(e){var t;null===(t=this.input)||void 0===t||t.setAttribute("aria-label",e)}))],u.prototype,"label",void 0),(0,r.__decorate)([(0,p.IO)(".mdc-form-field")],u.prototype,"mdcRoot",void 0),(0,r.__decorate)([(0,p.vZ)("",!0,"*")],u.prototype,"slottedInputs",void 0),(0,r.__decorate)([(0,p.IO)("label")],u.prototype,"labelEl",void 0)},92038:(e,t,n)=>{n.d(t,{W:()=>r});const r=n(68144).iv`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size,.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height,1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight,400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing,.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform,inherit);color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}.mdc-form-field>label[dir=rtl],[dir=rtl] .mdc-form-field>label{margin-left:auto;margin-right:0}.mdc-form-field>label[dir=rtl],[dir=rtl] .mdc-form-field>label{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}.mdc-form-field--align-end>label[dir=rtl],[dir=rtl] .mdc-form-field--align-end>label{margin-left:0;margin-right:auto}.mdc-form-field--align-end>label[dir=rtl],[dir=rtl] .mdc-form-field--align-end>label{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}.mdc-form-field--space-between>label[dir=rtl],[dir=rtl] .mdc-form-field--space-between>label{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size,.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height,1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight,400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing,.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform,inherit);color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}::slotted(mwc-switch){margin-right:10px}::slotted(mwc-switch[dir=rtl]),[dir=rtl] ::slotted(mwc-switch){margin-left:10px}`},38768:(e,t,n)=>{n.d(t,{AG:()=>_,D8:()=>h,DD:()=>r,G0:()=>A,IX:()=>g,O7:()=>b,Rx:()=>k,Ry:()=>E,Yj:()=>y,Z_:()=>j,dt:()=>I,f0:()=>m,hu:()=>d,i0:()=>w,is:()=>f,jt:()=>$,kE:()=>v,lF:()=>O});class r extends TypeError{constructor(e,t){let n;const{message:r,explanation:i,...o}=e,{path:a}=e,c=0===a.length?r:`At path: ${a.join(".")} -- ${r}`;super(null!=i?i:c),null!=i&&(this.cause=c),Object.assign(this,o),this.name=this.constructor.name,this.failures=()=>{var r;return null!==(r=n)&&void 0!==r?r:n=[e,...t()]}}}function i(e){return"object"==typeof e&&null!=e}function o(e){return"symbol"==typeof e?e.toString():"string"==typeof e?JSON.stringify(e):`${e}`}function a(e,t,n,r){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:i,branch:a}=t,{type:c}=n,{refinement:l,message:s=`Expected a value of type \`${c}\`${l?` with refinement \`${l}\``:""}, but received: \`${o(r)}\``}=e;return{value:r,type:c,refinement:l,key:i[i.length-1],path:i,branch:a,...e,message:s}}function*c(e,t,n,r){var o;i(o=e)&&"function"==typeof o[Symbol.iterator]||(e=[e]);for(const i of e){const e=a(i,t,n,r);e&&(yield e)}}function*l(e,t,n={}){const{path:r=[],branch:o=[e],coerce:a=!1,mask:c=!1}=n,s={path:r,branch:o};if(a&&(e=t.coercer(e,s),c&&"type"!==t.type&&i(t.schema)&&i(e)&&!Array.isArray(e)))for(const n in e)void 0===t.schema[n]&&delete e[n];let d="valid";for(const r of t.validator(e,s))r.explanation=n.message,d="not_valid",yield[r,void 0];for(let[f,p,m]of t.entries(e,s)){const t=l(p,m,{path:void 0===f?r:[...r,f],branch:void 0===f?o:[...o,p],coerce:a,mask:c,message:n.message});for(const n of t)n[0]?(d=null!=n[0].refinement?"not_refined":"not_valid",yield[n[0],void 0]):a&&(p=n[1],void 0===f?e=p:e instanceof Map?e.set(f,p):e instanceof Set?e.add(p):i(e)&&(void 0!==p||f in e)&&(e[f]=p))}if("not_valid"!==d)for(const r of t.refiner(e,s))r.explanation=n.message,d="not_refined",yield[r,void 0];"valid"===d&&(yield[void 0,e])}class s{constructor(e){const{type:t,schema:n,validator:r,refiner:i,coercer:o=(e=>e),entries:a=function*(){}}=e;this.type=t,this.schema=n,this.entries=a,this.coercer=o,this.validator=r?(e,t)=>c(r(e,t),t,this,e):()=>[],this.refiner=i?(e,t)=>c(i(e,t),t,this,e):()=>[]}assert(e,t){return d(e,this,t)}create(e,t){return function(e,t,n){const r=p(e,t,{coerce:!0,message:n});if(r[0])throw r[0];return r[1]}(e,this,t)}is(e){return f(e,this)}mask(e,t){return function(e,t,n){const r=p(e,t,{coerce:!0,mask:!0,message:n});if(r[0])throw r[0];return r[1]}(e,this,t)}validate(e,t={}){return p(e,this,t)}}function d(e,t,n){const r=p(e,t,{message:n});if(r[0])throw r[0]}function f(e,t){return!p(e,t)[0]}function p(e,t,n={}){const i=l(e,t,n),o=function(e){const{done:t,value:n}=e.next();return t?void 0:n}(i);if(o[0]){return[new r(o[0],(function*(){for(const e of i)e[0]&&(yield e[0])})),void 0]}return[void 0,o[1]]}function m(...e){const t="type"===e[0].type,n=e.map((e=>e.schema)),r=Object.assign({},...n);return t?I(r):E(r)}function u(e,t){return new s({type:e,schema:null,validator:t})}function h(e){return new s({type:"dynamic",schema:null,*entries(t,n){const r=e(t,n);yield*r.entries(t,n)},validator:(t,n)=>e(t,n).validator(t,n),coercer:(t,n)=>e(t,n).coercer(t,n),refiner:(t,n)=>e(t,n).refiner(t,n)})}function y(){return u("any",(()=>!0))}function g(e){return new s({type:"array",schema:e,*entries(t){if(e&&Array.isArray(t))for(const[n,r]of t.entries())yield[n,r,e]},coercer:e=>Array.isArray(e)?e.slice():e,validator:e=>Array.isArray(e)||`Expected an array value, but received: ${o(e)}`})}function b(){return u("boolean",(e=>"boolean"==typeof e))}function v(e){const t={},n=e.map((e=>o(e))).join();for(const n of e)t[n]=n;return new s({type:"enums",schema:t,validator:t=>e.includes(t)||`Expected one of \`${n}\`, but received: ${o(t)}`})}function w(e){const t=o(e),n=typeof e;return new s({type:"literal",schema:"string"===n||"number"===n||"boolean"===n?e:null,validator:n=>n===e||`Expected the literal \`${t}\`, but received: ${o(n)}`})}function x(){return u("never",(()=>!1))}function _(e){return new s({...e,validator:(t,n)=>null===t||e.validator(t,n),refiner:(t,n)=>null===t||e.refiner(t,n)})}function k(){return u("number",(e=>"number"==typeof e&&!isNaN(e)||`Expected a number, but received: ${o(e)}`))}function E(e){const t=e?Object.keys(e):[],n=x();return new s({type:"object",schema:e||null,*entries(r){if(e&&i(r)){const i=new Set(Object.keys(r));for(const n of t)i.delete(n),yield[n,r[n],e[n]];for(const e of i)yield[e,r[e],n]}},validator:e=>i(e)||`Expected an object, but received: ${o(e)}`,coercer:e=>i(e)?{...e}:e})}function $(e){return new s({...e,validator:(t,n)=>void 0===t||e.validator(t,n),refiner:(t,n)=>void 0===t||e.refiner(t,n)})}function j(){return u("string",(e=>"string"==typeof e||`Expected a string, but received: ${o(e)}`))}function I(e){const t=Object.keys(e);return new s({type:"type",schema:e,*entries(n){if(i(n))for(const r of t)yield[r,n[r],e[r]]},validator:e=>i(e)||`Expected an object, but received: ${o(e)}`,coercer:e=>i(e)?{...e}:e})}function A(e){const t=e.map((e=>e.type)).join(" | ");return new s({type:"union",schema:null,coercer(t){for(const n of e){const[e,r]=n.validate(t,{coerce:!0});if(!e)return r}return t},validator(n,r){const i=[];for(const t of e){const[...e]=l(n,t,r),[o]=e;if(!o[0])return[];for(const[t]of e)t&&i.push(t)}return[`Expected the value to satisfy a union of \`${t}\`, but received: ${o(n)}`,...i]}})}function O(e,t,n){return new s({...e,*refiner(r,i){yield*e.refiner(r,i);const o=c(n(r,i),i,e,r);for(const e of o)yield{...e,refinement:t}}})}}}]);
//# sourceMappingURL=66074-cwGCoKS5zdY.js.map