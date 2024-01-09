/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { BillingHistoryPagingSlicedResult } from '../definitions/BillingHistoryPagingSlicedResult.js'
import { CancelRequest } from '../definitions/CancelRequest.js'
import { Subscribable } from '../definitions/Subscribable.js'
import { SubscribeRequest } from '../definitions/SubscribeRequest.js'
import { SubscriptionInfo } from '../definitions/SubscriptionInfo.js'
import { SubscriptionPagingSlicedResult } from '../definitions/SubscriptionPagingSlicedResult.js'

export class Subscription$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Query user subscriptions.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscription&lt;/li&gt;&lt;/ul&gt;
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
  ): Promise<IResponseWithSync<SubscriptionPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/subscriptions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, SubscriptionPagingSlicedResult, 'SubscriptionPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Subscribe a subscription. Support both real and virtual payment. Need go through payment flow using the paymentOrderNo if paymentFlowRequired true.&lt;br&gt;&lt;b&gt;ACTIVE USER subscription can&#39;t do subscribe again.&lt;/b&gt;&lt;br&gt;&lt;b&gt;The next billing date will be X(default 4) hours before the current period ends if correctly subscribed.&lt;/b&gt;&lt;br&gt;User with permission SANDBOX will create sandbox subscription that not real paid.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission(user with this permission will create sandbox subscription)&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;It will be forbidden while the user is banned: ORDER_INITIATE or ORDER_AND_PAYMENT&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created subscription&lt;/li&gt;&lt;/ul&gt;
   */
  createSubscription_ByUserId(userId: string, data: SubscribeRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/subscriptions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get user subscription.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: subscription&lt;/li&gt;&lt;/ul&gt;
   */
  getSubscription_ByUserId_BySubscriptionId(userId: string, subscriptionId: string): Promise<IResponseWithSync<SubscriptionInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/subscriptions/{subscriptionId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{subscriptionId}', subscriptionId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, SubscriptionInfo, 'SubscriptionInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Check user subscription subscribable by itemId, ACTIVE USER subscription can&#39;t do subscribe again.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: subscribable info&lt;/li&gt;&lt;/ul&gt;
   */
  getSubscriptionsSubscribableByItemId_ByUserId(
    userId: string,
    queryParams: { itemId: string | null }
  ): Promise<IResponseWithSync<Subscribable>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/subscriptions/subscribable/byItemId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, Subscribable, 'Subscribable')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Cancel a subscription, only ACTIVE subscription can be cancelled. &lt;b&gt;Ensure successfully cancel, recommend at least 1 day before current period ends, otherwise it may be charging or charged.&lt;/b&gt;&lt;br&gt;Set immediate true, the subscription will be terminated immediately, otherwise till the end of current billing cycle.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: cancelled subscription&lt;/li&gt;&lt;/ul&gt;
   */
  updateCancel_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string,
    data: CancelRequest
  ): Promise<IResponse<SubscriptionInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/subscriptions/{subscriptionId}/cancel'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{subscriptionId}', subscriptionId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, SubscriptionInfo, 'SubscriptionInfo')
  }

  /**
   * Get user subscription billing histories.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscription history&lt;/li&gt;&lt;/ul&gt;
   */
  getHistory_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string,
    queryParams?: { excludeFree?: boolean | null; limit?: number; offset?: number }
  ): Promise<IResponseWithSync<BillingHistoryPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/subscriptions/{subscriptionId}/history'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{subscriptionId}', subscriptionId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, BillingHistoryPagingSlicedResult, 'BillingHistoryPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Request to change a subscription billing account, this will guide user to payment station. The actual change will happen at the 0 payment notification successfully handled.&lt;br&gt;Only ACTIVE USER subscription with real currency billing account can be changed.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated subscription&lt;/li&gt;&lt;/ul&gt;
   */
  updateBillingAccount_ByUserId_BySubscriptionId(userId: string, subscriptionId: string): Promise<IResponse<SubscriptionInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/subscriptions/{subscriptionId}/billingAccount'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{subscriptionId}', subscriptionId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.responseType(() => resultPromise, SubscriptionInfo, 'SubscriptionInfo')
  }
}
