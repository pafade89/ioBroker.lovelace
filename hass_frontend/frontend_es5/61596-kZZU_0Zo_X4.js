"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[61596],{61596:function(t,i,n){n.r(i);var e,s,o,a=n(88962),c=n(33368),r=n(71650),h=n(82390),u=n(69205),l=n(70906),d=n(91808),k=(n(53918),n(68144)),f=n(79932),v=n(56007),y=n(53658),g=(n(91476),n(75502));(0,d.Z)([(0,f.Mo)("hui-lock-entity-row")],(function(t,i){var n=function(i){(0,u.Z)(e,i);var n=(0,l.Z)(e);function e(){var i;(0,r.Z)(this,e);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return i=n.call.apply(n,[this].concat(o)),t((0,h.Z)(i)),i}return(0,c.Z)(e)}(i);return{F:n,d:[{kind:"field",decorators:[(0,f.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,f.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t)throw new Error("Invalid configuration");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return(0,y.G2)(this,t)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return k.Ld;var t=this.hass.states[this._config.entity];return t?(0,k.dy)(s||(s=(0,a.Z)([' <hui-generic-entity-row .hass="','" .config="','"> <mwc-button @click="','" .disabled="','" class="text-content"> '," </mwc-button> </hui-generic-entity-row> "])),this.hass,this._config,this._callService,(0,v.rk)(t.state),"locked"===t.state?this.hass.localize("ui.card.lock.unlock"):this.hass.localize("ui.card.lock.lock")):(0,k.dy)(e||(e=(0,a.Z)([" <hui-warning> "," </hui-warning> "])),(0,g.i)(this.hass,this._config.entity))}},{kind:"get",static:!0,key:"styles",value:function(){return(0,k.iv)(o||(o=(0,a.Z)(["mwc-button{margin-right:-.57em}"])))}},{kind:"method",key:"_callService",value:function(t){t.stopPropagation();var i=this.hass.states[this._config.entity];this.hass.callService("lock","locked"===i.state?"unlock":"lock",{entity_id:i.entity_id})}}]}}),k.oi)}}]);
//# sourceMappingURL=61596-kZZU_0Zo_X4.js.map