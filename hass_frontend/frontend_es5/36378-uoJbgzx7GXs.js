"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[36378,89054],{53918:function(n,t,e){e.r(t),e.d(t,{Button:function(){return l}});var r=e(33368),a=e(71650),i=e(69205),o=e(70906),u=e(43204),c=e(79932),s=e(3071),f=e(3712),l=function(n){(0,i.Z)(e,n);var t=(0,o.Z)(e);function e(){return(0,a.Z)(this,e),t.apply(this,arguments)}return(0,r.Z)(e)}(s.X);l.styles=[f.W],l=(0,u.__decorate)([(0,c.Mo)("mwc-button")],l)},93217:function(n,t,e){e.d(t,{Ud:function(){return y}});var r=e(68990),a=e(93359),i=e(59202),o=e(53709),u=e(40039),c=e(76775),s=Symbol("Comlink.proxy"),f=Symbol("Comlink.endpoint"),l=Symbol("Comlink.releaseProxy"),v=Symbol("Comlink.finalizer"),p=Symbol("Comlink.thrown"),d=function(n){return"object"===(0,c.Z)(n)&&null!==n||"function"==typeof n},g=new Map([["proxy",{canHandle:function(n){return d(n)&&n[s]},serialize:function(n){var t=new MessageChannel,e=t.port1,r=t.port2;return h(n,e),[r,[r]]},deserialize:function(n){return n.start(),y(n)}}],["throw",{canHandle:function(n){return d(n)&&p in n},serialize:function(n){var t=n.value;return[t instanceof Error?{isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:{isError:!1,value:t},[]]},deserialize:function(n){if(n.isError)throw Object.assign(new Error(n.value.message),n.value);throw n.value}}]]);function h(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:globalThis,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["*"];t.addEventListener("message",(function c(f){if(f&&f.data)if(function(n,t){var e,r=(0,u.Z)(n);try{for(r.s();!(e=r.n()).done;){var a=e.value;if(t===a||"*"===a)return!0;if(a instanceof RegExp&&a.test(t))return!0}}catch(i){r.e(i)}finally{r.f()}return!1}(e,f.origin)){var l,d=Object.assign({path:[]},f.data),g=d.id,y=d.type,b=d.path,E=(f.data.argumentList||[]).map(M);try{var w=b.slice(0,-1).reduce((function(n,t){return n[t]}),n),Z=b.reduce((function(n,t){return n[t]}),n);switch(y){case"GET":l=Z;break;case"SET":w[b.slice(-1)[0]]=M(f.data.value),l=!0;break;case"APPLY":l=Z.apply(w,E);break;case"CONSTRUCT":var k;l=function(n){return Object.assign(n,(0,a.Z)({},s,!0))}((0,i.Z)(Z,(0,o.Z)(E)));break;case"ENDPOINT":var S=new MessageChannel,R=S.port1,A=S.port2;h(n,A),l=function(n,t){return T.set(n,t),n}(R,[R]);break;case"RELEASE":l=void 0;break;default:return}}catch(k){l=(0,a.Z)({value:k},p,0)}Promise.resolve(l).catch((function(n){return(0,a.Z)({value:n},p,0)})).then((function(e){var a=L(e),i=(0,r.Z)(a,2),o=i[0],u=i[1];t.postMessage(Object.assign(Object.assign({},o),{id:g}),u),"RELEASE"===y&&(t.removeEventListener("message",c),m(t),v in n&&"function"==typeof n[v]&&n[v]())})).catch((function(n){var e=L((0,a.Z)({value:new TypeError("Unserializable return value")},p,0)),i=(0,r.Z)(e,2),o=i[0],u=i[1];t.postMessage(Object.assign(Object.assign({},o),{id:g}),u)}))}else console.warn("Invalid origin '".concat(f.origin,"' for comlink proxy"))})),t.start&&t.start()}function m(n){(function(n){return"MessagePort"===n.constructor.name})(n)&&n.close()}function y(n,t){return k(n,[],t)}function b(n){if(n)throw new Error("Proxy has been released and is not useable")}function E(n){return R(n,{type:"RELEASE"}).then((function(){m(n)}))}var w=new WeakMap,Z="FinalizationRegistry"in globalThis&&new FinalizationRegistry((function(n){var t=(w.get(n)||0)-1;w.set(n,t),0===t&&E(n)}));function k(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=!1,a=new Proxy(arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},{get:function(r,i){if(b(e),i===l)return function(){!function(n){Z&&Z.unregister(n)}(a),E(n),e=!0};if("then"===i){if(0===t.length)return{then:function(){return a}};var u=R(n,{type:"GET",path:t.map((function(n){return n.toString()}))}).then(M);return u.then.bind(u)}return k(n,[].concat((0,o.Z)(t),[i]))},set:function(a,i,u){b(e);var c=L(u),s=(0,r.Z)(c,2),f=s[0],l=s[1];return R(n,{type:"SET",path:[].concat((0,o.Z)(t),[i]).map((function(n){return n.toString()})),value:f},l).then(M)},apply:function(a,i,o){b(e);var u=t[t.length-1];if(u===f)return R(n,{type:"ENDPOINT"}).then(M);if("bind"===u)return k(n,t.slice(0,-1));var c=S(o),s=(0,r.Z)(c,2),l=s[0],v=s[1];return R(n,{type:"APPLY",path:t.map((function(n){return n.toString()})),argumentList:l},v).then(M)},construct:function(a,i){b(e);var o=S(i),u=(0,r.Z)(o,2),c=u[0],s=u[1];return R(n,{type:"CONSTRUCT",path:t.map((function(n){return n.toString()})),argumentList:c},s).then(M)}});return function(n,t){var e=(w.get(t)||0)+1;w.set(t,e),Z&&Z.register(n,t,n)}(a,n),a}function S(n){var t,e=n.map(L);return[e.map((function(n){return n[0]})),(t=e.map((function(n){return n[1]})),Array.prototype.concat.apply([],t))]}var T=new WeakMap;function L(n){var t,e=(0,u.Z)(g);try{for(e.s();!(t=e.n()).done;){var a=(0,r.Z)(t.value,2),i=a[0],o=a[1];if(o.canHandle(n)){var c=o.serialize(n),s=(0,r.Z)(c,2);return[{type:"HANDLER",name:i,value:s[0]},s[1]]}}}catch(f){e.e(f)}finally{e.f()}return[{type:"RAW",value:n},T.get(n)||[]]}function M(n){switch(n.type){case"HANDLER":return g.get(n.name).deserialize(n.value);case"RAW":return n.value}}function R(n,t,e){return new Promise((function(r){var a=new Array(4).fill(0).map((function(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)})).join("-");n.addEventListener("message",(function t(e){e.data&&e.data.id&&e.data.id===a&&(n.removeEventListener("message",t),r(e.data))})),n.start&&n.start(),n.postMessage(Object.assign({id:a},t),e)}))}},82160:function(n,t,e){function r(n){return new Promise((function(t,e){n.oncomplete=n.onsuccess=function(){return t(n.result)},n.onabort=n.onerror=function(){return e(n.error)}}))}function a(n,t){var e=indexedDB.open(n);e.onupgradeneeded=function(){return e.result.createObjectStore(t)};var a=r(e);return function(n,e){return a.then((function(r){return e(r.transaction(t,n).objectStore(t))}))}}var i;function o(){return i||(i=a("keyval-store","keyval")),i}function u(n){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:o())("readonly",(function(t){return r(t.get(n))}))}function c(n,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:o())("readwrite",(function(e){return e.put(t,n),r(e.transaction)}))}function s(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:o())("readwrite",(function(n){return n.clear(),r(n.transaction)}))}e.d(t,{MT:function(){return a},RV:function(){return r},U2:function(){return u},ZH:function(){return s},t8:function(){return c}})}}]);
//# sourceMappingURL=36378-uoJbgzx7GXs.js.map