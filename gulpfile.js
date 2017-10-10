"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify');  // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); //Concatenates files
var jshint = require("gulp-jshint"); //Lint JS files
var sass = require('gulp-sass'); // Good ol gulp sass
var rename = require('gulp-rename'); // Gulp rename 
var cleanCss = require('gulp-clean-css'); // Css minifiyer
var imagemin = require('gulp-imagemin'); // Image optimisation
var gEjs = require('gulp-ejs'); // gulp ejs

// A comment break line 
var config = {
	port: 3000,
	devBaseUrl: 'http://localhost',
	paths: {
		html: '*.html',
		js: 'assets/js/custom.js',
    	sass:[
      		'assets/sass/*.scss',
    	],
    	ejs: 'assets/views/index.ejs',
    	css: ['assets/css/*.css']
	}
}

//Start a local development server
gulp.task('connect', function() {
	connect.server({
		root: ['./'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('open', ['connect'], function() {
	gulp.src('index.html')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
	gulp.src(config.paths.html)
		.pipe(connect.reload());
});

gulp.task('js', function() {
	browserify(config.paths.js)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('assets/js'))
		.pipe(connect.reload());
});

gulp.task('images', function () {
    gulp.src(config.paths.img)
      .pipe(imagemin())
      .pipe(gulp.dest('/images'));
});

gulp.task('sass', function(){
	gulp.src('assets/sass/custom.scss')
    	.pipe(sass().on('error', sass.logError))
		.pipe(concat('custom.css'))
		.pipe(rename({suffix: '.min'}))
    	.pipe(gulp.dest('assets/css'))
		.pipe(connect.reload());
});

gulp.task('jsLint', function () {
    gulp.src(config.paths.js) // Path to your files
    .pipe(jshint())
    .pipe(jshint.reporter()); // Dump results
});

gulp.task('ejs', function(){
   gulp.src(config.paths.ejs)
   .pipe(gEjs())
   .pipe(rename('index-theory-01.html'))
   .pipe(gulp.dest('./'))
   .pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('**/*.ejs', ['ejs']);
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.sass, ['sass']);
	gulp.watch(config.paths.js, ['js', 'jsLint']);
	gulp.watch(config.paths.img, ['images']);
});

gulp.task('default', ['html', 'js', 'sass', 'jsLint', 'ejs', 'open', 'watch']);