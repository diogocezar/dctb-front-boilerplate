!function i(u,c,f){function a(e,n){if(!c[e]){if(!u[e]){var t="function"==typeof require&&require;if(!n&&t)return t(e,!0);if(l)return l(e,!0);var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}var o=c[e]={exports:{}};u[e][0].call(o.exports,function(n){return a(u[e][1][n]||n)},o,o.exports,i,u,c,f)}return c[e].exports}for(var l="function"==typeof require&&require,n=0;n<f.length;n++)a(f[n]);return a}({1:[function(n,e,t){"use strict";var r=function(){function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(n,e,t){return e&&r(n.prototype,e),t&&r(n,t),n}}();new(function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),console.log("Start Index"),window.validation.setAction(function(){console.log("send")}),this.getJson()}return r(n,[{key:"getJson",value:function(){window.util.fetch("http://api.icndb.com/jokes/random").then(function(n){window.util.$(".container").innerHTML=n.value.joke})}}]),n}())},{}]},{},[1]);