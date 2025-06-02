/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { UserStatisticCycleApi } from '../UserStatisticCycleApi.js'

import { UserStatCycleItemPagingSlicedResult } from '../../generated-definitions/UserStatCycleItemPagingSlicedResult.js'

export enum Key_UserStatisticCycle {
  StatCycleitemsMeUsers_ByCycleId = 'Social.UserStatisticCycle.StatCycleitemsMeUsers_ByCycleId',
  StatCycleitems_ByUserId_ByCycleId = 'Social.UserStatisticCycle.StatCycleitems_ByUserId_ByCycleId'
}

/**
 * List user&#39;s statCycleItems by statCycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle items&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticCycle.StatCycleitemsMeUsers_ByCycleId, input]
 * }
 * ```
 */
export const useUserStatisticCycleApi_GetStatCycleitemsMeUsers_ByCycleId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    cycleId: string
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; statCodes?: string[] }
  },
  options?: Omit<UseQueryOptions<UserStatCycleItemPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserStatCycleItemPagingSlicedResult>) => void
): UseQueryResult<UserStatCycleItemPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useUserStatisticCycleApi_GetStatCycleitemsMeUsers_ByCycleId>[1]) => async () => {
      const response = await UserStatisticCycleApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getStatCycleitemsMeUsers_ByCycleId(input.cycleId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<UserStatCycleItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticCycle.StatCycleitemsMeUsers_ByCycleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * List user&#39;s statCycleItems by statCycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle items&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticCycle.StatCycleitems_ByUserId_ByCycleId, input]
 * }
 * ```
 */
export const useUserStatisticCycleApi_GetStatCycleitems_ByUserId_ByCycleId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    cycleId: string
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; statCodes?: string | null }
  },
  options?: Omit<UseQueryOptions<UserStatCycleItemPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserStatCycleItemPagingSlicedResult>) => void
): UseQueryResult<UserStatCycleItemPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useUserStatisticCycleApi_GetStatCycleitems_ByUserId_ByCycleId>[1]) => async () => {
      const response = await UserStatisticCycleApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getStatCycleitems_ByUserId_ByCycleId(input.userId, input.cycleId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<UserStatCycleItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticCycle.StatCycleitems_ByUserId_ByCycleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
