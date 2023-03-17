/*!
 * gumshoejs v5.1.1
 * A simple, framework-agnostic scrollspy script.
 * (c) 2019 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/gumshoe
 */
!function(t,e){"function"==typeof define&&define.amd?define([],function(){return e(t)}):"object"==typeof exports?module.exports=e(t):t.Gumshoe=e(t)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,function(u){"use strict";var l={navClass:"active",contentClass:"active",nested:!1,nestedClass:"active",offset:0,reflow:!1,events:!0},d=function(){var n={};return Array.prototype.forEach.call(arguments,function(t){for(var e in t){if(!t.hasOwnProperty(e))return;n[e]=t[e]}}),n},o=function(t,e,n){if(n.settings.events){var o=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e.dispatchEvent(o)}},n=function(t){var e=0;if(t.offsetParent)for(;t;)e+=t.offsetTop,t=t.offsetParent;return 0<=e?e:0},v=function(t){t&&t.sort(function(t,e){return n(t.content)<n(e.content)?-1:1})},c=function(t){return"function"==typeof t.offset?parseFloat(t.offset()):parseFloat(t.offset)},t=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},s=function(t,e,n){var o=t.getBoundingClientRect(),s=c(e);return n?parseInt(o.bottom,10)<(u.innerHeight||document.documentElement.clientHeight):parseInt(o.top,10)<=s},i=function(){return u.innerHeight+u.pageYOffset>=t()},r=function(t,e){return!(!i()||!s(t.content,e,!0))},m=function(t,e){var n=t[t.length-1];if(r(n,e))return n;for(var o=t.length-1;0<=o;o--)if(s(t[o].content,e))return t[o]},a=function(t,e){if(e.nested){var n=t.parentNode.closest("li");n&&(n.classList.remove(e.nestedClass),a(n,e))}},p=function(t,e){if(t){var n=t.nav.closest("li");n&&(n.classList.remove(e.navClass),t.content.classList.remove(e.contentClass),a(n,e),o("gumshoeDeactivate",n,{link:t.nav,content:t.content,settings:e}))}},f=function(t,e){if(e.nested){var n=t.parentNode.closest("li");n&&(n.classList.add(e.nestedClass),f(n,e))}},h=function(t,e){if(t){var n=t.nav.closest("li");n&&(n.classList.add(e.navClass),t.content.classList.add(e.contentClass),f(n,e),o("gumshoeActivate",n,{link:t.nav,content:t.content,settings:e}))}};return function(t,e){var n,o,s,c,i,r={};r.setup=function(){n=document.querySelectorAll(t),o=[],Array.prototype.forEach.call(n,function(t){var e=document.getElementById(decodeURIComponent(t.hash.substr(1)));e&&o.push({nav:t,content:e})}),v(o)},r.detect=function(){var t=m(o,i);t?s&&t.content===s.content||(p(s,i),h(t,i),s=t):s&&(p(s,i),s=null)};var a=function(){c&&u.cancelAnimationFrame(c),c=u.requestAnimationFrame(r.detect)},f=function(){c&&u.cancelAnimationFrame(c),c=u.requestAnimationFrame(function(){v(o),r.detect()})};return r.destroy=function(){s&&p(s,i),u.removeEventListener("scroll",a,!1),i.reflow&&u.removeEventListener("resize",f,!1),i=c=s=n=o=null},function(){i=d(l,e||{}),r.setup(),r.detect(),u.addEventListener("scroll",a,!1),i.reflow&&u.addEventListener("resize",f,!1)}(),r}});