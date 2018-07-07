export class Cookies {
	get(name) {
		name = name.toLowerCase()
		let array = document.cookie.split(';');
		for (let i = 0; i < array.length; i++) {
			let pair = array[i].split('=');
			let key = decodeURIComponent(pair[0].trim().toLowerCase());
			let value = pair.length > 1 ? pair[1] : '';
			if (key == name)
				return decodeURIComponent(value);
		}
		return null;
	}
	set(name, value) {
		let date = new Date();
		date.setYear(date.getFullYear() + 1);
		let cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';expires=' + date.toGMTString() + ';path=/';
		document.cookie = cookie;
	}
	clear(name) {
		this.set(name, '')
	}
	remove(name) {
		document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
	}
}