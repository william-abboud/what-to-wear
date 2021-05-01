const postcssPresetEnv = require('postcss-preset-env');
const postcssNested = require('postcss-nested');
const postcssVariables = require('postcss-css-variables');
const postcssFlexboxFixes = require('postcss-flexbugs-fixes');
const postcssImport = require('postcss-import');
const cssnano = require('cssnano');

const env = process.env.NODE_ENV;

/*
  Order is important!
  [1] Handle imports
  [2] Handle variable declarations everywhere
  [3] Handle nesting
  [4] Handle Flexbox spec bugs
  [5] Add Env preset
*/
const sharedPlugins = [
  postcssImport,
  postcssVariables,
  postcssNested,
  postcssFlexboxFixes,
  postcssPresetEnv({
    stage: 1,
    autoprefixer: {
      grid: true,
    },
  }),
];

const devPlugins = [
  ...sharedPlugins,
];

const prodPlugins = [
  ...sharedPlugins,
  cssnano({
    preset: 'default'
  }),
];

const configs = {
  development: { plugins: devPlugins },
  production: { plugins: prodPlugins },
};

module.exports = configs[env];