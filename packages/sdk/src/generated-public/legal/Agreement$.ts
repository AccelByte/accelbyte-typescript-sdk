/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { CodeGenUtil } from '@accelbyte/sdk/utils/CodeGenUtil'
import { SdkCache } from '@accelbyte/sdk/utils/SdkCache'
import { IResponse, IResponseWithSync, Validate } from '@accelbyte/sdk/utils/Validate'
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
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Retrieve accepted Legal Agreements.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  fetchPublicAgreementsPolicies<T = RetrieveAcceptedAgreementResponseArray>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/policies'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RetrieveAcceptedAgreementResponseArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Accepts many legal policy versions all at once. Supply with localized version policy id to accept an agreement.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  postPublicAgreementsPolicies<T = AcceptAgreementResponse>(data: AcceptAgreementRequest[]): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/policies'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, AcceptAgreementResponse)
  }

  /**
   * <b>IMPORTANT: GOING TO DEPRECATE</b><br/><br/>Accepts many legal policy versions all at once. Supply with localized version policy id, version policy id, policy id, userId, namespace, country code and client id to accept an agreement. This endpoint used by APIGateway during new user registration.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:LEGAL", action=1 (CREATE)</li></ul>
   */
  postPublicAgreementsPoliciesCountriesByCountrycodeClientsByClientidUsersByUserid<T = AcceptAgreementResponse>(
    userId: string,
    countryCode: string,
    clientId: string,
    data: AcceptAgreementRequest[]
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/policies/namespaces/{namespace}/countries/{countryCode}/clients/{clientId}/users/{userId}'
      .replace('{userId}', userId)
      .replace('{namespace}', this.namespace)
      .replace('{countryCode}', countryCode)
      .replace('{clientId}', clientId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, AcceptAgreementResponse)
  }

  /**
   * Change marketing preference consent.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  patchPublicAgreementsLocalizedPolicyVersionsPreferences(data: AcceptAgreementRequest[]): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/localized-policy-versions/preferences'
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Accepts a legal policy version. Supply with localized version policy id to accept an agreement.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  postPublicAgreementsLocalizedPolicyVersionsByLocalizedpolicyversionid(localizedPolicyVersionId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/localized-policy-versions/{localizedPolicyVersionId}'.replace(
      '{localizedPolicyVersionId}',
      localizedPolicyVersionId
    )
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Accepts many legal policy versions all at once. Supply with localized version policy id and userId to accept an agreement. This endpoint used by Authentication Service during new user registration.<br><br/>Available Extra Information to return: <br/><ul><li><b>userIds</b> : List of userId mapping (<b>IMPORTANT: GOING TO DEPRECATE</b>)</li></ul>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  postPublicAgreementsPoliciesUsersByUserid<T = AcceptAgreementResponse>(
    userId: string,
    data: AcceptAgreementRequest[]
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/agreements/policies/users/{userId}'.replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, AcceptAgreementResponse)
  }
}
