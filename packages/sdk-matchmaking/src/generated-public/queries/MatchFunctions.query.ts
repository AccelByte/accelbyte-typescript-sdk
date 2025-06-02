/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { MatchFunctionsApi } from '../MatchFunctionsApi.js'

import { ListMatchFunctionsResponse } from '../../generated-definitions/ListMatchFunctionsResponse.js'
import { MatchFunctionConfig } from '../../generated-definitions/MatchFunctionConfig.js'
import { MatchFunctionRequest } from '../../generated-definitions/MatchFunctionRequest.js'

export enum Key_MatchFunctions {
  MatchFunctions = 'Matchmaking.MatchFunctions.MatchFunctions',
  MatchFunction = 'Matchmaking.MatchFunctions.MatchFunction',
  MatchFunction_ByName = 'Matchmaking.MatchFunctions.MatchFunction_ByName'
}

/**
 * List existing match functions.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchFunctions.MatchFunctions, input]
 * }
 * ```
 */
export const useMatchFunctionsApi_GetMatchFunctions = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ListMatchFunctionsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListMatchFunctionsResponse>) => void
): UseQueryResult<ListMatchFunctionsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchFunctionsApi_GetMatchFunctions>[1]) => async () => {
    const response = await MatchFunctionsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getMatchFunctions(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListMatchFunctionsResponse, AxiosError<ApiError>>({
    queryKey: [Key_MatchFunctions.MatchFunctions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Creates a new matchmaking function.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchFunctions.MatchFunction, input]
 * }
 * ```
 */
export const useMatchFunctionsApi_CreateMatchFunctionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: MatchFunctionRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: MatchFunctionRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: MatchFunctionRequest }) => {
    const response = await MatchFunctionsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createMatchFunction(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MatchFunctions.MatchFunction],
    mutationFn,
    ...options
  })
}

/**
 * Deletes an existing match function.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchFunctions.MatchFunction_ByName, input]
 * }
 * ```
 */
export const useMatchFunctionsApi_DeleteMatchFunction_ByNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { name: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { name: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { name: string }) => {
    const response = await MatchFunctionsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteMatchFunction_ByName(input.name)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MatchFunctions.MatchFunction_ByName],
    mutationFn,
    ...options
  })
}

/**
 * Get custom match function by name.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchFunctions.MatchFunction_ByName, input]
 * }
 * ```
 */
export const useMatchFunctionsApi_GetMatchFunction_ByName = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { name: string },
  options?: Omit<UseQueryOptions<MatchFunctionConfig, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MatchFunctionConfig>) => void
): UseQueryResult<MatchFunctionConfig, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchFunctionsApi_GetMatchFunction_ByName>[1]) => async () => {
    const response = await MatchFunctionsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getMatchFunction_ByName(
      input.name
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<MatchFunctionConfig, AxiosError<ApiError>>({
    queryKey: [Key_MatchFunctions.MatchFunction_ByName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update existing matchmaking function.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchFunctions.MatchFunction_ByName, input]
 * }
 * ```
 */
export const useMatchFunctionsApi_UpdateMatchFunction_ByNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<MatchFunctionConfig, AxiosError<ApiError>, SdkSetConfigParam & { name: string; data: MatchFunctionRequest }>,
    'mutationKey'
  >,
  callback?: (data: MatchFunctionConfig) => void
): UseMutationResult<MatchFunctionConfig, AxiosError<ApiError>, SdkSetConfigParam & { name: string; data: MatchFunctionRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { name: string; data: MatchFunctionRequest }) => {
    const response = await MatchFunctionsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateMatchFunction_ByName(input.name, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MatchFunctions.MatchFunction_ByName],
    mutationFn,
    ...options
  })
}
