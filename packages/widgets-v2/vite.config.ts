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
      // Previously, there was a validator/lib regex that we had to remove in order to make it compatible with remix.
      // However, as a consequence, the bundle size will increase by 15kb.
      // Also, there is an additional bundle size since we're removing `@adyen/adyen-web` here, which increases
      // the bundle size further by ~300KB or something.
      external: [...packageJsonDependencies, ...packageJsonPeerDependencies, 'react-router']
    }
  },
  define: {
    global: 'window'
  },
  resolve: {
    alias: {
      '~': resolve('./src'),
      'react-router-dom': resolve('./src/packages/od-components/components/WidgetLink'),
      '@od-components': resolve('./src/packages/od-components'),
      '@od-ecommerce': resolve('./src/packages/od-ecommerce'),
      '@od-account': resolve('./src/packages/od-account'),
      '@od-payment': resolve('./src/packages/od-payment'),
      '@od-player-portal': resolve('./src/packages/od-player-portal'),
      '@od-legal': resolve('./src/packages/od-legal'),
      '@od-twitch': resolve('./src/packages/od-twitch'),
      '@od-assets': resolve('../../../packages/od-assets/src'),
      '@od-shared': resolve('../../../packages/od-shared/src'),
      seed: resolve('../../../packages/od-shared/seed'),
      '@od-medium-serde': resolve('../../../packages/od-medium-serde/src'),
      '@accelbyte/validator': resolve('../validator/src'),
      '@accelbyte/sdk-odinconfig': resolve('../sdk-odinconfig/src'),
      '@accelbyte/sdk-iam': resolve('../sdk-iam/src')
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
