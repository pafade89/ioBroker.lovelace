"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[45338],{45338:(t,e,i)=>{i.r(e),i.d(e,{HuiPictureCard:()=>_});var n=i(17463),o=i(34541),a=i(47838),s=i(68144),h=i(79932),c=i(83448),d=i(30153),r=i(62877),u=(i(22098),i(93491)),l=i(17616),f=i(22193);let _=(0,n.Z)([(0,h.Mo)("hui-picture-card")],(function(t,e){class n extends e{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(7270),i.e(41985),i.e(77426),i.e(48763),i.e(49261),i.e(81024)]).then(i.bind(i,24026)),document.createElement("hui-picture-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"picture",image:"https://demo.home-assistant.io/stub_config/t-shirt-promo.png",tap_action:{action:"none"},hold_action:{action:"none"}}}},{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,h.Cb)()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 5}},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.image)throw new Error("Image required");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return 1!==t.size||!t.has("hass")||!t.get("hass")}},{kind:"method",key:"updated",value:function(t){if((0,o.Z)((0,a.Z)(n.prototype),"updated",this).call(this,t),!this._config||!this.hass)return;const e=t.get("hass"),i=t.get("_config");e&&i&&e.themes===this.hass.themes&&i.theme===this._config.theme||(0,r.R)(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"render",value:function(){return this._config&&this.hass?s.dy` <ha-card @action="${this._handleAction}" .actionHandler="${(0,u.K)({hasHold:(0,f._)(this._config.hold_action),hasDoubleClick:(0,f._)(this._config.double_tap_action)})}" tabindex="${(0,d.o)((0,f._)(this._config.tap_action)?"0":void 0)}" class="${(0,c.$)({clickable:Boolean(this._config.tap_action||this._config.hold_action||this._config.double_tap_action)})}"> <img alt="${this._config.alt_text}" src="${this.hass.hassUrl(this._config.image)}"> </ha-card> `:s.Ld}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`ha-card{overflow:hidden;height:100%}ha-card.clickable{cursor:pointer}img{display:block;width:100%}`}},{kind:"method",key:"_handleAction",value:function(t){(0,l.G)(this,this.hass,this._config,t.detail.action)}}]}}),s.oi)}}]);
//# sourceMappingURL=45338-XUVCZcQ4ZqM.js.map