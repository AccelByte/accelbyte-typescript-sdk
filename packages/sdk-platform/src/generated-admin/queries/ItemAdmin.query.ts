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
import { ItemAdminApi } from '../ItemAdminApi.js'

import { AppUpdate } from '../../generated-definitions/AppUpdate.js'
import { AvailablePredicateArray } from '../../generated-definitions/AvailablePredicateArray.js'
import { BasicItemArray } from '../../generated-definitions/BasicItemArray.js'
import { BulkRegionDataChangeRequest } from '../../generated-definitions/BulkRegionDataChangeRequest.js'
import { ChangeStatusItemRequest } from '../../generated-definitions/ChangeStatusItemRequest.js'
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
import { ItemDependency } from '../../generated-definitions/ItemDependency.js'
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
  ItemsConfigs = 'Platform.ItemAdmin.ItemsConfigs',
  ItemConfig = 'Platform.ItemAdmin.ItemConfig',
  ItemConfig_ById = 'Platform.ItemAdmin.ItemConfig_ById',
  ItemsConfigsSearch = 'Platform.ItemAdmin.ItemsConfigsSearch',
  Item = 'Platform.ItemAdmin.Item',
  ItemsByIds = 'Platform.ItemAdmin.ItemsByIds',
  ItemsBySku = 'Platform.ItemAdmin.ItemsBySku',
  ItemsSearch = 'Platform.ItemAdmin.ItemsSearch',
  ItemsByAppId = 'Platform.ItemAdmin.ItemsByAppId',
  Item_ByItemId = 'Platform.ItemAdmin.Item_ByItemId',
  ItemsByCriteria = 'Platform.ItemAdmin.ItemsByCriteria',
  ItemRegiondata = 'Platform.ItemAdmin.ItemRegiondata',
  App_ByItemId = 'Platform.ItemAdmin.App_ByItemId',
  ItemsBySkuLocale = 'Platform.ItemAdmin.ItemsBySkuLocale',
  ItemsItemIdBySku = 'Platform.ItemAdmin.ItemsItemIdBySku',
  ItemsLocaleByIds = 'Platform.ItemAdmin.ItemsLocaleByIds',
  ItemsItemIdBySkus = 'Platform.ItemAdmin.ItemsItemIdBySkus',
  ItemsUncategorized = 'Platform.ItemAdmin.ItemsUncategorized',
  ItemsByCriteria_v2 = 'Platform.ItemAdmin.ItemsByCriteria_v2',
  ItemsEstimatedPrice = 'Platform.ItemAdmin.ItemsEstimatedPrice',
  Enable_ByItemId = 'Platform.ItemAdmin.Enable_ByItemId',
  Locale_ByItemId = 'Platform.ItemAdmin.Locale_ByItemId',
  Return_ByItemId = 'Platform.ItemAdmin.Return_ByItemId',
  ItemsPredicateTypes = 'Platform.ItemAdmin.ItemsPredicateTypes',
  Acquire_ByItemId = 'Platform.ItemAdmin.Acquire_ByItemId',
  Disable_ByItemId = 'Platform.ItemAdmin.Disable_ByItemId',
  Dynamic_ByItemId = 'Platform.ItemAdmin.Dynamic_ByItemId',
  ItemsByFeaturesBasic = 'Platform.ItemAdmin.ItemsByFeaturesBasic',
  References_ByItemId = 'Platform.ItemAdmin.References_ByItemId',
  Feature_ByItemId_ByFeature = 'Platform.ItemAdmin.Feature_ByItemId_ByFeature',
  PurchaseCondition_ByItemId = 'Platform.ItemAdmin.PurchaseCondition_ByItemId',
  ItemPurchaseConditionValidate = 'Platform.ItemAdmin.ItemPurchaseConditionValidate'
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;This API is used to get all item type configs.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemsConfigs, input]
 * }
 * ```
 */
export const useItemAdminApi_GetItemsConfigs = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ItemTypeConfigInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ItemTypeConfigInfoArray>) => void
): UseQueryResult<ItemTypeConfigInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetItemsConfigs>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsConfigs()
    callback && callback(response)
    return response.data
  }

  return useQuery<ItemTypeConfigInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsConfigs, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;This API is used to create an item type config.&lt;p&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item type config data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemConfig, input]
 * }
 * ```
 */
export const useItemAdminApi_CreateItemConfigMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ItemTypeConfigCreate }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ItemTypeConfigCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ItemTypeConfigCreate }) => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createItemConfig(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.ItemConfig],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;This API is used to delete an item type config permanently.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemConfig_ById, input]
 * }
 * ```
 */
export const useItemAdminApi_DeleteItemConfig_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { id: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { id: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { id: string }) => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteItemConfig_ById(
      input.id
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.ItemConfig_ById],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;This API is used to get an item type config.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item type config data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemConfig_ById, input]
 * }
 * ```
 */
export const useItemAdminApi_GetItemConfig_ById = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { id: string },
  options?: Omit<UseQueryOptions<ItemTypeConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ItemTypeConfigInfo>) => void
): UseQueryResult<ItemTypeConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetItemConfig_ById>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemConfig_ById(input.id)
    callback && callback(response)
    return response.data
  }

  return useQuery<ItemTypeConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemConfig_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;This API is used to update an item type config.&lt;p&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item type config data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemConfig_ById, input]
 * }
 * ```
 */
export const useItemAdminApi_UpdateItemConfig_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ItemTypeConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { id: string; data: ItemTypeConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: ItemTypeConfigInfo) => void
): UseMutationResult<ItemTypeConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { id: string; data: ItemTypeConfigUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { id: string; data: ItemTypeConfigUpdate }) => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateItemConfig_ById(
      input.id,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.ItemConfig_ById],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;This API is used to get an item type config.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item type config data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemsConfigsSearch, input]
 * }
 * ```
 */
export const useItemAdminApi_GetItemsConfigsSearch = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
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
  callback?: (data: AxiosResponse<ItemTypeConfigInfo>) => void
): UseQueryResult<ItemTypeConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetItemsConfigsSearch>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsConfigsSearch(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ItemTypeConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsConfigsSearch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to create an item. APP item only can created in publisher namespace.&lt;p&gt;An item create example:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;categoryPath&#34;: &#34;/games&#34;, &#34;localizations&#34;: \{ &#34;en&#34;: \{ &#34;title&#34;:&#34;required&#34;, &#34;description&#34;:&#34;optional&#34;, &#34;longDescription&#34;:&#34;optional&#34;, &#34;localExt&#34;: \{ &#34;properties&#34;:\[ \{ &#34;key1&#34;:&#34;value1&#34;, &#34;key2&#34;:&#34;value2&#34; \} \], &#34;functions&#34;:\[ \{ &#34;key1&#34;:&#34;value1&#34;, &#34;key2&#34;:&#34;value2&#34; \} \] \} \} \}, &#34;images&#34;: \[ \{ &#34;as&#34;:&#34;optional, image for&#34;, &#34;caption&#34;:&#34;optional&#34;, &#34;height&#34;:10, &#34;width&#34;:10, &#34;imageUrl&#34;:&#34;http://img-url-required&#34;, &#34;smallImageUrl&#34;:&#34;http://small-img-url-required&#34; \} \], &#34;thumbnailUrl&#34;: &#34;optional, thumbnail url&#34;, &#34;status&#34;: &#34;ACTIVE&#34;, &#34;listable&#34;: true, &#34;purchasable&#34;: true, &#34;itemType&#34;: &#34;APP(allowed: [APP,COINS,INGAMEITEM,CODE,BUNDLE])&#34;, &#34;name&#34;: &#34;required, also will be used as entitlement name&#34;, &#34;entitlementType&#34;: &#34;DURABLE(allowed:[DURABLE,CONSUMABLE], should be CONSUMABLE when item type is COINS)&#34;, &#34;useCount&#34;: 1(optional, required if the entitlement type is consumable), &#34;stackable&#34;: false, &#34;appId&#34;: &#34;optional, required if itemType is APP&#34;, &#34;appType&#34;: &#34;GAME(optional, required if itemType is APP)&#34;, &#34;seasonType&#34;: &#34;PASS(optional, required if itemType is SEASON)&#34;, &#34;baseAppId&#34;: &#34;optional, set value of game app id if you want to link to a game&#34;, &#34;targetCurrencyCode&#34;: &#34;optional, required if itemType is COINS&#34;, &#34;targetNamespace&#34;: &#34;optional, required when itemType is INGAMEITEM, the targetNamespace will only take effect when the item created belongs to the publisher namespace&#34;, &#34;sku&#34;: &#34;optional, commonly unique item code&#34;, &#34;regionData&#34;: \{ &#34;US(store&#39;s default region is required)&#34;: \[ \{ &#34;price&#34;:10, &#34;discountPercentage&#34;: 0(integer, optional, range[0,100], discountedPrice = price \* ((100 - discountPercentage) \* 0.01), will use it to calculate discounted price if it is not 0), &#34;discountAmount&#34;:0(integer, optional, range[0,itemPrice], will use it to calculate discounted price if discountPercentage is 0), &#34;currencyCode&#34;:&#34;code(required, example: USD)&#34;, &#34;currencyNamespace&#34;:&#34;test-ns-required(allow publisher namespace if namespace is publisher namespace, allow publisher and game namespace if namespace is not publisher namespace)&#34;, &#34;trialPrice&#34;:5(required while fixedTrialCycles set, should &gt;=0 and &lt;= price, will same as price if not present), &#34;purchaseAt&#34;:&#34;optional yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;&#34;, &#34;expireAt&#34;:&#34;optional yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;&#34;, &#34;discountPurchaseAt&#34;:&#34;optional yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;&#34;, &#34;discountExpireAt&#34;:&#34;optional yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;&#34; \} \] \}, &#34;itemIds&#34;: \[ &#34;itemId&#34; \], &#34;itemQty&#34;: \{ &#34;itemId&#34;:1 \}, &#34;recurring&#34;: \{ &#34;cycle&#34;:&#34;MONTHLY(allowed: [WEEKLY,MONTHLY,QUARTERLY,YEARLY])&#34;, &#34;fixedFreeDays&#34;:0(integer, fixed free days, 0 means not set), &#34;fixedTrialCycles&#34;:0(integer, fixed trial cycles, 0 means not set, will not take effect if fixedFreeDays set), &#34;graceDays&#34;:7(integer, recurring grace days, retry recurring charge within configured days if charge fail, default 7) \}, &#34;tags&#34;: \[ &#34;exampleTag24&#34; \], &#34;features&#34;: \[ &#34;feature&#34; \], &#34;clazz&#34;: &#34;weapon&#34;, &#34;boothName&#34;: &#34;C_campaign1&#34;, &#34;displayOrder&#34;: 1000, &#34;ext&#34;: \{ &#34;properties&#34;:\[ \{ &#34;key1&#34;:&#34;value1&#34;, &#34;key2&#34;:&#34;value2&#34; \} \], &#34;functions&#34;:\[ \{ &#34;key1&#34;:&#34;value1&#34;, &#34;key2&#34;:&#34;value2&#34; \} \] \}, &#34;maxCountPerUser&#34;: 1(integer, optional, -1 means UNLIMITED), &#34;maxCount&#34;: 1(integer, optional, -1 means UNLIMITED, unset when itemType is CODE) }&lt;/code&gt;&lt;/pre&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created item data&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for item extension and localization extension and inventory config custom attributes&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.Item, input]
 * }
 * ```
 */
export const useItemAdminApi_CreateItemMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      FullItemInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: ItemCreate; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullItemInfo) => void
): UseMutationResult<
  FullItemInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: ItemCreate; queryParams: { storeId: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ItemCreate; queryParams: { storeId: string | null } }) => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createItem(
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.Item],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;This API is used to sync an in game item in game namespace to publisher namespace, only INGAMEITEM, CODE, COINS and SEASON are supported&lt;p&gt;The synced item has an additional field targetItemId besides targetNamespace, mostly this item should not modified manually again. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.Item, input]
 * }
 * ```
 */
export const useItemAdminApi_UpdateItemMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      FullItemInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: InGameItemSync; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullItemInfo) => void
): UseMutationResult<
  FullItemInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: InGameItemSync; queryParams: { storeId: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: InGameItemSync; queryParams: { storeId: string | null } }) => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateItem(
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.Item],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to get items.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemsByIds, input]
 * }
 * ```
 */
export const useItemAdminApi_GetItemsByIds = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { itemIds: string | null; activeOnly?: boolean | null; storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullItemInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FullItemInfoArray>) => void
): UseQueryResult<FullItemInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetItemsByIds>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsByIds(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<FullItemInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsByIds, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get the item by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the item with sku&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemsBySku, input]
 * }
 * ```
 */
export const useItemAdminApi_GetItemsBySku = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { sku: string | null; activeOnly?: boolean | null; storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullItemInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FullItemInfo>) => void
): UseQueryResult<FullItemInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetItemsBySku>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsBySku(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<FullItemInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsBySku, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to search items by keyword in title, description and long description within a store.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemsSearch, input]
 * }
 * ```
 */
export const useItemAdminApi_GetItemsSearch = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
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
  callback?: (data: AxiosResponse<FullItemPagingSlicedResult>) => void
): UseQueryResult<FullItemPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetItemsSearch>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsSearch(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<FullItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsSearch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get the item by appId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the item with that appId&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemsByAppId, input]
 * }
 * ```
 */
export const useItemAdminApi_GetItemsByAppId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { appId: string | null; activeOnly?: boolean | null; storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullItemInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FullItemInfo>) => void
): UseQueryResult<FullItemInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetItemsByAppId>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsByAppId(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<FullItemInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsByAppId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to delete an item permanently.&lt;p&gt;force: the default value should be: false. When the value is: &lt;li&gt;&lt;i&gt;false:&lt;i&gt;only the items in the draft store that have never been published yet can be removed.&lt;/li&gt;&lt;li&gt;&lt;i&gt;true:&lt;i&gt;the item in the draft store(even been published before) can be removed.&lt;/li&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.Item_ByItemId, input]
 * }
 * ```
 */
export const useItemAdminApi_DeleteItem_ByItemIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { itemId: string; queryParams?: { featuresToCheck?: string[]; force?: boolean | null; storeId?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { itemId: string; queryParams?: { featuresToCheck?: string[]; force?: boolean | null; storeId?: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & {
      itemId: string
      queryParams?: { featuresToCheck?: string[]; force?: boolean | null; storeId?: string | null }
    }
  ) => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteItem_ByItemId(
      input.itemId,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.Item_ByItemId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to get an item.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.Item_ByItemId, input]
 * }
 * ```
 */
export const useItemAdminApi_GetItem_ByItemId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { itemId: string; queryParams?: { activeOnly?: boolean | null; storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullItemInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FullItemInfo>) => void
): UseQueryResult<FullItemInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetItem_ByItemId>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItem_ByItemId(
      input.itemId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<FullItemInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.Item_ByItemId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to update an item.&lt;p&gt;An item update example:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;categoryPath&#34;: &#34;/games&#34;, &#34;localizations&#34;: \{ &#34;en&#34;: \{ &#34;title&#34;:&#34;required&#34;, &#34;description&#34;:&#34;optional&#34;, &#34;longDescription&#34;:&#34;optional&#34;, &#34;localExt&#34;: \{ &#34;properties&#34;:\[ \{ &#34;key1&#34;:&#34;value1&#34;, &#34;key2&#34;:&#34;value2&#34; \} \], &#34;functions&#34;:\[ \{ &#34;key1&#34;:&#34;value1&#34;, &#34;key2&#34;:&#34;value2&#34; \} \] \} \} \}, &#34;images&#34;: \[ \{ &#34;as&#34;:&#34;optional, image for&#34;, &#34;caption&#34;:&#34;optional&#34;, &#34;height&#34;:10, &#34;width&#34;:10, &#34;imageUrl&#34;:&#34;http://img-url-required&#34;, &#34;smallImageUrl&#34;:&#34;http://small-img-url-required&#34; \} \], &#34;thumbnailUrl&#34;: &#34;optional, thumbnail url&#34;, &#34;status&#34;: &#34;ACTIVE&#34;, &#34;listable&#34;: true, &#34;purchasable&#34;: true, &#34;itemType&#34;: &#34;APP(allowed: [APP,COINS,INGAMEITEM,CODE,BUNDLE])&#34;, &#34;name&#34;: &#34;optional&#34;, &#34;entitlementType&#34;: &#34;DURABLE(allowed:[DURABLE,CONSUMABLE], should be CONSUMABLE when item type is COINS)&#34;, &#34;useCount&#34;: 1(optional, required if the entitlement type is consumable), &#34;stackable&#34;: false, &#34;appId&#34;: &#34;optional, required if itemType is APP&#34;, &#34;baseAppId&#34;: &#34;optional, set value of game app id if you want to link to a game&#34;, &#34;appType&#34;: &#34;GAME(optional, required if itemType is APP)&#34;, &#34;seasonType&#34;: &#34;PASS(optional, required if itemType is SEASON)&#34;, &#34;sku&#34;: &#34;optional, commonly unique item code&#34;, &#34;targetCurrencyCode&#34;: &#34;optional, required if itemType is COINS&#34;, &#34;targetNamespace&#34;: &#34;optional, required when itemType is INGAMEITEM, the targetNamespace will only take effect when the item created belongs to the publisher namespace&#34;, &#34;regionData&#34;: \{ &#34;US(store&#39;s default region is required)&#34;: \[ \{ &#34;price&#34;:10, &#34;discountPercentage&#34;:0(integer, optional, range[0,100], discountedPrice = price\*((100 - discountPercentage) \* 0.01), if it is not 0, will use it to calculate discounted price), &#34;discountAmount&#34;:0(integer, optional, range[0,itemPrice], will use it to calculate discounted price if discountPercentage is 0), &#34;currencyCode&#34;:&#34;code(required, example: USD)&#34;, &#34;currencyNamespace&#34;:&#34;test-ns-required(allow publisher namespace if namespace is publisher namespace, allow publisher and game namespace if namespace is not publisher namespace)&#34;, &#34;trialPrice&#34;:5(required while fixedTrialCycles set, should &gt;=0 and &lt;= price, will same as price if not present), &#34;purchaseAt&#34;:&#34;optional yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;&#34;, &#34;expireAt&#34;:&#34;optional yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;&#34;, &#34;discountPurchaseAt&#34;:&#34;optional yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;&#34;, &#34;discountExpireAt&#34;:&#34;optional yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;&#34; \} \] \}, &#34;itemIds&#34;: \[ &#34;itemId&#34; \], &#34;itemQty&#34;: \{ &#34;itemId&#34;:1 \}, &#34;recurring&#34;: \{ &#34;cycle&#34;:&#34;MONTHLY(allowed: [WEEKLY,MONTHLY,QUARTERLY,YEARLY])&#34;, &#34;fixedFreeDays&#34;:0(integer, fixed free days, 0 means not set), &#34;fixedTrialCycles&#34;:0(integer, fixed trial cycles, 0 means not set, will not take effect if fixedFreeDays set), &#34;graceDays&#34;:7(integer, recurring grace days, retry recurring charge within configured days if charge fail, default 7) \}, &#34;tags&#34;: \[ &#34;exampleTag24&#34; \], &#34;features&#34;: \[ &#34;feature&#34; \], &#34;clazz&#34;: &#34;weapon&#34;, &#34;boothName&#34;: &#34;C_campaign1&#34;, &#34;displayOrder&#34;: 1000, &#34;ext&#34;: \{ &#34;properties&#34;:\[ \{ &#34;key1&#34;:&#34;value1&#34;, &#34;key2&#34;:&#34;value2&#34; \} \], &#34;functions&#34;:\[ \{ &#34;key1&#34;:&#34;value1&#34;, &#34;key2&#34;:&#34;value2&#34; \} \] \}, &#34;maxCountPerUser&#34;: 1(integer, optional, -1 means UNLIMITED), &#34;maxCount&#34;: 1(integer, optional, -1 means UNLIMITED, new value should &gt;= old value if both old value and new value is limited, unset when item type is CODE) }&lt;/code&gt;&lt;/pre&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated item data&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for item extension and localization extension&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.Item_ByItemId, input]
 * }
 * ```
 */
export const useItemAdminApi_UpdateItem_ByItemIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      FullItemInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { itemId: string; data: ItemUpdate; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullItemInfo) => void
): UseMutationResult<
  FullItemInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { itemId: string; data: ItemUpdate; queryParams: { storeId: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { itemId: string; data: ItemUpdate; queryParams: { storeId: string | null } }) => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateItem_ByItemId(
      input.itemId,
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.Item_ByItemId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to query items by criteria within a store.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemsByCriteria, input]
 * }
 * ```
 */
export const useItemAdminApi_GetItemsByCriteria = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
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
  callback?: (data: AxiosResponse<FullItemPagingSlicedResult>) => void
): UseQueryResult<FullItemPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetItemsByCriteria>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsByCriteria(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<FullItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsByCriteria, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to update region data of items in bulk &lt;br /&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemRegiondata, input]
 * }
 * ```
 */
export const useItemAdminApi_UpdateItemRegiondataMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: BulkRegionDataChangeRequest; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: BulkRegionDataChangeRequest; queryParams: { storeId: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkRegionDataChangeRequest; queryParams: { storeId: string | null } }) => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateItemRegiondata(
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.ItemRegiondata],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to get an app info.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: app data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.App_ByItemId, input]
 * }
 * ```
 */
export const useItemAdminApi_GetApp_ByItemId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { itemId: string; queryParams?: { activeOnly?: boolean | null; storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullAppInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FullAppInfo>) => void
): UseQueryResult<FullAppInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetApp_ByItemId>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getApp_ByItemId(
      input.itemId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<FullAppInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.App_ByItemId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to update an app.&lt;p&gt;An app update example:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;developer&#34;: &#34;accelbyte&#34;, &#34;publisher&#34;: &#34;accelbyte&#34;, &#34;websiteUrl&#34;: &#34;http://accelbyte.io&#34;, &#34;forumUrl&#34;: &#34;http://accelbyte.io&#34;, &#34;platforms&#34;: \[&#34;Windows(allowed values: Windows, MacOS, Linux, IOS, Android)&#34;\], &#34;platformRequirements&#34;: \{ &#34;Windows&#34;: \[ \{ &#34;label&#34;:&#34;minimum(can be minimum or recommended)&#34;, &#34;osVersion&#34;:&#34;os version&#34;, &#34;processor&#34;:&#34;processor&#34;, &#34;ram&#34;:&#34;RAM&#34;, &#34;graphics&#34;:&#34;graphics&#34;, &#34;directXVersion&#34;:&#34;directXVersion&#34;, &#34;diskSpace&#34;:&#34;diskSpace&#34;, &#34;soundCard&#34;:&#34;soundCard&#34;, &#34;additionals&#34;:&#34;additionals&#34; \} \] \}, &#34;carousel&#34;: \[ \{ &#34;type&#34;:&#34;image(allowed values: image, video)&#34;, &#34;videoSource&#34;:&#34;generic(allowed values:generic, youtube, viemo)&#34;, &#34;url&#34;:&#34;url&#34;, &#34;alt&#34;:&#34;alternative url or text&#34;, &#34;thumbnailUrl&#34;:&#34;thumbnail url&#34;, &#34;previewUrl&#34;:&#34;preview url&#34;, \} \], &#34;localizations&#34;: \{ &#34;en&#34;: \{ &#34;slogan&#34;:&#34;slogan&#34;, &#34;announcement&#34;:&#34;announcement&#34;, \} \}, &#34;primaryGenre&#34;: &#34;Action&#34;, &#34;genres&#34;: \[&#34;Action&#34;, &#34;Adventure&#34;\], &#34;players&#34;: \[&#34;Single&#34;\], &#34;releaseDate&#34;: &#34;optional yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;&#34; }&lt;/code&gt;&lt;/pre&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated app data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.App_ByItemId, input]
 * }
 * ```
 */
export const useItemAdminApi_UpdateApp_ByItemIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      FullAppInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { itemId: string; data: AppUpdate; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullAppInfo) => void
): UseMutationResult<
  FullAppInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { itemId: string; data: AppUpdate; queryParams: { storeId: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { itemId: string; data: AppUpdate; queryParams: { storeId: string | null } }) => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateApp_ByItemId(
      input.itemId,
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.App_ByItemId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to get an item by sku in specific locale. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemsBySkuLocale, input]
 * }
 * ```
 */
export const useItemAdminApi_GetItemsBySkuLocale = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
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
  callback?: (data: AxiosResponse<PopulatedItemInfo>) => void
): UseQueryResult<PopulatedItemInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetItemsBySkuLocale>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsBySkuLocale(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PopulatedItemInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsBySkuLocale, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; This API is used to get the itemId by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the itemId with sku&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemsItemIdBySku, input]
 * }
 * ```
 */
export const useItemAdminApi_GetItemsItemIdBySku = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { sku: string | null; activeOnly?: boolean | null; storeId?: string | null } },
  options?: Omit<UseQueryOptions<ItemId, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ItemId>) => void
): UseQueryResult<ItemId, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetItemsItemIdBySku>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsItemIdBySku(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ItemId, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsItemIdBySku, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to bulk get locale items. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemsLocaleByIds, input]
 * }
 * ```
 */
export const useItemAdminApi_GetItemsLocaleByIds = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: {
      itemIds: string | null
      activeOnly?: boolean | null
      language?: string | null
      region?: string | null
      storeId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<ItemInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ItemInfoArray>) => void
): UseQueryResult<ItemInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetItemsLocaleByIds>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsLocaleByIds(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ItemInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsLocaleByIds, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get an list of itemId by list of sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemsItemIdBySkus, input]
 * }
 * ```
 */
export const useItemAdminApi_GetItemsItemIdBySkus = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { sku?: string[]; storeId?: string | null } },
  options?: Omit<UseQueryOptions<ItemIdArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ItemIdArray>) => void
): UseQueryResult<ItemIdArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetItemsItemIdBySkus>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsItemIdBySkus(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ItemIdArray, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsItemIdBySkus, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to query uncategorized items within a store.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of uncategorized items&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemsUncategorized, input]
 * }
 * ```
 */
export const useItemAdminApi_GetItemsUncategorized = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: { activeOnly?: boolean | null; limit?: number; offset?: number; sortBy?: string[]; storeId?: string | null }
  },
  options?: Omit<UseQueryOptions<FullItemPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FullItemPagingSlicedResult>) => void
): UseQueryResult<FullItemPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetItemsUncategorized>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsUncategorized(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<FullItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsUncategorized, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to query items by criteria within a store.&lt;p&gt;The behaviour for itemStatus query parameter:&lt;li&gt;TRUE: Show only ACTIVE items&lt;/li&gt;&lt;li&gt;FALSE: Show only INACTIVE items&lt;/li&gt;&lt;li&gt;Not provided: show both ACTIVE and INACTIVE items&lt;/li&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemsByCriteria_v2, input]
 * }
 * ```
 */
export const useItemAdminApi_GetItemsByCriteria_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
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
  callback?: (data: AxiosResponse<FullItemPagingResult>) => void
): UseQueryResult<FullItemPagingResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetItemsByCriteria_v2>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsByCriteria_v2(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<FullItemPagingResult, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsByCriteria_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get estimated prices of a flexible pricing bundle
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemsEstimatedPrice, input]
 * }
 * ```
 */
export const useItemAdminApi_GetItemsEstimatedPrice = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: {
      itemIds: string | null
      userId: string | null
      platform?: string | null
      region?: string | null
      storeId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<EstimatedPriceInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EstimatedPriceInfo>) => void
): UseQueryResult<EstimatedPriceInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetItemsEstimatedPrice>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsEstimatedPrice(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<EstimatedPriceInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsEstimatedPrice, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Enable an item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated item&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.Enable_ByItemId, input]
 * }
 * ```
 */
export const useItemAdminApi_UpdateEnable_ByItemIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<FullItemInfo, AxiosError<ApiError>, SdkSetConfigParam & { itemId: string; queryParams: { storeId: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: FullItemInfo) => void
): UseMutationResult<
  FullItemInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { itemId: string; queryParams: { storeId: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { itemId: string; queryParams: { storeId: string | null } }) => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateEnable_ByItemId(
      input.itemId,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.Enable_ByItemId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to get an item in specific locale. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.Locale_ByItemId, input]
 * }
 * ```
 */
export const useItemAdminApi_GetLocale_ByItemId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
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
  callback?: (data: AxiosResponse<PopulatedItemInfo>) => void
): UseQueryResult<PopulatedItemInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetLocale_ByItemId>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getLocale_ByItemId(
      input.itemId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PopulatedItemInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.Locale_ByItemId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; This api is used for returning a published item while the item is maxCount limited, it will increase the sale available count if orderNo already acquired.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.Return_ByItemId, input]
 * }
 * ```
 */
export const useItemAdminApi_UpdateReturn_ByItemIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { itemId: string; data: ItemReturnRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { itemId: string; data: ItemReturnRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { itemId: string; data: ItemReturnRequest }) => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateReturn_ByItemId(
      input.itemId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.Return_ByItemId],
    mutationFn,
    ...options
  })
}

/**
 * Get available predicate types.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: available predicate types&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemsPredicateTypes, input]
 * }
 * ```
 */
export const useItemAdminApi_GetItemsPredicateTypes = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<AvailablePredicateArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AvailablePredicateArray>) => void
): UseQueryResult<AvailablePredicateArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetItemsPredicateTypes>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsPredicateTypes()
    callback && callback(response)
    return response.data
  }

  return useQuery<AvailablePredicateArray, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsPredicateTypes, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; This api is used for acquiring a published item while the item is maxCount limited, it will decrease the sale available count.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: acquire result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.Acquire_ByItemId, input]
 * }
 * ```
 */
export const useItemAdminApi_UpdateAcquire_ByItemIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ItemAcquireResult, AxiosError<ApiError>, SdkSetConfigParam & { itemId: string; data: ItemAcquireRequest }>,
    'mutationKey'
  >,
  callback?: (data: ItemAcquireResult) => void
): UseMutationResult<ItemAcquireResult, AxiosError<ApiError>, SdkSetConfigParam & { itemId: string; data: ItemAcquireRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { itemId: string; data: ItemAcquireRequest }) => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateAcquire_ByItemId(
      input.itemId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.Acquire_ByItemId],
    mutationFn,
    ...options
  })
}

/**
 * Disable an item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated item&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.Disable_ByItemId, input]
 * }
 * ```
 */
export const useItemAdminApi_UpdateDisable_ByItemIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      FullItemInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { itemId: string; data: ChangeStatusItemRequest; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullItemInfo) => void
): UseMutationResult<
  FullItemInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { itemId: string; data: ChangeStatusItemRequest; queryParams: { storeId: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { itemId: string; data: ChangeStatusItemRequest; queryParams: { storeId: string | null } }
  ) => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateDisable_ByItemId(
      input.itemId,
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.Disable_ByItemId],
    mutationFn,
    ...options
  })
}

/**
 * Get item dynamic data for published item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item dynamic data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.Dynamic_ByItemId, input]
 * }
 * ```
 */
export const useItemAdminApi_GetDynamic_ByItemId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { itemId: string },
  options?: Omit<UseQueryOptions<ItemDynamicDataInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ItemDynamicDataInfo>) => void
): UseQueryResult<ItemDynamicDataInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetDynamic_ByItemId>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getDynamic_ByItemId(
      input.itemId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ItemDynamicDataInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.Dynamic_ByItemId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; This API is used to list basic items by features.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of basic items&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemsByFeaturesBasic, input]
 * }
 * ```
 */
export const useItemAdminApi_GetItemsByFeaturesBasic = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { activeOnly?: boolean | null; features?: string[] } },
  options?: Omit<UseQueryOptions<BasicItemArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BasicItemArray>) => void
): UseQueryResult<BasicItemArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetItemsByFeaturesBasic>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemsByFeaturesBasic(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<BasicItemArray, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsByFeaturesBasic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get references for an item
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.References_ByItemId, input]
 * }
 * ```
 */
export const useItemAdminApi_GetReferences_ByItemId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { itemId: string; queryParams?: { featuresToCheck?: string[]; storeId?: string | null } },
  options?: Omit<UseQueryOptions<ItemDependency, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ItemDependency>) => void
): UseQueryResult<ItemDependency, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useItemAdminApi_GetReferences_ByItemId>[1]) => async () => {
    const response = await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getReferences_ByItemId(
      input.itemId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ItemDependency, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.References_ByItemId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Remove a feature from an item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated item&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.Feature_ByItemId_ByFeature, input]
 * }
 * ```
 */
export const useItemAdminApi_DeleteFeature_ByItemId_ByFeatureMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      FullItemInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { itemId: string; feature: string; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullItemInfo) => void
): UseMutationResult<
  FullItemInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { itemId: string; feature: string; queryParams: { storeId: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { itemId: string; feature: string; queryParams: { storeId: string | null } }) => {
    const response = await ItemAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteFeature_ByItemId_ByFeature(input.itemId, input.feature, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.Feature_ByItemId_ByFeature],
    mutationFn,
    ...options
  })
}

/**
 * Add a feature to an item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated item&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.Feature_ByItemId_ByFeature, input]
 * }
 * ```
 */
export const useItemAdminApi_UpdateFeature_ByItemId_ByFeatureMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      FullItemInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { itemId: string; feature: string; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullItemInfo) => void
): UseMutationResult<
  FullItemInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { itemId: string; feature: string; queryParams: { storeId: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { itemId: string; feature: string; queryParams: { storeId: string | null } }) => {
    const response = await ItemAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateFeature_ByItemId_ByFeature(input.itemId, input.feature, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.Feature_ByItemId_ByFeature],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to update item purchase condition
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.PurchaseCondition_ByItemId, input]
 * }
 * ```
 */
export const useItemAdminApi_UpdatePurchaseCondition_ByItemIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      FullItemInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { itemId: string; data: PurchaseConditionUpdate; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullItemInfo) => void
): UseMutationResult<
  FullItemInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { itemId: string; data: PurchaseConditionUpdate; queryParams: { storeId: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { itemId: string; data: PurchaseConditionUpdate; queryParams: { storeId: string | null } }
  ) => {
    const response = await ItemAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePurchaseCondition_ByItemId(input.itemId, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.PurchaseCondition_ByItemId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to validate user purchase condition
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemAdmin.ItemPurchaseConditionValidate, input]
 * }
 * ```
 */
export const useItemAdminApi_CreateItemPurchaseConditionValidateMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      ItemPurchaseConditionValidateResultArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: ItemPurchaseConditionValidateRequest; queryParams: { userId: string | null; platform?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: ItemPurchaseConditionValidateResultArray) => void
): UseMutationResult<
  ItemPurchaseConditionValidateResultArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: ItemPurchaseConditionValidateRequest; queryParams: { userId: string | null; platform?: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & {
      data: ItemPurchaseConditionValidateRequest
      queryParams: { userId: string | null; platform?: string | null }
    }
  ) => {
    const response = await ItemAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createItemPurchaseConditionValidate(input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ItemAdmin.ItemPurchaseConditionValidate],
    mutationFn,
    ...options
  })
}
