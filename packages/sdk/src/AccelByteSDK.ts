/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { AxiosConfig, CoreConfig, Interceptor, SdkConstructorParam, SdkSetConfigParam, TokenConfig, WebSocketConfig } from './Types'
import { ApiUtils } from './utils/ApiUtils'
import { Network } from './utils/Network'
import { MakeRequired } from './utils/Type'

export const AccelByte = {
  SDK: (param: SdkConstructorParam) => {
    return new AccelByteSDK(param)
  }
}

export class AccelByteSDK {
  private coreConfig: CoreConfig
  private axiosConfig: AxiosConfig
  private axiosInstance: AxiosInstance
  private webSocketConfig: WebSocketConfig
  private token: TokenConfig

  constructor({ coreConfig, axiosConfig, webSocketConfig }: SdkConstructorParam) {
    this.coreConfig = {
      ...coreConfig,
      useSchemaValidation: coreConfig.useSchemaValidation ?? true
    }
    this.axiosConfig = {
      /**
       * when user create a variable to store intercepters and passed into sdk
       * the sdk will use the variable as reference value,
       * so when new interceptor added, reference value will also has the new interceptor,
       * to avoid this we create shallow copy for the interceptors
       */
      interceptors: axiosConfig?.interceptors ? [...axiosConfig.interceptors] : undefined,
      request: {
        timeout: 60000,
        withCredentials: true,
        ...axiosConfig?.request,
        headers: {
          'Content-Type': 'application/json',
          ...axiosConfig?.request?.headers
        }
      }
    }
    this.axiosInstance = this.createAxiosInstance()
    this.webSocketConfig = {
      allowReconnect: webSocketConfig?.allowReconnect ?? true,
      maxReconnectAttempts: webSocketConfig?.maxReconnectAttempts ?? 0
    }
    this.token = {}
  }

  private createAxiosInstance() {
    const axiosInstance = Network.create({ baseURL: this.coreConfig.baseURL, ...this.axiosConfig.request })
    const interceptors = this.axiosConfig.interceptors

    if (interceptors) {
      for (const interceptor of interceptors) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor?.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor?.onSuccess, interceptor.onError)
        }
      }
    }

    return axiosInstance
  }

  /**
   * Assembles and returns the current Axios instance along with core and Axios configurations.
   */
  assembly() {
    return {
      axiosInstance: this.axiosInstance,
      coreConfig: this.coreConfig,
      axiosConfig: this.axiosConfig as MakeRequired<AxiosConfig, 'request'>,
      webSocketConfig: this.webSocketConfig
    }
  }

  /**
   * Creates a new instance of AccelByteSDK with a shallow copy of the current configurations.
   * Optionally allows excluding interceptors.
   * @param {boolean} [opts.interceptors] - Whether to include interceptors in the clone. Default is true.
   * @returns {AccelByteSDK} A new instance of AccelByteSDK with the cloned configuration.
   */
  clone(opts?: { interceptors?: boolean }): AccelByteSDK {
    const newConfigs = {
      coreConfig: { ...this.coreConfig },
      axiosConfig: { ...this.axiosConfig }
    }

    if (opts?.interceptors === false) {
      delete newConfigs.axiosConfig.interceptors
    }

    const newSdkInstance = new AccelByteSDK(newConfigs)

    newSdkInstance.setToken(this.token)

    return newSdkInstance
  }

  /**
   * Adds interceptors to the current Axios configuration.
   */
  addInterceptors(interceptors: Interceptor[]): AccelByteSDK {
    if (!this.axiosConfig.interceptors) {
      this.axiosConfig.interceptors = []
    }

    this.axiosConfig.interceptors.push(...interceptors)

    return this
  }

  /**
   * Removes interceptors from the Axios configuration. Can remove all interceptors or filter specific ones.
   * @param {function} [filterCallback] - Optional filter function to remove specific interceptors.
   */
  removeInterceptors(): AccelByteSDK
  removeInterceptors(filterCallback: (interceptor: Interceptor) => boolean): AccelByteSDK

  removeInterceptors(filterCallback?: (interceptor: Interceptor) => boolean) {
    if (!this.axiosConfig?.interceptors) return this
    if (!filterCallback) {
      this.axiosConfig.interceptors = undefined
      this.axiosInstance.interceptors.request.clear()
      this.axiosInstance.interceptors.response.clear()
      return this
    }

    this.axiosConfig.interceptors = this.axiosConfig.interceptors.filter(filterCallback)
    this.axiosInstance = this.createAxiosInstance()
    return this
  }

  /**
   * Updates the SDK's core and Axios configurations.
   * Merges the provided configurations with the current ones.
   */
  setConfig({ coreConfig, axiosConfig, webSocketConfig }: SdkSetConfigParam) {
    this.coreConfig = {
      ...this.coreConfig,
      ...coreConfig
    }
    this.axiosConfig = {
      ...this.axiosConfig,
      ...axiosConfig?.interceptors,
      request: ApiUtils.mergeAxiosConfigs(this.axiosConfig.request as AxiosRequestConfig, axiosConfig?.request)
    }
    this.webSocketConfig = {
      ...this.webSocketConfig,
      ...webSocketConfig
    }
    this.axiosInstance = this.createAxiosInstance()

    return this
  }

  /**
   * Set accessToken and refreshToken and updates the Axios request headers to use Bearer authentication.
   */
  setToken(token: TokenConfig) {
    this.token = {
      ...this.token,
      ...token
    }
    const configOverride = { headers: { Authorization: this.token.accessToken ? `Bearer ${this.token.accessToken}` : '' } }
    this.axiosConfig = {
      ...this.axiosConfig,
      request: ApiUtils.mergeAxiosConfigs(this.axiosInstance.defaults as AxiosRequestConfig, configOverride)
    }
    this.axiosInstance = this.createAxiosInstance()
  }

  /**
   * Removes the currently set token.
   */
  removeToken() {
    this.token = {}
    const configOverride = { headers: { Authorization: undefined } }
    this.axiosConfig = {
      ...this.axiosConfig,
      request: ApiUtils.mergeAxiosConfigs(this.axiosInstance.defaults as AxiosRequestConfig, configOverride)
    }
    this.axiosInstance = this.createAxiosInstance()
  }

  /**
   * Retrieves the current token configuration.
   */
  getToken() {
    return this.token
  }
}
