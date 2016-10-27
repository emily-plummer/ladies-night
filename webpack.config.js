require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
      path: './bin',
      filename: 'app.bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        }
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
      }
    ]
  },
  plugins: [
   new ExtractTextPlugin("styles.css")
  ]
};
