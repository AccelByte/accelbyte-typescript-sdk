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
import { PublicDownloadCountV2Api } from '../PublicDownloadCountV2Api.js'

import { AddDownloadCountResponse } from '../../generated-definitions/AddDownloadCountResponse.js'
import { PaginatedContentDownloaderResponse } from '../../generated-definitions/PaginatedContentDownloaderResponse.js'

export enum Key_PublicDownloadCountV2 {
  Downloader_ByContentId_v2 = 'Ugc.PublicDownloadCountV2.Downloader_ByContentId_v2',
  Downloadcount_ByContentId_v2 = 'Ugc.PublicDownloadCountV2.Downloadcount_ByContentId_v2'
}

/**
 * This endpoint will only display the list of users who performed add download count from v2 endpoint.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicDownloadCountV2.Downloader_ByContentId_v2, input]
 * }
 * ```
 */
export const usePublicDownloadCountV2Api_GetDownloader_ByContentId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    contentId: string
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; userId?: string | null }
  },
  options?: Omit<UseQueryOptions<PaginatedContentDownloaderResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedContentDownloaderResponse>) => void
): UseQueryResult<PaginatedContentDownloaderResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePublicDownloadCountV2Api_GetDownloader_ByContentId_v2>[1]) => async () => {
      const response = await PublicDownloadCountV2Api(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getDownloader_ByContentId_v2(input.contentId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<PaginatedContentDownloaderResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicDownloadCountV2.Downloader_ByContentId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint can be used to count how many the ugc downloaded
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicDownloadCountV2.Downloadcount_ByContentId_v2, input]
 * }
 * ```
 */
export const usePublicDownloadCountV2Api_CreateDownloadcount_ByContentIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AddDownloadCountResponse, AxiosError<ApiError>, SdkSetConfigParam & { contentId: string }>,
    'mutationKey'
  >,
  callback?: (data: AddDownloadCountResponse) => void
): UseMutationResult<AddDownloadCountResponse, AxiosError<ApiError>, SdkSetConfigParam & { contentId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { contentId: string }) => {
    const response = await PublicDownloadCountV2Api(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createDownloadcount_ByContentId_v2(input.contentId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicDownloadCountV2.Downloadcount_ByContentId_v2],
    mutationFn,
    ...options
  })
}
