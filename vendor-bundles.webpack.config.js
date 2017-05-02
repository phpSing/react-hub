const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    'react': ['react', 'react-dom', 'react-router-dom']
  },

  output: {
    filename: 'react.bundle.js',
    path: path.resolve(__dirname, './lib'),
    library: 'react_lib',
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, './lib/react-manifest.json'),
      name: 'react_lib'
    }),
  ],
}