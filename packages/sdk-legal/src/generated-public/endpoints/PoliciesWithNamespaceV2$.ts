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
import { RetrieveSimplePolicyPublicResponseV2Array } from '../../generated-definitions/RetrieveSimplePolicyPublicResponseV2Array.js'

export class PoliciesWithNamespaceV2$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to list all the related doc in register page, include optional &amp; mandatory (when env config APP_LEGAL_AGREEMENT_ALWAYS_INCLUDE_DEFAULT=true).&lt;br&gt;Other detail info: &lt;ul&gt;Here are the result of different cases&lt;ul&gt;&lt;li&gt;Document 1, Region US (default, mandatory), UA (optional); clientID: [client_A]&lt;/li&gt;&lt;li&gt;Document 2, Region US (default, optional), UA (mandatory); clientID: [client_A]&lt;/li&gt;&lt;li&gt;Document 3, Region UA (default, mandatory); clientID: [client_A]&lt;/li&gt;&lt;li&gt;Document 4, Region US (default, optional); clientID: [client_A]&lt;/li&gt;&lt;li&gt;Document 5, Region US (default, optional); clientID: [client_B]&lt;/li&gt;&lt;li&gt;Document 6, Region CA (mandatory, optional), UA (optional); clientID: [client_B]&lt;/li&gt;&lt;li&gt;Query by: Region UA + client_A&lt;/li&gt;&lt;li&gt;Response: Document 1 (UA, optional), Document 2 (UA, mandatory), Document 3 (UA, mandatory), Document 4 (US, optional)&lt;/li&gt;&lt;li&gt;Query by: Region CA + client_A&lt;/li&gt;&lt;li&gt;Response: Document 1 (US, mandatory), Document 2 (US, mandatory), Document 3 (UA, mandatory), Document 4 (US, optional)&lt;/li&gt;&lt;li&gt;Query by: Region UA + client_B&lt;/li&gt;&lt;li&gt;Response: Document 5 (US, optional), Document 6 (UA, optional)&lt;/li&gt;&lt;li&gt;Query by: Region CN + client_B&lt;/li&gt;&lt;li&gt;Response: Document 5 (US, optional), Document 6 (CA, mandatory)&lt;/li&gt;&lt;/ul&gt;Note: If APP_LEGAL_AGREEMENT_ALWAYS_INCLUDE_DEFAULT=false the behavior will be same with `/agreement/public/policies/namespaces/{namespace}/countries/{country_code}?defaultOnEmpty=true&amp;visibleOnly=true`;Here are the result of different cases&lt;ul&gt;&lt;li&gt;Query by: Region UA + client_A&lt;/li&gt;&lt;li&gt;Response: Document 1 (UA, optional), Document 2 (UA, mandatory), Document 3 (UA, mandatory)&lt;/li&gt;&lt;li&gt;Query by: Region UA + client_B&lt;/li&gt;&lt;li&gt;Response: Document 5 (US, optional)&lt;/li&gt;&lt;/ul&gt;
   */
  getPolicyCountry_ByCountryCode_v2(
    countryCode: string,
    queryParams: { clientId: string | null }
  ): Promise<Response<RetrieveSimplePolicyPublicResponseV2Array>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/agreement/v2/public/policies/namespaces/{namespace}/countries/{countryCode}'
      .replace('{namespace}', this.namespace)
      .replace('{countryCode}', countryCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RetrieveSimplePolicyPublicResponseV2Array,
      'RetrieveSimplePolicyPublicResponseV2Array'
    )
  }
}
