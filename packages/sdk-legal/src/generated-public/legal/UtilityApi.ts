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
import { LegalReadinessStatusResponse } from './definitions/LegalReadinessStatusResponse'
import { Utility$ } from './endpoints/Utility$'

export function UtilityApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  async function getReadiness(): Promise<LegalReadinessStatusResponse> {
    const $ = new Utility$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getReadiness()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getReadiness
  }
}
