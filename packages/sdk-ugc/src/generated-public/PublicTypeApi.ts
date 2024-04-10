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
import { PaginatedGetTypeResponse } from '../generated-definitions/PaginatedGetTypeResponse.js'
import { PublicType$ } from './endpoints/PublicType$.js'

export function PublicTypeApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Get available types paginated
   */
  async function getTypes(queryParams?: { limit?: number; offset?: number }): Promise<PaginatedGetTypeResponse> {
    const $ = new PublicType$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getTypes(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getTypes
  }
}
