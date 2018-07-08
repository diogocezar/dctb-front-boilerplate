export class Util {
	dipatchMessage(msg){
		console.log(`[LOG] ${msg}`)
	}
	dispatchError(msg){
		console.error(`[ERROR] ${msg}`)
	}
    isEmpty(value) {
        return (value == "" || value == null || value == undefined)
    }
    fetch(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    resolve(data)
                })
        })
	}
	$(selection){
		if (!this.isEmpty(document.querySelector(selection)))
			return document.querySelector(selection);
	}
}