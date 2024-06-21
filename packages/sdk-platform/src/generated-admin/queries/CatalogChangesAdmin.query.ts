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
import { CatalogChangesAdminApi } from '../CatalogChangesAdminApi.js'

import { CatalogChangePagingResult } from '../../generated-definitions/CatalogChangePagingResult.js'
import { CatalogChangeStatistics } from '../../generated-definitions/CatalogChangeStatistics.js'
import { StoreInfo } from '../../generated-definitions/StoreInfo.js'

export enum Key_CatalogChangesAdmin {
  CatalogChangeSelectAll_ByStoreId = 'CatalogChangesAdmin.CatalogChangeSelectAll_ByStoreId',
  CatalogChangesByCriteria_ByStoreId = 'CatalogChangesAdmin.CatalogChangesByCriteria_ByStoreId',
  CatalogChangePublishAll_ByStoreId = 'CatalogChangesAdmin.CatalogChangePublishAll_ByStoreId',
  CatalogChangesStatistics_ByStoreId = 'CatalogChangesAdmin.CatalogChangesStatistics_ByStoreId',
  CatalogChangeUnselectAll_ByStoreId = 'CatalogChangesAdmin.CatalogChangeUnselectAll_ByStoreId',
  CatalogChangePublishSelected_ByStoreId = 'CatalogChangesAdmin.CatalogChangePublishSelected_ByStoreId',
  Select_ByStoreId_ByChangeId = 'CatalogChangesAdmin.Select_ByStoreId_ByChangeId',
  Unselect_ByStoreId_ByChangeId = 'CatalogChangesAdmin.Unselect_ByStoreId_ByChangeId',
  CatalogChangeSelectAllByCriteria_ByStoreId = 'CatalogChangesAdmin.CatalogChangeSelectAllByCriteria_ByStoreId'
}

export const useAdmUpdateCatalogChangeSelectAll_ByStoreIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { storeId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { storeId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { storeId: string }) => {
    const data = await CatalogChangesAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateCatalogChangeSelectAll_ByStoreId(input.storeId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CatalogChangesAdmin.CatalogChangeSelectAll_ByStoreId],
    mutationFn,
    ...options
  })
}

export const useAdmCatalogChangesByCriteria_ByStoreId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    storeId: string
    queryParams?: {
      action?: 'CREATE' | 'DELETE' | 'UPDATE'
      itemSku?: string | null
      itemType?:
        | 'APP'
        | 'BUNDLE'
        | 'CODE'
        | 'COINS'
        | 'EXTENSION'
        | 'INGAMEITEM'
        | 'LOOTBOX'
        | 'MEDIA'
        | 'OPTIONBOX'
        | 'SEASON'
        | 'SUBSCRIPTION'
      limit?: number
      offset?: number
      selected?: boolean | null
      sortBy?: string[]
      status?: 'PUBLISHED' | 'UNPUBLISHED'
      type?: 'CATEGORY' | 'ITEM' | 'SECTION' | 'STORE' | 'VIEW'
      updatedAtEnd?: string | null
      updatedAtStart?: string | null
      withTotal?: boolean | null
    }
  },
  options?: Omit<UseQueryOptions<CatalogChangePagingResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CatalogChangePagingResult) => void
): UseQueryResult<CatalogChangePagingResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCatalogChangesByCriteria_ByStoreId>[1]) => async () => {
    const data = await CatalogChangesAdminApi(sdk, { namespace: input.namespace }).getCatalogChangesByCriteria_ByStoreId(
      input.storeId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<CatalogChangePagingResult, AxiosError<ApiError>>({
    queryKey: [Key_CatalogChangesAdmin.CatalogChangesByCriteria_ByStoreId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateCatalogChangePublishAll_ByStoreIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<StoreInfo, AxiosError<ApiError>, ApiArgs & { storeId: string }>, 'mutationKey'>,
  callback?: (data: StoreInfo) => void
): UseMutationResult<StoreInfo, AxiosError<ApiError>, ApiArgs & { storeId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { storeId: string }) => {
    const data = await CatalogChangesAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateCatalogChangePublishAll_ByStoreId(input.storeId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CatalogChangesAdmin.CatalogChangePublishAll_ByStoreId],
    mutationFn,
    ...options
  })
}

export const useAdmCatalogChangesStatistics_ByStoreId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    storeId: string
    queryParams?: {
      action?: 'CREATE' | 'DELETE' | 'UPDATE'
      itemSku?: string | null
      itemType?:
        | 'APP'
        | 'BUNDLE'
        | 'CODE'
        | 'COINS'
        | 'EXTENSION'
        | 'INGAMEITEM'
        | 'LOOTBOX'
        | 'MEDIA'
        | 'OPTIONBOX'
        | 'SEASON'
        | 'SUBSCRIPTION'
      type?: 'CATEGORY' | 'ITEM' | 'SECTION' | 'STORE' | 'VIEW'
      updatedAtEnd?: string | null
      updatedAtStart?: string | null
    }
  },
  options?: Omit<UseQueryOptions<CatalogChangeStatistics, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CatalogChangeStatistics) => void
): UseQueryResult<CatalogChangeStatistics, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCatalogChangesStatistics_ByStoreId>[1]) => async () => {
    const data = await CatalogChangesAdminApi(sdk, { namespace: input.namespace }).getCatalogChangesStatistics_ByStoreId(
      input.storeId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<CatalogChangeStatistics, AxiosError<ApiError>>({
    queryKey: [Key_CatalogChangesAdmin.CatalogChangesStatistics_ByStoreId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateCatalogChangeUnselectAll_ByStoreIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { storeId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { storeId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { storeId: string }) => {
    const data = await CatalogChangesAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateCatalogChangeUnselectAll_ByStoreId(input.storeId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CatalogChangesAdmin.CatalogChangeUnselectAll_ByStoreId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateCatalogChangePublishSelected_ByStoreIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<StoreInfo, AxiosError<ApiError>, ApiArgs & { storeId: string }>, 'mutationKey'>,
  callback?: (data: StoreInfo) => void
): UseMutationResult<StoreInfo, AxiosError<ApiError>, ApiArgs & { storeId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { storeId: string }) => {
    const data = await CatalogChangesAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateCatalogChangePublishSelected_ByStoreId(input.storeId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CatalogChangesAdmin.CatalogChangePublishSelected_ByStoreId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateSelect_ByStoreId_ByChangeIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { storeId: string; changeId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { storeId: string; changeId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { storeId: string; changeId: string }) => {
    const data = await CatalogChangesAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateSelect_ByStoreId_ByChangeId(
      input.storeId,
      input.changeId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CatalogChangesAdmin.Select_ByStoreId_ByChangeId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateUnselect_ByStoreId_ByChangeIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { storeId: string; changeId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { storeId: string; changeId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { storeId: string; changeId: string }) => {
    const data = await CatalogChangesAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateUnselect_ByStoreId_ByChangeId(input.storeId, input.changeId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CatalogChangesAdmin.Unselect_ByStoreId_ByChangeId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateCatalogChangeSelectAllByCriteria_ByStoreIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      ApiArgs & {
        storeId: string
        queryParams?: {
          action?: 'CREATE' | 'DELETE' | 'UPDATE'
          itemSku?: string | null
          itemType?:
            | 'APP'
            | 'BUNDLE'
            | 'CODE'
            | 'COINS'
            | 'EXTENSION'
            | 'INGAMEITEM'
            | 'LOOTBOX'
            | 'MEDIA'
            | 'OPTIONBOX'
            | 'SEASON'
            | 'SUBSCRIPTION'
          selected?: boolean | null
          type?: 'CATEGORY' | 'ITEM' | 'SECTION' | 'STORE' | 'VIEW'
          updatedAtEnd?: string | null
          updatedAtStart?: string | null
        }
      }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  ApiArgs & {
    storeId: string
    queryParams?: {
      action?: 'CREATE' | 'DELETE' | 'UPDATE'
      itemSku?: string | null
      itemType?:
        | 'APP'
        | 'BUNDLE'
        | 'CODE'
        | 'COINS'
        | 'EXTENSION'
        | 'INGAMEITEM'
        | 'LOOTBOX'
        | 'MEDIA'
        | 'OPTIONBOX'
        | 'SEASON'
        | 'SUBSCRIPTION'
      selected?: boolean | null
      type?: 'CATEGORY' | 'ITEM' | 'SECTION' | 'STORE' | 'VIEW'
      updatedAtEnd?: string | null
      updatedAtStart?: string | null
    }
  }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & {
      storeId: string
      queryParams?: {
        action?: 'CREATE' | 'DELETE' | 'UPDATE'
        itemSku?: string | null
        itemType?:
          | 'APP'
          | 'BUNDLE'
          | 'CODE'
          | 'COINS'
          | 'EXTENSION'
          | 'INGAMEITEM'
          | 'LOOTBOX'
          | 'MEDIA'
          | 'OPTIONBOX'
          | 'SEASON'
          | 'SUBSCRIPTION'
        selected?: boolean | null
        type?: 'CATEGORY' | 'ITEM' | 'SECTION' | 'STORE' | 'VIEW'
        updatedAtEnd?: string | null
        updatedAtStart?: string | null
      }
    }
  ) => {
    const data = await CatalogChangesAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateCatalogChangeSelectAllByCriteria_ByStoreId(input.storeId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CatalogChangesAdmin.CatalogChangeSelectAllByCriteria_ByStoreId],
    mutationFn,
    ...options
  })
}
