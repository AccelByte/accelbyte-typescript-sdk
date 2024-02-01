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
import { Category$ } from './endpoints/Category$.js'
import { CategoryInfo } from '../generated-definitions/CategoryInfo.js'
import { CategoryInfoArray } from '../generated-definitions/CategoryInfoArray.js'
import { HierarchicalCategoryInfoArray } from '../generated-definitions/HierarchicalCategoryInfoArray.js'

export function CategoryApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This API is used to get root categories.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: root category data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCategories(queryParams?: { language?: string | null; storeId?: string | null }): Promise<CategoryInfoArray> {
    const $ = new Category$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getCategories(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to download store&#39;s structured categories.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store content)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store content)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: structured categories&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCategoriesDownload(queryParams?: {
    language?: string | null
    storeId?: string | null
  }): Promise<HierarchicalCategoryInfoArray> {
    const $ = new Category$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getCategoriesDownload(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get category by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1 (CREATE)(user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: category data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCategory_ByCategoryPath(
    categoryPath: string,
    queryParams?: { language?: string | null; storeId?: string | null }
  ): Promise<CategoryInfo> {
    const $ = new Category$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getCategory_ByCategoryPath(categoryPath, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get child categories by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of child categories data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getChildren_ByCategoryPath(
    categoryPath: string,
    queryParams?: { language?: string | null; storeId?: string | null }
  ): Promise<CategoryInfoArray> {
    const $ = new Category$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getChildren_ByCategoryPath(categoryPath, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get descendant categories by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of descendant categories data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getDescendants_ByCategoryPath(
    categoryPath: string,
    queryParams?: { language?: string | null; storeId?: string | null }
  ): Promise<CategoryInfoArray> {
    const $ = new Category$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getDescendants_ByCategoryPath(categoryPath, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getCategories,
    getCategoriesDownload,
    getCategory_ByCategoryPath,
    getChildren_ByCategoryPath,
    getDescendants_ByCategoryPath
  }
}
