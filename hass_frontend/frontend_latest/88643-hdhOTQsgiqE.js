"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[88643],{88643:(e,i,s)=>{s.r(i),s.d(i,{CloudRegister:()=>d});var a=s(17463),o=s(68144),r=s(79932),t=s(47181),l=(s(98762),s(9381),s(22098),s(3555),s(83270)),n=(s(60010),s(11654));s(88165);let d=(0,a.Z)([(0,r.Mo)("cloud-register")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"isWide",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)()],key:"email",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_requestInProgress",value:()=>!1},{kind:"field",decorators:[(0,r.SB)()],key:"_password",value:()=>""},{kind:"field",decorators:[(0,r.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,r.IO)("#email",!0)],key:"_emailField",value:void 0},{kind:"field",decorators:[(0,r.IO)("#password",!0)],key:"_passwordField",value:void 0},{kind:"method",key:"render",value:function(){return o.dy` <hass-subpage .hass="${this.hass}" .narrow="${this.narrow}" .header="${this.hass.localize("ui.panel.config.cloud.register.title")}"> <div class="content"> <ha-config-section .isWide="${this.isWide}"> <span slot="header">${this.hass.localize("ui.panel.config.cloud.register.headline")}</span> <div slot="introduction"> <p> ${this.hass.localize("ui.panel.config.cloud.register.information")} </p> <p> ${this.hass.localize("ui.panel.config.cloud.register.information2")} </p> <ul> <li> ${this.hass.localize("ui.panel.config.cloud.register.feature_remote_control")} </li> <li> ${this.hass.localize("ui.panel.config.cloud.register.feature_google_home")} </li> <li> ${this.hass.localize("ui.panel.config.cloud.register.feature_amazon_alexa")} </li> <li> ${this.hass.localize("ui.panel.config.cloud.register.feature_webhook_apps")} </li> </ul> <p> ${this.hass.localize("ui.panel.config.cloud.register.information3")} <a href="https://www.nabucasa.com" target="_blank">Nabu Casa, Inc</a> ${this.hass.localize("ui.panel.config.cloud.register.information3a")} </p> <p> ${this.hass.localize("ui.panel.config.cloud.register.information4")} </p> <ul> <li> <a href="https://www.nabucasa.com/tos/" target="_blank" rel="noreferrer"> ${this.hass.localize("ui.panel.config.cloud.register.link_terms_conditions")} </a> </li> <li> <a href="https://www.nabucasa.com/privacy_policy/" target="_blank" rel="noreferrer"> ${this.hass.localize("ui.panel.config.cloud.register.link_privacy_policy")} </a> </li> </ul> </div> <ha-card outlined .header="${this.hass.localize("ui.panel.config.cloud.register.create_account")}"><div class="card-content register-form"> ${this._error?o.dy`<ha-alert alert-type="error">${this._error}</ha-alert>`:""} <ha-textfield autofocus id="email" name="email" .label="${this.hass.localize("ui.panel.config.cloud.register.email_address")}" type="email" autocomplete="email" required .value="${this.email}" @keydown="${this._keyDown}" validationMessage="${this.hass.localize("ui.panel.config.cloud.register.email_error_msg")}"></ha-textfield> <ha-textfield id="password" name="password" label="Password" .value="${this._password}" type="password" autocomplete="new-password" minlength="8" required @keydown="${this._keyDown}" validationMessage="${this.hass.localize("ui.panel.config.cloud.register.password_error_msg")}"></ha-textfield> </div> <div class="card-actions"> <ha-progress-button @click="${this._handleRegister}" .progress="${this._requestInProgress}">${this.hass.localize("ui.panel.config.cloud.register.start_trial")}</ha-progress-button> <button class="link" .disabled="${this._requestInProgress}" @click="${this._handleResendVerifyEmail}"> ${this.hass.localize("ui.panel.config.cloud.register.resend_confirm_email")} </button> </div> </ha-card> </ha-config-section> </div> </hass-subpage> `}},{kind:"method",key:"_keyDown",value:function(e){"Enter"===e.key&&this._handleRegister()}},{kind:"method",key:"_handleRegister",value:async function(){const e=this._emailField,i=this._passwordField,s=e.value,a=i.value;if(!e.reportValidity())return i.reportValidity(),void e.focus();if(i.reportValidity()){this._requestInProgress=!0;try{await(0,l.bi)(this.hass,s,a),this._verificationEmailSent(s)}catch(e){this._password="",this._requestInProgress=!1,this._error=e&&e.body&&e.body.message?e.body.message:"Unknown error"}}else i.focus()}},{kind:"method",key:"_handleResendVerifyEmail",value:async function(){const e=this._emailField,i=e.value;if(e.reportValidity())try{await(0,l._t)(this.hass,i),this._verificationEmailSent(i)}catch(e){this._error=e&&e.body&&e.body.message?e.body.message:"Unknown error"}else e.focus()}},{kind:"method",key:"_verificationEmailSent",value:function(e){this._requestInProgress=!1,this._password="",(0,t.B)(this,"email-changed",{value:e}),(0,t.B)(this,"cloud-done",{flashMessage:this.hass.localize("ui.panel.config.cloud.register.account_created")})}},{kind:"get",static:!0,key:"styles",value:function(){return[n.Qx,o.iv`[slot=introduction]{margin:-1em 0}[slot=introduction] a{color:var(--primary-color)}a{color:var(--primary-color)}h1{margin:0}.register-form{display:flex;flex-direction:column}.card-actions{display:flex;justify-content:space-between;align-items:center}`]}}]}}),o.oi)}}]);
//# sourceMappingURL=88643-hdhOTQsgiqE.js.map