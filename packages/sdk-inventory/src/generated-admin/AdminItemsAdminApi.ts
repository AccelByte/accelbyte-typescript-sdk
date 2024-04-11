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
import { AdminItemsAdmin$ } from './endpoints/AdminItemsAdmin$.js'
import { AdminUpdateItemReq } from '../generated-definitions/AdminUpdateItemReq.js'
import { ConsumeItemReq } from '../generated-definitions/ConsumeItemReq.js'
import { ItemResp } from '../generated-definitions/ItemResp.js'
import { ListItemResp } from '../generated-definitions/ListItemResp.js'
import { RemoveInventoryItemReq } from '../generated-definitions/RemoveInventoryItemReq.js'
import { SaveItemReq } from '../generated-definitions/SaveItemReq.js'
import { SaveItemToInventoryReq } from '../generated-definitions/SaveItemToInventoryReq.js'
import { UpdateItemRespArray } from '../generated-definitions/UpdateItemRespArray.js'

export function AdminItemsAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   *  Saving an item. The item will be saved in user&#39;s inventory, If it doesn&#39;t exist it&#39;ll be created. If the item already exists, its qty will be increased, so no new item with same sourceItemId will be created Tags will be auto-created. ItemType will be auto-created. For Ecommerce item, this fields will be override by ecommerce configuration (slotUsed, serverCustomAttributes, customAttributes, type) Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
   */
  async function createItem_ByUserId(userId: string, data: SaveItemReq): Promise<ItemResp> {
    const $ = new AdminItemsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createItem_ByUserId(userId, data)
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
      qtyGte?: number
      sortBy?:
        | 'createdAt'
        | 'createdAt:asc'
        | 'createdAt:desc'
        | 'qty'
        | 'qty:asc'
        | 'qty:desc'
        | 'updatedAt'
        | 'updatedAt:asc'
        | 'updatedAt:desc'
      sourceItemId?: string | null
      tags?: string | null
    }
  ): Promise<ListItemResp> {
    const $ = new AdminItemsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getItems_ByInventoryId(inventoryId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [UPDATE]
   */
  async function updateItemEntitlementSync_ByUserId(userId: string): Promise<unknown> {
    const $ = new AdminItemsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
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
    const $ = new AdminItemsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteItem_ByUserId_ByInventoryId(userId, inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Saving an item to specific inventory. The item will be saved in specific user&#39;s inventory, If the item already exists, its qty will be increased, so no new item with same sourceItemId will be created Tags will be auto-created. ItemType will be auto-created. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
   */
  async function createItem_ByUserId_ByInventoryId(userId: string, inventoryId: string, data: SaveItemToInventoryReq): Promise<ItemResp> {
    const $ = new AdminItemsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
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
    const $ = new AdminItemsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateItem_ByUserId_ByInventoryId(userId, inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Consume user&#39;s own item Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [UPDATE]
   */
  async function createConsume_ByUserId_ByInventoryId(userId: string, inventoryId: string, data: ConsumeItemReq): Promise<ItemResp> {
    const $ = new AdminItemsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createConsume_ByUserId_ByInventoryId(userId, inventoryId, data)
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
    const $ = new AdminItemsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getSourceItem_ByInventoryId_BySlotId_BySourceItemId(inventoryId, slotId, sourceItemId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createItem_ByUserId,
    getItems_ByInventoryId,
    updateItemEntitlementSync_ByUserId,
    deleteItem_ByUserId_ByInventoryId,
    createItem_ByUserId_ByInventoryId,
    updateItem_ByUserId_ByInventoryId,
    createConsume_ByUserId_ByInventoryId,
    getSourceItem_ByInventoryId_BySlotId_BySourceItemId
  }
}
