export const id=32160;export const ids=[32160];export const modules={22311:(e,t,i)=>{i.d(t,{N:()=>o});var a=i(58831);const o=e=>(0,a.M)(e.entity_id)},22098:(e,t,i)=>{var a=i(17463),o=i(68144),n=i(79932);(0,a.Z)([(0,n.Mo)("ha-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,reflect:!0})],key:"raised",value:()=>!1},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`:host{background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,none);box-sizing:border-box;border-radius:var(--ha-card-border-radius,12px);border-width:var(--ha-card-border-width,1px);border-style:solid;border-color:var(--ha-card-border-color,var(--divider-color,#e0e0e0));color:var(--primary-text-color);display:block;transition:all .3s ease-out;position:relative}:host([raised]){border:none;box-shadow:var(--ha-card-box-shadow,0px 2px 1px -1px rgba(0,0,0,.2),0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12))}.card-header,:host ::slotted(.card-header){color:var(--ha-card-header-color,--primary-text-color);font-family:var(--ha-card-header-font-family,inherit);font-size:var(--ha-card-header-font-size,24px);letter-spacing:-.012em;line-height:48px;padding:12px 16px 16px;display:block;margin-block-start:0px;margin-block-end:0px;font-weight:400}:host ::slotted(.card-content:not(:first-child)),slot:not(:first-child)::slotted(.card-content){padding-top:0px;margin-top:-8px}:host ::slotted(.card-content){padding:16px}:host ::slotted(.card-actions){border-top:1px solid var(--divider-color,#e8e8e8);padding:5px 16px}`}},{kind:"method",key:"render",value:function(){return o.dy` ${this.header?o.dy`<h1 class="card-header">${this.header}</h1>`:o.Ld} <slot></slot> `}}]}}),o.oi)},31206:(e,t,i)=>{i.r(t),i.d(t,{HaCircularProgress:()=>l});var a=i(17463),o=i(34541),n=i(47838),r=i(30879),d=i(68144),s=i(79932);let l=(0,a.Z)([(0,s.Mo)("ha-circular-progress")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"active",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)()],key:"alt",value:()=>"Loading"},{kind:"field",decorators:[(0,s.Cb)()],key:"size",value:()=>"medium"},{kind:"set",key:"density",value:function(e){}},{kind:"get",key:"density",value:function(){switch(this.size){case"tiny":return-8;case"small":return-5;case"medium":default:return 0;case"large":return 5}}},{kind:"set",key:"indeterminate",value:function(e){}},{kind:"get",key:"indeterminate",value:function(){return this.active}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,o.Z)((0,n.Z)(i),"styles",this),d.iv`:host{overflow:hidden}`]}}]}}),r.D)},36125:(e,t,i)=>{var a=i(17463),o=i(34541),n=i(47838),r=i(48095),d=i(72477),s=i(79932),l=i(68144);(0,a.Z)([(0,s.Mo)("ha-fab")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"firstUpdated",value:function(e){(0,o.Z)((0,n.Z)(i.prototype),"firstUpdated",this).call(this,e),this.style.setProperty("--mdc-theme-secondary","var(--primary-color)")}},{kind:"field",static:!0,key:"styles",value:()=>[d.W,l.iv`:host .mdc-fab--extended .mdc-fab__icon{margin-inline-start:-8px;margin-inline-end:12px;direction:var(--direction)}`,"rtl"===document.dir?l.iv`:host .mdc-fab--extended .mdc-fab__icon{direction:rtl}`:l.iv``]}]}}),r._)},16235:(e,t,i)=>{var a=i(17463),o=i(68144),n=i(79932);(0,a.Z)([(0,n.Mo)("ha-input-helper-text")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",key:"render",value:function(){return o.dy`<slot></slot>`}},{kind:"field",static:!0,key:"styles",value:()=>o.iv`:host{display:block;color:var(--mdc-text-field-label-ink-color,rgba(0,0,0,.6));font-size:.75rem;padding-left:16px;padding-right:16px}`}]}}),o.oi)},48456:(e,t,i)=>{var a=i(17463),o=i(34541),n=i(47838),r=i(68144),d=i(79932),s=i(14516),l=i(47181);i(16235),i(13786);(0,a.Z)([(0,d.Mo)("ha-locations-editor")],(function(e,t){class a extends t{constructor(){super(),e(this),this._loadPromise=i.e(70208).then(i.t.bind(i,70208,23)).then((e=>i.e(27716).then(i.t.bind(i,27716,23)).then((()=>(this.Leaflet=e.default,this._updateMarkers(),this.updateComplete.then((()=>this.fitMap())))))))}}return{F:a,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"locations",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"autoFit",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Number})],key:"zoom",value:()=>16},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"darkMode",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_locationMarkers",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_circles",value:()=>({})},{kind:"field",decorators:[(0,d.IO)("ha-map",!0)],key:"map",value:void 0},{kind:"field",key:"Leaflet",value:void 0},{kind:"field",key:"_loadPromise",value:void 0},{kind:"method",key:"fitMap",value:function(e){this.map.fitMap(e)}},{kind:"method",key:"fitBounds",value:function(e,t){this.map.fitBounds(e,t)}},{kind:"method",key:"fitMarker",value:async function(e,t){if(this.Leaflet||await this._loadPromise,!this.map.leafletMap||!this._locationMarkers)return;const i=this._locationMarkers[e];if(i)if("getBounds"in i)this.map.leafletMap.fitBounds(i.getBounds()),i.bringToFront();else{const a=this._circles[e];a?this.map.leafletMap.fitBounds(a.getBounds()):this.map.leafletMap.setView(i.getLatLng(),(null==t?void 0:t.zoom)||this.zoom)}}},{kind:"method",key:"render",value:function(){return r.dy` <ha-map .hass="${this.hass}" .layers="${this._getLayers(this._circles,this._locationMarkers)}" .zoom="${this.zoom}" .autoFit="${this.autoFit}" .darkMode="${this.darkMode}"></ha-map> ${this.helper?r.dy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""} `}},{kind:"field",key:"_getLayers",value:()=>(0,s.Z)(((e,t)=>{const i=[];return Array.prototype.push.apply(i,Object.values(e)),t&&Array.prototype.push.apply(i,Object.values(t)),i}))},{kind:"method",key:"willUpdate",value:function(e){(0,o.Z)((0,n.Z)(a.prototype),"willUpdate",this).call(this,e),this.Leaflet&&e.has("locations")&&this._updateMarkers()}},{kind:"method",key:"_updateLocation",value:function(e){const t=e.target,i=t.getLatLng();let a=i.lng;Math.abs(a)>180&&(a=(a%360+540)%360-180);const o=[i.lat,a];(0,l.B)(this,"location-updated",{id:t.id,location:o},{bubbles:!1})}},{kind:"method",key:"_updateRadius",value:function(e){const t=e.target,i=this._locationMarkers[t.id];(0,l.B)(this,"radius-updated",{id:t.id,radius:i.getRadius()},{bubbles:!1})}},{kind:"method",key:"_markerClicked",value:function(e){const t=e.target;(0,l.B)(this,"marker-clicked",{id:t.id},{bubbles:!1})}},{kind:"method",key:"_updateMarkers",value:function(){if(!this.locations||!this.locations.length)return this._circles={},void(this._locationMarkers=void 0);const e={},t={},i=getComputedStyle(this).getPropertyValue("--accent-color");this.locations.forEach((a=>{let o;if(a.icon||a.iconPath){const e=document.createElement("div");let t;e.className="named-icon",void 0!==a.name&&(e.innerText=a.name),a.icon?(t=document.createElement("ha-icon"),t.setAttribute("icon",a.icon)):(t=document.createElement("ha-svg-icon"),t.setAttribute("path",a.iconPath)),e.prepend(t),o=this.Leaflet.divIcon({html:e.outerHTML,iconSize:[24,24],className:"light"})}if(a.radius){const n=this.Leaflet.circle([a.latitude,a.longitude],{color:a.radius_color||i,radius:a.radius});a.radius_editable||a.location_editable?(n.editing.enable(),n.addEventListener("add",(()=>{const e=n.editing._moveMarker,t=n.editing._resizeMarkers[0];o&&e.setIcon(o),t.id=e.id=a.id,e.addEventListener("dragend",(e=>this._updateLocation(e))).addEventListener("click",(e=>this._markerClicked(e))),a.radius_editable?t.addEventListener("dragend",(e=>this._updateRadius(e))):t.remove()})),e[a.id]=n):t[a.id]=n}if(!a.radius||!a.radius_editable&&!a.location_editable){const t={title:a.name,draggable:a.location_editable};o&&(t.icon=o);const i=this.Leaflet.marker([a.latitude,a.longitude],t).addEventListener("dragend",(e=>this._updateLocation(e))).addEventListener("click",(e=>this._markerClicked(e)));i.id=a.id,e[a.id]=i}})),this._circles=t,this._locationMarkers=e,(0,l.B)(this,"markers-updated")}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`ha-map{display:block;height:100%}`}}]}}),r.oi)},41886:(e,t,i)=>{i.d(t,{Ij:()=>o,S7:()=>a});const a=(e,t)=>e.callWS({type:"config/core/update",...t}),o=e=>e.callApi("POST","config/core/check_config")},45841:(e,t,i)=>{i.d(t,{$H:()=>n,Bf:()=>r,Pc:()=>c,fT:()=>l,vp:()=>d,zt:()=>o});var a=i(83849);const o=e=>e.callWS({type:"zone/list"}),n=(e,t)=>e.callWS({type:"zone/create",...t}),r=(e,t,i)=>e.callWS({type:"zone/update",zone_id:t,...i}),d=(e,t)=>e.callWS({type:"zone/delete",zone_id:t});let s;const l=e=>{s=e,(0,a.c)("/config/zone/new")},c=()=>{const e=s;return s=void 0,e}},15291:(e,t,i)=>{i.r(t);var a=i(17463),o=i(68144),n=i(79932),r=(i(31206),i(2315),i(48932),i(11654));(0,a.Z)([(0,n.Mo)("hass-loading-screen")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"no-toolbar"})],key:"noToolbar",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"rootnav",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)()],key:"message",value:void 0},{kind:"method",key:"render",value:function(){var e;return o.dy` ${this.noToolbar?"":o.dy`<div class="toolbar"> ${this.rootnav||null!==(e=history.state)&&void 0!==e&&e.root?o.dy` <ha-menu-button .hass="${this.hass}" .narrow="${this.narrow}"></ha-menu-button> `:o.dy` <ha-icon-button-arrow-prev .hass="${this.hass}" @click="${this._handleBack}"></ha-icon-button-arrow-prev> `} </div>`} <div class="content"> <ha-circular-progress active></ha-circular-progress> ${this.message?o.dy`<div id="loading-text">${this.message}</div>`:o.Ld} </div> `}},{kind:"method",key:"_handleBack",value:function(){history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[r.Qx,o.iv`:host{display:block;height:100%;background-color:var(--primary-background-color)}.toolbar{display:flex;align-items:center;font-size:20px;height:var(--header-height);padding:8px 12px;pointer-events:none;background-color:var(--app-header-background-color);font-weight:400;color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box}@media (max-width:599px){.toolbar{padding:4px}}ha-icon-button-arrow-prev,ha-menu-button{pointer-events:auto}.content{height:calc(100% - var(--header-height));display:flex;flex-direction:column;align-items:center;justify-content:center}#loading-text{max-width:350px;margin-top:16px}`]}}]}}),o.oi)},88165:(e,t,i)=>{var a=i(17463),o=i(68144),n=i(79932),r=i(83448);(0,a.Z)([(0,n.Mo)("ha-config-section")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)()],key:"isWide",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"vertical",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"full-width"})],key:"fullWidth",value:()=>!1},{kind:"method",key:"render",value:function(){return o.dy` <div class="content ${(0,r.$)({narrow:!this.isWide,"full-width":this.fullWidth})}"> <div class="header"><slot name="header"></slot></div> <div class="together layout ${(0,r.$)({narrow:!this.isWide,vertical:this.vertical||!this.isWide,horizontal:!this.vertical&&this.isWide})}"> <div class="intro"><slot name="introduction"></slot></div> <div class="panel flex-auto"><slot></slot></div> </div> </div> `}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`:host{display:block}.content{padding:28px 20px 0;max-width:1040px;margin:0 auto}.layout{display:flex}.horizontal{flex-direction:row}.vertical{flex-direction:column}.flex-auto{flex:1 1 auto}.header{font-family:var(--paper-font-headline_-_font-family);-webkit-font-smoothing:var(--paper-font-headline_-_-webkit-font-smoothing);font-size:var(--paper-font-headline_-_font-size);font-weight:var(--paper-font-headline_-_font-weight);letter-spacing:var(--paper-font-headline_-_letter-spacing);line-height:var(--paper-font-headline_-_line-height);opacity:var(--dark-primary-opacity)}.together{margin-top:32px}.intro{font-family:var(--paper-font-subhead_-_font-family);-webkit-font-smoothing:var(--paper-font-subhead_-_-webkit-font-smoothing);font-weight:var(--paper-font-subhead_-_font-weight);line-height:var(--paper-font-subhead_-_line-height);width:100%;opacity:var(--dark-primary-opacity);font-size:14px;padding-bottom:20px}.horizontal .intro{max-width:400px;margin-right:40px}.panel{margin-top:-24px}.panel ::slotted(*){margin-top:24px;display:block}.narrow.content{max-width:640px}.narrow .together{margin-top:20px}.narrow .intro{padding-bottom:20px;margin-right:0;max-width:500px}.full-width{padding:0}.full-width .layout{flex-direction:column}`}}]}}),o.oi)},68446:(e,t,i)=>{i.r(t),i.d(t,{HaConfigZone:()=>_});var a=i(17463),o=i(34541),n=i(47838),r=(i(25782),i(89194),i(51095),i(33829),i(68144)),d=i(79932),s=i(14516),l=i(22311),c=i(83849),h=i(85415),u=(i(22098),i(36125),i(10983),i(52039),i(48456),i(41886)),p=i(74186),f=i(45841),v=i(26765),m=(i(15291),i(49703),i(73826)),y=(i(88165),i(29311)),k=i(47181);const g=()=>Promise.all([i.e(28597),i.e(68046)]).then(i.bind(i,68046));let _=(0,a.Z)([(0,d.Mo)("ha-config-zone")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"isWide",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_storageItems",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_stateItems",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_activeEntry",value:()=>""},{kind:"field",decorators:[(0,d.SB)()],key:"_canEditCore",value:()=>!1},{kind:"field",decorators:[(0,d.IO)("ha-locations-editor")],key:"_map",value:void 0},{kind:"field",key:"_regEntities",value:()=>[]},{kind:"field",key:"_getZones",value(){return(0,s.Z)(((e,t)=>{const i=getComputedStyle(this),a=i.getPropertyValue("--accent-color"),o=i.getPropertyValue("--secondary-text-color"),n=i.getPropertyValue("--primary-color"),r=t.map((e=>({id:e.entity_id,icon:e.attributes.icon,name:e.attributes.friendly_name||e.entity_id,latitude:e.attributes.latitude,longitude:e.attributes.longitude,radius:e.attributes.radius,radius_color:"zone.home"===e.entity_id?n:e.attributes.passive?o:a,location_editable:"zone.home"===e.entity_id&&this._canEditCore,radius_editable:!1}))),d=e.map((e=>({...e,radius_color:e.passive?o:a,location_editable:!0,radius_editable:!0})));return d.concat(r)}))}},{kind:"method",key:"hassSubscribe",value:function(){return[(0,p.LM)(this.hass.connection,(e=>{this._regEntities=e.map((e=>e.entity_id)),this._filterStates()}))]}},{kind:"method",key:"render",value:function(){if(!this.hass||void 0===this._storageItems||void 0===this._stateItems)return r.dy`<hass-loading-screen></hass-loading-screen>`;const e=this.hass,t=0===this._storageItems.length&&0===this._stateItems.length?r.dy` <div class="empty"> ${e.localize("ui.panel.config.zone.no_zones_created_yet")} <br> <mwc-button @click="${this._createZone}"> ${e.localize("ui.panel.config.zone.create_zone")}</mwc-button> </div> `:r.dy` <paper-listbox attr-for-selected="data-id" .selected="${this._activeEntry||""}"> ${this._storageItems.map((t=>r.dy` <paper-icon-item data-id="${t.id}" @click="${this._itemClicked}" .entry="${t}"> <ha-icon .icon="${t.icon}" slot="item-icon"></ha-icon> <paper-item-body>${t.name}</paper-item-body> ${this.narrow?"":r.dy` <ha-icon-button .entry="${t}" @click="${this._openEditEntry}" .path="${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}" .label="${e.localize("ui.panel.config.zone.edit_zone")}"></ha-icon-button> `} </paper-icon-item> `))} ${this._stateItems.map((t=>r.dy` <paper-icon-item data-id="${t.entity_id}" @click="${this._stateItemClicked}"> <ha-icon .icon="${t.attributes.icon}" slot="item-icon"> </ha-icon> <paper-item-body> ${t.attributes.friendly_name||t.entity_id} </paper-item-body> <div style="display:inline-block"> <ha-icon-button .entityId="${t.entity_id}" .noEdit="${"zone.home"!==t.entity_id||!this._canEditCore}" .path="${"zone.home"===t.entity_id&&this._canEditCore?"M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z":"M18.66,2C18.4,2 18.16,2.09 17.97,2.28L16.13,4.13L19.88,7.88L21.72,6.03C22.11,5.64 22.11,5 21.72,4.63L19.38,2.28C19.18,2.09 18.91,2 18.66,2M3.28,4L2,5.28L8.5,11.75L4,16.25V20H7.75L12.25,15.5L18.72,22L20,20.72L13.5,14.25L9.75,10.5L3.28,4M15.06,5.19L11.03,9.22L14.78,12.97L18.81,8.94L15.06,5.19Z"}" .label="${"zone.home"===t.entity_id?e.localize("ui.panel.config.zone.edit_home"):e.localize("ui.panel.config.zone.edit_zone")}" @click="${this._openCoreConfig}"></ha-icon-button> ${"zone.home"!==t.entity_id?r.dy` <simple-tooltip animation-delay="0" position="left"> ${e.localize("ui.panel.config.zone.configured_in_yaml")} </simple-tooltip> `:""} </div> </paper-icon-item> `))} </paper-listbox> `;return r.dy` <hass-tabs-subpage .hass="${this.hass}" .narrow="${this.narrow}" .route="${this.route}" back-path="/config" .tabs="${y.configSections.areas}"> ${this.narrow?r.dy` <ha-config-section .isWide="${this.isWide}"> <span slot="introduction"> ${e.localize("ui.panel.config.zone.introduction")} </span> <ha-card outlined>${t}</ha-card> </ha-config-section> `:""} ${this.narrow?"":r.dy` <div class="flex"> <ha-locations-editor .hass="${this.hass}" .locations="${this._getZones(this._storageItems,this._stateItems)}" @location-updated="${this._locationUpdated}" @radius-updated="${this._radiusUpdated}" @marker-clicked="${this._markerClicked}"></ha-locations-editor> <div class="overflow">${t}</div> </div> `} <ha-fab slot="fab" .label="${e.localize("ui.panel.config.zone.add_zone")}" extended @click="${this._createZone}"> <ha-svg-icon slot="icon" .path="${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}"></ha-svg-icon> </ha-fab> </hass-tabs-subpage> `}},{kind:"method",key:"firstUpdated",value:function(e){var t;(0,o.Z)((0,n.Z)(i.prototype),"firstUpdated",this).call(this,e),this._canEditCore=Boolean(null===(t=this.hass.user)||void 0===t?void 0:t.is_admin)&&["storage","default"].includes(this.hass.config.config_source),this._fetchData(),"/new"===this.route.path&&((0,c.c)("/config/zone",{replace:!0}),this._createZone())}},{kind:"method",key:"updated",value:function(){if(!this.route.path.startsWith("/edit/")||!this._stateItems||!this._storageItems)return;const e=this.route.path.slice(6);(0,c.c)("/config/zone",{replace:!0}),this._zoomZone(e)}},{kind:"method",key:"willUpdate",value:function(e){(0,o.Z)((0,n.Z)(i.prototype),"updated",this).call(this,e);const t=e.get("hass");t&&this._stateItems&&this._getStates(t)}},{kind:"method",key:"_fetchData",value:async function(){this._storageItems=(await(0,f.zt)(this.hass)).sort(((e,t)=>(0,h.$)(e.name,t.name,this.hass.locale.language))),this._getStates()}},{kind:"method",key:"_getStates",value:function(e){let t=!1;const i=Object.values(this.hass.states).filter((i=>"zone"===(0,l.N)(i)&&((null==e?void 0:e.states[i.entity_id])!==i&&(t=!0),!this._regEntities.includes(i.entity_id))));t&&(this._stateItems=i)}},{kind:"method",key:"_filterStates",value:function(){if(!this._stateItems)return;const e=this._stateItems.filter((e=>!this._regEntities.includes(e.entity_id)));e.length!==this._stateItems.length&&(this._stateItems=e)}},{kind:"method",key:"_locationUpdated",value:async function(e){if(this._activeEntry=e.detail.id,"zone.home"===e.detail.id&&this._canEditCore)return void await(0,u.S7)(this.hass,{latitude:e.detail.location[0],longitude:e.detail.location[1]});const t=this._storageItems.find((t=>t.id===e.detail.id));t&&this._updateEntry(t,{latitude:e.detail.location[0],longitude:e.detail.location[1]})}},{kind:"method",key:"_radiusUpdated",value:function(e){this._activeEntry=e.detail.id;const t=this._storageItems.find((t=>t.id===e.detail.id));t&&this._updateEntry(t,{radius:e.detail.radius})}},{kind:"method",key:"_markerClicked",value:function(e){this._activeEntry=e.detail.id}},{kind:"method",key:"_createZone",value:function(){this._openDialog()}},{kind:"method",key:"_itemClicked",value:function(e){if(this.narrow)return void this._openEditEntry(e);const t=e.currentTarget.entry;this._zoomZone(t.id)}},{kind:"method",key:"_stateItemClicked",value:function(e){const t=e.currentTarget.getAttribute("data-id");this._zoomZone(t)}},{kind:"method",key:"_zoomZone",value:async function(e){var t;null===(t=this._map)||void 0===t||t.fitMarker(e)}},{kind:"method",key:"_openEditEntry",value:function(e){const t=e.currentTarget.entry;this._openDialog(t)}},{kind:"method",key:"_openCoreConfig",value:async function(e){e.currentTarget.noEdit?(0,v.Ys)(this,{title:this.hass.localize("ui.panel.config.zone.can_not_edit"),text:this.hass.localize("ui.panel.config.zone.configured_in_yaml"),confirm:()=>{}}):(0,c.c)("/config/general")}},{kind:"method",key:"_createEntry",value:async function(e){var t,i;const a=await(0,f.$H)(this.hass,e);this._storageItems=this._storageItems.concat(a).sort(((e,t)=>(0,h.$)(e.name,t.name,this.hass.locale.language))),this.narrow||(this._activeEntry=a.id,await this.updateComplete,await(null===(t=this._map)||void 0===t?void 0:t.updateComplete),null===(i=this._map)||void 0===i||i.fitMarker(a.id))}},{kind:"method",key:"_updateEntry",value:async function(e,t,i=!1){var a,o;const n=await(0,f.Bf)(this.hass,e.id,t);this._storageItems=this._storageItems.map((t=>t===e?n:t)),!this.narrow&&i&&(this._activeEntry=e.id,await this.updateComplete,await(null===(a=this._map)||void 0===a?void 0:a.updateComplete),null===(o=this._map)||void 0===o||o.fitMarker(e.id))}},{kind:"method",key:"_removeEntry",value:async function(e){if(!await(0,v.g7)(this,{title:this.hass.localize("ui.panel.config.zone.confirm_delete"),dismissText:this.hass.localize("ui.common.cancel"),confirmText:this.hass.localize("ui.common.delete")}))return!1;try{var t;if(await(0,f.vp)(this.hass,e.id),this._storageItems=this._storageItems.filter((t=>t!==e)),!this.narrow)null===(t=this._map)||void 0===t||t.fitMap();return!0}catch(e){return!1}}},{kind:"method",key:"_openDialog",value:async function(e){var t,i;t=this,i={entry:e,createEntry:e=>this._createEntry(e),updateEntry:e?t=>this._updateEntry(e,t,!0):void 0,removeEntry:e?()=>this._removeEntry(e):void 0},(0,k.B)(t,"show-dialog",{dialogTag:"dialog-zone-detail",dialogImport:g,dialogParams:i})}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`hass-loading-screen{--app-header-background-color:var(--sidebar-background-color);--app-header-text-color:var(--sidebar-text-color)}a{color:var(--primary-color)}ha-card{margin:16px auto;overflow:hidden}ha-icon,ha-icon-button:not([disabled]){color:var(--secondary-text-color)}ha-icon-button{--mdc-theme-text-disabled-on-light:var(--disabled-text-color)}.empty{text-align:center;padding:8px}.flex{display:flex;height:100%}.overflow{height:100%;overflow:auto}ha-locations-editor{flex-grow:1;height:100%}.flex .empty,.flex paper-listbox{border-left:1px solid var(--divider-color);width:250px;min-height:100%;box-sizing:border-box}paper-icon-item{padding-top:4px;padding-bottom:4px;cursor:pointer}.overflow paper-icon-item:last-child{margin-bottom:80px}paper-icon-item.iron-selected:before{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;content:"";background-color:var(--sidebar-selected-icon-color);opacity:.12;transition:opacity 15ms linear;will-change:opacity}ha-card{margin-bottom:100px}ha-card paper-item{cursor:pointer}`}}]}}),(0,m.f)(r.oi))},44281:(e,t,i)=>{i.d(t,{j:()=>a});const a=async()=>{try{new ResizeObserver((()=>{}))}catch(e){window.ResizeObserver=(await i.e(5442).then(i.bind(i,5442))).default}}}};
//# sourceMappingURL=32160-NdJIiXpOhDQ.js.map