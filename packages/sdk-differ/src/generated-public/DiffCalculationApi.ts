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
import { DiffCalculation$ } from './endpoints/DiffCalculation$.js'
import { LateDiffRequest } from '../generated-definitions/LateDiffRequest.js'
import { PingResponse } from '../generated-definitions/PingResponse.js'

export function DiffCalculationApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * &lt;p&gt;Perform diff calculation from buildA to buildB. The calculation will generate diff cache result that will be stored in the storage provider.&lt;/p&gt;&lt;p&gt;Every request is registered into the queue first, and will be processed by the available Differ.&lt;/p&gt;&lt;p&gt;The &lt;b&gt;priority&lt;/b&gt; flag means that request will be set as priority inside the queue and always served first even if there’s existing non-priority request(s) beforehand.&lt;/p&gt;&lt;br/&gt;&lt;p&gt;Scope required: &lt;code&gt;publishing&lt;/code&gt;&lt;/p&gt;
   */
  async function createDiff(data: LateDiffRequest): Promise<unknown> {
    const $ = new DiffCalculation$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createDiff(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getPing(): Promise<PingResponse> {
    const $ = new DiffCalculation$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getPing()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Perform diff calculation from buildA to buildB. The calculation will generate diff cache result that will be stored in the storage provider.&lt;/p&gt;&lt;p&gt;The Diffs calculation will be parallelized between the available Differ instances.&lt;/p&gt;&lt;p&gt;The &lt;b&gt;priority&lt;/b&gt; flag means that request will be set as priority inside the queue and always served first even if there’s existing non-priority request(s) beforehand.&lt;/p&gt;&lt;br/&gt;&lt;p&gt;Scope required: &lt;code&gt;publishing&lt;/code&gt;&lt;/p&gt;
   */
  async function createDiff_ByNS(data: LateDiffRequest): Promise<unknown> {
    const $ = new DiffCalculation$(Network.create(requestConfig), namespace, isZodEnabled)
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
