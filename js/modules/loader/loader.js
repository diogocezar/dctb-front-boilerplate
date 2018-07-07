export class Loader {
	constructor() {
		this.configs = {
			'delay'    : 500,
			'recheck'  : 2000,
			'velocity' : "slow",
			'element'  : '#loader'
		}
		this.init();
	}
	init(){
		if (window.loaded)
			this.pageLoaded()
		else{
			const self = this
			setTimeout(function(){
				console.log('Still Loading...')
				self.init();
			}, this.configs.recheck);
		}
	}
	pageLoaded(){
		console.log('Okay, page is loaded!')
		$(this.configs.element).delay(this.configs.delay).fadeOut(this.configs.velocity);
	}
}