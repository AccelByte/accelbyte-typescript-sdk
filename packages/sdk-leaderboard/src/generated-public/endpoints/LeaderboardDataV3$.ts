/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { BulkUserIDsRequest } from '../../generated-definitions/BulkUserIDsRequest.js'
import { BulkUserRankingResponseV3 } from '../../generated-definitions/BulkUserRankingResponseV3.js'
import { GetLeaderboardRankingResp } from '../../generated-definitions/GetLeaderboardRankingResp.js'
import { UserRankingResponseV3 } from '../../generated-definitions/UserRankingResponseV3.js'

export class LeaderboardDataV3$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * &lt;p&gt;Get rankings in an all time leaderboard.&lt;/p&gt;
   */
  getAlltime_ByLeaderboardCode_v3(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<Response<GetLeaderboardRankingResp>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/leaderboard/v3/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/alltime'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetLeaderboardRankingResp,
      'GetLeaderboardRankingResp'
    )
  }
  /**
   * &lt;p&gt;Bulk get users ranking in leaderboard, max allowed 20 userIDs at a time.&lt;/p&gt;
   */
  createUserBulk_ByLeaderboardCode_v3(
    leaderboardCode: string,
    data: BulkUserIDsRequest,
    queryParams?: { previousVersion?: number }
  ): Promise<Response<BulkUserRankingResponseV3>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/leaderboard/v3/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkUserRankingResponseV3,
      'BulkUserRankingResponseV3'
    )
  }
  /**
   * &lt;p&gt;Get user ranking in leaderboard&lt;/p&gt;
   */
  getUser_ByLeaderboardCode_ByUserId_v3(
    leaderboardCode: string,
    userId: string,
    queryParams?: { previousVersion?: number }
  ): Promise<Response<UserRankingResponseV3>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/leaderboard/v3/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserRankingResponseV3, 'UserRankingResponseV3')
  }
  /**
   * &lt;p&gt;Get rankings in cycle leaderboard.&lt;/p&gt;
   */
  getCycle_ByLeaderboardCode_ByCycleId_v3(
    leaderboardCode: string,
    cycleId: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<Response<GetLeaderboardRankingResp>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/leaderboard/v3/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/cycles/{cycleId}'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
      .replace('{cycleId}', cycleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetLeaderboardRankingResp,
      'GetLeaderboardRankingResp'
    )
  }
}
