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
import { PaginatedGetConfigsResponse } from '../../generated-definitions/PaginatedGetConfigsResponse.js'
import { UpdateConfigRequest } from '../../generated-definitions/UpdateConfigRequest.js'

export class AdminConfigAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:UGCCONFIG [READ]&lt;/b&gt;
   */
  getConfigs(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<PaginatedGetConfigsResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/configs'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, PaginatedGetConfigsResponse, 'PaginatedGetConfigsResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:UGCCONFIG [UPDATE]&lt;/b&gt;. It will create a new config if the &lt;i&gt;key&lt;/i&gt; doesn&#39;t exist. Allowed key value: - &lt;i&gt;contentReview&lt;/i&gt;: &lt;i&gt;enabled&lt;/i&gt;,&lt;i&gt;disabled&lt;/i&gt;
   */
  patchConfig_ByKey(key: string, data: UpdateConfigRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/configs/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
