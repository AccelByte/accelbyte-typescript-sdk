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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { PublicStagingContentApi } from '../PublicStagingContentApi.js'

import { PaginatedListStagingContentResponse } from '../../generated-definitions/PaginatedListStagingContentResponse.js'
import { StagingContentResponse } from '../../generated-definitions/StagingContentResponse.js'
import { UpdateStagingContentRequest } from '../../generated-definitions/UpdateStagingContentRequest.js'

export enum Key_PublicStagingContent {
  StagingContents_ByUserId_v2 = 'Ugc.PublicStagingContent.StagingContents_ByUserId_v2',
  StagingContent_ByUserId_ByContentId_v2 = 'Ugc.PublicStagingContent.StagingContent_ByUserId_ByContentId_v2'
}

/**
 * List user staging contents
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicStagingContent.StagingContents_ByUserId_v2, input]
 * }
 * ```
 */
export const usePublicStagingContentApi_GetStagingContents_ByUserId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: string | null }
  },
  options?: Omit<UseQueryOptions<PaginatedListStagingContentResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedListStagingContentResponse>) => void
): UseQueryResult<PaginatedListStagingContentResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePublicStagingContentApi_GetStagingContents_ByUserId_v2>[1]) => async () => {
      const response = await PublicStagingContentApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getStagingContents_ByUserId_v2(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<PaginatedListStagingContentResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicStagingContent.StagingContents_ByUserId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete user staging content by ID
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicStagingContent.StagingContent_ByUserId_ByContentId_v2, input]
 * }
 * ```
 */
export const usePublicStagingContentApi_DeleteStagingContent_ByUserId_ByContentIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; contentId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; contentId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; contentId: string }) => {
    const response = await PublicStagingContentApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteStagingContent_ByUserId_ByContentId_v2(input.userId, input.contentId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicStagingContent.StagingContent_ByUserId_ByContentId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Get user staging content by ID
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicStagingContent.StagingContent_ByUserId_ByContentId_v2, input]
 * }
 * ```
 */
export const usePublicStagingContentApi_GetStagingContent_ByUserId_ByContentId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; contentId: string },
  options?: Omit<UseQueryOptions<StagingContentResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<StagingContentResponse>) => void
): UseQueryResult<StagingContentResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePublicStagingContentApi_GetStagingContent_ByUserId_ByContentId_v2>[1]) => async () => {
      const response = await PublicStagingContentApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getStagingContent_ByUserId_ByContentId_v2(input.userId, input.contentId)
      callback && callback(response)
      return response.data
    }

  return useQuery<StagingContentResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicStagingContent.StagingContent_ByUserId_ByContentId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update staging content
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicStagingContent.StagingContent_ByUserId_ByContentId_v2, input]
 * }
 * ```
 */
export const usePublicStagingContentApi_UpdateStagingContent_ByUserId_ByContentIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      StagingContentResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; contentId: string; data: UpdateStagingContentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: StagingContentResponse) => void
): UseMutationResult<
  StagingContentResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; contentId: string; data: UpdateStagingContentRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; contentId: string; data: UpdateStagingContentRequest }) => {
    const response = await PublicStagingContentApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStagingContent_ByUserId_ByContentId_v2(input.userId, input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicStagingContent.StagingContent_ByUserId_ByContentId_v2],
    mutationFn,
    ...options
  })
}
