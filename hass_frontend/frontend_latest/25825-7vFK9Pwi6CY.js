"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[25825],{25516:(t,e,i)=>{i.d(e,{i:()=>s});const a=(0,i(8330).P)((t=>{history.replaceState({scrollPosition:t},"")}),300),s=t=>e=>({kind:"method",placement:"prototype",key:e.key,descriptor:{set(t){a(t),this[`__${String(e.key)}`]=t},get(){var t;return this[`__${String(e.key)}`]||(null===(t=history.state)||void 0===t?void 0:t.scrollPosition)},enumerable:!0,configurable:!0},finisher(i){const a=i.prototype.connectedCallback;i.prototype.connectedCallback=function(){a.call(this);const i=this[e.key];i&&this.updateComplete.then((()=>{const e=this.renderRoot.querySelector(t);e&&setTimeout((()=>{e.scrollTop=i}),0)}))}}})},8330:(t,e,i)=>{i.d(e,{P:()=>a});const a=(t,e,i=!0,a=!0)=>{let s,o=0;const n=(...n)=>{const r=()=>{o=!1===i?0:Date.now(),s=void 0,t(...n)},d=Date.now();o||!1!==i||(o=d);const l=e-(d-o);l<=0||l>e?(s&&(clearTimeout(s),s=void 0),o=d,t(...n)):s||!1===a||(s=window.setTimeout(r,l))};return n.cancel=()=>{clearTimeout(s),s=void 0,o=0},n}},62336:(t,e,i)=>{i.d(e,{Q:()=>u});var a=i(17463),s=i(34541),o=i(47838),n=i(68144),r=i(79932),d=i(83448),l=i(47501),h=i(50239),c=i(87744);const u=3e5;(0,a.Z)([(0,r.Mo)("ha-chart-base")],(function(t,e){class a extends e{constructor(...e){super(...e),t(this)}}return{F:a,d:[{kind:"field",key:"chart",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:"chart-type",reflect:!0})],key:"chartType",value:()=>"line"},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"data",value:()=>({datasets:[]})},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"options",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"plugins",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"height",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"paddingYAxis",value:()=>0},{kind:"field",decorators:[(0,r.SB)()],key:"_chartHeight",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_tooltip",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_hiddenDatasets",value:()=>new Set},{kind:"method",key:"_releaseCanvas",value:function(){this.chart&&this.chart.destroy()}},{kind:"method",key:"disconnectedCallback",value:function(){this._releaseCanvas(),(0,s.Z)((0,o.Z)(a.prototype),"disconnectedCallback",this).call(this)}},{kind:"method",key:"connectedCallback",value:function(){(0,s.Z)((0,o.Z)(a.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this._setupChart()}},{kind:"method",key:"firstUpdated",value:function(){this._setupChart(),this.data.datasets.forEach(((t,e)=>{t.hidden&&this._hiddenDatasets.add(e)}))}},{kind:"method",key:"willUpdate",value:function(t){if((0,s.Z)((0,o.Z)(a.prototype),"willUpdate",this).call(this,t),this.hasUpdated&&this.chart){if(t.has("plugins"))return this.chart.destroy(),void this._setupChart();t.has("chartType")&&(this.chart.config.type=this.chartType),t.has("data")&&(this._hiddenDatasets.size&&this.data.datasets.forEach(((t,e)=>{t.hidden=this._hiddenDatasets.has(e)})),this.chart.data=this.data),t.has("options")&&(this.chart.options=this._createOptions()),this.chart.update("none")}}},{kind:"method",key:"render",value:function(){var t,e,i,a;return n.dy` ${!0===(null===(t=this.options)||void 0===t||null===(e=t.plugins)||void 0===e||null===(i=e.legend)||void 0===i?void 0:i.display)?n.dy`<div class="chartLegend"> <ul> ${this.data.datasets.map(((t,e)=>n.dy`<li .datasetIndex="${e}" @click="${this._legendClick}" class="${(0,d.$)({hidden:this._hiddenDatasets.has(e)})}" .title="${t.label}"> <div class="bullet" style="${(0,l.V)({backgroundColor:t.backgroundColor,borderColor:t.borderColor})}"></div> <div class="label">${t.label}</div> </li>`))} </ul> </div>`:""} <div class="chartContainer" style="${(0,l.V)({height:`${null!==(a=this.height)&&void 0!==a?a:this._chartHeight}px`,overflow:this._chartHeight?"initial":"hidden","padding-left":`${(0,c.HE)(this.hass)?0:this.paddingYAxis}px`,"padding-right":`${(0,c.HE)(this.hass)?this.paddingYAxis:0}px`})}"> <canvas></canvas> ${this._tooltip?n.dy`<div class="chartTooltip ${(0,d.$)({[this._tooltip.yAlign]:!0})}" style="${(0,l.V)({top:this._tooltip.top,left:this._tooltip.left})}"> <div class="title">${this._tooltip.title}</div> ${this._tooltip.beforeBody?n.dy`<div class="beforeBody"> ${this._tooltip.beforeBody} </div>`:""} <div> <ul> ${this._tooltip.body.map(((t,e)=>n.dy`<li> <div class="bullet" style="${(0,l.V)({backgroundColor:this._tooltip.labelColors[e].backgroundColor,borderColor:this._tooltip.labelColors[e].borderColor})}"></div> ${t.lines.join("\n")} </li>`))} </ul> </div> ${this._tooltip.footer.length?n.dy`<div class="footer"> ${this._tooltip.footer.map((t=>n.dy`${t}<br>`))} </div>`:""} </div>`:""} </div> `}},{kind:"method",key:"_setupChart",value:async function(){const t=this.renderRoot.querySelector("canvas").getContext("2d"),e=(await Promise.all([i.e(53430),i.e(1671),i.e(51468),i.e(55928)]).then(i.bind(i,55928))).Chart,a=getComputedStyle(this);e.defaults.borderColor=a.getPropertyValue("--divider-color"),e.defaults.color=a.getPropertyValue("--secondary-text-color"),e.defaults.font.family=a.getPropertyValue("--mdc-typography-body1-font-family")||a.getPropertyValue("--mdc-typography-font-family")||"Roboto, Noto, sans-serif",this.chart=new e(t,{type:this.chartType,data:this.data,options:this._createOptions(),plugins:this._createPlugins()})}},{kind:"method",key:"_createOptions",value:function(){var t,e,i,a,s;return{...this.options,plugins:{...null===(t=this.options)||void 0===t?void 0:t.plugins,tooltip:{...null===(e=this.options)||void 0===e||null===(i=e.plugins)||void 0===i?void 0:i.tooltip,enabled:!1,external:t=>this._handleTooltip(t)},legend:{...null===(a=this.options)||void 0===a||null===(s=a.plugins)||void 0===s?void 0:s.legend,display:!1}}}}},{kind:"method",key:"_createPlugins",value:function(){var t,e;return[...this.plugins||[],{id:"afterRenderHook",afterRender:t=>{var e;const i=t.height-(null!==(e=this._chartHeight)&&void 0!==e?e:0);(!this._chartHeight||i>0||i<-12)&&(this._chartHeight=t.height)},legend:{...null===(t=this.options)||void 0===t||null===(e=t.plugins)||void 0===e?void 0:e.legend,display:!1}}]}},{kind:"method",key:"_legendClick",value:function(t){if(!this.chart)return;const e=t.currentTarget.datasetIndex;this.chart.isDatasetVisible(e)?(this.chart.setDatasetVisibility(e,!1),this._hiddenDatasets.add(e)):(this.chart.setDatasetVisibility(e,!0),this._hiddenDatasets.delete(e)),this.chart.update("none"),this.requestUpdate("_hiddenDatasets")}},{kind:"method",key:"_handleTooltip",value:function(t){0!==t.tooltip.opacity?this._tooltip={...t.tooltip,top:this.chart.canvas.offsetTop+t.tooltip.caretY+12+"px",left:this.chart.canvas.offsetLeft+(0,h.u)(t.tooltip.caretX,100,this.clientWidth-100-this.paddingYAxis)-100+"px"}:this._tooltip=void 0}},{kind:"field",key:"updateChart",value(){return t=>{this.chart&&this.chart.update(t)}}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host{display:block;position:var(--chart-base-position,relative)}.chartContainer{overflow:hidden;height:0;transition:height .3s cubic-bezier(.4,0,.2,1)}canvas{max-height:var(--chart-max-height,400px)}.chartLegend{text-align:center}.chartLegend li{cursor:pointer;display:inline-grid;grid-auto-flow:column;padding:0 8px;box-sizing:border-box;align-items:center;color:var(--secondary-text-color)}.chartLegend .hidden{text-decoration:line-through}.chartLegend .label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chartLegend .bullet,.chartTooltip .bullet{border-width:1px;border-style:solid;border-radius:50%;display:inline-block;height:16px;margin-right:6px;width:16px;flex-shrink:0;box-sizing:border-box;margin-inline-end:6px;margin-inline-start:initial;direction:var(--direction)}.chartTooltip .bullet{align-self:baseline}:host([rtl]) .chartLegend .bullet,:host([rtl]) .chartTooltip .bullet{margin-right:inherit;margin-left:6px;margin-inline-end:inherit;margin-inline-start:6px;direction:var(--direction)}.chartTooltip{padding:8px;font-size:90%;position:absolute;background:rgba(80,80,80,.9);color:#fff;border-radius:4px;pointer-events:none;z-index:1000;width:200px;box-sizing:border-box}:host([rtl]) .chartTooltip{direction:rtl}.chartLegend ul,.chartTooltip ul{display:inline-block;padding:0 0px;margin:8px 0 0 0;width:100%}.chartTooltip ul{margin:0 4px}.chartTooltip li{display:flex;white-space:pre-line;align-items:center;line-height:16px;padding:4px 0}.chartTooltip .title{text-align:center;font-weight:500;direction:ltr}.chartTooltip .footer{font-weight:500}.chartTooltip .beforeBody{text-align:center;font-weight:300;word-break:break-all}`}}]}}),n.oi)},71186:(t,e,i)=>{var a=i(17463),s=i(68144),o=i(79932),n=i(55070),r=i(47181),d=i(87744),l=i(18457),h=i(62336);const c=t=>{const e=parseFloat(t);return isFinite(e)?e:null};let u=(0,a.Z)(null,(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"data",value:()=>[]},{kind:"field",decorators:[(0,o.Cb)()],key:"names",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"unit",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"identifier",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"showNames",value:()=>!0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"endTime",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Number})],key:"paddingYAxis",value:()=>0},{kind:"field",decorators:[(0,o.Cb)({type:Number})],key:"chartIndex",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_chartData",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_chartOptions",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_yWidth",value:()=>0},{kind:"field",key:"_chartTime",value:()=>new Date},{kind:"method",key:"render",value:function(){return s.dy` <ha-chart-base .hass="${this.hass}" .data="${this._chartData}" .options="${this._chartOptions}" .paddingYAxis="${this.paddingYAxis-this._yWidth}" chart-type="line"></ha-chart-base> `}},{kind:"method",key:"willUpdate",value:function(t){this.hasUpdated&&!t.has("showNames")||(this._chartOptions={parsing:!1,animation:!1,interaction:{mode:"nearest",axis:"xy"},scales:{x:{type:"time",adapters:{date:{locale:this.hass.locale}},suggestedMax:this.endTime,ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:!0},font:t=>t.tick&&t.tick.major?{weight:"bold"}:{}},time:{tooltipFormat:"datetimeseconds"}},y:{ticks:{maxTicksLimit:7},title:{display:!0,text:this.unit},afterUpdate:t=>{this._yWidth!==Math.floor(t.width)&&(this._yWidth=Math.floor(t.width),(0,r.B)(this,"y-width-changed",{value:this._yWidth,chartIndex:this.chartIndex}))},position:(0,d.HE)(this.hass)?"right":"left"}},plugins:{tooltip:{callbacks:{label:t=>`${t.dataset.label}: ${(0,l.uf)(t.parsed.y,this.hass.locale)} ${this.unit}`}},filler:{propagate:!0},legend:{display:this.showNames,labels:{usePointStyle:!0}}},elements:{line:{tension:.1,borderWidth:1.5},point:{hitRadius:50}},locale:(0,l.Hd)(this.hass.locale)}),(t.has("data")||this._chartTime<new Date(this.endTime.getTime()-h.Q))&&this._generateData()}},{kind:"method",key:"_generateData",value:function(){let t=0;const e=getComputedStyle(this),i=this.data,a=[];if(0===i.length)return;this._chartTime=new Date;const s=this.endTime,o=this.names||{};i.forEach((i=>{const r=i.domain,d=o[i.entity_id]||i.name;let l=null;const h=[],u=(t,e)=>{e&&(t>s||(h.forEach(((i,a)=>{null===e[a]&&l&&null!==l[a]&&i.data.push({x:t.getTime(),y:l[a]}),i.data.push({x:t.getTime(),y:e[a]})})),l=e))},p=(i,a=!1,s)=>{s||(s=(0,n.hZ)(t,e),t++),h.push({label:i,fill:!!a&&"origin",borderColor:s,backgroundColor:s+"7F",stepped:"before",pointRadius:0,data:[]})};if("thermostat"===r||"climate"===r||"water_heater"===r){const t=i.states.some((t=>{var e;return null===(e=t.attributes)||void 0===e?void 0:e.hvac_action})),a="climate"===r&&t?t=>{var e;return"heating"===(null===(e=t.attributes)||void 0===e?void 0:e.hvac_action)}:t=>"heat"===t.state,s="climate"===r&&t?t=>{var e;return"cooling"===(null===(e=t.attributes)||void 0===e?void 0:e.hvac_action)}:t=>"cool"===t.state,o=i.states.some(a),n=i.states.some(s),l=i.states.some((t=>t.attributes&&t.attributes.target_temp_high!==t.attributes.target_temp_low));p(`${this.hass.localize("ui.card.climate.current_temperature",{name:d})}`),o&&p(`${this.hass.localize("ui.card.climate.heating",{name:d})}`,!0,e.getPropertyValue("--state-climate-heat-color")),n&&p(`${this.hass.localize("ui.card.climate.cooling",{name:d})}`,!0,e.getPropertyValue("--state-climate-cool-color")),l?(p(`${this.hass.localize("ui.card.climate.target_temperature_mode",{name:d,mode:this.hass.localize("ui.card.climate.high")})}`),p(`${this.hass.localize("ui.card.climate.target_temperature_mode",{name:d,mode:this.hass.localize("ui.card.climate.low")})}`)):p(`${this.hass.localize("ui.card.climate.target_temperature_entity",{name:d})}`),i.states.forEach((t=>{if(!t.attributes)return;const e=c(t.attributes.current_temperature),i=[e];if(o&&i.push(a(t)?e:null),n&&i.push(s(t)?e:null),l){const e=c(t.attributes.target_temp_high),a=c(t.attributes.target_temp_low);i.push(e,a),u(new Date(t.last_changed),i)}else{const e=c(t.attributes.temperature);i.push(e),u(new Date(t.last_changed),i)}}))}else if("humidifier"===r)p(`${this.hass.localize("ui.card.humidifier.target_humidity_entity",{name:d})}`),p(`${this.hass.localize("ui.card.humidifier.on_entity",{name:d})}`,!0),i.states.forEach((t=>{if(!t.attributes)return;const e=c(t.attributes.humidity),i=[e];i.push("on"===t.state?e:null),u(new Date(t.last_changed),i)}));else{let t,e;p(d);let a=null;i.states.forEach((i=>{const s=c(i.state),o=new Date(i.last_changed);if(null!==s&&a){var n;const i=o.getTime(),r=a.getTime(),d=null===(n=e)||void 0===n?void 0:n.getTime();u(a,[(r-d)/(i-d)*(s-t)+t]),u(new Date(r+1),[null]),u(o,[s]),e=o,t=s,a=null}else null!==s&&null===a?(u(o,[s]),e=o,t=s):null===s&&null===a&&void 0!==t&&(a=o)}))}u(s,l),Array.prototype.push.apply(a,h)})),this._chartData={datasets:a}}}]}}),s.oi);customElements.define("state-history-chart-line",u)},69884:(t,e,i)=>{i.a(t,(async(t,e)=>{try{var a=i(17463),s=i(68144),o=i(79932),n=i(44583),r=i(87367),d=i(47181),l=i(18457),h=i(87744),c=i(62336),u=i(39258),p=t([n]);n=(p.then?(await p)():p)[0];(0,a.Z)([(0,o.Mo)("state-history-chart-timeline")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"data",value:()=>[]},{kind:"field",decorators:[(0,o.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"names",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"unit",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"identifier",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"showNames",value:()=>!0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"chunked",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"startTime",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"endTime",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Number})],key:"paddingYAxis",value:()=>0},{kind:"field",decorators:[(0,o.Cb)({type:Number})],key:"chartIndex",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_chartData",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_chartOptions",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_yWidth",value:()=>0},{kind:"field",key:"_chartTime",value:()=>new Date},{kind:"method",key:"render",value:function(){return s.dy` <ha-chart-base .hass="${this.hass}" .data="${this._chartData}" .options="${this._chartOptions}" .height="${30*this.data.length+30}" .paddingYAxis="${this.paddingYAxis-this._yWidth}" chart-type="timeline"></ha-chart-base> `}},{kind:"method",key:"willUpdate",value:function(t){this.hasUpdated||this._createOptions(),(t.has("startTime")||t.has("endTime")||t.has("data")||this._chartTime<new Date(this.endTime.getTime()-c.Q))&&this._generateData(),(t.has("startTime")||t.has("endTime")||t.has("showNames"))&&this._createOptions()}},{kind:"method",key:"_createOptions",value:function(){const t=this.narrow;this._chartOptions={maintainAspectRatio:!1,parsing:!1,animation:!1,scales:{x:{type:"timeline",position:"bottom",adapters:{date:{locale:this.hass.locale}},suggestedMin:this.startTime,suggestedMax:this.endTime,ticks:{autoSkip:!0,maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:!0},font:t=>t.tick&&t.tick.major?{weight:"bold"}:{}},grid:{offset:!1},time:{tooltipFormat:"datetimeseconds"}},y:{type:"category",barThickness:20,offset:!0,grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{display:this.chunked||this.showNames},afterSetDimensions:t=>{t.maxWidth=.18*t.chart.width},afterFit:e=>{this.chunked&&(e.width=t?105:185)},afterUpdate:t=>{var e,i;const a=this.showNames?null!==(e=t.width)&&void 0!==e?e:0:(0,h.HE)(this.hass)?0:null!==(i=t.left)&&void 0!==i?i:0;this._yWidth!==Math.floor(a)&&t.ticks.length===this.data.length&&(this._yWidth=Math.floor(a),(0,d.B)(this,"y-width-changed",{value:this._yWidth,chartIndex:this.chartIndex}))},position:(0,h.HE)(this.hass)?"right":"left"}},plugins:{tooltip:{mode:"nearest",callbacks:{title:t=>t[0].chart.data.labels[t[0].datasetIndex],beforeBody:t=>t[0].dataset.label||"",label:t=>{const e=t.dataset.data[t.dataIndex],i=e.end.getTime()-e.start.getTime(),a=`${this.hass.localize("ui.components.history_charts.duration")}: ${(0,r.Z)(i)}`;return[e.label||"",(0,n.E8)(e.start,this.hass.locale),(0,n.E8)(e.end,this.hass.locale),a]},labelColor:t=>({borderColor:t.dataset.data[t.dataIndex].color,backgroundColor:t.dataset.data[t.dataIndex].color})}},filler:{propagate:!0}},locale:(0,l.Hd)(this.hass.locale)}}},{kind:"method",key:"_generateData",value:function(){const t=getComputedStyle(this);let e=this.data;e||(e=[]),this._chartTime=new Date;const i=this.startTime,a=this.endTime,s=[],o=[],n=this.names||{};e.forEach((e=>{let r,d=null,l=null,h=i;const c=n[e.entity_id]||e.name,p=[];e.data.forEach((i=>{let s=i.state;s||(s=null),new Date(i.last_changed)>a||(null===d?(d=s,l=i.state_localize,h=new Date(i.last_changed)):s!==d&&(r=new Date(i.last_changed),p.push({start:h,end:r,label:l,color:(0,u.U)(d,t,this.hass.states[e.entity_id])}),d=s,l=i.state_localize,h=r))})),null!==d&&p.push({start:h,end:a,label:l,color:(0,u.U)(d,t,this.hass.states[e.entity_id])}),o.push({data:p,label:e.entity_id}),s.push(c)})),this._chartData={labels:s,datasets:o}}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`ha-chart-base{--chart-max-height:none}`}}]}}),s.oi);e()}catch(t){e(t)}}))},77243:(t,e,i)=>{i.a(t,(async(t,e)=>{try{var a=i(17463),s=i(68144),o=i(79932),n=i(7323),r=i(25516),d=i(46134),l=(i(71186),i(69884)),h=t([l]);l=(h.then?(await h)():h)[0];const c=10,u=(t,e)=>t.reduce(((t,i,a)=>{const s=Math.floor(a/e);return t[s]||(t[s]=[]),t[s].push(i),t}),[]);(0,a.Z)([(0,o.Mo)("state-history-charts")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"historyData",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"names",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,attribute:"virtualize",reflect:!0})],key:"virtualize",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"endTime",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,attribute:"up-to-now"})],key:"upToNow",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"showNames",value:()=>!0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"isLoadingData",value:()=>!1},{kind:"field",decorators:[(0,o.SB)()],key:"_computedStartTime",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_computedEndTime",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_maxYWidth",value:()=>0},{kind:"field",decorators:[(0,o.SB)()],key:"_childYWidths",value:()=>[]},{kind:"field",decorators:[(0,o.SB)()],key:"_chartCount",value:()=>0},{kind:"field",decorators:[(0,r.i)(".container")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"render",value:function(){if(!(0,n.p)(this.hass,"history"))return s.dy`<div class="info"> ${this.hass.localize("ui.components.history_charts.history_disabled")} </div>`;if(this.isLoadingData&&!this.historyData)return s.dy`<div class="info"> ${this.hass.localize("ui.components.history_charts.loading_history")} </div>`;if(this._isHistoryEmpty())return s.dy`<div class="info"> ${this.hass.localize("ui.components.history_charts.no_history_found")} </div>`;const t=new Date;this._computedEndTime=this.upToNow||!this.endTime||this.endTime>t?t:this.endTime,this._computedStartTime=new Date(this.historyData.timeline.reduce(((t,e)=>Math.min(t,new Date(e.data[0].last_changed).getTime())),(new Date).getTime()));const e=this.historyData.timeline.length?(this.virtualize?u(this.historyData.timeline,c):[this.historyData.timeline]).concat(this.historyData.line):this.historyData.line;return this._chartCount=e.length,this.virtualize?s.dy`<div class="container ha-scrollbar" @scroll="${this._saveScrollPos}"> <lit-virtualizer scroller class="ha-scrollbar" .items="${e}" .renderItem="${this._renderHistoryItem}"> </lit-virtualizer> </div>`:s.dy`${e.map(((t,e)=>this._renderHistoryItem(t,e)))}`}},{kind:"field",key:"_renderHistoryItem",value(){return(t,e)=>t&&void 0!==e?Array.isArray(t)?s.dy`<div class="entry-container"> <state-history-chart-timeline .hass="${this.hass}" .data="${t}" .startTime="${this._computedStartTime}" .endTime="${this._computedEndTime}" .showNames="${this.showNames}" .names="${this.names}" .narrow="${this.narrow}" .chunked="${this.virtualize}" .paddingYAxis="${this._maxYWidth}" .chartIndex="${e}" @y-width-changed="${this._yWidthChanged}"></state-history-chart-timeline> </div> `:s.dy`<div class="entry-container"> <state-history-chart-line .hass="${this.hass}" .unit="${t.unit}" .data="${t.data}" .identifier="${t.identifier}" .showNames="${this.showNames}" .endTime="${this._computedEndTime}" .paddingYAxis="${this._maxYWidth}" .names="${this.names}" .chartIndex="${e}" @y-width-changed="${this._yWidthChanged}"></state-history-chart-line> </div> `:s.Ld}},{kind:"method",key:"shouldUpdate",value:function(t){return!(1===t.size&&t.has("hass"))}},{kind:"method",key:"willUpdate",value:function(){this.hasUpdated||(0,d.o)()}},{kind:"method",key:"updated",value:function(t){t.has("_chartCount")&&this._chartCount<this._childYWidths.length&&(this._childYWidths.length=this._chartCount,this._maxYWidth=Math.max(...Object.values(this._childYWidths),0))}},{kind:"method",key:"_yWidthChanged",value:function(t){this._childYWidths[t.detail.chartIndex]=t.detail.value,this._maxYWidth=Math.max(...Object.values(this._childYWidths),0)}},{kind:"method",key:"_isHistoryEmpty",value:function(){const t=!this.historyData||!this.historyData.timeline||!this.historyData.line||0===this.historyData.timeline.length&&0===this.historyData.line.length;return!this.isLoadingData&&t}},{kind:"method",decorators:[(0,o.hO)({passive:!0})],key:"_saveScrollPos",value:function(t){this._savedScrollPos=t.target.scrollTop}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`:host{display:block;min-height:60px}:host([virtualize]){height:100%}.info{text-align:center;line-height:60px;color:var(--secondary-text-color)}.container{max-height:var(--history-max-height)}.entry-container{width:100%}.entry-container:hover{z-index:1}:host([virtualize]) .entry-container{padding-left:1px;padding-right:1px}.container,lit-virtualizer{height:100%;width:100%}lit-virtualizer{contain:size layout!important}state-history-chart-line,state-history-chart-timeline{width:100%}`}}]}}),s.oi);e()}catch(t){e(t)}}))},39258:(t,e,i)=>{i.d(e,{U:()=>p});var a=i(55070),s=i(15838),o=i(89525),n=i(58831),r=i(6229),d=i(56007),l=i(22134);const h={media_player:{paused:.5,idle:1},vacuum:{returning:.5}};let c=0;const u=new Map;function p(t,e,i){return function(t,e,i){var a;if(!i||t===d.nZ)return(0,l.g)("--history-unavailable-color",e);if(t===d.lz)return(0,l.g)("--history-unknown-color",e);const c=(0,r.tD)(i,t);if(!c)return;const u=(0,l.g)(c,e);if(!u)return;const p=(0,n.M)(i.entity_id),y=null===(a=h[p])||void 0===a?void 0:a[t];return y?(0,s.uO)((0,o.C)((0,s.Rw)((0,s.wK)(u)),y)):u}(t,e,i)||function(t,e){if(u.has(t))return u.get(t);const i=(0,a.hZ)(c,e);return c++,u.set(t,i),i}(t,e)}},58763:(t,e,i)=>{i.a(t,(async(t,a)=>{try{i.d(e,{Nu:()=>b,Vk:()=>u,xS:()=>y});var s=i(58831),o=i(29171),n=i(91741),r=t([o]);o=(r.then?(await r)():r)[0];const d=["climate","humidifier","water_heater"],l=["climate","humidifier","input_datetime","thermostat","water_heater","person","device_tracker"],h=["temperature","current_temperature","target_temp_low","target_temp_high","hvac_action","humidity","mode"],c=(t,e)=>!t.states[e]||l.includes((0,s.M)(e)),u=(t,e,i,a,s)=>{const o={type:"history/stream",entity_ids:s,start_time:i.toISOString(),end_time:a.toISOString(),minimal_response:!0,no_attributes:!s.some((e=>c(t,e)))},n=new p(t);return t.connection.subscribeMessage((t=>e(n.processMessage(t))),o)};class p{constructor(t,e){this.hass=void 0,this.hoursToShow=void 0,this.combinedHistory=void 0,this.hass=t,this.hoursToShow=e,this.combinedHistory={}}processMessage(t){if(!this.combinedHistory||!Object.keys(this.combinedHistory).length)return this.combinedHistory=t.states,this.combinedHistory;if(!Object.keys(t.states).length)return this.combinedHistory;const e=this.hoursToShow?((new Date).getTime()-3600*this.hoursToShow*1e3)/1e3:void 0,i={};for(const t of Object.keys(this.combinedHistory))i[t]=[];for(const e of Object.keys(t.states))i[e]=[];for(const a of Object.keys(i)){if(a in this.combinedHistory&&a in t.states){const e=this.combinedHistory[a],s=e[e.length-1];i[a]=e.concat(t.states[a]),t.states[a][0].lu<s.lu&&(i[a]=i[a].sort(((t,e)=>t.lu-e.lu)))}else a in this.combinedHistory?i[a]=this.combinedHistory[a]:i[a]=t.states[a];if(e&&a in this.combinedHistory){const t=i[a].filter((t=>t.lu<e));if(!t.length)continue;if(i[a]=i[a].filter((t=>t.lu>=e)),i[a].length&&i[a][0].lu===e)continue;const s=t[t.length-1];s.lu=e,i[a].unshift(s)}}return this.combinedHistory=i,this.combinedHistory}}const y=(t,e,i,a,s=!0,o=!0,n)=>{const r={type:"history/stream",entity_ids:a,start_time:new Date((new Date).getTime()-3600*i*1e3).toISOString(),minimal_response:s,significant_changes_only:o,no_attributes:null!=n?n:!a.some((e=>c(t,e)))},d=new p(t,i);return t.connection.subscribeMessage((t=>e(d.processMessage(t))),r)},m=(t,e)=>t.state===e.state&&(!t.attributes||!e.attributes||h.every((i=>t.attributes[i]===e.attributes[i]))),v=(t,e,i,a,s,r)=>{const d=[],l=s[0];for(const n of s){if(d.length>0&&n.s===d[d.length-1].state)continue;const s={};null!=r&&r.attributes.device_class&&(s.device_class=null==r?void 0:r.attributes.device_class),d.push({state_localize:(0,o.cG)(t,e,i[a],a,{...n.a||l.a,...s},n.s),state:n.s,last_changed:1e3*(n.lc?n.lc:n.lu)})}return{name:(0,n.a)(a,(null==r?void 0:r.attributes)||l.a),entity_id:a,data:d}},g=(t,e,i)=>{const a=[];return Object.keys(e).forEach((t=>{const o=e[t],r=o[0],l=(0,s.M)(t),c=[];for(const t of o){let e;if(d.includes(l)){e={state:t.s,last_changed:1e3*t.lu,attributes:{}};for(const i of h)i in t.a&&(e.attributes[i]=t.a[i])}else e={state:t.s,last_changed:1e3*(t.lc?t.lc:t.lu),attributes:{}};c.length>1&&m(e,c[c.length-1])&&m(e,c[c.length-2])||c.push(e)}const u=t in i?i[t].attributes:"friendly_name"in r.a?r.a:void 0;a.push({domain:l,name:(0,n.a)(t,u||{}),entity_id:t,states:c})})),{unit:t,identifier:Object.keys(e).join(""),data:a}},f=t=>k(t.attributes),k=t=>"unit_of_measurement"in t||"state_class"in t,b=(t,e,i)=>{const a={},o=[];if(!e)return{line:[],timeline:[]};Object.keys(e).forEach((n=>{const r=e[n];if(0===r.length)return;const d=n in t.states?t.states[n]:void 0,l=!d&&r.find((t=>t.a&&k(t.a)));let h;h=d&&f(d)?d.attributes.unit_of_measurement||" ":l?l.a.unit_of_measurement||" ":{zone:i("ui.dialogs.more_info_control.zone.graph_unit"),climate:t.config.unit_system.temperature,counter:"#",humidifier:"%",input_number:"#",number:"#",water_heater:t.config.unit_system.temperature}[(0,s.M)(n)],h?h in a&&n in a[h]?a[h][n].push(...r):(h in a||(a[h]={}),a[h][n]=r):o.push(v(i,t.locale,t.entities,n,r,d))}));return{line:Object.keys(a).map((e=>g(e,a[e],t.states))),timeline:o}};a()}catch(t){a(t)}}))},46134:(t,e,i)=>{i.d(e,{o:()=>s});var a=i(44281);const s=async()=>{await(0,a.j)(),await Promise.all([i.e(51246),i.e(83998)]).then(i.bind(i,83998))}}}]);
//# sourceMappingURL=25825-7vFK9Pwi6CY.js.map