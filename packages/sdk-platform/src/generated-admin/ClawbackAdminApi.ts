/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { ClawbackAdmin$ } from './endpoints/ClawbackAdmin$.js'
import { IapClawbackPagingSlicedResult } from '../generated-definitions/IapClawbackPagingSlicedResult.js'
import { StreamEvent } from '../generated-definitions/StreamEvent.js'

export function ClawbackAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Query clawback history.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:IAP:CLAWBACK, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated clawback history&lt;/li&gt;&lt;/ul&gt;
   */
  async function getIapClawbackHistories(queryParams?: {
    endTime?: string | null
    eventType?: 'CHARGEBACK' | 'CHARGEBACK_REVERSED' | 'OTHER' | 'REFUND'
    externalOrderId?: string | null
    limit?: number
    offset?: number
    startTime?: string | null
    status?: 'FAIL' | 'IGNORED' | 'INIT' | 'SUCCESS'
    userId?: string | null
  }): Promise<IapClawbackPagingSlicedResult> {
    const $ = new ClawbackAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getIapClawbackHistories(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Mock Sync PlayStation Clawback event..&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:IAP:CLAWBACK, action=1(CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function createIapClawbackPlaystationMock(data: StreamEvent): Promise<unknown> {
    const $ = new ClawbackAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createIapClawbackPlaystationMock(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getIapClawbackHistories,
    createIapClawbackPlaystationMock
  }
}
