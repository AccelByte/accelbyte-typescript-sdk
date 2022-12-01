/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { CodeGenUtil } from '@accelbyte/sdk/utils/CodeGenUtil'
import { SdkCache } from '@accelbyte/sdk/utils/SdkCache'
import { IResponseWithSync, Validate } from '@accelbyte/sdk/utils/Validate'
import { AxiosInstance } from 'axios'
/* eslint-disable camelcase */
import { InputValidationsPublicResponse } from './definitions/InputValidationsPublicResponse'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
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
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }
}
