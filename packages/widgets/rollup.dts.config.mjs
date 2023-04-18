/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 *
 */

// @ts-check
import { readFileSync } from 'fs'
import path from 'path'
import dts from 'rollup-plugin-dts'

const PATH_TO_INPUT = path.join(process.cwd(), 'src/index.ts')

const packageJson = JSON.parse(readFileSync(path.resolve('./package.json'), 'utf-8'))
// We need to exclude these because we don't want them bundled since they'll be installed anyway when we do `npm install`.
const packageJsonDependencies = Object.keys(packageJson.dependencies)
const packageJsonPeerDependencies = Object.keys(packageJson.peerDependencies)

/** @type {import('rollup').RollupOptions} */
const opts = {
  input: PATH_TO_INPUT,
  output: {
    file: 'dist/accelbyte-widgets.d.ts',
    format: 'es',
    interop: 'auto'
  },
  external: [
    /\.scss$/,
    /\.css$/,
    ...packageJsonDependencies,
    ...packageJsonPeerDependencies,
    /validator\/lib/,
    /lodash\//,
    /@adyen\/adyen-web\//,
    '@types/react',
    '@types/react-dom',
    '@types/react-router-dom'
  ],
  plugins: [
    dts({
      respectExternal: true
    })
  ]
}

export default opts
