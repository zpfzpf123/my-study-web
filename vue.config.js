const webpack = require("webpack");
const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
module.exports = {
    publicPath: "./",
    lintOnSave: false,
    chainWebpack: (config) => {
        config.resolve.alias
            .set("vue$", "vue/dist/vue.esm.js");
    },
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
            alias: {
                // src下的文件夹
                assets: "@/assets",
                components: "@/components",
                views: "@/views",
            },
        },
        plugins: [
            new NodePolyfillPlugin()
        ]
    },
};
