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
import { RecentPlayer$ } from './endpoints/RecentPlayer$.js'
import { RecentPlayerQueryResponse } from '../generated-definitions/RecentPlayerQueryResponse.js'

export function RecentPlayerApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Query recent player with given user id.
   */
  async function getRecentPlayer(queryParams?: { limit?: number; userId?: string | null }): Promise<RecentPlayerQueryResponse> {
    const $ = new RecentPlayer$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getRecentPlayer(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRecentPlayer
  }
}
