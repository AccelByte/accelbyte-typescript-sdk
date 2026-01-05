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
import { PublicItemsApi } from '../PublicItemsApi.js'

import { ConsumeItemReq } from '../../generated-definitions/ConsumeItemReq.js'
import { ItemResp } from '../../generated-definitions/ItemResp.js'
import { ListItemResp } from '../../generated-definitions/ListItemResp.js'
import { MoveItemsReq } from '../../generated-definitions/MoveItemsReq.js'
import { MoveItemsResp } from '../../generated-definitions/MoveItemsResp.js'
import { RemoveInventoryItemReq } from '../../generated-definitions/RemoveInventoryItemReq.js'
import { UpdateItemReq } from '../../generated-definitions/UpdateItemReq.js'
import { UpdateItemRespArray } from '../../generated-definitions/UpdateItemRespArray.js'

export enum Key_PublicItems {
  ItemMeUser_ByInventoryId = 'Inventory.PublicItems.ItemMeUser_ByInventoryId',
  ItemsMeUsers_ByInventoryId = 'Inventory.PublicItems.ItemsMeUsers_ByInventoryId',
  ConsumeUser_ByInventoryId = 'Inventory.PublicItems.ConsumeUser_ByInventoryId',
  ItemMovementUser_ByInventoryId = 'Inventory.PublicItems.ItemMovementUser_ByInventoryId',
  SourceItemMeUser_ByInventoryId_BySlotId_BySourceItemId = 'Inventory.PublicItems.SourceItemMeUser_ByInventoryId_BySlotId_BySourceItemId'
}

/**
 *  Bulk remove user&#39;s own items.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicItems.ItemMeUser_ByInventoryId, input]
 * }
 * ```
 */
export const usePublicItemsApi_DeleteItemMeUser_ByInventoryIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateItemRespArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { inventoryId: string; data: RemoveInventoryItemReq[] }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateItemRespArray) => void
): UseMutationResult<
  UpdateItemRespArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { inventoryId: string; data: RemoveInventoryItemReq[] }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { inventoryId: string; data: RemoveInventoryItemReq[] }) => {
    const response = await PublicItemsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteItemMeUser_ByInventoryId(input.inventoryId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicItems.ItemMeUser_ByInventoryId],
    mutationFn,
    ...options
  })
}

/**
 *  Listing all user&#39;s owned items in an inventory. The response body will be in the form of standard pagination.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicItems.ItemsMeUsers_ByInventoryId, input]
 * }
 * ```
 */
export const usePublicItemsApi_GetItemsMeUsers_ByInventoryId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    inventoryId: string
    queryParams?: {
      limit?: number
      offset?: number
      sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
      sourceItemId?: string | null
      tags?: string | null
    }
  },
  options?: Omit<UseQueryOptions<ListItemResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListItemResp>) => void
): UseQueryResult<ListItemResp, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicItemsApi_GetItemsMeUsers_ByInventoryId>[1]) => async () => {
    const response = await PublicItemsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getItemsMeUsers_ByInventoryId(input.inventoryId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListItemResp, AxiosError<ApiError>>({
    queryKey: [Key_PublicItems.ItemsMeUsers_ByInventoryId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 *  Bulk Updating user&#39;s own items.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicItems.ItemMeUser_ByInventoryId, input]
 * }
 * ```
 */
export const usePublicItemsApi_UpdateItemMeUser_ByInventoryIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UpdateItemRespArray, AxiosError<ApiError>, SdkSetConfigParam & { inventoryId: string; data: UpdateItemReq[] }>,
    'mutationKey'
  >,
  callback?: (data: UpdateItemRespArray) => void
): UseMutationResult<UpdateItemRespArray, AxiosError<ApiError>, SdkSetConfigParam & { inventoryId: string; data: UpdateItemReq[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { inventoryId: string; data: UpdateItemReq[] }) => {
    const response = await PublicItemsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateItemMeUser_ByInventoryId(input.inventoryId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicItems.ItemMeUser_ByInventoryId],
    mutationFn,
    ...options
  })
}

/**
 *  Consume user&#39;s own item. Client should pass item ID in options if item type is OPTIONBOX
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicItems.ConsumeUser_ByInventoryId, input]
 * }
 * ```
 */
export const usePublicItemsApi_CreateConsumeUser_ByInventoryIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ItemResp, AxiosError<ApiError>, SdkSetConfigParam & { inventoryId: string; data: ConsumeItemReq }>,
    'mutationKey'
  >,
  callback?: (data: ItemResp) => void
): UseMutationResult<ItemResp, AxiosError<ApiError>, SdkSetConfigParam & { inventoryId: string; data: ConsumeItemReq }> => {
  const mutationFn = async (input: SdkSetConfigParam & { inventoryId: string; data: ConsumeItemReq }) => {
    const response = await PublicItemsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createConsumeUser_ByInventoryId(input.inventoryId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicItems.ConsumeUser_ByInventoryId],
    mutationFn,
    ...options
  })
}

/**
 * Move items between inventories that is owned by the same user. For Ecommerce items, the *qty* is *useCount*. For example, moving 2 of an item&#39;s *qty* will move 2 of the entitlement&#39;s *useCount*.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicItems.ItemMovementUser_ByInventoryId, input]
 * }
 * ```
 */
export const usePublicItemsApi_CreateItemMovementUser_ByInventoryIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<MoveItemsResp, AxiosError<ApiError>, SdkSetConfigParam & { inventoryId: string; data: MoveItemsReq }>,
    'mutationKey'
  >,
  callback?: (data: MoveItemsResp) => void
): UseMutationResult<MoveItemsResp, AxiosError<ApiError>, SdkSetConfigParam & { inventoryId: string; data: MoveItemsReq }> => {
  const mutationFn = async (input: SdkSetConfigParam & { inventoryId: string; data: MoveItemsReq }) => {
    const response = await PublicItemsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createItemMovementUser_ByInventoryId(input.inventoryId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicItems.ItemMovementUser_ByInventoryId],
    mutationFn,
    ...options
  })
}

/**
 *  Getting an user&#39;s owned item info.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicItems.SourceItemMeUser_ByInventoryId_BySlotId_BySourceItemId, input]
 * }
 * ```
 */
export const usePublicItemsApi_GetSourceItemMeUser_ByInventoryId_BySlotId_BySourceItemId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { inventoryId: string; slotId: string; sourceItemId: string },
  options?: Omit<UseQueryOptions<ItemResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ItemResp>) => void
): UseQueryResult<ItemResp, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePublicItemsApi_GetSourceItemMeUser_ByInventoryId_BySlotId_BySourceItemId>[1]) =>
    async () => {
      const response = await PublicItemsApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getSourceItemMeUser_ByInventoryId_BySlotId_BySourceItemId(input.inventoryId, input.slotId, input.sourceItemId)
      callback && callback(response)
      return response.data
    }

  return useQuery<ItemResp, AxiosError<ApiError>>({
    queryKey: [Key_PublicItems.SourceItemMeUser_ByInventoryId_BySlotId_BySourceItemId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
