/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { BillingHistoryPagingSlicedResult } from './definitions/BillingHistoryPagingSlicedResult'
import { CancelRequest } from './definitions/CancelRequest'
import { Subscribable } from './definitions/Subscribable'
import { SubscribeRequest } from './definitions/SubscribeRequest'
import { SubscriptionInfo } from './definitions/SubscriptionInfo'
import { SubscriptionPagingSlicedResult } from './definitions/SubscriptionPagingSlicedResult'

export class Subscription$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Query user subscriptions.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=2 (READ)</li><li><i>Returns</i>: paginated subscription</li></ul>
   */
  fetchSubscriptions_ByUserId<T = SubscriptionPagingSlicedResult>(
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
  ): Promise<IResponseWithSync<T>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/subscriptions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, SubscriptionPagingSlicedResult)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Subscribe a subscription. Support both real and virtual payment. Need go through payment flow using the paymentOrderNo if paymentFlowRequired true.<br><b>ACTIVE USER subscription can't do subscribe again.</b><br><b>The next billing date will be X(default 4) hours before the current period ends if correctly subscribed.</b><br>User with permission SANDBOX will create sandbox subscription that not real paid.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=1 (CREATE)</li><li><i>Optional permission(user with this permission will create sandbox subscription)</i>: resource="SANDBOX", action=1 (CREATE)</li><li>It will be forbidden while the user is banned: ORDER_INITIATE or ORDER_AND_PAYMENT</li><li><i>Returns</i>: created subscription</li></ul>
   */
  createSubscription_ByUserId(userId: string, data: SubscribeRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/subscriptions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Get user subscription.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=2 (READ)</li><li><i>Returns</i>: subscription</li></ul>
   */
  fetchSubscription_ByUserId_BySubscriptionId<T = SubscriptionInfo>(userId: string, subscriptionId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/subscriptions/{subscriptionId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{subscriptionId}', subscriptionId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, SubscriptionInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Check user subscription subscribable by itemId, ACTIVE USER subscription can't do subscribe again.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=2 (READ)</li><li><i>Returns</i>: subscribable info</li></ul>
   */
  fetchSubscriptionsSubscribableByItemId_ByUserId<T = Subscribable>(
    userId: string,
    queryParams: { itemId: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/subscriptions/subscribable/byItemId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, Subscribable)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Cancel a subscription, only ACTIVE subscription can be cancelled. <b>Ensure successfully cancel, recommend at least 1 day before current period ends, otherwise it may be charging or charged.</b><br>Set immediate true, the subscription will be terminated immediately, otherwise till the end of current billing cycle.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=4 (UPDATE)</li><li><i>Returns</i>: cancelled subscription</li></ul>
   */
  updateCancel_ByUserId_BySubscriptionId<T = SubscriptionInfo>(
    userId: string,
    subscriptionId: string,
    data: CancelRequest
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/subscriptions/{subscriptionId}/cancel'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{subscriptionId}', subscriptionId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, SubscriptionInfo)
  }

  /**
   * Get user subscription billing histories.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=2 (READ)</li><li><i>Returns</i>: paginated subscription history</li></ul>
   */
  fetchHistory_ByUserId_BySubscriptionId<T = BillingHistoryPagingSlicedResult>(
    userId: string,
    subscriptionId: string,
    queryParams?: { excludeFree?: boolean | null; offset?: number; limit?: number }
  ): Promise<IResponseWithSync<T>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/subscriptions/{subscriptionId}/history'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{subscriptionId}', subscriptionId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, BillingHistoryPagingSlicedResult)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Request to change a subscription billing account, this will guide user to payment station. The actual change will happen at the 0 payment notification successfully handled.<br>Only ACTIVE USER subscription with real currency billing account can be changed.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SUBSCRIPTION", action=4 (UPDATE)</li><li><i>Returns</i>: updated subscription</li></ul>
   */
  updateBillingAccount_ByUserId_BySubscriptionId<T = SubscriptionInfo>(userId: string, subscriptionId: string): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/subscriptions/{subscriptionId}/billingAccount'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{subscriptionId}', subscriptionId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.responseType(() => resultPromise, SubscriptionInfo)
  }
}
