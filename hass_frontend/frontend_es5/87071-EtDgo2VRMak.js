"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[87071],{45890:function(t,i,e){e.d(i,{A:function(){return o}});var n,a=e(88962),o=(0,e(68144).iv)(n||(n=(0,a.Z)([".card-config{overflow:auto}ha-switch{padding:16px 6px}.side-by-side{display:flex;align-items:flex-end}.side-by-side>*{flex:1;padding-right:8px}.side-by-side>:last-child{flex:1;padding-right:0}.suffix{margin:0 8px}ha-icon-picker,ha-select,ha-textfield,hui-action-editor{margin-top:8px;display:block}"])))},87071:function(t,i,e){e.r(i),e.d(i,{HuiGraphFooterEditor:function(){return j}});var n,a=e(93359),o=e(88962),s=e(33368),c=e(71650),r=e(82390),l=e(69205),u=e(70906),h=e(91808),d=e(68144),f=e(79932),_=e(93088),g=e(47181),v=(e(74535),e(83927),e(43709),e(3555),e(61173)),y=e(45890),p=["sensor"],j=(0,h.Z)([(0,f.Mo)("hui-graph-footer-editor")],(function(t,i){var e=function(i){(0,l.Z)(n,i);var e=(0,u.Z)(n);function n(){var i;(0,c.Z)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return i=e.call.apply(e,[this].concat(o)),t((0,r.Z)(i)),i}return(0,s.Z)(n)}(i);return{F:e,d:[{kind:"field",decorators:[(0,f.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,f.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){(0,_.hu)(t,v.gg),this._config=t}},{kind:"get",key:"_entity",value:function(){return this._config.entity||""}},{kind:"get",key:"_detail",value:function(){var t;return null!==(t=this._config.detail)&&void 0!==t?t:1}},{kind:"get",key:"_hours_to_show",value:function(){return this._config.hours_to_show||24}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?(0,d.dy)(n||(n=(0,o.Z)([' <div class="card-config"> <ha-entity-picker allow-custom-entity .label="','" .hass="','" .value="','" .configValue="','" .includeDomains="','" .required="','" @change="','"></ha-entity-picker> <div class="side-by-side"> <ha-formfield label="','"> <ha-switch .checked="','" .configValue="','" @change="','"></ha-switch> </ha-formfield> <ha-textfield type="number" .label="'," (",')" .value="','" min="1" .configValue="','" @input="','"></ha-textfield> </div> </div> '])),this.hass.localize("ui.panel.lovelace.editor.card.generic.entity"),this.hass,this._entity,"entity",p,!0,this._valueChanged,this.hass.localize("ui.panel.lovelace.editor.card.sensor.show_more_detail"),2===this._detail,"detail",this._change,this.hass.localize("ui.panel.lovelace.editor.card.generic.hours_to_show"),this.hass.localize("ui.panel.lovelace.editor.card.config.optional"),this._hours_to_show,"hours_to_show",this._valueChanged):d.Ld}},{kind:"method",key:"_change",value:function(t){if(this._config&&this.hass){var i=t.target.checked?2:1;this._detail!==i&&(this._config=Object.assign(Object.assign({},this._config),{},{detail:i}),(0,g.B)(this,"config-changed",{config:this._config}))}}},{kind:"method",key:"_valueChanged",value:function(t){if(this._config&&this.hass){var i=t.target;if(this["_".concat(i.configValue)]!==i.value){if(i.configValue)if(""===i.value||"number"===i.type&&isNaN(Number(i.value)))this._config=Object.assign({},this._config),delete this._config[i.configValue];else{var e=i.value;"number"===i.type&&(e=Number(e)),this._config=Object.assign(Object.assign({},this._config),{},(0,a.Z)({},i.configValue,e))}(0,g.B)(this,"config-changed",{config:this._config})}}}},{kind:"get",static:!0,key:"styles",value:function(){return y.A}}]}}),d.oi)},85677:function(t,i,e){e.d(i,{C:function(){return f}});var n=e(76775),a=e(93088),o=(0,a.Ry)({user:(0,a.Z_)()}),s=(0,a.G0)([(0,a.O7)(),(0,a.Ry)({text:(0,a.jt)((0,a.Z_)()),excemptions:(0,a.jt)((0,a.IX)(o))})]),c=(0,a.Ry)({action:(0,a.i0)("url"),url_path:(0,a.Z_)(),confirmation:(0,a.jt)(s)}),r=(0,a.Ry)({action:(0,a.i0)("call-service"),service:(0,a.Z_)(),service_data:(0,a.jt)((0,a.Ry)()),data:(0,a.jt)((0,a.Ry)()),target:(0,a.jt)((0,a.Ry)({entity_id:(0,a.jt)((0,a.G0)([(0,a.Z_)(),(0,a.IX)((0,a.Z_)())])),device_id:(0,a.jt)((0,a.G0)([(0,a.Z_)(),(0,a.IX)((0,a.Z_)())])),area_id:(0,a.jt)((0,a.G0)([(0,a.Z_)(),(0,a.IX)((0,a.Z_)())]))})),confirmation:(0,a.jt)(s)}),l=(0,a.Ry)({action:(0,a.i0)("navigate"),navigation_path:(0,a.Z_)(),confirmation:(0,a.jt)(s)}),u=(0,a.dt)({action:(0,a.i0)("assist"),pipeline_id:(0,a.jt)((0,a.Z_)()),start_listening:(0,a.jt)((0,a.O7)())}),h=(0,a.dt)({action:(0,a.i0)("fire-dom-event")}),d=(0,a.Ry)({action:(0,a.kE)(["none","toggle","more-info","call-service","url","navigate","assist"]),confirmation:(0,a.jt)(s)}),f=(0,a.D8)((function(t){if(t&&"object"===(0,n.Z)(t)&&"action"in t)switch(t.action){case"call-service":return r;case"fire-dom-event":return h;case"navigate":return l;case"url":return c;case"assist":return u}return d}))},53939:function(t,i,e){e.d(i,{k:function(){return o}});var n=e(93088),a=e(85677),o=(0,n.Ry)({entity:(0,n.Z_)(),name:(0,n.jt)((0,n.Z_)()),icon:(0,n.jt)((0,n.Z_)()),image:(0,n.jt)((0,n.Z_)()),show_name:(0,n.jt)((0,n.O7)()),show_icon:(0,n.jt)((0,n.O7)()),tap_action:(0,n.jt)(a.C),hold_action:(0,n.jt)(a.C),double_tap_action:(0,n.jt)(a.C)})},61173:function(t,i,e){e.d(i,{ds:function(){return u},gg:function(){return l}});var n=e(76775),a=e(93088),o=e(85677),s=e(53939),c=(0,a.Ry)({type:(0,a.Z_)(),image:(0,a.Z_)(),tap_action:(0,a.jt)(o.C),hold_action:(0,a.jt)(o.C),double_tap_action:(0,a.jt)(o.C),alt_text:(0,a.jt)((0,a.Z_)())}),r=(0,a.Ry)({type:(0,a.Z_)(),entities:(0,a.IX)(s.k)}),l=(0,a.Ry)({type:(0,a.Z_)(),entity:(0,a.Z_)(),detail:(0,a.jt)((0,a.Rx)()),hours_to_show:(0,a.jt)((0,a.Rx)())}),u=(0,a.D8)((function(t){if(t&&"object"===(0,n.Z)(t)&&"type"in t)switch(t.type){case"buttons":return r;case"graph":return l;case"picture":return c}return(0,a.G0)([r,l,c])}))}}]);
//# sourceMappingURL=87071-EtDgo2VRMak.js.map