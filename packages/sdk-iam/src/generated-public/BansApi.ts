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
import { BanReasons } from '../generated-definitions/BanReasons.js'
import { Bans } from '../generated-definitions/Bans.js'
import { Bans$ } from './endpoints/Bans$.js'

export function BansApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/bans [GET]_**
   */
  async function getBans(): Promise<Bans> {
    const $ = new Bans$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getBans()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/bans/reasons [GET]_**
   */
  async function getBansReasons(): Promise<BanReasons> {
    const $ = new Bans$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getBansReasons()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getBans,
    getBansReasons
  }
}
