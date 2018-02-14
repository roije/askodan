const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public',
        historyApiFallback: true
    },
    plugins: [
        new webpack.DefinePlugin({
           '__API__': JSON.stringify('http://localhost:8000')
        })
    ],
});