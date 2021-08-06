const merge = require('webpack-merge');
const { join, resolve } = require('path');

// 获取命令执行中的参数
const argv = require('yargs-parser')(process.argv.slice(2));
// 获取模式
const _mode = argv.mode || 'development';
const _modeFlag = _mode === 'development';
// 根据模式读取需要合并的配置
const _mergeConfig = require(`./webpack.${_modeFlag?'dev':'prod'}.js`);
// css提取到单独文件 -- 好像不支持 webpack5
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// css 解析
const cssLoaders = [
    MiniCssExtractPlugin.loader,
    {
        loader: 'css-loader',
        options: {
            // 解析 @import 引入资源
            importLoaders: 1
        }
    },
    {
        loader: 'postcss-loader'
    }
]

// 公共配置
const webpackBaseConfig = {
    entry: {
        app: resolve('src/index.tsx')
    },
    output: {
        path: join(__dirname, './dist')
    },
    resolve: {
        alias: {
            "@assets": resolve("src/assets"),
            "@images": resolve("src/assets/images"),
            "@components": resolve("src/components"),
            "@models": resolve("src/models"),
            "@routes": resolve("src/routes"),
            "@pages": resolve("src/pages"),
            "@utils": resolve("src/utils"),
            "@recoil": resolve("src/recoil"),
            "@hooks": resolve("src/hooks"),
            "@api": resolve("src/api"),
        },
        extensions: [".js", ".ts", ".tsx", '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                include: [resolve('src')],
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: cssLoaders
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|woff|woff2|ttf|svg|otf|webp)$/,
                type: 'asset'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: _modeFlag?'styles/[name].css':'styles/[name].[contenthash:5].css',
            chunkFilename: _modeFlag?'styles/[id].css':'styles/[id].[contenthash:5].css',
            ignoreOrder: true
        })
    ]
}

module.exports = merge.default(webpackBaseConfig, _mergeConfig);