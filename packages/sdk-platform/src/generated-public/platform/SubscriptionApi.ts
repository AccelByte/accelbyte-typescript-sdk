/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { BillingHistoryPagingSlicedResult } from './definitions/BillingHistoryPagingSlicedResult'
import { CancelRequest } from './definitions/CancelRequest'
import { Subscribable } from './definitions/Subscribable'
import { SubscribeRequest } from './definitions/SubscribeRequest'
import { Subscription$ } from './endpoints/Subscription$'
import { SubscriptionInfo } from './definitions/SubscriptionInfo'
import { SubscriptionPagingSlicedResult } from './definitions/SubscriptionPagingSlicedResult'

export function SubscriptionApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Query user subscriptions.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=2 (READ)</li><li><i>Returns</i>: paginated subscription</li></ul>
   */
  async function getSubscriptions_ByUserId(
    userId: string,
    queryParams?: {
      itemId?: string | null
      sku?: string | null
      status?: 'INIT' | 'ACTIVE' | 'CANCELLED' | 'EXPIRED'
      chargeStatus?: 'NEVER' | 'SETUP' | 'RECURRING_CHARGING' | 'CHARGED' | 'CHARGE_FAILED'
      subscribedBy?: 'USER' | 'PLATFORM'
      offset?: number
      limit?: number
    }
  ): Promise<SubscriptionPagingSlicedResult> {
    const $ = new Subscription$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSubscriptions_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Subscribe a subscription. Support both real and virtual payment. Need go through payment flow using the paymentOrderNo if paymentFlowRequired true.<br><b>ACTIVE USER subscription can't do subscribe again.</b><br><b>The next billing date will be X(default 4) hours before the current period ends if correctly subscribed.</b><br>User with permission SANDBOX will create sandbox subscription that not real paid.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=1 (CREATE)</li><li><i>Optional permission(user with this permission will create sandbox subscription)</i>: resource="SANDBOX", action=1 (CREATE)</li><li>It will be forbidden while the user is banned: ORDER_INITIATE or ORDER_AND_PAYMENT</li><li><i>Returns</i>: created subscription</li></ul>
   */
  async function createSubscription_ByUserId(userId: string, data: SubscribeRequest): Promise<unknown> {
    const $ = new Subscription$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createSubscription_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user subscription.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=2 (READ)</li><li><i>Returns</i>: subscription</li></ul>
   */
  async function getSubscription_ByUserId_BySubscriptionId(userId: string, subscriptionId: string): Promise<SubscriptionInfo> {
    const $ = new Subscription$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSubscription_ByUserId_BySubscriptionId(userId, subscriptionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Check user subscription subscribable by itemId, ACTIVE USER subscription can't do subscribe again.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=2 (READ)</li><li><i>Returns</i>: subscribable info</li></ul>
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
   * Cancel a subscription, only ACTIVE subscription can be cancelled. <b>Ensure successfully cancel, recommend at least 1 day before current period ends, otherwise it may be charging or charged.</b><br>Set immediate true, the subscription will be terminated immediately, otherwise till the end of current billing cycle.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=4 (UPDATE)</li><li><i>Returns</i>: cancelled subscription</li></ul>
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
   * Get user subscription billing histories.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=2 (READ)</li><li><i>Returns</i>: paginated subscription history</li></ul>
   */
  async function getHistory_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string,
    queryParams?: { excludeFree?: boolean | null; offset?: number; limit?: number }
  ): Promise<BillingHistoryPagingSlicedResult> {
    const $ = new Subscription$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getHistory_ByUserId_BySubscriptionId(userId, subscriptionId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Request to change a subscription billing account, this will guide user to payment station. The actual change will happen at the 0 payment notification successfully handled.<br>Only ACTIVE USER subscription with real currency billing account can be changed.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=4 (UPDATE)</li><li><i>Returns</i>: updated subscription</li></ul>
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
