/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
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
import alias from '@rollup/plugin-alias'
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
      alias({
        entries: {
          '@accelbyte/sdk': path.resolve('./src')
        }
      }),
      resolve({ jsnext: true, preferBuiltins: true, browser: isBrowser }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.build.json',
        sourceMap: true
      }),
      json({
        compact: true
      }),
      declarationRewritePlugin()
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
    /*
    // Browser Module, Immediately-invoked Function Expressions (IIFE). Enable if a direct browser support is needed
    createConfig(
      {
        input: './src/index.browser.ts',
        output: {
          file: path.join(CONFIG.compilerOptions.outDir, 'index.browser.es.js'),
          format: 'es',
          sourcemap: true,
          assetFileNames: '[name]-[hash][extname]'
        }
      },
      true
    ),
     */

    // FIXME: create conditional exports in package.json. At the moment, we are assuming that
    // Node will always use CJS and browser will always use ESM, which may not be true.
    // We need to also cover the ESM side of Node.js later.

    // Node bundle. This is because when we use `isBrowser: true`, Rollup is smart that it'll polyfill
    // and import the correct libraries automatically (e.g. correctly import from conditionals in package.json).
    createConfig({
      input: './src/index.node.ts',
      output: [
        {
          file: path.join(CONFIG.compilerOptions.outDir, 'index.node.es.js'),
          format: 'es',
          sourcemap: true,
          assetFileNames: '[name]-[hash][extname]'
        },
        {
          file: path.join(CONFIG.compilerOptions.outDir, 'index.node.js'),
          format: 'cjs',
          sourcemap: true,
          assetFileNames: '[name]-[hash][extname]'
        }
      ]
    })
  ]
}

// Local plugins.
// This is a custom plugin to rewrite the declaration files.
// Read more about the "hooks" of Rollup, visit https://rollupjs.org/guide/en/#output-generation-hooks.
const ACTUAL_ANCHOR = path.join(path.resolve(process.cwd()), 'src').replace(/\\/g, '/')
const IMPORT_ANCHOR = `@accelbyte/sdk`
const IMPORT_REGEX = /@accelbyte\/sdk(\/\w+)*/g

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
        const normalizedFullPath = fullPathToFile.replace(path.join(ACTUAL_ANCHOR, CONFIG.compilerOptions.declarationDir), ACTUAL_ANCHOR)
        // If it is a declaration file, then we replace "@accelbyte/sdk" with ".".
        if (fileName.endsWith('.d.ts')) {
          // Example `fileName`: accelbyte-web-sdk/packages/sdk/src/generated/platform/definitions/WalletPagingSlicedResult.d.ts.
          // Example `importSource`: @accelbyte/sdk/utils/Network.
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
    }
  }
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
