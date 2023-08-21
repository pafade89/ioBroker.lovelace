"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[74293],{25516:(e,t,i)=>{i.d(t,{i:()=>n});const a=(0,i(8330).P)((e=>{history.replaceState({scrollPosition:e},"")}),300),n=e=>t=>({kind:"method",placement:"prototype",key:t.key,descriptor:{set(e){a(e),this[`__${String(t.key)}`]=e},get(){var e;return this[`__${String(t.key)}`]||(null===(e=history.state)||void 0===e?void 0:e.scrollPosition)},enumerable:!0,configurable:!0},finisher(i){const a=i.prototype.connectedCallback;i.prototype.connectedCallback=function(){a.call(this);const i=this[t.key];i&&this.updateComplete.then((()=>{const t=this.renderRoot.querySelector(e);t&&setTimeout((()=>{t.scrollTop=i}),0)}))}}})},8330:(e,t,i)=>{i.d(t,{P:()=>a});const a=(e,t,i=!0,a=!0)=>{let n,d=0;const o=(...o)=>{const l=()=>{d=!1===i?0:Date.now(),n=void 0,e(...o)},s=Date.now();d||!1!==i||(d=s);const r=t-(s-d);r<=0||r>t?(n&&(clearTimeout(n),n=void 0),d=s,e(...o)):n||!1===a||(n=window.setTimeout(l,r))};return o.cancel=()=>{clearTimeout(n),n=void 0,d=0},o}},31206:(e,t,i)=>{i.r(t),i.d(t,{HaCircularProgress:()=>r});var a=i(17463),n=i(34541),d=i(47838),o=i(30879),l=i(68144),s=i(79932);let r=(0,a.Z)([(0,s.Mo)("ha-circular-progress")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"active",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)()],key:"alt",value:()=>"Loading"},{kind:"field",decorators:[(0,s.Cb)()],key:"size",value:()=>"medium"},{kind:"set",key:"density",value:function(e){}},{kind:"get",key:"density",value:function(){switch(this.size){case"tiny":return-8;case"small":return-5;case"medium":default:return 0;case"large":return 5}}},{kind:"set",key:"indeterminate",value:function(e){}},{kind:"get",key:"indeterminate",value:function(){return this.active}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,n.Z)((0,d.Z)(i),"styles",this),l.iv`:host{overflow:hidden}`]}}]}}),o.D)},61878:(e,t,i)=>{var a=i(17463),n=i(68144),d=i(79932);(0,a.Z)([(0,d.Mo)("ha-dialog-header")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",key:"render",value:function(){return n.dy` <header class="header"> <div class="header-bar"> <section class="header-navigation-icon"> <slot name="navigationIcon"></slot> </section> <section class="header-title"> <slot name="title"></slot> </section> <section class="header-action-items"> <slot name="actionItems"></slot> </section> </div> <slot></slot> </header> `}},{kind:"get",static:!0,key:"styles",value:function(){return[n.iv`:host{display:block}:host([show-border]){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.header-bar{display:flex;flex-direction:row;align-items:flex-start;padding:4px;box-sizing:border-box}.header-title{flex:1;font-size:22px;line-height:28px;font-weight:400;padding:10px 4px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media all and (min-width:450px) and (min-height:500px){.header-bar{padding:12px}}.header-navigation-icon{flex:none;min-width:8px;height:100%;display:flex;flex-direction:row}.header-action-items{flex:none;min-width:8px;height:100%;display:flex;flex-direction:row}`]}}]}}),n.oi)},34821:(e,t,i)=>{i.d(t,{i:()=>p});var a=i(17463),n=i(34541),d=i(47838),o=i(87762),l=i(91632),s=i(68144),r=i(79932),c=i(74265);i(10983);const h=["button","ha-list-item"],p=(e,t)=>s.dy` <div class="header_title">${t}</div> <ha-icon-button .label="${e.localize("ui.dialogs.generic.close")}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> `;(0,a.Z)([(0,r.Mo)("ha-dialog")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:c.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,t){var i;null===(i=this.contentElement)||void 0===i||i.scrollTo(e,t)}},{kind:"method",key:"renderHeading",value:function(){return s.dy`<slot name="heading"> ${(0,n.Z)((0,d.Z)(i.prototype),"renderHeading",this).call(this)} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,n.Z)((0,d.Z)(i.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,h].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,n.Z)((0,d.Z)(i.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[l.W,s.iv`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter, none);backdrop-filter:var(--dialog-backdrop-filter, none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:nth-child(1){flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),o.M)},3555:(e,t,i)=>{var a=i(17463),n=i(34541),d=i(47838),o=i(42977),l=i(31338),s=i(68144),r=i(79932);(0,a.Z)([(0,r.Mo)("ha-textfield")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"invalid",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"iconTrailing",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"autocomplete",value:void 0},{kind:"field",decorators:[(0,r.IO)("input")],key:"formElement",value:void 0},{kind:"method",key:"updated",value:function(e){(0,n.Z)((0,d.Z)(i.prototype),"updated",this).call(this,e),(e.has("invalid")&&(this.invalid||void 0!==e.get("invalid"))||e.has("errorMessage"))&&(this.setCustomValidity(this.invalid?this.errorMessage||"Invalid":""),this.reportValidity()),e.has("autocomplete")&&(this.autocomplete?this.formElement.setAttribute("autocomplete",this.autocomplete):this.formElement.removeAttribute("autocomplete"))}},{kind:"method",key:"renderIcon",value:function(e,t=!1){const i=t?"trailing":"leading";return s.dy` <span class="mdc-text-field__icon mdc-text-field__icon--${i}" tabindex="${t?1:-1}"> <slot name="${i}Icon"></slot> </span> `}},{kind:"field",static:!0,key:"styles",value:()=>[l.W,s.iv`.mdc-text-field__input{width:var(--ha-textfield-input-width,100%)}.mdc-text-field:not(.mdc-text-field--with-leading-icon){padding:var(--text-field-padding,0px 16px)}.mdc-text-field__affix--suffix{padding-left:var(--text-field-suffix-padding-left,12px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,12px);padding-inline-end:var(--text-field-suffix-padding-right,0px);direction:var(--direction)}.mdc-text-field--with-leading-icon{padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,16px);direction:var(--direction)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:var(--text-field-suffix-padding-left,0px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,0px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:var(--secondary-text-color)}.mdc-text-field__icon{color:var(--secondary-text-color)}.mdc-text-field__icon--leading{margin-inline-start:16px;margin-inline-end:8px;direction:var(--direction)}.mdc-floating-label:not(.mdc-floating-label--float-above){text-overflow:ellipsis;width:inherit;padding-right:30px;padding-inline-end:30px;padding-inline-start:initial;box-sizing:border-box;direction:var(--direction)}input{text-align:var(--text-field-text-align,start)}:host([no-spinner]) input::-webkit-inner-spin-button,:host([no-spinner]) input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}:host([no-spinner]) input[type=number]{-moz-appearance:textfield}.mdc-text-field__ripple{overflow:hidden}.mdc-text-field{overflow:var(--text-field-overflow)}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start);direction:var(--direction);text-align:var(--float-start)}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px - var(--text-field-suffix-padding-left,0px));inset-inline-start:calc(48px + var(--text-field-suffix-padding-left,0px))!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field__input[type=number]{direction:var(--direction)}`,"rtl"===document.dir?s.iv`.mdc-floating-label,.mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field__affix--suffix,.mdc-text-field__icon--leading,.mdc-text-field__input[type=number]{direction:rtl}`:s.iv``]}]}}),o.P)},54531:(e,t,i)=>{i.d(t,{Qc:()=>r,Xr:()=>s,zJ:()=>l});const a=["zone","persistent_notification"],n=(e,t)=>{var i,a,n,d,o,l,s,r;if(!("call-service"===t.action&&(null!==(i=t.target)&&void 0!==i&&i.entity_id||null!==(a=t.service_data)&&void 0!==a&&a.entity_id||null!==(n=t.data)&&void 0!==n&&n.entity_id)))return;let c=null!==(d=null!==(o=null===(l=t.service_data)||void 0===l?void 0:l.entity_id)&&void 0!==o?o:null===(s=t.data)||void 0===s?void 0:s.entity_id)&&void 0!==d?d:null===(r=t.target)||void 0===r?void 0:r.entity_id;Array.isArray(c)||(c=[c]);for(const t of c)e.add(t)},d=(e,t)=>{"string"!=typeof t?(t.entity&&e.add(t.entity),t.camera_image&&e.add(t.camera_image),t.tap_action&&n(e,t.tap_action),t.hold_action&&n(e,t.hold_action)):e.add(t)},o=(e,t)=>{t.entity&&d(e,t.entity),t.entities&&Array.isArray(t.entities)&&t.entities.forEach((t=>d(e,t))),t.card&&o(e,t.card),t.cards&&Array.isArray(t.cards)&&t.cards.forEach((t=>o(e,t))),t.elements&&Array.isArray(t.elements)&&t.elements.forEach((t=>o(e,t))),t.badges&&Array.isArray(t.badges)&&t.badges.forEach((t=>d(e,t)))},l=e=>{const t=new Set;return e.views.forEach((e=>o(t,e))),t},s=(e,t)=>{const i=new Set;for(const n of Object.keys(e.states))t.has(n)||a.includes(n.split(".",1)[0])||i.add(n);return i},r=(e,t)=>{const i=l(t);return s(e,i)}},68175:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var a=i(17463),n=(i(17333),i(91993),i(81480)),d=i(68144),o=i(79932),l=i(83448),s=i(47501),r=i(62601),c=i(14516),h=i(47181),p=(i(31206),i(65040),i(56007)),u=i(9893),m=i(54531),g=i(51153),v=i(82432),f=i(7782),y=e([g,v]);[g,v]=y.then?(await y)():y;(0,a.Z)([(0,o.Mo)("hui-card-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_cards",value:()=>[]},{kind:"field",key:"lovelace",value:void 0},{kind:"field",key:"cardPicked",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_filter",value:()=>""},{kind:"field",decorators:[(0,o.SB)()],key:"_width",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_height",value:void 0},{kind:"field",key:"_unusedEntities",value:void 0},{kind:"field",key:"_usedEntities",value:void 0},{kind:"field",key:"_filterCards",value:()=>(0,c.Z)(((e,t)=>{if(!t)return e;let i=e.map((e=>e.card));const a=new n.Z(i,{keys:["type","name","description"],isCaseSensitive:!1,minMatchCharLength:2,threshold:.2});return i=a.search(t).map((e=>e.item)),e.filter((e=>i.includes(e.card)))}))},{kind:"method",key:"render",value:function(){return this.hass&&this.lovelace&&this._unusedEntities&&this._usedEntities?d.dy` <search-input .hass="${this.hass}" .filter="${this._filter}" @value-changed="${this._handleSearchChange}" .label="${this.hass.localize("ui.panel.lovelace.editor.edit_card.search_cards")}"></search-input> <div id="content" style="${(0,s.V)({width:this._width?`${this._width}px`:"auto",height:this._height?`${this._height}px`:"auto"})}"> <div class="cards-container"> ${this._filterCards(this._cards,this._filter).map((e=>e.element))} </div> <div class="cards-container"> <div class="card manual" @click="${this._cardPicked}" .config="${{type:""}}"> <div class="card-header"> ${this.hass.localize("ui.panel.lovelace.editor.card.generic.manual")} </div> <div class="preview description"> ${this.hass.localize("ui.panel.lovelace.editor.card.generic.manual_description")} </div> </div> </div> </div> `:d.Ld}},{kind:"method",key:"shouldUpdate",value:function(e){const t=e.get("hass");return!t||t.locale!==this.hass.locale}},{kind:"method",key:"firstUpdated",value:function(){if(!this.hass||!this.lovelace)return;const e=(0,m.zJ)(this.lovelace),t=(0,m.Xr)(this.hass,e);this._usedEntities=[...e].filter((e=>this.hass.states[e]&&!(0,p.rk)(this.hass.states[e].state))),this._unusedEntities=[...t].filter((e=>this.hass.states[e]&&!(0,p.rk)(this.hass.states[e].state))),this._loadCards()}},{kind:"method",key:"_loadCards",value:function(){let e=f.C.map((e=>({name:this.hass.localize(`ui.panel.lovelace.editor.card.${e.type}.name`),description:this.hass.localize(`ui.panel.lovelace.editor.card.${e.type}.description`),...e})));u.kb.length>0&&(e=e.concat(u.kb.map((e=>({type:e.type,name:e.name,description:e.description,showElement:e.preview,isCustom:!0}))))),this._cards=e.map((e=>({card:e,element:d.dy`${(0,r.C)(this._renderCardElement(e),d.dy` <div class="card spinner"> <ha-circular-progress active alt="Loading"></ha-circular-progress> </div> `)}`})))}},{kind:"method",key:"_handleSearchChange",value:function(e){const t=e.detail.value;if(t){if(!this._width||!this._height){const e=this.shadowRoot.getElementById("content");if(e&&!this._width){const t=e.clientWidth;t&&(this._width=t)}if(e&&!this._height){const t=e.clientHeight;t&&(this._height=t)}}}else this._width=void 0,this._height=void 0;this._filter=t}},{kind:"method",key:"_cardPicked",value:function(e){const t=e.currentTarget.config;(0,h.B)(this,"config-changed",{config:t})}},{kind:"method",key:"_tryCreateCardElement",value:function(e){const t=(0,g.l$)(e);return t.hass=this.hass,t.addEventListener("ll-rebuild",(i=>{i.stopPropagation(),this._rebuildCard(t,e)}),{once:!0}),t}},{kind:"method",key:"_rebuildCard",value:function(e,t){let i;try{i=this._tryCreateCardElement(t)}catch(e){return}e.parentElement&&e.parentElement.replaceChild(i,e)}},{kind:"method",key:"_renderCardElement",value:async function(e){let{type:t}=e;const{showElement:i,isCustom:a,name:n,description:o}=e,s=a?(0,u.cs)(t):void 0;let r;a&&(t=`${u.Qo}${t}`);let c={type:t};if(this.hass&&this.lovelace&&(c=await(0,v.U)(this.hass,t,this._unusedEntities,this._usedEntities),i))try{r=this._tryCreateCardElement(c)}catch(e){r=void 0}return d.dy` <div class="card"> <div class="overlay" @click="${this._cardPicked}" .config="${c}"></div> <div class="card-header"> ${s?`${this.hass.localize("ui.panel.lovelace.editor.cardpicker.custom_card")}: ${s.name||s.type}`:n} </div> <div class="preview ${(0,l.$)({description:!r||"HUI-ERROR-CARD"===r.tagName})}"> ${r&&"HUI-ERROR-CARD"!==r.tagName?r:s?s.description||this.hass.localize("ui.panel.lovelace.editor.cardpicker.no_description"):o} </div> </div> `}},{kind:"get",static:!0,key:"styles",value:function(){return[d.iv`search-input{display:block;--mdc-shape-small:var(--card-picker-search-shape);margin:var(--card-picker-search-margin)}.cards-container{display:grid;grid-gap:8px 8px;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));margin-top:20px}.card{height:100%;max-width:500px;display:flex;flex-direction:column;border-radius:var(--ha-card-border-radius,12px);background:var(--primary-background-color,#fafafa);cursor:pointer;position:relative}.card-header{color:var(--ha-card-header-color,--primary-text-color);font-family:var(--ha-card-header-font-family,inherit);font-size:16px;font-weight:700;letter-spacing:-.012em;line-height:20px;padding:12px 16px;display:block;text-align:center;background:var(--ha-card-background,var(--card-background-color,#fff));border-bottom:1px solid var(--divider-color)}.preview{pointer-events:none;margin:20px;flex-grow:1;display:flex;align-items:center;justify-content:center}.preview>:first-child{zoom:.6;display:block;width:100%}.description{text-align:center}.spinner{align-items:center;justify-content:center}.overlay{position:absolute;width:100%;height:100%;z-index:1;box-sizing:border-box;border:var(--ha-card-border-width,1px) solid var(--ha-card-border-color,var(--divider-color));border-radius:var(--ha-card-border-radius,12px)}.manual{max-width:none}`]}}]}}),d.oi);t()}catch(e){t(e)}}))},52408:(e,t,i)=>{i.a(e,(async(e,a)=>{try{i.r(t),i.d(t,{HuiCreateDialogCard:()=>x});var n=i(17463),d=(i(17333),i(91993),i(68144)),o=i(79932),l=i(97904),s=i(83448),r=i(14516),c=i(47181),h=i(58831),p=i(91741),u=(i(34821),i(61878),i(11654)),m=i(68175),g=i(59110),v=i(18678),f=i(47512),y=e([m,g]);[m,g]=y.then?(await y)():y;const k="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";let x=(0,n.Z)([(0,o.Mo)("hui-dialog-create-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_viewConfig",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_selectedEntities",value:()=>[]},{kind:"field",decorators:[(0,o.SB)()],key:"_currTabIndex",value:()=>0},{kind:"method",key:"showDialog",value:async function(e){this._params=e;const[t]=e.path;this._viewConfig=e.lovelaceConfig.views[t]}},{kind:"method",key:"closeDialog",value:function(){return this._params=void 0,this._currTabIndex=0,this._selectedEntities=[],(0,c.B)(this,"dialog-closed",{dialog:this.localName}),!0}},{kind:"method",key:"render",value:function(){if(!this._params)return d.Ld;const e=this._viewConfig.title?this.hass.localize("ui.panel.lovelace.editor.edit_card.pick_card_view_title","name",`"${this._viewConfig.title}"`):this.hass.localize("ui.panel.lovelace.editor.edit_card.pick_card");return d.dy` <ha-dialog open scrimClickAction @keydown="${this._ignoreKeydown}" @closed="${this._cancel}" .heading="${e}" class="${(0,s.$)({table:1===this._currTabIndex})}"> <ha-dialog-header show-border slot="heading"> <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label="${this.hass.localize("ui.common.close")}" .path="${k}"></ha-icon-button> <span slot="title"> ${e} </span> <mwc-tab-bar .activeIndex="${this._currTabIndex}" @MDCTabBar:activated="${this._handleTabChanged}"> <mwc-tab .label="${this.hass.localize("ui.panel.lovelace.editor.cardpicker.by_card")}" dialogInitialFocus></mwc-tab> <mwc-tab .label="${this.hass.localize("ui.panel.lovelace.editor.cardpicker.by_entity")}"></mwc-tab> </mwc-tab-bar> </ha-dialog-header> ${(0,l.F)(0===this._currTabIndex?d.dy` <hui-card-picker .lovelace="${this._params.lovelaceConfig}" .hass="${this.hass}" @config-changed="${this._handleCardPicked}"></hui-card-picker> `:d.dy` <hui-entity-picker-table no-label-float .hass="${this.hass}" .narrow="${!0}" .entities="${this._allEntities(this.hass.states)}" @selected-changed="${this._handleSelectedChanged}"></hui-entity-picker-table> `)} <div slot="primaryAction"> <mwc-button @click="${this._cancel}"> ${this.hass.localize("ui.common.cancel")} </mwc-button> ${this._selectedEntities.length?d.dy` <mwc-button @click="${this._suggestCards}"> ${this.hass.localize("ui.common.continue")} </mwc-button> `:""} </div> </ha-dialog> `}},{kind:"method",key:"_ignoreKeydown",value:function(e){e.stopPropagation()}},{kind:"get",static:!0,key:"styles",value:function(){return[u.yu,d.iv`@media all and (max-width:450px),all and (max-height:500px){ha-dialog{--mdc-dialog-max-height:100%;height:100%}}@media all and (min-width:850px){ha-dialog{--mdc-dialog-min-width:845px}}ha-dialog{--mdc-dialog-max-width:845px;--dialog-content-padding:2px 24px 20px 24px;--dialog-z-index:6}ha-dialog.table{--dialog-content-padding:0}@media (min-width:1200px){ha-dialog{--mdc-dialog-max-width:calc(100% - 32px);--mdc-dialog-min-width:1000px}}hui-card-picker{--card-picker-search-shape:0;--card-picker-search-margin:-2px -24px 0}hui-entity-picker-table{display:block;height:calc(100vh - 198px);--mdc-shape-small:0}@media all and (max-width:450px),all and (max-height:500px){hui-entity-picker-table{height:calc(100vh - 158px)}}`]}},{kind:"method",key:"_handleCardPicked",value:function(e){const t=e.detail.config;this._params.entities&&this._params.entities.length&&(Object.keys(t).includes("entities")?t.entities=this._params.entities:Object.keys(t).includes("entity")&&(t.entity=this._params.entities[0])),(0,v.x)(this,{lovelaceConfig:this._params.lovelaceConfig,saveConfig:this._params.saveConfig,path:this._params.path,cardConfig:t}),this.closeDialog()}},{kind:"method",key:"_handleTabChanged",value:function(e){e.detail.index!==this._currTabIndex&&(this._currTabIndex=e.detail.index,this._selectedEntities=[])}},{kind:"method",key:"_handleSelectedChanged",value:function(e){this._selectedEntities=e.detail.selectedEntities}},{kind:"method",key:"_cancel",value:function(e){e&&e.stopPropagation(),this.closeDialog()}},{kind:"method",key:"_suggestCards",value:function(){(0,f.f)(this,{lovelaceConfig:this._params.lovelaceConfig,saveConfig:this._params.saveConfig,path:this._params.path,entities:this._selectedEntities}),this.closeDialog()}},{kind:"field",key:"_allEntities",value(){return(0,r.Z)((e=>Object.keys(e).map((e=>{const t=this.hass.states[e];return{icon:"",entity_id:e,stateObj:t,name:(0,p.C)(t),domain:(0,h.M)(e),last_changed:t.last_changed}}))))}}]}}),d.oi);a()}catch(e){a(e)}}))},59110:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var a=i(17463),n=i(68144),d=i(79932),o=i(14516),l=i(47181),s=i(87744),r=(i(37168),i(3143),i(42952)),c=e([r]);r=(c.then?(await c)():c)[0];(0,a.Z)([(0,d.Mo)("hui-entity-picker-table")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,attribute:"no-label-float"})],key:"noLabelFloat",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Array})],key:"entities",value:void 0},{kind:"method",key:"render",value:function(){return n.dy` <ha-data-table .hass="${this.hass}" selectable .id="${"entity_id"}" .columns="${this._columns(this.narrow)}" .data="${this.entities}" .dir="${(0,s.Zu)(this.hass)}" .searchLabel="${this.hass.localize("ui.panel.lovelace.unused_entities.search")}" .noLabelFloat="${this.noLabelFloat}" .noDataText="${this.hass.localize("ui.panel.lovelace.unused_entities.no_data")}" @selection-changed="${this._handleSelectionChanged}"></ha-data-table> `}},{kind:"field",key:"_columns",value(){return(0,o.Z)((e=>{const t={icon:{title:"",label:this.hass.localize("ui.panel.lovelace.unused_entities.state_icon"),type:"icon",template:(e,t)=>n.dy` <state-badge @click="${this._handleEntityClicked}" .hass="${this.hass}" .stateObj="${t.stateObj}"></state-badge> `},name:{title:this.hass.localize("ui.panel.lovelace.unused_entities.entity"),sortable:!0,filterable:!0,grows:!0,direction:"asc",template:(t,i)=>n.dy` <div @click="${this._handleEntityClicked}" style="cursor:pointer"> ${t} ${e?n.dy` <div class="secondary">${i.entity_id}</div> `:""} </div> `}};return t.entity_id={title:this.hass.localize("ui.panel.lovelace.unused_entities.entity_id"),sortable:!0,filterable:!0,width:"30%",hidden:e},t.domain={title:this.hass.localize("ui.panel.lovelace.unused_entities.domain"),sortable:!0,filterable:!0,width:"15%",hidden:e},t.last_changed={title:this.hass.localize("ui.panel.lovelace.unused_entities.last_changed"),type:"numeric",sortable:!0,width:"15%",hidden:e,template:e=>n.dy` <ha-relative-time .hass="${this.hass}" .datetime="${e}" capitalize></ha-relative-time> `},t}))}},{kind:"method",key:"_handleSelectionChanged",value:function(e){const t=e.detail.value;(0,l.B)(this,"selected-changed",{selectedEntities:t})}},{kind:"method",key:"_handleEntityClicked",value:function(e){const t=e.target.closest(".mdc-data-table__row").rowId;(0,l.B)(this,"hass-more-info",{entityId:t})}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`ha-data-table{--data-table-border-width:0;height:100%}`}}]}}),n.oi);t()}catch(e){t(e)}}))},18678:(e,t,i)=>{i.d(t,{I:()=>n,x:()=>d});var a=i(47181);const n=()=>Promise.all([i.e(28597),i.e(77426),i.e(52092),i.e(26633),i.e(38206)]).then(i.bind(i,24932)),d=(e,t)=>{(0,a.B)(e,"show-dialog",{dialogTag:"hui-dialog-edit-card",dialogImport:n,dialogParams:t})}},47512:(e,t,i)=>{i.d(t,{f:()=>d});var a=i(47181);const n=()=>Promise.all([i.e(77426),i.e(52506),i.e(96549),i.e(87361),i.e(14845),i.e(75329)]).then(i.bind(i,9444)),d=(e,t)=>{(0,a.B)(e,"show-dialog",{dialogTag:"hui-dialog-suggest-card",dialogImport:n,dialogParams:t})}},82432:(e,t,i)=>{i.a(e,(async(e,a)=>{try{i.d(t,{U:()=>o});var n=i(51153),d=e([n]);n=(d.then?(await d)():d)[0];const o=async(e,t,i,a)=>{let d={type:t};const o=await(0,n.Do)(t);if(o&&o.getStubConfig){const t=await o.getStubConfig(e,i,a);d={...d,...t}}return d};a()}catch(e){a(e)}}))},7782:(e,t,i)=>{i.d(t,{C:()=>a});const a=[{type:"alarm-panel",showElement:!0},{type:"button",showElement:!0},{type:"calendar",showElement:!0},{type:"entities",showElement:!0},{type:"entity",showElement:!0},{type:"gauge",showElement:!0},{type:"glance",showElement:!0},{type:"history-graph",showElement:!0},{type:"statistics-graph",showElement:!1},{type:"statistic",showElement:!0},{type:"humidifier",showElement:!0},{type:"light",showElement:!0},{type:"map",showElement:!0},{type:"markdown",showElement:!0},{type:"media-control",showElement:!0},{type:"picture",showElement:!0},{type:"picture-elements",showElement:!0},{type:"picture-entity",showElement:!0},{type:"picture-glance",showElement:!0},{type:"plant-status",showElement:!0},{type:"sensor",showElement:!0},{type:"thermostat",showElement:!0},{type:"weather-forecast",showElement:!0},{type:"area",showElement:!0},{type:"tile",showElement:!0},{type:"conditional"},{type:"entity-filter"},{type:"grid"},{type:"horizontal-stack"},{type:"iframe"},{type:"logbook"},{type:"vertical-stack"},{type:"shopping-list"}]}}]);
//# sourceMappingURL=74293-7tHrluVPY9A.js.map