"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[97740],{76680:function(e,t,n){function i(e){return void 0===e||Array.isArray(e)?e:[e]}n.d(t,{r:function(){return i}})},43793:function(e,t,n){n.d(t,{x:function(){return i}});var i=function(e,t){return e.substring(0,t.length)===t}},39258:function(e,t,n){n.d(t,{U:function(){return f}});var i=n(55070),r=n(15838),o=n(89525),a=n(58831),s=n(6229),c=n(56007),u=n(22134),d={media_player:{paused:.5,idle:1},vacuum:{returning:.5}};var l=0,h=new Map;function f(e,t,n){return function(e,t,n){var i;if(!n||e===c.nZ)return(0,u.g)("--history-unavailable-color",t);if(e===c.lz)return(0,u.g)("--history-unknown-color",t);var l=(0,s.tD)(n,e);if(l){var h=(0,u.g)(l,t);if(h){var f=(0,a.M)(n.entity_id),v=null===(i=d[f])||void 0===i?void 0:i[e];return v?(0,r.uO)((0,o.C)((0,r.Rw)((0,r.wK)(h)),v)):h}}}(e,t,n)||function(e,t){if(h.has(e))return h.get(e);var n=(0,i.hZ)(l,t);return l++,h.set(e,n),n}(e,t)}},31206:function(e,t,n){n.r(t),n.d(t,{HaCircularProgress:function(){return g}});var i,r=n(88962),o=n(33368),a=n(71650),s=n(82390),c=n(69205),u=n(70906),d=n(91808),l=n(88771),h=n(47838),f=n(30879),v=n(68144),_=n(79932),g=(0,d.Z)([(0,_.Mo)("ha-circular-progress")],(function(e,t){var n=function(t){(0,c.Z)(i,t);var n=(0,u.Z)(i);function i(){var t;(0,a.Z)(this,i);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return t=n.call.apply(n,[this].concat(o)),e((0,s.Z)(t)),t}return(0,o.Z)(i)}(t);return{F:n,d:[{kind:"field",decorators:[(0,_.Cb)({type:Boolean})],key:"active",value:function(){return!1}},{kind:"field",decorators:[(0,_.Cb)()],key:"alt",value:function(){return"Loading"}},{kind:"field",decorators:[(0,_.Cb)()],key:"size",value:function(){return"medium"}},{kind:"set",key:"density",value:function(e){}},{kind:"get",key:"density",value:function(){switch(this.size){case"tiny":return-8;case"small":return-5;case"medium":default:return 0;case"large":return 5}}},{kind:"set",key:"indeterminate",value:function(e){}},{kind:"get",key:"indeterminate",value:function(){return this.active}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,l.Z)((0,h.Z)(n),"styles",this),(0,v.iv)(i||(i=(0,r.Z)([":host{overflow:hidden}"])))]}}]}}),f.D)},99282:function(e,t,n){var i=n(33368),r=n(71650),o=n(82390),a=n(69205),s=n(70906),c=n(91808),u=n(88771),d=n(47838),l=n(79932),h=n(52039);(0,c.Z)([(0,l.Mo)("ha-icon-next")],(function(e,t){var n=function(t){(0,a.Z)(c,t);var n=(0,s.Z)(c);function c(){var t;(0,r.Z)(this,c);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return t=n.call.apply(n,[this].concat(a)),e((0,o.Z)(t)),t}return(0,i.Z)(c)}(t);return{F:n,d:[{kind:"method",key:"connectedCallback",value:function(){var e=this;(0,u.Z)((0,d.Z)(n.prototype),"connectedCallback",this).call(this),setTimeout((function(){e.path="ltr"===window.getComputedStyle(e).direction?"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z":"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"}),100)}}]}}),h.C)},55422:function(e,t,n){if(n.d(t,{MY:function(){return x},Yc:function(){return y},hb:function(){return p},jV:function(){return h},o1:function(){return m},ri:function(){return b},sS:function(){return _},tf:function(){return k}}),32143==n.j)var i=n(99312);if(32143==n.j)var r=n(81043);var o,a=n(49706),s=n(58831),c=n(41826),u=n(22311),d=n(56007),l="ui.components.logbook.messages",h=["counter","proximity","sensor","zone"],f={"numeric state of":"triggered_by_numeric_state_of","state of":"triggered_by_state_of",event:"triggered_by_event",time:"triggered_by_time","time pattern":"triggered_by_time_pattern","ioBroker stopping":"triggered_by_homeassistant_stopping","ioBroker starting":"triggered_by_homeassistant_starting"},v={},_=32143==n.j?(o=(0,r.Z)((0,i.Z)().mark((function e(t,n,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadBackendTranslation("device_class");case 2:return e.abrupt("return",g(t,n,void 0,void 0,r));case 3:case"end":return e.stop()}}),e)}))),function(e,t,n){return o.apply(this,arguments)}):null,g=function(e,t,n,i,r,o){if((i||o)&&(!i||0===i.length)&&(!o||0===o.length))return Promise.resolve([]);var a={type:"logbook/get_events",start_time:t};return n&&(a.end_time=n),null!=i&&i.length&&(a.entity_ids=i),null!=o&&o.length&&(a.device_ids=o),r&&(a.context_id=r),e.callWS(a)},y=function(e,t,n,i,r,o){if((r||o)&&(!r||0===r.length)&&(!o||0===o.length))return Promise.reject("No entities or devices");var a={type:"logbook/event_stream",start_time:n,end_time:i};return null!=r&&r.length&&(a.entity_ids=r),null!=o&&o.length&&(a.device_ids=o),e.connection.subscribeMessage((function(e){return t(e)}),a)},k=function(e,t){v["".concat(e).concat(t)]={}},m=function(e,t){return{entity_id:e.entity_id,state:t,attributes:{device_class:null==e?void 0:e.attributes.device_class,source_type:null==e?void 0:e.attributes.source_type,has_date:null==e?void 0:e.attributes.has_date,has_time:null==e?void 0:e.attributes.has_time,entity_picture_local:a.iY.has((0,s.M)(e.entity_id))||null==e?void 0:e.attributes.entity_picture_local,entity_picture:a.iY.has((0,s.M)(e.entity_id))||null==e?void 0:e.attributes.entity_picture}}},p=function(e,t){for(var n in f)if(t.startsWith(n))return t.replace(n,"".concat(e("ui.components.logbook.".concat(f[n]))));return t},b=function(e,t,n,i,r){switch(r){case"device_tracker":case"person":return"not_home"===n?t("".concat(l,".was_away")):"home"===n?t("".concat(l,".was_at_home")):t("".concat(l,".was_at_state"),"state",n);case"sun":return t("".concat(l,"above_horizon"===n?".rose":".set"));case"binary_sensor":var o=n===a.uo,s=n===a.lC,u=i.attributes.device_class;switch(u){case"battery":if(o)return t("".concat(l,".was_low"));if(s)return t("".concat(l,".was_normal"));break;case"connectivity":if(o)return t("".concat(l,".was_connected"));if(s)return t("".concat(l,".was_disconnected"));break;case"door":case"garage_door":case"opening":case"window":if(o)return t("".concat(l,".was_opened"));if(s)return t("".concat(l,".was_closed"));break;case"lock":if(o)return t("".concat(l,".was_unlocked"));if(s)return t("".concat(l,".was_locked"));break;case"plug":if(o)return t("".concat(l,".was_plugged_in"));if(s)return t("".concat(l,".was_unplugged"));break;case"presence":if(o)return t("".concat(l,".was_at_home"));if(s)return t("".concat(l,".was_away"));break;case"safety":if(o)return t("".concat(l,".was_unsafe"));if(s)return t("".concat(l,".was_safe"));break;case"cold":case"gas":case"heat":case"moisture":case"motion":case"occupancy":case"power":case"problem":case"smoke":case"sound":case"vibration":if(o)return t("".concat(l,".detected_device_class"),{device_class:t("component.binary_sensor.device_class.".concat(u))});if(s)return t("".concat(l,".cleared_device_class"),{device_class:t("component.binary_sensor.device_class.".concat(u))});break;case"tamper":if(o)return t("".concat(l,".detected_tampering"));if(s)return t("".concat(l,".cleared_tampering"))}break;case"cover":switch(n){case"open":return t("".concat(l,".was_opened"));case"opening":return t("".concat(l,".is_opening"));case"closing":return t("".concat(l,".is_closing"));case"closed":return t("".concat(l,".was_closed"))}break;case"lock":switch(n){case"unlocked":return t("".concat(l,".was_unlocked"));case"locking":return t("".concat(l,".is_locking"));case"unlocking":return t("".concat(l,".is_unlocking"));case"locked":return t("".concat(l,".was_locked"));case"jammed":return t("".concat(l,".is_jammed"))}}return n===a.uo?t("".concat(l,".turned_on")):n===a.lC?t("".concat(l,".turned_off")):n===d.lz?t("".concat(l,".became_unknown")):n===d.nZ?t("".concat(l,".became_unavailable")):e.localize("".concat(l,".changed_to_state"),"state",i?(0,c.D1)(t,i,e.locale,e.entities,n):n)},x=function(e){return"sensor"!==(0,u.N)(e)||void 0===e.attributes.unit_of_measurement&&void 0===e.attributes.state_class}},97389:function(e,t,n){if(n.d(t,{U_:function(){return a},Zm:function(){return c},lj:function(){return o},mA:function(){return r},nV:function(){return s}}),32143==n.j)var i=n(43793);var r=function(e,t,n,i){return e.callWS({type:"trace/get",domain:t,item_id:n,run_id:i})},o=function(e,t,n){return e.callWS({type:"trace/list",domain:t,item_id:n})},a=function(e,t,n){return e.callWS({type:"trace/contexts",domain:t,item_id:n})},s=function(e,t){for(var n=t.split("/").reverse(),i=e;n.length;){var r=n.pop(),o=Number(r);if(isNaN(o)){var a=i[r];if(!a&&"sequence"===r)continue;i=a}else if(Array.isArray(i))i=i[o];else if(0!==o)throw new Error("If config is not an array, can only return index 0")}return i},c=function(e){return"trigger"===e||(0,i.x)(e,"trigger/")}},65253:function(e,t,n){n.d(t,{CE:function(){return u},FH:function(){return m},Nq:function(){return h},Pb:function(){return c},fm:function(){return v},h8:function(){return f},r4:function(){return l},uh:function(){return d}});var i,r,o,a=n(99312),s=n(81043),c="system-admin",u="system-users",d=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth/list"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=32143==n.j?(i=(0,s.Z)((0,a.Z)().mark((function e(t,n,i,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth/create",name:n,group_ids:i,local_only:r}));case 1:case"end":return e.stop()}}),e)}))),function(e,t,n,r){return i.apply(this,arguments)}):null,h=32143==n.j?(r=(0,s.Z)((0,a.Z)().mark((function e(t,n,i){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS(Object.assign(Object.assign({},i),{},{type:"config/auth/update",user_id:n})));case 1:case"end":return e.stop()}}),e)}))),function(e,t,n){return r.apply(this,arguments)}):null,f=32143==n.j?(o=(0,s.Z)((0,a.Z)().mark((function e(t,n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth/delete",user_id:n}));case 1:case"end":return e.stop()}}),e)}))),function(e,t){return o.apply(this,arguments)}):null,v=function(e){return e?e.trim().split(" ").slice(0,3).map((function(e){return e.substring(0,1)})).join(""):"?"},_=32143==n.j?"M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4S20 7.58 20 12C20 16.42 16.42 20 12 20M8 14L7 8L10 10L12 7L14 10L17 8L16 14H8M8.56 16C8.22 16 8 15.78 8 15.44V15H16V15.44C16 15.78 15.78 16 15.44 16H8.56Z":null,g=32143==n.j?"M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z":null,y=32143==n.j?"M12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M11 14H13V17H16V12H18L12 7L6 12H8V17H11V14":null,k=32143==n.j?"M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z":null,m=function(e,t,n){var i=[],r=function(t){return e.localize("ui.panel.config.users.".concat(t))};return t.is_owner&&i.push([_,r("is_owner")]),n&&t.system_generated&&i.push([g,r("is_system")]),t.local_only&&i.push([y,r("is_local")]),t.is_active||i.push([k,r("is_not_active")]),i}},44198:function(e,t,n){var i,r,o,a,s,c,u,d,l,h,f,v,_,g,y,k,m,p,b=n(88962),x=n(33368),w=n(71650),Z=n(82390),C=n(69205),L=n(70906),z=n(91808),S=n(68144),M=n(79932),E=n(83448),I=n(47501),T=n(7323),j=n(12198),B=n(49684),A=n(25516),P=n(47181),U=n(58831),N=n(83849),H=n(39258),D=(n(3143),n(31206),n(99282),n(42952),n(55422)),O=n(11654),V=n(46134),W=n(11254),R=["script","automation"];(0,z.Z)([(0,M.Mo)("ha-logbook-renderer")],(function(e,t){var n=function(t){(0,C.Z)(i,t);var n=(0,L.Z)(i);function i(){var t;(0,w.Z)(this,i);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n.call.apply(n,[this].concat(o)),e((0,Z.Z)(t)),t}return(0,x.Z)(i)}(t);return{F:n,d:[{kind:"field",decorators:[(0,M.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,M.Cb)({attribute:!1})],key:"userIdToName",value:function(){return{}}},{kind:"field",decorators:[(0,M.Cb)({attribute:!1})],key:"traceContexts",value:function(){return{}}},{kind:"field",decorators:[(0,M.Cb)({attribute:!1})],key:"entries",value:function(){return[]}},{kind:"field",decorators:[(0,M.Cb)({type:Boolean,attribute:"narrow"})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,M.Cb)({type:Boolean,attribute:"virtualize",reflect:!0})],key:"virtualize",value:function(){return!1}},{kind:"field",decorators:[(0,M.Cb)({type:Boolean,attribute:"show-indicator"})],key:"showIndicator",value:function(){return!1}},{kind:"field",decorators:[(0,M.Cb)({type:Boolean,attribute:"no-icon"})],key:"noIcon",value:function(){return!1}},{kind:"field",decorators:[(0,M.Cb)({type:Boolean,attribute:"no-name"})],key:"noName",value:function(){return!1}},{kind:"field",decorators:[(0,M.Cb)({type:Boolean,attribute:"relative-time"})],key:"relativeTime",value:function(){return!1}},{kind:"field",decorators:[(0,A.i)(".container")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"willUpdate",value:function(e){(!this.hasUpdated&&this.virtualize||e.has("virtualize")&&this.virtualize)&&(0,V.o)()}},{kind:"method",key:"shouldUpdate",value:function(e){var t=e.get("hass"),n=void 0===t||t.locale!==this.hass.locale;return e.has("entries")||e.has("traceContexts")||n}},{kind:"method",key:"render",value:function(){var e,t=this;return null!==(e=this.entries)&&void 0!==e&&e.length?(0,S.dy)(r||(r=(0,b.Z)([' <div class="container ha-scrollbar ','" @scroll="','"> '," </div> "])),(0,E.$)({narrow:this.narrow,"no-name":this.noName,"no-icon":this.noIcon}),this._saveScrollPos,this.virtualize?(0,S.dy)(o||(o=(0,b.Z)(['<lit-virtualizer @visibilityChanged="','" scroller class="ha-scrollbar" .items="','" .renderItem="','"> </lit-virtualizer>'])),this._visibilityChanged,this.entries,this._renderLogbookItem):this.entries.map((function(e,n){return t._renderLogbookItem(e,n)}))):(0,S.dy)(i||(i=(0,b.Z)([' <div class="container no-entries"> '," </div> "])),this.hass.localize("ui.components.logbook.entries_not_found"))}},{kind:"field",key:"_renderLogbookItem",value:function(){var e=this;return function(t,n){var i;if(!t||void 0===n)return S.Ld;var r=e.entries[n-1],o=[],l=t.entity_id?e.hass.states[t.entity_id]:void 0,h=l?(0,D.o1)(l,t.state):void 0,f=t.entity_id?(0,U.M)(t.entity_id):t.domain,v=h||t.icon||t.state||!f||!(0,T.p)(e.hass,f)?void 0:(0,W.X1)({domain:f,type:"icon",useFallback:!0,darkOptimized:null===(i=e.hass.themes)||void 0===i?void 0:i.darkMode}),_=R.includes(t.domain)&&t.context_id in e.traceContexts?e.traceContexts[t.context_id]:void 0,g=void 0!==_;return(0,S.dy)(a||(a=(0,b.Z)([' <div class="entry-container ','" .traceLink="','" @click="','"> ',' <div class="entry ','"> <div class="icon-message"> '," ",' <div class="message-relative_time"> <div class="message"> '," "," ",' </div> <div class="secondary"> <span>','</span> - <ha-relative-time .hass="','" .datetime="','" capitalize></ha-relative-time> '," "," </div> </div> </div> "," </div> </div> "])),(0,E.$)({clickable:g}),_?"/config/".concat(_.domain,"/trace/").concat(_.item_id,"?run_id=").concat(_.run_id):void 0,e._handleClick,0===n||null!=t&&t.when&&null!=r&&r.when&&new Date(1e3*t.when).toDateString()!==new Date(1e3*r.when).toDateString()?(0,S.dy)(s||(s=(0,b.Z)([' <h4 class="date"> '," </h4> "])),(0,j.p6)(new Date(1e3*t.when),e.hass.locale)):S.Ld,(0,E.$)({"no-entity":!t.entity_id}),e.noIcon?"":(0,S.dy)(c||(c=(0,b.Z)([' <state-badge .hass="','" .overrideIcon="','" .overrideImage="','" .stateObj="','" .stateColor="','"></state-badge> '])),e.hass,t.icon,v,t.icon?void 0:h,!1),e.showIndicator?e._renderIndicator(t):"",e.noName?"":e._renderEntity(t.entity_id,t.name,g),e._renderMessage(t,o,f,h,g),e._renderContextMessage(t,o,g),(0,B.Vu)(new Date(1e3*t.when),e.hass.locale),e.hass,1e3*t.when,t.context_user_id?(0,S.dy)(u||(u=(0,b.Z)(["",""])),e._renderUser(t)):"",g?"- ".concat(e.hass.localize("ui.components.logbook.show_trace")):"",g?(0,S.dy)(d||(d=(0,b.Z)(["<ha-icon-next></ha-icon-next>"]))):"")}}},{kind:"method",decorators:[(0,M.hO)({passive:!0})],key:"_saveScrollPos",value:function(e){this._savedScrollPos=e.target.scrollTop}},{kind:"method",decorators:[(0,M.hO)({passive:!0})],key:"_visibilityChanged",value:function(e){(0,P.B)(this,"hass-logbook-live",{enable:0===e.first})}},{kind:"method",key:"_renderIndicator",value:function(e){var t=this.hass.states[e.entity_id],n=getComputedStyle(this),i={backgroundColor:void 0!==e.state?(0,H.U)(e.state,n,t):void 0};return(0,S.dy)(l||(l=(0,b.Z)([' <div class="indicator" style="','"></div> '])),(0,I.V)(i))}},{kind:"method",key:"_renderMessage",value:function(e,t,n,i,r){if(e.entity_id&&e.state)return i?(0,D.ri)(this.hass,this.hass.localize,e.state,i,n):e.state;var o=function(e){return e.context_event_type||e.context_state||e.context_message}(e),a=e.message;if(R.includes(n)&&e.source){if(o)return"";a=(0,D.hb)(this.hass.localize,e.source)}return a?this._formatMessageWithPossibleEntity(o?function(e,t){return t?e.replace(t," "):e}(a,e.context_entity_id):a,t,void 0,r):""}},{kind:"method",key:"_renderUser",value:function(e){var t=e.context_user_id&&this.userIdToName[e.context_user_id];return t?"- ".concat(t):""}},{kind:"method",key:"_renderUnseenContextSourceEntity",value:function(e,t,n){return!e.context_entity_id||t.includes(e.context_entity_id)?"":(0,S.dy)(h||(h=(0,b.Z)([" (",")"])),this._renderEntity(e.context_entity_id,e.context_entity_id_name,n))}},{kind:"method",key:"_renderContextMessage",value:function(e,t,n){if(e.context_state){var i=e.context_entity_id&&e.context_entity_id in this.hass.states?(0,D.o1)(this.hass.states[e.context_entity_id],e.context_state):void 0;return(0,S.dy)(f||(f=(0,b.Z)([""," "," ",""])),this.hass.localize("ui.components.logbook.triggered_by_state_of"),this._renderEntity(e.context_entity_id,e.context_entity_id_name,n),i?(0,D.ri)(this.hass,this.hass.localize,e.context_state,i,(0,U.M)(e.context_entity_id)):e.context_state)}if("call_service"===e.context_event_type)return(0,S.dy)(v||(v=(0,b.Z)([""," ",".",""])),this.hass.localize("ui.components.logbook.triggered_by_service"),e.context_domain,e.context_service);if(!e.context_message||t.includes(e.context_entity_id))return"";if("automation_triggered"===e.context_event_type||"script_started"===e.context_event_type){var r=e.context_source?e.context_source:e.context_message.replace("triggered by ",""),o=(0,D.hb)(this.hass.localize,r);return(0,S.dy)(_||(_=(0,b.Z)([""," "," ",""])),this.hass.localize("automation_triggered"===e.context_event_type?"ui.components.logbook.triggered_by_automation":"ui.components.logbook.triggered_by_script"),this._renderEntity(e.context_entity_id,e.context_entity_id_name,n),e.context_message?this._formatMessageWithPossibleEntity(o,t,void 0,n):"")}return(0,S.dy)(g||(g=(0,b.Z)([" "," "," "," ",""])),this.hass.localize("ui.components.logbook.triggered_by"),e.context_name,this._formatMessageWithPossibleEntity(e.context_message,t,e.context_entity_id,n),this._renderUnseenContextSourceEntity(e,t,n))}},{kind:"method",key:"_renderEntity",value:function(e,t,n){var i=e&&e in this.hass.states,r=t||i&&this.hass.states[e].attributes.friendly_name||e;return i?n?r:(0,S.dy)(y||(y=(0,b.Z)(['<button class="link" @click="','" .entityId="','"> '," </button>"])),this._entityClicked,e,r):r}},{kind:"method",key:"_formatMessageWithPossibleEntity",value:function(e,t,n,i){if(-1!==e.indexOf("."))for(var r=e.split(" "),o=0,a=r.length;o<a;o++)if(r[o]in this.hass.states){var s=r[o];if(t.includes(s))return"";t.push(s);var c=r.splice(o);return c.shift(),(0,S.dy)(k||(k=(0,b.Z)([""," "," ",""])),r.join(" "),this._renderEntity(s,this.hass.states[s].attributes.friendly_name,i),c.join(" "))}if(n&&n in this.hass.states){var u=this.hass.states[n].attributes.friendly_name;if(u&&e.endsWith(u))return t.includes(n)?"":(t.push(n),e=e.substring(0,e.length-u.length),(0,S.dy)(m||(m=(0,b.Z)([""," ",""])),e,this._renderEntity(n,u,i)))}return e}},{kind:"method",key:"_entityClicked",value:function(e){var t=e.currentTarget.entityId;t&&(e.preventDefault(),e.stopPropagation(),(0,P.B)(this,"hass-more-info",{entityId:t}))}},{kind:"method",key:"_handleClick",value:function(e){e.currentTarget.traceLink&&((0,N.c)(e.currentTarget.traceLink),(0,P.B)(this,"closed"))}},{kind:"get",static:!0,key:"styles",value:function(){return[O.Qx,O.$c,O.k1,(0,S.iv)(p||(p=(0,b.Z)([":host([virtualize]){display:block;height:100%}.entry-container{width:100%}.entry{position:relative;display:flex;width:100%;line-height:2em;padding:8px 16px;box-sizing:border-box;border-top:1px solid var(--divider-color);justify-content:space-between;align-items:center}.indicator{background-color:var(--disabled-color);height:8px;width:8px;border-radius:4px;flex-shrink:0;margin-right:12px;margin-inline-start:initial;margin-inline-end:12px;direction:var(--direction)}ha-icon-next{color:var(--secondary-text-color)}.clickable{cursor:pointer}:not(.clickable) .entry.no-entity,:not(.clickable) .no-name .entry{cursor:default}.entry:hover{background-color:rgba(var(--rgb-primary-text-color),.04)}.narrow:not(.no-icon) .time{margin-left:32px;margin-inline-start:32px;margin-inline-end:initial;direction:var(--direction)}.message-relative_time{display:flex;flex-direction:column}.secondary{font-size:12px;line-height:1.7}.secondary a{color:var(--secondary-text-color)}.date{margin:8px 0;padding:0 16px}.icon-message{display:flex;align-items:center}.no-entries{text-align:center;color:var(--secondary-text-color)}state-badge{margin-right:16px;margin-inline-start:initial;flex-shrink:0;color:var(--state-icon-color);margin-inline-end:16px;direction:var(--direction)}.message{color:var(--primary-text-color)}.no-name .message:first-letter{text-transform:capitalize}a{color:var(--primary-color);text-decoration:none}button.link{color:var(--paper-item-icon-color);text-decoration:none}.container{max-height:var(--logbook-max-height)}.container,lit-virtualizer{height:100%}lit-virtualizer{contain:size layout!important}.narrow .entry{line-height:1.5}.narrow .icon-message state-badge{margin-left:0;margin-inline-start:0;margin-inline-end:8px;margin-right:8px;direction:var(--direction)}"])))]}}]}}),S.oi)},97740:function(e,t,n){var i,r,o,a,s,c=n(40039),u=n(53709),d=n(99312),l=n(81043),h=n(88962),f=n(33368),v=n(71650),_=n(82390),g=n(69205),y=n(70906),k=n(91808),m=n(88771),p=n(47838),b=n(68144),x=n(79932),w=n(76680),Z=n(7323),C=n(22311),L=n(8330),z=(n(31206),n(55422)),S=n(97389),M=n(65253),E=(n(44198),function(e,t){return new Date(e.getTime()-1e3*t).getTime()/1e3}),I=function(e,t){return(void 0!==e||void 0!==t)&&(!e||!t||e.length!==t.length||!e.every((function(e){return t.includes(e)})))};(0,k.Z)([(0,x.Mo)("ha-logbook")],(function(e,t){var n,k,T=function(t){(0,g.Z)(i,t);var n=(0,y.Z)(i);function i(){var t;(0,v.Z)(this,i);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n.call.apply(n,[this].concat(o)),e((0,_.Z)(t)),t}return(0,f.Z)(i)}(t);return{F:T,d:[{kind:"field",decorators:[(0,x.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,x.Cb)()],key:"time",value:void 0},{kind:"field",decorators:[(0,x.Cb)()],key:"entityIds",value:void 0},{kind:"field",decorators:[(0,x.Cb)()],key:"deviceIds",value:void 0},{kind:"field",decorators:[(0,x.Cb)({type:Boolean,attribute:"narrow"})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,x.Cb)({type:Boolean,attribute:"virtualize",reflect:!0})],key:"virtualize",value:function(){return!1}},{kind:"field",decorators:[(0,x.Cb)({type:Boolean,attribute:"no-icon"})],key:"noIcon",value:function(){return!1}},{kind:"field",decorators:[(0,x.Cb)({type:Boolean,attribute:"no-name"})],key:"noName",value:function(){return!1}},{kind:"field",decorators:[(0,x.Cb)({type:Boolean,attribute:"show-indicator"})],key:"showIndicator",value:function(){return!1}},{kind:"field",decorators:[(0,x.Cb)({type:Boolean,attribute:"relative-time"})],key:"relativeTime",value:function(){return!1}},{kind:"field",decorators:[(0,x.Cb)({type:Boolean})],key:"showMoreLink",value:function(){return!0}},{kind:"field",decorators:[(0,x.SB)()],key:"_logbookEntries",value:void 0},{kind:"field",decorators:[(0,x.SB)()],key:"_traceContexts",value:function(){return{}}},{kind:"field",decorators:[(0,x.SB)()],key:"_userIdToName",value:function(){return{}}},{kind:"field",decorators:[(0,x.SB)()],key:"_error",value:void 0},{kind:"field",key:"_subscribed",value:void 0},{kind:"field",key:"_liveUpdatesEnabled",value:function(){return!0}},{kind:"field",key:"_pendingStreamMessages",value:function(){return[]}},{kind:"field",key:"_throttleGetLogbookEntries",value:function(){var e=this;return(0,L.P)((function(){return e._getLogBookData()}),1e3)}},{kind:"method",key:"render",value:function(){return(0,Z.p)(this.hass,"logbook")?this._error?(0,b.dy)(i||(i=(0,h.Z)(['<div class="no-entries"> '," </div>"])),"".concat(this.hass.localize("ui.components.logbook.retrieval_error"),": ").concat(this._error)):void 0===this._logbookEntries?(0,b.dy)(r||(r=(0,h.Z)([' <div class="progress-wrapper"> <ha-circular-progress active alt="','"></ha-circular-progress> </div> '])),this.hass.localize("ui.common.loading")):0===this._logbookEntries.length?(0,b.dy)(o||(o=(0,h.Z)(['<div class="no-entries"> '," </div>"])),this.hass.localize("ui.components.logbook.entries_not_found")):(0,b.dy)(a||(a=(0,h.Z)([' <ha-logbook-renderer .hass="','" .narrow="','" .virtualize="','" .noIcon="','" .noName="','" .showIndicator="','" .relativeTime="','" .entries="','" .traceContexts="','" .userIdToName="','" @hass-logbook-live="','"></ha-logbook-renderer> '])),this.hass,this.narrow,this.virtualize,this.noIcon,this.noName,this.showIndicator,this.relativeTime,this._logbookEntries,this._traceContexts,this._userIdToName,this._handleLogbookLive):b.Ld}},{kind:"method",key:"refresh",value:(k=(0,l.Z)((0,d.Z)().mark((function e(){var t=arguments;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.length>0&&void 0!==t[0]&&t[0]||!this._subscribed&&void 0!==this._logbookEntries){e.next=3;break}return e.abrupt("return");case 3:this._unsubscribeSetLoading(),this._throttleGetLogbookEntries.cancel(),this._updateTraceContexts.cancel(),this._updateUsers.cancel(),"range"in this.time&&(0,z.tf)(this.time.range[0].toISOString(),this.time.range[1].toISOString()),this._throttleGetLogbookEntries();case 9:case"end":return e.stop()}}),e,this)}))),function(){return k.apply(this,arguments)})},{kind:"method",key:"firstUpdated",value:function(e){(0,m.Z)((0,p.Z)(T.prototype),"firstUpdated",this).call(this,e)}},{kind:"method",key:"shouldUpdate",value:function(e){if(1!==e.size||!e.has("hass"))return!0;var t=e.get("hass");return!t||t.localize!==this.hass.localize}},{kind:"method",key:"updated",value:function(e){for(var t=e.has("time"),n=0,i=["entityIds","deviceIds"];n<i.length;n++){var r=i[n];if(e.has(r)){var o=e.get(r),a=this[r];if(I(o,a)){t=!0;break}}}t&&this.refresh(!0)}},{kind:"method",key:"_handleLogbookLive",value:function(e){var t=this;e.detail.enable&&!this._liveUpdatesEnabled&&(this._pendingStreamMessages.forEach((function(e){return t._processStreamMessage(e)})),this._pendingStreamMessages=[]),this._liveUpdatesEnabled=e.detail.enable}},{kind:"get",key:"_filterAlwaysEmptyResults",value:function(){var e=(0,w.r)(this.entityIds),t=(0,w.r)(this.deviceIds);return(e||t)&&(!e||0===e.length)&&(!t||0===t.length)}},{kind:"method",key:"_unsubscribe",value:function(){this._subscribed&&(this._subscribed.then((function(e){return e?e().catch((function(){})):void 0})),this._subscribed=void 0)}},{kind:"method",key:"connectedCallback",value:function(){(0,m.Z)((0,p.Z)(T.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this._subscribeLogbookPeriod(this._calculateLogbookPeriod())}},{kind:"method",key:"disconnectedCallback",value:function(){(0,m.Z)((0,p.Z)(T.prototype),"disconnectedCallback",this).call(this),this._unsubscribeSetLoading()}},{kind:"method",key:"_unsubscribeSetLoading",value:function(){this._logbookEntries=void 0,this._unsubscribe()}},{kind:"method",key:"_unsubscribeNoResults",value:function(){this._logbookEntries=[],this._unsubscribe()}},{kind:"method",key:"_calculateLogbookPeriod",value:function(){var e=new Date;if("range"in this.time)return{now:e,startTime:this.time.range[0],endTime:this.time.range[1],purgeBeforePythonTime:void 0};if("recent"in this.time){var t=E(e,this.time.recent);return{now:e,startTime:new Date(1e3*t),endTime:new Date(e.getTime()+31536e6),purgeBeforePythonTime:E(e,this.time.recent)}}throw new Error("Unexpected time specified")}},{kind:"method",key:"_subscribeLogbookPeriod",value:function(e){var t=this;return this._subscribed||(this._subscribed=(0,z.Yc)(this.hass,(function(e){t._subscribed&&t._processOrQueueStreamMessage(e)}),e.startTime.toISOString(),e.endTime.toISOString(),(0,w.r)(this.entityIds),(0,w.r)(this.deviceIds)).catch((function(e){t._subscribed=void 0,t._error=e}))),!0}},{kind:"method",key:"_getLogBookData",value:(n=(0,l.Z)((0,d.Z)().mark((function e(){var t,n;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._error=void 0,!this._filterAlwaysEmptyResults){e.next=4;break}return this._unsubscribeNoResults(),e.abrupt("return");case 4:if(!((n=this._calculateLogbookPeriod()).startTime>n.now)){e.next=8;break}return this._unsubscribeNoResults(),e.abrupt("return");case 8:this._updateUsers(),null!==(t=this.hass.user)&&void 0!==t&&t.is_admin&&this._updateTraceContexts(),this._subscribeLogbookPeriod(n);case 11:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{kind:"field",key:"_nonExpiredRecords",value:function(){var e=this;return function(t){return e._logbookEntries?t?e._logbookEntries.filter((function(e){return e.when>t})):e._logbookEntries:[]}}},{kind:"field",key:"_processOrQueueStreamMessage",value:function(){var e=this;return function(t){e._liveUpdatesEnabled?e._processStreamMessage(t):e._pendingStreamMessages.push(t)}}},{kind:"field",key:"_processStreamMessage",value:function(){var e=this;return function(t){var n="recent"in e.time?E(new Date,e.time.recent):void 0,i=(0,u.Z)(t.events).reverse();if(e._logbookEntries&&e._logbookEntries.length){if(i.length){var r=e._nonExpiredRecords(n);r.length?i[i.length-1].when>r[0].when?e._logbookEntries=i.concat(r):r[r.length-1].when>i[0].when?e._logbookEntries=r.concat(i):e._logbookEntries=r.concat(i).sort((function(e,t){return t.when-e.when})):e._logbookEntries=i}}else e._logbookEntries=i}}},{kind:"field",key:"_updateTraceContexts",value:function(){var e=this;return(0,L.P)((0,l.Z)((0,d.Z)().mark((function t(){return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,S.U_)(e.hass);case 2:e._traceContexts=t.sent;case 3:case"end":return t.stop()}}),t)}))),6e4)}},{kind:"field",key:"_updateUsers",value:function(){var e=this;return(0,L.P)((0,l.Z)((0,d.Z)().mark((function t(){var n,i,r,o,a,s,u,l,h,f;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(i={},r=(null===(n=e.hass.user)||void 0===n?void 0:n.is_admin)&&(0,M.uh)(e.hass),o=0,a=Object.values(e.hass.states);o<a.length;o++)(s=a[o]).attributes.user_id&&"person"===(0,C.N)(s)&&(i[s.attributes.user_id]=s.attributes.friendly_name);if(!r){t.next=9;break}return t.next=6,r;case 6:u=t.sent,l=(0,c.Z)(u);try{for(l.s();!(h=l.n()).done;)(f=h.value).id in i||(i[f.id]=f.name)}catch(d){l.e(d)}finally{l.f()}case 9:e._userIdToName=i;case 10:case"end":return t.stop()}}),t)}))),6e4)}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,b.iv)(s||(s=(0,h.Z)([":host{display:block}:host([virtualize]){height:100%}.no-entries{text-align:center;padding:16px;color:var(--secondary-text-color)}.progress-wrapper{display:flex;justify-content:center;height:100%;align-items:center}"])))]}}]}}),b.oi)},46134:function(e,t,n){n.d(t,{o:function(){return a}});var i=n(99312),r=n(81043),o=n(44281),a=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.j)();case 2:return e.next=4,Promise.all([n.e(51246),n.e(83998)]).then(n.bind(n,83998));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},11254:function(e,t,n){n.d(t,{RU:function(){return r},X1:function(){return i},u4:function(){return o},zC:function(){return a}});var i=function(e){return"https://brands.home-assistant.io/".concat(e.brand?"brands/":"").concat(e.useFallback?"_/":"").concat(e.domain,"/").concat(e.darkOptimized?"dark_":"").concat(e.type,".png")},r=function(e){return"https://brands.home-assistant.io/hardware/".concat(e.category,"/").concat(e.darkOptimized?"dark_":"").concat(e.manufacturer).concat(e.model?"_".concat(e.model):"",".png")},o=function(e){return e.split("/")[4]},a=function(e){return e.startsWith("https://brands.home-assistant.io/")}}}]);
//# sourceMappingURL=97740-FnPVA2NZTKc.js.map