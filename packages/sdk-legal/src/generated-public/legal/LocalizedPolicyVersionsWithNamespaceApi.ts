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
import { LocalizedPolicyVersionsWithNamespace$ } from './endpoints/LocalizedPolicyVersionsWithNamespace$.js'
import { RetrieveLocalizedPolicyVersionPublicResponse } from './definitions/RetrieveLocalizedPolicyVersionPublicResponse.js'

export function LocalizedPolicyVersionsWithNamespaceApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Retrieve specific localized policy version including the policy version and base policy version where the localized policy version located.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/ul&gt;
   */
  async function getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(
    localizedPolicyVersionId: string
  ): Promise<RetrieveLocalizedPolicyVersionPublicResponse> {
    const $ = new LocalizedPolicyVersionsWithNamespace$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getLocalizedPolicyVersion_ByLocalizedPolicyVersionId
  }
}
