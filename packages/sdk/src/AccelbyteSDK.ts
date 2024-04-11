/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { SDKEvents, SDKOptions, SDKRequestConfig } from './Types'
import { injectErrorInterceptors } from './interceptors/ErrorInterceptor'
import { injectAuthInterceptors } from './interceptors/AuthInterceptors'
import { injectRequestInterceptors, injectResponseInterceptors } from './utils/Network'
import { ApiUtils } from './utils/ApiUtils'
import { injectInternalNetworkInterceptors } from './interceptors/InternalNetworkInterceptor'

/**
 * This is the main SDK
 */

export interface AccelbyteSDK {
  refreshTokens: (accessToken: string | undefined | null, refreshToken?: string | undefined | null) => void
  assembly: () => {
    config: SDKRequestConfig<any>
    namespace: string
    clientId: string
    redirectURI: string
    baseURL: string
    refreshToken?: string
    isValidationEnabled?: boolean
  }
}

class AccelbyteSDKImpl {
  private readonly options: SDKOptions
  private readonly events: SDKEvents | undefined
  private config: SDKRequestConfig
  private refreshToken: string | undefined

  constructor(options: SDKOptions, config?: SDKRequestConfig, events?: SDKEvents) {
    this.options = {
      ...options
    }
    this.events = events
    this.config = {
      timeout: 60000,
      baseURL: options.baseURL,
      withCredentials: true,
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers
      }
    }

    // TODO: what we can do for next breaking change is that,
    // instead of having a "global" axios interceptors, we can create the instance here.
    //
    // ```
    // this.axiosInstance = Network.create(...)
    // this.axiosInstance.interceptors.use(...)
    // ```
    //
    // After that, our SDK assembly will return this axiosInstance, which will be used by each of the service SDKs.
    //
    // ```
    // const { axiosInstance, opts } = sdk.assembly()
    // axiosInstance.defaults = {
    //   ...axiosInstance.defaults,
    //   ...args.config,
    //   headers: {
    //     ...axiosInstance.defaults.headers,
    //     ...args.config.headers
    //   }
    // }
    // ```
    //
    // This way, each of the SDK instance will have their own interceptors and will not "pollute"
    // the global axios interceptors. It's easier to test in isolation as well, because with the global
    // interceptors, we can't isolate test the SDK instance... or maybe we can, with `axios.interceptors.request.clear`,
    // but they can't be done in parallel.
  }

  init() {
    const { baseURL, clientId, customInterceptors, useInternalNetwork } = this.options

    if (customInterceptors) {
      injectRequestInterceptors(customInterceptors.request, customInterceptors.error)
      injectResponseInterceptors(customInterceptors.response, customInterceptors.error)
    } else {
      // Default interceptors.
      if (useInternalNetwork) {
        injectInternalNetworkInterceptors()
      }
      injectAuthInterceptors(clientId, this.getConfig, this.events?.onSessionExpired, this.events?.onGetUserSession, this.getRefreshToken)
      injectErrorInterceptors({
        baseUrl: baseURL,
        onError: this.events?.onError,
        onUserEligibilityChange: this.events?.onUserEligibilityChange,
        onTooManyRequest: this.events?.onTooManyRequest
      })
    }

    // TODO reintegrate doVersionDiagnostics later on
    // setTimeout(() => this.doVersionDiagnostics(), TIMEOUT_TO_DIAGNOSTICS)

    return {
      refreshTokens: (accessToken, refreshToken?) => this.refreshTokensImpl(accessToken, refreshToken),
      assembly: () => {
        return {
          config: this.config,
          namespace: this.options.namespace,
          clientId: this.options.clientId,
          redirectURI: this.options.redirectURI,
          baseURL: this.options.baseURL,
          refreshToken: this.refreshToken
        }
      }
    }
  }

  private getRefreshToken = (): string | undefined => this.refreshToken

  private getConfig = () => this.config

  private refreshTokensImpl = (accessToken, refreshToken?) => {
    if (refreshToken) {
      this.refreshToken = refreshToken
    }
    const configOverride = { headers: { Authorization: accessToken ? `Bearer ${accessToken}` : '' } }
    this.config = ApiUtils.mergedConfigs(this.config, { config: configOverride })
  }
}

const sdkInit = ({ options, config, onEvents }: { options: SDKOptions; config?: SDKRequestConfig; onEvents?: SDKEvents }): AccelbyteSDK => {
  const sdkFactory = new AccelbyteSDKImpl(options, config, onEvents)
  return sdkFactory.init()
}

// ts-prune-ignore-next
export const Accelbyte = { SDK: sdkInit }
