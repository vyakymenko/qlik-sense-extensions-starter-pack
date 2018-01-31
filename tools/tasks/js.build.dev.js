/**
 * ES6 JavaScript Compiling {Production}
 * @task js.build.prod
 */
const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');
const es = require('event-stream');
const rollup = require('rollup');
const uglify = require('rollup-plugin-uglify');
const conf = require('../config');

module.exports = () => {

  const isDirectory = source => lstatSync(source).isDirectory();
  const getDirectories = source =>
    readdirSync(source).map(name => join(source, name)).filter(isDirectory);

  const directories = getDirectories(conf.src.extensions);

  const tasks = directories
    .map(entry => {

      const path = entry.replace(/\\/g, '/');

      return rollup.rollup({
        input: `${path}/Script.js`,
        plugins: [
          uglify()
        ]
      })
        .then(bundle => {
          return bundle.write({
            file: `${conf.dist.prod}${path.split('src/')[1]}/Script.js`,
            format: 'umd',
            name: 'Script'
          });
        })
    });

  return es.merge.apply(tasks);
};
