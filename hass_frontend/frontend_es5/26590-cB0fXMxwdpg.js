"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[26590,4631],{26410:function(e,t,i){i.d(t,{Bt:function(){return o},T8:function(){return l}});var n=i(22075),a=i(66477),r=(i(10520),["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]),o=function(e){return e.first_weekday===a.FS.language?"weekInfo"in Intl.Locale.prototype?new Intl.Locale(e.language).weekInfo.firstDay%7:(0,n.L)(e.language)%7:r.includes(e.first_weekday)?r.indexOf(e.first_weekday):1},l=function(e){var t=o(e);return r[t]}},80596:function(e,t,i){i.d(t,{G:function(){return c}});var n=i(14516),a=(i(10520),i(24112)),r=i(59401),o=i(35040),l=i(26410);var d={second:45,minute:45,hour:22,day:5,week:4,month:11},s=(0,n.Z)((function(e){return new Intl.RelativeTimeFormat(e.language,{numeric:"auto"})})),c=function(e,t,i){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=Object.assign(Object.assign({},d),n||{}),c=(+e-+t)/1e3;if(Math.abs(c)<s.second)return{value:Math.round(c),unit:"second"};var u=c/60;if(Math.abs(u)<s.minute)return{value:Math.round(u),unit:"minute"};var h=c/3600;if(Math.abs(h)<s.hour)return{value:Math.round(h),unit:"hour"};var f=new Date(e),p=new Date(t);f.setHours(0,0,0,0),p.setHours(0,0,0,0);var v=(0,a.Z)(f,p);if(0===v)return{value:Math.round(h),unit:"hour"};if(Math.abs(v)<s.day)return{value:v,unit:"day"};var b=(0,l.Bt)(i),m=(0,r.Z)(f,{weekStartsOn:b}),k=(0,r.Z)(p,{weekStartsOn:b}),g=(0,o.Z)(m,k);if(0===g)return{value:v,unit:"day"};if(Math.abs(g)<s.week)return{value:g,unit:"week"};var y=f.getFullYear()-p.getFullYear(),x=12*y+f.getMonth()-p.getMonth();return 0===x?{value:g,unit:"week"}:Math.abs(x)<s.month||0===y?{value:x,unit:"month"}:{value:Math.round(y),unit:"year"}}(e,i,t);return n?s(t).format(c.value,c.unit):Intl.NumberFormat(t.language,{style:"unit",unit:c.unit,unitDisplay:"long"}).format(Math.abs(c.value))}},81545:function(e,t,i){var n,a,r=i(88962),o=i(33368),l=i(71650),d=i(82390),s=i(69205),c=i(70906),u=i(91808),h=i(34541),f=i(47838),p=(i(65666),i(68144)),v=i(79932),b=i(74265);(0,u.Z)([(0,v.Mo)("ha-button-menu")],(function(e,t){var i=function(t){(0,s.Z)(n,t);var i=(0,c.Z)(n);function n(){var t;(0,l.Z)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=i.call.apply(i,[this].concat(r)),e((0,d.Z)(t)),t}return(0,o.Z)(n)}(t);return{F:i,d:[{kind:"field",key:b.gA,value:void 0},{kind:"field",decorators:[(0,v.Cb)()],key:"corner",value:function(){return"BOTTOM_START"}},{kind:"field",decorators:[(0,v.Cb)()],key:"menuCorner",value:function(){return"START"}},{kind:"field",decorators:[(0,v.Cb)({type:Number})],key:"x",value:function(){return null}},{kind:"field",decorators:[(0,v.Cb)({type:Number})],key:"y",value:function(){return null}},{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"multi",value:function(){return!1}},{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"activatable",value:function(){return!1}},{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"fixed",value:function(){return!1}},{kind:"field",decorators:[(0,v.IO)("mwc-menu",!0)],key:"_menu",value:void 0},{kind:"get",key:"items",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.items}},{kind:"get",key:"selected",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.selected}},{kind:"method",key:"focus",value:function(){var e,t;null!==(e=this._menu)&&void 0!==e&&e.open?this._menu.focusItemAtIndex(0):null===(t=this._triggerButton)||void 0===t||t.focus()}},{kind:"method",key:"render",value:function(){return(0,p.dy)(n||(n=(0,r.Z)([' <div @click="','"> <slot name="trigger" @slotchange="','"></slot> </div> <mwc-menu .corner="','" .menuCorner="','" .fixed="','" .multi="','" .activatable="','" .y="','" .x="','"> <slot></slot> </mwc-menu> '])),this._handleClick,this._setTriggerAria,this.corner,this.menuCorner,this.fixed,this.multi,this.activatable,this.y,this.x)}},{kind:"method",key:"firstUpdated",value:function(e){var t=this;(0,h.Z)((0,f.Z)(i.prototype),"firstUpdated",this).call(this,e),"rtl"===document.dir&&this.updateComplete.then((function(){t.querySelectorAll("mwc-list-item").forEach((function(e){var t=document.createElement("style");t.innerHTML="span.material-icons:first-of-type { margin-left: var(--mdc-list-item-graphic-margin, 32px) !important; margin-right: 0px !important;}",e.shadowRoot.appendChild(t)}))}))}},{kind:"method",key:"_handleClick",value:function(){this.disabled||(this._menu.anchor=this,this._menu.show())}},{kind:"get",key:"_triggerButton",value:function(){return this.querySelector('ha-icon-button[slot="trigger"], mwc-button[slot="trigger"]')}},{kind:"method",key:"_setTriggerAria",value:function(){this._triggerButton&&(this._triggerButton.ariaHasPopup="menu")}},{kind:"get",static:!0,key:"styles",value:function(){return(0,p.iv)(a||(a=(0,r.Z)([":host{display:inline-block;position:relative}::slotted([disabled]){color:var(--disabled-text-color)}"])))}}]}}),p.oi)},31206:function(e,t,i){i.r(t),i.d(t,{HaCircularProgress:function(){return b}});var n,a=i(88962),r=i(33368),o=i(71650),l=i(82390),d=i(69205),s=i(70906),c=i(91808),u=i(34541),h=i(47838),f=i(30879),p=i(68144),v=i(79932),b=(0,c.Z)([(0,v.Mo)("ha-circular-progress")],(function(e,t){var i=function(t){(0,d.Z)(n,t);var i=(0,s.Z)(n);function n(){var t;(0,o.Z)(this,n);for(var a=arguments.length,r=new Array(a),d=0;d<a;d++)r[d]=arguments[d];return t=i.call.apply(i,[this].concat(r)),e((0,l.Z)(t)),t}return(0,r.Z)(n)}(t);return{F:i,d:[{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"active",value:function(){return!1}},{kind:"field",decorators:[(0,v.Cb)()],key:"alt",value:function(){return"Loading"}},{kind:"field",decorators:[(0,v.Cb)()],key:"size",value:function(){return"medium"}},{kind:"set",key:"density",value:function(e){}},{kind:"get",key:"density",value:function(){switch(this.size){case"tiny":return-8;case"small":return-5;case"medium":default:return 0;case"large":return 5}}},{kind:"set",key:"indeterminate",value:function(e){}},{kind:"get",key:"indeterminate",value:function(){return this.active}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,u.Z)((0,h.Z)(i),"styles",this),(0,p.iv)(n||(n=(0,a.Z)([":host{overflow:hidden}"])))]}}]}}),f.D)},36125:function(e,t,i){var n,a,r,o=i(88962),l=i(33368),d=i(71650),s=i(82390),c=i(69205),u=i(70906),h=i(91808),f=i(34541),p=i(47838),v=i(48095),b=i(72477),m=i(79932),k=i(68144);(0,h.Z)([(0,m.Mo)("ha-fab")],(function(e,t){var i=function(t){(0,c.Z)(n,t);var i=(0,u.Z)(n);function n(){var t;(0,d.Z)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=i.call.apply(i,[this].concat(r)),e((0,s.Z)(t)),t}return(0,l.Z)(n)}(t);return{F:i,d:[{kind:"method",key:"firstUpdated",value:function(e){(0,f.Z)((0,p.Z)(i.prototype),"firstUpdated",this).call(this,e),this.style.setProperty("--mdc-theme-secondary","var(--primary-color)")}},{kind:"field",static:!0,key:"styles",value:function(){return[b.W,(0,k.iv)(n||(n=(0,o.Z)([":host .mdc-fab--extended .mdc-fab__icon{margin-inline-start:-8px;margin-inline-end:12px;direction:var(--direction)}"]))),"rtl"===document.dir?(0,k.iv)(a||(a=(0,o.Z)([":host .mdc-fab--extended .mdc-fab__icon{direction:rtl}"]))):(0,k.iv)(r||(r=(0,o.Z)([""])))]}}]}}),v._)},48429:function(e,t,i){var n,a,r,o,l,d,s,c,u,h=i(88962),f=i(33368),p=i(71650),v=i(82390),b=i(69205),m=i(70906),k=i(91808),g=(i(44577),i(33829),i(68144)),y=i(79932),x=i(83448),w=i(11654);i(81545),i(10983),i(52039),(0,k.Z)([(0,y.Mo)("ha-icon-overflow-menu")],(function(e,t){var i=function(t){(0,b.Z)(n,t);var i=(0,m.Z)(n);function n(){var t;(0,p.Z)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=i.call.apply(i,[this].concat(r)),e((0,v.Z)(t)),t}return(0,f.Z)(n)}(t);return{F:i,d:[{kind:"field",decorators:[(0,y.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Array})],key:"items",value:function(){return[]}},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"narrow",value:function(){return!1}},{kind:"method",key:"render",value:function(){return(0,g.dy)(n||(n=(0,h.Z)([" "," "])),this.narrow?(0,g.dy)(a||(a=(0,h.Z)([' <ha-button-menu @click="','" @closed="','" class="ha-icon-overflow-menu-overflow" absolute> <ha-icon-button .label="','" .path="','" slot="trigger"></ha-icon-button> '," </ha-button-menu>"])),this._handleIconOverflowMenuOpened,this._handleIconOverflowMenuClosed,this.hass.localize("ui.common.overflow_menu"),"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",this.items.map((function(e){return e.divider?(0,g.dy)(r||(r=(0,h.Z)(['<li divider role="separator"></li>']))):(0,g.dy)(o||(o=(0,h.Z)(['<mwc-list-item graphic="icon" ?disabled="','" @click="','" class="','"> <div slot="graphic"> <ha-svg-icon class="','" .path="','"></ha-svg-icon> </div> '," </mwc-list-item> "])),e.disabled,e.action,(0,x.$)({warning:Boolean(e.warning)}),(0,x.$)({warning:Boolean(e.warning)}),e.path,e.label)}))):(0,g.dy)(l||(l=(0,h.Z)([" "," "])),this.items.map((function(e){return e.narrowOnly?"":e.divider?(0,g.dy)(d||(d=(0,h.Z)(['<div role="separator"></div>']))):(0,g.dy)(s||(s=(0,h.Z)(["<div> ",' <ha-icon-button @click="','" .label="','" .path="','" ?disabled="','"></ha-icon-button> </div> '])),e.tooltip?(0,g.dy)(c||(c=(0,h.Z)(['<simple-tooltip animation-delay="0" position="left"> '," </simple-tooltip>"])),e.tooltip):"",e.action,e.label,e.path,e.disabled)}))))}},{kind:"method",key:"_handleIconOverflowMenuOpened",value:function(e){e.stopPropagation();var t=this.closest(".mdc-data-table__row");t&&(t.style.zIndex="1")}},{kind:"method",key:"_handleIconOverflowMenuClosed",value:function(){var e=this.closest(".mdc-data-table__row");e&&(e.style.zIndex="")}},{kind:"get",static:!0,key:"styles",value:function(){return[w.Qx,(0,g.iv)(u||(u=(0,h.Z)([":host{display:flex;justify-content:flex-end}li[role=separator]{border-bottom-color:var(--divider-color)}div[role=separator]{border-right:1px solid var(--divider-color);width:1px}"])))]}}]}}),g.oi)},3555:function(e,t,i){var n,a,r,o,l=i(88962),d=i(33368),s=i(71650),c=i(82390),u=i(69205),h=i(70906),f=i(91808),p=i(34541),v=i(47838),b=i(42977),m=i(31338),k=i(68144),g=i(79932);(0,f.Z)([(0,g.Mo)("ha-textfield")],(function(e,t){var i=function(t){(0,u.Z)(n,t);var i=(0,h.Z)(n);function n(){var t;(0,s.Z)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=i.call.apply(i,[this].concat(r)),e((0,c.Z)(t)),t}return(0,d.Z)(n)}(t);return{F:i,d:[{kind:"field",decorators:[(0,g.Cb)({type:Boolean})],key:"invalid",value:void 0},{kind:"field",decorators:[(0,g.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,g.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"field",decorators:[(0,g.Cb)({type:Boolean})],key:"iconTrailing",value:void 0},{kind:"field",decorators:[(0,g.Cb)()],key:"autocomplete",value:void 0},{kind:"field",decorators:[(0,g.Cb)()],key:"autocorrect",value:void 0},{kind:"field",decorators:[(0,g.Cb)({attribute:"input-spellcheck"})],key:"inputSpellcheck",value:void 0},{kind:"field",decorators:[(0,g.IO)("input")],key:"formElement",value:void 0},{kind:"method",key:"updated",value:function(e){(0,p.Z)((0,v.Z)(i.prototype),"updated",this).call(this,e),(e.has("invalid")&&(this.invalid||void 0!==e.get("invalid"))||e.has("errorMessage"))&&(this.setCustomValidity(this.invalid?this.errorMessage||"Invalid":""),this.reportValidity()),e.has("autocomplete")&&(this.autocomplete?this.formElement.setAttribute("autocomplete",this.autocomplete):this.formElement.removeAttribute("autocomplete")),e.has("autocorrect")&&(this.autocorrect?this.formElement.setAttribute("autocorrect",this.autocorrect):this.formElement.removeAttribute("autocorrect")),e.has("inputSpellcheck")&&(this.inputSpellcheck?this.formElement.setAttribute("spellcheck",this.inputSpellcheck):this.formElement.removeAttribute("spellcheck"))}},{kind:"method",key:"renderIcon",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=t?"trailing":"leading";return(0,k.dy)(n||(n=(0,l.Z)([' <span class="mdc-text-field__icon mdc-text-field__icon--','" tabindex="','"> <slot name="','Icon"></slot> </span> '])),i,t?1:-1,i)}},{kind:"field",static:!0,key:"styles",value:function(){return[m.W,(0,k.iv)(a||(a=(0,l.Z)([".mdc-text-field__input{width:var(--ha-textfield-input-width,100%)}.mdc-text-field:not(.mdc-text-field--with-leading-icon){padding:var(--text-field-padding,0px 16px)}.mdc-text-field__affix--suffix{padding-left:var(--text-field-suffix-padding-left,12px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,12px);padding-inline-end:var(--text-field-suffix-padding-right,0px);direction:var(--direction)}.mdc-text-field--with-leading-icon{padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,16px);direction:var(--direction)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:var(--text-field-suffix-padding-left,0px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,0px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:var(--secondary-text-color)}.mdc-text-field__icon{color:var(--secondary-text-color)}.mdc-text-field__icon--leading{margin-inline-start:16px;margin-inline-end:8px;direction:var(--direction)}.mdc-text-field__icon--trailing{padding:var(--textfield-icon-trailing-padding,12px)}.mdc-floating-label:not(.mdc-floating-label--float-above){text-overflow:ellipsis;width:inherit;padding-right:30px;padding-inline-end:30px;padding-inline-start:initial;box-sizing:border-box;direction:var(--direction)}input{text-align:var(--text-field-text-align,start)}:host([no-spinner]) input::-webkit-inner-spin-button,:host([no-spinner]) input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}:host([no-spinner]) input[type=number]{-moz-appearance:textfield}.mdc-text-field__ripple{overflow:hidden}.mdc-text-field{overflow:var(--text-field-overflow)}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start);direction:var(--direction);text-align:var(--float-start)}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px - var(--text-field-suffix-padding-left,0px));inset-inline-start:calc(48px + var(--text-field-suffix-padding-left,0px))!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field__input[type=number]{direction:var(--direction)}.mdc-text-field__affix--prefix{padding-right:var(--text-field-prefix-padding-right,2px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:var(--mdc-text-field-label-ink-color)}"]))),"rtl"===document.dir?(0,k.iv)(r||(r=(0,l.Z)([".mdc-floating-label,.mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field__affix--suffix,.mdc-text-field__icon--leading,.mdc-text-field__input[type=number]{direction:rtl}"]))):(0,k.iv)(o||(o=(0,l.Z)([""])))]}}]}}),b.P)},22814:function(e,t,i){i.d(t,{TZ:function(){return d},W2:function(){return l},iI:function(){return o},oT:function(){return r}});var n=i(99312),a=i(81043),r=("".concat(location.protocol,"//").concat(location.host),function(e){return e.map((function(e){if("string"!==e.type)return e;switch(e.name){case"username":return Object.assign(Object.assign({},e),{},{autocomplete:"username"});case"password":return Object.assign(Object.assign({},e),{},{autocomplete:"current-password"});case"code":return Object.assign(Object.assign({},e),{},{autocomplete:"one-time-code"});default:return e}}))}),o=function(e,t){return e.callWS({type:"auth/sign_path",path:t})},l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,i,a,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth_provider/homeassistant/create",user_id:i,username:a,password:r}));case 1:case"end":return e.stop()}}),e)})));return function(t,i,n,a){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,i,a){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth_provider/homeassistant/admin_change_password",user_id:i,password:a}));case 1:case"end":return e.stop()}}),e)})));return function(t,i,n){return e.apply(this,arguments)}}()},2179:function(e,t,i){i.d(t,{FZ:function(){return r},I0:function(){return n},ZE:function(){return a},Zk:function(){return o}});var n=function(e){return"/api/backup/download/".concat(e)},a=function(e){return e.callWS({type:"backup/info"})},r=function(e,t){return e.callWS({type:"backup/remove",slug:t})},o=function(e){return e.callWS({type:"backup/generate"})}},15291:function(e,t,i){i.r(t);var n,a,r,o,l,d,s=i(88962),c=i(33368),u=i(71650),h=i(82390),f=i(69205),p=i(70906),v=i(91808),b=i(68144),m=i(79932),k=(i(31206),i(2315),i(48932),i(11654));(0,v.Z)([(0,m.Mo)("hass-loading-screen")],(function(e,t){var i=function(t){(0,f.Z)(n,t);var i=(0,p.Z)(n);function n(){var t;(0,u.Z)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=i.call.apply(i,[this].concat(r)),e((0,h.Z)(t)),t}return(0,c.Z)(n)}(t);return{F:i,d:[{kind:"field",decorators:[(0,m.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,m.Cb)({type:Boolean,attribute:"no-toolbar"})],key:"noToolbar",value:function(){return!1}},{kind:"field",decorators:[(0,m.Cb)({type:Boolean})],key:"rootnav",value:function(){return!1}},{kind:"field",decorators:[(0,m.Cb)({type:Boolean})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,m.Cb)()],key:"message",value:void 0},{kind:"method",key:"render",value:function(){var e;return(0,b.dy)(n||(n=(0,s.Z)([" ",' <div class="content"> <ha-circular-progress active></ha-circular-progress> '," </div> "])),this.noToolbar?"":(0,b.dy)(a||(a=(0,s.Z)(['<div class="toolbar"> '," </div>"])),this.rootnav||null!==(e=history.state)&&void 0!==e&&e.root?(0,b.dy)(r||(r=(0,s.Z)([' <ha-menu-button .hass="','" .narrow="','"></ha-menu-button> '])),this.hass,this.narrow):(0,b.dy)(o||(o=(0,s.Z)([' <ha-icon-button-arrow-prev .hass="','" @click="','"></ha-icon-button-arrow-prev> '])),this.hass,this._handleBack)),this.message?(0,b.dy)(l||(l=(0,s.Z)(['<div id="loading-text">',"</div>"])),this.message):b.Ld)}},{kind:"method",key:"_handleBack",value:function(){history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[k.Qx,(0,b.iv)(d||(d=(0,s.Z)([":host{display:block;height:100%;background-color:var(--primary-background-color)}.toolbar{display:flex;align-items:center;font-size:20px;height:var(--header-height);padding:8px 12px;pointer-events:none;background-color:var(--app-header-background-color);font-weight:400;color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box}@media (max-width:599px){.toolbar{padding:4px}}ha-icon-button-arrow-prev,ha-menu-button{pointer-events:auto}.content{height:calc(100% - var(--header-height));display:flex;flex-direction:column;align-items:center;justify-content:center}#loading-text{max-width:350px;margin-top:16px}"])))]}}]}}),b.oi)},24090:function(e,t,i){var n,a,r,o,l,d,s,c,u,h,f,p,v=i(88962),b=i(33368),m=i(71650),k=i(82390),g=i(69205),y=i(70906),x=i(91808),w=(i(53918),i(33829),i(68144)),Z=i(79932),_=i(47181),C=i(87744);i(37168),i(49703),(0,x.Z)([(0,Z.Mo)("hass-tabs-subpage-data-table")],(function(e,t){var i=function(t){(0,g.Z)(n,t);var i=(0,y.Z)(n);function n(){var t;(0,m.Z)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=i.call.apply(i,[this].concat(r)),e((0,k.Z)(t)),t}return(0,b.Z)(n)}(t);return{F:i,d:[{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"localizeFunc",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean})],key:"isWide",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean})],key:"supervisor",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean,attribute:"main-page"})],key:"mainPage",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({type:Object})],key:"columns",value:function(){return{}}},{kind:"field",decorators:[(0,Z.Cb)({type:Array})],key:"data",value:function(){return[]}},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean})],key:"selectable",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean})],key:"clickable",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean})],key:"hasFab",value:function(){return!1}},{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"appendRow",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({type:String})],key:"id",value:function(){return"id"}},{kind:"field",decorators:[(0,Z.Cb)({type:String})],key:"filter",value:function(){return""}},{kind:"field",decorators:[(0,Z.Cb)()],key:"searchLabel",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({type:Array})],key:"activeFilters",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"hiddenLabel",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({type:Number})],key:"numHidden",value:function(){return 0}},{kind:"field",decorators:[(0,Z.Cb)({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"backCallback",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({type:String})],key:"noDataText",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"tabs",value:function(){return[]}},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean})],key:"hideFilterMenu",value:function(){return!1}},{kind:"field",decorators:[(0,Z.IO)("ha-data-table",!0)],key:"_dataTable",value:void 0},{kind:"method",key:"clearSelection",value:function(){this._dataTable.clearSelection()}},{kind:"method",key:"render",value:function(){var e=this.numHidden?this.hiddenLabel||this.hass.localize("ui.components.data-table.hidden","number",this.numHidden)||this.numHidden:void 0,t=this.activeFilters?(0,w.dy)(n||(n=(0,v.Z)([""," "," ",""])),this.hass.localize("ui.components.data-table.filtering_by"),this.activeFilters.join(", "),e?"(".concat(e,")"):""):e,i=(0,w.dy)(a||(a=(0,v.Z)(['<search-input .hass="','" .filter="','" .suffix="','" @value-changed="','" .label="','"> '," </search-input>"])),this.hass,this.filter,!this.narrow,this._handleSearchChange,this.searchLabel,this.narrow?"":(0,w.dy)(r||(r=(0,v.Z)(['<div class="filters" slot="suffix" @click="','"> ',' <slot name="filter-menu"></slot> </div>'])),this._preventDefault,t?(0,w.dy)(o||(o=(0,v.Z)(['<div class="active-filters"> ',' <mwc-button @click="','"> '," </mwc-button> </div>"])),t,this._clearFilter,this.hass.localize("ui.components.data-table.clear")):""));return(0,w.dy)(l||(l=(0,v.Z)([' <hass-tabs-subpage .hass="','" .localizeFunc="','" .narrow="','" .isWide="','" .backPath="','" .backCallback="','" .route="','" .tabs="','" .mainPage="','" .supervisor="','"> '," ",' <ha-data-table .hass="','" .columns="','" .data="','" .filter="','" .selectable="','" .hasFab="','" .id="','" .noDataText="','" .dir="','" .clickable="','" .appendRow="','"> ',' </ha-data-table> <div slot="fab"><slot name="fab"></slot></div> </hass-tabs-subpage> '])),this.hass,this.localizeFunc,this.narrow,this.isWide,this.backPath,this.backCallback,this.route,this.tabs,this.mainPage,this.supervisor,this.hideFilterMenu?"":(0,w.dy)(d||(d=(0,v.Z)([' <div slot="toolbar-icon"> ','<slot name="toolbar-icon"></slot> </div> '])),this.narrow?(0,w.dy)(s||(s=(0,v.Z)([' <div class="filter-menu"> ',' <slot name="filter-menu"></slot> </div> '])),this.numHidden||this.activeFilters?(0,w.dy)(c||(c=(0,v.Z)(['<span class="badge">',"</span>"])),this.numHidden||"!"):""):""),this.narrow?(0,w.dy)(u||(u=(0,v.Z)([' <div slot="header"> <slot name="header"> <div class="search-toolbar">',"</div> </slot> </div> "])),i):"",this.hass,this.columns,this.data,this.filter,this.selectable,this.hasFab,this.id,this.noDataText,(0,C.Zu)(this.hass),this.clickable,this.appendRow,this.narrow?(0,w.dy)(f||(f=(0,v.Z)([' <div slot="header"></div> ']))):(0,w.dy)(h||(h=(0,v.Z)([' <div slot="header"> <slot name="header"> <div class="table-header">',"</div> </slot> </div> "])),i))}},{kind:"method",key:"_preventDefault",value:function(e){e.preventDefault()}},{kind:"method",key:"_handleSearchChange",value:function(e){this.filter!==e.detail.value&&(this.filter=e.detail.value,(0,_.B)(this,"search-changed",{value:this.filter}))}},{kind:"method",key:"_clearFilter",value:function(){(0,_.B)(this,"clear-filter")}},{kind:"get",static:!0,key:"styles",value:function(){return(0,w.iv)(p||(p=(0,v.Z)(['ha-data-table{width:100%;height:100%;--data-table-border-width:0}:host(:not([narrow])) ha-data-table{height:calc(100vh - 1px - var(--header-height));display:block}:host([narrow]) hass-tabs-subpage{--main-title-margin:0}.table-header{display:flex;align-items:center;--mdc-shape-small:0;height:56px}.search-toolbar{display:flex;align-items:center;color:var(--secondary-text-color)}search-input{--mdc-text-field-fill-color:var(--sidebar-background-color);--mdc-text-field-idle-line-color:var(--divider-color);--text-field-overflow:visible;z-index:5}.table-header search-input{display:block;position:absolute;top:0;right:0;left:0}.search-toolbar search-input{display:block;width:100%;color:var(--secondary-text-color);--mdc-ripple-color:transparant}.filters{--mdc-text-field-fill-color:var(--input-fill-color);--mdc-text-field-idle-line-color:var(--input-idle-line-color);--mdc-shape-small:4px;--text-field-overflow:initial;display:flex;justify-content:flex-end;color:var(--primary-text-color)}.active-filters{color:var(--primary-text-color);position:relative;display:flex;align-items:center;padding:2px 2px 2px 8px;margin-left:4px;margin-inline-start:4px;margin-inline-end:initial;font-size:14px;width:max-content;cursor:initial;direction:var(--direction)}.active-filters ha-svg-icon{color:var(--primary-color)}.active-filters mwc-button{margin-left:8px;margin-inline-start:8px;margin-inline-end:initial;direction:var(--direction)}.active-filters::before{background-color:var(--primary-color);opacity:.12;border-radius:4px;position:absolute;top:0;right:0;bottom:0;left:0;content:""}.badge{min-width:20px;box-sizing:border-box;border-radius:50%;font-weight:400;background-color:var(--primary-color);line-height:20px;text-align:center;padding:0px 4px;color:var(--text-primary-color);position:absolute;right:0;top:4px;font-size:.65em}.filter-menu{position:relative}'])))}}]}}),w.oi)},46636:function(e,t,i){i.r(t);var n,a,r,o,l,d,s,c=i(99312),u=i(81043),h=i(88962),f=i(33368),p=i(71650),v=i(82390),b=i(69205),m=i(70906),k=i(91808),g=i(34541),y=i(47838),x=(i(33829),i(68144)),w=i(79932),Z=i(14516),_=i(80596),C=(i(31206),i(36125),i(81312),i(48429),i(52039),i(22814)),B=i(2179),M=i(26765),z=(i(15291),i(24090),i(25936));(0,k.Z)([(0,w.Mo)("ha-config-backup")],(function(e,t){var i,k,A,F,H=function(t){(0,b.Z)(n,t);var i=(0,m.Z)(n);function n(){var t;(0,p.Z)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=i.call.apply(i,[this].concat(r)),e((0,v.Z)(t)),t}return(0,f.Z)(n)}(t);return{F:H,d:[{kind:"field",decorators:[(0,w.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,w.Cb)({type:Boolean})],key:"isWide",value:void 0},{kind:"field",decorators:[(0,w.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,w.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_backupData",value:void 0},{kind:"field",key:"_columns",value:function(){var e=this;return(0,Z.Z)((function(t,i){return{name:{title:e.hass.localize("ui.panel.config.backup.name"),main:!0,sortable:!0,filterable:!0,grows:!0,template:function(e,t){return(0,x.dy)(n||(n=(0,h.Z)(["",' <div class="secondary">',"</div>"])),e,t.path)}},size:{title:e.hass.localize("ui.panel.config.backup.size"),width:"15%",hidden:t,filterable:!0,sortable:!0,template:function(e){return Math.ceil(10*e)/10+" MB"}},date:{title:e.hass.localize("ui.panel.config.backup.created"),width:"15%",direction:"desc",hidden:t,filterable:!0,sortable:!0,template:function(t){return(0,_.G)(new Date(t),e.hass.locale)}},actions:{title:"",width:"15%",type:"overflow-menu",template:function(t,i){return(0,x.dy)(a||(a=(0,h.Z)(['<ha-icon-overflow-menu .hass="','" .narrow="','" .items="','" style="color:var(--secondary-text-color)"> </ha-icon-overflow-menu>'])),e.hass,e.narrow,[{path:"M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z",label:e.hass.localize("ui.panel.config.backup.download_backup"),action:function(){return e._downloadBackup(i)}},{path:"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",label:e.hass.localize("ui.panel.config.backup.remove_backup"),action:function(){return e._removeBackup(i)}}])}}}}))}},{kind:"field",key:"_getItems",value:function(){return(0,Z.Z)((function(e){return e.map((function(e){return{name:e.name,slug:e.slug,date:e.date,size:e.size,path:e.path}}))}))}},{kind:"method",key:"render",value:function(){return this.hass&&void 0!==this._backupData?(0,x.dy)(o||(o=(0,h.Z)([' <hass-tabs-subpage-data-table hasFab .tabs="','" .hass="','" .narrow="','" back-path="/config/system" .route="','" .columns="','" .data="','" .noDataText="','" .searchLabel="','"> <ha-fab slot="fab" ?disabled="','" .label="','" extended @click="','"> '," </ha-fab> </hass-tabs-subpage-data-table> "])),[{translationKey:"ui.panel.config.backup.caption",path:"/config/backup"}],this.hass,this.narrow,this.route,this._columns(this.narrow,this.hass.language),this._getItems(this._backupData.backups),this.hass.localize("ui.panel.config.backup.no_backups"),this.hass.localize("ui.panel.config.backup.picker.search"),this._backupData.backing_up,this._backupData.backing_up?this.hass.localize("ui.panel.config.backup.creating_backup"):this.hass.localize("ui.panel.config.backup.create_backup"),this._generateBackup,this._backupData.backing_up?(0,x.dy)(l||(l=(0,h.Z)(['<ha-circular-progress slot="icon" active></ha-circular-progress>']))):(0,x.dy)(d||(d=(0,h.Z)(['<ha-svg-icon slot="icon" .path="','"></ha-svg-icon>'])),"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z")):(0,x.dy)(r||(r=(0,h.Z)(["<hass-loading-screen></hass-loading-screen>"])))}},{kind:"method",key:"firstUpdated",value:function(e){(0,g.Z)((0,y.Z)(H.prototype),"firstUpdated",this).call(this,e),this._getBackups()}},{kind:"method",key:"_getBackups",value:(F=(0,u.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,B.ZE)(this.hass);case 2:this._backupData=e.sent;case 3:case"end":return e.stop()}}),e,this)}))),function(){return F.apply(this,arguments)})},{kind:"method",key:"_downloadBackup",value:(A=(0,u.Z)((0,c.Z)().mark((function e(t){var i;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,C.iI)(this.hass,(0,B.I0)(t.slug));case 2:i=e.sent,(0,z.N)(i.path);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return A.apply(this,arguments)})},{kind:"method",key:"_generateBackup",value:(k=(0,u.Z)((0,c.Z)().mark((function e(){var t=this;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,M.g7)(this,{title:this.hass.localize("ui.panel.config.backup.create.title"),text:this.hass.localize("ui.panel.config.backup.create.description"),confirmText:this.hass.localize("ui.panel.config.backup.create.confirm")});case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return(0,B.Zk)(this.hass).then((function(){return t._getBackups()})).catch((function(e){return(0,M.Ys)(t,{text:e.message})})),e.next=8,this._getBackups();case 8:case"end":return e.stop()}}),e,this)}))),function(){return k.apply(this,arguments)})},{kind:"method",key:"_removeBackup",value:(i=(0,u.Z)((0,c.Z)().mark((function e(t){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,M.g7)(this,{title:this.hass.localize("ui.panel.config.backup.remove.title"),text:this.hass.localize("ui.panel.config.backup.remove.description",{name:t.name}),confirmText:this.hass.localize("ui.panel.config.backup.remove.confirm")});case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,(0,B.FZ)(this.hass,t.slug);case 7:return e.next=9,this._getBackups();case 9:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[(0,x.iv)(s||(s=(0,h.Z)(["ha-fab[disabled]{--mdc-theme-secondary:var(--disabled-text-color)!important}"])))]}}]}}),x.oi)},10520:function(e,t,i){i.r(t);i(7151),i(33633),i(25534),i(64827),i(23044),i(1437),i(87520),i(42661),i(78337),i(87065),i(6042),i(19440),i(50897),i(30056),i(12679)},44281:function(e,t,i){i.d(t,{j:function(){return r}});var n=i(99312),a=i(81043),r=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,new ResizeObserver((function(){})),e.next=9;break;case 4:return e.prev=4,e.t0=e.catch(0),e.next=8,i.e(5442).then(i.bind(i,5442));case 8:window.ResizeObserver=e.sent.default;case 9:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(){return e.apply(this,arguments)}}()},25936:function(e,t,i){i.d(t,{N:function(){return n}});var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=document.createElement("a");i.target="_blank",i.href=e,i.download=t,document.body.appendChild(i),i.dispatchEvent(new MouseEvent("click")),document.body.removeChild(i)}}}]);
//# sourceMappingURL=26590-cB0fXMxwdpg.js.map