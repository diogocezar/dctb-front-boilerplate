export class BindsIndex {
	constructor() {
		// Imports
		this.validation = window.validation
		this.util = window.util
		// Init
		this.init()
	}
	init(){
		this.bindButtons()
		this.bindValidations()
	}
	bindButtons() {
		// Button Scroll
		$('#scroll').on('click', function (e) {
			$('html, body').animate({
				scrollTop: $('footer').offset().top
			}, 2000)
		})
	}
	bindValidations(){
		// Validation Form 1
		this.validation.setAction(() => {
			console.log('Sent Form 1')
		}, 'button1', 'form1')
		// Validation Form 2
		this.validation.setAction(() => {
			console.log('Sent Form 2')
		}, 'button2', 'form2')
	}
}