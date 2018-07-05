import { Util }       from '../modules/util'
import { Validation } from '../modules/validation'
import $              from 'jquery'
import 'popper.js'
import 'bootstrap'

window.util       = new Util()
window.validation = new Validation()
window.$          = $

class Common {
    constructor() {
		console.log('Start App')
    }
}

new Common()