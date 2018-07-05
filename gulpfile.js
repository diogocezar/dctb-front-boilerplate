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
		this.createCommands();
		this.gulp();
		this.watch();
		this.sass();
	}
	createCommands(){
		// BrowserSync
		this.self.task('serve', () => {
			console.log('[INICIANDO BrowserSync]')
			this.browserSync.init({
				server: './'
			})
			this.self.watch('./assets/scss/**', ['scss'])
			this.self.watch(['./js/**/*.js', '!./js/**/*.bundle.js'], ['js', this.browserSync.reload])
			this.self.watch('./*.html').on('change', this.browserSync.reload)
		})
		// Minify Images
		this.self.task('imgmin', () => {
			console.log('[IMAGEMIN] Otimizando as Imagens')
			this.self.src('./assets/images/**/*.{jpg,jpeg,png,gif}')
				.pipe(this.imagemin())
				.pipe(this.self.dest('./assets/images/'))
		})
		// Minify SVGs
		this.self.task('svgopt', () => {
			console.log('[SVGO] Otimizando arquivos SVG')
			this.self.src('./assets/images/**/*.svg')
				.pipe(this.svgo())
				.pipe(this.self.dest('./assets/images'))
		})
		// Compile SASS and minify CSS
		this.self.task('scss', () => {
			console.log('[SASS] Compilando Arquivos do Sass');
			this.self.src('./assets/scss/base/base.scss')
				.pipe(this.sass())
				.pipe(this.cssmin())
				.pipe(this.self.dest('./assets/css/base'))
				.pipe(this.browserSync.stream())

			this.self.src('./assets/scss/pages/**/*.scss')
				.pipe(this.sass())
				.pipe(this.cssmin())
				.pipe(this.self.dest('./assets/css/pages'))
				.pipe(this.browserSync.stream())
		})
		// JavaScript
		this.self.task('js', () => {
			console.log('[SASS] Compilando JavaScript')
			const files = [
				'./js/pages/index.js',
				'./js/common/common.js',
			]
			const tasks = files.map((entry) => {
				return this.browserify({
						debug: true,
						entries : [entry]
					})
					.transform(this.babelify)
					.bundle()
					.on('error', function (err) {
						console.error(err);
						this.emit('end');
					})
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
	gulp(){
		this.self.task('default', ['js', 'scss', 'imgmin', 'svgopt', 'scss']);
	}
	watch(){
		this.self.task('watch', () => {
			this.self.watch(['./js/**/*.js','!./js/**/*.bundle.js'], ['js']);
			this.self.watch('./assets/scss/**', ['scss']);
			this.self.watch('./assets/images/**/*.svg', ['svgopt']);
			this.self.watch('./assets/images/**/*.{jpg,jpeg,png,gif}', ['imagemin']);
		});
	}
	sass(){
		this.self.watch('./assets/scss/**', ['scss']);
	}
}

new Gulp();