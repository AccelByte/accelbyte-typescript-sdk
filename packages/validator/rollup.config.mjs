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
import alias from '@rollup/plugin-alias'
import { writeFileSync, readFileSync } from 'fs'
import { visualizer } from 'rollup-plugin-visualizer'

const CONFIG = JSON.parse(readFileSync('./tsconfig.build.json', 'utf-8'))

const packageJson = JSON.parse(readFileSync(path.resolve('./package.json'), 'utf-8'))
// We need to exclude these because we don't want them bundled since they'll be installed anyway when we do `npm install`.
const packageJsonDependencies = Object.keys(packageJson.dependencies)

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
      visualizer(),
      alias({
        entries: {
          '@accelbyte/validator': path.resolve('./src')
        }
      }),
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
      }),
      declarationRewritePlugin()
    ],
    onwarn: warning => {
      if (warning.code !== 'CIRCULAR_DEPENDENCY') {
        throw new Error(warning.message)
      }
    },
    external: packageJsonDependencies
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
          dir: path.join(CONFIG.compilerOptions.outDir, 'cjs'),
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
