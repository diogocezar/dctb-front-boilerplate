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
"gulp-color": "0.0.2",
"gulp-concat": "^2.6.1",
"gulp-cssmin": "^0.2.0",
"gulp-imagemin": "^4.1.0",
"gulp-rename": "^1.3.0",
"gulp-sass": "^4.0.1",
"gulp-svgo": "^1.5.4",
"gulp-uglify": "^3.0.0",
"inputmask": "^4.0.0",
"jquery": "^3.3.1",
"jquery.mousewheel": "^3.1.9",
"jquery.nicescroll": "^3.7.6",
"owl.carousel": "^2.3.4",
"scrollreveal": "^3.4.0",
"select2": "^4.0.6-rc.1",
"vinyl-buffer": "^1.0.1",
"vinyl-source-stream": "^2.0.0"
```

Well, it's very nice to write modern JavaScript, but unfortunately our browsers dont have all support for that.

So, we need to create a bundle compatible with ECS2015.

For it, you can use a lot of things, but in my case i chose Browserfy with Babel to transpile it.

And, i used gulp to produce all results of this.

The most important thing in this project is the structure. I found a way to organize all these files to organize this repository making it deploy-read.

## Pre-requisites

To run this project you will need NodeJS and NPM installed on your developer machine.

To verify this:

```
$ node --version
```

```
$ npm --version
```

You will need to be installed gulp-cli globally:

```
$ npm install -g gulp-cli
```

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


.
├── common <- common folder to store all funcionalities shared for all pates
│   ├── common.bundle.js <- bundle file (compiled)
│   └── common.js <- original file
├── modules <- modules that can be imported depending of project
│   ├── binds <- shared actions to bind
│   │   └── shared-binds.js <- generic events
│   ├── helpers <- helpers developed to help project
│   │   ├── cookies.js <- cookies manipulation
│   │   ├── mobile.js <- mobile check
│   │   ├── util.js <- util functions
│   │   └── validation.js <- simple form validation
│   ├── loader <- page loader
│   │   └── loader.js
│   ├── menu <- page menu
│   │   └── menu.js
│   └── plugins <- plugins configuration
│       ├── plugin-input-mask.js
│       ├── plugin-nice-scroll.js
│       ├── plugin-owl-carousel.js
│       ├── plugin-scroll-reveal.js
│       └── plugin-select2.js
├── pages <- project pages
│   └── index
│       ├── binds-index.js <- actions binded
│       ├── index.bundle.js <- bundle file (compiled)
│       └── index.js <- original file
└── vendor <- all vendor packages
    └── vendor.js
```

## Install

After clone this folder, you need to install all dependences running:

```
$ npm install
```

on root folder;

## Avaliable commands

It's avaliable a set of useful commands:

```
$ npm run serve
```

This command will serve your application;

```
$ npm run image
```

This command will search for images and will try to reduce their sizes;

```
$ npm run svg
```

This command will search for svgs and will try to reduce their sizes;

```
$ npm run sass
```

This command will compile all sass files on project;

```
$ npm run js
```

This command will create a bundle of all JavaScript files on project;

```
$ npm run watch
```

This command will be watching for files modification, and will try to automatically run corresponding taks;

```
$ npm run build
```

This command will execute a build read command to publish project;

```
$ npm run vendor
```

This command will generate an unique, compressed file with all vendors dependencies.

## Pages Usage

For any new HTML page, you can create a new {page}.js files. You can import here libs that will be used only by this page.

## Conclusion

That's it, this is a project that can be used as a boilerplate do generate some front-end pages.

If you have any contributtion, please let me know ;)

diogo@diogocezar.com

Bests.