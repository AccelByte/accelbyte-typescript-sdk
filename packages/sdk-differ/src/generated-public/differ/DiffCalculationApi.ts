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
import { DiffCalculation$ } from './endpoints/DiffCalculation$'
import { LateDiffRequest } from './definitions/LateDiffRequest'
import { PingResponse } from './definitions/PingResponse'

export function DiffCalculationApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * <p>Perform diff calculation from buildA to buildB. The calculation will generate diff cache result that will be stored in the storage provider.</p><p>Every request is registered into the queue first, and will be processed by the available Differ.</p><p>The <b>priority</b> flag means that request will be set as priority inside the queue and always served first even if there’s existing non-priority request(s) beforehand.</p><br/><p>Required permission <code>ADMIN:NAMESPACE:{namespace}:DIFFCACHE [CREATE]</code> and scope <code>publishing</code></p>
   */
  async function createDiff(data: LateDiffRequest): Promise<unknown> {
    const $ = new DiffCalculation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createDiff(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getPing(): Promise<PingResponse> {
    const $ = new DiffCalculation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPing()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Perform diff calculation from buildA to buildB. The calculation will generate diff cache result that will be stored in the storage provider.</p><p>The Diffs calculation will be parallelized between the available Differ instances.</p><p>The <b>priority</b> flag means that request will be set as priority inside the queue and always served first even if there’s existing non-priority request(s) beforehand.</p><br/><p>Required permission <code>ADMIN:NAMESPACE:{namespace}:DIFFCACHE [CREATE]</code> and scope <code>publishing</code></p>
   */
  async function createDiff_ByNS(data: LateDiffRequest): Promise<unknown> {
    const $ = new DiffCalculation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createDiff_ByNS(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createDiff,
    getPing,
    createDiff_ByNS
  }
}
