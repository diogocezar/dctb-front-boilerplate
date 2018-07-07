(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _util = require('../modules/util');

var _validation = require('../modules/validation');

var _loader = require('../modules/loader');

var _niceScroll = require('../modules/nice-scroll');

var _mobile = require('../modules/mobile');

var _configScrollReveal = require('../modules/config-scroll-reveal');

var _inputMask = require('../modules/input-mask');

var _select = require('../modules/select2');

var _menu = require('../modules/menu');

var _buttonActions = require('../modules/button-actions');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Exports
window.util = new _util.Util();
window.validation = new _validation.Validation();

// Global Loader
window.loader = new _loader.Loader();
window.loaded = false;

var Common = function Common() {
	_classCallCheck(this, Common);

	this.mobile = new _mobile.Mobile();
	this.niceScroll = new _niceScroll.NiceScroll();
	this.configScrollReveal = new _configScrollReveal.ConfigScrollReveal();
	this.inputMask = new _inputMask.InputMask();
	this.select2 = new _select.Select2();
	this.menu = new _menu.Menu();
	this.buttonActions = new _buttonActions.ButtonActions();
};

$(window).on('load', function () {
	window.loaded = true;
	window.common = new Common();
});

},{"../modules/button-actions":2,"../modules/config-scroll-reveal":3,"../modules/input-mask":4,"../modules/loader":5,"../modules/menu":6,"../modules/mobile":7,"../modules/nice-scroll":8,"../modules/select2":9,"../modules/util":10,"../modules/validation":11}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ButtonActions = exports.ButtonActions = function () {
	function ButtonActions() {
		_classCallCheck(this, ButtonActions);

		this.init();
	}

	_createClass(ButtonActions, [{
		key: "init",
		value: function init() {}
	}]);

	return ButtonActions;
}();

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConfigScrollReveal = exports.ConfigScrollReveal = function () {
	function ConfigScrollReveal() {
		_classCallCheck(this, ConfigScrollReveal);

		this.configs = {
			'animationSet1': {
				'duration': 1200,
				'origin': 'left',
				'reset': true,
				'delay': 100,
				'scale': 0.9
			},
			'animationSet2': {
				'duration': 1200,
				'origin': 'top',
				'reset': true,
				'delay': 100,
				'scale': 0.9
			},
			'animationSet3': {
				'duration': 1200,
				'origin': 'bottom',
				'reset': true,
				'delay': 800,
				'scale': 0.9
			},
			'animationSet4': {
				'duration': 1200,
				'origin': 'right',
				'reset': true,
				'delay': 100,
				'scale': 0.9
			}
		};
		this.init();
	}

	_createClass(ConfigScrollReveal, [{
		key: 'init',
		value: function init() {
			window.sr = ScrollReveal();
			sr.reveal('.animation-1', this.configs.animationSet1);
			sr.reveal('.animation-2', this.configs.animationSet2, 50);
			sr.reveal('.animation-3', this.configs.animationSet3);
			sr.reveal('.animation-4', this.configs.animationSet4);
		}
	}]);

	return ConfigScrollReveal;
}();

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputMask = exports.InputMask = function () {
	function InputMask() {
		_classCallCheck(this, InputMask);

		this.init();
	}

	_createClass(InputMask, [{
		key: "init",
		value: function init() {
			$(".mask").inputmask();
		}
	}]);

	return InputMask;
}();

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loader = exports.Loader = function () {
	function Loader() {
		_classCallCheck(this, Loader);

		this.configs = {
			'delay': 500,
			'recheck': 2000,
			'velocity': "slow",
			'element': '#loader'
		};
		this.init();
	}

	_createClass(Loader, [{
		key: 'init',
		value: function init() {
			if (window.loaded) this.pageLoaded();else {
				var self = this;
				setTimeout(function () {
					console.log('Loading...');
					self.init();
				}, this.configs.recheck);
			}
		}
	}, {
		key: 'pageLoaded',
		value: function pageLoaded() {
			console.log('Page Loaded.');
			$(this.configs.element).delay(this.configs.delay).fadeOut(this.configs.velocity);
		}
	}]);

	return Loader;
}();

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = exports.Menu = function () {
	function Menu() {
		_classCallCheck(this, Menu);

		this.configs = {
			'senseSpeed': 5,
			'previusScroll': 0,
			'imediate': 10,
			'openMenu': false
		};
		this.init();
	}

	_createClass(Menu, [{
		key: 'init',
		value: function init() {
			this.setDebounce();
			this.setHamburguer();
			this.setLinks();
		}
	}, {
		key: 'debounce',
		value: function debounce(func, wait, immediate) {
			var timeout = void 0;
			return function () {
				var context = this,
				    args = arguments;
				var later = function later() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		}
	}, {
		key: 'setHamburguer',
		value: function setHamburguer() {
			$(".hamburguer").on("click", function (e) {
				e.preventDefault();
				$(this).toggleClass("active");
				$(".menu-mobile").toggleClass("active");
				setTimeout(function () {
					$(".menu-mobile").toggleClass("end");
				}, 500);
				if ($(".menu-translate").hasClass('active')) {
					$(".menu-translate").toggleClass("active");
				}
			});
		}
	}, {
		key: 'setDebounce',
		value: function setDebounce() {
			var self = this;
			$(document).scroll(self.debounce(function () {
				self.go();
			}, self.configs.imediate));
		}
	}, {
		key: 'go',
		value: function go() {
			var scroller = $(document).scrollTop();
			var offset = $(window).height() * 1 / 6;
			if (scroller - this.configs.senseSpeed > this.configs.previousScroll && scroller > offset) {
				$('#header-menu').addClass('off');
				$('#header-menu').removeClass('on');
				if ($(".menu-mobile").hasClass('active')) {
					$(".hamburguer").toggleClass("active");
					$(".menu-mobile").toggleClass("active");
					setTimeout(function () {
						$(".menu-mobile").toggleClass("end");
					}, 500);
				}
			} else if (scroller + this.configs.senseSpeed < this.configs.previousScroll && scroller > offset) {
				$('#header-menu').addClass('on');
				$('#header-menu').removeClass('off');
			}
			this.configs.previousScroll = scroller;
		}
	}, {
		key: 'setLinks',
		value: function setLinks() {
			$(".go-menu").on("click", function (e) {
				e.preventDefault();
				if ($(".menu-mobile").hasClass('active')) {
					$(".hamburguer").toggleClass("active");
					$(".menu-mobile").toggleClass("active");
					setTimeout(function () {
						$(".menu-mobile").toggleClass("end");
					}, 500);
				}
				var o = $(this);
				var plus = 30;
				if (o.attr("href") === '#trabalhe-conosco') {
					plus = 0;
				}
				$("html, body").stop().animate({
					scrollTop: $(o.attr("href")).offset().top - plus
				}, 1e3, "easeOutQuart", function () {
					if (o.attr("href") !== '#seja-um-franqueado') {
						$('#header-menu').addClass('off');
						$('#header-menu').removeClass('on');
					}
				});
			});
		}
	}]);

	return Menu;
}();

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (a) {
	(jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
})(navigator.userAgent || navigator.vendor || window.opera);

var Mobile = exports.Mobile = function () {
	function Mobile() {
		_classCallCheck(this, Mobile);

		this.isMobile = null;
		this.init();
	}

	_createClass(Mobile, [{
		key: 'init',
		value: function init() {
			if ($.browser.mobile || $(document).width() < 991) {
				Mobile.isMobile = true;
				Mobile.mobileType = Mobile.getType();
			} else {
				Mobile.isMobile = false;
			}
		}
	}, {
		key: 'getType',
		value: function getType() {
			var userAgent = navigator.userAgent || navigator.vendor || window.opera;
			if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) return 'iOS';else if (userAgent.match(/Android/i)) return 'Android';
		}
	}]);

	return Mobile;
}();

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NiceScroll = exports.NiceScroll = function () {
	function NiceScroll() {
		_classCallCheck(this, NiceScroll);

		this.configs = {
			'cursorwidth': "8px",
			'zindex': 1000,
			'scrollspeed': 100,
			'mousescrollstep': 60,
			'cursoropacitymax': 0.8,
			'cursorcolor': "#F94615",
			'horizrailenabled': false,
			'cursorborder': "none",
			'cursorborderradius': "0px"
		};
		this.init();
	}

	_createClass(NiceScroll, [{
		key: 'init',
		value: function init() {
			$("html").niceScroll(this.configs);
		}
	}]);

	return NiceScroll;
}();

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Select2 = exports.Select2 = function () {
	function Select2() {
		_classCallCheck(this, Select2);

		this.selects = ['#exampleSelect1', '#exampleSelect2'];
		this.configs = {
			'minimumResultsForSearch': -1,
			'width': "100%"
		};
		this.init();
	}

	_createClass(Select2, [{
		key: 'init',
		value: function init() {
			var _this = this;

			this.selects.map(function (select) {
				$(select).select2(_this.configs);
			});
		}
	}]);

	return Select2;
}();

},{}],10:[function(require,module,exports){
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
    }, {
        key: "$",
        value: function $(selection) {
            if (!this.isEmpty(document.querySelector(selection))) return document.querySelector(selection);
        }
    }]);

    return Util;
}();

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validation = exports.Validation = function () {
	function Validation() {
		_classCallCheck(this, Validation);

		// Imports
		this.util = window.util;
		// Attributes
		this.error = null;
		this.focus = null;
		this.callBack = null;
		this.formId = null;
	}

	_createClass(Validation, [{
		key: 'setAction',
		value: function setAction(callBack) {
			var idButton = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var idForm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			this.callBack = callBack;
			this.setButton(idButton, idForm);
		}
	}, {
		key: 'setButton',
		value: function setButton() {
			var idButton = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
			var idForm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			var self = this;
			var buttonSelector = '[data-bind="send"]';
			if (idButton != null) buttonSelector = '#' + idButton + buttonSelector;
			document.querySelector(buttonSelector).addEventListener('click', function (e) {
				e.preventDefault();
				if (idForm != null) self.check(idForm);else self.check(idForm);
			});
		}
	}, {
		key: 'check',
		value: function check() {
			var _this = this;

			var idForm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			this.error = false;
			var selector = '[data-validate="true"]';
			if (idForm != null) {
				selector = '#' + idForm + selector;
			}
			var forms = [].concat(_toConsumableArray(document.querySelectorAll(selector)));
			forms.map(function (form) {
				_this.focus = null;
				var required = [].concat(_toConsumableArray(form.querySelectorAll('[data-check="required"]')));
				var email = [].concat(_toConsumableArray(form.querySelectorAll('[data-check="email"]')));
				var select = [].concat(_toConsumableArray(form.querySelectorAll('[data-check="select"]')));
				required.map(function (element) {
					_this.validate(element, "required");
				});
				email.map(function (element) {
					_this.validate(element, "email");
				});
				select.map(function (element) {
					_this.validate(element, "select");
				});
			});
			if (!this.error) {
				if (this.callBack != null) this.callBack();
			} else {
				this.focus.focus();
			}
		}
	}, {
		key: 'resetError',
		value: function resetError(element) {
			element.classList.remove("error");
		}
	}, {
		key: 'setError',
		value: function setError(element) {
			if (this.focus == null) this.focus = element;
			element.classList.add("error");
			this.error = true;
		}
	}, {
		key: 'validate',
		value: function validate(element, type) {
			this.resetError(element);
			switch (type) {
				case "required":
					if (this.util.isEmpty(element.value)) this.setError(element);
					break;
				case "email":
					var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
					if (!re.test(element.value) || this.util.isEmpty(element.value)) this.setError(element);
					break;
				case "select":
					if (element.options[element.selectedIndex].value == "0") this.setError(element);
					break;
			}
		}
	}]);

	return Validation;
}();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9jb21tb24vY29tbW9uLmpzIiwianMvbW9kdWxlcy9idXR0b24tYWN0aW9ucy5qcyIsImpzL21vZHVsZXMvY29uZmlnLXNjcm9sbC1yZXZlYWwuanMiLCJqcy9tb2R1bGVzL2lucHV0LW1hc2suanMiLCJqcy9tb2R1bGVzL2xvYWRlci5qcyIsImpzL21vZHVsZXMvbWVudS5qcyIsImpzL21vZHVsZXMvbW9iaWxlLmpzIiwianMvbW9kdWxlcy9uaWNlLXNjcm9sbC5qcyIsImpzL21vZHVsZXMvc2VsZWN0Mi5qcyIsImpzL21vZHVsZXMvdXRpbC5qcyIsImpzL21vZHVsZXMvdmFsaWRhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBO0FBQ0EsT0FBQSxJQUFBLEdBQW9CLElBQXBCLFVBQW9CLEVBQXBCO0FBQ0EsT0FBQSxVQUFBLEdBQW9CLElBQXBCLHNCQUFvQixFQUFwQjs7QUFFQTtBQUNBLE9BQUEsTUFBQSxHQUFnQixJQUFoQixjQUFnQixFQUFoQjtBQUNBLE9BQUEsTUFBQSxHQUFBLEtBQUE7O0lBRUEsTSxHQUNJLGtCQUFhO0FBQUE7O0FBQ2YsTUFBQSxNQUFBLEdBQTBCLElBQTFCLGNBQTBCLEVBQTFCO0FBQ0EsTUFBQSxVQUFBLEdBQTBCLElBQTFCLHNCQUEwQixFQUExQjtBQUNBLE1BQUEsa0JBQUEsR0FBMEIsSUFBMUIsc0NBQTBCLEVBQTFCO0FBQ0EsTUFBQSxTQUFBLEdBQTBCLElBQTFCLG9CQUEwQixFQUExQjtBQUNBLE1BQUEsT0FBQSxHQUEwQixJQUExQixlQUEwQixFQUExQjtBQUNBLE1BQUEsSUFBQSxHQUEwQixJQUExQixVQUEwQixFQUExQjtBQUNBLE1BQUEsYUFBQSxHQUEwQixJQUExQiw0QkFBMEIsRUFBMUI7QUFDQSxD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bUI7QUFDbEIsV0FBQSxTQUFBLENBQUEsTUFBQSxDQUFBLE9BQUE7QUFDQTs7OzJCQUNELE8sRUFBaUI7QUFDaEIsT0FBSSxLQUFBLEtBQUEsSUFBSixJQUFBLEVBQXdCLEtBQUEsS0FBQSxHQUFBLE9BQUE7QUFDeEIsV0FBQSxTQUFBLENBQUEsR0FBQSxDQUFBLE9BQUE7QUFDQSxRQUFBLEtBQUEsR0FBQSxJQUFBO0FBQ0E7OzsyQkFDRCxPLEVBQUEsSSxFQUF1QjtBQUN0QixRQUFBLFVBQUEsQ0FBQSxPQUFBO0FBQ0EsV0FBQSxJQUFBO0FBQ0MsU0FBQSxVQUFBO0FBQ0MsU0FBSSxLQUFBLElBQUEsQ0FBQSxPQUFBLENBQWtCLFFBQXRCLEtBQUksQ0FBSixFQUNDLEtBQUEsUUFBQSxDQUFBLE9BQUE7QUFDRDtBQUNELFNBQUEsT0FBQTtBQUNDLFNBQUksS0FBSiwwQ0FBQTtBQUNBLFNBQUksQ0FBQyxHQUFBLElBQUEsQ0FBUSxRQUFULEtBQUMsQ0FBRCxJQUEyQixLQUFBLElBQUEsQ0FBQSxPQUFBLENBQWtCLFFBQWpELEtBQStCLENBQS9CLEVBQ0MsS0FBQSxRQUFBLENBQUEsT0FBQTtBQUNEO0FBQ0QsU0FBQSxRQUFBO0FBQ0MsU0FBSSxRQUFBLE9BQUEsQ0FBZ0IsUUFBaEIsYUFBQSxFQUFBLEtBQUEsSUFBSixHQUFBLEVBQ0MsS0FBQSxRQUFBLENBQUEsT0FBQTtBQUNEO0FBYkY7QUFlQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IFV0aWwgfSAgICAgICAgICAgICAgIGZyb20gJy4uL21vZHVsZXMvdXRpbCdcbmltcG9ydCB7IFZhbGlkYXRpb24gfSAgICAgICAgIGZyb20gJy4uL21vZHVsZXMvdmFsaWRhdGlvbidcbmltcG9ydCB7IExvYWRlciB9ICAgICAgICAgICAgIGZyb20gJy4uL21vZHVsZXMvbG9hZGVyJ1xuaW1wb3J0IHsgTmljZVNjcm9sbCB9ICAgICAgICAgZnJvbSAnLi4vbW9kdWxlcy9uaWNlLXNjcm9sbCdcbmltcG9ydCB7IE1vYmlsZSB9ICAgICAgICAgICAgIGZyb20gJy4uL21vZHVsZXMvbW9iaWxlJ1xuaW1wb3J0IHsgQ29uZmlnU2Nyb2xsUmV2ZWFsIH0gZnJvbSAnLi4vbW9kdWxlcy9jb25maWctc2Nyb2xsLXJldmVhbCdcbmltcG9ydCB7IElucHV0TWFzayB9ICAgICAgICAgIGZyb20gJy4uL21vZHVsZXMvaW5wdXQtbWFzaydcbmltcG9ydCB7IFNlbGVjdDIgfSAgICAgICAgICAgIGZyb20gJy4uL21vZHVsZXMvc2VsZWN0MidcbmltcG9ydCB7IE1lbnUgfSAgICAgICAgICAgICAgIGZyb20gJy4uL21vZHVsZXMvbWVudSdcbmltcG9ydCB7IEJ1dHRvbkFjdGlvbnMgfSAgICAgIGZyb20gJy4uL21vZHVsZXMvYnV0dG9uLWFjdGlvbnMnXG5cbi8vIEV4cG9ydHNcbndpbmRvdy51dGlsICAgICAgID0gbmV3IFV0aWwoKVxud2luZG93LnZhbGlkYXRpb24gPSBuZXcgVmFsaWRhdGlvbigpXG5cbi8vIEdsb2JhbCBMb2FkZXJcbndpbmRvdy5sb2FkZXIgPSBuZXcgTG9hZGVyKClcbndpbmRvdy5sb2FkZWQgPSBmYWxzZVxuXG5jbGFzcyBDb21tb24ge1xuICAgIGNvbnN0cnVjdG9yKCl7XG5cdFx0dGhpcy5tb2JpbGUgICAgICAgICAgICAgPSBuZXcgTW9iaWxlKClcblx0XHR0aGlzLm5pY2VTY3JvbGwgICAgICAgICA9IG5ldyBOaWNlU2Nyb2xsKClcblx0XHR0aGlzLmNvbmZpZ1Njcm9sbFJldmVhbCA9IG5ldyBDb25maWdTY3JvbGxSZXZlYWwoKVxuXHRcdHRoaXMuaW5wdXRNYXNrICAgICAgICAgID0gbmV3IElucHV0TWFzaygpXG5cdFx0dGhpcy5zZWxlY3QyICAgICAgICAgICAgPSBuZXcgU2VsZWN0MigpXG5cdFx0dGhpcy5tZW51ICAgICAgICAgICAgICAgPSBuZXcgTWVudSgpXG5cdFx0dGhpcy5idXR0b25BY3Rpb25zICAgICAgPSBuZXcgQnV0dG9uQWN0aW9ucygpXG5cdH1cbn1cblxuJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKXtcblx0d2luZG93LmxvYWRlZCA9IHRydWVcblx0d2luZG93LmNvbW1vbiA9IG5ldyBDb21tb24oKVxufSk7IiwiZXhwb3J0IGNsYXNzIEJ1dHRvbkFjdGlvbnMge1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHRoaXMuaW5pdCgpXG5cdH1cblx0aW5pdCgpe1xuXHR9XG59IiwiZXhwb3J0IGNsYXNzIENvbmZpZ1Njcm9sbFJldmVhbCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuY29uZmlncyA9IHtcblx0XHRcdCdhbmltYXRpb25TZXQxJyA6IHtcblx0XHRcdFx0J2R1cmF0aW9uJyAgOiAxMjAwLFxuXHRcdFx0XHQnb3JpZ2luJyAgICA6ICdsZWZ0Jyxcblx0XHRcdFx0J3Jlc2V0JyAgICAgOiB0cnVlLFxuXHRcdFx0XHQnZGVsYXknICAgICA6IDEwMCxcblx0XHRcdFx0J3NjYWxlJyAgICAgOiAwLjksXG5cdFx0XHR9LFxuXHRcdFx0J2FuaW1hdGlvblNldDInIDoge1xuXHRcdFx0XHQnZHVyYXRpb24nICA6IDEyMDAsXG5cdFx0XHRcdCdvcmlnaW4nICAgIDogJ3RvcCcsXG5cdFx0XHRcdCdyZXNldCcgICAgIDogdHJ1ZSxcblx0XHRcdFx0J2RlbGF5JyAgICAgOiAxMDAsXG5cdFx0XHRcdCdzY2FsZScgICAgIDogMC45XG5cdFx0XHR9LFxuXHRcdFx0J2FuaW1hdGlvblNldDMnIDoge1xuXHRcdFx0XHQnZHVyYXRpb24nICA6IDEyMDAsXG5cdFx0XHRcdCdvcmlnaW4nICAgIDogJ2JvdHRvbScsXG5cdFx0XHRcdCdyZXNldCcgICAgIDogdHJ1ZSxcblx0XHRcdFx0J2RlbGF5JyAgICAgOiA4MDAsXG5cdFx0XHRcdCdzY2FsZScgICAgIDogMC45XG5cdFx0XHR9LFxuXHRcdFx0J2FuaW1hdGlvblNldDQnIDoge1xuXHRcdFx0XHQnZHVyYXRpb24nICA6IDEyMDAsXG5cdFx0XHRcdCdvcmlnaW4nICAgIDogJ3JpZ2h0Jyxcblx0XHRcdFx0J3Jlc2V0JyAgICAgOiB0cnVlLFxuXHRcdFx0XHQnZGVsYXknICAgICA6IDEwMCxcblx0XHRcdFx0J3NjYWxlJyAgICAgOiAwLjksXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuaW5pdCgpXG5cdH1cblx0aW5pdCgpIHtcblx0XHR3aW5kb3cuc3IgPSBTY3JvbGxSZXZlYWwoKVxuXHRcdHNyLnJldmVhbCgnLmFuaW1hdGlvbi0xJywgdGhpcy5jb25maWdzLmFuaW1hdGlvblNldDEpXG5cdFx0c3IucmV2ZWFsKCcuYW5pbWF0aW9uLTInLCB0aGlzLmNvbmZpZ3MuYW5pbWF0aW9uU2V0MiwgNTApXG5cdFx0c3IucmV2ZWFsKCcuYW5pbWF0aW9uLTMnLCB0aGlzLmNvbmZpZ3MuYW5pbWF0aW9uU2V0Mylcblx0XHRzci5yZXZlYWwoJy5hbmltYXRpb24tNCcsIHRoaXMuY29uZmlncy5hbmltYXRpb25TZXQ0KVxuXHR9XG59IiwiZXhwb3J0IGNsYXNzIElucHV0TWFzayB7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0dGhpcy5pbml0KClcblx0fVxuXHRpbml0KCkge1xuXHRcdCQoXCIubWFza1wiKS5pbnB1dG1hc2soKTtcblx0fVxufSIsImV4cG9ydCBjbGFzcyBMb2FkZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmNvbmZpZ3MgPSB7XG5cdFx0XHQnZGVsYXknICAgIDogNTAwLFxuXHRcdFx0J3JlY2hlY2snICA6IDIwMDAsXG5cdFx0XHQndmVsb2NpdHknIDogXCJzbG93XCIsXG5cdFx0XHQnZWxlbWVudCcgIDogJyNsb2FkZXInXG5cdFx0fVxuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cdGluaXQoKXtcblx0XHRpZiAod2luZG93LmxvYWRlZClcblx0XHRcdHRoaXMucGFnZUxvYWRlZCgpXG5cdFx0ZWxzZXtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdMb2FkaW5nLi4uJylcblx0XHRcdFx0c2VsZi5pbml0KCk7XG5cdFx0XHR9LCB0aGlzLmNvbmZpZ3MucmVjaGVjayk7XG5cdFx0fVxuXHR9XG5cdHBhZ2VMb2FkZWQoKXtcblx0XHRjb25zb2xlLmxvZygnUGFnZSBMb2FkZWQuJylcblx0XHQkKHRoaXMuY29uZmlncy5lbGVtZW50KS5kZWxheSh0aGlzLmNvbmZpZ3MuZGVsYXkpLmZhZGVPdXQodGhpcy5jb25maWdzLnZlbG9jaXR5KTtcblx0fVxufSIsImV4cG9ydCBjbGFzcyBNZW51IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5jb25maWdzID0ge1xuXHRcdFx0J3NlbnNlU3BlZWQnICAgIDogNSxcblx0XHRcdCdwcmV2aXVzU2Nyb2xsJyA6IDAsXG5cdFx0XHQnaW1lZGlhdGUnICAgICAgOiAxMCxcblx0XHRcdCdvcGVuTWVudScgICAgICA6IGZhbHNlLFxuXHRcdH1cblx0XHR0aGlzLmluaXQoKVxuXHR9XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5zZXREZWJvdW5jZSgpXG5cdFx0dGhpcy5zZXRIYW1idXJndWVyKClcblx0XHR0aGlzLnNldExpbmtzKClcblx0fVxuXHRkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpe1xuXHRcdGxldCB0aW1lb3V0XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0IGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzXG5cdFx0XHRsZXQgbGF0ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dGltZW91dCA9IG51bGxcblx0XHRcdFx0aWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcblx0XHRcdH1cblx0XHRcdGxldCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0XG5cdFx0XHRjbGVhclRpbWVvdXQodGltZW91dClcblx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KVxuXHRcdFx0aWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcblx0XHR9XG5cdH1cblx0c2V0SGFtYnVyZ3Vlcigpe1xuXHRcdCQoXCIuaGFtYnVyZ3VlclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdFx0XHQkKFwiLm1lbnUtbW9iaWxlXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQoXCIubWVudS1tb2JpbGVcIikudG9nZ2xlQ2xhc3MoXCJlbmRcIik7XG5cdFx0XHR9LCA1MDApO1xuXHRcdFx0aWYgKCQoXCIubWVudS10cmFuc2xhdGVcIikuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG5cdFx0XHRcdCQoXCIubWVudS10cmFuc2xhdGVcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0c2V0RGVib3VuY2UoKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXNcblx0XHQkKGRvY3VtZW50KS5zY3JvbGwoc2VsZi5kZWJvdW5jZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWxmLmdvKClcblx0XHR9LCBzZWxmLmNvbmZpZ3MuaW1lZGlhdGUpKTtcblx0fVxuXHRnbygpIHtcblx0XHRsZXQgc2Nyb2xsZXIgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKTtcblx0XHRsZXQgb2Zmc2V0ID0gJCh3aW5kb3cpLmhlaWdodCgpICogMSAvIDY7XG5cdFx0aWYgKHNjcm9sbGVyIC0gdGhpcy5jb25maWdzLnNlbnNlU3BlZWQgPiB0aGlzLmNvbmZpZ3MucHJldmlvdXNTY3JvbGwgJiYgc2Nyb2xsZXIgPiBvZmZzZXQpIHtcblx0XHRcdCQoJyNoZWFkZXItbWVudScpLmFkZENsYXNzKCdvZmYnKTtcblx0XHRcdCQoJyNoZWFkZXItbWVudScpLnJlbW92ZUNsYXNzKCdvbicpO1xuXHRcdFx0aWYgKCQoXCIubWVudS1tb2JpbGVcIikuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG5cdFx0XHRcdCQoXCIuaGFtYnVyZ3VlclwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHRcdFx0JChcIi5tZW51LW1vYmlsZVwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0JChcIi5tZW51LW1vYmlsZVwiKS50b2dnbGVDbGFzcyhcImVuZFwiKTtcblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHNjcm9sbGVyICsgdGhpcy5jb25maWdzLnNlbnNlU3BlZWQgPCB0aGlzLmNvbmZpZ3MucHJldmlvdXNTY3JvbGwgJiYgc2Nyb2xsZXIgPiBvZmZzZXQpIHtcblx0XHRcdCQoJyNoZWFkZXItbWVudScpLmFkZENsYXNzKCdvbicpO1xuXHRcdFx0JCgnI2hlYWRlci1tZW51JykucmVtb3ZlQ2xhc3MoJ29mZicpO1xuXHRcdH1cblx0XHR0aGlzLmNvbmZpZ3MucHJldmlvdXNTY3JvbGwgPSBzY3JvbGxlcjtcblx0fVxuXHRzZXRMaW5rcygpe1xuXHRcdCQoXCIuZ28tbWVudVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiAoJChcIi5tZW51LW1vYmlsZVwiKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcblx0XHRcdFx0JChcIi5oYW1idXJndWVyXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdFx0XHQkKFwiLm1lbnUtbW9iaWxlXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQkKFwiLm1lbnUtbW9iaWxlXCIpLnRvZ2dsZUNsYXNzKFwiZW5kXCIpO1xuXHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0fVxuXHRcdFx0bGV0IG8gPSAkKHRoaXMpO1xuXHRcdFx0bGV0IHBsdXMgPSAzMDtcblx0XHRcdGlmIChvLmF0dHIoXCJocmVmXCIpID09PSAnI3RyYWJhbGhlLWNvbm9zY28nKSB7XG5cdFx0XHRcdHBsdXMgPSAwO1xuXHRcdFx0fVxuXHRcdFx0JChcImh0bWwsIGJvZHlcIikuc3RvcCgpLmFuaW1hdGUoe1xuXHRcdFx0XHRzY3JvbGxUb3A6ICQoby5hdHRyKFwiaHJlZlwiKSkub2Zmc2V0KCkudG9wIC0gcGx1c1xuXHRcdFx0fSwgMWUzLCBcImVhc2VPdXRRdWFydFwiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmIChvLmF0dHIoXCJocmVmXCIpICE9PSAnI3NlamEtdW0tZnJhbnF1ZWFkbycpIHtcblx0XHRcdFx0XHQkKCcjaGVhZGVyLW1lbnUnKS5hZGRDbGFzcygnb2ZmJyk7XG5cdFx0XHRcdFx0JCgnI2hlYWRlci1tZW51JykucmVtb3ZlQ2xhc3MoJ29uJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pXG5cdH1cbn0iLCIoZnVuY3Rpb24gKGEpIHtcblx0KGpRdWVyeS5icm93c2VyID0galF1ZXJ5LmJyb3dzZXIgfHwge30pLm1vYmlsZSA9IC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpXG59KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKTtcblxuZXhwb3J0IGNsYXNzIE1vYmlsZSB7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0dGhpcy5pc01vYmlsZSA9IG51bGxcblx0XHR0aGlzLmluaXQoKVxuXHR9XG5cdGluaXQoKXtcblx0XHRpZiAoJC5icm93c2VyLm1vYmlsZSB8fCAkKGRvY3VtZW50KS53aWR0aCgpIDwgOTkxKSB7XG5cdFx0XHRNb2JpbGUuaXNNb2JpbGUgPSB0cnVlO1xuXHRcdFx0TW9iaWxlLm1vYmlsZVR5cGUgPSBNb2JpbGUuZ2V0VHlwZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRNb2JpbGUuaXNNb2JpbGUgPSBmYWxzZTtcblx0XHR9XG5cdH1cblx0Z2V0VHlwZSgpe1xuXHRcdHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhO1xuXHRcdGlmICh1c2VyQWdlbnQubWF0Y2goL2lQYWQvaSkgfHwgdXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSkgfHwgdXNlckFnZW50Lm1hdGNoKC9pUG9kL2kpKVxuXHRcdFx0cmV0dXJuICdpT1MnO1xuXHRcdGVsc2UgaWYgKHVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKSlcblx0XHRcdHJldHVybiAnQW5kcm9pZCc7XG5cdH1cbn0iLCJleHBvcnQgY2xhc3MgTmljZVNjcm9sbCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuY29uZmlncyA9IHtcblx0XHRcdCdjdXJzb3J3aWR0aCcgICAgICAgIDogXCI4cHhcIixcblx0XHRcdCd6aW5kZXgnICAgICAgICAgICAgIDogMTAwMCxcblx0XHRcdCdzY3JvbGxzcGVlZCcgICAgICAgIDogMTAwLFxuXHRcdFx0J21vdXNlc2Nyb2xsc3RlcCcgICAgOiA2MCxcblx0XHRcdCdjdXJzb3JvcGFjaXR5bWF4JyAgIDogMC44LFxuXHRcdFx0J2N1cnNvcmNvbG9yJyAgICAgICAgOiBcIiNGOTQ2MTVcIixcblx0XHRcdCdob3JpenJhaWxlbmFibGVkJyAgIDogZmFsc2UsXG5cdFx0XHQnY3Vyc29yYm9yZGVyJyAgICAgICA6IFwibm9uZVwiLFxuXHRcdFx0J2N1cnNvcmJvcmRlcnJhZGl1cycgOiBcIjBweFwiXG5cdFx0fVxuXHRcdHRoaXMuaW5pdCgpXG5cdH1cblx0aW5pdCgpIHtcblx0XHQkKFwiaHRtbFwiKS5uaWNlU2Nyb2xsKHRoaXMuY29uZmlncylcblx0fVxufSIsImV4cG9ydCBjbGFzcyBTZWxlY3QyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5zZWxlY3RzID0gW1xuXHRcdFx0JyNleGFtcGxlU2VsZWN0MScsXG5cdFx0XHQnI2V4YW1wbGVTZWxlY3QyJ1xuXHRcdF1cblx0XHR0aGlzLmNvbmZpZ3MgPSB7XG5cdFx0XHQnbWluaW11bVJlc3VsdHNGb3JTZWFyY2gnIDogLTEsXG5cdFx0XHQnd2lkdGgnICAgICAgICAgICAgICAgICAgIDogXCIxMDAlXCIsXG5cdFx0fVxuXHRcdHRoaXMuaW5pdCgpXG5cdH1cblx0aW5pdCgpIHtcblx0XHR0aGlzLnNlbGVjdHMubWFwKChzZWxlY3QpID0+IHtcblx0XHRcdCQoc2VsZWN0KS5zZWxlY3QyKHRoaXMuY29uZmlncylcblx0XHR9KVxuXHR9XG59IiwiZXhwb3J0IGNsYXNzIFV0aWwge1xuICAgIGlzRW1wdHkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSA9PSBcIlwiIHx8IHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT0gdW5kZWZpbmVkKVxuICAgIH1cbiAgICBmZXRjaCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cdH1cblx0JChzZWxlY3Rpb24pe1xuXHRcdGlmICghdGhpcy5pc0VtcHR5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0aW9uKSkpXG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rpb24pO1xuXHR9XG59IiwiZXhwb3J0IGNsYXNzIFZhbGlkYXRpb24ge1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdC8vIEltcG9ydHNcblx0XHR0aGlzLnV0aWwgICAgID0gd2luZG93LnV0aWxcblx0XHQvLyBBdHRyaWJ1dGVzXG5cdFx0dGhpcy5lcnJvciAgICA9IG51bGxcblx0XHR0aGlzLmZvY3VzICAgID0gbnVsbFxuXHRcdHRoaXMuY2FsbEJhY2sgPSBudWxsXG5cdFx0dGhpcy5mb3JtSWQgICA9IG51bGxcblx0fVxuXHRzZXRBY3Rpb24oY2FsbEJhY2ssIGlkQnV0dG9uID0gbnVsbCwgaWRGb3JtID0gbnVsbCl7XG5cdFx0dGhpcy5jYWxsQmFjayA9IGNhbGxCYWNrXG5cdFx0dGhpcy5zZXRCdXR0b24oaWRCdXR0b24sIGlkRm9ybSlcblx0fVxuXHRzZXRCdXR0b24oaWRCdXR0b24gPSBudWxsLCBpZEZvcm0gPSBudWxsKXtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRsZXQgYnV0dG9uU2VsZWN0b3IgPSAnW2RhdGEtYmluZD1cInNlbmRcIl0nXG5cdFx0aWYoaWRCdXR0b24gIT0gbnVsbClcblx0XHRcdGJ1dHRvblNlbGVjdG9yID0gJyMnICsgaWRCdXR0b24gKyBidXR0b25TZWxlY3Rvcjtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvblNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZihpZEZvcm0gIT0gbnVsbClcblx0XHRcdFx0c2VsZi5jaGVjayhpZEZvcm0pXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHNlbGYuY2hlY2soaWRGb3JtKVxuXHRcdH0pO1xuXHR9XG5cdGNoZWNrKGlkRm9ybSA9IG51bGwpe1xuXHRcdHRoaXMuZXJyb3IgPSBmYWxzZVxuXHRcdGxldCBzZWxlY3RvciA9ICdbZGF0YS12YWxpZGF0ZT1cInRydWVcIl0nO1xuXHRcdGlmIChpZEZvcm0gIT0gbnVsbCkge1xuXHRcdFx0c2VsZWN0b3IgPSAnIycgKyBpZEZvcm0gKyBzZWxlY3Rvcjtcblx0XHR9XG5cdFx0Y29uc3QgZm9ybXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcildXG5cdFx0Zm9ybXMubWFwKChmb3JtKSA9PiB7XG5cdFx0XHR0aGlzLmZvY3VzID0gbnVsbDtcblx0XHRcdGNvbnN0IHJlcXVpcmVkID0gWy4uLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2hlY2s9XCJyZXF1aXJlZFwiXScpXVxuXHRcdFx0Y29uc3QgZW1haWwgICAgPSBbLi4uZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jaGVjaz1cImVtYWlsXCJdJyldXG5cdFx0XHRjb25zdCBzZWxlY3QgICA9IFsuLi5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNoZWNrPVwic2VsZWN0XCJdJyldXG5cdFx0XHRyZXF1aXJlZC5tYXAoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0dGhpcy52YWxpZGF0ZShlbGVtZW50LCBcInJlcXVpcmVkXCIpXG5cdFx0XHR9KVxuXHRcdFx0ZW1haWwubWFwKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdHRoaXMudmFsaWRhdGUoZWxlbWVudCwgXCJlbWFpbFwiKVxuXHRcdFx0fSlcblx0XHRcdHNlbGVjdC5tYXAoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0dGhpcy52YWxpZGF0ZShlbGVtZW50LCBcInNlbGVjdFwiKVxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdGlmKCF0aGlzLmVycm9yKXtcblx0XHRcdGlmKHRoaXMuY2FsbEJhY2sgIT0gbnVsbClcblx0XHRcdFx0dGhpcy5jYWxsQmFjaygpXG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHR0aGlzLmZvY3VzLmZvY3VzKClcblx0XHR9XG5cdH1cblx0cmVzZXRFcnJvcihlbGVtZW50KXtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKVxuXHR9XG5cdHNldEVycm9yKGVsZW1lbnQpe1xuXHRcdGlmICh0aGlzLmZvY3VzID09IG51bGwpIHRoaXMuZm9jdXMgPSBlbGVtZW50O1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuXHRcdHRoaXMuZXJyb3IgPSB0cnVlO1xuXHR9XG5cdHZhbGlkYXRlKGVsZW1lbnQsIHR5cGUpe1xuXHRcdHRoaXMucmVzZXRFcnJvcihlbGVtZW50KVxuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSBcInJlcXVpcmVkXCI6XG5cdFx0XHRcdGlmICh0aGlzLnV0aWwuaXNFbXB0eShlbGVtZW50LnZhbHVlKSlcblx0XHRcdFx0XHR0aGlzLnNldEVycm9yKGVsZW1lbnQpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImVtYWlsXCI6XG5cdFx0XHRcdHZhciByZSA9IC9bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dKy5bQS1aXXsyLDR9L2lnbTtcblx0XHRcdFx0aWYgKCFyZS50ZXN0KGVsZW1lbnQudmFsdWUpIHx8IHRoaXMudXRpbC5pc0VtcHR5KGVsZW1lbnQudmFsdWUpKVxuXHRcdFx0XHRcdHRoaXMuc2V0RXJyb3IoZWxlbWVudClcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwic2VsZWN0XCI6XG5cdFx0XHRcdGlmIChlbGVtZW50Lm9wdGlvbnNbZWxlbWVudC5zZWxlY3RlZEluZGV4XS52YWx1ZSA9PSBcIjBcIilcblx0XHRcdFx0XHR0aGlzLnNldEVycm9yKGVsZW1lbnQpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxufSJdfQ==
