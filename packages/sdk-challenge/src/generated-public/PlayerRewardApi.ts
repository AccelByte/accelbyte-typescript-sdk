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
import { ClaimUserRewardsReq } from '../generated-definitions/ClaimUserRewardsReq.js'
import { ListUserRewardsResponse } from '../generated-definitions/ListUserRewardsResponse.js'
import { PlayerReward$ } from './endpoints/PlayerReward$.js'
import { UserRewardArray } from '../generated-definitions/UserRewardArray.js'

export function PlayerRewardApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE:REWARD [READ]&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUsersMeRewards(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: string | null
    status?: 'CLAIMED' | 'UNCLAIMED'
  }): Promise<ListUserRewardsResponse> {
    const $ = new PlayerReward$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getUsersMeRewards(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE:REWARD [UPDATE]&lt;/li&gt;&lt;/ul&gt;
   */
  async function createUserMeRewardClaim(data: ClaimUserRewardsReq): Promise<UserRewardArray> {
    const $ = new PlayerReward$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createUserMeRewardClaim(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getUsersMeRewards,
    createUserMeRewardClaim
  }
}
