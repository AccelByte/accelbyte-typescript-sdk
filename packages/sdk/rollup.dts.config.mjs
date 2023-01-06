/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 *
 */

import dts from 'rollup-plugin-dts'
import path from 'path'
import { readFileSync } from 'fs'

const CONFIG = JSON.parse(readFileSync('./tsconfig.build.json', 'utf-8'))
const DIST_DIR = path.join(process.cwd(), CONFIG.compilerOptions.outDir)
const PATH_TO_INPUT = path.join(DIST_DIR, CONFIG.compilerOptions.declarationDir, 'index.d.ts')

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
