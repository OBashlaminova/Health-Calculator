const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, 'assets/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Data: path.resolve(__dirname, 'src/data/'),
      Features: path.resolve(__dirname, 'src/features/'),
      Pages: path.resolve(__dirname, 'src/pages/'),
      Src: path.resolve(__dirname, 'src/'),
      Styles: path.resolve(__dirname, 'src/styles/')
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
