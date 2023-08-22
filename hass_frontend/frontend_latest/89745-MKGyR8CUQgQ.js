/*! For license information please see 89745-MKGyR8CUQgQ.js.LICENSE.txt */
export const id=89745;export const ids=[89745];export const modules={66695:(e,t,i)=>{i.d(t,{V:()=>n});const a=Symbol("selection controller");class o{constructor(){this.selected=null,this.ordered=null,this.set=new Set}}class n{constructor(e){this.sets={},this.focusedSet=null,this.mouseIsDown=!1,this.updating=!1,e.addEventListener("keydown",(e=>{this.keyDownHandler(e)})),e.addEventListener("mousedown",(()=>{this.mousedownHandler()})),e.addEventListener("mouseup",(()=>{this.mouseupHandler()}))}static getController(e){const t=!("global"in e)||"global"in e&&e.global?document:e.getRootNode();let i=t[a];return void 0===i&&(i=new n(t),t[a]=i),i}keyDownHandler(e){const t=e.target;"checked"in t&&this.has(t)&&("ArrowRight"==e.key||"ArrowDown"==e.key?this.selectNext(t):"ArrowLeft"!=e.key&&"ArrowUp"!=e.key||this.selectPrevious(t))}mousedownHandler(){this.mouseIsDown=!0}mouseupHandler(){this.mouseIsDown=!1}has(e){return this.getSet(e.name).set.has(e)}selectPrevious(e){const t=this.getOrdered(e),i=t.indexOf(e),a=t[i-1]||t[t.length-1];return this.select(a),a}selectNext(e){const t=this.getOrdered(e),i=t.indexOf(e),a=t[i+1]||t[0];return this.select(a),a}select(e){e.click()}focus(e){if(this.mouseIsDown)return;const t=this.getSet(e.name),i=this.focusedSet;this.focusedSet=t,i!=t&&t.selected&&t.selected!=e&&t.selected.focus()}isAnySelected(e){const t=this.getSet(e.name);for(const e of t.set)if(e.checked)return!0;return!1}getOrdered(e){const t=this.getSet(e.name);return t.ordered||(t.ordered=Array.from(t.set),t.ordered.sort(((e,t)=>e.compareDocumentPosition(t)==Node.DOCUMENT_POSITION_PRECEDING?1:0))),t.ordered}getSet(e){return this.sets[e]||(this.sets[e]=new o),this.sets[e]}register(e){const t=e.name||e.getAttribute("name")||"",i=this.getSet(t);i.set.add(e),i.ordered=null}unregister(e){const t=this.getSet(e.name);t.set.delete(e),t.ordered=null,t.selected==e&&(t.selected=null)}update(e){if(this.updating)return;this.updating=!0;const t=this.getSet(e.name);if(e.checked){for(const i of t.set)i!=e&&(i.checked=!1);t.selected=e}if(this.isAnySelected(e))for(const e of t.set){if(void 0===e.formElementTabIndex)break;e.formElementTabIndex=e.checked?0:-1}this.updating=!1}}},73366:(e,t,i)=>{var a=i(17463),o=i(34541),n=i(47838),r=i(61092),s=i(96762),l=i(68144),d=i(79932);(0,a.Z)([(0,d.Mo)("ha-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,o.Z)((0,n.Z)(i.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[s.W,l.iv`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`]}}]}}),r.K)},41886:(e,t,i)=>{i.d(t,{HL:()=>o,S7:()=>a});const a=(e,t)=>e.callWS({type:"config/core/update",...t}),o=e=>e.callWS({type:"config/core/detect"})},55164:(e,t,i)=>{i.d(t,{l:()=>a});const a={BD:"BDT",BE:"EUR",BF:"XOF",BG:"BGN",BA:"BAM",BB:"BBD",WF:"XPF",BL:"EUR",BM:"BMD",BN:"BND",BO:"BOB",BH:"BHD",BI:"BIF",BJ:"XOF",BT:"BTN",JM:"JMD",BV:"NOK",BW:"BWP",WS:"WST",BQ:"USD",BR:"BRL",BS:"BSD",JE:"GBP",BY:"BYN",BZ:"BZD",RU:"RUB",RW:"RWF",RS:"RSD",TL:"USD",RE:"EUR",TM:"TMT",TJ:"TJS",RO:"RON",TK:"NZD",GW:"XOF",GU:"USD",GT:"GTQ",GS:"GBP",GR:"EUR",GQ:"XAF",GP:"EUR",JP:"JPY",GY:"GYD",GG:"GBP",GF:"EUR",GE:"GEL",GD:"XCD",GB:"GBP",GA:"XAF",SV:"USD",GN:"GNF",GM:"GMD",GL:"DKK",GI:"GIP",GH:"GHS",OM:"OMR",TN:"TND",JO:"JOD",HR:"EUR",HT:"HTG",HU:"HUF",HK:"HKD",HN:"HNL",HM:"AUD",VE:"VEF",PR:"USD",PS:"ILS",PW:"USD",PT:"EUR",SJ:"NOK",PY:"PYG",IQ:"IQD",PA:"PAB",PF:"XPF",PG:"PGK",PE:"PEN",PK:"PKR",PH:"PHP",PN:"NZD",PL:"PLN",PM:"EUR",ZM:"ZMK",EH:"MAD",EE:"EUR",EG:"EGP",ZA:"ZAR",EC:"USD",IT:"EUR",VN:"VND",SB:"SBD",ET:"ETB",SO:"SOS",ZW:"ZWL",SA:"SAR",ES:"EUR",ER:"ERN",ME:"EUR",MD:"MDL",MG:"MGA",MF:"EUR",MA:"MAD",MC:"EUR",UZ:"UZS",MM:"MMK",ML:"XOF",MO:"MOP",MN:"MNT",MH:"USD",MK:"MKD",MU:"MUR",MT:"EUR",MW:"MWK",MV:"MVR",MQ:"EUR",MP:"USD",MS:"XCD",MR:"MRO",IM:"GBP",UG:"UGX",TZ:"TZS",MY:"MYR",MX:"MXN",IL:"ILS",FR:"EUR",IO:"USD",SH:"SHP",FI:"EUR",FJ:"FJD",FK:"FKP",FM:"USD",FO:"DKK",NI:"NIO",NL:"EUR",NO:"NOK",NA:"NAD",VU:"VUV",NC:"XPF",NE:"XOF",NF:"AUD",NG:"NGN",NZ:"NZD",NP:"NPR",NR:"AUD",NU:"NZD",CK:"NZD",XK:"EUR",CI:"XOF",CH:"CHF",CO:"COP",CN:"CNY",CM:"XAF",CL:"CLP",CC:"AUD",CA:"CAD",CG:"XAF",CF:"XAF",CD:"CDF",CZ:"CZK",CY:"EUR",CX:"AUD",CR:"CRC",CW:"ANG",CV:"CVE",CU:"CUP",SZ:"SZL",SY:"SYP",SX:"ANG",KG:"KGS",KE:"KES",SS:"SSP",SR:"SRD",KI:"AUD",KH:"KHR",KN:"XCD",KM:"KMF",ST:"STD",SK:"EUR",KR:"KRW",SI:"EUR",KP:"KPW",KW:"KWD",SN:"XOF",SM:"EUR",SL:"SLL",SC:"SCR",KZ:"KZT",KY:"KYD",SG:"SGD",SE:"SEK",SD:"SDG",DO:"DOP",DM:"XCD",DJ:"DJF",DK:"DKK",VG:"USD",DE:"EUR",YE:"YER",DZ:"DZD",US:"USD",UY:"UYU",YT:"EUR",UM:"USD",LB:"LBP",LC:"XCD",LA:"LAK",TV:"AUD",TW:"TWD",TT:"TTD",TR:"TRY",LK:"LKR",LI:"CHF",LV:"EUR",TO:"TOP",LT:"EUR",LU:"EUR",LR:"LRD",LS:"LSL",TH:"THB",TF:"EUR",TG:"XOF",TD:"XAF",TC:"USD",LY:"LYD",VA:"EUR",VC:"XCD",AE:"AED",AD:"EUR",AG:"XCD",AF:"AFN",AI:"XCD",VI:"USD",IS:"ISK",IR:"IRR",AM:"AMD",AL:"ALL",AO:"AOA",AQ:"",AS:"USD",AR:"ARS",AU:"AUD",AT:"EUR",AW:"AWG",IN:"INR",AX:"EUR",AZ:"AZN",IE:"EUR",ID:"IDR",UA:"UAH",QA:"QAR",MZ:"MZN"}},89513:(e,t,i)=>{i.a(e,(async(e,a)=>{try{i.r(t);var o=i(17463),n=i(34541),r=i(47838),s=(i(14271),i(68144)),l=i(79932),d=i(47181),c=(i(9381),i(95250)),h=i(56250),u=(i(83927),i(4159)),g=(i(33220),i(3555),i(8693),i(48456),i(41886)),p=i(55164),m=i(76307),_=i(69906),v=(i(28244),i(55835),e([c,h,u]));[c,h,u]=v.then?(await v)():v;(0,o.Z)([(0,l.Mo)("onboarding-core-config")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"onboardingLocalize",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_working",value:()=>!1},{kind:"field",decorators:[(0,l.SB)()],key:"_name",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_location",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_elevation",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_unitSystem",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_currency",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_timeZone",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_language",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_country",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_error",value:void 0},{kind:"method",key:"render",value:function(){return this._name?this._location?s.dy` ${this._error?s.dy`<ha-alert alert-type="error">${this._error}</ha-alert>`:s.Ld} <p> ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.intro_core_config")} </p> <div class="row"> <ha-country-picker class="flex" .language="${this.hass.locale.language}" .label="${this.hass.localize("ui.panel.config.core.section.core.core_config.country")||"Country"}" name="country" required .disabled="${this._working}" .value="${this._countryValue}" @value-changed="${this._handleValueChanged}"> </ha-country-picker> <ha-language-picker class="flex" .hass="${this.hass}" nativeName .label="${this.hass.localize("ui.panel.config.core.section.core.core_config.language")}" name="language" required .value="${this._languageValue}" .disabled="${this._working}" @value-changed="${this._handleValueChanged}"> </ha-language-picker> </div> <div class="row"> <ha-timezone-picker class="flex" .label="${this.hass.localize("ui.panel.config.core.section.core.core_config.time_zone")}" name="timeZone" .disabled="${this._working}" .value="${this._timeZoneValue}" @value-changed="${this._handleValueChanged}"> </ha-timezone-picker> <ha-textfield class="flex" .label="${this.hass.localize("ui.panel.config.core.section.core.core_config.elevation")}" name="elevation" type="number" .disabled="${this._working}" .value="${this._elevationValue}" .suffix="${this.hass.localize("ui.panel.config.core.section.core.core_config.elevation_meters")}" @change="${this._handleChange}"> </ha-textfield> </div> <div class="row"> <div class="flex"> ${this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system")} </div> <div class="radio-group"> <ha-formfield .label="${s.dy`${this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system_metric")} <div class="secondary"> ${this.hass.localize("ui.panel.config.core.section.core.core_config.metric_example")} </div>`}"> <ha-radio name="unit_system" value="metric" .checked="${"metric"===this._unitSystemValue}" @change="${this._unitSystemChanged}" .disabled="${this._working}"></ha-radio> </ha-formfield> <ha-formfield .label="${s.dy`${this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system_us_customary")} <div class="secondary"> ${this.hass.localize("ui.panel.config.core.section.core.core_config.us_customary_example")} </div>`}"> <ha-radio name="unit_system" value="us_customary" .checked="${"us_customary"===this._unitSystemValue}" @change="${this._unitSystemChanged}" .disabled="${this._working}"></ha-radio> </ha-formfield> </div> </div> <div class="row"> <div class="flex"> ${this.hass.localize("ui.panel.config.core.section.core.core_config.currency")}<br> <a href="https://en.wikipedia.org/wiki/ISO_4217#Active_codes" target="_blank" rel="noopener noreferrer">${this.hass.localize("ui.panel.config.core.section.core.core_config.find_currency_value")}</a> </div> <ha-currency-picker class="flex" .label="${this.hass.localize("ui.panel.config.core.section.core.core_config.currency")}" name="currency" .disabled="${this._working}" .value="${this._currencyValue}" @value-changed="${this._handleValueChanged}"> </ha-currency-picker> </div>  <div class="footer"> <mwc-button @click="${this._save}" .disabled="${this._working}"> ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.finish")} </mwc-button> </div> `:s.dy`<onboarding-location .hass="${this.hass}" .onboardingLocalize="${this.onboardingLocalize}" @value-changed="${this._locationChanged}"></onboarding-location>`:s.dy`<onboarding-name .hass="${this.hass}" .onboardingLocalize="${this.onboardingLocalize}" @value-changed="${this._nameChanged}"></onboarding-name>`}},{kind:"method",key:"willUpdate",value:function(e){e.has("_country")&&this._country&&(this._currency||(this._currency=p.l[this._country]),this._unitSystem||(this._unitSystem=["US","MM","LR"].includes(this._country)?"us_customary":"metric"))}},{kind:"method",key:"firstUpdated",value:function(e){(0,n.Z)((0,r.Z)(i.prototype),"firstUpdated",this).call(this,e),this.addEventListener("keyup",(e=>{this._location&&"Enter"===e.key&&this._save(e)}))}},{kind:"get",key:"_elevationValue",value:function(){return void 0!==this._elevation?this._elevation:0}},{kind:"get",key:"_timeZoneValue",value:function(){return this._timeZone||""}},{kind:"get",key:"_languageValue",value:function(){return this._language||""}},{kind:"get",key:"_countryValue",value:function(){return this._country||""}},{kind:"get",key:"_unitSystemValue",value:function(){return void 0!==this._unitSystem?this._unitSystem:"metric"}},{kind:"get",key:"_currencyValue",value:function(){return void 0!==this._currency?this._currency:""}},{kind:"method",key:"_handleValueChanged",value:function(e){this[`_${e.currentTarget.getAttribute("name")}`]=e.detail.value}},{kind:"method",key:"_handleChange",value:function(e){const t=e.currentTarget;this[`_${t.name}`]=t.value}},{kind:"method",key:"_nameChanged",value:function(e){this._name=e.detail.value}},{kind:"method",key:"_locationChanged",value:async function(e){var t,i,a,o;this._location=e.detail.value.location,this._country=e.detail.value.country,this._elevation=e.detail.value.elevation,this._currency=e.detail.value.currency,this._language=e.detail.value.language||(0,_.sS)(),this._timeZone=e.detail.value.timezone||(null===(t=(i=Intl).DateTimeFormat)||void 0===t||null===(a=(o=t.call(i)).resolvedOptions)||void 0===a?void 0:a.call(o).timeZone),this._unitSystem=e.detail.value.unit_system,await this.updateComplete,setTimeout((()=>this.renderRoot.querySelector("ha-textfield").focus()),100)}},{kind:"method",key:"_unitSystemChanged",value:function(e){this._unitSystem=e.target.value}},{kind:"method",key:"_save",value:async function(e){if(this._location){e.preventDefault(),this._working=!0;try{await(0,g.S7)(this.hass,{location_name:this._name,latitude:this._location[0],longitude:this._location[1],elevation:Number(this._elevationValue),unit_system:this._unitSystemValue,time_zone:this._timeZoneValue||"UTC",currency:this._currencyValue||"EUR",country:this._countryValue,language:this._languageValue});const e=await(0,m.Rj)(this.hass);(0,d.B)(this,"onboarding-step",{type:"core_config",result:e})}catch(e){this._working=!1,this._error=e.message}}}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`.row{display:flex;flex-direction:row;margin:0 -8px;align-items:center;--ha-select-min-width:100px}.secondary{color:var(--secondary-text-color)}p{font-size:14px;line-height:20px}ha-textfield{display:block}.flex{flex:1}.middle-text{margin:16px 0}.row{margin-top:16px}.row>*{margin:0 8px}.radio-group{display:flex;flex-direction:column;flex:1}.footer{margin-top:16px;text-align:right}a{color:var(--primary-color)}`}}]}}),s.oi);a()}catch(e){a(e)}}))},28244:(e,t,i)=>{var a=i(17463),o=i(34541),n=i(47838),r=(i(14271),i(68144)),s=i(79932),l=i(14516),d=(i(9381),i(83927),i(33220),i(3555),i(48456),i(41886)),c=i(26765),h=i(47181);const u=[52.3731339,4.8903147],g=matchMedia("(prefers-color-scheme: dark)"),p="location";(0,a.Z)([(0,s.Mo)("onboarding-location")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"onboardingLocalize",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_working",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_location",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_places",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_search",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_highlightedMarker",value:void 0},{kind:"field",key:"_elevation",value:void 0},{kind:"field",key:"_unitSystem",value:void 0},{kind:"field",key:"_currency",value:void 0},{kind:"field",key:"_timeZone",value:void 0},{kind:"field",key:"_country",value:void 0},{kind:"field",decorators:[(0,s.IO)("ha-locations-editor",!0)],key:"map",value:void 0},{kind:"method",key:"render",value:function(){var e;const t=this.onboardingLocalize("ui.panel.page-onboarding.core-config.location_address",{openstreetmap:r.dy`<a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>`,osm_privacy_policy:r.dy`<a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer">${this.onboardingLocalize("ui.panel.page-onboarding.core-config.osm_privacy_policy")}</a>`});return r.dy` ${this._error?r.dy`<ha-alert alert-type="error">${this._error}</ha-alert>`:r.Ld} <p> ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.intro_location")} </p> <ha-textfield label="${this.onboardingLocalize("ui.panel.page-onboarding.core-config.address_label")}" .disabled="${this._working}" iconTrailing @keyup="${this._addressSearch}"> ${this._working?r.dy` <ha-circular-progress slot="trailingIcon" active size="small"></ha-circular-progress> `:r.dy` <ha-icon-button @click="${this._handleButtonClick}" slot="trailingIcon" .disabled="${this._working}" .label="${this.onboardingLocalize(this._search?"ui.common.search":"ui.panel.page-onboarding.core-config.button_detect")}" .path="${this._search?"M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.2 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M19.5,2A0.5,0.5 0 0,1 20,2.5V11.81C19.42,11.26 18.75,10.81 18,10.5V4.7L15,5.86V10C14.3,10.07 13.62,10.24 13,10.5V5.87L9,4.47V16.13H9V16.5C9,17.14 9.09,17.76 9.26,18.34L8,17.9L2.66,19.97L2.5,20A0.5,0.5 0 0,1 2,19.5V4.38C2,4.15 2.15,3.97 2.36,3.9L8,2L14,4.1L19.34,2.03L19.5,2M4,5.46V17.31L7,16.15V4.45L4,5.46Z":"M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z"}"></ha-icon-button> `} </ha-textfield> ${void 0!==this._places?r.dy` <mwc-list activatable> ${null!==(e=this._places)&&void 0!==e&&e.length?this._places.map((e=>{const t=[e.name||e.address[e.category],e.address.house_number,e.address.road||e.address.waterway,e.address.village||e.address.town,e.address.suburb||e.address.subdivision,e.address.city||e.address.municipality].filter(Boolean).join(", "),i=[e.address.county||e.address.state_district||e.address.region,e.address.state,e.address.country].filter(Boolean).join(", ");return r.dy`<ha-list-item @click="${this._itemClicked}" .placeId="${e.place_id}" .selected="${this._highlightedMarker===e.place_id}" .activated="${this._highlightedMarker===e.place_id}" .twoline="${t&&i}"> ${t||i} <span slot="secondary">${t?i:""}</span> </ha-list-item>`})):r.dy`<ha-list-item noninteractive>${null===this._places?"":"No results"}</ha-list-item>`} </mwc-list> `:r.Ld} <p class="attribution">${t}</p> <ha-locations-editor class="flex" .hass="${this.hass}" .locations="${this._markerLocations(this._location,this._places,this._highlightedMarker)}" zoom="14" .darkMode="${g.matches}" .disabled="${this._working}" @location-updated="${this._locationChanged}" @marker-clicked="${this._markerClicked}"></ha-locations-editor> <div class="footer"> <mwc-button @click="${this._save}" .disabled="${!this._location||this._working}"> ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.finish")} </mwc-button> </div> `}},{kind:"method",key:"firstUpdated",value:function(e){(0,o.Z)((0,n.Z)(i.prototype),"firstUpdated",this).call(this,e),setTimeout((()=>this.renderRoot.querySelector("ha-textfield").focus()),100),this.addEventListener("keyup",(e=>{"Enter"===e.key&&this._save(e)}))}},{kind:"method",key:"updated",value:function(e){if(e.has("_highlightedMarker")&&this._highlightedMarker){var t,i;const e=null===(t=this._places)||void 0===t?void 0:t.find((e=>e.place_id===this._highlightedMarker));4===(null==e||null===(i=e.boundingbox)||void 0===i?void 0:i.length)?this.map.fitBounds([[e.boundingbox[0],e.boundingbox[2]],[e.boundingbox[1],e.boundingbox[3]]],{zoom:16,pad:0}):this.map.fitMarker(String(this._highlightedMarker),{zoom:16})}}},{kind:"field",key:"_markerLocations",value:()=>(0,l.Z)(((e,t,i)=>t?null!=t&&t.length?t.map((t=>({id:String(t.place_id),iconPath:t.place_id===i?void 0:"M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z",latitude:e&&t.place_id===i?e[0]:Number(t.lat),longitude:e&&t.place_id===i?e[1]:Number(t.lon),location_editable:t.place_id===i}))):[]:[{id:p,latitude:(e||u)[0],longitude:(e||u)[1],location_editable:!0}]))},{kind:"method",key:"_locationChanged",value:function(e){this._location=e.detail.location,e.detail.id!==p&&this._reverseGeocode()}},{kind:"method",key:"_markerClicked",value:function(e){if(e.detail.id===p)return;this._highlightedMarker=e.detail.id;const t=this._places.find((t=>t.place_id===e.detail.id));this._location=[Number(t.lat),Number(t.lon)],this._country=t.address.country_code.toUpperCase()}},{kind:"method",key:"_itemClicked",value:function(e){this._highlightedMarker=e.currentTarget.placeId;const t=this._places.find((t=>t.place_id===e.currentTarget.placeId));this._location=[Number(t.lat),Number(t.lon)],this._country=t.address.country_code.toUpperCase()}},{kind:"method",key:"_addressSearch",value:async function(e){e.stopPropagation(),this._search=e.currentTarget.value.length>0,"Enter"===e.key&&this._searchAddress(e.currentTarget.value)}},{kind:"method",key:"_searchAddress",value:async function(e){this._working=!0,this._location=void 0,this._highlightedMarker=void 0,this._error=void 0,this._places=null,this.map.addEventListener("markers-updated",(()=>{setTimeout((()=>{var e;((null===(e=this._places)||void 0===e?void 0:e.length)||0)>2&&this.map.fitMap({pad:.5})}),500)}),{once:!0});try{var t;this._places=await((e,t,i,a)=>fetch(`https://nominatim.openstreetmap.org/search.php?q=${e}&format=jsonv2${a?`&limit=${a}`:""}${i?"&addressdetails=1":""}&accept-language=${t.locale.language}&email=abuse@home-assistant.io`,{headers:{"User-Agent":`HomeAssistant/${t.config.version}`}}).then((e=>{if(e.ok)return e.json();throw new Error(e.statusText)})))(e,this.hass,!0,3),1===(null===(t=this._places)||void 0===t?void 0:t.length)&&(this._highlightedMarker=this._places[0].place_id,this._location=[Number(this._places[0].lat),Number(this._places[0].lon)],this._country=this._places[0].address.country_code.toUpperCase())}catch(e){this._places=void 0,this._error=e.message}finally{this._working=!1}}},{kind:"method",key:"_reverseGeocode",value:async function(){if(!this._location)return;this._places=null;const e=await(t=this._location,i=this.hass,fetch(`https://nominatim.openstreetmap.org/reverse.php?lat=${t[0]}&lon=${t[1]}&accept-language=${i.locale.language}&zoom=${null!=a?a:18}&format=jsonv2&email=abuse@home-assistant.io`,{headers:{"User-Agent":`HomeAssistant/${i.config.version}`}}).then((e=>{if(e.ok)return e.json();throw new Error(e.statusText)})));var t,i,a;this._country=e.address.country_code.toUpperCase(),this._places=[e],this._highlightedMarker=e.place_id}},{kind:"method",key:"_handleButtonClick",value:async function(e){this._search?this._searchAddress(e.target.parentElement.value):this._detectLocation()}},{kind:"method",key:"_detectLocation",value:function(){if(window.isSecureContext&&navigator.geolocation){this._working=!0;const e={enableHighAccuracy:!0,timeout:5e3,maximumAge:0};navigator.geolocation.getCurrentPosition((async e=>{this.map.addEventListener("markers-updated",(()=>{this.map.fitMarker(p)}),{once:!0}),this._location=[e.coords.latitude,e.coords.longitude],e.coords.altitude&&(this._elevation=String(e.coords.altitude));try{await this._reverseGeocode()}finally{this._working=!1}}),(()=>{this._working=!1,this._whoAmI()}),e)}else this._whoAmI()}},{kind:"method",key:"_whoAmI",value:async function(){if(await(0,c.g7)(this,{title:this.onboardingLocalize("ui.panel.page-onboarding.core-config.title_location_detect"),text:this.onboardingLocalize("ui.panel.page-onboarding.core-config.intro_location_detect")})){this._working=!0;try{const e=await(0,d.HL)(this.hass);e.latitude&&e.longitude&&(this.map.addEventListener("markers-updated",(()=>{this.map.fitMarker(p)}),{once:!0}),this._location=[Number(e.latitude),Number(e.longitude)]),e.elevation&&(this._elevation=String(e.elevation)),e.unit_system&&(this._unitSystem=e.unit_system),e.time_zone&&(this._timeZone=e.time_zone),e.currency&&(this._currency=e.currency),e.country&&(this._country=e.country)}catch(e){this._error=`Failed to detect location information: ${e.message}`}finally{this._working=!1}}}},{kind:"method",key:"_save",value:async function(e){this._location&&(e.preventDefault(),(0,h.B)(this,"value-changed",{value:{location:this._location,country:this._country,elevation:this._elevation,unit_system:this._unitSystem,time_zone:this._timeZone,currency:this._currency}}))}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`p{font-size:14px;line-height:20px}ha-textfield{display:block}ha-textfield>ha-icon-button{position:absolute;top:10px;right:10px;--mdc-icon-button-size:36px;--mdc-icon-size:20px;color:var(--secondary-text-color);inset-inline-start:initial;inset-inline-end:10px;direction:var(--direction)}ha-textfield>ha-circular-progress{position:relative;left:12px}ha-locations-editor{display:block;height:300px;margin-top:8px;border-radius:var(--mdc-shape-small,4px);overflow:hidden}mwc-list{width:100%;border:1px solid var(--divider-color);box-sizing:border-box;border-top-width:0;border-bottom-left-radius:var(--mdc-shape-small,4px);border-bottom-right-radius:var(--mdc-shape-small,4px);--mdc-list-vertical-padding:0}ha-list-item{height:72px}.footer{margin-top:16px;text-align:right}.attribution{margin:0;padding:4px 16px 12px 16px;color:var(--mdc-text-field-label-ink-color,rgba(0,0,0,.6));font-family:var(--mdc-typography-caption-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:var(--mdc-typography-caption-font-size,.75rem);font-weight:var(--mdc-typography-caption-font-weight,400);letter-spacing:var(--mdc-typography-caption-letter-spacing,.0333333333em);text-decoration:var(--mdc-typography-caption-text-decoration,inherit);text-transform:var(--mdc-typography-caption-text-transform,inherit)}.attribution a{color:inherit}`}}]}}),r.oi)},55835:(e,t,i)=>{var a=i(17463),o=i(34541),n=i(47838),r=(i(14271),i(68144)),s=i(79932),l=i(47181);i(9381),i(83927),i(33220),i(3555),i(48456);(0,a.Z)([(0,s.Mo)("onboarding-name")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"onboardingLocalize",value:void 0},{kind:"field",key:"_name",value:void 0},{kind:"method",key:"render",value:function(){return r.dy` <p> ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.intro",{name:this.hass.user.name})} </p> <ha-textfield .label="${this.onboardingLocalize("ui.panel.page-onboarding.core-config.location_name")}" .value="${this._nameValue}" @change="${this._nameChanged}"></ha-textfield> <p> ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.intro_core")} </p> <div class="footer"> <mwc-button @click="${this._save}" .disabled="${!this._nameValue}"> ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.finish")} </mwc-button> </div> `}},{kind:"method",key:"firstUpdated",value:function(e){(0,o.Z)((0,n.Z)(i.prototype),"firstUpdated",this).call(this,e),setTimeout((()=>this.renderRoot.querySelector("ha-textfield").focus()),100),this.addEventListener("keyup",(e=>{"Enter"===e.key&&this._save(e)}))}},{kind:"get",key:"_nameValue",value:function(){return void 0!==this._name?this._name:this.onboardingLocalize("ui.panel.page-onboarding.core-config.location_name_default")}},{kind:"method",key:"_nameChanged",value:function(e){this._name=e.target.value}},{kind:"method",key:"_save",value:async function(e){e.preventDefault(),(0,l.B)(this,"value-changed",{value:this._nameValue})}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`ha-textfield{display:block}p{font-size:14px;line-height:20px}.footer{margin-top:16px;text-align:right}a{color:var(--primary-color)}`}}]}}),r.oi)}};
//# sourceMappingURL=89745-MKGyR8CUQgQ.js.map