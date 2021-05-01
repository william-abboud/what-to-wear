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
        sourceMap: true,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
      }
    }
  ],
};

const logToolConfig = (tool, configs) => {
  const env = process.env.NODE_ENV;

  console.log(`${tool} is running in ${env} mode with the following configuration:`);
  console.log(JSON.stringify(configs[env], null, 4));
};

module.exports = {
  devStyleConfig,
  logToolConfig,
};