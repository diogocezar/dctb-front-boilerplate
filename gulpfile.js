class Gulp{
	constructor(){
		this.self        = require('gulp')
		this.cssmin      = require('gulp-cssmin')
		this.sass        = require('gulp-sass')
		this.svgo        = require('gulp-svgo')
		this.imagemin    = require('gulp-imagemin')
		this.browserSync = require('browser-sync').create()
		this.babelify    = require('babelify')
		this.browserify  = require('browserify')
		this.source      = require('vinyl-source-stream')
		this.rename      = require('gulp-rename')
		this.uglify      = require('gulp-uglify')
		this.buffer      = require('vinyl-buffer')
		this.color       = require('gulp-color')
		this.createCommands();
		this.defaultGulp();
		this.watch();
	}
	startCommand(){
		console.log(this.color('[DCTB-FRONT-BOILERPLATE] ', 'MAGENTA'), this.color('Starting enviroment.', 'GREEN'))
	}
	logCommand(command, action){
		console.log(this.color(command, 'MAGENTA'), this.color(action, 'GREEN'))
	}
	logError(msg){
		console.log(this.color('ERROR ', 'RED'), this.color(msg, 'GREEN'))
	}
	createCommands(){
		// BrowserSync
		this.self.task('serve', () => {
			this.startCommand()
			this.logCommand('SERVE', 'Starting local server with BrowserSync.')
			this.browserSync.init({ server: './' })
			this.runBasicWatch()
		})
		// Minify Images
		this.self.task('image', () => {
			this.startCommand()
			this.logCommand('IMAGE', 'Searching and optimizing images.')
			this.self.src('./assets/images/**/*.{jpg,jpeg,png,gif}')
				.pipe(this.imagemin())
				.pipe(this.self.dest('./assets/images/'))
				.on('error', (err) => {this.logError(err); this.emit('end') })
		})
		// Minify SVGs
		this.self.task('svg', () => {
			this.startCommand()
			this.logCommand('SVG', 'Searching and optimizing svg files.')
			this.self.src('./assets/images/**/*.svg')
				.pipe(this.svgo())
				.pipe(this.self.dest('./assets/images'))
				.on('error', (err) => {this.logError(err); this.emit('end') })
		})
		// Compile SASS and minify CSS
		this.self.task('sass', () => {
			this.startCommand()
			this.logCommand('SASS', 'Compiling SASS base file.')
			this.self.src('./assets/scss/base/base.scss')
				.pipe(this.sass())
				.pipe(this.cssmin())
				.pipe(this.self.dest('./assets/css/base'))
				.pipe(this.browserSync.stream())
				.on('error', (err) => {this.logError(err); this.emit('end') })
			this.logCommand('SASS', 'Compiling SASS pages files.')
			this.self.src('./assets/scss/pages/**/*.scss')
				.pipe(this.sass())
				.pipe(this.cssmin())
				.pipe(this.self.dest('./assets/css/pages'))
				.pipe(this.browserSync.stream())
				.on('error', (err) => {this.logError(err); this.emit('end') })
		})
		// JavaScript
		this.self.task('js', () => {
			this.startCommand()
			this.logCommand('JS', 'Compiling JavaScript files.')
			const files = [
				'./js/pages/index.js',
				'./js/common/common.js',
			]
			const tasks = files.map((entry) => {
				this.logCommand('JS', `Compiling file: ${entry}.`)
				const self = this
				return this.browserify({
						debug: true,
						entries : [entry]
					})
					.transform(this.babelify)
					.bundle()
					.on('error', function(err){self.logError(err); this.emit('end') })
					.pipe(this.source(entry))
					.pipe(this.rename({
						extname: '.bundle.js'
					}))
					.pipe(this.buffer())
					.pipe(this.uglify())
					.pipe(this.self.dest('./'))
				})
		})
	}
	defaultGulp() {
		this.self.task('default', ['image', 'svg', 'sass', 'js'])
	}
	watch(){
		this.self.task('watch', () => {
			this.runBasicWatch()
			this.runImagesWatch()
		});
	}
	runImagesWatch(){
		this.logCommand('WATCH [IMAGES]', 'Watching for images changes.')
		// SVG Changes
		this.self.watch('./assets/images/**/*.svg', ['svg'])
		// Image Changes
		this.self.watch('./assets/images/**/*.{jpg,jpeg,png,gif}', ['image'])
	}
	runBasicWatch(){
		this.logCommand('WATCH', 'Watching SASS, JavaScript and HTML changes.')
		// Sass Changes
		this.self.watch('./assets/scss/**', ['sass'])
		// JavaScript Changes
		this.self.watch(['./js/**/*.js', '!./js/**/*.bundle.js'], ['js', this.browserSync.reload])
		// HTML changes
		this.self.watch('./*.html').on('change', () => {
			this.logCommand('HTML', 'Changed')
			this.browserSync.reload()
		})
	}
}
new Gulp();