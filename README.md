# Introduction

[![Greenkeeper badge](https://badges.greenkeeper.io/vyakymenko/qlik-sense-extensions-starter-pack.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/vyakymenko/qlik-sense-extensions-starter-pack.svg?branch=master)](https://travis-ci.org/vyakymenko/qlik-sense-extensions-starter-pack)

Qlik Sense Extensions Starter Pack provides fast, reliable and extensible starter for the development of QlikSense extensions.

# Version
1.1.6

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
- [Examples](#examples)
- [Directory Structure](#directory-structure)
- [License](#license)

# Configuration

```js
/**
 * Configuration
 */
export const Config: any = {
  src: {
    main: 'src/',
    extensions: 'src/Extensions/',
    ts: [
      'src/**/*.ts',
      'src/*.ts'
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
      'src/**/*.svg',
      'src/**/*.wbl',
      'src/*.wbl',
      'src/**/*.qext',
      'src/*.qext',
      'src/**/*.txt',
      'src/*.txt',
      'src/**/*.json',
      'src/*.json',
      'src/lib/*.js',
      'src/**/lib/*.js',
      'src/**/lib/**/*.js',
      'src/**/*.css',
      'src/*.css'
    ]
  },
  dist: {
    dev: 'dist/dev/',
    prod: 'dist/prod/'
  }
};
```

# Examples

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
├── gulpfile.ts
├── package-lock.json
├── package.json
├── src
│   ├── API
│   │   └── Util.js
│   └── Extensions
│       ├── ExtensionWithAMD
│       │   ├── ExtensionWithAMD.qext
│       │   ├── ExtensionWithAMD.ts
│       │   ├── css
│       │   │   └── styles.scss
│       │   ├── lib
│       │   │   └── d3.min.js
│       │   └── wbfolder.wbl
│       ├── ExtensionWithLib
│       │   ├── ExtensionWithLib.qext
│       │   ├── ExtensionWithLib.ts
│       │   ├── css
│       │   │   └── styles.scss
│       │   ├── lib
│       │   │   └── moment.min.js
│       │   └── wbfolder.wbl
│       └── TestExtension
│           ├── TestExtension.qext
│           ├── TestExtension.ts
│           ├── css
│           │   └── styles.scss
│           └── wbfolder.wbl
├── tools
│   ├── config.ts
│   ├── tasks
│   │   ├── assets.copy.dev.ts
│   │   ├── assets.copy.prod.ts
│   │   ├── clean.dev.ts
│   │   ├── clean.prod.ts
│   │   ├── noop.ts
│   │   ├── scss.dev.ts
│   │   ├── scss.prod.ts
│   │   ├── ts.build.dev.ts
│   │   ├── ts.build.prod.ts
│   │   ├── tslint.ts
│   │   └── watch.dev.ts
│   ├── tasks.json
│   └── utils
│       ├── code_change_tools.ts
│       ├── task.ts
│       └── tasks_tools.ts
├── tree.txt
├── tsconfig.json
└── tslint.json
```
 
# License

MIT

   [Gulp]: <http://gulpjs.com>
   [Rollup]: <https://rollupjs.org>