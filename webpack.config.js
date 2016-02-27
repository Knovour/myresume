/* global process */
/* global __dirname */

'use strict';

const webpack = require('webpack');

const entry = {
  index:  `${__dirname}/src/js/index.jsx`,
};

const output = {
  path: `${__dirname}/assets/js`,
  publicPath: 'js/',
  filename: '[name].js',
  chunkFilename: '[name].js'
}

const loaders = [{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  query: {
    presets: [ 'react', 'es2015' ]
  }
}];

const resolve = {
  modulesDirectories: [ 'node_modules' ],
  extensions: [ '', '.js', '.jsx' ]
};

const plugins = [ new webpack.optimize.UglifyJsPlugin() ];

module.exports = {
  entry,
  output,
  module: {
    loaders,
  },
  resolve,
  plugins
};
