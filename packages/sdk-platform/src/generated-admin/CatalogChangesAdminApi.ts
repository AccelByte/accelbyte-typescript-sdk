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
import { CatalogChangePagingResult } from '../generated-definitions/CatalogChangePagingResult.js'
import { CatalogChangeStatistics } from '../generated-definitions/CatalogChangeStatistics.js'
import { StoreInfo } from '../generated-definitions/StoreInfo.js'
import { CatalogChangesAdmin$ } from './endpoints/CatalogChangesAdmin$.js'

export function CatalogChangesAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function updateCatalogChangeSelectAll_ByStoreId(storeId: string): Promise<AxiosResponse<unknown>> {
    const $ = new CatalogChangesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCatalogChangeSelectAll_ByStoreId(storeId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCatalogChangesByCriteria_ByStoreId(
    storeId: string,
    queryParams?: {
      action?: 'CREATE' | 'DELETE' | 'UPDATE'
      itemSku?: string | null
      itemType?:
        | 'APP'
        | 'BUNDLE'
        | 'CODE'
        | 'COINS'
        | 'EXTENSION'
        | 'INGAMEITEM'
        | 'LOOTBOX'
        | 'MEDIA'
        | 'OPTIONBOX'
        | 'SEASON'
        | 'SUBSCRIPTION'
      limit?: number
      offset?: number
      selected?: boolean | null
      sortBy?: string[]
      status?: 'PUBLISHED' | 'UNPUBLISHED'
      type?: 'CATEGORY' | 'ITEM' | 'SECTION' | 'STORE' | 'VIEW'
      updatedAtEnd?: string | null
      updatedAtStart?: string | null
      withTotal?: boolean | null
    }
  ): Promise<AxiosResponse<CatalogChangePagingResult>> {
    const $ = new CatalogChangesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCatalogChangesByCriteria_ByStoreId(storeId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateCatalogChangePublishAll_ByStoreId(storeId: string): Promise<AxiosResponse<StoreInfo>> {
    const $ = new CatalogChangesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCatalogChangePublishAll_ByStoreId(storeId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCatalogChangesStatistics_ByStoreId(
    storeId: string,
    queryParams?: {
      action?: 'CREATE' | 'DELETE' | 'UPDATE'
      itemSku?: string | null
      itemType?:
        | 'APP'
        | 'BUNDLE'
        | 'CODE'
        | 'COINS'
        | 'EXTENSION'
        | 'INGAMEITEM'
        | 'LOOTBOX'
        | 'MEDIA'
        | 'OPTIONBOX'
        | 'SEASON'
        | 'SUBSCRIPTION'
      type?: 'CATEGORY' | 'ITEM' | 'SECTION' | 'STORE' | 'VIEW'
      updatedAtEnd?: string | null
      updatedAtStart?: string | null
    }
  ): Promise<AxiosResponse<CatalogChangeStatistics>> {
    const $ = new CatalogChangesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCatalogChangesStatistics_ByStoreId(storeId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateCatalogChangeUnselectAll_ByStoreId(storeId: string): Promise<AxiosResponse<unknown>> {
    const $ = new CatalogChangesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCatalogChangeUnselectAll_ByStoreId(storeId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateCatalogChangePublishSelected_ByStoreId(storeId: string): Promise<AxiosResponse<StoreInfo>> {
    const $ = new CatalogChangesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCatalogChangePublishSelected_ByStoreId(storeId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateSelect_ByStoreId_ByChangeId(storeId: string, changeId: string): Promise<AxiosResponse<unknown>> {
    const $ = new CatalogChangesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSelect_ByStoreId_ByChangeId(storeId, changeId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUnselect_ByStoreId_ByChangeId(storeId: string, changeId: string): Promise<AxiosResponse<unknown>> {
    const $ = new CatalogChangesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUnselect_ByStoreId_ByChangeId(storeId, changeId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateCatalogChangeSelectAllByCriteria_ByStoreId(
    storeId: string,
    queryParams?: {
      action?: 'CREATE' | 'DELETE' | 'UPDATE'
      itemSku?: string | null
      itemType?:
        | 'APP'
        | 'BUNDLE'
        | 'CODE'
        | 'COINS'
        | 'EXTENSION'
        | 'INGAMEITEM'
        | 'LOOTBOX'
        | 'MEDIA'
        | 'OPTIONBOX'
        | 'SEASON'
        | 'SUBSCRIPTION'
      selected?: boolean | null
      type?: 'CATEGORY' | 'ITEM' | 'SECTION' | 'STORE' | 'VIEW'
      updatedAtEnd?: string | null
      updatedAtStart?: string | null
    }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new CatalogChangesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCatalogChangeSelectAllByCriteria_ByStoreId(storeId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Select all changes.
     */
    updateCatalogChangeSelectAll_ByStoreId,
    /**
     * This API is used to query changes .&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the pagination of changes&lt;/li&gt;&lt;/ul&gt;
     */
    getCatalogChangesByCriteria_ByStoreId,
    /**
     * This API is used to publish all unpublished changes.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/ul&gt;
     */
    updateCatalogChangePublishAll_ByStoreId,
    /**
     * This API is used to query catalog changes statistics .&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: catalog changes statistics changes&lt;/li&gt;&lt;/ul&gt;
     */
    getCatalogChangesStatistics_ByStoreId,
    /**
     * Unselect all change.
     */
    updateCatalogChangeUnselectAll_ByStoreId,
    /**
     * This API is used to publish selected unpublished changes.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/ul&gt;
     */
    updateCatalogChangePublishSelected_ByStoreId,
    /**
     * Select a change, it will be included when partial publish.
     */
    updateSelect_ByStoreId_ByChangeId,
    /**
     * Unselect a change, it will not be included when partial publish.
     */
    updateUnselect_ByStoreId_ByChangeId,
    /**
     * Select all changes by criteria
     */
    updateCatalogChangeSelectAllByCriteria_ByStoreId
  }
}
