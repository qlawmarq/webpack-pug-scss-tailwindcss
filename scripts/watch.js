const gaze = require('gaze');
const fs = require('fs');
const path = require('path');

const AUTO_COMMENT_STR = [
  '/**',
  ' * @file A file that just imports the pug (automatically output, do not edit it)',
  ' */'
].join('\n');

/**
 * @param {string} dirPath - Directory path to be monitored
 */
function _autoImportPugFiles(dirPath) {
  fs.readdir(dirPath, (err, list) => {
    const pugFiles = list.filter((fileName) => /\.pug$/.test(fileName));
    const codeStr = [
      AUTO_COMMENT_STR,
      '',
      pugFiles.map((pugFile) => `import '../pug/${pugFile}'`).join('\n'),
      ''
    ].join('\n');
    fs.writeFile(path.resolve(__dirname, '../src/javascripts/pugImport.js'), codeStr, (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
}

/**
 * @param {string} dirPath - Directory path to be monitored
 */
function autoImportPugFiles(dirPath) {
  const relativePath = path.relative(__dirname, dirPath);
  const watchFiles = [
    `${relativePath}/*.pug`
  ];
  gaze(watchFiles, { cwd: __dirname }, (err, watcher) => {
    if (err) throw err;
    watcher.on('all', () => {
      _autoImportPugFiles(dirPath);
    });
  });
  _autoImportPugFiles(dirPath);
}

autoImportPugFiles(path.resolve(__dirname, '../src/pug'));
