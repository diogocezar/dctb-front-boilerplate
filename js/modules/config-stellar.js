export class ConfigStellar {
	constructor() {
		this.configs = {
			'horizontalScrolling' : false
		}
		this.init()
	}
	init() {
		$(window).stellar(this.configs)
	}
}