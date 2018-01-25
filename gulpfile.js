const gulp = require('./tools')([
	'clean.dev',
	'assets.copy.dev',
	'js.build.dev',
	'scss.dev',
	'watch.dev',
	'clean.prod',
	'assets.copy.prod',
	'js.build.prod',
	'scss.prod'
]);

const runSequence = require('run-sequence');

//----------
// Development.
gulp.task('dev', () => {
	runSequence(
		'clean.dev',
		'assets.copy.dev',
		'js.build.dev',
		'scss.dev',
		'watch.dev')
});

//----------
// Production build.
gulp.task('build', () => {
	runSequence(
		'clean.prod',
		'assets.copy.prod',
		'js.build.prod',
		'scss.prod')
});

//----------
// Default development.
gulp.task('default', ['dev']);
