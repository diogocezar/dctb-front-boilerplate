(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = exports.Util = function () {
    function Util() {
        _classCallCheck(this, Util);
    }

    _createClass(Util, [{
        key: "isEmpty",
        value: function isEmpty(value) {
            return value == "" || value == null || value == undefined;
        }
    }, {
        key: "fetch",
        value: function (_fetch) {
            function fetch(_x) {
                return _fetch.apply(this, arguments);
            }

            fetch.toString = function () {
                return _fetch.toString();
            };

            return fetch;
        }(function (url) {
            return new Promise(function (resolve, reject) {
                fetch(url).then(function (res) {
                    return res.json();
                }).then(function (data) {
                    resolve(data);
                });
            });
        })
    }]);

    return Util;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = require('../modules/util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Index = function () {
	function Index() {
		_classCallCheck(this, Index);

		console.log('Start Index');
		this.util = new _util.Util();
		this.checkEmpty();
		this.getJson();
	}

	_createClass(Index, [{
		key: 'checkEmpty',
		value: function checkEmpty() {
			console.log(this.util.isEmpty('Testing'));
		}
	}, {
		key: 'getJson',
		value: function getJson() {
			this.util.fetch('http://api.icndb.com/jokes/random').then(function (data) {
				$('.container').empty().html(data.value.joke);
			});
		}
	}]);

	return Index;
}();

new Index();

},{"../modules/util":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9tb2R1bGVzL3V0aWwuanMiLCJqcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUNBTyxJLFdBQUEsSTs7Ozs7OztnQ0FDSCxLLEVBQWU7QUFDWCxtQkFBUSxTQUFBLEVBQUEsSUFBZSxTQUFmLElBQUEsSUFBZ0MsU0FBeEMsU0FBQTtBQUNIOzs7Ozs7Ozs7Ozs7O29CQUNELEcsRUFBVztBQUNQLG1CQUFPLElBQUEsT0FBQSxDQUFZLFVBQUEsT0FBQSxFQUFBLE1BQUEsRUFBcUI7QUFDcEMsc0JBQUEsR0FBQSxFQUFBLElBQUEsQ0FDVTtBQUFBLDJCQUFPLElBRGpCLElBQ2lCLEVBQVA7QUFBQSxpQkFEVixFQUFBLElBQUEsQ0FFVSxnQkFBUTtBQUNWLDRCQUFBLElBQUE7QUFIUixpQkFBQTtBQURKLGFBQU8sQ0FBUDtBQU9ILFM7Ozs7Ozs7Ozs7Ozs7OztJQ1ZMLEs7QUFDQyxrQkFBYTtBQUFBOztBQUNaLFVBQUEsR0FBQSxDQUFBLGFBQUE7QUFDQSxPQUFBLElBQUEsR0FBWSxJQUFaLFVBQVksRUFBWjtBQUNBLE9BQUEsVUFBQTtBQUNBLE9BQUEsT0FBQTtBQUNBOzs7OytCQUNXO0FBQ1gsV0FBQSxHQUFBLENBQVksS0FBQSxJQUFBLENBQUEsT0FBQSxDQUFaLFNBQVksQ0FBWjtBQUNBOzs7NEJBQ1E7QUFDUixRQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsbUNBQUEsRUFBQSxJQUFBLENBQ00sZ0JBQVE7QUFBRSxNQUFBLFlBQUEsRUFBQSxLQUFBLEdBQUEsSUFBQSxDQUE2QixLQUFBLEtBQUEsQ0FBN0IsSUFBQTtBQURoQixJQUFBO0FBRUE7Ozs7OztBQUdGLElBQUEsS0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBjbGFzcyBVdGlsIHtcbiAgICBpc0VtcHR5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgPT0gXCJcIiB8fCB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09IHVuZGVmaW5lZClcbiAgICB9XG4gICAgZmV0Y2godXJsKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBmZXRjaCh1cmwpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn0iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vbW9kdWxlcy91dGlsJ1xuXG5jbGFzcyBJbmRleHtcblx0Y29uc3RydWN0b3IoKXtcblx0XHRjb25zb2xlLmxvZygnU3RhcnQgSW5kZXgnKVxuXHRcdHRoaXMudXRpbCA9IG5ldyBVdGlsKClcblx0XHR0aGlzLmNoZWNrRW1wdHkoKVxuXHRcdHRoaXMuZ2V0SnNvbigpXG5cdH1cblx0Y2hlY2tFbXB0eSgpe1xuXHRcdGNvbnNvbGUubG9nKHRoaXMudXRpbC5pc0VtcHR5KCdUZXN0aW5nJykpXG5cdH1cblx0Z2V0SnNvbigpe1xuXHRcdHRoaXMudXRpbC5mZXRjaCgnaHR0cDovL2FwaS5pY25kYi5jb20vam9rZXMvcmFuZG9tJylcblx0XHQudGhlbihkYXRhID0+IHsgJCgnLmNvbnRhaW5lcicpLmVtcHR5KCkuaHRtbChkYXRhLnZhbHVlLmpva2UpIH0pXG5cdH1cbn1cblxubmV3IEluZGV4KCkiXX0=
