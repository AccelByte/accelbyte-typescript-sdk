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
import { RetrievePolicyResponseArray } from '../../generated-definitions/RetrievePolicyResponseArray.js'
import { UpdatePolicyRequest } from '../../generated-definitions/UpdatePolicyRequest.js'

export class PoliciesAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * Update country-specific policy.
   */
  patchPolicy_ByPolicyId(policyId: string, data: UpdatePolicyRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/admin/policies/{policyId}'.replace('{policyId}', policyId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Update a policy to be the default.
   */
  patchDefault_ByPolicyId(policyId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/admin/policies/{policyId}/default'.replace('{policyId}', policyId)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Retrieve all active policies based on a country.
   */
  getPolicyCountry_ByCountryCode(countryCode: string): Promise<IResponse<RetrievePolicyResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/admin/policies/countries/{countryCode}'.replace('{countryCode}', countryCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      RetrievePolicyResponseArray,
      'RetrievePolicyResponseArray'
    )
  }
}
