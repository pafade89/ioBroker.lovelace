export const id=95912;export const ids=[95912];export const modules={32594:(e,t,o)=>{o.d(t,{U:()=>i});const i=e=>e.stopPropagation()},40789:(e,t,o)=>{var i=o(17463),r=o(34541),a=o(47838),d=o(68144),s=o(79932),l=o(14516),n=o(47181),h=o(32594);let c;o(81312);const u={key:"Mod-s",run:e=>((0,n.B)(e.dom,"editor-save"),!0)},v=e=>{const t=document.createElement("ha-icon");return t.icon=e.label,t};(0,i.Z)([(0,s.Mo)("ha-code-editor")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:"codemirror",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"mode",value:()=>"yaml"},{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"readOnly",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"autocomplete-entities"})],key:"autocompleteEntities",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"autocomplete-icons"})],key:"autocompleteIcons",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"error",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_value",value:()=>""},{kind:"field",key:"_loadedCodeMirror",value:void 0},{kind:"field",key:"_iconList",value:void 0},{kind:"set",key:"value",value:function(e){this._value=e}},{kind:"get",key:"value",value:function(){return this.codemirror?this.codemirror.state.doc.toString():this._value}},{kind:"get",key:"hasComments",value:function(){if(!this.codemirror||!this._loadedCodeMirror)return!1;const e=this._loadedCodeMirror.highlightingFor(this.codemirror.state,[this._loadedCodeMirror.tags.comment]);return!!this.renderRoot.querySelector(`span.${e}`)}},{kind:"method",key:"connectedCallback",value:function(){(0,r.Z)((0,a.Z)(i.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this.requestUpdate(),this.addEventListener("keydown",h.U),this.codemirror&&!1!==this.autofocus&&this.codemirror.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,r.Z)((0,a.Z)(i.prototype),"disconnectedCallback",this).call(this),this.removeEventListener("keydown",h.U),this.updateComplete.then((()=>{this.codemirror.destroy(),delete this.codemirror}))}},{kind:"method",key:"scheduleUpdate",value:async function(){var e;null!==(e=this._loadedCodeMirror)&&void 0!==e||(this._loadedCodeMirror=await(async()=>{var e;return null!==(e=c)&&void 0!==e||(c=await Promise.all([o.e(43642),o.e(74561),o.e(92914)]).then(o.bind(o,92914))),c})()),(0,r.Z)((0,a.Z)(i.prototype),"scheduleUpdate",this).call(this)}},{kind:"method",key:"update",value:function(e){if((0,r.Z)((0,a.Z)(i.prototype),"update",this).call(this,e),!this.codemirror)return void this._createCodeMirror();const t=[];e.has("mode")&&t.push({effects:this._loadedCodeMirror.langCompartment.reconfigure(this._mode)}),e.has("readOnly")&&t.push({effects:this._loadedCodeMirror.readonlyCompartment.reconfigure(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly))}),e.has("_value")&&this._value!==this.value&&t.push({changes:{from:0,to:this.codemirror.state.doc.length,insert:this._value}}),t.length>0&&this.codemirror.dispatch(...t),e.has("error")&&this.classList.toggle("error-state",this.error)}},{kind:"get",key:"_mode",value:function(){return this._loadedCodeMirror.langs[this.mode]}},{kind:"method",key:"_createCodeMirror",value:function(){if(!this._loadedCodeMirror)throw new Error("Cannot create editor before CodeMirror is loaded");const e=[this._loadedCodeMirror.lineNumbers(),this._loadedCodeMirror.history(),this._loadedCodeMirror.drawSelection(),this._loadedCodeMirror.EditorState.allowMultipleSelections.of(!0),this._loadedCodeMirror.rectangularSelection(),this._loadedCodeMirror.crosshairCursor(),this._loadedCodeMirror.highlightSelectionMatches(),this._loadedCodeMirror.highlightActiveLine(),this._loadedCodeMirror.keymap.of([...this._loadedCodeMirror.defaultKeymap,...this._loadedCodeMirror.searchKeymap,...this._loadedCodeMirror.historyKeymap,...this._loadedCodeMirror.tabKeyBindings,u]),this._loadedCodeMirror.langCompartment.of(this._mode),this._loadedCodeMirror.haTheme,this._loadedCodeMirror.haSyntaxHighlighting,this._loadedCodeMirror.readonlyCompartment.of(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly)),this._loadedCodeMirror.EditorView.updateListener.of(this._onUpdate)];if(!this.readOnly){const t=[];this.autocompleteEntities&&this.hass&&t.push(this._entityCompletions.bind(this)),this.autocompleteIcons&&t.push(this._mdiCompletions.bind(this)),t.length>0&&e.push(this._loadedCodeMirror.autocompletion({override:t,maxRenderedOptions:10}))}this.codemirror=new this._loadedCodeMirror.EditorView({state:this._loadedCodeMirror.EditorState.create({doc:this._value,extensions:e}),parent:this.renderRoot})}},{kind:"field",key:"_getStates",value:()=>(0,l.Z)((e=>{if(!e)return[];return Object.keys(e).map((t=>({type:"variable",label:t,detail:e[t].attributes.friendly_name,info:`State: ${e[t].state}`})))}))},{kind:"method",key:"_entityCompletions",value:function(e){const t=e.matchBefore(/[a-z_]{3,}\.\w*/);if(!t||t.from===t.to&&!e.explicit)return null;const o=this._getStates(this.hass.states);return o&&o.length?{from:Number(t.from),options:o,validFor:/^[a-z_]{3,}\.\w*$/}:null}},{kind:"field",key:"_getIconItems",value(){return async()=>{if(!this._iconList){let e;e=(await o.e(71639).then(o.t.bind(o,71639,19))).default,this._iconList=e.map((e=>({type:"variable",label:`mdi:${e.name}`,detail:e.keywords.join(", "),info:v})))}return this._iconList}}},{kind:"method",key:"_mdiCompletions",value:async function(e){const t=e.matchBefore(/mdi:\S*/);if(!t||t.from===t.to&&!e.explicit)return null;const o=await this._getIconItems();return{from:Number(t.from),options:o,validFor:/^mdi:\S*$/}}},{kind:"field",key:"_onUpdate",value(){return e=>{e.docChanged&&(this._value=e.state.doc.toString(),(0,n.B)(this,"value-changed",{value:this._value}))}}},{kind:"get",static:!0,key:"styles",value:function(){return d.iv`:host(.error-state) .cm-gutters{border-color:var(--error-state-color,red)}`}}]}}),d.fl)},36226:(e,t,o)=>{var i=o(17463),r=o(73968),a=o(71711),d=o(68144),s=o(79932);(0,i.Z)([(0,s.Mo)("ha-top-app-bar-fixed")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[a.W,d.iv`.mdc-top-app-bar__row{height:var(--header-height);border-bottom:var(--app-header-border-bottom)}.mdc-top-app-bar--fixed-adjust{padding-top:var(--header-height)}.mdc-top-app-bar{--mdc-typography-headline6-font-weight:400;color:var(--app-header-text-color,var(--mdc-theme-on-primary,#fff));background-color:var(--app-header-background-color,var(--mdc-theme-primary))}`]}]}}),r.s)},95912:(e,t,o)=>{o.r(t);var i=o(17463),r=o(34541),a=o(47838),d=o(43642),s=(o(14271),o(77426)),l=o(68144),n=o(79932),h=o(83448),c=o(38768),u=o(36639),v=(o(31206),o(40789),o(10983),o(26765)),m=o(11654),p=o(81796);o(36226);const f=(0,c.dt)({title:(0,c.jt)((0,c.Z_)()),views:(0,c.IX)((0,c.Ry)())});(0,i.Z)([(0,n.Mo)("hui-editor")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"closeEditor",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_saving",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_changed",value:void 0},{kind:"method",key:"render",value:function(){return l.dy` <ha-top-app-bar-fixed> <ha-icon-button slot="navigationIcon" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" @click="${this._closeEditor}" .label="${this.hass.localize("ui.common.close")}"></ha-icon-button> <div slot="title"> ${this.hass.localize("ui.panel.lovelace.editor.raw_editor.header")} </div> <div slot="actionItems" class="save-button ${(0,h.$)({saved:!1===this._saving||!0===this._changed})}"> ${this._changed?this.hass.localize("ui.panel.lovelace.editor.raw_editor.unsaved_changes"):this.hass.localize("ui.panel.lovelace.editor.raw_editor.saved")} </div> <mwc-button raised slot="actionItems" @click="${this._handleSave}" .disabled="${!this._changed}">${this.hass.localize("ui.panel.lovelace.editor.raw_editor.save")}</mwc-button> <div class="content"> <ha-code-editor mode="yaml" autofocus autocomplete-entities autocomplete-icons .hass="${this.hass}" @value-changed="${this._yamlChanged}" @editor-save="${this._handleSave}" dir="ltr"> </ha-code-editor> </div> </ha-top-app-bar-fixed> `}},{kind:"method",key:"firstUpdated",value:function(e){(0,r.Z)((0,a.Z)(o.prototype),"firstUpdated",this).call(this,e),this.yamlEditor.value=(0,s.$w)(this.lovelace.rawConfig)}},{kind:"method",key:"updated",value:function(e){const t=e.get("lovelace");!this._saving&&t&&this.lovelace&&t.rawConfig!==this.lovelace.rawConfig&&!(0,u.v)(t.rawConfig,this.lovelace.rawConfig)&&(0,p.C)(this,{message:this.hass.localize("ui.panel.lovelace.editor.raw_editor.lovelace_changed"),action:{action:()=>{this.yamlEditor.value=(0,s.$w)(this.lovelace.rawConfig)},text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.reload")},duration:0,dismissable:!1})}},{kind:"get",static:!0,key:"styles",value:function(){return[m.Qx,l.iv`:host{--code-mirror-height:100%;--app-header-background-color:var(
            --app-header-edit-background-color,
            #455a64
          );--app-header-text-color:var(--app-header-edit-text-color, #fff)}mwc-button[disabled]{background-color:var(--mdc-theme-on-primary);border-radius:4px}.content{height:calc(100vh - var(--header-height))}.comments{font-size:16px}.save-button{opacity:0;font-size:14px;padding:0px 10px}.saved{opacity:1}`]}},{kind:"method",key:"_yamlChanged",value:function(){this._changed=(0,d.of)(this.yamlEditor.codemirror.state)>0,this._changed&&!window.onbeforeunload?window.onbeforeunload=()=>!0:!this._changed&&window.onbeforeunload&&(window.onbeforeunload=null)}},{kind:"method",key:"_closeEditor",value:async function(){this._changed&&!await(0,v.g7)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_unsaved_changes"),dismissText:this.hass.localize("ui.common.stay"),confirmText:this.hass.localize("ui.common.leave")})||(window.onbeforeunload=null,this.closeEditor&&this.closeEditor())}},{kind:"method",key:"_removeConfig",value:async function(){try{await this.lovelace.deleteConfig()}catch(e){(0,v.Ys)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_remove","error",e)})}window.onbeforeunload=null,this.closeEditor&&this.closeEditor()}},{kind:"method",key:"_handleSave",value:async function(){this._saving=!0;const e=this.yamlEditor.value;if(!e)return void(0,v.g7)(this,{title:this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_remove_config_title"),text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_remove_config_text"),confirmText:this.hass.localize("ui.common.remove"),dismissText:this.hass.localize("ui.common.cancel"),confirm:()=>this._removeConfig()});if(this.yamlEditor.hasComments&&!confirm(this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_unsaved_comments")))return;let t;try{t=(0,s.zD)(e)}catch(e){return(0,v.Ys)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_parse_yaml","error",e)}),void(this._saving=!1)}try{(0,c.hu)(t,f)}catch(e){return void(0,v.Ys)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_invalid_config","error",e)})}t.resources&&(0,v.Ys)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.resources_moved")});try{await this.lovelace.saveConfig(t)}catch(e){(0,v.Ys)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_save_yaml","error",e)})}window.onbeforeunload=null,this._changed=!1,this._saving=!1}},{kind:"get",key:"yamlEditor",value:function(){return this.shadowRoot.querySelector("ha-code-editor")}}]}}),l.oi)}};
//# sourceMappingURL=95912-SM8UXxLsW3k.js.map