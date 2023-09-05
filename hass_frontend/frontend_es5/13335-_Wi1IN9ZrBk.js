"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[13335],{18601:function(t,n,e){e.d(n,{Wg:function(){return _},qN:function(){return v.q}});var r,i,o=e(71650),u=e(33368),a=e(34541),c=e(47838),s=e(69205),l=e(70906),d=e(43204),f=e(79932),v=e(78220),h=null!==(i=null===(r=window.ShadyDOM)||void 0===r?void 0:r.inUse)&&void 0!==i&&i,_=function(t){(0,s.Z)(e,t);var n=(0,l.Z)(e);function e(){var t;return(0,o.Z)(this,e),(t=n.apply(this,arguments)).disabled=!1,t.containingForm=null,t.formDataListener=function(n){t.disabled||t.setFormData(n.formData)},t}return(0,u.Z)(e,[{key:"findFormElement",value:function(){if(!this.shadowRoot||h)return null;for(var t=this.getRootNode().querySelectorAll("form"),n=0,e=Array.from(t);n<e.length;n++){var r=e[n];if(r.contains(this))return r}return null}},{key:"connectedCallback",value:function(){var t;(0,a.Z)((0,c.Z)(e.prototype),"connectedCallback",this).call(this),this.containingForm=this.findFormElement(),null===(t=this.containingForm)||void 0===t||t.addEventListener("formdata",this.formDataListener)}},{key:"disconnectedCallback",value:function(){var t;(0,a.Z)((0,c.Z)(e.prototype),"disconnectedCallback",this).call(this),null===(t=this.containingForm)||void 0===t||t.removeEventListener("formdata",this.formDataListener),this.containingForm=null}},{key:"click",value:function(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}},{key:"firstUpdated",value:function(){var t=this;(0,a.Z)((0,c.Z)(e.prototype),"firstUpdated",this).call(this),this.shadowRoot&&this.mdcRoot.addEventListener("change",(function(n){t.dispatchEvent(new Event("change",n))}))}}]),e}(v.H);_.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,d.__decorate)([(0,f.Cb)({type:Boolean})],_.prototype,"disabled",void 0)},57966:function(t,n,e){e.d(n,{z:function(){return r}});var r=function(t){return function(n,e){return t.includes(n,e)}}},39197:function(t,n,e){e.d(n,{v:function(){return o}});var r=e(56007),i=e(58831);function o(t,n){var e=(0,i.M)(t.entity_id),o=void 0!==n?n:null==t?void 0:t.state;if(["button","event","input_button","scene"].includes(e))return o!==r.nZ;if((0,r.rk)(o))return!1;if(o===r.PX&&"alert"!==e)return!1;switch(e){case"alarm_control_panel":return"disarmed"!==o;case"alert":return"idle"!==o;case"cover":return"closed"!==o;case"device_tracker":case"person":return"not_home"!==o;case"lawn_mower":return["mowing","error"].includes(o);case"lock":return"locked"!==o;case"media_player":return"standby"!==o;case"vacuum":return!["idle","docked","paused"].includes(o);case"plant":return"problem"===o;case"group":return["on","home","open","locked","problem"].includes(o);case"timer":return"active"===o;case"camera":return"streaming"===o}return!0}},50768:function(t,n,e){e.d(n,{G:function(){return u}});var r=e(49706),i=e(58831),o=e(47772),u=function(t){return t?(0,o.K)((0,i.M)(t.entity_id),t):r.Rb}},48570:function(t,n,e){e.r(n),e.d(n,{HaStatisticSelector:function(){return _}});var r,i,o,u=e(88962),a=e(33368),c=e(71650),s=e(82390),l=e(69205),d=e(70906),f=e(91808),v=e(68144),h=e(79932),_=(e(13927),(0,f.Z)([(0,h.Mo)("ha-selector-statistic")],(function(t,n){var e=function(n){(0,l.Z)(r,n);var e=(0,d.Z)(r);function r(){var n;(0,c.Z)(this,r);for(var i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];return n=e.call.apply(e,[this].concat(o)),t((0,s.Z)(n)),n}return(0,a.Z)(r)}(n);return{F:e,d:[{kind:"field",decorators:[(0,h.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,h.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,h.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,h.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,h.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,h.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,h.Cb)({type:Boolean})],key:"required",value:function(){return!0}},{kind:"method",key:"render",value:function(){return this.selector.statistic.multiple?(0,v.dy)(i||(i=(0,u.Z)([" ",' <ha-statistics-picker .hass="','" .value="','" .helper="','" .disabled="','" .required="','"></ha-statistics-picker> '])),this.label?(0,v.dy)(o||(o=(0,u.Z)(["<label>","</label>"])),this.label):"",this.hass,this.value,this.helper,this.disabled,this.required):(0,v.dy)(r||(r=(0,u.Z)(['<ha-statistic-picker .hass="','" .value="','" .label="','" .helper="','" .disabled="','" .required="','" allow-custom-entity></ha-statistic-picker>'])),this.hass,this.value,this.label,this.helper,this.disabled,this.required)}}]}}),v.oi))},87037:function(t,n,e){var r,i,o=e(88962),u=e(33368),a=e(71650),c=e(82390),s=e(69205),l=e(70906),d=e(91808),f=e(68144),v=e(79932),h=e(50768);e(81312),e(52039),(0,d.Z)([(0,v.Mo)("ha-state-icon")],(function(t,n){var e=function(n){(0,s.Z)(r,n);var e=(0,l.Z)(r);function r(){var n;(0,a.Z)(this,r);for(var i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];return n=e.call.apply(e,[this].concat(o)),t((0,c.Z)(n)),n}return(0,u.Z)(r)}(n);return{F:e,d:[{kind:"field",decorators:[(0,v.Cb)({attribute:!1})],key:"state",value:void 0},{kind:"field",decorators:[(0,v.Cb)()],key:"icon",value:void 0},{kind:"method",key:"render",value:function(){var t,n;return this.icon||null!==(t=this.state)&&void 0!==t&&t.attributes.icon?(0,f.dy)(r||(r=(0,o.Z)(['<ha-icon .icon="','"></ha-icon>'])),this.icon||(null===(n=this.state)||void 0===n?void 0:n.attributes.icon)):(0,f.dy)(i||(i=(0,o.Z)(['<ha-svg-icon .path="','"></ha-svg-icon>'])),(0,h.G)(this.state))}}]}}),f.oi)},22814:function(t,n,e){if(e.d(n,{Cp:function(){return d},TZ:function(){return f},W2:function(){return l},WD:function(){return s},YY:function(){return v},iI:function(){return c},oT:function(){return a},uw:function(){return u}}),32143==e.j)var r=e(99312);if(32143==e.j)var i=e(81043);var o,u="".concat(location.protocol,"//").concat(location.host),a=function(t){return t.map((function(t){if("string"!==t.type)return t;switch(t.name){case"username":return Object.assign(Object.assign({},t),{},{autocomplete:"username"});case"password":return Object.assign(Object.assign({},t),{},{autocomplete:"current-password"});case"code":return Object.assign(Object.assign({},t),{},{autocomplete:"one-time-code"});default:return t}}))},c=function(t,n){return t.callWS({type:"auth/sign_path",path:n})},s=function(){return fetch("/auth/providers",{credentials:"same-origin"})},l=32143==e.j?(o=(0,i.Z)((0,r.Z)().mark((function t(n,e,i,o){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.callWS({type:"config/auth_provider/homeassistant/create",user_id:e,username:i,password:o}));case 1:case"end":return t.stop()}}),t)}))),function(t,n,e,r){return o.apply(this,arguments)}):null,d=function(t,n,e){return t.callWS({type:"config/auth_provider/homeassistant/change_password",current_password:n,new_password:e})},f=function(t,n,e){return t.callWS({type:"config/auth_provider/homeassistant/admin_change_password",user_id:n,password:e})},v=function(t){return t.callWS({type:"auth/delete_all_refresh_tokens"})}},56007:function(t,n,e){e.d(n,{PX:function(){return u},V_:function(){return a},lz:function(){return o},nZ:function(){return i},rk:function(){return s}});var r=e(57966),i="unavailable",o="unknown",u="off",a=[i,o],c=[i,o,u],s=(0,r.z)(a);(0,r.z)(c)},38014:function(t,n,e){if(e.d(n,{Cj:function(){return d},Hs:function(){return A},Kd:function(){return k},Kj:function(){return v},Nw:function(){return _},Py:function(){return a},Z0:function(){return y},_Y:function(){return s},_m:function(){return o},dL:function(){return c},dO:function(){return b},hN:function(){return f},h_:function(){return l},j2:function(){return g},q6:function(){return h},uR:function(){return u}}),98818!=e.j)var r=e(40039);var i=e(91741),o=function(t){return t.callWS({type:"recorder/info"})},u=function(t,n){return t.callWS({type:"recorder/list_statistic_ids",statistic_type:n})},a=function(t,n){return t.callWS({type:"recorder/get_statistics_metadata",statistic_ids:n})},c=function(t,n,e,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"hour",o=arguments.length>5?arguments[5]:void 0,u=arguments.length>6?arguments[6]:void 0;return t.callWS({type:"recorder/statistics_during_period",start_time:n.toISOString(),end_time:null==e?void 0:e.toISOString(),statistic_ids:r,period:i,units:o,types:u})},s=function(t,n,e,r){return t.callWS({type:"recorder/statistic_during_period",statistic_id:n,units:r,fixed_period:e.fixed_period?{start_time:e.fixed_period.start instanceof Date?e.fixed_period.start.toISOString():e.fixed_period.start,end_time:e.fixed_period.end instanceof Date?e.fixed_period.end.toISOString():e.fixed_period.end}:void 0,calendar:e.calendar,rolling_window:e.rolling_window})},l=function(t){return t.callWS({type:"recorder/validate_statistics"})},d=function(t,n,e){return t.callWS({type:"recorder/update_statistics_metadata",statistic_id:n,unit_of_measurement:e})},f=function(t,n){return t.callWS({type:"recorder/clear_statistics",statistic_ids:n})},v=function(t){var n=null;if(!t)return null;var e,i=(0,r.Z)(t);try{for(i.s();!(e=i.n()).done;){var o=e.value;null!==o.change&&void 0!==o.change&&(null===n?n=o.change:n+=o.change)}}catch(u){i.e(u)}finally{i.f()}return n},h=function(t,n){var e,i=null,o=(0,r.Z)(n);try{for(o.s();!(e=o.n()).done;){var u=e.value;if(u in t){var a=v(t[u]);null!==a&&(null===i?i=a:i+=a)}}}catch(c){o.e(c)}finally{o.f()}return i},_=function(t,n){return t.some((function(t){return void 0!==t[n]&&null!==t[n]}))},p=98818!=e.j?["mean","min","max"]:null,m=98818!=e.j?["sum","state","change"]:null,y=function(t,n){return!(!p.includes(n)||!t.has_mean)||!(!m.includes(n)||!t.has_sum)},g=function(t,n,e,r,i){var o=new Date(e).toISOString();return t.callWS({type:"recorder/adjust_sum_statistics",statistic_id:n,start_time:o,adjustment:r,adjustment_unit_of_measurement:i})},k=function(t,n,e){var r=t.states[n];return r?(0,i.C)(r):(null==e?void 0:e.name)||n},b=function(t,n,e){var r,i;n&&(r=null===(i=t.states[n])||void 0===i?void 0:i.attributes.unit_of_measurement);return void 0===r?null==e?void 0:e.statistics_unit_of_measurement:r},A=function(t){return t.includes(":")}},82160:function(t,n,e){function r(t){return new Promise((function(n,e){t.oncomplete=t.onsuccess=function(){return n(t.result)},t.onabort=t.onerror=function(){return e(t.error)}}))}function i(t,n){var e=indexedDB.open(t);e.onupgradeneeded=function(){return e.result.createObjectStore(n)};var i=r(e);return function(t,e){return i.then((function(r){return e(r.transaction(n,t).objectStore(n))}))}}var o;function u(){return o||(o=i("keyval-store","keyval")),o}function a(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:u())("readonly",(function(n){return r(n.get(t))}))}function c(t,n){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:u())("readwrite",(function(e){return e.put(n,t),r(e.transaction)}))}function s(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:u())("readwrite",(function(t){return t.clear(),r(t.transaction)}))}e.d(n,{MT:function(){return i},RV:function(){return r},U2:function(){return a},ZH:function(){return s},t8:function(){return c}})},19596:function(t,n,e){e.d(n,{sR:function(){return g}});var r=e(53709),i=e(71650),o=e(33368),u=e(34541),a=e(47838),c=e(69205),s=e(70906),l=e(40039),d=e(81563),f=e(38941),v=function t(n,e){var r,i,o=n._$AN;if(void 0===o)return!1;var u,a=(0,l.Z)(o);try{for(a.s();!(u=a.n()).done;){var c=u.value;null===(i=(r=c)._$AO)||void 0===i||i.call(r,e,!1),t(c,e)}}catch(s){a.e(s)}finally{a.f()}return!0},h=function(t){var n,e;do{if(void 0===(n=t._$AM))break;(e=n._$AN).delete(t),t=n}while(0===(null==e?void 0:e.size))},_=function(t){for(var n;n=t._$AM;t=n){var e=n._$AN;if(void 0===e)n._$AN=e=new Set;else if(e.has(t))break;e.add(t),y(n)}};function p(t){void 0!==this._$AN?(h(this),this._$AM=t,_(this)):this._$AM=t}function m(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(n)if(Array.isArray(r))for(var o=e;o<r.length;o++)v(r[o],!1),h(r[o]);else null!=r&&(v(r,!1),h(r));else v(this,t)}var y=function(t){var n,e,r,i;t.type==f.pX.CHILD&&(null!==(n=(r=t)._$AP)&&void 0!==n||(r._$AP=m),null!==(e=(i=t)._$AQ)&&void 0!==e||(i._$AQ=p))},g=function(t){(0,c.Z)(e,t);var n=(0,s.Z)(e);function e(){var t;return(0,i.Z)(this,e),(t=n.apply(this,arguments))._$AN=void 0,t}return(0,o.Z)(e,[{key:"_$AT",value:function(t,n,r){(0,u.Z)((0,a.Z)(e.prototype),"_$AT",this).call(this,t,n,r),_(this),this.isConnected=t._$AU}},{key:"_$AO",value:function(t){var n,e,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t!==this.isConnected&&(this.isConnected=t,t?null===(n=this.reconnected)||void 0===n||n.call(this):null===(e=this.disconnected)||void 0===e||e.call(this)),r&&(v(this,t),h(this))}},{key:"setValue",value:function(t){if((0,d.OR)(this._$Ct))this._$Ct._$AI(t,this);else{var n=(0,r.Z)(this._$Ct._$AH);n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}},{key:"disconnected",value:function(){}},{key:"reconnected",value:function(){}}]),e}(f.Xe)},81563:function(t,n,e){e.d(n,{E_:function(){return p},OR:function(){return c},_Y:function(){return l},dZ:function(){return a},fk:function(){return d},hN:function(){return u},hl:function(){return v},i9:function(){return h},pt:function(){return o},ws:function(){return _}});var r=e(76775),i=e(15304).Al.I,o=function(t){return null===t||"object"!=(0,r.Z)(t)&&"function"!=typeof t},u=function(t,n){return void 0===n?void 0!==(null==t?void 0:t._$litType$):(null==t?void 0:t._$litType$)===n},a=function(t){var n;return null!=(null===(n=null==t?void 0:t._$litType$)||void 0===n?void 0:n.h)},c=function(t){return void 0===t.strings},s=function(){return document.createComment("")},l=function(t,n,e){var r,o=t._$AA.parentNode,u=void 0===n?t._$AB:n._$AA;if(void 0===e){var a=o.insertBefore(s(),u),c=o.insertBefore(s(),u);e=new i(a,c,t,t.options)}else{var l,d=e._$AB.nextSibling,f=e._$AM,v=f!==t;if(v)null===(r=e._$AQ)||void 0===r||r.call(e,t),e._$AM=t,void 0!==e._$AP&&(l=t._$AU)!==f._$AU&&e._$AP(l);if(d!==u||v)for(var h=e._$AA;h!==d;){var _=h.nextSibling;o.insertBefore(h,u),h=_}}return e},d=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;return t._$AI(n,e),t},f={},v=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f;return t._$AH=n},h=function(t){return t._$AH},_=function(t){var n;null===(n=t._$AP)||void 0===n||n.call(t,!1,!0);for(var e=t._$AA,r=t._$AB.nextSibling;e!==r;){var i=e.nextSibling;e.remove(),e=i}},p=function(t){t._$AR()}}}]);
//# sourceMappingURL=13335-_Wi1IN9ZrBk.js.map