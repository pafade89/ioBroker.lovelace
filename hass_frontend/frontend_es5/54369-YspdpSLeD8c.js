(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[54369],{53725:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},t.exports=e.default},20508:function(t,e,i){"use strict";var a=i(28847).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,n.default)({},t)};var n=a(i(53725));t.exports=e.default},62336:function(t,e,i){"use strict";i.d(e,{Q:function(){return j}});var a,n,o,s,r,d,l,c,h,u=i(53709),p=i(99312),f=i(81043),v=i(93359),g=i(88962),b=i(33368),y=i(71650),k=i(82390),_=i(69205),m=i(70906),x=i(91808),C=i(34541),Z=i(47838),w=i(68144),T=i(79932),S=i(83448),D=i(47501),O=i(50239),H=i(87744),j=3e5;(0,x.Z)([(0,T.Mo)("ha-chart-base")],(function(t,e){var x,j=function(e){(0,_.Z)(a,e);var i=(0,m.Z)(a);function a(){var e;(0,y.Z)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return e=i.call.apply(i,[this].concat(o)),t((0,k.Z)(e)),e}return(0,b.Z)(a)}(e);return{F:j,d:[{kind:"field",key:"chart",value:void 0},{kind:"field",decorators:[(0,T.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,T.Cb)({attribute:"chart-type",reflect:!0})],key:"chartType",value:function(){return"line"}},{kind:"field",decorators:[(0,T.Cb)({attribute:!1})],key:"data",value:function(){return{datasets:[]}}},{kind:"field",decorators:[(0,T.Cb)({attribute:!1})],key:"options",value:void 0},{kind:"field",decorators:[(0,T.Cb)({attribute:!1})],key:"plugins",value:void 0},{kind:"field",decorators:[(0,T.Cb)({type:Number})],key:"height",value:void 0},{kind:"field",decorators:[(0,T.Cb)({type:Number})],key:"paddingYAxis",value:function(){return 0}},{kind:"field",decorators:[(0,T.SB)()],key:"_chartHeight",value:void 0},{kind:"field",decorators:[(0,T.SB)()],key:"_tooltip",value:void 0},{kind:"field",decorators:[(0,T.SB)()],key:"_hiddenDatasets",value:function(){return new Set}},{kind:"method",key:"_releaseCanvas",value:function(){this.chart&&this.chart.destroy()}},{kind:"method",key:"disconnectedCallback",value:function(){this._releaseCanvas(),(0,C.Z)((0,Z.Z)(j.prototype),"disconnectedCallback",this).call(this)}},{kind:"method",key:"connectedCallback",value:function(){(0,C.Z)((0,Z.Z)(j.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this._setupChart()}},{kind:"method",key:"firstUpdated",value:function(){var t=this;this._setupChart(),this.data.datasets.forEach((function(e,i){e.hidden&&t._hiddenDatasets.add(i)}))}},{kind:"method",key:"willUpdate",value:function(t){var e=this;if((0,C.Z)((0,Z.Z)(j.prototype),"willUpdate",this).call(this,t),this.hasUpdated&&this.chart){if(t.has("plugins"))return this.chart.destroy(),void this._setupChart();t.has("chartType")&&(this.chart.config.type=this.chartType),t.has("data")&&(this._hiddenDatasets.size&&this.data.datasets.forEach((function(t,i){t.hidden=e._hiddenDatasets.has(i)})),this.chart.data=this.data),t.has("options")&&(this.chart.options=this._createOptions()),this.chart.update("none")}}},{kind:"method",key:"render",value:function(){var t,e,i=this;return(0,w.dy)(a||(a=(0,g.Z)([" ",' <div class="chartContainer" style="','"> <canvas></canvas> '," </div> "])),!0===(null===(t=this.options)||void 0===t||null===(t=t.plugins)||void 0===t||null===(t=t.legend)||void 0===t?void 0:t.display)?(0,w.dy)(n||(n=(0,g.Z)(['<div class="chartLegend"> <ul> '," </ul> </div>"])),this.data.datasets.map((function(t,e){return(0,w.dy)(o||(o=(0,g.Z)(['<li .datasetIndex="','" @click="','" class="','" .title="','"> <div class="bullet" style="','"></div> <div class="label">',"</div> </li>"])),e,i._legendClick,(0,S.$)({hidden:i._hiddenDatasets.has(e)}),t.label,(0,D.V)({backgroundColor:t.backgroundColor,borderColor:t.borderColor}),t.label)}))):"",(0,D.V)({height:"".concat(null!==(e=this.height)&&void 0!==e?e:this._chartHeight,"px"),overflow:this._chartHeight?"initial":"hidden","padding-left":"".concat((0,H.HE)(this.hass)?0:this.paddingYAxis,"px"),"padding-right":"".concat((0,H.HE)(this.hass)?this.paddingYAxis:0,"px")}),this._tooltip?(0,w.dy)(s||(s=(0,g.Z)(['<div class="chartTooltip ','" style="','"> <div class="title">',"</div> "," <div> <ul> "," </ul> </div> "," </div>"])),(0,S.$)((0,v.Z)({},this._tooltip.yAlign,!0)),(0,D.V)({top:this._tooltip.top,left:this._tooltip.left}),this._tooltip.title,this._tooltip.beforeBody?(0,w.dy)(r||(r=(0,g.Z)(['<div class="beforeBody"> '," </div>"])),this._tooltip.beforeBody):"",this._tooltip.body.map((function(t,e){return(0,w.dy)(d||(d=(0,g.Z)(['<li> <div class="bullet" style="','"></div> '," </li>"])),(0,D.V)({backgroundColor:i._tooltip.labelColors[e].backgroundColor,borderColor:i._tooltip.labelColors[e].borderColor}),t.lines.join("\n"))})),this._tooltip.footer.length?(0,w.dy)(l||(l=(0,g.Z)(['<div class="footer"> '," </div>"])),this._tooltip.footer.map((function(t){return(0,w.dy)(c||(c=(0,g.Z)(["","<br>"])),t)}))):""):"")}},{kind:"method",key:"_setupChart",value:(x=(0,f.Z)((0,p.Z)().mark((function t(){var e,a,n;return(0,p.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.renderRoot.querySelector("canvas").getContext("2d"),t.next=3,Promise.all([i.e(23254),i.e(88006),i.e(51468),i.e(48324)]).then(i.bind(i,48324));case 3:a=t.sent.Chart,n=getComputedStyle(this),a.defaults.borderColor=n.getPropertyValue("--divider-color"),a.defaults.color=n.getPropertyValue("--secondary-text-color"),a.defaults.font.family=n.getPropertyValue("--mdc-typography-body1-font-family")||n.getPropertyValue("--mdc-typography-font-family")||"Roboto, Noto, sans-serif",this.chart=new a(e,{type:this.chartType,data:this.data,options:this._createOptions(),plugins:this._createPlugins()});case 9:case"end":return t.stop()}}),t,this)}))),function(){return x.apply(this,arguments)})},{kind:"method",key:"_createOptions",value:function(){var t,e,i,a=this;return Object.assign(Object.assign({},this.options),{},{plugins:Object.assign(Object.assign({},null===(t=this.options)||void 0===t?void 0:t.plugins),{},{tooltip:Object.assign(Object.assign({},null===(e=this.options)||void 0===e||null===(e=e.plugins)||void 0===e?void 0:e.tooltip),{},{enabled:!1,external:function(t){return a._handleTooltip(t)}}),legend:Object.assign(Object.assign({},null===(i=this.options)||void 0===i||null===(i=i.plugins)||void 0===i?void 0:i.legend),{},{display:!1})})})}},{kind:"method",key:"_createPlugins",value:function(){var t,e=this;return[].concat((0,u.Z)(this.plugins||[]),[{id:"afterRenderHook",afterRender:function(t){var i,a=t.height-(null!==(i=e._chartHeight)&&void 0!==i?i:0);(!e._chartHeight||a>0||a<-12)&&(e._chartHeight=t.height)},legend:Object.assign(Object.assign({},null===(t=this.options)||void 0===t||null===(t=t.plugins)||void 0===t?void 0:t.legend),{},{display:!1})}])}},{kind:"method",key:"_legendClick",value:function(t){if(this.chart){var e=t.currentTarget.datasetIndex;this.chart.isDatasetVisible(e)?(this.chart.setDatasetVisibility(e,!1),this._hiddenDatasets.add(e)):(this.chart.setDatasetVisibility(e,!0),this._hiddenDatasets.delete(e)),this.chart.update("none"),this.requestUpdate("_hiddenDatasets")}}},{kind:"method",key:"_handleTooltip",value:function(t){0!==t.tooltip.opacity?this._tooltip=Object.assign(Object.assign({},t.tooltip),{},{top:this.chart.canvas.offsetTop+t.tooltip.caretY+12+"px",left:this.chart.canvas.offsetLeft+(0,O.u)(t.tooltip.caretX,100,this.clientWidth-100-this.paddingYAxis)-100+"px"}):this._tooltip=void 0}},{kind:"field",key:"updateChart",value:function(){var t=this;return function(e){t.chart&&t.chart.update(e)}}},{kind:"get",static:!0,key:"styles",value:function(){return(0,w.iv)(h||(h=(0,g.Z)([":host{display:block;position:var(--chart-base-position,relative)}.chartContainer{overflow:hidden;height:0;transition:height .3s cubic-bezier(.4,0,.2,1)}canvas{max-height:var(--chart-max-height,400px)}.chartLegend{text-align:center}.chartLegend li{cursor:pointer;display:inline-grid;grid-auto-flow:column;padding:0 8px;box-sizing:border-box;align-items:center;color:var(--secondary-text-color)}.chartLegend .hidden{text-decoration:line-through}.chartLegend .label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chartLegend .bullet,.chartTooltip .bullet{border-width:1px;border-style:solid;border-radius:50%;display:inline-block;height:16px;margin-right:6px;width:16px;flex-shrink:0;box-sizing:border-box;margin-inline-end:6px;margin-inline-start:initial;direction:var(--direction)}.chartTooltip .bullet{align-self:baseline}:host([rtl]) .chartLegend .bullet,:host([rtl]) .chartTooltip .bullet{margin-right:inherit;margin-left:6px;margin-inline-end:inherit;margin-inline-start:6px;direction:var(--direction)}.chartTooltip{padding:8px;font-size:90%;position:absolute;background:rgba(80,80,80,.9);color:#fff;border-radius:4px;pointer-events:none;z-index:1000;width:200px;box-sizing:border-box}:host([rtl]) .chartTooltip{direction:rtl}.chartLegend ul,.chartTooltip ul{display:inline-block;padding:0 0px;margin:8px 0 0 0;width:100%}.chartTooltip ul{margin:0 4px}.chartTooltip li{display:flex;white-space:pre-line;align-items:center;line-height:16px;padding:4px 0}.chartTooltip .title{text-align:center;font-weight:500;direction:ltr}.chartTooltip .footer{font-weight:500}.chartTooltip .beforeBody{text-align:center;font-weight:300;word-break:break-all}"])))}}]}}),w.oi)},73826:function(t,e,i){"use strict";i.d(e,{f:function(){return p}});var a=i(40039),n=i(33368),o=i(71650),s=i(82390),r=i(69205),d=i(70906),l=i(91808),c=i(34541),h=i(47838),u=i(79932),p=function(t){var e=(0,l.Z)(null,(function(t,e){var i=function(e){(0,r.Z)(a,e);var i=(0,d.Z)(a);function a(){var e;(0,o.Z)(this,a);for(var n=arguments.length,r=new Array(n),d=0;d<n;d++)r[d]=arguments[d];return e=i.call.apply(i,[this].concat(r)),t((0,s.Z)(e)),e}return(0,n.Z)(a)}(e);return{F:i,d:[{kind:"field",decorators:[(0,u.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,c.Z)((0,h.Z)(i.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,c.Z)((0,h.Z)(i.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){var t=this.__unsubs.pop();t instanceof Promise?t.then((function(t){return t()})):t()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(t){if((0,c.Z)((0,h.Z)(i.prototype),"updated",this).call(this,t),t.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps){var e,n=(0,a.Z)(t.keys());try{for(n.s();!(e=n.n()).done;){var o=e.value;if(this.hassSubscribeRequiredHostProps.includes(o))return void this.__checkSubscribed()}}catch(s){n.e(s)}finally{n.f()}}}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var t,e=this;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(t=this.hassSubscribeRequiredHostProps)&&void 0!==t&&t.some((function(t){return void 0===e[t]}))||(this.__unsubs=this.hassSubscribe())}}]}}),t);return e}},22794:function(t,e,i){"use strict";i.r(e),i.d(e,{HuiEnergyDevicesGraphCard:function(){return S}});var a,n,o,s=i(99312),r=i(81043),d=i(88962),l=i(33368),c=i(71650),h=i(82390),u=i(69205),p=i(70906),f=i(91808),v=i(5287),g=i(24112),b=i(68144),y=i(79932),k=i(83448),_=i(14516),m=i(55070),x=i(47181),C=i(18457),Z=(i(62336),i(22098),i(55424)),w=i(38014),T=i(73826),S=(0,f.Z)([(0,y.Mo)("hui-energy-devices-graph-card")],(function(t,e){var i,f=function(e){(0,u.Z)(a,e);var i=(0,p.Z)(a);function a(){var e;(0,c.Z)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return e=i.call.apply(i,[this].concat(o)),t((0,h.Z)(e)),e}return(0,l.Z)(a)}(e);return{F:f,d:[{kind:"field",decorators:[(0,y.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_chartData",value:function(){return{datasets:[]}}},{kind:"field",decorators:[(0,y.SB)()],key:"_data",value:void 0},{kind:"field",decorators:[(0,y.IO)("ha-chart-base")],key:"_chart",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:function(){return["_config"]}},{kind:"method",key:"hassSubscribe",value:function(){var t,e=this;return[(0,Z.UB)(this.hass,{key:null===(t=this._config)||void 0===t?void 0:t.collection_key}).subscribe((function(t){e._data=t,e._getStatistics(t)}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(t){this._config=t}},{kind:"method",key:"render",value:function(){var t;return this.hass&&this._config?(0,b.dy)(a||(a=(0,d.Z)([" <ha-card> ",' <div class="content ','"> <ha-chart-base .hass="','" .data="','" .options="','" .height="','" chart-type="bar"></ha-chart-base> </div> </ha-card> '])),this._config.title?(0,b.dy)(n||(n=(0,d.Z)(['<h1 class="card-header">',"</h1>"])),this._config.title):"",(0,k.$)({"has-header":!!this._config.title}),this.hass,this._chartData,this._createOptions(this.hass.locale),28*((null===(t=this._chartData)||void 0===t||null===(t=t.datasets[0])||void 0===t?void 0:t.data.length)||0)+50):b.Ld}},{kind:"field",key:"_createOptions",value:function(){var t=this;return(0,_.Z)((function(e){return{parsing:!1,animation:!1,responsive:!0,maintainAspectRatio:!1,indexAxis:"y",scales:{y:{type:"category",ticks:{autoSkip:!1,callback:function(e){var i,a=t._chartData.datasets[0].data[e].y;return(0,w.Kd)(t.hass,a,null===(i=t._data)||void 0===i?void 0:i.statsMetadata[a])}}},x:{title:{display:!0,text:"kWh"}}},elements:{bar:{borderWidth:1.5,borderRadius:4}},plugins:{tooltip:{mode:"nearest",callbacks:{title:function(e){var i,a=e[0].label;return(0,w.Kd)(t.hass,a,null===(i=t._data)||void 0===i?void 0:i.statsMetadata[a])},label:function(t){return"".concat(t.dataset.label,": ").concat((0,C.uf)(t.parsed.x,e)," kWh")}}}},locale:(0,C.Hd)(t.hass.locale),onClick:function(e){var i,a=e.chart,n=(0,v.z)(e,a),o=Math.abs(a.scales.y.getValueForPixel(n.y));(0,x.B)(t,"hass-more-info",{entityId:null===(i=t._chartData)||void 0===i||null===(i=i.datasets[0])||void 0===i||null===(i=i.data[o])||void 0===i?void 0:i.y})}}}))}},{kind:"method",key:"_getStatistics",value:(i=(0,r.Z)((0,s.Z)().mark((function t(e){var i,a,n,o,r,d,l,c,h,u,p,f,v,b,y;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=(0,g.Z)(e.end||new Date,e.start),n=e.prefs.device_consumption.map((function(t){return t.stat_consumption})),o=a>35?"month":a>2?"day":"hour",r=this.hass.config.unit_system.length||"",d={energy:"kWh",volume:"km"===r?"m³":"ft³"},t.next=7,(0,w.dL)(this.hass,e.start,e.end,n,o,d,["change"]);case 7:if(l=t.sent,!e.startCompare||!e.endCompare){t.next=12;break}return t.next=11,(0,w.dL)(this.hass,e.startCompare,e.endCompare,n,o,d,["change"]);case 11:c=t.sent;case 12:return h=[],u=[],p=[],f=[],v=[],b=[],y=[{label:this.hass.localize("ui.panel.lovelace.cards.energy.energy_devices_graph.energy_usage"),borderColor:p,backgroundColor:v,data:h,barThickness:c?10:20}],c&&y.push({label:this.hass.localize("ui.panel.lovelace.cards.energy.energy_devices_graph.previous_energy_usage"),borderColor:f,backgroundColor:b,data:u,barThickness:10}),e.prefs.device_consumption.forEach((function(t,e){var i=t.stat_consumption in l&&(0,w.Kj)(l[t.stat_consumption])||0;if(h.push({y:t.stat_consumption,x:i,idx:e}),c){var a=t.stat_consumption in c&&(0,w.Kj)(c[t.stat_consumption])||0;u.push({y:t.stat_consumption,x:a,idx:e})}})),h.sort((function(t,e){return e.x-t.x})),h.forEach((function(t){var e=(0,m.Eu)(t.idx);p.push(e),v.push(e+"7F")})),u.forEach((function(t){var e=(0,m.Eu)(t.idx);f.push(e+"7F"),b.push(e+"32")})),this._chartData={datasets:y},t.next=27,this.updateComplete;case 27:null===(i=this._chart)||void 0===i||i.updateChart("none");case 28:case"end":return t.stop()}}),t,this)}))),function(t){return i.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return(0,b.iv)(o||(o=(0,d.Z)([".card-header{padding-bottom:0}.content{padding:16px}.has-header{padding-top:0}ha-chart-base{--chart-max-height:none}"])))}}]}}),(0,T.f)(b.oi))},28847:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},23158:function(t,e,i){"use strict";i.d(e,{Z:function(){return o}});var a=i(89273),n=i(36857);function o(t,e,i){var o=(0,n.Z)(t,i),s=(0,a.Z)(e,o,!0),r=new Date(o.getTime()-s),d=new Date(0);return d.setFullYear(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()),d.setHours(r.getUTCHours(),r.getUTCMinutes(),r.getUTCSeconds(),r.getUTCMilliseconds()),d}},25101:function(t,e,i){"use strict";i.d(e,{Z:function(){return d}});var a=i(20508),n=i(36857),o=i(57944),s=i(89273),r=i(74101);function d(t,e,i){if("string"==typeof t&&!t.match(o.Z)){var d=a(i);return d.timeZone=e,(0,n.Z)(t,d)}var l=(0,n.Z)(t,i),c=(0,r.Z)(l.getFullYear(),l.getMonth(),l.getDate(),l.getHours(),l.getMinutes(),l.getSeconds(),l.getMilliseconds()).getTime(),h=(0,s.Z)(e,new Date(c));return new Date(c+h)}}}]);
//# sourceMappingURL=54369-YspdpSLeD8c.js.map