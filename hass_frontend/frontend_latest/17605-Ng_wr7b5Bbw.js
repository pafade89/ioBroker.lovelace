/*! For license information please see 17605-Ng_wr7b5Bbw.js.LICENSE.txt */
export const id=17605;export const ids=[17605];export const modules={79337:(s,e,t)=>{t.d(e,{Fk:()=>n,HC:()=>c,_v:()=>o,fL:()=>a,rx:()=>i});const i={conversation:{domain:"assist_pipeline",name:"Assist"},"cloud.alexa":{domain:"alexa",name:"Amazon Alexa"},"cloud.google_assistant":{domain:"google_assistant",name:"Google Assistant"}},a=(s,e,t)=>s.callWS({type:"homeassistant/expose_new_entities/set",assistant:e,expose_new:t}),n=(s,e)=>s.callWS({type:"homeassistant/expose_new_entities/get",assistant:e}),o=(s,e,t,i)=>s.callWS({type:"homeassistant/expose_entity",assistants:e,entity_ids:t,should_expose:i}),c=s=>s.callWS({type:"homeassistant/expose_entity/list"})},17605:(s,e,t)=>{t.r(e),t.d(e,{voiceAssistantTabs:()=>r});var i=t(17463),a=t(34541),n=t(47838),o=t(22264),c=t(79932),d=t(96339),l=t(79337),h=t(18199);const r=[{path:"/config/voice-assistants/assistants",translationKey:"ui.panel.config.voice_assistants.assistants.caption",iconPath:"M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"},{path:"/config/voice-assistants/expose",translationKey:"ui.panel.config.voice_assistants.expose.caption",iconPath:"M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6M13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16S13.61 14.33 13 13.78V12M11 17.5C10.17 17.5 9.5 16.83 9.5 16S10.17 14.5 11 14.5 12.5 15.17 12.5 16 11.83 17.5 11 17.5M22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8M21 18H17V10H21V18Z"}];(0,i.Z)([(0,c.Mo)("ha-config-voice-assistants")],(function(s,e){class i extends e{constructor(...e){super(...e),s(this)}}return{F:i,d:[{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"cloudStatus",value:void 0},{kind:"field",decorators:[(0,c.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,c.Cb)()],key:"isWide",value:void 0},{kind:"field",decorators:[(0,c.SB)(),(0,o.F)({context:d.A1,subscribe:!0})],key:"_entities",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_exposedEntities",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)((0,n.Z)(i.prototype),"connectedCallback",this).call(this),this.addEventListener("exposed-entities-changed",this._fetchExposedEntities)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,n.Z)(i.prototype),"connectedCallback",this).call(this),this.removeEventListener("exposed-entities-changed",this._fetchExposedEntities)}},{kind:"field",key:"routerOptions",value:()=>({defaultPage:"assistants",routes:{assistants:{tag:"ha-config-voice-assistants-assistants",load:()=>Promise.all([t.e(46992),t.e(42850),t.e(63436),t.e(45497),t.e(78133),t.e(39975),t.e(97215),t.e(96839),t.e(49703),t.e(5583)]).then(t.bind(t,5583)),cache:!0},expose:{tag:"ha-config-voice-assistants-expose",load:()=>Promise.all([t.e(46992),t.e(42850),t.e(45497),t.e(41985),t.e(58543),t.e(48713),t.e(49703),t.e(37168),t.e(10106)]).then(t.bind(t,90709))},debug:{tag:"assist-debug",load:()=>Promise.all([t.e(46992),t.e(42850),t.e(63436),t.e(45497),t.e(99608),t.e(65666),t.e(49412),t.e(3762),t.e(41985),t.e(94740),t.e(77426),t.e(37735),t.e(29183),t.e(99057),t.e(89637),t.e(2731)]).then(t.bind(t,43742))}}})},{kind:"method",key:"updatePageEl",value:function(s){s.hass=this.hass,s.cloudStatus=this.cloudStatus,s.narrow=this.narrow,s.isWide=this.isWide,s.route=this.routeTail,s.exposedEntities=this._exposedEntities}},{kind:"method",key:"willUpdate",value:function(s){s.has("_entities")&&this._fetchExposedEntities()}},{kind:"field",key:"_fetchExposedEntities",value(){return async()=>{this._exposedEntities=(await(0,l.HC)(this.hass)).exposed_entities,this.lastChild&&(this.lastChild.exposedEntities=this._exposedEntities)}}}]}}),h.n)},22264:(s,e,t)=>{t.d(e,{F:()=>o});var i=t(39030),a=t(52407);class n{constructor(s,e,t,i){var a;if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,e)),this.unsubscribe=e},this.host=s,void 0!==e.context){const s=e;this.context=s.context,this.callback=s.callback,this.subscribe=null!==(a=s.subscribe)&&void 0!==a&&a}else this.context=e,this.callback=t,this.subscribe=null!=i&&i;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new a.y(this.context,this.t,this.subscribe))}}function o({context:s,subscribe:e}){return(0,i.eZ)({finisher:(t,i)=>{t.addInitializer((t=>{new n(t,{context:s,callback:s=>{t[i]=s},subscribe:e})}))}})}}};
//# sourceMappingURL=17605-Ng_wr7b5Bbw.js.map