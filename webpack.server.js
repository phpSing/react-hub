module.exports = {
  historyApiFallback: true,
  port: 18080,
  compress: false,
  inline: true,
  hot: false,
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