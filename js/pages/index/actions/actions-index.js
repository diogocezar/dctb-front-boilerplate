export class ActionsIndex {
	constructor(executor) {
		// Executor
		this.executor    = executor;
		// Validations
		this.Validation1 = new window.validation()
		this.Validation2 = new window.validation()
		// FormGetcher
		this.formGetcher = new window.formGetcher()
		// Autoload
		this.autoload()
	}
	autoload(){
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
		const self = this
		// Validation Form 1
		this.Validation1.setAction(() => {
			console.log(self.formGetcher.getData('form1'))
			self.executor.execSendForm1()
		}, 'button1', 'form1')
		// Validation Form 2
		this.Validation2.setAction(() => {
			console.log(self.formGetcher.getData('form2'))
			self.executor.execSendForm2()
		}, 'button2', 'form2')
	}
}