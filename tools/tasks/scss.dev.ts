/**
 * SASS compiling {Development}
 * @task sass.dev
 */
import * as gulp from 'gulp';
import * as sass from 'gulp-sass';
import * as sourcemaps from 'gulp-sourcemaps';
import { Config } from '../config';

export = () => {
  gulp.src(Config.src.scss)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(Config.dist.dev));
};
