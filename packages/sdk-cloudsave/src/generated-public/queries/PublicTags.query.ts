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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { PublicTagsApi } from '../PublicTagsApi.js'

import { ListTagsResponse } from '../../generated-definitions/ListTagsResponse.js'

export enum Key_PublicTags {
  Tags = 'Cloudsave.PublicTags.Tags'
}

/**
 * ## Description Retrieve list of available tags by namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicTags.Tags, input]
 * }
 * ```
 */
export const usePublicTagsApi_GetTags = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ListTagsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListTagsResponse>) => void
): UseQueryResult<ListTagsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicTagsApi_GetTags>[1]) => async () => {
    const response = await PublicTagsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTags(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListTagsResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicTags.Tags, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
