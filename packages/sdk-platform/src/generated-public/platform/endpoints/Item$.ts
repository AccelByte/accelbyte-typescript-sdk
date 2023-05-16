/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { AppInfo } from '../definitions/AppInfo.js'
import { ItemDynamicDataInfo } from '../definitions/ItemDynamicDataInfo.js'
import { ItemInfo } from '../definitions/ItemInfo.js'
import { ItemInfoArray } from '../definitions/ItemInfoArray.js'
import { ItemPagingSlicedResult } from '../definitions/ItemPagingSlicedResult.js'
import { ItemPurchaseConditionValidateRequest } from '../definitions/ItemPurchaseConditionValidateRequest.js'
import { ItemPurchaseConditionValidateResultArray } from '../definitions/ItemPurchaseConditionValidateResultArray.js'
import { PopulatedItemInfo } from '../definitions/PopulatedItemInfo.js'

export class Item$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to get the item by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the item with sku&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsBySku(queryParams: {
    sku: string | null
    language?: string | null
    region?: string | null
    storeId?: string | null
  }): Promise<IResponseWithSync<ItemInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/bySku'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ItemInfo, 'ItemInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to search items by keyword in title, description and long description, It&#39;s language constrained, also if item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsSearch(queryParams: {
    keyword: string | null
    language: string | null
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
    region?: string | null
    storeId?: string | null
  }): Promise<IResponseWithSync<ItemPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/search'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ItemPagingSlicedResult, 'ItemPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get item by appId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the item with that appId&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsByAppId(queryParams: {
    appId: string | null
    language?: string | null
    region?: string | null
    storeId?: string | null
  }): Promise<IResponseWithSync<ItemInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/byAppId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ItemInfo, 'ItemInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to query items by criteria within a store. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsByCriteria(queryParams?: {
    appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'
    baseAppId?: string | null
    categoryPath?: string | null
    features?: string | null
    includeSubCategoryItem?: boolean | null
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
    language?: string | null
    limit?: number
    offset?: number
    region?: string | null
    sortBy?: string[]
    storeId?: string | null
    tags?: string | null
  }): Promise<IResponseWithSync<ItemPagingSlicedResult>> {
    const params = { limit: 20, sortBy: ['name:asc', 'displayOrder:asc'], ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/byCriteria'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ItemPagingSlicedResult, 'ItemPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to bulk get locale items. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store items)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store items)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items info&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsLocaleByIds(queryParams: {
    itemIds: string | null
    language?: string | null
    region?: string | null
    storeId?: string | null
  }): Promise<IResponseWithSync<ItemInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/locale/byIds'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ItemInfoArray, 'ItemInfoArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get an item in locale. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item data&lt;/li&gt;&lt;/ul&gt;
   */
  getLocale_ByItemId(
    itemId: string,
    queryParams?: { language?: string | null; populateBundle?: boolean | null; region?: string | null; storeId?: string | null }
  ): Promise<IResponseWithSync<PopulatedItemInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/{itemId}/locale'
      .replace('{namespace}', this.namespace)
      .replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PopulatedItemInfo, 'PopulatedItemInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get item dynamic data for a published item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item dynamic data&lt;/li&gt;&lt;/ul&gt;
   */
  getDynamic_ByItemId(itemId: string): Promise<IResponseWithSync<ItemDynamicDataInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/{itemId}/dynamic'
      .replace('{namespace}', this.namespace)
      .replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ItemDynamicDataInfo, 'ItemDynamicDataInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get an app in locale. If app not exist in specific region, default region app will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store app)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store app)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: app data&lt;/li&gt;&lt;/ul&gt;
   */
  getAppLocale_ByItemId(
    itemId: string,
    queryParams?: { language?: string | null; region?: string | null; storeId?: string | null }
  ): Promise<IResponseWithSync<AppInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/{itemId}/app/locale'
      .replace('{namespace}', this.namespace)
      .replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, AppInfo, 'AppInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to validate user item purchase condition
   */
  createItemPurchaseConditionValidate(
    data: ItemPurchaseConditionValidateRequest
  ): Promise<IResponse<ItemPurchaseConditionValidateResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/purchase/conditions/validate'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, ItemPurchaseConditionValidateResultArray, 'ItemPurchaseConditionValidateResultArray')
  }
}
