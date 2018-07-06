class Index{
	constructor(){
		// Imports
		this.validation = window.validation
		this.util       = window.util
		this.$          = window.$
		// Calls
		this.validateForm()
		this.getJson()
		this.scrollTest()
	}
	scrollTest(){
		const self = this;
		this.util.$('#scroll').addEventListener('click', function(e) {
			$('html, body').animate({ scrollTop: $('footer').offset().top }, 2000)
			//self.util.$('footer').scrollIntoView({ behavior: 'smooth' })
		})
	}
	validateForm(){
		this.validation.setAction(() => {
			console.log('Sent Form 1')
		}, 'button1', 'form1')
		this.validation.setAction(() => {
			console.log('Sent Form 2')
		}, 'button2', 'form2')
	}
	getJson(){
		this.util.fetch('http://api.icndb.com/jokes/random')
			.then(data => { this.util.$('.load-joke').innerHTML = data.value.joke })
	}
}

new Index()