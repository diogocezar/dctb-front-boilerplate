export class PluginSelect2 {
	constructor() {
		this.configs = {
			'minimumResultsForSearch' : -1,
			'width'                   : "100%",
		}
		this.elementsBinds = [
			'#exampleSelect1',
			'#exampleSelect2'
		]
		this.init()
	}
	init() {
		this.elementsBinds.map((select) => {
			$(select).select2(this.configs)
		})
	}
}