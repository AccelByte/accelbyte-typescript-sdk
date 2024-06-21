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
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { DownloaderAdminApi } from '../DownloaderAdminApi.js'

import { BlockDownloadUrls } from '../../generated-definitions/BlockDownloadUrls.js'
import { BlockDownloadUrlsRequest } from '../../generated-definitions/BlockDownloadUrlsRequest.js'

export enum Key_DownloaderAdmin {
  BlockUrl_ByBuildId = 'DownloaderAdmin.BlockUrl_ByBuildId'
}

export const useAdmCreateBlockUrl_ByBuildIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BlockDownloadUrls, AxiosError<ApiError>, ApiArgs & { buildId: string; data: BlockDownloadUrlsRequest }>,
    'mutationKey'
  >,
  callback?: (data: BlockDownloadUrls) => void
): UseMutationResult<BlockDownloadUrls, AxiosError<ApiError>, ApiArgs & { buildId: string; data: BlockDownloadUrlsRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { buildId: string; data: BlockDownloadUrlsRequest }) => {
    const data = await DownloaderAdminApi(sdk, { namespace: input.namespace, config: input.config }).createBlockUrl_ByBuildId(
      input.buildId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DownloaderAdmin.BlockUrl_ByBuildId],
    mutationFn,
    ...options
  })
}
