export class PluginInputMask {
	constructor(){
		this.elementsBinds = {
			'default': '.input-mask'
		}
		this.init()
	}
	init() {
		$(`${this.elementsBinds.default}`).inputmask();
	}
}