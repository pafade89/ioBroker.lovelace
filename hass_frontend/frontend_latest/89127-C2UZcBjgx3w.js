export const id=89127;export const ids=[89127];export const modules={53725:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},t.exports=e.default},20508:(t,e,i)=>{var o=i(28847).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,a.default)({},t)};var a=o(i(53725));t.exports=e.default},59699:(t,e,i)=>{i.d(e,{Z:()=>r});var o=i(90394),a=i(39244),s=i(23682),n=36e5;function r(t,e){(0,s.Z)(2,arguments);var i=(0,o.Z)(e);return(0,a.Z)(t,i*n)}},39244:(t,e,i)=>{i.d(e,{Z:()=>n});var o=i(90394),a=i(34327),s=i(23682);function n(t,e){(0,s.Z)(2,arguments);var i=(0,a.Z)(t).getTime(),n=(0,o.Z)(e);return new Date(i+n)}},32182:(t,e,i)=>{i.d(e,{Z:()=>n});var o=i(90394),a=i(34327),s=i(23682);function n(t,e){(0,s.Z)(2,arguments);var i=(0,a.Z)(t),n=(0,o.Z)(e);if(isNaN(n))return new Date(NaN);if(!n)return i;var r=i.getDate(),l=new Date(i.getTime());return l.setMonth(i.getMonth()+n+1,0),r>=l.getDate()?l:(i.setFullYear(l.getFullYear(),l.getMonth(),r),i)}},92195:(t,e,i)=>{i.d(e,{vh:()=>a,yJ:()=>o});Math.pow(10,8);var o=6e4,a=36e5},72277:(t,e,i)=>{i.d(e,{Z:()=>r});var o=i(92195),a=i(99307),s=i(23682),n=i(86102);function r(t,e,i){(0,s.Z)(2,arguments);var r=(0,a.Z)(t,e)/o.vh;return(0,n.u)(null==i?void 0:i.roundingMethod)(r)}},99307:(t,e,i)=>{i.d(e,{Z:()=>s});var o=i(34327),a=i(23682);function s(t,e){return(0,a.Z)(2,arguments),(0,o.Z)(t).getTime()-(0,o.Z)(e).getTime()}},70390:(t,e,i)=>{i.d(e,{Z:()=>a});var o=i(93752);function a(){return(0,o.Z)(Date.now())}},30443:(t,e,i)=>{i.d(e,{Z:()=>s});var o=i(59429),a=i(23682);function s(t,e){(0,a.Z)(2,arguments);var i=(0,o.Z)(t),s=(0,o.Z)(e);return i.getTime()===s.getTime()}},53970:(t,e,i)=>{i.d(e,{Z:()=>s});var o=i(30443),a=i(23682);function s(t){return(0,a.Z)(1,arguments),(0,o.Z)(t,Date.now())}},27088:(t,e,i)=>{i.d(e,{Z:()=>a});var o=i(59429);function a(){return(0,o.Z)(Date.now())}},72043:(t,e,i)=>{i.d(e,{A:()=>n});var o=i(23158),a=i(25101),s=i(66477);const n=(t,e,i,n,r)=>i.time_zone===s.c_.server?((t,e,i,s)=>{const n=i((0,o.Z)(t,e),s);return(0,a.Z)(n,e)})(t,n.time_zone,e,r):e(t,r)},92306:(t,e,i)=>{i.d(e,{v:()=>o});const o=(t,e)=>{const i={};for(const o of t){const t=e(o);t in i?i[t].push(o):i[t]=[o]}return i}},62336:(t,e,i)=>{i.d(e,{Q:()=>u});var o=i(17463),a=i(34541),s=i(47838),n=i(68144),r=i(79932),l=i(83448),d=i(47501),c=i(50239),h=i(87744);const u=3e5;(0,o.Z)([(0,r.Mo)("ha-chart-base")],(function(t,e){class o extends e{constructor(...e){super(...e),t(this)}}return{F:o,d:[{kind:"field",key:"chart",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:"chart-type",reflect:!0})],key:"chartType",value:()=>"line"},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"data",value:()=>({datasets:[]})},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"options",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"plugins",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"height",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"paddingYAxis",value:()=>0},{kind:"field",decorators:[(0,r.SB)()],key:"_chartHeight",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_tooltip",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_hiddenDatasets",value:()=>new Set},{kind:"method",key:"_releaseCanvas",value:function(){this.chart&&this.chart.destroy()}},{kind:"method",key:"disconnectedCallback",value:function(){this._releaseCanvas(),(0,a.Z)((0,s.Z)(o.prototype),"disconnectedCallback",this).call(this)}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)((0,s.Z)(o.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this._setupChart()}},{kind:"method",key:"firstUpdated",value:function(){this._setupChart(),this.data.datasets.forEach(((t,e)=>{t.hidden&&this._hiddenDatasets.add(e)}))}},{kind:"method",key:"willUpdate",value:function(t){if((0,a.Z)((0,s.Z)(o.prototype),"willUpdate",this).call(this,t),this.hasUpdated&&this.chart){if(t.has("plugins"))return this.chart.destroy(),void this._setupChart();t.has("chartType")&&(this.chart.config.type=this.chartType),t.has("data")&&(this._hiddenDatasets.size&&this.data.datasets.forEach(((t,e)=>{t.hidden=this._hiddenDatasets.has(e)})),this.chart.data=this.data),t.has("options")&&(this.chart.options=this._createOptions()),this.chart.update("none")}}},{kind:"method",key:"render",value:function(){var t,e;return n.dy` ${!0===(null===(t=this.options)||void 0===t||null===(t=t.plugins)||void 0===t||null===(t=t.legend)||void 0===t?void 0:t.display)?n.dy`<div class="chartLegend"> <ul> ${this.data.datasets.map(((t,e)=>n.dy`<li .datasetIndex="${e}" @click="${this._legendClick}" class="${(0,l.$)({hidden:this._hiddenDatasets.has(e)})}" .title="${t.label}"> <div class="bullet" style="${(0,d.V)({backgroundColor:t.backgroundColor,borderColor:t.borderColor})}"></div> <div class="label">${t.label}</div> </li>`))} </ul> </div>`:""} <div class="chartContainer" style="${(0,d.V)({height:`${null!==(e=this.height)&&void 0!==e?e:this._chartHeight}px`,overflow:this._chartHeight?"initial":"hidden","padding-left":`${(0,h.HE)(this.hass)?0:this.paddingYAxis}px`,"padding-right":`${(0,h.HE)(this.hass)?this.paddingYAxis:0}px`})}"> <canvas></canvas> ${this._tooltip?n.dy`<div class="chartTooltip ${(0,l.$)({[this._tooltip.yAlign]:!0})}" style="${(0,d.V)({top:this._tooltip.top,left:this._tooltip.left})}"> <div class="title">${this._tooltip.title}</div> ${this._tooltip.beforeBody?n.dy`<div class="beforeBody"> ${this._tooltip.beforeBody} </div>`:""} <div> <ul> ${this._tooltip.body.map(((t,e)=>n.dy`<li> <div class="bullet" style="${(0,d.V)({backgroundColor:this._tooltip.labelColors[e].backgroundColor,borderColor:this._tooltip.labelColors[e].borderColor})}"></div> ${t.lines.join("\n")} </li>`))} </ul> </div> ${this._tooltip.footer.length?n.dy`<div class="footer"> ${this._tooltip.footer.map((t=>n.dy`${t}<br>`))} </div>`:""} </div>`:""} </div> `}},{kind:"method",key:"_setupChart",value:async function(){const t=this.renderRoot.querySelector("canvas").getContext("2d"),e=(await Promise.all([i.e(94740),i.e(88006),i.e(51468),i.e(55928)]).then(i.bind(i,55928))).Chart,o=getComputedStyle(this);e.defaults.borderColor=o.getPropertyValue("--divider-color"),e.defaults.color=o.getPropertyValue("--secondary-text-color"),e.defaults.font.family=o.getPropertyValue("--mdc-typography-body1-font-family")||o.getPropertyValue("--mdc-typography-font-family")||"Roboto, Noto, sans-serif",this.chart=new e(t,{type:this.chartType,data:this.data,options:this._createOptions(),plugins:this._createPlugins()})}},{kind:"method",key:"_createOptions",value:function(){var t,e,i;return{...this.options,plugins:{...null===(t=this.options)||void 0===t?void 0:t.plugins,tooltip:{...null===(e=this.options)||void 0===e||null===(e=e.plugins)||void 0===e?void 0:e.tooltip,enabled:!1,external:t=>this._handleTooltip(t)},legend:{...null===(i=this.options)||void 0===i||null===(i=i.plugins)||void 0===i?void 0:i.legend,display:!1}}}}},{kind:"method",key:"_createPlugins",value:function(){var t;return[...this.plugins||[],{id:"afterRenderHook",afterRender:t=>{var e;const i=t.height-(null!==(e=this._chartHeight)&&void 0!==e?e:0);(!this._chartHeight||i>0||i<-12)&&(this._chartHeight=t.height)},legend:{...null===(t=this.options)||void 0===t||null===(t=t.plugins)||void 0===t?void 0:t.legend,display:!1}}]}},{kind:"method",key:"_legendClick",value:function(t){if(!this.chart)return;const e=t.currentTarget.datasetIndex;this.chart.isDatasetVisible(e)?(this.chart.setDatasetVisibility(e,!1),this._hiddenDatasets.add(e)):(this.chart.setDatasetVisibility(e,!0),this._hiddenDatasets.delete(e)),this.chart.update("none"),this.requestUpdate("_hiddenDatasets")}},{kind:"method",key:"_handleTooltip",value:function(t){0!==t.tooltip.opacity?this._tooltip={...t.tooltip,top:this.chart.canvas.offsetTop+t.tooltip.caretY+12+"px",left:this.chart.canvas.offsetLeft+(0,c.u)(t.tooltip.caretX,100,this.clientWidth-100-this.paddingYAxis)-100+"px"}:this._tooltip=void 0}},{kind:"field",key:"updateChart",value(){return t=>{this.chart&&this.chart.update(t)}}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host{display:block;position:var(--chart-base-position,relative)}.chartContainer{overflow:hidden;height:0;transition:height .3s cubic-bezier(.4,0,.2,1)}canvas{max-height:var(--chart-max-height,400px)}.chartLegend{text-align:center}.chartLegend li{cursor:pointer;display:inline-grid;grid-auto-flow:column;padding:0 8px;box-sizing:border-box;align-items:center;color:var(--secondary-text-color)}.chartLegend .hidden{text-decoration:line-through}.chartLegend .label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chartLegend .bullet,.chartTooltip .bullet{border-width:1px;border-style:solid;border-radius:50%;display:inline-block;height:16px;margin-right:6px;width:16px;flex-shrink:0;box-sizing:border-box;margin-inline-end:6px;margin-inline-start:initial;direction:var(--direction)}.chartTooltip .bullet{align-self:baseline}:host([rtl]) .chartLegend .bullet,:host([rtl]) .chartTooltip .bullet{margin-right:inherit;margin-left:6px;margin-inline-end:inherit;margin-inline-start:6px;direction:var(--direction)}.chartTooltip{padding:8px;font-size:90%;position:absolute;background:rgba(80,80,80,.9);color:#fff;border-radius:4px;pointer-events:none;z-index:1000;width:200px;box-sizing:border-box}:host([rtl]) .chartTooltip{direction:rtl}.chartLegend ul,.chartTooltip ul{display:inline-block;padding:0 0px;margin:8px 0 0 0;width:100%}.chartTooltip ul{margin:0 4px}.chartTooltip li{display:flex;white-space:pre-line;align-items:center;line-height:16px;padding:4px 0}.chartTooltip .title{text-align:center;font-weight:500;direction:ltr}.chartTooltip .footer{font-weight:500}.chartTooltip .beforeBody{text-align:center;font-weight:300;word-break:break-all}`}}]}}),n.oi)},81582:(t,e,i)=>{i.d(e,{DJ:()=>s,LZ:()=>o,Nn:()=>c,Ny:()=>h,Pk:()=>p,Q4:()=>a,RQ:()=>r,SO:()=>l,T0:()=>u,iJ:()=>d,pB:()=>n});const o=32143==i.j?["migration_error","setup_error","setup_retry"]:null,a=32143==i.j?["not_loaded","loaded","setup_error","setup_retry"]:null,s=(t,e,i)=>{const o={type:"config_entries/subscribe"};return i&&i.type&&(o.type_filter=i.type),t.connection.subscribeMessage((t=>e(t)),o)},n=(t,e)=>{const i={};return e&&(e.type&&(i.type_filter=e.type),e.domain&&(i.domain=e.domain)),t.callWS({type:"config_entries/get",...i})},r=(t,e)=>t.callWS({type:"config_entries/get_single",entry_id:e}),l=(t,e,i)=>t.callWS({type:"config_entries/update",entry_id:e,...i}),d=(t,e)=>t.callApi("DELETE",`config/config_entries/entry/${e}`),c=(t,e)=>t.callApi("POST",`config/config_entries/entry/${e}/reload`),h=(t,e)=>t.callWS({type:"config_entries/disable",entry_id:e,disabled_by:"user"}),u=(t,e)=>t.callWS({type:"config_entries/disable",entry_id:e,disabled_by:null}),p=(t,e)=>{const i=[...t],o=t=>{const i=e[t.domain];return"helper"===(null==i?void 0:i.integration_type)?-1:1};return i.sort(((t,e)=>o(e)-o(t)))}},55424:(t,e,i)=>{i.a(t,(async(t,o)=>{try{i.d(e,{Bm:()=>m,Cj:()=>C,G9:()=>U,Jj:()=>M,KU:()=>w,P:()=>Z,UB:()=>E,ZC:()=>D,_Z:()=>$,b:()=>O,gy:()=>S,iK:()=>k,jB:()=>L,o1:()=>b,rl:()=>x,vE:()=>z,xZ:()=>T,yH:()=>H});var a=i(24112),s=i(32182),n=i(79021),r=i(39244),l=i(59429),d=i(93752),c=i(59699),h=i(97330),u=i(72043),p=i(49684),g=i(92306),f=i(81582),y=i(38014),_=t([p]);p=(_.then?(await _)():_)[0];const v=[],m=()=>({stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),b=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_price:null,number_energy_price:null}),k=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),x=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),Z=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),w=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),C=()=>({type:"water",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),T=t=>t.callWS({type:"energy/info"}),S=async t=>(await t.loadBackendTranslation("issues","energy"),t.callWS({type:"energy/validate"})),D=t=>t.callWS({type:"energy/get_prefs"}),$=async(t,e)=>{const i=t.callWS({type:"energy/save_prefs",...e});return B(t),i},P=async(t,e,i,o,a,s="hour")=>t.callWS({type:"energy/fossil_energy_consumption",start_time:e.toISOString(),end_time:null==a?void 0:a.toISOString(),energy_statistic_ids:i,co2_statistic_id:o,period:s}),M=t=>(0,g.v)(t.energy_sources,(t=>t.type)),H=(t,e,i)=>{const o=[];for(const a of t.energy_sources)if(!i||i.includes(a.type))if("solar"!==a.type)if("gas"!==a.type&&"water"!==a.type)if("battery"!==a.type){for(const t of a.flow_from){o.push(t.stat_energy_from),t.stat_cost&&o.push(t.stat_cost);const i=e.cost_sensors[t.stat_energy_from];i&&o.push(i)}for(const t of a.flow_to){o.push(t.stat_energy_to),t.stat_compensation&&o.push(t.stat_compensation);const i=e.cost_sensors[t.stat_energy_to];i&&o.push(i)}}else o.push(a.stat_energy_from),o.push(a.stat_energy_to);else{o.push(a.stat_energy_from),a.stat_cost&&o.push(a.stat_cost);const t=e.cost_sensors[a.stat_energy_from];t&&o.push(t)}else o.push(a.stat_energy_from);return o},A=async(t,e,i,o,l)=>{const[d,c]=await Promise.all([(0,f.pB)(t,{domain:"co2signal"}),T(t)]),h=d.length?d[0]:void 0;let u;if(h)for(const e of Object.values(t.entities)){if("co2signal"!==e.platform)continue;const i=t.states[e.entity_id];if(i&&"%"===i.attributes.unit_of_measurement){u=i.entity_id;break}}const p=[];for(const t of e.energy_sources)if("grid"===t.type)for(const e of t.flow_from)p.push(e.stat_energy_from);const g=H(e,c,["grid","solar","battery","gas"]),_=H(e,c,["water"]),v=[...g,..._],m=(0,a.Z)(o||new Date,i),b=m>35?"month":m>2?"day":"hour",k=t.config.unit_system.length||"",x={energy:"kWh",volume:"km"===k?"m³":"ft³"},Z={volume:"km"===k?"L":"gal"},w=g.length?(0,y.dL)(t,i,o,g,b,x,["change"]):{},C=_.length?(0,y.dL)(t,i,o,_,b,Z,["change"]):{};let S,D,$,M,A,B={},E={};l&&(D=m>27&&m<32?(0,s.Z)(i,-1):(0,n.Z)(i,-1*(m+1)),$=(0,r.Z)(i,-1),g.length&&(B=(0,y.dL)(t,D,$,g,b,x,["change"])),_.length&&(E=(0,y.dL)(t,D,$,_,b,Z,["change"]))),void 0!==u&&(M=P(t,i,p,u,o,m>35?"month":m>2?"day":"hour"),l&&(A=P(t,D,p,u,$,m>35?"month":m>2?"day":"hour")));const L={},W=v.length?(0,y.Py)(t,v):[],[U,z,O,R,j,V,F]=await Promise.all([w,C,B,E,W,M,A]),Y={...U,...z};l&&(S={...O,...R}),v.length&&j.forEach((t=>{L[t.statistic_id]=t}));return{start:i,end:o,startCompare:D,endCompare:$,info:c,prefs:e,stats:Y,statsMetadata:L,statsCompare:S,co2SignalConfigEntry:h,co2SignalEntity:u,fossilEnergyConsumption:V,fossilEnergyConsumptionCompare:F}},B=t=>{v.forEach((e=>{const i=E(t,{key:e});i.clearPrefs(),i._active&&i.refresh()}))},E=(t,e={})=>{let i="_energy";if(e.key){if(!e.key.startsWith("energy_"))throw new Error("Key need to start with energy_");i=`_${e.key}`}if(t.connection[i])return t.connection[i];v.push(e.key);const o=(0,h._)(t.connection,i,(async()=>{if(o.prefs||(o.prefs=await D(t)),o._refreshTimeout&&clearTimeout(o._refreshTimeout),o._active&&(!o.end||o.end>new Date)){const t=new Date;t.getMinutes()>=20&&t.setHours(t.getHours()+1),t.setMinutes(20,0,0),o._refreshTimeout=window.setTimeout((()=>o.refresh()),t.getTime()-Date.now())}return A(t,o.prefs,o.start,o.end,o.compare)})),a=o.subscribe;o.subscribe=t=>{const e=a(t);return o._active++,()=>{o._active--,o._active<1&&(clearTimeout(o._refreshTimeout),o._refreshTimeout=void 0),e()}},o._active=0,o.prefs=e.prefs;const s=new Date,r=(0,p.Zs)(s,t.locale,t.config).split(":")[0];o.start=(0,u.A)("0"===r?(0,n.Z)(s,-1):s,l.Z,t.locale,t.config),o.end=(0,u.A)("0"===r?(0,n.Z)(s,-1):s,d.Z,t.locale,t.config);const g=()=>{o._updatePeriodTimeout=window.setTimeout((()=>{o.start=(0,u.A)(new Date,l.Z,t.locale,t.config),o.end=(0,u.A)(new Date,d.Z,t.locale,t.config),g()}),(0,c.Z)((0,u.A)(s,d.Z,t.locale,t.config),1).getTime()-Date.now())};return g(),o.clearPrefs=()=>{o.prefs=void 0},o.setPeriod=(e,i)=>{var a;o.start=e,o.end=i,o.start.getTime()!==(0,u.A)(new Date,l.Z,t.locale,t.config).getTime()||(null===(a=o.end)||void 0===a?void 0:a.getTime())!==(0,u.A)(new Date,d.Z,t.locale,t.config).getTime()||o._updatePeriodTimeout?o._updatePeriodTimeout&&(clearTimeout(o._updatePeriodTimeout),o._updatePeriodTimeout=void 0):g()},o.setCompare=t=>{o.compare=t},o},L=t=>t.callWS({type:"energy/solar_forecast"}),W=["volume","energy"],U=(t,e={},i)=>{for(const o of t.energy_sources){if("gas"!==o.type)continue;if(i&&i===o.stat_energy_from)continue;const t=e[o.stat_energy_from];if(W.includes(null==t?void 0:t.unit_class))return t.unit_class}},z=(t,e,i={})=>{const o=U(e,i);if(void 0!==o)return"energy"===o?"kWh":"km"===t.config.unit_system.length?"m³":"ft³"},O=t=>"km"===t.config.unit_system.length?"L":"gal";o()}catch(t){o(t)}}))},73826:(t,e,i)=>{i.d(e,{f:()=>r});var o=i(17463),a=i(34541),s=i(47838),n=i(79932);const r=t=>(0,o.Z)(null,(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)((0,s.Z)(i.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,a.Z)((0,s.Z)(i.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const t=this.__unsubs.pop();t instanceof Promise?t.then((t=>t())):t()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(t){if((0,a.Z)((0,s.Z)(i.prototype),"updated",this).call(this,t),t.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const e of t.keys())if(this.hassSubscribeRequiredHostProps.includes(e))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var t;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(t=this.hassSubscribeRequiredHostProps)&&void 0!==t&&t.some((t=>void 0===this[t]))||(this.__unsubs=this.hassSubscribe())}}]}}),t)},89127:(t,e,i)=>{i.a(t,(async(t,o)=>{try{i.r(e),i.d(e,{HuiEnergyWaterGraphCard:()=>w});var a=i(17463),s=i(27088),n=i(70390),r=i(53970),l=i(24112),d=i(72277),c=i(59699),h=i(68144),u=i(79932),p=i(83448),g=i(14516),f=i(15838),y=i(89525),_=i(12198),v=i(49684),m=i(18457),b=(i(62336),i(22098),i(55424)),k=i(38014),x=i(73826),Z=t([_,v,b]);[_,v,b]=Z.then?(await Z)():Z;let w=(0,a.Z)([(0,u.Mo)("hui-energy-water-graph-card")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,u.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,u.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,u.SB)()],key:"_chartData",value:()=>({datasets:[]})},{kind:"field",decorators:[(0,u.SB)()],key:"_start",value:()=>(0,s.Z)()},{kind:"field",decorators:[(0,u.SB)()],key:"_end",value:()=>(0,n.Z)()},{kind:"field",decorators:[(0,u.SB)()],key:"_compareStart",value:void 0},{kind:"field",decorators:[(0,u.SB)()],key:"_compareEnd",value:void 0},{kind:"field",decorators:[(0,u.SB)()],key:"_unit",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){var t;return[(0,b.UB)(this.hass,{key:null===(t=this._config)||void 0===t?void 0:t.collection_key}).subscribe((t=>this._getStatistics(t)))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(t){this._config=t}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?h.dy` <ha-card> ${this._config.title?h.dy`<h1 class="card-header">${this._config.title}</h1>`:""} <div class="content ${(0,p.$)({"has-header":!!this._config.title})}"> <ha-chart-base .hass="${this.hass}" .data="${this._chartData}" .options="${this._createOptions(this._start,this._end,this.hass.locale,this.hass.config,this._unit,this._compareStart,this._compareEnd)}" chart-type="bar"></ha-chart-base> ${this._chartData.datasets.length?"":h.dy`<div class="no-data"> ${(0,r.Z)(this._start)?this.hass.localize("ui.panel.lovelace.cards.energy.no_data"):this.hass.localize("ui.panel.lovelace.cards.energy.no_data_period")} </div>`} </div> </ha-card> `:h.Ld}},{kind:"field",key:"_createOptions",value(){return(0,g.Z)(((t,e,i,o,a,s,n)=>{const r=(0,l.Z)(e,t),h=void 0!==s&&void 0!==n;if(h){const i=(0,d.Z)(e,t),o=(0,d.Z)(n,s);o>i?e=(0,c.Z)(e,o-i):i>o&&(n=(0,c.Z)(n,i-o))}const u={parsing:!1,animation:!1,interaction:{mode:"x"},scales:{x:{type:"time",suggestedMin:t.getTime(),suggestedMax:e.getTime(),adapters:{date:{locale:i,config:o}},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,font:t=>t.tick&&t.tick.major?{weight:"bold"}:{}},time:{tooltipFormat:r>35?"monthyear":r>7?"date":r>2?"weekday":r>0?"datetime":"hour",minUnit:r>35?"month":r>2?"day":"hour"},offset:!0},y:{stacked:!0,type:"linear",title:{display:!0,text:a},ticks:{beginAtZero:!0}}},plugins:{tooltip:{position:"nearest",filter:t=>"0"!==t.formattedValue,itemSort:function(t,e){return e.datasetIndex-t.datasetIndex},callbacks:{title:t=>{if(r>0)return t[0].label;const e=new Date(t[0].parsed.x);return`${h?`${(0,_.mn)(e,i,o)}: `:""}${(0,v.mr)(e,i,o)} – ${(0,v.mr)((0,c.Z)(e,1),i,o)}`},label:t=>`${t.dataset.label}: ${(0,m.uf)(t.parsed.y,i)} ${a}`,footer:t=>{if(t.length<2)return[];let e=0;for(const i of t)e+=i.dataset.data[i.dataIndex].y;return 0===e?[]:[this.hass.localize("ui.panel.lovelace.cards.energy.energy_water_graph.total_consumed",{num:(0,m.uf)(e,i),unit:a})]}}},filler:{propagate:!1},legend:{display:!1,labels:{usePointStyle:!0}}},elements:{bar:{borderWidth:1.5,borderRadius:4},point:{hitRadius:50}},locale:(0,m.Hd)(i)};return h&&(u.scales.xAxisCompare={...u.scales.x,suggestedMin:s.getTime(),suggestedMax:n.getTime(),display:!1}),u}))}},{kind:"method",key:"_getStatistics",value:async function(t){const e=t.prefs.energy_sources.filter((t=>"water"===t.type));this._unit=(0,b.b)(this.hass);const i=[],o=getComputedStyle(this).getPropertyValue("--energy-water-color").trim();i.push(...this._processDataSet(t.stats,t.statsMetadata,e,o)),t.statsCompare&&(i.push({order:0,data:[]}),i.push({order:999,data:[],xAxisID:"xAxisCompare"}),i.push(...this._processDataSet(t.statsCompare,t.statsMetadata,e,o,!0))),this._start=t.start,this._end=t.end||(0,n.Z)(),this._compareStart=t.startCompare,this._compareEnd=t.endCompare,this._chartData={datasets:i}}},{kind:"method",key:"_processDataSet",value:function(t,e,i,o,a=!1){const s=[];return i.forEach(((i,n)=>{const r=n>0?this.hass.themes.darkMode?(0,y.C)((0,f.Rw)((0,f.wK)(o)),n):(0,y.W)((0,f.Rw)((0,f.wK)(o)),n):void 0,l=r?(0,f.CO)((0,f.p3)(r)):o;let d=null;const c=[];if(i.stat_energy_from in t){const e=t[i.stat_energy_from];for(const t of e){if(null===t.change||void 0===t.change)continue;if(d===t.start)continue;const e=new Date(t.start);c.push({x:e.getTime(),y:t.change}),d=t.start}}s.push({label:(0,k.Kd)(this.hass,i.stat_energy_from,e[i.stat_energy_from]),borderColor:a?l+"7F":l,backgroundColor:a?l+"32":l+"7F",data:c,order:1,stack:"water",xAxisID:a?"xAxisCompare":void 0})})),s}},{kind:"get",static:!0,key:"styles",value:function(){return h.iv`ha-card{height:100%}.card-header{padding-bottom:0}.content{padding:16px}.has-header{padding-top:0}.no-data{position:absolute;height:100%;top:0;left:0;right:0;display:flex;justify-content:center;align-items:center;padding:20%;margin-left:32px;box-sizing:border-box}`}}]}}),(0,x.f)(h.oi));o()}catch(t){o(t)}}))},28847:t=>{t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},23158:(t,e,i)=>{i.d(e,{Z:()=>s});var o=i(89273),a=i(36857);function s(t,e,i){var s=(0,a.Z)(t,i),n=(0,o.Z)(e,s,!0),r=new Date(s.getTime()-n),l=new Date(0);return l.setFullYear(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()),l.setHours(r.getUTCHours(),r.getUTCMinutes(),r.getUTCSeconds(),r.getUTCMilliseconds()),l}},25101:(t,e,i)=>{i.d(e,{Z:()=>l});var o=i(20508),a=i(36857),s=i(57944),n=i(89273),r=i(74101);function l(t,e,i){if("string"==typeof t&&!t.match(s.Z)){var l=o(i);return l.timeZone=e,(0,a.Z)(t,l)}var d=(0,a.Z)(t,i),c=(0,r.Z)(d.getFullYear(),d.getMonth(),d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds(),d.getMilliseconds()).getTime(),h=(0,n.Z)(e,new Date(c));return new Date(c+h)}}};
//# sourceMappingURL=89127-C2UZcBjgx3w.js.map