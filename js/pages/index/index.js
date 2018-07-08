import { ActionsIndex } from './actions/actions-index'

class Index{
	constructor(){
		// Imports
		this.Util = window.util
		// Autoload
		this.autoload()
	}
	autoload(){
		this.execJoker()
	}
	execJoker() {
		const url = 'http://api.icndb.com/jokes/random'
		this.Util.fetch(url)
			.then(data => {
				this.Util.$('.load-joke').innerHTML = data.value.joke
			})
	}
	execSendForm1() {
		console.log('Form 1 Sent');
	}
	execSendForm2(){
		console.log('Form 2 Sent')
	}
}

$(document).ready(function(){
	window.index        = new Index()
	window.actionsIndex = new ActionsIndex(window.index)
})