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
import { UserDataV3AdminApi } from '../UserDataV3AdminApi.js'

import { GetAllUserLeaderboardsRespV3 } from '../../generated-definitions/GetAllUserLeaderboardsRespV3.js'

export enum Key_UserDataV3Admin {
  Leaderboards_ByUserId = 'UserDataV3Admin.Leaderboards_ByUserId'
}

export const useAdmLeaderboards_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetAllUserLeaderboardsRespV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetAllUserLeaderboardsRespV3) => void
): UseQueryResult<GetAllUserLeaderboardsRespV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmLeaderboards_ByUserId>[1]) => async () => {
    const data = await UserDataV3AdminApi(sdk, { namespace: input.namespace }).getLeaderboards_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GetAllUserLeaderboardsRespV3, AxiosError<ApiError>>({
    queryKey: [Key_UserDataV3Admin.Leaderboards_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
