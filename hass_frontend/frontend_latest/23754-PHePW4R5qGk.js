export const id=23754;export const ids=[23754];export const modules={72043:(e,t,s)=>{s.d(t,{A:()=>a});var o=s(23158),i=s(25101),n=s(66477);const a=(e,t,s,a,r)=>s.time_zone===n.c_.server?((e,t,s,n)=>{const a=s((0,o.Z)(e,t),n);return(0,i.Z)(a,t)})(e,a.time_zone,t,r):t(e,r)},92306:(e,t,s)=>{s.d(t,{v:()=>o});const o=(e,t)=>{const s={};for(const o of e){const e=t(o);e in s?s[e].push(o):s[e]=[o]}return s}},81582:(e,t,s)=>{s.d(t,{DJ:()=>n,LZ:()=>o,Nn:()=>h,Ny:()=>d,Pk:()=>_,Q4:()=>i,RQ:()=>r,SO:()=>c,T0:()=>u,iJ:()=>l,pB:()=>a});const o=32143==s.j?["migration_error","setup_error","setup_retry"]:null,i=32143==s.j?["not_loaded","loaded","setup_error","setup_retry"]:null,n=(e,t,s)=>{const o={type:"config_entries/subscribe"};return s&&s.type&&(o.type_filter=s.type),e.connection.subscribeMessage((e=>t(e)),o)},a=(e,t)=>{const s={};return t&&(t.type&&(s.type_filter=t.type),t.domain&&(s.domain=t.domain)),e.callWS({type:"config_entries/get",...s})},r=(e,t)=>e.callWS({type:"config_entries/get_single",entry_id:t}),c=(e,t,s)=>e.callWS({type:"config_entries/update",entry_id:t,...s}),l=(e,t)=>e.callApi("DELETE",`config/config_entries/entry/${t}`),h=(e,t)=>e.callApi("POST",`config/config_entries/entry/${t}/reload`),d=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:"user"}),u=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:null}),_=(e,t)=>{const s=[...e],o=e=>{const s=t[e.domain];return"helper"===(null==s?void 0:s.integration_type)?-1:1};return s.sort(((e,t)=>o(t)-o(e)))}},55424:(e,t,s)=>{s.a(e,(async(e,o)=>{try{s.d(t,{Bm:()=>v,Cj:()=>C,G9:()=>M,Jj:()=>$,KU:()=>D,P:()=>Z,UB:()=>B,ZC:()=>T,_Z:()=>L,b:()=>j,gy:()=>x,iK:()=>k,jB:()=>W,o1:()=>b,rl:()=>w,vE:()=>E,xZ:()=>S,yH:()=>H});var i=s(24112),n=s(32182),a=s(79021),r=s(39244),c=s(59429),l=s(93752),h=s(59699),d=s(97330),u=s(72043),_=s(49684),p=s(92306),y=s(81582),f=s(38014),m=e([_]);_=(m.then?(await m)():m)[0];const g=[],v=()=>({stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),b=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_price:null,number_energy_price:null}),k=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),w=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),Z=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),D=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),C=()=>({type:"water",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),S=e=>e.callWS({type:"energy/info"}),x=async e=>(await e.loadBackendTranslation("issues","energy"),e.callWS({type:"energy/validate"})),T=e=>e.callWS({type:"energy/get_prefs"}),L=async(e,t)=>{const s=e.callWS({type:"energy/save_prefs",...t});return V(e),s},A=async(e,t,s,o,i,n="hour")=>e.callWS({type:"energy/fossil_energy_consumption",start_time:t.toISOString(),end_time:null==i?void 0:i.toISOString(),energy_statistic_ids:s,co2_statistic_id:o,period:n}),$=e=>(0,p.v)(e.energy_sources,(e=>e.type)),H=(e,t,s)=>{const o=[];for(const i of e.energy_sources)if(!s||s.includes(i.type))if("solar"!==i.type)if("gas"!==i.type&&"water"!==i.type)if("battery"!==i.type){for(const e of i.flow_from){o.push(e.stat_energy_from),e.stat_cost&&o.push(e.stat_cost);const s=t.cost_sensors[e.stat_energy_from];s&&o.push(s)}for(const e of i.flow_to){o.push(e.stat_energy_to),e.stat_compensation&&o.push(e.stat_compensation);const s=t.cost_sensors[e.stat_energy_to];s&&o.push(s)}}else o.push(i.stat_energy_from),o.push(i.stat_energy_to);else{o.push(i.stat_energy_from),i.stat_cost&&o.push(i.stat_cost);const e=t.cost_sensors[i.stat_energy_from];e&&o.push(e)}else o.push(i.stat_energy_from);return o},P=async(e,t,s,o,c)=>{const[l,h]=await Promise.all([(0,y.pB)(e,{domain:"co2signal"}),S(e)]),d=l.length?l[0]:void 0;let u;if(d)for(const t of Object.values(e.entities)){if("co2signal"!==t.platform)continue;const s=e.states[t.entity_id];if(s&&"%"===s.attributes.unit_of_measurement){u=s.entity_id;break}}const _=[];for(const e of t.energy_sources)if("grid"===e.type)for(const t of e.flow_from)_.push(t.stat_energy_from);const p=H(t,h,["grid","solar","battery","gas"]),m=H(t,h,["water"]),g=[...p,...m],v=(0,i.Z)(o||new Date,s),b=v>35?"month":v>2?"day":"hour",k=e.config.unit_system.length||"",w={energy:"kWh",volume:"km"===k?"m³":"ft³"},Z={volume:"km"===k?"L":"gal"},D=p.length?(0,f.dL)(e,s,o,p,b,w,["change"]):{},C=m.length?(0,f.dL)(e,s,o,m,b,Z,["change"]):{};let x,T,L,$,P,V={},B={};c&&(T=v>27&&v<32?(0,n.Z)(s,-1):(0,a.Z)(s,-1*(v+1)),L=(0,r.Z)(s,-1),p.length&&(V=(0,f.dL)(e,T,L,p,b,w,["change"])),m.length&&(B=(0,f.dL)(e,T,L,m,b,Z,["change"]))),void 0!==u&&($=A(e,s,_,u,o,v>35?"month":v>2?"day":"hour"),c&&(P=A(e,T,_,u,L,v>35?"month":v>2?"day":"hour")));const W={},z=g.length?(0,f.Py)(e,g):[],[M,E,j,O,K,N,R]=await Promise.all([D,C,V,B,z,$,P]),U={...M,...E};c&&(x={...j,...O}),g.length&&K.forEach((e=>{W[e.statistic_id]=e}));return{start:s,end:o,startCompare:T,endCompare:L,info:h,prefs:t,stats:U,statsMetadata:W,statsCompare:x,co2SignalConfigEntry:d,co2SignalEntity:u,fossilEnergyConsumption:N,fossilEnergyConsumptionCompare:R}},V=e=>{g.forEach((t=>{const s=B(e,{key:t});s.clearPrefs(),s._active&&s.refresh()}))},B=(e,t={})=>{let s="_energy";if(t.key){if(!t.key.startsWith("energy_"))throw new Error("Key need to start with energy_");s=`_${t.key}`}if(e.connection[s])return e.connection[s];g.push(t.key);const o=(0,d._)(e.connection,s,(async()=>{if(o.prefs||(o.prefs=await T(e)),o._refreshTimeout&&clearTimeout(o._refreshTimeout),o._active&&(!o.end||o.end>new Date)){const e=new Date;e.getMinutes()>=20&&e.setHours(e.getHours()+1),e.setMinutes(20,0,0),o._refreshTimeout=window.setTimeout((()=>o.refresh()),e.getTime()-Date.now())}return P(e,o.prefs,o.start,o.end,o.compare)})),i=o.subscribe;o.subscribe=e=>{const t=i(e);return o._active++,()=>{o._active--,o._active<1&&(clearTimeout(o._refreshTimeout),o._refreshTimeout=void 0),t()}},o._active=0,o.prefs=t.prefs;const n=new Date,r=(0,_.Zs)(n,e.locale,e.config).split(":")[0];o.start=(0,u.A)("0"===r?(0,a.Z)(n,-1):n,c.Z,e.locale,e.config),o.end=(0,u.A)("0"===r?(0,a.Z)(n,-1):n,l.Z,e.locale,e.config);const p=()=>{o._updatePeriodTimeout=window.setTimeout((()=>{o.start=(0,u.A)(new Date,c.Z,e.locale,e.config),o.end=(0,u.A)(new Date,l.Z,e.locale,e.config),p()}),(0,h.Z)((0,u.A)(n,l.Z,e.locale,e.config),1).getTime()-Date.now())};return p(),o.clearPrefs=()=>{o.prefs=void 0},o.setPeriod=(t,s)=>{var i;o.start=t,o.end=s,o.start.getTime()!==(0,u.A)(new Date,c.Z,e.locale,e.config).getTime()||(null===(i=o.end)||void 0===i?void 0:i.getTime())!==(0,u.A)(new Date,l.Z,e.locale,e.config).getTime()||o._updatePeriodTimeout?o._updatePeriodTimeout&&(clearTimeout(o._updatePeriodTimeout),o._updatePeriodTimeout=void 0):p()},o.setCompare=e=>{o.compare=e},o},W=e=>e.callWS({type:"energy/solar_forecast"}),z=["volume","energy"],M=(e,t={},s)=>{for(const o of e.energy_sources){if("gas"!==o.type)continue;if(s&&s===o.stat_energy_from)continue;const e=t[o.stat_energy_from];if(z.includes(null==e?void 0:e.unit_class))return e.unit_class}},E=(e,t,s={})=>{const o=M(t,s);if(void 0!==o)return"energy"===o?"kWh":"km"===e.config.unit_system.length?"m³":"ft³"},j=e=>"km"===e.config.unit_system.length?"L":"gal";o()}catch(e){o(e)}}))},73826:(e,t,s)=>{s.d(t,{f:()=>r});var o=s(17463),i=s(34541),n=s(47838),a=s(79932);const r=e=>(0,o.Z)(null,(function(e,t){class s extends t{constructor(...t){super(...t),e(this)}}return{F:s,d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,i.Z)((0,n.Z)(s.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,i.Z)((0,n.Z)(s.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if((0,i.Z)((0,n.Z)(s.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const t of e.keys())if(this.hassSubscribeRequiredHostProps.includes(t))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((e=>void 0===this[e]))||(this.__unsubs=this.hassSubscribe())}}]}}),e)},23754:(e,t,s)=>{s.a(e,(async(e,t)=>{try{var o=s(17463),i=s(34541),n=s(47838),a=(s(14271),s(27088)),r=s(82045),c=s(70390),l=s(59429),h=s(59401),d=s(13250),u=s(69388),_=s(79021),p=s(33651),y=s(32182),f=s(27605),m=s(93752),g=s(59281),v=s(1905),b=s(70451),k=s(24112),w=s(68144),Z=s(79932),D=s(72043),C=s(26410),S=s(12198),x=s(70518),T=s(87744),L=(s(42657),s(10983),s(14471),s(17623),s(55424)),A=s(73826),$=e([C,S,L]);[C,S,L]=$.then?(await $)():$;const H="M19,3H14V5H19V18L14,12V21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,18H5L10,12M10,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H10V23H12V1H10V3Z",P="M19 5H14V3H19C20.1 3 21 3.9 21 5V13.4C20.4 13.2 19.7 13 19 13V5M10 1H12V23H10V21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H10V1M10 12L5 18H10V12M15.7 14L14 12V15.7C14.4 15 15 14.5 15.7 14M21.1 15.5L19 17.6L16.9 15.5L15.5 16.9L17.6 19L15.5 21.1L16.9 22.5L19 20.4L21.1 22.5L22.5 21.1L20.4 19L22.5 16.9L21.1 15.5Z";(0,o.Z)([(0,Z.Mo)("hui-energy-period-selector")],(function(e,t){class s extends t{constructor(...t){super(...t),e(this)}}return{F:s,d:[{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"collectionKey",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,Z.SB)()],key:"_startDate",value:void 0},{kind:"field",decorators:[(0,Z.SB)()],key:"_endDate",value:void 0},{kind:"field",decorators:[(0,Z.SB)()],key:"_period",value:void 0},{kind:"field",decorators:[(0,Z.SB)()],key:"_compare",value:()=>!1},{kind:"method",key:"connectedCallback",value:function(){(0,i.Z)((0,n.Z)(s.prototype),"connectedCallback",this).call(this),!1!==this.narrow&&(0,x.X)(this,"narrow",this.offsetWidth<600)}},{kind:"method",key:"hassSubscribe",value:function(){return[(0,L.UB)(this.hass,{key:this.collectionKey}).subscribe((e=>this._updateDates(e)))]}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._startDate)return w.Ld;const e=[{label:this.hass.localize("ui.panel.lovelace.components.energy_period_selector.day"),value:"day"},{label:this.hass.localize("ui.panel.lovelace.components.energy_period_selector.week"),value:"week"},{label:this.hass.localize("ui.panel.lovelace.components.energy_period_selector.month"),value:"month"},{label:this.hass.localize("ui.panel.lovelace.components.energy_period_selector.year"),value:"year"}];return w.dy` <div class="row"> <div class="label"> ${"day"===this._period?(0,S.p6)(this._startDate,this.hass.locale,this.hass.config):"month"===this._period?(0,S.NC)(this._startDate,this.hass.locale,this.hass.config):"year"===this._period?(0,S.yQ)(this._startDate,this.hass.locale,this.hass.config):`${(0,S.mn)(this._startDate,this.hass.locale,this.hass.config)} – ${(0,S.mn)(this._endDate||new Date,this.hass.locale,this.hass.config)}`} <ha-icon-button-prev .label="${this.hass.localize("ui.panel.lovelace.components.energy_period_selector.previous")}" @click="${this._pickPrevious}"></ha-icon-button-prev> <ha-icon-button-next .label="${this.hass.localize("ui.panel.lovelace.components.energy_period_selector.next")}" @click="${this._pickNext}"></ha-icon-button-next> <mwc-button dense outlined @click="${this._pickToday}"> ${this.hass.localize("ui.panel.lovelace.components.energy_period_selector.today")} </mwc-button> </div> <div class="period"> <ha-button-toggle-group .buttons="${e}" .active="${this._period}" dense @value-changed="${this._handleView}" .dir="${(0,T.Zu)(this.hass)}"></ha-button-toggle-group> ${this.narrow?w.dy`<ha-icon-button class="compare ${this._compare?"active":""}" .path="${this._compare?P:H}" @click="${this._toggleCompare}" dense outlined> ${this.hass.localize("ui.panel.lovelace.components.energy_period_selector.compare")} </ha-icon-button>`:w.dy`<mwc-button class="compare ${this._compare?"active":""}" @click="${this._toggleCompare}" dense outlined> ${this.hass.localize("ui.panel.lovelace.components.energy_period_selector.compare")} </mwc-button>`} </div> </div> `}},{kind:"method",key:"_handleView",value:function(e){this._period=e.detail.value;const t=(0,a.Z)(),s=!this._startDate||(0,r.Z)(t,{start:this._startDate,end:this._endDate||(0,c.Z)()})?t:this._startDate,o=(0,C.Bt)(this.hass.locale);this._setDate("day"===this._period?(0,D.A)(s,l.Z,this.hass.locale,this.hass.config):"week"===this._period?(0,D.A)(s,h.Z,this.hass.locale,this.hass.config,{weekStartsOn:o}):"month"===this._period?(0,D.A)(s,d.Z,this.hass.locale,this.hass.config):(0,D.A)(s,u.Z,this.hass.locale,this.hass.config))}},{kind:"method",key:"_pickToday",value:function(){const e=(0,C.Bt)(this.hass.locale);this._setDate("day"===this._period?(0,D.A)(new Date,l.Z,this.hass.locale,this.hass.config):"week"===this._period?(0,D.A)(new Date,h.Z,this.hass.locale,this.hass.config,{weekStartsOn:e}):"month"===this._period?(0,D.A)(new Date,d.Z,this.hass.locale,this.hass.config):(0,D.A)(new Date,u.Z,this.hass.locale,this.hass.config))}},{kind:"method",key:"_pickPrevious",value:function(){const e="day"===this._period?(0,_.Z)(this._startDate,-1):"week"===this._period?(0,p.Z)(this._startDate,-1):"month"===this._period?(0,y.Z)(this._startDate,-1):(0,f.Z)(this._startDate,-1);this._setDate(e)}},{kind:"method",key:"_pickNext",value:function(){const e="day"===this._period?(0,_.Z)(this._startDate,1):"week"===this._period?(0,p.Z)(this._startDate,1):"month"===this._period?(0,y.Z)(this._startDate,1):(0,f.Z)(this._startDate,1);this._setDate(e)}},{kind:"method",key:"_setDate",value:function(e){const t=(0,C.Bt)(this.hass.locale),s="day"===this._period?(0,D.A)(e,m.Z,this.hass.locale,this.hass.config):"week"===this._period?(0,D.A)(e,g.Z,this.hass.locale,this.hass.config,{weekStartsOn:t}):"month"===this._period?(0,D.A)(e,v.Z,this.hass.locale,this.hass.config):(0,D.A)(e,b.Z,this.hass.locale,this.hass.config),o=(0,L.UB)(this.hass,{key:this.collectionKey});o.setPeriod(e,s),o.refresh()}},{kind:"method",key:"_updateDates",value:function(e){this._compare=void 0!==e.startCompare,this._startDate=e.start,this._endDate=e.end||(0,c.Z)();const t=(0,k.Z)(this._endDate,this._startDate);this._period=t<1?"day":6===t?"week":t>26&&t<31?"month":364===t||365===t?"year":void 0}},{kind:"method",key:"_toggleCompare",value:function(){this._compare=!this._compare;const e=(0,L.UB)(this.hass,{key:this.collectionKey});e.setCompare(this._compare),e.refresh()}},{kind:"get",static:!0,key:"styles",value:function(){return w.iv`.row{display:flex;justify-content:flex-end}:host([narrow]) .row{flex-direction:column-reverse}.label{display:flex;justify-content:flex-end;align-items:center;font-size:20px}.period{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center}:host([narrow]) .period{margin-bottom:8px}mwc-button{margin-left:8px}ha-icon-button{margin-left:4px;--mdc-icon-size:20px}ha-icon-button.active::before,mwc-button.active::before{top:0;left:0;width:100%;height:100%;position:absolute;background-color:currentColor;opacity:0;pointer-events:none;content:"";transition:opacity 15ms linear,background-color 15ms linear;opacity:var(--mdc-icon-button-ripple-opacity,.12)}ha-icon-button.active::before{border-radius:50%}.compare{position:relative}:host{--mdc-button-outline-color:currentColor;--primary-color:currentColor;--mdc-theme-primary:currentColor;--mdc-theme-on-primary:currentColor;--mdc-button-disabled-outline-color:var(--disabled-text-color);--mdc-button-disabled-ink-color:var(--disabled-text-color);--mdc-icon-button-ripple-opacity:0.2}ha-icon-button{--mdc-icon-button-size:28px}ha-button-toggle-group{padding-left:8px;padding-inline-start:8px;direction:var(--direction)}mwc-button{flex-shrink:0}`}}]}}),(0,A.f)(w.oi));t()}catch(e){t(e)}}))}};
//# sourceMappingURL=23754-PHePW4R5qGk.js.map