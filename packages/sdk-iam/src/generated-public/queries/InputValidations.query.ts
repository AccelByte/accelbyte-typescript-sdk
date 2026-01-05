/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { InputValidationsApi } from '../InputValidationsApi.js'

import { InputValidationConfigVersion } from '../../generated-definitions/InputValidationConfigVersion.js'
import { InputValidationsPublicResponse } from '../../generated-definitions/InputValidationsPublicResponse.js'

export enum Key_InputValidations {
  InputValidations_v3 = 'Iam.InputValidations.InputValidations_v3',
  InputValidation_ByField_v3 = 'Iam.InputValidations.InputValidation_ByField_v3'
}

/**
 * No role required This endpoint is to get list of input validation configuration. &lt;code&gt;regex&lt;/code&gt; parameter will be returned if &lt;code&gt;isCustomRegex&lt;/code&gt; is true. Otherwise, it will be empty.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InputValidations.InputValidations_v3, input]
 * }
 * ```
 */
export const useInputValidationsApi_GetInputValidations_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { defaultOnEmpty?: boolean | null; languageCode?: string | null } },
  options?: Omit<UseQueryOptions<InputValidationsPublicResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<InputValidationsPublicResponse>) => void
): UseQueryResult<InputValidationsPublicResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useInputValidationsApi_GetInputValidations_v3>[1]) => async () => {
    const response = await InputValidationsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getInputValidations_v3(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<InputValidationsPublicResponse, AxiosError<ApiError>>({
    queryKey: [Key_InputValidations.InputValidations_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint is to get input validation configuration by field.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InputValidations.InputValidation_ByField_v3, input]
 * }
 * ```
 */
export const useInputValidationsApi_GetInputValidation_ByField_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { field: string },
  options?: Omit<UseQueryOptions<InputValidationConfigVersion, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<InputValidationConfigVersion>) => void
): UseQueryResult<InputValidationConfigVersion, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useInputValidationsApi_GetInputValidation_ByField_v3>[1]) => async () => {
    const response = await InputValidationsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getInputValidation_ByField_v3(input.field)
    callback && callback(response)
    return response.data
  }

  return useQuery<InputValidationConfigVersion, AxiosError<ApiError>>({
    queryKey: [Key_InputValidations.InputValidation_ByField_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
