"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[74898],{31206:function(e,t,i){i.r(t),i.d(t,{HaCircularProgress:function(){return v}});var a,n=i(88962),r=i(33368),o=i(71650),s=i(82390),d=i(69205),c=i(70906),l=i(91808),u=i(88771),h=i(47838),p=i(30879),m=i(68144),f=i(79932),v=(0,l.Z)([(0,f.Mo)("ha-circular-progress")],(function(e,t){var i=function(t){(0,d.Z)(a,t);var i=(0,c.Z)(a);function a(){var t;(0,o.Z)(this,a);for(var n=arguments.length,r=new Array(n),d=0;d<n;d++)r[d]=arguments[d];return t=i.call.apply(i,[this].concat(r)),e((0,s.Z)(t)),t}return(0,r.Z)(a)}(t);return{F:i,d:[{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"active",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)()],key:"alt",value:function(){return"Loading"}},{kind:"field",decorators:[(0,f.Cb)()],key:"size",value:function(){return"medium"}},{kind:"set",key:"density",value:function(e){}},{kind:"get",key:"density",value:function(){switch(this.size){case"tiny":return-8;case"small":return-5;case"medium":default:return 0;case"large":return 5}}},{kind:"set",key:"indeterminate",value:function(e){}},{kind:"get",key:"indeterminate",value:function(){return this.active}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,u.Z)((0,h.Z)(i),"styles",this),(0,m.iv)(a||(a=(0,n.Z)([":host{overflow:hidden}"])))]}}]}}),p.D)},34821:function(e,t,i){i.d(t,{i:function(){return b}});var a,n,r,o=i(33368),s=i(71650),d=i(82390),c=i(69205),l=i(70906),u=i(91808),h=i(88771),p=i(47838),m=i(88962),f=i(87762),v=i(91632),g=i(68144),_=i(79932),k=i(74265),y=(i(10983),["button","ha-list-item"]),b=function(e,t){return(0,g.dy)(a||(a=(0,m.Z)([' <div class="header_title">','</div> <ha-icon-button .label="','" .path="','" dialogAction="close" class="header_button"></ha-icon-button> '])),t,e.localize("ui.dialogs.generic.close"),"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z")};(0,u.Z)([(0,_.Mo)("ha-dialog")],(function(e,t){var i=function(t){(0,c.Z)(a,t);var i=(0,l.Z)(a);function a(){var t;(0,s.Z)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=i.call.apply(i,[this].concat(r)),e((0,d.Z)(t)),t}return(0,o.Z)(a)}(t);return{F:i,d:[{kind:"field",key:k.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,t){var i;null===(i=this.contentElement)||void 0===i||i.scrollTo(e,t)}},{kind:"method",key:"renderHeading",value:function(){return(0,g.dy)(n||(n=(0,m.Z)(['<slot name="heading"> '," </slot>"])),(0,h.Z)((0,p.Z)(i.prototype),"renderHeading",this).call(this))}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,h.Z)((0,p.Z)(i.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,y].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,h.Z)((0,p.Z)(i.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value:function(){var e=this;return function(){e._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:function(){return[v.W,(0,g.iv)(r||(r=(0,m.Z)([":host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(\n          --dialog-scroll-divider-color,\n          var(--divider-color)\n        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter, none);backdrop-filter:var(--dialog-backdrop-filter, none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:nth-child(1){flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}"])))]}}]}}),f.M)},83927:function(e,t,i){var a,n=i(88962),r=i(33368),o=i(71650),s=i(82390),d=i(69205),c=i(70906),l=i(91808),u=i(8485),h=i(92038),p=i(68144),m=i(79932),f=i(47181);(0,l.Z)([(0,m.Mo)("ha-formfield")],(function(e,t){var i=function(t){(0,d.Z)(a,t);var i=(0,c.Z)(a);function a(){var t;(0,o.Z)(this,a);for(var n=arguments.length,r=new Array(n),d=0;d<n;d++)r[d]=arguments[d];return t=i.call.apply(i,[this].concat(r)),e((0,s.Z)(t)),t}return(0,r.Z)(a)}(t);return{F:i,d:[{kind:"method",key:"_labelClick",value:function(){var e=this.input;if(e)switch(e.focus(),e.tagName){case"HA-CHECKBOX":case"HA-RADIO":if(e.disabled)break;e.checked=!e.checked,(0,f.B)(e,"change");break;default:e.click()}}},{kind:"field",static:!0,key:"styles",value:function(){return[h.W,(0,p.iv)(a||(a=(0,n.Z)([":host(:not([alignEnd])) ::slotted(ha-switch){margin-right:10px;margin-inline-end:10px;margin-inline-start:inline}.mdc-form-field>label{direction:var(--direction);margin-inline-start:0;margin-inline-end:auto;padding-inline-start:4px;padding-inline-end:0}"])))]}}]}}),u.a)},43709:function(e,t,i){var a,n=i(88962),r=i(33368),o=i(71650),s=i(82390),d=i(69205),c=i(70906),l=i(91808),u=i(88771),h=i(47838),p=i(53464),m=i(4301),f=i(68144),v=i(79932),g=i(62359);(0,l.Z)([(0,v.Mo)("ha-switch")],(function(e,t){var i=function(t){(0,d.Z)(a,t);var i=(0,c.Z)(a);function a(){var t;(0,o.Z)(this,a);for(var n=arguments.length,r=new Array(n),d=0;d<n;d++)r[d]=arguments[d];return t=i.call.apply(i,[this].concat(r)),e((0,s.Z)(t)),t}return(0,r.Z)(a)}(t);return{F:i,d:[{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"haptic",value:function(){return!1}},{kind:"method",key:"firstUpdated",value:function(){var e=this;(0,u.Z)((0,h.Z)(i.prototype),"firstUpdated",this).call(this),this.addEventListener("change",(function(){e.haptic&&(0,g.j)("light")}))}},{kind:"field",static:!0,key:"styles",value:function(){return[m.W,(0,f.iv)(a||(a=(0,n.Z)([":host{--mdc-theme-secondary:var(--switch-checked-color)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:var(--switch-checked-button-color);border-color:var(--switch-checked-button-color)}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:var(--switch-checked-track-color);border-color:var(--switch-checked-track-color)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:var(--switch-unchecked-button-color);border-color:var(--switch-unchecked-button-color)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:var(--switch-unchecked-track-color);border-color:var(--switch-unchecked-track-color)}"])))]}}]}}),p.H)},22814:function(e,t,i){i.d(t,{TZ:function(){return d},W2:function(){return s},iI:function(){return o},oT:function(){return r}});var a=i(99312),n=i(81043),r=("".concat(location.protocol,"//").concat(location.host),function(e){return e.map((function(e){if("string"!==e.type)return e;switch(e.name){case"username":return Object.assign(Object.assign({},e),{},{autocomplete:"username"});case"password":return Object.assign(Object.assign({},e),{},{autocomplete:"current-password"});case"code":return Object.assign(Object.assign({},e),{},{autocomplete:"one-time-code"});default:return e}}))}),o=function(e,t){return e.callWS({type:"auth/sign_path",path:t})},s=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t,i,n,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth_provider/homeassistant/create",user_id:i,username:n,password:r}));case 1:case"end":return e.stop()}}),e)})));return function(t,i,a,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t,i,n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth_provider/homeassistant/admin_change_password",user_id:i,password:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,i,a){return e.apply(this,arguments)}}()},74898:function(e,t,i){i.r(t),i.d(t,{DialogAddUser:function(){return S}});var a,n,r,o,s,d,c,l=i(99312),u=i(81043),h=i(88962),p=i(33368),m=i(71650),f=i(82390),v=i(69205),g=i(70906),_=i(91808),k=i(88771),y=i(47838),b=(i(53918),i(6971),i(68144)),w=i(79932),Z=i(87744),x=(i(31206),i(34821)),C=(i(83927),i(43709),i(22814)),A=i(65253),z=i(11654),S=(0,_.Z)([(0,w.Mo)("dialog-add-user")],(function(e,t){var i,_,S=function(t){(0,v.Z)(a,t);var i=(0,g.Z)(a);function a(){var t;(0,m.Z)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=i.call.apply(i,[this].concat(r)),e((0,f.Z)(t)),t}return(0,p.Z)(a)}(t);return{F:S,d:[{kind:"field",decorators:[(0,w.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_loading",value:function(){return!1}},{kind:"field",decorators:[(0,w.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_name",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_username",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_password",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_passwordConfirm",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_isAdmin",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_localOnly",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_allowChangeName",value:function(){return!0}},{kind:"method",key:"showDialog",value:function(e){this._params=e,this._name=this._params.name||"",this._username="",this._password="",this._passwordConfirm="",this._isAdmin=!1,this._localOnly=!1,this._error=void 0,this._loading=!1,this._params.name?(this._allowChangeName=!1,this._maybePopulateUsername()):this._allowChangeName=!0}},{kind:"method",key:"firstUpdated",value:function(e){var t=this;(0,k.Z)((0,y.Z)(S.prototype),"firstUpdated",this).call(this,e),this.addEventListener("keypress",(function(e){"Enter"===e.key&&t._createUser(e)}))}},{kind:"method",key:"render",value:function(){return this._params?(0,b.dy)(a||(a=(0,h.Z)([' <ha-dialog open @closed="','" scrimClickAction escapeKeyAction .heading="','"> <div> '," ",' <paper-input class="username" name="username" .label="','" .value="','" required auto-validate autocapitalize="none" @value-changed="','" .errorMessage="','" dialogInitialFocus></paper-input> <paper-input .label="','" type="password" name="password" .value="','" required auto-validate @value-changed="','" .errorMessage="','"></paper-input> <paper-input label="','" name="passwordConfirm" .value="','" @value-changed="','" required type="password" .invalid="','" .errorMessage="','"></paper-input> <div class="row"> <ha-formfield .label="','" .dir="','"> <ha-switch .checked="','" @change="','"> </ha-switch> </ha-formfield> </div> <div class="row"> <ha-formfield .label="','" .dir="','"> <ha-switch .checked="','" @change="','"> </ha-switch> </ha-formfield> </div> '," </div> "," </ha-dialog> "])),this._close,(0,x.i)(this.hass,this.hass.localize("ui.panel.config.users.add_user.caption")),this._error?(0,b.dy)(n||(n=(0,h.Z)([' <div class="error">',"</div> "])),this._error):"",this._allowChangeName?(0,b.dy)(r||(r=(0,h.Z)([' <paper-input class="name" name="name" .label="','" .value="','" required auto-validate autocapitalize="on" .errorMessage="','" @value-changed="','" @blur="','" dialogInitialFocus></paper-input>'])),this.hass.localize("ui.panel.config.users.editor.name"),this._name,this.hass.localize("ui.common.error_required"),this._handleValueChanged,this._maybePopulateUsername):"",this.hass.localize("ui.panel.config.users.editor.username"),this._username,this._handleValueChanged,this.hass.localize("ui.common.error_required"),this.hass.localize("ui.panel.config.users.add_user.password"),this._password,this._handleValueChanged,this.hass.localize("ui.common.error_required"),this.hass.localize("ui.panel.config.users.add_user.password_confirm"),this._passwordConfirm,this._handleValueChanged,""!==this._password&&""!==this._passwordConfirm&&this._passwordConfirm!==this._password,this.hass.localize("ui.panel.config.users.add_user.password_not_match"),this.hass.localize("ui.panel.config.users.editor.local_only"),(0,Z.Zu)(this.hass),this._localOnly,this._localOnlyChanged,this.hass.localize("ui.panel.config.users.editor.admin"),(0,Z.Zu)(this.hass),this._isAdmin,this._adminChanged,this._isAdmin?"":(0,b.dy)(o||(o=(0,h.Z)([" <br> "," "])),this.hass.localize("ui.panel.config.users.users_privileges_note")),this._loading?(0,b.dy)(s||(s=(0,h.Z)([' <div slot="primaryAction" class="submit-spinner"> <ha-circular-progress active></ha-circular-progress> </div> ']))):(0,b.dy)(d||(d=(0,h.Z)([' <mwc-button slot="primaryAction" .disabled="','" @click="','"> '," </mwc-button> "])),!this._name||!this._username||!this._password||this._password!==this._passwordConfirm,this._createUser,this.hass.localize("ui.panel.config.users.add_user.create"))):b.Ld}},{kind:"method",key:"_close",value:function(){this._params=void 0}},{kind:"method",key:"_maybePopulateUsername",value:function(){if(!this._username&&this._name){var e=this._name.split(" ");e.length&&(this._username=e[0].toLowerCase())}}},{kind:"method",key:"_handleValueChanged",value:function(e){this._error=void 0;var t=e.target.name;this["_".concat(t)]=e.detail.value}},{kind:"method",key:"_adminChanged",value:(_=(0,u.Z)((0,l.Z)().mark((function e(t){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._isAdmin=t.target.checked;case 1:case"end":return e.stop()}}),e,this)}))),function(e){return _.apply(this,arguments)})},{kind:"method",key:"_localOnlyChanged",value:function(e){this._localOnly=e.target.checked}},{kind:"method",key:"_createUser",value:(i=(0,u.Z)((0,l.Z)().mark((function e(t){var i,a;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),this._name&&this._username&&this._password){e.next=3;break}return e.abrupt("return");case 3:return this._loading=!0,this._error="",e.prev=5,e.next=8,(0,A.r4)(this.hass,this._name,[this._isAdmin?A.Pb:A.CE],this._localOnly);case 8:a=e.sent,i=a.user,e.next=17;break;case 12:return e.prev=12,e.t0=e.catch(5),this._loading=!1,this._error=e.t0.message,e.abrupt("return");case 17:return e.prev=17,e.next=20,(0,C.W2)(this.hass,i.id,this._username,this._password);case 20:e.next=29;break;case 22:return e.prev=22,e.t1=e.catch(17),e.next=26,(0,A.h8)(this.hass,i.id);case 26:return this._loading=!1,this._error=e.t1.message,e.abrupt("return");case 29:i.username=this._username,this._params.userAddedCallback(i),this._close();case 32:case"end":return e.stop()}}),e,this,[[5,12],[17,22]])}))),function(e){return i.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[z.yu,(0,b.iv)(c||(c=(0,h.Z)(["ha-dialog{--mdc-dialog-max-width:500px;--dialog-z-index:10}.row{display:flex;padding:8px 0}"])))]}}]}}),b.oi)}}]);
//# sourceMappingURL=74898-yfrp4-5ltcE.js.map