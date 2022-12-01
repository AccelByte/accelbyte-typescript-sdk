/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { CancelRequest } from '@accelbyte/sdk/generated-public/platform/definitions/CancelRequest'
import { SubscribeRequest } from '@accelbyte/sdk/generated-public/platform/definitions/SubscribeRequest'
import { Subscription$ } from '@accelbyte/sdk/generated-public/platform/Subscription$'
import { Network } from '@accelbyte/sdk/utils/Network'

export class SubscriptionApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * Query user subscriptions.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=2 (READ)</li><li><i>Returns</i>: paginated subscription</li></ul>
   */
  getUserSubscriptions({
    userId,
    queryParams
  }: {
    userId: string
    queryParams?: {
      itemId?: string | null
      sku?: string | null
      status?: string | null
      chargeStatus?: string | null
      subscribedBy?: string | null
      offset?: number
      limit?: number
    }
  }) {
    return this.newInstance().fetchUsersByUseridSubscriptions(userId, queryParams)
  }

  /**
   * Get user subscription.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=2 (READ)</li><li><i>Returns</i>: subscription</li></ul>
   */
  getUserSubscriptionBySubscriptionId({ userId, subscriptionId }: { userId: string; subscriptionId: string }) {
    return this.newInstance().fetchUsersByUseridSubscriptionsBySubscriptionid(userId, subscriptionId)
  }

  /**
   * Subscribe a subscription. Support both real and virtual payment. Need go through payment flow using the paymentOrderNo if paymentFlowRequired true.<br><b>ACTIVE USER subscription can't do subscribe again.</b><br><b>The next billing date will be X(default 4) hours before the current period ends if correctly subscribed.</b><br>User with permission SANDBOX will create sandbox subscription that not real paid.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=1 (CREATE)</li><li><i>Optional permission(user with this permission will create sandbox subscription)</i>: resource="SANDBOX", action=1 (CREATE)</li><li>It will be forbidden while the user is banned: ORDER_INITIATE or ORDER_AND_PAYMENT</li><li><i>Returns</i>: created subscription</li></ul>
   */
  createSubscription({ userId, data }: { userId: string; data: SubscribeRequest }) {
    return this.newInstance().postUsersByUseridSubscriptions(userId, data)
  }

  /**
   * Get user subscription billing histories.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=2 (READ)</li><li><i>Returns</i>: paginated subscription history</li></ul>
   */
  getUserSubscriptionBillingHistory({
    userId,
    subscriptionId,
    queryParams
  }: {
    userId: string
    subscriptionId: string
    queryParams?: { excludeFree?: boolean | null; offset?: number; limit?: number }
  }) {
    return this.newInstance().fetchUsersByUseridSubscriptionsBySubscriptionidHistory(userId, subscriptionId, queryParams)
  }

  /**
   * Request to change a subscription billing account, this will guide user to payment station. The actual change will happen at the 0 payment notification successfully handled.<br>Only ACTIVE USER subscription with real currency billing account can be changed.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=4 (UPDATE)</li><li><i>Returns</i>: updated subscription</li></ul>
   */
  updateUserSubscriptionPaymentMethod({ userId, subscriptionId }: { userId: string; subscriptionId: string }) {
    return this.newInstance().putUsersByUseridSubscriptionsBySubscriptionidBillingAccount(userId, subscriptionId)
  }

  /**
   * Cancel a subscription, only ACTIVE subscription can be cancelled. <b>Ensure successfully cancel, recommend at least 1 day before current period ends, otherwise it may be charging or charged.</b><br>Set immediate true, the subscription will be terminated immediately, otherwise till the end of current billing cycle.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=4 (UPDATE)</li><li><i>Returns</i>: cancelled subscription</li></ul>
   */
  cancelUserSubscription({ userId, subscriptionId, data }: { userId: string; subscriptionId: string; data: CancelRequest }) {
    return this.newInstance().putUsersByUseridSubscriptionsBySubscriptionidCancel(userId, subscriptionId, data)
  }

  private newInstance() {
    return new Subscription$(Network.create(this.conf), this.namespace, this.cache)
  }
}
