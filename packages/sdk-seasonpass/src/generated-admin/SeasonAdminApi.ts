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
import { BulkUserProgressionRequest } from '../generated-definitions/BulkUserProgressionRequest.js'
import { ClaimableUserSeasonInfo } from '../generated-definitions/ClaimableUserSeasonInfo.js'
import { ExpGrantHistoryPagingSlicedResult } from '../generated-definitions/ExpGrantHistoryPagingSlicedResult.js'
import { FullSeasonInfo } from '../generated-definitions/FullSeasonInfo.js'
import { ListSeasonInfoPagingSlicedResult } from '../generated-definitions/ListSeasonInfoPagingSlicedResult.js'
import { ListUserSeasonInfoPagingSlicedResult } from '../generated-definitions/ListUserSeasonInfoPagingSlicedResult.js'
import { Ownership } from '../generated-definitions/Ownership.js'
import { ReasonTagsResult } from '../generated-definitions/ReasonTagsResult.js'
import { SeasonCloneRequest } from '../generated-definitions/SeasonCloneRequest.js'
import { SeasonCreate } from '../generated-definitions/SeasonCreate.js'
import { SeasonInfo } from '../generated-definitions/SeasonInfo.js'
import { SeasonSummary } from '../generated-definitions/SeasonSummary.js'
import { SeasonUpdate } from '../generated-definitions/SeasonUpdate.js'
import { UserPurchasable } from '../generated-definitions/UserPurchasable.js'
import { UserSeasonSummary } from '../generated-definitions/UserSeasonSummary.js'
import { UserSeasonSummaryArray } from '../generated-definitions/UserSeasonSummaryArray.js'
import { SeasonAdmin$ } from './endpoints/SeasonAdmin$.js'

export function SeasonAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getSeasons(queryParams?: {
    limit?: number
    offset?: number
    status?: string[]
  }): Promise<AxiosResponse<ListSeasonInfoPagingSlicedResult>> {
    const $ = new SeasonAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSeasons(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createSeason(data: SeasonCreate): Promise<AxiosResponse<SeasonInfo>> {
    const $ = new SeasonAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSeason(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSeasonsCurrent(): Promise<AxiosResponse<SeasonSummary>> {
    const $ = new SeasonAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSeasonsCurrent()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteSeason_BySeasonId(seasonId: string): Promise<AxiosResponse<unknown>> {
    const $ = new SeasonAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteSeason_BySeasonId(seasonId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSeason_BySeasonId(seasonId: string): Promise<AxiosResponse<SeasonInfo>> {
    const $ = new SeasonAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSeason_BySeasonId(seasonId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchSeason_BySeasonId(seasonId: string, data: SeasonUpdate): Promise<AxiosResponse<SeasonInfo>> {
    const $ = new SeasonAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchSeason_BySeasonId(seasonId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSeasons_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<ListUserSeasonInfoPagingSlicedResult>> {
    const $ = new SeasonAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSeasons_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getFull_BySeasonId(seasonId: string): Promise<AxiosResponse<FullSeasonInfo>> {
    const $ = new SeasonAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFull_BySeasonId(seasonId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createClone_BySeasonId(seasonId: string, data: SeasonCloneRequest): Promise<AxiosResponse<SeasonInfo>> {
    const $ = new SeasonAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createClone_BySeasonId(seasonId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRetire_BySeasonId(seasonId: string, queryParams?: { force?: boolean | null }): Promise<AxiosResponse<SeasonInfo>> {
    const $ = new SeasonAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRetire_BySeasonId(seasonId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePublish_BySeasonId(seasonId: string): Promise<AxiosResponse<SeasonInfo>> {
    const $ = new SeasonAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePublish_BySeasonId(seasonId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUnpublish_BySeasonId(
    seasonId: string,
    queryParams?: { force?: boolean | null }
  ): Promise<AxiosResponse<SeasonInfo>> {
    const $ = new SeasonAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUnpublish_BySeasonId(seasonId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSeasonsExpHistory_ByUserId(
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
  ): Promise<AxiosResponse<ExpGrantHistoryPagingSlicedResult>> {
    const $ = new SeasonAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSeasonsExpHistory_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteSeasonCurrentReset_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new SeasonAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteSeasonCurrentReset_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createSeasonCurrentUserBulkProgression(data: BulkUserProgressionRequest): Promise<AxiosResponse<UserSeasonSummaryArray>> {
    const $ = new SeasonAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSeasonCurrentUserBulkProgression(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getData_ByUserId_BySeasonId(userId: string, seasonId: string): Promise<AxiosResponse<ClaimableUserSeasonInfo>> {
    const $ = new SeasonAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getData_ByUserId_BySeasonId(userId, seasonId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSeasonsExpHistoryTags_ByUserId(
    userId: string,
    queryParams?: { seasonId?: string | null }
  ): Promise<AxiosResponse<ReasonTagsResult>> {
    const $ = new SeasonAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSeasonsExpHistoryTags_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSeasonsCurrentProgression_ByUserId(userId: string): Promise<AxiosResponse<UserSeasonSummary>> {
    const $ = new SeasonAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSeasonsCurrentProgression_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createSeasonCurrentPurchasable_ByUserId(userId: string, data: UserPurchasable): Promise<AxiosResponse<unknown>> {
    const $ = new SeasonAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSeasonCurrentPurchasable_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSeasonsCurrentPassesOwnershipAny_ByUserId(
    userId: string,
    queryParams?: { passCodes?: string[] }
  ): Promise<AxiosResponse<Ownership>> {
    const $ = new SeasonAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSeasonsCurrentPassesOwnershipAny_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to query seasons, seasons only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of season basic info&lt;/li&gt;&lt;/ul&gt;
     */
    getSeasons,
    /**
     * This API is used to create a season, season only allowed in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created season&lt;/li&gt;&lt;/ul&gt;
     */
    createSeason,
    /**
     * [SERVICE COMMUNICATION ONLY]This API is used to get current published season summary which includes previous published season summary if exists, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: season summary data&lt;/li&gt;&lt;/ul&gt;
     */
    getSeasonsCurrent,
    /**
     * This API is used to delete a season permanently, only draft season can be deleted. &lt;p&gt;
     */
    deleteSeason_BySeasonId,
    /**
     * This API is used to get a season, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: season data&lt;/li&gt;&lt;/ul&gt;
     */
    getSeason_BySeasonId,
    /**
     * This API is used to update a season. Only draft season can be updated.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated season&lt;/li&gt;&lt;/ul&gt;
     */
    patchSeason_BySeasonId,
    /**
     * This API is used to get user participated season data, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user participated season data&lt;/li&gt;&lt;/ul&gt;
     */
    getSeasons_ByUserId,
    /**
     * This API is used to get a season full content, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: season data&lt;/li&gt;&lt;/ul&gt;
     */
    getFull_BySeasonId,
    /**
     * This API is used to clone a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: cloned season info&lt;/li&gt;&lt;/ul&gt;
     */
    createClone_BySeasonId,
    /**
     * This API is used to retire a published season, if the season has not ended it will report error except with force.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: season info&lt;/li&gt;&lt;/ul&gt;
     */
    updateRetire_BySeasonId,
    /**
     * This API is used to publish a draft season, only one published season allowed at same time in a namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: published season&lt;/li&gt;&lt;/ul&gt;
     */
    updatePublish_BySeasonId,
    /**
     * This API is used to unpublish a published season, if the season already started it will report error except with force.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: season info&lt;/li&gt;&lt;/ul&gt;
     */
    updateUnpublish_BySeasonId,
    /**
     * This API is used to get user exp acquisition history, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;default will query from current active season&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated grant history&lt;/li&gt;&lt;/ul&gt;
     */
    getSeasonsExpHistory_ByUserId,
    /**
     * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt;This API is used to reset user data in current season, it will not revoke the rewarded entitlements.&lt;p&gt;
     */
    deleteSeasonCurrentReset_ByUserId,
    /**
     * This API is used to bulk get user current season progression, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season progression&lt;/li&gt;&lt;/ul&gt;
     */
    createSeasonCurrentUserBulkProgression,
    /**
     * This API is used to get user season data, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
     */
    getData_ByUserId_BySeasonId,
    /**
     * This API is used to get user exp acquisition history&#39;s tag list.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;default will query from current active season&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: exp grant history tags list&lt;/li&gt;&lt;/ul&gt;
     */
    getSeasonsExpHistoryTags_ByUserId,
    /**
     * This API is used to get current user season progression, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season progression&lt;/li&gt;&lt;/ul&gt;
     */
    getSeasonsCurrentProgression_ByUserId,
    /**
     * This API is used to check pass or tier purchasable, season only located in non-publisher namespace.&lt;p&gt;
     */
    createSeasonCurrentPurchasable_ByUserId,
    /**
     * [SERVICE COMMUNICATION ONLY]This API is used to get ownership for any pass codes, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: ownership&lt;/li&gt;&lt;/ul&gt;
     */
    getSeasonsCurrentPassesOwnershipAny_ByUserId
  }
}
