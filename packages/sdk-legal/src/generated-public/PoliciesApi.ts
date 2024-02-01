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
import { Policies$ } from './endpoints/Policies$.js'
import { RetrievePolicyPublicResponseArray } from '../generated-definitions/RetrievePolicyPublicResponseArray.js'

export function PoliciesApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Retrieve all active latest policies based on a namespace and country. The country will be read from user token.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Leave the policyType empty if you want to be responded with all policy type&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the tags if you want to filter the responded policy by tags&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the alwaysIncludeDefault with true if you want to be responded with always include default policy. If there are duplicate policies (default policies and country specific policies with same base policy) it&#39;ll include policy with same country code, for example:&lt;ul&gt;&lt;li&gt;Document 1 (default): Region US (default), UA&lt;/li&gt;&lt;li&gt;Document 2 (default): Region US (default)&lt;/li&gt;&lt;li&gt;Document 3 (default): Region US (default)&lt;/li&gt;&lt;li&gt;User: Region UA&lt;/li&gt;&lt;li&gt;Query: alwaysIncludeDefault: true&lt;/li&gt;&lt;li&gt;Response: Document 1 (UA), Document 2 (US), Document 3 (US)&lt;/li&gt;&lt;/ul&gt;&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Required permission: login user &lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPolicy_ByNamespace(queryParams?: {
    alwaysIncludeDefault?: boolean | null
    defaultOnEmpty?: boolean | null
    policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE'
    tags?: string | null
  }): Promise<RetrievePolicyPublicResponseArray> {
    const $ = new Policies$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getPolicy_ByNamespace(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve all active latest policies based on a country.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Leave the policyType empty if you want to be responded with all policy type&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the tags if you want to filter the responded policy by tags&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPolicyCountry_ByCountryCode(
    countryCode: string,
    queryParams?: {
      defaultOnEmpty?: boolean | null
      policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE'
      tags?: string | null
    }
  ): Promise<RetrievePolicyPublicResponseArray> {
    const $ = new Policies$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getPolicyCountry_ByCountryCode(countryCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve all active latest policies based on a namespace and country.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Leave the policyType empty if you want to be responded with all policy type&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the tags if you want to filter the responded policy by tags&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the alwaysIncludeDefault with true if you want to be responded with always include default policy. If there are duplicate policies (default policies and country specific policies with same base policy) it&#39;ll include policy with same country code, for example:&lt;ul&gt;&lt;li&gt;Document 1 (default): Region US (default), UA&lt;/li&gt;&lt;li&gt;Document 2 (default): Region US (default)&lt;/li&gt;&lt;li&gt;Document 3 (default): Region US (default)&lt;/li&gt;&lt;li&gt;User: Region UA&lt;/li&gt;&lt;li&gt;Query: alwaysIncludeDefault: true&lt;/li&gt;&lt;li&gt;Response: Document 1 (UA), Document 2 (US), Document 3 (US)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPolicyCountry_ByCountryCode_ByNS(
    countryCode: string,
    queryParams?: {
      alwaysIncludeDefault?: boolean | null
      defaultOnEmpty?: boolean | null
      policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE'
      tags?: string | null
    }
  ): Promise<RetrievePolicyPublicResponseArray> {
    const $ = new Policies$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
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
