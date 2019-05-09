/**
 * Watcher task.
 * @note Watching for changes in folders, files in folders depend on @config.
 */
const gulp = require('gulp');
import { Config } from '../config';

export = () => {

  gulp.watch(Config.src.ts,
    gulp.series(['ts.build.dev']));

  gulp.watch(Config.src.assets,
    gulp.series(['assets.copy.dev']));

  gulp.watch(Config.src.scss,
    gulp.series(['scss.dev']));
};
