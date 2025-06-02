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
import { EntitlementApi } from '../EntitlementApi.js'

import { AppEntitlementInfo } from '../../generated-definitions/AppEntitlementInfo.js'
import { AppEntitlementPagingSlicedResult } from '../../generated-definitions/AppEntitlementPagingSlicedResult.js'
import { EntitlementDecrementResult } from '../../generated-definitions/EntitlementDecrementResult.js'
import { EntitlementInfo } from '../../generated-definitions/EntitlementInfo.js'
import { EntitlementInfoArray } from '../../generated-definitions/EntitlementInfoArray.js'
import { EntitlementOwnershipArray } from '../../generated-definitions/EntitlementOwnershipArray.js'
import { EntitlementPagingSlicedResult } from '../../generated-definitions/EntitlementPagingSlicedResult.js'
import { EntitlementSoldRequest } from '../../generated-definitions/EntitlementSoldRequest.js'
import { EntitlementSoldResult } from '../../generated-definitions/EntitlementSoldResult.js'
import { EntitlementSplitRequest } from '../../generated-definitions/EntitlementSplitRequest.js'
import { EntitlementSplitResult } from '../../generated-definitions/EntitlementSplitResult.js'
import { EntitlementTransferRequest } from '../../generated-definitions/EntitlementTransferRequest.js'
import { EntitlementTransferResult } from '../../generated-definitions/EntitlementTransferResult.js'
import { Ownership } from '../../generated-definitions/Ownership.js'
import { OwnershipToken } from '../../generated-definitions/OwnershipToken.js'
import { PublicEntitlementDecrement } from '../../generated-definitions/PublicEntitlementDecrement.js'
import { TimedOwnership } from '../../generated-definitions/TimedOwnership.js'
import { UserEntitlementHistoryPagingSlicedResultArray } from '../../generated-definitions/UserEntitlementHistoryPagingSlicedResultArray.js'

export enum Key_Entitlement {
  Entitlements_ByUserId = 'Platform.Entitlement.Entitlements_ByUserId',
  EntitlementsByIds_ByUserId = 'Platform.Entitlement.EntitlementsByIds_ByUserId',
  EntitlementsBySku_ByUserId = 'Platform.Entitlement.EntitlementsBySku_ByUserId',
  EntitlementsByAppId_ByUserId = 'Platform.Entitlement.EntitlementsByAppId_ByUserId',
  EntitlementsHistory_ByUserId = 'Platform.Entitlement.EntitlementsHistory_ByUserId',
  UsersMeEntitlementsOwnershipAny = 'Platform.Entitlement.UsersMeEntitlementsOwnershipAny',
  EntitlementsByItemId_ByUserId = 'Platform.Entitlement.EntitlementsByItemId_ByUserId',
  UsersMeEntitlementsOwnershipToken = 'Platform.Entitlement.UsersMeEntitlementsOwnershipToken',
  EntitlementsByAppType_ByUserId = 'Platform.Entitlement.EntitlementsByAppType_ByUserId',
  UsersMeEntitlementsOwnershipBySku = 'Platform.Entitlement.UsersMeEntitlementsOwnershipBySku',
  UsersMeEntitlementsOwnershipByAppId = 'Platform.Entitlement.UsersMeEntitlementsOwnershipByAppId',
  UsersMeEntitlementsOwnershipByItemId = 'Platform.Entitlement.UsersMeEntitlementsOwnershipByItemId',
  EntitlementsOwnershipAny_ByUserId = 'Platform.Entitlement.EntitlementsOwnershipAny_ByUserId',
  Entitlement_ByUserId_ByEntitlementId = 'Platform.Entitlement.Entitlement_ByUserId_ByEntitlementId',
  EntitlementsOwnershipBySku_ByUserId = 'Platform.Entitlement.EntitlementsOwnershipBySku_ByUserId',
  EntitlementsOwnershipByAppId_ByUserId = 'Platform.Entitlement.EntitlementsOwnershipByAppId_ByUserId',
  EntitlementsOwnershipByItemId_ByUserId = 'Platform.Entitlement.EntitlementsOwnershipByItemId_ByUserId',
  EntitlementsOwnershipByItemIds_ByUserId = 'Platform.Entitlement.EntitlementsOwnershipByItemIds_ByUserId',
  Sell_ByUserId_ByEntitlementId = 'Platform.Entitlement.Sell_ByUserId_ByEntitlementId',
  Split_ByUserId_ByEntitlementId = 'Platform.Entitlement.Split_ByUserId_ByEntitlementId',
  Transfer_ByUserId_ByEntitlementId = 'Platform.Entitlement.Transfer_ByUserId_ByEntitlementId',
  Decrement_ByUserId_ByEntitlementId = 'Platform.Entitlement.Decrement_ByUserId_ByEntitlementId'
}

/**
 * Query user entitlements for a specific user.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.Entitlements_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementApi_GetEntitlements_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: {
      appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      entitlementName?: string | null
      features?: string[]
      itemId?: string[]
      limit?: number
      offset?: number
    }
  },
  options?: Omit<UseQueryOptions<EntitlementPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EntitlementPagingSlicedResult>) => void
): UseQueryResult<EntitlementPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementApi_GetEntitlements_ByUserId>[1]) => async () => {
    const response = await EntitlementApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getEntitlements_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<EntitlementPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_Entitlement.Entitlements_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get user entitlements by ids..&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.EntitlementsByIds_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementApi_GetEntitlementsByIds_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { availablePlatformOnly?: boolean | null; ids?: string[] } },
  options?: Omit<UseQueryOptions<EntitlementInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EntitlementInfoArray>) => void
): UseQueryResult<EntitlementInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementApi_GetEntitlementsByIds_ByUserId>[1]) => async () => {
    const response = await EntitlementApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEntitlementsByIds_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<EntitlementInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_Entitlement.EntitlementsByIds_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Get user entitlement by sku.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.EntitlementsBySku_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementApi_GetEntitlementsBySku_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams: {
      sku: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  },
  options?: Omit<UseQueryOptions<EntitlementInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EntitlementInfo>) => void
): UseQueryResult<EntitlementInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementApi_GetEntitlementsBySku_ByUserId>[1]) => async () => {
    const response = await EntitlementApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEntitlementsBySku_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<EntitlementInfo, AxiosError<ApiError>>({
    queryKey: [Key_Entitlement.EntitlementsBySku_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get user app entitlement by appId.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.EntitlementsByAppId_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementApi_GetEntitlementsByAppId_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams: { appId: string | null } },
  options?: Omit<UseQueryOptions<AppEntitlementInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AppEntitlementInfo>) => void
): UseQueryResult<AppEntitlementInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementApi_GetEntitlementsByAppId_ByUserId>[1]) => async () => {
    const response = await EntitlementApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEntitlementsByAppId_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<AppEntitlementInfo, AxiosError<ApiError>>({
    queryKey: [Key_Entitlement.EntitlementsByAppId_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get user entitlement history&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user entitlement history list&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.EntitlementsHistory_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementApi_GetEntitlementsHistory_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: {
      endDate?: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      limit?: number
      offset?: number
      startDate?: string | null
    }
  },
  options?: Omit<UseQueryOptions<UserEntitlementHistoryPagingSlicedResultArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserEntitlementHistoryPagingSlicedResultArray>) => void
): UseQueryResult<UserEntitlementHistoryPagingSlicedResultArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementApi_GetEntitlementsHistory_ByUserId>[1]) => async () => {
    const response = await EntitlementApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEntitlementsHistory_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<UserEntitlementHistoryPagingSlicedResultArray, AxiosError<ApiError>>({
    queryKey: [Key_Entitlement.EntitlementsHistory_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Exists any my active entitlement of specified itemIds, skus and appIds
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.UsersMeEntitlementsOwnershipAny, input]
 * }
 * ```
 */
export const useEntitlementApi_GetUsersMeEntitlementsOwnershipAny = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { appIds?: string[]; itemIds?: string[]; skus?: string[] } },
  options?: Omit<UseQueryOptions<Ownership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<Ownership>) => void
): UseQueryResult<Ownership, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementApi_GetUsersMeEntitlementsOwnershipAny>[1]) => async () => {
    const response = await EntitlementApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUsersMeEntitlementsOwnershipAny(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<Ownership, AxiosError<ApiError>>({
    queryKey: [Key_Entitlement.UsersMeEntitlementsOwnershipAny, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Get user entitlement by itemId.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.EntitlementsByItemId_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementApi_GetEntitlementsByItemId_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams: {
      itemId: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  },
  options?: Omit<UseQueryOptions<EntitlementInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EntitlementInfo>) => void
): UseQueryResult<EntitlementInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementApi_GetEntitlementsByItemId_ByUserId>[1]) => async () => {
    const response = await EntitlementApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEntitlementsByItemId_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<EntitlementInfo, AxiosError<ApiError>>({
    queryKey: [Key_Entitlement.EntitlementsByItemId_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Gets an entitlement ownership token of specified itemIds, skus and appIds&lt;p&gt;The decoded ownership token header like below:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;kid&#34;: &#34;9fd4cd5f991cebe3323605cd12d3b8bfdfc73fa4&#34;, &#34;typ&#34;: &#34;JWT&#34;, &#34;alg&#34;: &#34;RS256&#34; } &lt;/code&gt;&lt;/pre&gt;That you can get the jwks by api &lt;baseUrl&gt;/platform/jwks, if the configured private key is same as IAM, &lt;p&gt;you can also get jwks from IAM endpoint. &lt;p&gt;The decoded ownership token payload like below:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;entitlements&#34;: [ { &#34;itemId&#34;: &#34;4c1296291f604c199f7bb7f0ee02e5f8&#34;, &#34;appType&#34;: null, &#34;appId&#34;: null, &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;itemNamespace&#34;: &#34;accelbyte&#34;, &#34;sku&#34;: &#34;prime-plus&#34; }, { &#34;itemId&#34;: &#34;e8f4974cf45c4e1f8d4f0c6990c518bd&#34;, &#34;appType&#34;: &#34;GAME&#34;, &#34;appId&#34;: &#34;omeganebula&#34;, &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;itemNamespace&#34;: &#34;accelbyte&#34;, &#34;sku&#34;: &#34;APPG005ON&#34; } ], &#34;sub&#34;: &#34;66459eb6a4e44e6fb0040bd20c1079a5&#34;, &#34;exp&#34;: 1619624360, &#34;iat&#34;: 1619624060 } &lt;/code&gt;&lt;/pre&gt;&lt;b&gt;if there&#39;s no active entitlement for the specific params, the entitlements section will be omitted&lt;/b&gt;.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.UsersMeEntitlementsOwnershipToken, input]
 * }
 * ```
 */
export const useEntitlementApi_GetUsersMeEntitlementsOwnershipToken = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { appIds?: string[]; itemIds?: string[]; skus?: string[] } },
  options?: Omit<UseQueryOptions<OwnershipToken, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<OwnershipToken>) => void
): UseQueryResult<OwnershipToken, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementApi_GetUsersMeEntitlementsOwnershipToken>[1]) => async () => {
    const response = await EntitlementApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUsersMeEntitlementsOwnershipToken(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<OwnershipToken, AxiosError<ApiError>>({
    queryKey: [Key_Entitlement.UsersMeEntitlementsOwnershipToken, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query app entitlements by appType.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: app entitlement pagination&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.EntitlementsByAppType_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementApi_GetEntitlementsByAppType_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams: { appType: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'; limit?: number; offset?: number }
  },
  options?: Omit<UseQueryOptions<AppEntitlementPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AppEntitlementPagingSlicedResult>) => void
): UseQueryResult<AppEntitlementPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementApi_GetEntitlementsByAppType_ByUserId>[1]) => async () => {
    const response = await EntitlementApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEntitlementsByAppType_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<AppEntitlementPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_Entitlement.EntitlementsByAppType_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get my entitlement ownership by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher namespace entitlement ownership by sku&lt;/b&gt;&lt;/li&gt;&lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to get &lt;b&gt;game namespace entitlement ownership by sku&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.UsersMeEntitlementsOwnershipBySku, input]
 * }
 * ```
 */
export const useEntitlementApi_GetUsersMeEntitlementsOwnershipBySku = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: {
      sku: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  },
  options?: Omit<UseQueryOptions<TimedOwnership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TimedOwnership>) => void
): UseQueryResult<TimedOwnership, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementApi_GetUsersMeEntitlementsOwnershipBySku>[1]) => async () => {
    const response = await EntitlementApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUsersMeEntitlementsOwnershipBySku(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<TimedOwnership, AxiosError<ApiError>>({
    queryKey: [Key_Entitlement.UsersMeEntitlementsOwnershipBySku, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get my app entitlement ownership by appId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher namespace app entitlement ownership&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.UsersMeEntitlementsOwnershipByAppId, input]
 * }
 * ```
 */
export const useEntitlementApi_GetUsersMeEntitlementsOwnershipByAppId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { appId: string | null } },
  options?: Omit<UseQueryOptions<Ownership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<Ownership>) => void
): UseQueryResult<Ownership, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementApi_GetUsersMeEntitlementsOwnershipByAppId>[1]) => async () => {
      const response = await EntitlementApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getUsersMeEntitlementsOwnershipByAppId(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<Ownership, AxiosError<ApiError>>({
    queryKey: [Key_Entitlement.UsersMeEntitlementsOwnershipByAppId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get my entitlement ownership by itemId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher namespace entitlement ownership by sku&lt;/b&gt;&lt;/li&gt;&lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to get &lt;b&gt;game namespace entitlement ownership by sku&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.UsersMeEntitlementsOwnershipByItemId, input]
 * }
 * ```
 */
export const useEntitlementApi_GetUsersMeEntitlementsOwnershipByItemId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: {
      itemId: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  },
  options?: Omit<UseQueryOptions<TimedOwnership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TimedOwnership>) => void
): UseQueryResult<TimedOwnership, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementApi_GetUsersMeEntitlementsOwnershipByItemId>[1]) => async () => {
      const response = await EntitlementApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getUsersMeEntitlementsOwnershipByItemId(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<TimedOwnership, AxiosError<ApiError>>({
    queryKey: [Key_Entitlement.UsersMeEntitlementsOwnershipByItemId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Exists any user active entitlement of specified itemIds, skus and appIds
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.EntitlementsOwnershipAny_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementApi_GetEntitlementsOwnershipAny_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { appIds?: string[]; itemIds?: string[]; skus?: string[] } },
  options?: Omit<UseQueryOptions<Ownership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<Ownership>) => void
): UseQueryResult<Ownership, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementApi_GetEntitlementsOwnershipAny_ByUserId>[1]) => async () => {
    const response = await EntitlementApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEntitlementsOwnershipAny_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<Ownership, AxiosError<ApiError>>({
    queryKey: [Key_Entitlement.EntitlementsOwnershipAny_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get user entitlement.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.Entitlement_ByUserId_ByEntitlementId, input]
 * }
 * ```
 */
export const useEntitlementApi_GetEntitlement_ByUserId_ByEntitlementId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; entitlementId: string },
  options?: Omit<UseQueryOptions<EntitlementInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EntitlementInfo>) => void
): UseQueryResult<EntitlementInfo, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementApi_GetEntitlement_ByUserId_ByEntitlementId>[1]) => async () => {
      const response = await EntitlementApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getEntitlement_ByUserId_ByEntitlementId(input.userId, input.entitlementId)
      callback && callback(response)
      return response.data
    }

  return useQuery<EntitlementInfo, AxiosError<ApiError>>({
    queryKey: [Key_Entitlement.Entitlement_ByUserId_ByEntitlementId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get user entitlement ownership by sku.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.EntitlementsOwnershipBySku_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementApi_GetEntitlementsOwnershipBySku_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams: {
      sku: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  },
  options?: Omit<UseQueryOptions<TimedOwnership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TimedOwnership>) => void
): UseQueryResult<TimedOwnership, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementApi_GetEntitlementsOwnershipBySku_ByUserId>[1]) => async () => {
      const response = await EntitlementApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getEntitlementsOwnershipBySku_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<TimedOwnership, AxiosError<ApiError>>({
    queryKey: [Key_Entitlement.EntitlementsOwnershipBySku_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get user app entitlement ownership by appId.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.EntitlementsOwnershipByAppId_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementApi_GetEntitlementsOwnershipByAppId_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams: { appId: string | null } },
  options?: Omit<UseQueryOptions<Ownership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<Ownership>) => void
): UseQueryResult<Ownership, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementApi_GetEntitlementsOwnershipByAppId_ByUserId>[1]) => async () => {
      const response = await EntitlementApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getEntitlementsOwnershipByAppId_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<Ownership, AxiosError<ApiError>>({
    queryKey: [Key_Entitlement.EntitlementsOwnershipByAppId_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get user entitlement ownership by itemId.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.EntitlementsOwnershipByItemId_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementApi_GetEntitlementsOwnershipByItemId_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams: {
      itemId: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  },
  options?: Omit<UseQueryOptions<TimedOwnership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TimedOwnership>) => void
): UseQueryResult<TimedOwnership, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementApi_GetEntitlementsOwnershipByItemId_ByUserId>[1]) => async () => {
      const response = await EntitlementApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getEntitlementsOwnershipByItemId_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<TimedOwnership, AxiosError<ApiError>>({
    queryKey: [Key_Entitlement.EntitlementsOwnershipByItemId_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get user entitlement ownership by itemIds.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.EntitlementsOwnershipByItemIds_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementApi_GetEntitlementsOwnershipByItemIds_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { ids?: string[] } },
  options?: Omit<UseQueryOptions<EntitlementOwnershipArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EntitlementOwnershipArray>) => void
): UseQueryResult<EntitlementOwnershipArray, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementApi_GetEntitlementsOwnershipByItemIds_ByUserId>[1]) => async () => {
      const response = await EntitlementApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getEntitlementsOwnershipByItemIds_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<EntitlementOwnershipArray, AxiosError<ApiError>>({
    queryKey: [Key_Entitlement.EntitlementsOwnershipByItemIds_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Sell user entitlement. If the entitlement is consumable, useCount is 0, the status will be CONSUMED. If the entitlement is durable, the status will be SOLD. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.Sell_ByUserId_ByEntitlementId, input]
 * }
 * ```
 */
export const useEntitlementApi_UpdateSell_ByUserId_ByEntitlementIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      EntitlementSoldResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; entitlementId: string; data: EntitlementSoldRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: EntitlementSoldResult) => void
): UseMutationResult<
  EntitlementSoldResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; entitlementId: string; data: EntitlementSoldRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; entitlementId: string; data: EntitlementSoldRequest }) => {
    const response = await EntitlementApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateSell_ByUserId_ByEntitlementId(input.userId, input.entitlementId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Entitlement.Sell_ByUserId_ByEntitlementId],
    mutationFn,
    ...options
  })
}

/**
 * Split a specified use count of entitlement and create a new entitlement with splitting use count.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.Split_ByUserId_ByEntitlementId, input]
 * }
 * ```
 */
export const useEntitlementApi_UpdateSplit_ByUserId_ByEntitlementIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      EntitlementSplitResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; entitlementId: string; data: EntitlementSplitRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: EntitlementSplitResult) => void
): UseMutationResult<
  EntitlementSplitResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; entitlementId: string; data: EntitlementSplitRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; entitlementId: string; data: EntitlementSplitRequest }) => {
    const response = await EntitlementApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateSplit_ByUserId_ByEntitlementId(input.userId, input.entitlementId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Entitlement.Split_ByUserId_ByEntitlementId],
    mutationFn,
    ...options
  })
}

/**
 * Transfer a specified use count from entitlement A to B..Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.Transfer_ByUserId_ByEntitlementId, input]
 * }
 * ```
 */
export const useEntitlementApi_UpdateTransfer_ByUserId_ByEntitlementIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      EntitlementTransferResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; entitlementId: string; data: EntitlementTransferRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: EntitlementTransferResult) => void
): UseMutationResult<
  EntitlementTransferResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; entitlementId: string; data: EntitlementTransferRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; entitlementId: string; data: EntitlementTransferRequest }) => {
    const response = await EntitlementApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateTransfer_ByUserId_ByEntitlementId(input.userId, input.entitlementId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Entitlement.Transfer_ByUserId_ByEntitlementId],
    mutationFn,
    ...options
  })
}

/**
 * Consume user entitlement. If the entitlement useCount is 0, the status will be CONSUMED. Client should pass item id in options if entitlement clazz is OPTIONBOX&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: consumed entitlement&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Entitlement.Decrement_ByUserId_ByEntitlementId, input]
 * }
 * ```
 */
export const useEntitlementApi_UpdateDecrement_ByUserId_ByEntitlementIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      EntitlementDecrementResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; entitlementId: string; data: PublicEntitlementDecrement }
    >,
    'mutationKey'
  >,
  callback?: (data: EntitlementDecrementResult) => void
): UseMutationResult<
  EntitlementDecrementResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; entitlementId: string; data: PublicEntitlementDecrement }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; entitlementId: string; data: PublicEntitlementDecrement }) => {
    const response = await EntitlementApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateDecrement_ByUserId_ByEntitlementId(input.userId, input.entitlementId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Entitlement.Decrement_ByUserId_ByEntitlementId],
    mutationFn,
    ...options
  })
}
