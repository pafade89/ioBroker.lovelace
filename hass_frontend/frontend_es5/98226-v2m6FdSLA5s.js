"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[98226],{98226:function(r,e,s){s.r(e),s.d(e,{REDIRECTS:function(){return b}});var t,o,a=s(68990),i=s(88962),n=s(33368),c=s(71650),d=s(82390),u=s(69205),h=s(70906),l=s(91808),p=s(34541),v=s(47838),k=s(54211),_=s(68144),f=s(79932),m=s(83849),y=s(15493),b=(s(48811),{supervisor:{redirect:"/hassio/dashboard"},supervisor_logs:{redirect:"/hassio/system"},supervisor_info:{redirect:"/hassio/system"},supervisor_snapshots:{redirect:"/hassio/backups"},supervisor_backups:{redirect:"/hassio/backups"},supervisor_store:{redirect:"/hassio/store"},supervisor_addons:{redirect:"/hassio/dashboard"},supervisor_addon:{redirect:"/hassio/addon",params:{addon:"string"},optional_params:{repository_url:"url"}},supervisor_ingress:{redirect:"/hassio/ingress",params:{addon:"string"}},supervisor_add_addon_repository:{redirect:"/hassio/store",params:{repository_url:"url"}}});(0,l.Z)([(0,f.Mo)("hassio-my-redirect")],(function(r,e){var s=function(e){(0,u.Z)(t,e);var s=(0,h.Z)(t);function t(){var e;(0,c.Z)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return e=s.call.apply(s,[this].concat(a)),r((0,d.Z)(e)),e}return(0,n.Z)(t)}(e);return{F:s,d:[{kind:"field",decorators:[(0,f.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,f.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,f.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,f.SB)()],key:"_error",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,p.Z)((0,v.Z)(s.prototype),"connectedCallback",this).call(this);var r=this.route.path.substr(1),e=b[r];if(e){var o;try{o=this._createRedirectUrl(e)}catch(a){return void(this._error=this.supervisor.localize("my.error"))}(0,m.c)(o,{replace:!0})}else this._error=this.supervisor.localize("my.not_supported","link",(0,_.dy)(t||(t=(0,i.Z)(['<a target="_blank" rel="noreferrer noopener" href="https://my.home-assistant.io/faq.html#supported-pages"> '," </a>"])),this.supervisor.localize("my.faq_link")))}},{kind:"method",key:"render",value:function(){return this._error?(0,_.dy)(o||(o=(0,i.Z)(['<hass-error-screen .error="','"></hass-error-screen>'])),this._error):_.Ld}},{kind:"method",key:"_createRedirectUrl",value:function(r){var e=this._createRedirectParams(r);return"".concat(r.redirect).concat(e)}},{kind:"method",key:"_createRedirectParams",value:function(r){var e=this,s=(0,y.Q2)();if(!r.params&&!Object.keys(s).length)return"";var t={};return Object.entries(r.params||{}).forEach((function(r){var o=(0,a.Z)(r,2),i=o[0],n=o[1];if(!s[i]||!e._checkParamType(n,s[i]))throw Error();t[i]=s[i]})),Object.entries(r.optional_params||{}).forEach((function(r){var o=(0,a.Z)(r,2),i=o[0],n=o[1];if(s[i]){if(!e._checkParamType(n,s[i]))throw Error();t[i]=s[i]}})),"?".concat((0,y.ou)(t))}},{kind:"method",key:"_checkParamType",value:function(r,e){return"string"===r||"url"===r&&(e&&e===(0,k.Nm)(e))}}]}}),_.oi)}}]);
//# sourceMappingURL=98226-v2m6FdSLA5s.js.map