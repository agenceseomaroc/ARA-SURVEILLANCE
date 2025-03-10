!function(o){o.isScrollToFixed=function(i){return!!o(i).data("ScrollToFixed")},o.ScrollToFixed=function(i,e){var t,n,l,r,s,d=this;d.$el=o(i),d.el=i,d.$el.data("ScrollToFixed",d);var c=!1,x=d.$el,p=0,f=0,a=-1,u=-1,g=null;function F(){var o=d.options.limit;return o?"function"==typeof o?o.apply(x):o:0}function T(){return"fixed"===t}function S(){return"absolute"===t}function b(){return!(T()||S())}function m(){if(!T()){var o=x[0].getBoundingClientRect();g.css({display:x.css("display"),width:o.width,height:o.height,float:x.css("float")}),cssOptions={"z-index":d.options.zIndex,position:"fixed",top:-1==d.options.bottom?_():"",bottom:-1==d.options.bottom?"":d.options.bottom,"margin-left":"0px"},d.options.dontSetWidth||(cssOptions.width=x.css("width")),x.css(cssOptions),x.addClass(d.options.baseClassName),d.options.className&&x.addClass(d.options.className),t="fixed"}}function h(){var o=F(),i=f;d.options.removeOffsets&&(i="",o-=p),cssOptions={position:"absolute",top:o,left:i,"margin-left":"0px",bottom:""},d.options.dontSetWidth||(cssOptions.width=x.css("width")),x.css(cssOptions),t="absolute"}function v(){b()||(u=-1,g.css("display","none"),x.css({"z-index":s,width:"",position:n,left:"",top:r,"margin-left":""}),x.removeClass("scroll-to-fixed-fixed"),d.options.className&&x.removeClass(d.options.className),t=null)}function $(o){o!=u&&(x.css("left",f-o),u=o)}function _(){var o=d.options.marginTop;return o?"function"==typeof o?o.apply(x):o:0}function U(){if(!(!o.isScrollToFixed(x)||x.is(":hidden"))){var i=c,e=b();c?b()&&(p=x.offset().top,f=x.offset().left):(x.trigger("preUnfixed.ScrollToFixed"),v(),x.trigger("unfixed.ScrollToFixed"),u=-1,p=x.offset().top,f=x.offset().left,d.options.offsets&&(f+=x.offset().left-x.position().left),-1==a&&(a=f),t=x.css("position"),c=!0,-1!=d.options.bottom&&(x.trigger("preFixed.ScrollToFixed"),m(),x.trigger("fixed.ScrollToFixed")));var l=o(window).scrollLeft(),r=o(window).scrollTop(),s=F();d.options.minWidth&&o(window).width()<d.options.minWidth?b()&&i||(w(),x.trigger("preUnfixed.ScrollToFixed"),v(),x.trigger("unfixed.ScrollToFixed")):d.options.maxWidth&&o(window).width()>d.options.maxWidth?b()&&i||(w(),x.trigger("preUnfixed.ScrollToFixed"),v(),x.trigger("unfixed.ScrollToFixed")):-1==d.options.bottom?s>0&&r>=s-_()?e||S()&&i||(w(),x.trigger("preAbsolute.ScrollToFixed"),h(),x.trigger("unfixed.ScrollToFixed")):r>=p-_()?(T()&&i||(w(),x.trigger("preFixed.ScrollToFixed"),m(),u=-1,x.trigger("fixed.ScrollToFixed")),$(l)):b()&&i||(w(),x.trigger("preUnfixed.ScrollToFixed"),v(),x.trigger("unfixed.ScrollToFixed")):s>0?r+o(window).height()-x.outerHeight(!0)>=s-(_()||-(d.options.bottom?d.options.bottom:0))?T()&&(w(),x.trigger("preUnfixed.ScrollToFixed"),"absolute"===n?h():v(),x.trigger("unfixed.ScrollToFixed")):(T()||(w(),x.trigger("preFixed.ScrollToFixed"),m()),$(l),x.trigger("fixed.ScrollToFixed")):$(l)}}function w(){var o=x.css("position");"absolute"==o?x.trigger("postAbsolute.ScrollToFixed"):"fixed"==o?x.trigger("postFixed.ScrollToFixed"):x.trigger("postUnfixed.ScrollToFixed")}var z=function(o){x.is(":visible")?(c=!1,U()):v()},C=function(o){window.requestAnimationFrame?requestAnimationFrame(U):U()},A=function(o){(o=o||window.event).preventDefault&&o.preventDefault(),o.returnValue=!1};d.init=function(){d.options=o.extend({},o.ScrollToFixed.defaultOptions,e),s=x.css("z-index"),d.$el.css("z-index",d.options.zIndex),g=o("<div />"),t=x.css("position"),n=x.css("position"),l=x.css("float"),r=x.css("top"),b()&&d.$el.after(g),o(window).bind("resize.ScrollToFixed",z),o(window).bind("scroll.ScrollToFixed",C),"ontouchmove"in window&&o(window).bind("touchmove.ScrollToFixed",U),d.options.preFixed&&x.bind("preFixed.ScrollToFixed",d.options.preFixed),d.options.postFixed&&x.bind("postFixed.ScrollToFixed",d.options.postFixed),d.options.preUnfixed&&x.bind("preUnfixed.ScrollToFixed",d.options.preUnfixed),d.options.postUnfixed&&x.bind("postUnfixed.ScrollToFixed",d.options.postUnfixed),d.options.preAbsolute&&x.bind("preAbsolute.ScrollToFixed",d.options.preAbsolute),d.options.postAbsolute&&x.bind("postAbsolute.ScrollToFixed",d.options.postAbsolute),d.options.fixed&&x.bind("fixed.ScrollToFixed",d.options.fixed),d.options.unfixed&&x.bind("unfixed.ScrollToFixed",d.options.unfixed),d.options.spacerClass&&g.addClass(d.options.spacerClass),x.bind("resize.ScrollToFixed",function(){g.height(x.height())}),x.bind("scroll.ScrollToFixed",function(){x.trigger("preUnfixed.ScrollToFixed"),v(),x.trigger("unfixed.ScrollToFixed"),U()}),x.bind("detach.ScrollToFixed",function(i){A(i),x.trigger("preUnfixed.ScrollToFixed"),v(),x.trigger("unfixed.ScrollToFixed"),o(window).unbind("resize.ScrollToFixed",z),o(window).unbind("scroll.ScrollToFixed",C),x.unbind(".ScrollToFixed"),g.remove(),d.$el.removeData("ScrollToFixed")}),z()},d.init()},o.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1e3,baseClassName:"scroll-to-fixed-fixed"},o.fn.scrollToFixed=function(i){return this.each(function(){new o.ScrollToFixed(this,i)})}}(jQuery);