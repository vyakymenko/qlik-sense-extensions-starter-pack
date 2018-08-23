/**
 * SASS compiling {Production}
 * @task sass.prod
 */
import * as gulp from 'gulp';
import * as sass from 'gulp-sass';
import { Config } from '../config';

const cssmin = require('gulp-cssmin');

export = () => {
	gulp.src(Config.src.scss)
		.pipe(sass())
		.pipe(cssmin())
		.pipe(gulp.dest(Config.dist.prod));
};
