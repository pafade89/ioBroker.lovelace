"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[45338],{45338:function(t,e,i){i.r(e),i.d(e,{HuiPictureCard:function(){return w}});var n,a,o=i(88962),s=i(99312),c=i(81043),r=i(33368),h=i(71650),d=i(82390),u=i(69205),l=i(70906),f=i(91808),_=i(88771),g=i(47838),k=i(68144),m=i(79932),p=i(83448),v=i(30153),y=i(62877),b=(i(22098),i(93491)),Z=i(17616),C=i(22193),w=(0,f.Z)([(0,m.Mo)("hui-picture-card")],(function(t,e){var f,w=function(e){(0,u.Z)(n,e);var i=(0,l.Z)(n);function n(){var e;(0,h.Z)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return e=i.call.apply(i,[this].concat(o)),t((0,d.Z)(e)),e}return(0,r.Z)(n)}(e);return{F:w,d:[{kind:"method",static:!0,key:"getConfigElement",value:(f=(0,c.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(79071),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(7270),i.e(41985),i.e(33829),i.e(77426),i.e(18900),i.e(49261),i.e(26431),i.e(64172)]).then(i.bind(i,24026));case 2:return t.abrupt("return",document.createElement("hui-picture-card-editor"));case 3:case"end":return t.stop()}}),t)}))),function(){return f.apply(this,arguments)})},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"picture",image:"https://demo.home-assistant.io/stub_config/t-shirt-promo.png",tap_action:{action:"none"},hold_action:{action:"none"}}}},{kind:"field",decorators:[(0,m.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,m.Cb)()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 5}},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.image)throw new Error("Image required");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return 1!==t.size||!t.has("hass")||!t.get("hass")}},{kind:"method",key:"updated",value:function(t){if((0,_.Z)((0,g.Z)(w.prototype),"updated",this).call(this,t),this._config&&this.hass){var e=t.get("hass"),i=t.get("_config");e&&i&&e.themes===this.hass.themes&&i.theme===this._config.theme||(0,y.R)(this,this.hass.themes,this._config.theme)}}},{kind:"method",key:"render",value:function(){return this._config&&this.hass?(0,k.dy)(n||(n=(0,o.Z)([' <ha-card @action="','" .actionHandler="','" tabindex="','" class="','"> <img alt="','" src="','"> </ha-card> '])),this._handleAction,(0,b.K)({hasHold:(0,C._)(this._config.hold_action),hasDoubleClick:(0,C._)(this._config.double_tap_action)}),(0,v.o)((0,C._)(this._config.tap_action)?"0":void 0),(0,p.$)({clickable:Boolean(this._config.tap_action||this._config.hold_action||this._config.double_tap_action)}),this._config.alt_text,this.hass.hassUrl(this._config.image)):k.Ld}},{kind:"get",static:!0,key:"styles",value:function(){return(0,k.iv)(a||(a=(0,o.Z)(["ha-card{overflow:hidden;height:100%}ha-card.clickable{cursor:pointer}img{display:block;width:100%}"])))}},{kind:"method",key:"_handleAction",value:function(t){(0,Z.G)(this,this.hass,this._config,t.detail.action)}}]}}),k.oi)}}]);
//# sourceMappingURL=45338-PPZb_QywkB8.js.map