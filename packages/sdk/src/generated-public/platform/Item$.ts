/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { CodeGenUtil } from '@accelbyte/sdk/utils/CodeGenUtil'
import { SdkCache } from '@accelbyte/sdk/utils/SdkCache'
import { IResponse, IResponseWithSync, Validate } from '@accelbyte/sdk/utils/Validate'
import { AxiosInstance } from 'axios'
import { AppInfo } from './definitions/AppInfo'
import { ItemDynamicDataInfo } from './definitions/ItemDynamicDataInfo'
import { ItemInfo } from './definitions/ItemInfo'
import { ItemInfoArray } from './definitions/ItemInfoArray'
import { ItemPagingSlicedResult } from './definitions/ItemPagingSlicedResult'
/* eslint-disable camelcase */
import { ItemPurchaseConditionValidateRequest } from './definitions/ItemPurchaseConditionValidateRequest'
import { ItemPurchaseConditionValidateResultArray } from './definitions/ItemPurchaseConditionValidateResultArray'
import { PopulatedItemInfo } from './definitions/PopulatedItemInfo'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Item$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to get an app in locale. If app not exist in specific region, default region app will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store app)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store app)</li><li><i>Returns</i>: app data</li></ul>
   */
  fetchItemsByItemidAppLocale<T = AppInfo>(
    itemId: string,
    queryParams?: { storeId?: string | null; region?: string | null; language?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/{itemId}/app/locale'
      .replace('{namespace}', this.namespace)
      .replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, AppInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * This API is used to get the item by sku.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: the item with sku</li></ul>
   */
  fetchItemsBySku<T = ItemInfo>(queryParams?: {
    storeId?: string | null
    sku: string | null
    language?: string | null
    region?: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/bySku'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ItemInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * This API is used to search items by keyword in title, description and long description, It's language constrained, also if item not exist in specific region, default region item will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: the list of items</li></ul>
   */
  fetchItemsSearch<T = ItemPagingSlicedResult>(queryParams?: {
    storeId?: string | null
    language: string | null
    keyword: string | null
    itemType?: string | null
    region?: string | null
    offset?: number
    limit?: number
  }): Promise<IResponseWithSync<T>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/search'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ItemPagingSlicedResult)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * This API is used to get item by appId.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: the item with that appId</li></ul>
   */
  fetchItemsByAppId<T = ItemInfo>(queryParams?: {
    storeId?: string | null
    appId: string | null
    language?: string | null
    region?: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/byAppId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ItemInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * This API is used to get an item in locale. If item not exist in specific region, default region item will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: item data</li></ul>
   */
  fetchItemsByItemidLocale<T = PopulatedItemInfo>(
    itemId: string,
    queryParams?: { storeId?: string | null; region?: string | null; language?: string | null; populateBundle?: boolean | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/{itemId}/locale'
      .replace('{namespace}', this.namespace)
      .replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PopulatedItemInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * This API is used to query items by criteria within a store. If item not exist in specific region, default region item will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: the list of items</li></ul>
   */
  fetchItemsByCriteria<T = ItemPagingSlicedResult>(queryParams?: {
    storeId?: string | null
    language?: string | null
    region?: string | null
    categoryPath?: string | null
    includeSubCategoryItem?: boolean | null
    itemType?: string | null
    appType?: string | null
    baseAppId?: string | null
    tags?: string | null
    features?: string | null
    offset?: number
    limit?: number
    sortBy?: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { limit: 20, sortBy: 'name:asc,displayOrder:asc', ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/byCriteria'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ItemPagingSlicedResult)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Get item dynamic data for a published item.<br>Other detail info: <ul><li><i>Returns</i>: item dynamic data</li></ul>
   */
  fetchItemsByItemidDynamic<T = ItemDynamicDataInfo>(itemId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/{itemId}/dynamic'
      .replace('{namespace}', this.namespace)
      .replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ItemDynamicDataInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * This API is used to validate user item purchase condition
   */
  postItemsPurchaseConditionsValidate<T = ItemPurchaseConditionValidateResultArray>(
    data: ItemPurchaseConditionValidateRequest
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/purchase/conditions/validate'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, ItemPurchaseConditionValidateResultArray)
  }

  /**
   * This API is used to bulk get locale items. If item not exist in specific region, default region item will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store items)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store items)</li><li><i>Returns</i>: the list of items info</li></ul>
   */
  fetchItemsLocaleByIds<T = ItemInfoArray>(queryParams?: {
    storeId?: string | null
    itemIds: string | null
    region?: string | null
    language?: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/locale/byIds'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ItemInfoArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }
}
