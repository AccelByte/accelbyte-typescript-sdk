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
import { TtlConfigAdmin$ } from './endpoints/TtlConfigAdmin$.js'

export function TtlConfigAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * ## Description This endpoints will delete the ttl config of the game record
   */
  async function deleteTtl_ByKey(key: string): Promise<unknown> {
    const $ = new TtlConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteTtl_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoints will delete the ttl config of the game binary record
   */
  async function deleteTtl_ByKey_ByNS(key: string): Promise<unknown> {
    const $ = new TtlConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteTtl_ByKey_ByNS(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteTtl_ByKey,
    deleteTtl_ByKey_ByNS
  }
}
