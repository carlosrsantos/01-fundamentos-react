const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.jsx'), /* resolve o problema de path para diferentes S.O */
  output: {
    path: path.resolve(__dirname, 'dist'), //direciona a saída para a pasta dist
    filename: 'bundle.js' //direciona a saída para o arquivo bundle.js
  },
  resolve: {
    extensions: ['.js', '.jsx'], //resolve as extensões .js e .jsx
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader','sass-loader'],
      }
    ]
  }
};