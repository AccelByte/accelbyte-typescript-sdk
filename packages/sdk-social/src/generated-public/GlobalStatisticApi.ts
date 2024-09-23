/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { GlobalStatItemInfo } from '../generated-definitions/GlobalStatItemInfo.js'
import { GlobalStatItemPagingSlicedResult } from '../generated-definitions/GlobalStatItemPagingSlicedResult.js'
import { GlobalStatistic$ } from './endpoints/GlobalStatistic$.js'

export function GlobalStatisticApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getGlobalstatitems(queryParams?: {
    limit?: number
    offset?: number
    statCodes?: string | null
  }): Promise<AxiosResponse<GlobalStatItemPagingSlicedResult>> {
    const $ = new GlobalStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGlobalstatitems(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getGlobalstatitem_ByStatCode(statCode: string): Promise<AxiosResponse<GlobalStatItemInfo>> {
    const $ = new GlobalStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGlobalstatitem_ByStatCode(statCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * List global statItems by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
     */
    getGlobalstatitems,
    /**
     * Get global statItem by stat code.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: global stat item&lt;/li&gt;&lt;/ul&gt;
     */
    getGlobalstatitem_ByStatCode
  }
}
