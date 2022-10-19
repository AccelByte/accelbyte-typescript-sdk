/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
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

import packageJson from './package.json'
import tsconfigBuildJson from './tsconfig.build.json'
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs'

/** @type {import('rollup').RollupOptions} */
const opts = {
  input: './src/index.ts',
  output: [
    {
      file: packageJson.module,
      format: 'es',
      sourcemap: true,
      assetFileNames: '[name]-[hash][extname]'
    },
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      assetFileNames: '[name]-[hash][extname]'
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ jsnext: true, preferBuiltins: true, browser: true }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
      sourceMap: true
    }),
    json({
      compact: true
    }),
    declarationRewritePlugin()
  ]
}

export default opts

// Local plugins.
// This is a custom plugin to rewrite the declaration files.
// Read more about the "hooks" of Rollup, visit https://rollupjs.org/guide/en/#output-generation-hooks.
const ACTUAL_ANCHOR = path.join(path.resolve(__dirname), 'src').replace(/\\/g, '/')
const IMPORT_ANCHOR = `@od-web-sdk`
const IMPORT_REGEX = /@od-web-sdk(\/\w+)+/g

function declarationRewritePlugin() {
  return {
    name: 'declaration-imports-rewriter-plugin',
    generateBundle(_opts, bundle, _isWrite) {
      const fileNames = Object.keys(bundle)
      // Iterate all bundled files.
      for (let i = 0; i < fileNames.length; i += 1) {
        const fileName = fileNames[i]
        // Full filesystem path.
        const fullPathToFile = path.join(ACTUAL_ANCHOR, fileName)
        // Normalize the full path. This is because we might have `declarationDir`
        // in `tsconfig.build.json`. If we don't normalize it, then the imports will be referring
        // to incorrect paths.
        const normalizedFullPath = fullPathToFile.replace(
          path.join(ACTUAL_ANCHOR, tsconfigBuildJson.compilerOptions.declarationDir),
          ACTUAL_ANCHOR
        )
        // If it is a declaration file, then we replace "@od-web-sdk" with ".".
        if (fileName.endsWith('.d.ts')) {
          // Example `fileName`: accelbyte-web-sdk/packages/core/src/generated/platform/definitions/WalletPagingSlicedResult.d.ts.
          // Example `importSource`: @od-web-sdk/utils/Network.
          // Here, we want to rewrite all imports inside `fileName` so that it's relative instead of absolute,
          // because in bundled files, we assume we are no longer in the justice-odin monorepo ecosystem.
          const file = bundle[fileName]

          /** @type {string} */
          let source = file.source
          const imports = source.match(IMPORT_REGEX)

          if (imports) {
            const deduped = Array.from(new Set(imports))
            for (const match of deduped) {
              // Replace the imports with the relative paths.
              const actualPath = match.replace(IMPORT_ANCHOR, ACTUAL_ANCHOR)
              let relativePath = path.relative(path.dirname(normalizedFullPath), actualPath).replace(/\\/g, '/')
              // Add relative indicator so it doesn't try to resolve from `node_modules`.
              if (!relativePath.startsWith('.')) {
                relativePath = `./${relativePath}`
              }
              source = source.replace(new RegExp(match, 'g'), relativePath)
            }
          }

          // Rewrite the source.
          file.source = source
        }
      }
      updateVersionFromChangelog()
      generateBuildPackageJson()
    }
  }
}

function generateBuildPackageJson() {
  const {
    name,
    version,
    author,
    license,
    main,
    module,
    peerDependencies,
    types,
  } = JSON.parse(readFileSync(path.resolve('./package.json'), 'utf-8'))
  if (!existsSync(path.resolve(`./dist`))) {
      mkdirSync(path.resolve(`./dist`))
  }
  writeFileSync(path.resolve(`./dist/package.json`), JSON.stringify({
    name,
    version,
    author,
    license,
    main: main.replace("/dist/", "/"),
    module: module.replace("/dist/", "/"),
    types: types.replace("/dist/", "/"),
    peerDependencies,
  }, null, 2))
}

function updateVersionFromChangelog() {
  const packageJson = JSON.parse(readFileSync(path.resolve('./package.json'), 'utf-8'))
  const changelogContent = readFileSync(path.resolve('./CHANGELOG.md'), 'utf-8')
  const version = changelogContent.match(/(?<=### )\S+/)?.[0]
  if (version) {
    packageJson.version = version
  }
  writeFileSync(path.resolve('./package.json'), JSON.stringify(packageJson, null, 2))
}
