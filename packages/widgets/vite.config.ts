/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig, PluginOption } from 'vite'
import checker from 'vite-plugin-checker'
import { createHash } from 'crypto'
import { CLASSNAME_DIVIDER } from './scripts/constans'
import { readFileSync } from 'fs'

const packageJson = JSON.parse(readFileSync(resolve('./package.json'), 'utf-8'))
// We need to exclude these because we don't want them bundled since they'll be installed anyway when we do `npm install`.
const packageJsonDependencies = Object.keys(packageJson.dependencies)
const packageJsonPeerDependencies = Object.keys(packageJson.peerDependencies)

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    checker({
      typescript: {
        root: process.cwd(),
        tsconfigPath: 'tsconfig.json'
      }
    }),
    visualizer() as PluginOption
  ],
  mode: 'production',
  assetsInclude: ['**/*.jpeg', '**/*.jpg', '**/*.png'],
  build: {
    outDir: 'dist',
    minify: true,
    sourcemap: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'accelbyte-widgets'
    },
    rollupOptions: {
      output: {
        preserveModules: true
      },
      external: [
        ...packageJsonDependencies,
        ...packageJsonPeerDependencies,
        'react-router',
        /validator\/lib/,
        /lodash\//,
        /@adyen\/adyen-web\//
      ]
    }
  },
  define: {
    global: 'window'
  },
  resolve: {
    alias: {
      '@od-assets': resolve('../../../packages/od-assets/src'),
      '@od-components': resolve('../../../packages/od-components/src'),
      '@od-shared': resolve('../../../packages/od-shared/src'),
      seed: resolve('../../../packages/od-shared/seed'),
      '@od-legal': resolve('../../../packages/od-legal/src'),
      '@od-account': resolve('../../../packages/od-account/src'),
      '@od-ecommerce': resolve('../../../packages/od-ecommerce/src'),
      '@od-payment': resolve('../../../packages/od-payment/src'),
      '@od-state': resolve('../../../packages/od-state/src'),
      '@od-twitch': resolve('../../../packages/od-twitch/src'),
      '@accelbyte/sdk': resolve('../sdk/src'),
      '@accelbyte/validator': resolve('../validator/src'),
      '@accelbyte/error-translator': resolve('../error-translator/src'),
      '@accelbyte/sdk-odinconfig': resolve('../sdk-odinconfig/src'),
      '@od-medium-serde': resolve('../../../packages/od-medium-serde/src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "../../../packages/od-shared/src/styles/variables";
          @import "../../../packages/od-shared/src/styles/mixin";
        `
      }
    },
    modules: {
      generateScopedName: (name, filename) => {
        const hash = createHash('md5').update(`${filename}${name}`).digest('hex').slice(0, 5)

        return `${name}${CLASSNAME_DIVIDER}_${name}_${hash}`
      }
    }
  }
})
