/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { CodeGenUtil } from '@od-web-sdk/utils/CodeGenUtil'
import { SdkCache } from '@od-web-sdk/utils/SdkCache'
import { IResponse, IResponseWithSync, Validate } from '@od-web-sdk/utils/Validate'
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
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  fetchItemsByItemidAppLocale<T = AppInfo>(
    itemId: string,
    queryParams?: { storeId?: string | null; region?: string | null; language?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/items/' + itemId + '/app/locale'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, AppInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchItemsBySku<T = ItemInfo>(queryParams?: {
    storeId?: string | null
    sku: string | null
    language?: string | null
    region?: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/items/bySku'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, ItemInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

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
    const url = '/platform/public/namespaces/' + this.namespace + '/items/search'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, ItemPagingSlicedResult)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchItemsByAppId<T = ItemInfo>(queryParams?: {
    storeId?: string | null
    appId: string | null
    language?: string | null
    region?: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/items/byAppId'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, ItemInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchItemsByItemidLocale<T = PopulatedItemInfo>(
    itemId: string,
    queryParams?: { storeId?: string | null; region?: string | null; language?: string | null; populateBundle?: boolean | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/items/' + itemId + '/locale'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, PopulatedItemInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

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
    const url = '/platform/public/namespaces/' + this.namespace + '/items/byCriteria'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, ItemPagingSlicedResult)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchItemsByItemidDynamic<T = ItemDynamicDataInfo>(itemId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/items/' + itemId + '/dynamic'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, ItemDynamicDataInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postItemsPurchaseConditionsValidate<T = ItemPurchaseConditionValidateResultArray>(
    data: ItemPurchaseConditionValidateRequest
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/items/purchase/conditions/validate'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, ItemPurchaseConditionValidateResultArray)
  }

  fetchItemsLocaleByIds<T = ItemInfoArray>(queryParams?: {
    storeId?: string | null
    itemIds: string | null
    region?: string | null
    language?: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/items/locale/byIds'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, ItemInfoArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }
}
