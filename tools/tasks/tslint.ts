import * as gulp from 'gulp';
import { Config } from '../config';

const tslint = require('gulp-tslint');

export = () => {
  return gulp.src(Config.src.ts)
    .pipe(tslint({
      fix: true,
      formatter: 'prose'
    }))
    .pipe(tslint.report());
};
