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
import { ArchiveLeaderboardReq } from '../generated-definitions/ArchiveLeaderboardReq.js'
import { ArchiveLeaderboardSignedUrlResponseArray } from '../generated-definitions/ArchiveLeaderboardSignedUrlResponseArray.js'
import { GetLeaderboardRankingResp } from '../generated-definitions/GetLeaderboardRankingResp.js'
import { UpdateUserPointAdminV1Request } from '../generated-definitions/UpdateUserPointAdminV1Request.js'
import { UpdateUserPointAdminV1Response } from '../generated-definitions/UpdateUserPointAdminV1Response.js'
import { UserRankingResponse } from '../generated-definitions/UserRankingResponse.js'
import { LeaderboardDataAdmin$ } from './endpoints/LeaderboardDataAdmin$.js'

export function LeaderboardDataAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deleteUser_ByUserId(userId: string, queryParams: { leaderboardCode: string[] }): Promise<AxiosResponse<unknown>> {
    const $ = new LeaderboardDataAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteUser_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getLeaderboardsArchived(queryParams: {
    leaderboardCodes: string | null
    slug?: string | null
  }): Promise<AxiosResponse<ArchiveLeaderboardSignedUrlResponseArray>> {
    const $ = new LeaderboardDataAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLeaderboardsArchived(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createLeaderboardArchived(data: ArchiveLeaderboardReq): Promise<AxiosResponse<unknown>> {
    const $ = new LeaderboardDataAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createLeaderboardArchived(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getWeek_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<AxiosResponse<GetLeaderboardRankingResp>> {
    const $ = new LeaderboardDataAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getWeek_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getMonth_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<AxiosResponse<GetLeaderboardRankingResp>> {
    const $ = new LeaderboardDataAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMonth_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteReset_ByLeaderboardCode(leaderboardCode: string): Promise<AxiosResponse<unknown>> {
    const $ = new LeaderboardDataAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteReset_ByLeaderboardCode(leaderboardCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getToday_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<AxiosResponse<GetLeaderboardRankingResp>> {
    const $ = new LeaderboardDataAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getToday_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSeason_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<AxiosResponse<GetLeaderboardRankingResp>> {
    const $ = new LeaderboardDataAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSeason_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getAlltime_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<GetLeaderboardRankingResp>> {
    const $ = new LeaderboardDataAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAlltime_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteUser_ByLeaderboardCode_ByUserId(leaderboardCode: string, userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new LeaderboardDataAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteUser_ByLeaderboardCode_ByUserId(leaderboardCode, userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUser_ByLeaderboardCode_ByUserId(
    leaderboardCode: string,
    userId: string,
    queryParams?: { previousVersion?: number }
  ): Promise<AxiosResponse<UserRankingResponse>> {
    const $ = new LeaderboardDataAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUser_ByLeaderboardCode_ByUserId(leaderboardCode, userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUser_ByLeaderboardCode_ByUserId(
    leaderboardCode: string,
    userId: string,
    data: UpdateUserPointAdminV1Request
  ): Promise<AxiosResponse<UpdateUserPointAdminV1Response>> {
    const $ = new LeaderboardDataAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUser_ByLeaderboardCode_ByUserId(leaderboardCode, userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Delete user ranking across leaderboard Remove entry with provided userId from leaderboard.
     */
    deleteUser_ByUserId,
    /**
     * &lt;p&gt;Admin Get signed url in an all time leaderboard that archived. Notes: This will be a bulk endpoint to get sign url&lt;/p&gt;
     */
    getLeaderboardsArchived,
    /**
     * &lt;p&gt;Archive leaderboard ranking data for specified leaderboard codes. NOTE: This will remove all data of the leaderboard on every slug, remove the leaderboard code on stat mapping, and remove the leaderboard on the queue reset. This will be a bulk endpoint&lt;/p&gt;
     */
    createLeaderboardArchived,
    /**
     * &lt;p&gt;Get rankings in current week leaderboard.&lt;/p&gt;
     */
    getWeek_ByLeaderboardCode,
    /**
     * &lt;p&gt;Get rankings in current month leaderboard.&lt;/p&gt;
     */
    getMonth_ByLeaderboardCode,
    /**
     * &lt;p&gt;This endpoint will delete user ranking by leaderboard code&lt;/p&gt; &lt;p&gt;&lt;b&gt;Warning&lt;/b&gt;: This will permanently delete your data. Make sure to back up anything important before continuing.&lt;/p&gt;
     */
    deleteReset_ByLeaderboardCode,
    /**
     * &lt;p&gt;Get rankings in today leaderboard.&lt;/p&gt;
     */
    getToday_ByLeaderboardCode,
    /**
     * &lt;p&gt;Get rankings in current season leaderboard.&lt;/p&gt;
     */
    getSeason_ByLeaderboardCode,
    /**
     * &lt;p&gt;Get rankings in an all time leaderboard.&lt;/p&gt;
     */
    getAlltime_ByLeaderboardCode,
    /**
     * Delete user ranking Remove entry with provided userId from leaderboard. If leaderboard with given leaderboard code not found, it will return http status not found (404). If the leaderboard is found and no entry found in it, it will still return success (204)
     */
    deleteUser_ByLeaderboardCode_ByUserId,
    /**
     * &lt;p&gt;Get user ranking in leaderboard&lt;/p&gt;
     */
    getUser_ByLeaderboardCode_ByUserId,
    /**
     * &lt;p&gt;Update user point in a leaderboard. This endpoint uses for test utility only.&lt;/p&gt; &lt;p&gt;Other detail info:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;Returns: user ranking&lt;/li&gt; &lt;/ul&gt;
     */
    updateUser_ByLeaderboardCode_ByUserId
  }
}
