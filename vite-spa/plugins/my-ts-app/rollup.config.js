// import nodeResolve from "@rollup/plugin-node-resolve";
import esbuild from "rollup-plugin-esbuild";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import { prepend } from "rollup-plugin-insert"
import multiInput from 'rollup-plugin-multi-input';

export default [
    {
        input: ["src/*.panel.tsx"],
        plugins: [
            multiInput.default(),
            replace({
                "process.env.NODE_ENV": JSON.stringify("production"),
                preventAssignment: true
            }),
            external(),
            resolve(),
            commonjs(),
            postcss(),
            prepend("import React from 'react';", { exclude: "node_modules/**" }),
            esbuild({
                jsx: "transform",
                minify: true,
            })
        ],
        output: {
            dir: "dist/",
            format: "esm",
            sourcemap: true,
            exports: "named",
        },
        // external: ['react', 'react-dom', "@mantine/core"],
    }
]