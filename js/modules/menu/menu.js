export class Menu {
	constructor() {
		this.configs = {
			'senseSpeed': 5,
			'previusScroll': 0,
			'imediate': 10,
			'openMenu': false,
		}
		this.init()
	}
	init() {
		this.setDebounce()
		this.setHamburguer()
		this.setLinks()
	}
	debounce(func, wait, immediate) {
		let timeout
		return function () {
			let context = this,
				args = arguments
			let later = function () {
				timeout = null
				if (!immediate) func.apply(context, args)
			}
			let callNow = immediate && !timeout
			clearTimeout(timeout)
			timeout = setTimeout(later, wait)
			if (callNow) func.apply(context, args)
		}
	}
	setHamburguer() {
		$(".hamburguer").on("click", function (e) {
			e.preventDefault();
			$(this).toggleClass("active");
			$(".menu-mobile").toggleClass("active");
			setTimeout(function () {
				$(".menu-mobile").toggleClass("end");
			}, 500);
		});
	}
	setDebounce() {
		const self = this
		$(document).scroll(self.debounce(function () {
			self.go()
		}, self.configs.imediate));
	}
	go() {
		let scroller = $(document).scrollTop();
		let offset = $(window).height() * 1 / 6;
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
	setLinks() {
		$('[data-menu="true"]').on("click", function (e) {
			e.preventDefault();
			if ($(".menu-mobile").hasClass('active')) {
				$(".hamburguer").toggleClass("active")
				$(".menu-mobile").toggleClass("active")
				setTimeout(function () {
					$(".menu-mobile").toggleClass("end")
				}, 500)
			}
			let o = $(this)[0]
			$("html, body").stop().animate({
				scrollTop: $(o.hash).offset().top
			}, 1000);
		})
	}
}