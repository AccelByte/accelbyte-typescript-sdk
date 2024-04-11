/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AdminReportsAdmin$ } from './endpoints/AdminReportsAdmin$.js'
import { ReportListResponse } from '../generated-definitions/ReportListResponse.js'
import { SubmitReportRequest } from '../generated-definitions/SubmitReportRequest.js'
import { SubmitReportResponse } from '../generated-definitions/SubmitReportResponse.js'

export function AdminReportsAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:TICKET [READ] Reports list can be ordered by: - createdAt - updatedAt
   */
  async function getReports(queryParams?: {
    category?: string | null
    limit?: number
    offset?: number
    reportedUserId?: string | null
    sortBy?: string | null
  }): Promise<ReportListResponse> {
    const $ = new AdminReportsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getReports(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Submit a report and will return ticket for reported object. New ticket will be created if no OPEN ticket present for reported object (based by objectId and objectType) in a namespace. Admin can only submit report once for each different user / object reported in the same OPEN ticket. Reporting the same user / object in the same OPEN ticket will return HTTP code 409 (conflict). Fill the &#39;reason&#39; field with a &#39;reason title&#39; Supported category: - UGC - USER - CHAT - EXTENSION
   */
  async function createReport(data: SubmitReportRequest): Promise<SubmitReportResponse> {
    const $ = new AdminReportsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createReport(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getReports,
    createReport
  }
}
