(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[54044],{53725:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},e.exports=t.default},20508:function(e,t,n){"use strict";var i=n(28847).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,r.default)({},e)};var r=i(n(53725));e.exports=t.default},59699:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(90394),r=n(39244),a=n(23682),s=36e5;function o(e,t){(0,a.Z)(2,arguments);var n=(0,i.Z)(t);return(0,r.Z)(e,n*s)}},39244:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(90394),r=n(34327),a=n(23682);function s(e,t){(0,a.Z)(2,arguments);var n=(0,r.Z)(e).getTime(),s=(0,i.Z)(t);return new Date(n+s)}},32182:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(90394),r=n(34327),a=n(23682);function s(e,t){(0,a.Z)(2,arguments);var n=(0,r.Z)(e),s=(0,i.Z)(t);if(isNaN(s))return new Date(NaN);if(!s)return n;var o=n.getDate(),u=new Date(n.getTime());return u.setMonth(n.getMonth()+s+1,0),o>=u.getDate()?u:(n.setFullYear(u.getFullYear(),u.getMonth(),o),n)}},73826:function(e,t,n){"use strict";n.d(t,{f:function(){return f}});var i=n(40039),r=n(33368),a=n(71650),s=n(82390),o=n(69205),u=n(70906),c=n(91808),l=n(34541),d=n(47838),h=n(79932),f=function(e){var t=(0,c.Z)(null,(function(e,t){var n=function(t){(0,o.Z)(i,t);var n=(0,u.Z)(i);function i(){var t;(0,a.Z)(this,i);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return t=n.call.apply(n,[this].concat(o)),e((0,s.Z)(t)),t}return(0,r.Z)(i)}(t);return{F:n,d:[{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,l.Z)((0,d.Z)(n.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,l.Z)((0,d.Z)(n.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){var e=this.__unsubs.pop();e instanceof Promise?e.then((function(e){return e()})):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if((0,l.Z)((0,d.Z)(n.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps){var t,r=(0,i.Z)(e.keys());try{for(r.s();!(t=r.n()).done;){var a=t.value;if(this.hassSubscribeRequiredHostProps.includes(a))return void this.__checkSubscribed()}}catch(s){r.e(s)}finally{r.f()}}}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e,t=this;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((function(e){return void 0===t[e]}))||(this.__unsubs=this.hassSubscribe())}}]}}),e);return t}},19490:function(e,t,n){"use strict";n.r(t);var i,r,a,s,o,u,c=n(88962),l=n(33368),d=n(71650),h=n(82390),f=n(69205),v=n(70906),g=n(91808),p=(n(33829),n(68144)),_=n(79932),y=n(47501),b=n(27593),m=(n(22098),n(49915),n(52039),n(55424)),k=n(38014),Z=n(73826),x=n(75502),w=n(43283),M={maximumFractionDigits:0};(0,g.Z)([(0,_.Mo)("hui-energy-carbon-consumed-gauge-card")],(function(e,t){var n=function(t){(0,f.Z)(i,t);var n=(0,v.Z)(i);function i(){var t;(0,d.Z)(this,i);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return t=n.call.apply(n,[this].concat(a)),e((0,h.Z)(t)),t}return(0,l.Z)(i)}(t);return{F:n,d:[{kind:"field",decorators:[(0,_.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,_.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,_.SB)()],key:"_data",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:function(){return["_config"]}},{kind:"method",key:"getCardSize",value:function(){return 4}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"hassSubscribe",value:function(){var e,t=this;return[(0,m.UB)(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((function(e){t._data=e}))]}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return p.Ld;if(!this._data)return(0,p.dy)(i||(i=(0,c.Z)(["",""])),this.hass.localize("ui.panel.lovelace.cards.energy.loading"));if(!this._data.co2SignalEntity)return p.Ld;if(!this.hass.states[this._data.co2SignalEntity])return(0,p.dy)(r||(r=(0,c.Z)(["<hui-warning> "," </hui-warning>"])),(0,x.i)(this.hass,this._data.co2SignalEntity));var e,t=this._data.prefs,n=(0,m.Jj)(t),u=(0,k.q6)(this._data.stats,n.grid[0].flow_from.map((function(e){return e.stat_energy_from})));if(this._data.fossilEnergyConsumption&&u){var l=this._data.fossilEnergyConsumption?Object.values(this._data.fossilEnergyConsumption).reduce((function(e,t){return e+t}),0):0,d=n.solar&&(0,k.q6)(this._data.stats,n.solar.map((function(e){return e.stat_energy_from})))||0,h=(0,k.q6)(this._data.stats,n.grid[0].flow_to.map((function(e){return e.stat_energy_to})))||0,f=u+Math.max(0,d-h);e=(0,b.N)(100*(1-l/f))}return(0,p.dy)(a||(a=(0,c.Z)([" <ha-card> "," </ha-card> "])),void 0!==e?(0,p.dy)(s||(s=(0,c.Z)([' <ha-svg-icon id="info" .path="','"></ha-svg-icon> <simple-tooltip animation-delay="0" for="info" position="left"> <span> ',' </span> </simple-tooltip> <ha-gauge min="0" max="100" .value="','" .formatOptions="','" .locale="','" label="%" style="','"></ha-gauge> <div class="name"> '," </div> "])),"M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",this.hass.localize("ui.panel.lovelace.cards.energy.carbon_consumed_gauge.card_indicates_energy_used"),e,M,this.hass.locale,(0,y.V)({"--gauge-color":this._computeSeverity(e)}),this.hass.localize("ui.panel.lovelace.cards.energy.carbon_consumed_gauge.low_carbon_energy_consumed")):(0,p.dy)(o||(o=(0,c.Z)(["",""])),this.hass.localize("ui.panel.lovelace.cards.energy.carbon_consumed_gauge.low_carbon_energy_not_calculated")))}},{kind:"method",key:"_computeSeverity",value:function(e){return e<10?w.severityMap.red:e<30?w.severityMap.yellow:e>75?w.severityMap.green:w.severityMap.normal}},{kind:"get",static:!0,key:"styles",value:function(){return(0,p.iv)(u||(u=(0,c.Z)(["ha-card{height:100%;overflow:hidden;padding:16px;display:flex;align-items:center;justify-content:center;flex-direction:column;box-sizing:border-box}ha-gauge{width:100%;max-width:250px}.name{text-align:center;line-height:initial;color:var(--primary-text-color);width:100%;font-size:15px;margin-top:8px}ha-svg-icon{position:absolute;right:4px;top:4px;color:var(--secondary-text-color)}simple-tooltip>span{font-size:12px;line-height:12px}simple-tooltip{width:80%;max-width:250px;top:8px!important}"])))}}]}}),(0,Z.f)(p.oi))},28847:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},23158:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(89273),r=n(36857);function a(e,t,n){var a=(0,r.Z)(e,n),s=(0,i.Z)(t,a,!0),o=new Date(a.getTime()-s),u=new Date(0);return u.setFullYear(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()),u.setHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()),u}},25101:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(20508),r=n(36857),a=n(57944),s=n(89273),o=n(74101);function u(e,t,n){if("string"==typeof e&&!e.match(a.Z)){var u=i(n);return u.timeZone=t,(0,r.Z)(e,u)}var c=(0,r.Z)(e,n),l=(0,o.Z)(c.getFullYear(),c.getMonth(),c.getDate(),c.getHours(),c.getMinutes(),c.getSeconds(),c.getMilliseconds()).getTime(),d=(0,s.Z)(t,new Date(l));return new Date(l+d)}}}]);
//# sourceMappingURL=54044-qpZlig3PJYM.js.map