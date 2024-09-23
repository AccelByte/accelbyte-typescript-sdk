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

  async function createConsume_ByUserId_ByInventoryId(
    userId: string,
    inventoryId: string,
    data: ConsumeItemReq
  ): Promise<AxiosResponse<ItemResp>> {
    const $ = new ItemsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createConsume_ByUserId_ByInventoryId(userId, inventoryId, data)
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
     *  Saving an item. The item will be saved in user&#39;s inventory, If it doesn&#39;t exist it&#39;ll be created. If the item already exists, its qty will be increased, so no new item with same sourceItemId will be created Tags will be auto-created. ItemType will be auto-created. For Ecommerce item, this fields will be override by ecommerce configuration (slotUsed, serverCustomAttributes, customAttributes, type) For Ecommerce items, the quantity saved is dynamically adjusted based on an item&#39;s useCount configured in Store. When saving items, the quantity specified for each item will be multiplied by the useCount. i.e. If the store item is configured with a useCount of 5 and the quantity of a particular item is set to 2 during saving, it will be stored as 10. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
     */
    createItem_ByUserId,
    /**
     *  This endpoint will be used by client to save the purchased item to user&#39;s inventory, since want to integrate the inventory service to e-commerce, source field will be mandatory to determine the item, supported field “OTHER” and “ECOMMERCE” Notes : source ECOMMERCE, the quantity of ecommerce items saved is dynamically adjusted based on an item&#39;s useCount configured in Store. When saving items, the quantity specified for each item will be multiplied by the useCount i.e. If the store item is configured with a useCount of 5 and the quantity of a particular item is set to 2 during saving, it will be stored as 10 Target inventory will be based on the specified inventoryConfigurationCode. If the inventory exist then will put to the existing one, if not exist at all then will create at least one inventory, if full then will return failed at the response. We implement the logic as proportional to store the item to inventory, will loop from createdAt until find the available slots at inventory. Type: - ingame - app - coin etc.. Max length of the payload is 10 items Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
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
     *  Saving an item to specific inventory. The item will be saved in specific user&#39;s inventory, If the item already exists, its qty will be increased, so no new item with same sourceItemId will be created Tags will be auto-created. ItemType will be auto-created. For Ecommerce item, this fields will be override by ecommerce configuration (slotUsed, serverCustomAttributes, customAttributes, type) For Ecommerce items, the quantity saved is dynamically adjusted based on an item&#39;s useCount configured in Store. When saving items, the quantity specified for each item will be multiplied by the useCount. i.e. If the store item is configured with a useCount of 5 and the quantity of a particular item is set to 2 during saving, it will be stored as 10. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
     */
    createItem_ByUserId_ByInventoryId,
    /**
     *  Bulk Updating user&#39;s own items. Tags will be auto-created. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [UPDATE]
     */
    updateItem_ByUserId_ByInventoryId,
    /**
     *  Consume user&#39;s own item Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [UPDATE]
     */
    createConsume_ByUserId_ByInventoryId,
    /**
     *  This endpoint will be used by client to save the purchased item to user&#39;s inventory, since want to integrate the inventory service to e-commerce, source field will be mandatory to determine the item, supported field “OTHER” and “ECOMMERCE” Notes : source ECOMMERCE, the quantity of ecommerce items saved is dynamically adjusted based on an item&#39;s useCount configured in Store. When saving items, the quantity specified for each item will be multiplied by the useCount i.e. If the store item is configured with a useCount of 5 and the quantity of a particular item is set to 2 during saving, it will be stored as 10 Type: - ingame - app - coin etc.. Max length of the payload is 10 items Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
     */
    createItemBulk_ByUserId_ByInventoryId,
    /**
     *  Getting an item info. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [READ]
     */
    getSourceItem_ByInventoryId_BySlotId_BySourceItemId
  }
}
