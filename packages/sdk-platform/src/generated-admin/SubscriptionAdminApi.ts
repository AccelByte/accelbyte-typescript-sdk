/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { GrantSubscriptionDaysRequest } from '../generated-definitions/GrantSubscriptionDaysRequest.js'
import { PlatformSubscribeRequest } from '../generated-definitions/PlatformSubscribeRequest.js'
import { RecurringChargeResult } from '../generated-definitions/RecurringChargeResult.js'
import { Subscribable } from '../generated-definitions/Subscribable.js'
import { SubscriptionActivityPagingSlicedResult } from '../generated-definitions/SubscriptionActivityPagingSlicedResult.js'
import { SubscriptionInfo } from '../generated-definitions/SubscriptionInfo.js'
import { SubscriptionPagingSlicedResult } from '../generated-definitions/SubscriptionPagingSlicedResult.js'
import { TradeNotification } from '../generated-definitions/TradeNotification.js'
import { SubscriptionAdmin$ } from './endpoints/SubscriptionAdmin$.js'

export function SubscriptionAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getSubscriptions(queryParams?: {
    chargeStatus?: 'CHARGED' | 'CHARGE_FAILED' | 'NEVER' | 'RECURRING_CHARGING' | 'SETUP'
    itemId?: string | null
    limit?: number
    offset?: number
    sku?: string | null
    status?: 'ACTIVE' | 'CANCELLED' | 'EXPIRED' | 'INIT'
    subscribedBy?: 'PLATFORM' | 'USER'
    userId?: string | null
  }): Promise<AxiosResponse<SubscriptionPagingSlicedResult>> {
    const $ = new SubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSubscriptions(queryParams)
    if (resp.error) throw resp.error
    return resp.response
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
    const $ = new SubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSubscriptions_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSubscriptionsActivities_ByUserId(
    userId: string,
    queryParams?: { excludeSystem?: boolean | null; limit?: number; offset?: number; subscriptionId?: string | null }
  ): Promise<AxiosResponse<SubscriptionActivityPagingSlicedResult>> {
    const $ = new SubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSubscriptionsActivities_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRecurring_BySubscriptionId(subscriptionId: string): Promise<AxiosResponse<RecurringChargeResult>> {
    const $ = new SubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRecurring_BySubscriptionId(subscriptionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteSubscription_ByUserId_BySubscriptionId(userId: string, subscriptionId: string): Promise<AxiosResponse<unknown>> {
    const $ = new SubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteSubscription_ByUserId_BySubscriptionId(userId, subscriptionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSubscription_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string
  ): Promise<AxiosResponse<SubscriptionInfo>> {
    const $ = new SubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSubscription_ByUserId_BySubscriptionId(userId, subscriptionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createSubscriptionPlatformSubscribe_ByUserId(
    userId: string,
    data: PlatformSubscribeRequest
  ): Promise<AxiosResponse<SubscriptionInfo>> {
    const $ = new SubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSubscriptionPlatformSubscribe_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSubscriptionsSubscribableByItemId_ByUserId(
    userId: string,
    queryParams: { itemId: string | null }
  ): Promise<AxiosResponse<Subscribable>> {
    const $ = new SubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSubscriptionsSubscribableByItemId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateGrant_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string,
    data: GrantSubscriptionDaysRequest
  ): Promise<AxiosResponse<SubscriptionInfo>> {
    const $ = new SubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateGrant_ByUserId_BySubscriptionId(userId, subscriptionId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateCancel_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string,
    data: CancelRequest,
    queryParams?: { force?: boolean | null }
  ): Promise<AxiosResponse<SubscriptionInfo>> {
    const $ = new SubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCancel_ByUserId_BySubscriptionId(userId, subscriptionId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getHistory_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string,
    queryParams?: { excludeFree?: boolean | null; limit?: number; offset?: number }
  ): Promise<AxiosResponse<BillingHistoryPagingSlicedResult>> {
    const $ = new SubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getHistory_ByUserId_BySubscriptionId(userId, subscriptionId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createNotification_ByUserId_BySubscriptionId(
    userId: string,
    subscriptionId: string,
    data: TradeNotification
  ): Promise<AxiosResponse<unknown>> {
    const $ = new SubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNotification_ByUserId_BySubscriptionId(userId, subscriptionId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Query subscriptions.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscriptions&lt;/li&gt;&lt;/ul&gt;
     */
    getSubscriptions,
    /**
     * Query user subscriptions.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscription&lt;/li&gt;&lt;/ul&gt;
     */
    getSubscriptions_ByUserId,
    /**
     * Get user subscription activity.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscription activity&lt;/li&gt;&lt;/ul&gt;
     */
    getSubscriptionsActivities_ByUserId,
    /**
     * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; Recurring charge subscription, it will trigger recurring charge if the USER subscription status is ACTIVE, nextBillingDate is before now and no fail recurring charge within X(default 12) hours.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: recurring charge result&lt;/li&gt;&lt;/ul&gt;
     */
    updateRecurring_BySubscriptionId,
    /**
     * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; Delete user subscription.
     */
    deleteSubscription_ByUserId_BySubscriptionId,
    /**
     * Get user subscription.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: subscription&lt;/li&gt;&lt;/ul&gt;
     */
    getSubscription_ByUserId_BySubscriptionId,
    /**
     * Free subscribe by platform, can used by other justice service to redeem/reward the subscription.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result subscription&lt;/li&gt;&lt;/ul&gt;
     */
    createSubscriptionPlatformSubscribe_ByUserId,
    /**
     * Check user subscription subscribable by itemId, ACTIVE USER subscription can&#39;t do subscribe again.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: subscribable info&lt;/li&gt;&lt;/ul&gt;
     */
    getSubscriptionsSubscribableByItemId_ByUserId,
    /**
     * Grant days to a subscription, if grantDays is positive, it will add free days and push the next billing date by the amount of day.&lt;br&gt;if the grantDays is negative or zero, it only apply to active/cancelled subscription, remove days will decrease current period end, and move the next billing date closer.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated subscription&lt;/li&gt;&lt;/ul&gt;
     */
    updateGrant_ByUserId_BySubscriptionId,
    /**
     * Cancel a subscription, only ACTIVE subscription can be cancelled. &lt;b&gt;Ensure successfully cancel, recommend at least 1 day before current period ends, otherwise it may be charging or charged.&lt;/b&gt;&lt;br&gt;Set immediate true, the subscription will be terminated immediately, otherwise till the end of current billing cycle.&lt;br&gt;Set force true, will ignore the error if subscription is during recurring charging.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: cancelled subscription&lt;/li&gt;&lt;/ul&gt;
     */
    updateCancel_ByUserId_BySubscriptionId,
    /**
     * Get user subscription billing histories.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated subscription billing history&lt;/li&gt;&lt;/ul&gt;
     */
    getHistory_ByUserId_BySubscriptionId,
    /**
     * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; This API is used as a web hook for payment notification from justice payment service.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Process result&lt;/li&gt;&lt;/ul&gt;
     */
    createNotification_ByUserId_BySubscriptionId
  }
}
