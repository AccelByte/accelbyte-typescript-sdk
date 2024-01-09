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
import { Section$ } from './endpoints/Section$.js'
import { SectionInfoArray } from './definitions/SectionInfoArray.js'

export function SectionApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This API is used to list active section contents.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=NAMESPACE:{namespace}:USER:{userId}:STORE, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store sections)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store sections)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: active section contents&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSections_ByUserId(
    userId: string,
    queryParams?: {
      autoCalcEstimatedPrice?: boolean | null
      language?: string | null
      region?: string | null
      storeId?: string | null
      viewId?: string | null
    }
  ): Promise<SectionInfoArray> {
    const $ = new Section$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSections_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getSections_ByUserId
  }
}
