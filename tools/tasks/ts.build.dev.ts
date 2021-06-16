/**
 * TypeScript Compiling {Development}
 * @task js.build.dev
 */
const { src, dest } = require('gulp');
const mergeStream = require('merge-stream');
import * as gulpEsbuild from 'gulp-esbuild';
import { lstatSync, readdirSync } from 'fs';
import { join } from 'path';

import { Config } from '../config';

export = () => {

  const isDirectory = (source: any) => lstatSync(source).isDirectory();
  const getDirectories = (source: any) =>
    readdirSync(source).map(name => join(source, name)).filter(isDirectory);

  const directories = getDirectories(Config.src.extensions);

  const tasks = directories
    .map(entry => {

      const path = entry.replace(/\\/g, '/');
      const split = path.split('/');
      const extension = split[split.length - 1];

      return src(`${path}/${extension}.ts`)
        .pipe(gulpEsbuild({
          outfile: `${extension}.js`,
          format: 'iife',
          bundle: true
        }))
        .pipe(dest(`${Config.dist.dev}${path.split('src/')[1]}`));
    });

  return mergeStream(tasks);
};
