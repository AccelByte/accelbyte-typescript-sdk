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
import { CreatePolicyVersionRequest } from '../generated-definitions/CreatePolicyVersionRequest.js'
import { CreatePolicyVersionResponse } from '../generated-definitions/CreatePolicyVersionResponse.js'
import { PolicyVersionsWithNamespaceAdmin$ } from './endpoints/PolicyVersionsWithNamespaceAdmin$.js'
import { RetrievePolicyVersionResponseArray } from '../generated-definitions/RetrievePolicyVersionResponseArray.js'
import { UpdatePolicyVersionRequest } from '../generated-definitions/UpdatePolicyVersionRequest.js'
import { UpdatePolicyVersionResponse } from '../generated-definitions/UpdatePolicyVersionResponse.js'

export function PolicyVersionsWithNamespaceAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Retrieve a version of a particular country specific policy. If version is not provided, the Legal Service will assume caller requesting all versions from country-specific policy.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:*:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getVersions_ByPolicyId(
    policyId: string,
    queryParams?: { versionId?: string | null }
  ): Promise<RetrievePolicyVersionResponseArray> {
    const $ = new PolicyVersionsWithNamespaceAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getVersions_ByPolicyId(policyId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create a version of a particular country-specific policy.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:*:LEGAL&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function createVersion_ByPolicyId(policyId: string, data: CreatePolicyVersionRequest): Promise<CreatePolicyVersionResponse> {
    const $ = new PolicyVersionsWithNamespaceAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createVersion_ByPolicyId(policyId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update a particular policy version.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:*:LEGAL&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchPolicyVersion_ByPolicyVersionId(
    policyVersionId: string,
    data: UpdatePolicyVersionRequest
  ): Promise<UpdatePolicyVersionResponse> {
    const $ = new PolicyVersionsWithNamespaceAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchPolicyVersion_ByPolicyVersionId(policyVersionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Manually publish a version of a particular country-specific policy.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:*:LEGAL&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchLatestPolicy_ByPolicyVersionId(
    policyVersionId: string,
    queryParams?: { shouldNotify?: boolean | null }
  ): Promise<unknown> {
    const $ = new PolicyVersionsWithNamespaceAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchLatestPolicy_ByPolicyVersionId(policyVersionId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getVersions_ByPolicyId,
    createVersion_ByPolicyId,
    patchPolicyVersion_ByPolicyVersionId,
    patchLatestPolicy_ByPolicyVersionId
  }
}
