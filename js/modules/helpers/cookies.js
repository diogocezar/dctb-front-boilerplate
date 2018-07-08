export class Cookies {
	constuctor(){
		this.Util = window.util
	}
	get(name) {
		try{
			if(this.Util.isEmpty(name))
				throw new Error(`'name' must be informed.`)
			else{
				name = name.toLowerCase()
				let array = document.cookie.split(';');
				for (let i = 0; i < array.length; i++) {
					let pair = array[i].split('=');
					let key  = decodeURIComponent(pair[0].trim().toLowerCase());
					let value = pair.length > 1 ? pair[1] : '';
					if (key == name)
						return decodeURIComponent(value);
				}
				return null;
			}
		}
		catch(e){
			this.Util.dispatchError(e.message)
			return null;
		}
	}
	set(name, value) {
		try{
			if(this.Util.isEmpty(name))
				throw new Error(`'name' must be informed.`)
			else if(this.Util.isEmpty(value))
				throw new Error(`'value' must be informed.`)
			else{
				let date = new Date();
				date.setYear(date.getFullYear() + 1);
				let cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';expires=' + date.toGMTString() + ';path=/';
				document.cookie = cookie;
			}
		}
		catch(e){
			this.Util.dispatchError(e.message)
			return null;
		}
	}
	clear(name){
		try{
			if(this.Util.isEmpty(name))
				throw new Error(`'name' must be informed.`)
			else{
				this.set(name, '')
			}
		}
		catch(e){
			this.Util.dispatchError(e.message)
			return null;
		}
	}
	remove(name){
		try{
			if(this.Util.isEmpty(name))
				throw new Error(`'name' must be informed.`)
			else{
				document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
			}
		}
		catch(e){
			this.Util.dispatchError(e.message)
			return null;
		}
	}
}