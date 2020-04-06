// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {},
        "postcss-px-to-viewport": {
            viewportWidth: 750,
            unitPrecision: 3,
            viewportUint: 'vw',
            selectorBlackList: ['van'],
            minPixelValue: 1,
            mediaQuery: false
        }
    }
}