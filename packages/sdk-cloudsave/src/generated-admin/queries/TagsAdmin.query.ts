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
import { TagsAdminApi } from '../TagsAdminApi.js'

import { ListTagsResponse } from '../../generated-definitions/ListTagsResponse.js'
import { TagRequest } from '../../generated-definitions/TagRequest.js'

export enum Key_TagsAdmin {
  Tags = 'Cloudsave.TagsAdmin.Tags',
  Tag = 'Cloudsave.TagsAdmin.Tag',
  Tag_ByTag = 'Cloudsave.TagsAdmin.Tag_ByTag'
}

/**
 * ## Description Retrieve list of available tags by namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TagsAdmin.Tags, input]
 * }
 * ```
 */
export const useTagsAdminApi_GetTags = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ListTagsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListTagsResponse>) => void
): UseQueryResult<ListTagsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTagsAdminApi_GetTags>[1]) => async () => {
    const response = await TagsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTags(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListTagsResponse, AxiosError<ApiError>>({
    queryKey: [Key_TagsAdmin.Tags, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * ## Description This endpoint will create new tags
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TagsAdmin.Tag, input]
 * }
 * ```
 */
export const useTagsAdminApi_CreateTagMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: TagRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: TagRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: TagRequest }) => {
    const response = await TagsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createTag(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TagsAdmin.Tag],
    mutationFn,
    ...options
  })
}

/**
 * ## Description This endpoint will delete tag by name
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TagsAdmin.Tag_ByTag, input]
 * }
 * ```
 */
export const useTagsAdminApi_DeleteTag_ByTagMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { tag: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { tag: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { tag: string }) => {
    const response = await TagsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteTag_ByTag(input.tag)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TagsAdmin.Tag_ByTag],
    mutationFn,
    ...options
  })
}
