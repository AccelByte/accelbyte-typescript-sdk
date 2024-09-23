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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { ItemTypesAdminApi } from '../ItemTypesAdminApi.js'

import { CreateItemTypeReq } from '../../generated-definitions/CreateItemTypeReq.js'
import { CreateItemTypeResp } from '../../generated-definitions/CreateItemTypeResp.js'
import { ListItemTypesResp } from '../../generated-definitions/ListItemTypesResp.js'

export enum Key_ItemTypesAdmin {
  Itemtypes = 'Inventory.ItemTypesAdmin.Itemtypes',
  Itemtype = 'Inventory.ItemTypesAdmin.Itemtype',
  Itemtype_ByItemTypeName = 'Inventory.ItemTypesAdmin.Itemtype_ByItemTypeName'
}

/**
 *  This endpoint will list all item types in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:ITEMTYPE [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemTypesAdmin.Itemtypes, input]
 * }
 * ```
 */
export const useItemTypesAdminApi_GetItemtypes = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      limit?: number
      offset?: number
      sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
    }
  },
  options?: Omit<UseQueryOptions<ListItemTypesResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListItemTypesResp>) => void
): UseQueryResult<ListItemTypesResp, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemTypesAdminApi_GetItemtypes>[1]) => async () => {
    const response = await ItemTypesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemtypes(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListItemTypesResp, AxiosError<ApiError>>({
    queryKey: [Key_ItemTypesAdmin.Itemtypes, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 *  This endpoint will create a new itemtype. The itemtype name must be unique per namespace. It is safe to call this endpoint even if the itemtype already exists. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:ITEMTYPE [CREATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemTypesAdmin.Itemtype, input]
 * }
 * ```
 */
export const useItemTypesAdminApi_CreateItemtypeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateItemTypeResp, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateItemTypeReq }>,
    'mutationKey'
  >,
  callback?: (data: CreateItemTypeResp) => void
): UseMutationResult<CreateItemTypeResp, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateItemTypeReq }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateItemTypeReq }) => {
    const response = await ItemTypesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createItemtype(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemTypesAdmin.Itemtype],
    mutationFn,
    ...options
  })
}

/**
 *  This endpoint will delete a item type by itemtypeName in a specified namespace. If the itemtypeName doesn&#39;t exist in a namespace, it&#39;ll return not found. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:ITEMTYPE [DELETE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemTypesAdmin.Itemtype_ByItemTypeName, input]
 * }
 * ```
 */
export const useItemTypesAdminApi_DeleteItemtype_ByItemTypeNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { itemTypeName: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { itemTypeName: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { itemTypeName: string }) => {
    const response = await ItemTypesAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteItemtype_ByItemTypeName(input.itemTypeName)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemTypesAdmin.Itemtype_ByItemTypeName],
    mutationFn,
    ...options
  })
}
