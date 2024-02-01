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
import { z } from 'zod'
import { AcceptAgreementRequest } from '../../generated-definitions/AcceptAgreementRequest.js'
import { AcceptAgreementResponse } from '../../generated-definitions/AcceptAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'

export class Agreement$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Retrieve accepted Legal Agreements.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;/ul&gt;
   */
  getAgreementsPolicies(): Promise<IResponseWithSync<RetrieveAcceptedAgreementResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/policies'
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

  /**
   * Accepts many legal policy versions all at once. Supply with localized version policy id to accept an agreement.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;/ul&gt;
   */
  createAgreementPolicy(data: AcceptAgreementRequest[]): Promise<IResponse<AcceptAgreementResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/policies'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, AcceptAgreementResponse, 'AcceptAgreementResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Accepts many legal policy versions all at once. Supply with localized version policy id and userId to accept an agreement. This endpoint used by Authentication Service during new user registration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;/ul&gt;
   */
  createAgreementPolicyUser_ByUserId(userId: string, data: AcceptAgreementRequest[]): Promise<IResponse<AcceptAgreementResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/policies/users/{userId}'.replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, AcceptAgreementResponse, 'AcceptAgreementResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Change marketing preference consent.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;/ul&gt;
   */
  patchAgreementLocalizedPolicyVersionPreference(data: AcceptAgreementRequest[]): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/localized-policy-versions/preferences'
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Accepts a legal policy version. Supply with localized version policy id to accept an agreement.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;/ul&gt;
   */
  createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/localized-policy-versions/{localizedPolicyVersionId}'.replace(
      '{localizedPolicyVersionId}',
      localizedPolicyVersionId
    )
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
