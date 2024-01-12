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
import { ReportListResponse } from '../../generated-definitions/ReportListResponse.js'
import { SubmitReportRequest } from '../../generated-definitions/SubmitReportRequest.js'
import { SubmitReportResponse } from '../../generated-definitions/SubmitReportResponse.js'

export class AdminReportsAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:TICKET [READ] Reports list can be ordered by: - createdAt - updatedAt
   */
  getReports(queryParams?: {
    category?: string | null
    limit?: number
    offset?: number
    reportedUserId?: string | null
    sortBy?: string | null
  }): Promise<IResponseWithSync<ReportListResponse>> {
    const params = { sortBy: 'createdAt:desc', ...queryParams } as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reports'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ReportListResponse, 'ReportListResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Submit a report and will return ticket for reported object. New ticket will be created if no OPEN ticket present for reported object (based by objectId and objectType) in a namespace. Admin can only submit report once for each different user / object reported in the same OPEN ticket. Reporting the same user / object in the same OPEN ticket will return HTTP code 409 (conflict). Fill the &#39;reason&#39; field with a &#39;reason title&#39; Supported category: - UGC - USER - CHAT - EXTENSION
   */
  createReport(data: SubmitReportRequest): Promise<IResponse<SubmitReportResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reports'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, SubmitReportResponse, 'SubmitReportResponse')
  }
}
