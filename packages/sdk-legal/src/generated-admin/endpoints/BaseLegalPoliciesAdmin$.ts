/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { CreateBasePolicyRequest } from '../../generated-definitions/CreateBasePolicyRequest.js'
import { CreateBasePolicyResponse } from '../../generated-definitions/CreateBasePolicyResponse.js'
import { RetrieveBasePolicyResponse } from '../../generated-definitions/RetrieveBasePolicyResponse.js'
import { RetrieveBasePolicyResponseArray } from '../../generated-definitions/RetrieveBasePolicyResponseArray.js'
import { RetrievePolicyResponse } from '../../generated-definitions/RetrievePolicyResponse.js'
import { RetrievePolicyTypeResponseArray } from '../../generated-definitions/RetrievePolicyTypeResponseArray.js'
import { UpdateBasePolicyRequest } from '../../generated-definitions/UpdateBasePolicyRequest.js'
import { UpdateBasePolicyResponse } from '../../generated-definitions/UpdateBasePolicyResponse.js'

export class BaseLegalPoliciesAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Retrieve all supported policy types.
   */
  getPolicyTypes(queryParams: { limit: number; offset?: number }): Promise<Response<RetrievePolicyTypeResponseArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/agreement/admin/policy-types'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RetrievePolicyTypeResponseArray,
      'RetrievePolicyTypeResponseArray'
    )
  }
  /**
   * Retrieve all base policies.
   */
  getBasePolicies(queryParams?: { visibleOnly?: boolean | null }): Promise<Response<RetrieveBasePolicyResponseArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/agreement/admin/base-policies'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RetrieveBasePolicyResponseArray,
      'RetrieveBasePolicyResponseArray'
    )
  }
  /**
   * Create a legal policy.&lt;br&gt;Note:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;i&gt;countryType&lt;/i&gt; field only accept COUNTRY or COUNTRY_GROUP.&lt;/li&gt;&lt;li&gt;COUNTRY_GROUP &lt;i&gt;countryType&lt;/i&gt; requires the &lt;i&gt;countryGroupName&lt;/i&gt; and &lt;i&gt;affectedCountries&lt;/i&gt; fields to be provided.&lt;/li&gt;&lt;/ul&gt;&lt;li&gt;policy with COUNTRY_GROUP type include multiple countries and apply the same policy across the entire list of countries&lt;/li&gt;
   */
  createBasePolicy(data: CreateBasePolicyRequest): Promise<Response<CreateBasePolicyResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/base-policies'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CreateBasePolicyResponse,
      'CreateBasePolicyResponse'
    )
  }
  /**
   * Retrieve a base policy.
   */
  getBasePolicy_ByBasePolicyId(basePolicyId: string): Promise<Response<RetrieveBasePolicyResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/base-policies/{basePolicyId}'.replace('{basePolicyId}', basePolicyId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RetrieveBasePolicyResponse,
      'RetrieveBasePolicyResponse'
    )
  }
  /**
   * Update an existing base policy.&lt;br&gt;Note:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;i&gt;countryType&lt;/i&gt; field only accept COUNTRY or COUNTRY_GROUP.&lt;/li&gt;&lt;li&gt;COUNTRY_GROUP &lt;i&gt;countryType&lt;/i&gt; requires the &lt;i&gt;countryGroupName&lt;/i&gt; and &lt;i&gt;affectedCountries&lt;/i&gt; fields to be provided.&lt;/li&gt;&lt;/ul&gt;&lt;li&gt;policy with COUNTRY_GROUP type include multiple countries and apply the same policy across the entire list of countries&lt;/li&gt;
   */
  patchBasePolicy_ByBasePolicyId(basePolicyId: string, data: UpdateBasePolicyRequest): Promise<Response<UpdateBasePolicyResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/base-policies/{basePolicyId}'.replace('{basePolicyId}', basePolicyId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UpdateBasePolicyResponse,
      'UpdateBasePolicyResponse'
    )
  }
  /**
   * Retrieve a Base Legal Policy based on a Particular Country.
   */
  getCountry_ByBasePolicyId_ByCountryCode(basePolicyId: string, countryCode: string): Promise<Response<RetrievePolicyResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/base-policies/{basePolicyId}/countries/{countryCode}'
      .replace('{basePolicyId}', basePolicyId)
      .replace('{countryCode}', countryCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RetrievePolicyResponse,
      'RetrievePolicyResponse'
    )
  }
}
