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
import { GetAllLeaderboardConfigsPublicResp } from '../generated-definitions/GetAllLeaderboardConfigsPublicResp.js'
import { LeaderboardConfigReq } from '../generated-definitions/LeaderboardConfigReq.js'
import { LeaderboardConfiguration$ } from './endpoints/LeaderboardConfiguration$.js'

export function LeaderboardConfigurationApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getLeaderboards(queryParams?: {
    isArchived?: boolean | null
    isDeleted?: boolean | null
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<GetAllLeaderboardConfigsPublicResp>> {
    const $ = new LeaderboardConfiguration$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLeaderboards(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createLeaderboard(data: LeaderboardConfigReq): Promise<AxiosResponse<LeaderboardConfigReq>> {
    const $ = new LeaderboardConfiguration$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createLeaderboard(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getLeaderboards_v2(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<GetAllLeaderboardConfigsPublicResp>> {
    const $ = new LeaderboardConfiguration$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLeaderboards_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * &lt;p&gt;This endpoint return all leaderboard configurations&lt;/p&gt;
     */
    getLeaderboards,
    /**
     * Public endpoint to create a new leaderboard. &lt;p&gt;&lt;b&gt;Fields :&lt;/b&gt;&lt;/p&gt; &lt;ul&gt;&lt;li&gt;LeaderboardConfig code must be lowercase and maximum length is 48 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Maximum length for leaderboard name is 128 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Start time must be follow RFC3339 standard. e.g. 2020-10-02T15:00:00.05Z&lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Season period must be greater than 31 days.&lt;/li&gt; &lt;li&gt;If seasonPeriod is filled, the LeaderboardConfig would have seasonal leaderboard.&lt;/li&gt; &lt;li&gt;Reset Date must be a number 1 - 31. Default is &#39;1&#39;.&lt;/li&gt; &lt;li&gt;Reset Day must be a number 0 - 6. 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday (day of week). Default is &#39;0&#39;.&lt;/li&gt; &lt;li&gt;Reset time must be &lt;b&gt;hours:minutes&lt;/b&gt; in 24 hours format e.g. 01:30, 10:30, 15:30, 23:15.Default is &#39;00:00&#39;.&lt;/li&gt; &lt;li&gt;Stat Code is related with statistic code in statistic service. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;/ul&gt;
     */
    createLeaderboard,
    /**
     * This endpoint return all leaderboard configurations
     */
    getLeaderboards_v2
  }
}
