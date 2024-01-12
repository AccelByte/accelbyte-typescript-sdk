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
import { UserAction$ } from './endpoints/UserAction$.js'
import { UserReportRequest } from '../generated-definitions/UserReportRequest.js'

export function UserActionApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This API is used to report a game user.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ACTION&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function createActionReport_ByUserId(userId: string, data: UserReportRequest): Promise<unknown> {
    const $ = new UserAction$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createActionReport_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createActionReport_ByUserId
  }
}
