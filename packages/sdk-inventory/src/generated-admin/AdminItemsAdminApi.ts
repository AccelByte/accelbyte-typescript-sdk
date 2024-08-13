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
import { AdminUpdateItemReq } from '../generated-definitions/AdminUpdateItemReq.js'
import { BulkSaveItemRespArray } from '../generated-definitions/BulkSaveItemRespArray.js'
import { ConsumeItemReq } from '../generated-definitions/ConsumeItemReq.js'
import { ItemResp } from '../generated-definitions/ItemResp.js'
import { ListItemResp } from '../generated-definitions/ListItemResp.js'
import { RemoveInventoryItemReq } from '../generated-definitions/RemoveInventoryItemReq.js'
import { SaveItemReq } from '../generated-definitions/SaveItemReq.js'
import { SaveItemToInventoryReq } from '../generated-definitions/SaveItemToInventoryReq.js'
import { UpdateItemRespArray } from '../generated-definitions/UpdateItemRespArray.js'
import { AdminItemsAdmin$ } from './endpoints/AdminItemsAdmin$.js'

export function AdminItemsAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   *  Saving an item. The item will be saved in user&#39;s inventory, If it doesn&#39;t exist it&#39;ll be created. If the item already exists, its qty will be increased, so no new item with same sourceItemId will be created Tags will be auto-created. ItemType will be auto-created. For Ecommerce item, this fields will be override by ecommerce configuration (slotUsed, serverCustomAttributes, customAttributes, type) For Ecommerce items, the quantity saved is dynamically adjusted based on an item&#39;s useCount configured in Store. When saving items, the quantity specified for each item will be multiplied by the useCount. i.e. If the store item is configured with a useCount of 5 and the quantity of a particular item is set to 2 during saving, it will be stored as 10. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
   */
  async function createItem_ByUserId(userId: string, data: SaveItemReq): Promise<ItemResp> {
    const $ = new AdminItemsAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createItem_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  This endpoint will be used by client to save the purchased item to user&#39;s inventory, since want to integrate the inventory service to e-commerce, source field will be mandatory to determine the item, supported field “OTHER” and “ECOMMERCE” Notes : source ECOMMERCE, the quantity of ecommerce items saved is dynamically adjusted based on an item&#39;s useCount configured in Store. When saving items, the quantity specified for each item will be multiplied by the useCount i.e. If the store item is configured with a useCount of 5 and the quantity of a particular item is set to 2 during saving, it will be stored as 10 Target inventory will be based on the specified inventoryConfigurationCode. If the inventory exist then will put to the existing one, if not exist at all then will create at least one inventory, if full then will return failed at the response. We implement the logic as proportional to store the item to inventory, will loop from createdAt until find the available slots at inventory. Type: - ingame - app - coin etc.. Max length of the payload is 10 items Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
   */
  async function createItemBulk_ByUserId(userId: string, data: SaveItemReq[]): Promise<BulkSaveItemRespArray> {
    const $ = new AdminItemsAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createItemBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Listing all items in an inventory. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [READ]
   */
  async function getItems_ByInventoryId(
    inventoryId: string,
    queryParams?: {
      limit?: number
      offset?: number
      sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
      sourceItemId?: string | null
      tags?: string | null
    }
  ): Promise<ListItemResp> {
    const $ = new AdminItemsAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getItems_ByInventoryId(inventoryId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Sync user&#39;s entitlement from e-commerce service to inventory for non exist item at user inventory. will skip the item if already exist at user inventory. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [UPDATE]
   */
  async function updateItemEntitlementSync_ByUserId(userId: string): Promise<unknown> {
    const $ = new AdminItemsAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateItemEntitlementSync_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Bulk remove user&#39;s own items&#39;. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [DELETE]
   */
  async function deleteItem_ByUserId_ByInventoryId(
    userId: string,
    inventoryId: string,
    data: RemoveInventoryItemReq[]
  ): Promise<UpdateItemRespArray> {
    const $ = new AdminItemsAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteItem_ByUserId_ByInventoryId(userId, inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Saving an item to specific inventory. The item will be saved in specific user&#39;s inventory, If the item already exists, its qty will be increased, so no new item with same sourceItemId will be created Tags will be auto-created. ItemType will be auto-created. For Ecommerce item, this fields will be override by ecommerce configuration (slotUsed, serverCustomAttributes, customAttributes, type) For Ecommerce items, the quantity saved is dynamically adjusted based on an item&#39;s useCount configured in Store. When saving items, the quantity specified for each item will be multiplied by the useCount. i.e. If the store item is configured with a useCount of 5 and the quantity of a particular item is set to 2 during saving, it will be stored as 10. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
   */
  async function createItem_ByUserId_ByInventoryId(userId: string, inventoryId: string, data: SaveItemToInventoryReq): Promise<ItemResp> {
    const $ = new AdminItemsAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createItem_ByUserId_ByInventoryId(userId, inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Bulk Updating user&#39;s own items. Tags will be auto-created. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [UPDATE]
   */
  async function updateItem_ByUserId_ByInventoryId(
    userId: string,
    inventoryId: string,
    data: AdminUpdateItemReq[]
  ): Promise<UpdateItemRespArray> {
    const $ = new AdminItemsAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateItem_ByUserId_ByInventoryId(userId, inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Consume user&#39;s own item Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [UPDATE]
   */
  async function createConsume_ByUserId_ByInventoryId(userId: string, inventoryId: string, data: ConsumeItemReq): Promise<ItemResp> {
    const $ = new AdminItemsAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createConsume_ByUserId_ByInventoryId(userId, inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  This endpoint will be used by client to save the purchased item to user&#39;s inventory, since want to integrate the inventory service to e-commerce, source field will be mandatory to determine the item, supported field “OTHER” and “ECOMMERCE” Notes : source ECOMMERCE, the quantity of ecommerce items saved is dynamically adjusted based on an item&#39;s useCount configured in Store. When saving items, the quantity specified for each item will be multiplied by the useCount i.e. If the store item is configured with a useCount of 5 and the quantity of a particular item is set to 2 during saving, it will be stored as 10 Type: - ingame - app - coin etc.. Max length of the payload is 10 items Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
   */
  async function createItemBulk_ByUserId_ByInventoryId(
    userId: string,
    inventoryId: string,
    data: SaveItemToInventoryReq[]
  ): Promise<BulkSaveItemRespArray> {
    const $ = new AdminItemsAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createItemBulk_ByUserId_ByInventoryId(userId, inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Getting an item info. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [READ]
   */
  async function getSourceItem_ByInventoryId_BySlotId_BySourceItemId(
    inventoryId: string,
    slotId: string,
    sourceItemId: string
  ): Promise<ItemResp> {
    const $ = new AdminItemsAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getSourceItem_ByInventoryId_BySlotId_BySourceItemId(inventoryId, slotId, sourceItemId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createItem_ByUserId,
    createItemBulk_ByUserId,
    getItems_ByInventoryId,
    updateItemEntitlementSync_ByUserId,
    deleteItem_ByUserId_ByInventoryId,
    createItem_ByUserId_ByInventoryId,
    updateItem_ByUserId_ByInventoryId,
    createConsume_ByUserId_ByInventoryId,
    createItemBulk_ByUserId_ByInventoryId,
    getSourceItem_ByInventoryId_BySlotId_BySourceItemId
  }
}
