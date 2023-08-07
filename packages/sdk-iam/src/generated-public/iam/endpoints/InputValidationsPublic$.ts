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
import { InputValidationConfigVersion } from '../definitions/InputValidationConfigVersion.js'
import { InputValidationsPublicResponse } from '../definitions/InputValidationsPublicResponse.js'

export class InputValidationsPublic$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * &lt;p&gt;No role required&lt;/p&gt; &lt;p&gt;This endpoint is to get list of input validation configuration.&lt;/p&gt; &lt;p&gt;&lt;code&gt;regex&lt;/code&gt; parameter will be returned if &lt;code&gt;isCustomRegex&lt;/code&gt; is true. Otherwise, it will be empty.&lt;/p&gt;
   */
  getInputValidations(queryParams?: {
    defaultOnEmpty?: boolean | null
    languageCode?: string | null
  }): Promise<IResponseWithSync<InputValidationsPublicResponse>> {
    const params = { defaultOnEmpty: true, ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/inputValidations'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, InputValidationsPublicResponse, 'InputValidationsPublicResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;This endpoint is to get input validation configuration by field.&lt;/p&gt;
   */
  getInputValidation_ByField(field: string): Promise<IResponseWithSync<InputValidationConfigVersion>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/inputValidations/{field}'.replace('{field}', field)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, InputValidationConfigVersion, 'InputValidationConfigVersion')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
