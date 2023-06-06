/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { PublicReports$ } from './endpoints/PublicReports$.js'
import { SubmitReportRequest } from './definitions/SubmitReportRequest.js'
import { SubmitReportResponse } from './definitions/SubmitReportResponse.js'

export function PublicReportsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * User need to be authenticated to access this endpoint. Submit a report and will return ticket for reported object. New ticket will be created if no OPEN ticket present for reported object (based by objectId and objectType) in a namespace. User can only submit report once for each different user / object reported in the same OPEN ticket. Reporting the same user / object in the same OPEN ticket will return HTTP code 409 (conflict). Fill the &#39;reason&#39; field with a &#39;reason title&#39; Supported category: &lt;ul&gt;&lt;li&gt;UGC&lt;/li&gt;&lt;li&gt;USER&lt;/li&gt;&lt;li&gt;CHAT&lt;/li&gt;&lt;li&gt;EXTENSION&lt;/li&gt;&lt;/ul&gt;
   */
  async function createReport(data: SubmitReportRequest): Promise<SubmitReportResponse> {
    const $ = new PublicReports$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createReport(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createReport
  }
}
