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
import { UserStatisticCycleAdminApi } from '../UserStatisticCycleAdminApi.js'

import { UserStatCycleItemPagingSlicedResult } from '../../generated-definitions/UserStatCycleItemPagingSlicedResult.js'

export enum Key_UserStatisticCycleAdmin {
  StatCycleitems_ByUserId_ByCycleId = 'UserStatisticCycleAdmin.StatCycleitems_ByUserId_ByCycleId'
}

export const useAdmStatCycleitems_ByUserId_ByCycleId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    userId: string
    cycleId: string
    queryParams?: { isPublic?: boolean | null; limit?: number; offset?: number; sortBy?: string | null; statCodes?: string | null }
  },
  options?: Omit<UseQueryOptions<UserStatCycleItemPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: UserStatCycleItemPagingSlicedResult) => void
): UseQueryResult<UserStatCycleItemPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStatCycleitems_ByUserId_ByCycleId>[1]) => async () => {
    const data = await UserStatisticCycleAdminApi(sdk, { namespace: input.namespace }).getStatCycleitems_ByUserId_ByCycleId(
      input.userId,
      input.cycleId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<UserStatCycleItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticCycleAdmin.StatCycleitems_ByUserId_ByCycleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
