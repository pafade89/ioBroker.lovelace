"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[61046],{79021:(e,t,s)=>{s.d(t,{Z:()=>i});var n=s(90394),r=s(34327),o=s(23682);function i(e,t){(0,o.Z)(2,arguments);var s=(0,r.Z)(e),i=(0,n.Z)(t);return isNaN(i)?new Date(NaN):i?(s.setDate(s.getDate()+i),s):s}},59699:(e,t,s)=>{s.d(t,{Z:()=>a});var n=s(90394),r=s(39244),o=s(23682),i=36e5;function a(e,t){(0,o.Z)(2,arguments);var s=(0,n.Z)(t);return(0,r.Z)(e,s*i)}},39244:(e,t,s)=>{s.d(t,{Z:()=>i});var n=s(90394),r=s(34327),o=s(23682);function i(e,t){(0,o.Z)(2,arguments);var s=(0,r.Z)(e).getTime(),i=(0,n.Z)(t);return new Date(s+i)}},32182:(e,t,s)=>{s.d(t,{Z:()=>i});var n=s(90394),r=s(34327),o=s(23682);function i(e,t){(0,o.Z)(2,arguments);var s=(0,r.Z)(e),i=(0,n.Z)(t);if(isNaN(i))return new Date(NaN);if(!i)return s;var a=s.getDate(),c=new Date(s.getTime());return c.setMonth(s.getMonth()+i+1,0),a>=c.getDate()?c:(s.setFullYear(c.getFullYear(),c.getMonth(),a),s)}},93752:(e,t,s)=>{s.d(t,{Z:()=>o});var n=s(34327),r=s(23682);function o(e){(0,r.Z)(1,arguments);var t=(0,n.Z)(e);return t.setHours(23,59,59,999),t}},70390:(e,t,s)=>{s.d(t,{Z:()=>r});var n=s(93752);function r(){return(0,n.Z)(Date.now())}},61334:(e,t,s)=>{function n(){var e=new Date,t=e.getFullYear(),s=e.getMonth(),n=e.getDate(),r=new Date(0);return r.setFullYear(t,s,n-1),r.setHours(23,59,59,999),r}s.d(t,{Z:()=>n})},27088:(e,t,s)=>{s.d(t,{Z:()=>r});var n=s(59429);function r(){return(0,n.Z)(Date.now())}},83008:(e,t,s)=>{function n(){var e=new Date,t=e.getFullYear(),s=e.getMonth(),n=e.getDate(),r=new Date(0);return r.setFullYear(t,s,n-1),r.setHours(0,0,0,0),r}s.d(t,{Z:()=>n})},92306:(e,t,s)=>{s.d(t,{v:()=>n});const n=(e,t)=>{const s={};for(const n of e){const e=t(n);e in s?s[e].push(n):s[e]=[n]}return s}},81582:(e,t,s)=>{s.d(t,{DJ:()=>o,LZ:()=>n,Nn:()=>l,Ny:()=>d,Q4:()=>r,RQ:()=>a,SO:()=>c,T0:()=>_,iJ:()=>u,pB:()=>i});const n=32143==s.j?["migration_error","setup_error","setup_retry"]:null,r=32143==s.j?["not_loaded","loaded","setup_error","setup_retry"]:null,o=(e,t,s)=>{const n={type:"config_entries/subscribe"};return s&&s.type&&(n.type_filter=s.type),e.connection.subscribeMessage((e=>t(e)),n)},i=(e,t)=>{const s={};return t&&(t.type&&(s.type_filter=t.type),t.domain&&(s.domain=t.domain)),e.callWS({type:"config_entries/get",...s})},a=(e,t)=>e.callWS({type:"config_entries/get_single",entry_id:t}),c=(e,t,s)=>e.callWS({type:"config_entries/update",entry_id:t,...s}),u=(e,t)=>e.callApi("DELETE",`config/config_entries/entry/${t}`),l=(e,t)=>e.callApi("POST",`config/config_entries/entry/${t}/reload`),d=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:"user"}),_=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:null})},55424:(e,t,s)=>{s.d(t,{Bm:()=>g,Cj:()=>w,G9:()=>N,Jj:()=>B,KU:()=>Z,P:()=>b,UB:()=>E,ZC:()=>T,_Z:()=>D,b:()=>F,gy:()=>S,iK:()=>v,jB:()=>$,o1:()=>m,rl:()=>k,vE:()=>L,xZ:()=>C,yH:()=>H});var n=s(24112),r=s(32182),o=s(79021),i=s(39244),a=s(27088),c=s(83008),u=s(70390),l=s(61334),d=s(59699),_=s(97330),y=s(92306),f=s(81582),h=s(38014);const p=[],g=()=>({stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),m=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_price:null,number_energy_price:null}),v=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),k=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),b=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),Z=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),w=()=>({type:"water",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),C=e=>e.callWS({type:"energy/info"}),S=async e=>(await e.loadBackendTranslation("issues","energy"),e.callWS({type:"energy/validate"})),T=e=>e.callWS({type:"energy/get_prefs"}),D=async(e,t)=>{const s=e.callWS({type:"energy/save_prefs",...t});return W(e),s},P=async(e,t,s,n,r,o="hour")=>e.callWS({type:"energy/fossil_energy_consumption",start_time:t.toISOString(),end_time:null==r?void 0:r.toISOString(),energy_statistic_ids:s,co2_statistic_id:n,period:o}),B=e=>(0,y.v)(e.energy_sources,(e=>e.type)),H=(e,t,s)=>{const n=[];for(const r of e.energy_sources)if(!s||s.includes(r.type))if("solar"!==r.type)if("gas"!==r.type&&"water"!==r.type)if("battery"!==r.type){for(const e of r.flow_from){n.push(e.stat_energy_from),e.stat_cost&&n.push(e.stat_cost);const s=t.cost_sensors[e.stat_energy_from];s&&n.push(s)}for(const e of r.flow_to){n.push(e.stat_energy_to),e.stat_compensation&&n.push(e.stat_compensation);const s=t.cost_sensors[e.stat_energy_to];s&&n.push(s)}}else n.push(r.stat_energy_from),n.push(r.stat_energy_to);else{n.push(r.stat_energy_from),r.stat_cost&&n.push(r.stat_cost);const e=t.cost_sensors[r.stat_energy_from];e&&n.push(e)}else n.push(r.stat_energy_from);return n},W=e=>{p.forEach((t=>{const s=E(e,{key:t});s.clearPrefs(),s._active&&s.refresh()}))},E=(e,t={})=>{let s="_energy";if(t.key){if(!t.key.startsWith("energy_"))throw new Error("Key need to start with energy_");s=`_${t.key}`}if(e.connection[s])return e.connection[s];p.push(t.key);const y=(0,_._)(e.connection,s,(async()=>{if(y.prefs||(y.prefs=await T(e)),y._refreshTimeout&&clearTimeout(y._refreshTimeout),y._active&&(!y.end||y.end>new Date)){const e=new Date;e.getMinutes()>=20&&e.setHours(e.getHours()+1),e.setMinutes(20,0,0),y._refreshTimeout=window.setTimeout((()=>y.refresh()),e.getTime()-Date.now())}return(async(e,t,s,a,c)=>{const[u,l]=await Promise.all([(0,f.pB)(e,{domain:"co2signal"}),C(e)]),d=u.length?u[0]:void 0;let _;if(d)for(const t of Object.values(e.entities)){if("co2signal"!==t.platform)continue;const s=e.states[t.entity_id];if(s&&"%"===s.attributes.unit_of_measurement){_=s.entity_id;break}}const y=[];for(const e of t.energy_sources)if("grid"===e.type)for(const t of e.flow_from)y.push(t.stat_energy_from);const p=H(t,l,["grid","solar","battery","gas"]),g=H(t,l,["water"]),m=[...p,...g],v=(0,n.Z)(a||new Date,s),k=v>35?"month":v>2?"day":"hour",b=e.config.unit_system.length||"",Z={energy:"kWh",volume:"km"===b?"m³":"ft³"},w={volume:"km"===b?"L":"gal"},S=p.length?(0,h.dL)(e,s,a,p,k,Z,["change"]):{},T=g.length?(0,h.dL)(e,s,a,g,k,w,["change"]):{};let D,B,W,E,$,M={},N={};c&&(B=v>27&&v<32?(0,r.Z)(s,-1):(0,o.Z)(s,-1*(v+1)),W=(0,i.Z)(s,-1),p.length&&(M=(0,h.dL)(e,B,W,p,k,Z,["change"])),g.length&&(N=(0,h.dL)(e,B,W,g,k,w,["change"]))),void 0!==_&&(E=P(e,s,y,_,a,v>35?"month":v>2?"day":"hour"),c&&($=P(e,B,y,_,W,v>35?"month":v>2?"day":"hour")));const L={},F=m.length?(0,h.Py)(e,m):[],[j,R,Y,q,O,x,U]=await Promise.all([S,T,M,N,F,E,$]),J={...j,...R};return c&&(D={...Y,...q}),m.length&&O.forEach((e=>{L[e.statistic_id]=e})),{start:s,end:a,startCompare:B,endCompare:W,info:l,prefs:t,stats:J,statsMetadata:L,statsCompare:D,co2SignalConfigEntry:d,co2SignalEntity:_,fossilEnergyConsumption:x,fossilEnergyConsumptionCompare:U}})(e,y.prefs,y.start,y.end,y.compare)})),g=y.subscribe;y.subscribe=e=>{const t=g(e);return y._active++,()=>{y._active--,y._active<1&&(clearTimeout(y._refreshTimeout),y._refreshTimeout=void 0),t()}},y._active=0,y.prefs=t.prefs;const m=new Date;y.start=m.getHours()>0?(0,a.Z)():(0,c.Z)(),y.end=m.getHours()>0?(0,u.Z)():(0,l.Z)();const v=()=>{y._updatePeriodTimeout=window.setTimeout((()=>{y.start=(0,a.Z)(),y.end=(0,u.Z)(),v()}),(0,d.Z)((0,u.Z)(),1).getTime()-Date.now())};return v(),y.clearPrefs=()=>{y.prefs=void 0},y.setPeriod=(e,t)=>{var s;y.start=e,y.end=t,y.start.getTime()!==(0,a.Z)().getTime()||(null===(s=y.end)||void 0===s?void 0:s.getTime())!==(0,u.Z)().getTime()||y._updatePeriodTimeout?y._updatePeriodTimeout&&(clearTimeout(y._updatePeriodTimeout),y._updatePeriodTimeout=void 0):v()},y.setCompare=e=>{y.compare=e},y},$=e=>e.callWS({type:"energy/solar_forecast"}),M=["volume","energy"],N=(e,t={},s)=>{for(const n of e.energy_sources){if("gas"!==n.type)continue;if(s&&s===n.stat_energy_from)continue;const e=t[n.stat_energy_from];if(M.includes(null==e?void 0:e.unit_class))return e.unit_class}},L=(e,t,s={})=>{const n=N(t,s);if(void 0!==n)return"energy"===n?"kWh":"km"===e.config.unit_system.length?"m³":"ft³"},F=e=>"km"===e.config.unit_system.length?"L":"gal"},73826:(e,t,s)=>{s.d(t,{f:()=>a});var n=s(17463),r=s(34541),o=s(47838),i=s(79932);const a=e=>(0,n.Z)(null,(function(e,t){class s extends t{constructor(...t){super(...t),e(this)}}return{F:s,d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,r.Z)((0,o.Z)(s.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,r.Z)((0,o.Z)(s.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if((0,r.Z)((0,o.Z)(s.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const t of e.keys())if(this.hassSubscribeRequiredHostProps.includes(t))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((e=>void 0===this[e]))||(this.__unsubs=this.hassSubscribe())}}]}}),e)},61046:(e,t,s)=>{s.a(e,(async(e,n)=>{try{s.r(t),s.d(t,{HuiEnergyCompareCard:()=>y});var r=s(17463),o=s(24112),i=s(93752),a=s(68144),c=s(79932),u=s(12198),l=s(55424),d=s(73826),_=e([u]);u=(_.then?(await _)():_)[0];let y=(0,r.Z)([(0,c.Mo)("hui-energy-compare-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_start",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_end",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_startCompare",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_endCompare",value:void 0},{kind:"field",decorators:[(0,c.Cb)({type:Boolean,reflect:!0})],key:"hidden",value:()=>!0},{kind:"method",key:"getCardSize",value:function(){return 1}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){return[(0,l.UB)(this.hass,{key:this._config.collection_key}).subscribe((e=>this._update(e)))]}},{kind:"method",key:"render",value:function(){if(!this._startCompare||!this._endCompare)return a.Ld;const e=(0,o.Z)(this._endCompare,this._startCompare);return a.dy` <ha-alert dismissable @alert-dismissed-clicked="${this._stopCompare}"> ${this.hass.localize("ui.panel.energy.compare.info",{start:a.dy`<b>${(0,u.p6)(this._start,this.hass.locale)}${e>0?` -\n          ${(0,u.p6)(this._end||(0,i.Z)(new Date),this.hass.locale)}`:""}</b>`,end:a.dy`<b>${(0,u.p6)(this._startCompare,this.hass.locale)}${e>0?` -\n          ${(0,u.p6)(this._endCompare,this.hass.locale)}`:""}</b>`})} </ha-alert> `}},{kind:"method",key:"_update",value:function(e){this._start=e.start,this._end=e.end,this._startCompare=e.startCompare,this._endCompare=e.endCompare,this.hidden=!this._startCompare}},{kind:"method",key:"_stopCompare",value:function(){const e=(0,l.UB)(this.hass,{key:this._config.collection_key});e.setCompare(!1),e.refresh()}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`mwc-button{width:max-content}`}}]}}),(0,d.f)(a.oi));n()}catch(e){n(e)}}))}}]);
//# sourceMappingURL=61046-Dbxm_w6owyo.js.map