/**
 * Clean {Production}.
 * @task clean.prod
 */
const del = require('del'),
  conf = require('../config');

module.exports = () => {
  return del.sync([conf.dist.prod])
};
