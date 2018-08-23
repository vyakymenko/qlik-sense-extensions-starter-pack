/**
 * Clean {Development}.
 * @task clean.dev
 */
import * as del from 'del';
import { Config } from '../config';

export = () => {
  return del.sync([Config.dist.dev])
};
