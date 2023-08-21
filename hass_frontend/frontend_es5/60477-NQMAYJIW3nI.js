"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[60477],{78866:function(e,n,r){r.d(n,{D:function(){return k},S:function(){return w}});var t,o,i,a=r(99312),c=r(88962),s=r(81043),l=r(68144),d=r(81582),u=r(5986),f=r(75580),p=r(2852),g=r(26765),h=r(25145),_=r(70332),m=r(27322),v=r(7323),b=r(83849),w=["zha","zwave_js","matter"],k=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n,r,s,w){var k,y,z,x,Z,S;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==w||!w.domain){e.next=5;break}return e.next=3,r.loadBackendTranslation("title",w.domain);case 3:k=e.sent,w.domain=(0,u.Lh)(k,w.domain);case 5:if(null==w||!w.brand){e.next=10;break}return e.next=8,(0,f.G)(r);case 8:z=e.sent,w.brand=(null===(y=z.core.integration[w.brand])||void 0===y?void 0:y.name)||w.brand;case 10:if("zwave_js"!==s){e.next=25;break}if(null==w||!w.config_entry){e.next=15;break}e.t0=void 0,e.next=18;break;case 15:return e.next=17,(0,d.pB)(r,{domain:s});case 17:e.t0=e.sent;case 18:if(x=e.t0,(0,v.p)(r,"zwave_js")&&(null!=w&&w.config_entry||null!=x&&x.length)){e.next=22;break}return(0,g.g7)(n,{title:r.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee_title",{integration:"Z-Wave"}),text:r.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee",{integration:"Z-Wave",brand:(null==w?void 0:w.brand)||(null==w?void 0:w.domain)||"Z-Wave",supported_hardware_link:(0,l.dy)(t||(t=(0,c.Z)(['<a href="','" target="_blank" rel="noreferrer">',"</a>"])),(0,m.R)(r,"/docs/z-wave/controllers"),r.localize("ui.panel.config.integrations.config_flow.supported_hardware"))}),confirmText:r.localize("ui.panel.config.integrations.config_flow.proceed"),confirm:function(){(0,p.t)(n,{startFlowHandler:"zwave_js"})}}),e.abrupt("return");case 22:(0,_.B)(n,{entry_id:(null==w?void 0:w.config_entry)||x[0].entry_id}),e.next=53;break;case 25:if("zha"!==s){e.next=40;break}if(null==w||!w.config_entry){e.next=30;break}e.t1=void 0,e.next=33;break;case 30:return e.next=32,(0,d.pB)(r,{domain:s});case 32:e.t1=e.sent;case 33:if(Z=e.t1,(0,v.p)(r,"zha")&&(null!=w&&w.config_entry||null!=Z&&Z.length)){e.next=37;break}return(0,g.g7)(n,{title:r.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee_title",{integration:"Zigbee"}),text:r.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee",{integration:"Zigbee",brand:(null==w?void 0:w.brand)||(null==w?void 0:w.domain)||"Zigbee",supported_hardware_link:(0,l.dy)(o||(o=(0,c.Z)(['<a href="','" target="_blank" rel="noreferrer">',"</a>"])),(0,m.R)(r,"/integrations/zha/#known-working-zigbee-radio-modules"),r.localize("ui.panel.config.integrations.config_flow.supported_hardware"))}),confirmText:r.localize("ui.panel.config.integrations.config_flow.proceed"),confirm:function(){(0,p.t)(n,{startFlowHandler:"zha"})}}),e.abrupt("return");case 37:(0,b.c)("/config/zha/add"),e.next=53;break;case 40:if("matter"!==s){e.next=53;break}if(null==w||!w.config_entry){e.next=45;break}e.t2=void 0,e.next=48;break;case 45:return e.next=47,(0,d.pB)(r,{domain:s});case 47:e.t2=e.sent;case 48:if(S=e.t2,(0,v.p)(r,s)&&(null!=w&&w.config_entry||null!=S&&S.length)){e.next=52;break}return(0,g.g7)(n,{title:r.localize("ui.panel.config.integrations.config_flow.missing_zwave_zigbee_title",{integration:"Matter"}),text:r.localize("ui.panel.config.integrations.config_flow.missing_matter",{integration:"Matter",brand:(null==w?void 0:w.brand)||(null==w?void 0:w.domain)||"Matter",supported_hardware_link:(0,l.dy)(i||(i=(0,c.Z)(['<a href="','" target="_blank" rel="noreferrer">',"</a>"])),(0,m.R)(r,"/integrations/matter"),r.localize("ui.panel.config.integrations.config_flow.supported_hardware"))}),confirmText:r.localize("ui.panel.config.integrations.config_flow.proceed"),confirm:function(){(0,p.t)(n,{startFlowHandler:"matter"})}}),e.abrupt("return");case 52:(0,h.H)(n);case 53:case"end":return e.stop()}}),e)})));return function(n,r,t,o){return e.apply(this,arguments)}}()},81582:function(e,n,r){r.d(n,{DJ:function(){return i},LZ:function(){return t},Nn:function(){return d},Ny:function(){return u},Q4:function(){return o},RQ:function(){return c},SO:function(){return s},T0:function(){return f},iJ:function(){return l},pB:function(){return a}});var t=32143==r.j?["migration_error","setup_error","setup_retry"]:null,o=32143==r.j?["not_loaded","loaded","setup_error","setup_retry"]:null,i=function(e,n,r){var t={type:"config_entries/subscribe"};return r&&r.type&&(t.type_filter=r.type),e.connection.subscribeMessage((function(e){return n(e)}),t)},a=function(e,n){var r={};return n&&(n.type&&(r.type_filter=n.type),n.domain&&(r.domain=n.domain)),e.callWS(Object.assign({type:"config_entries/get"},r))},c=function(e,n){return e.callWS({type:"config_entries/get_single",entry_id:n})},s=function(e,n,r){return e.callWS(Object.assign({type:"config_entries/update",entry_id:n},r))},l=function(e,n){return e.callApi("DELETE","config/config_entries/entry/".concat(n))},d=function(e,n){return e.callApi("POST","config/config_entries/entry/".concat(n,"/reload"))},u=function(e,n){return e.callWS({type:"config_entries/disable",entry_id:n,disabled_by:"user"})},f=function(e,n){return e.callWS({type:"config_entries/disable",entry_id:n,disabled_by:null})}},73728:function(e,n,r){r.d(n,{D4:function(){return d},D7:function(){return h},Ky:function(){return l},P3:function(){return c},V3:function(){return v},WW:function(){return b},XO:function(){return u},ZJ:function(){return m},d4:function(){return g},oi:function(){return p},pV:function(){return a},zO:function(){return f}});var t=r(97330),o=r(38346),i=r(5986),a=32143==r.j?["bluetooth","dhcp","discovery","hardware","hassio","homekit","integration_discovery","mqtt","ssdp","unignore","usb","zeroconf"]:null,c=32143==r.j?["reauth"]:null,s={"HA-Frontend-Base":"".concat(location.protocol,"//").concat(location.host)},l=function(e,n){var r;return e.callApi("POST","config/config_entries/flow",{handler:n,show_advanced_options:Boolean(null===(r=e.userData)||void 0===r?void 0:r.showAdvanced)},s)},d=function(e,n){return e.callApi("GET","config/config_entries/flow/".concat(n),void 0,s)},u=function(e,n,r){return e.callApi("POST","config/config_entries/flow/".concat(n),r,s)},f=function(e,n,r){return e.callWS({type:"config_entries/ignore_flow",flow_id:n,title:r})},p=function(e,n){return e.callApi("DELETE","config/config_entries/flow/".concat(n))},g=function(e,n){return e.callApi("GET","config/config_entries/flow_handlers".concat(n?"?type=".concat(n):""))},h=function(e){return e.sendMessagePromise({type:"config_entries/flow/progress"})},_=function(e,n){return e.subscribeEvents((0,o.D)((function(){return h(e).then((function(e){return n.setState(e,!0)}))}),500,!0),"config_entry_discovered")},m=function(e){return(0,t._)(e,"_configFlowProgress",h,_)},v=function(e,n){return m(e.connection).subscribe(n)},b=function(e,n){return n.context.title_placeholders&&0!==Object.keys(n.context.title_placeholders).length?e("component.".concat(n.handler,".config.flow_title"),n.context.title_placeholders)||("name"in n.context.title_placeholders?n.context.title_placeholders.name:(0,i.Lh)(e,n.handler)):(0,i.Lh)(e,n.handler)}},75580:function(e,n,r){r.d(n,{G:function(){return t},p:function(){return o}});var t=function(e){return e.callWS({type:"integration/descriptions"})},o=function(e,n){if(e){if(n in e){var r=e[n];if("integration_type"in r)return r}for(var t=0,o=Object.values(e);t<o.length;t++){var i=o[t];if("integrations"in i&&i.integrations&&n in i.integrations)return i.integrations[n]}}}},2852:function(e,n,r){r.d(n,{t:function(){return w}});var t,o,i,a,c,s,l,d,u,f=r(88962),p=r(99312),g=r(68990),h=r(81043),_=r(68144),m=r(73728),v=r(5986),b=r(52871),w=function(e,n){return(0,b.w)(e,n,{loadDevicesAndAreas:!0,createFlow:(w=(0,h.Z)((0,p.Z)().mark((function e(n,r){var t,o,i;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([(0,m.Ky)(n,r),n.loadBackendTranslation("config",r),n.loadBackendTranslation("selector",r),n.loadBackendTranslation("title",r)]);case 2:return t=e.sent,o=(0,g.Z)(t,1),i=o[0],e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)}))),function(e,n){return w.apply(this,arguments)}),fetchFlow:(r=(0,h.Z)((0,p.Z)().mark((function e(n,r){var t;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.D4)(n,r);case 2:return t=e.sent,e.next=5,n.loadBackendTranslation("config",t.handler);case 5:return e.next=7,n.loadBackendTranslation("selector",t.handler);case 7:return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)}))),function(e,n){return r.apply(this,arguments)}),handleFlowStep:m.XO,deleteFlow:m.oi,renderAbortDescription:function(e,n){var r=e.localize("component.".concat(n.handler,".config.abort.").concat(n.reason),n.description_placeholders);return r?(0,_.dy)(t||(t=(0,f.Z)([' <ha-markdown allowsvg breaks .content="','"></ha-markdown> '])),r):""},renderShowFormStepHeader:function(e,n){return e.localize("component.".concat(n.handler,".config.step.").concat(n.step_id,".title"),n.description_placeholders)||e.localize("component.".concat(n.handler,".title"))},renderShowFormStepDescription:function(e,n){var r=e.localize("component.".concat(n.handler,".config.step.").concat(n.step_id,".description"),n.description_placeholders);return r?(0,_.dy)(o||(o=(0,f.Z)([' <ha-markdown allowsvg breaks .content="','"></ha-markdown> '])),r):""},renderShowFormStepFieldLabel:function(e,n,r){return e.localize("component.".concat(n.handler,".config.step.").concat(n.step_id,".data.").concat(r.name))},renderShowFormStepFieldHelper:function(e,n,r){var t=e.localize("component.".concat(n.handler,".config.step.").concat(n.step_id,".data_description.").concat(r.name),n.description_placeholders);return t?(0,_.dy)(i||(i=(0,f.Z)(['<ha-markdown breaks .content="','"></ha-markdown>'])),t):""},renderShowFormStepFieldError:function(e,n,r){return e.localize("component.".concat(n.handler,".config.error.").concat(r),n.description_placeholders)||r},renderShowFormStepFieldLocalizeValue:function(e,n,r){return e.localize("component.".concat(n.handler,".selector.").concat(r))},renderShowFormStepSubmitButton:function(e,n){return e.localize("component.".concat(n.handler,".config.step.").concat(n.step_id,".submit"))||e.localize("ui.panel.config.integrations.config_flow.".concat(!1===n.last_step?"next":"submit"))},renderExternalStepHeader:function(e,n){return e.localize("component.".concat(n.handler,".config.step.").concat(n.step_id,".title"))||e.localize("ui.panel.config.integrations.config_flow.external_step.open_site")},renderExternalStepDescription:function(e,n){var r=e.localize("component.".concat(n.handler,".config.").concat(n.step_id,".description"),n.description_placeholders);return(0,_.dy)(a||(a=(0,f.Z)([" <p> "," </p> "," "])),e.localize("ui.panel.config.integrations.config_flow.external_step.description"),r?(0,_.dy)(c||(c=(0,f.Z)([' <ha-markdown allowsvg breaks .content="','"></ha-markdown> '])),r):"")},renderCreateEntryDescription:function(e,n){var r=e.localize("component.".concat(n.handler,".config.create_entry.").concat(n.description||"default"),n.description_placeholders);return(0,_.dy)(s||(s=(0,f.Z)([" "," <p> "," </p> "])),r?(0,_.dy)(l||(l=(0,f.Z)([' <ha-markdown allowsvg breaks .content="','"></ha-markdown> '])),r):"",e.localize("ui.panel.config.integrations.config_flow.created_config","name",n.title))},renderShowFormProgressHeader:function(e,n){return e.localize("component.".concat(n.handler,".config.step.").concat(n.step_id,".title"))||e.localize("component.".concat(n.handler,".title"))},renderShowFormProgressDescription:function(e,n){var r=e.localize("component.".concat(n.handler,".config.progress.").concat(n.progress_action),n.description_placeholders);return r?(0,_.dy)(d||(d=(0,f.Z)([' <ha-markdown allowsvg breaks .content="','"></ha-markdown> '])),r):""},renderMenuHeader:function(e,n){return e.localize("component.".concat(n.handler,".config.step.").concat(n.step_id,".title"))||e.localize("component.".concat(n.handler,".title"))},renderMenuDescription:function(e,n){var r=e.localize("component.".concat(n.handler,".config.step.").concat(n.step_id,".description"),n.description_placeholders);return r?(0,_.dy)(u||(u=(0,f.Z)([' <ha-markdown allowsvg breaks .content="','"></ha-markdown> '])),r):""},renderMenuOption:function(e,n,r){return e.localize("component.".concat(n.handler,".config.step.").concat(n.step_id,".menu_options.").concat(r),n.description_placeholders)},renderLoadingDescription:function(e,n,r,t){if("loading_flow"!==n&&"loading_step"!==n)return"";var o=(null==t?void 0:t.handler)||r;return e.localize("ui.panel.config.integrations.config_flow.loading.".concat(n),{integration:o?(0,v.Lh)(e.localize,o):e.localize("ui.panel.config.integrations.config_flow.loading.fallback_title")})}});var r,w}},52871:function(e,n,r){r.d(n,{w:function(){return i}});var t=r(47181),o=function(){return Promise.all([r.e(46992),r.e(31338),r.e(42977),r.e(79071),r.e(3298),r.e(28597),r.e(2185),r.e(7270),r.e(33829),r.e(52154),r.e(46750),r.e(81312),r.e(59159)]).then(r.bind(r,59159))},i=function(e,n,r){(0,t.B)(e,"show-dialog",{dialogTag:"dialog-data-entry-flow",dialogImport:o,dialogParams:Object.assign(Object.assign({},n),{},{flowConfig:r,dialogParentElement:e})})}},26765:function(e,n,r){r.d(n,{D9:function(){return s},Ys:function(){return a},g7:function(){return c}});var t=r(47181),o=function(){return Promise.all([r.e(3298),r.e(28597),r.e(52154),r.e(1281)]).then(r.bind(r,1281))},i=function(e,n,r){return new Promise((function(i){var a=n.cancel,c=n.confirm;(0,t.B)(e,"show-dialog",{dialogTag:"dialog-box",dialogImport:o,dialogParams:Object.assign(Object.assign(Object.assign({},n),r),{},{cancel:function(){i(!(null==r||!r.prompt)&&null),a&&a()},confirm:function(e){i(null==r||!r.prompt||e),c&&c(e)}})})}))},a=function(e,n){return i(e,n)},c=function(e,n){return i(e,n,{confirmation:!0})},s=function(e,n){return i(e,n,{prompt:!0})}},25145:function(e,n,r){r.d(n,{H:function(){return i}});var t=r(47181),o=function(){return Promise.all([r.e(3298),r.e(28597),r.e(45497),r.e(71454),r.e(82189)]).then(r.bind(r,82189))},i=function(e){(0,t.B)(e,"show-dialog",{dialogTag:"dialog-matter-add-device",dialogImport:o,dialogParams:{}})}},70332:function(e,n,r){r.d(n,{B:function(){return i}});var t=r(47181),o=function(){return Promise.all([r.e(46992),r.e(31338),r.e(42977),r.e(79071),r.e(3298),r.e(63436),r.e(28597),r.e(45497),r.e(99608),r.e(65666),r.e(70632),r.e(90018),r.e(54629)]).then(r.bind(r,54629))},i=function(e,n){(0,t.B)(e,"show-dialog",{dialogTag:"dialog-zwave_js-add-node",dialogImport:o,dialogParams:n})}},60477:function(e,n,r){r.r(n),r.d(n,{getMyRedirects:function(){return S}});var t,o,i,a,c=r(68990),s=r(88962),l=r(33368),d=r(71650),u=r(82390),f=r(69205),p=r(70906),g=r(91808),h=r(88771),_=r(47838),m=r(54211),v=r(68144),b=r(79932),w=r(7323),k=r(78866),y=r(83849),z=r(15493),x=r(5986),Z=(r(48811),r(27322)),S=function(e){return{application_credentials:{redirect:"/config/application_credentials"},developer_states:{redirect:"/developer-tools/state"},developer_services:{redirect:"/developer-tools/service"},developer_call_service:{redirect:"/developer-tools/service",params:{service:"string"}},developer_template:{redirect:"/developer-tools/template"},developer_events:{redirect:"/developer-tools/event"},developer_statistics:{redirect:"/developer-tools/statistics"},server_controls:{redirect:"/developer-tools/yaml"},calendar:{component:"calendar",redirect:"/calendar"},config:{redirect:"/config/dashboard"},cloud:{component:"cloud",redirect:"/config/cloud"},config_flow_start:{redirect:"/config/integrations/dashboard/add",params:{domain:"string"}},brand:{redirect:"/config/integrations/dashboard/add",params:{brand:"string"}},integrations:{redirect:"/config/integrations"},integration:{redirect:"/config/integrations/integration",params:{domain:"string"}},config_mqtt:{component:"mqtt",redirect:"/config/mqtt"},config_zha:{component:"zha",redirect:"/config/zha/dashboard"},config_zwave_js:{component:"zwave_js",redirect:"/config/zwave_js/dashboard"},add_zigbee_device:{component:"zha",redirect:"/config/zha/add"},add_zwave_device:{component:"zwave_js",redirect:"/config/zwave_js/add"},add_matter_device:{component:"matter",redirect:"/config/matter/add"},config_energy:{component:"energy",redirect:"/config/energy/dashboard"},devices:{redirect:"/config/devices/dashboard"},entities:{redirect:"/config/entities"},energy:{component:"energy",redirect:"/energy"},areas:{redirect:"/config/areas/dashboard"},blueprint_import:{component:"blueprint",redirect:"/config/blueprint/dashboard/import",params:{blueprint_url:"url"}},blueprints:{component:"blueprint",redirect:"/config/blueprint/dashboard"},automations:{component:"automation",redirect:"/config/automation/dashboard"},scenes:{component:"scene",redirect:"/config/scene/dashboard"},scripts:{component:"script",redirect:"/config/script/dashboard"},helpers:{redirect:"/config/helpers"},tags:{component:"tag",redirect:"/config/tags"},voice_assistants:{redirect:"/config/voice-assistants"},lovelace_dashboards:{component:"lovelace",redirect:"/config/lovelace/dashboards"},lovelace_resources:{component:"lovelace",redirect:"/config/lovelace/resources"},oauth:{redirect:"/auth/external/callback",navigate_outside_spa:!0,params:{error:"string?",code:"string?",state:"string"}},people:{component:"person",redirect:"/config/person"},zones:{component:"zone",redirect:"/config/zone"},users:{redirect:"/config/users"},general:{redirect:"/config/general"},logs:{redirect:"/config/logs"},repairs:{component:"repairs",redirect:"/config/repairs"},info:{redirect:"/config/info"},system_health:{redirect:"/config/repairs?dialog=system-health"},hardware:{redirect:"/config/hardware"},storage:{redirect:"/config/storage"},network:{redirect:"/config/network"},analytics:{redirect:"/config/analytics"},updates:{redirect:"/config/updates"},system_dashboard:{redirect:"/config/system"},customize:{redirect:"/config/dashboard"},profile:{redirect:"/profile"},logbook:{component:"logbook",redirect:"/logbook"},history:{component:"history",redirect:"/history"},media_browser:{component:"media_source",redirect:"/media-browser"},backup:{component:e?"hassio":"backup",redirect:e?"/hassio/backups":"/config/backup"},supervisor_snapshots:{component:e?"hassio":"backup",redirect:e?"/hassio/backups":"/config/backup"},supervisor_backups:{component:e?"hassio":"backup",redirect:e?"/hassio/backups":"/config/backup"},supervisor_system:{redirect:"/config/system"},supervisor_logs:{redirect:"/config/logs"},supervisor_info:{redirect:"/config/info"},hacs_repository:{component:"hacs",redirect:"/hacs/_my_redirect/hacs_repository",params:{owner:"string",repository:"string",category:"string?"}}}};(0,g.Z)([(0,b.Mo)("ha-panel-my")],(function(e,n){var r=function(n){(0,f.Z)(t,n);var r=(0,p.Z)(t);function t(){var n;(0,d.Z)(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r.call.apply(r,[this].concat(i)),e((0,u.Z)(n)),n}return(0,l.Z)(t)}(n);return{F:r,d:[{kind:"field",decorators:[(0,b.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,b.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,b.SB)()],key:"_error",value:void 0},{kind:"field",key:"_redirect",value:void 0},{kind:"method",key:"connectedCallback",value:function(){var e=this;(0,h.Z)((0,_.Z)(r.prototype),"connectedCallback",this).call(this);var n=this.route.path.substring(1),t=(0,w.p)(this.hass,"hassio");if(this._redirect=function(e,n){var r;return null===(r=S(n))||void 0===r?void 0:r[e]}(n,t),n.startsWith("supervisor")&&void 0===this._redirect)return t?void(0,y.c)("/hassio/_my_redirect/".concat(n).concat(window.location.search),{replace:!0}):void(this._error="no_supervisor");if(this._redirect)if(!this._redirect.component||(0,w.p)(this.hass,this._redirect.component)){var o;try{o=this._createRedirectUrl()}catch(c){return void(this._error="url_error")}this._redirect.navigate_outside_spa?location.assign(o):(0,y.c)(o,{replace:!0})}else{this.hass.loadBackendTranslation("title",this._redirect.component),this._error="no_component";var i=this._redirect.component;if(k.S.includes(i)){var a=(0,z.Q2)();this.hass.loadFragmentTranslation("config").then().then((function(){(0,k.D)(e,e.hass,i,{domain:a.domain,brand:a.brand})}))}}else this._error="not_supported"}},{kind:"method",key:"render",value:function(){if(this._error){var e;switch(this._error){case"not_supported":e=this.hass.localize("ui.panel.my.not_supported","link",(0,v.dy)(t||(t=(0,s.Z)(['<a target="_blank" rel="noreferrer noopener" href="https://my.home-assistant.io/faq.html#supported-pages">',"</a>"])),this.hass.localize("ui.panel.my.faq_link")))||"This redirect is not supported.";break;case"no_component":e=this.hass.localize("ui.panel.my.component_not_loaded","integration",(0,v.dy)(o||(o=(0,s.Z)(['<a target="_blank" rel="noreferrer noopener" href="','">',"</a>"])),(0,Z.R)(this.hass,"/integrations/".concat(this._redirect.component)),(0,x.Lh)(this.hass.localize,this._redirect.component)))||"This redirect is not supported.";break;case"no_supervisor":e=this.hass.localize("ui.panel.my.no_supervisor","docs_link",(0,v.dy)(i||(i=(0,s.Z)(['<a target="_blank" rel="noreferrer noopener" href="','">',"</a>"])),(0,Z.R)(this.hass,"/installation"),this.hass.localize("ui.panel.my.documentation")));break;default:e=this.hass.localize("ui.panel.my.error")||"Unknown error"}return(0,v.dy)(a||(a=(0,s.Z)(['<hass-error-screen .error="','" .hass="','"></hass-error-screen>'])),e,this.hass)}return v.Ld}},{kind:"method",key:"_createRedirectUrl",value:function(){var e=this._createRedirectParams();return"".concat(this._redirect.redirect).concat(e)}},{kind:"method",key:"_createRedirectParams",value:function(){var e=(0,z.Q2)();if(!this._redirect.params&&!Object.keys(e).length)return"";for(var n={},r=0,t=Object.entries(this._redirect.params||{});r<t.length;r++){var o=(0,c.Z)(t[r],2),i=o[0],a=o[1];if(e[i]||!a.endsWith("?")){if(!e[i]||!this._checkParamType(a,e[i]))throw Error();n[i]=e[i]}}return"?".concat((0,z.ou)(n))}},{kind:"method",key:"_checkParamType",value:function(e,n){return"string"===e||"string?"===e||"url"===e&&(n&&n===(0,m.N)(n))}}]}}),v.oi)},27322:function(e,n,r){r.d(n,{R:function(){return t}});var t=function(e,n){return"https://www.iobroker.net/#".concat(e.language&&e.language.split("-")[0]||"en","/adapters/adapterref/iobroker.lovelace/README.md")}}}]);
//# sourceMappingURL=60477-NQMAYJIW3nI.js.map