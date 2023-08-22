"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[86943],{62336:function(t,e,i){i.d(e,{Q:function(){return L}});var a,n,s,o,r,l,d,c,h,u=i(53709),p=i(99312),f=i(81043),v=i(93359),y=i(88962),g=i(33368),m=i(71650),k=i(82390),b=i(69205),_=i(70906),x=i(91808),Z=i(34541),C=i(47838),w=i(68144),D=i(79932),T=i(83448),O=i(47501),S=i(50239),j=i(87744),L=3e5;(0,x.Z)([(0,D.Mo)("ha-chart-base")],(function(t,e){var x,L=function(e){(0,b.Z)(a,e);var i=(0,_.Z)(a);function a(){var e;(0,m.Z)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return e=i.call.apply(i,[this].concat(s)),t((0,k.Z)(e)),e}return(0,g.Z)(a)}(e);return{F:L,d:[{kind:"field",key:"chart",value:void 0},{kind:"field",decorators:[(0,D.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,D.Cb)({attribute:"chart-type",reflect:!0})],key:"chartType",value:function(){return"line"}},{kind:"field",decorators:[(0,D.Cb)({attribute:!1})],key:"data",value:function(){return{datasets:[]}}},{kind:"field",decorators:[(0,D.Cb)({attribute:!1})],key:"options",value:void 0},{kind:"field",decorators:[(0,D.Cb)({attribute:!1})],key:"plugins",value:void 0},{kind:"field",decorators:[(0,D.Cb)({type:Number})],key:"height",value:void 0},{kind:"field",decorators:[(0,D.Cb)({type:Number})],key:"paddingYAxis",value:function(){return 0}},{kind:"field",decorators:[(0,D.SB)()],key:"_chartHeight",value:void 0},{kind:"field",decorators:[(0,D.SB)()],key:"_tooltip",value:void 0},{kind:"field",decorators:[(0,D.SB)()],key:"_hiddenDatasets",value:function(){return new Set}},{kind:"method",key:"_releaseCanvas",value:function(){this.chart&&this.chart.destroy()}},{kind:"method",key:"disconnectedCallback",value:function(){this._releaseCanvas(),(0,Z.Z)((0,C.Z)(L.prototype),"disconnectedCallback",this).call(this)}},{kind:"method",key:"connectedCallback",value:function(){(0,Z.Z)((0,C.Z)(L.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this._setupChart()}},{kind:"method",key:"firstUpdated",value:function(){var t=this;this._setupChart(),this.data.datasets.forEach((function(e,i){e.hidden&&t._hiddenDatasets.add(i)}))}},{kind:"method",key:"willUpdate",value:function(t){var e=this;if((0,Z.Z)((0,C.Z)(L.prototype),"willUpdate",this).call(this,t),this.hasUpdated&&this.chart){if(t.has("plugins"))return this.chart.destroy(),void this._setupChart();t.has("chartType")&&(this.chart.config.type=this.chartType),t.has("data")&&(this._hiddenDatasets.size&&this.data.datasets.forEach((function(t,i){t.hidden=e._hiddenDatasets.has(i)})),this.chart.data=this.data),t.has("options")&&(this.chart.options=this._createOptions()),this.chart.update("none")}}},{kind:"method",key:"render",value:function(){var t,e,i=this;return(0,w.dy)(a||(a=(0,y.Z)([" ",' <div class="chartContainer" style="','"> <canvas></canvas> '," </div> "])),!0===(null===(t=this.options)||void 0===t||null===(t=t.plugins)||void 0===t||null===(t=t.legend)||void 0===t?void 0:t.display)?(0,w.dy)(n||(n=(0,y.Z)(['<div class="chartLegend"> <ul> '," </ul> </div>"])),this.data.datasets.map((function(t,e){return(0,w.dy)(s||(s=(0,y.Z)(['<li .datasetIndex="','" @click="','" class="','" .title="','"> <div class="bullet" style="','"></div> <div class="label">',"</div> </li>"])),e,i._legendClick,(0,T.$)({hidden:i._hiddenDatasets.has(e)}),t.label,(0,O.V)({backgroundColor:t.backgroundColor,borderColor:t.borderColor}),t.label)}))):"",(0,O.V)({height:"".concat(null!==(e=this.height)&&void 0!==e?e:this._chartHeight,"px"),overflow:this._chartHeight?"initial":"hidden","padding-left":"".concat((0,j.HE)(this.hass)?0:this.paddingYAxis,"px"),"padding-right":"".concat((0,j.HE)(this.hass)?this.paddingYAxis:0,"px")}),this._tooltip?(0,w.dy)(o||(o=(0,y.Z)(['<div class="chartTooltip ','" style="','"> <div class="title">',"</div> "," <div> <ul> "," </ul> </div> "," </div>"])),(0,T.$)((0,v.Z)({},this._tooltip.yAlign,!0)),(0,O.V)({top:this._tooltip.top,left:this._tooltip.left}),this._tooltip.title,this._tooltip.beforeBody?(0,w.dy)(r||(r=(0,y.Z)(['<div class="beforeBody"> '," </div>"])),this._tooltip.beforeBody):"",this._tooltip.body.map((function(t,e){return(0,w.dy)(l||(l=(0,y.Z)(['<li> <div class="bullet" style="','"></div> '," </li>"])),(0,O.V)({backgroundColor:i._tooltip.labelColors[e].backgroundColor,borderColor:i._tooltip.labelColors[e].borderColor}),t.lines.join("\n"))})),this._tooltip.footer.length?(0,w.dy)(d||(d=(0,y.Z)(['<div class="footer"> '," </div>"])),this._tooltip.footer.map((function(t){return(0,w.dy)(c||(c=(0,y.Z)(["","<br>"])),t)}))):""):"")}},{kind:"method",key:"_setupChart",value:(x=(0,f.Z)((0,p.Z)().mark((function t(){var e,a,n;return(0,p.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.renderRoot.querySelector("canvas").getContext("2d"),t.next=3,Promise.all([i.e(23254),i.e(88006),i.e(51468),i.e(48324)]).then(i.bind(i,48324));case 3:a=t.sent.Chart,n=getComputedStyle(this),a.defaults.borderColor=n.getPropertyValue("--divider-color"),a.defaults.color=n.getPropertyValue("--secondary-text-color"),a.defaults.font.family=n.getPropertyValue("--mdc-typography-body1-font-family")||n.getPropertyValue("--mdc-typography-font-family")||"Roboto, Noto, sans-serif",this.chart=new a(e,{type:this.chartType,data:this.data,options:this._createOptions(),plugins:this._createPlugins()});case 9:case"end":return t.stop()}}),t,this)}))),function(){return x.apply(this,arguments)})},{kind:"method",key:"_createOptions",value:function(){var t,e,i,a=this;return Object.assign(Object.assign({},this.options),{},{plugins:Object.assign(Object.assign({},null===(t=this.options)||void 0===t?void 0:t.plugins),{},{tooltip:Object.assign(Object.assign({},null===(e=this.options)||void 0===e||null===(e=e.plugins)||void 0===e?void 0:e.tooltip),{},{enabled:!1,external:function(t){return a._handleTooltip(t)}}),legend:Object.assign(Object.assign({},null===(i=this.options)||void 0===i||null===(i=i.plugins)||void 0===i?void 0:i.legend),{},{display:!1})})})}},{kind:"method",key:"_createPlugins",value:function(){var t,e=this;return[].concat((0,u.Z)(this.plugins||[]),[{id:"afterRenderHook",afterRender:function(t){var i,a=t.height-(null!==(i=e._chartHeight)&&void 0!==i?i:0);(!e._chartHeight||a>0||a<-12)&&(e._chartHeight=t.height)},legend:Object.assign(Object.assign({},null===(t=this.options)||void 0===t||null===(t=t.plugins)||void 0===t?void 0:t.legend),{},{display:!1})}])}},{kind:"method",key:"_legendClick",value:function(t){if(this.chart){var e=t.currentTarget.datasetIndex;this.chart.isDatasetVisible(e)?(this.chart.setDatasetVisibility(e,!1),this._hiddenDatasets.add(e)):(this.chart.setDatasetVisibility(e,!0),this._hiddenDatasets.delete(e)),this.chart.update("none"),this.requestUpdate("_hiddenDatasets")}}},{kind:"method",key:"_handleTooltip",value:function(t){0!==t.tooltip.opacity?this._tooltip=Object.assign(Object.assign({},t.tooltip),{},{top:this.chart.canvas.offsetTop+t.tooltip.caretY+12+"px",left:this.chart.canvas.offsetLeft+(0,S.u)(t.tooltip.caretX,100,this.clientWidth-100-this.paddingYAxis)-100+"px"}):this._tooltip=void 0}},{kind:"field",key:"updateChart",value:function(){var t=this;return function(e){t.chart&&t.chart.update(e)}}},{kind:"get",static:!0,key:"styles",value:function(){return(0,w.iv)(h||(h=(0,y.Z)([":host{display:block;position:var(--chart-base-position,relative)}.chartContainer{overflow:hidden;height:0;transition:height .3s cubic-bezier(.4,0,.2,1)}canvas{max-height:var(--chart-max-height,400px)}.chartLegend{text-align:center}.chartLegend li{cursor:pointer;display:inline-grid;grid-auto-flow:column;padding:0 8px;box-sizing:border-box;align-items:center;color:var(--secondary-text-color)}.chartLegend .hidden{text-decoration:line-through}.chartLegend .label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chartLegend .bullet,.chartTooltip .bullet{border-width:1px;border-style:solid;border-radius:50%;display:inline-block;height:16px;margin-right:6px;width:16px;flex-shrink:0;box-sizing:border-box;margin-inline-end:6px;margin-inline-start:initial;direction:var(--direction)}.chartTooltip .bullet{align-self:baseline}:host([rtl]) .chartLegend .bullet,:host([rtl]) .chartTooltip .bullet{margin-right:inherit;margin-left:6px;margin-inline-end:inherit;margin-inline-start:6px;direction:var(--direction)}.chartTooltip{padding:8px;font-size:90%;position:absolute;background:rgba(80,80,80,.9);color:#fff;border-radius:4px;pointer-events:none;z-index:1000;width:200px;box-sizing:border-box}:host([rtl]) .chartTooltip{direction:rtl}.chartLegend ul,.chartTooltip ul{display:inline-block;padding:0 0px;margin:8px 0 0 0;width:100%}.chartTooltip ul{margin:0 4px}.chartTooltip li{display:flex;white-space:pre-line;align-items:center;line-height:16px;padding:4px 0}.chartTooltip .title{text-align:center;font-weight:500;direction:ltr}.chartTooltip .footer{font-weight:500}.chartTooltip .beforeBody{text-align:center;font-weight:300;word-break:break-all}"])))}}]}}),w.oi)},17595:function(t,e,i){i.d(e,{O:function(){return D}});var a,n,s,o,r,l=i(68990),d=i(53709),c=i(99312),h=i(81043),u=i(88962),p=i(33368),f=i(71650),v=i(82390),y=i(69205),g=i(70906),m=i(91808),k=i(68144),b=i(79932),_=i(14516),x=i(55070),Z=i(7323),C=i(18457),w=i(38014),D=(i(62336),{mean:"mean",min:"min",max:"max",sum:"sum",state:"sum",change:"sum"});(0,m.Z)([(0,b.Mo)("statistics-chart")],(function(t,e){var i,m=function(e){(0,y.Z)(a,e);var i=(0,g.Z)(a);function a(){var e;(0,f.Z)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return e=i.call.apply(i,[this].concat(s)),t((0,v.Z)(e)),e}return(0,p.Z)(a)}(e);return{F:m,d:[{kind:"field",decorators:[(0,b.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,b.Cb)({attribute:!1})],key:"statisticsData",value:void 0},{kind:"field",decorators:[(0,b.Cb)({attribute:!1})],key:"metadata",value:void 0},{kind:"field",decorators:[(0,b.Cb)()],key:"names",value:void 0},{kind:"field",decorators:[(0,b.Cb)()],key:"unit",value:void 0},{kind:"field",decorators:[(0,b.Cb)({attribute:!1})],key:"endTime",value:void 0},{kind:"field",decorators:[(0,b.Cb)({type:Array})],key:"statTypes",value:function(){return["sum","min","mean","max"]}},{kind:"field",decorators:[(0,b.Cb)()],key:"chartType",value:function(){return"line"}},{kind:"field",decorators:[(0,b.Cb)({type:Boolean})],key:"hideLegend",value:function(){return!1}},{kind:"field",decorators:[(0,b.Cb)({type:Boolean})],key:"isLoadingData",value:function(){return!1}},{kind:"field",decorators:[(0,b.SB)()],key:"_chartData",value:function(){return{datasets:[]}}},{kind:"field",decorators:[(0,b.SB)()],key:"_chartOptions",value:void 0},{kind:"field",key:"_computedStyle",value:void 0},{kind:"method",key:"shouldUpdate",value:function(t){return t.size>1||!t.has("hass")}},{kind:"method",key:"willUpdate",value:function(t){this.hasUpdated&&!t.has("unit")||this._createOptions(),(t.has("statisticsData")||t.has("statTypes")||t.has("chartType")||t.has("hideLegend"))&&this._generateData()}},{kind:"method",key:"firstUpdated",value:function(){this._computedStyle=getComputedStyle(this)}},{kind:"method",key:"render",value:function(){return(0,Z.p)(this.hass,"history")?this.isLoadingData&&!this.statisticsData?(0,k.dy)(n||(n=(0,u.Z)(['<div class="info"> '," </div>"])),this.hass.localize("ui.components.statistics_charts.loading_statistics")):this.statisticsData&&Object.keys(this.statisticsData).length?(0,k.dy)(o||(o=(0,u.Z)([' <ha-chart-base .hass="','" .data="','" .options="','" .chartType="','"></ha-chart-base> '])),this.hass,this._chartData,this._chartOptions,this.chartType):(0,k.dy)(s||(s=(0,u.Z)(['<div class="info"> '," </div>"])),this.hass.localize("ui.components.statistics_charts.no_statistics_found")):(0,k.dy)(a||(a=(0,u.Z)(['<div class="info"> '," </div>"])),this.hass.localize("ui.components.history_charts.history_disabled"))}},{kind:"method",key:"_createOptions",value:function(t){var e=this;this._chartOptions={parsing:!1,animation:!1,interaction:{mode:"nearest",axis:"x"},scales:{x:{type:"time",adapters:{date:{locale:this.hass.locale,config:this.hass.config}},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:!0},font:function(t){return t.tick&&t.tick.major?{weight:"bold"}:{}}},time:{tooltipFormat:"datetime"}},y:{beginAtZero:"bar"===this.chartType,ticks:{maxTicksLimit:7},title:{display:t||this.unit,text:t||this.unit}}},plugins:{tooltip:{callbacks:{label:function(t){return"".concat(t.dataset.label,": ").concat((0,C.uf)(t.parsed.y,e.hass.locale)," ").concat(t.dataset.unit||"")}}},filler:{propagate:!0},legend:{display:!this.hideLegend,labels:{usePointStyle:!0}}},elements:{line:{tension:.4,cubicInterpolationMode:"monotone",borderWidth:1.5},bar:{borderWidth:1.5,borderRadius:4},point:{hitRadius:50}},locale:(0,C.Hd)(this.hass.locale)}}},{kind:"field",key:"_getStatisticsMetaData",value:function(){var t=this;return(0,_.Z)(function(){var e=(0,h.Z)((0,c.Z)().mark((function e(i){var a,n;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,w.Py)(t.hass,i);case 2:return a=e.sent,n={},a.forEach((function(t){n[t.statistic_id]=t})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{kind:"method",key:"_generateData",value:(i=(0,h.Z)((0,c.Z)().mark((function t(){var e,i,a,n,s,o,r=this;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.statisticsData){t.next=2;break}return t.abrupt("return");case 2:if(t.t0=this.metadata,t.t0){t.next=7;break}return t.next=6,this._getStatisticsMetaData(Object.keys(this.statisticsData));case 6:t.t0=t.sent;case 7:if(e=t.t0,i=0,a=Object.entries(this.statisticsData),n=[],0!==a.length){t.next=13;break}return t.abrupt("return");case 13:(this.endTime||new Date(Math.max.apply(Math,(0,d.Z)(a.map((function(t){var e=(0,l.Z)(t,2),i=(e[0],e[1]);return new Date(i[i.length-1].start).getTime()}))))))>new Date&&new Date,o=this.names||{},a.forEach((function(t){var a=(0,l.Z)(t,2),c=a[0],h=a[1],u=null==e?void 0:e[c],p=o[c];void 0===p&&(p=(0,w.Kd)(r.hass,c,u)),r.unit||(void 0===s?s=(0,w.dO)(r.hass,c,u):null!==s&&s!==(0,w.dO)(r.hass,c,u)&&(s=null));var f,v=null,y=[],g=(0,x.hZ)(i,r._computedStyle||getComputedStyle(r));i++;var m=[],k=r.statTypes.includes("mean")&&(0,w.Nw)(h,"mean");(k?(0,d.Z)(r.statTypes).sort((function(t,e){return"min"===t||"max"===e?-1:"max"===t||"min"===e?1:0})):r.statTypes).forEach((function(t){if((0,w.Nw)(h,t)){var e=k&&("min"===t||"max"===t);m.push(t),y.push({label:p?"".concat(p," (").concat(r.hass.localize("ui.components.statistics_charts.statistic_types.".concat(t)),")\n            "):r.hass.localize("ui.components.statistics_charts.statistic_types.".concat(t)),fill:!!k&&("min"===t?"+1":"max"===t&&"-1"),borderColor:e?g+(r.hideLegend?"00":"7F"):g,backgroundColor:e?g+"3F":g+"7F",pointRadius:0,data:[],unit:null==u?void 0:u.unit_of_measurement,band:e})}}));var b=null,_=null;h.forEach((function(t){var e=new Date(t.start);if(b!==e){b=e;var i=[];m.forEach((function(e){var a;"sum"===e?null==_?(a=0,_=t.sum):a=(t.sum||0)-_:a=t[e],i.push(null!=a?Math.round(100*a)/100:null)})),function(t,e,i){i&&(t>e||(y.forEach((function(e,a){"line"===r.chartType&&f&&v&&f.getTime()!==t.getTime()&&(e.data.push({x:f.getTime(),y:v[a]}),e.data.push({x:f.getTime(),y:null})),e.data.push({x:t.getTime(),y:i[a]})})),v=i,f=e))}(e,new Date(t.end),i)}})),Array.prototype.push.apply(n,y)})),s&&this._createOptions(s),this._chartData={datasets:n};case 19:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return(0,k.iv)(r||(r=(0,u.Z)([":host{display:block;min-height:60px}.info{text-align:center;line-height:60px;color:var(--secondary-text-color)}"])))}}]}}),k.oi)},86943:function(t,e,i){i.r(e),i.d(e,{HuiStatisticsGraphCardEditor:function(){return L}});var a,n,s=i(88962),o=i(99312),r=i(81043),l=i(33368),d=i(71650),c=i(82390),h=i(69205),u=i(70906),p=i(91808),f=i(68144),v=i(79932),y=i(14516),g=i(93088),m=i(76680),k=i(47181),b=i(36639),_=i(17595),x=(i(13927),i(68331),i(38014)),Z=i(90271),C=i(98346),w=i(30232),D=i(95396),T=(0,g.G0)([(0,g.i0)("state"),(0,g.i0)("sum"),(0,g.i0)("change"),(0,g.i0)("min"),(0,g.i0)("max"),(0,g.i0)("mean")]),O=(0,g.f0)(C.I,(0,g.Ry)({entities:(0,g.IX)(w.K),title:(0,g.jt)((0,g.Z_)()),days_to_show:(0,g.jt)((0,g.Rx)()),period:(0,g.jt)((0,g.G0)([(0,g.i0)("5minute"),(0,g.i0)("hour"),(0,g.i0)("day"),(0,g.i0)("week"),(0,g.i0)("month")])),chart_type:(0,g.jt)((0,g.G0)([(0,g.i0)("bar"),(0,g.i0)("line")])),stat_types:(0,g.jt)((0,g.G0)([(0,g.IX)(T),T])),unit:(0,g.jt)((0,g.Z_)()),hide_legend:(0,g.jt)((0,g.O7)())})),S=["5minute","hour","day","week","month"],j=["mean","min","max","sum","state","change"],L=(0,p.Z)([(0,v.Mo)("hui-statistics-graph-card-editor")],(function(t,e){var i,p=function(e){(0,h.Z)(a,e);var i=(0,u.Z)(a);function a(){var e;(0,d.Z)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return e=i.call.apply(i,[this].concat(s)),t((0,c.Z)(e)),e}return(0,l.Z)(a)}(e);return{F:p,d:[{kind:"field",decorators:[(0,v.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,v.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,v.SB)()],key:"_configEntities",value:void 0},{kind:"field",decorators:[(0,v.SB)()],key:"_metaDatas",value:void 0},{kind:"method",key:"setConfig",value:function(t){(0,g.hu)(t,O),this._config=t,this._configEntities=t.entities?(0,Z.A)(t.entities,!1).map((function(t){return t.entity})):[]}},{kind:"field",key:"_getStatisticsMetaData",value:function(){var t=this;return function(){var e=(0,r.Z)((0,o.Z)().mark((function e(i){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.Py)(t.hass,i||[]);case 2:t._metaDatas=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},{kind:"method",key:"willUpdate",value:function(t){var e;t.has("_configEntities")&&!(0,b.v)(this._configEntities,t.get("_configEntities"))&&(this._metaDatas=void 0,null!==(e=this._configEntities)&&void 0!==e&&e.length&&this._getStatisticsMetaData(this._configEntities))}},{kind:"field",key:"_schema",value:function(){var t=this;return(0,y.Z)((function(e,i,a){var n=new Set;null==a||a.forEach((function(e){var i=(0,x.dO)(t.hass,e.statistic_id,e);i&&n.add(i)}));var s=[{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"period",required:!0,selector:{select:{options:S.map((function(t){return{value:t,label:e("ui.panel.lovelace.editor.card.statistics-graph.periods.".concat(t)),disabled:"5minute"===t&&(null==i?void 0:i.some((function(t){return(0,x.Hs)(t)})))}}))}}},{name:"days_to_show",default:D.DEFAULT_DAYS_TO_SHOW,selector:{number:{min:1,mode:"box"}}},{name:"stat_types",required:!0,selector:{select:{multiple:!0,mode:"list",options:j.map((function(t){return{value:t,label:e("ui.panel.lovelace.editor.card.statistics-graph.stat_type_labels.".concat(t)),disabled:!a||!a.some((function(e){return(0,x.Z0)(e,_.O[t])}))}}))}}},{name:"chart_type",required:!0,type:"select",options:[["line","Line"],["bar","Bar"]]},{name:"hide_legend",required:!1,selector:{boolean:{}}}]}];return n.size>1&&s[1].schema.push({name:"unit",required:!1,selector:{select:{options:Array.from(n).map((function(t){return{value:t,label:t}}))}}}),s}))}},{kind:"method",key:"render",value:function(){var t,e,i=this;if(!this.hass||!this._config)return f.Ld;var n=this._schema(this.hass.localize,this._configEntities,this._metaDatas),o=this._config.stat_types?(0,m.r)(this._config.stat_types):j.filter((function(t){var e;return null===(e=i._metaDatas)||void 0===e?void 0:e.some((function(e){return(0,x.Z0)(e,t)}))})),r=Object.assign(Object.assign({chart_type:"line",period:"hour"},this._config),{},{stat_types:o}),l=null===(t=this._metaDatas)||void 0===t||null===(t=t[0])||void 0===t?void 0:t.unit_class,d=l||null===(e=this._metaDatas)||void 0===e||null===(e=e[0])||void 0===e?void 0:e.statistics_unit_of_measurement;return(0,f.dy)(a||(a=(0,s.Z)([' <ha-form .hass="','" .data="','" .schema="','" .computeLabel="','" @value-changed="','"></ha-form> <ha-statistics-picker allow-custom-entity .hass="','" .pickStatisticLabel="','" .pickedStatisticLabel="','" .includeStatisticsUnitOfMeasurement="','" .includeUnitClass="','" .ignoreRestrictionsOnFirstStatistic="','" .value="','" .configValue="','" @value-changed="','"></ha-statistics-picker> '])),this.hass,r,n,this._computeLabelCallback,this._valueChanged,this.hass,this.hass.localize("ui.panel.lovelace.editor.card.statistics-graph.pick_statistic"),this.hass.localize("ui.panel.lovelace.editor.card.statistics-graph.picked_statistic"),d,l,!0,this._configEntities,"entities",this._entitiesChanged)}},{kind:"method",key:"_valueChanged",value:function(t){(0,k.B)(this,"config-changed",{config:t.detail.value})}},{kind:"method",key:"_entitiesChanged",value:(i=(0,r.Z)((0,o.Z)().mark((function t(e){var i,a,n,s,r=this;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.detail.value,a=i.map((function(t){var e=r._config.entities.find((function(e){return"string"!=typeof e&&e.entity===t}));return null!=e?e:t})),n=Object.assign(Object.assign({},this._config),{},{entities:a}),null!=i&&i.some((function(t){return(0,x.Hs)(t)}))&&"5minute"===n.period&&delete n.period,!n.stat_types&&!n.unit){t.next=10;break}return t.next=7,(0,x.Py)(this.hass,i);case 7:t.t0=t.sent,t.next=11;break;case 10:t.t0=void 0;case 11:s=t.t0,n.stat_types&&n.entities.length&&(n.stat_types=(0,m.r)(n.stat_types).filter((function(t){return s.some((function(e){return(0,x.Z0)(e,t)}))})),n.stat_types.length||delete n.stat_types),n.unit&&!s.some((function(t){return(0,x.dO)(r.hass,null==t?void 0:t.statistic_id,t)===n.unit}))&&delete n.unit,(0,k.B)(this,"config-changed",{config:n});case 15:case"end":return t.stop()}}),t,this)}))),function(t){return i.apply(this,arguments)})},{kind:"field",key:"_computeLabelCallback",value:function(){var t=this;return function(e){switch(e.name){case"chart_type":case"stat_types":case"period":case"unit":case"hide_legend":return t.hass.localize("ui.panel.lovelace.editor.card.statistics-graph.".concat(e.name));default:return t.hass.localize("ui.panel.lovelace.editor.card.generic.".concat(e.name))}}}},{kind:"field",static:!0,key:"styles",value:function(){return(0,f.iv)(n||(n=(0,s.Z)(["ha-statistics-picker{width:100%}"])))}}]}}),f.oi)},98346:function(t,e,i){i.d(e,{I:function(){return n}});var a=i(93088),n=(0,a.Ry)({type:(0,a.Z_)(),view_layout:(0,a.Yj)()})}}]);
//# sourceMappingURL=86943-tGZXYPeVZJU.js.map