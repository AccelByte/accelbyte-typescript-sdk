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
import { UserStatCycleItemPagingSlicedResult } from '../generated-definitions/UserStatCycleItemPagingSlicedResult.js'
import { UserStatisticCycle$ } from './endpoints/UserStatisticCycle$.js'

export function UserStatisticCycleApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getStatCycleitemsMeUsers_ByCycleId(
    cycleId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; statCodes?: string[] }
  ): Promise<AxiosResponse<UserStatCycleItemPagingSlicedResult>> {
    const $ = new UserStatisticCycle$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatCycleitemsMeUsers_ByCycleId(cycleId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStatCycleitems_ByUserId_ByCycleId(
    userId: string,
    cycleId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; statCodes?: string | null }
  ): Promise<AxiosResponse<UserStatCycleItemPagingSlicedResult>> {
    const $ = new UserStatisticCycle$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatCycleitems_ByUserId_ByCycleId(userId, cycleId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * List user&#39;s statCycleItems by statCycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle items&lt;/li&gt;&lt;/ul&gt;
     */
    getStatCycleitemsMeUsers_ByCycleId,
    /**
     * List user&#39;s statCycleItems by statCycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle items&lt;/li&gt;&lt;/ul&gt;
     */
    getStatCycleitems_ByUserId_ByCycleId
  }
}
