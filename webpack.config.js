var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

// var projectConfig = {
//   context: path.resolve('app/src'),
//   assetsPath: __dirname + '/dist/assets/'
// }


var config = {
//   context: projectConfig.context,
  entry: {
      'app': './app/src/app.ts',
      'vendor': './app/src/vendors.ts'
  },
  output: {
    path: './dist',
    filename: 'bundle.js'
  },

  plugins: [
    // new ExtractTextPlugin('./css/styles.css'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new CopyWebpackPlugin([
        { from: './app/src/index.html' }
    ]),
    new ExtractTextPlugin("assets/css/main.css?[hash]-[chunkhash]-[contenthash]-[name]", {
        disable: false,
        allChunks: true
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false
    //     }
    // })
  ],
  
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },

  module: {
    loaders: [
    //   {test: /\.js$/, loader: 'ng-annotate!babel?presets[]=es2015', exclude: /node_modules/},
      {test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/},
      {test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/},
      // {test: /\.scss$/, loader: 'style!css!sass', exclude: /node_modules/},
      {test: /\.scss/, loader: ExtractTextPlugin.extract('style', ['css?sourceMap', 'sass?sourceMap'])},
      // {
      //   test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   loader: 'file-loader?name=/res/[name].[ext]?[hash]'
      // }
    ],
    noParse: [ path.join(__dirname, 'node_modules', 'angular2', 'bundles') ]
  }
};

module.exports = config;