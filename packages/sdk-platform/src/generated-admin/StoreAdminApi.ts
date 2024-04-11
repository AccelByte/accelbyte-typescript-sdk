/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { CatalogConfigInfo } from '../generated-definitions/CatalogConfigInfo.js'
import { CatalogConfigUpdate } from '../generated-definitions/CatalogConfigUpdate.js'
import { CatalogDefinitionInfoArray } from '../generated-definitions/CatalogDefinitionInfoArray.js'
import { ExportStoreRequest } from '../generated-definitions/ExportStoreRequest.js'
import { ExportStoreToCsvRequest } from '../generated-definitions/ExportStoreToCsvRequest.js'
import { ImportStoreHistoryPagingResult } from '../generated-definitions/ImportStoreHistoryPagingResult.js'
import { ImportStoreResult } from '../generated-definitions/ImportStoreResult.js'
import { StoreAdmin$ } from './endpoints/StoreAdmin$.js'
import { StoreBackupInfo } from '../generated-definitions/StoreBackupInfo.js'
import { StoreCreate } from '../generated-definitions/StoreCreate.js'
import { StoreInfo } from '../generated-definitions/StoreInfo.js'
import { StoreInfoArray } from '../generated-definitions/StoreInfoArray.js'
import { StoreUpdate } from '../generated-definitions/StoreUpdate.js'

export function StoreAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This API is used to list stores in a namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of stores&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStores(): Promise<StoreInfoArray> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getStores()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to create a non published store in a namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created store data&lt;/li&gt;&lt;/ul&gt;
   */
  async function createStore(data: StoreCreate): Promise<StoreInfo> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createStore(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This API is used to import a store.&lt;p&gt;This api has been deprecated, pls use /v2/admin/namespaces/{namespace}/stores/import to import store.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateStoreImport(data: { file?: File }, queryParams?: { storeId?: string | null }): Promise<StoreInfo> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateStoreImport(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get catalog config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;ADMIN:NAMESPACE:{namespace}:STORE&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCatalogConfigs(): Promise<CatalogConfigInfo> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getCatalogConfigs()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update catalog config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:STORE, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated catalog config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCatalogConfig(data: CatalogConfigUpdate): Promise<CatalogConfigInfo> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateCatalogConfig(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to delete a store. Only non published store can be deleted.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=8 (DELETE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: store&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteStore_ByStoreId(storeId: string): Promise<StoreInfo> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteStore_ByStoreId(storeId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get a store.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: store data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStore_ByStoreId(storeId: string): Promise<StoreInfo> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getStore_ByStoreId(storeId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to Update a store basic info.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated store data&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateStore_ByStoreId(storeId: string, data: StoreUpdate): Promise<StoreInfo> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateStore_ByStoreId(storeId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to delete published store including category and items before release to public.&lt;p&gt;&lt;b&gt;Warning: Please do not use this API once published to public user.&lt;/b&gt;&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteStorePublished(): Promise<StoreInfo> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteStorePublished()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get a published store basic info, exclude category and item information.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: store data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStoresPublished(): Promise<StoreInfo> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getStoresPublished()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to import a store.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateStoreImport_ByNS(
    data: { file?: File },
    queryParams?: { storeId?: string | null; strictMode?: boolean | null }
  ): Promise<ImportStoreResult> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateStoreImport_ByNS(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to export a store to CSV format&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function createStoreExportByCsv(data: ExportStoreToCsvRequest): Promise<unknown> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createStoreExportByCsv(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to clone a store. Usually clone a draft store to published store because published store can&#39;t directly edit content.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: clone store info&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateClone_ByStoreId(storeId: string, queryParams?: { targetStoreId?: string | null }): Promise<StoreInfo> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateClone_ByStoreId(storeId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This API is used to export a store.&lt;p&gt;This api has been deprecated, pls use /v2/admin/namespaces/{namespace}/stores/export to export store.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getExport_ByStoreId(storeId: string): Promise<unknown> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getExport_ByStoreId(storeId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get a store&#39;s backup. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: store backup info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStoresPublishedBackup(): Promise<StoreBackupInfo> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getStoresPublishedBackup()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get catalog definition for import/export store by CSV&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:STORE, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: catalog definition&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStoresCatalogDefinition(queryParams: {
    catalogType: 'APP' | 'CATEGORY' | 'ITEM' | 'SECTION' | 'VIEW'
  }): Promise<CatalogDefinitionInfoArray> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getStoresCatalogDefinition(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to rollback a published store. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated store info&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateStorePublishedRollback(): Promise<StoreInfo> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateStorePublishedRollback()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to export a whole or partial store.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function createExport_ByStoreId(storeId: string, data: ExportStoreRequest): Promise<unknown> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createExport_ByStoreId(storeId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to download store csv templates for store importing by CSV feature&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStoresDownloadCsvTemplates(): Promise<unknown> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getStoresDownloadCsvTemplates()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to import a store by CSV format.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function createImportByCsv_ByStoreId(
    storeId: string,
    data: { category?: File; display?: File; item?: File; notes?: string | null; section?: File }
  ): Promise<ImportStoreResult> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createImportByCsv_ByStoreId(storeId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to query import store history&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
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
  ): Promise<ImportStoreHistoryPagingResult> {
    const $ = new StoreAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getImportHistory_ByStoreId(storeId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getStores,
    createStore,
    updateStoreImport,
    getCatalogConfigs,
    updateCatalogConfig,
    deleteStore_ByStoreId,
    getStore_ByStoreId,
    updateStore_ByStoreId,
    deleteStorePublished,
    getStoresPublished,
    updateStoreImport_ByNS,
    createStoreExportByCsv,
    updateClone_ByStoreId,
    getExport_ByStoreId,
    getStoresPublishedBackup,
    getStoresCatalogDefinition,
    updateStorePublishedRollback,
    createExport_ByStoreId,
    getStoresDownloadCsvTemplates,
    createImportByCsv_ByStoreId,
    getImportHistory_ByStoreId
  }
}
