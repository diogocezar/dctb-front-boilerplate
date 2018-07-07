export class PluginNiceScroll {
	constructor() {
		this.configs = {
			'cursorwidth'        : "8px",
			'zindex'             : 1000,
			'scrollspeed'        : 100,
			'mousescrollstep'    : 60,
			'cursoropacitymax'   : 0.8,
			'cursorcolor'        : "#F94615",
			'horizrailenabled'   : false,
			'cursorborder'       : "none",
			'cursorborderradius' : "0px"
		}
		this.init()
	}
	init() {
		$("html").niceScroll(this.configs)
	}
}