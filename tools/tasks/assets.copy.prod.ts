/**
 * Copy assets file's {Production}
 * @task assets.copy.prod
 */
import * as gulp from 'gulp';
import { Config } from '../config';

export = () => {
  return gulp.src(Config.src.assets)
		.pipe(gulp.dest(Config.dist.prod));
};
