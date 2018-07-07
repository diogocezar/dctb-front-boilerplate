export class Validation {
	constructor(){
		// Imports
		this.Util     = new window.util()
		// Attributes
		this.error    = null
		this.focus    = null
		this.callBack = null
		this.formId   = null
	}
	setAction(callBack, idButton = null, idForm = null){
		this.callBack = callBack
		this.setButton(idButton, idForm)
	}
	setButton(idButton = null, idForm = null){
		const self = this;
		let buttonSelector = '[data-bind="send"]'
		if(idButton != null)
			buttonSelector = '#' + idButton + buttonSelector;
		document.querySelector(buttonSelector).addEventListener('click', function (e) {
			e.preventDefault();
			if(idForm != null)
				self.check(idForm)
			else
				self.check(idForm)
		});
	}
	check(idForm = null){
		this.error = false
		let selector = '[data-validate="true"]';
		if (idForm != null) {
			selector = '#' + idForm + selector;
		}
		const forms = [...document.querySelectorAll(selector)]
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
				if (this.Util.isEmpty(element.value))
					this.setError(element)
				break;
			case "email":
				var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
				if (!re.test(element.value) || this.Util.isEmpty(element.value))
					this.setError(element)
				break;
			case "select":
				if (element.options[element.selectedIndex].value == "0")
					this.setError(element)
				break;
		}
	}
}