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
import { EntitlementSoldResult } from '../../generated-definitions/EntitlementSoldResult.js'
import { EntitlementUpdate } from '../../generated-definitions/EntitlementUpdate.js'
import { Ownership } from '../../generated-definitions/Ownership.js'
import { RevokeUseCountRequest } from '../../generated-definitions/RevokeUseCountRequest.js'
import { StackableEntitlementInfoArray } from '../../generated-definitions/StackableEntitlementInfoArray.js'
import { TimedOwnership } from '../../generated-definitions/TimedOwnership.js'

export enum Key_EntitlementAdmin {
  Entitlements = 'EntitlementAdmin.Entitlements',
  EntitlementGrant = 'EntitlementAdmin.EntitlementGrant',
  EntitlementRevoke = 'EntitlementAdmin.EntitlementRevoke',
  EntitlementsByItemIds = 'EntitlementAdmin.EntitlementsByItemIds',
  EntitlementsConfigInfo = 'EntitlementAdmin.EntitlementsConfigInfo',
  Entitlements_ByUserId = 'EntitlementAdmin.Entitlements_ByUserId',
  Entitlement_ByUserId = 'EntitlementAdmin.Entitlement_ByUserId',
  Entitlement_ByEntitlementId = 'EntitlementAdmin.Entitlement_ByEntitlementId',
  EntitlementsBySku_ByUserId = 'EntitlementAdmin.EntitlementsBySku_ByUserId',
  EntitlementRevoke_ByUserId = 'EntitlementAdmin.EntitlementRevoke_ByUserId',
  EntitlementsByAppId_ByUserId = 'EntitlementAdmin.EntitlementsByAppId_ByUserId',
  EntitlementsByItemId_ByUserId = 'EntitlementAdmin.EntitlementsByItemId_ByUserId',
  EntitlementsByAppType_ByUserId = 'EntitlementAdmin.EntitlementsByAppType_ByUserId',
  EntitlementsByItemIds_ByUserId = 'EntitlementAdmin.EntitlementsByItemIds_ByUserId',
  EntitlementConfig_ByPlatform = 'EntitlementAdmin.EntitlementConfig_ByPlatform',
  EntitlementRevokeById_ByUserId = 'EntitlementAdmin.EntitlementRevokeById_ByUserId',
  EntitlementsOwnershipAny_ByUserId = 'EntitlementAdmin.EntitlementsOwnershipAny_ByUserId',
  Entitlement_ByUserId_ByEntitlementId = 'EntitlementAdmin.Entitlement_ByUserId_ByEntitlementId',
  EntitlementsOwnershipAnyOf_ByUserId = 'EntitlementAdmin.EntitlementsOwnershipAnyOf_ByUserId',
  EntitlementsOwnershipBySku_ByUserId = 'EntitlementAdmin.EntitlementsOwnershipBySku_ByUserId',
  EntitlementConfigEntitlementOriginEnable = 'EntitlementAdmin.EntitlementConfigEntitlementOriginEnable',
  EntitlementsOwnershipByAppId_ByUserId = 'EntitlementAdmin.EntitlementsOwnershipByAppId_ByUserId',
  EntitlementsOwnershipByItemId_ByUserId = 'EntitlementAdmin.EntitlementsOwnershipByItemId_ByUserId',
  EntitlementsOwnershipByItemIds_ByUserId = 'EntitlementAdmin.EntitlementsOwnershipByItemIds_ByUserId',
  Sell_ByUserId_ByEntitlementId = 'EntitlementAdmin.Sell_ByUserId_ByEntitlementId',
  Enable_ByUserId_ByEntitlementId = 'EntitlementAdmin.Enable_ByUserId_ByEntitlementId',
  Revoke_ByUserId_ByEntitlementId = 'EntitlementAdmin.Revoke_ByUserId_ByEntitlementId',
  Disable_ByUserId_ByEntitlementId = 'EntitlementAdmin.Disable_ByUserId_ByEntitlementId',
  History_ByUserId_ByEntitlementId = 'EntitlementAdmin.History_ByUserId_ByEntitlementId',
  Decrement_ByUserId_ByEntitlementId = 'EntitlementAdmin.Decrement_ByUserId_ByEntitlementId',
  RevokeByUseCount_ByUserId_ByEntitlementId = 'EntitlementAdmin.RevokeByUseCount_ByUserId_ByEntitlementId',
  RevokeByUseCountPreCheck_ByUserId_ByEntitlementId = 'EntitlementAdmin.RevokeByUseCountPreCheck_ByUserId_ByEntitlementId'
}

export const useAdmEntitlements = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
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
  callback?: (data: EntitlementPagingSlicedResult) => void
): UseQueryResult<EntitlementPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEntitlements>[1]) => async () => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace }).getEntitlements(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<EntitlementPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.Entitlements, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateEntitlementGrantMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BulkEntitlementGrantResult, AxiosError<ApiError>, ApiArgs & { data: BulkEntitlementGrantRequest }>,
    'mutationKey'
  >,
  callback?: (data: BulkEntitlementGrantResult) => void
): UseMutationResult<BulkEntitlementGrantResult, AxiosError<ApiError>, ApiArgs & { data: BulkEntitlementGrantRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: BulkEntitlementGrantRequest }) => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace, config: input.config }).createEntitlementGrant(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.EntitlementGrant],
    mutationFn,
    ...options
  })
}

export const useAdmCreateEntitlementRevokeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<BulkEntitlementRevokeResult, AxiosError<ApiError>, ApiArgs & { data: string[] }>, 'mutationKey'>,
  callback?: (data: BulkEntitlementRevokeResult) => void
): UseMutationResult<BulkEntitlementRevokeResult, AxiosError<ApiError>, ApiArgs & { data: string[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: string[] }) => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace, config: input.config }).createEntitlementRevoke(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.EntitlementRevoke],
    mutationFn,
    ...options
  })
}

export const useAdmEntitlementsByItemIds = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { activeOnly?: boolean | null; itemIds?: string[]; limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<EntitlementPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: EntitlementPagingSlicedResult) => void
): UseQueryResult<EntitlementPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEntitlementsByItemIds>[1]) => async () => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace }).getEntitlementsByItemIds(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<EntitlementPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsByItemIds, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmEntitlementsConfigInfo = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { withoutCache?: boolean | null } },
  options?: Omit<UseQueryOptions<EntitlementConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: EntitlementConfigInfo) => void
): UseQueryResult<EntitlementConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEntitlementsConfigInfo>[1]) => async () => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace }).getEntitlementsConfigInfo(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<EntitlementConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsConfigInfo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmEntitlements_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
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
  callback?: (data: EntitlementPagingSlicedResult) => void
): UseQueryResult<EntitlementPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEntitlements_ByUserId>[1]) => async () => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace }).getEntitlements_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<EntitlementPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.Entitlements_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateEntitlement_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<StackableEntitlementInfoArray, AxiosError<ApiError>, ApiArgs & { userId: string; data: EntitlementGrant[] }>,
    'mutationKey'
  >,
  callback?: (data: StackableEntitlementInfoArray) => void
): UseMutationResult<StackableEntitlementInfoArray, AxiosError<ApiError>, ApiArgs & { userId: string; data: EntitlementGrant[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: EntitlementGrant[] }) => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace, config: input.config }).createEntitlement_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.Entitlement_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmEntitlement_ByEntitlementId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { entitlementId: string },
  options?: Omit<UseQueryOptions<EntitlementInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: EntitlementInfo) => void
): UseQueryResult<EntitlementInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEntitlement_ByEntitlementId>[1]) => async () => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace }).getEntitlement_ByEntitlementId(input.entitlementId)
    callback && callback(data)
    return data
  }

  return useQuery<EntitlementInfo, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.Entitlement_ByEntitlementId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmEntitlementsBySku_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    userId: string
    queryParams: {
      sku: string | null
      activeOnly?: boolean | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      platform?: string | null
    }
  },
  options?: Omit<UseQueryOptions<EntitlementInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: EntitlementInfo) => void
): UseQueryResult<EntitlementInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEntitlementsBySku_ByUserId>[1]) => async () => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace }).getEntitlementsBySku_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<EntitlementInfo, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsBySku_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateEntitlementRevoke_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<BulkOperationResult, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: BulkOperationResult) => void
): UseMutationResult<BulkOperationResult, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateEntitlementRevoke_ByUserId(
      input.userId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.EntitlementRevoke_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmEntitlementsByAppId_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams: { appId: string | null; activeOnly?: boolean | null } },
  options?: Omit<UseQueryOptions<AppEntitlementInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AppEntitlementInfo) => void
): UseQueryResult<AppEntitlementInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEntitlementsByAppId_ByUserId>[1]) => async () => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace }).getEntitlementsByAppId_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<AppEntitlementInfo, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsByAppId_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmEntitlementsByItemId_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    userId: string
    queryParams: {
      itemId: string | null
      activeOnly?: boolean | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      platform?: string | null
    }
  },
  options?: Omit<UseQueryOptions<EntitlementInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: EntitlementInfo) => void
): UseQueryResult<EntitlementInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEntitlementsByItemId_ByUserId>[1]) => async () => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace }).getEntitlementsByItemId_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<EntitlementInfo, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsByItemId_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmEntitlementsByAppType_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    userId: string
    queryParams: { appType: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'; activeOnly?: boolean | null; limit?: number; offset?: number }
  },
  options?: Omit<UseQueryOptions<AppEntitlementPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AppEntitlementPagingSlicedResult) => void
): UseQueryResult<AppEntitlementPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEntitlementsByAppType_ByUserId>[1]) => async () => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace }).getEntitlementsByAppType_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<AppEntitlementPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsByAppType_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmEntitlementsByItemIds_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { ids?: string[]; platform?: string | null } },
  options?: Omit<UseQueryOptions<EntitlementInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: EntitlementInfoArray) => void
): UseQueryResult<EntitlementInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEntitlementsByItemIds_ByUserId>[1]) => async () => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace }).getEntitlementsByItemIds_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<EntitlementInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsByItemIds_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmEntitlementConfig_ByPlatform = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { platform: string },
  options?: Omit<UseQueryOptions<EntitlementPlatformConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: EntitlementPlatformConfigInfo) => void
): UseQueryResult<EntitlementPlatformConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEntitlementConfig_ByPlatform>[1]) => async () => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace }).getEntitlementConfig_ByPlatform(input.platform)
    callback && callback(data)
    return data
  }

  return useQuery<EntitlementPlatformConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementConfig_ByPlatform, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateEntitlementConfig_ByPlatformMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      EntitlementPlatformConfigInfo,
      AxiosError<ApiError>,
      ApiArgs & { platform: string; data: EntitlementPlatformConfigUpdate }
    >,
    'mutationKey'
  >,
  callback?: (data: EntitlementPlatformConfigInfo) => void
): UseMutationResult<
  EntitlementPlatformConfigInfo,
  AxiosError<ApiError>,
  ApiArgs & { platform: string; data: EntitlementPlatformConfigUpdate }
> => {
  //
  const mutationFn = async (input: ApiArgs & { platform: string; data: EntitlementPlatformConfigUpdate }) => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateEntitlementConfig_ByPlatform(
      input.platform,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.EntitlementConfig_ByPlatform],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateEntitlementRevokeById_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      BulkOperationResult,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; queryParams: { entitlementIds: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: BulkOperationResult) => void
): UseMutationResult<
  BulkOperationResult,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; queryParams: { entitlementIds: string | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; queryParams: { entitlementIds: string | null } }) => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateEntitlementRevokeById_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.EntitlementRevokeById_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmEntitlementsOwnershipAny_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { appIds?: string[]; itemIds?: string[]; platform?: string | null; skus?: string[] } },
  options?: Omit<UseQueryOptions<Ownership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: Ownership) => void
): UseQueryResult<Ownership, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEntitlementsOwnershipAny_ByUserId>[1]) => async () => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace }).getEntitlementsOwnershipAny_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<Ownership, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsOwnershipAny_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmEntitlement_ByUserId_ByEntitlementId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; entitlementId: string },
  options?: Omit<UseQueryOptions<EntitlementInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: EntitlementInfo) => void
): UseQueryResult<EntitlementInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEntitlement_ByUserId_ByEntitlementId>[1]) => async () => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace }).getEntitlement_ByUserId_ByEntitlementId(
      input.userId,
      input.entitlementId
    )
    callback && callback(data)
    return data
  }

  return useQuery<EntitlementInfo, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.Entitlement_ByUserId_ByEntitlementId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateEntitlement_ByUserId_ByEntitlementIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<EntitlementInfo, AxiosError<ApiError>, ApiArgs & { userId: string; entitlementId: string; data: EntitlementUpdate }>,
    'mutationKey'
  >,
  callback?: (data: EntitlementInfo) => void
): UseMutationResult<
  EntitlementInfo,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; entitlementId: string; data: EntitlementUpdate }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; entitlementId: string; data: EntitlementUpdate }) => {
    const data = await EntitlementAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateEntitlement_ByUserId_ByEntitlementId(input.userId, input.entitlementId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.Entitlement_ByUserId_ByEntitlementId],
    mutationFn,
    ...options
  })
}

export const useAdmEntitlementsOwnershipAnyOf_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams: { itemIds: string[]; platform?: string | null } },
  options?: Omit<UseQueryOptions<Ownership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: Ownership) => void
): UseQueryResult<Ownership, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEntitlementsOwnershipAnyOf_ByUserId>[1]) => async () => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace }).getEntitlementsOwnershipAnyOf_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<Ownership, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsOwnershipAnyOf_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmEntitlementsOwnershipBySku_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    userId: string
    queryParams: {
      sku: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      platform?: string | null
    }
  },
  options?: Omit<UseQueryOptions<TimedOwnership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TimedOwnership) => void
): UseQueryResult<TimedOwnership, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEntitlementsOwnershipBySku_ByUserId>[1]) => async () => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace }).getEntitlementsOwnershipBySku_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<TimedOwnership, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsOwnershipBySku_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateEntitlementConfigEntitlementOriginEnableMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<EntitlementConfigInfo, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: EntitlementConfigInfo) => void
): UseMutationResult<EntitlementConfigInfo, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await EntitlementAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateEntitlementConfigEntitlementOriginEnable()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.EntitlementConfigEntitlementOriginEnable],
    mutationFn,
    ...options
  })
}

export const useAdmEntitlementsOwnershipByAppId_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams: { appId: string | null } },
  options?: Omit<UseQueryOptions<Ownership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: Ownership) => void
): UseQueryResult<Ownership, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEntitlementsOwnershipByAppId_ByUserId>[1]) => async () => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace }).getEntitlementsOwnershipByAppId_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<Ownership, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsOwnershipByAppId_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmEntitlementsOwnershipByItemId_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    userId: string
    queryParams: {
      itemId: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      platform?: string | null
    }
  },
  options?: Omit<UseQueryOptions<TimedOwnership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TimedOwnership) => void
): UseQueryResult<TimedOwnership, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEntitlementsOwnershipByItemId_ByUserId>[1]) => async () => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace }).getEntitlementsOwnershipByItemId_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<TimedOwnership, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsOwnershipByItemId_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmEntitlementsOwnershipByItemIds_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { ids?: string[]; platform?: string | null } },
  options?: Omit<UseQueryOptions<EntitlementOwnershipArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: EntitlementOwnershipArray) => void
): UseQueryResult<EntitlementOwnershipArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEntitlementsOwnershipByItemIds_ByUserId>[1]) => async () => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace }).getEntitlementsOwnershipByItemIds_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<EntitlementOwnershipArray, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.EntitlementsOwnershipByItemIds_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateSell_ByUserId_ByEntitlementIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      EntitlementSoldResult,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; entitlementId: string; data: AdminEntitlementSoldRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: EntitlementSoldResult) => void
): UseMutationResult<
  EntitlementSoldResult,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; entitlementId: string; data: AdminEntitlementSoldRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; entitlementId: string; data: AdminEntitlementSoldRequest }) => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateSell_ByUserId_ByEntitlementId(
      input.userId,
      input.entitlementId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.Sell_ByUserId_ByEntitlementId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateEnable_ByUserId_ByEntitlementIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<EntitlementInfo, AxiosError<ApiError>, ApiArgs & { userId: string; entitlementId: string }>,
    'mutationKey'
  >,
  callback?: (data: EntitlementInfo) => void
): UseMutationResult<EntitlementInfo, AxiosError<ApiError>, ApiArgs & { userId: string; entitlementId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; entitlementId: string }) => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateEnable_ByUserId_ByEntitlementId(
      input.userId,
      input.entitlementId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.Enable_ByUserId_ByEntitlementId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateRevoke_ByUserId_ByEntitlementIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<EntitlementInfo, AxiosError<ApiError>, ApiArgs & { userId: string; entitlementId: string }>,
    'mutationKey'
  >,
  callback?: (data: EntitlementInfo) => void
): UseMutationResult<EntitlementInfo, AxiosError<ApiError>, ApiArgs & { userId: string; entitlementId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; entitlementId: string }) => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateRevoke_ByUserId_ByEntitlementId(
      input.userId,
      input.entitlementId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.Revoke_ByUserId_ByEntitlementId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateDisable_ByUserId_ByEntitlementIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<EntitlementInfo, AxiosError<ApiError>, ApiArgs & { userId: string; entitlementId: string }>,
    'mutationKey'
  >,
  callback?: (data: EntitlementInfo) => void
): UseMutationResult<EntitlementInfo, AxiosError<ApiError>, ApiArgs & { userId: string; entitlementId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; entitlementId: string }) => {
    const data = await EntitlementAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateDisable_ByUserId_ByEntitlementId(input.userId, input.entitlementId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.Disable_ByUserId_ByEntitlementId],
    mutationFn,
    ...options
  })
}

export const useAdmHistory_ByUserId_ByEntitlementId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; entitlementId: string },
  options?: Omit<UseQueryOptions<EntitlementHistoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: EntitlementHistoryInfoArray) => void
): UseQueryResult<EntitlementHistoryInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmHistory_ByUserId_ByEntitlementId>[1]) => async () => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace }).getHistory_ByUserId_ByEntitlementId(
      input.userId,
      input.entitlementId
    )
    callback && callback(data)
    return data
  }

  return useQuery<EntitlementHistoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.History_ByUserId_ByEntitlementId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateDecrement_ByUserId_ByEntitlementIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      EntitlementDecrementResult,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; entitlementId: string; data: AdminEntitlementDecrement }
    >,
    'mutationKey'
  >,
  callback?: (data: EntitlementDecrementResult) => void
): UseMutationResult<
  EntitlementDecrementResult,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; entitlementId: string; data: AdminEntitlementDecrement }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; entitlementId: string; data: AdminEntitlementDecrement }) => {
    const data = await EntitlementAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateDecrement_ByUserId_ByEntitlementId(input.userId, input.entitlementId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.Decrement_ByUserId_ByEntitlementId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateRevokeByUseCount_ByUserId_ByEntitlementIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      EntitlementIfc,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; entitlementId: string; data: RevokeUseCountRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: EntitlementIfc) => void
): UseMutationResult<
  EntitlementIfc,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; entitlementId: string; data: RevokeUseCountRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; entitlementId: string; data: RevokeUseCountRequest }) => {
    const data = await EntitlementAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createRevokeByUseCount_ByUserId_ByEntitlementId(input.userId, input.entitlementId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_EntitlementAdmin.RevokeByUseCount_ByUserId_ByEntitlementId],
    mutationFn,
    ...options
  })
}

export const useAdmRevokeByUseCountPreCheck_ByUserId_ByEntitlementId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; entitlementId: string; queryParams: { quantity: number } },
  options?: Omit<UseQueryOptions<EntitlementPrechekResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: EntitlementPrechekResult) => void
): UseQueryResult<EntitlementPrechekResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRevokeByUseCountPreCheck_ByUserId_ByEntitlementId>[1]) => async () => {
    const data = await EntitlementAdminApi(sdk, { namespace: input.namespace }).getRevokeByUseCountPreCheck_ByUserId_ByEntitlementId(
      input.userId,
      input.entitlementId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<EntitlementPrechekResult, AxiosError<ApiError>>({
    queryKey: [Key_EntitlementAdmin.RevokeByUseCountPreCheck_ByUserId_ByEntitlementId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
