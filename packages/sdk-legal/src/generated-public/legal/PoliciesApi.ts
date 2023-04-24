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

  /**
   * Retrieve all active latest policies based on a namespace and country. The country will be read from user token.<br>Other detail info: <ul><li><i>Leave the policyType empty if you want to be responded with all policy type</i></li><li><i>Fill the tags if you want to filter the responded policy by tags</i></li><li><i>Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist</i></li><li><i>Fill the alwaysIncludeDefault with true if you want to be responded with always include default policy. If there are duplicate policies (default policies and country specific policies with same base policy) it'll include policy with same country code, for example:<ul><li>Document 1 (default): Region US (default), UA</li><li>Document 2 (default): Region US (default)</li><li>Document 3 (default): Region US (default)</li><li>User: Region UA</li><li>Query: alwaysIncludeDefault: true</li><li>Response: Document 1 (UA), Document 2 (US), Document 3 (US)</li></ul></i></li><li><i>Required permission: login user </i></li></ul>
   */
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

  /**
   * Retrieve all active latest policies based on a country.<br>Other detail info: <ul><li><i>Leave the policyType empty if you want to be responded with all policy type</i></li><li><i>Fill the tags if you want to filter the responded policy by tags</i></li><li><i>Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist</i></li></ul>
   */
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

  /**
   * Retrieve all active latest policies based on a namespace and country.<br>Other detail info: <ul><li><i>Leave the policyType empty if you want to be responded with all policy type</i></li><li><i>Fill the tags if you want to filter the responded policy by tags</i></li><li><i>Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist</i></li><li><i>Fill the alwaysIncludeDefault with true if you want to be responded with always include default policy. If there are duplicate policies (default policies and country specific policies with same base policy) it'll include policy with same country code, for example:<ul><li>Document 1 (default): Region US (default), UA</li><li>Document 2 (default): Region US (default)</li><li>Document 3 (default): Region US (default)</li><li>User: Region UA</li><li>Query: alwaysIncludeDefault: true</li><li>Response: Document 1 (UA), Document 2 (US), Document 3 (US)</li></ul>
   */
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
