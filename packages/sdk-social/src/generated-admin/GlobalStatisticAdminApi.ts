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
import { GlobalStatItemInfo } from '../generated-definitions/GlobalStatItemInfo.js'
import { GlobalStatItemPagingSlicedResult } from '../generated-definitions/GlobalStatItemPagingSlicedResult.js'
import { GlobalStatisticAdmin$ } from './endpoints/GlobalStatisticAdmin$.js'

export function GlobalStatisticAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * List global statItems by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STATITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  async function getGlobalstatitems(queryParams?: {
    limit?: number
    offset?: number
    statCodes?: string | null
  }): Promise<GlobalStatItemPagingSlicedResult> {
    const $ = new GlobalStatisticAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGlobalstatitems(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get global statItem by stat code.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STATITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: global stat item&lt;/li&gt;&lt;/ul&gt;
   */
  async function getGlobalstatitem_ByStatCode(statCode: string): Promise<GlobalStatItemInfo> {
    const $ = new GlobalStatisticAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGlobalstatitem_ByStatCode(statCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getGlobalstatitems,
    getGlobalstatitem_ByStatCode
  }
}
