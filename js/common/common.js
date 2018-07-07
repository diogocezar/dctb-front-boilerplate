import { Util }               from '../modules/util'
import { Validation }         from '../modules/validation'
import { Loader }             from '../modules/loader'
import { NiceScroll }         from '../modules/nice-scroll'
import { Mobile }             from '../modules/mobile'
import { ConfigScrollReveal } from '../modules/config-scroll-reveal'
import { InputMask }          from '../modules/input-mask'
import { Select2 }            from '../modules/select2'
import { Menu }               from '../modules/menu'
import { ButtonActions }      from '../modules/button-actions'

// Exports
window.util       = new Util()
window.validation = new Validation()

// Global Loader
window.loader = new Loader()
window.loaded = false

class Common {
    constructor(){
		this.mobile             = new Mobile()
		this.niceScroll         = new NiceScroll()
		this.configScrollReveal = new ConfigScrollReveal()
		this.inputMask          = new InputMask()
		this.select2            = new Select2()
		this.menu               = new Menu()
		this.buttonActions      = new ButtonActions()
	}
}

$(window).on('load', function(){
	window.loaded = true
	window.common = new Common()
});