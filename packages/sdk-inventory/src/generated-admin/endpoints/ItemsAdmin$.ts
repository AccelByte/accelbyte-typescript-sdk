/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
   *  Saving an item. The item will be saved in user&#39;s inventory, If it doesn&#39;t exist it&#39;ll be created. If the item already exists, its qty will be increased, so no new item with same sourceItemId will be created Tags will be auto-created. ItemType will be auto-created. For Ecommerce item, this fields will be override by ecommerce configuration (slotUsed, serverCustomAttributes, customAttributes, type) For Ecommerce items, the quantity saved is dynamically adjusted based on an item&#39;s useCount configured in Store. When saving items, the quantity specified for each item will be multiplied by the useCount. i.e. If the store item is configured with a useCount of 5 and the quantity of a particular item is set to 2 during saving, it will be stored as 10. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
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
   *  This endpoint will be used by client to save the purchased item to user&#39;s inventory, since want to integrate the inventory service to e-commerce, source field will be mandatory to determine the item, supported field “OTHER” and “ECOMMERCE” Notes : source ECOMMERCE, the quantity of ecommerce items saved is dynamically adjusted based on an item&#39;s useCount configured in Store. When saving items, the quantity specified for each item will be multiplied by the useCount i.e. If the store item is configured with a useCount of 5 and the quantity of a particular item is set to 2 during saving, it will be stored as 10 Target inventory will be based on the specified inventoryConfigurationCode. If the inventory exist then will put to the existing one, if not exist at all then will create at least one inventory, if full then will return failed at the response. We implement the logic as proportional to store the item to inventory, will loop from createdAt until find the available slots at inventory. Type: - ingame - app - coin etc.. Max length of the payload is 10 items Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
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
   *  Saving an item to specific inventory. The item will be saved in specific user&#39;s inventory, If the item already exists, its qty will be increased, so no new item with same sourceItemId will be created Tags will be auto-created. ItemType will be auto-created. For Ecommerce item, this fields will be override by ecommerce configuration (slotUsed, serverCustomAttributes, customAttributes, type) For Ecommerce items, the quantity saved is dynamically adjusted based on an item&#39;s useCount configured in Store. When saving items, the quantity specified for each item will be multiplied by the useCount. i.e. If the store item is configured with a useCount of 5 and the quantity of a particular item is set to 2 during saving, it will be stored as 10. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
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
   *  Consume user&#39;s own item Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [UPDATE]
   */
  createConsume_ByUserId_ByInventoryId(userId: string, inventoryId: string, data: ConsumeItemReq): Promise<Response<ItemResp>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/users/{userId}/inventories/{inventoryId}/consume'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ItemResp, 'ItemResp')
  }
  /**
   *  This endpoint will be used by client to save the purchased item to user&#39;s inventory, since want to integrate the inventory service to e-commerce, source field will be mandatory to determine the item, supported field “OTHER” and “ECOMMERCE” Notes : source ECOMMERCE, the quantity of ecommerce items saved is dynamically adjusted based on an item&#39;s useCount configured in Store. When saving items, the quantity specified for each item will be multiplied by the useCount i.e. If the store item is configured with a useCount of 5 and the quantity of a particular item is set to 2 during saving, it will be stored as 10 Type: - ingame - app - coin etc.. Max length of the payload is 10 items Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
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
