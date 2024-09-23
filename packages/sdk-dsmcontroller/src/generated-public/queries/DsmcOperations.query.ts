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
import { DsmcOperationsApi } from '../DsmcOperationsApi.js'

import { AppMessageDeclarationArray } from '../../generated-definitions/AppMessageDeclarationArray.js'

export enum Key_DsmcOperations {
  Messages = 'Dsmcontroller.DsmcOperations.Messages'
}

/**
 * get the list of messages.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DsmcOperations.Messages, input]
 * }
 * ```
 */
export const useDsmcOperationsApi_GetMessages = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<AppMessageDeclarationArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AppMessageDeclarationArray>) => void
): UseQueryResult<AppMessageDeclarationArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDsmcOperationsApi_GetMessages>[1]) => async () => {
    const response = await DsmcOperationsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getMessages()
    callback && callback(response)
    return response.data
  }

  return useQuery<AppMessageDeclarationArray, AxiosError<ApiError>>({
    queryKey: [Key_DsmcOperations.Messages, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
