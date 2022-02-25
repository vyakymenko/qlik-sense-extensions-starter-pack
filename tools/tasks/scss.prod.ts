/**
 * SASS compiling {Production}
 * @task sass.prod
 */
import * as gulp from 'gulp';
import * as gulpSass from 'gulp-sass';
import * as sass from 'sass';
const sassTak = gulpSass(sass);
import { Config } from '../config';

export = () => {
  gulp.src(Config.src.scss)
    .pipe(sassTak({outputStyle: 'compressed'}).on('error', sassTak.logError))
    .pipe(gulp.dest(Config.dist.prod));
};
