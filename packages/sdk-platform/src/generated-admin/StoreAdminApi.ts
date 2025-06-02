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
import { CatalogConfigInfo } from '../generated-definitions/CatalogConfigInfo.js'
import { CatalogConfigUpdate } from '../generated-definitions/CatalogConfigUpdate.js'
import { CatalogDefinitionInfoArray } from '../generated-definitions/CatalogDefinitionInfoArray.js'
import { ExportStoreRequest } from '../generated-definitions/ExportStoreRequest.js'
import { ExportStoreToCsvRequest } from '../generated-definitions/ExportStoreToCsvRequest.js'
import { ImportStoreHistoryPagingResult } from '../generated-definitions/ImportStoreHistoryPagingResult.js'
import { ImportStoreResult } from '../generated-definitions/ImportStoreResult.js'
import { StoreBackupInfo } from '../generated-definitions/StoreBackupInfo.js'
import { StoreCreate } from '../generated-definitions/StoreCreate.js'
import { StoreInfo } from '../generated-definitions/StoreInfo.js'
import { StoreInfoArray } from '../generated-definitions/StoreInfoArray.js'
import { StoreUpdate } from '../generated-definitions/StoreUpdate.js'
import { StoreAdmin$ } from './endpoints/StoreAdmin$.js'

export function StoreAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getStores(): Promise<AxiosResponse<StoreInfoArray>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStores()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createStore(data: StoreCreate): Promise<AxiosResponse<StoreInfo>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStore(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStoreImport(data: { file?: File }, queryParams?: { storeId?: string | null }): Promise<AxiosResponse<StoreInfo>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStoreImport(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCatalogConfigs(): Promise<AxiosResponse<CatalogConfigInfo>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCatalogConfigs()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateCatalogConfig(data: CatalogConfigUpdate): Promise<AxiosResponse<CatalogConfigInfo>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCatalogConfig(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteStore_ByStoreId(storeId: string): Promise<AxiosResponse<StoreInfo>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteStore_ByStoreId(storeId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStore_ByStoreId(storeId: string): Promise<AxiosResponse<StoreInfo>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStore_ByStoreId(storeId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStore_ByStoreId(storeId: string, data: StoreUpdate): Promise<AxiosResponse<StoreInfo>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStore_ByStoreId(storeId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteStorePublished(): Promise<AxiosResponse<StoreInfo>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteStorePublished()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStoresPublished(): Promise<AxiosResponse<StoreInfo>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStoresPublished()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStoreImport_v2(
    data: { file?: File },
    queryParams?: { storeId?: string | null; strictMode?: boolean | null }
  ): Promise<AxiosResponse<ImportStoreResult>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStoreImport_v2(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createStoreExportByCsv(data: ExportStoreToCsvRequest): Promise<AxiosResponse<unknown>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStoreExportByCsv(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateClone_ByStoreId(
    storeId: string,
    queryParams?: { targetStoreId?: string | null }
  ): Promise<AxiosResponse<StoreInfo>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateClone_ByStoreId(storeId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getExport_ByStoreId(storeId: string): Promise<AxiosResponse<unknown>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getExport_ByStoreId(storeId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStoresPublishedBackup(): Promise<AxiosResponse<StoreBackupInfo>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStoresPublishedBackup()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStoresCatalogDefinition(queryParams: {
    catalogType: 'APP' | 'CATEGORY' | 'ITEM' | 'SECTION' | 'VIEW'
  }): Promise<AxiosResponse<CatalogDefinitionInfoArray>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStoresCatalogDefinition(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStorePublishedRollback(): Promise<AxiosResponse<StoreInfo>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStorePublishedRollback()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createExport_ByStoreId_v2(storeId: string, data: ExportStoreRequest): Promise<AxiosResponse<unknown>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createExport_ByStoreId_v2(storeId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStoresDownloadCsvTemplates(): Promise<AxiosResponse<unknown>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStoresDownloadCsvTemplates()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createImportByCsv_ByStoreId(
    storeId: string,
    data: { category: File; display: File; item: File; notes: string | null; section: File }
  ): Promise<AxiosResponse<ImportStoreResult>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createImportByCsv_ByStoreId(storeId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getImportHistory_ByStoreId(
    storeId: string,
    queryParams?: {
      end?: string | null
      limit?: number
      offset?: number
      sortBy?: string | null
      start?: string | null
      success?: boolean | null
    }
  ): Promise<AxiosResponse<ImportStoreHistoryPagingResult>> {
    const $ = new StoreAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getImportHistory_ByStoreId(storeId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to list stores in a namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of stores&lt;/li&gt;&lt;/ul&gt;
     */
    getStores,
    /**
     * This API is used to create a non published store in a namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created store data&lt;/li&gt;&lt;/ul&gt;
     */
    createStore,
    /**
     * @deprecated
     * This API is used to import a store.&lt;p&gt;This api has been deprecated, pls use /v2/admin/namespaces/{namespace}/stores/import to import store.&lt;br&gt;
     */
    updateStoreImport,
    /**
     * Get catalog config.
     */
    getCatalogConfigs,
    /**
     * Update catalog config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated catalog config&lt;/li&gt;&lt;/ul&gt;
     */
    updateCatalogConfig,
    /**
     * This API is used to delete a store. Only non published store can be deleted.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: store&lt;/li&gt;&lt;/ul&gt;
     */
    deleteStore_ByStoreId,
    /**
     * This API is used to get a store.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: store data&lt;/li&gt;&lt;/ul&gt;
     */
    getStore_ByStoreId,
    /**
     * This API is used to Update a store basic info.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated store data&lt;/li&gt;&lt;/ul&gt;
     */
    updateStore_ByStoreId,
    /**
     * This API is used to delete published store including category and items before release to public.&lt;p&gt;&lt;b&gt;Warning: Please do not use this API once published to public user.&lt;/b&gt;
     */
    deleteStorePublished,
    /**
     * This API is used to get a published store basic info, exclude category and item information.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: store data&lt;/li&gt;&lt;/ul&gt;
     */
    getStoresPublished,
    /**
     * This API is used to import a store.
     */
    updateStoreImport_v2,
    /**
     * This API is used to export a store to CSV format
     */
    createStoreExportByCsv,
    /**
     * This API is used to clone a store. Usually clone a draft store to published store because published store can&#39;t directly edit content.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: clone store info&lt;/li&gt;&lt;/ul&gt;
     */
    updateClone_ByStoreId,
    /**
     * @deprecated
     * This API is used to export a store.&lt;p&gt;This api has been deprecated, pls use /v2/admin/namespaces/{namespace}/stores/export to export store.&lt;br&gt;
     */
    getExport_ByStoreId,
    /**
     * This API is used to get a store&#39;s backup. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: store backup info&lt;/li&gt;&lt;/ul&gt;
     */
    getStoresPublishedBackup,
    /**
     * This API is used to get catalog definition for import/export store by CSV&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: catalog definition&lt;/li&gt;&lt;/ul&gt;
     */
    getStoresCatalogDefinition,
    /**
     * This API is used to rollback a published store. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated store info&lt;/li&gt;&lt;/ul&gt;
     */
    updateStorePublishedRollback,
    /**
     * This API is used to export a whole or partial store.
     */
    createExport_ByStoreId_v2,
    /**
     * This API is used to download store csv templates for store importing by CSV feature
     */
    getStoresDownloadCsvTemplates,
    /**
     * This API is used to import a store by CSV format.
     */
    createImportByCsv_ByStoreId,
    /**
     * This API is used to query import store history
     */
    getImportHistory_ByStoreId
  }
}
