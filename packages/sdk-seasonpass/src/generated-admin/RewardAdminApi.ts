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
import { RewardAdmin$ } from './endpoints/RewardAdmin$.js'
import { RewardCreate } from '../generated-definitions/RewardCreate.js'
import { RewardInfo } from '../generated-definitions/RewardInfo.js'
import { RewardInfoArray } from '../generated-definitions/RewardInfoArray.js'
import { RewardUpdate } from '../generated-definitions/RewardUpdate.js'

export function RewardAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This API is used to query rewards for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of rewards&lt;/li&gt;&lt;/ul&gt;
   */
  async function getRewards_BySeasonId(seasonId: string, queryParams?: { q?: string | null }): Promise<RewardInfoArray> {
    const $ = new RewardAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getRewards_BySeasonId(seasonId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to create a reward for a draft season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created reward&lt;/li&gt;&lt;/ul&gt;
   */
  async function createReward_BySeasonId(seasonId: string, data: RewardCreate): Promise<RewardInfo> {
    const $ = new RewardAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createReward_BySeasonId(seasonId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to delete a reward permanently, only draft season reward can be deleted. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteReward_BySeasonId_ByCode(seasonId: string, code: string): Promise<unknown> {
    const $ = new RewardAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteReward_BySeasonId_ByCode(seasonId, code)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get a reward for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getReward_BySeasonId_ByCode(seasonId: string, code: string): Promise<RewardInfo> {
    const $ = new RewardAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getReward_BySeasonId_ByCode(seasonId, code)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to update a reward. Only draft season reward can be updated.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated reward&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchReward_BySeasonId_ByCode(seasonId: string, code: string, data: RewardUpdate): Promise<RewardInfo> {
    const $ = new RewardAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.patchReward_BySeasonId_ByCode(seasonId, code, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRewards_BySeasonId,
    createReward_BySeasonId,
    deleteReward_BySeasonId_ByCode,
    getReward_BySeasonId_ByCode,
    patchReward_BySeasonId_ByCode
  }
}
