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
import { AcceptAgreementRequest } from '../../generated-definitions/AcceptAgreementRequest.js'
import { AcceptAgreementResponse } from '../../generated-definitions/AcceptAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'

export class Agreement$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Retrieve accepted Legal Agreements.
   */
  getAgreementsPolicies(): Promise<IResponse<RetrieveAcceptedAgreementResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/policies'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RetrieveAcceptedAgreementResponseArray,
      'RetrieveAcceptedAgreementResponseArray'
    )
  }

  /**
   * Accepts many legal policy versions all at once. Supply with localized version policy id to accept an agreement.
   */
  createAgreementPolicy(data: AcceptAgreementRequest[]): Promise<IResponse<AcceptAgreementResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/policies'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AcceptAgreementResponse,
      'AcceptAgreementResponse'
    )
  }

  /**
   * @deprecated
   * Accepts many legal policy versions all at once. Supply with localized version policy id and userId to accept an agreement. This endpoint used by Authentication Service during new user registration.
   */
  createAgreementPolicyUser_ByUserId_DEPRECATED(
    userId: string,
    data: AcceptAgreementRequest[]
  ): Promise<IResponse<AcceptAgreementResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/policies/users/{userId}'.replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AcceptAgreementResponse,
      'AcceptAgreementResponse'
    )
  }

  /**
   * Change marketing preference consent.
   */
  patchAgreementLocalizedPolicyVersionPreference(data: AcceptAgreementRequest[]): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/localized-policy-versions/preferences'
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Accepts a legal policy version. Supply with localized version policy id to accept an agreement
   */
  createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/localized-policy-versions/{localizedPolicyVersionId}'.replace(
      '{localizedPolicyVersionId}',
      localizedPolicyVersionId
    )
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * @deprecated
   * Accepts many legal policy versions all at once. Supply with localized version policy id, version policy id, policy id, userId, namespace, country code and client id to accept an agreement. This endpoint used by APIGateway during new user registration.
   */
  createUserPolicyAgreement_ByCountryCode_ByClientId_ByUserId_DEPRECATED(
    countryCode: string,
    clientId: string,
    userId: string,
    data: AcceptAgreementRequest[]
  ): Promise<IResponse<AcceptAgreementResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/policies/namespaces/{namespace}/countries/{countryCode}/clients/{clientId}/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{countryCode}', countryCode)
      .replace('{clientId}', clientId)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AcceptAgreementResponse,
      'AcceptAgreementResponse'
    )
  }
}
