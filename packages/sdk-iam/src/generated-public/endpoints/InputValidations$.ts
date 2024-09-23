/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { InputValidationConfigVersion } from '../../generated-definitions/InputValidationConfigVersion.js'
import { InputValidationsPublicResponse } from '../../generated-definitions/InputValidationsPublicResponse.js'

export class InputValidations$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * No role required This endpoint is to get list of input validation configuration. &lt;code&gt;regex&lt;/code&gt; parameter will be returned if &lt;code&gt;isCustomRegex&lt;/code&gt; is true. Otherwise, it will be empty.
   */
  getInputValidations_v3(queryParams?: {
    defaultOnEmpty?: boolean | null
    languageCode?: string | null
  }): Promise<Response<InputValidationsPublicResponse>> {
    const params = { defaultOnEmpty: true, ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/public/inputValidations'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      InputValidationsPublicResponse,
      'InputValidationsPublicResponse'
    )
  }
  /**
   * This endpoint is to get input validation configuration by field.
   */
  getInputValidation_ByField_v3(field: string): Promise<Response<InputValidationConfigVersion>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/public/inputValidations/{field}'.replace('{field}', field)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      InputValidationConfigVersion,
      'InputValidationConfigVersion'
    )
  }
}
