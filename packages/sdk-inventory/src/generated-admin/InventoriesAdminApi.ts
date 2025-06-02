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
import { CreateInventoryReq } from '../generated-definitions/CreateInventoryReq.js'
import { DeleteInventoryReq } from '../generated-definitions/DeleteInventoryReq.js'
import { InventoryResp } from '../generated-definitions/InventoryResp.js'
import { InventoryRespArray } from '../generated-definitions/InventoryRespArray.js'
import { ListInventoryResp } from '../generated-definitions/ListInventoryResp.js'
import { PurchaseValidationReq } from '../generated-definitions/PurchaseValidationReq.js'
import { UpdateInventoryReq } from '../generated-definitions/UpdateInventoryReq.js'
import { InventoriesAdmin$ } from './endpoints/InventoriesAdmin$.js'

export function InventoriesAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
  }): Promise<AxiosResponse<ListInventoryResp>> {
    const $ = new InventoriesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInventories(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createInventory(data: CreateInventoryReq): Promise<AxiosResponse<InventoryResp>> {
    const $ = new InventoriesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createInventory(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteInventory_ByInventoryId(inventoryId: string, data: DeleteInventoryReq): Promise<AxiosResponse<unknown>> {
    const $ = new InventoriesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteInventory_ByInventoryId(inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getInventory_ByInventoryId(inventoryId: string): Promise<AxiosResponse<InventoryResp>> {
    const $ = new InventoriesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInventory_ByInventoryId(inventoryId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateInventory_ByInventoryId(inventoryId: string, data: UpdateInventoryReq): Promise<AxiosResponse<InventoryResp>> {
    const $ = new InventoriesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateInventory_ByInventoryId(inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePurchaseable_ByUserId(userId: string, data: PurchaseValidationReq): Promise<AxiosResponse<unknown>> {
    const $ = new InventoriesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePurchaseable_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateInventory_ByUserId_ByInventoryConfigurationCode(
    userId: string,
    inventoryConfigurationCode: string,
    data: UpdateInventoryReq
  ): Promise<AxiosResponse<InventoryRespArray>> {
    const $ = new InventoriesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateInventory_ByUserId_ByInventoryConfigurationCode(userId, inventoryConfigurationCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     *  Listing all inventories in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY [READ]
     */
    getInventories,
    /**
     *  Creating an inventory. The inventory configuration must exists otherwise it will fail. The max slots and max upgrade slots of an inventory will be initialized according to the inventory configuration it used, but it can be changed later when using AdminUpdateInventory endpoint. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY [CREATE]
     */
    createInventory,
    /**
     *  Deleting an inventory. If an inventory still has items, it cannot be deleted. ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY [DELETE]
     */
    deleteInventory_ByInventoryId,
    /**
     *  Getting an inventory info. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY [READ]
     */
    getInventory_ByInventoryId,
    /**
     *  Updating an inventory. Positive value will increase MaxSlots from existing value Negative value will decrease MaxSlots from existing value Limited slots can not be changed to unlimited, vice versa Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY [UPDATE]
     */
    updateInventory_ByInventoryId,
    /**
     *  Validate purchase ecommerce item. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY [UPDATE]
     */
    updatePurchaseable_ByUserId,
    /**
     *  Updating user inventories. Positive value will increase MaxSlots from existing value Negative value will decrease MaxSlots from existing value Limited slots can not be changed to unlimited, vice versa Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY [UPDATE]
     */
    updateInventory_ByUserId_ByInventoryConfigurationCode
  }
}
