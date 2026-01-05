/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { DefaultProvider } from '../generated-definitions/DefaultProvider.js'
import { Public$ } from './endpoints/Public$.js'

export function PublicApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getProviders(): Promise<AxiosResponse<unknown>> {
    const $ = new Public$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProviders()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getProviderDefault(): Promise<AxiosResponse<DefaultProvider>> {
    const $ = new Public$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProviderDefault()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getProviderRegion_ByRegion(region: string): Promise<AxiosResponse<unknown>> {
    const $ = new Public$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProviderRegion_ByRegion(region)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This endpoints returns list of supported providers. Armada is the default provider.
     */
    getProviders,
    /**
     * This endpoints returns the default provider.
     */
    getProviderDefault,
    /**
     * This endpoint returns the providers by region.
     */
    getProviderRegion_ByRegion
  }
}
