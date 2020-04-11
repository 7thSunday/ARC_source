module.exports = {
  publicPath: './',
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/ARC': {
        target: 'http://0.0.0.0:8080',
        changeOrigin: true,
        pathRewrite: { '^/ARC': '' }
      }
    }
  }
};
