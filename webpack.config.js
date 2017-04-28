const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {

  entry: './src/index.js',

  output: {
    filename: "react-hub.js",
    path: __dirname + "/dist",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Simple [ webpack, react, babel, redux]',
      filename: './index.html',
      template: './index.html'
    }),
    new webpack.LoaderOptionsPlugin({
      // test: /\.xxx$/, // may apply this only for some modules
      options: {
        postcss() {
          return [autoprefixer, precss];
        }
      }
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }

};