const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge')

const { IN_SRC } = require('./webpack.paths');
const commonConfig = require('./webpack.config');
const { devStyleConfig } = require('./webpack.parts');

const devConfig = {
  mode: 'development',
  stats: 'error-only',
  module: {
    rules: [
      devStyleConfig,
    ]
  },
  devServer: {
    contentBase: './dist',
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: IN_SRC('index.html'),
      minify: false,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);