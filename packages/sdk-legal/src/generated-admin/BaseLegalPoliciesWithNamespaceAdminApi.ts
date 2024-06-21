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
import { CreateBasePolicyRequestV2 } from '../generated-definitions/CreateBasePolicyRequestV2.js'
import { CreateBasePolicyResponse } from '../generated-definitions/CreateBasePolicyResponse.js'
import { RetrieveBasePolicyResponse } from '../generated-definitions/RetrieveBasePolicyResponse.js'
import { RetrieveBasePolicyResponseArray } from '../generated-definitions/RetrieveBasePolicyResponseArray.js'
import { RetrievePolicyResponse } from '../generated-definitions/RetrievePolicyResponse.js'
import { RetrievePolicyTypeResponseArray } from '../generated-definitions/RetrievePolicyTypeResponseArray.js'
import { UpdateBasePolicyRequestV2 } from '../generated-definitions/UpdateBasePolicyRequestV2.js'
import { UpdateBasePolicyResponse } from '../generated-definitions/UpdateBasePolicyResponse.js'
import { BaseLegalPoliciesWithNamespaceAdmin$ } from './endpoints/BaseLegalPoliciesWithNamespaceAdmin$.js'

export function BaseLegalPoliciesWithNamespaceAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Retrieve all supported policy types.
   */
  async function getPolicyTypes(queryParams: { limit: number; offset?: number }): Promise<RetrievePolicyTypeResponseArray> {
    const $ = new BaseLegalPoliciesWithNamespaceAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPolicyTypes(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve all base policies in the namespace.
   */
  async function getBasePolicies(queryParams?: { visibleOnly?: boolean | null }): Promise<RetrieveBasePolicyResponseArray> {
    const $ = new BaseLegalPoliciesWithNamespaceAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getBasePolicies(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create a legal policy.
   */
  async function createBasePolicy(data: CreateBasePolicyRequestV2): Promise<CreateBasePolicyResponse> {
    const $ = new BaseLegalPoliciesWithNamespaceAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createBasePolicy(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve a base policy.
   */
  async function getBasePolicy_ByBasePolicyId(basePolicyId: string): Promise<RetrieveBasePolicyResponse> {
    const $ = new BaseLegalPoliciesWithNamespaceAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getBasePolicy_ByBasePolicyId(basePolicyId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update an existing base policy.
   */
  async function patchBasePolicy_ByBasePolicyId(basePolicyId: string, data: UpdateBasePolicyRequestV2): Promise<UpdateBasePolicyResponse> {
    const $ = new BaseLegalPoliciesWithNamespaceAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchBasePolicy_ByBasePolicyId(basePolicyId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve a Base Legal Policy based on a Particular Country.
   */
  async function getCountry_ByBasePolicyId_ByCountryCode(basePolicyId: string, countryCode: string): Promise<RetrievePolicyResponse> {
    const $ = new BaseLegalPoliciesWithNamespaceAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getCountry_ByBasePolicyId_ByCountryCode(basePolicyId, countryCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPolicyTypes,
    getBasePolicies,
    createBasePolicy,
    getBasePolicy_ByBasePolicyId,
    patchBasePolicy_ByBasePolicyId,
    getCountry_ByBasePolicyId_ByCountryCode
  }
}
