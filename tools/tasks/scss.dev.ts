/**
 * SASS compiling {Development}
 * @task sass.dev
 */
import * as gulp from 'gulp';
import * as gulpSass from 'gulp-sass';
import * as sass from 'sass';
import * as sourcemaps from 'gulp-sourcemaps';
const sassTak = gulpSass(sass);
import { Config } from '../config';

export = () => {
  gulp.src(Config.src.scss)
    .pipe(sourcemaps.init())
    .pipe(sassTak().on('error', sassTak.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(Config.dist.dev));
};
