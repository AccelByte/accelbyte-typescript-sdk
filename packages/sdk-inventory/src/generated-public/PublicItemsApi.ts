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
import { ConsumeItemReq } from '../generated-definitions/ConsumeItemReq.js'
import { ItemResp } from '../generated-definitions/ItemResp.js'
import { ListItemResp } from '../generated-definitions/ListItemResp.js'
import { MoveItemsReq } from '../generated-definitions/MoveItemsReq.js'
import { MoveItemsResp } from '../generated-definitions/MoveItemsResp.js'
import { PublicItems$ } from './endpoints/PublicItems$.js'
import { RemoveInventoryItemReq } from '../generated-definitions/RemoveInventoryItemReq.js'
import { UpdateItemReq } from '../generated-definitions/UpdateItemReq.js'
import { UpdateItemRespArray } from '../generated-definitions/UpdateItemRespArray.js'

export function PublicItemsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   *  Bulk remove user&#39;s own items.
   */
  async function deleteItemMeUser_ByInventoryId(inventoryId: string, data: RemoveInventoryItemReq[]): Promise<UpdateItemRespArray> {
    const $ = new PublicItems$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteItemMeUser_ByInventoryId(inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Listing all user&#39;s owned items in an inventory. The response body will be in the form of standard pagination.
   */
  async function getItemsMeUsers_ByInventoryId(
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
    const $ = new PublicItems$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getItemsMeUsers_ByInventoryId(inventoryId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Bulk Updating user&#39;s own items.
   */
  async function updateItemMeUser_ByInventoryId(inventoryId: string, data: UpdateItemReq[]): Promise<UpdateItemRespArray> {
    const $ = new PublicItems$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateItemMeUser_ByInventoryId(inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Consume user&#39;s own item.
   */
  async function createConsumeUser_ByInventoryId(inventoryId: string, data: ConsumeItemReq): Promise<ItemResp> {
    const $ = new PublicItems$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createConsumeUser_ByInventoryId(inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Move items between inventories that is owned by the same user.
   */
  async function createItemMovementUser_ByInventoryId(inventoryId: string, data: MoveItemsReq): Promise<MoveItemsResp> {
    const $ = new PublicItems$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createItemMovementUser_ByInventoryId(inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Getting an user&#39;s owned item info.
   */
  async function getSourceItemMeUser_ByInventoryId_BySlotId_BySourceItemId(
    inventoryId: string,
    slotId: string,
    sourceItemId: string
  ): Promise<ItemResp> {
    const $ = new PublicItems$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getSourceItemMeUser_ByInventoryId_BySlotId_BySourceItemId(inventoryId, slotId, sourceItemId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteItemMeUser_ByInventoryId,
    getItemsMeUsers_ByInventoryId,
    updateItemMeUser_ByInventoryId,
    createConsumeUser_ByInventoryId,
    createItemMovementUser_ByInventoryId,
    getSourceItemMeUser_ByInventoryId_BySlotId_BySourceItemId
  }
}
