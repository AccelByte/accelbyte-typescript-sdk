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
import { AuditLogCommentAdminApi } from '../AuditLogCommentAdminApi.js'

import { AuditCommentCreateRequest } from '../../generated-definitions/AuditCommentCreateRequest.js'
import { AuditCommentUpdateRequest } from '../../generated-definitions/AuditCommentUpdateRequest.js'
import { AuditLogCommentInfo } from '../../generated-definitions/AuditLogCommentInfo.js'
import { PaginatedAuditLogCommentsResponse } from '../../generated-definitions/PaginatedAuditLogCommentsResponse.js'

export enum Key_AuditLogCommentAdmin {
  Comments = 'Audit.AuditLogCommentAdmin.Comments',
  Comment = 'Audit.AuditLogCommentAdmin.Comment',
  Comment_ByCommentId = 'Audit.AuditLogCommentAdmin.Comment_ByCommentId',
  Comment_ByUserId = 'Audit.AuditLogCommentAdmin.Comment_ByUserId'
}

/**
 * This API is used to query audit comments. Only support user access token. Backend will automatically populate displayName information from IAM, fail attempt will return empty display name on actorDisplayName response. actorDisplayName will refer to user uniqueDisplayName if set, then fallback to displayName if not set.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AuditLogCommentAdmin.Comments, input]
 * }
 * ```
 */
export const useAuditLogCommentAdminApi_GetComments = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { logId: string | null; limit?: number; offset?: number; order?: -1 | 1 } },
  options?: Omit<UseQueryOptions<PaginatedAuditLogCommentsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedAuditLogCommentsResponse>) => void
): UseQueryResult<PaginatedAuditLogCommentsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAuditLogCommentAdminApi_GetComments>[1]) => async () => {
    const response = await AuditLogCommentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getComments(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedAuditLogCommentsResponse, AxiosError<ApiError>>({
    queryKey: [Key_AuditLogCommentAdmin.Comments, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to create audit comment. Only support user access token. actorDisplayName will refer to user displayName not a uniqueDisplayName.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AuditLogCommentAdmin.Comment, input]
 * }
 * ```
 */
export const useAuditLogCommentAdminApi_CreateCommentMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AuditLogCommentInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: AuditCommentCreateRequest }>,
    'mutationKey'
  >,
  callback?: (data: AuditLogCommentInfo) => void
): UseMutationResult<AuditLogCommentInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: AuditCommentCreateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: AuditCommentCreateRequest }) => {
    const response = await AuditLogCommentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createComment(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AuditLogCommentAdmin.Comment],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to delete audit comment by Id. Only support user access token. This action will remove comment permanently from database.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AuditLogCommentAdmin.Comment_ByCommentId, input]
 * }
 * ```
 */
export const useAuditLogCommentAdminApi_DeleteComment_ByCommentIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { commentId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { commentId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { commentId: string }) => {
    const response = await AuditLogCommentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteComment_ByCommentId(input.commentId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AuditLogCommentAdmin.Comment_ByCommentId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to update audit comment. Only support user access token. The path namespace should align with audit log objectNamespace. actorDisplayName will refer to user displayName not a uniqueDisplayName.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AuditLogCommentAdmin.Comment_ByCommentId, input]
 * }
 * ```
 */
export const useAuditLogCommentAdminApi_PatchComment_ByCommentIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      AuditLogCommentInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { commentId: string; data: AuditCommentUpdateRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: AuditLogCommentInfo) => void
): UseMutationResult<
  AuditLogCommentInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { commentId: string; data: AuditCommentUpdateRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { commentId: string; data: AuditCommentUpdateRequest }) => {
    const response = await AuditLogCommentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchComment_ByCommentId(input.commentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AuditLogCommentAdmin.Comment_ByCommentId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to mask audit comments related to specific userId. For example: for GDPR account deletion. Comment.actorUserId will be set to &#34;Anonymous&#34; and Comment.isActorActive to false. This process is asynchronous and return http status code 202.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AuditLogCommentAdmin.Comment_ByUserId, input]
 * }
 * ```
 */
export const useAuditLogCommentAdminApi_DeleteComment_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await AuditLogCommentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteComment_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AuditLogCommentAdmin.Comment_ByUserId],
    mutationFn,
    ...options
  })
}
