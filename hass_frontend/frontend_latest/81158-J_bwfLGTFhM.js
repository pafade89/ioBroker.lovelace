export const id=81158;export const ids=[81158,4631];export const modules={26410:(e,t,i)=>{i.a(e,(async(e,o)=>{try{i.d(t,{Bt:()=>l,T8:()=>c});var a=i(22075),s=i(66477),n=i(4631),r=e([n]);n=(r.then?(await r)():r)[0];const d=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],l=e=>e.first_weekday===s.FS.language?"weekInfo"in Intl.Locale.prototype?new Intl.Locale(e.language).weekInfo.firstDay%7:(0,a.L)(e.language)%7:d.includes(e.first_weekday)?d.indexOf(e.first_weekday):1,c=e=>{const t=l(e);return d[t]};o()}catch(e){o(e)}}))},5435:(e,t,i)=>{i.a(e,(async(e,o)=>{try{i.d(t,{G:()=>l});var a=i(14516),s=i(4631),n=i(96191),r=e([s,n]);[s,n]=r.then?(await r)():r;const d=(0,a.Z)((e=>new Intl.RelativeTimeFormat(e.language,{numeric:"auto"}))),l=(e,t,i,o=!0)=>{const a=(0,n.W)(e,i,t);return o?d(t).format(a.value,a.unit):Intl.NumberFormat(t.language,{style:"unit",unit:a.unit,unitDisplay:"long"}).format(Math.abs(a.value))};o()}catch(e){o(e)}}))},25516:(e,t,i)=>{i.d(t,{i:()=>a});const o=(0,i(8330).P)((e=>{history.replaceState({scrollPosition:e},"")}),300),a=e=>t=>({kind:"method",placement:"prototype",key:t.key,descriptor:{set(e){o(e),this[`__${String(t.key)}`]=e},get(){var e;return this[`__${String(t.key)}`]||(null===(e=history.state)||void 0===e?void 0:e.scrollPosition)},enumerable:!0,configurable:!0},finisher(i){const o=i.prototype.connectedCallback;i.prototype.connectedCallback=function(){o.call(this);const i=this[t.key];i&&this.updateComplete.then((()=>{const t=this.renderRoot.querySelector(e);t&&setTimeout((()=>{t.scrollTop=i}),0)}))}}})},86977:(e,t,i)=>{i.d(t,{Q:()=>o});const o=e=>!(!e.detail.selected||"property"!==e.detail.source)&&(e.currentTarget.selected=!1,!0)},21780:(e,t,i)=>{i.d(t,{f:()=>o});const o=e=>e.charAt(0).toUpperCase()+e.slice(1)},15493:(e,t,i)=>{i.d(t,{Q2:()=>o,io:()=>a,j4:()=>n,ou:()=>s,pc:()=>r});const o=()=>{const e={},t=new URLSearchParams(location.search);for(const[i,o]of t.entries())e[i]=o;return e},a=e=>new URLSearchParams(window.location.search).get(e),s=e=>{const t=new URLSearchParams;return Object.entries(e).forEach((([e,i])=>{t.append(e,i)})),t.toString()},n=e=>{const t=new URLSearchParams(window.location.search);return Object.entries(e).forEach((([e,i])=>{t.set(e,i)})),t.toString()},r=e=>{const t=new URLSearchParams(window.location.search);return t.delete(e),t.toString()}},96191:(e,t,i)=>{i.a(e,(async(e,o)=>{try{i.d(t,{W:()=>l});var a=i(24112),s=i(59401),n=i(35040),r=i(26410),d=e([r]);r=(d.then?(await d)():d)[0];const c=1e3,h=60,u=60*h;function l(e,t=Date.now(),i,o={}){const d={...p,...o||{}},l=(+e-+t)/c;if(Math.abs(l)<d.second)return{value:Math.round(l),unit:"second"};const m=l/h;if(Math.abs(m)<d.minute)return{value:Math.round(m),unit:"minute"};const v=l/u;if(Math.abs(v)<d.hour)return{value:Math.round(v),unit:"hour"};const f=new Date(e),y=new Date(t);f.setHours(0,0,0,0),y.setHours(0,0,0,0);const b=(0,a.Z)(f,y);if(0===b)return{value:Math.round(v),unit:"hour"};if(Math.abs(b)<d.day)return{value:b,unit:"day"};const g=(0,r.Bt)(i),k=(0,s.Z)(f,{weekStartsOn:g}),w=(0,s.Z)(y,{weekStartsOn:g}),_=(0,n.Z)(k,w);if(0===_)return{value:b,unit:"day"};if(Math.abs(_)<d.week)return{value:_,unit:"week"};const x=f.getFullYear()-y.getFullYear(),$=12*x+f.getMonth()-y.getMonth();return 0===$?{value:_,unit:"week"}:Math.abs($)<d.month||0===x?{value:$,unit:"month"}:{value:Math.round(x),unit:"year"}}const p={second:45,minute:45,hour:22,day:5,week:4,month:11};o()}catch(m){o(m)}}))},8330:(e,t,i)=>{i.d(t,{P:()=>o});const o=(e,t,i=!0,o=!0)=>{let a,s=0;const n=(...n)=>{const r=()=>{s=!1===i?0:Date.now(),a=void 0,e(...n)},d=Date.now();s||!1!==i||(s=d);const l=t-(d-s);l<=0||l>t?(a&&(clearTimeout(a),a=void 0),s=d,e(...n)):a||!1===o||(a=window.setTimeout(r,l))};return n.cancel=()=>{clearTimeout(a),a=void 0,s=0},n}},9381:(e,t,i)=>{var o=i(17463),a=i(68144),s=i(79932),n=i(83448),r=i(47181);i(10983),i(52039);const d={info:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",warning:"M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16",error:"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",success:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"};(0,o.Z)([(0,s.Mo)("ha-alert")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)()],key:"title",value:()=>""},{kind:"field",decorators:[(0,s.Cb)({attribute:"alert-type"})],key:"alertType",value:()=>"info"},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"dismissable",value:()=>!1},{kind:"method",key:"render",value:function(){return a.dy` <div class="issue-type ${(0,n.$)({[this.alertType]:!0})}" role="alert"> <div class="icon ${this.title?"":"no-title"}"> <slot name="icon"> <ha-svg-icon .path="${d[this.alertType]}"></ha-svg-icon> </slot> </div> <div class="content"> <div class="main-content"> ${this.title?a.dy`<div class="title">${this.title}</div>`:""} <slot></slot> </div> <div class="action"> <slot name="action"> ${this.dismissable?a.dy`<ha-icon-button @click="${this._dismiss_clicked}" label="Dismiss alert" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button>`:""} </slot> </div> </div> </div> `}},{kind:"method",key:"_dismiss_clicked",value:function(){(0,r.B)(this,"alert-dismissed-clicked")}},{kind:"field",static:!0,key:"styles",value:()=>a.iv`.issue-type{position:relative;padding:8px;display:flex}.issue-type::after{position:absolute;top:0;right:0;bottom:0;left:0;opacity:.12;pointer-events:none;content:"";border-radius:4px}.icon{z-index:1}.icon.no-title{align-self:center}.content{display:flex;justify-content:space-between;align-items:center;width:100%;text-align:var(--float-start)}.action{z-index:1;width:min-content;--mdc-theme-primary:var(--primary-text-color)}.main-content{overflow-wrap:anywhere;word-break:break-word;margin-left:8px;margin-right:0;margin-inline-start:8px;margin-inline-end:0;direction:var(--direction)}.title{margin-top:2px;font-weight:700}.action ha-icon-button,.action mwc-button{--mdc-theme-primary:var(--primary-text-color);--mdc-icon-button-size:36px}.issue-type.info>.icon{color:var(--info-color)}.issue-type.info::after{background-color:var(--info-color)}.issue-type.warning>.icon{color:var(--warning-color)}.issue-type.warning::after{background-color:var(--warning-color)}.issue-type.error>.icon{color:var(--error-color)}.issue-type.error::after{background-color:var(--error-color)}.issue-type.success>.icon{color:var(--success-color)}.issue-type.success::after{background-color:var(--success-color)}`}]}}),a.oi)},22098:(e,t,i)=>{var o=i(17463),a=i(68144),s=i(79932);(0,o.Z)([(0,s.Mo)("ha-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"raised",value:()=>!1},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,none);box-sizing:border-box;border-radius:var(--ha-card-border-radius,12px);border-width:var(--ha-card-border-width,1px);border-style:solid;border-color:var(--ha-card-border-color,var(--divider-color,#e0e0e0));color:var(--primary-text-color);display:block;transition:all .3s ease-out;position:relative}:host([raised]){border:none;box-shadow:var(--ha-card-box-shadow,0px 2px 1px -1px rgba(0,0,0,.2),0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12))}.card-header,:host ::slotted(.card-header){color:var(--ha-card-header-color,--primary-text-color);font-family:var(--ha-card-header-font-family,inherit);font-size:var(--ha-card-header-font-size,24px);letter-spacing:-.012em;line-height:48px;padding:12px 16px 16px;display:block;margin-block-start:0px;margin-block-end:0px;font-weight:400}:host ::slotted(.card-content:not(:first-child)),slot:not(:first-child)::slotted(.card-content){padding-top:0px;margin-top:-8px}:host ::slotted(.card-content){padding:16px}:host ::slotted(.card-actions){border-top:1px solid var(--divider-color,#e8e8e8);padding:5px 16px}`}},{kind:"method",key:"render",value:function(){return a.dy` ${this.header?a.dy`<h1 class="card-header">${this.header}</h1>`:a.Ld} <slot></slot> `}}]}}),a.oi)},84431:(e,t,i)=>{var o=i(17463),a=i(68144),s=i(56887),n=i(21270),r=i(96762),d=i(79932);(0,o.Z)([(0,d.Mo)("ha-check-list-item")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[r.W,n.W,a.iv`:host{--mdc-theme-secondary:var(--primary-color)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,16px);margin-inline-start:0px;direction:var(--direction)}`]}]}}),s.F)},2315:(e,t,i)=>{var o=i(17463),a=i(34541),s=i(47838),n=i(68144),r=i(79932);i(10983);const d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z";(0,o.Z)([(0,r.Mo)("ha-icon-button-arrow-prev")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_icon",value:()=>d},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)((0,s.Z)(i.prototype),"connectedCallback",this).call(this),setTimeout((()=>{this._icon="ltr"===window.getComputedStyle(this).direction?d:"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"}),100)}},{kind:"method",key:"render",value:function(){var e;return n.dy` <ha-icon-button .disabled="${this.disabled}" .label="${this.label||(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.back"))||"Back"}" .path="${this._icon}"></ha-icon-button> `}}]}}),n.oi)},10983:(e,t,i)=>{i.d(t,{$:()=>r});var o=i(17463),a=(i(20210),i(68144)),s=i(79932),n=i(30153);i(52039);let r=(0,o.Z)([(0,s.Mo)("ha-icon-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:String})],key:"path",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:String})],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:String,attribute:"aria-haspopup"})],key:"ariaHasPopup",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"hideTitle",value:()=>!1},{kind:"field",decorators:[(0,s.IO)("mwc-icon-button",!0)],key:"_button",value:void 0},{kind:"method",key:"focus",value:function(){var e;null===(e=this._button)||void 0===e||e.focus()}},{kind:"field",static:!0,key:"shadowRootOptions",value:()=>({mode:"open",delegatesFocus:!0})},{kind:"method",key:"render",value:function(){return a.dy` <mwc-icon-button aria-label="${(0,n.o)(this.label)}" title="${(0,n.o)(this.hideTitle?void 0:this.label)}" aria-haspopup="${(0,n.o)(this.ariaHasPopup)}" .disabled="${this.disabled}"> ${this.path?a.dy`<ha-svg-icon .path="${this.path}"></ha-svg-icon>`:a.dy`<slot></slot>`} </mwc-icon-button> `}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{display:inline-block;outline:0}:host([disabled]){pointer-events:none}mwc-icon-button{--mdc-theme-on-primary:currentColor;--mdc-theme-text-disabled-on-light:var(--disabled-text-color)}`}}]}}),a.oi)},73366:(e,t,i)=>{i.d(t,{M:()=>c});var o=i(17463),a=i(34541),s=i(47838),n=i(61092),r=i(96762),d=i(68144),l=i(79932);let c=(0,o.Z)([(0,l.Mo)("ha-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,a.Z)((0,s.Z)(i.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[r.W,d.iv`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`]}}]}}),n.K)},48932:(e,t,i)=>{var o=i(17463),a=i(34541),s=i(47838),n=i(68144),r=i(79932),d=i(47181),l=i(6936);i(10983);(0,o.Z)([(0,r.Mo)("ha-menu-button")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"hassio",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_hasNotifications",value:()=>!1},{kind:"field",decorators:[(0,r.SB)()],key:"_show",value:()=>!1},{kind:"field",key:"_alwaysVisible",value:()=>!1},{kind:"field",key:"_attachNotifOnConnect",value:()=>!1},{kind:"field",key:"_unsubNotifications",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)((0,s.Z)(i.prototype),"connectedCallback",this).call(this),this._attachNotifOnConnect&&(this._attachNotifOnConnect=!1,this._subscribeNotifications())}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,s.Z)(i.prototype),"disconnectedCallback",this).call(this),this._unsubNotifications&&(this._attachNotifOnConnect=!0,this._unsubNotifications(),this._unsubNotifications=void 0)}},{kind:"method",key:"render",value:function(){if(!this._show)return n.Ld;const e=this._hasNotifications&&(this.narrow||"always_hidden"===this.hass.dockedSidebar);return n.dy` <ha-icon-button .label="${this.hass.localize("ui.sidebar.sidebar_toggle")}" .path="${"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"}" @click="${this._toggleMenu}"></ha-icon-button> ${e?n.dy`<div class="dot"></div>`:""} `}},{kind:"method",key:"firstUpdated",value:function(e){(0,a.Z)((0,s.Z)(i.prototype),"firstUpdated",this).call(this,e),this.hassio&&(this._alwaysVisible=(Number(window.parent.frontendVersion)||0)<20190710)}},{kind:"method",key:"willUpdate",value:function(e){if((0,a.Z)((0,s.Z)(i.prototype),"willUpdate",this).call(this,e),!e.has("narrow")&&!e.has("hass"))return;const t=e.has("hass")?e.get("hass"):this.hass,o=(e.has("narrow")?e.get("narrow"):this.narrow)||"always_hidden"===(null==t?void 0:t.dockedSidebar),n=this.narrow||"always_hidden"===this.hass.dockedSidebar;this.hasUpdated&&o===n||(this._show=n||this._alwaysVisible,n?this._subscribeNotifications():this._unsubNotifications&&(this._unsubNotifications(),this._unsubNotifications=void 0))}},{kind:"method",key:"_subscribeNotifications",value:function(){if(this._unsubNotifications)throw new Error("Already subscribed");this._unsubNotifications=(0,l.r)(this.hass.connection,(e=>{this._hasNotifications=e.length>0}))}},{kind:"method",key:"_toggleMenu",value:function(){(0,d.B)(this,"hass-toggle-menu")}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host{position:relative}.dot{pointer-events:none;position:absolute;background-color:var(--accent-color);width:12px;height:12px;top:9px;right:7px;border-radius:50%;border:2px solid var(--app-header-background-color)}`}}]}}),n.oi)},52039:(e,t,i)=>{i.d(t,{C:()=>n});var o=i(17463),a=i(68144),s=i(79932);let n=(0,o.Z)([(0,s.Mo)("ha-svg-icon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)()],key:"path",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"viewBox",value:void 0},{kind:"method",key:"render",value:function(){return a.YP` <svg viewBox="${this.viewBox||"0 0 24 24"}" preserveAspectRatio="xMidYMid meet" focusable="false" role="img" aria-hidden="true"> <g> ${this.path?a.YP`<path d="${this.path}"></path>`:""} </g> </svg>`}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{display:var(--ha-icon-display,inline-flex);align-items:center;justify-content:center;position:relative;vertical-align:middle;fill:currentcolor;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px)}svg{width:100%;height:100%;pointer-events:none;display:block}`}}]}}),a.oi)},6936:(e,t,i)=>{i.d(t,{r:()=>o});const o=(e,t)=>{const i=new a,o=e.subscribeMessage((e=>t(i.processMessage(e))),{type:"persistent_notification/subscribe"});return()=>{o.then((e=>null==e?void 0:e()))}};class a{constructor(){this.notifications=void 0,this.notifications={}}processMessage(e){if("removed"===e.type)for(const t of Object.keys(e.notifications))delete this.notifications[t];else this.notifications={...this.notifications,...e.notifications};return Object.values(this.notifications)}}},45339:(e,t,i)=>{i.d(t,{$X:()=>p,EB:()=>h,F$:()=>d,Ur:()=>r,eJ:()=>c,iU:()=>l,wC:()=>s});var o=i(97330),a=i(38346);const s={critical:1,error:2,warning:3},n=e=>e.sendMessagePromise({type:"repairs/list_issues"}),r=async(e,t,i)=>e.callWS({type:"repairs/ignore_issue",issue_id:t.issue_id,domain:t.domain,ignore:i}),d=(e,t,i)=>e.callApi("POST","repairs/issues/fix",{handler:t,issue_id:i}),l=(e,t)=>e.callApi("GET",`repairs/issues/fix/${t}`),c=(e,t,i)=>e.callApi("POST",`repairs/issues/fix/${t}`,i),h=(e,t)=>e.callApi("DELETE",`repairs/issues/fix/${t}`),u=(e,t)=>e.subscribeEvents((0,a.D)((()=>n(e).then((e=>t.setState(e,!0)))),500,!0),"repairs_issue_registry_updated"),p=(e,t)=>(0,o.B)("_repairsIssueRegistry",n,u,e,t)},52871:(e,t,i)=>{i.d(t,{w:()=>s});var o=i(47181);const a=()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(28597),i.e(97487),i.e(2185),i.e(52154),i.e(62043),i.e(40163),i.e(59159)]).then(i.bind(i,59159)),s=(e,t,i)=>{(0,o.B)(e,"show-dialog",{dialogTag:"dialog-data-entry-flow",dialogImport:a,dialogParams:{...t,flowConfig:i,dialogParentElement:e}})}},60010:(e,t,i)=>{var o=i(17463),a=i(34541),s=i(47838),n=i(68144),r=i(79932),d=i(25516),l=i(70518),c=i(87744),h=(i(2315),i(48932),i(11654));(0,o.Z)([(0,r.Mo)("hass-subpage")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,attribute:"main-page"})],key:"mainPage",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"backCallback",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"supervisor",value:()=>!1},{kind:"field",decorators:[(0,d.i)(".content")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"willUpdate",value:function(e){if((0,a.Z)((0,s.Z)(i.prototype),"willUpdate",this).call(this,e),!e.has("hass"))return;const t=e.get("hass");t&&t.locale===this.hass.locale||(0,l.X)(this,"rtl",(0,c.HE)(this.hass))}},{kind:"method",key:"render",value:function(){var e;return n.dy` <div class="toolbar"> ${this.mainPage||null!==(e=history.state)&&void 0!==e&&e.root?n.dy` <ha-menu-button .hassio="${this.supervisor}" .hass="${this.hass}" .narrow="${this.narrow}"></ha-menu-button> `:this.backPath?n.dy` <a href="${this.backPath}"> <ha-icon-button-arrow-prev .hass="${this.hass}"></ha-icon-button-arrow-prev> </a> `:n.dy` <ha-icon-button-arrow-prev .hass="${this.hass}" @click="${this._backTapped}"></ha-icon-button-arrow-prev> `} <div class="main-title"><slot name="header">${this.header}</slot></div> <slot name="toolbar-icon"></slot> </div> <div class="content ha-scrollbar" @scroll="${this._saveScrollPos}"> <slot></slot> </div> <div id="fab"> <slot name="fab"></slot> </div> `}},{kind:"method",decorators:[(0,r.hO)({passive:!0})],key:"_saveScrollPos",value:function(e){this._savedScrollPos=e.target.scrollTop}},{kind:"method",key:"_backTapped",value:function(){this.backCallback?this.backCallback():history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[h.$c,n.iv`:host{display:block;height:100%;background-color:var(--primary-background-color);overflow:hidden;position:relative}:host([narrow]){width:100%;position:fixed}.toolbar{display:flex;align-items:center;font-size:20px;height:var(--header-height);padding:8px 12px;pointer-events:none;background-color:var(--app-header-background-color);font-weight:400;color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box}@media (max-width:599px){.toolbar{padding:4px}}.toolbar a{color:var(--sidebar-text-color);text-decoration:none}::slotted([slot=toolbar-icon]),ha-icon-button-arrow-prev,ha-menu-button{pointer-events:auto;color:var(--sidebar-icon-color)}.main-title{margin:0 0 0 24px;line-height:20px;flex-grow:1}.content{position:relative;width:100%;height:calc(100% - 1px - var(--header-height));overflow-y:auto;overflow:auto;-webkit-overflow-scrolling:touch}#fab{position:absolute;right:calc(16px + env(safe-area-inset-right));bottom:calc(16px + env(safe-area-inset-bottom));z-index:1}:host([narrow]) #fab.tabs{bottom:calc(84px + env(safe-area-inset-bottom))}#fab[is-wide]{bottom:24px;right:24px}:host([rtl]) #fab{right:auto;left:calc(16px + env(safe-area-inset-left))}:host([rtl][is-wide]) #fab{bottom:24px;left:24px;right:auto}`]}}]}}),n.oi)},81158:(e,t,i)=>{i.a(e,(async(e,o)=>{try{i.r(t);var a=i(17463),s=i(34541),n=i(47838),r=i(68144),d=i(79932),l=i(14516),c=i(7323),h=i(86977),u=i(83849),p=i(15493),m=(i(22098),i(84431),i(45339)),v=(i(60010),i(73826)),f=i(80736),y=i(55213),b=i(38527),g=e([f]);f=(g.then?(await g)():g)[0];const k="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z";(0,a.Z)([(0,d.Mo)("ha-config-repairs-dashboard")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_repairsIssues",value:()=>[]},{kind:"field",decorators:[(0,d.SB)()],key:"_showIgnored",value:()=>!1},{kind:"field",key:"_getFilteredIssues",value:()=>(0,l.Z)(((e,t)=>e?t:t.filter((e=>!e.ignored))))},{kind:"method",key:"connectedCallback",value:function(){(0,s.Z)((0,n.Z)(i.prototype),"connectedCallback",this).call(this);"system-health"===(0,p.io)("dialog")&&((0,u.c)("/config/repairs",{replace:!0}),(0,b.H)(this))}},{kind:"method",key:"hassSubscribe",value:function(){return[(0,m.$X)(this.hass.connection,(e=>{this._repairsIssues=e.issues.sort(((e,t)=>m.wC[e.severity]-m.wC[t.severity]));const t=new Set;for(const e of this._repairsIssues)t.add(e.domain);this.hass.loadBackendTranslation("issues",[...t])}))]}},{kind:"method",key:"render",value:function(){const e=this._getFilteredIssues(this._showIgnored,this._repairsIssues);return r.dy` <hass-subpage back-path="/config/system" .hass="${this.hass}" .narrow="${this.narrow}" .header="${this.hass.localize("ui.panel.config.repairs.caption")}"> <div slot="toolbar-icon"> <ha-button-menu multi> <ha-icon-button slot="trigger" .label="${this.hass.localize("ui.common.menu")}" .path="${k}"></ha-icon-button> <ha-check-list-item left @request-selected="${this._toggleIgnored}" .selected="${this._showIgnored}"> ${this.hass.localize("ui.panel.config.repairs.show_ignored")} </ha-check-list-item> <li divider role="separator"></li> ${(0,c.p)(this.hass,"system_health")||(0,c.p)(this.hass,"hassio")?r.dy` <mwc-list-item @request-selected="${this._showSystemInformationDialog}"> ${this.hass.localize("ui.panel.config.repairs.system_information")} </mwc-list-item> `:""} <mwc-list-item @request-selected="${this._showIntegrationStartupDialog}"> ${this.hass.localize("ui.panel.config.repairs.integration_startup_time")} </mwc-list-item> </ha-button-menu> </div> <div class="content"> <ha-card outlined> <div class="card-content"> ${e.length?r.dy` <ha-config-repairs .hass="${this.hass}" .narrow="${this.narrow}" .repairsIssues="${e}"></ha-config-repairs> `:r.dy` <div class="no-repairs"> ${this.hass.localize("ui.panel.config.repairs.no_repairs")} </div> `} </div> </ha-card> </div> </hass-subpage> `}},{kind:"method",key:"_showSystemInformationDialog",value:function(e){(0,h.Q)(e)&&(0,b.H)(this)}},{kind:"method",key:"_showIntegrationStartupDialog",value:function(e){(0,h.Q)(e)&&(0,y.b)(this)}},{kind:"method",key:"_toggleIgnored",value:function(e){"property"===e.detail.source&&(this._showIgnored=!this._showIgnored)}},{kind:"field",static:!0,key:"styles",value:()=>r.iv`.content{padding:28px 20px 0;max-width:1040px;margin:0 auto}ha-card{max-width:600px;margin:0 auto;height:100%;justify-content:space-between;flex-direction:column;display:flex;margin-bottom:max(24px,env(safe-area-inset-bottom))}.card-content{display:flex;justify-content:space-between;flex-direction:column;padding:0}.no-repairs{padding:16px}li[divider]{border-bottom-color:var(--divider-color)}`}]}}),(0,v.f)(r.oi));o()}catch(e){o(e)}}))},80736:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var o=i(17463),a=(i(63436),i(68144)),s=i(79932),n=i(5435),r=i(21780),d=(i(9381),i(22098),i(73366),i(52039),i(5986)),l=i(11254),c=i(60904),h=i(33807),u=e([n]);n=(u.then?(await u)():u)[0];(0,o.Z)([(0,s.Mo)("ha-config-repairs")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"repairsIssues",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Number})],key:"total",value:void 0},{kind:"method",key:"render",value:function(){var e;if(null===(e=this.repairsIssues)||void 0===e||!e.length)return a.Ld;const t=this.repairsIssues;return a.dy` <div class="title"> ${this.hass.localize("ui.panel.config.repairs.title",{count:this.total||this.repairsIssues.length})} </div> <mwc-list> ${t.map((e=>{var t;return a.dy` <ha-list-item twoline graphic="medium" .hasMeta="${!this.narrow}" .issue="${e}" class="${e.ignored?"ignored":""}" @click="${this._openShowMoreDialog}"> <img alt="${(0,d.Lh)(this.hass.localize,e.domain)}" loading="lazy" src="${(0,l.X1)({domain:e.issue_domain||e.domain,type:"icon",useFallback:!0,darkOptimized:null===(t=this.hass.themes)||void 0===t?void 0:t.darkMode})}" .title="${(0,d.Lh)(this.hass.localize,e.domain)}" referrerpolicy="no-referrer" slot="graphic"> <span>${this.hass.localize(`component.${e.domain}.issues.${e.translation_key||e.issue_id}.title`,e.translation_placeholders||{})}</span> <span slot="secondary" class="secondary"> ${"critical"===e.severity||"error"===e.severity?a.dy`<span class="error">${this.hass.localize(`ui.panel.config.repairs.${e.severity}`)}</span>`:""} ${"critical"!==e.severity&&"error"!==e.severity||!e.created?"":" - "} ${e.created?(0,r.f)((0,n.G)(new Date(e.created),this.hass.locale)):""} ${e.ignored?` - ${this.hass.localize("ui.panel.config.repairs.dialog.ignored_in_version_short",{version:e.dismissed_version})}`:""} </span> ${this.narrow?"":a.dy`<ha-icon-next slot="meta"></ha-icon-next>`} </ha-list-item> `}))} </mwc-list> `}},{kind:"method",key:"_openShowMoreDialog",value:function(e){const t=e.currentTarget.issue;t.is_fixable?(0,c.w)(this,t):(0,h.W)(this,{issue:t})}},{kind:"field",static:!0,key:"styles",value:()=>a.iv`:host{--mdc-list-vertical-padding:0}.title{font-size:16px;padding:16px;padding-bottom:0}.ignored{opacity:var(--light-secondary-opacity)}ha-list-item{--mdc-list-item-graphic-size:40px}button.show-more{color:var(--primary-color);text-align:left;cursor:pointer;background:0 0;border-width:initial;border-style:none;border-color:initial;border-image:initial;padding:16px;font:inherit}button.show-more:focus{outline:0;text-decoration:underline}ha-list-item{cursor:pointer;font-size:16px}.error{color:var(--error-color)}`}]}}),a.oi);t()}catch(e){t(e)}}))},60904:(e,t,i)=>{i.d(t,{w:()=>r});var o=i(68144),a=i(5986),s=i(45339),n=i(52871);const r=(e,t,i)=>(0,n.w)(e,{startFlowHandler:t.domain,domain:t.domain,dialogClosedCallback:i},{loadDevicesAndAreas:!1,createFlow:async(e,i)=>{const[o]=await Promise.all([(0,s.F$)(e,i,t.issue_id),e.loadBackendTranslation("issues",t.domain),e.loadBackendTranslation("selector",t.domain)]);return o},fetchFlow:async(e,i)=>{const[o]=await Promise.all([(0,s.iU)(e,i),e.loadBackendTranslation("issues",t.domain),e.loadBackendTranslation("selector",t.domain)]);return o},handleFlowStep:s.eJ,deleteFlow:s.EB,renderAbortDescription(e,i){const a=e.localize(`component.${t.domain}.issues.${t.translation_key||t.issue_id}.fix_flow.abort.${i.reason}`,i.description_placeholders);return a?o.dy` <ha-markdown breaks allowsvg .content="${a}"></ha-markdown> `:""},renderShowFormStepHeader:(e,i)=>e.localize(`component.${t.domain}.issues.${t.translation_key||t.issue_id}.fix_flow.step.${i.step_id}.title`,i.description_placeholders)||e.localize("ui.dialogs.repair_flow.form.header"),renderShowFormStepDescription(e,i){const a=e.localize(`component.${t.domain}.issues.${t.translation_key||t.issue_id}.fix_flow.step.${i.step_id}.description`,i.description_placeholders);return a?o.dy` <ha-markdown allowsvg breaks .content="${a}"></ha-markdown> `:""},renderShowFormStepFieldLabel:(e,i,o)=>e.localize(`component.${t.domain}.issues.${t.translation_key||t.issue_id}.fix_flow.step.${i.step_id}.data.${o.name}`),renderShowFormStepFieldHelper(e,i,a){const s=e.localize(`component.${t.domain}.issues.${t.translation_key||t.issue_id}.fix_flow.step.${i.step_id}.data_description.${a.name}`,i.description_placeholders);return s?o.dy`<ha-markdown breaks .content="${s}"></ha-markdown>`:""},renderShowFormStepFieldError:(e,i,o)=>e.localize(`component.${t.domain}.issues.${t.translation_key||t.issue_id}.fix_flow.error.${o}`,i.description_placeholders),renderShowFormStepFieldLocalizeValue:(e,i,o)=>e.localize(`component.${t.domain}.selector.${o}`),renderShowFormStepSubmitButton:(e,i)=>e.localize(`component.${t.domain}.issues.${t.translation_key||t.issue_id}.fix_flow.step.${i.step_id}.submit`)||e.localize("ui.panel.config.integrations.config_flow."+(!1===i.last_step?"next":"submit")),renderExternalStepHeader:(e,t)=>"",renderExternalStepDescription:(e,t)=>"",renderCreateEntryDescription:(e,t)=>o.dy` <p>${e.localize("ui.dialogs.repair_flow.success.description")}</p> `,renderShowFormProgressHeader:(e,i)=>e.localize(`component.${t.domain}.issues.step.${t.translation_key||t.issue_id}.fix_flow.${i.step_id}.title`)||e.localize(`component.${t.domain}.title`),renderShowFormProgressDescription(e,i){const a=e.localize(`component.${t.domain}.issues.${t.translation_key||t.issue_id}.fix_flow.progress.${i.progress_action}`,i.description_placeholders);return a?o.dy` <ha-markdown allowsvg breaks .content="${a}"></ha-markdown> `:""},renderMenuHeader:(e,i)=>e.localize(`component.${t.domain}.issues.${t.translation_key||t.issue_id}.fix_flow.step.${i.step_id}.title`)||e.localize(`component.${t.domain}.title`),renderMenuDescription(e,i){const a=e.localize(`component.${t.domain}.issues.${t.translation_key||t.issue_id}.fix_flow.step.${i.step_id}.description`,i.description_placeholders);return a?o.dy` <ha-markdown allowsvg breaks .content="${a}"></ha-markdown> `:""},renderMenuOption:(e,i,o)=>e.localize(`component.${t.domain}.issues.${t.translation_key||t.issue_id}.fix_flow.step.${i.step_id}.menu_options.${o}`,i.description_placeholders),renderLoadingDescription:(e,i)=>e.localize(`component.${t.domain}.issues.${t.translation_key||t.issue_id}.fix_flow.loading`)||("loading_flow"===i||"loading_step"===i?e.localize(`ui.dialogs.repair_flow.loading.${i}`,{integration:(0,a.Lh)(e.localize,t.domain)}):"")})},55213:(e,t,i)=>{i.d(t,{b:()=>s});var o=i(47181);const a=()=>Promise.all([i.e(28597),i.e(88841)]).then(i.bind(i,88841)),s=e=>{(0,o.B)(e,"show-dialog",{dialogTag:"dialog-integration-startup",dialogImport:a,dialogParams:{}})}},33807:(e,t,i)=>{i.d(t,{W:()=>s});var o=i(47181);const a=()=>Promise.all([i.e(28597),i.e(78631),i.e(14921)]).then(i.bind(i,14921)),s=(e,t)=>{(0,o.B)(e,"show-dialog",{dialogTag:"dialog-repairs-issue",dialogImport:a,dialogParams:t})}},38527:(e,t,i)=>{i.d(t,{H:()=>s});var o=i(47181);const a=()=>Promise.all([i.e(28597),i.e(77605),i.e(49426)]).then(i.bind(i,49426)),s=e=>{(0,o.B)(e,"show-dialog",{dialogTag:"dialog-system-information",dialogImport:a,dialogParams:void 0})}},4631:(e,t,i)=>{i.a(e,(async(e,o)=>{try{i.r(t);var a=i(43170),s=i(27499),n=i(32812),r=i(27815),d=i(64532),l=i(82874),c=i(69906),h=i(24517);const e=async()=>{const e=(0,c.sS)(),t=[];(0,n.Y)()&&await Promise.all([i.e(77021),i.e(48196)]).then(i.bind(i,48196)),(0,r.Y)(e)&&t.push(Promise.all([i.e(77021),i.e(20655)]).then(i.bind(i,20655))),(0,d.Y)(e)&&t.push(Promise.all([i.e(77021),i.e(20759)]).then(i.bind(i,20759))),(0,a.Y)(e)&&t.push(Promise.all([i.e(77021),i.e(76554)]).then(i.bind(i,76554)).then((()=>i.e(6042).then(i.t.bind(i,6042,23))))),(0,s.Yq)(e)&&t.push(Promise.all([i.e(77021),i.e(72684)]).then(i.bind(i,72684))),(0,l.Y)(e)&&t.push(Promise.all([i.e(77021),i.e(69029)]).then(i.bind(i,69029))),0!==t.length&&await Promise.all(t).then((()=>(0,h.n)(e)))};await e(),o()}catch(e){o(e)}}),1)},11254:(e,t,i)=>{i.d(t,{RU:()=>a,X1:()=>o,u4:()=>s,zC:()=>n});const o=e=>`https://brands.home-assistant.io/${e.brand?"brands/":""}${e.useFallback?"_/":""}${e.domain}/${e.darkOptimized?"dark_":""}${e.type}.png`,a=e=>`https://brands.home-assistant.io/hardware/${e.category}/${e.darkOptimized?"dark_":""}${e.manufacturer}${e.model?`_${e.model}`:""}.png`,s=e=>e.split("/")[4],n=e=>e.startsWith("https://brands.home-assistant.io/")}};
//# sourceMappingURL=81158-J_bwfLGTFhM.js.map