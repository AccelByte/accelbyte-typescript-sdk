/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { CategoryInfo } from '../definitions/CategoryInfo'
import { CategoryInfoArray } from '../definitions/CategoryInfoArray'
import { HierarchicalCategoryInfoArray } from '../definitions/HierarchicalCategoryInfoArray'

export class Category$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to get root categories.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Returns</i>: root category data</li></ul>
   */
  getCategories(queryParams?: { storeId?: string | null; language?: string | null }): Promise<IResponseWithSync<CategoryInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/categories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, CategoryInfoArray, 'CategoryInfoArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to download store's structured categories.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store content)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store content)</li><li><i>Returns</i>: structured categories</li></ul>
   */
  getCategoriesDownload(queryParams?: {
    storeId?: string | null
    language?: string | null
  }): Promise<IResponseWithSync<HierarchicalCategoryInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/categories/download'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, HierarchicalCategoryInfoArray, 'HierarchicalCategoryInfoArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get category by category path.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1 (CREATE)(user with this permission can view draft store category)</li><li><i>Returns</i>: category data</li></ul>
   */
  getCategory_ByCategoryPath(
    categoryPath: string,
    queryParams?: { storeId?: string | null; language?: string | null }
  ): Promise<IResponseWithSync<CategoryInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/categories/{categoryPath}'
      .replace('{namespace}', this.namespace)
      .replace('{categoryPath}', categoryPath)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, CategoryInfo, 'CategoryInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get child categories by category path.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Returns</i>: list of child categories data</li></ul>
   */
  getChildren_ByCategoryPath(
    categoryPath: string,
    queryParams?: { storeId?: string | null; language?: string | null }
  ): Promise<IResponseWithSync<CategoryInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/categories/{categoryPath}/children'
      .replace('{namespace}', this.namespace)
      .replace('{categoryPath}', categoryPath)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, CategoryInfoArray, 'CategoryInfoArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get descendant categories by category path.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Returns</i>: list of descendant categories data</li></ul>
   */
  getDescendants_ByCategoryPath(
    categoryPath: string,
    queryParams?: { language?: string | null; storeId?: string | null }
  ): Promise<IResponseWithSync<CategoryInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/categories/{categoryPath}/descendants'
      .replace('{namespace}', this.namespace)
      .replace('{categoryPath}', categoryPath)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, CategoryInfoArray, 'CategoryInfoArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}