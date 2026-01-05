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
import { PublicLikeV2Api } from '../PublicLikeV2Api.js'

import { ContentLikeRequest } from '../../generated-definitions/ContentLikeRequest.js'
import { ContentLikeResponse } from '../../generated-definitions/ContentLikeResponse.js'
import { PaginatedContentLikersResponse } from '../../generated-definitions/PaginatedContentLikersResponse.js'

export enum Key_PublicLikeV2 {
  Like_ByContentId_v2 = 'Ugc.PublicLikeV2.Like_ByContentId_v2'
}

/**
 * This endpoint will only display the list of users who performed like from v2 endpoint.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicLikeV2.Like_ByContentId_v2, input]
 * }
 * ```
 */
export const usePublicLikeV2Api_GetLike_ByContentId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { contentId: string; queryParams?: { limit?: number; offset?: number; sortBy?: string | null } },
  options?: Omit<UseQueryOptions<PaginatedContentLikersResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedContentLikersResponse>) => void
): UseQueryResult<PaginatedContentLikersResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicLikeV2Api_GetLike_ByContentId_v2>[1]) => async () => {
    const response = await PublicLikeV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getLike_ByContentId_v2(
      input.contentId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedContentLikersResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicLikeV2.Like_ByContentId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint will update like/unlike state from a content
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicLikeV2.Like_ByContentId_v2, input]
 * }
 * ```
 */
export const usePublicLikeV2Api_UpdateLike_ByContentIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ContentLikeResponse, AxiosError<ApiError>, SdkSetConfigParam & { contentId: string; data: ContentLikeRequest }>,
    'mutationKey'
  >,
  callback?: (data: ContentLikeResponse) => void
): UseMutationResult<ContentLikeResponse, AxiosError<ApiError>, SdkSetConfigParam & { contentId: string; data: ContentLikeRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { contentId: string; data: ContentLikeRequest }) => {
    const response = await PublicLikeV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateLike_ByContentId_v2(
      input.contentId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicLikeV2.Like_ByContentId_v2],
    mutationFn,
    ...options
  })
}
