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
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { DownloaderAdminApi } from '../DownloaderAdminApi.js'

import { BlockDownloadUrls } from '../../generated-definitions/BlockDownloadUrls.js'
import { BlockDownloadUrlsRequest } from '../../generated-definitions/BlockDownloadUrlsRequest.js'

export enum Key_DownloaderAdmin {
  BlockUrl_ByBuildId = 'Buildinfo.DownloaderAdmin.BlockUrl_ByBuildId'
}

/**
 * This API is used to Generate Download URLs for the requested blocks inside the specified buildId.&lt;br/&gt;The download URL generation may returns Signed URL or Public URL, depends on service configurations.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DownloaderAdmin.BlockUrl_ByBuildId, input]
 * }
 * ```
 */
export const useDownloaderAdminApi_CreateBlockUrl_ByBuildIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BlockDownloadUrls, AxiosError<ApiError>, SdkSetConfigParam & { buildId: string; data: BlockDownloadUrlsRequest }>,
    'mutationKey'
  >,
  callback?: (data: BlockDownloadUrls) => void
): UseMutationResult<BlockDownloadUrls, AxiosError<ApiError>, SdkSetConfigParam & { buildId: string; data: BlockDownloadUrlsRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { buildId: string; data: BlockDownloadUrlsRequest }) => {
    const response = await DownloaderAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createBlockUrl_ByBuildId(input.buildId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DownloaderAdmin.BlockUrl_ByBuildId],
    mutationFn,
    ...options
  })
}
