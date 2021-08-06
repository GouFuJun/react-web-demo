const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// css压缩插件
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// js压缩
const TerserPlugin = require("terser-webpack-plugin");
// 清除
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    output: {
        assetModuleFilename: 'images/[name].[contenthash:5].bundle.[ext]',
        filename: 'scripts/[name].[contenthash:5].bundle.js',
        chunkFilename: 'scripts/[name].[contenthash:5].chunk.bundle.js',
        publicPath: '/'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({
                test: /\.css$/g,
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
            }),
            new TerserPlugin({
                terserOptions: {
                    toplevel: true, // 最高级别，删除无用代码
                    ie8: true,
                    safari10: true,
                }
            })
        ],
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            chunks: 'async', // initial all async
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: false,
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    name: 'commons'
                }
            },
            minSize: {
                javascript: 100000,
                style: 100000
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'VIP 网站 PROD版',
            filename: 'index.html',
            template: resolve(__dirname, './src/index.prod.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        })
    ]
}