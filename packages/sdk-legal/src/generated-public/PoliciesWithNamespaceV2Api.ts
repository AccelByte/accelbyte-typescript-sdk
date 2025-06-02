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
import { RetrieveSimplePolicyPublicResponseV2Array } from '../generated-definitions/RetrieveSimplePolicyPublicResponseV2Array.js'
import { PoliciesWithNamespaceV2$ } from './endpoints/PoliciesWithNamespaceV2$.js'

export function PoliciesWithNamespaceV2Api(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getPolicyCountry_ByCountryCode_v2(
    countryCode: string,
    queryParams: { clientId: string | null }
  ): Promise<AxiosResponse<RetrieveSimplePolicyPublicResponseV2Array>> {
    const $ = new PoliciesWithNamespaceV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPolicyCountry_ByCountryCode_v2(countryCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to list all the related doc in register page, include optional &amp; mandatory (when env config APP_LEGAL_AGREEMENT_ALWAYS_INCLUDE_DEFAULT=true).&lt;br&gt;Other detail info: &lt;ul&gt;Here are the result of different cases&lt;ul&gt;&lt;li&gt;Document 1, Region US (default, mandatory), UA (optional); clientID: [client_A]&lt;/li&gt;&lt;li&gt;Document 2, Region US (default, optional), UA (mandatory); clientID: [client_A]&lt;/li&gt;&lt;li&gt;Document 3, Region UA (default, mandatory); clientID: [client_A]&lt;/li&gt;&lt;li&gt;Document 4, Region US (default, optional); clientID: [client_A]&lt;/li&gt;&lt;li&gt;Document 5, Region US (default, optional); clientID: [client_B]&lt;/li&gt;&lt;li&gt;Document 6, Region CA (mandatory, optional), UA (optional); clientID: [client_B]&lt;/li&gt;&lt;li&gt;Query by: Region UA + client_A&lt;/li&gt;&lt;li&gt;Response: Document 1 (UA, optional), Document 2 (UA, mandatory), Document 3 (UA, mandatory), Document 4 (US, optional)&lt;/li&gt;&lt;li&gt;Query by: Region CA + client_A&lt;/li&gt;&lt;li&gt;Response: Document 1 (US, mandatory), Document 2 (US, mandatory), Document 3 (UA, mandatory), Document 4 (US, optional)&lt;/li&gt;&lt;li&gt;Query by: Region UA + client_B&lt;/li&gt;&lt;li&gt;Response: Document 5 (US, optional), Document 6 (UA, optional)&lt;/li&gt;&lt;li&gt;Query by: Region CN + client_B&lt;/li&gt;&lt;li&gt;Response: Document 5 (US, optional), Document 6 (CA, mandatory)&lt;/li&gt;&lt;/ul&gt;Note: If APP_LEGAL_AGREEMENT_ALWAYS_INCLUDE_DEFAULT=false the behavior will be same with `/agreement/public/policies/namespaces/{namespace}/countries/{country_code}?defaultOnEmpty=true&amp;visibleOnly=true`;Here are the result of different cases&lt;ul&gt;&lt;li&gt;Query by: Region UA + client_A&lt;/li&gt;&lt;li&gt;Response: Document 1 (UA, optional), Document 2 (UA, mandatory), Document 3 (UA, mandatory)&lt;/li&gt;&lt;li&gt;Query by: Region UA + client_B&lt;/li&gt;&lt;li&gt;Response: Document 5 (US, optional)&lt;/li&gt;&lt;/ul&gt;
     */
    getPolicyCountry_ByCountryCode_v2
  }
}
