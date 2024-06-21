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
import { PlatformAccountClosureAdminApi } from '../PlatformAccountClosureAdminApi.js'

import { PlatformAccountClosureHistoryInfoArray } from '../../generated-definitions/PlatformAccountClosureHistoryInfoArray.js'

export enum Key_PlatformAccountClosureAdmin {
  PlatformClosureHistory_ByUserId = 'PlatformAccountClosureAdmin.PlatformClosureHistory_ByUserId'
}

export const useAdmPlatformClosureHistory_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<PlatformAccountClosureHistoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PlatformAccountClosureHistoryInfoArray) => void
): UseQueryResult<PlatformAccountClosureHistoryInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPlatformClosureHistory_ByUserId>[1]) => async () => {
    const data = await PlatformAccountClosureAdminApi(sdk, { namespace: input.namespace }).getPlatformClosureHistory_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<PlatformAccountClosureHistoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_PlatformAccountClosureAdmin.PlatformClosureHistory_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
