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
import { BillingHistoryPagingSlicedResult } from '../generated-definitions/BillingHistoryPagingSlicedResult.js'
import { CancelRequest } from '../generated-definitions/CancelRequest.js'
import { GrantSubscriptionDaysRequest } from '../generated-definitions/GrantSubscriptionDaysRequest.js'
import { PlatformSubscribeRequest } from '../generated-definitions/PlatformSubscribeRequest.js'
import { RecurringChargeResult } from '../generated-definitions/RecurringChargeResult.js'
import { Subscribable } from '../generated-definitions/Subscribable.js'
import { SubscriptionActivityPagingSlicedResult } from '../generated-definitions/SubscriptionActivityPagingSlicedResult.js'
import { SubscriptionAdmin$ } from './endpoints/SubscriptionAdmin$.js'
import { SubscriptionInfo } from '../generated-definitions/SubscriptionInfo.js'
import { SubscriptionPagingSlicedResult } from '../generated-definitions/SubscriptionPagingSlicedResult.js'
import { TradeNotification } from '../generated-definitions/TradeNotification.js'

export function SubscriptionAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Query subscriptions.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SUBSCRIPTION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscriptions&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSubscriptions(queryParams?: {
    chargeStatus?: 'CHARGED' | 'CHARGE_FAILED' | 'NEVER' | 'RECURRING_CHARGING' | 'SETUP'
    itemId?: string | null
    limit?: number
    offset?: number
    sku?: string | null
    status?: 'ACTIVE' | 'CANCELLED' | 'EXPIRED' | 'INIT'
    subscribedBy?: 'PLATFORM' | 'USER'
    userId?: string | null
  }): Promise<SubscriptionPagingSlicedResult> {
    const $ = new SubscriptionAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getSubscriptions(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query user subscriptions.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscription&lt;/li&gt;&lt;/ul&gt;
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
    const $ = new SubscriptionAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getSubscriptions_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user subscription activity.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscription activity&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSubscriptionsActivities_ByUserId(
    userId: string,
    queryParams?: { excludeSystem?: boolean | null; limit?: number; offset?: number; subscriptionId?: string | null }
  ): Promise<SubscriptionActivityPagingSlicedResult> {
    const $ = new SubscriptionAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getSubscriptionsActivities_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; Recurring charge subscription, it will trigger recurring charge if the USER subscription status is ACTIVE, nextBillingDate is before now and no fail recurring charge within X(default 12) hours.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SUBSCRIPTION&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: recurring charge result&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateRecurring_BySubscriptionId(subscriptionId: string): Promise<RecurringChargeResult> {
    const $ = new SubscriptionAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateRecurring_BySubscriptionId(subscriptionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; Delete user subscription.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteSubscription_ByUserId_BySubscriptionId(userId: string, subscriptionId: string): Promise<unknown> {
    const $ = new SubscriptionAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteSubscription_ByUserId_BySubscriptionId(userId, subscriptionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user subscription.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: subscription&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSubscription_ByUserId_BySubscriptionId(userId: string, subscriptionId: string): Promise<SubscriptionInfo> {
    const $ = new SubscriptionAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getSubscription_ByUserId_BySubscriptionId(userId, subscriptionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Free subscribe by platform, can used by other justice service to redeem/reward the subscription.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result subscription&lt;/li&gt;&lt;/ul&gt;
   */
  async function createSubscriptionPlatformSubscribe_ByUserId(userId: string, data: PlatformSubscribeRequest): Promise<SubscriptionInfo> {
    const $ = new SubscriptionAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createSubscriptionPlatformSubscribe_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Check user subscription subscribable by itemId, ACTIVE USER subscription can&#39;t do subscribe again.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: subscribable info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSubscriptionsSubscribableByItemId_ByUserId(
    userId: string,
    queryParams: { itemId: string | null }
  ): Promise<Subscribable> {
    const $ = new SubscriptionAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getSubscriptionsSubscribableByItemId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Grant days to a subscription, if grantDays is positive, it will add free days and push the next billing date by the amount of day.&lt;br&gt;if the grantDays is negative or zero, it only apply to active/cancelled subscription, remove days will decrease current period end, and move the next billing date closer.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated subscription&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateGrant_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string,
    data: GrantSubscriptionDaysRequest
  ): Promise<SubscriptionInfo> {
    const $ = new SubscriptionAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateGrant_ByUserId_BySubscriptionId(userId, subscriptionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Cancel a subscription, only ACTIVE subscription can be cancelled. &lt;b&gt;Ensure successfully cancel, recommend at least 1 day before current period ends, otherwise it may be charging or charged.&lt;/b&gt;&lt;br&gt;Set immediate true, the subscription will be terminated immediately, otherwise till the end of current billing cycle.&lt;br&gt;Set force true, will ignore the error if subscription is during recurring charging.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: cancelled subscription&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCancel_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string,
    data: CancelRequest,
    queryParams?: { force?: boolean | null }
  ): Promise<SubscriptionInfo> {
    const $ = new SubscriptionAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateCancel_ByUserId_BySubscriptionId(userId, subscriptionId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user subscription billing histories.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscription billing history&lt;/li&gt;&lt;/ul&gt;
   */
  async function getHistory_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string,
    queryParams?: { excludeFree?: boolean | null; limit?: number; offset?: number }
  ): Promise<BillingHistoryPagingSlicedResult> {
    const $ = new SubscriptionAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getHistory_ByUserId_BySubscriptionId(userId, subscriptionId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; This API is used as a web hook for payment notification from justice payment service.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Process result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createNotification_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string,
    data: TradeNotification
  ): Promise<unknown> {
    const $ = new SubscriptionAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createNotification_ByUserId_BySubscriptionId(userId, subscriptionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getSubscriptions,
    getSubscriptions_ByUserId,
    getSubscriptionsActivities_ByUserId,
    updateRecurring_BySubscriptionId,
    deleteSubscription_ByUserId_BySubscriptionId,
    getSubscription_ByUserId_BySubscriptionId,
    createSubscriptionPlatformSubscribe_ByUserId,
    getSubscriptionsSubscribableByItemId_ByUserId,
    updateGrant_ByUserId_BySubscriptionId,
    updateCancel_ByUserId_BySubscriptionId,
    getHistory_ByUserId_BySubscriptionId,
    createNotification_ByUserId_BySubscriptionId
  }
}
