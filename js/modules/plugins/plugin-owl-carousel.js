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
		this.init()
	}
	init() {
		$('.carousel-default').owlCarousel(this.configs);
		$('.carousel-default').on('mouseout', function () {
			$('.carousel-default').trigger('stop.owl.autoplay');
			$('.carousel-default').trigger('play.owl.autoplay', [3000]);
		});
	}
}