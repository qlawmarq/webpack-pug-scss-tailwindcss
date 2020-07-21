const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
});

for (const key in config.entry) {
  if (config.entry.hasOwnProperty(key)) {
    config.entry[key].unshift('webpack/hot/dev-server');
    config.entry[key].unshift('webpack-hot-middleware/client');
  }
}

config.module.rules.push({
  test: /\.(sass|scss)$/,
  use: [
    'css-hot-loader',
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 2
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        plugins: [
          // autoprefixer({
          //   browsers: [
          //     'last 2 version',
          //     'IE 11'
          //   ]
          // })
        ]
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        includePaths: [path.resolve('./node_modules/')]
      }
    },
  ]
});

module.exports = config;
