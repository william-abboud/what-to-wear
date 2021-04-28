const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge')

const { IN_SRC } = require('./webpack.paths');
const commonConfig = require('./webpack.config');

const prodConfig = {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({ template: IN_SRC('index.html') }),
  ],
};

module.exports = merge(commonConfig, prodConfig);