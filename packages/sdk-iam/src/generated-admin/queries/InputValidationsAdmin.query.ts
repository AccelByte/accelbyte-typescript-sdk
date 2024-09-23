/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { InputValidationsAdminApi } from '../InputValidationsAdminApi.js'

import { InputValidationUpdatePayload } from '../../generated-definitions/InputValidationUpdatePayload.js'
import { InputValidationsResponse } from '../../generated-definitions/InputValidationsResponse.js'

export enum Key_InputValidationsAdmin {
  InputValidations_v3 = 'Iam.InputValidationsAdmin.InputValidations_v3',
  InputValidation_v3 = 'Iam.InputValidationsAdmin.InputValidation_v3',
  InputValidation_ByField_v3 = 'Iam.InputValidationsAdmin.InputValidation_ByField_v3'
}

/**
 * This endpoint is to get list of input validation configuration. &lt;code&gt;regex&lt;/code&gt; parameter will be returned if &lt;code&gt;isCustomRegex&lt;/code&gt; is true. Otherwise, it will be empty.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InputValidationsAdmin.InputValidations_v3, input]
 * }
 * ```
 */
export const useInputValidationsAdminApi_GetInputValidations_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<InputValidationsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<InputValidationsResponse>) => void
): UseQueryResult<InputValidationsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useInputValidationsAdminApi_GetInputValidations_v3>[1]) => async () => {
    const response = await InputValidationsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getInputValidations_v3()
    callback && callback(response)
    return response.data
  }

  return useQuery<InputValidationsResponse, AxiosError<ApiError>>({
    queryKey: [Key_InputValidationsAdmin.InputValidations_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint is used to update input validation configuration. Supported &lt;code&gt;field&lt;/code&gt;: - displayName - password - username - email - avatar If &lt;code&gt;isCustomRegex&lt;/code&gt; is set to true, &lt;code&gt;regex&lt;/code&gt; parameter will be used as input validation and the other parameters will be ignored. Otherwise, &lt;code&gt;regex&lt;/code&gt; parameter will be ignored and regex for input validation will be generated based on the combination of the other parameters. If &lt;code&gt;allowUnicode&lt;/code&gt; is set to true, unicode regex pattern will be use as the input validation and the other parameters will be ignored. Supported &lt;code&gt;letterCase&lt;/code&gt;: - lowercase - uppercase - mixed: uppercase and lowercase - any: uppercase and/or lowercase flexible special character non words with &lt;code&gt;allowAllSpecialCharacters&lt;/code&gt; if &lt;code&gt;allowAllSpecialCharacters&lt;/code&gt; is set to true &lt;code&gt;specialCharacters&lt;/code&gt; will forced to empty. Supported &lt;code&gt;specialCharacterLocation&lt;/code&gt;: - anywhere - middle If &lt;code&gt;specialCharacters&lt;/code&gt; is empty, &lt;code&gt;specialCharacterLocation&lt;/code&gt; and &lt;code&gt;maxRepeatingSpecialCharacter&lt;/code&gt; will be ignored. &lt;code&gt;minCharType&lt;/code&gt; is used to identify how many required criteria in the regex. The supported criteria are number, letter, special character, and letter case. If set to 0 or 1 means all criteria are optional. It can be set as much as the number of criteria enabled. If &lt;code&gt;blockedWord&lt;/code&gt; is set by admin, any input from user which contain kind of blocked word(s) will be blocked for create/upgrade/update account If &lt;code&gt;avatarConfig&lt;/code&gt; is set, will use this config and skip all the other validation conditions
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InputValidationsAdmin.InputValidation_v3, input]
 * }
 * ```
 */
export const useInputValidationsAdminApi_UpdateInputValidationMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: InputValidationUpdatePayload[] }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: InputValidationUpdatePayload[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: InputValidationUpdatePayload[] }) => {
    const response = await InputValidationsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateInputValidation_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_InputValidationsAdmin.InputValidation_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to reset input validation to the default input validation configurations
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InputValidationsAdmin.InputValidation_ByField_v3, input]
 * }
 * ```
 */
export const useInputValidationsAdminApi_DeleteInputValidation_ByFieldMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { field: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { field: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { field: string }) => {
    const response = await InputValidationsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteInputValidation_ByField_v3(input.field)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_InputValidationsAdmin.InputValidation_ByField_v3],
    mutationFn,
    ...options
  })
}
