var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

const VENDOR_LIBS = [
  'faker', 'lodash', 'react', 'react-dom', 'react-input-range',
  'react-redux', 'react-router', 'redux', 'redux-form', 'redux-thunk'
] // each module we want to split off can be passed in as a string

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS // I want to produce a new bundle file for the vendors.
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js' // if a change is made to our vendor or bundle chunks we add chunkhash to the name. The hash depends on the contents of the file.
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/ // do not try to apply babel to node modules
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'] // this creates a third javascript file in order to better let thje browser know if anything is changed
    }), // check the total sum of all our files. if any are the same, pull them out and and only leave them in the vendor output
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
