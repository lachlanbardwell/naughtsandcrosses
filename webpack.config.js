const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv-webpack');

const isDevelopment = process.env.NODE_ENV === 'DEVELOPMENT';

module.exports = {
  devServer: {
    port: 3000,
    // proxy: { '/': 'http://localhost:3100' },
    historyApiFallback: true,
  },
  devtool: isDevelopment ? 'source-map' : false,
  mode: isDevelopment ? 'development' : 'production',
  entry: path.resolve(__dirname, 'src', 'client', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: isDevelopment ? '' : '/dist/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.scss'],
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        },
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader',
      },
    ],
  },
  performance: {
    maxEntrypointSize: 400000,
    maxAssetSize: 400000,
  },
  plugins: [
    ...(isDevelopment
      ? [new ForkTsCheckerWebpackPlugin()]
      : [new MiniCssExtractPlugin()]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'client', 'index.html'),
    }),
    new dotenv(),
  ],
};
