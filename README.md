# DCTB Front-End Boilerplate

Hey there, how are you?

This is my updated boilerplate to work with front-end projects.

So... why dont work with something like Angular, Vue or React? These front-end frameworks are really powerfull, but sometimes, you just need to focus on SEO and CSS (making things bealtiful).

So why do you need a lot of dependencies?

They are:

```
"babel-core": "^6.26.3",
"babel-preset-es2015": "^6.24.1",
"babelify": "^8.0.0",
"bootstrap": "^4.1.1",
"browser-sync": "^2.24.5",
"browserify": "^16.2.2",
"gulp": "^3.9.1",
"gulp-babel": "^7.0.1",
"gulp-cssmin": "^0.2.0",
"gulp-imagemin": "^4.1.0",
"gulp-rename": "^1.3.0",
"gulp-sass": "^4.0.1",
"gulp-svgo": "^1.5.4",
"gulp-uglify": "^3.0.0",
"jquery": "^3.3.1",
"popper.js": "^1.14.3",
"vinyl-buffer": "^1.0.1",
"vinyl-source-stream": "^2.0.0"
```

Well, it's very nice to write modern JavaScript, but unfortunately our browsers dont have all support for that.

So, we need to create a bundle compatible with ECS2015.

For it, you can use a lot of things, but in my case i chose Browserfy with Babel to transpile it.

And, i used gulp to produce all results of this.

The most important thing in this project is the structure. I found a way to organize all these files to organize this repository making it deploy-read.

## Organization

The files are organized like:

```
.
├── LICENSE <- license file
├── README.md <- this file
├── assets <- assets folder
├── gulpfile.js <- gulpfile to manage system helpers
├── index.html <- one or more html files
├── js <- folder to mantain JavaScript files
├── node_modules <- node_modules
├── package-lock.json <- package-lock.json
└── package.json <- package.json
```

In _assets_ we have:

```
assets
├── css <- folder to store css compilled from sass by gulp
├── fonts <- project fonts
├── images <- project images
└── scss <- project sass files
```

The most important organization is on __scss__ folder, where we have:

```
scss
├── base <- base folder
│   ├── base.scss <- base file, imported by all pages
│   └── includes <- includes of base file
│       ├── animations.scss <- project animations
│       ├── colors.scss <- project colors vars
│       ├── fonts.scss <- project fonts
│       ├── menu.scss <- project menu rules
│       ├── mixins.scss <- my set of mixins
│       ├── shared.scss <- common css rules
│       └── sizes.scss <- sizes of system
└── pages <- folder to store pages sass
    └── index.scss <- sass of index page
```

In the _js_ folder we have:

```
.
├── common <- common folder to store all funcionalities shared for all pates
│   ├── common.bundle.js <- bundle file (compiled)
│   └── common.js <- original file
├── modules <- modules that can be imported depending of project
│   ├── cookies.js <- cookies manipulation
│   ├── util.js <- some util functions
│   └── validation.js <- simple form validation
└── pages <- specific page javascript
    ├── index.bundle.js <- compiled file
    └── index.js <- original file
```

## Conclusion

That's it, this is a project that can be used as a boilerplate do generate some front-end pages.

If you have any contributtion, please let me know ;)

diogo@diogocezar.com

Bests.