// webpack.config.js
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/main.js",
    // entry: {
    //     bundle1: "./main1.js",
    //     bundle2: "./main2.js"
    // },
    output: {
        path: path.resolve(__dirname, "dist"),
        // filename: "[name].js"
        filename: "bundle.js"
    },
    module: {
        rules: [
            // {test: /\.txt$/, use: "raw-loader"},
            // {test: /\.css$/, use: "css-loader"},
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {
                        loader: "css-loader",
                        options: {
                            modules: false
                        }
                    }
                    // { loader: "sass-loader" }
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", {
                                // "targets": {
                                //     "chrome": 68
                                // },
                                targets: {
                                    browsers: ["> 1%", "last 2 versions"]
                                },
                                "modules": false,
                                "loose": true
                            }],
                            "@babel/preset-flow"
                        ]
                    }
                },
                exclude: "/node_modules/**"
            }
        ],
        // loaders: [
        //     { test: /\.css$/, loader: "style-loader!css-loader" }
        // ]
    },
    plugins: [
        new UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
            // filename:"index.html"
        }),
        new webpack.BannerPlugin("Webpack 实例")
    ]
};
