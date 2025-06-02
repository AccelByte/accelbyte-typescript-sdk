/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { BulkSubscribeRequest } from '../generated-definitions/BulkSubscribeRequest.js'
import { GetNotificationSubscriberListResponse } from '../generated-definitions/GetNotificationSubscriberListResponse.js'
import { GetNotificationSubscriberStatusResponse } from '../generated-definitions/GetNotificationSubscriberStatusResponse.js'
import { SelfSubscribeNotificationRequest } from '../generated-definitions/SelfSubscribeNotificationRequest.js'
import { SubscribeNotificationRequest } from '../generated-definitions/SubscribeNotificationRequest.js'
import { SubscribeNotificationResponse } from '../generated-definitions/SubscribeNotificationResponse.js'
import { NotificationSubscriptionAdmin$ } from './endpoints/NotificationSubscriptionAdmin$.js'

export function NotificationSubscriptionAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getSubscriptions_ByApp_v2(
    app: string,
    queryParams: { notificationType: string | null }
  ): Promise<AxiosResponse<GetNotificationSubscriberListResponse>> {
    const $ = new NotificationSubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSubscriptions_ByApp_v2(app, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createSubscription_ByApp_v2(
    app: string,
    data: SubscribeNotificationRequest
  ): Promise<AxiosResponse<SubscribeNotificationResponse>> {
    const $ = new NotificationSubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSubscription_ByApp_v2(app, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateSubscription_ByApp_v2(
    app: string,
    data: BulkSubscribeRequest
  ): Promise<AxiosResponse<GetNotificationSubscriberListResponse>> {
    const $ = new NotificationSubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSubscription_ByApp_v2(app, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteSubscriptionMe_ByApp_v2(app: string): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationSubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteSubscriptionMe_ByApp_v2(app)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSubscriptionsMe_ByApp_v2(app: string): Promise<AxiosResponse<GetNotificationSubscriberStatusResponse>> {
    const $ = new NotificationSubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSubscriptionsMe_ByApp_v2(app)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createSubscriptionMe_ByApp_v2(app: string, data: SelfSubscribeNotificationRequest): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationSubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSubscriptionMe_ByApp_v2(app, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteSubscriptionUser_ByApp_ByUserId_v2(app: string, userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationSubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteSubscriptionUser_ByApp_ByUserId_v2(app, userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteSubscription_ByApp_BySubscriptionId_v2(app: string, subscriptionId: string): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationSubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteSubscription_ByApp_BySubscriptionId_v2(app, subscriptionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SUBSCRIPTION [READ]&lt;/code&gt; Request param: - notificationType : type of the subscribed app notification - values: - all - app-down - critical-vulnerability Get a list of the app notification subscriber
     */
    getSubscriptions_ByApp_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SUBSCRIPTION [CREATE]&lt;/code&gt; Subscribe the user(s) an app notification. Request body: - notificationType : type of the app notification to be subscribed - Required. - values: -&#34;all&#34; - &#34;app-down&#34; - &#34;critical-vulnerability&#34; - subscribers : user(s) to subscribe the app notification - Required.
     */
    createSubscription_ByApp_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SUBSCRIPTION [UPDATE]&lt;/code&gt; Update the subscription the user(s) is an app notification. Request body: - notificationType : type of the app notification to be subscribed - Required. - values: - &#34;all&#34; - &#34;app-down&#34; - &#34;critical-vulnerability&#34; - subscribers : user(s) notification subscription to be updated - Required.
     */
    updateSubscription_ByApp_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SELF:SUBSCRIPTION [DELETE]&lt;/code&gt; Unsubscribe to app down notification
     */
    deleteSubscriptionMe_ByApp_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SELF:SUBSCRIPTION [READ]&lt;/code&gt; Get Subscription status of a user
     */
    getSubscriptionsMe_ByApp_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SELF:SUBSCRIPTION [CREATE]&lt;/code&gt; Subscribe to app down notification Request body: - notificationType : type of the app notification to be subscribed - Required. - values: - &#34;all&#34; - &#34;app-down&#34; - &#34;critical-vulnerability&#34;
     */
    createSubscriptionMe_ByApp_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SUBSCRIPTION [DELETE]&lt;/code&gt; Remove a user from the notification subscription by user ID.
     */
    deleteSubscriptionUser_ByApp_ByUserId_v2,
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SUBSCRIPTION [DELETE]&lt;/code&gt; Remove a user from the notification subscription.
     */
    deleteSubscription_ByApp_BySubscriptionId_v2
  }
}
