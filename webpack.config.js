const { dirname, resolve } = require('path')
const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new htmlwebpackplugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node-modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
