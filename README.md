# Coding Environment

Coding environment with webpack, pug, scss, tailwindcss. 

## Support library

- .pug
- .scss
- Tailwind CSS
- Font Awesome(free)

## Environment

```bash
$ node -v
v14.5.0
```

## Setup

```bash
# Install dependencies
$ yarn

# Start develop
$ yarn start

# Generate static site to 'dist'
$ yarn build
```

## Trouble-shooting

If you encounter any of the following errors, please switch your Node.js version to v14.

```
ERROR in ./src/css/base.scss
Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):
ModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
Error: Missing binding /Users/masakiyoshiiwa/Workspace/coding-webpack/node_modules/node-sass/vendor/darwin-x64-72/binding.node
Node Sass could not find a binding for your current environment: OS X 64-bit with Node.js 12.x

Found bindings for the following environments:
  - OS X 64-bit with Node.js 14.x

This usually happens because your environment has changed since running `npm install`.
Run `npm rebuild node-sass` to download the binding for your current environment.
    at module.exports (/Users/masakiyoshiiwa/Workspace/coding-webpack/node_modules/node-sass/lib/binding.js:15:13)
    at Object.<anonymous> (/Users/masakiyoshiiwa/Workspace/coding-webpack/node_modules/node-sass/lib/index.js:14:35)
    at Module._compile (internal/modules/cjs/loader.js:1138:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1158:10)
    at Module.load (internal/modules/cjs/loader.js:986:32)
    at Function.Module._load (internal/modules/cjs/loader.js:879:14)
    at Module.require (internal/modules/cjs/loader.js:1026:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at getDefaultSassImpl (/Users/masakiyoshiiwa/Workspace/coding-webpack/node_modules/sass-loader/dist/index.js:198:10)
    at Object.loader (/Users/masakiyoshiiwa/Workspace/coding-webpack/node_modules/sass-loader/dist/index.js:80:29)
    at /Users/masakiyoshiiwa/Workspace/coding-webpack/node_modules/webpack/lib/NormalModule.js:316:20
    at /Users/masakiyoshiiwa/Workspace/coding-webpack/node_modules/loader-runner/lib/LoaderRunner.js:367:11
    at /Users/masakiyoshiiwa/Workspace/coding-webpack/node_modules/loader-runner/lib/LoaderRunner.js:233:18
    at runSyncOrAsync (/Users/masakiyoshiiwa/Workspace/coding-webpack/node_modules/loader-runner/lib/LoaderRunner.js:143:3)
    at iterateNormalLoaders (/Users/masakiyoshiiwa/Workspace/coding-webpack/node_modules/loader-runner/lib/LoaderRunner.js:232:2)
    at Array.<anonymous> (/Users/masakiyoshiiwa/Workspace/coding-webpack/node_modules/loader-runner/lib/LoaderRunner.js:205:4)
    at Storage.finished (/Users/masakiyoshiiwa/Workspace/coding-webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)
    at /Users/masakiyoshiiwa/Workspace/coding-webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9
    at /Users/masakiyoshiiwa/Workspace/coding-webpack/node_modules/graceful-fs/graceful-fs.js:123:16
    at FSReqCallback.readFileAfterClose [as oncomplete] (internal/fs/read_file_context.js:63:3)
```
