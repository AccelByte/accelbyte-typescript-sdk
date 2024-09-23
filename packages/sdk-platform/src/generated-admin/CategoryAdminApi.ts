/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { BasicCategoryInfoArray } from '../generated-definitions/BasicCategoryInfoArray.js'
import { CategoryCreate } from '../generated-definitions/CategoryCreate.js'
import { CategoryUpdate } from '../generated-definitions/CategoryUpdate.js'
import { FullCategoryInfo } from '../generated-definitions/FullCategoryInfo.js'
import { FullCategoryInfoArray } from '../generated-definitions/FullCategoryInfoArray.js'
import { CategoryAdmin$ } from './endpoints/CategoryAdmin$.js'

export function CategoryAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getCategories(queryParams?: { storeId?: string | null }): Promise<AxiosResponse<FullCategoryInfoArray>> {
    const $ = new CategoryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCategories(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createCategory(data: CategoryCreate, queryParams: { storeId: string | null }): Promise<AxiosResponse<FullCategoryInfo>> {
    const $ = new CategoryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createCategory(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCategoriesBasic(queryParams?: { storeId?: string | null }): Promise<AxiosResponse<BasicCategoryInfoArray>> {
    const $ = new CategoryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCategoriesBasic(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteCategory_ByCategoryPath(
    categoryPath: string,
    queryParams: { storeId: string | null }
  ): Promise<AxiosResponse<FullCategoryInfo>> {
    const $ = new CategoryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteCategory_ByCategoryPath(categoryPath, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCategory_ByCategoryPath(
    categoryPath: string,
    queryParams?: { storeId?: string | null }
  ): Promise<AxiosResponse<FullCategoryInfo>> {
    const $ = new CategoryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCategory_ByCategoryPath(categoryPath, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateCategory_ByCategoryPath(
    categoryPath: string,
    data: CategoryUpdate,
    queryParams: { storeId: string | null }
  ): Promise<AxiosResponse<FullCategoryInfo>> {
    const $ = new CategoryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCategory_ByCategoryPath(categoryPath, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getChildren_ByCategoryPath(
    categoryPath: string,
    queryParams?: { storeId?: string | null }
  ): Promise<AxiosResponse<FullCategoryInfoArray>> {
    const $ = new CategoryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChildren_ByCategoryPath(categoryPath, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDescendants_ByCategoryPath(
    categoryPath: string,
    queryParams?: { storeId?: string | null }
  ): Promise<AxiosResponse<FullCategoryInfoArray>> {
    const $ = new CategoryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDescendants_ByCategoryPath(categoryPath, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to get root categories.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: root category data&lt;/li&gt;&lt;/ul&gt;
     */
    getCategories,
    /**
     * This API is used to create category.&lt;p&gt;A category is a path separated by &#34;/&#34;. A category also has localized display names. Example:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;categoryPath&#34;: &#34;/games&#34;, &#34;localizationDisplayNames&#34;: \{&#34;en&#34; : &#34;Games&#34;} }&lt;/code&gt;&lt;/pre&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created category data&lt;/li&gt;&lt;/ul&gt;
     */
    createCategory,
    /**
     * This API is used to list all categories&#39; basic info of a store ordered by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of categories&#39; paths&lt;/li&gt;&lt;/ul&gt;
     */
    getCategoriesBasic,
    /**
     * This API is used to delete category by category path. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the deleted category data&lt;/li&gt;&lt;/ul&gt;
     */
    deleteCategory_ByCategoryPath,
    /**
     * This API is used to get category by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: category data&lt;/li&gt;&lt;/ul&gt;
     */
    getCategory_ByCategoryPath,
    /**
     * This API is used to update category. &lt;p&gt; The category update data is a category object, example as:&lt;pre&gt;&lt;code&gt;{ &#34;storeId&#34;: &#34;store-id&#34;, &#34;localizationDisplayNames&#34;: {&#34;en&#34; : &#34;Games&#34;} }&lt;/code&gt;&lt;/pre&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the updated category data&lt;/li&gt;&lt;/ul&gt;
     */
    updateCategory_ByCategoryPath,
    /**
     * This API is used to get child categories by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of child categories data&lt;/li&gt;&lt;/ul&gt;
     */
    getChildren_ByCategoryPath,
    /**
     * This API is used to get descendant categories by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of descendant categories data&lt;/li&gt;&lt;/ul&gt;
     */
    getDescendants_ByCategoryPath
  }
}
