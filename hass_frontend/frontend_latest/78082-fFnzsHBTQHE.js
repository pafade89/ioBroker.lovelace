"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[78082],{32594:(e,t,i)=>{i.d(t,{U:()=>o});const o=e=>e.stopPropagation()},40789:(e,t,i)=>{var o=i(17463),a=i(34541),r=i(47838),d=i(68144),l=i(79932),s=i(14516),n=i(47181),c=i(32594);let h;i(81312);const u={key:"Mod-s",run:e=>((0,n.B)(e.dom,"editor-save"),!0)},m=e=>{const t=document.createElement("ha-icon");return t.icon=e.label,t};(0,o.Z)([(0,l.Mo)("ha-code-editor")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",key:"codemirror",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"mode",value:()=>"yaml"},{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"readOnly",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,attribute:"autocomplete-entities"})],key:"autocompleteEntities",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,attribute:"autocomplete-icons"})],key:"autocompleteIcons",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)()],key:"error",value:()=>!1},{kind:"field",decorators:[(0,l.SB)()],key:"_value",value:()=>""},{kind:"field",key:"_loadedCodeMirror",value:void 0},{kind:"field",key:"_iconList",value:void 0},{kind:"set",key:"value",value:function(e){this._value=e}},{kind:"get",key:"value",value:function(){return this.codemirror?this.codemirror.state.doc.toString():this._value}},{kind:"get",key:"hasComments",value:function(){if(!this.codemirror||!this._loadedCodeMirror)return!1;const e=this._loadedCodeMirror.highlightingFor(this.codemirror.state,[this._loadedCodeMirror.tags.comment]);return!!this.shadowRoot.querySelector(`span.${e}`)}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)((0,r.Z)(o.prototype),"connectedCallback",this).call(this),this.addEventListener("keydown",c.U),this.codemirror&&!1!==this.autofocus&&this.codemirror.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,r.Z)(o.prototype),"disconnectedCallback",this).call(this),this.removeEventListener("keydown",c.U)}},{kind:"method",key:"update",value:function(e){(0,a.Z)((0,r.Z)(o.prototype),"update",this).call(this,e),this.codemirror&&(e.has("mode")&&this.codemirror.dispatch({effects:this._loadedCodeMirror.langCompartment.reconfigure(this._mode)}),e.has("readOnly")&&this.codemirror.dispatch({effects:this._loadedCodeMirror.readonlyCompartment.reconfigure(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly))}),e.has("_value")&&this._value!==this.value&&this.codemirror.dispatch({changes:{from:0,to:this.codemirror.state.doc.length,insert:this._value}}),e.has("error")&&this.classList.toggle("error-state",this.error))}},{kind:"method",key:"firstUpdated",value:function(e){(0,a.Z)((0,r.Z)(o.prototype),"firstUpdated",this).call(this,e),this._load()}},{kind:"get",key:"_mode",value:function(){return this._loadedCodeMirror.langs[this.mode]}},{kind:"method",key:"_load",value:async function(){this._loadedCodeMirror=await(async()=>(h||(h=Promise.all([i.e(43642),i.e(74561),i.e(92914)]).then(i.bind(i,92914))),h))();const e=[this._loadedCodeMirror.lineNumbers(),this._loadedCodeMirror.EditorState.allowMultipleSelections.of(!0),this._loadedCodeMirror.history(),this._loadedCodeMirror.highlightSelectionMatches(),this._loadedCodeMirror.highlightActiveLine(),this._loadedCodeMirror.drawSelection(),this._loadedCodeMirror.rectangularSelection(),this._loadedCodeMirror.keymap.of([...this._loadedCodeMirror.defaultKeymap,...this._loadedCodeMirror.searchKeymap,...this._loadedCodeMirror.historyKeymap,...this._loadedCodeMirror.tabKeyBindings,u]),this._loadedCodeMirror.langCompartment.of(this._mode),this._loadedCodeMirror.haTheme,this._loadedCodeMirror.haSyntaxHighlighting,this._loadedCodeMirror.readonlyCompartment.of(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly)),this._loadedCodeMirror.EditorView.updateListener.of((e=>this._onUpdate(e)))];if(!this.readOnly){const t=[];this.autocompleteEntities&&this.hass&&t.push(this._entityCompletions.bind(this)),this.autocompleteIcons&&t.push(this._mdiCompletions.bind(this)),t.length>0&&e.push(this._loadedCodeMirror.autocompletion({override:t,maxRenderedOptions:10}))}this.codemirror=new this._loadedCodeMirror.EditorView({state:this._loadedCodeMirror.EditorState.create({doc:this._value,extensions:e}),root:this.shadowRoot,parent:this.shadowRoot})}},{kind:"field",key:"_getStates",value:()=>(0,s.Z)((e=>{if(!e)return[];return Object.keys(e).map((t=>({type:"variable",label:t,detail:e[t].attributes.friendly_name,info:`State: ${e[t].state}`})))}))},{kind:"method",key:"_entityCompletions",value:function(e){const t=e.matchBefore(/[a-z_]{3,}\.\w*/);if(!t||t.from===t.to&&!e.explicit)return null;const i=this._getStates(this.hass.states);return i&&i.length?{from:Number(t.from),options:i,validFor:/^[a-z_]{3,}\.\w*$/}:null}},{kind:"field",key:"_getIconItems",value(){return async()=>{if(!this._iconList){let e;e=(await i.e(71639).then(i.t.bind(i,71639,19))).default,this._iconList=e.map((e=>({type:"variable",label:`mdi:${e.name}`,detail:e.keywords.join(", "),info:m})))}return this._iconList}}},{kind:"method",key:"_mdiCompletions",value:async function(e){const t=e.matchBefore(/mdi:\S*/);if(!t||t.from===t.to&&!e.explicit)return null;const i=await this._getIconItems();return{from:Number(t.from),options:i,validFor:/^mdi:\S*$/}}},{kind:"method",key:"_onUpdate",value:function(e){if(!e.docChanged)return;const t=this.value;t!==this._value&&(this._value=t,(0,n.B)(this,"value-changed",{value:this._value}))}},{kind:"get",static:!0,key:"styles",value:function(){return d.iv`:host(.error-state) .cm-gutters{border-color:var(--error-state-color,red)}`}}]}}),d.fl)},34821:(e,t,i)=>{i.d(t,{i:()=>u});var o=i(17463),a=i(34541),r=i(47838),d=i(87762),l=i(91632),s=i(68144),n=i(79932),c=i(74265);i(10983);const h=["button","ha-list-item"],u=(e,t)=>s.dy` <div class="header_title">${t}</div> <ha-icon-button .label="${e.localize("ui.dialogs.generic.close")}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> `;(0,o.Z)([(0,n.Mo)("ha-dialog")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:c.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,t){var i;null===(i=this.contentElement)||void 0===i||i.scrollTo(e,t)}},{kind:"method",key:"renderHeading",value:function(){return s.dy`<slot name="heading"> ${(0,a.Z)((0,r.Z)(i.prototype),"renderHeading",this).call(this)} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,a.Z)((0,r.Z)(i.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,h].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,r.Z)(i.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[l.W,s.iv`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter, none);backdrop-filter:var(--dialog-backdrop-filter, none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:nth-child(1){flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),d.M)},18900:(e,t,i)=>{var o=i(17463),a=i(34541),r=i(47838),d=i(77426),l=i(68144),s=i(79932),n=i(47181);i(40789);(0,o.Z)([(0,s.Mo)("ha-yaml-editor")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"yamlSchema",value:()=>d.oW},{kind:"field",decorators:[(0,s.Cb)()],key:"defaultValue",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"isValid",value:()=>!0},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"autoUpdate",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"readOnly",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_yaml",value:()=>""},{kind:"method",key:"setValue",value:function(e){try{this._yaml=e&&!(e=>{if("object"!=typeof e)return!1;for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0})(e)?(0,d.$w)(e,{schema:this.yamlSchema,quotingType:'"',noRefs:!0}):""}catch(t){console.error(t,e),alert(`There was an error converting to YAML: ${t}`)}}},{kind:"method",key:"firstUpdated",value:function(){this.defaultValue&&this.setValue(this.defaultValue)}},{kind:"method",key:"willUpdate",value:function(e){(0,a.Z)((0,r.Z)(i.prototype),"willUpdate",this).call(this,e),this.autoUpdate&&e.has("value")&&this.setValue(this.value)}},{kind:"method",key:"render",value:function(){return void 0===this._yaml?l.Ld:l.dy` ${this.label?l.dy`<p>${this.label}${this.required?" *":""}</p>`:""} <ha-code-editor .hass="${this.hass}" .value="${this._yaml}" .readOnly="${this.readOnly}" mode="yaml" autocomplete-entities autocomplete-icons .error="${!1===this.isValid}" @value-changed="${this._onChange}" dir="ltr"></ha-code-editor> `}},{kind:"method",key:"_onChange",value:function(e){let t;e.stopPropagation(),this._yaml=e.detail.value;let i=!0;if(this._yaml)try{t=(0,d.zD)(this._yaml,{schema:this.yamlSchema})}catch(e){i=!1}else t={};this.value=t,this.isValid=i,(0,n.B)(this,"value-changed",{value:t,isValid:i})}},{kind:"get",key:"yaml",value:function(){return this._yaml}}]}}),l.oi)},78082:(e,t,i)=>{i.r(t),i.d(t,{HuiSaveConfig:()=>u});var o=i(17463),a=(i(14271),i(68144)),r=i(79932),d=i(47181),l=i(87744),s=(i(31206),i(34821),i(83927),i(10983),i(43709),i(18900),i(11654)),n=i(27322),c=i(12042);const h={views:[{title:"Home"}]};let u=(0,o.Z)([(0,r.Mo)("hui-dialog-save-config")],(function(e,t){return{F:class extends t{constructor(){super(),e(this),this._saving=!1}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_emptyConfig",value:()=>!1},{kind:"field",decorators:[(0,r.SB)()],key:"_saving",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._params=e,this._emptyConfig=!1}},{kind:"method",key:"closeDialog",value:function(){return this._params=void 0,(0,d.B)(this,"dialog-closed",{dialog:this.localName}),!0}},{kind:"method",key:"render",value:function(){return this._params?a.dy` <ha-dialog open scrimClickAction escapeKeyAction @closed="${this._close}" .heading="${a.dy`${this.hass.localize("ui.panel.lovelace.editor.save_config.header")}<a class="header_button" href="${(0,n.R)(this.hass,"/lovelace/")}" title="${this.hass.localize("ui.panel.lovelace.menu.help")}" target="_blank" rel="noreferrer" dir="${(0,l.Zu)(this.hass)}"> <ha-icon-button .path="${"M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"}" .label="${this.hass.localize("ui.common.help")}"></ha-icon-button> </a>`}"> <div> <p> ${this.hass.localize("ui.panel.lovelace.editor.save_config.para")} </p> ${"storage"===this._params.mode?a.dy` <p> ${this.hass.localize("ui.panel.lovelace.editor.save_config.para_sure")} </p> <ha-formfield .label="${this.hass.localize("ui.panel.lovelace.editor.save_config.empty_config")}" .dir="${(0,l.Zu)(this.hass)}"> <ha-switch .checked="${this._emptyConfig}" @change="${this._emptyConfigChanged}" dialogInitialFocus></ha-switch></ha-formfield> `:a.dy` <p> ${this.hass.localize("ui.panel.lovelace.editor.save_config.yaml_mode")} </p> <p> ${this.hass.localize("ui.panel.lovelace.editor.save_config.yaml_control")} </p> <p> ${this.hass.localize("ui.panel.lovelace.editor.save_config.yaml_config")} </p> <ha-yaml-editor .hass="${this.hass}" .defaultValue="${this._params.lovelace.config}" dialogInitialFocus></ha-yaml-editor> `} </div> ${"storage"===this._params.mode?a.dy` <mwc-button slot="primaryAction" @click="${this.closeDialog}"> ${this.hass.localize("ui.common.cancel")} </mwc-button> <mwc-button slot="primaryAction" ?disabled="${this._saving}" @click="${this._saveConfig}"> ${this._saving?a.dy`<ha-circular-progress active size="small" title="Saving"></ha-circular-progress>`:""} ${this.hass.localize("ui.panel.lovelace.editor.save_config.save")} </mwc-button> `:a.dy` <mwc-button slot="primaryAction" @click="${this.closeDialog}"> ${this.hass.localize("ui.panel.lovelace.editor.save_config.close")}</mwc-button> `} </ha-dialog> `:a.Ld}},{kind:"method",key:"_close",value:function(e){e&&e.stopPropagation(),this.closeDialog()}},{kind:"method",key:"_emptyConfigChanged",value:function(e){this._emptyConfig=e.target.checked}},{kind:"method",key:"_saveConfig",value:async function(){if(this.hass&&this._params){this._saving=!0;try{const e=this._params.lovelace;await e.saveConfig(this._emptyConfig?h:await(0,c.mQ)({config:e.config,hass:this.hass,narrow:this._params.narrow})),e.setEditMode(!0),this._saving=!1,this.closeDialog()}catch(e){alert(`Saving failed: ${e.message}`),this._saving=!1}}}},{kind:"get",static:!0,key:"styles",value:function(){return[s.yu]}}]}}),a.oi)}}]);
//# sourceMappingURL=78082-fFnzsHBTQHE.js.map