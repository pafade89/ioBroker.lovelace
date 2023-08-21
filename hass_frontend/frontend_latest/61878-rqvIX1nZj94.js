"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[61878,4631],{57966:(e,t,i)=>{i.d(t,{z:()=>a});const a=e=>(t,i)=>e.includes(t,i)},55070:(e,t,i)=>{i.d(t,{Eu:()=>o,hZ:()=>n});const a=["#44739e","#984ea3","#00d2d5","#ff7f00","#af8d00","#7f80cd","#b3e900","#c42e60","#a65628","#f781bf","#8dd3c7","#bebada","#fb8072","#80b1d3","#fdb462","#fccde5","#bc80bd","#ffed6f","#c4eaff","#cf8c00","#1b9e77","#d95f02","#e7298a","#e6ab02","#a6761d","#0097ff","#00d067","#f43600","#4ba93b","#5779bb","#927acc","#97ee3f","#bf3947","#9f5b00","#f48758","#8caed6","#f2b94f","#eff26e","#e43872","#d9b100","#9d7a00","#698cff","#d9d9d9","#00d27e","#d06800","#009f82","#c49200","#cbe8ff","#fecddf","#c27eb6","#8cd2ce","#c4b8d9","#f883b0","#a49100","#f48800","#27d0df","#a04a9b"];function o(e){return a[e%a.length]}function n(e,t){return t.getPropertyValue(`--graph-color-${e+1}`)||o(e)}},26410:(e,t,i)=>{i.a(e,(async(e,a)=>{try{i.d(t,{Bt:()=>l,T8:()=>c});var o=i(22075),n=i(66477),r=i(4631),d=e([r]);r=(d.then?(await d)():d)[0];const s=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],l=e=>e.first_weekday===n.FS.language?"weekInfo"in Intl.Locale.prototype?new Intl.Locale(e.language).weekInfo.firstDay%7:(0,o.L)(e.language)%7:s.includes(e.first_weekday)?s.indexOf(e.first_weekday):1,c=e=>{const t=l(e);return s[t]};a()}catch(e){a(e)}}))},65810:(e,t,i)=>{i.d(t,{y:()=>n});var a=i(14516),o=i(66477);const n=(0,a.Z)((e=>{if(e.time_format===o.zt.language||e.time_format===o.zt.system){const t=e.time_format===o.zt.language?e.language:void 0,i=(new Date).toLocaleString(t);return i.includes("AM")||i.includes("PM")}return e.time_format===o.zt.am_pm}))},349:(e,t,i)=>{i.d(t,{m:()=>n});class a{constructor(e=!0,t=window.localStorage){this.storage=void 0,this._storage={},this._listeners={},this.storage=t,e&&window.addEventListener("storage",(e=>{e.key&&this.hasKey(e.key)&&(this._storage[e.key]=e.newValue?JSON.parse(e.newValue):e.newValue,this._listeners[e.key]&&this._listeners[e.key].forEach((t=>t(e.oldValue?JSON.parse(e.oldValue):e.oldValue,this._storage[e.key]))))}))}addFromStorage(e){if(!this._storage[e]){const t=this.storage.getItem(e);t&&(this._storage[e]=JSON.parse(t))}}subscribeChanges(e,t){return this._listeners[e]?this._listeners[e].push(t):this._listeners[e]=[t],()=>{this.unsubscribeChanges(e,t)}}unsubscribeChanges(e,t){if(!(e in this._listeners))return;const i=this._listeners[e].indexOf(t);-1!==i&&this._listeners[e].splice(i,1)}hasKey(e){return e in this._storage}getValue(e){return this._storage[e]}setValue(e,t){this._storage[e]=t;try{void 0===t?this.storage.removeItem(e):this.storage.setItem(e,JSON.stringify(t))}catch(e){}}}const o=new a,n=(e,t,i=!0,n,r)=>d=>{const s=i&&!n?o:new a(i,n),l=String(d.key);e=e||String(d.key);const c=d.initializer?d.initializer():void 0;s.addFromStorage(e);const h=()=>s.hasKey(e)?s.getValue(e):c;return{kind:"method",placement:"prototype",key:d.key,descriptor:{set(i){((i,a)=>{let o;t&&(o=h()),s.setValue(e,a),t&&i.requestUpdate(d.key,o)})(this,i)},get:()=>h(),enumerable:!0,configurable:!0},finisher(a){if(t&&i){const t=a.prototype.connectedCallback,i=a.prototype.disconnectedCallback;a.prototype.connectedCallback=function(){var i;t.call(this),this[`__unbsubLocalStorage${l}`]=(i=this,s.subscribeChanges(e,(e=>{i.requestUpdate(d.key,e)})))},a.prototype.disconnectedCallback=function(){i.call(this),this[`__unbsubLocalStorage${l}`]()}}t&&a.createProperty(d.key,{noAccessor:!0,...r})}}}},58831:(e,t,i)=>{i.d(t,{M:()=>a});const a=e=>e.substr(0,e.indexOf("."))},40095:(e,t,i)=>{i.d(t,{e:()=>a,f:()=>o});const a=(e,t)=>o(e.attributes,t),o=(e,t)=>0!=(e.supported_features&t)},42657:(e,t,i)=>{var a=i(17463),o=i(68144),n=i(79932),r=i(47501),d=i(47181);i(10983);(0,a.Z)([(0,n.Mo)("ha-button-toggle-group")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"buttons",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"active",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"fullWidth",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"dense",value:()=>!1},{kind:"field",decorators:[(0,n.Kt)("mwc-button")],key:"_buttons",value:void 0},{kind:"method",key:"render",value:function(){return o.dy` <div> ${this.buttons.map((e=>e.iconPath?o.dy`<ha-icon-button .label="${e.label}" .path="${e.iconPath}" .value="${e.value}" ?active="${this.active===e.value}" @click="${this._handleClick}"></ha-icon-button>`:o.dy`<mwc-button style="${(0,r.V)({width:this.fullWidth?100/this.buttons.length+"%":"initial"})}" outlined .dense="${this.dense}" .value="${e.value}" ?active="${this.active===e.value}" @click="${this._handleClick}">${e.label}</mwc-button>`))} </div> `}},{kind:"method",key:"updated",value:function(){var e;null===(e=this._buttons)||void 0===e||e.forEach((async e=>{await e.updateComplete,e.shadowRoot.querySelector("button").style.margin="0"}))}},{kind:"method",key:"_handleClick",value:function(e){this.active=e.currentTarget.value,(0,d.B)(this,"value-changed",{value:this.active})}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`div{display:flex;--mdc-icon-button-size:var(--button-toggle-size, 36px);--mdc-icon-size:var(--button-toggle-icon-size, 20px)}mwc-button{--mdc-shape-small:0;--mdc-button-outline-width:1px 0 1px 1px}ha-icon-button{border:1px solid var(--primary-color);border-right-width:0px}ha-icon-button,mwc-button{position:relative;cursor:pointer}ha-icon-button::before,mwc-button::before{top:0;left:0;width:100%;height:100%;position:absolute;background-color:currentColor;opacity:0;pointer-events:none;content:"";transition:opacity 15ms linear,background-color 15ms linear}ha-icon-button[active]::before,mwc-button[active]::before{opacity:var(--mdc-icon-button-ripple-opacity,.12)}ha-icon-button:first-child,mwc-button:first-child{--mdc-shape-small:4px 0 0 4px;border-radius:4px 0 0 4px}ha-icon-button:last-child,mwc-button:last-child{border-radius:0 4px 4px 0;border-right-width:1px;--mdc-shape-small:0 4px 4px 0;--mdc-button-outline-width:1px}ha-icon-button:only-child,mwc-button:only-child{--mdc-shape-small:4px;border-right-width:1px}:host([dir=rtl]) ha-icon-button:first-child,:host([dir=rtl]) mwc-button:first-child{border-radius:0 4px 4px 0;border-right-width:1px;--mdc-shape-small:0 4px 4px 0;--mdc-button-outline-width:1px}:host([dir=rtl]) ha-icon-button:last-child,:host([dir=rtl]) mwc-button:last-child{--mdc-shape-small:4px 0 0 4px;border-radius:4px 0 0 4px}`}}]}}),o.oi)},22098:(e,t,i)=>{var a=i(17463),o=i(68144),n=i(79932);(0,a.Z)([(0,n.Mo)("ha-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,reflect:!0})],key:"raised",value:()=>!1},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`:host{background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,none);box-sizing:border-box;border-radius:var(--ha-card-border-radius,12px);border-width:var(--ha-card-border-width,1px);border-style:solid;border-color:var(--ha-card-border-color,var(--divider-color,#e0e0e0));color:var(--primary-text-color);display:block;transition:all .3s ease-out;position:relative}:host([raised]){border:none;box-shadow:var(--ha-card-box-shadow,0px 2px 1px -1px rgba(0,0,0,.2),0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12))}.card-header,:host ::slotted(.card-header){color:var(--ha-card-header-color,--primary-text-color);font-family:var(--ha-card-header-font-family,inherit);font-size:var(--ha-card-header-font-size,24px);letter-spacing:-.012em;line-height:48px;padding:12px 16px 16px;display:block;margin-block-start:0px;margin-block-end:0px;font-weight:400}:host ::slotted(.card-content:not(:first-child)),slot:not(:first-child)::slotted(.card-content){padding-top:0px;margin-top:-8px}:host ::slotted(.card-content){padding:16px}:host ::slotted(.card-actions){border-top:1px solid var(--divider-color,#e8e8e8);padding:5px 16px}`}},{kind:"method",key:"render",value:function(){return o.dy` ${this.header?o.dy`<h1 class="card-header">${this.header}</h1>`:o.Ld} <slot></slot> `}}]}}),o.oi)},36125:(e,t,i)=>{var a=i(17463),o=i(34541),n=i(47838),r=i(48095),d=i(72477),s=i(79932),l=i(68144);(0,a.Z)([(0,s.Mo)("ha-fab")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"firstUpdated",value:function(e){(0,o.Z)((0,n.Z)(i.prototype),"firstUpdated",this).call(this,e),this.style.setProperty("--mdc-theme-secondary","var(--primary-color)")}},{kind:"field",static:!0,key:"styles",value:()=>[d.W,l.iv`:host .mdc-fab--extended .mdc-fab__icon{margin-inline-start:-8px;margin-inline-end:12px;direction:var(--direction)}`,"rtl"===document.dir?l.iv`:host .mdc-fab--extended .mdc-fab__icon{direction:rtl}`:l.iv``]}]}}),r._)},14471:(e,t,i)=>{var a=i(17463),o=i(34541),n=i(47838),r=i(68144),d=i(79932);i(10983);const s="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";(0,a.Z)([(0,d.Mo)("ha-icon-button-next")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_icon",value:()=>s},{kind:"method",key:"connectedCallback",value:function(){(0,o.Z)((0,n.Z)(i.prototype),"connectedCallback",this).call(this),setTimeout((()=>{this._icon="ltr"===window.getComputedStyle(this).direction?s:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"}),100)}},{kind:"method",key:"render",value:function(){var e;return r.dy` <ha-icon-button .disabled="${this.disabled}" .label="${this.label||(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.next"))||"Next"}" .path="${this._icon}"></ha-icon-button> `}}]}}),r.oi)},17623:(e,t,i)=>{var a=i(17463),o=i(34541),n=i(47838),r=i(68144),d=i(79932);i(10983);const s="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";(0,a.Z)([(0,d.Mo)("ha-icon-button-prev")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_icon",value:()=>s},{kind:"method",key:"connectedCallback",value:function(){(0,o.Z)((0,n.Z)(i.prototype),"connectedCallback",this).call(this),setTimeout((()=>{this._icon="ltr"===window.getComputedStyle(this).direction?s:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}),100)}},{kind:"method",key:"render",value:function(){var e;return r.dy` <ha-icon-button .disabled="${this.disabled}" .label="${this.label||(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.back"))||"Back"}" .path="${this._icon}"></ha-icon-button> `}}]}}),r.oi)},10983:(e,t,i)=>{var a=i(17463),o=(i(20210),i(68144)),n=i(79932),r=i(30153);i(52039);(0,a.Z)([(0,n.Mo)("ha-icon-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:String})],key:"path",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:String})],key:"label",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:String,attribute:"aria-haspopup"})],key:"ariaHasPopup",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"hideTitle",value:()=>!1},{kind:"field",decorators:[(0,n.IO)("mwc-icon-button",!0)],key:"_button",value:void 0},{kind:"method",key:"focus",value:function(){var e;null===(e=this._button)||void 0===e||e.focus()}},{kind:"field",static:!0,key:"shadowRootOptions",value:()=>({mode:"open",delegatesFocus:!0})},{kind:"method",key:"render",value:function(){return o.dy` <mwc-icon-button aria-label="${(0,r.o)(this.label)}" title="${(0,r.o)(this.hideTitle?void 0:this.label)}" aria-haspopup="${(0,r.o)(this.ariaHasPopup)}" .disabled="${this.disabled}"> ${this.path?o.dy`<ha-svg-icon .path="${this.path}"></ha-svg-icon>`:o.dy`<slot></slot>`} </mwc-icon-button> `}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`:host{display:inline-block;outline:0}:host([disabled]){pointer-events:none}mwc-icon-button{--mdc-theme-on-primary:currentColor;--mdc-theme-text-disabled-on-light:var(--disabled-text-color)}`}}]}}),o.oi)},48932:(e,t,i)=>{var a=i(17463),o=i(34541),n=i(47838),r=i(68144),d=i(79932),s=i(47181),l=i(6936);i(10983);(0,a.Z)([(0,d.Mo)("ha-menu-button")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"hassio",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_hasNotifications",value:()=>!1},{kind:"field",key:"_alwaysVisible",value:()=>!1},{kind:"field",key:"_attachNotifOnConnect",value:()=>!1},{kind:"field",key:"_unsubNotifications",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,o.Z)((0,n.Z)(i.prototype),"connectedCallback",this).call(this),this._attachNotifOnConnect&&(this._attachNotifOnConnect=!1,this._subscribeNotifications())}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)((0,n.Z)(i.prototype),"disconnectedCallback",this).call(this),this._unsubNotifications&&(this._attachNotifOnConnect=!0,this._unsubNotifications(),this._unsubNotifications=void 0)}},{kind:"method",key:"render",value:function(){const e=this._hasNotifications&&(this.narrow||"always_hidden"===this.hass.dockedSidebar);return r.dy` <ha-icon-button .label="${this.hass.localize("ui.sidebar.sidebar_toggle")}" .path="${"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"}" @click="${this._toggleMenu}"></ha-icon-button> ${e?r.dy`<div class="dot"></div>`:""} `}},{kind:"method",key:"firstUpdated",value:function(e){(0,o.Z)((0,n.Z)(i.prototype),"firstUpdated",this).call(this,e),this.hassio&&(this._alwaysVisible=(Number(window.parent.frontendVersion)||0)<20190710)}},{kind:"method",key:"updated",value:function(e){if((0,o.Z)((0,n.Z)(i.prototype),"updated",this).call(this,e),!e.has("narrow")&&!e.has("hass"))return;const t=e.get("hass"),a=e.get("narrow")||t&&"always_hidden"===t.dockedSidebar,r=this.narrow||"always_hidden"===this.hass.dockedSidebar;a!==r&&(this.style.display=r||this._alwaysVisible?"initial":"none",r?this._subscribeNotifications():this._unsubNotifications&&(this._unsubNotifications(),this._unsubNotifications=void 0))}},{kind:"method",key:"_subscribeNotifications",value:function(){this._unsubNotifications=(0,l.r)(this.hass.connection,(e=>{this._hasNotifications=e.length>0}))}},{kind:"method",key:"_toggleMenu",value:function(){(0,s.B)(this,"hass-toggle-menu")}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`:host{position:relative}.dot{pointer-events:none;position:absolute;background-color:var(--accent-color);width:12px;height:12px;top:9px;right:7px;border-radius:50%;border:2px solid var(--app-header-background-color)}`}}]}}),r.oi)},52039:(e,t,i)=>{i.d(t,{C:()=>r});var a=i(17463),o=i(68144),n=i(79932);let r=(0,a.Z)([(0,n.Mo)("ha-svg-icon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)()],key:"path",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"viewBox",value:void 0},{kind:"method",key:"render",value:function(){return o.YP` <svg viewBox="${this.viewBox||"0 0 24 24"}" preserveAspectRatio="xMidYMid meet" focusable="false" role="img" aria-hidden="true"> <g> ${this.path?o.YP`<path d="${this.path}"></path>`:""} </g> </svg>`}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`:host{display:var(--ha-icon-display,inline-flex);align-items:center;justify-content:center;position:relative;vertical-align:middle;fill:currentcolor;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px)}svg{width:100%;height:100%;pointer-events:none;display:block}`}}]}}),o.oi)},36226:(e,t,i)=>{var a=i(17463),o=i(73968),n=i(71711),r=i(68144),d=i(79932);(0,a.Z)([(0,d.Mo)("ha-top-app-bar-fixed")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[n.W,r.iv`.mdc-top-app-bar__row{height:var(--header-height);border-bottom:var(--app-header-border-bottom)}.mdc-top-app-bar--fixed-adjust{padding-top:var(--header-height)}.mdc-top-app-bar{--mdc-typography-headline6-font-weight:400;color:var(--app-header-text-color,var(--mdc-theme-on-primary,#fff));background-color:var(--app-header-background-color,var(--mdc-theme-primary))}`]}]}}),o.s)},51144:(e,t,i)=>{i.d(t,{$5:()=>d,GL:()=>l,KI:()=>v,Vt:()=>s,d1:()=>p,fE:()=>u,tT:()=>h});var a=i(55070),o=i(58831),n=i(91741),r=i(56007);let d=function(e){return e.THISEVENT="",e.THISANDFUTURE="THISANDFUTURE",e}({}),s=function(e){return e[e.CREATE_EVENT=1]="CREATE_EVENT",e[e.DELETE_EVENT=2]="DELETE_EVENT",e[e.UPDATE_EVENT=4]="UPDATE_EVENT",e}({});const l=async(e,t,i,a)=>{const o=encodeURI(`?start=${t.toISOString()}&end=${i.toISOString()}`),n=[],r=[],d=[];a.forEach((t=>{d.push(e.callApi("GET",`calendars/${t.entity_id}${o}`))}));for(const[e,t]of d.entries()){let i;try{i=await t}catch(t){r.push(a[e].entity_id);continue}const o=a[e];i.forEach((e=>{const t=c(e.start),i=c(e.end);if(!t||!i)return;const a={uid:e.uid,summary:e.summary,description:e.description,dtstart:t,dtend:i,recurrence_id:e.recurrence_id,rrule:e.rrule},r={start:t,end:i,title:e.summary,backgroundColor:o.backgroundColor,borderColor:o.backgroundColor,calendar:o.entity_id,eventData:a};n.push(r)}))}return{events:n,errors:r}},c=e=>"string"==typeof e?e:e.dateTime?e.dateTime:e.date?e.date:void 0,h=e=>Object.keys(e.states).filter((t=>"calendar"===(0,o.M)(t)&&!(0,r.rk)(e.states[t].state))).sort().map(((t,i)=>({entity_id:t,name:(0,n.C)(e.states[t]),backgroundColor:(0,a.Eu)(i)}))),u=(e,t,i)=>e.callWS({type:"calendar/event/create",entity_id:t,event:i}),v=(e,t,i,a,o,n)=>e.callWS({type:"calendar/event/update",entity_id:t,uid:i,recurrence_id:o,recurrence_range:n,event:a}),p=(e,t,i,a,o)=>e.callWS({type:"calendar/event/delete",entity_id:t,uid:i,recurrence_id:a,recurrence_range:o})},56007:(e,t,i)=>{i.d(t,{PX:()=>r,V_:()=>d,lz:()=>n,nZ:()=>o,rk:()=>l});var a=i(57966);const o="unavailable",n="unknown",r="off",d=[o,n],s=[o,n,r],l=(0,a.z)(d);(0,a.z)(s)},6936:(e,t,i)=>{i.d(t,{r:()=>a});const a=(e,t)=>{const i=new o,a=e.subscribeMessage((e=>t(i.processMessage(e))),{type:"persistent_notification/subscribe"});return()=>{a.then((e=>null==e?void 0:e()))}};class o{constructor(){this.notifications=void 0,this.notifications={}}processMessage(e){if("removed"===e.type)for(const t of Object.keys(e.notifications))delete this.notifications[t];else this.notifications={...this.notifications,...e.notifications};return Object.values(this.notifications)}}},2471:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var a=i(17463),o=i(34541),n=i(47838),r=i(42355),d=i(70695),s=i(44533),l=i(7106),c=i(75069),h=(i(14271),i(68144)),u=i(79932),v=i(14516),p=i(26410),f=i(65810),b=i(47181),y=i(40095),k=i(87744),g=(i(42657),i(36125),i(14471),i(17623),i(51144)),m=i(11654),w=i(99403),_=i(28940),x=e([p]);p=(x.then?(await x)():x)[0];const C="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",V="M21 3H3C2.4 3 2 3.4 2 4V10C2 10.6 2.4 11 3 11H21C21.6 11 22 10.6 22 10V4C22 3.4 21.6 3 21 3M21 13H3C2.4 13 2 13.4 2 14V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20V14C22 13.4 21.6 13 21 13Z",$="M2,3V6H21V3M20,8H3A1,1 0 0,0 2,9V15A1,1 0 0,0 3,16H20A1,1 0 0,0 21,15V9A1,1 0 0,0 20,8M2,21H21V18H2V21Z",E="M16,5V11H21V5M10,11H15V5H10M16,18H21V12H16M10,18H15V12H10M4,18H9V12H4M4,11H9V5H4V11Z",M="M13,5H10A1,1 0 0,0 9,6V18A1,1 0 0,0 10,19H13A1,1 0 0,0 14,18V6A1,1 0 0,0 13,5M20,5H17A1,1 0 0,0 16,6V18A1,1 0 0,0 17,19H20A1,1 0 0,0 21,18V6A1,1 0 0,0 20,5M6,5H3A1,1 0 0,0 2,6V18A1,1 0 0,0 3,19H6A1,1 0 0,0 7,18V6A1,1 0 0,0 6,5Z",S={headerToolbar:!1,plugins:[s.Z,c.Z,l.ZP],initialView:"dayGridMonth",dayMaxEventRows:!0,height:"parent",locales:d.Z,views:{listWeek:{type:"list",duration:{days:7}}}};(0,a.Z)([(0,u.Mo)("ha-full-calendar")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,u.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,u.Cb)({attribute:!1})],key:"events",value:()=>[]},{kind:"field",decorators:[(0,u.Cb)({attribute:!1})],key:"calendars",value:()=>[]},{kind:"field",decorators:[(0,u.Cb)({attribute:!1})],key:"views",value:()=>["dayGridMonth","dayGridWeek","dayGridDay","listWeek"]},{kind:"field",decorators:[(0,u.Cb)()],key:"initialView",value:()=>"dayGridMonth"},{kind:"field",decorators:[(0,u.Cb)()],key:"eventDisplay",value:()=>"auto"},{kind:"field",decorators:[(0,u.Cb)({attribute:!1})],key:"error",value(){}},{kind:"field",key:"calendar",value:void 0},{kind:"field",key:"_viewButtons",value:void 0},{kind:"field",decorators:[(0,u.SB)()],key:"_activeView",value(){return this.initialView}},{kind:"method",key:"updateSize",value:function(){var e;null===(e=this.calendar)||void 0===e||e.updateSize()}},{kind:"method",key:"render",value:function(){const e=this._viewToggleButtons(this.views,this.hass.localize);return h.dy` ${this.calendar?h.dy` ${this.error?h.dy`<ha-alert alert-type="error" dismissable @alert-dismissed-clicked="${this._clearError}">${this.error}</ha-alert>`:""} <div class="header"> ${this.narrow?h.dy` <div class="controls"> <h1>${this.calendar.view.title}</h1> <div> <ha-icon-button-prev .label="${this.hass.localize("ui.common.previous")}" class="prev" @click="${this._handlePrev}"> </ha-icon-button-prev> <ha-icon-button-next .label="${this.hass.localize("ui.common.next")}" class="next" @click="${this._handleNext}"> </ha-icon-button-next> </div> </div> <div class="controls"> <mwc-button outlined class="today" @click="${this._handleToday}">${this.hass.localize("ui.components.calendar.today")}</mwc-button> <ha-button-toggle-group .buttons="${e}" .active="${this._activeView}" @value-changed="${this._handleView}" .dir="${(0,k.Zu)(this.hass)}"></ha-button-toggle-group> </div> `:h.dy` <div class="navigation"> <mwc-button outlined class="today" @click="${this._handleToday}">${this.hass.localize("ui.components.calendar.today")}</mwc-button> <ha-icon-button-prev .label="${this.hass.localize("ui.common.previous")}" class="prev" @click="${this._handlePrev}"> </ha-icon-button-prev> <ha-icon-button-next .label="${this.hass.localize("ui.common.next")}" class="next" @click="${this._handleNext}"> </ha-icon-button-next> </div> <h1>${this.calendar.view.title}</h1> <ha-button-toggle-group .buttons="${e}" .active="${this._activeView}" @value-changed="${this._handleView}" .dir="${(0,k.Zu)(this.hass)}"></ha-button-toggle-group> `} </div> `:""} <div id="calendar"></div> ${this._hasMutableCalendars?h.dy`<ha-fab slot="fab" .label="${this.hass.localize("ui.components.calendar.event.add")}" extended @click="${this._createEvent}"> <ha-svg-icon slot="icon" .path="${C}"></ha-svg-icon> </ha-fab>`:h.Ld} `}},{kind:"method",key:"willUpdate",value:function(e){if((0,o.Z)((0,n.Z)(i.prototype),"willUpdate",this).call(this,e),!this.calendar)return;e.has("events")&&(this.calendar.removeAllEventSources(),this.calendar.addEventSource(this.events)),e.has("views")&&!this.views.includes(this._activeView)&&(this._activeView=this.initialView&&this.views.includes(this.initialView)?this.initialView:this.views[0],this.calendar.changeView(this._activeView),this._fireViewChanged()),e.has("eventDisplay")&&this.calendar.setOption("eventDisplay",this.eventDisplay);const t=e.get("hass");t&&t.language!==this.hass.language&&this.calendar.setOption("locale",this.hass.language)}},{kind:"method",key:"firstUpdated",value:function(){const e={...S,locale:this.hass.language,firstDay:(0,p.Bt)(this.hass.locale),initialView:this.initialView,eventDisplay:this.eventDisplay,eventTimeFormat:{hour:(0,f.y)(this.hass.locale)?"numeric":"2-digit",minute:(0,f.y)(this.hass.locale)?"numeric":"2-digit",hour12:(0,f.y)(this.hass.locale)}};e.dateClick=e=>this._handleDateClick(e),e.eventClick=e=>this._handleEventClick(e),this.calendar=new r.f(this.shadowRoot.getElementById("calendar"),e),this.calendar.render(),this._fireViewChanged()}},{kind:"get",key:"_hasMutableCalendars",value:function(){return this.calendars.some((e=>{const t=this.hass.states[e.entity_id];return t&&(0,y.e)(t,g.Vt.CREATE_EVENT)}))}},{kind:"method",key:"_createEvent",value:function(e){(0,_.R)(this,{selectedDate:"dayGridWeek"===this._activeView||"dayGridDay"===this._activeView||"dayGridMonth"===this._activeView&&this.calendar.view.currentStart.getMonth()!==(new Date).getMonth()?this.calendar.view.currentStart:void 0,updated:()=>{this._fireViewChanged()}})}},{kind:"method",key:"_handleEventClick",value:function(e){const t=this.hass.states[e.event.extendedProps.calendar],i=t&&(0,y.e)(t,g.Vt.UPDATE_EVENT),a=t&&(0,y.e)(t,g.Vt.DELETE_EVENT);(0,w.A)(this,{calendarId:e.event.extendedProps.calendar,entry:e.event.extendedProps.eventData,color:e.event.backgroundColor,updated:()=>{this._fireViewChanged()},canEdit:i,canDelete:a})}},{kind:"method",key:"_handleDateClick",value:function(e){"dayGridMonth"===e.view.type&&(this._activeView="dayGridDay",this.calendar.changeView("dayGridDay"),this.calendar.gotoDate(e.dateStr),this._fireViewChanged())}},{kind:"method",key:"_handleNext",value:function(){this.calendar.next(),this._fireViewChanged()}},{kind:"method",key:"_handlePrev",value:function(){this.calendar.prev(),this._fireViewChanged()}},{kind:"method",key:"_handleToday",value:function(){this.calendar.today(),this._fireViewChanged()}},{kind:"method",key:"_handleView",value:function(e){this._activeView=e.detail.value,this.calendar.changeView(this._activeView),this._fireViewChanged()}},{kind:"method",key:"_fireViewChanged",value:function(){(0,b.B)(this,"view-changed",{start:this.calendar.view.activeStart,end:this.calendar.view.activeEnd,view:this.calendar.view.type})}},{kind:"field",key:"_viewToggleButtons",value(){return(0,v.Z)(((e,t)=>(this._viewButtons||(this._viewButtons=[{label:t("ui.panel.lovelace.editor.card.calendar.views.dayGridMonth"),value:"dayGridMonth",iconPath:E},{label:t("ui.panel.lovelace.editor.card.calendar.views.dayGridWeek"),value:"dayGridWeek",iconPath:M},{label:t("ui.panel.lovelace.editor.card.calendar.views.dayGridDay"),value:"dayGridDay",iconPath:$},{label:t("ui.panel.lovelace.editor.card.calendar.views.listWeek"),value:"listWeek",iconPath:V}]),this._viewButtons.filter((t=>e.includes(t.value))))))}},{kind:"method",key:"_clearError",value:function(){this.error=void 0}},{kind:"get",static:!0,key:"styles",value:function(){return[m.Qx,h.iv`:host{display:flex;flex-direction:column;--fc-theme-standard-border-color:var(--divider-color)}.header{display:flex;align-items:center;justify-content:space-between;padding-bottom:8px}:host([narrow]) .header{padding-right:8px;padding-left:8px;flex-direction:column;align-items:flex-start;justify-content:initial}.navigation{display:flex;align-items:center;flex-grow:0}a{color:var(--primary-color)}.controls{display:flex;justify-content:space-between;align-items:center;width:100%}.today{margin-right:20px;margin-inline-end:20px;margin-inline-start:initial;direction:var(--direction)}.next,.prev{--mdc-icon-button-size:32px}ha-button-toggle-group{color:var(--primary-color)}ha-fab{position:absolute;bottom:32px;right:32px;z-index:1}ha-alert{display:block;margin:4px 0}#calendar{flex-grow:1;background-color:var(--ha-card-background,var(--card-background-color,#fff));min-height:400px;--fc-neutral-bg-color:var(
            --ha-card-background,
            var(--card-background-color, white)
          );--fc-list-event-hover-bg-color:var(
            --ha-card-background,
            var(--card-background-color, white)
          );--fc-theme-standard-border-color:var(--divider-color);--fc-border-color:var(--divider-color);--fc-page-bg-color:var(
            --ha-card-background,
            var(--card-background-color, white)
          )}a{color:inherit!important}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--divider-color);border-radius:var(--mdc-shape-small,4px)}.fc-theme-standard td{border-bottom-left-radius:var(--mdc-shape-small,4px);border-bottom-right-radius:var(--mdc-shape-small,4px)}.fc-scrollgrid-section-header td{border:none}th.fc-col-header-cell.fc-day{background-color:var(--table-header-background-color);color:var(--primary-text-color);font-size:11px;font-weight:700;text-transform:uppercase}.fc-daygrid-dot-event:hover{background-color:inherit}.fc-daygrid-day-top{text-align:center;padding-top:5px;justify-content:center}table.fc-scrollgrid-sync-table tbody tr:first-child .fc-daygrid-day-top{padding-top:0}a.fc-daygrid-day-number{float:none!important;font-size:12px;cursor:pointer}.fc .fc-daygrid-day-number{padding:3px!important}.fc .fc-daygrid-day.fc-day-today{background:inherit}td.fc-day-today .fc-daygrid-day-number{height:26px;color:var(--text-primary-color)!important;background-color:var(--primary-color);border-radius:50%;display:inline-block;text-align:center;white-space:nowrap;width:max-content;min-width:24px}.fc-daygrid-day-events{margin-top:4px}.fc-event{border-radius:4px;line-height:1.7;cursor:pointer}.fc-daygrid-block-event .fc-event-main{padding:0 1px}.fc-day-past .fc-daygrid-day-events{opacity:.5}.fc-icon-x:before{font-family:var(--paper-font-common-base_-_font-family);content:"X"}.fc-popover{background-color:var(--primary-background-color)!important}.fc-popover-header{background-color:var(--secondary-background-color)!important}.fc-theme-standard .fc-list-day-frame{background-color:transparent}.fc-list-event.fc-event td,.fc-list.fc-view{border:none}.fc-list-day.fc-day th{border-bottom:none;border-top:1px solid var(--fc-theme-standard-border-color,#ddd)!important}.fc-list-day-text{font-size:16px;font-weight:400}.fc-list-day-side-text{font-weight:400;font-size:16px;color:var(--primary-color)}.fc-list-day-frame,.fc-list-table td{padding-top:12px;padding-bottom:12px}:host([narrow]) .fc-dayGridMonth-view .fc-daygrid-day-bottom,:host([narrow]) .fc-dayGridMonth-view .fc-daygrid-dot-event .fc-event-time,:host([narrow]) .fc-dayGridMonth-view .fc-daygrid-dot-event .fc-event-title{display:none}:host([narrow]) .fc .fc-dayGridMonth-view .fc-daygrid-event-harness-abs{visibility:visible!important;position:static}:host([narrow]) .fc-dayGridMonth-view .fc-daygrid-day-events{display:flex;min-height:2em!important;justify-content:center;flex-wrap:wrap;max-height:2em;height:2em;overflow:hidden}:host([narrow]) .fc-dayGridMonth-view .fc-scrollgrid-sync-table{overflow:hidden}.fc-scroller::-webkit-scrollbar{width:.4rem;height:.4rem}.fc-scroller::-webkit-scrollbar-thumb{-webkit-border-radius:4px;border-radius:4px;background:var(--scrollbar-thumb-color)}.fc-scroller{overflow-y:auto;scrollbar-color:var(--scrollbar-thumb-color) transparent;scrollbar-width:thin}`]}}]}}),h.oi);t()}catch(e){t(e)}}))},32582:(e,t,i)=>{i.a(e,(async(e,a)=>{try{i.r(t);var o=i(17463),n=i(34541),r=i(47838),d=(i(54040),i(1819),i(68144)),s=i(79932),l=i(47501),c=i(349),h=i(91741),u=(i(22098),i(10983),i(48932),i(51144)),v=i(11654),p=i(2471),f=(i(36226),e([p]));p=(f.then?(await f)():f)[0];const b="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z";(0,o.Z)([(0,s.Mo)("ha-panel-calendar")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_calendars",value:()=>[]},{kind:"field",decorators:[(0,s.SB)()],key:"_events",value:()=>[]},{kind:"field",decorators:[(0,s.SB)()],key:"_error",value(){}},{kind:"field",decorators:[(0,c.m)("deSelectedCalendars",!0)],key:"_deSelectedCalendars",value:()=>[]},{kind:"field",key:"_start",value:void 0},{kind:"field",key:"_end",value:void 0},{kind:"method",key:"willUpdate",value:function(e){(0,n.Z)((0,r.Z)(i.prototype),"willUpdate",this).call(this,e),this.hasUpdated||(this._calendars=(0,u.tT)(this.hass))}},{kind:"method",key:"render",value:function(){return d.dy` <ha-top-app-bar-fixed> <ha-menu-button slot="navigationIcon" .hass="${this.hass}" .narrow="${this.narrow}"></ha-menu-button> <div slot="title">${this.hass.localize("panel.calendar")}</div> <ha-icon-button slot="actionItems" .path="${b}" .label="${this.hass.localize("ui.common.refresh")}" @click="${this._handleRefresh}"></ha-icon-button> <div class="content"> <div class="calendar-list"> <div class="calendar-list-header"> ${this.hass.localize("ui.components.calendar.my_calendars")} </div> ${this._calendars.map((e=>d.dy` <div> <mwc-formfield .label="${e.name}"> <mwc-checkbox style="${(0,l.V)({"--mdc-theme-secondary":e.backgroundColor})}" .value="${e.entity_id}" .checked="${!this._deSelectedCalendars.includes(e.entity_id)}" @change="${this._handleToggle}"></mwc-checkbox> </mwc-formfield> </div> `))} </div> <ha-full-calendar .events="${this._events}" .calendars="${this._calendars}" .narrow="${this.narrow}" .hass="${this.hass}" .error="${this._error}" @view-changed="${this._handleViewChanged}"></ha-full-calendar> </div> </ha-top-app-bar-fixed> `}},{kind:"get",key:"_selectedCalendars",value:function(){return this._calendars.filter((e=>!this._deSelectedCalendars.includes(e.entity_id))).map((e=>e))}},{kind:"method",key:"_fetchEvents",value:async function(e,t,i){return i.length?(0,u.GL)(this.hass,e,t,i):{events:[],errors:[]}}},{kind:"method",key:"_handleToggle",value:async function(e){const t=this._calendars.map((async t=>{if(e.target.value!==t.entity_id)return t;if(e.target.checked){const e=await this._fetchEvents(this._start,this._end,[t]);this._events=[...this._events,...e.events],this._handleErrors(e.errors),this._deSelectedCalendars=this._deSelectedCalendars.filter((e=>e!==t.entity_id))}else this._events=this._events.filter((e=>e.calendar!==t.entity_id)),this._deSelectedCalendars=[...this._deSelectedCalendars,t.entity_id];return t}));this._calendars=await Promise.all(t)}},{kind:"method",key:"_handleViewChanged",value:async function(e){this._start=e.detail.start,this._end=e.detail.end;const t=await this._fetchEvents(this._start,this._end,this._selectedCalendars);this._events=t.events,this._handleErrors(t.errors)}},{kind:"method",key:"_handleRefresh",value:async function(){const e=await this._fetchEvents(this._start,this._end,this._selectedCalendars);this._events=e.events,this._handleErrors(e.errors)}},{kind:"method",key:"_handleErrors",value:function(e){if(this._error=void 0,e.length>0){const t=e.map((e=>this.hass.states[e]?(0,h.C)(this.hass.states[e]):e)).join(", ");this._error=`${this.hass.localize("ui.components.calendar.event_retrieval_error")} ${t}`}}},{kind:"get",static:!0,key:"styles",value:function(){return[v.Qx,d.iv`.content{padding:16px;display:flex;box-sizing:border-box}:host(:not([narrow])) .content{height:calc(100vh - var(--header-height))}.calendar-list{padding-right:16px;padding-inline-end:16px;padding-inline-start:initial;min-width:170px;flex:0 0 15%;overflow-x:hidden;overflow-y:auto;--mdc-theme-text-primary-on-background:var(--primary-text-color);direction:var(--direction)}.calendar-list>div{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.calendar-list-header{font-size:16px;padding:16px 16px 8px 8px}ha-full-calendar{flex-grow:1}:host([narrow]) ha-full-calendar{height:calc(100vh - 72px)}:host([narrow]) .content{flex-direction:column-reverse;padding:8px 0 0 0}:host([narrow]) .calendar-list{margin-bottom:24px;width:100%;padding-right:0}`]}}]}}),d.oi);a()}catch(e){a(e)}}))},99403:(e,t,i)=>{i.d(t,{A:()=>n});var a=i(47181);const o=()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(18239),i.e(25684),i.e(49706),i.e(47772),i.e(48567),i.e(19362),i.e(10520)]).then(i.bind(i,55934)),n=(e,t)=>{(0,a.B)(e,"show-dialog",{dialogTag:"dialog-calendar-event-detail",dialogImport:o,dialogParams:t})}},28940:(e,t,i)=>{i.d(t,{R:()=>n});var a=i(47181);const o=()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(2185),i.e(7270),i.e(18239),i.e(25684),i.e(27136),i.e(49706),i.e(74535),i.e(47772),i.e(48567),i.e(19362),i.e(79042)]).then(i.bind(i,79042)),n=(e,t)=>{(0,a.B)(e,"show-dialog",{dialogTag:"dialog-calendar-event-editor",dialogImport:o,dialogParams:t})}},4631:(e,t,i)=>{i.a(e,(async(e,a)=>{try{i.r(t);var o=i(43170),n=i(27499),r=i(32812),d=i(27815),s=i(64532),l=i(69906),c=i(24517);const e=async()=>{const e=(0,l.sS)(),t=[];(0,r.Y)()&&await Promise.all([i.e(77021),i.e(48196)]).then(i.bind(i,48196)),(0,d.Y)(e)&&t.push(Promise.all([i.e(77021),i.e(20655)]).then(i.bind(i,20655))),(0,s.Y)(e)&&t.push(Promise.all([i.e(77021),i.e(20759)]).then(i.bind(i,20759))),(0,o.Y)(e)&&t.push(Promise.all([i.e(77021),i.e(76554)]).then(i.bind(i,76554)).then((()=>i.e(6042).then(i.t.bind(i,6042,23))))),(0,n.Yq)(e)&&t.push(Promise.all([i.e(77021),i.e(72684)]).then(i.bind(i,72684))),0!==t.length&&await Promise.all(t).then((()=>(0,c.n)(e)))};await e(),a()}catch(e){a(e)}}),1)}}]);
//# sourceMappingURL=61878-rqvIX1nZj94.js.map