/**
 * TypeScript Compiling {Development}
 * @task js.build.dev
 */
import { lstatSync, readdirSync } from 'fs';
import { join } from 'path';
import * as rollup from 'rollup';
import * as es from 'event-stream';
import { Config } from '../config';

const typescript = require('rollup-plugin-typescript');
const tsconfig = require('../../tsconfig.json');

export = () => {

  const isDirectory = (source: any) => lstatSync(source).isDirectory();
  const getDirectories = (source: any) =>
    readdirSync(source).map(name => join(source, name)).filter(isDirectory);

  const directories = getDirectories(Config.src.extensions);

  const tasks = directories
    .map(entry => {

      const path = entry.replace(/\\/g, '/');
      const split = path.split('/');
      const extension = split[split.length -1];

      return rollup.rollup({
        input: `${path}/${extension}.ts`,
        plugins: [
          typescript({
            typescript: require('typescript'),
            tsconfig: tsconfig
          })
        ]
      })
        .then((bundle: any) => {
          return bundle.write({
            file: `${Config.dist.dev}${path.split('src/')[1]}/${extension}.js`,
            format: 'iife'
          });
        })
    });

  return es.merge.apply(tasks);
};