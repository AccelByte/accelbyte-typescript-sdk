/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { BulkSubscribeRequest } from '../../generated-definitions/BulkSubscribeRequest.js'
import { GetNotificationSubscriberListResponse } from '../../generated-definitions/GetNotificationSubscriberListResponse.js'
import { GetNotificationSubscriberStatusResponse } from '../../generated-definitions/GetNotificationSubscriberStatusResponse.js'
import { SelfSubscribeNotificationRequest } from '../../generated-definitions/SelfSubscribeNotificationRequest.js'
import { SubscribeNotificationRequest } from '../../generated-definitions/SubscribeNotificationRequest.js'
import { SubscribeNotificationResponse } from '../../generated-definitions/SubscribeNotificationResponse.js'

export class NotificationSubscriptionAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SUBSCRIPTION [READ]&lt;/code&gt; Request param: - notificationType : type of the subscribed app notification - values: - all - app-down - critical-vulnerability Get a list of the app notification subscriber
   */
  getSubscriptions_ByApp_v2(
    app: string,
    queryParams: { notificationType: string | null }
  ): Promise<Response<GetNotificationSubscriberListResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/subscriptions'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetNotificationSubscriberListResponse,
      'GetNotificationSubscriberListResponse'
    )
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SUBSCRIPTION [CREATE]&lt;/code&gt; Subscribe the user(s) an app notification. Request body: - notificationType : type of the app notification to be subscribed - Required. - values: -&#34;all&#34; - &#34;app-down&#34; - &#34;critical-vulnerability&#34; - subscribers : user(s) to subscribe the app notification - Required.
   */
  createSubscription_ByApp_v2(app: string, data: SubscribeNotificationRequest): Promise<Response<SubscribeNotificationResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/subscriptions'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SubscribeNotificationResponse,
      'SubscribeNotificationResponse'
    )
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SUBSCRIPTION [UPDATE]&lt;/code&gt; Update the subscription the user(s) is an app notification. Request body: - notificationType : type of the app notification to be subscribed - Required. - values: - &#34;all&#34; - &#34;app-down&#34; - &#34;critical-vulnerability&#34; - subscribers : user(s) notification subscription to be updated - Required.
   */
  updateSubscription_ByApp_v2(app: string, data: BulkSubscribeRequest): Promise<Response<GetNotificationSubscriberListResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/subscriptions'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetNotificationSubscriberListResponse,
      'GetNotificationSubscriberListResponse'
    )
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SELF:SUBSCRIPTION [DELETE]&lt;/code&gt; Unsubscribe to app down notification
   */
  deleteSubscriptionMe_ByApp_v2(app: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/subscriptions/me'
      .replace('{namespace}', this.namespace)
      .replace('{app}', app)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SELF:SUBSCRIPTION [READ]&lt;/code&gt; Get Subscription status of a user
   */
  getSubscriptionsMe_ByApp_v2(app: string): Promise<Response<GetNotificationSubscriberStatusResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/subscriptions/me'
      .replace('{namespace}', this.namespace)
      .replace('{app}', app)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetNotificationSubscriberStatusResponse,
      'GetNotificationSubscriberStatusResponse'
    )
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SELF:SUBSCRIPTION [CREATE]&lt;/code&gt; Subscribe to app down notification Request body: - notificationType : type of the app notification to be subscribed - Required. - values: - &#34;all&#34; - &#34;app-down&#34; - &#34;critical-vulnerability&#34;
   */
  createSubscriptionMe_ByApp_v2(app: string, data: SelfSubscribeNotificationRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/subscriptions/me'
      .replace('{namespace}', this.namespace)
      .replace('{app}', app)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SUBSCRIPTION [DELETE]&lt;/code&gt; Remove a user from the notification subscription by user ID.
   */
  deleteSubscriptionUser_ByApp_ByUserId_v2(app: string, userId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/subscriptions/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{app}', app)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP:ALERT:SUBSCRIPTION [DELETE]&lt;/code&gt; Remove a user from the notification subscription.
   */
  deleteSubscription_ByApp_BySubscriptionId_v2(app: string, subscriptionId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/subscriptions/{subscriptionId}'
      .replace('{namespace}', this.namespace)
      .replace('{app}', app)
      .replace('{subscriptionId}', subscriptionId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
