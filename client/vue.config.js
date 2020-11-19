const path = require('path');

module.exports = {
    devServer: {
        proxy: {
            '^/': {
                target: 'http://localhost:5000',
                changeOrigin: true,
            },
        },
    },
    chainWebpack: config => {
        config.resolve.alias.set(
            'vue$',
            path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
        )
    },
    transpileDependencies: ['x5-gmaps'],
};