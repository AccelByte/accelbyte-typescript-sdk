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

  async function createSubscription_ByUserId(userId: string, data: SubscribeRequest): Promise<unknown> {
    const $ = new Subscription$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createSubscription_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getSubscription_ByUserId_BySubscriptionId(userId: string, subscriptionId: string): Promise<SubscriptionInfo> {
    const $ = new Subscription$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSubscription_ByUserId_BySubscriptionId(userId, subscriptionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getSubscriptionsSubscribableByItemId_ByUserId(
    userId: string,
    queryParams: { itemId: string | null }
  ): Promise<Subscribable> {
    const $ = new Subscription$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSubscriptionsSubscribableByItemId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

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
