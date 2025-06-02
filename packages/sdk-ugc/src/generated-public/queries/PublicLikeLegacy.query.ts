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
import { PublicLikeLegacyApi } from '../PublicLikeLegacyApi.js'

import { ContentLikeRequest } from '../../generated-definitions/ContentLikeRequest.js'
import { ContentLikeResponse } from '../../generated-definitions/ContentLikeResponse.js'
import { PaginatedContentDownloadResponse } from '../../generated-definitions/PaginatedContentDownloadResponse.js'

export enum Key_PublicLikeLegacy {
  ContentsLiked = 'Ugc.PublicLikeLegacy.ContentsLiked',
  Like_ByContentId = 'Ugc.PublicLikeLegacy.Like_ByContentId'
}

/**
 * For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses ( ) for priority. e.g: *tags=red* *tags=red&amp;animal* *tags=red|animal* *tags=red&amp;animal|wild* *tags=red&amp;(animal|wild)* The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore _ and dash - Allowed character for operator: &amp; | ( ) **Please note that value of tags query param should be URL encoded**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicLikeLegacy.ContentsLiked, input]
 * }
 * ```
 */
export const usePublicLikeLegacyApi_GetContentsLiked = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      isofficial?: boolean | null
      limit?: number
      name?: string | null
      offset?: number
      orderby?: string | null
      sortby?: string | null
      subtype?: string | null
      tags?: string[]
      type?: string | null
    }
  },
  options?: Omit<UseQueryOptions<PaginatedContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedContentDownloadResponse>) => void
): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicLikeLegacyApi_GetContentsLiked>[1]) => async () => {
    const response = await PublicLikeLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getContentsLiked(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicLikeLegacy.ContentsLiked, input],
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
 *    queryKey: [Key_PublicLikeLegacy.Like_ByContentId, input]
 * }
 * ```
 */
export const usePublicLikeLegacyApi_UpdateLike_ByContentIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ContentLikeResponse, AxiosError<ApiError>, SdkSetConfigParam & { contentId: string; data: ContentLikeRequest }>,
    'mutationKey'
  >,
  callback?: (data: ContentLikeResponse) => void
): UseMutationResult<ContentLikeResponse, AxiosError<ApiError>, SdkSetConfigParam & { contentId: string; data: ContentLikeRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { contentId: string; data: ContentLikeRequest }) => {
    const response = await PublicLikeLegacyApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateLike_ByContentId(input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicLikeLegacy.Like_ByContentId],
    mutationFn,
    ...options
  })
}
