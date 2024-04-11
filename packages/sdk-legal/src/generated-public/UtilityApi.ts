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
import { LegalReadinessStatusResponse } from '../generated-definitions/LegalReadinessStatusResponse.js'
import { Utility$ } from './endpoints/Utility$.js'

export function UtilityApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Readiness status defined as at least one legal basePolicy is present and having active basePolicy.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getReadiness(): Promise<LegalReadinessStatusResponse> {
    const $ = new Utility$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getReadiness()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getReadiness
  }
}
