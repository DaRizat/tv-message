const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        'whatwg-fetch',
        path.join(__dirname, './app/index.jsx')
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|public\/)/,
            use: ['babel-loader'],
        },
        { test: /\.scss/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
        { test: /\.(otf|eot|svg|ttf|woff)/, loader: 'url-loader' },
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            { from: 'index.html' }
        ]),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
