// Binds
import { SharedBinds } from '../modules/binds/shared-binds'

// Helpers
import { Cookies }     from '../modules/helpers/cookies'
import { FormGetcher } from '../modules/helpers/form-getcher'
import { Mobile }      from '../modules/helpers/mobile'
import { Util }        from '../modules/helpers/util'
import { Validation }  from '../modules/helpers/validation'
import { WebStorage }  from '../modules/helpers/webstorage'

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

// Exports Imutables
window.util        = new Util()

// Exports Constructors
window.cookies     = Cookies
window.mobile      = Mobile
window.validation  = Validation
window.formGetcher = FormGetcher
window.webstorage  = WebStorage

// Global Loader
window.loader = new Loader()
window.loaded = false

class Common {
    constructor(){
		// Util
		this.Util = window.util
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
		// Autoload
		this.autoload()
	}
	autoload(){
		this.Util.dipatchMessage('Started Common.')
	}
}

$(window).on('load', function(){
	window.loaded = true
	window.common = new Common()
});