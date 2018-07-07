export class PluginSelect2 {
	constructor() {
		this.selects = [
			'#exampleSelect1',
			'#exampleSelect2'
		]
		this.configs = {
			'minimumResultsForSearch' : -1,
			'width'                   : "100%",
		}
		this.init()
	}
	init() {
		this.selects.map((select) => {
			$(select).select2(this.configs)
		})
	}
}