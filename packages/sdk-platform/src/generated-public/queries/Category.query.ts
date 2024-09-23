/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { CategoryApi } from '../CategoryApi.js'

import { CategoryInfo } from '../../generated-definitions/CategoryInfo.js'
import { CategoryInfoArray } from '../../generated-definitions/CategoryInfoArray.js'
import { HierarchicalCategoryInfoArray } from '../../generated-definitions/HierarchicalCategoryInfoArray.js'

export enum Key_Category {
  Categories = 'Platform.Category.Categories',
  CategoriesDownload = 'Platform.Category.CategoriesDownload',
  Category_ByCategoryPath = 'Platform.Category.Category_ByCategoryPath',
  Children_ByCategoryPath = 'Platform.Category.Children_ByCategoryPath',
  Descendants_ByCategoryPath = 'Platform.Category.Descendants_ByCategoryPath'
}

/**
 * This API is used to get root categories.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: root category data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Category.Categories, input]
 * }
 * ```
 */
export const useCategoryApi_GetCategories = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { language?: string | null; storeId?: string | null } },
  options?: Omit<UseQueryOptions<CategoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CategoryInfoArray>) => void
): UseQueryResult<CategoryInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCategoryApi_GetCategories>[1]) => async () => {
    const response = await CategoryApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getCategories(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<CategoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_Category.Categories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to download store&#39;s structured categories.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store content)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store content)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: structured categories&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Category.CategoriesDownload, input]
 * }
 * ```
 */
export const useCategoryApi_GetCategoriesDownload = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { language?: string | null; storeId?: string | null } },
  options?: Omit<UseQueryOptions<HierarchicalCategoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<HierarchicalCategoryInfoArray>) => void
): UseQueryResult<HierarchicalCategoryInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCategoryApi_GetCategoriesDownload>[1]) => async () => {
    const response = await CategoryApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getCategoriesDownload(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<HierarchicalCategoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_Category.CategoriesDownload, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get category by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1 (CREATE)(user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: category data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Category.Category_ByCategoryPath, input]
 * }
 * ```
 */
export const useCategoryApi_GetCategory_ByCategoryPath = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { categoryPath: string; queryParams?: { language?: string | null; storeId?: string | null } },
  options?: Omit<UseQueryOptions<CategoryInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CategoryInfo>) => void
): UseQueryResult<CategoryInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCategoryApi_GetCategory_ByCategoryPath>[1]) => async () => {
    const response = await CategoryApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getCategory_ByCategoryPath(
      input.categoryPath,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<CategoryInfo, AxiosError<ApiError>>({
    queryKey: [Key_Category.Category_ByCategoryPath, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get child categories by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of child categories data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Category.Children_ByCategoryPath, input]
 * }
 * ```
 */
export const useCategoryApi_GetChildren_ByCategoryPath = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { categoryPath: string; queryParams?: { language?: string | null; storeId?: string | null } },
  options?: Omit<UseQueryOptions<CategoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CategoryInfoArray>) => void
): UseQueryResult<CategoryInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCategoryApi_GetChildren_ByCategoryPath>[1]) => async () => {
    const response = await CategoryApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getChildren_ByCategoryPath(
      input.categoryPath,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<CategoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_Category.Children_ByCategoryPath, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get descendant categories by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store category)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of descendant categories data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Category.Descendants_ByCategoryPath, input]
 * }
 * ```
 */
export const useCategoryApi_GetDescendants_ByCategoryPath = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { categoryPath: string; queryParams?: { language?: string | null; storeId?: string | null } },
  options?: Omit<UseQueryOptions<CategoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CategoryInfoArray>) => void
): UseQueryResult<CategoryInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCategoryApi_GetDescendants_ByCategoryPath>[1]) => async () => {
    const response = await CategoryApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getDescendants_ByCategoryPath(
      input.categoryPath,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<CategoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_Category.Descendants_ByCategoryPath, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
