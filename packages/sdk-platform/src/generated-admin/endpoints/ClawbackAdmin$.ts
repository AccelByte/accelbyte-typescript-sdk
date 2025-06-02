/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ClawbackInfo } from '../../generated-definitions/ClawbackInfo.js'
import { IapClawbackPagingSlicedResult } from '../../generated-definitions/IapClawbackPagingSlicedResult.js'
import { StreamEvent } from '../../generated-definitions/StreamEvent.js'
import { XblClawbackEvent } from '../../generated-definitions/XblClawbackEvent.js'

export class ClawbackAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Mock Sync XBox Clawback event.
   */
  createIapClawbackXblMock(data: XblClawbackEvent): Promise<Response<ClawbackInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/clawback/xbl/mock'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ClawbackInfo, 'ClawbackInfo')
  }
  /**
   * Query clawback history.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated clawback history&lt;/li&gt;&lt;/ul&gt;
   */
  getIapClawbackHistories(queryParams?: {
    endTime?: string | null
    eventType?: 'CHARGEBACK' | 'CHARGEBACK_REVERSED' | 'OTHER' | 'REFUND' | 'REVOKED'
    externalOrderId?: string | null
    limit?: number
    offset?: number
    startTime?: string | null
    status?: 'FAIL' | 'IGNORED' | 'INIT' | 'SUCCESS'
    userId?: string | null
  }): Promise<Response<IapClawbackPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/clawback/histories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      IapClawbackPagingSlicedResult,
      'IapClawbackPagingSlicedResult'
    )
  }
  /**
   * Mock Sync PlayStation Clawback event..
   */
  createIapClawbackPlaystationMock(data: StreamEvent): Promise<Response<ClawbackInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/clawback/playstation/mock'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ClawbackInfo, 'ClawbackInfo')
  }
}
