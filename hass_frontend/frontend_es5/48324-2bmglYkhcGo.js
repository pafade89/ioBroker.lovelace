"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[48324,4631],{12198:function(e,t,n){n.d(t,{D_:function(){return w},NC:function(){return h},Nh:function(){return v},U8:function(){return D},WB:function(){return m},mn:function(){return d},p6:function(){return s},pU:function(){return a},yQ:function(){return p}});var r=n(93359),i=n(14516),o=n(66477),a=(n(10520),function(e,t,n){return u(t,n.time_zone).format(e)}),u=(0,i.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric",timeZone:"server"===e.time_zone?t:void 0})})),s=function(e,t,n){return c(t,n.time_zone).format(e)},c=(0,i.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",timeZone:"server"===e.time_zone?t:void 0})})),m=function(e,t,n){var i,a,u,s,c,m=l(t,n.time_zone);if(t.date_format===o.t6.language||t.date_format===o.t6.system)return m.format(e);var d=m.formatToParts(e),f=null===(i=d.find((function(e){return"literal"===e.type})))||void 0===i?void 0:i.value,h=null===(a=d.find((function(e){return"day"===e.type})))||void 0===a?void 0:a.value,g=null===(u=d.find((function(e){return"month"===e.type})))||void 0===u?void 0:u.value,v=null===(s=d.find((function(e){return"year"===e.type})))||void 0===s?void 0:s.value,y=d.at(d.length-1),p="literal"===(null==y?void 0:y.type)?null==y?void 0:y.value:"";return"bg"===t.language&&t.date_format===o.t6.YMD&&(p=""),(c={},(0,r.Z)(c,o.t6.DMY,"".concat(h).concat(f).concat(g).concat(f).concat(v).concat(p)),(0,r.Z)(c,o.t6.MDY,"".concat(g).concat(f).concat(h).concat(f).concat(v).concat(p)),(0,r.Z)(c,o.t6.YMD,"".concat(v).concat(f).concat(g).concat(f).concat(h).concat(p)),c)[t.date_format]},l=(0,i.Z)((function(e,t){var n=e.date_format===o.t6.system?void 0:e.language;return e.date_format===o.t6.language||(e.date_format,o.t6.system),new Intl.DateTimeFormat(n,{year:"numeric",month:"numeric",day:"numeric",timeZone:"server"===e.time_zone?t:void 0})})),d=function(e,t,n){return f(t,n.time_zone).format(e)},f=(0,i.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short",timeZone:"server"===e.time_zone?t:void 0})})),h=function(e,t,n){return g(t,n.time_zone).format(e)},g=(0,i.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric",timeZone:"server"===e.time_zone?t:void 0})})),v=function(e,t,n){return y(t,n.time_zone).format(e)},y=(0,i.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{month:"long",timeZone:"server"===e.time_zone?t:void 0})})),p=function(e,t,n){return Z(t,n.time_zone).format(e)},Z=(0,i.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{year:"numeric",timeZone:"server"===e.time_zone?t:void 0})})),w=function(e,t,n){return _(t,n.time_zone).format(e)},_=(0,i.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{weekday:"long",timeZone:"server"===e.time_zone?t:void 0})})),D=function(e,t,n){return b(t,n.time_zone).format(e)},b=(0,i.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{weekday:"short",timeZone:"server"===e.time_zone?t:void 0})}))},44583:function(e,t,n){n.d(t,{DG:function(){return c},E8:function(){return f},NR:function(){return g},o0:function(){return u},yD:function(){return l}});var r=n(14516),i=(n(10520),n(12198)),o=n(49684),a=n(65810),u=function(e,t,n){return s(t,n.time_zone).format(e)},s=(0,r.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,a.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,a.y)(e)?"h12":"h23",timeZone:"server"===e.time_zone?t:void 0})})),c=function(e,t,n){return m(t,n.time_zone).format(e)},m=(0,r.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"short",day:"numeric",hour:(0,a.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,a.y)(e)?"h12":"h23",timeZone:"server"===e.time_zone?t:void 0})})),l=function(e,t,n){return d(t,n.time_zone).format(e)},d=(0,r.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{month:"short",day:"numeric",hour:(0,a.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,a.y)(e)?"h12":"h23",timeZone:"server"===e.time_zone?t:void 0})})),f=function(e,t,n){return h(t,n.time_zone).format(e)},h=(0,r.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,a.y)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,a.y)(e)?"h12":"h23",timeZone:"server"===e.time_zone?t:void 0})})),g=function(e,t,n){return"".concat((0,i.WB)(e,t,n),", ").concat((0,o.mr)(e,t,n))}},49684:function(e,t,n){n.d(t,{Vu:function(){return u},Zs:function(){return l},mr:function(){return o},xO:function(){return c}});var r=n(14516),i=(n(10520),n(65810)),o=function(e,t,n){return a(t,n.time_zone).format(e)},a=(0,r.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hourCycle:(0,i.y)(e)?"h12":"h23",timeZone:"server"===e.time_zone?t:void 0})})),u=function(e,t,n){return s(t,n.time_zone).format(e)},s=(0,r.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{hour:(0,i.y)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,i.y)(e)?"h12":"h23",timeZone:"server"===e.time_zone?t:void 0})})),c=function(e,t,n){return m(t,n.time_zone).format(e)},m=(0,r.Z)((function(e,t){return new Intl.DateTimeFormat(e.language,{weekday:"long",hour:(0,i.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,i.y)(e)?"h12":"h23",timeZone:"server"===e.time_zone?t:void 0})})),l=function(e,t,n){return d(t,n.time_zone).format(e)},d=(0,r.Z)((function(e,t){return new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:"server"===e.time_zone?t:void 0})}))},65810:function(e,t,n){n.d(t,{y:function(){return o}});var r=n(14516),i=n(66477),o=(0,r.Z)((function(e){if(e.time_format===i.zt.language||e.time_format===i.zt.system){var t=e.time_format===i.zt.language?e.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}return e.time_format===i.zt.am_pm}))},48324:function(e,t,n){n.r(t),n.d(t,{Chart:function(){return r.kL}});var r=n(96504),i=n(71650),o=n(33368),a=n(34541),u=n(47838),s=n(69205),c=n(70906),m=n(15838),l=n(74790),d=function(e){(0,s.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"draw",value:function(e){(0,a.Z)((0,u.Z)(n.prototype),"draw",this).call(this,e);var t=this.options,r=this.getProps(["x","y","base","width","text"]),i=r.x,o=r.y,s=r.base,c=r.width,d=r.text;if(d){e.beginPath();var f=e.measureText(d);if(!(0===f.width||f.width+(t.textPad||4)+2>c)){var h=t.textColor||("transparent"===(null==t?void 0:t.backgroundColor)?"transparent":(0,l.T2)((0,m.wK)(t.backgroundColor))>.5?"#000":"#fff");e.fillStyle=h,e.lineWidth=0,e.strokeStyle=h,e.textBaseline="middle",e.fillText(d,i-c/2+(t.textPad||4),o+(s-o)/2)}}}},{key:"tooltipPosition",value:function(e){var t=this.getProps(["x","y","base"],e),n=t.x,r=t.y;return{x:n,y:r+(t.base-r)/2}}}]),n}(r.ZL);function f(e,t,n,r){var i=t.borderSkipped,o={};if(i)if(!0!==i){var a=function(e){var t,n,r,i,o;return e.horizontal?(t=e.base>e.x,n="left",r="right"):(t=e.base<e.y,n="bottom",r="top"),t?(i="end",o="start"):(i="start",o="end"),{start:n,end:r,reverse:t,top:i,bottom:o}}(e),u=a.start,s=a.end,c=a.reverse,m=a.top,l=a.bottom;"middle"===i&&n&&(e.enableBorderRadius=!0,(n._top||0)===r?i=m:(n._bottom||0)===r?i=l:(o[h(l,u,s,c)]=!0,i=m)),o[h(i,u,s,c)]=!0,e.borderSkipped=o}else e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};else e.borderSkipped=o}function h(e,t,n,r){var i,o,a;return r?(a=n,e=g(e=(i=e)===(o=t)?a:i===a?o:i,n,t)):e=g(e,t,n),e}function g(e,t,n){return"start"===e?t:"end"===e?n:e}function v(e,t,n){var r=t.inflateAmount;e.inflateAmount="auto"===r?1===n?.33:0:r}function y(e,t,n,r){var i=n.parse(e.start,r),o=n.parse(e.end,r),a=Math.min(i,o),u=Math.max(i,o),s=a,c=u;return Math.abs(a)>Math.abs(u)&&(s=u,c=a),t[n.axis]=c,t._custom={barStart:s,barEnd:c,start:i,end:o,min:a,max:u},t}d.id="textbar";var p=function(e){(0,s.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"parseObjectData",value:function(e,t,n,r){var i,o,a,u,s=e.iScale,c=e.vScale,m=s.getLabels(),l=s===c,d=[];for(i=n,o=n+r;i<o;++i)u=t[i],(a={})[s.axis]=l||s.parse(m[i],i),d.push(y(u,a,c,i));return d}},{key:"getLabelAndValue",value:function(e){var t=this._cachedMeta.vScale,n=this.getDataset().data[e];return{label:t.getLabelForValue(this.index)||"",value:n.label||""}}},{key:"updateElements",value:function(e,t,n,r){var i=this._cachedMeta.vScale,o=this._cachedMeta.iScale,a=this.getDataset(),u=this.resolveDataElementOptions(t,r),s=this.getSharedOptions(u),c=this.includeOptions(r,s),m=i.isHorizontal();this.updateSharedOptions(s,r,u);for(var l=t;l<t+n;l++){var d=a.data[l],h=i.getPixelForValue(this.index),g=o.getPixelForValue(d.start.getTime()),y=o.getPixelForValue(d.end.getTime())-g,p=(this.getParsed(l)._stacks||{})[i.axis],Z={horizontal:m,x:g+y/2,y:h-10,width:y,height:0,base:h+10,text:d.label};c&&(Z.options=s||this.resolveDataElementOptions(l,r),Z.options=Object.assign(Object.assign({},Z.options),{},{backgroundColor:d.color}));var w=Z.options||e[l].options;f(Z,w,p,l),v(Z,w,1),this.updateElement(e[l],l,Z,r)}}},{key:"removeHoverStyle",value:function(e,t,n){}},{key:"setHoverStyle",value:function(e,t,n){}}]),n}(r.vn);p.id="timeline",p.defaults={dataElementType:"textbar",dataElementOptions:["text","textColor","textPadding"],elements:{showText:!0,textPadding:4,minBarWidth:1},layout:{padding:{left:0,right:0,top:0,bottom:0}}},p.overrides={maintainAspectRatio:!1,plugins:{legend:{display:!1}}};var Z=function(e){(0,s.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"determineDataLimits",value:function(){var e=this,t=this.options,n=this._adapter,r=t.time.unit||"day",i=this.getUserBounds(),o=i.min,a=i.max,u=this.chart;u.data.datasets.forEach((function(t,r){if(u.isDatasetVisible(r))for(var i=0,s=t.data;i<s.length;i++){var c=s[i],m=n.parse(c.start,e),l=n.parse(c.end,e);if(m>l){var d=[l,m];m=d[0],l=d[1]}o>m&&m&&(o=m),a<l&&l&&(a=l)}})),o=isFinite(o)&&!isNaN(o)?o:+n.startOf(Date.now(),r),a=isFinite(a)&&!isNaN(a)?a:+n.endOf(Date.now(),r),this.min=Math.min(o,a-1),this.max=Math.max(o+1,a)}}]),n}(r.FB);Z.id="timeline",Z.defaults={position:"bottom",tooltips:{mode:"nearest"},ticks:{autoSkip:!0}};var w=n(39244),_=n(8046),D=n(84594),b=n(59699),k=n(79021),z=n(33651),x=n(32182),T=n(50234),F=n(27605),S=n(99307),I=n(55061),C=n(16094),O=n(72277),M=n(24112),P=n(35040),E=n(38588),B=n(67611),L=n(19317),N=n(91052),V=n(7605),q=n(72949),W=n(59429),j=n(59401),A=n(13250),U=n(24892),Y=n(69388),G=n(17815),H=n(65621),Q=n(89898),R=n(93752),J=n(59281),K=n(1905),$=n(4223),X=n(70451),ee=n(12198),te=n(44583),ne=n(49684),re={datetime:"datetime",datetimeseconds:"datetimeseconds",millisecond:"millisecond",second:"second",minute:"minute",hour:"hour",day:"day",date:"date",weekday:"weekday",week:"week",month:"month",monthyear:"monthyear",quarter:"quarter",year:"year"};r.IQ._date.override({formats:function(){return re},parse:function(e){return e instanceof Date?e.getTime():e},format:function(e,t){switch(t){case"datetime":return(0,te.o0)(new Date(e),this.options.locale,this.options.config);case"datetimeseconds":return(0,te.E8)(new Date(e),this.options.locale,this.options.config);case"millisecond":case"second":return(0,ne.Vu)(new Date(e),this.options.locale,this.options.config);case"minute":case"hour":return(0,ne.mr)(new Date(e),this.options.locale,this.options.config);case"weekday":return(0,ee.pU)(new Date(e),this.options.locale,this.options.config);case"date":case"week":case"quarter":return(0,ee.p6)(new Date(e),this.options.locale,this.options.config);case"day":return(0,ee.mn)(new Date(e),this.options.locale,this.options.config);case"month":return(0,ee.Nh)(new Date(e),this.options.locale,this.options.config);case"monthyear":return(0,ee.NC)(new Date(e),this.options.locale,this.options.config);case"year":return(0,ee.yQ)(new Date(e),this.options.locale,this.options.config);default:return""}},add:function(e,t,n){switch(n){case"millisecond":return(0,w.Z)(e,t);case"second":return(0,_.Z)(e,t);case"minute":return(0,D.Z)(e,t);case"hour":return(0,b.Z)(e,t);case"day":return(0,k.Z)(e,t);case"week":return(0,z.Z)(e,t);case"month":return(0,x.Z)(e,t);case"quarter":return(0,T.Z)(e,t);case"year":return(0,F.Z)(e,t);default:return e}},diff:function(e,t,n){switch(n){case"millisecond":return(0,S.Z)(e,t);case"second":return(0,I.Z)(e,t);case"minute":return(0,C.Z)(e,t);case"hour":return(0,O.Z)(e,t);case"day":return(0,M.Z)(e,t);case"week":return(0,P.Z)(e,t);case"month":return(0,E.Z)(e,t);case"quarter":return(0,B.Z)(e,t);case"year":return(0,L.Z)(e,t);default:return 0}},startOf:function(e,t,n){switch(t){case"second":return(0,N.Z)(e);case"minute":return(0,V.Z)(e);case"hour":return(0,q.Z)(e);case"day":return(0,W.Z)(e);case"week":return(0,j.Z)(e);case"isoWeek":return(0,j.Z)(e,{weekStartsOn:+n});case"month":return(0,A.Z)(e);case"quarter":return(0,U.Z)(e);case"year":return(0,Y.Z)(e);default:return e}},endOf:function(e,t){switch(t){case"second":return(0,G.Z)(e);case"minute":return(0,H.Z)(e);case"hour":return(0,Q.Z)(e);case"day":return(0,R.Z)(e);case"week":return(0,J.Z)(e);case"month":return(0,K.Z)(e);case"quarter":return(0,$.Z)(e);case"year":return(0,X.Z)(e);default:return e}}}),r.kL.register(r.u,r.Dx,r.De,r.Gu,r.FB,r.f$,r.ST,r.vn,r.ZL,r.od,r.jn,d,Z,p,r.uw)},10520:function(e,t,n){n.r(t);n(7151),n(33633),n(25534),n(64827),n(23044),n(1437),n(87520),n(42661),n(78337),n(87065),n(6042),n(19440),n(50897),n(30056),n(12679)}}]);
//# sourceMappingURL=48324-2bmglYkhcGo.js.map