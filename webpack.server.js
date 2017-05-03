module.exports = {
  historyApiFallback: true,
  port: 18080,
  compress: true,
  inline: true,
  hot: false,
  // https: true,
  host: 'tim.haiziwang.com',
  disableHostCheck: true,
  stats: {
    assets: true,
    children: false,
    chunks: false,
    hash: false,
    modules: false,
    publicPath: false,
    timings: true,
    version: false,
    warnings: true,
    colors: {
      green: '\u001b[32m',
    }
  }
}