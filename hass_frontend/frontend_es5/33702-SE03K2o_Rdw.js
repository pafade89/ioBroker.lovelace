"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[33702],{76680:function(t,e,i){function n(t){return void 0===t||Array.isArray(t)?t:[t]}i.d(e,{r:function(){return n}})},57966:function(t,e,i){i.d(e,{z:function(){return n}});var n=function(t){return function(e,i){return t.includes(e,i)}}},39197:function(t,e,i){i.d(e,{v:function(){return s}});var n=i(56007),a=i(58831);function s(t,e){var i=(0,a.M)(t.entity_id),s=void 0!==e?e:null==t?void 0:t.state;if(["button","event","input_button","scene"].includes(i))return s!==n.nZ;if((0,n.rk)(s))return!1;if(s===n.PX&&"alert"!==i)return!1;switch(i){case"alarm_control_panel":return"disarmed"!==s;case"alert":return"idle"!==s;case"cover":return"closed"!==s;case"device_tracker":case"person":return"not_home"!==s;case"lawn_mower":return["mowing","error"].includes(s);case"lock":return"locked"!==s;case"media_player":return"standby"!==s;case"vacuum":return!["idle","docked","paused"].includes(s);case"plant":return"problem"===s;case"group":return["on","home","open","locked","problem"].includes(s);case"timer":return"active"===s;case"camera":return"streaming"===s}return!0}},33762:function(t,e,i){var n,a,s,r,o=i(99312),c=i(81043),d=i(88962),l=i(33368),u=i(71650),h=i(82390),v=i(69205),f=i(70906),p=i(91808),m=i(68144),g=i(79932),_=i(14516),k=i(76680),y=i(47181),b=i(85415),Z=i(38014),x=i(27322),C=(i(77576),i(52039),i(3143),i(40163));(0,p.Z)([(0,g.Mo)("ha-statistic-picker")],(function(t,e){var i,p=function(e){(0,v.Z)(n,e);var i=(0,f.Z)(n);function n(){var e;(0,u.Z)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return e=i.call.apply(i,[this].concat(s)),t((0,h.Z)(e)),e}return(0,l.Z)(n)}(e);return{F:p,d:[{kind:"field",decorators:[(0,g.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,g.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,g.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,g.Cb)({attribute:"statistic-types"})],key:"statisticTypes",value:void 0},{kind:"field",decorators:[(0,g.Cb)({type:Boolean,attribute:"allow-custom-entity"})],key:"allowCustomEntity",value:void 0},{kind:"field",decorators:[(0,g.Cb)({type:Array})],key:"statisticIds",value:void 0},{kind:"field",decorators:[(0,g.Cb)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,g.Cb)({type:Array,attribute:"include-statistics-unit-of-measurement"})],key:"includeStatisticsUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,g.Cb)({attribute:"include-unit-class"})],key:"includeUnitClass",value:void 0},{kind:"field",decorators:[(0,g.Cb)({attribute:"include-device-class"})],key:"includeDeviceClass",value:void 0},{kind:"field",decorators:[(0,g.Cb)({type:Boolean,attribute:"entities-only"})],key:"entitiesOnly",value:function(){return!1}},{kind:"field",decorators:[(0,g.Cb)({type:Array,attribute:"exclude-statistics"})],key:"excludeStatistics",value:void 0},{kind:"field",decorators:[(0,g.SB)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,g.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_init",value:function(){return!1}},{kind:"field",key:"_statistics",value:function(){return[]}},{kind:"field",decorators:[(0,g.SB)()],key:"_filteredItems",value:function(){}},{kind:"field",key:"_rowRenderer",value:function(){var t=this;return function(e){return(0,m.dy)(n||(n=(0,d.Z)(['<mwc-list-item graphic="avatar" twoline> '," <span>",'</span> <span slot="secondary">',"</span> </mwc-list-item>"])),e.state?(0,m.dy)(a||(a=(0,d.Z)(['<state-badge slot="graphic" .stateObj="','"></state-badge>'])),e.state):"",e.name,""===e.id||"__missing"===e.id?(0,m.dy)(s||(s=(0,d.Z)(['<a target="_blank" rel="noopener noreferrer" href="','">',"</a>"])),(0,x.R)(t.hass,"/more-info/statistics/"),t.hass.localize("ui.components.statistic-picker.learn_more")):e.id)}}},{kind:"field",key:"_getStatistics",value:function(){var t=this;return(0,_.Z)((function(e,i,n,a,s,r){if(!e.length)return[{id:"",name:t.hass.localize("ui.components.statistic-picker.no_statistics"),strings:[]}];if(i){var o=(0,k.r)(i);e=e.filter((function(t){return o.includes(t.statistics_unit_of_measurement)}))}if(n){var c=(0,k.r)(n);e=e.filter((function(t){return c.includes(t.unit_class)}))}if(a){var d=(0,k.r)(a);e=e.filter((function(e){var i=t.hass.states[e.statistic_id];return!i||d.includes(i.attributes.device_class||"")}))}var l=[];return e.forEach((function(e){if(!r||!r.includes(e.statistic_id)){var i=t.hass.states[e.statistic_id];if(i){var n=e.statistic_id,a=(0,Z.Kd)(t.hass,e.statistic_id,e);l.push({id:n,name:a,state:i,strings:[n,a]})}else if(!s){var o=e.statistic_id,c=(0,Z.Kd)(t.hass,e.statistic_id,e);l.push({id:o,name:c,strings:[o,c]})}}})),l.length?(l.length>1&&l.sort((function(e,i){return(0,b.$)(e.name||"",i.name||"",t.hass.locale.language)})),l.push({id:"__missing",name:t.hass.localize("ui.components.statistic-picker.missing_entity"),strings:[]}),l):[{id:"",name:t.hass.localize("ui.components.statistic-picker.no_match"),strings:[]}]}))}},{kind:"method",key:"open",value:function(){var t;null===(t=this.comboBox)||void 0===t||t.open()}},{kind:"method",key:"focus",value:function(){var t;null===(t=this.comboBox)||void 0===t||t.focus()}},{kind:"method",key:"willUpdate",value:function(t){var e=this;(!this.hasUpdated&&!this.statisticIds||t.has("statisticTypes"))&&this._getStatisticIds(),(!this._init&&this.statisticIds||t.has("_opened")&&this._opened)&&(this._init=!0,this.hasUpdated?this._statistics=this._getStatistics(this.statisticIds,this.includeStatisticsUnitOfMeasurement,this.includeUnitClass,this.includeDeviceClass,this.entitiesOnly,this.excludeStatistics):this.updateComplete.then((function(){e._statistics=e._getStatistics(e.statisticIds,e.includeStatisticsUnitOfMeasurement,e.includeUnitClass,e.includeDeviceClass,e.entitiesOnly,e.excludeStatistics)})))}},{kind:"method",key:"render",value:function(){var t;return 0===this._statistics.length?m.Ld:(0,m.dy)(r||(r=(0,d.Z)([' <ha-combo-box .hass="','" .label="','" .value="','" .renderer="','" .disabled="','" .allowCustomValue="','" .items="','" .filteredItems="','" item-value-path="id" item-id-path="id" item-label-path="name" @opened-changed="','" @value-changed="','" @filter-changed="','"></ha-combo-box> '])),this.hass,void 0===this.label&&this.hass?this.hass.localize("ui.components.statistic-picker.statistic"):this.label,this._value,this._rowRenderer,this.disabled,this.allowCustomEntity,this._statistics,null!==(t=this._filteredItems)&&void 0!==t?t:this._statistics,this._openedChanged,this._statisticChanged,this._filterChanged)}},{kind:"method",key:"_getStatisticIds",value:(i=(0,c.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,Z.uR)(this.hass,this.statisticTypes);case 2:this.statisticIds=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_statisticChanged",value:function(t){t.stopPropagation();var e=t.detail.value;"__missing"===e&&(e=""),e!==this._value&&this._setValue(e)}},{kind:"method",key:"_openedChanged",value:function(t){this._opened=t.detail.value}},{kind:"method",key:"_filterChanged",value:function(t){var e=t.detail.value.toLowerCase();this._filteredItems=e.length?(0,C.q)(e,this._statistics):void 0}},{kind:"method",key:"_setValue",value:function(t){var e=this;this.value=t,setTimeout((function(){(0,y.B)(e,"value-changed",{value:t}),(0,y.B)(e,"change")}),0)}}]}}),m.oi)},34821:function(t,e,i){i.d(e,{i:function(){return b}});var n,a,s,r=i(33368),o=i(71650),c=i(82390),d=i(69205),l=i(70906),u=i(91808),h=i(34541),v=i(47838),f=i(88962),p=i(87762),m=i(91632),g=i(68144),_=i(79932),k=i(74265),y=(i(10983),["button","ha-list-item"]),b=function(t,e){var i;return(0,g.dy)(n||(n=(0,f.Z)([' <div class="header_title">','</div> <ha-icon-button .label="','" .path="','" dialogAction="close" class="header_button"></ha-icon-button> '])),e,null!==(i=null==t?void 0:t.localize("ui.dialogs.generic.close"))&&void 0!==i?i:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z")};(0,u.Z)([(0,_.Mo)("ha-dialog")],(function(t,e){var i=function(e){(0,d.Z)(n,e);var i=(0,l.Z)(n);function n(){var e;(0,o.Z)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return e=i.call.apply(i,[this].concat(s)),t((0,c.Z)(e)),e}return(0,r.Z)(n)}(e);return{F:i,d:[{kind:"field",key:k.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(t,e){var i;null===(i=this.contentElement)||void 0===i||i.scrollTo(t,e)}},{kind:"method",key:"renderHeading",value:function(){return(0,g.dy)(a||(a=(0,f.Z)(['<slot name="heading"> '," </slot>"])),(0,h.Z)((0,v.Z)(i.prototype),"renderHeading",this).call(this))}},{kind:"method",key:"firstUpdated",value:function(){var t;(0,h.Z)((0,v.Z)(i.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,y].join(", "),this._updateScrolledAttribute(),null===(t=this.contentElement)||void 0===t||t.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,h.Z)((0,v.Z)(i.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value:function(){var t=this;return function(){t._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:function(){return[m.W,(0,g.iv)(s||(s=(0,f.Z)([":host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(\n          --dialog-scroll-divider-color,\n          var(--divider-color)\n        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter, none);backdrop-filter:var(--dialog-backdrop-filter, none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:nth-child(1){flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}"])))]}}]}}),p.M)},83927:function(t,e,i){var n,a=i(88962),s=i(33368),r=i(71650),o=i(82390),c=i(69205),d=i(70906),l=i(91808),u=i(8485),h=i(92038),v=i(68144),f=i(79932),p=i(47181);(0,l.Z)([(0,f.Mo)("ha-formfield")],(function(t,e){var i=function(e){(0,c.Z)(n,e);var i=(0,d.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return e=i.call.apply(i,[this].concat(s)),t((0,o.Z)(e)),e}return(0,s.Z)(n)}(e);return{F:i,d:[{kind:"method",key:"_labelClick",value:function(){var t=this.input;if(t)switch(t.focus(),t.tagName){case"HA-CHECKBOX":case"HA-RADIO":if(t.disabled)break;t.checked=!t.checked,(0,p.B)(t,"change");break;default:t.click()}}},{kind:"field",static:!0,key:"styles",value:function(){return[h.W,(0,v.iv)(n||(n=(0,a.Z)([":host(:not([alignEnd])) ::slotted(ha-switch){margin-right:10px;margin-inline-end:10px;margin-inline-start:inline}.mdc-form-field>label{direction:var(--direction);margin-inline-start:0;margin-inline-end:auto;padding-inline-start:4px;padding-inline-end:0}"])))]}}]}}),u.a)},33220:function(t,e,i){var n,a=i(88962),s=i(33368),r=i(71650),o=i(82390),c=i(69205),d=i(70906),l=i(91808),u=i(35433),h=i(44973),v=i(68144),f=i(79932);(0,l.Z)([(0,f.Mo)("ha-radio")],(function(t,e){var i=function(e){(0,c.Z)(n,e);var i=(0,d.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return e=i.call.apply(i,[this].concat(s)),t((0,o.Z)(e)),e}return(0,s.Z)(n)}(e);return{F:i,d:[{kind:"field",static:!0,key:"styles",value:function(){return[h.W,(0,v.iv)(n||(n=(0,a.Z)([":host{--mdc-theme-secondary:var(--primary-color)}"])))]}}]}}),u.J)},22814:function(t,e,i){i.d(e,{Cp:function(){return c},TZ:function(){return d},W2:function(){return o},YY:function(){return l},iI:function(){return r},oT:function(){return s}});var n=i(99312),a=i(81043),s=("".concat(location.protocol,"//").concat(location.host),function(t){return t.map((function(t){if("string"!==t.type)return t;switch(t.name){case"username":return Object.assign(Object.assign({},t),{},{autocomplete:"username"});case"password":return Object.assign(Object.assign({},t),{},{autocomplete:"current-password"});case"code":return Object.assign(Object.assign({},t),{},{autocomplete:"one-time-code"});default:return t}}))}),r=function(t,e){return t.callWS({type:"auth/sign_path",path:e})},o=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e,i,a,s){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS({type:"config/auth_provider/homeassistant/create",user_id:i,username:a,password:s}));case 1:case"end":return t.stop()}}),t)})));return function(e,i,n,a){return t.apply(this,arguments)}}(),c=function(t,e,i){return t.callWS({type:"config/auth_provider/homeassistant/change_password",current_password:e,new_password:i})},d=function(t,e,i){return t.callWS({type:"config/auth_provider/homeassistant/admin_change_password",user_id:e,password:i})},l=function(t){return t.callWS({type:"auth/delete_all_refresh_tokens"})}},56007:function(t,e,i){i.d(e,{PX:function(){return r},V_:function(){return o},lz:function(){return s},nZ:function(){return a},rk:function(){return d}});var n=i(57966),a="unavailable",s="unknown",r="off",o=[a,s],c=[a,s,r],d=(0,n.z)(o);(0,n.z)(c)},74936:function(t,e,i){i.r(e),i.d(e,{DialogEnergyDeviceSettings:function(){return Z}});var n,a,s,r,o=i(88962),c=i(99312),d=i(81043),l=i(33368),u=i(71650),h=i(82390),v=i(69205),f=i(70906),p=i(91808),m=(i(53918),i(68144)),g=i(79932),_=i(47181),k=(i(74535),i(33762),i(34821),i(83927),i(33220),i(41499)),y=i(11654),b=["energy"],Z=(0,p.Z)([(0,g.Mo)("dialog-energy-device-settings")],(function(t,e){var i,p,Z=function(e){(0,v.Z)(n,e);var i=(0,f.Z)(n);function n(){var e;(0,u.Z)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return e=i.call.apply(i,[this].concat(s)),t((0,h.Z)(e)),e}return(0,l.Z)(n)}(e);return{F:Z,d:[{kind:"field",decorators:[(0,g.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,g.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,g.SB)()],key:"_device",value:void 0},{kind:"field",decorators:[(0,g.SB)()],key:"_energy_units",value:void 0},{kind:"field",decorators:[(0,g.SB)()],key:"_error",value:void 0},{kind:"field",key:"_excludeList",value:void 0},{kind:"method",key:"showDialog",value:(p=(0,d.Z)((0,c.Z)().mark((function t(e){return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this._params=e,t.next=3,(0,k.J9)(this.hass,"energy");case 3:this._energy_units=t.sent.units,this._excludeList=this._params.device_consumptions.map((function(t){return t.stat_consumption}));case 5:case"end":return t.stop()}}),t,this)}))),function(t){return p.apply(this,arguments)})},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,this._device=void 0,this._error=void 0,this._excludeList=void 0,(0,_.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var t;if(!this._params)return m.Ld;var e=(null===(t=this._energy_units)||void 0===t?void 0:t.join(", "))||"";return(0,m.dy)(n||(n=(0,o.Z)([' <ha-dialog open .heading="','" @closed="','"> '," <div> ",' </div> <ha-statistic-picker .hass="','" .includeUnitClass="','" .label="','" .excludeStatistics="','" @value-changed="','" dialogInitialFocus></ha-statistic-picker> <mwc-button @click="','" slot="secondaryAction"> ',' </mwc-button> <mwc-button @click="','" .disabled="','" slot="primaryAction"> '," </mwc-button> </ha-dialog> "])),(0,m.dy)(a||(a=(0,o.Z)(['<ha-svg-icon .path="','" style="--mdc-icon-size:32px"></ha-svg-icon> ',""])),"M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6M13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16S13.61 14.33 13 13.78V12M11 17.5C10.17 17.5 9.5 16.83 9.5 16S10.17 14.5 11 14.5 12.5 15.17 12.5 16 11.83 17.5 11 17.5M22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8M21 18H17V10H21V18Z",this.hass.localize("ui.panel.config.energy.device_consumption.dialog.header")),this.closeDialog,this._error?(0,m.dy)(s||(s=(0,o.Z)(['<p class="error">',"</p>"])),this._error):"",this.hass.localize("ui.panel.config.energy.device_consumption.dialog.selected_stat_intro",{unit:e}),this.hass,b,this.hass.localize("ui.panel.config.energy.device_consumption.dialog.device_consumption_energy"),this._excludeList,this._statisticChanged,this.closeDialog,this.hass.localize("ui.common.cancel"),this._save,!this._device,this.hass.localize("ui.common.save"))}},{kind:"method",key:"_statisticChanged",value:function(t){t.detail.value?this._device={stat_consumption:t.detail.value}:this._device=void 0}},{kind:"method",key:"_save",value:(i=(0,d.Z)((0,c.Z)().mark((function t(){return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this._params.saveCallback(this._device);case 3:this.closeDialog(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),this._error=t.t0.message;case 9:case"end":return t.stop()}}),t,this,[[0,6]])}))),function(){return i.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[y.yu,(0,m.iv)(r||(r=(0,o.Z)(["ha-statistic-picker{width:100%}"])))]}}]}}),m.oi)}}]);
//# sourceMappingURL=33702-SE03K2o_Rdw.js.map