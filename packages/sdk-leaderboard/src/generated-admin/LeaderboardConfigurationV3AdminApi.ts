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
import { GetAllLeaderboardConfigsRespV3 } from '../generated-definitions/GetAllLeaderboardConfigsRespV3.js'
import { GetLeaderboardConfigRespV3 } from '../generated-definitions/GetLeaderboardConfigRespV3.js'
import { LeaderboardConfigReqV3 } from '../generated-definitions/LeaderboardConfigReqV3.js'
import { UpdateLeaderboardConfigReqV3 } from '../generated-definitions/UpdateLeaderboardConfigReqV3.js'
import { LeaderboardConfigurationV3Admin$ } from './endpoints/LeaderboardConfigurationV3Admin$.js'

export function LeaderboardConfigurationV3AdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getLeaderboards_v3(queryParams?: {
    isDeleted?: boolean | null
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<GetAllLeaderboardConfigsRespV3>> {
    const $ = new LeaderboardConfigurationV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLeaderboards_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createLeaderboard_v3(data: LeaderboardConfigReqV3): Promise<AxiosResponse<GetLeaderboardConfigRespV3>> {
    const $ = new LeaderboardConfigurationV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createLeaderboard_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createLeaderboardDelete_v3(data: DeleteBulkLeaderboardsReq): Promise<AxiosResponse<DeleteBulkLeaderboardsResp>> {
    const $ = new LeaderboardConfigurationV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createLeaderboardDelete_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteLeaderboard_ByLeaderboardCode_v3(leaderboardCode: string): Promise<AxiosResponse<unknown>> {
    const $ = new LeaderboardConfigurationV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteLeaderboard_ByLeaderboardCode_v3(leaderboardCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getLeaderboard_ByLeaderboardCode_v3(leaderboardCode: string): Promise<AxiosResponse<GetLeaderboardConfigRespV3>> {
    const $ = new LeaderboardConfigurationV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLeaderboard_ByLeaderboardCode_v3(leaderboardCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateLeaderboard_ByLeaderboardCode_v3(
    leaderboardCode: string,
    data: UpdateLeaderboardConfigReqV3
  ): Promise<AxiosResponse<GetLeaderboardConfigRespV3>> {
    const $ = new LeaderboardConfigurationV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateLeaderboard_ByLeaderboardCode_v3(leaderboardCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteHard_ByLeaderboardCode_v3(leaderboardCode: string): Promise<AxiosResponse<unknown>> {
    const $ = new LeaderboardConfigurationV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteHard_ByLeaderboardCode_v3(leaderboardCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * &lt;p&gt;This endpoint return all leaderboard configurations&lt;/p&gt;
     */
    getLeaderboards_v3,
    /**
     * &lt;p&gt;&lt;b&gt;Fields :&lt;/b&gt;&lt;/p&gt; &lt;ul&gt;&lt;li&gt;leaderboardCode: unique leaderboard config code must be lowercase and maximum length is 48 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;name: leaderboard name, maximum length for leaderboard name is 128 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;description: leaderboard description, maximum length for leaderboard description is 2048 characters. &lt;b&gt;(optional)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;iconURL: leaderboard icon image url. &lt;b&gt;(optional)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;allTime: if true, all time leaderboard will be created. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;descending: leaderboard order. If true, the points will be sorted in descending order. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;statCode: Stat Code is related with statistic code in statistic service. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;cycleIds: Statistic cycle ids that will be tracked in the leaderboard. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;/ul&gt;
     */
    createLeaderboard_v3,
    /**
     * &lt;p&gt;This endpoint delete multiple leaderboards configuration in one request&lt;/p&gt;
     */
    createLeaderboardDelete_v3,
    /**
     * &lt;p&gt;This endpoint delete a leaderboard configuration&lt;/p&gt;
     */
    deleteLeaderboard_ByLeaderboardCode_v3,
    /**
     * &lt;p&gt;This endpoint returns a leaderboard configuration&lt;/p&gt;
     */
    getLeaderboard_ByLeaderboardCode_v3,
    /**
     * &lt;p&gt;&lt;b&gt;Fields :&lt;/b&gt;&lt;/p&gt; &lt;ul&gt;&lt;li&gt;leaderboardCode: unique leaderboard config code must be lowercase and maximum length is 48 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;name: leaderboard name, maximum length for leaderboard name is 128 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;description: leaderboard description, maximum length for leaderboard description is 2048 characters. &lt;b&gt;(optional)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;iconURL: leaderboard icon image url. &lt;b&gt;(optional)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;allTime: if true, all time leaderboard will be created. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;descending: leaderboard order. If true, the points will be sorted in descending order. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;statCode: Stat Code is related with statistic code in statistic service. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;cycleIds: Statistic cycle ids that will be tracked in the leaderboard. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;/ul&gt;
     */
    updateLeaderboard_ByLeaderboardCode_v3,
    /**
     * &lt;p&gt;&lt;b&gt;[Test Facility Only]&lt;/b&gt;&lt;/p&gt; &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD:HARDDELETE [DELETE]&#39;&lt;/p&gt; &lt;p&gt;This endpoint will delete leaderboard configuration and its data&lt;/p&gt; &lt;p&gt;Note: this endpoint only works on development environment, you might want to use &lt;b&gt;archive endpoint&lt;/b&gt; instead hard delete.&lt;/p&gt;
     */
    deleteHard_ByLeaderboardCode_v3
  }
}
