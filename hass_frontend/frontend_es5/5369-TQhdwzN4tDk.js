"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[5369],{32594:function(e,t,r){r.d(t,{U:function(){return i}});var i=function(e){return e.stopPropagation()}},31206:function(e,t,r){r.r(t),r.d(t,{HaCircularProgress:function(){return v}});var i,n=r(88962),a=r(33368),o=r(71650),s=r(82390),l=r(69205),d=r(70906),u=r(91808),c=r(88771),h=r(47838),p=r(30879),m=r(68144),f=r(79932),v=(0,u.Z)([(0,f.Mo)("ha-circular-progress")],(function(e,t){var r=function(t){(0,l.Z)(i,t);var r=(0,d.Z)(i);function i(){var t;(0,o.Z)(this,i);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return t=r.call.apply(r,[this].concat(a)),e((0,s.Z)(t)),t}return(0,a.Z)(i)}(t);return{F:r,d:[{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"active",value:function(){return!1}},{kind:"field",decorators:[(0,f.Cb)()],key:"alt",value:function(){return"Loading"}},{kind:"field",decorators:[(0,f.Cb)()],key:"size",value:function(){return"medium"}},{kind:"set",key:"density",value:function(e){}},{kind:"get",key:"density",value:function(){switch(this.size){case"tiny":return-8;case"small":return-5;case"medium":default:return 0;case"large":return 5}}},{kind:"set",key:"indeterminate",value:function(e){}},{kind:"get",key:"indeterminate",value:function(){return this.active}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,c.Z)((0,h.Z)(r),"styles",this),(0,m.iv)(i||(i=(0,n.Z)([":host{overflow:hidden}"])))]}}]}}),p.D)},40789:function(e,t,r){var i,n,a=r(88962),o=r(99312),s=r(53709),l=r(81043),d=r(33368),u=r(71650),c=r(82390),h=r(69205),p=r(70906),m=r(91808),f=r(88771),v=r(47838),_=r(68144),k=r(79932),y=r(14516),b=r(47181),g=r(32594),Z=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i||(i=Promise.all([r.e(43642),r.e(74561),r.e(92914)]).then(r.bind(r,92914))),e.abrupt("return",i);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=(r(81312),{key:"Mod-s",run:function(e){return(0,b.B)(e.dom,"editor-save"),!0}}),w=function(e){var t=document.createElement("ha-icon");return t.icon=e.label,t};(0,m.Z)([(0,k.Mo)("ha-code-editor")],(function(e,t){var i,m,x=function(t){(0,h.Z)(i,t);var r=(0,p.Z)(i);function i(){var t;(0,u.Z)(this,i);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=r.call.apply(r,[this].concat(a)),e((0,c.Z)(t)),t}return(0,d.Z)(i)}(t);return{F:x,d:[{kind:"field",key:"codemirror",value:void 0},{kind:"field",decorators:[(0,k.Cb)()],key:"mode",value:function(){return"yaml"}},{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,k.Cb)({type:Boolean})],key:"autofocus",value:function(){return!1}},{kind:"field",decorators:[(0,k.Cb)({type:Boolean})],key:"readOnly",value:function(){return!1}},{kind:"field",decorators:[(0,k.Cb)({type:Boolean,attribute:"autocomplete-entities"})],key:"autocompleteEntities",value:function(){return!1}},{kind:"field",decorators:[(0,k.Cb)({type:Boolean,attribute:"autocomplete-icons"})],key:"autocompleteIcons",value:function(){return!1}},{kind:"field",decorators:[(0,k.Cb)()],key:"error",value:function(){return!1}},{kind:"field",decorators:[(0,k.SB)()],key:"_value",value:function(){return""}},{kind:"field",key:"_loadedCodeMirror",value:void 0},{kind:"field",key:"_iconList",value:void 0},{kind:"set",key:"value",value:function(e){this._value=e}},{kind:"get",key:"value",value:function(){return this.codemirror?this.codemirror.state.doc.toString():this._value}},{kind:"get",key:"hasComments",value:function(){if(!this.codemirror||!this._loadedCodeMirror)return!1;var e=this._loadedCodeMirror.highlightingFor(this.codemirror.state,[this._loadedCodeMirror.tags.comment]);return!!this.shadowRoot.querySelector("span.".concat(e))}},{kind:"method",key:"connectedCallback",value:function(){(0,f.Z)((0,v.Z)(x.prototype),"connectedCallback",this).call(this),this.addEventListener("keydown",g.U),this.codemirror&&!1!==this.autofocus&&this.codemirror.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,f.Z)((0,v.Z)(x.prototype),"disconnectedCallback",this).call(this),this.removeEventListener("keydown",g.U)}},{kind:"method",key:"update",value:function(e){(0,f.Z)((0,v.Z)(x.prototype),"update",this).call(this,e),this.codemirror&&(e.has("mode")&&this.codemirror.dispatch({effects:this._loadedCodeMirror.langCompartment.reconfigure(this._mode)}),e.has("readOnly")&&this.codemirror.dispatch({effects:this._loadedCodeMirror.readonlyCompartment.reconfigure(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly))}),e.has("_value")&&this._value!==this.value&&this.codemirror.dispatch({changes:{from:0,to:this.codemirror.state.doc.length,insert:this._value}}),e.has("error")&&this.classList.toggle("error-state",this.error))}},{kind:"method",key:"firstUpdated",value:function(e){(0,f.Z)((0,v.Z)(x.prototype),"firstUpdated",this).call(this,e),this._load()}},{kind:"get",key:"_mode",value:function(){return this._loadedCodeMirror.langs[this.mode]}},{kind:"method",key:"_load",value:(m=(0,l.Z)((0,o.Z)().mark((function e(){var t,r,i=this;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z();case 2:this._loadedCodeMirror=e.sent,t=[this._loadedCodeMirror.lineNumbers(),this._loadedCodeMirror.EditorState.allowMultipleSelections.of(!0),this._loadedCodeMirror.history(),this._loadedCodeMirror.highlightSelectionMatches(),this._loadedCodeMirror.highlightActiveLine(),this._loadedCodeMirror.drawSelection(),this._loadedCodeMirror.rectangularSelection(),this._loadedCodeMirror.keymap.of([].concat((0,s.Z)(this._loadedCodeMirror.defaultKeymap),(0,s.Z)(this._loadedCodeMirror.searchKeymap),(0,s.Z)(this._loadedCodeMirror.historyKeymap),(0,s.Z)(this._loadedCodeMirror.tabKeyBindings),[C])),this._loadedCodeMirror.langCompartment.of(this._mode),this._loadedCodeMirror.haTheme,this._loadedCodeMirror.haSyntaxHighlighting,this._loadedCodeMirror.readonlyCompartment.of(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly)),this._loadedCodeMirror.EditorView.updateListener.of((function(e){return i._onUpdate(e)}))],this.readOnly||(r=[],this.autocompleteEntities&&this.hass&&r.push(this._entityCompletions.bind(this)),this.autocompleteIcons&&r.push(this._mdiCompletions.bind(this)),r.length>0&&t.push(this._loadedCodeMirror.autocompletion({override:r,maxRenderedOptions:10}))),this.codemirror=new this._loadedCodeMirror.EditorView({state:this._loadedCodeMirror.EditorState.create({doc:this._value,extensions:t}),root:this.shadowRoot,parent:this.shadowRoot});case 6:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)})},{kind:"field",key:"_getStates",value:function(){return(0,y.Z)((function(e){return e?Object.keys(e).map((function(t){return{type:"variable",label:t,detail:e[t].attributes.friendly_name,info:"State: ".concat(e[t].state)}})):[]}))}},{kind:"method",key:"_entityCompletions",value:function(e){var t=e.matchBefore(/[a-z_]{3,}\.\w*/);if(!t||t.from===t.to&&!e.explicit)return null;var r=this._getStates(this.hass.states);return r&&r.length?{from:Number(t.from),options:r,validFor:/^[a-z_]{3,}\.\w*$/}:null}},{kind:"field",key:"_getIconItems",value:function(){var e=this;return(0,l.Z)((0,o.Z)().mark((function t(){var i;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e._iconList){t.next=9;break}t.next=5;break;case 5:return t.next=7,r.e(71639).then(r.t.bind(r,71639,19));case 7:i=t.sent.default;case 8:e._iconList=i.map((function(e){return{type:"variable",label:"mdi:".concat(e.name),detail:e.keywords.join(", "),info:w}}));case 9:return t.abrupt("return",e._iconList);case 10:case"end":return t.stop()}}),t)})))}},{kind:"method",key:"_mdiCompletions",value:(i=(0,l.Z)((0,o.Z)().mark((function e(t){var r,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=t.matchBefore(/mdi:\S*/))&&(r.from!==r.to||t.explicit)){e.next=3;break}return e.abrupt("return",null);case 3:return e.next=5,this._getIconItems();case 5:return i=e.sent,e.abrupt("return",{from:Number(r.from),options:i,validFor:/^mdi:\S*$/});case 7:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{kind:"method",key:"_onUpdate",value:function(e){if(e.docChanged){var t=this.value;t!==this._value&&(this._value=t,(0,b.B)(this,"value-changed",{value:this._value}))}}},{kind:"get",static:!0,key:"styles",value:function(){return(0,_.iv)(n||(n=(0,a.Z)([":host(.error-state) .cm-gutters{border-color:var(--error-state-color,red)}"])))}}]}}),_.fl)},17324:function(e,t,r){r.d(t,{N:function(){return i}});var i=function(e,t,r){return e.subscribeMessage((function(e){return t(e)}),Object.assign({type:"render_template"},r))}},5369:function(e,t,r){r.r(t);var i,n,a,o,s,l,d,u,c,h,p=r(99312),m=r(81043),f=r(93359),v=r(88962),_=r(76775),k=r(33368),y=r(71650),b=r(82390),g=r(69205),Z=r(70906),C=r(91808),w=r(88771),x=r(47838),M=(r(53918),r(68144)),R=r(79932),S=r(83448),T=r(38346),z=(r(31206),r(40789),r(17324)),B=r(11654),j=r(27322),E='{## Imitate available variables: ##}\n{% set my_test_json = {\n  "temperature": 25,\n  "unit": "°C"\n} %}\n\nThe temperature is {{ my_test_json.temperature }} {{ my_test_json.unit }}.\n\n{% if is_state("sun.sun", "above_horizon") -%}\n  The sun rose {{ relative_time(states.sun.sun.last_changed) }} ago.\n{%- else -%}\n  The sun will rise at {{ as_timestamp(state_attr("sun.sun", "next_rising")) | timestamp_local }}.\n{%- endif %}\n\nFor loop example getting entity values in the weather domain:\n\n{% for state in states.weather -%}\n  {%- if loop.first %}The {% elif loop.last %} and the {% else %}, the {% endif -%}\n  {{ state.name | lower }} is {{state.state_with_unit}}\n{%- endfor %}.';(0,C.Z)([(0,R.Mo)("developer-tools-template")],(function(e,t){var r,C,L=function(t){(0,g.Z)(i,t);var r=(0,Z.Z)(i);function i(){var t;(0,y.Z)(this,i);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=r.call.apply(r,[this].concat(a)),e((0,b.Z)(t)),t}return(0,k.Z)(i)}(t);return{F:L,d:[{kind:"field",decorators:[(0,R.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,R.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,R.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,R.SB)()],key:"_rendering",value:function(){return!1}},{kind:"field",decorators:[(0,R.SB)()],key:"_templateResult",value:void 0},{kind:"field",decorators:[(0,R.SB)()],key:"_unsubRenderTemplate",value:void 0},{kind:"field",key:"_template",value:function(){return""}},{kind:"field",key:"_inited",value:function(){return!1}},{kind:"method",key:"connectedCallback",value:function(){(0,w.Z)((0,x.Z)(L.prototype),"connectedCallback",this).call(this),this._template&&!this._unsubRenderTemplate&&this._subscribeTemplate()}},{kind:"method",key:"disconnectedCallback",value:function(){this._unsubscribeTemplate()}},{kind:"method",key:"firstUpdated",value:function(){localStorage&&localStorage["panel-dev-template-template"]?this._template=localStorage["panel-dev-template-template"]:this._template=E,this._subscribeTemplate(),this._inited=!0}},{kind:"method",key:"render",value:function(){var e,t,r,h,p,m,k=this,y=(0,_.Z)(null===(e=this._templateResult)||void 0===e?void 0:e.result),b="object"===y?Array.isArray(null===(t=this._templateResult)||void 0===t?void 0:t.result)?"list":"dict":y;return(0,M.dy)(i||(i=(0,v.Z)([' <div class="content ','"> <div class="edit-pane"> <p> ',' </p> <ul> <li> <a href="https://jinja.palletsprojects.com/en/latest/templates/" target="_blank" rel="noreferrer">',' </a> </li> <li> <a href="','" target="_blank" rel="noreferrer"> ',"</a> </li> </ul> <p> ",' </p> <ha-code-editor mode="jinja2" .hass="','" .value="','" .error="','" autofocus autocomplete-entities autocomplete-icons @value-changed="','" dir="ltr"></ha-code-editor> <mwc-button @click="','"> ',' </mwc-button> </div> <div class="render-pane"> '," ",' <pre class="rendered ','">',"","</pre> "," "," </div> </div> "])),(0,S.$)({layout:!this.narrow,horizontal:!this.narrow}),this.hass.localize("ui.panel.developer-tools.tabs.templates.description"),this.hass.localize("ui.panel.developer-tools.tabs.templates.jinja_documentation"),(0,j.R)(this.hass,"/docs/configuration/templating/"),this.hass.localize("ui.panel.developer-tools.tabs.templates.template_extensions"),this.hass.localize("ui.panel.developer-tools.tabs.templates.editor"),this.hass,this._template,this._error,this._templateChanged,this._restoreDemo,this.hass.localize("ui.panel.developer-tools.tabs.templates.reset"),this._rendering?(0,M.dy)(n||(n=(0,v.Z)(['<ha-circular-progress class="render-spinner" active size="small"></ha-circular-progress>']))):"",this._templateResult?(0,M.dy)(a||(a=(0,v.Z)(["",": ",""])),this.hass.localize("ui.panel.developer-tools.tabs.templates.result_type"),b):"",(0,S.$)((0,f.Z)({error:Boolean(this._error)},b,b)),this._error,"object"===y?JSON.stringify(this._templateResult.result,null,2):null===(r=this._templateResult)||void 0===r?void 0:r.result,null!==(h=this._templateResult)&&void 0!==h&&h.listeners.time?(0,M.dy)(o||(o=(0,v.Z)([" <p> "," </p> "])),this.hass.localize("ui.panel.developer-tools.tabs.templates.time")):"",null!==(p=this._templateResult)&&void 0!==p&&p.listeners?this._templateResult.listeners.all?(0,M.dy)(s||(s=(0,v.Z)([' <p class="all_listeners"> '," </p> "])),this.hass.localize("ui.panel.developer-tools.tabs.templates.all_listeners")):this._templateResult.listeners.domains.length||this._templateResult.listeners.entities.length?(0,M.dy)(l||(l=(0,v.Z)([" <p> "," </p> <ul> "," "," </ul> "])),this.hass.localize("ui.panel.developer-tools.tabs.templates.listeners"),this._templateResult.listeners.domains.sort().map((function(e){return(0,M.dy)(d||(d=(0,v.Z)([" <li> <b>","</b>: "," </li> "])),k.hass.localize("ui.panel.developer-tools.tabs.templates.domain"),e)})),this._templateResult.listeners.entities.sort().map((function(e){return(0,M.dy)(u||(u=(0,v.Z)([" <li> <b>","</b>: "," </li> "])),k.hass.localize("ui.panel.developer-tools.tabs.templates.entity"),e)}))):null!==(m=this._templateResult)&&void 0!==m&&m.listeners.time?M.Ld:(0,M.dy)(c||(c=(0,v.Z)([' <span class="all_listeners"> '," </span>"])),this.hass.localize("ui.panel.developer-tools.tabs.templates.no_listeners")):"")}},{kind:"get",static:!0,key:"styles",value:function(){return[B.Qx,(0,M.iv)(h||(h=(0,v.Z)([":host{-ms-user-select:initial;-webkit-user-select:initial;-moz-user-select:initial}.content{padding:16px;padding:max(16px,env(safe-area-inset-top)) max(16px,env(safe-area-inset-right)) max(16px,env(safe-area-inset-bottom)) max(16px,env(safe-area-inset-left))}.edit-pane{margin-right:16px;margin-inline-start:initial;margin-inline-end:16px;direction:var(--direction)}.edit-pane a{color:var(--primary-color)}.horizontal .edit-pane{max-width:50%}.render-pane{position:relative;max-width:50%}.render-spinner{position:absolute;top:8px;right:8px}.rendered{@apply --paper-font-code1;clear:both;white-space:pre-wrap;background-color:var(--secondary-background-color);padding:8px;direction:ltr}.all_listeners{color:var(--warning-color)}.rendered.error{color:var(--error-color)}@media all and (max-width:870px){.render-pane{max-width:100%}}"])))]}},{kind:"field",key:"_debounceRender",value:function(){var e=this;return(0,T.D)((function(){e._subscribeTemplate(),e._storeTemplate()}),500,!1)}},{kind:"method",key:"_templateChanged",value:function(e){this._template=e.detail.value,this._error&&(this._error=void 0),this._debounceRender()}},{kind:"method",key:"_subscribeTemplate",value:(C=(0,m.Z)((0,p.Z)().mark((function e(){var t=this;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._rendering=!0,e.next=3,this._unsubscribeTemplate();case 3:return e.prev=3,this._unsubRenderTemplate=(0,z.N)(this.hass.connection,(function(e){t._templateResult=e,t._error=void 0}),{template:this._template,timeout:3,strict:!0}),e.next=7,this._unsubRenderTemplate;case 7:e.next=14;break;case 9:e.prev=9,e.t0=e.catch(3),this._error="Unknown error",e.t0.message&&(this._error=e.t0.message,this._templateResult=void 0),this._unsubRenderTemplate=void 0;case 14:return e.prev=14,this._rendering=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[3,9,14,17]])}))),function(){return C.apply(this,arguments)})},{kind:"method",key:"_unsubscribeTemplate",value:(r=(0,m.Z)((0,p.Z)().mark((function e(){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._unsubRenderTemplate){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,this._unsubRenderTemplate;case 5:(0,e.sent)(),this._unsubRenderTemplate=void 0,e.next=16;break;case 10:if(e.prev=10,e.t0=e.catch(2),"not_found"!==e.t0.code){e.next=15;break}e.next=16;break;case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,this,[[2,10]])}))),function(){return r.apply(this,arguments)})},{kind:"method",key:"_storeTemplate",value:function(){this._inited&&(localStorage["panel-dev-template-template"]=this._template)}},{kind:"method",key:"_restoreDemo",value:function(){this._template=E,this._subscribeTemplate(),delete localStorage["panel-dev-template-template"]}}]}}),M.oi)},27322:function(e,t,r){r.d(t,{R:function(){return i}});var i=function(e,t){return"https://www.iobroker.net/#".concat(e.language&&e.language.split("-")[0]||"en","/adapters/adapterref/iobroker.lovelace/README.md")}}}]);
//# sourceMappingURL=5369-TQhdwzN4tDk.js.map