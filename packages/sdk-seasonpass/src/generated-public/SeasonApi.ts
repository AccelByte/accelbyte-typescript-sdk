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
import { ClaimableUserSeasonInfo } from '../generated-definitions/ClaimableUserSeasonInfo.js'
import { LocalizedSeasonInfo } from '../generated-definitions/LocalizedSeasonInfo.js'
import { Season$ } from './endpoints/Season$.js'

export function SeasonApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getSeasonsCurrent(queryParams?: { language?: string | null }): Promise<AxiosResponse<LocalizedSeasonInfo>> {
    const $ = new Season$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSeasonsCurrent(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSeasonsCurrentData_ByUserId(userId: string): Promise<AxiosResponse<ClaimableUserSeasonInfo>> {
    const $ = new Season$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSeasonsCurrentData_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getData_ByUserId_BySeasonId(userId: string, seasonId: string): Promise<AxiosResponse<ClaimableUserSeasonInfo>> {
    const $ = new Season$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getData_ByUserId_BySeasonId(userId, seasonId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to get current published season, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: localized season data&lt;/li&gt;&lt;/ul&gt;
     */
    getSeasonsCurrent,
    /**
     * This API is used to get current user season data, it will auto enroll if there&#39;s no user season but active published season exist, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
     */
    getSeasonsCurrentData_ByUserId,
    /**
     * This API is used to get user season data, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
     */
    getData_ByUserId_BySeasonId
  }
}
