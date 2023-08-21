/*! For license information please see 7286-hwoMgdKSnk8.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[7286],{18601:(e,t,i)=>{i.d(t,{Wg:()=>r,qN:()=>d.q});var n,a,s=i(87480),o=i(79932),d=i(78220);const l=null!==(a=null===(n=window.ShadyDOM)||void 0===n?void 0:n.inUse)&&void 0!==a&&a;class r extends d.H{constructor(){super(...arguments),this.disabled=!1,this.containingForm=null,this.formDataListener=e=>{this.disabled||this.setFormData(e.formData)}}findFormElement(){if(!this.shadowRoot||l)return null;const e=this.getRootNode().querySelectorAll("form");for(const t of Array.from(e))if(t.contains(this))return t;return null}connectedCallback(){var e;super.connectedCallback(),this.containingForm=this.findFormElement(),null===(e=this.containingForm)||void 0===e||e.addEventListener("formdata",this.formDataListener)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.containingForm)||void 0===e||e.removeEventListener("formdata",this.formDataListener),this.containingForm=null}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",(e=>{this.dispatchEvent(new Event("change",e))}))}}r.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,s.__decorate)([(0,o.Cb)({type:Boolean})],r.prototype,"disabled",void 0)},75642:(e,t,i)=>{var n=i(87480),a=i(68144),s=i(79932);const o=a.iv`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:400;font-style:normal;font-size:var(--mdc-icon-size,24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;let d=class extends a.oi{render(){return a.dy`<span><slot></slot></span>`}};d.styles=[o],d=(0,n.__decorate)([(0,s.Mo)("mwc-icon")],d)},32594:(e,t,i)=>{i.d(t,{U:()=>n});const n=e=>e.stopPropagation()},96151:(e,t,i)=>{i.d(t,{T:()=>n,y:()=>a});const n=e=>{requestAnimationFrame((()=>setTimeout(e,0)))},a=()=>new Promise((e=>{n(e)}))},73366:(e,t,i)=>{i.d(t,{M:()=>c});var n=i(17463),a=i(34541),s=i(47838),o=i(61092),d=i(96762),l=i(68144),r=i(79932);let c=(0,n.Z)([(0,r.Mo)("ha-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,a.Z)((0,s.Z)(i.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[d.W,l.iv`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`]}}]}}),o.K)},86630:(e,t,i)=>{var n=i(17463),a=i(34541),s=i(47838),o=i(49412),d=i(3762),l=i(68144),r=i(79932),c=i(38346),h=i(96151);(0,n.Z)([(0,r.Mo)("ha-select")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?l.dy`<span class="mdc-select__icon"><slot name="icon"></slot></span>`:l.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)((0,s.Z)(i.prototype),"connectedCallback",this).call(this),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,s.Z)(i.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"field",key:"_translationsUpdated",value(){return(0,c.D)((async()=>{await(0,h.y)(),this.layoutOptions()}),500)}},{kind:"field",static:!0,key:"styles",value:()=>[d.W,l.iv`.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}`]}]}}),o.K)},57757:(e,t,i)=>{i.r(t),i.d(t,{HaTTSVoiceSelector:()=>o});var n=i(17463),a=i(68144),s=i(79932);i(55049);let o=(0,n.Z)([(0,s.Mo)("ha-selector-tts_voice")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"context",value:void 0},{kind:"method",key:"render",value:function(){var e,t,i,n;return a.dy`<ha-tts-voice-picker .hass="${this.hass}" .value="${this.value}" .label="${this.label}" .helper="${this.helper}" .language="${(null===(e=this.selector.tts_voice)||void 0===e?void 0:e.language)||(null===(t=this.context)||void 0===t?void 0:t.language)}" .engineId="${(null===(i=this.selector.tts_voice)||void 0===i?void 0:i.engineId)||(null===(n=this.context)||void 0===n?void 0:n.engineId)}" .disabled="${this.disabled}" .required="${this.required}"></ha-tts-voice-picker>`}},{kind:"field",static:!0,key:"styles",value:()=>a.iv`ha-tts-picker{width:100%}`}]}}),a.oi)},55049:(e,t,i)=>{var n=i(17463),a=i(34541),s=i(47838),o=i(68144),d=i(79932),l=i(47181),r=i(32594),c=i(38346),h=i(67229);i(73366),i(86630);const u="__NONE_OPTION__";(0,n.Z)([(0,d.Mo)("ha-tts-voice-picker")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"engineId",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"language",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,d.SB)()],key:"_voices",value:void 0},{kind:"field",decorators:[(0,d.IO)("ha-select")],key:"_select",value:void 0},{kind:"method",key:"render",value:function(){var e,t;if(!this._voices)return o.Ld;const i=null!==(e=this.value)&&void 0!==e?e:this.required?null===(t=this._voices[0])||void 0===t?void 0:t.voice_id:u;return o.dy` <ha-select .label="${this.label||this.hass.localize("ui.components.tts-voice-picker.voice")}" .value="${i}" .required="${this.required}" .disabled="${this.disabled}" @selected="${this._changed}" @closed="${r.U}" fixedMenuPosition naturalMenuWidth> ${this.required?o.Ld:o.dy`<ha-list-item .value="${u}"> ${this.hass.localize("ui.components.tts-voice-picker.none")} </ha-list-item>`} ${this._voices.map((e=>o.dy`<ha-list-item .value="${e.voice_id}"> ${e.name} </ha-list-item>`))} </ha-select> `}},{kind:"method",key:"willUpdate",value:function(e){(0,a.Z)((0,s.Z)(i.prototype),"willUpdate",this).call(this,e),this.hasUpdated?(e.has("language")||e.has("engineId"))&&this._debouncedUpdateVoices():this._updateVoices()}},{kind:"field",key:"_debouncedUpdateVoices",value(){return(0,c.D)((()=>this._updateVoices()),500)}},{kind:"method",key:"_updateVoices",value:async function(){this.engineId&&this.language?(this._voices=(await(0,h.MV)(this.hass,this.engineId,this.language)).voices,this.value&&(this._voices&&this._voices.find((e=>e.voice_id===this.value))||(this.value=void 0,(0,l.B)(this,"value-changed",{value:this.value})))):this._voices=void 0}},{kind:"method",key:"updated",value:function(e){var t,n,o;((0,a.Z)((0,s.Z)(i.prototype),"updated",this).call(this,e),e.has("_voices")&&(null===(t=this._select)||void 0===t?void 0:t.value)!==this.value)&&(null===(n=this._select)||void 0===n||n.layoutOptions(),(0,l.B)(this,"value-changed",{value:null===(o=this._select)||void 0===o?void 0:o.value}))}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`ha-select{width:100%}`}},{kind:"method",key:"_changed",value:function(e){const t=e.target;!this.hass||""===t.value||t.value===this.value||void 0===this.value&&t.value===u||(this.value=t.value===u?void 0:t.value,(0,l.B)(this,"value-changed",{value:this.value}))}}]}}),o.oi)},67229:(e,t,i)=>{i.d(t,{MV:()=>r,Wg:()=>d,Xk:()=>o,aT:()=>n,b_:()=>s,yP:()=>l});const n=(e,t)=>e.callApi("POST","tts_get_url",t),a="media-source://tts/",s=e=>e.startsWith(a),o=e=>e.substring(19),d=(e,t,i)=>e.callWS({type:"tts/engine/list",language:t,country:i}),l=(e,t)=>e.callWS({type:"tts/engine/get",engine_id:t}),r=(e,t,i)=>e.callWS({type:"tts/engine/voices",engine_id:t,language:i})}}]);
//# sourceMappingURL=7286-hwoMgdKSnk8.js.map