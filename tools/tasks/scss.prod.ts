/**
 * SASS compiling {Production}
 * @task sass.prod
 */
import * as gulp from 'gulp';
import * as sass from 'gulp-sass';
import { Config } from '../config';

export = () => {
  gulp.src(Config.src.scss)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest(Config.dist.prod));
};
