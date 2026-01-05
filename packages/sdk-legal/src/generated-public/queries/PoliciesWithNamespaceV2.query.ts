/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { PoliciesWithNamespaceV2Api } from '../PoliciesWithNamespaceV2Api.js'

import { RetrieveSimplePolicyPublicResponseV2Array } from '../../generated-definitions/RetrieveSimplePolicyPublicResponseV2Array.js'

export enum Key_PoliciesWithNamespaceV2 {
  PolicyCountry_ByCountryCode_v2 = 'Legal.PoliciesWithNamespaceV2.PolicyCountry_ByCountryCode_v2'
}

/**
 * This API is used to list all the related doc in register page, include optional &amp; mandatory (when env config APP_LEGAL_AGREEMENT_ALWAYS_INCLUDE_DEFAULT=true).&lt;br&gt;Other detail info: &lt;ul&gt;Here are the result of different cases&lt;ul&gt;&lt;li&gt;Document 1, Region US (default, mandatory), UA (optional); clientID: [client_A]&lt;/li&gt;&lt;li&gt;Document 2, Region US (default, optional), UA (mandatory); clientID: [client_A]&lt;/li&gt;&lt;li&gt;Document 3, Region UA (default, mandatory); clientID: [client_A]&lt;/li&gt;&lt;li&gt;Document 4, Region US (default, optional); clientID: [client_A]&lt;/li&gt;&lt;li&gt;Document 5, Region US (default, optional); clientID: [client_B]&lt;/li&gt;&lt;li&gt;Document 6, Region CA (mandatory, optional), UA (optional); clientID: [client_B]&lt;/li&gt;&lt;li&gt;Query by: Region UA + client_A&lt;/li&gt;&lt;li&gt;Response: Document 1 (UA, optional), Document 2 (UA, mandatory), Document 3 (UA, mandatory), Document 4 (US, optional)&lt;/li&gt;&lt;li&gt;Query by: Region CA + client_A&lt;/li&gt;&lt;li&gt;Response: Document 1 (US, mandatory), Document 2 (US, mandatory), Document 3 (UA, mandatory), Document 4 (US, optional)&lt;/li&gt;&lt;li&gt;Query by: Region UA + client_B&lt;/li&gt;&lt;li&gt;Response: Document 5 (US, optional), Document 6 (UA, optional)&lt;/li&gt;&lt;li&gt;Query by: Region CN + client_B&lt;/li&gt;&lt;li&gt;Response: Document 5 (US, optional), Document 6 (CA, mandatory)&lt;/li&gt;&lt;/ul&gt;Note: If APP_LEGAL_AGREEMENT_ALWAYS_INCLUDE_DEFAULT=false the behavior will be same with `/agreement/public/policies/namespaces/{namespace}/countries/{country_code}?defaultOnEmpty=true&amp;visibleOnly=true`;Here are the result of different cases&lt;ul&gt;&lt;li&gt;Query by: Region UA + client_A&lt;/li&gt;&lt;li&gt;Response: Document 1 (UA, optional), Document 2 (UA, mandatory), Document 3 (UA, mandatory)&lt;/li&gt;&lt;li&gt;Query by: Region UA + client_B&lt;/li&gt;&lt;li&gt;Response: Document 5 (US, optional)&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PoliciesWithNamespaceV2.PolicyCountry_ByCountryCode_v2, input]
 * }
 * ```
 */
export const usePoliciesWithNamespaceV2Api_GetPolicyCountry_ByCountryCode_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { countryCode: string; queryParams: { clientId: string | null } },
  options?: Omit<UseQueryOptions<RetrieveSimplePolicyPublicResponseV2Array, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrieveSimplePolicyPublicResponseV2Array>) => void
): UseQueryResult<RetrieveSimplePolicyPublicResponseV2Array, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePoliciesWithNamespaceV2Api_GetPolicyCountry_ByCountryCode_v2>[1]) => async () => {
      const response = await PoliciesWithNamespaceV2Api(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getPolicyCountry_ByCountryCode_v2(input.countryCode, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<RetrieveSimplePolicyPublicResponseV2Array, AxiosError<ApiError>>({
    queryKey: [Key_PoliciesWithNamespaceV2.PolicyCountry_ByCountryCode_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
