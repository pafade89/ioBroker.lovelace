/*! For license information please see 68183-kSBUj05uYlA.js.LICENSE.txt */
export const id=68183;export const ids=[68183];export const modules={44577:(e,i,t)=>{var a=t(43204),d=t(79932),o=t(61092),n=t(96762);let s=class extends o.K{};s.styles=[n.W],s=(0,a.__decorate)([(0,d.Mo)("mwc-list-item")],s)},60033:(e,i,t)=>{var a=t(17463),d=(t(44577),t(68144)),o=t(79932),n=t(14516),s=t(47181),r=t(58831),l=t(85415),c=t(57066),u=t(57292),v=t(74186),h=t(73826),p=(t(77576),t(40163));const f=e=>d.dy`<mwc-list-item .twoline="${!!e.area}"> <span>${e.name}</span> <span slot="secondary">${e.area}</span> </mwc-list-item>`;(0,a.Z)([(0,o.Mo)("ha-device-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"devices",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"areas",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"entities",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Array,attribute:"exclude-devices"})],key:"excludeDevices",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,o.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"field",key:"_getDevices",value(){return(0,n.Z)(((e,i,t,a,d,o,n,s,c)=>{if(!e.length)return[{id:"no_devices",area:"",name:this.hass.localize("ui.components.device-picker.no_devices"),strings:[]}];let v={};(a||d||o||s)&&(v=(0,u.pI)(t));const h={};for(const e of i)h[e.area_id]=e;let p=e.filter((e=>e.id===this.value||!e.disabled_by));a&&(p=p.filter((e=>{const i=v[e.id];return!(!i||!i.length)&&v[e.id].some((e=>a.includes((0,r.M)(e.entity_id))))}))),d&&(p=p.filter((e=>{const i=v[e.id];return!i||!i.length||t.every((e=>!d.includes((0,r.M)(e.entity_id))))}))),c&&(p=p.filter((e=>!c.includes(e.id)))),o&&(p=p.filter((e=>{const i=v[e.id];return!(!i||!i.length)&&v[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&(i.attributes.device_class&&o.includes(i.attributes.device_class))}))}))),s&&(p=p.filter((e=>{const i=v[e.id];return!(!i||!i.length)&&i.some((e=>{const i=this.hass.states[e.entity_id];return!!i&&s(i)}))}))),n&&(p=p.filter((e=>e.id===this.value||n(e))));const f=p.map((e=>{const i=(0,u.jL)(e,this.hass,v[e.id]);return{id:e.id,name:i,area:e.area_id&&h[e.area_id]?h[e.area_id].name:this.hass.localize("ui.components.device-picker.no_area"),strings:[i||""]}}));return f.length?1===f.length?f:f.sort(((e,i)=>(0,l.$)(e.name||"",i.name||"",this.hass.locale.language))):[{id:"no_devices",area:"",name:this.hass.localize("ui.components.device-picker.no_match"),strings:[]}]}))}},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.open())}},{kind:"method",key:"focus",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.focus())}},{kind:"method",key:"hassSubscribe",value:function(){return[(0,u.q4)(this.hass.connection,(e=>{this.devices=e})),(0,c.sG)(this.hass.connection,(e=>{this.areas=e})),(0,v.LM)(this.hass.connection,(e=>{this.entities=e}))]}},{kind:"method",key:"updated",value:function(e){if(!this._init&&this.devices&&this.areas&&this.entities||this._init&&e.has("_opened")&&this._opened){this._init=!0;const e=this._getDevices(this.devices,this.areas,this.entities,this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.excludeDevices);this.comboBox.items=e,this.comboBox.filteredItems=e}}},{kind:"method",key:"render",value:function(){return d.dy` <ha-combo-box .hass="${this.hass}" .label="${void 0===this.label&&this.hass?this.hass.localize("ui.components.device-picker.device"):this.label}" .value="${this._value}" .helper="${this.helper}" .renderer="${f}" .disabled="${this.disabled}" .required="${this.required}" item-id-path="id" item-value-path="id" item-label-path="name" @opened-changed="${this._openedChanged}" @value-changed="${this._deviceChanged}" @filter-changed="${this._filterChanged}"></ha-combo-box> `}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_filterChanged",value:function(e){const i=e.target,t=e.detail.value.toLowerCase();i.filteredItems=t.length?(0,p.q)(t,i.items||[]):i.items}},{kind:"method",key:"_deviceChanged",value:function(e){e.stopPropagation();let i=e.detail.value;"no_devices"===i&&(i=""),i!==this._value&&this._setValue(i)}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,s.B)(this,"value-changed",{value:e}),(0,s.B)(this,"change")}),0)}}]}}),(0,h.f)(d.oi))},77576:(e,i,t)=>{var a=t(17463),d=t(34541),o=t(47838),n=t(29530),s=(t(15681),t(53947)),r=t(68144),l=t(79932),c=t(30153),u=t(47181);t(10983),t(73366),t(3555);(0,s.hC)("vaadin-combo-box-item",r.iv`:host{padding:0!important}:host([focused]:not([disabled])){background-color:rgba(var(--rgb-primary-text-color,0,0,0),.12)}:host([selected]:not([disabled])){background-color:transparent;color:var(--mdc-theme-primary);--mdc-ripple-color:var(--mdc-theme-primary);--mdc-theme-text-primary-on-background:var(--mdc-theme-primary)}:host([selected]:not([disabled])):before{background-color:var(--mdc-theme-primary);opacity:.12;content:"";position:absolute;top:0;left:0;width:100%;height:100%}:host([selected][focused]:not([disabled])):before{opacity:.24}:host(:hover:not([disabled])){background-color:transparent}[part=content]{width:100%}[part=checkmark]{display:none}`);(0,a.Z)([(0,l.Mo)("ha-combo-box")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"validationMessage",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"invalid",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"icon",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"items",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"filteredItems",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"dataProvider",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:"allow-custom-value",type:Boolean})],key:"allowCustomValue",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({attribute:"item-value-path"})],key:"itemValuePath",value:()=>"value"},{kind:"field",decorators:[(0,l.Cb)({attribute:"item-label-path"})],key:"itemLabelPath",value:()=>"label"},{kind:"field",decorators:[(0,l.Cb)({attribute:"item-id-path"})],key:"itemIdPath",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"renderer",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,reflect:!0,attribute:"opened"})],key:"opened",value:void 0},{kind:"field",decorators:[(0,l.IO)("vaadin-combo-box-light",!0)],key:"_comboBox",value:void 0},{kind:"field",decorators:[(0,l.IO)("ha-textfield",!0)],key:"_inputElement",value:void 0},{kind:"field",key:"_overlayMutationObserver",value:void 0},{kind:"field",key:"_bodyMutationObserver",value:void 0},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,null===(e=this._comboBox)||void 0===e||e.open()}},{kind:"method",key:"focus",value:async function(){var e,i;await this.updateComplete,await(null===(e=this._inputElement)||void 0===e?void 0:e.updateComplete),null===(i=this._inputElement)||void 0===i||i.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,d.Z)((0,o.Z)(t.prototype),"disconnectedCallback",this).call(this),this._overlayMutationObserver&&(this._overlayMutationObserver.disconnect(),this._overlayMutationObserver=void 0),this._bodyMutationObserver&&(this._bodyMutationObserver.disconnect(),this._bodyMutationObserver=void 0)}},{kind:"get",key:"selectedItem",value:function(){return this._comboBox.selectedItem}},{kind:"method",key:"setInputValue",value:function(e){this._comboBox.value=e}},{kind:"method",key:"render",value:function(){var e;return r.dy` <vaadin-combo-box-light .itemValuePath="${this.itemValuePath}" .itemIdPath="${this.itemIdPath}" .itemLabelPath="${this.itemLabelPath}" .items="${this.items}" .value="${this.value||""}" .filteredItems="${this.filteredItems}" .dataProvider="${this.dataProvider}" .allowCustomValue="${this.allowCustomValue}" .disabled="${this.disabled}" .required="${this.required}" ${(0,n.t)(this.renderer||this._defaultRowRenderer)} @opened-changed="${this._openedChanged}" @filter-changed="${this._filterChanged}" @value-changed="${this._valueChanged}" attr-for-value="value"> <ha-textfield label="${(0,c.o)(this.label)}" placeholder="${(0,c.o)(this.placeholder)}" ?disabled="${this.disabled}" ?required="${this.required}" validationMessage="${(0,c.o)(this.validationMessage)}" .errorMessage="${this.errorMessage}" class="input" autocapitalize="none" autocomplete="off" autocorrect="off" input-spellcheck="false" .suffix="${r.dy`<div style="width:28px" role="none presentation"></div>`}" .icon="${this.icon}" .invalid="${this.invalid}" helper="${(0,c.o)(this.helper)}" helperPersistent> <slot name="icon" slot="leadingIcon"></slot> </ha-textfield> ${this.value?r.dy`<ha-svg-icon role="button" tabindex="-1" aria-label="${(0,c.o)(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.clear"))}" class="clear-button" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" @click="${this._clearValue}"></ha-svg-icon>`:""} <ha-svg-icon role="button" tabindex="-1" aria-label="${(0,c.o)(this.label)}" aria-expanded="${this.opened?"true":"false"}" class="toggle-button" .path="${this.opened?"M7,15L12,10L17,15H7Z":"M7,10L12,15L17,10H7Z"}" @click="${this._toggleOpen}"></ha-svg-icon> </vaadin-combo-box-light> `}},{kind:"field",key:"_defaultRowRenderer",value(){return e=>r.dy`<ha-list-item> ${this.itemLabelPath?e[this.itemLabelPath]:e} </ha-list-item>`}},{kind:"method",key:"_clearValue",value:function(e){e.stopPropagation(),(0,u.B)(this,"value-changed",{value:void 0})}},{kind:"method",key:"_toggleOpen",value:function(e){var i,t;this.opened?(null===(i=this._comboBox)||void 0===i||i.close(),e.stopPropagation()):null===(t=this._comboBox)||void 0===t||t.inputElement.focus()}},{kind:"method",key:"_openedChanged",value:function(e){e.stopPropagation();const i=e.detail.value;if(setTimeout((()=>{this.opened=i}),0),(0,u.B)(this,"opened-changed",{value:e.detail.value}),i){const e=document.querySelector("vaadin-combo-box-overlay");e&&this._removeInert(e),this._observeBody()}else{var t;null===(t=this._bodyMutationObserver)||void 0===t||t.disconnect(),this._bodyMutationObserver=void 0}}},{kind:"method",key:"_observeBody",value:function(){"MutationObserver"in window&&!this._bodyMutationObserver&&(this._bodyMutationObserver=new MutationObserver((e=>{e.forEach((e=>{e.addedNodes.forEach((e=>{"VAADIN-COMBO-BOX-OVERLAY"===e.nodeName&&this._removeInert(e)})),e.removedNodes.forEach((e=>{var i;"VAADIN-COMBO-BOX-OVERLAY"===e.nodeName&&(null===(i=this._overlayMutationObserver)||void 0===i||i.disconnect(),this._overlayMutationObserver=void 0)}))}))})),this._bodyMutationObserver.observe(document.body,{childList:!0}))}},{kind:"method",key:"_removeInert",value:function(e){var i;if(e.inert)return e.inert=!1,null===(i=this._overlayMutationObserver)||void 0===i||i.disconnect(),void(this._overlayMutationObserver=void 0);"MutationObserver"in window&&!this._overlayMutationObserver&&(this._overlayMutationObserver=new MutationObserver((e=>{e.forEach((e=>{if("inert"===e.attributeName){const t=e.target;var i;if(t.inert)null===(i=this._overlayMutationObserver)||void 0===i||i.disconnect(),this._overlayMutationObserver=void 0,t.inert=!1}}))})),this._overlayMutationObserver.observe(e,{attributes:!0}))}},{kind:"method",key:"_filterChanged",value:function(e){e.stopPropagation(),(0,u.B)(this,"filter-changed",{value:e.detail.value})}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation(),this.allowCustomValue||(this._comboBox._closeOnBlurIsPrevented=!0);const i=e.detail.value;i!==this.value&&(0,u.B)(this,"value-changed",{value:i||void 0})}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`:host{display:block;width:100%}vaadin-combo-box-light{position:relative;--vaadin-combo-box-overlay-max-height:calc(45vh - 56px)}ha-textfield{width:100%}ha-textfield>ha-icon-button{--mdc-icon-button-size:24px;padding:2px;color:var(--secondary-text-color)}ha-svg-icon{color:var(--input-dropdown-icon-color);position:absolute;cursor:pointer}.toggle-button{right:12px;top:-10px;inset-inline-start:initial;inset-inline-end:12px;direction:var(--direction)}:host([opened]) .toggle-button{color:var(--primary-color)}.clear-button{--mdc-icon-size:20px;top:-7px;right:36px;inset-inline-start:initial;inset-inline-end:36px;direction:var(--direction)}`}}]}}),r.oi)},73366:(e,i,t)=>{t.d(i,{M:()=>c});var a=t(17463),d=t(34541),o=t(47838),n=t(61092),s=t(96762),r=t(68144),l=t(79932);let c=(0,a.Z)([(0,l.Mo)("ha-list-item")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,d.Z)((0,o.Z)(t.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[s.W,r.iv`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`]}}]}}),n.K)},68183:(e,i,t)=>{t.r(i),t.d(i,{HaDeviceSelector:()=>p});var a=t(17463),d=t(34541),o=t(47838),n=t(68144),s=t(79932),r=t(14516),l=t(76680),c=t(57292),u=t(75012),v=t(33855),h=(t(60033),t(47181));(0,a.Z)([(0,s.Mo)("ha-devices-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"picked-device-label"}),(0,s.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",key:"pickedDeviceLabel",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"pick-device-label"})],key:"pickDeviceLabel",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"entityFilter",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass)return n.Ld;const e=this._currentDevices;return n.dy` ${e.map((e=>n.dy` <div> <ha-device-picker allow-custom-entity .curValue="${e}" .hass="${this.hass}" .deviceFilter="${this.deviceFilter}" .entityFilter="${this.entityFilter}" .includeDomains="${this.includeDomains}" .excludeDomains="${this.excludeDomains}" .includeDeviceClasses="${this.includeDeviceClasses}" .value="${e}" .label="${this.pickedDeviceLabel}" .disabled="${this.disabled}" @value-changed="${this._deviceChanged}"></ha-device-picker> </div> `))} <div> <ha-device-picker allow-custom-entity .hass="${this.hass}" .helper="${this.helper}" .deviceFilter="${this.deviceFilter}" .entityFilter="${this.entityFilter}" .includeDomains="${this.includeDomains}" .excludeDomains="${this.excludeDomains}" .excludeDevices="${e}" .includeDeviceClasses="${this.includeDeviceClasses}" .label="${this.pickDeviceLabel}" .disabled="${this.disabled}" .required="${this.required&&!e.length}" @value-changed="${this._addDevice}"></ha-device-picker> </div> `}},{kind:"get",key:"_currentDevices",value:function(){return this.value||[]}},{kind:"method",key:"_updateDevices",value:async function(e){(0,h.B)(this,"value-changed",{value:e}),this.value=e}},{kind:"method",key:"_deviceChanged",value:function(e){e.stopPropagation();const i=e.currentTarget.curValue,t=e.detail.value;t!==i&&(void 0===t?this._updateDevices(this._currentDevices.filter((e=>e!==i))):this._updateDevices(this._currentDevices.map((e=>e===i?t:e))))}},{kind:"method",key:"_addDevice",value:async function(e){e.stopPropagation();const i=e.detail.value;if(e.currentTarget.value="",!i)return;const t=this._currentDevices;t.includes(i)||this._updateDevices([...t,i])}},{kind:"field",static:!0,key:"styles",value:()=>n.iv`div{margin-top:8px}`}]}}),n.oi);let p=(0,a.Z)([(0,s.Mo)("ha-selector-device")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,s.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_entitySources",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",key:"_deviceIntegrationLookup",value:()=>(0,r.Z)(c.HP)},{kind:"method",key:"_hasIntegration",value:function(e){var i,t;return(null===(i=e.device)||void 0===i?void 0:i.filter)&&(0,l.r)(e.device.filter).some((e=>e.integration))||(null===(t=e.device)||void 0===t?void 0:t.entity)&&(0,l.r)(e.device.entity).some((e=>e.integration))}},{kind:"method",key:"updated",value:function(e){(0,d.Z)((0,o.Z)(t.prototype),"updated",this).call(this,e),e.has("selector")&&this._hasIntegration(this.selector)&&!this._entitySources&&(0,u.m)(this.hass).then((e=>{this._entitySources=e}))}},{kind:"method",key:"render",value:function(){var e,i,t;return this._hasIntegration(this.selector)&&!this._entitySources?n.Ld:null!==(e=this.selector.device)&&void 0!==e&&e.multiple?n.dy` ${this.label?n.dy`<label>${this.label}</label>`:""} <ha-devices-picker .hass="${this.hass}" .value="${this.value}" .helper="${this.helper}" .deviceFilter="${this._filterDevices}" .entityFilter="${null!==(i=this.selector.device)&&void 0!==i&&i.entity?this._filterEntities:void 0}" .disabled="${this.disabled}" .required="${this.required}"></ha-devices-picker> `:n.dy` <ha-device-picker .hass="${this.hass}" .value="${this.value}" .label="${this.label}" .helper="${this.helper}" .deviceFilter="${this._filterDevices}" .entityFilter="${null!==(t=this.selector.device)&&void 0!==t&&t.entity?this._filterEntities:void 0}" .disabled="${this.disabled}" .required="${this.required}" allow-custom-entity></ha-device-picker> `}},{kind:"field",key:"_filterDevices",value(){return e=>{var i;if(null===(i=this.selector.device)||void 0===i||!i.filter)return!0;const t=this._entitySources?this._deviceIntegrationLookup(this._entitySources,Object.values(this.hass.entities)):void 0;return(0,l.r)(this.selector.device.filter).some((i=>(0,v.lE)(i,e,t)))}}},{kind:"field",key:"_filterEntities",value(){return e=>(0,l.r)(this.selector.device.entity).some((i=>(0,v.lV)(i,e,this._entitySources)))}}]}}),n.oi)},3555:(e,i,t)=>{var a=t(17463),d=t(34541),o=t(47838),n=t(42977),s=t(31338),r=t(68144),l=t(79932);(0,a.Z)([(0,l.Mo)("ha-textfield")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"invalid",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"iconTrailing",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"autocomplete",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"autocorrect",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:"input-spellcheck"})],key:"inputSpellcheck",value:void 0},{kind:"field",decorators:[(0,l.IO)("input")],key:"formElement",value:void 0},{kind:"method",key:"updated",value:function(e){(0,d.Z)((0,o.Z)(t.prototype),"updated",this).call(this,e),(e.has("invalid")&&(this.invalid||void 0!==e.get("invalid"))||e.has("errorMessage"))&&(this.setCustomValidity(this.invalid?this.errorMessage||"Invalid":""),this.reportValidity()),e.has("autocomplete")&&(this.autocomplete?this.formElement.setAttribute("autocomplete",this.autocomplete):this.formElement.removeAttribute("autocomplete")),e.has("autocorrect")&&(this.autocorrect?this.formElement.setAttribute("autocorrect",this.autocorrect):this.formElement.removeAttribute("autocorrect")),e.has("inputSpellcheck")&&(this.inputSpellcheck?this.formElement.setAttribute("spellcheck",this.inputSpellcheck):this.formElement.removeAttribute("spellcheck"))}},{kind:"method",key:"renderIcon",value:function(e,i=!1){const t=i?"trailing":"leading";return r.dy` <span class="mdc-text-field__icon mdc-text-field__icon--${t}" tabindex="${i?1:-1}"> <slot name="${t}Icon"></slot> </span> `}},{kind:"field",static:!0,key:"styles",value:()=>[s.W,r.iv`.mdc-text-field__input{width:var(--ha-textfield-input-width,100%)}.mdc-text-field:not(.mdc-text-field--with-leading-icon){padding:var(--text-field-padding,0px 16px)}.mdc-text-field__affix--suffix{padding-left:var(--text-field-suffix-padding-left,12px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,12px);padding-inline-end:var(--text-field-suffix-padding-right,0px);direction:var(--direction)}.mdc-text-field--with-leading-icon{padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,16px);direction:var(--direction)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:var(--text-field-suffix-padding-left,0px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,0px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:var(--secondary-text-color)}.mdc-text-field__icon{color:var(--secondary-text-color)}.mdc-text-field__icon--leading{margin-inline-start:16px;margin-inline-end:8px;direction:var(--direction)}.mdc-text-field__icon--trailing{padding:var(--textfield-icon-trailing-padding,12px)}.mdc-floating-label:not(.mdc-floating-label--float-above){text-overflow:ellipsis;width:inherit;padding-right:30px;padding-inline-end:30px;padding-inline-start:initial;box-sizing:border-box;direction:var(--direction)}input{text-align:var(--text-field-text-align,start)}:host([no-spinner]) input::-webkit-inner-spin-button,:host([no-spinner]) input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}:host([no-spinner]) input[type=number]{-moz-appearance:textfield}.mdc-text-field__ripple{overflow:hidden}.mdc-text-field{overflow:var(--text-field-overflow)}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start);direction:var(--direction);text-align:var(--float-start)}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px - var(--text-field-suffix-padding-left,0px));inset-inline-start:calc(48px + var(--text-field-suffix-padding-left,0px))!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field__input[type=number]{direction:var(--direction)}.mdc-text-field__affix--prefix{padding-right:var(--text-field-prefix-padding-right,2px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:var(--mdc-text-field-label-ink-color)}`,"rtl"===document.dir?r.iv`.mdc-floating-label,.mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field__affix--suffix,.mdc-text-field__icon--leading,.mdc-text-field__input[type=number]{direction:rtl}`:r.iv``]}]}}),n.P)},57066:(e,i,t)=>{t.d(i,{Dl:()=>h,IO:()=>s,Lo:()=>n,TD:()=>v,qv:()=>r,sG:()=>u});var a=t(97330),d=t(85415),o=t(38346);const n=(e,i)=>e.callWS({type:"config/area_registry/create",...i}),s=(e,i,t)=>e.callWS({type:"config/area_registry/update",area_id:i,...t}),r=(e,i)=>e.callWS({type:"config/area_registry/delete",area_id:i}),l=e=>e.sendMessagePromise({type:"config/area_registry/list"}).then((e=>e.sort(((e,i)=>(0,d.$)(e.name,i.name))))),c=(e,i)=>e.subscribeEvents((0,o.D)((()=>l(e).then((e=>i.setState(e,!0)))),500,!0),"area_registry_updated"),u=(e,i)=>(0,a.B)("_areaRegistry",l,c,e,i),v=e=>{const i={};for(const t of e)t.area_id&&(t.area_id in i||(i[t.area_id]=[]),i[t.area_id].push(t));return i},h=e=>{const i={};for(const t of e)t.area_id&&(t.area_id in i||(i[t.area_id]=[]),i[t.area_id].push(t));return i}},74186:(e,i,t)=>{t.d(i,{Iq:()=>p,L3:()=>h,LM:()=>g,Mw:()=>w,Nv:()=>f,_V:()=>C,eD:()=>c,hg:()=>m,ol:()=>x,vA:()=>v,w1:()=>$,wX:()=>u,z3:()=>y});var a=t(97330),d=t(14516),o=t(91741),n=t(85415),s=t(38346);if(98818!=t.j)var r=t(58831);const l=98818!=t.j?["sensor","binary_sensor"]:null,c=(e,i)=>{const t=i.filter((i=>e.states[i.entity_id]&&"battery"===e.states[i.entity_id].attributes.device_class&&l.includes((0,r.M)(i.entity_id)))).sort(((e,i)=>l.indexOf((0,r.M)(e.entity_id))-l.indexOf((0,r.M)(i.entity_id))));if(t.length>0)return t[0]},u=(e,i)=>i.find((i=>e.states[i.entity_id]&&"battery_charging"===e.states[i.entity_id].attributes.device_class)),v=(e,i)=>{if(i.name)return i.name;const t=e.states[i.entity_id];return t?(0,o.C)(t):i.original_name?i.original_name:i.entity_id},h=(e,i)=>e.callWS({type:"config/entity_registry/get",entity_id:i}),p=(e,i)=>e.callWS({type:"config/entity_registry/get_entries",entity_ids:i}),f=(e,i,t)=>e.callWS({type:"config/entity_registry/update",entity_id:i,...t}),y=(e,i)=>e.callWS({type:"config/entity_registry/remove",entity_id:i}),m=e=>e.sendMessagePromise({type:"config/entity_registry/list"}),b=e=>e.sendMessagePromise({type:"config/entity_registry/list_for_display"}),k=(e,i)=>e.subscribeEvents((0,s.D)((()=>m(e).then((e=>i.setState(e,!0)))),500,!0),"entity_registry_updated"),g=(e,i)=>(0,a.B)("_entityRegistry",m,k,e,i),_=(e,i)=>e.subscribeEvents((0,s.D)((()=>b(e).then((e=>i.setState(e,!0)))),500,!0),"entity_registry_updated"),x=(e,i)=>(0,a.B)("_entityRegistryDisplay",b,_,e,i),C=(e,i)=>e.sort(((e,t)=>(0,n.f)(e.name||"",t.name||"",i))),$=(0,d.Z)((e=>{const i={};for(const t of e)i[t.entity_id]=t;return i})),w=(0,d.Z)((e=>{const i={};for(const t of e)i[t.id]=t;return i}))},75012:(e,i,t)=>{t.d(i,{m:()=>o});const a=async(e,i,t,d,o,...n)=>{const s=o,r=s[e],l=r=>d&&d(o,r.result)!==r.cacheKey?(s[e]=void 0,a(e,i,t,d,o,...n)):r.result;if(r)return r instanceof Promise?r.then(l):l(r);const c=t(o,...n);return s[e]=c,c.then((t=>{s[e]={result:t,cacheKey:null==d?void 0:d(o,t)},setTimeout((()=>{s[e]=void 0}),i)}),(()=>{s[e]=void 0})),c},d=(e,i)=>e.callWS({type:"entity/source",entity_id:i}),o=(e,i)=>i?d(e,i):a("_entitySources",3e4,d,(e=>Object.keys(e.states).length),e)},73826:(e,i,t)=>{t.d(i,{f:()=>s});var a=t(17463),d=t(34541),o=t(47838),n=t(79932);const s=e=>(0,a.Z)(null,(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,d.Z)((0,o.Z)(t.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,d.Z)((0,o.Z)(t.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if((0,d.Z)((0,o.Z)(t.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const i of e.keys())if(this.hassSubscribeRequiredHostProps.includes(i))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((e=>void 0===this[e]))||(this.__unsubs=this.hassSubscribe())}}]}}),e)}};
//# sourceMappingURL=68183-kSBUj05uYlA.js.map