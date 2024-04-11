/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { RetrievePolicyPublicResponseArray } from '../../generated-definitions/RetrievePolicyPublicResponseArray.js'

export class Policies$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * Retrieve List of Countries that have Active Legal Policies.
   */
  getPoliciesCountriesList(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/policies/countries/list'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Retrieve all active latest policies based on a namespace and country. The country will be read from user token.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Leave the policyType empty if you want to be responded with all policy type&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the tags if you want to filter the responded policy by tags&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the alwaysIncludeDefault with true if you want to be responded with always include default policy. If there are duplicate policies (default policies and country specific policies with same base policy) it&#39;ll include policy with same country code, for example:&lt;ul&gt;&lt;li&gt;Document 1 (default): Region US (default), UA&lt;/li&gt;&lt;li&gt;Document 2 (default): Region US (default)&lt;/li&gt;&lt;li&gt;Document 3 (default): Region US (default)&lt;/li&gt;&lt;li&gt;User: Region UA&lt;/li&gt;&lt;li&gt;Query: alwaysIncludeDefault: true&lt;/li&gt;&lt;li&gt;Response: Document 1 (UA), Document 2 (US), Document 3 (US)&lt;/li&gt;&lt;/ul&gt;&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Required permission: login user &lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  getPolicy_ByNamespace(queryParams?: {
    alwaysIncludeDefault?: boolean | null
    defaultOnEmpty?: boolean | null
    policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE'
    tags?: string | null
  }): Promise<IResponse<RetrievePolicyPublicResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/agreement/public/policies/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      RetrievePolicyPublicResponseArray,
      'RetrievePolicyPublicResponseArray'
    )
  }

  /**
   * Retrieve all active latest policies based on a country.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Leave the policyType empty if you want to be responded with all policy type&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the tags if you want to filter the responded policy by tags&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  getPolicyCountry_ByCountryCode(
    countryCode: string,
    queryParams?: {
      defaultOnEmpty?: boolean | null
      policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE'
      tags?: string | null
    }
  ): Promise<IResponse<RetrievePolicyPublicResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/agreement/public/policies/countries/{countryCode}'.replace('{countryCode}', countryCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      RetrievePolicyPublicResponseArray,
      'RetrievePolicyPublicResponseArray'
    )
  }

  /**
   * Retrieve all active latest policies based on a namespace and country.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Leave the policyType empty if you want to be responded with all policy type&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the tags if you want to filter the responded policy by tags&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the alwaysIncludeDefault with true if you want to be responded with always include default policy. If there are duplicate policies (default policies and country specific policies with same base policy) it&#39;ll include policy with same country code, for example:&lt;ul&gt;&lt;li&gt;Document 1 (default): Region US (default), UA&lt;/li&gt;&lt;li&gt;Document 2 (default): Region US (default)&lt;/li&gt;&lt;li&gt;Document 3 (default): Region US (default)&lt;/li&gt;&lt;li&gt;User: Region UA&lt;/li&gt;&lt;li&gt;Query: alwaysIncludeDefault: true&lt;/li&gt;&lt;li&gt;Response: Document 1 (UA), Document 2 (US), Document 3 (US)&lt;/li&gt;&lt;/ul&gt;
   */
  getPolicyCountry_ByCountryCode_ByNS(
    countryCode: string,
    queryParams?: {
      alwaysIncludeDefault?: boolean | null
      defaultOnEmpty?: boolean | null
      policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE'
      tags?: string | null
    }
  ): Promise<IResponse<RetrievePolicyPublicResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/agreement/public/policies/namespaces/{namespace}/countries/{countryCode}'
      .replace('{namespace}', this.namespace)
      .replace('{countryCode}', countryCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      RetrievePolicyPublicResponseArray,
      'RetrievePolicyPublicResponseArray'
    )
  }
}
