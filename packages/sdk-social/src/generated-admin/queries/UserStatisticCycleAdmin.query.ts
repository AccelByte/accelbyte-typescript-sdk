/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { UserStatisticCycleAdminApi } from '../UserStatisticCycleAdminApi.js'

import { UserStatCycleItemPagingSlicedResult } from '../../generated-definitions/UserStatCycleItemPagingSlicedResult.js'

export enum Key_UserStatisticCycleAdmin {
  StatCycleitems_ByUserId_ByCycleId = 'Social.UserStatisticCycleAdmin.StatCycleitems_ByUserId_ByCycleId'
}

/**
 * List user&#39;s statCycleItems by statCycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle items&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticCycleAdmin.StatCycleitems_ByUserId_ByCycleId, input]
 * }
 * ```
 */
export const useUserStatisticCycleAdminApi_GetStatCycleitems_ByUserId_ByCycleId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    cycleId: string
    queryParams?: { isPublic?: boolean | null; limit?: number; offset?: number; sortBy?: string | null; statCodes?: string | null }
  },
  options?: Omit<UseQueryOptions<UserStatCycleItemPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserStatCycleItemPagingSlicedResult>) => void
): UseQueryResult<UserStatCycleItemPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useUserStatisticCycleAdminApi_GetStatCycleitems_ByUserId_ByCycleId>[1]) => async () => {
      const response = await UserStatisticCycleAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getStatCycleitems_ByUserId_ByCycleId(input.userId, input.cycleId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<UserStatCycleItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticCycleAdmin.StatCycleitems_ByUserId_ByCycleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
