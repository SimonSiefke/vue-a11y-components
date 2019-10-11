import commonjs from 'rollup-plugin-commonjs' // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue' // Handle .vue SFC files
import buble from 'rollup-plugin-buble' // Transpile/polyfill with reasonable browser support

export default {
  input: 'index.js', // Path relative to package.json
  output: {
    dir: 'dist',
  },
  plugins: [
    commonjs(),
    vue({
      css: false,
      compileTemplate: true, // Explicitly convert template to render function
    }),
    buble(), // Transpile to ES5
  ],
}
