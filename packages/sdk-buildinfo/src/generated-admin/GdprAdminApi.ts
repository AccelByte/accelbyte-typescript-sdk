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
import { BuildInfoPii } from '../generated-definitions/BuildInfoPii.js'
import { GdprAdmin$ } from './endpoints/GdprAdmin$.js'

export function GdprAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deleteGdprRemove(queryParams: { userId: string | null }): Promise<AxiosResponse<BuildInfoPii>> {
    const $ = new GdprAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteGdprRemove(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getGdprRetrieve(queryParams: { userId: string | null }): Promise<AxiosResponse<BuildInfoPii>> {
    const $ = new GdprAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGdprRetrieve(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to remove all stored data that relates to supplied machineId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of data related to machineId&lt;/li&gt;&lt;/ul&gt;
     */
    deleteGdprRemove,
    /**
     * This API is used to get all stored data that relates to supplied machineId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of data related to machineId&lt;/li&gt;&lt;/ul&gt;
     */
    getGdprRetrieve
  }
}
