export const id=47824;export const ids=[47824];export const modules={25516:(e,t,a)=>{a.d(t,{i:()=>i});const o=(0,a(8330).P)((e=>{history.replaceState({scrollPosition:e},"")}),300),i=e=>t=>({kind:"method",placement:"prototype",key:t.key,descriptor:{set(e){o(e),this[`__${String(t.key)}`]=e},get(){var e;return this[`__${String(t.key)}`]||(null===(e=history.state)||void 0===e?void 0:e.scrollPosition)},enumerable:!0,configurable:!0},finisher(a){const o=a.prototype.connectedCallback;a.prototype.connectedCallback=function(){o.call(this);const a=this[t.key];a&&this.updateComplete.then((()=>{const t=this.renderRoot.querySelector(e);t&&setTimeout((()=>{t.scrollTop=a}),0)}))}}})},15493:(e,t,a)=>{a.d(t,{Q2:()=>o,io:()=>i,j4:()=>r,ou:()=>n,pc:()=>s});const o=()=>{const e={},t=new URLSearchParams(location.search);for(const[a,o]of t.entries())e[a]=o;return e},i=e=>new URLSearchParams(window.location.search).get(e),n=e=>{const t=new URLSearchParams;return Object.entries(e).forEach((([e,a])=>{t.append(e,a)})),t.toString()},r=e=>{const t=new URLSearchParams(window.location.search);return Object.entries(e).forEach((([e,a])=>{t.set(e,a)})),t.toString()},s=e=>{const t=new URLSearchParams(window.location.search);return t.delete(e),t.toString()}},8330:(e,t,a)=>{a.d(t,{P:()=>o});const o=(e,t,a=!0,o=!0)=>{let i,n=0;const r=(...r)=>{const s=()=>{n=!1===a?0:Date.now(),i=void 0,e(...r)},d=Date.now();n||!1!==a||(n=d);const l=t-(d-n);l<=0||l>t?(i&&(clearTimeout(i),i=void 0),n=d,e(...r)):i||!1===o||(i=window.setTimeout(s,l))};return r.cancel=()=>{clearTimeout(i),i=void 0,n=0},r}},22098:(e,t,a)=>{var o=a(17463),i=a(68144),n=a(79932);(0,o.Z)([(0,n.Mo)("ha-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,reflect:!0})],key:"raised",value:()=>!1},{kind:"get",static:!0,key:"styles",value:function(){return i.iv`:host{background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,none);box-sizing:border-box;border-radius:var(--ha-card-border-radius,12px);border-width:var(--ha-card-border-width,1px);border-style:solid;border-color:var(--ha-card-border-color,var(--divider-color,#e0e0e0));color:var(--primary-text-color);display:block;transition:all .3s ease-out;position:relative}:host([raised]){border:none;box-shadow:var(--ha-card-box-shadow,0px 2px 1px -1px rgba(0,0,0,.2),0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12))}.card-header,:host ::slotted(.card-header){color:var(--ha-card-header-color,--primary-text-color);font-family:var(--ha-card-header-font-family,inherit);font-size:var(--ha-card-header-font-size,24px);letter-spacing:-.012em;line-height:48px;padding:12px 16px 16px;display:block;margin-block-start:0px;margin-block-end:0px;font-weight:400}:host ::slotted(.card-content:not(:first-child)),slot:not(:first-child)::slotted(.card-content){padding-top:0px;margin-top:-8px}:host ::slotted(.card-content){padding:16px}:host ::slotted(.card-actions){border-top:1px solid var(--divider-color,#e8e8e8);padding:5px 16px}`}},{kind:"method",key:"render",value:function(){return i.dy` ${this.header?i.dy`<h1 class="card-header">${this.header}</h1>`:i.Ld} <slot></slot> `}}]}}),i.oi)},2315:(e,t,a)=>{var o=a(17463),i=a(34541),n=a(47838),r=a(68144),s=a(79932);a(10983);const d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z";(0,o.Z)([(0,s.Mo)("ha-icon-button-arrow-prev")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_icon",value:()=>d},{kind:"method",key:"connectedCallback",value:function(){(0,i.Z)((0,n.Z)(a.prototype),"connectedCallback",this).call(this),setTimeout((()=>{this._icon="ltr"===window.getComputedStyle(this).direction?d:"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"}),100)}},{kind:"method",key:"render",value:function(){var e;return r.dy` <ha-icon-button .disabled="${this.disabled}" .label="${this.label||(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.back"))||"Back"}" .path="${this._icon}"></ha-icon-button> `}}]}}),r.oi)},10983:(e,t,a)=>{a.d(t,{$:()=>s});var o=a(17463),i=(a(20210),a(68144)),n=a(79932),r=a(30153);a(52039);let s=(0,o.Z)([(0,n.Mo)("ha-icon-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:String})],key:"path",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:String})],key:"label",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:String,attribute:"aria-haspopup"})],key:"ariaHasPopup",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"hideTitle",value:()=>!1},{kind:"field",decorators:[(0,n.IO)("mwc-icon-button",!0)],key:"_button",value:void 0},{kind:"method",key:"focus",value:function(){var e;null===(e=this._button)||void 0===e||e.focus()}},{kind:"field",static:!0,key:"shadowRootOptions",value:()=>({mode:"open",delegatesFocus:!0})},{kind:"method",key:"render",value:function(){return i.dy` <mwc-icon-button aria-label="${(0,r.o)(this.label)}" title="${(0,r.o)(this.hideTitle?void 0:this.label)}" aria-haspopup="${(0,r.o)(this.ariaHasPopup)}" .disabled="${this.disabled}"> ${this.path?i.dy`<ha-svg-icon .path="${this.path}"></ha-svg-icon>`:i.dy`<slot></slot>`} </mwc-icon-button> `}},{kind:"get",static:!0,key:"styles",value:function(){return i.iv`:host{display:inline-block;outline:0}:host([disabled]){pointer-events:none}mwc-icon-button{--mdc-theme-on-primary:currentColor;--mdc-theme-text-disabled-on-light:var(--disabled-text-color)}`}}]}}),i.oi)},48932:(e,t,a)=>{var o=a(17463),i=a(34541),n=a(47838),r=a(68144),s=a(79932),d=a(47181),l=a(6936);a(10983);(0,o.Z)([(0,s.Mo)("ha-menu-button")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"hassio",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_hasNotifications",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_show",value:()=>!1},{kind:"field",key:"_alwaysVisible",value:()=>!1},{kind:"field",key:"_attachNotifOnConnect",value:()=>!1},{kind:"field",key:"_unsubNotifications",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,i.Z)((0,n.Z)(a.prototype),"connectedCallback",this).call(this),this._attachNotifOnConnect&&(this._attachNotifOnConnect=!1,this._subscribeNotifications())}},{kind:"method",key:"disconnectedCallback",value:function(){(0,i.Z)((0,n.Z)(a.prototype),"disconnectedCallback",this).call(this),this._unsubNotifications&&(this._attachNotifOnConnect=!0,this._unsubNotifications(),this._unsubNotifications=void 0)}},{kind:"method",key:"render",value:function(){if(!this._show)return r.Ld;const e=this._hasNotifications&&(this.narrow||"always_hidden"===this.hass.dockedSidebar);return r.dy` <ha-icon-button .label="${this.hass.localize("ui.sidebar.sidebar_toggle")}" .path="${"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"}" @click="${this._toggleMenu}"></ha-icon-button> ${e?r.dy`<div class="dot"></div>`:""} `}},{kind:"method",key:"firstUpdated",value:function(e){(0,i.Z)((0,n.Z)(a.prototype),"firstUpdated",this).call(this,e),this.hassio&&(this._alwaysVisible=(Number(window.parent.frontendVersion)||0)<20190710)}},{kind:"method",key:"willUpdate",value:function(e){if((0,i.Z)((0,n.Z)(a.prototype),"willUpdate",this).call(this,e),!e.has("narrow")&&!e.has("hass"))return;const t=e.has("hass")?e.get("hass"):this.hass,o=(e.has("narrow")?e.get("narrow"):this.narrow)||"always_hidden"===(null==t?void 0:t.dockedSidebar),r=this.narrow||"always_hidden"===this.hass.dockedSidebar;this.hasUpdated&&o===r||(this._show=r||this._alwaysVisible,r?this._subscribeNotifications():this._unsubNotifications&&(this._unsubNotifications(),this._unsubNotifications=void 0))}},{kind:"method",key:"_subscribeNotifications",value:function(){if(this._unsubNotifications)throw new Error("Already subscribed");this._unsubNotifications=(0,l.r)(this.hass.connection,(e=>{this._hasNotifications=e.length>0}))}},{kind:"method",key:"_toggleMenu",value:function(){(0,d.B)(this,"hass-toggle-menu")}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`:host{position:relative}.dot{pointer-events:none;position:absolute;background-color:var(--accent-color);width:12px;height:12px;top:9px;right:7px;border-radius:50%;border:2px solid var(--app-header-background-color)}`}}]}}),r.oi)},52039:(e,t,a)=>{a.d(t,{C:()=>r});var o=a(17463),i=a(68144),n=a(79932);let r=(0,o.Z)([(0,n.Mo)("ha-svg-icon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)()],key:"path",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"viewBox",value:void 0},{kind:"method",key:"render",value:function(){return i.YP` <svg viewBox="${this.viewBox||"0 0 24 24"}" preserveAspectRatio="xMidYMid meet" focusable="false" role="img" aria-hidden="true"> <g> ${this.path?i.YP`<path d="${this.path}"></path>`:""} </g> </svg>`}},{kind:"get",static:!0,key:"styles",value:function(){return i.iv`:host{display:var(--ha-icon-display,inline-flex);align-items:center;justify-content:center;position:relative;vertical-align:middle;fill:currentcolor;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px)}svg{width:100%;height:100%;pointer-events:none;display:block}`}}]}}),i.oi)},22814:(e,t,a)=>{a.d(t,{TZ:()=>r,W2:()=>n,iI:()=>i,oT:()=>o});const o=e=>e.map((e=>{if("string"!==e.type)return e;switch(e.name){case"username":return{...e,autocomplete:"username"};case"password":return{...e,autocomplete:"current-password"};case"code":return{...e,autocomplete:"one-time-code"};default:return e}})),i=(e,t)=>e.callWS({type:"auth/sign_path",path:t}),n=async(e,t,a,o)=>e.callWS({type:"config/auth_provider/homeassistant/create",user_id:t,username:a,password:o}),r=async(e,t,a)=>e.callWS({type:"config/auth_provider/homeassistant/admin_change_password",user_id:t,password:a})},73728:(e,t,a)=>{a.d(t,{D4:()=>c,D7:()=>_,Ky:()=>l,P3:()=>s,V3:()=>g,WW:()=>m,XO:()=>h,ZJ:()=>b,d4:()=>f,oi:()=>p,pV:()=>r,zO:()=>u});var o=a(97330),i=a(38346),n=a(5986);const r=32143==a.j?["bluetooth","dhcp","discovery","hardware","hassio","homekit","integration_discovery","mqtt","ssdp","unignore","usb","zeroconf"]:null,s=32143==a.j?["reauth"]:null,d={"HA-Frontend-Base":`${location.protocol}//${location.host}`},l=(e,t)=>{var a;return e.callApi("POST","config/config_entries/flow",{handler:t,show_advanced_options:Boolean(null===(a=e.userData)||void 0===a?void 0:a.showAdvanced)},d)},c=(e,t)=>e.callApi("GET",`config/config_entries/flow/${t}`,void 0,d),h=(e,t,a)=>e.callApi("POST",`config/config_entries/flow/${t}`,a,d),u=(e,t,a)=>e.callWS({type:"config_entries/ignore_flow",flow_id:t,title:a}),p=(e,t)=>e.callApi("DELETE",`config/config_entries/flow/${t}`),f=(e,t)=>e.callApi("GET","config/config_entries/flow_handlers"+(t?`?type=${t}`:"")),_=e=>e.sendMessagePromise({type:"config_entries/flow/progress"}),v=(e,t)=>e.subscribeEvents((0,i.D)((()=>_(e).then((e=>t.setState(e,!0)))),500,!0),"config_entry_discovered"),b=e=>(0,o._)(e,"_configFlowProgress",_,v),g=(e,t)=>b(e.connection).subscribe(t),m=(e,t)=>t.context.title_placeholders&&0!==Object.keys(t.context.title_placeholders).length?e(`component.${t.handler}.config.flow_title`,t.context.title_placeholders)||("name"in t.context.title_placeholders?t.context.title_placeholders.name:(0,n.Lh)(e,t.handler)):(0,n.Lh)(e,t.handler)},42916:(e,t,a)=>{a.d(t,{ZK:()=>r,iP:()=>n,lf:()=>i,pD:()=>o});const o=e=>e.callWS({type:"diagnostics/list"}),i=(e,t)=>e.callWS({type:"diagnostics/get",domain:t}),n=e=>`/api/diagnostics/config_entry/${e}`,r=(e,t)=>`/api/diagnostics/config_entry/${e}/device/${t}`},6936:(e,t,a)=>{a.d(t,{r:()=>o});const o=(e,t)=>{const a=new i,o=e.subscribeMessage((e=>t(a.processMessage(e))),{type:"persistent_notification/subscribe"});return()=>{o.then((e=>null==e?void 0:e()))}};class i{constructor(){this.notifications=void 0,this.notifications={}}processMessage(e){if("removed"===e.type)for(const t of Object.keys(e.notifications))delete this.notifications[t];else this.notifications={...this.notifications,...e.notifications};return Object.values(this.notifications)}}},2852:(e,t,a)=>{a.d(t,{t:()=>s});var o=a(68144),i=a(73728),n=a(5986),r=a(52871);const s=(e,t)=>(0,r.w)(e,t,{loadDevicesAndAreas:!0,createFlow:async(e,t)=>{const[a]=await Promise.all([(0,i.Ky)(e,t),e.loadFragmentTranslation("config"),e.loadBackendTranslation("config",t),e.loadBackendTranslation("selector",t),e.loadBackendTranslation("title",t)]);return a},fetchFlow:async(e,t)=>{const a=await(0,i.D4)(e,t);return await e.loadFragmentTranslation("config"),await e.loadBackendTranslation("config",a.handler),await e.loadBackendTranslation("selector",a.handler),a},handleFlowStep:i.XO,deleteFlow:i.oi,renderAbortDescription(e,t){const a=e.localize(`component.${t.handler}.config.abort.${t.reason}`,t.description_placeholders);return a?o.dy` <ha-markdown allowsvg breaks .content="${a}"></ha-markdown> `:""},renderShowFormStepHeader:(e,t)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.title`,t.description_placeholders)||e.localize(`component.${t.handler}.title`),renderShowFormStepDescription(e,t){const a=e.localize(`component.${t.handler}.config.step.${t.step_id}.description`,t.description_placeholders);return a?o.dy` <ha-markdown allowsvg breaks .content="${a}"></ha-markdown> `:""},renderShowFormStepFieldLabel:(e,t,a)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.data.${a.name}`),renderShowFormStepFieldHelper(e,t,a){const i=e.localize(`component.${t.handler}.config.step.${t.step_id}.data_description.${a.name}`,t.description_placeholders);return i?o.dy`<ha-markdown breaks .content="${i}"></ha-markdown>`:""},renderShowFormStepFieldError:(e,t,a)=>e.localize(`component.${t.handler}.config.error.${a}`,t.description_placeholders)||a,renderShowFormStepFieldLocalizeValue:(e,t,a)=>e.localize(`component.${t.handler}.selector.${a}`),renderShowFormStepSubmitButton:(e,t)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.submit`)||e.localize("ui.panel.config.integrations.config_flow."+(!1===t.last_step?"next":"submit")),renderExternalStepHeader:(e,t)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.title`)||e.localize("ui.panel.config.integrations.config_flow.external_step.open_site"),renderExternalStepDescription(e,t){const a=e.localize(`component.${t.handler}.config.${t.step_id}.description`,t.description_placeholders);return o.dy` <p> ${e.localize("ui.panel.config.integrations.config_flow.external_step.description")} </p> ${a?o.dy` <ha-markdown allowsvg breaks .content="${a}"></ha-markdown> `:""} `},renderCreateEntryDescription(e,t){const a=e.localize(`component.${t.handler}.config.create_entry.${t.description||"default"}`,t.description_placeholders);return o.dy` ${a?o.dy` <ha-markdown allowsvg breaks .content="${a}"></ha-markdown> `:""} <p> ${e.localize("ui.panel.config.integrations.config_flow.created_config","name",t.title)} </p> `},renderShowFormProgressHeader:(e,t)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.title`)||e.localize(`component.${t.handler}.title`),renderShowFormProgressDescription(e,t){const a=e.localize(`component.${t.handler}.config.progress.${t.progress_action}`,t.description_placeholders);return a?o.dy` <ha-markdown allowsvg breaks .content="${a}"></ha-markdown> `:""},renderMenuHeader:(e,t)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.title`)||e.localize(`component.${t.handler}.title`),renderMenuDescription(e,t){const a=e.localize(`component.${t.handler}.config.step.${t.step_id}.description`,t.description_placeholders);return a?o.dy` <ha-markdown allowsvg breaks .content="${a}"></ha-markdown> `:""},renderMenuOption:(e,t,a)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.menu_options.${a}`,t.description_placeholders),renderLoadingDescription(e,t,a,o){if("loading_flow"!==t&&"loading_step"!==t)return"";const i=(null==o?void 0:o.handler)||a;return e.localize(`ui.panel.config.integrations.config_flow.loading.${t}`,{integration:i?(0,n.Lh)(e.localize,i):e.localize("ui.panel.config.integrations.config_flow.loading.fallback_title")})}})},52871:(e,t,a)=>{a.d(t,{w:()=>n});var o=a(47181);const i=()=>Promise.all([a.e(46992),a.e(31338),a.e(42977),a.e(28597),a.e(97487),a.e(2185),a.e(52154),a.e(62043),a.e(40163),a.e(59159)]).then(a.bind(a,59159)),n=(e,t,a)=>{(0,o.B)(e,"show-dialog",{dialogTag:"dialog-data-entry-flow",dialogImport:i,dialogParams:{...t,flowConfig:a,dialogParentElement:e}})}},60010:(e,t,a)=>{var o=a(17463),i=a(34541),n=a(47838),r=a(68144),s=a(79932),d=a(25516),l=a(70518),c=a(87744),h=(a(2315),a(48932),a(11654));(0,o.Z)([(0,s.Mo)("hass-subpage")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"main-page"})],key:"mainPage",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"backCallback",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"supervisor",value:()=>!1},{kind:"field",decorators:[(0,d.i)(".content")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"willUpdate",value:function(e){if((0,i.Z)((0,n.Z)(a.prototype),"willUpdate",this).call(this,e),!e.has("hass"))return;const t=e.get("hass");t&&t.locale===this.hass.locale||(0,l.X)(this,"rtl",(0,c.HE)(this.hass))}},{kind:"method",key:"render",value:function(){var e;return r.dy` <div class="toolbar"> ${this.mainPage||null!==(e=history.state)&&void 0!==e&&e.root?r.dy` <ha-menu-button .hassio="${this.supervisor}" .hass="${this.hass}" .narrow="${this.narrow}"></ha-menu-button> `:this.backPath?r.dy` <a href="${this.backPath}"> <ha-icon-button-arrow-prev .hass="${this.hass}"></ha-icon-button-arrow-prev> </a> `:r.dy` <ha-icon-button-arrow-prev .hass="${this.hass}" @click="${this._backTapped}"></ha-icon-button-arrow-prev> `} <div class="main-title"><slot name="header">${this.header}</slot></div> <slot name="toolbar-icon"></slot> </div> <div class="content ha-scrollbar" @scroll="${this._saveScrollPos}"> <slot></slot> </div> <div id="fab"> <slot name="fab"></slot> </div> `}},{kind:"method",decorators:[(0,s.hO)({passive:!0})],key:"_saveScrollPos",value:function(e){this._savedScrollPos=e.target.scrollTop}},{kind:"method",key:"_backTapped",value:function(){this.backCallback?this.backCallback():history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[h.$c,r.iv`:host{display:block;height:100%;background-color:var(--primary-background-color);overflow:hidden;position:relative}:host([narrow]){width:100%;position:fixed}.toolbar{display:flex;align-items:center;font-size:20px;height:var(--header-height);padding:8px 12px;pointer-events:none;background-color:var(--app-header-background-color);font-weight:400;color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box}@media (max-width:599px){.toolbar{padding:4px}}.toolbar a{color:var(--sidebar-text-color);text-decoration:none}::slotted([slot=toolbar-icon]),ha-icon-button-arrow-prev,ha-menu-button{pointer-events:auto;color:var(--sidebar-icon-color)}.main-title{margin:0 0 0 24px;line-height:20px;flex-grow:1}.content{position:relative;width:100%;height:calc(100% - 1px - var(--header-height));overflow-y:auto;overflow:auto;-webkit-overflow-scrolling:touch}#fab{position:absolute;right:calc(16px + env(safe-area-inset-right));bottom:calc(16px + env(safe-area-inset-bottom));z-index:1}:host([narrow]) #fab.tabs{bottom:calc(84px + env(safe-area-inset-bottom))}#fab[is-wide]{bottom:24px;right:24px}:host([rtl]) #fab{right:auto;left:calc(16px + env(safe-area-inset-left))}:host([rtl][is-wide]) #fab{bottom:24px;left:24px;right:auto}`]}}]}}),r.oi)},47824:(e,t,a)=>{a.r(t),a.d(t,{ThreadConfigPanel:()=>x});var o=a(17463),i=a(34541),n=a(47838),r=(a(14271),a(68144)),s=a(79932),d=a(14516),l=a(7323),c=a(85415),h=a(15493),u=(a(22098),a(22814)),p=a(42916);class f{constructor(){this.routers=void 0,this.routers={}}processEvent(e){return"router_discovered"===e.type?this.routers[e.key]=e.data:"router_removed"===e.type&&delete this.routers[e.key],Object.values(this.routers)}}const _=(e,t)=>{const a=new f;return e.connection.subscribeMessage((e=>t(a.processEvent(e))),{type:"thread/discover_routers"})};var v=a(2852),b=a(26765),g=(a(60010),a(73826)),m=a(11654),k=a(11254),y=a(25936);const w="M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6M13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16S13.61 14.33 13 13.78V12M11 17.5C10.17 17.5 9.5 16.83 9.5 16S10.17 14.5 11 14.5 12.5 15.17 12.5 16 11.83 17.5 11 17.5M22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8M21 18H17V10H21V18Z",$="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z";let x=(0,o.Z)([(0,s.Mo)("thread-config-panel")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_configEntryId",value:()=>null},{kind:"field",decorators:[(0,s.SB)()],key:"_routers",value:()=>[]},{kind:"field",decorators:[(0,s.SB)()],key:"_datasets",value:()=>[]},{kind:"field",decorators:[(0,s.SB)()],key:"_otbrInfo",value:void 0},{kind:"method",key:"render",value:function(){const e=this._groupRoutersByNetwork(this._routers,this._datasets);return r.dy` <hass-subpage .narrow="${this.narrow}" .hass="${this.hass}" header="Thread"> <ha-button-menu slot="toolbar-icon"> <ha-icon-button .path="${$}" slot="trigger"></ha-icon-button> <a href="${(0,p.iP)(this._configEntryId||"")}" target="_blank" @click="${this._signUrl}"> <mwc-list-item> ${this.hass.localize("ui.panel.config.integrations.config_entry.download_diagnostics")} </mwc-list-item> </a> <mwc-list-item @click="${this._addTLV}">${this.hass.localize("ui.panel.config.thread.add_dataset_from_tlv")}</mwc-list-item> ${this._otbrInfo?"":r.dy`<mwc-list-item @click="${this._addOTBR}">${this.hass.localize("ui.panel.config.thread.add_open_thread_border_router")}</mwc-list-item>`} </ha-button-menu> <div class="content"> <h1>${this.hass.localize("ui.panel.config.thread.my_network")}</h1> ${e.preferred?this._renderNetwork(e.preferred):r.dy`<ha-card> <div class="card-content no-routers"> <h3> ${this.hass.localize("ui.panel.config.thread.no_preferred_network")} </h3> <ha-svg-icon .path="${w}"></ha-svg-icon> <mwc-button @click="${this._addOTBR}">${this.hass.localize("ui.panel.config.thread.add_open_thread_border_router")}</mwc-button> </div> </ha-card>`} ${e.networks.length?r.dy`<h3> ${this.hass.localize("ui.panel.config.thread.other_networks")} </h3> ${e.networks.map((e=>this._renderNetwork(e)))}`:""} </div> </hass-subpage> `}},{kind:"method",key:"_renderNetwork",value:function(e){var t,a,o,i;return r.dy`<ha-card> <div class="card-header"> ${e.name}${e.dataset?r.dy`<div> <ha-icon-button .networkDataset="${e.dataset}" .path="${"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"}" @click="${this._showDatasetInfo}"></ha-icon-button>${e.dataset.preferred||null!==(t=e.routers)&&void 0!==t&&t.length?"":r.dy`<ha-icon-button .networkDataset="${e.dataset}" .path="${"M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"}" @click="${this._removeDataset}"></ha-icon-button>`} </div>`:""} </div> ${null!==(a=e.routers)&&void 0!==a&&a.length?r.dy`<div class="card-content routers"> <h4> ${this.hass.localize("ui.panel.config.thread.border_routers",{count:e.routers.length})} </h4> </div> ${e.routers.map((t=>{var a,o,i,n;return r.dy`<ha-list-item class="router" twoline graphic="avatar" .hasMeta="${t.extended_address===(null===(a=this._otbrInfo)||void 0===a?void 0:a.extended_address)}"> <img slot="graphic" .src="${(0,k.X1)({domain:t.brand,brand:!0,type:"icon",darkOptimized:null===(o=this.hass.themes)||void 0===o?void 0:o.darkMode})}" alt="${t.brand}" referrerpolicy="no-referrer" @error="${this._onImageError}" @load="${this._onImageLoad}"> ${t.model_name||t.server.replace(".local.","")} <span slot="secondary">${t.server}</span> ${t.extended_address===(null===(i=this._otbrInfo)||void 0===i?void 0:i.extended_address)?r.dy`<ha-button-menu slot="meta" @action="${this._handleRouterAction}"> <ha-icon-button .label="${this.hass.localize("ui.common.overflow_menu")}" .path="${$}" slot="trigger"></ha-icon-button><ha-list-item>${this.hass.localize("ui.panel.config.thread.reset_border_router")}</ha-list-item><ha-list-item>${this.hass.localize("ui.panel.config.thread.change_channel")}</ha-list-item>${null!==(n=e.dataset)&&void 0!==n&&n.preferred?"":r.dy`<ha-list-item>${this.hass.localize("ui.panel.config.thread.add_to_my_network")}</ha-list-item>`}</ha-button-menu>`:""} </ha-list-item>`}))}`:r.dy`<div class="card-content no-routers"> <ha-svg-icon .path="${w}"></ha-svg-icon> ${null!==(o=e.dataset)&&void 0!==o&&o.extended_pan_id&&null!==(i=this._otbrInfo)&&void 0!==i&&null!==(i=i.active_dataset_tlvs)&&void 0!==i&&i.includes(e.dataset.extended_pan_id)?r.dy`${this.hass.localize("ui.panel.config.thread.no_routers_otbr_network")} <mwc-button @click="${this._resetBorderRouter}">${this.hass.localize("ui.panel.config.thread.reset_border_router")}</mwc-button>`:this.hass.localize("ui.panel.config.thread.no_border_routers")} </div> `} ${e.dataset&&!e.dataset.preferred?r.dy`<div class="card-actions"> <mwc-button .datasetId="${e.dataset.dataset_id}" @click="${this._setPreferred}">Make preferred network</mwc-button> </div>`:""} </ha-card>`}},{kind:"method",key:"_showDatasetInfo",value:async function(e){const t=e.currentTarget.networkDataset;var a;if(this._otbrInfo&&(t.extended_pan_id&&null!==(a=this._otbrInfo.active_dataset_tlvs)&&void 0!==a&&a.includes(t.extended_pan_id)))return void(0,b.Ys)(this,{title:t.network_name,text:r.dy`Network name: ${t.network_name}<br> Channel: ${t.channel}<br> Dataset id: ${t.dataset_id}<br> Pan id: ${t.pan_id}<br> Extended Pan id: ${t.extended_pan_id}<br> OTBR URL: ${this._otbrInfo.url}<br> Active dataset TLVs: ${this._otbrInfo.active_dataset_tlvs}`});(0,b.Ys)(this,{title:t.network_name,text:r.dy`Network name: ${t.network_name}<br> Channel: ${t.channel}<br> Dataset id: ${t.dataset_id}<br> Pan id: ${t.pan_id}<br> Extended Pan id: ${t.extended_pan_id}`})}},{kind:"method",key:"_onImageError",value:function(e){e.target.style.display="none"}},{kind:"method",key:"_onImageLoad",value:function(e){e.target.style.display=""}},{kind:"method",key:"hassSubscribe",value:function(){return[_(this.hass,(e=>{this._routers=e}))]}},{kind:"method",key:"firstUpdated",value:function(e){(0,i.Z)((0,n.Z)(a.prototype),"firstUpdated",this).call(this,e),this._refresh(),this._configEntryId=(0,h.io)("config_entry")}},{kind:"field",key:"_groupRoutersByNetwork",value(){return(0,d.Z)(((e,t)=>{let a;const o={};for(const t of e){const e=t.extended_pan_id;e in o?o[e].routers.push(t):o[e]={name:t.network_name,routers:[t]}}for(const e of t){const t=e.extended_pan_id;var i;if(t)if(e.preferred)a={name:e.network_name,dataset:e,routers:null===(i=o[t])||void 0===i?void 0:i.routers},delete o[t];else t in o?o[t].dataset=e:o[t]={name:e.network_name,dataset:e}}return{preferred:a,networks:Object.values(o).sort(((e,t)=>(0,c.$)(e.name,t.name,this.hass.locale.language)))}}))}},{kind:"method",key:"_refresh",value:async function(){var e;if((e=this.hass,e.callWS({type:"thread/list_datasets"})).then((e=>{this._datasets=e.datasets})),(0,l.p)(this.hass,"otbr"))try{const e=(e=>e.callWS({type:"otbr/get_extended_address"}))(this.hass),t=(e=>e.callWS({type:"otbr/info"}))(this.hass),[a,o]=await Promise.all([e,t]);this._otbrInfo={...a,...o}}catch(e){this._otbrInfo=void 0}}},{kind:"method",key:"_signUrl",value:async function(e){const t=e.target.closest("a");e.preventDefault();const a=await(0,u.iI)(this.hass,t.getAttribute("href"));(0,y.N)(a.path)}},{kind:"method",key:"_addOTBR",value:function(){var e;(0,v.t)(this,{dialogClosedCallback:()=>{this._refresh()},startFlowHandler:"otbr",showAdvanced:null===(e=this.hass.userData)||void 0===e?void 0:e.showAdvanced})}},{kind:"method",key:"_handleRouterAction",value:function(e){switch(e.detail.index){case 0:this._resetBorderRouter();break;case 1:this._changeChannel();break;case 2:this._setDataset()}}},{kind:"method",key:"_resetBorderRouter",value:async function(){if(await(0,b.g7)(this,{title:this.hass.localize("ui.panel.config.thread.confirm_reset_border_router"),text:this.hass.localize("ui.panel.config.thread.confirm_reset_border_router_text")})){try{await(e=this.hass,e.callWS({type:"otbr/create_network"}))}catch(e){(0,b.Ys)(this,{title:this.hass.localize("ui.panel.config.thread.otbr_config_failed"),text:e.message})}var e;this._refresh()}}},{kind:"method",key:"_setDataset",value:async function(){var e;const t=null===(e=this._groupRoutersByNetwork(this._routers,this._datasets).preferred)||void 0===e||null===(e=e.dataset)||void 0===e?void 0:e.dataset_id;if(!t)return;if(await(0,b.g7)(this,{title:this.hass.localize("ui.panel.config.thread.confirm_set_dataset_border_router"),text:this.hass.localize("ui.panel.config.thread.confirm_set_dataset_border_router_text")})){try{await(a=this.hass,o=t,a.callWS({type:"otbr/set_network",dataset_id:o}))}catch(e){(0,b.Ys)(this,{title:this.hass.localize("ui.panel.config.thread.otbr_config_failed"),text:e.message})}var a,o;this._refresh()}}},{kind:"method",key:"_setPreferred",value:async function(e){const t=e.target.datasetId;var a,o;await(a=this.hass,o=t,a.callWS({type:"thread/set_preferred_dataset",dataset_id:o})),this._refresh()}},{kind:"method",key:"_addTLV",value:async function(){const e=await(0,b.D9)(this,{title:this.hass.localize("ui.panel.config.thread.add_dataset"),inputLabel:this.hass.localize("ui.panel.config.thread.add_dataset_label"),confirmText:this.hass.localize("ui.panel.config.thread.add_dataset_button")});if(e){try{await((e,t,a)=>e.callWS({type:"thread/add_dataset_tlv",source:t,tlv:a}))(this.hass,"manual",e)}catch(e){(0,b.Ys)(this,{title:"Error",text:e.message||e})}this._refresh()}}},{kind:"method",key:"_removeDataset",value:async function(e){const t=e.currentTarget.networkDataset;if(await(0,b.g7)(this,{title:this.hass.localize("ui.panel.config.thread.confirm_delete_dataset",{name:t.network_name}),text:this.hass.localize("ui.panel.config.thread.confirm_delete_dataset_text"),destructive:!0,confirmText:this.hass.localize("ui.common.delete")})){try{await(a=this.hass,o=t.dataset_id,a.callWS({type:"thread/delete_dataset",dataset_id:o}))}catch(e){(0,b.Ys)(this,{title:"Error",text:e.message||e})}var a,o;this._refresh()}}},{kind:"method",key:"_changeChannel",value:async function(){var e;const t=null===(e=this._otbrInfo)||void 0===e?void 0:e.channel,a=await(0,b.D9)(this,{title:this.hass.localize("ui.panel.config.thread.change_channel"),text:this.hass.localize("ui.panel.config.thread.change_channel_text"),inputLabel:this.hass.localize("ui.panel.config.thread.change_channel_label"),confirmText:this.hass.localize("ui.panel.config.thread.change_channel"),inputType:"number",inputMin:"11",inputMax:"26",defaultValue:t?t.toString():void 0});if(!a)return;const o=parseInt(a);if(o<11||o>26)(0,b.Ys)(this,{title:this.hass.localize("ui.panel.config.thread.change_channel_invalid"),text:this.hass.localize("ui.panel.config.thread.change_channel_range")});else{try{const e=await((e,t)=>e.callWS({type:"otbr/set_channel",channel:t}))(this.hass,o);(0,b.Ys)(this,{title:this.hass.localize("ui.panel.config.thread.change_channel_initiated_title"),text:this.hass.localize("ui.panel.config.thread.change_channel_initiated_text",{delay:Math.floor(e.delay/60)})})}catch(e){if("multiprotocol_enabled"===e.code)return void(0,b.Ys)(this,{title:this.hass.localize("ui.panel.config.thread.change_channel_multiprotocol_enabled_title"),text:this.hass.localize("ui.panel.config.thread.change_channel_multiprotocol_enabled_text")});(0,b.Ys)(this,{title:"Error",text:e.message||e})}this._refresh()}}},{kind:"field",static:!0,key:"styles",value:()=>[m.Qx,r.iv`.content{padding:24px 8px 32px;max-width:600px;margin:0 auto;direction:ltr}ha-list-item.router{--mdc-list-side-padding:16px;--mdc-list-item-meta-size:48px;cursor:default;overflow:visible}ha-button-menu a{text-decoration:none}.routers{padding-bottom:0}.no-routers{display:flex;flex-direction:column;align-items:center;text-align:center}.no-routers ha-svg-icon{background-color:var(--light-primary-color);color:var(--secondary-text-color);padding:16px;border-radius:50%;margin-bottom:8px}ha-card{margin-bottom:16px}h4{margin:0}.card-header{display:flex;justify-content:space-between}`]}]}}),(0,g.f)(r.oi))},11254:(e,t,a)=>{a.d(t,{RU:()=>i,X1:()=>o,u4:()=>n,zC:()=>r});const o=e=>`https://brands.home-assistant.io/${e.brand?"brands/":""}${e.useFallback?"_/":""}${e.domain}/${e.darkOptimized?"dark_":""}${e.type}.png`,i=e=>`https://brands.home-assistant.io/hardware/${e.category}/${e.darkOptimized?"dark_":""}${e.manufacturer}${e.model?`_${e.model}`:""}.png`,n=e=>e.split("/")[4],r=e=>e.startsWith("https://brands.home-assistant.io/")},25936:(e,t,a)=>{a.d(t,{N:()=>o});const o=(e,t="")=>{const a=document.createElement("a");a.target="_blank",a.href=e,a.download=t,document.body.appendChild(a),a.dispatchEvent(new MouseEvent("click")),document.body.removeChild(a)}}};
//# sourceMappingURL=47824-zOIwAW4Hx7U.js.map