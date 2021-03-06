module.exports = {
  publicPath: '/',  // 根路径
  outputDir: 'dist',  // 构建输出目录
  assetsDir: 'assets',  // 静态资源目录(js,css,img,fonts)
  lintOnSave: false,  // 是否开启eslint保存检测，有效值：true || false || 'error'
  devServer: {
    open: false,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://localhost:5000/api/',
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}