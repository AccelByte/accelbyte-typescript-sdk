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
import { ListInventoryResp } from '../generated-definitions/ListInventoryResp.js'
import { PublicInventories$ } from './endpoints/PublicInventories$.js'

export function PublicInventoriesApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   *  Listing all my inventories in a namespace. The response body will be in the form of standard pagination.
   */
  async function getUsersMeInventories(queryParams?: {
    inventoryConfigurationCode?: string | null
    limit?: number
    offset?: number
    sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
  }): Promise<ListInventoryResp> {
    const $ = new PublicInventories$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getUsersMeInventories(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getUsersMeInventories
  }
}
