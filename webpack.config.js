const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(process.cwd(), '.build'),
    publicPath: '/public/',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js']
  }
}
