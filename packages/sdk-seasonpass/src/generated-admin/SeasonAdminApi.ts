/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { BulkUserProgressionRequest } from '../generated-definitions/BulkUserProgressionRequest.js'
import { ClaimableUserSeasonInfo } from '../generated-definitions/ClaimableUserSeasonInfo.js'
import { ExpGrantHistoryPagingSlicedResult } from '../generated-definitions/ExpGrantHistoryPagingSlicedResult.js'
import { FullSeasonInfo } from '../generated-definitions/FullSeasonInfo.js'
import { ListSeasonInfoPagingSlicedResult } from '../generated-definitions/ListSeasonInfoPagingSlicedResult.js'
import { ListUserSeasonInfoPagingSlicedResult } from '../generated-definitions/ListUserSeasonInfoPagingSlicedResult.js'
import { Ownership } from '../generated-definitions/Ownership.js'
import { ReasonTagsResult } from '../generated-definitions/ReasonTagsResult.js'
import { SeasonAdmin$ } from './endpoints/SeasonAdmin$.js'
import { SeasonCloneRequest } from '../generated-definitions/SeasonCloneRequest.js'
import { SeasonCreate } from '../generated-definitions/SeasonCreate.js'
import { SeasonInfo } from '../generated-definitions/SeasonInfo.js'
import { SeasonSummary } from '../generated-definitions/SeasonSummary.js'
import { SeasonUpdate } from '../generated-definitions/SeasonUpdate.js'
import { UserPurchasable } from '../generated-definitions/UserPurchasable.js'
import { UserSeasonSummary } from '../generated-definitions/UserSeasonSummary.js'
import { UserSeasonSummaryArray } from '../generated-definitions/UserSeasonSummaryArray.js'

export function SeasonAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This API is used to query seasons, seasons only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of season basic info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSeasons(queryParams?: {
    limit?: number
    offset?: number
    status?: string[]
  }): Promise<ListSeasonInfoPagingSlicedResult> {
    const $ = new SeasonAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getSeasons(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to create a season, season only allowed in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created season&lt;/li&gt;&lt;/ul&gt;
   */
  async function createSeason(data: SeasonCreate): Promise<SeasonInfo> {
    const $ = new SeasonAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createSeason(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * [SERVICE COMMUNICATION ONLY]This API is used to get current published season summary which includes previous published season summary if exists, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: season summary data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSeasonsCurrent(): Promise<SeasonSummary> {
    const $ = new SeasonAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getSeasonsCurrent()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to delete a season permanently, only draft season can be deleted. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteSeason_BySeasonId(seasonId: string): Promise<unknown> {
    const $ = new SeasonAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteSeason_BySeasonId(seasonId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get a season, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: season data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSeason_BySeasonId(seasonId: string): Promise<SeasonInfo> {
    const $ = new SeasonAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getSeason_BySeasonId(seasonId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to update a season. Only draft season can be updated.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated season&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchSeason_BySeasonId(seasonId: string, data: SeasonUpdate): Promise<SeasonInfo> {
    const $ = new SeasonAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.patchSeason_BySeasonId(seasonId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get user participated season data, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user participated season data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSeasons_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<ListUserSeasonInfoPagingSlicedResult> {
    const $ = new SeasonAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getSeasons_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get a season full content, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: season data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getFull_BySeasonId(seasonId: string): Promise<FullSeasonInfo> {
    const $ = new SeasonAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getFull_BySeasonId(seasonId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to clone a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: cloned season info&lt;/li&gt;&lt;/ul&gt;
   */
  async function createClone_BySeasonId(seasonId: string, data: SeasonCloneRequest): Promise<SeasonInfo> {
    const $ = new SeasonAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createClone_BySeasonId(seasonId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to retire a published season, if the season has not ended it will report error except with force.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: season info&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateRetire_BySeasonId(seasonId: string, queryParams?: { force?: boolean | null }): Promise<SeasonInfo> {
    const $ = new SeasonAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateRetire_BySeasonId(seasonId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to publish a draft season, only one published season allowed at same time in a namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: published season&lt;/li&gt;&lt;/ul&gt;
   */
  async function updatePublish_BySeasonId(seasonId: string): Promise<SeasonInfo> {
    const $ = new SeasonAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updatePublish_BySeasonId(seasonId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to unpublish a published season, if the season already started it will report error except with force.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: season info&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateUnpublish_BySeasonId(seasonId: string, queryParams?: { force?: boolean | null }): Promise<SeasonInfo> {
    const $ = new SeasonAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateUnpublish_BySeasonId(seasonId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get user exp acquisition history, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;default will query from current active season&lt;/li&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated grant history&lt;/li&gt;&lt;/ul&gt;
   */
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
  ): Promise<ExpGrantHistoryPagingSlicedResult> {
    const $ = new SeasonAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getSeasonsExpHistory_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt;This API is used to reset user data in current season, it will not revoke the rewarded entitlements.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteSeasonCurrentReset_ByUserId(userId: string): Promise<unknown> {
    const $ = new SeasonAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteSeasonCurrentReset_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to bulk get user current season progression, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season progression&lt;/li&gt;&lt;/ul&gt;
   */
  async function createSeasonCurrentUserBulkProgression(data: BulkUserProgressionRequest): Promise<UserSeasonSummaryArray> {
    const $ = new SeasonAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createSeasonCurrentUserBulkProgression(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get user season data, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getData_ByUserId_BySeasonId(userId: string, seasonId: string): Promise<ClaimableUserSeasonInfo> {
    const $ = new SeasonAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getData_ByUserId_BySeasonId(userId, seasonId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get user exp acquisition history&#39;s tag list.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;default will query from current active season&lt;/li&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: exp grant history tags list&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSeasonsExpHistoryTags_ByUserId(userId: string, queryParams?: { seasonId?: string | null }): Promise<ReasonTagsResult> {
    const $ = new SeasonAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getSeasonsExpHistoryTags_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get current user season progression, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season progression&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSeasonsCurrentProgression_ByUserId(userId: string): Promise<UserSeasonSummary> {
    const $ = new SeasonAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getSeasonsCurrentProgression_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to check pass or tier purchasable, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function createSeasonCurrentPurchasable_ByUserId(userId: string, data: UserPurchasable): Promise<unknown> {
    const $ = new SeasonAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createSeasonCurrentPurchasable_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * [SERVICE COMMUNICATION ONLY]This API is used to get ownership for any pass codes, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: ownership&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSeasonsCurrentPassesOwnershipAny_ByUserId(userId: string, queryParams?: { passCodes?: string[] }): Promise<Ownership> {
    const $ = new SeasonAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getSeasonsCurrentPassesOwnershipAny_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getSeasons,
    createSeason,
    getSeasonsCurrent,
    deleteSeason_BySeasonId,
    getSeason_BySeasonId,
    patchSeason_BySeasonId,
    getSeasons_ByUserId,
    getFull_BySeasonId,
    createClone_BySeasonId,
    updateRetire_BySeasonId,
    updatePublish_BySeasonId,
    updateUnpublish_BySeasonId,
    getSeasonsExpHistory_ByUserId,
    deleteSeasonCurrentReset_ByUserId,
    createSeasonCurrentUserBulkProgression,
    getData_ByUserId_BySeasonId,
    getSeasonsExpHistoryTags_ByUserId,
    getSeasonsCurrentProgression_ByUserId,
    createSeasonCurrentPurchasable_ByUserId,
    getSeasonsCurrentPassesOwnershipAny_ByUserId
  }
}
