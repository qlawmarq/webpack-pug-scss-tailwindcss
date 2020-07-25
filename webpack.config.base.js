const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: [path.resolve(__dirname, './src/javascripts/entry.js')]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.(js)$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader'
      // },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].html' }
          },
          'extract-loader',
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', ':data-src']
            }
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/',
              publicPath: (url) => './static/' + url
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js'],
    // alias: {
    //   static: path.resolve(__dirname, 'src/static'),
    //   components: path.resolve(__dirname, 'src/pug/components')
    // }
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery'
    // })
  ]
};
