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
import { BulkUserIDsRequest } from '../generated-definitions/BulkUserIDsRequest.js'
import { BulkUserRankingResponseV3 } from '../generated-definitions/BulkUserRankingResponseV3.js'
import { GetLeaderboardRankingResp } from '../generated-definitions/GetLeaderboardRankingResp.js'
import { UserRankingResponseV3 } from '../generated-definitions/UserRankingResponseV3.js'
import { LeaderboardDataV3$ } from './endpoints/LeaderboardDataV3$.js'

export function LeaderboardDataV3Api(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getAlltime_ByLeaderboardCode_v3(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<GetLeaderboardRankingResp>> {
    const $ = new LeaderboardDataV3$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAlltime_ByLeaderboardCode_v3(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserBulk_ByLeaderboardCode_v3(
    leaderboardCode: string,
    data: BulkUserIDsRequest
  ): Promise<AxiosResponse<BulkUserRankingResponseV3>> {
    const $ = new LeaderboardDataV3$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserBulk_ByLeaderboardCode_v3(leaderboardCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUser_ByLeaderboardCode_ByUserId_v3(
    leaderboardCode: string,
    userId: string
  ): Promise<AxiosResponse<UserRankingResponseV3>> {
    const $ = new LeaderboardDataV3$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUser_ByLeaderboardCode_ByUserId_v3(leaderboardCode, userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCycle_ByLeaderboardCode_ByCycleId_v3(
    leaderboardCode: string,
    cycleId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<GetLeaderboardRankingResp>> {
    const $ = new LeaderboardDataV3$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCycle_ByLeaderboardCode_ByCycleId_v3(leaderboardCode, cycleId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * &lt;p&gt;Get rankings in an all time leaderboard.&lt;/p&gt;
     */
    getAlltime_ByLeaderboardCode_v3,
    /**
     * &lt;p&gt;Bulk get users ranking in leaderboard, max allowed 20 userIDs at a time.&lt;/p&gt;
     */
    createUserBulk_ByLeaderboardCode_v3,
    /**
     * &lt;p&gt;Get user ranking in leaderboard&lt;/p&gt;
     */
    getUser_ByLeaderboardCode_ByUserId_v3,
    /**
     * &lt;p&gt;Get rankings in cycle leaderboard.&lt;/p&gt;
     */
    getCycle_ByLeaderboardCode_ByCycleId_v3
  }
}
