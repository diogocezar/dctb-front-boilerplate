export class FormGetcher {
	constructor(){
		this.Util = window.util
		this.data = {}
	}
	getData(formId = null){
		try{
			if(this.Util.isEmpty(formId))
				throw new Error(`'formId' must be informed.`)
			else{
				let selector    = '#' + formId;
				const form      = document.querySelector(selector)
				if(this.Util.isEmpty(form))
					throw new Error(`form with id ${formId} not found.`)
				else{
					const inputs    = [...form.querySelectorAll('input')]
					const textAreas = [...form.querySelectorAll('textarea')]
					const selects   = [...form.querySelectorAll('select')]
					inputs.map((element) => {
						this.data[element.id] = element.value
					})
					textAreas.map((element) => {
						this.data[element.id] = element.value
					})
					selects.map((element) => {
						this.data[element.id] = element.options[element.selectedIndex].value
					})
					return this.data;
				}
			}
		}
		catch(e){
			this.Util.dispatchError(e.message)
			return null;
		}
	}
	getJSON(formId = null){
		return JSON.stringify(this.getData(formId));
	}
}