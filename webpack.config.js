const HtmlWebpackPlugin = require("html-webpack-plugin");
const { IN_SRC, IN_DIST } = require("./webpack.paths");

module.exports = {
    mode: 'production',
    entry: IN_SRC('index.js'),
    output: {
        filename: 'main.js',
        path: IN_DIST(),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: IN_SRC('index.html'),
            minify: false,
        })
    ]
};