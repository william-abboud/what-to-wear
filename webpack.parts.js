const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');

const postcssDevConfig = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: () => [
        autoprefixer({
          grid: 'autoplace'
        }),
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