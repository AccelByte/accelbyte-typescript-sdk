/*
 * Copyright (c) 2021-2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 *
 */

import path from 'path'

import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript'
import { writeFileSync, readFileSync } from 'fs'

const CONFIG = JSON.parse(readFileSync('./tsconfig.build.json', 'utf-8'))

/**
 *
 * @param {import('rollup').RollupOptions} config
 * @param {boolean} isBrowser
 * @returns
 */
function createConfig(config, isBrowser) {
  /** @type {import('rollup').RollupOptions} */
  const opts = {
    input: config.input,
    output: config.output,
    plugins: [
      peerDepsExternal(),
      resolve({ jsnext: true, preferBuiltins: true, browser: isBrowser }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.build.json',
        declaration: false,
        declarationDir: undefined,
        outDir: undefined,
        sourceMap: true
      }),
      json({
        compact: true
      })
    ],
    onwarn: warning => {
      if (warning.code !== 'CIRCULAR_DEPENDENCY') {
        throw new Error(warning.message)
      }
    }
  }

  return opts
}

export default async function createConfigs() {
  return [
    // ESM and CJS Modules
    createConfig({
      input: './src/index.ts',
      output: [
        {
          dir: path.join(CONFIG.compilerOptions.outDir, 'es'),
          format: 'es',
          preserveModules: true,
          sourcemap: true,
          assetFileNames: '[name]-[hash][extname]'
        },
        {
          file: path.join(CONFIG.compilerOptions.outDir, 'cjs', 'index.js'),
          format: 'cjs',
          sourcemap: true,
          assetFileNames: '[name]-[hash][extname]'
        }
      ]
    })
  ]
}
