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
import { AdminTagAdminApi } from '../AdminTagAdminApi.js'

import { CreateTagRequest } from '../../generated-definitions/CreateTagRequest.js'
import { CreateTagResponse } from '../../generated-definitions/CreateTagResponse.js'
import { PaginatedGetTagResponse } from '../../generated-definitions/PaginatedGetTagResponse.js'

export enum Key_AdminTagAdmin {
  Tags = 'AdminTagAdmin.Tags',
  Tag = 'AdminTagAdmin.Tag',
  Tag_ByTagId = 'AdminTagAdmin.Tag_ByTagId'
}

export const useAdmTags = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedGetTagResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedGetTagResponse) => void
): UseQueryResult<PaginatedGetTagResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmTags>[1]) => async () => {
    const data = await AdminTagAdminApi(sdk, { namespace: input.namespace }).getTags(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedGetTagResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminTagAdmin.Tags, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateTagMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<CreateTagResponse, AxiosError<ApiError>, ApiArgs & { data: CreateTagRequest }>, 'mutationKey'>,
  callback?: (data: CreateTagResponse) => void
): UseMutationResult<CreateTagResponse, AxiosError<ApiError>, ApiArgs & { data: CreateTagRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateTagRequest }) => {
    const data = await AdminTagAdminApi(sdk, { namespace: input.namespace, config: input.config }).createTag(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminTagAdmin.Tag],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteTag_ByTagIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { tagId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { tagId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { tagId: string }) => {
    const data = await AdminTagAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteTag_ByTagId(input.tagId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminTagAdmin.Tag_ByTagId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateTag_ByTagIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<CreateTagResponse, AxiosError<ApiError>, ApiArgs & { tagId: string; data: CreateTagRequest }>,
    'mutationKey'
  >,
  callback?: (data: CreateTagResponse) => void
): UseMutationResult<CreateTagResponse, AxiosError<ApiError>, ApiArgs & { tagId: string; data: CreateTagRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { tagId: string; data: CreateTagRequest }) => {
    const data = await AdminTagAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateTag_ByTagId(
      input.tagId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminTagAdmin.Tag_ByTagId],
    mutationFn,
    ...options
  })
}
