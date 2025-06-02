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
  Subscriptions = 'Platform.SubscriptionAdmin.Subscriptions',
  Subscriptions_ByUserId = 'Platform.SubscriptionAdmin.Subscriptions_ByUserId',
  SubscriptionsActivities_ByUserId = 'Platform.SubscriptionAdmin.SubscriptionsActivities_ByUserId',
  Recurring_BySubscriptionId = 'Platform.SubscriptionAdmin.Recurring_BySubscriptionId',
  Subscription_ByUserId_BySubscriptionId = 'Platform.SubscriptionAdmin.Subscription_ByUserId_BySubscriptionId',
  SubscriptionPlatformSubscribe_ByUserId = 'Platform.SubscriptionAdmin.SubscriptionPlatformSubscribe_ByUserId',
  SubscriptionsSubscribableByItemId_ByUserId = 'Platform.SubscriptionAdmin.SubscriptionsSubscribableByItemId_ByUserId',
  Grant_ByUserId_BySubscriptionId = 'Platform.SubscriptionAdmin.Grant_ByUserId_BySubscriptionId',
  Cancel_ByUserId_BySubscriptionId = 'Platform.SubscriptionAdmin.Cancel_ByUserId_BySubscriptionId',
  History_ByUserId_BySubscriptionId = 'Platform.SubscriptionAdmin.History_ByUserId_BySubscriptionId',
  Notification_ByUserId_BySubscriptionId = 'Platform.SubscriptionAdmin.Notification_ByUserId_BySubscriptionId'
}

/**
 * Query subscriptions.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscriptions&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SubscriptionAdmin.Subscriptions, input]
 * }
 * ```
 */
export const useSubscriptionAdminApi_GetSubscriptions = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
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
  callback?: (data: AxiosResponse<SubscriptionPagingSlicedResult>) => void
): UseQueryResult<SubscriptionPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSubscriptionAdminApi_GetSubscriptions>[1]) => async () => {
    const response = await SubscriptionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getSubscriptions(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<SubscriptionPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_SubscriptionAdmin.Subscriptions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query user subscriptions.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscription&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SubscriptionAdmin.Subscriptions_ByUserId, input]
 * }
 * ```
 */
export const useSubscriptionAdminApi_GetSubscriptions_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
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
  callback?: (data: AxiosResponse<SubscriptionPagingSlicedResult>) => void
): UseQueryResult<SubscriptionPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSubscriptionAdminApi_GetSubscriptions_ByUserId>[1]) => async () => {
    const response = await SubscriptionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getSubscriptions_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<SubscriptionPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_SubscriptionAdmin.Subscriptions_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get user subscription activity.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscription activity&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SubscriptionAdmin.SubscriptionsActivities_ByUserId, input]
 * }
 * ```
 */
export const useSubscriptionAdminApi_GetSubscriptionsActivities_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: { excludeSystem?: boolean | null; limit?: number; offset?: number; subscriptionId?: string | null }
  },
  options?: Omit<UseQueryOptions<SubscriptionActivityPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SubscriptionActivityPagingSlicedResult>) => void
): UseQueryResult<SubscriptionActivityPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useSubscriptionAdminApi_GetSubscriptionsActivities_ByUserId>[1]) => async () => {
      const response = await SubscriptionAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getSubscriptionsActivities_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<SubscriptionActivityPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_SubscriptionAdmin.SubscriptionsActivities_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; Recurring charge subscription, it will trigger recurring charge if the USER subscription status is ACTIVE, nextBillingDate is before now and no fail recurring charge within X(default 12) hours.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: recurring charge result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SubscriptionAdmin.Recurring_BySubscriptionId, input]
 * }
 * ```
 */
export const useSubscriptionAdminApi_UpdateRecurring_BySubscriptionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<RecurringChargeResult, AxiosError<ApiError>, SdkSetConfigParam & { subscriptionId: string }>,
    'mutationKey'
  >,
  callback?: (data: RecurringChargeResult) => void
): UseMutationResult<RecurringChargeResult, AxiosError<ApiError>, SdkSetConfigParam & { subscriptionId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { subscriptionId: string }) => {
    const response = await SubscriptionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRecurring_BySubscriptionId(input.subscriptionId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SubscriptionAdmin.Recurring_BySubscriptionId],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; Delete user subscription.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SubscriptionAdmin.Subscription_ByUserId_BySubscriptionId, input]
 * }
 * ```
 */
export const useSubscriptionAdminApi_DeleteSubscription_ByUserId_BySubscriptionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; subscriptionId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; subscriptionId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; subscriptionId: string }) => {
    const response = await SubscriptionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteSubscription_ByUserId_BySubscriptionId(input.userId, input.subscriptionId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SubscriptionAdmin.Subscription_ByUserId_BySubscriptionId],
    mutationFn,
    ...options
  })
}

/**
 * Get user subscription.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: subscription&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SubscriptionAdmin.Subscription_ByUserId_BySubscriptionId, input]
 * }
 * ```
 */
export const useSubscriptionAdminApi_GetSubscription_ByUserId_BySubscriptionId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; subscriptionId: string },
  options?: Omit<UseQueryOptions<SubscriptionInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SubscriptionInfo>) => void
): UseQueryResult<SubscriptionInfo, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useSubscriptionAdminApi_GetSubscription_ByUserId_BySubscriptionId>[1]) => async () => {
      const response = await SubscriptionAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getSubscription_ByUserId_BySubscriptionId(input.userId, input.subscriptionId)
      callback && callback(response)
      return response.data
    }

  return useQuery<SubscriptionInfo, AxiosError<ApiError>>({
    queryKey: [Key_SubscriptionAdmin.Subscription_ByUserId_BySubscriptionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Free subscribe by platform, can used by other justice service to redeem/reward the subscription.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result subscription&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SubscriptionAdmin.SubscriptionPlatformSubscribe_ByUserId, input]
 * }
 * ```
 */
export const useSubscriptionAdminApi_CreateSubscriptionPlatformSubscribe_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<SubscriptionInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: PlatformSubscribeRequest }>,
    'mutationKey'
  >,
  callback?: (data: SubscriptionInfo) => void
): UseMutationResult<SubscriptionInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: PlatformSubscribeRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: PlatformSubscribeRequest }) => {
    const response = await SubscriptionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createSubscriptionPlatformSubscribe_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SubscriptionAdmin.SubscriptionPlatformSubscribe_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Check user subscription subscribable by itemId, ACTIVE USER subscription can&#39;t do subscribe again.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: subscribable info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SubscriptionAdmin.SubscriptionsSubscribableByItemId_ByUserId, input]
 * }
 * ```
 */
export const useSubscriptionAdminApi_GetSubscriptionsSubscribableByItemId_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams: { itemId: string | null } },
  options?: Omit<UseQueryOptions<Subscribable, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<Subscribable>) => void
): UseQueryResult<Subscribable, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useSubscriptionAdminApi_GetSubscriptionsSubscribableByItemId_ByUserId>[1]) => async () => {
      const response = await SubscriptionAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getSubscriptionsSubscribableByItemId_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<Subscribable, AxiosError<ApiError>>({
    queryKey: [Key_SubscriptionAdmin.SubscriptionsSubscribableByItemId_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Grant days to a subscription, if grantDays is positive, it will add free days and push the next billing date by the amount of day.&lt;br&gt;if the grantDays is negative or zero, it only apply to active/cancelled subscription, remove days will decrease current period end, and move the next billing date closer.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated subscription&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SubscriptionAdmin.Grant_ByUserId_BySubscriptionId, input]
 * }
 * ```
 */
export const useSubscriptionAdminApi_UpdateGrant_ByUserId_BySubscriptionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      SubscriptionInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; subscriptionId: string; data: GrantSubscriptionDaysRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: SubscriptionInfo) => void
): UseMutationResult<
  SubscriptionInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; subscriptionId: string; data: GrantSubscriptionDaysRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; subscriptionId: string; data: GrantSubscriptionDaysRequest }) => {
    const response = await SubscriptionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateGrant_ByUserId_BySubscriptionId(input.userId, input.subscriptionId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SubscriptionAdmin.Grant_ByUserId_BySubscriptionId],
    mutationFn,
    ...options
  })
}

/**
 * Cancel a subscription, only ACTIVE subscription can be cancelled. &lt;b&gt;Ensure successfully cancel, recommend at least 1 day before current period ends, otherwise it may be charging or charged.&lt;/b&gt;&lt;br&gt;Set immediate true, the subscription will be terminated immediately, otherwise till the end of current billing cycle.&lt;br&gt;Set force true, will ignore the error if subscription is during recurring charging.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: cancelled subscription&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SubscriptionAdmin.Cancel_ByUserId_BySubscriptionId, input]
 * }
 * ```
 */
export const useSubscriptionAdminApi_UpdateCancel_ByUserId_BySubscriptionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      SubscriptionInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; subscriptionId: string; data: CancelRequest; queryParams?: { force?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: SubscriptionInfo) => void
): UseMutationResult<
  SubscriptionInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; subscriptionId: string; data: CancelRequest; queryParams?: { force?: boolean | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; subscriptionId: string; data: CancelRequest; queryParams?: { force?: boolean | null } }
  ) => {
    const response = await SubscriptionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateCancel_ByUserId_BySubscriptionId(input.userId, input.subscriptionId, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SubscriptionAdmin.Cancel_ByUserId_BySubscriptionId],
    mutationFn,
    ...options
  })
}

/**
 * Get user subscription billing histories.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscription billing history&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SubscriptionAdmin.History_ByUserId_BySubscriptionId, input]
 * }
 * ```
 */
export const useSubscriptionAdminApi_GetHistory_ByUserId_BySubscriptionId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    subscriptionId: string
    queryParams?: { excludeFree?: boolean | null; limit?: number; offset?: number }
  },
  options?: Omit<UseQueryOptions<BillingHistoryPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BillingHistoryPagingSlicedResult>) => void
): UseQueryResult<BillingHistoryPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useSubscriptionAdminApi_GetHistory_ByUserId_BySubscriptionId>[1]) => async () => {
      const response = await SubscriptionAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getHistory_ByUserId_BySubscriptionId(input.userId, input.subscriptionId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<BillingHistoryPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_SubscriptionAdmin.History_ByUserId_BySubscriptionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; This API is used as a web hook for payment notification from justice payment service.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Process result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SubscriptionAdmin.Notification_ByUserId_BySubscriptionId, input]
 * }
 * ```
 */
export const useSubscriptionAdminApi_CreateNotification_ByUserId_BySubscriptionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; subscriptionId: string; data: TradeNotification }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; subscriptionId: string; data: TradeNotification }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; subscriptionId: string; data: TradeNotification }) => {
    const response = await SubscriptionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createNotification_ByUserId_BySubscriptionId(input.userId, input.subscriptionId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SubscriptionAdmin.Notification_ByUserId_BySubscriptionId],
    mutationFn,
    ...options
  })
}
