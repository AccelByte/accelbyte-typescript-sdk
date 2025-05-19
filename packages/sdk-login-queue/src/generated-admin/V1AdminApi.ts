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
import { ConfigurationRequest } from '../generated-definitions/ConfigurationRequest.js'
import { ConfigurationResponse } from '../generated-definitions/ConfigurationResponse.js'
import { QueueStatusResponse } from '../generated-definitions/QueueStatusResponse.js'
import { V1Admin$ } from './endpoints/V1Admin$.js'

export function V1AdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getConfig(): Promise<AxiosResponse<ConfigurationResponse>> {
    const $ = new V1Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfig()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateConfig(data: ConfigurationRequest): Promise<AxiosResponse<ConfigurationResponse>> {
    const $ = new V1Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateConfig(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStatus(): Promise<AxiosResponse<QueueStatusResponse>> {
    const $ = new V1Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatus()
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to get log queue configuration of a namespace. Calling this endpoint with namespace which has not set up configuration will return a valid configuration with default value
     */
    getConfig,
    /**
     * This API is used to set/update log queue configuration of a namespace. This endpoint has upsert behavior. Calling the endpoint to a namespace with no configuration will make the service to create a new configuration. When creating new configuration, empty field will have default value: * enabled = false * maxConcurrency = 1000000 * maxLoginRate = 500 * safetyMarginPercentage = 5 * minActivationPeriodInSecond = 600 * playerReconnectGracePeriodInSecond = 300 * queueReconnectGracePeriodInSecond = 60 * playerPollingTimeInSecond = 20 Calling this endpoint with namespace that has configuration will replace the old configuration. Input validation: * maxConcurrency must be &gt; 0 and &lt;= 10000000 (0 &lt; x &lt;= 10000000) * maxLoginRate must be &gt; 0 and &lt;= 100000 (0 &lt; x &lt;= 100000) * minActivationPeriodInSecond, playerReconnectGracePeriodInSecond, playerPollingTimeInSecond and queueReconnectGracePeriodInSecond must be &gt; 0 and &lt;= 21600 (0 &lt; x &lt;= 21600) * playerPollingTimeInSecond must be smaller than queueReconnectGracePeriodInSecond * safetyMarginPercentage must be &gt;= 0 and &lt; 100 (0 &lt;= x &lt; 100)
     */
    updateConfig,
    /**
     * Get login queue status
     */
    getStatus
  }
}
