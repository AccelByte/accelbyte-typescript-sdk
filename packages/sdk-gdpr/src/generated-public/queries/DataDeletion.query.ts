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
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { DataDeletionApi } from '../DataDeletionApi.js'

import { DeletionStatus } from '../../generated-definitions/DeletionStatus.js'
import { RequestDeleteResponse } from '../../generated-definitions/RequestDeleteResponse.js'

export enum Key_DataDeletion {
  UserMeDeletion = 'Gdpr.DataDeletion.UserMeDeletion',
  UsersMeDeletionsStatus = 'Gdpr.DataDeletion.UsersMeDeletionsStatus',
  Deletion_ByUserId = 'Gdpr.DataDeletion.Deletion_ByUserId',
  DeletionsStatus_ByUserId = 'Gdpr.DataDeletion.DeletionsStatus_ByUserId'
}

/**
 * Cancel my account deletion request Requires valid user access token
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataDeletion.UserMeDeletion, input]
 * }
 * ```
 */
export const useDataDeletionApi_DeleteUserMeDeletionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await DataDeletionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteUserMeDeletion()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DataDeletion.UserMeDeletion],
    mutationFn,
    ...options
  })
}

/**
 * Submit my account deletion requests. Requires valid user access token This is for in-game only and require a valid platformId and platform token. If a full account is not logged by 3rd platform, then please use [/gdpr/public/namespaces/{namespace}/users/{userId}/deletions](#operations-Data_Deletion-PublicSubmitUserAccountDeletionRequest) ### Request Header: - **Content-Type: application/x-www-form-urlencoded**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataDeletion.UserMeDeletion, input]
 * }
 * ```
 */
export const useDataDeletionApi_PostUserMeDeletionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      RequestDeleteResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: { platformId: string | null; platformToken: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: RequestDeleteResponse) => void
): UseMutationResult<
  RequestDeleteResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: { platformId: string | null; platformToken: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { platformId: string | null; platformToken: string | null } }) => {
    const response = await DataDeletionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).postUserMeDeletion(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DataDeletion.UserMeDeletion],
    mutationFn,
    ...options
  })
}

/**
 * Retrieve my account deletion status Requires valid user access token
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataDeletion.UsersMeDeletionsStatus, input]
 * }
 * ```
 */
export const useDataDeletionApi_GetUsersMeDeletionsStatus = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<DeletionStatus, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DeletionStatus>) => void
): UseQueryResult<DeletionStatus, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDataDeletionApi_GetUsersMeDeletionsStatus>[1]) => async () => {
    const response = await DataDeletionApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUsersMeDeletionsStatus()
    callback && callback(response)
    return response.data
  }

  return useQuery<DeletionStatus, AxiosError<ApiError>>({
    queryKey: [Key_DataDeletion.UsersMeDeletionsStatus, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Cancel user&#39;s account deletion request Requires valid user access token Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataDeletion.Deletion_ByUserId, input]
 * }
 * ```
 */
export const useDataDeletionApi_DeleteDeletion_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await DataDeletionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteDeletion_ByUserId(
      input.userId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DataDeletion.Deletion_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Submit user&#39;s account deletion request. Requires valid user access token and password Scope: account ### Request Header: - **Content-Type: application/x-www-form-urlencoded**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataDeletion.Deletion_ByUserId, input]
 * }
 * ```
 */
export const useDataDeletionApi_PostDeletion_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      RequestDeleteResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: { password: string | null; languageTag?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: RequestDeleteResponse) => void
): UseMutationResult<
  RequestDeleteResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: { password: string | null; languageTag?: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; data: { password: string | null; languageTag?: string | null } }
  ) => {
    const response = await DataDeletionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).postDeletion_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DataDeletion.Deletion_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Retrieve specific user&#39;s account deletion status Requires valid user access token Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataDeletion.DeletionsStatus_ByUserId, input]
 * }
 * ```
 */
export const useDataDeletionApi_GetDeletionsStatus_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<DeletionStatus, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DeletionStatus>) => void
): UseQueryResult<DeletionStatus, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDataDeletionApi_GetDeletionsStatus_ByUserId>[1]) => async () => {
    const response = await DataDeletionApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getDeletionsStatus_ByUserId(input.userId)
    callback && callback(response)
    return response.data
  }

  return useQuery<DeletionStatus, AxiosError<ApiError>>({
    queryKey: [Key_DataDeletion.DeletionsStatus_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
