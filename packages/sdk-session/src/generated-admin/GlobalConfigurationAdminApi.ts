/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { GlobalConfigurationResponse } from '../generated-definitions/GlobalConfigurationResponse.js'
import { PutGlobalConfigurationRequest } from '../generated-definitions/PutGlobalConfigurationRequest.js'
import { GlobalConfigurationAdmin$ } from './endpoints/GlobalConfigurationAdmin$.js'

export function GlobalConfigurationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function deleteGlobalConfiguration(): Promise<AxiosResponse<unknown>> {
    const $ = new GlobalConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteGlobalConfiguration()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getGlobalConfigurations(): Promise<AxiosResponse<GlobalConfigurationResponse>> {
    const $ = new GlobalConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGlobalConfigurations()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateGlobalConfiguration(data: PutGlobalConfigurationRequest): Promise<AxiosResponse<GlobalConfigurationResponse>> {
    const $ = new GlobalConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateGlobalConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Delete of global configuration data.
     */
    deleteGlobalConfiguration,
    /**
     * Record of global configuration data.
     */
    getGlobalConfigurations,
    /**
     * Upsert global configuration data.
     */
    updateGlobalConfiguration
  }
}
