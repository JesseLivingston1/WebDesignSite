// usage: log('inside coolFunc', this, arguments);
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
      arguments.callee = arguments.callee.caller;
      console.log( Array.prototype.slice.call(arguments) );
  }
};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158; 
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

 /*
jquery.animate-enhanced plugin v0.89
---
http://github.com/benbarnett/jQuery-Animate-Enhanced
http://benbarnett.net
@benpbarnett
*/
(function(d,z,A){function E(a,b,h,c){if("d"!=h){var f=F.exec(b),e="auto"===a.css(h)?0:a.css(h),e="string"==typeof e?w(e):e;"string"==typeof b&&w(b);var c=!0===c?0:e,d=a.is(":hidden"),i=a.translation();"left"==h&&(c=parseInt(e,10)+i.x);"right"==h&&(c=parseInt(e,10)+i.x);"top"==h&&(c=parseInt(e,10)+i.y);"bottom"==h&&(c=parseInt(e,10)+i.y);!f&&"show"==b?(c=1,d&&a.css({display:"block",opacity:0})):!f&&"hide"==b&&(c=0);return f?(a=parseFloat(f[2]),f[1]&&(a=("-="===f[1]?-1:1)*a+parseInt(c,10)),a):c}}function G(a,
b,h,c,f,e,g,i){var j=a.data(q),j=j&&!u(j)?j:d.extend(!0,{},H),n=f;if(-1<d.inArray(b,x)){var o=j.meta,m=w(a.css(b))||0,l=b+"_o",n=f-m;o[b]=n;o[l]="auto"==a.css(b)?0+n:m+n||0;j.meta=o;g&&0===n&&(n=0-o[l],o[b]=n,o[l]=0)}return a.data(q,I(a,j,b,h,c,n,e,g,i))}function I(a,b,d,c,f,e,g,i,j){var n=!1,g=!0===g&&!0===i,b=b||{};if(!b.original)b.original={},n=!0;b.properties=b.properties||{};b.secondary=b.secondary||{};for(var i=b.meta,o=b.original,m=b.properties,q=b.secondary,p=l.length-1;0<=p;p--){var k=l[p]+
"transition-property",r=l[p]+"transition-duration",s=l[p]+"transition-timing-function",d=g?l[p]+"transform":d;n&&(o[k]=a.css(k)||"",o[r]=a.css(r)||"",o[s]=a.css(s)||"");q[d]=g?(!0===j||!0===y&&!1!==j)&&B?"translate3d("+i.left+"px, "+i.top+"px, 0)":"translate("+i.left+"px,"+i.top+"px)":e;m[k]=(m[k]?m[k]+",":"")+d;m[r]=(m[r]?m[r]+",":"")+c+"ms";m[s]=(m[s]?m[s]+",":"")+f}return b}function J(a){for(var b in a)if(("width"==b||"height"==b)&&("show"==a[b]||"hide"==a[b]||"toggle"==a[b]))return!0;return!1}
function u(a){for(var b in a)return!1;return!0}function w(a){return parseFloat(a.replace(/px/i,""))}function K(a,b,h){var c=-1<d.inArray(a,L);if(("width"==a||"height"==a)&&b===parseFloat(h.css(a)))c=!1;return c}var L="top,right,bottom,left,opacity,height,width".split(","),x=["top","right","bottom","left"],l=["","-webkit-","-moz-","-o-"],M=["avoidTransforms","useTranslate3d","leaveTransforms"],F=/^([+-]=)?([\d+-.]+)(.*)$/,N=/([A-Z])/g,H={secondary:{},meta:{top:0,right:0,bottom:0,left:0}},q="jQe",C=
null,t=(document.body||document.documentElement).style,v=void 0!==t.WebkitTransition?"webkitTransitionEnd":void 0!==t.OTransition?"oTransitionEnd":"transitionend",D=void 0!==t.WebkitTransition||void 0!==t.MozTransition||void 0!==t.OTransition||void 0!==t.transition,B="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,y=B;if(d.expr&&d.expr.filters)C=d.expr.filters.animated,d.expr.filters.animated=function(a){return d(a).data("events")&&d(a).data("events")[v]?!0:C.call(this,a)};d.extend({toggle3DByDefault:function(){y=
!y}});d.fn.translation=function(){if(!this[0])return null;var a=window.getComputedStyle(this[0],null),b={x:0,y:0};if(a)for(var d=l.length-1;0<=d;d--){var c=a.getPropertyValue(l[d]+"transform");if(c&&/matrix/i.test(c)){a=c.replace(/^matrix\(/i,"").split(/, |\)$/g);b={x:parseInt(a[4],10),y:parseInt(a[5],10)};break}}return b};d.fn.animate=function(a,b,h,c){var a=a||{},f=!("undefined"!==typeof a.bottom||"undefined"!==typeof a.right),e=d.speed(b,h,c),g=this,i=0,j=function(){i--;0===i&&"function"===typeof e.complete&&
e.complete.apply(g[0],arguments)};return!0===a.avoidCSSTransitions||!D||u(a)||J(a)||0>=e.duration||!0===d.fn.animate.defaults.avoidTransforms&&!1!==a.avoidTransforms?z.apply(this,arguments):this[!0===e.queue?"queue":"each"](function(){var b=d(this),c=d.extend({},e),g=function(){var c=b.data(q)||{original:{}},d={};if(!0!==a.leaveTransforms){for(var e=l.length-1;0<=e;e--)d[l[e]+"transform"]="";if(f&&"undefined"!==typeof c.meta)for(var e=0,g;g=x[e];++e)d[g]=c.meta[g+"_o"]+"px"}b.unbind(v).css(c.original).css(d).data(q,
null);"hide"===a.opacity&&b.css({display:"none",opacity:""});j.call(b)},h={bounce:"cubic-bezier(0.0, 0.35, .5, 1.3)",linear:"linear",swing:"ease-in-out",easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeInQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",easeInExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",easeInCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",
easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",easeOutQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeOutExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",
easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",easeInOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},p={},h=h[c.easing||"swing"]?h[c.easing||"swing"]:c.easing||"swing",k;for(k in a)if(-1===d.inArray(k,
M)){var r=-1<d.inArray(k,x),s=E(b,a[k],k,r&&!0!==a.avoidTransforms);!0!==a.avoidTransforms&&K(k,s,b)?G(b,k,c.duration,h,r&&!0===a.avoidTransforms?s+"px":s,r&&!0!==a.avoidTransforms,f,!0===a.useTranslate3d):p[k]=a[k]}b.unbind(v);if((k=b.data(q))&&!u(k)&&!u(k.secondary)){i++;b.css(k.properties);var t=k.secondary;setTimeout(function(){b.bind(v,g).css(t)})}else c.queue=!1;u(p)||(i++,z.apply(b,[p,{duration:c.duration,easing:d.easing[c.easing]?c.easing:d.easing.swing?"swing":"linear",complete:j,queue:c.queue}]));
return!0})};d.fn.animate.defaults={};d.fn.stop=function(a,b,h){if(!D)return A.apply(this,[a,b]);a&&this.queue([]);this.each(function(){var c=d(this),f=c.data(q);if(f&&!u(f)){var e,g={};if(b){if(g=f.secondary,!h&&void 0!==typeof f.meta.left_o||void 0!==typeof f.meta.top_o){g.left=void 0!==typeof f.meta.left_o?f.meta.left_o:"auto";g.top=void 0!==typeof f.meta.top_o?f.meta.top_o:"auto";for(e=l.length-1;0<=e;e--)g[l[e]+"transform"]=""}}else if(!u(f.secondary)){var i=window.getComputedStyle(c[0],null);
if(i)for(var j in f.secondary)if(f.secondary.hasOwnProperty(j)&&(j=j.replace(N,"-$1").toLowerCase(),g[j]=i.getPropertyValue(j),!h&&/matrix/i.test(g[j]))){e=g[j].replace(/^matrix\(/i,"").split(/, |\)$/g);g.left=parseFloat(e[4])+parseFloat(c.css("left"))+"px"||"auto";g.top=parseFloat(e[5])+parseFloat(c.css("top"))+"px"||"auto";for(e=l.length-1;0<=e;e--)g[l[e]+"transform"]=""}}c.unbind(v).css(f.original).css(g).data(q,null)}else A.apply(c,[a,b])});return this}})(jQuery,jQuery.fn.animate,jQuery.fn.stop);
