/**
 * Copy assets file's {Development}
 * @task assets.copy.dev
 */
import * as gulp from 'gulp';
import { Config } from '../config';

export = () => {
	return gulp.src(Config.src.assets)
		.pipe(gulp.dest(Config.dist.dev));
};
