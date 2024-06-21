/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { CreateInventoryReq } from '../../generated-definitions/CreateInventoryReq.js'
import { DeleteInventoryReq } from '../../generated-definitions/DeleteInventoryReq.js'
import { InventoryResp } from '../../generated-definitions/InventoryResp.js'
import { ListInventoryResp } from '../../generated-definitions/ListInventoryResp.js'
import { PurchaseValidationReq } from '../../generated-definitions/PurchaseValidationReq.js'
import { UpdateInventoryReq } from '../../generated-definitions/UpdateInventoryReq.js'

export class AdminInventoriesAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   *  Listing all inventories in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY [READ]
   */
  getInventories(queryParams?: {
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
  }): Promise<IResponse<ListInventoryResp>> {
    const params = { limit: 25, sortBy: 'createdAt', ...queryParams } as SDKRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/inventories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListInventoryResp, 'ListInventoryResp')
  }

  /**
   *  Creating an inventory. The inventory configuration must exists otherwise it will fail. The max slots and max upgrade slots of an inventory will be initialized according to the inventory configuration it used, but it can be changed later when using AdminUpdateInventory endpoint. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY [CREATE]
   */
  createInventory(data: CreateInventoryReq): Promise<IResponse<InventoryResp>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/inventories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, InventoryResp, 'InventoryResp')
  }

  /**
   *  Deleting an inventory. If an inventory still has items, it cannot be deleted. ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY [DELETE]
   */
  deleteInventory_ByInventoryId(inventoryId: string, data: DeleteInventoryReq): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/inventories/{inventoryId}'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   *  Getting an inventory info. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY [READ]
   */
  getInventory_ByInventoryId(inventoryId: string): Promise<IResponse<InventoryResp>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/inventories/{inventoryId}'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, InventoryResp, 'InventoryResp')
  }

  /**
   *  Updating an inventory. Positive value will increase MaxSlots from existing value Negative value will decrease MaxSlots from existing value Limited slots can not be changed to unlimited, vice versa Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY [UPDATE]
   */
  updateInventory_ByInventoryId(inventoryId: string, data: UpdateInventoryReq): Promise<IResponse<InventoryResp>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/inventories/{inventoryId}'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, InventoryResp, 'InventoryResp')
  }

  /**
   *  Validate purchase ecommerce item. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY [UPDATE]
   */
  createPurchaseable_ByUserId(userId: string, data: PurchaseValidationReq): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/users/{userId}/purchaseable'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
