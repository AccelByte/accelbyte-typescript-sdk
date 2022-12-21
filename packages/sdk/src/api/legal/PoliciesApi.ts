/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
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
   * Retrieve all active latest policies based on a namespace and country.<br>Other detail info: <ul><li><i>Leave the policyType empty if you want to be responded with all policy type</i></li><li><i>Fill the tags if you want to filter the responded policy by tags</i></li><li><i>Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist</i></li><li><i>Fill the alwaysIncludeDefault with true if you want to be responded with always include default policy. If there are duplicate policies (default policies and country specific policies with same base policy) it'll include policy with same country code, for example:<ul><li>Document 1 (default): Region US (default), UA</li><li>Document 2 (default): Region US (default)</li><li>Document 3 (default): Region US (default)</li><li>User: Region UA</li><li>Query: alwaysIncludeDefault: true</li><li>Response: Document 1 (UA), Document 2 (US), Document 3 (US)</li></ul>
   */
  fetchPoliciesByCountry({
    countryCode,
    queryParams
  }: {
    countryCode: string
    queryParams: Parameters<Policies$['fetchPublicPoliciesNamespacesByNamespaceCountriesByCountrycode']>[1]
  }) {
    return this.newInstance().fetchPublicPoliciesNamespacesByNamespaceCountriesByCountrycode(countryCode, queryParams)
  }

  /**
   * Retrieve all active latest policies based on country from all namespaces.<br>Other detail info: <ul><li><i>Leave the policyType empty if you want to be responded with all policy type</i></li><li><i>Fill the tags if you want to filter the responded policy by tags</i></li><li><i>Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist</i></li></ul>
   */
  fetchAllPoliciesByCountry({
    countryCode,
    queryParams
  }: {
    countryCode: string
    queryParams?: Parameters<Policies$['fetchPublicPoliciesCountriesByCountrycode']>[1]
  }) {
    return this.newInstance().fetchPublicPoliciesCountriesByCountrycode(countryCode, queryParams)
  }

  private newInstance() {
    return new Policies$(Network.create(this.conf), this.namespace, this.cache)
  }
}
