/**
 * SASS compiling {Development}
 * @task sass.dev
 */
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      conf = require('../config');

module.exports = () => {
	gulp.src(conf.src.scss)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(conf.dist.dev));
};
