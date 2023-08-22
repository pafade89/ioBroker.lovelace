"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[64721],{18601:function(e,t,n){n.d(t,{Wg:function(){return v},qN:function(){return f.q}});var i,a,r=n(71650),s=n(33368),o=n(34541),l=n(47838),d=n(69205),c=n(70906),u=n(43204),p=n(79932),f=n(78220),h=null!==(a=null===(i=window.ShadyDOM)||void 0===i?void 0:i.inUse)&&void 0!==a&&a,v=function(e){(0,d.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments)).disabled=!1,e.containingForm=null,e.formDataListener=function(t){e.disabled||e.setFormData(t.formData)},e}return(0,s.Z)(n,[{key:"findFormElement",value:function(){if(!this.shadowRoot||h)return null;for(var e=this.getRootNode().querySelectorAll("form"),t=0,n=Array.from(e);t<n.length;t++){var i=n[t];if(i.contains(this))return i}return null}},{key:"connectedCallback",value:function(){var e;(0,o.Z)((0,l.Z)(n.prototype),"connectedCallback",this).call(this),this.containingForm=this.findFormElement(),null===(e=this.containingForm)||void 0===e||e.addEventListener("formdata",this.formDataListener)}},{key:"disconnectedCallback",value:function(){var e;(0,o.Z)((0,l.Z)(n.prototype),"disconnectedCallback",this).call(this),null===(e=this.containingForm)||void 0===e||e.removeEventListener("formdata",this.formDataListener),this.containingForm=null}},{key:"click",value:function(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}},{key:"firstUpdated",value:function(){var e=this;(0,o.Z)((0,l.Z)(n.prototype),"firstUpdated",this).call(this),this.shadowRoot&&this.mdcRoot.addEventListener("change",(function(t){e.dispatchEvent(new Event("change",t))}))}}]),n}(f.H);v.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,u.__decorate)([(0,p.Cb)({type:Boolean})],v.prototype,"disabled",void 0)},75642:function(e,t,n){var i,a,r=n(88962),s=n(71650),o=n(33368),l=n(69205),d=n(70906),c=n(43204),u=n(68144),p=n(79932),f=(0,u.iv)(i||(i=(0,r.Z)([':host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:400;font-style:normal;font-size:var(--mdc-icon-size,24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}']))),h=function(e){(0,l.Z)(n,e);var t=(0,d.Z)(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){return(0,u.dy)(a||(a=(0,r.Z)(["<span><slot></slot></span>"])))}}]),n}(u.oi);h.styles=[f],h=(0,c.__decorate)([(0,p.Mo)("mwc-icon")],h)},32594:function(e,t,n){n.d(t,{U:function(){return i}});var i=function(e){return e.stopPropagation()}},12537:function(e,t,n){n.d(t,{u:function(){return a}});var i=n(14516),a=function(e,t){try{var n,i;return null!==(n=null===(i=r(t))||void 0===i?void 0:i.of(e))&&void 0!==n?n:e}catch(a){return e}},r=(0,i.Z)((function(e){return Intl&&"DisplayNames"in Intl?new Intl.DisplayNames(e.language,{type:"language",fallback:"code"}):void 0}))},96151:function(e,t,n){n.d(t,{T:function(){return i},y:function(){return a}});var i=function(e){requestAnimationFrame((function(){return setTimeout(e,0)}))},a=function(){return new Promise((function(e){i(e)}))}},76969:function(e,t,n){var i,a,r,s,o=n(88962),l=n(33368),d=n(71650),c=n(82390),u=n(69205),p=n(70906),f=n(91808),h=n(34541),v=n(47838),m=n(68144),y=n(79932),g=n(47181),b=n(32594),k=n(12537),_=n(69949),Z=(n(73366),n(86630),"preferred"),O="last_used";(0,f.Z)([(0,y.Mo)("ha-assist-pipeline-picker")],(function(e,t){var n=function(t){(0,u.Z)(i,t);var n=(0,p.Z)(i);function i(){var t;(0,d.Z)(this,i);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return t=n.call.apply(n,[this].concat(r)),e((0,c.Z)(t)),t}return(0,l.Z)(i)}(t);return{F:n,d:[{kind:"field",decorators:[(0,y.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,y.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,y.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"required",value:function(){return!1}},{kind:"field",decorators:[(0,y.Cb)()],key:"includeLastUsed",value:function(){return!1}},{kind:"field",decorators:[(0,y.SB)()],key:"_pipelines",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_preferredPipeline",value:function(){return null}},{kind:"get",key:"_default",value:function(){return this.includeLastUsed?O:Z}},{kind:"method",key:"render",value:function(){var e,t,n=this;if(!this._pipelines)return m.Ld;var s=null!==(e=this.value)&&void 0!==e?e:this._default;return(0,m.dy)(i||(i=(0,o.Z)([' <ha-select .label="','" .value="','" .required="','" .disabled="','" @selected="','" @closed="','" fixedMenuPosition naturalMenuWidth> ',' <ha-list-item .value="','"> '," </ha-list-item> "," </ha-select> "])),this.label||this.hass.localize("ui.components.pipeline-picker.pipeline"),s,this.required,this.disabled,this._changed,b.U,this.includeLastUsed?(0,m.dy)(a||(a=(0,o.Z)([' <ha-list-item .value="','"> '," </ha-list-item> "])),O,this.hass.localize("ui.components.pipeline-picker.last_used")):null,Z,this.hass.localize("ui.components.pipeline-picker.preferred",{preferred:null===(t=this._pipelines.find((function(e){return e.id===n._preferredPipeline})))||void 0===t?void 0:t.name}),this._pipelines.map((function(e){return(0,m.dy)(r||(r=(0,o.Z)(['<ha-list-item .value="','"> '," (",") </ha-list-item>"])),e.id,e.name,(0,k.u)(e.language,n.hass.locale))})))}},{kind:"method",key:"firstUpdated",value:function(e){var t=this;(0,h.Z)((0,v.Z)(n.prototype),"firstUpdated",this).call(this,e),(0,_.SC)(this.hass).then((function(e){t._pipelines=e.pipelines,t._preferredPipeline=e.preferred_pipeline}))}},{kind:"get",static:!0,key:"styles",value:function(){return(0,m.iv)(s||(s=(0,o.Z)(["ha-select{width:100%}"])))}},{kind:"method",key:"_changed",value:function(e){var t=e.target;!this.hass||""===t.value||t.value===this.value||void 0===this.value&&t.value===this._default||(this.value=t.value===this._default?void 0:t.value,(0,g.B)(this,"value-changed",{value:this.value}))}}]}}),m.oi)},73366:function(e,t,n){n.d(t,{M:function(){return y}});var i,a=n(88962),r=n(33368),s=n(71650),o=n(82390),l=n(69205),d=n(70906),c=n(91808),u=n(34541),p=n(47838),f=n(61092),h=n(96762),v=n(68144),m=n(79932),y=(0,c.Z)([(0,m.Mo)("ha-list-item")],(function(e,t){var n=function(t){(0,l.Z)(i,t);var n=(0,d.Z)(i);function i(){var t;(0,s.Z)(this,i);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return t=n.call.apply(n,[this].concat(r)),e((0,o.Z)(t)),t}return(0,r.Z)(i)}(t);return{F:n,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,u.Z)((0,p.Z)(n.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[h.W,(0,v.iv)(i||(i=(0,a.Z)([":host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}"])))]}}]}}),f.K)},86630:function(e,t,n){var i,a,r=n(99312),s=n(81043),o=n(88962),l=n(33368),d=n(71650),c=n(82390),u=n(69205),p=n(70906),f=n(91808),h=n(34541),v=n(47838),m=n(49412),y=n(3762),g=n(68144),b=n(79932),k=n(38346),_=n(96151);(0,f.Z)([(0,b.Mo)("ha-select")],(function(e,t){var n=function(t){(0,u.Z)(i,t);var n=(0,p.Z)(i);function i(){var t;(0,d.Z)(this,i);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return t=n.call.apply(n,[this].concat(r)),e((0,c.Z)(t)),t}return(0,l.Z)(i)}(t);return{F:n,d:[{kind:"field",decorators:[(0,b.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?(0,g.dy)(i||(i=(0,o.Z)(['<span class="mdc-select__icon"><slot name="icon"></slot></span>']))):g.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,h.Z)((0,v.Z)(n.prototype),"connectedCallback",this).call(this),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,h.Z)((0,v.Z)(n.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"field",key:"_translationsUpdated",value:function(){var e=this;return(0,k.D)((0,s.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,_.y)();case 2:e.layoutOptions();case 3:case"end":return t.stop()}}),t)}))),500)}},{kind:"field",static:!0,key:"styles",value:function(){return[y.W,(0,g.iv)(a||(a=(0,o.Z)([".mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}"])))]}}]}}),m.K)},17238:function(e,t,n){n.r(t),n.d(t,{HaAssistPipelineSelector:function(){return h}});var i,a,r=n(88962),s=n(33368),o=n(71650),l=n(82390),d=n(69205),c=n(70906),u=n(91808),p=n(68144),f=n(79932),h=(n(76969),(0,u.Z)([(0,f.Mo)("ha-selector-assist_pipeline")],(function(e,t){var n=function(t){(0,d.Z)(i,t);var n=(0,c.Z)(i);function i(){var t;(0,o.Z)(this,i);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return t=n.call.apply(n,[this].concat(r)),e((0,l.Z)(t)),t}return(0,s.Z)(i)}(t);return{F:n,d:[{kind:"field",decorators:[(0,f.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,f.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,f.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,f.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,f.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"required",value:function(){return!0}},{kind:"method",key:"render",value:function(){var e;return(0,p.dy)(i||(i=(0,r.Z)([' <ha-assist-pipeline-picker .hass="','" .value="','" .label="','" .helper="','" .disabled="','" .required="','" .includeLastUsed="','"></ha-assist-pipeline-picker> '])),this.hass,this.value,this.label,this.helper,this.disabled,this.required,Boolean(null===(e=this.selector.assist_pipeline)||void 0===e?void 0:e.include_last_used))}},{kind:"field",static:!0,key:"styles",value:function(){return(0,p.iv)(a||(a=(0,r.Z)(["ha-conversation-agent-picker{width:100%}"])))}}]}}),p.oi))},69949:function(e,t,n){if(n.d(t,{AI:function(){return o},Dy:function(){return v},GV:function(){return f},I2:function(){return r},PA:function(){return c},SC:function(){return d},XT:function(){return h},Xp:function(){return s},_v:function(){return l},af:function(){return p},eP:function(){return a},jZ:function(){return u}}),32143==n.j)var i=n(53709);var a=function(e,t,n){return"run-start"===t.type?e={init_options:n,stage:"ready",run:t.data,events:[t]}:e?((e="stt-start"===t.type?Object.assign(Object.assign({},e),{},{stage:"stt",stt:Object.assign(Object.assign({},t.data),{},{done:!1})}):"stt-end"===t.type?Object.assign(Object.assign({},e),{},{stt:Object.assign(Object.assign(Object.assign({},e.stt),t.data),{},{done:!0})}):"intent-start"===t.type?Object.assign(Object.assign({},e),{},{stage:"intent",intent:Object.assign(Object.assign({},t.data),{},{done:!1})}):"intent-end"===t.type?Object.assign(Object.assign({},e),{},{intent:Object.assign(Object.assign(Object.assign({},e.intent),t.data),{},{done:!0})}):"tts-start"===t.type?Object.assign(Object.assign({},e),{},{stage:"tts",tts:Object.assign(Object.assign({},t.data),{},{done:!1})}):"tts-end"===t.type?Object.assign(Object.assign({},e),{},{tts:Object.assign(Object.assign(Object.assign({},e.tts),t.data),{},{done:!0})}):"run-end"===t.type?Object.assign(Object.assign({},e),{},{stage:"done"}):"error"===t.type?Object.assign(Object.assign({},e),{},{stage:"error",error:t.data}):Object.assign({},e)).events=[].concat((0,i.Z)(e.events),[t]),e):void console.warn("Received unexpected event before receiving session",t)},r=function(e,t,n){var i,r=s(e,(function(e){i=a(i,e,n),"run-end"!==e.type&&"error"!==e.type||r.then((function(e){return e()})),i&&t(i)}),n);return r},s=function(e,t,n){return e.connection.subscribeMessage(t,Object.assign(Object.assign({},n),{},{type:"assist_pipeline/run"}))},o=function(e,t){return e.callWS({type:"assist_pipeline/pipeline_debug/list",pipeline_id:t})},l=function(e,t,n){return e.callWS({type:"assist_pipeline/pipeline_debug/get",pipeline_id:t,pipeline_run_id:n})},d=function(e){return e.callWS({type:"assist_pipeline/pipeline/list"})},c=function(e,t){return e.callWS({type:"assist_pipeline/pipeline/get",pipeline_id:t})},u=function(e,t){return e.callWS(Object.assign({type:"assist_pipeline/pipeline/create"},t))},p=function(e,t,n){return e.callWS(Object.assign({type:"assist_pipeline/pipeline/update",pipeline_id:t},n))},f=function(e,t){return e.callWS({type:"assist_pipeline/pipeline/set_preferred",pipeline_id:t})},h=function(e,t){return e.callWS({type:"assist_pipeline/pipeline/delete",pipeline_id:t})},v=function(e){return e.callWS({type:"assist_pipeline/language/list"})}}}]);
//# sourceMappingURL=64721-8E9PpdMyBMY.js.map