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
import { AcceptAgreementRequest } from '../../generated-definitions/AcceptAgreementRequest.js'
import { AcceptAgreementResponse } from '../../generated-definitions/AcceptAgreementResponse.js'

export class UserAgreementAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Accepts many legal policy versions all at once. Supply with localized version policy id and userId to accept an agreement.
   */
  createAgreementPolicy_ByUserId(
    userId: string,
    data: AcceptAgreementRequest[],
    queryParams: { clientId: string | null; countryCode: string | null; publisherUserId?: string | null }
  ): Promise<Response<AcceptAgreementResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/users/{userId}/agreements/policies'
      .replace('{namespace}', this.namespace)
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
