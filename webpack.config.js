// webpack.config.js https://webpack.js.org
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/main.js",
    // entry: {
    //     bundle1: "./main1.js",
    //     bundle2: "./main2.js"
    // },
    output: {
        // path: path.join(process.cwd(), 'dist'),
        path: path.resolve(__dirname, "dist"),
        // filename: "bundle.js",
        filename: 'bundle.[name].js',
        chunkFilename: 'bundle.[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true
                        },
                    },
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            // {test: /\.txt$/, use: "raw-loader"},
            // {test: /\.css$/, use: "css-loader"},
            // {
            //     test: /\.css$/,
            //     use: [
            //         {loader: "style-loader"},
            //         {
            //             loader: "css-loader",
            //             options: {
            //                 modules: false
            //             }
            //         }
            //         // { loader: "sass-loader" }
            //     ]
            // },
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
    optimization: {
        splitChunks: {
            // all initial
            // 应该用范围
            chunks: "all",
            // 最小尺寸
            // minSize: 30000,
            // 最小 chunks
            // minChunks: 1,
            // maxAsyncRequests: 5,
            // maxInitialRequests: 3,
            // name: true,
            // filename: "bundle.js",
            cacheGroups: {
                // default: {
                //     minChunks: 2,
                //     priority: -20,
                //     reuseExistingChunk: true
                // },
                // default: false,
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    // split 出来的 chunk 的名字
                    // Third party
                    // name: '3rd-party',
                    name: 'vendors',
                    // minChunks: 1,
                    // 缓存优先级权重
                    priority: 10,
                    enforce: true
                },
                commons: {
                    test: /commons\/|components\/|containers\/|layouts\//,
                    name: "commons",
                    // chunks: "initial",
                    // minChunks: 1,
                    priority: 10,
                    enforce: true
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    },
    plugins: [
        new UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
            // filename:"index.html"
        }),
        new ExtractTextPlugin({
            // "bundle.css"
            filename: 'bundle.[name].css',
            ignoreOrder: true
        }),
        new webpack.BannerPlugin("Webpack 实例")
        // new webpack.optimize.SplitChunksPlugin({
        //
        // })
    ]
};
