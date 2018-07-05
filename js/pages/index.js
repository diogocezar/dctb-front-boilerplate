import { Util } from '../modules/util'

class Index{
	constructor(){
		console.log('Start Index')
		this.util = new Util()
		this.checkEmpty()
		this.getJson()
	}
	checkEmpty(){
		console.log(this.util.isEmpty('Testing'))
	}
	getJson(){
		this.util.fetch('http://api.icndb.com/jokes/random')
		.then(data => { $('.container').empty().html(data.value.joke) })
	}
}

new Index()