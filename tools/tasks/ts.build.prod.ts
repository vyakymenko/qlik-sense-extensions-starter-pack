/**
 * ES6 JavaScript Compiling {Production}
 * @task js.build.prod
 */
import { lstatSync, readdirSync } from 'fs';
import { join } from 'path';
import * as rollup from 'rollup';
import * as es from 'event-stream';
import { Config } from '../config';

const rollupTypescript = require('@rollup/plugin-typescript');
const terser = require('rollup-plugin-terser').terser;

export = (done: any) => {

  const isDirectory = (source: any) => lstatSync(source).isDirectory();
  const getDirectories = (source: any) =>
    readdirSync(source).map(name => join(source, name)).filter(isDirectory);

  const directories = getDirectories(Config.src.extensions);

  const tasks = directories
    .map(entry => {

      const path = entry.replace(/\\/g, '/');
      const split = path.split('/');
      const extension = split[split.length - 1];

      return rollup.rollup({
        input: `${path}/${extension}.ts`,
        plugins: [
          rollupTypescript(
            {
              typescript: require('typescript'),
              tsconfig: ''
            }
          ),
          terser()
        ]
      })
        .then((bundle: any) => {
          bundle.write({
            file: `${Config.dist.prod}${path.split('src/')[1]}/${extension}.js`,
            format: 'iife'
          });

          done();
        });
    });
  return es.merge.apply(tasks);
};
