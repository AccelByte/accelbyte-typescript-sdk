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
import { PoliciesAdmin$ } from './endpoints/PoliciesAdmin$.js'
import { RetrievePolicyResponseArray } from '../generated-definitions/RetrievePolicyResponseArray.js'
import { UpdatePolicyRequest } from '../generated-definitions/UpdatePolicyRequest.js'

export function PoliciesAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Update country-specific policy.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:*:LEGAL&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchPolicy_ByPolicyId(policyId: string, data: UpdatePolicyRequest): Promise<unknown> {
    const $ = new PoliciesAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchPolicy_ByPolicyId(policyId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update a policy to be the default.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:*:LEGAL&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchDefault_ByPolicyId(policyId: string): Promise<unknown> {
    const $ = new PoliciesAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchDefault_ByPolicyId(policyId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve all active policies based on a country.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:*:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPolicyCountry_ByCountryCode(countryCode: string): Promise<RetrievePolicyResponseArray> {
    const $ = new PoliciesAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPolicyCountry_ByCountryCode(countryCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    patchPolicy_ByPolicyId,
    patchDefault_ByPolicyId,
    getPolicyCountry_ByCountryCode
  }
}
