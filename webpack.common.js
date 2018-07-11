const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
  // mode: 'production',
  entry: {
    app: './src/index.js',
  },
  // devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // devServer: {
  //   contentBase: './dist',
  //   hot: true,
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'output management',
    }),
    // new webpack.NamedModulesPlugin,
    // new webpack.HotModuleReplacementPlugin,
  ],
};