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
import { UpdatePolicyRequest } from '../generated-definitions/UpdatePolicyRequest.js'
import { PoliciesWithNamespaceAdmin$ } from './endpoints/PoliciesWithNamespaceAdmin$.js'

export function PoliciesWithNamespaceAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Update country-specific policy.
   */
  async function patchPolicy_ByPolicyId(policyId: string, data: UpdatePolicyRequest): Promise<unknown> {
    const $ = new PoliciesWithNamespaceAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchPolicy_ByPolicyId(policyId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update a policy to be the default.
   */
  async function patchDefault_ByPolicyId(policyId: string): Promise<unknown> {
    const $ = new PoliciesWithNamespaceAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchDefault_ByPolicyId(policyId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    patchPolicy_ByPolicyId,
    patchDefault_ByPolicyId
  }
}
