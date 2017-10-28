const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
/*
* We've enabled ExtractTextPlugin for you. This allows your app to
* use css modules that will be moved into a seperate CSS file instead of inside
* one of your module entries!
*
* https://github.com/webpack-contrib/extract-text-webpack-plugin
*
*/
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: {
    app: './src/index.js',
    Calculadora: './src/Calculadora.js',
    style: './src/css/style.css'
  },
  devtool: 'inline-source-map',
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      hash: false,
      title: 'Calculadora Básica',
      // template: './src/index.html',
      // filename: '../dist/index.html' //relative to root of the application
      template: path.join(__dirname, 'src','public', 'index.html')

    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch:false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  }

};
