/*! For license information please see 64721-sPO5sQrUYkM.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[64721],{18601:(e,t,i)=>{i.d(t,{Wg:()=>r,qN:()=>d.q});var n,a,s=i(87480),l=i(79932),d=i(78220);const o=null!==(a=null===(n=window.ShadyDOM)||void 0===n?void 0:n.inUse)&&void 0!==a&&a;class r extends d.H{constructor(){super(...arguments),this.disabled=!1,this.containingForm=null,this.formDataListener=e=>{this.disabled||this.setFormData(e.formData)}}findFormElement(){if(!this.shadowRoot||o)return null;const e=this.getRootNode().querySelectorAll("form");for(const t of Array.from(e))if(t.contains(this))return t;return null}connectedCallback(){var e;super.connectedCallback(),this.containingForm=this.findFormElement(),null===(e=this.containingForm)||void 0===e||e.addEventListener("formdata",this.formDataListener)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.containingForm)||void 0===e||e.removeEventListener("formdata",this.formDataListener),this.containingForm=null}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",(e=>{this.dispatchEvent(new Event("change",e))}))}}r.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,s.__decorate)([(0,l.Cb)({type:Boolean})],r.prototype,"disabled",void 0)},75642:(e,t,i)=>{var n=i(87480),a=i(68144),s=i(79932);const l=a.iv`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:400;font-style:normal;font-size:var(--mdc-icon-size,24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;let d=class extends a.oi{render(){return a.dy`<span><slot></slot></span>`}};d.styles=[l],d=(0,n.__decorate)([(0,s.Mo)("mwc-icon")],d)},32594:(e,t,i)=>{i.d(t,{U:()=>n});const n=e=>e.stopPropagation()},12537:(e,t,i)=>{i.d(t,{u:()=>a});var n=i(14516);const a=(e,t)=>{try{var i,n;return null!==(i=null===(n=s(t))||void 0===n?void 0:n.of(e))&&void 0!==i?i:e}catch(t){return e}},s=(0,n.Z)((e=>Intl&&"DisplayNames"in Intl?new Intl.DisplayNames(e.language,{type:"language",fallback:"code"}):void 0))},96151:(e,t,i)=>{i.d(t,{T:()=>n,y:()=>a});const n=e=>{requestAnimationFrame((()=>setTimeout(e,0)))},a=()=>new Promise((e=>{n(e)}))},76969:(e,t,i)=>{var n=i(17463),a=i(34541),s=i(47838),l=i(68144),d=i(79932),o=i(47181),r=i(32594),c=i(12537),p=i(69949);i(73366),i(86630);const u="__PREFERRED_PIPELINE_OPTION__";(0,n.Z)([(0,d.Mo)("ha-assist-pipeline-picker")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,d.SB)()],key:"_pipelines",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_preferredPipeline",value:()=>null},{kind:"method",key:"render",value:function(){var e,t;if(!this._pipelines)return l.Ld;const i=null!==(e=this.value)&&void 0!==e?e:u;return l.dy` <ha-select .label="${this.label||this.hass.localize("ui.components.pipeline-picker.pipeline")}" .value="${i}" .required="${this.required}" .disabled="${this.disabled}" @selected="${this._changed}" @closed="${r.U}" fixedMenuPosition naturalMenuWidth> <ha-list-item .value="${u}"> ${this.hass.localize("ui.components.pipeline-picker.preferred",{preferred:null===(t=this._pipelines.find((e=>e.id===this._preferredPipeline)))||void 0===t?void 0:t.name})} </ha-list-item> ${this._pipelines.map((e=>l.dy`<ha-list-item .value="${e.id}"> ${e.name} (${(0,c.u)(e.language,this.hass.locale)}) </ha-list-item>`))} </ha-select> `}},{kind:"method",key:"firstUpdated",value:function(e){(0,a.Z)((0,s.Z)(i.prototype),"firstUpdated",this).call(this,e),(0,p.SC)(this.hass).then((e=>{this._pipelines=e.pipelines,this._preferredPipeline=e.preferred_pipeline}))}},{kind:"get",static:!0,key:"styles",value:function(){return l.iv`ha-select{width:100%}`}},{kind:"method",key:"_changed",value:function(e){const t=e.target;!this.hass||""===t.value||t.value===this.value||void 0===this.value&&t.value===u||(this.value=t.value===u?void 0:t.value,(0,o.B)(this,"value-changed",{value:this.value}))}}]}}),l.oi)},73366:(e,t,i)=>{i.d(t,{M:()=>c});var n=i(17463),a=i(34541),s=i(47838),l=i(61092),d=i(96762),o=i(68144),r=i(79932);let c=(0,n.Z)([(0,r.Mo)("ha-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,a.Z)((0,s.Z)(i.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[d.W,o.iv`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`]}}]}}),l.K)},86630:(e,t,i)=>{var n=i(17463),a=i(34541),s=i(47838),l=i(49412),d=i(3762),o=i(68144),r=i(79932),c=i(38346),p=i(96151);(0,n.Z)([(0,r.Mo)("ha-select")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?o.dy`<span class="mdc-select__icon"><slot name="icon"></slot></span>`:o.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)((0,s.Z)(i.prototype),"connectedCallback",this).call(this),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,s.Z)(i.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"field",key:"_translationsUpdated",value(){return(0,c.D)((async()=>{await(0,p.y)(),this.layoutOptions()}),500)}},{kind:"field",static:!0,key:"styles",value:()=>[d.W,o.iv`.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}`]}]}}),l.K)},17238:(e,t,i)=>{i.r(t),i.d(t,{HaAssistPipelineSelector:()=>l});var n=i(17463),a=i(68144),s=i(79932);i(76969);let l=(0,n.Z)([(0,s.Mo)("ha-selector-assist_pipeline")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return a.dy`<ha-assist-pipeline-picker .hass="${this.hass}" .value="${this.value}" .label="${this.label}" .helper="${this.helper}" .disabled="${this.disabled}" .required="${this.required}"></ha-assist-pipeline-picker>`}},{kind:"field",static:!0,key:"styles",value:()=>a.iv`ha-conversation-agent-picker{width:100%}`}]}}),a.oi)},69949:(e,t,i)=>{i.d(t,{AI:()=>l,Dy:()=>v,GV:()=>u,I2:()=>a,PA:()=>r,SC:()=>o,XT:()=>h,Xp:()=>s,_v:()=>d,af:()=>p,eP:()=>n,jZ:()=>c});const n=(e,t,i)=>"run-start"===t.type?e={init_options:i,stage:"ready",run:t.data,events:[t]}:e?((e="stt-start"===t.type?{...e,stage:"stt",stt:{...t.data,done:!1}}:"stt-end"===t.type?{...e,stt:{...e.stt,...t.data,done:!0}}:"intent-start"===t.type?{...e,stage:"intent",intent:{...t.data,done:!1}}:"intent-end"===t.type?{...e,intent:{...e.intent,...t.data,done:!0}}:"tts-start"===t.type?{...e,stage:"tts",tts:{...t.data,done:!1}}:"tts-end"===t.type?{...e,tts:{...e.tts,...t.data,done:!0}}:"run-end"===t.type?{...e,stage:"done"}:"error"===t.type?{...e,stage:"error",error:t.data}:{...e}).events=[...e.events,t],e):void console.warn("Received unexpected event before receiving session",t),a=(e,t,i)=>{let a;const l=s(e,(e=>{a=n(a,e,i),"run-end"!==e.type&&"error"!==e.type||l.then((e=>e())),a&&t(a)}),i);return l},s=(e,t,i)=>e.connection.subscribeMessage(t,{...i,type:"assist_pipeline/run"}),l=(e,t)=>e.callWS({type:"assist_pipeline/pipeline_debug/list",pipeline_id:t}),d=(e,t,i)=>e.callWS({type:"assist_pipeline/pipeline_debug/get",pipeline_id:t,pipeline_run_id:i}),o=e=>e.callWS({type:"assist_pipeline/pipeline/list"}),r=(e,t)=>e.callWS({type:"assist_pipeline/pipeline/get",pipeline_id:t}),c=(e,t)=>e.callWS({type:"assist_pipeline/pipeline/create",...t}),p=(e,t,i)=>e.callWS({type:"assist_pipeline/pipeline/update",pipeline_id:t,...i}),u=(e,t)=>e.callWS({type:"assist_pipeline/pipeline/set_preferred",pipeline_id:t}),h=(e,t)=>e.callWS({type:"assist_pipeline/pipeline/delete",pipeline_id:t}),v=e=>e.callWS({type:"assist_pipeline/language/list"})}}]);
//# sourceMappingURL=64721-sPO5sQrUYkM.js.map