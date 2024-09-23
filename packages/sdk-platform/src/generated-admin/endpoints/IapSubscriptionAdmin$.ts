/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ThirdPartySubscriptionOwnership } from '../../generated-definitions/ThirdPartySubscriptionOwnership.js'
import { ThirdPartySubscriptionTransactionHistoryPagingSlicedResult } from '../../generated-definitions/ThirdPartySubscriptionTransactionHistoryPagingSlicedResult.js'
import { ThirdPartySubscriptionTransactionInfo } from '../../generated-definitions/ThirdPartySubscriptionTransactionInfo.js'
import { ThirdPartySubscriptionTransactionPagingSlicedResult } from '../../generated-definitions/ThirdPartySubscriptionTransactionPagingSlicedResult.js'
import { ThirdPartyUserSubscriptionInfo } from '../../generated-definitions/ThirdPartyUserSubscriptionInfo.js'
import { ThirdPartyUserSubscriptionPagingSlicedResult } from '../../generated-definitions/ThirdPartyUserSubscriptionPagingSlicedResult.js'

export class IapSubscriptionAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Query subscriptions, default sort by updatedAt Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  getIapSubscriptions(queryParams?: {
    activeOnly?: boolean | null
    groupId?: string | null
    limit?: number
    offset?: number
    platform?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
    productId?: string | null
    userId?: string | null
  }): Promise<Response<ThirdPartyUserSubscriptionPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/subscriptions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ThirdPartyUserSubscriptionPagingSlicedResult,
      'ThirdPartyUserSubscriptionPagingSlicedResult'
    )
  }
  /**
   * Query user subscription, default sort by updatedAtOther detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  getIapSubscriptions_ByUserId(
    userId: string,
    queryParams?: {
      activeOnly?: boolean | null
      groupId?: string | null
      limit?: number
      offset?: number
      platform?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
      productId?: string | null
    }
  ): Promise<Response<ThirdPartyUserSubscriptionPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/iap/subscriptions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ThirdPartyUserSubscriptionPagingSlicedResult,
      'ThirdPartyUserSubscriptionPagingSlicedResult'
    )
  }
  /**
   * Admin get user subscription details.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  getIapSubscription_ByUserId_ById(userId: string, id: string): Promise<Response<ThirdPartyUserSubscriptionInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/iap/subscriptions/{id}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{id}', id)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ThirdPartyUserSubscriptionInfo,
      'ThirdPartyUserSubscriptionInfo'
    )
  }
  /**
   * Sync Subscription Status
   */
  updateSyncIap_ByUserId_ById(userId: string, id: string): Promise<Response<ThirdPartyUserSubscriptionInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/iap/subscriptions/{id}/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{id}', id)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ThirdPartyUserSubscriptionInfo,
      'ThirdPartyUserSubscriptionInfo'
    )
  }
  /**
   * Admin query user subscription transactions, default sort by startAt timeOther detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  getIapSubscriptionsTransactions_ByUserId(
    userId: string,
    queryParams?: {
      activeOnly?: boolean | null
      groupId?: string | null
      limit?: number
      offset?: number
      platform?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
      productId?: string | null
    }
  ): Promise<Response<ThirdPartySubscriptionTransactionPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/iap/subscriptions/transactions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ThirdPartySubscriptionTransactionPagingSlicedResult,
      'ThirdPartySubscriptionTransactionPagingSlicedResult'
    )
  }
  /**
   * Admin get user subscription details.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  getIapSubscriptionTransaction_ByUserId_ById(userId: string, id: string): Promise<Response<ThirdPartySubscriptionTransactionInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/iap/subscriptions/transactions/{id}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{id}', id)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ThirdPartySubscriptionTransactionInfo,
      'ThirdPartySubscriptionTransactionInfo'
    )
  }
  /**
   * Sync Subscription Status
   */
  updateSyncSubscriptionIap_ByUserId_ById(userId: string, id: string): Promise<Response<ThirdPartySubscriptionTransactionInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/iap/subscriptions/transactions/{id}/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{id}', id)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ThirdPartySubscriptionTransactionInfo,
      'ThirdPartySubscriptionTransactionInfo'
    )
  }
  /**
   * Get Subscription Transaction Update History
   */
  getHistoriesSubscriptionsIap_ByUserId_ById(
    userId: string,
    id: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<Response<ThirdPartySubscriptionTransactionHistoryPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/iap/subscriptions/transactions/{id}/histories'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{id}', id)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ThirdPartySubscriptionTransactionHistoryPagingSlicedResult,
      'ThirdPartySubscriptionTransactionHistoryPagingSlicedResult'
    )
  }
  /**
   * Get user third party subscription by subscription group id.
   */
  getOwnershipByGroupIdSubscriptionsIap_ByUserId_ByPlatform(
    userId: string,
    platform: string,
    queryParams: { groupId: string | null }
  ): Promise<Response<ThirdPartySubscriptionOwnership>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/iap/subscriptions/platforms/{platform}/ownership/byGroupId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{platform}', platform)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ThirdPartySubscriptionOwnership,
      'ThirdPartySubscriptionOwnership'
    )
  }
  /**
   * Get user third party subscription by subscription product id.
   */
  getOwnershipByProductIdSubscriptionsIap_ByUserId_ByPlatform(
    userId: string,
    platform: string,
    queryParams: { productId: string | null }
  ): Promise<Response<ThirdPartySubscriptionOwnership>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/iap/subscriptions/platforms/{platform}/ownership/byProductId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{platform}', platform)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ThirdPartySubscriptionOwnership,
      'ThirdPartySubscriptionOwnership'
    )
  }
}
