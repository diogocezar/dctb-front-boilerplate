export class WebStorage {
	constructor(){
		this.util = window.util
		this.allowed = true
		try{
			if (typeof (Storage) == "undefined"){
				throw new Error(`'Sorry! no Web Storage support.`)
				this.allowed = false
			}
		}
		catch(e){
			this.util.dispatchError(e.message)
		}
	}
	set(name, value){
		try{
			if(this.Util.isEmpty(name))
				throw new Error(`'name' must be informed.`)
			else if(this.Util.isEmpty(value))
				throw new Error(`'value' must be informed.`)
			else{
				localStorage.setItem(name, value);
			}
		}
		catch(e){
			this.Util.dispatchError(e.message)
			return null;
		}
	}
	get(name){
		try {
			if (this.Util.isEmpty(name))
				throw new Error(`'name' must be informed.`)
			else {
				return localStorage.getItem(name)
			}
		} catch (e) {
			this.Util.dispatchError(e.message)
			return null;
		}
	}
}