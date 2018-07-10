const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const relativePath = '..';
const srcPath = path.join(__dirname, relativePath, 'src');
const buildPath = path.join(__dirname, relativePath, 'build');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: [
    path.join(srcPath, 'index')
  ],
  output: {
    path: buildPath,
    filename: 'index_bundle.js'
  },
  devServer: {
    contentBase: buildPath
  },
  devtool: isDev ? 'source-map' : 'env',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: srcPath,
        use: ['eslint-loader']
      },
      {
        test: /\.jsx?$/,
        include: srcPath,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env'],
            babelrc: false
          }
        }
      },
      {
        test: /\.s[ac]ss$/,
        include: srcPath,
        use: [
          {
            loader: process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer]
            }
          },
          {
            loader: 'sass-loader'
          }
         ]
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        include: srcPath,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, relativePath, 'index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ]
};
