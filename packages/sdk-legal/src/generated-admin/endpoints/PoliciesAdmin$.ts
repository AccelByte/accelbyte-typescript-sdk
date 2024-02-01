/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { RetrievePolicyResponseArray } from '../../generated-definitions/RetrievePolicyResponseArray.js'
import { UpdatePolicyRequest } from '../../generated-definitions/UpdatePolicyRequest.js'

export class PoliciesAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Update country-specific policy.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:*:LEGAL&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  patchPolicy_ByPolicyId(policyId: string, data: UpdatePolicyRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/admin/policies/{policyId}'.replace('{policyId}', policyId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Update a policy to be the default.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:*:LEGAL&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  patchDefault_ByPolicyId(policyId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/admin/policies/{policyId}/default'.replace('{policyId}', policyId)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Retrieve all active policies based on a country.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:*:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getPolicyCountry_ByCountryCode(countryCode: string): Promise<IResponseWithSync<RetrievePolicyResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/admin/policies/countries/{countryCode}'.replace('{countryCode}', countryCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, RetrievePolicyResponseArray, 'RetrievePolicyResponseArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
