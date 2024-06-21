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
import { SubscriptionAdminApi } from '../SubscriptionAdminApi.js'

import { BillingHistoryPagingSlicedResult } from '../../generated-definitions/BillingHistoryPagingSlicedResult.js'
import { CancelRequest } from '../../generated-definitions/CancelRequest.js'
import { GrantSubscriptionDaysRequest } from '../../generated-definitions/GrantSubscriptionDaysRequest.js'
import { PlatformSubscribeRequest } from '../../generated-definitions/PlatformSubscribeRequest.js'
import { RecurringChargeResult } from '../../generated-definitions/RecurringChargeResult.js'
import { Subscribable } from '../../generated-definitions/Subscribable.js'
import { SubscriptionActivityPagingSlicedResult } from '../../generated-definitions/SubscriptionActivityPagingSlicedResult.js'
import { SubscriptionInfo } from '../../generated-definitions/SubscriptionInfo.js'
import { SubscriptionPagingSlicedResult } from '../../generated-definitions/SubscriptionPagingSlicedResult.js'
import { TradeNotification } from '../../generated-definitions/TradeNotification.js'

export enum Key_SubscriptionAdmin {
  Subscriptions = 'SubscriptionAdmin.Subscriptions',
  Subscriptions_ByUserId = 'SubscriptionAdmin.Subscriptions_ByUserId',
  SubscriptionsActivities_ByUserId = 'SubscriptionAdmin.SubscriptionsActivities_ByUserId',
  Recurring_BySubscriptionId = 'SubscriptionAdmin.Recurring_BySubscriptionId',
  Subscription_ByUserId_BySubscriptionId = 'SubscriptionAdmin.Subscription_ByUserId_BySubscriptionId',
  SubscriptionPlatformSubscribe_ByUserId = 'SubscriptionAdmin.SubscriptionPlatformSubscribe_ByUserId',
  SubscriptionsSubscribableByItemId_ByUserId = 'SubscriptionAdmin.SubscriptionsSubscribableByItemId_ByUserId',
  Grant_ByUserId_BySubscriptionId = 'SubscriptionAdmin.Grant_ByUserId_BySubscriptionId',
  Cancel_ByUserId_BySubscriptionId = 'SubscriptionAdmin.Cancel_ByUserId_BySubscriptionId',
  History_ByUserId_BySubscriptionId = 'SubscriptionAdmin.History_ByUserId_BySubscriptionId',
  Notification_ByUserId_BySubscriptionId = 'SubscriptionAdmin.Notification_ByUserId_BySubscriptionId'
}

export const useAdmSubscriptions = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: {
      chargeStatus?: 'CHARGED' | 'CHARGE_FAILED' | 'NEVER' | 'RECURRING_CHARGING' | 'SETUP'
      itemId?: string | null
      limit?: number
      offset?: number
      sku?: string | null
      status?: 'ACTIVE' | 'CANCELLED' | 'EXPIRED' | 'INIT'
      subscribedBy?: 'PLATFORM' | 'USER'
      userId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<SubscriptionPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: SubscriptionPagingSlicedResult) => void
): UseQueryResult<SubscriptionPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSubscriptions>[1]) => async () => {
    const data = await SubscriptionAdminApi(sdk, { namespace: input.namespace }).getSubscriptions(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<SubscriptionPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_SubscriptionAdmin.Subscriptions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmSubscriptions_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    userId: string
    queryParams?: {
      chargeStatus?: 'CHARGED' | 'CHARGE_FAILED' | 'NEVER' | 'RECURRING_CHARGING' | 'SETUP'
      itemId?: string | null
      limit?: number
      offset?: number
      sku?: string | null
      status?: 'ACTIVE' | 'CANCELLED' | 'EXPIRED' | 'INIT'
      subscribedBy?: 'PLATFORM' | 'USER'
    }
  },
  options?: Omit<UseQueryOptions<SubscriptionPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: SubscriptionPagingSlicedResult) => void
): UseQueryResult<SubscriptionPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSubscriptions_ByUserId>[1]) => async () => {
    const data = await SubscriptionAdminApi(sdk, { namespace: input.namespace }).getSubscriptions_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<SubscriptionPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_SubscriptionAdmin.Subscriptions_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmSubscriptionsActivities_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    userId: string
    queryParams?: { excludeSystem?: boolean | null; limit?: number; offset?: number; subscriptionId?: string | null }
  },
  options?: Omit<UseQueryOptions<SubscriptionActivityPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: SubscriptionActivityPagingSlicedResult) => void
): UseQueryResult<SubscriptionActivityPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSubscriptionsActivities_ByUserId>[1]) => async () => {
    const data = await SubscriptionAdminApi(sdk, { namespace: input.namespace }).getSubscriptionsActivities_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<SubscriptionActivityPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_SubscriptionAdmin.SubscriptionsActivities_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateRecurring_BySubscriptionIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<RecurringChargeResult, AxiosError<ApiError>, ApiArgs & { subscriptionId: string }>, 'mutationKey'>,
  callback?: (data: RecurringChargeResult) => void
): UseMutationResult<RecurringChargeResult, AxiosError<ApiError>, ApiArgs & { subscriptionId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { subscriptionId: string }) => {
    const data = await SubscriptionAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateRecurring_BySubscriptionId(
      input.subscriptionId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SubscriptionAdmin.Recurring_BySubscriptionId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteSubscription_ByUserId_BySubscriptionIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; subscriptionId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; subscriptionId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; subscriptionId: string }) => {
    const data = await SubscriptionAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteSubscription_ByUserId_BySubscriptionId(input.userId, input.subscriptionId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SubscriptionAdmin.Subscription_ByUserId_BySubscriptionId],
    mutationFn,
    ...options
  })
}

export const useAdmSubscription_ByUserId_BySubscriptionId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; subscriptionId: string },
  options?: Omit<UseQueryOptions<SubscriptionInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: SubscriptionInfo) => void
): UseQueryResult<SubscriptionInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSubscription_ByUserId_BySubscriptionId>[1]) => async () => {
    const data = await SubscriptionAdminApi(sdk, { namespace: input.namespace }).getSubscription_ByUserId_BySubscriptionId(
      input.userId,
      input.subscriptionId
    )
    callback && callback(data)
    return data
  }

  return useQuery<SubscriptionInfo, AxiosError<ApiError>>({
    queryKey: [Key_SubscriptionAdmin.Subscription_ByUserId_BySubscriptionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateSubscriptionPlatformSubscribe_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<SubscriptionInfo, AxiosError<ApiError>, ApiArgs & { userId: string; data: PlatformSubscribeRequest }>,
    'mutationKey'
  >,
  callback?: (data: SubscriptionInfo) => void
): UseMutationResult<SubscriptionInfo, AxiosError<ApiError>, ApiArgs & { userId: string; data: PlatformSubscribeRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: PlatformSubscribeRequest }) => {
    const data = await SubscriptionAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createSubscriptionPlatformSubscribe_ByUserId(input.userId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SubscriptionAdmin.SubscriptionPlatformSubscribe_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmSubscriptionsSubscribableByItemId_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams: { itemId: string | null } },
  options?: Omit<UseQueryOptions<Subscribable, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: Subscribable) => void
): UseQueryResult<Subscribable, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSubscriptionsSubscribableByItemId_ByUserId>[1]) => async () => {
    const data = await SubscriptionAdminApi(sdk, { namespace: input.namespace }).getSubscriptionsSubscribableByItemId_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<Subscribable, AxiosError<ApiError>>({
    queryKey: [Key_SubscriptionAdmin.SubscriptionsSubscribableByItemId_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateGrant_ByUserId_BySubscriptionIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      SubscriptionInfo,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; subscriptionId: string; data: GrantSubscriptionDaysRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: SubscriptionInfo) => void
): UseMutationResult<
  SubscriptionInfo,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; subscriptionId: string; data: GrantSubscriptionDaysRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; subscriptionId: string; data: GrantSubscriptionDaysRequest }) => {
    const data = await SubscriptionAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateGrant_ByUserId_BySubscriptionId(input.userId, input.subscriptionId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SubscriptionAdmin.Grant_ByUserId_BySubscriptionId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateCancel_ByUserId_BySubscriptionIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      SubscriptionInfo,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; subscriptionId: string; data: CancelRequest; queryParams?: { force?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: SubscriptionInfo) => void
): UseMutationResult<
  SubscriptionInfo,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; subscriptionId: string; data: CancelRequest; queryParams?: { force?: boolean | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { userId: string; subscriptionId: string; data: CancelRequest; queryParams?: { force?: boolean | null } }
  ) => {
    const data = await SubscriptionAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateCancel_ByUserId_BySubscriptionId(input.userId, input.subscriptionId, input.data, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SubscriptionAdmin.Cancel_ByUserId_BySubscriptionId],
    mutationFn,
    ...options
  })
}

export const useAdmHistory_ByUserId_BySubscriptionId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    userId: string
    subscriptionId: string
    queryParams?: { excludeFree?: boolean | null; limit?: number; offset?: number }
  },
  options?: Omit<UseQueryOptions<BillingHistoryPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: BillingHistoryPagingSlicedResult) => void
): UseQueryResult<BillingHistoryPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmHistory_ByUserId_BySubscriptionId>[1]) => async () => {
    const data = await SubscriptionAdminApi(sdk, { namespace: input.namespace }).getHistory_ByUserId_BySubscriptionId(
      input.userId,
      input.subscriptionId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<BillingHistoryPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_SubscriptionAdmin.History_ByUserId_BySubscriptionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateNotification_ByUserId_BySubscriptionIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; subscriptionId: string; data: TradeNotification }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; subscriptionId: string; data: TradeNotification }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; subscriptionId: string; data: TradeNotification }) => {
    const data = await SubscriptionAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createNotification_ByUserId_BySubscriptionId(input.userId, input.subscriptionId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SubscriptionAdmin.Notification_ByUserId_BySubscriptionId],
    mutationFn,
    ...options
  })
}
