/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 *
 */

import dts from 'rollup-plugin-dts'
import path from 'path'
import { readFileSync } from 'fs'

const PATH_TO_INPUT = path.join(process.cwd(), 'src/index.ts')

const packageJson = JSON.parse(readFileSync(path.resolve('./package.json'), 'utf-8'))
// We need to exclude these because we don't want them bundled since they'll be installed anyway when we do `npm install`.
const packageJsonDependencies = Object.keys(packageJson.dependencies)

/** @type {import('rollup').RollupOptions} */
const opts = {
  input: PATH_TO_INPUT,
  output: [
    {
      file: `dist/index.d.ts`,
      format: 'es'
    }
  ],
  plugins: [dts()],
  external: [...packageJsonDependencies, /node_modules\/lodash/, /node_modules\/validator/]
}

export default opts
