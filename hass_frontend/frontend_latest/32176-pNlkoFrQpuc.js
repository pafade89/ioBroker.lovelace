export const id=32176;export const ids=[32176];export const modules={72043:(e,t,s)=>{s.d(t,{A:()=>a});var i=s(23158),n=s(25101),o=s(66477);const a=(e,t,s,a,r)=>s.time_zone===o.c_.server?((e,t,s,o)=>{const a=s((0,i.Z)(e,t),o);return(0,n.Z)(a,t)})(e,a.time_zone,t,r):t(e,r)},92306:(e,t,s)=>{s.d(t,{v:()=>i});const i=(e,t)=>{const s={};for(const i of e){const e=t(i);e in s?s[e].push(i):s[e]=[i]}return s}},49915:(e,t,s)=>{var i=s(17463),n=s(34541),o=s(47838),a=s(68144),r=s(79932),l=s(47501),c=s(18457),d=s(68307),u=s(96151),h=s(88027);const _=(e,t,s)=>180*(0,h.Ff)((0,h.Fv)(e,t,s),t,s)/100;(0,i.Z)([(0,r.Mo)("ha-gauge")],(function(e,t){class s extends t{constructor(...t){super(...t),e(this)}}return{F:s,d:[{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"min",value:()=>0},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"max",value:()=>100},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"value",value:()=>0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"formatOptions",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:String})],key:"valueText",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"locale",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"needle",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"levels",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"label",value:()=>""},{kind:"field",decorators:[(0,r.SB)()],key:"_angle",value:()=>0},{kind:"field",decorators:[(0,r.SB)()],key:"_updated",value:()=>!1},{kind:"field",decorators:[(0,r.SB)()],key:"_segment_label",value:()=>""},{kind:"method",key:"firstUpdated",value:function(e){(0,n.Z)((0,o.Z)(s.prototype),"firstUpdated",this).call(this,e),(0,u.T)((()=>{this._updated=!0,this._angle=_(this.value,this.min,this.max),this._segment_label=this.getSegmentLabel(),this._rescale_svg()}))}},{kind:"method",key:"updated",value:function(e){(0,n.Z)((0,o.Z)(s.prototype),"updated",this).call(this,e),this._updated&&(e.has("value")||e.has("label")||e.has("_segment_label"))&&(this._angle=_(this.value,this.min,this.max),this._segment_label=this.getSegmentLabel(),this._rescale_svg())}},{kind:"method",key:"render",value:function(){return a.YP` <svg viewBox="-50 -50 100 50" class="gauge"> ${this.needle&&this.levels?"":a.YP`<path class="dial" d="M -40 0 A 40 40 0 0 1 40 0"></path>`} ${this.levels?this.levels.sort(((e,t)=>e.level-t.level)).map(((e,t)=>{let s;if(0===t&&e.level!==this.min){const e=_(this.min,this.min,this.max);s=a.YP`<path stroke="var(--info-color)" class="level" d="M
                          ${0-40*Math.cos(e*Math.PI/180)}
                          ${0-40*Math.sin(e*Math.PI/180)}
                         A 40 40 0 0 1 40 0
                        "></path>`}const i=_(e.level,this.min,this.max);return a.YP`${s}<path stroke="${e.stroke}" class="level" d="M
                        ${0-40*Math.cos(i*Math.PI/180)}
                        ${0-40*Math.sin(i*Math.PI/180)}
                       A 40 40 0 0 1 40 0
                      "></path>`})):""} ${this.needle?a.YP`<path class="needle" d="M -25 -2.5 L -47.5 0 L -25 2.5 z" style="${(0,l.V)({transform:`rotate(${this._angle}deg)`})}"> </path>`:a.YP`<path class="value" d="M -40 0 A 40 40 0 1 0 40 0" style="${(0,l.V)({transform:`rotate(${this._angle}deg)`})}"></path>`}  </svg> <svg class="text"> <text class="value-text"> ${this._segment_label?this._segment_label:this.valueText||(0,c.uf)(this.value,this.locale,this.formatOptions)}${this._segment_label?"":"%"===this.label?(0,d.K)(this.locale)+"%":` ${this.label}`} </text> </svg>`}},{kind:"method",key:"_rescale_svg",value:function(){const e=this.shadowRoot.querySelector(".text"),t=e.querySelector("text").getBBox();e.setAttribute("viewBox",`${t.x} ${t.y} ${t.width} ${t.height}`)}},{kind:"method",key:"getSegmentLabel",value:function(){if(this.levels){this.levels.sort(((e,t)=>e.level-t.level));for(let e=this.levels.length-1;e>=0;e--)if(this.value>=this.levels[e].level)return this.levels[e].label}return""}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{position:relative}.dial{fill:none;stroke:var(--primary-background-color);stroke-width:15}.value{fill:none;stroke-width:15;stroke:var(--gauge-color);transition:all 1s ease 0s}.needle{fill:var(--primary-text-color);transition:all 1s ease 0s}.level{fill:none;stroke-width:15}.gauge{display:block}.text{position:absolute;max-height:40%;max-width:55%;left:50%;bottom:-6%;transform:translate(-50%,0%)}.value-text{font-size:50px;fill:var(--primary-text-color);text-anchor:middle;direction:ltr}`}}]}}),a.oi)},81582:(e,t,s)=>{s.d(t,{DJ:()=>o,LZ:()=>i,Nn:()=>d,Ny:()=>u,Pk:()=>_,Q4:()=>n,RQ:()=>r,SO:()=>l,T0:()=>h,iJ:()=>c,pB:()=>a});const i=32143==s.j?["migration_error","setup_error","setup_retry"]:null,n=32143==s.j?["not_loaded","loaded","setup_error","setup_retry"]:null,o=(e,t,s)=>{const i={type:"config_entries/subscribe"};return s&&s.type&&(i.type_filter=s.type),e.connection.subscribeMessage((e=>t(e)),i)},a=(e,t)=>{const s={};return t&&(t.type&&(s.type_filter=t.type),t.domain&&(s.domain=t.domain)),e.callWS({type:"config_entries/get",...s})},r=(e,t)=>e.callWS({type:"config_entries/get_single",entry_id:t}),l=(e,t,s)=>e.callWS({type:"config_entries/update",entry_id:t,...s}),c=(e,t)=>e.callApi("DELETE",`config/config_entries/entry/${t}`),d=(e,t)=>e.callApi("POST",`config/config_entries/entry/${t}/reload`),u=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:"user"}),h=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:null}),_=(e,t)=>{const s=[...e],i=e=>{const s=t[e.domain];return"helper"===(null==s?void 0:s.integration_type)?-1:1};return s.sort(((e,t)=>i(t)-i(e)))}},55424:(e,t,s)=>{s.a(e,(async(e,i)=>{try{s.d(t,{Bm:()=>v,Cj:()=>Z,G9:()=>E,Jj:()=>A,KU:()=>S,P:()=>w,UB:()=>z,ZC:()=>T,_Z:()=>C,b:()=>q,gy:()=>P,iK:()=>b,jB:()=>D,o1:()=>k,rl:()=>x,vE:()=>N,xZ:()=>$,yH:()=>B});var n=s(24112),o=s(32182),a=s(79021),r=s(39244),l=s(59429),c=s(93752),d=s(59699),u=s(97330),h=s(72043),_=s(49684),g=s(92306),y=s(81582),f=s(38014),p=e([_]);_=(p.then?(await p)():p)[0];const m=[],v=()=>({stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),k=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_price:null,number_energy_price:null}),b=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),x=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),w=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),S=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),Z=()=>({type:"water",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),$=e=>e.callWS({type:"energy/info"}),P=async e=>(await e.loadBackendTranslation("issues","energy"),e.callWS({type:"energy/validate"})),T=e=>e.callWS({type:"energy/get_prefs"}),C=async(e,t)=>{const s=e.callWS({type:"energy/save_prefs",...t});return W(e),s},M=async(e,t,s,i,n,o="hour")=>e.callWS({type:"energy/fossil_energy_consumption",start_time:t.toISOString(),end_time:null==n?void 0:n.toISOString(),energy_statistic_ids:s,co2_statistic_id:i,period:o}),A=e=>(0,g.v)(e.energy_sources,(e=>e.type)),B=(e,t,s)=>{const i=[];for(const n of e.energy_sources)if(!s||s.includes(n.type))if("solar"!==n.type)if("gas"!==n.type&&"water"!==n.type)if("battery"!==n.type){for(const e of n.flow_from){i.push(e.stat_energy_from),e.stat_cost&&i.push(e.stat_cost);const s=t.cost_sensors[e.stat_energy_from];s&&i.push(s)}for(const e of n.flow_to){i.push(e.stat_energy_to),e.stat_compensation&&i.push(e.stat_compensation);const s=t.cost_sensors[e.stat_energy_to];s&&i.push(s)}}else i.push(n.stat_energy_from),i.push(n.stat_energy_to);else{i.push(n.stat_energy_from),n.stat_cost&&i.push(n.stat_cost);const e=t.cost_sensors[n.stat_energy_from];e&&i.push(e)}else i.push(n.stat_energy_from);return i},L=async(e,t,s,i,l)=>{const[c,d]=await Promise.all([(0,y.pB)(e,{domain:"co2signal"}),$(e)]),u=c.length?c[0]:void 0;let h;if(u)for(const t of Object.values(e.entities)){if("co2signal"!==t.platform)continue;const s=e.states[t.entity_id];if(s&&"%"===s.attributes.unit_of_measurement){h=s.entity_id;break}}const _=[];for(const e of t.energy_sources)if("grid"===e.type)for(const t of e.flow_from)_.push(t.stat_energy_from);const g=B(t,d,["grid","solar","battery","gas"]),p=B(t,d,["water"]),m=[...g,...p],v=(0,n.Z)(i||new Date,s),k=v>35?"month":v>2?"day":"hour",b=e.config.unit_system.length||"",x={energy:"kWh",volume:"km"===b?"m³":"ft³"},w={volume:"km"===b?"L":"gal"},S=g.length?(0,f.dL)(e,s,i,g,k,x,["change"]):{},Z=p.length?(0,f.dL)(e,s,i,p,k,w,["change"]):{};let P,T,C,A,L,W={},z={};l&&(T=v>27&&v<32?(0,o.Z)(s,-1):(0,a.Z)(s,-1*(v+1)),C=(0,r.Z)(s,-1),g.length&&(W=(0,f.dL)(e,T,C,g,k,x,["change"])),p.length&&(z=(0,f.dL)(e,T,C,p,k,w,["change"]))),void 0!==h&&(A=M(e,s,_,h,i,v>35?"month":v>2?"day":"hour"),l&&(L=M(e,T,_,h,C,v>35?"month":v>2?"day":"hour")));const D={},H=m.length?(0,f.Py)(e,m):[],[E,N,q,j,F,I,O]=await Promise.all([S,Z,W,z,H,A,L]),R={...E,...N};l&&(P={...q,...j}),m.length&&F.forEach((e=>{D[e.statistic_id]=e}));return{start:s,end:i,startCompare:T,endCompare:C,info:d,prefs:t,stats:R,statsMetadata:D,statsCompare:P,co2SignalConfigEntry:u,co2SignalEntity:h,fossilEnergyConsumption:I,fossilEnergyConsumptionCompare:O}},W=e=>{m.forEach((t=>{const s=z(e,{key:t});s.clearPrefs(),s._active&&s.refresh()}))},z=(e,t={})=>{let s="_energy";if(t.key){if(!t.key.startsWith("energy_"))throw new Error("Key need to start with energy_");s=`_${t.key}`}if(e.connection[s])return e.connection[s];m.push(t.key);const i=(0,u._)(e.connection,s,(async()=>{if(i.prefs||(i.prefs=await T(e)),i._refreshTimeout&&clearTimeout(i._refreshTimeout),i._active&&(!i.end||i.end>new Date)){const e=new Date;e.getMinutes()>=20&&e.setHours(e.getHours()+1),e.setMinutes(20,0,0),i._refreshTimeout=window.setTimeout((()=>i.refresh()),e.getTime()-Date.now())}return L(e,i.prefs,i.start,i.end,i.compare)})),n=i.subscribe;i.subscribe=e=>{const t=n(e);return i._active++,()=>{i._active--,i._active<1&&(clearTimeout(i._refreshTimeout),i._refreshTimeout=void 0),t()}},i._active=0,i.prefs=t.prefs;const o=new Date,r=(0,_.Zs)(o,e.locale,e.config).split(":")[0];i.start=(0,h.A)("0"===r?(0,a.Z)(o,-1):o,l.Z,e.locale,e.config),i.end=(0,h.A)("0"===r?(0,a.Z)(o,-1):o,c.Z,e.locale,e.config);const g=()=>{i._updatePeriodTimeout=window.setTimeout((()=>{i.start=(0,h.A)(new Date,l.Z,e.locale,e.config),i.end=(0,h.A)(new Date,c.Z,e.locale,e.config),g()}),(0,d.Z)((0,h.A)(o,c.Z,e.locale,e.config),1).getTime()-Date.now())};return g(),i.clearPrefs=()=>{i.prefs=void 0},i.setPeriod=(t,s)=>{var n;i.start=t,i.end=s,i.start.getTime()!==(0,h.A)(new Date,l.Z,e.locale,e.config).getTime()||(null===(n=i.end)||void 0===n?void 0:n.getTime())!==(0,h.A)(new Date,c.Z,e.locale,e.config).getTime()||i._updatePeriodTimeout?i._updatePeriodTimeout&&(clearTimeout(i._updatePeriodTimeout),i._updatePeriodTimeout=void 0):g()},i.setCompare=e=>{i.compare=e},i},D=e=>e.callWS({type:"energy/solar_forecast"}),H=["volume","energy"],E=(e,t={},s)=>{for(const i of e.energy_sources){if("gas"!==i.type)continue;if(s&&s===i.stat_energy_from)continue;const e=t[i.stat_energy_from];if(H.includes(null==e?void 0:e.unit_class))return e.unit_class}},N=(e,t,s={})=>{const i=E(t,s);if(void 0!==i)return"energy"===i?"kWh":"km"===e.config.unit_system.length?"m³":"ft³"},q=e=>"km"===e.config.unit_system.length?"L":"gal";i()}catch(e){i(e)}}))},73826:(e,t,s)=>{s.d(t,{f:()=>r});var i=s(17463),n=s(34541),o=s(47838),a=s(79932);const r=e=>(0,i.Z)(null,(function(e,t){class s extends t{constructor(...t){super(...t),e(this)}}return{F:s,d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,n.Z)((0,o.Z)(s.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,n.Z)((0,o.Z)(s.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if((0,n.Z)((0,o.Z)(s.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const t of e.keys())if(this.hassSubscribeRequiredHostProps.includes(t))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((e=>void 0===this[e]))||(this.__unsubs=this.hassSubscribe())}}]}}),e)},32176:(e,t,s)=>{s.a(e,(async(e,i)=>{try{s.r(t);var n=s(17463),o=(s(33829),s(68144)),a=s(79932),r=s(18457),l=(s(22098),s(49915),s(52039),s(55424)),c=s(38014),d=s(73826),u=e([l]);l=(u.then?(await u)():u)[0];const h="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",_=[{level:-1,stroke:"var(--energy-grid-consumption-color)"},{level:0,stroke:"var(--energy-grid-return-color)"}];(0,n.Z)([(0,a.Mo)("hui-energy-grid-neutrality-gauge-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_data",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){var e;return[(0,l.UB)(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((e=>{this._data=e}))]}},{kind:"method",key:"getCardSize",value:function(){return 4}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return o.Ld;if(!this._data)return o.dy`${this.hass.localize("ui.panel.lovelace.cards.energy.loading")}`;const e=this._data.prefs.energy_sources.find((e=>"grid"===e.type));let t;if(!e)return o.Ld;const s=(0,c.q6)(this._data.stats,e.flow_from.map((e=>e.stat_energy_from))),i=(0,c.q6)(this._data.stats,e.flow_to.map((e=>e.stat_energy_to)));return null!==s&&null!==i&&(t=i>s?1-s/i:i<s?-1*(1-i/s):0),o.dy` <ha-card> ${void 0!==t?o.dy` <ha-svg-icon id="info" .path="${h}"></ha-svg-icon> <simple-tooltip animation-delay="0" for="info" position="left"> <span> ${this.hass.localize("ui.panel.lovelace.cards.energy.grid_neutrality_gauge.energy_dependency")} <br><br> ${this.hass.localize("ui.panel.lovelace.cards.energy.grid_neutrality_gauge.color_explain")} </span> </simple-tooltip> <ha-gauge min="-1" max="1" .value="${t}" .valueText="${(0,r.uf)(Math.abs(i-s),this.hass.locale,{maximumFractionDigits:2})}" .locale="${this.hass.locale}" .levels="${_}" label="kWh" needle></ha-gauge> <div class="name"> ${i>=s?this.hass.localize("ui.panel.lovelace.cards.energy.grid_neutrality_gauge.net_returned_grid"):this.hass.localize("ui.panel.lovelace.cards.energy.grid_neutrality_gauge.net_consumed_grid")} </div> `:this.hass.localize("ui.panel.lovelace.cards.energy.grid_neutrality_gauge.grid_neutrality_not_calculated")} </ha-card> `}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`ha-card{height:100%;overflow:hidden;padding:16px;display:flex;align-items:center;justify-content:center;flex-direction:column;box-sizing:border-box}ha-gauge{width:100%;max-width:250px;direction:ltr}.name{text-align:center;line-height:initial;color:var(--primary-text-color);width:100%;font-size:15px;margin-top:8px}ha-svg-icon{position:absolute;right:4px;top:4px;color:var(--secondary-text-color)}simple-tooltip>span{font-size:12px;line-height:12px}simple-tooltip{width:80%;max-width:250px;top:8px!important}`}}]}}),(0,d.f)(o.oi));i()}catch(e){i(e)}}))},88027:(e,t,s)=>{s.d(t,{Ff:()=>n,Fv:()=>i,IU:()=>o});const i=(e,t,s)=>isNaN(e)||isNaN(t)||isNaN(s)?0:e>s?s:e<t?t:e,n=(e,t,s)=>100*(e-t)/(s-t),o=e=>Math.round(10*e)/10}};
//# sourceMappingURL=32176-pNlkoFrQpuc.js.map