"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[39715],{39715:function(e,t,i){i.r(t),i.d(t,{HaFormInteger:function(){return k}});var n,a,r,s,l,d=i(88962),o=i(33368),h=i(71650),u=i(82390),c=i(69205),v=i(70906),p=i(91808),m=i(68144),f=i(79932),b=i(47181),k=(i(92197),(0,p.Z)([(0,f.Mo)("ha-form-integer")],(function(e,t){var i=function(t){(0,c.Z)(n,t);var i=(0,v.Z)(n);function n(){var t;(0,h.Z)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return t=i.call.apply(i,[this].concat(r)),e((0,u.Z)(t)),t}return(0,o.Z)(n)}(t);return{F:i,d:[{kind:"field",decorators:[(0,f.Cb)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,f.Cb)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,f.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,f.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,f.IO)("ha-textfield ha-slider")],key:"_input",value:void 0},{kind:"field",key:"_lastValue",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){var e;return void 0!==this.schema.valueMin&&void 0!==this.schema.valueMax&&this.schema.valueMax-this.schema.valueMin<256?(0,m.dy)(n||(n=(0,d.Z)([" <div> ",' <div class="flex"> ',' <ha-slider pin ignore-bar-touch .value="','" .min="','" .max="','" .disabled="','" @change="','"></ha-slider> </div> '," </div> "])),this.label,this.schema.required?"":(0,m.dy)(a||(a=(0,d.Z)([' <ha-checkbox @change="','" .checked="','" .disabled="','"></ha-checkbox> '])),this._handleCheckboxChange,void 0!==this.data,this.disabled),this._value,this.schema.valueMin,this.schema.valueMax,this.disabled||void 0===this.data&&!this.schema.required,this._valueChanged,this.helper?(0,m.dy)(r||(r=(0,d.Z)(["<ha-input-helper-text>","</ha-input-helper-text>"])),this.helper):""):(0,m.dy)(s||(s=(0,d.Z)([' <ha-textfield type="number" inputMode="numeric" .label="','" .helper="','" helperPersistent .value="','" .disabled="','" .required="','" .autoValidate="','" .suffix="','" .validationMessage="','" @input="','"></ha-textfield> '])),this.label,this.helper,void 0!==this.data?this.data:"",this.disabled,this.schema.required,this.schema.required,null===(e=this.schema.description)||void 0===e?void 0:e.suffix,this.schema.required?"Required":void 0,this._valueChanged)}},{kind:"method",key:"updated",value:function(e){e.has("schema")&&this.toggleAttribute("own-margin",!("valueMin"in this.schema&&"valueMax"in this.schema||!this.schema.required))}},{kind:"get",key:"_value",value:function(){var e,t;return void 0!==this.data?this.data:this.schema.required?void 0!==(null===(e=this.schema.description)||void 0===e?void 0:e.suggested_value)&&null!==(null===(t=this.schema.description)||void 0===t?void 0:t.suggested_value)||this.schema.default||this.schema.valueMin||0:this.schema.valueMin||0}},{kind:"method",key:"_handleCheckboxChange",value:function(e){var t;if(e.target.checked)for(var i=0,n=[this._lastValue,null===(a=this.schema.description)||void 0===a?void 0:a.suggested_value,this.schema.default,0];i<n.length;i++){var a,r=n[i];if(void 0!==r){t=r;break}}else this._lastValue=this.data;(0,b.B)(this,"value-changed",{value:t})}},{kind:"method",key:"_valueChanged",value:function(e){var t,i=e.target,n=i.value;if(""!==n&&(t=parseInt(String(n))),this.data!==t)(0,b.B)(this,"value-changed",{value:t});else{var a=void 0===t?"":String(t);i.value!==a&&(i.value=a)}}},{kind:"get",static:!0,key:"styles",value:function(){return(0,m.iv)(l||(l=(0,d.Z)([":host([own-margin]){margin-bottom:5px}.flex{display:flex}ha-slider{flex:1}ha-textfield{display:block}"])))}}]}}),m.oi))},92197:function(e,t,i){var n,a=i(71650),r=i(33368),s=i(34541),l=i(47838),d=i(69205),o=i(70906),h=(i(70588),customElements.get("paper-slider")),u=function(e){(0,d.Z)(i,e);var t=(0,o.Z)(i);function i(){return(0,a.Z)(this,i),t.apply(this,arguments)}return(0,r.Z)(i,[{key:"_setImmediateValue",value:function(e){(0,s.Z)((0,l.Z)(i.prototype),"_setImmediateValue",this).call(this,this.step>=1?Math.round(e):Math.round(100*e)/100)}},{key:"_calcStep",value:function(e){if(!this.step)return parseFloat(e);var t=Math.round((e-this.min)/this.step),i=this.step.toString(),n=i.indexOf(".");if(-1!==n){var a=Math.pow(10,i.length-n-1);return Math.round((t*this.step+this.min)*a)/a}return t*this.step+this.min}}],[{key:"template",get:function(){n||(n=h.template.cloneNode(!0)).content.querySelector("style").appendChild(document.createTextNode('\n          :host([dir="rtl"]) #sliderContainer.pin.expand > .slider-knob > .slider-knob-inner::after {\n            -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            }\n\n            .pin > .slider-knob > .slider-knob-inner {\n              font-size:  var(--ha-slider-pin-font-size, 15px);\n              line-height: normal;\n              cursor: pointer;\n            }\n\n            .disabled.ring > .slider-knob > .slider-knob-inner {\n              background-color: var(--paper-slider-disabled-knob-color, var(--disabled-text-color));\n              border: 2px solid var(--paper-slider-disabled-knob-color, var(--disabled-text-color));\n            }\n\n            .pin > .slider-knob > .slider-knob-inner::before {\n              top: unset;\n              margin-left: unset;\n\n              bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n              left: 50%;\n              width: 2.6em;\n              height: 2.6em;\n\n              -webkit-transform-origin: left bottom;\n              transform-origin: left bottom;\n              -webkit-transform: rotate(-45deg) scale(0) translate(0);\n              transform: rotate(-45deg) scale(0) translate(0);\n            }\n\n            .pin.expand > .slider-knob > .slider-knob-inner::before {\n              -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);\n              transform: rotate(-45deg) scale(1) translate(7px, -7px);\n            }\n\n            .pin > .slider-knob > .slider-knob-inner::after {\n              top: unset;\n              font-size: unset;\n\n              bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n              left: 50%;\n              margin-left: -1.3em;\n              width: 2.6em;\n              height: 2.5em;\n\n              -webkit-transform-origin: center bottom;\n              transform-origin: center bottom;\n              -webkit-transform: scale(0) translate(0);\n              transform: scale(0) translate(0);\n            }\n\n            .pin.expand > .slider-knob > .slider-knob-inner::after {\n              -webkit-transform: scale(1) translate(0, -10px);\n              transform: scale(1) translate(0, -10px);\n            }\n\n            .slider-input {\n              width: 54px;\n            }\n        '));return n}}]),i}(h);customElements.define("ha-slider",u)}}]);
//# sourceMappingURL=39715-8w-9W-AehZs.js.map