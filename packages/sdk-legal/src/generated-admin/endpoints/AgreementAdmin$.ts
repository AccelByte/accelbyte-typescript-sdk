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
import { PagedRetrieveUserAcceptedAgreementResponse } from '../../generated-definitions/PagedRetrieveUserAcceptedAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'

export class AgreementAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * This API will return users who has accepted a specific policy version.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:*:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getAgreementsPolicyVersionsUsers(queryParams: {
    policyVersionId: string | null
    keyword?: string | null
    limit?: number
    offset?: number
  }): Promise<IResponse<PagedRetrieveUserAcceptedAgreementResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/agreement/admin/agreements/policy-versions/users'
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PagedRetrieveUserAcceptedAgreementResponse, 'PagedRetrieveUserAcceptedAgreementResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API will return all accepted Legal Agreements for specified user. &lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:*:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getAgreementPolicyUser_ByUserId(userId: string): Promise<IResponse<RetrieveAcceptedAgreementResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/admin/agreements/policies/users/{userId}'.replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, RetrieveAcceptedAgreementResponseArray, 'RetrieveAcceptedAgreementResponseArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API will Update Preference Consent. &lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  patchAgreementLocalizedPolicyVersionPreferenceUserId_ByUserId(
    userId: string,
    data: AcceptAgreementRequest[]
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/admin/agreements/localized-policy-versions/preferences/namespaces/{namespace}/userId/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
