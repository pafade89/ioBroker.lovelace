"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[95018],{73589:function(t,e,r){r.d(e,{Z:function(){return n}});var i=function(t){var e=parseFloat(t);if(isNaN(e))throw new Error("".concat(t," is not a number"));return e};function n(t){if(!t)return null;try{if(t.endsWith("%"))return{w:100,h:i(t.substr(0,t.length-1))};var e=t.replace(":","x").split("x");return 0===e.length?null:1===e.length?{w:i(e[0]),h:1}:{w:i(e[0]),h:i(e[1])}}catch(r){}return null}},95018:function(t,e,r){r.r(e),r.d(e,{HuiIframeCard:function(){return k}});var i,n,o,a=r(88962),l=r(99312),s=r(81043),c=r(33368),u=r(71650),h=r(82390),f=r(69205),d=r(70906),p=r(91808),g=r(68144),v=r(79932),w=r(30153),_=r(47501),m=r(73589),k=(r(9381),r(22098),(0,p.Z)([(0,v.Mo)("hui-iframe-card")],(function(t,e){var p,k=function(e){(0,f.Z)(i,e);var r=(0,d.Z)(i);function i(){var e;(0,u.Z)(this,i);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=r.call.apply(r,[this].concat(o)),t((0,h.Z)(e)),e}return(0,c.Z)(i)}(e);return{F:k,d:[{kind:"method",static:!0,key:"getConfigElement",value:(p=(0,s.Z)((0,l.Z)().mark((function t(){return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(65649).then(r.bind(r,65649));case 2:return t.abrupt("return",document.createElement("hui-iframe-card-editor"));case 3:case"end":return t.stop()}}),t)}))),function(){return p.apply(this,arguments)})},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"iframe",url:"https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1",aspect_ratio:"50%"}}},{kind:"field",decorators:[(0,v.Cb)({type:Boolean,reflect:!0})],key:"isPanel",value:function(){return!1}},{kind:"field",decorators:[(0,v.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,v.SB)()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return this._config?1+(this._config.aspect_ratio?Number(this._config.aspect_ratio.replace("%","")):50)/25:5}},{kind:"method",key:"setConfig",value:function(t){if(!t.url)throw new Error("URL required");this._config=t}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return g.Ld;var t="";if(!this.isPanel&&this._config.aspect_ratio){var e=(0,m.Z)(this._config.aspect_ratio);e&&e.w>0&&e.h>0&&(t="".concat((100*e.h/e.w).toFixed(2),"%"))}else this.isPanel||(t="50%");var r=new URL(this._config.url,location.toString()).protocol;if("https:"===location.protocol&&"https:"!==r)return(0,g.dy)(i||(i=(0,a.Z)([' <ha-alert alert-type="error"> '," </ha-alert> "])),this.hass.localize("ui.panel.lovelace.cards.iframe.error_secure_context",{target_protocol:r,context_protocol:location.protocol}));var o="";return this._config.allow_open_top_navigation&&(o+="allow-top-navigation-by-user-activation"),(0,g.dy)(n||(n=(0,a.Z)([' <ha-card .header="','"> <div id="root" style="','"> <iframe title="','" src="','" sandbox="',' allow-forms allow-modals allow-popups allow-pointer-lock allow-same-origin allow-scripts" allow="fullscreen"></iframe> </div> </ha-card> '])),this._config.title,(0,_.V)({"padding-top":t}),(0,w.o)(this._config.title),this._config.url,o)}},{kind:"get",static:!0,key:"styles",value:function(){return(0,g.iv)(o||(o=(0,a.Z)([":host([ispanel]) ha-card{width:100%;height:100%}ha-card{overflow:hidden}#root{width:100%;position:relative}:host([ispanel]) #root{height:100%}iframe{position:absolute;border:none;width:100%;height:100%;top:0;left:0}"])))}}]}}),g.oi))}}]);
//# sourceMappingURL=95018-nIh9xEwTtfo.js.map