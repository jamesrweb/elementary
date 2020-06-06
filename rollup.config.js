import babel from '@rollup/plugin-babel';
import cjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

export default {
  input: ['./src/index.js'],
  output: [
    { file: "./dist/bundle.js", format: "es" },
    { file: "./dist/bundle.common.js", format: "cjs" },
    { file: "./dist/bundle.esm.js", format: "esm" }
  ],
  plugins: [
    cjs(),
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    terser()
  ]
}