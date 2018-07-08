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
		this.execJokerAxios()
	}
	execJoker() {
		const url = 'http://api.icndb.com/jokes/random'
		this.Util.fetch(url)
			.then(data => {
				this.Util.$('.load-joke').innerHTML = data.value.joke
			})
	}
	execJokerAxios(){
		const url  = 'http://api.icndb.com/jokes/random'
		const self = this
		axios.get(url)
			.then(function (response){
				self.Util.$('.load-joke-axios').innerHTML = response.data.value.joke
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