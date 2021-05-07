const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const {
  IN_SRC
} = require('./webpack.paths');

const env = process.env.NODE_ENV;
const isProduction = env === 'production';
const isDevelopment = env === 'development';
const isTesting = env === 'testing';

const styleLoaderConfig = {
  loader: 'style-loader',
};

const extractCssConfig = {
  loader: ExtractCssChunks.loader,
  options: {
    publicPath: ''
  }
};

const cssLoaderConfig = {
  loader: 'css-loader',
  options: {
    importLoaders: 1,
    sourceMap: true,
  },
};

const postcssConfig = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
  },
};

const styleConfig = {
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    (isProduction ? extractCssConfig : styleLoaderConfig),
    cssLoaderConfig,
    postcssConfig,
  ],
};

const imagesConfig = {
  test: /\.(png|webp|avif|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'assets/images/[name].[hash][ext]',
  },
};

const fontsConfig = {
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'assets/fonts/[name].[hash][ext]',
  },
};

const jsConfig = {
  test: /\.(jsx|js|ts|tsx)$/i,
  use: 'babel-loader',
  include: IN_SRC(),
  exclude: /node_modules/,
};

const logToolConfig = (tool, config) => {
  console.log(`${tool} is running in ${env} mode with the following configuration:`);
  console.log(JSON.stringify(config, null, 4));
};

module.exports = {
  styleConfig,
  logToolConfig,
  imagesConfig,
  fontsConfig,
  jsConfig,
  env,
  isDevelopment,
  isProduction,
  isTesting,
};
