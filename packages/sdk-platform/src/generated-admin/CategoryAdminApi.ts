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
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { BasicCategoryInfoArray } from '../generated-definitions/BasicCategoryInfoArray.js'
import { CategoryAdmin$ } from './endpoints/CategoryAdmin$.js'
import { CategoryCreate } from '../generated-definitions/CategoryCreate.js'
import { CategoryUpdate } from '../generated-definitions/CategoryUpdate.js'
import { FullCategoryInfo } from '../generated-definitions/FullCategoryInfo.js'
import { FullCategoryInfoArray } from '../generated-definitions/FullCategoryInfoArray.js'

export function CategoryAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * This API is used to get root categories.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CATEGORY&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: root category data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCategories(queryParams?: { storeId?: string | null }): Promise<FullCategoryInfoArray> {
    const $ = new CategoryAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getCategories(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to create category.&lt;p&gt;A category is a path separated by &#34;/&#34;. A category also has localized display names. Example:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;categoryPath&#34;: &#34;/games&#34;, &#34;localizationDisplayNames&#34;: \{&#34;en&#34; : &#34;Games&#34;} }&lt;/code&gt;&lt;/pre&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CATEGORY&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created category data&lt;/li&gt;&lt;/ul&gt;
   */
  async function createCategory(data: CategoryCreate, queryParams: { storeId: string | null }): Promise<FullCategoryInfo> {
    const $ = new CategoryAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createCategory(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to list all categories&#39; basic info of a store ordered by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CATEGORY&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of categories&#39; paths&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCategoriesBasic(queryParams?: { storeId?: string | null }): Promise<BasicCategoryInfoArray> {
    const $ = new CategoryAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getCategoriesBasic(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to delete category by category path. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CATEGORY&#34;, action=8 (DELETE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the deleted category data&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteCategory_ByCategoryPath(categoryPath: string, queryParams: { storeId: string | null }): Promise<FullCategoryInfo> {
    const $ = new CategoryAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteCategory_ByCategoryPath(categoryPath, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get category by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CATEGORY&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: category data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCategory_ByCategoryPath(categoryPath: string, queryParams?: { storeId?: string | null }): Promise<FullCategoryInfo> {
    const $ = new CategoryAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getCategory_ByCategoryPath(categoryPath, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to update category. &lt;p&gt; The category update data is a category object, example as:&lt;pre&gt;&lt;code&gt;{ &#34;storeId&#34;: &#34;store-id&#34;, &#34;localizationDisplayNames&#34;: {&#34;en&#34; : &#34;Games&#34;} }&lt;/code&gt;&lt;/pre&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CATEGORY&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the updated category data&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCategory_ByCategoryPath(
    categoryPath: string,
    data: CategoryUpdate,
    queryParams: { storeId: string | null }
  ): Promise<FullCategoryInfo> {
    const $ = new CategoryAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateCategory_ByCategoryPath(categoryPath, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get child categories by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CATEGORY&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of child categories data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getChildren_ByCategoryPath(
    categoryPath: string,
    queryParams?: { storeId?: string | null }
  ): Promise<FullCategoryInfoArray> {
    const $ = new CategoryAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getChildren_ByCategoryPath(categoryPath, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get descendant categories by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CATEGORY&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of descendant categories data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getDescendants_ByCategoryPath(
    categoryPath: string,
    queryParams?: { storeId?: string | null }
  ): Promise<FullCategoryInfoArray> {
    const $ = new CategoryAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getDescendants_ByCategoryPath(categoryPath, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getCategories,
    createCategory,
    getCategoriesBasic,
    deleteCategory_ByCategoryPath,
    getCategory_ByCategoryPath,
    updateCategory_ByCategoryPath,
    getChildren_ByCategoryPath,
    getDescendants_ByCategoryPath
  }
}
