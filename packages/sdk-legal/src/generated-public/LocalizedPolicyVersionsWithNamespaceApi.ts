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
import { LocalizedPolicyVersionsWithNamespace$ } from './endpoints/LocalizedPolicyVersionsWithNamespace$.js'
import { RetrieveLocalizedPolicyVersionPublicResponse } from '../generated-definitions/RetrieveLocalizedPolicyVersionPublicResponse.js'

export function LocalizedPolicyVersionsWithNamespaceApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Retrieve specific localized policy version including the policy version and base policy version where the localized policy version located.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/ul&gt;
   */
  async function getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(
    localizedPolicyVersionId: string
  ): Promise<RetrieveLocalizedPolicyVersionPublicResponse> {
    const $ = new LocalizedPolicyVersionsWithNamespace$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getLocalizedPolicyVersion_ByLocalizedPolicyVersionId
  }
}
