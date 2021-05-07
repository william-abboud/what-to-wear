const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  merge
} = require('webpack-merge')
const {
  IN_SRC
} = require('./webpack.paths');
const commonConfig = require('./webpack.config');

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'scripts/[name].[contenthash].js',
  },
  optimization: {
    runtimeChunk: true,
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true
              },
            },
          ],
        },
      })
    ]
  },
  plugins: [
    new ExtractCssChunks({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: 'styles/[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: IN_SRC('index.html'),
      minify: false,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
