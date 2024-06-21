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
import { z } from 'zod'
import { ArchiveLeaderboardSignedUrlResponseArray } from '../../generated-definitions/ArchiveLeaderboardSignedUrlResponseArray.js'
import { GetLeaderboardRankingResp } from '../../generated-definitions/GetLeaderboardRankingResp.js'
import { GetPublicLeaderboardRankingResponse } from '../../generated-definitions/GetPublicLeaderboardRankingResponse.js'
import { UserRankingResponse } from '../../generated-definitions/UserRankingResponse.js'

export class LeaderboardData$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * &lt;p&gt;Get rankings in current week leaderboard.&lt;/p&gt;
   */
  getWeek_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<IResponse<GetLeaderboardRankingResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/week'
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
   * &lt;p&gt;Get rankings in current month leaderboard.&lt;/p&gt;
   */
  getMonth_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<IResponse<GetLeaderboardRankingResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/month'
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
   * &lt;p&gt;Get rankings in today leaderboard.&lt;/p&gt;
   */
  getToday_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<IResponse<GetLeaderboardRankingResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/today'
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
   * &lt;p&gt;Get rankings in current season leaderboard.&lt;/p&gt;
   */
  getSeason_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<IResponse<GetLeaderboardRankingResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/season'
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
   * Get rankings in an all time leaderboard.
   */
  getAlltime_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponse<GetLeaderboardRankingResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/alltime'
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
   * Get rankings in an all time leaderboard.
   */
  getAlltime_ByLeaderboardCode_ByNS(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponse<GetPublicLeaderboardRankingResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v2/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/alltime'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetPublicLeaderboardRankingResponse,
      'GetPublicLeaderboardRankingResponse'
    )
  }

  /**
   * Get signed url in an all time leaderboard that archived. NOTE: This will be a bulk endpoint to get sign url
   */
  getArchived_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams: { leaderboardCodes: string | null; slug?: string | null }
  ): Promise<IResponse<ArchiveLeaderboardSignedUrlResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/archived'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ArchiveLeaderboardSignedUrlResponseArray,
      'ArchiveLeaderboardSignedUrlResponseArray'
    )
  }

  /**
   * Delete user ranking Remove entry with provided userId from leaderboard. If leaderboard with given leaderboard code not found, it will return http status not found (404). If the leaderboard is found and no entry found in it, it will still return success (204)
   */
  deleteUser_ByLeaderboardCode_ByUserId(leaderboardCode: string, userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * &lt;p&gt;Get user ranking in leaderboard&lt;/p&gt;
   */
  getUser_ByLeaderboardCode_ByUserId(
    leaderboardCode: string,
    userId: string,
    queryParams?: { previousVersion?: number }
  ): Promise<IResponse<UserRankingResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserRankingResponse, 'UserRankingResponse')
  }
}
