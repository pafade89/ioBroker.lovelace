/*! For license information please see 51282-1PTMoEdES1I.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[51282],{65189:(e,t,n)=>{var o=n(17463),a=n(68144),i=n(79932),r=n(34541),s=n(47838),c=n(47181),d=n(93217);let l;(0,o.Z)([(0,i.Mo)("ha-markdown-element")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",decorators:[(0,i.Cb)()],key:"content",value:void 0},{kind:"field",decorators:[(0,i.Cb)({type:Boolean})],key:"allowSvg",value:()=>!1},{kind:"field",decorators:[(0,i.Cb)({type:Boolean})],key:"breaks",value:()=>!1},{kind:"field",decorators:[(0,i.Cb)({type:Boolean,attribute:"lazy-images"})],key:"lazyImages",value:()=>!1},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"update",value:function(e){(0,r.Z)((0,s.Z)(o.prototype),"update",this).call(this,e),void 0!==this.content&&this._render()}},{kind:"method",key:"_render",value:async function(){this.innerHTML=await(async(e,t,o)=>(l||(l=(0,d.Ud)(new Worker(new URL(n.p+n.u(14971),n.b)))),l.renderMarkdown(e,t,o)))(String(this.content),{breaks:this.breaks,gfm:!0},{allowSvg:this.allowSvg}),this._resize();const e=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT,null);for(;e.nextNode();){const t=e.currentNode;t instanceof HTMLAnchorElement&&t.host!==document.location.host?(t.target="_blank",t.rel="noreferrer noopener"):t instanceof HTMLImageElement&&(this.lazyImages&&(t.loading="lazy"),t.addEventListener("load",this._resize))}}},{kind:"field",key:"_resize",value(){return()=>(0,c.B)(this,"iron-resize")}}]}}),a.fl);n(9381),n(81312),n(52039);(0,o.Z)([(0,i.Mo)("ha-markdown")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,i.Cb)()],key:"content",value:void 0},{kind:"field",decorators:[(0,i.Cb)({type:Boolean})],key:"allowSvg",value:()=>!1},{kind:"field",decorators:[(0,i.Cb)({type:Boolean})],key:"breaks",value:()=>!1},{kind:"field",decorators:[(0,i.Cb)({type:Boolean,attribute:"lazy-images"})],key:"lazyImages",value:()=>!1},{kind:"method",key:"render",value:function(){return this.content?a.dy`<ha-markdown-element .content="${this.content}" .allowSvg="${this.allowSvg}" .breaks="${this.breaks}" .lazyImages="${this.lazyImages}"></ha-markdown-element>`:a.Ld}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{display:block}ha-markdown-element{-ms-user-select:text;-webkit-user-select:text;-moz-user-select:text}ha-markdown-element>:first-child{margin-top:0}ha-markdown-element>:last-child{margin-bottom:0}a{color:var(--primary-color)}img{max-width:100%}code,pre{background-color:var(--markdown-code-background-color,none);border-radius:3px}svg{background-color:var(--markdown-svg-background-color,none);color:var(--markdown-svg-color,none)}code{font-size:85%;padding:.2em .4em}pre code{padding:0}pre{padding:16px;overflow:auto;line-height:1.45;font-family:var(--code-font-family,monospace)}h1,h2,h3,h4,h5,h6{line-height:initial}h2{font-size:1.5em;font-weight:700}`}}]}}),a.oi)},17324:(e,t,n)=>{n.d(t,{N:()=>o});const o=(e,t,n)=>e.subscribeMessage((e=>t(e)),{type:"render_template",...n})},51282:(e,t,n)=>{n.r(t),n.d(t,{HuiMarkdownCard:()=>u});var o=n(17463),a=n(34541),i=n(47838),r=n(68144),s=n(79932),c=n(83448),d=n(62877),l=(n(22098),n(65189),n(17324));let u=(0,o.Z)([(0,s.Mo)("hui-markdown-card")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await n.e(54102).then(n.bind(n,54102)),document.createElement("hui-markdown-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"markdown",content:"The **Markdown** card allows you to write any text. You can style it **bold**, *italicized*, ~strikethrough~ etc. You can do images, links, and more.\n\nFor more information see the [Markdown Cheatsheet](https://commonmark.org/help)."}}},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_templateResult",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_unsubRenderTemplate",value:void 0},{kind:"method",key:"getCardSize",value:function(){return void 0===this._config?3:void 0===this._config.card_size?Math.round(this._config.content.split("\n").length/2)+(this._config.title?1:0):this._config.card_size}},{kind:"method",key:"setConfig",value:function(e){var t;if(!e.content)throw new Error("Content required");(null===(t=this._config)||void 0===t?void 0:t.content)!==e.content&&this._tryDisconnect(),this._config=e}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)((0,i.Z)(o.prototype),"connectedCallback",this).call(this),this._tryConnect()}},{kind:"method",key:"disconnectedCallback",value:function(){this._tryDisconnect()}},{kind:"method",key:"render",value:function(){var e;return this._config?r.dy` <ha-card .header="${this._config.title}"> <ha-markdown breaks class="${(0,c.$)({"no-header":!this._config.title})}" .content="${null===(e=this._templateResult)||void 0===e?void 0:e.result}"></ha-markdown> </ha-card> `:r.Ld}},{kind:"method",key:"updated",value:function(e){if((0,a.Z)((0,i.Z)(o.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;this._tryConnect();const t=e.get("hass"),n=e.get("_config");t&&n&&t.themes===this.hass.themes&&n.theme===this._config.theme||(0,d.R)(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"_tryConnect",value:async function(){if(void 0===this._unsubRenderTemplate&&this.hass&&this._config)try{this._unsubRenderTemplate=(0,l.N)(this.hass.connection,(e=>{this._templateResult=e}),{template:this._config.content,entity_ids:this._config.entity_id,variables:{config:this._config,user:this.hass.user.name},strict:!0})}catch(e){this._templateResult={result:this._config.content,listeners:{all:!1,domains:[],entities:[],time:!1}},this._unsubRenderTemplate=void 0}}},{kind:"method",key:"_tryDisconnect",value:async function(){if(this._unsubRenderTemplate)try{(await this._unsubRenderTemplate)(),this._unsubRenderTemplate=void 0}catch(e){if("not_found"!==e.code)throw e}}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`ha-card{height:100%}ha-markdown{padding:0 16px 16px;word-wrap:break-word}ha-markdown.no-header{padding-top:16px}`}}]}}),r.oi)},93217:(e,t,n)=>{n.d(t,{Ud:()=>h});const o=Symbol("Comlink.proxy"),a=Symbol("Comlink.endpoint"),i=Symbol("Comlink.releaseProxy"),r=Symbol("Comlink.finalizer"),s=Symbol("Comlink.thrown"),c=e=>"object"==typeof e&&null!==e||"function"==typeof e,d=new Map([["proxy",{canHandle:e=>c(e)&&e[o],serialize(e){const{port1:t,port2:n}=new MessageChannel;return l(e,t),[n,[n]]},deserialize:e=>(e.start(),h(e))}],["throw",{canHandle:e=>c(e)&&s in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function l(e,t=globalThis,n=["*"]){t.addEventListener("message",(function a(i){if(!i||!i.data)return;if(!function(e,t){for(const n of e){if(t===n||"*"===n)return!0;if(n instanceof RegExp&&n.test(t))return!0}return!1}(n,i.origin))return void console.warn(`Invalid origin '${i.origin}' for comlink proxy`);const{id:c,type:d,path:h}=Object.assign({path:[]},i.data),m=(i.data.argumentList||[]).map(w);let f;try{const t=h.slice(0,-1).reduce(((e,t)=>e[t]),e),n=h.reduce(((e,t)=>e[t]),e);switch(d){case"GET":f=n;break;case"SET":t[h.slice(-1)[0]]=w(i.data.value),f=!0;break;case"APPLY":f=n.apply(t,m);break;case"CONSTRUCT":f=function(e){return Object.assign(e,{[o]:!0})}(new n(...m));break;case"ENDPOINT":{const{port1:t,port2:n}=new MessageChannel;l(e,n),f=function(e,t){return v.set(e,t),e}(t,[t])}break;case"RELEASE":f=void 0;break;default:return}}catch(e){f={value:e,[s]:0}}Promise.resolve(f).catch((e=>({value:e,[s]:0}))).then((n=>{const[o,i]=b(n);t.postMessage(Object.assign(Object.assign({},o),{id:c}),i),"RELEASE"===d&&(t.removeEventListener("message",a),u(t),r in e&&"function"==typeof e[r]&&e[r]())})).catch((e=>{const[n,o]=b({value:new TypeError("Unserializable return value"),[s]:0});t.postMessage(Object.assign(Object.assign({},n),{id:c}),o)}))})),t.start&&t.start()}function u(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function h(e,t){return p(e,[],t)}function m(e){if(e)throw new Error("Proxy has been released and is not useable")}function f(e){return _(e,{type:"RELEASE"}).then((()=>{u(e)}))}const k=new WeakMap,g="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const t=(k.get(e)||0)-1;k.set(e,t),0===t&&f(e)}));function p(e,t=[],n=function(){}){let o=!1;const r=new Proxy(n,{get(n,a){if(m(o),a===i)return()=>{!function(e){g&&g.unregister(e)}(r),f(e),o=!0};if("then"===a){if(0===t.length)return{then:()=>r};const n=_(e,{type:"GET",path:t.map((e=>e.toString()))}).then(w);return n.then.bind(n)}return p(e,[...t,a])},set(n,a,i){m(o);const[r,s]=b(i);return _(e,{type:"SET",path:[...t,a].map((e=>e.toString())),value:r},s).then(w)},apply(n,i,r){m(o);const s=t[t.length-1];if(s===a)return _(e,{type:"ENDPOINT"}).then(w);if("bind"===s)return p(e,t.slice(0,-1));const[c,d]=y(r);return _(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:c},d).then(w)},construct(n,a){m(o);const[i,r]=y(a);return _(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:i},r).then(w)}});return function(e,t){const n=(k.get(t)||0)+1;k.set(t,n),g&&g.register(e,t,e)}(r,e),r}function y(e){const t=e.map(b);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const v=new WeakMap;function b(e){for(const[t,n]of d)if(n.canHandle(e)){const[o,a]=n.serialize(e);return[{type:"HANDLER",name:t,value:o},a]}return[{type:"RAW",value:e},v.get(e)||[]]}function w(e){switch(e.type){case"HANDLER":return d.get(e.name).deserialize(e.value);case"RAW":return e.value}}function _(e,t,n){return new Promise((o=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===a&&(e.removeEventListener("message",t),o(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)}))}}}]);
//# sourceMappingURL=51282-1PTMoEdES1I.js.map