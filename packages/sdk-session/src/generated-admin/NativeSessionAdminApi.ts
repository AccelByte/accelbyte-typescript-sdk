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
import { NativeSessionAdmin$ } from './endpoints/NativeSessionAdmin$.js'
import { NativeSessionPagingResponse } from '../generated-definitions/NativeSessionPagingResponse.js'

export function NativeSessionAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * List of native sessions.
   */
  async function getNativeSessions(queryParams?: {
    limit?: number
    offset?: number
    order?: string | null
  }): Promise<NativeSessionPagingResponse> {
    const $ = new NativeSessionAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getNativeSessions(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getNativeSessions
  }
}
