"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[13930],{76680:(e,t,i)=>{function a(e){return void 0===e||Array.isArray(e)?e:[e]}i.d(t,{r:()=>a})},55642:(e,t,i)=>{i.d(t,{h:()=>r});var a=i(68144),n=i(57835);const r=(0,n.XM)(class extends n.Xe{constructor(e){if(super(e),this._element=void 0,e.type!==n.pX.CHILD)throw new Error("dynamicElementDirective can only be used in content bindings")}update(e,[t,i]){return this._element&&this._element.localName===t?(i&&Object.entries(i).forEach((([e,t])=>{this._element[e]=t})),a.Jb):this.render(t,i)}render(e,t){return this._element=document.createElement(e),t&&Object.entries(t).forEach((([e,t])=>{this._element[e]=t})),this._element}})},68331:(e,t,i)=>{var a=i(17463),n=i(34541),r=i(47838),o=i(68144),l=i(79932),s=i(55642),d=i(47181);i(9381),i(25727);const c={boolean:()=>Promise.all([i.e(41985),i.e(65978)]).then(i.bind(i,65978)),constant:()=>i.e(60409).then(i.bind(i,60409)),float:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(43890)]).then(i.bind(i,96272)),grid:()=>i.e(56641).then(i.bind(i,56641)),expandable:()=>i.e(92670).then(i.bind(i,92670)),integer:()=>Promise.all([i.e(2185),i.e(39975),i.e(97215),i.e(6971),i.e(38406),i.e(70588),i.e(39715)]).then(i.bind(i,39715)),multi_select:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(63436),i.e(99608),i.e(65666),i.e(41985),i.e(32140)]).then(i.bind(i,86823)),positive_time_period_dict:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(55105)]).then(i.bind(i,91267)),select:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(2185),i.e(7270),i.e(41985),i.e(70632),i.e(37732),i.e(59221)]).then(i.bind(i,59221)),string:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(72521)]).then(i.bind(i,6782))},u=(e,t)=>e?t.name?e[t.name]:e:null;(0,a.Z)([(0,l.Mo)("ha-form")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"error",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)()],key:"computeError",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"computeLabel",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"computeHelper",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"localizeValue",value:void 0},{kind:"method",key:"focus",value:async function(){await this.updateComplete;const e=this.renderRoot.querySelector(".root");if(e)for(const t of e.children)if("HA-ALERT"!==t.tagName){t instanceof o.fl&&await t.updateComplete,t.focus();break}}},{kind:"method",key:"willUpdate",value:function(e){e.has("schema")&&this.schema&&this.schema.forEach((e=>{var t;"selector"in e||null===(t=c[e.type])||void 0===t||t.call(c)}))}},{kind:"method",key:"render",value:function(){return o.dy` <div class="root" part="root"> ${this.error&&this.error.base?o.dy` <ha-alert alert-type="error"> ${this._computeError(this.error.base,this.schema)} </ha-alert> `:""} ${this.schema.map((e=>{const t=((e,t)=>e&&t.name?e[t.name]:null)(this.error,e);return o.dy` ${t?o.dy` <ha-alert own-margin alert-type="error"> ${this._computeError(t,e)} </ha-alert> `:""} ${"selector"in e?o.dy`<ha-selector .schema="${e}" .hass="${this.hass}" .name="${e.name}" .selector="${e.selector}" .value="${u(this.data,e)}" .label="${this._computeLabel(e,this.data)}" .disabled="${e.disabled||this.disabled||!1}" .placeholder="${e.required?"":e.default}" .helper="${this._computeHelper(e)}" .localizeValue="${this.localizeValue}" .required="${e.required||!1}" .context="${this._generateContext(e)}"></ha-selector>`:(0,s.h)(`ha-form-${e.type}`,{schema:e,data:u(this.data,e),label:this._computeLabel(e,this.data),helper:this._computeHelper(e),disabled:this.disabled||e.disabled||!1,hass:this.hass,computeLabel:this.computeLabel,computeHelper:this.computeHelper,context:this._generateContext(e)})} `}))} </div> `}},{kind:"method",key:"_generateContext",value:function(e){if(!e.context)return;const t={};for(const[i,a]of Object.entries(e.context))t[i]=this.data[a];return t}},{kind:"method",key:"createRenderRoot",value:function(){const e=(0,n.Z)((0,r.Z)(i.prototype),"createRenderRoot",this).call(this);return e.addEventListener("value-changed",(e=>{e.stopPropagation();const t=e.target.schema,i=t.name?{[t.name]:e.detail.value}:e.detail.value;(0,d.B)(this,"value-changed",{value:{...this.data,...i}})})),e}},{kind:"method",key:"_computeLabel",value:function(e,t){return this.computeLabel?this.computeLabel(e,t):e?e.name:""}},{kind:"method",key:"_computeHelper",value:function(e){return this.computeHelper?this.computeHelper(e):""}},{kind:"method",key:"_computeError",value:function(e,t){return this.computeError?this.computeError(e,t):e}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`.root>*{display:block}.root>:not([own-margin]):not(:last-child){margin-bottom:24px}ha-alert[own-margin]{margin-bottom:4px}`}}]}}),o.oi)},25727:(e,t,i)=>{var a=i(17463),n=i(68144),r=i(79932),o=i(14516),l=i(55642),s=i(33855);const d={action:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(2185),i.e(7270),i.e(41985),i.e(53430),i.e(77426),i.e(66074),i.e(37693),i.e(49706),i.e(74535),i.e(47772),i.e(48763),i.e(16731),i.e(44258),i.e(3233),i.e(83166)]).then(i.bind(i,73975)),addon:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(29946),i.e(17165)]).then(i.bind(i,17165)),area:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(78543),i.e(68610)]).then(i.bind(i,68610)),attribute:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(53430),i.e(87688),i.e(29461)]).then(i.bind(i,29461)),assist_pipeline:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(64721)]).then(i.bind(i,17238)),boolean:()=>i.e(71927).then(i.bind(i,71927)),color_rgb:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(62361)]).then(i.bind(i,23512)),config_entry:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(75970),i.e(99244)]).then(i.bind(i,99244)),conversation_agent:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(10272)]).then(i.bind(i,67954)),constant:()=>i.e(4276).then(i.bind(i,4276)),date:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(53430),i.e(94988)]).then(i.bind(i,78191)),datetime:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(53430),i.e(9039),i.e(40341)]).then(i.bind(i,9039)),device:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(78543),i.e(68183)]).then(i.bind(i,68183)),duration:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(81516)]).then(i.bind(i,75054)),entity:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(78543),i.e(49706),i.e(74535),i.e(47772),i.e(14556),i.e(77192)]).then(i.bind(i,1987)),statistic:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(89735),i.e(49706),i.e(47772),i.e(13927),i.e(33663)]).then(i.bind(i,48570)),file:()=>Promise.all([i.e(31338),i.e(20549)]).then(i.bind(i,20549)),language:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(53430),i.e(16754)]).then(i.bind(i,20184)),navigation:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(170),i.e(49261),i.e(89977)]).then(i.bind(i,64754)),number:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(39975),i.e(97215),i.e(6971),i.e(38406),i.e(70588),i.e(52226)]).then(i.bind(i,65353)),object:()=>Promise.all([i.e(77426),i.e(59204)]).then(i.bind(i,59204)),select:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(2185),i.e(7270),i.e(41985),i.e(70632),i.e(37732),i.e(26272)]).then(i.bind(i,26272)),state:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(53430),i.e(87887),i.e(49706),i.e(69950)]).then(i.bind(i,69950)),backup_location:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(70955)]).then(i.bind(i,38204)),stt:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(69311)]).then(i.bind(i,53978)),target:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(99608),i.e(2185),i.e(7270),i.e(78543),i.e(59069),i.e(332),i.e(49706),i.e(74535),i.e(47772),i.e(14556),i.e(63681),i.e(34871)]).then(i.bind(i,66711)),template:()=>i.e(56097).then(i.bind(i,56097)),text:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(5812)]).then(i.bind(i,44117)),time:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(41319)]).then(i.bind(i,77646)),icon:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(82415),i.e(49706),i.e(47772),i.e(53862)]).then(i.bind(i,53862)),media:()=>Promise.all([i.e(44258),i.e(62720)]).then(i.bind(i,44258)),theme:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(94781)]).then(i.bind(i,93476)),tts:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(39633)]).then(i.bind(i,34651)),tts_voice:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(7286)]).then(i.bind(i,57757)),location:()=>Promise.all([i.e(48456),i.e(22821)]).then(i.bind(i,22821)),color_temp:()=>Promise.all([i.e(2185),i.e(39975),i.e(97215),i.e(6971),i.e(38406),i.e(70588),i.e(63958)]).then(i.bind(i,63958)),ui_action:()=>Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(2185),i.e(7270),i.e(41985),i.e(77426),i.e(45311),i.e(48763),i.e(49261),i.e(45767)]).then(i.bind(i,13239)),ui_color:()=>Promise.all([i.e(46992),i.e(63436),i.e(99608),i.e(65666),i.e(75943),i.e(27746)]).then(i.bind(i,67165))},c=new Set(["ui-action","ui-color"]);(0,a.Z)([(0,r.Mo)("ha-selector")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"name",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"localizeValue",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[(0,r.Cb)()],key:"context",value:void 0},{kind:"method",key:"focus",value:async function(){var e;await this.updateComplete,null===(e=this.renderRoot.querySelector("#selector"))||void 0===e||e.focus()}},{kind:"get",key:"_type",value:function(){const e=Object.keys(this.selector)[0];return c.has(e)?e.replace("-","_"):e}},{kind:"method",key:"willUpdate",value:function(e){var t;e.has("selector")&&this.selector&&(null===(t=d[this._type])||void 0===t||t.call(d))}},{kind:"field",key:"_handleLegacySelector",value(){return(0,o.Z)((e=>{if("entity"in e)return(0,s.CM)(e);if("device"in e)return(0,s.c9)(e);const t=Object.keys(this.selector)[0];return c.has(t)?{[t.replace("-","_")]:e[t]}:e}))}},{kind:"method",key:"render",value:function(){return n.dy` ${(0,l.h)(`ha-selector-${this._type}`,{hass:this.hass,name:this.name,selector:this._handleLegacySelector(this.selector),value:this.value,label:this.label,placeholder:this.placeholder,disabled:this.disabled,required:this.required,helper:this.helper,context:this.context,localizeValue:this.localizeValue,id:"selector"})} `}}]}}),n.oi)},33855:(e,t,i)=>{i.d(t,{CM:()=>m,aV:()=>s,c9:()=>v,lE:()=>u,lV:()=>h,xO:()=>l});var a=i(76680),n=i(22311),r=i(40095),o=i(57292);const l=(e,t,i,a,n,r)=>{const o=[],l=[];return Object.values(i).forEach((i=>{i.area_id===t&&d(e,Object.values(a),i,n,r)&&l.push(i.id)})),Object.values(a).forEach((i=>{i.area_id===t&&c(e.states[i.entity_id],n,r)&&o.push(i.entity_id)})),{devices:l,entities:o}},s=(e,t,i,a,n)=>{const r=[];return Object.values(i).forEach((i=>{i.device_id===t&&c(e.states[i.entity_id],a,n)&&r.push(i.entity_id)})),{entities:r}},d=(e,t,i,n,r)=>{var l,s;const d=r?(0,o.HP)(r,t):void 0;if(null!==(l=n.target)&&void 0!==l&&l.device&&!(0,a.r)(n.target.device).some((e=>u(e,i,d))))return!1;if(null!==(s=n.target)&&void 0!==s&&s.entity){return t.filter((e=>e.device_id===i.id)).some((t=>{const i=e.states[t.entity_id];return c(i,n,r)}))}return!0},c=(e,t,i)=>{var n;return null===(n=t.target)||void 0===n||!n.entity||(0,a.r)(t.target.entity).some((t=>h(t,e,i)))},u=(e,t,i)=>{const{manufacturer:a,model:n,integration:r}=e;if(a&&t.manufacturer!==a)return!1;if(n&&t.model!==n)return!1;var o;if(r&&i&&(null==i||null===(o=i[t.id])||void 0===o||!o.includes(r)))return!1;return!0},h=(e,t,i)=>{var o;const{domain:l,device_class:s,supported_features:d,integration:c}=e;if(l){const e=(0,n.N)(t);if(Array.isArray(l)?!l.includes(e):e!==l)return!1}if(s){const e=t.attributes.device_class;if(e&&Array.isArray(s)?!s.includes(e):e!==s)return!1}return!(d&&!(0,a.r)(d).some((e=>(0,r.e)(t,e))))&&(!c||(null==i||null===(o=i[t.entity_id])||void 0===o?void 0:o.domain)===c)},m=e=>{if(!e.entity)return{entity:null};if("filter"in e.entity)return e;const{domain:t,integration:i,device_class:a,...n}=e.entity;return t||i||a?{entity:{...n,filter:{domain:t,integration:i,device_class:a}}}:{entity:n}},v=e=>{if(!e.device)return{device:null};if("filter"in e.device)return e;const{integration:t,manufacturer:i,model:a,...n}=e.device;return t||i||a?{device:{...n,filter:{integration:t,manufacturer:i,model:a}}}:{device:n}}},45890:(e,t,i)=>{i.d(t,{A:()=>a});const a=i(68144).iv`.card-config{overflow:auto}ha-switch{padding:16px 6px}.side-by-side{display:flex;align-items:flex-end}.side-by-side>*{flex:1;padding-right:8px}.side-by-side>:last-child{flex:1;padding-right:0}.suffix{margin:0 8px}ha-icon-picker,ha-select,ha-textfield,hui-action-editor{margin-top:8px;display:block}`},13930:(e,t,i)=>{i.r(t),i.d(t,{HuiPictureEntityCardEditor:()=>m});var a=i(17463),n=i(68144),r=i(79932),o=i(38768),l=i(47181),s=(i(68331),i(85677)),d=i(98346),c=i(45890);const u=(0,o.f0)(d.I,(0,o.Ry)({entity:(0,o.jt)((0,o.Z_)()),image:(0,o.jt)((0,o.Z_)()),name:(0,o.jt)((0,o.Z_)()),camera_image:(0,o.jt)((0,o.Z_)()),camera_view:(0,o.jt)((0,o.Z_)()),aspect_ratio:(0,o.jt)((0,o.Z_)()),tap_action:(0,o.jt)(s.C),hold_action:(0,o.jt)(s.C),show_name:(0,o.jt)((0,o.O7)()),show_state:(0,o.jt)((0,o.O7)()),theme:(0,o.jt)((0,o.Z_)())})),h=[{name:"entity",required:!0,selector:{entity:{}}},{name:"name",selector:{text:{}}},{name:"image",selector:{text:{}}},{name:"camera_image",selector:{entity:{domain:"camera"}}},{name:"",type:"grid",schema:[{name:"camera_view",selector:{select:{options:["auto","live"]}}},{name:"aspect_ratio",selector:{text:{}}}]},{name:"",type:"grid",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}}]},{name:"theme",selector:{theme:{}}},{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}}];let m=(0,a.Z)([(0,r.Mo)("hui-picture-entity-card-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,o.hu)(e,u),this._config=e}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return n.Ld;const e={show_state:!0,show_name:!0,camera_view:"auto",...this._config};return n.dy` <ha-form .hass="${this.hass}" .data="${e}" .schema="${h}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> `}},{kind:"method",key:"_valueChanged",value:function(e){(0,l.B)(this,"config-changed",{config:e.detail.value})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"theme":case"tap_action":case"hold_action":return`${this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})`;default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}}},{kind:"field",static:!0,key:"styles",value:()=>c.A}]}}),n.oi)},85677:(e,t,i)=>{i.d(t,{C:()=>u});var a=i(38768);const n=(0,a.Ry)({user:(0,a.Z_)()}),r=(0,a.G0)([(0,a.O7)(),(0,a.Ry)({text:(0,a.jt)((0,a.Z_)()),excemptions:(0,a.jt)((0,a.IX)(n))})]),o=(0,a.Ry)({action:(0,a.i0)("url"),url_path:(0,a.Z_)(),confirmation:(0,a.jt)(r)}),l=(0,a.Ry)({action:(0,a.i0)("call-service"),service:(0,a.Z_)(),service_data:(0,a.jt)((0,a.Ry)()),data:(0,a.jt)((0,a.Ry)()),target:(0,a.jt)((0,a.Ry)({entity_id:(0,a.jt)((0,a.G0)([(0,a.Z_)(),(0,a.IX)((0,a.Z_)())])),device_id:(0,a.jt)((0,a.G0)([(0,a.Z_)(),(0,a.IX)((0,a.Z_)())])),area_id:(0,a.jt)((0,a.G0)([(0,a.Z_)(),(0,a.IX)((0,a.Z_)())]))})),confirmation:(0,a.jt)(r)}),s=(0,a.Ry)({action:(0,a.i0)("navigate"),navigation_path:(0,a.Z_)(),confirmation:(0,a.jt)(r)}),d=(0,a.dt)({action:(0,a.i0)("fire-dom-event")}),c=(0,a.Ry)({action:(0,a.kE)(["none","toggle","more-info","call-service","url","navigate"]),confirmation:(0,a.jt)(r)}),u=(0,a.D8)((e=>{if(e&&"object"==typeof e&&"action"in e)switch(e.action){case"call-service":return l;case"fire-dom-event":return d;case"navigate":return s;case"url":return o}return c}))},98346:(e,t,i)=>{i.d(t,{I:()=>n});var a=i(38768);const n=(0,a.Ry)({type:(0,a.Z_)(),view_layout:(0,a.Yj)()})}}]);
//# sourceMappingURL=13930-rgxNmk4csp4.js.map