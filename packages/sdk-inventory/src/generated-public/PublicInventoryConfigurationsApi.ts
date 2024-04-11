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
import { ListInventoryConfigurationsResp } from '../generated-definitions/ListInventoryConfigurationsResp.js'
import { PublicInventoryConfigurations$ } from './endpoints/PublicInventoryConfigurations$.js'

export function PublicInventoryConfigurationsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   *  Listing all inventory configurations in a namespace. The response body will be in the form of standard pagination.
   */
  async function getInventoryConfigurations(queryParams?: {
    code?: string | null
    limit?: number
    offset?: number
    sortBy?:
      | 'code'
      | 'code:asc'
      | 'code:desc'
      | 'createdAt'
      | 'createdAt:asc'
      | 'createdAt:desc'
      | 'updatedAt'
      | 'updatedAt:asc'
      | 'updatedAt:desc'
  }): Promise<ListInventoryConfigurationsResp> {
    const $ = new PublicInventoryConfigurations$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getInventoryConfigurations(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getInventoryConfigurations
  }
}
