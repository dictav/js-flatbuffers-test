# flatbuffers-test

This is tests for flatbuffers npm package.

Some files were copied from https://github.com/google/flatbuffers/tree/a9514de978718c5c5af16e12427d52d4d90281a6/tests . And JavaScriptTest.js have been changed to use npm package.

```
$ sed -i '' -e 's,../js/flatbuffers,flatbuffers,' JavaScriptTest.js
```

It tests followings:

- Node.js can use npm package
- WebPack can bundle npm package
- Browserify can bundle npm package
- Rollup can bundle npm package

## Usage

```
$ npm install
$ npm test
```
