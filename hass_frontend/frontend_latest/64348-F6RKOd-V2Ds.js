"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[64348],{64348:(i,o,t)=>{t.r(o),t.d(o,{DialogYamlIntegration:()=>c});var a=t(17463),n=(t(14271),t(68144)),e=t(79932),s=t(47181),l=t(27322);let c=(0,a.Z)([(0,e.Mo)("dialog-yaml-integration")],(function(i,o){return{F:class extends o{constructor(...o){super(...o),i(this)}},d:[{kind:"field",decorators:[(0,e.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,e.SB)()],key:"_params",value:void 0},{kind:"method",key:"showDialog",value:function(i){this._params=i}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,(0,s.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){if(!this._params)return n.Ld;const i=this._params.manifest,o=i.is_built_in?(0,l.R)(this.hass,`/integrations/${i.domain}`):i.documentation;return n.dy` <ha-dialog open @closed="${this.closeDialog}" .heading="${this.hass.localize("ui.panel.config.integrations.config_flow.yaml_only_title")}"> <p> ${this.hass.localize("ui.panel.config.integrations.config_flow.yaml_only")} </p> <mwc-button @click="${this.closeDialog}" slot="secondaryAction"> ${this.hass.localize("ui.dialogs.generic.cancel")} </mwc-button> ${o?n.dy`<a .href="${o}" target="_blank" rel="noreferrer noopener" slot="primaryAction"> <mwc-button @click="${this.closeDialog}" dialogInitialFocus> ${this.hass.localize("ui.panel.config.integrations.config_flow.open_documentation")} </mwc-button> </a>`:n.dy`<mwc-button @click="${this.closeDialog}" dialogInitialFocus> ${this.hass.localize("ui.dialogs.generic.ok")} </mwc-button>`} </ha-dialog> `}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host([inert]){pointer-events:initial!important;cursor:initial!important}a{text-decoration:none}ha-dialog{--dialog-z-index:104}@media all and (min-width:600px){ha-dialog{--mdc-dialog-min-width:400px}}`}}]}}),n.oi)}}]);
//# sourceMappingURL=64348-F6RKOd-V2Ds.js.map