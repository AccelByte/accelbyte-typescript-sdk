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
import { UserDataAdminApi } from '../UserDataAdminApi.js'

import { GetAllUserLeaderboardsResp } from '../../generated-definitions/GetAllUserLeaderboardsResp.js'

export enum Key_UserDataAdmin {
  Leaderboards_ByUserId = 'UserDataAdmin.Leaderboards_ByUserId'
}

export const useAdmLeaderboards_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { limit?: number; offset?: number; previousVersion?: number } },
  options?: Omit<UseQueryOptions<GetAllUserLeaderboardsResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetAllUserLeaderboardsResp) => void
): UseQueryResult<GetAllUserLeaderboardsResp, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmLeaderboards_ByUserId>[1]) => async () => {
    const data = await UserDataAdminApi(sdk, { namespace: input.namespace }).getLeaderboards_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GetAllUserLeaderboardsResp, AxiosError<ApiError>>({
    queryKey: [Key_UserDataAdmin.Leaderboards_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
