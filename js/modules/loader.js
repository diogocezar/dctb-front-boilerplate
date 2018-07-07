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
				console.log('Loading...')
				self.init();
			}, this.configs.recheck);
		}
	}
	pageLoaded(){
		console.log('Page Loaded.')
		$(this.configs.element).delay(this.configs.delay).fadeOut(this.configs.velocity);
	}
}