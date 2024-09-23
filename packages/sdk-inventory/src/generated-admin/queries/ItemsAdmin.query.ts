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
import { ItemsAdminApi } from '../ItemsAdminApi.js'

import { AdminUpdateItemReq } from '../../generated-definitions/AdminUpdateItemReq.js'
import { BulkSaveItemRespArray } from '../../generated-definitions/BulkSaveItemRespArray.js'
import { ConsumeItemReq } from '../../generated-definitions/ConsumeItemReq.js'
import { ItemResp } from '../../generated-definitions/ItemResp.js'
import { ListItemResp } from '../../generated-definitions/ListItemResp.js'
import { RemoveInventoryItemReq } from '../../generated-definitions/RemoveInventoryItemReq.js'
import { SaveItemReq } from '../../generated-definitions/SaveItemReq.js'
import { SaveItemToInventoryReq } from '../../generated-definitions/SaveItemToInventoryReq.js'
import { UpdateItemRespArray } from '../../generated-definitions/UpdateItemRespArray.js'

export enum Key_ItemsAdmin {
  Item_ByUserId = 'Inventory.ItemsAdmin.Item_ByUserId',
  ItemBulk_ByUserId = 'Inventory.ItemsAdmin.ItemBulk_ByUserId',
  Items_ByInventoryId = 'Inventory.ItemsAdmin.Items_ByInventoryId',
  ItemEntitlementSync_ByUserId = 'Inventory.ItemsAdmin.ItemEntitlementSync_ByUserId',
  Item_ByUserId_ByInventoryId = 'Inventory.ItemsAdmin.Item_ByUserId_ByInventoryId',
  Consume_ByUserId_ByInventoryId = 'Inventory.ItemsAdmin.Consume_ByUserId_ByInventoryId',
  ItemBulk_ByUserId_ByInventoryId = 'Inventory.ItemsAdmin.ItemBulk_ByUserId_ByInventoryId',
  SourceItem_ByInventoryId_BySlotId_BySourceItemId = 'Inventory.ItemsAdmin.SourceItem_ByInventoryId_BySlotId_BySourceItemId'
}

/**
 *  Saving an item. The item will be saved in user&#39;s inventory, If it doesn&#39;t exist it&#39;ll be created. If the item already exists, its qty will be increased, so no new item with same sourceItemId will be created Tags will be auto-created. ItemType will be auto-created. For Ecommerce item, this fields will be override by ecommerce configuration (slotUsed, serverCustomAttributes, customAttributes, type) For Ecommerce items, the quantity saved is dynamically adjusted based on an item&#39;s useCount configured in Store. When saving items, the quantity specified for each item will be multiplied by the useCount. i.e. If the store item is configured with a useCount of 5 and the quantity of a particular item is set to 2 during saving, it will be stored as 10. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemsAdmin.Item_ByUserId, input]
 * }
 * ```
 */
export const useItemsAdminApi_CreateItem_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ItemResp, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: SaveItemReq }>,
    'mutationKey'
  >,
  callback?: (data: ItemResp) => void
): UseMutationResult<ItemResp, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: SaveItemReq }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: SaveItemReq }) => {
    const response = await ItemsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createItem_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemsAdmin.Item_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 *  This endpoint will be used by client to save the purchased item to user&#39;s inventory, since want to integrate the inventory service to e-commerce, source field will be mandatory to determine the item, supported field “OTHER” and “ECOMMERCE” Notes : source ECOMMERCE, the quantity of ecommerce items saved is dynamically adjusted based on an item&#39;s useCount configured in Store. When saving items, the quantity specified for each item will be multiplied by the useCount i.e. If the store item is configured with a useCount of 5 and the quantity of a particular item is set to 2 during saving, it will be stored as 10 Target inventory will be based on the specified inventoryConfigurationCode. If the inventory exist then will put to the existing one, if not exist at all then will create at least one inventory, if full then will return failed at the response. We implement the logic as proportional to store the item to inventory, will loop from createdAt until find the available slots at inventory. Type: - ingame - app - coin etc.. Max length of the payload is 10 items Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemsAdmin.ItemBulk_ByUserId, input]
 * }
 * ```
 */
export const useItemsAdminApi_CreateItemBulk_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkSaveItemRespArray, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: SaveItemReq[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkSaveItemRespArray) => void
): UseMutationResult<BulkSaveItemRespArray, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: SaveItemReq[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: SaveItemReq[] }) => {
    const response = await ItemsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createItemBulk_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemsAdmin.ItemBulk_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 *  Listing all items in an inventory. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemsAdmin.Items_ByInventoryId, input]
 * }
 * ```
 */
export const useItemsAdminApi_GetItems_ByInventoryId = (
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
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemsAdminApi_GetItems_ByInventoryId>[1]) => async () => {
    const response = await ItemsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItems_ByInventoryId(
      input.inventoryId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListItemResp, AxiosError<ApiError>>({
    queryKey: [Key_ItemsAdmin.Items_ByInventoryId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 *  Sync user&#39;s entitlement from e-commerce service to inventory for non exist item at user inventory. will skip the item if already exist at user inventory. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [UPDATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemsAdmin.ItemEntitlementSync_ByUserId, input]
 * }
 * ```
 */
export const useItemsAdminApi_UpdateItemEntitlementSync_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await ItemsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateItemEntitlementSync_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemsAdmin.ItemEntitlementSync_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 *  Bulk remove user&#39;s own items&#39;. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [DELETE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemsAdmin.Item_ByUserId_ByInventoryId, input]
 * }
 * ```
 */
export const useItemsAdminApi_DeleteItem_ByUserId_ByInventoryIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateItemRespArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; inventoryId: string; data: RemoveInventoryItemReq[] }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateItemRespArray) => void
): UseMutationResult<
  UpdateItemRespArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; inventoryId: string; data: RemoveInventoryItemReq[] }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; inventoryId: string; data: RemoveInventoryItemReq[] }) => {
    const response = await ItemsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteItem_ByUserId_ByInventoryId(input.userId, input.inventoryId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemsAdmin.Item_ByUserId_ByInventoryId],
    mutationFn,
    ...options
  })
}

/**
 *  Saving an item to specific inventory. The item will be saved in specific user&#39;s inventory, If the item already exists, its qty will be increased, so no new item with same sourceItemId will be created Tags will be auto-created. ItemType will be auto-created. For Ecommerce item, this fields will be override by ecommerce configuration (slotUsed, serverCustomAttributes, customAttributes, type) For Ecommerce items, the quantity saved is dynamically adjusted based on an item&#39;s useCount configured in Store. When saving items, the quantity specified for each item will be multiplied by the useCount. i.e. If the store item is configured with a useCount of 5 and the quantity of a particular item is set to 2 during saving, it will be stored as 10. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemsAdmin.Item_ByUserId_ByInventoryId, input]
 * }
 * ```
 */
export const useItemsAdminApi_CreateItem_ByUserId_ByInventoryIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      ItemResp,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; inventoryId: string; data: SaveItemToInventoryReq }
    >,
    'mutationKey'
  >,
  callback?: (data: ItemResp) => void
): UseMutationResult<
  ItemResp,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; inventoryId: string; data: SaveItemToInventoryReq }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; inventoryId: string; data: SaveItemToInventoryReq }) => {
    const response = await ItemsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createItem_ByUserId_ByInventoryId(input.userId, input.inventoryId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemsAdmin.Item_ByUserId_ByInventoryId],
    mutationFn,
    ...options
  })
}

/**
 *  Bulk Updating user&#39;s own items. Tags will be auto-created. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [UPDATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemsAdmin.Item_ByUserId_ByInventoryId, input]
 * }
 * ```
 */
export const useItemsAdminApi_UpdateItem_ByUserId_ByInventoryIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateItemRespArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; inventoryId: string; data: AdminUpdateItemReq[] }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateItemRespArray) => void
): UseMutationResult<
  UpdateItemRespArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; inventoryId: string; data: AdminUpdateItemReq[] }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; inventoryId: string; data: AdminUpdateItemReq[] }) => {
    const response = await ItemsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateItem_ByUserId_ByInventoryId(input.userId, input.inventoryId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemsAdmin.Item_ByUserId_ByInventoryId],
    mutationFn,
    ...options
  })
}

/**
 *  Consume user&#39;s own item Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [UPDATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemsAdmin.Consume_ByUserId_ByInventoryId, input]
 * }
 * ```
 */
export const useItemsAdminApi_CreateConsume_ByUserId_ByInventoryIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ItemResp, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; inventoryId: string; data: ConsumeItemReq }>,
    'mutationKey'
  >,
  callback?: (data: ItemResp) => void
): UseMutationResult<ItemResp, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; inventoryId: string; data: ConsumeItemReq }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; inventoryId: string; data: ConsumeItemReq }) => {
    const response = await ItemsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createConsume_ByUserId_ByInventoryId(input.userId, input.inventoryId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemsAdmin.Consume_ByUserId_ByInventoryId],
    mutationFn,
    ...options
  })
}

/**
 *  This endpoint will be used by client to save the purchased item to user&#39;s inventory, since want to integrate the inventory service to e-commerce, source field will be mandatory to determine the item, supported field “OTHER” and “ECOMMERCE” Notes : source ECOMMERCE, the quantity of ecommerce items saved is dynamically adjusted based on an item&#39;s useCount configured in Store. When saving items, the quantity specified for each item will be multiplied by the useCount i.e. If the store item is configured with a useCount of 5 and the quantity of a particular item is set to 2 during saving, it will be stored as 10 Type: - ingame - app - coin etc.. Max length of the payload is 10 items Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemsAdmin.ItemBulk_ByUserId_ByInventoryId, input]
 * }
 * ```
 */
export const useItemsAdminApi_CreateItemBulk_ByUserId_ByInventoryIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      BulkSaveItemRespArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; inventoryId: string; data: SaveItemToInventoryReq[] }
    >,
    'mutationKey'
  >,
  callback?: (data: BulkSaveItemRespArray) => void
): UseMutationResult<
  BulkSaveItemRespArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; inventoryId: string; data: SaveItemToInventoryReq[] }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; inventoryId: string; data: SaveItemToInventoryReq[] }) => {
    const response = await ItemsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createItemBulk_ByUserId_ByInventoryId(input.userId, input.inventoryId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemsAdmin.ItemBulk_ByUserId_ByInventoryId],
    mutationFn,
    ...options
  })
}

/**
 *  Getting an item info. Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemsAdmin.SourceItem_ByInventoryId_BySlotId_BySourceItemId, input]
 * }
 * ```
 */
export const useItemsAdminApi_GetSourceItem_ByInventoryId_BySlotId_BySourceItemId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { inventoryId: string; slotId: string; sourceItemId: string },
  options?: Omit<UseQueryOptions<ItemResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ItemResp>) => void
): UseQueryResult<ItemResp, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useItemsAdminApi_GetSourceItem_ByInventoryId_BySlotId_BySourceItemId>[1]) => async () => {
      const response = await ItemsAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getSourceItem_ByInventoryId_BySlotId_BySourceItemId(input.inventoryId, input.slotId, input.sourceItemId)
      callback && callback(response)
      return response.data
    }

  return useQuery<ItemResp, AxiosError<ApiError>>({
    queryKey: [Key_ItemsAdmin.SourceItem_ByInventoryId_BySlotId_BySourceItemId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
