/**
 * @file pugをimportするだけのファイル
 */

const req = require.context('../pug/', false, /\.pug/);
req.keys().forEach((fileName) => {
  req(fileName);
});
