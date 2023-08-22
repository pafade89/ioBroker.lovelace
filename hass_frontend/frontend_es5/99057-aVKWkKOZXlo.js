"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[99057],{18457:function(e,n,t){t.d(n,{Hd:function(){return s},SL:function(){return a},l4:function(){return u},sJ:function(){return o},uf:function(){return d}});var i=t(66477),r=t(27593),a=function(e){return o(e.attributes)},o=function(e){return!!e.unit_of_measurement||!!e.state_class},s=function(e){switch(e.number_format){case i.y4.comma_decimal:return["en-US","en"];case i.y4.decimal_comma:return["de","es","it"];case i.y4.space_comma:return["fr","sv","cs"];case i.y4.system:return;default:return e.language}},d=function(e,n,t){var a=n?s(n):void 0;if(Number.isNaN=Number.isNaN||function e(n){return"number"==typeof n&&e(n)},(null==n?void 0:n.number_format)!==i.y4.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(a,l(e,t)).format(Number(e))}catch(o){return console.error(o),new Intl.NumberFormat(void 0,l(e,t)).format(Number(e))}return!Number.isNaN(Number(e))&&""!==e&&(null==n?void 0:n.number_format)===i.y4.none&&Intl?new Intl.NumberFormat("en-US",l(e,Object.assign(Object.assign({},t),{},{useGrouping:!1}))).format(Number(e)):"string"==typeof e?e:"".concat((0,r.N)(e,null==t?void 0:t.maximumFractionDigits).toString()).concat("currency"===(null==t?void 0:t.style)?" ".concat(t.currency):"")},u=function(e,n){var t,i=null==n?void 0:n.display_precision;return null!=i?{maximumFractionDigits:i,minimumFractionDigits:i}:Number.isInteger(Number(null===(t=e.attributes)||void 0===t?void 0:t.step))&&Number.isInteger(Number(e.state))?{maximumFractionDigits:0}:void 0},l=function(e,n){var t=Object.assign({maximumFractionDigits:2},n);if("string"!=typeof e)return t;if(!n||void 0===n.minimumFractionDigits&&void 0===n.maximumFractionDigits){var i=e.indexOf(".")>-1?e.split(".")[1].length:0;t.minimumFractionDigits=i,t.maximumFractionDigits=i}return t}},27593:function(e,n,t){t.d(n,{N:function(){return i}});var i=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.round(e*Math.pow(10,n))/Math.pow(10,n)}},46583:function(e,n,t){var i,r,a,o,s,d=t(99312),u=t(81043),l=t(88962),p=t(33368),c=t(71650),h=t(82390),v=t(69205),m=t(70906),f=t(91808),y=t(34541),g=t(47838),x=t(68144),b=t(79932),k=t(83448),_=t(47181),Z=t(96151),w=(t(52039),"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z");(0,f.Z)([(0,b.Mo)("ha-expansion-panel")],(function(e,n){var t,f=function(n){(0,v.Z)(i,n);var t=(0,m.Z)(i);function i(){var n;(0,c.Z)(this,i);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),e((0,h.Z)(n)),n}return(0,p.Z)(i)}(n);return{F:f,d:[{kind:"field",decorators:[(0,b.Cb)({type:Boolean,reflect:!0})],key:"expanded",value:function(){return!1}},{kind:"field",decorators:[(0,b.Cb)({type:Boolean,reflect:!0})],key:"outlined",value:function(){return!1}},{kind:"field",decorators:[(0,b.Cb)({type:Boolean,reflect:!0})],key:"leftChevron",value:function(){return!1}},{kind:"field",decorators:[(0,b.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,b.Cb)()],key:"secondary",value:void 0},{kind:"field",decorators:[(0,b.SB)()],key:"_showContent",value:function(){return this.expanded}},{kind:"field",decorators:[(0,b.IO)(".container")],key:"_container",value:void 0},{kind:"method",key:"render",value:function(){return(0,x.dy)(i||(i=(0,l.Z)([' <div class="top ','"> <div id="summary" @click="','" @keydown="','" @focus="','" @blur="','" role="button" tabindex="0" aria-expanded="','" aria-controls="sect1"> ',' <slot name="header"> <div class="header"> ',' <slot class="secondary" name="secondary">',"</slot> </div> </slot> ",' </div> <slot name="icons"></slot> </div> <div class="container ','" @transitionend="','" role="region" aria-labelledby="summary" aria-hidden="','" tabindex="-1"> '," </div> "])),(0,k.$)({expanded:this.expanded}),this._toggleContainer,this._toggleContainer,this._focusChanged,this._focusChanged,this.expanded,this.leftChevron?(0,x.dy)(r||(r=(0,l.Z)([' <ha-svg-icon .path="','" class="summary-icon ','"></ha-svg-icon> '])),w,(0,k.$)({expanded:this.expanded})):"",this.header,this.secondary,this.leftChevron?"":(0,x.dy)(a||(a=(0,l.Z)([' <ha-svg-icon .path="','" class="summary-icon ','"></ha-svg-icon> '])),w,(0,k.$)({expanded:this.expanded})),(0,k.$)({expanded:this.expanded}),this._handleTransitionEnd,!this.expanded,this._showContent?(0,x.dy)(o||(o=(0,l.Z)(["<slot></slot>"]))):"")}},{kind:"method",key:"willUpdate",value:function(e){var n=this;(0,y.Z)((0,g.Z)(f.prototype),"willUpdate",this).call(this,e),e.has("expanded")&&this.expanded&&(this._showContent=this.expanded,setTimeout((function(){n.expanded&&(n._container.style.overflow="initial")}),300))}},{kind:"method",key:"_handleTransitionEnd",value:function(){this._container.style.removeProperty("height"),this._container.style.overflow=this.expanded?"initial":"hidden",this._showContent=this.expanded}},{kind:"method",key:"_toggleContainer",value:(t=(0,u.Z)((0,d.Z)().mark((function e(n){var t,i,r=this;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.defaultPrevented){e.next=2;break}return e.abrupt("return");case 2:if("keydown"!==n.type||"Enter"===n.key||" "===n.key){e.next=4;break}return e.abrupt("return");case 4:if(n.preventDefault(),t=!this.expanded,(0,_.B)(this,"expanded-will-change",{expanded:t}),this._container.style.overflow="hidden",!t){e.next=12;break}return this._showContent=!0,e.next=12,(0,Z.y)();case 12:i=this._container.scrollHeight,this._container.style.height="".concat(i,"px"),t||setTimeout((function(){r._container.style.height="0px"}),0),this.expanded=t,(0,_.B)(this,"expanded-changed",{expanded:this.expanded});case 17:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{kind:"method",key:"_focusChanged",value:function(e){this.shadowRoot.querySelector(".top").classList.toggle("focused","focus"===e.type)}},{kind:"get",static:!0,key:"styles",value:function(){return(0,x.iv)(s||(s=(0,l.Z)([":host{display:block}.top{display:flex;align-items:center;border-radius:var(--ha-card-border-radius,12px)}.top.expanded{border-bottom-left-radius:0px;border-bottom-right-radius:0px}.top.focused{background:var(--input-fill-color)}:host([outlined]){box-shadow:none;border-width:1px;border-style:solid;border-color:var(--ha-card-border-color,var(--divider-color,#e0e0e0));border-radius:var(--ha-card-border-radius,12px)}.summary-icon{margin-left:8px}:host([leftchevron]) .summary-icon{margin-left:0;margin-right:8px}#summary{flex:1;display:flex;padding:var(--expansion-panel-summary-padding,0 8px);min-height:48px;align-items:center;cursor:pointer;overflow:hidden;font-weight:500;outline:0}.summary-icon{transition:transform 150ms cubic-bezier(.4,0,.2,1);direction:var(--direction)}.summary-icon.expanded{transform:rotate(180deg)}.header,::slotted([slot=header]){flex:1}.container{padding:var(--expansion-panel-content-padding,0 8px);overflow:hidden;transition:height .3s cubic-bezier(.4,0,.2,1);height:0px}.container.expanded{height:auto}.secondary{display:block;color:var(--secondary-text-color);font-size:12px}"])))}}]}}),x.oi)},99057:function(e,n,t){var i,r,a,o=t(88962),s=t(33368),d=t(71650),u=t(82390),l=t(69205),p=t(70906),c=t(91808),h=t(68144),v=t(79932),m=t(14516),f=t(69949);t(26777),(0,c.Z)([(0,v.Mo)("assist-render-pipeline-events")],(function(e,n){var t=function(n){(0,l.Z)(i,n);var t=(0,p.Z)(i);function i(){var n;(0,d.Z)(this,i);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),e((0,u.Z)(n)),n}return(0,s.Z)(i)}(n);return{F:t,d:[{kind:"field",decorators:[(0,v.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,v.Cb)()],key:"events",value:void 0},{kind:"field",key:"_processEvents",value:function(){return(0,m.Z)((function(e){var n;return e.forEach((function(e){n=(0,f.eP)(n,e)})),n}))}},{kind:"method",key:"render",value:function(){var e=this._processEvents(this.events);return e?(0,h.dy)(a||(a=(0,o.Z)([' <assist-render-pipeline-run .hass="','" .pipelineRun="','"></assist-render-pipeline-run> '])),this.hass,e):this.events.length?(0,h.dy)(i||(i=(0,o.Z)(['<ha-alert alert-type="error">Error showing run</ha-alert> <ha-card> <ha-expansion-panel> <span slot="header">Raw</span> <pre>',"</pre> </ha-expansion-panel> </ha-card>"])),JSON.stringify(this.events,null,2)):(0,h.dy)(r||(r=(0,o.Z)(['<ha-alert alert-type="warning">There where no events in this run.</ha-alert>'])))}}]}}),h.oi)},26777:function(e,n,t){var i,r,a,o,s,d,u,l,p,c,h,v,m,f,y,g,x,b,k,_,Z=t(33368),w=t(71650),R=t(82390),N=t(69205),C=t(70906),F=t(91808),E=t(68990),L=t(88962),D=t(68144),O=t(79932),T=(t(22098),t(9381),t(74834),t(31206),t(46583),t(18457)),I=(t(18900),t(26765)),S={pipeline:"Pipeline",language:"Language"},M={engine:"Engine"},B={engine:"Engine",language:"Language",intent_input:"Input"},P={engine:"Engine",language:"Language",voice:"Voice",tts_input:"Input"},U={ready:0,stt:1,intent:2,tts:3,done:4,error:5},j=function(e,n){return e.init_options?U[e.init_options.start_stage]<=U[n]&&U[n]<=U[e.init_options.end_stage]:n in e},z=function(e,n,t){return"error"!==e.stage||t!==n?"":(0,D.dy)(i||(i=(0,L.Z)([' <ha-alert alert-type="error"> '," (",") </ha-alert> "])),e.error.message,e.error.code)},A=function(e,n,t){var i=n.events.find((function(e){return e.type==="".concat(t,"-start")})),s=n.events.find((function(e){return e.type==="".concat(t,"-end")}));if(!i)return"";if("error"===n.stage)return(0,D.dy)(r||(r=(0,L.Z)(["❌"])));if(!s)return(0,D.dy)(a||(a=(0,L.Z)([' <ha-circular-progress size="tiny" active></ha-circular-progress> '])));var d=new Date(s.timestamp).getTime()-new Date(i.timestamp).getTime(),u=(0,T.uf)(d/1e3,e.locale,{maximumFractionDigits:2});return(0,D.dy)(o||(o=(0,L.Z)(["","s ✅"])),u)},$=function(e,n){return Object.entries(n).map((function(n){var t=(0,E.Z)(n,2),i=t[0],r=t[1];return(0,D.dy)(s||(s=(0,L.Z)([' <div class="row"> <div>',"</div> <div>","</div> </div> "])),r,e[i])}))},H=function(e,n){var t={},i=!1;for(var r in e)r in n||"done"===r||(i=!0,t[r]=e[r]);return i?(0,D.dy)(d||(d=(0,L.Z)(['<ha-expansion-panel> <span slot="header">Raw</span> <ha-yaml-editor readOnly="readOnly" autoUpdate .value="','"></ha-yaml-editor> </ha-expansion-panel>'])),t):""};(0,F.Z)([(0,O.Mo)("assist-render-pipeline-run")],(function(e,n){var t=function(n){(0,N.Z)(i,n);var t=(0,C.Z)(i);function i(){var n;(0,w.Z)(this,i);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),e((0,R.Z)(n)),n}return(0,Z.Z)(i)}(n);return{F:t,d:[{kind:"field",decorators:[(0,O.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,O.Cb)()],key:"pipelineRun",value:void 0},{kind:"method",key:"render",value:function(){var e,n,t,i,r=this,a=this.pipelineRun&&["tts","intent","stt"].find((function(e){return e in r.pipelineRun}))||"ready",o=[],s=(this.pipelineRun.init_options&&"text"in this.pipelineRun.init_options.input?this.pipelineRun.init_options.input.text:void 0)||(null===(e=this.pipelineRun)||void 0===e||null===(e=e.stt)||void 0===e||null===(e=e.stt_output)||void 0===e?void 0:e.text)||(null===(n=this.pipelineRun)||void 0===n||null===(n=n.intent)||void 0===n?void 0:n.intent_input);return s&&o.push({from:"user",text:s}),null!==(t=this.pipelineRun)&&void 0!==t&&null!==(t=t.intent)&&void 0!==t&&null!==(t=t.intent_output)&&void 0!==t&&null!==(t=t.response)&&void 0!==t&&null!==(t=t.speech)&&void 0!==t&&null!==(t=t.plain)&&void 0!==t&&t.speech&&o.push({from:"hass",text:this.pipelineRun.intent.intent_output.response.speech.plain.speech}),(0,D.dy)(u||(u=(0,L.Z)([' <ha-card> <div class="card-content"> <div class="row heading"> <div>Run</div> <div>',"</div> </div> "," "," </div> </ha-card> "," "," "," "," "," "," ",' <ha-card> <ha-expansion-panel> <span slot="header">Raw</span> <ha-yaml-editor readOnly="readOnly" autoUpdate .value="','"></ha-yaml-editor> </ha-expansion-panel> </ha-card> '])),this.pipelineRun.stage,$(this.pipelineRun.run,S),o.length>0?(0,D.dy)(l||(l=(0,L.Z)([' <div class="messages"> ',' </div> <div style="clear:both"></div> '])),o.map((function(e){var n=e.from,t=e.text;return(0,D.dy)(p||(p=(0,L.Z)([' <div class="','">',"</div> "])),"message ".concat(n),t)}))):"",z(this.pipelineRun,"ready",a),j(this.pipelineRun,"stt")?(0,D.dy)(c||(c=(0,L.Z)([' <ha-card> <div class="card-content"> <div class="row heading"> <span>Speech-to-text</span> '," </div> "," </div> </ha-card> "])),A(this.hass,this.pipelineRun,"stt"),this.pipelineRun.stt?(0,D.dy)(h||(h=(0,L.Z)([' <div class="card-content"> ',' <div class="row"> <div>Language</div> <div>',"</div> </div> "," "," </div> "])),$(this.pipelineRun.stt,M),this.pipelineRun.stt.metadata.language,this.pipelineRun.stt.stt_output?(0,D.dy)(v||(v=(0,L.Z)(['<div class="row"> <div>Output</div> <div>',"</div> </div>"])),this.pipelineRun.stt.stt_output.text):"",H(this.pipelineRun.stt,M)):""):"",z(this.pipelineRun,"stt",a),j(this.pipelineRun,"intent")?(0,D.dy)(m||(m=(0,L.Z)([' <ha-card> <div class="card-content"> <div class="row heading"> <span>Natural Language Processing</span> '," </div> "," </div> </ha-card> "])),A(this.hass,this.pipelineRun,"intent"),this.pipelineRun.intent?(0,D.dy)(f||(f=(0,L.Z)([' <div class="card-content"> '," "," "," </div> "])),$(this.pipelineRun.intent,B),this.pipelineRun.intent.intent_output?(0,D.dy)(y||(y=(0,L.Z)(['<div class="row"> <div>Response type</div> <div> '," </div> </div> ",""])),this.pipelineRun.intent.intent_output.response.response_type,"error"===this.pipelineRun.intent.intent_output.response.response_type?(0,D.dy)(g||(g=(0,L.Z)(['<div class="row"> <div>Error code</div> <div> '," </div> </div>"])),this.pipelineRun.intent.intent_output.response.data.code):""):"",H(this.pipelineRun.intent,B)):""):"",z(this.pipelineRun,"intent",a),j(this.pipelineRun,"tts")?(0,D.dy)(x||(x=(0,L.Z)([' <ha-card> <div class="card-content"> <div class="row heading"> <span>Text-to-speech</span> '," </div> "," </div> "," </ha-card> "])),A(this.hass,this.pipelineRun,"tts"),this.pipelineRun.tts?(0,D.dy)(b||(b=(0,L.Z)([' <div class="card-content"> '," "," </div> "])),$(this.pipelineRun.tts,P),H(this.pipelineRun.tts,P)):"",null!==(i=this.pipelineRun)&&void 0!==i&&null!==(i=i.tts)&&void 0!==i&&i.tts_output?(0,D.dy)(k||(k=(0,L.Z)([' <div class="card-actions"> <ha-button @click="','"> Play Audio </ha-button> </div> '])),this._playTTS):""):"",z(this.pipelineRun,"tts",a),this.pipelineRun)}},{kind:"method",key:"_playTTS",value:function(){var e=this,n=this.pipelineRun.tts.tts_output.url,t=new Audio(n);t.addEventListener("error",(function(){(0,I.Ys)(e,{title:"Error",text:"Error playing audio"})})),t.addEventListener("canplaythrough",(function(){t.play()}))}},{kind:"field",static:!0,key:"styles",value:function(){return(0,D.iv)(_||(_=(0,L.Z)([":host{display:block}ha-alert,ha-card{display:block;margin-bottom:16px}.row{display:flex;justify-content:space-between}ha-expansion-panel{padding-left:8px}.card-content ha-expansion-panel{padding-left:0px;--expansion-panel-summary-padding:0px;--expansion-panel-content-padding:0px}.heading{font-weight:500;margin-bottom:16px}.messages{margin-top:8px}.message{font-size:18px;margin:8px 0;padding:8px;border-radius:15px;clear:both}.message.user{margin-left:24px;margin-inline-start:24px;margin-inline-end:initial;float:var(--float-end);text-align:right;border-bottom-right-radius:0px;background-color:var(--light-primary-color);color:var(--text-light-primary-color,var(--primary-text-color));direction:var(--direction)}.message.hass{margin-right:24px;margin-inline-end:24px;margin-inline-start:initial;float:var(--float-start);border-bottom-left-radius:0px;background-color:var(--primary-color);color:var(--text-primary-color);direction:var(--direction)}"])))}}]}}),D.oi)}}]);
//# sourceMappingURL=99057-aVKWkKOZXlo.js.map