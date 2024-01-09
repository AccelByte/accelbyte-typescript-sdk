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
import { ClaimableRewards } from './definitions/ClaimableRewards.js'
import { Reward$ } from './endpoints/Reward$.js'
import { UserRewardClaim } from './definitions/UserRewardClaim.js'

export function RewardApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This API is used to claim reward, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  async function createSeasonCurrentReward_ByUserId(userId: string, data: UserRewardClaim): Promise<ClaimableRewards> {
    const $ = new Reward$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createSeasonCurrentReward_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to bulk claim all remained rewards, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  async function createSeasonCurrentRewardBulk_ByUserId(userId: string): Promise<ClaimableRewards> {
    const $ = new Reward$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createSeasonCurrentRewardBulk_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createSeasonCurrentReward_ByUserId,
    createSeasonCurrentRewardBulk_ByUserId
  }
}
