const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require("webpack-dashboard/plugin");
const { merge } = require('webpack-merge')

const { IN_SRC } = require('./webpack.paths');
const commonConfig = require('./webpack.config');

const devConfig = {
  mode: 'development',
  stats: 'error-only',
  devServer: {
    contentBase: './dist',
    open: true,
  },
  plugins: [
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: IN_SRC('index.html'),
      minify: false,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);