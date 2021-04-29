const postcssPresetEnv = require('postcss-preset-env');

const postcssDevConfig = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: () => [
        postcssPresetEnv(),
      ],
    }
  },
};

const devStyleConfig = {
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
      },
    },
    postcssDevConfig,
  ],
};

module.exports = {
  devStyleConfig,
};