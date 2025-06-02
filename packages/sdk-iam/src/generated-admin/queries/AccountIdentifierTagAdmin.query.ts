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
import { AccountIdentifierTagAdminApi } from '../AccountIdentifierTagAdminApi.js'

import { TagCreateRequestV3 } from '../../generated-definitions/TagCreateRequestV3.js'
import { TagResponse } from '../../generated-definitions/TagResponse.js'
import { TagUpdateRequestV3 } from '../../generated-definitions/TagUpdateRequestV3.js'
import { TagsGetResponseV3 } from '../../generated-definitions/TagsGetResponseV3.js'

export enum Key_AccountIdentifierTagAdmin {
  Tags_v3 = 'Iam.AccountIdentifierTagAdmin.Tags_v3',
  Tag_v3 = 'Iam.AccountIdentifierTagAdmin.Tag_v3',
  Tag_ByTagId_v3 = 'Iam.AccountIdentifierTagAdmin.Tag_ByTagId_v3'
}

/**
 * Retrieve Account Identifier Tags. This endpoint allows administrators to retrieve tags that are used to identify and categorize user accounts. Tag Name can be used for partial content search.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AccountIdentifierTagAdmin.Tags_v3, input]
 * }
 * ```
 */
export const useAccountIdentifierTagAdminApi_GetTags_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number; tagName?: string | null } },
  options?: Omit<UseQueryOptions<TagsGetResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TagsGetResponseV3>) => void
): UseQueryResult<TagsGetResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAccountIdentifierTagAdminApi_GetTags_v3>[1]) => async () => {
    const response = await AccountIdentifierTagAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTags_v3(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<TagsGetResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_AccountIdentifierTagAdmin.Tags_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create a new Account Identifier Tag for users. This endpoint allows administrators to create tags that can be used to identify and categorize user accounts.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AccountIdentifierTagAdmin.Tag_v3, input]
 * }
 * ```
 */
export const useAccountIdentifierTagAdminApi_CreateTagMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<TagResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: TagCreateRequestV3 }>, 'mutationKey'>,
  callback?: (data: TagResponse) => void
): UseMutationResult<TagResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: TagCreateRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: TagCreateRequestV3 }) => {
    const response = await AccountIdentifierTagAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createTag_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AccountIdentifierTagAdmin.Tag_v3],
    mutationFn,
    ...options
  })
}

/**
 * Delete an Account Identifier Tag. This endpoint allows administrators to delete a tag that is used to identify and categorize user accounts.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AccountIdentifierTagAdmin.Tag_ByTagId_v3, input]
 * }
 * ```
 */
export const useAccountIdentifierTagAdminApi_DeleteTag_ByTagIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { tagId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { tagId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { tagId: string }) => {
    const response = await AccountIdentifierTagAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteTag_ByTagId_v3(input.tagId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AccountIdentifierTagAdmin.Tag_ByTagId_v3],
    mutationFn,
    ...options
  })
}

/**
 * Update an existing Account Identifier Tag. This endpoint allows administrators to update the details of a tag that is used to identify and categorize user accounts.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AccountIdentifierTagAdmin.Tag_ByTagId_v3, input]
 * }
 * ```
 */
export const useAccountIdentifierTagAdminApi_UpdateTag_ByTagIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<TagResponse, AxiosError<ApiError>, SdkSetConfigParam & { tagId: string; data: TagUpdateRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: TagResponse) => void
): UseMutationResult<TagResponse, AxiosError<ApiError>, SdkSetConfigParam & { tagId: string; data: TagUpdateRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { tagId: string; data: TagUpdateRequestV3 }) => {
    const response = await AccountIdentifierTagAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateTag_ByTagId_v3(input.tagId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AccountIdentifierTagAdmin.Tag_ByTagId_v3],
    mutationFn,
    ...options
  })
}
