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
import { Policies$ } from './endpoints/Policies$'
import { RetrievePolicyPublicResponseArray } from './definitions/RetrievePolicyPublicResponseArray'

export function PoliciesApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  async function getPolicy_ByNamespace(queryParams?: {
    policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE'
    tags?: string | null
    defaultOnEmpty?: boolean | null
    alwaysIncludeDefault?: boolean | null
  }): Promise<RetrievePolicyPublicResponseArray> {
    const $ = new Policies$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPolicy_ByNamespace(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getPolicyCountry_ByCountryCode(
    countryCode: string,
    queryParams?: {
      policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE'
      tags?: string | null
      defaultOnEmpty?: boolean | null
    }
  ): Promise<RetrievePolicyPublicResponseArray> {
    const $ = new Policies$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPolicyCountry_ByCountryCode(countryCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getPolicyCountry_ByCountryCode_ByNS(
    countryCode: string,
    queryParams?: {
      policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE'
      tags?: string | null
      defaultOnEmpty?: boolean | null
      alwaysIncludeDefault?: boolean | null
    }
  ): Promise<RetrievePolicyPublicResponseArray> {
    const $ = new Policies$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPolicyCountry_ByCountryCode_ByNS(countryCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPolicy_ByNamespace,
    getPolicyCountry_ByCountryCode,
    getPolicyCountry_ByCountryCode_ByNS
  }
}
