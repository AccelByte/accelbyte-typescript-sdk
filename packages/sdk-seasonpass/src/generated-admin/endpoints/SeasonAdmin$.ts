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
import { BulkUserProgressionRequest } from '../../generated-definitions/BulkUserProgressionRequest.js'
import { ClaimableUserSeasonInfo } from '../../generated-definitions/ClaimableUserSeasonInfo.js'
import { ExpGrantHistoryPagingSlicedResult } from '../../generated-definitions/ExpGrantHistoryPagingSlicedResult.js'
import { FullSeasonInfo } from '../../generated-definitions/FullSeasonInfo.js'
import { ListSeasonInfoPagingSlicedResult } from '../../generated-definitions/ListSeasonInfoPagingSlicedResult.js'
import { ListUserSeasonInfoPagingSlicedResult } from '../../generated-definitions/ListUserSeasonInfoPagingSlicedResult.js'
import { Ownership } from '../../generated-definitions/Ownership.js'
import { ReasonTagsResult } from '../../generated-definitions/ReasonTagsResult.js'
import { SeasonCloneRequest } from '../../generated-definitions/SeasonCloneRequest.js'
import { SeasonCreate } from '../../generated-definitions/SeasonCreate.js'
import { SeasonInfo } from '../../generated-definitions/SeasonInfo.js'
import { SeasonSummary } from '../../generated-definitions/SeasonSummary.js'
import { SeasonUpdate } from '../../generated-definitions/SeasonUpdate.js'
import { UserPurchasable } from '../../generated-definitions/UserPurchasable.js'
import { UserSeasonSummary } from '../../generated-definitions/UserSeasonSummary.js'
import { UserSeasonSummaryArray } from '../../generated-definitions/UserSeasonSummaryArray.js'

export class SeasonAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to query seasons, seasons only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of season basic info&lt;/li&gt;&lt;/ul&gt;
   */
  getSeasons(queryParams?: {
    limit?: number
    offset?: number
    status?: string[]
  }): Promise<IResponseWithSync<ListSeasonInfoPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ListSeasonInfoPagingSlicedResult, 'ListSeasonInfoPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to create a season, season only allowed in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created season&lt;/li&gt;&lt;/ul&gt;
   */
  createSeason(data: SeasonCreate): Promise<IResponse<SeasonInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, SeasonInfo, 'SeasonInfo')
  }

  /**
   * [SERVICE COMMUNICATION ONLY]This API is used to get current published season summary which includes previous published season summary if exists, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: season summary data&lt;/li&gt;&lt;/ul&gt;
   */
  getSeasonsCurrent(): Promise<IResponseWithSync<SeasonSummary>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/current'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, SeasonSummary, 'SeasonSummary')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to delete a season permanently, only draft season can be deleted. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteSeason_BySeasonId(seasonId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This API is used to get a season, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: season data&lt;/li&gt;&lt;/ul&gt;
   */
  getSeason_BySeasonId(seasonId: string): Promise<IResponseWithSync<SeasonInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, SeasonInfo, 'SeasonInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to update a season. Only draft season can be updated.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated season&lt;/li&gt;&lt;/ul&gt;
   */
  patchSeason_BySeasonId(seasonId: string, data: SeasonUpdate): Promise<IResponse<SeasonInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, SeasonInfo, 'SeasonInfo')
  }

  /**
   * This API is used to get user participated season data, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user participated season data&lt;/li&gt;&lt;/ul&gt;
   */
  getSeasons_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<ListUserSeasonInfoPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => resultPromise, ListUserSeasonInfoPagingSlicedResult, 'ListUserSeasonInfoPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get a season full content, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: season data&lt;/li&gt;&lt;/ul&gt;
   */
  getFull_BySeasonId(seasonId: string): Promise<IResponseWithSync<FullSeasonInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/full'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, FullSeasonInfo, 'FullSeasonInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to clone a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: cloned season info&lt;/li&gt;&lt;/ul&gt;
   */
  createClone_BySeasonId(seasonId: string, data: SeasonCloneRequest): Promise<IResponse<SeasonInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/clone'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, SeasonInfo, 'SeasonInfo')
  }

  /**
   * This API is used to retire a published season, if the season has not ended it will report error except with force.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: season info&lt;/li&gt;&lt;/ul&gt;
   */
  updateRetire_BySeasonId(seasonId: string, queryParams?: { force?: boolean | null }): Promise<IResponse<SeasonInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/retire'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.responseType(() => resultPromise, SeasonInfo, 'SeasonInfo')
  }

  /**
   * This API is used to publish a draft season, only one published season allowed at same time in a namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: published season&lt;/li&gt;&lt;/ul&gt;
   */
  updatePublish_BySeasonId(seasonId: string): Promise<IResponse<SeasonInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/publish'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.responseType(() => resultPromise, SeasonInfo, 'SeasonInfo')
  }

  /**
   * This API is used to unpublish a published season, if the season already started it will report error except with force.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: season info&lt;/li&gt;&lt;/ul&gt;
   */
  updateUnpublish_BySeasonId(seasonId: string, queryParams?: { force?: boolean | null }): Promise<IResponse<SeasonInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/unpublish'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.responseType(() => resultPromise, SeasonInfo, 'SeasonInfo')
  }

  /**
   * This API is used to get user exp acquisition history, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;default will query from current active season&lt;/li&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated grant history&lt;/li&gt;&lt;/ul&gt;
   */
  getSeasonsExpHistory_ByUserId(
    userId: string,
    queryParams?: {
      from?: string | null
      limit?: number
      offset?: number
      seasonId?: string | null
      source?: 'PAID_FOR' | 'SWEAT'
      tags?: string[]
      to?: string | null
    }
  ): Promise<IResponseWithSync<ExpGrantHistoryPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/exp/history'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ExpGrantHistoryPagingSlicedResult, 'ExpGrantHistoryPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt;This API is used to reset user data in current season, it will not revoke the rewarded entitlements.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteSeasonCurrentReset_ByUserId(userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/current/reset'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This API is used to bulk get user current season progression, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season progression&lt;/li&gt;&lt;/ul&gt;
   */
  createSeasonCurrentUserBulkProgression(data: BulkUserProgressionRequest): Promise<IResponse<UserSeasonSummaryArray>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/current/users/bulk/progression'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, UserSeasonSummaryArray, 'UserSeasonSummaryArray')
  }

  /**
   * This API is used to get user season data, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  getData_ByUserId_BySeasonId(userId: string, seasonId: string): Promise<IResponseWithSync<ClaimableUserSeasonInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/{seasonId}/data'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{seasonId}', seasonId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ClaimableUserSeasonInfo, 'ClaimableUserSeasonInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get user exp acquisition history&#39;s tag list.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;default will query from current active season&lt;/li&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: exp grant history tags list&lt;/li&gt;&lt;/ul&gt;
   */
  getSeasonsExpHistoryTags_ByUserId(
    userId: string,
    queryParams?: { seasonId?: string | null }
  ): Promise<IResponseWithSync<ReasonTagsResult>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/exp/history/tags'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ReasonTagsResult, 'ReasonTagsResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get current user season progression, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season progression&lt;/li&gt;&lt;/ul&gt;
   */
  getSeasonsCurrentProgression_ByUserId(userId: string): Promise<IResponseWithSync<UserSeasonSummary>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/current/progression'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserSeasonSummary, 'UserSeasonSummary')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to check pass or tier purchasable, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  createSeasonCurrentPurchasable_ByUserId(userId: string, data: UserPurchasable): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/current/purchasable'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * [SERVICE COMMUNICATION ONLY]This API is used to get ownership for any pass codes, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: ownership&lt;/li&gt;&lt;/ul&gt;
   */
  getSeasonsCurrentPassesOwnershipAny_ByUserId(
    userId: string,
    queryParams?: { passCodes?: string[] }
  ): Promise<IResponseWithSync<Ownership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/current/passes/ownership/any'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, Ownership, 'Ownership')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
