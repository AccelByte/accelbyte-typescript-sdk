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
import { StatConfiguration$ } from './endpoints/StatConfiguration$'
import { StatCreate } from './definitions/StatCreate'
import { StatInfo } from './definitions/StatInfo'

export function StatConfigurationApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Create stat.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:STAT", action=1 (CREATE)</li><li><i>Returns</i>: created stat template</li><li>default minimum value is 0</li><li>default maximum value is 1.7976931348623157e+308</li></ul>
   */
  async function createStat(data: StatCreate): Promise<StatInfo> {
    const $ = new StatConfiguration$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createStat(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createStat
  }
}
