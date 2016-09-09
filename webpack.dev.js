const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

if (process.env.NODE_ENV !== 'development') {
  throw new Error('You must run this script with NODE_ENV as development')
}

const APP_PATH = path.join(__dirname, 'src')
const BUILD_PATH = path.join(__dirname, 'build')

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['src', 'node_modules']
  },

  debug: true,

  devtool: 'eval-source-map',

  noInfo: true,

  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './src/index'
    ]
  },

  target: 'web',

  output: {
    path: BUILD_PATH,
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      },
      __PROD__: false,
      __DEV__: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      inject: true
    })
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/, include: APP_PATH,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['react-hot-loader/babel']
      }
    }, {
      // triggered by: require('*.css')
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      // triggered by: require('*.gif'), ..., all other extensions.
      test: /\.(gif|jpg|png|svg)$/,
      loader: 'url-loader?limit=10000'
    }, {
      // triggered by: require('*favicon.ico')
      test: /favicon\.ico$/,
      loader: 'url-loader?limit=1'
    }, {
      // triggered by: require('...')
      test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'url-loader?limit=100000'
    }]
  }
}
