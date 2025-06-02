/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { RetrievePolicyPublicResponseArray } from '../generated-definitions/RetrievePolicyPublicResponseArray.js'
import { Policies$ } from './endpoints/Policies$.js'

export function PoliciesApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getPoliciesCountriesList(): Promise<AxiosResponse<unknown>> {
    const $ = new Policies$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPoliciesCountriesList()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPolicy_ByNamespace(queryParams?: {
    alwaysIncludeDefault?: boolean | null
    defaultOnEmpty?: boolean | null
    policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE'
    tags?: string | null
    visibleOnly?: boolean | null
  }): Promise<AxiosResponse<RetrievePolicyPublicResponseArray>> {
    const $ = new Policies$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPolicy_ByNamespace(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPolicyCountry_ByCountryCode(
    countryCode: string,
    queryParams?: {
      defaultOnEmpty?: boolean | null
      policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE'
      tags?: string | null
      visibleOnly?: boolean | null
    }
  ): Promise<AxiosResponse<RetrievePolicyPublicResponseArray>> {
    const $ = new Policies$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPolicyCountry_ByCountryCode(countryCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPolicyCountry_ByCountryCode_ByNS(
    countryCode: string,
    queryParams?: {
      alwaysIncludeDefault?: boolean | null
      defaultOnEmpty?: boolean | null
      policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE'
      tags?: string | null
      visibleOnly?: boolean | null
    }
  ): Promise<AxiosResponse<RetrievePolicyPublicResponseArray>> {
    const $ = new Policies$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPolicyCountry_ByCountryCode_ByNS(countryCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Retrieve List of Countries that have Active and Visible Legal Policies.
     */
    getPoliciesCountriesList,
    /**
     * Retrieve all active latest policies based on a namespace and country. The country will be read from user token.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Leave the policyType empty if you want to be responded with all policy type&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the tags if you want to filter the responded policy by tags&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the alwaysIncludeDefault with true if you want to be responded with always include default policy. If there are duplicate policies (default policies and country specific policies with same base policy) it&#39;ll include policy with same country code, for example:&lt;ul&gt;&lt;li&gt;Document 1 (default): Region US (default), UA&lt;/li&gt;&lt;li&gt;Document 2 (default): Region US (default)&lt;/li&gt;&lt;li&gt;Document 3 (default): Region US (default)&lt;/li&gt;&lt;li&gt;User: Region UA&lt;/li&gt;&lt;li&gt;Query: alwaysIncludeDefault: true&lt;/li&gt;&lt;li&gt;Response: Document 1 (UA), Document 2 (US), Document 3 (US)&lt;/li&gt;&lt;/ul&gt;&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     */
    getPolicy_ByNamespace,
    /**
     * Retrieve all active latest policies based on a country.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Leave the policyType empty if you want to be responded with all policy type&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the tags if you want to filter the responded policy by tags&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     */
    getPolicyCountry_ByCountryCode,
    /**
     * Retrieve all active latest policies based on a namespace and country.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Leave the policyType empty if you want to be responded with all policy type&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the tags if you want to filter the responded policy by tags&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the alwaysIncludeDefault with true if you want to be responded with always include default policy. If there are duplicate policies (default policies and country specific policies with same base policy) it&#39;ll include policy with same country code, for example:&lt;ul&gt;&lt;li&gt;Document 1 (default): Region US (default), UA&lt;/li&gt;&lt;li&gt;Document 2 (default): Region US (default)&lt;/li&gt;&lt;li&gt;Document 3 (default): Region US (default)&lt;/li&gt;&lt;li&gt;User: Region UA&lt;/li&gt;&lt;li&gt;Query: alwaysIncludeDefault: true&lt;/li&gt;&lt;li&gt;Response: Document 1 (UA), Document 2 (US), Document 3 (US)&lt;/li&gt;&lt;/ul&gt;
     */
    getPolicyCountry_ByCountryCode_ByNS
  }
}
