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
import { ClawbackInfo } from '../../generated-definitions/ClawbackInfo.js'
import { IapClawbackPagingSlicedResult } from '../../generated-definitions/IapClawbackPagingSlicedResult.js'
import { StreamEvent } from '../../generated-definitions/StreamEvent.js'

export class ClawbackAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Query clawback history.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:IAP:CLAWBACK, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated clawback history&lt;/li&gt;&lt;/ul&gt;
   */
  getIapClawbackHistories(queryParams?: {
    endTime?: string | null
    eventType?: 'CHARGEBACK' | 'CHARGEBACK_REVERSED' | 'OTHER' | 'REFUND'
    externalOrderId?: string | null
    limit?: number
    offset?: number
    startTime?: string | null
    status?: 'FAIL' | 'IGNORED' | 'INIT' | 'SUCCESS'
    userId?: string | null
  }): Promise<IResponseWithSync<IapClawbackPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/clawback/histories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, IapClawbackPagingSlicedResult, 'IapClawbackPagingSlicedResult')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Mock Sync PlayStation Clawback event..&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:IAP:CLAWBACK, action=1(CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  createIapClawbackPlaystationMock(data: StreamEvent): Promise<IResponse<ClawbackInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/clawback/playstation/mock'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ClawbackInfo, 'ClawbackInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
