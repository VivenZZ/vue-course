const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // 配置目录简写
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
