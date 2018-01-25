/**
 * Clean {Development}.
 * @task clean.dev
 */
const del = require('del'),
      conf = require('../config');

module.exports = () => {
  return del.sync([conf.dist.dev])
};
