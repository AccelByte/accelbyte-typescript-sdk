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
import { GetLeaderboardRankingResp } from '../generated-definitions/GetLeaderboardRankingResp.js'
import { UserRankingResponseV3 } from '../generated-definitions/UserRankingResponseV3.js'
import { LeaderboardDataV3Admin$ } from './endpoints/LeaderboardDataV3Admin$.js'

export function LeaderboardDataV3AdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deleteUser_ByUserId_v3(userId: string, queryParams: { leaderboardCode: string[] }): Promise<AxiosResponse<unknown>> {
    const $ = new LeaderboardDataV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteUser_ByUserId_v3(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteReset_ByLeaderboardCode_v3(leaderboardCode: string): Promise<AxiosResponse<unknown>> {
    const $ = new LeaderboardDataV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteReset_ByLeaderboardCode_v3(leaderboardCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getAlltime_ByLeaderboardCode_v3(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<GetLeaderboardRankingResp>> {
    const $ = new LeaderboardDataV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAlltime_ByLeaderboardCode_v3(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteUser_ByLeaderboardCode_ByUserId_v3(leaderboardCode: string, userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new LeaderboardDataV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteUser_ByLeaderboardCode_ByUserId_v3(leaderboardCode, userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUser_ByLeaderboardCode_ByUserId_v3(
    leaderboardCode: string,
    userId: string,
    queryParams?: { previousVersion?: number }
  ): Promise<AxiosResponse<UserRankingResponseV3>> {
    const $ = new LeaderboardDataV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUser_ByLeaderboardCode_ByUserId_v3(leaderboardCode, userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCycle_ByLeaderboardCode_ByCycleId_v3(
    leaderboardCode: string,
    cycleId: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<AxiosResponse<GetLeaderboardRankingResp>> {
    const $ = new LeaderboardDataV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCycle_ByLeaderboardCode_ByCycleId_v3(leaderboardCode, cycleId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteReset_ByLeaderboardCode_ByCycleId_v3(leaderboardCode: string, cycleId: string): Promise<AxiosResponse<unknown>> {
    const $ = new LeaderboardDataV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteReset_ByLeaderboardCode_ByCycleId_v3(leaderboardCode, cycleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteUser_ByLeaderboardCode_ByCycleId_ByUserId_v3(
    leaderboardCode: string,
    cycleId: string,
    userId: string
  ): Promise<AxiosResponse<unknown>> {
    const $ = new LeaderboardDataV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteUser_ByLeaderboardCode_ByCycleId_ByUserId_v3(leaderboardCode, cycleId, userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Delete user ranking across leaderboard Remove entry with provided userId from leaderboard.
     */
    deleteUser_ByUserId_v3,
    /**
     * &lt;p&gt;This endpoint will delete user ranking by leaderboard code&lt;/p&gt; &lt;p&gt;&lt;b&gt;Warning&lt;/b&gt;: This will permanently delete your data. Make sure to back up anything important before continuing.&lt;/p&gt;
     */
    deleteReset_ByLeaderboardCode_v3,
    /**
     * &lt;p&gt;Get rankings in an all time leaderboard.&lt;/p&gt;
     */
    getAlltime_ByLeaderboardCode_v3,
    /**
     * Delete user ranking Remove entry with provided userId from leaderboard. If leaderboard with given leaderboard code not found, it will return http status not found (404). If the leaderboard is found and no entry found in it, it will still return success (204)
     */
    deleteUser_ByLeaderboardCode_ByUserId_v3,
    /**
     * &lt;p&gt;Get user ranking in leaderboard&lt;/p&gt;
     */
    getUser_ByLeaderboardCode_ByUserId_v3,
    /**
     * &lt;p&gt;Get rankings in cycle leaderboard.&lt;/p&gt;
     */
    getCycle_ByLeaderboardCode_ByCycleId_v3,
    /**
     * &lt;p&gt;This endpoint will delete user ranking by cycleId&lt;/p&gt; &lt;p&gt;&lt;b&gt;Warning&lt;/b&gt;: This will permanently delete your data. Make sure to back up anything important before continuing.&lt;/p&gt;
     */
    deleteReset_ByLeaderboardCode_ByCycleId_v3,
    /**
     * Delete user ranking by cycle id Remove entry with provided cycleId and userId from leaderboard. If leaderboard with given leaderboard code not found, it will return http status not found (404). If the leaderboard is found and no entry found in it, it will still return success (204)
     */
    deleteUser_ByLeaderboardCode_ByCycleId_ByUserId_v3
  }
}
