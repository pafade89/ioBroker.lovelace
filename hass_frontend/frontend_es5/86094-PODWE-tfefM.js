"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[86094],{86094:function(e,a,t){t.r(a);var n=t(33368),r=t(71650),i=t(82390),o=t(69205),s=t(70906),d=t(91808),u=t(79932),h=t(83849),c=t(18199);(0,d.Z)([(0,u.Mo)("zha-config-dashboard-router")],(function(e,a){var d=function(a){(0,o.Z)(d,a);var t=(0,s.Z)(d);function d(){var a;(0,r.Z)(this,d);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return a=t.call.apply(t,[this].concat(o)),e((0,i.Z)(a)),a}return(0,n.Z)(d)}(a);return{F:d,d:[{kind:"field",decorators:[(0,u.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,u.Cb)()],key:"isWide",value:void 0},{kind:"field",decorators:[(0,u.Cb)()],key:"narrow",value:void 0},{kind:"field",key:"_configEntry",value:function(){return new URLSearchParams(window.location.search).get("config_entry")}},{kind:"field",key:"routerOptions",value:function(){return{defaultPage:"dashboard",showLoading:!0,routes:{dashboard:{tag:"zha-config-dashboard",load:function(){return Promise.all([t.e(3298),t.e(45497),t.e(58543),t.e(49703),t.e(64809),t.e(8024)]).then(t.bind(t,64809))}},add:{tag:"zha-add-devices-page",load:function(){return Promise.all([t.e(46992),t.e(31338),t.e(42977),t.e(79071),t.e(3298),t.e(45497),t.e(97487),t.e(2185),t.e(58543),t.e(39975),t.e(97215),t.e(6971),t.e(37036),t.e(81312),t.e(40163),t.e(3143),t.e(47772),t.e(49703),t.e(64809),t.e(80535)]).then(t.bind(t,15919))}},groups:{tag:"zha-groups-dashboard",load:function(){return Promise.all([t.e(46992),t.e(31338),t.e(42977),t.e(3298),t.e(45497),t.e(41985),t.e(33829),t.e(58543),t.e(8439),t.e(49703),t.e(37168),t.e(64809),t.e(55886)]).then(t.bind(t,95932))}},group:{tag:"zha-group-page",load:function(){return Promise.all([t.e(46992),t.e(31338),t.e(42977),t.e(3298),t.e(45497),t.e(41985),t.e(67848),t.e(37168),t.e(83286),t.e(86444)]).then(t.bind(t,86444))}},"group-add":{tag:"zha-add-group-page",load:function(){return Promise.all([t.e(46992),t.e(31338),t.e(42977),t.e(3298),t.e(45497),t.e(2185),t.e(41985),t.e(39975),t.e(97215),t.e(6971),t.e(67848),t.e(37168),t.e(83286),t.e(82503)]).then(t.bind(t,24550))}},visualization:{tag:"zha-network-visualization-page",load:function(){return Promise.all([t.e(46992),t.e(31338),t.e(42977),t.e(79071),t.e(3298),t.e(63436),t.e(45497),t.e(99608),t.e(65666),t.e(97487),t.e(2185),t.e(41985),t.e(58543),t.e(79590),t.e(40163),t.e(49703),t.e(64809),t.e(76773)]).then(t.bind(t,76773))}}}}}},{kind:"method",key:"updatePageEl",value:function(e){e.route=this.routeTail,e.hass=this.hass,e.isWide=this.isWide,e.narrow=this.narrow,e.configEntryId=this._configEntry,"group"===this._currentPage?e.groupId=this.routeTail.path.substr(1):"device"===this._currentPage?e.ieee=this.routeTail.path.substr(1):"visualization"===this._currentPage&&(e.zoomedDeviceIdFromURL=this.routeTail.path.substr(1));var a=new URLSearchParams(window.location.search);this._configEntry&&!a.has("config_entry")&&(a.append("config_entry",this._configEntry),(0,h.c)("".concat(this.routeTail.prefix).concat(this.routeTail.path,"?").concat(a.toString()),{replace:!0}))}}]}}),c.n)}}]);
//# sourceMappingURL=86094-PODWE-tfefM.js.map