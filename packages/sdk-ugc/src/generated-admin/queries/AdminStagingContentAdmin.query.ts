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
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { AdminStagingContentAdminApi } from '../AdminStagingContentAdminApi.js'

import { ApproveStagingContentRequest } from '../../generated-definitions/ApproveStagingContentRequest.js'
import { PaginatedListStagingContentResponse } from '../../generated-definitions/PaginatedListStagingContentResponse.js'
import { StagingContentResponse } from '../../generated-definitions/StagingContentResponse.js'

export enum Key_AdminStagingContentAdmin {
  StagingContents = 'AdminStagingContentAdmin.StagingContents',
  StagingContent_ByContentId = 'AdminStagingContentAdmin.StagingContent_ByContentId',
  StagingContents_ByUserId = 'AdminStagingContentAdmin.StagingContents_ByUserId',
  Approve_ByContentId = 'AdminStagingContentAdmin.Approve_ByContentId'
}

export const useAdmStagingContents = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: string | null } },
  options?: Omit<UseQueryOptions<PaginatedListStagingContentResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedListStagingContentResponse) => void
): UseQueryResult<PaginatedListStagingContentResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStagingContents>[1]) => async () => {
    const data = await AdminStagingContentAdminApi(sdk, { namespace: input.namespace }).getStagingContents(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedListStagingContentResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminStagingContentAdmin.StagingContents, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmStagingContent_ByContentId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { contentId: string },
  options?: Omit<UseQueryOptions<StagingContentResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: StagingContentResponse) => void
): UseQueryResult<StagingContentResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStagingContent_ByContentId>[1]) => async () => {
    const data = await AdminStagingContentAdminApi(sdk, { namespace: input.namespace }).getStagingContent_ByContentId(input.contentId)
    callback && callback(data)
    return data
  }

  return useQuery<StagingContentResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminStagingContentAdmin.StagingContent_ByContentId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmStagingContents_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: string | null } },
  options?: Omit<UseQueryOptions<PaginatedListStagingContentResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedListStagingContentResponse) => void
): UseQueryResult<PaginatedListStagingContentResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStagingContents_ByUserId>[1]) => async () => {
    const data = await AdminStagingContentAdminApi(sdk, { namespace: input.namespace }).getStagingContents_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedListStagingContentResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminStagingContentAdmin.StagingContents_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateApprove_ByContentIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<StagingContentResponse, AxiosError<ApiError>, ApiArgs & { contentId: string; data: ApproveStagingContentRequest }>,
    'mutationKey'
  >,
  callback?: (data: StagingContentResponse) => void
): UseMutationResult<StagingContentResponse, AxiosError<ApiError>, ApiArgs & { contentId: string; data: ApproveStagingContentRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { contentId: string; data: ApproveStagingContentRequest }) => {
    const data = await AdminStagingContentAdminApi(sdk, { namespace: input.namespace, config: input.config }).createApprove_ByContentId(
      input.contentId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminStagingContentAdmin.Approve_ByContentId],
    mutationFn,
    ...options
  })
}
