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
  Group_ByUserId = 'AnonymizationAdmin.Group_ByUserId',
  State_ByUserId = 'AnonymizationAdmin.State_ByUserId',
  Channel_ByUserId = 'AnonymizationAdmin.Channel_ByUserId',
  Content_ByUserId = 'AnonymizationAdmin.Content_ByUserId'
}

export const useAdmDeleteGroup_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await AnonymizationAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteGroup_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.Group_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteState_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await AnonymizationAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteState_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.State_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteChannel_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await AnonymizationAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteChannel_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.Channel_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteContent_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await AnonymizationAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteContent_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AnonymizationAdmin.Content_ByUserId],
    mutationFn,
    ...options
  })
}
