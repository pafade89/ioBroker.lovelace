"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[54496],{2014:function(t,e,i){var a,s,o,r,n,h,l,d,u=i(88962),c=i(93359),v=i(71650),g=i(33368),_=i(82390),p=i(34541),y=i(47838),f=i(69205),b=i(70906),w=i(43204),m=i(68144),k=i(79932),x=function(t){(0,f.Z)(i,t);var e=(0,b.Z)(i);function i(){var t;return(0,v.Z)(this,i),(t=e.call(this)).min=0,t.max=100,t.step=1,t.startAngle=135,t.arcLength=270,t.handleSize=6,t.handleZoom=1.5,t.readonly=!1,t.disabled=!1,t.dragging=!1,t.rtl=!1,t.outside=!1,t._scale=1,t.dragEnd=t.dragEnd.bind((0,_.Z)(t)),t.drag=t.drag.bind((0,_.Z)(t)),t._keyStep=t._keyStep.bind((0,_.Z)(t)),t}return(0,g.Z)(i,[{key:"connectedCallback",value:function(){(0,p.Z)((0,y.Z)(i.prototype),"connectedCallback",this).call(this),document.addEventListener("mouseup",this.dragEnd),document.addEventListener("touchend",this.dragEnd,{passive:!1}),document.addEventListener("mousemove",this.drag),document.addEventListener("touchmove",this.drag,{passive:!1}),document.addEventListener("keydown",this._keyStep)}},{key:"disconnectedCallback",value:function(){(0,p.Z)((0,y.Z)(i.prototype),"disconnectedCallback",this).call(this),document.removeEventListener("mouseup",this.dragEnd),document.removeEventListener("touchend",this.dragEnd),document.removeEventListener("mousemove",this.drag),document.removeEventListener("touchmove",this.drag),document.removeEventListener("keydown",this._keyStep)}},{key:"_start",get:function(){return this.startAngle*Math.PI/180}},{key:"_len",get:function(){return Math.min(this.arcLength*Math.PI/180,2*Math.PI-.01)}},{key:"_end",get:function(){return this._start+this._len}},{key:"_showHandle",get:function(){return!this.readonly&&(null!=this.value||null!=this.high&&null!=this.low)}},{key:"_angleInside",value:function(t){var e=(this.startAngle+this.arcLength/2-t+180+360)%360-180;return e<this.arcLength/2&&e>-this.arcLength/2}},{key:"_angle2xy",value:function(t){return this.rtl?{x:-Math.cos(t),y:Math.sin(t)}:{x:Math.cos(t),y:Math.sin(t)}}},{key:"_xy2angle",value:function(t,e){return this.rtl&&(t=-t),(Math.atan2(e,t)-this._start+8*Math.PI)%(2*Math.PI)}},{key:"_value2angle",value:function(t){var e=((t=Math.min(this.max,Math.max(this.min,t)))-this.min)/(this.max-this.min);return this._start+e*this._len}},{key:"_angle2value",value:function(t){return Math.round((t/this._len*(this.max-this.min)+this.min)/this.step)*this.step}},{key:"_boundaries",get:function(){var t=this._angle2xy(this._start),e=this._angle2xy(this._end),i=1;this._angleInside(270)||(i=Math.max(-t.y,-e.y));var a=1;this._angleInside(90)||(a=Math.max(t.y,e.y));var s=1;this._angleInside(180)||(s=Math.max(-t.x,-e.x));var o=1;return this._angleInside(0)||(o=Math.max(t.x,e.x)),{up:i,down:a,left:s,right:o,height:i+a,width:s+o}}},{key:"_mouse2value",value:function(t){var e=t.type.startsWith("touch")?t.touches[0].clientX:t.clientX,i=t.type.startsWith("touch")?t.touches[0].clientY:t.clientY,a=this.shadowRoot.querySelector("svg").getBoundingClientRect(),s=this._boundaries,o=e-(a.left+s.left*a.width/s.width),r=i-(a.top+s.up*a.height/s.height),n=this._xy2angle(o,r);return this._angle2value(n)}},{key:"dragStart",value:function(t){var e=this;if(this._showHandle&&!this.disabled){var i=t.target,a=void 0;if(!this._rotation||"focus"===this._rotation.type){if(i.classList.contains("shadowpath"))if("touchstart"===t.type&&(a=window.setTimeout((function(){e._rotation&&(e._rotation.cooldown=void 0)}),200)),null==this.low)i=this.shadowRoot.querySelector("#value");else{var s=this._mouse2value(t);i=Math.abs(s-this.low)<Math.abs(s-this.high)?this.shadowRoot.querySelector("#low"):this.shadowRoot.querySelector("#high")}if(i.classList.contains("overflow")&&(i=i.nextElementSibling),i.classList.contains("handle")){i.setAttribute("stroke-width",String(2*this.handleSize*this.handleZoom*this._scale));var o="high"===i.id?this.low:this.min,r="low"===i.id?this.high:this.max;this._rotation={handle:i,min:o,max:r,start:this[i.id],type:t.type,cooldown:a},this.dragging=!0}}}}},{key:"_cleanupRotation",value:function(){var t=this._rotation.handle;t.setAttribute("stroke-width",String(2*this.handleSize*this._scale)),this._rotation=void 0,this.dragging=!1,t.blur()}},{key:"dragEnd",value:function(t){if(this._showHandle&&!this.disabled&&this._rotation){var e=this._rotation.handle;this._cleanupRotation();var i=new CustomEvent("value-changed",{detail:(0,c.Z)({},e.id,this[e.id]),bubbles:!0,composed:!0});this.dispatchEvent(i),this.low&&this.low>=.99*this.max?this._reverseOrder=!0:this._reverseOrder=!1}}},{key:"drag",value:function(t){if(this._showHandle&&!this.disabled&&this._rotation){if(this._rotation.cooldown)return window.clearTimeout(this._rotation.cooldown),void this._cleanupRotation();if("focus"!==this._rotation.type){t.preventDefault();var e=this._mouse2value(t);this._dragpos(e)}}}},{key:"_dragpos",value:function(t){if(!(t<this._rotation.min||t>this._rotation.max)){var e=this._rotation.handle;this[e.id]=t;var i=new CustomEvent("value-changing",{detail:(0,c.Z)({},e.id,t),bubbles:!0,composed:!0});this.dispatchEvent(i)}}},{key:"_keyStep",value:function(t){if(this._showHandle&&!this.disabled&&this._rotation){var e=this._rotation.handle;"ArrowLeft"!==t.key&&"ArrowDown"!==t.key||(t.preventDefault(),this.rtl?this._dragpos(this[e.id]+this.step):this._dragpos(this[e.id]-this.step)),"ArrowRight"!==t.key&&"ArrowUp"!==t.key||(t.preventDefault(),this.rtl?this._dragpos(this[e.id]-this.step):this._dragpos(this[e.id]+this.step)),"Home"===t.key&&(t.preventDefault(),this._dragpos(this.min)),"End"===t.key&&(t.preventDefault(),this._dragpos(this.max))}}},{key:"updated",value:function(t){var e=this;if(this.shadowRoot.querySelector(".slider")){var i=window.getComputedStyle(this.shadowRoot.querySelector(".slider"));if(i&&i.strokeWidth){var a=parseFloat(i.strokeWidth);if(a>this.handleSize*this.handleZoom){var s=this._boundaries,o="\n          ".concat(a/2*Math.abs(s.up),"px\n          ").concat(a/2*Math.abs(s.right),"px\n          ").concat(a/2*Math.abs(s.down),"px\n          ").concat(a/2*Math.abs(s.left),"px");this.shadowRoot.querySelector("svg").style.margin=o}}}if(this.shadowRoot.querySelector("svg")&&void 0===this.shadowRoot.querySelector("svg").style.vectorEffect){t.has("_scale")&&1!=this._scale&&this.shadowRoot.querySelector("svg").querySelectorAll("path").forEach((function(t){if(!t.getAttribute("stroke-width")){var i=parseFloat(getComputedStyle(t).getPropertyValue("stroke-width"));t.style.strokeWidth="".concat(i*e._scale,"px")}}));var r=this.shadowRoot.querySelector("svg").getBoundingClientRect(),n=Math.max(r.width,r.height);this._scale=2/n}}},{key:"_renderArc",value:function(t,e){var i=e-t,a=this._angle2xy(t),s=this._angle2xy(e+.001);return"\n      M ".concat(a.x," ").concat(a.y,"\n      A 1 1,\n        0,\n        ").concat(i>Math.PI?"1":"0"," ").concat(this.rtl?"0":"1",",\n        ").concat(s.x," ").concat(s.y,"\n    ")}},{key:"_renderHandle",value:function(t){var e=this._value2angle(this[t]),i=this._angle2xy(e),s={value:this.valueLabel,low:this.lowLabel,high:this.highLabel}[t]||"";return(0,m.YP)(a||(a=(0,u.Z)([' <g class="',' handle"> <path id="','" class="overflow" d="\n          M '," ","\n          L "," ",'\n          " vector-effect="non-scaling-stroke" stroke="rgba(0,0,0,0)" stroke-width="','"/> <path id="','" class="handle" d="\n          M '," ","\n          L "," ",'\n          " vector-effect="non-scaling-stroke" stroke-width="','" tabindex="0" @focus="','" @blur="','" role="slider" aria-valuemin="','" aria-valuemax="','" aria-valuenow="','" aria-disabled="','" aria-label="','"/> </g> '])),t,t,i.x,i.y,i.x+.001,i.y+.001,4*this.handleSize*this._scale,t,i.x,i.y,i.x+.001,i.y+.001,2*this.handleSize*this._scale,this.dragStart,this.dragEnd,this.min,this.max,this[t],this.disabled,s||"")}},{key:"render",value:function(){var t=this._boundaries;return(0,m.dy)(s||(s=(0,u.Z)([' <svg @mousedown="','" @touchstart="','" xmln="http://www.w3.org/2000/svg" viewBox="'," "," "," ",'" style="margin:','px" ?disabled="','" focusable="false"> <g class="slider"> <path class="path" d="','" vector-effect="non-scaling-stroke"/> <g class="bar"> ',' </g> <path class="shadowpath" d="','" vector-effect="non-scaling-stroke" stroke="rgba(0,0,0,0)" stroke-width="','" stroke-linecap="butt"/> </g> <g class="handles"> '," </g> </svg> "])),this.dragStart,this.dragStart,-t.left,-t.up,t.width,t.height,this.handleSize*this.handleZoom,this.disabled,this._renderArc(this._start,this._end),null!=this.low&&null!=this.high&&this.outside?(0,m.YP)(o||(o=(0,u.Z)([' <path class="bar low" vector-effect="non-scaling-stroke" d="','"/> <path class="bar high" vector-effect="non-scaling-stroke" d="','"/> '])),this._renderArc(this._value2angle(this.min),this._value2angle(this.low)),this._renderArc(this._value2angle(this.high),this._value2angle(this.max))):(0,m.YP)(r||(r=(0,u.Z)([' <path class="bar" vector-effect="non-scaling-stroke" d="','"/> '])),this._renderArc(this._value2angle(null!=this.low?this.low:this.min),this._value2angle(null!=this.high?this.high:this.value))),this._renderArc(this._start,this._end),3*this.handleSize*this._scale,this._showHandle?null!=this.low?this._reverseOrder?(0,m.YP)(n||(n=(0,u.Z)([""," ",""])),this._renderHandle("high"),this._renderHandle("low")):(0,m.YP)(h||(h=(0,u.Z)([""," ",""])),this._renderHandle("low"),this._renderHandle("high")):(0,m.YP)(l||(l=(0,u.Z)(["",""])),this._renderHandle("value")):"")}}],[{key:"styles",get:function(){return(0,m.iv)(d||(d=(0,u.Z)([":host{display:inline-block;width:100%}svg{overflow:visible;display:block}path{transition:stroke 1s ease-out,stroke-width .2s ease-out}.slider{fill:none;stroke-width:var(--round-slider-path-width,3);stroke-linecap:var(--round-slider-linecap,round)}.path{stroke:var(--round-slider-path-color,#d3d3d3)}g.bar{stroke:var(--round-slider-bar-color,#00bfff)}.bar.low{stroke:var(--round-slider-low-bar-color)}.bar.high{stroke:var(--round-slider-high-bar-color)}svg[disabled] .bar{stroke:var(--round-slider-disabled-bar-color,#a9a9a9)}g.handles{stroke:var(--round-slider-handle-color,var(--round-slider-bar-color,#00bfff));stroke-linecap:round;cursor:var(--round-slider-handle-cursor,pointer)}g.low.handle{stroke:var(--round-slider-low-handle-color)}g.high.handle{stroke:var(--round-slider-high-handle-color)}svg[disabled] g.handles{stroke:var(--round-slider-disabled-bar-color,#a9a9a9)}.handle:focus{outline:unset}"])))}}]),i}(m.oi);(0,w.__decorate)([(0,k.Cb)({type:Number})],x.prototype,"value",void 0),(0,w.__decorate)([(0,k.Cb)({type:Number})],x.prototype,"high",void 0),(0,w.__decorate)([(0,k.Cb)({type:Number})],x.prototype,"low",void 0),(0,w.__decorate)([(0,k.Cb)({type:Number})],x.prototype,"min",void 0),(0,w.__decorate)([(0,k.Cb)({type:Number})],x.prototype,"max",void 0),(0,w.__decorate)([(0,k.Cb)({type:Number})],x.prototype,"step",void 0),(0,w.__decorate)([(0,k.Cb)({type:Number})],x.prototype,"startAngle",void 0),(0,w.__decorate)([(0,k.Cb)({type:Number})],x.prototype,"arcLength",void 0),(0,w.__decorate)([(0,k.Cb)({type:Number})],x.prototype,"handleSize",void 0),(0,w.__decorate)([(0,k.Cb)({type:Number})],x.prototype,"handleZoom",void 0),(0,w.__decorate)([(0,k.Cb)({type:Boolean})],x.prototype,"readonly",void 0),(0,w.__decorate)([(0,k.Cb)({type:Boolean})],x.prototype,"disabled",void 0),(0,w.__decorate)([(0,k.Cb)({type:Boolean,reflect:!0})],x.prototype,"dragging",void 0),(0,w.__decorate)([(0,k.Cb)({type:Boolean})],x.prototype,"rtl",void 0),(0,w.__decorate)([(0,k.Cb)()],x.prototype,"valueLabel",void 0),(0,w.__decorate)([(0,k.Cb)()],x.prototype,"lowLabel",void 0),(0,w.__decorate)([(0,k.Cb)()],x.prototype,"highLabel",void 0),(0,w.__decorate)([(0,k.Cb)({type:Boolean})],x.prototype,"outside",void 0),(0,w.__decorate)([(0,k.SB)()],x.prototype,"_scale",void 0),customElements.define("round-slider",x)},18848:function(t,e,i){i.d(e,{r:function(){return g}});var a=i(68990),s=i(40039),o=i(71650),r=i(33368),n=i(95281),h=i(69205),l=i(70906),d=i(15304),u=i(38941),c=i(81563),v=function(t,e,i){for(var a=new Map,s=e;s<=i;s++)a.set(t[s],s);return a},g=(0,u.XM)(function(t){(0,h.Z)(i,t);var e=(0,l.Z)(i);function i(t){var a;if((0,o.Z)(this,i),a=e.call(this,t),t.type!==u.pX.CHILD)throw Error("repeat() can only be used in text expressions");return(0,n.Z)(a)}return(0,r.Z)(i,[{key:"ct",value:function(t,e,i){var a;void 0===i?i=e:void 0!==e&&(a=e);var o,r=[],n=[],h=0,l=(0,s.Z)(t);try{for(l.s();!(o=l.n()).done;){var d=o.value;r[h]=a?a(d,h):h,n[h]=i(d,h),h++}}catch(u){l.e(u)}finally{l.f()}return{values:n,keys:r}}},{key:"render",value:function(t,e,i){return this.ct(t,e,i).values}},{key:"update",value:function(t,e){var i,s=(0,a.Z)(e,3),o=s[0],r=s[1],n=s[2],h=(0,c.i9)(t),l=this.ct(o,r,n),u=l.values,g=l.keys;if(!Array.isArray(h))return this.ut=g,u;for(var _,p,y=null!==(i=this.ut)&&void 0!==i?i:this.ut=[],f=[],b=0,w=h.length-1,m=0,k=u.length-1;b<=w&&m<=k;)if(null===h[b])b++;else if(null===h[w])w--;else if(y[b]===g[m])f[m]=(0,c.fk)(h[b],u[m]),b++,m++;else if(y[w]===g[k])f[k]=(0,c.fk)(h[w],u[k]),w--,k--;else if(y[b]===g[k])f[k]=(0,c.fk)(h[b],u[k]),(0,c._Y)(t,f[k+1],h[b]),b++,k--;else if(y[w]===g[m])f[m]=(0,c.fk)(h[w],u[m]),(0,c._Y)(t,h[b],h[w]),w--,m++;else if(void 0===_&&(_=v(g,m,k),p=v(y,b,w)),_.has(y[b]))if(_.has(y[w])){var x=p.get(g[m]),S=void 0!==x?h[x]:null;if(null===S){var Z=(0,c._Y)(t,h[b]);(0,c.fk)(Z,u[m]),f[m]=Z}else f[m]=(0,c.fk)(S,u[m]),(0,c._Y)(t,h[b],S),h[x]=null;m++}else(0,c.ws)(h[w]),w--;else(0,c.ws)(h[b]),b++;for(;m<=k;){var C=(0,c._Y)(t,f[k+1]);(0,c.fk)(C,u[m]),f[m++]=C}for(;b<=w;){var M=h[b++];null!==M&&(0,c.ws)(M)}return this.ut=g,(0,c.hl)(t,f),d.Jb}}]),i}(u.Xe))}}]);
//# sourceMappingURL=54496-2e0dX0YgBgI.js.map