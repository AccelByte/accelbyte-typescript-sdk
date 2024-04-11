/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { BulkUserIDsRequest } from '../../generated-definitions/BulkUserIDsRequest.js'
import { BulkUserRankingResponseV3 } from '../../generated-definitions/BulkUserRankingResponseV3.js'
import { GetLeaderboardRankingResp } from '../../generated-definitions/GetLeaderboardRankingResp.js'
import { UserRankingResponseV3 } from '../../generated-definitions/UserRankingResponseV3.js'

export class LeaderboardDataV3$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * &lt;p&gt;Get rankings in an all time leaderboard.&lt;/p&gt;
   */
  getAlltime_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponse<GetLeaderboardRankingResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v3/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/alltime'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GetLeaderboardRankingResp, 'GetLeaderboardRankingResp')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;Bulk get users ranking in leaderboard, max allowed 20 userIDs at a time.&lt;/p&gt;
   */
  createUserBulk_ByLeaderboardCode(leaderboardCode: string, data: BulkUserIDsRequest): Promise<IResponse<BulkUserRankingResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v3/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BulkUserRankingResponseV3, 'BulkUserRankingResponseV3')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;Get user ranking in leaderboard&lt;/p&gt;
   */
  getUser_ByLeaderboardCode_ByUserId(leaderboardCode: string, userId: string): Promise<IResponse<UserRankingResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v3/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UserRankingResponseV3, 'UserRankingResponseV3')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;Get rankings in cycle leaderboard.&lt;/p&gt;
   */
  getCycle_ByLeaderboardCode_ByCycleId(
    leaderboardCode: string,
    cycleId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponse<GetLeaderboardRankingResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v3/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/cycles/{cycleId}'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
      .replace('{cycleId}', cycleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GetLeaderboardRankingResp, 'GetLeaderboardRankingResp')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
