/*! For license information please see 10520-Ag0LgoLUl2E.js.LICENSE.txt */
export const id=10520;export const ids=[10520];export const modules={30443:(t,i,e)=>{e.d(i,{Z:()=>o});var a=e(59429),n=e(23682);function o(t,i){(0,n.Z)(2,arguments);var e=(0,a.Z)(t),o=(0,a.Z)(i);return e.getTime()===o.getTime()}},44583:(t,i,e)=>{e.a(t,(async(t,a)=>{try{e.d(i,{DG:()=>m,E8:()=>g,NR:()=>v,o0:()=>c,yD:()=>u});var n=e(14516),o=e(4631),s=e(12198),r=e(49684),d=e(65810),l=t([o,s,r]);[o,s,r]=l.then?(await l)():l;const c=(t,i,e)=>h(i,e.time_zone).format(t),h=(0,n.Z)(((t,i)=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:(0,d.y)(t)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,d.y)(t)?"h12":"h23",timeZone:"server"===t.time_zone?i:void 0}))),m=(t,i,e)=>p(i,e.time_zone).format(t),p=(0,n.Z)(((t,i)=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"short",day:"numeric",hour:(0,d.y)(t)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,d.y)(t)?"h12":"h23",timeZone:"server"===t.time_zone?i:void 0}))),u=(t,i,e)=>f(i,e.time_zone).format(t),f=(0,n.Z)(((t,i)=>new Intl.DateTimeFormat(t.language,{month:"short",day:"numeric",hour:(0,d.y)(t)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,d.y)(t)?"h12":"h23",timeZone:"server"===t.time_zone?i:void 0}))),g=(t,i,e)=>y(i,e.time_zone).format(t),y=(0,n.Z)(((t,i)=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:(0,d.y)(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,d.y)(t)?"h12":"h23",timeZone:"server"===t.time_zone?i:void 0}))),v=(t,i,e)=>`${(0,s.WB)(t,i,e)}, ${(0,r.mr)(t,i,e)}`;a()}catch(t){a(t)}}))},49684:(t,i,e)=>{e.a(t,(async(t,a)=>{try{e.d(i,{Vu:()=>c,Zs:()=>u,mr:()=>d,xO:()=>m});var n=e(14516),o=e(4631),s=e(65810),r=t([o]);o=(r.then?(await r)():r)[0];const d=(t,i,e)=>l(i,e.time_zone).format(t),l=(0,n.Z)(((t,i)=>new Intl.DateTimeFormat(t.language,{hour:"numeric",minute:"2-digit",hourCycle:(0,s.y)(t)?"h12":"h23",timeZone:"server"===t.time_zone?i:void 0}))),c=(t,i,e)=>h(i,e.time_zone).format(t),h=(0,n.Z)(((t,i)=>new Intl.DateTimeFormat(t.language,{hour:(0,s.y)(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,s.y)(t)?"h12":"h23",timeZone:"server"===t.time_zone?i:void 0}))),m=(t,i,e)=>p(i,e.time_zone).format(t),p=(0,n.Z)(((t,i)=>new Intl.DateTimeFormat(t.language,{weekday:"long",hour:(0,s.y)(t)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,s.y)(t)?"h12":"h23",timeZone:"server"===t.time_zone?i:void 0}))),u=(t,i,e)=>f(i,e.time_zone).format(t),f=(0,n.Z)(((t,i)=>new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:"server"===t.time_zone?i:void 0})));a()}catch(t){a(t)}}))},65992:(t,i,e)=>{e.a(t,(async(t,i)=>{try{var a=e(17463),n=e(34541),o=e(47838),s=(e(33829),e(68144)),r=e(79932),d=e(91741),l=e(87744),c=e(42952),h=(e(3143),t([c]));c=(h.then?(await h)():h)[0];(0,a.Z)([(0,r.Mo)("state-info")],(function(t,i){class e extends i{constructor(...i){super(...i),t(this)}}return{F:e,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"inDialog",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"rtl",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)()],key:"color",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass||!this.stateObj)return s.Ld;const t=(0,d.C)(this.stateObj);return s.dy`<state-badge .stateObj="${this.stateObj}" .stateColor="${!0}" .color="${this.color}"></state-badge> <div class="info"> <div class="name" .title="${t}" .inDialog="${this.inDialog}"> ${t} </div> ${this.inDialog?s.dy`<div class="time-ago"> <ha-relative-time id="last_changed" .hass="${this.hass}" .datetime="${this.stateObj.last_changed}" capitalize></ha-relative-time> <simple-tooltip animation-delay="0" for="last_changed"> <div> <div class="row"> <span class="column-name"> ${this.hass.localize("ui.dialogs.more_info_control.last_changed")}: </span> <ha-relative-time .hass="${this.hass}" .datetime="${this.stateObj.last_changed}" capitalize></ha-relative-time> </div> <div class="row"> <span> ${this.hass.localize("ui.dialogs.more_info_control.last_updated")}: </span> <ha-relative-time .hass="${this.hass}" .datetime="${this.stateObj.last_updated}" capitalize></ha-relative-time> </div> </div> </simple-tooltip> </div>`:s.dy`<div class="extra-info"><slot></slot></div>`} </div>`}},{kind:"method",key:"updated",value:function(t){if((0,n.Z)((0,o.Z)(e.prototype),"updated",this).call(this,t),!t.has("hass"))return;const i=t.get("hass");i&&i.locale===this.hass.locale||(this.rtl=(0,l.HE)(this.hass))}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`:host{min-width:120px;white-space:nowrap}state-badge{float:left}:host([rtl]) state-badge{float:right}.info{margin-left:56px;display:flex;flex-direction:column;justify-content:center;height:100%}:host([rtl]) .info{margin-right:56px;margin-left:0;text-align:right}.name{color:var(--primary-text-color);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.name[in-dialog],:host([secondary-line]) .name{line-height:20px}.extra-info,.extra-info>*,.time-ago{color:var(--secondary-text-color);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.row{display:flex;flex-direction:row;flex-wrap:no-wrap;width:100%;justify-content:space-between;margin:0 2px 4px 0}.row:last-child{margin-bottom:0px}`}}]}}),s.oi);i()}catch(t){i(t)}}))},3555:(t,i,e)=>{var a=e(17463),n=e(34541),o=e(47838),s=e(42977),r=e(31338),d=e(68144),l=e(79932);(0,a.Z)([(0,l.Mo)("ha-textfield")],(function(t,i){class e extends i{constructor(...i){super(...i),t(this)}}return{F:e,d:[{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"invalid",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"iconTrailing",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"autocomplete",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"autocorrect",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:"input-spellcheck"})],key:"inputSpellcheck",value:void 0},{kind:"field",decorators:[(0,l.IO)("input")],key:"formElement",value:void 0},{kind:"method",key:"updated",value:function(t){(0,n.Z)((0,o.Z)(e.prototype),"updated",this).call(this,t),(t.has("invalid")&&(this.invalid||void 0!==t.get("invalid"))||t.has("errorMessage"))&&(this.setCustomValidity(this.invalid?this.errorMessage||"Invalid":""),this.reportValidity()),t.has("autocomplete")&&(this.autocomplete?this.formElement.setAttribute("autocomplete",this.autocomplete):this.formElement.removeAttribute("autocomplete")),t.has("autocorrect")&&(this.autocorrect?this.formElement.setAttribute("autocorrect",this.autocorrect):this.formElement.removeAttribute("autocorrect")),t.has("inputSpellcheck")&&(this.inputSpellcheck?this.formElement.setAttribute("spellcheck",this.inputSpellcheck):this.formElement.removeAttribute("spellcheck"))}},{kind:"method",key:"renderIcon",value:function(t,i=!1){const e=i?"trailing":"leading";return d.dy` <span class="mdc-text-field__icon mdc-text-field__icon--${e}" tabindex="${i?1:-1}"> <slot name="${e}Icon"></slot> </span> `}},{kind:"field",static:!0,key:"styles",value:()=>[r.W,d.iv`.mdc-text-field__input{width:var(--ha-textfield-input-width,100%)}.mdc-text-field:not(.mdc-text-field--with-leading-icon){padding:var(--text-field-padding,0px 16px)}.mdc-text-field__affix--suffix{padding-left:var(--text-field-suffix-padding-left,12px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,12px);padding-inline-end:var(--text-field-suffix-padding-right,0px);direction:var(--direction)}.mdc-text-field--with-leading-icon{padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,16px);direction:var(--direction)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:var(--text-field-suffix-padding-left,0px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,0px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:var(--secondary-text-color)}.mdc-text-field__icon{color:var(--secondary-text-color)}.mdc-text-field__icon--leading{margin-inline-start:16px;margin-inline-end:8px;direction:var(--direction)}.mdc-text-field__icon--trailing{padding:var(--textfield-icon-trailing-padding,12px)}.mdc-floating-label:not(.mdc-floating-label--float-above){text-overflow:ellipsis;width:inherit;padding-right:30px;padding-inline-end:30px;padding-inline-start:initial;box-sizing:border-box;direction:var(--direction)}input{text-align:var(--text-field-text-align,start)}:host([no-spinner]) input::-webkit-inner-spin-button,:host([no-spinner]) input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}:host([no-spinner]) input[type=number]{-moz-appearance:textfield}.mdc-text-field__ripple{overflow:hidden}.mdc-text-field{overflow:var(--text-field-overflow)}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start);direction:var(--direction);text-align:var(--float-start)}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px - var(--text-field-suffix-padding-left,0px));inset-inline-start:calc(48px + var(--text-field-suffix-padding-left,0px))!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field__input[type=number]{direction:var(--direction)}.mdc-text-field__affix--prefix{padding-right:var(--text-field-prefix-padding-right,2px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:var(--mdc-text-field-label-ink-color)}`,"rtl"===document.dir?d.iv`.mdc-floating-label,.mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field__affix--suffix,.mdc-text-field__icon--leading,.mdc-text-field__input[type=number]{direction:rtl}`:d.iv``]}]}}),s.P)},55934:(t,i,e)=>{e.a(t,(async(t,a)=>{try{e.r(i);var n=e(17463),o=(e(14271),e(36857)),s=e(79021),r=e(30443),d=e(68144),l=e(79932),c=e(12198),h=e(44583),m=e(49684),p=e(47181),u=e(99137),f=e(65992),g=e(94653),y=(e(85066),e(51144)),v=e(11654),x=e(91476),_=e(56771),b=e(89207),w=e(28940),k=t([c,h,m,f,g,x,_]);[c,h,m,f,g,x,_]=k.then?(await k)():k;const C="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z",L="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";let $=(0,n.Z)(null,(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_calendarId",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_submitting",value:()=>!1},{kind:"field",decorators:[(0,l.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_data",value:void 0},{kind:"method",key:"showDialog",value:async function(t){if(this._params=t,t.entry){const i=t.entry;this._data=i,this._calendarId=t.calendarId}}},{kind:"method",key:"closeDialog",value:function(){this._calendarId=void 0,this._params=void 0,(0,p.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){if(!this._params)return d.Ld;const t=this.hass.states[this._calendarId];return d.dy` <ha-dialog open @closed="${this.closeDialog}" scrimClickAction escapeKeyAction .heading="${d.dy` <div class="header_title">${this._data.summary}</div> <ha-icon-button .label="${this.hass.localize("ui.dialogs.generic.close")}" .path="${L}" dialogAction="close" class="header_button"></ha-icon-button> `}"> <div class="content"> ${this._error?d.dy`<ha-alert alert-type="error">${this._error}</ha-alert>`:""} <div class="field"> <ha-svg-icon .path="${C}"></ha-svg-icon> <div class="value"> ${this._formatDateRange()}<br> ${this._data.rrule?this._renderRRuleAsText(this._data.rrule):""} ${this._data.description?d.dy`<br> <div class="description">${this._data.description}</div> <br>`:d.Ld} </div> </div> <div class="attribute"> <state-info .hass="${this.hass}" .stateObj="${t}" .color="${this._params.color}" inDialog></state-info> </div> </div> ${this._params.canDelete?d.dy` <mwc-button slot="secondaryAction" class="warning" @click="${this._deleteEvent}" .disabled="${this._submitting}"> ${this.hass.localize("ui.components.calendar.event.delete")} </mwc-button> `:""} ${this._params.canEdit?d.dy`<mwc-button slot="primaryAction" @click="${this._editEvent}" .disabled="${this._submitting}"> ${this.hass.localize("ui.components.calendar.event.edit")} </mwc-button>`:""} </ha-dialog> `}},{kind:"method",key:"_renderRRuleAsText",value:function(t){if(!t)return"";try{const i=(0,_.yI)(this.hass,t);return void 0!==i?d.dy`<div id="text">${i}</div>`:d.dy`<div id="text">Cannot convert recurrence rule</div>`}catch(t){return"Error while processing the rule"}}},{kind:"method",key:"_formatDateRange",value:function(){const t=Intl.DateTimeFormat().resolvedOptions().timeZone,i=(0,o.Z)(this._data.dtstart,{timeZone:t}),e=(0,o.Z)(this._data.dtend,{timeZone:t}),a=(0,u.J)(this._data.dtend)?(0,s.Z)(e,-1):e;return(0,r.Z)(i,a)?(0,u.J)(this._data.dtstart)?(0,c.p6)(i,this.hass.locale,this.hass.config):`${(0,c.p6)(i,this.hass.locale,this.hass.config)} ${(0,m.mr)(i,this.hass.locale,this.hass.config)} - ${(0,m.mr)(a,this.hass.locale,this.hass.config)}`:`${(0,u.J)(this._data.dtstart)?(0,c.p6)(i,this.hass.locale,this.hass.config):(0,h.o0)(i,this.hass.locale,this.hass.config)} - ${(0,u.J)(this._data.dtend)?(0,c.p6)(a,this.hass.locale,this.hass.config):(0,h.o0)(a,this.hass.locale,this.hass.config)}`}},{kind:"method",key:"_editEvent",value:async function(){(0,w.R)(this,this._params),this.closeDialog()}},{kind:"method",key:"_deleteEvent",value:async function(){this._submitting=!0;const t=this._params.entry,i=await(0,b.Y)(this,{title:this.hass.localize("ui.components.calendar.event.confirm_delete.delete"),text:t.recurrence_id?this.hass.localize("ui.components.calendar.event.confirm_delete.recurring_prompt"):this.hass.localize("ui.components.calendar.event.confirm_delete.prompt"),confirmText:t.recurrence_id?this.hass.localize("ui.components.calendar.event.confirm_delete.delete_this"):this.hass.localize("ui.components.calendar.event.confirm_delete.delete"),confirmFutureText:t.recurrence_id?this.hass.localize("ui.components.calendar.event.confirm_delete.delete_future"):void 0});if(void 0!==i){try{await(0,y.d1)(this.hass,this._calendarId,t.uid,t.recurrence_id||"",i)}catch(t){return void(this._error=t?t.message:"Unknown error")}finally{this._submitting=!1}await this._params.updated(),this.closeDialog()}else this._submitting=!1}},{kind:"get",static:!0,key:"styles",value:function(){return[v.yu,d.iv`state-info{line-height:40px}ha-svg-icon{width:40px;margin-right:8px;margin-inline-end:16px;margin-inline-start:initial;direction:var(--direction);vertical-align:top}.field{display:flex}.description{color:var(--secondary-text-color);max-width:300px;overflow-wrap:break-word}`]}}]}}),d.oi);customElements.define("dialog-calendar-event-detail",$),a()}catch(t){a(t)}}))},33829:(t,i,e)=>{var a=e(68144);class n extends a.oi{static get styles(){return[a.iv`:host{display:block;position:absolute;outline:0;z-index:1002;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:default;pointer-events:none}#tooltip{display:block;outline:0;font-size:var(--simple-tooltip-font-size,10px);line-height:1;background-color:var(--simple-tooltip-background,#616161);color:var(--simple-tooltip-text-color,#fff);padding:8px;border-radius:var(--simple-tooltip-border-radius,2px);width:var(--simple-tooltip-width)}@keyframes keyFrameScaleUp{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes keyFrameScaleDown{0%{transform:scale(1)}100%{transform:scale(0)}}@keyframes keyFrameFadeInOpacity{0%{opacity:0}100%{opacity:var(--simple-tooltip-opacity,.9)}}@keyframes keyFrameFadeOutOpacity{0%{opacity:var(--simple-tooltip-opacity,.9)}100%{opacity:0}}@keyframes keyFrameSlideDownIn{0%{transform:translateY(-2000px);opacity:0}10%{opacity:.2}100%{transform:translateY(0);opacity:var(--simple-tooltip-opacity,.9)}}@keyframes keyFrameSlideDownOut{0%{transform:translateY(0);opacity:var(--simple-tooltip-opacity,.9)}10%{opacity:.2}100%{transform:translateY(-2000px);opacity:0}}.fade-in-animation{opacity:0;animation-delay:var(--simple-tooltip-delay-in,500ms);animation-name:keyFrameFadeInOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-in,500ms);animation-fill-mode:forwards}.fade-out-animation{opacity:var(--simple-tooltip-opacity,.9);animation-delay:var(--simple-tooltip-delay-out,0ms);animation-name:keyFrameFadeOutOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-out,500ms);animation-fill-mode:forwards}.scale-up-animation{transform:scale(0);opacity:var(--simple-tooltip-opacity,.9);animation-delay:var(--simple-tooltip-delay-in,500ms);animation-name:keyFrameScaleUp;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-in,500ms);animation-fill-mode:forwards}.scale-down-animation{transform:scale(1);opacity:var(--simple-tooltip-opacity,.9);animation-delay:var(--simple-tooltip-delay-out,500ms);animation-name:keyFrameScaleDown;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-out,500ms);animation-fill-mode:forwards}.slide-down-animation{transform:translateY(-2000px);opacity:0;animation-delay:var(--simple-tooltip-delay-out,500ms);animation-name:keyFrameSlideDownIn;animation-iteration-count:1;animation-timing-function:cubic-bezier(0,0,.2,1);animation-duration:var(--simple-tooltip-duration-out,500ms);animation-fill-mode:forwards}.slide-down-animation-out{transform:translateY(0);opacity:var(--simple-tooltip-opacity,.9);animation-delay:var(--simple-tooltip-delay-out,500ms);animation-name:keyFrameSlideDownOut;animation-iteration-count:1;animation-timing-function:cubic-bezier(.4,0,1,1);animation-duration:var(--simple-tooltip-duration-out,500ms);animation-fill-mode:forwards}.cancel-animation{animation-delay:-30s!important}.hidden{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}`]}render(){return a.dy` <div id="tooltip" class="hidden" @animationend="${this._onAnimationEnd}"> <slot></slot> </div>`}static get properties(){return{...super.properties,for:{type:String},manualMode:{type:Boolean,attribute:"manual-mode"},position:{type:String},fitToVisibleBounds:{type:Boolean,attribute:"fit-to-visible-bounds"},offset:{type:Number},marginTop:{type:Number,attribute:"margin-top"},animationDelay:{type:Number,attribute:"animation-delay"},animationEntry:{type:String,attribute:"animation-entry"},animationExit:{type:String,attribute:"animation-exit"},_showing:{type:Boolean}}}static get tag(){return"simple-tooltip"}constructor(){super(),this.manualMode=!1,this.position="bottom",this.fitToVisibleBounds=!1,this.offset=14,this.marginTop=14,this.animationEntry="",this.animationExit="",this.animationConfig={entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]},setTimeout((()=>{this.addEventListener("webkitAnimationEnd",this._onAnimationEnd.bind(this)),this.addEventListener("mouseenter",this.hide.bind(this))}),0)}get target(){var t=this.parentNode,i=this.getRootNode();return this.for?i.querySelector("#"+this.for):t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?i.host:t}disconnectedCallback(){this.manualMode||this._removeListeners(),super.disconnectedCallback()}playAnimation(t){"entry"===t?this.show():"exit"===t&&this.hide()}cancelAnimation(){this.shadowRoot.querySelector("#tooltip").classList.add("cancel-animation")}show(){if(!this._showing){if(""===this.textContent.trim()){for(var t=!0,i=this.children,e=0;e<i.length;e++)if(""!==i[e].textContent.trim()){t=!1;break}if(t)return}this._showing=!0,this.shadowRoot.querySelector("#tooltip").classList.remove("hidden"),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.shadowRoot.querySelector("#tooltip").classList.add(this._getAnimationType("entry"))}}hide(){if(this._showing){if(this._animationPlaying)return this._showing=!1,void this._cancelAnimation();this._onAnimationFinish(),this._showing=!1,this._animationPlaying=!0,clearTimeout(this.__debounceCancel),this.__debounceCancel=setTimeout((()=>{this._cancelAnimation()}),5e3)}}updatePosition(){if(this._target&&this.offsetParent){var t=this.offset;14!=this.marginTop&&14==this.offset&&(t=this.marginTop);var i,e,a=this.offsetParent.getBoundingClientRect(),n=this._target.getBoundingClientRect(),o=this.getBoundingClientRect(),s=(n.width-o.width)/2,r=(n.height-o.height)/2,d=n.left-a.left,l=n.top-a.top;switch(this.position){case"top":i=d+s,e=l-o.height-t;break;case"bottom":i=d+s,e=l+n.height+t;break;case"left":i=d-o.width-t,e=l+r;break;case"right":i=d+n.width+t,e=l+r}this.fitToVisibleBounds?(a.left+i+o.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,i)+"px",this.style.right="auto"),a.top+e+o.height>window.innerHeight?(this.style.bottom=a.height-l+t+"px",this.style.top="auto"):(this.style.top=Math.max(-a.top,e)+"px",this.style.bottom="auto")):(this.style.left=i+"px",this.style.top=e+"px")}}_addListeners(){this._target&&(this._target.addEventListener("mouseenter",this.show.bind(this)),this._target.addEventListener("focus",this.show.bind(this)),this._target.addEventListener("mouseleave",this.hide.bind(this)),this._target.addEventListener("blur",this.hide.bind(this)),this._target.addEventListener("tap",this.hide.bind(this)))}_findTarget(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()}_manualModeChanged(){this.manualMode?this._removeListeners():this._addListeners()}_cancelAnimation(){this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("entry")),this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.add("hidden")}_onAnimationFinish(){this._showing&&(this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("entry")),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.add(this._getAnimationType("exit")))}_onAnimationEnd(){this._animationPlaying=!1,this._showing||(this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.shadowRoot.querySelector("#tooltip").classList.add("hidden"))}_getAnimationType(t){if("entry"===t&&""!==this.animationEntry)return this.animationEntry;if("exit"===t&&""!==this.animationExit)return this.animationExit;if(this.animationConfig[t]&&"string"==typeof this.animationConfig[t][0].name){if(this.animationConfig[t][0].timing&&this.animationConfig[t][0].timing.delay&&0!==this.animationConfig[t][0].timing.delay){var i=this.animationConfig[t][0].timing.delay;"entry"===t?document.documentElement.style.setProperty("--simple-tooltip-delay-in",i+"ms"):"exit"===t&&document.documentElement.style.setProperty("--simple-tooltip-delay-out",i+"ms")}return this.animationConfig[t][0].name}}_removeListeners(){this._target&&(this._target.removeEventListener("mouseover",this.show.bind(this)),this._target.removeEventListener("focusin",this.show.bind(this)),this._target.removeEventListener("mouseout",this.hide.bind(this)),this._target.removeEventListener("focusout",this.hide.bind(this)),this._target.removeEventListener("click",this.hide.bind(this)))}firstUpdated(t){this.setAttribute("role","tooltip"),this.setAttribute("tabindex",-1),this._findTarget()}updated(t){t.forEach(((t,i)=>{"for"==i&&this._findTarget(this[i],t),"manualMode"==i&&this._manualModeChanged(this[i],t),"animationDelay"==i&&this._delayChange(this[i],t)}))}_delayChange(t){500!==t&&document.documentElement.style.setProperty("--simple-tooltip-delay-in",t+"ms")}}customElements.define(n.tag,n)}};
//# sourceMappingURL=10520-Ag0LgoLUl2E.js.map