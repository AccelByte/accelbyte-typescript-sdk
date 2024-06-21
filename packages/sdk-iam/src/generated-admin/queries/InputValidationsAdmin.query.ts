/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiError } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { InputValidationsAdminApi } from '../InputValidationsAdminApi.js'

import { InputValidationUpdatePayload } from '../../generated-definitions/InputValidationUpdatePayload.js'
import { InputValidationsResponse } from '../../generated-definitions/InputValidationsResponse.js'

export enum Key_InputValidationsAdmin {
  InputValidations = 'InputValidationsAdmin.InputValidations',
  InputValidation = 'InputValidationsAdmin.InputValidation',
  InputValidation_ByField = 'InputValidationsAdmin.InputValidation_ByField'
}

export const useAdmInputValidations = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<InputValidationsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: InputValidationsResponse) => void
): UseQueryResult<InputValidationsResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmInputValidations>[1]) => async () => {
    const data = await InputValidationsAdminApi(sdk, { namespace: input.namespace }).getInputValidations()
    callback && callback(data)
    return data
  }

  return useQuery<InputValidationsResponse, AxiosError<ApiError>>({
    queryKey: [Key_InputValidationsAdmin.InputValidations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateInputValidationMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: InputValidationUpdatePayload[] }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: InputValidationUpdatePayload[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: InputValidationUpdatePayload[] }) => {
    const data = await InputValidationsAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateInputValidation(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_InputValidationsAdmin.InputValidation],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteInputValidation_ByFieldMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { field: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { field: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { field: string }) => {
    const data = await InputValidationsAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteInputValidation_ByField(
      input.field
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_InputValidationsAdmin.InputValidation_ByField],
    mutationFn,
    ...options
  })
}
