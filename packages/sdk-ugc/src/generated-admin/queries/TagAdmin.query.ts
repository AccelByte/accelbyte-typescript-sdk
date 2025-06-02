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
import { TagAdminApi } from '../TagAdminApi.js'

import { CreateTagRequest } from '../../generated-definitions/CreateTagRequest.js'
import { CreateTagResponse } from '../../generated-definitions/CreateTagResponse.js'
import { PaginatedGetTagResponse } from '../../generated-definitions/PaginatedGetTagResponse.js'

export enum Key_TagAdmin {
  Tags = 'Ugc.TagAdmin.Tags',
  Tag = 'Ugc.TagAdmin.Tag',
  Tag_ByTagId = 'Ugc.TagAdmin.Tag_ByTagId'
}

/**
 * Get available tags paginated
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TagAdmin.Tags, input]
 * }
 * ```
 */
export const useTagAdminApi_GetTags = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedGetTagResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedGetTagResponse>) => void
): UseQueryResult<PaginatedGetTagResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTagAdminApi_GetTags>[1]) => async () => {
    const response = await TagAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTags(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedGetTagResponse, AxiosError<ApiError>>({
    queryKey: [Key_TagAdmin.Tags, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Creates a new tag
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TagAdmin.Tag, input]
 * }
 * ```
 */
export const useTagAdminApi_CreateTagMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateTagResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTagRequest }>,
    'mutationKey'
  >,
  callback?: (data: CreateTagResponse) => void
): UseMutationResult<CreateTagResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTagRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateTagRequest }) => {
    const response = await TagAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createTag(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TagAdmin.Tag],
    mutationFn,
    ...options
  })
}

/**
 * Delete existing tag
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TagAdmin.Tag_ByTagId, input]
 * }
 * ```
 */
export const useTagAdminApi_DeleteTag_ByTagIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { tagId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { tagId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { tagId: string }) => {
    const response = await TagAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteTag_ByTagId(input.tagId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TagAdmin.Tag_ByTagId],
    mutationFn,
    ...options
  })
}

/**
 * Update existing tag
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TagAdmin.Tag_ByTagId, input]
 * }
 * ```
 */
export const useTagAdminApi_UpdateTag_ByTagIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateTagResponse, AxiosError<ApiError>, SdkSetConfigParam & { tagId: string; data: CreateTagRequest }>,
    'mutationKey'
  >,
  callback?: (data: CreateTagResponse) => void
): UseMutationResult<CreateTagResponse, AxiosError<ApiError>, SdkSetConfigParam & { tagId: string; data: CreateTagRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { tagId: string; data: CreateTagRequest }) => {
    const response = await TagAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateTag_ByTagId(
      input.tagId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TagAdmin.Tag_ByTagId],
    mutationFn,
    ...options
  })
}
