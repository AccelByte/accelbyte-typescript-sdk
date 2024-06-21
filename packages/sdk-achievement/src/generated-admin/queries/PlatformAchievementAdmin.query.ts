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
import { PlatformAchievementAdminApi } from '../PlatformAchievementAdminApi.js'

import { BulkCreatePsnEventResponse } from '../../generated-definitions/BulkCreatePsnEventResponse.js'
import { BulkCreatePsnEvents } from '../../generated-definitions/BulkCreatePsnEvents.js'

export enum Key_PlatformAchievementAdmin {
  PlatformPsnBulk = 'PlatformAchievementAdmin.PlatformPsnBulk'
}

export const useAdmCreatePlatformPsnBulkMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BulkCreatePsnEventResponse, AxiosError<ApiError>, ApiArgs & { data: BulkCreatePsnEvents }>,
    'mutationKey'
  >,
  callback?: (data: BulkCreatePsnEventResponse) => void
): UseMutationResult<BulkCreatePsnEventResponse, AxiosError<ApiError>, ApiArgs & { data: BulkCreatePsnEvents }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: BulkCreatePsnEvents }) => {
    const data = await PlatformAchievementAdminApi(sdk, { namespace: input.namespace, config: input.config }).createPlatformPsnBulk(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PlatformAchievementAdmin.PlatformPsnBulk],
    mutationFn,
    ...options
  })
}
