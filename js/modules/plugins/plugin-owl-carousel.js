export class PluginOwlCarousel {
	constructor() {
		this.configs = {
			'loop'               : true,
			'nav'                : false,
			'pagination'         : true,
			'items'              : 1,
			'dots'               : true,
			'autoplay'           : true,
			'autoplayTimeout'    : 3000,
			'autoplayHoverPause' : true,
			'singleItem'         : true,
			'smartSpeed'         : 700
		}
		this.elementsBinds = {
			'default': '.carousel-default'
		}
		this.init()
	}
	init() {
		$(`${this.elementsBinds.default}`).owlCarousel(this.configs);
		$(`${this.elementsBinds.default}`).on('mouseout', function () {
			$(`${this.elementsBinds.default}`).trigger('stop.owl.autoplay');
			$(`${this.elementsBinds.default}`).trigger('play.owl.autoplay', [3000]);
		});
	}
}