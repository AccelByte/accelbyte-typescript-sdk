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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { PublicTagApi } from '../PublicTagApi.js'

import { PaginatedGetTagResponse } from '../../generated-definitions/PaginatedGetTagResponse.js'

export enum Key_PublicTag {
  Tags = 'Ugc.PublicTag.Tags'
}

/**
 * Get available tags paginated
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicTag.Tags, input]
 * }
 * ```
 */
export const usePublicTagApi_GetTags = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedGetTagResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedGetTagResponse>) => void
): UseQueryResult<PaginatedGetTagResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicTagApi_GetTags>[1]) => async () => {
    const response = await PublicTagApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTags(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedGetTagResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicTag.Tags, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
