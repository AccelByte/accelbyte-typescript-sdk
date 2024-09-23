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
import { CreateInventoryConfigurationReq } from '../../generated-definitions/CreateInventoryConfigurationReq.js'
import { InventoryConfigurationReq } from '../../generated-definitions/InventoryConfigurationReq.js'
import { InventoryConfigurationResp } from '../../generated-definitions/InventoryConfigurationResp.js'
import { ListInventoryConfigurationsResp } from '../../generated-definitions/ListInventoryConfigurationsResp.js'

export class InventoryConfigurationsAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
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
  }): Promise<Response<ListInventoryConfigurationsResp>> {
    const params = { limit: 25, sortBy: 'createdAt', ...queryParams } as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/inventoryConfigurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListInventoryConfigurationsResp,
      'ListInventoryConfigurationsResp'
    )
  }
  /**
   *  Creating inventory configuration. There cannot be one inventory configuration duplicate code per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [CREATE]
   */
  createInventoryConfiguration(data: CreateInventoryConfigurationReq): Promise<Response<InventoryConfigurationResp>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/inventoryConfigurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      InventoryConfigurationResp,
      'InventoryConfigurationResp'
    )
  }
  /**
   *  Deleting an inventory configuration. If an inventory already reference this type (i.e. STATUS is &#34;TIED&#34;), then the type cannot be deleted anymore. ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [DELETE]
   */
  deleteInventoryConfiguration_ByInventoryConfigurationId(inventoryConfigurationId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/inventoryConfigurations/{inventoryConfigurationId}'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryConfigurationId}', inventoryConfigurationId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   *  Getting an inventory configuration info. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [READ]
   */
  getInventoryConfiguration_ByInventoryConfigurationId(inventoryConfigurationId: string): Promise<Response<InventoryConfigurationResp>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/inventoryConfigurations/{inventoryConfigurationId}'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryConfigurationId}', inventoryConfigurationId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      InventoryConfigurationResp,
      'InventoryConfigurationResp'
    )
  }
  /**
   *  Updating inventory configuration. There cannot be duplicate code per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [UPDATE]
   */
  updateInventoryConfiguration_ByInventoryConfigurationId(
    inventoryConfigurationId: string,
    data: InventoryConfigurationReq
  ): Promise<Response<InventoryConfigurationResp>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/inventoryConfigurations/{inventoryConfigurationId}'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryConfigurationId}', inventoryConfigurationId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      InventoryConfigurationResp,
      'InventoryConfigurationResp'
    )
  }
}
