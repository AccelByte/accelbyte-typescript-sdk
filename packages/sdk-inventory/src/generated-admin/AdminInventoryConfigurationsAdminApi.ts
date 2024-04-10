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
import { AdminInventoryConfigurationsAdmin$ } from './endpoints/AdminInventoryConfigurationsAdmin$.js'
import { CreateInventoryConfigurationReq } from '../generated-definitions/CreateInventoryConfigurationReq.js'
import { InventoryConfigurationReq } from '../generated-definitions/InventoryConfigurationReq.js'
import { InventoryConfigurationResp } from '../generated-definitions/InventoryConfigurationResp.js'
import { ListInventoryConfigurationsResp } from '../generated-definitions/ListInventoryConfigurationsResp.js'

export function AdminInventoryConfigurationsAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   *  Listing all inventory configurations in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [READ]
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
    const $ = new AdminInventoryConfigurationsAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getInventoryConfigurations(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Creating inventory configuration. There cannot be one inventory configuration duplicate code per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [CREATE]
   */
  async function createInventoryConfiguration(data: CreateInventoryConfigurationReq): Promise<InventoryConfigurationResp> {
    const $ = new AdminInventoryConfigurationsAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createInventoryConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Deleting an inventory configuration. If an inventory already reference this type (i.e. STATUS is &#34;TIED&#34;), then the type cannot be deleted anymore. ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [DELETE]
   */
  async function deleteInventoryConfiguration_ByInventoryConfigurationId(inventoryConfigurationId: string): Promise<unknown> {
    const $ = new AdminInventoryConfigurationsAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteInventoryConfiguration_ByInventoryConfigurationId(inventoryConfigurationId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Getting an inventory configuration info. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [READ]
   */
  async function getInventoryConfiguration_ByInventoryConfigurationId(
    inventoryConfigurationId: string
  ): Promise<InventoryConfigurationResp> {
    const $ = new AdminInventoryConfigurationsAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getInventoryConfiguration_ByInventoryConfigurationId(inventoryConfigurationId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Updating inventory configuration. There cannot be duplicate code per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [UPDATE]
   */
  async function updateInventoryConfiguration_ByInventoryConfigurationId(
    inventoryConfigurationId: string,
    data: InventoryConfigurationReq
  ): Promise<InventoryConfigurationResp> {
    const $ = new AdminInventoryConfigurationsAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateInventoryConfiguration_ByInventoryConfigurationId(inventoryConfigurationId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getInventoryConfigurations,
    createInventoryConfiguration,
    deleteInventoryConfiguration_ByInventoryConfigurationId,
    getInventoryConfiguration_ByInventoryConfigurationId,
    updateInventoryConfiguration_ByInventoryConfigurationId
  }
}
