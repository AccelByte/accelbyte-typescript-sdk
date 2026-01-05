/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { AdminUpdateItemReq } from '../../generated-definitions/AdminUpdateItemReq.js'
import { BulkSaveItemRespArray } from '../../generated-definitions/BulkSaveItemRespArray.js'
import { ConsumeItemReq } from '../../generated-definitions/ConsumeItemReq.js'
import { ItemResp } from '../../generated-definitions/ItemResp.js'
import { ListItemResp } from '../../generated-definitions/ListItemResp.js'
import { RemoveInventoryItemReq } from '../../generated-definitions/RemoveInventoryItemReq.js'
import { SaveItemReq } from '../../generated-definitions/SaveItemReq.js'
import { SaveItemToInventoryReq } from '../../generated-definitions/SaveItemToInventoryReq.js'
import { UpdateItemRespArray } from '../../generated-definitions/UpdateItemRespArray.js'

export class ItemsAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * **This endpoint is used to save items to the player’s inventory based on the inventoryConfigurationCode with the following conditions:** - If the player doesn&#39;t have the inventory for the specified inventoryConfigurationCode, a new inventory will be created. - If the user already has one, it will be added to the existing inventory. - If the same item exists within the inventory, the quantity (qty) will be increased. - If the inventory is full, the item cannot be added and the request will return the “Failed” response. - If a player has more than one inventory and the initial inventory is full, the service will check the available slot in the other inventory following the order of their creation date and time (createdAt). - For Ecommerce items: &gt;- Attributes such as slotUsed, serverCustomAttributes, customAttributes, and type will be overridden by the attributes configured in the AccelByte Gaming Services (AGS) Store. &gt;- Storing E-commerce items in a particular slot will follow its entitlement and item configuration, such as durable, consumable, stackable and non-stackable. &gt;- The quantity is dynamically set based on an item’s useCount configured in Store. When saving an item, the specified quantity will be multiplied by configured useCount for that particular item. For example, if an Item is configured with a useCount of 5 in the AGS Store and it is saved with a qty of 2, the item’s quantity will be stored as 10 in the player’s inventory. You must have this permission to access this endpoint: **Permission:ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]**
   */
  createItem_ByUserId(userId: string, data: SaveItemReq): Promise<Response<ItemResp>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/users/{userId}/items'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ItemResp, 'ItemResp')
  }
  /**
   * **This endpoint is used used for bulk saving purchased items to the player’s inventory based on the inventoryConfigurationCode with the following conditions:** - If the player doesn&#39;t have the inventory for the specified inventoryConfigurationCode, a new inventory will be created for the player. - If the player already has one, it will be added to the existing inventory. &gt;- If the same item exists within the inventory, the quantity (qty) will be increased. &gt;- If the inventory is full, the item cannot be added and the request will return the “Failed” response. &gt;- If a player has more than one inventory and the initial inventory is full, the service will check the available slot in the other inventory following the order of their creation date and time (createdAt). - For E-commerce items: &gt;- Attributes such as slotUsed, serverCustomAttributes, customAttributes, and type will be overridden by the attributes configured in the AccelByte Gaming Services (AGS) Store. &gt;- Storing E-commerce items in a particular slot will follow its entitlement and item configuration, such as durable, consumable, stackable and non-stackable. &gt;- The quantity is dynamically set based on an item’s useCount configured in Store. When saving an item, the specified quantity will be multiplied by configured useCount for that particular item. For example, if an Item is configured with a useCount of 5 in the AGS Store and it is saved with a qty of 2, the item’s quantity will be stored as 10 in the player’s inventory. **When configuring your request, note the following:** - The source field is mandatory for determining the source of the item. The supported values are OTHER (for items coming from other sources) and E-commerce for items coming from the E-commerce integration. - For other-sourced items, the type can be manually defined when saving the item. - A maximum of 10 items can be saved in a single bulk call. You must have this permission to access this endpoint: **Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]**
   */
  createItemBulk_ByUserId(userId: string, data: SaveItemReq[]): Promise<Response<BulkSaveItemRespArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/users/{userId}/items/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BulkSaveItemRespArray, 'BulkSaveItemRespArray')
  }
  /**
   *  Listing all items in an inventory. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [READ]
   */
  getItems_ByInventoryId(
    inventoryId: string,
    queryParams?: {
      limit?: number
      offset?: number
      sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
      sourceItemId?: string | null
      tags?: string | null
    }
  ): Promise<Response<ListItemResp>> {
    const params = { limit: 25, sortBy: 'createdAt', ...queryParams } as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/inventories/{inventoryId}/items'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListItemResp, 'ListItemResp')
  }
  /**
   *  Sync user&#39;s entitlement from e-commerce service to inventory for non exist item at user inventory. will skip the item if already exist at user inventory. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [UPDATE]
   */
  updateItemEntitlementSync_ByUserId(userId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/users/{userId}/items/entitlements/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   *  Bulk remove user&#39;s own items&#39;. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [DELETE]
   */
  deleteItem_ByUserId_ByInventoryId(
    userId: string,
    inventoryId: string,
    data: RemoveInventoryItemReq[]
  ): Promise<Response<UpdateItemRespArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/users/{userId}/inventories/{inventoryId}/items'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UpdateItemRespArray, 'UpdateItemRespArray')
  }
  /**
   * **This endpoint is used to save purchased items to a specific inventory of the player, with the following conditions for E-commerce items:** - Attributes such as slotUsed, serverCustomAttributes, customAttributes, and type will be overridden by the attributes configured in the AccelByte Gaming Services (AGS) Store. - Storing E-commerce items in a particular slot will follow its entitlement and item configuration, such as durable, consumable, stackable and non-stackable. - The quantity is dynamically set based on an item’s useCount configured in Store. When saving an item, the specified quantity will be multiplied by configured useCount for that particular item. For example, if an Item is configured with a useCount of 5 in the AGS Store and it is saved with a qty of 2, the item’s quantity will be stored as 10 in the player’s inventory. **When configuring your request, note the following:** - The source field is mandatory for determining the source of the item. The supported values are OTHER (for items coming from other sources) and E-commerce for items coming from the E-commerce integration. - For other-sourced items, the type can be manually defined when saving the item. You must have this permission to access this endpoint: **Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]**
   */
  createItem_ByUserId_ByInventoryId(userId: string, inventoryId: string, data: SaveItemToInventoryReq): Promise<Response<ItemResp>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/users/{userId}/inventories/{inventoryId}/items'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ItemResp, 'ItemResp')
  }
  /**
   *  Bulk Updating user&#39;s own items. Tags will be auto-created. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [UPDATE]
   */
  updateItem_ByUserId_ByInventoryId(
    userId: string,
    inventoryId: string,
    data: AdminUpdateItemReq[]
  ): Promise<Response<UpdateItemRespArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/users/{userId}/inventories/{inventoryId}/items'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UpdateItemRespArray, 'UpdateItemRespArray')
  }
  /**
   *  Consume user&#39;s own item Client should pass item ID in options if item type is OPTIONBOX Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [UPDATE]
   */
  updateConsume_ByUserId_ByInventoryId(
    userId: string,
    inventoryId: string,
    data: ConsumeItemReq,
    queryParams?: { dateRangeValidation?: string | null }
  ): Promise<Response<ItemResp>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/users/{userId}/inventories/{inventoryId}/consume'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ItemResp, 'ItemResp')
  }
  /**
   * **This endpoint is used for bulk saving purchased items to a specific inventory of the player, with the following conditions for E-commerce items:** - Attributes such as slotUsed, serverCustomAttributes, customAttributes, and type will be overridden by the attributes configured in the AccelByte Gaming Services (AGS) Store. - Storing E-commerce items in a particular slot will follow its entitlement and item configuration, such as durable, consumable, stackable and non-stackable. - The quantity is dynamically set based on an item’s useCount configured in Store. When saving an item, the specified quantity will be multiplied by configured useCount for that particular item. For example, if an Item is configured with a useCount of 5 in the AGS Store and it is saved with a qty of 2, the item’s quantity will be stored as 10 in the player’s inventory. **When configuring your request, note the following:** - The source field is mandatory for determining the source of the item. The supported values are OTHER (for items coming from other sources) and E-commerce for items coming from the E-commerce integration. - For other-sourced items, the type can be manually defined when saving the item. - A maximum of 10 items can be saved in a single bulk call. You must have this permission to access this endpoint: **Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM[CREATE]**
   */
  createItemBulk_ByUserId_ByInventoryId(
    userId: string,
    inventoryId: string,
    data: SaveItemToInventoryReq[]
  ): Promise<Response<BulkSaveItemRespArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/users/{userId}/inventories/{inventoryId}/items/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BulkSaveItemRespArray, 'BulkSaveItemRespArray')
  }
  /**
   *  Getting an item info. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [READ]
   */
  getSourceItem_ByInventoryId_BySlotId_BySourceItemId(
    inventoryId: string,
    slotId: string,
    sourceItemId: string
  ): Promise<Response<ItemResp>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/inventories/{inventoryId}/slots/{slotId}/sourceItems/{sourceItemId}'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
      .replace('{slotId}', slotId)
      .replace('{sourceItemId}', sourceItemId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ItemResp, 'ItemResp')
  }
}
