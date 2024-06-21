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
import { RewardInfo } from '../generated-definitions/RewardInfo.js'
import { RewardPagingSlicedResult } from '../generated-definitions/RewardPagingSlicedResult.js'
import { Reward$ } from './endpoints/Reward$.js'

export function RewardApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * This API is used to get reward by reward code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward instance&lt;/li&gt;&lt;/ul&gt;
   */
  async function getRewardsByCode(queryParams: { rewardCode: string | null }): Promise<RewardInfo> {
    const $ = new Reward$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getRewardsByCode(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get reward by reward Id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward instance&lt;/li&gt;&lt;/ul&gt;
   */
  async function getReward_ByRewardId(rewardId: string): Promise<RewardInfo> {
    const $ = new Reward$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getReward_ByRewardId(rewardId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to query rewards by criteria.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of rewards&lt;/li&gt;&lt;/ul&gt;
   */
  async function getRewardsByCriteria(queryParams?: {
    eventTopic?: string | null
    limit?: number
    offset?: number
    sortBy?: string[]
  }): Promise<RewardPagingSlicedResult> {
    const $ = new Reward$(Network.create(requestConfig), namespace, useSchemaValidation)
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
