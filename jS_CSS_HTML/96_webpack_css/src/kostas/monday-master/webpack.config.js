const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminJpegoptim = require('imagemin-jpegoptim');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/scripts/app.js',
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?/i,
        exclude: /node_modules/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s?css?/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../images'
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: '../index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '../styles/main.css'
    }),
    new ImageminWebpackPlugin({
      test: /\.(jpe?g|png|svg|gif)?/i,
      plugins: [
        ImageminJpegoptim({
          size: "60%",
          progressive: true
        })
      ]
    })
  ]
}
