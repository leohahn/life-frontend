const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../webpack.dev.js')

const __PORT__ = process.env.PORT || 3000

const server = new WebpackDevServer(webpack(config), {
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  hot: true,
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

