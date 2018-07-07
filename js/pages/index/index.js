import { BindsIndex } from './binds-index'

class Index{
	constructor(){
		// Binds
		this.bindsIndex = new BindsIndex()
		// Imports
		this.util = window.util
		// Executors
		this.execJoker()
	}
	execJoker() {
		const url = 'http://api.icndb.com/jokes/random'
		this.util.fetch(url)
			.then(data => {
				this.util.$('.load-joke').innerHTML = data.value.joke
			})
	}
}

$(document).ready(function(){
	window.index = new Index()
})