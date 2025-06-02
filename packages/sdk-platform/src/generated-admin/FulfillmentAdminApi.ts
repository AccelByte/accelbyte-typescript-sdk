/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { FulfillCodeRequest } from '../generated-definitions/FulfillCodeRequest.js'
import { FulfillmentHistoryPagingSlicedResult } from '../generated-definitions/FulfillmentHistoryPagingSlicedResult.js'
import { FulfillmentItemArray } from '../generated-definitions/FulfillmentItemArray.js'
import { FulfillmentPagingSlicedResult } from '../generated-definitions/FulfillmentPagingSlicedResult.js'
import { FulfillmentRequest } from '../generated-definitions/FulfillmentRequest.js'
import { FulfillmentResult } from '../generated-definitions/FulfillmentResult.js'
import { FulfillmentV2Request } from '../generated-definitions/FulfillmentV2Request.js'
import { FulfillmentV2Result } from '../generated-definitions/FulfillmentV2Result.js'
import { PreCheckFulfillmentRequest } from '../generated-definitions/PreCheckFulfillmentRequest.js'
import { RevokeFulfillmentV2Result } from '../generated-definitions/RevokeFulfillmentV2Result.js'
import { RewardsRequest } from '../generated-definitions/RewardsRequest.js'
import { FulfillmentAdmin$ } from './endpoints/FulfillmentAdmin$.js'

export function FulfillmentAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getFulfillments_v2(queryParams?: {
    endTime?: string | null
    limit?: number
    offset?: number
    startTime?: string | null
    state?: 'FULFILLED' | 'FULFILL_FAILED' | 'REVOKED' | 'REVOKE_FAILED'
    transactionId?: string | null
    userId?: string | null
  }): Promise<AxiosResponse<FulfillmentPagingSlicedResult>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFulfillments_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getFulfillmentHistory(queryParams?: {
    limit?: number
    offset?: number
    status?: 'FAIL' | 'SUCCESS'
    userId?: string | null
  }): Promise<AxiosResponse<FulfillmentHistoryPagingSlicedResult>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFulfillmentHistory(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createFulfillment_ByUserId(userId: string, data: FulfillmentRequest): Promise<AxiosResponse<FulfillmentResult>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFulfillment_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createFulfillmentCode_ByUserId(userId: string, data: FulfillCodeRequest): Promise<AxiosResponse<FulfillmentResult>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFulfillmentCode_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createFulfillmentReward_ByUserId(userId: string, data: RewardsRequest): Promise<AxiosResponse<unknown>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFulfillmentReward_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createFulfillmentPreCheck_ByUserId(
    userId: string,
    data: PreCheckFulfillmentRequest
  ): Promise<AxiosResponse<FulfillmentItemArray>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFulfillmentPreCheck_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createFulfillmentReward_ByUserId_v2(userId: string, data: RewardsRequest): Promise<AxiosResponse<FulfillmentResult>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFulfillmentReward_ByUserId_v2(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateFulfillment_ByUserId_ByTransactionId_v2(
    userId: string,
    transactionId: string,
    data: FulfillmentV2Request
  ): Promise<AxiosResponse<FulfillmentV2Result>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateFulfillment_ByUserId_ByTransactionId_v2(userId, transactionId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateFulfillment_ByUserId_ByTransactionId_v3(
    userId: string,
    transactionId: string,
    data: FulfillmentV2Request
  ): Promise<AxiosResponse<FulfillmentV2Result>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateFulfillment_ByUserId_ByTransactionId_v3(userId, transactionId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRetry_ByUserId_ByTransactionId_v2(
    userId: string,
    transactionId: string
  ): Promise<AxiosResponse<FulfillmentV2Result>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRetry_ByUserId_ByTransactionId_v2(userId, transactionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRetry_ByUserId_ByTransactionId_v3(
    userId: string,
    transactionId: string
  ): Promise<AxiosResponse<FulfillmentV2Result>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRetry_ByUserId_ByTransactionId_v3(userId, transactionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRevoke_ByUserId_ByTransactionId_v2(
    userId: string,
    transactionId: string
  ): Promise<AxiosResponse<RevokeFulfillmentV2Result>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRevoke_ByUserId_ByTransactionId_v2(userId, transactionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRevoke_ByUserId_ByTransactionId_v3(
    userId: string,
    transactionId: string
  ): Promise<AxiosResponse<RevokeFulfillmentV2Result>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRevoke_ByUserId_ByTransactionId_v3(userId, transactionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt; Query fulfillments in a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of fulfillment info:&lt;ul&gt;&lt;li&gt;storeId in items can be ignored&lt;/li&gt;&lt;li&gt;error in successList will always be null&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
     */
    getFulfillments_v2,
    /**
     * Query fulfillment histories in a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: query fulfillment history&lt;/li&gt;&lt;/ul&gt;
     */
    getFulfillmentHistory,
    /**
     * Fulfill item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt;
     */
    createFulfillment_ByUserId,
    /**
     * Redeem campaign code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt;
     */
    createFulfillmentCode_ByUserId,
    /**
     * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Fulfill rewards.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt;
     */
    createFulfillmentReward_ByUserId,
    /**
     * Retrieve and check fulfillment items based on the provided request.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of fulfillment items&lt;/li&gt;&lt;/ul&gt;
     */
    createFulfillmentPreCheck_ByUserId,
    /**
     * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Fulfill rewards.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;li&gt;&lt;i&gt;rewards Item unsupported Type&lt;/i&gt;: SUBSCRIPTION&lt;/ul&gt;
     */
    createFulfillmentReward_ByUserId_v2,
    /**
     * @deprecated
     * &lt;h3&gt;The endpoint is going to be deprecated &lt;/h3&gt;Description: this endpoint is &lt;b&gt;Not supported yet in AGS Shared Cloud&lt;/b&gt; and it&#39;s used to fulfill items by transaction id.&lt;ul&gt;&lt;li&gt;&lt;i&gt;Request body&lt;/i&gt;: storeId, region, language, and entitlementCollectionId can be ignored.&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment v2 result, storeId field can be ignored.&lt;/li&gt;&lt;/ul&gt;&lt;h3&gt;Endpoint migration guide&lt;/h3&gt;&lt;ul&gt;&lt;li&gt;&lt;strong&gt;Substitute endpoint: &lt;em&gt;/v3/admin/namespaces/{namespace}/users/{userId}/fulfillments/{transactionId} [PUT]&lt;/em&gt;&lt;/strong&gt;&lt;/li&gt;&lt;ul&gt;
     */
    updateFulfillment_ByUserId_ByTransactionId_v2,
    /**
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt; Fulfill items by transactionId.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Request body&lt;/i&gt;: storeId, region, language, and entitlementCollectionId can be ignored.&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment v2 result, storeId field can be ignored.&lt;/li&gt;&lt;/ul&gt;
     */
    updateFulfillment_ByUserId_ByTransactionId_v3,
    /**
     * @deprecated
     * &lt;h3&gt;The endpoint is going to be deprecated &lt;/h3&gt;&lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt; Retry fulfill items by transactionId without sending the original payload.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment v2 result, storeId field can be ignored.&lt;/li&gt;&lt;/ul&gt;&lt;h3&gt;Endpoint migration guide&lt;/h3&gt;&lt;ul&gt;&lt;li&gt;&lt;strong&gt;Substitute endpoint: &lt;em&gt;/v3/admin/namespaces/{namespace}/users/{userId}/fulfillments/{transactionId}/retry [PUT]&lt;/em&gt;&lt;/strong&gt;&lt;/li&gt;&lt;ul&gt;
     */
    updateRetry_ByUserId_ByTransactionId_v2,
    /**
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt; Retry fulfill items by transactionId without sending the original payload.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment v2 result, storeId field can be ignored.&lt;/li&gt;&lt;/ul&gt;
     */
    updateRetry_ByUserId_ByTransactionId_v3,
    /**
     * @deprecated
     * &lt;h3&gt;The endpoint is going to be deprecated &lt;/h3&gt;&lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt; Revoke items by transactionId.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoke fulfillment v2 result, storeId field can be ignored.&lt;/li&gt;&lt;/ul&gt;&lt;h3&gt;Endpoint migration guide&lt;/h3&gt;&lt;ul&gt;&lt;li&gt;&lt;strong&gt;Substitute endpoint: &lt;em&gt;/v3/admin/namespaces/{namespace}/users/{userId}/fulfillments/{transactionId}/revoke [PUT]&lt;/em&gt;&lt;/strong&gt;&lt;/li&gt;&lt;ul&gt;
     */
    updateRevoke_ByUserId_ByTransactionId_v2,
    /**
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt; Revoke items by transactionId.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoke fulfillment v2 result, storeId field can be ignored.&lt;/li&gt;&lt;/ul&gt;
     */
    updateRevoke_ByUserId_ByTransactionId_v3
  }
}
