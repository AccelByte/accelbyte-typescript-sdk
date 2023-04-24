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
import { BulkStatCycleRequest } from './definitions/BulkStatCycleRequest'
import { BulkStatCycleResult } from './definitions/BulkStatCycleResult'
import { StatCycleConfiguration$ } from './endpoints/StatCycleConfiguration$'
import { StatCycleInfo } from './definitions/StatCycleInfo'
import { StatCyclePagingSlicedResult } from './definitions/StatCyclePagingSlicedResult'

export function StatCycleConfigurationApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * List stat cycles by pagination.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:STAT", action=2 (READ)</li><li><i>Returns</i>: stat cycles</li></ul>
   */
  async function getStatCycles(queryParams?: {
    name?: string | null
    cycleType?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'ANNUALLY' | 'SEASONAL'
    status?: 'INIT' | 'ACTIVE' | 'STOPPED'
    offset?: number
    limit?: number
    sortBy?: string | null
  }): Promise<StatCyclePagingSlicedResult> {
    const $ = new StatCycleConfiguration$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStatCycles(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk get stat cycle.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:STAT", action=2 (READ)</li><li><i>Returns</i>: list of stat cycles</li></ul>
   */
  async function createStatCycleBulk(data: BulkStatCycleRequest): Promise<BulkStatCycleResult> {
    const $ = new StatCycleConfiguration$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createStatCycleBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get stat cycle.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:STAT", action=2 (READ)</li><li><i>Returns</i>: stat cycle info</ul>
   */
  async function getStatCycle_ByCycleId(cycleId: string): Promise<StatCycleInfo> {
    const $ = new StatCycleConfiguration$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStatCycle_ByCycleId(cycleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getStatCycles,
    createStatCycleBulk,
    getStatCycle_ByCycleId
  }
}
