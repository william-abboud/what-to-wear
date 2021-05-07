const {
  IN_SRC,
  IN_DIST
} = require('./webpack.paths');
const {
  styleConfig,
  imagesConfig,
  fontsConfig,
  jsConfig
} = require('./webpack.parts');

module.exports = {
  entry: IN_SRC('index.js'),
  output: {
    filename: 'main.js',
    path: IN_DIST(),
    clean: true,
  },
  module: {
    rules: [
      imagesConfig,
      fontsConfig,
      styleConfig,
      jsConfig,
    ]
  },
};
