/*
 * Copyright (c) 2023-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { BasePath, INTERNAL_SERVICES } from '../constants/paths'
import { Interceptor } from '../Types'

type CreateCustomPathInterceptorOptions = {
  /**
   * A list of objects specifying which service base paths should be replaced.
   * For example, providing `{'/iam': '/iam-test'}` will redirect all `'/iam'` requests to `'/iam-test'`.
   */
  basePath: Partial<Record<BasePath, string>>

  /**
   * Indicates whether to use the internal AccelByte network. This should only be used in a server environment.
   * When set to true, requests will be made to `http://{service-name}/{path}` instead of the `baseURL`.
   */
  isInternalNetwork?: boolean
}

export const createCustomPathInterceptor = ({ basePath, isInternalNetwork }: CreateCustomPathInterceptorOptions): Interceptor => {
  return {
    type: 'request',
    name: 'custom-base-path',
    onRequest: async config => {
      const { url } = config
      if (url) {
        const firstPath = url.split('/')[1]
        const servicePath = `/${firstPath}`
        const newBasePath: string | undefined = basePath?.[servicePath]
        const internalPath = INTERNAL_SERVICES?.[servicePath]

        if (isInternalNetwork && internalPath) {
          config.baseURL = `http://${internalPath}`
        }

        if (newBasePath) {
          config.url = config.url?.replace(servicePath, newBasePath)
        }
      }
      return config
    },
    onError: error => Promise.reject(error)
  }
}
