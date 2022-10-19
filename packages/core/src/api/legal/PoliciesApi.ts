/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { Policies$ } from '@od-web-sdk/generated-public/legal/Policies$'
import { Network } from '@od-web-sdk/utils/Network'

export class PoliciesApi {
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = true) {}

  newInstance() {
    return new Policies$(Network.create(this.conf), this.namespace, this.cache)
  }

  fetchPoliciesByCountry({
    countryCode,
    queryParams
  }: {
    countryCode: string
    queryParams?: {
      policyType?: string | null
      tags?: string | null
      defaultOnEmpty?: boolean | null
      alwaysIncludeDefault?: boolean | null
    }
  }) {
    return this.newInstance().fetchPublicPoliciesNamespacesByNamespaceCountriesByCountrycode(countryCode, queryParams)
  }
}
