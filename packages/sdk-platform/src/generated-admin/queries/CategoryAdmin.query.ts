/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiError } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { CategoryAdminApi } from '../CategoryAdminApi.js'

import { BasicCategoryInfoArray } from '../../generated-definitions/BasicCategoryInfoArray.js'
import { CategoryCreate } from '../../generated-definitions/CategoryCreate.js'
import { CategoryUpdate } from '../../generated-definitions/CategoryUpdate.js'
import { FullCategoryInfo } from '../../generated-definitions/FullCategoryInfo.js'
import { FullCategoryInfoArray } from '../../generated-definitions/FullCategoryInfoArray.js'

export enum Key_CategoryAdmin {
  Categories = 'CategoryAdmin.Categories',
  Category = 'CategoryAdmin.Category',
  CategoriesBasic = 'CategoryAdmin.CategoriesBasic',
  Category_ByCategoryPath = 'CategoryAdmin.Category_ByCategoryPath',
  Children_ByCategoryPath = 'CategoryAdmin.Children_ByCategoryPath',
  Descendants_ByCategoryPath = 'CategoryAdmin.Descendants_ByCategoryPath'
}

export const useAdmCategories = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullCategoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FullCategoryInfoArray) => void
): UseQueryResult<FullCategoryInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCategories>[1]) => async () => {
    const data = await CategoryAdminApi(sdk, { namespace: input.namespace }).getCategories(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<FullCategoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_CategoryAdmin.Categories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateCategoryMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<FullCategoryInfo, AxiosError<ApiError>, ApiArgs & { data: CategoryCreate; queryParams: { storeId: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: FullCategoryInfo) => void
): UseMutationResult<
  FullCategoryInfo,
  AxiosError<ApiError>,
  ApiArgs & { data: CategoryCreate; queryParams: { storeId: string | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CategoryCreate; queryParams: { storeId: string | null } }) => {
    const data = await CategoryAdminApi(sdk, { namespace: input.namespace, config: input.config }).createCategory(
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CategoryAdmin.Category],
    mutationFn,
    ...options
  })
}

export const useAdmCategoriesBasic = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { storeId?: string | null } },
  options?: Omit<UseQueryOptions<BasicCategoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: BasicCategoryInfoArray) => void
): UseQueryResult<BasicCategoryInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCategoriesBasic>[1]) => async () => {
    const data = await CategoryAdminApi(sdk, { namespace: input.namespace }).getCategoriesBasic(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<BasicCategoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_CategoryAdmin.CategoriesBasic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteCategory_ByCategoryPathMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<FullCategoryInfo, AxiosError<ApiError>, ApiArgs & { categoryPath: string; queryParams: { storeId: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: FullCategoryInfo) => void
): UseMutationResult<
  FullCategoryInfo,
  AxiosError<ApiError>,
  ApiArgs & { categoryPath: string; queryParams: { storeId: string | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { categoryPath: string; queryParams: { storeId: string | null } }) => {
    const data = await CategoryAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteCategory_ByCategoryPath(
      input.categoryPath,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CategoryAdmin.Category_ByCategoryPath],
    mutationFn,
    ...options
  })
}

export const useAdmCategory_ByCategoryPath = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { categoryPath: string; queryParams?: { storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullCategoryInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FullCategoryInfo) => void
): UseQueryResult<FullCategoryInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCategory_ByCategoryPath>[1]) => async () => {
    const data = await CategoryAdminApi(sdk, { namespace: input.namespace }).getCategory_ByCategoryPath(
      input.categoryPath,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<FullCategoryInfo, AxiosError<ApiError>>({
    queryKey: [Key_CategoryAdmin.Category_ByCategoryPath, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateCategory_ByCategoryPathMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      FullCategoryInfo,
      AxiosError<ApiError>,
      ApiArgs & { categoryPath: string; data: CategoryUpdate; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullCategoryInfo) => void
): UseMutationResult<
  FullCategoryInfo,
  AxiosError<ApiError>,
  ApiArgs & { categoryPath: string; data: CategoryUpdate; queryParams: { storeId: string | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { categoryPath: string; data: CategoryUpdate; queryParams: { storeId: string | null } }) => {
    const data = await CategoryAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateCategory_ByCategoryPath(
      input.categoryPath,
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CategoryAdmin.Category_ByCategoryPath],
    mutationFn,
    ...options
  })
}

export const useAdmChildren_ByCategoryPath = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { categoryPath: string; queryParams?: { storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullCategoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FullCategoryInfoArray) => void
): UseQueryResult<FullCategoryInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmChildren_ByCategoryPath>[1]) => async () => {
    const data = await CategoryAdminApi(sdk, { namespace: input.namespace }).getChildren_ByCategoryPath(
      input.categoryPath,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<FullCategoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_CategoryAdmin.Children_ByCategoryPath, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDescendants_ByCategoryPath = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { categoryPath: string; queryParams?: { storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullCategoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FullCategoryInfoArray) => void
): UseQueryResult<FullCategoryInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDescendants_ByCategoryPath>[1]) => async () => {
    const data = await CategoryAdminApi(sdk, { namespace: input.namespace }).getDescendants_ByCategoryPath(
      input.categoryPath,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<FullCategoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_CategoryAdmin.Descendants_ByCategoryPath, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
