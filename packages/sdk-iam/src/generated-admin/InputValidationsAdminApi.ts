/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { InputValidationUpdatePayload } from '../generated-definitions/InputValidationUpdatePayload.js'
import { InputValidationsResponse } from '../generated-definitions/InputValidationsResponse.js'
import { InputValidationsAdmin$ } from './endpoints/InputValidationsAdmin$.js'

export function InputValidationsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getInputValidations_v3(): Promise<AxiosResponse<InputValidationsResponse>> {
    const $ = new InputValidationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInputValidations_v3()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateInputValidation_v3(data: InputValidationUpdatePayload[]): Promise<AxiosResponse<unknown>> {
    const $ = new InputValidationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateInputValidation_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteInputValidation_ByField_v3(field: string): Promise<AxiosResponse<unknown>> {
    const $ = new InputValidationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteInputValidation_ByField_v3(field)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This endpoint is to get list of input validation configuration. &lt;code&gt;regex&lt;/code&gt; parameter will be returned if &lt;code&gt;isCustomRegex&lt;/code&gt; is true. Otherwise, it will be empty.
     */
    getInputValidations_v3,
    /**
     * This endpoint is used to update input validation configuration. Supported &lt;code&gt;field&lt;/code&gt;: - displayName - password - username - email - avatar If &lt;code&gt;isCustomRegex&lt;/code&gt; is set to true, &lt;code&gt;regex&lt;/code&gt; parameter will be used as input validation and the other parameters will be ignored. Otherwise, &lt;code&gt;regex&lt;/code&gt; parameter will be ignored and regex for input validation will be generated based on the combination of the other parameters. If &lt;code&gt;allowUnicode&lt;/code&gt; is set to true, unicode regex pattern will be use as the input validation and the other parameters will be ignored. Supported &lt;code&gt;letterCase&lt;/code&gt;: - lowercase - uppercase - mixed: uppercase and lowercase - any: uppercase and/or lowercase flexible special character non words with &lt;code&gt;allowAllSpecialCharacters&lt;/code&gt; if &lt;code&gt;allowAllSpecialCharacters&lt;/code&gt; is set to true &lt;code&gt;specialCharacters&lt;/code&gt; will forced to empty. Supported &lt;code&gt;specialCharacterLocation&lt;/code&gt;: - anywhere - middle If &lt;code&gt;specialCharacters&lt;/code&gt; is empty, &lt;code&gt;specialCharacterLocation&lt;/code&gt; and &lt;code&gt;maxRepeatingSpecialCharacter&lt;/code&gt; will be ignored. &lt;code&gt;minCharType&lt;/code&gt; is used to identify how many required criteria in the regex. The supported criteria are number, letter, special character, and letter case. If set to 0 or 1 means all criteria are optional. It can be set as much as the number of criteria enabled. If &lt;code&gt;blockedWord&lt;/code&gt; is set by admin, any input from user which contain kind of blocked word(s) will be blocked for create/upgrade/update account If &lt;code&gt;avatarConfig&lt;/code&gt; is set, will use this config and skip all the other validation conditions
     */
    updateInputValidation_v3,
    /**
     * This endpoint is used to reset input validation to the default input validation configurations
     */
    deleteInputValidation_ByField_v3
  }
}
