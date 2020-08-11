module.exports = {
  publicPath: process.env.NODE_ENV  === 'production'
    ? '/Notify-App/'
    : '/',
  assetsDir: 'assets',
  productionSourceMap: false,
}