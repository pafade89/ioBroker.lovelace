"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[68558],{68558:function(t,i,e){e.r(i),e.d(i,{HuiHumidifierCard:function(){return I}});var n,s,r,o,a,d,h,l,u,c=e(88962),f=e(99312),m=e(81043),y=e(33368),v=e(71650),g=e(82390),p=e(69205),x=e(70906),b=e(91808),k=e(88771),_=e(47838),w=(e(2014),e(68144)),Z=e(79932),z=e(83448),A=e(62877),H=e(47181),C=e(82526),S=e(91741),M=e(87744),B=(e(22098),e(10983),e(56007)),E=e(15688),j=e(53658),F=e(75502),I=(0,b.Z)([(0,Z.Mo)("hui-humidifier-card")],(function(t,i){var b,I=function(i){(0,p.Z)(n,i);var e=(0,x.Z)(n);function n(){var i;(0,v.Z)(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return i=e.call.apply(e,[this].concat(r)),t((0,g.Z)(i)),i}return(0,y.Z)(n)}(i);return{F:I,d:[{kind:"method",static:!0,key:"getConfigElement",value:(b=(0,m.Z)((0,f.Z)().mark((function t(){return(0,f.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(57210).then(e.bind(e,57210));case 2:return t.abrupt("return",document.createElement("hui-humidifier-card-editor"));case 3:case"end":return t.stop()}}),t)}))),function(){return b.apply(this,arguments)})},{kind:"method",static:!0,key:"getStubConfig",value:function(t,i,e){return{type:"humidifier",entity:(0,E.j)(t,1,i,e,["humidifier"])[0]||""}}},{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,Z.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,Z.SB)()],key:"_setHum",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 6}},{kind:"method",key:"setConfig",value:function(t){if(!t.entity||"humidifier"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the humidifier domain");this._config=t}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return w.Ld;var t=this.hass.states[this._config.entity];if(!t)return(0,w.dy)(n||(n=(0,c.Z)([" <hui-warning> "," </hui-warning> "])),(0,F.i)(this.hass,this._config.entity));var i=this._config.name||(0,S.C)(this.hass.states[this._config.entity]),e=null!==t.attributes.humidity&&Number.isFinite(Number(t.attributes.humidity))?t.attributes.humidity:t.attributes.min_humidity,u=this._setHum?this._setHum:e,f=(0,M.Zu)(this.hass),m=(0,B.rk)(t.state)?(0,w.dy)(s||(s=(0,c.Z)([' <round-slider disabled="true"></round-slider> ']))):(0,w.dy)(r||(r=(0,c.Z)([' <round-slider class="','" .value="','" .min="','" .max="','" .rtl="','" step="1" @value-changing="','" @value-changed="','"></round-slider> '])),(0,z.$)({"round-slider_off":"off"===t.state}),e,t.attributes.min_humidity,t.attributes.max_humidity,"rtl"===f,this._dragEvent,this._setHumidity),y=(0,w.dy)(o||(o=(0,c.Z)([' <svg viewBox="0 0 24 20"> <text x="50%" dx="1" y="73%" text-anchor="middle" id="set-values"> '," </text> </svg> "])),(0,B.rk)(t.state)||null==u?"":(0,w.YP)(a||(a=(0,c.Z)([" ",' <tspan dx="-3" dy="-6.5" style="font-size:4px"> % </tspan> '])),u.toFixed())),v=(0,w.dy)(d||(d=(0,c.Z)([' <svg viewBox="0 0 40 10" id="humidity"> <text x="50%" y="50%" text-anchor="middle" id="set-mode"> '," "," </text> </svg> "])),this.hass.localize("state.default.".concat(t.state)),t.attributes.mode&&!(0,B.rk)(t.state)?(0,w.dy)(h||(h=(0,c.Z)([" - "," "])),(0,C.a)(this.hass.localize,t,this.hass.locale,this.hass.entities,"mode")):"");return(0,w.dy)(l||(l=(0,c.Z)([' <ha-card> <ha-icon-button .path="','" class="more-info" @click="','" tabindex="0"></ha-icon-button> <div class="content"> <div id="controls"> <div id="slider"> ',' <div id="slider-center"> <ha-icon-button class="toggle-button" .disabled="','" @click="','" tabindex="0"> '," </ha-icon-button> ",' </div> </div> </div> <div id="info" .title="','">',"</div> </div> </ha-card> "])),"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",this._handleMoreInfo,m,(0,B.rk)(t.state),this._toggle,y,v,i,i)}},{kind:"method",key:"shouldUpdate",value:function(t){return(0,j.G2)(this,t)}},{kind:"method",key:"updated",value:function(t){if((0,k.Z)((0,_.Z)(I.prototype),"updated",this).call(this,t),this._config&&this.hass&&(t.has("hass")||t.has("_config"))){var i=t.get("hass"),e=t.get("_config");i&&e&&i.themes===this.hass.themes&&e.theme===this._config.theme||(0,A.R)(this,this.hass.themes,this._config.theme)}}},{kind:"method",key:"willUpdate",value:function(t){if(this.hass&&this._config&&t.has("hass")){var i=this.hass.states[this._config.entity];if(i){var e=t.get("hass");e&&e.states[this._config.entity]===i||(this._setHum=this._getSetHum(i))}}}},{kind:"method",key:"_getSetHum",value:function(t){if(!(0,B.rk)(t.state))return t.attributes.humidity}},{kind:"method",key:"_dragEvent",value:function(t){this._setHum=t.detail.value}},{kind:"method",key:"_setHumidity",value:function(t){this.hass.callService("humidifier","set_humidity",{entity_id:this._config.entity,humidity:t.detail.value})}},{kind:"method",key:"_toggle",value:function(){this.hass.callService("humidifier","toggle",{entity_id:this._config.entity})}},{kind:"method",key:"_handleMoreInfo",value:function(){(0,H.B)(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,w.iv)(u||(u=(0,c.Z)([":host{display:block}ha-card{height:100%;position:relative;overflow:hidden;--name-font-size:1.2rem;--brightness-font-size:1.2rem;--rail-border-color:transparent}.more-info{position:absolute;cursor:pointer;top:0;right:0;border-radius:100%;color:var(--secondary-text-color);z-index:25;inset-inline-start:initial;inset-inline-end:0;direction:var(--direction)}.content{height:100%;display:flex;flex-direction:column;justify-content:center}#controls{display:flex;justify-content:center;padding:16px;position:relative;direction:ltr}#slider{height:100%;width:100%;position:relative;max-width:250px;min-width:100px}round-slider{--round-slider-path-color:var(--slider-track-color);--round-slider-bar-color:var(--primary-color);padding-bottom:10%}.round-slider_off{--round-slider-path-color:var(--slider-track-color);--round-slider-bar-color:var(--disabled-text-color);padding-bottom:10%}#slider-center{position:absolute;width:calc(100% - 40px);height:calc(100% - 40px);box-sizing:border-box;border-radius:100%;left:20px;top:20px;text-align:center;overflow-wrap:break-word}#humidity{max-width:80%;transform:translate(0,350%)}#set-values{font-size:13px;font-family:var(--paper-font-body1_-_font-family);font-weight:var(--paper-font-body1_-_font-weight)}#set-mode{fill:var(--secondary-text-color);font-size:4px}.toggle-button{color:var(--primary-text-color);width:60%;height:auto;position:absolute;max-width:calc(100% - 40px);box-sizing:border-box;border-radius:100%;top:39%;left:50%;transform:translate(-50%,-50%);--mdc-icon-button-size:100%;--mdc-icon-size:100%}#info{display:flex-vertical;justify-content:center;text-align:center;padding:16px;margin-top:-60px;font-size:var(--name-font-size)}text{fill:var(--primary-text-color)}"])))}}]}}),w.oi)}}]);
//# sourceMappingURL=68558-ulaLPnatKE4.js.map