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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { MatchmakingOperationsApi } from '../MatchmakingOperationsApi.js'

import { AppMessageDeclarationArray } from '../../generated-definitions/AppMessageDeclarationArray.js'

export enum Key_MatchmakingOperations {
  Version = 'Matchmaking.MatchmakingOperations.Version',
  Messages = 'Matchmaking.MatchmakingOperations.Messages'
}

export const useMatchmakingOperationsApi_GetVersion = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchmakingOperationsApi_GetVersion>[1]) => async () => {
    const response = await MatchmakingOperationsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getVersion()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_MatchmakingOperations.Version, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * get the list of messages.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchmakingOperations.Messages, input]
 * }
 * ```
 */
export const useMatchmakingOperationsApi_GetMessages = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<AppMessageDeclarationArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AppMessageDeclarationArray>) => void
): UseQueryResult<AppMessageDeclarationArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchmakingOperationsApi_GetMessages>[1]) => async () => {
    const response = await MatchmakingOperationsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getMessages()
    callback && callback(response)
    return response.data
  }

  return useQuery<AppMessageDeclarationArray, AxiosError<ApiError>>({
    queryKey: [Key_MatchmakingOperations.Messages, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
