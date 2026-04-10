/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import type { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import type { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import type { AxiosError, AxiosResponse } from 'axios'
import { InputValidationsApi } from '../InputValidationsApi.js'

import { InputValidationConfigVersion } from '../../generated-definitions/InputValidationConfigVersion.js'
import { InputValidationsPublicResponse } from '../../generated-definitions/InputValidationsPublicResponse.js'

export const Key_InputValidations = {
  InputValidations_v3: 'Iam.InputValidations.InputValidations_v3',
  InputValidation_ByField_v3: 'Iam.InputValidations.InputValidation_ByField_v3'
} as const

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
    callback?.(response)
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
    callback?.(response)
    return response.data
  }

  return useQuery<InputValidationConfigVersion, AxiosError<ApiError>>({
    queryKey: [Key_InputValidations.InputValidation_ByField_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
