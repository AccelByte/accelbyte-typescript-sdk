/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { BillingHistoryPagingSlicedResult } from './definitions/BillingHistoryPagingSlicedResult.js'
import { CancelRequest } from './definitions/CancelRequest.js'
import { Subscribable } from './definitions/Subscribable.js'
import { SubscribeRequest } from './definitions/SubscribeRequest.js'
import { Subscription$ } from './endpoints/Subscription$.js'
import { SubscriptionInfo } from './definitions/SubscriptionInfo.js'
import { SubscriptionPagingSlicedResult } from './definitions/SubscriptionPagingSlicedResult.js'

export function SubscriptionApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Query user subscriptions.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscription&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSubscriptions_ByUserId(
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
  ): Promise<SubscriptionPagingSlicedResult> {
    const $ = new Subscription$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSubscriptions_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Subscribe a subscription. Support both real and virtual payment. Need go through payment flow using the paymentOrderNo if paymentFlowRequired true.&lt;br&gt;&lt;b&gt;ACTIVE USER subscription can&#39;t do subscribe again.&lt;/b&gt;&lt;br&gt;&lt;b&gt;The next billing date will be X(default 4) hours before the current period ends if correctly subscribed.&lt;/b&gt;&lt;br&gt;User with permission SANDBOX will create sandbox subscription that not real paid.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission(user with this permission will create sandbox subscription)&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;It will be forbidden while the user is banned: ORDER_INITIATE or ORDER_AND_PAYMENT&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created subscription&lt;/li&gt;&lt;/ul&gt;
   */
  async function createSubscription_ByUserId(userId: string, data: SubscribeRequest): Promise<unknown> {
    const $ = new Subscription$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createSubscription_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user subscription.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: subscription&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSubscription_ByUserId_BySubscriptionId(userId: string, subscriptionId: string): Promise<SubscriptionInfo> {
    const $ = new Subscription$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSubscription_ByUserId_BySubscriptionId(userId, subscriptionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Check user subscription subscribable by itemId, ACTIVE USER subscription can&#39;t do subscribe again.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: subscribable info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSubscriptionsSubscribableByItemId_ByUserId(
    userId: string,
    queryParams: { itemId: string | null }
  ): Promise<Subscribable> {
    const $ = new Subscription$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSubscriptionsSubscribableByItemId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Cancel a subscription, only ACTIVE subscription can be cancelled. &lt;b&gt;Ensure successfully cancel, recommend at least 1 day before current period ends, otherwise it may be charging or charged.&lt;/b&gt;&lt;br&gt;Set immediate true, the subscription will be terminated immediately, otherwise till the end of current billing cycle.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: cancelled subscription&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCancel_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string,
    data: CancelRequest
  ): Promise<SubscriptionInfo> {
    const $ = new Subscription$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateCancel_ByUserId_BySubscriptionId(userId, subscriptionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user subscription billing histories.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscription history&lt;/li&gt;&lt;/ul&gt;
   */
  async function getHistory_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string,
    queryParams?: { excludeFree?: boolean | null; limit?: number; offset?: number }
  ): Promise<BillingHistoryPagingSlicedResult> {
    const $ = new Subscription$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getHistory_ByUserId_BySubscriptionId(userId, subscriptionId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Request to change a subscription billing account, this will guide user to payment station. The actual change will happen at the 0 payment notification successfully handled.&lt;br&gt;Only ACTIVE USER subscription with real currency billing account can be changed.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated subscription&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateBillingAccount_ByUserId_BySubscriptionId(userId: string, subscriptionId: string): Promise<SubscriptionInfo> {
    const $ = new Subscription$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateBillingAccount_ByUserId_BySubscriptionId(userId, subscriptionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getSubscriptions_ByUserId,
    createSubscription_ByUserId,
    getSubscription_ByUserId_BySubscriptionId,
    getSubscriptionsSubscribableByItemId_ByUserId,
    updateCancel_ByUserId_BySubscriptionId,
    getHistory_ByUserId_BySubscriptionId,
    updateBillingAccount_ByUserId_BySubscriptionId
  }
}
