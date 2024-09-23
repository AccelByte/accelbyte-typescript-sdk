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
import { CategoryInfo } from '../generated-definitions/CategoryInfo.js'
import { CategoryInfoArray } from '../generated-definitions/CategoryInfoArray.js'
import { HierarchicalCategoryInfoArray } from '../generated-definitions/HierarchicalCategoryInfoArray.js'
import { Category$ } from './endpoints/Category$.js'

export function CategoryApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getCategories(queryParams?: {
    language?: string | null
    storeId?: string | null
  }): Promise<AxiosResponse<CategoryInfoArray>> {
    const $ = new Category$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCategories(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCategoriesDownload(queryParams?: {
    language?: string | null
    storeId?: string | null
  }): Promise<AxiosResponse<HierarchicalCategoryInfoArray>> {
    const $ = new Category$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCategoriesDownload(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCategory_ByCategoryPath(
    categoryPath: string,
    queryParams?: { language?: string | null; storeId?: string | null }
  ): Promise<AxiosResponse<CategoryInfo>> {
    const $ = new Category$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCategory_ByCategoryPath(categoryPath, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getChildren_ByCategoryPath(
    categoryPath: string,
    queryParams?: { language?: string | null; storeId?: string | null }
  ): Promise<AxiosResponse<CategoryInfoArray>> {
    const $ = new Category$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChildren_ByCategoryPath(categoryPath, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDescendants_ByCategoryPath(
    categoryPath: string,
    queryParams?: { language?: string | null; storeId?: string | null }
  ): Promise<AxiosResponse<CategoryInfoArray>> {
    const $ = new Category$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDescendants_ByCategoryPath(categoryPath, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to get root categories.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: root category data&lt;/li&gt;&lt;/ul&gt;
     */
    getCategories,
    /**
     * This API is used to download store&#39;s structured categories.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store content)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store content)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: structured categories&lt;/li&gt;&lt;/ul&gt;
     */
    getCategoriesDownload,
    /**
     * This API is used to get category by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1 (CREATE)(user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: category data&lt;/li&gt;&lt;/ul&gt;
     */
    getCategory_ByCategoryPath,
    /**
     * This API is used to get child categories by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of child categories data&lt;/li&gt;&lt;/ul&gt;
     */
    getChildren_ByCategoryPath,
    /**
     * This API is used to get descendant categories by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of descendant categories data&lt;/li&gt;&lt;/ul&gt;
     */
    getDescendants_ByCategoryPath
  }
}
