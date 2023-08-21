/*! For license information please see 25666-y8i4p4gdkAk.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[25666],{61092:(e,t,i)=>{i.d(t,{K:()=>l});var a=i(87480),r=(i(27763),i(14114)),n=i(98734),o=i(68144),s=i(79932),d=i(83448);class l extends o.oi{constructor(){super(...arguments),this.value="",this.group=null,this.tabindex=-1,this.disabled=!1,this.twoline=!1,this.activated=!1,this.graphic=null,this.multipleGraphics=!1,this.hasMeta=!1,this.noninteractive=!1,this.selected=!1,this.shouldRenderRipple=!1,this._managingList=null,this.boundOnClick=this.onClick.bind(this),this._firstChanged=!0,this._skipPropRequest=!1,this.rippleHandlers=new n.A((()=>(this.shouldRenderRipple=!0,this.ripple))),this.listeners=[{target:this,eventNames:["click"],cb:()=>{this.onClick()}},{target:this,eventNames:["mouseenter"],cb:this.rippleHandlers.startHover},{target:this,eventNames:["mouseleave"],cb:this.rippleHandlers.endHover},{target:this,eventNames:["focus"],cb:this.rippleHandlers.startFocus},{target:this,eventNames:["blur"],cb:this.rippleHandlers.endFocus},{target:this,eventNames:["mousedown","touchstart"],cb:e=>{const t=e.type;this.onDown("mousedown"===t?"mouseup":"touchend",e)}}]}get text(){const e=this.textContent;return e?e.trim():""}render(){const e=this.renderText(),t=this.graphic?this.renderGraphic():o.dy``,i=this.hasMeta?this.renderMeta():o.dy``;return o.dy` ${this.renderRipple()} ${t} ${e} ${i}`}renderRipple(){return this.shouldRenderRipple?o.dy` <mwc-ripple .activated="${this.activated}"> </mwc-ripple>`:this.activated?o.dy`<div class="fake-activated-ripple"></div>`:""}renderGraphic(){const e={multi:this.multipleGraphics};return o.dy` <span class="mdc-deprecated-list-item__graphic material-icons ${(0,d.$)(e)}"> <slot name="graphic"></slot> </span>`}renderMeta(){return o.dy` <span class="mdc-deprecated-list-item__meta material-icons"> <slot name="meta"></slot> </span>`}renderText(){const e=this.twoline?this.renderTwoline():this.renderSingleLine();return o.dy` <span class="mdc-deprecated-list-item__text"> ${e} </span>`}renderSingleLine(){return o.dy`<slot></slot>`}renderTwoline(){return o.dy` <span class="mdc-deprecated-list-item__primary-text"> <slot></slot> </span> <span class="mdc-deprecated-list-item__secondary-text"> <slot name="secondary"></slot> </span> `}onClick(){this.fireRequestSelected(!this.selected,"interaction")}onDown(e,t){const i=()=>{window.removeEventListener(e,i),this.rippleHandlers.endPress()};window.addEventListener(e,i),this.rippleHandlers.startPress(t)}fireRequestSelected(e,t){if(this.noninteractive)return;const i=new CustomEvent("request-selected",{bubbles:!0,composed:!0,detail:{source:t,selected:e}});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.noninteractive||this.setAttribute("mwc-list-item","");for(const e of this.listeners)for(const t of e.eventNames)e.target.addEventListener(t,e.cb,{passive:!0})}disconnectedCallback(){super.disconnectedCallback();for(const e of this.listeners)for(const t of e.eventNames)e.target.removeEventListener(t,e.cb);this._managingList&&(this._managingList.debouncedLayout?this._managingList.debouncedLayout(!0):this._managingList.layout(!0))}firstUpdated(){const e=new Event("list-item-rendered",{bubbles:!0,composed:!0});this.dispatchEvent(e)}}(0,a.__decorate)([(0,s.IO)("slot")],l.prototype,"slotElement",void 0),(0,a.__decorate)([(0,s.GC)("mwc-ripple")],l.prototype,"ripple",void 0),(0,a.__decorate)([(0,s.Cb)({type:String})],l.prototype,"value",void 0),(0,a.__decorate)([(0,s.Cb)({type:String,reflect:!0})],l.prototype,"group",void 0),(0,a.__decorate)([(0,s.Cb)({type:Number,reflect:!0})],l.prototype,"tabindex",void 0),(0,a.__decorate)([(0,s.Cb)({type:Boolean,reflect:!0}),(0,r.P)((function(e){e?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false")}))],l.prototype,"disabled",void 0),(0,a.__decorate)([(0,s.Cb)({type:Boolean,reflect:!0})],l.prototype,"twoline",void 0),(0,a.__decorate)([(0,s.Cb)({type:Boolean,reflect:!0})],l.prototype,"activated",void 0),(0,a.__decorate)([(0,s.Cb)({type:String,reflect:!0})],l.prototype,"graphic",void 0),(0,a.__decorate)([(0,s.Cb)({type:Boolean})],l.prototype,"multipleGraphics",void 0),(0,a.__decorate)([(0,s.Cb)({type:Boolean})],l.prototype,"hasMeta",void 0),(0,a.__decorate)([(0,s.Cb)({type:Boolean,reflect:!0}),(0,r.P)((function(e){e?(this.removeAttribute("aria-checked"),this.removeAttribute("mwc-list-item"),this.selected=!1,this.activated=!1,this.tabIndex=-1):this.setAttribute("mwc-list-item","")}))],l.prototype,"noninteractive",void 0),(0,a.__decorate)([(0,s.Cb)({type:Boolean,reflect:!0}),(0,r.P)((function(e){const t=this.getAttribute("role"),i="gridcell"===t||"option"===t||"row"===t||"tab"===t;i&&e?this.setAttribute("aria-selected","true"):i&&this.setAttribute("aria-selected","false"),this._firstChanged?this._firstChanged=!1:this._skipPropRequest||this.fireRequestSelected(e,"property")}))],l.prototype,"selected",void 0),(0,a.__decorate)([(0,s.SB)()],l.prototype,"shouldRenderRipple",void 0),(0,a.__decorate)([(0,s.SB)()],l.prototype,"_managingList",void 0)},96762:(e,t,i)=>{i.d(t,{W:()=>a});const a=i(68144).iv`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding,16px);padding-right:var(--mdc-list-side-padding,16px);outline:0;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}:host:focus{outline:0}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary,#6200ee);--mdc-ripple-color:var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:.12;opacity:var(--mdc-ripple-activated-opacity,.12);background-color:#6200ee;background-color:var(--mdc-ripple-color,var(--mdc-theme-primary,#6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size,24px);height:var(--mdc-list-item-meta-size,24px);margin-left:auto;margin-right:0;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-background,rgba(0,0,0,.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size,24px);line-height:var(--mdc-list-item-meta-size,24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size,24px)!important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-caption-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size,.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height,1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight,400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing,.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform,inherit)}.mdc-deprecated-list-item__meta[dir=rtl],[dir=rtl] .mdc-deprecated-list-item__meta{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size,.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height,1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight,400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing,.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform,inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface,#000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-background,rgba(0,0,0,.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-icon-on-background,rgba(0,0,0,.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size,40px);height:var(--mdc-list-item-graphic-size,40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size,40px);line-height:var(--mdc-list-item-graphic-size,40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size,40px)!important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin,16px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin,16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size,24px);height:var(--mdc-list-item-graphic-size,24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin,32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size,24px);line-height:var(--mdc-list-item-graphic-size,24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size,24px)!important}:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl],[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin,32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=large]:not([twoLine])),:host([graphic=medium]:not([twoLine])){height:72px}:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size,56px);height:var(--mdc-list-item-graphic-size,56px)}:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size,56px);line-height:var(--mdc-list-item-graphic-size,56px)}:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size,56px)!important}:host([graphic=large]){padding-left:0px}`},76680:(e,t,i)=>{function a(e){return void 0===e||Array.isArray(e)?e:[e]}i.d(t,{r:()=>a})},55642:(e,t,i)=>{i.d(t,{h:()=>n});var a=i(68144),r=i(57835);const n=(0,r.XM)(class extends r.Xe{constructor(e){if(super(e),this._element=void 0,e.type!==r.pX.CHILD)throw new Error("dynamicElementDirective can only be used in content bindings")}update(e,[t,i]){return this._element&&this._element.localName===t?(i&&Object.entries(i).forEach((([e,t])=>{this._element[e]=t})),a.Jb):this.render(t,i)}render(e,t){return this._element=document.createElement(e),t&&Object.entries(t).forEach((([e,t])=>{this._element[e]=t})),this._element}})},35703:(e,t,i)=>{var a=i(17463),r=i(68144),n=i(79932),o=i(14516),s=i(47181),d=i(84627);i(74535);(0,a.Z)([(0,n.Mo)("ha-entities-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array})],key:"value",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-unit-of-measurement"})],key:"includeUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-entities"})],key:"includeEntities",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"exclude-entities"})],key:"excludeEntities",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"picked-entity-label"})],key:"pickedEntityLabel",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"pick-entity-label"})],key:"pickEntityLabel",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"entityFilter",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass)return r.Ld;const e=this._currentEntities;return r.dy` ${e.map((e=>r.dy` <div> <ha-entity-picker allow-custom-entity .curValue="${e}" .hass="${this.hass}" .includeDomains="${this.includeDomains}" .excludeDomains="${this.excludeDomains}" .includeEntities="${this.includeEntities}" .excludeEntities="${this.excludeEntities}" .includeDeviceClasses="${this.includeDeviceClasses}" .includeUnitOfMeasurement="${this.includeUnitOfMeasurement}" .entityFilter="${this._getEntityFilter(this.value,this.entityFilter)}" .value="${e}" .label="${this.pickedEntityLabel}" .disabled="${this.disabled}" @value-changed="${this._entityChanged}"></ha-entity-picker> </div> `))} <div> <ha-entity-picker allow-custom-entity .hass="${this.hass}" .includeDomains="${this.includeDomains}" .excludeDomains="${this.excludeDomains}" .includeEntities="${this.includeEntities}" .excludeEntities="${this.excludeEntities}" .includeDeviceClasses="${this.includeDeviceClasses}" .includeUnitOfMeasurement="${this.includeUnitOfMeasurement}" .entityFilter="${this._getEntityFilter(this.value,this.entityFilter)}" .label="${this.pickEntityLabel}" .helper="${this.helper}" .disabled="${this.disabled}" .required="${this.required&&!e.length}" @value-changed="${this._addEntity}"></ha-entity-picker> </div> `}},{kind:"field",key:"_getEntityFilter",value:()=>(0,o.Z)(((e,t)=>i=>(!e||!e.includes(i.entity_id))&&(!t||t(i))))},{kind:"get",key:"_currentEntities",value:function(){return this.value||[]}},{kind:"method",key:"_updateEntities",value:async function(e){this.value=e,(0,s.B)(this,"value-changed",{value:e})}},{kind:"method",key:"_entityChanged",value:function(e){e.stopPropagation();const t=e.currentTarget.curValue,i=e.detail.value;if(i===t||void 0!==i&&!(0,d.T)(i))return;const a=this._currentEntities;i&&!a.includes(i)?this._updateEntities(a.map((e=>e===t?i:e))):this._updateEntities(a.filter((e=>e!==t)))}},{kind:"method",key:"_addEntity",value:async function(e){e.stopPropagation();const t=e.detail.value;if(!t)return;if(e.currentTarget.value="",!t)return;const i=this._currentEntities;i.includes(t)||this._updateEntities([...i,t])}},{kind:"field",static:!0,key:"styles",value:()=>r.iv`div{margin-top:8px}`}]}}),r.oi)},68331:(e,t,i)=>{var a=i(17463),r=i(34541),n=i(47838),o=i(68144),s=i(79932),d=i(55642),l=i(47181);i(9381),i(25727);const c={boolean:()=>Promise.all([i.e(41985),i.e(65978)]).then(i.bind(i,65978)),constant:()=>i.e(60409).then(i.bind(i,60409)),float:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(43890)]).then(i.bind(i,96272)),grid:()=>i.e(56641).then(i.bind(i,56641)),expandable:()=>i.e(92670).then(i.bind(i,92670)),integer:()=>Promise.all([i.e(2185),i.e(39975),i.e(97215),i.e(6971),i.e(38406),i.e(70588),i.e(39715)]).then(i.bind(i,39715)),multi_select:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(63436),i.e(99608),i.e(65666),i.e(41985),i.e(32140)]).then(i.bind(i,86823)),positive_time_period_dict:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(55105)]).then(i.bind(i,91267)),select:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(2185),i.e(7270),i.e(41985),i.e(70632),i.e(37732),i.e(59221)]).then(i.bind(i,59221)),string:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(72521)]).then(i.bind(i,6782))},h=(e,t)=>e?t.name?e[t.name]:e:null;(0,a.Z)([(0,s.Mo)("ha-form")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"error",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)()],key:"computeError",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"computeLabel",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"computeHelper",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"localizeValue",value:void 0},{kind:"method",key:"focus",value:async function(){await this.updateComplete;const e=this.renderRoot.querySelector(".root");if(e)for(const t of e.children)if("HA-ALERT"!==t.tagName){t instanceof o.fl&&await t.updateComplete,t.focus();break}}},{kind:"method",key:"willUpdate",value:function(e){e.has("schema")&&this.schema&&this.schema.forEach((e=>{var t;"selector"in e||null===(t=c[e.type])||void 0===t||t.call(c)}))}},{kind:"method",key:"render",value:function(){return o.dy` <div class="root" part="root"> ${this.error&&this.error.base?o.dy` <ha-alert alert-type="error"> ${this._computeError(this.error.base,this.schema)} </ha-alert> `:""} ${this.schema.map((e=>{const t=((e,t)=>e&&t.name?e[t.name]:null)(this.error,e);return o.dy` ${t?o.dy` <ha-alert own-margin alert-type="error"> ${this._computeError(t,e)} </ha-alert> `:""} ${"selector"in e?o.dy`<ha-selector .schema="${e}" .hass="${this.hass}" .name="${e.name}" .selector="${e.selector}" .value="${h(this.data,e)}" .label="${this._computeLabel(e,this.data)}" .disabled="${e.disabled||this.disabled||!1}" .placeholder="${e.required?"":e.default}" .helper="${this._computeHelper(e)}" .localizeValue="${this.localizeValue}" .required="${e.required||!1}" .context="${this._generateContext(e)}"></ha-selector>`:(0,d.h)(`ha-form-${e.type}`,{schema:e,data:h(this.data,e),label:this._computeLabel(e,this.data),helper:this._computeHelper(e),disabled:this.disabled||e.disabled||!1,hass:this.hass,computeLabel:this.computeLabel,computeHelper:this.computeHelper,context:this._generateContext(e)})} `}))} </div> `}},{kind:"method",key:"_generateContext",value:function(e){if(!e.context)return;const t={};for(const[i,a]of Object.entries(e.context))t[i]=this.data[a];return t}},{kind:"method",key:"createRenderRoot",value:function(){const e=(0,r.Z)((0,n.Z)(i.prototype),"createRenderRoot",this).call(this);return e.addEventListener("value-changed",(e=>{e.stopPropagation();const t=e.target.schema,i=t.name?{[t.name]:e.detail.value}:e.detail.value;(0,l.B)(this,"value-changed",{value:{...this.data,...i}})})),e}},{kind:"method",key:"_computeLabel",value:function(e,t){return this.computeLabel?this.computeLabel(e,t):e?e.name:""}},{kind:"method",key:"_computeHelper",value:function(e){return this.computeHelper?this.computeHelper(e):""}},{kind:"method",key:"_computeError",value:function(e,t){return this.computeError?this.computeError(e,t):e}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`.root>*{display:block}.root>:not([own-margin]):not(:last-child){margin-bottom:24px}ha-alert[own-margin]{margin-bottom:4px}`}}]}}),o.oi)},25727:(e,t,i)=>{var a=i(17463),r=i(68144),n=i(79932),o=i(14516),s=i(55642),d=i(33855);const l={action:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(2185),i.e(7270),i.e(41985),i.e(53430),i.e(77426),i.e(66074),i.e(37693),i.e(49706),i.e(74535),i.e(47772),i.e(48763),i.e(16731),i.e(44258),i.e(3233),i.e(83166)]).then(i.bind(i,73975)),addon:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(29946),i.e(17165)]).then(i.bind(i,17165)),area:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(78543),i.e(68610)]).then(i.bind(i,68610)),attribute:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(53430),i.e(87688),i.e(29461)]).then(i.bind(i,29461)),assist_pipeline:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(64721)]).then(i.bind(i,17238)),boolean:()=>i.e(71927).then(i.bind(i,71927)),color_rgb:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(62361)]).then(i.bind(i,23512)),config_entry:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(75970),i.e(99244)]).then(i.bind(i,99244)),conversation_agent:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(10272)]).then(i.bind(i,67954)),constant:()=>i.e(4276).then(i.bind(i,4276)),date:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(53430),i.e(94988)]).then(i.bind(i,78191)),datetime:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(53430),i.e(9039),i.e(40341)]).then(i.bind(i,9039)),device:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(78543),i.e(68183)]).then(i.bind(i,68183)),duration:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(81516)]).then(i.bind(i,75054)),entity:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(78543),i.e(49706),i.e(74535),i.e(47772),i.e(14556),i.e(77192)]).then(i.bind(i,1987)),statistic:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(89735),i.e(49706),i.e(47772),i.e(13927),i.e(33663)]).then(i.bind(i,48570)),file:()=>Promise.all([i.e(31338),i.e(20549)]).then(i.bind(i,20549)),language:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(53430),i.e(16754)]).then(i.bind(i,20184)),navigation:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(170),i.e(49261),i.e(89977)]).then(i.bind(i,64754)),number:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(39975),i.e(97215),i.e(6971),i.e(38406),i.e(70588),i.e(52226)]).then(i.bind(i,65353)),object:()=>Promise.all([i.e(77426),i.e(59204)]).then(i.bind(i,59204)),select:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(2185),i.e(7270),i.e(41985),i.e(70632),i.e(37732),i.e(26272)]).then(i.bind(i,26272)),state:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(53430),i.e(87887),i.e(49706),i.e(69950)]).then(i.bind(i,69950)),backup_location:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(70955)]).then(i.bind(i,38204)),stt:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(69311)]).then(i.bind(i,53978)),target:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(99608),i.e(2185),i.e(7270),i.e(78543),i.e(59069),i.e(332),i.e(49706),i.e(74535),i.e(47772),i.e(14556),i.e(63681),i.e(34871)]).then(i.bind(i,66711)),template:()=>i.e(56097).then(i.bind(i,56097)),text:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(5812)]).then(i.bind(i,44117)),time:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(41319)]).then(i.bind(i,77646)),icon:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(82415),i.e(49706),i.e(47772),i.e(53862)]).then(i.bind(i,53862)),media:()=>Promise.all([i.e(44258),i.e(62720)]).then(i.bind(i,44258)),theme:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(94781)]).then(i.bind(i,93476)),tts:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(39633)]).then(i.bind(i,34651)),tts_voice:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(7286)]).then(i.bind(i,57757)),location:()=>Promise.all([i.e(48456),i.e(22821)]).then(i.bind(i,22821)),color_temp:()=>Promise.all([i.e(2185),i.e(39975),i.e(97215),i.e(6971),i.e(38406),i.e(70588),i.e(63958)]).then(i.bind(i,63958)),ui_action:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(41985),i.e(77426),i.e(45311),i.e(48763),i.e(49261),i.e(45767)]).then(i.bind(i,13239)),ui_color:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(27746)]).then(i.bind(i,67165))},c=new Set(["ui-action","ui-color"]);(0,a.Z)([(0,n.Mo)("ha-selector")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"name",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"localizeValue",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[(0,n.Cb)()],key:"context",value:void 0},{kind:"method",key:"focus",value:async function(){var e;await this.updateComplete,null===(e=this.renderRoot.querySelector("#selector"))||void 0===e||e.focus()}},{kind:"get",key:"_type",value:function(){const e=Object.keys(this.selector)[0];return c.has(e)?e.replace("-","_"):e}},{kind:"method",key:"willUpdate",value:function(e){var t;e.has("selector")&&this.selector&&(null===(t=l[this._type])||void 0===t||t.call(l))}},{kind:"field",key:"_handleLegacySelector",value(){return(0,o.Z)((e=>{if("entity"in e)return(0,d.CM)(e);if("device"in e)return(0,d.c9)(e);const t=Object.keys(this.selector)[0];return c.has(t)?{[t.replace("-","_")]:e[t]}:e}))}},{kind:"method",key:"render",value:function(){return r.dy` ${(0,s.h)(`ha-selector-${this._type}`,{hass:this.hass,name:this.name,selector:this._handleLegacySelector(this.selector),value:this.value,label:this.label,placeholder:this.placeholder,disabled:this.disabled,required:this.required,helper:this.helper,context:this.context,localizeValue:this.localizeValue,id:"selector"})} `}}]}}),r.oi)},33855:(e,t,i)=>{i.d(t,{CM:()=>p,aV:()=>d,c9:()=>u,lE:()=>h,lV:()=>m,xO:()=>s});var a=i(76680),r=i(22311),n=i(40095),o=i(57292);const s=(e,t,i,a,r,n)=>{const o=[],s=[];return Object.values(i).forEach((i=>{i.area_id===t&&l(e,Object.values(a),i,r,n)&&s.push(i.id)})),Object.values(a).forEach((i=>{i.area_id===t&&c(e.states[i.entity_id],r,n)&&o.push(i.entity_id)})),{devices:s,entities:o}},d=(e,t,i,a,r)=>{const n=[];return Object.values(i).forEach((i=>{i.device_id===t&&c(e.states[i.entity_id],a,r)&&n.push(i.entity_id)})),{entities:n}},l=(e,t,i,r,n)=>{var s,d;const l=n?(0,o.HP)(n,t):void 0;if(null!==(s=r.target)&&void 0!==s&&s.device&&!(0,a.r)(r.target.device).some((e=>h(e,i,l))))return!1;if(null!==(d=r.target)&&void 0!==d&&d.entity){return t.filter((e=>e.device_id===i.id)).some((t=>{const i=e.states[t.entity_id];return c(i,r,n)}))}return!0},c=(e,t,i)=>{var r;return null===(r=t.target)||void 0===r||!r.entity||(0,a.r)(t.target.entity).some((t=>m(t,e,i)))},h=(e,t,i)=>{const{manufacturer:a,model:r,integration:n}=e;if(a&&t.manufacturer!==a)return!1;if(r&&t.model!==r)return!1;var o;if(n&&i&&(null==i||null===(o=i[t.id])||void 0===o||!o.includes(n)))return!1;return!0},m=(e,t,i)=>{var o;const{domain:s,device_class:d,supported_features:l,integration:c}=e;if(s){const e=(0,r.N)(t);if(Array.isArray(s)?!s.includes(e):e!==s)return!1}if(d){const e=t.attributes.device_class;if(e&&Array.isArray(d)?!d.includes(e):e!==d)return!1}return!(l&&!(0,a.r)(l).some((e=>(0,n.e)(t,e))))&&(!c||(null==i||null===(o=i[t.entity_id])||void 0===o?void 0:o.domain)===c)},p=e=>{if(!e.entity)return{entity:null};if("filter"in e.entity)return e;const{domain:t,integration:i,device_class:a,...r}=e.entity;return t||i||a?{entity:{...r,filter:{domain:t,integration:i,device_class:a}}}:{entity:r}},u=e=>{if(!e.device)return{device:null};if("filter"in e.device)return e;const{integration:t,manufacturer:i,model:a,...r}=e.device;return t||i||a?{device:{...r,filter:{integration:t,manufacturer:i,model:a}}}:{device:r}}},69759:(e,t,i)=>{i.r(t),i.d(t,{HuiCalendarCardEditor:()=>m});var a=i(17463),r=i(68144),n=i(79932),o=i(14516),s=i(38768),d=i(47181),l=(i(35703),i(68331),i(98346));const c=(0,s.f0)(l.I,(0,s.Ry)({title:(0,s.jt)((0,s.G0)([(0,s.Z_)(),(0,s.O7)()])),initial_view:(0,s.jt)((0,s.Z_)()),theme:(0,s.jt)((0,s.Z_)()),entities:(0,s.IX)((0,s.Z_)())})),h=["dayGridMonth","dayGridDay","listWeek"];let m=(0,a.Z)([(0,n.Mo)("hui-calendar-card-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,s.hu)(e,c),this._config=e}},{kind:"field",key:"_schema",value:()=>(0,o.Z)((e=>[{name:"",type:"grid",schema:[{name:"title",required:!1,selector:{text:{}}},{name:"initial_view",required:!1,selector:{select:{options:h.map((t=>({value:t,label:e(`ui.panel.lovelace.editor.card.calendar.views.${t}`)})))}}}]},{name:"theme",required:!1,selector:{theme:{}}}]))},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return r.Ld;const e=this._schema(this.hass.localize),t={initial_view:"dayGridMonth",...this._config};return r.dy` <ha-form .hass="${this.hass}" .data="${t}" .schema="${e}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> <h3> ${this.hass.localize("ui.panel.lovelace.editor.card.calendar.calendar_entities")+" ("+this.hass.localize("ui.panel.lovelace.editor.card.config.required")+")"} </h3> <ha-entities-picker .hass="${this.hass}" .value="${this._config.entities}" .includeDomains="${["calendar"]}" @value-changed="${this._entitiesChanged}"> </ha-entities-picker> `}},{kind:"method",key:"_valueChanged",value:function(e){const t=e.detail.value;(0,d.B)(this,"config-changed",{config:t})}},{kind:"method",key:"_entitiesChanged",value:function(e){const t={...this._config,entities:e.detail.value};(0,d.B)(this,"config-changed",{config:t})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>"title"===e.name?this.hass.localize("ui.panel.lovelace.editor.card.generic.title"):"theme"===e.name?`${this.hass.localize("ui.panel.lovelace.editor.card.generic.theme")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})`:this.hass.localize(`ui.panel.lovelace.editor.card.calendar.${e.name}`)}},{kind:"field",static:!0,key:"styles",value:()=>r.iv`ha-form{display:block;overflow:auto}`}]}}),r.oi)},98346:(e,t,i)=>{i.d(t,{I:()=>r});var a=i(38768);const r=(0,a.Ry)({type:(0,a.Z_)(),view_layout:(0,a.Yj)()})}}]);
//# sourceMappingURL=25666-y8i4p4gdkAk.js.map