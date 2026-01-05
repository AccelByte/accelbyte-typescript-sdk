/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { CategoryAdminApi } from '../CategoryAdminApi.js'

import { BasicCategoryInfoArray } from '../../generated-definitions/BasicCategoryInfoArray.js'
import { CategoryCreate } from '../../generated-definitions/CategoryCreate.js'
import { CategoryUpdate } from '../../generated-definitions/CategoryUpdate.js'
import { FullCategoryInfo } from '../../generated-definitions/FullCategoryInfo.js'
import { FullCategoryInfoArray } from '../../generated-definitions/FullCategoryInfoArray.js'

export enum Key_CategoryAdmin {
  Categories = 'Platform.CategoryAdmin.Categories',
  Category = 'Platform.CategoryAdmin.Category',
  CategoriesBasic = 'Platform.CategoryAdmin.CategoriesBasic',
  Category_ByCategoryPath = 'Platform.CategoryAdmin.Category_ByCategoryPath',
  Children_ByCategoryPath = 'Platform.CategoryAdmin.Children_ByCategoryPath',
  Descendants_ByCategoryPath = 'Platform.CategoryAdmin.Descendants_ByCategoryPath'
}

/**
 * This API is used to get root categories.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: root category data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CategoryAdmin.Categories, input]
 * }
 * ```
 */
export const useCategoryAdminApi_GetCategories = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullCategoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FullCategoryInfoArray>) => void
): UseQueryResult<FullCategoryInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCategoryAdminApi_GetCategories>[1]) => async () => {
    const response = await CategoryAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getCategories(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<FullCategoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_CategoryAdmin.Categories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to create category.&lt;p&gt;A category is a path separated by &#34;/&#34;. A category also has localized display names. Example:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;categoryPath&#34;: &#34;/games&#34;, &#34;localizationDisplayNames&#34;: \{&#34;en&#34; : &#34;Games&#34;} }&lt;/code&gt;&lt;/pre&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created category data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CategoryAdmin.Category, input]
 * }
 * ```
 */
export const useCategoryAdminApi_CreateCategoryMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      FullCategoryInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: CategoryCreate; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullCategoryInfo) => void
): UseMutationResult<
  FullCategoryInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: CategoryCreate; queryParams: { storeId: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CategoryCreate; queryParams: { storeId: string | null } }) => {
    const response = await CategoryAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createCategory(
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_CategoryAdmin.Category],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to list all categories&#39; basic info of a store ordered by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of categories&#39; paths&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CategoryAdmin.CategoriesBasic, input]
 * }
 * ```
 */
export const useCategoryAdminApi_GetCategoriesBasic = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { storeId?: string | null } },
  options?: Omit<UseQueryOptions<BasicCategoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BasicCategoryInfoArray>) => void
): UseQueryResult<BasicCategoryInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCategoryAdminApi_GetCategoriesBasic>[1]) => async () => {
    const response = await CategoryAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getCategoriesBasic(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<BasicCategoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_CategoryAdmin.CategoriesBasic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to delete category by category path. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the deleted category data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CategoryAdmin.Category_ByCategoryPath, input]
 * }
 * ```
 */
export const useCategoryAdminApi_DeleteCategory_ByCategoryPathMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      FullCategoryInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { categoryPath: string; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullCategoryInfo) => void
): UseMutationResult<
  FullCategoryInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { categoryPath: string; queryParams: { storeId: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { categoryPath: string; queryParams: { storeId: string | null } }) => {
    const response = await CategoryAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteCategory_ByCategoryPath(input.categoryPath, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_CategoryAdmin.Category_ByCategoryPath],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to get category by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: category data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CategoryAdmin.Category_ByCategoryPath, input]
 * }
 * ```
 */
export const useCategoryAdminApi_GetCategory_ByCategoryPath = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { categoryPath: string; queryParams?: { storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullCategoryInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FullCategoryInfo>) => void
): UseQueryResult<FullCategoryInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCategoryAdminApi_GetCategory_ByCategoryPath>[1]) => async () => {
    const response = await CategoryAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getCategory_ByCategoryPath(input.categoryPath, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<FullCategoryInfo, AxiosError<ApiError>>({
    queryKey: [Key_CategoryAdmin.Category_ByCategoryPath, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to update category. &lt;p&gt; The category update data is a category object, example as:&lt;pre&gt;&lt;code&gt;{ &#34;storeId&#34;: &#34;store-id&#34;, &#34;localizationDisplayNames&#34;: {&#34;en&#34; : &#34;Games&#34;} }&lt;/code&gt;&lt;/pre&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the updated category data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CategoryAdmin.Category_ByCategoryPath, input]
 * }
 * ```
 */
export const useCategoryAdminApi_UpdateCategory_ByCategoryPathMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      FullCategoryInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { categoryPath: string; data: CategoryUpdate; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullCategoryInfo) => void
): UseMutationResult<
  FullCategoryInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { categoryPath: string; data: CategoryUpdate; queryParams: { storeId: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { categoryPath: string; data: CategoryUpdate; queryParams: { storeId: string | null } }
  ) => {
    const response = await CategoryAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateCategory_ByCategoryPath(input.categoryPath, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_CategoryAdmin.Category_ByCategoryPath],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to get child categories by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of child categories data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CategoryAdmin.Children_ByCategoryPath, input]
 * }
 * ```
 */
export const useCategoryAdminApi_GetChildren_ByCategoryPath = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { categoryPath: string; queryParams?: { storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullCategoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FullCategoryInfoArray>) => void
): UseQueryResult<FullCategoryInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCategoryAdminApi_GetChildren_ByCategoryPath>[1]) => async () => {
    const response = await CategoryAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getChildren_ByCategoryPath(input.categoryPath, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<FullCategoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_CategoryAdmin.Children_ByCategoryPath, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get descendant categories by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of descendant categories data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CategoryAdmin.Descendants_ByCategoryPath, input]
 * }
 * ```
 */
export const useCategoryAdminApi_GetDescendants_ByCategoryPath = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { categoryPath: string; queryParams?: { storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullCategoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FullCategoryInfoArray>) => void
): UseQueryResult<FullCategoryInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCategoryAdminApi_GetDescendants_ByCategoryPath>[1]) => async () => {
    const response = await CategoryAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getDescendants_ByCategoryPath(input.categoryPath, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<FullCategoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_CategoryAdmin.Descendants_ByCategoryPath, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
