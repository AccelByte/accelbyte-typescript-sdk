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
import { CatalogChangePagingResult } from '../../generated-definitions/CatalogChangePagingResult.js'
import { CatalogChangeStatistics } from '../../generated-definitions/CatalogChangeStatistics.js'
import { StoreInfo } from '../../generated-definitions/StoreInfo.js'

export class CatalogChangesAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Select all changes.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  updateCatalogChangeSelectAll_ByStoreId(storeId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/catalogChanges/selectAll'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to query changes .&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the pagination of changes&lt;/li&gt;&lt;/ul&gt;
   */
  getCatalogChangesByCriteria_ByStoreId(
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
  ): Promise<IResponseWithSync<CatalogChangePagingResult>> {
    const params = { limit: 20, sortBy: ['updatedAt:desc'], status: 'UNPUBLISHED', ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/catalogChanges/byCriteria'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, CatalogChangePagingResult, 'CatalogChangePagingResult')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to publish all unpublished changes.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/ul&gt;
   */
  updateCatalogChangePublishAll_ByStoreId(storeId: string): Promise<IResponse<StoreInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/catalogChanges/publishAll'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, StoreInfo, 'StoreInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to query catalog changes statistics .&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: catalog changes statistics changes&lt;/li&gt;&lt;/ul&gt;
   */
  getCatalogChangesStatistics_ByStoreId(
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
  ): Promise<IResponseWithSync<CatalogChangeStatistics>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/catalogChanges/statistics'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, CatalogChangeStatistics, 'CatalogChangeStatistics')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Unselect all change.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  updateCatalogChangeUnselectAll_ByStoreId(storeId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/catalogChanges/unselectAll'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to publish selected unpublished changes.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/ul&gt;
   */
  updateCatalogChangePublishSelected_ByStoreId(storeId: string): Promise<IResponse<StoreInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/catalogChanges/publishSelected'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, StoreInfo, 'StoreInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Select a change, it will be included when partial publish.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  updateSelect_ByStoreId_ByChangeId(storeId: string, changeId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/catalogChanges/{changeId}/select'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
      .replace('{changeId}', changeId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Unselect a change, it will not be included when partial publish.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  updateUnselect_ByStoreId_ByChangeId(storeId: string, changeId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/catalogChanges/{changeId}/unselect'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
      .replace('{changeId}', changeId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Select all changes by criteria&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  updateCatalogChangeSelectAllByCriteria_ByStoreId(
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
  ): Promise<IResponse<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/catalogChanges/selectAllByCriteria'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
