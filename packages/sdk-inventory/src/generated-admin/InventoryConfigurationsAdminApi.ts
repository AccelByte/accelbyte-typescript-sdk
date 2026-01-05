/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { CreateInventoryConfigurationReq } from '../generated-definitions/CreateInventoryConfigurationReq.js'
import { InventoryConfigurationReq } from '../generated-definitions/InventoryConfigurationReq.js'
import { InventoryConfigurationResp } from '../generated-definitions/InventoryConfigurationResp.js'
import { ListInventoryConfigurationsResp } from '../generated-definitions/ListInventoryConfigurationsResp.js'
import { InventoryConfigurationsAdmin$ } from './endpoints/InventoryConfigurationsAdmin$.js'

export function InventoryConfigurationsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getInventoryConfigurations(queryParams?: {
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
  }): Promise<AxiosResponse<ListInventoryConfigurationsResp>> {
    const $ = new InventoryConfigurationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInventoryConfigurations(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createInventoryConfiguration(data: CreateInventoryConfigurationReq): Promise<AxiosResponse<InventoryConfigurationResp>> {
    const $ = new InventoryConfigurationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createInventoryConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteInventoryConfiguration_ByInventoryConfigurationId(
    inventoryConfigurationId: string
  ): Promise<AxiosResponse<unknown>> {
    const $ = new InventoryConfigurationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteInventoryConfiguration_ByInventoryConfigurationId(inventoryConfigurationId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getInventoryConfiguration_ByInventoryConfigurationId(
    inventoryConfigurationId: string
  ): Promise<AxiosResponse<InventoryConfigurationResp>> {
    const $ = new InventoryConfigurationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInventoryConfiguration_ByInventoryConfigurationId(inventoryConfigurationId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateInventoryConfiguration_ByInventoryConfigurationId(
    inventoryConfigurationId: string,
    data: InventoryConfigurationReq
  ): Promise<AxiosResponse<InventoryConfigurationResp>> {
    const $ = new InventoryConfigurationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateInventoryConfiguration_ByInventoryConfigurationId(inventoryConfigurationId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     *  Listing all inventory configurations in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [READ]
     */
    getInventoryConfigurations,
    /**
     *  Creating inventory configuration. There cannot be one inventory configuration duplicate code per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [CREATE]
     */
    createInventoryConfiguration,
    /**
     *  Deleting an inventory configuration. If an inventory already reference this type (i.e. STATUS is &#34;TIED&#34;), then the type cannot be deleted anymore. ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [DELETE]
     */
    deleteInventoryConfiguration_ByInventoryConfigurationId,
    /**
     *  Getting an inventory configuration info. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [READ]
     */
    getInventoryConfiguration_ByInventoryConfigurationId,
    /**
     *  Updating inventory configuration. There cannot be duplicate code per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [UPDATE]
     */
    updateInventoryConfiguration_ByInventoryConfigurationId
  }
}
