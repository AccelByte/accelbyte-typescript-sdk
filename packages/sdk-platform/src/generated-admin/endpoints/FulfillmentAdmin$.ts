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
import { z } from 'zod'
import { FulfillCodeRequest } from '../../generated-definitions/FulfillCodeRequest.js'
import { FulfillmentHistoryPagingSlicedResult } from '../../generated-definitions/FulfillmentHistoryPagingSlicedResult.js'
import { FulfillmentItemArray } from '../../generated-definitions/FulfillmentItemArray.js'
import { FulfillmentPagingSlicedResult } from '../../generated-definitions/FulfillmentPagingSlicedResult.js'
import { FulfillmentRequest } from '../../generated-definitions/FulfillmentRequest.js'
import { FulfillmentResult } from '../../generated-definitions/FulfillmentResult.js'
import { FulfillmentV2Request } from '../../generated-definitions/FulfillmentV2Request.js'
import { FulfillmentV2Result } from '../../generated-definitions/FulfillmentV2Result.js'
import { PreCheckFulfillmentRequest } from '../../generated-definitions/PreCheckFulfillmentRequest.js'
import { RevokeFulfillmentV2Result } from '../../generated-definitions/RevokeFulfillmentV2Result.js'
import { RewardsRequest } from '../../generated-definitions/RewardsRequest.js'

export class FulfillmentAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt; Query fulfillments in a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of fulfillment info:&lt;ul&gt;&lt;li&gt;storeId in items can be ignored&lt;/li&gt;&lt;li&gt;error in successList will always be null&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  getFulfillments_v2(queryParams?: {
    endTime?: string | null
    limit?: number
    offset?: number
    startTime?: string | null
    state?: 'FULFILLED' | 'FULFILL_FAILED' | 'REVOKED' | 'REVOKE_FAILED'
    transactionId?: string | null
    userId?: string | null
  }): Promise<Response<FulfillmentPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/v2/admin/namespaces/{namespace}/fulfillments'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      FulfillmentPagingSlicedResult,
      'FulfillmentPagingSlicedResult'
    )
  }
  /**
   * Query fulfillment histories in a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: query fulfillment history&lt;/li&gt;&lt;/ul&gt;
   */
  getFulfillmentHistory(queryParams?: {
    limit?: number
    offset?: number
    status?: 'FAIL' | 'SUCCESS'
    userId?: string | null
  }): Promise<Response<FulfillmentHistoryPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/fulfillment/history'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      FulfillmentHistoryPagingSlicedResult,
      'FulfillmentHistoryPagingSlicedResult'
    )
  }
  /**
   * Fulfill item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt;
   */
  createFulfillment_ByUserId(userId: string, data: FulfillmentRequest): Promise<Response<FulfillmentResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/fulfillment'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FulfillmentResult, 'FulfillmentResult')
  }
  /**
   * Redeem campaign code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt;
   */
  createFulfillmentCode_ByUserId(userId: string, data: FulfillCodeRequest): Promise<Response<FulfillmentResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/fulfillment/code'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FulfillmentResult, 'FulfillmentResult')
  }
  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Fulfill rewards.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt;
   */
  createFulfillmentReward_ByUserId(userId: string, data: RewardsRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/fulfillment/rewards'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Retrieve and check fulfillment items based on the provided request.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of fulfillment items&lt;/li&gt;&lt;/ul&gt;
   */
  createFulfillmentPreCheck_ByUserId(userId: string, data: PreCheckFulfillmentRequest): Promise<Response<FulfillmentItemArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/fulfillment/preCheck'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FulfillmentItemArray, 'FulfillmentItemArray')
  }
  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Fulfill rewards.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;li&gt;&lt;i&gt;rewards Item unsupported Type&lt;/i&gt;: SUBSCRIPTION&lt;/ul&gt;
   */
  createFulfillmentReward_ByUserId_v2(userId: string, data: RewardsRequest): Promise<Response<FulfillmentResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/v2/admin/namespaces/{namespace}/users/{userId}/fulfillment/rewards'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FulfillmentResult, 'FulfillmentResult')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt; Fulfill items by transactionId.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Request body&lt;/i&gt;: storeId, region, language, and entitlementCollectionId can be ignored.&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment v2 result, storeId field can be ignored.&lt;/li&gt;&lt;/ul&gt;
   */
  updateFulfillment_ByUserId_ByTransactionId_v2(
    userId: string,
    transactionId: string,
    data: FulfillmentV2Request
  ): Promise<Response<FulfillmentV2Result>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/v2/admin/namespaces/{namespace}/users/{userId}/fulfillments/{transactionId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{transactionId}', transactionId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FulfillmentV2Result, 'FulfillmentV2Result')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt; Retry fulfill items by transactionId without sending the original payload.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment v2 result, storeId field can be ignored.&lt;/li&gt;&lt;/ul&gt;
   */
  updateRetry_ByUserId_ByTransactionId_v2(userId: string, transactionId: string): Promise<Response<FulfillmentV2Result>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/v2/admin/namespaces/{namespace}/users/{userId}/fulfillments/{transactionId}/retry'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{transactionId}', transactionId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FulfillmentV2Result, 'FulfillmentV2Result')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt; Revoke items by transactionId.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoke fulfillment v2 result, storeId field can be ignored.&lt;/li&gt;&lt;/ul&gt;
   */
  updateRevoke_ByUserId_ByTransactionId_v2(userId: string, transactionId: string): Promise<Response<RevokeFulfillmentV2Result>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/v2/admin/namespaces/{namespace}/users/{userId}/fulfillments/{transactionId}/revoke'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{transactionId}', transactionId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RevokeFulfillmentV2Result,
      'RevokeFulfillmentV2Result'
    )
  }
}
