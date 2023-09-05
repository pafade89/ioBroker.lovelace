/*! For license information please see 49412-8xLEzhNsX1g.js.LICENSE.txt */
export const id=49412;export const ids=[49412];export const modules={49412:(e,t,n)=>{n.d(t,{K:()=>S});var i=n(43204),s=(n(11027),n(65666),n(75642),n(98691)),a=n(74015),o=["input","button","textarea","select"],d=function(e){var t=e.target;if(t){var n=(""+t.tagName).toLowerCase();-1===o.indexOf(n)&&e.preventDefault()}};function r(e,t){for(var n=new Map,i=0;i<e;i++){var s=t(i).trim();if(s){var a=s[0].toLowerCase();n.has(a)||n.set(a,[]),n.get(a).push({text:s.toLowerCase(),index:i})}}return n.forEach((function(e){e.sort((function(e,t){return e.index-t.index}))})),n}function l(e,t){var n,i=e.nextChar,s=e.focusItemAtIndex,o=e.sortedIndexByFirstChar,d=e.focusedItemIndex,r=e.skipFocus,l=e.isItemAtIndexDisabled;return clearTimeout(t.bufferClearTimeout),t.bufferClearTimeout=setTimeout((function(){!function(e){e.typeaheadBuffer=""}(t)}),a.KT.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),t.typeaheadBuffer=t.typeaheadBuffer+i,n=1===t.typeaheadBuffer.length?function(e,t,n,i){var s=i.typeaheadBuffer[0],a=e.get(s);if(!a)return-1;if(s===i.currentFirstChar&&a[i.sortedIndexCursor].index===t){i.sortedIndexCursor=(i.sortedIndexCursor+1)%a.length;var o=a[i.sortedIndexCursor].index;if(!n(o))return o}i.currentFirstChar=s;var d,r=-1;for(d=0;d<a.length;d++)if(!n(a[d].index)){r=d;break}for(;d<a.length;d++)if(a[d].index>t&&!n(a[d].index)){r=d;break}if(-1!==r)return i.sortedIndexCursor=r,a[i.sortedIndexCursor].index;return-1}(o,d,l,t):function(e,t,n){var i=n.typeaheadBuffer[0],s=e.get(i);if(!s)return-1;var a=s[n.sortedIndexCursor];if(0===a.text.lastIndexOf(n.typeaheadBuffer,0)&&!t(a.index))return a.index;var o=(n.sortedIndexCursor+1)%s.length,d=-1;for(;o!==n.sortedIndexCursor;){var r=s[o],l=0===r.text.lastIndexOf(n.typeaheadBuffer,0),u=!t(r.index);if(l&&u){d=o;break}o=(o+1)%s.length}if(-1!==d)return n.sortedIndexCursor=d,s[n.sortedIndexCursor].index;return-1}(o,l,t),-1===n||r||s(n),n}function u(e){return e.typeaheadBuffer.length>0}var c=n(18601),h=n(14114),p=n(82612),m=n(38341),f=n(12335),y=n(72774),I=n(45253),E={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",MENU_INVALID:"mdc-select__menu--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},v={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"},C={LABEL_SCALE:.75,UNSET_INDEX:-1,CLICK_DEBOUNCE_TIMEOUT_MS:330};const g=function(e){function t(n,s){void 0===s&&(s={});var a=e.call(this,(0,i.__assign)((0,i.__assign)({},t.defaultAdapter),n))||this;return a.disabled=!1,a.isMenuOpen=!1,a.useDefaultValidation=!0,a.customValidity=!0,a.lastSelectedIndex=C.UNSET_INDEX,a.clickDebounceTimeout=0,a.recentlyClicked=!1,a.leadingIcon=s.leadingIcon,a.helperText=s.helperText,a}return(0,i.__extends)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return E},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return C},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return v},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedIndex:function(){return-1},setSelectedIndex:function(){},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},setLabelRequired:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectAnchorFocused:function(){return!1},getSelectAnchorAttr:function(){return""},setSelectAnchorAttr:function(){},removeSelectAnchorAttr:function(){},addMenuClass:function(){},removeMenuClass:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},isTypeaheadInProgress:function(){return!1},typeaheadMatchItem:function(){return-1}}},enumerable:!1,configurable:!0}),t.prototype.getSelectedIndex=function(){return this.adapter.getSelectedIndex()},t.prototype.setSelectedIndex=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1),e>=this.adapter.getMenuItemCount()||(e===C.UNSET_INDEX?this.adapter.setSelectedText(""):this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(e).trim()),this.adapter.setSelectedIndex(e),t&&this.adapter.closeMenu(),n||this.lastSelectedIndex===e||this.handleChange(),this.lastSelectedIndex=e)},t.prototype.setValue=function(e,t){void 0===t&&(t=!1);var n=this.adapter.getMenuItemValues().indexOf(e);this.setSelectedIndex(n,!1,t)},t.prototype.getValue=function(){var e=this.adapter.getSelectedIndex(),t=this.adapter.getMenuItemValues();return e!==C.UNSET_INDEX?t[e]:""},t.prototype.getDisabled=function(){return this.disabled},t.prototype.setDisabled=function(e){this.disabled=e,this.disabled?(this.adapter.addClass(E.DISABLED),this.adapter.closeMenu()):this.adapter.removeClass(E.DISABLED),this.leadingIcon&&this.leadingIcon.setDisabled(this.disabled),this.disabled?this.adapter.removeSelectAnchorAttr("tabindex"):this.adapter.setSelectAnchorAttr("tabindex","0"),this.adapter.setSelectAnchorAttr("aria-disabled",this.disabled.toString())},t.prototype.openMenu=function(){this.adapter.addClass(E.ACTIVATED),this.adapter.openMenu(),this.isMenuOpen=!0,this.adapter.setSelectAnchorAttr("aria-expanded","true")},t.prototype.setHelperTextContent=function(e){this.helperText&&this.helperText.setContent(e)},t.prototype.layout=function(){if(this.adapter.hasLabel()){var e=this.getValue().length>0,t=this.adapter.hasClass(E.FOCUSED),n=e||t,i=this.adapter.hasClass(E.REQUIRED);this.notchOutline(n),this.adapter.floatLabel(n),this.adapter.setLabelRequired(i)}},t.prototype.layoutOptions=function(){var e=this.adapter.getMenuItemValues().indexOf(this.getValue());this.setSelectedIndex(e,!1,!0)},t.prototype.handleMenuOpened=function(){if(0!==this.adapter.getMenuItemValues().length){var e=this.getSelectedIndex(),t=e>=0?e:0;this.adapter.focusMenuItemAtIndex(t)}},t.prototype.handleMenuClosing=function(){this.adapter.setSelectAnchorAttr("aria-expanded","false")},t.prototype.handleMenuClosed=function(){this.adapter.removeClass(E.ACTIVATED),this.isMenuOpen=!1,this.adapter.isSelectAnchorFocused()||this.blur()},t.prototype.handleChange=function(){this.layout(),this.adapter.notifyChange(this.getValue()),this.adapter.hasClass(E.REQUIRED)&&this.useDefaultValidation&&this.setValid(this.isValid())},t.prototype.handleMenuItemAction=function(e){this.setSelectedIndex(e,!0)},t.prototype.handleFocus=function(){this.adapter.addClass(E.FOCUSED),this.layout(),this.adapter.activateBottomLine()},t.prototype.handleBlur=function(){this.isMenuOpen||this.blur()},t.prototype.handleClick=function(e){this.disabled||this.recentlyClicked||(this.setClickDebounceTimeout(),this.isMenuOpen?this.adapter.closeMenu():(this.adapter.setRippleCenter(e),this.openMenu()))},t.prototype.handleKeydown=function(e){if(!this.isMenuOpen&&this.adapter.hasClass(E.FOCUSED)){var t=(0,s.ku)(e)===s.Fn.ENTER,n=(0,s.ku)(e)===s.Fn.SPACEBAR,i=(0,s.ku)(e)===s.Fn.ARROW_UP,a=(0,s.ku)(e)===s.Fn.ARROW_DOWN;if(!(e.ctrlKey||e.metaKey)&&(!n&&e.key&&1===e.key.length||n&&this.adapter.isTypeaheadInProgress())){var o=n?" ":e.key,d=this.adapter.typeaheadMatchItem(o,this.getSelectedIndex());return d>=0&&this.setSelectedIndex(d),void e.preventDefault()}(t||n||i||a)&&(this.openMenu(),e.preventDefault())}},t.prototype.notchOutline=function(e){if(this.adapter.hasOutline()){var t=this.adapter.hasClass(E.FOCUSED);if(e){var n=C.LABEL_SCALE,i=this.adapter.getLabelWidth()*n;this.adapter.notchOutline(i)}else t||this.adapter.closeOutline()}},t.prototype.setLeadingIconAriaLabel=function(e){this.leadingIcon&&this.leadingIcon.setAriaLabel(e)},t.prototype.setLeadingIconContent=function(e){this.leadingIcon&&this.leadingIcon.setContent(e)},t.prototype.getUseDefaultValidation=function(){return this.useDefaultValidation},t.prototype.setUseDefaultValidation=function(e){this.useDefaultValidation=e},t.prototype.setValid=function(e){this.useDefaultValidation||(this.customValidity=e),this.adapter.setSelectAnchorAttr("aria-invalid",(!e).toString()),e?(this.adapter.removeClass(E.INVALID),this.adapter.removeMenuClass(E.MENU_INVALID)):(this.adapter.addClass(E.INVALID),this.adapter.addMenuClass(E.MENU_INVALID)),this.syncHelperTextValidity(e)},t.prototype.isValid=function(){return this.useDefaultValidation&&this.adapter.hasClass(E.REQUIRED)&&!this.adapter.hasClass(E.DISABLED)?this.getSelectedIndex()!==C.UNSET_INDEX&&(0!==this.getSelectedIndex()||Boolean(this.getValue())):this.customValidity},t.prototype.setRequired=function(e){e?this.adapter.addClass(E.REQUIRED):this.adapter.removeClass(E.REQUIRED),this.adapter.setSelectAnchorAttr("aria-required",e.toString()),this.adapter.setLabelRequired(e)},t.prototype.getRequired=function(){return"true"===this.adapter.getSelectAnchorAttr("aria-required")},t.prototype.init=function(){var e=this.adapter.getAnchorElement();e&&(this.adapter.setMenuAnchorElement(e),this.adapter.setMenuAnchorCorner(I.Ns.BOTTOM_START)),this.adapter.setMenuWrapFocus(!1),this.setDisabled(this.adapter.hasClass(E.DISABLED)),this.syncHelperTextValidity(!this.adapter.hasClass(E.INVALID)),this.layout(),this.layoutOptions()},t.prototype.blur=function(){this.adapter.removeClass(E.FOCUSED),this.layout(),this.adapter.deactivateBottomLine(),this.adapter.hasClass(E.REQUIRED)&&this.useDefaultValidation&&this.setValid(this.isValid())},t.prototype.syncHelperTextValidity=function(e){if(this.helperText){this.helperText.setValidity(e);var t=this.helperText.isVisible(),n=this.helperText.getId();t&&n?this.adapter.setSelectAnchorAttr(v.ARIA_DESCRIBEDBY,n):this.adapter.removeSelectAnchorAttr(v.ARIA_DESCRIBEDBY)}},t.prototype.setClickDebounceTimeout=function(){var e=this;clearTimeout(this.clickDebounceTimeout),this.clickDebounceTimeout=setTimeout((function(){e.recentlyClicked=!1}),C.CLICK_DEBOUNCE_TIMEOUT_MS),this.recentlyClicked=!0},t}(y.K);var x=n(68144),_=n(79932),b=n(83448),A=n(30153);const O=(e={})=>{const t={};for(const n in e)t[n]=e[n];return Object.assign({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1},t)};class S extends c.Wg{constructor(){super(...arguments),this.mdcFoundationClass=g,this.disabled=!1,this.outlined=!1,this.label="",this.outlineOpen=!1,this.outlineWidth=0,this.value="",this.name="",this.selectedText="",this.icon="",this.menuOpen=!1,this.helper="",this.validateOnInitialRender=!1,this.validationMessage="",this.required=!1,this.naturalMenuWidth=!1,this.isUiValid=!0,this.fixedMenuPosition=!1,this.typeaheadState={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""},this.sortedIndexByFirstChar=new Map,this.menuElement_=null,this.listeners=[],this.onBodyClickBound=()=>{},this._menuUpdateComplete=null,this.valueSetDirectly=!1,this.validityTransform=null,this._validity=O()}get items(){return this.menuElement_||(this.menuElement_=this.menuElement),this.menuElement_?this.menuElement_.items:[]}get selected(){const e=this.menuElement;return e?e.selected:null}get index(){const e=this.menuElement;return e?e.index:-1}get shouldRenderHelperText(){return!!this.helper||!!this.validationMessage}get validity(){return this._checkValidity(this.value),this._validity}render(){const e={"mdc-select--disabled":this.disabled,"mdc-select--no-label":!this.label,"mdc-select--filled":!this.outlined,"mdc-select--outlined":this.outlined,"mdc-select--with-leading-icon":!!this.icon,"mdc-select--required":this.required,"mdc-select--invalid":!this.isUiValid},t=this.label?"label":void 0,n=this.shouldRenderHelperText?"helper-text":void 0;return x.dy` <div class="mdc-select ${(0,b.$)(e)}"> <input class="formElement" name="${this.name}" .value="${this.value}" hidden ?disabled="${this.disabled}" ?required="${this.required}"> <div class="mdc-select__anchor" aria-autocomplete="none" role="combobox" aria-expanded="${this.menuOpen}" aria-invalid="${!this.isUiValid}" aria-haspopup="listbox" aria-labelledby="${(0,A.o)(t)}" aria-required="${this.required}" aria-describedby="${(0,A.o)(n)}" @click="${this.onClick}" @focus="${this.onFocus}" @blur="${this.onBlur}" @keydown="${this.onKeydown}"> ${this.renderRipple()} ${this.outlined?this.renderOutline():this.renderLabel()} ${this.renderLeadingIcon()} <span class="mdc-select__selected-text-container"> <span class="mdc-select__selected-text">${this.selectedText}</span> </span> <span class="mdc-select__dropdown-icon"> <svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"> <polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"> </polygon> <polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"> </polygon> </svg> </span> ${this.renderLineRipple()} </div> ${this.renderMenu()} </div> ${this.renderHelperText()}`}renderMenu(){const e=this.getMenuClasses();return x.dy` <mwc-menu innerRole="listbox" wrapFocus class="${(0,b.$)(e)}" activatable .fullwidth="${!this.fixedMenuPosition&&!this.naturalMenuWidth}" .open="${this.menuOpen}" .anchor="${this.anchorElement}" .fixed="${this.fixedMenuPosition}" @selected="${this.onSelected}" @opened="${this.onOpened}" @closed="${this.onClosed}" @items-updated="${this.onItemsUpdated}" @keydown="${this.handleTypeahead}"> ${this.renderMenuContent()} </mwc-menu>`}getMenuClasses(){return{"mdc-select__menu":!0,"mdc-menu":!0,"mdc-menu-surface":!0,"mdc-select__menu--invalid":!this.isUiValid}}renderMenuContent(){return x.dy`<slot></slot>`}renderRipple(){return this.outlined?x.Ld:x.dy` <span class="mdc-select__ripple"></span> `}renderOutline(){return this.outlined?x.dy` <mwc-notched-outline .width="${this.outlineWidth}" .open="${this.outlineOpen}" class="mdc-notched-outline"> ${this.renderLabel()} </mwc-notched-outline>`:x.Ld}renderLabel(){return this.label?x.dy` <span .floatingLabelFoundation="${(0,m.o)(this.label)}" id="label">${this.label}</span> `:x.Ld}renderLeadingIcon(){return this.icon?x.dy`<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>`:x.Ld}renderLineRipple(){return this.outlined?x.Ld:x.dy` <span .lineRippleFoundation="${(0,f._)()}"></span> `}renderHelperText(){if(!this.shouldRenderHelperText)return x.Ld;const e=this.validationMessage&&!this.isUiValid,t={"mdc-select-helper-text--validation-msg":e};return x.dy` <p class="mdc-select-helper-text ${(0,b.$)(t)}" id="helper-text">${e?this.validationMessage:this.helper}</p>`}createAdapter(){return Object.assign(Object.assign({},(0,c.qN)(this.mdcRoot)),{activateBottomLine:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.activate()},deactivateBottomLine:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.deactivate()},hasLabel:()=>!!this.label,floatLabel:e=>{this.labelElement&&this.labelElement.floatingLabelFoundation.float(e)},getLabelWidth:()=>this.labelElement?this.labelElement.floatingLabelFoundation.getWidth():0,setLabelRequired:e=>{this.labelElement&&this.labelElement.floatingLabelFoundation.setRequired(e)},hasOutline:()=>this.outlined,notchOutline:e=>{this.outlineElement&&!this.outlineOpen&&(this.outlineWidth=e,this.outlineOpen=!0)},closeOutline:()=>{this.outlineElement&&(this.outlineOpen=!1)},setRippleCenter:e=>{if(this.lineRippleElement){this.lineRippleElement.lineRippleFoundation.setRippleCenter(e)}},notifyChange:async e=>{if(!this.valueSetDirectly&&e===this.value)return;this.valueSetDirectly=!1,this.value=e,await this.updateComplete;const t=new Event("change",{bubbles:!0});this.dispatchEvent(t)},setSelectedText:e=>this.selectedText=e,isSelectAnchorFocused:()=>{const e=this.anchorElement;if(!e)return!1;return e.getRootNode().activeElement===e},getSelectAnchorAttr:e=>{const t=this.anchorElement;return t?t.getAttribute(e):null},setSelectAnchorAttr:(e,t)=>{const n=this.anchorElement;n&&n.setAttribute(e,t)},removeSelectAnchorAttr:e=>{const t=this.anchorElement;t&&t.removeAttribute(e)},openMenu:()=>{this.menuOpen=!0},closeMenu:()=>{this.menuOpen=!1},addMenuClass:()=>{},removeMenuClass:()=>{},getAnchorElement:()=>this.anchorElement,setMenuAnchorElement:()=>{},setMenuAnchorCorner:()=>{const e=this.menuElement;e&&(e.corner="BOTTOM_START")},setMenuWrapFocus:e=>{const t=this.menuElement;t&&(t.wrapFocus=e)},focusMenuItemAtIndex:e=>{const t=this.menuElement;if(!t)return;const n=t.items[e];n&&n.focus()},getMenuItemCount:()=>{const e=this.menuElement;return e?e.items.length:0},getMenuItemValues:()=>{const e=this.menuElement;if(!e)return[];return e.items.map((e=>e.value))},getMenuItemTextAtIndex:e=>{const t=this.menuElement;if(!t)return"";const n=t.items[e];return n?n.text:""},getSelectedIndex:()=>this.index,setSelectedIndex:()=>{},isTypeaheadInProgress:()=>u(this.typeaheadState),typeaheadMatchItem:(e,t)=>{if(!this.menuElement)return-1;const n={focusItemAtIndex:e=>{this.menuElement.focusItemAtIndex(e)},focusedItemIndex:t||this.menuElement.getFocusedItemIndex(),nextChar:e,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:!1,isItemAtIndexDisabled:e=>this.items[e].disabled},i=l(n,this.typeaheadState);return-1!==i&&this.select(i),i}})}checkValidity(){const e=this._checkValidity(this.value);if(!e){const e=new Event("invalid",{bubbles:!1,cancelable:!0});this.dispatchEvent(e)}return e}reportValidity(){const e=this.checkValidity();return this.isUiValid=e,e}_checkValidity(e){const t=this.formElement.validity;let n=O(t);if(this.validityTransform){const t=this.validityTransform(e,n);n=Object.assign(Object.assign({},n),t)}return this._validity=n,this._validity.valid}setCustomValidity(e){this.validationMessage=e,this.formElement.setCustomValidity(e)}async getUpdateComplete(){await this._menuUpdateComplete;return await super.getUpdateComplete()}async firstUpdated(){const e=this.menuElement;if(e&&(this._menuUpdateComplete=e.updateComplete,await this._menuUpdateComplete),super.firstUpdated(),this.mdcFoundation.isValid=()=>!0,this.mdcFoundation.setValid=()=>{},this.mdcFoundation.setDisabled(this.disabled),this.validateOnInitialRender&&this.reportValidity(),!this.selected){!this.items.length&&this.slotElement&&this.slotElement.assignedNodes({flatten:!0}).length&&(await new Promise((e=>requestAnimationFrame(e))),await this.layout());const e=this.items.length&&""===this.items[0].value;if(!this.value&&e)return void this.select(0);this.selectByValue(this.value)}this.sortedIndexByFirstChar=r(this.items.length,(e=>this.items[e].text))}onItemsUpdated(){this.sortedIndexByFirstChar=r(this.items.length,(e=>this.items[e].text))}select(e){const t=this.menuElement;t&&t.select(e)}selectByValue(e){let t=-1;for(let n=0;n<this.items.length;n++){if(this.items[n].value===e){t=n;break}}this.valueSetDirectly=!0,this.select(t),this.mdcFoundation.handleChange()}disconnectedCallback(){super.disconnectedCallback();for(const e of this.listeners)e.target.removeEventListener(e.name,e.cb)}focus(){const e=new CustomEvent("focus"),t=this.anchorElement;t&&(t.dispatchEvent(e),t.focus())}blur(){const e=new CustomEvent("blur"),t=this.anchorElement;t&&(t.dispatchEvent(e),t.blur())}onFocus(){this.mdcFoundation&&this.mdcFoundation.handleFocus()}onBlur(){this.mdcFoundation&&this.mdcFoundation.handleBlur();const e=this.menuElement;e&&!e.open&&this.reportValidity()}onClick(e){if(this.mdcFoundation){this.focus();const t=e.target.getBoundingClientRect();let n=0;n="touches"in e?e.touches[0].clientX:e.clientX;const i=n-t.left;this.mdcFoundation.handleClick(i)}}onKeydown(e){const t=(0,s.ku)(e)===s.Fn.ARROW_UP,n=(0,s.ku)(e)===s.Fn.ARROW_DOWN;if(n||t){const i=t&&this.index>0,s=n&&this.index<this.items.length-1;return i?this.select(this.index-1):s&&this.select(this.index+1),e.preventDefault(),void this.mdcFoundation.openMenu()}this.mdcFoundation.handleKeydown(e)}handleTypeahead(e){if(!this.menuElement)return;const t=this.menuElement.getFocusedItemIndex(),n=(0,p.OE)(e.target)?e.target:null;!function(e,t){var n=e.event,i=e.isTargetListItem,a=e.focusedItemIndex,o=e.focusItemAtIndex,r=e.sortedIndexByFirstChar,c=e.isItemAtIndexDisabled,h="ArrowLeft"===(0,s.ku)(n),p="ArrowUp"===(0,s.ku)(n),m="ArrowRight"===(0,s.ku)(n),f="ArrowDown"===(0,s.ku)(n),y="Home"===(0,s.ku)(n),I="End"===(0,s.ku)(n),E="Enter"===(0,s.ku)(n),v="Spacebar"===(0,s.ku)(n);n.altKey||n.ctrlKey||n.metaKey||h||p||m||f||y||I||E||(v||1!==n.key.length?v&&(i&&d(n),i&&u(t)&&l({focusItemAtIndex:o,focusedItemIndex:a,nextChar:" ",sortedIndexByFirstChar:r,skipFocus:!1,isItemAtIndexDisabled:c},t)):(d(n),l({focusItemAtIndex:o,focusedItemIndex:a,nextChar:n.key.toLowerCase(),sortedIndexByFirstChar:r,skipFocus:!1,isItemAtIndexDisabled:c},t)))}({event:e,focusItemAtIndex:e=>{this.menuElement.focusItemAtIndex(e)},focusedItemIndex:t,isTargetListItem:!!n&&n.hasAttribute("mwc-list-item"),sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:e=>this.items[e].disabled},this.typeaheadState)}async onSelected(e){this.mdcFoundation||await this.updateComplete,this.mdcFoundation.handleMenuItemAction(e.detail.index);const t=this.items[e.detail.index];t&&(this.value=t.value)}onOpened(){this.mdcFoundation&&(this.menuOpen=!0,this.mdcFoundation.handleMenuOpened())}onClosed(){this.mdcFoundation&&(this.menuOpen=!1,this.mdcFoundation.handleMenuClosed())}setFormData(e){this.name&&null!==this.selected&&e.append(this.name,this.value)}async layout(e=!0){this.mdcFoundation&&this.mdcFoundation.layout(),await this.updateComplete;const t=this.menuElement;t&&t.layout(e);const n=this.labelElement;if(!n)return void(this.outlineOpen=!1);const i=!!this.label&&!!this.value;if(n.floatingLabelFoundation.float(i),!this.outlined)return;this.outlineOpen=i,await this.updateComplete;const s=n.floatingLabelFoundation.getWidth();this.outlineOpen&&(this.outlineWidth=s)}async layoutOptions(){this.mdcFoundation&&this.mdcFoundation.layoutOptions()}}(0,i.__decorate)([(0,_.IO)(".mdc-select")],S.prototype,"mdcRoot",void 0),(0,i.__decorate)([(0,_.IO)(".formElement")],S.prototype,"formElement",void 0),(0,i.__decorate)([(0,_.IO)("slot")],S.prototype,"slotElement",void 0),(0,i.__decorate)([(0,_.IO)("select")],S.prototype,"nativeSelectElement",void 0),(0,i.__decorate)([(0,_.IO)("input")],S.prototype,"nativeInputElement",void 0),(0,i.__decorate)([(0,_.IO)(".mdc-line-ripple")],S.prototype,"lineRippleElement",void 0),(0,i.__decorate)([(0,_.IO)(".mdc-floating-label")],S.prototype,"labelElement",void 0),(0,i.__decorate)([(0,_.IO)("mwc-notched-outline")],S.prototype,"outlineElement",void 0),(0,i.__decorate)([(0,_.IO)(".mdc-menu")],S.prototype,"menuElement",void 0),(0,i.__decorate)([(0,_.IO)(".mdc-select__anchor")],S.prototype,"anchorElement",void 0),(0,i.__decorate)([(0,_.Cb)({type:Boolean,attribute:"disabled",reflect:!0}),(0,h.P)((function(e){this.mdcFoundation&&this.mdcFoundation.setDisabled(e)}))],S.prototype,"disabled",void 0),(0,i.__decorate)([(0,_.Cb)({type:Boolean}),(0,h.P)((function(e,t){void 0!==t&&this.outlined!==t&&this.layout(!1)}))],S.prototype,"outlined",void 0),(0,i.__decorate)([(0,_.Cb)({type:String}),(0,h.P)((function(e,t){void 0!==t&&this.label!==t&&this.layout(!1)}))],S.prototype,"label",void 0),(0,i.__decorate)([(0,_.SB)()],S.prototype,"outlineOpen",void 0),(0,i.__decorate)([(0,_.SB)()],S.prototype,"outlineWidth",void 0),(0,i.__decorate)([(0,_.Cb)({type:String}),(0,h.P)((function(e){if(this.mdcFoundation){const t=null===this.selected&&!!e,n=this.selected&&this.selected.value!==e;(t||n)&&this.selectByValue(e),this.reportValidity()}}))],S.prototype,"value",void 0),(0,i.__decorate)([(0,_.Cb)()],S.prototype,"name",void 0),(0,i.__decorate)([(0,_.SB)()],S.prototype,"selectedText",void 0),(0,i.__decorate)([(0,_.Cb)({type:String})],S.prototype,"icon",void 0),(0,i.__decorate)([(0,_.SB)()],S.prototype,"menuOpen",void 0),(0,i.__decorate)([(0,_.Cb)({type:String})],S.prototype,"helper",void 0),(0,i.__decorate)([(0,_.Cb)({type:Boolean})],S.prototype,"validateOnInitialRender",void 0),(0,i.__decorate)([(0,_.Cb)({type:String})],S.prototype,"validationMessage",void 0),(0,i.__decorate)([(0,_.Cb)({type:Boolean})],S.prototype,"required",void 0),(0,i.__decorate)([(0,_.Cb)({type:Boolean})],S.prototype,"naturalMenuWidth",void 0),(0,i.__decorate)([(0,_.SB)()],S.prototype,"isUiValid",void 0),(0,i.__decorate)([(0,_.Cb)({type:Boolean})],S.prototype,"fixedMenuPosition",void 0),(0,i.__decorate)([(0,_.hO)({capture:!0})],S.prototype,"handleTypeahead",null)}};
//# sourceMappingURL=49412-8xLEzhNsX1g.js.map