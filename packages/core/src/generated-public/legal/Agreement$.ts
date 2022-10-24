/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { CodeGenUtil } from '@od-web-sdk/utils/CodeGenUtil'
import { SdkCache } from '@od-web-sdk/utils/SdkCache'
import { IResponse, IResponseWithSync, Validate } from '@od-web-sdk/utils/Validate'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
/* eslint-disable camelcase */
import { AcceptAgreementRequest } from './definitions/AcceptAgreementRequest'
import { AcceptAgreementResponse } from './definitions/AcceptAgreementResponse'
import { RetrieveAcceptedAgreementResponseArray } from './definitions/RetrieveAcceptedAgreementResponseArray'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Agreement$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  fetchPublicAgreementsPolicies<T = RetrieveAcceptedAgreementResponseArray>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/policies'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, RetrieveAcceptedAgreementResponseArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postPublicAgreementsPolicies<T = AcceptAgreementResponse>(data: AcceptAgreementRequest[]): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/policies'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, AcceptAgreementResponse)
  }

  postPublicAgreementsPoliciesCountriesByCountrycodeClientsByClientidUsersByUserid<T = AcceptAgreementResponse>(
    userId: string,
    countryCode: string,
    clientId: string,
    data: AcceptAgreementRequest[]
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url =
      '/agreement/public/agreements/policies/namespaces/' +
      this.namespace +
      '/countries/' +
      countryCode +
      '/clients/' +
      clientId +
      '/users/' +
      userId +
      ''
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, AcceptAgreementResponse)
  }

  patchPublicAgreementsLocalizedPolicyVersionsPreferences(data: AcceptAgreementRequest[]): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/localized-policy-versions/preferences'
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  postPublicAgreementsLocalizedPolicyVersionsByLocalizedpolicyversionid(localizedPolicyVersionId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/localized-policy-versions/' + localizedPolicyVersionId + ''
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  postPublicAgreementsPoliciesUsersByUserid<T = AcceptAgreementResponse>(
    userId: string,
    data: AcceptAgreementRequest[]
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/policies/users/' + userId + ''
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, AcceptAgreementResponse)
  }
}
