!function r(a,c,u){function f(e,n){if(!c[e]){if(!a[e]){var t="function"==typeof require&&require;if(!n&&t)return t(e,!0);if(l)return l(e,!0);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}var i=c[e]={exports:{}};a[e][0].call(i.exports,function(n){return f(a[e][1][n]||n)},i,i.exports,r,a,c,u)}return c[e].exports}for(var l="function"==typeof require&&require,n=0;n<u.length;n++)f(u[n]);return f}({1:[function(n,e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function o(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(n,e,t){return e&&o(n.prototype,e),t&&o(n,t),n}}();t.ActionsIndex=function(){function e(n){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.executor=n,this.Validation1=new window.validation,this.Validation2=new window.validation,this.formGetcher=new window.formGetcher,this.autoload()}return o(e,[{key:"autoload",value:function(){this.bindButtons(),this.bindValidations()}},{key:"bindButtons",value:function(){$("#scroll").on("click",function(n){$("html, body").animate({scrollTop:$("footer").offset().top},2e3)})}},{key:"bindValidations",value:function(){var n=this;this.Validation1.setAction(function(){console.log(n.formGetcher.getData("form1")),n.executor.execSendForm1()},"button1","form1"),this.Validation2.setAction(function(){console.log(n.formGetcher.getData("form2")),n.executor.execSendForm2()},"button2","form2")}}]),e}()},{}],2:[function(n,e,t){"use strict";var o=function(){function o(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(n,e,t){return e&&o(n.prototype,e),t&&o(n,t),n}}(),i=n("./actions/actions-index");var r=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.Util=window.util,this.autoload()}return o(n,[{key:"autoload",value:function(){this.execJoker()}},{key:"execJoker",value:function(){var e=this;this.Util.fetch("http://api.icndb.com/jokes/random").then(function(n){e.Util.$(".load-joke").innerHTML=n.value.joke})}},{key:"execSendForm1",value:function(){console.log("Form 1 Sent")}},{key:"execSendForm2",value:function(){console.log("Form 2 Sent")}}]),n}();$(document).ready(function(){window.index=new r,window.actionsIndex=new i.ActionsIndex(window.index)})},{"./actions/actions-index":1}]},{},[2]);