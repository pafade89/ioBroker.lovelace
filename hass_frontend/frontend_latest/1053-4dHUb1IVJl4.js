export const id=1053;export const ids=[1053];export const modules={1053:(e,s,o)=>{o.r(s),o.d(s,{CloudForgotPassword:()=>n});var a=o(17463),t=o(68144),i=o(79932),r=o(47181),d=(o(98762),o(9381),o(22098),o(3555),o(83270)),l=(o(60010),o(11654));let n=(0,a.Z)([(0,i.Mo)("cloud-forgot-password")],(function(e,s){return{F:class extends s{constructor(...s){super(...s),e(this)}},d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,i.Cb)({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,i.Cb)()],key:"email",value:void 0},{kind:"field",decorators:[(0,i.SB)()],key:"_requestInProgress",value:()=>!1},{kind:"field",decorators:[(0,i.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,i.IO)("#email",!0)],key:"_emailField",value:void 0},{kind:"method",key:"render",value:function(){return t.dy` <hass-subpage .hass="${this.hass}" .narrow="${this.narrow}" .header="${this.hass.localize("ui.panel.config.cloud.forgot_password.title")}"> <div class="content"> <ha-card outlined .header="${this.hass.localize("ui.panel.config.cloud.forgot_password.subtitle")}"> <div class="card-content"> <p> ${this.hass.localize("ui.panel.config.cloud.forgot_password.instructions")} </p> ${this._error?t.dy`<ha-alert alert-type="error">${this._error}</ha-alert>`:""} <ha-textfield autofocus id="email" label="${this.hass.localize("ui.panel.config.cloud.forgot_password.email")}" .value="${this.email}" type="email" required @keydown="${this._keyDown}" .validationMessage="${this.hass.localize("ui.panel.config.cloud.forgot_password.email_error_msg")}"></ha-textfield> </div> <div class="card-actions"> <ha-progress-button @click="${this._handleEmailPasswordReset}" .progress="${this._requestInProgress}"> ${this.hass.localize("ui.panel.config.cloud.forgot_password.send_reset_email")} </ha-progress-button> </div> </ha-card> </div> </hass-subpage> `}},{kind:"method",key:"_keyDown",value:function(e){"Enter"===e.key&&this._handleEmailPasswordReset()}},{kind:"method",key:"_handleEmailPasswordReset",value:async function(){const e=this._emailField,s=e.value;if(e.reportValidity()){this._requestInProgress=!0;try{await(0,d.u_)(this.hass,s),(0,r.B)(this,"email-changed",{value:s}),this._requestInProgress=!1,(0,r.B)(this,"cloud-done",{flashMessage:this.hass.localize("ui.panel.config.cloud.forgot_password.check_your_email")})}catch(e){this._requestInProgress=!1,this._error=e&&e.body&&e.body.message?e.body.message:"Unknown error"}}else e.focus()}},{kind:"get",static:!0,key:"styles",value:function(){return[l.Qx,t.iv`.content{padding-bottom:24px}ha-card{max-width:600px;margin:0 auto;margin-top:24px}h1{margin:0}ha-textfield{width:100%}.card-actions{display:flex;justify-content:space-between;align-items:center}.card-actions a{color:var(--primary-text-color)}`]}}]}}),t.oi)}};
//# sourceMappingURL=1053-4dHUb1IVJl4.js.map