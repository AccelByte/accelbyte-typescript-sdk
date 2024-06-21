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
import { AnonymizationAdminApi } from '../AnonymizationAdminApi.js'

export enum Key_AnonymizationAdmin {
  AnonymizationProfile_ByUserId = 'AnonymizationAdmin.AnonymizationProfile_ByUserId'
}

export const useAdmDeleteAnonymizationProfile_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await AnonymizationAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteAnonymizationProfile_ByUserId(
      input.userId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.AnonymizationProfile_ByUserId],
    mutationFn,
    ...options
  })
}
