"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[85930,43283],{92306:(e,t,i)=>{i.d(t,{v:()=>s});const s=(e,t)=>{const i={};for(const s of e){const e=t(s);e in i?i[e].push(s):i[e]=[s]}return i}},49915:(e,t,i)=>{var s=i(17463),n=i(34541),o=i(47838),a=i(68144),r=i(79932),l=i(47501),c=i(18457),u=i(68307),d=i(96151),h=i(88027);const _=(e,t,i)=>180*(0,h.Ff)((0,h.Fv)(e,t,i),t,i)/100;(0,s.Z)([(0,r.Mo)("ha-gauge")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"min",value:()=>0},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"max",value:()=>100},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"value",value:()=>0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"formatOptions",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:String})],key:"valueText",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"locale",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"needle",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"levels",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"label",value:()=>""},{kind:"field",decorators:[(0,r.SB)()],key:"_angle",value:()=>0},{kind:"field",decorators:[(0,r.SB)()],key:"_updated",value:()=>!1},{kind:"field",decorators:[(0,r.SB)()],key:"_segment_label",value:()=>""},{kind:"method",key:"firstUpdated",value:function(e){(0,n.Z)((0,o.Z)(i.prototype),"firstUpdated",this).call(this,e),(0,d.T)((()=>{this._updated=!0,this._angle=_(this.value,this.min,this.max),this._segment_label=this.getSegmentLabel(),this._rescale_svg()}))}},{kind:"method",key:"updated",value:function(e){(0,n.Z)((0,o.Z)(i.prototype),"updated",this).call(this,e),this._updated&&(e.has("value")||e.has("label")||e.has("_segment_label"))&&(this._angle=_(this.value,this.min,this.max),this._segment_label=this.getSegmentLabel(),this._rescale_svg())}},{kind:"method",key:"render",value:function(){return a.YP` <svg viewBox="-50 -50 100 50" class="gauge"> ${this.needle&&this.levels?"":a.YP`<path class="dial" d="M -40 0 A 40 40 0 0 1 40 0"></path>`} ${this.levels?this.levels.sort(((e,t)=>e.level-t.level)).map(((e,t)=>{let i;if(0===t&&e.level!==this.min){const e=_(this.min,this.min,this.max);i=a.YP`<path stroke="var(--info-color)" class="level" d="M
                          ${0-40*Math.cos(e*Math.PI/180)}
                          ${0-40*Math.sin(e*Math.PI/180)}
                         A 40 40 0 0 1 40 0
                        "></path>`}const s=_(e.level,this.min,this.max);return a.YP`${i}<path stroke="${e.stroke}" class="level" d="M
                        ${0-40*Math.cos(s*Math.PI/180)}
                        ${0-40*Math.sin(s*Math.PI/180)}
                       A 40 40 0 0 1 40 0
                      "></path>`})):""} ${this.needle?a.YP`<path class="needle" d="M -25 -2.5 L -47.5 0 L -25 2.5 z" style="${(0,l.V)({transform:`rotate(${this._angle}deg)`})}"> </path>`:a.YP`<path class="value" d="M -40 0 A 40 40 0 1 0 40 0" style="${(0,l.V)({transform:`rotate(${this._angle}deg)`})}"></path>`}  </svg> <svg class="text"> <text class="value-text"> ${this._segment_label?this._segment_label:this.valueText||(0,c.uf)(this.value,this.locale,this.formatOptions)}${this._segment_label?"":"%"===this.label?(0,u.K)(this.locale)+"%":` ${this.label}`} </text> </svg>`}},{kind:"method",key:"_rescale_svg",value:function(){const e=this.shadowRoot.querySelector(".text"),t=e.querySelector("text").getBBox();e.setAttribute("viewBox",`${t.x} ${t.y} ${t.width} ${t.height}`)}},{kind:"method",key:"getSegmentLabel",value:function(){if(this.levels){this.levels.sort(((e,t)=>e.level-t.level));for(let e=this.levels.length-1;e>=0;e--)if(this.value>=this.levels[e].level)return this.levels[e].label}return""}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{position:relative}.dial{fill:none;stroke:var(--primary-background-color);stroke-width:15}.value{fill:none;stroke-width:15;stroke:var(--gauge-color);transition:all 1s ease 0s}.needle{fill:var(--primary-text-color);transition:all 1s ease 0s}.level{fill:none;stroke-width:15}.gauge{display:block}.text{position:absolute;max-height:40%;max-width:55%;left:50%;bottom:-6%;transform:translate(-50%,0%)}.value-text{font-size:50px;fill:var(--primary-text-color);text-anchor:middle;direction:ltr}`}}]}}),a.oi)},81582:(e,t,i)=>{i.d(t,{DJ:()=>o,LZ:()=>s,Nn:()=>u,Ny:()=>d,Q4:()=>n,RQ:()=>r,SO:()=>l,T0:()=>h,iJ:()=>c,pB:()=>a});const s=32143==i.j?["migration_error","setup_error","setup_retry"]:null,n=32143==i.j?["not_loaded","loaded","setup_error","setup_retry"]:null,o=(e,t,i)=>{const s={type:"config_entries/subscribe"};return i&&i.type&&(s.type_filter=i.type),e.connection.subscribeMessage((e=>t(e)),s)},a=(e,t)=>{const i={};return t&&(t.type&&(i.type_filter=t.type),t.domain&&(i.domain=t.domain)),e.callWS({type:"config_entries/get",...i})},r=(e,t)=>e.callWS({type:"config_entries/get_single",entry_id:t}),l=(e,t,i)=>e.callWS({type:"config_entries/update",entry_id:t,...i}),c=(e,t)=>e.callApi("DELETE",`config/config_entries/entry/${t}`),u=(e,t)=>e.callApi("POST",`config/config_entries/entry/${t}/reload`),d=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:"user"}),h=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:null})},55424:(e,t,i)=>{i.d(t,{Bm:()=>m,Cj:()=>w,G9:()=>z,Jj:()=>T,KU:()=>x,P:()=>b,UB:()=>N,ZC:()=>C,_Z:()=>Z,b:()=>H,gy:()=>$,iK:()=>v,jB:()=>B,o1:()=>p,rl:()=>k,vE:()=>A,xZ:()=>S,yH:()=>P});var s=i(24112),n=i(32182),o=i(79021),a=i(39244),r=i(27088),l=i(83008),c=i(70390),u=i(61334),d=i(59699),h=i(97330),_=i(92306),g=i(81582),f=i(38014);const y=[],m=()=>({stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),p=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_price:null,number_energy_price:null}),v=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),k=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),b=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),x=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),w=()=>({type:"water",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),S=e=>e.callWS({type:"energy/info"}),$=async e=>(await e.loadBackendTranslation("issues","energy"),e.callWS({type:"energy/validate"})),C=e=>e.callWS({type:"energy/get_prefs"}),Z=async(e,t)=>{const i=e.callWS({type:"energy/save_prefs",...t});return L(e),i},M=async(e,t,i,s,n,o="hour")=>e.callWS({type:"energy/fossil_energy_consumption",start_time:t.toISOString(),end_time:null==n?void 0:n.toISOString(),energy_statistic_ids:i,co2_statistic_id:s,period:o}),T=e=>(0,_.v)(e.energy_sources,(e=>e.type)),P=(e,t,i)=>{const s=[];for(const n of e.energy_sources)if(!i||i.includes(n.type))if("solar"!==n.type)if("gas"!==n.type&&"water"!==n.type)if("battery"!==n.type){for(const e of n.flow_from){s.push(e.stat_energy_from),e.stat_cost&&s.push(e.stat_cost);const i=t.cost_sensors[e.stat_energy_from];i&&s.push(i)}for(const e of n.flow_to){s.push(e.stat_energy_to),e.stat_compensation&&s.push(e.stat_compensation);const i=t.cost_sensors[e.stat_energy_to];i&&s.push(i)}}else s.push(n.stat_energy_from),s.push(n.stat_energy_to);else{s.push(n.stat_energy_from),n.stat_cost&&s.push(n.stat_cost);const e=t.cost_sensors[n.stat_energy_from];e&&s.push(e)}else s.push(n.stat_energy_from);return s},L=e=>{y.forEach((t=>{const i=N(e,{key:t});i.clearPrefs(),i._active&&i.refresh()}))},N=(e,t={})=>{let i="_energy";if(t.key){if(!t.key.startsWith("energy_"))throw new Error("Key need to start with energy_");i=`_${t.key}`}if(e.connection[i])return e.connection[i];y.push(t.key);const _=(0,h._)(e.connection,i,(async()=>{if(_.prefs||(_.prefs=await C(e)),_._refreshTimeout&&clearTimeout(_._refreshTimeout),_._active&&(!_.end||_.end>new Date)){const e=new Date;e.getMinutes()>=20&&e.setHours(e.getHours()+1),e.setMinutes(20,0,0),_._refreshTimeout=window.setTimeout((()=>_.refresh()),e.getTime()-Date.now())}return(async(e,t,i,r,l)=>{const[c,u]=await Promise.all([(0,g.pB)(e,{domain:"co2signal"}),S(e)]),d=c.length?c[0]:void 0;let h;if(d)for(const t of Object.values(e.entities)){if("co2signal"!==t.platform)continue;const i=e.states[t.entity_id];if(i&&"%"===i.attributes.unit_of_measurement){h=i.entity_id;break}}const _=[];for(const e of t.energy_sources)if("grid"===e.type)for(const t of e.flow_from)_.push(t.stat_energy_from);const y=P(t,u,["grid","solar","battery","gas"]),m=P(t,u,["water"]),p=[...y,...m],v=(0,s.Z)(r||new Date,i),k=v>35?"month":v>2?"day":"hour",b=e.config.unit_system.length||"",x={energy:"kWh",volume:"km"===b?"m³":"ft³"},w={volume:"km"===b?"L":"gal"},$=y.length?(0,f.dL)(e,i,r,y,k,x,["change"]):{},C=m.length?(0,f.dL)(e,i,r,m,k,w,["change"]):{};let Z,T,L,N,B,E={},z={};l&&(T=v>27&&v<32?(0,n.Z)(i,-1):(0,o.Z)(i,-1*(v+1)),L=(0,a.Z)(i,-1),y.length&&(E=(0,f.dL)(e,T,L,y,k,x,["change"])),m.length&&(z=(0,f.dL)(e,T,L,m,k,w,["change"]))),void 0!==h&&(N=M(e,i,_,h,r,v>35?"month":v>2?"day":"hour"),l&&(B=M(e,T,_,h,L,v>35?"month":v>2?"day":"hour")));const A={},H=p.length?(0,f.Py)(e,p):[],[W,j,D,F,I,O,q]=await Promise.all([$,C,E,z,H,N,B]),U={...W,...j};return l&&(Z={...D,...F}),p.length&&I.forEach((e=>{A[e.statistic_id]=e})),{start:i,end:r,startCompare:T,endCompare:L,info:u,prefs:t,stats:U,statsMetadata:A,statsCompare:Z,co2SignalConfigEntry:d,co2SignalEntity:h,fossilEnergyConsumption:O,fossilEnergyConsumptionCompare:q}})(e,_.prefs,_.start,_.end,_.compare)})),m=_.subscribe;_.subscribe=e=>{const t=m(e);return _._active++,()=>{_._active--,_._active<1&&(clearTimeout(_._refreshTimeout),_._refreshTimeout=void 0),t()}},_._active=0,_.prefs=t.prefs;const p=new Date;_.start=p.getHours()>0?(0,r.Z)():(0,l.Z)(),_.end=p.getHours()>0?(0,c.Z)():(0,u.Z)();const v=()=>{_._updatePeriodTimeout=window.setTimeout((()=>{_.start=(0,r.Z)(),_.end=(0,c.Z)(),v()}),(0,d.Z)((0,c.Z)(),1).getTime()-Date.now())};return v(),_.clearPrefs=()=>{_.prefs=void 0},_.setPeriod=(e,t)=>{var i;_.start=e,_.end=t,_.start.getTime()!==(0,r.Z)().getTime()||(null===(i=_.end)||void 0===i?void 0:i.getTime())!==(0,c.Z)().getTime()||_._updatePeriodTimeout?_._updatePeriodTimeout&&(clearTimeout(_._updatePeriodTimeout),_._updatePeriodTimeout=void 0):v()},_.setCompare=e=>{_.compare=e},_},B=e=>e.callWS({type:"energy/solar_forecast"}),E=["volume","energy"],z=(e,t={},i)=>{for(const s of e.energy_sources){if("gas"!==s.type)continue;if(i&&i===s.stat_energy_from)continue;const e=t[s.stat_energy_from];if(E.includes(null==e?void 0:e.unit_class))return e.unit_class}},A=(e,t,i={})=>{const s=z(t,i);if(void 0!==s)return"energy"===s?"kWh":"km"===e.config.unit_system.length?"m³":"ft³"},H=e=>"km"===e.config.unit_system.length?"L":"gal"},73826:(e,t,i)=>{i.d(t,{f:()=>r});var s=i(17463),n=i(34541),o=i(47838),a=i(79932);const r=e=>(0,s.Z)(null,(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,n.Z)((0,o.Z)(i.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,n.Z)((0,o.Z)(i.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if((0,n.Z)((0,o.Z)(i.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const t of e.keys())if(this.hassSubscribeRequiredHostProps.includes(t))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((e=>void 0===this[e]))||(this.__unsubs=this.hassSubscribe())}}]}}),e)},85930:(e,t,i)=>{i.r(t);var s=i(17463),n=(i(33829),i(68144)),o=i(79932),a=i(47501),r=(i(22098),i(49915),i(52039),i(55424)),l=i(38014),c=i(73826),u=i(43283);(0,s.Z)([(0,o.Mo)("hui-energy-solar-consumed-gauge-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_data",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){var e;return[(0,r.UB)(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((e=>{this._data=e}))]}},{kind:"method",key:"getCardSize",value:function(){return 4}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return n.Ld;if(!this._data)return n.dy`${this.hass.localize("ui.panel.lovelace.cards.energy.loading")}`;const e=this._data.prefs,t=(0,r.Jj)(e);if(!t.solar)return n.Ld;const i=(0,l.q6)(this._data.stats,t.solar.map((e=>e.stat_energy_from))),s=(0,l.q6)(this._data.stats,t.grid[0].flow_to.map((e=>e.stat_energy_to)));let o;if(null!==s&&i){o=Math.max(0,i-s)/i*100}return n.dy` <ha-card> ${void 0!==o?n.dy` <ha-svg-icon id="info" .path="${"M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}"></ha-svg-icon> <simple-tooltip animation-delay="0" for="info" position="left"> <span> ${this.hass.localize("ui.panel.lovelace.cards.energy.solar_consumed_gauge.card_indicates_solar_energy_used")} <br><br> ${this.hass.localize("ui.panel.lovelace.cards.energy.solar_consumed_gauge.card_indicates_solar_energy_used_charge_home_bat")} </span> </simple-tooltip> <ha-gauge min="0" max="100" .value="${o}" .locale="${this.hass.locale}" label="%" style="${(0,a.V)({"--gauge-color":this._computeSeverity(o)})}"></ha-gauge> <div class="name"> ${this.hass.localize("ui.panel.lovelace.cards.energy.solar_consumed_gauge.self_consumed_solar_energy")} </div> `:0===i?this.hass.localize("ui.panel.lovelace.cards.energy.solar_consumed_gauge.not_produced_solar_energy"):this.hass.localize("ui.panel.lovelace.cards.energy.solar_consumed_gauge.self_consumed_solar_could_not_calc")} </ha-card> `}},{kind:"method",key:"_computeSeverity",value:function(e){return e>75?u.severityMap.green:e<50?u.severityMap.yellow:u.severityMap.normal}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`ha-card{height:100%;overflow:hidden;padding:16px;display:flex;align-items:center;justify-content:center;flex-direction:column;box-sizing:border-box}ha-gauge{width:100%;max-width:250px;direction:ltr}.name{text-align:center;line-height:initial;color:var(--primary-text-color);width:100%;font-size:15px;margin-top:8px}ha-svg-icon{position:absolute;right:4px;top:4px;color:var(--secondary-text-color)}simple-tooltip>span{font-size:12px;line-height:12px}simple-tooltip{width:80%;max-width:250px;top:8px!important}`}}]}}),(0,c.f)(n.oi))},43283:(e,t,i)=>{i.r(t),i.d(t,{DEFAULT_MAX:()=>v,DEFAULT_MIN:()=>p,severityMap:()=>k});var s=i(17463),n=i(34541),o=i(47838),a=i(68144),r=i(79932),l=i(47501),c=i(62877),u=i(47181),d=i(91741),h=i(84627),_=i(18457),g=(i(22098),i(49915),i(56007)),f=i(15688),y=i(53658),m=i(75502);const p=0,v=100,k={red:"var(--error-color)",green:"var(--success-color)",yellow:"var(--warning-color)",normal:"var(--info-color)"};(0,s.Z)([(0,r.Mo)("hui-gauge-card")],(function(e,t){class s extends t{constructor(...t){super(...t),e(this)}}return{F:s,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await i.e(97345).then(i.bind(i,97345)),document.createElement("hui-gauge-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,i){return{type:"gauge",entity:(0,f.j)(e,1,t,i,["counter","input_number","number","sensor"],(e=>!isNaN(Number(e.state))))[0]||""}}},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 4}},{kind:"method",key:"setConfig",value:function(e){if(!e.entity)throw new Error("Entity must be specified");if(!(0,h.T)(e.entity))throw new Error("Invalid entity");this._config={min:p,max:v,...e}}},{kind:"method",key:"render",value:function(){var e,t;if(!this._config||!this.hass)return a.Ld;const i=this.hass.states[this._config.entity];if(!i)return a.dy` <hui-warning> ${(0,m.i)(this.hass,this._config.entity)} </hui-warning> `;const s=Number(i.state);if(i.state===g.nZ)return a.dy` <hui-warning>${this.hass.localize("ui.panel.lovelace.warning.entity_unavailable","entity",this._config.entity)}</hui-warning> `;if(isNaN(s))return a.dy` <hui-warning>${this.hass.localize("ui.panel.lovelace.warning.entity_non_numeric","entity",this._config.entity)}</hui-warning> `;const n=null!==(e=this._config.name)&&void 0!==e?e:(0,d.C)(i);return a.dy` <ha-card @click="${this._handleClick}" tabindex="0"> <ha-gauge .min="${this._config.min}" .max="${this._config.max}" .value="${i.state}" .formatOptions="${(0,_.l4)(i,this.hass.entities[i.entity_id])}" .locale="${this.hass.locale}" .label="${this._config.unit||(null===(t=this.hass)||void 0===t?void 0:t.states[this._config.entity].attributes.unit_of_measurement)||""}" style="${(0,l.V)({"--gauge-color":this._computeSeverity(s)})}" .needle="${this._config.needle}" .levels="${this._config.needle?this._severityLevels():void 0}"></ha-gauge> <div class="name" .title="${n}">${n}</div> </ha-card> `}},{kind:"method",key:"shouldUpdate",value:function(e){return(0,y.G2)(this,e)}},{kind:"method",key:"updated",value:function(e){if((0,n.Z)((0,o.Z)(s.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;const t=e.get("hass"),i=e.get("_config");t&&i&&t.themes===this.hass.themes&&i.theme===this._config.theme||(0,c.R)(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"_computeSeverity",value:function(e){if(this._config.needle)return;let t=this._config.segments;if(t){t=[...t].sort(((e,t)=>e.from-t.from));for(let s=0;s<t.length;s++){var i;const n=t[s];if(n&&e>=n.from&&(s+1===t.length||e<(null===(i=t[s+1])||void 0===i?void 0:i.from)))return n.color}return k.normal}const s=this._config.severity;if(!s)return k.normal;const n=Object.keys(s).map((e=>[e,s[e]]));for(const e of n)if(null==k[e[0]]||isNaN(e[1]))return k.normal;return n.sort(((e,t)=>e[1]-t[1])),e>=n[0][1]&&e<n[1][1]?k[n[0][0]]:e>=n[1][1]&&e<n[2][1]?k[n[1][0]]:e>=n[2][1]?k[n[2][0]]:k.normal}},{kind:"method",key:"_severityLevels",value:function(){const e=this._config.segments;if(e)return e.map((e=>({level:null==e?void 0:e.from,stroke:null==e?void 0:e.color,label:null==e?void 0:e.label})));const t=this._config.severity;if(!t)return[{level:0,stroke:k.normal}];return Object.keys(t).map((e=>({level:t[e],stroke:k[e]})))}},{kind:"method",key:"_handleClick",value:function(){(0,u.B)(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`ha-card{cursor:pointer;height:100%;overflow:hidden;padding:16px;display:flex;align-items:center;justify-content:center;flex-direction:column;box-sizing:border-box}ha-card:focus{outline:0}ha-gauge{width:100%;max-width:250px}.name{text-align:center;line-height:initial;color:var(--primary-text-color);width:100%;font-size:15px;margin-top:8px}`}}]}}),a.oi)},88027:(e,t,i)=>{i.d(t,{Ff:()=>n,Fv:()=>s,IU:()=>o});const s=(e,t,i)=>isNaN(e)||isNaN(t)||isNaN(i)?0:e>i?i:e<t?t:e,n=(e,t,i)=>100*(e-t)/(i-t),o=e=>Math.round(10*e)/10}}]);
//# sourceMappingURL=85930-SUU6EkzXMcg.js.map