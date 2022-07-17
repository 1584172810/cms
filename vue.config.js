module.exports = {
  outputDir: './build',
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://leju.bufan.cloud',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  }
}
