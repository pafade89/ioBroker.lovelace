"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[35642],{87171:(t,e,s)=>{s.a(t,(async(t,e)=>{try{var i=s(17463),a=s(68144),r=s(79932),h=s(95664),u=s(29171),n=s(18457),l=s(68307),o=s(74674),c=s(56007),d=t([h,u]);[h,u]=d.then?(await d)():d;(0,i.Z)([(0,r.Mo)("ha-climate-state")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function(){const t=this._computeCurrentStatus();return a.dy`<div class="target"> ${(0,c.rk)(this.stateObj.state)?this._localizeState():a.dy`<span class="state-label"> ${this._localizeState()} ${this.stateObj.attributes.preset_mode&&this.stateObj.attributes.preset_mode!==o.T1?a.dy`- ${(0,h.a)(this.hass.localize,this.stateObj,this.hass.locale,this.hass.entities,"preset_mode")}`:""} </span> <div class="unit">${this._computeTarget()}</div>`} </div> ${t&&!(0,c.rk)(this.stateObj.state)?a.dy`<div class="current"> ${this.hass.localize("ui.card.climate.currently")}: <div class="unit">${t}</div> </div>`:""}`}},{kind:"method",key:"_computeCurrentStatus",value:function(){if(this.hass&&this.stateObj)return null!=this.stateObj.attributes.current_temperature&&null!=this.stateObj.attributes.current_humidity?`${(0,n.uf)(this.stateObj.attributes.current_temperature,this.hass.locale)} ${this.hass.config.unit_system.temperature}/\n      ${(0,n.uf)(this.stateObj.attributes.current_humidity,this.hass.locale)}${(0,l.K)(this.hass.locale)}%`:null!=this.stateObj.attributes.current_temperature?`${(0,n.uf)(this.stateObj.attributes.current_temperature,this.hass.locale)} ${this.hass.config.unit_system.temperature}`:null!=this.stateObj.attributes.current_humidity?`${(0,n.uf)(this.stateObj.attributes.current_humidity,this.hass.locale)}${(0,l.K)(this.hass.locale)}%`:void 0}},{kind:"method",key:"_computeTarget",value:function(){return this.hass&&this.stateObj?null!=this.stateObj.attributes.target_temp_low&&null!=this.stateObj.attributes.target_temp_high?`${(0,n.uf)(this.stateObj.attributes.target_temp_low,this.hass.locale)}-${(0,n.uf)(this.stateObj.attributes.target_temp_high,this.hass.locale)} ${this.hass.config.unit_system.temperature}`:null!=this.stateObj.attributes.temperature?`${(0,n.uf)(this.stateObj.attributes.temperature,this.hass.locale)} ${this.hass.config.unit_system.temperature}`:null!=this.stateObj.attributes.target_humidity_low&&null!=this.stateObj.attributes.target_humidity_high?`${(0,n.uf)(this.stateObj.attributes.target_humidity_low,this.hass.locale)}-${(0,n.uf)(this.stateObj.attributes.target_humidity_high,this.hass.locale)} %`:null!=this.stateObj.attributes.humidity?`${(0,n.uf)(this.stateObj.attributes.humidity,this.hass.locale)} %`:"":""}},{kind:"method",key:"_localizeState",value:function(){if((0,c.rk)(this.stateObj.state))return this.hass.localize(`state.default.${this.stateObj.state}`);const t=(0,u.D1)(this.hass.localize,this.stateObj,this.hass.locale,this.hass.entities);return this.stateObj.attributes.hvac_action?`${(0,h.a)(this.hass.localize,this.stateObj,this.hass.locale,this.hass.entities,"hvac_action")} (${t})`:t}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{display:flex;flex-direction:column;justify-content:center;white-space:nowrap}.target{color:var(--primary-text-color)}.current{color:var(--secondary-text-color)}.state-label{font-weight:700;text-transform:capitalize}.unit{display:inline-block;direction:ltr}`}}]}}),a.oi);e()}catch(t){e(t)}}))},35642:(t,e,s)=>{s.a(t,(async(t,i)=>{try{s.r(e);var a=s(17463),r=s(68144),h=s(79932),u=s(87171),n=s(53658),l=s(91476),o=s(75502),c=t([u,l]);[u,l]=c.then?(await c)():c;(0,a.Z)([(0,h.Mo)("hui-climate-entity-row")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.entity)throw new Error("Entity must be specified");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return(0,n.G2)(this,t)}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return r.Ld;const t=this.hass.states[this._config.entity];return t?r.dy` <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}"> <ha-climate-state .hass="${this.hass}" .stateObj="${t}"> </ha-climate-state> </hui-generic-entity-row> `:r.dy` <hui-warning> ${(0,o.i)(this.hass,this._config.entity)} </hui-warning> `}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`ha-climate-state{text-align:right}`}}]}}),r.oi);i()}catch(t){i(t)}}))}}]);
//# sourceMappingURL=35642-nI3H6mLCZuE.js.map