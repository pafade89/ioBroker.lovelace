"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[67029],{34821:function(i,e,t){t.d(e,{i:function(){return y}});var o,n,a,s=t(33368),d=t(71650),r=t(82390),l=t(69205),c=t(70906),h=t(91808),u=t(34541),v=t(47838),p=t(88962),g=t(87762),f=t(91632),_=t(68144),m=t(79932),b=t(74265),k=(t(10983),["button","ha-list-item"]),y=function(i,e){return(0,_.dy)(o||(o=(0,p.Z)([' <div class="header_title">','</div> <ha-icon-button .label="','" .path="','" dialogAction="close" class="header_button"></ha-icon-button> '])),e,i.localize("ui.dialogs.generic.close"),"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z")};(0,h.Z)([(0,m.Mo)("ha-dialog")],(function(i,e){var t=function(e){(0,l.Z)(o,e);var t=(0,c.Z)(o);function o(){var e;(0,d.Z)(this,o);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return e=t.call.apply(t,[this].concat(a)),i((0,r.Z)(e)),e}return(0,s.Z)(o)}(e);return{F:t,d:[{kind:"field",key:b.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(i,e){var t;null===(t=this.contentElement)||void 0===t||t.scrollTo(i,e)}},{kind:"method",key:"renderHeading",value:function(){return(0,_.dy)(n||(n=(0,p.Z)(['<slot name="heading"> '," </slot>"])),(0,u.Z)((0,v.Z)(t.prototype),"renderHeading",this).call(this))}},{kind:"method",key:"firstUpdated",value:function(){var i;(0,u.Z)((0,v.Z)(t.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,k].join(", "),this._updateScrolledAttribute(),null===(i=this.contentElement)||void 0===i||i.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,u.Z)((0,v.Z)(t.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value:function(){var i=this;return function(){i._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:function(){return[f.W,(0,_.iv)(a||(a=(0,p.Z)([":host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(\n          --dialog-scroll-divider-color,\n          var(--divider-color)\n        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter, none);backdrop-filter:var(--dialog-backdrop-filter, none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:nth-child(1){flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}"])))]}}]}}),g.M)},67029:function(i,e,t){t.r(e);var o,n,a,s,d,r,l,c=t(88962),h=t(99312),u=t(81043),v=t(33368),p=t(71650),g=t(82390),f=t(69205),_=t(70906),m=t(91808),b=t(34541),k=t(47838),y=(t(53918),t(68144)),L=t(79932),x=t(47181),Z=(t(31206),t(34821)),w=t(62770),C=t(11654);(0,m.Z)([(0,L.Mo)("dialog-zwave_js-remove-failed-node")],(function(i,e){var t,m,z=function(e){(0,f.Z)(o,e);var t=(0,_.Z)(o);function o(){var e;(0,p.Z)(this,o);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return e=t.call.apply(t,[this].concat(a)),i((0,g.Z)(e)),e}return(0,v.Z)(o)}(e);return{F:z,d:[{kind:"field",decorators:[(0,L.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,L.SB)()],key:"device_id",value:void 0},{kind:"field",decorators:[(0,L.SB)()],key:"_status",value:function(){return""}},{kind:"field",decorators:[(0,L.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,L.SB)()],key:"_node",value:void 0},{kind:"field",key:"_subscribed",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){(0,b.Z)((0,k.Z)(z.prototype),"disconnectedCallback",this).call(this),this._unsubscribe()}},{kind:"method",key:"showDialog",value:(m=(0,u.Z)((0,h.Z)().mark((function i(e){return(0,h.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:this.device_id=e.device_id;case 1:case"end":return i.stop()}}),i,this)}))),function(i){return m.apply(this,arguments)})},{kind:"method",key:"closeDialog",value:function(){this._unsubscribe(),this.device_id=void 0,this._status="",(0,x.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"closeDialogFinished",value:function(){history.back(),this.closeDialog()}},{kind:"method",key:"render",value:function(){return this.device_id?(0,y.dy)(o||(o=(0,c.Z)([' <ha-dialog open @closed="','" .heading="','"> '," "," "," "," </ha-dialog> "])),this.closeDialog,(0,Z.i)(this.hass,this.hass.localize("ui.panel.config.zwave_js.remove_failed_node.title")),""===this._status?(0,y.dy)(n||(n=(0,c.Z)([' <div class="flex-container"> <ha-svg-icon .path="','" class="introduction"></ha-svg-icon> <div class="status"> ',' </div> </div> <mwc-button slot="primaryAction" @click="','"> '," </mwc-button> "])),"M22 14H21C21 10.13 17.87 7 14 7H13V5.73C13.6 5.39 14 4.74 14 4C14 2.9 13.11 2 12 2S10 2.9 10 4C10 4.74 10.4 5.39 11 5.73V7H10C6.13 7 3 10.13 3 14H2C1.45 14 1 14.45 1 15V18C1 18.55 1.45 19 2 19H3V20C3 21.11 3.9 22 5 22H19C20.11 22 21 21.11 21 20V19H22C22.55 19 23 18.55 23 18V15C23 14.45 22.55 14 22 14M9.86 16.68L8.68 17.86L7.5 16.68L6.32 17.86L5.14 16.68L6.32 15.5L5.14 14.32L6.32 13.14L7.5 14.32L8.68 13.14L9.86 14.32L8.68 15.5L9.86 16.68M18.86 16.68L17.68 17.86L16.5 16.68L15.32 17.86L14.14 16.68L15.32 15.5L14.14 14.32L15.32 13.14L16.5 14.32L17.68 13.14L18.86 14.32L17.68 15.5L18.86 16.68Z",this.hass.localize("ui.panel.config.zwave_js.remove_failed_node.introduction"),this._startExclusion,this.hass.localize("ui.panel.config.zwave_js.remove_failed_node.remove_device")):"","started"===this._status?(0,y.dy)(a||(a=(0,c.Z)([' <div class="flex-container"> <ha-circular-progress active></ha-circular-progress> <div class="status"> <p> <b> '," </b> </p> </div> </div> "])),this.hass.localize("ui.panel.config.zwave_js.remove_failed_node.in_progress")):"","failed"===this._status?(0,y.dy)(s||(s=(0,c.Z)([' <div class="flex-container"> <ha-svg-icon .path="','" class="error"></ha-svg-icon> <div class="status"> <p> '," </p> ",' </div> </div> <mwc-button slot="primaryAction" @click="','"> '," </mwc-button> "])),"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",this.hass.localize("ui.panel.config.zwave_js.remove_failed_node.removal_failed"),this._error?(0,y.dy)(d||(d=(0,c.Z)([" <p><em> "," </em></p> "])),this._error.message):"",this.closeDialog,this.hass.localize("ui.common.close")):"","finished"===this._status?(0,y.dy)(r||(r=(0,c.Z)([' <div class="flex-container"> <ha-svg-icon .path="','" class="success"></ha-svg-icon> <div class="status"> <p> ',' </p> </div> </div> <mwc-button slot="primaryAction" @click="','"> '," </mwc-button> "])),"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",this.hass.localize("ui.panel.config.zwave_js.remove_failed_node.removal_finished","id",this._node.node_id),this.closeDialogFinished,this.hass.localize("ui.common.close")):""):y.Ld}},{kind:"method",key:"_startExclusion",value:function(){var i=this;this.hass&&(this._status="started",this._subscribed=(0,w.Hr)(this.hass,this.device_id,(function(e){return i._handleMessage(e)})).catch((function(e){i._status="failed",i._error=e})))}},{kind:"method",key:"_handleMessage",value:function(i){"exclusion started"===i.event&&(this._status="started"),"node removed"===i.event&&(this._status="finished",this._node=i.node,this._unsubscribe())}},{kind:"method",key:"_unsubscribe",value:(t=(0,u.Z)((0,h.Z)().mark((function i(){var e;return(0,h.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!this._subscribed){i.next=6;break}return i.next=3,this._subscribed;case 3:(e=i.sent)instanceof Function&&e(),this._subscribed=void 0;case 6:"finished"!==this._status&&(this._status="");case 7:case"end":return i.stop()}}),i,this)}))),function(){return t.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[C.yu,(0,y.iv)(l||(l=(0,c.Z)([".success{color:var(--success-color)}.failed{color:var(--warning-color)}.flex-container{display:flex;align-items:center}ha-svg-icon{width:68px;height:48px}.flex-container ha-circular-progress,.flex-container ha-svg-icon{margin-right:20px}"])))]}}]}}),y.oi)}}]);
//# sourceMappingURL=67029-UAWpzvsye6w.js.map