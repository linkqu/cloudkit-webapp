const path = require('path');
const HtmlWebpackPlugin = require('webpack-html-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    // entry: {
    //     bundle1: './main1.js',
    //     bundle2: './main2.js'
    // },
    output: {
        // path: __dirname,
        path: path.resolve(__dirname, 'dist'),
        // filename: '[name].js'
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }
        ],
        // loaders: [
        //     { test: /\.css$/, loader: "style-loader!css-loader" }
        // ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new webpack.BannerPlugin('Webpack 实例')
    ]
};
