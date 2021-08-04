const { join, resolve } = require('path');
const HtmlWebpackPligin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
        assetModuleFilename: 'images/[name].bundle.[ext]',
        filename: 'scripts/[name].bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: join(__dirname, './dist'),
        port: 3000,
        // 配合 friendly-error-webpack-plugin
        // 通知窗口 node-notifler
        // quiet: true,
        watchContentBase: true
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPligin({
            title: 'VIP 网站 DEV版',
            filename: 'index.html',
            template: resolve(__dirname, './src/index.dev.html')
        })
    ]
}