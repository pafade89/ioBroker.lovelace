/*! For license information please see 2951-6UBOuvLn5Ic.js.LICENSE.txt */
export const id=2951;export const ids=[2951];export const modules={61092:(t,e,i)=>{i.d(e,{K:()=>l});var a=i(43204),s=(i(27763),i(14114)),r=i(98734),o=i(68144),d=i(79932),n=i(83448);class l extends o.oi{constructor(){super(...arguments),this.value="",this.group=null,this.tabindex=-1,this.disabled=!1,this.twoline=!1,this.activated=!1,this.graphic=null,this.multipleGraphics=!1,this.hasMeta=!1,this.noninteractive=!1,this.selected=!1,this.shouldRenderRipple=!1,this._managingList=null,this.boundOnClick=this.onClick.bind(this),this._firstChanged=!0,this._skipPropRequest=!1,this.rippleHandlers=new r.A((()=>(this.shouldRenderRipple=!0,this.ripple))),this.listeners=[{target:this,eventNames:["click"],cb:()=>{this.onClick()}},{target:this,eventNames:["mouseenter"],cb:this.rippleHandlers.startHover},{target:this,eventNames:["mouseleave"],cb:this.rippleHandlers.endHover},{target:this,eventNames:["focus"],cb:this.rippleHandlers.startFocus},{target:this,eventNames:["blur"],cb:this.rippleHandlers.endFocus},{target:this,eventNames:["mousedown","touchstart"],cb:t=>{const e=t.type;this.onDown("mousedown"===e?"mouseup":"touchend",t)}}]}get text(){const t=this.textContent;return t?t.trim():""}render(){const t=this.renderText(),e=this.graphic?this.renderGraphic():o.dy``,i=this.hasMeta?this.renderMeta():o.dy``;return o.dy` ${this.renderRipple()} ${e} ${t} ${i}`}renderRipple(){return this.shouldRenderRipple?o.dy` <mwc-ripple .activated="${this.activated}"> </mwc-ripple>`:this.activated?o.dy`<div class="fake-activated-ripple"></div>`:""}renderGraphic(){const t={multi:this.multipleGraphics};return o.dy` <span class="mdc-deprecated-list-item__graphic material-icons ${(0,n.$)(t)}"> <slot name="graphic"></slot> </span>`}renderMeta(){return o.dy` <span class="mdc-deprecated-list-item__meta material-icons"> <slot name="meta"></slot> </span>`}renderText(){const t=this.twoline?this.renderTwoline():this.renderSingleLine();return o.dy` <span class="mdc-deprecated-list-item__text"> ${t} </span>`}renderSingleLine(){return o.dy`<slot></slot>`}renderTwoline(){return o.dy` <span class="mdc-deprecated-list-item__primary-text"> <slot></slot> </span> <span class="mdc-deprecated-list-item__secondary-text"> <slot name="secondary"></slot> </span> `}onClick(){this.fireRequestSelected(!this.selected,"interaction")}onDown(t,e){const i=()=>{window.removeEventListener(t,i),this.rippleHandlers.endPress()};window.addEventListener(t,i),this.rippleHandlers.startPress(e)}fireRequestSelected(t,e){if(this.noninteractive)return;const i=new CustomEvent("request-selected",{bubbles:!0,composed:!0,detail:{source:e,selected:t}});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.noninteractive||this.setAttribute("mwc-list-item","");for(const t of this.listeners)for(const e of t.eventNames)t.target.addEventListener(e,t.cb,{passive:!0})}disconnectedCallback(){super.disconnectedCallback();for(const t of this.listeners)for(const e of t.eventNames)t.target.removeEventListener(e,t.cb);this._managingList&&(this._managingList.debouncedLayout?this._managingList.debouncedLayout(!0):this._managingList.layout(!0))}firstUpdated(){const t=new Event("list-item-rendered",{bubbles:!0,composed:!0});this.dispatchEvent(t)}}(0,a.__decorate)([(0,d.IO)("slot")],l.prototype,"slotElement",void 0),(0,a.__decorate)([(0,d.GC)("mwc-ripple")],l.prototype,"ripple",void 0),(0,a.__decorate)([(0,d.Cb)({type:String})],l.prototype,"value",void 0),(0,a.__decorate)([(0,d.Cb)({type:String,reflect:!0})],l.prototype,"group",void 0),(0,a.__decorate)([(0,d.Cb)({type:Number,reflect:!0})],l.prototype,"tabindex",void 0),(0,a.__decorate)([(0,d.Cb)({type:Boolean,reflect:!0}),(0,s.P)((function(t){t?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false")}))],l.prototype,"disabled",void 0),(0,a.__decorate)([(0,d.Cb)({type:Boolean,reflect:!0})],l.prototype,"twoline",void 0),(0,a.__decorate)([(0,d.Cb)({type:Boolean,reflect:!0})],l.prototype,"activated",void 0),(0,a.__decorate)([(0,d.Cb)({type:String,reflect:!0})],l.prototype,"graphic",void 0),(0,a.__decorate)([(0,d.Cb)({type:Boolean})],l.prototype,"multipleGraphics",void 0),(0,a.__decorate)([(0,d.Cb)({type:Boolean})],l.prototype,"hasMeta",void 0),(0,a.__decorate)([(0,d.Cb)({type:Boolean,reflect:!0}),(0,s.P)((function(t){t?(this.removeAttribute("aria-checked"),this.removeAttribute("mwc-list-item"),this.selected=!1,this.activated=!1,this.tabIndex=-1):this.setAttribute("mwc-list-item","")}))],l.prototype,"noninteractive",void 0),(0,a.__decorate)([(0,d.Cb)({type:Boolean,reflect:!0}),(0,s.P)((function(t){const e=this.getAttribute("role"),i="gridcell"===e||"option"===e||"row"===e||"tab"===e;i&&t?this.setAttribute("aria-selected","true"):i&&this.setAttribute("aria-selected","false"),this._firstChanged?this._firstChanged=!1:this._skipPropRequest||this.fireRequestSelected(t,"property")}))],l.prototype,"selected",void 0),(0,a.__decorate)([(0,d.SB)()],l.prototype,"shouldRenderRipple",void 0),(0,a.__decorate)([(0,d.SB)()],l.prototype,"_managingList",void 0)},96762:(t,e,i)=>{i.d(e,{W:()=>a});const a=i(68144).iv`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding,16px);padding-right:var(--mdc-list-side-padding,16px);outline:0;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}:host:focus{outline:0}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary,#6200ee);--mdc-ripple-color:var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:.12;opacity:var(--mdc-ripple-activated-opacity,.12);background-color:#6200ee;background-color:var(--mdc-ripple-color,var(--mdc-theme-primary,#6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size,24px);height:var(--mdc-list-item-meta-size,24px);margin-left:auto;margin-right:0;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-background,rgba(0,0,0,.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size,24px);line-height:var(--mdc-list-item-meta-size,24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size,24px)!important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-caption-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size,.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height,1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight,400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing,.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform,inherit)}.mdc-deprecated-list-item__meta[dir=rtl],[dir=rtl] .mdc-deprecated-list-item__meta{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size,.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height,1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight,400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing,.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform,inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface,#000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-background,rgba(0,0,0,.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-icon-on-background,rgba(0,0,0,.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size,40px);height:var(--mdc-list-item-graphic-size,40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size,40px);line-height:var(--mdc-list-item-graphic-size,40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size,40px)!important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin,16px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin,16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size,24px);height:var(--mdc-list-item-graphic-size,24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin,32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size,24px);line-height:var(--mdc-list-item-graphic-size,24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size,24px)!important}:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl],[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin,32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=large]:not([twoLine])),:host([graphic=medium]:not([twoLine])){height:72px}:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size,56px);height:var(--mdc-list-item-graphic-size,56px)}:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size,56px);line-height:var(--mdc-list-item-graphic-size,56px)}:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size,56px)!important}:host([graphic=large]){padding-left:0px}`},62336:(t,e,i)=>{i.d(e,{Q:()=>p});var a=i(17463),s=i(34541),r=i(47838),o=i(68144),d=i(79932),n=i(83448),l=i(47501),c=i(50239),h=i(87744);const p=3e5;(0,a.Z)([(0,d.Mo)("ha-chart-base")],(function(t,e){class a extends e{constructor(...e){super(...e),t(this)}}return{F:a,d:[{kind:"field",key:"chart",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:"chart-type",reflect:!0})],key:"chartType",value:()=>"line"},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"data",value:()=>({datasets:[]})},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"options",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"plugins",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Number})],key:"height",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Number})],key:"paddingYAxis",value:()=>0},{kind:"field",decorators:[(0,d.SB)()],key:"_chartHeight",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_tooltip",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_hiddenDatasets",value:()=>new Set},{kind:"method",key:"disconnectedCallback",value:function(){this._releaseCanvas(),(0,s.Z)((0,r.Z)(a.prototype),"disconnectedCallback",this).call(this)}},{kind:"method",key:"connectedCallback",value:function(){(0,s.Z)((0,r.Z)(a.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this._setupChart()}},{kind:"field",key:"updateChart",value(){return t=>{var e;null===(e=this.chart)||void 0===e||e.update(t)}}},{kind:"field",key:"resize",value(){return t=>{var e,i,a,s;if(null!=t&&t.aspectRatio&&!t.height)t.height=Math.round((null!==(s=t.width)&&void 0!==s?s:this.clientWidth)/t.aspectRatio);else if(null!=t&&t.aspectRatio&&!t.width){var r;t.width=Math.round((null!==(r=t.height)&&void 0!==r?r:this.clientHeight)*t.aspectRatio)}null===(e=this.chart)||void 0===e||e.resize(null!==(i=null==t?void 0:t.width)&&void 0!==i?i:this.clientWidth,null!==(a=null==t?void 0:t.height)&&void 0!==a?a:this.clientHeight)}}},{kind:"method",key:"firstUpdated",value:function(){this._setupChart(),this.data.datasets.forEach(((t,e)=>{t.hidden&&this._hiddenDatasets.add(e)}))}},{kind:"method",key:"willUpdate",value:function(t){if((0,s.Z)((0,r.Z)(a.prototype),"willUpdate",this).call(this,t),this.hasUpdated&&this.chart){if(t.has("plugins")||t.has("chartType"))return this.chart.destroy(),void this._setupChart();t.has("data")&&(this._hiddenDatasets.size&&this.data.datasets.forEach(((t,e)=>{t.hidden=this._hiddenDatasets.has(e)})),this.chart.data=this.data),t.has("options")&&(this.chart.options=this._createOptions()),this.chart.update("none")}}},{kind:"method",key:"render",value:function(){var t,e,i;return o.dy` ${!0===(null===(t=this.options)||void 0===t||null===(t=t.plugins)||void 0===t||null===(t=t.legend)||void 0===t?void 0:t.display)?o.dy`<div class="chartLegend"> <ul> ${this.data.datasets.map(((t,e)=>o.dy`<li .datasetIndex="${e}" @click="${this._legendClick}" class="${(0,n.$)({hidden:this._hiddenDatasets.has(e)})}" .title="${t.label}"> <div class="bullet" style="${(0,l.V)({backgroundColor:t.backgroundColor,borderColor:t.borderColor})}"></div> <div class="label">${t.label}</div> </li>`))} </ul> </div>`:""} <div class="animationContainer" style="${(0,l.V)({height:`${this.height||this._chartHeight||0}px`,overflow:this._chartHeight?"initial":"hidden"})}"> <div class="chartContainer" style="${(0,l.V)({height:`${null!==(e=null!==(i=this.height)&&void 0!==i?i:this._chartHeight)&&void 0!==e?e:this.clientWidth/2}px`,"padding-left":`${(0,h.HE)(this.hass)?0:this.paddingYAxis}px`,"padding-right":`${(0,h.HE)(this.hass)?this.paddingYAxis:0}px`})}"> <canvas></canvas> ${this._tooltip?o.dy`<div class="chartTooltip ${(0,n.$)({[this._tooltip.yAlign]:!0})}" style="${(0,l.V)({top:this._tooltip.top,left:this._tooltip.left})}"> <div class="title">${this._tooltip.title}</div> ${this._tooltip.beforeBody?o.dy`<div class="beforeBody"> ${this._tooltip.beforeBody} </div>`:""} <div> <ul> ${this._tooltip.body.map(((t,e)=>o.dy`<li> <div class="bullet" style="${(0,l.V)({backgroundColor:this._tooltip.labelColors[e].backgroundColor,borderColor:this._tooltip.labelColors[e].borderColor})}"></div> ${t.lines.join("\n")} </li>`))} </ul> </div> ${this._tooltip.footer.length?o.dy`<div class="footer"> ${this._tooltip.footer.map((t=>o.dy`${t}<br>`))} </div>`:""} </div>`:""} </div> </div> `}},{kind:"method",key:"_setupChart",value:async function(){const t=this.renderRoot.querySelector("canvas").getContext("2d"),e=(await Promise.all([i.e(94740),i.e(7248),i.e(59904),i.e(55928)]).then(i.bind(i,55928))).Chart,a=getComputedStyle(this);e.defaults.borderColor=a.getPropertyValue("--divider-color"),e.defaults.color=a.getPropertyValue("--secondary-text-color"),e.defaults.font.family=a.getPropertyValue("--mdc-typography-body1-font-family")||a.getPropertyValue("--mdc-typography-font-family")||"Roboto, Noto, sans-serif",this.chart=new e(t,{type:this.chartType,data:this.data,options:this._createOptions(),plugins:this._createPlugins()})}},{kind:"method",key:"_createOptions",value:function(){var t,e,i;return{maintainAspectRatio:!1,...this.options,plugins:{...null===(t=this.options)||void 0===t?void 0:t.plugins,tooltip:{...null===(e=this.options)||void 0===e||null===(e=e.plugins)||void 0===e?void 0:e.tooltip,enabled:!1,external:t=>this._handleTooltip(t)},legend:{...null===(i=this.options)||void 0===i||null===(i=i.plugins)||void 0===i?void 0:i.legend,display:!1}}}}},{kind:"method",key:"_createPlugins",value:function(){var t;return[...this.plugins||[],{id:"resizeHook",resize:t=>{var e;const i=t.height-(null!==(e=this._chartHeight)&&void 0!==e?e:0);(!this._chartHeight||i>12||i<-12)&&(this._chartHeight=t.height)},legend:{...null===(t=this.options)||void 0===t||null===(t=t.plugins)||void 0===t?void 0:t.legend,display:!1}}]}},{kind:"method",key:"_legendClick",value:function(t){if(!this.chart)return;const e=t.currentTarget.datasetIndex;this.chart.isDatasetVisible(e)?(this.chart.setDatasetVisibility(e,!1),this._hiddenDatasets.add(e)):(this.chart.setDatasetVisibility(e,!0),this._hiddenDatasets.delete(e)),this.chart.update("none"),this.requestUpdate("_hiddenDatasets")}},{kind:"method",key:"_handleTooltip",value:function(t){0!==t.tooltip.opacity?this._tooltip={...t.tooltip,top:this.chart.canvas.offsetTop+t.tooltip.caretY+12+"px",left:this.chart.canvas.offsetLeft+(0,c.u)(t.tooltip.caretX,100,this.clientWidth-100-this.paddingYAxis)-100+"px"}:this._tooltip=void 0}},{kind:"method",key:"_releaseCanvas",value:function(){this.chart&&this.chart.destroy()}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`:host{display:block;position:var(--chart-base-position,relative)}.animationContainer{overflow:hidden;height:0;transition:height .3s cubic-bezier(.4,0,.2,1)}.chartContainer{position:relative}canvas{max-height:var(--chart-max-height,400px)}.chartLegend{text-align:center}.chartLegend li{cursor:pointer;display:inline-grid;grid-auto-flow:column;padding:0 8px;box-sizing:border-box;align-items:center;color:var(--secondary-text-color)}.chartLegend .hidden{text-decoration:line-through}.chartLegend .label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chartLegend .bullet,.chartTooltip .bullet{border-width:1px;border-style:solid;border-radius:50%;display:inline-block;height:16px;margin-right:6px;width:16px;flex-shrink:0;box-sizing:border-box;margin-inline-end:6px;margin-inline-start:initial;direction:var(--direction)}.chartTooltip .bullet{align-self:baseline}:host([rtl]) .chartLegend .bullet,:host([rtl]) .chartTooltip .bullet{margin-right:inherit;margin-left:6px;margin-inline-end:inherit;margin-inline-start:6px;direction:var(--direction)}.chartTooltip{padding:8px;font-size:90%;position:absolute;background:rgba(80,80,80,.9);color:#fff;border-radius:4px;pointer-events:none;z-index:1000;width:200px;box-sizing:border-box}:host([rtl]) .chartTooltip{direction:rtl}.chartLegend ul,.chartTooltip ul{display:inline-block;padding:0 0px;margin:8px 0 0 0;width:100%}.chartTooltip ul{margin:0 4px}.chartTooltip li{display:flex;white-space:pre-line;align-items:center;line-height:16px;padding:4px 0}.chartTooltip .title{text-align:center;font-weight:500;direction:ltr}.chartTooltip .footer{font-weight:500}.chartTooltip .beforeBody{text-align:center;font-weight:300;word-break:break-all}`}}]}}),o.oi)},17595:(t,e,i)=>{i.d(e,{O:()=>h});var a=i(17463),s=i(68144),r=i(79932),o=i(14516),d=i(55070),n=i(7323),l=i(18457),c=i(38014);i(62336);const h={mean:"mean",min:"min",max:"max",sum:"sum",state:"sum",change:"sum"};(0,a.Z)([(0,r.Mo)("statistics-chart")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"statisticsData",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"metadata",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"names",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"unit",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"endTime",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Array})],key:"statTypes",value:()=>["sum","min","mean","max"]},{kind:"field",decorators:[(0,r.Cb)()],key:"chartType",value:()=>"line"},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"hideLegend",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"isLoadingData",value:()=>!1},{kind:"field",decorators:[(0,r.SB)()],key:"_chartData",value:()=>({datasets:[]})},{kind:"field",decorators:[(0,r.SB)()],key:"_chartOptions",value:void 0},{kind:"field",decorators:[(0,r.IO)("ha-chart-base")],key:"_chart",value:void 0},{kind:"field",key:"_computedStyle",value:void 0},{kind:"field",key:"resize",value(){return t=>{var e;null===(e=this._chart)||void 0===e||e.resize(t)}}},{kind:"method",key:"shouldUpdate",value:function(t){return t.size>1||!t.has("hass")}},{kind:"method",key:"willUpdate",value:function(t){this.hasUpdated&&!t.has("unit")||this._createOptions(),(t.has("statisticsData")||t.has("statTypes")||t.has("chartType")||t.has("hideLegend"))&&this._generateData()}},{kind:"method",key:"firstUpdated",value:function(){this._computedStyle=getComputedStyle(this)}},{kind:"method",key:"render",value:function(){return(0,n.p)(this.hass,"history")?this.isLoadingData&&!this.statisticsData?s.dy`<div class="info"> ${this.hass.localize("ui.components.statistics_charts.loading_statistics")} </div>`:this.statisticsData&&Object.keys(this.statisticsData).length?s.dy` <ha-chart-base .hass="${this.hass}" .data="${this._chartData}" .options="${this._chartOptions}" .chartType="${this.chartType}"></ha-chart-base> `:s.dy`<div class="info"> ${this.hass.localize("ui.components.statistics_charts.no_statistics_found")} </div>`:s.dy`<div class="info"> ${this.hass.localize("ui.components.history_charts.history_disabled")} </div>`}},{kind:"method",key:"_createOptions",value:function(t){this._chartOptions={parsing:!1,animation:!1,interaction:{mode:"nearest",axis:"x"},scales:{x:{type:"time",adapters:{date:{locale:this.hass.locale,config:this.hass.config}},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:!0},font:t=>t.tick&&t.tick.major?{weight:"bold"}:{}},time:{tooltipFormat:"datetime"}},y:{beginAtZero:"bar"===this.chartType,ticks:{maxTicksLimit:7},title:{display:t||this.unit,text:t||this.unit}}},plugins:{tooltip:{callbacks:{label:t=>`${t.dataset.label}: ${(0,l.uf)(t.parsed.y,this.hass.locale)} ${t.dataset.unit||""}`}},filler:{propagate:!0},legend:{display:!this.hideLegend,labels:{usePointStyle:!0}}},elements:{line:{tension:.4,cubicInterpolationMode:"monotone",borderWidth:1.5},bar:{borderWidth:1.5,borderRadius:4},point:{hitRadius:50}},locale:(0,l.Hd)(this.hass.locale)}}},{kind:"field",key:"_getStatisticsMetaData",value(){return(0,o.Z)((async t=>{const e=await(0,c.Py)(this.hass,t),i={};return e.forEach((t=>{i[t.statistic_id]=t})),i}))}},{kind:"method",key:"_generateData",value:async function(){if(!this.statisticsData)return;const t=this.metadata||await this._getStatisticsMetaData(Object.keys(this.statisticsData));let e=0;const i=Object.entries(this.statisticsData),a=[];let s,r;if(0===i.length)return;s=this.endTime||new Date(Math.max(...i.map((([t,e])=>new Date(e[e.length-1].start).getTime())))),s>new Date&&(s=new Date);const o=this.names||{};i.forEach((([i,s])=>{const n=null==t?void 0:t[i];let l=o[i];void 0===l&&(l=(0,c.Kd)(this.hass,i,n)),this.unit||(void 0===r?r=(0,c.dO)(this.hass,i,n):null!==r&&r!==(0,c.dO)(this.hass,i,n)&&(r=null));let h,p=null;const m=[],g=(t,e,i)=>{i&&(t>e||(m.forEach(((e,a)=>{"line"===this.chartType&&h&&p&&h.getTime()!==t.getTime()&&(e.data.push({x:h.getTime(),y:p[a]}),e.data.push({x:h.getTime(),y:null})),e.data.push({x:t.getTime(),y:i[a]})})),p=i,h=e))},u=(0,d.hZ)(e,this._computedStyle||getComputedStyle(this));e++;const v=[],y=this.statTypes.includes("mean")&&(0,c.Nw)(s,"mean"),_=y||this.statTypes.includes("min")&&(0,c.Nw)(s,"min")&&this.statTypes.includes("max")&&(0,c.Nw)(s,"max");(_?[...this.statTypes].sort(((t,e)=>"min"===t||"max"===e?-1:"max"===t||"min"===e?1:0)):this.statTypes).forEach((t=>{if((0,c.Nw)(s,t)){const e=_&&("min"===t||"max"===t);v.push(t),m.push({label:l?`${l} (${this.hass.localize(`ui.components.statistics_charts.statistic_types.${t}`)})\n            `:this.hass.localize(`ui.components.statistics_charts.statistic_types.${t}`),fill:!!_&&("min"===t&&y?"+1":"max"===t&&"-1"),borderColor:e&&y?u+(this.hideLegend?"00":"7F"):u,backgroundColor:e?u+"3F":u+"7F",pointRadius:0,data:[],unit:null==n?void 0:n.unit_of_measurement,band:e})}}));let f=null,b=null;s.forEach((t=>{const e=new Date(t.start);if(f===e)return;f=e;const i=[];v.forEach((e=>{let a;"sum"===e?null==b?(a=0,b=t.sum):a=(t.sum||0)-b:a=t[e],i.push(null!=a?Math.round(100*a)/100:null)})),g(e,new Date(t.end),i)})),Array.prototype.push.apply(a,m)})),r&&this._createOptions(r),this._chartData={datasets:a}}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`:host{display:block;min-height:60px}.info{text-align:center;line-height:60px;color:var(--secondary-text-color)}`}}]}}),s.oi)},86943:(t,e,i)=>{i.r(e),i.d(e,{HuiStatisticsGraphCardEditor:()=>k});var a=i(17463),s=i(68144),r=i(79932),o=i(14516),d=i(38768),n=i(76680),l=i(47181),c=i(36639),h=i(17595),p=(i(13927),i(68331),i(38014)),m=i(90271),g=i(98346),u=i(30232),v=i(95396);const y=(0,d.G0)([(0,d.i0)("state"),(0,d.i0)("sum"),(0,d.i0)("change"),(0,d.i0)("min"),(0,d.i0)("max"),(0,d.i0)("mean")]),_=(0,d.f0)(g.I,(0,d.Ry)({entities:(0,d.IX)(u.K),title:(0,d.jt)((0,d.Z_)()),days_to_show:(0,d.jt)((0,d.Rx)()),period:(0,d.jt)((0,d.G0)([(0,d.i0)("5minute"),(0,d.i0)("hour"),(0,d.i0)("day"),(0,d.i0)("week"),(0,d.i0)("month")])),chart_type:(0,d.jt)((0,d.G0)([(0,d.i0)("bar"),(0,d.i0)("line")])),stat_types:(0,d.jt)((0,d.G0)([(0,d.IX)(y),y])),unit:(0,d.jt)((0,d.Z_)()),hide_legend:(0,d.jt)((0,d.O7)())})),f=["5minute","hour","day","week","month"],b=["mean","min","max","sum","state","change"];let k=(0,a.Z)([(0,r.Mo)("hui-statistics-graph-card-editor")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_configEntities",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_metaDatas",value:void 0},{kind:"method",key:"setConfig",value:function(t){(0,d.hu)(t,_),this._config=t,this._configEntities=t.entities?(0,m.A)(t.entities,!1).map((t=>t.entity)):[]}},{kind:"field",key:"_getStatisticsMetaData",value(){return async t=>{this._metaDatas=await(0,p.Py)(this.hass,t||[])}}},{kind:"method",key:"willUpdate",value:function(t){var e;t.has("_configEntities")&&!(0,c.v)(this._configEntities,t.get("_configEntities"))&&(this._metaDatas=void 0,null!==(e=this._configEntities)&&void 0!==e&&e.length&&this._getStatisticsMetaData(this._configEntities))}},{kind:"field",key:"_schema",value(){return(0,o.Z)(((t,e,i)=>{const a=new Set;null==i||i.forEach((t=>{const e=(0,p.dO)(this.hass,t.statistic_id,t);e&&a.add(e)}));const s=[{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"period",required:!0,selector:{select:{options:f.map((i=>({value:i,label:t(`ui.panel.lovelace.editor.card.statistics-graph.periods.${i}`),disabled:"5minute"===i&&(null==e?void 0:e.some((t=>(0,p.Hs)(t))))})))}}},{name:"days_to_show",default:v.DEFAULT_DAYS_TO_SHOW,selector:{number:{min:1,mode:"box"}}},{name:"stat_types",required:!0,selector:{select:{multiple:!0,mode:"list",options:b.map((e=>({value:e,label:t(`ui.panel.lovelace.editor.card.statistics-graph.stat_type_labels.${e}`),disabled:!i||!i.some((t=>(0,p.Z0)(t,h.O[e])))})))}}},{name:"chart_type",required:!0,type:"select",options:[["line","Line"],["bar","Bar"]]},{name:"hide_legend",required:!1,selector:{boolean:{}}}]}];return a.size>1&&s[1].schema.push({name:"unit",required:!1,selector:{select:{options:Array.from(a).map((t=>({value:t,label:t})))}}}),s}))}},{kind:"method",key:"render",value:function(){var t,e;if(!this.hass||!this._config)return s.Ld;const i=this._schema(this.hass.localize,this._configEntities,this._metaDatas),a=this._config.stat_types?(0,n.r)(this._config.stat_types):b.filter((t=>{var e;return null===(e=this._metaDatas)||void 0===e?void 0:e.some((e=>(0,p.Z0)(e,t)))})),r={chart_type:"line",period:"hour",...this._config,stat_types:a},o=null===(t=this._metaDatas)||void 0===t||null===(t=t[0])||void 0===t?void 0:t.unit_class,d=o||null===(e=this._metaDatas)||void 0===e||null===(e=e[0])||void 0===e?void 0:e.statistics_unit_of_measurement;return s.dy` <ha-form .hass="${this.hass}" .data="${r}" .schema="${i}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> <ha-statistics-picker allow-custom-entity .hass="${this.hass}" .pickStatisticLabel="${this.hass.localize("ui.panel.lovelace.editor.card.statistics-graph.pick_statistic")}" .pickedStatisticLabel="${this.hass.localize("ui.panel.lovelace.editor.card.statistics-graph.picked_statistic")}" .includeStatisticsUnitOfMeasurement="${d}" .includeUnitClass="${o}" .ignoreRestrictionsOnFirstStatistic="${!0}" .value="${this._configEntities}" .configValue="${"entities"}" @value-changed="${this._entitiesChanged}"></ha-statistics-picker> `}},{kind:"method",key:"_valueChanged",value:function(t){(0,l.B)(this,"config-changed",{config:t.detail.value})}},{kind:"method",key:"_entitiesChanged",value:async function(t){const e=t.detail.value,i=e.map((t=>{const e=this._config.entities.find((e=>"string"!=typeof e&&e.entity===t));return null!=e?e:t})),a={...this._config,entities:i};null!=e&&e.some((t=>(0,p.Hs)(t)))&&"5minute"===a.period&&delete a.period;const s=a.stat_types||a.unit?await(0,p.Py)(this.hass,e):void 0;a.stat_types&&a.entities.length&&(a.stat_types=(0,n.r)(a.stat_types).filter((t=>s.some((e=>(0,p.Z0)(e,t))))),a.stat_types.length||delete a.stat_types),a.unit&&!s.some((t=>(0,p.dO)(this.hass,null==t?void 0:t.statistic_id,t)===a.unit))&&delete a.unit,(0,l.B)(this,"config-changed",{config:a})}},{kind:"field",key:"_computeLabelCallback",value(){return t=>{switch(t.name){case"chart_type":case"stat_types":case"period":case"unit":case"hide_legend":return this.hass.localize(`ui.panel.lovelace.editor.card.statistics-graph.${t.name}`);default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${t.name}`)}}}},{kind:"field",static:!0,key:"styles",value:()=>s.iv`ha-statistics-picker{width:100%}`}]}}),s.oi)},98346:(t,e,i)=>{i.d(e,{I:()=>s});var a=i(38768);const s=(0,a.Ry)({type:(0,a.Z_)(),view_layout:(0,a.Yj)()})}};
//# sourceMappingURL=2951-6UBOuvLn5Ic.js.map