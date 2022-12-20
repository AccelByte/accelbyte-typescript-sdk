/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { RetrieveUserEligibilitiesIndirectResponse } from './definitions/RetrieveUserEligibilitiesIndirectResponse'
import { RetrieveUserEligibilitiesResponseArray } from './definitions/RetrieveUserEligibilitiesResponseArray'

export class Eligibilities$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Retrieve the active policies and its conformance status by userThis process only supports cross-namespace checking between game namespace and publisher namespace , that means if the active policy already accepted by the same user in publisher namespace, then it will also be considered as eligible in non-publisher namespace.<br/><br/>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  fetchPublicEligibilitiesCountriesByCountrycodeClientsByClientidUsersByUserid<T = RetrieveUserEligibilitiesIndirectResponse>(
    countryCode: string,
    clientId: string,
    userId: string
  ): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/eligibilities/namespaces/{namespace}/countries/{countryCode}/clients/{clientId}/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{countryCode}', countryCode)
      .replace('{clientId}', clientId)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RetrieveUserEligibilitiesIndirectResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Retrieve the active policies and its conformance status by user.<br>This process supports cross-namespace checking, that means if the active policy already accepted by the same user in other namespace, then it will be considered as eligible.<br/><br/>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  fetchPublicEligibilitiesNamespacesByNamespace<T = RetrieveUserEligibilitiesResponseArray>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/eligibilities/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RetrieveUserEligibilitiesResponseArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }
}
