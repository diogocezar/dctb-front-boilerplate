// Binds
import { SharedBinds } from '../modules/binds/shared-binds'

// Helpers
import { Cookies }    from '../modules/helpers/cookies'
import { Mobile }     from '../modules/helpers/mobile'
import { Util }       from '../modules/helpers/util'
import { Validation } from '../modules/helpers/validation'

// Loader
import { Loader } from '../modules/loader/loader'

// Menu
import { Menu } from '../modules/menu/menu'

// Plugins
import { PluginInputMask }    from '../modules/plugins/plugin-input-mask'
import { PluginNiceScroll }   from '../modules/plugins/plugin-nice-scroll'
import { PluginOwlCarousel }  from '../modules/plugins/plugin-owl-carousel'
import { PluginScrollReveal } from '../modules/plugins/plugin-scroll-reveal'
import { PluginSelect2 }      from '../modules/plugins/plugin-select2'

// Exports
window.cookies    = new Cookies()
window.mobile     = new Mobile()
window.util       = new Util()
window.validation = new Validation()

// Global Loader
window.loader = new Loader()
window.loaded = false

class Common {
    constructor(){
		// Menu
		this.menu = new Menu()
		// Binds
		this.sharedBinds = new SharedBinds()
		// Plugins
		this.pluginInputMask    = new PluginInputMask()
		this.pluginNiceScroll   = new PluginNiceScroll()
		this.pluginOwlCarousel  = new PluginOwlCarousel()
		this.pluginScrollReveal = new PluginScrollReveal()
		this.pluginSelect2      = new PluginSelect2()
		// Executors
		this.execSample()
	}
	execSample(){
		console.log('Started Common.')
	}
}

$(window).on('load', function(){
	window.loaded = true
	window.common = new Common()
});