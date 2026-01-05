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
import { z } from 'zod'
import { CreateBasePolicyRequestV2 } from '../../generated-definitions/CreateBasePolicyRequestV2.js'
import { CreateBasePolicyResponse } from '../../generated-definitions/CreateBasePolicyResponse.js'
import { CreatePolicyRequest } from '../../generated-definitions/CreatePolicyRequest.js'
import { CreatePolicyResponse } from '../../generated-definitions/CreatePolicyResponse.js'
import { RetrieveBasePolicyResponse } from '../../generated-definitions/RetrieveBasePolicyResponse.js'
import { RetrieveBasePolicyResponseArray } from '../../generated-definitions/RetrieveBasePolicyResponseArray.js'
import { RetrievePoliciesFromBasePolicyResponseArray } from '../../generated-definitions/RetrievePoliciesFromBasePolicyResponseArray.js'
import { RetrievePolicyResponse } from '../../generated-definitions/RetrievePolicyResponse.js'
import { RetrievePolicyTypeResponseArray } from '../../generated-definitions/RetrievePolicyTypeResponseArray.js'
import { UpdateBasePolicyRequestV2 } from '../../generated-definitions/UpdateBasePolicyRequestV2.js'
import { UpdateBasePolicyResponse } from '../../generated-definitions/UpdateBasePolicyResponse.js'

export class BaseLegalPoliciesWithNamespaceAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Retrieve all supported policy types.
   */
  getPolicyTypes(queryParams: { limit: number; offset?: number }): Promise<Response<RetrievePolicyTypeResponseArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/policy-types'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RetrievePolicyTypeResponseArray,
      'RetrievePolicyTypeResponseArray'
    )
  }
  /**
   * Retrieve all base policies in the namespace.
   */
  getBasePolicies(queryParams?: { visibleOnly?: boolean | null }): Promise<Response<RetrieveBasePolicyResponseArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/base-policies'.replace('{namespace}', this.namespace)
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
  createBasePolicy(data: CreateBasePolicyRequestV2): Promise<Response<CreateBasePolicyResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/base-policies'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CreateBasePolicyResponse,
      'CreateBasePolicyResponse'
    )
  }
  /**
   * Delete base legal policy.Can only be deleted if match these criteria:&lt;br&gt;&lt;ul&gt;&lt;li&gt;Base policy don&#39;t have published policy version&lt;/li&gt;&lt;li&gt;Policy version under base policy has never been accepted by any user&lt;/li&gt;&lt;/ul&gt;
   */
  deleteBasePolicy_ByBasePolicyId(basePolicyId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/base-policies/{basePolicyId}'
      .replace('{namespace}', this.namespace)
      .replace('{basePolicyId}', basePolicyId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Retrieve a base policy.
   */
  getBasePolicy_ByBasePolicyId(basePolicyId: string): Promise<Response<RetrieveBasePolicyResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/base-policies/{basePolicyId}'
      .replace('{namespace}', this.namespace)
      .replace('{basePolicyId}', basePolicyId)
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
  patchBasePolicy_ByBasePolicyId(basePolicyId: string, data: UpdateBasePolicyRequestV2): Promise<Response<UpdateBasePolicyResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/base-policies/{basePolicyId}'
      .replace('{namespace}', this.namespace)
      .replace('{basePolicyId}', basePolicyId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UpdateBasePolicyResponse,
      'UpdateBasePolicyResponse'
    )
  }
  /**
   * Retrieve all policies from Base Legal Policy.
   */
  getPolicies_ByBasePolicyId(basePolicyId: string): Promise<Response<RetrievePoliciesFromBasePolicyResponseArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/base-policies/{basePolicyId}/policies'
      .replace('{namespace}', this.namespace)
      .replace('{basePolicyId}', basePolicyId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RetrievePoliciesFromBasePolicyResponseArray,
      'RetrievePoliciesFromBasePolicyResponseArray'
    )
  }
  /**
   * Create policy under base policy.&lt;br&gt;Note:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;i&gt;countryType&lt;/i&gt; field only accept COUNTRY or COUNTRY_GROUP.&lt;/li&gt;&lt;li&gt;COUNTRY_GROUP policy requires the &lt;i&gt;countryGroupName&lt;/i&gt; and &lt;i&gt;countries&lt;/i&gt; fields to be provided.&lt;/li&gt;&lt;/ul&gt;&lt;li&gt;policy with COUNTRY_GROUP type include multiple countries and apply the same policy across the entire list of countries&lt;/li&gt;
   */
  createPolicy_ByBasePolicyId(basePolicyId: string, data: CreatePolicyRequest): Promise<Response<CreatePolicyResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/base-policies/{basePolicyId}/policies'
      .replace('{namespace}', this.namespace)
      .replace('{basePolicyId}', basePolicyId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreatePolicyResponse, 'CreatePolicyResponse')
  }
  /**
   * Retrieve a Base Legal Policy based on a Particular Country.
   */
  getCountry_ByBasePolicyId_ByCountryCode(basePolicyId: string, countryCode: string): Promise<Response<RetrievePolicyResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/base-policies/{basePolicyId}/countries/{countryCode}'
      .replace('{namespace}', this.namespace)
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
