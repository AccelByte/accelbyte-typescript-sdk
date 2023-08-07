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
import { ListEnvironmentVariablesResponse } from '../definitions/ListEnvironmentVariablesResponse.js'

export class EnvironmentVariables$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required Permission: ADMIN:MATCHMAKING:CONFIGURATION:ENVIRONMENTVARIABLE [READ] Required Scope: social List environment variables.
   */
  getEnvironmentVariables(): Promise<IResponseWithSync<ListEnvironmentVariablesResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/environment-variables'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ListEnvironmentVariablesResponse, 'ListEnvironmentVariablesResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
