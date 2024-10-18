import { createAuthInterceptor, DecodeError, SdkConstructorParam } from '@accelbyte/sdk'
import axios from 'axios'

const SHARED_CLOUD_SUFFIX = '.gamingservices.accelbyte.io'

export const BASE_SDK_CORE_CONFIG = {
  baseURL: import.meta.env.DEV ? import.meta.env.VITE_SDK_BASE_URL : 'https://prod.gamingservices.accelbyte.io',
  clientId: import.meta.env.VITE_CLIENT_ID,
  namespace: import.meta.env.VITE_NAMESPACE,
  redirectURI: import.meta.env.VITE_REDIRECT_URI || 'http://localhost:3000'
}

export function createSdkConfig(coreConfig: SdkConstructorParam['coreConfig']): SdkConstructorParam {
  const { protocol, host } = new URL(coreConfig.baseURL)
  let baseURL = coreConfig.baseURL

  if (import.meta.env.DEV) {
    baseURL = import.meta.env.VITE_SDK_BASE_URL
  } else if (host.endsWith(SHARED_CLOUD_SUFFIX) && coreConfig.namespace) {
    baseURL = `${protocol}//${coreConfig.namespace}.${host}`
  }

  return {
    coreConfig: {
      ...coreConfig,
      baseURL
    },
    axiosConfig: {
      interceptors: [
        createAuthInterceptor({
          clientId: coreConfig.clientId,
          getRefreshToken: () => '',
          onSessionExpired: () => {
            console.log('expired')
          }
        })
      ]
    }
  }
}

export function handleError(error: unknown, handler: (content: any) => void) {
  console.error(error)

  if (axios.isAxiosError(error)) {
    return handler(error.response?.data)
  }

  if (error instanceof DecodeError) {
    return handler(error.message)
  }
}
