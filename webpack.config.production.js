const path = require('path');
const merge = require('webpack-merge');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = require('./webpack.config.base.js');
const config = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
});

config.module.rules.push({
  test: /\.(sass|scss)$/,
  use: [
    // CSSをextractする
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        // 0 => no loaders (default);
        // 1 => postcss-loader;
        // 2 => postcss-loader, sass-loader
        importLoaders: 2
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: [
          require('tailwindcss'),
          cssnano()
        ]
      }
    },
    {
      loader: 'sass-loader'
    },
  ]
});

module.exports = config;
