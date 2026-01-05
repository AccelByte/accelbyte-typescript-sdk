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
import { SessionPlatformAdminApi } from '../SessionPlatformAdminApi.js'

import { XblUserSessionRequest } from '../../generated-definitions/XblUserSessionRequest.js'

export enum Key_SessionPlatformAdmin {
  SessionXbl_ByUserId = 'Platform.SessionPlatformAdmin.SessionXbl_ByUserId'
}

/**
 * This API is used to register/update a session on xbox.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SessionPlatformAdmin.SessionXbl_ByUserId, input]
 * }
 * ```
 */
export const useSessionPlatformAdminApi_UpdateSessionXbl_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: XblUserSessionRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: XblUserSessionRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: XblUserSessionRequest }) => {
    const response = await SessionPlatformAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateSessionXbl_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SessionPlatformAdmin.SessionXbl_ByUserId],
    mutationFn,
    ...options
  })
}
