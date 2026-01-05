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
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { AnonymizationAdminApi } from '../AnonymizationAdminApi.js'

export enum Key_AnonymizationAdmin {
  AnonymizationLeaderboard_ByUserId = 'Leaderboard.AnonymizationAdmin.AnonymizationLeaderboard_ByUserId'
}

/**
 * &lt;p&gt;This API will delete specified user leaderboard&lt;p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AnonymizationAdmin.AnonymizationLeaderboard_ByUserId, input]
 * }
 * ```
 */
export const useAnonymizationAdminApi_DeleteAnonymizationLeaderboard_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await AnonymizationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteAnonymizationLeaderboard_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.AnonymizationLeaderboard_ByUserId],
    mutationFn,
    ...options
  })
}
