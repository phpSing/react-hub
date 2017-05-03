const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    'react': ['react', 'react-dom', 'react-router-dom', 'prop-types']
  },

  output: {
    filename: 'react.bundle.js',
    path: path.resolve(__dirname, './lib'),
    library: 'react_lib',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production') // 固定资源
    }),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, './lib/react-manifest.json'),
      name: 'react_lib'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
}