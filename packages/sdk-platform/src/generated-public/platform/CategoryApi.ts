/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { Category$ } from './endpoints/Category$'
import { CategoryInfo } from './definitions/CategoryInfo'
import { CategoryInfoArray } from './definitions/CategoryInfoArray'
import { HierarchicalCategoryInfoArray } from './definitions/HierarchicalCategoryInfoArray'

export function CategoryApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This API is used to get root categories.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Returns</i>: root category data</li></ul>
   */
  async function getCategories(queryParams?: { storeId?: string | null; language?: string | null }): Promise<CategoryInfoArray> {
    const $ = new Category$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getCategories(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to download store's structured categories.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store content)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store content)</li><li><i>Returns</i>: structured categories</li></ul>
   */
  async function getCategoriesDownload(queryParams?: {
    storeId?: string | null
    language?: string | null
  }): Promise<HierarchicalCategoryInfoArray> {
    const $ = new Category$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getCategoriesDownload(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get category by category path.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1 (CREATE)(user with this permission can view draft store category)</li><li><i>Returns</i>: category data</li></ul>
   */
  async function getCategory_ByCategoryPath(
    categoryPath: string,
    queryParams?: { storeId?: string | null; language?: string | null }
  ): Promise<CategoryInfo> {
    const $ = new Category$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getCategory_ByCategoryPath(categoryPath, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get child categories by category path.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Returns</i>: list of child categories data</li></ul>
   */
  async function getChildren_ByCategoryPath(
    categoryPath: string,
    queryParams?: { storeId?: string | null; language?: string | null }
  ): Promise<CategoryInfoArray> {
    const $ = new Category$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getChildren_ByCategoryPath(categoryPath, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get descendant categories by category path.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store category)</li><li><i>Returns</i>: list of descendant categories data</li></ul>
   */
  async function getDescendants_ByCategoryPath(
    categoryPath: string,
    queryParams?: { language?: string | null; storeId?: string | null }
  ): Promise<CategoryInfoArray> {
    const $ = new Category$(Network.create(requestConfig), namespace, cache)
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
