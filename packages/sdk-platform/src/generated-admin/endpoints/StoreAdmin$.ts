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
import { CatalogDefinitionInfoArray } from '../../generated-definitions/CatalogDefinitionInfoArray.js'
import { ExportStoreRequest } from '../../generated-definitions/ExportStoreRequest.js'
import { ExportStoreToCsvRequest } from '../../generated-definitions/ExportStoreToCsvRequest.js'
import { ImportStoreHistoryPagingResult } from '../../generated-definitions/ImportStoreHistoryPagingResult.js'
import { ImportStoreResult } from '../../generated-definitions/ImportStoreResult.js'
import { StoreBackupInfo } from '../../generated-definitions/StoreBackupInfo.js'
import { StoreCreate } from '../../generated-definitions/StoreCreate.js'
import { StoreInfo } from '../../generated-definitions/StoreInfo.js'
import { StoreInfoArray } from '../../generated-definitions/StoreInfoArray.js'
import { StoreUpdate } from '../../generated-definitions/StoreUpdate.js'

export class StoreAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * This API is used to list stores in a namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of stores&lt;/li&gt;&lt;/ul&gt;
   */
  getStores(): Promise<IResponseWithSync<StoreInfoArray>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, StoreInfoArray, 'StoreInfoArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to create a non published store in a namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created store data&lt;/li&gt;&lt;/ul&gt;
   */
  createStore(data: StoreCreate): Promise<IResponse<StoreInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, StoreInfo, 'StoreInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to delete a store. Only non published store can be deleted.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=8 (DELETE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: store&lt;/li&gt;&lt;/ul&gt;
   */
  deleteStore_ByStoreId(storeId: string): Promise<IResponse<StoreInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, StoreInfo, 'StoreInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to get a store.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: store data&lt;/li&gt;&lt;/ul&gt;
   */
  getStore_ByStoreId(storeId: string): Promise<IResponseWithSync<StoreInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, StoreInfo, 'StoreInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to Update a store basic info.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated store data&lt;/li&gt;&lt;/ul&gt;
   */
  updateStore_ByStoreId(storeId: string, data: StoreUpdate): Promise<IResponse<StoreInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, StoreInfo, 'StoreInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to delete published store including category and items before release to public.&lt;p&gt;&lt;b&gt;Warning: Please do not use this API once published to public user.&lt;/b&gt;&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteStorePublished(): Promise<IResponse<StoreInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/published'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, StoreInfo, 'StoreInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to get a published store basic info, exclude category and item information.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: store data&lt;/li&gt;&lt;/ul&gt;
   */
  getStoresPublished(): Promise<IResponseWithSync<StoreInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/published'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, StoreInfo, 'StoreInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to import a store.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  updateStoreImport(
    data: { file?: File },
    queryParams?: { storeId?: string | null; strictMode?: boolean | null }
  ): Promise<IResponse<ImportStoreResult>> {
    const params = { strictMode: true, ...queryParams } as SDKRequestConfig
    const url = '/platform/v2/admin/namespaces/{namespace}/stores/import'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ImportStoreResult, 'ImportStoreResult')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to export a store to CSV format&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  createStoreExportByCsv(data: ExportStoreToCsvRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/exportByCSV'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to clone a store. Usually clone a draft store to published store because published store can&#39;t directly edit content.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: clone store info&lt;/li&gt;&lt;/ul&gt;
   */
  updateClone_ByStoreId(storeId: string, queryParams?: { targetStoreId?: string | null }): Promise<IResponse<StoreInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/clone'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, StoreInfo, 'StoreInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to get a store&#39;s backup. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: store backup info&lt;/li&gt;&lt;/ul&gt;
   */
  getStoresPublishedBackup(): Promise<IResponseWithSync<StoreBackupInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/published/backup'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, StoreBackupInfo, 'StoreBackupInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get catalog definition for import/export store by CSV&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:STORE, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: catalog definition&lt;/li&gt;&lt;/ul&gt;
   */
  getStoresCatalogDefinition(queryParams: {
    catalogType: 'APP' | 'CATEGORY' | 'ITEM' | 'SECTION' | 'VIEW'
  }): Promise<IResponseWithSync<CatalogDefinitionInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/catalogDefinition'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, CatalogDefinitionInfoArray, 'CatalogDefinitionInfoArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to rollback a published store. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated store info&lt;/li&gt;&lt;/ul&gt;
   */
  updateStorePublishedRollback(): Promise<IResponse<StoreInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/published/rollback'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, StoreInfo, 'StoreInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to export a whole or partial store.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  createExport_ByStoreId(storeId: string, data: ExportStoreRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/v2/admin/namespaces/{namespace}/stores/{storeId}/export'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to download store csv templates for store importing by CSV feature&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getStoresDownloadCsvTemplates(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/downloadCSVTemplates'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to import a store by CSV format.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  createImportByCsv_ByStoreId(
    storeId: string,
    data: { category?: File; display?: File; item?: File; notes?: string | null; section?: File }
  ): Promise<IResponse<ImportStoreResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/importByCSV'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ImportStoreResult, 'ImportStoreResult')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to query import store history&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getImportHistory_ByStoreId(
    storeId: string,
    queryParams?: {
      end?: string | null
      limit?: number
      offset?: number
      sortBy?: string | null
      start?: string | null
      success?: boolean | null
    }
  ): Promise<IResponseWithSync<ImportStoreHistoryPagingResult>> {
    const params = { limit: 20, sortBy: 'createdAt:desc', ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/import/history'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ImportStoreHistoryPagingResult, 'ImportStoreHistoryPagingResult')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
