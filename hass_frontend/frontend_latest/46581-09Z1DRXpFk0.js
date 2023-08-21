"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[46581],{58831:(e,i,t)=>{t.d(i,{M:()=>a});const a=e=>e.substr(0,e.indexOf("."))},22311:(e,i,t)=>{t.d(i,{N:()=>s});var a=t(58831);const s=e=>(0,a.M)(e.entity_id)},40095:(e,i,t)=>{t.d(i,{e:()=>a,f:()=>s});const a=(e,i)=>s(e.attributes,i),s=(e,i)=>0!=(e.supported_features&i)},35703:(e,i,t)=>{var a=t(17463),s=t(68144),n=t(79932),l=t(14516),d=t(47181),o=t(84627);t(74535);(0,a.Z)([(0,n.Mo)("ha-entities-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array})],key:"value",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-unit-of-measurement"})],key:"includeUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-entities"})],key:"includeEntities",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"exclude-entities"})],key:"excludeEntities",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"picked-entity-label"})],key:"pickedEntityLabel",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"pick-entity-label"})],key:"pickEntityLabel",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"entityFilter",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass)return s.Ld;const e=this._currentEntities;return s.dy` ${e.map((e=>s.dy` <div> <ha-entity-picker allow-custom-entity .curValue="${e}" .hass="${this.hass}" .includeDomains="${this.includeDomains}" .excludeDomains="${this.excludeDomains}" .includeEntities="${this.includeEntities}" .excludeEntities="${this.excludeEntities}" .includeDeviceClasses="${this.includeDeviceClasses}" .includeUnitOfMeasurement="${this.includeUnitOfMeasurement}" .entityFilter="${this._getEntityFilter(this.value,this.entityFilter)}" .value="${e}" .label="${this.pickedEntityLabel}" .disabled="${this.disabled}" @value-changed="${this._entityChanged}"></ha-entity-picker> </div> `))} <div> <ha-entity-picker allow-custom-entity .hass="${this.hass}" .includeDomains="${this.includeDomains}" .excludeDomains="${this.excludeDomains}" .includeEntities="${this.includeEntities}" .excludeEntities="${this.excludeEntities}" .includeDeviceClasses="${this.includeDeviceClasses}" .includeUnitOfMeasurement="${this.includeUnitOfMeasurement}" .entityFilter="${this._getEntityFilter(this.value,this.entityFilter)}" .label="${this.pickEntityLabel}" .helper="${this.helper}" .disabled="${this.disabled}" .required="${this.required&&!e.length}" @value-changed="${this._addEntity}"></ha-entity-picker> </div> `}},{kind:"field",key:"_getEntityFilter",value:()=>(0,l.Z)(((e,i)=>t=>(!e||!e.includes(t.entity_id))&&(!i||i(t))))},{kind:"get",key:"_currentEntities",value:function(){return this.value||[]}},{kind:"method",key:"_updateEntities",value:async function(e){this.value=e,(0,d.B)(this,"value-changed",{value:e})}},{kind:"method",key:"_entityChanged",value:function(e){e.stopPropagation();const i=e.currentTarget.curValue,t=e.detail.value;if(t===i||void 0!==t&&!(0,o.T)(t))return;const a=this._currentEntities;t&&!a.includes(t)?this._updateEntities(a.map((e=>e===i?t:e))):this._updateEntities(a.filter((e=>e!==i)))}},{kind:"method",key:"_addEntity",value:async function(e){e.stopPropagation();const i=e.detail.value;if(!i)return;if(e.currentTarget.value="",!i)return;const t=this._currentEntities;t.includes(i)||this._updateEntities([...t,i])}},{kind:"field",static:!0,key:"styles",value:()=>s.iv`div{margin-top:8px}`}]}}),s.oi)},34821:(e,i,t)=>{t.d(i,{i:()=>u});var a=t(17463),s=t(34541),n=t(47838),l=t(87762),d=t(91632),o=t(68144),r=t(79932),c=t(74265);t(10983);const h=["button","ha-list-item"],u=(e,i)=>o.dy` <div class="header_title">${i}</div> <ha-icon-button .label="${e.localize("ui.dialogs.generic.close")}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> `;(0,a.Z)([(0,r.Mo)("ha-dialog")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",key:c.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,i){var t;null===(t=this.contentElement)||void 0===t||t.scrollTo(e,i)}},{kind:"method",key:"renderHeading",value:function(){return o.dy`<slot name="heading"> ${(0,s.Z)((0,n.Z)(t.prototype),"renderHeading",this).call(this)} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,s.Z)((0,n.Z)(t.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,h].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,s.Z)((0,n.Z)(t.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[d.W,o.iv`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter, none);backdrop-filter:var(--dialog-backdrop-filter, none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:nth-child(1){flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),l.M)},67622:(e,i,t)=>{var a=t(17463),s=t(34541),n=t(47838),l=t(31338),d=t(68144),o=t(79932),r=t(83448),c=t(47181);t(31206),t(10983);(0,a.Z)([(0,o.Mo)("ha-file-upload")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"accept",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"icon",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"value",value:()=>null},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"uploading",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,attribute:"auto-open-file-dialog"})],key:"autoOpenFileDialog",value:()=>!1},{kind:"field",decorators:[(0,o.SB)()],key:"_drag",value:()=>!1},{kind:"field",decorators:[(0,o.IO)("#input")],key:"_input",value:void 0},{kind:"method",key:"firstUpdated",value:function(e){(0,s.Z)((0,n.Z)(t.prototype),"firstUpdated",this).call(this,e),this.autoOpenFileDialog&&this._openFilePicker()}},{kind:"method",key:"render",value:function(){var e;return d.dy` ${this.uploading?d.dy`<ha-circular-progress alt="Uploading" size="large" active></ha-circular-progress>`:d.dy` <label for="input" class="mdc-text-field mdc-text-field--filled ${(0,r.$)({"mdc-text-field--focused":this._drag,"mdc-text-field--with-leading-icon":Boolean(this.icon),"mdc-text-field--with-trailing-icon":Boolean(this.value)})}" @drop="${this._handleDrop}" @dragenter="${this._handleDragStart}" @dragover="${this._handleDragStart}" @dragleave="${this._handleDragEnd}" @dragend="${this._handleDragEnd}"> <span class="mdc-text-field__ripple"></span> <span class="mdc-floating-label ${this.value||this._drag?"mdc-floating-label--float-above":""}" id="label">${this.label}</span> ${this.icon?d.dy`<span class="mdc-text-field__icon mdc-text-field__icon--leading"> <ha-icon-button @click="${this._openFilePicker}" .path="${this.icon}"></ha-icon-button> </span>`:""} <div class="value">${this.value}</div> <input id="input" type="file" class="mdc-text-field__input file" accept="${this.accept}" @change="${this._handleFilePicked}" aria-labelledby="label"> ${this.value?d.dy`<span class="mdc-text-field__icon mdc-text-field__icon--trailing"> <ha-icon-button slot="suffix" @click="${this._clearValue}" .label="${(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.close"))||"close"}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button> </span>`:""} <span class="mdc-line-ripple ${this._drag?"mdc-line-ripple--active":""}"></span> </label> `} `}},{kind:"method",key:"_openFilePicker",value:function(){var e;null===(e=this._input)||void 0===e||e.click()}},{kind:"method",key:"_handleDrop",value:function(e){var i;e.preventDefault(),e.stopPropagation(),null!==(i=e.dataTransfer)&&void 0!==i&&i.files&&(0,c.B)(this,"file-picked",{files:e.dataTransfer.files}),this._drag=!1}},{kind:"method",key:"_handleDragStart",value:function(e){e.preventDefault(),e.stopPropagation(),this._drag=!0}},{kind:"method",key:"_handleDragEnd",value:function(e){e.preventDefault(),e.stopPropagation(),this._drag=!1}},{kind:"method",key:"_handleFilePicked",value:function(e){(0,c.B)(this,"file-picked",{files:e.target.files})}},{kind:"method",key:"_clearValue",value:function(e){e.preventDefault(),this.value=null,(0,c.B)(this,"change")}},{kind:"get",static:!0,key:"styles",value:function(){return[l.W,d.iv`:host{display:block}.mdc-text-field--filled{height:auto;padding-top:16px;cursor:pointer}.mdc-text-field--filled.mdc-text-field--with-trailing-icon{padding-top:28px}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon{color:var(--secondary-text-color)}.mdc-text-field--filled.mdc-text-field--with-trailing-icon .mdc-text-field__icon{align-self:flex-end}.mdc-text-field__icon--leading{margin-bottom:12px;inset-inline-start:initial;inset-inline-end:0px;direction:var(--direction)}.mdc-text-field--filled .mdc-floating-label--float-above{transform:scale(.75);top:8px}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field--filled .mdc-floating-label{inset-inline-start:48px!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field__icon--trailing{pointer-events:auto!important}.dragged:before{position:var(--layout-fit_-_position);top:var(--layout-fit_-_top);right:var(--layout-fit_-_right);bottom:var(--layout-fit_-_bottom);left:var(--layout-fit_-_left);background:currentColor;content:"";opacity:var(--dark-divider-opacity);pointer-events:none;border-radius:4px}.value{width:100%}input.file{display:none}img{max-width:100%;max-height:125px}ha-icon-button{--mdc-icon-button-size:24px;--mdc-icon-size:20px}ha-circular-progress{display:block;text-align-last:center}`]}}]}}),d.oi)},83927:(e,i,t)=>{var a=t(17463),s=t(8485),n=t(92038),l=t(68144),d=t(79932),o=t(47181);(0,a.Z)([(0,d.Mo)("ha-formfield")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"method",key:"_labelClick",value:function(){const e=this.input;if(e)switch(e.focus(),e.tagName){case"HA-CHECKBOX":case"HA-RADIO":if(e.disabled)break;e.checked=!e.checked,(0,o.B)(e,"change");break;default:e.click()}}},{kind:"field",static:!0,key:"styles",value:()=>[n.W,l.iv`:host(:not([alignEnd])) ::slotted(ha-switch){margin-right:10px;margin-inline-end:10px;margin-inline-start:inline}.mdc-form-field>label{direction:var(--direction);margin-inline-start:0;margin-inline-end:auto;padding-inline-start:4px;padding-inline-end:0}`]}]}}),s.a)},61814:(e,i,t)=>{var a=t(17463),s=t(68144),n=t(79932),l=t(47181);var d=t(26765);const o=()=>Promise.all([t.e(46732),t.e(60280)]).then(t.bind(t,60280));t(31206),t(67622);(0,a.Z)([(0,n.Mo)("ha-picture-upload")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"value",value:()=>null},{kind:"field",decorators:[(0,n.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"crop",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"cropOptions",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Number})],key:"size",value:()=>512},{kind:"field",decorators:[(0,n.SB)()],key:"_uploading",value:()=>!1},{kind:"method",key:"render",value:function(){return s.dy` <ha-file-upload .hass="${this.hass}" .icon="${"M18 15V18H15V20H18V23H20V20H23V18H20V15H18M13.3 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V13.3C20.4 13.1 19.7 13 19 13C17.9 13 16.8 13.3 15.9 13.9L14.5 12L11 16.5L8.5 13.5L5 18H13.1C13 18.3 13 18.7 13 19C13 19.7 13.1 20.4 13.3 21Z"}" .label="${this.label||this.hass.localize("ui.components.picture-upload.label")}" .uploading="${this._uploading}" .value="${this.value?s.dy`<img .src="${this.value}">`:""}" @file-picked="${this._handleFilePicked}" @change="${this._handleFileCleared}" accept="image/png, image/jpeg, image/gif"></ha-file-upload> `}},{kind:"method",key:"_handleFilePicked",value:async function(e){const i=e.detail.files[0];this.crop?this._cropFile(i):this._uploadFile(i)}},{kind:"method",key:"_handleFileCleared",value:async function(){this.value=null}},{kind:"method",key:"_cropFile",value:async function(e){var i,t;["image/png","image/jpeg","image/gif"].includes(e.type)?(i=this,t={file:e,options:this.cropOptions||{round:!1,aspectRatio:NaN},croppedCallback:e=>{this._uploadFile(e)}},(0,l.B)(i,"show-dialog",{dialogTag:"image-cropper-dialog",dialogImport:o,dialogParams:t})):(0,d.Ys)(this,{text:this.hass.localize("ui.components.picture-upload.unsupported_format")})}},{kind:"method",key:"_uploadFile",value:async function(e){if(["image/png","image/jpeg","image/gif"].includes(e.type)){this._uploading=!0;try{const a=await(async(e,i)=>{const t=new FormData;t.append("file",i);const a=await e.fetchWithAuth("/api/image/upload",{method:"POST",body:t});if(413===a.status)throw new Error(`Uploaded image is too large (${i.name})`);if(200!==a.status)throw new Error("Unknown error");return a.json()})(this.hass,e);this.value=(i=a.id,t=this.size,`/api/image/serve/${i}/${t}x${t}`),(0,l.B)(this,"change")}catch(e){(0,d.Ys)(this,{text:e.toString()})}finally{this._uploading=!1}var i,t}else(0,d.Ys)(this,{text:this.hass.localize("ui.components.picture-upload.unsupported_format")})}}]}}),s.oi)},22814:(e,i,t)=>{t.d(i,{TZ:()=>l,W2:()=>n,iI:()=>s,oT:()=>a});const a=e=>e.map((e=>{if("string"!==e.type)return e;switch(e.name){case"username":return{...e,autocomplete:"username"};case"password":return{...e,autocomplete:"current-password"};case"code":return{...e,autocomplete:"one-time-code"};default:return e}})),s=(e,i)=>e.callWS({type:"auth/sign_path",path:i}),n=async(e,i,t,a)=>e.callWS({type:"config/auth_provider/homeassistant/create",user_id:i,username:t,password:a}),l=async(e,i,t)=>e.callWS({type:"config/auth_provider/homeassistant/admin_change_password",user_id:i,password:t})},32589:(e,i,t)=>{t.r(i);var a=t(17463),s=(t(14271),t(68144)),n=t(79932),l=t(14516),d=(t(35703),t(34821)),o=(t(83927),t(61814),t(3555),t(65253)),r=t(26765),c=t(11654),h=t(27322),u=t(91188),p=t(45917);const v=["device_tracker"],_={round:!0,quality:.75,aspectRatio:1};let m=(0,a.Z)(null,(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_name",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_userId",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_user",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_isAdmin",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_localOnly",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_deviceTrackers",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_picture",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_submitting",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_personExists",value:()=>!1},{kind:"field",key:"_deviceTrackersAvailable",value:()=>(0,l.Z)((e=>Object.keys(e.states).some((e=>"device_tracker"===e.substr(0,e.indexOf("."))))))},{kind:"method",key:"showDialog",value:async function(e){var i,t;(this._params=e,this._error=void 0,this._params.entry)?(this._personExists=!0,this._name=this._params.entry.name||"",this._userId=this._params.entry.user_id||void 0,this._deviceTrackers=this._params.entry.device_trackers||[],this._picture=this._params.entry.picture||null,this._user=this._userId?this._params.users.find((e=>e.id===this._userId)):void 0,this._isAdmin=null===(i=this._user)||void 0===i?void 0:i.group_ids.includes(o.Pb),this._localOnly=null===(t=this._user)||void 0===t?void 0:t.local_only):(this._personExists=!1,this._name="",this._userId=void 0,this._user=void 0,this._isAdmin=void 0,this._localOnly=void 0,this._deviceTrackers=[],this._picture=null);await this.updateComplete}},{kind:"method",key:"render",value:function(){var e,i;if(!this._params)return s.Ld;const t=""===this._name.trim();return s.dy` <ha-dialog open @closed="${this._close}" scrimClickAction escapeKeyAction .heading="${(0,d.i)(this.hass,this._params.entry?this._params.entry.name:this.hass.localize("ui.panel.config.person.detail.new_person"))}"> <div> ${this._error?s.dy` <div class="error">${this._error}</div> `:""} <div class="form"> <ha-textfield dialogInitialFocus .value="${this._name}" @input="${this._nameChanged}" label="${this.hass.localize("ui.panel.config.person.detail.name")}" error-message="${this.hass.localize("ui.panel.config.person.detail.name_error_msg")}" required auto-validate></ha-textfield> <ha-picture-upload .hass="${this.hass}" .value="${this._picture}" crop .cropOptions="${_}" @change="${this._pictureChanged}"></ha-picture-upload> <ha-formfield .label="${this.hass.localize("ui.panel.config.person.detail.allow_login")}"> <ha-switch @change="${this._allowLoginChanged}" .disabled="${this._user&&(this._user.id===(null===(e=this.hass.user)||void 0===e?void 0:e.id)||this._user.system_generated||this._user.is_owner)}" .checked="${this._userId}"></ha-switch> </ha-formfield> ${this._user?s.dy`<ha-formfield .label="${this.hass.localize("ui.panel.config.person.detail.local_only")}"> <ha-switch .checked="${this._localOnly}" @change="${this._localOnlyChanged}"> </ha-switch> </ha-formfield> <ha-formfield .label="${this.hass.localize("ui.panel.config.person.detail.admin")}"> <ha-switch .disabled="${this._user.system_generated||this._user.is_owner}" .checked="${this._isAdmin}" @change="${this._adminChanged}"> </ha-switch> </ha-formfield>`:""} ${this._deviceTrackersAvailable(this.hass)?s.dy` <p> ${this.hass.localize("ui.panel.config.person.detail.device_tracker_intro")} </p> <ha-entities-picker .hass="${this.hass}" .value="${this._deviceTrackers}" .includeDomains="${v}" .pickedEntityLabel="${this.hass.localize("ui.panel.config.person.detail.device_tracker_picked")}" .pickEntityLabel="${this.hass.localize("ui.panel.config.person.detail.device_tracker_pick")}" @value-changed="${this._deviceTrackersChanged}"> </ha-entities-picker> `:s.dy` <p> ${this.hass.localize("ui.panel.config.person.detail.no_device_tracker_available_intro")} </p> <ul> <li> <a href="${(0,h.R)(this.hass,"/integrations/#presence-detection")}" target="_blank" rel="noreferrer">${this.hass.localize("ui.panel.config.person.detail.link_presence_detection_integrations")}</a> </li> <li> <a @click="${this._closeDialog}" href="/config/integrations"> ${this.hass.localize("ui.panel.config.person.detail.link_integrations_page")}</a> </li> </ul> `} </div> </div> ${this._params.entry?s.dy` <mwc-button slot="secondaryAction" class="warning" @click="${this._deleteEntry}" .disabled="${this._user&&this._user.is_owner||this._submitting}"> ${this.hass.localize("ui.panel.config.person.detail.delete")} </mwc-button> ${this._user&&null!==(i=this.hass.user)&&void 0!==i&&i.is_owner?s.dy`<mwc-button slot="secondaryAction" @click="${this._changePassword}"> ${this.hass.localize("ui.panel.config.users.editor.change_password")} </mwc-button>`:""} `:s.Ld} <mwc-button slot="primaryAction" @click="${this._updateEntry}" .disabled="${t||this._submitting}"> ${this._params.entry?this.hass.localize("ui.panel.config.person.detail.update"):this.hass.localize("ui.panel.config.person.detail.create")} </mwc-button> </ha-dialog> `}},{kind:"method",key:"_closeDialog",value:function(){this._params=void 0}},{kind:"method",key:"_nameChanged",value:function(e){this._error=void 0,this._name=e.target.value}},{kind:"method",key:"_adminChanged",value:function(e){this._isAdmin=e.target.checked}},{kind:"method",key:"_localOnlyChanged",value:function(e){this._localOnly=e.target.checked}},{kind:"method",key:"_allowLoginChanged",value:async function(e){const i=e.target;if(i.checked)i.checked=!1,(0,u.G)(this,{userAddedCallback:async e=>{var t;e&&(i.checked=!0,this._user=e,this._userId=e.id,this._isAdmin=e.group_ids.includes(o.Pb),this._localOnly=e.local_only,null===(t=this._params)||void 0===t||t.refreshUsers())},name:this._name});else if(this._userId){var t;if(!await(0,r.g7)(this,{text:this.hass.localize("ui.panel.config.person.detail.confirm_delete_user","name",this._name),confirmText:this.hass.localize("ui.panel.config.person.detail.delete"),dismissText:this.hass.localize("ui.common.cancel")}))return void(i.checked=!0);await(0,o.h8)(this.hass,this._userId),null===(t=this._params)||void 0===t||t.refreshUsers(),this._userId=void 0}}},{kind:"method",key:"_deviceTrackersChanged",value:function(e){this._error=void 0,this._deviceTrackers=e.detail.value}},{kind:"method",key:"_pictureChanged",value:function(e){this._error=void 0,this._picture=e.target.value}},{kind:"method",key:"_changePassword",value:async function(){if(!this._user)return;this._user.credentials.find((e=>"homeassistant"===e.type))?(0,p.o)(this,{userId:this._user.id}):(0,r.Ys)(this,{title:"No ioBroker credentials found."})}},{kind:"method",key:"_updateEntry",value:async function(){this._submitting=!0;try{var e,i,t,a;if(this._userId&&this._name!==(null===(e=this._params.entry)||void 0===e?void 0:e.name)||this._isAdmin!==(null===(i=this._user)||void 0===i?void 0:i.group_ids.includes(o.Pb))||this._localOnly!==(null===(t=this._user)||void 0===t?void 0:t.local_only))await(0,o.Nq)(this.hass,this._userId,{name:this._name.trim(),group_ids:[this._isAdmin?o.Pb:o.CE],local_only:this._localOnly}),null===(a=this._params)||void 0===a||a.refreshUsers();const s={name:this._name.trim(),device_trackers:this._deviceTrackers,user_id:this._userId||null,picture:this._picture};this._params.entry?await this._params.updateEntry(s):(await this._params.createEntry(s),this._personExists=!0),this._params=void 0}catch(e){this._error=e?e.message:"Unknown error"}finally{this._submitting=!1}}},{kind:"method",key:"_deleteEntry",value:async function(){this._submitting=!0;try{await this._params.removeEntry()&&(this._params.entry.user_id&&(0,o.h8)(this.hass,this._params.entry.user_id),this._params=void 0)}finally{this._submitting=!1}}},{kind:"method",key:"_close",value:function(){var e;!this._personExists&&this._userId&&((0,o.h8)(this.hass,this._userId),null===(e=this._params)||void 0===e||e.refreshUsers(),this._userId=void 0);this._params=void 0}},{kind:"get",static:!0,key:"styles",value:function(){return[c.yu,s.iv`ha-picture-upload,ha-textfield{display:block}ha-picture-upload{margin-top:16px}ha-formfield{display:block;padding:16px 0}a{color:var(--primary-color)}p{color:var(--primary-text-color)}`]}}]}}),s.oi);customElements.define("dialog-person-detail",m)},91188:(e,i,t)=>{t.d(i,{G:()=>n});var a=t(47181);const s=()=>Promise.all([t.e(28597),t.e(2185),t.e(39975),t.e(97215),t.e(6971),t.e(58384),t.e(74898)]).then(t.bind(t,74898)),n=(e,i)=>{(0,a.B)(e,"show-dialog",{dialogTag:"dialog-add-user",dialogImport:s,dialogParams:i})}},45917:(e,i,t)=>{t.d(i,{o:()=>n});var a=t(47181);const s=()=>t.e(52431).then(t.bind(t,52431)),n=(e,i)=>{(0,a.B)(e,"show-dialog",{dialogTag:"dialog-admin-change-password",dialogImport:s,dialogParams:i})}}}]);
//# sourceMappingURL=46581-09Z1DRXpFk0.js.map