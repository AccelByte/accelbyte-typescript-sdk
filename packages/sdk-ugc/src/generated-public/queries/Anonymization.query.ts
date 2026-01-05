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
import { AnonymizationApi } from '../AnonymizationApi.js'

export enum Key_Anonymization {
  Group_ByUserId = 'Ugc.Anonymization.Group_ByUserId',
  State_ByUserId = 'Ugc.Anonymization.State_ByUserId',
  Channel_ByUserId = 'Ugc.Anonymization.Channel_ByUserId',
  Content_ByUserId = 'Ugc.Anonymization.Content_ByUserId'
}

/**
 * Delete all user group
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Anonymization.Group_ByUserId, input]
 * }
 * ```
 */
export const useAnonymizationApi_DeleteGroup_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await AnonymizationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteGroup_ByUserId(
      input.userId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Anonymization.Group_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Required permission NAMESPACE:{namespace}:USER:{userId}&#34; [DELETE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Anonymization.State_ByUserId, input]
 * }
 * ```
 */
export const useAnonymizationApi_DeleteState_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await AnonymizationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteState_ByUserId(
      input.userId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Anonymization.State_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Delete all user channel
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Anonymization.Channel_ByUserId, input]
 * }
 * ```
 */
export const useAnonymizationApi_DeleteChannel_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await AnonymizationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteChannel_ByUserId(
      input.userId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Anonymization.Channel_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Anonymization.Content_ByUserId, input]
 * }
 * ```
 */
export const useAnonymizationApi_DeleteContent_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await AnonymizationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteContent_ByUserId(
      input.userId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Anonymization.Content_ByUserId],
    mutationFn,
    ...options
  })
}
