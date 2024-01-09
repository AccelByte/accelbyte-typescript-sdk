/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { SubmitReportRequest } from '../definitions/SubmitReportRequest.js'
import { SubmitReportResponse } from '../definitions/SubmitReportResponse.js'

export class PublicReports$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * User need to be authenticated to access this endpoint. Submit a report and will return ticket for reported object. New ticket will be created if no OPEN ticket present for reported object (based by objectId and objectType) in a namespace. User can only submit report once for each different user / object reported in the same OPEN ticket. Reporting the same user / object in the same OPEN ticket will return HTTP code 409 (conflict). Fill the &#39;reason&#39; field with a &#39;reason title&#39; Supported category: - UGC - USER - CHAT - EXTENSION
   */
  createReport(data: SubmitReportRequest): Promise<IResponse<SubmitReportResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/public/namespaces/{namespace}/reports'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, SubmitReportResponse, 'SubmitReportResponse')
  }
}
