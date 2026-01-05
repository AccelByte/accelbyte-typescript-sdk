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
import { NotificationSubscriptionAdminApi } from '../NotificationSubscriptionAdminApi.js'

import { BulkSubscribeRequest } from '../../generated-definitions/BulkSubscribeRequest.js'
import { GetNotificationSubscriberListResponse } from '../../generated-definitions/GetNotificationSubscriberListResponse.js'
import { GetNotificationSubscriberStatusResponse } from '../../generated-definitions/GetNotificationSubscriberStatusResponse.js'
import { SelfSubscribeNotificationRequest } from '../../generated-definitions/SelfSubscribeNotificationRequest.js'
import { SubscribeNotificationRequest } from '../../generated-definitions/SubscribeNotificationRequest.js'
import { SubscribeNotificationResponse } from '../../generated-definitions/SubscribeNotificationResponse.js'

export enum Key_NotificationSubscriptionAdmin {
  Subscriptions_ByApp_v2 = 'Csm.NotificationSubscriptionAdmin.Subscriptions_ByApp_v2',
  Subscription_ByApp_v2 = 'Csm.NotificationSubscriptionAdmin.Subscription_ByApp_v2',
  SubscriptionMe_ByApp_v2 = 'Csm.NotificationSubscriptionAdmin.SubscriptionMe_ByApp_v2',
  SubscriptionsMe_ByApp_v2 = 'Csm.NotificationSubscriptionAdmin.SubscriptionsMe_ByApp_v2',
  SubscriptionUser_ByApp_ByUserId_v2 = 'Csm.NotificationSubscriptionAdmin.SubscriptionUser_ByApp_ByUserId_v2',
  Subscription_ByApp_BySubscriptionId_v2 = 'Csm.NotificationSubscriptionAdmin.Subscription_ByApp_BySubscriptionId_v2'
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SUBSCRIPTION [READ]&lt;/code&gt; Request param: - notificationType : type of the subscribed app notification - values: - all - app-down - critical-vulnerability Get a list of the app notification subscriber
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_NotificationSubscriptionAdmin.Subscriptions_ByApp_v2, input]
 * }
 * ```
 */
export const useNotificationSubscriptionAdminApi_GetSubscriptions_ByApp_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { app: string; queryParams: { notificationType: string | null } },
  options?: Omit<UseQueryOptions<GetNotificationSubscriberListResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetNotificationSubscriberListResponse>) => void
): UseQueryResult<GetNotificationSubscriberListResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useNotificationSubscriptionAdminApi_GetSubscriptions_ByApp_v2>[1]) => async () => {
      const response = await NotificationSubscriptionAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getSubscriptions_ByApp_v2(input.app, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetNotificationSubscriberListResponse, AxiosError<ApiError>>({
    queryKey: [Key_NotificationSubscriptionAdmin.Subscriptions_ByApp_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SUBSCRIPTION [CREATE]&lt;/code&gt; Subscribe the user(s) an app notification. Request body: - notificationType : type of the app notification to be subscribed - Required. - values: -&#34;all&#34; - &#34;app-down&#34; - &#34;critical-vulnerability&#34; - subscribers : user(s) to subscribe the app notification - Required.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_NotificationSubscriptionAdmin.Subscription_ByApp_v2, input]
 * }
 * ```
 */
export const useNotificationSubscriptionAdminApi_CreateSubscription_ByAppMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      SubscribeNotificationResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { app: string; data: SubscribeNotificationRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: SubscribeNotificationResponse) => void
): UseMutationResult<
  SubscribeNotificationResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { app: string; data: SubscribeNotificationRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; data: SubscribeNotificationRequest }) => {
    const response = await NotificationSubscriptionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createSubscription_ByApp_v2(input.app, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_NotificationSubscriptionAdmin.Subscription_ByApp_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SUBSCRIPTION [UPDATE]&lt;/code&gt; Update the subscription the user(s) is an app notification. Request body: - notificationType : type of the app notification to be subscribed - Required. - values: - &#34;all&#34; - &#34;app-down&#34; - &#34;critical-vulnerability&#34; - subscribers : user(s) notification subscription to be updated - Required.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_NotificationSubscriptionAdmin.Subscription_ByApp_v2, input]
 * }
 * ```
 */
export const useNotificationSubscriptionAdminApi_UpdateSubscription_ByAppMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GetNotificationSubscriberListResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { app: string; data: BulkSubscribeRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: GetNotificationSubscriberListResponse) => void
): UseMutationResult<
  GetNotificationSubscriberListResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { app: string; data: BulkSubscribeRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; data: BulkSubscribeRequest }) => {
    const response = await NotificationSubscriptionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateSubscription_ByApp_v2(input.app, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_NotificationSubscriptionAdmin.Subscription_ByApp_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SELF:SUBSCRIPTION [DELETE]&lt;/code&gt; Unsubscribe to app down notification
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_NotificationSubscriptionAdmin.SubscriptionMe_ByApp_v2, input]
 * }
 * ```
 */
export const useNotificationSubscriptionAdminApi_DeleteSubscriptionMe_ByAppMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string }) => {
    const response = await NotificationSubscriptionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteSubscriptionMe_ByApp_v2(input.app)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_NotificationSubscriptionAdmin.SubscriptionMe_ByApp_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SELF:SUBSCRIPTION [READ]&lt;/code&gt; Get Subscription status of a user
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_NotificationSubscriptionAdmin.SubscriptionsMe_ByApp_v2, input]
 * }
 * ```
 */
export const useNotificationSubscriptionAdminApi_GetSubscriptionsMe_ByApp_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { app: string },
  options?: Omit<UseQueryOptions<GetNotificationSubscriberStatusResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetNotificationSubscriberStatusResponse>) => void
): UseQueryResult<GetNotificationSubscriberStatusResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useNotificationSubscriptionAdminApi_GetSubscriptionsMe_ByApp_v2>[1]) => async () => {
      const response = await NotificationSubscriptionAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getSubscriptionsMe_ByApp_v2(input.app)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetNotificationSubscriberStatusResponse, AxiosError<ApiError>>({
    queryKey: [Key_NotificationSubscriptionAdmin.SubscriptionsMe_ByApp_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SELF:SUBSCRIPTION [CREATE]&lt;/code&gt; Subscribe to app down notification Request body: - notificationType : type of the app notification to be subscribed - Required. - values: - &#34;all&#34; - &#34;app-down&#34; - &#34;critical-vulnerability&#34;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_NotificationSubscriptionAdmin.SubscriptionMe_ByApp_v2, input]
 * }
 * ```
 */
export const useNotificationSubscriptionAdminApi_CreateSubscriptionMe_ByAppMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: SelfSubscribeNotificationRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: SelfSubscribeNotificationRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; data: SelfSubscribeNotificationRequest }) => {
    const response = await NotificationSubscriptionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createSubscriptionMe_ByApp_v2(input.app, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_NotificationSubscriptionAdmin.SubscriptionMe_ByApp_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SUBSCRIPTION [DELETE]&lt;/code&gt; Remove a user from the notification subscription by user ID.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_NotificationSubscriptionAdmin.SubscriptionUser_ByApp_ByUserId_v2, input]
 * }
 * ```
 */
export const useNotificationSubscriptionAdminApi_DeleteSubscriptionUser_ByApp_ByUserIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; userId: string }) => {
    const response = await NotificationSubscriptionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteSubscriptionUser_ByApp_ByUserId_v2(input.app, input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_NotificationSubscriptionAdmin.SubscriptionUser_ByApp_ByUserId_v2],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SUBSCRIPTION [DELETE]&lt;/code&gt; Remove a user from the notification subscription.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_NotificationSubscriptionAdmin.Subscription_ByApp_BySubscriptionId_v2, input]
 * }
 * ```
 */
export const useNotificationSubscriptionAdminApi_DeleteSubscription_ByApp_BySubscriptionIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; subscriptionId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; subscriptionId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; subscriptionId: string }) => {
    const response = await NotificationSubscriptionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteSubscription_ByApp_BySubscriptionId_v2(input.app, input.subscriptionId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_NotificationSubscriptionAdmin.Subscription_ByApp_BySubscriptionId_v2],
    mutationFn,
    ...options
  })
}
