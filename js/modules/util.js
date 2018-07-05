export class Util {
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
		return document.querySelector(selection);
	}
}