const { override, fixBabelImports, addPostcssPlugins, addWebpackAlias  } = require('customize-cra');
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addWebpackAlias({
        '@': resolve('src'),
        'components': resolve('src/components'),
        'styles': resolve('src/styles'),
    }),
    addPostcssPlugins([require('postcss-pxtorem')({
        rootValue: 75,
        propList: ['*'],
        minPixelValue:2,
        // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
        // propWhiteList: []
    }),])
);