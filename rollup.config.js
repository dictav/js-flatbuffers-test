import npm from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'

export default {
  entry: 'JavaScriptTest.js',
  dest: 'bundle_ru.js',
  moduleName: 'flatbuffers-test',
  format: 'iife',
  plugins: [
    npm({
      jsnext: true, // if provided in ES6
      main: true, // if provided in CommonJS
      browser: true,  // if provided for browsers
      extensions: [ '.js', '.json' ]
    }),
    replace({
      exclude: 'node_modules/**',
      // Maybe, rollup-plugin-replace has a regex bug...
      "var flatbuffers = require": "import {flatbuffers} from 'flatbuffers';"
    }),
    replace({
      include: 'node_modules/flatbuffers/js/flatbuffers.js',
      'this.flatbuffers = flatbuffers;': 'export { flatbuffers };'
    })
  ]
}
