const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    // create two library bundles, one with jQuery and
    // another with Angular and related libraries
    'react': ['react', 'react-dom', 'react-router-dom']
    // 'fetch': ['angular', 'angular-router', 'angular-sanitize']
  },

  output: {
    filename: 'react.bundle.js',
    path: path.resolve(__dirname, './lib'),

    // The name of the global variable which the library's
    // require() function will be assigned to
    library: 'react_lib',
  },

  plugins: [
    new webpack.DllPlugin({
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      path: path.resolve(__dirname, './lib/react-manifest.json'),
      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      name: 'react_lib'
    }),
  ],
}