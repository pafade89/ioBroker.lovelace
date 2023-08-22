/*! For license information please see 53398-2118KOH4EAU.js.LICENSE.txt */
export const id=53398;export const ids=[53398,41058,76969];export const modules={30879:(e,r,t)=>{t.d(r,{D:()=>m});var i=t(43204),c=t(79932),a=t(38103),o=t(68144),s=t(83448),n=t(30153),d=t(47501);class l extends o.oi{constructor(){super(...arguments),this.indeterminate=!1,this.progress=0,this.density=0,this.closed=!1}open(){this.closed=!1}close(){this.closed=!0}render(){const e={"mdc-circular-progress--closed":this.closed,"mdc-circular-progress--indeterminate":this.indeterminate},r=48+4*this.density,t={width:`${r}px`,height:`${r}px`};return o.dy` <div class="mdc-circular-progress ${(0,s.$)(e)}" style="${(0,d.V)(t)}" role="progressbar" aria-label="${(0,n.o)(this.ariaLabel)}" aria-valuemin="0" aria-valuemax="1" aria-valuenow="${(0,n.o)(this.indeterminate?void 0:this.progress)}"> ${this.renderDeterminateContainer()} ${this.renderIndeterminateContainer()} </div>`}renderDeterminateContainer(){const e=48+4*this.density,r=e/2,t=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,i=6.2831852*t,c=(1-this.progress)*i,a=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return o.dy` <div class="mdc-circular-progress__determinate-container"> <svg class="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 ${e} ${e}"> <circle class="mdc-circular-progress__determinate-track" cx="${r}" cy="${r}" r="${t}" stroke-width="${a}"></circle> <circle class="mdc-circular-progress__determinate-circle" cx="${r}" cy="${r}" r="${t}" stroke-dasharray="${6.2831852*t}" stroke-dashoffset="${c}" stroke-width="${a}"></circle> </svg> </div>`}renderIndeterminateContainer(){return o.dy` <div class="mdc-circular-progress__indeterminate-container"> <div class="mdc-circular-progress__spinner-layer"> ${this.renderIndeterminateSpinnerLayer()} </div> </div>`}renderIndeterminateSpinnerLayer(){const e=48+4*this.density,r=e/2,t=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,i=6.2831852*t,c=.5*i,a=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return o.dy` <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 ${e} ${e}"> <circle cx="${r}" cy="${r}" r="${t}" stroke-dasharray="${i}" stroke-dashoffset="${c}" stroke-width="${a}"></circle> </svg> </div> <div class="mdc-circular-progress__gap-patch"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 ${e} ${e}"> <circle cx="${r}" cy="${r}" r="${t}" stroke-dasharray="${i}" stroke-dashoffset="${c}" stroke-width="${.8*a}"></circle> </svg> </div> <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 ${e} ${e}"> <circle cx="${r}" cy="${r}" r="${t}" stroke-dasharray="${i}" stroke-dashoffset="${c}" stroke-width="${a}"></circle> </svg> </div>`}update(e){super.update(e),e.has("progress")&&(this.progress>1&&(this.progress=1),this.progress<0&&(this.progress=0))}}(0,i.__decorate)([(0,c.Cb)({type:Boolean,reflect:!0})],l.prototype,"indeterminate",void 0),(0,i.__decorate)([(0,c.Cb)({type:Number,reflect:!0})],l.prototype,"progress",void 0),(0,i.__decorate)([(0,c.Cb)({type:Number,reflect:!0})],l.prototype,"density",void 0),(0,i.__decorate)([(0,c.Cb)({type:Boolean,reflect:!0})],l.prototype,"closed",void 0),(0,i.__decorate)([a.L,(0,c.Cb)({type:String,attribute:"aria-label"})],l.prototype,"ariaLabel",void 0);const p=o.iv`.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary,#6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0s cubic-bezier(.4,0,.6,1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset .5s 0s cubic-bezier(0,0,.2,1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1.568s linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color,transparent)}`;let m=class extends l{};m.styles=[p],m=(0,i.__decorate)([(0,c.Mo)("mwc-circular-progress")],m)},8485:(e,r,t)=>{t.d(r,{a:()=>u});var i=t(43204),c=t(72774),a={ROOT:"mdc-form-field"},o={LABEL_SELECTOR:".mdc-form-field > label"};const s=function(e){function r(t){var c=e.call(this,(0,i.__assign)((0,i.__assign)({},r.defaultAdapter),t))||this;return c.click=function(){c.handleClick()},c}return(0,i.__extends)(r,e),Object.defineProperty(r,"cssClasses",{get:function(){return a},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return o},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),r.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},r.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},r.prototype.handleClick=function(){var e=this;this.adapter.activateInputRipple(),requestAnimationFrame((function(){e.adapter.deactivateInputRipple()}))},r}(c.K);var n=t(78220),d=t(18601),l=t(14114),p=t(68144),m=t(79932),h=t(83448);class u extends n.H{constructor(){super(...arguments),this.alignEnd=!1,this.spaceBetween=!1,this.nowrap=!1,this.label="",this.mdcFoundationClass=s}createAdapter(){return{registerInteractionHandler:(e,r)=>{this.labelEl.addEventListener(e,r)},deregisterInteractionHandler:(e,r)=>{this.labelEl.removeEventListener(e,r)},activateInputRipple:async()=>{const e=this.input;if(e instanceof d.Wg){const r=await e.ripple;r&&r.startPress()}},deactivateInputRipple:async()=>{const e=this.input;if(e instanceof d.Wg){const r=await e.ripple;r&&r.endPress()}}}}get input(){var e,r;return null!==(r=null===(e=this.slottedInputs)||void 0===e?void 0:e[0])&&void 0!==r?r:null}render(){const e={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return p.dy` <div class="mdc-form-field ${(0,h.$)(e)}"> <slot></slot> <label class="mdc-label" @click="${this._labelClick}">${this.label}</label> </div>`}click(){this._labelClick()}_labelClick(){const e=this.input;e&&(e.focus(),e.click())}}(0,i.__decorate)([(0,m.Cb)({type:Boolean})],u.prototype,"alignEnd",void 0),(0,i.__decorate)([(0,m.Cb)({type:Boolean})],u.prototype,"spaceBetween",void 0),(0,i.__decorate)([(0,m.Cb)({type:Boolean})],u.prototype,"nowrap",void 0),(0,i.__decorate)([(0,m.Cb)({type:String}),(0,l.P)((async function(e){var r;null===(r=this.input)||void 0===r||r.setAttribute("aria-label",e)}))],u.prototype,"label",void 0),(0,i.__decorate)([(0,m.IO)(".mdc-form-field")],u.prototype,"mdcRoot",void 0),(0,i.__decorate)([(0,m.vZ)("",!0,"*")],u.prototype,"slottedInputs",void 0),(0,i.__decorate)([(0,m.IO)("label")],u.prototype,"labelEl",void 0)},92038:(e,r,t)=>{t.d(r,{W:()=>i});const i=t(68144).iv`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size,.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height,1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight,400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing,.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform,inherit);color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}.mdc-form-field>label[dir=rtl],[dir=rtl] .mdc-form-field>label{margin-left:auto;margin-right:0}.mdc-form-field>label[dir=rtl],[dir=rtl] .mdc-form-field>label{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}.mdc-form-field--align-end>label[dir=rtl],[dir=rtl] .mdc-form-field--align-end>label{margin-left:0;margin-right:auto}.mdc-form-field--align-end>label[dir=rtl],[dir=rtl] .mdc-form-field--align-end>label{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}.mdc-form-field--space-between>label[dir=rtl],[dir=rtl] .mdc-form-field--space-between>label{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size,.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height,1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight,400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing,.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform,inherit);color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}::slotted(mwc-switch){margin-right:10px}::slotted(mwc-switch[dir=rtl]),[dir=rtl] ::slotted(mwc-switch){margin-left:10px}`},53464:(e,r,t)=>{t.d(r,{H:()=>g});var i=t(43204),c=(t(27763),t(38103)),a=t(78220),o=t(14114),s=t(98734),n=t(72774),d={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},l={ARIA_CHECKED_ATTR:"aria-checked",NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"};const p=function(e){function r(t){return e.call(this,(0,i.__assign)((0,i.__assign)({},r.defaultAdapter),t))||this}return(0,i.__extends)(r,e),Object.defineProperty(r,"strings",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(r,"cssClasses",{get:function(){return d},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlChecked:function(){},setNativeControlDisabled:function(){},setNativeControlAttr:function(){}}},enumerable:!1,configurable:!0}),r.prototype.setChecked=function(e){this.adapter.setNativeControlChecked(e),this.updateAriaChecked(e),this.updateCheckedStyling(e)},r.prototype.setDisabled=function(e){this.adapter.setNativeControlDisabled(e),e?this.adapter.addClass(d.DISABLED):this.adapter.removeClass(d.DISABLED)},r.prototype.handleChange=function(e){var r=e.target;this.updateAriaChecked(r.checked),this.updateCheckedStyling(r.checked)},r.prototype.updateCheckedStyling=function(e){e?this.adapter.addClass(d.CHECKED):this.adapter.removeClass(d.CHECKED)},r.prototype.updateAriaChecked=function(e){this.adapter.setNativeControlAttr(l.ARIA_CHECKED_ATTR,""+!!e)},r}(n.K);var m=t(68144),h=t(79932),u=t(30153);class g extends a.H{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.shouldRenderRipple=!1,this.mdcFoundationClass=p,this.rippleHandlers=new s.A((()=>(this.shouldRenderRipple=!0,this.ripple)))}changeHandler(e){this.mdcFoundation.handleChange(e),this.checked=this.formElement.checked}createAdapter(){return Object.assign(Object.assign({},(0,a.q)(this.mdcRoot)),{setNativeControlChecked:e=>{this.formElement.checked=e},setNativeControlDisabled:e=>{this.formElement.disabled=e},setNativeControlAttr:(e,r)=>{this.formElement.setAttribute(e,r)}})}renderRipple(){return this.shouldRenderRipple?m.dy` <mwc-ripple .accent="${this.checked}" .disabled="${this.disabled}" unbounded> </mwc-ripple>`:""}focus(){const e=this.formElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.formElement;e&&(this.rippleHandlers.endFocus(),e.blur())}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",(e=>{this.dispatchEvent(new Event("change",e))}))}render(){return m.dy` <div class="mdc-switch"> <div class="mdc-switch__track"></div> <div class="mdc-switch__thumb-underlay"> ${this.renderRipple()} <div class="mdc-switch__thumb"> <input type="checkbox" id="basic-switch" class="mdc-switch__native-control" role="switch" aria-label="${(0,u.o)(this.ariaLabel)}" aria-labelledby="${(0,u.o)(this.ariaLabelledBy)}" @change="${this.changeHandler}" @focus="${this.handleRippleFocus}" @blur="${this.handleRippleBlur}" @mousedown="${this.handleRippleMouseDown}" @mouseenter="${this.handleRippleMouseEnter}" @mouseleave="${this.handleRippleMouseLeave}" @touchstart="${this.handleRippleTouchStart}" @touchend="${this.handleRippleDeactivate}" @touchcancel="${this.handleRippleDeactivate}"> </div> </div> </div>`}handleRippleMouseDown(e){const r=()=>{window.removeEventListener("mouseup",r),this.handleRippleDeactivate()};window.addEventListener("mouseup",r),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}(0,i.__decorate)([(0,h.Cb)({type:Boolean}),(0,o.P)((function(e){this.mdcFoundation.setChecked(e)}))],g.prototype,"checked",void 0),(0,i.__decorate)([(0,h.Cb)({type:Boolean}),(0,o.P)((function(e){this.mdcFoundation.setDisabled(e)}))],g.prototype,"disabled",void 0),(0,i.__decorate)([c.L,(0,h.Cb)({attribute:"aria-label"})],g.prototype,"ariaLabel",void 0),(0,i.__decorate)([c.L,(0,h.Cb)({attribute:"aria-labelledby"})],g.prototype,"ariaLabelledBy",void 0),(0,i.__decorate)([(0,h.IO)(".mdc-switch")],g.prototype,"mdcRoot",void 0),(0,i.__decorate)([(0,h.IO)("input")],g.prototype,"formElement",void 0),(0,i.__decorate)([(0,h.GC)("mwc-ripple")],g.prototype,"ripple",void 0),(0,i.__decorate)([(0,h.SB)()],g.prototype,"shouldRenderRipple",void 0),(0,i.__decorate)([(0,h.hO)({passive:!0})],g.prototype,"handleRippleMouseDown",null),(0,i.__decorate)([(0,h.hO)({passive:!0})],g.prototype,"handleRippleTouchStart",null)},4301:(e,r,t)=>{t.d(r,{W:()=>i});const i=t(68144).iv`.mdc-switch__thumb-underlay{left:-14px;right:initial;top:-17px;width:48px;height:48px}.mdc-switch__thumb-underlay[dir=rtl],[dir=rtl] .mdc-switch__thumb-underlay{left:initial;right:-14px}.mdc-switch__native-control{width:64px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:0;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary,#018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary,#018786);border-color:#018786;border-color:var(--mdc-theme-secondary,#018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;background-color:var(--mdc-theme-on-surface,#000)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;background-color:var(--mdc-theme-surface,#fff);border-color:#fff;border-color:var(--mdc-theme-surface,#fff)}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;transition:transform 90ms cubic-bezier(.4,0,.2,1)}.mdc-switch__native-control[dir=rtl],[dir=rtl] .mdc-switch__native-control{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:36px;height:14px;border:1px solid transparent;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(.4,0,.2,1),background-color 90ms cubic-bezier(.4,0,.2,1),border-color 90ms cubic-bezier(.4,0,.2,1)}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(.4,0,.2,1),background-color 90ms cubic-bezier(.4,0,.2,1),border-color 90ms cubic-bezier(.4,0,.2,1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0,0,0,.2),0px 2px 2px 0px rgba(0,0,0,.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(16px)}.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl],[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(-16px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-16px)}.mdc-switch--checked .mdc-switch__native-control[dir=rtl],[dir=rtl] .mdc-switch--checked .mdc-switch__native-control{transform:translateX(16px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}:host{display:inline-flex;outline:0;-webkit-tap-highlight-color:transparent}`}};
//# sourceMappingURL=53398-2118KOH4EAU.js.map