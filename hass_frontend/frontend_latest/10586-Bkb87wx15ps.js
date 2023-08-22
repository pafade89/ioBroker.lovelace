export const id=10586;export const ids=[10586];export const modules={68101:(e,i,t)=>{var a=t(17463),o=(t(44577),t(68144)),d=t(79932),s=t(83448),l=t(14516),n=t(47181),r=t(58831),c=t(40163),h=t(57066),u=t(57292),v=t(26765);t(77576),t(10983),t(52039);const m=e=>o.dy`<mwc-list-item class="${(0,s.$)({"add-new":"add_new"===e.area_id})}"> ${e.name} </mwc-list-item>`;(0,a.Z)([(0,d.Mo)("ha-area-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,attribute:"no-add"})],key:"noAdd",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Array,attribute:"exclude-areas"})],key:"excludeAreas",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,d.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_suggestion",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.open())}},{kind:"method",key:"focus",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.focus())}},{kind:"field",key:"_getAreas",value(){return(0,l.Z)(((e,i,t,a,o,d,s,l,n,c)=>{if(!e.length)return[{area_id:"no_areas",name:this.hass.localize("ui.components.area-picker.no_areas"),picture:null,aliases:[]}];let h,v,m={};(a||o||d||s||l)&&(m=(0,u.R6)(t),h=i,v=t.filter((e=>e.area_id)),a&&(h=h.filter((e=>{const i=m[e.id];return!(!i||!i.length)&&m[e.id].some((e=>a.includes((0,r.M)(e.entity_id))))})),v=v.filter((e=>a.includes((0,r.M)(e.entity_id))))),o&&(h=h.filter((e=>{const i=m[e.id];return!i||!i.length||t.every((e=>!o.includes((0,r.M)(e.entity_id))))})),v=v.filter((e=>!o.includes((0,r.M)(e.entity_id))))),d&&(h=h.filter((e=>{const i=m[e.id];return!(!i||!i.length)&&m[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&(i.attributes.device_class&&d.includes(i.attributes.device_class))}))})),v=v.filter((e=>{const i=this.hass.states[e.entity_id];return i.attributes.device_class&&d.includes(i.attributes.device_class)}))),s&&(h=h.filter((e=>s(e)))),l&&(h=h.filter((e=>{const i=m[e.id];return!(!i||!i.length)&&m[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&l(i)}))})),v=v.filter((e=>{const i=this.hass.states[e.entity_id];return!!i&&l(i)}))));let p,b=e;var y;(h&&(p=h.filter((e=>e.area_id)).map((e=>e.area_id))),v)&&(p=(null!==(y=p)&&void 0!==y?y:[]).concat(v.filter((e=>e.area_id)).map((e=>e.area_id))));return p&&(b=e.filter((e=>p.includes(e.area_id)))),c&&(b=b.filter((e=>!c.includes(e.area_id)))),b.length||(b=[{area_id:"no_areas",name:this.hass.localize("ui.components.area-picker.no_match"),picture:null,aliases:[]}]),n?b:[...b,{area_id:"add_new",name:this.hass.localize("ui.components.area-picker.add_new"),picture:null,aliases:[]}]}))}},{kind:"method",key:"updated",value:function(e){if(!this._init&&this.hass||this._init&&e.has("_opened")&&this._opened){this._init=!0;const e=this._getAreas(Object.values(this.hass.areas),Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeAreas).map((e=>({...e,strings:[e.area_id,...e.aliases,e.name]})));this.comboBox.items=e,this.comboBox.filteredItems=e}}},{kind:"method",key:"render",value:function(){var e;return o.dy` <ha-combo-box .hass="${this.hass}" .helper="${this.helper}" item-value-path="area_id" item-id-path="area_id" item-label-path="name" .value="${this.value}" .disabled="${this.disabled}" .required="${this.required}" .label="${void 0===this.label&&this.hass?this.hass.localize("ui.components.area-picker.area"):this.label}" .placeholder="${this.placeholder?null===(e=this.hass.areas[this.placeholder])||void 0===e?void 0:e.name:void 0}" .renderer="${m}" @filter-changed="${this._filterChanged}" @opened-changed="${this._openedChanged}" @value-changed="${this._areaChanged}"> </ha-combo-box> `}},{kind:"method",key:"_filterChanged",value:function(e){var i;const t=e.detail.value;if(!t)return void(this.comboBox.filteredItems=this.comboBox.items);const a=(0,c.q)(t,(null===(i=this.comboBox)||void 0===i?void 0:i.items)||[]);this.noAdd||0!==(null==a?void 0:a.length)?this.comboBox.filteredItems=a:(this._suggestion=t,this.comboBox.filteredItems=[{area_id:"add_new_suggestion",name:this.hass.localize("ui.components.area-picker.add_new_sugestion",{name:this._suggestion}),picture:null}])}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_areaChanged",value:function(e){e.stopPropagation();let i=e.detail.value;"no_areas"===i&&(i=""),["add_new_suggestion","add_new"].includes(i)?(e.target.value=this._value,(0,v.D9)(this,{title:this.hass.localize("ui.components.area-picker.add_dialog.title"),text:this.hass.localize("ui.components.area-picker.add_dialog.text"),confirmText:this.hass.localize("ui.components.area-picker.add_dialog.add"),inputLabel:this.hass.localize("ui.components.area-picker.add_dialog.name"),defaultValue:"add_new_suggestion"===i?this._suggestion:void 0,confirm:async e=>{if(e)try{const i=await(0,h.Lo)(this.hass,{name:e}),t=[...Object.values(this.hass.areas),i];this.comboBox.filteredItems=this._getAreas(t,Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeAreas),await this.updateComplete,await this.comboBox.updateComplete,this._setValue(i.area_id)}catch(e){(0,v.Ys)(this,{title:this.hass.localize("ui.components.area-picker.add_dialog.failed_create_area"),text:e.message})}},cancel:()=>{this._setValue(void 0),this._suggestion=void 0}})):i!==this._value&&this._setValue(i)}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,n.B)(this,"value-changed",{value:e}),(0,n.B)(this,"change")}),0)}}]}}),o.oi)},77576:(e,i,t)=>{var a=t(17463),o=t(34541),d=t(47838),s=t(29530),l=(t(15681),t(53947)),n=t(68144),r=t(79932),c=t(30153),h=t(47181);t(10983),t(73366),t(3555);(0,l.hC)("vaadin-combo-box-item",n.iv`:host{padding:0!important}:host([focused]:not([disabled])){background-color:rgba(var(--rgb-primary-text-color,0,0,0),.12)}:host([selected]:not([disabled])){background-color:transparent;color:var(--mdc-theme-primary);--mdc-ripple-color:var(--mdc-theme-primary);--mdc-theme-text-primary-on-background:var(--mdc-theme-primary)}:host([selected]:not([disabled])):before{background-color:var(--mdc-theme-primary);opacity:.12;content:"";position:absolute;top:0;left:0;width:100%;height:100%}:host([selected][focused]:not([disabled])):before{opacity:.24}:host(:hover:not([disabled])){background-color:transparent}[part=content]{width:100%}[part=checkmark]{display:none}`);(0,a.Z)([(0,r.Mo)("ha-combo-box")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"validationMessage",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"invalid",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"icon",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"items",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"filteredItems",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"dataProvider",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:"allow-custom-value",type:Boolean})],key:"allowCustomValue",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({attribute:"item-value-path"})],key:"itemValuePath",value:()=>"value"},{kind:"field",decorators:[(0,r.Cb)({attribute:"item-label-path"})],key:"itemLabelPath",value:()=>"label"},{kind:"field",decorators:[(0,r.Cb)({attribute:"item-id-path"})],key:"itemIdPath",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"renderer",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0,attribute:"opened"})],key:"opened",value:void 0},{kind:"field",decorators:[(0,r.IO)("vaadin-combo-box-light",!0)],key:"_comboBox",value:void 0},{kind:"field",decorators:[(0,r.IO)("ha-textfield",!0)],key:"_inputElement",value:void 0},{kind:"field",key:"_overlayMutationObserver",value:void 0},{kind:"field",key:"_bodyMutationObserver",value:void 0},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,null===(e=this._comboBox)||void 0===e||e.open()}},{kind:"method",key:"focus",value:async function(){var e,i;await this.updateComplete,await(null===(e=this._inputElement)||void 0===e?void 0:e.updateComplete),null===(i=this._inputElement)||void 0===i||i.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)((0,d.Z)(t.prototype),"disconnectedCallback",this).call(this),this._overlayMutationObserver&&(this._overlayMutationObserver.disconnect(),this._overlayMutationObserver=void 0),this._bodyMutationObserver&&(this._bodyMutationObserver.disconnect(),this._bodyMutationObserver=void 0)}},{kind:"get",key:"selectedItem",value:function(){return this._comboBox.selectedItem}},{kind:"method",key:"setInputValue",value:function(e){this._comboBox.value=e}},{kind:"method",key:"render",value:function(){var e;return n.dy` <vaadin-combo-box-light .itemValuePath="${this.itemValuePath}" .itemIdPath="${this.itemIdPath}" .itemLabelPath="${this.itemLabelPath}" .items="${this.items}" .value="${this.value||""}" .filteredItems="${this.filteredItems}" .dataProvider="${this.dataProvider}" .allowCustomValue="${this.allowCustomValue}" .disabled="${this.disabled}" .required="${this.required}" ${(0,s.t)(this.renderer||this._defaultRowRenderer)} @opened-changed="${this._openedChanged}" @filter-changed="${this._filterChanged}" @value-changed="${this._valueChanged}" attr-for-value="value"> <ha-textfield label="${(0,c.o)(this.label)}" placeholder="${(0,c.o)(this.placeholder)}" ?disabled="${this.disabled}" ?required="${this.required}" validationMessage="${(0,c.o)(this.validationMessage)}" .errorMessage="${this.errorMessage}" class="input" autocapitalize="none" autocomplete="off" autocorrect="off" input-spellcheck="false" .suffix="${n.dy`<div style="width:28px" role="none presentation"></div>`}" .icon="${this.icon}" .invalid="${this.invalid}" helper="${(0,c.o)(this.helper)}" helperPersistent> <slot name="icon" slot="leadingIcon"></slot> </ha-textfield> ${this.value?n.dy`<ha-svg-icon role="button" tabindex="-1" aria-label="${(0,c.o)(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.clear"))}" class="clear-button" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" @click="${this._clearValue}"></ha-svg-icon>`:""} <ha-svg-icon role="button" tabindex="-1" aria-label="${(0,c.o)(this.label)}" aria-expanded="${this.opened?"true":"false"}" class="toggle-button" .path="${this.opened?"M7,15L12,10L17,15H7Z":"M7,10L12,15L17,10H7Z"}" @click="${this._toggleOpen}"></ha-svg-icon> </vaadin-combo-box-light> `}},{kind:"field",key:"_defaultRowRenderer",value(){return e=>n.dy`<ha-list-item> ${this.itemLabelPath?e[this.itemLabelPath]:e} </ha-list-item>`}},{kind:"method",key:"_clearValue",value:function(e){e.stopPropagation(),(0,h.B)(this,"value-changed",{value:void 0})}},{kind:"method",key:"_toggleOpen",value:function(e){var i,t;this.opened?(null===(i=this._comboBox)||void 0===i||i.close(),e.stopPropagation()):null===(t=this._comboBox)||void 0===t||t.inputElement.focus()}},{kind:"method",key:"_openedChanged",value:function(e){e.stopPropagation();const i=e.detail.value;if(setTimeout((()=>{this.opened=i}),0),(0,h.B)(this,"opened-changed",{value:e.detail.value}),i){const e=document.querySelector("vaadin-combo-box-overlay");e&&(e.setAttribute("required-vertical-space","0"),this._removeInert(e)),this._observeBody()}else{var t;null===(t=this._bodyMutationObserver)||void 0===t||t.disconnect(),this._bodyMutationObserver=void 0}}},{kind:"method",key:"_observeBody",value:function(){"MutationObserver"in window&&!this._bodyMutationObserver&&(this._bodyMutationObserver=new MutationObserver((e=>{e.forEach((e=>{e.addedNodes.forEach((e=>{"VAADIN-COMBO-BOX-OVERLAY"===e.nodeName&&this._removeInert(e)})),e.removedNodes.forEach((e=>{var i;"VAADIN-COMBO-BOX-OVERLAY"===e.nodeName&&(null===(i=this._overlayMutationObserver)||void 0===i||i.disconnect(),this._overlayMutationObserver=void 0)}))}))})),this._bodyMutationObserver.observe(document.body,{childList:!0}))}},{kind:"method",key:"_removeInert",value:function(e){var i;if(e.inert)return e.inert=!1,null===(i=this._overlayMutationObserver)||void 0===i||i.disconnect(),void(this._overlayMutationObserver=void 0);"MutationObserver"in window&&!this._overlayMutationObserver&&(this._overlayMutationObserver=new MutationObserver((e=>{e.forEach((e=>{if("inert"===e.attributeName){const t=e.target;var i;if(t.inert)null===(i=this._overlayMutationObserver)||void 0===i||i.disconnect(),this._overlayMutationObserver=void 0,t.inert=!1}}))})),this._overlayMutationObserver.observe(e,{attributes:!0}))}},{kind:"method",key:"_filterChanged",value:function(e){e.stopPropagation(),(0,h.B)(this,"filter-changed",{value:e.detail.value})}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const i=e.detail.value;i!==this.value&&(0,h.B)(this,"value-changed",{value:i||void 0})}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host{display:block;width:100%}vaadin-combo-box-light{position:relative;--vaadin-combo-box-overlay-max-height:calc(45vh)}ha-textfield{width:100%}ha-textfield>ha-icon-button{--mdc-icon-button-size:24px;padding:2px;color:var(--secondary-text-color)}ha-svg-icon{color:var(--input-dropdown-icon-color);position:absolute;cursor:pointer}.toggle-button{right:12px;top:-10px;inset-inline-start:initial;inset-inline-end:12px;direction:var(--direction)}:host([opened]) .toggle-button{color:var(--primary-color)}.clear-button{--mdc-icon-size:20px;top:-7px;right:36px;inset-inline-start:initial;inset-inline-end:36px;direction:var(--direction)}`}}]}}),n.oi)},34821:(e,i,t)=>{t.d(i,{i:()=>u});var a=t(17463),o=t(34541),d=t(47838),s=t(87762),l=t(91632),n=t(68144),r=t(79932),c=t(74265);t(10983);const h=["button","ha-list-item"],u=(e,i)=>n.dy` <div class="header_title">${i}</div> <ha-icon-button .label="${e.localize("ui.dialogs.generic.close")}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> `;(0,a.Z)([(0,r.Mo)("ha-dialog")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",key:c.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,i){var t;null===(t=this.contentElement)||void 0===t||t.scrollTo(e,i)}},{kind:"method",key:"renderHeading",value:function(){return n.dy`<slot name="heading"> ${(0,o.Z)((0,d.Z)(t.prototype),"renderHeading",this).call(this)} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,o.Z)((0,d.Z)(t.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,h].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)((0,d.Z)(t.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[l.W,n.iv`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter, none);backdrop-filter:var(--dialog-backdrop-filter, none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:nth-child(1){flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),s.M)},10586:(e,i,t)=>{t.r(i);var a=t(17463),o=(t(14271),t(68144)),d=t(79932),s=t(47181),l=(t(9381),t(68101),t(34821),t(3555),t(57292)),n=t(11654);(0,a.Z)([(0,d.Mo)("dialog-device-registry-detail")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_nameByUser",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_areaId",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_disabledBy",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_submitting",value:()=>!1},{kind:"method",key:"showDialog",value:async function(e){this._params=e,this._error=void 0,this._nameByUser=this._params.device.name_by_user||"",this._areaId=this._params.device.area_id||"",this._disabledBy=this._params.device.disabled_by,await this.updateComplete}},{kind:"method",key:"closeDialog",value:function(){this._error="",this._params=void 0,(0,s.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){if(!this._params)return o.Ld;const e=this._params.device;return o.dy` <ha-dialog open @closed="${this.closeDialog}" .heading="${(0,l.jL)(e,this.hass)}"> <div> ${this._error?o.dy`<ha-alert alert-type="error">${this._error}</ha-alert> `:""} <div class="form"> <ha-textfield .value="${this._nameByUser}" @input="${this._nameChanged}" .label="${this.hass.localize("ui.dialogs.device-registry-detail.name")}" .placeholder="${e.name||""}" .disabled="${this._submitting}" dialogInitialFocus></ha-textfield> <ha-area-picker .hass="${this.hass}" .value="${this._areaId}" @value-changed="${this._areaPicked}"></ha-area-picker> <div class="row"> <ha-switch .checked="${!this._disabledBy}" .disabled="${"config_entry"===this._params.device.disabled_by}" @change="${this._disabledByChanged}"> </ha-switch> <div> <div> ${this.hass.localize("ui.dialogs.device-registry-detail.enabled_label","type",this.hass.localize(`ui.dialogs.device-registry-detail.type.${e.entry_type||"device"}`))} </div> <div class="secondary"> ${this._disabledBy&&"user"!==this._disabledBy?this.hass.localize("ui.dialogs.device-registry-detail.enabled_cause","type",this.hass.localize(`ui.dialogs.device-registry-detail.type.${e.entry_type||"device"}`),"cause",this.hass.localize(`config_entry.disabled_by.${this._disabledBy}`)):""} ${this.hass.localize("ui.dialogs.device-registry-detail.enabled_description")} </div> </div> </div> </div> </div> <mwc-button slot="secondaryAction" @click="${this.closeDialog}" .disabled="${this._submitting}"> ${this.hass.localize("ui.common.cancel")} </mwc-button> <mwc-button slot="primaryAction" @click="${this._updateEntry}" .disabled="${this._submitting}"> ${this.hass.localize("ui.dialogs.device-registry-detail.update")} </mwc-button> </ha-dialog> `}},{kind:"method",key:"_nameChanged",value:function(e){this._error=void 0,this._nameByUser=e.target.value}},{kind:"method",key:"_areaPicked",value:function(e){this._areaId=e.detail.value}},{kind:"method",key:"_disabledByChanged",value:function(e){this._disabledBy=e.target.checked?null:"user"}},{kind:"method",key:"_updateEntry",value:async function(){this._submitting=!0;try{await this._params.updateEntry({name_by_user:this._nameByUser.trim()||null,area_id:this._areaId||null,disabled_by:this._disabledBy||null}),this.closeDialog()}catch(e){this._error=e.message||this.hass.localize("ui.dialogs.device-registry-detail.unknown_error")}finally{this._submitting=!1}}},{kind:"get",static:!0,key:"styles",value:function(){return[n.Qx,n.yu,o.iv`mwc-button.warning{margin-right:auto}ha-textfield{display:block;margin-bottom:16px}ha-switch{margin-right:16px;margin-inline-end:16px;margin-inline-start:initial;direction:var(--direction)}.row{margin-top:8px;color:var(--primary-text-color);display:flex;align-items:center}`]}}]}}),o.oi)}};
//# sourceMappingURL=10586-Bkb87wx15ps.js.map