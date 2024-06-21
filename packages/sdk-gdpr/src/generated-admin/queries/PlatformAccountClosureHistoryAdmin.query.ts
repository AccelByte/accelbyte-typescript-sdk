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
import { PlatformAccountClosureHistoryAdminApi } from '../PlatformAccountClosureHistoryAdminApi.js'

import { UserPlatformAccountClosureHistoriesResponse } from '../../generated-definitions/UserPlatformAccountClosureHistoriesResponse.js'

export enum Key_PlatformAccountClosureHistoryAdmin {
  UsersPlatformsClosureHistories = 'PlatformAccountClosureHistoryAdmin.UsersPlatformsClosureHistories'
}

export const useAdmUsersPlatformsClosureHistories = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number; platform?: string | null; userId?: string | null } },
  options?: Omit<UseQueryOptions<UserPlatformAccountClosureHistoriesResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: UserPlatformAccountClosureHistoriesResponse) => void
): UseQueryResult<UserPlatformAccountClosureHistoriesResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmUsersPlatformsClosureHistories>[1]) => async () => {
    const data = await PlatformAccountClosureHistoryAdminApi(sdk, { namespace: input.namespace }).getUsersPlatformsClosureHistories(
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<UserPlatformAccountClosureHistoriesResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlatformAccountClosureHistoryAdmin.UsersPlatformsClosureHistories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
