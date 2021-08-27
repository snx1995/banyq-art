const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js'
    },
    target: 'web',
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.min.js',
            '@src': path.resolve(__dirname, '../src'),
            '@components': '@src/components',
            '@utils': '@src/utils',
            '@static': '@src/static',
            '@assets': '@src/assets'
        },
        extensions: ['.js', '.vue', '.css', '.less', '.json', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /^node_modules$/,
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.(jsx?|babel|es6)$/,
                exclude: /^node_modules$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(le|c)ss$/,
                use: [ 
                    {
                        loader: MiniCssExtractPlugin.loader
                    }, 
                    'css-loader', 
                    'less-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|gif|jpg|jpeg)$/,
                loader: 'url-loader',
                options: {
                    limit: 128
                }
            },{
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        // Requires sass-loader@^7.0.0
                        options: {
                            implementation: require('sass'),
                            indentedSyntax: true // optional
                        },
                        // Requires sass-loader@^8.0.0
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                indentedSyntax: true // optional
                            },
                        },
                    },
                ],
              },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            inject: 'body'
        }),
        // new Webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ]
}