"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[68943],{79021:function(t,e,i){i.d(e,{Z:function(){return o}});var r=i(90394),a=i(34327),n=i(23682);function o(t,e){(0,n.Z)(2,arguments);var i=(0,a.Z)(t),o=(0,r.Z)(e);return isNaN(o)?new Date(NaN):o?(i.setDate(i.getDate()+o),i):i}},59699:function(t,e,i){i.d(e,{Z:function(){return s}});var r=i(90394),a=i(39244),n=i(23682),o=36e5;function s(t,e){(0,n.Z)(2,arguments);var i=(0,r.Z)(e);return(0,a.Z)(t,i*o)}},39244:function(t,e,i){i.d(e,{Z:function(){return o}});var r=i(90394),a=i(34327),n=i(23682);function o(t,e){(0,n.Z)(2,arguments);var i=(0,a.Z)(t).getTime(),o=(0,r.Z)(e);return new Date(i+o)}},32182:function(t,e,i){i.d(e,{Z:function(){return o}});var r=i(90394),a=i(34327),n=i(23682);function o(t,e){(0,n.Z)(2,arguments);var i=(0,a.Z)(t),o=(0,r.Z)(e);if(isNaN(o))return new Date(NaN);if(!o)return i;var s=i.getDate(),d=new Date(i.getTime());return d.setMonth(i.getMonth()+o+1,0),s>=d.getDate()?d:(i.setFullYear(d.getFullYear(),d.getMonth(),s),i)}},92195:function(t,e,i){i.d(e,{vh:function(){return a},yJ:function(){return r}});Math.pow(10,8);var r=6e4,a=36e5},72277:function(t,e,i){i.d(e,{Z:function(){return s}});var r=i(92195),a=i(99307),n=i(23682),o=i(86102);function s(t,e,i){(0,n.Z)(2,arguments);var s=(0,a.Z)(t,e)/r.vh;return(0,o.u)(null==i?void 0:i.roundingMethod)(s)}},99307:function(t,e,i){i.d(e,{Z:function(){return n}});var r=i(34327),a=i(23682);function n(t,e){return(0,a.Z)(2,arguments),(0,r.Z)(t).getTime()-(0,r.Z)(e).getTime()}},93752:function(t,e,i){i.d(e,{Z:function(){return n}});var r=i(34327),a=i(23682);function n(t){(0,a.Z)(1,arguments);var e=(0,r.Z)(t);return e.setHours(23,59,59,999),e}},70390:function(t,e,i){i.d(e,{Z:function(){return a}});var r=i(93752);function a(){return(0,r.Z)(Date.now())}},47538:function(t,e,i){function r(){var t=new Date,e=t.getFullYear(),i=t.getMonth(),r=t.getDate(),a=new Date(0);return a.setFullYear(e,i,r-1),a.setHours(23,59,59,999),a}i.d(e,{Z:function(){return r}})},30443:function(t,e,i){i.d(e,{Z:function(){return n}});var r=i(59429),a=i(23682);function n(t,e){(0,a.Z)(2,arguments);var i=(0,r.Z)(t),n=(0,r.Z)(e);return i.getTime()===n.getTime()}},53970:function(t,e,i){i.d(e,{Z:function(){return n}});var r=i(30443),a=i(23682);function n(t){return(0,a.Z)(1,arguments),(0,r.Z)(t,Date.now())}},27088:function(t,e,i){i.d(e,{Z:function(){return a}});var r=i(59429);function a(){return(0,r.Z)(Date.now())}},83008:function(t,e,i){function r(){var t=new Date,e=t.getFullYear(),i=t.getMonth(),r=t.getDate(),a=new Date(0);return a.setFullYear(e,i,r-1),a.setHours(0,0,0,0),a}i.d(e,{Z:function(){return r}})},62336:function(t,e,i){i.d(e,{Q:function(){return P}});var r,a,n,o,s,d,l,c,u,h=i(53709),f=i(99312),p=i(81043),g=i(93359),v=i(88962),y=i(33368),b=i(71650),_=i(82390),k=i(69205),m=i(70906),Z=i(91808),x=i(88771),C=i(47838),w=i(68144),D=i(79932),S=i(83448),O=i(47501),T=i(50239),j=i(87744),P=3e5;(0,Z.Z)([(0,D.Mo)("ha-chart-base")],(function(t,e){var Z,P=function(e){(0,k.Z)(r,e);var i=(0,m.Z)(r);function r(){var e;(0,b.Z)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return e=i.call.apply(i,[this].concat(n)),t((0,_.Z)(e)),e}return(0,y.Z)(r)}(e);return{F:P,d:[{kind:"field",key:"chart",value:void 0},{kind:"field",decorators:[(0,D.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,D.Cb)({attribute:"chart-type",reflect:!0})],key:"chartType",value:function(){return"line"}},{kind:"field",decorators:[(0,D.Cb)({attribute:!1})],key:"data",value:function(){return{datasets:[]}}},{kind:"field",decorators:[(0,D.Cb)({attribute:!1})],key:"options",value:void 0},{kind:"field",decorators:[(0,D.Cb)({attribute:!1})],key:"plugins",value:void 0},{kind:"field",decorators:[(0,D.Cb)({type:Number})],key:"height",value:void 0},{kind:"field",decorators:[(0,D.Cb)({type:Number})],key:"paddingYAxis",value:function(){return 0}},{kind:"field",decorators:[(0,D.SB)()],key:"_chartHeight",value:void 0},{kind:"field",decorators:[(0,D.SB)()],key:"_tooltip",value:void 0},{kind:"field",decorators:[(0,D.SB)()],key:"_hiddenDatasets",value:function(){return new Set}},{kind:"method",key:"_releaseCanvas",value:function(){this.chart&&this.chart.destroy()}},{kind:"method",key:"disconnectedCallback",value:function(){this._releaseCanvas(),(0,x.Z)((0,C.Z)(P.prototype),"disconnectedCallback",this).call(this)}},{kind:"method",key:"connectedCallback",value:function(){(0,x.Z)((0,C.Z)(P.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this._setupChart()}},{kind:"method",key:"firstUpdated",value:function(){var t=this;this._setupChart(),this.data.datasets.forEach((function(e,i){e.hidden&&t._hiddenDatasets.add(i)}))}},{kind:"method",key:"willUpdate",value:function(t){var e=this;if((0,x.Z)((0,C.Z)(P.prototype),"willUpdate",this).call(this,t),this.hasUpdated&&this.chart){if(t.has("plugins"))return this.chart.destroy(),void this._setupChart();t.has("chartType")&&(this.chart.config.type=this.chartType),t.has("data")&&(this._hiddenDatasets.size&&this.data.datasets.forEach((function(t,i){t.hidden=e._hiddenDatasets.has(i)})),this.chart.data=this.data),t.has("options")&&(this.chart.options=this._createOptions()),this.chart.update("none")}}},{kind:"method",key:"render",value:function(){var t,e,i,u,h=this;return(0,w.dy)(r||(r=(0,v.Z)([" ",' <div class="chartContainer" style="','"> <canvas></canvas> '," </div> "])),!0===(null===(t=this.options)||void 0===t||null===(e=t.plugins)||void 0===e||null===(i=e.legend)||void 0===i?void 0:i.display)?(0,w.dy)(a||(a=(0,v.Z)(['<div class="chartLegend"> <ul> '," </ul> </div>"])),this.data.datasets.map((function(t,e){return(0,w.dy)(n||(n=(0,v.Z)(['<li .datasetIndex="','" @click="','" class="','" .title="','"> <div class="bullet" style="','"></div> <div class="label">',"</div> </li>"])),e,h._legendClick,(0,S.$)({hidden:h._hiddenDatasets.has(e)}),t.label,(0,O.V)({backgroundColor:t.backgroundColor,borderColor:t.borderColor}),t.label)}))):"",(0,O.V)({height:"".concat(null!==(u=this.height)&&void 0!==u?u:this._chartHeight,"px"),overflow:this._chartHeight?"initial":"hidden","padding-left":"".concat((0,j.HE)(this.hass)?0:this.paddingYAxis,"px"),"padding-right":"".concat((0,j.HE)(this.hass)?this.paddingYAxis:0,"px")}),this._tooltip?(0,w.dy)(o||(o=(0,v.Z)(['<div class="chartTooltip ','" style="','"> <div class="title">',"</div> "," <div> <ul> "," </ul> </div> "," </div>"])),(0,S.$)((0,g.Z)({},this._tooltip.yAlign,!0)),(0,O.V)({top:this._tooltip.top,left:this._tooltip.left}),this._tooltip.title,this._tooltip.beforeBody?(0,w.dy)(s||(s=(0,v.Z)(['<div class="beforeBody"> '," </div>"])),this._tooltip.beforeBody):"",this._tooltip.body.map((function(t,e){return(0,w.dy)(d||(d=(0,v.Z)(['<li> <div class="bullet" style="','"></div> '," </li>"])),(0,O.V)({backgroundColor:h._tooltip.labelColors[e].backgroundColor,borderColor:h._tooltip.labelColors[e].borderColor}),t.lines.join("\n"))})),this._tooltip.footer.length?(0,w.dy)(l||(l=(0,v.Z)(['<div class="footer"> '," </div>"])),this._tooltip.footer.map((function(t){return(0,w.dy)(c||(c=(0,v.Z)(["","<br>"])),t)}))):""):"")}},{kind:"method",key:"_setupChart",value:(Z=(0,p.Z)((0,f.Z)().mark((function t(){var e,r,a;return(0,f.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.renderRoot.querySelector("canvas").getContext("2d"),t.next=3,Promise.all([i.e(23536),i.e(1671),i.e(51468),i.e(48324)]).then(i.bind(i,48324));case 3:r=t.sent.Chart,a=getComputedStyle(this),r.defaults.borderColor=a.getPropertyValue("--divider-color"),r.defaults.color=a.getPropertyValue("--secondary-text-color"),r.defaults.font.family=a.getPropertyValue("--mdc-typography-body1-font-family")||a.getPropertyValue("--mdc-typography-font-family")||"Roboto, Noto, sans-serif",this.chart=new r(e,{type:this.chartType,data:this.data,options:this._createOptions(),plugins:this._createPlugins()});case 9:case"end":return t.stop()}}),t,this)}))),function(){return Z.apply(this,arguments)})},{kind:"method",key:"_createOptions",value:function(){var t,e,i,r,a,n=this;return Object.assign(Object.assign({},this.options),{},{plugins:Object.assign(Object.assign({},null===(t=this.options)||void 0===t?void 0:t.plugins),{},{tooltip:Object.assign(Object.assign({},null===(e=this.options)||void 0===e||null===(i=e.plugins)||void 0===i?void 0:i.tooltip),{},{enabled:!1,external:function(t){return n._handleTooltip(t)}}),legend:Object.assign(Object.assign({},null===(r=this.options)||void 0===r||null===(a=r.plugins)||void 0===a?void 0:a.legend),{},{display:!1})})})}},{kind:"method",key:"_createPlugins",value:function(){var t,e,i=this;return[].concat((0,h.Z)(this.plugins||[]),[{id:"afterRenderHook",afterRender:function(t){var e,r=t.height-(null!==(e=i._chartHeight)&&void 0!==e?e:0);(!i._chartHeight||r>0||r<-12)&&(i._chartHeight=t.height)},legend:Object.assign(Object.assign({},null===(t=this.options)||void 0===t||null===(e=t.plugins)||void 0===e?void 0:e.legend),{},{display:!1})}])}},{kind:"method",key:"_legendClick",value:function(t){if(this.chart){var e=t.currentTarget.datasetIndex;this.chart.isDatasetVisible(e)?(this.chart.setDatasetVisibility(e,!1),this._hiddenDatasets.add(e)):(this.chart.setDatasetVisibility(e,!0),this._hiddenDatasets.delete(e)),this.chart.update("none"),this.requestUpdate("_hiddenDatasets")}}},{kind:"method",key:"_handleTooltip",value:function(t){0!==t.tooltip.opacity?this._tooltip=Object.assign(Object.assign({},t.tooltip),{},{top:this.chart.canvas.offsetTop+t.tooltip.caretY+12+"px",left:this.chart.canvas.offsetLeft+(0,T.u)(t.tooltip.caretX,100,this.clientWidth-100-this.paddingYAxis)-100+"px"}):this._tooltip=void 0}},{kind:"field",key:"updateChart",value:function(){var t=this;return function(e){t.chart&&t.chart.update(e)}}},{kind:"get",static:!0,key:"styles",value:function(){return(0,w.iv)(u||(u=(0,v.Z)([":host{display:block;position:var(--chart-base-position,relative)}.chartContainer{overflow:hidden;height:0;transition:height .3s cubic-bezier(.4,0,.2,1)}canvas{max-height:var(--chart-max-height,400px)}.chartLegend{text-align:center}.chartLegend li{cursor:pointer;display:inline-grid;grid-auto-flow:column;padding:0 8px;box-sizing:border-box;align-items:center;color:var(--secondary-text-color)}.chartLegend .hidden{text-decoration:line-through}.chartLegend .label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chartLegend .bullet,.chartTooltip .bullet{border-width:1px;border-style:solid;border-radius:50%;display:inline-block;height:16px;margin-right:6px;width:16px;flex-shrink:0;box-sizing:border-box;margin-inline-end:6px;margin-inline-start:initial;direction:var(--direction)}.chartTooltip .bullet{align-self:baseline}:host([rtl]) .chartLegend .bullet,:host([rtl]) .chartTooltip .bullet{margin-right:inherit;margin-left:6px;margin-inline-end:inherit;margin-inline-start:6px;direction:var(--direction)}.chartTooltip{padding:8px;font-size:90%;position:absolute;background:rgba(80,80,80,.9);color:#fff;border-radius:4px;pointer-events:none;z-index:1000;width:200px;box-sizing:border-box}:host([rtl]) .chartTooltip{direction:rtl}.chartLegend ul,.chartTooltip ul{display:inline-block;padding:0 0px;margin:8px 0 0 0;width:100%}.chartTooltip ul{margin:0 4px}.chartTooltip li{display:flex;white-space:pre-line;align-items:center;line-height:16px;padding:4px 0}.chartTooltip .title{text-align:center;font-weight:500;direction:ltr}.chartTooltip .footer{font-weight:500}.chartTooltip .beforeBody{text-align:center;font-weight:300;word-break:break-all}"])))}}]}}),w.oi)},73826:function(t,e,i){i.d(e,{f:function(){return f}});var r=i(40039),a=i(33368),n=i(71650),o=i(82390),s=i(69205),d=i(70906),l=i(91808),c=i(88771),u=i(47838),h=i(79932),f=function(t){var e=(0,l.Z)(null,(function(t,e){var i=function(e){(0,s.Z)(r,e);var i=(0,d.Z)(r);function r(){var e;(0,n.Z)(this,r);for(var a=arguments.length,s=new Array(a),d=0;d<a;d++)s[d]=arguments[d];return e=i.call.apply(i,[this].concat(s)),t((0,o.Z)(e)),e}return(0,a.Z)(r)}(e);return{F:i,d:[{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,c.Z)((0,u.Z)(i.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,c.Z)((0,u.Z)(i.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){var t=this.__unsubs.pop();t instanceof Promise?t.then((function(t){return t()})):t()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(t){if((0,c.Z)((0,u.Z)(i.prototype),"updated",this).call(this,t),t.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps){var e,a=(0,r.Z)(t.keys());try{for(a.s();!(e=a.n()).done;){var n=e.value;if(this.hassSubscribeRequiredHostProps.includes(n))return void this.__checkSubscribed()}}catch(o){a.e(o)}finally{a.f()}}}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var t,e=this;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(t=this.hassSubscribeRequiredHostProps)&&void 0!==t&&t.some((function(t){return void 0===e[t]}))||(this.__unsubs=this.hassSubscribe())}}]}}),t);return e}},9897:function(t,e,i){i.r(e),i.d(e,{HuiEnergyUsageGraphCard:function(){return A}});var r,a,n,o,s=i(68990),d=i(99312),l=i(53709),c=i(81043),u=i(40039),h=i(88962),f=i(33368),p=i(71650),g=i(82390),v=i(69205),y=i(70906),b=i(91808),_=i(27088),k=i(70390),m=i(53970),Z=i(24112),x=i(72277),C=i(59699),w=i(68144),D=i(79932),S=i(83448),O=i(14516),T=i(15838),j=i(89525),P=i(12198),M=i(49684),H=i(18457),V=(i(62336),i(22098),i(55424)),z=i(38014),E=i(73826),A=(0,b.Z)([(0,D.Mo)("hui-energy-usage-graph-card")],(function(t,e){var i,b=function(e){(0,v.Z)(r,e);var i=(0,y.Z)(r);function r(){var e;(0,p.Z)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return e=i.call.apply(i,[this].concat(n)),t((0,g.Z)(e)),e}return(0,f.Z)(r)}(e);return{F:b,d:[{kind:"field",decorators:[(0,D.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,D.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,D.SB)()],key:"_chartData",value:function(){return{datasets:[]}}},{kind:"field",decorators:[(0,D.SB)()],key:"_start",value:function(){return(0,_.Z)()}},{kind:"field",decorators:[(0,D.SB)()],key:"_end",value:function(){return(0,k.Z)()}},{kind:"field",decorators:[(0,D.SB)()],key:"_compareStart",value:void 0},{kind:"field",decorators:[(0,D.SB)()],key:"_compareEnd",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:function(){return["_config"]}},{kind:"method",key:"hassSubscribe",value:function(){var t,e=this;return[(0,V.UB)(this.hass,{key:null===(t=this._config)||void 0===t?void 0:t.collection_key}).subscribe((function(t){return e._getStatistics(t)}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(t){this._config=t}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?(0,w.dy)(r||(r=(0,h.Z)([" <ha-card> ",' <div class="content ','"> <ha-chart-base .hass="','" .data="','" .options="','" chart-type="bar"></ha-chart-base> '," </div> </ha-card> "])),this._config.title?(0,w.dy)(a||(a=(0,h.Z)(['<h1 class="card-header">',"</h1>"])),this._config.title):"",(0,S.$)({"has-header":!!this._config.title}),this.hass,this._chartData,this._createOptions(this._start,this._end,this.hass.locale,this._compareStart,this._compareEnd),this._chartData.datasets.some((function(t){return t.data.length}))?"":(0,w.dy)(n||(n=(0,h.Z)(['<div class="no-data"> '," </div>"])),(0,m.Z)(this._start)?this.hass.localize("ui.panel.lovelace.cards.energy.no_data"):this.hass.localize("ui.panel.lovelace.cards.energy.no_data_period"))):w.Ld}},{kind:"field",key:"_createOptions",value:function(){var t=this;return(0,O.Z)((function(e,i,r,a,n){var o=(0,Z.Z)(i,e),s=void 0!==a&&void 0!==n;if(s){var d=(0,x.Z)(i,e),l=(0,x.Z)(n,a);l>d?i=(0,C.Z)(i,l-d):d>l&&(n=(0,C.Z)(n,d-l))}var c={parsing:!1,animation:!1,interaction:{mode:"x"},scales:{x:{type:"time",suggestedMin:e.getTime(),suggestedMax:i.getTime(),adapters:{date:{locale:r}},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,font:function(t){return t.tick&&t.tick.major?{weight:"bold"}:{}}},time:{tooltipFormat:o>35?"monthyear":o>7?"date":o>2?"weekday":o>0?"datetime":"hour",minUnit:o>35?"month":o>2?"day":"hour"}},y:{stacked:!0,type:"linear",title:{display:!0,text:"kWh"},ticks:{beginAtZero:!0,callback:function(t){return(0,H.uf)(Math.abs(t),r)}}}},plugins:{tooltip:{position:"nearest",filter:function(t){return"0"!==t.formattedValue},callbacks:{title:function(t){if(o>0)return t[0].label;var e=new Date(t[0].parsed.x);return"".concat(s?"".concat((0,P.mn)(e,r),": "):"").concat((0,M.mr)(e,r)," – ").concat((0,M.mr)((0,C.Z)(e,1),r))},label:function(t){return"".concat(t.dataset.label,": ").concat((0,H.uf)(Math.abs(t.parsed.y),r)," kWh")},footer:function(e){var i,a=0,n=0,o=(0,u.Z)(e);try{for(o.s();!(i=o.n()).done;){var s=i.value,d=s.dataset.data[s.dataIndex].y;d>0?a+=d:n+=Math.abs(d)}}catch(l){o.e(l)}finally{o.f()}return[a?t.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.total_consumed",{num:(0,H.uf)(a,r)}):"",n?t.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.total_returned",{num:(0,H.uf)(n,r)}):""].filter(Boolean)}}},filler:{propagate:!1},legend:{display:!1,labels:{usePointStyle:!0}}},elements:{bar:{borderWidth:1.5,borderRadius:4},point:{hitRadius:50}},locale:(0,H.Hd)(r)};return s&&(c.scales.xAxisCompare=Object.assign(Object.assign({},c.scales.x),{},{suggestedMin:a.getTime(),suggestedMax:n.getTime(),display:!1})),c}))}},{kind:"method",key:"_getStatistics",value:(i=(0,c.Z)((0,d.Z)().mark((function t(e){var i,r,a,n,o,s,c,h,f,p,g,v,y,b;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=[],r={},a=(0,u.Z)(e.prefs.energy_sources),t.prev=3,a.s();case 5:if((n=a.n()).done){t.next=21;break}if("solar"!==(o=n.value).type){t.next=10;break}return r.solar?r.solar.push(o.stat_energy_from):r.solar=[o.stat_energy_from],t.abrupt("continue",19);case 10:if("battery"!==o.type){t.next=13;break}return r.to_battery?(r.to_battery.push(o.stat_energy_to),r.from_battery.push(o.stat_energy_from)):(r.to_battery=[o.stat_energy_to],r.from_battery=[o.stat_energy_from]),t.abrupt("continue",19);case 13:if("grid"===o.type){t.next=15;break}return t.abrupt("continue",19);case 15:s=(0,u.Z)(o.flow_from);try{for(s.s();!(c=s.n()).done;)h=c.value,r.from_grid?r.from_grid.push(h.stat_energy_from):r.from_grid=[h.stat_energy_from]}catch(d){s.e(d)}finally{s.f()}f=(0,u.Z)(o.flow_to);try{for(f.s();!(p=f.n()).done;)g=p.value,r.to_grid?r.to_grid.push(g.stat_energy_to):r.to_grid=[g.stat_energy_to]}catch(d){f.e(d)}finally{f.f()}case 19:t.next=5;break;case 21:t.next=26;break;case 23:t.prev=23,t.t0=t.catch(3),a.e(t.t0);case 26:return t.prev=26,a.f(),t.finish(26);case 29:v=getComputedStyle(this),y={to_grid:v.getPropertyValue("--energy-grid-return-color").trim(),to_battery:v.getPropertyValue("--energy-battery-in-color").trim(),from_grid:v.getPropertyValue("--energy-grid-consumption-color").trim(),used_grid:v.getPropertyValue("--energy-grid-consumption-color").trim(),used_solar:v.getPropertyValue("--energy-solar-color").trim(),used_battery:v.getPropertyValue("--energy-battery-out-color").trim()},b={used_grid:this.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.combined_from_grid"),used_solar:this.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.consumed_solar"),used_battery:this.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.consumed_battery")},this._start=e.start,this._end=e.end||(0,k.Z)(),this._compareStart=e.startCompare,this._compareEnd=e.endCompare,i.push.apply(i,(0,l.Z)(this._processDataSet(e.stats,e.statsMetadata,r,y,b,!1))),e.statsCompare&&(i.push({order:0,data:[]}),i.push({order:999,data:[],xAxisID:"xAxisCompare"}),i.push.apply(i,(0,l.Z)(this._processDataSet(e.statsCompare,e.statsMetadata,r,y,b,!0)))),this._chartData={datasets:i};case 39:case"end":return t.stop()}}),t,this,[[3,23,26,29]])}))),function(t){return i.apply(this,arguments)})},{kind:"method",key:"_processDataSet",value:function(t,e,i,r,a){var n=this,o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],d=[],l={},c={};Object.entries(i).forEach((function(e){var i=(0,s.Z)(e,2),r=i[0],a=i[1],n=["solar","to_grid","from_grid","to_battery","from_battery"].includes(r),o=!["solar","from_battery"].includes(r),d={},u={};a.forEach((function(e){var i=t[e];if(i){var r={};i.forEach((function(t){if(null!==t.change&&void 0!==t.change){var e=t.change;n&&(d[t.start]=t.start in d?d[t.start]+e:e),o&&!(t.start in r)&&(r[t.start]=e)}})),u[e]=r}})),n&&(c[r]=d),o&&(l[r]=u)}));var u={},h={};if((c.to_grid||c.to_battery)&&c.solar){for(var f={},p=0,g=Object.keys(c.solar);p<g.length;p++){var v,y,b=g[p];if(f[b]=(c.solar[b]||0)-((null===(v=c.to_grid)||void 0===v?void 0:v[b])||0)-((null===(y=c.to_battery)||void 0===y?void 0:y[b])||0),f[b]<0){var _,k,m;if(c.to_battery)if(u[b]=-1*f[b],u[b]>((null===(_=c.from_grid)||void 0===_?void 0:_[b])||0))h[b]=Math.min(0,u[b]-((null===(k=c.from_grid)||void 0===k?void 0:k[b])||0)),u[b]=null===(m=c.from_grid)||void 0===m?void 0:m[b];f[b]=0}}l.used_solar={used_solar:f}}if(c.from_battery)if(c.to_grid){for(var Z={},x=0,C=Object.keys(c.from_battery);x<C.length;x++){var w=C[x];Z[w]=(c.from_battery[w]||0)-(h[w]||0)}l.used_battery={used_battery:Z}}else l.used_battery={used_battery:c.from_battery};if(l.from_grid&&c.to_battery){for(var D={},S=function(){for(var t,e=P[O],i=0,r=0,a=Object.entries(l.from_grid);r<a.length;r++){var n=(0,s.Z)(a[r],2),o=n[0];if(n[1][e]&&(t=o,i++),i>1)break}if(1===i)l.from_grid[t][e]-=u[e]||0;else{var d=0;Object.values(l.from_grid).forEach((function(t){d+=t[e]||0,delete t[e]})),D[e]=d-(u[e]||0)}},O=0,P=Object.keys(u);O<P.length;O++)S();l.used_grid={used_grid:D}}var M=[];Object.values(l).forEach((function(t){Object.values(t).forEach((function(t){M=M.concat(Object.keys(t))}))}));var H=Array.from(new Set(M));return Object.entries(l).forEach((function(t){var i=(0,s.Z)(t,2),c=i[0],u=i[1];Object.entries(u).forEach((function(t,i){for(var u=(0,s.Z)(t,2),h=u[0],f=u[1],p=i>0?n.hass.themes.darkMode?(0,j.C)((0,T.Rw)((0,T.wK)(r[c])),i):(0,j.W)((0,T.Rw)((0,T.wK)(r[c])),i):void 0,g=p?(0,T.CO)((0,T.p3)(p)):r[c],v=[],y=0,b=H;y<b.length;y++){var _=b[y],k=f[_]||0;v.push({x:Number(_),y:k&&["to_grid","to_battery"].includes(c)?-1*k:k})}d.push({label:c in a?a[c]:(0,z.Kd)(n.hass,h,e[h]),order:"used_solar"===c?1:"to_battery"===c?Object.keys(l).length:i+2,borderColor:o?g+"7F":g,backgroundColor:o?g+"32":g+"7F",stack:"stack",data:v,xAxisID:o?"xAxisCompare":void 0})}))})),d}},{kind:"get",static:!0,key:"styles",value:function(){return(0,w.iv)(o||(o=(0,h.Z)(["ha-card{height:100%}.card-header{padding-bottom:0}.content{padding:16px}.has-header{padding-top:0}.no-data{position:absolute;height:100%;top:0;left:0;right:0;display:flex;justify-content:center;align-items:center;padding:20%;margin-left:32px;box-sizing:border-box}"])))}}]}}),(0,E.f)(w.oi))}}]);
//# sourceMappingURL=68943-6KjndeRS1e8.js.map