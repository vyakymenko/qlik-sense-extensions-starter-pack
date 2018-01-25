/**
 * SASS compiling {Production}
 * @task sass.prod
 */
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      cssmin = require('gulp-cssmin'),
      conf = require('../config');

module.exports = () => {
	gulp.src(conf.src.scss)
		.pipe(sass())
		.pipe(cssmin())
		.pipe(gulp.dest(conf.dist.prod));
};
