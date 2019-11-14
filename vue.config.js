module.exports = {
    // 基本路路径, vue.cli 3.3以前请使用baseUrl
    publicPath: '/',
    // 输出文件目录
    outputDir: 'dist',
    // ⽤用于嵌套生成的静态资产（js，css，img，fonts）的目录。
    assetsDir: '',
    // ⽣生产环境sourceMap
    productionSourceMap: true,
    // webpack配置
    configureWebpack: () => {},
    chainWebpack: () => {},
    // css相关配置
    css: {
        // 启⽤用 CSS modules
        modules: false,
        // 是否使⽤用css分离插件
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器器配置项
        loaderOptions: {},
    },
    // webpack-dev-server 相关配置
    devServer: {
        proxy: {
            '/alqq': {
                target: 'https://www.aspxbyg.com',
                changeOrigin: true,
                pathRewrite: {
                    "^/alqq": ""
                }
            }
        }
    },
    // 第三⽅方插件配置
    pluginOptions: {
        // ...
    }
}