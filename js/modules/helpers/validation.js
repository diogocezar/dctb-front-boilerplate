export class Validation {
	constructor(){
		// Imports
		this.Util     = window.util
		// Attributes
		this.error    = null
		this.focus    = null
		this.callBack = null
		this.formId   = null
		// Configs
		this.configs  = {
			'bind'           : 'data-bind',
			'bind-button'    : 'send',
			'validate'       : 'data-validate',
			'check'          : 'data-check',
			'check-required' : 'required',
			'check-email'    : 'email',
			'check-select'   : 'select',
			'error-class'    : 'error'
		}
	}
	setAction(callBack, buttonId, formId){
		try{
			if (this.Util.isEmpty(callBack))
				throw new Error(`callBack function must be informed.`)
			else if (this.Util.isEmpty(buttonId))
				throw new Error(`buttonId must be informed.`)
			else if (this.Util.isEmpty(formId))
				throw new Error(`formId must be informed.`)
			else{
				this.callBack = callBack
				this.setButton(buttonId, formId)
			}
		}
		catch (e) {
			this.Util.dispatchError(e.message)
			return null;
		}
	}
	setButton(buttonId, formId){
		const self = this;
		let buttonSelector = `[${this.configs.bind}="${this.configs["bind-button"]}"]`
		buttonSelector     = '#' + buttonId + buttonSelector;
		document.querySelector(buttonSelector).addEventListener('click', function (e) {
			e.preventDefault();
			self.check(formId)
		});
	}
	check(formId){
		this.error = false
		let selector = `[${this.configs.validate}="true"]`;
		if (formId != null) {
			selector = '#' + formId + selector;
		}
		const forms = [...document.querySelectorAll(selector)]
		forms.map((form) => {
			this.focus = null;
			const required = [...form.querySelectorAll(`[${this.configs.check}="${this.configs["check-required"]}"]`)]
			const email    = [...form.querySelectorAll(`[${this.configs.check}="${this.configs["check-email"]}"]`)]
			const select   = [...form.querySelectorAll(`[${this.configs.check}="${this.configs["check-select"]}"]`)]
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
		element.classList.remove(this.configs["error-class"])
	}
	setError(element){
		if (this.focus == null) this.focus = element;
		element.classList.add(this.configs["error-class"]);
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