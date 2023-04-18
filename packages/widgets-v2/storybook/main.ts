/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { join, resolve } from 'path'
import { UserConfig, loadEnv } from 'vite'
import type { StorybookConfig } from '@storybook/core-common'
import baseConfig from '../vite.config'

const config: StorybookConfig & { viteFinal: (c: UserConfig) => Promise<UserConfig> } = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true
  },
  features: {
    storyStoreV7: true
  },
  // This is fix for Node version above 16.
  // https://github.com/storybookjs/storybook/issues/16555#issuecomment-1418252785.
  webpackFinal: async config => {
    config.output = {
      ...config.output,
      hashFunction: 'xxhash64'
    }

    // Return the altered config
    return config
  },
  // Reference: https://storybook.js.org/docs/react/builders/vite#configuration.
  async viteFinal(config: UserConfig): Promise<UserConfig> {
    // @ts-ignore
    checkDependency(() => import('@accelbyte/sdk'), 'yarn build:sdk')
    // @ts-ignore
    checkDependency(() => import('@accelbyte/error-translator'), 'yarn build:error-translator')

    const env = loadEnv('', join(process.cwd(), 'storybook'), '')
    process.env = { ...process.env, ...env }

    const {
      NODE_ENV,
      JUSTICE_BASE_URL,
      STORYBOOK_WIDGETS_REDIRECT_URI,
      STORYBOOK_WIDGETS_CLIENT_ID,
      STORYBOOK_WIDGETS_BASE_PATH,
      JUSTICE_PUBLISHER_NAMESPACE,
      JUSTICE_CONF_SERVER
    } = process.env

    return {
      ...config,
      root: resolve('./'),
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [...(config.optimizeDeps?.include || []), '@accelbyte/sdk', '@accelbyte/error-translator']
      },
      define: {
        'process.env': JSON.stringify({
          NODE_ENV,
          JUSTICE_BASE_URL,
          STORYBOOK_WIDGETS_REDIRECT_URI,
          STORYBOOK_WIDGETS_CLIENT_ID,
          STORYBOOK_WIDGETS_BASE_PATH,
          JUSTICE_PUBLISHER_NAMESPACE,
          JUSTICE_CONF_SERVER
        })
      },
      resolve: (baseConfig as UserConfig).resolve,
      css: (baseConfig as UserConfig).css,
      server: {
        ...config.server,
        proxy: {
          '/api': {
            target: JUSTICE_BASE_URL,
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, '')
          }
        }
      }
    }
  }
}

export default config

// Helper functions.
async function checkDependency(importCb: () => Promise<unknown>, commandToRun: string) {
  try {
    await importCb()
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`${err.message}. Please ensure you have done \`${commandToRun}\` first from the root repository.`)
    }
  }
}
