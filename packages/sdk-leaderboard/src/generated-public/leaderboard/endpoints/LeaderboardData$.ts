/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { ArchiveLeaderboardSignedUrlResponseArray } from '../definitions/ArchiveLeaderboardSignedUrlResponseArray.js'
import { GetLeaderboardRankingResp } from '../definitions/GetLeaderboardRankingResp.js'
import { GetPublicLeaderboardRankingResponse } from '../definitions/GetPublicLeaderboardRankingResponse.js'
import { UserRankingResponse } from '../definitions/UserRankingResponse.js'

export class LeaderboardData$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * &lt;p&gt;Get rankings in current week leaderboard.&lt;/p&gt;
   */
  getWeek_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<GetLeaderboardRankingResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/week'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetLeaderboardRankingResp, 'GetLeaderboardRankingResp')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Get rankings in current month leaderboard.&lt;/p&gt;
   */
  getMonth_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<GetLeaderboardRankingResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/month'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetLeaderboardRankingResp, 'GetLeaderboardRankingResp')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Get rankings in today leaderboard.&lt;/p&gt;
   */
  getToday_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<GetLeaderboardRankingResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/today'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetLeaderboardRankingResp, 'GetLeaderboardRankingResp')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Get rankings in current season leaderboard.&lt;/p&gt;
   */
  getSeason_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<GetLeaderboardRankingResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/season'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetLeaderboardRankingResp, 'GetLeaderboardRankingResp')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   *  &lt;p&gt;Get rankings in an all time leaderboard.&lt;/p&gt;
   */
  getAlltime_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<GetLeaderboardRankingResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/alltime'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetLeaderboardRankingResp, 'GetLeaderboardRankingResp')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get rankings in an all time leaderboard.
   */
  getAlltime_ByLeaderboardCode_ByNS(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<GetPublicLeaderboardRankingResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v2/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/alltime'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetPublicLeaderboardRankingResponse, 'GetPublicLeaderboardRankingResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   *  &lt;p&gt;Get signed url in an all time leaderboard that archived. NOTE: This will be a bulk endpoint to get sign url&lt;/p&gt;
   */
  getArchived_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams: { leaderboardCodes: string | null; slug?: string | null }
  ): Promise<IResponseWithSync<ArchiveLeaderboardSignedUrlResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/archived'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => resultPromise, ArchiveLeaderboardSignedUrlResponseArray, 'ArchiveLeaderboardSignedUrlResponseArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Delete user ranking Required permission: NAMESPACE:{namespace}:LEADERBOARD:USER:{userId} [DELETE] Remove entry with provided userId from leaderboard. If leaderboard with given leaderboard code not found, it will return http status not found (404). If the leaderboard is found and no entry found in it, it will still return success (204)
   */
  deleteUser_ByLeaderboardCode_ByUserId(leaderboardCode: string, userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * &lt;p&gt;Get user ranking in leaderboard&lt;/p&gt;
   */
  getUser_ByLeaderboardCode_ByUserId(leaderboardCode: string, userId: string): Promise<IResponseWithSync<UserRankingResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v1/public/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserRankingResponse, 'UserRankingResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
