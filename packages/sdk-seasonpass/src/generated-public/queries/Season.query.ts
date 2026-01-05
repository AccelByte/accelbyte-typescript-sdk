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
import { SeasonApi } from '../SeasonApi.js'

import { ClaimableUserSeasonInfo } from '../../generated-definitions/ClaimableUserSeasonInfo.js'
import { LocalizedSeasonInfo } from '../../generated-definitions/LocalizedSeasonInfo.js'

export enum Key_Season {
  SeasonsCurrent = 'Seasonpass.Season.SeasonsCurrent',
  SeasonsCurrentData_ByUserId = 'Seasonpass.Season.SeasonsCurrentData_ByUserId',
  Data_ByUserId_BySeasonId = 'Seasonpass.Season.Data_ByUserId_BySeasonId'
}

/**
 * This API is used to get current published season, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: localized season data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Season.SeasonsCurrent, input]
 * }
 * ```
 */
export const useSeasonApi_GetSeasonsCurrent = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { language?: string | null } },
  options?: Omit<UseQueryOptions<LocalizedSeasonInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<LocalizedSeasonInfo>) => void
): UseQueryResult<LocalizedSeasonInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSeasonApi_GetSeasonsCurrent>[1]) => async () => {
    const response = await SeasonApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getSeasonsCurrent(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<LocalizedSeasonInfo, AxiosError<ApiError>>({
    queryKey: [Key_Season.SeasonsCurrent, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get current user season data, it will auto enroll if there&#39;s no user season but active published season exist, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Season.SeasonsCurrentData_ByUserId, input]
 * }
 * ```
 */
export const useSeasonApi_GetSeasonsCurrentData_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<ClaimableUserSeasonInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ClaimableUserSeasonInfo>) => void
): UseQueryResult<ClaimableUserSeasonInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSeasonApi_GetSeasonsCurrentData_ByUserId>[1]) => async () => {
    const response = await SeasonApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getSeasonsCurrentData_ByUserId(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ClaimableUserSeasonInfo, AxiosError<ApiError>>({
    queryKey: [Key_Season.SeasonsCurrentData_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get user season data, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Season.Data_ByUserId_BySeasonId, input]
 * }
 * ```
 */
export const useSeasonApi_GetData_ByUserId_BySeasonId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; seasonId: string },
  options?: Omit<UseQueryOptions<ClaimableUserSeasonInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ClaimableUserSeasonInfo>) => void
): UseQueryResult<ClaimableUserSeasonInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSeasonApi_GetData_ByUserId_BySeasonId>[1]) => async () => {
    const response = await SeasonApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getData_ByUserId_BySeasonId(
      input.userId,
      input.seasonId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ClaimableUserSeasonInfo, AxiosError<ApiError>>({
    queryKey: [Key_Season.Data_ByUserId_BySeasonId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
