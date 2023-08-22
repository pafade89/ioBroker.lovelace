export const id=35642;export const ids=[35642];export const modules={87171:(t,s,e)=>{e.a(t,(async(t,s)=>{try{var i=e(17463),a=e(68144),h=e(79932),r=e(95664),u=e(29171),n=e(18457),l=e(68307),o=e(74674),c=e(56007),d=t([r,u]);[r,u]=d.then?(await d)():d;(0,i.Z)([(0,h.Mo)("ha-climate-state")],(function(t,s){return{F:class extends s{constructor(...s){super(...s),t(this)}},d:[{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function(){const t=this._computeCurrentStatus();return a.dy`<div class="target"> ${(0,c.rk)(this.stateObj.state)?this._localizeState():a.dy`<span class="state-label"> ${this._localizeState()} ${this.stateObj.attributes.preset_mode&&this.stateObj.attributes.preset_mode!==o.T1?a.dy`- ${(0,r.a)(this.hass.localize,this.stateObj,this.hass.locale,this.hass.config,this.hass.entities,"preset_mode")}`:""} </span> <div class="unit">${this._computeTarget()}</div>`} </div> ${t&&!(0,c.rk)(this.stateObj.state)?a.dy`<div class="current"> ${this.hass.localize("ui.card.climate.currently")}: <div class="unit">${t}</div> </div>`:""}`}},{kind:"method",key:"_computeCurrentStatus",value:function(){if(this.hass&&this.stateObj)return null!=this.stateObj.attributes.current_temperature&&null!=this.stateObj.attributes.current_humidity?`${(0,n.uf)(this.stateObj.attributes.current_temperature,this.hass.locale)} ${this.hass.config.unit_system.temperature}/\n      ${(0,n.uf)(this.stateObj.attributes.current_humidity,this.hass.locale)}${(0,l.K)(this.hass.locale)}%`:null!=this.stateObj.attributes.current_temperature?`${(0,n.uf)(this.stateObj.attributes.current_temperature,this.hass.locale)} ${this.hass.config.unit_system.temperature}`:null!=this.stateObj.attributes.current_humidity?`${(0,n.uf)(this.stateObj.attributes.current_humidity,this.hass.locale)}${(0,l.K)(this.hass.locale)}%`:void 0}},{kind:"method",key:"_computeTarget",value:function(){return this.hass&&this.stateObj?null!=this.stateObj.attributes.target_temp_low&&null!=this.stateObj.attributes.target_temp_high?`${(0,n.uf)(this.stateObj.attributes.target_temp_low,this.hass.locale)}-${(0,n.uf)(this.stateObj.attributes.target_temp_high,this.hass.locale)} ${this.hass.config.unit_system.temperature}`:null!=this.stateObj.attributes.temperature?`${(0,n.uf)(this.stateObj.attributes.temperature,this.hass.locale)} ${this.hass.config.unit_system.temperature}`:null!=this.stateObj.attributes.target_humidity_low&&null!=this.stateObj.attributes.target_humidity_high?`${(0,n.uf)(this.stateObj.attributes.target_humidity_low,this.hass.locale)}-${(0,n.uf)(this.stateObj.attributes.target_humidity_high,this.hass.locale)} %`:null!=this.stateObj.attributes.humidity?`${(0,n.uf)(this.stateObj.attributes.humidity,this.hass.locale)} %`:"":""}},{kind:"method",key:"_localizeState",value:function(){if((0,c.rk)(this.stateObj.state))return this.hass.localize(`state.default.${this.stateObj.state}`);const t=(0,u.D1)(this.hass.localize,this.stateObj,this.hass.locale,this.hass.config,this.hass.entities);return this.stateObj.attributes.hvac_action?`${(0,r.a)(this.hass.localize,this.stateObj,this.hass.locale,this.hass.config,this.hass.entities,"hvac_action")} (${t})`:t}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{display:flex;flex-direction:column;justify-content:center;white-space:nowrap}.target{color:var(--primary-text-color)}.current{color:var(--secondary-text-color)}.state-label{font-weight:700}.unit{display:inline-block;direction:ltr}`}}]}}),a.oi);s()}catch(t){s(t)}}))},35642:(t,s,e)=>{e.a(t,(async(t,i)=>{try{e.r(s);var a=e(17463),h=e(68144),r=e(79932),u=e(87171),n=e(53658),l=e(91476),o=e(75502),c=t([u,l]);[u,l]=c.then?(await c)():c;(0,a.Z)([(0,r.Mo)("hui-climate-entity-row")],(function(t,s){return{F:class extends s{constructor(...s){super(...s),t(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.entity)throw new Error("Entity must be specified");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return(0,n.G2)(this,t)}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return h.Ld;const t=this.hass.states[this._config.entity];return t?h.dy` <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}"> <ha-climate-state .hass="${this.hass}" .stateObj="${t}"> </ha-climate-state> </hui-generic-entity-row> `:h.dy` <hui-warning> ${(0,o.i)(this.hass,this._config.entity)} </hui-warning> `}},{kind:"get",static:!0,key:"styles",value:function(){return h.iv`ha-climate-state{text-align:right}`}}]}}),h.oi);i()}catch(t){i(t)}}))}};
//# sourceMappingURL=35642-sOM25fXbQSI.js.map