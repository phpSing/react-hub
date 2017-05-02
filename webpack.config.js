const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const devServer = require('./webpack.server')
const pkg = require('./package.json')

const isDev = process.env.NODE_ENV !== 'production'
const routeComponentRegex = /src[\/\\]pages[\/\\]([^\/\\]+).jsx$/;
const assetDirectory = pkg.version


const commonPlugin = [
  new webpack.DllReferencePlugin({
    context: '.',
    manifest: require('./lib/react-manifest.json')
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production')
  }),
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'vendor',
  //   minChunks: Infinity,
  //   // filename: 'vendor.[hash:8].js',
  // }),
  new HtmlWebpackPlugin({
    title: 'Simple [ webpack, react, babel, split loader spa]',
    path: path.resolve(__dirname, './dist'),
    filename: 'index.html',
    template: path.resolve(__dirname, './index.html')
  }),
  new webpack.LoaderOptionsPlugin({
    // test: /\.xxx$/, // may apply this only for some modules
    options: {
      postcss() {
        return [autoprefixer({
          browsers: [
            'ios >= 8',
            'ie >= 10'
          ]
        }), precss];
      }
    }
  })
]

const devPlugin = [

]

const prdPlugin = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
]

const plugins = isDev ? [...commonPlugin, ...devPlugin] : [...commonPlugin, ...prdPlugin]

module.exports = {

  context: path.resolve(__dirname, 'src'),

  entry: {
    main: './index.js'
    // vendor: [
    //   'react',
    //   'react-dom',
    //   'react-router-dom'
    // ]
  },

  output: {
    path: __dirname + "/dist",
    publicPath: '/',
    filename: `${assetDirectory}/[name].js`,
    chunkFilename: `${assetDirectory}/[name].[id].js`
  },

  plugins: plugins,

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, routeComponentRegex],
        loaders: ["babel-loader"]
      },
      {
        test: routeComponentRegex,
        loaders: ['bundle-loader?lazy&name=[name]', 'babel-loader']
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  devServer
};