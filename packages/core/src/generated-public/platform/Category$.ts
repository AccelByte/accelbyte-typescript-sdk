/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { CodeGenUtil } from '@od-web-sdk/utils/CodeGenUtil'
import { SdkCache } from '@od-web-sdk/utils/SdkCache'
import { IResponseWithSync, Validate } from '@od-web-sdk/utils/Validate'
import { AxiosInstance } from 'axios'
import { CategoryInfo } from './definitions/CategoryInfo'
/* eslint-disable camelcase */
import { CategoryInfoArray } from './definitions/CategoryInfoArray'
import { HierarchicalCategoryInfoArray } from './definitions/HierarchicalCategoryInfoArray'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Category$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  fetchCategoriesByCategorypathChildren<T = CategoryInfoArray>(
    categoryPath: string,
    queryParams?: { storeId?: string | null; language?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/categories/' + categoryPath + '/children'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, CategoryInfoArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchCategoriesByCategorypath<T = CategoryInfo>(
    categoryPath: string,
    queryParams?: { storeId?: string | null; language?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/categories/' + categoryPath + ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, CategoryInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchCategories<T = CategoryInfoArray>(queryParams?: {
    storeId?: string | null
    language?: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/categories'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, CategoryInfoArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchCategoriesByCategorypathDescendants<T = CategoryInfoArray>(
    categoryPath: string,
    queryParams?: { language?: string | null; storeId?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/categories/' + categoryPath + '/descendants'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, CategoryInfoArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchCategoriesDownload<T = HierarchicalCategoryInfoArray>(queryParams?: {
    storeId?: string | null
    language?: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/categories/download'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, HierarchicalCategoryInfoArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }
}
