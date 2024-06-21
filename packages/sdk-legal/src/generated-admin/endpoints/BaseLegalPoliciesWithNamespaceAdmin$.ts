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
import { CreateBasePolicyRequestV2 } from '../../generated-definitions/CreateBasePolicyRequestV2.js'
import { CreateBasePolicyResponse } from '../../generated-definitions/CreateBasePolicyResponse.js'
import { RetrieveBasePolicyResponse } from '../../generated-definitions/RetrieveBasePolicyResponse.js'
import { RetrieveBasePolicyResponseArray } from '../../generated-definitions/RetrieveBasePolicyResponseArray.js'
import { RetrievePolicyResponse } from '../../generated-definitions/RetrievePolicyResponse.js'
import { RetrievePolicyTypeResponseArray } from '../../generated-definitions/RetrievePolicyTypeResponseArray.js'
import { UpdateBasePolicyRequestV2 } from '../../generated-definitions/UpdateBasePolicyRequestV2.js'
import { UpdateBasePolicyResponse } from '../../generated-definitions/UpdateBasePolicyResponse.js'

export class BaseLegalPoliciesWithNamespaceAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Retrieve all supported policy types.
   */
  getPolicyTypes(queryParams: { limit: number; offset?: number }): Promise<IResponse<RetrievePolicyTypeResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
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
  getBasePolicies(queryParams?: { visibleOnly?: boolean | null }): Promise<IResponse<RetrieveBasePolicyResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
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
   * Create a legal policy.
   */
  createBasePolicy(data: CreateBasePolicyRequestV2): Promise<IResponse<CreateBasePolicyResponse>> {
    const params = {} as SDKRequestConfig
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
   * Retrieve a base policy.
   */
  getBasePolicy_ByBasePolicyId(basePolicyId: string): Promise<IResponse<RetrieveBasePolicyResponse>> {
    const params = {} as SDKRequestConfig
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
   * Update an existing base policy.
   */
  patchBasePolicy_ByBasePolicyId(basePolicyId: string, data: UpdateBasePolicyRequestV2): Promise<IResponse<UpdateBasePolicyResponse>> {
    const params = {} as SDKRequestConfig
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
   * Retrieve a Base Legal Policy based on a Particular Country.
   */
  getCountry_ByBasePolicyId_ByCountryCode(basePolicyId: string, countryCode: string): Promise<IResponse<RetrievePolicyResponse>> {
    const params = {} as SDKRequestConfig
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
