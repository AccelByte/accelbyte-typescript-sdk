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
import { TagsAdminApi } from '../TagsAdminApi.js'

import { PaginatedTagResponse } from '../../generated-definitions/PaginatedTagResponse.js'

export enum Key_TagsAdmin {
  Tags = 'Achievement.TagsAdmin.Tags'
}

/**
 * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TagsAdmin.Tags, input]
 * }
 * ```
 */
export const useTagsAdminApi_GetTags = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; name?: string | null; offset?: number; sortBy?: string | null } },
  options?: Omit<UseQueryOptions<PaginatedTagResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedTagResponse>) => void
): UseQueryResult<PaginatedTagResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTagsAdminApi_GetTags>[1]) => async () => {
    const response = await TagsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTags(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedTagResponse, AxiosError<ApiError>>({
    queryKey: [Key_TagsAdmin.Tags, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
