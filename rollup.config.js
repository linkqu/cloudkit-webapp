// rollup.config.js
import resolve from "rollup-plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import replace from "rollup-plugin-replace";
import {eslint} from "rollup-plugin-eslint";
import {uglify} from "rollup-plugin-uglify";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: "src/main.js",
    output: {
        file: "dist/bundle.js",
        // 输出的文件类型 (amd, cjs, es, iife, umd)
        format: "cjs",
        sourceMap: true
    },
    plugins: [
        // tells Rollup how to find xxx in node_modules
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        postcss({
            extensions: [".css"],

        }),
        babel({
            babelrc: false,
            presets: [
                // "@babel/preset-stage-2",
                // "@babel/preset-stage-3",
                ["@babel/preset-env", {
                    "targets": {
                        "chrome": 68
                    },
                    "modules": false,
                    "loose": true
                }],
                "@babel/preset-flow"
            ],
            plugins: [
                "@babel/plugin-external-helpers",
                "@babel/plugin-transform-runtime",
                "@babel/plugin-proposal-class-properties"
            ],
            runtimeHelpers: true,
            externalHelpers: true,
            exclude: "node_modules/**"
        }),
        // converts date-fns to ES modules
        commonjs(),
        json(),
        eslint({
            exclude: [
                "node_modules/**",
                "dist/**"
            ]
        }),
        replace({
            ENV: JSON.stringify(process.env.NODE_ENV || "development"),
        })
        // minify, but only in production
        // (process.env.NODE_ENV === "production" && uglify()),
        // production && uglify()
    ]
};
