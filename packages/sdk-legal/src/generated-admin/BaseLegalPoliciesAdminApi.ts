/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { CreateBasePolicyRequest } from '../generated-definitions/CreateBasePolicyRequest.js'
import { CreateBasePolicyResponse } from '../generated-definitions/CreateBasePolicyResponse.js'
import { RetrieveBasePolicyResponse } from '../generated-definitions/RetrieveBasePolicyResponse.js'
import { RetrieveBasePolicyResponseArray } from '../generated-definitions/RetrieveBasePolicyResponseArray.js'
import { RetrievePolicyResponse } from '../generated-definitions/RetrievePolicyResponse.js'
import { RetrievePolicyTypeResponseArray } from '../generated-definitions/RetrievePolicyTypeResponseArray.js'
import { UpdateBasePolicyRequest } from '../generated-definitions/UpdateBasePolicyRequest.js'
import { UpdateBasePolicyResponse } from '../generated-definitions/UpdateBasePolicyResponse.js'
import { BaseLegalPoliciesAdmin$ } from './endpoints/BaseLegalPoliciesAdmin$.js'

export function BaseLegalPoliciesAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getPolicyTypes(queryParams: { limit: number; offset?: number }): Promise<AxiosResponse<RetrievePolicyTypeResponseArray>> {
    const $ = new BaseLegalPoliciesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPolicyTypes(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getBasePolicies(queryParams?: { visibleOnly?: boolean | null }): Promise<AxiosResponse<RetrieveBasePolicyResponseArray>> {
    const $ = new BaseLegalPoliciesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBasePolicies(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createBasePolicy(data: CreateBasePolicyRequest): Promise<AxiosResponse<CreateBasePolicyResponse>> {
    const $ = new BaseLegalPoliciesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createBasePolicy(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getBasePolicy_ByBasePolicyId(basePolicyId: string): Promise<AxiosResponse<RetrieveBasePolicyResponse>> {
    const $ = new BaseLegalPoliciesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBasePolicy_ByBasePolicyId(basePolicyId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchBasePolicy_ByBasePolicyId(
    basePolicyId: string,
    data: UpdateBasePolicyRequest
  ): Promise<AxiosResponse<UpdateBasePolicyResponse>> {
    const $ = new BaseLegalPoliciesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchBasePolicy_ByBasePolicyId(basePolicyId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCountry_ByBasePolicyId_ByCountryCode(
    basePolicyId: string,
    countryCode: string
  ): Promise<AxiosResponse<RetrievePolicyResponse>> {
    const $ = new BaseLegalPoliciesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCountry_ByBasePolicyId_ByCountryCode(basePolicyId, countryCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Retrieve all supported policy types.
     */
    getPolicyTypes,
    /**
     * Retrieve all base policies.
     */
    getBasePolicies,
    /**
     * Create a legal policy.&lt;br&gt;Note:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;i&gt;countryType&lt;/i&gt; field only accept COUNTRY or COUNTRY_GROUP.&lt;/li&gt;&lt;li&gt;COUNTRY_GROUP &lt;i&gt;countryType&lt;/i&gt; requires the &lt;i&gt;countryGroupName&lt;/i&gt; and &lt;i&gt;affectedCountries&lt;/i&gt; fields to be provided.&lt;/li&gt;&lt;/ul&gt;&lt;li&gt;policy with COUNTRY_GROUP type include multiple countries and apply the same policy across the entire list of countries&lt;/li&gt;
     */
    createBasePolicy,
    /**
     * Retrieve a base policy.
     */
    getBasePolicy_ByBasePolicyId,
    /**
     * Update an existing base policy.&lt;br&gt;Note:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;i&gt;countryType&lt;/i&gt; field only accept COUNTRY or COUNTRY_GROUP.&lt;/li&gt;&lt;li&gt;COUNTRY_GROUP &lt;i&gt;countryType&lt;/i&gt; requires the &lt;i&gt;countryGroupName&lt;/i&gt; and &lt;i&gt;affectedCountries&lt;/i&gt; fields to be provided.&lt;/li&gt;&lt;/ul&gt;&lt;li&gt;policy with COUNTRY_GROUP type include multiple countries and apply the same policy across the entire list of countries&lt;/li&gt;
     */
    patchBasePolicy_ByBasePolicyId,
    /**
     * Retrieve a Base Legal Policy based on a Particular Country.
     */
    getCountry_ByBasePolicyId_ByCountryCode
  }
}
