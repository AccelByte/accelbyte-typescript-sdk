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
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { PublicDownloadCountLegacyApi } from '../PublicDownloadCountLegacyApi.js'

import { AddDownloadCountResponse } from '../../generated-definitions/AddDownloadCountResponse.js'

export enum Key_PublicDownloadCountLegacy {
  Downloadcount_ByContentId = 'Ugc.PublicDownloadCountLegacy.Downloadcount_ByContentId'
}

/**
 * This endpoint can be used to count how many the ugc downloaded
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicDownloadCountLegacy.Downloadcount_ByContentId, input]
 * }
 * ```
 */
export const usePublicDownloadCountLegacyApi_CreateDownloadcount_ByContentIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AddDownloadCountResponse, AxiosError<ApiError>, SdkSetConfigParam & { contentId: string }>,
    'mutationKey'
  >,
  callback?: (data: AddDownloadCountResponse) => void
): UseMutationResult<AddDownloadCountResponse, AxiosError<ApiError>, SdkSetConfigParam & { contentId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { contentId: string }) => {
    const response = await PublicDownloadCountLegacyApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createDownloadcount_ByContentId(input.contentId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicDownloadCountLegacy.Downloadcount_ByContentId],
    mutationFn,
    ...options
  })
}
