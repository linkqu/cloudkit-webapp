// webpack.config.js https://webpack.js.org https://webpack.js.org/configuration/
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const CompressionPlugin = require("compression-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "production",
    // entry: "./src/main.js",
    entry: {
        index: "./src/webapps/index.js",
        main: "./src/webapps/main.js",
        accounts: "./src/webapps/accounts/main.js",
        contacts: "./src/webapps/contacts/main.js",
        purchases: "./src/webapps/purchases/main.js",
        sales: "./src/webapps/sales/main.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        // publicPath: "./",
        // filename: "bundle.js",
        filename: "[name].js",
        // filename: "bundle.[name].js",
        // filename: "[chunkhash].js",
        // chunkFilename: "[id].js",
        // chunkFilename: "[chunkhash].js",
        // chunkFilename: "[id].chunk.js?[chunkhash]",
        // chunkFilename: "[name].chunk.js",
        chunkFilename: "[name].chunk.js?[chunkhash]",
        sourceMapFilename: "[file].map",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                // test: /\.(gif|png|jpe?g|svg)$/i,
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                // "url-loader?limit=1024&name=[path][name].[ext]&outputPath=img/&publicPath=output/"
                // loader: "url-loader?limit=8192"
                use: {
                    loader: 'url-loader',
                    options: {
                        loader: 'image-webpack-loader'
                        // limit: 500
                    }
                }
                // use: [
                //     "file-loader",
                //     {
                //         loader: "image-webpack-loader",
                //         options: {
                //             bypassOnDebug: true,
                //             disable: true
                //         },
                //     },
                // ]
            },
            // {
            //     test: /\.less$/,
            //     loaders: [
            //         {
            //             loader: "style-loader",
            //             options: {
            //                 sourceMap: true,
            //             },
            //         },
            //         {
            //             loader: "css-loader",
            //             options: {
            //                 sourceMap: true,
            //                 modules: true
            //             }
            //         },
            //         {
            //             loader: "less-loader",
            //             options: {
            //                 sourceMap: true,
            //             },
            //         }
            //     ]
            // },
            // {
            //     test: /\.scss$/,
            //     loaders: [
            //         {
            //             loader: "style-loader",
            //             options: {
            //                 sourceMap: true,
            //             },
            //         },
            //         {
            //             loader: "css-loader",
            //             options: {
            //                 sourceMap: true,
            //             },
            //         },
            //         {
            //             loader: "sass-loader",
            //             options: {
            //                 sourceMap: true,
            //             },
            //         },
            //     ]
            // },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                modules: false
                            }
                        },
                        {
                            loader: "postcss-loader"
                        }
                    ]
                })
            },
            // {
            //     test: /\.css$/,
            //     loaders: [
            //         {
            //             loader: "style-loader",
            //             options: {
            //                 sourceMap: true,
            //             },
            //         },
            //         {
            //             loader: "css-loader",
            //             options: {
            //                 sourceMap: true,
            //             },
            //         },
            //         {
            //             loader:"postcss-loader"
            //         }
            //     ]
            // },
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
                        sourceMap: true,
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
            },
            {
                test: /\.(html|tpl)$/,
                loader: "html-loader"
            }
        ],
        // loaders: [
        //     { test: /\.css$/, loader: "style-loader!css-loader" }
        // ]
    },
    optimization: {
        splitChunks: {
            // all initial async
            // 应该用范围
            chunks: "all",
            // 最小尺寸
            minSize: 30000,
            // 最小 chunks
            minChunks: 1,
            // 最大异步请求chunks
            maxAsyncRequests: 5,
            // 最大初始化chunks
            maxInitialRequests: 3,
            // split 的 chunks name
            // name: true,
            // 如果不指定name，自动生成name的分隔符（‘runtime~[name]’）
            automaticNameDelimiter: "~",
            // filename: "bundle.js",
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                },
                // default: false,
                vendors: {
                    // /node_modules\//
                    test: /[\\/]node_modules[\\/]/,
                    // split 出来的 chunk 的名字
                    // Third party
                    // name: "3rd-party",
                    name: "vendors",
                    chunks: "all",
                    // minChunks: 1,
                    // 缓存优先级权重
                    priority: -10,
                    enforce: true
                },
                commons: {
                    // test: /commons\/|components\/|containers\/|layouts\//,
                    test: /src\/frameworks\//,
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2,
                    priority: -10,
                    enforce: true
                }
            }
        },
        runtimeChunk: {
            // runtime
            name: "manifest"
        }
    },
    // serve: {
    //     port: 9000,
    //     content: "./dist"
    // },
    // stats: "errors-only",
    devServer: {
        // proxy: {
        //     "/api": "http://localhost:8080"
        // },
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        historyApiFallback: true,
        hot: true,
        https: false,
        noInfo: true,
        port: 9000
    },
    plugins: [
        new UglifyJsPlugin(),
        // index
        new HtmlWebpackPlugin({
            template: "./src/webapps/templates/index.html",
            filename: "./index.html",
            // inject: "head",
            // favicon: "favicon.ico",
            hash: true,
            minify: {
                // https://github.com/kangax/html-minifier#options-quick-reference
                collapseWhitespace: true,
                conservativeCollapse: true,
                // removeAttributeQuotes: true,
                html5: true,
                minifyCSS: true,
                removeComments: true,
                removeEmptyAttributes: true
            },
            chunks: ["manifest", "vendors", "commons", "index"]
        }),
        // main
        new HtmlWebpackPlugin({
            template: "./src/webapps/templates/main.html",
            filename: "./main.html",
            // inject: "head",
            // favicon: "favicon.ico",
            hash: true,
            minify: {
                // https://github.com/kangax/html-minifier#options-quick-reference
                collapseWhitespace: true,
                conservativeCollapse: true,
                // removeAttributeQuotes: true,
                html5: true,
                minifyCSS: true,
                removeComments: true,
                removeEmptyAttributes: true
            },
            chunks: ["manifest", "vendors", "commons", "main"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/webapps/templates/module.html",
            filename: "./accounts/index.html",
            // inject: "head",
            // favicon: "favicon.ico",
            hash: true,
            minify: {
                // https://github.com/kangax/html-minifier#options-quick-reference
                collapseWhitespace: true,
                conservativeCollapse: true,
                // removeAttributeQuotes: true,
                html5: true,
                minifyCSS: true,
                removeComments: true,
                removeEmptyAttributes: true
            },
            chunks: ["manifest", "vendors", "commons", "accounts"]
        }),
        new ExtractTextPlugin({
            filename: "[name].css",
            // filename: "bundle.[name].css",
            ignoreOrder: true
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, "./src/webapps/resources"),
            to: path.resolve(__dirname, "./dist/resources")
        }, {
            from: path.resolve(__dirname, "./src/webapps/data"),
            to: path.resolve(__dirname, "./dist/data")
        }]),
        new webpack.BannerPlugin("Webpack"),
        // new CompressionPlugin({
        //     algorithm: "gzip"
        // })
        // new webpack.optimize.SplitChunksPlugin({
        //
        // })
    ]
};
