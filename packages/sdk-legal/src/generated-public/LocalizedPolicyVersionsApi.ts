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
import { RetrieveLocalizedPolicyVersionPublicResponse } from '../generated-definitions/RetrieveLocalizedPolicyVersionPublicResponse.js'
import { LocalizedPolicyVersions$ } from './endpoints/LocalizedPolicyVersions$.js'

export function LocalizedPolicyVersionsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Retrieve specific localized policy version including the policy version and base policy version where the localized policy version located.<br>Other detail info: <ul></ul>
   */
  async function getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(
    localizedPolicyVersionId: string
  ): Promise<RetrieveLocalizedPolicyVersionPublicResponse> {
    const $ = new LocalizedPolicyVersions$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getLocalizedPolicyVersion_ByLocalizedPolicyVersionId
  }
}
