export const id=95018;export const ids=[95018];export const modules={73589:(t,e,o)=>{o.d(e,{Z:()=>r});const i=t=>{const e=parseFloat(t);if(isNaN(e))throw new Error(`${t} is not a number`);return e};function r(t){if(!t)return null;try{if(t.endsWith("%"))return{w:100,h:i(t.substr(0,t.length-1))};const e=t.replace(":","x").split("x");return 0===e.length?null:1===e.length?{w:i(e[0]),h:1}:{w:i(e[0]),h:i(e[1])}}catch(t){}return null}},95018:(t,e,o)=>{o.r(e),o.d(e,{HuiIframeCard:()=>c});var i=o(17463),r=o(68144),n=o(79932),a=o(30153),l=o(47501),s=o(73589);o(9381),o(22098);let c=(0,i.Z)([(0,n.Mo)("hui-iframe-card")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await o.e(65649).then(o.bind(o,65649)),document.createElement("hui-iframe-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"iframe",url:"https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1",aspect_ratio:"50%"}}},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,reflect:!0})],key:"isPanel",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){if(!this._config)return 5;return 1+(this._config.aspect_ratio?Number(this._config.aspect_ratio.replace("%","")):50)/25}},{kind:"method",key:"setConfig",value:function(t){if(!t.url)throw new Error("URL required");this._config=t}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return r.Ld;let t="";if(!this.isPanel&&this._config.aspect_ratio){const e=(0,s.Z)(this._config.aspect_ratio);e&&e.w>0&&e.h>0&&(t=`${(100*e.h/e.w).toFixed(2)}%`)}else this.isPanel||(t="50%");const e=new URL(this._config.url,location.toString()).protocol;if("https:"===location.protocol&&"https:"!==e)return r.dy` <ha-alert alert-type="error"> ${this.hass.localize("ui.panel.lovelace.cards.iframe.error_secure_context",{target_protocol:e,context_protocol:location.protocol})} </ha-alert> `;let o="";return this._config.allow_open_top_navigation&&(o+="allow-top-navigation-by-user-activation"),r.dy` <ha-card .header="${this._config.title}"> <div id="root" style="${(0,l.V)({"padding-top":t})}"> <iframe title="${(0,a.o)(this._config.title)}" src="${this._config.url}" sandbox="${o} allow-forms allow-modals allow-popups allow-pointer-lock allow-same-origin allow-scripts" allow="fullscreen"></iframe> </div> </ha-card> `}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`:host([ispanel]) ha-card{width:100%;height:100%}ha-card{overflow:hidden}#root{width:100%;position:relative}:host([ispanel]) #root{height:100%}iframe{position:absolute;border:none;width:100%;height:100%;top:0;left:0}`}}]}}),r.oi)}};
//# sourceMappingURL=95018-ifQxXwwV66A.js.map