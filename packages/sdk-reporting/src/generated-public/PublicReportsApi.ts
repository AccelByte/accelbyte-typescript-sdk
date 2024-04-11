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
import { PublicReports$ } from './endpoints/PublicReports$.js'
import { SubmitReportRequest } from '../generated-definitions/SubmitReportRequest.js'
import { SubmitReportResponse } from '../generated-definitions/SubmitReportResponse.js'

export function PublicReportsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * User need to be authenticated to access this endpoint. Submit a report and will return ticket for reported object. New ticket will be created if no OPEN ticket present for reported object (based by objectId and objectType) in a namespace. User can only submit report once for each different user / object reported in the same OPEN ticket. Reporting the same user / object in the same OPEN ticket will return HTTP code 409 (conflict). Fill the &#39;reason&#39; field with a &#39;reason title&#39; Supported category: - UGC - USER - CHAT - EXTENSION
   */
  async function createReport(data: SubmitReportRequest): Promise<SubmitReportResponse> {
    const $ = new PublicReports$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createReport(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createReport
  }
}
