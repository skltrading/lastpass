const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    './src/app'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.js?$/,
      use: ['babel-loader'],
      include: path.join(__dirname, 'src')
    }]
  }
};
