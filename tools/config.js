/**
 * Project Configuration
 *
 * @path: gulp/config.js
 */
module.exports = {
	src: {
		main: 'src/',
		extensions: 'src/Extensions/',
		js: [
			'src/**/*.js',
			'src/*.js'
		],
		scss: [
			'src/**/*.scss',
			'src/*.scss'
		],
		assets: [
			'src/*.gif',
			'src/**/*.gif',
			'src/*.png',
			'src/**/*.png',
			'src/*.jpg',
			'src/**/*.jpg',
			'src/**/*.wbl',
			'src/*.wbl',
			'src/**/*.qext',
			'src/*.qext',
			'src/**/*.txt',
			'src/*.txt',
			'src/libs/*.js',
			'src/**/libs/*.js',
			'src/**/libs/**/*.js',
			'src/**/*.css',
			'src/*.css'
		]
	},
	dist: {
		dev: 'dist/dev/',
		prod: 'dist/prod/'
	}
};
