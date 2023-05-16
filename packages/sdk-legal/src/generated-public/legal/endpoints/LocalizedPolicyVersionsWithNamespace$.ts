/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { RetrieveLocalizedPolicyVersionPublicResponse } from '../definitions/RetrieveLocalizedPolicyVersionPublicResponse.js'

export class LocalizedPolicyVersionsWithNamespace$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Retrieve specific localized policy version including the policy version and base policy version where the localized policy version located.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/ul&gt;
   */
  getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(
    localizedPolicyVersionId: string
  ): Promise<IResponseWithSync<RetrieveLocalizedPolicyVersionPublicResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/namespaces/{namespace}/localized-policy-versions/{localizedPolicyVersionId}'
      .replace('{namespace}', this.namespace)
      .replace('{localizedPolicyVersionId}', localizedPolicyVersionId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(
        () => resultPromise,
        RetrieveLocalizedPolicyVersionPublicResponse,
        'RetrieveLocalizedPolicyVersionPublicResponse'
      )

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
