/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { ClaimUserRewardsReq } from '../generated-definitions/ClaimUserRewardsReq.js'
import { ClaimUsersRewardsRequest } from '../generated-definitions/ClaimUsersRewardsRequest.js'
import { ClaimUsersRewardsResponseArray } from '../generated-definitions/ClaimUsersRewardsResponseArray.js'
import { ListUserRewardsResponse } from '../generated-definitions/ListUserRewardsResponse.js'
import { UserRewardArray } from '../generated-definitions/UserRewardArray.js'
import { PlayerRewardAdmin$ } from './endpoints/PlayerRewardAdmin$.js'

export function PlayerRewardAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:REWARD [UPDATE]&lt;/li&gt;&lt;/ul&gt;
   */
  async function createUserRewardClaim(data: ClaimUsersRewardsRequest[]): Promise<ClaimUsersRewardsResponseArray> {
    const $ = new PlayerRewardAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserRewardClaim(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:REWARD [READ]&lt;/li&gt;&lt;/ul&gt;
   */
  async function getRewards_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: 'CLAIMED' | 'UNCLAIMED' }
  ): Promise<ListUserRewardsResponse> {
    const $ = new PlayerRewardAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getRewards_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:REWARD [UPDATE]&lt;/li&gt;&lt;/ul&gt;
   */
  async function createRewardClaim_ByUserId(userId: string, data: ClaimUserRewardsReq): Promise<UserRewardArray> {
    const $ = new PlayerRewardAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createRewardClaim_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createUserRewardClaim,
    getRewards_ByUserId,
    createRewardClaim_ByUserId
  }
}
