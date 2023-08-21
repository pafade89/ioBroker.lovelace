"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[40967],{76680:(e,t,i)=>{function s(e){return void 0===e||Array.isArray(e)?e:[e]}i.d(t,{r:()=>s})},31206:(e,t,i)=>{i.r(t),i.d(t,{HaCircularProgress:()=>l});var s=i(17463),o=i(34541),n=i(47838),r=i(30879),a=i(68144),d=i(79932);let l=(0,s.Z)([(0,d.Mo)("ha-circular-progress")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"active",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)()],key:"alt",value:()=>"Loading"},{kind:"field",decorators:[(0,d.Cb)()],key:"size",value:()=>"medium"},{kind:"set",key:"density",value:function(e){}},{kind:"get",key:"density",value:function(){switch(this.size){case"tiny":return-8;case"small":return-5;case"medium":default:return 0;case"large":return 5}}},{kind:"set",key:"indeterminate",value:function(e){}},{kind:"get",key:"indeterminate",value:function(){return this.active}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,o.Z)((0,n.Z)(i),"styles",this),a.iv`:host{overflow:hidden}`]}}]}}),r.D)},65253:(e,t,i)=>{i.d(t,{CE:()=>o,FH:()=>b,Nq:()=>a,Pb:()=>s,fm:()=>l,h8:()=>d,r4:()=>r,uh:()=>n});const s="system-admin",o="system-users",n=async e=>e.callWS({type:"config/auth/list"}),r=async(e,t,i,s)=>e.callWS({type:"config/auth/create",name:t,group_ids:i,local_only:s}),a=async(e,t,i)=>e.callWS({...i,type:"config/auth/update",user_id:t}),d=async(e,t)=>e.callWS({type:"config/auth/delete",user_id:t}),l=e=>e?e.trim().split(" ").slice(0,3).map((e=>e.substring(0,1))).join(""):"?",c=32143==i.j?"M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4S20 7.58 20 12C20 16.42 16.42 20 12 20M8 14L7 8L10 10L12 7L14 10L17 8L16 14H8M8.56 16C8.22 16 8 15.78 8 15.44V15H16V15.44C16 15.78 15.78 16 15.44 16H8.56Z":null,u=32143==i.j?"M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z":null,h=32143==i.j?"M12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M11 14H13V17H16V12H18L12 7L6 12H8V17H11V14":null,k=32143==i.j?"M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z":null,b=(e,t,i)=>{const s=[],o=t=>e.localize(`ui.panel.config.users.${t}`);return t.is_owner&&s.push([c,o("is_owner")]),i&&t.system_generated&&s.push([u,o("is_system")]),t.local_only&&s.push([h,o("is_local")]),t.is_active||s.push([k,o("is_not_active")]),s}},97740:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var s=i(17463),o=i(34541),n=i(47838),r=i(68144),a=i(79932),d=i(76680),l=i(7323),c=i(22311),u=i(8330),h=(i(31206),i(55422)),k=i(97389),b=i(65253),v=i(44198),g=e([h,v]);[h,v]=g.then?(await g)():g;const _=(e,t)=>new Date(e.getTime()-1e3*t).getTime()/1e3,y=(e,t)=>(void 0!==e||void 0!==t)&&(!e||!t||e.length!==t.length||!e.every((e=>t.includes(e))));(0,s.Z)([(0,a.Mo)("ha-logbook")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"time",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"entityIds",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"deviceIds",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,attribute:"narrow"})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,attribute:"virtualize",reflect:!0})],key:"virtualize",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,attribute:"no-icon"})],key:"noIcon",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,attribute:"no-name"})],key:"noName",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,attribute:"show-indicator"})],key:"showIndicator",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,attribute:"relative-time"})],key:"relativeTime",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"showMoreLink",value:()=>!0},{kind:"field",decorators:[(0,a.SB)()],key:"_logbookEntries",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_traceContexts",value:()=>({})},{kind:"field",decorators:[(0,a.SB)()],key:"_userIdToName",value:()=>({})},{kind:"field",decorators:[(0,a.SB)()],key:"_error",value:void 0},{kind:"field",key:"_subscribed",value:void 0},{kind:"field",key:"_liveUpdatesEnabled",value:()=>!0},{kind:"field",key:"_pendingStreamMessages",value:()=>[]},{kind:"field",key:"_throttleGetLogbookEntries",value(){return(0,u.P)((()=>this._getLogBookData()),1e3)}},{kind:"method",key:"render",value:function(){return(0,l.p)(this.hass,"logbook")?this._error?r.dy`<div class="no-entries"> ${`${this.hass.localize("ui.components.logbook.retrieval_error")}: ${this._error}`} </div>`:void 0===this._logbookEntries?r.dy` <div class="progress-wrapper"> <ha-circular-progress active alt="${this.hass.localize("ui.common.loading")}"></ha-circular-progress> </div> `:0===this._logbookEntries.length?r.dy`<div class="no-entries"> ${this.hass.localize("ui.components.logbook.entries_not_found")} </div>`:r.dy` <ha-logbook-renderer .hass="${this.hass}" .narrow="${this.narrow}" .virtualize="${this.virtualize}" .noIcon="${this.noIcon}" .noName="${this.noName}" .showIndicator="${this.showIndicator}" .relativeTime="${this.relativeTime}" .entries="${this._logbookEntries}" .traceContexts="${this._traceContexts}" .userIdToName="${this._userIdToName}" @hass-logbook-live="${this._handleLogbookLive}"></ha-logbook-renderer> `:r.Ld}},{kind:"method",key:"refresh",value:async function(e=!1){(e||!this._subscribed&&void 0!==this._logbookEntries)&&(this._unsubscribeSetLoading(),this._throttleGetLogbookEntries.cancel(),this._updateTraceContexts.cancel(),this._updateUsers.cancel(),"range"in this.time&&(0,h.tf)(this.time.range[0].toISOString(),this.time.range[1].toISOString()),this._throttleGetLogbookEntries())}},{kind:"method",key:"firstUpdated",value:function(e){(0,o.Z)((0,n.Z)(i.prototype),"firstUpdated",this).call(this,e)}},{kind:"method",key:"shouldUpdate",value:function(e){if(1!==e.size||!e.has("hass"))return!0;const t=e.get("hass");return!t||t.localize!==this.hass.localize}},{kind:"method",key:"updated",value:function(e){let t=e.has("time");for(const i of["entityIds","deviceIds"]){if(!e.has(i))continue;const s=e.get(i),o=this[i];if(y(s,o)){t=!0;break}}t&&this.refresh(!0)}},{kind:"method",key:"_handleLogbookLive",value:function(e){e.detail.enable&&!this._liveUpdatesEnabled&&(this._pendingStreamMessages.forEach((e=>this._processStreamMessage(e))),this._pendingStreamMessages=[]),this._liveUpdatesEnabled=e.detail.enable}},{kind:"get",key:"_filterAlwaysEmptyResults",value:function(){const e=(0,d.r)(this.entityIds),t=(0,d.r)(this.deviceIds);return(e||t)&&(!e||0===e.length)&&(!t||0===t.length)}},{kind:"method",key:"_unsubscribe",value:function(){this._subscribed&&(this._subscribed.then((e=>e?e().catch((()=>{})):void 0)),this._subscribed=void 0)}},{kind:"method",key:"connectedCallback",value:function(){(0,o.Z)((0,n.Z)(i.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this._subscribeLogbookPeriod(this._calculateLogbookPeriod())}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)((0,n.Z)(i.prototype),"disconnectedCallback",this).call(this),this._unsubscribeSetLoading()}},{kind:"method",key:"_unsubscribeSetLoading",value:function(){this._logbookEntries=void 0,this._unsubscribe()}},{kind:"method",key:"_unsubscribeNoResults",value:function(){this._logbookEntries=[],this._unsubscribe()}},{kind:"method",key:"_calculateLogbookPeriod",value:function(){const e=new Date;if("range"in this.time)return{now:e,startTime:this.time.range[0],endTime:this.time.range[1],purgeBeforePythonTime:void 0};if("recent"in this.time){const t=_(e,this.time.recent);return{now:e,startTime:new Date(1e3*t),endTime:new Date(e.getTime()+31536e6),purgeBeforePythonTime:_(e,this.time.recent)}}throw new Error("Unexpected time specified")}},{kind:"method",key:"_subscribeLogbookPeriod",value:function(e){return this._subscribed||(this._subscribed=(0,h.Yc)(this.hass,(e=>{this._subscribed&&this._processOrQueueStreamMessage(e)}),e.startTime.toISOString(),e.endTime.toISOString(),(0,d.r)(this.entityIds),(0,d.r)(this.deviceIds)).catch((e=>{this._subscribed=void 0,this._error=e}))),!0}},{kind:"method",key:"_getLogBookData",value:async function(){var e;if(this._error=void 0,this._filterAlwaysEmptyResults)return void this._unsubscribeNoResults();const t=this._calculateLogbookPeriod();t.startTime>t.now?this._unsubscribeNoResults():(this._updateUsers(),null!==(e=this.hass.user)&&void 0!==e&&e.is_admin&&this._updateTraceContexts(),this._subscribeLogbookPeriod(t))}},{kind:"field",key:"_nonExpiredRecords",value(){return e=>this._logbookEntries?e?this._logbookEntries.filter((t=>t.when>e)):this._logbookEntries:[]}},{kind:"field",key:"_processOrQueueStreamMessage",value(){return e=>{this._liveUpdatesEnabled?this._processStreamMessage(e):this._pendingStreamMessages.push(e)}}},{kind:"field",key:"_processStreamMessage",value(){return e=>{const t="recent"in this.time?_(new Date,this.time.recent):void 0,i=[...e.events].reverse();if(!this._logbookEntries||!this._logbookEntries.length)return void(this._logbookEntries=i);if(!i.length)return;const s=this._nonExpiredRecords(t);s.length?i[i.length-1].when>s[0].when?this._logbookEntries=i.concat(s):s[s.length-1].when>i[0].when?this._logbookEntries=s.concat(i):this._logbookEntries=s.concat(i).sort(((e,t)=>t.when-e.when)):this._logbookEntries=i}}},{kind:"field",key:"_updateTraceContexts",value(){return(0,u.P)((async()=>{this._traceContexts=await(0,k.U_)(this.hass)}),6e4)}},{kind:"field",key:"_updateUsers",value(){return(0,u.P)((async()=>{var e;const t={},i=(null===(e=this.hass.user)||void 0===e?void 0:e.is_admin)&&(0,b.uh)(this.hass);for(const e of Object.values(this.hass.states))e.attributes.user_id&&"person"===(0,c.N)(e)&&(t[e.attributes.user_id]=e.attributes.friendly_name);if(i){const e=await i;for(const i of e)i.id in t||(t[i.id]=i.name)}this._userIdToName=t}),6e4)}},{kind:"get",static:!0,key:"styles",value:function(){return[r.iv`:host{display:block}:host([virtualize]){height:100%}.no-entries{text-align:center;padding:16px;color:var(--secondary-text-color)}.progress-wrapper{display:flex;justify-content:center;height:100%;align-items:center}`]}}]}}),r.oi);t()}catch(e){t(e)}}))},11254:(e,t,i)=>{i.d(t,{RU:()=>o,X1:()=>s,u4:()=>n,zC:()=>r});const s=e=>`https://brands.home-assistant.io/${e.brand?"brands/":""}${e.useFallback?"_/":""}${e.domain}/${e.darkOptimized?"dark_":""}${e.type}.png`,o=e=>`https://brands.home-assistant.io/hardware/${e.category}/${e.darkOptimized?"dark_":""}${e.manufacturer}${e.model?`_${e.model}`:""}.png`,n=e=>e.split("/")[4],r=e=>e.startsWith("https://brands.home-assistant.io/")}}]);
//# sourceMappingURL=40967--Em_XN6MqB0.js.map