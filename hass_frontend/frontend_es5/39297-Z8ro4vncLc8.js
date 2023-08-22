"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[39297],{76680:function(e,t,i){function n(e){return void 0===e||Array.isArray(e)?e:[e]}i.d(t,{r:function(){return n}})},57966:function(e,t,i){i.d(t,{z:function(){return n}});var n=function(e){return function(t,i){return e.includes(t,i)}}},39197:function(e,t,i){i.d(t,{v:function(){return o}});var n=i(56007),a=i(58831);function o(e,t){var i=(0,a.M)(e.entity_id),o=void 0!==t?t:null==e?void 0:e.state;if(["button","event","input_button","scene"].includes(i))return o!==n.nZ;if((0,n.rk)(o))return!1;if(o===n.PX&&"alert"!==i)return!1;switch(i){case"alarm_control_panel":return"disarmed"!==o;case"alert":return"idle"!==o;case"cover":return"closed"!==o;case"device_tracker":case"person":return"not_home"!==o;case"lock":return"locked"!==o;case"media_player":return"standby"!==o;case"vacuum":return!["idle","docked","paused"].includes(o);case"plant":return"problem"===o;case"group":return["on","home","open","locked","problem"].includes(o);case"timer":return"active"===o;case"camera":return"streaming"===o}return!0}},33762:function(e,t,i){var n,a,o,r,s=i(99312),d=i(81043),l=i(88962),c=i(33368),u=i(71650),h=i(82390),f=i(69205),v=i(70906),p=i(91808),m=i(68144),g=i(79932),y=i(14516),_=i(76680),k=i(47181),b=i(85415),x=i(38014),Z=i(27322),w=(i(77576),i(52039),i(3143),i(40163));(0,p.Z)([(0,g.Mo)("ha-statistic-picker")],(function(e,t){var i,p=function(t){(0,f.Z)(n,t);var i=(0,v.Z)(n);function n(){var t;(0,u.Z)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=i.call.apply(i,[this].concat(o)),e((0,h.Z)(t)),t}return(0,c.Z)(n)}(t);return{F:p,d:[{kind:"field",decorators:[(0,g.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,g.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,g.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,g.Cb)({attribute:"statistic-types"})],key:"statisticTypes",value:void 0},{kind:"field",decorators:[(0,g.Cb)({type:Boolean,attribute:"allow-custom-entity"})],key:"allowCustomEntity",value:void 0},{kind:"field",decorators:[(0,g.Cb)({type:Array})],key:"statisticIds",value:void 0},{kind:"field",decorators:[(0,g.Cb)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,g.Cb)({type:Array,attribute:"include-statistics-unit-of-measurement"})],key:"includeStatisticsUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,g.Cb)({attribute:"include-unit-class"})],key:"includeUnitClass",value:void 0},{kind:"field",decorators:[(0,g.Cb)({attribute:"include-device-class"})],key:"includeDeviceClass",value:void 0},{kind:"field",decorators:[(0,g.Cb)({type:Boolean,attribute:"entities-only"})],key:"entitiesOnly",value:function(){return!1}},{kind:"field",decorators:[(0,g.SB)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,g.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_init",value:function(){return!1}},{kind:"field",key:"_statistics",value:function(){return[]}},{kind:"field",decorators:[(0,g.SB)()],key:"_filteredItems",value:function(){}},{kind:"field",key:"_rowRenderer",value:function(){var e=this;return function(t){return(0,m.dy)(n||(n=(0,l.Z)(['<mwc-list-item graphic="avatar" twoline> '," <span>",'</span> <span slot="secondary">',"</span> </mwc-list-item>"])),t.state?(0,m.dy)(a||(a=(0,l.Z)(['<state-badge slot="graphic" .stateObj="','"></state-badge>'])),t.state):"",t.name,""===t.id||"__missing"===t.id?(0,m.dy)(o||(o=(0,l.Z)(['<a target="_blank" rel="noopener noreferrer" href="','">',"</a>"])),(0,Z.R)(e.hass,"/more-info/statistics/"),e.hass.localize("ui.components.statistic-picker.learn_more")):t.id)}}},{kind:"field",key:"_getStatistics",value:function(){var e=this;return(0,y.Z)((function(t,i,n,a,o){if(!t.length)return[{id:"",name:e.hass.localize("ui.components.statistic-picker.no_statistics"),strings:[]}];if(i){var r=(0,_.r)(i);t=t.filter((function(e){return r.includes(e.statistics_unit_of_measurement)}))}if(n){var s=(0,_.r)(n);t=t.filter((function(e){return s.includes(e.unit_class)}))}if(a){var d=(0,_.r)(a);t=t.filter((function(t){var i=e.hass.states[t.statistic_id];return!i||d.includes(i.attributes.device_class||"")}))}var l=[];return t.forEach((function(t){var i=e.hass.states[t.statistic_id];if(i){var n=t.statistic_id,a=(0,x.Kd)(e.hass,t.statistic_id,t);l.push({id:n,name:a,state:i,strings:[n,a]})}else if(!o){var r=t.statistic_id,s=(0,x.Kd)(e.hass,t.statistic_id,t);l.push({id:r,name:s,strings:[r,s]})}})),l.length?(l.length>1&&l.sort((function(t,i){return(0,b.$)(t.name||"",i.name||"",e.hass.locale.language)})),l.push({id:"__missing",name:e.hass.localize("ui.components.statistic-picker.missing_entity"),strings:[]}),l):[{id:"",name:e.hass.localize("ui.components.statistic-picker.no_match"),strings:[]}]}))}},{kind:"method",key:"open",value:function(){var e;null===(e=this.comboBox)||void 0===e||e.open()}},{kind:"method",key:"focus",value:function(){var e;null===(e=this.comboBox)||void 0===e||e.focus()}},{kind:"method",key:"willUpdate",value:function(e){var t=this;(!this.hasUpdated&&!this.statisticIds||e.has("statisticTypes"))&&this._getStatisticIds(),(!this._init&&this.statisticIds||e.has("_opened")&&this._opened)&&(this._init=!0,this.hasUpdated?this._statistics=this._getStatistics(this.statisticIds,this.includeStatisticsUnitOfMeasurement,this.includeUnitClass,this.includeDeviceClass,this.entitiesOnly):this.updateComplete.then((function(){t._statistics=t._getStatistics(t.statisticIds,t.includeStatisticsUnitOfMeasurement,t.includeUnitClass,t.includeDeviceClass,t.entitiesOnly)})))}},{kind:"method",key:"render",value:function(){var e;return 0===this._statistics.length?m.Ld:(0,m.dy)(r||(r=(0,l.Z)([' <ha-combo-box .hass="','" .label="','" .value="','" .renderer="','" .disabled="','" .allowCustomValue="','" .items="','" .filteredItems="','" item-value-path="id" item-id-path="id" item-label-path="name" @opened-changed="','" @value-changed="','" @filter-changed="','"></ha-combo-box> '])),this.hass,void 0===this.label&&this.hass?this.hass.localize("ui.components.statistic-picker.statistic"):this.label,this._value,this._rowRenderer,this.disabled,this.allowCustomEntity,this._statistics,null!==(e=this._filteredItems)&&void 0!==e?e:this._statistics,this._openedChanged,this._statisticChanged,this._filterChanged)}},{kind:"method",key:"_getStatisticIds",value:(i=(0,d.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.uR)(this.hass,this.statisticTypes);case 2:this.statisticIds=e.sent;case 3:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_statisticChanged",value:function(e){e.stopPropagation();var t=e.detail.value;"__missing"===t&&(t=""),t!==this._value&&this._setValue(t)}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_filterChanged",value:function(e){var t=e.detail.value.toLowerCase();this._filteredItems=t.length?(0,w.q)(t,this._statistics):void 0}},{kind:"method",key:"_setValue",value:function(e){var t=this;this.value=e,setTimeout((function(){(0,k.B)(t,"value-changed",{value:e}),(0,k.B)(t,"change")}),0)}}]}}),m.oi)},32511:function(e,t,i){var n,a=i(88962),o=i(33368),r=i(71650),s=i(82390),d=i(69205),l=i(70906),c=i(91808),u=i(58417),h=i(39274),f=i(68144),v=i(79932);(0,c.Z)([(0,v.Mo)("ha-checkbox")],(function(e,t){var i=function(t){(0,d.Z)(n,t);var i=(0,l.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var a=arguments.length,o=new Array(a),d=0;d<a;d++)o[d]=arguments[d];return t=i.call.apply(i,[this].concat(o)),e((0,s.Z)(t)),t}return(0,o.Z)(n)}(t);return{F:i,d:[{kind:"field",static:!0,key:"styles",value:function(){return[h.W,(0,f.iv)(n||(n=(0,a.Z)([":host{--mdc-theme-secondary:var(--primary-color)}"])))]}}]}}),u.A)},77576:function(e,t,i){var n,a,o,r,s,d,l=i(99312),c=i(81043),u=i(33368),h=i(71650),f=i(82390),v=i(69205),p=i(70906),m=i(91808),g=i(34541),y=i(47838),_=i(88962),k=i(29530),b=(i(15681),i(53947)),x=i(68144),Z=i(79932),w=i(30153),C=i(47181);i(10983),i(73366),i(3555);(0,b.hC)("vaadin-combo-box-item",(0,x.iv)(n||(n=(0,_.Z)([':host{padding:0!important}:host([focused]:not([disabled])){background-color:rgba(var(--rgb-primary-text-color,0,0,0),.12)}:host([selected]:not([disabled])){background-color:transparent;color:var(--mdc-theme-primary);--mdc-ripple-color:var(--mdc-theme-primary);--mdc-theme-text-primary-on-background:var(--mdc-theme-primary)}:host([selected]:not([disabled])):before{background-color:var(--mdc-theme-primary);opacity:.12;content:"";position:absolute;top:0;left:0;width:100%;height:100%}:host([selected][focused]:not([disabled])):before{opacity:.24}:host(:hover:not([disabled])){background-color:transparent}[part=content]{width:100%}[part=checkmark]{display:none}']))));(0,m.Z)([(0,Z.Mo)("ha-combo-box")],(function(e,t){var i,n,m=function(t){(0,v.Z)(n,t);var i=(0,p.Z)(n);function n(){var t;(0,h.Z)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=i.call.apply(i,[this].concat(o)),e((0,f.Z)(t)),t}return(0,u.Z)(n)}(t);return{F:m,d:[{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"validationMessage",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean})],key:"invalid",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean})],key:"icon",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"items",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"filteredItems",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"dataProvider",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({attribute:"allow-custom-value",type:Boolean})],key:"allowCustomValue",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({attribute:"item-value-path"})],key:"itemValuePath",value:function(){return"value"}},{kind:"field",decorators:[(0,Z.Cb)({attribute:"item-label-path"})],key:"itemLabelPath",value:function(){return"label"}},{kind:"field",decorators:[(0,Z.Cb)({attribute:"item-id-path"})],key:"itemIdPath",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"renderer",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean})],key:"required",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean,reflect:!0,attribute:"opened"})],key:"opened",value:void 0},{kind:"field",decorators:[(0,Z.IO)("vaadin-combo-box-light",!0)],key:"_comboBox",value:void 0},{kind:"field",decorators:[(0,Z.IO)("ha-textfield",!0)],key:"_inputElement",value:void 0},{kind:"field",key:"_overlayMutationObserver",value:void 0},{kind:"field",key:"_bodyMutationObserver",value:void 0},{kind:"method",key:"open",value:(n=(0,c.Z)((0,l.Z)().mark((function e(){var t;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateComplete;case 2:null===(t=this._comboBox)||void 0===t||t.open();case 3:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{kind:"method",key:"focus",value:(i=(0,c.Z)((0,l.Z)().mark((function e(){var t,i;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateComplete;case 2:return e.next=4,null===(t=this._inputElement)||void 0===t?void 0:t.updateComplete;case 4:null===(i=this._inputElement)||void 0===i||i.focus();case 5:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{kind:"method",key:"disconnectedCallback",value:function(){(0,g.Z)((0,y.Z)(m.prototype),"disconnectedCallback",this).call(this),this._overlayMutationObserver&&(this._overlayMutationObserver.disconnect(),this._overlayMutationObserver=void 0),this._bodyMutationObserver&&(this._bodyMutationObserver.disconnect(),this._bodyMutationObserver=void 0)}},{kind:"get",key:"selectedItem",value:function(){return this._comboBox.selectedItem}},{kind:"method",key:"setInputValue",value:function(e){this._comboBox.value=e}},{kind:"method",key:"render",value:function(){var e;return(0,x.dy)(a||(a=(0,_.Z)([' <vaadin-combo-box-light .itemValuePath="','" .itemIdPath="','" .itemLabelPath="','" .items="','" .value="','" .filteredItems="','" .dataProvider="','" .allowCustomValue="','" .disabled="','" .required="','" ',' @opened-changed="','" @filter-changed="','" @value-changed="','" attr-for-value="value"> <ha-textfield label="','" placeholder="','" ?disabled="','" ?required="','" validationMessage="','" .errorMessage="','" class="input" autocapitalize="none" autocomplete="off" autocorrect="off" input-spellcheck="false" .suffix="','" .icon="','" .invalid="','" helper="','" helperPersistent> <slot name="icon" slot="leadingIcon"></slot> </ha-textfield> ',' <ha-svg-icon role="button" tabindex="-1" aria-label="','" aria-expanded="','" class="toggle-button" .path="','" @click="','"></ha-svg-icon> </vaadin-combo-box-light> '])),this.itemValuePath,this.itemIdPath,this.itemLabelPath,this.items,this.value||"",this.filteredItems,this.dataProvider,this.allowCustomValue,this.disabled,this.required,(0,k.t)(this.renderer||this._defaultRowRenderer),this._openedChanged,this._filterChanged,this._valueChanged,(0,w.o)(this.label),(0,w.o)(this.placeholder),this.disabled,this.required,(0,w.o)(this.validationMessage),this.errorMessage,(0,x.dy)(o||(o=(0,_.Z)(['<div style="width:28px" role="none presentation"></div>']))),this.icon,this.invalid,(0,w.o)(this.helper),this.value?(0,x.dy)(r||(r=(0,_.Z)(['<ha-svg-icon role="button" tabindex="-1" aria-label="','" class="clear-button" .path="','" @click="','"></ha-svg-icon>'])),(0,w.o)(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.clear")),"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",this._clearValue):"",(0,w.o)(this.label),this.opened?"true":"false",this.opened?"M7,15L12,10L17,15H7Z":"M7,10L12,15L17,10H7Z",this._toggleOpen)}},{kind:"field",key:"_defaultRowRenderer",value:function(){var e=this;return function(t){return(0,x.dy)(s||(s=(0,_.Z)(["<ha-list-item> "," </ha-list-item>"])),e.itemLabelPath?t[e.itemLabelPath]:t)}}},{kind:"method",key:"_clearValue",value:function(e){e.stopPropagation(),(0,C.B)(this,"value-changed",{value:void 0})}},{kind:"method",key:"_toggleOpen",value:function(e){var t,i;this.opened?(null===(t=this._comboBox)||void 0===t||t.close(),e.stopPropagation()):null===(i=this._comboBox)||void 0===i||i.inputElement.focus()}},{kind:"method",key:"_openedChanged",value:function(e){var t=this;e.stopPropagation();var i=e.detail.value;if(setTimeout((function(){t.opened=i}),0),(0,C.B)(this,"opened-changed",{value:e.detail.value}),i){var n=document.querySelector("vaadin-combo-box-overlay");n&&(n.setAttribute("required-vertical-space","0"),this._removeInert(n)),this._observeBody()}else{var a;null===(a=this._bodyMutationObserver)||void 0===a||a.disconnect(),this._bodyMutationObserver=void 0}}},{kind:"method",key:"_observeBody",value:function(){var e=this;"MutationObserver"in window&&!this._bodyMutationObserver&&(this._bodyMutationObserver=new MutationObserver((function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){"VAADIN-COMBO-BOX-OVERLAY"===t.nodeName&&e._removeInert(t)})),t.removedNodes.forEach((function(t){var i;"VAADIN-COMBO-BOX-OVERLAY"===t.nodeName&&(null===(i=e._overlayMutationObserver)||void 0===i||i.disconnect(),e._overlayMutationObserver=void 0)}))}))})),this._bodyMutationObserver.observe(document.body,{childList:!0}))}},{kind:"method",key:"_removeInert",value:function(e){var t,i=this;if(e.inert)return e.inert=!1,null===(t=this._overlayMutationObserver)||void 0===t||t.disconnect(),void(this._overlayMutationObserver=void 0);"MutationObserver"in window&&!this._overlayMutationObserver&&(this._overlayMutationObserver=new MutationObserver((function(e){e.forEach((function(e){if("inert"===e.attributeName){var t,n=e.target;if(n.inert)null===(t=i._overlayMutationObserver)||void 0===t||t.disconnect(),i._overlayMutationObserver=void 0,n.inert=!1}}))})),this._overlayMutationObserver.observe(e,{attributes:!0}))}},{kind:"method",key:"_filterChanged",value:function(e){e.stopPropagation(),(0,C.B)(this,"filter-changed",{value:e.detail.value})}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();var t=e.detail.value;t!==this.value&&(0,C.B)(this,"value-changed",{value:t||void 0})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,x.iv)(d||(d=(0,_.Z)([":host{display:block;width:100%}vaadin-combo-box-light{position:relative;--vaadin-combo-box-overlay-max-height:calc(45vh)}ha-textfield{width:100%}ha-textfield>ha-icon-button{--mdc-icon-button-size:24px;padding:2px;color:var(--secondary-text-color)}ha-svg-icon{color:var(--input-dropdown-icon-color);position:absolute;cursor:pointer}.toggle-button{right:12px;top:-10px;inset-inline-start:initial;inset-inline-end:12px;direction:var(--direction)}:host([opened]) .toggle-button{color:var(--primary-color)}.clear-button{--mdc-icon-size:20px;top:-7px;right:36px;inset-inline-start:initial;inset-inline-end:36px;direction:var(--direction)}"])))}}]}}),x.oi)},34821:function(e,t,i){i.d(t,{i:function(){return b}});var n,a,o,r=i(33368),s=i(71650),d=i(82390),l=i(69205),c=i(70906),u=i(91808),h=i(34541),f=i(47838),v=i(88962),p=i(87762),m=i(91632),g=i(68144),y=i(79932),_=i(74265),k=(i(10983),["button","ha-list-item"]),b=function(e,t){return(0,g.dy)(n||(n=(0,v.Z)([' <div class="header_title">','</div> <ha-icon-button .label="','" .path="','" dialogAction="close" class="header_button"></ha-icon-button> '])),t,e.localize("ui.dialogs.generic.close"),"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z")};(0,u.Z)([(0,y.Mo)("ha-dialog")],(function(e,t){var i=function(t){(0,l.Z)(n,t);var i=(0,c.Z)(n);function n(){var t;(0,s.Z)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=i.call.apply(i,[this].concat(o)),e((0,d.Z)(t)),t}return(0,r.Z)(n)}(t);return{F:i,d:[{kind:"field",key:_.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,t){var i;null===(i=this.contentElement)||void 0===i||i.scrollTo(e,t)}},{kind:"method",key:"renderHeading",value:function(){return(0,g.dy)(a||(a=(0,v.Z)(['<slot name="heading"> '," </slot>"])),(0,h.Z)((0,f.Z)(i.prototype),"renderHeading",this).call(this))}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,h.Z)((0,f.Z)(i.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,k].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,h.Z)((0,f.Z)(i.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value:function(){var e=this;return function(){e._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:function(){return[m.W,(0,g.iv)(o||(o=(0,v.Z)([":host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(\n          --dialog-scroll-divider-color,\n          var(--divider-color)\n        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter, none);backdrop-filter:var(--dialog-backdrop-filter, none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:nth-child(1){flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}"])))]}}]}}),p.M)},83927:function(e,t,i){var n,a=i(88962),o=i(33368),r=i(71650),s=i(82390),d=i(69205),l=i(70906),c=i(91808),u=i(8485),h=i(92038),f=i(68144),v=i(79932),p=i(47181);(0,c.Z)([(0,v.Mo)("ha-formfield")],(function(e,t){var i=function(t){(0,d.Z)(n,t);var i=(0,l.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var a=arguments.length,o=new Array(a),d=0;d<a;d++)o[d]=arguments[d];return t=i.call.apply(i,[this].concat(o)),e((0,s.Z)(t)),t}return(0,o.Z)(n)}(t);return{F:i,d:[{kind:"method",key:"_labelClick",value:function(){var e=this.input;if(e)switch(e.focus(),e.tagName){case"HA-CHECKBOX":case"HA-RADIO":if(e.disabled)break;e.checked=!e.checked,(0,p.B)(e,"change");break;default:e.click()}}},{kind:"field",static:!0,key:"styles",value:function(){return[h.W,(0,f.iv)(n||(n=(0,a.Z)([":host(:not([alignEnd])) ::slotted(ha-switch){margin-right:10px;margin-inline-end:10px;margin-inline-start:inline}.mdc-form-field>label{direction:var(--direction);margin-inline-start:0;margin-inline-end:auto;padding-inline-start:4px;padding-inline-end:0}"])))]}}]}}),u.a)},73366:function(e,t,i){i.d(t,{M:function(){return g}});var n,a=i(88962),o=i(33368),r=i(71650),s=i(82390),d=i(69205),l=i(70906),c=i(91808),u=i(34541),h=i(47838),f=i(61092),v=i(96762),p=i(68144),m=i(79932),g=(0,c.Z)([(0,m.Mo)("ha-list-item")],(function(e,t){var i=function(t){(0,d.Z)(n,t);var i=(0,l.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var a=arguments.length,o=new Array(a),d=0;d<a;d++)o[d]=arguments[d];return t=i.call.apply(i,[this].concat(o)),e((0,s.Z)(t)),t}return(0,o.Z)(n)}(t);return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,u.Z)((0,h.Z)(i.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[v.W,(0,p.iv)(n||(n=(0,a.Z)([":host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}"])))]}}]}}),f.K)},33220:function(e,t,i){var n,a=i(88962),o=i(33368),r=i(71650),s=i(82390),d=i(69205),l=i(70906),c=i(91808),u=i(35433),h=i(44973),f=i(68144),v=i(79932);(0,c.Z)([(0,v.Mo)("ha-radio")],(function(e,t){var i=function(t){(0,d.Z)(n,t);var i=(0,l.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var a=arguments.length,o=new Array(a),d=0;d<a;d++)o[d]=arguments[d];return t=i.call.apply(i,[this].concat(o)),e((0,s.Z)(t)),t}return(0,o.Z)(n)}(t);return{F:i,d:[{kind:"field",static:!0,key:"styles",value:function(){return[h.W,(0,f.iv)(n||(n=(0,a.Z)([":host{--mdc-theme-secondary:var(--primary-color)}"])))]}}]}}),u.J)},3555:function(e,t,i){var n,a,o,r,s=i(88962),d=i(33368),l=i(71650),c=i(82390),u=i(69205),h=i(70906),f=i(91808),v=i(34541),p=i(47838),m=i(42977),g=i(31338),y=i(68144),_=i(79932);(0,f.Z)([(0,_.Mo)("ha-textfield")],(function(e,t){var i=function(t){(0,u.Z)(n,t);var i=(0,h.Z)(n);function n(){var t;(0,l.Z)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=i.call.apply(i,[this].concat(o)),e((0,c.Z)(t)),t}return(0,d.Z)(n)}(t);return{F:i,d:[{kind:"field",decorators:[(0,_.Cb)({type:Boolean})],key:"invalid",value:void 0},{kind:"field",decorators:[(0,_.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,_.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"field",decorators:[(0,_.Cb)({type:Boolean})],key:"iconTrailing",value:void 0},{kind:"field",decorators:[(0,_.Cb)()],key:"autocomplete",value:void 0},{kind:"field",decorators:[(0,_.Cb)()],key:"autocorrect",value:void 0},{kind:"field",decorators:[(0,_.Cb)({attribute:"input-spellcheck"})],key:"inputSpellcheck",value:void 0},{kind:"field",decorators:[(0,_.IO)("input")],key:"formElement",value:void 0},{kind:"method",key:"updated",value:function(e){(0,v.Z)((0,p.Z)(i.prototype),"updated",this).call(this,e),(e.has("invalid")&&(this.invalid||void 0!==e.get("invalid"))||e.has("errorMessage"))&&(this.setCustomValidity(this.invalid?this.errorMessage||"Invalid":""),this.reportValidity()),e.has("autocomplete")&&(this.autocomplete?this.formElement.setAttribute("autocomplete",this.autocomplete):this.formElement.removeAttribute("autocomplete")),e.has("autocorrect")&&(this.autocorrect?this.formElement.setAttribute("autocorrect",this.autocorrect):this.formElement.removeAttribute("autocorrect")),e.has("inputSpellcheck")&&(this.inputSpellcheck?this.formElement.setAttribute("spellcheck",this.inputSpellcheck):this.formElement.removeAttribute("spellcheck"))}},{kind:"method",key:"renderIcon",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=t?"trailing":"leading";return(0,y.dy)(n||(n=(0,s.Z)([' <span class="mdc-text-field__icon mdc-text-field__icon--','" tabindex="','"> <slot name="','Icon"></slot> </span> '])),i,t?1:-1,i)}},{kind:"field",static:!0,key:"styles",value:function(){return[g.W,(0,y.iv)(a||(a=(0,s.Z)([".mdc-text-field__input{width:var(--ha-textfield-input-width,100%)}.mdc-text-field:not(.mdc-text-field--with-leading-icon){padding:var(--text-field-padding,0px 16px)}.mdc-text-field__affix--suffix{padding-left:var(--text-field-suffix-padding-left,12px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,12px);padding-inline-end:var(--text-field-suffix-padding-right,0px);direction:var(--direction)}.mdc-text-field--with-leading-icon{padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,16px);direction:var(--direction)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:var(--text-field-suffix-padding-left,0px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,0px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:var(--secondary-text-color)}.mdc-text-field__icon{color:var(--secondary-text-color)}.mdc-text-field__icon--leading{margin-inline-start:16px;margin-inline-end:8px;direction:var(--direction)}.mdc-text-field__icon--trailing{padding:var(--textfield-icon-trailing-padding,12px)}.mdc-floating-label:not(.mdc-floating-label--float-above){text-overflow:ellipsis;width:inherit;padding-right:30px;padding-inline-end:30px;padding-inline-start:initial;box-sizing:border-box;direction:var(--direction)}input{text-align:var(--text-field-text-align,start)}:host([no-spinner]) input::-webkit-inner-spin-button,:host([no-spinner]) input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}:host([no-spinner]) input[type=number]{-moz-appearance:textfield}.mdc-text-field__ripple{overflow:hidden}.mdc-text-field{overflow:var(--text-field-overflow)}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start);direction:var(--direction);text-align:var(--float-start)}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px - var(--text-field-suffix-padding-left,0px));inset-inline-start:calc(48px + var(--text-field-suffix-padding-left,0px))!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field__input[type=number]{direction:var(--direction)}.mdc-text-field__affix--prefix{padding-right:var(--text-field-prefix-padding-right,2px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:var(--mdc-text-field-label-ink-color)}"]))),"rtl"===document.dir?(0,y.iv)(o||(o=(0,s.Z)([".mdc-floating-label,.mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field__affix--suffix,.mdc-text-field__icon--leading,.mdc-text-field__input[type=number]{direction:rtl}"]))):(0,y.iv)(r||(r=(0,s.Z)([""])))]}}]}}),m.P)},22814:function(e,t,i){i.d(t,{TZ:function(){return d},W2:function(){return s},iI:function(){return r},oT:function(){return o}});var n=i(99312),a=i(81043),o=("".concat(location.protocol,"//").concat(location.host),function(e){return e.map((function(e){if("string"!==e.type)return e;switch(e.name){case"username":return Object.assign(Object.assign({},e),{},{autocomplete:"username"});case"password":return Object.assign(Object.assign({},e),{},{autocomplete:"current-password"});case"code":return Object.assign(Object.assign({},e),{},{autocomplete:"one-time-code"});default:return e}}))}),r=function(e,t){return e.callWS({type:"auth/sign_path",path:t})},s=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,i,a,o){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth_provider/homeassistant/create",user_id:i,username:a,password:o}));case 1:case"end":return e.stop()}}),e)})));return function(t,i,n,a){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,i,a){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth_provider/homeassistant/admin_change_password",user_id:i,password:a}));case 1:case"end":return e.stop()}}),e)})));return function(t,i,n){return e.apply(this,arguments)}}()},56007:function(e,t,i){i.d(t,{PX:function(){return r},V_:function(){return s},lz:function(){return o},nZ:function(){return a},rk:function(){return l}});var n=i(57966),a="unavailable",o="unknown",r="off",s=[a,o],d=[a,o,r],l=(0,n.z)(s);(0,n.z)(d)},87651:function(e,t,i){i.r(t),i.d(t,{DialogEnergySolarSettings:function(){return B}});var n,a,o,r,s,d,l,c=i(88962),u=i(99312),h=i(81043),f=i(33368),v=i(71650),p=i(82390),m=i(69205),g=i(70906),y=i(91808),_=(i(53918),i(68144)),k=i(79932),b=i(47181),x=(i(33762),i(32511),i(34821),i(83927),i(33220),i(81582)),Z=i(55424),w=i(41499),C=i(2852),M=i(11654),O=i(11254),L=["energy"],B=(0,y.Z)([(0,k.Mo)("dialog-energy-solar-settings")],(function(e,t){var i,y,B,I=function(t){(0,m.Z)(n,t);var i=(0,g.Z)(n);function n(){var t;(0,v.Z)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=i.call.apply(i,[this].concat(o)),e((0,p.Z)(t)),t}return(0,f.Z)(n)}(t);return{F:I,d:[{kind:"field",decorators:[(0,k.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,k.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,k.SB)()],key:"_source",value:void 0},{kind:"field",decorators:[(0,k.SB)()],key:"_configEntries",value:void 0},{kind:"field",decorators:[(0,k.SB)()],key:"_forecast",value:void 0},{kind:"field",decorators:[(0,k.SB)()],key:"_energy_units",value:void 0},{kind:"field",decorators:[(0,k.SB)()],key:"_error",value:void 0},{kind:"method",key:"showDialog",value:(B=(0,h.Z)((0,u.Z)().mark((function e(t){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._params=t,this._fetchSolarForecastConfigEntries(),this._source=t.source?Object.assign({},t.source):(0,Z.rl)(),this._forecast=null!==this._source.config_entry_solar_forecast,e.next=6,(0,w.J9)(this.hass,"energy");case 6:this._energy_units=e.sent.units;case 7:case"end":return e.stop()}}),e,this)}))),function(e){return B.apply(this,arguments)})},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,this._source=void 0,this._error=void 0,(0,b.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var e,t,i=this;if(!this._params||!this._source)return _.Ld;var l=(null===(e=this._energy_units)||void 0===e?void 0:e.join(", "))||"";return(0,_.dy)(n||(n=(0,c.Z)([' <ha-dialog open .heading="','" @closed="','"> '," <div> ",' </div> <ha-statistic-picker .hass="','" .includeUnitClass="','" .value="','" .label="','" @value-changed="','" dialogInitialFocus></ha-statistic-picker> <h3> '," </h3> <p> ",' </p> <ha-formfield label="','"> <ha-radio value="false" name="forecast" .checked="','" @change="','"></ha-radio> </ha-formfield> <ha-formfield label="','"> <ha-radio value="true" name="forecast" .checked="','" @change="','"></ha-radio> </ha-formfield> ',' <mwc-button @click="','" slot="secondaryAction"> ',' </mwc-button> <mwc-button @click="','" .disabled="','" slot="primaryAction"> '," </mwc-button> </ha-dialog> "])),(0,_.dy)(a||(a=(0,c.Z)(['<ha-svg-icon .path="','" style="--mdc-icon-size:32px"></ha-svg-icon> ',""])),"M11.45,2V5.55L15,3.77L11.45,2M10.45,8L8,10.46L11.75,11.71L10.45,8M2,11.45L3.77,15L5.55,11.45H2M10,2H2V10C2.57,10.17 3.17,10.25 3.77,10.25C7.35,10.26 10.26,7.35 10.27,3.75C10.26,3.16 10.17,2.57 10,2M17,22V16H14L19,7V13H22L17,22Z",this.hass.localize("ui.panel.config.energy.solar.dialog.header")),this.closeDialog,this._error?(0,_.dy)(o||(o=(0,c.Z)(['<p class="error">',"</p>"])),this._error):"",this.hass.localize("ui.panel.config.energy.solar.dialog.entity_para",{unit:l}),this.hass,L,this._source.stat_energy_from,this.hass.localize("ui.panel.config.energy.solar.dialog.solar_production_energy"),this._statisticChanged,this.hass.localize("ui.panel.config.energy.solar.dialog.solar_production_forecast"),this.hass.localize("ui.panel.config.energy.solar.dialog.solar_production_forecast_description"),this.hass.localize("ui.panel.config.energy.solar.dialog.dont_forecast_production"),!this._forecast,this._handleForecastChanged,this.hass.localize("ui.panel.config.energy.solar.dialog.forecast_production"),this._forecast,this._handleForecastChanged,this._forecast?(0,_.dy)(r||(r=(0,c.Z)(['<div class="forecast-options"> ',' <mwc-button @click="','"> '," </mwc-button> </div>"])),null===(t=this._configEntries)||void 0===t?void 0:t.map((function(e){var t,n;return(0,_.dy)(s||(s=(0,c.Z)(['<ha-formfield .label="','"> <ha-checkbox .entry="','" @change="','" .checked="','"> </ha-checkbox> </ha-formfield>'])),(0,_.dy)(d||(d=(0,c.Z)(['<div style="display:flex;align-items:center"> <img alt="" referrerpolicy="no-referrer" style="height:24px;margin-right:16px" src="','">'," </div>"])),(0,O.X1)({domain:e.domain,type:"icon",darkOptimized:null===(t=i.hass.themes)||void 0===t?void 0:t.darkMode}),e.title),e,i._forecastCheckChanged,null===(n=i._source)||void 0===n||null===(n=n.config_entry_solar_forecast)||void 0===n?void 0:n.includes(e.entry_id))})),this._addForecast,this.hass.localize("ui.panel.config.energy.solar.dialog.add_forecast")):"",this.closeDialog,this.hass.localize("ui.common.cancel"),this._save,!this._source.stat_energy_from,this.hass.localize("ui.common.save"))}},{kind:"method",key:"_fetchSolarForecastConfigEntries",value:(y=(0,h.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(t=this._params.info.solar_forecast_domains).length){e.next=5;break}e.t0=[],e.next=15;break;case 5:if(1!==t.length){e.next=11;break}return e.next=8,(0,x.pB)(this.hass,{type:["service"],domain:t[0]});case 8:e.t1=e.sent,e.next=14;break;case 11:return e.next=13,(0,x.pB)(this.hass,{type:["service"]});case 13:e.t1=e.sent.filter((function(e){return t.includes(e.domain)}));case 14:e.t0=e.t1;case 15:this._configEntries=e.t0;case 16:case"end":return e.stop()}}),e,this)}))),function(){return y.apply(this,arguments)})},{kind:"method",key:"_handleForecastChanged",value:function(e){var t=e.currentTarget;this._forecast="true"===t.value}},{kind:"method",key:"_forecastCheckChanged",value:function(e){var t=e.currentTarget,i=t.entry;t.checked?(null===this._source.config_entry_solar_forecast&&(this._source.config_entry_solar_forecast=[]),this._source.config_entry_solar_forecast.push(i.entry_id)):this._source.config_entry_solar_forecast.splice(this._source.config_entry_solar_forecast.indexOf(i.entry_id),1)}},{kind:"method",key:"_addForecast",value:function(){var e=this;(0,C.t)(this,{startFlowHandler:"forecast_solar",dialogClosedCallback:function(t){t.entryId&&(null===e._source.config_entry_solar_forecast&&(e._source.config_entry_solar_forecast=[]),e._source.config_entry_solar_forecast.push(t.entryId),e._fetchSolarForecastConfigEntries())}})}},{kind:"method",key:"_statisticChanged",value:function(e){this._source=Object.assign(Object.assign({},this._source),{},{stat_energy_from:e.detail.value})}},{kind:"method",key:"_save",value:(i=(0,h.Z)((0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this._forecast||(this._source.config_entry_solar_forecast=null),e.next=4,this._params.saveCallback(this._source);case 4:this.closeDialog(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this._error=e.t0.message;case 10:case"end":return e.stop()}}),e,this,[[0,7]])}))),function(){return i.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[M.Qx,M.yu,(0,_.iv)(l||(l=(0,c.Z)(["ha-dialog{--mdc-dialog-max-width:430px}img{height:24px;margin-right:16px}ha-formfield{display:block}ha-statistic-picker{width:100%}.forecast-options{padding-left:32px}.forecast-options mwc-button{padding-left:8px}"])))]}}]}}),_.oi)}}]);
//# sourceMappingURL=39297-Z8ro4vncLc8.js.map