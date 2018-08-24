// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import {uglify} from 'rollup-plugin-uglify';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        // 输出的文件类型 (amd, cjs, es, iife, umd)
        format: 'cjs',
        sourceMap: true
    },
    plugins: [
        // tells Rollup how to find xxx in node_modules
        resolve(),
        babel({
            babelrc: false,
            presets: [
                "es2015-rollup", "stage-2",
                // "es2016",
                // "stage-3",
                ["env", {
                    "targets": {
                        "chrome": 68
                    },
                    "modules": false,
                    "loose": true
                }]
            ],
            plugins: [
                'external-helpers',
                'babel-polyfill',
                'babel-plugin-transform-runtime'
            ],
            runtimeHelpers: true,
            externalHelpers: true,
            exclude: 'node_modules/**'
        }),
        // converts date-fns to ES modules
        commonjs(),
        json(),
        // minify, but only in production
        production && uglify()
    ]
};
