/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { BillingHistoryPagingSlicedResult } from '../generated-definitions/BillingHistoryPagingSlicedResult.js'
import { CancelRequest } from '../generated-definitions/CancelRequest.js'
import { Subscribable } from '../generated-definitions/Subscribable.js'
import { SubscribeRequest } from '../generated-definitions/SubscribeRequest.js'
import { SubscriptionInfo } from '../generated-definitions/SubscriptionInfo.js'
import { SubscriptionPagingSlicedResult } from '../generated-definitions/SubscriptionPagingSlicedResult.js'
import { Subscription$ } from './endpoints/Subscription$.js'

export function SubscriptionApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

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
  ): Promise<AxiosResponse<SubscriptionPagingSlicedResult>> {
    const $ = new Subscription$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSubscriptions_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createSubscription_ByUserId(userId: string, data: SubscribeRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Subscription$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSubscription_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSubscription_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string
  ): Promise<AxiosResponse<SubscriptionInfo>> {
    const $ = new Subscription$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSubscription_ByUserId_BySubscriptionId(userId, subscriptionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSubscriptionsSubscribableByItemId_ByUserId(
    userId: string,
    queryParams: { itemId: string | null }
  ): Promise<AxiosResponse<Subscribable>> {
    const $ = new Subscription$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSubscriptionsSubscribableByItemId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateCancel_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string,
    data: CancelRequest
  ): Promise<AxiosResponse<SubscriptionInfo>> {
    const $ = new Subscription$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCancel_ByUserId_BySubscriptionId(userId, subscriptionId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getHistory_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string,
    queryParams?: { excludeFree?: boolean | null; limit?: number; offset?: number }
  ): Promise<AxiosResponse<BillingHistoryPagingSlicedResult>> {
    const $ = new Subscription$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getHistory_ByUserId_BySubscriptionId(userId, subscriptionId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateBillingAccount_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string
  ): Promise<AxiosResponse<SubscriptionInfo>> {
    const $ = new Subscription$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateBillingAccount_ByUserId_BySubscriptionId(userId, subscriptionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Query user subscriptions.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscription&lt;/li&gt;&lt;/ul&gt;
     */
    getSubscriptions_ByUserId,
    /**
     * Subscribe a subscription. Support both real and virtual payment. Need go through payment flow using the paymentOrderNo if paymentFlowRequired true.&lt;br&gt;&lt;b&gt;ACTIVE USER subscription can&#39;t do subscribe again.&lt;/b&gt;&lt;br&gt;&lt;b&gt;The next billing date will be X(default 4) hours before the current period ends if correctly subscribed.&lt;/b&gt;&lt;br&gt;User with permission SANDBOX will create sandbox subscription that not real paid.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission(user with this permission will create sandbox subscription)&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;It will be forbidden while the user is banned: ORDER_INITIATE or ORDER_AND_PAYMENT&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created subscription&lt;/li&gt;&lt;/ul&gt;
     */
    createSubscription_ByUserId,
    /**
     * Get user subscription.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: subscription&lt;/li&gt;&lt;/ul&gt;
     */
    getSubscription_ByUserId_BySubscriptionId,
    /**
     * Check user subscription subscribable by itemId, ACTIVE USER subscription can&#39;t do subscribe again.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: subscribable info&lt;/li&gt;&lt;/ul&gt;
     */
    getSubscriptionsSubscribableByItemId_ByUserId,
    /**
     * Cancel a subscription, only ACTIVE subscription can be cancelled. &lt;b&gt;Ensure successfully cancel, recommend at least 1 day before current period ends, otherwise it may be charging or charged.&lt;/b&gt;&lt;br&gt;Set immediate true, the subscription will be terminated immediately, otherwise till the end of current billing cycle.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: cancelled subscription&lt;/li&gt;&lt;/ul&gt;
     */
    updateCancel_ByUserId_BySubscriptionId,
    /**
     * Get user subscription billing histories.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscription history&lt;/li&gt;&lt;/ul&gt;
     */
    getHistory_ByUserId_BySubscriptionId,
    /**
     * Request to change a subscription billing account, this will guide user to payment station. The actual change will happen at the 0 payment notification successfully handled.&lt;br&gt;Only ACTIVE USER subscription with real currency billing account can be changed.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated subscription&lt;/li&gt;&lt;/ul&gt;
     */
    updateBillingAccount_ByUserId_BySubscriptionId
  }
}
