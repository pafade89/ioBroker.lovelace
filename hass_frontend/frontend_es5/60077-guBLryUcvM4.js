/*! For license information please see 60077-guBLryUcvM4.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[60077,4600],{58014:function(t,e,i){function n(t,e){if(t.closest)return t.closest(e);for(var i=t;i;){if(o(i,e))return i;i=i.parentElement}return null}function o(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}i.d(e,{oq:function(){return n},wB:function(){return o}})},53918:function(t,e,i){i.r(e),i.d(e,{Button:function(){return d}});var n=i(33368),o=i(71650),s=i(69205),r=i(70906),a=i(87480),l=i(79932),h=i(3071),c=i(3712),d=function(t){(0,s.Z)(i,t);var e=(0,r.Z)(i);function i(){return(0,o.Z)(this,i),e.apply(this,arguments)}return(0,n.Z)(i)}(h.X);d.styles=[c.W],d=(0,a.__decorate)([(0,l.Mo)("mwc-button")],d)},23916:function(t,e,i){i.d(e,{N:function(){return a}});var n,o=i(88962),s=(i(39975),i(9672)),r=i(50856),a=(0,s.k)({_template:(0,r.d)(n||(n=(0,o.Z)(['\n    <style>\n      :host {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0px,0px,0px,0px);\n      }\n    </style>\n    <div aria-live$="[[mode]]">[[_text]]</div>\n']))),is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},timeout:{type:Number,value:150},_text:{type:String,value:""}},created:function(){a.instance||(a.instance=this),document.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(t){this._text="",this.async((function(){this._text=t}),this.timeout)},_onIronAnnounce:function(t){t.detail&&t.detail.text&&this.announce(t.detail.text)}});a.instance=null,a.requestAvailability=function(){a.instance||(a.instance=document.createElement("iron-a11y-announcer")),document.body?document.body.appendChild(a.instance):document.addEventListener("load",(function(){document.body.appendChild(a.instance)}))}},8621:function(t,e,i){i.d(e,{G:function(){return _}});i(39975);var n={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},o={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},s={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},r=/[a-z0-9*]/,a=/U\+/,l=/^arrow/,h=/^space(bar)?/,c=/^escape$/;function d(t,e){var i="";if(t){var n=t.toLowerCase();" "===n||h.test(n)?i="space":c.test(n)?i="esc":1==n.length?e&&!r.test(n)||(i=n):i=l.test(n)?n.replace("arrow",""):"multiply"==n?"*":n}return i}function u(t,e){return t.key?d(t.key,e):t.detail&&t.detail.key?d(t.detail.key,e):(i=t.keyIdentifier,s="",i&&(i in n?s=n[i]:a.test(i)?(i=parseInt(i.replace("U+","0x"),16),s=String.fromCharCode(i).toLowerCase()):s=i.toLowerCase()),s||function(t){var e="";return Number(t)&&(e=t>=65&&t<=90?String.fromCharCode(32+t):t>=112&&t<=123?"f"+(t-112+1):t>=48&&t<=57?String(t-48):t>=96&&t<=105?String(t-96):o[t]),e}(t.keyCode)||"");var i,s}function f(t,e){return u(e,t.hasModifiers)===t.key&&(!t.hasModifiers||!!e.shiftKey==!!t.shiftKey&&!!e.ctrlKey==!!t.ctrlKey&&!!e.altKey==!!t.altKey&&!!e.metaKey==!!t.metaKey)}function p(t){return t.trim().split(" ").map((function(t){return function(t){return 1===t.length?{combo:t,key:t,event:"keydown"}:t.split("+").reduce((function(t,e){var i=e.split(":"),n=i[0],o=i[1];return n in s?(t[s[n]]=!0,t.hasModifiers=!0):(t.key=n,t.event=o||"keydown"),t}),{combo:t.split(":").shift()})}(t)}))}var _={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(t,e){this._imperativeKeyBindings[t]=e,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(t,e){for(var i=p(e),n=0;n<i.length;++n)if(f(i[n],t))return!0;return!1},_collectKeyBindings:function(){var t=this.behaviors.map((function(t){return t.keyBindings}));return-1===t.indexOf(this.keyBindings)&&t.push(this.keyBindings),t},_prepKeyBindings:function(){for(var t in this._keyBindings={},this._collectKeyBindings().forEach((function(t){for(var e in t)this._addKeyBinding(e,t[e])}),this),this._imperativeKeyBindings)this._addKeyBinding(t,this._imperativeKeyBindings[t]);for(var e in this._keyBindings)this._keyBindings[e].sort((function(t,e){var i=t[0].hasModifiers;return i===e[0].hasModifiers?0:i?-1:1}))},_addKeyBinding:function(t,e){p(t).forEach((function(t){this._keyBindings[t.event]=this._keyBindings[t.event]||[],this._keyBindings[t.event].push([t,e])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(t){var e=this._keyBindings[t],i=this._onKeyBindingEvent.bind(this,e);this._boundKeyHandlers.push([this.keyEventTarget,t,i]),this.keyEventTarget.addEventListener(t,i)}),this)},_unlistenKeyEventListeners:function(){for(var t,e,i,n;this._boundKeyHandlers.length;)e=(t=this._boundKeyHandlers.pop())[0],i=t[1],n=t[2],e.removeEventListener(i,n)},_onKeyBindingEvent:function(t,e){if(this.stopKeyboardEventPropagation&&e.stopPropagation(),!e.defaultPrevented)for(var i=0;i<t.length;i++){var n=t[i][0],o=t[i][1];if(f(n,e)&&(this._triggerKeyHandler(n,o,e),e.defaultPrevented))return}},_triggerKeyHandler:function(t,e,i){var n=Object.create(t);n.keyboardEvent=i;var o=new CustomEvent(t.event,{detail:n,cancelable:!0});this[e].call(this,o),o.defaultPrevented&&i.preventDefault()}}},72986:function(t,e,i){i.d(e,{z:function(){return r}});i(39975);var n=i(69491),o=i(74460),s=new Set,r={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(s.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)}),this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&-1===t._interestedResizables.indexOf(this)&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){this._notifyingDescendant?t.stopPropagation():o.my||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=(0,n.vz)(t).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function e(){document.removeEventListener("readystatechange",e),t()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(t){t!==this&&t._findParent()}),this):(s.forEach((function(t){t!==this&&t._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?s.delete(this):s.add(this)}}},45661:function(t,e,i){var n,o=i(88962),s=i(23916),r=i(39975),a=i(69491),l=void 0,h={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},expandSizingTargetForScrollbars:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){return this.fitInto===window?this.fitInto.innerWidth:this.fitInto.getBoundingClientRect().width},get _fitHeight(){return this.fitInto===window?this.fitInto.innerHeight:this.fitInto.getBoundingClientRect().height},get _fitLeft(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().left},get _fitTop(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().top},get _defaultPositionTarget(){var t=(0,a.vz)(this).parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(t=t.host),t},get _localeHorizontalAlign(){if(this._isRTL){if("right"===this.horizontalAlign)return"left";if("left"===this.horizontalAlign)return"right"}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},get _isRTL(){return void 0===this._memoizedIsRTL&&(this._memoizedIsRTL="rtl"==window.getComputedStyle(this).direction),this._memoizedIsRTL},attached:function(){this.positionTarget=this.positionTarget||this._defaultPositionTarget,this.autoFitOnAttach&&("none"===window.getComputedStyle(this).display?setTimeout(function(){this.fit()}.bind(this)):(window.ShadyDOM&&ShadyDOM.flush(),this.fit()))},detached:function(){this.__deferredFit&&(clearTimeout(this.__deferredFit),this.__deferredFit=null)},fit:function(){this.position(),this.constrain(),this.center()},_discoverInfo:function(){if(!this._fitInfo){var t=window.getComputedStyle(this),e=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:"auto"!==t.top?"top":"auto"!==t.bottom?"bottom":null,horizontally:"auto"!==t.left?"left":"auto"!==t.right?"right":null},sizedBy:{height:"none"!==e.maxHeight,width:"none"!==e.maxWidth,minWidth:parseInt(e.minWidth,10)||0,minHeight:parseInt(e.minHeight,10)||0},margin:{top:parseInt(t.marginTop,10)||0,right:parseInt(t.marginRight,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0}}}},resetFit:function(){var t=this._fitInfo||{};for(var e in t.sizerInlineStyle)this.sizingTarget.style[e]=t.sizerInlineStyle[e];for(var e in t.inlineStyle)this.style[e]=t.inlineStyle[e];this._fitInfo=null},refit:function(){var t=this.sizingTarget.scrollLeft,e=this.sizingTarget.scrollTop;this.resetFit(),this.fit(),this.sizingTarget.scrollLeft=t,this.sizingTarget.scrollTop=e},position:function(){if(this.__shouldPosition){this._discoverInfo(),window.ShadyDOM&&window.ShadyDOM.flush(),this.style.position="fixed",this.sizingTarget.style.boxSizing="border-box",this.style.left="0px",this.style.top="0px";var t,e,i,n,o=this.getBoundingClientRect(),s=this.__getNormalizedRect(this.positionTarget),r=this.__getNormalizedRect(this.fitInto);this.expandSizingTargetForScrollbars&&(t=this.sizingTarget.offsetWidth,e=this.sizingTarget.offsetHeight,i=this.sizingTarget.clientWidth,n=this.sizingTarget.clientHeight);var a=this._fitInfo.margin,h={width:o.width+a.left+a.right,height:o.height+a.top+a.bottom},c=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,h,o,s,r),d=c.left+a.left,u=c.top+a.top,f=Math.min(r.right-a.right,d+o.width),p=Math.min(r.bottom-a.bottom,u+o.height);d=Math.max(r.left+a.left,Math.min(d,f-this._fitInfo.sizedBy.minWidth)),u=Math.max(r.top+a.top,Math.min(u,p-this._fitInfo.sizedBy.minHeight));var _=Math.max(f-d,this._fitInfo.sizedBy.minWidth),v=Math.max(p-u,this._fitInfo.sizedBy.minHeight);this.sizingTarget.style.maxWidth=_+"px",this.sizingTarget.style.maxHeight=v+"px";var g=d-o.left,y=u-o.top;if(this.style.left="".concat(g,"px"),this.style.top="".concat(y,"px"),this.expandSizingTargetForScrollbars){var m=this.sizingTarget.offsetHeight,b=m-this.sizingTarget.clientHeight-(e-n);if(b>0){var z=r.height-a.top-a.bottom,w=Math.min(z,v+b);this.sizingTarget.style.maxHeight="".concat(w,"px");var k,x=this.sizingTarget.offsetHeight,T=x-m;"top"===c.verticalAlign?k=y:"middle"===c.verticalAlign?k=y-T/2:"bottom"===c.verticalAlign&&(k=y-T),k=Math.max(r.top+a.top,Math.min(k,r.bottom-a.bottom-x)),this.style.top="".concat(k,"px")}var O=this.sizingTarget.offsetWidth,C=O-this.sizingTarget.clientWidth-(t-i);if(C>0){var E=function(){if(void 0!==l)return l;var t=document.createElement("div");Object.assign(t.style,{overflow:"auto",position:"fixed",left:"0px",top:"0px",maxWidth:"100px",maxHeight:"100px"});var e=document.createElement("div");return e.style.width="200px",e.style.height="200px",t.appendChild(e),document.body.appendChild(t),l=Math.abs(t.offsetWidth-100)>1?t.offsetWidth-t.clientWidth:0,document.body.removeChild(t),l}(),A=r.width-a.left-a.right,R=Math.min(A,_+C-E);this.sizingTarget.style.maxWidth="".concat(R,"px");var B,N=this.sizingTarget.offsetWidth+E,I=N-O;"left"===c.horizontalAlign?B=g:"center"===c.horizontalAlign?B=g-I/2:"right"===c.horizontalAlign&&(B=g-I),B=Math.max(r.left+a.left,Math.min(B,r.right-a.right-N)),this.style.left="".concat(B,"px")}}}},constrain:function(){if(!this.__shouldPosition){this._discoverInfo();var t=this._fitInfo;t.positionedBy.vertically||(this.style.position="fixed",this.style.top="0px"),t.positionedBy.horizontally||(this.style.position="fixed",this.style.left="0px"),this.sizingTarget.style.boxSizing="border-box";var e=this.getBoundingClientRect();t.sizedBy.height||this.__sizeDimension(e,t.positionedBy.vertically,"top","bottom","Height"),t.sizedBy.width||this.__sizeDimension(e,t.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(t,e,i,n,o){this.__sizeDimension(t,e,i,n,o)},__sizeDimension:function(t,e,i,n,o){var s=this._fitInfo,r=this.__getNormalizedRect(this.fitInto),a="Width"===o?r.width:r.height,l=e===n,h=l?a-t[n]:t[i],c=s.margin[l?i:n],d="offset"+o,u=this[d]-this.sizingTarget[d];this.sizingTarget.style["max"+o]=a-c-h-u+"px"},center:function(){if(!this.__shouldPosition){this._discoverInfo();var t=this._fitInfo.positionedBy;if(!t.vertically||!t.horizontally){this.style.position="fixed",t.vertically||(this.style.top="0px"),t.horizontally||(this.style.left="0px");var e=this.getBoundingClientRect(),i=this.__getNormalizedRect(this.fitInto);if(!t.vertically){var n=i.top-e.top+(i.height-e.height)/2;this.style.top=n+"px"}if(!t.horizontally){var o=i.left-e.left+(i.width-e.width)/2;this.style.left=o+"px"}}}},__getNormalizedRect:function(t){return t===document.documentElement||t===window?{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}:t.getBoundingClientRect()},__getOffscreenArea:function(t,e,i){var n=Math.min(0,t.top)+Math.min(0,i.bottom-(t.top+e.height)),o=Math.min(0,t.left)+Math.min(0,i.right-(t.left+e.width));return Math.abs(n)*e.width+Math.abs(o)*e.height},__getPosition:function(t,e,i,n,o,s){var r,a=[{verticalAlign:"top",horizontalAlign:"left",top:o.top+this.verticalOffset,left:o.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:o.top+this.verticalOffset,left:o.right-i.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:o.bottom-i.height-this.verticalOffset,left:o.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:o.bottom-i.height-this.verticalOffset,left:o.right-i.width-this.horizontalOffset}];if(this.noOverlap){for(var l=0,h=a.length;l<h;l++){var c={};for(var d in a[l])c[d]=a[l][d];a.push(c)}a[0].top=a[1].top+=o.height,a[2].top=a[3].top-=o.height,a[4].left=a[6].left+=o.width,a[5].left=a[7].left-=o.width}e="auto"===e?null:e,(t="auto"===t?null:t)&&"center"!==t||(a.push({verticalAlign:"top",horizontalAlign:"center",top:o.top+this.verticalOffset+(this.noOverlap?o.height:0),left:o.left-n.width/2+o.width/2+this.horizontalOffset}),a.push({verticalAlign:"bottom",horizontalAlign:"center",top:o.bottom-i.height-this.verticalOffset-(this.noOverlap?o.height:0),left:o.left-n.width/2+o.width/2+this.horizontalOffset})),e&&"middle"!==e||(a.push({verticalAlign:"middle",horizontalAlign:"left",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.left+this.horizontalOffset+(this.noOverlap?o.width:0)}),a.push({verticalAlign:"middle",horizontalAlign:"right",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.right-i.width-this.horizontalOffset-(this.noOverlap?o.width:0)})),"middle"===e&&"center"===t&&a.push({verticalAlign:"middle",horizontalAlign:"center",top:o.top-n.height/2+o.height/2+this.verticalOffset,left:o.left-n.width/2+o.width/2+this.horizontalOffset});for(l=0;l<a.length;l++){var u=a[l],f=u.verticalAlign===e,p=u.horizontalAlign===t;if(!this.dynamicAlign&&!this.noOverlap&&f&&p){r=u;break}var _=(!e||f)&&(!t||p);if(this.dynamicAlign||_){if(u.offscreenArea=this.__getOffscreenArea(u,i,s),0===u.offscreenArea&&_){r=u;break}r=r||u;var v=u.offscreenArea-r.offscreenArea;(v<0||0===v&&(f||p))&&(r=u)}}return r}},c=i(72986),d=i(74460),u=i(71650),f=i(33368),p=Element.prototype,_=p.matches||p.matchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||p.webkitMatchesSelector,v=new(function(){function t(){(0,u.Z)(this,t)}return(0,f.Z)(t,[{key:"getTabbableNodes",value:function(t){var e=[];return this._collectTabbableNodes(t,e)?this._sortByTabIndex(e):e}},{key:"isFocusable",value:function(t){return _.call(t,"input, select, textarea, button, object")?_.call(t,":not([disabled])"):_.call(t,"a[href], area[href], iframe, [tabindex], [contentEditable]")}},{key:"isTabbable",value:function(t){return this.isFocusable(t)&&_.call(t,':not([tabindex="-1"])')&&this._isVisible(t)}},{key:"_normalizedTabIndex",value:function(t){if(this.isFocusable(t)){var e=t.getAttribute("tabindex")||0;return Number(e)}return-1}},{key:"_collectTabbableNodes",value:function(t,e){if(t.nodeType!==Node.ELEMENT_NODE)return!1;var i=t;if(!this._isVisible(i))return!1;var n,o=this._normalizedTabIndex(i),s=o>0;o>=0&&e.push(i),n="content"===i.localName||"slot"===i.localName?(0,a.vz)(i).getDistributedNodes():(0,a.vz)(i.root||i).children;for(var r=0;r<n.length;r++)s=this._collectTabbableNodes(n[r],e)||s;return s}},{key:"_isVisible",value:function(t){var e=t.style;return"hidden"!==e.visibility&&"none"!==e.display&&("hidden"!==(e=window.getComputedStyle(t)).visibility&&"none"!==e.display)}},{key:"_sortByTabIndex",value:function(t){var e=t.length;if(e<2)return t;var i=Math.ceil(e/2),n=this._sortByTabIndex(t.slice(0,i)),o=this._sortByTabIndex(t.slice(i));return this._mergeSortByTabIndex(n,o)}},{key:"_mergeSortByTabIndex",value:function(t,e){for(var i=[];t.length>0&&e.length>0;)this._hasLowerTabOrder(t[0],e[0])?i.push(e.shift()):i.push(t.shift());return i.concat(t,e)}},{key:"_hasLowerTabOrder",value:function(t,e){var i=Math.max(t.tabIndex,0),n=Math.max(e.tabIndex,0);return 0===i||0===n?n>i:i>n}}]),t}()),g=i(9672),y=i(50856);(0,g.k)({_template:(0,y.d)(n||(n=(0,o.Z)(["\n    <style>\n      :host {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: var(--iron-overlay-backdrop-background-color, #000);\n        opacity: 0;\n        transition: opacity 0.2s;\n        pointer-events: none;\n        @apply --iron-overlay-backdrop;\n      }\n\n      :host(.opened) {\n        opacity: var(--iron-overlay-backdrop-opacity, 0.6);\n        pointer-events: auto;\n        @apply --iron-overlay-backdrop-opened;\n      }\n    </style>\n\n    <slot></slot>\n"]))),is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){this.opened&&!this.parentNode&&(0,a.vz)(document.body).appendChild(this)},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){this.opened||this.parentNode!==document.body||(0,a.vz)(this.parentNode).removeChild(this)},_onTransitionend:function(t){t&&t.target===this&&this.complete()},_openedChanged:function(t){if(t)this.prepare();else{var e=window.getComputedStyle(this);"0s"!==e.transitionDuration&&0!=e.opacity||this.complete()}this.isAttached&&(this.__openedRaf&&(window.cancelAnimationFrame(this.__openedRaf),this.__openedRaf=null),this.scrollTop=this.scrollTop,this.__openedRaf=window.requestAnimationFrame(function(){this.__openedRaf=null,this.toggleClass("opened",this.opened)}.bind(this)))}});var m,b,z=i(8621),w=i(81668),k=new(function(){function t(){(0,u.Z)(this,t),this._overlays=[],this._minimumZ=101,this._backdropElement=null,w.NH(document.documentElement,"tap",(function(){})),document.addEventListener("tap",this._onCaptureClick.bind(this),!0),document.addEventListener("focus",this._onCaptureFocus.bind(this),!0),document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)}return(0,f.Z)(t,[{key:"backdropElement",get:function(){return this._backdropElement||(this._backdropElement=document.createElement("iron-overlay-backdrop")),this._backdropElement}},{key:"deepActiveElement",get:function(){var t=document.activeElement;for(t&&t instanceof Element!=!1||(t=document.body);t.root&&(0,a.vz)(t.root).activeElement;)t=(0,a.vz)(t.root).activeElement;return t}},{key:"_bringOverlayAtIndexToFront",value:function(t){var e=this._overlays[t];if(e){var i=this._overlays.length-1,n=this._overlays[i];if(n&&this._shouldBeBehindOverlay(e,n)&&i--,!(t>=i)){var o=Math.max(this.currentOverlayZ(),this._minimumZ);for(this._getZ(e)<=o&&this._applyOverlayZ(e,o);t<i;)this._overlays[t]=this._overlays[t+1],t++;this._overlays[i]=e}}}},{key:"addOrRemoveOverlay",value:function(t){t.opened?this.addOverlay(t):this.removeOverlay(t)}},{key:"addOverlay",value:function(t){var e=this._overlays.indexOf(t);if(e>=0)return this._bringOverlayAtIndexToFront(e),void this.trackBackdrop();var i=this._overlays.length,n=this._overlays[i-1],o=Math.max(this._getZ(n),this._minimumZ),s=this._getZ(t);if(n&&this._shouldBeBehindOverlay(t,n)){this._applyOverlayZ(n,o),i--;var r=this._overlays[i-1];o=Math.max(this._getZ(r),this._minimumZ)}s<=o&&this._applyOverlayZ(t,o),this._overlays.splice(i,0,t),this.trackBackdrop()}},{key:"removeOverlay",value:function(t){var e=this._overlays.indexOf(t);-1!==e&&(this._overlays.splice(e,1),this.trackBackdrop())}},{key:"currentOverlay",value:function(){var t=this._overlays.length-1;return this._overlays[t]}},{key:"currentOverlayZ",value:function(){return this._getZ(this.currentOverlay())}},{key:"ensureMinimumZ",value:function(t){this._minimumZ=Math.max(this._minimumZ,t)}},{key:"focusOverlay",value:function(){var t=this.currentOverlay();t&&t._applyFocus()}},{key:"trackBackdrop",value:function(){var t=this._overlayWithBackdrop();(t||this._backdropElement)&&(this.backdropElement.style.zIndex=this._getZ(t)-1,this.backdropElement.opened=!!t,this.backdropElement.prepare())}},{key:"getBackdrops",value:function(){for(var t=[],e=0;e<this._overlays.length;e++)this._overlays[e].withBackdrop&&t.push(this._overlays[e]);return t}},{key:"backdropZ",value:function(){return this._getZ(this._overlayWithBackdrop())-1}},{key:"_overlayWithBackdrop",value:function(){for(var t=this._overlays.length-1;t>=0;t--)if(this._overlays[t].withBackdrop)return this._overlays[t]}},{key:"_getZ",value:function(t){var e=this._minimumZ;if(t){var i=Number(t.style.zIndex||window.getComputedStyle(t).zIndex);i==i&&(e=i)}return e}},{key:"_setZ",value:function(t,e){t.style.zIndex=e}},{key:"_applyOverlayZ",value:function(t,e){this._setZ(t,e+2)}},{key:"_overlayInPath",value:function(t){t=t||[];for(var e=0;e<t.length;e++)if(t[e]._manager===this)return t[e]}},{key:"_onCaptureClick",value:function(t){var e=this._overlays.length-1;if(-1!==e)for(var i,n=(0,a.vz)(t).path;(i=this._overlays[e])&&this._overlayInPath(n)!==i&&(i._onCaptureClick(t),i.allowClickThrough);)e--}},{key:"_onCaptureFocus",value:function(t){var e=this.currentOverlay();e&&e._onCaptureFocus(t)}},{key:"_onCaptureKeyDown",value:function(t){var e=this.currentOverlay();e&&(z.G.keyboardEventMatchesKeys(t,"esc")?e._onCaptureEsc(t):z.G.keyboardEventMatchesKeys(t,"tab")&&e._onCaptureTab(t))}},{key:"_shouldBeBehindOverlay",value:function(t,e){return!t.alwaysOnTop&&e.alwaysOnTop}}]),t}()),x={pageX:0,pageY:0},T=null,O=[],C=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"];function E(t){R.indexOf(t)>=0||(0===R.length&&function(){m=m||B.bind(void 0);for(var t=0,e=C.length;t<e;t++)document.addEventListener(C[t],m,{capture:!0,passive:!1})}(),R.push(t),b=R[R.length-1],[],[])}function A(t){var e=R.indexOf(t);-1!==e&&(R.splice(e,1),b=R[R.length-1],[],[],0===R.length&&function(){for(var t=0,e=C.length;t<e;t++)document.removeEventListener(C[t],m,{capture:!0,passive:!1})}())}var R=[];function B(t){if(t.cancelable&&function(t){var e=(0,a.vz)(t).rootTarget;"touchmove"!==t.type&&T!==e&&(T=e,O=function(t){for(var e=[],i=t.indexOf(b),n=0;n<=i;n++)if(t[n].nodeType===Node.ELEMENT_NODE){var o=t[n],s=o.style;"scroll"!==s.overflow&&"auto"!==s.overflow&&(s=window.getComputedStyle(o)),"scroll"!==s.overflow&&"auto"!==s.overflow||e.push(o)}return e}((0,a.vz)(t).path));if(!O.length)return!0;if("touchstart"===t.type)return!1;var i=function(t){var e={deltaX:t.deltaX,deltaY:t.deltaY};if("deltaX"in t);else if("wheelDeltaX"in t&&"wheelDeltaY"in t)e.deltaX=-t.wheelDeltaX,e.deltaY=-t.wheelDeltaY;else if("wheelDelta"in t)e.deltaX=0,e.deltaY=-t.wheelDelta;else if("axis"in t)e.deltaX=1===t.axis?t.detail:0,e.deltaY=2===t.axis?t.detail:0;else if(t.targetTouches){var i=t.targetTouches[0];e.deltaX=x.pageX-i.pageX,e.deltaY=x.pageY-i.pageY}return e}(t);return!function(t,e,i){if(!e&&!i)return;for(var n=Math.abs(i)>=Math.abs(e),o=0;o<t.length;o++){var s=t[o];if(n?i<0?s.scrollTop>0:s.scrollTop<s.scrollHeight-s.clientHeight:e<0?s.scrollLeft>0:s.scrollLeft<s.scrollWidth-s.clientWidth)return s}}(O,i.deltaX,i.deltaY)}(t)&&t.preventDefault(),t.targetTouches){var e=t.targetTouches[0];x.pageX=e.pageX,x.pageY=e.pageY}}var N,I={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:k},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||(0,a.vz)(this).querySelector("[autofocus]")||this},get _focusableNodes(){return v.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1,this.__shouldRemoveTabIndex=!1,this.__firstFocusableNode=this.__lastFocusableNode=null,this.__rafs={},this.__restoreFocusNode=null,this.__scrollTop=this.__scrollLeft=null,this.__onCaptureScroll=this.__onCaptureScroll.bind(this),this.__rootNodes=null,this._ensureSetup()},attached:function(){this.opened&&this._openedChanged(this.opened),this._observer=(0,a.vz)(this).observeNodes(this._onNodesChange)},detached:function(){for(var t in this._observer&&(0,a.vz)(this).unobserveNodes(this._observer),this._observer=null,this.__rafs)null!==this.__rafs[t]&&cancelAnimationFrame(this.__rafs[t]);this.__rafs={},this._manager.removeOverlay(this),this.__isAnimating&&(this.opened?this._finishRenderOpened():(this._applyFocus(),this._finishRenderClosed()))},toggle:function(){this._setCanceled(!1),this.opened=!this.opened},open:function(){this._setCanceled(!1),this.opened=!0},close:function(){this._setCanceled(!1),this.opened=!1},cancel:function(t){this.fire("iron-overlay-canceled",t,{cancelable:!0}).defaultPrevented||(this._setCanceled(!0),this.opened=!1)},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){this._overlaySetup||(this._overlaySetup=!0,this.style.outline="none",this.style.display="none")},_openedChanged:function(t){t?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"),this.isAttached&&(this.__isAnimating=!0,this.__deraf("__openedChanged",this.__openedChanged))},_canceledChanged:function(){this.closingReason=this.closingReason||{},this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){this.withBackdrop&&!this.hasAttribute("tabindex")?(this.setAttribute("tabindex","-1"),this.__shouldRemoveTabIndex=!0):this.__shouldRemoveTabIndex&&(this.removeAttribute("tabindex"),this.__shouldRemoveTabIndex=!1),this.opened&&this.isAttached&&this._manager.trackBackdrop()},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement,this._preparePositioning(),this.refit(),this._finishPositioning(),this.noAutoFocus&&document.activeElement===this._focusNode&&(this._focusNode.blur(),this.__restoreFocusNode.focus())},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none",this.style.zIndex="",this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none",this.style.transform=this.style.webkitTransform="none",this.style.display=""},_finishPositioning:function(){this.style.display="none",this.scrollTop=this.scrollTop,this.style.transition=this.style.webkitTransition="",this.style.transform=this.style.webkitTransform="",this.style.display="",this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened)this.noAutoFocus||this._focusNode.focus();else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var t=this._manager.deepActiveElement;(t===document.body||S(this,t))&&this.__restoreFocusNode.focus()}this.__restoreFocusNode=null,this._focusNode.blur(),this._focusedChild=null}},_onCaptureClick:function(t){this.noCancelOnOutsideClick||this.cancel(t)},_onCaptureFocus:function(t){if(this.withBackdrop){var e=(0,a.vz)(t).path;-1===e.indexOf(this)?(t.stopPropagation(),this._applyFocus()):this._focusedChild=e[0]}},_onCaptureEsc:function(t){this.noCancelOnEscKey||this.cancel(t)},_onCaptureTab:function(t){if(this.withBackdrop){this.__ensureFirstLastFocusables();var e=t.shiftKey,i=e?this.__firstFocusableNode:this.__lastFocusableNode,n=e?this.__lastFocusableNode:this.__firstFocusableNode,o=!1;if(i===n)o=!0;else{var s=this._manager.deepActiveElement;o=s===i||s===this}o&&(t.preventDefault(),this._focusedChild=n,this._applyFocus())}},_onIronResize:function(){this.opened&&!this.__isAnimating&&this.__deraf("refit",this.refit)},_onNodesChange:function(){this.opened&&!this.__isAnimating&&(this.invalidateTabbables(),this.notifyResize())},__ensureFirstLastFocusables:function(){var t=this._focusableNodes;this.__firstFocusableNode=t[0],this.__lastFocusableNode=t[t.length-1]},__openedChanged:function(){this.opened?(this._prepareRenderOpened(),this._manager.addOverlay(this),this._applyFocus(),this._renderOpened()):(this._manager.removeOverlay(this),this._applyFocus(),this._renderClosed())},__deraf:function(t,e){var i=this.__rafs;null!==i[t]&&cancelAnimationFrame(i[t]),i[t]=requestAnimationFrame(function(){i[t]=null,e.call(this)}.bind(this))},__updateScrollObservers:function(t,e,i){t&&e&&this.__isValidScrollAction(i)?("lock"===i&&(this.__saveScrollPosition(),E(this)),this.__addScrollListeners()):(A(this),this.__removeScrollListeners())},__addScrollListeners:function(){if(!this.__rootNodes){if(this.__rootNodes=[],d.my)for(var t=this;t;)t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host&&this.__rootNodes.push(t),t=t.host||t.assignedSlot||t.parentNode;this.__rootNodes.push(document)}this.__rootNodes.forEach((function(t){t.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})}),this)},__removeScrollListeners:function(){this.__rootNodes&&this.__rootNodes.forEach((function(t){t.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})}),this),this.isAttached||(this.__rootNodes=null)},__isValidScrollAction:function(t){return"lock"===t||"refit"===t||"cancel"===t},__onCaptureScroll:function(t){if(!(this.__isAnimating||(0,a.vz)(t).path.indexOf(this)>=0))switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(t)}},__saveScrollPosition:function(){document.scrollingElement?(this.__scrollTop=document.scrollingElement.scrollTop,this.__scrollLeft=document.scrollingElement.scrollLeft):(this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))},__restoreScrollPosition:function(){document.scrollingElement?(document.scrollingElement.scrollTop=this.__scrollTop,document.scrollingElement.scrollLeft=this.__scrollLeft):(document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop,document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft)}},S=function(t,e){for(var i=e;i;i=(n=i).assignedSlot||n.parentNode||n.host)if(i===t)return!0;var n;return!1},F=[h,c.z,I],L=null;(0,g.k)({_template:(0,y.d)(N||(N=(0,o.Z)(['\n    <style>\n      :host {\n        display: block;\n        position: fixed;\n        background-color: var(--paper-toast-background-color, #323232);\n        color: var(--paper-toast-color, #f1f1f1);\n        min-height: 48px;\n        min-width: 288px;\n        padding: 16px 24px;\n        box-sizing: border-box;\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n        border-radius: 2px;\n        margin: 12px;\n        font-size: 14px;\n        cursor: default;\n        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;\n        transition: transform 0.3s, opacity 0.3s;\n        opacity: 0;\n        -webkit-transform: translateY(100px);\n        transform: translateY(100px);\n        @apply --paper-font-common-base;\n      }\n\n      :host(.capsule) {\n        border-radius: 24px;\n      }\n\n      :host(.fit-bottom) {\n        width: 100%;\n        min-width: 0;\n        border-radius: 0;\n        margin: 0;\n      }\n\n      :host(.paper-toast-open) {\n        opacity: 1;\n        -webkit-transform: translateY(0px);\n        transform: translateY(0px);\n      }\n    </style>\n\n    <span id="label">{{text}}</span>\n    <slot></slot>\n']))),is:"paper-toast",behaviors:[F],properties:{fitInto:{type:Object,value:window,observer:"_onFitIntoChanged"},horizontalAlign:{type:String,value:"left"},verticalAlign:{type:String,value:"bottom"},duration:{type:Number,value:3e3},text:{type:String,value:""},noCancelOnOutsideClick:{type:Boolean,value:!0},noAutoFocus:{type:Boolean,value:!0}},listeners:{transitionend:"__onTransitionEnd"},get visible(){return r.XY._warn("`visible` is deprecated, use `opened` instead"),this.opened},get _canAutoClose(){return this.duration>0&&this.duration!==1/0},created:function(){this._autoClose=null,s.N.requestAvailability()},show:function(t){for(var e in"string"==typeof t&&(t={text:t}),t)0===e.indexOf("_")?r.XY._warn('The property "'+e+'" is private and was not set.'):e in this?this[e]=t[e]:r.XY._warn('The property "'+e+'" is not valid.');this.open()},hide:function(){this.close()},__onTransitionEnd:function(t){t&&t.target===this&&"opacity"===t.propertyName&&(this.opened?this._finishRenderOpened():this._finishRenderClosed())},_openedChanged:function(){null!==this._autoClose&&(this.cancelAsync(this._autoClose),this._autoClose=null),this.opened?(L&&L!==this&&L.close(),L=this,this.fire("iron-announce",{text:this.text}),this._canAutoClose&&(this._autoClose=this.async(this.close,this.duration))):L===this&&(L=null),I._openedChanged.apply(this,arguments)},_renderOpened:function(){this.classList.add("paper-toast-open")},_renderClosed:function(){this.classList.remove("paper-toast-open")},_onFitIntoChanged:function(t){this.positionTarget=t}})},21683:function(t,e,i){i.d(e,{Wc:function(){return h},YA:function(){return d},rs:function(){return c}});i(56646);var n=0,o=0,s=[],r=0,a=!1,l=document.createTextNode("");new window.MutationObserver((function(){a=!1;for(var t=s.length,e=function(){var t=s[i];if(t)try{t()}catch(e){setTimeout((function(){throw e}))}},i=0;i<t;i++)e();s.splice(0,t),o+=t})).observe(l,{characterData:!0});var h={after:function(t){return{run:function(e){return window.setTimeout(e,t)},cancel:function(t){window.clearTimeout(t)}}},run:function(t,e){return window.setTimeout(t,e)},cancel:function(t){window.clearTimeout(t)}},c={run:function(t){return window.requestAnimationFrame(t)},cancel:function(t){window.cancelAnimationFrame(t)}},d={run:function(t){return a||(a=!0,l.textContent=r++),s.push(t),n++},cancel:function(t){var e=t-o;if(e>=0){if(!s[e])throw new Error("invalid async handle: "+t);s[e]=null}}}},28426:function(t,e,i){i.d(e,{H3:function(){return s},dy:function(){return o.d}});var n=i(81554),o=i(50856),s=(0,n.SH)(HTMLElement)},47501:function(t,e,i){i.d(e,{V:function(){return n.V}});var n=i(84298)}}]);
//# sourceMappingURL=60077-guBLryUcvM4.js.map