export const id=81534;export const ids=[81534];export const modules={81534:(t,i,s)=>{s.a(t,(async(t,e)=>{try{s.r(i);var n=s(17463),o=s(68144),a=s(79932),h=s(49706),r=s(58831),c=s(29171),d=(s(47150),s(53658)),u=s(91476),g=s(75502),l=t([c,u]);[c,u]=l.then?(await l)():l;(0,n.Z)([(0,a.Mo)("hui-group-entity-row")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_config",value:void 0},{kind:"method",key:"_computeCanToggle",value:function(t,i){return i.some((i=>{const s=(0,r.M)(i);var e;return"group"===s?this._computeCanToggle(t,null===(e=this.hass)||void 0===e?void 0:e.states[i].attributes.entity_id):h.Kk.has(s)}))}},{kind:"method",key:"setConfig",value:function(t){if(!t)throw new Error("Invalid configuration");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return(0,d.G2)(this,t)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return o.Ld;const t=this.hass.states[this._config.entity];return t?o.dy` <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}"> ${this._computeCanToggle(this.hass,t.attributes.entity_id)?o.dy` <ha-entity-toggle .hass="${this.hass}" .stateObj="${t}"></ha-entity-toggle> `:o.dy` <div class="text-content"> ${(0,c.D1)(this.hass.localize,t,this.hass.locale,this.hass.config,this.hass.entities)} </div> `} </hui-generic-entity-row> `:o.dy` <hui-warning> ${(0,g.i)(this.hass,this._config.entity)} </hui-warning> `}}]}}),o.oi);e()}catch(t){e(t)}}))}};
//# sourceMappingURL=81534-fzsjCPiQ3o8.js.map