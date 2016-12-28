var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var PATHS = {
  src: path.join(__dirname, 'src'),
  style: path.join(__dirname, 'src', 'stylesheets'),
  dist: path.join(__dirname, 'dist')
};

var config = {
  bail: true,

  resolve: {
    root: PATHS.src,
    extension: ['']
  },

  entry: [
    path.resolve(PATHS.src)
  ],

  output: {
    filename: 'index.js',
    library: 'react-buddy-modal',
    libraryTarget: 'umd',
    path: PATHS.dist,
    pathinfo: true,
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: PATHS.src,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      }
    ]
  },

  sassLoader: {
    includePaths: [path.resolve(PATHS.style)]
  },

  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};

module.exports = config;
