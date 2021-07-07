const { dirname, resolve } = require('path')
const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new htmlwebpackplugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node-modules/,
        use: 'babel-loader'
      }
    ]
  }
}
