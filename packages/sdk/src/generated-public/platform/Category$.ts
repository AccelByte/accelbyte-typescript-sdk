/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { CategoryInfo } from './definitions/CategoryInfo'
import { CategoryInfoArray } from './definitions/CategoryInfoArray'
import { HierarchicalCategoryInfoArray } from './definitions/HierarchicalCategoryInfoArray'

export class Category$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to get root categories.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Returns</i>: root category data</li></ul>
   */
  fetchCategories<T = CategoryInfoArray>(queryParams?: {
    storeId?: string | null
    language?: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/categories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, CategoryInfoArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to download store's structured categories.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store content)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store content)</li><li><i>Returns</i>: structured categories</li></ul>
   */
  fetchCategoriesDownload<T = HierarchicalCategoryInfoArray>(queryParams?: {
    storeId?: string | null
    language?: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/categories/download'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, HierarchicalCategoryInfoArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get category by category path.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1 (CREATE)(user with this permission can view draft store category)</li><li><i>Returns</i>: category data</li></ul>
   */
  fetchCategory_ByCategoryPath<T = CategoryInfo>(
    categoryPath: string,
    queryParams?: { storeId?: string | null; language?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/categories/{categoryPath}'
      .replace('{namespace}', this.namespace)
      .replace('{categoryPath}', categoryPath)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, CategoryInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get child categories by category path.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Returns</i>: list of child categories data</li></ul>
   */
  fetchChildren_ByCategoryPath<T = CategoryInfoArray>(
    categoryPath: string,
    queryParams?: { storeId?: string | null; language?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/categories/{categoryPath}/children'
      .replace('{namespace}', this.namespace)
      .replace('{categoryPath}', categoryPath)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, CategoryInfoArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get descendant categories by category path.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Returns</i>: list of descendant categories data</li></ul>
   */
  fetchDescendants_ByCategoryPath<T = CategoryInfoArray>(
    categoryPath: string,
    queryParams?: { language?: string | null; storeId?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/categories/{categoryPath}/descendants'
      .replace('{namespace}', this.namespace)
      .replace('{categoryPath}', categoryPath)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, CategoryInfoArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
