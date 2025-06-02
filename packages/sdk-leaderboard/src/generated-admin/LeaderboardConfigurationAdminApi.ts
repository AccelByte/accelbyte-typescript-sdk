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
import { DeleteBulkLeaderboardsReq } from '../generated-definitions/DeleteBulkLeaderboardsReq.js'
import { DeleteBulkLeaderboardsResp } from '../generated-definitions/DeleteBulkLeaderboardsResp.js'
import { GetAllLeaderboardConfigsResp } from '../generated-definitions/GetAllLeaderboardConfigsResp.js'
import { GetLeaderboardConfigResp } from '../generated-definitions/GetLeaderboardConfigResp.js'
import { LeaderboardConfigReq } from '../generated-definitions/LeaderboardConfigReq.js'
import { UpdateLeaderboardConfigReq } from '../generated-definitions/UpdateLeaderboardConfigReq.js'
import { LeaderboardConfigurationAdmin$ } from './endpoints/LeaderboardConfigurationAdmin$.js'

export function LeaderboardConfigurationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
  }): Promise<AxiosResponse<GetAllLeaderboardConfigsResp>> {
    const $ = new LeaderboardConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLeaderboards(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createLeaderboard(data: LeaderboardConfigReq): Promise<AxiosResponse<LeaderboardConfigReq>> {
    const $ = new LeaderboardConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createLeaderboard(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createLeaderboardDelete(data: DeleteBulkLeaderboardsReq): Promise<AxiosResponse<DeleteBulkLeaderboardsResp>> {
    const $ = new LeaderboardConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createLeaderboardDelete(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteLeaderboard_ByLeaderboardCode(leaderboardCode: string): Promise<AxiosResponse<unknown>> {
    const $ = new LeaderboardConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteLeaderboard_ByLeaderboardCode(leaderboardCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getLeaderboard_ByLeaderboardCode(leaderboardCode: string): Promise<AxiosResponse<GetLeaderboardConfigResp>> {
    const $ = new LeaderboardConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLeaderboard_ByLeaderboardCode(leaderboardCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateLeaderboard_ByLeaderboardCode(
    leaderboardCode: string,
    data: UpdateLeaderboardConfigReq
  ): Promise<AxiosResponse<GetLeaderboardConfigResp>> {
    const $ = new LeaderboardConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateLeaderboard_ByLeaderboardCode(leaderboardCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteHard_ByLeaderboardCode(leaderboardCode: string): Promise<AxiosResponse<unknown>> {
    const $ = new LeaderboardConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteHard_ByLeaderboardCode(leaderboardCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * &lt;p&gt;This endpoint return all leaderboard configurations&lt;/p&gt;
     */
    getLeaderboards,
    /**
     * &lt;p&gt;&lt;b&gt;Fields :&lt;/b&gt;&lt;/p&gt; &lt;ul&gt;&lt;li&gt;LeaderboardConfig code must be lowercase and maximum length is 48 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Maximum length for leaderboard name is 128 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Start time must be follow RFC3339 standard. e.g. 2020-10-02T15:00:00.05Z&lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Season period must be greater than 31 days.&lt;/li&gt; &lt;li&gt;If seasonPeriod is filled, the LeaderboardConfig would have seasonal leaderboard.&lt;/li&gt; &lt;li&gt;Reset Date must be a number 1 - 31. Default is &#39;1&#39;.&lt;/li&gt; &lt;li&gt;Reset Day must be a number 0 - 6. 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday (day of week). Default is &#39;0&#39;.&lt;/li&gt; &lt;li&gt;Reset time must be &lt;b&gt;hours:minutes&lt;/b&gt; in 24 hours format e.g. 01:30, 10:30, 15:30, 23:15.Default is &#39;00:00&#39;.&lt;/li&gt; &lt;li&gt;Stat Code is related with statistic code in statistic service. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;/ul&gt;
     */
    createLeaderboard,
    /**
     * &lt;p&gt;This endpoint delete multiple leaderboards configuration in one request&lt;/p&gt;
     */
    createLeaderboardDelete,
    /**
     * &lt;p&gt;This endpoint delete a leaderboard configuration&lt;/p&gt;
     */
    deleteLeaderboard_ByLeaderboardCode,
    /**
     * &lt;p&gt;This endpoint returns a leaderboard configuration&lt;/p&gt;
     */
    getLeaderboard_ByLeaderboardCode,
    /**
     * &lt;p&gt;&lt;b&gt;Fields :&lt;/b&gt;&lt;/p&gt; &lt;ul&gt; &lt;li&gt;Maximum length for leaderboard name is 128 characters.&lt;/li&gt; &lt;li&gt;Start time must be follow RFC3339 standard. e.g. 2020-10-02T15:00:00.05Z&lt;/li&gt; &lt;li&gt;Season period must be greater than 31 days.&lt;/li&gt; &lt;li&gt;If seasonPeriod is filled, the LeaderboardConfig would have seasonal leaderboard.&lt;/li&gt; &lt;li&gt;Reset Date must be a number 1 - 31. Default is &#39;1&#39;.&lt;/li&gt; &lt;li&gt;Reset Day must be a number 0 - 6. 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday (day of week). Default is &#39;0&#39;.&lt;/li&gt; &lt;li&gt;Reset time must be &lt;b&gt;hours:minutes&lt;/b&gt; in 24 hours format e.g. 01:30, 10:30, 15:30, 23:15.&lt;/li&gt; &lt;/ul&gt;
     */
    updateLeaderboard_ByLeaderboardCode,
    /**
     * &lt;p&gt;&lt;b&gt;[Test Facility Only]&lt;/b&gt;&lt;/p&gt; &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD:HARDDELETE [DELETE]&#39;&lt;/p&gt; &lt;p&gt;This endpoint will delete leaderboard configuration and its data&lt;/p&gt; &lt;p&gt;Note: this endpoint only works on development environment, you might want to use &lt;b&gt;archive endpoint&lt;/b&gt; instead hard delete.&lt;/p&gt;
     */
    deleteHard_ByLeaderboardCode
  }
}
