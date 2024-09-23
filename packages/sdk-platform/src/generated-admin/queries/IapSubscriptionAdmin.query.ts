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
import { IapSubscriptionAdminApi } from '../IapSubscriptionAdminApi.js'

import { ThirdPartySubscriptionOwnership } from '../../generated-definitions/ThirdPartySubscriptionOwnership.js'
import { ThirdPartySubscriptionTransactionHistoryPagingSlicedResult } from '../../generated-definitions/ThirdPartySubscriptionTransactionHistoryPagingSlicedResult.js'
import { ThirdPartySubscriptionTransactionInfo } from '../../generated-definitions/ThirdPartySubscriptionTransactionInfo.js'
import { ThirdPartySubscriptionTransactionPagingSlicedResult } from '../../generated-definitions/ThirdPartySubscriptionTransactionPagingSlicedResult.js'
import { ThirdPartyUserSubscriptionInfo } from '../../generated-definitions/ThirdPartyUserSubscriptionInfo.js'
import { ThirdPartyUserSubscriptionPagingSlicedResult } from '../../generated-definitions/ThirdPartyUserSubscriptionPagingSlicedResult.js'

export enum Key_IapSubscriptionAdmin {
  IapSubscriptions = 'Platform.IapSubscriptionAdmin.IapSubscriptions',
  IapSubscriptions_ByUserId = 'Platform.IapSubscriptionAdmin.IapSubscriptions_ByUserId',
  IapSubscription_ByUserId_ById = 'Platform.IapSubscriptionAdmin.IapSubscription_ByUserId_ById',
  SyncIap_ByUserId_ById = 'Platform.IapSubscriptionAdmin.SyncIap_ByUserId_ById',
  IapSubscriptionsTransactions_ByUserId = 'Platform.IapSubscriptionAdmin.IapSubscriptionsTransactions_ByUserId',
  IapSubscriptionTransaction_ByUserId_ById = 'Platform.IapSubscriptionAdmin.IapSubscriptionTransaction_ByUserId_ById',
  SyncSubscriptionIap_ByUserId_ById = 'Platform.IapSubscriptionAdmin.SyncSubscriptionIap_ByUserId_ById',
  HistoriesSubscriptionsIap_ByUserId_ById = 'Platform.IapSubscriptionAdmin.HistoriesSubscriptionsIap_ByUserId_ById',
  OwnershipByGroupIdSubscriptionsIap_ByUserId_ByPlatform = 'Platform.IapSubscriptionAdmin.OwnershipByGroupIdSubscriptionsIap_ByUserId_ByPlatform',
  OwnershipByProductIdSubscriptionsIap_ByUserId_ByPlatform = 'Platform.IapSubscriptionAdmin.OwnershipByProductIdSubscriptionsIap_ByUserId_ByPlatform'
}

/**
 * Query subscriptions, default sort by updatedAt Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapSubscriptionAdmin.IapSubscriptions, input]
 * }
 * ```
 */
export const useIapSubscriptionAdminApi_GetIapSubscriptions = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      activeOnly?: boolean | null
      groupId?: string | null
      limit?: number
      offset?: number
      platform?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
      productId?: string | null
      userId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<ThirdPartyUserSubscriptionPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ThirdPartyUserSubscriptionPagingSlicedResult>) => void
): UseQueryResult<ThirdPartyUserSubscriptionPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapSubscriptionAdminApi_GetIapSubscriptions>[1]) => async () => {
    const response = await IapSubscriptionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getIapSubscriptions(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ThirdPartyUserSubscriptionPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_IapSubscriptionAdmin.IapSubscriptions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query user subscription, default sort by updatedAtOther detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapSubscriptionAdmin.IapSubscriptions_ByUserId, input]
 * }
 * ```
 */
export const useIapSubscriptionAdminApi_GetIapSubscriptions_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: {
      activeOnly?: boolean | null
      groupId?: string | null
      limit?: number
      offset?: number
      platform?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
      productId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<ThirdPartyUserSubscriptionPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ThirdPartyUserSubscriptionPagingSlicedResult>) => void
): UseQueryResult<ThirdPartyUserSubscriptionPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapSubscriptionAdminApi_GetIapSubscriptions_ByUserId>[1]) => async () => {
    const response = await IapSubscriptionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getIapSubscriptions_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ThirdPartyUserSubscriptionPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_IapSubscriptionAdmin.IapSubscriptions_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Admin get user subscription details.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapSubscriptionAdmin.IapSubscription_ByUserId_ById, input]
 * }
 * ```
 */
export const useIapSubscriptionAdminApi_GetIapSubscription_ByUserId_ById = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; id: string },
  options?: Omit<UseQueryOptions<ThirdPartyUserSubscriptionInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ThirdPartyUserSubscriptionInfo>) => void
): UseQueryResult<ThirdPartyUserSubscriptionInfo, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useIapSubscriptionAdminApi_GetIapSubscription_ByUserId_ById>[1]) => async () => {
      const response = await IapSubscriptionAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getIapSubscription_ByUserId_ById(input.userId, input.id)
      callback && callback(response)
      return response.data
    }

  return useQuery<ThirdPartyUserSubscriptionInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapSubscriptionAdmin.IapSubscription_ByUserId_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Sync Subscription Status
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapSubscriptionAdmin.SyncIap_ByUserId_ById, input]
 * }
 * ```
 */
export const useIapSubscriptionAdminApi_UpdateSyncIap_ByUserId_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ThirdPartyUserSubscriptionInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; id: string }>,
    'mutationKey'
  >,
  callback?: (data: ThirdPartyUserSubscriptionInfo) => void
): UseMutationResult<ThirdPartyUserSubscriptionInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; id: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; id: string }) => {
    const response = await IapSubscriptionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateSyncIap_ByUserId_ById(input.userId, input.id)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapSubscriptionAdmin.SyncIap_ByUserId_ById],
    mutationFn,
    ...options
  })
}

/**
 * Admin query user subscription transactions, default sort by startAt timeOther detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapSubscriptionAdmin.IapSubscriptionsTransactions_ByUserId, input]
 * }
 * ```
 */
export const useIapSubscriptionAdminApi_GetIapSubscriptionsTransactions_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: {
      activeOnly?: boolean | null
      groupId?: string | null
      limit?: number
      offset?: number
      platform?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
      productId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<ThirdPartySubscriptionTransactionPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ThirdPartySubscriptionTransactionPagingSlicedResult>) => void
): UseQueryResult<ThirdPartySubscriptionTransactionPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useIapSubscriptionAdminApi_GetIapSubscriptionsTransactions_ByUserId>[1]) => async () => {
      const response = await IapSubscriptionAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getIapSubscriptionsTransactions_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<ThirdPartySubscriptionTransactionPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_IapSubscriptionAdmin.IapSubscriptionsTransactions_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Admin get user subscription details.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapSubscriptionAdmin.IapSubscriptionTransaction_ByUserId_ById, input]
 * }
 * ```
 */
export const useIapSubscriptionAdminApi_GetIapSubscriptionTransaction_ByUserId_ById = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; id: string },
  options?: Omit<UseQueryOptions<ThirdPartySubscriptionTransactionInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ThirdPartySubscriptionTransactionInfo>) => void
): UseQueryResult<ThirdPartySubscriptionTransactionInfo, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useIapSubscriptionAdminApi_GetIapSubscriptionTransaction_ByUserId_ById>[1]) =>
    async () => {
      const response = await IapSubscriptionAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getIapSubscriptionTransaction_ByUserId_ById(input.userId, input.id)
      callback && callback(response)
      return response.data
    }

  return useQuery<ThirdPartySubscriptionTransactionInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapSubscriptionAdmin.IapSubscriptionTransaction_ByUserId_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Sync Subscription Status
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapSubscriptionAdmin.SyncSubscriptionIap_ByUserId_ById, input]
 * }
 * ```
 */
export const useIapSubscriptionAdminApi_UpdateSyncSubscriptionIap_ByUserId_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ThirdPartySubscriptionTransactionInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; id: string }>,
    'mutationKey'
  >,
  callback?: (data: ThirdPartySubscriptionTransactionInfo) => void
): UseMutationResult<ThirdPartySubscriptionTransactionInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; id: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; id: string }) => {
    const response = await IapSubscriptionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateSyncSubscriptionIap_ByUserId_ById(input.userId, input.id)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapSubscriptionAdmin.SyncSubscriptionIap_ByUserId_ById],
    mutationFn,
    ...options
  })
}

/**
 * Get Subscription Transaction Update History
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapSubscriptionAdmin.HistoriesSubscriptionsIap_ByUserId_ById, input]
 * }
 * ```
 */
export const useIapSubscriptionAdminApi_GetHistoriesSubscriptionsIap_ByUserId_ById = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; id: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ThirdPartySubscriptionTransactionHistoryPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ThirdPartySubscriptionTransactionHistoryPagingSlicedResult>) => void
): UseQueryResult<ThirdPartySubscriptionTransactionHistoryPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useIapSubscriptionAdminApi_GetHistoriesSubscriptionsIap_ByUserId_ById>[1]) => async () => {
      const response = await IapSubscriptionAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getHistoriesSubscriptionsIap_ByUserId_ById(input.userId, input.id, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<ThirdPartySubscriptionTransactionHistoryPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_IapSubscriptionAdmin.HistoriesSubscriptionsIap_ByUserId_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get user third party subscription by subscription group id.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapSubscriptionAdmin.OwnershipByGroupIdSubscriptionsIap_ByUserId_ByPlatform, input]
 * }
 * ```
 */
export const useIapSubscriptionAdminApi_GetOwnershipByGroupIdSubscriptionsIap_ByUserId_ByPlatform = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; platform: string; queryParams: { groupId: string | null } },
  options?: Omit<UseQueryOptions<ThirdPartySubscriptionOwnership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ThirdPartySubscriptionOwnership>) => void
): UseQueryResult<ThirdPartySubscriptionOwnership, AxiosError<ApiError>> => {
  const queryFn =
    (
      sdk: AccelByteSDK,
      input: Parameters<typeof useIapSubscriptionAdminApi_GetOwnershipByGroupIdSubscriptionsIap_ByUserId_ByPlatform>[1]
    ) =>
    async () => {
      const response = await IapSubscriptionAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getOwnershipByGroupIdSubscriptionsIap_ByUserId_ByPlatform(input.userId, input.platform, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<ThirdPartySubscriptionOwnership, AxiosError<ApiError>>({
    queryKey: [Key_IapSubscriptionAdmin.OwnershipByGroupIdSubscriptionsIap_ByUserId_ByPlatform, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get user third party subscription by subscription product id.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapSubscriptionAdmin.OwnershipByProductIdSubscriptionsIap_ByUserId_ByPlatform, input]
 * }
 * ```
 */
export const useIapSubscriptionAdminApi_GetOwnershipByProductIdSubscriptionsIap_ByUserId_ByPlatform = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; platform: string; queryParams: { productId: string | null } },
  options?: Omit<UseQueryOptions<ThirdPartySubscriptionOwnership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ThirdPartySubscriptionOwnership>) => void
): UseQueryResult<ThirdPartySubscriptionOwnership, AxiosError<ApiError>> => {
  const queryFn =
    (
      sdk: AccelByteSDK,
      input: Parameters<typeof useIapSubscriptionAdminApi_GetOwnershipByProductIdSubscriptionsIap_ByUserId_ByPlatform>[1]
    ) =>
    async () => {
      const response = await IapSubscriptionAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getOwnershipByProductIdSubscriptionsIap_ByUserId_ByPlatform(input.userId, input.platform, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<ThirdPartySubscriptionOwnership, AxiosError<ApiError>>({
    queryKey: [Key_IapSubscriptionAdmin.OwnershipByProductIdSubscriptionsIap_ByUserId_ByPlatform, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
