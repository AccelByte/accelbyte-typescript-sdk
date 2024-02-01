/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { PagedRetrieveUserAcceptedAgreementResponse } from '../../generated-definitions/PagedRetrieveUserAcceptedAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'
import { UserAgreementsResponseArray } from '../../generated-definitions/UserAgreementsResponseArray.js'
import { UsersAgreementsRequest } from '../../generated-definitions/UsersAgreementsRequest.js'

export class AgreementWithNamespaceAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * This API will return all accepted Legal Agreements for each user, including agreements of game users if publisher user has corresponding game accountOther detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  createAgreement(data: UsersAgreementsRequest): Promise<IResponse<UserAgreementsResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/agreements'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UserAgreementsResponseArray, 'UserAgreementsResponseArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API will return all users who has accepted a specific policy version.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getAgreementsPolicyVersionsUsers(queryParams: {
    policyVersionId: string | null
    convertGameUserId?: boolean | null
    keyword?: string | null
    limit?: number
    offset?: number
  }): Promise<IResponseWithSync<PagedRetrieveUserAcceptedAgreementResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/agreements/policy-versions/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(
            () => resultPromise,
            PagedRetrieveUserAcceptedAgreementResponse,
            'PagedRetrieveUserAcceptedAgreementResponse'
          )
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API will return all accepted Legal Agreements for specified user. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getAgreementPolicyUser_ByUserId(
    userId: string,
    queryParams?: { excludeOtherNamespacesPolicies?: boolean | null }
  ): Promise<IResponseWithSync<RetrieveAcceptedAgreementResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/agreements/policies/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, RetrieveAcceptedAgreementResponseArray, 'RetrieveAcceptedAgreementResponseArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
