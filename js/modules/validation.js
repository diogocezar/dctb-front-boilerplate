export class Validation {
	constructor(){
		this.error    = null
		this.focus    = null
		this.callBack = null
		this.setButton()
	}
	setAction(callBack){
		this.callBack = callBack
	}
	setButton(){
		const self = this;
		document.querySelector('[data-bind="send"]').addEventListener('click', function (e) {
			e.preventDefault();
			self.check(e)
		});
	}
	check(){
		this.error = false
		const forms = [...document.querySelectorAll('[data-validate="true"]')]
		forms.map((form) => {
			this.focus = null;
			const required = [...form.querySelectorAll('[data-check="required"]')]
			const email    = [...form.querySelectorAll('[data-check="email"]')]
			const select   = [...form.querySelectorAll('[data-check="select"]')]
			required.map((element) => {
				this.validate(element, "required")
			})
			email.map((element) => {
				this.validate(element, "email")
			})
			select.map((element) => {
				this.validate(element, "select")
			})
		})
		if(!this.error){
			if(this.callBack != null)
				this.callBack()
		}
		else{
			console.log('Erro.')
			this.focus.focus()
		}
	}
	resetError(element){
		element.classList.remove("error")
	}
	setError(element){
		if (this.focus == null) this.focus = element;
		element.classList.add("error");
		this.error = true;
	}
	validate(element, type){
		this.resetError(element)
		switch (type) {
			case "required":
				if (window.util.isEmpty(element.value))
					this.setError(element)
				break;
			case "email":
				var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
				if (!re.test(element.value) || this.isEmpty(element.value))
					this.setError(element)
				break;
			case "select":
				if (element.options[element.selectedIndex].value == "0")
					this.setError(element)
				break;
		}
	}
}