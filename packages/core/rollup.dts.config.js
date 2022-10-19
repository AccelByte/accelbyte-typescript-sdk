/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 *
 */

import dts from 'rollup-plugin-dts'

import path from 'path'
import tsconfigBuildJson from './tsconfig.build.json'

const DIST_DIR = path.join(__dirname, tsconfigBuildJson.compilerOptions.outDir)
const PATH_TO_INPUT = path.join(DIST_DIR, tsconfigBuildJson.compilerOptions.declarationDir, 'index.d.ts')

/** @type {import('rollup').RollupOptions} */
const opts = {
  input: PATH_TO_INPUT,
  output: [
    {
      file: `dist/index.d.ts`,
      format: 'es'
    }
  ],
  plugins: [dts()]
}

export default opts
