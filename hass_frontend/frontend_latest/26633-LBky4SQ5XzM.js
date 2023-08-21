"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[26633],{32594:(e,i,t)=>{t.d(i,{U:()=>o});const o=e=>e.stopPropagation()},34620:(e,i,t)=>{t.d(i,{p:()=>r});var o=t(38768);const r=(e,i)=>{if(!(i instanceof o.DD))return{warnings:[i.message],errors:void 0};const t=[],r=[];for(const o of i.failures())if(void 0===o.value)t.push(e.localize("ui.errors.config.key_missing","key",o.path.join(".")));else if("never"===o.type)r.push(e.localize("ui.errors.config.key_not_expected","key",o.path.join(".")));else{if("union"===o.type)continue;"enums"===o.type?r.push(e.localize("ui.errors.config.key_wrong_type","key",o.path.join("."),"type_correct",o.message.replace("Expected ","").split(", ")[0],"type_wrong",JSON.stringify(o.value))):r.push(e.localize("ui.errors.config.key_wrong_type","key",o.path.join("."),"type_correct",o.refinement||o.type,"type_wrong",JSON.stringify(o.value)))}return{warnings:r,errors:t}}},31206:(e,i,t)=>{t.r(i),t.d(i,{HaCircularProgress:()=>l});var o=t(17463),r=t(34541),n=t(47838),s=t(30879),a=t(68144),d=t(79932);let l=(0,o.Z)([(0,d.Mo)("ha-circular-progress")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"active",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)()],key:"alt",value:()=>"Loading"},{kind:"field",decorators:[(0,d.Cb)()],key:"size",value:()=>"medium"},{kind:"set",key:"density",value:function(e){}},{kind:"get",key:"density",value:function(){switch(this.size){case"tiny":return-8;case"small":return-5;case"medium":default:return 0;case"large":return 5}}},{kind:"set",key:"indeterminate",value:function(e){}},{kind:"get",key:"indeterminate",value:function(){return this.active}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,r.Z)((0,n.Z)(t),"styles",this),a.iv`:host{overflow:hidden}`]}}]}}),s.D)},40789:(e,i,t)=>{var o=t(17463),r=t(34541),n=t(47838),s=t(68144),a=t(79932),d=t(14516),l=t(47181),h=t(32594);let c;t(81312);const u={key:"Mod-s",run:e=>((0,l.B)(e.dom,"editor-save"),!0)},f=e=>{const i=document.createElement("ha-icon");return i.icon=e.label,i};(0,o.Z)([(0,a.Mo)("ha-code-editor")],(function(e,i){class o extends i{constructor(...i){super(...i),e(this)}}return{F:o,d:[{kind:"field",key:"codemirror",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"mode",value:()=>"yaml"},{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"readOnly",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,attribute:"autocomplete-entities"})],key:"autocompleteEntities",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,attribute:"autocomplete-icons"})],key:"autocompleteIcons",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)()],key:"error",value:()=>!1},{kind:"field",decorators:[(0,a.SB)()],key:"_value",value:()=>""},{kind:"field",key:"_loadedCodeMirror",value:void 0},{kind:"field",key:"_iconList",value:void 0},{kind:"set",key:"value",value:function(e){this._value=e}},{kind:"get",key:"value",value:function(){return this.codemirror?this.codemirror.state.doc.toString():this._value}},{kind:"get",key:"hasComments",value:function(){if(!this.codemirror||!this._loadedCodeMirror)return!1;const e=this._loadedCodeMirror.highlightingFor(this.codemirror.state,[this._loadedCodeMirror.tags.comment]);return!!this.shadowRoot.querySelector(`span.${e}`)}},{kind:"method",key:"connectedCallback",value:function(){(0,r.Z)((0,n.Z)(o.prototype),"connectedCallback",this).call(this),this.addEventListener("keydown",h.U),this.codemirror&&!1!==this.autofocus&&this.codemirror.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,r.Z)((0,n.Z)(o.prototype),"disconnectedCallback",this).call(this),this.removeEventListener("keydown",h.U)}},{kind:"method",key:"update",value:function(e){(0,r.Z)((0,n.Z)(o.prototype),"update",this).call(this,e),this.codemirror&&(e.has("mode")&&this.codemirror.dispatch({effects:this._loadedCodeMirror.langCompartment.reconfigure(this._mode)}),e.has("readOnly")&&this.codemirror.dispatch({effects:this._loadedCodeMirror.readonlyCompartment.reconfigure(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly))}),e.has("_value")&&this._value!==this.value&&this.codemirror.dispatch({changes:{from:0,to:this.codemirror.state.doc.length,insert:this._value}}),e.has("error")&&this.classList.toggle("error-state",this.error))}},{kind:"method",key:"firstUpdated",value:function(e){(0,r.Z)((0,n.Z)(o.prototype),"firstUpdated",this).call(this,e),this._load()}},{kind:"get",key:"_mode",value:function(){return this._loadedCodeMirror.langs[this.mode]}},{kind:"method",key:"_load",value:async function(){this._loadedCodeMirror=await(async()=>(c||(c=Promise.all([t.e(43642),t.e(74561),t.e(92914)]).then(t.bind(t,92914))),c))();const e=[this._loadedCodeMirror.lineNumbers(),this._loadedCodeMirror.EditorState.allowMultipleSelections.of(!0),this._loadedCodeMirror.history(),this._loadedCodeMirror.highlightSelectionMatches(),this._loadedCodeMirror.highlightActiveLine(),this._loadedCodeMirror.drawSelection(),this._loadedCodeMirror.rectangularSelection(),this._loadedCodeMirror.keymap.of([...this._loadedCodeMirror.defaultKeymap,...this._loadedCodeMirror.searchKeymap,...this._loadedCodeMirror.historyKeymap,...this._loadedCodeMirror.tabKeyBindings,u]),this._loadedCodeMirror.langCompartment.of(this._mode),this._loadedCodeMirror.haTheme,this._loadedCodeMirror.haSyntaxHighlighting,this._loadedCodeMirror.readonlyCompartment.of(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly)),this._loadedCodeMirror.EditorView.updateListener.of((e=>this._onUpdate(e)))];if(!this.readOnly){const i=[];this.autocompleteEntities&&this.hass&&i.push(this._entityCompletions.bind(this)),this.autocompleteIcons&&i.push(this._mdiCompletions.bind(this)),i.length>0&&e.push(this._loadedCodeMirror.autocompletion({override:i,maxRenderedOptions:10}))}this.codemirror=new this._loadedCodeMirror.EditorView({state:this._loadedCodeMirror.EditorState.create({doc:this._value,extensions:e}),root:this.shadowRoot,parent:this.shadowRoot})}},{kind:"field",key:"_getStates",value:()=>(0,d.Z)((e=>{if(!e)return[];return Object.keys(e).map((i=>({type:"variable",label:i,detail:e[i].attributes.friendly_name,info:`State: ${e[i].state}`})))}))},{kind:"method",key:"_entityCompletions",value:function(e){const i=e.matchBefore(/[a-z_]{3,}\.\w*/);if(!i||i.from===i.to&&!e.explicit)return null;const t=this._getStates(this.hass.states);return t&&t.length?{from:Number(i.from),options:t,validFor:/^[a-z_]{3,}\.\w*$/}:null}},{kind:"field",key:"_getIconItems",value(){return async()=>{if(!this._iconList){let e;e=(await t.e(71639).then(t.t.bind(t,71639,19))).default,this._iconList=e.map((e=>({type:"variable",label:`mdi:${e.name}`,detail:e.keywords.join(", "),info:f})))}return this._iconList}}},{kind:"method",key:"_mdiCompletions",value:async function(e){const i=e.matchBefore(/mdi:\S*/);if(!i||i.from===i.to&&!e.explicit)return null;const t=await this._getIconItems();return{from:Number(i.from),options:t,validFor:/^mdi:\S*$/}}},{kind:"method",key:"_onUpdate",value:function(e){if(!e.docChanged)return;const i=this.value;i!==this._value&&(this._value=i,(0,l.B)(this,"value-changed",{value:this._value}))}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`:host(.error-state) .cm-gutters{border-color:var(--error-state-color,red)}`}}]}}),s.fl)},26633:(e,i,t)=>{t.d(i,{O:()=>_});var o=t(17463),r=t(34541),n=t(47838),s=(t(14271),t(77426)),a=t(68144),d=t(79932),l=t(47181),h=t(34620),c=t(36639),u=(t(31206),t(40789),t(9381),t(14516)),f=t(38768),m=t(58831),g=(t(68331),t(30232));const y={none:{},"entity-id":{},"last-changed":{},"last-updated":{},"last-triggered":{domains:["automation","script"]},position:{domains:["cover"]},"tilt-position":{domains:["cover"]},brightness:{domains:["light"]}};(0,o.Z)([(0,d.Mo)("hui-generic-entity-row-editor")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,f.hu)(e,g.K),this._config=e}},{kind:"field",key:"_schema",value:()=>(0,u.Z)(((e,i)=>{const t=(0,m.M)(e);return[{name:"entity",required:!0,selector:{entity:{}}},{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}},context:{icon_entity:"entity"}}]},{name:"secondary_info",selector:{select:{options:Object.keys(y).filter((e=>!("domains"in y[e])||"domains"in y[e]&&y[e].domains.includes(t))).map((e=>({value:e,label:i(`ui.panel.lovelace.editor.card.entities.secondary_info_values.${e}`)})))}}}]}))},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return a.Ld;const e=this._schema(this._config.entity,this.hass.localize);return a.dy` <ha-form .hass="${this.hass}" .data="${this._config}" .schema="${e}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> `}},{kind:"method",key:"_valueChanged",value:function(e){(0,l.B)(this,"config-changed",{config:e.detail.value})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>"secondary_info"===e.name?this.hass.localize(`ui.panel.lovelace.editor.card.entity-row.${e.name}`):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}]}}),a.oi);class v extends Error{constructor(e,i,t){super(e),this.warnings=void 0,this.errors=void 0,this.name="GUISupportError",this.warnings=i,this.errors=t}}let _=(0,o.Z)(null,(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"context",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_yaml",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_configElement",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_configElementType",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_guiMode",value:()=>!0},{kind:"field",decorators:[(0,d.SB)()],key:"_errors",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_warnings",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_guiSupported",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_loading",value:()=>!1},{kind:"field",decorators:[(0,d.IO)("ha-code-editor")],key:"_yamlEditor",value:void 0},{kind:"get",key:"yaml",value:function(){return this._yaml||(this._yaml=(0,s.$w)(this._config)),this._yaml||""}},{kind:"set",key:"yaml",value:function(e){this._yaml=e;try{this._config=(0,s.zD)(this.yaml),this._errors=void 0}catch(e){this._errors=[e.message]}this._setConfig()}},{kind:"get",key:"value",value:function(){return this._config}},{kind:"set",key:"value",value:function(e){this._config&&(0,c.v)(e,this._config)||(this._config=e,this._yaml=void 0,this._errors=void 0,this._setConfig())}},{kind:"method",key:"_setConfig",value:function(){var e;if(!this._errors)try{this._updateConfigElement()}catch(e){this._errors=[e.message]}(0,l.B)(this,"config-changed",{config:this.value,error:null===(e=this._errors)||void 0===e?void 0:e.join(", "),guiModeAvailable:!(this.hasWarning||this.hasError||!1===this._guiSupported)})}},{kind:"get",key:"hasWarning",value:function(){return void 0!==this._warnings&&this._warnings.length>0}},{kind:"get",key:"hasError",value:function(){return void 0!==this._errors&&this._errors.length>0}},{kind:"get",key:"GUImode",value:function(){return this._guiMode}},{kind:"set",key:"GUImode",value:function(e){this._guiMode=e,(0,l.B)(this,"GUImode-changed",{guiMode:e,guiModeAvailable:!(this.hasWarning||this.hasError||!1===this._guiSupported)})}},{kind:"method",key:"toggleMode",value:function(){this.GUImode=!this.GUImode}},{kind:"method",key:"focusYamlEditor",value:function(){var e,i;null!==(e=this._configElement)&&void 0!==e&&e.focusYamlEditor&&this._configElement.focusYamlEditor(),null!==(i=this._yamlEditor)&&void 0!==i&&i.codemirror&&this._yamlEditor.codemirror.focus()}},{kind:"method",key:"getConfigElement",value:async function(){}},{kind:"get",key:"configElementType",value:function(){return this.value?this.value.type:void 0}},{kind:"method",key:"render",value:function(){return a.dy` <div class="wrapper"> ${this.GUImode?a.dy` <div class="gui-editor"> ${this._loading?a.dy` <ha-circular-progress active alt="Loading" class="center margin-bot"></ha-circular-progress> `:this._configElement} </div> `:a.dy` <div class="yaml-editor"> <ha-code-editor mode="yaml" autofocus autocomplete-entities autocomplete-icons .hass="${this.hass}" .value="${this.yaml}" .error="${Boolean(this._errors)}" @value-changed="${this._handleYAMLChanged}" @keydown="${this._ignoreKeydown}" dir="ltr"></ha-code-editor> </div> `} ${!1===this._guiSupported&&this.configElementType?a.dy` <div class="info"> ${this.hass.localize("ui.errors.config.editor_not_available","type",this.configElementType)} </div> `:""} ${this.hasError?a.dy` <div class="error"> ${this.hass.localize("ui.errors.config.error_detected")}: <br> <ul> ${this._errors.map((e=>a.dy`<li>${e}</li>`))} </ul> </div> `:""} ${this.hasWarning?a.dy` <ha-alert alert-type="warning" .title="${this.hass.localize("ui.errors.config.editor_not_supported")}:"> ${this._warnings.length>0&&void 0!==this._warnings[0]?a.dy` <ul> ${this._warnings.map((e=>a.dy`<li>${e}</li>`))} </ul>`:""} ${this.hass.localize("ui.errors.config.edit_in_yaml_supported")} </ha-alert> `:""} </div> `}},{kind:"method",key:"updated",value:function(e){(0,r.Z)((0,n.Z)(t.prototype),"updated",this).call(this,e),this._configElement&&e.has("hass")&&(this._configElement.hass=this.hass),this._configElement&&"lovelace"in this._configElement&&e.has("lovelace")&&(this._configElement.lovelace=this.lovelace),this._configElement&&e.has("context")&&(this._configElement.context=this.context)}},{kind:"method",key:"_handleUIConfigChanged",value:function(e){e.stopPropagation();const i=e.detail.config;Object.keys(i).forEach((e=>{void 0===i[e]&&delete i[e]})),this.value=i}},{kind:"method",key:"_handleYAMLChanged",value:function(e){e.stopPropagation();const i=e.detail.value;i!==this.yaml&&(this.yaml=i)}},{kind:"method",key:"_updateConfigElement",value:async function(){if(!this.value)return;let e;try{if(this._errors=void 0,this._warnings=void 0,this._configElementType!==this.configElementType){if(this._guiSupported=void 0,this._configElement=void 0,!this.configElementType)throw new Error(this.hass.localize("ui.errors.config.no_type_provided"));this._configElementType=this.configElementType,this._loading=!0,e=await this.getConfigElement(),e&&(e.hass=this.hass,"lovelace"in e&&(e.lovelace=this.lovelace),e.context=this.context,e.addEventListener("config-changed",(e=>this._handleUIConfigChanged(e))),this._configElement=e,this._guiSupported=!0)}if(this._configElement)try{this._configElement.setConfig(this.value)}catch(e){const i=(0,h.p)(this.hass,e);throw new v("Config is not supported",i.warnings,i.errors)}else this._guiSupported=!1,this.GUImode=!1}catch(e){var i;if(e instanceof v)this._warnings=null!==(i=e.warnings)&&void 0!==i?i:[e.message],this._errors=e.errors||void 0;else this._errors=[e.message];this.GUImode=!1}finally{this._loading=!1}}},{kind:"method",key:"_ignoreKeydown",value:function(e){e.stopPropagation()}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{display:flex}.wrapper{width:100%}.gui-editor,.yaml-editor{padding:8px 0px}ha-code-editor{--code-mirror-max-height:calc(100vh - 245px)}.error,.info,.warning{word-break:break-word;margin-top:8px}.error{color:var(--error-color)}.warning{color:var(--warning-color)}.error ul,.warning ul{margin:4px 0}.error li,.warning li{white-space:pre-wrap}ha-circular-progress{display:block;margin:auto}`}}]}}),a.oi)}}]);
//# sourceMappingURL=26633-LBky4SQ5XzM.js.map