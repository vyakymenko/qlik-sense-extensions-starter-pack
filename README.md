# Introduction

[![Build Status](https://travis-ci.org/vyakymenko/qlik-sense-extensions-starter-pack.svg?branch=master)](https://travis-ci.org/vyakymenko/qlik-sense-extensions-starter-pack)

Qlik Sense Extensions Starter Pack provides fast, reliable and extensible starter for the development of QlikSense extensions.

# Version
1.0.1

# Tech

Qlik Sense Extensions Starter Pack uses a number of open source projects to work properly:

* [Gulp] - the streaming build system
* [Rollup] - awesome bundler

# How to start

In order to start the `qlik-sense-extensions-starter-pack` use:

```bash
$ git clone --depth 1 https://github.com/vyakymenko/qlik-sense-extensions-starter-pack.git
$ cd qlik-sense-extensions-starter-pack

# install the project's dependencies
$ npm install

# develop and watches all your files
$ npm start

# production build with installers
$ npm run build
```

# Table of Content

- [Introduction](#introduction)
- [Version](#version)
- [Tech](#tech)
- [How to start](#how-to-start)
- [Table of Content](#table-of-content)
- [Configuration](#configuration)
- [Running tests](#running-tests)
- [Examples](#examples)
- [Directory Structure](#directory-structure)
- [In Development](#in-development)
- [License](#license)

# Configuration

```js
/**
 * Project Configuration
 *
 * @path: gulp/config.js
 */
module.exports = {
	src: {
		main: 'src/',  // <--- Source directory
		extensions: 'src/Extensions/', // <--- Source directory with extensions
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
		dev: 'dist/dev/', // <--- Dev build dist directory
		prod: 'dist/prod/' // <--- Prod build dist directory
	}
};

```

# Running tests

TODO

# Extensions Examples

#### Test Extension

- Here is an example of extension with simple `Log` method.
- Source: [TestExtension](https://github.com/vyakymenko/qlik-sense-extensions-starter-pack/tree/master/src/Extensions/TestExtension)

#### Extension With Lib

- Here is an example of extension with simple `Log` method and `Moment.js` lib injection.
- Source: [ExtensionWithLib](https://github.com/vyakymenko/qlik-sense-extensions-starter-pack/tree/master/src/Extensions/ExtensionWithLib)

# Directory Structure

```sh
├── LICENSE
├── README.md
├── gulpfile.js
├── package-lock.json
├── package.json
├── src
│   ├── API
│   │   └── Util.js
│   └── Extensions
│       ├── ExtensionWithLib
│       │   ├── Extension.js
│       │   ├── Extension.qext
│       │   ├── css
│       │   │   └── styles.scss
│       │   ├── lib
│       │   │   └── moment.min.js
│       │   └── wbfolder.wbl
│       └── TestExtension
│           ├── Extension.js
│           ├── Extension.qext
│           ├── css
│           │   └── styles.scss
│           └── wbfolder.wbl
└── tools
    ├── config.js
    ├── index.js
    └── tasks
        ├── assets.copy.dev.js
        ├── assets.copy.prod.js
        ├── clean.dev.js
        ├── clean.prod.js
        ├── js.build.dev.js
        ├── js.build.prod.js
        ├── scss.dev.js
        ├── scss.prod.js
        └── watch.dev.js
```

# In Development
 - Update Documentation.
 - Add Changelog.
 
# License

MIT

   [Gulp]: <http://gulpjs.com>
   [Rollup]: <https://rollupjs.org>