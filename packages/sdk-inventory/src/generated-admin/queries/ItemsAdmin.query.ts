/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
 * **This endpoint is used to save items to the player’s inventory based on the inventoryConfigurationCode with the following conditions:** - If the player doesn&#39;t have the inventory for the specified inventoryConfigurationCode, a new inventory will be created. - If the user already has one, it will be added to the existing inventory. - If the same item exists within the inventory, the quantity (qty) will be increased. - If the inventory is full, the item cannot be added and the request will return the “Failed” response. - If a player has more than one inventory and the initial inventory is full, the service will check the available slot in the other inventory following the order of their creation date and time (createdAt). - For Ecommerce items: &gt;- Attributes such as slotUsed, serverCustomAttributes, customAttributes, and type will be overridden by the attributes configured in the AccelByte Gaming Services (AGS) Store. &gt;- Storing E-commerce items in a particular slot will follow its entitlement and item configuration, such as durable, consumable, stackable and non-stackable. &gt;- The quantity is dynamically set based on an item’s useCount configured in Store. When saving an item, the specified quantity will be multiplied by configured useCount for that particular item. For example, if an Item is configured with a useCount of 5 in the AGS Store and it is saved with a qty of 2, the item’s quantity will be stored as 10 in the player’s inventory. You must have this permission to access this endpoint: **Permission:ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]**
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
 * **This endpoint is used used for bulk saving purchased items to the player’s inventory based on the inventoryConfigurationCode with the following conditions:** - If the player doesn&#39;t have the inventory for the specified inventoryConfigurationCode, a new inventory will be created for the player. - If the player already has one, it will be added to the existing inventory. &gt;- If the same item exists within the inventory, the quantity (qty) will be increased. &gt;- If the inventory is full, the item cannot be added and the request will return the “Failed” response. &gt;- If a player has more than one inventory and the initial inventory is full, the service will check the available slot in the other inventory following the order of their creation date and time (createdAt). - For E-commerce items: &gt;- Attributes such as slotUsed, serverCustomAttributes, customAttributes, and type will be overridden by the attributes configured in the AccelByte Gaming Services (AGS) Store. &gt;- Storing E-commerce items in a particular slot will follow its entitlement and item configuration, such as durable, consumable, stackable and non-stackable. &gt;- The quantity is dynamically set based on an item’s useCount configured in Store. When saving an item, the specified quantity will be multiplied by configured useCount for that particular item. For example, if an Item is configured with a useCount of 5 in the AGS Store and it is saved with a qty of 2, the item’s quantity will be stored as 10 in the player’s inventory. **When configuring your request, note the following:** - The source field is mandatory for determining the source of the item. The supported values are OTHER (for items coming from other sources) and E-commerce for items coming from the E-commerce integration. - For other-sourced items, the type can be manually defined when saving the item. - A maximum of 10 items can be saved in a single bulk call. You must have this permission to access this endpoint: **Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]**
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
 * **This endpoint is used to save purchased items to a specific inventory of the player, with the following conditions for E-commerce items:** - Attributes such as slotUsed, serverCustomAttributes, customAttributes, and type will be overridden by the attributes configured in the AccelByte Gaming Services (AGS) Store. - Storing E-commerce items in a particular slot will follow its entitlement and item configuration, such as durable, consumable, stackable and non-stackable. - The quantity is dynamically set based on an item’s useCount configured in Store. When saving an item, the specified quantity will be multiplied by configured useCount for that particular item. For example, if an Item is configured with a useCount of 5 in the AGS Store and it is saved with a qty of 2, the item’s quantity will be stored as 10 in the player’s inventory. **When configuring your request, note the following:** - The source field is mandatory for determining the source of the item. The supported values are OTHER (for items coming from other sources) and E-commerce for items coming from the E-commerce integration. - For other-sourced items, the type can be manually defined when saving the item. You must have this permission to access this endpoint: **Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [CREATE]**
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
 *  Consume user&#39;s own item Client should pass item ID in options if item type is OPTIONBOX Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM [UPDATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemsAdmin.Consume_ByUserId_ByInventoryId, input]
 * }
 * ```
 */
export const useItemsAdminApi_UpdateConsume_ByUserId_ByInventoryIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      ItemResp,
      AxiosError<ApiError>,
      SdkSetConfigParam & {
        userId: string
        inventoryId: string
        data: ConsumeItemReq
        queryParams?: { dateRangeValidation?: string | null }
      }
    >,
    'mutationKey'
  >,
  callback?: (data: ItemResp) => void
): UseMutationResult<
  ItemResp,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; inventoryId: string; data: ConsumeItemReq; queryParams?: { dateRangeValidation?: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & {
      userId: string
      inventoryId: string
      data: ConsumeItemReq
      queryParams?: { dateRangeValidation?: string | null }
    }
  ) => {
    const response = await ItemsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateConsume_ByUserId_ByInventoryId(input.userId, input.inventoryId, input.data, input.queryParams)
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
 * **This endpoint is used for bulk saving purchased items to a specific inventory of the player, with the following conditions for E-commerce items:** - Attributes such as slotUsed, serverCustomAttributes, customAttributes, and type will be overridden by the attributes configured in the AccelByte Gaming Services (AGS) Store. - Storing E-commerce items in a particular slot will follow its entitlement and item configuration, such as durable, consumable, stackable and non-stackable. - The quantity is dynamically set based on an item’s useCount configured in Store. When saving an item, the specified quantity will be multiplied by configured useCount for that particular item. For example, if an Item is configured with a useCount of 5 in the AGS Store and it is saved with a qty of 2, the item’s quantity will be stored as 10 in the player’s inventory. **When configuring your request, note the following:** - The source field is mandatory for determining the source of the item. The supported values are OTHER (for items coming from other sources) and E-commerce for items coming from the E-commerce integration. - For other-sourced items, the type can be manually defined when saving the item. - A maximum of 10 items can be saved in a single bulk call. You must have this permission to access this endpoint: **Permission: ADMIN:NAMESPACE:{namespace}:USER:{userId}:INVENTORY:ITEM[CREATE]**
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
