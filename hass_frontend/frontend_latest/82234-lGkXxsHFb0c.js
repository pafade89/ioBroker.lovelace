/*! For license information please see 82234-lGkXxsHFb0c.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[82234],{30879:(e,i,t)=>{t.d(i,{D:()=>p});var r=t(87480),a=t(79932),s=t(38103),o=t(68144),n=t(83448),c=t(30153),d=t(47501);class l extends o.oi{constructor(){super(...arguments),this.indeterminate=!1,this.progress=0,this.density=0,this.closed=!1}open(){this.closed=!1}close(){this.closed=!0}render(){const e={"mdc-circular-progress--closed":this.closed,"mdc-circular-progress--indeterminate":this.indeterminate},i=48+4*this.density,t={width:`${i}px`,height:`${i}px`};return o.dy` <div class="mdc-circular-progress ${(0,n.$)(e)}" style="${(0,d.V)(t)}" role="progressbar" aria-label="${(0,c.o)(this.ariaLabel)}" aria-valuemin="0" aria-valuemax="1" aria-valuenow="${(0,c.o)(this.indeterminate?void 0:this.progress)}"> ${this.renderDeterminateContainer()} ${this.renderIndeterminateContainer()} </div>`}renderDeterminateContainer(){const e=48+4*this.density,i=e/2,t=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,r=6.2831852*t,a=(1-this.progress)*r,s=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return o.dy` <div class="mdc-circular-progress__determinate-container"> <svg class="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 ${e} ${e}"> <circle class="mdc-circular-progress__determinate-track" cx="${i}" cy="${i}" r="${t}" stroke-width="${s}"></circle> <circle class="mdc-circular-progress__determinate-circle" cx="${i}" cy="${i}" r="${t}" stroke-dasharray="${6.2831852*t}" stroke-dashoffset="${a}" stroke-width="${s}"></circle> </svg> </div>`}renderIndeterminateContainer(){return o.dy` <div class="mdc-circular-progress__indeterminate-container"> <div class="mdc-circular-progress__spinner-layer"> ${this.renderIndeterminateSpinnerLayer()} </div> </div>`}renderIndeterminateSpinnerLayer(){const e=48+4*this.density,i=e/2,t=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,r=6.2831852*t,a=.5*r,s=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return o.dy` <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 ${e} ${e}"> <circle cx="${i}" cy="${i}" r="${t}" stroke-dasharray="${r}" stroke-dashoffset="${a}" stroke-width="${s}"></circle> </svg> </div> <div class="mdc-circular-progress__gap-patch"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 ${e} ${e}"> <circle cx="${i}" cy="${i}" r="${t}" stroke-dasharray="${r}" stroke-dashoffset="${a}" stroke-width="${.8*s}"></circle> </svg> </div> <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 ${e} ${e}"> <circle cx="${i}" cy="${i}" r="${t}" stroke-dasharray="${r}" stroke-dashoffset="${a}" stroke-width="${s}"></circle> </svg> </div>`}update(e){super.update(e),e.has("progress")&&(this.progress>1&&(this.progress=1),this.progress<0&&(this.progress=0))}}(0,r.__decorate)([(0,a.Cb)({type:Boolean,reflect:!0})],l.prototype,"indeterminate",void 0),(0,r.__decorate)([(0,a.Cb)({type:Number,reflect:!0})],l.prototype,"progress",void 0),(0,r.__decorate)([(0,a.Cb)({type:Number,reflect:!0})],l.prototype,"density",void 0),(0,r.__decorate)([(0,a.Cb)({type:Boolean,reflect:!0})],l.prototype,"closed",void 0),(0,r.__decorate)([s.L,(0,a.Cb)({type:String,attribute:"aria-label"})],l.prototype,"ariaLabel",void 0);const h=o.iv`.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary,#6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0s cubic-bezier(.4,0,.6,1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset .5s 0s cubic-bezier(0,0,.2,1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1.568s linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color,transparent)}`;let p=class extends l{};p.styles=[h],p=(0,r.__decorate)([(0,a.Mo)("mwc-circular-progress")],p)},63864:(e,i,t)=>{t.d(i,{I:()=>r,_:()=>a});const r=(e,i,t,r)=>{const[a,s,o]=e.split(".",3);return Number(a)>i||Number(a)===i&&(void 0===r?Number(s)>=t:Number(s)>t)||void 0!==r&&Number(a)===i&&Number(s)===t&&Number(o)>=r},a=e=>e.includes("dev")},86977:(e,i,t)=>{t.d(i,{Q:()=>r});const r=e=>!(!e.detail.selected||"property"!==e.detail.source)&&(e.currentTarget.selected=!1,!0)},31206:(e,i,t)=>{t.r(i),t.d(i,{HaCircularProgress:()=>d});var r=t(17463),a=t(34541),s=t(47838),o=t(30879),n=t(68144),c=t(79932);let d=(0,r.Z)([(0,c.Mo)("ha-circular-progress")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,c.Cb)({type:Boolean})],key:"active",value:()=>!1},{kind:"field",decorators:[(0,c.Cb)()],key:"alt",value:()=>"Loading"},{kind:"field",decorators:[(0,c.Cb)()],key:"size",value:()=>"medium"},{kind:"set",key:"density",value:function(e){}},{kind:"get",key:"density",value:function(){switch(this.size){case"tiny":return-8;case"small":return-5;case"medium":default:return 0;case"large":return 5}}},{kind:"set",key:"indeterminate",value:function(e){}},{kind:"get",key:"indeterminate",value:function(){return this.active}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,a.Z)((0,s.Z)(t),"styles",this),n.iv`:host{overflow:hidden}`]}}]}}),o.D)},34821:(e,i,t)=>{t.d(i,{i:()=>p});var r=t(17463),a=t(34541),s=t(47838),o=t(87762),n=t(91632),c=t(68144),d=t(79932),l=t(74265);t(10983);const h=["button","ha-list-item"],p=(e,i)=>c.dy` <div class="header_title">${i}</div> <ha-icon-button .label="${e.localize("ui.dialogs.generic.close")}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> `;(0,r.Z)([(0,d.Mo)("ha-dialog")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",key:l.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,i){var t;null===(t=this.contentElement)||void 0===t||t.scrollTo(e,i)}},{kind:"method",key:"renderHeading",value:function(){return c.dy`<slot name="heading"> ${(0,a.Z)((0,s.Z)(t.prototype),"renderHeading",this).call(this)} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,a.Z)((0,s.Z)(t.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,h].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,s.Z)(t.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[n.W,c.iv`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter, none);backdrop-filter:var(--dialog-backdrop-filter, none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:nth-child(1){flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),o.M)},46583:(e,i,t)=>{var r=t(17463),a=t(34541),s=t(47838),o=t(68144),n=t(79932),c=t(83448),d=t(47181),l=t(96151);t(52039);const h="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z";(0,r.Z)([(0,n.Mo)("ha-expansion-panel")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,n.Cb)({type:Boolean,reflect:!0})],key:"expanded",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,reflect:!0})],key:"outlined",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,reflect:!0})],key:"leftChevron",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"secondary",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_showContent",value(){return this.expanded}},{kind:"field",decorators:[(0,n.IO)(".container")],key:"_container",value:void 0},{kind:"method",key:"render",value:function(){return o.dy` <div class="top ${(0,c.$)({expanded:this.expanded})}"> <div id="summary" @click="${this._toggleContainer}" @keydown="${this._toggleContainer}" @focus="${this._focusChanged}" @blur="${this._focusChanged}" role="button" tabindex="0" aria-expanded="${this.expanded}" aria-controls="sect1"> ${this.leftChevron?o.dy` <ha-svg-icon .path="${h}" class="summary-icon ${(0,c.$)({expanded:this.expanded})}"></ha-svg-icon> `:""} <slot name="header"> <div class="header"> ${this.header} <slot class="secondary" name="secondary">${this.secondary}</slot> </div> </slot> ${this.leftChevron?"":o.dy` <ha-svg-icon .path="${h}" class="summary-icon ${(0,c.$)({expanded:this.expanded})}"></ha-svg-icon> `} </div> <slot name="icons"></slot> </div> <div class="container ${(0,c.$)({expanded:this.expanded})}" @transitionend="${this._handleTransitionEnd}" role="region" aria-labelledby="summary" aria-hidden="${!this.expanded}" tabindex="-1"> ${this._showContent?o.dy`<slot></slot>`:""} </div> `}},{kind:"method",key:"willUpdate",value:function(e){(0,a.Z)((0,s.Z)(t.prototype),"willUpdate",this).call(this,e),e.has("expanded")&&this.expanded&&(this._showContent=this.expanded,setTimeout((()=>{this.expanded&&(this._container.style.overflow="initial")}),300))}},{kind:"method",key:"_handleTransitionEnd",value:function(){this._container.style.removeProperty("height"),this._container.style.overflow=this.expanded?"initial":"hidden",this._showContent=this.expanded}},{kind:"method",key:"_toggleContainer",value:async function(e){if(e.defaultPrevented)return;if("keydown"===e.type&&"Enter"!==e.key&&" "!==e.key)return;e.preventDefault();const i=!this.expanded;(0,d.B)(this,"expanded-will-change",{expanded:i}),this._container.style.overflow="hidden",i&&(this._showContent=!0,await(0,l.y)());const t=this._container.scrollHeight;this._container.style.height=`${t}px`,i||setTimeout((()=>{this._container.style.height="0px"}),0),this.expanded=i,(0,d.B)(this,"expanded-changed",{expanded:this.expanded})}},{kind:"method",key:"_focusChanged",value:function(e){this.shadowRoot.querySelector(".top").classList.toggle("focused","focus"===e.type)}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`:host{display:block}.top{display:flex;align-items:center;border-radius:var(--ha-card-border-radius,12px)}.top.expanded{border-bottom-left-radius:0px;border-bottom-right-radius:0px}.top.focused{background:var(--input-fill-color)}:host([outlined]){box-shadow:none;border-width:1px;border-style:solid;border-color:var(--ha-card-border-color,var(--divider-color,#e0e0e0));border-radius:var(--ha-card-border-radius,12px)}.summary-icon{margin-left:8px}:host([leftchevron]) .summary-icon{margin-left:0;margin-right:8px}#summary{flex:1;display:flex;padding:var(--expansion-panel-summary-padding,0 8px);min-height:48px;align-items:center;cursor:pointer;overflow:hidden;font-weight:500;outline:0}.summary-icon{transition:transform 150ms cubic-bezier(.4,0,.2,1);direction:var(--direction)}.summary-icon.expanded{transform:rotate(180deg)}.header,::slotted([slot=header]){flex:1}.container{padding:var(--expansion-panel-content-padding,0 8px);overflow:hidden;transition:height .3s cubic-bezier(.4,0,.2,1);height:0px}.container.expanded{height:auto}.secondary{display:block;color:var(--secondary-text-color);font-size:12px}`}}]}}),o.oi)},73366:(e,i,t)=>{t.d(i,{M:()=>l});var r=t(17463),a=t(34541),s=t(47838),o=t(61092),n=t(96762),c=t(68144),d=t(79932);let l=(0,r.Z)([(0,d.Mo)("ha-list-item")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,a.Z)((0,s.Z)(t.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[n.W,c.iv`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`]}}]}}),o.K)},41682:(e,i,t)=>{t.d(i,{js:()=>s,rY:()=>a,yd:()=>c,yz:()=>n});var r=t(63864);const a=e=>e.data,s=e=>"object"==typeof e?"object"==typeof e.body?e.body.message||"Unknown error, see supervisor logs":e.body||e.message||"Unknown error, see supervisor logs":e,o=new Set([502,503,504]),n=e=>!!(e&&e.status_code&&o.has(e.status_code))||!(!e||!e.message||!e.message.includes("ERR_CONNECTION_CLOSED")&&!e.message.includes("ERR_CONNECTION_RESET")),c=async(e,i)=>(0,r.I)(e.config.version,2021,2,4)?e.callWS({type:"supervisor/api",endpoint:`/${i}/stats`,method:"get"}):a(await e.callApi("GET",`hassio/${i}/stats`))},35460:(e,i,t)=>{t.d(i,{AP:()=>o,MY:()=>n,Or:()=>c,Sj:()=>s,Sx:()=>l,oJ:()=>d,ou:()=>h});var r=t(63864),a=t(41682);const s=async e=>{if((0,r.I)(e.config.version,2021,2,4))return e.callWS({type:"supervisor/api",endpoint:"/host/info",method:"get"});const i=await e.callApi("GET","hassio/host/info");return(0,a.rY)(i)},o=async e=>(0,r.I)(e.config.version,2021,2,4)?e.callWS({type:"supervisor/api",endpoint:"/os/info",method:"get"}):(0,a.rY)(await e.callApi("GET","hassio/os/info")),n=async e=>(0,r.I)(e.config.version,2021,2,4)?e.callWS({type:"supervisor/api",endpoint:"/host/reboot",method:"post",timeout:null}):e.callApi("POST","hassio/host/reboot"),c=async e=>(0,r.I)(e.config.version,2021,2,4)?e.callWS({type:"supervisor/api",endpoint:"/host/shutdown",method:"post",timeout:null}):e.callApi("POST","hassio/host/shutdown"),d=async(e,i)=>(0,r.I)(e.config.version,2021,2,4)?e.callWS({type:"supervisor/api",endpoint:"/host/options",method:"post",data:i}):e.callApi("POST","hassio/host/options",i),l=async(e,i)=>(0,r.I)(e.config.version,2021,2,4)?e.callWS({type:"supervisor/api",endpoint:"/os/datadisk/move",method:"post",timeout:null,data:{device:i}}):e.callApi("POST","hassio/os/datadisk/move"),h=async e=>(0,r.I)(e.config.version,2021,2,4)?e.callWS({type:"supervisor/api",endpoint:"/os/datadisk/list",method:"get",timeout:null}):(0,a.rY)(await e.callApi("GET","/os/datadisk/list"))},26765:(e,i,t)=>{t.d(i,{D9:()=>c,Ys:()=>o,g7:()=>n});var r=t(47181);const a=()=>Promise.all([t.e(28597),t.e(52154),t.e(1281)]).then(t.bind(t,1281)),s=(e,i,t)=>new Promise((s=>{const o=i.cancel,n=i.confirm;(0,r.B)(e,"show-dialog",{dialogTag:"dialog-box",dialogImport:a,dialogParams:{...i,...t,cancel:()=>{s(!(null==t||!t.prompt)&&null),o&&o()},confirm:e=>{s(null==t||!t.prompt||e),n&&n(e)}}})})),o=(e,i)=>s(e,i),n=(e,i)=>s(e,i,{confirmation:!0}),c=(e,i)=>s(e,i,{prompt:!0})},82234:(e,i,t)=>{t.r(i);var r=t(17463),a=(t(63436),t(68144)),s=t(79932),o=t(7323),n=t(47181),c=t(86977),d=(t(31206),t(34821)),l=(t(46583),t(73366),t(41682)),h=t(35460),p=t(11654),u=t(81796),m=t(26765);(0,r.Z)([(0,s.Mo)("dialog-restart")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_open",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_loadingHostInfo",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_hostInfo",value:void 0},{kind:"method",key:"showDialog",value:async function(){var e;const i=(0,o.p)(this.hass,"hassio");if(this._open=!0,i&&!this._hostInfo){this._loadingHostInfo=!0;try{this._hostInfo=await(0,h.Sj)(this.hass)}catch(e){}finally{this._loadingHostInfo=!1}}const t=null===(e=this.hass.userData)||void 0===e?void 0:e.showAdvanced,r=!!this._hostInfo;if(!t&&!r)return this._open=!1,void this._showRestartDialog().then((()=>this.closeDialog()));await this.updateComplete}},{kind:"method",key:"closeDialog",value:function(){this._open=!1,this._loadingHostInfo=!1,(0,n.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var e;if(!this._open)return a.Ld;const i=null===(e=this.hass.userData)||void 0===e?void 0:e.showAdvanced,t=!!this._hostInfo;return a.dy` <ha-dialog open @closed="${this.closeDialog}" hideActions .heading="${this._loadingHostInfo?void 0:(0,d.i)(this.hass,this.hass.localize("ui.dialogs.restart.heading"))}"> ${this._loadingHostInfo?a.dy` <div class="loader"> <ha-circular-progress active></ha-circular-progress> </div> `:a.dy` <mwc-list dialogInitialFocus> ${i?a.dy` <ha-list-item graphic="avatar" twoline multiline-secondary @request-selected="${this._reload}"> <div slot="graphic" class="icon-background reload"> <ha-svg-icon .path="${"M7.5,5.6L5,7L6.4,4.5L5,2L7.5,3.4L10,2L8.6,4.5L10,7L7.5,5.6M19.5,15.4L22,14L20.6,16.5L22,19L19.5,17.6L17,19L18.4,16.5L17,14L19.5,15.4M22,2L20.6,4.5L22,7L19.5,5.6L17,7L18.4,4.5L17,2L19.5,3.4L22,2M13.34,12.78L15.78,10.34L13.66,8.22L11.22,10.66L13.34,12.78M14.37,7.29L16.71,9.63C17.1,10 17.1,10.65 16.71,11.04L5.04,22.71C4.65,23.1 4,23.1 3.63,22.71L1.29,20.37C0.9,20 0.9,19.35 1.29,18.96L12.96,7.29C13.35,6.9 14,6.9 14.37,7.29Z"}"></ha-svg-icon> </div> <span> ${this.hass.localize("ui.dialogs.restart.reload.title")} </span> <span slot="secondary"> ${this.hass.localize("ui.dialogs.restart.reload.description")} </span> </ha-list-item> `:a.Ld} <ha-list-item graphic="avatar" twoline multiline-secondary @request-selected="${this._restart}"> <div slot="graphic" class="icon-background restart"> <ha-svg-icon .path="${"M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"}"></ha-svg-icon> </div> <span> ${this.hass.localize("ui.dialogs.restart.restart.title")} </span> <span slot="secondary"> ${this.hass.localize("ui.dialogs.restart.restart.description")} </span> </ha-list-item> </mwc-list> ${t?a.dy` <ha-expansion-panel .header="${this.hass.localize("ui.dialogs.restart.advanced_options")}"> <mwc-list> <ha-list-item graphic="avatar" twoline multiline-secondary hasMeta @request-selected="${this._hostReboot}"> <div slot="graphic" class="icon-background reboot"> <ha-svg-icon .path="${"M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M12,19A7,7 0 0,1 5,12A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19M13,17H11V7H13V17Z"}"></ha-svg-icon> </div> <span> ${this.hass.localize("ui.dialogs.restart.reboot.title")} </span> <span slot="secondary"> ${this.hass.localize("ui.dialogs.restart.reboot.description")} </span> </ha-list-item> <ha-list-item graphic="avatar" twoline multiline-secondary hasMeta @request-selected="${this._hostShutdown}"> <div slot="graphic" class="icon-background shutdown"> <ha-svg-icon .path="${"M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13"}"></ha-svg-icon> </div> <span> ${this.hass.localize("ui.dialogs.restart.shutdown.title")} </span> <span slot="secondary"> ${this.hass.localize("ui.dialogs.restart.shutdown.description")} </span> </ha-list-item> </mwc-list> </ha-expansion-panel> `:a.Ld} `} </ha-dialog> `}},{kind:"method",key:"_reload",value:async function(e){if((0,c.Q)(e)){this.closeDialog(),(0,u.C)(this,{message:this.hass.localize("ui.dialogs.restart.reload.reloading"),duration:1e3});try{await this.hass.callService("homeassistant","reload_all")}catch(e){(0,m.Ys)(this,{title:this.hass.localize("ui.dialogs.restart.reload.failed"),text:e.message})}}}},{kind:"method",key:"_restart",value:async function(e){(0,c.Q)(e)&&this._showRestartDialog()}},{kind:"method",key:"_showRestartDialog",value:async function(){if(await(0,m.g7)(this,{title:this.hass.localize("ui.dialogs.restart.restart.confirm_title"),text:this.hass.localize("ui.dialogs.restart.restart.confirm_description"),confirmText:this.hass.localize("ui.dialogs.restart.restart.confirm_action"),destructive:!0})){this.closeDialog();try{await this.hass.callService("homeassistant","restart")}catch(e){(0,m.Ys)(this,{title:this.hass.localize("ui.dialogs.restart.restart.failed"),text:e.message})}}}},{kind:"method",key:"_hostReboot",value:async function(e){if(!(0,c.Q)(e))return;if(await(0,m.g7)(this,{title:this.hass.localize("ui.dialogs.restart.reboot.confirm_title"),text:this.hass.localize("ui.dialogs.restart.reboot.confirm_description"),confirmText:this.hass.localize("ui.dialogs.restart.reboot.confirm_action"),destructive:!0})){this.closeDialog(),(0,u.C)(this,{message:this.hass.localize("ui.dialogs.restart.reboot.rebooting"),duration:0});try{await(0,h.MY)(this.hass)}catch(e){this.hass.connection.connected&&!(0,l.yz)(e)&&(0,m.Ys)(this,{title:this.hass.localize("ui.dialogs.restart.reboot.failed"),text:(0,l.js)(e)})}}}},{kind:"method",key:"_hostShutdown",value:async function(e){if(!(0,c.Q)(e))return;if(await(0,m.g7)(this,{title:this.hass.localize("ui.dialogs.restart.shutdown.confirm_title"),text:this.hass.localize("ui.dialogs.restart.shutdown.confirm_description"),confirmText:this.hass.localize("ui.dialogs.restart.shutdown.confirm_action"),destructive:!0})){this.closeDialog(),(0,u.C)(this,{message:this.hass.localize("ui.dialogs.restart.shutdown.shutting_down"),duration:0});try{await(0,h.Or)(this.hass)}catch(e){this.hass.connection.connected&&!(0,l.yz)(e)&&(0,m.Ys)(this,{title:this.hass.localize("ui.dialogs.restart.shutdown.failed"),text:(0,l.js)(e)})}}}},{kind:"get",static:!0,key:"styles",value:function(){return[p.Qx,p.yu,a.iv`ha-dialog{--dialog-content-padding:0}@media all and (min-width:550px){ha-dialog{--mdc-dialog-min-width:500px;--mdc-dialog-max-width:500px}}ha-expansion-panel{border-top:1px solid var(--divider-color);margin-bottom:10px;box-shadow:none;--expansion-panel-content-padding:0;--expansion-panel-summary-padding:0 var(--mdc-list-side-padding, 20px);--ha-card-border-radius:0}.icon-background{border-radius:50%;color:#fff}.reload{background-color:#5f8a49}.restart{background-color:#ffd500;color:#650}.reboot{background-color:#ba1b1b;color:#fff}.shutdown{background-color:#0b1d29;color:#fff}.divider{height:1px;background-color:var(--divider-color)}.section{font-weight:500;font-size:14px;line-height:20px;margin:8px 0 4px 0;padding-left:var(--mdc-list-side-padding,20px);padding-right:var(--mdc-list-side-padding,20px)}.loader{display:flex;align-items:center;justify-content:center;padding:24px}`]}}]}}),a.oi)}}]);
//# sourceMappingURL=82234-lGkXxsHFb0c.js.map