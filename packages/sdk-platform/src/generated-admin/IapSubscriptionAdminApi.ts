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
import { ThirdPartySubscriptionOwnership } from '../generated-definitions/ThirdPartySubscriptionOwnership.js'
import { ThirdPartySubscriptionTransactionHistoryPagingSlicedResult } from '../generated-definitions/ThirdPartySubscriptionTransactionHistoryPagingSlicedResult.js'
import { ThirdPartySubscriptionTransactionInfo } from '../generated-definitions/ThirdPartySubscriptionTransactionInfo.js'
import { ThirdPartySubscriptionTransactionPagingSlicedResult } from '../generated-definitions/ThirdPartySubscriptionTransactionPagingSlicedResult.js'
import { ThirdPartyUserSubscriptionInfo } from '../generated-definitions/ThirdPartyUserSubscriptionInfo.js'
import { ThirdPartyUserSubscriptionPagingSlicedResult } from '../generated-definitions/ThirdPartyUserSubscriptionPagingSlicedResult.js'
import { IapSubscriptionAdmin$ } from './endpoints/IapSubscriptionAdmin$.js'

export function IapSubscriptionAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getIapSubscriptions(queryParams?: {
    activeOnly?: boolean | null
    groupId?: string | null
    limit?: number
    offset?: number
    platform?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
    productId?: string | null
    userId?: string | null
  }): Promise<AxiosResponse<ThirdPartyUserSubscriptionPagingSlicedResult>> {
    const $ = new IapSubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapSubscriptions(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIapSubscriptions_ByUserId(
    userId: string,
    queryParams?: {
      activeOnly?: boolean | null
      groupId?: string | null
      limit?: number
      offset?: number
      platform?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
      productId?: string | null
    }
  ): Promise<AxiosResponse<ThirdPartyUserSubscriptionPagingSlicedResult>> {
    const $ = new IapSubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapSubscriptions_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIapSubscription_ByUserId_ById(userId: string, id: string): Promise<AxiosResponse<ThirdPartyUserSubscriptionInfo>> {
    const $ = new IapSubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapSubscription_ByUserId_ById(userId, id)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateSyncIap_ByUserId_ById(userId: string, id: string): Promise<AxiosResponse<ThirdPartyUserSubscriptionInfo>> {
    const $ = new IapSubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSyncIap_ByUserId_ById(userId, id)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIapSubscriptionsTransactions_ByUserId(
    userId: string,
    queryParams?: {
      activeOnly?: boolean | null
      groupId?: string | null
      limit?: number
      offset?: number
      platform?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
      productId?: string | null
    }
  ): Promise<AxiosResponse<ThirdPartySubscriptionTransactionPagingSlicedResult>> {
    const $ = new IapSubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapSubscriptionsTransactions_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIapSubscriptionTransaction_ByUserId_ById(
    userId: string,
    id: string
  ): Promise<AxiosResponse<ThirdPartySubscriptionTransactionInfo>> {
    const $ = new IapSubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapSubscriptionTransaction_ByUserId_ById(userId, id)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateSyncSubscriptionIap_ByUserId_ById(
    userId: string,
    id: string
  ): Promise<AxiosResponse<ThirdPartySubscriptionTransactionInfo>> {
    const $ = new IapSubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSyncSubscriptionIap_ByUserId_ById(userId, id)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getHistoriesSubscriptionsIap_ByUserId_ById(
    userId: string,
    id: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<ThirdPartySubscriptionTransactionHistoryPagingSlicedResult>> {
    const $ = new IapSubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getHistoriesSubscriptionsIap_ByUserId_ById(userId, id, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getOwnershipByGroupIdSubscriptionsIap_ByUserId_ByPlatform(
    userId: string,
    platform: string,
    queryParams: { groupId: string | null }
  ): Promise<AxiosResponse<ThirdPartySubscriptionOwnership>> {
    const $ = new IapSubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getOwnershipByGroupIdSubscriptionsIap_ByUserId_ByPlatform(userId, platform, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getOwnershipByProductIdSubscriptionsIap_ByUserId_ByPlatform(
    userId: string,
    platform: string,
    queryParams: { productId: string | null }
  ): Promise<AxiosResponse<ThirdPartySubscriptionOwnership>> {
    const $ = new IapSubscriptionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getOwnershipByProductIdSubscriptionsIap_ByUserId_ByPlatform(userId, platform, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Query subscriptions, default sort by updatedAt Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
     */
    getIapSubscriptions,
    /**
     * Query user subscription, default sort by updatedAtOther detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
     */
    getIapSubscriptions_ByUserId,
    /**
     * Admin get user subscription details.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
     */
    getIapSubscription_ByUserId_ById,
    /**
     * Sync Subscription Status
     */
    updateSyncIap_ByUserId_ById,
    /**
     * Admin query user subscription transactions, default sort by startAt timeOther detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
     */
    getIapSubscriptionsTransactions_ByUserId,
    /**
     * Admin get user subscription details.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
     */
    getIapSubscriptionTransaction_ByUserId_ById,
    /**
     * Sync Subscription Status
     */
    updateSyncSubscriptionIap_ByUserId_ById,
    /**
     * Get Subscription Transaction Update History
     */
    getHistoriesSubscriptionsIap_ByUserId_ById,
    /**
     * Get user third party subscription by subscription group id.
     */
    getOwnershipByGroupIdSubscriptionsIap_ByUserId_ByPlatform,
    /**
     * Get user third party subscription by subscription product id.
     */
    getOwnershipByProductIdSubscriptionsIap_ByUserId_ByPlatform
  }
}
