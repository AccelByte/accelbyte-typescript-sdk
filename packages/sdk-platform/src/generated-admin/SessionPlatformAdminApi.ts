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
import { SessionPlatformAdmin$ } from './endpoints/SessionPlatformAdmin$.js'
import { XblUserSessionRequest } from '../generated-definitions/XblUserSessionRequest.js'

export function SessionPlatformAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This API is used to register/update a session on xbox.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:USER:{userId}:INTEGRATION, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateSessionXbl_ByUserId(userId: string, data: XblUserSessionRequest): Promise<unknown> {
    const $ = new SessionPlatformAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateSessionXbl_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    updateSessionXbl_ByUserId
  }
}
