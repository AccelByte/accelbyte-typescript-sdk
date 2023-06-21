/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { SDKEvents, SDKOptions, SDKRequestConfig } from './Types'
import { injectErrorInterceptors } from './interceptors/ErrorInterceptor'
import { injectAuthInterceptors } from './interceptors/AuthInterceptors'
import { ApiUtils } from './utils/ApiUtils'

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
    cache: boolean | undefined
    refreshToken?: string
  }
}

class AccelbyteSDKImpl {
  private readonly options: SDKOptions
  private readonly events: SDKEvents | undefined
  private config: SDKRequestConfig
  private refreshToken: string | undefined

  constructor(options: SDKOptions, config?: SDKRequestConfig, events?: SDKEvents) {
    this.options = {
      cache: false,
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
  }

  init() {
    const { baseURL, clientId } = this.options

    injectAuthInterceptors(clientId, this.getConfig, this.events?.onSessionExpired, this.events?.onGetUserSession, this.getRefreshToken)
    injectErrorInterceptors(baseURL, this.events?.onUserEligibilityChange, this.events?.onError)

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
          cache: this.options.cache !== undefined ? this.options.cache : false,
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
