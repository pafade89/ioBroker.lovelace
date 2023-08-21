"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[60076],{30443:(t,e,i)=>{i.d(e,{Z:()=>a});var s=i(59429),o=i(23682);function a(t,e){(0,o.Z)(2,arguments);var i=(0,s.Z)(t),a=(0,s.Z)(e);return i.getTime()===a.getTime()}},53970:(t,e,i)=>{i.d(e,{Z:()=>a});var s=i(30443),o=i(23682);function a(t){return(0,o.Z)(1,arguments),(0,s.Z)(t,Date.now())}},73589:(t,e,i)=>{i.d(e,{Z:()=>o});const s=t=>{const e=parseFloat(t);if(isNaN(e))throw new Error(`${t} is not a number`);return e};function o(t){if(!t)return null;try{if(t.endsWith("%"))return{w:100,h:s(t.substr(0,t.length-1))};const e=t.replace(":","x").split("x");return 0===e.length?null:1===e.length?{w:s(e[0]),h:1}:{w:s(e[0]),h:s(e[1])}}catch(t){}return null}},13786:(t,e,i)=>{var s=i(17463),o=i(34541),a=i(47838),n=i(68144),r=i(79932);const l=t=>t.tileLayer("https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}"+(t.Browser.retina?"@2x.png":".png"),{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",minZoom:0,maxZoom:20});var c=i(22311),d=i(91741),h=i(44281),u=(i(10983),i(47501)),f=i(47181);let p=(0,s.Z)(null,(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:"entity-id"})],key:"entityId",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:"entity-name"})],key:"entityName",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:"entity-picture"})],key:"entityPicture",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:"entity-color"})],key:"entityColor",value:void 0},{kind:"method",key:"render",value:function(){return n.dy` <div class="marker" style="${(0,u.V)({"border-color":this.entityColor})}" @click="${this._badgeTap}"> ${this.entityPicture?n.dy`<div class="entity-picture" style="${(0,u.V)({"background-image":`url(${this.entityPicture})`})}"></div>`:this.entityName} </div> `}},{kind:"method",key:"_badgeTap",value:function(t){t.stopPropagation(),this.entityId&&(0,f.B)(this,"hass-more-info",{entityId:this.entityId})}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`.marker{display:flex;justify-content:center;align-items:center;box-sizing:border-box;overflow:hidden;width:48px;height:48px;font-size:var(--ha-marker-font-size,1.5em);border-radius:50%;border:1px solid var(--ha-marker-color,var(--primary-color));color:var(--primary-text-color);background-color:var(--card-background-color)}.entity-picture{background-size:cover;height:100%;width:100%}`}}]}}),n.oi);customElements.define("ha-entity-marker",p);const m=t=>"string"==typeof t?t:t.entity_id;(0,s.Z)([(0,r.Mo)("ha-map")],(function(t,e){class s extends e{constructor(...e){super(...e),t(this)}}return{F:s,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"entities",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"paths",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"layers",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"autoFit",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"renderPassive",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"interactiveZones",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"fitZones",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"darkMode",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"zoom",value:()=>14},{kind:"field",decorators:[(0,r.SB)()],key:"_loaded",value:()=>!1},{kind:"field",key:"leafletMap",value:void 0},{kind:"field",key:"Leaflet",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"field",key:"_mapItems",value:()=>[]},{kind:"field",key:"_mapZones",value:()=>[]},{kind:"field",key:"_mapPaths",value:()=>[]},{kind:"method",key:"connectedCallback",value:function(){(0,o.Z)((0,a.Z)(s.prototype),"connectedCallback",this).call(this),this._loadMap(),this._attachObserver()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)((0,a.Z)(s.prototype),"disconnectedCallback",this).call(this),this.leafletMap&&(this.leafletMap.remove(),this.leafletMap=void 0,this.Leaflet=void 0),this._loaded=!1,this._resizeObserver&&this._resizeObserver.unobserve(this)}},{kind:"method",key:"update",value:function(t){var e,i,n,r;if((0,o.Z)((0,a.Z)(s.prototype),"update",this).call(this,t),!this._loaded)return;const l=t.get("hass");if(t.has("_loaded")||t.has("entities"))this._drawEntities();else if(this._loaded&&l&&this.entities)for(const t of this.entities)if(l.states[m(t)]!==this.hass.states[m(t)]){this._drawEntities();break}if((t.has("_loaded")||t.has("paths"))&&this._drawPaths(),(t.has("_loaded")||t.has("layers"))&&this._drawLayers(t.get("layers")),(t.has("_loaded")||(t.has("entities")||t.has("layers"))&&this.autoFit)&&this.fitMap(),t.has("zoom")&&this.leafletMap.setZoom(this.zoom),!t.has("darkMode")&&(!t.has("hass")||l&&(null===(e=l.themes)||void 0===e?void 0:e.darkMode)===(null===(i=this.hass.themes)||void 0===i?void 0:i.darkMode)))return;const c=null!==(n=this.darkMode)&&void 0!==n?n:null===(r=this.hass.themes)||void 0===r?void 0:r.darkMode;this.shadowRoot.getElementById("map").classList.toggle("dark",c)}},{kind:"method",key:"_loadMap",value:async function(){var t;let e=this.shadowRoot.getElementById("map");e||(e=document.createElement("div"),e.id="map",this.shadowRoot.append(e));const s=null!==(t=this.darkMode)&&void 0!==t?t:this.hass.themes.darkMode;[this.leafletMap,this.Leaflet]=await(async t=>{if(!t.parentNode)throw new Error("Cannot setup Leaflet map on disconnected element");const e=(await i.e(70208).then(i.t.bind(i,70208,23))).default;e.Icon.Default.imagePath="/static/images/leaflet/images/";const s=e.map(t),o=document.createElement("link");return o.setAttribute("href","/static/images/leaflet/leaflet.css"),o.setAttribute("rel","stylesheet"),t.parentNode.appendChild(o),s.setView([52.3731339,4.8903147],13),[s,e,l(e).addTo(s)]})(e),this.shadowRoot.getElementById("map").classList.toggle("dark",s),this._loaded=!0}},{kind:"method",key:"fitMap",value:function(){var t,e;if(!this.leafletMap||!this.Leaflet||!this.hass)return;if(!(this._mapItems.length||null!==(t=this.layers)&&void 0!==t&&t.length))return void this.leafletMap.setView(new this.Leaflet.LatLng(this.hass.config.latitude,this.hass.config.longitude),this.zoom);let i=this.Leaflet.latLngBounds(this._mapItems?this._mapItems.map((t=>t.getLatLng())):[]);var s;this.fitZones&&(null===(s=this._mapZones)||void 0===s||s.forEach((t=>{i.extend("getBounds"in t?t.getBounds():t.getLatLng())})));null===(e=this.layers)||void 0===e||e.forEach((t=>{i.extend("getBounds"in t?t.getBounds():t.getLatLng())})),this.layers||(i=i.pad(.5)),this.leafletMap.fitBounds(i,{maxZoom:this.zoom})}},{kind:"method",key:"_drawLayers",value:function(t){if(t&&t.forEach((t=>t.remove())),!this.layers)return;const e=this.leafletMap;this.layers.forEach((t=>{e.addLayer(t)}))}},{kind:"method",key:"_drawPaths",value:function(){const t=this.hass,e=this.leafletMap,i=this.Leaflet;if(!t||!e||!i)return;if(this._mapPaths.length&&(this._mapPaths.forEach((t=>t.remove())),this._mapPaths=[]),!this.paths)return;const s=getComputedStyle(this).getPropertyValue("--dark-primary-color");this.paths.forEach((t=>{let o,a;t.gradualOpacity&&(o=t.gradualOpacity/(t.points.length-2),a=1-t.gradualOpacity);for(let e=0;e<t.points.length-1;e++){const n=t.gradualOpacity?a+e*o:void 0;this._mapPaths.push(i.circleMarker(t.points[e].point,{radius:3,color:t.color||s,opacity:n,fillOpacity:n,interactive:!0}).bindTooltip(t.points[e].tooltip,{direction:"top"})),this._mapPaths.push(i.polyline([t.points[e].point,t.points[e+1].point],{color:t.color||s,opacity:n,interactive:!1}))}const n=t.points.length-1;if(n>=0){const e=t.gradualOpacity?a+n*o:void 0;this._mapPaths.push(i.circleMarker(t.points[n].point,{radius:3,color:t.color||s,opacity:e,fillOpacity:e,interactive:!0}).bindTooltip(t.points[n].tooltip,{direction:"top"}))}this._mapPaths.forEach((t=>e.addLayer(t)))}))}},{kind:"method",key:"_drawEntities",value:function(){var t;const e=this.hass,i=this.leafletMap,s=this.Leaflet;if(!e||!i||!s)return;if(this._mapItems.length&&(this._mapItems.forEach((t=>t.remove())),this._mapItems=[]),this._mapZones.length&&(this._mapZones.forEach((t=>t.remove())),this._mapZones=[]),!this.entities)return;const o=getComputedStyle(this),a=o.getPropertyValue("--accent-color"),n=o.getPropertyValue("--secondary-text-color"),r=o.getPropertyValue("--dark-primary-color"),l=(null!==(t=this.darkMode)&&void 0!==t?t:this.hass.themes.darkMode)?"dark":"light";for(const t of this.entities){const i=e.states[m(t)];if(!i)continue;const o=(0,d.C)(i),{latitude:h,longitude:u,passive:f,icon:p,radius:y,entity_picture:_,gps_accuracy:v}=i.attributes;if(!h||!u)continue;if("zone"===(0,c.N)(i)){if(f&&!this.renderPassive)continue;let t="";if(p){const e=document.createElement("ha-icon");e.setAttribute("icon",p),t=e.outerHTML}else{const e=document.createElement("span");e.innerHTML=o,t=e.outerHTML}this._mapZones.push(s.marker([h,u],{icon:s.divIcon({html:t,iconSize:[24,24],className:l}),interactive:this.interactiveZones,title:o})),this._mapZones.push(s.circle([h,u],{interactive:!1,color:f?n:a,radius:y}));continue}const g=o.split(" ").map((t=>t[0])).join("").substr(0,3);this._mapItems.push(s.marker([h,u],{icon:s.divIcon({html:`\n              <ha-entity-marker\n                entity-id="${m(t)}"\n                entity-name="${g}"\n                entity-picture="${_?this.hass.hassUrl(_):""}"\n                ${"string"!=typeof t?`entity-color="${t.color}"`:""}\n              ></ha-entity-marker>\n            `,iconSize:[48,48],className:""}),title:(0,d.C)(i)})),v&&this._mapItems.push(s.circle([h,u],{interactive:!1,color:r,radius:v}))}this._mapItems.forEach((t=>i.addLayer(t))),this._mapZones.forEach((t=>i.addLayer(t)))}},{kind:"method",key:"_attachObserver",value:async function(){this._resizeObserver||(await(0,h.j)(),this._resizeObserver=new ResizeObserver((()=>{var t;null===(t=this.leafletMap)||void 0===t||t.invalidateSize({debounceMoveend:!0})}))),this._resizeObserver.observe(this)}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host{display:block;height:300px}#map{height:100%}#map.dark{background:#090909;--map-filter:invert(0.9) hue-rotate(170deg) grayscale(0.7)}#map:active{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.light{color:#000}.dark{color:#fff}.leaflet-tile-pane{filter:var(--map-filter)}.dark .leaflet-bar a{background-color:var(--card-background-color,#1c1c1c);color:#fff}.leaflet-marker-draggable{cursor:move!important}.leaflet-edit-resize{border-radius:50%;cursor:nesw-resize!important}.named-icon{display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;color:var(--primary-text-color)}.leaflet-pane{z-index:0!important}.leaflet-bottom,.leaflet-control,.leaflet-top{z-index:1!important}.leaflet-tooltip{padding:8px;font-size:90%;background:rgba(80,80,80,.9)!important;color:#fff!important;border-radius:4px;box-shadow:none!important}`}}]}}),n.fl)},58763:(t,e,i)=>{i.a(t,(async(t,s)=>{try{i.d(e,{Nu:()=>k,Vk:()=>u,xS:()=>p});var o=i(58831),a=i(29171),n=i(91741),r=t([a]);a=(r.then?(await r)():r)[0];const l=["climate","humidifier","water_heater"],c=["climate","humidifier","input_datetime","thermostat","water_heater","person","device_tracker"],d=["temperature","current_temperature","target_temp_low","target_temp_high","hvac_action","humidity","mode"],h=(t,e)=>!t.states[e]||c.includes((0,o.M)(e)),u=(t,e,i,s,o)=>{const a={type:"history/stream",entity_ids:o,start_time:i.toISOString(),end_time:s.toISOString(),minimal_response:!0,no_attributes:!o.some((e=>h(t,e)))},n=new f(t);return t.connection.subscribeMessage((t=>e(n.processMessage(t))),a)};class f{constructor(t,e){this.hass=void 0,this.hoursToShow=void 0,this.combinedHistory=void 0,this.hass=t,this.hoursToShow=e,this.combinedHistory={}}processMessage(t){if(!this.combinedHistory||!Object.keys(this.combinedHistory).length)return this.combinedHistory=t.states,this.combinedHistory;if(!Object.keys(t.states).length)return this.combinedHistory;const e=this.hoursToShow?((new Date).getTime()-3600*this.hoursToShow*1e3)/1e3:void 0,i={};for(const t of Object.keys(this.combinedHistory))i[t]=[];for(const e of Object.keys(t.states))i[e]=[];for(const s of Object.keys(i)){if(s in this.combinedHistory&&s in t.states){const e=this.combinedHistory[s],o=e[e.length-1];i[s]=e.concat(t.states[s]),t.states[s][0].lu<o.lu&&(i[s]=i[s].sort(((t,e)=>t.lu-e.lu)))}else s in this.combinedHistory?i[s]=this.combinedHistory[s]:i[s]=t.states[s];if(e&&s in this.combinedHistory){const t=i[s].filter((t=>t.lu<e));if(!t.length)continue;if(i[s]=i[s].filter((t=>t.lu>=e)),i[s].length&&i[s][0].lu===e)continue;const o=t[t.length-1];o.lu=e,i[s].unshift(o)}}return this.combinedHistory=i,this.combinedHistory}}const p=(t,e,i,s,o=!0,a=!0,n)=>{const r={type:"history/stream",entity_ids:s,start_time:new Date((new Date).getTime()-3600*i*1e3).toISOString(),minimal_response:o,significant_changes_only:a,no_attributes:null!=n?n:!s.some((e=>h(t,e)))},l=new f(t,i);return t.connection.subscribeMessage((t=>e(l.processMessage(t))),r)},m=(t,e)=>t.state===e.state&&(!t.attributes||!e.attributes||d.every((i=>t.attributes[i]===e.attributes[i]))),y=(t,e,i,s,o,r)=>{const l=[],c=o[0];for(const n of o){if(l.length>0&&n.s===l[l.length-1].state)continue;const o={};null!=r&&r.attributes.device_class&&(o.device_class=null==r?void 0:r.attributes.device_class),l.push({state_localize:(0,a.cG)(t,e,i[s],s,{...n.a||c.a,...o},n.s),state:n.s,last_changed:1e3*(n.lc?n.lc:n.lu)})}return{name:(0,n.a)(s,(null==r?void 0:r.attributes)||c.a),entity_id:s,data:l}},_=(t,e,i)=>{const s=[];return Object.keys(e).forEach((t=>{const a=e[t],r=a[0],c=(0,o.M)(t),h=[];for(const t of a){let e;if(l.includes(c)){e={state:t.s,last_changed:1e3*t.lu,attributes:{}};for(const i of d)i in t.a&&(e.attributes[i]=t.a[i])}else e={state:t.s,last_changed:1e3*(t.lc?t.lc:t.lu),attributes:{}};h.length>1&&m(e,h[h.length-1])&&m(e,h[h.length-2])||h.push(e)}const u=t in i?i[t].attributes:"friendly_name"in r.a?r.a:void 0;s.push({domain:c,name:(0,n.a)(t,u||{}),entity_id:t,states:h})})),{unit:t,identifier:Object.keys(e).join(""),data:s}},v=t=>g(t.attributes),g=t=>"unit_of_measurement"in t||"state_class"in t,k=(t,e,i)=>{const s={},a=[];if(!e)return{line:[],timeline:[]};Object.keys(e).forEach((n=>{const r=e[n];if(0===r.length)return;const l=n in t.states?t.states[n]:void 0,c=!l&&r.find((t=>t.a&&g(t.a)));let d;d=l&&v(l)?l.attributes.unit_of_measurement||" ":c?c.a.unit_of_measurement||" ":{zone:i("ui.dialogs.more_info_control.zone.graph_unit"),climate:t.config.unit_system.temperature,counter:"#",humidifier:"%",input_number:"#",number:"#",water_heater:t.config.unit_system.temperature}[(0,o.M)(n)],d?d in s&&n in s[d]?s[d][n].push(...r):(d in s||(s[d]={}),s[d][n]=r):a.push(y(i,t.locale,t.entities,n,r,l))}));return{line:Object.keys(s).map((e=>_(e,s[e],t.states))),timeline:a}};s()}catch(t){s(t)}}))},60076:(t,e,i)=>{i.a(t,(async(t,s)=>{try{i.r(e),i.d(e,{DEFAULT_HOURS_TO_SHOW:()=>M,DEFAULT_ZOOM:()=>E});var o=i(17463),a=i(34541),n=i(47838),r=i(53970),l=i(68144),c=i(79932),d=i(14516),h=i(55070),u=i(7323),f=i(44583),p=i(49684),m=i(58831),y=i(73589),_=(i(22098),i(9381),i(10983),i(13786),i(58763)),v=i(53658),g=i(15688),k=i(90271),b=t([f,p,_]);[f,p,_]=b.then?(await b)():b;const w="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M19,19H15V21H19A2,2 0 0,0 21,19V15H19M19,3H15V5H19V9H21V5A2,2 0 0,0 19,3M5,5H9V3H5A2,2 0 0,0 3,5V9H5M5,15H3V19A2,2 0 0,0 5,21H9V19H5V15Z",M=0,E=14;(0,o.Z)([(0,c.Mo)("hui-map-card")],(function(t,e){class s extends e{constructor(...e){super(...e),t(this)}}return{F:s,d:[{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,c.Cb)({type:Boolean,reflect:!0})],key:"isPanel",value:()=>!1},{kind:"field",decorators:[(0,c.SB)()],key:"_stateHistory",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,c.IO)("ha-map")],key:"_map",value:void 0},{kind:"field",key:"_configEntities",value:void 0},{kind:"field",key:"_colorDict",value:()=>({})},{kind:"field",key:"_colorIndex",value:()=>0},{kind:"field",decorators:[(0,c.SB)()],key:"_error",value:void 0},{kind:"field",key:"_subscribed",value:void 0},{kind:"method",key:"setConfig",value:function(t){var e;if(!t)throw new Error("Error in card configuration.");if(!(null!==(e=t.entities)&&void 0!==e&&e.length||t.geo_location_sources))throw new Error("Either entities or geo_location_sources must be specified");if(t.entities&&!Array.isArray(t.entities))throw new Error("Entities need to be an array");if(t.geo_location_sources&&!Array.isArray(t.geo_location_sources))throw new Error("Parameter geo_location_sources needs to be an array");this._config=t,this._configEntities=(t.entities?(0,k.A)(t.entities):[]).map((t=>t.entity))}},{kind:"method",key:"getCardSize",value:function(){var t;if(null===(t=this._config)||void 0===t||!t.aspect_ratio)return 7;const e=(0,y.Z)(this._config.aspect_ratio),i=e&&e.w>0&&e.h>0?`${(100*e.h/e.w).toFixed(2)}`:"100";return 1+Math.floor(Number(i)/25)||3}},{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([i.e(46992),i.e(31338),i.e(42977),i.e(7270),i.e(74535),i.e(52092),i.e(50963)]).then(i.bind(i,51821)),document.createElement("hui-map-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(t,e,i){return{type:"map",entities:(0,g.j)(t,2,e,i,["device_tracker"])}}},{kind:"method",key:"render",value:function(){var t;return this._config?this._error?l.dy`<ha-alert alert-type="error"> ${this.hass.localize("ui.components.map.error")}: ${this._error.message} (${this._error.code}) </ha-alert>`:l.dy` <ha-card id="card" .header="${this._config.title}"> <div id="root"> <ha-map .hass="${this.hass}" .entities="${this._getEntities(this.hass.states,this._config,this._configEntities)}" .zoom="${null!==(t=this._config.default_zoom)&&void 0!==t?t:E}" .paths="${this._getHistoryPaths(this._config,this._stateHistory)}" .autoFit="${this._config.auto_fit}" .darkMode="${this._config.dark_mode}" interactiveZones renderPassive></ha-map> <ha-icon-button .label="${this.hass.localize("ui.panel.lovelace.cards.map.reset_focus")}" .path="${w}" @click="${this._fitMap}" tabindex="0"></ha-icon-button> </div> </ha-card> `:l.Ld}},{kind:"method",key:"shouldUpdate",value:function(t){var e,i;if(!t.has("hass")||t.size>1)return!0;const s=t.get("hass");return!s||!this._configEntities||(s.themes.darkMode!==this.hass.themes.darkMode||(!!t.has("_stateHistory")||(!(null===(e=this._config)||void 0===e||!e.geo_location_sources||s.states===this.hass.states)||(null!==(i=this._config)&&void 0!==i&&i.entities?(0,v.Wh)(this,t):(0,v.SN)(this,t)))))}},{kind:"method",key:"connectedCallback",value:function(){var t;(0,a.Z)((0,n.Z)(s.prototype),"connectedCallback",this).call(this),this.hasUpdated&&null!==(t=this._configEntities)&&void 0!==t&&t.length&&this._subscribeHistory()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,n.Z)(s.prototype),"disconnectedCallback",this).call(this),this._unsubscribeHistory()}},{kind:"method",key:"_subscribeHistory",value:function(){var t,e,i;(0,u.p)(this.hass,"history")&&!this._subscribed&&(null!==(t=null===(e=this._config)||void 0===e?void 0:e.hours_to_show)&&void 0!==t?t:M)&&(this._subscribed=(0,_.xS)(this.hass,(t=>{this._subscribed&&(this._stateHistory=t)}),null!==(i=this._config.hours_to_show)&&void 0!==i?i:M,this._configEntities,!1,!1,!1).catch((t=>{this._subscribed=void 0,this._error=t})))}},{kind:"method",key:"_unsubscribeHistory",value:function(){this._subscribed&&(this._subscribed.then((t=>null==t?void 0:t())),this._subscribed=void 0)}},{kind:"method",key:"updated",value:function(t){var e;null!==(e=this._configEntities)&&void 0!==e&&e.length?this._subscribed&&!t.has("_config")||(this._unsubscribeHistory(),this._subscribeHistory()):this._unsubscribeHistory(),t.has("_config")&&this._computePadding()}},{kind:"method",key:"_computePadding",value:function(){const t=this.shadowRoot.getElementById("root");if(!this._config||this.isPanel||!t)return;if(!this._config.aspect_ratio)return void(t.style.paddingBottom="100%");t.style.height="auto";const e=(0,y.Z)(this._config.aspect_ratio);t.style.paddingBottom=e&&e.w>0&&e.h>0?`${(100*e.h/e.w).toFixed(2)}%`:t.style.paddingBottom="100%"}},{kind:"method",key:"_fitMap",value:function(){var t;null===(t=this._map)||void 0===t||t.fitMap()}},{kind:"method",key:"_getColor",value:function(t){let e=this._colorDict[t];return e||(e=(0,h.Eu)(this._colorIndex),this._colorIndex++,this._colorDict[t]=e,e)}},{kind:"field",key:"_getEntities",value(){return(0,d.Z)(((t,e,i)=>{if(!t||!e)return;let s=i||[];if(e.geo_location_sources){const i=[],o=e.geo_location_sources.includes("all");for(const s of Object.values(t))"geo_location"===(0,m.M)(s.entity_id)&&(o||e.geo_location_sources.includes(s.attributes.source))&&i.push(s.entity_id);s=[...s,...i]}return s.map((t=>({entity_id:t,color:this._getColor(t)})))}))}},{kind:"field",key:"_getHistoryPaths",value(){return(0,d.Z)(((t,e)=>{var i;if(!e||!(null!==(i=t.hours_to_show)&&void 0!==i?i:M))return;const s=[];for(const i of Object.keys(e)){if("zone"===(0,m.M)(i))continue;const a=e[i];if(null==a||!a.length)continue;const n=[];for(const e of a){var o;const i=e.a.latitude,s=e.a.longitude;if(!i||!s)continue;const a={};a.point=[i,s];const l=new Date(1e3*e.lu);(null!==(o=t.hours_to_show)&&void 0!==o?o:M)>144?a.tooltip=(0,f.o0)(l,this.hass.locale):(0,r.Z)(l)?a.tooltip=(0,p.Vu)(l,this.hass.locale):a.tooltip=(0,p.xO)(l,this.hass.locale),n.push(a)}s.push({points:n,color:this._getColor(i),gradualOpacity:.8})}return s}))}},{kind:"get",static:!0,key:"styles",value:function(){return l.iv`ha-card{overflow:hidden;width:100%;height:100%;display:flex;flex-direction:column}ha-map{z-index:0;border:none;position:absolute;top:0;left:0;width:100%;height:100%;background:inherit}ha-icon-button{position:absolute;top:75px;left:3px;outline:0}#root{position:relative;height:100%}`}}]}}),l.oi);s()}catch(t){s(t)}}))}}]);
//# sourceMappingURL=60076-P-i_3rOnjM0.js.map