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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { TagsAdminApi } from '../TagsAdminApi.js'

import { PaginatedTagResponse } from '../../generated-definitions/PaginatedTagResponse.js'

export enum Key_TagsAdmin {
  Tags = 'TagsAdmin.Tags'
}

export const useAdmTags = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; name?: string | null; offset?: number; sortBy?: string | null } },
  options?: Omit<UseQueryOptions<PaginatedTagResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedTagResponse) => void
): UseQueryResult<PaginatedTagResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmTags>[1]) => async () => {
    const data = await TagsAdminApi(sdk, { namespace: input.namespace }).getTags(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedTagResponse, AxiosError<ApiError>>({
    queryKey: [Key_TagsAdmin.Tags, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
