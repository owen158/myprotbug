/* Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version 2.1.2
 */
(function(B){B.fn.bgiframe=(B.browser.msie&&/msie 6\.0/i.test(navigator.userAgent)?function(D){D=B.extend({top:"auto",left:"auto",width:"auto",height:"auto",opacity:true,src:"javascript:false;"},D);var C='<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+D.src+'"style="display:block;position:absolute;z-index:-1;'+(D.opacity!==false?"filter:Alpha(Opacity='0');":"")+"top:"+(D.top=="auto"?"expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px')":A(D.top))+";left:"+(D.left=="auto"?"expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px')":A(D.left))+";width:"+(D.width=="auto"?"expression(this.parentNode.offsetWidth+'px')":A(D.width))+";height:"+(D.height=="auto"?"expression(this.parentNode.offsetHeight+'px')":A(D.height))+';"/>';return this.each(function(){if(B(this).children("iframe.bgiframe").length===0){this.insertBefore(document.createElement(C),this.firstChild)}})}:function(){return this});B.fn.bgIframe=B.fn.bgiframe;function A(C){return C&&C.constructor===Number?C+"px":C}})(jQuery);