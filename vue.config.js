const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: '/',
  // 是否需要生产环境的sourcemap，设为false以加速生产环境构建
  productionSourceMap: false,
  devServer: {
    port: 9001,
    disableHostCheck: true // 不检查检查hostname，解决Invalid Host header的问题
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/less/color.less')] // 引入全局颜色变量文件
    }
  },
  configureWebpack: {
    // GZIP压缩
    plugins: [
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css/, // 匹配文件
        threshold: 10240 // 对超过10k文件压缩
      })
    ]
  }
}
