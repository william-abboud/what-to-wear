const {
  isDevelopment,
  isProduction,
  isTesting,
  logToolConfig
} = require('./webpack.parts');

const commonPresets = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'usage',
      corejs: 3,
      shippedProposals: true,
      loose: true,
      debug: isProduction,
    }
  ],
  [
    '@babel/preset-react',
    {
      useBuiltIns: true,
      development: isDevelopment,
    }
  ],
];

const productionPlugins = [
  '@babel/plugin-transform-react-constant-elements',
  '@babel/plugin-transform-react-inline-elements',
  'transform-react-remove-prop-types',
];

const testPlugins = [
  'transform-es2015-modules-commonjs',
  'dynamic-import-node'
];

module.exports = api => {
  api.cache(true);

  let envBasedPlugins = [];
  let envBasedPresets = [...commonPresets];

  if (isProduction) {
    envBasedPlugins = envBasedPlugins.concat(productionPlugins);
  } else if (isTesting) {
    envBasedPlugins = envBasedPlugins.concat(testPlugins);
  }

  const finalConfig = {
    presets: envBasedPresets,
    plugins: envBasedPlugins,
  };

  logToolConfig('Babel', finalConfig);

  return finalConfig;
};
