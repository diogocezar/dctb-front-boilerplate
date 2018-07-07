export class FormGetcher {
	constructor(){
		this.data = {}
	}
	getData(idForm = null) {
		let selector = '#' + idForm;
		const form = document.querySelector(selector)
		const inputs = [...form.querySelectorAll('input')]
		const textAreas = [...form.querySelectorAll('textarea')]
		const selects = [...form.querySelectorAll('select')]
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
	getJSON(idForm = null){
		return JSON.stringify(this.getData(idForm));
	}
}