"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[30462],{74834:function(e,t,i){var a,n=i(88962),o=i(33368),r=i(71650),s=i(82390),c=i(69205),l=i(70906),d=i(91808),u=i(53918),h=i(68144),f=i(79932),p=i(3712);(0,d.Z)([(0,f.Mo)("ha-button")],(function(e,t){var i=function(t){(0,c.Z)(a,t);var i=(0,l.Z)(a);function a(){var t;(0,r.Z)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return t=i.call.apply(i,[this].concat(o)),e((0,s.Z)(t)),t}return(0,o.Z)(a)}(t);return{F:i,d:[{kind:"field",static:!0,key:"styles",value:function(){return[p.W,(0,h.iv)(a||(a=(0,n.Z)(["::slotted([slot=icon]){margin-inline-start:0px;margin-inline-end:8px;direction:var(--direction);display:block}.mdc-button{height:var(--button-height,36px)}"])))]}}]}}),u.Button)},30462:function(e,t,i){i.r(t),i.d(t,{HuiTileCardEditor:function(){return re}});var a,n,o,r,s,c,l,d,u,h,f=i(53709),p=i(88962),v=i(33368),m=i(71650),g=i(82390),y=i(69205),b=i(70906),_=i(91808),k=i(68144),x=i(79932),C=i(14516),V=i(93088),H=i(47181),Z=(i(68331),i(31935),i(85677)),M=i(98346),w=i(45890),A=i(99312),E=i(81043),L=i(34541),j=i(47838),F=i(18848),T=i(32594),O=(i(74535),i(74834),i(10983),i(73366),i(52039),i(9893)),S=i(70651),z=i(98116),B=i(46966),I=i(47067),P=i(44932),K=i(92063),U=i(33332),D=i(97033),R=i(6419),W=i(34603),N=i(56943),Y=i(17245),q=i(32010),G=i(22155),Q=i(45763),X=i(73727),J=["alarm-modes","climate-hvac-modes","target-temperature","cover-open-close","cover-position","cover-tilt-position","cover-tilt","fan-speed","lawn-mower-commands","light-brightness","light-color-temp","vacuum-commands","water-heater-operation-modes"],$=new Set(["vacuum-commands","alarm-modes","climate-hvac-modes","water-heater-operation-modes","lawn-mower-commands"]),ee={"alarm-modes":I.B,"climate-hvac-modes":P.U,"cover-open-close":K.f,"cover-position":U.R,"cover-tilt-position":D.U,"cover-tilt":R.S,"fan-speed":W.t,"lawn-mower-commands":N.Gm,"light-brightness":Y.D,"light-color-temp":q.E,"target-temperature":G.d,"vacuum-commands":Q.t5,"water-heater-operation-modes":X._},te={};O.PN.forEach((function(e){te[e.type]=e}));(0,_.Z)([(0,x.Mo)("hui-tile-card-features-editor")],(function(e,t){var i,f,_=function(t){(0,y.Z)(a,t);var i=(0,b.Z)(a);function a(){var t;(0,m.Z)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t=i.call.apply(i,[this].concat(o)),e((0,g.Z)(t)),t}return(0,v.Z)(a)}(t);return{F:_,d:[{kind:"field",decorators:[(0,x.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,x.Cb)({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,x.Cb)({attribute:!1})],key:"features",value:void 0},{kind:"field",decorators:[(0,x.Cb)()],key:"label",value:void 0},{kind:"field",key:"_featuresKeys",value:function(){return new WeakMap}},{kind:"field",key:"_sortable",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){(0,L.Z)((0,j.Z)(_.prototype),"disconnectedCallback",this).call(this),this._destroySortable()}},{kind:"method",key:"_supportsFeatureType",value:function(e){if(!this.stateObj)return!1;if((0,O.IT)(e)){var t=(0,O.V0)(e),i=te[t];if(null==i||!i.supported)return!0;try{return i.supported(this.stateObj)}catch(n){return!1}}var a=ee[e];return!a||a(this.stateObj)}},{kind:"method",key:"_isFeatureTypeEditable",value:function(e){if((0,O.IT)(e)){var t=(0,O.V0)(e),i=te[t];return null==i?void 0:i.configurable}return $.has(e)}},{kind:"method",key:"_getFeatureTypeLabel",value:function(e){if((0,O.IT)(e)){var t=(0,O.V0)(e),i=te[t];return(null==i?void 0:i.name)||e}return this.hass.localize("ui.panel.lovelace.editor.card.tile.features.types.".concat(e,".label"))||e}},{kind:"method",key:"_getKey",value:function(e){return this._featuresKeys.has(e)||this._featuresKeys.set(e,Math.random().toString()),this._featuresKeys.get(e)}},{kind:"method",key:"firstUpdated",value:function(){this._createSortable()}},{kind:"method",key:"_getSupportedFeaturesType",value:function(){var e=this,t=J,i=O.PN.map((function(e){return"".concat(O.Qo).concat(e.type)}));return t.concat(i).filter((function(t){return e._supportsFeatureType(t)}))}},{kind:"method",key:"render",value:function(){var e=this;if(!this.features||!this.hass)return k.Ld;var t=this._getSupportedFeaturesType(),i=t.filter((function(e){return!(0,O.IT)(e)})),h=t.filter((function(e){return(0,O.IT)(e)}));return(0,k.dy)(a||(a=(0,p.Z)([' <ha-expansion-panel outlined> <h3 slot="header"> <ha-svg-icon .path="','"></ha-svg-icon> ',' </h3> <div class="content"> ',' <div class="features"> '," </div> "," </div> </ha-expansion-panel> "])),"M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M7 7H9V9H7V7M7 11H9V13H7V11M7 15H9V17H7V15M17 17H11V15H17V17M17 13H11V11H17V13M17 9H11V7H17V9Z",this.hass.localize("ui.panel.lovelace.editor.card.tile.features.name"),0===t.length&&0===this.features.length?(0,k.dy)(n||(n=(0,p.Z)([' <ha-alert type="info"> '," </ha-alert> "])),this.hass.localize("ui.panel.lovelace.editor.card.tile.features.no_compatible_available")):k.Ld,(0,F.r)(this.features,(function(t){return e._getKey(t)}),(function(t,i){var a=t.type,n=e._supportsFeatureType(a),c=e._isFeatureTypeEditable(a);return(0,k.dy)(o||(o=(0,p.Z)([' <div class="feature"> <div class="handle"> <ha-svg-icon .path="','"></ha-svg-icon> </div> <div class="feature-content"> <div> <span> '," </span> "," </div> </div> ",' <ha-icon-button .label="','" .path="','" class="remove-icon" .index="','" @click="','"></ha-icon-button> </div> '])),"M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z",e._getFeatureTypeLabel(a),e.stateObj&&!n?(0,k.dy)(r||(r=(0,p.Z)([' <span class="secondary"> '," </span> "])),e.hass.localize("ui.panel.lovelace.editor.card.tile.features.not_compatible")):k.Ld,c?(0,k.dy)(s||(s=(0,p.Z)([' <ha-icon-button .label="','" .path="','" class="edit-icon" .index="','" @click="','" .disabled="','"></ha-icon-button> '])),e.hass.localize("ui.panel.lovelace.editor.card.tile.features.edit"),"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",i,e._editFeature,!n):k.Ld,e.hass.localize("ui.panel.lovelace.editor.card.tile.features.remove"),"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",i,e._removeFeature)})),t.length>0?(0,k.dy)(c||(c=(0,p.Z)([' <ha-button-menu fixed @action="','" @closed="','"> <ha-button slot="trigger" outlined .label="','"> <ha-svg-icon .path="','" slot="icon"></ha-svg-icon> </ha-button> '," "," "," </ha-button-menu> "])),this._addFeature,T.U,this.hass.localize("ui.panel.lovelace.editor.card.tile.features.add"),"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",i.map((function(t){return(0,k.dy)(l||(l=(0,p.Z)([' <ha-list-item .value="','"> '," </ha-list-item> "])),t,e._getFeatureTypeLabel(t))})),i.length>0&&h.length>0?(0,k.dy)(d||(d=(0,p.Z)(['<li divider role="separator"></li>']))):k.Ld,h.map((function(t){return(0,k.dy)(u||(u=(0,p.Z)([' <ha-list-item .value="','"> '," </ha-list-item> "])),t,e._getFeatureTypeLabel(t))}))):k.Ld)}},{kind:"method",key:"_createSortable",value:(f=(0,E.Z)((0,A.Z)().mark((function e(){var t,i=this;return(0,A.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,z.F)();case 2:t=e.sent,this._sortable=new t(this.shadowRoot.querySelector(".features"),{animation:150,fallbackClass:"sortable-fallback",handle:".handle",onChoose:function(e){e.item.placeholder=document.createComment("sort-placeholder"),e.item.after(e.item.placeholder)},onEnd:function(e){e.item.placeholder&&(e.item.placeholder.replaceWith(e.item),delete e.item.placeholder),i._rowMoved(e)}});case 4:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})},{kind:"method",key:"_destroySortable",value:function(){var e;null===(e=this._sortable)||void 0===e||e.destroy(),this._sortable=void 0}},{kind:"method",key:"_addFeature",value:(i=(0,E.Z)((0,A.Z)().mark((function e(t){var i,a,n,o,r;return(0,A.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(i=t.detail.index)){e.next=3;break}return e.abrupt("return");case 3:if(a=this._getSupportedFeaturesType()[i]){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,(0,B.j)(a);case 8:if(!(n=e.sent)||!n.getStubConfig){e.next=15;break}return e.next=12,n.getStubConfig(this.hass,this.stateObj);case 12:o=e.sent,e.next=16;break;case 15:o={type:a};case 16:r=this.features.concat(o),(0,H.B)(this,"features-changed",{features:r});case 18:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{kind:"method",key:"_rowMoved",value:function(e){if(e.oldIndex!==e.newIndex){var t=this.features.concat();t.splice(e.newIndex,0,t.splice(e.oldIndex,1)[0]),(0,H.B)(this,"features-changed",{features:t})}}},{kind:"method",key:"_removeFeature",value:function(e){var t=e.currentTarget.index,i=this.features.concat();i.splice(t,1),(0,H.B)(this,"features-changed",{features:i})}},{kind:"method",key:"_editFeature",value:function(e){var t=e.currentTarget.index;(0,H.B)(this,"edit-detail-element",{subElementConfig:{index:t,type:"tile-feature",elementConfig:this.features[t]}})}},{kind:"get",static:!0,key:"styles",value:function(){return[S.Y,(0,k.iv)(h||(h=(0,p.Z)([":host{display:flex!important;flex-direction:column}.content{padding:12px}ha-expansion-panel{display:block;--expansion-panel-content-padding:0;border-radius:6px}h3{margin:0;font-size:inherit;font-weight:inherit}ha-icon,ha-svg-icon{color:var(--secondary-text-color)}ha-button-menu{margin-top:8px}.feature{display:flex;align-items:center}.feature .handle{padding-right:8px;cursor:move;padding-inline-end:8px;padding-inline-start:initial;direction:var(--direction)}.feature .handle>*{pointer-events:none}.feature-content{height:60px;font-size:16px;display:flex;align-items:center;justify-content:space-between;flex-grow:1}.feature-content div{display:flex;flex-direction:column}.edit-icon,.remove-icon{--mdc-icon-button-size:36px;color:var(--secondary-text-color)}.secondary{font-size:12px;color:var(--secondary-text-color)}li[divider]{border-bottom-color:var(--divider-color)}"])))]}}]}}),k.oi);var ie,ae,ne,oe=(0,V.f0)(M.I,(0,V.Ry)({entity:(0,V.jt)((0,V.Z_)()),name:(0,V.jt)((0,V.Z_)()),icon:(0,V.jt)((0,V.Z_)()),color:(0,V.jt)((0,V.Z_)()),show_entity_picture:(0,V.jt)((0,V.O7)()),vertical:(0,V.jt)((0,V.O7)()),tap_action:(0,V.jt)(Z.C),icon_tap_action:(0,V.jt)(Z.C),features:(0,V.jt)((0,V.IX)((0,V.Yj)()))})),re=(0,_.Z)([(0,x.Mo)("hui-tile-card-editor")],(function(e,t){var i=function(t){(0,y.Z)(a,t);var i=(0,b.Z)(a);function a(){var t;(0,m.Z)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t=i.call.apply(i,[this].concat(o)),e((0,g.Z)(t)),t}return(0,v.Z)(a)}(t);return{F:i,d:[{kind:"field",decorators:[(0,x.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,x.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,x.SB)()],key:"_subElementEditorConfig",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,V.hu)(e,oe),this._config=e}},{kind:"field",key:"_schema",value:function(){return(0,C.Z)((function(e){return[{name:"entity",selector:{entity:{}}},{name:"",type:"expandable",iconPath:"M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z",title:e("ui.panel.lovelace.editor.card.tile.appearance"),schema:[{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}},context:{icon_entity:"entity"}},{name:"color",selector:{ui_color:{}}},{name:"show_entity_picture",selector:{boolean:{}}},{name:"vertical",selector:{boolean:{}}}]}]},{name:"",type:"expandable",title:e("ui.panel.lovelace.editor.card.tile.actions"),iconPath:"M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z",schema:[{name:"tap_action",selector:{ui_action:{}}},{name:"icon_tap_action",selector:{ui_action:{}}}]}]}))}},{kind:"field",key:"_context",value:function(){return(0,C.Z)((function(e){return{entity_id:e}}))}},{kind:"method",key:"render",value:function(){var e,t;if(!this.hass||!this._config)return k.Ld;var i=this.hass.states[null!==(e=this._config.entity)&&void 0!==e?e:""],a=this._schema(this.hass.localize);return this._subElementEditorConfig?(0,k.dy)(ie||(ie=(0,p.Z)([' <hui-sub-element-editor .hass="','" .config="','" .context="','" @go-back="','" @config-changed="','"> </hui-sub-element-editor> '])),this.hass,this._subElementEditorConfig,this._context(this._config.entity),this._goBack,this.subElementChanged):(0,k.dy)(ae||(ae=(0,p.Z)([' <ha-form .hass="','" .data="','" .schema="','" .computeLabel="','" @value-changed="','"></ha-form> <hui-tile-card-features-editor .hass="','" .stateObj="','" .features="','" @features-changed="','" @edit-detail-element="','"></hui-tile-card-features-editor> '])),this.hass,this._config,a,this._computeLabelCallback,this._valueChanged,this.hass,i,null!==(t=this._config.features)&&void 0!==t?t:[],this._featuresChanged,this._editDetailElement)}},{kind:"method",key:"_valueChanged",value:function(e){if(e.stopPropagation(),this._config&&this.hass){var t=Object.assign({features:this._config.features},e.detail.value);(0,H.B)(this,"config-changed",{config:t})}}},{kind:"method",key:"_featuresChanged",value:function(e){if(e.stopPropagation(),this._config&&this.hass){var t=e.detail.features,i=Object.assign(Object.assign({},this._config),{},{features:t});0===t.length&&delete i.features,(0,H.B)(this,"config-changed",{config:i})}}},{kind:"method",key:"subElementChanged",value:function(e){if(e.stopPropagation(),this._config&&this.hass){var t=e.detail.config,i=this._config.features?(0,f.Z)(this._config.features):[];t?i[this._subElementEditorConfig.index]=t:(i.splice(this._subElementEditorConfig.index,1),this._goBack()),this._config=Object.assign(Object.assign({},this._config),{},{features:i}),this._subElementEditorConfig=Object.assign(Object.assign({},this._subElementEditorConfig),{},{elementConfig:t}),(0,H.B)(this,"config-changed",{config:this._config})}}},{kind:"method",key:"_editDetailElement",value:function(e){this._subElementEditorConfig=e.detail.subElementConfig}},{kind:"method",key:"_goBack",value:function(){this._subElementEditorConfig=void 0}},{kind:"field",key:"_computeLabelCallback",value:function(){var e=this;return function(t){switch(t.name){case"color":case"icon_tap_action":case"show_entity_picture":case"vertical":return e.hass.localize("ui.panel.lovelace.editor.card.tile.".concat(t.name));default:return e.hass.localize("ui.panel.lovelace.editor.card.generic.".concat(t.name))}}}},{kind:"get",static:!0,key:"styles",value:function(){return[w.A,(0,k.iv)(ne||(ne=(0,p.Z)([".container{display:flex;flex-direction:column}ha-form{display:block;margin-bottom:24px}"])))]}}]}}),k.oi)}}]);
//# sourceMappingURL=30462-5LLJOGU6rUk.js.map