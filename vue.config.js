module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://derevo.loc/',
        ws: true,
        changeOrigin: true
      },
      '/oauth': {
        target: 'http://derevo.loc/',
        ws: true,
        changeOrigin: true
      },
    }
  }
}