const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('../webpack.config.development');
const bundler = webpack(webpackConfig);

const webpackDevMiddlewareInstance = webpackDevMiddleware(bundler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
});

const server = browserSync({
  port: 3000,
  ghostMode: false,
  server: {
    baseDir: 'dist',
    middleware: [
      webpackDevMiddlewareInstance,
      webpackHotMiddleware(bundler)
    ]
  },
  files: [
    {
      match: ['./src/pug/**/*.pug'],
      fn: (event, file) => {
        webpackDevMiddlewareInstance.waitUntilValid(() => {
          console.log('finish');
          server.reload();
        });
      }
    }
  ]
});
