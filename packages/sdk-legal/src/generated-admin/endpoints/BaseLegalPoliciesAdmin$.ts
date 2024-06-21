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
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Retrieve all supported policy types.
   */
  getPolicyTypes(queryParams: { limit: number; offset?: number }): Promise<IResponse<RetrievePolicyTypeResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
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
  getBasePolicies(queryParams?: { visibleOnly?: boolean | null }): Promise<IResponse<RetrieveBasePolicyResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
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
   * Create a legal policy.
   */
  createBasePolicy(data: CreateBasePolicyRequest): Promise<IResponse<CreateBasePolicyResponse>> {
    const params = {} as SDKRequestConfig
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
  getBasePolicy_ByBasePolicyId(basePolicyId: string): Promise<IResponse<RetrieveBasePolicyResponse>> {
    const params = {} as SDKRequestConfig
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
   * Update an existing base policy.
   */
  patchBasePolicy_ByBasePolicyId(basePolicyId: string, data: UpdateBasePolicyRequest): Promise<IResponse<UpdateBasePolicyResponse>> {
    const params = {} as SDKRequestConfig
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
  getCountry_ByBasePolicyId_ByCountryCode(basePolicyId: string, countryCode: string): Promise<IResponse<RetrievePolicyResponse>> {
    const params = {} as SDKRequestConfig
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
