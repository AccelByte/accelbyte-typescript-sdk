/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { AcceptAgreementRequest } from '../definitions/AcceptAgreementRequest.js'
import { AcceptAgreementResponse } from '../definitions/AcceptAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../definitions/RetrieveAcceptedAgreementResponseArray.js'

export class Agreement$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Retrieve accepted Legal Agreements.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  getAgreementsPolicies(): Promise<IResponseWithSync<RetrieveAcceptedAgreementResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/policies'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => resultPromise, RetrieveAcceptedAgreementResponseArray, 'RetrieveAcceptedAgreementResponseArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Accepts many legal policy versions all at once. Supply with localized version policy id to accept an agreement.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  createAgreementPolicy(data: AcceptAgreementRequest[]): Promise<IResponse<AcceptAgreementResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/policies'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, AcceptAgreementResponse, 'AcceptAgreementResponse')
  }

  /**
   * Accepts many legal policy versions all at once. Supply with localized version policy id and userId to accept an agreement. This endpoint used by Authentication Service during new user registration.<br><br/>Available Extra Information to return: <br/><ul><li><b>userIds</b> : List of userId mapping (<b>IMPORTANT: GOING TO DEPRECATE</b>)</li></ul>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  createAgreementPolicyUser_ByUserId(userId: string, data: AcceptAgreementRequest[]): Promise<IResponse<AcceptAgreementResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/policies/users/{userId}'.replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, AcceptAgreementResponse, 'AcceptAgreementResponse')
  }

  /**
   * Change marketing preference consent.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  patchAgreementLocalizedPolicyVersionPreference(data: AcceptAgreementRequest[]): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/localized-policy-versions/preferences'
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Accepts a legal policy version. Supply with localized version policy id to accept an agreement.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/localized-policy-versions/{localizedPolicyVersionId}'.replace(
      '{localizedPolicyVersionId}',
      localizedPolicyVersionId
    )
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * <b>IMPORTANT: GOING TO DEPRECATE</b><br/><br/>Accepts many legal policy versions all at once. Supply with localized version policy id, version policy id, policy id, userId, namespace, country code and client id to accept an agreement. This endpoint used by APIGateway during new user registration.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:LEGAL", action=1 (CREATE)</li></ul>
   */
  createUserPolicyAgreement_ByCountryCode_ByClientId_ByUserId(
    userId: string,
    countryCode: string,
    clientId: string,
    data: AcceptAgreementRequest[]
  ): Promise<IResponse<AcceptAgreementResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/policies/namespaces/{namespace}/countries/{countryCode}/clients/{clientId}/users/{userId}'
      .replace('{userId}', userId)
      .replace('{namespace}', this.namespace)
      .replace('{countryCode}', countryCode)
      .replace('{clientId}', clientId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, AcceptAgreementResponse, 'AcceptAgreementResponse')
  }
}
