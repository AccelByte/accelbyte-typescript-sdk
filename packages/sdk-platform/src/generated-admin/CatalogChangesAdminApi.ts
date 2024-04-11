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
import { CatalogChangePagingResult } from '../generated-definitions/CatalogChangePagingResult.js'
import { CatalogChangeStatistics } from '../generated-definitions/CatalogChangeStatistics.js'
import { CatalogChangesAdmin$ } from './endpoints/CatalogChangesAdmin$.js'
import { StoreInfo } from '../generated-definitions/StoreInfo.js'

export function CatalogChangesAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Select all changes.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCatalogChangeSelectAll_ByStoreId(storeId: string): Promise<unknown> {
    const $ = new CatalogChangesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateCatalogChangeSelectAll_ByStoreId(storeId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to query changes .&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the pagination of changes&lt;/li&gt;&lt;/ul&gt;
   */
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
  ): Promise<CatalogChangePagingResult> {
    const $ = new CatalogChangesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getCatalogChangesByCriteria_ByStoreId(storeId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to publish all unpublished changes.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCatalogChangePublishAll_ByStoreId(storeId: string): Promise<StoreInfo> {
    const $ = new CatalogChangesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateCatalogChangePublishAll_ByStoreId(storeId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to query catalog changes statistics .&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: catalog changes statistics changes&lt;/li&gt;&lt;/ul&gt;
   */
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
  ): Promise<CatalogChangeStatistics> {
    const $ = new CatalogChangesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getCatalogChangesStatistics_ByStoreId(storeId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Unselect all change.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCatalogChangeUnselectAll_ByStoreId(storeId: string): Promise<unknown> {
    const $ = new CatalogChangesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateCatalogChangeUnselectAll_ByStoreId(storeId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to publish selected unpublished changes.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCatalogChangePublishSelected_ByStoreId(storeId: string): Promise<StoreInfo> {
    const $ = new CatalogChangesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateCatalogChangePublishSelected_ByStoreId(storeId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Select a change, it will be included when partial publish.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateSelect_ByStoreId_ByChangeId(storeId: string, changeId: string): Promise<unknown> {
    const $ = new CatalogChangesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateSelect_ByStoreId_ByChangeId(storeId, changeId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Unselect a change, it will not be included when partial publish.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateUnselect_ByStoreId_ByChangeId(storeId: string, changeId: string): Promise<unknown> {
    const $ = new CatalogChangesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateUnselect_ByStoreId_ByChangeId(storeId, changeId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Select all changes by criteria&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
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
  ): Promise<unknown> {
    const $ = new CatalogChangesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateCatalogChangeSelectAllByCriteria_ByStoreId(storeId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    updateCatalogChangeSelectAll_ByStoreId,
    getCatalogChangesByCriteria_ByStoreId,
    updateCatalogChangePublishAll_ByStoreId,
    getCatalogChangesStatistics_ByStoreId,
    updateCatalogChangeUnselectAll_ByStoreId,
    updateCatalogChangePublishSelected_ByStoreId,
    updateSelect_ByStoreId_ByChangeId,
    updateUnselect_ByStoreId_ByChangeId,
    updateCatalogChangeSelectAllByCriteria_ByStoreId
  }
}
