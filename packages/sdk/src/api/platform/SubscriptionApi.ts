/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
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
   * GET [/platform/public/namespaces/{namespace}/users/{userId}/subscriptions](api)
   *
   * Query user subscriptions.
   *
   * Returns: paginated subscription
   */
  getUserSubscriptions = ({
    userId,
    queryParams
  }: {
    userId: string
    queryParams?: Parameters<Subscription$['fetchSubscriptions_ByUserId']>[1]
  }) => {
    return this.newInstance().fetchSubscriptions_ByUserId(userId, queryParams)
  }

  /**
   * GET [/platform/public/namespaces/{namespace}/users/{userId}/subscriptions/{subscriptionId}](api)
   *
   * Get user subscription.
   *
   * Returns: subscription
   */
  getUserSubscriptionBySubscriptionId = ({ userId, subscriptionId }: { userId: string; subscriptionId: string }) => {
    return this.newInstance().fetchSubscription_ByUserId_BySubscriptionId(userId, subscriptionId)
  }

  /**
   * POST [/platform/public/namespaces/{namespace}/users/{userId}/subscriptions](api)
   *
   * Subscribe a subscription. Support both real and virtual payment. Need go through payment flow using the paymentOrderNo if paymentFlowRequired true.
   * __ACTIVE USER subscription can't do subscribe again.__
   * __The next billing date will be X(default 4) hours before the current period ends if correctly subscribed.__
   * User with permission SANDBOX will create sandbox subscription that not real paid.
   *
   * Returns: created subscription
   */
  createSubscription = ({ userId, data }: { userId: string; data: SubscribeRequest }) => {
    return this.newInstance().createSubscription_ByUserId(userId, data)
  }

  /**
   * GET [/platform/public/namespaces/{namespace}/users/{userId}/subscriptions/{subscriptionId}/history](api)
   *
   * Get user subscription billing histories.
   *
   * Returns: paginated subscription history
   */
  getUserSubscriptionBillingHistory = ({
    userId,
    subscriptionId,
    queryParams
  }: {
    userId: string
    subscriptionId: string
    queryParams?: { excludeFree?: boolean | null; offset?: number; limit?: number }
  }) => {
    return this.newInstance().fetchHistory_ByUserId_BySubscriptionId(userId, subscriptionId, queryParams)
  }

  /**
   * PUT [/platform/public/namespaces/{namespace}/users/{userId}/subscriptions/{subscriptionId}/billingAccount](api)
   *
   * Request to change a subscription billing account, this will guide user to payment station.
   * The actual change will happen at the 0 payment notification successfully handled.
   * Only ACTIVE USER subscription with real currency billing account can be changed.
   *
   * Returns: updated subscription
   */
  updateUserSubscriptionPaymentMethod = ({ userId, subscriptionId }: { userId: string; subscriptionId: string }) => {
    return this.newInstance().updateBillingAccount_ByUserId_BySubscriptionId(userId, subscriptionId)
  }

  /**
   * PUT [/platform/public/namespaces/{namespace}/users/{userId}/subscriptions/{subscriptionId}/cancel](api)
   *
   * Cancel a subscription, only ACTIVE subscription can be cancelled.
   * __Ensure successfully cancel, recommend at least 1 day before current period ends, otherwise it may be charging or charged.__
   * Set immediate true, the subscription will be terminated immediately, otherwise till the end of current billing cycle.
   *
   * Returns: cancelled subscription
   */
  cancelUserSubscription = ({ userId, subscriptionId, data }: { userId: string; subscriptionId: string; data: CancelRequest }) => {
    return this.newInstance().updateCancel_ByUserId_BySubscriptionId(userId, subscriptionId, data)
  }

  private newInstance() {
    return new Subscription$(Network.create(this.conf), this.namespace, this.cache)
  }
}
