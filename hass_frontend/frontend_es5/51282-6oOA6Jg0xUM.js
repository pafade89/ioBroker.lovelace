"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[51282],{65189:function(e,t,n){var r,a,i,o=n(88962),s=n(33368),c=n(71650),u=n(82390),l=n(69205),d=n(70906),h=n(91808),f=n(68144),v=n(79932),m=n(99312),p=n(40039),k=n(81043),g=n(34541),y=n(47838),b=n(47181),w=n(93217),Z=function(){var e=(0,k.Z)((0,m.Z)().mark((function e(t,a,i){return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r||(r=(0,w.Ud)(new Worker(new URL(n.p+n.u(71402),n.b)))),e.abrupt("return",r.renderMarkdown(t,a,i));case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),_={Note:"info",Warning:"warning"};(0,h.Z)([(0,v.Mo)("ha-markdown-element")],(function(e,t){var n,r=function(t){(0,l.Z)(r,t);var n=(0,d.Z)(r);function r(){var t;(0,c.Z)(this,r);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return t=n.call.apply(n,[this].concat(i)),e((0,u.Z)(t)),t}return(0,s.Z)(r)}(t);return{F:r,d:[{kind:"field",decorators:[(0,v.Cb)()],key:"content",value:void 0},{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"allowSvg",value:function(){return!1}},{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"breaks",value:function(){return!1}},{kind:"field",decorators:[(0,v.Cb)({type:Boolean,attribute:"lazy-images"})],key:"lazyImages",value:function(){return!1}},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"update",value:function(e){(0,g.Z)((0,y.Z)(r.prototype),"update",this).call(this,e),void 0!==this.content&&this._render()}},{kind:"method",key:"_render",value:(n=(0,k.Z)((0,m.Z)().mark((function e(){var t,n,r,a,i,o,s,c,u,l,d;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(String(this.content),{breaks:this.breaks,gfm:!0},{allowSvg:this.allowSvg});case 2:for(this.innerHTML=e.sent,this._resize(),t=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT,null);t.nextNode();)if((n=t.currentNode)instanceof HTMLAnchorElement&&n.host!==document.location.host)n.target="_blank",n.rel="noreferrer noopener";else if(n instanceof HTMLImageElement)this.lazyImages&&(n.loading="lazy"),n.addEventListener("load",this._resize);else if(n instanceof HTMLQuoteElement&&(r=n.firstElementChild,a=null==r?void 0:r.firstElementChild,i=(null==a?void 0:a.textContent)&&_[a.textContent],"STRONG"===(null==a?void 0:a.nodeName)&&i)){(s=document.createElement("ha-alert")).alertType=i,s.title="#text"===r.childNodes[1].nodeName&&(null===(o=r.childNodes[1].textContent)||void 0===o?void 0:o.trimStart())||"",c=Array.from(r.childNodes),u=(0,p.Z)(c.slice(c.findIndex((function(e){return e instanceof HTMLBRElement}))+1));try{for(u.s();!(l=u.n()).done;)d=l.value,s.appendChild(d)}catch(h){u.e(h)}finally{u.f()}n.firstElementChild.replaceWith(s)}case 6:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{kind:"field",key:"_resize",value:function(){var e=this;return function(){return(0,b.B)(e,"iron-resize")}}}]}}),f.fl),n(9381),n(81312),n(52039),(0,h.Z)([(0,v.Mo)("ha-markdown")],(function(e,t){var n=function(t){(0,l.Z)(r,t);var n=(0,d.Z)(r);function r(){var t;(0,c.Z)(this,r);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return t=n.call.apply(n,[this].concat(i)),e((0,u.Z)(t)),t}return(0,s.Z)(r)}(t);return{F:n,d:[{kind:"field",decorators:[(0,v.Cb)()],key:"content",value:void 0},{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"allowSvg",value:function(){return!1}},{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"breaks",value:function(){return!1}},{kind:"field",decorators:[(0,v.Cb)({type:Boolean,attribute:"lazy-images"})],key:"lazyImages",value:function(){return!1}},{kind:"method",key:"render",value:function(){return this.content?(0,f.dy)(a||(a=(0,o.Z)(['<ha-markdown-element .content="','" .allowSvg="','" .breaks="','" .lazyImages="','"></ha-markdown-element>'])),this.content,this.allowSvg,this.breaks,this.lazyImages):f.Ld}},{kind:"get",static:!0,key:"styles",value:function(){return(0,f.iv)(i||(i=(0,o.Z)([":host{display:block}ha-markdown-element{-ms-user-select:text;-webkit-user-select:text;-moz-user-select:text}ha-markdown-element>:first-child{margin-top:0}ha-markdown-element>:last-child{margin-bottom:0}a{color:var(--primary-color)}img{max-width:100%}code,pre{background-color:var(--markdown-code-background-color,none);border-radius:3px}svg{background-color:var(--markdown-svg-background-color,none);color:var(--markdown-svg-color,none)}code{font-size:85%;padding:.2em .4em}pre code{padding:0}pre{padding:16px;overflow:auto;line-height:1.45;font-family:var(--code-font-family,monospace)}h1,h2,h3,h4,h5,h6{line-height:initial}h2{font-size:1.5em;font-weight:700}"])))}}]}}),f.oi)},17324:function(e,t,n){n.d(t,{N:function(){return r}});var r=function(e,t,n){return e.subscribeMessage((function(e){return t(e)}),Object.assign({type:"render_template"},n))}},51282:function(e,t,n){n.r(t),n.d(t,{HuiMarkdownCard:function(){return w}});var r,a,i=n(88962),o=n(99312),s=n(81043),c=n(33368),u=n(71650),l=n(82390),d=n(69205),h=n(70906),f=n(91808),v=n(34541),m=n(47838),p=n(68144),k=n(79932),g=n(83448),y=n(62877),b=(n(22098),n(65189),n(17324)),w=(0,f.Z)([(0,k.Mo)("hui-markdown-card")],(function(e,t){var f,w,Z,_=function(t){(0,d.Z)(r,t);var n=(0,h.Z)(r);function r(){var t;(0,u.Z)(this,r);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return t=n.call.apply(n,[this].concat(i)),e((0,l.Z)(t)),t}return(0,c.Z)(r)}(t);return{F:_,d:[{kind:"method",static:!0,key:"getConfigElement",value:(Z=(0,s.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(54102).then(n.bind(n,54102));case 2:return e.abrupt("return",document.createElement("hui-markdown-card-editor"));case 3:case"end":return e.stop()}}),e)}))),function(){return Z.apply(this,arguments)})},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"markdown",content:"The **Markdown** card allows you to write any text. You can style it **bold**, *italicized*, ~strikethrough~ etc. You can do images, links, and more.\n\nFor more information see the [Markdown Cheatsheet](https://commonmark.org/help)."}}},{kind:"field",decorators:[(0,k.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,k.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,k.SB)()],key:"_templateResult",value:void 0},{kind:"field",decorators:[(0,k.SB)()],key:"_unsubRenderTemplate",value:void 0},{kind:"method",key:"getCardSize",value:function(){return void 0===this._config?3:void 0===this._config.card_size?Math.round(this._config.content.split("\n").length/2)+(this._config.title?1:0):this._config.card_size}},{kind:"method",key:"setConfig",value:function(e){var t;if(!e.content)throw new Error("Content required");(null===(t=this._config)||void 0===t?void 0:t.content)!==e.content&&this._tryDisconnect(),this._config=e}},{kind:"method",key:"connectedCallback",value:function(){(0,v.Z)((0,m.Z)(_.prototype),"connectedCallback",this).call(this),this._tryConnect()}},{kind:"method",key:"disconnectedCallback",value:function(){this._tryDisconnect()}},{kind:"method",key:"render",value:function(){var e;return this._config?(0,p.dy)(r||(r=(0,i.Z)([' <ha-card .header="','"> <ha-markdown breaks class="','" .content="','"></ha-markdown> </ha-card> '])),this._config.title,(0,g.$)({"no-header":!this._config.title}),null===(e=this._templateResult)||void 0===e?void 0:e.result):p.Ld}},{kind:"method",key:"updated",value:function(e){if((0,v.Z)((0,m.Z)(_.prototype),"updated",this).call(this,e),this._config&&this.hass){this._tryConnect();var t=e.get("hass"),n=e.get("_config");t&&n&&t.themes===this.hass.themes&&n.theme===this._config.theme||(0,y.R)(this,this.hass.themes,this._config.theme)}}},{kind:"method",key:"_tryConnect",value:(w=(0,s.Z)((0,o.Z)().mark((function e(){var t=this;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===this._unsubRenderTemplate&&this.hass&&this._config){e.next=2;break}return e.abrupt("return");case 2:try{this._unsubRenderTemplate=(0,b.N)(this.hass.connection,(function(e){t._templateResult=e}),{template:this._config.content,entity_ids:this._config.entity_id,variables:{config:this._config,user:this.hass.user.name},strict:!0})}catch(n){this._templateResult={result:this._config.content,listeners:{all:!1,domains:[],entities:[],time:!1}},this._unsubRenderTemplate=void 0}case 3:case"end":return e.stop()}}),e,this)}))),function(){return w.apply(this,arguments)})},{kind:"method",key:"_tryDisconnect",value:(f=(0,s.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._unsubRenderTemplate){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,this._unsubRenderTemplate;case 5:(0,e.sent)(),this._unsubRenderTemplate=void 0,e.next=16;break;case 10:if(e.prev=10,e.t0=e.catch(2),"not_found"!==e.t0.code){e.next=15;break}e.next=16;break;case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,this,[[2,10]])}))),function(){return f.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return(0,p.iv)(a||(a=(0,i.Z)(["ha-card{height:100%}ha-markdown{padding:0 16px 16px;word-wrap:break-word}ha-markdown.no-header{padding-top:16px}"])))}}]}}),p.oi)},93217:function(e,t,n){n.d(t,{Ud:function(){return g}});var r=n(68990),a=n(93359),i=n(59202),o=n(53709),s=n(40039),c=n(76775),u=Symbol("Comlink.proxy"),l=Symbol("Comlink.endpoint"),d=Symbol("Comlink.releaseProxy"),h=Symbol("Comlink.finalizer"),f=Symbol("Comlink.thrown"),v=function(e){return"object"===(0,c.Z)(e)&&null!==e||"function"==typeof e},m=new Map([["proxy",{canHandle:function(e){return v(e)&&e[u]},serialize:function(e){var t=new MessageChannel,n=t.port1,r=t.port2;return p(e,n),[r,[r]]},deserialize:function(e){return e.start(),g(e)}}],["throw",{canHandle:function(e){return v(e)&&f in e},serialize:function(e){var t=e.value;return[t instanceof Error?{isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:{isError:!1,value:t},[]]},deserialize:function(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:globalThis,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["*"];t.addEventListener("message",(function c(l){if(l&&l.data)if(function(e,t){var n,r=(0,s.Z)(e);try{for(r.s();!(n=r.n()).done;){var a=n.value;if(t===a||"*"===a)return!0;if(a instanceof RegExp&&a.test(t))return!0}}catch(i){r.e(i)}finally{r.f()}return!1}(n,l.origin)){var d,v=Object.assign({path:[]},l.data),m=v.id,g=v.type,y=v.path,b=(l.data.argumentList||[]).map(S);try{var w=y.slice(0,-1).reduce((function(e,t){return e[t]}),e),Z=y.reduce((function(e,t){return e[t]}),e);switch(g){case"GET":d=Z;break;case"SET":w[y.slice(-1)[0]]=S(l.data.value),d=!0;break;case"APPLY":d=Z.apply(w,b);break;case"CONSTRUCT":var _;d=function(e){return Object.assign(e,(0,a.Z)({},u,!0))}((0,i.Z)(Z,(0,o.Z)(b)));break;case"ENDPOINT":var E=new MessageChannel,T=E.port1,R=E.port2;p(e,R),d=function(e,t){return C.set(e,t),e}(T,[T]);break;case"RELEASE":d=void 0;break;default:return}}catch(_){d=(0,a.Z)({value:_},f,0)}Promise.resolve(d).catch((function(e){return(0,a.Z)({value:e},f,0)})).then((function(n){var a=x(n),i=(0,r.Z)(a,2),o=i[0],s=i[1];t.postMessage(Object.assign(Object.assign({},o),{id:m}),s),"RELEASE"===g&&(t.removeEventListener("message",c),k(t),h in e&&"function"==typeof e[h]&&e[h]())})).catch((function(e){var n=x((0,a.Z)({value:new TypeError("Unserializable return value")},f,0)),i=(0,r.Z)(n,2),o=i[0],s=i[1];t.postMessage(Object.assign(Object.assign({},o),{id:m}),s)}))}else console.warn("Invalid origin '".concat(l.origin,"' for comlink proxy"))})),t.start&&t.start()}function k(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function g(e,t){return _(e,[],t)}function y(e){if(e)throw new Error("Proxy has been released and is not useable")}function b(e){return T(e,{type:"RELEASE"}).then((function(){k(e)}))}var w=new WeakMap,Z="FinalizationRegistry"in globalThis&&new FinalizationRegistry((function(e){var t=(w.get(e)||0)-1;w.set(e,t),0===t&&b(e)}));function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=!1,a=new Proxy(arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},{get:function(r,i){if(y(n),i===d)return function(){!function(e){Z&&Z.unregister(e)}(a),b(e),n=!0};if("then"===i){if(0===t.length)return{then:function(){return a}};var s=T(e,{type:"GET",path:t.map((function(e){return e.toString()}))}).then(S);return s.then.bind(s)}return _(e,[].concat((0,o.Z)(t),[i]))},set:function(a,i,s){y(n);var c=x(s),u=(0,r.Z)(c,2),l=u[0],d=u[1];return T(e,{type:"SET",path:[].concat((0,o.Z)(t),[i]).map((function(e){return e.toString()})),value:l},d).then(S)},apply:function(a,i,o){y(n);var s=t[t.length-1];if(s===l)return T(e,{type:"ENDPOINT"}).then(S);if("bind"===s)return _(e,t.slice(0,-1));var c=E(o),u=(0,r.Z)(c,2),d=u[0],h=u[1];return T(e,{type:"APPLY",path:t.map((function(e){return e.toString()})),argumentList:d},h).then(S)},construct:function(a,i){y(n);var o=E(i),s=(0,r.Z)(o,2),c=s[0],u=s[1];return T(e,{type:"CONSTRUCT",path:t.map((function(e){return e.toString()})),argumentList:c},u).then(S)}});return function(e,t){var n=(w.get(t)||0)+1;w.set(t,n),Z&&Z.register(e,t,e)}(a,e),a}function E(e){var t,n=e.map(x);return[n.map((function(e){return e[0]})),(t=n.map((function(e){return e[1]})),Array.prototype.concat.apply([],t))]}var C=new WeakMap;function x(e){var t,n=(0,s.Z)(m);try{for(n.s();!(t=n.n()).done;){var a=(0,r.Z)(t.value,2),i=a[0],o=a[1];if(o.canHandle(e)){var c=o.serialize(e),u=(0,r.Z)(c,2);return[{type:"HANDLER",name:i,value:u[0]},u[1]]}}}catch(l){n.e(l)}finally{n.f()}return[{type:"RAW",value:e},C.get(e)||[]]}function S(e){switch(e.type){case"HANDLER":return m.get(e.name).deserialize(e.value);case"RAW":return e.value}}function T(e,t,n){return new Promise((function(r){var a=new Array(4).fill(0).map((function(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)})).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===a&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)}))}}}]);
//# sourceMappingURL=51282-6oOA6Jg0xUM.js.map