"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[11047],{18601:function(t,e,n){n.d(e,{Wg:function(){return v},qN:function(){return p.q}});var i,r,o=n(71650),a=n(33368),s=n(34541),c=n(47838),l=n(69205),d=n(70906),u=n(43204),h=n(79932),p=n(78220),f=null!==(r=null===(i=window.ShadyDOM)||void 0===i?void 0:i.inUse)&&void 0!==r&&r,v=function(t){(0,l.Z)(n,t);var e=(0,d.Z)(n);function n(){var t;return(0,o.Z)(this,n),(t=e.apply(this,arguments)).disabled=!1,t.containingForm=null,t.formDataListener=function(e){t.disabled||t.setFormData(e.formData)},t}return(0,a.Z)(n,[{key:"findFormElement",value:function(){if(!this.shadowRoot||f)return null;for(var t=this.getRootNode().querySelectorAll("form"),e=0,n=Array.from(t);e<n.length;e++){var i=n[e];if(i.contains(this))return i}return null}},{key:"connectedCallback",value:function(){var t;(0,s.Z)((0,c.Z)(n.prototype),"connectedCallback",this).call(this),this.containingForm=this.findFormElement(),null===(t=this.containingForm)||void 0===t||t.addEventListener("formdata",this.formDataListener)}},{key:"disconnectedCallback",value:function(){var t;(0,s.Z)((0,c.Z)(n.prototype),"disconnectedCallback",this).call(this),null===(t=this.containingForm)||void 0===t||t.removeEventListener("formdata",this.formDataListener),this.containingForm=null}},{key:"click",value:function(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}},{key:"firstUpdated",value:function(){var t=this;(0,s.Z)((0,c.Z)(n.prototype),"firstUpdated",this).call(this),this.shadowRoot&&this.mdcRoot.addEventListener("change",(function(e){t.dispatchEvent(new Event("change",e))}))}}]),n}(p.H);v.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,u.__decorate)([(0,h.Cb)({type:Boolean})],v.prototype,"disabled",void 0)},54040:function(t,e,n){var i=n(33368),r=n(71650),o=n(69205),a=n(70906),s=n(43204),c=n(79932),l=n(58417),d=n(39274),u=function(t){(0,o.Z)(n,t);var e=(0,a.Z)(n);function n(){return(0,r.Z)(this,n),e.apply(this,arguments)}return(0,i.Z)(n)}(l.A);u.styles=[d.W],u=(0,s.__decorate)([(0,c.Mo)("mwc-checkbox")],u)},56887:function(t,e,n){n.d(e,{F:function(){return m}});var i,r,o,a=n(99312),s=n(81043),c=n(88962),l=n(71650),d=n(33368),u=n(69205),h=n(70906),p=n(43204),f=(n(54040),n(68144)),v=n(79932),g=n(83448),m=function(t){(0,u.Z)(p,t);var e,n=(0,h.Z)(p);function p(){var t;return(0,l.Z)(this,p),(t=n.apply(this,arguments)).left=!1,t.graphic="control",t}return(0,d.Z)(p,[{key:"render",value:function(){var t={"mdc-deprecated-list-item__graphic":this.left,"mdc-deprecated-list-item__meta":!this.left},e=this.renderText(),n=this.graphic&&"control"!==this.graphic&&!this.left?this.renderGraphic():(0,f.dy)(i||(i=(0,c.Z)([""]))),a=this.hasMeta&&this.left?this.renderMeta():(0,f.dy)(r||(r=(0,c.Z)([""]))),s=this.renderRipple();return(0,f.dy)(o||(o=(0,c.Z)([" "," "," ",' <span class="','"> <mwc-checkbox reducedTouchTarget tabindex="','" .checked="','" ?disabled="','" @change="','"> </mwc-checkbox> </span> '," ",""])),s,n,this.left?"":e,(0,g.$)(t),this.tabindex,this.selected,this.disabled,this.onChange,this.left?e:"",a)}},{key:"onChange",value:(e=(0,s.Z)((0,a.Z)().mark((function t(e){var n;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.target,this.selected===n.checked){t.next=8;break}return this._skipPropRequest=!0,this.selected=n.checked,t.next=7,this.updateComplete;case 7:this._skipPropRequest=!1;case 8:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),p}(n(61092).K);(0,p.__decorate)([(0,v.IO)("slot")],m.prototype,"slotElement",void 0),(0,p.__decorate)([(0,v.IO)("mwc-checkbox")],m.prototype,"checkboxElement",void 0),(0,p.__decorate)([(0,v.Cb)({type:Boolean})],m.prototype,"left",void 0),(0,p.__decorate)([(0,v.Cb)({type:String,reflect:!0})],m.prototype,"graphic",void 0)},21270:function(t,e,n){n.d(e,{W:function(){return o}});var i,r=n(88962),o=(0,n(68144).iv)(i||(i=(0,r.Z)([":host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}"])))},63864:function(t,e,n){n.d(e,{I:function(){return r},_:function(){return o}});var i=n(68990),r=function(t,e,n,r){var o=t.split(".",3),a=(0,i.Z)(o,3),s=a[0],c=a[1],l=a[2];return Number(s)>e||Number(s)===e&&(void 0===r?Number(c)>=n:Number(c)>n)||void 0!==r&&Number(s)===e&&Number(c)===n&&Number(l)>=r},o=function(t){return t.includes("dev")}},25516:function(t,e,n){n.d(e,{i:function(){return r}});var i=(0,n(8330).P)((function(t){history.replaceState({scrollPosition:t},"")}),300),r=function(t){return function(e){return{kind:"method",placement:"prototype",key:e.key,descriptor:{set:function(t){i(t),this["__".concat(String(e.key))]=t},get:function(){var t;return this["__".concat(String(e.key))]||(null===(t=history.state)||void 0===t?void 0:t.scrollPosition)},enumerable:!0,configurable:!0},finisher:function(n){var i=n.prototype.connectedCallback;n.prototype.connectedCallback=function(){var n=this;i.call(this);var r=this[e.key];r&&this.updateComplete.then((function(){var e=n.renderRoot.querySelector(t);e&&setTimeout((function(){e.scrollTop=r}),0)}))}}}}}},86977:function(t,e,n){n.d(e,{Q:function(){return i}});var i=function(t){return!(!t.detail.selected||"property"!==t.detail.source)&&(t.currentTarget.selected=!1,!0)}},8330:function(t,e,n){n.d(e,{P:function(){return i}});var i=function(t,e){var n,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=0,a=function(){for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];var l=Date.now();o||!1!==i||(o=l);var d=e-(l-o);d<=0||d>e?(n&&(clearTimeout(n),n=void 0),o=l,t.apply(void 0,s)):n||!1===r||(n=window.setTimeout((function(){o=!1===i?0:Date.now(),n=void 0,t.apply(void 0,s)}),d))};return a.cancel=function(){clearTimeout(n),n=void 0,o=0},a}},12373:function(t,e,n){var i,r,o=n(88962),a=n(33368),s=n(71650),c=n(82390),l=n(69205),d=n(70906),u=n(91808),h=n(68144),p=n(79932),f=n(88027);(0,u.Z)([(0,p.Mo)("ha-bar")],(function(t,e){var n=function(e){(0,l.Z)(i,e);var n=(0,d.Z)(i);function i(){var e;(0,s.Z)(this,i);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o)),t((0,c.Z)(e)),e}return(0,a.Z)(i)}(e);return{F:n,d:[{kind:"field",decorators:[(0,p.Cb)({type:Number})],key:"min",value:function(){return 0}},{kind:"field",decorators:[(0,p.Cb)({type:Number})],key:"max",value:function(){return 100}},{kind:"field",decorators:[(0,p.Cb)({type:Number})],key:"value",value:void 0},{kind:"method",key:"render",value:function(){var t=(0,f.IU)((0,f.Ff)((0,f.Fv)(this.value,this.min,this.max),this.min,this.max));return(0,h.YP)(i||(i=(0,o.Z)([' <svg> <g> <rect/> <rect width="','%"/> </g> </svg> '])),t)}},{kind:"get",static:!0,key:"styles",value:function(){return(0,h.iv)(r||(r=(0,o.Z)(["rect{height:100%}rect:first-child{width:100%;fill:var(--ha-bar-background-color,var(--secondary-background-color))}rect:last-child{fill:var(--ha-bar-primary-color,var(--primary-color))}svg{border-radius:var(--ha-bar-border-radius,4px);height:12px;width:100%}"])))}}]}}),h.oi)},84431:function(t,e,n){var i,r=n(88962),o=n(33368),a=n(71650),s=n(82390),c=n(69205),l=n(70906),d=n(91808),u=n(68144),h=n(56887),p=n(21270),f=n(96762),v=n(79932);(0,d.Z)([(0,v.Mo)("ha-check-list-item")],(function(t,e){var n=function(e){(0,c.Z)(i,e);var n=(0,l.Z)(i);function i(){var e;(0,a.Z)(this,i);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return e=n.call.apply(n,[this].concat(o)),t((0,s.Z)(e)),e}return(0,o.Z)(i)}(e);return{F:n,d:[{kind:"field",static:!0,key:"styles",value:function(){return[f.W,p.W,(0,u.iv)(i||(i=(0,r.Z)([":host{--mdc-theme-secondary:var(--primary-color)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,16px);margin-inline-start:0px;direction:var(--direction)}"])))]}}]}}),h.F)},34821:function(t,e,n){n.d(e,{i:function(){return x}});var i,r,o,a=n(33368),s=n(71650),c=n(82390),l=n(69205),d=n(70906),u=n(91808),h=n(34541),p=n(47838),f=n(88962),v=n(87762),g=n(91632),m=n(68144),y=n(79932),b=n(74265),k=(n(10983),["button","ha-list-item"]),x=function(t,e){return(0,m.dy)(i||(i=(0,f.Z)([' <div class="header_title">','</div> <ha-icon-button .label="','" .path="','" dialogAction="close" class="header_button"></ha-icon-button> '])),e,t.localize("ui.dialogs.generic.close"),"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z")};(0,u.Z)([(0,y.Mo)("ha-dialog")],(function(t,e){var n=function(e){(0,l.Z)(i,e);var n=(0,d.Z)(i);function i(){var e;(0,s.Z)(this,i);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o)),t((0,c.Z)(e)),e}return(0,a.Z)(i)}(e);return{F:n,d:[{kind:"field",key:b.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(t,e){var n;null===(n=this.contentElement)||void 0===n||n.scrollTo(t,e)}},{kind:"method",key:"renderHeading",value:function(){return(0,m.dy)(r||(r=(0,f.Z)(['<slot name="heading"> '," </slot>"])),(0,h.Z)((0,p.Z)(n.prototype),"renderHeading",this).call(this))}},{kind:"method",key:"firstUpdated",value:function(){var t;(0,h.Z)((0,p.Z)(n.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,k].join(", "),this._updateScrolledAttribute(),null===(t=this.contentElement)||void 0===t||t.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,h.Z)((0,p.Z)(n.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value:function(){var t=this;return function(){t._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:function(){return[g.W,(0,m.iv)(o||(o=(0,f.Z)([":host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(\n          --dialog-scroll-divider-color,\n          var(--divider-color)\n        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter, none);backdrop-filter:var(--dialog-backdrop-filter, none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:nth-child(1){flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}"])))]}}]}}),v.M)},2315:function(t,e,n){var i,r=n(88962),o=n(33368),a=n(71650),s=n(82390),c=n(69205),l=n(70906),d=n(91808),u=n(34541),h=n(47838),p=n(68144),f=n(79932),v=(n(10983),"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z");(0,d.Z)([(0,f.Mo)("ha-icon-button-arrow-prev")],(function(t,e){var n=function(e){(0,c.Z)(i,e);var n=(0,l.Z)(i);function i(){var e;(0,a.Z)(this,i);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return e=n.call.apply(n,[this].concat(o)),t((0,s.Z)(e)),e}return(0,o.Z)(i)}(e);return{F:n,d:[{kind:"field",decorators:[(0,f.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,f.SB)()],key:"_icon",value:function(){return v}},{kind:"method",key:"connectedCallback",value:function(){var t=this;(0,u.Z)((0,h.Z)(n.prototype),"connectedCallback",this).call(this),setTimeout((function(){t._icon="ltr"===window.getComputedStyle(t).direction?v:"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"}),100)}},{kind:"method",key:"render",value:function(){var t;return(0,p.dy)(i||(i=(0,r.Z)([' <ha-icon-button .disabled="','" .label="','" .path="','"></ha-icon-button> '])),this.disabled,this.label||(null===(t=this.hass)||void 0===t?void 0:t.localize("ui.common.back"))||"Back",this._icon)}}]}}),p.oi)},2130:function(t,e,n){var i,r,o=n(88962),a=n(33368),s=n(71650),c=n(82390),l=n(69205),d=n(70906),u=n(91808),h=n(68144),p=n(79932),f=n(83448),v=n(88027);n(12373),n(14089),(0,u.Z)([(0,p.Mo)("ha-metric")],(function(t,e){var n=function(e){(0,l.Z)(i,e);var n=(0,d.Z)(i);function i(){var e;(0,s.Z)(this,i);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o)),t((0,c.Z)(e)),e}return(0,a.Z)(i)}(e);return{F:n,d:[{kind:"field",decorators:[(0,p.Cb)({type:Number})],key:"value",value:void 0},{kind:"field",decorators:[(0,p.Cb)({type:String})],key:"heading",value:void 0},{kind:"field",decorators:[(0,p.Cb)({type:String})],key:"tooltip",value:void 0},{kind:"method",key:"render",value:function(){var t,e=(0,v.IU)(this.value);return(0,h.dy)(i||(i=(0,o.Z)([' <ha-settings-row> <span slot="heading"> ',' </span> <div slot="description" .title="','"> <span class="value"> ',' % </span> <ha-bar class="','" .value="','"></ha-bar> </div> </ha-settings-row> '])),this.heading,null!==(t=this.tooltip)&&void 0!==t?t:"",e,(0,f.$)({"target-warning":e>50,"target-critical":e>85}),this.value)}},{kind:"get",static:!0,key:"styles",value:function(){return(0,h.iv)(r||(r=(0,o.Z)(["ha-settings-row{padding:0;height:54px;width:100%}ha-settings-row>div[slot=description]{white-space:normal;color:var(--secondary-text-color);display:flex;justify-content:space-between}ha-bar{--ha-bar-primary-color:var(\n          --metric-bar-ok-color,\n          var(--success-color)\n        )}.target-warning{--ha-bar-primary-color:var(\n          --metric-bar-warning-color,\n          var(--warning-color)\n        )}.target-critical{--ha-bar-primary-color:var(\n          --metric-bar-critical-color,\n          var(--error-color)\n        )}.value{width:48px;padding-right:4px;flex-shrink:0}"])))}}]}}),h.oi)},14089:function(t,e,n){var i,r,o=n(88962),a=n(33368),s=n(71650),c=n(82390),l=n(69205),d=n(70906),u=n(91808),h=n(68144),p=n(79932);(0,u.Z)([(0,p.Mo)("ha-settings-row")],(function(t,e){var n=function(e){(0,l.Z)(i,e);var n=(0,d.Z)(i);function i(){var e;(0,s.Z)(this,i);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o)),t((0,c.Z)(e)),e}return(0,a.Z)(i)}(e);return{F:n,d:[{kind:"field",decorators:[(0,p.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,p.Cb)({type:Boolean,attribute:"three-line"})],key:"threeLine",value:function(){return!1}},{kind:"method",key:"render",value:function(){return(0,h.dy)(i||(i=(0,o.Z)([' <div class="prefix-wrap"> <slot name="prefix"></slot> <div class="body" ?two-line="','" ?three-line="','"> <slot name="heading"></slot> <div class="secondary"><slot name="description"></slot></div> </div> </div> <div class="content"><slot></slot></div> '])),!this.threeLine,this.threeLine)}},{kind:"get",static:!0,key:"styles",value:function(){return(0,h.iv)(r||(r=(0,o.Z)([":host{display:flex;padding:0 16px;align-content:normal;align-self:auto;align-items:center}.body{padding:8px 16px 8px 0;overflow:hidden;display:var(--layout-vertical_-_display);flex-direction:var(--layout-vertical_-_flex-direction);justify-content:var(--layout-center-justified_-_justify-content);flex:var(--layout-flex_-_flex);flex-basis:var(--layout-flex_-_flex-basis)}.body[three-line]{min-height:var(--paper-item-body-three-line-min-height,88px)}.body>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.body>.secondary{display:block;padding-top:4px;font-family:var(--mdc-typography-body2-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));-webkit-font-smoothing:antialiased;font-size:var(--mdc-typography-body2-font-size,.875rem);font-weight:var(--mdc-typography-body2-font-weight,400);line-height:normal;color:var(--secondary-text-color)}.body[two-line]{min-height:calc(var(--paper-item-body-two-line-min-height,72px) - 16px);flex:1}.content{display:contents}:host(:not([narrow])) .content{display:var(--settings-row-content-display,flex);justify-content:flex-end;flex:1;padding:16px 0}.content ::slotted(*){width:var(--settings-row-content-width)}:host([narrow]){align-items:normal;flex-direction:column;border-top:1px solid var(--divider-color);padding-bottom:8px}::slotted(ha-switch){padding:16px 0}.secondary{white-space:normal}.prefix-wrap{display:var(--settings-row-prefix-display)}:host([narrow]) .prefix-wrap{display:flex;align-items:center}"])))}}]}}),h.oi)},41682:function(t,e,n){n.d(e,{js:function(){return c},rY:function(){return s},yd:function(){return u},yz:function(){return d}});var i=n(99312),r=n(81043),o=n(76775),a=n(63864),s=function(t){return t.data},c=function(t){return"object"===(0,o.Z)(t)?"object"===(0,o.Z)(t.body)?t.body.message||"Unknown error, see supervisor logs":t.body||t.message||"Unknown error, see supervisor logs":t},l=new Set([502,503,504]),d=function(t){return!!(t&&t.status_code&&l.has(t.status_code))||!(!t||!t.message||!t.message.includes("ERR_CONNECTION_CLOSED")&&!t.message.includes("ERR_CONNECTION_RESET"))},u=function(){var t=(0,r.Z)((0,i.Z)().mark((function t(e,n){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,a.I)(e.config.version,2021,2,4)){t.next=2;break}return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/".concat(n,"/stats"),method:"get"}));case 2:return t.t0=s,t.next=5,e.callApi("GET","hassio/".concat(n,"/stats"));case 5:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},69810:function(t,e,n){n.d(e,{CP:function(){return c},Lm:function(){return l},NC:function(){return d},gM:function(){return u},jP:function(){return h},lC:function(){return s}});var i=n(99312),r=n(81043),o=n(63864),a=n(41682),s=function(){var t=(0,r.Z)((0,i.Z)().mark((function t(e){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,o.I)(e.config.version,2021,2,4)){t.next=4;break}return t.next=3,e.callWS({type:"supervisor/api",endpoint:"/supervisor/reload",method:"post"});case 3:return t.abrupt("return");case 4:return t.next=6,e.callApi("POST","hassio/supervisor/reload");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=(0,r.Z)((0,i.Z)().mark((function t(e){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,o.I)(e.config.version,2021,2,4)){t.next=2;break}return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/supervisor/info",method:"get"}));case 2:return t.t0=a.rY,t.next=5,e.callApi("GET","hassio/supervisor/info");case 5:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)((0,i.Z)().mark((function t(e){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,o.I)(e.config.version,2021,2,4)){t.next=2;break}return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/info",method:"get"}));case 2:return t.t0=a.rY,t.next=5,e.callApi("GET","hassio/info");case 5:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)((0,i.Z)().mark((function t(e,n){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callApi("GET","hassio/".concat(n.includes("_")?"addons/".concat(n):n,"/logs")));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),u=function(t){return"/api/hassio/".concat(t.includes("_")?"addons/".concat(t):t,"/logs")},h=function(){var t=(0,r.Z)((0,i.Z)().mark((function t(e,n){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,o.I)(e.config.version,2021,2,4)){t.next=4;break}return t.next=3,e.callWS({type:"supervisor/api",endpoint:"/supervisor/options",method:"post",data:n});case 3:return t.abrupt("return");case 4:return t.next=6,e.callApi("POST","hassio/supervisor/options",n);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},60010:function(t,e,n){var i,r,o,a,s,c=n(88962),l=n(33368),d=n(71650),u=n(82390),h=n(69205),p=n(70906),f=n(91808),v=n(34541),g=n(47838),m=n(68144),y=n(79932),b=n(25516),k=n(70518),x=n(87744),Z=(n(2315),n(48932),n(11654));(0,f.Z)([(0,y.Mo)("hass-subpage")],(function(t,e){var n=function(e){(0,h.Z)(i,e);var n=(0,p.Z)(i);function i(){var e;(0,d.Z)(this,i);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o)),t((0,u.Z)(e)),e}return(0,l.Z)(i)}(e);return{F:n,d:[{kind:"field",decorators:[(0,y.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,y.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Boolean,attribute:"main-page"})],key:"mainPage",value:function(){return!1}},{kind:"field",decorators:[(0,y.Cb)({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[(0,y.Cb)()],key:"backCallback",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"supervisor",value:function(){return!1}},{kind:"field",decorators:[(0,b.i)(".content")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"willUpdate",value:function(t){if((0,v.Z)((0,g.Z)(n.prototype),"willUpdate",this).call(this,t),t.has("hass")){var e=t.get("hass");e&&e.locale===this.hass.locale||(0,k.X)(this,"rtl",(0,x.HE)(this.hass))}}},{kind:"method",key:"render",value:function(){var t;return(0,m.dy)(i||(i=(0,c.Z)([' <div class="toolbar"> ',' <div class="main-title"><slot name="header">','</slot></div> <slot name="toolbar-icon"></slot> </div> <div class="content ha-scrollbar" @scroll="','"> <slot></slot> </div> <div id="fab"> <slot name="fab"></slot> </div> '])),this.mainPage||null!==(t=history.state)&&void 0!==t&&t.root?(0,m.dy)(r||(r=(0,c.Z)([' <ha-menu-button .hassio="','" .hass="','" .narrow="','"></ha-menu-button> '])),this.supervisor,this.hass,this.narrow):this.backPath?(0,m.dy)(o||(o=(0,c.Z)([' <a href="','"> <ha-icon-button-arrow-prev .hass="','"></ha-icon-button-arrow-prev> </a> '])),this.backPath,this.hass):(0,m.dy)(a||(a=(0,c.Z)([' <ha-icon-button-arrow-prev .hass="','" @click="','"></ha-icon-button-arrow-prev> '])),this.hass,this._backTapped),this.header,this._saveScrollPos)}},{kind:"method",decorators:[(0,y.hO)({passive:!0})],key:"_saveScrollPos",value:function(t){this._savedScrollPos=t.target.scrollTop}},{kind:"method",key:"_backTapped",value:function(){this.backCallback?this.backCallback():history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[Z.$c,(0,m.iv)(s||(s=(0,c.Z)([":host{display:block;height:100%;background-color:var(--primary-background-color);overflow:hidden;position:relative}:host([narrow]){width:100%;position:fixed}.toolbar{display:flex;align-items:center;font-size:20px;height:var(--header-height);padding:8px 12px;pointer-events:none;background-color:var(--app-header-background-color);font-weight:400;color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box}@media (max-width:599px){.toolbar{padding:4px}}.toolbar a{color:var(--sidebar-text-color);text-decoration:none}::slotted([slot=toolbar-icon]),ha-icon-button-arrow-prev,ha-menu-button{pointer-events:auto;color:var(--sidebar-icon-color)}.main-title{margin:0 0 0 24px;line-height:20px;flex-grow:1}.content{position:relative;width:100%;height:calc(100% - 1px - var(--header-height));overflow-y:auto;overflow:auto;-webkit-overflow-scrolling:touch}#fab{position:absolute;right:calc(16px + env(safe-area-inset-right));bottom:calc(16px + env(safe-area-inset-bottom));z-index:1}:host([narrow]) #fab.tabs{bottom:calc(84px + env(safe-area-inset-bottom))}#fab[is-wide]{bottom:24px;right:24px}:host([rtl]) #fab{right:auto;left:calc(16px + env(safe-area-inset-left))}:host([rtl][is-wide]) #fab{bottom:24px;left:24px;right:auto}"])))]}}]}}),m.oi)},97650:function(t,e,n){n.r(e);var i,r,o,a,s,c=n(99312),l=n(81043),d=n(88962),u=n(33368),h=n(71650),p=n(82390),f=n(69205),v=n(70906),g=n(91808),m=n(34541),y=n(47838),b=n(68144),k=n(79932),x=n(14516),Z=n(7323),w=n(86977),_=(n(9381),n(12373),n(81545),n(22098),n(84431),n(2130),n(41682)),C=n(69810),S=n(24833),L=n(26765),A=(n(60010),n(95306),n(47181));n(59989),(0,g.Z)([(0,k.Mo)("ha-config-section-updates")],(function(t,e){var g,E,P,j,M=function(e){(0,f.Z)(i,e);var n=(0,v.Z)(i);function i(){var e;(0,h.Z)(this,i);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o)),t((0,p.Z)(e)),e}return(0,u.Z)(i)}(e);return{F:M,d:[{kind:"field",decorators:[(0,k.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,k.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,k.SB)()],key:"_showSkipped",value:function(){return!1}},{kind:"field",decorators:[(0,k.SB)()],key:"_supervisorInfo",value:void 0},{kind:"method",key:"firstUpdated",value:function(t){(0,m.Z)((0,y.Z)(M.prototype),"firstUpdated",this).call(this,t),(0,Z.p)(this.hass,"hassio")&&this._refreshSupervisorInfo()}},{kind:"method",key:"render",value:function(){var t,e,n=this._filterUpdateEntitiesWithInstall(this.hass.states,this._showSkipped);return(0,b.dy)(i||(i=(0,d.Z)([' <hass-subpage back-path="/config/system" .hass="','" .narrow="','" .header="','"> <div slot="toolbar-icon"> <ha-icon-button .label="','" .path="','" @click="','"></ha-icon-button> <ha-button-menu multi> <ha-icon-button slot="trigger" .label="','" .path="','"></ha-icon-button> <ha-check-list-item left @request-selected="','" .selected="','"> '," </ha-check-list-item> ",' </ha-button-menu> </div> <div class="content"> <ha-card outlined> <div class="card-content"> '," </div> </ha-card> </div> </hass-subpage> "])),this.hass,this.narrow,this.hass.localize("ui.panel.config.updates.caption"),this.hass.localize("ui.panel.config.updates.check_updates"),"M21,10.12H14.22L16.96,7.3C14.23,4.6 9.81,4.5 7.08,7.2C4.35,9.91 4.35,14.28 7.08,17C9.81,19.7 14.23,19.7 16.96,17C18.32,15.65 19,14.08 19,12.1H21C21,14.08 20.12,16.65 18.36,18.39C14.85,21.87 9.15,21.87 5.64,18.39C2.14,14.92 2.11,9.28 5.62,5.81C9.13,2.34 14.76,2.34 18.27,5.81L21,3V10.12M12.5,8V12.25L16,14.33L15.28,15.54L11,13V8H12.5Z",this._checkUpdates,this.hass.localize("ui.common.menu"),"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",this._toggleSkipped,this._showSkipped,this.hass.localize("ui.panel.config.updates.show_skipped"),"dev"!==(null===(t=this._supervisorInfo)||void 0===t?void 0:t.channel)?(0,b.dy)(r||(r=(0,d.Z)([' <li divider role="separator"></li> <mwc-list-item @request-selected="','"> '," </mwc-list-item> "])),this._toggleBeta,"stable"===(null===(e=this._supervisorInfo)||void 0===e?void 0:e.channel)?this.hass.localize("ui.panel.config.updates.join_beta"):this.hass.localize("ui.panel.config.updates.leave_beta")):"",n.length?(0,b.dy)(o||(o=(0,d.Z)([' <ha-config-updates .hass="','" .narrow="','" .updateEntities="','" showAll></ha-config-updates> '])),this.hass,this.narrow,n):(0,b.dy)(a||(a=(0,d.Z)([' <div class="no-updates"> '," </div> "])),this.hass.localize("ui.panel.config.updates.no_updates")))}},{kind:"method",key:"_refreshSupervisorInfo",value:(j=(0,l.Z)((0,c.Z)().mark((function t(){return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,C.CP)(this.hass);case 2:this._supervisorInfo=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return j.apply(this,arguments)})},{kind:"method",key:"_toggleSkipped",value:function(t){"property"===t.detail.source&&(this._showSkipped=!this._showSkipped)}},{kind:"method",key:"_toggleBeta",value:(P=(0,l.Z)((0,c.Z)().mark((function t(e){var i=this;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,w.Q)(e)){t.next=2;break}return t.abrupt("return");case 2:"stable"===this._supervisorInfo.channel?(r=this,o={join:function(){var t=(0,l.Z)((0,c.Z)().mark((function t(){return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i._setChannel("beta"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},(0,A.B)(r,"show-dialog",{dialogTag:"dialog-join-beta",dialogImport:function(){return Promise.resolve().then(n.bind(n,59989))},dialogParams:o})):this._setChannel("stable");case 3:case"end":return t.stop()}var r,o}),t,this)}))),function(t){return P.apply(this,arguments)})},{kind:"method",key:"_setChannel",value:(E=(0,l.Z)((0,c.Z)().mark((function t(e){return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,C.jP)(this.hass,{channel:e});case 3:return t.next=5,(0,C.lC)(this.hass);case 5:return t.next=7,this._refreshSupervisorInfo();case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),(0,L.Ys)(this,{text:(0,_.js)(t.t0)});case 12:case"end":return t.stop()}}),t,this,[[0,9]])}))),function(t){return E.apply(this,arguments)})},{kind:"method",key:"_checkUpdates",value:(g=(0,l.Z)((0,c.Z)().mark((function t(){return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,S.M$)(this,this.hass);case 1:case"end":return t.stop()}}),t,this)}))),function(){return g.apply(this,arguments)})},{kind:"field",key:"_filterUpdateEntitiesWithInstall",value:function(){return(0,x.Z)((function(t,e){return(0,S.Fj)(t,e)}))}},{kind:"field",static:!0,key:"styles",value:function(){return(0,b.iv)(s||(s=(0,d.Z)([".content{padding:28px 20px 0;max-width:1040px;margin:0 auto}ha-card{max-width:600px;margin:0 auto;height:100%;justify-content:space-between;flex-direction:column;display:flex;margin-bottom:max(24px,env(safe-area-inset-bottom))}.card-content{display:flex;justify-content:space-between;flex-direction:column;padding:0}.no-updates{padding:16px}li[divider]{border-bottom-color:var(--divider-color)}"])))}}]}}),b.oi)},59989:function(t,e,n){n.r(e),n.d(e,{DialogJoinBeta:function(){return y}});var i,r,o=n(88962),a=n(33368),s=n(71650),c=n(82390),l=n(69205),d=n(70906),u=n(91808),h=(n(53918),n(68144)),p=n(79932),f=n(47181),v=(n(9381),n(34821)),g=n(11654),m=n(27322),y=(0,u.Z)([(0,p.Mo)("dialog-join-beta")],(function(t,e){var n=function(e){(0,l.Z)(i,e);var n=(0,d.Z)(i);function i(){var e;(0,s.Z)(this,i);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o)),t((0,c.Z)(e)),e}return(0,a.Z)(i)}(e);return{F:n,d:[{kind:"field",decorators:[(0,p.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,p.SB)()],key:"_dialogParams",value:void 0},{kind:"method",key:"showDialog",value:function(t){this._dialogParams=t}},{kind:"method",key:"closeDialog",value:function(){this._dialogParams=void 0,(0,f.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._dialogParams?(0,h.dy)(i||(i=(0,o.Z)([' <ha-dialog open @closed="','" .heading="','"> <ha-alert alert-type="warning"> '," </ha-alert> <p> "," ",' </p> <ul> <li>ioBroker Core</li> <li>ioBroker Supervisor</li> <li>ioBroker Operating System</li> </ul> <a href="','" target="_blank" rel="noreferrer"> ',' <ha-svg-icon .path="','"></ha-svg-icon> </a> <mwc-button slot="primaryAction" @click="','"> ',' </mwc-button> <mwc-button slot="primaryAction" @click="','"> '," </mwc-button> </ha-dialog> "])),this.closeDialog,(0,v.i)(this.hass,this.hass.localize("ui.dialogs.join_beta_channel.title")),this.hass.localize("ui.dialogs.join_beta_channel.backup"),this.hass.localize("ui.dialogs.join_beta_channel.warning"),this.hass.localize("ui.dialogs.join_beta_channel.release_items"),(0,m.R)(this.hass,"/faq/release/"),this.hass.localize("ui.dialogs.join_beta_channel.view_documentation"),"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z",this._cancel,this.hass.localize("ui.common.cancel"),this._join,this.hass.localize("ui.dialogs.join_beta_channel.join")):h.Ld}},{kind:"method",key:"_cancel",value:function(){var t,e;null===(t=this._dialogParams)||void 0===t||null===(e=t.cancel)||void 0===e||e.call(t),this.closeDialog()}},{kind:"method",key:"_join",value:function(){var t,e;null===(t=this._dialogParams)||void 0===t||null===(e=t.join)||void 0===e||e.call(t),this.closeDialog()}},{kind:"get",static:!0,key:"styles",value:function(){return[g.yu,(0,h.iv)(r||(r=(0,o.Z)(["a{text-decoration:none}a ha-svg-icon{--mdc-icon-size:16px}"])))]}}]}}),h.oi)},88027:function(t,e,n){n.d(e,{Ff:function(){return r},Fv:function(){return i},IU:function(){return o}});var i=function(t,e,n){return isNaN(t)||isNaN(e)||isNaN(n)?0:t>n?n:t<e?e:t},r=function(t,e,n){return 100*(t-e)/(n-e)},o=function(t){return Math.round(10*t)/10}}}]);
//# sourceMappingURL=11047-dH93jkFiZRc.js.map