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
import { PaginatedGetTagResponse } from '../generated-definitions/PaginatedGetTagResponse.js'
import { PublicTag$ } from './endpoints/PublicTag$.js'

export function PublicTagApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Publicly accessible
   */
  async function getTags(queryParams?: { limit?: number; offset?: number }): Promise<PaginatedGetTagResponse> {
    const $ = new PublicTag$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getTags(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getTags
  }
}
