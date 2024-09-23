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
import { ItemApi } from '../ItemApi.js'

import { AppInfo } from '../../generated-definitions/AppInfo.js'
import { EstimatedPriceInfoArray } from '../../generated-definitions/EstimatedPriceInfoArray.js'
import { ItemDynamicDataInfo } from '../../generated-definitions/ItemDynamicDataInfo.js'
import { ItemInfo } from '../../generated-definitions/ItemInfo.js'
import { ItemInfoArray } from '../../generated-definitions/ItemInfoArray.js'
import { ItemPagingSlicedResult } from '../../generated-definitions/ItemPagingSlicedResult.js'
import { ItemPurchaseConditionValidateRequest } from '../../generated-definitions/ItemPurchaseConditionValidateRequest.js'
import { ItemPurchaseConditionValidateResultArray } from '../../generated-definitions/ItemPurchaseConditionValidateResultArray.js'
import { PopulatedItemInfo } from '../../generated-definitions/PopulatedItemInfo.js'

export enum Key_Item {
  ItemsBySku = 'Platform.Item.ItemsBySku',
  ItemsSearch = 'Platform.Item.ItemsSearch',
  ItemsByAppId = 'Platform.Item.ItemsByAppId',
  ItemsByCriteria = 'Platform.Item.ItemsByCriteria',
  ItemsLocaleByIds = 'Platform.Item.ItemsLocaleByIds',
  ItemsEstimatedPrice = 'Platform.Item.ItemsEstimatedPrice',
  Locale_ByItemId = 'Platform.Item.Locale_ByItemId',
  Dynamic_ByItemId = 'Platform.Item.Dynamic_ByItemId',
  AppLocale_ByItemId = 'Platform.Item.AppLocale_ByItemId',
  ItemPurchaseConditionValidate = 'Platform.Item.ItemPurchaseConditionValidate'
}

/**
 * This API is used to get the item by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the item with sku&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Item.ItemsBySku, input]
 * }
 * ```
 */
export const useItemApi_GetItemsBySku = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: {
      sku: string | null
      autoCalcEstimatedPrice?: boolean | null
      language?: string | null
      region?: string | null
      storeId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<ItemInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ItemInfo>) => void
): UseQueryResult<ItemInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemApi_GetItemsBySku>[1]) => async () => {
    const response = await ItemApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsBySku(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ItemInfo, AxiosError<ApiError>>({
    queryKey: [Key_Item.ItemsBySku, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to search items by keyword in title, description and long description, It&#39;s language constrained, also if item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Item.ItemsSearch, input]
 * }
 * ```
 */
export const useItemApi_GetItemsSearch = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: {
      keyword: string | null
      language: string | null
      autoCalcEstimatedPrice?: boolean | null
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
      storeId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<ItemPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ItemPagingSlicedResult>) => void
): UseQueryResult<ItemPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemApi_GetItemsSearch>[1]) => async () => {
    const response = await ItemApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsSearch(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_Item.ItemsSearch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get item by appId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the item with that appId&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Item.ItemsByAppId, input]
 * }
 * ```
 */
export const useItemApi_GetItemsByAppId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: { appId: string | null; language?: string | null; region?: string | null; storeId?: string | null }
  },
  options?: Omit<UseQueryOptions<ItemInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ItemInfo>) => void
): UseQueryResult<ItemInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemApi_GetItemsByAppId>[1]) => async () => {
    const response = await ItemApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsByAppId(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ItemInfo, AxiosError<ApiError>>({
    queryKey: [Key_Item.ItemsByAppId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to query items by criteria within a store. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Item.ItemsByCriteria, input]
 * }
 * ```
 */
export const useItemApi_GetItemsByCriteria = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'
      autoCalcEstimatedPrice?: boolean | null
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
      language?: string | null
      limit?: number
      offset?: number
      region?: string | null
      sortBy?: string[]
      storeId?: string | null
      tags?: string | null
    }
  },
  options?: Omit<UseQueryOptions<ItemPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ItemPagingSlicedResult>) => void
): UseQueryResult<ItemPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemApi_GetItemsByCriteria>[1]) => async () => {
    const response = await ItemApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsByCriteria(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_Item.ItemsByCriteria, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to bulk get locale items. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store items)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store items)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Item.ItemsLocaleByIds, input]
 * }
 * ```
 */
export const useItemApi_GetItemsLocaleByIds = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: {
      itemIds: string | null
      autoCalcEstimatedPrice?: boolean | null
      language?: string | null
      region?: string | null
      storeId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<ItemInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ItemInfoArray>) => void
): UseQueryResult<ItemInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemApi_GetItemsLocaleByIds>[1]) => async () => {
    const response = await ItemApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsLocaleByIds(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ItemInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_Item.ItemsLocaleByIds, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get estimated prices of item
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Item.ItemsEstimatedPrice, input]
 * }
 * ```
 */
export const useItemApi_GetItemsEstimatedPrice = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { itemIds: string | null; region?: string | null; storeId?: string | null } },
  options?: Omit<UseQueryOptions<EstimatedPriceInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EstimatedPriceInfoArray>) => void
): UseQueryResult<EstimatedPriceInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemApi_GetItemsEstimatedPrice>[1]) => async () => {
    const response = await ItemApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsEstimatedPrice(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<EstimatedPriceInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_Item.ItemsEstimatedPrice, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get an item in locale. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Item.Locale_ByItemId, input]
 * }
 * ```
 */
export const useItemApi_GetLocale_ByItemId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    itemId: string
    queryParams?: {
      autoCalcEstimatedPrice?: boolean | null
      language?: string | null
      populateBundle?: boolean | null
      region?: string | null
      storeId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<PopulatedItemInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PopulatedItemInfo>) => void
): UseQueryResult<PopulatedItemInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemApi_GetLocale_ByItemId>[1]) => async () => {
    const response = await ItemApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getLocale_ByItemId(
      input.itemId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PopulatedItemInfo, AxiosError<ApiError>>({
    queryKey: [Key_Item.Locale_ByItemId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get item dynamic data for a published item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item dynamic data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Item.Dynamic_ByItemId, input]
 * }
 * ```
 */
export const useItemApi_GetDynamic_ByItemId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { itemId: string },
  options?: Omit<UseQueryOptions<ItemDynamicDataInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ItemDynamicDataInfo>) => void
): UseQueryResult<ItemDynamicDataInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemApi_GetDynamic_ByItemId>[1]) => async () => {
    const response = await ItemApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getDynamic_ByItemId(input.itemId)
    callback && callback(response)
    return response.data
  }

  return useQuery<ItemDynamicDataInfo, AxiosError<ApiError>>({
    queryKey: [Key_Item.Dynamic_ByItemId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get an app in locale. If app not exist in specific region, default region app will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store app)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store app)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: app data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Item.AppLocale_ByItemId, input]
 * }
 * ```
 */
export const useItemApi_GetAppLocale_ByItemId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    itemId: string
    queryParams?: { language?: string | null; region?: string | null; storeId?: string | null }
  },
  options?: Omit<UseQueryOptions<AppInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AppInfo>) => void
): UseQueryResult<AppInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemApi_GetAppLocale_ByItemId>[1]) => async () => {
    const response = await ItemApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getAppLocale_ByItemId(
      input.itemId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<AppInfo, AxiosError<ApiError>>({
    queryKey: [Key_Item.AppLocale_ByItemId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to validate user item purchase condition
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Item.ItemPurchaseConditionValidate, input]
 * }
 * ```
 */
export const useItemApi_CreateItemPurchaseConditionValidateMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      ItemPurchaseConditionValidateResultArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: ItemPurchaseConditionValidateRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: ItemPurchaseConditionValidateResultArray) => void
): UseMutationResult<
  ItemPurchaseConditionValidateResultArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: ItemPurchaseConditionValidateRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ItemPurchaseConditionValidateRequest }) => {
    const response = await ItemApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createItemPurchaseConditionValidate(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Item.ItemPurchaseConditionValidate],
    mutationFn,
    ...options
  })
}
