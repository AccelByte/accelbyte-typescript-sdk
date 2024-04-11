/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
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

export class SubscriptionAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * Query subscriptions.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SUBSCRIPTION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscriptions&lt;/li&gt;&lt;/ul&gt;
   */
  getSubscriptions(queryParams?: {
    chargeStatus?: 'CHARGED' | 'CHARGE_FAILED' | 'NEVER' | 'RECURRING_CHARGING' | 'SETUP'
    itemId?: string | null
    limit?: number
    offset?: number
    sku?: string | null
    status?: 'ACTIVE' | 'CANCELLED' | 'EXPIRED' | 'INIT'
    subscribedBy?: 'PLATFORM' | 'USER'
    userId?: string | null
  }): Promise<IResponse<SubscriptionPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/subscriptions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, SubscriptionPagingSlicedResult, 'SubscriptionPagingSlicedResult')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Query user subscriptions.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscription&lt;/li&gt;&lt;/ul&gt;
   */
  getSubscriptions_ByUserId(
    userId: string,
    queryParams?: {
      chargeStatus?: 'CHARGED' | 'CHARGE_FAILED' | 'NEVER' | 'RECURRING_CHARGING' | 'SETUP'
      itemId?: string | null
      limit?: number
      offset?: number
      sku?: string | null
      status?: 'ACTIVE' | 'CANCELLED' | 'EXPIRED' | 'INIT'
      subscribedBy?: 'PLATFORM' | 'USER'
    }
  ): Promise<IResponse<SubscriptionPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/subscriptions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, SubscriptionPagingSlicedResult, 'SubscriptionPagingSlicedResult')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get user subscription activity.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscription activity&lt;/li&gt;&lt;/ul&gt;
   */
  getSubscriptionsActivities_ByUserId(
    userId: string,
    queryParams?: { excludeSystem?: boolean | null; limit?: number; offset?: number; subscriptionId?: string | null }
  ): Promise<IResponse<SubscriptionActivityPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/subscriptions/activities'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, SubscriptionActivityPagingSlicedResult, 'SubscriptionActivityPagingSlicedResult')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; Recurring charge subscription, it will trigger recurring charge if the USER subscription status is ACTIVE, nextBillingDate is before now and no fail recurring charge within X(default 12) hours.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SUBSCRIPTION&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: recurring charge result&lt;/li&gt;&lt;/ul&gt;
   */
  updateRecurring_BySubscriptionId(subscriptionId: string): Promise<IResponse<RecurringChargeResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/subscriptions/{subscriptionId}/recurring'
      .replace('{namespace}', this.namespace)
      .replace('{subscriptionId}', subscriptionId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, RecurringChargeResult, 'RecurringChargeResult')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; Delete user subscription.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteSubscription_ByUserId_BySubscriptionId(userId: string, subscriptionId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/subscriptions/{subscriptionId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{subscriptionId}', subscriptionId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get user subscription.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: subscription&lt;/li&gt;&lt;/ul&gt;
   */
  getSubscription_ByUserId_BySubscriptionId(userId: string, subscriptionId: string): Promise<IResponse<SubscriptionInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/subscriptions/{subscriptionId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{subscriptionId}', subscriptionId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, SubscriptionInfo, 'SubscriptionInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Free subscribe by platform, can used by other justice service to redeem/reward the subscription.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result subscription&lt;/li&gt;&lt;/ul&gt;
   */
  createSubscriptionPlatformSubscribe_ByUserId(userId: string, data: PlatformSubscribeRequest): Promise<IResponse<SubscriptionInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/subscriptions/platformSubscribe'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, SubscriptionInfo, 'SubscriptionInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Check user subscription subscribable by itemId, ACTIVE USER subscription can&#39;t do subscribe again.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: subscribable info&lt;/li&gt;&lt;/ul&gt;
   */
  getSubscriptionsSubscribableByItemId_ByUserId(userId: string, queryParams: { itemId: string | null }): Promise<IResponse<Subscribable>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/subscriptions/subscribable/byItemId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, Subscribable, 'Subscribable')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Grant days to a subscription, if grantDays is positive, it will add free days and push the next billing date by the amount of day.&lt;br&gt;if the grantDays is negative or zero, it only apply to active/cancelled subscription, remove days will decrease current period end, and move the next billing date closer.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated subscription&lt;/li&gt;&lt;/ul&gt;
   */
  updateGrant_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string,
    data: GrantSubscriptionDaysRequest
  ): Promise<IResponse<SubscriptionInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/subscriptions/{subscriptionId}/grant'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{subscriptionId}', subscriptionId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, SubscriptionInfo, 'SubscriptionInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Cancel a subscription, only ACTIVE subscription can be cancelled. &lt;b&gt;Ensure successfully cancel, recommend at least 1 day before current period ends, otherwise it may be charging or charged.&lt;/b&gt;&lt;br&gt;Set immediate true, the subscription will be terminated immediately, otherwise till the end of current billing cycle.&lt;br&gt;Set force true, will ignore the error if subscription is during recurring charging.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: cancelled subscription&lt;/li&gt;&lt;/ul&gt;
   */
  updateCancel_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string,
    data: CancelRequest,
    queryParams?: { force?: boolean | null }
  ): Promise<IResponse<SubscriptionInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/subscriptions/{subscriptionId}/cancel'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{subscriptionId}', subscriptionId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, SubscriptionInfo, 'SubscriptionInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get user subscription billing histories.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscription billing history&lt;/li&gt;&lt;/ul&gt;
   */
  getHistory_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string,
    queryParams?: { excludeFree?: boolean | null; limit?: number; offset?: number }
  ): Promise<IResponse<BillingHistoryPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/subscriptions/{subscriptionId}/history'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{subscriptionId}', subscriptionId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BillingHistoryPagingSlicedResult, 'BillingHistoryPagingSlicedResult')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; This API is used as a web hook for payment notification from justice payment service.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Process result&lt;/li&gt;&lt;/ul&gt;
   */
  createNotification_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string,
    data: TradeNotification
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/subscriptions/{subscriptionId}/notifications'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{subscriptionId}', subscriptionId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
