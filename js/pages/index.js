class Index{
	constructor(){
		console.log('Start Index')
		window.validation.setAction(() => {
			console.log('send')
		})
		this.getJson()
	}
	getJson(){
		window.util.fetch('http://api.icndb.com/jokes/random')
		.then(data => { window.util.$('.load-joke').innerHTML = data.value.joke })
	}
}

new Index()