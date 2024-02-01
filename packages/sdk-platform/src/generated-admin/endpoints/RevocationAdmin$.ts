/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { RevocationConfigInfo } from '../../generated-definitions/RevocationConfigInfo.js'
import { RevocationConfigUpdate } from '../../generated-definitions/RevocationConfigUpdate.js'
import { RevocationHistoryPagingSlicedResult } from '../../generated-definitions/RevocationHistoryPagingSlicedResult.js'
import { RevocationRequest } from '../../generated-definitions/RevocationRequest.js'
import { RevocationResult } from '../../generated-definitions/RevocationResult.js'

export class RevocationAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Delete revocation config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:REVOCATION, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteRevocationConfig(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/revocation/config'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get revocation configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:REVOCATION, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Revocation config&lt;/li&gt;&lt;/ul&gt;
   */
  getRevocationConfig(): Promise<IResponseWithSync<RevocationConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/revocation/config'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, RevocationConfigInfo, 'RevocationConfigInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update revocation configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:REVOCATION, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Revocation config&lt;/li&gt;&lt;/ul&gt;
   */
  updateRevocationConfig(data: RevocationConfigUpdate): Promise<IResponse<RevocationConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/revocation/config'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, RevocationConfigInfo, 'RevocationConfigInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Query revocation histories in a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:REVOCATION, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: query revocation history&lt;/li&gt;&lt;/ul&gt;
   */
  getRevocationHistory(queryParams?: {
    endTime?: string | null
    limit?: number
    offset?: number
    source?: 'DLC' | 'IAP' | 'ORDER' | 'OTHER'
    startTime?: string | null
    status?: 'FAIL' | 'SUCCESS'
    transactionId?: string | null
    userId?: string | null
  }): Promise<IResponseWithSync<RevocationHistoryPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/revocation/history'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, RevocationHistoryPagingSlicedResult, 'RevocationHistoryPagingSlicedResult')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Do revocation.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:USER:{userId}:REVOCATION, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revocation results&lt;/li&gt;&lt;/ul&gt;
   */
  updateRevocation_ByUserId(userId: string, data: RevocationRequest): Promise<IResponse<RevocationResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/revocation'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, RevocationResult, 'RevocationResult')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
