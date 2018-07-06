import { Util }       from '../modules/util'
import { Validation } from '../modules/validation'
import $              from 'jquery'
import 'popper.js'
import 'bootstrap'
import 'jquery.nicescroll'
import ScrollReveal from 'scrollreveal'

// Exporting
window.util       = new Util()
window.validation = new Validation()
window.$          = $
window.sr         = ScrollReveal()

class Common {
    constructor() {
		this.niceScroll()
		this.scrollReveal()
	}
	niceScroll(){
		window.$('body').niceScroll();
	}
	scrollReveal() {
		window.sr.reveal('footer')
	}
}

new Common()