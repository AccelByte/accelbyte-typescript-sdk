/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { RevocationConfigInfo } from '../../generated-definitions/RevocationConfigInfo.js'
import { RevocationConfigUpdate } from '../../generated-definitions/RevocationConfigUpdate.js'
import { RevocationHistoryPagingSlicedResult } from '../../generated-definitions/RevocationHistoryPagingSlicedResult.js'
import { RevocationRequest } from '../../generated-definitions/RevocationRequest.js'
import { RevocationResult } from '../../generated-definitions/RevocationResult.js'

export class RevocationAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * Delete revocation config.
   */
  deleteRevocationConfig(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/revocation/config'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get revocation configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Revocation config&lt;/li&gt;&lt;/ul&gt;
   */
  getRevocationConfig(): Promise<IResponse<RevocationConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/revocation/config'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, RevocationConfigInfo, 'RevocationConfigInfo')
  }

  /**
   * Update revocation configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Revocation config&lt;/li&gt;&lt;/ul&gt;
   */
  updateRevocationConfig(data: RevocationConfigUpdate): Promise<IResponse<RevocationConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/revocation/config'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, RevocationConfigInfo, 'RevocationConfigInfo')
  }

  /**
   * Query revocation histories in a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: query revocation history&lt;/li&gt;&lt;/ul&gt;
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
  }): Promise<IResponse<RevocationHistoryPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/revocation/history'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      RevocationHistoryPagingSlicedResult,
      'RevocationHistoryPagingSlicedResult'
    )
  }

  /**
   * Do revocation.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revocation results&lt;/li&gt;&lt;/ul&gt;
   */
  updateRevocation_ByUserId(userId: string, data: RevocationRequest): Promise<IResponse<RevocationResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/revocation'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, RevocationResult, 'RevocationResult')
  }
}
