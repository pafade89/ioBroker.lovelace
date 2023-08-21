"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[95912],{32594:function(e,t,r){r.d(t,{U:function(){return o}});var o=function(e){return e.stopPropagation()}},40789:function(e,t,r){var o,i,a=r(88962),n=r(99312),s=r(53709),d=r(81043),l=r(33368),c=r(71650),h=r(82390),u=r(69205),v=r(70906),f=r(91808),p=r(88771),m=r(47838),_=r(68144),k=r(79932),y=r(14516),g=r(47181),b=r(32594),w=function(){var e=(0,d.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o||(o=Promise.all([r.e(43642),r.e(74561),r.e(92914)]).then(r.bind(r,92914))),e.abrupt("return",o);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=(r(81312),{key:"Mod-s",run:function(e){return(0,g.B)(e.dom,"editor-save"),!0}}),Z=function(e){var t=document.createElement("ha-icon");return t.icon=e.label,t};(0,f.Z)([(0,k.Mo)("ha-code-editor")],(function(e,t){var o,f,x=function(t){(0,u.Z)(o,t);var r=(0,v.Z)(o);function o(){var t;(0,c.Z)(this,o);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return t=r.call.apply(r,[this].concat(a)),e((0,h.Z)(t)),t}return(0,l.Z)(o)}(t);return{F:x,d:[{kind:"field",key:"codemirror",value:void 0},{kind:"field",decorators:[(0,k.Cb)()],key:"mode",value:function(){return"yaml"}},{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,k.Cb)({type:Boolean})],key:"autofocus",value:function(){return!1}},{kind:"field",decorators:[(0,k.Cb)({type:Boolean})],key:"readOnly",value:function(){return!1}},{kind:"field",decorators:[(0,k.Cb)({type:Boolean,attribute:"autocomplete-entities"})],key:"autocompleteEntities",value:function(){return!1}},{kind:"field",decorators:[(0,k.Cb)({type:Boolean,attribute:"autocomplete-icons"})],key:"autocompleteIcons",value:function(){return!1}},{kind:"field",decorators:[(0,k.Cb)()],key:"error",value:function(){return!1}},{kind:"field",decorators:[(0,k.SB)()],key:"_value",value:function(){return""}},{kind:"field",key:"_loadedCodeMirror",value:void 0},{kind:"field",key:"_iconList",value:void 0},{kind:"set",key:"value",value:function(e){this._value=e}},{kind:"get",key:"value",value:function(){return this.codemirror?this.codemirror.state.doc.toString():this._value}},{kind:"get",key:"hasComments",value:function(){if(!this.codemirror||!this._loadedCodeMirror)return!1;var e=this._loadedCodeMirror.highlightingFor(this.codemirror.state,[this._loadedCodeMirror.tags.comment]);return!!this.shadowRoot.querySelector("span.".concat(e))}},{kind:"method",key:"connectedCallback",value:function(){(0,p.Z)((0,m.Z)(x.prototype),"connectedCallback",this).call(this),this.addEventListener("keydown",b.U),this.codemirror&&!1!==this.autofocus&&this.codemirror.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,p.Z)((0,m.Z)(x.prototype),"disconnectedCallback",this).call(this),this.removeEventListener("keydown",b.U)}},{kind:"method",key:"update",value:function(e){(0,p.Z)((0,m.Z)(x.prototype),"update",this).call(this,e),this.codemirror&&(e.has("mode")&&this.codemirror.dispatch({effects:this._loadedCodeMirror.langCompartment.reconfigure(this._mode)}),e.has("readOnly")&&this.codemirror.dispatch({effects:this._loadedCodeMirror.readonlyCompartment.reconfigure(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly))}),e.has("_value")&&this._value!==this.value&&this.codemirror.dispatch({changes:{from:0,to:this.codemirror.state.doc.length,insert:this._value}}),e.has("error")&&this.classList.toggle("error-state",this.error))}},{kind:"method",key:"firstUpdated",value:function(e){(0,p.Z)((0,m.Z)(x.prototype),"firstUpdated",this).call(this,e),this._load()}},{kind:"get",key:"_mode",value:function(){return this._loadedCodeMirror.langs[this.mode]}},{kind:"method",key:"_load",value:(f=(0,d.Z)((0,n.Z)().mark((function e(){var t,r,o=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:this._loadedCodeMirror=e.sent,t=[this._loadedCodeMirror.lineNumbers(),this._loadedCodeMirror.EditorState.allowMultipleSelections.of(!0),this._loadedCodeMirror.history(),this._loadedCodeMirror.highlightSelectionMatches(),this._loadedCodeMirror.highlightActiveLine(),this._loadedCodeMirror.drawSelection(),this._loadedCodeMirror.rectangularSelection(),this._loadedCodeMirror.keymap.of([].concat((0,s.Z)(this._loadedCodeMirror.defaultKeymap),(0,s.Z)(this._loadedCodeMirror.searchKeymap),(0,s.Z)(this._loadedCodeMirror.historyKeymap),(0,s.Z)(this._loadedCodeMirror.tabKeyBindings),[C])),this._loadedCodeMirror.langCompartment.of(this._mode),this._loadedCodeMirror.haTheme,this._loadedCodeMirror.haSyntaxHighlighting,this._loadedCodeMirror.readonlyCompartment.of(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly)),this._loadedCodeMirror.EditorView.updateListener.of((function(e){return o._onUpdate(e)}))],this.readOnly||(r=[],this.autocompleteEntities&&this.hass&&r.push(this._entityCompletions.bind(this)),this.autocompleteIcons&&r.push(this._mdiCompletions.bind(this)),r.length>0&&t.push(this._loadedCodeMirror.autocompletion({override:r,maxRenderedOptions:10}))),this.codemirror=new this._loadedCodeMirror.EditorView({state:this._loadedCodeMirror.EditorState.create({doc:this._value,extensions:t}),root:this.shadowRoot,parent:this.shadowRoot});case 6:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})},{kind:"field",key:"_getStates",value:function(){return(0,y.Z)((function(e){return e?Object.keys(e).map((function(t){return{type:"variable",label:t,detail:e[t].attributes.friendly_name,info:"State: ".concat(e[t].state)}})):[]}))}},{kind:"method",key:"_entityCompletions",value:function(e){var t=e.matchBefore(/[a-z_]{3,}\.\w*/);if(!t||t.from===t.to&&!e.explicit)return null;var r=this._getStates(this.hass.states);return r&&r.length?{from:Number(t.from),options:r,validFor:/^[a-z_]{3,}\.\w*$/}:null}},{kind:"field",key:"_getIconItems",value:function(){var e=this;return(0,d.Z)((0,n.Z)().mark((function t(){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e._iconList){t.next=9;break}t.next=5;break;case 5:return t.next=7,r.e(71639).then(r.t.bind(r,71639,19));case 7:o=t.sent.default;case 8:e._iconList=o.map((function(e){return{type:"variable",label:"mdi:".concat(e.name),detail:e.keywords.join(", "),info:Z}}));case 9:return t.abrupt("return",e._iconList);case 10:case"end":return t.stop()}}),t)})))}},{kind:"method",key:"_mdiCompletions",value:(o=(0,d.Z)((0,n.Z)().mark((function e(t){var r,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=t.matchBefore(/mdi:\S*/))&&(r.from!==r.to||t.explicit)){e.next=3;break}return e.abrupt("return",null);case 3:return e.next=5,this._getIconItems();case 5:return o=e.sent,e.abrupt("return",{from:Number(r.from),options:o,validFor:/^mdi:\S*$/});case 7:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{kind:"method",key:"_onUpdate",value:function(e){if(e.docChanged){var t=this.value;t!==this._value&&(this._value=t,(0,g.B)(this,"value-changed",{value:this._value}))}}},{kind:"get",static:!0,key:"styles",value:function(){return(0,_.iv)(i||(i=(0,a.Z)([":host(.error-state) .cm-gutters{border-color:var(--error-state-color,red)}"])))}}]}}),_.fl)},36226:function(e,t,r){var o,i=r(88962),a=r(33368),n=r(71650),s=r(82390),d=r(69205),l=r(70906),c=r(91808),h=r(73968),u=r(71711),v=r(68144),f=r(79932);(0,c.Z)([(0,f.Mo)("ha-top-app-bar-fixed")],(function(e,t){var r=function(t){(0,d.Z)(o,t);var r=(0,l.Z)(o);function o(){var t;(0,n.Z)(this,o);for(var i=arguments.length,a=new Array(i),d=0;d<i;d++)a[d]=arguments[d];return t=r.call.apply(r,[this].concat(a)),e((0,s.Z)(t)),t}return(0,a.Z)(o)}(t);return{F:r,d:[{kind:"field",static:!0,key:"styles",value:function(){return[u.W,(0,v.iv)(o||(o=(0,i.Z)([".mdc-top-app-bar__row{height:var(--header-height);border-bottom:var(--app-header-border-bottom)}.mdc-top-app-bar--fixed-adjust{padding-top:var(--header-height)}.mdc-top-app-bar{--mdc-typography-headline6-font-weight:400;color:var(--app-header-text-color,var(--mdc-theme-on-primary,#fff));background-color:var(--app-header-background-color,var(--mdc-theme-primary))}"])))]}}]}}),h.s)},95912:function(e,t,r){r.r(t);var o,i,a=r(99312),n=r(81043),s=r(88962),d=r(33368),l=r(71650),c=r(82390),h=r(69205),u=r(70906),v=r(91808),f=r(88771),p=r(47838),m=r(43642),_=(r(53918),r(77426)),k=r(68144),y=r(79932),g=r(83448),b=r(93088),w=r(36639),C=(r(31206),r(40789),r(10983),r(26765)),Z=r(11654),x=r(81796),M=(r(36226),(0,b.dt)({title:(0,b.jt)((0,b.Z_)()),views:(0,b.IX)((0,b.Ry)())}));(0,v.Z)([(0,y.Mo)("hui-editor")],(function(e,t){var r,v,z,E=function(t){(0,h.Z)(o,t);var r=(0,u.Z)(o);function o(){var t;(0,l.Z)(this,o);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return t=r.call.apply(r,[this].concat(a)),e((0,c.Z)(t)),t}return(0,d.Z)(o)}(t);return{F:E,d:[{kind:"field",decorators:[(0,y.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,y.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,y.Cb)()],key:"closeEditor",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_saving",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_changed",value:void 0},{kind:"method",key:"render",value:function(){return(0,k.dy)(o||(o=(0,s.Z)([' <ha-top-app-bar-fixed> <ha-icon-button slot="navigationIcon" .path="','" @click="','" .label="','"></ha-icon-button> <div slot="title"> ',' </div> <div slot="actionItems" class="save-button ','"> ',' </div> <mwc-button raised slot="actionItems" @click="','" .disabled="','">','</mwc-button> <div class="content"> <ha-code-editor mode="yaml" autofocus autocomplete-entities autocomplete-icons .hass="','" @value-changed="','" @editor-save="','" dir="ltr"> </ha-code-editor> </div> </ha-top-app-bar-fixed> '])),"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",this._closeEditor,this.hass.localize("ui.common.close"),this.hass.localize("ui.panel.lovelace.editor.raw_editor.header"),(0,g.$)({saved:!1===this._saving||!0===this._changed}),this._changed?this.hass.localize("ui.panel.lovelace.editor.raw_editor.unsaved_changes"):this.hass.localize("ui.panel.lovelace.editor.raw_editor.saved"),this._handleSave,!this._changed,this.hass.localize("ui.panel.lovelace.editor.raw_editor.save"),this.hass,this._yamlChanged,this._handleSave)}},{kind:"method",key:"firstUpdated",value:function(e){(0,f.Z)((0,p.Z)(E.prototype),"firstUpdated",this).call(this,e),this.yamlEditor.value=(0,_.$w)(this.lovelace.rawConfig)}},{kind:"method",key:"updated",value:function(e){var t=this,r=e.get("lovelace");!this._saving&&r&&this.lovelace&&r.rawConfig!==this.lovelace.rawConfig&&!(0,w.v)(r.rawConfig,this.lovelace.rawConfig)&&(0,x.C)(this,{message:this.hass.localize("ui.panel.lovelace.editor.raw_editor.lovelace_changed"),action:{action:function(){t.yamlEditor.value=(0,_.$w)(t.lovelace.rawConfig)},text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.reload")},duration:0,dismissable:!1})}},{kind:"get",static:!0,key:"styles",value:function(){return[Z.Qx,(0,k.iv)(i||(i=(0,s.Z)([":host{--code-mirror-height:100%;--app-header-background-color:var(\n            --app-header-edit-background-color,\n            #455a64\n          );--app-header-text-color:var(--app-header-edit-text-color, #fff)}mwc-button[disabled]{background-color:var(--mdc-theme-on-primary);border-radius:4px}.content{height:calc(100vh - var(--header-height))}.comments{font-size:16px}.save-button{opacity:0;font-size:14px;padding:0px 10px}.saved{opacity:1}"])))]}},{kind:"method",key:"_yamlChanged",value:function(){this._changed=(0,m.of)(this.yamlEditor.codemirror.state)>0,this._changed&&!window.onbeforeunload?window.onbeforeunload=function(){return!0}:!this._changed&&window.onbeforeunload&&(window.onbeforeunload=null)}},{kind:"method",key:"_closeEditor",value:(z=(0,n.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this._changed,!e.t0){e.next=5;break}return e.next=4,(0,C.g7)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_unsaved_changes"),dismissText:this.hass.localize("ui.common.stay"),confirmText:this.hass.localize("ui.common.leave")});case 4:e.t0=!e.sent;case 5:if(!e.t0){e.next=7;break}return e.abrupt("return");case 7:window.onbeforeunload=null,this.closeEditor&&this.closeEditor();case 9:case"end":return e.stop()}}),e,this)}))),function(){return z.apply(this,arguments)})},{kind:"method",key:"_removeConfig",value:(v=(0,n.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.lovelace.deleteConfig();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),(0,C.Ys)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_remove","error",e.t0)});case 8:window.onbeforeunload=null,this.closeEditor&&this.closeEditor();case 10:case"end":return e.stop()}}),e,this,[[0,5]])}))),function(){return v.apply(this,arguments)})},{kind:"method",key:"_handleSave",value:(r=(0,n.Z)((0,a.Z)().mark((function e(){var t,r,o=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._saving=!0,t=this.yamlEditor.value){e.next=5;break}return(0,C.g7)(this,{title:this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_remove_config_title"),text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_remove_config_text"),confirmText:this.hass.localize("ui.common.remove"),dismissText:this.hass.localize("ui.common.cancel"),confirm:function(){return o._removeConfig()}}),e.abrupt("return");case 5:if(!this.yamlEditor.hasComments){e.next=8;break}if(confirm(this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_unsaved_comments"))){e.next=8;break}return e.abrupt("return");case 8:e.prev=8,r=(0,_.zD)(t),e.next=17;break;case 12:return e.prev=12,e.t0=e.catch(8),(0,C.Ys)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_parse_yaml","error",e.t0)}),this._saving=!1,e.abrupt("return");case 17:e.prev=17,(0,b.hu)(r,M),e.next=25;break;case 21:return e.prev=21,e.t1=e.catch(17),(0,C.Ys)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_invalid_config","error",e.t1)}),e.abrupt("return");case 25:return r.resources&&(0,C.Ys)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.resources_moved")}),e.prev=26,e.next=29,this.lovelace.saveConfig(r);case 29:e.next=34;break;case 31:e.prev=31,e.t2=e.catch(26),(0,C.Ys)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_save_yaml","error",e.t2)});case 34:window.onbeforeunload=null,this._changed=!1,this._saving=!1;case 37:case"end":return e.stop()}}),e,this,[[8,12],[17,21],[26,31]])}))),function(){return r.apply(this,arguments)})},{kind:"get",key:"yamlEditor",value:function(){return this.shadowRoot.querySelector("ha-code-editor")}}]}}),k.oi)}}]);
//# sourceMappingURL=95912-iW4eDJUmNT4.js.map