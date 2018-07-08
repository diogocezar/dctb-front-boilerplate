export class PluginScrollReveal {
	constructor() {
		this.configs = {
			'.sr-1' : {
				'duration'  : 1200,
				'origin'    : 'left',
				'reset'     : true,
				'delay'     : 100,
				'scale'     : 0.9,
			},
			'.sr-2' : {
				'duration'  : 1200,
				'origin'    : 'top',
				'reset'     : true,
				'delay'     : 100,
				'scale'     : 0.9
			},
			'.s3-3' : {
				'duration'  : 1200,
				'origin'    : 'bottom',
				'reset'     : true,
				'delay'     : 800,
				'scale'     : 0.9
			},
			'.sr-4' : {
				'duration'  : 1200,
				'origin'    : 'right',
				'reset'     : true,
				'delay'     : 100,
				'scale'     : 0.9,
			}
		}
		this.init()
	}
	init() {
		window.sr = ScrollReveal()
		for(var key in this.configs)
			sr.reveal(key, this.configs[key])
	}
}