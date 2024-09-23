import { createAuthInterceptor, DecodeError, SdkConstructorParam } from '@accelbyte/sdk'
import axios from 'axios'

export const BASE_SDK_CORE_CONFIG = {
  baseURL: import.meta.env.DEV ? import.meta.env.VITE_SDK_BASE_URL : 'https://prod.gamingservices.accelbyte.io',
  clientId: import.meta.env.VITE_CLIENT_ID,
  namespace: import.meta.env.VITE_NAMESPACE,
  redirectURI: import.meta.env.VITE_REDIRECT_URI || 'http://localhost:3000'
}

export function createSdkConfig(coreConfig: SdkConstructorParam['coreConfig']): SdkConstructorParam {
  const { protocol, host } = new URL(coreConfig.baseURL)

  return {
    coreConfig: {
      ...coreConfig,
      baseURL: import.meta.env.DEV ? import.meta.env.VITE_SDK_BASE_URL : `${protocol}//${coreConfig.namespace}.${host}`
    },
    axiosConfig: {
      interceptors: [
        createAuthInterceptor({
          clientId: BASE_SDK_CORE_CONFIG.clientId,
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
