"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[70955],{18601:function(t,e,n){n.d(e,{Wg:function(){return m},qN:function(){return h.q}});var i,r,o=n(71650),a=n(33368),s=n(34541),c=n(47838),l=n(69205),u=n(70906),d=n(43204),p=n(79932),h=n(78220),f=null!==(r=null===(i=window.ShadyDOM)||void 0===i?void 0:i.inUse)&&void 0!==r&&r,m=function(t){(0,l.Z)(n,t);var e=(0,u.Z)(n);function n(){var t;return(0,o.Z)(this,n),(t=e.apply(this,arguments)).disabled=!1,t.containingForm=null,t.formDataListener=function(e){t.disabled||t.setFormData(e.formData)},t}return(0,a.Z)(n,[{key:"findFormElement",value:function(){if(!this.shadowRoot||f)return null;for(var t=this.getRootNode().querySelectorAll("form"),e=0,n=Array.from(t);e<n.length;e++){var i=n[e];if(i.contains(this))return i}return null}},{key:"connectedCallback",value:function(){var t;(0,s.Z)((0,c.Z)(n.prototype),"connectedCallback",this).call(this),this.containingForm=this.findFormElement(),null===(t=this.containingForm)||void 0===t||t.addEventListener("formdata",this.formDataListener)}},{key:"disconnectedCallback",value:function(){var t;(0,s.Z)((0,c.Z)(n.prototype),"disconnectedCallback",this).call(this),null===(t=this.containingForm)||void 0===t||t.removeEventListener("formdata",this.formDataListener),this.containingForm=null}},{key:"click",value:function(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}},{key:"firstUpdated",value:function(){var t=this;(0,s.Z)((0,c.Z)(n.prototype),"firstUpdated",this).call(this),this.shadowRoot&&this.mdcRoot.addEventListener("change",(function(e){t.dispatchEvent(new Event("change",e))}))}}]),n}(h.H);m.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,d.__decorate)([(0,p.Cb)({type:Boolean})],m.prototype,"disabled",void 0)},75642:function(t,e,n){var i,r,o=n(88962),a=n(71650),s=n(33368),c=n(69205),l=n(70906),u=n(43204),d=n(68144),p=n(79932),h=(0,d.iv)(i||(i=(0,o.Z)([':host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:400;font-style:normal;font-size:var(--mdc-icon-size,24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}']))),f=function(t){(0,c.Z)(n,t);var e=(0,l.Z)(n);function n(){return(0,a.Z)(this,n),e.apply(this,arguments)}return(0,s.Z)(n,[{key:"render",value:function(){return(0,d.dy)(r||(r=(0,o.Z)(["<span><slot></slot></span>"])))}}]),n}(d.oi);f.styles=[h],f=(0,u.__decorate)([(0,p.Mo)("mwc-icon")],f)},7323:function(t,e,n){n.d(e,{p:function(){return i}});var i=function(t,e){return t&&t.config.components.includes(e)}},32594:function(t,e,n){n.d(e,{U:function(){return i}});var i=function(t){return t.stopPropagation()}},96151:function(t,e,n){n.d(e,{T:function(){return i},y:function(){return r}});var i=function(t){requestAnimationFrame((function(){return setTimeout(t,0)}))},r=function(){return new Promise((function(t){i(t)}))}},9381:function(t,e,n){var i,r,o,a,s=n(93359),c=n(88962),l=n(33368),u=n(71650),d=n(82390),p=n(69205),h=n(70906),f=n(91808),m=n(68144),v=n(79932),y=n(83448),k=n(47181),g=(n(10983),n(52039),{info:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",warning:"M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16",error:"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",success:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"});(0,f.Z)([(0,v.Mo)("ha-alert")],(function(t,e){var n=function(e){(0,p.Z)(i,e);var n=(0,h.Z)(i);function i(){var e;(0,u.Z)(this,i);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o)),t((0,d.Z)(e)),e}return(0,l.Z)(i)}(e);return{F:n,d:[{kind:"field",decorators:[(0,v.Cb)()],key:"title",value:function(){return""}},{kind:"field",decorators:[(0,v.Cb)({attribute:"alert-type"})],key:"alertType",value:function(){return"info"}},{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"dismissable",value:function(){return!1}},{kind:"method",key:"render",value:function(){return(0,m.dy)(i||(i=(0,c.Z)([' <div class="issue-type ','" role="alert"> <div class="icon ','"> <slot name="icon"> <ha-svg-icon .path="','"></ha-svg-icon> </slot> </div> <div class="content"> <div class="main-content"> ',' <slot></slot> </div> <div class="action"> <slot name="action"> '," </slot> </div> </div> </div> "])),(0,y.$)((0,s.Z)({},this.alertType,!0)),this.title?"":"no-title",g[this.alertType],this.title?(0,m.dy)(r||(r=(0,c.Z)(['<div class="title">',"</div>"])),this.title):"",this.dismissable?(0,m.dy)(o||(o=(0,c.Z)(['<ha-icon-button @click="','" label="Dismiss alert" .path="','"></ha-icon-button>'])),this._dismiss_clicked,"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"):"")}},{kind:"method",key:"_dismiss_clicked",value:function(){(0,k.B)(this,"alert-dismissed-clicked")}},{kind:"field",static:!0,key:"styles",value:function(){return(0,m.iv)(a||(a=(0,c.Z)(['.issue-type{position:relative;padding:8px;display:flex}.issue-type::after{position:absolute;top:0;right:0;bottom:0;left:0;opacity:.12;pointer-events:none;content:"";border-radius:4px}.icon{z-index:1}.icon.no-title{align-self:center}.content{display:flex;justify-content:space-between;align-items:center;width:100%;text-align:var(--float-start)}.action{z-index:1;width:min-content;--mdc-theme-primary:var(--primary-text-color)}.main-content{overflow-wrap:anywhere;word-break:break-word;margin-left:8px;margin-right:0;margin-inline-start:8px;margin-inline-end:0;direction:var(--direction)}.title{margin-top:2px;font-weight:700}.action ha-icon-button,.action mwc-button{--mdc-theme-primary:var(--primary-text-color);--mdc-icon-button-size:36px}.issue-type.info>.icon{color:var(--info-color)}.issue-type.info::after{background-color:var(--info-color)}.issue-type.warning>.icon{color:var(--warning-color)}.issue-type.warning::after{background-color:var(--warning-color)}.issue-type.error>.icon{color:var(--error-color)}.issue-type.error::after{background-color:var(--error-color)}.issue-type.success>.icon{color:var(--success-color)}.issue-type.success::after{background-color:var(--success-color)}'])))}}]}}),m.oi)},73366:function(t,e,n){n.d(e,{M:function(){return y}});var i,r=n(88962),o=n(33368),a=n(71650),s=n(82390),c=n(69205),l=n(70906),u=n(91808),d=n(34541),p=n(47838),h=n(61092),f=n(96762),m=n(68144),v=n(79932),y=(0,u.Z)([(0,v.Mo)("ha-list-item")],(function(t,e){var n=function(e){(0,c.Z)(i,e);var n=(0,l.Z)(i);function i(){var e;(0,a.Z)(this,i);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return e=n.call.apply(n,[this].concat(o)),t((0,s.Z)(e)),e}return(0,o.Z)(i)}(e);return{F:n,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,d.Z)((0,p.Z)(n.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[f.W,(0,m.iv)(i||(i=(0,r.Z)([":host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}"])))]}}]}}),h.K)},86630:function(t,e,n){var i,r,o=n(99312),a=n(81043),s=n(88962),c=n(33368),l=n(71650),u=n(82390),d=n(69205),p=n(70906),h=n(91808),f=n(34541),m=n(47838),v=n(49412),y=n(3762),k=n(68144),g=n(79932),b=n(38346),Z=n(96151);(0,h.Z)([(0,g.Mo)("ha-select")],(function(t,e){var n=function(e){(0,d.Z)(i,e);var n=(0,p.Z)(i);function i(){var e;(0,l.Z)(this,i);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o)),t((0,u.Z)(e)),e}return(0,c.Z)(i)}(e);return{F:n,d:[{kind:"field",decorators:[(0,g.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?(0,k.dy)(i||(i=(0,s.Z)(['<span class="mdc-select__icon"><slot name="icon"></slot></span>']))):k.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,f.Z)((0,m.Z)(n.prototype),"connectedCallback",this).call(this),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,f.Z)((0,m.Z)(n.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"field",key:"_translationsUpdated",value:function(){var t=this;return(0,b.D)((0,a.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Z.y)();case 2:t.layoutOptions();case 3:case"end":return e.stop()}}),e)}))),500)}},{kind:"field",static:!0,key:"styles",value:function(){return[y.W,(0,k.iv)(r||(r=(0,s.Z)([".mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-select__anchor{height:var(--ha-select-height,56px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}"])))]}}]}}),v.K)},38204:function(t,e,n){n.r(e),n.d(e,{HaBackupLocationSelector:function(){return L}});var i,r,o,a,s,c,l=n(88962),u=n(33368),d=n(71650),p=n(82390),h=n(69205),f=n(70906),m=n(91808),v=n(68144),y=n(79932),k=n(99312),g=n(81043),b=n(14516),Z=n(7323),_=n(47181),w=n(32594),A=n(85415),C=n(29748),x=(n(9381),n(73366),n(86630),"/backup"),L=((0,m.Z)([(0,y.Mo)("ha-mount-picker")],(function(t,e){var n,s=function(e){(0,h.Z)(i,e);var n=(0,f.Z)(i);function i(){var e;(0,d.Z)(this,i);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o)),t((0,p.Z)(e)),e}return(0,u.Z)(i)}(e);return{F:s,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,y.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,y.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,y.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"required",value:function(){return!1}},{kind:"field",decorators:[(0,y.Cb)()],key:"usage",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_mounts",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_error",value:void 0},{kind:"method",key:"firstUpdated",value:function(){this._getMounts()}},{kind:"method",key:"render",value:function(){if(this._error)return(0,v.dy)(i||(i=(0,l.Z)(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error);if(!this._mounts)return v.Ld;var t=(0,v.dy)(r||(r=(0,l.Z)(['<ha-list-item graphic="icon" .value="','"> <span> ',' </span> <ha-svg-icon slot="graphic" .path="','"></ha-svg-icon> </ha-list-item>'])),x,this.hass.localize("ui.components.mount-picker.use_datadisk")||"Use data disk for backup","M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M12,4A6,6 0 0,0 6,10C6,13.31 8.69,16 12.1,16L11.22,13.77C10.95,13.29 11.11,12.68 11.59,12.4L12.45,11.9C12.93,11.63 13.54,11.79 13.82,12.27L15.74,14.69C17.12,13.59 18,11.9 18,10A6,6 0 0,0 12,4M12,9A1,1 0 0,1 13,10A1,1 0 0,1 12,11A1,1 0 0,1 11,10A1,1 0 0,1 12,9M7,18A1,1 0 0,0 6,19A1,1 0 0,0 7,20A1,1 0 0,0 8,19A1,1 0 0,0 7,18M12.09,13.27L14.58,19.58L17.17,18.08L12.95,12.77L12.09,13.27Z");return(0,v.dy)(o||(o=(0,l.Z)([' <ha-select .label="','" .value="','" .required="','" .disabled="','" .helper="','" @selected="','" @closed="','" fixedMenuPosition naturalMenuWidth> '," "," "," </ha-select> "])),void 0===this.label&&this.hass?this.hass.localize("ui.components.mount-picker.mount"):this.label,this._value,this.required,this.disabled,this.helper,this._mountChanged,w.U,this.usage!==C.eX.BACKUP||this._mounts.default_backup_mount&&this._mounts.default_backup_mount!==x?v.Ld:t,this._filterMounts(this._mounts,this.usage).map((function(t){return(0,v.dy)(a||(a=(0,l.Z)(['<ha-list-item twoline graphic="icon" .value="','"> <span>','</span> <span slot="secondary">',"","",'</span> <ha-svg-icon slot="graphic" .path="','"></ha-svg-icon> </ha-list-item>'])),t.name,t.name,t.server,t.port?":".concat(t.port):v.Ld,t.type===C.mw.NFS?t.path:":".concat(t.share),t.usage===C.eX.MEDIA?"M19 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3M10 16V8L15 12":t.usage===C.eX.SHARE?"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z":"M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z")})),this.usage===C.eX.BACKUP&&this._mounts.default_backup_mount?t:v.Ld)}},{kind:"field",key:"_filterMounts",value:function(){var t=this;return(0,b.Z)((function(e,n){var i=e.mounts.filter((function(t){return[C.mw.CIFS,C.mw.NFS].includes(t.type)}));return n&&(i=e.mounts.filter((function(t){return t.usage===n}))),i.sort((function(n,i){return n.name===e.default_backup_mount?-1:i.name===e.default_backup_mount?1:(0,A.f)(n.name,i.name,t.hass.locale.language)}))}))}},{kind:"method",key:"_getMounts",value:(n=(0,g.Z)((0,k.Z)().mark((function t(){return(0,k.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(0,Z.p)(this.hass,"hassio")){t.next=8;break}return t.next=4,(0,C.rE)(this.hass);case 4:this._mounts=t.sent,this.usage!==C.eX.BACKUP||this.value||(this.value=this._mounts.default_backup_mount||x),t.next=9;break;case 8:this._error=this.hass.localize("ui.components.mount-picker.error.no_supervisor");case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),this._error=this.hass.localize("ui.components.mount-picker.error.fetch_mounts");case 14:case"end":return t.stop()}}),t,this,[[0,11]])}))),function(){return n.apply(this,arguments)})},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_mountChanged",value:function(t){t.stopPropagation();var e=t.target.value;e!==this._value&&this._setValue(e)}},{kind:"method",key:"_setValue",value:function(t){var e=this;this.value=t,setTimeout((function(){(0,_.B)(e,"value-changed",{value:t}),(0,_.B)(e,"change")}),0)}}]}}),v.oi),(0,m.Z)([(0,y.Mo)("ha-selector-backup_location")],(function(t,e){var n=function(e){(0,h.Z)(i,e);var n=(0,f.Z)(i);function i(){var e;(0,d.Z)(this,i);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o)),t((0,p.Z)(e)),e}return(0,u.Z)(i)}(e);return{F:n,d:[{kind:"field",decorators:[(0,y.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,y.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,y.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,y.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,y.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"required",value:function(){return!0}},{kind:"method",key:"render",value:function(){return(0,v.dy)(s||(s=(0,l.Z)(['<ha-mount-picker .hass="','" .value="','" .label="','" .helper="','" .disabled="','" .required="','" usage="backup"></ha-mount-picker>'])),this.hass,this.value,this.label,this.helper,this.disabled,this.required)}},{kind:"field",static:!0,key:"styles",value:function(){return(0,v.iv)(c||(c=(0,l.Z)(["ha-mount-picker{width:100%}"])))}}]}}),v.oi))},29748:function(t,e,n){n.d(e,{TF:function(){return f},ap:function(){return m},eX:function(){return u},gp:function(){return v},mw:function(){return l},rE:function(){return p},wc:function(){return d},xM:function(){return h}});var i,r,o,a,s=n(99312),c=n(81043),l=function(t){return t.BIND="bind",t.CIFS="cifs",t.NFS="nfs",t}({}),u=function(t){return t.BACKUP="backup",t.MEDIA="media",t.SHARE="share",t}({}),d=function(t){return t.ACTIVE="active",t.FAILED="failed",t.UNKNOWN="unknown",t}({}),p=function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/mounts",method:"get",timeout:null}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=32143==n.j?(i=(0,c.Z)((0,s.Z)().mark((function t(e,n){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/mounts",method:"post",timeout:null,data:n}));case 1:case"end":return t.stop()}}),t)}))),function(t,e){return i.apply(this,arguments)}):null,f=32143==n.j?(r=(0,c.Z)((0,s.Z)().mark((function t(e,n){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/mounts/".concat(n.name),method:"put",timeout:null,data:n}));case 1:case"end":return t.stop()}}),t)}))),function(t,e){return r.apply(this,arguments)}):null,m=32143==n.j?(o=(0,c.Z)((0,s.Z)().mark((function t(e,n){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/mounts/".concat(n),method:"delete",timeout:null}));case 1:case"end":return t.stop()}}),t)}))),function(t,e){return o.apply(this,arguments)}):null,v=32143==n.j?(a=(0,c.Z)((0,s.Z)().mark((function t(e,n){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/mounts/".concat(n.name,"/reload"),method:"post",timeout:null}));case 1:case"end":return t.stop()}}),t)}))),function(t,e){return a.apply(this,arguments)}):null}}]);
//# sourceMappingURL=70955-eEBdKu-9X-k.js.map