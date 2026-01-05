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
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { StagingContentAdminApi } from '../StagingContentAdminApi.js'

import { ApproveStagingContentRequest } from '../../generated-definitions/ApproveStagingContentRequest.js'
import { PaginatedListStagingContentResponse } from '../../generated-definitions/PaginatedListStagingContentResponse.js'
import { StagingContentResponse } from '../../generated-definitions/StagingContentResponse.js'

export enum Key_StagingContentAdmin {
  StagingContents_v2 = 'Ugc.StagingContentAdmin.StagingContents_v2',
  StagingContent_ByContentId_v2 = 'Ugc.StagingContentAdmin.StagingContent_ByContentId_v2',
  StagingContents_ByUserId_v2 = 'Ugc.StagingContentAdmin.StagingContents_ByUserId_v2',
  Approve_ByContentId_v2 = 'Ugc.StagingContentAdmin.Approve_ByContentId_v2'
}

/**
 * List content that need admin&#39;s approval
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StagingContentAdmin.StagingContents_v2, input]
 * }
 * ```
 */
export const useStagingContentAdminApi_GetStagingContents_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: string | null } },
  options?: Omit<UseQueryOptions<PaginatedListStagingContentResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedListStagingContentResponse>) => void
): UseQueryResult<PaginatedListStagingContentResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useStagingContentAdminApi_GetStagingContents_v2>[1]) => async () => {
    const response = await StagingContentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getStagingContents_v2(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedListStagingContentResponse, AxiosError<ApiError>>({
    queryKey: [Key_StagingContentAdmin.StagingContents_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get staging content by ID
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StagingContentAdmin.StagingContent_ByContentId_v2, input]
 * }
 * ```
 */
export const useStagingContentAdminApi_GetStagingContent_ByContentId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { contentId: string },
  options?: Omit<UseQueryOptions<StagingContentResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<StagingContentResponse>) => void
): UseQueryResult<StagingContentResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useStagingContentAdminApi_GetStagingContent_ByContentId_v2>[1]) => async () => {
      const response = await StagingContentAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getStagingContent_ByContentId_v2(input.contentId)
      callback && callback(response)
      return response.data
    }

  return useQuery<StagingContentResponse, AxiosError<ApiError>>({
    queryKey: [Key_StagingContentAdmin.StagingContent_ByContentId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * List user content&#39;s that need admin approval
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StagingContentAdmin.StagingContents_ByUserId_v2, input]
 * }
 * ```
 */
export const useStagingContentAdminApi_GetStagingContents_ByUserId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: string | null }
  },
  options?: Omit<UseQueryOptions<PaginatedListStagingContentResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedListStagingContentResponse>) => void
): UseQueryResult<PaginatedListStagingContentResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useStagingContentAdminApi_GetStagingContents_ByUserId_v2>[1]) => async () => {
      const response = await StagingContentAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getStagingContents_ByUserId_v2(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<PaginatedListStagingContentResponse, AxiosError<ApiError>>({
    queryKey: [Key_StagingContentAdmin.StagingContents_ByUserId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Approved content will shown to public player. Rejected content stays in staging area and couldn&#39;t be seen by other player
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StagingContentAdmin.Approve_ByContentId_v2, input]
 * }
 * ```
 */
export const useStagingContentAdminApi_CreateApprove_ByContentIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      StagingContentResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { contentId: string; data: ApproveStagingContentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: StagingContentResponse) => void
): UseMutationResult<
  StagingContentResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { contentId: string; data: ApproveStagingContentRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { contentId: string; data: ApproveStagingContentRequest }) => {
    const response = await StagingContentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createApprove_ByContentId_v2(input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StagingContentAdmin.Approve_ByContentId_v2],
    mutationFn,
    ...options
  })
}
