/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { Reward$ } from './endpoints/Reward$'
import { RewardInfo } from './definitions/RewardInfo'
import { RewardPagingSlicedResult } from './definitions/RewardPagingSlicedResult'

export function RewardApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This API is used to get reward by reward code.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:REWARD", action=2 (READ)</li><li><i>Returns</i>: reward instance</li></ul>
   */
  async function getRewardsByCode(queryParams: { rewardCode: string | null }): Promise<RewardInfo> {
    const $ = new Reward$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRewardsByCode(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get reward by reward Id.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:REWARD", action=2 (READ)</li><li><i>Returns</i>: reward instance</li></ul>
   */
  async function getReward_ByRewardId(rewardId: string): Promise<RewardInfo> {
    const $ = new Reward$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getReward_ByRewardId(rewardId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to query rewards by criteria.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:REWARD", action=2 (READ)</li><li><i>Returns</i>: the list of rewards</li></ul>
   */
  async function getRewardsByCriteria(queryParams?: {
    eventTopic?: string | null
    offset?: number
    limit?: number
    sortBy?: string | null
  }): Promise<RewardPagingSlicedResult> {
    const $ = new Reward$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRewardsByCriteria(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRewardsByCode,
    getReward_ByRewardId,
    getRewardsByCriteria
  }
}
