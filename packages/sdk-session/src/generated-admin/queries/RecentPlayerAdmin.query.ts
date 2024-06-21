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
import { RecentPlayerAdminApi } from '../RecentPlayerAdminApi.js'

import { RecentPlayerQueryResponse } from '../../generated-definitions/RecentPlayerQueryResponse.js'

export enum Key_RecentPlayerAdmin {
  RecentPlayer = 'RecentPlayerAdmin.RecentPlayer',
  RecentTeamPlayer = 'RecentPlayerAdmin.RecentTeamPlayer'
}

export const useAdmRecentPlayer = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; userId?: string | null } },
  options?: Omit<UseQueryOptions<RecentPlayerQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RecentPlayerQueryResponse) => void
): UseQueryResult<RecentPlayerQueryResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRecentPlayer>[1]) => async () => {
    const data = await RecentPlayerAdminApi(sdk, { namespace: input.namespace }).getRecentPlayer(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<RecentPlayerQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_RecentPlayerAdmin.RecentPlayer, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmRecentTeamPlayer = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; userId?: string | null } },
  options?: Omit<UseQueryOptions<RecentPlayerQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RecentPlayerQueryResponse) => void
): UseQueryResult<RecentPlayerQueryResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRecentTeamPlayer>[1]) => async () => {
    const data = await RecentPlayerAdminApi(sdk, { namespace: input.namespace }).getRecentTeamPlayer(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<RecentPlayerQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_RecentPlayerAdmin.RecentTeamPlayer, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
