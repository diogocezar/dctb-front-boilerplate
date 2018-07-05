import { Util }       from '../modules/util'
import { Validation } from '../modules/validation'

window.util       = new Util()
window.validation = new Validation()

class Common {
    constructor() {
		console.log('Start App')
    }
}

new Common()