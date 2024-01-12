/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { EnvironmentVariableListResponse } from '../../generated-definitions/EnvironmentVariableListResponse.js'

export class EnvironmentVariableAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * List of environment variables.
   */
  getEnvironmentVariables(): Promise<IResponseWithSync<EnvironmentVariableListResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/environment-variables'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EnvironmentVariableListResponse, 'EnvironmentVariableListResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
