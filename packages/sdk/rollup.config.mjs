/*
 * Copyright (c) 2021-2024 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 *
 */

// @ts-check
import path from 'path'

import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript'
import alias from '@rollup/plugin-alias'
import { readFileSync, statSync } from 'fs'

const CONFIG = JSON.parse(readFileSync('./tsconfig.build.json', 'utf-8'))

const packageJson = JSON.parse(readFileSync(path.resolve('./package.json'), 'utf-8'))
// We need to exclude these because we don't want them bundled since they'll be installed anyway when we do `npm install`.
const packageJsonDependencies = Object.keys(packageJson.dependencies)

// TODO: adjust build flow so that it fits these conditions:
//
// 1. @accelbyte/validator doesn't need to be built first
// 2. @#accelbyte/validator isn't included in the @accelbyte/sdk bundle
try {
  statSync(path.resolve('../validator/dist'))
} catch (_err) {
  console.error('Error: please build @accelbyte/validator first before building @accelbyte/sdk')
}

/**
 *
 * @param {import('rollup').RollupOptions} config
 * @returns
 */
function createConfig(config) {
  /** @type {import('rollup').RollupOptions} */
  const opts = {
    input: config.input,
    output: config.output,
    plugins: [
      peerDepsExternal(),
      alias({
        entries: {
          '@accelbyte/sdk': path.resolve('./src'),
          '~/iam-definitions': path.resolve('../sdk-iam/src/generated-definitions')
        }
      }),
      resolve({ jsnext: true, preferBuiltins: true }),
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
    },
    external: [...packageJsonDependencies, /validator\/lib/, /lodash\//]
  }

  return opts
}

export default async function createConfigs() {
  return [
    // Browser module, DO NOT comment this.
    // The output is ESM, contains browser polyfills (window.Buffer) so that it could work in non-SSR and non-Node environments.
    createConfig({
      input: './src/index.browser.ts',
      output: {
        dir: path.join(CONFIG.compilerOptions.outDir, 'es/browser'),
        format: 'es',
        sourcemap: true,
        assetFileNames: '[name]-[hash][extname]'
      }
    }),

    // ESM and CJS Modules, for Node.js (can also run in SSR).
    createConfig({
      input: './src/index.node.ts',
      output: [
        {
          dir: path.join(CONFIG.compilerOptions.outDir, 'es/node'),
          format: 'es',
          sourcemap: true,
          assetFileNames: '[name]-[hash][extname]'
        },
        {
          file: path.join(CONFIG.compilerOptions.outDir, 'cjs/node/index.cjs'),
          format: 'cjs',
          sourcemap: true,
          assetFileNames: '[name]-[hash][extname]'
        }
      ]
    })
  ]
}
