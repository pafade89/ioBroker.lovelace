export const id=97749;export const ids=[97749];export const modules={41787:(t,e,i)=>{i.d(e,{E:()=>o,s:()=>s});var n=i(56007);function o(t,e){return t.every((t=>{const i=e.states[t.entity]?e.states[t.entity].state:n.nZ;return null!=t.state?i===t.state:i!==t.state_not}))}function s(t){return t.every((t=>t.entity&&(null!=t.state||null!=t.state_not)))}},69715:(t,e,i)=>{i.d(e,{g:()=>l});var n=i(17463),o=i(34541),s=i(47838),r=i(68144),d=i(79932),a=i(41787);let l=(0,n.Z)([(0,d.Mo)("hui-conditional-base")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"editMode",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0})],key:"hidden",value:()=>!1},{kind:"field",key:"_element",value:void 0},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"validateConfig",value:function(t){if(!t.conditions)throw new Error("No conditions configured");if(!Array.isArray(t.conditions))throw new Error("Conditions need to be an array");if(!(0,a.s)(t.conditions))throw new Error("Conditions are invalid");this.lastChild&&this.removeChild(this.lastChild),this._config=t}},{kind:"method",key:"update",value:function(t){if((0,o.Z)((0,s.Z)(i.prototype),"update",this).call(this,t),!this._element||!this.hass||!this._config)return;this._element.editMode=this.editMode;const e=this.editMode||(0,a.E)(this._config.conditions,this.hass);this.hidden=!e,this.style.setProperty("display",e?"":"none"),e?(this._element.hass=this.hass,this._element.parentElement||this.appendChild(this._element)):this._element.parentElement&&this.removeChild(this._element)}}]}}),r.fl)},97749:(t,e,i)=>{i.a(t,(async(t,n)=>{try{i.r(e);var o=i(17463),s=i(79932),r=i(69715),d=i(37482),a=t([d]);d=(a.then?(await a)():a)[0];(0,o.Z)([(0,s.Mo)("hui-conditional-row")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"method",key:"setConfig",value:function(t){if(this.validateConfig(t),!t.row)throw new Error("No row configured");this._element=(0,d.m)(t.state_color?{state_color:!0,...t.row}:t.row)}}]}}),r.g);n()}catch(t){n(t)}}))}};
//# sourceMappingURL=97749-SKGXdWjTX68.js.map