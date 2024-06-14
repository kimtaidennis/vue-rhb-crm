module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8080
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/' + process.env.CI_PROJECT_NAME + '/'
    : '/',
  transpileDependencies: ['vuetify'],
}
