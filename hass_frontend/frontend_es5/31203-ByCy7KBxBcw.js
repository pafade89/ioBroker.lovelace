"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[31203],{91168:function(t,i,n){n.d(i,{Z:function(){return a}});var e=function(t){return t<10?"0".concat(t):t};function a(t){var i=Math.floor(t/3600),n=Math.floor(t%3600/60),a=Math.floor(t%3600%60);return i>0?"".concat(i,":").concat(e(n),":").concat(e(a)):n>0?"".concat(n,":").concat(e(a)):a>0?""+a:null}},40958:function(t,i,n){n.d(i,{rv:function(){return u},eF:function(){return s},WH:function(){return o},aT:function(){return r},mK:function(){return l},mZ:function(){return c}});var e=n(91168),a=n(41826),r=function(t){return t.callWS({type:"timer/list"})},s=function(t,i){return t.callWS(Object.assign({type:"timer/create"},i))},c=function(t,i,n){return t.callWS(Object.assign({type:"timer/update",timer_id:i},n))},o=function(t,i){return t.callWS({type:"timer/delete",timer_id:i})},l=function(t){if(t.attributes.remaining){var i,n,e=(i=t.attributes.remaining,3600*(n=i.split(":").map(Number))[0]+60*n[1]+n[2]);if("active"===t.state){var a=(new Date).getTime(),r=new Date(t.last_changed).getTime();e=Math.max(e-(a-r)/1e3,0)}return e}},u=function(t,i,n){if(!i)return null;if("idle"===i.state||0===n)return(0,a.D1)(t.localize,i,t.locale,t.entities);var r=(0,e.Z)(n||0);return"paused"===i.state&&(r="".concat(r," (").concat((0,a.D1)(t.localize,i,t.locale,t.entities),")")),r}},31203:function(t,i,n){n.r(i);var e,a,r=n(88962),s=n(33368),c=n(71650),o=n(82390),l=n(69205),u=n(70906),h=n(91808),d=n(88771),f=n(47838),v=n(68144),_=n(79932),m=n(40958),g=n(53658),k=(n(91476),n(75502));(0,h.Z)([(0,_.Mo)("hui-timer-entity-row")],(function(t,i){var n=function(i){(0,l.Z)(e,i);var n=(0,u.Z)(e);function e(){var i;(0,c.Z)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return i=n.call.apply(n,[this].concat(r)),t((0,o.Z)(i)),i}return(0,s.Z)(e)}(i);return{F:n,d:[{kind:"field",decorators:[(0,_.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,_.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,_.SB)()],key:"_timeRemaining",value:void 0},{kind:"field",key:"_interval",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t)throw new Error("Invalid configuration");if(this._config=t,this.hass){var i=this.hass.states[this._config.entity];i?this._startInterval(i):this._clearInterval()}}},{kind:"method",key:"disconnectedCallback",value:function(){(0,d.Z)((0,f.Z)(n.prototype),"disconnectedCallback",this).call(this),this._clearInterval()}},{kind:"method",key:"connectedCallback",value:function(){if((0,d.Z)((0,f.Z)(n.prototype),"connectedCallback",this).call(this),this._config&&this._config.entity){var t,i=null===(t=this.hass)||void 0===t?void 0:t.states[this._config.entity];i&&this._startInterval(i)}}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return v.Ld;var t=this.hass.states[this._config.entity];return t?(0,v.dy)(a||(a=(0,r.Z)([' <hui-generic-entity-row .hass="','" .config="','"> <div class="text-content"> '," </div> </hui-generic-entity-row> "])),this.hass,this._config,(0,m.rv)(this.hass,t,this._timeRemaining)):(0,v.dy)(e||(e=(0,r.Z)([" <hui-warning> "," </hui-warning> "])),(0,k.i)(this.hass,this._config.entity))}},{kind:"method",key:"shouldUpdate",value:function(t){return!!t.has("_timeRemaining")||(0,g.G2)(this,t)}},{kind:"method",key:"updated",value:function(t){if((0,d.Z)((0,f.Z)(n.prototype),"updated",this).call(this,t),this._config&&t.has("hass")){var i=this.hass.states[this._config.entity],e=t.get("hass");(e?e.states[this._config.entity]:void 0)!==i?this._startInterval(i):i||this._clearInterval()}}},{kind:"method",key:"_clearInterval",value:function(){this._interval&&(window.clearInterval(this._interval),this._interval=void 0)}},{kind:"method",key:"_startInterval",value:function(t){var i=this;this._clearInterval(),this._calculateRemaining(t),"active"===t.state&&(this._interval=window.setInterval((function(){return i._calculateRemaining(t)}),1e3))}},{kind:"method",key:"_calculateRemaining",value:function(t){this._timeRemaining=(0,m.mK)(t)}}]}}),v.oi)}}]);
//# sourceMappingURL=31203-ByCy7KBxBcw.js.map