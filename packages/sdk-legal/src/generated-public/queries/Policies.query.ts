/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { PoliciesApi } from '../PoliciesApi.js'

import { RetrievePolicyPublicResponseArray } from '../../generated-definitions/RetrievePolicyPublicResponseArray.js'

export enum Key_Policies {
  PoliciesCountriesList = 'Legal.Policies.PoliciesCountriesList',
  Policy_ByNamespace = 'Legal.Policies.Policy_ByNamespace',
  PolicyCountry_ByCountryCode = 'Legal.Policies.PolicyCountry_ByCountryCode',
  PolicyCountry_ByCountryCode_ByNS = 'Legal.Policies.PolicyCountry_ByCountryCode_ByNS'
}

/**
 * Retrieve List of Countries that have Active and Visible Legal Policies.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Policies.PoliciesCountriesList, input]
 * }
 * ```
 */
export const usePoliciesApi_GetPoliciesCountriesList = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePoliciesApi_GetPoliciesCountriesList>[1]) => async () => {
    const response = await PoliciesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPoliciesCountriesList()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_Policies.PoliciesCountriesList, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Retrieve all active latest policies based on a namespace and country. The country will be read from user token.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Leave the policyType empty if you want to be responded with all policy type&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the tags if you want to filter the responded policy by tags&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the alwaysIncludeDefault with true if you want to be responded with always include default policy. If there are duplicate policies (default policies and country specific policies with same base policy) it&#39;ll include policy with same country code, for example:&lt;ul&gt;&lt;li&gt;Document 1 (default): Region US (default), UA&lt;/li&gt;&lt;li&gt;Document 2 (default): Region US (default)&lt;/li&gt;&lt;li&gt;Document 3 (default): Region US (default)&lt;/li&gt;&lt;li&gt;User: Region UA&lt;/li&gt;&lt;li&gt;Query: alwaysIncludeDefault: true&lt;/li&gt;&lt;li&gt;Response: Document 1 (UA), Document 2 (US), Document 3 (US)&lt;/li&gt;&lt;/ul&gt;&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Policies.Policy_ByNamespace, input]
 * }
 * ```
 */
export const usePoliciesApi_GetPolicy_ByNamespace = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      alwaysIncludeDefault?: boolean | null
      defaultOnEmpty?: boolean | null
      policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE'
      tags?: string | null
      visibleOnly?: boolean | null
    }
  },
  options?: Omit<UseQueryOptions<RetrievePolicyPublicResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrievePolicyPublicResponseArray>) => void
): UseQueryResult<RetrievePolicyPublicResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePoliciesApi_GetPolicy_ByNamespace>[1]) => async () => {
    const response = await PoliciesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPolicy_ByNamespace(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RetrievePolicyPublicResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Policies.Policy_ByNamespace, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Retrieve all active latest policies based on a country.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Leave the policyType empty if you want to be responded with all policy type&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the tags if you want to filter the responded policy by tags&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Policies.PolicyCountry_ByCountryCode, input]
 * }
 * ```
 */
export const usePoliciesApi_GetPolicyCountry_ByCountryCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    countryCode: string
    queryParams?: {
      defaultOnEmpty?: boolean | null
      policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE'
      tags?: string | null
      visibleOnly?: boolean | null
    }
  },
  options?: Omit<UseQueryOptions<RetrievePolicyPublicResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrievePolicyPublicResponseArray>) => void
): UseQueryResult<RetrievePolicyPublicResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePoliciesApi_GetPolicyCountry_ByCountryCode>[1]) => async () => {
    const response = await PoliciesApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPolicyCountry_ByCountryCode(input.countryCode, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<RetrievePolicyPublicResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Policies.PolicyCountry_ByCountryCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Retrieve all active latest policies based on a namespace and country.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Leave the policyType empty if you want to be responded with all policy type&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the tags if you want to filter the responded policy by tags&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Fill the alwaysIncludeDefault with true if you want to be responded with always include default policy. If there are duplicate policies (default policies and country specific policies with same base policy) it&#39;ll include policy with same country code, for example:&lt;ul&gt;&lt;li&gt;Document 1 (default): Region US (default), UA&lt;/li&gt;&lt;li&gt;Document 2 (default): Region US (default)&lt;/li&gt;&lt;li&gt;Document 3 (default): Region US (default)&lt;/li&gt;&lt;li&gt;User: Region UA&lt;/li&gt;&lt;li&gt;Query: alwaysIncludeDefault: true&lt;/li&gt;&lt;li&gt;Response: Document 1 (UA), Document 2 (US), Document 3 (US)&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Policies.PolicyCountry_ByCountryCode_ByNS, input]
 * }
 * ```
 */
export const usePoliciesApi_GetPolicyCountry_ByCountryCode_ByNS = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    countryCode: string
    queryParams?: {
      alwaysIncludeDefault?: boolean | null
      defaultOnEmpty?: boolean | null
      policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE'
      tags?: string | null
      visibleOnly?: boolean | null
    }
  },
  options?: Omit<UseQueryOptions<RetrievePolicyPublicResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrievePolicyPublicResponseArray>) => void
): UseQueryResult<RetrievePolicyPublicResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePoliciesApi_GetPolicyCountry_ByCountryCode_ByNS>[1]) => async () => {
    const response = await PoliciesApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPolicyCountry_ByCountryCode_ByNS(input.countryCode, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<RetrievePolicyPublicResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Policies.PolicyCountry_ByCountryCode_ByNS, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
