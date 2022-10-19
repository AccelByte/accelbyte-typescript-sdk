/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { CancelRequest } from '@od-web-sdk/generated-public/platform/definitions/CancelRequest'
import { SubscribeRequest } from '@od-web-sdk/generated-public/platform/definitions/SubscribeRequest'
import { Subscription$ } from '@od-web-sdk/generated-public/platform/Subscription$'
import { Network } from '@od-web-sdk/utils/Network'

export class SubscriptionApi {
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = true) {}

  newInstance() {
    return new Subscription$(Network.create(this.conf), this.namespace, this.cache)
  }

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

  getUserSubscriptionBySubscriptionId({ userId, subscriptionId }: { userId: string; subscriptionId: string }) {
    return this.newInstance().fetchUsersByUseridSubscriptionsBySubscriptionid(userId, subscriptionId)
  }

  createSubscription({ userId, data }: { userId: string; data: SubscribeRequest }) {
    return this.newInstance().postUsersByUseridSubscriptions(userId, data)
  }

  getUserSubscriptionBillingHistory({
    userId,
    subscriptionId,
    queryParams
  }: {
    userId: string
    subscriptionId: string
    queryParams?: { excludeFree?: boolean | null; offset?: number; limit?: number }
  }) {
    // @atanas Note, there was a bug using admin endpoint =instead of public
    // admin: "getAdminNssByNsUsersByUseridSubscriptionsBySubscriptionidHistory"
    // public: "fetchUsersByUseridSubscriptionsBySubscriptionidHistory"
    return this.newInstance().fetchUsersByUseridSubscriptionsBySubscriptionidHistory(userId, subscriptionId, queryParams)
  }

  updateUserSubscriptionPaymentMethod({ userId, subscriptionId }: { userId: string; subscriptionId: string }) {
    return this.newInstance().putUsersByUseridSubscriptionsBySubscriptionidBillingAccount(userId, subscriptionId)
  }

  cancelUserSubscription({ userId, subscriptionId, data }: { userId: string; subscriptionId: string; data: CancelRequest }) {
    return this.newInstance().putUsersByUseridSubscriptionsBySubscriptionidCancel(userId, subscriptionId, data)
  }
}
