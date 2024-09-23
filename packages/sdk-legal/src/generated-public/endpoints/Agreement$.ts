/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { AcceptAgreementRequest } from '../../generated-definitions/AcceptAgreementRequest.js'
import { AcceptAgreementResponse } from '../../generated-definitions/AcceptAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'

export class Agreement$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Retrieve accepted Legal Agreements.
   */
  getAgreementsPolicies(): Promise<Response<RetrieveAcceptedAgreementResponseArray>> {
    const params = {} as AxiosRequestConfig
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
  createAgreementPolicy(data: AcceptAgreementRequest[]): Promise<Response<AcceptAgreementResponse>> {
    const params = {} as AxiosRequestConfig
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
  createAgreementPolicyUser_ByUserId(userId: string, data: AcceptAgreementRequest[]): Promise<Response<AcceptAgreementResponse>> {
    const params = {} as AxiosRequestConfig
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
  patchAgreementLocalizedPolicyVersionPreference(data: AcceptAgreementRequest[]): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/public/agreements/localized-policy-versions/preferences'
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Accepts a legal policy version. Supply with localized version policy id to accept an agreement
   */
  createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
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
  createUserPolicyAgreement_ByCountryCode_ByClientId_ByUserId(
    countryCode: string,
    clientId: string,
    userId: string,
    data: AcceptAgreementRequest[]
  ): Promise<Response<AcceptAgreementResponse>> {
    const params = {} as AxiosRequestConfig
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
