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
import { AdminTagsAdminApi } from '../AdminTagsAdminApi.js'

import { ListTagsResponse } from '../../generated-definitions/ListTagsResponse.js'
import { TagRequest } from '../../generated-definitions/TagRequest.js'

export enum Key_AdminTagsAdmin {
  Tags = 'AdminTagsAdmin.Tags',
  Tag = 'AdminTagsAdmin.Tag',
  Tag_ByTag = 'AdminTagsAdmin.Tag_ByTag'
}

export const useAdmTags = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ListTagsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListTagsResponse) => void
): UseQueryResult<ListTagsResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmTags>[1]) => async () => {
    const data = await AdminTagsAdminApi(sdk, { namespace: input.namespace }).getTags(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListTagsResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminTagsAdmin.Tags, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateTagMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: TagRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: TagRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: TagRequest }) => {
    const data = await AdminTagsAdminApi(sdk, { namespace: input.namespace, config: input.config }).createTag(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminTagsAdmin.Tag],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteTag_ByTagMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { tag: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { tag: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { tag: string }) => {
    const data = await AdminTagsAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteTag_ByTag(input.tag)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminTagsAdmin.Tag_ByTag],
    mutationFn,
    ...options
  })
}
