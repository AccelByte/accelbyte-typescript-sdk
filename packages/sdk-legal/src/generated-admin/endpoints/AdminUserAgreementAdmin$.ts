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
import { AcceptAgreementRequest } from '../../generated-definitions/AcceptAgreementRequest.js'
import { AcceptAgreementResponse } from '../../generated-definitions/AcceptAgreementResponse.js'

export class AdminUserAgreementAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Accepts many legal policy versions all at once. Supply with localized version policy id and userId to accept an agreement. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:LEGAL&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  createAgreementPolicy_ByUserId(
    userId: string,
    data: AcceptAgreementRequest[],
    queryParams: { clientId: string | null; countryCode: string | null; publisherUserId?: string | null }
  ): Promise<IResponse<AcceptAgreementResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/users/{userId}/agreements/policies'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, AcceptAgreementResponse, 'AcceptAgreementResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
