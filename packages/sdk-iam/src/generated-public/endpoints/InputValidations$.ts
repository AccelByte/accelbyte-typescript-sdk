/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { InputValidationConfigVersion } from '../../generated-definitions/InputValidationConfigVersion.js'
import { InputValidationsPublicResponse } from '../../generated-definitions/InputValidationsPublicResponse.js'

export class InputValidations$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * No role required This endpoint is to get list of input validation configuration. &lt;code&gt;regex&lt;/code&gt; parameter will be returned if &lt;code&gt;isCustomRegex&lt;/code&gt; is true. Otherwise, it will be empty.
   */
  getInputValidations(queryParams?: {
    defaultOnEmpty?: boolean | null
    languageCode?: string | null
  }): Promise<IResponse<InputValidationsPublicResponse>> {
    const params = { defaultOnEmpty: true, ...queryParams } as SDKRequestConfig
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
  getInputValidation_ByField(field: string): Promise<IResponse<InputValidationConfigVersion>> {
    const params = {} as SDKRequestConfig
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
