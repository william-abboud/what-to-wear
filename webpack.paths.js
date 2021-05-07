const {
  resolve,
  join
} = require('path');

const SRC = resolve(__dirname, 'src');
const DIST = resolve(__dirname, 'dist');

const IN_SRC = (subPath = '') => join(SRC, subPath);
const IN_DIST = (subPath = '') => join(DIST, subPath);

module.exports = {
  IN_SRC,
  IN_DIST,
};
