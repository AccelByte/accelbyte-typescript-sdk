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
import { AdminUserEligibilitiesAdmin$ } from './endpoints/AdminUserEligibilitiesAdmin$.js'
import { RetrieveUserEligibilitiesIndirectResponse } from '../generated-definitions/RetrieveUserEligibilitiesIndirectResponse.js'

export function AdminUserEligibilitiesAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Retrieve the active policies and its conformance status by user.&lt;br&gt;This process only supports cross-namespace checking between game namespace and publisher namespace , that means if the active policy already accepted by the same user in publisher namespace, then it will also be considered as eligible in non-publisher namespace.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEligibilities_ByUserId(
    userId: string,
    queryParams: { clientId: string | null; countryCode: string | null; publisherUserId?: string | null }
  ): Promise<RetrieveUserEligibilitiesIndirectResponse> {
    const $ = new AdminUserEligibilitiesAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getEligibilities_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getEligibilities_ByUserId
  }
}
