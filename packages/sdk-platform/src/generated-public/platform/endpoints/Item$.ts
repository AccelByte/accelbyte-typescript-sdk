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
   * This API is used to get the item by sku.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: the item with sku</li></ul>
   */
  getItemsBySku(queryParams: {
    storeId?: string | null
    sku: string | null
    language?: string | null
    region?: string | null
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
   * This API is used to search items by keyword in title, description and long description, It's language constrained, also if item not exist in specific region, default region item will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: the list of items</li></ul>
   */
  getItemsSearch(queryParams: {
    storeId?: string | null
    language: string | null
    keyword: string | null
    itemType?:
      | 'APP'
      | 'COINS'
      | 'INGAMEITEM'
      | 'BUNDLE'
      | 'CODE'
      | 'SUBSCRIPTION'
      | 'SEASON'
      | 'MEDIA'
      | 'OPTIONBOX'
      | 'EXTENSION'
      | 'LOOTBOX'
    region?: string | null
    offset?: number
    limit?: number
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
   * This API is used to get item by appId.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: the item with that appId</li></ul>
   */
  getItemsByAppId(queryParams: {
    storeId?: string | null
    appId: string | null
    language?: string | null
    region?: string | null
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
   * This API is used to query items by criteria within a store. If item not exist in specific region, default region item will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: the list of items</li></ul>
   */
  getItemsByCriteria(queryParams?: {
    storeId?: string | null
    language?: string | null
    region?: string | null
    categoryPath?: string | null
    includeSubCategoryItem?: boolean | null
    itemType?:
      | 'APP'
      | 'COINS'
      | 'INGAMEITEM'
      | 'BUNDLE'
      | 'CODE'
      | 'SUBSCRIPTION'
      | 'SEASON'
      | 'MEDIA'
      | 'OPTIONBOX'
      | 'EXTENSION'
      | 'LOOTBOX'
    appType?: 'GAME' | 'SOFTWARE' | 'DLC' | 'DEMO'
    baseAppId?: string | null
    tags?: string | null
    features?: string | null
    offset?: number
    limit?: number
    sortBy?: string | null
  }): Promise<IResponseWithSync<ItemPagingSlicedResult>> {
    const params = { limit: 20, sortBy: 'name:asc,displayOrder:asc', ...queryParams } as SDKRequestConfig
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
   * This API is used to bulk get locale items. If item not exist in specific region, default region item will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store items)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store items)</li><li><i>Returns</i>: the list of items info</li></ul>
   */
  getItemsLocaleByIds(queryParams: {
    storeId?: string | null
    itemIds: string | null
    region?: string | null
    language?: string | null
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
   * This API is used to get an item in locale. If item not exist in specific region, default region item will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: item data</li></ul>
   */
  getLocale_ByItemId(
    itemId: string,
    queryParams?: { storeId?: string | null; region?: string | null; language?: string | null; populateBundle?: boolean | null }
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
   * Get item dynamic data for a published item.<br>Other detail info: <ul><li><i>Returns</i>: item dynamic data</li></ul>
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
   * This API is used to get an app in locale. If app not exist in specific region, default region app will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store app)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store app)</li><li><i>Returns</i>: app data</li></ul>
   */
  getAppLocale_ByItemId(
    itemId: string,
    queryParams?: { storeId?: string | null; region?: string | null; language?: string | null }
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
