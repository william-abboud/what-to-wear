const { IN_SRC, IN_DIST } = require('./webpack.paths');

module.exports = {
    entry: IN_SRC('index.js'),
    output: {
        filename: 'main.js',
        path: IN_DIST(),
    },
};