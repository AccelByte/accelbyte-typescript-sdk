/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { InputValidationsPublicResponse } from './definitions/InputValidationsPublicResponse'

export class InputValidations$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * <p>No role required</p>
   * 		<p>This endpoint is to get list of input validation configuration.</p>
   * 		<p><code>regex</code> parameter will be returned if <code>isCustomRegex</code> is true. Otherwise, it will be empty.</p>
   *
   */
  fetchIamV3PublicInputValidations<T = InputValidationsPublicResponse>(queryParams?: {
    languageCode?: string | null
    defaultOnEmpty?: boolean | null
  }): Promise<IResponseWithSync<T>> {
    const params = { defaultOnEmpty: true, ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/inputValidations'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, InputValidationsPublicResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
