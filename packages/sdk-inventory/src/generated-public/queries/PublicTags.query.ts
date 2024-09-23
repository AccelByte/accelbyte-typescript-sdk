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
import { PublicTagsApi } from '../PublicTagsApi.js'

import { ListTagsResp } from '../../generated-definitions/ListTagsResp.js'

export enum Key_PublicTags {
  Tags = 'Inventory.PublicTags.Tags'
}

/**
 *  This endpoint will list all tags in a namespace. The response body will be in the form of standard pagination.
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
  input: SdkSetConfigParam & {
    queryParams?: {
      limit?: number
      offset?: number
      sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
    }
  },
  options?: Omit<UseQueryOptions<ListTagsResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListTagsResp>) => void
): UseQueryResult<ListTagsResp, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicTagsApi_GetTags>[1]) => async () => {
    const response = await PublicTagsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTags(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListTagsResp, AxiosError<ApiError>>({
    queryKey: [Key_PublicTags.Tags, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
