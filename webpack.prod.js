process.env.NODE_ENV = 'production'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const PurifyCssWebpackPlugin = require('purifycss-webpack-plugin')

if (process.env.NODE_ENV !== 'production') {
  throw new Error('You must run this script with NODE_ENV as production')
}

const APP_PATH = path.join(__dirname, 'src')
const BUILD_PATH = path.join(__dirname, 'build')

module.exports = {
  // This configuration allows to use require without an extension. The extension
  // will be guessed based on the extensions array.
  //
  // E.g.: const myModule = require('./myModule')
  // Resolves to (the order matters):
  //   1- require('./myModule'),
  //   2- require('./myModule.js'),
  //   3- require('./myModule.jsx')
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  // This option creates source map for all the created chunks. It is the highest
  // quality source map available (builds take longer), that is why is
  // only used on production.
  devtool: 'source-map',
  // This object defines the entry path for all of out entries.
  // Each entry is unrelated to eachother, and can be separatedly added as script
  // tags or link tags on a .html file.
  // The keys are the respective entry name, and can later be refered as '[name]'.
  entry: {
    app: path.join(APP_PATH, 'index.js'),
    style: 'bootstrap/dist/css/bootstrap.css',
    vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-bootstrap', 'phoenix']
  },

  target: 'web',

  // This object defines where and how the bundled files will be generated.
  // Options:
  // - path: The folder where the built files will be.
  // - publicPath: How will the script on HTML refer to the files.
  //   <script src="/static/myFile.js"></script> for publicPath === '/static'
  // - filename: The name of the final file. It can be specified wildcards inside
  //     brackets, like '[name].js', which fills [name] with the name of the entry.
  output: {
    path: BUILD_PATH,
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js'
  },

  // Plugins increase the functionality of the configuration.
  plugins: [
    // Plugin that cleans the build directory before compiling again.
    new CleanWebpackPlugin([BUILD_PATH], {
      root: process.cwd()
    }),
    // Plugin that extracts all require('*.css') into their own .css file.
    new ExtractTextWebpackPlugin('[name].[chunkhash].css'),
    // Plugin that replaces a specific variable with a string when building files.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __PROD__: true
    }),
    // UglifyJS plugin that creates a minified version of all the built files.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // Plugin that extracts common dependencies between all entries into a new entry,
    // in the following case called 'vendor'. 'manifest' is used for the webpack runtime.
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    // Removes possible require duplicates from entries.
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    // Plugin that creates a HTML file that is based on a template.
    // This plugin injects all the built files for us, so we don't have to do it.
    new HtmlWebpackPlugin({
      template: path.join(APP_PATH, 'index.ejs'),
      inject: true
    })
  ],
  // The module object customizes the behaviour of require statements inside our code.
  module: {
    // Loaders give functionality to require statements when they are used with a
    // particular file extension.
    loaders: [{
      // triggered by: require('*.js') or require('*.jsx')
      test: /\.jsx?$/, include: APP_PATH,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      // triggered by: require('*.css')
      test: /\.css$/,
      loader: ExtractTextWebpackPlugin.extract('style', 'css')
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
