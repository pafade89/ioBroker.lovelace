"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[69759],{76680:function(e,t,n){function i(e){return void 0===e||Array.isArray(e)?e:[e]}n.d(t,{r:function(){return i}})},55642:function(e,t,n){n.d(t,{h:function(){return d}});var i=n(68990),r=n(71650),a=n(33368),o=n(69205),l=n(70906),u=n(68144),c=n(57835),d=(0,c.XM)(function(e){(0,o.Z)(n,e);var t=(0,l.Z)(n);function n(e){var i;if((0,r.Z)(this,n),(i=t.call(this,e))._element=void 0,e.type!==c.pX.CHILD)throw new Error("dynamicElementDirective can only be used in content bindings");return i}return(0,a.Z)(n,[{key:"update",value:function(e,t){var n=this,r=(0,i.Z)(t,2),a=r[0],o=r[1];return this._element&&this._element.localName===a?(o&&Object.entries(o).forEach((function(e){var t=(0,i.Z)(e,2),r=t[0],a=t[1];n._element[r]=a})),u.Jb):this.render(a,o)}},{key:"render",value:function(e,t){var n=this;return this._element=document.createElement(e),t&&Object.entries(t).forEach((function(e){var t=(0,i.Z)(e,2),r=t[0],a=t[1];n._element[r]=a})),this._element}}]),n}(c.Xe))},35703:function(e,t,n){var i,r,a,o=n(53709),l=n(99312),u=n(81043),c=n(88962),d=n(33368),s=n(71650),h=n(82390),f=n(69205),v=n(70906),m=n(91808),b=n(68144),y=n(79932),p=n(14516),k=n(47181),_=n(84627);n(74535),(0,m.Z)([(0,y.Mo)("ha-entities-picker")],(function(e,t){var n,m,g=function(t){(0,f.Z)(i,t);var n=(0,v.Z)(i);function i(){var t;(0,s.Z)(this,i);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=n.call.apply(n,[this].concat(a)),e((0,h.Z)(t)),t}return(0,d.Z)(i)}(t);return{F:g,d:[{kind:"field",decorators:[(0,y.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Array})],key:"value",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[(0,y.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Array,attribute:"include-unit-of-measurement"})],key:"includeUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Array,attribute:"include-entities"})],key:"includeEntities",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Array,attribute:"exclude-entities"})],key:"excludeEntities",value:void 0},{kind:"field",decorators:[(0,y.Cb)({attribute:"picked-entity-label"})],key:"pickedEntityLabel",value:void 0},{kind:"field",decorators:[(0,y.Cb)({attribute:"pick-entity-label"})],key:"pickEntityLabel",value:void 0},{kind:"field",decorators:[(0,y.Cb)()],key:"entityFilter",value:void 0},{kind:"method",key:"render",value:function(){var e=this;if(!this.hass)return b.Ld;var t=this._currentEntities;return(0,b.dy)(i||(i=(0,c.Z)([" ",' <div> <ha-entity-picker allow-custom-entity .hass="','" .includeDomains="','" .excludeDomains="','" .includeEntities="','" .excludeEntities="','" .includeDeviceClasses="','" .includeUnitOfMeasurement="','" .entityFilter="','" .label="','" .helper="','" .disabled="','" .required="','" @value-changed="','"></ha-entity-picker> </div> '])),t.map((function(t){return(0,b.dy)(r||(r=(0,c.Z)([' <div> <ha-entity-picker allow-custom-entity .curValue="','" .hass="','" .includeDomains="','" .excludeDomains="','" .includeEntities="','" .excludeEntities="','" .includeDeviceClasses="','" .includeUnitOfMeasurement="','" .entityFilter="','" .value="','" .label="','" .disabled="','" @value-changed="','"></ha-entity-picker> </div> '])),t,e.hass,e.includeDomains,e.excludeDomains,e.includeEntities,e.excludeEntities,e.includeDeviceClasses,e.includeUnitOfMeasurement,e._getEntityFilter(e.value,e.entityFilter),t,e.pickedEntityLabel,e.disabled,e._entityChanged)})),this.hass,this.includeDomains,this.excludeDomains,this.includeEntities,this.excludeEntities,this.includeDeviceClasses,this.includeUnitOfMeasurement,this._getEntityFilter(this.value,this.entityFilter),this.pickEntityLabel,this.helper,this.disabled,this.required&&!t.length,this._addEntity)}},{kind:"field",key:"_getEntityFilter",value:function(){return(0,p.Z)((function(e,t){return function(n){return(!e||!e.includes(n.entity_id))&&(!t||t(n))}}))}},{kind:"get",key:"_currentEntities",value:function(){return this.value||[]}},{kind:"method",key:"_updateEntities",value:(m=(0,u.Z)((0,l.Z)().mark((function e(t){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.value=t,(0,k.B)(this,"value-changed",{value:t});case 2:case"end":return e.stop()}}),e,this)}))),function(e){return m.apply(this,arguments)})},{kind:"method",key:"_entityChanged",value:function(e){e.stopPropagation();var t=e.currentTarget.curValue,n=e.detail.value;if(n!==t&&(void 0===n||(0,_.T)(n))){var i=this._currentEntities;n&&!i.includes(n)?this._updateEntities(i.map((function(e){return e===t?n:e}))):this._updateEntities(i.filter((function(e){return e!==t})))}}},{kind:"method",key:"_addEntity",value:(n=(0,u.Z)((0,l.Z)().mark((function e(t){var n,i;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stopPropagation(),n=t.detail.value){e.next=4;break}return e.abrupt("return");case 4:if(t.currentTarget.value="",n){e.next=7;break}return e.abrupt("return");case 7:if(!(i=this._currentEntities).includes(n)){e.next=10;break}return e.abrupt("return");case 10:this._updateEntities([].concat((0,o.Z)(i),[n]));case 11:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{kind:"field",static:!0,key:"styles",value:function(){return(0,b.iv)(a||(a=(0,c.Z)(["div{margin-top:8px}"])))}}]}}),b.oi)},68331:function(e,t,n){var i,r,a,o,l,u,c=n(93359),d=n(68990),s=n(88962),h=n(99312),f=n(40039),v=n(81043),m=n(33368),b=n(71650),y=n(82390),p=n(69205),k=n(70906),_=n(91808),g=n(88771),Z=n(47838),C=n(68144),E=n(79932),P=n(55642),x=n(47181),w=(n(9381),n(25727),{boolean:function(){return Promise.all([n.e(41985),n.e(65978)]).then(n.bind(n,65978))},constant:function(){return n.e(60409).then(n.bind(n,60409))},float:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(43890)]).then(n.bind(n,96272))},grid:function(){return n.e(56641).then(n.bind(n,56641))},expandable:function(){return n.e(92670).then(n.bind(n,92670))},integer:function(){return Promise.all([n.e(2185),n.e(39975),n.e(97215),n.e(6971),n.e(38406),n.e(70588),n.e(39715)]).then(n.bind(n,39715))},multi_select:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(79071),n.e(63436),n.e(99608),n.e(65666),n.e(41985),n.e(30110),n.e(86823)]).then(n.bind(n,86823))},positive_time_period_dict:function(){return Promise.all([n.e(46992),n.e(79071),n.e(63436),n.e(99608),n.e(65666),n.e(75943),n.e(55105)]).then(n.bind(n,91267))},select:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(79071),n.e(63436),n.e(99608),n.e(65666),n.e(75943),n.e(2185),n.e(7270),n.e(41985),n.e(70632),n.e(37732),n.e(26272),n.e(59221)]).then(n.bind(n,59221))},string:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(72521)]).then(n.bind(n,37660))}}),O=function(e,t){return e?t.name?e[t.name]:e:null};(0,_.Z)([(0,E.Mo)("ha-form")],(function(e,t){var n,_=function(t){(0,p.Z)(i,t);var n=(0,k.Z)(i);function i(){var t;(0,b.Z)(this,i);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=n.call.apply(n,[this].concat(a)),e((0,y.Z)(t)),t}return(0,m.Z)(i)}(t);return{F:_,d:[{kind:"field",decorators:[(0,E.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,E.Cb)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,E.Cb)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,E.Cb)()],key:"error",value:void 0},{kind:"field",decorators:[(0,E.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,E.Cb)()],key:"computeError",value:void 0},{kind:"field",decorators:[(0,E.Cb)()],key:"computeLabel",value:void 0},{kind:"field",decorators:[(0,E.Cb)()],key:"computeHelper",value:void 0},{kind:"field",decorators:[(0,E.Cb)()],key:"localizeValue",value:void 0},{kind:"method",key:"focus",value:(n=(0,v.Z)((0,h.Z)().mark((function e(){var t,n,i,r;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateComplete;case 2:if(t=this.renderRoot.querySelector(".root")){e.next=5;break}return e.abrupt("return");case 5:n=(0,f.Z)(t.children),e.prev=6,n.s();case 8:if((i=n.n()).done){e.next=18;break}if("HA-ALERT"===(r=i.value).tagName){e.next=16;break}if(!(r instanceof C.fl)){e.next=14;break}return e.next=14,r.updateComplete;case 14:return r.focus(),e.abrupt("break",18);case 16:e.next=8;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),n.e(e.t0);case 23:return e.prev=23,n.f(),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])}))),function(){return n.apply(this,arguments)})},{kind:"method",key:"willUpdate",value:function(e){e.has("schema")&&this.schema&&this.schema.forEach((function(e){var t;"selector"in e||null===(t=w[e.type])||void 0===t||t.call(w)}))}},{kind:"method",key:"render",value:function(){var e=this;return(0,C.dy)(i||(i=(0,s.Z)([' <div class="root" part="root"> '," "," </div> "])),this.error&&this.error.base?(0,C.dy)(r||(r=(0,s.Z)([' <ha-alert alert-type="error"> '," </ha-alert> "])),this._computeError(this.error.base,this.schema)):"",this.schema.map((function(t){var n=function(e,t){return e&&t.name?e[t.name]:null}(e.error,t);return(0,C.dy)(a||(a=(0,s.Z)([" "," "," "])),n?(0,C.dy)(o||(o=(0,s.Z)([' <ha-alert own-margin alert-type="error"> '," </ha-alert> "])),e._computeError(n,t)):"","selector"in t?(0,C.dy)(l||(l=(0,s.Z)(['<ha-selector .schema="','" .hass="','" .name="','" .selector="','" .value="','" .label="','" .disabled="','" .placeholder="','" .helper="','" .localizeValue="','" .required="','" .context="','"></ha-selector>'])),t,e.hass,t.name,t.selector,O(e.data,t),e._computeLabel(t,e.data),t.disabled||e.disabled||!1,t.required?"":t.default,e._computeHelper(t),e.localizeValue,t.required||!1,e._generateContext(t)):(0,P.h)("ha-form-".concat(t.type),{schema:t,data:O(e.data,t),label:e._computeLabel(t,e.data),helper:e._computeHelper(t),disabled:e.disabled||t.disabled||!1,hass:e.hass,computeLabel:e.computeLabel,computeHelper:e.computeHelper,context:e._generateContext(t)}))})))}},{kind:"method",key:"_generateContext",value:function(e){if(e.context){for(var t={},n=0,i=Object.entries(e.context);n<i.length;n++){var r=(0,d.Z)(i[n],2),a=r[0],o=r[1];t[a]=this.data[o]}return t}}},{kind:"method",key:"createRenderRoot",value:function(){var e=this,t=(0,g.Z)((0,Z.Z)(_.prototype),"createRenderRoot",this).call(this);return t.addEventListener("value-changed",(function(t){t.stopPropagation();var n=t.target.schema,i=n.name?(0,c.Z)({},n.name,t.detail.value):t.detail.value;(0,x.B)(e,"value-changed",{value:Object.assign(Object.assign({},e.data),i)})})),t}},{kind:"method",key:"_computeLabel",value:function(e,t){return this.computeLabel?this.computeLabel(e,t):e?e.name:""}},{kind:"method",key:"_computeHelper",value:function(e){return this.computeHelper?this.computeHelper(e):""}},{kind:"method",key:"_computeError",value:function(e,t){return this.computeError?this.computeError(e,t):e}},{kind:"get",static:!0,key:"styles",value:function(){return(0,C.iv)(u||(u=(0,s.Z)([".root>*{display:block}.root>:not([own-margin]):not(:last-child){margin-bottom:24px}ha-alert[own-margin]{margin-bottom:4px}"])))}}]}}),C.oi)},25727:function(e,t,n){var i,r=n(88962),a=n(93359),o=n(99312),l=n(81043),u=n(33368),c=n(71650),d=n(82390),s=n(69205),h=n(70906),f=n(91808),v=n(68144),m=n(79932),b=n(14516),y=n(55642),p=n(33855),k={action:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(79071),n.e(3298),n.e(63436),n.e(99608),n.e(65666),n.e(75943),n.e(2185),n.e(7270),n.e(41985),n.e(23536),n.e(77426),n.e(66074),n.e(18891),n.e(81312),n.e(49706),n.e(74535),n.e(3143),n.e(47772),n.e(18900),n.e(54070),n.e(44429),n.e(43909)]).then(n.bind(n,73975))},addon:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(79071),n.e(2185),n.e(7270),n.e(4233),n.e(19975)]).then(n.bind(n,17165))},area:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(79071),n.e(2185),n.e(7270),n.e(5860)]).then(n.bind(n,68610))},attribute:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(79071),n.e(2185),n.e(7270),n.e(23536),n.e(44703),n.e(31601)]).then(n.bind(n,31601))},assist_pipeline:function(){return Promise.all([n.e(46992),n.e(79071),n.e(63436),n.e(99608),n.e(65666),n.e(75943),n.e(64721)]).then(n.bind(n,17238))},boolean:function(){return n.e(71927).then(n.bind(n,71927))},color_rgb:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(62361)]).then(n.bind(n,23512))},config_entry:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(79071),n.e(2185),n.e(7270),n.e(74903)]).then(n.bind(n,99244))},conversation_agent:function(){return Promise.all([n.e(46992),n.e(79071),n.e(63436),n.e(99608),n.e(65666),n.e(75943),n.e(10272)]).then(n.bind(n,67954))},constant:function(){return n.e(4276).then(n.bind(n,4276))},date:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(23536),n.e(94988)]).then(n.bind(n,78191))},datetime:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(79071),n.e(63436),n.e(99608),n.e(65666),n.e(75943),n.e(23536),n.e(85066),n.e(84652)]).then(n.bind(n,9039))},device:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(79071),n.e(2185),n.e(7270),n.e(27206)]).then(n.bind(n,68183))},duration:function(){return Promise.all([n.e(46992),n.e(79071),n.e(63436),n.e(99608),n.e(65666),n.e(75943),n.e(81516)]).then(n.bind(n,75054))},entity:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(79071),n.e(2185),n.e(7270),n.e(10865),n.e(81312),n.e(49706),n.e(74535),n.e(3143),n.e(47772),n.e(54582)]).then(n.bind(n,1987))},statistic:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(79071),n.e(2185),n.e(7270),n.e(49804),n.e(81312),n.e(49706),n.e(3143),n.e(47772),n.e(13927),n.e(12030)]).then(n.bind(n,48570))},file:function(){return Promise.all([n.e(31338),n.e(20549)]).then(n.bind(n,20549))},language:function(){return Promise.all([n.e(46992),n.e(79071),n.e(63436),n.e(99608),n.e(65666),n.e(75943),n.e(23536),n.e(16754)]).then(n.bind(n,20184))},navigation:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(79071),n.e(2185),n.e(7270),n.e(18521),n.e(81312),n.e(49261),n.e(64754)]).then(n.bind(n,64754))},number:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(2185),n.e(39975),n.e(97215),n.e(6971),n.e(38406),n.e(70588),n.e(52226)]).then(n.bind(n,65353))},object:function(){return Promise.all([n.e(77426),n.e(81312),n.e(18900),n.e(35537)]).then(n.bind(n,59204))},select:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(79071),n.e(63436),n.e(99608),n.e(65666),n.e(75943),n.e(2185),n.e(7270),n.e(41985),n.e(70632),n.e(37732),n.e(26272)]).then(n.bind(n,26272))},state:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(79071),n.e(2185),n.e(7270),n.e(23536),n.e(8453),n.e(49706),n.e(85234)]).then(n.bind(n,85234))},backup_location:function(){return Promise.all([n.e(46992),n.e(79071),n.e(63436),n.e(99608),n.e(65666),n.e(75943),n.e(70955)]).then(n.bind(n,38204))},stt:function(){return Promise.all([n.e(46992),n.e(79071),n.e(63436),n.e(99608),n.e(65666),n.e(75943),n.e(69311)]).then(n.bind(n,53978))},target:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(79071),n.e(3298),n.e(99608),n.e(2185),n.e(7270),n.e(33829),n.e(56984),n.e(81312),n.e(49706),n.e(74535),n.e(3143),n.e(47772),n.e(8395),n.e(34871)]).then(n.bind(n,66711))},template:function(){return Promise.all([n.e(81312),n.e(51889)]).then(n.bind(n,56097))},text:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(5812)]).then(n.bind(n,44117))},time:function(){return Promise.all([n.e(46992),n.e(79071),n.e(63436),n.e(99608),n.e(65666),n.e(75943),n.e(85066),n.e(28457)]).then(n.bind(n,77646))},icon:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(79071),n.e(2185),n.e(7270),n.e(72593),n.e(81312),n.e(49706),n.e(47772),n.e(53862)]).then(n.bind(n,53862))},media:function(){return n.e(44258).then(n.bind(n,44258))},theme:function(){return Promise.all([n.e(46992),n.e(79071),n.e(63436),n.e(99608),n.e(65666),n.e(75943),n.e(94781)]).then(n.bind(n,93476))},tts:function(){return Promise.all([n.e(46992),n.e(79071),n.e(63436),n.e(99608),n.e(65666),n.e(75943),n.e(39633)]).then(n.bind(n,34651))},tts_voice:function(){return Promise.all([n.e(46992),n.e(79071),n.e(63436),n.e(99608),n.e(65666),n.e(75943),n.e(7286)]).then(n.bind(n,57757))},location:function(){return Promise.all([n.e(13786),n.e(4439)]).then(n.bind(n,22821))},color_temp:function(){return Promise.all([n.e(2185),n.e(39975),n.e(97215),n.e(6971),n.e(38406),n.e(70588),n.e(81312),n.e(42608)]).then(n.bind(n,63958))},ui_action:function(){return Promise.all([n.e(46992),n.e(31338),n.e(42977),n.e(79071),n.e(2185),n.e(7270),n.e(41985),n.e(33829),n.e(77426),n.e(17980),n.e(81312),n.e(18900),n.e(49261),n.e(26431),n.e(27029)]).then(n.bind(n,13239))},ui_color:function(){return Promise.all([n.e(46992),n.e(79071),n.e(63436),n.e(99608),n.e(65666),n.e(75943),n.e(27746)]).then(n.bind(n,67165))}},_=new Set(["ui-action","ui-color"]);(0,f.Z)([(0,m.Mo)("ha-selector")],(function(e,t){var n,f=function(t){(0,s.Z)(i,t);var n=(0,h.Z)(i);function i(){var t;(0,c.Z)(this,i);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=n.call.apply(n,[this].concat(a)),e((0,d.Z)(t)),t}return(0,u.Z)(i)}(t);return{F:f,d:[{kind:"field",decorators:[(0,m.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,m.Cb)()],key:"name",value:void 0},{kind:"field",decorators:[(0,m.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,m.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,m.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,m.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,m.Cb)()],key:"localizeValue",value:void 0},{kind:"field",decorators:[(0,m.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,m.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,m.Cb)({type:Boolean})],key:"required",value:function(){return!0}},{kind:"field",decorators:[(0,m.Cb)()],key:"context",value:void 0},{kind:"method",key:"focus",value:(n=(0,l.Z)((0,o.Z)().mark((function e(){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateComplete;case 2:null===(t=this.renderRoot.querySelector("#selector"))||void 0===t||t.focus();case 3:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{kind:"get",key:"_type",value:function(){var e=Object.keys(this.selector)[0];return _.has(e)?e.replace("-","_"):e}},{kind:"method",key:"willUpdate",value:function(e){var t;e.has("selector")&&this.selector&&(null===(t=k[this._type])||void 0===t||t.call(k))}},{kind:"field",key:"_handleLegacySelector",value:function(){var e=this;return(0,b.Z)((function(t){if("entity"in t)return(0,p.CM)(t);if("device"in t)return(0,p.c9)(t);var n=Object.keys(e.selector)[0];return _.has(n)?(0,a.Z)({},n.replace("-","_"),t[n]):t}))}},{kind:"method",key:"render",value:function(){return(0,v.dy)(i||(i=(0,r.Z)([" "," "])),(0,y.h)("ha-selector-".concat(this._type),{hass:this.hass,name:this.name,selector:this._handleLegacySelector(this.selector),value:this.value,label:this.label,placeholder:this.placeholder,disabled:this.disabled,required:this.required,helper:this.helper,context:this.context,localizeValue:this.localizeValue,id:"selector"}))}}]}}),v.oi)},33855:function(e,t,n){n.d(t,{CM:function(){return b},aV:function(){return s},c9:function(){return y},lE:function(){return v},lV:function(){return m},xO:function(){return d}});var i=n(23370),r=n(76680),a=n(22311),o=n(40095),l=n(57292),u=["domain","integration","device_class"],c=["integration","manufacturer","model"],d=function(e,t,n,i,r,a){var o=[],l=[];return Object.values(n).forEach((function(n){n.area_id===t&&h(e,Object.values(i),n,r,a)&&l.push(n.id)})),Object.values(i).forEach((function(n){n.area_id===t&&f(e.states[n.entity_id],r,a)&&o.push(n.entity_id)})),{devices:l,entities:o}},s=function(e,t,n,i,r){var a=[];return Object.values(n).forEach((function(n){n.device_id===t&&f(e.states[n.entity_id],i,r)&&a.push(n.entity_id)})),{entities:a}},h=function(e,t,n,i,a){var o,u,c=a?(0,l.HP)(a,t):void 0;return!(null!==(o=i.target)&&void 0!==o&&o.device&&!(0,r.r)(i.target.device).some((function(e){return v(e,n,c)})))&&(null===(u=i.target)||void 0===u||!u.entity||t.filter((function(e){return e.device_id===n.id})).some((function(t){var n=e.states[t.entity_id];return f(n,i,a)})))},f=function(e,t,n){var i;return null===(i=t.target)||void 0===i||!i.entity||(0,r.r)(t.target.entity).some((function(t){return m(t,e,n)}))},v=function(e,t,n){var i,r=e.manufacturer,a=e.model,o=e.integration;if(r&&t.manufacturer!==r)return!1;if(a&&t.model!==a)return!1;if(o&&n&&(null==n||null===(i=n[t.id])||void 0===i||!i.includes(o)))return!1;return!0},m=function(e,t,n){var i,l=e.domain,u=e.device_class,c=e.supported_features,d=e.integration;if(l){var s=(0,a.N)(t);if(Array.isArray(l)?!l.includes(s):s!==l)return!1}if(u){var h=t.attributes.device_class;if(h&&Array.isArray(u)?!u.includes(h):h!==u)return!1}return!(c&&!(0,r.r)(c).some((function(e){return(0,o.e)(t,e)})))&&(!d||(null==n||null===(i=n[t.entity_id])||void 0===i?void 0:i.domain)===d)},b=function(e){if(!e.entity)return{entity:null};if("filter"in e.entity)return e;var t=e.entity,n=t.domain,r=t.integration,a=t.device_class,o=(0,i.Z)(t,u);return n||r||a?{entity:Object.assign(Object.assign({},o),{},{filter:{domain:n,integration:r,device_class:a}})}:{entity:o}},y=function(e){if(!e.device)return{device:null};if("filter"in e.device)return e;var t=e.device,n=t.integration,r=t.manufacturer,a=t.model,o=(0,i.Z)(t,c);return n||r||a?{device:Object.assign(Object.assign({},o),{},{filter:{integration:n,manufacturer:r,model:a}})}:{device:o}}},69759:function(e,t,n){n.r(t),n.d(t,{HuiCalendarCardEditor:function(){return _}});var i,r,a=n(88962),o=n(33368),l=n(71650),u=n(82390),c=n(69205),d=n(70906),s=n(91808),h=n(68144),f=n(79932),v=n(14516),m=n(93088),b=n(47181),y=(n(35703),n(68331),n(98346)),p=(0,m.f0)(y.I,(0,m.Ry)({title:(0,m.jt)((0,m.G0)([(0,m.Z_)(),(0,m.O7)()])),initial_view:(0,m.jt)((0,m.Z_)()),theme:(0,m.jt)((0,m.Z_)()),entities:(0,m.IX)((0,m.Z_)())})),k=["dayGridMonth","dayGridDay","listWeek"],_=(0,s.Z)([(0,f.Mo)("hui-calendar-card-editor")],(function(e,t){var n=function(t){(0,c.Z)(i,t);var n=(0,d.Z)(i);function i(){var t;(0,l.Z)(this,i);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=n.call.apply(n,[this].concat(a)),e((0,u.Z)(t)),t}return(0,o.Z)(i)}(t);return{F:n,d:[{kind:"field",decorators:[(0,f.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,f.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,m.hu)(e,p),this._config=e}},{kind:"field",key:"_schema",value:function(){return(0,v.Z)((function(e){return[{name:"",type:"grid",schema:[{name:"title",required:!1,selector:{text:{}}},{name:"initial_view",required:!1,selector:{select:{options:k.map((function(t){return{value:t,label:e("ui.panel.lovelace.editor.card.calendar.views.".concat(t))}}))}}}]},{name:"theme",required:!1,selector:{theme:{}}}]}))}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return h.Ld;var e=this._schema(this.hass.localize),t=Object.assign({initial_view:"dayGridMonth"},this._config);return(0,h.dy)(i||(i=(0,a.Z)([' <ha-form .hass="','" .data="','" .schema="','" .computeLabel="','" @value-changed="','"></ha-form> <h3> ',' </h3> <ha-entities-picker .hass="','" .value="','" .includeDomains="','" @value-changed="','"> </ha-entities-picker> '])),this.hass,t,e,this._computeLabelCallback,this._valueChanged,this.hass.localize("ui.panel.lovelace.editor.card.calendar.calendar_entities")+" ("+this.hass.localize("ui.panel.lovelace.editor.card.config.required")+")",this.hass,this._config.entities,["calendar"],this._entitiesChanged)}},{kind:"method",key:"_valueChanged",value:function(e){var t=e.detail.value;(0,b.B)(this,"config-changed",{config:t})}},{kind:"method",key:"_entitiesChanged",value:function(e){var t=Object.assign(Object.assign({},this._config),{},{entities:e.detail.value});(0,b.B)(this,"config-changed",{config:t})}},{kind:"field",key:"_computeLabelCallback",value:function(){var e=this;return function(t){return"title"===t.name?e.hass.localize("ui.panel.lovelace.editor.card.generic.title"):"theme"===t.name?"".concat(e.hass.localize("ui.panel.lovelace.editor.card.generic.theme")," (").concat(e.hass.localize("ui.panel.lovelace.editor.card.config.optional"),")"):e.hass.localize("ui.panel.lovelace.editor.card.calendar.".concat(t.name))}}},{kind:"field",static:!0,key:"styles",value:function(){return(0,h.iv)(r||(r=(0,a.Z)(["ha-form{display:block;overflow:auto}"])))}}]}}),h.oi)},98346:function(e,t,n){n.d(t,{I:function(){return r}});var i=n(93088),r=(0,i.Ry)({type:(0,i.Z_)(),view_layout:(0,i.Yj)()})}}]);
//# sourceMappingURL=69759-LB2BAaCsGJs.js.map