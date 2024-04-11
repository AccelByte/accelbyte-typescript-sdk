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
import { Tier } from '../generated-definitions/Tier.js'
import { TierAdmin$ } from './endpoints/TierAdmin$.js'
import { TierArray } from '../generated-definitions/TierArray.js'
import { TierCreate } from '../generated-definitions/TierCreate.js'
import { TierInput } from '../generated-definitions/TierInput.js'
import { TierPagingSlicedResult } from '../generated-definitions/TierPagingSlicedResult.js'
import { TierReorder } from '../generated-definitions/TierReorder.js'
import { UserExpGrant } from '../generated-definitions/UserExpGrant.js'
import { UserSeasonSummary } from '../generated-definitions/UserSeasonSummary.js'
import { UserTierGrant } from '../generated-definitions/UserTierGrant.js'

export function TierAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This API is used to query paginated tiers for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of passes&lt;/li&gt;&lt;/ul&gt;
   */
  async function getTiers_BySeasonId(seasonId: string, queryParams?: { limit?: number; offset?: number }): Promise<TierPagingSlicedResult> {
    const $ = new TierAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getTiers_BySeasonId(seasonId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to create tier for a draft season, can create multiple tiers at same time.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function createTier_BySeasonId(seasonId: string, data: TierCreate): Promise<TierArray> {
    const $ = new TierAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createTier_BySeasonId(seasonId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to delete a tier permanently, only draft season pass can be deleted. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteTier_BySeasonId_ById(seasonId: string, id: string): Promise<unknown> {
    const $ = new TierAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteTier_BySeasonId_ById(seasonId, id)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to update a tier. Only draft season pass can be updated.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateTier_BySeasonId_ById(seasonId: string, id: string, data: TierInput): Promise<Tier> {
    const $ = new TierAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateTier_BySeasonId_ById(seasonId, id, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to grant exp to user, it will auto enroll if there&#39;s no user season but active published season exist, season only located in non-publisher namespace, otherwise ignore.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  async function createSeasonCurrentExp_ByUserId(userId: string, data: UserExpGrant): Promise<UserSeasonSummary> {
    const $ = new TierAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createSeasonCurrentExp_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to grant tier to user, it will auto enroll if there&#39;s no user season but active published season exist, season only located in non-publisher namespace, otherwise ignore.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  async function createSeasonCurrentTier_ByUserId(userId: string, data: UserTierGrant): Promise<UserSeasonSummary> {
    const $ = new TierAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createSeasonCurrentTier_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to reorder a tier. Only draft season pass can be updated.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateReorder_BySeasonId_ById(seasonId: string, id: string, data: TierReorder): Promise<Tier> {
    const $ = new TierAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateReorder_BySeasonId_ById(seasonId, id, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getTiers_BySeasonId,
    createTier_BySeasonId,
    deleteTier_BySeasonId_ById,
    updateTier_BySeasonId_ById,
    createSeasonCurrentExp_ByUserId,
    createSeasonCurrentTier_ByUserId,
    updateReorder_BySeasonId_ById
  }
}
