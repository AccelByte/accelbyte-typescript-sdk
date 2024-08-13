/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { CreateInventoryReq } from '../generated-definitions/CreateInventoryReq.js'
import { DeleteInventoryReq } from '../generated-definitions/DeleteInventoryReq.js'
import { InventoryResp } from '../generated-definitions/InventoryResp.js'
import { InventoryRespArray } from '../generated-definitions/InventoryRespArray.js'
import { ListInventoryResp } from '../generated-definitions/ListInventoryResp.js'
import { PurchaseValidationReq } from '../generated-definitions/PurchaseValidationReq.js'
import { UpdateInventoryReq } from '../generated-definitions/UpdateInventoryReq.js'
import { AdminInventoriesAdmin$ } from './endpoints/AdminInventoriesAdmin$.js'

export function AdminInventoriesAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   *  Listing all inventories in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY [READ]
   */
  async function getInventories(queryParams?: {
    inventoryConfigurationCode?: string | null
    limit?: number
    offset?: number
    sortBy?:
      | 'createdAt'
      | 'createdAt:asc'
      | 'createdAt:desc'
      | 'inventoryConfigurationCode'
      | 'inventoryConfigurationCode:asc'
      | 'inventoryConfigurationCode:desc'
      | 'updatedAt'
      | 'updatedAt:asc'
      | 'updatedAt:desc'
    userId?: string | null
  }): Promise<ListInventoryResp> {
    const $ = new AdminInventoriesAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getInventories(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Creating an inventory. The inventory configuration must exists otherwise it will fail. The max slots and max upgrade slots of an inventory will be initialized according to the inventory configuration it used, but it can be changed later when using AdminUpdateInventory endpoint. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY [CREATE]
   */
  async function createInventory(data: CreateInventoryReq): Promise<InventoryResp> {
    const $ = new AdminInventoriesAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createInventory(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Deleting an inventory. If an inventory still has items, it cannot be deleted. ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY [DELETE]
   */
  async function deleteInventory_ByInventoryId(inventoryId: string, data: DeleteInventoryReq): Promise<unknown> {
    const $ = new AdminInventoriesAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteInventory_ByInventoryId(inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Getting an inventory info. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY [READ]
   */
  async function getInventory_ByInventoryId(inventoryId: string): Promise<InventoryResp> {
    const $ = new AdminInventoriesAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getInventory_ByInventoryId(inventoryId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Updating an inventory. Positive value will increase MaxSlots from existing value Negative value will decrease MaxSlots from existing value Limited slots can not be changed to unlimited, vice versa Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY [UPDATE]
   */
  async function updateInventory_ByInventoryId(inventoryId: string, data: UpdateInventoryReq): Promise<InventoryResp> {
    const $ = new AdminInventoriesAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateInventory_ByInventoryId(inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Validate purchase ecommerce item. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY [UPDATE]
   */
  async function createPurchaseable_ByUserId(userId: string, data: PurchaseValidationReq): Promise<unknown> {
    const $ = new AdminInventoriesAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createPurchaseable_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Updating user inventories. Positive value will increase MaxSlots from existing value Negative value will decrease MaxSlots from existing value Limited slots can not be changed to unlimited, vice versa Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY [UPDATE]
   */
  async function updateInventory_ByUserId_ByInventoryConfigurationCode(
    userId: string,
    inventoryConfigurationCode: string,
    data: UpdateInventoryReq
  ): Promise<InventoryRespArray> {
    const $ = new AdminInventoriesAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateInventory_ByUserId_ByInventoryConfigurationCode(userId, inventoryConfigurationCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getInventories,
    createInventory,
    deleteInventory_ByInventoryId,
    getInventory_ByInventoryId,
    updateInventory_ByInventoryId,
    createPurchaseable_ByUserId,
    updateInventory_ByUserId_ByInventoryConfigurationCode
  }
}
