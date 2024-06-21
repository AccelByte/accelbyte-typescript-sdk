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
import { CreateBasePolicyRequest } from '../generated-definitions/CreateBasePolicyRequest.js'
import { CreateBasePolicyResponse } from '../generated-definitions/CreateBasePolicyResponse.js'
import { RetrieveBasePolicyResponse } from '../generated-definitions/RetrieveBasePolicyResponse.js'
import { RetrieveBasePolicyResponseArray } from '../generated-definitions/RetrieveBasePolicyResponseArray.js'
import { RetrievePolicyResponse } from '../generated-definitions/RetrievePolicyResponse.js'
import { RetrievePolicyTypeResponseArray } from '../generated-definitions/RetrievePolicyTypeResponseArray.js'
import { UpdateBasePolicyRequest } from '../generated-definitions/UpdateBasePolicyRequest.js'
import { UpdateBasePolicyResponse } from '../generated-definitions/UpdateBasePolicyResponse.js'
import { BaseLegalPoliciesAdmin$ } from './endpoints/BaseLegalPoliciesAdmin$.js'

export function BaseLegalPoliciesAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Retrieve all supported policy types.
   */
  async function getPolicyTypes(queryParams: { limit: number; offset?: number }): Promise<RetrievePolicyTypeResponseArray> {
    const $ = new BaseLegalPoliciesAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPolicyTypes(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve all base policies.
   */
  async function getBasePolicies(queryParams?: { visibleOnly?: boolean | null }): Promise<RetrieveBasePolicyResponseArray> {
    const $ = new BaseLegalPoliciesAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getBasePolicies(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create a legal policy.
   */
  async function createBasePolicy(data: CreateBasePolicyRequest): Promise<CreateBasePolicyResponse> {
    const $ = new BaseLegalPoliciesAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createBasePolicy(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve a base policy.
   */
  async function getBasePolicy_ByBasePolicyId(basePolicyId: string): Promise<RetrieveBasePolicyResponse> {
    const $ = new BaseLegalPoliciesAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getBasePolicy_ByBasePolicyId(basePolicyId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update an existing base policy.
   */
  async function patchBasePolicy_ByBasePolicyId(basePolicyId: string, data: UpdateBasePolicyRequest): Promise<UpdateBasePolicyResponse> {
    const $ = new BaseLegalPoliciesAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchBasePolicy_ByBasePolicyId(basePolicyId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve a Base Legal Policy based on a Particular Country.
   */
  async function getCountry_ByBasePolicyId_ByCountryCode(basePolicyId: string, countryCode: string): Promise<RetrievePolicyResponse> {
    const $ = new BaseLegalPoliciesAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
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
