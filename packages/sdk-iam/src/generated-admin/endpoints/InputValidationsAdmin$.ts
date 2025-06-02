/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { InputValidationUpdatePayload } from '../../generated-definitions/InputValidationUpdatePayload.js'
import { InputValidationsResponse } from '../../generated-definitions/InputValidationsResponse.js'

export class InputValidationsAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This endpoint is to get list of input validation configuration. &lt;code&gt;regex&lt;/code&gt; parameter will be returned if &lt;code&gt;isCustomRegex&lt;/code&gt; is true. Otherwise, it will be empty.
   */
  getInputValidations_v3(): Promise<Response<InputValidationsResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/inputValidations'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      InputValidationsResponse,
      'InputValidationsResponse'
    )
  }
  /**
   * This endpoint is used to update input validation configuration. Supported &lt;code&gt;field&lt;/code&gt;: - displayName - password - username - email - avatar If &lt;code&gt;isCustomRegex&lt;/code&gt; is set to true, &lt;code&gt;regex&lt;/code&gt; parameter will be used as input validation and the other parameters will be ignored. Otherwise, &lt;code&gt;regex&lt;/code&gt; parameter will be ignored and regex for input validation will be generated based on the combination of the other parameters. If &lt;code&gt;allowUnicode&lt;/code&gt; is set to true, unicode regex pattern will be use as the input validation and the other parameters will be ignored. Supported &lt;code&gt;letterCase&lt;/code&gt;: - lowercase - uppercase - mixed: uppercase and lowercase - any: uppercase and/or lowercase flexible special character non words with &lt;code&gt;allowAllSpecialCharacters&lt;/code&gt; if &lt;code&gt;allowAllSpecialCharacters&lt;/code&gt; is set to true &lt;code&gt;specialCharacters&lt;/code&gt; will forced to empty. Supported &lt;code&gt;specialCharacterLocation&lt;/code&gt;: - anywhere - middle If &lt;code&gt;specialCharacters&lt;/code&gt; is empty, &lt;code&gt;specialCharacterLocation&lt;/code&gt; and &lt;code&gt;maxRepeatingSpecialCharacter&lt;/code&gt; will be ignored. &lt;code&gt;minCharType&lt;/code&gt; is used to identify how many required criteria in the regex. The supported criteria are number, letter, special character, and letter case. If set to 0 or 1 means all criteria are optional. It can be set as much as the number of criteria enabled. If &lt;code&gt;blockedWord&lt;/code&gt; is set by admin, any input from user which contain kind of blocked word(s) will be blocked for create/upgrade/update account If &lt;code&gt;avatarConfig&lt;/code&gt; is set, will use this config and skip all the other validation conditions
   */
  updateInputValidation_v3(data: InputValidationUpdatePayload[]): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/inputValidations'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint is used to reset input validation to the default input validation configurations
   */
  deleteInputValidation_ByField_v3(field: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/inputValidations/{field}'.replace('{field}', field)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
