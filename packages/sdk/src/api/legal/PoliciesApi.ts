/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { Policies$ } from '@accelbyte/sdk/generated-public/legal/Policies$'
import { Network } from '@accelbyte/sdk/utils/Network'

export class PoliciesApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * GET [/agreement/public/policies/namespaces/{namespace}/countries/{countryCode}](api)
   *
   * Retrieve all active latest policies based on a namespace and country.
   *
   * - _Leave the policyType empty if you want to be responded with all policy type_
   * - _Fill the tags if you want to filter the responded policy by tags_
   * - _Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist_
   * - _Fill the alwaysIncludeDefault with true if you want to be responded with always include default policy. If there are duplicate policies (default policies and country specific policies with same base policy) it'll include policy with same country code, for example:_
   *
   * - Document 1 (default): Region US (default), UA
   * - Document 2 (default): Region US (default)
   * - Document 3 (default): Region US (default)
   * - User: Region UA
   * - Query: alwaysIncludeDefault: true
   * - Response: Document 1 (UA), Document 2 (US), Document 3 (US)
   */
  fetchPoliciesByCountry = ({
    countryCode,
    queryParams
  }: {
    countryCode: string
    queryParams: Parameters<Policies$['fetchPolicyCountry_ByCountryCode_ByNS']>[1]
  }) => {
    return this.newInstance().fetchPolicyCountry_ByCountryCode_ByNS(countryCode, queryParams)
  }

  /**
   * GET [/agreement/public/policies/countries/{countryCode}](api)
   *
   * Retrieve all active latest policies based on country from all namespaces.
   * - _Leave the policyType empty if you want to be responded with all policy type_
   * - _Fill the tags if you want to filter the responded policy by tags_
   * - _Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist_
   */
  fetchAllPoliciesByCountry = ({
    countryCode,
    queryParams
  }: {
    countryCode: string
    queryParams?: Parameters<Policies$['fetchPolicyCountry_ByCountryCode']>[1]
  }) => {
    return this.newInstance().fetchPolicyCountry_ByCountryCode(countryCode, queryParams)
  }

  private newInstance() {
    return new Policies$(Network.create(this.conf), this.namespace, this.cache)
  }
}
