/*
GreedyNav.js - https://github.com/lukejacksonn/GreedyNav
Licensed under the MIT license - http://opensource.org/licenses/MIT
Copyright (c) 2015 Luke Jackson http://lukejacksonn.com
*/
$(function(){function n(){function t(e,n){o+=n,i+=1,a.push(o)}function e(e){var n=e.clone();n.css("visibility","hidden"),l.append(n),t(0,n.outerWidth()),n.remove()}o=i=0,d=1e3,a=[],l.children().outerWidth(t),h.children().each(function(){e($(this))})}function t(){var e=(W=$(window).width())<768?0:W<1024?1:W<1280?2:3;e!==p&&n(),p=e,f=l.children().length,v=s.innerWidth()-(0!==c.length?c.outerWidth(!0):0)-u.outerWidth(!0)-(0!==g.length?g.outerWidth(!0):0)-(f!==a.length?r.outerWidth(!0):0),y=a[f-1],v<y?(l.children().last().prependTo(h),f-=1,t()):v+(f===a.length-1?r.outerWidth(!0):0)>a[f]&&(h.children().first().appendTo(l),f+=1,t()),r.attr("count",i-f),f===i?r.addClass("hidden"):r.removeClass("hidden")}var i,o,d,a,r=$("nav.greedy-nav .greedy-nav__toggle"),l=$("nav.greedy-nav .visible-links"),h=$("nav.greedy-nav .hidden-links"),s=$("nav.greedy-nav"),c=$("nav.greedy-nav .site-logo"),e=$("nav.greedy-nav .site-logo img"),u=$("nav.greedy-nav .site-title"),g=$("nav.greedy-nav button.search__toggle");n();var v,f,y,m,W=$(window).width(),p=W<768?0:W<1024?1:W<1280?2:3;$(window).resize(function(){t()}),r.on("click",function(){h.toggleClass("hidden"),$(this).toggleClass("close"),clearTimeout(m)}),h.on("mouseleave",function(){m=setTimeout(function(){h.addClass("hidden")},d)}).on("mouseenter",function(){clearTimeout(m)}),0!==e.length?e[0].complete||0!==e[0].naturalWidth?t():e.one("load error",t):t()});