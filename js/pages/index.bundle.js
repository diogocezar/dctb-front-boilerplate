(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Index = function () {
	function Index() {
		_classCallCheck(this, Index);

		// Imports
		this.validation = window.validation;
		this.util = window.util;
		// Calls
		this.validateForm();
		this.getJson();
		this.scrollTest();
	}

	_createClass(Index, [{
		key: 'scrollTest',
		value: function scrollTest() {
			var self = this;
			$('#scroll').on('click', function (e) {
				$('html, body').animate({ scrollTop: $('footer').offset().top }, 2000);
				//self.util.$('footer').scrollIntoView({ behavior: 'smooth' })
			});
		}
	}, {
		key: 'validateForm',
		value: function validateForm() {
			this.validation.setAction(function () {
				console.log('Sent Form 1');
			}, 'button1', 'form1');
			this.validation.setAction(function () {
				console.log('Sent Form 2');
			}, 'button2', 'form2');
		}
	}, {
		key: 'getJson',
		value: function getJson() {
			var _this = this;

			this.util.fetch('http://api.icndb.com/jokes/random').then(function (data) {
				_this.util.$('.load-joke').innerHTML = data.value.joke;
			});
		}
	}]);

	return Index;
}();

$(document).ready(function () {
	new Index();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNDQyxrQkFBYTtBQUFBOztBQUNaO0FBQ0EsT0FBQSxVQUFBLEdBQWtCLE9BQWxCLFVBQUE7QUFDQSxPQUFBLElBQUEsR0FBa0IsT0FBbEIsSUFBQTtBQUNBO0FBQ0EsT0FBQSxZQUFBO0FBQ0EsT0FBQSxPQUFBO0FBQ0EsT0FBQSxVQUFBO0FBQ0E7Ozs7K0JBQ1c7QUFDWCxPQUFNLE9BQU4sSUFBQTtBQUNBLEtBQUEsU0FBQSxFQUFBLEVBQUEsQ0FBQSxPQUFBLEVBQXlCLFVBQUEsQ0FBQSxFQUFZO0FBQ3BDLE1BQUEsWUFBQSxFQUFBLE9BQUEsQ0FBd0IsRUFBRSxXQUFXLEVBQUEsUUFBQSxFQUFBLE1BQUEsR0FBckMsR0FBd0IsRUFBeEIsRUFBQSxJQUFBO0FBQ0E7QUFGRCxJQUFBO0FBSUE7OztpQ0FDYTtBQUNiLFFBQUEsVUFBQSxDQUFBLFNBQUEsQ0FBMEIsWUFBTTtBQUMvQixZQUFBLEdBQUEsQ0FBQSxhQUFBO0FBREQsSUFBQSxFQUFBLFNBQUEsRUFBQSxPQUFBO0FBR0EsUUFBQSxVQUFBLENBQUEsU0FBQSxDQUEwQixZQUFNO0FBQy9CLFlBQUEsR0FBQSxDQUFBLGFBQUE7QUFERCxJQUFBLEVBQUEsU0FBQSxFQUFBLE9BQUE7QUFHQTs7OzRCQUNRO0FBQUE7O0FBQ1IsUUFBQSxJQUFBLENBQUEsS0FBQSxDQUFBLG1DQUFBLEVBQUEsSUFBQSxDQUNPLGdCQUFRO0FBQUUsVUFBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLFlBQUEsRUFBQSxTQUFBLEdBQXNDLEtBQUEsS0FBQSxDQUF0QyxJQUFBO0FBRGpCLElBQUE7QUFFQTs7Ozs7O0FBR0YsRUFBQSxRQUFBLEVBQUEsS0FBQSxDQUFrQixZQUFVO0FBQzNCLEtBQUEsS0FBQTtBQURELENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjbGFzcyBJbmRleHtcblx0Y29uc3RydWN0b3IoKXtcblx0XHQvLyBJbXBvcnRzXG5cdFx0dGhpcy52YWxpZGF0aW9uID0gd2luZG93LnZhbGlkYXRpb25cblx0XHR0aGlzLnV0aWwgICAgICAgPSB3aW5kb3cudXRpbFxuXHRcdC8vIENhbGxzXG5cdFx0dGhpcy52YWxpZGF0ZUZvcm0oKVxuXHRcdHRoaXMuZ2V0SnNvbigpXG5cdFx0dGhpcy5zY3JvbGxUZXN0KClcblx0fVxuXHRzY3JvbGxUZXN0KCl7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0JCgnI3Njcm9sbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKCdmb290ZXInKS5vZmZzZXQoKS50b3AgfSwgMjAwMClcblx0XHRcdC8vc2VsZi51dGlsLiQoJ2Zvb3RlcicpLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG5cdFx0fSlcblx0fVxuXHR2YWxpZGF0ZUZvcm0oKXtcblx0XHR0aGlzLnZhbGlkYXRpb24uc2V0QWN0aW9uKCgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdTZW50IEZvcm0gMScpXG5cdFx0fSwgJ2J1dHRvbjEnLCAnZm9ybTEnKVxuXHRcdHRoaXMudmFsaWRhdGlvbi5zZXRBY3Rpb24oKCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ1NlbnQgRm9ybSAyJylcblx0XHR9LCAnYnV0dG9uMicsICdmb3JtMicpXG5cdH1cblx0Z2V0SnNvbigpe1xuXHRcdHRoaXMudXRpbC5mZXRjaCgnaHR0cDovL2FwaS5pY25kYi5jb20vam9rZXMvcmFuZG9tJylcblx0XHRcdC50aGVuKGRhdGEgPT4geyB0aGlzLnV0aWwuJCgnLmxvYWQtam9rZScpLmlubmVySFRNTCA9IGRhdGEudmFsdWUuam9rZSB9KVxuXHR9XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdG5ldyBJbmRleCgpXG59KSJdfQ==
