const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

if (process.env.NODE_ENV !== 'development') {
  throw new Error('You must run this script with NODE_ENV as development')
}

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
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
    path: `${__dirname}/src`,
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
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
    loaders: [
      {
        test: /\.jsx?$/, exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['react-hot-loader/babel']
        }
      },
    ]
  }
}
