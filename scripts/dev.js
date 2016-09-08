process.env.NODE_ENV = 'development'
const __PORT__ = process.env.PORT || 3000

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../config/webpack.dev.js')

const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
})

server.listen(__PORT__, 'localhost', function (err, result) {
  if (err) {
    throw err
  }

  console.log(`Server running at http://localhost:${__PORT__}/`)
})

