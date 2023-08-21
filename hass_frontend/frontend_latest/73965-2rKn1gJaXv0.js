"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[73965],{32594:(e,t,i)=>{i.d(t,{U:()=>a});const a=e=>e.stopPropagation()},86630:(e,t,i)=>{var a=i(17463),n=i(34541),s=i(47838),d=i(49412),l=i(3762),o=i(68144),c=i(79932),r=i(38346),u=i(96151);(0,a.Z)([(0,c.Mo)("ha-select")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,c.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?o.dy`<span class="mdc-select__icon"><slot name="icon"></slot></span>`:o.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,n.Z)((0,s.Z)(i.prototype),"connectedCallback",this).call(this),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,n.Z)((0,s.Z)(i.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"field",key:"_translationsUpdated",value(){return(0,r.D)((async()=>{await(0,u.y)(),this.layoutOptions()}),500)}},{kind:"field",static:!0,key:"styles",value:()=>[l.W,o.iv`.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}`]}]}}),d.K)},72709:(e,t,i)=>{i.d(t,{cB:()=>a});const a=1},73965:(e,t,i)=>{i.a(e,(async(e,a)=>{try{i.r(t);var n=i(17463),s=i(34541),d=i(47838),l=(i(44577),i(68144)),o=i(79932),c=i(83448),r=i(47181),u=i(95664),h=i(32594),m=i(40095),v=i(87744),y=(i(86630),i(92197),i(43709),i(72709)),p=e([u]);u=(p.then?(await p)():p)[0];let b=(0,n.Z)(null,(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"stateObj",value:void 0},{kind:"field",key:"_resizeDebounce",value:void 0},{kind:"method",key:"render",value:function(){if(!this.stateObj)return l.Ld;const e=this.hass,t=this.stateObj,i=(0,m.e)(t,y.cB),a=(0,v.Zu)(e);return l.dy` <div class="${(0,c.$)({"has-modes":i})}"> <div class="container-humidity"> <div>${e.localize("ui.card.humidifier.humidity")}</div> <div class="single-row"> <div class="target-humidity">${t.attributes.humidity} %</div> <ha-slider step="1" pin ignore-bar-touch dir="${a}" .min="${t.attributes.min_humidity}" .max="${t.attributes.max_humidity}" .value="${t.attributes.humidity}" @change="${this._targetHumiditySliderChanged}"> </ha-slider> </div> </div> ${i?l.dy` <ha-select .label="${e.localize("ui.card.humidifier.mode")}" .value="${t.attributes.mode}" fixedMenuPosition naturalMenuWidth @selected="${this._handleModeChanged}" @closed="${h.U}"> ${t.attributes.available_modes.map((i=>l.dy` <mwc-list-item .value="${i}"> ${(0,u.a)(e.localize,t,e.locale,e.entities,"mode",i)} </mwc-list-item> `))} </ha-select> `:""} </div> `}},{kind:"method",key:"updated",value:function(e){(0,s.Z)((0,d.Z)(i.prototype),"updated",this).call(this,e),e.has("stateObj")&&this.stateObj&&(this._resizeDebounce&&clearTimeout(this._resizeDebounce),this._resizeDebounce=window.setTimeout((()=>{(0,r.B)(this,"iron-resize"),this._resizeDebounce=void 0}),500))}},{kind:"method",key:"_targetHumiditySliderChanged",value:function(e){const t=e.target.value;this._callServiceHelper(this.stateObj.attributes.humidity,t,"set_humidity",{humidity:t})}},{kind:"method",key:"_handleModeChanged",value:function(e){const t=e.target.value||null;this._callServiceHelper(this.stateObj.attributes.mode,t,"set_mode",{mode:t})}},{kind:"method",key:"_callServiceHelper",value:async function(e,t,i,a){if(e===t)return;a.entity_id=this.stateObj.entity_id;const n=this.stateObj;await this.hass.callService("humidifier",i,a),await new Promise((e=>{setTimeout(e,2e3)})),this.stateObj===n&&(this.stateObj=void 0,await this.updateComplete,void 0===this.stateObj&&(this.stateObj=n))}},{kind:"get",static:!0,key:"styles",value:function(){return l.iv`:host{color:var(--primary-text-color)}ha-select{width:100%}.container-humidity .single-row{display:flex;height:50px}.target-humidity{width:90px;font-size:200%;margin:auto;direction:ltr}.single-row{padding:8px 0}`}}]}}),l.oi);customElements.define("more-info-humidifier",b),a()}catch(e){a(e)}}))}}]);
//# sourceMappingURL=73965-2rKn1gJaXv0.js.map