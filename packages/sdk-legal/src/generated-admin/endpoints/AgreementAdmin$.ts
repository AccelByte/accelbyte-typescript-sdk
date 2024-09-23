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
import { PagedRetrieveUserAcceptedAgreementResponse } from '../../generated-definitions/PagedRetrieveUserAcceptedAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'

export class AgreementAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API will return users who has accepted a specific policy version.
   */
  getAgreementsPolicyVersionsUsers(queryParams: {
    policyVersionId: string | null
    keyword?: string | null
    limit?: number
    offset?: number
  }): Promise<Response<PagedRetrieveUserAcceptedAgreementResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/agreement/admin/agreements/policy-versions/users'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PagedRetrieveUserAcceptedAgreementResponse,
      'PagedRetrieveUserAcceptedAgreementResponse'
    )
  }
  /**
   * This API will return all accepted Legal Agreements for specified user
   */
  getAgreementPolicyUser_ByUserId(userId: string): Promise<Response<RetrieveAcceptedAgreementResponseArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/agreements/policies/users/{userId}'.replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RetrieveAcceptedAgreementResponseArray,
      'RetrieveAcceptedAgreementResponseArray'
    )
  }
  /**
   * This API will Update Preference Consent
   */
  patchAgreementLocalizedPolicyVersionPreferenceUserId_ByUserId(
    userId: string,
    data: AcceptAgreementRequest[]
  ): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/agreements/localized-policy-versions/preferences/namespaces/{namespace}/userId/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
