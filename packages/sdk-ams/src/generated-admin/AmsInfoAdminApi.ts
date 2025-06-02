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
import { AmsRegionsResponse } from '../generated-definitions/AmsRegionsResponse.js'
import { InstanceTypesResponse } from '../generated-definitions/InstanceTypesResponse.js'
import { AmsInfoAdmin$ } from './endpoints/AmsInfoAdmin$.js'

export function AmsInfoAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getRegions(): Promise<AxiosResponse<AmsRegionsResponse>> {
    const $ = new AmsInfoAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRegions()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSupportedInstances(): Promise<AxiosResponse<InstanceTypesResponse>> {
    const $ = new AmsInfoAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSupportedInstances()
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA [READ]
     */
    getRegions,
    /**
     * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA [READ]
     */
    getSupportedInstances
  }
}
