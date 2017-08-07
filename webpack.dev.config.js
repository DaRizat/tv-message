const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        'whatwg-fetch',
        path.join(__dirname, './app/index.jsx')
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    devtool: 'inline-source-map',

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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    devServer: {
        host: 'localhost',
        port: 3001,
        publicPath: '/react-ui-template',
        historyApiFallback: true,
        hot: true,
    }
};
