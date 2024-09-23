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

import { CreateTagReq } from '../../generated-definitions/CreateTagReq.js'
import { CreateTagResp } from '../../generated-definitions/CreateTagResp.js'
import { ListTagsResp } from '../../generated-definitions/ListTagsResp.js'

export enum Key_TagsAdmin {
  Tags = 'Inventory.TagsAdmin.Tags',
  Tag = 'Inventory.TagsAdmin.Tag',
  Tag_ByTagName = 'Inventory.TagsAdmin.Tag_ByTagName'
}

/**
 *  This endpoint will list all tags in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:TAG [READ]
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
  input: SdkSetConfigParam & {
    queryParams?: {
      limit?: number
      offset?: number
      owner?: string | null
      sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
    }
  },
  options?: Omit<UseQueryOptions<ListTagsResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListTagsResp>) => void
): UseQueryResult<ListTagsResp, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTagsAdminApi_GetTags>[1]) => async () => {
    const response = await TagsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTags(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListTagsResp, AxiosError<ApiError>>({
    queryKey: [Key_TagsAdmin.Tags, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 *  This endpoint will create a new tag. The tag name must be unique per namespace. It is safe to call this endpoint even if the tag already exists. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:TAG [CREATE]
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
  options?: Omit<UseMutationOptions<CreateTagResp, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTagReq }>, 'mutationKey'>,
  callback?: (data: CreateTagResp) => void
): UseMutationResult<CreateTagResp, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTagReq }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateTagReq }) => {
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
 *  This endpoint will delete a tag by tagName in a specified namespace. If the tagName doesn&#39;t exist in a namespace, it&#39;ll return not found. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:TAG [DELETE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TagsAdmin.Tag_ByTagName, input]
 * }
 * ```
 */
export const useTagsAdminApi_DeleteTag_ByTagNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { tagName: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { tagName: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { tagName: string }) => {
    const response = await TagsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteTag_ByTagName(
      input.tagName
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TagsAdmin.Tag_ByTagName],
    mutationFn,
    ...options
  })
}
