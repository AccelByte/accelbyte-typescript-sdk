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
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { SessionPlatformAdminApi } from '../SessionPlatformAdminApi.js'

import { XblUserSessionRequest } from '../../generated-definitions/XblUserSessionRequest.js'

export enum Key_SessionPlatformAdmin {
  SessionXbl_ByUserId = 'SessionPlatformAdmin.SessionXbl_ByUserId'
}

export const useAdmUpdateSessionXbl_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: XblUserSessionRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: XblUserSessionRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: XblUserSessionRequest }) => {
    const data = await SessionPlatformAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateSessionXbl_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SessionPlatformAdmin.SessionXbl_ByUserId],
    mutationFn,
    ...options
  })
}
