export class ConfigScrollReveal {
	constructor() {
		this.configs = {
			'animationSet1' : {
				'duration'  : 1200,
				'origin'    : 'left',
				'reset'     : true,
				'delay'     : 100,
				'scale'     : 0.9,
			},
			'animationSet2' : {
				'duration'  : 1200,
				'origin'    : 'top',
				'reset'     : true,
				'delay'     : 100,
				'scale'     : 0.9
			},
			'animationSet3' : {
				'duration'  : 1200,
				'origin'    : 'bottom',
				'reset'     : true,
				'delay'     : 800,
				'scale'     : 0.9
			},
			'animationSet4' : {
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
		sr.reveal('.animation-1', this.configs.animationSet1)
		sr.reveal('.animation-2', this.configs.animationSet2, 50)
		sr.reveal('.animation-3', this.configs.animationSet3)
		sr.reveal('.animation-4', this.configs.animationSet4)
	}
}