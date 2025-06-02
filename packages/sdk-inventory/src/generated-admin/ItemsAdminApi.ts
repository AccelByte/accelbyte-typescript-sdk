/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AdminUpdateItemReq } from '../generated-definitions/AdminUpdateItemReq.js'
import { BulkSaveItemRespArray } from '../generated-definitions/BulkSaveItemRespArray.js'
import { ConsumeItemReq } from '../generated-definitions/ConsumeItemReq.js'
import { ItemResp } from '../generated-definitions/ItemResp.js'
import { ListItemResp } from '../generated-definitions/ListItemResp.js'
import { RemoveInventoryItemReq } from '../generated-definitions/RemoveInventoryItemReq.js'
import { SaveItemReq } from '../generated-definitions/SaveItemReq.js'
import { SaveItemToInventoryReq } from '../generated-definitions/SaveItemToInventoryReq.js'
import { UpdateItemRespArray } from '../generated-definitions/UpdateItemRespArray.js'
import { ItemsAdmin$ } from './endpoints/ItemsAdmin$.js'

export function ItemsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function createItem_ByUserId(userId: string, data: SaveItemReq): Promise<AxiosResponse<ItemResp>> {
    const $ = new ItemsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createItem_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createItemBulk_ByUserId(userId: string, data: SaveItemReq[]): Promise<AxiosResponse<BulkSaveItemRespArray>> {
    const $ = new ItemsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createItemBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getItems_ByInventoryId(
    inventoryId: string,
    queryParams?: {
      limit?: number
      offset?: number
      sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
      sourceItemId?: string | null
      tags?: string | null
    }
  ): Promise<AxiosResponse<ListItemResp>> {
    const $ = new ItemsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getItems_ByInventoryId(inventoryId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateItemEntitlementSync_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new ItemsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateItemEntitlementSync_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteItem_ByUserId_ByInventoryId(
    userId: string,
    inventoryId: string,
    data: RemoveInventoryItemReq[]
  ): Promise<AxiosResponse<UpdateItemRespArray>> {
    const $ = new ItemsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteItem_ByUserId_ByInventoryId(userId, inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createItem_ByUserId_ByInventoryId(
    userId: string,
    inventoryId: string,
    data: SaveItemToInventoryReq
  ): Promise<AxiosResponse<ItemResp>> {
    const $ = new ItemsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createItem_ByUserId_ByInventoryId(userId, inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateItem_ByUserId_ByInventoryId(
    userId: string,
    inventoryId: string,
    data: AdminUpdateItemReq[]
  ): Promise<AxiosResponse<UpdateItemRespArray>> {
    const $ = new ItemsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateItem_ByUserId_ByInventoryId(userId, inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateConsume_ByUserId_ByInventoryId(
    userId: string,
    inventoryId: string,
    data: ConsumeItemReq,
    queryParams?: { dateRangeValidation?: string | null }
  ): Promise<AxiosResponse<ItemResp>> {
    const $ = new ItemsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateConsume_ByUserId_ByInventoryId(userId, inventoryId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createItemBulk_ByUserId_ByInventoryId(
    userId: string,
    inventoryId: string,
    data: SaveItemToInventoryReq[]
  ): Promise<AxiosResponse<BulkSaveItemRespArray>> {
    const $ = new ItemsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createItemBulk_ByUserId_ByInventoryId(userId, inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSourceItem_ByInventoryId_BySlotId_BySourceItemId(
    inventoryId: string,
    slotId: string,
    sourceItemId: string
  ): Promise<AxiosResponse<ItemResp>> {
    const $ = new ItemsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSourceItem_ByInventoryId_BySlotId_BySourceItemId(inventoryId, slotId, sourceItemId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * **This endpoint is used to save items to the player’s inventory based on the inventoryConfigurationCode with the following conditions:** - If the player doesn&#39;t have the inventory for the specified inventoryConfigurationCode, a new inventory will be created. - If the user already has one, it will be added to the existing inventory. - If the same item exists within the inventory, the quantity (qty) will be increased. - If the inventory is full, the item cannot be added and the request will return the “Failed” response. - If a player has more than one inventory and the initial inventory is full, the service will check the available slot in the other inventory following the order of their creation date and time (createdAt). - For Ecommerce items: &gt;- Attributes such as slotUsed, serverCustomAttributes, customAttributes, and type will be overridden by the attributes configured in the AccelByte Gaming Services (AGS) Store. &gt;- Storing E-commerce items in a particular slot will follow its entitlement and item configuration, such as durable, consumable, stackable and non-stackable. &gt;- The quantity is dynamically set based on an item’s useCount configured in Store. When saving an item, the specified quantity will be multiplied by configured useCount for that particular item. For example, if an Item is configured with a useCount of 5 in the AGS Store and it is saved with a qty of 2, the item’s quantity will be stored as 10 in the player’s inventory. You must have this permission to access this endpoint: **Permission:ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]**
     */
    createItem_ByUserId,
    /**
     * **This endpoint is used used for bulk saving purchased items to the player’s inventory based on the inventoryConfigurationCode with the following conditions:** - If the player doesn&#39;t have the inventory for the specified inventoryConfigurationCode, a new inventory will be created for the player. - If the player already has one, it will be added to the existing inventory. &gt;- If the same item exists within the inventory, the quantity (qty) will be increased. &gt;- If the inventory is full, the item cannot be added and the request will return the “Failed” response. &gt;- If a player has more than one inventory and the initial inventory is full, the service will check the available slot in the other inventory following the order of their creation date and time (createdAt). - For E-commerce items: &gt;- Attributes such as slotUsed, serverCustomAttributes, customAttributes, and type will be overridden by the attributes configured in the AccelByte Gaming Services (AGS) Store. &gt;- Storing E-commerce items in a particular slot will follow its entitlement and item configuration, such as durable, consumable, stackable and non-stackable. &gt;- The quantity is dynamically set based on an item’s useCount configured in Store. When saving an item, the specified quantity will be multiplied by configured useCount for that particular item. For example, if an Item is configured with a useCount of 5 in the AGS Store and it is saved with a qty of 2, the item’s quantity will be stored as 10 in the player’s inventory. **When configuring your request, note the following:** - The source field is mandatory for determining the source of the item. The supported values are OTHER (for items coming from other sources) and E-commerce for items coming from the E-commerce integration. - For other-sourced items, the type can be manually defined when saving the item. - A maximum of 10 items can be saved in a single bulk call. You must have this permission to access this endpoint: **Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]**
     */
    createItemBulk_ByUserId,
    /**
     *  Listing all items in an inventory. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [READ]
     */
    getItems_ByInventoryId,
    /**
     *  Sync user&#39;s entitlement from e-commerce service to inventory for non exist item at user inventory. will skip the item if already exist at user inventory. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [UPDATE]
     */
    updateItemEntitlementSync_ByUserId,
    /**
     *  Bulk remove user&#39;s own items&#39;. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [DELETE]
     */
    deleteItem_ByUserId_ByInventoryId,
    /**
     * **This endpoint is used to save purchased items to a specific inventory of the player, with the following conditions for E-commerce items:** - Attributes such as slotUsed, serverCustomAttributes, customAttributes, and type will be overridden by the attributes configured in the AccelByte Gaming Services (AGS) Store. - Storing E-commerce items in a particular slot will follow its entitlement and item configuration, such as durable, consumable, stackable and non-stackable. - The quantity is dynamically set based on an item’s useCount configured in Store. When saving an item, the specified quantity will be multiplied by configured useCount for that particular item. For example, if an Item is configured with a useCount of 5 in the AGS Store and it is saved with a qty of 2, the item’s quantity will be stored as 10 in the player’s inventory. **When configuring your request, note the following:** - The source field is mandatory for determining the source of the item. The supported values are OTHER (for items coming from other sources) and E-commerce for items coming from the E-commerce integration. - For other-sourced items, the type can be manually defined when saving the item. You must have this permission to access this endpoint: **Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]**
     */
    createItem_ByUserId_ByInventoryId,
    /**
     *  Bulk Updating user&#39;s own items. Tags will be auto-created. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [UPDATE]
     */
    updateItem_ByUserId_ByInventoryId,
    /**
     *  Consume user&#39;s own item Client should pass item ID in options if item type is OPTIONBOX Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [UPDATE]
     */
    updateConsume_ByUserId_ByInventoryId,
    /**
     * **This endpoint is used for bulk saving purchased items to a specific inventory of the player, with the following conditions for E-commerce items:** - Attributes such as slotUsed, serverCustomAttributes, customAttributes, and type will be overridden by the attributes configured in the AccelByte Gaming Services (AGS) Store. - Storing E-commerce items in a particular slot will follow its entitlement and item configuration, such as durable, consumable, stackable and non-stackable. - The quantity is dynamically set based on an item’s useCount configured in Store. When saving an item, the specified quantity will be multiplied by configured useCount for that particular item. For example, if an Item is configured with a useCount of 5 in the AGS Store and it is saved with a qty of 2, the item’s quantity will be stored as 10 in the player’s inventory. **When configuring your request, note the following:** - The source field is mandatory for determining the source of the item. The supported values are OTHER (for items coming from other sources) and E-commerce for items coming from the E-commerce integration. - For other-sourced items, the type can be manually defined when saving the item. - A maximum of 10 items can be saved in a single bulk call. You must have this permission to access this endpoint: **Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM[CREATE]**
     */
    createItemBulk_ByUserId_ByInventoryId,
    /**
     *  Getting an item info. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [READ]
     */
    getSourceItem_ByInventoryId_BySlotId_BySourceItemId
  }
}
