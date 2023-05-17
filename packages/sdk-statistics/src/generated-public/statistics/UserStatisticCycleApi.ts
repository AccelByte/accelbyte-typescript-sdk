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
import { UserStatCycleItemPagingSlicedResult } from './definitions/UserStatCycleItemPagingSlicedResult.js'
import { UserStatisticCycle$ } from './endpoints/UserStatisticCycle$.js'

export function UserStatisticCycleApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * List user's statCycleItems by statCycle.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=2 (READ)</li><li><i>Returns</i>: stat cycle items</li></ul>
   */
  async function getStatCycleitemsMeUsers_ByCycleId(
    cycleId: string,
    queryParams?: { statCodes?: string | null; offset?: number; limit?: number; sortBy?: string | null }
  ): Promise<UserStatCycleItemPagingSlicedResult> {
    const $ = new UserStatisticCycle$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStatCycleitemsMeUsers_ByCycleId(cycleId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * List user's statCycleItems by statCycle.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=2 (READ)</li><li><i>Returns</i>: stat cycle items</li></ul>
   */
  async function getStatCycleitems_ByUserId_ByCycleId(
    userId: string,
    cycleId: string,
    queryParams?: { statCodes?: string | null; offset?: number; limit?: number; sortBy?: string | null }
  ): Promise<UserStatCycleItemPagingSlicedResult> {
    const $ = new UserStatisticCycle$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStatCycleitems_ByUserId_ByCycleId(userId, cycleId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getStatCycleitemsMeUsers_ByCycleId,
    getStatCycleitems_ByUserId_ByCycleId
  }
}
