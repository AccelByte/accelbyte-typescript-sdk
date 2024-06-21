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
import { ItemAdminApi } from '../ItemAdminApi.js'

import { AppUpdate } from '../../generated-definitions/AppUpdate.js'
import { AvailablePredicateArray } from '../../generated-definitions/AvailablePredicateArray.js'
import { BasicItemArray } from '../../generated-definitions/BasicItemArray.js'
import { BulkRegionDataChangeRequest } from '../../generated-definitions/BulkRegionDataChangeRequest.js'
import { EstimatedPriceInfo } from '../../generated-definitions/EstimatedPriceInfo.js'
import { FullAppInfo } from '../../generated-definitions/FullAppInfo.js'
import { FullItemInfo } from '../../generated-definitions/FullItemInfo.js'
import { FullItemInfoArray } from '../../generated-definitions/FullItemInfoArray.js'
import { FullItemPagingResult } from '../../generated-definitions/FullItemPagingResult.js'
import { FullItemPagingSlicedResult } from '../../generated-definitions/FullItemPagingSlicedResult.js'
import { InGameItemSync } from '../../generated-definitions/InGameItemSync.js'
import { ItemAcquireRequest } from '../../generated-definitions/ItemAcquireRequest.js'
import { ItemAcquireResult } from '../../generated-definitions/ItemAcquireResult.js'
import { ItemCreate } from '../../generated-definitions/ItemCreate.js'
import { ItemDynamicDataInfo } from '../../generated-definitions/ItemDynamicDataInfo.js'
import { ItemId } from '../../generated-definitions/ItemId.js'
import { ItemIdArray } from '../../generated-definitions/ItemIdArray.js'
import { ItemInfoArray } from '../../generated-definitions/ItemInfoArray.js'
import { ItemPurchaseConditionValidateRequest } from '../../generated-definitions/ItemPurchaseConditionValidateRequest.js'
import { ItemPurchaseConditionValidateResultArray } from '../../generated-definitions/ItemPurchaseConditionValidateResultArray.js'
import { ItemReturnRequest } from '../../generated-definitions/ItemReturnRequest.js'
import { ItemTypeConfigCreate } from '../../generated-definitions/ItemTypeConfigCreate.js'
import { ItemTypeConfigInfo } from '../../generated-definitions/ItemTypeConfigInfo.js'
import { ItemTypeConfigInfoArray } from '../../generated-definitions/ItemTypeConfigInfoArray.js'
import { ItemTypeConfigUpdate } from '../../generated-definitions/ItemTypeConfigUpdate.js'
import { ItemUpdate } from '../../generated-definitions/ItemUpdate.js'
import { PopulatedItemInfo } from '../../generated-definitions/PopulatedItemInfo.js'
import { PurchaseConditionUpdate } from '../../generated-definitions/PurchaseConditionUpdate.js'

export enum Key_ItemAdmin {
  ItemsConfigs = 'ItemAdmin.ItemsConfigs',
  ItemConfig = 'ItemAdmin.ItemConfig',
  ItemConfig_ById = 'ItemAdmin.ItemConfig_ById',
  ItemsConfigsSearch = 'ItemAdmin.ItemsConfigsSearch',
  Item = 'ItemAdmin.Item',
  ItemsByIds = 'ItemAdmin.ItemsByIds',
  ItemsBySku = 'ItemAdmin.ItemsBySku',
  ItemsSearch = 'ItemAdmin.ItemsSearch',
  ItemsByAppId = 'ItemAdmin.ItemsByAppId',
  Item_ByItemId = 'ItemAdmin.Item_ByItemId',
  ItemsByCriteria = 'ItemAdmin.ItemsByCriteria',
  ItemRegiondata = 'ItemAdmin.ItemRegiondata',
  App_ByItemId = 'ItemAdmin.App_ByItemId',
  ItemsBySkuLocale = 'ItemAdmin.ItemsBySkuLocale',
  ItemsItemIdBySku = 'ItemAdmin.ItemsItemIdBySku',
  ItemsLocaleByIds = 'ItemAdmin.ItemsLocaleByIds',
  ItemsItemIdBySkus = 'ItemAdmin.ItemsItemIdBySkus',
  ItemsUncategorized = 'ItemAdmin.ItemsUncategorized',
  ItemsByCriteria_ByNS = 'ItemAdmin.ItemsByCriteria_ByNS',
  ItemsEstimatedPrice = 'ItemAdmin.ItemsEstimatedPrice',
  Enable_ByItemId = 'ItemAdmin.Enable_ByItemId',
  Locale_ByItemId = 'ItemAdmin.Locale_ByItemId',
  Return_ByItemId = 'ItemAdmin.Return_ByItemId',
  ItemsPredicateTypes = 'ItemAdmin.ItemsPredicateTypes',
  Acquire_ByItemId = 'ItemAdmin.Acquire_ByItemId',
  Disable_ByItemId = 'ItemAdmin.Disable_ByItemId',
  Dynamic_ByItemId = 'ItemAdmin.Dynamic_ByItemId',
  ItemsByFeaturesBasic = 'ItemAdmin.ItemsByFeaturesBasic',
  Feature_ByItemId_ByFeature = 'ItemAdmin.Feature_ByItemId_ByFeature',
  PurchaseCondition_ByItemId = 'ItemAdmin.PurchaseCondition_ByItemId',
  ItemPurchaseConditionValidate = 'ItemAdmin.ItemPurchaseConditionValidate'
}

export const useAdmItemsConfigs = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<ItemTypeConfigInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ItemTypeConfigInfoArray) => void
): UseQueryResult<ItemTypeConfigInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmItemsConfigs>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getItemsConfigs()
    callback && callback(data)
    return data
  }

  return useQuery<ItemTypeConfigInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsConfigs, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateItemConfigMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: ItemTypeConfigCreate }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: ItemTypeConfigCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ItemTypeConfigCreate }) => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace, config: input.config }).createItemConfig(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.ItemConfig],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteItemConfig_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { id: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { id: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { id: string }) => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteItemConfig_ById(input.id)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.ItemConfig_ById],
    mutationFn,
    ...options
  })
}

export const useAdmItemConfig_ById = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { id: string },
  options?: Omit<UseQueryOptions<ItemTypeConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ItemTypeConfigInfo) => void
): UseQueryResult<ItemTypeConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmItemConfig_ById>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getItemConfig_ById(input.id)
    callback && callback(data)
    return data
  }

  return useQuery<ItemTypeConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemConfig_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateItemConfig_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ItemTypeConfigInfo, AxiosError<ApiError>, ApiArgs & { id: string; data: ItemTypeConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: ItemTypeConfigInfo) => void
): UseMutationResult<ItemTypeConfigInfo, AxiosError<ApiError>, ApiArgs & { id: string; data: ItemTypeConfigUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { id: string; data: ItemTypeConfigUpdate }) => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateItemConfig_ById(input.id, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.ItemConfig_ById],
    mutationFn,
    ...options
  })
}

export const useAdmItemsConfigsSearch = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams: {
      itemType:
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
      clazz?: string | null
    }
  },
  options?: Omit<UseQueryOptions<ItemTypeConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ItemTypeConfigInfo) => void
): UseQueryResult<ItemTypeConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmItemsConfigsSearch>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getItemsConfigsSearch(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ItemTypeConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsConfigsSearch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateItemMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<FullItemInfo, AxiosError<ApiError>, ApiArgs & { data: ItemCreate; queryParams: { storeId: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: FullItemInfo) => void
): UseMutationResult<FullItemInfo, AxiosError<ApiError>, ApiArgs & { data: ItemCreate; queryParams: { storeId: string | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ItemCreate; queryParams: { storeId: string | null } }) => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace, config: input.config }).createItem(input.data, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.Item],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateItemMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<FullItemInfo, AxiosError<ApiError>, ApiArgs & { data: InGameItemSync; queryParams: { storeId: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: FullItemInfo) => void
): UseMutationResult<FullItemInfo, AxiosError<ApiError>, ApiArgs & { data: InGameItemSync; queryParams: { storeId: string | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: InGameItemSync; queryParams: { storeId: string | null } }) => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateItem(input.data, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.Item],
    mutationFn,
    ...options
  })
}

export const useAdmItemsByIds = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { itemIds: string | null; activeOnly?: boolean | null; storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullItemInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FullItemInfoArray) => void
): UseQueryResult<FullItemInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmItemsByIds>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getItemsByIds(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<FullItemInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsByIds, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmItemsBySku = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { sku: string | null; activeOnly?: boolean | null; storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullItemInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FullItemInfo) => void
): UseQueryResult<FullItemInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmItemsBySku>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getItemsBySku(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<FullItemInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsBySku, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmItemsSearch = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams: {
      keyword: string | null
      language: string | null
      activeOnly?: boolean | null
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
      sortBy?: string | null
      storeId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<FullItemPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FullItemPagingSlicedResult) => void
): UseQueryResult<FullItemPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmItemsSearch>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getItemsSearch(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<FullItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsSearch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmItemsByAppId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { appId: string | null; activeOnly?: boolean | null; storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullItemInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FullItemInfo) => void
): UseQueryResult<FullItemInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmItemsByAppId>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getItemsByAppId(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<FullItemInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsByAppId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteItem_ByItemIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      ApiArgs & { itemId: string; queryParams?: { force?: boolean | null; storeId?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  ApiArgs & { itemId: string; queryParams?: { force?: boolean | null; storeId?: string | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { itemId: string; queryParams?: { force?: boolean | null; storeId?: string | null } }) => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteItem_ByItemId(
      input.itemId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.Item_ByItemId],
    mutationFn,
    ...options
  })
}

export const useAdmItem_ByItemId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { itemId: string; queryParams?: { activeOnly?: boolean | null; storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullItemInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FullItemInfo) => void
): UseQueryResult<FullItemInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmItem_ByItemId>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getItem_ByItemId(input.itemId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<FullItemInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.Item_ByItemId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateItem_ByItemIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      FullItemInfo,
      AxiosError<ApiError>,
      ApiArgs & { itemId: string; data: ItemUpdate; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullItemInfo) => void
): UseMutationResult<
  FullItemInfo,
  AxiosError<ApiError>,
  ApiArgs & { itemId: string; data: ItemUpdate; queryParams: { storeId: string | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { itemId: string; data: ItemUpdate; queryParams: { storeId: string | null } }) => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateItem_ByItemId(
      input.itemId,
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.Item_ByItemId],
    mutationFn,
    ...options
  })
}

export const useAdmItemsByCriteria = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: {
      activeOnly?: boolean | null
      appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'
      availableDate?: string | null
      baseAppId?: string | null
      categoryPath?: string | null
      features?: string | null
      includeSubCategoryItem?: boolean | null
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
      region?: string | null
      sortBy?: string[]
      storeId?: string | null
      tags?: string | null
      targetNamespace?: string | null
    }
  },
  options?: Omit<UseQueryOptions<FullItemPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FullItemPagingSlicedResult) => void
): UseQueryResult<FullItemPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmItemsByCriteria>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getItemsByCriteria(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<FullItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsByCriteria, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateItemRegiondataMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      ApiArgs & { data: BulkRegionDataChangeRequest; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  ApiArgs & { data: BulkRegionDataChangeRequest; queryParams: { storeId: string | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { data: BulkRegionDataChangeRequest; queryParams: { storeId: string | null } }) => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateItemRegiondata(
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.ItemRegiondata],
    mutationFn,
    ...options
  })
}

export const useAdmApp_ByItemId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { itemId: string; queryParams?: { activeOnly?: boolean | null; storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullAppInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FullAppInfo) => void
): UseQueryResult<FullAppInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmApp_ByItemId>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getApp_ByItemId(input.itemId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<FullAppInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.App_ByItemId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateApp_ByItemIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      FullAppInfo,
      AxiosError<ApiError>,
      ApiArgs & { itemId: string; data: AppUpdate; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullAppInfo) => void
): UseMutationResult<
  FullAppInfo,
  AxiosError<ApiError>,
  ApiArgs & { itemId: string; data: AppUpdate; queryParams: { storeId: string | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { itemId: string; data: AppUpdate; queryParams: { storeId: string | null } }) => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateApp_ByItemId(
      input.itemId,
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.App_ByItemId],
    mutationFn,
    ...options
  })
}

export const useAdmItemsBySkuLocale = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams: {
      sku: string | null
      activeOnly?: boolean | null
      language?: string | null
      populateBundle?: boolean | null
      region?: string | null
      storeId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<PopulatedItemInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PopulatedItemInfo) => void
): UseQueryResult<PopulatedItemInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmItemsBySkuLocale>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getItemsBySkuLocale(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PopulatedItemInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsBySkuLocale, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmItemsItemIdBySku = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { sku: string | null; activeOnly?: boolean | null; storeId?: string | null } },
  options?: Omit<UseQueryOptions<ItemId, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ItemId) => void
): UseQueryResult<ItemId, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmItemsItemIdBySku>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getItemsItemIdBySku(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ItemId, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsItemIdBySku, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmItemsLocaleByIds = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams: {
      itemIds: string | null
      activeOnly?: boolean | null
      language?: string | null
      region?: string | null
      storeId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<ItemInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ItemInfoArray) => void
): UseQueryResult<ItemInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmItemsLocaleByIds>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getItemsLocaleByIds(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ItemInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsLocaleByIds, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmItemsItemIdBySkus = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { sku?: string[]; storeId?: string | null } },
  options?: Omit<UseQueryOptions<ItemIdArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ItemIdArray) => void
): UseQueryResult<ItemIdArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmItemsItemIdBySkus>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getItemsItemIdBySkus(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ItemIdArray, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsItemIdBySkus, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmItemsUncategorized = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: { activeOnly?: boolean | null; limit?: number; offset?: number; sortBy?: string[]; storeId?: string | null }
  },
  options?: Omit<UseQueryOptions<FullItemPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FullItemPagingSlicedResult) => void
): UseQueryResult<FullItemPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmItemsUncategorized>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getItemsUncategorized(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<FullItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsUncategorized, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmItemsByCriteria_ByNS = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: {
      appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'
      availableDate?: string | null
      baseAppId?: string | null
      categoryPath?: string | null
      features?: string | null
      includeSubCategoryItem?: boolean | null
      itemName?: string | null
      itemStatus?: 'ACTIVE' | 'INACTIVE'
      itemType?: string[]
      limit?: number
      offset?: number
      region?: string | null
      sectionExclusive?: boolean | null
      sortBy?: string[]
      storeId?: string | null
      tags?: string | null
      targetNamespace?: string | null
      withTotal?: boolean | null
    }
  },
  options?: Omit<UseQueryOptions<FullItemPagingResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FullItemPagingResult) => void
): UseQueryResult<FullItemPagingResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmItemsByCriteria_ByNS>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getItemsByCriteria_ByNS(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<FullItemPagingResult, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsByCriteria_ByNS, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmItemsEstimatedPrice = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams: {
      itemIds: string | null
      userId: string | null
      platform?: string | null
      region?: string | null
      storeId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<EstimatedPriceInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: EstimatedPriceInfo) => void
): UseQueryResult<EstimatedPriceInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmItemsEstimatedPrice>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getItemsEstimatedPrice(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<EstimatedPriceInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsEstimatedPrice, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateEnable_ByItemIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<FullItemInfo, AxiosError<ApiError>, ApiArgs & { itemId: string; queryParams: { storeId: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: FullItemInfo) => void
): UseMutationResult<FullItemInfo, AxiosError<ApiError>, ApiArgs & { itemId: string; queryParams: { storeId: string | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { itemId: string; queryParams: { storeId: string | null } }) => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateEnable_ByItemId(
      input.itemId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.Enable_ByItemId],
    mutationFn,
    ...options
  })
}

export const useAdmLocale_ByItemId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    itemId: string
    queryParams?: {
      activeOnly?: boolean | null
      language?: string | null
      populateBundle?: boolean | null
      region?: string | null
      storeId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<PopulatedItemInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PopulatedItemInfo) => void
): UseQueryResult<PopulatedItemInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmLocale_ByItemId>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getLocale_ByItemId(input.itemId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PopulatedItemInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.Locale_ByItemId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateReturn_ByItemIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { itemId: string; data: ItemReturnRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { itemId: string; data: ItemReturnRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { itemId: string; data: ItemReturnRequest }) => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateReturn_ByItemId(
      input.itemId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.Return_ByItemId],
    mutationFn,
    ...options
  })
}

export const useAdmItemsPredicateTypes = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<AvailablePredicateArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AvailablePredicateArray) => void
): UseQueryResult<AvailablePredicateArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmItemsPredicateTypes>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getItemsPredicateTypes()
    callback && callback(data)
    return data
  }

  return useQuery<AvailablePredicateArray, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsPredicateTypes, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateAcquire_ByItemIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ItemAcquireResult, AxiosError<ApiError>, ApiArgs & { itemId: string; data: ItemAcquireRequest }>,
    'mutationKey'
  >,
  callback?: (data: ItemAcquireResult) => void
): UseMutationResult<ItemAcquireResult, AxiosError<ApiError>, ApiArgs & { itemId: string; data: ItemAcquireRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { itemId: string; data: ItemAcquireRequest }) => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateAcquire_ByItemId(
      input.itemId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.Acquire_ByItemId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateDisable_ByItemIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<FullItemInfo, AxiosError<ApiError>, ApiArgs & { itemId: string; queryParams: { storeId: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: FullItemInfo) => void
): UseMutationResult<FullItemInfo, AxiosError<ApiError>, ApiArgs & { itemId: string; queryParams: { storeId: string | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { itemId: string; queryParams: { storeId: string | null } }) => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateDisable_ByItemId(
      input.itemId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.Disable_ByItemId],
    mutationFn,
    ...options
  })
}

export const useAdmDynamic_ByItemId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { itemId: string },
  options?: Omit<UseQueryOptions<ItemDynamicDataInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ItemDynamicDataInfo) => void
): UseQueryResult<ItemDynamicDataInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDynamic_ByItemId>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getDynamic_ByItemId(input.itemId)
    callback && callback(data)
    return data
  }

  return useQuery<ItemDynamicDataInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.Dynamic_ByItemId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmItemsByFeaturesBasic = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { activeOnly?: boolean | null; features?: string[] } },
  options?: Omit<UseQueryOptions<BasicItemArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: BasicItemArray) => void
): UseQueryResult<BasicItemArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmItemsByFeaturesBasic>[1]) => async () => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace }).getItemsByFeaturesBasic(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<BasicItemArray, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsByFeaturesBasic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteFeature_ByItemId_ByFeatureMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      FullItemInfo,
      AxiosError<ApiError>,
      ApiArgs & { itemId: string; feature: string; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullItemInfo) => void
): UseMutationResult<
  FullItemInfo,
  AxiosError<ApiError>,
  ApiArgs & { itemId: string; feature: string; queryParams: { storeId: string | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { itemId: string; feature: string; queryParams: { storeId: string | null } }) => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteFeature_ByItemId_ByFeature(
      input.itemId,
      input.feature,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.Feature_ByItemId_ByFeature],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateFeature_ByItemId_ByFeatureMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      FullItemInfo,
      AxiosError<ApiError>,
      ApiArgs & { itemId: string; feature: string; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullItemInfo) => void
): UseMutationResult<
  FullItemInfo,
  AxiosError<ApiError>,
  ApiArgs & { itemId: string; feature: string; queryParams: { storeId: string | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { itemId: string; feature: string; queryParams: { storeId: string | null } }) => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateFeature_ByItemId_ByFeature(
      input.itemId,
      input.feature,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.Feature_ByItemId_ByFeature],
    mutationFn,
    ...options
  })
}

export const useAdmUpdatePurchaseCondition_ByItemIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      FullItemInfo,
      AxiosError<ApiError>,
      ApiArgs & { itemId: string; data: PurchaseConditionUpdate; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullItemInfo) => void
): UseMutationResult<
  FullItemInfo,
  AxiosError<ApiError>,
  ApiArgs & { itemId: string; data: PurchaseConditionUpdate; queryParams: { storeId: string | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { itemId: string; data: PurchaseConditionUpdate; queryParams: { storeId: string | null } }
  ) => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace, config: input.config }).updatePurchaseCondition_ByItemId(
      input.itemId,
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.PurchaseCondition_ByItemId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateItemPurchaseConditionValidateMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      ItemPurchaseConditionValidateResultArray,
      AxiosError<ApiError>,
      ApiArgs & { data: ItemPurchaseConditionValidateRequest; queryParams: { userId: string | null; platform?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: ItemPurchaseConditionValidateResultArray) => void
): UseMutationResult<
  ItemPurchaseConditionValidateResultArray,
  AxiosError<ApiError>,
  ApiArgs & { data: ItemPurchaseConditionValidateRequest; queryParams: { userId: string | null; platform?: string | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { data: ItemPurchaseConditionValidateRequest; queryParams: { userId: string | null; platform?: string | null } }
  ) => {
    const data = await ItemAdminApi(sdk, { namespace: input.namespace, config: input.config }).createItemPurchaseConditionValidate(
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.ItemPurchaseConditionValidate],
    mutationFn,
    ...options
  })
}
