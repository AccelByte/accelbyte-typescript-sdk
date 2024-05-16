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
import { RetrieveUserEligibilitiesIndirectResponse } from '../../generated-definitions/RetrieveUserEligibilitiesIndirectResponse.js'
import { RetrieveUserEligibilitiesResponseArray } from '../../generated-definitions/RetrieveUserEligibilitiesResponseArray.js'

export class Eligibilities$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * Retrieve the active policies and its conformance status by user.&lt;br&gt;This process supports cross-namespace checking, that means if the active policy already accepted by the same user in other namespace, then it will be considered as eligible.
   */
  getEligibility_ByNamespace(): Promise<IResponse<RetrieveUserEligibilitiesResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/eligibilities/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      RetrieveUserEligibilitiesResponseArray,
      'RetrieveUserEligibilitiesResponseArray'
    )
  }

  /**
   * Retrieve the active policies and its conformance status by user.&lt;br&gt;This process only supports cross-namespace checking between game namespace and publisher namespace , that means if the active policy already accepted by the same user in publisher namespace, then it will also be considered as eligible in non-publisher namespace.
   */
  getUserEligibility_ByCountryCode_ByClientId_ByUserId(
    countryCode: string,
    clientId: string,
    userId: string
  ): Promise<IResponse<RetrieveUserEligibilitiesIndirectResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/eligibilities/namespaces/{namespace}/countries/{countryCode}/clients/{clientId}/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{countryCode}', countryCode)
      .replace('{clientId}', clientId)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      RetrieveUserEligibilitiesIndirectResponse,
      'RetrieveUserEligibilitiesIndirectResponse'
    )
  }
}
