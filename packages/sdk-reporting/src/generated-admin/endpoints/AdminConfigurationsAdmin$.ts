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
import { ConfigResponse } from '../../generated-definitions/ConfigResponse.js'
import { ReportingLimit } from '../../generated-definitions/ReportingLimit.js'

export class AdminConfigurationsAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * TimeInterval is in nanoseconds. When there&#39;s no configuration set, the response is the default value (configurable through envar).
   */
  getConfigurations(queryParams?: { category?: 'all' | 'extension' }): Promise<IResponseWithSync<ConfigResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ConfigResponse, 'ConfigResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * The behaviour of this endpoint is upsert based on the namespace. So, you can use this for both creating &amp; updating the configuration. TimeInterval is in nanoseconds.
   */
  createConfiguration(data: ReportingLimit): Promise<IResponse<ConfigResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, ConfigResponse, 'ConfigResponse')
  }
}
