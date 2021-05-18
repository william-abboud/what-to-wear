const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  IN_SRC
} = require('./webpack.paths');
const commonConfig = require('./webpack.config');

const devConfig = {
  mode: 'development',
  stats: 'error-only',
  devtool: 'eval-source-map',
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
