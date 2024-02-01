/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { ArchiveLeaderboardReq } from '../../generated-definitions/ArchiveLeaderboardReq.js'
import { ArchiveLeaderboardSignedUrlResponseArray } from '../../generated-definitions/ArchiveLeaderboardSignedUrlResponseArray.js'
import { GetLeaderboardRankingResp } from '../../generated-definitions/GetLeaderboardRankingResp.js'
import { UpdateUserPointAdminV1Request } from '../../generated-definitions/UpdateUserPointAdminV1Request.js'
import { UpdateUserPointAdminV1Response } from '../../generated-definitions/UpdateUserPointAdminV1Response.js'
import { UserRankingResponse } from '../../generated-definitions/UserRankingResponse.js'

export class LeaderboardDataAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Delete user ranking across leaderboard Required permission: ADMIN:NAMESPACE:{namespace}:LEADERBOARD:USER [DELETE] Remove entry with provided userId from leaderboard.
   */
  deleteUser_ByUserId(userId: string, queryParams: { leaderboardCode: string[] }): Promise<IResponse<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/admin/namespaces/{namespace}/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;Admin Get signed url in an all time leaderboard that archived. Notes: This will be a bulk endpoint to get sign url&lt;/p&gt;
   */
  getLeaderboardsArchived(queryParams: {
    leaderboardCodes: string | null
    slug?: string | null
  }): Promise<IResponseWithSync<ArchiveLeaderboardSignedUrlResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/admin/namespaces/{namespace}/leaderboards/archived'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ArchiveLeaderboardSignedUrlResponseArray, 'ArchiveLeaderboardSignedUrlResponseArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [CREATE]&#39;&lt;/p&gt; &lt;p&gt;Archive leaderboard ranking data for specified leaderboard codes. NOTE: This will remove all data of the leaderboard on every slug, remove the leaderboard code on stat mapping, and remove the leaderboard on the queue reset. This will be a bulk endpoint&lt;/p&gt;
   */
  createLeaderboardArchived(data: ArchiveLeaderboardReq): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v1/admin/namespaces/{namespace}/leaderboards/archived'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [READ]&#39;&lt;/p&gt; &lt;p&gt;Get rankings in current week leaderboard.&lt;/p&gt;
   */
  getWeek_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<IResponseWithSync<GetLeaderboardRankingResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/week'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetLeaderboardRankingResp, 'GetLeaderboardRankingResp')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [READ]&#39;&lt;/p&gt; &lt;p&gt;Get rankings in current month leaderboard.&lt;/p&gt;
   */
  getMonth_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<IResponseWithSync<GetLeaderboardRankingResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/month'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetLeaderboardRankingResp, 'GetLeaderboardRankingResp')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;&lt;b&gt;[Test Facility Only]&lt;/b&gt;&lt;/p&gt; &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [DELETE]&#39;&lt;/p&gt; &lt;p&gt;This endpoint will delete user ranking by leaderboard code&lt;/p&gt; &lt;p&gt;Note: this endpoint only works on development environment.&lt;/p&gt;
   */
  deleteReset_ByLeaderboardCode(leaderboardCode: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/reset'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [READ]&#39;&lt;/p&gt; &lt;p&gt;Get rankings in today leaderboard.&lt;/p&gt;
   */
  getToday_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<IResponseWithSync<GetLeaderboardRankingResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/today'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetLeaderboardRankingResp, 'GetLeaderboardRankingResp')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [READ]&#39;&lt;/p&gt; &lt;p&gt;Get rankings in current season leaderboard.&lt;/p&gt;
   */
  getSeason_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<IResponseWithSync<GetLeaderboardRankingResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/season'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetLeaderboardRankingResp, 'GetLeaderboardRankingResp')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [READ]&#39;&lt;/p&gt; &lt;p&gt;Get rankings in an all time leaderboard.&lt;/p&gt;
   */
  getAlltime_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<GetLeaderboardRankingResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/alltime'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetLeaderboardRankingResp, 'GetLeaderboardRankingResp')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Delete user ranking Required permission: ADMIN:NAMESPACE:{namespace}:LEADERBOARD:USER [DELETE] Remove entry with provided userId from leaderboard. If leaderboard with given leaderboard code not found, it will return http status not found (404). If the leaderboard is found and no entry found in it, it will still return success (204)
   */
  deleteUser_ByLeaderboardCode_ByUserId(leaderboardCode: string, userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [READ]&#39;&lt;/p&gt; &lt;p&gt;Get user ranking in leaderboard&lt;/p&gt;
   */
  getUser_ByLeaderboardCode_ByUserId(
    leaderboardCode: string,
    userId: string,
    queryParams?: { previousVersion?: number }
  ): Promise<IResponseWithSync<UserRankingResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, UserRankingResponse, 'UserRankingResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Update user point in a leaderboard. This endpoint uses for test utility only.&lt;/p&gt; &lt;p&gt;Other detail info:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;Required permission: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:(userId):LEADERBOARD&#34;, action=4 (UPDATE)&lt;/li&gt; &lt;li&gt;Returns: user ranking&lt;/li&gt; &lt;/ul&gt;
   */
  updateUser_ByLeaderboardCode_ByUserId(
    leaderboardCode: string,
    userId: string,
    data: UpdateUserPointAdminV1Request
  ): Promise<IResponse<UpdateUserPointAdminV1Response>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UpdateUserPointAdminV1Response, 'UpdateUserPointAdminV1Response')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
