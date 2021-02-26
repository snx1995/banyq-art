const base = require('./base');
const path = require('path');

module.exports = Object.assign(base, {
    devServer: {
        host: '0.0.0.0',
        port: 54321,
        hot: true,
        disableHostCheck: true,
        inline: true,
        contentBase: path.resolve(__dirname, '../dist')
    }
})