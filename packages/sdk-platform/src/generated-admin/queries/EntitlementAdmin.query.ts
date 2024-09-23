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
import { EntitlementAdminApi } from '../EntitlementAdminApi.js'

import { AdminEntitlementDecrement } from '../../generated-definitions/AdminEntitlementDecrement.js'
import { AdminEntitlementSoldRequest } from '../../generated-definitions/AdminEntitlementSoldRequest.js'
import { AppEntitlementInfo } from '../../generated-definitions/AppEntitlementInfo.js'
import { AppEntitlementPagingSlicedResult } from '../../generated-definitions/AppEntitlementPagingSlicedResult.js'
import { BulkEntitlementGrantRequest } from '../../generated-definitions/BulkEntitlementGrantRequest.js'
import { BulkEntitlementGrantResult } from '../../generated-definitions/BulkEntitlementGrantResult.js'
import { BulkEntitlementRevokeResult } from '../../generated-definitions/BulkEntitlementRevokeResult.js'
import { BulkOperationResult } from '../../generated-definitions/BulkOperationResult.js'
import { EntitlementConfigInfo } from '../../generated-definitions/EntitlementConfigInfo.js'
import { EntitlementDecrementResult } from '../../generated-definitions/EntitlementDecrementResult.js'
import { EntitlementGrant } from '../../generated-definitions/EntitlementGrant.js'
import { EntitlementHistoryInfoArray } from '../../generated-definitions/EntitlementHistoryInfoArray.js'
import { EntitlementIfc } from '../../generated-definitions/EntitlementIfc.js'
import { EntitlementInfo } from '../../generated-definitions/EntitlementInfo.js'
import { EntitlementInfoArray } from '../../generated-definitions/EntitlementInfoArray.js'
import { EntitlementOwnershipArray } from '../../generated-definitions/EntitlementOwnershipArray.js'
import { EntitlementPagingSlicedResult } from '../../generated-definitions/EntitlementPagingSlicedResult.js'
import { EntitlementPlatformConfigInfo } from '../../generated-definitions/EntitlementPlatformConfigInfo.js'
import { EntitlementPlatformConfigUpdate } from '../../generated-definitions/EntitlementPlatformConfigUpdate.js'
import { EntitlementPrechekResult } from '../../generated-definitions/EntitlementPrechekResult.js'
import { EntitlementRevokeRequest } from '../../generated-definitions/EntitlementRevokeRequest.js'
import { EntitlementSoldResult } from '../../generated-definitions/EntitlementSoldResult.js'
import { EntitlementUpdate } from '../../generated-definitions/EntitlementUpdate.js'
import { Ownership } from '../../generated-definitions/Ownership.js'
import { RevokeUseCountRequest } from '../../generated-definitions/RevokeUseCountRequest.js'
import { StackableEntitlementInfoArray } from '../../generated-definitions/StackableEntitlementInfoArray.js'
import { TimedOwnership } from '../../generated-definitions/TimedOwnership.js'

export enum Key_EntitlementAdmin {
  Entitlements = 'Platform.EntitlementAdmin.Entitlements',
  EntitlementGrant = 'Platform.EntitlementAdmin.EntitlementGrant',
  EntitlementRevoke = 'Platform.EntitlementAdmin.EntitlementRevoke',
  EntitlementsByItemIds = 'Platform.EntitlementAdmin.EntitlementsByItemIds',
  EntitlementsConfigInfo = 'Platform.EntitlementAdmin.EntitlementsConfigInfo',
  Entitlements_ByUserId = 'Platform.EntitlementAdmin.Entitlements_ByUserId',
  Entitlement_ByUserId = 'Platform.EntitlementAdmin.Entitlement_ByUserId',
  Entitlement_ByEntitlementId = 'Platform.EntitlementAdmin.Entitlement_ByEntitlementId',
  EntitlementsBySku_ByUserId = 'Platform.EntitlementAdmin.EntitlementsBySku_ByUserId',
  EntitlementRevoke_ByUserId = 'Platform.EntitlementAdmin.EntitlementRevoke_ByUserId',
  EntitlementsByAppId_ByUserId = 'Platform.EntitlementAdmin.EntitlementsByAppId_ByUserId',
  EntitlementsByItemId_ByUserId = 'Platform.EntitlementAdmin.EntitlementsByItemId_ByUserId',
  EntitlementsByAppType_ByUserId = 'Platform.EntitlementAdmin.EntitlementsByAppType_ByUserId',
  EntitlementsByItemIds_ByUserId = 'Platform.EntitlementAdmin.EntitlementsByItemIds_ByUserId',
  EntitlementConfig_ByPlatform = 'Platform.EntitlementAdmin.EntitlementConfig_ByPlatform',
  EntitlementRevokeById_ByUserId = 'Platform.EntitlementAdmin.EntitlementRevokeById_ByUserId',
  EntitlementsOwnershipAny_ByUserId = 'Platform.EntitlementAdmin.EntitlementsOwnershipAny_ByUserId',
  Entitlement_ByUserId_ByEntitlementId = 'Platform.EntitlementAdmin.Entitlement_ByUserId_ByEntitlementId',
  EntitlementsOwnershipAnyOf_ByUserId = 'Platform.EntitlementAdmin.EntitlementsOwnershipAnyOf_ByUserId',
  EntitlementsOwnershipBySku_ByUserId = 'Platform.EntitlementAdmin.EntitlementsOwnershipBySku_ByUserId',
  EntitlementConfigEntitlementOriginEnable = 'Platform.EntitlementAdmin.EntitlementConfigEntitlementOriginEnable',
  EntitlementsOwnershipByAppId_ByUserId = 'Platform.EntitlementAdmin.EntitlementsOwnershipByAppId_ByUserId',
  EntitlementsOwnershipByItemId_ByUserId = 'Platform.EntitlementAdmin.EntitlementsOwnershipByItemId_ByUserId',
  EntitlementsOwnershipByItemIds_ByUserId = 'Platform.EntitlementAdmin.EntitlementsOwnershipByItemIds_ByUserId',
  Sell_ByUserId_ByEntitlementId = 'Platform.EntitlementAdmin.Sell_ByUserId_ByEntitlementId',
  Enable_ByUserId_ByEntitlementId = 'Platform.EntitlementAdmin.Enable_ByUserId_ByEntitlementId',
  Revoke_ByUserId_ByEntitlementId = 'Platform.EntitlementAdmin.Revoke_ByUserId_ByEntitlementId',
  Disable_ByUserId_ByEntitlementId = 'Platform.EntitlementAdmin.Disable_ByUserId_ByEntitlementId',
  History_ByUserId_ByEntitlementId = 'Platform.EntitlementAdmin.History_ByUserId_ByEntitlementId',
  Decrement_ByUserId_ByEntitlementId = 'Platform.EntitlementAdmin.Decrement_ByUserId_ByEntitlementId',
  RevokeByUseCount_ByUserId_ByEntitlementId = 'Platform.EntitlementAdmin.RevokeByUseCount_ByUserId_ByEntitlementId',
  RevokeByUseCountPreCheck_ByUserId_ByEntitlementId = 'Platform.EntitlementAdmin.RevokeByUseCountPreCheck_ByUserId_ByEntitlementId'
}

/**
 * Query entitlements.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.Entitlements, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_GetEntitlements = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      activeOnly?: boolean | null
      appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      entitlementName?: string | null
      itemId?: string[]
      limit?: number
      offset?: number
      origin?: 'Epic' | 'GooglePlay' | 'IOS' | 'Nintendo' | 'Oculus' | 'Other' | 'Playstation' | 'Steam' | 'System' | 'Twitch' | 'Xbox'
      userId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<EntitlementPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EntitlementPagingSlicedResult>) => void
): UseQueryResult<EntitlementPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementAdminApi_GetEntitlements>[1]) => async () => {
    const response = await EntitlementAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getEntitlements(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<EntitlementPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.Entitlements, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Grant entitlements to multiple users, skipped granting will be treated as fail.&lt;br&gt;&lt;br&gt;Notes: &lt;br&gt;&lt;br&gt;Support Item Types:&lt;ul&gt;&lt;li&gt;&lt;i&gt;APP&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;INGAMEITEM&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;CODE&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;SUBSCRIPTION&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;MEDIA&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;OPTIONBOX&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;LOOTBOX&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk grant entitlements result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.EntitlementGrant, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_CreateEntitlementGrantMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkEntitlementGrantResult, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkEntitlementGrantRequest }>,
    'mutationKey'
  >,
  callback?: (data: BulkEntitlementGrantResult) => void
): UseMutationResult<BulkEntitlementGrantResult, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkEntitlementGrantRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkEntitlementGrantRequest }) => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createEntitlementGrant(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.EntitlementGrant],
    mutationFn,
    ...options
  })
}

/**
 * Revoke entitlements, skipped revocation will be treated as fail.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk revoke entitlements result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.EntitlementRevoke, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_CreateEntitlementRevokeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkEntitlementRevokeResult, AxiosError<ApiError>, SdkSetConfigParam & { data: string[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkEntitlementRevokeResult) => void
): UseMutationResult<BulkEntitlementRevokeResult, AxiosError<ApiError>, SdkSetConfigParam & { data: string[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: string[] }) => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createEntitlementRevoke(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.EntitlementRevoke],
    mutationFn,
    ...options
  })
}

/**
 * Query entitlements by Item Ids.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.EntitlementsByItemIds, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_GetEntitlementsByItemIds = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { activeOnly?: boolean | null; itemIds?: string[]; limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<EntitlementPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EntitlementPagingSlicedResult>) => void
): UseQueryResult<EntitlementPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementAdminApi_GetEntitlementsByItemIds>[1]) => async () => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEntitlementsByItemIds(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<EntitlementPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsByItemIds, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get entitlement config info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.EntitlementsConfigInfo, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_GetEntitlementsConfigInfo = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { withoutCache?: boolean | null } },
  options?: Omit<UseQueryOptions<EntitlementConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EntitlementConfigInfo>) => void
): UseQueryResult<EntitlementConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementAdminApi_GetEntitlementsConfigInfo>[1]) => async () => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEntitlementsConfigInfo(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<EntitlementConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsConfigInfo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query entitlements for a specific user.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.Entitlements_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_GetEntitlements_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: {
      activeOnly?: boolean | null
      appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'
      collectionId?: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      entitlementName?: string | null
      features?: string[]
      fuzzyMatchName?: boolean | null
      itemId?: string[]
      limit?: number
      offset?: number
      origin?: 'Epic' | 'GooglePlay' | 'IOS' | 'Nintendo' | 'Oculus' | 'Other' | 'Playstation' | 'Steam' | 'System' | 'Twitch' | 'Xbox'
    }
  },
  options?: Omit<UseQueryOptions<EntitlementPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EntitlementPagingSlicedResult>) => void
): UseQueryResult<EntitlementPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementAdminApi_GetEntitlements_ByUserId>[1]) => async () => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEntitlements_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<EntitlementPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.Entitlements_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Grant user entitlement.&lt;br&gt;&lt;br&gt;Notes: &lt;br&gt;&lt;br&gt;will skip un-supported item if input un-supported item types, please use /admin/namespaces/{namespace}/users/{userId}/fulfillment endpoint if want to fulfill other item type, like coin item&lt;br&gt;&lt;br&gt;Support Item Types:&lt;ul&gt;&lt;li&gt;&lt;i&gt;APP&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;INGAMEITEM&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;CODE&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;SUBSCRIPTION&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;MEDIA&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;OPTIONBOX&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;LOOTBOX&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: granted entitlement&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.Entitlement_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_CreateEntitlement_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      StackableEntitlementInfoArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: EntitlementGrant[] }
    >,
    'mutationKey'
  >,
  callback?: (data: StackableEntitlementInfoArray) => void
): UseMutationResult<
  StackableEntitlementInfoArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: EntitlementGrant[] }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: EntitlementGrant[] }) => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createEntitlement_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.Entitlement_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Get entitlement.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.Entitlement_ByEntitlementId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_GetEntitlement_ByEntitlementId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { entitlementId: string },
  options?: Omit<UseQueryOptions<EntitlementInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EntitlementInfo>) => void
): UseQueryResult<EntitlementInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementAdminApi_GetEntitlement_ByEntitlementId>[1]) => async () => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEntitlement_ByEntitlementId(input.entitlementId)
    callback && callback(response)
    return response.data
  }

  return useQuery<EntitlementInfo, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.Entitlement_ByEntitlementId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get user entitlement by sku.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.EntitlementsBySku_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_GetEntitlementsBySku_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams: {
      sku: string | null
      activeOnly?: boolean | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      platform?: string | null
    }
  },
  options?: Omit<UseQueryOptions<EntitlementInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EntitlementInfo>) => void
): UseQueryResult<EntitlementInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementAdminApi_GetEntitlementsBySku_ByUserId>[1]) => async () => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEntitlementsBySku_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<EntitlementInfo, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsBySku_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Revoke all entitlements of a user (This API is for testing purpose only)&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoked entitlements count&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.EntitlementRevoke_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_UpdateEntitlementRevoke_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<BulkOperationResult, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: BulkOperationResult) => void
): UseMutationResult<BulkOperationResult, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateEntitlementRevoke_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.EntitlementRevoke_ByUserId],
    mutationFn,
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
 *    queryKey: [Key_EntitlementAdmin.EntitlementsByAppId_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_GetEntitlementsByAppId_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams: { appId: string | null; activeOnly?: boolean | null } },
  options?: Omit<UseQueryOptions<AppEntitlementInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AppEntitlementInfo>) => void
): UseQueryResult<AppEntitlementInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementAdminApi_GetEntitlementsByAppId_ByUserId>[1]) => async () => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEntitlementsByAppId_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<AppEntitlementInfo, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsByAppId_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get user entitlement by itemId.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.EntitlementsByItemId_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_GetEntitlementsByItemId_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams: {
      itemId: string | null
      activeOnly?: boolean | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      platform?: string | null
    }
  },
  options?: Omit<UseQueryOptions<EntitlementInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EntitlementInfo>) => void
): UseQueryResult<EntitlementInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementAdminApi_GetEntitlementsByItemId_ByUserId>[1]) => async () => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEntitlementsByItemId_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<EntitlementInfo, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsByItemId_ByUserId, input],
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
 *    queryKey: [Key_EntitlementAdmin.EntitlementsByAppType_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_GetEntitlementsByAppType_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams: { appType: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'; activeOnly?: boolean | null; limit?: number; offset?: number }
  },
  options?: Omit<UseQueryOptions<AppEntitlementPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AppEntitlementPagingSlicedResult>) => void
): UseQueryResult<AppEntitlementPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementAdminApi_GetEntitlementsByAppType_ByUserId>[1]) => async () => {
      const response = await EntitlementAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getEntitlementsByAppType_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<AppEntitlementPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsByAppType_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get user entitlements by itemIds.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.EntitlementsByItemIds_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_GetEntitlementsByItemIds_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { ids?: string[]; platform?: string | null } },
  options?: Omit<UseQueryOptions<EntitlementInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EntitlementInfoArray>) => void
): UseQueryResult<EntitlementInfoArray, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementAdminApi_GetEntitlementsByItemIds_ByUserId>[1]) => async () => {
      const response = await EntitlementAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getEntitlementsByItemIds_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<EntitlementInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsByItemIds_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get platform entitlement config list.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.EntitlementConfig_ByPlatform, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_GetEntitlementConfig_ByPlatform = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { platform: string },
  options?: Omit<UseQueryOptions<EntitlementPlatformConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EntitlementPlatformConfigInfo>) => void
): UseQueryResult<EntitlementPlatformConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementAdminApi_GetEntitlementConfig_ByPlatform>[1]) => async () => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEntitlementConfig_ByPlatform(input.platform)
    callback && callback(response)
    return response.data
  }

  return useQuery<EntitlementPlatformConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementConfig_ByPlatform, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update platform entitlement config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: platform entitlement config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.EntitlementConfig_ByPlatform, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_UpdateEntitlementConfig_ByPlatformMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      EntitlementPlatformConfigInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { platform: string; data: EntitlementPlatformConfigUpdate }
    >,
    'mutationKey'
  >,
  callback?: (data: EntitlementPlatformConfigInfo) => void
): UseMutationResult<
  EntitlementPlatformConfigInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { platform: string; data: EntitlementPlatformConfigUpdate }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { platform: string; data: EntitlementPlatformConfigUpdate }) => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateEntitlementConfig_ByPlatform(input.platform, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.EntitlementConfig_ByPlatform],
    mutationFn,
    ...options
  })
}

/**
 * Revoke user&#39;s entitlements by ids.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoke entitlements count&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.EntitlementRevokeById_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_UpdateEntitlementRevokeById_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      BulkOperationResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; queryParams: { entitlementIds: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: BulkOperationResult) => void
): UseMutationResult<
  BulkOperationResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; queryParams: { entitlementIds: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; queryParams: { entitlementIds: string | null } }) => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateEntitlementRevokeById_ByUserId(input.userId, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.EntitlementRevokeById_ByUserId],
    mutationFn,
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
 *    queryKey: [Key_EntitlementAdmin.EntitlementsOwnershipAny_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_GetEntitlementsOwnershipAny_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: { appIds?: string[]; itemIds?: string[]; platform?: string | null; skus?: string[] }
  },
  options?: Omit<UseQueryOptions<Ownership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<Ownership>) => void
): UseQueryResult<Ownership, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementAdminApi_GetEntitlementsOwnershipAny_ByUserId>[1]) => async () => {
      const response = await EntitlementAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getEntitlementsOwnershipAny_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<Ownership, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsOwnershipAny_ByUserId, input],
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
 *    queryKey: [Key_EntitlementAdmin.Entitlement_ByUserId_ByEntitlementId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_GetEntitlement_ByUserId_ByEntitlementId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; entitlementId: string },
  options?: Omit<UseQueryOptions<EntitlementInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EntitlementInfo>) => void
): UseQueryResult<EntitlementInfo, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementAdminApi_GetEntitlement_ByUserId_ByEntitlementId>[1]) => async () => {
      const response = await EntitlementAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getEntitlement_ByUserId_ByEntitlementId(input.userId, input.entitlementId)
      callback && callback(response)
      return response.data
    }

  return useQuery<EntitlementInfo, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.Entitlement_ByUserId_ByEntitlementId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update user entitlement. If update CONSUMABLE entitlement useCount to 0, the status will be CONSUMED.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated entitlement&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.Entitlement_ByUserId_ByEntitlementId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_UpdateEntitlement_ByUserId_ByEntitlementIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      EntitlementInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; entitlementId: string; data: EntitlementUpdate }
    >,
    'mutationKey'
  >,
  callback?: (data: EntitlementInfo) => void
): UseMutationResult<
  EntitlementInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; entitlementId: string; data: EntitlementUpdate }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; entitlementId: string; data: EntitlementUpdate }) => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateEntitlement_ByUserId_ByEntitlementId(input.userId, input.entitlementId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.Entitlement_ByUserId_ByEntitlementId],
    mutationFn,
    ...options
  })
}

/**
 * Exists any user active entitlement of specified items.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.EntitlementsOwnershipAnyOf_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_GetEntitlementsOwnershipAnyOf_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams: { itemIds: string[]; platform?: string | null } },
  options?: Omit<UseQueryOptions<Ownership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<Ownership>) => void
): UseQueryResult<Ownership, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementAdminApi_GetEntitlementsOwnershipAnyOf_ByUserId>[1]) => async () => {
      const response = await EntitlementAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getEntitlementsOwnershipAnyOf_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<Ownership, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsOwnershipAnyOf_ByUserId, input],
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
 *    queryKey: [Key_EntitlementAdmin.EntitlementsOwnershipBySku_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_GetEntitlementsOwnershipBySku_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams: {
      sku: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      platform?: string | null
    }
  },
  options?: Omit<UseQueryOptions<TimedOwnership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TimedOwnership>) => void
): UseQueryResult<TimedOwnership, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementAdminApi_GetEntitlementsOwnershipBySku_ByUserId>[1]) => async () => {
      const response = await EntitlementAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getEntitlementsOwnershipBySku_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<TimedOwnership, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsOwnershipBySku_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Enable Entitlement origin feature.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.EntitlementConfigEntitlementOriginEnable, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_UpdateEntitlementConfigEntitlementOriginEnableMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<EntitlementConfigInfo, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: EntitlementConfigInfo) => void
): UseMutationResult<EntitlementConfigInfo, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateEntitlementConfigEntitlementOriginEnable()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.EntitlementConfigEntitlementOriginEnable],
    mutationFn,
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
 *    queryKey: [Key_EntitlementAdmin.EntitlementsOwnershipByAppId_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_GetEntitlementsOwnershipByAppId_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams: { appId: string | null } },
  options?: Omit<UseQueryOptions<Ownership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<Ownership>) => void
): UseQueryResult<Ownership, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementAdminApi_GetEntitlementsOwnershipByAppId_ByUserId>[1]) => async () => {
      const response = await EntitlementAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getEntitlementsOwnershipByAppId_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<Ownership, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsOwnershipByAppId_ByUserId, input],
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
 *    queryKey: [Key_EntitlementAdmin.EntitlementsOwnershipByItemId_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_GetEntitlementsOwnershipByItemId_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams: {
      itemId: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      platform?: string | null
    }
  },
  options?: Omit<UseQueryOptions<TimedOwnership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TimedOwnership>) => void
): UseQueryResult<TimedOwnership, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementAdminApi_GetEntitlementsOwnershipByItemId_ByUserId>[1]) => async () => {
      const response = await EntitlementAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getEntitlementsOwnershipByItemId_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<TimedOwnership, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsOwnershipByItemId_ByUserId, input],
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
 *    queryKey: [Key_EntitlementAdmin.EntitlementsOwnershipByItemIds_ByUserId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_GetEntitlementsOwnershipByItemIds_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { ids?: string[]; platform?: string | null } },
  options?: Omit<UseQueryOptions<EntitlementOwnershipArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EntitlementOwnershipArray>) => void
): UseQueryResult<EntitlementOwnershipArray, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementAdminApi_GetEntitlementsOwnershipByItemIds_ByUserId>[1]) => async () => {
      const response = await EntitlementAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getEntitlementsOwnershipByItemIds_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<EntitlementOwnershipArray, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsOwnershipByItemIds_ByUserId, input],
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
 *    queryKey: [Key_EntitlementAdmin.Sell_ByUserId_ByEntitlementId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_UpdateSell_ByUserId_ByEntitlementIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      EntitlementSoldResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; entitlementId: string; data: AdminEntitlementSoldRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: EntitlementSoldResult) => void
): UseMutationResult<
  EntitlementSoldResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; entitlementId: string; data: AdminEntitlementSoldRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; entitlementId: string; data: AdminEntitlementSoldRequest }) => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateSell_ByUserId_ByEntitlementId(input.userId, input.entitlementId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.Sell_ByUserId_ByEntitlementId],
    mutationFn,
    ...options
  })
}

/**
 * Enable user entitlement.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: enable entitlement&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.Enable_ByUserId_ByEntitlementId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_UpdateEnable_ByUserId_ByEntitlementIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<EntitlementInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; entitlementId: string }>,
    'mutationKey'
  >,
  callback?: (data: EntitlementInfo) => void
): UseMutationResult<EntitlementInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; entitlementId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; entitlementId: string }) => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateEnable_ByUserId_ByEntitlementId(input.userId, input.entitlementId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.Enable_ByUserId_ByEntitlementId],
    mutationFn,
    ...options
  })
}

/**
 * Revoke user entitlement.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoke entitlement&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.Revoke_ByUserId_ByEntitlementId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_UpdateRevoke_ByUserId_ByEntitlementIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      EntitlementInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; entitlementId: string; data: EntitlementRevokeRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: EntitlementInfo) => void
): UseMutationResult<
  EntitlementInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; entitlementId: string; data: EntitlementRevokeRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; entitlementId: string; data: EntitlementRevokeRequest }) => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRevoke_ByUserId_ByEntitlementId(input.userId, input.entitlementId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.Revoke_ByUserId_ByEntitlementId],
    mutationFn,
    ...options
  })
}

/**
 * Disable user entitlement if entitlement, only active entitlement can be disable, disabled entitlement can&#39;t consume.&lt;br&gt;&lt;b&gt;Like revoke, it will lose the entitlement ownership, except disabled entitlement can enable.&lt;/b&gt;&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: disable entitlement&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.Disable_ByUserId_ByEntitlementId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_UpdateDisable_ByUserId_ByEntitlementIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<EntitlementInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; entitlementId: string }>,
    'mutationKey'
  >,
  callback?: (data: EntitlementInfo) => void
): UseMutationResult<EntitlementInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; entitlementId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; entitlementId: string }) => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateDisable_ByUserId_ByEntitlementId(input.userId, input.entitlementId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.Disable_ByUserId_ByEntitlementId],
    mutationFn,
    ...options
  })
}

/**
 * Get user entitlement histories.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of entitlement history&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.History_ByUserId_ByEntitlementId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_GetHistory_ByUserId_ByEntitlementId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; entitlementId: string },
  options?: Omit<UseQueryOptions<EntitlementHistoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EntitlementHistoryInfoArray>) => void
): UseQueryResult<EntitlementHistoryInfoArray, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementAdminApi_GetHistory_ByUserId_ByEntitlementId>[1]) => async () => {
      const response = await EntitlementAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getHistory_ByUserId_ByEntitlementId(input.userId, input.entitlementId)
      callback && callback(response)
      return response.data
    }

  return useQuery<EntitlementHistoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.History_ByUserId_ByEntitlementId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Consume user entitlement. If the entitlement useCount is 0, the status will be CONSUMED.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: consumed entitlement&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.Decrement_ByUserId_ByEntitlementId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_UpdateDecrement_ByUserId_ByEntitlementIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      EntitlementDecrementResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; entitlementId: string; data: AdminEntitlementDecrement }
    >,
    'mutationKey'
  >,
  callback?: (data: EntitlementDecrementResult) => void
): UseMutationResult<
  EntitlementDecrementResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; entitlementId: string; data: AdminEntitlementDecrement }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; entitlementId: string; data: AdminEntitlementDecrement }) => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateDecrement_ByUserId_ByEntitlementId(input.userId, input.entitlementId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.Decrement_ByUserId_ByEntitlementId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Revoke specified use count of user entitlement. please use /{entitlementId}/revoke/byUseCount endpoint instead of this endpoint&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoke entitlement&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.RevokeByUseCount_ByUserId_ByEntitlementId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_UpdateRevokeByUseCount_ByUserId_ByEntitlementIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      EntitlementInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; entitlementId: string; data: RevokeUseCountRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: EntitlementInfo) => void
): UseMutationResult<
  EntitlementInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; entitlementId: string; data: RevokeUseCountRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; entitlementId: string; data: RevokeUseCountRequest }) => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRevokeByUseCount_ByUserId_ByEntitlementId(input.userId, input.entitlementId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.RevokeByUseCount_ByUserId_ByEntitlementId],
    mutationFn,
    ...options
  })
}

/**
 * Revoke specified count of user entitlement.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: The revoked entitlement&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.RevokeByUseCount_ByUserId_ByEntitlementId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_CreateRevokeByUseCount_ByUserId_ByEntitlementIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      EntitlementIfc,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; entitlementId: string; data: RevokeUseCountRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: EntitlementIfc) => void
): UseMutationResult<
  EntitlementIfc,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; entitlementId: string; data: RevokeUseCountRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; entitlementId: string; data: RevokeUseCountRequest }) => {
    const response = await EntitlementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createRevokeByUseCount_ByUserId_ByEntitlementId(input.userId, input.entitlementId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.RevokeByUseCount_ByUserId_ByEntitlementId],
    mutationFn,
    ...options
  })
}

/**
 * Checks if specified use count of user entitlement can be revoked without actually revoking it.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: true if revokable, false otherwise&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EntitlementAdmin.RevokeByUseCountPreCheck_ByUserId_ByEntitlementId, input]
 * }
 * ```
 */
export const useEntitlementAdminApi_GetRevokeByUseCountPreCheck_ByUserId_ByEntitlementId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; entitlementId: string; queryParams: { quantity: number } },
  options?: Omit<UseQueryOptions<EntitlementPrechekResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EntitlementPrechekResult>) => void
): UseQueryResult<EntitlementPrechekResult, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEntitlementAdminApi_GetRevokeByUseCountPreCheck_ByUserId_ByEntitlementId>[1]) =>
    async () => {
      const response = await EntitlementAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getRevokeByUseCountPreCheck_ByUserId_ByEntitlementId(input.userId, input.entitlementId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<EntitlementPrechekResult, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.RevokeByUseCountPreCheck_ByUserId_ByEntitlementId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
