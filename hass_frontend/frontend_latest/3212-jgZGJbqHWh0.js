"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[3212],{34821:(e,t,i)=>{i.d(t,{i:()=>u});var o=i(17463),a=i(34541),r=i(47838),s=i(87762),l=i(91632),n=i(68144),d=i(79932),c=i(74265);i(10983);const h=["button","ha-list-item"],u=(e,t)=>n.dy` <div class="header_title">${t}</div> <ha-icon-button .label="${e.localize("ui.dialogs.generic.close")}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> `;(0,o.Z)([(0,d.Mo)("ha-dialog")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:c.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,t){var i;null===(i=this.contentElement)||void 0===i||i.scrollTo(e,t)}},{kind:"method",key:"renderHeading",value:function(){return n.dy`<slot name="heading"> ${(0,a.Z)((0,r.Z)(i.prototype),"renderHeading",this).call(this)} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,a.Z)((0,r.Z)(i.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,h].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,r.Z)(i.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[l.W,n.iv`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter, none);backdrop-filter:var(--dialog-backdrop-filter, none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:nth-child(1){flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),s.M)},319:(e,t,i)=>{var o=i(17463),a=i(34541),r=i(47838),s=i(68144),l=i(79932),n=i(47181),d=i(96151);i(9381);(0,o.Z)([(0,l.Mo)("ha-hls-player")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"url",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"posterUrl",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,attribute:"controls"})],key:"controls",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,attribute:"muted"})],key:"muted",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,attribute:"autoplay"})],key:"autoPlay",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,attribute:"playsinline"})],key:"playsInline",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,attribute:"allow-exoplayer"})],key:"allowExoPlayer",value:()=>!1},{kind:"field",decorators:[(0,l.IO)("video")],key:"_videoEl",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_errorIsFatal",value:()=>!1},{kind:"field",key:"_hlsPolyfillInstance",value:void 0},{kind:"field",key:"_exoPlayer",value:()=>!1},{kind:"field",static:!0,key:"streamCount",value:()=>0},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)((0,r.Z)(o.prototype),"connectedCallback",this).call(this),o.streamCount+=1,this.hasUpdated&&(this._resetError(),this._startHls())}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,r.Z)(o.prototype),"disconnectedCallback",this).call(this),o.streamCount-=1,this._cleanUp()}},{kind:"method",key:"render",value:function(){return s.dy` ${this._error?s.dy`<ha-alert alert-type="error" class="${this._errorIsFatal?"fatal":"retry"}"> ${this._error} </ha-alert>`:""} ${this._errorIsFatal?"":s.dy`<video .poster="${this.posterUrl}" ?autoplay="${this.autoPlay}" .muted="${this.muted}" ?playsinline="${this.playsInline}" ?controls="${this.controls}" @loadeddata="${this._loadedData}"></video>`} `}},{kind:"method",key:"updated",value:function(e){(0,a.Z)((0,r.Z)(o.prototype),"updated",this).call(this,e);e.has("url")&&(this._cleanUp(),this._resetError(),this._startHls())}},{kind:"method",key:"_startHls",value:async function(){var e;const t=fetch(this.url),o=(await i.e(19885).then(i.t.bind(i,19885,23))).default;if(!this.isConnected)return;let a=o.isSupported();if(a||(a=""!==this._videoEl.canPlayType("application/vnd.apple.mpegurl")),!a)return void this._setFatalError(this.hass.localize("ui.components.media-browser.video_not_supported"));const r=this.allowExoPlayer&&(null===(e=this.hass.auth.external)||void 0===e?void 0:e.config.hasExoPlayer),s=await(await t).text();if(!this.isConnected)return;const l=/#EXT-X-STREAM-INF:.*?(?:CODECS=".*?(hev1|hvc1)?\..*?".*?)?(?:\n|\r\n)(.+)/g,n=l.exec(s),d=l.exec(s);let c;c=null!==n&&null===d?new URL(n[2],this.url).href:this.url,r&&null!==n&&void 0!==n[1]?this._renderHLSExoPlayer(c):o.isSupported()?this._renderHLSPolyfill(this._videoEl,o,c):this._renderHLSNative(this._videoEl,c)}},{kind:"method",key:"_renderHLSExoPlayer",value:async function(e){this._exoPlayer=!0,window.addEventListener("resize",this._resizeExoPlayer),this.updateComplete.then((()=>(0,d.y)())).then(this._resizeExoPlayer),this._videoEl.style.visibility="hidden",await this.hass.auth.external.fireMessage({type:"exoplayer/play_hls",payload:{url:new URL(e,window.location.href).toString(),muted:this.muted}})}},{kind:"field",key:"_resizeExoPlayer",value(){return()=>{if(!this._videoEl)return;const e=this._videoEl.getBoundingClientRect();this.hass.auth.external.fireMessage({type:"exoplayer/resize",payload:{left:e.left,top:e.top,right:e.right,bottom:e.bottom}})}}},{kind:"method",key:"_isLLHLSSupported",value:function(){if(o.streamCount<=2)return!0;if(!("performance"in window)||0===performance.getEntriesByType("resource").length)return!1;const e=performance.getEntriesByType("resource")[0];return"nextHopProtocol"in e&&"h2"===e.nextHopProtocol}},{kind:"method",key:"_renderHLSPolyfill",value:async function(e,t,i){const o=new t({backBufferLength:60,fragLoadingTimeOut:3e4,manifestLoadingTimeOut:3e4,levelLoadingTimeOut:3e4,maxLiveSyncPlaybackRate:2,lowLatencyMode:this._isLLHLSSupported()});this._hlsPolyfillInstance=o,o.attachMedia(e),o.on(t.Events.MEDIA_ATTACHED,(()=>{this._resetError(),o.loadSource(i)})),o.on(t.Events.FRAG_LOADED,((e,t)=>{this._resetError()})),o.on(t.Events.ERROR,((e,i)=>{if(i.fatal)if(i.type===t.ErrorTypes.NETWORK_ERROR){switch(i.details){case t.ErrorDetails.MANIFEST_LOAD_ERROR:{let e="Error starting stream, see logs for details";void 0!==i.response&&void 0!==i.response.code&&(i.response.code>=500?e+=" (Server failure)":i.response.code>=400?e+=" (Stream never started)":e+=" ("+i.response.code+")"),this._setRetryableError(e);break}case t.ErrorDetails.MANIFEST_LOAD_TIMEOUT:this._setRetryableError("Timeout while starting stream");break;default:this._setRetryableError("Stream network error")}o.startLoad()}else i.type===t.ErrorTypes.MEDIA_ERROR?(this._setRetryableError("Error with media stream contents"),o.recoverMediaError()):this._setFatalError("Error playing stream")}))}},{kind:"method",key:"_renderHLSNative",value:async function(e,t){e.src=t,e.addEventListener("loadedmetadata",(()=>{e.play()}))}},{kind:"method",key:"_cleanUp",value:function(){this._hlsPolyfillInstance&&(this._hlsPolyfillInstance.destroy(),this._hlsPolyfillInstance=void 0),this._exoPlayer&&(window.removeEventListener("resize",this._resizeExoPlayer),this.hass.auth.external.fireMessage({type:"exoplayer/stop"}),this._exoPlayer=!1),this._videoEl&&(this._videoEl.removeAttribute("src"),this._videoEl.load())}},{kind:"method",key:"_resetError",value:function(){this._error=void 0,this._errorIsFatal=!1}},{kind:"method",key:"_setFatalError",value:function(e){this._error=e,this._errorIsFatal=!0}},{kind:"method",key:"_setRetryableError",value:function(e){this._error=e,this._errorIsFatal=!1}},{kind:"method",key:"_loadedData",value:function(){(0,n.B)(this,"load")}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`:host,video{display:block}video{width:100%;max-height:var(--video-max-height,calc(100vh - 97px))}.fatal{display:block;padding:100px 16px}.retry{display:block}`}}]}}),s.oi)},3212:(e,t,i)=>{i.r(t),i.d(t,{HuiDialogWebBrowserPlayMedia:()=>d});var o=i(17463),a=i(68144),r=i(79932),s=i(47181),l=i(34821),n=(i(319),i(11654));let d=(0,o.Z)([(0,r.Mo)("hui-dialog-web-browser-play-media")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"_params",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._params=e}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,(0,s.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){if(!this._params||!this._params.sourceType||!this._params.sourceUrl)return a.Ld;const e=this._params.sourceType.split("/",1)[0];return a.dy` <ha-dialog open hideActions .heading="${(0,l.i)(this.hass,this._params.title||this.hass.localize("ui.components.media-browser.media_player"))}" @closed="${this.closeDialog}"> ${"audio"===e?a.dy` <audio controls autoplay> <source src="${this._params.sourceUrl}" type="${this._params.sourceType}"> ${this.hass.localize("ui.components.media-browser.audio_not_supported")} </audio> `:"video"===e?a.dy` <video controls autoplay playsinline> <source src="${this._params.sourceUrl}" type="${this._params.sourceType}"> ${this.hass.localize("ui.components.media-browser.video_not_supported")} </video> `:"application/x-mpegURL"===this._params.sourceType?a.dy` <ha-hls-player controls autoplay playsinline .hass="${this.hass}" .url="${this._params.sourceUrl}"></ha-hls-player> `:"image"===e?a.dy`<img alt="${this._params.title||a.Ld}" src="${this._params.sourceUrl}">`:a.dy`${this.hass.localize("ui.components.media-browser.media_not_supported")}`} </ha-dialog> `}},{kind:"get",static:!0,key:"styles",value:function(){return[n.yu,a.iv`@media (min-width:800px){ha-dialog{--mdc-dialog-max-width:800px;--mdc-dialog-min-width:400px}}audio,img,video{outline:0;width:100%}`]}}]}}),a.oi)}}]);
//# sourceMappingURL=3212-jgZGJbqHWh0.js.map