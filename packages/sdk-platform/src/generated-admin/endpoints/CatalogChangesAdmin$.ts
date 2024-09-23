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
import { CatalogChangePagingResult } from '../../generated-definitions/CatalogChangePagingResult.js'
import { CatalogChangeStatistics } from '../../generated-definitions/CatalogChangeStatistics.js'
import { StoreInfo } from '../../generated-definitions/StoreInfo.js'

export class CatalogChangesAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Select all changes.
   */
  updateCatalogChangeSelectAll_ByStoreId(storeId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/catalogChanges/selectAll'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to query changes .&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the pagination of changes&lt;/li&gt;&lt;/ul&gt;
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
  ): Promise<Response<CatalogChangePagingResult>> {
    const params = { limit: 20, sortBy: ['updatedAt:desc'], status: 'UNPUBLISHED', ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/catalogChanges/byCriteria'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CatalogChangePagingResult,
      'CatalogChangePagingResult'
    )
  }
  /**
   * This API is used to publish all unpublished changes.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/ul&gt;
   */
  updateCatalogChangePublishAll_ByStoreId(storeId: string): Promise<Response<StoreInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/catalogChanges/publishAll'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StoreInfo, 'StoreInfo')
  }
  /**
   * This API is used to query catalog changes statistics .&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: catalog changes statistics changes&lt;/li&gt;&lt;/ul&gt;
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
  ): Promise<Response<CatalogChangeStatistics>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/catalogChanges/statistics'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CatalogChangeStatistics,
      'CatalogChangeStatistics'
    )
  }
  /**
   * Unselect all change.
   */
  updateCatalogChangeUnselectAll_ByStoreId(storeId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/catalogChanges/unselectAll'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to publish selected unpublished changes.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/ul&gt;
   */
  updateCatalogChangePublishSelected_ByStoreId(storeId: string): Promise<Response<StoreInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/catalogChanges/publishSelected'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StoreInfo, 'StoreInfo')
  }
  /**
   * Select a change, it will be included when partial publish.
   */
  updateSelect_ByStoreId_ByChangeId(storeId: string, changeId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/catalogChanges/{changeId}/select'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
      .replace('{changeId}', changeId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Unselect a change, it will not be included when partial publish.
   */
  updateUnselect_ByStoreId_ByChangeId(storeId: string, changeId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/catalogChanges/{changeId}/unselect'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
      .replace('{changeId}', changeId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Select all changes by criteria
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
  ): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/catalogChanges/selectAllByCriteria'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
