/**
 * Clean {Production}.
 * @task clean.prod
 */
import * as del from 'del';
import { Config } from '../config';

export = () => {
  return del.sync([Config.dist.prod])
};
