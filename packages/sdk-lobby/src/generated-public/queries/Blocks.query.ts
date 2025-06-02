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
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { BlocksApi } from '../BlocksApi.js'

import { NativeUserBlockRequest } from '../../generated-definitions/NativeUserBlockRequest.js'
import { NativeUserBlockResponseArray } from '../../generated-definitions/NativeUserBlockResponseArray.js'

export enum Key_Blocks {
  SyncMeBlock = 'Lobby.Blocks.SyncMeBlock'
}

/**
 * Sync blocked user using server to server call to native first party server. Supported platforms: ps5, ps4 and pspc : the default environment would be sp-int, can be override using psnEnv. psnEnv consist of sp-int (default), prod-qa, np
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Blocks.SyncMeBlock, input]
 * }
 * ```
 */
export const useBlocksApi_PatchSyncMeBlockMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<NativeUserBlockResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { data: NativeUserBlockRequest[] }>,
    'mutationKey'
  >,
  callback?: (data: NativeUserBlockResponseArray) => void
): UseMutationResult<NativeUserBlockResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { data: NativeUserBlockRequest[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: NativeUserBlockRequest[] }) => {
    const response = await BlocksApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchSyncMeBlock(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Blocks.SyncMeBlock],
    mutationFn,
    ...options
  })
}
