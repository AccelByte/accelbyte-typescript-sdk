/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { CreateInventoryConfigurationReq } from '../../generated-definitions/CreateInventoryConfigurationReq.js'
import { InventoryConfigurationReq } from '../../generated-definitions/InventoryConfigurationReq.js'
import { InventoryConfigurationResp } from '../../generated-definitions/InventoryConfigurationResp.js'
import { ListInventoryConfigurationsResp } from '../../generated-definitions/ListInventoryConfigurationsResp.js'

export class AdminInventoryConfigurationsAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   *  Listing all inventory configurations in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [READ]
   */
  getInventoryConfigurations(queryParams?: {
    code?: string | null
    limit?: number
    offset?: number
    sortBy?:
      | 'code'
      | 'code:asc'
      | 'code:desc'
      | 'createdAt'
      | 'createdAt:asc'
      | 'createdAt:desc'
      | 'updatedAt'
      | 'updatedAt:asc'
      | 'updatedAt:desc'
  }): Promise<IResponseWithSync<ListInventoryConfigurationsResp>> {
    const params = { limit: 25, sortBy: 'createdAt', ...queryParams } as SDKRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/inventoryConfigurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ListInventoryConfigurationsResp, 'ListInventoryConfigurationsResp')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   *  Creating inventory configuration. There cannot be one inventory configuration duplicate code per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [CREATE]
   */
  createInventoryConfiguration(data: CreateInventoryConfigurationReq): Promise<IResponse<InventoryConfigurationResp>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/inventoryConfigurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, InventoryConfigurationResp, 'InventoryConfigurationResp')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   *  Deleting an inventory configuration. If an inventory already reference this type (i.e. STATUS is &#34;TIED&#34;), then the type cannot be deleted anymore. ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [DELETE]
   */
  deleteInventoryConfiguration_ByInventoryConfigurationId(inventoryConfigurationId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/inventoryConfigurations/{inventoryConfigurationId}'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryConfigurationId}', inventoryConfigurationId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   *  Getting an inventory configuration info. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [READ]
   */
  getInventoryConfiguration_ByInventoryConfigurationId(
    inventoryConfigurationId: string
  ): Promise<IResponseWithSync<InventoryConfigurationResp>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/inventoryConfigurations/{inventoryConfigurationId}'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryConfigurationId}', inventoryConfigurationId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, InventoryConfigurationResp, 'InventoryConfigurationResp')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   *  Updating inventory configuration. There cannot be duplicate code per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [UPDATE]
   */
  updateInventoryConfiguration_ByInventoryConfigurationId(
    inventoryConfigurationId: string,
    data: InventoryConfigurationReq
  ): Promise<IResponse<InventoryConfigurationResp>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/inventoryConfigurations/{inventoryConfigurationId}'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryConfigurationId}', inventoryConfigurationId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, InventoryConfigurationResp, 'InventoryConfigurationResp')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
