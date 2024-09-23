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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { CachingApi } from '../CachingApi.js'

import { RetrieveDiffCacheResponse } from '../../generated-definitions/RetrieveDiffCacheResponse.js'

export enum Key_Caching {
  DestCacheDiff_BySourceBuildId_ByDestinationBuildId = 'Buildinfo.Caching.DestCacheDiff_BySourceBuildId_ByDestinationBuildId'
}

/**
 * This API is used to retrieve detailed diff cache.&lt;br/&gt;The response will contains list of diff cache files along with its download url.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Caching.DestCacheDiff_BySourceBuildId_ByDestinationBuildId, input]
 * }
 * ```
 */
export const useCachingApi_GetDestCacheDiff_BySourceBuildId_ByDestinationBuildId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { sourceBuildId: string; destinationBuildId: string },
  options?: Omit<UseQueryOptions<RetrieveDiffCacheResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrieveDiffCacheResponse>) => void
): UseQueryResult<RetrieveDiffCacheResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useCachingApi_GetDestCacheDiff_BySourceBuildId_ByDestinationBuildId>[1]) => async () => {
      const response = await CachingApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getDestCacheDiff_BySourceBuildId_ByDestinationBuildId(input.sourceBuildId, input.destinationBuildId)
      callback && callback(response)
      return response.data
    }

  return useQuery<RetrieveDiffCacheResponse, AxiosError<ApiError>>({
    queryKey: [Key_Caching.DestCacheDiff_BySourceBuildId_ByDestinationBuildId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
